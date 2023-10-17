import{a as w,e as p,r as u,f as Xe,g as le,j as O,W as ze,I as Je}from"./app-277db206.js";import{I as Qe}from"./InputLabel-9be47cff.js";import{l as J,s as W,a as I,u as k,b as de,D as x,X as S,o as $,y as T,p as Ze,c as Q,f as xe,T as et,d as tt,S as we,C as nt,e as K,t as te}from"./transition-ce845275.js";import{T as rt}from"./TextInput-7c5313f8.js";function Ee({className:e="",disabled:t,children:n,...r}){return w("button",{...r,className:`inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150 ${t&&"opacity-25"} `+e,disabled:t,children:n})}var ye;let H=(ye=p.useId)!=null?ye:function(){let e=J(),[t,n]=p.useState(e?()=>W.nextId():null);return I(()=>{t===null&&n(W.nextId())},[t]),t!=null?""+t:void 0};function Se(e){return W.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let ae=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var N=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(N||{}),Pe=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(Pe||{}),ot=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(ot||{});function lt(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(ae)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var Te=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(Te||{});function at(e,t=0){var n;return e===((n=Se(e))==null?void 0:n.body)?!1:k(t,{[0](){return e.matches(ae)},[1](){let r=e;for(;r!==null;){if(r.matches(ae))return!0;r=r.parentElement}return!1}})}var it=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(it||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function C(e){e==null||e.focus({preventScroll:!0})}let ut=["textarea","input"].join(",");function st(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,ut))!=null?n:!1}function ct(e,t=n=>n){return e.slice().sort((n,r)=>{let l=t(n),a=t(r);if(l===null||a===null)return 0;let o=l.compareDocumentPosition(a);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function q(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:l=[]}={}){let a=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,o=Array.isArray(e)?n?ct(e):e:lt(e);l.length>0&&o.length>1&&(o=o.filter(E=>!l.includes(E))),r=r??a.activeElement;let i=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),s=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,o.indexOf(r))-1;if(t&4)return Math.max(0,o.indexOf(r))+1;if(t&8)return o.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=t&32?{preventScroll:!0}:{},c=0,f=o.length,m;do{if(c>=f||c+f<=0)return 0;let E=s+c;if(t&16)E=(E+f)%f;else{if(E<0)return 3;if(E>=f)return 1}m=o[E],m==null||m.focus(d),c+=i}while(m!==a.activeElement);return t&6&&st(m)&&m.select(),2}function ne(e,t,n){let r=de(t);u.useEffect(()=>{function l(a){r.current(a)}return document.addEventListener(e,l,n),()=>document.removeEventListener(e,l,n)},[e,n])}function dt(e,t,n=!0){let r=u.useRef(!1);u.useEffect(()=>{requestAnimationFrame(()=>{r.current=n})},[n]);function l(o,i){if(!r.current||o.defaultPrevented)return;let s=function c(f){return typeof f=="function"?c(f()):Array.isArray(f)||f instanceof Set?f:[f]}(e),d=i(o);if(d!==null&&d.getRootNode().contains(d)){for(let c of s){if(c===null)continue;let f=c instanceof HTMLElement?c:c.current;if(f!=null&&f.contains(d)||o.composed&&o.composedPath().includes(f))return}return!at(d,Te.Loose)&&d.tabIndex!==-1&&o.preventDefault(),t(o,d)}}let a=u.useRef(null);ne("mousedown",o=>{var i,s;r.current&&(a.current=((s=(i=o.composedPath)==null?void 0:i.call(o))==null?void 0:s[0])||o.target)},!0),ne("click",o=>{a.current&&(l(o,()=>a.current),a.current=null)},!0),ne("blur",o=>l(o,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function ft(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(t==null?void 0:t.getAttribute("disabled"))==="";return r&&mt(n)?!1:r}function mt(e){if(!e)return!1;let t=e.previousElementSibling;for(;t!==null;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}let pt="div";var X=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(X||{});function vt(e,t){let{features:n=1,...r}=e,l={ref:t,"aria-hidden":(n&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(n&4)===4&&(n&2)!==2&&{display:"none"}}};return S({ourProps:l,theirProps:r,slot:{},defaultTag:pt,name:"Hidden"})}let ie=x(vt);var De=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(De||{});function fe(e,t){let n=u.useRef([]),r=$(e);u.useEffect(()=>{let l=[...n.current];for(let[a,o]of t.entries())if(n.current[a]!==o){let i=r(t,l);return n.current=t,i}},[r,...t])}function gt(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function ht(e,t,n){let r=de(t);u.useEffect(()=>{function l(a){r.current(a)}return window.addEventListener(e,l,n),()=>window.removeEventListener(e,l,n)},[e,n])}var j=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(j||{});function wt(){let e=u.useRef(0);return ht("keydown",t=>{t.key==="Tab"&&(e.current=t.shiftKey?1:0)},!0),e}function Z(...e){return u.useMemo(()=>Se(...e),[...e])}function Le(e,t,n,r){let l=de(n);u.useEffect(()=>{e=e??window;function a(o){l.current(o)}return e.addEventListener(t,a,r),()=>e.removeEventListener(t,a,r)},[e,t,r])}function Et(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",t),t())}function Fe(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let n of e.current)n.current instanceof HTMLElement&&t.add(n.current);return t}let yt="div";var Ne=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(Ne||{});function bt(e,t){let n=u.useRef(null),r=T(n,t),{initialFocus:l,containers:a,features:o=30,...i}=e;J()||(o=1);let s=Z(n);St({ownerDocument:s},!!(o&16));let d=Pt({ownerDocument:s,container:n,initialFocus:l},!!(o&2));Tt({ownerDocument:s,container:n,containers:a,previousActiveElement:d},!!(o&8));let c=wt(),f=$(g=>{let P=n.current;P&&(L=>L())(()=>{k(c.current,{[j.Forwards]:()=>{q(P,N.First,{skipElements:[g.relatedTarget]})},[j.Backwards]:()=>{q(P,N.Last,{skipElements:[g.relatedTarget]})}})})}),m=Ze(),E=u.useRef(!1),D={ref:r,onKeyDown(g){g.key=="Tab"&&(E.current=!0,m.requestAnimationFrame(()=>{E.current=!1}))},onBlur(g){let P=Fe(a);n.current instanceof HTMLElement&&P.add(n.current);let L=g.relatedTarget;L instanceof HTMLElement&&L.dataset.headlessuiFocusGuard!=="true"&&(Ae(P,L)||(E.current?q(n.current,k(c.current,{[j.Forwards]:()=>N.Next,[j.Backwards]:()=>N.Previous})|N.WrapAround,{relativeTo:g.target}):g.target instanceof HTMLElement&&C(g.target)))}};return p.createElement(p.Fragment,null,!!(o&4)&&p.createElement(ie,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:f,features:X.Focusable}),S({ourProps:D,theirProps:i,defaultTag:yt,name:"FocusTrap"}),!!(o&4)&&p.createElement(ie,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:f,features:X.Focusable}))}let $t=x(bt),B=Object.assign($t,{features:Ne}),F=[];Et(()=>{function e(t){t.target instanceof HTMLElement&&t.target!==document.body&&F[0]!==t.target&&(F.unshift(t.target),F=F.filter(n=>n!=null&&n.isConnected),F.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function xt(e=!0){let t=u.useRef(F.slice());return fe(([n],[r])=>{r===!0&&n===!1&&Q(()=>{t.current.splice(0)}),r===!1&&n===!0&&(t.current=F.slice())},[e,F,t]),$(()=>{var n;return(n=t.current.find(r=>r!=null&&r.isConnected))!=null?n:null})}function St({ownerDocument:e},t){let n=xt(t);fe(()=>{t||(e==null?void 0:e.activeElement)===(e==null?void 0:e.body)&&C(n())},[t]);let r=u.useRef(!1);u.useEffect(()=>(r.current=!1,()=>{r.current=!0,Q(()=>{r.current&&C(n())})}),[])}function Pt({ownerDocument:e,container:t,initialFocus:n},r){let l=u.useRef(null),a=xe();return fe(()=>{if(!r)return;let o=t.current;o&&Q(()=>{if(!a.current)return;let i=e==null?void 0:e.activeElement;if(n!=null&&n.current){if((n==null?void 0:n.current)===i){l.current=i;return}}else if(o.contains(i)){l.current=i;return}n!=null&&n.current?C(n.current):q(o,N.First)===Pe.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),l.current=e==null?void 0:e.activeElement})},[r]),l}function Tt({ownerDocument:e,container:t,containers:n,previousActiveElement:r},l){let a=xe();Le(e==null?void 0:e.defaultView,"focus",o=>{if(!l||!a.current)return;let i=Fe(n);t.current instanceof HTMLElement&&i.add(t.current);let s=r.current;if(!s)return;let d=o.target;d&&d instanceof HTMLElement?Ae(i,d)?(r.current=d,C(d)):(o.preventDefault(),o.stopPropagation(),C(s)):C(r.current)},!0)}function Ae(e,t){for(let n of e)if(n.contains(t))return!0;return!1}let Ce=u.createContext(!1);function Dt(){return u.useContext(Ce)}function ue(e){return p.createElement(Ce.Provider,{value:e.force},e.children)}function Lt(e){let t=Dt(),n=u.useContext(Me),r=Z(e),[l,a]=u.useState(()=>{if(!t&&n!==null||W.isServer)return null;let o=r==null?void 0:r.getElementById("headlessui-portal-root");if(o)return o;if(r===null)return null;let i=r.createElement("div");return i.setAttribute("id","headlessui-portal-root"),r.body.appendChild(i)});return u.useEffect(()=>{l!==null&&(r!=null&&r.body.contains(l)||r==null||r.body.appendChild(l))},[l,r]),u.useEffect(()=>{t||n!==null&&a(n.current)},[n,a,t]),l}let Ft=u.Fragment;function Nt(e,t){let n=e,r=u.useRef(null),l=T(et(c=>{r.current=c}),t),a=Z(r),o=Lt(r),[i]=u.useState(()=>{var c;return W.isServer?null:(c=a==null?void 0:a.createElement("div"))!=null?c:null}),s=J(),d=u.useRef(!1);return I(()=>{if(d.current=!1,!(!o||!i))return o.contains(i)||(i.setAttribute("data-headlessui-portal",""),o.appendChild(i)),()=>{d.current=!0,Q(()=>{var c;d.current&&(!o||!i||(i instanceof Node&&o.contains(i)&&o.removeChild(i),o.childNodes.length<=0&&((c=o.parentElement)==null||c.removeChild(o))))})}},[o,i]),s?!o||!i?null:Xe.createPortal(S({ourProps:{ref:l},theirProps:n,defaultTag:Ft,name:"Portal"}),i):null}let At=u.Fragment,Me=u.createContext(null);function Ct(e,t){let{target:n,...r}=e,l={ref:T(t)};return p.createElement(Me.Provider,{value:n},S({ourProps:l,theirProps:r,defaultTag:At,name:"Popover.Group"}))}let Mt=x(Nt),Rt=x(Ct),se=Object.assign(Mt,{Group:Rt}),Re=u.createContext(null);function Oe(){let e=u.useContext(Re);if(e===null){let t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,Oe),t}return e}function Ot(){let[e,t]=u.useState([]);return[e.length>0?e.join(" "):void 0,u.useMemo(()=>function(n){let r=$(a=>(t(o=>[...o,a]),()=>t(o=>{let i=o.slice(),s=i.indexOf(a);return s!==-1&&i.splice(s,1),i}))),l=u.useMemo(()=>({register:r,slot:n.slot,name:n.name,props:n.props}),[r,n.slot,n.name,n.props]);return p.createElement(Re.Provider,{value:l},n.children)},[t])]}let kt="p";function It(e,t){let n=H(),{id:r=`headlessui-description-${n}`,...l}=e,a=Oe(),o=T(t);I(()=>a.register(r),[r,a.register]);let i={ref:o,...a.props,id:r};return S({ourProps:i,theirProps:l,slot:a.slot||{},defaultTag:kt,name:a.name||"Description"})}let Ht=x(It),Bt=Object.assign(Ht,{}),me=u.createContext(()=>{});me.displayName="StackContext";var ce=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(ce||{});function Ut(){return u.useContext(me)}function jt({children:e,onUpdate:t,type:n,element:r,enabled:l}){let a=Ut(),o=$((...i)=>{t==null||t(...i),a(...i)});return I(()=>{let i=l===void 0||l===!0;return i&&o(0,n,r),()=>{i&&o(1,n,r)}},[o,n,r,l]),p.createElement(me.Provider,{value:o},e)}function Wt(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const _t=typeof Object.is=="function"?Object.is:Wt,{useState:Vt,useEffect:Yt,useLayoutEffect:Gt,useDebugValue:Kt}=le;function qt(e,t,n){const r=t(),[{inst:l},a]=Vt({inst:{value:r,getSnapshot:t}});return Gt(()=>{l.value=r,l.getSnapshot=t,re(l)&&a({inst:l})},[e,r,t]),Yt(()=>(re(l)&&a({inst:l}),e(()=>{re(l)&&a({inst:l})})),[e]),Kt(r),r}function re(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!_t(n,r)}catch{return!0}}function Xt(e,t,n){return t()}const zt=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Jt=!zt,Qt=Jt?Xt:qt,Zt="useSyncExternalStore"in le?(e=>e.useSyncExternalStore)(le):Qt;function en(e){return Zt(e.subscribe,e.getSnapshot,e.getSnapshot)}function tn(e,t){let n=e(),r=new Set;return{getSnapshot(){return n},subscribe(l){return r.add(l),()=>r.delete(l)},dispatch(l,...a){let o=t[l].call(n,...a);o&&(n=o,r.forEach(i=>i()))}}}function nn(){let e;return{before({doc:t}){var n;let r=t.documentElement;e=((n=t.defaultView)!=null?n:window).innerWidth-r.clientWidth},after({doc:t,d:n}){let r=t.documentElement,l=r.clientWidth-r.offsetWidth,a=e-l;n.style(r,"paddingRight",`${a}px`)}}}function rn(){if(!gt())return{};let e;return{before(){e=window.pageYOffset},after({doc:t,d:n,meta:r}){function l(o){return r.containers.flatMap(i=>i()).some(i=>i.contains(o))}n.style(t.body,"marginTop",`-${e}px`),window.scrollTo(0,0);let a=null;n.addEventListener(t,"click",o=>{if(o.target instanceof HTMLElement)try{let i=o.target.closest("a");if(!i)return;let{hash:s}=new URL(i.href),d=t.querySelector(s);d&&!l(d)&&(a=d)}catch{}},!0),n.addEventListener(t,"touchmove",o=>{o.target instanceof HTMLElement&&!l(o.target)&&o.preventDefault()},{passive:!1}),n.add(()=>{window.scrollTo(0,window.pageYOffset+e),a&&a.isConnected&&(a.scrollIntoView({block:"nearest"}),a=null)})}}}function on(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function ln(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let A=tn(()=>new Map,{PUSH(e,t){var n;let r=(n=this.get(e))!=null?n:{doc:e,count:0,d:tt(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let r={doc:e,d:t,meta:ln(n)},l=[rn(),nn(),on()];l.forEach(({before:a})=>a==null?void 0:a(r)),l.forEach(({after:a})=>a==null?void 0:a(r))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});A.subscribe(()=>{let e=A.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let r=t.get(n.doc)==="hidden",l=n.count!==0;(l&&!r||!l&&r)&&A.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&A.dispatch("TEARDOWN",n)}});function an(e,t,n){let r=en(A),l=e?r.get(e):void 0,a=l?l.count>0:!1;return I(()=>{if(!(!e||!t))return A.dispatch("PUSH",e,n),()=>A.dispatch("POP",e,n)},[t,e]),a}let oe=new Map,U=new Map;function be(e,t=!0){I(()=>{var n;if(!t)return;let r=typeof e=="function"?e():e.current;if(!r)return;function l(){var o;if(!r)return;let i=(o=U.get(r))!=null?o:1;if(i===1?U.delete(r):U.set(r,i-1),i!==1)return;let s=oe.get(r);s&&(s["aria-hidden"]===null?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden",s["aria-hidden"]),r.inert=s.inert,oe.delete(r))}let a=(n=U.get(r))!=null?n:0;return U.set(r,a+1),a!==0||(oe.set(r,{"aria-hidden":r.getAttribute("aria-hidden"),inert:r.inert}),r.setAttribute("aria-hidden","true"),r.inert=!0),l},[e,t])}var un=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(un||{}),sn=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(sn||{});let cn={[0](e,t){return e.titleId===t.id?e:{...e,titleId:t.id}}},z=u.createContext(null);z.displayName="DialogContext";function _(e){let t=u.useContext(z);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,_),n}return t}function dn(e,t,n=()=>[document.body]){an(e,t,r=>{var l;return{containers:[...(l=r.containers)!=null?l:[],n]}})}function fn(e,t){return k(t.type,cn,e,t)}let mn="div",pn=we.RenderStrategy|we.Static;function vn(e,t){let n=H(),{id:r=`headlessui-dialog-${n}`,open:l,onClose:a,initialFocus:o,__demoMode:i=!1,...s}=e,[d,c]=u.useState(0),f=nt();l===void 0&&f!==null&&(l=(f&K.Open)===K.Open);let m=u.useRef(null),E=T(m,t),D=u.useRef(null),g=Z(m),P=e.hasOwnProperty("open")||f!==null,L=e.hasOwnProperty("onClose");if(!P&&!L)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!P)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!L)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(typeof l!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${l}`);if(typeof a!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${a}`);let y=l?0:1,[M,ke]=u.useReducer(fn,{titleId:null,descriptionId:null,panelRef:u.createRef()}),R=$(()=>a(!1)),pe=$(v=>ke({type:0,id:v})),V=J()?i?!1:y===0:!1,Y=d>1,ve=u.useContext(z)!==null,Ie=Y?"parent":"leaf",ge=f!==null?(f&K.Closing)===K.Closing:!1,He=(()=>ve||ge?!1:V)(),Be=u.useCallback(()=>{var v,b;return(b=Array.from((v=g==null?void 0:g.querySelectorAll("body > *"))!=null?v:[]).find(h=>h.id==="headlessui-portal-root"?!1:h.contains(D.current)&&h instanceof HTMLElement))!=null?b:null},[D]);be(Be,He);let Ue=(()=>Y?!0:V)(),je=u.useCallback(()=>{var v,b;return(b=Array.from((v=g==null?void 0:g.querySelectorAll("[data-headlessui-portal]"))!=null?v:[]).find(h=>h.contains(D.current)&&h instanceof HTMLElement))!=null?b:null},[D]);be(je,Ue);let ee=$(()=>{var v,b;return[...Array.from((v=g==null?void 0:g.querySelectorAll("html > *, body > *, [data-headlessui-portal]"))!=null?v:[]).filter(h=>!(h===document.body||h===document.head||!(h instanceof HTMLElement)||h.contains(D.current)||M.panelRef.current&&h.contains(M.panelRef.current))),(b=M.panelRef.current)!=null?b:m.current]}),We=(()=>!(!V||Y))();dt(()=>ee(),R,We);let _e=(()=>!(Y||y!==0))();Le(g==null?void 0:g.defaultView,"keydown",v=>{_e&&(v.defaultPrevented||v.key===De.Escape&&(v.preventDefault(),v.stopPropagation(),R()))});let Ve=(()=>!(ge||y!==0||ve))();dn(g,Ve,ee),u.useEffect(()=>{if(y!==0||!m.current)return;let v=new ResizeObserver(b=>{for(let h of b){let G=h.target.getBoundingClientRect();G.x===0&&G.y===0&&G.width===0&&G.height===0&&R()}});return v.observe(m.current),()=>v.disconnect()},[y,m,R]);let[Ye,Ge]=Ot(),Ke=u.useMemo(()=>[{dialogState:y,close:R,setTitleId:pe},M],[y,M,R,pe]),he=u.useMemo(()=>({open:y===0}),[y]),qe={ref:E,id:r,role:"dialog","aria-modal":y===0?!0:void 0,"aria-labelledby":M.titleId,"aria-describedby":Ye};return p.createElement(jt,{type:"Dialog",enabled:y===0,element:m,onUpdate:$((v,b)=>{b==="Dialog"&&k(v,{[ce.Add]:()=>c(h=>h+1),[ce.Remove]:()=>c(h=>h-1)})})},p.createElement(ue,{force:!0},p.createElement(se,null,p.createElement(z.Provider,{value:Ke},p.createElement(se.Group,{target:m},p.createElement(ue,{force:!1},p.createElement(Ge,{slot:he,name:"Dialog.Description"},p.createElement(B,{initialFocus:o,containers:ee,features:V?k(Ie,{parent:B.features.RestoreFocus,leaf:B.features.All&~B.features.FocusLock}):B.features.None},S({ourProps:qe,theirProps:s,slot:he,defaultTag:mn,features:pn,visible:y===0,name:"Dialog"})))))))),p.createElement(ie,{features:X.Hidden,ref:D}))}let gn="div";function hn(e,t){let n=H(),{id:r=`headlessui-dialog-overlay-${n}`,...l}=e,[{dialogState:a,close:o}]=_("Dialog.Overlay"),i=T(t),s=$(c=>{if(c.target===c.currentTarget){if(ft(c.currentTarget))return c.preventDefault();c.preventDefault(),c.stopPropagation(),o()}}),d=u.useMemo(()=>({open:a===0}),[a]);return S({ourProps:{ref:i,id:r,"aria-hidden":!0,onClick:s},theirProps:l,slot:d,defaultTag:gn,name:"Dialog.Overlay"})}let wn="div";function En(e,t){let n=H(),{id:r=`headlessui-dialog-backdrop-${n}`,...l}=e,[{dialogState:a},o]=_("Dialog.Backdrop"),i=T(t);u.useEffect(()=>{if(o.panelRef.current===null)throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[o.panelRef]);let s=u.useMemo(()=>({open:a===0}),[a]);return p.createElement(ue,{force:!0},p.createElement(se,null,S({ourProps:{ref:i,id:r,"aria-hidden":!0},theirProps:l,slot:s,defaultTag:wn,name:"Dialog.Backdrop"})))}let yn="div";function bn(e,t){let n=H(),{id:r=`headlessui-dialog-panel-${n}`,...l}=e,[{dialogState:a},o]=_("Dialog.Panel"),i=T(t,o.panelRef),s=u.useMemo(()=>({open:a===0}),[a]),d=$(c=>{c.stopPropagation()});return S({ourProps:{ref:i,id:r,onClick:d},theirProps:l,slot:s,defaultTag:yn,name:"Dialog.Panel"})}let $n="h2";function xn(e,t){let n=H(),{id:r=`headlessui-dialog-title-${n}`,...l}=e,[{dialogState:a,setTitleId:o}]=_("Dialog.Title"),i=T(t);u.useEffect(()=>(o(r),()=>o(null)),[r,o]);let s=u.useMemo(()=>({open:a===0}),[a]);return S({ourProps:{ref:i,id:r},theirProps:l,slot:s,defaultTag:$n,name:"Dialog.Title"})}let Sn=x(vn),Pn=x(En),Tn=x(bn),Dn=x(hn),Ln=x(xn),$e=Object.assign(Sn,{Backdrop:Pn,Panel:Tn,Overlay:Dn,Title:Ln,Description:Bt});function Fn({children:e,show:t=!1,maxWidth:n="2xl",closeable:r=!0,onClose:l=()=>{}}){const a=()=>{r&&l()},o={sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"}[n];return w(te,{show:t,as:u.Fragment,leave:"duration-200",children:O($e,{as:"div",id:"modal",className:"fixed inset-0 flex overflow-y-auto px-4 py-6 sm:px-0 items-center z-50 transform transition-all",onClose:a,children:[w(te.Child,{as:u.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:w("div",{className:"absolute inset-0 bg-gray-500/75"})}),w(te.Child,{as:u.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:w($e.Panel,{className:`mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto ${o}`,children:e})})]})})}function Nn({type:e="button",className:t="",disabled:n,children:r,...l}){return w("button",{...l,type:e,className:`inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${n&&"opacity-25"} `+t,disabled:n,children:r})}function On({className:e=""}){const[t,n]=u.useState(!1),r=u.useRef(),{data:l,setData:a,delete:o,processing:i,reset:s,errors:d}=ze({password:""}),c=()=>{n(!0)},f=E=>{E.preventDefault(),o(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>m(),onError:()=>r.current.focus(),onFinish:()=>s()})},m=()=>{n(!1),s()};return O("section",{className:`space-y-6 ${e}`,children:[O("header",{children:[w("h2",{className:"text-lg font-medium text-gray-900",children:"Delete Account"}),w("p",{className:"mt-1 text-sm text-gray-600",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain."})]}),w(Ee,{onClick:c,children:"Delete Account"}),w(Fn,{show:t,onClose:m,children:O("form",{onSubmit:f,className:"p-6",children:[w("h2",{className:"text-lg font-medium text-gray-900",children:"Are you sure you want to delete your account?"}),w("p",{className:"mt-1 text-sm text-gray-600",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account."}),O("div",{className:"mt-6",children:[w(Qe,{htmlFor:"password",value:"Password",className:"sr-only"}),w(rt,{id:"password",type:"password",name:"password",ref:r,value:l.password,onChange:E=>a("password",E.target.value),className:"mt-1 block w-3/4",isFocused:!0,placeholder:"Password"}),w(Je,{message:d.password,className:"mt-2"})]}),O("div",{className:"mt-6 flex justify-end",children:[w(Nn,{onClick:m,children:"Cancel"}),w(Ee,{className:"ml-3",disabled:i,children:"Delete Account"})]})]})})]})}export{On as default};