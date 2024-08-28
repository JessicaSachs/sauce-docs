"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[8535],{9193:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(74848),a=n(28453),s=n(86025);n(11470),n(19365);const i={id:"team-city",title:"TeamCity",sidebar_label:"TeamCity"},o=void 0,l={id:"testfairy/ci-tools/team-city",title:"TeamCity",description:"To automatically deply your Android or iOS Apps to TestFairy by using TeamCity, follow the steps below:",source:"@site/docs/testfairy/ci-tools/team-city.md",sourceDirName:"testfairy/ci-tools",slug:"/testfairy/ci-tools/team-city",permalink:"/sauce-docs/pr-preview/pr-2914/testfairy/ci-tools/team-city",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/testfairy/ci-tools/team-city.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:172488024e4,frontMatter:{id:"team-city",title:"TeamCity",sidebar_label:"TeamCity"},sidebar:"docs",previous:{title:"MS App Center",permalink:"/sauce-docs/pr-preview/pr-2914/testfairy/ci-tools/ms-app-ctr"},next:{title:"Visual Studio Team",permalink:"/sauce-docs/pr-preview/pr-2914/testfairy/ci-tools/vs-team"}},c={},u=[];function d(e){const t={a:"a",admonition:"admonition",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["To automatically deply your Android or iOS Apps to ",(0,r.jsx)(t.a,{href:"https://www.testfairy.com/",children:"TestFairy"})," by using TeamCity, follow the steps below:"]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["On the TestFairy dashboard, navigate to the ",(0,r.jsx)(t.strong,{children:"Preferences"}),"."]}),"\n",(0,r.jsx)("img",{src:(0,s.Ay)("/img/testfairy/ci-tools/testfairy-open-preferences.png"),alt:"open preferences"}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["On the ",(0,r.jsx)(t.strong,{children:"Preferences"}),", go to the API Key section and copy the API key."]}),"\n",(0,r.jsx)("img",{src:(0,s.Ay)("/img/testfairy/ci-tools/testfairy_upload_key.png"),alt:"upload the key"}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["In TeamCity, add an environment variable as a ",(0,r.jsx)(t.strong,{children:"New Parameter"})," into the ",(0,r.jsx)(t.strong,{children:"Build Configuration"}),"."]}),"\n",(0,r.jsx)("img",{src:(0,s.Ay)("/img/testfairy/ci-tools/teamcity-configuration-4.png"),alt:"build configuration"}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Name the parameter ",(0,r.jsx)(t.code,{children:"env.TESTFAIRY_API_KEY"})," and give it the value you copied from the TestFairy preferences page, and Save."]}),"\n",(0,r.jsx)("img",{src:(0,s.Ay)("/img/testfairy/ci-tools/teamcity-configuration-5.png"),alt:" add environment variable"}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Add a ",(0,r.jsx)(t.strong,{children:"Build Step"})," to the ",(0,r.jsx)(t.strong,{children:"Build Configuration"})," you wish to deploy from."]}),"\n",(0,r.jsx)("img",{src:(0,s.Ay)("/img/testfairy/ci-tools/teamcity-configuration-1.png"),alt:"add build step"}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Make sure to select a ",(0,r.jsx)(t.strong,{children:"Command Line"})," build step."]}),"\n",(0,r.jsx)("img",{src:(0,s.Ay)("/img/testfairy/ci-tools/teamcity-configuration-2.png"),alt:"command line build step"}),"\n",(0,r.jsxs)(t.p,{children:["Copy the following command into the ",(0,r.jsx)(t.strong,{children:"Custom script"})," text field:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'curl https://upload.testfairy.com/api/upload -F api_key=${env.TESTFAIRY_API_KEY} -F comment="TeamCity build" -F file=@android.apk\n'})}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["Replace the ",(0,r.jsx)(t.code,{children:"-F file=@android.apk"})," argument with a path to your own APK or IPA."]})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["For a complete list of available options, visit the ",(0,r.jsx)(t.a,{href:"/testfairy/api-reference/upload-api",children:"TestFairy Upload API documentation"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var r=n(34164);const a={tabItem:"tabItem_Ymn6"};var s=n(74848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,i),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(96540),a=n(34164),s=n(23104),i=n(56347),o=n(205),l=n(57485),c=n(31682),u=n(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=p(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[c,d]=h({queryString:n,groupId:a}),[f,y]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,u.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),b=(()=>{const e=c??f;return m({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),y(e)}),[d,y,s]),tabValues:s}}var y=n(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(74848);function v(e){let{className:t,block:n,selectedValue:r,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),a=o[n].value;a!==r&&(c(t),i(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...s,className:(0,a.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:s}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function j(e){const t=f(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,g.jsx)(v,{...t,...e}),(0,g.jsx)(x,{...t,...e})]})}function w(e){const t=(0,y.A)();return(0,g.jsx)(j,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var r=n(96540);const a={},s=r.createContext(a);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);