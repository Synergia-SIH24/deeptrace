import{F as y,a0 as g,am as E,P as b}from"./runtime.BjDaq2n6.js";const m=new Set,S=new Set;function T(r,t,a,n){function o(e){if(n.capture||k.call(t,e),!e.cancelBubble)return a.call(this,e)}return r.startsWith("pointer")||r.startsWith("touch")||r==="wheel"?g(()=>{t.addEventListener(r,o,n)}):t.addEventListener(r,o,n),o}function V(r,t,a,n,o){var e={capture:n,passive:o},u=T(r,t,a,e);(t===document.body||t===window||t===document)&&y(()=>{t.removeEventListener(r,u,e)})}function B(r){for(var t=0;t<r.length;t++)m.add(r[t]);for(var a of S)a(r)}function k(r){var _;var t=this,a=t.ownerDocument,n=r.type,o=((_=r.composedPath)==null?void 0:_.call(r))||[],e=o[0]||r.target,u=0,d=r.__root;if(d){var l=o.indexOf(d);if(l!==-1&&(t===document||t===window)){r.__root=t;return}var p=o.indexOf(t);if(p===-1)return;l<=p&&(u=l)}if(e=o[u]||r.target,e!==t){E(r,"currentTarget",{configurable:!0,get(){return e||a}});try{for(var i,h=[];e!==null;){var f=e.parentNode||e.host||null;try{var s=e["__"+n];if(s!==void 0&&!e.disabled)if(b(s)){var[w,...v]=s;w.apply(e,[r,...v])}else s.call(e,r)}catch(c){i?h.push(c):i=c}if(r.cancelBubble||f===t||f===null)break;e=f}if(i){for(let c of h)queueMicrotask(()=>{throw c});throw i}}finally{r.__root=t,delete r.currentTarget}}}function D(r){return r.endsWith("capture")&&r!=="gotpointercapture"&&r!=="lostpointercapture"}const L=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function M(r){return L.includes(r)}const A={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"};function O(r){return r=r.toLowerCase(),A[r]??r}const I=["wheel","mousewheel","touchstart","touchmove"];function P(r){return I.includes(r)}export{m as a,D as b,T as c,B as d,M as e,V as f,k as h,P as i,O as n,S as r};
