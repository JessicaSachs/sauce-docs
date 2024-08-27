"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[90356],{84985:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=t(74848),s=t(28453),a=(t(11470),t(19365),t(86025));const i={id:"getting-started",title:"Web Console Getting Started",sidebar_label:"Getting Started",description:"Getting started with the web console to view and analyze error and crash data."},o=void 0,l={id:"error-reporting/web-console/getting-started",title:"Web Console Getting Started",description:"Getting started with the web console to view and analyze error and crash data.",source:"@site/docs/error-reporting/web-console/getting-started.md",sourceDirName:"error-reporting/web-console",slug:"/error-reporting/web-console/getting-started",permalink:"/sauce-docs/pr-preview/pr-2907/error-reporting/web-console/getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/web-console/getting-started.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:172477197e4,frontMatter:{id:"getting-started",title:"Web Console Getting Started",sidebar_label:"Getting Started",description:"Getting started with the web console to view and analyze error and crash data."},sidebar:"backtrace",previous:{title:"File Attachments",permalink:"/sauce-docs/pr-preview/pr-2907/error-reporting/platform-integrations/file-attachments"},next:{title:"Overview",permalink:"/sauce-docs/pr-preview/pr-2907/error-reporting/web-console/overview"}},c={},d=[{value:"Filters",id:"filters",level:2},{value:"Time Frame",id:"time-frame",level:3},{value:"Filter Bar",id:"filter-bar",level:3},{value:"Filter Operators",id:"filter-operators",level:4},{value:"Query Builder",id:"query-builder",level:3},{value:"Aggregation",id:"aggregation",level:3},{value:"Views and Result Lists",id:"views-and-result-lists",level:2},{value:"Saved Views",id:"saved-views",level:2},{value:"Save a View",id:"save-a-view",level:3},{value:"Access Saved Views",id:"access-saved-views",level:3},{value:"Console Use Cases",id:"console-use-cases",level:2}];function u(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"The Backtrace web console includes 4 key navigational components to help you analyze your error and crash data:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Project selector - Use this to switch between various projects that are reporting crashes or errors."}),"\n",(0,n.jsx)(r.li,{children:"Filters - Define your working set. Specify time frames and additional criteria to indicate which errors and fingerprints to analyze."}),"\n",(0,n.jsx)(r.li,{children:"Saved views - Commonly used filters for quick access and sharing for the selected project. As an administrator, you can save a view as a default and bookmark it for a team's project. You can further customize and save your own views."}),"\n",(0,n.jsx)(r.li,{children:"Views and results list - The Triage, Explore, and Debug views allow you to prioritize, analyze, and debug your crashes."}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"filters",children:"Filters"}),"\n",(0,n.jsx)(r.h3,{id:"time-frame",children:"Time Frame"}),"\n",(0,n.jsx)(r.p,{children:"On the top left, you'll see the Time frame filter. This allows you to filter for issues that have occurred during a certain time period or to identify when an issue has first occurred."}),"\n",(0,n.jsx)("img",{src:(0,a.A)("img/error-reporting/console-views/time-frame-filters.png"),alt:"Use the Time Frame filter to view errors that occurred during a certain time period or when an error was first seen."}),"\n",(0,n.jsx)(r.h3,{id:"filter-bar",children:"Filter Bar"}),"\n",(0,n.jsx)(r.p,{children:"You can add filters identifying crashes from a certain version, a certain user, specific operating system, or more. Filters are available on any system or custom metadata that you provide with your crashes. You can take advantage of powerful filter operators that go beyond the normal equals or contains operators to include not-contains, regular-expression, inverse-regular-expression, at-least, or at-most, depending on the data type."}),"\n",(0,n.jsx)("img",{src:(0,a.A)("img/error-reporting/console-views/filter-bar.png"),alt:"Shows how to use the filter bar to search for attributes with operators."}),"\n",(0,n.jsx)(r.h4,{id:"filter-operators",children:"Filter Operators"}),"\n",(0,n.jsxs)(r.p,{children:["By default, all search operators are case sensitive. If you want to search using case insensitivity, enter a regular expression or inverse regular expression with ",(0,n.jsx)(r.code,{children:"/{your-search}/i"})," to invoke case insensitive search."]}),"\n",(0,n.jsxs)(r.p,{children:["For example, to search for banana, Banana, or BaNaNa, enter ",(0,n.jsx)(r.code,{children:"description regular-expression /banana/i"}),"."]}),"\n",(0,n.jsx)(r.h3,{id:"query-builder",children:"Query Builder"}),"\n",(0,n.jsx)(r.p,{children:"The Query Builder provides a graphical user interface that allows you to create complex queries. The available attributes are grouped by category, have a descriptive name, a description (if added), and also show available values. The last five used attributes are saved and displayed in the Suggested tab."}),"\n",(0,n.jsx)("img",{src:(0,a.A)("img/error-reporting/console-views/query-builder.png"),alt:"Shows the Query Builder."}),"\n",(0,n.jsx)(r.p,{children:"To use the Query builder:"}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsxs)(r.li,{children:["From the ",(0,n.jsx)(r.strong,{children:"Filter bar"}),", select ",(0,n.jsx)(r.strong,{children:"Open Query Builder"}),"."]}),"\n",(0,n.jsx)(r.li,{children:"In the Query Builder, select an attribute, an operator, and a value."}),"\n",(0,n.jsxs)(r.li,{children:["Select ",(0,n.jsx)(r.strong,{children:"Add"}),"."]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"aggregation",children:"Aggregation"}),"\n",(0,n.jsx)(r.p,{children:"Aggregation Filters allow you to apply an additional filter on the results based on an aggregation, such as a unique count, or a minimum or maximum from a series of values. Let's take a look at some example questions you can ask with this feature:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:'"Show me crashes that have impacted at least 10 unique servers"'}),"\n",(0,n.jsx)(r.li,{children:"\u201cShow me crashes that were likely introduced in version 2.1.0\u201d"}),"\n",(0,n.jsx)(r.li,{children:'"Show me crashes that have occurred in at least 2 release channels\u201d'}),"\n",(0,n.jsx)(r.li,{children:'"Show me crashes that have impacted at most 1 unique scene in the game, so we can hone in on specific scene impacting issues"'}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"views-and-result-lists",children:"Views and Result Lists"}),"\n",(0,n.jsx)(r.p,{children:"After defining your working set, choose a tool to view and manage the result list. The result list will vary depending on which tool you are in. The following shows the result list for the Triage view."}),"\n",(0,n.jsx)("img",{src:(0,a.A)("img/error-reporting/console-views/triage-results-list.webp"),alt:"Shows the Triage view.",width:"750"}),"\n",(0,n.jsx)(r.p,{children:"At the top of the result list, you'll see some informational text that tells you how many issues are being displayed and how many in total there are. This gives you a view of how many additional crashes or errors that are identified outside the filter window."}),"\n",(0,n.jsx)(r.p,{children:"Depending on which view you are in, you have additional ways to manipulate the result list and continue your exploration of error data:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["In the ",(0,n.jsx)(r.a,{href:"/error-reporting/web-console/triage",children:"Triage"})," view, you will see errors grouped by Fingerprint. You have various actions available to support resolving the Fingerprint, and you have the ability to open a Details view for the Fingerprint to offer more introspection into the aggregate information about the Fingerprint."]}),"\n",(0,n.jsxs)(r.li,{children:["In the ",(0,n.jsx)(r.a,{href:"/error-reporting/web-console/explore",children:"Explore"})," view, you will be able to choose which attributes to Group By, allowing for more robust exploration of your error data. You can group by UserID (See impact by user), Host or Device ID (See impact to each host), OS Version (Identify issues encountered after an OS patch), or any custom attributes for the application."]}),"\n",(0,n.jsxs)(r.li,{children:["In the ",(0,n.jsx)(r.a,{href:"/error-reporting/web-console/debug",children:"Debug"})," view, you will be able to navigate through all individual errors that are returned based on the filter conditions. This allows you to iterate through a group of similar errors to identify additional trends or commonalities."]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"saved-views",children:"Saved Views"}),"\n",(0,n.jsx)(r.p,{children:"Saved views allow you to quickly access the data that is most important to you, whether you need to monitor specific error types or track errors across multiple releases."}),"\n",(0,n.jsx)(r.p,{children:"By default, every project includes bookmarked views, which include fingerprints over the past week, errors by version, errors by device model, and errors by type."}),"\n",(0,n.jsx)("img",{src:(0,a.A)("img/error-reporting/console-views/bookmarked-views.png"),alt:"Shows the bookmarked views that you can quickly access from the View bar.",width:"750"}),"\n",(0,n.jsx)(r.h3,{id:"save-a-view",children:"Save a View"}),"\n",(0,n.jsx)(r.p,{children:"You can also save your custom queries for the Explore and Triage views and bookmark them for quick access. As an administrator, you can bookmark saved views and share them across teams to collaborate more effectively."}),"\n",(0,n.jsx)(r.p,{children:"For example, you can create a view to see crashes that occurred on the Android platform and group them by device model, then save it to share with your team."}),"\n",(0,n.jsx)(r.p,{children:"To save your current view:"}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsxs)(r.li,{children:["From the ",(0,n.jsx)(r.strong,{children:"Triage"})," or ",(0,n.jsx)(r.strong,{children:"Explore"})," view, select ",(0,n.jsx)(r.strong,{children:"Save view"}),"."]}),"\n",(0,n.jsxs)(r.li,{children:["In the ",(0,n.jsx)(r.strong,{children:"Save current view"})," pane, enter a descriptive name for the view."]}),"\n",(0,n.jsxs)(r.li,{children:["Select ",(0,n.jsx)(r.strong,{children:"Save"}),"."]}),"\n"]}),"\n",(0,n.jsx)("img",{src:(0,a.A)("img/error-reporting/console-views/save-current-view.png"),alt:"Shows the Save current view pane.",width:"300"}),"\n",(0,n.jsxs)(r.p,{children:["Your saved view will then appear under ",(0,n.jsx)(r.strong,{children:"My views"})," in the ",(0,n.jsx)(r.strong,{children:"Saved views"})," pane."]}),"\n",(0,n.jsx)(r.h3,{id:"access-saved-views",children:"Access Saved Views"}),"\n",(0,n.jsxs)(r.p,{children:["To access saved views, from the View bar in ",(0,n.jsx)(r.strong,{children:"Triage"})," or ",(0,n.jsx)(r.strong,{children:"Explore"})," view, select ",(0,n.jsx)(r.strong,{children:"Open saved views"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["From the ",(0,n.jsx)(r.strong,{children:"Saved views"})," pane, you can see the following:"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"My views:"})," Shows your saved views."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"All:"})," Shows saved views created by any team member."]}),"\n"]}),"\n",(0,n.jsx)("img",{src:(0,a.A)("img/error-reporting/console-views/saved-views.png"),alt:"Shows the list of saved views.",width:"300"}),"\n",(0,n.jsx)(r.h2,{id:"console-use-cases",children:"Console Use Cases"}),"\n",(0,n.jsx)(r.p,{children:"The Web Console provides an enhanced interface and interaction model for working with Backtrace. It was developed to support the needs of team members such as Engineers and Engineering Managers, QA and Support personnel, and Business or Product leaders, as they focus on detecting and resolving issues impacting their newly developed or released software."}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Engineering Managers - Triage the incoming errors (crashes and exceptions), and review the status of assigned errors. Explore, analyze and query the corpus of error data."}),"\n",(0,n.jsx)(r.li,{children:"Engineers - Debug and resolve errors assigned to them. Possibly self-assign errors not yet assigned."}),"\n",(0,n.jsx)(r.li,{children:"QA Personnel - Review the stability of a new release under development, identify regressions that occur and understand new tests required."}),"\n",(0,n.jsx)(r.li,{children:"Support Staff - Research a problem reported by a customer. Understand if errors have been fixed or what the workaround might be."}),"\n",(0,n.jsx)(r.li,{children:"Business and Product leaders - Understand the overall health of the system. Look for early warning indicators for positive or negative trends."}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>i});t(96540);var n=t(18215);const s={tabItem:"tabItem_Ymn6"};var a=t(74848);function i(e){let{children:r,hidden:t,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,i),hidden:t,children:r})}},11470:(e,r,t)=>{t.d(r,{A:()=>j});var n=t(96540),s=t(18215),a=t(23104),i=t(56347),o=t(205),l=t(57485),c=t(31682),d=t(89466);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??function(e){return u(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:s}}=e;return{value:r,label:t,attributes:n,default:s}}))}(t);return function(e){const r=(0,c.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function p(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function v(e){let{queryString:r=!1,groupId:t}=e;const s=(0,i.W6)(),a=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,l.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const r=new URLSearchParams(s.location.search);r.set(a,e),s.replace({...s.location,search:r.toString()})}),[a,s])]}function g(e){const{defaultValue:r,queryString:t=!1,groupId:s}=e,a=h(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:a}))),[c,u]=v({queryString:t,groupId:s}),[g,m]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[s,a]=(0,d.Dv)(t);return[s,(0,n.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:s}),w=(()=>{const e=c??g;return p({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{w&&l(w)}),[w]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),m(e)}),[u,m,a]),tabValues:a}}var m=t(92303);const w={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(74848);function b(e){let{className:r,block:t,selectedValue:n,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const r=e.currentTarget,t=l.indexOf(r),s=o[t].value;s!==n&&(c(r),i(s))},u=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;r=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;r=l[t]??l[l.length-1];break}}r?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},r),children:o.map((e=>{let{value:r,label:t,attributes:a}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>l.push(e),onKeyDown:u,onClick:d,...a,className:(0,s.A)("tabs__item",w.tabItem,a?.className,{"tabs__item--active":n===r}),children:t??r},r)}))})}function y(e){let{lazy:r,children:t,selectedValue:s}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=a.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:a.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==s})))})}function x(e){const r=g(e);return(0,f.jsxs)("div",{className:(0,s.A)("tabs-container",w.tabList),children:[(0,f.jsx)(b,{...e,...r}),(0,f.jsx)(y,{...e,...r})]})}function j(e){const r=(0,m.A)();return(0,f.jsx)(x,{...e,children:u(e.children)},String(r))}},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>o});var n=t(96540);const s={},a=n.createContext(s);function i(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);