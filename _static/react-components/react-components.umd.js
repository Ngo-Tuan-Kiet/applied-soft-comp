(function(z,A){typeof exports=="object"&&typeof module<"u"?A(exports,require("react"),require("recharts"),require("react-dom")):typeof define=="function"&&define.amd?define(["exports","react","recharts","react-dom"],A):(z=typeof globalThis<"u"?globalThis:z||self,A(z.ReactComponents={},z.React,z.Recharts))})(this,function(z,A,X){"use strict";function Rt(t){const r=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(t){for(const n in t)if(n!=="default"){const o=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(r,n,o.get?o:{enumerable:!0,get:()=>t[n]})}}return r.default=t,Object.freeze(r)}const f=Rt(A);var Ie={exports:{}},re={},Me;function jt(){if(Me)return re;Me=1;/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */return function(){var t=A,r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),C=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),R=Symbol.for("react.offscreen"),b=Symbol.iterator,y="@@iterator";function S(e){if(e===null||typeof e!="object")return null;var s=b&&e[b]||e[y];return typeof s=="function"?s:null}var v=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function j(e){{for(var s=arguments.length,d=new Array(s>1?s-1:0),x=1;x<s;x++)d[x-1]=arguments[x];T("error",e,d)}}function T(e,s,d){{var x=v.ReactDebugCurrentFrame,P=x.getStackAddendum();P!==""&&(s+="%s",d=d.concat([P]));var _=d.map(function(E){return String(E)});_.unshift("Warning: "+s),Function.prototype.apply.call(console[e],console,_)}}var k=!1,B=!1,ne=!1,oe=!1,Re=!1,le;le=Symbol.for("react.module.reference");function q(e){return!!(typeof e=="string"||typeof e=="function"||e===o||e===l||Re||e===i||e===g||e===C||oe||e===R||k||B||ne||typeof e=="object"&&e!==null&&(e.$$typeof===m||e.$$typeof===p||e.$$typeof===a||e.$$typeof===u||e.$$typeof===h||e.$$typeof===le||e.getModuleId!==void 0))}function I(e,s,d){var x=e.displayName;if(x)return x;var P=s.displayName||s.name||"";return P!==""?d+"("+P+")":d}function W(e){return e.displayName||"Context"}function M(e){if(e==null)return null;if(typeof e.tag=="number"&&j("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case o:return"Fragment";case n:return"Portal";case l:return"Profiler";case i:return"StrictMode";case g:return"Suspense";case C:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case u:var s=e;return W(s)+".Consumer";case a:var d=e;return W(d._context)+".Provider";case h:return I(e,e.render,"ForwardRef");case p:var x=e.displayName||null;return x!==null?x:M(e.type)||"Memo";case m:{var P=e,_=P._payload,E=P._init;try{return M(E(_))}catch{return null}}}return null}var L=Object.assign,K=0,H,Y,$,ie,st,at,ct;function lt(){}lt.__reactDisabledLog=!0;function sr(){{if(K===0){H=console.log,Y=console.info,$=console.warn,ie=console.error,st=console.group,at=console.groupCollapsed,ct=console.groupEnd;var e={configurable:!0,enumerable:!0,value:lt,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}K++}}function ar(){{if(K--,K===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:L({},e,{value:H}),info:L({},e,{value:Y}),warn:L({},e,{value:$}),error:L({},e,{value:ie}),group:L({},e,{value:st}),groupCollapsed:L({},e,{value:at}),groupEnd:L({},e,{value:ct})})}K<0&&j("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var je=v.ReactCurrentDispatcher,Pe;function ue(e,s,d){{if(Pe===void 0)try{throw Error()}catch(P){var x=P.stack.trim().match(/\n( *(at )?)/);Pe=x&&x[1]||""}return`
`+Pe+e}}var _e=!1,de;{var cr=typeof WeakMap=="function"?WeakMap:Map;de=new cr}function ut(e,s){if(!e||_e)return"";{var d=de.get(e);if(d!==void 0)return d}var x;_e=!0;var P=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var _;_=je.current,je.current=null,sr();try{if(s){var E=function(){throw Error()};if(Object.defineProperty(E.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(E,[])}catch(V){x=V}Reflect.construct(e,[],E)}else{try{E.call()}catch(V){x=V}e.call(E.prototype)}}else{try{throw Error()}catch(V){x=V}e()}}catch(V){if(V&&x&&typeof V.stack=="string"){for(var w=V.stack.split(`
`),N=x.stack.split(`
`),O=w.length-1,D=N.length-1;O>=1&&D>=0&&w[O]!==N[D];)D--;for(;O>=1&&D>=0;O--,D--)if(w[O]!==N[D]){if(O!==1||D!==1)do if(O--,D--,D<0||w[O]!==N[D]){var F=`
`+w[O].replace(" at new "," at ");return e.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",e.displayName)),typeof e=="function"&&de.set(e,F),F}while(O>=1&&D>=0);break}}}finally{_e=!1,je.current=_,ar(),Error.prepareStackTrace=P}var te=e?e.displayName||e.name:"",J=te?ue(te):"";return typeof e=="function"&&de.set(e,J),J}function lr(e,s,d){return ut(e,!1)}function ur(e){var s=e.prototype;return!!(s&&s.isReactComponent)}function fe(e,s,d){if(e==null)return"";if(typeof e=="function")return ut(e,ur(e));if(typeof e=="string")return ue(e);switch(e){case g:return ue("Suspense");case C:return ue("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case h:return lr(e.render);case p:return fe(e.type,s,d);case m:{var x=e,P=x._payload,_=x._init;try{return fe(_(P),s,d)}catch{}}}return""}var se=Object.prototype.hasOwnProperty,dt={},ft=v.ReactDebugCurrentFrame;function pe(e){if(e){var s=e._owner,d=fe(e.type,e._source,s?s.type:null);ft.setExtraStackFrame(d)}else ft.setExtraStackFrame(null)}function dr(e,s,d,x,P){{var _=Function.call.bind(se);for(var E in e)if(_(e,E)){var w=void 0;try{if(typeof e[E]!="function"){var N=Error((x||"React class")+": "+d+" type `"+E+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[E]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw N.name="Invariant Violation",N}w=e[E](s,E,x,d,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(O){w=O}w&&!(w instanceof Error)&&(pe(P),j("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",x||"React class",d,E,typeof w),pe(null)),w instanceof Error&&!(w.message in dt)&&(dt[w.message]=!0,pe(P),j("Failed %s type: %s",d,w.message),pe(null))}}}var fr=Array.isArray;function ke(e){return fr(e)}function pr(e){{var s=typeof Symbol=="function"&&Symbol.toStringTag,d=s&&e[Symbol.toStringTag]||e.constructor.name||"Object";return d}}function hr(e){try{return pt(e),!1}catch{return!0}}function pt(e){return""+e}function ht(e){if(hr(e))return j("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",pr(e)),pt(e)}var mt=v.ReactCurrentOwner,mr={key:!0,ref:!0,__self:!0,__source:!0},vt,xt;function vr(e){if(se.call(e,"ref")){var s=Object.getOwnPropertyDescriptor(e,"ref").get;if(s&&s.isReactWarning)return!1}return e.ref!==void 0}function xr(e){if(se.call(e,"key")){var s=Object.getOwnPropertyDescriptor(e,"key").get;if(s&&s.isReactWarning)return!1}return e.key!==void 0}function gr(e,s){typeof e.ref=="string"&&mt.current}function br(e,s){{var d=function(){vt||(vt=!0,j("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",s))};d.isReactWarning=!0,Object.defineProperty(e,"key",{get:d,configurable:!0})}}function yr(e,s){{var d=function(){xt||(xt=!0,j("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",s))};d.isReactWarning=!0,Object.defineProperty(e,"ref",{get:d,configurable:!0})}}var Sr=function(e,s,d,x,P,_,E){var w={$$typeof:r,type:e,key:s,ref:d,props:E,_owner:_};return w._store={},Object.defineProperty(w._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(w,"_self",{configurable:!1,enumerable:!1,writable:!1,value:x}),Object.defineProperty(w,"_source",{configurable:!1,enumerable:!1,writable:!1,value:P}),Object.freeze&&(Object.freeze(w.props),Object.freeze(w)),w};function wr(e,s,d,x,P){{var _,E={},w=null,N=null;d!==void 0&&(ht(d),w=""+d),xr(s)&&(ht(s.key),w=""+s.key),vr(s)&&(N=s.ref,gr(s,P));for(_ in s)se.call(s,_)&&!mr.hasOwnProperty(_)&&(E[_]=s[_]);if(e&&e.defaultProps){var O=e.defaultProps;for(_ in O)E[_]===void 0&&(E[_]=O[_])}if(w||N){var D=typeof e=="function"?e.displayName||e.name||"Unknown":e;w&&br(E,D),N&&yr(E,D)}return Sr(e,w,N,P,x,mt.current,E)}}var Te=v.ReactCurrentOwner,gt=v.ReactDebugCurrentFrame;function ee(e){if(e){var s=e._owner,d=fe(e.type,e._source,s?s.type:null);gt.setExtraStackFrame(d)}else gt.setExtraStackFrame(null)}var Oe;Oe=!1;function De(e){return typeof e=="object"&&e!==null&&e.$$typeof===r}function bt(){{if(Te.current){var e=M(Te.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function Cr(e){return""}var yt={};function Er(e){{var s=bt();if(!s){var d=typeof e=="string"?e:e.displayName||e.name;d&&(s=`

Check the top-level render call using <`+d+">.")}return s}}function St(e,s){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var d=Er(s);if(yt[d])return;yt[d]=!0;var x="";e&&e._owner&&e._owner!==Te.current&&(x=" It was passed a child from "+M(e._owner.type)+"."),ee(e),j('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',d,x),ee(null)}}function wt(e,s){{if(typeof e!="object")return;if(ke(e))for(var d=0;d<e.length;d++){var x=e[d];De(x)&&St(x,s)}else if(De(e))e._store&&(e._store.validated=!0);else if(e){var P=S(e);if(typeof P=="function"&&P!==e.entries)for(var _=P.call(e),E;!(E=_.next()).done;)De(E.value)&&St(E.value,s)}}}function Rr(e){{var s=e.type;if(s==null||typeof s=="string")return;var d;if(typeof s=="function")d=s.propTypes;else if(typeof s=="object"&&(s.$$typeof===h||s.$$typeof===p))d=s.propTypes;else return;if(d){var x=M(s);dr(d,e.props,"prop",x,e)}else if(s.PropTypes!==void 0&&!Oe){Oe=!0;var P=M(s);j("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",P||"Unknown")}typeof s.getDefaultProps=="function"&&!s.getDefaultProps.isReactClassApproved&&j("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function jr(e){{for(var s=Object.keys(e.props),d=0;d<s.length;d++){var x=s[d];if(x!=="children"&&x!=="key"){ee(e),j("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",x),ee(null);break}}e.ref!==null&&(ee(e),j("Invalid attribute `ref` supplied to `React.Fragment`."),ee(null))}}var Ct={};function Et(e,s,d,x,P,_){{var E=q(e);if(!E){var w="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(w+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var N=Cr();N?w+=N:w+=bt();var O;e===null?O="null":ke(e)?O="array":e!==void 0&&e.$$typeof===r?(O="<"+(M(e.type)||"Unknown")+" />",w=" Did you accidentally export a JSX literal instead of a component?"):O=typeof e,j("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",O,w)}var D=wr(e,s,d,P,_);if(D==null)return D;if(E){var F=s.children;if(F!==void 0)if(x)if(ke(F)){for(var te=0;te<F.length;te++)wt(F[te],e);Object.freeze&&Object.freeze(F)}else j("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else wt(F,e)}if(se.call(s,"key")){var J=M(e),V=Object.keys(s).filter(function(Dr){return Dr!=="key"}),Ae=V.length>0?"{key: someKey, "+V.join(": ..., ")+": ...}":"{key: someKey}";if(!Ct[J+Ae]){var Or=V.length>0?"{"+V.join(": ..., ")+": ...}":"{}";j(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,Ae,J,Or,J),Ct[J+Ae]=!0}}return e===o?jr(D):Rr(D),D}}function Pr(e,s,d){return Et(e,s,d,!0)}function _r(e,s,d){return Et(e,s,d,!1)}var kr=_r,Tr=Pr;re.Fragment=o,re.jsx=kr,re.jsxs=Tr}(),re}Ie.exports=jt();var c=Ie.exports;function Ne(t,[r,n]){return Math.min(n,Math.max(r,t))}function G(t,r,{checkForDefaultPrevented:n=!0}={}){return function(i){if(t==null||t(i),n===!1||!i.defaultPrevented)return r==null?void 0:r(i)}}function Ve(t,r){if(typeof t=="function")return t(r);t!=null&&(t.current=r)}function Fe(...t){return r=>{let n=!1;const o=t.map(i=>{const l=Ve(i,r);return!n&&typeof l=="function"&&(n=!0),l});if(n)return()=>{for(let i=0;i<o.length;i++){const l=o[i];typeof l=="function"?l():Ve(t[i],null)}}}}function U(...t){return f.useCallback(Fe(...t),t)}function he(t,r=[]){let n=[];function o(l,a){const u=f.createContext(a),h=n.length;n=[...n,a];const g=p=>{var v;const{scope:m,children:R,...b}=p,y=((v=m==null?void 0:m[t])==null?void 0:v[h])||u,S=f.useMemo(()=>b,Object.values(b));return c.jsx(y.Provider,{value:S,children:R})};g.displayName=l+"Provider";function C(p,m){var y;const R=((y=m==null?void 0:m[t])==null?void 0:y[h])||u,b=f.useContext(R);if(b)return b;if(a!==void 0)return a;throw new Error(`\`${p}\` must be used within \`${l}\``)}return[g,C]}const i=()=>{const l=n.map(a=>f.createContext(a));return function(u){const h=(u==null?void 0:u[t])||l;return f.useMemo(()=>({[`__scope${t}`]:{...u,[t]:h}}),[u,h])}};return i.scopeName=t,[o,Pt(i,...r)]}function Pt(...t){const r=t[0];if(t.length===1)return r;const n=()=>{const o=t.map(i=>({useScope:i(),scopeName:i.scopeName}));return function(l){const a=o.reduce((u,{useScope:h,scopeName:g})=>{const p=h(l)[`__scope${g}`];return{...u,...p}},{});return f.useMemo(()=>({[`__scope${r.scopeName}`]:a}),[a])}};return n.scopeName=r.scopeName,n}function We(t){const r=f.useRef(t);return f.useEffect(()=>{r.current=t}),f.useMemo(()=>(...n)=>{var o;return(o=r.current)==null?void 0:o.call(r,...n)},[])}function Le({prop:t,defaultProp:r,onChange:n=()=>{}}){const[o,i]=_t({defaultProp:r,onChange:n}),l=t!==void 0,a=l?t:o,u=We(n),h=f.useCallback(g=>{if(l){const p=typeof g=="function"?g(t):g;p!==t&&u(p)}else i(g)},[l,t,i,u]);return[a,h]}function _t({defaultProp:t,onChange:r}){const n=f.useState(t),[o]=n,i=f.useRef(o),l=We(r);return f.useEffect(()=>{i.current!==o&&(l(o),i.current=o)},[o,i,l]),n}var kt=f.createContext(void 0);function Tt(t){const r=f.useContext(kt);return t||r||"ltr"}function $e(t){const r=f.useRef({value:t,previous:t});return f.useMemo(()=>(r.current.value!==t&&(r.current.previous=r.current.value,r.current.value=t),r.current.previous),[t])}var Ot=globalThis!=null&&globalThis.document?f.useLayoutEffect:()=>{};function Be(t){const[r,n]=f.useState(void 0);return Ot(()=>{if(t){n({width:t.offsetWidth,height:t.offsetHeight});const o=new ResizeObserver(i=>{if(!Array.isArray(i)||!i.length)return;const l=i[0];let a,u;if("borderBoxSize"in l){const h=l.borderBoxSize,g=Array.isArray(h)?h[0]:h;a=g.inlineSize,u=g.blockSize}else a=t.offsetWidth,u=t.offsetHeight;n({width:a,height:u})});return o.observe(t,{box:"border-box"}),()=>o.unobserve(t)}else n(void 0)},[t]),r}var ae=f.forwardRef((t,r)=>{const{children:n,...o}=t,i=f.Children.toArray(n),l=i.find(At);if(l){const a=l.props.children,u=i.map(h=>h===l?f.Children.count(a)>1?f.Children.only(null):f.isValidElement(a)?a.props.children:null:h);return c.jsx(me,{...o,ref:r,children:f.isValidElement(a)?f.cloneElement(a,void 0,u):null})}return c.jsx(me,{...o,ref:r,children:n})});ae.displayName="Slot";var me=f.forwardRef((t,r)=>{const{children:n,...o}=t;if(f.isValidElement(n)){const i=Mt(n);return f.cloneElement(n,{...It(o,n.props),ref:r?Fe(r,i):i})}return f.Children.count(n)>1?f.Children.only(null):null});me.displayName="SlotClone";var Dt=({children:t})=>c.jsx(c.Fragment,{children:t});function At(t){return f.isValidElement(t)&&t.type===Dt}function It(t,r){const n={...r};for(const o in r){const i=t[o],l=r[o];/^on[A-Z]/.test(o)?i&&l?n[o]=(...u)=>{l(...u),i(...u)}:i&&(n[o]=i):o==="style"?n[o]={...i,...l}:o==="className"&&(n[o]=[i,l].filter(Boolean).join(" "))}return{...t,...n}}function Mt(t){var o,i;let r=(o=Object.getOwnPropertyDescriptor(t.props,"ref"))==null?void 0:o.get,n=r&&"isReactWarning"in r&&r.isReactWarning;return n?t.ref:(r=(i=Object.getOwnPropertyDescriptor(t,"ref"))==null?void 0:i.get,n=r&&"isReactWarning"in r&&r.isReactWarning,n?t.props.ref:t.props.ref||t.ref)}var Nt=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],Z=Nt.reduce((t,r)=>{const n=f.forwardRef((o,i)=>{const{asChild:l,...a}=o,u=l?ae:r;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),c.jsx(u,{...a,ref:i})});return n.displayName=`Primitive.${r}`,{...t,[r]:n}},{});function Vt(t){const r=t+"CollectionProvider",[n,o]=he(r),[i,l]=n(r,{collectionRef:{current:null},itemMap:new Map}),a=R=>{const{scope:b,children:y}=R,S=A.useRef(null),v=A.useRef(new Map).current;return c.jsx(i,{scope:b,itemMap:v,collectionRef:S,children:y})};a.displayName=r;const u=t+"CollectionSlot",h=A.forwardRef((R,b)=>{const{scope:y,children:S}=R,v=l(u,y),j=U(b,v.collectionRef);return c.jsx(ae,{ref:j,children:S})});h.displayName=u;const g=t+"CollectionItemSlot",C="data-radix-collection-item",p=A.forwardRef((R,b)=>{const{scope:y,children:S,...v}=R,j=A.useRef(null),T=U(b,j),k=l(g,y);return A.useEffect(()=>(k.itemMap.set(j,{ref:j,...v}),()=>void k.itemMap.delete(j))),c.jsx(ae,{[C]:"",ref:T,children:S})});p.displayName=g;function m(R){const b=l(t+"CollectionConsumer",R);return A.useCallback(()=>{const S=b.collectionRef.current;if(!S)return[];const v=Array.from(S.querySelectorAll(`[${C}]`));return Array.from(b.itemMap.values()).sort((k,B)=>v.indexOf(k.ref.current)-v.indexOf(B.ref.current))},[b.collectionRef,b.itemMap])}return[{Provider:a,Slot:h,ItemSlot:p},m,o]}var Ke=["PageUp","PageDown"],Ye=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],ze={"from-left":["Home","PageDown","ArrowDown","ArrowLeft"],"from-right":["Home","PageDown","ArrowDown","ArrowRight"],"from-bottom":["Home","PageDown","ArrowDown","ArrowLeft"],"from-top":["Home","PageDown","ArrowUp","ArrowLeft"]},Q="Slider",[ve,Ft,Wt]=Vt(Q),[Ue,Ar]=he(Q,[Wt]),[Lt,ce]=Ue(Q),He=f.forwardRef((t,r)=>{const{name:n,min:o=0,max:i=100,step:l=1,orientation:a="horizontal",disabled:u=!1,minStepsBetweenThumbs:h=0,defaultValue:g=[o],value:C,onValueChange:p=()=>{},onValueCommit:m=()=>{},inverted:R=!1,form:b,...y}=t,S=f.useRef(new Set),v=f.useRef(0),T=a==="horizontal"?$t:Bt,[k=[],B]=Le({prop:C,defaultProp:g,onChange:I=>{var M;(M=[...S.current][v.current])==null||M.focus(),p(I)}}),ne=f.useRef(k);function oe(I){const W=Ht(k,I);q(I,W)}function Re(I){q(I,v.current)}function le(){const I=ne.current[v.current];k[v.current]!==I&&m(k)}function q(I,W,{commit:M}={commit:!1}){const L=Jt(l),K=Zt(Math.round((I-o)/l)*l+o,L),H=Ne(K,[o,i]);B((Y=[])=>{const $=zt(Y,H,W);if(qt($,h*l)){v.current=$.indexOf(H);const ie=String($)!==String(Y);return ie&&M&&m($),ie?$:Y}else return Y})}return c.jsx(Lt,{scope:t.__scopeSlider,name:n,disabled:u,min:o,max:i,valueIndexToChangeRef:v,thumbs:S.current,values:k,orientation:a,form:b,children:c.jsx(ve.Provider,{scope:t.__scopeSlider,children:c.jsx(ve.Slot,{scope:t.__scopeSlider,children:c.jsx(T,{"aria-disabled":u,"data-disabled":u?"":void 0,...y,ref:r,onPointerDown:G(y.onPointerDown,()=>{u||(ne.current=k)}),min:o,max:i,inverted:R,onSlideStart:u?void 0:oe,onSlideMove:u?void 0:Re,onSlideEnd:u?void 0:le,onHomeKeyDown:()=>!u&&q(o,0,{commit:!0}),onEndKeyDown:()=>!u&&q(i,k.length-1,{commit:!0}),onStepKeyDown:({event:I,direction:W})=>{if(!u){const K=Ke.includes(I.key)||I.shiftKey&&Ye.includes(I.key)?10:1,H=v.current,Y=k[H],$=l*K*W;q(Y+$,H,{commit:!0})}}})})})})});He.displayName=Q;var[Xe,Ge]=Ue(Q,{startEdge:"left",endEdge:"right",size:"width",direction:1}),$t=f.forwardRef((t,r)=>{const{min:n,max:o,dir:i,inverted:l,onSlideStart:a,onSlideMove:u,onSlideEnd:h,onStepKeyDown:g,...C}=t,[p,m]=f.useState(null),R=U(r,T=>m(T)),b=f.useRef(void 0),y=Tt(i),S=y==="ltr",v=S&&!l||!S&&l;function j(T){const k=b.current||p.getBoundingClientRect(),B=[0,k.width],oe=be(B,v?[n,o]:[o,n]);return b.current=k,oe(T-k.left)}return c.jsx(Xe,{scope:t.__scopeSlider,startEdge:v?"left":"right",endEdge:v?"right":"left",direction:v?1:-1,size:"width",children:c.jsx(qe,{dir:y,"data-orientation":"horizontal",...C,ref:R,style:{...C.style,"--radix-slider-thumb-transform":"translateX(-50%)"},onSlideStart:T=>{const k=j(T.clientX);a==null||a(k)},onSlideMove:T=>{const k=j(T.clientX);u==null||u(k)},onSlideEnd:()=>{b.current=void 0,h==null||h()},onStepKeyDown:T=>{const B=ze[v?"from-left":"from-right"].includes(T.key);g==null||g({event:T,direction:B?-1:1})}})})}),Bt=f.forwardRef((t,r)=>{const{min:n,max:o,inverted:i,onSlideStart:l,onSlideMove:a,onSlideEnd:u,onStepKeyDown:h,...g}=t,C=f.useRef(null),p=U(r,C),m=f.useRef(void 0),R=!i;function b(y){const S=m.current||C.current.getBoundingClientRect(),v=[0,S.height],T=be(v,R?[o,n]:[n,o]);return m.current=S,T(y-S.top)}return c.jsx(Xe,{scope:t.__scopeSlider,startEdge:R?"bottom":"top",endEdge:R?"top":"bottom",size:"height",direction:R?1:-1,children:c.jsx(qe,{"data-orientation":"vertical",...g,ref:p,style:{...g.style,"--radix-slider-thumb-transform":"translateY(50%)"},onSlideStart:y=>{const S=b(y.clientY);l==null||l(S)},onSlideMove:y=>{const S=b(y.clientY);a==null||a(S)},onSlideEnd:()=>{m.current=void 0,u==null||u()},onStepKeyDown:y=>{const v=ze[R?"from-bottom":"from-top"].includes(y.key);h==null||h({event:y,direction:v?-1:1})}})})}),qe=f.forwardRef((t,r)=>{const{__scopeSlider:n,onSlideStart:o,onSlideMove:i,onSlideEnd:l,onHomeKeyDown:a,onEndKeyDown:u,onStepKeyDown:h,...g}=t,C=ce(Q,n);return c.jsx(Z.span,{...g,ref:r,onKeyDown:G(t.onKeyDown,p=>{p.key==="Home"?(a(p),p.preventDefault()):p.key==="End"?(u(p),p.preventDefault()):Ke.concat(Ye).includes(p.key)&&(h(p),p.preventDefault())}),onPointerDown:G(t.onPointerDown,p=>{const m=p.target;m.setPointerCapture(p.pointerId),p.preventDefault(),C.thumbs.has(m)?m.focus():o(p)}),onPointerMove:G(t.onPointerMove,p=>{p.target.hasPointerCapture(p.pointerId)&&i(p)}),onPointerUp:G(t.onPointerUp,p=>{const m=p.target;m.hasPointerCapture(p.pointerId)&&(m.releasePointerCapture(p.pointerId),l(p))})})}),Je="SliderTrack",Ze=f.forwardRef((t,r)=>{const{__scopeSlider:n,...o}=t,i=ce(Je,n);return c.jsx(Z.span,{"data-disabled":i.disabled?"":void 0,"data-orientation":i.orientation,...o,ref:r})});Ze.displayName=Je;var xe="SliderRange",Qe=f.forwardRef((t,r)=>{const{__scopeSlider:n,...o}=t,i=ce(xe,n),l=Ge(xe,n),a=f.useRef(null),u=U(r,a),h=i.values.length,g=i.values.map(m=>tt(m,i.min,i.max)),C=h>1?Math.min(...g):0,p=100-Math.max(...g);return c.jsx(Z.span,{"data-orientation":i.orientation,"data-disabled":i.disabled?"":void 0,...o,ref:u,style:{...t.style,[l.startEdge]:C+"%",[l.endEdge]:p+"%"}})});Qe.displayName=xe;var ge="SliderThumb",et=f.forwardRef((t,r)=>{const n=Ft(t.__scopeSlider),[o,i]=f.useState(null),l=U(r,u=>i(u)),a=f.useMemo(()=>o?n().findIndex(u=>u.ref.current===o):-1,[n,o]);return c.jsx(Kt,{...t,ref:l,index:a})}),Kt=f.forwardRef((t,r)=>{const{__scopeSlider:n,index:o,name:i,...l}=t,a=ce(ge,n),u=Ge(ge,n),[h,g]=f.useState(null),C=U(r,j=>g(j)),p=h?a.form||!!h.closest("form"):!0,m=Be(h),R=a.values[o],b=R===void 0?0:tt(R,a.min,a.max),y=Ut(o,a.values.length),S=m==null?void 0:m[u.size],v=S?Xt(S,b,u.direction):0;return f.useEffect(()=>{if(h)return a.thumbs.add(h),()=>{a.thumbs.delete(h)}},[h,a.thumbs]),c.jsxs("span",{style:{transform:"var(--radix-slider-thumb-transform)",position:"absolute",[u.startEdge]:`calc(${b}% + ${v}px)`},children:[c.jsx(ve.ItemSlot,{scope:t.__scopeSlider,children:c.jsx(Z.span,{role:"slider","aria-label":t["aria-label"]||y,"aria-valuemin":a.min,"aria-valuenow":R,"aria-valuemax":a.max,"aria-orientation":a.orientation,"data-orientation":a.orientation,"data-disabled":a.disabled?"":void 0,tabIndex:a.disabled?void 0:0,...l,ref:C,style:R===void 0?{display:"none"}:t.style,onFocus:G(t.onFocus,()=>{a.valueIndexToChangeRef.current=o})})}),p&&c.jsx(Yt,{name:i??(a.name?a.name+(a.values.length>1?"[]":""):void 0),form:a.form,value:R},o)]})});et.displayName=ge;var Yt=t=>{const{value:r,...n}=t,o=f.useRef(null),i=$e(r);return f.useEffect(()=>{const l=o.current,a=window.HTMLInputElement.prototype,h=Object.getOwnPropertyDescriptor(a,"value").set;if(i!==r&&h){const g=new Event("input",{bubbles:!0});h.call(l,r),l.dispatchEvent(g)}},[i,r]),c.jsx("input",{style:{display:"none"},...n,ref:o,defaultValue:r})};function zt(t=[],r,n){const o=[...t];return o[n]=r,o.sort((i,l)=>i-l)}function tt(t,r,n){const l=100/(n-r)*(t-r);return Ne(l,[0,100])}function Ut(t,r){return r>2?`Value ${t+1} of ${r}`:r===2?["Minimum","Maximum"][t]:void 0}function Ht(t,r){if(t.length===1)return 0;const n=t.map(i=>Math.abs(i-r)),o=Math.min(...n);return n.indexOf(o)}function Xt(t,r,n){const o=t/2,l=be([0,50],[0,o]);return(o-l(r)*n)*n}function Gt(t){return t.slice(0,-1).map((r,n)=>t[n+1]-r)}function qt(t,r){if(r>0){const n=Gt(t);return Math.min(...n)>=r}return!0}function be(t,r){return n=>{if(t[0]===t[1]||r[0]===r[1])return r[0];const o=(r[1]-r[0])/(t[1]-t[0]);return r[0]+o*(n-t[0])}}function Jt(t){return(String(t).split(".")[1]||"").length}function Zt(t,r){const n=Math.pow(10,r);return Math.round(t*n)/n}var ye=He,Se=Ze,we=Qe,Ce=et,Ee="Switch",[Qt,Ir]=he(Ee),[er,tr]=Qt(Ee),rt=f.forwardRef((t,r)=>{const{__scopeSwitch:n,name:o,checked:i,defaultChecked:l,required:a,disabled:u,value:h="on",onCheckedChange:g,form:C,...p}=t,[m,R]=f.useState(null),b=U(r,T=>R(T)),y=f.useRef(!1),S=m?C||!!m.closest("form"):!0,[v=!1,j]=Le({prop:i,defaultProp:l,onChange:g});return c.jsxs(er,{scope:n,checked:v,disabled:u,children:[c.jsx(Z.button,{type:"button",role:"switch","aria-checked":v,"aria-required":a,"data-state":it(v),"data-disabled":u?"":void 0,disabled:u,value:h,...p,ref:b,onClick:G(t.onClick,T=>{j(k=>!k),S&&(y.current=T.isPropagationStopped(),y.current||T.stopPropagation())})}),S&&c.jsx(rr,{control:m,bubbles:!y.current,name:o,value:h,checked:v,required:a,disabled:u,form:C,style:{transform:"translateX(-100%)"}})]})});rt.displayName=Ee;var nt="SwitchThumb",ot=f.forwardRef((t,r)=>{const{__scopeSwitch:n,...o}=t,i=tr(nt,n);return c.jsx(Z.span,{"data-state":it(i.checked),"data-disabled":i.disabled?"":void 0,...o,ref:r})});ot.displayName=nt;var rr=t=>{const{control:r,checked:n,bubbles:o=!0,...i}=t,l=f.useRef(null),a=$e(n),u=Be(r);return f.useEffect(()=>{const h=l.current,g=window.HTMLInputElement.prototype,p=Object.getOwnPropertyDescriptor(g,"checked").set;if(a!==n&&p){const m=new Event("click",{bubbles:o});p.call(h,n),h.dispatchEvent(m)}},[a,n,o]),c.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:n,...i,tabIndex:-1,ref:l,style:{...t.style,...u,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function it(t){return t?"checked":"unchecked"}var nr=rt,or=ot;const ir=()=>{const[t,r]=A.useState(.5),[n,o]=A.useState(1),[i,l]=A.useState(1),[a,u]=A.useState(!1),[h,g]=A.useState([]),C="#6B4CE6",p="#1D84B5",m="#E6425E";A.useEffect(()=>{let b=[],y=i;for(let S=0;S<50;S++){const v=a?Math.tanh(t*y+n):t*y+n;b.push({time:S,input:n,output:v}),y=v}g(b)},[t,n,i,a]);const R=()=>c.jsxs("svg",{viewBox:"0 0 200 120",className:"w-full h-32",children:[c.jsx("rect",{x:"70",y:"30",width:"60",height:"40",fill:"white",stroke:C,strokeWidth:"2"}),c.jsx("text",{x:"100",y:"50",textAnchor:"middle",dominantBaseline:"middle",className:"text-sm",children:a?"tanh(h)":"h"}),c.jsx("path",{d:"M100 30 C100 0, 150 0, 150 30 L150 70 C150 100, 100 100, 100 70",fill:"none",stroke:C,strokeWidth:Math.max(Math.abs(t)*6,.5)}),c.jsx("line",{x1:"40",y1:"50",x2:"70",y2:"50",stroke:p,strokeWidth:"2",markerEnd:"url(#arrowhead-input)"}),c.jsx("text",{x:"30",y:"50",textAnchor:"middle",className:"text-xs",children:"u"}),c.jsx("line",{x1:"130",y1:"50",x2:"160",y2:"50",stroke:m,strokeWidth:"2",markerEnd:"url(#arrowhead-output)"}),c.jsx("text",{x:"170",y:"50",textAnchor:"middle",className:"text-xs",children:"y"}),c.jsxs("defs",{children:[c.jsx("marker",{id:"arrowhead-input",markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:c.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:p})}),c.jsx("marker",{id:"arrowhead-output",markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:c.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:m})})]}),c.jsxs("text",{x:"100",y:"15",textAnchor:"middle",className:"text-xs",children:["w = ",t.toFixed(2)]})]});return c.jsxs("div",{className:"p-6 space-y-6 bg-white rounded-lg shadow-md",children:[c.jsxs("div",{className:"prose max-w-none mb-4",children:[c.jsx("h2",{className:"text-xl font-bold mb-2",children:"Simple RNN"}),c.jsxs("p",{children:["Equation: ",a?"h(t) = tanh(w * h(t-1) + u)":"h(t) = w * h(t-1) + u"]}),c.jsxs("p",{children:["System behavior: |w| < 1 stable, |w| > 1 unstable ",a&&", tanh bounds output to [-1,1]"]})]}),c.jsxs("div",{className:"space-y-4",children:[c.jsxs("div",{children:[c.jsxs("h3",{className:"text-lg font-medium mb-2",children:["Initial State h(0): ",i.toFixed(2)]}),c.jsxs(ye,{value:[i],onValueChange:([b])=>l(b),min:-2,max:2,step:.1,style:{position:"relative",display:"flex",alignItems:"center",width:"200px",height:"20px"},children:[c.jsx(Se,{style:{backgroundColor:"#E6E8EC",position:"relative",flexGrow:1,height:"3px"},children:c.jsx(we,{style:{position:"absolute",backgroundColor:C,height:"100%"}})}),c.jsx(Ce,{style:{display:"block",width:"20px",height:"20px",backgroundColor:"white",boxShadow:"0 2px 4px rgba(0,0,0,0.1)",borderRadius:"10px",cursor:"pointer"}})]})]}),c.jsxs("div",{children:[c.jsxs("h3",{className:"text-lg font-medium mb-2",children:["Recurrent Weight: ",t.toFixed(2)]}),c.jsxs(ye,{value:[t],onValueChange:([b])=>r(b),min:-2,max:2,step:.1,style:{position:"relative",display:"flex",alignItems:"center",width:"200px",height:"20px"},children:[c.jsx(Se,{style:{backgroundColor:"#E6E8EC",position:"relative",flexGrow:1,height:"3px"},children:c.jsx(we,{style:{position:"absolute",backgroundColor:C,height:"100%"}})}),c.jsx(Ce,{style:{display:"block",width:"20px",height:"20px",backgroundColor:"white",boxShadow:"0 2px 4px rgba(0,0,0,0.1)",borderRadius:"10px",cursor:"pointer"}})]})]}),c.jsxs("div",{children:[c.jsxs("h3",{className:"text-lg font-medium mb-2",children:["Input Signal: ",n.toFixed(2)]}),c.jsxs(ye,{value:[n],onValueChange:([b])=>o(b),min:-2,max:2,step:.1,style:{position:"relative",display:"flex",alignItems:"center",width:"200px",height:"20px"},children:[c.jsx(Se,{style:{backgroundColor:"#E6E8EC",position:"relative",flexGrow:1,height:"3px"},children:c.jsx(we,{style:{position:"absolute",backgroundColor:p,height:"100%"}})}),c.jsx(Ce,{style:{display:"block",width:"20px",height:"20px",backgroundColor:"white",boxShadow:"0 2px 4px rgba(0,0,0,0.1)",borderRadius:"10px",cursor:"pointer"}})]})]}),c.jsxs("div",{className:"flex items-center space-x-2",children:[c.jsx(nr,{checked:a,onCheckedChange:u,style:{width:"42px",height:"25px",backgroundColor:a?C:"#E6E8EC",borderRadius:"9999px",position:"relative",cursor:"pointer",border:"none"},children:c.jsx(or,{style:{width:"21px",height:"21px",backgroundColor:"white",borderRadius:"9999px",transition:"transform 100ms",transform:a?"translateX(19px)":"translateX(2px)",willChange:"transform"}})}),c.jsx("label",{className:"text-lg font-medium",children:"Use tanh non-linearity"})]})]}),c.jsx(R,{}),c.jsx("div",{className:"mt-6 h-64",children:c.jsxs(X.LineChart,{width:600,height:200,data:h,margin:{top:5,right:20,bottom:5,left:0},children:[c.jsx(X.CartesianGrid,{strokeDasharray:"3 3"}),c.jsx(X.XAxis,{dataKey:"time"}),c.jsx(X.YAxis,{}),c.jsx(X.Tooltip,{}),c.jsx(X.Line,{type:"monotone",dataKey:"input",stroke:p,dot:!1,name:"Input",strokeWidth:2}),c.jsx(X.Line,{type:"monotone",dataKey:"output",stroke:m,dot:!1,name:"Output",strokeWidth:2})]})})]})};z.RNNVisualization=ir,Object.defineProperty(z,Symbol.toStringTag,{value:"Module"})});
