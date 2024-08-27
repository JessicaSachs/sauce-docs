"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[6738],{99390:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(74848),a=n(28453);n(86025),n(11470),n(19365);const i={id:"neptune",title:"Neptune Software",sidebar_label:"Neptune Software"},s=void 0,l={id:"testfairy/platforms/neptune",title:"Neptune Software",description:"TestFairy for Neptune plugin allows you to integrate TestFairy functionality into your Neptune project. By following the steps below, you can enable the TestFairy plugin and initialize the TestFairy SDK in your Neptune application.",source:"@site/docs/testfairy/platforms/neptune.md",sourceDirName:"testfairy/platforms",slug:"/testfairy/platforms/neptune",permalink:"/sauce-docs/pr-preview/pr-2907/testfairy/platforms/neptune",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/testfairy/platforms/neptune.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:172477197e4,frontMatter:{id:"neptune",title:"Neptune Software",sidebar_label:"Neptune Software"},sidebar:"docs",previous:{title:"Nativescript",permalink:"/sauce-docs/pr-preview/pr-2907/testfairy/platforms/nativescript"},next:{title:"React Native",permalink:"/sauce-docs/pr-preview/pr-2907/testfairy/platforms/react-native"}},o={},u=[{value:"Enable the TestFairy Plugin",id:"enable-the-testfairy-plugin",level:2},{value:"Initialize the TestFairy SDK:",id:"initialize-the-testfairy-sdk",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"TestFairy for Neptune plugin allows you to integrate TestFairy functionality into your Neptune project. By following the steps below, you can enable the TestFairy plugin and initialize the TestFairy SDK in your Neptune application."}),"\n",(0,r.jsx)(t.h2,{id:"enable-the-testfairy-plugin",children:"Enable the TestFairy Plugin"}),"\n",(0,r.jsx)(t.p,{children:"To enable the TestFairy plugin in your Neptune project, follow these steps:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Open the Neptune Cockpit."}),"\n",(0,r.jsxs)(t.li,{children:["Add the following to the ",(0,r.jsx)(t.code,{children:"config.xml"})," file in the Neptune Cockpit under ",(0,r.jsx)(t.strong,{children:"Run"})," > ",(0,r.jsx)(t.strong,{children:"Mobile Client"})," > ",(0,r.jsx)(t.strong,{children:"Device"}),":"]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-xml",children:'<plugin name="com.testfairy.cordova-plugin" source="npm"/>\n'})}),"\n",(0,r.jsx)(t.h2,{id:"initialize-the-testfairy-sdk",children:"Initialize the TestFairy SDK:"}),"\n",(0,r.jsx)(t.p,{children:"After enabling the TestFairy plugin, you need to initialize the TestFairy SDK in your Neptune application. Follow these steps:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Open the App Designer in Neptune."}),"\n",(0,r.jsxs)(t.li,{children:["Add the following code to your ",(0,r.jsx)(t.code,{children:"init"})," script:"]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'document.addEventListener("deviceready", function() {\n    TestFairy.begin("APP TOKEN");\n});\n'})}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["Ensure that you replace ",(0,r.jsx)(t.strong,{children:"APP TOKEN"})," with your actual TestFairy app token. You can find the app token in your TestFairy ",(0,r.jsx)(t.a,{href:"https://app.testfairy.com/settings/",children:"User Preferences"}),"."]})})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var r=n(18215);const a={tabItem:"tabItem_Ymn6"};var i=n(74848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(96540),a=n(18215),i=n(23104),s=n(56347),l=n(205),o=n(57485),u=n(31682),c=n(89466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=p(e),[s,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[u,d]=f({queryString:n,groupId:a}),[m,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,c.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),y=(()=>{const e=u??m;return h({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{y&&o(y)}),[y]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,i]),tabValues:i}}var b=n(92303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(74848);function v(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.a_)(),c=e=>{const t=e.currentTarget,n=o.indexOf(t),a=l[n].value;a!==r&&(u(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>o.push(e),onKeyDown:d,onClick:c,...i,className:(0,a.A)("tabs__item",y.tabItem,i?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function j(e){const t=m(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",y.tabList),children:[(0,g.jsx)(v,{...e,...t}),(0,g.jsx)(x,{...e,...t})]})}function w(e){const t=(0,b.A)();return(0,g.jsx)(j,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var r=n(96540);const a={},i=r.createContext(a);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);