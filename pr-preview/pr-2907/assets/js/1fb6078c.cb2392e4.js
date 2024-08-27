"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[43174],{84469:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(74848),s=n(28453),a=n(86025);n(11470),n(19365);const o={id:"webhooks",title:"Webhooks",sidebar_label:"Webhooks"},l=void 0,i={id:"visual/e2e-testing/integrations/webhooks",title:"Webhooks",description:"Screener can send webhook events that notify your app any time an event happens on your account. Webhooks can be useful for extending Screener, and triggering external processes and services. Multiple webhook endpoints can be registered, and each webhook can be filtered by project and/or event types.",source:"@site/docs/visual/e2e-testing/integrations/webhooks.md",sourceDirName:"visual/e2e-testing/integrations",slug:"/visual/e2e-testing/integrations/webhooks",permalink:"/sauce-docs/pr-preview/pr-2907/visual/e2e-testing/integrations/webhooks",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/visual/e2e-testing/integrations/webhooks.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:172477197e4,frontMatter:{id:"webhooks",title:"Webhooks",sidebar_label:"Webhooks"}},u={},c=[{value:"Setup Steps",id:"setup-steps",level:2}];function d(e){const t={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Screener can send webhook events that notify your app any time an event happens on your account. Webhooks can be useful for extending Screener, and triggering external processes and services. Multiple webhook endpoints can be registered, and each webhook can be filtered by project and/or event types."}),"\n",(0,r.jsx)(t.p,{children:"Screener has the following event types:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"build.status.error"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"build.status.failure"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"build.status.success"})}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"setup-steps",children:"Setup Steps"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["In Screener, open ",(0,r.jsx)(t.strong,{children:"Account > Webhooks"}),", and click ",(0,r.jsx)(t.strong,{children:"Add Webhook Endpoint"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"In the Add Webhook dialog, enter your Webhook URL."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)("img",{src:(0,a.A)("img/visual/e2e-add-webhook.png"),alt:"E2E Add Webhook"}),"\n",(0,r.jsx)(t.p,{children:"Optionally, you can filter notifications by project and/or events."}),"\n",(0,r.jsxs)(t.ol,{start:"3",children:["\n",(0,r.jsxs)(t.li,{children:["Click ",(0,r.jsx)(t.strong,{children:"Add Endpoint"}),", and your Webhook will be added."]}),"\n"]}),"\n",(0,r.jsx)("img",{src:(0,a.A)("img/visual/e2e-webhooks.png"),alt:"E2E Webhooks"})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>o});n(96540);var r=n(18215);const s={tabItem:"tabItem_Ymn6"};var a=n(74848);function o(e){let{children:t,hidden:n,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,o),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(96540),s=n(18215),a=n(23104),o=n(56347),l=n(205),i=n(57485),u=n(31682),c=n(89466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function b(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const s=(0,o.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,a=h(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[u,d]=p({queryString:n,groupId:s}),[f,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,c.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:s}),v=(()=>{const e=u??f;return b({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{v&&i(v)}),[v]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!b({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),m(e)}),[d,m,a]),tabValues:a}}var m=n(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(74848);function x(e){let{className:t,block:n,selectedValue:r,selectValue:o,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.a_)(),c=e=>{const t=e.currentTarget,n=i.indexOf(t),s=l[n].value;s!==r&&(u(t),o(s))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>i.push(e),onKeyDown:d,onClick:c,...a,className:(0,s.A)("tabs__item",v.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function k(e){let{lazy:t,children:n,selectedValue:s}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=f(e);return(0,g.jsxs)("div",{className:(0,s.A)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...e,...t}),(0,g.jsx)(k,{...e,...t})]})}function w(e){const t=(0,m.A)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var r=n(96540);const s={},a=r.createContext(s);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);