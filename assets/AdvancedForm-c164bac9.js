import{B as m}from"./BasicForm-b3846ac5.js";import"./componentMap-72b605b4.js";import{u as i}from"./useForm-4ab89271.js";import"./RadioButtonGroup-c288bb4d.js";import{C as d,_ as f}from"./index.js";import{P as b}from"./index-0d561ea7.js";import{d as C,a7 as l,Z as P,a8 as h,a9 as p,l as t}from"./vue-ea98dac5.js";import"./FormItem.vue_vue_type_script_lang-e731d448.js";import"./antd-5dd6c6b2.js";import"./index-8a4f8beb.js";import"./useWindowSizeFn-997fa1d0.js";import"./useFormItem-ee44bb9f.js";import"./uuid-31b8b5a4.js";import"./download-2647fd8d.js";import"./base64Conver-39fc0d26.js";import"./index-04cb8ba5.js";import"./index-d54c0a54.js";import"./useContentViewHeight-b8e9ee08.js";import"./onMountedOrActivated-3eb95ecd.js";const c=()=>[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:e=>{}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}}];function _(){return[{field:"field10",component:"Input",label:"字段10",colProps:{span:8}},{field:"field11",component:"Input",label:"字段11",colProps:{span:8}},{field:"field12",component:"Input",label:"字段12",colProps:{span:8}},{field:"field13",component:"Input",label:"字段13",colProps:{span:8}}]}const F=C({components:{BasicForm:m,CollapseContainer:d,PageWrapper:b},setup(){const[e]=i({labelWidth:120,schemas:c(),actionColOptions:{span:24},compact:!0,showAdvancedButton:!0}),n=[];for(let o=14;o<30;o++)n.push({field:"field"+o,component:"Input",label:"字段"+o,colProps:{span:8}});const[a]=i({labelWidth:120,schemas:[...c(),..._(),{field:"",component:"Divider",label:"更多字段"},...n],actionColOptions:{span:24},compact:!0,showAdvancedButton:!0,alwaysShowLines:2});return{register:e,register1:a}}});function g(e,n,a,o,B,v){const r=l("BasicForm"),s=l("CollapseContainer"),u=l("PageWrapper");return P(),h(u,{title:"可折叠表单示例"},{default:p(()=>[t(s,{title:"基础收缩示例"},{default:p(()=>[t(r,{onRegister:e.register},null,8,["onRegister"])]),_:1}),t(s,{title:"超过3行自动收起，折叠时保留2行",class:"mt-4"},{default:p(()=>[t(r,{onRegister:e.register1},null,8,["onRegister"])]),_:1})]),_:1})}const q=f(F,[["render",g]]);export{q as default};
