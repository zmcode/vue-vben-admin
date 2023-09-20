var S=Object.defineProperty;var d=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var f=(e,t,o)=>t in e?S(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,b=(e,t)=>{for(var o in t||(t={}))_.call(t,o)&&f(e,o,t[o]);if(d)for(var o of d(t))D.call(t,o)&&f(e,o,t[o]);return e};var m=(e,t,o)=>new Promise((s,a)=>{var c=n=>{try{r(o.next(n))}catch(l){a(l)}},i=n=>{try{r(o.throw(n))}catch(l){a(l)}},r=n=>n.done?s(n.value):Promise.resolve(n.value).then(c,i);r((o=o.apply(e,t)).next())});import{B as R}from"./BasicForm-b3846ac5.js";import"./componentMap-72b605b4.js";import{u as F}from"./useForm-4ab89271.js";import"./RadioButtonGroup-c288bb4d.js";import{I as M,_ as N}from"./index.js";import{m as w,d as x,f as k,c as V,u as h,a7 as g,Z as G,a8 as T,a9 as $,l as C,ac as q}from"./vue-ea98dac5.js";import{K as L}from"./antd-5dd6c6b2.js";import{B as O,a as j}from"./index-84477514.js";import{d as U}from"./system-82075152.js";const ae=[{title:"菜单名称",dataIndex:"menuName",width:200,align:"left"},{title:"图标",dataIndex:"icon",width:50,customRender:({record:e})=>w(M,{icon:e.icon})},{title:"权限标识",dataIndex:"permission",width:180},{title:"组件",dataIndex:"component"},{title:"排序",dataIndex:"orderNo",width:50},{title:"状态",dataIndex:"status",width:80,customRender:({record:e})=>{const o=~~e.status===0,s=o?"green":"red",a=o?"启用":"停用";return w(L,{color:s},()=>a)}},{title:"创建时间",dataIndex:"createTime",width:180}],z=e=>e==="0",v=e=>e==="1",p=e=>e==="2",re=[{field:"menuName",label:"菜单名称",component:"Input",colProps:{span:8}},{field:"status",label:"状态",component:"Select",componentProps:{options:[{label:"启用",value:"0"},{label:"停用",value:"1"}]},colProps:{span:8}}],A=[{field:"type",label:"菜单类型",component:"RadioButtonGroup",defaultValue:"0",componentProps:{options:[{label:"目录",value:"0"},{label:"菜单",value:"1"},{label:"按钮",value:"2"}]},colProps:{lg:24,md:24}},{field:"menuName",label:"菜单名称",component:"Input",required:!0},{field:"parentMenu",label:"上级菜单",component:"TreeSelect",componentProps:{fieldNames:{label:"menuName",key:"id",value:"id"},getPopupContainer:()=>document.body}},{field:"orderNo",label:"排序",component:"InputNumber",required:!0},{field:"icon",label:"图标",component:"IconPicker",required:!0,ifShow:({values:e})=>!p(e.type)},{field:"routePath",label:"路由地址",component:"Input",required:!0,ifShow:({values:e})=>!p(e.type)},{field:"component",label:"组件路径",component:"Input",ifShow:({values:e})=>v(e.type)},{field:"permission",label:"权限标识",component:"Input",ifShow:({values:e})=>!z(e.type)},{field:"status",label:"状态",component:"RadioButtonGroup",defaultValue:"0",componentProps:{options:[{label:"启用",value:"0"},{label:"禁用",value:"1"}]}},{field:"isExt",label:"是否外链",component:"RadioButtonGroup",defaultValue:"0",componentProps:{options:[{label:"否",value:"0"},{label:"是",value:"1"}]},ifShow:({values:e})=>!p(e.type)},{field:"keepalive",label:"是否缓存",component:"RadioButtonGroup",defaultValue:"0",componentProps:{options:[{label:"否",value:"0"},{label:"是",value:"1"}]},ifShow:({values:e})=>v(e.type)},{field:"show",label:"是否显示",component:"RadioButtonGroup",defaultValue:"0",componentProps:{options:[{label:"是",value:"0"},{label:"否",value:"1"}]},ifShow:({values:e})=>!p(e.type)}],E=x({name:"MenuDrawer",components:{BasicDrawer:O,BasicForm:R},emits:["success","register"],setup(e,{emit:t}){const o=k(!0),[s,{resetFields:a,setFieldsValue:c,updateSchema:i,validate:r}]=F({labelWidth:100,schemas:A,showActionButtonGroup:!1,baseColProps:{lg:12,md:24}}),[n,{setDrawerProps:l,closeDrawer:P}]=j(u=>m(this,null,function*(){a(),l({confirmLoading:!1}),o.value=!!(u!=null&&u.isUpdate),h(o)&&c(b({},u.record));const y=yield U();i({field:"parentMenu",componentProps:{treeData:y}})})),B=V(()=>h(o)?"编辑菜单":"新增菜单");function I(){return m(this,null,function*(){try{const u=yield r();l({confirmLoading:!0}),P(),t("success")}finally{l({confirmLoading:!1})}})}return{registerDrawer:n,registerForm:s,getTitle:B,handleSubmit:I}}});function K(e,t,o,s,a,c){const i=g("BasicForm"),r=g("BasicDrawer");return G(),T(r,q(e.$attrs,{onRegister:e.registerDrawer,showFooter:"",title:e.getTitle,width:"50%",onOk:e.handleSubmit}),{default:$(()=>[C(i,{onRegister:e.registerForm},null,8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}const W=N(E,[["render",K]]),le=Object.freeze(Object.defineProperty({__proto__:null,default:W},Symbol.toStringTag,{value:"Module"}));export{W as M,le as a,ae as c,re as s};
