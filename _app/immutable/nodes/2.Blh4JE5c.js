import{a as Tr,t as Ir}from"../chunks/disclose-version.DyQsBiSm.js";import"../chunks/legacy.D4bb9xRe.js";import{Y as Wr,$ as hr,a0 as Ur,p as Zr,k as Kr,l as Qr,q as R,v as q,o as W,n as $r}from"../chunks/runtime.DKl_jEHv.js";import{e as pr,s as Jr}from"../chunks/render.C_0-KjfG.js";import{o as Yr,b as Gr}from"../chunks/index-client.Bp8mBgZE.js";function Xr(r,e,n,a){var t=r.__attributes??(r.__attributes={});Wr&&(t[e]=r.getAttribute(e),r.nodeName==="LINK")||t[e]!==(t[e]=n)&&(n==null?r.removeAttribute(e):typeof n!="string"&&re(r).includes(e)?r[e]=n:r.setAttribute(e,n))}var mr=new Map;function re(r){var e=mr.get(r.nodeName);if(e)return e;mr.set(r.nodeName,e=[]);for(var n,a=hr(r),t=Element.prototype;t!==a;){n=Ur(a);for(var o in n)n[o].set&&e.push(o);a=hr(a)}return e}var Pr={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},er={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},ee=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],U={CSS:{},springs:{}};function C(r,e,n){return Math.min(Math.max(r,e),n)}function H(r,e){return r.indexOf(e)>-1}function G(r,e){return r.apply(null,e)}var c={arr:function(r){return Array.isArray(r)},obj:function(r){return H(Object.prototype.toString.call(r),"Object")},pth:function(r){return c.obj(r)&&r.hasOwnProperty("totalLength")},svg:function(r){return r instanceof SVGElement},inp:function(r){return r instanceof HTMLInputElement},dom:function(r){return r.nodeType||c.svg(r)},str:function(r){return typeof r=="string"},fnc:function(r){return typeof r=="function"},und:function(r){return typeof r>"u"},nil:function(r){return c.und(r)||r===null},hex:function(r){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(r)},rgb:function(r){return/^rgb/.test(r)},hsl:function(r){return/^hsl/.test(r)},col:function(r){return c.hex(r)||c.rgb(r)||c.hsl(r)},key:function(r){return!Pr.hasOwnProperty(r)&&!er.hasOwnProperty(r)&&r!=="targets"&&r!=="keyframes"}};function kr(r){var e=/\(([^)]+)\)/.exec(r);return e?e[1].split(",").map(function(n){return parseFloat(n)}):[]}function Cr(r,e){var n=kr(r),a=C(c.und(n[0])?1:n[0],.1,100),t=C(c.und(n[1])?100:n[1],.1,100),o=C(c.und(n[2])?10:n[2],.1,100),u=C(c.und(n[3])?0:n[3],.1,100),s=Math.sqrt(t/a),i=o/(2*Math.sqrt(t*a)),p=i<1?s*Math.sqrt(1-i*i):0,f=1,l=i<1?(i*s+-u)/p:-u+s;function h(m){var v=e?e*m/1e3:m;return i<1?v=Math.exp(-v*i*s)*(f*Math.cos(p*v)+l*Math.sin(p*v)):v=(f+l*v)*Math.exp(-v*s),m===0||m===1?m:1-v}function T(){var m=U.springs[r];if(m)return m;for(var v=1/6,b=0,M=0;;)if(b+=v,h(b)===1){if(M++,M>=16)break}else M=0;var g=b*v*1e3;return U.springs[r]=g,g}return e?h:T}function ne(r){return r===void 0&&(r=10),function(e){return Math.ceil(C(e,1e-6,1)*r)*(1/r)}}var te=function(){var r=11,e=1/(r-1);function n(f,l){return 1-3*l+3*f}function a(f,l){return 3*l-6*f}function t(f){return 3*f}function o(f,l,h){return((n(l,h)*f+a(l,h))*f+t(l))*f}function u(f,l,h){return 3*n(l,h)*f*f+2*a(l,h)*f+t(l)}function s(f,l,h,T,m){var v,b,M=0;do b=l+(h-l)/2,v=o(b,T,m)-f,v>0?h=b:l=b;while(Math.abs(v)>1e-7&&++M<10);return b}function i(f,l,h,T){for(var m=0;m<4;++m){var v=u(l,h,T);if(v===0)return l;var b=o(l,h,T)-f;l-=b/v}return l}function p(f,l,h,T){if(!(0<=f&&f<=1&&0<=h&&h<=1))return;var m=new Float32Array(r);if(f!==l||h!==T)for(var v=0;v<r;++v)m[v]=o(v*e,f,h);function b(M){for(var g=0,d=1,I=r-1;d!==I&&m[d]<=M;++d)g+=e;--d;var E=(M-m[d])/(m[d+1]-m[d]),x=g+E*e,O=u(x,f,h);return O>=.001?i(M,x,f,h):O===0?x:s(M,g,g+e,f,h)}return function(M){return f===l&&h===T||M===0||M===1?M:o(b(M),l,T)}}return p}(),Dr=function(){var r={linear:function(){return function(a){return a}}},e={Sine:function(){return function(a){return 1-Math.cos(a*Math.PI/2)}},Expo:function(){return function(a){return a?Math.pow(2,10*a-10):0}},Circ:function(){return function(a){return 1-Math.sqrt(1-a*a)}},Back:function(){return function(a){return a*a*(3*a-2)}},Bounce:function(){return function(a){for(var t,o=4;a<((t=Math.pow(2,--o))-1)/11;);return 1/Math.pow(4,3-o)-7.5625*Math.pow((t*3-2)/22-a,2)}},Elastic:function(a,t){a===void 0&&(a=1),t===void 0&&(t=.5);var o=C(a,1,10),u=C(t,.1,2);return function(s){return s===0||s===1?s:-o*Math.pow(2,10*(s-1))*Math.sin((s-1-u/(Math.PI*2)*Math.asin(1/o))*(Math.PI*2)/u)}}},n=["Quad","Cubic","Quart","Quint"];return n.forEach(function(a,t){e[a]=function(){return function(o){return Math.pow(o,t+2)}}}),Object.keys(e).forEach(function(a){var t=e[a];r["easeIn"+a]=t,r["easeOut"+a]=function(o,u){return function(s){return 1-t(o,u)(1-s)}},r["easeInOut"+a]=function(o,u){return function(s){return s<.5?t(o,u)(s*2)/2:1-t(o,u)(s*-2+2)/2}},r["easeOutIn"+a]=function(o,u){return function(s){return s<.5?(1-t(o,u)(1-s*2))/2:(t(o,u)(s*2-1)+1)/2}}}),r}();function nr(r,e){if(c.fnc(r))return r;var n=r.split("(")[0],a=Dr[n],t=kr(r);switch(n){case"spring":return Cr(r,e);case"cubicBezier":return G(te,t);case"steps":return G(ne,t);default:return G(a,t)}}function Ar(r){try{var e=document.querySelectorAll(r);return e}catch{return}}function Z(r,e){for(var n=r.length,a=arguments.length>=2?arguments[1]:void 0,t=[],o=0;o<n;o++)if(o in r){var u=r[o];e.call(a,u,o,r)&&t.push(u)}return t}function K(r){return r.reduce(function(e,n){return e.concat(c.arr(n)?K(n):n)},[])}function yr(r){return c.arr(r)?r:(c.str(r)&&(r=Ar(r)||r),r instanceof NodeList||r instanceof HTMLCollection?[].slice.call(r):[r])}function tr(r,e){return r.some(function(n){return n===e})}function ar(r){var e={};for(var n in r)e[n]=r[n];return e}function X(r,e){var n=ar(r);for(var a in r)n[a]=e.hasOwnProperty(a)?e[a]:r[a];return n}function Q(r,e){var n=ar(r);for(var a in e)n[a]=c.und(r[a])?e[a]:r[a];return n}function ae(r){var e=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(r);return e?"rgba("+e[1]+",1)":r}function ie(r){var e=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,n=r.replace(e,function(s,i,p,f){return i+i+p+p+f+f}),a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n),t=parseInt(a[1],16),o=parseInt(a[2],16),u=parseInt(a[3],16);return"rgba("+t+","+o+","+u+",1)"}function oe(r){var e=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(r)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(r),n=parseInt(e[1],10)/360,a=parseInt(e[2],10)/100,t=parseInt(e[3],10)/100,o=e[4]||1;function u(h,T,m){return m<0&&(m+=1),m>1&&(m-=1),m<1/6?h+(T-h)*6*m:m<1/2?T:m<2/3?h+(T-h)*(2/3-m)*6:h}var s,i,p;if(a==0)s=i=p=t;else{var f=t<.5?t*(1+a):t+a-t*a,l=2*t-f;s=u(l,f,n+1/3),i=u(l,f,n),p=u(l,f,n-1/3)}return"rgba("+s*255+","+i*255+","+p*255+","+o+")"}function ue(r){if(c.rgb(r))return ae(r);if(c.hex(r))return ie(r);if(c.hsl(r))return oe(r)}function A(r){var e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(r);if(e)return e[1]}function se(r){if(H(r,"translate")||r==="perspective")return"px";if(H(r,"rotate")||H(r,"skew"))return"deg"}function rr(r,e){return c.fnc(r)?r(e.target,e.id,e.total):r}function D(r,e){return r.getAttribute(e)}function ir(r,e,n){var a=A(e);if(tr([n,"deg","rad","turn"],a))return e;var t=U.CSS[e+n];if(!c.und(t))return t;var o=100,u=document.createElement(r.tagName),s=r.parentNode&&r.parentNode!==document?r.parentNode:document.body;s.appendChild(u),u.style.position="absolute",u.style.width=o+n;var i=o/u.offsetWidth;s.removeChild(u);var p=i*parseFloat(e);return U.CSS[e+n]=p,p}function Er(r,e,n){if(e in r.style){var a=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),t=r.style[e]||getComputedStyle(r).getPropertyValue(a)||"0";return n?ir(r,t,n):t}}function or(r,e){if(c.dom(r)&&!c.inp(r)&&(!c.nil(D(r,e))||c.svg(r)&&r[e]))return"attribute";if(c.dom(r)&&tr(ee,e))return"transform";if(c.dom(r)&&e!=="transform"&&Er(r,e))return"css";if(r[e]!=null)return"object"}function Or(r){if(c.dom(r)){for(var e=r.style.transform||"",n=/(\w+)\(([^)]*)\)/g,a=new Map,t;t=n.exec(e);)a.set(t[1],t[2]);return a}}function fe(r,e,n,a){var t=H(e,"scale")?1:0+se(e),o=Or(r).get(e)||t;return n&&(n.transforms.list.set(e,o),n.transforms.last=e),a?ir(r,o,a):o}function ur(r,e,n,a){switch(or(r,e)){case"transform":return fe(r,e,a,n);case"css":return Er(r,e,n);case"attribute":return D(r,e);default:return r[e]||0}}function sr(r,e){var n=/^(\*=|\+=|-=)/.exec(r);if(!n)return r;var a=A(r)||0,t=parseFloat(e),o=parseFloat(r.replace(n[0],""));switch(n[0][0]){case"+":return t+o+a;case"-":return t-o+a;case"*":return t*o+a}}function Sr(r,e){if(c.col(r))return ue(r);if(/\s/g.test(r))return r;var n=A(r),a=n?r.substr(0,r.length-n.length):r;return e?a+e:a}function fr(r,e){return Math.sqrt(Math.pow(e.x-r.x,2)+Math.pow(e.y-r.y,2))}function ce(r){return Math.PI*2*D(r,"r")}function le(r){return D(r,"width")*2+D(r,"height")*2}function ve(r){return fr({x:D(r,"x1"),y:D(r,"y1")},{x:D(r,"x2"),y:D(r,"y2")})}function Lr(r){for(var e=r.points,n=0,a,t=0;t<e.numberOfItems;t++){var o=e.getItem(t);t>0&&(n+=fr(a,o)),a=o}return n}function de(r){var e=r.points;return Lr(r)+fr(e.getItem(e.numberOfItems-1),e.getItem(0))}function Fr(r){if(r.getTotalLength)return r.getTotalLength();switch(r.tagName.toLowerCase()){case"circle":return ce(r);case"rect":return le(r);case"line":return ve(r);case"polyline":return Lr(r);case"polygon":return de(r)}}function ge(r){var e=Fr(r);return r.setAttribute("stroke-dasharray",e),e}function he(r){for(var e=r.parentNode;c.svg(e)&&c.svg(e.parentNode);)e=e.parentNode;return e}function Br(r,e){var n=e||{},a=n.el||he(r),t=a.getBoundingClientRect(),o=D(a,"viewBox"),u=t.width,s=t.height,i=n.viewBox||(o?o.split(" "):[0,0,u,s]);return{el:a,viewBox:i,x:i[0]/1,y:i[1]/1,w:u,h:s,vW:i[2],vH:i[3]}}function pe(r,e){var n=c.str(r)?Ar(r)[0]:r,a=e||100;return function(t){return{property:t,el:n,svg:Br(n),totalLength:Fr(n)*(a/100)}}}function me(r,e,n){function a(f){f===void 0&&(f=0);var l=e+f>=1?e+f:0;return r.el.getPointAtLength(l)}var t=Br(r.el,r.svg),o=a(),u=a(-1),s=a(1),i=n?1:t.w/t.vW,p=n?1:t.h/t.vH;switch(r.property){case"x":return(o.x-t.x)*i;case"y":return(o.y-t.y)*p;case"angle":return Math.atan2(s.y-u.y,s.x-u.x)*180/Math.PI}}function br(r,e){var n=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,a=Sr(c.pth(r)?r.totalLength:r,e)+"";return{original:a,numbers:a.match(n)?a.match(n).map(Number):[0],strings:c.str(r)||e?a.split(n):[]}}function cr(r){var e=r?K(c.arr(r)?r.map(yr):yr(r)):[];return Z(e,function(n,a,t){return t.indexOf(n)===a})}function Vr(r){var e=cr(r);return e.map(function(n,a){return{target:n,id:a,total:e.length,transforms:{list:Or(n)}}})}function ye(r,e){var n=ar(e);if(/^spring/.test(n.easing)&&(n.duration=Cr(n.easing)),c.arr(r)){var a=r.length,t=a===2&&!c.obj(r[0]);t?r={value:r}:c.fnc(e.duration)||(n.duration=e.duration/a)}var o=c.arr(r)?r:[r];return o.map(function(u,s){var i=c.obj(u)&&!c.pth(u)?u:{value:u};return c.und(i.delay)&&(i.delay=s?0:e.delay),c.und(i.endDelay)&&(i.endDelay=s===o.length-1?e.endDelay:0),i}).map(function(u){return Q(u,n)})}function be(r){for(var e=Z(K(r.map(function(o){return Object.keys(o)})),function(o){return c.key(o)}).reduce(function(o,u){return o.indexOf(u)<0&&o.push(u),o},[]),n={},a=function(o){var u=e[o];n[u]=r.map(function(s){var i={};for(var p in s)c.key(p)?p==u&&(i.value=s[p]):i[p]=s[p];return i})},t=0;t<e.length;t++)a(t);return n}function xe(r,e){var n=[],a=e.keyframes;a&&(e=Q(be(a),e));for(var t in e)c.key(t)&&n.push({name:t,tweens:ye(e[t],r)});return n}function Me(r,e){var n={};for(var a in r){var t=rr(r[a],e);c.arr(t)&&(t=t.map(function(o){return rr(o,e)}),t.length===1&&(t=t[0])),n[a]=t}return n.duration=parseFloat(n.duration),n.delay=parseFloat(n.delay),n}function we(r,e){var n;return r.tweens.map(function(a){var t=Me(a,e),o=t.value,u=c.arr(o)?o[1]:o,s=A(u),i=ur(e.target,r.name,s,e),p=n?n.to.original:i,f=c.arr(o)?o[0]:p,l=A(f)||A(i),h=s||l;return c.und(u)&&(u=p),t.from=br(f,h),t.to=br(sr(u,f),h),t.start=n?n.end:0,t.end=t.start+t.delay+t.duration+t.endDelay,t.easing=nr(t.easing,t.duration),t.isPath=c.pth(o),t.isPathTargetInsideSVG=t.isPath&&c.svg(e.target),t.isColor=c.col(t.from.original),t.isColor&&(t.round=1),n=t,t})}var _r={css:function(r,e,n){return r.style[e]=n},attribute:function(r,e,n){return r.setAttribute(e,n)},object:function(r,e,n){return r[e]=n},transform:function(r,e,n,a,t){if(a.list.set(e,n),e===a.last||t){var o="";a.list.forEach(function(u,s){o+=s+"("+u+") "}),r.style.transform=o}}};function jr(r,e){var n=Vr(r);n.forEach(function(a){for(var t in e){var o=rr(e[t],a),u=a.target,s=A(o),i=ur(u,t,s,a),p=s||A(i),f=sr(Sr(o,p),i),l=or(u,t);_r[l](u,t,f,a.transforms,!0)}})}function Te(r,e){var n=or(r.target,e.name);if(n){var a=we(e,r),t=a[a.length-1];return{type:n,property:e.name,animatable:r,tweens:a,duration:t.end,delay:a[0].delay,endDelay:t.endDelay}}}function Ie(r,e){return Z(K(r.map(function(n){return e.map(function(a){return Te(n,a)})})),function(n){return!c.und(n)})}function zr(r,e){var n=r.length,a=function(o){return o.timelineOffset?o.timelineOffset:0},t={};return t.duration=n?Math.max.apply(Math,r.map(function(o){return a(o)+o.duration})):e.duration,t.delay=n?Math.min.apply(Math,r.map(function(o){return a(o)+o.delay})):e.delay,t.endDelay=n?t.duration-Math.max.apply(Math,r.map(function(o){return a(o)+o.duration-o.endDelay})):e.endDelay,t}var xr=0;function Pe(r){var e=X(Pr,r),n=X(er,r),a=xe(n,r),t=Vr(r.targets),o=Ie(t,a),u=zr(o,n),s=xr;return xr++,Q(e,{id:s,children:[],animatables:t,animations:o,duration:u.duration,delay:u.delay,endDelay:u.endDelay})}var k=[],Rr=function(){var r;function e(){!r&&(!Mr()||!y.suspendWhenDocumentHidden)&&k.length>0&&(r=requestAnimationFrame(n))}function n(t){for(var o=k.length,u=0;u<o;){var s=k[u];s.paused?(k.splice(u,1),o--):(s.tick(t),u++)}r=u>0?requestAnimationFrame(n):void 0}function a(){y.suspendWhenDocumentHidden&&(Mr()?r=cancelAnimationFrame(r):(k.forEach(function(t){return t._onDocumentVisibility()}),Rr()))}return typeof document<"u"&&document.addEventListener("visibilitychange",a),e}();function Mr(){return!!document&&document.hidden}function y(r){r===void 0&&(r={});var e=0,n=0,a=0,t,o=0,u=null;function s(g){var d=window.Promise&&new Promise(function(I){return u=I});return g.finished=d,d}var i=Pe(r);s(i);function p(){var g=i.direction;g!=="alternate"&&(i.direction=g!=="normal"?"normal":"reverse"),i.reversed=!i.reversed,t.forEach(function(d){return d.reversed=i.reversed})}function f(g){return i.reversed?i.duration-g:g}function l(){e=0,n=f(i.currentTime)*(1/y.speed)}function h(g,d){d&&d.seek(g-d.timelineOffset)}function T(g){if(i.reversePlayback)for(var I=o;I--;)h(g,t[I]);else for(var d=0;d<o;d++)h(g,t[d])}function m(g){for(var d=0,I=i.animations,E=I.length;d<E;){var x=I[d],O=x.animatable,B=x.tweens,S=B.length-1,w=B[S];S&&(w=Z(B,function(Nr){return g<Nr.end})[0]||w);for(var L=C(g-w.start-w.delay,0,w.duration)/w.duration,N=isNaN(L)?1:w.easing(L),P=w.to.strings,$=w.round,J=[],Hr=w.to.numbers.length,F=void 0,V=0;V<Hr;V++){var _=void 0,lr=w.to.numbers[V],vr=w.from.numbers[V]||0;w.isPath?_=me(w.value,N*lr,w.isPathTargetInsideSVG):_=vr+N*(lr-vr),$&&(w.isColor&&V>2||(_=Math.round(_*$)/$)),J.push(_)}var dr=P.length;if(!dr)F=J[0];else{F=P[0];for(var j=0;j<dr;j++){P[j];var gr=P[j+1],Y=J[j];isNaN(Y)||(gr?F+=Y+gr:F+=Y+" ")}}_r[x.type](O.target,x.property,F,O.transforms),x.currentValue=F,d++}}function v(g){i[g]&&!i.passThrough&&i[g](i)}function b(){i.remaining&&i.remaining!==!0&&i.remaining--}function M(g){var d=i.duration,I=i.delay,E=d-i.endDelay,x=f(g);i.progress=C(x/d*100,0,100),i.reversePlayback=x<i.currentTime,t&&T(x),!i.began&&i.currentTime>0&&(i.began=!0,v("begin")),!i.loopBegan&&i.currentTime>0&&(i.loopBegan=!0,v("loopBegin")),x<=I&&i.currentTime!==0&&m(0),(x>=E&&i.currentTime!==d||!d)&&m(d),x>I&&x<E?(i.changeBegan||(i.changeBegan=!0,i.changeCompleted=!1,v("changeBegin")),v("change"),m(x)):i.changeBegan&&(i.changeCompleted=!0,i.changeBegan=!1,v("changeComplete")),i.currentTime=C(x,0,d),i.began&&v("update"),g>=d&&(n=0,b(),i.remaining?(e=a,v("loopComplete"),i.loopBegan=!1,i.direction==="alternate"&&p()):(i.paused=!0,i.completed||(i.completed=!0,v("loopComplete"),v("complete"),!i.passThrough&&"Promise"in window&&(u(),s(i)))))}return i.reset=function(){var g=i.direction;i.passThrough=!1,i.currentTime=0,i.progress=0,i.paused=!0,i.began=!1,i.loopBegan=!1,i.changeBegan=!1,i.completed=!1,i.changeCompleted=!1,i.reversePlayback=!1,i.reversed=g==="reverse",i.remaining=i.loop,t=i.children,o=t.length;for(var d=o;d--;)i.children[d].reset();(i.reversed&&i.loop!==!0||g==="alternate"&&i.loop===1)&&i.remaining++,m(i.reversed?i.duration:0)},i._onDocumentVisibility=l,i.set=function(g,d){return jr(g,d),i},i.tick=function(g){a=g,e||(e=a),M((a+(n-e))*y.speed)},i.seek=function(g){M(f(g))},i.pause=function(){i.paused=!0,l()},i.play=function(){i.paused&&(i.completed&&i.reset(),i.paused=!1,k.push(i),l(),Rr())},i.reverse=function(){p(),i.completed=!i.reversed,l()},i.restart=function(){i.reset(),i.play()},i.remove=function(g){var d=cr(g);qr(d,i)},i.reset(),i.autoplay&&i.play(),i}function wr(r,e){for(var n=e.length;n--;)tr(r,e[n].animatable.target)&&e.splice(n,1)}function qr(r,e){var n=e.animations,a=e.children;wr(r,n);for(var t=a.length;t--;){var o=a[t],u=o.animations;wr(r,u),!u.length&&!o.children.length&&a.splice(t,1)}!n.length&&!a.length&&e.pause()}function ke(r){for(var e=cr(r),n=k.length;n--;){var a=k[n];qr(e,a)}}function Ce(r,e){e===void 0&&(e={});var n=e.direction||"normal",a=e.easing?nr(e.easing):null,t=e.grid,o=e.axis,u=e.from||0,s=u==="first",i=u==="center",p=u==="last",f=c.arr(r),l=parseFloat(f?r[0]:r),h=f?parseFloat(r[1]):0,T=A(f?r[1]:r)||0,m=e.start||0+(f?l:0),v=[],b=0;return function(M,g,d){if(s&&(u=0),i&&(u=(d-1)/2),p&&(u=d-1),!v.length){for(var I=0;I<d;I++){if(!t)v.push(Math.abs(u-I));else{var E=i?(t[0]-1)/2:u%t[0],x=i?(t[1]-1)/2:Math.floor(u/t[0]),O=I%t[0],B=Math.floor(I/t[0]),S=E-O,w=x-B,L=Math.sqrt(S*S+w*w);o==="x"&&(L=-S),o==="y"&&(L=-w),v.push(L)}b=Math.max.apply(Math,v)}a&&(v=v.map(function(P){return a(P/b)*b})),n==="reverse"&&(v=v.map(function(P){return o?P<0?P*-1:-P:Math.abs(b-P)}))}var N=f?(h-l)/b:l;return m+N*(Math.round(v[g]*100)/100)+T}}function De(r){r===void 0&&(r={});var e=y(r);return e.duration=0,e.add=function(n,a){var t=k.indexOf(e),o=e.children;t>-1&&k.splice(t,1);function u(h){h.passThrough=!0}for(var s=0;s<o.length;s++)u(o[s]);var i=Q(n,X(er,r));i.targets=i.targets||r.targets;var p=e.duration;i.autoplay=!1,i.direction=e.direction,i.timelineOffset=c.und(a)?p:sr(a,p),u(e),e.seek(i.timelineOffset);var f=y(i);u(f),o.push(f);var l=zr(o,r);return e.delay=l.delay,e.endDelay=l.endDelay,e.duration=l.duration,e.seek(0),e.reset(),e.autoplay&&e.play(),e},e}y.version="3.2.1";y.speed=1;y.suspendWhenDocumentHidden=!0;y.running=k;y.remove=ke;y.get=ur;y.set=jr;y.convertPx=ir;y.path=pe;y.setDashoffset=ge;y.stagger=Ce;y.timeline=De;y.easing=nr;y.penner=Dr;y.random=function(r,e){return Math.floor(Math.random()*(e-r+1))+r};var Ae=Ir('<section class="svelte-1fv7ang"><a class="svelte-1fv7ang"><div class="circle svelte-1fv7ang"><h1 class="svelte-1fv7ang"> </h1></div></a></section>');function z(r,e){Zr(e,!0);let n,a;Yr(()=>{a=y({targets:[n],rotate:360,duration:3e3,loop:!0,autoplay:!1})});var t=Ae(),o=R(t),u=R(o),s=R(u),i=R(s,!0);q(s),q(u),Gr(u,p=>n=p,()=>n),q(o),q(t),Kr(()=>{Xr(o,"href",e.link),Jr(i,e.title)}),pr("mouseenter",o,()=>a.play()),pr("mouseleave",o,()=>a.pause()),Tr(r,t),Qr()}var Ee=Ir('<main class="svelte-1cnpr8u"><!> <!> <!> <!> <!> <h1><a href="./sources">Sources</a></h1></main>');function Ve(r){var e=Ee(),n=R(e);z(n,{title:"Atlanta Food Insecurity",link:"./atlanta-food-insecurity"});var a=W(n,2);z(a,{title:"What is the ACFB?",link:"./what-is"});var t=W(a,2);z(t,{title:"Community Impacts",link:"./community-impacts"});var o=W(t,2);z(o,{title:"What can you do?",link:"./what-can-do"});var u=W(o,2);z(u,{title:"Frequently asked questions",link:"./faq"}),$r(2),q(e),Tr(r,e)}export{Ve as component};
