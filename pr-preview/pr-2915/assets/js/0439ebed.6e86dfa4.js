"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[84317],{95607:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>h,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var i=s(74848),n=s(28453),r=s(86025);const o={id:"trends",title:"Comparing Statistical Trends",sidebar_label:"Trends",description:"See how grouping tests reveals outcome patterns across isolated variables, such as browser, operating system, or date to optimize your tests."},a=void 0,l={id:"insights/trends",title:"Comparing Statistical Trends",description:"See how grouping tests reveals outcome patterns across isolated variables, such as browser, operating system, or date to optimize your tests.",source:"@site/docs/insights/trends.md",sourceDirName:"insights",slug:"/insights/trends",permalink:"/sauce-docs/pr-preview/pr-2915/insights/trends",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/insights/trends.md",tags:[],version:"current",lastUpdatedBy:"Tian Feng",lastUpdatedAt:1724880664e3,frontMatter:{id:"trends",title:"Comparing Statistical Trends",sidebar_label:"Trends",description:"See how grouping tests reveals outcome patterns across isolated variables, such as browser, operating system, or date to optimize your tests."},sidebar:"docs",previous:{title:"Job History",permalink:"/sauce-docs/pr-preview/pr-2915/insights/history"},next:{title:"Usage",permalink:"/sauce-docs/pr-preview/pr-2915/insights/usage-report"}},h={},d=[{value:"Drilling Down on Visualizations",id:"drilling-down-on-visualizations",level:2},{value:"Using Trends Data to Improve Testing",id:"using-trends-data-to-improve-testing",level:2},{value:"Comparing Test Results on Chrome 50 and 55",id:"comparing-test-results-on-chrome-50-and-55",level:3},{value:"Chrome 50",id:"chrome-50",level:4},{value:"Chrome 55",id:"chrome-55",level:4},{value:"Conclusions",id:"conclusions",level:4},{value:"Next Steps",id:"next-steps",level:4},{value:"Using the Efficiency Metric to Optimize Tests",id:"using-the-efficiency-metric-to-optimize-tests",level:3},{value:"Benchmarking Efficiency",id:"benchmarking-efficiency",level:4},{value:"Improving Efficiency",id:"improving-efficiency",level:4}];function c(e){const t={a:"a",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.strong,{children:"Trends"})," section of the Insights feature provides a variety of data visualizations to give you a holistic perspective of your test outcomes. The following table describes each section."]}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Section"}),(0,i.jsx)("th",{children:"Statistical Information"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"Number of Jobs"})}),(0,i.jsx)("td",{children:"The total number of tests run during the specified time period, separated in increments relative to the overall duration. For example, increments may be every 10 minutes for a time period of one hour, while increments might be daily for a 30-day time period."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"Pass/Fail Rate"})}),(0,i.jsxs)("td",{children:["For each increment in the time period, the percentage of tests that:",(0,i.jsx)("br",{}),(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Completed"}),": Ran to completion, but did not have a pass or fail status."]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Passed"}),": Ran to completion with a status of Passed."]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Failed"}),": Ran to completion with a status of Failed."]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Errored"}),": Did not run to completion due to a fatal error."]})]})]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"Number of Errors"})}),(0,i.jsx)("td",{children:"The total number or errors that occurred during the specified time period, sorted by individual error message."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"Build and Job Statistics"})}),(0,i.jsxs)("td",{children:["A snapshot of all tests run during the time period, displayed in separate tabs based on whether the test is or is not assigned a Build ID. For each test listed, basic data about the time the test was executed, the time it took to run, the Sauce Labs user who ran it, and its outcome.",(0,i.jsx)("br",{}),"\nTests in the ",(0,i.jsx)("b",{children:"Builds"})," tab have an additional statistic \u2014 ",(0,i.jsx)("i",{children:"Efficiency"})," \u2014 that indicates whether the tests in the build run in parallel to optimize the execution time for the entire build.",(0,i.jsx)("br",{}),"\nTests in the ",(0,i.jsx)("b",{children:"Jobs without build"})," tab have an additional statistic \u2014 ",(0,i.jsx)("i",{children:"Error"})," \u2014 which displays the error message for the test where it was interrupted.",(0,i.jsx)("br",{}),"\nThis visualization can be further filtered to show only tests with a failed and/or errored status."]})]})]}),"\n",(0,i.jsx)(t.p,{children:"The above sections are available for Virtual Cloud (VDC) and Real Device (RDC)."}),"\n",(0,i.jsxs)(t.p,{children:["You can also filter the results by ",(0,i.jsx)(t.strong,{children:"Owner"}),", ",(0,i.jsx)(t.strong,{children:"Build"}),", ",(0,i.jsx)(t.strong,{children:"Operating System (OS)"}),", ",(0,i.jsx)(t.strong,{children:"Browser"})," (in VDC) or ",(0,i.jsx)(t.strong,{children:"Device"})," (in RDC), ",(0,i.jsx)(t.strong,{children:"Device Group"})," (in RDC), ",(0,i.jsx)(t.strong,{children:"Framework"}),", ",(0,i.jsx)(t.strong,{children:"Tag"})," and ",(0,i.jsx)(t.strong,{children:"Time Period"}),". The Time Period is set by default to 7 days, but options are also available: 15 minutes, 1 hour, 6 hours, 12 hours, 1 day, and 30 days, or you can define start and end dates by switching to the ",(0,i.jsx)(t.strong,{children:"Absolute"})," tab in the date range filter."]}),"\n",(0,i.jsx)(t.h2,{id:"drilling-down-on-visualizations",children:"Drilling Down on Visualizations"}),"\n",(0,i.jsxs)(t.p,{children:["The visualizations shown in the ",(0,i.jsx)(t.strong,{children:"Trends"})," section are interactive; you can hover over any of the bars to view a statistics overview for that increment, or you can click-drag across the bars to redraw the graph for a narrower time period. The latter action updates the time period filter at the top of the page accordingly."]}),"\n",(0,i.jsx)(t.h2,{id:"using-trends-data-to-improve-testing",children:"Using Trends Data to Improve Testing"}),"\n",(0,i.jsx)(t.p,{children:"The trend visualizations can provide you with a quick overview of what's going on with your tests as a whole, and applying filters to the visualizations enables you to dig into the data to generate answers to specific questions about test performance. Let's look at an example showing how we can use these tools to answer real questions about our site and our tests."}),"\n",(0,i.jsx)(t.h3,{id:"comparing-test-results-on-chrome-50-and-55",children:"Comparing Test Results on Chrome 50 and 55"}),"\n",(0,i.jsx)(t.p,{children:"To find out how well a site under test performs against a browser update, we start by filtering our data to isolate only the relevant tests \u2014 those that are owned by the same organization \u2014 were run over the past seven days on Windows 7 for Chrome 55 and Chrome 50. This is a typical use case to compare a set of new tests for a recent browser release against the baseline of an established set of tests for a previous version of the same browser."}),"\n",(0,i.jsx)(t.h4,{id:"chrome-50",children:"Chrome 50"}),"\n",(0,i.jsx)(t.p,{children:"As the figure below shows, more than 3,500 tests were run on Windows 7 for Chrome 50 in the past seven days, with a 41% pass rate."}),"\n",(0,i.jsx)("img",{src:(0,r.Ay)("img/insights/chrome50.webp"),alt:"Chrome 50 Trends",width:"750"}),"\n",(0,i.jsx)(t.p,{children:"There are no errors, indicating that this is a robust set of tests, but a large number of tests ran to completion without reporting a Pass or Fail status. Hovering over one of the bars in the graph shows that these no-status completions account for about 65% of the tests in every time increment."}),"\n",(0,i.jsxs)(t.p,{children:["While the tests themselves perform well, it's difficult to judge how well the site functions when completed tests do not offer a definitive outcome. To provide a better baseline for cross-browser comparison, ",(0,i.jsx)(t.a,{href:"/basics/test-config-annotation/test-annotation",children:"annotate"})," these tests with relevant status using the Jobs API or the Selenium Javascript Executor."]}),"\n",(0,i.jsx)(t.h4,{id:"chrome-55",children:"Chrome 55"}),"\n",(0,i.jsx)(t.p,{children:"Now let's change the Browser filter to Chrome 55where nearly 4000 tests ran during the same seven-day period."}),"\n",(0,i.jsx)("img",{src:(0,r.Ay)("img/insights/chrome55.png"),alt:"Chrome 55 Trends",width:"750"}),"\n",(0,i.jsx)(t.p,{children:"The pass rate for these tests is lower than Chrome 55, at 32% and we still see a lot of completed tests without status. We see some failures showing up, but there are no errors, indicating that the tests themselves seem to execute successfully for both browser versions."}),"\n",(0,i.jsx)(t.h4,{id:"conclusions",children:"Conclusions"}),"\n",(0,i.jsx)(t.p,{children:"In summary, we see from this browser version comparison:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Overall coverage is consistent."}),"\n",(0,i.jsx)(t.li,{children:"Test performance is good for both, with low error rates."}),"\n",(0,i.jsx)(t.li,{children:"Site functionality is ambiguous for both browsers due to the high number of completed tests with no status."}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"next-steps",children:"Next Steps"}),"\n",(0,i.jsx)(t.p,{children:"Since our comparison suggests that the tests themselves are strong, but yielded some uncertainty about how well the site performs in either Chrome version, we isolate the time interval that contains the first failing test at 4:00PM on February 7. Then, we can drill down to the five-minute scale to find the exact test that failed."}),"\n",(0,i.jsx)("img",{src:(0,r.Ay)("img/insights/5sec_interval.png"),alt:"Failure Interval",width:"600"}),"\n",(0,i.jsxs)(t.p,{children:["Once we have isolated the failing test, we can check the ",(0,i.jsx)(t.strong,{children:"Builds"})," list and find the failing test, ",(0,i.jsx)(t.strong,{children:"TestCompareBrowserVersion"}),". Click that test name to see the ",(0,i.jsx)(t.strong,{children:"Test Details"})," page, where you can review the videos, screenshots, logs, and metadata that can help you determine why the test failed for Chrome 55."]}),"\n",(0,i.jsx)("img",{src:(0,r.Ay)("img/insights/test_fail.png"),alt:"Failing Test",width:"600"}),"\n",(0,i.jsx)(t.h3,{id:"using-the-efficiency-metric-to-optimize-tests",children:"Using the Efficiency Metric to Optimize Tests"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.strong,{children:"Builds and Test Statistics"})," section of the ",(0,i.jsx)(t.strong,{children:"Trends"})," page provides an ",(0,i.jsx)(t.strong,{children:"Efficiency"})," metric for builds that indicates the percentage of tests in the build that are running in parallel."]}),"\n",(0,i.jsx)("img",{src:(0,r.Ay)("img/insights/build-efficiency.png"),alt:"Efficiency Metric Example",width:"600"}),"\n",(0,i.jsx)(t.h4,{id:"benchmarking-efficiency",children:"Benchmarking Efficiency"}),"\n",(0,i.jsx)(t.p,{children:"The Efficiency metric is expressed as a percentage because it is based on how long the build took to run as compared to the duration of the longest test within it. For example, let's say that Build A contains four tests with these run times:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Test"}),(0,i.jsx)(t.th,{children:"Run Time"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"T1"}),(0,i.jsx)(t.td,{children:"30 secs"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"T2"}),(0,i.jsx)(t.td,{children:"60 secs"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"T3"}),(0,i.jsx)(t.td,{children:"45 secs"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"T4"}),(0,i.jsx)(t.td,{children:"30 secs"})]})]})]}),"\n",(0,i.jsx)(t.p,{children:"In this build, T2 serves as the benchmark test because it takes the longest to run at 60 seconds. If the entire build takes 60 seconds to run, then it has achieved full efficiency, because all the tests are running in parallel, and the Efficiency metric would be 100%."}),"\n",(0,i.jsx)(t.p,{children:"Consider another example, Build B:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Test"}),(0,i.jsx)(t.th,{children:"Run Time"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"T1"}),(0,i.jsx)(t.td,{children:"15 secs"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"T2"}),(0,i.jsx)(t.td,{children:"20 secs"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"T3"}),(0,i.jsx)(t.td,{children:"10 secs"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"T4"}),(0,i.jsx)(t.td,{children:"45 secs"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"T5"}),(0,i.jsx)(t.td,{children:"30 secs"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"T7"}),(0,i.jsx)(t.td,{children:"10 secs"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"T8"}),(0,i.jsx)(t.td,{children:"20 secs"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"T9"}),(0,i.jsx)(t.td,{children:"15 secs"})]})]})]}),"\n",(0,i.jsx)(t.p,{children:"In this example, T4 serves as the benchmark for the build efficiency, because it takes the longest to run at 45 seconds. However, even if the test has complete parallelization (the entire build runs in 45 seconds), given that the majority of the tests are considerably shorter than 45 seconds, the overall efficiency of this build is still not optimal. Reducing the run time of T4 (and even T5) would improve the build efficiency."}),"\n",(0,i.jsx)(t.h4,{id:"improving-efficiency",children:"Improving Efficiency"}),"\n",(0,i.jsx)(t.p,{children:"An Efficiency score of less than 100% means that the entire build took longer to run than the longest test within it, which is an indicator that all the tests in the build are running in parallel. If, on the other hand, the build in our first example ran in 115 seconds compared to the longest test of 60 seconds, its efficiency would be around 52% because the tests are clearly not running in parallel."}),"\n",(0,i.jsx)(t.p,{children:"The following table provides some guidance for how you might improve your build efficiency based on your score."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Efficiency"}),(0,i.jsx)(t.th,{children:"Degree of Parallelization"}),(0,i.jsx)(t.th,{children:"Guidance"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"0%"}),(0,i.jsx)(t.td,{children:"Sequential"}),(0,i.jsx)(t.td,{children:"The build took as long to run as the sum of each run time of all the tests within it, which means that the tests ran in sequential order. Consider using a test framework to run your tests in parallel."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"1 - 90%"}),(0,i.jsx)(t.td,{children:"Semi-parallel"}),(0,i.jsx)(t.td,{children:"The build took less time to run than the sum of all test run times, which means that some tests ran in parallel and some ran in sequential order. Consider reorganizing your tests into small, atomic, and autonomous validations of very focused functionality to make sure they aren't dependent on one another to complete before they can execute."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"91 - 100%"}),(0,i.jsx)(t.td,{children:"Parallel"}),(0,i.jsx)(t.td,{children:"The build took approximately the same amount of time to run as the longest test within it, meaning that most, if not all, the tests ran simultaneously. You can still potentially improve the overall efficiency of your build by breaking your longer running tests into smaller, shorter tests, if possible. In the benchmarking example for Build A, if T2 could be broken down into two tests that ran for 30 seconds each, you would improve the efficiency of that build by 25%, since the longest running test within it would be 45 seconds instead of 60 seconds."})]})]})]}),"\n",(0,i.jsxs)(t.p,{children:["See our ",(0,i.jsx)(t.a,{href:"https://saucelabs.com/blog/speeding-up-your-tests-short-tests-in-parallel",children:"Short Tests in Parallel"})," blog for a more comprehensive discussion about improving the speed and efficiency of your builds."]})]})}function u(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>a});var i=s(96540);const n={},r=i.createContext(n);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);