"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[19707],{47200:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=r(74848),o=r(28453),i=(r(11470),r(19365),r(86025));const s={id:"scheduled-reports",title:"Scheduled Reports",sidebar_label:"Scheduled Reports",description:"Scheduled reports are e-mail digests containing the latest trends and anomalies of instability for your projects."},a=void 0,l={id:"error-reporting/project-setup/scheduled-reports",title:"Scheduled Reports",description:"Scheduled reports are e-mail digests containing the latest trends and anomalies of instability for your projects.",source:"@site/docs/error-reporting/project-setup/scheduled-reports.md",sourceDirName:"error-reporting/project-setup",slug:"/error-reporting/project-setup/scheduled-reports",permalink:"/sauce-docs/pr-preview/pr-2915/error-reporting/project-setup/scheduled-reports",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/project-setup/scheduled-reports.md",tags:[],version:"current",lastUpdatedBy:"Tian Feng",lastUpdatedAt:1724880664e3,frontMatter:{id:"scheduled-reports",title:"Scheduled Reports",sidebar_label:"Scheduled Reports",description:"Scheduled reports are e-mail digests containing the latest trends and anomalies of instability for your projects."},sidebar:"backtrace",previous:{title:"Connections",permalink:"/sauce-docs/pr-preview/pr-2915/error-reporting/project-setup/connections"},next:{title:"Importing Metrics and Generating Stability Scores",permalink:"/sauce-docs/pr-preview/pr-2915/error-reporting/project-setup/metrics-stability-scores"}},u={},c=[{value:"Creating and Modifying Reports",id:"creating-and-modifying-reports",level:2},{value:"Report Name",id:"report-name",level:3},{value:"Frequency",id:"frequency",level:3},{value:"Day of Week",id:"day-of-week",level:3},{value:"Time to Send",id:"time-to-send",level:3},{value:"Timezone",id:"timezone",level:3},{value:"Recipients",id:"recipients",level:3},{value:"Filter Report Content",id:"filter-report-content",level:3},{value:"Custom Content (Histograms)",id:"custom-content-histograms",level:3},{value:"Saving the Report",id:"saving-the-report",level:2},{value:"Sending Previews",id:"sending-previews",level:2},{value:"Common Questions",id:"common-questions",level:2},{value:"Can I have individual users opt-out of reports?",id:"can-i-have-individual-users-opt-out-of-reports",level:3},{value:"Can I save multiple reports?",id:"can-i-save-multiple-reports",level:4}];function d(e){const t={h2:"h2",h3:"h3",h4:"h4",p:"p",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Scheduled reports are e-mail digests containing the latest trends and anomalies of instability for your projects. An excerpt from a report is presented below."}),"\n",(0,n.jsx)("img",{src:(0,i.Ay)("img/error-reporting/project-settings/scheduled-report.png"),alt:""}),"\n",(0,n.jsx)(t.p,{children:"The report includes trends for the current reporting period, the previous reporting period, histograms of attribute values, classifiers as well as an activity of recent unique crashes."}),"\n",(0,n.jsx)(t.h2,{id:"creating-and-modifying-reports",children:"Creating and Modifying Reports"}),"\n",(0,n.jsx)(t.p,{children:"The Scheduled Reports settings are in the project settings page. From there, click on the Create a New Report button to begin setting up a scheduled report."}),"\n",(0,n.jsx)(t.p,{children:"The following criteria are used to modify the contents of a report."}),"\n",(0,n.jsx)(t.h3,{id:"report-name",children:"Report Name"}),"\n",(0,n.jsx)(t.p,{children:'This is the title of the report. Since you are able to create multiple reports, it is good practice to provide sufficient context in the title so the readers have visibility into the context of the report. For example, "Production Crashes for HelloWorld" is a good title.'}),"\n",(0,n.jsx)(t.h3,{id:"frequency",children:"Frequency"}),"\n",(0,n.jsx)(t.p,{children:"This is the frequency which a report should be generated and sent. The two options today are daily or weekly."}),"\n",(0,n.jsx)(t.h3,{id:"day-of-week",children:"Day of Week"}),"\n",(0,n.jsx)(t.p,{children:"If a Weekly frequency is selected, Day of Week specifies the day of the week the report should be generated and sent."}),"\n",(0,n.jsx)(t.h3,{id:"time-to-send",children:"Time to Send"}),"\n",(0,n.jsx)(t.p,{children:"This is the time of day that the report should be generated and scheduled for delivery."}),"\n",(0,n.jsx)(t.h3,{id:"timezone",children:"Timezone"}),"\n",(0,n.jsx)(t.p,{children:'This specifies the timezone of the report, dictating which timezone timestamps in the report should be rendered in as well as the time the report should be sent. For example, "9:00 AM EST" would specify a report should be sent around "9:00 AM EST" and that the timestamps of the report should be in "EST".'}),"\n",(0,n.jsx)(t.h3,{id:"recipients",children:"Recipients"}),"\n",(0,n.jsx)(t.p,{children:"This section specifies who should receive a copy of the report. If the Send to all team members checkbox is checked, then all users with accounts on the Backtrace instance will receive an e-mail with the report. The Other Recipients section allows you to include people that may not have accounts on the system as well as mailing lists."}),"\n",(0,n.jsx)(t.h3,{id:"filter-report-content",children:"Filter Report Content"}),"\n",(0,n.jsx)(t.p,{children:"This section allows you to include or exclude crashes for the purposes of reporting. You are able to filter on any attribute using query builder filters."}),"\n",(0,n.jsx)(t.h3,{id:"custom-content-histograms",children:"Custom Content (Histograms)"}),"\n",(0,n.jsx)(t.p,{children:"This section allows you to add histograms to the report. For example, you may want a histogram of affected versions, operating systems or more included in your report. Simply provide the attribute names which you would like histograms for."}),"\n",(0,n.jsx)(t.h2,{id:"saving-the-report",children:"Saving the Report"}),"\n",(0,n.jsx)(t.p,{children:"You are able to save the report with Save and Close. If you would like to save the report and see a preview, then use Save and send me a preview."}),"\n",(0,n.jsx)(t.h2,{id:"sending-previews",children:"Sending Previews"}),"\n",(0,n.jsx)(t.p,{children:"In the scheduled report list, you are able to click on the Preview button to have a report scheduled for immediate delivery to your e-mail for review."}),"\n",(0,n.jsx)(t.h2,{id:"common-questions",children:"Common Questions"}),"\n",(0,n.jsx)(t.h3,{id:"can-i-have-individual-users-opt-out-of-reports",children:"Can I have individual users opt-out of reports?"}),"\n",(0,n.jsx)(t.p,{children:"No, not at the moment. You are able to use a manual recipient list or may want to consider using a mailing list which will have finer-grained control over membership and distribution lists."}),"\n",(0,n.jsx)(t.h4,{id:"can-i-save-multiple-reports",children:"Can I save multiple reports?"}),"\n",(0,n.jsx)(t.p,{children:"Yes! This is a common use-case when coupled with filters. For example, you may want a report for every version of your application or facet by other attributes."})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>s});r(96540);var n=r(34164);const o={tabItem:"tabItem_Ymn6"};var i=r(74848);function s(e){let{children:t,hidden:r,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(o.tabItem,s),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>j});var n=r(96540),o=r(34164),i=r(23104),s=r(56347),a=r(205),l=r(57485),u=r(31682),c=r(70679);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:o}}=e;return{value:t,label:r,attributes:n,default:o}}))}(r);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function h(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const o=(0,s.W6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(o.location.search);t.set(i,e),o.replace({...o.location,search:t.toString()})}),[i,o])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:o}=e,i=p(e),[s,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[u,d]=m({queryString:r,groupId:o}),[f,v]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,i]=(0,c.Dv)(r);return[o,(0,n.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:o}),b=(()=>{const e=u??f;return h({value:e,tabValues:i})?e:null})();(0,a.A)((()=>{b&&l(b)}),[b]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),v(e)}),[d,v,i]),tabValues:i}}var v=r(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(74848);function y(e){let{className:t,block:r,selectedValue:n,selectValue:s,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.a_)(),c=e=>{const t=e.currentTarget,r=l.indexOf(t),o=a[r].value;o!==n&&(u(t),s(o))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":r},t),children:a.map((e=>{let{value:t,label:r,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:d,onClick:c,...i,className:(0,o.A)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function w(e){let{lazy:t,children:r,selectedValue:i}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===i));return e?(0,n.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function x(e){const t=f(e);return(0,g.jsxs)("div",{className:(0,o.A)("tabs-container",b.tabList),children:[(0,g.jsx)(y,{...t,...e}),(0,g.jsx)(w,{...t,...e})]})}function j(e){const t=(0,v.A)();return(0,g.jsx)(x,{...e,children:d(e.children)},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>a});var n=r(96540);const o={},i=n.createContext(o);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);