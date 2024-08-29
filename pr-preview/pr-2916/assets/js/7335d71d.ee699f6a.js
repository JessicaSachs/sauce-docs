"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[49849],{52908:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var r=t(74848),a=t(28453),o=(t(11470),t(19365),t(86025));const s={id:"slack",title:"Backtrace Integration for Slack",sidebar_label:"Slack",description:"Integrate Backtrace with Slack."},i=void 0,c={id:"error-reporting/workflow-integrations/messaging/slack",title:"Backtrace Integration for Slack",description:"Integrate Backtrace with Slack.",source:"@site/docs/error-reporting/workflow-integrations/messaging/slack.md",sourceDirName:"error-reporting/workflow-integrations/messaging",slug:"/error-reporting/workflow-integrations/messaging/slack",permalink:"/sauce-docs/pr-preview/pr-2916/error-reporting/workflow-integrations/messaging/slack",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/workflow-integrations/messaging/slack.md",tags:[],version:"current",lastUpdatedBy:"kristofmuhi",lastUpdatedAt:172492915e4,frontMatter:{id:"slack",title:"Backtrace Integration for Slack",sidebar_label:"Slack",description:"Integrate Backtrace with Slack."},sidebar:"backtrace",previous:{title:"Overview",permalink:"/sauce-docs/pr-preview/pr-2916/error-reporting/workflow-integrations/overview"},next:{title:"IRC",permalink:"/sauce-docs/pr-preview/pr-2916/error-reporting/workflow-integrations/messaging/irc"}},l={},u=[{value:"Connecting the App for Slack",id:"connecting-the-app-for-slack",level:2},{value:"Setting Up the Incoming Webhook (Legacy)",id:"setting-up-the-incoming-webhook-legacy",level:2},{value:"Main Body Content\u200b",id:"main-body-content",level:2},{value:"Issue Based Alerts\u200b",id:"issue-based-alerts",level:2}];function d(e){const n={a:"a",admonition:"admonition",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"You can integrate Backtrace with Slack to see the errors that matter, triage, and resolve them accordingly in one workflow."}),"\n",(0,r.jsx)(n.p,{children:"There are two integration paths:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Use the App for Slack (recommended)"}),"\n",(0,r.jsx)(n.li,{children:"Connecting a Webhook (legacy)"}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"Slack announced that they plan to deprecate support for customized webhooks, so the App for Slack is generally preferred."})}),"\n",(0,r.jsx)(n.h2,{id:"connecting-the-app-for-slack",children:"Connecting the App for Slack"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Navigate to ",(0,r.jsx)(n.strong,{children:"Project Settings"})," > ",(0,r.jsx)(n.strong,{children:"Integrations"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click ",(0,r.jsx)(n.strong,{children:"+"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Select Slack from the integration list."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click ",(0,r.jsx)(n.strong,{children:"Install Slack app"}),"."]}),"\n",(0,r.jsx)("img",{src:(0,o.Ay)("/img/error-reporting/workflow-integrations/slack/slack_integration.png"),alt:"slack integration"}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"You may need an admin to approve installing the app in your workspace."})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Next, ",(0,r.jsx)(n.strong,{children:"Allow"})," Backtrace to access the Backtrace I/O Slack workspace, or request from your Slack admin."]}),"\n",(0,r.jsx)("img",{src:(0,o.Ay)("/img/error-reporting/workflow-integrations/slack/backtrace_permission.png"),alt:"allow backtrace to access slack integration",width:"500"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["After the App for Slack is installed, go to ",(0,r.jsx)(n.strong,{children:"Home"})," in Slack and click ",(0,r.jsx)(n.strong,{children:"Connect with Backtrace"}),"."]}),"\n",(0,r.jsx)("img",{src:(0,o.Ay)("/img/error-reporting/workflow-integrations/slack/connect_backtrace.webp"),alt:"connect with backtrace",width:"500"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Enter your Backtrace instance (*.sp.backtrace.io domain) in ",(0,r.jsx)(n.strong,{children:"Backtrace Instance URL"})," and click ",(0,r.jsx)(n.strong,{children:"Submit"}),"."]}),"\n",(0,r.jsx)("img",{src:(0,o.Ay)("/img/error-reporting/workflow-integrations/slack/add_instance.png"),alt:"add backtrace instance URL",width:"500"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"You will be redirected back to Backtrace to finish the setup."}),"\n",(0,r.jsx)("img",{src:(0,o.Ay)("/img/error-reporting/workflow-integrations/slack/success.png"),alt:"your connection was created successfully"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"setting-up-the-incoming-webhook-legacy",children:"Setting Up the Incoming Webhook (Legacy)"}),"\n",(0,r.jsxs)(n.p,{children:["If you prefer using the legacy approach, you can configure an Incoming Webhook in Slack. Follow the on-screen instructions on the ",(0,r.jsx)(n.a,{href:"https://my.slack.com/services/new/incoming-webhook/",children:"Incoming WebHooks"})," page:"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["In the ",(0,r.jsx)(n.strong,{children:"Post to Channel"})," section, select the channel where you want to post messages, then click ",(0,r.jsx)(n.strong,{children:"Add Incoming WebHooks integration"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Once the Incoming Webhook integration is added, copy the ",(0,r.jsx)(n.strong,{children:"Webhook URL"})," from the ",(0,r.jsx)(n.strong,{children:"Setup Instructions"}),". This URL will be used to create the integration for Slack in Backtrace."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"main-body-content",children:"Main Body Content\u200b"}),"\n",(0,r.jsx)(n.p,{children:"You can specify attributes to be appended to the description in the Main body content."}),"\n",(0,r.jsx)("img",{src:(0,o.Ay)("/img/error-reporting/workflow-integrations/slack/body-content.png"),alt:"main body content"}),"\n",(0,r.jsx)(n.h2,{id:"issue-based-alerts",children:"Issue Based Alerts\u200b"}),"\n",(0,r.jsxs)(n.p,{children:["You can configure automated actions for your Slack workflow integration with issue-based alerts to further automate your workflow. Use issue-based alerts to automatically generate issues in Slack based on the conditions and frequency you specify. For more information, see ",(0,r.jsx)(n.a,{href:"/error-reporting/project-setup/alerts/#issue-based-alerts",children:"Issue Based Alerts"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var r=t(34164);const a={tabItem:"tabItem_Ymn6"};var o=t(74848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>y});var r=t(96540),a=t(34164),o=t(23104),s=t(56347),i=t(205),c=t(57485),l=t(31682),u=t(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,l.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const a=(0,s.W6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(a.location.search);n.set(o,e),a.replace({...a.location,search:n.toString()})}),[o,a])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,o=h(e),[s,c]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[l,d]=g({queryString:t,groupId:a}),[m,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,o]=(0,u.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:a}),k=(()=>{const e=l??m;return p({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{k&&c(k)}),[k]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),f(e)}),[d,f,o]),tabValues:o}}var f=t(92303);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(74848);function w(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,o.a_)(),u=e=>{const n=e.currentTarget,t=c.indexOf(n),a=i[t].value;a!==r&&(l(n),s(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:d,onClick:u,...o,className:(0,a.A)("tabs__item",k.tabItem,o?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function x(e){let{lazy:n,children:t,selectedValue:o}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function j(e){const n=m(e);return(0,b.jsxs)("div",{className:(0,a.A)("tabs-container",k.tabList),children:[(0,b.jsx)(w,{...n,...e}),(0,b.jsx)(x,{...n,...e})]})}function y(e){const n=(0,f.A)();return(0,b.jsx)(j,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var r=t(96540);const a={},o=r.createContext(a);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);