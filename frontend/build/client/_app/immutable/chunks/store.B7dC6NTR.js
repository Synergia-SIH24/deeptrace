import{s as i}from"./index.pS2hHibR.js";import{F as c,G as f,I as o,J as b,K as a}from"./runtime.BjDaq2n6.js";function p(u,s,r){const e=r[s]??(r[s]={store:null,source:f(void 0),unsubscribe:o});if(e.store!==u)if(e.unsubscribe(),e.store=u??null,u==null)e.source.v=void 0,e.unsubscribe=o;else{var n=!0;e.unsubscribe=i(u,t=>{n?e.source.v=t:b(e.source,t)}),n=!1}return a(e.source)}function v(){const u={};return c(()=>{for(var s in u)u[s].unsubscribe()}),u}function g(u,s,r){return u.set(r),s}export{p as a,g as b,v as s};