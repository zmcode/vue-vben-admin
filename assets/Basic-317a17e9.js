import{B as f}from"./BasicTable-37da05b6.js";import"./componentMap-72b605b4.js";import"./TableImg.vue_vue_type_style_index_0_lang-cde0f095.js";import{getBasicColumns as B,getBasicData as b}from"./tableData-525de01f.js";import{d as E,f as a,a7 as c,Z as v,_ as A,l as t,a9 as n,E as s,a0 as m}from"./vue-ea98dac5.js";import{_ as h}from"./index.js";import"./useFormItem-ee44bb9f.js";import"./antd-5dd6c6b2.js";import"./RadioButtonGroup-c288bb4d.js";import"./index-8a4f8beb.js";import"./useWindowSizeFn-997fa1d0.js";import"./uuid-31b8b5a4.js";import"./download-2647fd8d.js";import"./base64Conver-39fc0d26.js";import"./index-04cb8ba5.js";import"./index-d54c0a54.js";import"./BasicForm-b3846ac5.js";import"./FormItem.vue_vue_type_script_lang-e731d448.js";import"./useForm-4ab89271.js";import"./onMountedOrActivated-3eb95ecd.js";import"./sortable.esm-4ae27e0b.js";import"./select-93eac05e.js";const k=E({components:{BasicTable:f},setup(){const e=a(!1),i=a(!1),u=a(!0),r=a(!0),l=a(!1);function d(){e.value=!e.value}function o(){u.value=!u.value}function p(){i.value=!0,setTimeout(()=>{i.value=!1,l.value={pageSize:20}},3e3)}function g(){r.value=!r.value}function C(F){}return{columns:B(),data:b(),canResize:e,loading:i,striped:u,border:r,toggleStriped:o,toggleCanResize:d,toggleLoading:p,toggleBorder:g,pagination:l,handleColumnChange:C}}}),y={class:"p-4"};function z(e,i,u,r,l,d){const o=c("a-button"),p=c("BasicTable");return v(),A("div",y,[t(p,{title:"基础示例",titleHelpMessage:"温馨提醒",columns:e.columns,dataSource:e.data,canResize:e.canResize,loading:e.loading,striped:e.striped,bordered:e.border,showTableSetting:"",pagination:e.pagination,onColumnsChange:e.handleColumnChange},{toolbar:n(()=>[t(o,{type:"primary",onClick:e.toggleCanResize},{default:n(()=>[s(m(e.canResize?"取消自适应":"自适应高度"),1)]),_:1},8,["onClick"]),t(o,{type:"primary",onClick:e.toggleBorder},{default:n(()=>[s(m(e.border?"隐藏边框":"显示边框"),1)]),_:1},8,["onClick"]),t(o,{type:"primary",onClick:e.toggleLoading},{default:n(()=>[s(" 开启loading ")]),_:1},8,["onClick"]),t(o,{type:"primary",onClick:e.toggleStriped},{default:n(()=>[s(m(e.striped?"隐藏斑马纹":"显示斑马纹"),1)]),_:1},8,["onClick"])]),_:1},8,["columns","dataSource","canResize","loading","striped","bordered","pagination","onColumnsChange"])])}const U=h(k,[["render",z]]);export{U as default};
