import{M as k,a as w}from"./index-c66cd34c.js";import{P as g}from"./index-0d561ea7.js";import{N as C}from"./antd-5dd6c6b2.js";import{d as D,f as d,u as E,a7 as a,Z as M,a8 as V,a9 as r,$ as i,l as n,E as c}from"./vue-ea98dac5.js";import{_ as R}from"./index.js";import"./index-8a4f8beb.js";import"./useWindowSizeFn-997fa1d0.js";import"./onMountedOrActivated-3eb95ecd.js";import"./useContentViewHeight-b8e9ee08.js";const b=D({components:{MarkDown:k,PageWrapper:g,MarkdownViewer:w,ACard:C},setup(){const e=d(null),o=d(`
# 标题h1

##### 标题h5

**加粗**
*斜体*
~~删除线~~
[链接](https://github.com/vbenjs/vue-vben-admin)
↓分割线↓

---


* 无序列表1
  * 无序列表1.1

1. 有序列表1
2. 有序列表2

* [ ] 任务列表1
* [x] 任务列表2

> 引用示例

\`\`\`js
// 代码块:
(() => {
  var htmlRoot = document.getElementById('htmlRoot');
  var theme = window.localStorage.getItem('__APP__DARK__MODE__');
  if (htmlRoot && theme) {
    htmlRoot.setAttribute('data-theme', theme);
    theme = htmlRoot = null;
  }
})();
\`\`\`

| 表格 | 示例 | 🎉️ |
| --- | --- | --- |
| 1 | 2 | 3 |
| 4 | 5 | 6 |
`);function l(){const t=E(e);if(!t)return;t.getVditor().setTheme("dark","dark","dracula")}function s(t){o.value=t}function m(){o.value=""}return{value:o,toggleTheme:l,markDownRef:e,handleChange:s,clearValue:m}}}),A={class:"mt-2"};function B(e,o,l,s,m,t){const u=a("a-button"),p=a("MarkDown"),f=a("MarkdownViewer"),_=a("a-card"),h=a("PageWrapper");return M(),V(h,{title:"MarkDown组件示例"},{default:r(()=>[i("div",null,[n(u,{onClick:e.toggleTheme,class:"mb-2",type:"primary"},{default:r(()=>[c(" 黑暗主题 ")]),_:1},8,["onClick"]),n(u,{onClick:e.clearValue,class:"mb-2",type:"default"},{default:r(()=>[c(" 清空内容 ")]),_:1},8,["onClick"]),n(p,{value:e.value,"onUpdate:value":o[0]||(o[0]=v=>e.value=v),onChange:e.handleChange,ref:"markDownRef",placeholder:"这是占位文本"},null,8,["value","onChange"])]),i("div",A,[n(_,{title:"Markdown Viewer 组件演示"},{default:r(()=>[n(f,{value:e.value},null,8,["value"])]),_:1})])]),_:1})}const x=R(b,[["render",B]]);export{x as default};
