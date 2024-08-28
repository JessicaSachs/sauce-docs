"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[70929],{64516:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=a(74848),r=a(28453);a(86025),a(11470),a(19365);const s={id:"fastlane",title:"Fastlane",sidebar_label:"Fastlane"},l=void 0,i={id:"testfairy/ci-tools/fastlane",title:"Fastlane",description:"Upload a new build to TestFairy using Fastlane. You can find your API Key in the TestFairy Settings page.",source:"@site/docs/testfairy/ci-tools/fastlane.md",sourceDirName:"testfairy/ci-tools",slug:"/testfairy/ci-tools/fastlane",permalink:"/sauce-docs/pr-preview/pr-2915/testfairy/ci-tools/fastlane",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/testfairy/ci-tools/fastlane.md",tags:[],version:"current",lastUpdatedBy:"Tian Feng",lastUpdatedAt:1724880664e3,frontMatter:{id:"fastlane",title:"Fastlane",sidebar_label:"Fastlane"},sidebar:"docs",previous:{title:"Circle CI",permalink:"/sauce-docs/pr-preview/pr-2915/testfairy/ci-tools/circle-ci"},next:{title:"Gitlab",permalink:"/sauce-docs/pr-preview/pr-2915/testfairy/ci-tools/gitlab"}},o={},c=[{value:"Parameters",id:"parameters",level:3},{value:"Lane Variables",id:"lane-variables",level:3},{value:"Documentation",id:"documentation",level:3},{value:"CLI",id:"cli",level:3}];function d(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Upload a new build to TestFairy using Fastlane. You can find your API Key in the ",(0,n.jsx)(t.a,{href:"https://free.testfairy.com/settings/",children:"TestFairy Settings"})," page."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'testfairy(\n    api_key: "...",\n    ipa: "./ipa_file.ipa",\n    comment: "Build #{lane_context[SharedValues::BUILD_NUMBER]}",\n)\n'})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'testfairy(\n    api_key: "...",\n    apk: "../build/app/outputs/apk/qa/release/app-qa-release.apk",\n    comment: "Build #{lane_context[SharedValues::BUILD_NUMBER]}",\n)\n'})}),"\n",(0,n.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Key"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"api_key"}),(0,n.jsx)(t.td,{children:"API Key for TestFairy"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ipa"}),(0,n.jsx)(t.td,{children:"Path to your IPA file for iOS"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"apk"}),(0,n.jsx)(t.td,{children:"Path to your APK file for Android"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbols_file"}),(0,n.jsx)(t.td,{children:"Symbols mapping file"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"upload_url"}),(0,n.jsx)(t.td,{children:"Upload API URL for TestFairy"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://upload.testfairy.com",children:"https://upload.testfairy.com"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"testers_groups"}),(0,n.jsx)(t.td,{children:"Array of tester groups to be notified"}),(0,n.jsx)(t.td,{children:"[]"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"comment"}),(0,n.jsx)(t.td,{children:"Additional release notes for this upload. Will be added to sent emails"}),(0,n.jsx)(t.td,{children:"No comment"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"notify"}),(0,n.jsx)(t.td,{children:"Send email to testers"}),(0,n.jsx)(t.td,{children:"off"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"timeout"}),(0,n.jsx)(t.td,{children:"Request timeout in seconds"}),(0,n.jsx)(t.td,{})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"lane-variables",children:"Lane Variables"}),"\n",(0,n.jsxs)(t.p,{children:["Actions can communicate with each other using a shared hash lane_context, that can be accessed in other actions, plugins or your lanes: lane_context[SharedValues",":XYZ","]. The testfairy action generates the following Lane Variables:"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"SharedValue"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"SharedValues::TESTFAIRY_BUILD_URL"}),(0,n.jsx)(t.td,{children:"URL for the sessions of the newly uploaded build"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"SharedValues::TESTFAIRY_DOWNLOAD_URL"}),(0,n.jsx)(t.td,{children:"URL directly to the newly uploaded build"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"SharedValues::TESTFAIRY_LANDING_PAGE"}),(0,n.jsx)(t.td,{children:"URL of the build's landing page"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"documentation",children:"Documentation"}),"\n",(0,n.jsx)(t.p,{children:"To show the documentation in your terminal, run"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"fastlane action testfairy\n"})}),"\n",(0,n.jsx)(t.h3,{id:"cli",children:"CLI"}),"\n",(0,n.jsx)(t.p,{children:"It is recommended to add the above action into your Fastfile, however sometimes you might want to run one-offs. To do so, you can run the following command from your terminal"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"fastlane run testfairy\n"})}),"\n",(0,n.jsx)(t.p,{children:"To pass parameters, make use of the : symbol, for example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'fastlane run testfairy parameter1:"value1" parameter2:"value2"\n'})}),"\n",(0,n.jsx)(t.p,{children:'It\'s important to note that the CLI supports primitive types like integers, floats, booleans, and strings. Arrays can be passed as a comma delimited string (e.g. param:"1,2,3"). Hashes are not currently supported.'}),"\n",(0,n.jsx)(t.p,{children:"It is recommended to add all fastlane actions you use to your Fastfile."}),"\n",(0,n.jsxs)(t.p,{children:["You can review this action documentation and code on ",(0,n.jsx)(t.a,{href:"https://docs.fastlane.tools/actions/testfairy/",children:"docs.fastlane.tools"}),"."]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},19365:(e,t,a)=>{a.d(t,{A:()=>l});a(96540);var n=a(34164);const r={tabItem:"tabItem_Ymn6"};var s=a(74848);function l(e){let{children:t,hidden:a,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,l),hidden:a,children:t})}},11470:(e,t,a)=>{a.d(t,{A:()=>I});var n=a(96540),r=a(34164),s=a(23104),l=a(56347),i=a(205),o=a(57485),c=a(31682),d=a(70679);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}(a);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const r=(0,l.W6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function m(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,s=h(e),[l,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[c,u]=f({queryString:a,groupId:r}),[m,x]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,d.Dv)(a);return[r,(0,n.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:r}),b=(()=>{const e=c??m;return p({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{b&&o(b)}),[b]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),x(e)}),[u,x,s]),tabValues:s}}var x=a(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=a(74848);function y(e){let{className:t,block:a,selectedValue:n,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const t=e.currentTarget,a=o.indexOf(t),r=i[a].value;r!==n&&(c(t),l(r))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=o.indexOf(e.currentTarget)+1;t=o[a]??o[0];break}case"ArrowLeft":{const a=o.indexOf(e.currentTarget)-1;t=o[a]??o[o.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},t),children:i.map((e=>{let{value:t,label:a,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>o.push(e),onKeyDown:u,onClick:d,...s,className:(0,r.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":n===t}),children:a??t},t)}))})}function v(e){let{lazy:t,children:a,selectedValue:s}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function g(e){const t=m(e);return(0,j.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,j.jsx)(y,{...t,...e}),(0,j.jsx)(v,{...t,...e})]})}function I(e){const t=(0,x.A)();return(0,j.jsx)(g,{...e,children:u(e.children)},String(t))}},28453:(e,t,a)=>{a.d(t,{R:()=>l,x:()=>i});var n=a(96540);const r={},s=n.createContext(r);function l(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);