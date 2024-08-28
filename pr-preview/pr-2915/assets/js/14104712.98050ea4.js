"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[92705],{51514:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(74848),o=n(28453),i=(n(11470),n(19365),n(86025));const a={id:"webhook",title:"Webhook Integration with Backtrace",sidebar_label:"Webhook",description:"This guide will go through the steps necessary to integrate Backtrace with custom HTTP endpoints."},s=void 0,l={id:"error-reporting/workflow-integrations/webhook",title:"Webhook Integration with Backtrace",description:"This guide will go through the steps necessary to integrate Backtrace with custom HTTP endpoints.",source:"@site/docs/error-reporting/workflow-integrations/webhook.md",sourceDirName:"error-reporting/workflow-integrations",slug:"/error-reporting/workflow-integrations/webhook",permalink:"/sauce-docs/pr-preview/pr-2915/error-reporting/workflow-integrations/webhook",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/workflow-integrations/webhook.md",tags:[],version:"current",lastUpdatedBy:"Tian Feng",lastUpdatedAt:1724880664e3,frontMatter:{id:"webhook",title:"Webhook Integration with Backtrace",sidebar_label:"Webhook",description:"This guide will go through the steps necessary to integrate Backtrace with custom HTTP endpoints."},sidebar:"backtrace",previous:{title:"Circonus",permalink:"/sauce-docs/pr-preview/pr-2915/error-reporting/workflow-integrations/monitoring/circonus"},next:{title:"Alerts",permalink:"/sauce-docs/pr-preview/pr-2915/error-reporting/project-setup/alerts"}},u={},c=[{value:"Incoming Webhook",id:"incoming-webhook",level:2},{value:"Set Up the Integration",id:"set-up-the-integration",level:2}];function d(e){const t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"This guide will go through the steps necessary to integrate Backtrace with custom HTTP endpoints."}),"\n",(0,r.jsx)(t.p,{children:"There are two main steps for setting up a webhook:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Set up the incoming webhook"}),"\n",(0,r.jsx)(t.li,{children:"Set up the integration"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"incoming-webhook",children:"Incoming Webhook"}),"\n",(0,r.jsx)(t.p,{children:"In order to set up integration for webhook, you need an existing HTTP service which can handle POST requests. Webhooks will be triggered in batch every few seconds. Each batch may contain multiple group notifications. For each group in a batch, a distinct HTTP request will be triggered to the configured URL. The body of the request is a JSON payload of the following form:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n\n    // Universe in which the group is member of.\n    "universe": "my_universe",\n\n    // Project in which the group is member of.\n    "project": "my_project",\n\n    // Name of the binary which triggered the object.\n    "application": "my_app.exe",\n\n    // Fingerprint of the group.\n    "fingerprint": "8910551e27a339e542...",\n\n    // Url of the originating API, can be used to make more callback.\n    "href": "https://u.sp.backtrace.io/",\n\n    // Url to the group information and debugger\n    "group_url": "https://u.sp.backtrace.io/dashboard/...",\n\n    // Callstack of the group.\n    "callstack": [\n        "printf",\n        "my_fn",\n        "main",\n    ],\n\n    // Number of objects in the group.\n    "occurrences": 35,\n\n    // Hex identifier of the last received object in the group.\n    "object_id": "2e6",\n\n    // Timestamps (unix epoch in seconds) of the first and last object seen\n    // in the group.\n    "timestamp": [1502953926, 1502953926],\n\n    // Aggregation of classifiers found on objects in the group, see\n    // https://documentation.backtrace.io/classifiers/\n    "classifiers": ["exception"],\n\n    // Number of hostnames affected.\n    "hosts": 4,\n\n    // Number of GUIDs affected.\n    "guids": 0\n\n    // Histograms of custom attributes. All populated custom attributes are\n    // aggregated by default.\n    "attributes": {\n        "version": [\n            ["1.2.3", 10],\n            ["1.2.2", 1],\n            ["1.1.0", 24]\n        ],\n        "environment": [\n            ["production", 33],\n            ["staging", 1],\n            ["devel", 1]\n        ]\n    }\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"set-up-the-integration",children:"Set Up the Integration"}),"\n",(0,r.jsxs)(t.p,{children:["To set up the integration, first go to the ",(0,r.jsx)(t.strong,{children:"Project Settings"})," page for the project you want to add a integration for:"]}),"\n",(0,r.jsx)("img",{src:(0,i.Ay)("img/error-reporting/workflow-integrations/set-up-workflow-integration.webp"),alt:""}),"\n",(0,r.jsxs)(t.p,{children:["Then click ",(0,r.jsx)(t.strong,{children:"Integrations"})," in the left-hand menu, and the plus sign to create a new integration:"]}),"\n",(0,r.jsx)("img",{src:(0,i.Ay)("img/error-reporting/workflow-integrations/add-wf-integration.webp"),alt:""}),"\n",(0,r.jsxs)(t.p,{children:["Select ",(0,r.jsx)(t.strong,{children:"webhook"})," and fill in the required settings (name and the webhook URL you generated in the step above)."]}),"\n",(0,r.jsx)("img",{src:(0,i.Ay)("img/error-reporting/workflow-integrations/webhook-setup.png"),alt:""}),"\n",(0,r.jsx)(t.p,{children:"Important: Although the authentication may be marked as optional depending on your environment, the authentication details MUST be provided. If your endpoint doesn't require any, just fill in any username/password. Your endpoint should ignore it."}),"\n",(0,r.jsx)(t.p,{children:"Next: After filling in the integration-specific settings, proceed to Common Settings to finish configuring the integration."})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var r=n(34164);const o={tabItem:"tabItem_Ymn6"};var i=n(74848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,a),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>x});var r=n(96540),o=n(34164),i=n(23104),a=n(56347),s=n(205),l=n(57485),u=n(31682),c=n(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:o}}=e;return{value:t,label:n,attributes:r,default:o}}))}(n);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const o=(0,a.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(o.location.search);t.set(i,e),o.replace({...o.location,search:t.toString()})}),[i,o])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,i=h(e),[a,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[u,d]=g({queryString:n,groupId:o}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,i]=(0,c.Dv)(n);return[o,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:o}),m=(()=>{const e=u??f;return p({value:e,tabValues:i})?e:null})();(0,s.A)((()=>{m&&l(m)}),[m]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,i]),tabValues:i}}var b=n(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var w=n(74848);function k(e){let{className:t,block:n,selectedValue:r,selectValue:a,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.a_)(),c=e=>{const t=e.currentTarget,n=l.indexOf(t),o=s[n].value;o!==r&&(u(t),a(o))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,w.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,w.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:d,onClick:c,...i,className:(0,o.A)("tabs__item",m.tabItem,i?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:i}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,w.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function y(e){const t=f(e);return(0,w.jsxs)("div",{className:(0,o.A)("tabs-container",m.tabList),children:[(0,w.jsx)(k,{...t,...e}),(0,w.jsx)(v,{...t,...e})]})}function x(e){const t=(0,b.A)();return(0,w.jsx)(y,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>s});var r=n(96540);const o={},i=r.createContext(o);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);