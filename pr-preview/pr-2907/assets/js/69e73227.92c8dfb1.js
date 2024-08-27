"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[26294],{84256:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=a(74848),r=a(28453),l=a(86025);a(11470),a(19365);const s={id:"zed",title:"saucectl with Zed",sidebar_label:"Zed"},o=void 0,i={id:"dev/cli/saucectl/usage/ide/zed",title:"saucectl with Zed",description:"Zed can help you edit the saucectl configuration files by providing helpful suggestions, autocompletion and docs; all without having to leave the IDE.",source:"@site/docs/dev/cli/saucectl/usage/ide/zed.md",sourceDirName:"dev/cli/saucectl/usage/ide",slug:"/dev/cli/saucectl/usage/ide/zed",permalink:"/sauce-docs/pr-preview/pr-2907/dev/cli/saucectl/usage/ide/zed",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/dev/cli/saucectl/usage/ide/zed.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:172477197e4,frontMatter:{id:"zed",title:"saucectl with Zed",sidebar_label:"Zed"},sidebar:"dev",previous:{title:"Visual Studio Code",permalink:"/sauce-docs/pr-preview/pr-2907/dev/cli/saucectl/usage/ide/vscode"},next:{title:"General Usage",permalink:"/sauce-docs/pr-preview/pr-2907/dev/cli/virtual-usb"}},u={},c=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"JSON Schema Validation",id:"json-schema-validation",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Zed can help you edit the ",(0,n.jsx)(t.code,{children:"saucectl"})," configuration files by providing helpful suggestions, autocompletion and docs; all without having to leave the IDE."]}),"\n",(0,n.jsx)(t.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://zed.dev/",children:"Zed"})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"json-schema-validation",children:"JSON Schema Validation"}),"\n",(0,n.jsxs)(t.p,{children:["Our JSON schema is published to the ",(0,n.jsx)(t.a,{href:"https://www.schemastore.org/json/",children:"JSON Schema Store"}),", which is made available to Zed."]}),"\n",(0,n.jsxs)(t.p,{children:["If your ",(0,n.jsx)(t.code,{children:"saucectl"})," config YAML is stored in a ",(0,n.jsx)(t.code,{children:".sauce/"})," folder, Zed will automatically apply the schema to all YAML files contained in that folder and no further action is required."]}),"\n",(0,n.jsxs)(t.p,{children:["You should now be able to see the docs for various attributes:",(0,n.jsx)("br",{}),(0,n.jsx)("img",{src:(0,l.A)("img/stt/zed-yaml-docs.png"),alt:"Zed YAML Attribute Description"})]}),"\n",(0,n.jsxs)(t.p,{children:["and have autocompletion ready at your fingertips!",(0,n.jsx)("br",{}),(0,n.jsx)("img",{src:(0,l.A)("img/stt/zed-yaml-autocomplete.png"),alt:"Zed YAML Attribute Autocompletion"})]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},19365:(e,t,a)=>{a.d(t,{A:()=>s});a(96540);var n=a(18215);const r={tabItem:"tabItem_Ymn6"};var l=a(74848);function s(e){let{children:t,hidden:a,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,s),hidden:a,children:t})}},11470:(e,t,a)=>{a.d(t,{A:()=>j});var n=a(96540),r=a(18215),l=a(23104),s=a(56347),o=a(205),i=a(57485),u=a(31682),c=a(89466);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}(a);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const r=(0,s.W6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i.aZ)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function m(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=h(e),[s,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[u,d]=f({queryString:a,groupId:r}),[m,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,c.Dv)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),v=(()=>{const e=u??m;return p({value:e,tabValues:l})?e:null})();(0,o.A)((()=>{v&&i(v)}),[v]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,l]),tabValues:l}}var b=a(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=a(74848);function x(e){let{className:t,block:a,selectedValue:n,selectValue:s,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.a_)(),c=e=>{const t=e.currentTarget,a=i.indexOf(t),r=o[a].value;r!==n&&(u(t),s(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=i.indexOf(e.currentTarget)+1;t=i[a]??i[0];break}case"ArrowLeft":{const a=i.indexOf(e.currentTarget)-1;t=i[a]??i[i.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},t),children:o.map((e=>{let{value:t,label:a,attributes:l}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>i.push(e),onKeyDown:d,onClick:c,...l,className:(0,r.A)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":n===t}),children:a??t},t)}))})}function y(e){let{lazy:t,children:a,selectedValue:r}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function w(e){const t=m(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...e,...t}),(0,g.jsx)(y,{...e,...t})]})}function j(e){const t=(0,b.A)();return(0,g.jsx)(w,{...e,children:d(e.children)},String(t))}},28453:(e,t,a)=>{a.d(t,{R:()=>s,x:()=>o});var n=a(96540);const r={},l=n.createContext(r);function s(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);