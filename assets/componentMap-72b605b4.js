var Ve=Object.defineProperty,We=Object.defineProperties;var He=Object.getOwnPropertyDescriptors;var we=Object.getOwnPropertySymbols;var Ze=Object.prototype.hasOwnProperty,Xe=Object.prototype.propertyIsEnumerable;var _e=(e,n,a)=>n in e?Ve(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a,A=(e,n)=>{for(var a in n||(n={}))Ze.call(n,a)&&_e(e,a,n[a]);if(we)for(var a of we(n))Xe.call(n,a)&&_e(e,a,n[a]);return e},J=(e,n)=>We(e,He(n));var B=(e,n,a)=>new Promise((s,l)=>{var f=o=>{try{u(a.next(o))}catch(t){l(t)}},d=o=>{try{u(a.throw(o))}catch(t){l(t)}},u=o=>o.done?s(o.value):Promise.resolve(o.value).then(f,d);u((a=a.apply(e,n)).next())});import{p as y,v as $e,k as q,m as K,_ as V,N as ie,W as qe,I as ke,X as Ye,Y as Qe,f as Je,Z as xe,n as et,R as tt,b as nt,$ as at,w as ot,a0 as lt}from"./index.js";import{u as be}from"./useFormItem-ee44bb9f.js";import{ad as re,o as ne,a9 as Z,Q as Re,ae as ue,af as st,ag as Te,ah as ve,ai as rt,a1 as Pe,aj as it,T as Le,ak as ut,al as ct,K as ge,am as dt,Z as pt,V as ft,w as ae,an as mt,ao as gt,ap as ht,a0 as Ie,aq as yt,ar as vt,as as ce,at as Ue}from"./antd-5dd6c6b2.js";import{d as E,f as F,c as R,h as de,w as D,u as w,a7 as b,Z as S,a8 as $,a9 as _,_ as z,aa as oe,F as x,E as N,a0 as M,ac as X,ad as pe,N as fe,ai as te,aj as me,l as h,$ as Ce,o as Oe,p as bt,e as Ct,H as Fe,a1 as he,ab as j,x as St,r as wt,G as _t}from"./vue-ea98dac5.js";import{R as Ft}from"./RadioButtonGroup-c288bb4d.js";import{u as At,B as De,a as Be,b as Ae}from"./index-8a4f8beb.js";import{b as $t}from"./uuid-31b8b5a4.js";import{d as kt}from"./download-2647fd8d.js";import{S as Rt}from"./index-04cb8ba5.js";import{C as Tt}from"./index-d54c0a54.js";const Pt=E({name:"ApiRadioGroup",components:{RadioGroup:re.Group,RadioButton:re.Button,Radio:re},props:{api:{type:Function,default:null},params:{type:[Object,String],default:()=>({})},value:{type:[String,Number,Boolean]},isBtn:{type:[Boolean],default:!1},numberToString:y.bool,resultField:y.string.def(""),labelField:y.string.def("label"),valueField:y.string.def("value"),immediate:y.bool.def(!0)},emits:["options-change","change"],setup(e,{emit:n}){const a=F([]),s=F(!1),l=F(!0),f=F([]),d=$e(),{t:u}=q(),[o]=be(e,"value","change",f),t=R(()=>{const{labelField:m,valueField:c,numberToString:p}=e;return w(a).reduce((U,T)=>{if(T){const L=T[c];U.push(A({label:T[m],value:p?`${L}`:L},ne(T,[m,c])))}return U},[])});de(()=>{e.immediate&&r()}),D(()=>e.params,()=>{!w(l)&&r()},{deep:!0});function r(){return B(this,null,function*(){const m=e.api;if(!(!m||!K(m))){a.value=[];try{s.value=!0;const c=yield m(e.params);if(Array.isArray(c)){a.value=c,i();return}e.resultField&&(a.value=Z(c,e.resultField)||[]),i()}catch(c){}finally{s.value=!1}}})}function i(){n("options-change",w(t))}function g(...m){f.value=m}return{state:o,getOptions:t,attrs:d,loading:s,t:u,handleClick:g,props:e}}});function Lt(e,n,a,s,l,f){const d=b("RadioButton"),u=b("Radio"),o=b("RadioGroup");return S(),$(o,X(e.attrs,{value:e.state,"onUpdate:value":n[0]||(n[0]=t=>e.state=t),"button-style":"solid"}),{default:_(()=>[(S(!0),z(x,null,oe(e.getOptions,t=>(S(),z(x,{key:`${t.value}`},[e.props.isBtn?(S(),$(d,{key:0,value:t.value,disabled:t.disabled,onClick:r=>e.handleClick(t)},{default:_(()=>[N(M(t.label),1)]),_:2},1032,["value","disabled","onClick"])):(S(),$(u,{key:1,value:t.value,disabled:t.disabled,onClick:r=>e.handleClick(t)},{default:_(()=>[N(M(t.label),1)]),_:2},1032,["value","disabled","onClick"]))],64))),128))]),_:1},16,["value"])}const It=V(Pt,[["render",Lt]]),Ut=E({name:"ApiSelect",components:{Select:Re,LoadingOutlined:ue},inheritAttrs:!1,props:{value:[Array,Object,String,Number],numberToString:y.bool,api:{type:Function,default:null},params:y.any.def({}),resultField:y.string.def(""),labelField:y.string.def("label"),valueField:y.string.def("value"),immediate:y.bool.def(!0),alwaysLoad:y.bool.def(!1),options:y.array.def([])},emits:["options-change","change","update:value"],setup(e,{emit:n}){const a=F([]),s=F(!1),l=F(!0),f=F([]),d=$e(),{t:u}=q(),[o]=be(e,"value","change",f),t=R(()=>{const{labelField:c,valueField:p,numberToString:U}=e;let T=w(a).reduce((L,W)=>{if(W){const ee=Z(W,p);L.push(J(A({},ne(W,[c,p])),{label:Z(W,c),value:U?`${ee}`:ee}))}return L},[]);return T.length>0?T:e.options});de(()=>{e.immediate&&!e.alwaysLoad&&r()}),D(()=>o.value,c=>{n("update:value",c)}),D(()=>e.params,()=>{!w(l)&&r()},{deep:!0});function r(){return B(this,null,function*(){const c=e.api;if(!(!c||!K(c))){a.value=[];try{s.value=!0;const p=yield c(e.params);if(Array.isArray(p)){a.value=p,g();return}e.resultField&&(a.value=Z(p,e.resultField)||[]),g()}catch(p){}finally{s.value=!1}}})}function i(c){return B(this,null,function*(){c&&(e.alwaysLoad?yield r():!e.immediate&&w(l)&&(yield r(),l.value=!1))})}function g(){n("options-change",w(t))}function m(c,...p){f.value=p}return{state:o,attrs:d,getOptions:t,loading:s,t:u,handleFetch:i,handleChange:m}}});function Ot(e,n,a,s,l,f){const d=b("LoadingOutlined"),u=b("Select");return S(),$(u,X({onDropdownVisibleChange:e.handleFetch},e.$attrs,{onChange:e.handleChange,options:e.getOptions,value:e.state,"onUpdate:value":n[0]||(n[0]=o=>e.state=o)}),pe({_:2},[oe(Object.keys(e.$slots),o=>({name:o,fn:_(t=>[fe(e.$slots,o,te(me(t||{})))])})),e.loading?{name:"suffixIcon",fn:_(()=>[h(d,{spin:""})]),key:"0"}:void 0,e.loading?{name:"notFoundContent",fn:_(()=>[Ce("span",null,[h(d,{spin:"",class:"mr-1"}),N(" "+M(e.t("component.form.apiSelectNotFound")),1)])]),key:"1"}:void 0]),1040,["onDropdownVisibleChange","onChange","options","value"])}const Dt=V(Ut,[["render",Ot]]),Bt=E({name:"ApiTree",components:{ATree:st,LoadingOutlined:ue},props:{api:{type:Function},params:{type:Object},immediate:{type:Boolean,default:!0},resultField:y.string.def(""),afterFetch:{type:Function}},emits:["options-change","change"],setup(e,{attrs:n,emit:a}){const s=F([]),l=F(!1),f=F(!1),d=R(()=>A(A({},e.api?{treeData:w(s)}:{}),n));function u(...t){a("change",...t)}D(()=>e.params,()=>{!w(l)&&o()},{deep:!0}),D(()=>e.immediate,t=>{t&&!l.value&&o()}),Oe(()=>{e.immediate&&o()});function o(){return B(this,null,function*(){const{api:t,afterFetch:r}=e;if(!t||!K(t))return;f.value=!0,s.value=[];let i;try{i=yield t(e.params)}catch(g){}r&&K(r)&&(i=r(i)),f.value=!1,i&&(ie(i)||(i=Z(i,e.resultField)),s.value=i||[],l.value=!0,a("options-change",s.value))})}return{getAttrs:d,loading:f,handleChange:u}}});function Nt(e,n,a,s,l,f){const d=b("LoadingOutlined"),u=b("a-tree");return S(),$(u,X(e.getAttrs,{onChange:e.handleChange}),pe({_:2},[oe(Object.keys(e.$slots),o=>({name:o,fn:_(t=>[fe(e.$slots,o,te(me(t||{})))])})),e.loading?{name:"suffixIcon",fn:_(()=>[h(d,{spin:""})]),key:"0"}:void 0]),1040,["onChange"])}const Mt=V(Bt,[["render",Nt]]),Et=E({name:"ApiTreeSelect",components:{ATreeSelect:Te,LoadingOutlined:ue},props:{api:{type:Function},params:{type:Object},immediate:{type:Boolean,default:!0},resultField:y.string.def(""),labelField:y.string.def("title"),valueField:y.string.def("value"),childrenField:y.string.def("children")},emits:["options-change","change"],setup(e,{attrs:n,emit:a}){const s=F([]),l=F(!1),f=F(!1),d=R(()=>A(A({},e.api?{treeData:w(s)}:{}),n)),u={children:e.childrenField,value:e.valueField,label:e.labelField};function o(...r){a("change",...r)}D(()=>e.params,()=>{!w(l)&&t()},{deep:!0}),D(()=>e.immediate,r=>{r&&!l.value&&t()}),Oe(()=>{e.immediate&&t()});function t(){return B(this,null,function*(){const{api:r}=e;if(!r||!K(r)||f.value)return;f.value=!0,s.value=[];let i;try{i=yield r(e.params)}catch(g){}f.value=!1,i&&(ie(i)||(i=Z(i,e.resultField)),s.value=i||[],l.value=!0,a("options-change",s.value))})}return{getAttrs:d,loading:f,handleChange:o,fieldNames:u}}});function Gt(e,n,a,s,l,f){const d=b("LoadingOutlined"),u=b("a-tree-select");return S(),$(u,X(e.getAttrs,{onChange:e.handleChange,"field-names":e.fieldNames}),pe({_:2},[oe(Object.keys(e.$slots),o=>({name:o,fn:_(t=>[fe(e.$slots,o,te(me(t||{})))])})),e.loading?{name:"suffixIcon",fn:_(()=>[h(d,{spin:""})]),key:"0"}:void 0]),1040,["onChange","field-names"])}const jt=V(Et,[["render",Gt]]),zt=E({name:"ApiCascader",components:{LoadingOutlined:ue,[ve.name]:ve},props:{value:{type:Array},api:{type:Function,default:null},numberToString:y.bool,resultField:y.string.def(""),labelField:y.string.def("label"),valueField:y.string.def("value"),childrenField:y.string.def("children"),asyncFetchParamKey:y.string.def("parentCode"),immediate:y.bool.def(!0),initFetchParams:{type:Object,default:()=>({})},isLeaf:{type:Function,default:null},displayRenderArray:{type:Array}},emits:["change","defaultChange"],setup(e,{emit:n}){const a=F([]),s=F([]),l=F(!1),f=F([]),d=F(!0),{t:u}=q(),[o]=be(e,"value","change",f);D(a,c=>{const p=t(c);s.value=p},{deep:!0});function t(c){const{labelField:p,valueField:U,numberToString:T,childrenField:L,isLeaf:W}=e;return c.reduce((ee,Y)=>{if(Y){const le=Y[U],se=J(A({},ne(Y,[p,U])),{label:Y[p],value:T?`${le}`:le,isLeaf:W&&typeof W=="function"?W(Y):!1}),C=Reflect.get(Y,L);C&&Reflect.set(se,L,t(C)),ee.push(se)}return ee},[])}function r(){return B(this,null,function*(){const c=e.api;if(!(!c||!K(c))){a.value=[],l.value=!0;try{const p=yield c(e.initFetchParams);if(Array.isArray(p)){a.value=p;return}e.resultField&&(a.value=Z(p,e.resultField)||[])}catch(p){}finally{l.value=!1}}})}function i(c){return B(this,null,function*(){const p=c[c.length-1];p.loading=!0;const U=e.api;if(!(!U||!K(U)))try{const T=yield U({[e.asyncFetchParamKey]:Reflect.get(p,"value")});if(Array.isArray(T)){const L=t(T);p.children=L;return}if(e.resultField){const L=t(Z(T,e.resultField)||[]);p.children=L}}catch(T){}finally{p.loading=!1}})}de(()=>{e.immediate&&r()}),D(()=>e.initFetchParams,()=>{!w(d)&&r()},{deep:!0});function g(c,p){f.value=p,n("defaultChange",c,p)}function m({labels:c,selectedOptions:p}){return w(f).length===p.length?c.join(" / "):e.displayRenderArray?e.displayRenderArray.join(" / "):""}return{state:o,options:s,loading:l,t:u,handleChange:g,loadData:i,handleRenderDisplay:m}}});function Kt(e,n,a,s,l,f){const d=b("LoadingOutlined"),u=b("a-cascader");return S(),$(u,{value:e.state,"onUpdate:value":n[0]||(n[0]=o=>e.state=o),options:e.options,"load-data":e.loadData,"change-on-select":"",onChange:e.handleChange,displayRender:e.handleRenderDisplay},pe({_:2},[e.loading?{name:"suffixIcon",fn:_(()=>[h(d,{spin:""})]),key:"0"}:void 0,e.loading?{name:"notFoundContent",fn:_(()=>[Ce("span",null,[h(d,{spin:"",class:"mr-1"}),N(" "+M(e.t("component.form.apiSelectNotFound")),1)])]),key:"1"}:void 0]),1032,["value","options","load-data","onChange","displayRender"])}const Vt=V(zt,[["render",Kt]]),Wt=E({name:"ApiTransfer",components:{Transfer:rt},props:{value:{type:Array},api:{type:Function,default:null},params:{type:Object},dataSource:{type:Array},immediate:y.bool.def(!0),alwaysLoad:y.bool.def(!1),afterFetch:{type:Function},resultField:y.string.def(""),labelField:y.string.def("title"),valueField:y.string.def("key"),showSearch:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},filterOption:{type:Function},selectedKeys:{type:Array},showSelectAll:{type:Boolean,default:!1},targetKeys:{type:Array}},emits:["options-change","change"],setup(e,{attrs:n,emit:a}){const s=F([]),l=F([]),{t:f}=q(),d=R(()=>A(A({},e.api?{}:{dataSource:w(s)}),n)),u=R(()=>{const{labelField:g,valueField:m}=e;return w(s).reduce((c,p)=>(p&&c.push(J(A({},ne(p,[g,m])),{title:p[g],key:p[m]})),c),[])}),o=R(()=>w(l).length>0?w(l):Array.isArray(e.value)?e.value:Array.isArray(e.targetKeys)?e.targetKeys:[]);function t(g,m,c){l.value=g,a("change",g)}de(()=>{e.immediate&&!e.alwaysLoad&&r()}),D(()=>e.params,()=>{r()},{deep:!0});function r(){return B(this,null,function*(){const g=e.api;if(!g||!K(g)){Array.isArray(e.dataSource)&&(s.value=e.dataSource);return}s.value=[];try{const m=yield g(e.params);if(Array.isArray(m)){s.value=m,i();return}e.resultField&&(s.value=Z(m,e.resultField)||[]),i()}catch(m){}})}function i(){a("options-change",w(u))}return{getTargetKeys:o,getdataSource:u,t:f,getAttrs:d,handleChange:t}}});function Ht(e,n,a,s,l,f){const d=b("Transfer");return S(),$(d,{"data-source":e.getdataSource,"filter-option":e.filterOption,render:u=>u.title,showSelectAll:e.showSelectAll,selectedKeys:e.selectedKeys,targetKeys:e.getTargetKeys,showSearch:e.showSearch,onChange:e.handleChange},null,8,["data-source","filter-option","render","showSelectAll","selectedKeys","targetKeys","showSearch","onChange"])}const Zt=V(Wt,[["render",Ht]]),Ne={helpText:{type:String,default:""},maxSize:{type:Number,default:2},maxNumber:{type:Number,default:1/0},accept:{type:Array,default:()=>[]},multiple:{type:Boolean,default:!0},uploadParams:{type:Object,default:()=>({})},api:{type:Function,default:null,required:!0},name:{type:String,default:"file"},filename:{type:String,default:null}},Xt=J(A({value:{type:Array,default:()=>[]}},Ne),{showPreviewNumber:{type:Boolean,default:!0},emptyHidePreview:{type:Boolean,default:!1}}),qt={value:{type:Array,default:()=>[]}},Yt={columns:{type:Array,default:null},actionColumn:{type:Object,default:null},dataSource:{type:Array,default:null}},{t:ye}=q();function Qt({acceptRef:e,helpTextRef:n,maxNumberRef:a,maxSizeRef:s}){const l=R(()=>{const u=w(e);return u&&u.length>0?u:[]}),f=R(()=>w(l).map(u=>u.indexOf("/")>0||u.startsWith(".")?u:`.${u}`).join(",")),d=R(()=>{const u=w(n);if(u)return u;const o=[],t=w(e);t.length>0&&o.push(ye("component.upload.accept",[t.join(",")]));const r=w(s);r&&o.push(ye("component.upload.maxSize",[r]));const i=w(a);return i&&i!==1/0&&o.push(ye("component.upload.maxNumber",[i])),o.join("，")});return{getAccept:l,getStringAccept:f,getHelpText:d}}var P=(e=>(e.SUCCESS="success",e.ERROR="error",e.UPLOADING="uploading",e))(P||{});function Jt(e){return Me(e.name)}function Me(e){return/\.(jpg|jpeg|png|gif|webp)$/i.test(e)}function xt(e){return new Promise((n,a)=>{const s=new FileReader;s.readAsDataURL(e),s.onload=()=>n({result:s.result,file:e}),s.onerror=l=>a(l)})}const Ee=Symbol("basic-table");function jn(e){bt(Ee,e)}function en(){return Ct(Ee)}const{table:tn}=qe,{pageSizeOptions:nn,defaultPageSize:an,fetchSetting:on,defaultSize:ln,defaultSortFn:sn,defaultFilterFn:rn}=tn,zn="key",Kn=nn,Vn=an,Wn=on,Hn=ln,Zn=sn,Xn=rn,qn="center",Yn="INDEX",un="ACTION",cn=E({name:"TableAction",components:{Icon:ke,PopConfirmButton:Ye,Divider:Pe,Dropdown:Qe,MoreOutlined:it,Tooltip:Le},props:{actions:{type:Array,default:null},dropDownActions:{type:Array,default:null},divider:y.bool.def(!0),outside:y.bool,stopButtonPropagation:y.bool.def(!1)},setup(e){const{prefixCls:n}=Je("basic-table-action");let a={};e.outside||(a=en());const{hasPermission:s}=xe();function l(r){const i=r.ifShow;let g=!0;return tt(i)&&(g=i),K(i)&&(g=i(r)),g}const f=R(()=>(Fe(e.actions)||[]).filter(r=>s(r.auth)&&l(r)).map(r=>{const{popConfirm:i}=r;return J(A(A({getPopupContainer:()=>{var g;return(g=w(a==null?void 0:a.wrapRef))!=null?g:document.body},type:"link",size:"small"},r),i||{}),{onConfirm:i==null?void 0:i.confirm,onCancel:i==null?void 0:i.cancel,enable:!!i})})),d=R(()=>{const r=(Fe(e.dropDownActions)||[]).filter(i=>s(i.auth)&&l(i));return r.map((i,g)=>{const{label:m,popConfirm:c}=i;return J(A(A({},i),c),{onConfirm:c==null?void 0:c.confirm,onCancel:c==null?void 0:c.cancel,text:m,divider:g<r.length-1?e.divider:!1})})}),u=R(()=>{var g,m;const i=(((g=a==null?void 0:a.getColumns)==null?void 0:g.call(a))||[]).find(c=>c.flag===un);return(m=i==null?void 0:i.align)!=null?m:"left"});function o(r){return A({getPopupContainer:()=>{var i;return(i=w(a==null?void 0:a.wrapRef))!=null?i:document.body},placement:"bottom"},et(r)?{title:r}:r)}function t(r){if(!e.stopButtonPropagation)return;r.composedPath().find(m=>{var c;return((c=m.tagName)==null?void 0:c.toUpperCase())==="BUTTON"})&&r.stopPropagation()}return{prefixCls:n,getActions:f,getDropdownList:d,getAlign:u,onCellClick:t,getTooltip:o}}});function dn(e,n,a,s,l,f){const d=b("Icon"),u=b("PopConfirmButton"),o=b("Tooltip"),t=b("Divider"),r=b("MoreOutlined"),i=b("a-button"),g=b("Dropdown");return S(),z("div",{class:he([e.prefixCls,e.getAlign]),onClick:n[0]||(n[0]=(...m)=>e.onCellClick&&e.onCellClick(...m))},[(S(!0),z(x,null,oe(e.getActions,(m,c)=>(S(),z(x,{key:`${c}-${m.label}`},[m.tooltip?(S(),$(o,te(X({key:0},e.getTooltip(m.tooltip))),{default:_(()=>[h(u,te(me(m)),{default:_(()=>[m.icon?(S(),$(d,{key:0,icon:m.icon,class:he({"mr-1":!!m.label})},null,8,["icon","class"])):j("",!0),m.label?(S(),z(x,{key:1},[N(M(m.label),1)],64)):j("",!0)]),_:2},1040)]),_:2},1040)):(S(),$(u,te(X({key:1},m)),{default:_(()=>[m.icon?(S(),$(d,{key:0,icon:m.icon,class:he({"mr-1":!!m.label})},null,8,["icon","class"])):j("",!0),m.label?(S(),z(x,{key:1},[N(M(m.label),1)],64)):j("",!0)]),_:2},1040)),e.divider&&c<e.getActions.length-1?(S(),$(t,{key:2,type:"vertical",class:"action-divider"})):j("",!0)],64))),128)),e.dropDownActions&&e.getDropdownList.length>0?(S(),$(g,{key:0,trigger:["hover"],dropMenuList:e.getDropdownList,popconfirm:""},{default:_(()=>[fe(e.$slots,"more"),e.$slots.more?j("",!0):(S(),$(i,{key:0,type:"link",size:"small"},{default:_(()=>[h(r,{class:"icon-more"})]),_:1}))]),_:3},8,["dropMenuList"])):j("",!0)],2)}const Ge=V(cn,[["render",dn]]),pn=E({components:{Image:ut},props:{fileUrl:y.string.def(""),fileName:y.string.def("")}});const fn={class:"thumb"};function mn(e,n,a,s,l,f){const d=b("Image");return S(),z("span",fn,[e.fileUrl?(S(),$(d,{key:0,src:e.fileUrl,width:104},null,8,["src"])):j("",!0)])}const je=V(pn,[["render",mn]]),{t:I}=q();function gn(){return[{dataIndex:"thumbUrl",title:I("component.upload.legend"),width:100,customRender:({record:e})=>{const{thumbUrl:n}=e||{};return n&&h(je,{fileUrl:n},null)}},{dataIndex:"name",title:I("component.upload.fileName"),align:"left",customRender:({text:e,record:n})=>{const{percent:a,status:s}=n||{};let l="normal";return s===P.ERROR?l="exception":s===P.UPLOADING?l="active":s===P.SUCCESS&&(l="success"),h("span",null,[h("p",{class:"truncate mb-1",title:e},[e]),h(ct,{percent:a,size:"small",status:l},null)])}},{dataIndex:"size",title:I("component.upload.fileSize"),width:100,customRender:({text:e=0})=>e&&(e/1024).toFixed(2)+"KB"},{dataIndex:"status",title:I("component.upload.fileStatue"),width:100,customRender:({text:e})=>e===P.SUCCESS?h(ge,{color:"green"},{default:()=>I("component.upload.uploadSuccess")}):e===P.ERROR?h(ge,{color:"red"},{default:()=>I("component.upload.uploadError")}):e===P.UPLOADING?h(ge,{color:"blue"},{default:()=>I("component.upload.uploading")}):e}]}function hn(e){return{width:120,title:I("component.upload.operating"),dataIndex:"action",fixed:!1,customRender:({record:n})=>{const a=[{label:I("component.upload.del"),color:"error",onClick:e.bind(null,n)}];return h(Ge,{actions:a,outside:!0},null)}}}function yn(){return[{dataIndex:"url",title:I("component.upload.legend"),width:100,customRender:({record:e})=>{const{url:n}=e||{};return Me(n)&&h(je,{fileUrl:n},null)}},{dataIndex:"name",title:I("component.upload.fileName"),align:"left"}]}function vn({handleRemove:e,handleDownload:n}){return{width:160,title:I("component.upload.operating"),dataIndex:"action",fixed:!1,customRender:({record:a})=>{const s=[{label:I("component.upload.del"),color:"error",onClick:e.bind(null,a)},{label:I("component.upload.download"),onClick:n.bind(null,a)}];return h(Ge,{actions:s,outside:!0},null)}}}const ze=E({name:"FileList",props:Yt,setup(e){const n=At();return D(()=>e.dataSource,()=>{St(()=>{var a;(a=n==null?void 0:n.redoModalHeight)==null||a.call(n)})}),()=>{const{columns:a,actionColumn:s,dataSource:l}=e,f=[...a,s];return h("table",{class:"file-table"},[h("colgroup",null,[f.map(d=>{const{width:u=0,dataIndex:o}=d,t={width:`${u}px`,minWidth:`${u}px`};return h("col",{style:u?t:{},key:o},null)})]),h("thead",null,[h("tr",{class:"file-table-tr"},[f.map(d=>{const{title:u="",align:o="center",dataIndex:t}=d;return h("th",{class:["file-table-th",o],key:t},[u])})])]),h("tbody",null,[l.map((d={},u)=>h("tr",{class:"file-table-tr",key:`${u+d.name||""}`},[f.map(o=>{const{dataIndex:t="",customRender:r,align:i="center"}=o,g=r&&K(r);return h("td",{class:["file-table-td",i],key:t},[g?r==null?void 0:r({text:d[t],record:d}):d[t]])})]))])])}}});const bn=E({components:{BasicModal:De,Upload:dt,Alert:pt,FileList:ze},props:J(A({},Ne),{previewFileList:{type:Array,default:()=>[]}}),emits:["change","register","delete"],setup(e,{emit:n}){const a=wt({fileList:[]}),s=F(!1),l=F([]),{accept:f,helpText:d,maxNumber:u,maxSize:o}=_t(e),{t}=q(),[r,{closeModal:i}]=Be(),{getStringAccept:g,getHelpText:m}=Qt({acceptRef:f,helpTextRef:d,maxNumberRef:u,maxSizeRef:o}),{createMessage:c}=nt(),p=R(()=>l.value.length>0&&!l.value.every(C=>C.status===P.SUCCESS)),U=R(()=>{const C=l.value.some(k=>k.status===P.SUCCESS);return{disabled:s.value||l.value.length===0||!C}}),T=R(()=>{const C=l.value.some(k=>k.status===P.ERROR);return s.value?t("component.upload.uploading"):t(C?"component.upload.reUploadFailed":"component.upload.startUpload")});function L(C){const{size:k,name:O}=C,{maxSize:G}=e;if(G&&C.size/1024/1024>=G)return c.error(t("component.upload.maxSizeMultiple",[G])),!1;const H={uuid:$t(),file:C,size:k,name:O,percent:0,type:O.split(".").pop()};return Jt(C)?xt(C).then(({result:Q})=>{l.value=[...w(l),A({thumbUrl:Q},H)]}):l.value=[...w(l),H],!1}function W(C){const k=l.value.findIndex(O=>O.uuid===C.uuid);k!==-1&&l.value.splice(k,1),n("delete",C)}function ee(C){return B(this,null,function*(){var O;const{api:k}=e;if(!k||!K(k))return at();try{C.status=P.UPLOADING;const G=yield(O=e.api)==null?void 0:O.call(e,{data:A({},e.uploadParams||{}),file:C.file,name:e.name,filename:e.filename},function(Se){const Ke=Se.loaded/Se.total*100|0;C.percent=Ke}),{data:H}=G;return C.status=P.SUCCESS,C.responseData=H,{success:!0,error:null}}catch(G){return C.status=P.ERROR,{success:!1,error:G}}})}function Y(){return B(this,null,function*(){var k;const{maxNumber:C}=e;if(l.value.length+((k=e.previewFileList)==null?void 0:k.length)>C)return c.warning(t("component.upload.maxNumber",[C]));try{s.value=!0;const O=l.value.filter(Q=>Q.status!==P.SUCCESS)||[],G=yield Promise.all(O.map(Q=>ee(Q)));s.value=!1;const H=G.filter(Q=>!Q.success);if(H.length>0)throw H}catch(O){throw s.value=!1,O}})}function le(){const{maxNumber:C}=e;if(l.value.length>C)return c.warning(t("component.upload.maxNumber",[C]));if(s.value)return c.warning(t("component.upload.saveWarn"));const k=[];for(const O of l.value){const{status:G,responseData:H}=O;G===P.SUCCESS&&H&&k.push(H.url)}if(k.length<=0)return c.warning(t("component.upload.saveError"));l.value=[],i(),n("change",k)}function se(){return B(this,null,function*(){return s.value?(c.warning(t("component.upload.uploadWait")),!1):(l.value=[],!0)})}return{columns:gn(),actionColumn:hn(W),register:r,closeModal:i,getHelpText:m,getStringAccept:g,getOkButtonProps:U,beforeUpload:L,fileListRef:l,state:a,isUploadingRef:s,handleStartUpload:Y,handleOk:le,handleCloseFunc:se,getIsSelectFile:p,getUploadBtnText:T,t}}});const Cn={class:"upload-modal-toolbar"};function Sn(e,n,a,s,l,f){const d=b("a-button"),u=b("Alert"),o=b("Upload"),t=b("FileList"),r=b("BasicModal");return S(),$(r,X({width:"800px",title:e.t("component.upload.upload"),okText:e.t("component.upload.save")},e.$attrs,{onRegister:e.register,onOk:e.handleOk,closeFunc:e.handleCloseFunc,maskClosable:!1,keyboard:!1,class:"upload-modal",okButtonProps:e.getOkButtonProps,cancelButtonProps:{disabled:e.isUploadingRef}}),{centerFooter:_(()=>[h(d,{onClick:e.handleStartUpload,color:"success",disabled:!e.getIsSelectFile,loading:e.isUploadingRef},{default:_(()=>[N(M(e.getUploadBtnText),1)]),_:1},8,["onClick","disabled","loading"])]),default:_(()=>[Ce("div",Cn,[h(u,{message:e.getHelpText,type:"info",banner:"",class:"upload-modal-toolbar__text"},null,8,["message"]),h(o,{accept:e.getStringAccept,multiple:e.multiple,"before-upload":e.beforeUpload,"show-upload-list":!1,class:"upload-modal-toolbar__btn"},{default:_(()=>[h(d,{type:"primary"},{default:_(()=>[N(M(e.t("component.upload.choose")),1)]),_:1})]),_:1},8,["accept","multiple","before-upload"])]),h(t,{dataSource:e.fileListRef,columns:e.columns,actionColumn:e.actionColumn},null,8,["dataSource","columns","actionColumn"])]),_:1},16,["title","okText","onRegister","onOk","closeFunc","okButtonProps","cancelButtonProps"])}const wn=V(bn,[["render",Sn]]),_n=E({components:{BasicModal:De,FileList:ze},props:qt,emits:["list-change","register","delete"],setup(e,{emit:n}){const[a,{closeModal:s}]=Be(),{t:l}=q(),f=F([]);D(()=>e.value,o=>{ie(o)||(o=[]),f.value=o.filter(t=>!!t).map(t=>({url:t,type:t.split(".").pop()||"",name:t.split("/").pop()||""}))},{immediate:!0});function d(o){const t=f.value.findIndex(r=>r.url===o.url);if(t!==-1){const r=f.value.splice(t,1);n("delete",r[0].url),n("list-change",f.value.map(i=>i.url))}}function u(o){const{url:t=""}=o;kt({url:t})}return{t:l,register:a,closeModal:s,fileListRef:f,columns:yn(),actionColumn:vn({handleRemove:d,handleDownload:u})}}});function Fn(e,n,a,s,l,f){const d=b("FileList"),u=b("BasicModal");return S(),$(u,X({width:"800px",title:e.t("component.upload.preview"),class:"upload-preview-modal"},e.$attrs,{onRegister:e.register,showOkBtn:!1}),{default:_(()=>[h(d,{dataSource:e.fileListRef,columns:e.columns,actionColumn:e.actionColumn},null,8,["dataSource","columns","actionColumn"])]),_:1},16,["title","onRegister"])}const An=V(_n,[["render",Fn]]),$n=E({name:"BasicUpload",components:{UploadModal:wn,Space:ft,UploadPreviewModal:An,Icon:ke,Tooltip:Le},props:Xt,emits:["change","delete","preview-delete","update:value"],setup(e,{emit:n,attrs:a}){const{t:s}=q(),[l,{openModal:f}]=Ae(),[d,{openModal:u}]=Ae(),o=F([]),t=R(()=>{const{emptyHidePreview:p}=e;return p&&p?o.value.length>0:!0}),r=R(()=>{const p=A(A({},a),e);return ne(p,"onChange")});D(()=>e.value,(p=[])=>{o.value=ie(p)?p:[]},{immediate:!0});function i(p){o.value=[...w(o),...p||[]],n("update:value",o.value),n("change",o.value)}function g(p){o.value=[...p||[]],n("update:value",o.value),n("change",o.value)}function m(p){n("delete",p)}function c(p){n("preview-delete",p)}return{registerUploadModal:l,openUploadModal:f,handleChange:i,handlePreviewChange:g,registerPreviewModal:d,openPreviewModal:u,fileList:o,showPreview:t,bindValue:r,handleDelete:m,handlePreviewDelete:c,t:s}}});function kn(e,n,a,s,l,f){const d=b("a-button"),u=b("Icon"),o=b("Tooltip"),t=b("Space"),r=b("UploadModal"),i=b("UploadPreviewModal");return S(),z("div",null,[h(t,null,{default:_(()=>[h(d,{type:"primary",onClick:e.openUploadModal,preIcon:"carbon:cloud-upload"},{default:_(()=>[N(M(e.t("component.upload.upload")),1)]),_:1},8,["onClick"]),e.showPreview?(S(),$(o,{key:0,placement:"bottom"},{title:_(()=>[N(M(e.t("component.upload.uploaded"))+" ",1),e.fileList.length?(S(),z(x,{key:0},[N(M(e.fileList.length),1)],64)):j("",!0)]),default:_(()=>[h(d,{onClick:e.openPreviewModal},{default:_(()=>[h(u,{icon:"bi:eye"}),e.fileList.length&&e.showPreviewNumber?(S(),z(x,{key:0},[N(M(e.fileList.length),1)],64)):j("",!0)]),_:1},8,["onClick"])]),_:1})):j("",!0)]),_:1}),h(r,X(e.bindValue,{previewFileList:e.fileList,onRegister:e.registerUploadModal,onChange:e.handleChange,onDelete:e.handleDelete}),null,16,["previewFileList","onRegister","onChange","onDelete"]),h(i,{value:e.fileList,onRegister:e.registerPreviewModal,onListChange:e.handlePreviewChange,onDelete:e.handlePreviewDelete},null,8,["value","onRegister","onListChange","onDelete"])])}const Rn=V($n,[["render",kn]]),Tn=ot(Rn),v=new Map;v.set("Input",ae);v.set("InputGroup",ae.Group);v.set("InputPassword",ae.Password);v.set("InputSearch",ae.Search);v.set("InputTextArea",ae.TextArea);v.set("InputNumber",mt);v.set("AutoComplete",gt);v.set("Select",Re);v.set("ApiSelect",Dt);v.set("ApiTree",Mt);v.set("TreeSelect",Te);v.set("ApiTreeSelect",jt);v.set("ApiRadioGroup",It);v.set("Switch",ht);v.set("RadioButtonGroup",Ft);v.set("RadioGroup",re.Group);v.set("Checkbox",Ie);v.set("CheckboxGroup",Ie.Group);v.set("ApiCascader",Vt);v.set("Cascader",ve);v.set("Slider",yt);v.set("Rate",vt);v.set("ApiTransfer",Zt);v.set("DatePicker",ce);v.set("MonthPicker",ce.MonthPicker);v.set("RangePicker",ce.RangePicker);v.set("WeekPicker",ce.WeekPicker);v.set("TimePicker",Ue);v.set("TimeRangePicker",Ue.TimeRangePicker);v.set("StrengthMeter",Rt);v.set("IconPicker",lt);v.set("InputCountDown",Tt);v.set("Upload",Tn);v.set("Divider",Pe);function Qn(e,n){v.set(e,n)}export{Dt as A,Tn as B,qn as D,Wn as F,Yn as I,Vn as P,zn as R,Ge as T,Kn as a,jt as b,v as c,It as d,un as e,Zn as f,Xn as g,Hn as h,jn as i,Qn as j,en as u};
