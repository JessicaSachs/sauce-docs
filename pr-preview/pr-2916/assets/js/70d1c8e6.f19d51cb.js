"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[55147],{91310:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=t(74848),n=t(28453);t(11470),t(19365),t(86025);const o={id:"plcrash-reporter",title:"PLCrashReporter",sidebar_label:"PLCrashReporter",description:"Integrate and send PLCrashReporter to Backtrace."},s=void 0,i={id:"error-reporting/platform-integrations/plcrash-reporter",title:"PLCrashReporter",description:"Integrate and send PLCrashReporter to Backtrace.",source:"@site/docs/error-reporting/platform-integrations/plcrash-reporter.md",sourceDirName:"error-reporting/platform-integrations",slug:"/error-reporting/platform-integrations/plcrash-reporter",permalink:"/sauce-docs/pr-preview/pr-2916/error-reporting/platform-integrations/plcrash-reporter",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/platform-integrations/plcrash-reporter.md",tags:[],version:"current",lastUpdatedBy:"kristofmuhi",lastUpdatedAt:172492915e4,frontMatter:{id:"plcrash-reporter",title:"PLCrashReporter",sidebar_label:"PLCrashReporter",description:"Integrate and send PLCrashReporter to Backtrace."},sidebar:"backtrace",previous:{title:"Configuration",permalink:"/sauce-docs/pr-preview/pr-2916/error-reporting/platform-integrations/ios/configuration"},next:{title:"Setup",permalink:"/sauce-docs/pr-preview/pr-2916/error-reporting/platform-integrations/unity/setup"}},l={},c=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Integration",id:"integration",level:2},{value:"Managing PLCrashReports",id:"managing-plcrashreports",level:2},{value:"Upload Methods",id:"upload-methods",level:2},{value:"System Level Attributes",id:"system-level-attributes",level:2},{value:"Adding Custom Attributes",id:"adding-custom-attributes",level:2},{value:"Uploading File Attachments",id:"uploading-file-attachments",level:2},{value:"Manage Symbols",id:"manage-symbols",level:2}];function u(e){const r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.p,{children:["While Backtrace fully supports the base PLCrashReporter library, we also provide a custom-built backtrace-cococa library to simplify the integration and submission of errors to Backtrace. Read more in the ",(0,a.jsx)(r.a,{href:"/error-reporting/platform-integrations/ios/setup/",children:"iOS Integration Guide"}),"."]}),"\n",(0,a.jsxs)(r.p,{children:["PLCrashReporter is an open source project maintained by Microsoft (previously, Plausible Labs). It is MIT licensed with some libraries such as Protocol Buffers covered under the Apache License. It can be integrated into Objective-C and Swift applications to retrieve crash information on MacOS and iOS platforms. The source code is available on the ",(0,a.jsx)(r.a,{href:"https://github.com/plausiblelabs/plcrashreporter",children:"GitHub"})," mirror."]}),"\n",(0,a.jsx)(r.p,{children:"After integrating PLCrashReporter into your application, it can generate crash reports. These crash reports can be uploaded to Backtrace, which provides a central location for developers to triage, prioritize and debug crashes in production and development environments."}),"\n",(0,a.jsx)(r.p,{children:"This article discusses how to integrate and send PLCrashReports to Backtrace."}),"\n",(0,a.jsx)(r.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["A Backtrace account (",(0,a.jsx)(r.a,{href:"https://backtrace.io/login",children:"log in"})," or sign up for a ",(0,a.jsx)(r.a,{href:"https://backtrace.io/sign-up",children:"free trial license"}),")."]}),"\n",(0,a.jsxs)(r.li,{children:["Your subdomain name (used to connect to your Backtrace instance). For example, ",(0,a.jsx)(r.code,{children:"https://example-subdomain.sp.backtrace.io"}),"."]}),"\n",(0,a.jsxs)(r.li,{children:["A Backtrace project and a ",(0,a.jsx)(r.a,{href:"/error-reporting/project-setup/submission-url",children:"submission token"}),"."]}),"\n"]}),"\n",(0,a.jsx)(r.h2,{id:"integration",children:"Integration"}),"\n",(0,a.jsxs)(r.p,{children:["The integration of PLCrashReporter is straightforward. Code examples are provided on the ",(0,a.jsx)(r.a,{href:"https://plcrashreporter.org/documentation/api/v1.2/example_usage_iphone.html",children:"PLCrashReporter website"}),"."]}),"\n",(0,a.jsx)(r.p,{children:"In essence, the following snippet in Objective-C enables PLCrashReporter for the application:"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-objective-c",children:"PLCrashReporterConfig *config = [PLCrashReporterConfig defaultConfiguration];\nPLCrashReporter *reporter = [[PLCrashReporter alloc] initWithConfiguration: config];\n[reporter enableCrashReporter];\n"})}),"\n",(0,a.jsx)(r.p,{children:"To compile the code, you need to link to the CrashReporter framework."}),"\n",(0,a.jsxs)(r.p,{children:["The above is a minimal example. For production use, it is recommended to include error checking, for example, by using ",(0,a.jsx)(r.code,{children:"enableCrashReporterAndReturnError"}),"."]}),"\n",(0,a.jsxs)(r.p,{children:["PLCrashReports will be stored in ",(0,a.jsx)(r.code,{children:"~/Library/Caches/com.plausiblelabs.crashreporter.data/"}),"."]}),"\n",(0,a.jsx)(r.h2,{id:"managing-plcrashreports",children:"Managing PLCrashReports"}),"\n",(0,a.jsx)(r.p,{children:"PLCrashReporter helps manage existing crash reports. This allows an application developer to check for pending crash reports as soon as the application starts up to take appropriate actions."}),"\n",(0,a.jsxs)(r.p,{children:["To do so, the PLCrashReporter class provides instance methods to check for pending crash reports (",(0,a.jsx)(r.code,{children:"hasPendingCrashReport"}),") and ",(0,a.jsx)(r.code,{children:"loadPendingCrashReportData"}),". The provided code snippet allows checking for pending crash reports on startup and calling a function, ",(0,a.jsx)(r.code,{children:"submit"}),", to send the data to the Backtrace servers."]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-objective-c",children:"if ([reporter hasPendingCrashReport]) {\n NSdata *crash = [reporter loadPendingCrashReportData];\n upload(crash);\n}\n"})}),"\n",(0,a.jsx)(r.h2,{id:"upload-methods",children:"Upload Methods"}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.code,{children:"PLCrashReporter"})," doesn't support any upload methods natively. The API provides callbacks to retrieve prior crashes and allows developers to upload them manually. Using the Foundation Classes, this might look as follows:"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-objective-c",children:'static void upload(NSData *crash) {\n NSURL *url = [NSURL URLWithString:@"https://instance.sp.backtrace.io:6098/post?format=plcrash&token=xxxxxxxxxxxxxxxxxxxxxxx"];\n NSMutableURLRequest *req = [NSMutableURLRequest requestWithURL: url];\n NSHTTPURLResponse *res = nil;\n NSError *err = nil;\n [req setHTTPMethod: @"POST"];\n [req setHTTPBody: crash];\n [NSURLConnection sendSynchronousRequest:req returningResponse:&res error:&err];\n}\n'})}),"\n",(0,a.jsx)(r.p,{children:"After a successful transmission, you can purge the pending download:"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-objective-c",children:"[reporter purgePendingCrashReport];\n"})}),"\n",(0,a.jsx)(r.p,{children:"You can check again for pending crash reports and upload any other queued crashes from your system."}),"\n",(0,a.jsx)(r.h2,{id:"system-level-attributes",children:"System Level Attributes"}),"\n",(0,a.jsx)(r.p,{children:"When you open the Crash Report in Backtrace's Web Debugger, you'll notice that in addition to the Callstack, system-level attributes such as process uptime, memory usage, CPU, and OS details have been extracted and are available for you to review."}),"\n",(0,a.jsx)(r.h2,{id:"adding-custom-attributes",children:"Adding Custom Attributes"}),"\n",(0,a.jsx)(r.p,{children:"In addition to the system-level attributes, you can associate custom user-defined attributes, such as graphic card driver, application mode, or version information, with the PLCrashReport. These instance-level attributes provide contextual data points to support investigating the root cause."}),"\n",(0,a.jsxs)(r.p,{children:["Custom attributes have to be created in the Backtrace project's settings. See the ",(0,a.jsx)(r.a,{href:"/error-reporting/project-setup/attributes/",children:"Attributes article"})," for more information on configuring Backtrace to index those incoming attributes appropriately. Once indexed, they will be available for filter, group, and aggregate operations in the web and morgue tool."]}),"\n",(0,a.jsxs)(r.p,{children:["The submission process can attach the key-value attributes to the URL during submission. For example, in this case, a dictionary value ",(0,a.jsx)(r.code,{children:"my_custom_attribute"})," with a value of ",(0,a.jsx)(r.code,{children:"sample_string"}),":"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{children:"https://instance.sp.backtrace.io:6098/post?format=plcrash&token=xxxxxxx&my_custom_attribute=sample_string\n"})}),"\n",(0,a.jsx)(r.h2,{id:"uploading-file-attachments",children:"Uploading File Attachments"}),"\n",(0,a.jsxs)(r.p,{children:["Backtrace also accepts generic file attachments, such as log or configuration files, to be associated with a crash. This additional contextual information can be invaluable during debugging as engineers look to see what happened recently and what additional configurations might be set. See the ",(0,a.jsx)(r.a,{href:"/error-reporting/platform-integrations/file-attachments/",children:"File Attachments"})," article for more details on submitting an attachment using HTTP submission."]}),"\n",(0,a.jsx)(r.h2,{id:"manage-symbols",children:"Manage Symbols"}),"\n",(0,a.jsx)(r.p,{children:"While compiling a macOS application, the compiler generates a directory with dSYM information for the project. To allow Backtrace to symbolicate the backtrace, it is necessary to upload the dSYM information. The most straightforward approach is to create an archive in tar or zip format of the dSYM directory and upload it via the morgue command-line tool or use the web interface functionality in the project's settings."}),"\n",(0,a.jsxs)(r.p,{children:["It is possible to generate the necessary sym files by using breakpad's ",(0,a.jsx)(r.code,{children:"dump_syms(_mac)"})," tools. They can be uploaded by the usual means as well."]}),"\n",(0,a.jsxs)(r.p,{children:["For more information on how to do this, refer to the ",(0,a.jsx)(r.a,{href:"/error-reporting/project-setup/symbolication/",children:"symbolication guide"}),"."]})]})}function d(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>s});t(96540);var a=t(34164);const n={tabItem:"tabItem_Ymn6"};var o=t(74848);function s(e){let{children:r,hidden:t,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.A)(n.tabItem,s),hidden:t,children:r})}},11470:(e,r,t)=>{t.d(r,{A:()=>C});var a=t(96540),n=t(34164),o=t(23104),s=t(56347),i=t(205),l=t(57485),c=t(31682),u=t(70679);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:r,children:t}=e;return(0,a.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:t,attributes:a,default:n}}=e;return{value:r,label:t,attributes:a,default:n}}))}(t);return function(e){const r=(0,c.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function h(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function m(e){let{queryString:r=!1,groupId:t}=e;const n=(0,s.W6)(),o=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,l.aZ)(o),(0,a.useCallback)((e=>{if(!o)return;const r=new URLSearchParams(n.location.search);r.set(o,e),n.replace({...n.location,search:r.toString()})}),[o,n])]}function g(e){const{defaultValue:r,queryString:t=!1,groupId:n}=e,o=p(e),[s,l]=(0,a.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:r,tabValues:o}))),[c,d]=m({queryString:t,groupId:n}),[g,b]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[n,o]=(0,u.Dv)(t);return[n,(0,a.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:n}),f=(()=>{const e=c??g;return h({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{f&&l(f)}),[f]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,o]),tabValues:o}}var b=t(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function v(e){let{className:r,block:t,selectedValue:a,selectValue:s,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),u=e=>{const r=e.currentTarget,t=l.indexOf(r),n=i[t].value;n!==a&&(c(r),s(n))},d=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;r=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;r=l[t]??l[l.length-1];break}}r?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":t},r),children:i.map((e=>{let{value:r,label:t,attributes:o}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===r?0:-1,"aria-selected":a===r,ref:e=>l.push(e),onKeyDown:d,onClick:u,...o,className:(0,n.A)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":a===r}),children:t??r},r)}))})}function j(e){let{lazy:r,children:t,selectedValue:o}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=s.find((e=>e.props.value===o));return e?(0,a.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,r)=>(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==o})))})}function y(e){const r=g(e);return(0,x.jsxs)("div",{className:(0,n.A)("tabs-container",f.tabList),children:[(0,x.jsx)(v,{...r,...e}),(0,x.jsx)(j,{...r,...e})]})}function C(e){const r=(0,b.A)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(r))}},28453:(e,r,t)=>{t.d(r,{R:()=>s,x:()=>i});var a=t(96540);const n={},o=a.createContext(n);function s(e){const r=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),a.createElement(o.Provider,{value:r},e.children)}}}]);