var f=(m,a,s)=>new Promise((p,n)=>{var _=e=>{try{t(s.next(e))}catch(i){n(i)}},u=e=>{try{t(s.throw(e))}catch(i){n(i)}},t=e=>e.done?p(e.value):Promise.resolve(e.value).then(_,u);t((s=s.apply(m,a)).next())});import{B as v}from"./BasicForm-b3846ac5.js";import"./componentMap-72b605b4.js";import{u as b}from"./useForm-4ab89271.js";import"./RadioButtonGroup-c288bb4d.js";import{step2Schemas as E}from"./data-6b084658.js";import{d as x,a7 as r,Z as C,_ as g,l as o,a9 as c,E as l}from"./vue-ea98dac5.js";import{Z as B,a1 as D,a8 as d}from"./antd-5dd6c6b2.js";import{_ as h}from"./index.js";import"./FormItem.vue_vue_type_script_lang-e731d448.js";import"./index-8a4f8beb.js";import"./useWindowSizeFn-997fa1d0.js";import"./useFormItem-ee44bb9f.js";import"./uuid-31b8b5a4.js";import"./download-2647fd8d.js";import"./base64Conver-39fc0d26.js";import"./index-04cb8ba5.js";import"./index-d54c0a54.js";const y=x({components:{BasicForm:v,[B.name]:B,[D.name]:D,[d.name]:d,[d.Item.name]:d.Item},emits:["next","prev"],setup(m,{emit:a}){const[s,{validate:p,setProps:n}]=b({labelWidth:80,schemas:E,actionColOptions:{span:14},resetButtonOptions:{text:"上一步"},submitButtonOptions:{text:"提交"},resetFunc:_,submitFunc:u});function _(){return f(this,null,function*(){a("prev")})}function u(){return f(this,null,function*(){try{const t=yield p();n({submitButtonOptions:{loading:!0}}),setTimeout(()=>{n({submitButtonOptions:{loading:!1}}),a("next",t)},1500)}catch(t){}})}return{register:s}}});const O={class:"step2"};function A(m,a,s,p,n,_){const u=r("a-alert"),t=r("a-descriptions-item"),e=r("a-descriptions"),i=r("a-divider"),F=r("BasicForm");return C(),g("div",O,[o(u,{message:"确认转账后，资金将直接打入对方账户，无法退回。","show-icon":""}),o(e,{column:1,class:"mt-5"},{default:c(()=>[o(t,{label:"付款账户"},{default:c(()=>[l(" ant-design@alipay.com ")]),_:1}),o(t,{label:"收款账户"},{default:c(()=>[l(" test@example.com ")]),_:1}),o(t,{label:"收款人姓名"},{default:c(()=>[l(" Vben ")]),_:1}),o(t,{label:"转账金额"},{default:c(()=>[l(" 500元 ")]),_:1})]),_:1}),o(i),o(F,{onRegister:m.register},null,8,["onRegister"])])}const K=h(y,[["render",A],["__scopeId","data-v-61ce13ca"]]);export{K as default};
