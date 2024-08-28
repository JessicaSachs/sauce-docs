"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[61500],{75308:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var n=r(74848),s=r(28453),i=r(86025);const o={id:"analyze",title:"Analyzing Performance Results",sidebar_label:"Results Analysis",description:"Drill into the results of your Sauce Labs performance testing to isolate and identify sources of performance degradation."},a=void 0,c={id:"performance/analyze",title:"Analyzing Performance Results",description:"Drill into the results of your Sauce Labs performance testing to isolate and identify sources of performance degradation.",source:"@site/docs/performance/analyze.md",sourceDirName:"performance",slug:"/performance/analyze",permalink:"/sauce-docs/pr-preview/pr-2914/performance/analyze",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/performance/analyze.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:172488024e4,frontMatter:{id:"analyze",title:"Analyzing Performance Results",sidebar_label:"Results Analysis",description:"Drill into the results of your Sauce Labs performance testing to isolate and identify sources of performance degradation."},sidebar:"docs",previous:{title:"Page Motion",permalink:"/sauce-docs/pr-preview/pr-2914/performance/motion"},next:{title:"Overview",permalink:"/sauce-docs/pr-preview/pr-2914/visual-testing"}},l={},h=[{value:"Viewing Performance Results in Sauce Labs",id:"viewing-performance-results-in-sauce-labs",level:2},{value:"Resetting Baselines for a Failed Test",id:"resetting-baselines-for-a-failed-test",level:2},{value:"Opening the Performance Report",id:"opening-the-performance-report",level:2},{value:"Performance Score",id:"performance-score",level:3},{value:"Viewing the Trace Report",id:"viewing-the-trace-report",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Every time you run a performance test, whether it is through the Speedo command line or an automation script testing page load or motion effects, the results of the test are compiled and displayed on Sauce Labs, and available to all members of your team for analysis and debugging."}),"\n",(0,n.jsx)(t.h2,{id:"viewing-performance-results-in-sauce-labs",children:"Viewing Performance Results in Sauce Labs"}),"\n",(0,n.jsxs)(t.p,{children:["From your Sauce Labs ",(0,n.jsx)(t.strong,{children:"Test Results"})," page, chose one of your completed Performance tests for an overview of its results."]}),"\n",(0,n.jsx)("img",{src:(0,i.Ay)("img/performance/perf-test-details.png"),alt:"Performance Overview",width:"800"}),"\n",(0,n.jsx)(t.p,{children:"From here, you can drill into a variety of specific details about the test:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Play the video of the test execution."}),"\n",(0,n.jsxs)(t.li,{children:["Click the tabs to see data about the test:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.strong,{children:"Commands"})," tab shows you the script associated with each test transition."]}),"\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.strong,{children:"Video"})," tab shows you the video of the test execution."]}),"\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.strong,{children:"Screenshots"})," tab shows the screenshot captured of the test session."]}),"\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.strong,{children:"Logs"})," tab lets you see the log data captured for the test and download the ",(0,n.jsx)(t.code,{children:"json.log"})," file."]}),"\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.strong,{children:"Network"})," tab shows you all the requests the test has made."]}),"\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.strong,{children:"Metadata"})," tab shows you the basic identity of the test, such as the Job ID, Name, and Build, which you may need to use if you are using this data in API calls or other testing."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["At the bottom of the interface, click the ",(0,n.jsx)(t.strong,{children:"Performance"})," tab for a score overview and access to the ",(0,n.jsx)(t.strong,{children:"Performance Report"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"resetting-baselines-for-a-failed-test",children:"Resetting Baselines for a Failed Test"}),"\n",(0,n.jsx)(t.p,{children:"When you expand the Performance tab, if any of the metrics in your test fall outside the established baseline, this is where you have the option to reset the baseline if you wish."}),"\n",(0,n.jsx)("img",{src:(0,i.Ay)("img/performance/perf-reset-base.png"),alt:"Reset Baseline",width:"750"}),"\n",(0,n.jsx)(t.h2,{id:"opening-the-performance-report",children:"Opening the Performance Report"}),"\n",(0,n.jsx)(t.p,{children:"The full Performance Report gives you more detail about the results of your test and its statistics tracked over time."}),"\n",(0,n.jsx)("img",{src:(0,i.Ay)("img/performance/perf-detail.png"),alt:"Performance Full Report",width:"750"}),"\n",(0,n.jsxs)(t.p,{children:["In this view, you can see the overall score for the test, plus individual scores for each metric measured in the test. You can click on any of the individual metrics to see a popup graphical representation of that metric's historical performance. You can then click the ",(0,n.jsx)(t.strong,{children:"View History"})," link within the popup window to bring up an interactive view of that graph in which you can hover over the graph to see values for that metric each time the test has been run. Use the drop down menu at the top left of the window to see the history graph for a different metric, or click the ",(0,n.jsx)(t.code,{children:"+"})," icon to show the graphs for two metrics concurrently, as illustrated in the following image."]}),"\n",(0,n.jsx)("img",{src:(0,i.Ay)("img/performance/perf-history.png"),alt:"Performance History Comparison",width:"750"}),"\n",(0,n.jsx)(t.h3,{id:"performance-score",children:"Performance Score"}),"\n",(0,n.jsx)(t.p,{children:"A performance score is a rating between 0 and 100 indicating how well your page is performing compared to the industry standard. 0 is the lowest possible score and indicates a serious performance issue, while 100 indicates a top-performing app."}),"\n",(0,n.jsxs)(t.p,{children:["The metric is similar to the performance score you can find in a ",(0,n.jsx)(t.a,{href:"https://developers.google.com/web/tools/lighthouse",children:"Google Lighthouse Report"}),". The scoring distribution is a log-normal distribution derived from the performance metrics of real website performance data on HTTPArchive."]}),"\n",(0,n.jsx)(t.p,{children:"The color-coding maps to these Performance score ranges:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"0 to 49 (slow): Red"}),"\n",(0,n.jsx)(t.li,{children:"50 to 89 (average): Orange"}),"\n",(0,n.jsx)(t.li,{children:"90 to 100 (fast): Green"}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Ref: ",(0,n.jsx)(t.a,{href:"https://web.dev/performance-scoring/#lighthouse-6",children:"https://web.dev/performance-scoring/#lighthouse-6"})]}),"\n",(0,n.jsx)(t.p,{children:"The score is a weighted average between:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"First Contentful Paint"}),"\n",(0,n.jsx)(t.li,{children:"Speed Index"}),"\n",(0,n.jsx)(t.li,{children:"Largest Contentful Paint"}),"\n",(0,n.jsx)(t.li,{children:"Time to Interactive"}),"\n",(0,n.jsx)(t.li,{children:"Total Blocking Time"}),"\n",(0,n.jsx)(t.li,{children:"Cumulative Layout Shift"}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["See ",(0,n.jsx)(t.a,{href:"/sauce-docs/pr-preview/pr-2914/performance/one-page#metric-values",children:"Metric Values"})," for definitions of each metric."]}),"\n",(0,n.jsx)(t.h2,{id:"viewing-the-trace-report",children:"Viewing the Trace Report"}),"\n",(0,n.jsxs)(t.p,{children:["Another useful tool that is accessible from the Performance Report is the Trace Report. Click the ",(0,n.jsx)(t.strong,{children:"View Trace"})," button in the top right of the Performance Report screen to open the Chrome DevTools webpage showing the Javascript method signatures in a hierarchical view for each thread in each process."]}),"\n",(0,n.jsx)("img",{src:(0,i.Ay)("img/performance/perf-trace.png"),alt:"Performance Trace Report",width:"750"}),"\n",(0,n.jsx)(t.p,{children:"The Trace Report contains information on everything that happened during the capturing process so you can get a better idea of how the Chrome browser is interacting with your website. You can inspect when JavaScript functions are being executed or when network requests are being made. The view is completely interactive so you can tailor the data displayed in a variety of ways to help you determine, for example, which JavaScript function has been blocking the main thread of the browser, causing a slow page load."})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>a});var n=r(96540);const s={},i=n.createContext(s);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);