import{a as D,p as M,f as $,l as U,k as b,o as N,_ as O}from"./index.js";import{D as S}from"./siteSetting-efd6ab5b.js";import{c as v,u as A}from"./index-d8f48ecc.js";import{b as x}from"./index-8a4f8beb.js";import{h as E}from"./header-55b09394.js";import{D as P,l as y}from"./antd-5dd6c6b2.js";import{d as R,c as V,a7 as n,Z as t,_ as B,l as a,a9 as m,a8 as f,ab as _,$ as r,a1 as s,a0 as T,F}from"./vue-ea98dac5.js";import"./index-8c954dea.js";import"./useContentViewHeight-b8e9ee08.js";import"./useWindowSizeFn-997fa1d0.js";import"./lock-b0a3ce64.js";const z=R({name:"UserDropdown",components:{Dropdown:P,Menu:y,MenuItem:v(()=>D(()=>import("./DropMenuItem-979c2997.js"),["assets/DropMenuItem-979c2997.js","assets/index.js","assets/vue-ea98dac5.js","assets/antd-5dd6c6b2.js","assets/index-139e432b.css"])),MenuDivider:y.Divider,LockAction:v(()=>D(()=>import("./LockModal-a85b64a4.js"),["assets/LockModal-a85b64a4.js","assets/index.js","assets/vue-ea98dac5.js","assets/antd-5dd6c6b2.js","assets/index-139e432b.css","assets/index-8a4f8beb.js","assets/useWindowSizeFn-997fa1d0.js","assets/index-712ddccc.css","assets/BasicForm-b3846ac5.js","assets/FormItem.vue_vue_type_script_lang-e731d448.js","assets/componentMap-72b605b4.js","assets/useFormItem-ee44bb9f.js","assets/RadioButtonGroup-c288bb4d.js","assets/uuid-31b8b5a4.js","assets/download-2647fd8d.js","assets/base64Conver-39fc0d26.js","assets/index-04cb8ba5.js","assets/index-ba72e6bd.css","assets/index-d54c0a54.js","assets/index-7f5b8959.css","assets/componentMap-afd9a640.css","assets/BasicForm-dd0d74d8.css","assets/useForm-4ab89271.js","assets/lock-b0a3ce64.js","assets/header-55b09394.js","assets/LockModal-ca58db68.css"]))},props:{theme:M.oneOf(["dark","light"])},setup(){const{prefixCls:e}=$("header-user-dropdown"),{t:g}=b(),{getShowDoc:k,getUseLockPage:h}=A(),i=U(),C=V(()=>{const{realName:d="",avatar:L,desc:I}=i.getUserInfo||{};return{realName:d,avatar:L||E,desc:I}}),[o,{openModal:l}]=x();function c(){l(!0)}function p(){i.confirmLoginOut()}function u(){N(S)}function w(d){switch(d.key){case"logout":p();break;case"doc":u();break;case"lock":c();break}}return{prefixCls:e,t:g,getUserInfo:C,handleMenuClick:w,getShowDoc:k,register:o,getUseLockPage:h}}});const H=["src"];function W(e,g,k,h,i,C){const o=n("MenuItem"),l=n("MenuDivider"),c=n("Menu"),p=n("Dropdown"),u=n("LockAction");return t(),B(F,null,[a(p,{placement:"bottomLeft",overlayClassName:`${e.prefixCls}-dropdown-overlay`},{overlay:m(()=>[a(c,{onClick:e.handleMenuClick},{default:m(()=>[e.getShowDoc?(t(),f(o,{key:"doc",text:e.t("layout.header.dropdownItemDoc"),icon:"ion:document-text-outline"},null,8,["text"])):_("",!0),e.getShowDoc?(t(),f(l,{key:1})):_("",!0),e.getUseLockPage?(t(),f(o,{key:"lock",text:e.t("layout.header.tooltipLock"),icon:"ion:lock-closed-outline"},null,8,["text"])):_("",!0),a(o,{key:"logout",text:e.t("layout.header.dropdownItemLoginOut"),icon:"ion:power-outline"},null,8,["text"])]),_:1},8,["onClick"])]),default:m(()=>[r("span",{class:s([[e.prefixCls,`${e.prefixCls}--${e.theme}`],"flex"])},[r("img",{class:s(`${e.prefixCls}__header`),src:e.getUserInfo.avatar},null,10,H),r("span",{class:s(`${e.prefixCls}__info hidden md:block`)},[r("span",{class:s([`${e.prefixCls}__name`,"truncate"])},T(e.getUserInfo.realName),3)],2)],2)]),_:1},8,["overlayClassName"]),a(u,{onRegister:e.register},null,8,["onRegister"])],64)}const ne=O(z,[["render",W]]);export{ne as default};
