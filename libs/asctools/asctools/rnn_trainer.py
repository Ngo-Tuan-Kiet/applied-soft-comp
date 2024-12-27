import torch
import torch.nn as nn
from typing import List, Optional, Union, Tuple, Callable
from torch.optim import Optimizer
from torch.nn import Module
from tqdm import tqdm
from torch.utils.data import TensorDataset, DataLoader

class RNNTrainer:
    def __init__(
        self,
        model: nn.Module,
        device: str = 'cuda' if torch.cuda.is_available() else 'cpu'
    ):
        """
        Generic trainer for sequence models (RNN, LSTM, etc.)

        Args:
            model: The sequence model to train
            device: Device to use for training
        """
        self.model = model
        self.device = device
        self.model.to(device)

    def train(
        self,
        input_tensors: Union[torch.Tensor, List[torch.Tensor]],
        targets: Optional[torch.Tensor] = None,
        criterion: Optional[Module] = None,
        optimizer: Optional[Optimizer] = None,
        max_epochs: int = 1000,
        learning_rate: float = 0.01,
        batch_size: int = 32,
        teacher_forcing_ratio: float = 0.5,
        patience: int = 30,
        min_delta: float = 1e-4,
        hidden_init_func: Optional[Callable] = None,
        clip_grad_norm: Optional[float] = 1.0,
        lr_scheduler: Optional[str] = 'reduce_on_plateau',
        lr_patience: int = 5,
        lr_factor: float = 0.5
    ) -> List[float]:
        """
        Train the sequence model

        Args:
            input_tensors: Input sequence tensor(s) of shape (batch_size, seq_length, feature_size)
            targets: Target sequence of shape (batch_size, target_length, feature_size)
            criterion: Loss function, default is nn.CrossEntropyLoss()
            optimizer: Optimizer
            max_epochs: Maximum number of training epochs
            learning_rate: Learning rate for optimizer
            teacher_forcing_ratio: Probability of using teacher forcing
            patience: Number of epochs to wait for improvement before early stopping
            min_delta: Minimum change in loss to qualify as an improvement
            hidden_init_func: Function to initialize hidden state
            lr_scheduler: Learning rate scheduler type
            lr_patience: Number of epochs to wait for improvement before reducing learning rate
            lr_factor: Factor by which to reduce learning rate

        Returns:
            losses: List of losses during training
        """
        # Ensure inputs are on the correct device
        if isinstance(input_tensors, torch.Tensor):
            input_tensors = input_tensors.to(self.device)
        else:
            input_tensors = [t.to(self.device) for t in input_tensors]

        if targets is not None:
            targets = targets.to(self.device)

        # Initialize criterion and optimizer if not provided
        criterion = criterion or nn.CrossEntropyLoss()
        optimizer = optimizer or torch.optim.Adam(self.model.parameters(), lr=learning_rate)

        # Add learning rate scheduler
        scheduler = None
        if lr_scheduler == 'reduce_on_plateau':
            scheduler = torch.optim.lr_scheduler.ReduceLROnPlateau(
                optimizer, mode='min', factor=lr_factor, patience=lr_patience, verbose=True
            )

        losses = []
        best_loss = float('inf')
        patience_counter = 0

        # Create DataLoader
        if isinstance(input_tensors, torch.Tensor):
            dataset = TensorDataset(input_tensors, targets) if targets is not None else TensorDataset(input_tensors)
        else:
            # Handle multiple input tensors
            tensors = input_tensors + ([targets] if targets is not None else [])
            dataset = TensorDataset(*tensors)

        dataloader = DataLoader(dataset, batch_size=batch_size, shuffle=True)

        for epoch in range(max_epochs):
            epoch_loss = 0

            for batch in dataloader:
                if isinstance(input_tensors, torch.Tensor):
                    input_batch = batch[0]
                    target_batch = batch[1] if targets is not None else None
                else:
                    # Handle multiple input tensors
                    input_batch = batch[:len(input_tensors)]
                    target_batch = batch[-1] if targets is not None else None

                hidden = hidden_init_func() if hidden_init_func else None
                optimizer.zero_grad()

                sequence_loss = self._train_batch(
                    input_batch,
                    target_batch,
                    hidden,
                    criterion,
                    teacher_forcing_ratio
                )

                sequence_loss.backward()
                if clip_grad_norm is not None:
                    torch.nn.utils.clip_grad_norm_(self.model.parameters(), clip_grad_norm)
                optimizer.step()
                epoch_loss += sequence_loss.item()

            losses.append(epoch_loss)

            # Early stopping check
            if losses[-1] < best_loss - min_delta:
                best_loss = losses[-1]
                patience_counter = 0
            else:
                patience_counter += 1

            if patience_counter >= patience:
                print(f'Early stopping at epoch {epoch}')
                break

            # Update learning rate scheduler
            if scheduler is not None:
                scheduler.step(losses[-1])

        return losses

    def _train_batch(
        self,
        input_tensor: torch.Tensor,
        target_tensor: torch.Tensor,
        hidden: Optional[torch.Tensor],
        criterion: Module,
        teacher_forcing_ratio: float = 0.5
    ) -> torch.Tensor:
        """
        Train on sequence tasks (many-to-many, many-to-one, classification)

        Args:
            input_tensor: Input sequence of shape (batch_size, seq_length, feature_size)
            target_tensor: Target sequence of shape (batch_size, target_length, feature_size)
                         where target_length can be:
                         - seq_length for many-to-many (uses teacher forcing)
                         - 1 for many-to-one or classification (no teacher forcing)
            hidden: Optional initial hidden state
            criterion: Loss function
            teacher_forcing_ratio: Probability of using teacher forcing (only for many-to-many)
        """
        sequence_loss = 0
        batch_size = input_tensor.size(0)
        seq_length = input_tensor.size(1)
        target_length = target_tensor.size(1)

        # Initialize hidden state if needed
        hidden = self._get_hidden_state(batch_size, hidden)

        # Process the entire input sequence
        for t in range(seq_length):
            output, hidden = self.model(input_tensor[:, t], hidden)

        # For many-to-one, only use final output
        if target_length == 1:
            sequence_loss = criterion(output, target_tensor[:, 0])
        else:
            # For many-to-many, compute loss for each target timestep
            for t in range(target_length):
                sequence_loss += criterion(output, target_tensor[:, t])
                # Use teacher forcing for next input if enabled
                use_teacher_forcing = torch.rand(1).item() < teacher_forcing_ratio
                if use_teacher_forcing:
                    output, hidden = self.model(target_tensor[:, t], hidden)
                else:
                    output, hidden = self.model(output, hidden)

        return sequence_loss

    def _get_hidden_state(
        self,
        batch_size: int,
        hidden: Optional[torch.Tensor],
        hidden_init_func: Optional[Callable] = None
    ) -> torch.Tensor:
        """Initialize or return hidden state."""
        if hidden is not None:
            return hidden
        if hidden_init_func:
            return hidden_init_func()
        return self.model.initHidden(batch_size)

    def _setup_scheduler(
        self,
        optimizer: Optimizer,
        scheduler_type: str,
        lr_factor: float,
        lr_patience: int
    ) -> Optional[torch.optim.lr_scheduler._LRScheduler]:
        """Setup learning rate scheduler."""
        if scheduler_type == 'reduce_on_plateau':
            return torch.optim.lr_scheduler.ReduceLROnPlateau(
                optimizer, mode='min', factor=lr_factor,
                patience=lr_patience, verbose=True
            )
        return None