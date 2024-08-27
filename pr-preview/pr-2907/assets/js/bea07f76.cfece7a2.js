"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[29287],{34097:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>l});var n=r(74848),a=r(28453);r(86025),r(11470),r(19365);const s={id:"using-bug-tracking",title:"Using Bug Tracking",sidebar_label:"Using Bug Tracking"},i=void 0,u={id:"testfairy/sdk/bug-tracking/using-bug-tracking",title:"Using Bug Tracking",description:"Bug tracking is an essential part of the software development process to identify, document, and resolve issues in a systematic manner. TestFairy offers integration with various bug-tracking platforms, enabling seamless communication between testers and developers.",source:"@site/docs/testfairy/sdk/bug-tracking/using-bug-tracking.md",sourceDirName:"testfairy/sdk/bug-tracking",slug:"/testfairy/sdk/bug-tracking/using-bug-tracking",permalink:"/sauce-docs/pr-preview/pr-2907/testfairy/sdk/bug-tracking/using-bug-tracking",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/testfairy/sdk/bug-tracking/using-bug-tracking.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:172477197e4,frontMatter:{id:"using-bug-tracking",title:"Using Bug Tracking",sidebar_label:"Using Bug Tracking"},sidebar:"docs",previous:{title:"Xamarin Component",permalink:"/sauce-docs/pr-preview/pr-2907/testfairy/platforms/xamarin"},next:{title:"GitHub",permalink:"/sauce-docs/pr-preview/pr-2907/testfairy/sdk/bug-tracking/github"}},o={},l=[];function c(e){const t={a:"a",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Bug tracking is an essential part of the software development process to identify, document, and resolve issues in a systematic manner. TestFairy offers integration with various bug-tracking platforms, enabling seamless communication between testers and developers."}),"\n",(0,n.jsx)(t.p,{children:"Before utilizing the bug-tracking features in TestFairy, ensure that you connect your TestFairy account to your preferred bug-tracking platform. TestFairy supports the following bug-tracking integrations:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/testfairy/sdk/bug-tracking/jira-cloud/",children:"JIRA Cloud"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/testfairy/sdk/bug-tracking/jira-server/",children:"JIRA Server"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/testfairy/sdk/bug-tracking/github/",children:"GitHub"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/testfairy/sdk/bug-tracking/trello/",children:"Trello"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/testfairy/sdk/bug-tracking/tf-connect/",children:"Connect (TFC)"})}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Ensure that you follow the relevant documentation to establish a secure and authenticated connection between TestFairy and your bug-tracking platform."})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>i});r(96540);var n=r(18215);const a={tabItem:"tabItem_Ymn6"};var s=r(74848);function i(e){let{children:t,hidden:r,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,i),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>w});var n=r(96540),a=r(18215),s=r(23104),i=r(56347),u=r(205),o=r(57485),l=r(31682),c=r(89466);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function g(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,l.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function f(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:r}=e;const a=(0,i.W6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,o.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function p(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,s=g(e),[i,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[l,d]=b({queryString:r,groupId:a}),[p,h]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),m=(()=>{const e=l??p;return f({value:e,tabValues:s})?e:null})();(0,u.A)((()=>{m&&o(m)}),[m]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!f({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),h(e)}),[d,h,s]),tabValues:s}}var h=r(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var k=r(74848);function v(e){let{className:t,block:r,selectedValue:n,selectValue:i,tabValues:u}=e;const o=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.a_)(),c=e=>{const t=e.currentTarget,r=o.indexOf(t),a=u[r].value;a!==n&&(l(t),i(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;t=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;t=o[r]??o[o.length-1];break}}t?.focus()};return(0,k.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},t),children:u.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,k.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>o.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.A)("tabs__item",m.tabItem,s?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function y(e){let{lazy:t,children:r,selectedValue:a}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,k.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function x(e){const t=p(e);return(0,k.jsxs)("div",{className:(0,a.A)("tabs-container",m.tabList),children:[(0,k.jsx)(v,{...e,...t}),(0,k.jsx)(y,{...e,...t})]})}function w(e){const t=(0,h.A)();return(0,k.jsx)(x,{...e,children:d(e.children)},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>u});var n=r(96540);const a={},s=n.createContext(a);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function u(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);