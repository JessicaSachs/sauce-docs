"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[74163],{66549:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var t=n(74848),i=n(28453),a=n(11470),s=n(19365),o=n(86025);const l={id:"setup",title:"Setting Up Backtrace for iOS",sidebar_label:"Setup",description:"Add Backtrace to your Swift and Objective-C Cocoa projects for iOS."},c=void 0,d={id:"error-reporting/platform-integrations/ios/setup",title:"Setting Up Backtrace for iOS",description:"Add Backtrace to your Swift and Objective-C Cocoa projects for iOS.",source:"@site/docs/error-reporting/platform-integrations/ios/setup.md",sourceDirName:"error-reporting/platform-integrations/ios",slug:"/error-reporting/platform-integrations/ios/setup",permalink:"/sauce-docs/pr-preview/pr-2907/error-reporting/platform-integrations/ios/setup",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/platform-integrations/ios/setup.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:172477197e4,frontMatter:{id:"setup",title:"Setting Up Backtrace for iOS",sidebar_label:"Setup",description:"Add Backtrace to your Swift and Objective-C Cocoa projects for iOS."},sidebar:"backtrace",previous:{title:"ProGuard Deobfuscation",permalink:"/sauce-docs/pr-preview/pr-2907/error-reporting/platform-integrations/android/proguard-deobfuscation"},next:{title:"Configuration",permalink:"/sauce-docs/pr-preview/pr-2907/error-reporting/platform-integrations/ios/configuration"}},u={},h=[{value:"Supported Platforms",id:"supported-platforms",level:2},{value:"Privacy manifest",id:"privacy-manifest",level:3},{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"System Requirements",id:"system-requirements",level:3},{value:"Install the SDK",id:"install-the-sdk",level:2},{value:"Initialize the Backtrace Client",id:"initialize-the-backtrace-client",level:2},{value:"Upload Debug Symbols",id:"upload-debug-symbols",level:2},{value:"Set Debug Symbol Format",id:"set-debug-symbol-format",level:3},{value:"Find Debug Symbols",id:"find-debug-symbols",level:3},{value:"Verify the Setup",id:"verify-the-setup",level:2},{value:"Send an Error/NSError",id:"send-an-errornserror",level:3},{value:"Send an NSException",id:"send-an-nsexception",level:3},{value:"Send macOS Exceptions",id:"send-macos-exceptions",level:3}];function p(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:"Add Backtrace to your iOS project to automatically detect and report handled and unhandled exceptions, errors, and crashes that occur in your apps written in Swift or Objective-C."}),"\n",(0,t.jsx)(r.p,{children:"After you've completed the steps on this page, the Backtrace client will be installed and setup with the default configuration settings. Crash and error reports will include the following metadata:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"system"}),"\n",(0,t.jsx)(r.li,{children:"machine"}),"\n",(0,t.jsx)(r.li,{children:"signal"}),"\n",(0,t.jsx)(r.li,{children:"exception"}),"\n",(0,t.jsx)(r.li,{children:"thread"}),"\n",(0,t.jsx)(r.li,{children:"process"}),"\n"]}),"\n","\n",(0,t.jsx)(r.h2,{id:"supported-platforms",children:"Supported Platforms"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"iOS 11+"}),"\n",(0,t.jsx)(r.li,{children:"macOS 10.13+"}),"\n",(0,t.jsx)(r.li,{children:"tvOS 11+"}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"privacy-manifest",children:"Privacy manifest"}),"\n",(0,t.jsxs)(r.p,{children:["The iOS SDK contains a privacy manifest to declare the types of data accessed on the device. Please refer to this ",(0,t.jsx)(r.a,{href:"https://github.com/backtrace-labs/backtrace-cocoa/blob/master/PrivacyInfo.xcprivacy",children:"source document"})," for the specific types of data collected by the SDK."]}),"\n",(0,t.jsx)(r.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["A Backtrace account (",(0,t.jsx)(r.a,{href:"https://backtrace.io/login",children:"log in"}),"\xa0or sign up for a\xa0",(0,t.jsx)(r.a,{href:"https://backtrace.io/sign-up",children:"free trial license"}),")."]}),"\n",(0,t.jsxs)(r.li,{children:["Your subdomain name (used to connect to your Backtrace instance). For example, ",(0,t.jsx)(r.code,{children:"https://example-subdomain.sp.backtrace.io"}),"."]}),"\n",(0,t.jsxs)(r.li,{children:["A Backtrace project and a ",(0,t.jsx)(r.a,{href:"/error-reporting/project-setup/submission-url",children:"submission token"}),"."]}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"system-requirements",children:"System Requirements"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Xcode 10 or above"}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"install-the-sdk",children:"Install the SDK"}),"\n",(0,t.jsxs)(r.p,{children:["You can install the SDK with Swift Package Manager (SPM) or CocoaPods. The SPM package can be integrated directly in Xcode or by editing your package's ",(0,t.jsx)(r.code,{children:"Package.swift"})," file."]}),"\n",(0,t.jsxs)(a.A,{children:[(0,t.jsx)(s.A,{value:"xcode",label:"Xcode",default:!0,children:(0,t.jsxs)("ol",{children:[(0,t.jsxs)("li",{children:["In ",(0,t.jsx)("b",{children:"Xcode"})," select ",(0,t.jsx)("b",{children:"File > Add Packages"}),", then search for and add ",(0,t.jsx)("code",{children:(0,t.jsx)(r.a,{href:"https://github.com/backtrace-labs/backtrace-cocoa.git",children:"https://github.com/backtrace-labs/backtrace-cocoa.git"})}),"."]}),(0,t.jsxs)("li",{children:["Verify your project ",(0,t.jsx)("b",{children:"Package Dependencies"})," list for backtrace-cocoa."]}),(0,t.jsxs)("li",{children:["Add Backtrace to your target\u2019s ",(0,t.jsx)("b",{children:"Frameworks, Libraries, and Embedded Content"}),"."]})]})}),(0,t.jsxs)(s.A,{value:"SPM",label:"Swift Package Manager",children:["Add the following dependency to your ",(0,t.jsx)("code",{children:"Package.swift"})," file:",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:'.package(url: "https://github.com/backtrace-labs/backtrace-cocoa.git, branch: "feature/SwiftPM")\n'})})]}),(0,t.jsxs)(s.A,{value:"cocoapods",label:"CocoaPods",children:["Add the following to your ",(0,t.jsx)("code",{children:"Podfile"}),":",(0,t.jsxs)("ol",{children:[(0,t.jsxs)("li",{children:["Specify ",(0,t.jsx)("code",{children:"use_frameworks!"}),"."]}),(0,t.jsxs)("li",{children:["Add the ",(0,t.jsx)("code",{children:"Backtrace"})," pod:",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"pod 'Backtrace'\n"})})]})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"initialize-the-backtrace-client",children:"Initialize the Backtrace Client"}),"\n",(0,t.jsxs)(r.p,{children:["To initialize ",(0,t.jsx)(r.code,{children:"BacktraceClient"}),", create a ",(0,t.jsx)(r.code,{children:"BacktraceCredentials"})," object with the name of your subdomain and submission token, and supply it as a parameter in the ",(0,t.jsx)(r.code,{children:"BacktraceCredentials"})," constructor:"]}),"\n",(0,t.jsxs)(a.A,{groupId:"languages",children:[(0,t.jsx)(s.A,{value:"swift",label:"Swift",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-swift",children:'// provide the name of the subdomain for your Backtrace instance and a submission token\nlet backtraceCredentials = BacktraceCredentials(submissionUrl: URL(string: "https://submit.backtrace.io/{subdomain-name}/{submission-token}/plcrash")!)\n'})})}),(0,t.jsx)(s.A,{value:"objc",label:"Objective-C",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-objc",children:'// provide the name of the subdomain for your Backtrace instance and a submission token\nBacktraceCredentials *backtraceCredentials = [[BacktraceCredentials alloc] initWithSubmissionUrl: [NSURL URLWithString: @"https://submit.backtrace.io/{subdomain-name}/{submission-token}/plcrash"]];\n'})})})]}),"\n",(0,t.jsx)(r.h2,{id:"upload-debug-symbols",children:"Upload Debug Symbols"}),"\n",(0,t.jsx)(r.p,{children:"After compiling your application with the new backtrace-cocoa library, make sure symbol files are generated in dSYM format and are uploaded to Backtrace to symbolicate incoming crashes."}),"\n",(0,t.jsxs)(r.p,{children:["For information on how to upload debug symbols, see ",(0,t.jsx)(r.a,{href:"/error-reporting/project-setup/symbolication/#symbol-formats-and-upload-methods",children:"Symbol Formats and Upload Methods"}),"."]}),"\n",(0,t.jsx)(r.h3,{id:"set-debug-symbol-format",children:"Set Debug Symbol Format"}),"\n",(0,t.jsx)(r.p,{children:"When building your iOS game in Xcode, make sure to configure the build settings to generate dSYM files for any build that you want to debug with Backtrace. By default, Xcode may only generate DWARF files."}),"\n",(0,t.jsx)(r.p,{children:"To generate debug symbols in dSYM format:"}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsxs)(r.li,{children:["In Xcode, go to your project target's ",(0,t.jsx)(r.strong,{children:"Build Settings"}),"."]}),"\n",(0,t.jsxs)(r.li,{children:["Under ",(0,t.jsx)(r.strong,{children:"Build Options"}),", set ",(0,t.jsx)(r.strong,{children:"Debug Information Format"})," to ",(0,t.jsx)(r.strong,{children:"DWARF with dSYM File"}),".","\n",(0,t.jsx)("img",{src:(0,o.A)("img/error-reporting/ios/xcode-set-debug-format.png"),alt:""}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"find-debug-symbols",children:"Find Debug Symbols"}),"\n",(0,t.jsx)(r.p,{children:"To find dSYM files while building the project:"}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsx)(r.li,{children:"In Xcode, build your project."}),"\n",(0,t.jsxs)(r.li,{children:["From the ",(0,t.jsx)(r.strong,{children:"Products"})," folder, select your iOS app. ",(0,t.jsx)("br",{}),"\n",(0,t.jsx)("img",{src:(0,o.A)("img/error-reporting/ios/xcode-products.webp"),width:"400",alt:""}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["Right-click, then click ",(0,t.jsx)(r.strong,{children:"Show in Finder"}),"."]}),"\n",(0,t.jsxs)(r.li,{children:["Zip all the dSYM files and upload to Backtrace.","\n",(0,t.jsx)("img",{src:(0,o.A)("img/error-reporting/ios/finder-dsyms-products.png"),width:"600",alt:""}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"To find dSYM files while archiving the project:"}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsx)(r.li,{children:"In Xcode, archive your project."}),"\n",(0,t.jsxs)(r.li,{children:["To open the Archives organizer, go to ",(0,t.jsx)(r.strong,{children:"Window > Organizer"})," and click ",(0,t.jsx)(r.strong,{children:"Archives"}),"."]}),"\n",(0,t.jsxs)(r.li,{children:["Select your iOS app, then click ",(0,t.jsx)(r.strong,{children:"Show in Finder"}),". dSYMs are stored in a ",(0,t.jsx)(r.code,{children:".xcarchive"})," file.","\n",(0,t.jsx)("img",{src:(0,o.A)("img/error-reporting/ios/xcode-organizer.png"),width:"900",alt:""}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["Right-click, then click ",(0,t.jsx)(r.strong,{children:"Show Package Contents"}),".","\n",(0,t.jsx)("img",{src:(0,o.A)("img/error-reporting/ios/finder-xcarchive.webp"),width:"700",alt:""}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["Search for the ",(0,t.jsx)(r.strong,{children:"dSYMs"})," folder."]}),"\n",(0,t.jsxs)(r.li,{children:["Zip all the dSYM files and upload to Backtrace. ",(0,t.jsx)("br",{}),"\n",(0,t.jsx)("img",{src:(0,o.A)("img/error-reporting/ios/finder-dsyms-archive.png"),width:"400",alt:""}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"verify-the-setup",children:"Verify the Setup"}),"\n",(0,t.jsx)(r.p,{children:"At this point, you've installed and setup the Backtrace client to automatically capture exceptions, errors, and crashes in your iOS app."}),"\n",(0,t.jsx)(r.p,{children:"To test the integration, throw an error an exception to send a report to your Backtrace instance."}),"\n",(0,t.jsx)(r.h3,{id:"send-an-errornserror",children:"Send an Error/NSError"}),"\n",(0,t.jsxs)(a.A,{groupId:"languages",children:[(0,t.jsx)(s.A,{value:"swift",label:"Swift",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-swift",children:"@objc func send(completion: ((BacktraceResult) -> Void))\n"})})}),(0,t.jsx)(s.A,{value:"objc",label:"Objective-C",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-objc",children:" - (void) sendWithCompletion: (void (^)(BacktraceResult * _Nonnull)) completion;\n"})})})]}),"\n",(0,t.jsx)(r.h3,{id:"send-an-nsexception",children:"Send an NSException"}),"\n",(0,t.jsxs)(a.A,{groupId:"languages",children:[(0,t.jsx)(s.A,{value:"swift",label:"Swift",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-swift",children:"@objc func send(exception: NSException, completion: ((BacktraceResult) -> Void))\n"})})}),(0,t.jsx)(s.A,{value:"objc",label:"Objective-C",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-objc",children:" - (void) sendWithException: NSException completion: (void (^)(BacktraceResult * _Nonnull)) completion;\n"})})})]}),"\n",(0,t.jsx)(r.h3,{id:"send-macos-exceptions",children:"Send macOS Exceptions"}),"\n",(0,t.jsxs)(r.p,{children:["If you want to catch additional exceptions on macOS which are not forwarded by macOS runtime, set ",(0,t.jsx)(r.code,{children:"NSPrincipalClass"})," to ",(0,t.jsx)(r.code,{children:"Backtrace.BacktraceCrashExceptionApplication"})," in your ",(0,t.jsx)(r.code,{children:"Info.plist"})," file."]}),"\n",(0,t.jsx)(r.p,{children:"Alternatively, you can set:"}),"\n",(0,t.jsxs)(a.A,{groupId:"languages",children:[(0,t.jsx)(s.A,{value:"swift",label:"Swift",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-swift",children:'UserDefaults.standard.register(defaults: ["NSApplicationCrashOnExceptions": true])\n'})})}),(0,t.jsx)(s.A,{value:"objc",label:"Objective-C",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-objc",children:'[[NSUserDefaults standardUserDefaults] registerDefaults:@{ @"NSApplicationCrashOnExceptions": @YES }];\n'})})})]}),"\n",(0,t.jsx)(r.admonition,{type:"caution",children:(0,t.jsxs)(r.p,{children:["Make sure to use ",(0,t.jsx)(r.code,{children:"@try ... @catch"})," or your app will crash."]})})]})}function m(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},19365:(e,r,n)=>{n.d(r,{A:()=>s});n(96540);var t=n(18215);const i={tabItem:"tabItem_Ymn6"};var a=n(74848);function s(e){let{children:r,hidden:n,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.A)(i.tabItem,s),hidden:n,children:r})}},11470:(e,r,n)=>{n.d(r,{A:()=>S});var t=n(96540),i=n(18215),a=n(23104),s=n(56347),o=n(205),l=n(57485),c=n(31682),d=n(89466);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:n}=e;return(0,t.useMemo)((()=>{const e=r??function(e){return u(e).map((e=>{let{props:{value:r,label:n,attributes:t,default:i}}=e;return{value:r,label:n,attributes:t,default:i}}))}(n);return function(e){const r=(0,c.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function p(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function m(e){let{queryString:r=!1,groupId:n}=e;const i=(0,s.W6)(),a=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,l.aZ)(a),(0,t.useCallback)((e=>{if(!a)return;const r=new URLSearchParams(i.location.search);r.set(a,e),i.replace({...i.location,search:r.toString()})}),[a,i])]}function b(e){const{defaultValue:r,queryString:n=!1,groupId:i}=e,a=h(e),[s,l]=(0,t.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:a}))),[c,u]=m({queryString:n,groupId:i}),[b,x]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[i,a]=(0,d.Dv)(n);return[i,(0,t.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:i}),f=(()=>{const e=c??b;return p({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{f&&l(f)}),[f]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),x(e)}),[u,x,a]),tabValues:a}}var x=n(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(74848);function j(e){let{className:r,block:n,selectedValue:t,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const r=e.currentTarget,n=l.indexOf(r),i=o[n].value;i!==t&&(c(r),s(i))},u=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;r=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;r=l[n]??l[l.length-1];break}}r?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},r),children:o.map((e=>{let{value:r,label:n,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>l.push(e),onKeyDown:u,onClick:d,...a,className:(0,i.A)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":t===r}),children:n??r},r)}))})}function v(e){let{lazy:r,children:n,selectedValue:i}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){const e=a.find((e=>e.props.value===i));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==i})))})}function y(e){const r=b(e);return(0,g.jsxs)("div",{className:(0,i.A)("tabs-container",f.tabList),children:[(0,g.jsx)(j,{...e,...r}),(0,g.jsx)(v,{...e,...r})]})}function S(e){const r=(0,x.A)();return(0,g.jsx)(y,{...e,children:u(e.children)},String(r))}},28453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>o});var t=n(96540);const i={},a=t.createContext(i);function s(e){const r=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(a.Provider,{value:r},e.children)}}}]);