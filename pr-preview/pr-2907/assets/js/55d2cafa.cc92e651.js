"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[84768],{97589:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(74848),a=r(28453),s=(r(11470),r(19365),r(86025));const i={id:"attributes",title:"Indexing Attributes",sidebar_label:"Indexing Attributes",description:"Create an attribute for each metadata point added to your snapshots that you would like to query, group or filter on."},o=void 0,l={id:"error-reporting/project-setup/attributes",title:"Indexing Attributes",description:"Create an attribute for each metadata point added to your snapshots that you would like to query, group or filter on.",source:"@site/docs/error-reporting/project-setup/attributes.md",sourceDirName:"error-reporting/project-setup",slug:"/error-reporting/project-setup/attributes",permalink:"/sauce-docs/pr-preview/pr-2907/error-reporting/project-setup/attributes",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/project-setup/attributes.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:172477197e4,frontMatter:{id:"attributes",title:"Indexing Attributes",sidebar_label:"Indexing Attributes",description:"Create an attribute for each metadata point added to your snapshots that you would like to query, group or filter on."},sidebar:"backtrace",previous:{title:"Debug",permalink:"/sauce-docs/pr-preview/pr-2907/error-reporting/web-console/debug"},next:{title:"Deduplication",permalink:"/sauce-docs/pr-preview/pr-2907/error-reporting/project-setup/deduplication"}},u={},c=[{value:"Attributes",id:"attributes",level:2},{value:"Configuration",id:"configuration",level:2}];function d(e){const t={h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"attributes",children:"Attributes"}),"\n",(0,n.jsx)(t.p,{children:"Attributes define key metadata points to generate indices in the Backtrace database (coroner). These coroner indices are used for filtering, reporting, visualization and snapshot retrieval. They can be used to determine impact and investigate root cause by looking at interesting patterns. For example, you can request a distribution of process uptime or memory usage in real-time for any group of crashes."}),"\n",(0,n.jsx)(t.p,{children:'We recommend you create an attribute for each metadata point added to your snapshots that you would like to query, group or filter on. For example, if you are adding build_tag to each error submission belonging to this project, you should add "build_tag" as an attribute.'}),"\n",(0,n.jsxs)(t.p,{children:["To create an attribute for a given project, select ",(0,n.jsx)(t.strong,{children:"Project Settings"})," from the top right menu and then ",(0,n.jsx)(t.strong,{children:"Attributes"})," from the left menu. Click the ",(0,n.jsx)(t.strong,{children:"+"})," at the top of the Attributes section, and enter name, type, format, and description of the attribute (see section below). Alternatively, if your project is already attaching attributes, click the Recommended tab to see a list of all attributes that have recently been attached to error submission but do not yet have an index created."]}),"\n",(0,n.jsx)("img",{src:(0,s.A)("img/error-reporting/project-settings/add-attributes.png"),alt:""}),"\n",(0,n.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Name: Name of the attribute"}),"\n",(0,n.jsx)(t.li,{children:"Description: Description of the attribute"}),"\n",(0,n.jsxs)(t.li,{children:["Format: Format of data type, used for rendering the value. The following formats are supported:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Bytes - kilobytes, gigabytes, terabytes, bytes: The underlying column is storing integer values, and those values are expected to be treated as the specified unit. This is only valid for integer types."}),"\n",(0,n.jsx)(t.li,{children:"Miscellaneous - callstack: The underlying column is storing a serialized JSON object that represents a callstack as a sequence of strings, where every element is a function. This is only valid for dictionary."}),"\n",(0,n.jsx)(t.li,{children:"Miscellaneous - memory_address: The values represent memory addresses. They should be rendered as such. This is only valid for integer types."}),"\n",(0,n.jsx)(t.li,{children:"Miscellaneous - sha256: The column stores a sha256 value. Only valid for dictionary type."}),"\n",(0,n.jsx)(t.li,{children:"Miscellaneous - UUID: The column stores a unique identifier value."}),"\n",(0,n.jsx)(t.li,{children:"Networking - hostname: The underlying column name is a machine hostname. This is only valid for dictionary."}),"\n",(0,n.jsx)(t.li,{children:"Networking - ipv4: The column stores ipv4 addresses. This should be only be used with uint32 type. Javascript must render value as an IP address (see morgue for example)."}),"\n",(0,n.jsx)(t.li,{children:"Networking - ipv6: The column stores ipv6 addresses. This can be used with dictionary type only."}),"\n",(0,n.jsx)(t.li,{children:"Time - The column can store one of various time stamp formats, including GPS Timestamp, Javascript Timestamp, Unix Timestamp, Nanoseconds, Milliseconds, Seconds"}),"\n",(0,n.jsx)(t.li,{children:"Version Control: A semantic version or commit hash string."}),"\n",(0,n.jsx)(t.li,{children:"None: Just render the value as is."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["Type: Data type of attribute. The system will try to choose an appropriate Type based on the Format selected, and the user can modify this is warranted. The following types are supported:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"boolean: True / false values"}),"\n",(0,n.jsx)(t.li,{children:"string: This type should be used to store low cardinality strings (less than 2B unique values). Examples would include commits, versions, environment, etc. This encoding is efficient in that any string already present in the dictionary only requires 4 bytes of space to store in the column."}),"\n",(0,n.jsx)(t.li,{children:"uint64, uint32, uint16, uint8: These are unsigned integer types and can be used to store 64-bit, 32-bit, 16-bit and 8-bit integers respectively."}),"\n"]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>i});r(96540);var n=r(18215);const a={tabItem:"tabItem_Ymn6"};var s=r(74848);function i(e){let{children:t,hidden:r,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,i),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>T});var n=r(96540),a=r(18215),s=r(23104),i=r(56347),o=r(205),l=r(57485),u=r(31682),c=r(89466);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function h(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:r}=e;const a=(0,i.W6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,s=p(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[u,d]=b({queryString:r,groupId:a}),[m,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),g=(()=>{const e=u??m;return h({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=r(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=r(74848);function v(e){let{className:t,block:r,selectedValue:n,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const t=e.currentTarget,r=l.indexOf(t),a=o[r].value;a!==n&&(u(t),i(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},t),children:o.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function x(e){let{lazy:t,children:r,selectedValue:a}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function j(e){const t=m(e);return(0,y.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,y.jsx)(v,{...e,...t}),(0,y.jsx)(x,{...e,...t})]})}function T(e){const t=(0,f.A)();return(0,y.jsx)(j,{...e,children:d(e.children)},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>o});var n=r(96540);const a={},s=n.createContext(a);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);