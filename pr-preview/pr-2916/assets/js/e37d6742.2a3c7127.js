"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[2989],{99132:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var r=a(74848),n=a(28453);a(11470),a(19365),a(86025);const s={id:"limitations",title:"Limitations for Cucumber.js with Playwright",sidebar_label:"Limitations"},i=void 0,o={id:"web-apps/automated-testing/cucumberjs-playwright/limitations",title:"Limitations for Cucumber.js with Playwright",description:"Special Characters in Test Names",source:"@site/docs/web-apps/automated-testing/cucumberjs-playwright/limitations.md",sourceDirName:"web-apps/automated-testing/cucumberjs-playwright",slug:"/web-apps/automated-testing/cucumberjs-playwright/limitations",permalink:"/sauce-docs/pr-preview/pr-2916/web-apps/automated-testing/cucumberjs-playwright/limitations",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/web-apps/automated-testing/cucumberjs-playwright/limitations.md",tags:[],version:"current",lastUpdatedBy:"kristofmuhi",lastUpdatedAt:172492915e4,frontMatter:{id:"limitations",title:"Limitations for Cucumber.js with Playwright",sidebar_label:"Limitations"},sidebar:"docs",previous:{title:"Advanced Configuration",permalink:"/sauce-docs/pr-preview/pr-2916/web-apps/automated-testing/cucumberjs-playwright/advanced"},next:{title:"Using TestCafe",permalink:"/sauce-docs/pr-preview/pr-2916/web-apps/automated-testing/testcafe"}},l={},u=[{value:"Special Characters in Test Names",id:"special-characters-in-test-names",level:3},{value:"Playwright 1.31.1 + Webkit + Sauce-Connect",id:"playwright-1311--webkit--sauce-connect",level:3},{value:"macOS 11 + Playwright 1.29+ + Webkit",id:"macos-11--playwright-129--webkit",level:3},{value:"Webkit + Windows",id:"webkit--windows",level:3}];function c(e){const t={a:"a",code:"code",h3:"h3",p:"p",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h3,{id:"special-characters-in-test-names",children:"Special Characters in Test Names"}),"\n",(0,r.jsx)(t.p,{children:"We recommend that you avoid the use of special characters when naming your tests. If your test name contains any special characters, your test may not run or its artifacts may not be visible in our platform."}),"\n",(0,r.jsx)(t.h3,{id:"playwright-1311--webkit--sauce-connect",children:"Playwright 1.31.1 + Webkit + Sauce-Connect"}),"\n",(0,r.jsx)(t.p,{children:"When using Sauce-Connect, Webkit browser is unable to load any website that is hosted on the Internet.\nLocal websites can still be loaded."}),"\n",(0,r.jsx)(t.h3,{id:"macos-11--playwright-129--webkit",children:"macOS 11 + Playwright 1.29+ + Webkit"}),"\n",(0,r.jsx)(t.p,{children:"Webkit is not working on macOS 11 since Playwright 1.29.0"}),"\n",(0,r.jsx)(t.h3,{id:"webkit--windows",children:"Webkit + Windows"}),"\n",(0,r.jsxs)(t.p,{children:["There is a ",(0,r.jsx)(t.a,{href:"https://github.com/microsoft/playwright/issues/24512",children:"known issue"})," in Playwright that prevents some sites from loading in Webkit on Windows with the error ",(0,r.jsx)(t.code,{children:"SSL peer certificate or SSH remote key was not OK"}),". We recommend running your Playwright + Webkit tests on our Mac VMs by setting the ",(0,r.jsx)(t.a,{href:"https://docs.saucelabs.com/web-apps/automated-testing/playwright/yaml/#platformname",children:"platformName"})," to either ",(0,r.jsx)(t.code,{children:"macOS 13"})," or ",(0,r.jsx)(t.code,{children:"macOS 12"}),"."]})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},19365:(e,t,a)=>{a.d(t,{A:()=>i});a(96540);var r=a(34164);const n={tabItem:"tabItem_Ymn6"};var s=a(74848);function i(e){let{children:t,hidden:a,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(n.tabItem,i),hidden:a,children:t})}},11470:(e,t,a)=>{a.d(t,{A:()=>j});var r=a(96540),n=a(34164),s=a(23104),i=a(56347),o=a(205),l=a(57485),u=a(31682),c=a(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}(a);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.W6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,s=p(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[u,d]=m({queryString:a,groupId:n}),[b,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,c.Dv)(a);return[n,(0,r.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:n}),w=(()=>{const e=u??b;return h({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{w&&l(w)}),[w]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=a(92303);const w={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=a(74848);function v(e){let{className:t,block:a,selectedValue:r,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const t=e.currentTarget,a=l.indexOf(t),n=o[a].value;n!==r&&(u(t),i(n))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;t=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;t=l[a]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":a},t),children:o.map((e=>{let{value:t,label:a,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:d,onClick:c,...s,className:(0,n.A)("tabs__item",w.tabItem,s?.className,{"tabs__item--active":r===t}),children:a??t},t)}))})}function y(e){let{lazy:t,children:a,selectedValue:s}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function k(e){const t=b(e);return(0,g.jsxs)("div",{className:(0,n.A)("tabs-container",w.tabList),children:[(0,g.jsx)(v,{...t,...e}),(0,g.jsx)(y,{...t,...e})]})}function j(e){const t=(0,f.A)();return(0,g.jsx)(k,{...e,children:d(e.children)},String(t))}},28453:(e,t,a)=>{a.d(t,{R:()=>i,x:()=>o});var r=a(96540);const n={},s=r.createContext(n);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);