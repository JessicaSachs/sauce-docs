"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[9501],{79708:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var t=r(74848),a=r(28453),i=r(11470),s=r(19365);r(86025);const o={id:"setup",title:"Setting Up Backtrace for Android",sidebar_label:"Setup",description:"Add Backtrace to your Android project."},l=void 0,c={id:"error-reporting/platform-integrations/android/setup",title:"Setting Up Backtrace for Android",description:"Add Backtrace to your Android project.",source:"@site/docs/error-reporting/platform-integrations/android/setup.md",sourceDirName:"error-reporting/platform-integrations/android",slug:"/error-reporting/platform-integrations/android/setup",permalink:"/sauce-docs/pr-preview/pr-2914/error-reporting/platform-integrations/android/setup",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/platform-integrations/android/setup.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:172488024e4,frontMatter:{id:"setup",title:"Setting Up Backtrace for Android",sidebar_label:"Setup",description:"Add Backtrace to your Android project."},sidebar:"backtrace",previous:{title:"Overview",permalink:"/sauce-docs/pr-preview/pr-2914/error-reporting/platform-integrations/overview"},next:{title:"Configuration",permalink:"/sauce-docs/pr-preview/pr-2914/error-reporting/platform-integrations/android/configuration"}},d={},u=[{value:"Features",id:"features",level:2},{value:"Supported SDKs",id:"supported-sdks",level:2},{value:"Supported Platforms",id:"supported-platforms",level:2},{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Install the SDK",id:"install-the-sdk",level:2},{value:"Configure Permissions",id:"configure-permissions",level:2},{value:"Initialize the Backtrace Client",id:"initialize-the-backtrace-client",level:2},{value:"Verify the Setup",id:"verify-the-setup",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Add Backtrace to your Android project to automatically detect and report crashes and exceptions (handled and unhandled) that occur in your apps written in Java or Kotlin."}),"\n",(0,t.jsx)(n.p,{children:"After you've completed the steps on this page, the Backtrace client will be installed and setup with the default configuration settings."}),"\n","\n",(0,t.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Light-weight Java client library that quickly submits exceptions and crashes to your Backtrace dashboard. Can include callstack, system metadata, custom metadata, and file attachments if needed."}),"\n",(0,t.jsx)(n.li,{children:"Supports a wide range of Android SDKs."}),"\n",(0,t.jsx)(n.li,{children:"Supports offline database for error report storage and re-submission in case of network outage."}),"\n",(0,t.jsx)(n.li,{children:"Fully customizable and extendable event handlers and base classes for custom implementations."}),"\n",(0,t.jsx)(n.li,{children:"Supports detection of Application Not Responding errors (ANRs)."}),"\n",(0,t.jsx)(n.li,{children:"Supports monitoring the blocking of manually created threads by providing watchdog."}),"\n",(0,t.jsx)(n.li,{children:"Supports native (JNI/NDK) exceptions and crashes."}),"\n",(0,t.jsx)(n.li,{children:"Supports ProGuard obfuscated crashes."}),"\n",(0,t.jsx)(n.li,{children:"Supports breadcrumbs."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"supported-sdks",children:"Supported SDKs"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Minimum SDK version 16 (Android 4.1.x or higher)"}),"\n",(0,t.jsx)(n.li,{children:"Target SDK version 30 (Android 11.0)"}),"\n",(0,t.jsx)(n.li,{children:"Minimum NDK version 16b"}),"\n",(0,t.jsx)(n.li,{children:"Maximum NDK version 22"}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"The ability to capture the battery status when a device is in power saving mode is available from API version 21."})}),"\n",(0,t.jsx)(n.h2,{id:"supported-platforms",children:"Supported Platforms"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"arm32/arm64"}),"\n",(0,t.jsx)(n.li,{children:"x86_64"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["A Backtrace account (",(0,t.jsx)(n.a,{href:"https://backtrace.io/login",children:"log in"}),"\xa0or sign up for a\xa0",(0,t.jsx)(n.a,{href:"https://backtrace.io/sign-up",children:"free trial license"}),")."]}),"\n",(0,t.jsxs)(n.li,{children:["Your subdomain name (used to connect to your Backtrace instance). For example, ",(0,t.jsx)(n.code,{children:"https://example-subdomain.sp.backtrace.io"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["A Backtrace project and a ",(0,t.jsx)(n.a,{href:"/error-reporting/project-setup/submission-url",children:"submission token"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"install-the-sdk",children:"Install the SDK"}),"\n",(0,t.jsxs)(n.p,{children:["Use Gradle or Maven to install the ",(0,t.jsx)(n.a,{href:"https://github.com/backtrace-labs/backtrace-android/releases",children:"latest version"})," of the reporting library."]}),"\n",(0,t.jsxs)(i.A,{groupId:"languages",children:[(0,t.jsx)(s.A,{value:"gradle",label:"Gradle",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"// provide the latest version of the Backtrace reporting library.\n\ndependencies {\n    implementation 'com.github.backtrace-labs.backtrace-android:backtrace-library:<add-latest-version>'\n  }\n"})})}),(0,t.jsx)(s.A,{value:"maven",label:"Maven",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"// provide the latest version of the Backtrace reporting library.\n\n<dependency>\n  <groupId>com.github.backtrace-labs.backtrace-android</groupId>\n  <artifactId>backtrace-library</artifactId>\n  <version><add-latest-version></version>\n  <type>aar</type>\n</dependency>\n"})})})]}),"\n",(0,t.jsx)(n.h2,{id:"configure-permissions",children:"Configure Permissions"}),"\n",(0,t.jsxs)(n.p,{children:["In your app's ",(0,t.jsx)(n.code,{children:"AndroidManifest.xml"})," file, add the following permissions:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"To send errors to the server instance:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:'<uses-permission android:name="android.permission.INTERNET" />\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"To send file attachments from external storage to the server instance:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:'<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"initialize-the-backtrace-client",children:"Initialize the Backtrace Client"}),"\n",(0,t.jsxs)(n.p,{children:["To initialize ",(0,t.jsx)(n.code,{children:"BacktraceClient"}),", create a ",(0,t.jsx)(n.code,{children:"BacktraceCredentials"})," object with the name of your subdomain and submission token, and supply it as a parameter in the ",(0,t.jsx)(n.code,{children:"BacktraceCredentials"})," constructor:"]}),"\n",(0,t.jsxs)(i.A,{groupId:"languages",children:[(0,t.jsx)(s.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'// provide the name of the subdomain for your Backtrace instance and a submission token\nBacktraceCredentials credentials = new BacktraceCredentials("https://submit.backtrace.io/{subdomain-name}/{submission-token}/json");\n'})})}),(0,t.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'// provide the name of the subdomain for your Backtrace instance and a submission token\nval backtraceCredentials = BacktraceCredentials("https://submit.backtrace.io/{subdomain-name}/{submission-token}/json")\n'})})})]}),"\n",(0,t.jsx)(n.h2,{id:"verify-the-setup",children:"Verify the Setup"}),"\n",(0,t.jsx)(n.p,{children:"At this point, you've installed and setup the Backtrace client to automatically capture exceptions and crashes in your Android app."}),"\n",(0,t.jsx)(n.p,{children:"To test the integration, throw an exception to send a report to your Backtrace instance."}),"\n",(0,t.jsxs)(i.A,{groupId:"languages",children:[(0,t.jsx)(s.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"try {\n   // throw exception here\n} catch (Exception exception) {\n   backtraceClient.send(new BacktraceReport(e));\n}\n"})})}),(0,t.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"try {\n   // throw exception here\n} catch (e: Exception) {\n   backtraceClient.send(BacktraceReport(e))\n}\n"})})})]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>s});r(96540);var t=r(34164);const a={tabItem:"tabItem_Ymn6"};var i=r(74848);function s(e){let{children:n,hidden:r,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,s),hidden:r,children:n})}},11470:(e,n,r)=>{r.d(n,{A:()=>y});var t=r(96540),a=r(34164),i=r(23104),s=r(56347),o=r(205),l=r(57485),c=r(31682),d=r(70679);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:a}}=e;return{value:n,label:r,attributes:t,default:a}}))}(r);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function h(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const a=(0,s.W6)(),i=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,l.aZ)(i),(0,t.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(a.location.search);n.set(i,e),a.replace({...a.location,search:n.toString()})}),[i,a])]}function b(e){const{defaultValue:n,queryString:r=!1,groupId:a}=e,i=p(e),[s,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:i}))),[c,u]=m({queryString:r,groupId:a}),[b,f]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,i]=(0,d.Dv)(r);return[a,(0,t.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:a}),x=(()=>{const e=c??b;return h({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{x&&l(x)}),[x]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,i]),tabValues:i}}var f=r(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(74848);function g(e){let{className:n,block:r,selectedValue:t,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const n=e.currentTarget,r=l.indexOf(n),a=o[r].value;a!==t&&(c(n),s(a))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;n=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;n=l[r]??l[l.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},n),children:o.map((e=>{let{value:n,label:r,attributes:i}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...i,className:(0,a.A)("tabs__item",x.tabItem,i?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function j(e){let{lazy:n,children:r,selectedValue:i}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===i));return e?(0,t.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function k(e){const n=b(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",x.tabList),children:[(0,v.jsx)(g,{...n,...e}),(0,v.jsx)(j,{...n,...e})]})}function y(e){const n=(0,f.A)();return(0,v.jsx)(k,{...e,children:u(e.children)},String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>o});var t=r(96540);const a={},i=t.createContext(a);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);