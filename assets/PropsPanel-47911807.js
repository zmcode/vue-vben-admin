import C from"./FormProps-fd5f04cf.js";import b from"./FormItemProps-18ddbfe2.js";import y from"./ComponentProps-289026fa.js";import v from"./FormItemColumnProps-10bd85dd.js";import{u as k}from"./useFormDesignState-2b7717e9.js";import{c}from"./formItemConfig-f39c5efc.js";import{X as F,b6 as g}from"./antd-5dd6c6b2.js";import{d as T,c as I,a7 as t,Z as e,_ as K,l as s,a9 as r,a8 as n,N as $}from"./vue-ea98dac5.js";import{_ as B}from"./index.js";import"./formItemPropsConfig-2ab196fe.js";import"./RuleProps-d2ef24f1.js";import"./index-a4c1e44f.js";import"./RadioButtonGroup-c288bb4d.js";import"./useFormItem-ee44bb9f.js";import"./FormOptions-15d2a669.js";import"./componentMap-72b605b4.js";import"./index-8a4f8beb.js";import"./useWindowSizeFn-997fa1d0.js";import"./uuid-31b8b5a4.js";import"./download-2647fd8d.js";import"./base64Conver-39fc0d26.js";import"./index-04cb8ba5.js";import"./index-d54c0a54.js";const E=T({name:"PropsPanel",components:{FormProps:C,FormItemProps:b,ComponentProps:y,ComponentColumnProps:v,Tabs:F,TabPane:g},setup(){const{formConfig:o}=k(),m=I(()=>c.find(i=>{var a;return i.component===((a=o.value.currentItem)==null?void 0:a.component)}));return{formConfig:o,customComponents:c,slotProps:m}}});function S(o,m,i,a,N,w){const u=t("FormProps"),p=t("TabPane"),_=t("FormItemProps"),l=t("ComponentColumnProps"),f=t("ComponentProps"),P=t("Tabs");return e(),K("div",null,[s(P,{activeKey:o.formConfig.activeKey,"onUpdate:activeKey":m[0]||(m[0]=d=>o.formConfig.activeKey=d),tabBarStyle:{margin:0}},{default:r(()=>[(e(),n(p,{key:1,tab:"表单"},{default:r(()=>[s(u)]),_:1})),(e(),n(p,{key:2,tab:"控件"},{default:r(()=>[s(_)]),_:1})),(e(),n(p,{key:3,tab:"栅格"},{default:r(()=>[s(l)]),_:1})),(e(),n(p,{key:4,tab:"组件"},{default:r(()=>[o.slotProps?$(o.$slots,o.slotProps.component+"Props",{key:0},void 0,!0):(e(),n(f,{key:1}))]),_:3}))]),_:3},8,["activeKey"])])}const eo=B(E,[["render",S],["__scopeId","data-v-eb3727e7"]]);export{eo as default};
