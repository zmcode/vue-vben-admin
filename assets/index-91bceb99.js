import{I as k,_ as x}from"./index.js";import{B as y}from"./BasicForm-b3846ac5.js";import"./componentMap-72b605b4.js";import"./RadioButtonGroup-c288bb4d.js";import{searchList as F,actions as b,schemas as L}from"./data-a215bd35.js";import{P as N}from"./index-0d561ea7.js";import{d as P,a7 as a,Z as o,a8 as p,a9 as r,a1 as s,l as _,$ as n,_ as m,aa as d,a0 as l,F as u,ab as T,E as f}from"./vue-ea98dac5.js";import{K as V,ab as c}from"./antd-5dd6c6b2.js";import"./FormItem.vue_vue_type_script_lang-e731d448.js";import"./index-8a4f8beb.js";import"./useWindowSizeFn-997fa1d0.js";import"./useFormItem-ee44bb9f.js";import"./uuid-31b8b5a4.js";import"./download-2647fd8d.js";import"./base64Conver-39fc0d26.js";import"./index-04cb8ba5.js";import"./index-d54c0a54.js";import"./useContentViewHeight-b8e9ee08.js";import"./onMountedOrActivated-3eb95ecd.js";const W=P({components:{Icon:k,Tag:V,BasicForm:y,PageWrapper:N,[c.name]:c,[c.Item.name]:c.Item,AListItemMeta:c.Item.Meta},setup(){return{prefixCls:"list-search",list:F,actions:b,schemas:L}}});function w(e,A,D,E,M,z){const C=a("BasicForm"),$=a("Icon"),h=a("Tag"),v=a("a-list-item-meta"),B=a("a-list-item"),I=a("a-list"),g=a("PageWrapper");return o(),p(g,{class:s(e.prefixCls),title:"搜索列表"},{headerContent:r(()=>[_(C,{class:s(`${e.prefixCls}__header-form`),labelWidth:100,schemas:e.schemas,showActionButtonGroup:!1},null,8,["class","schemas"])]),default:r(()=>[n("div",{class:s(`${e.prefixCls}__container`)},[_(I,null,{default:r(()=>[(o(!0),m(u,null,d(e.list,i=>(o(),p(B,{key:i.id},{default:r(()=>[_(v,null,{description:r(()=>[n("div",{class:s(`${e.prefixCls}__content`)},l(i.content),3),n("div",{class:s(`${e.prefixCls}__action`)},[(o(!0),m(u,null,d(e.actions,t=>(o(),m("div",{key:t.icon,class:s(`${e.prefixCls}__action-item`)},[t.icon?(o(),p($,{key:0,class:s(`${e.prefixCls}__action-icon`),icon:t.icon,color:t.color},null,8,["class","icon","color"])):T("",!0),f(" "+l(t.text),1)],2))),128)),n("span",{class:s(`${e.prefixCls}__time`)},l(i.time),3)],2)]),title:r(()=>[n("p",{class:s(`${e.prefixCls}__title`)},l(i.title),3),n("div",null,[(o(!0),m(u,null,d(i.description,t=>(o(),p(h,{key:t,class:"mb-2"},{default:r(()=>[f(l(t),1)]),_:2},1024))),128))])]),_:2},1024)]),_:2},1024))),128))]),_:1})],2)]),_:1},8,["class"])}const re=x(W,[["render",w],["__scopeId","data-v-708dfd24"]]);export{re as default};
