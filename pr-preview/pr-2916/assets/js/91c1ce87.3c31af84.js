"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[51702],{94521:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var t=r(74848),i=r(28453);r(11470),r(19365),r(86025);const a={id:"invariants",title:"Invariants",sidebar_label:"Invariants",description:"adasd"},s=void 0,l={id:"error-reporting/advanced/invariants",title:"Invariants",description:"adasd",source:"@site/docs/error-reporting/advanced/invariants.md",sourceDirName:"error-reporting/advanced",slug:"/error-reporting/advanced/invariants",permalink:"/sauce-docs/pr-preview/pr-2916/error-reporting/advanced/invariants",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/advanced/invariants.md",tags:[],version:"current",lastUpdatedBy:"kristofmuhi",lastUpdatedAt:172492915e4,frontMatter:{id:"invariants",title:"Invariants",sidebar_label:"Invariants",description:"adasd"},sidebar:"backtrace",previous:{title:"Post migration",permalink:"/sauce-docs/pr-preview/pr-2916/error-reporting/advanced/post-migration"},next:{title:"BCD",permalink:"/sauce-docs/pr-preview/pr-2916/error-reporting/advanced/bcd"}},o={},c=[{value:"Schema",id:"schema",level:2},{value:"Version Invariants",id:"version-invariants",level:3},{value:"<code>version_gt</code>",id:"version_gt",level:4},{value:"<code>version_ge</code>",id:"version_ge",level:4},{value:"Timestamp Invariants",id:"timestamp-invariants",level:3},{value:"<code>timestamp_gt</code>",id:"timestamp_gt",level:4},{value:"Regular Expression Invariants",id:"regular-expression-invariants",level:3},{value:"<code>regular_expression</code>",id:"regular_expression",level:4},{value:"Logic Invariants",id:"logic-invariants",level:3},{value:"<code>and</code>",id:"and",level:4},{value:"<code>or</code>",id:"or",level:4},{value:"Attributes",id:"attributes",level:2},{value:"More Information",id:"more-information",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Invariants are rules used to determine whether the fingerprint should be reopened or unmuted after receiving an error. Multiple invariant rules can be assigned to a single fingerprint."}),"\n",(0,t.jsxs)(n.p,{children:["These rules are used in the context of ",(0,t.jsx)(n.code,{children:"resolving until..."})," and ",(0,t.jsx)(n.code,{children:"muting until..."}),", which means the fingerprint will be resolved/muted until the following rules match."]}),"\n",(0,t.jsx)(n.h2,{id:"schema",children:"Schema"}),"\n",(0,t.jsx)(n.p,{children:"Invariants are stored as an array of JSON objects. Each entry in the array is treated as an OR alternative, meaning that any invariant in the array may match, and the fingerprint will be reopened."}),"\n",(0,t.jsx)(n.h3,{id:"version-invariants",children:"Version Invariants"}),"\n",(0,t.jsx)(n.p,{children:"Version invariants use a semantic version attribute and check if the attribute matches a rule."}),"\n",(0,t.jsx)(n.h4,{id:"version_gt",children:(0,t.jsx)(n.code,{children:"version_gt"})}),"\n",(0,t.jsxs)(n.p,{children:["Checks if the ",(0,t.jsx)(n.code,{children:"field"})," version is greater than ",(0,t.jsx)(n.code,{children:"version"}),". For example, the ",(0,t.jsx)(n.code,{children:"application.version"})," attribute value has to be greater than ",(0,t.jsx)(n.code,{children:"1.0.2"})," for this invariant to match:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "type": "version_gt",\n    "field": "application.version",\n    "version": "1.0.2"\n  }\n]\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Resolve until seen again in application.version greater than 1.0.2"})," in console will set invariants to this example."]}),"\n",(0,t.jsx)(n.h4,{id:"version_ge",children:(0,t.jsx)(n.code,{children:"version_ge"})}),"\n",(0,t.jsxs)(n.p,{children:["Checks if the ",(0,t.jsx)(n.code,{children:"field"})," version is greater or equal to ",(0,t.jsx)(n.code,{children:"version"}),". For example, the ",(0,t.jsx)(n.code,{children:"application.version"})," attribute value has to be greater or equal to ",(0,t.jsx)(n.code,{children:"1.0.2"})," for this invariant to match:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "type": "version_ge",\n    "field": "application.version",\n    "version": "1.0.2"\n  }\n]\n'})}),"\n",(0,t.jsx)(n.h3,{id:"timestamp-invariants",children:"Timestamp Invariants"}),"\n",(0,t.jsxs)(n.p,{children:["Timestamp invariants check the ",(0,t.jsx)(n.code,{children:"timestamp"})," attribute of the error. Unix epoch time is used here, which represents the number of seconds elapsed since January 1st, 1970, 12:00:00 AM GMT."]}),"\n",(0,t.jsx)(n.h4,{id:"timestamp_gt",children:(0,t.jsx)(n.code,{children:"timestamp_gt"})}),"\n",(0,t.jsxs)(n.p,{children:["Checks if the ",(0,t.jsx)(n.code,{children:"timestamp"})," attribute of the error is greater than the ",(0,t.jsx)(n.code,{children:"timestamp"})," field. For example, the ",(0,t.jsx)(n.code,{children:"timestamp"})," attribute has to be greater than January 1st, 2024, 12:00:00 AM GMT:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "type": "timestamp_gt",\n    "timestamp": 1704067200\n  }\n]\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Resolve until seen again"})," in console will set the timestamp to ",(0,t.jsx)(n.code,{children:"1"}),","]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Resolve until seen again after 30 minutes"})," in console will set the timestamp to ",(0,t.jsx)(n.code,{children:"current time + 1600"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"regular-expression-invariants",children:"Regular Expression Invariants"}),"\n",(0,t.jsx)(n.p,{children:"Regular expression invariants use PCRE to match regular expressions on attributes."}),"\n",(0,t.jsx)(n.h4,{id:"regular_expression",children:(0,t.jsx)(n.code,{children:"regular_expression"})}),"\n",(0,t.jsxs)(n.p,{children:["Checks if the ",(0,t.jsx)(n.code,{children:"field"})," attribute matches the ",(0,t.jsx)(n.code,{children:"pattern"})," regular expression. For example, the ",(0,t.jsx)(n.code,{children:"uname.sysname"})," attribute has to match ",(0,t.jsx)(n.code,{children:"^linux$"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "type": "regular_expression",\n    "field": "uname.sysname",\n    "pattern": "^linux$"\n  }\n]\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Ensure to escape regex tokens containing a backslash with another backslash. For example, ",(0,t.jsx)(n.code,{children:"\\n"})," should be written as ",(0,t.jsx)(n.code,{children:"\\\\n"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"logic-invariants",children:"Logic Invariants"}),"\n",(0,t.jsx)(n.p,{children:"Logic invariants join invariants to match one or all."}),"\n",(0,t.jsx)(n.h4,{id:"and",children:(0,t.jsx)(n.code,{children:"and"})}),"\n",(0,t.jsxs)(n.p,{children:["Matches all invariants in ",(0,t.jsx)(n.code,{children:"children"}),". For example, both ",(0,t.jsx)(n.code,{children:"timestamp_gt"})," and ",(0,t.jsx)(n.code,{children:"version_gt"})," must match:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "type": "and",\n    "children": [\n      {\n        "type": "timestamp_gt",\n        "timestamp": 1704067200\n      },\n      {\n        "type": "version_gt",\n        "field": "application.version",\n        "version": "1.0.2"\n      }\n    ]\n  }\n]\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Nested ",(0,t.jsx)(n.code,{children:"and"})," are not supported."]})}),"\n",(0,t.jsx)(n.h4,{id:"or",children:(0,t.jsx)(n.code,{children:"or"})}),"\n",(0,t.jsxs)(n.p,{children:["To match at least one invariant, put them in the root array. For example, ",(0,t.jsx)(n.code,{children:"timestamp_gt"})," or ",(0,t.jsx)(n.code,{children:"version_gt"})," must match:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "type": "timestamp_gt",\n    "timestamp": 1704067200\n  },\n  {\n    "type": "version_gt",\n    "field": "application.version",\n    "version": "1.0.2"\n  }\n]\n'})}),"\n",(0,t.jsx)(n.h2,{id:"attributes",children:"Attributes"}),"\n",(0,t.jsxs)(n.p,{children:["There are several attributes in the ",(0,t.jsx)(n.code,{children:"issues"})," table that are used with invariants."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"invariant_reopen_count"}),": how many times the fingerprint was opened due to matching invariant rules. This will increment by 1 every time the fingerprint opens due to matching invariant rules."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"invariant_reopen_last_time"}),": the time on which the fingerprint was last opened due to matching invariant rules."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"invariant_last_violated"}),": which invariant was matched when the fingerprint was last opened."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"invariants"}),": all invariants currently assigned to this fingerprint."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"more-information",children:"More Information"}),"\n",(0,t.jsx)(n.p,{children:"For a more detailed description of the invariant rules used in mute/resolve until behavior, check the following pages:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/error-reporting/workflow-integrations/issue-tracking/jira/#resolved-until-behavior",children:"Resolved Until Behavior"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/error-reporting/web-console/triage/#reopen-criteria---mute-or-resolve-until",children:"Reopen Criteria - Mute or Resolve Until"}),"."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>s});r(96540);var t=r(34164);const i={tabItem:"tabItem_Ymn6"};var a=r(74848);function s(e){let{children:n,hidden:r,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.A)(i.tabItem,s),hidden:r,children:n})}},11470:(e,n,r)=>{r.d(n,{A:()=>w});var t=r(96540),i=r(34164),a=r(23104),s=r(56347),l=r(205),o=r(57485),c=r(31682),d=r(70679);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:i}}=e;return{value:n,label:r,attributes:t,default:i}}))}(r);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function v(e){let{queryString:n=!1,groupId:r}=e;const i=(0,s.W6)(),a=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,o.aZ)(a),(0,t.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(i.location.search);n.set(a,e),i.replace({...i.location,search:n.toString()})}),[a,i])]}function m(e){const{defaultValue:n,queryString:r=!1,groupId:i}=e,a=h(e),[s,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:a}))),[c,u]=v({queryString:r,groupId:i}),[m,x]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,a]=(0,d.Dv)(r);return[i,(0,t.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:i}),g=(()=>{const e=c??m;return p({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{g&&o(g)}),[g]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),x(e)}),[u,x,a]),tabValues:a}}var x=r(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=r(74848);function f(e){let{className:n,block:r,selectedValue:t,selectValue:s,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const n=e.currentTarget,r=o.indexOf(n),i=l[r].value;i!==t&&(c(n),s(i))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;n=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;n=o[r]??o[o.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":r},n),children:l.map((e=>{let{value:n,label:r,attributes:a}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>o.push(e),onKeyDown:u,onClick:d,...a,className:(0,i.A)("tabs__item",g.tabItem,a?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function b(e){let{lazy:n,children:r,selectedValue:a}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=m(e);return(0,j.jsxs)("div",{className:(0,i.A)("tabs-container",g.tabList),children:[(0,j.jsx)(f,{...n,...e}),(0,j.jsx)(b,{...n,...e})]})}function w(e){const n=(0,x.A)();return(0,j.jsx)(y,{...e,children:u(e.children)},String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>l});var t=r(96540);const i={},a=t.createContext(i);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);