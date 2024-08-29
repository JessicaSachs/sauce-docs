"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[55344],{10418:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>h});var s=t(74848),r=t(28453),a=t(86025);const n={id:"app-crash-logs",title:"App Crash Logs",sidebar_label:"App Crash Logs"},o=void 0,l={id:"mobile-apps/features/mobile-app-diagnostics/app-crash-logs",title:"App Crash Logs",description:"The App Crash Logs feature on Sauce Labs' Real Device Cloud (RDC) platform facilitates the automatic capture and display of crash data, both during live and automated testing. This eliminates the necessity to integrate an SDK or connect crash reporting tools to our system.",source:"@site/docs/mobile-apps/features/mobile-app-diagnostics/app-crash-logs.md",sourceDirName:"mobile-apps/features/mobile-app-diagnostics",slug:"/mobile-apps/features/mobile-app-diagnostics/app-crash-logs",permalink:"/sauce-docs/pr-preview/pr-2916/mobile-apps/features/mobile-app-diagnostics/app-crash-logs",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/mobile-apps/features/mobile-app-diagnostics/app-crash-logs.md",tags:[],version:"current",lastUpdatedBy:"kristofmuhi",lastUpdatedAt:172492915e4,frontMatter:{id:"app-crash-logs",title:"App Crash Logs",sidebar_label:"App Crash Logs"},sidebar:"docs",previous:{title:"App Logs",permalink:"/sauce-docs/pr-preview/pr-2916/mobile-apps/features/mobile-app-diagnostics/app-logs"},next:{title:"Device Vitals",permalink:"/sauce-docs/pr-preview/pr-2916/mobile-apps/features/mobile-app-diagnostics/device-vitals"}},c={},h=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Viewing the App Crash Logs for Real Devices\u200b",id:"viewing-the-app-crash-logs-for-real-devices",level:2},{value:"Viewing the App Crash in the Crashes Tab",id:"viewing-the-app-crash-in-the-crashes-tab",level:3},{value:"Viewing the App Crashes in Error Reporting",id:"viewing-the-app-crashes-in-error-reporting",level:3},{value:"Downloading the App Crash Log",id:"downloading-the-app-crash-log",level:2},{value:"Limitations",id:"limitations",level:2},{value:"More Information",id:"more-information",level:2}];function p(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.p,{children:"The App Crash Logs feature on Sauce Labs' Real Device Cloud (RDC) platform facilitates the automatic capture and display of crash data, both during live and automated testing. This eliminates the necessity to integrate an SDK or connect crash reporting tools to our system."}),"\n",(0,s.jsx)(i.p,{children:"Through the App Crash Logs feature, users gain access to a centralized view encompassing an array of app diagnostic signals. This expedites the debugging process for teams and reduces issue resolution time. Our primary objective is to establish expedited feedback loops for developers, enabling the early identification of risks and ensuring comprehensive coverage within the development cycle. With this enhanced capability, teams can effectively prioritize errors, crashes, and test failures based on complete data and context, focusing their efforts on the most critical issues."}),"\n",(0,s.jsxs)(i.p,{children:["Our tool has the capability to detect and record fatal errors (crashes) that occur during the testing of both iOS and Android apps. Specifically for Android apps, this information is sent to ",(0,s.jsx)(i.a,{href:"/error-reporting/getting-started/",children:"Error Reporting"}),", enabling the viewing of detailed call stack information. Furthermore, our interface also renders all non-fatal errors and warnings originating from the native application visible. This feature streamlines debugging and facilitates seamless integration with other Mobile App Diagnostics components, ultimately enhancing issue identification and resolution efficiency."]}),"\n",(0,s.jsx)(i.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["A Sauce Labs account (",(0,s.jsx)(i.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,s.jsx)(i.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")"]}),"\n",(0,s.jsx)(i.li,{children:"A native Android, iOS, or iPadOS mobile app"}),"\n",(0,s.jsx)(i.li,{children:"Make sure instrumentation is enabled, no other configuration is required."}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"viewing-the-app-crash-logs-for-real-devices",children:"Viewing the App Crash Logs for Real Devices\u200b"}),"\n",(0,s.jsxs)(i.p,{children:["The App Crash Logs feature is automatically activated when the ",(0,s.jsx)(i.a,{href:"/mobile-apps/features/mobile-app-diagnostics/interactions/#using-interactions-for-real-devices",children:"Instrumentation feature"})," is enabled. Upon detecting a crash, our system will exhibit an ",(0,s.jsx)(i.code,{children:"App Crashed"})," label for the corresponding test result, regardless of the test's status."]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("img",{src:(0,a.Ay)("img/mobile-apps/app-crash-scr1.png"),alt:"Mobile app settings navigation",width:"900"}),"\n",(0,s.jsxs)(i.p,{children:["When you navigate to the ",(0,s.jsx)(i.a,{href:"/mobile-apps/live-testing/live-mobile-app-testing/",children:"Live Test Results"})," or ",(0,s.jsx)(i.a,{href:"/mobile-apps/automated-testing/",children:"Automated Test Results"})," page, you can view the collected crashes in the Crashes tab. The collected crashes are presented in the context of their respective test cases, videos, and interactions. This centralized view is designed to enable efficient collaboration within your team and improve time to resolution for any issues that may arise."]}),"\n",(0,s.jsx)(i.h3,{id:"viewing-the-app-crash-in-the-crashes-tab",children:"Viewing the App Crash in the Crashes Tab"}),"\n",(0,s.jsx)("img",{src:(0,a.Ay)("img/mobile-apps/app-crash-scr2.png"),alt:"Mobile app settings navigation",width:"800"}),"\n",(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.code,{children:"crash.json"})," file provides information on the stack trace, methods, classes, and lines of code that were being executed before the fatal error occurred. This information facilitates the identification of the root cause of the crash, enabling your team to address the underlying issues in a timely and effective manner."]}),"\n",(0,s.jsxs)(i.p,{children:["In the Crashes tab, you will also find a ",(0,s.jsx)(i.strong,{children:"View Crash in Error Reporting"})," link, which directs you to ",(0,s.jsx)(i.a,{href:"/error-reporting/getting-started/",children:"Error Reporting"})," for a detailed view of the crash logs."]}),"\n",(0,s.jsx)(i.p,{children:"Similarly, in the Automated Test section, the Commands tab includes a label directly linked to the Error Reporting."}),"\n",(0,s.jsx)("img",{src:(0,a.Ay)("/img/mobile-apps/rdc-er-integration/crashes-link.png"),alt:"view crash in error reporting link in Crashes tab",width:"700"}),"\n",(0,s.jsx)(i.h3,{id:"viewing-the-app-crashes-in-error-reporting",children:"Viewing the App Crashes in Error Reporting"}),"\n",(0,s.jsx)(i.p,{children:"While the Crashes Tab contains the stack trace, which can be useful for initial debugging of the root cause, more comprehensive insights are available within Error Reporting. Moreover, Error Reporting is the sole location to access callstack details for native crashes."}),"\n",(0,s.jsx)("img",{src:(0,a.Ay)("/img/mobile-apps/rdc-er-integration/interactions-link.png"),alt:"view crash in error reporting link in Interactions tab",width:"700"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(i.p,{children:["Inside the Interactions tab, clicking on the ",(0,s.jsx)(i.strong,{children:"View Crash in Error Reporting"})," link will seamlessly direct you to the Error Reporting Debug view, specifically tailored to that session. Here, Error Reporting furnishes you with extensive information, encompassing threads and callstack specifics. This approach streamlines troubleshooting by grouping similar errors, thus avoiding repetitive debugging of identical issues."]}),"\n",(0,s.jsx)("img",{src:(0,a.Ay)("/img/mobile-apps/rdc-er-integration/debug-view.png"),alt:"Debug view in Error Reporting",width:"750"}),"\n",(0,s.jsx)(i.p,{children:"An alternative method for accessing the Backtrace instance to review the crash report is by clicking the Error Reporting link in the Sauce Labs sidebar."}),"\n",(0,s.jsx)("img",{src:(0,a.Ay)("/img/mobile-apps/rdc-er-integration/error-reporting-link.png"),alt:"Debug view in Error Reporting",width:"200"}),"\n",(0,s.jsx)(i.p,{children:"Hovering over the warning icon adjacent to the function name reveals the underlying cause, and further clarity can be gained by clicking the arrow in the popup to reveal associated details."}),"\n",(0,s.jsx)("img",{src:(0,a.Ay)("/img/mobile-apps/rdc-er-integration/callstack-error-details.png"),alt:"failure details",width:"750"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("img",{src:(0,a.Ay)("/img/mobile-apps/rdc-er-integration/error-details-more.png"),alt:"more details",width:"750"}),"\n",(0,s.jsxs)(i.p,{children:["Live sessions may entail multiple crashes. To streamline the identification of crashes occurring during RDC testing, the ",(0,s.jsx)(i.strong,{children:"Attributes"})," Tab presents designated attributes labeled as ",(0,s.jsx)(i.code,{children:"sauce.<someattribute>"}),"."]}),"\n",(0,s.jsx)("img",{src:(0,a.Ay)("/img/mobile-apps/rdc-er-integration/sauce-attributes.png"),alt:"view crash in error reporting link in Crashes tab",width:"750"}),"\n",(0,s.jsx)(i.h2,{id:"downloading-the-app-crash-log",children:"Downloading the App Crash Log"}),"\n",(0,s.jsx)(i.p,{children:"You can download the crash log as a text file to save and share with Sauce Labs support for further analysis. This feature allows you to keep a record of the crash logs and use them for future reference or troubleshooting:"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("img",{src:(0,a.Ay)("img/mobile-apps/app-crash-scr3.png"),alt:"Mobile app settings navigation",width:"700"}),"\n",(0,s.jsxs)(i.admonition,{type:"note",children:[(0,s.jsx)(i.p,{children:"You can also download the results using the API call below and send it to your development team:"}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-java",children:"curl --compressed \\\n-O https://{SAUCE_USERNAME}:{SAUCE_ACCESS_KEY}@{DATA_CENTER}.saucelabs.com/v1/rdc/jobs/{JOB_ID}/crash.json`\n"})})]}),"\n",(0,s.jsx)(i.h2,{id:"limitations",children:"Limitations"}),"\n",(0,s.jsx)(i.admonition,{type:"note",children:(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Does not capture hangs and cross-platform development frameworks, like React Native and .NET MAUI"}),"\n",(0,s.jsx)(i.li,{children:"Emulators/Simulators are not supported."}),"\n",(0,s.jsx)(i.li,{children:"If you have a native crash reporting SDK in your application (including Backtrace), this feature will override it; therefore, you will not see the crash report in your existing system."}),"\n"]})}),"\n",(0,s.jsx)(i.h2,{id:"more-information",children:"More Information"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"/test-results",children:"Sauce Labs Test Results"})}),"\n"]})]})}function d(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>n,x:()=>o});var s=t(96540);const r={},a=s.createContext(r);function n(e){const i=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),s.createElement(a.Provider,{value:i},e.children)}}}]);