"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[31976],{61717:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>g});var n=t(74848),s=t(28453),a=t(86025),o=t(11470),i=t(19365);const l={id:"logging",title:"Logging",sidebar_label:"Logging"},c=void 0,d={id:"testfairy/sdk/logging",title:"Logging",description:"TestFairy gives you the ability to log all your network requests. It gives you an effortless way to monitor your app's network access.",source:"@site/docs/testfairy/sdk/logging.md",sourceDirName:"testfairy/sdk",slug:"/testfairy/sdk/logging",permalink:"/sauce-docs/pr-preview/pr-2914/testfairy/sdk/logging",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/testfairy/sdk/logging.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:172488024e4,frontMatter:{id:"logging",title:"Logging",sidebar_label:"Logging"},sidebar:"docs",previous:{title:"Begin with Options",permalink:"/sauce-docs/pr-preview/pr-2914/testfairy/sdk/options"},next:{title:"Private Cloud Integration",permalink:"/sauce-docs/pr-preview/pr-2914/testfairy/sdk/private-cloud-int"}},u={},g=[{value:"Exception Logging",id:"exception-logging",level:2}];function p(e){const r={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"TestFairy gives you the ability to log all your network requests. It gives you an effortless way to monitor your app's network access."}),"\n",(0,n.jsx)("img",{src:(0,a.Ay)("/img/testfairy/sdk/logHttp.png"),alt:"example issues"}),"\n",(0,n.jsxs)(o.A,{groupId:"sdk",defaultValue:"android",values:[{label:"Android",value:"android"},{label:"iOS Objective C",value:"iosC"},{label:"iOS Swift",value:"iosS"},{label:"React Native",value:"react"}],children:[(0,n.jsxs)(i.A,{value:"android",children:[(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:"TestFairy.addNetworkEvent(URI uri, String method, int code, long startTimeMillis, long endTimeMillis, long requestSize, long responseSize, String errorMessage);\n"})}),"Example","If you are using ",(0,n.jsx)(r.code,{children:"OkHttp"})," or ",(0,n.jsx)(r.code,{children:"Retrofit"})," all you need to do is add ",(0,n.jsx)(r.code,{children:"CustomHttpInterceptor"})," to your client:",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:"// Be sure to import TestFairy\nimport com.testfairy.TestFairy;\n\npublic class CustomHttpInterceptor implements Interceptor {\n    @Override\n    public Response intercept(@NonNull Chain chain) throws IOException {\n\n        Request request = chain.request();\n        long startTimeMillis = System.currentTimeMillis();\n        Long requestSize = request.body() != null ? request.body().contentLength() : 0;\n        Response response;\n        try {\n            response = chain.proceed(request);\n        } catch (IOException e) {\n            long endTimeMillis = System.currentTimeMillis();\n            TestFairy.addNetworkEvent(request.url().uri(), request.method(), -1, startTimeMillis, endTimeMillis, requestSize, -1, e.getMessage());\n            throw e;\n        }\n\n        long endTimeMillis = System.currentTimeMillis();\n        long responseSize = response.body() != null ? response.body().contentLength() : 0;\n        TestFairy.addNetworkEvent(request.url().uri(), request.method(), response.code(), startTimeMillis, endTimeMillis, requestSize, responseSize, null);\n        return response;\n    }\n}\n\n\nOkHttpClient client = new OkHttpClient.Builder()\n    .addInterceptor(new CustomHttpInterceptor())\n    .build();\n"})})]}),(0,n.jsxs)(i.A,{value:"iosC",children:[(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:"[TestFairy addNetwork:(NSURLSessionTask *)task error:(NSError *)error]\n"})}),"Example","If you are using ",(0,n.jsx)(r.code,{children:"NSURLConnection"}),", all you need to do is add ",(0,n.jsx)(r.code,{children:"callback"})," to your request at the beginning and end of the request.",(0,n.jsx)(r.admonition,{type:"note",children:(0,n.jsxs)(r.p,{children:["If you have ",(0,n.jsx)(r.code,{children:"AFNetworking"})," added to your project, network requests are automatically captured when enabled in your build settings."]})}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:'// Be sure to import TestFairy\n#import "TestFairy.h"\n\n__block NSURLSessionTask *task = [[NSURLSession sharedSession] dataTaskWithURL:url completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {\n    // ...\n    [TestFairy addNetwork:task error:error];\n}];\n[TestFairy addNetwork:task error:nil];\n[task resume];\n'})})]}),(0,n.jsxs)(i.A,{value:"iosS",children:[(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:"TestFairy.addNetwork(<URLSessionTask>, error:<NSError>)\n"})}),"Example","If you are using ",(0,n.jsx)(r.code,{children:"URLConnection"}),", all you need to do is add callback to your request at the beginning and end of the request:",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:'var task: URLSessionTask? = nil\ntask = URLSession.shared.dataTask(with: URL(string:"")!) { (data, response, error) in\n    TestFairy.addNetwork(task, error: error)\n}\nTestFairy.addNetwork(task, error: nil)\ntask?.resume()\n'})}),"With ",(0,n.jsx)(r.code,{children:"Alamofire"}),":",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:'import Alamofire\n\nNotificationCenter.default.addObserver(forName: Request.didResume, object: nil, queue: nil) { (notification) in\n    let info = notification.userInfo\n    let request = info?["org.alamofire.notification.key.request"] as! Request\n    request.tasks.forEach { TestFairy.addNetwork($0, error: nil) }\n}\n\nNotificationCenter.default.addObserver(forName: Request.didComplete, object: nil, queue: nil) { (notification) in\n    let info = notification.userInfo\n    let request = info?["org.alamofire.notification.key.request"] as! Request\n    request.tasks.forEach { TestFairy.addNetwork($0, error: nil) }\n}\n'})})]}),(0,n.jsxs)(i.A,{value:"react",children:["Example","TestFairy supports network logging for ",(0,n.jsx)(r.code,{children:"Fetch API"}),". Call the following method to start capturing network calls.",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:"// Capture network logs\nTestFairy.enableNetworkLogging(window);\n\n// Capture network logs, including http headers and content\nTestFairy.enableNetworkLogging(window, { includeHeaders: true, includeBodies: true });\n\n// Disable network logging\nTestFairy.disableNetworkLogging(window);\n"})})]})]}),"\n",(0,n.jsx)(r.h2,{id:"exception-logging",children:"Exception Logging"}),"\n",(0,n.jsx)(r.p,{children:"TestFairy allows developers to log up to five exceptions or errors for a session."}),"\n",(0,n.jsx)(r.admonition,{type:"note",children:(0,n.jsx)(r.p,{children:"It does not mark the sessions as crashed; it will only log the exception or error to the session."})}),"\n",(0,n.jsxs)(o.A,{groupId:"sdk",defaultValue:"android",values:[{label:"Android",value:"android"},{label:"iOS Objective C",value:"iosC"},{label:"iOS Swift",value:"iosS"},{label:"Cordova",value:"cordova"},{label:"React Native",value:"react"},{label:"Nativescript",value:"native"}],children:[(0,n.jsxs)(i.A,{value:"android",children:[(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:"TestFairy.logThrowable(<throwable exception>);\n"})}),"Example",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:'// Be sure to import TestFairy\nimport com.testfairy.TestFairy;\n\nTestFairy.logThrowable(new Throwable("Some Message"));\n'})})]}),(0,n.jsxs)(i.A,{value:"iosC",children:[(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:"[TestFairy logError:<NSError>];\n[TestFairy logError:<NSError> stacktrace:<NSArray<NSString>>];\n"})}),"Example",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:'// Be sure to import TestFairy\n#import "TestFairy.h"\n\n[TestFairy logError:[NSError errorWithDomain:@"com.your.domain" code:-1 userInfo:@{NSLocalizedDescriptionKey: @"Some Message"}]];\n'})})]}),(0,n.jsxs)(i.A,{value:"iosS",children:[(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:"TestFairy.logError(<NSError>)\nTestFairy.logError(<NSError>, stacktrace:<[String]>)\n"})}),"Example",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:'let error = NSError(domain: "com.your.domain", code: -1, userInfo: [NSLocalizedDescriptionKey : "Some Message"])\nTestFairy.logError(error)\n'})})]}),(0,n.jsxs)(i.A,{value:"cordova",children:[(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:"TestFairy.logException(<Error>);\n"})}),"Example",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:'var error = new Error("Some Message");\nTestFairy.logException(error);\n'})}),"We recommend adding a listener to the ",(0,n.jsx)(r.code,{children:"window"})," to capture ",(0,n.jsx)(r.code,{children:"error"})," statements, automatically sending the exception to TestFairy sessions. One suggestion we have is to add a method that looks like this:",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:'window.addEventListener("error", function(e) {\n    TestFairy.logException(e);\n});\n'})})]}),(0,n.jsxs)(i.A,{value:"react",children:[(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:"TestFairy.logException(<Error>);\n"})}),"Example",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:"// Be sure to import TestFairy\nconst TestFairy = require('react-native-testfairy');\n\nvar error = new Error(\"Some Message\");\nTestFairy.logException(error);\n"})}),"We recommend replacing the ",(0,n.jsx)(r.code,{children:"Global Handler"})," with a custom method, automatically sending the exception to TestFairy sessions. One suggestion we have is to add a method that looks like this:",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:"var ErrorUtils = require('ErrorUtils');\nvar originalGlobalHandler = ErrorUtils.getGlobalHandler();\nErrorUtils.setGlobalHandler((error, isFatal) => {\n    TestFairy.logException(error);\n    originalGlobalHandler.handleException(error, isFatal);\n});\n"})})]}),(0,n.jsxs)(i.A,{value:"native",children:[(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:"TestFairySDK.logException(<Error>);\n"})}),"Example",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:"// Be sure to import TestFairy\nimport { TestFairySDK } from 'nativescript-testfairy';\n\nvar error = new Error(\"Some Message\");\nTestFairySDK.logException(error);\n"})}),"We recommend adding a listener to the window to capture error statements, automatically sending the exception to TestFairy sessions. One suggestion we have is to add a method that looks like this:",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:'window.addEventListener("error", function(e) {\n    TestFairy.logException(e);\n});\n'})})]})]})]})}function h(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>o});t(96540);var n=t(34164);const s={tabItem:"tabItem_Ymn6"};var a=t(74848);function o(e){let{children:r,hidden:t,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,o),hidden:t,children:r})}},11470:(e,r,t)=>{t.d(r,{A:()=>k});var n=t(96540),s=t(34164),a=t(23104),o=t(56347),i=t(205),l=t(57485),c=t(31682),d=t(70679);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function g(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??function(e){return u(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:s}}=e;return{value:r,label:t,attributes:n,default:s}}))}(t);return function(e){const r=(0,c.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function p(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function h(e){let{queryString:r=!1,groupId:t}=e;const s=(0,o.W6)(),a=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,l.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const r=new URLSearchParams(s.location.search);r.set(a,e),s.replace({...s.location,search:r.toString()})}),[a,s])]}function m(e){const{defaultValue:r,queryString:t=!1,groupId:s}=e,a=g(e),[o,l]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:a}))),[c,u]=h({queryString:t,groupId:s}),[m,y]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[s,a]=(0,d.Dv)(t);return[s,(0,n.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:s}),x=(()=>{const e=c??m;return p({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{x&&l(x)}),[x]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),y(e)}),[u,y,a]),tabValues:a}}var y=t(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(74848);function j(e){let{className:r,block:t,selectedValue:n,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const r=e.currentTarget,t=l.indexOf(r),s=i[t].value;s!==n&&(c(r),o(s))},u=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;r=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;r=l[t]??l[l.length-1];break}}r?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},r),children:i.map((e=>{let{value:r,label:t,attributes:a}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>l.push(e),onKeyDown:u,onClick:d,...a,className:(0,s.A)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":n===r}),children:t??r},r)}))})}function b(e){let{lazy:r,children:t,selectedValue:a}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:o.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==a})))})}function v(e){const r=m(e);return(0,f.jsxs)("div",{className:(0,s.A)("tabs-container",x.tabList),children:[(0,f.jsx)(j,{...r,...e}),(0,f.jsx)(b,{...r,...e})]})}function k(e){const r=(0,y.A)();return(0,f.jsx)(v,{...e,children:u(e.children)},String(r))}},28453:(e,r,t)=>{t.d(r,{R:()=>o,x:()=>i});var n=t(96540);const s={},a=n.createContext(s);function o(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);