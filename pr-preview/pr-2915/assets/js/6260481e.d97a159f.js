"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[96339],{90385:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>i,toc:()=>u});var s=r(74848),a=r(28453);r(86025),r(11470),r(19365);const n={id:"building-testers-app",title:"Build the Testers App",sidebar_label:"Build the Testers App"},o=void 0,i={id:"testfairy/testers/building-testers-app",title:"Build the Testers App",description:"The TestFairy platform provides a unique service that allows customers to run the TestFairy Testers App on a private cloud. By doing so, you gain the ability to customize and brand the Testers App according to your requirements. This documentation will guide you through the process of building your personalized Testers App for both Android and iOS platforms.",source:"@site/docs/testfairy/testers/building-testers-app.md",sourceDirName:"testfairy/testers",slug:"/testfairy/testers/building-testers-app",permalink:"/sauce-docs/pr-preview/pr-2915/testfairy/testers/building-testers-app",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/testfairy/testers/building-testers-app.md",tags:[],version:"current",lastUpdatedBy:"Tian Feng",lastUpdatedAt:1724880664e3,frontMatter:{id:"building-testers-app",title:"Build the Testers App",sidebar_label:"Build the Testers App"},sidebar:"docs",previous:{title:"Managing Testers",permalink:"/sauce-docs/pr-preview/pr-2915/testfairy/testers/managing-testers"},next:{title:"Testing Android Apps",permalink:"/sauce-docs/pr-preview/pr-2915/testfairy/testers/testing-android-apps"}},l={},u=[{value:"Android Testers App",id:"android-testers-app",level:2},{value:"Source Code",id:"source-code",level:3},{value:"Code Changes",id:"code-changes",level:3},{value:"iOS Testers App",id:"ios-testers-app",level:2},{value:"Source Code",id:"source-code-1",level:3},{value:"Code Changes",id:"code-changes-1",level:3}];function c(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"The TestFairy platform provides a unique service that allows customers to run the TestFairy Testers App on a private cloud. By doing so, you gain the ability to customize and brand the Testers App according to your requirements. This documentation will guide you through the process of building your personalized Testers App for both Android and iOS platforms."}),"\n",(0,s.jsx)(t.h2,{id:"android-testers-app",children:"Android Testers App"}),"\n",(0,s.jsx)(t.h3,{id:"source-code",children:"Source Code"}),"\n",(0,s.jsxs)(t.p,{children:["To begin, you need to access the source code of the TestFairy Testers App for Android. This can be achieved by forking the project from the following ",(0,s.jsx)(t.a,{href:"https://github.com/testfairy/testers-app-android",children:"GitHub repository"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"code-changes",children:"Code Changes"}),"\n",(0,s.jsxs)(t.p,{children:["After forking the project, you must make change to ",(0,s.jsx)(t.a,{href:"https://github.com/testfairy/testers-app-android/blob/master/TestFairyApp/src/main/java/com/testfairy/app/MainActivity.java#L49",children:"Base_URL"})," to customize the Testers App for your private cloud:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:'private static final String BASE_URL = "https://<YOUR_SUBDOMAIN_HERE>.testfairy.com";\n'})}),"\n",(0,s.jsx)(t.h2,{id:"ios-testers-app",children:"iOS Testers App"}),"\n",(0,s.jsx)(t.h3,{id:"source-code-1",children:"Source Code"}),"\n",(0,s.jsxs)(t.p,{children:["To get started with building the iOS version of the Testers App, you should fork the project from the following ",(0,s.jsx)(t.a,{href:"https://github.com/testfairy/testers-app-ios",children:"GitHub repository"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"code-changes-1",children:"Code Changes"}),"\n",(0,s.jsxs)(t.p,{children:["Once you have forked the iOS project, make the following changes to ",(0,s.jsx)(t.a,{href:"https://github.com/testfairy/testers-app-ios/blob/master/TestFairy/ViewController.swift#L9",children:"ViewController.swift"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:'let TESTFAIRY_URL = "https://<YOUR_SUBDOMAIN_HERE>.testfairy.com"\n'})})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>o});r(96540);var s=r(34164);const a={tabItem:"tabItem_Ymn6"};var n=r(74848);function o(e){let{children:t,hidden:r,className:o}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,s.A)(a.tabItem,o),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>x});var s=r(96540),a=r(34164),n=r(23104),o=r(56347),i=r(205),l=r(57485),u=r(31682),c=r(70679);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:r}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:s,default:a}}=e;return{value:t,label:r,attributes:s,default:a}}))}(r);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function h(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const a=(0,o.W6)(),n=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(n),(0,s.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(a.location.search);t.set(n,e),a.replace({...a.location,search:t.toString()})}),[n,a])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,n=p(e),[o,l]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:n}))),[u,d]=f({queryString:r,groupId:a}),[b,m]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,n]=(0,c.Dv)(r);return[a,(0,s.useCallback)((e=>{r&&n.set(e)}),[r,n])]}({groupId:a}),g=(()=>{const e=u??b;return h({value:e,tabValues:n})?e:null})();(0,i.A)((()=>{g&&l(g)}),[g]);return{selectedValue:o,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),m(e)}),[d,m,n]),tabValues:n}}var m=r(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(74848);function y(e){let{className:t,block:r,selectedValue:s,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,n.a_)(),c=e=>{const t=e.currentTarget,r=l.indexOf(t),a=i[r].value;a!==s&&(u(t),o(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},t),children:i.map((e=>{let{value:t,label:r,attributes:n}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>l.push(e),onKeyDown:d,onClick:c,...n,className:(0,a.A)("tabs__item",g.tabItem,n?.className,{"tabs__item--active":s===t}),children:r??t},t)}))})}function T(e){let{lazy:t,children:r,selectedValue:n}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,s.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function A(e){const t=b(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,v.jsx)(y,{...t,...e}),(0,v.jsx)(T,{...t,...e})]})}function x(e){const t=(0,m.A)();return(0,v.jsx)(A,{...e,children:d(e.children)},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>i});var s=r(96540);const a={},n=s.createContext(a);function o(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);