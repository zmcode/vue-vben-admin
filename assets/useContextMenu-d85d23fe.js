var $=Object.defineProperty,O=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var I=(e,t,n)=>t in e?$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,_=(e,t)=>{for(var n in t||(t={}))N.call(t,n)&&I(e,n,t[n]);if(C)for(var n of C(t))S.call(t,n)&&I(e,n,t[n]);return e},g=(e,t)=>O(e,D(t));import{I as H,aH as P}from"./index.js";import{l as h,a1 as A}from"./antd-5dd6c6b2.js";import{d as F,f as w,c as R,o as V,x as W,b as E,u as v,l as c,i as z,F as B,I as T,g as U}from"./vue-ea98dac5.js";function X(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!z(e)}const b="context-menu",Y={width:{type:Number,default:156},customEvent:{type:Object,default:null},styles:{type:Object},showIcon:{type:Boolean,default:!0},axis:{type:Object,default(){return{x:0,y:0}}},items:{type:Array,default(){return[]}}},M=e=>{const{item:t}=e;return c("span",{style:"display: inline-block; width: 100%; ",class:"px-4",onClick:e.handler.bind(null,t)},[e.showIcon&&t.icon&&c(H,{class:"mr-2",icon:t.icon},null),c("span",null,[t.label])])},q=F({name:"ContextMenu",props:Y,setup(e){const t=w(null),n=w(!1),r=R(()=>{const{axis:o,items:s,styles:l,width:i}=e,{x:a,y:d}=o||{x:0,y:0},y=(s||[]).length*40,p=i,x=document.body,L=x.clientWidth<a+p?a-p:a,j=x.clientHeight<d+y?d-y:d;return g(_({},l),{position:"absolute",width:`${i}px`,left:`${L+1}px`,top:`${j+1}px`,zIndex:9999})});V(()=>{W(()=>n.value=!0)}),E(()=>{const o=v(t);o&&document.body.removeChild(o)});function m(o,s){const{handler:l,disabled:i}=o;i||(n.value=!1,s==null||s.stopPropagation(),s==null||s.preventDefault(),l==null||l())}function u(o){return o.filter(l=>!l.hidden).map(l=>{const{disabled:i,label:a,children:d,divider:y=!1}=l,p={item:l,handler:m,showIcon:e.showIcon};return!d||d.length===0?c(B,null,[c(h.Item,{disabled:i,class:`${b}__item`,key:a},{default:()=>[c(M,p,null)]}),y?c(A,{key:`d-${a}`},null):null]):v(n)?c(h.SubMenu,{key:a,disabled:i,popupClassName:`${b}__popup`},{title:()=>c(M,p,null),default:()=>u(d)}):null})}return()=>{let o;if(!v(n))return null;const{items:s}=e;return c("div",{class:b},[c(h,{inlineIndent:12,mode:"vertical",ref:t,style:v(r)},X(o=u(s))?o:{default:()=>[o]})])}}});const f={domList:[],resolve:()=>{}},G=function(e){const{event:t}=e||{};if(t&&(t==null||t.preventDefault()),!!P)return new Promise(n=>{const r=document.body,m=document.createElement("div"),u={};e.styles&&(u.styles=e.styles),e.items&&(u.items=e.items),e.event&&(u.customEvent=t,u.axis={x:t.clientX,y:t.clientY});const o=c(q,u);T(o,m);const s=function(){f.resolve("")};f.domList.push(m);const l=function(){f.domList.forEach(i=>{try{i&&r.removeChild(i)}catch(a){}}),r.removeEventListener("click",s),r.removeEventListener("scroll",s)};f.resolve=function(i){l(),n(i)},l(),r.appendChild(m),r.addEventListener("click",s),r.addEventListener("scroll",s)})},k=function(){f&&(f.resolve(""),f.domList=[])};function ee(e=!0){return U()&&e&&E(()=>{k()}),[G,k]}export{ee as u};
