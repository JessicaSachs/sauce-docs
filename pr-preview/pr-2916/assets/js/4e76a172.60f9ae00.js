"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[34620],{47422:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var t=i(74848),r=i(28453);i(86025),i(11470),i(19365);const s={id:"tf-production",title:"TestFairy in Production",sidebar_label:"TestFairy in Production"},o=void 0,a={id:"testfairy/sdk/tf-production",title:"TestFairy in Production",description:"Running TestFairy in production offers numerous benefits, such as gaining valuable insights into user behavior, detecting and resolving issues promptly, and continuously improving your app's performance. With TestFairy, you can proactively monitor your production environment, gather valuable data, and make informed decisions to deliver a superior app to your users.",source:"@site/docs/testfairy/sdk/tf-production.md",sourceDirName:"testfairy/sdk",slug:"/testfairy/sdk/tf-production",permalink:"/sauce-docs/pr-preview/pr-2916/testfairy/sdk/tf-production",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/testfairy/sdk/tf-production.md",tags:[],version:"current",lastUpdatedBy:"kristofmuhi",lastUpdatedAt:172492915e4,frontMatter:{id:"tf-production",title:"TestFairy in Production",sidebar_label:"TestFairy in Production"},sidebar:"docs",previous:{title:"Submitting User Feedback",permalink:"/sauce-docs/pr-preview/pr-2916/testfairy/sdk/user-feedback"},next:{title:"Testing the Crash Handler",permalink:"/sauce-docs/pr-preview/pr-2916/testfairy/sdk/crash-handler-testing"}},l={},d=[{value:"Running TestFairy in Production",id:"running-testfairy-in-production",level:2},{value:"Disabling TestFairy in Production",id:"disabling-testfairy-in-production",level:2},{value:"iOS",id:"ios",level:3},{value:"Option 1: Calling [TestFairy begin] only in DEBUG",id:"option-1-calling-testfairy-begin-only-in-debug",level:4},{value:"Objective-C",id:"objective-c",level:5},{value:"Swift",id:"swift",level:5},{value:"Objective-C",id:"objective-c-1",level:5},{value:"Swift",id:"swift-1",level:5},{value:"Option 2: Configure Link Options in a Scheme for App Store",id:"option-2-configure-link-options-in-a-scheme-for-app-store",level:4},{value:"Option 3: No-Op SDK",id:"option-3-no-op-sdk",level:3},{value:"Android",id:"android",level:3},{value:"Option 1: Calling TestFairy.begin() only in Debug mode.",id:"option-1-calling-testfairybegin-only-in-debug-mode",level:4},{value:"Option 2: Use a Class Loader",id:"option-2-use-a-class-loader",level:4}];function c(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Running TestFairy in production offers numerous benefits, such as gaining valuable insights into user behavior, detecting and resolving issues promptly, and continuously improving your app's performance. With TestFairy, you can proactively monitor your production environment, gather valuable data, and make informed decisions to deliver a superior app to your users."}),"\n",(0,t.jsx)(n.h2,{id:"running-testfairy-in-production",children:"Running TestFairy in Production"}),"\n",(0,t.jsx)(n.p,{children:"When running TestFairy in production, you may record sensitive data such as medical information, financial data or photos."}),"\n",(0,t.jsx)(n.p,{children:"Therefore it is important to follow these guidelines:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["On iOS, you ",(0,t.jsx)(n.strong,{children:"must"})," request explicit user consent before recording start.\nSee the ",(0,t.jsx)(n.a,{href:"https://developer.apple.com/app-store/review/guidelines/",children:"Apple guidelines"})," and pay special attention to section 2.5.14"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["On Android, call disableAutoUpdate() to comply with ",(0,t.jsx)(n.a,{href:"https://play.google.com/about/developer-distribution-agreement.html",children:"Play Store Developer Distribution Agreement"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["When recording sensitive data you ",(0,t.jsx)(n.strong,{children:"must"})," use TestFairy's end-to-end encryption with your own private keys, so that only your team can see your sessions."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["You ",(0,t.jsx)(n.strong,{children:"must"})," hide sensitive data such as credit card numbers, passwords, or other PII, so that this info will not be uploaded to the server."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:['In case you are using TestFairy for customer support to better understand your users in case of a technical issue,\nit is recomended to add a button to your app menu (call it "advanced support"?) and have that button call ',(0,t.jsx)(n.code,{children:"TestFairy.begin()"}),".\nBefore calling ",(0,t.jsx)(n.code,{children:"begin()"})," ask the user if this is ok to record their screen for quality assurance purposes.\nWhen doing that, make sure that session duration is set to 2-3 minutes, just enough to identify the cause of a problem."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["You ",(0,t.jsx)(n.strong,{children:"must"})," include a proper disclaimer in your app terms of service document.\nYou must explain exactly what data you collect, and how to request deletion of that data."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Never use TestFairy Auto-update with apps that are shipped to production. This is a clear violation of both Apple and Google's terms."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"disabling-testfairy-in-production",children:"Disabling TestFairy in Production"}),"\n",(0,t.jsx)(n.p,{children:"When it comes to using TestFairy in a production environment, there may be instances where you need to disable TestFairy's functionality temporarily or permanently. Disabling TestFairy in production can be necessary for a variety of reasons, such as complying with platform guidelines or eliminating potential performance impacts.. The SDK is very modular and is built to handle the your and your company's needs."}),"\n",(0,t.jsx)(n.h3,{id:"ios",children:"iOS"}),"\n",(0,t.jsx)(n.h4,{id:"option-1-calling-testfairy-begin-only-in-debug",children:"Option 1: Calling [TestFairy begin] only in DEBUG"}),"\n",(0,t.jsx)(n.p,{children:"Without a call to [TestFairy begin], the SDK is not initialized. An uninitialized SDK won't consume any memory, won't open sockets, and won't catch uncaught exceptions. Even though it does not impact your app in any way, the SDK is still linked with your app."}),"\n",(0,t.jsx)(n.h5,{id:"objective-c",children:"Objective-C"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'#ifdef DEBUG\n[TestFairy begin:@"APP_TOKEN"];\n#endif\n'})}),"\n",(0,t.jsx)(n.h5,{id:"swift",children:"Swift"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'#if DEBUG\nTestFairy.begin("APP_TOKEN")\n#endif\n'})}),"\n",(0,t.jsxs)(n.p,{children:["If your publishing workflow has multiple build schemes or you plan to implement such phases, proceed to ",(0,t.jsx)(n.a,{href:"https://blog.testfairy.com/ios-build-schemes-explained/",children:"this post"})," to learn how to do that."]}),"\n",(0,t.jsx)(n.p,{children:"We suggest defining a compiler flag for each scheme you have to enable the SDK for schemes relevant to testing like below."}),"\n",(0,t.jsx)(n.h5,{id:"objective-c-1",children:"Objective-C"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'#if defined(DEBUG)\n[TestFairy begin:@"APP_TOKEN"];\n#elif defined(SCHEME1)\n[TestFairy begin:@"APP_TOKEN"];\n#elif defined(SCHEME2)\n[TestFairy begin:@"APP_TOKEN"];\n#else\n// Don\'t initialize the SDK\n#endif\n'})}),"\n",(0,t.jsx)(n.h5,{id:"swift-1",children:"Swift"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'#if DEBUG\nTestFairy.begin("APP_TOKEN")\n#elseif SCHEME1\nTestFairy.begin("APP_TOKEN")\n#elseif SCHEME2\nTestFairy.begin("APP_TOKEN")\n#else\n// Don\'t initialize the SDK\n#endif\n'})}),"\n",(0,t.jsx)(n.p,{children:"If you are also worried about reducing the app size in your final release build, proceed to Option 2."}),"\n",(0,t.jsx)(n.h4,{id:"option-2-configure-link-options-in-a-scheme-for-app-store",children:"Option 2: Configure Link Options in a Scheme for App Store"}),"\n",(0,t.jsx)(n.p,{children:"A common pattern we see from our customers is having a dedicated scheme for App Store. Meaning there's a Debug, Release and App Store (and maybe others.)"}),"\n",(0,t.jsx)(n.p,{children:"The link phases that are explained in the integration document only apply to Debug and Release schemes, and can be excluded from the App Store scheme."}),"\n",(0,t.jsxs)(n.p,{children:["This solution still requires use of ",(0,t.jsx)(n.code,{children:"#ifdef"})," or ",(0,t.jsx)(n.code,{children:"#if"})," as before, but can also completely omit the library from being linked with the app."]}),"\n",(0,t.jsxs)(n.p,{children:["Navigate to project build settings and locate ",(0,t.jsx)(n.strong,{children:"Excluded Source File Name"})," option. Expand the list and find the build scheme you want to exclude TestFairy from. Double click the row add two entries to the excluded file list, one for ",(0,t.jsx)(n.strong,{children:"TestFairy.h"}),", one for ",(0,t.jsx)(n.strong,{children:"libTestFairy.a"})," files."]}),"\n",(0,t.jsxs)(n.p,{children:["Try building your project. If the compilation fails, locate the lines where TestFairy is used and wrap them with ",(0,t.jsx)(n.code,{children:"#ifdef"})," or ",(0,t.jsx)(n.code,{children:"#if"})," directives explained in Option 1."]}),"\n",(0,t.jsx)("a",{name:"ios-noop"}),"\n",(0,t.jsx)(n.h3,{id:"option-3-no-op-sdk",children:"Option 3: No-Op SDK"}),"\n",(0,t.jsxs)(n.p,{children:["Similar to Option #2, you're required to have multiple schemes in your project, but ",(0,t.jsx)(n.strong,{children:"does not"})," require the use of ",(0,t.jsx)(n.code,{children:"#ifdef"})," or ",(0,t.jsx)(n.code,{children:"#if"}),"."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Download the ",(0,t.jsx)(n.a,{href:"https://github.com/testfairy/testfairy-ios-sdk-noop",children:"TestFairy iOS No-Op SDK"})]}),"\n",(0,t.jsxs)(n.li,{children:["Add ",(0,t.jsx)(n.code,{children:"TestFairy.m"})," to your project's ",(0,t.jsx)(n.em,{children:"Production"})," or ",(0,t.jsx)(n.em,{children:"App Store"})," scheme. (Note, that the ",(0,t.jsx)(n.code,{children:".m"})," file needs to be put in a place where it can find the ",(0,t.jsx)(n.code,{children:"TestFairy.h"})," file)."]}),"\n",(0,t.jsxs)(n.li,{children:["Navigate to project build settings and locate ",(0,t.jsx)(n.strong,{children:"Excluded Source File Name"})," option. Expand the list and find the build scheme you want to exclude TestFairy from. Double click the row add an entry to the excluded file list for the ",(0,t.jsx)(n.strong,{children:"libTestFairy.a"})," file."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["This keeps all calls to ",(0,t.jsx)(n.code,{children:"TestFairy"})," as-is, but replaced with empty implementations."]}),"\n",(0,t.jsx)(n.h3,{id:"android",children:"Android"}),"\n",(0,t.jsx)(n.h4,{id:"option-1-calling-testfairybegin-only-in-debug-mode",children:"Option 1: Calling TestFairy.begin() only in Debug mode."}),"\n",(0,t.jsxs)(n.p,{children:["Your Gradle variants can alter the code path of your app. Use debug flavor to call ",(0,t.jsx)(n.code,{children:"TestFairy.begin()"}),", and release flavor to emit this call."]}),"\n",(0,t.jsxs)(n.p,{children:["If you are not used to working with build variants, refer to ",(0,t.jsx)(n.a,{href:"https://blog.testfairy.com/create-a-custom-build-in-android/",children:"this post"})," the learn how."]}),"\n",(0,t.jsx)(n.p,{children:"In order for ProGuard to fully crop the TestFairy SDK from the final binary, you may use a wrapper class that differs in each of your flavors."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Create a new Java folder for your ",(0,t.jsx)(n.strong,{children:"release"})," variant."]}),"\n",(0,t.jsx)(n.li,{children:"Create a Java class somewhere in the shared (main) variant."}),"\n",(0,t.jsxs)(n.li,{children:["Create the same package structure and Java class in the ",(0,t.jsx)(n.strong,{children:"release"})," variant as well."]}),"\n",(0,t.jsxs)(n.li,{children:["Put the code below into the Java class under ",(0,t.jsx)(n.strong,{children:"main/java"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"public class TestFairyWrapper {\n  public static void begin(Activity activity, String apikey) {\n    TestFairy.begin(activity, apikey);\n  }\n}\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Put the code below into the Java class under ",(0,t.jsx)(n.strong,{children:"release/java"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"public class TestFairyWrapper {\n  public static void begin(Activity activity, String apikey) {\n    // Do nothing\n  }\n}\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Call ",(0,t.jsx)(n.code,{children:"TestFairyWrapper.begin()"})," in your main activity."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Without any calls to any of the TestFairy SDK, Proguard removes the entire compiled code from the result ",(0,t.jsx)(n.code,{children:"classes.dex"})," and the final APK."]}),"\n",(0,t.jsx)(n.h4,{id:"option-2-use-a-class-loader",children:"Option 2: Use a Class Loader"}),"\n",(0,t.jsx)(n.p,{children:"Android allows advanced developers to load classes into memory on-the-fly. You can use Java reflections to load TestFairy class into memory only on a Debug build."}),"\n",(0,t.jsxs)(n.p,{children:["Replace the code where you call ",(0,t.jsx)(n.code,{children:"TestFairy.begin()"})," with the code below."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'try {\n    Class cls = Class.forName("com.testfairy.TestFairy");\n    Method method = cls.getMethod("begin", android.content.Context.class, String.class);\n    method.invoke(cls, this, "SDK-XXXXXXX");\n} catch (Exception e) { /* ignore */ }\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Then, in your ",(0,t.jsx)(n.code,{children:"build.gradle"})," file, change the SDK dependency with ",(0,t.jsx)(n.code,{children:"debugImplementation 'testfairy:testfairy-android-sdk:1.+@aar'"})," or any other version of your choosing."]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},19365:(e,n,i)=>{i.d(n,{A:()=>o});i(96540);var t=i(34164);const r={tabItem:"tabItem_Ymn6"};var s=i(74848);function o(e){let{children:n,hidden:i,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,o),hidden:i,children:n})}},11470:(e,n,i)=>{i.d(n,{A:()=>T});var t=i(96540),r=i(34164),s=i(23104),o=i(56347),a=i(205),l=i(57485),d=i(31682),c=i(70679);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:i}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:i,attributes:t,default:r}}=e;return{value:n,label:i,attributes:t,default:r}}))}(i);return function(e){const n=(0,d.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,i])}function p(e){let{value:n,tabValues:i}=e;return i.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:i}=e;const r=(0,o.W6)(),s=function(e){let{queryString:n=!1,groupId:i}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:n,groupId:i});return[(0,l.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function y(e){const{defaultValue:n,queryString:i=!1,groupId:r}=e,s=h(e),[o,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${i.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=i.find((e=>e.default))??i[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[d,u]=f({queryString:i,groupId:r}),[y,m]=function(e){let{groupId:n}=e;const i=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,c.Dv)(i);return[r,(0,t.useCallback)((e=>{i&&s.set(e)}),[i,s])]}({groupId:r}),b=(()=>{const e=d??y;return p({value:e,tabValues:s})?e:null})();(0,a.A)((()=>{b&&l(b)}),[b]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),m(e)}),[u,m,s]),tabValues:s}}var m=i(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=i(74848);function x(e){let{className:n,block:i,selectedValue:t,selectValue:o,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.a_)(),c=e=>{const n=e.currentTarget,i=l.indexOf(n),r=a[i].value;r!==t&&(d(n),o(r))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const i=l.indexOf(e.currentTarget)+1;n=l[i]??l[0];break}case"ArrowLeft":{const i=l.indexOf(e.currentTarget)-1;n=l[i]??l[l.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":i},n),children:a.map((e=>{let{value:n,label:i,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>l.push(e),onKeyDown:u,onClick:c,...s,className:(0,r.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":t===n}),children:i??n},n)}))})}function v(e){let{lazy:n,children:i,selectedValue:s}=e;const o=(Array.isArray(i)?i:[i]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function j(e){const n=y(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,g.jsx)(x,{...n,...e}),(0,g.jsx)(v,{...n,...e})]})}function T(e){const n=(0,m.A)();return(0,g.jsx)(j,{...e,children:u(e.children)},String(n))}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var t=i(96540);const r={},s=t.createContext(r);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);