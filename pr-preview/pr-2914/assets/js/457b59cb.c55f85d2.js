"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[13880],{59309:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(74848),r=a(28453),s=a(86025);a(11470),a(19365);const i={id:"vs-team",title:"Visual Studio Team",sidebar_label:"Visual Studio Team"},o=void 0,l={id:"testfairy/ci-tools/vs-team",title:"Visual Studio Team",description:"This guide provides instructions for Visual Studio Team Services (VSTS) users to upload their apps (.apk/.ipa) to TestFairy. By following these steps, you can easily integrate TestFairy into your existing build process and streamline the app deployment and testing workflow.",source:"@site/docs/testfairy/ci-tools/vs-team.md",sourceDirName:"testfairy/ci-tools",slug:"/testfairy/ci-tools/vs-team",permalink:"/sauce-docs/pr-preview/pr-2914/testfairy/ci-tools/vs-team",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/testfairy/ci-tools/vs-team.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:172488024e4,frontMatter:{id:"vs-team",title:"Visual Studio Team",sidebar_label:"Visual Studio Team"},sidebar:"docs",previous:{title:"TeamCity",permalink:"/sauce-docs/pr-preview/pr-2914/testfairy/ci-tools/team-city"},next:{title:"REST API",permalink:"/sauce-docs/pr-preview/pr-2914/testfairy/api-reference/rest-api"}},u={},c=[{value:"Adding UploadToTestFairy (or any other task name) to your existing build",id:"adding-uploadtotestfairy-or-any-other-task-name-to-your-existing-build",level:4}];function d(e){const t={admonition:"admonition",code:"code",em:"em",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["This guide provides instructions for Visual Studio Team Services (VSTS) users to upload their apps (",(0,n.jsx)(t.em,{children:".apk/"}),".ipa) to TestFairy. By following these steps, you can easily integrate TestFairy into your existing build process and streamline the app deployment and testing workflow."]}),"\n",(0,n.jsx)(t.h4,{id:"adding-uploadtotestfairy-or-any-other-task-name-to-your-existing-build",children:"Adding UploadToTestFairy (or any other task name) to your existing build"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Go to ",(0,n.jsx)(t.strong,{children:"Edit Build Definitions"}),"."]}),"\n",(0,n.jsx)("img",{src:(0,s.Ay)("/img/testfairy/ci-tools/EditBuildDefinitions.png"),alt:"edit build definitions"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Add ",(0,n.jsx)(t.strong,{children:"Command Line"})," tool task"]}),"\n",(0,n.jsx)("img",{src:(0,s.Ay)("/img/testfairy/ci-tools/addCommandLineTask.png"),alt:"add command line tool"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Configure the task and add the following line to arguments:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"https://upload.testfairy.com/api/upload -F api_key=abcdabcdgfdsgfds56 -F file=@sample.apk\n"})}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"Make sure you replace the api_key with yours"})}),"\n",(0,n.jsx)("img",{src:(0,s.Ay)("/img/testfairy/ci-tools/Configure.png"),alt:"configure task"}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},19365:(e,t,a)=>{a.d(t,{A:()=>i});a(96540);var n=a(34164);const r={tabItem:"tabItem_Ymn6"};var s=a(74848);function i(e){let{children:t,hidden:a,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,i),hidden:a,children:t})}},11470:(e,t,a)=>{a.d(t,{A:()=>k});var n=a(96540),r=a(34164),s=a(23104),i=a(56347),o=a(205),l=a(57485),u=a(31682),c=a(70679);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}(a);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const r=(0,i.W6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,s=p(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[u,d]=f({queryString:a,groupId:r}),[h,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,c.Dv)(a);return[r,(0,n.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:r}),y=(()=>{const e=u??h;return m({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{y&&l(y)}),[y]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=a(92303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=a(74848);function v(e){let{className:t,block:a,selectedValue:n,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const t=e.currentTarget,a=l.indexOf(t),r=o[a].value;r!==n&&(u(t),i(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;t=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;t=l[a]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},t),children:o.map((e=>{let{value:t,label:a,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:d,onClick:c,...s,className:(0,r.A)("tabs__item",y.tabItem,s?.className,{"tabs__item--active":n===t}),children:a??t},t)}))})}function x(e){let{lazy:t,children:a,selectedValue:s}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function T(e){const t=h(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",y.tabList),children:[(0,g.jsx)(v,{...t,...e}),(0,g.jsx)(x,{...t,...e})]})}function k(e){const t=(0,b.A)();return(0,g.jsx)(T,{...e,children:d(e.children)},String(t))}},28453:(e,t,a)=>{a.d(t,{R:()=>i,x:()=>o});var n=a(96540);const r={},s=n.createContext(r);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);