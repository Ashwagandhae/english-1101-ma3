const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.DIvGsgWk.js","../chunks/disclose-version.DyQsBiSm.js","../chunks/runtime.DKl_jEHv.js","../chunks/legacy.D4bb9xRe.js","../assets/0.CzFqgAdb.css","../nodes/1.Bg7YChlp.js","../chunks/render.C_0-KjfG.js","../chunks/store.T1cigJ0_.js","../chunks/entry.CYT_H-S5.js","../nodes/2.Blh4JE5c.js","../chunks/index-client.Bp8mBgZE.js","../assets/2.CTnrgRQn.css","../nodes/3.CCWsNWkS.js","../nodes/4.9cgatSHa.js","../nodes/5.CKFm_C7P.js","../nodes/6.DuIGvXxj.js","../nodes/7.BZCFJKty.js","../nodes/8.B5v50G4G.js"])))=>i.map(i=>d[i]);
var p=r=>{throw TypeError(r)};var ee=(r,e,f)=>e.has(r)||p("Cannot "+f);var b=(r,e,f)=>(ee(r,e,"read from private field"),f?f.call(r):e.get(r)),M=(r,e,f)=>e.has(r)?p("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(r):e.set(r,f),z=(r,e,f,d)=>(ee(r,e,"write to private field"),d?d.call(r,f):e.set(r,f),f);import{S as F,a1 as me,a2 as he,a3 as S,a4 as ge,s as R,a5 as P,a6 as U,g as y,D as J,a7 as ye,$ as Ee,F as be,Y as q,N as ue,a8 as oe,a9 as Pe,aa as Re,M as we,L as te,ab as re,X as Q,ac as $,O as le,ad as ce,ae as Oe,af as Ie,ag as Ae,ah as Se,u as ae,ai as Te,aj as Le,B as ne,ak as De,z as xe,al as Ne,am as Ce,an as _e,i as V,ao as ke,ap as qe,m as de,aq as Ve,E as Be,p as je,b as Fe,c as Ue,ar as Ye,j,o as Me,l as ze,as as G,q as Ge,k as He,v as Ke}from"../chunks/runtime.DKl_jEHv.js";import{h as Ze,m as We,u as Xe,s as Je}from"../chunks/render.C_0-KjfG.js";import{a as N,t as ve,c as H,d as Qe}from"../chunks/disclose-version.DyQsBiSm.js";import{o as $e,b as K}from"../chunks/index-client.Bp8mBgZE.js";import{c as pe}from"../chunks/store.T1cigJ0_.js";function D(r,e=null,f){if(typeof r!="object"||r===null||F in r)return r;const d=Ee(r);if(d!==me&&d!==he)return r;var s=new Map,_=be(r),i=S(0);_&&s.set("length",S(r.length));var a;return new Proxy(r,{defineProperty(u,t,n){(!("value"in n)||n.configurable===!1||n.enumerable===!1||n.writable===!1)&&ge();var c=s.get(t);return c===void 0?(c=S(n.value),s.set(t,c)):R(c,D(n.value,a)),!0},deleteProperty(u,t){var n=s.get(t);if(n===void 0)t in u&&s.set(t,S(P));else{if(_&&typeof t=="string"){var c=s.get("length"),o=Number(t);Number.isInteger(o)&&o<c.v&&R(c,o)}R(n,P),se(i)}return!0},get(u,t,n){var v;if(t===F)return r;var c=s.get(t),o=t in u;if(c===void 0&&(!o||(v=U(u,t))!=null&&v.writable)&&(c=S(D(o?u[t]:P,a)),s.set(t,c)),c!==void 0){var l=y(c);return l===P?void 0:l}return Reflect.get(u,t,n)},getOwnPropertyDescriptor(u,t){var n=Reflect.getOwnPropertyDescriptor(u,t);if(n&&"value"in n){var c=s.get(t);c&&(n.value=y(c))}else if(n===void 0){var o=s.get(t),l=o==null?void 0:o.v;if(o!==void 0&&l!==P)return{enumerable:!0,configurable:!0,value:l,writable:!0}}return n},has(u,t){var l;if(t===F)return!0;var n=s.get(t),c=n!==void 0&&n.v!==P||Reflect.has(u,t);if(n!==void 0||J!==null&&(!c||(l=U(u,t))!=null&&l.writable)){n===void 0&&(n=S(c?D(u[t],a):P),s.set(t,n));var o=y(n);if(o===P)return!1}return c},set(u,t,n,c){var T;var o=s.get(t),l=t in u;if(_&&t==="length")for(var v=n;v<o.v;v+=1){var h=s.get(v+"");h!==void 0?R(h,P):v in u&&(h=S(P),s.set(v+"",h))}o===void 0?(!l||(T=U(u,t))!=null&&T.writable)&&(o=S(void 0),R(o,D(n,a)),s.set(t,o)):(l=o.v!==P,R(o,D(n,a)));var g=Reflect.getOwnPropertyDescriptor(u,t);if(g!=null&&g.set&&g.set.call(c,n),!l){if(_&&typeof t=="string"){var O=s.get("length"),E=Number(t);Number.isInteger(E)&&E>=O.v&&R(O,E+1)}se(i)}return!0},ownKeys(u){y(i);var t=Reflect.ownKeys(u).filter(o=>{var l=s.get(o);return l===void 0||l.v!==P});for(var[n,c]of s)c.v!==P&&!(n in u)&&t.push(n);return t},setPrototypeOf(){ye()}})}function se(r,e=1){R(r,r.v+e)}function Z(r,e,f,d=null,s=!1){q&&ue();var _=r,i=null,a=null,u=null,t=s?ce:0;oe(()=>{if(u===(u=!!e()))return;let n=!1;if(q){const c=_.data===Pe;u===c&&(_=Re(),we(_),te(!1),n=!0)}u?(i?re(i):i=Q(()=>f(_)),a&&$(a,()=>{a=null})):(a?re(a):d&&(a=Q(()=>d(_))),i&&$(i,()=>{i=null})),n&&te(!0)},t),q&&(_=le)}function W(r,e,f){q&&ue();var d=r,s,_;oe(()=>{s!==(s=e())&&(_&&($(_),_=null),s&&(_=Q(()=>f(d,s))))},ce),q&&(d=le)}function ie(r){for(var e=J,f=J;e!==null&&!(e.f&(Te|Le));)e=e.parent;try{return ne(e),r()}finally{ne(f)}}function X(r,e,f,d){var B;var s=(f&De)!==0,_=!xe||(f&Ne)!==0,i=(f&Ce)!==0,a=(f&qe)!==0,u=!1,t;i?[t,u]=pe(()=>r[e]):t=r[e];var n=F in r||_e in r,c=((B=U(r,e))==null?void 0:B.set)??(n&&i&&e in r?m=>r[e]=m:void 0),o=d,l=!0,v=!1,h=()=>(v=!0,l&&(l=!1,a?o=ae(d):o=d),o);t===void 0&&d!==void 0&&(c&&_&&Oe(),t=h(),c&&c(t));var g;if(_)g=()=>{var m=r[e];return m===void 0?h():(l=!0,v=!1,m)};else{var O=ie(()=>(s?V:ke)(()=>r[e]));O.f|=Ie,g=()=>{var m=y(O);return m!==void 0&&(o=void 0),m===void 0?o:m}}if(!(f&Ae))return g;if(c){var E=r.$$legacy;return function(m,x){return arguments.length>0?((!_||!x||E||u)&&c(x?g():m),m):g()}}var T=!1,C=!1,k=de(t),L=ie(()=>V(()=>{var m=g(),x=y(k);return T?(T=!1,C=!0,x):(C=!1,k.v=m)}));return s||(L.equals=Se),function(m,x){if(arguments.length>0){const Y=x?y(L):_&&i?D(m):m;return L.equals(Y)||(T=!0,R(k,Y),v&&o!==void 0&&(o=Y),ae(()=>y(L))),m}return y(L)}}function et(r){return class extends tt{constructor(e){super({component:r,...e})}}}var A,w;class tt{constructor(e){M(this,A);M(this,w);var _;var f=new Map,d=(i,a)=>{var u=de(a);return f.set(i,u),u};const s=new Proxy({...e.props||{},$$events:{}},{get(i,a){return y(f.get(a)??d(a,Reflect.get(i,a)))},has(i,a){return a===_e?!0:(y(f.get(a)??d(a,Reflect.get(i,a))),Reflect.has(i,a))},set(i,a,u){return R(f.get(a)??d(a,u),u),Reflect.set(i,a,u)}});z(this,w,(e.hydrate?Ze:We)(e.component,{target:e.target,anchor:e.anchor,props:s,context:e.context,intro:e.intro??!1,recover:e.recover})),(!((_=e==null?void 0:e.props)!=null&&_.$$host)||e.sync===!1)&&Ve(),z(this,A,s.$$events);for(const i of Object.keys(b(this,w)))i==="$set"||i==="$destroy"||i==="$on"||Be(this,i,{get(){return b(this,w)[i]},set(a){b(this,w)[i]=a},enumerable:!0});b(this,w).$set=i=>{Object.assign(s,i)},b(this,w).$destroy=()=>{Xe(b(this,w))}}$set(e){b(this,w).$set(e)}$on(e,f){b(this,A)[e]=b(this,A)[e]||[];const d=(...s)=>f.call(this,...s);return b(this,A)[e].push(d),()=>{b(this,A)[e]=b(this,A)[e].filter(s=>s!==d)}}$destroy(){b(this,w).$destroy()}}A=new WeakMap,w=new WeakMap;const rt="modulepreload",at=function(r,e){return new URL(r,e).href},fe={},I=function(e,f,d){let s=Promise.resolve();if(f&&f.length>0){const i=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),u=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.allSettled(f.map(t=>{if(t=at(t,d),t in fe)return;fe[t]=!0;const n=t.endsWith(".css"),c=n?'[rel="stylesheet"]':"";if(!!d)for(let v=i.length-1;v>=0;v--){const h=i[v];if(h.href===t&&(!n||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${c}`))return;const l=document.createElement("link");if(l.rel=n?"stylesheet":rt,n||(l.as="script"),l.crossOrigin="",l.href=t,u&&l.setAttribute("nonce",u),document.head.appendChild(l),n)return new Promise((v,h)=>{l.addEventListener("load",v),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${t}`)))})}))}function _(i){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i}return s.then(i=>{for(const a of i||[])a.status==="rejected"&&_(a.reason);return e().catch(_)})},dt={};var nt=ve('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),st=ve("<!> <!>",1);function it(r,e){je(e,!0);let f=X(e,"components",23,()=>[]),d=X(e,"data_0",3,null),s=X(e,"data_1",3,null);Fe(()=>e.stores.page.set(e.page)),Ue(()=>{e.stores,e.page,e.constructors,f(),e.form,d(),s(),e.stores.page.notify()});let _=G(!1),i=G(!1),a=G(null);$e(()=>{const o=e.stores.page.subscribe(()=>{y(_)&&(R(i,!0),Ye().then(()=>{R(a,D(document.title||"untitled page"))}))});return R(_,!0),o});const u=V(()=>e.constructors[1]);var t=st(),n=j(t);Z(n,()=>e.constructors[1],o=>{var l=H();const v=V(()=>e.constructors[0]);var h=j(l);W(h,()=>y(v),(g,O)=>{K(O(g,{get data(){return d()},get form(){return e.form},children:(E,T)=>{var C=H(),k=j(C);W(k,()=>y(u),(L,B)=>{K(B(L,{get data(){return s()},get form(){return e.form}}),m=>f()[1]=m,()=>{var m;return(m=f())==null?void 0:m[1]})}),N(E,C)},$$slots:{default:!0}}),E=>f()[0]=E,()=>{var E;return(E=f())==null?void 0:E[0]})}),N(o,l)},o=>{var l=H();const v=V(()=>e.constructors[0]);var h=j(l);W(h,()=>y(v),(g,O)=>{K(O(g,{get data(){return d()},get form(){return e.form}}),E=>f()[0]=E,()=>{var E;return(E=f())==null?void 0:E[0]})}),N(o,l)});var c=Me(n,2);Z(c,()=>y(_),o=>{var l=nt(),v=Ge(l);Z(v,()=>y(i),h=>{var g=Qe();He(()=>Je(g,y(a))),N(h,g)}),Ke(l),N(o,l)}),N(r,t),ze()}const vt=et(it),mt=[()=>I(()=>import("../nodes/0.DIvGsgWk.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url),()=>I(()=>import("../nodes/1.Bg7YChlp.js"),__vite__mapDeps([5,1,2,3,6,7,8]),import.meta.url),()=>I(()=>import("../nodes/2.Blh4JE5c.js"),__vite__mapDeps([9,1,2,3,6,10,11]),import.meta.url),()=>I(()=>import("../nodes/3.CCWsNWkS.js"),__vite__mapDeps([12,1,2,3]),import.meta.url),()=>I(()=>import("../nodes/4.9cgatSHa.js"),__vite__mapDeps([13,1,2,3]),import.meta.url),()=>I(()=>import("../nodes/5.CKFm_C7P.js"),__vite__mapDeps([14,1,2,3]),import.meta.url),()=>I(()=>import("../nodes/6.DuIGvXxj.js"),__vite__mapDeps([15,1,2,3]),import.meta.url),()=>I(()=>import("../nodes/7.BZCFJKty.js"),__vite__mapDeps([16,1,2,3]),import.meta.url),()=>I(()=>import("../nodes/8.B5v50G4G.js"),__vite__mapDeps([17,1,2,3]),import.meta.url)],ht=[],gt={"/":[2],"/atlanta-food-insecurity":[3],"/community-impacts":[4],"/faq":[5],"/sources":[6],"/what-can-do":[7],"/what-is":[8]},yt={handleError:({error:r})=>{console.error(r)},reroute:()=>{}};export{gt as dictionary,yt as hooks,dt as matchers,mt as nodes,vt as root,ht as server_loads};