import{aU as _,w as f,_ as k}from"./index.js";import{d as a,f as r,o as m,Z as c,_ as C,N as O,a7 as s,a8 as v,a9 as i,l as b,$ as x,a0 as S}from"./vue-ea98dac5.js";import{P as $}from"./index-0d561ea7.js";import"./antd-5dd6c6b2.js";import"./useContentViewHeight-b8e9ee08.js";import"./useWindowSizeFn-997fa1d0.js";import"./onMountedOrActivated-3eb95ecd.js";const B=a({__name:"ClickOutSide",emits:["mounted","clickOutside"],setup(e,{emit:t}){const n=r(null);return _(n,()=>{t("clickOutside")}),m(()=>{t("mounted")}),(o,l)=>(c(),C("div",{ref_key:"wrap",ref:n},[O(o.$slots,"default")],512))}}),g=f(B),w=a({components:{ClickOutSide:g,PageWrapper:$},setup(){const e=r("Click");function t(){e.value="Click Out Side"}function n(){e.value="Click Inner"}return{innerClick:n,handleClickOutside:t,text:e}}});function y(e,t,n,o,l,E){const u=s("ClickOutSide"),d=s("PageWrapper");return c(),v(d,{title:"点内外部触发事件"},{default:i(()=>[b(u,{onClickOutside:e.handleClickOutside,class:"flex justify-center"},{default:i(()=>[x("div",{onClick:t[0]||(t[0]=(...p)=>e.innerClick&&e.innerClick(...p)),class:"demo-box"},S(e.text),1)]),_:1},8,["onClickOutside"])]),_:1})}const j=k(w,[["render",y],["__scopeId","data-v-8fdebb4b"]]);export{j as default};
