import{aI as m,Z as p,b3 as c,_ as d}from"./index.js";import{d as l,c as _,a7 as u,Z as F,_ as f,E as o,l as s,a9 as i,a0 as C}from"./vue-ea98dac5.js";import{a1 as M}from"./antd-5dd6c6b2.js";const A=l({name:"CurrentPermissionMode",components:{Divider:M},setup(){const e=m(),t=_(()=>e.getProjectConfig.permissionMode),{togglePermissionMode:n}=p();return{permissionMode:t,PermissionModeEnum:c,togglePermissionMode:n}}}),P={class:"mt-2"};function g(e,t,n,D,E,k){const r=u("a-button"),a=u("Divider");return F(),f("div",P,[o(" 当前权限模式： "),s(r,{type:"link"},{default:i(()=>[o(C(e.permissionMode===e.PermissionModeEnum.BACK?"后台权限模式":"前端角色权限模式"),1)]),_:1}),s(r,{class:"ml-4",onClick:e.togglePermissionMode,type:"primary"},{default:i(()=>[o(" 切换权限模式 ")]),_:1},8,["onClick"]),s(a)])}const b=d(A,[["render",g]]);export{b as default};
