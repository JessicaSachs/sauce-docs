"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[6659],{36001:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=t(74848),a=t(28453);t(11470),t(19365),t(86025);const s={id:"session-replay",title:"Session Replay for Web",sidebar_label:"Session Replay",description:"Configure session replay in your web applications."},i=void 0,o={id:"error-reporting/platform-integrations/session-replay",title:"Session Replay for Web",description:"Configure session replay in your web applications.",source:"@site/docs/error-reporting/platform-integrations/session-replay.md",sourceDirName:"error-reporting/platform-integrations",slug:"/error-reporting/platform-integrations/session-replay",permalink:"/sauce-docs/pr-preview/pr-2916/error-reporting/platform-integrations/session-replay",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/platform-integrations/session-replay.md",tags:[],version:"current",lastUpdatedBy:"kristofmuhi",lastUpdatedAt:172492915e4,frontMatter:{id:"session-replay",title:"Session Replay for Web",sidebar_label:"Session Replay",description:"Configure session replay in your web applications."},sidebar:"backtrace",previous:{title:"Source Maps",permalink:"/sauce-docs/pr-preview/pr-2916/error-reporting/platform-integrations/source-map"},next:{title:"Apache Traffic Server",permalink:"/sauce-docs/pr-preview/pr-2916/error-reporting/platform-integrations/apache"}},l={},c=[{value:"Overview of Session Replay",id:"overview-of-session-replay",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setting Up Session Replay",id:"setting-up-session-replay",level:2},{value:"Install the package",id:"install-the-package",level:3},{value:"Integrate the session replay module",id:"integrate-the-session-replay-module",level:3}];function u(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.admonition,{type:"note",children:(0,n.jsx)(r.p,{children:"Session Replay is currently in beta and only available for web applications. Replays are limited during this phase."})}),"\n",(0,n.jsx)(r.p,{children:"Session Replay allows you to capture a visual recreation of a user session. This simplifies the replication of user errors to determine the root cause. Combining session replays with breadcrumbs and callstacks can give a complete view of the user experience."}),"\n",(0,n.jsx)(r.h2,{id:"overview-of-session-replay",children:"Overview of Session Replay"}),"\n",(0,n.jsx)(r.p,{children:"Session replay works by capturing the DOM state periodically when the user interacts wtih your application. The user session is then recreated when viewing the error in Backtrace. Unlike a video recording, these packages are lightweight and allow for additional processing prior to being sent and stored in Backtrace (e.g. masking PII). Backtrace SDK snips the session around a triggering error so your team can hone in on a specific issue."}),"\n",(0,n.jsxs)(r.p,{children:["The Backtrace implementation makes use of ",(0,n.jsx)(r.a,{href:"https://github.com/rrweb-io/rrweb/blob/master/guide.md",children:"rrweb"}),"."]}),"\n",(0,n.jsx)(r.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["A Backtrace account (",(0,n.jsx)(r.a,{href:"https://backtrace.io/login",children:"log in"})," or sign up for a ",(0,n.jsx)(r.a,{href:"https://backtrace.io/sign-up",children:"free trial license"}),")."]}),"\n",(0,n.jsxs)(r.li,{children:["Follow the ",(0,n.jsx)(r.a,{href:"https://docs.saucelabs.com/error-reporting/language-integrations/javascript/",children:"JavaScript integration guide"}),"."]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"setting-up-session-replay",children:"Setting Up Session Replay"}),"\n",(0,n.jsx)(r.h3,{id:"install-the-package",children:"Install the package"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:" npm install @backtrace/session-replay\n"})}),"\n",(0,n.jsx)(r.h3,{id:"integrate-the-session-replay-module",children:"Integrate the session replay module"}),"\n",(0,n.jsx)(r.p,{children:"Add the following code to the build the session replay module:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-javascript",children:"import { BacktraceClient, BacktraceConfiguration } from '@backtrace/browser';\nimport { BacktraceSessionReplayModule } from '@backtrace/session-replay';\n\n// Configure client options\nconst options: BacktraceConfiguration = {\n    // Name of the website/application\n    name: 'MyWebPage',\n    // Version of the website\n    version: '1.2.3',\n    // Submission url\n    // <universe> is the subdomain of your Backtrace instance (<universe>.backtrace.io)\n    // <token> can be found in Project Settings/Submission tokens\n    url: 'https://submit.backtrace.io/<universe>/<token>/json',\n};\n\n// Initialize the client with the options\n// Make sure to add `useModule` with `BacktraceSessionReplayModule`\nconst client = BacktraceClient.builder(options)\n    .useModule(\n        new BacktraceSessionReplayModule({\n            maxEventCount: 100,\n        }),\n    )\n    .build();\n"})}),"\n",(0,n.jsxs)(r.p,{children:["Additional options for event limiting, masking, privacy, and more can be found on ",(0,n.jsx)(r.a,{href:"https://github.com/backtrace-labs/backtrace-javascript/tree/main/packages/session-replay",children:"Backtrace github"}),"."]})]})}function p(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>i});t(96540);var n=t(34164);const a={tabItem:"tabItem_Ymn6"};var s=t(74848);function i(e){let{children:r,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,i),hidden:t,children:r})}},11470:(e,r,t)=>{t.d(r,{A:()=>x});var n=t(96540),a=t(34164),s=t(23104),i=t(56347),o=t(205),l=t(57485),c=t(31682),u=t(70679);function p(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??function(e){return p(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:a}}=e;return{value:r,label:t,attributes:n,default:a}}))}(t);return function(e){const r=(0,c.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function h(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function f(e){let{queryString:r=!1,groupId:t}=e;const a=(0,i.W6)(),s=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,l.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const r=new URLSearchParams(a.location.search);r.set(s,e),a.replace({...a.location,search:r.toString()})}),[s,a])]}function b(e){const{defaultValue:r,queryString:t=!1,groupId:a}=e,s=d(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:s}))),[c,p]=f({queryString:t,groupId:a}),[b,m]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[a,s]=(0,u.Dv)(t);return[a,(0,n.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),g=(()=>{const e=c??b;return h({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),m(e)}),[p,m,s]),tabValues:s}}var m=t(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(74848);function y(e){let{className:r,block:t,selectedValue:n,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const r=e.currentTarget,t=l.indexOf(r),a=o[t].value;a!==n&&(c(r),i(a))},p=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;r=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;r=l[t]??l[l.length-1];break}}r?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},r),children:o.map((e=>{let{value:r,label:t,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>l.push(e),onKeyDown:p,onClick:u,...s,className:(0,a.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":n===r}),children:t??r},r)}))})}function k(e){let{lazy:r,children:t,selectedValue:s}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=i.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==s})))})}function w(e){const r=b(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,v.jsx)(y,{...r,...e}),(0,v.jsx)(k,{...r,...e})]})}function x(e){const r=(0,m.A)();return(0,v.jsx)(w,{...e,children:p(e.children)},String(r))}},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>o});var n=t(96540);const a={},s=n.createContext(a);function i(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);