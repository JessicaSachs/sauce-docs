"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[98172],{95189:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var s=i(74848),n=i(28453),l=i(86025);const r={id:"view-tree",title:"Explore View Tree",sidebar_label:"Explore View Tree"},a=void 0,o={id:"mobile-apps/features/mobile-app-diagnostics/view-tree",title:"Explore View Tree",description:"Explore View Tree is a feature that is designed to help you discover all the visible elements of your mobile application while developing your test scripts. It captures a snapshot of the user interface and allows you to navigate and explore the view objects of your native apps.",source:"@site/docs/mobile-apps/features/mobile-app-diagnostics/view-tree.md",sourceDirName:"mobile-apps/features/mobile-app-diagnostics",slug:"/mobile-apps/features/mobile-app-diagnostics/view-tree",permalink:"/sauce-docs/pr-preview/pr-2914/mobile-apps/features/mobile-app-diagnostics/view-tree",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/mobile-apps/features/mobile-app-diagnostics/view-tree.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:172488024e4,frontMatter:{id:"view-tree",title:"Explore View Tree",sidebar_label:"Explore View Tree"},sidebar:"docs",previous:{title:"Interactions",permalink:"/sauce-docs/pr-preview/pr-2914/mobile-apps/features/mobile-app-diagnostics/interactions"},next:{title:"Network Traffic Capture",permalink:"/sauce-docs/pr-preview/pr-2914/mobile-apps/features/network-capture"}},c={},d=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Using Explore View Tree for Real Devices",id:"using-explore-view-tree-for-real-devices",level:2},{value:"Accessing Explore View Tree",id:"accessing-explore-view-tree",level:2},{value:"Explore View Tree Attributes",id:"explore-view-tree-attributes",level:3},{value:"Limitations",id:"limitations",level:2},{value:"More Information",id:"more-information",level:2}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Explore View Tree is a feature that is designed to help you discover all the visible elements of your mobile application while developing your test scripts. It captures a snapshot of the user interface and allows you to navigate and explore the view objects of your native apps."}),"\n",(0,s.jsx)(t.p,{children:"Explore View Tree feature allows you to see, debug, analyze or determine the state of individual View components. It also informs you about global changes in the view tree."}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["You can use our ",(0,s.jsx)(t.a,{href:"/mobile-apps/features/appium-inspector/",children:"Appium Inspector capability"})," to inspect the App Source and attributes in real time during a Live Testing session!"]})}),"\n",(0,s.jsx)(t.p,{children:"The feature speeds up your debugging experience of QA SDET for automated test scripts, and expedites the debugging and validating View and UI-related issues. Finally, the Explore feature is a critical factor for easy validation of accessibility labels."}),"\n",(0,s.jsx)(t.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["A Sauce Labs account (",(0,s.jsx)(t.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,s.jsx)(t.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")"]}),"\n",(0,s.jsx)(t.li,{children:"A native Android, iOS, or iPadOS mobile app"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"using-explore-view-tree-for-real-devices",children:"Using Explore View Tree for Real Devices"}),"\n",(0,s.jsx)(t.p,{children:"By default, the Explore View Tree feature is enabled if the instrumentation feature is enabled."}),"\n",(0,s.jsx)(t.p,{children:"To enable instrumentation:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["In Sauce Labs, from the left navigation, click ",(0,s.jsx)(t.strong,{children:"App Management"}),"."]}),"\n"]}),"\n",(0,s.jsx)("img",{src:(0,l.Ay)("img/mobile-apps/app-logs5.png"),alt:"App Logs",width:"300"}),"\n",(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsx)(t.li,{children:"Upload your mobile app."}),"\n"]}),"\n",(0,s.jsx)("img",{src:(0,l.Ay)("img/mobile-apps/app-logs-8.png"),alt:"App Logs",width:"700"}),"\n",(0,s.jsxs)(t.ol,{start:"3",children:["\n",(0,s.jsxs)(t.li,{children:["After you\u2019ve uploaded your app, hover your mouse over your app, then select ",(0,s.jsx)(t.strong,{children:"Settings"}),"."]}),"\n"]}),"\n",(0,s.jsx)("img",{src:(0,l.Ay)("img/mobile-apps/app-logs-6.png"),alt:"App Logs",width:"700"}),"\n",(0,s.jsxs)(t.ol,{start:"4",children:["\n",(0,s.jsxs)(t.li,{children:["Under ",(0,s.jsx)(t.strong,{children:"Real Device Settings"}),", toggle ",(0,s.jsx)(t.strong,{children:"Instrumentation"})," to ",(0,s.jsx)(t.strong,{children:"Enabled"}),"."]}),"\n"]}),"\n",(0,s.jsx)("img",{src:(0,l.Ay)("img/mobile-apps/app-logs-7.png"),alt:"App Logs",width:"700"}),"\n",(0,s.jsx)(t.p,{children:"Now you can start your live or automated testing session. View Tree will be captured and be part of your test results."}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"The Explore View Tree feature works for all the automated test framework types."})}),"\n",(0,s.jsx)(t.h2,{id:"accessing-explore-view-tree",children:"Accessing Explore View Tree"}),"\n",(0,s.jsxs)(t.p,{children:["You can access the Explore View Tree from the ",(0,s.jsx)(t.a,{href:"/mobile-apps/live-testing/live-mobile-app-testing/",children:"Live Test Results"})," or ",(0,s.jsx)(t.a,{href:"/mobile-apps/automated-testing/",children:"Automated Test Results"})," page."]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["In Sauce Labs, click ",(0,s.jsx)(t.strong,{children:"LIVE"})," or ",(0,s.jsx)(t.strong,{children:"AUTOMATED"})," and then click ",(0,s.jsx)(t.strong,{children:"Test Results"}),"."]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("img",{src:(0,l.Ay)("img/mobile-apps/DEvice-Vitals-screenshot-2.png"),alt:"Mobile app settings navigation",width:"200"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("img",{src:(0,l.Ay)("img/mobile-apps/Device-Vitals-screenshot-7.png"),alt:"Mobile app settings navigation",width:"200"}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Select a test result from the list."}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("img",{src:(0,l.Ay)("img/mobile-apps/view-tree-screenshot-1.png"),alt:"Mobile app settings navigation",width:"800"}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Click on ",(0,s.jsx)(t.strong,{children:"Explore"})," button."]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("img",{src:(0,l.Ay)("img/mobile-apps/view-tree-screenshot-2.png"),alt:"Mobile app settings navigation",width:"600"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"The Explore View Tree feature will display the captured snapshots of detectable view changes:"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("img",{src:(0,l.Ay)("img/mobile-apps/view-tree-screenshot-4.png"),alt:"Mobile app settings navigation",width:"700"}),"\n",(0,s.jsx)(t.p,{children:"You can also download the results using the API call below:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:" curl --compressed \\\n-O https://{SAUCE_USERNAME}:{SAUCE_ACCESS_KEY}@{DATA_CENTER}.saucelabs.com/v1/rdc/jobs/{JOB_ID}/insights.json\n"})}),"\n",(0,s.jsx)(t.h3,{id:"explore-view-tree-attributes",children:"Explore View Tree Attributes"}),"\n",(0,s.jsx)(t.p,{children:"The following table lists the available attributes:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"ID"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The class identifier"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Visibility"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"A value that checks if the component is present in the View Tree"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Focusable"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"A value that provides additional information associated with accessibility"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Alpha"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"A value that describes how translucent or opaque the component is"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Enabled"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Checks the interactivity of the component"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"ContentDesc"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The accessibility description of a UI component"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Text"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"A text attribute of a UI component"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"limitations",children:"Limitations"}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Webviews and hybrid apps will have additional capture limitations."}),"\n",(0,s.jsx)(t.li,{children:"Emulators and Simulators are not supported."}),"\n"]})}),"\n",(0,s.jsx)(t.h2,{id:"more-information",children:"More Information"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/test-results",children:"Sauce Labs Test Results"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>a});var s=i(96540);const n={},l=s.createContext(n);function r(e){const t=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);