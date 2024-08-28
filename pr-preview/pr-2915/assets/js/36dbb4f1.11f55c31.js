"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[4683],{59378:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>h});var s=n(74848),i=n(28453),r=n(86025);const o={id:"load-testing",title:"Load Testing with API Testing",sidebar_label:"API Load Testing"},a=void 0,l={id:"api-testing/load-testing",title:"Load Testing with API Testing",description:"The Sauce Labs API Testing load testing feature allows you to stress your endpoints using an existing functional test.",source:"@site/docs/api-testing/load-testing.md",sourceDirName:"api-testing",slug:"/api-testing/load-testing",permalink:"/sauce-docs/pr-preview/pr-2915/api-testing/load-testing",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/load-testing.md",tags:[],version:"current",lastUpdatedBy:"Tian Feng",lastUpdatedAt:1724880664e3,frontMatter:{id:"load-testing",title:"Load Testing with API Testing",sidebar_label:"API Load Testing"},sidebar:"docs",previous:{title:"API Mocking Server",permalink:"/sauce-docs/pr-preview/pr-2915/api-testing/mocking"},next:{title:"API Contract Testing",permalink:"/sauce-docs/pr-preview/pr-2915/api-testing/contract-testing"}},d={},h=[{value:"Run Your Load Test Agent",id:"run-your-load-test-agent",level:2},{value:"Create and Run Load Tests in APIT",id:"create-and-run-load-tests-in-apit",level:2},{value:"Load Test Reports",id:"load-test-reports",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"The Sauce Labs API Testing load testing feature allows you to stress your endpoints using an existing functional test."}),"\n",(0,s.jsx)(t.h2,{id:"run-your-load-test-agent",children:"Run Your Load Test Agent"}),"\n",(0,s.jsx)(t.p,{children:"The first step is running your load test agent. The load agents run within your infrastructure. It\u2019s up to you to run all the agents connected to the cloud. To make identifying them easier, you can group them by pool ID, assigning the same ID to more than one agent. A pool ID is an identifier of a group of workers. There\u2019s no limit to the number of agents you can run. The only possible limitations are inherited from your infrastructure."}),"\n",(0,s.jsx)(t.p,{children:"To run an agent, execute the following command:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"docker run --pull always --rm \\\n--env SAUCE_URI=wss://<api_domain>/api-testing/ws/v4/loadtesting \\\n--env SAUCE_AUTH=<username>:<access_key> \\\n--env WORKER_ID=<worker_name> \\\n--env POOL_ID=<pool_name> \\\n--env MAX_VIRTUAL_USERS=<max_virtual_users> \\\nquay.io/saucelabs/loadtestingjs:latest\n"})}),"\n",(0,s.jsx)(t.p,{children:"This command will run the agent in a Docker container, but you can manage them in any infrastructure (for example, Kubernetes)."}),"\n",(0,s.jsxs)(t.p,{children:["Only two variables in the command are required: ",(0,s.jsx)(t.code,{children:"SAUCE_URI"})," and ",(0,s.jsx)(t.code,{children:"SAUCE_AUTH"}),"; all the others are optional and, if not provided, will be auto-generated. The system will generate random names for ",(0,s.jsx)(t.code,{children:"WORKER_ID"}),", ",(0,s.jsx)(t.code,{children:"POOL_ID"})," will remain empty, and the default value for ",(0,s.jsx)(t.code,{children:"MAX_VIRTUAL_USERS"})," is ",(0,s.jsx)(t.code,{children:"100"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["If your data center is ",(0,s.jsx)(t.code,{children:"EU Central 1"}),", replace ",(0,s.jsx)(t.code,{children:"api_domain"})," with ",(0,s.jsx)(t.code,{children:"api.eu-central-1.saucelabs.com"}),". If your data center is ",(0,s.jsx)(t.code,{children:"US West 1"}),", replace ",(0,s.jsx)(t.code,{children:"api_domain"})," with ",(0,s.jsx)(t.code,{children:"api.us-west-1.saucelabs.com"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"create-and-run-load-tests-in-apit",children:"Create and Run Load Tests in APIT"}),"\n",(0,s.jsx)(t.p,{children:"Once you have run the agents, you can create and run load tests in the API Testing platform."}),"\n",(0,s.jsx)(t.admonition,{type:"important",children:(0,s.jsxs)(t.p,{children:["We count 1 out of every 100 load testing executions against your monthly execution limit. To see how many executions you have remaining, in APIT, click ",(0,s.jsx)(t.strong,{children:"Activity"})," > ",(0,s.jsx)(t.strong,{children:"Usage By Month"}),". On the ",(0,s.jsx)(t.strong,{children:"Usage By Month"})," page, the ",(0,s.jsx)(t.strong,{children:"Monthly Usage Status"})," shows the executions you have remaining for the month."]})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["In Sauce Labs, click ",(0,s.jsx)(t.strong,{children:"API Testing"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["On the ",(0,s.jsx)(t.strong,{children:"Tests"})," page, next to the test you want to run a load test on, click the ",(0,s.jsx)(t.strong,{children:"Load Test"})," icon."]}),"\n",(0,s.jsx)("img",{src:(0,r.Ay)("/img/api-testing/load-testing-nav-rebrand.webp"),alt:"The Load Test icon"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"Load testing only works with published tests. If you change a published test, and then run a load test without re-publishing it, the load test will be run on the published version, not the updated one."})}),"\n",(0,s.jsxs)(t.ol,{start:"3",children:["\n",(0,s.jsxs)(t.li,{children:["On the tests page, click ",(0,s.jsx)(t.strong,{children:"Create Load test"}),"."]}),"\n"]}),"\n",(0,s.jsx)("img",{src:(0,r.Ay)("/img/api-testing/create-load-test-button-rebrand.webp"),alt:"The Create Load test button"}),"\n",(0,s.jsxs)(t.ol,{start:"4",children:["\n",(0,s.jsxs)(t.li,{children:["On the ",(0,s.jsx)(t.strong,{children:"Create Load test"})," page, enter the relevant information for your test:"]}),"\n"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Name"})," - The name to assign to the load test profile."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Description"})," - A description of the test."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Ramp up"})," - The time the test will take to achieve the maximum engagement. This can be any value (expressed in seconds) less than or equal to the duration."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Duration"})," - The time to stress your test (in minutes)."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Intensity map"})," - Here you can set up the aggressiveness of the virtual users. Each virtual user will repeatedly execute the provided test. At intensity 100, it will relentlessly start a new cycle right after a cycle is completed. As you lower the intensity, the virtual users will take breaks between cycles. As not all virtual users will complete a cycle at the same time, the breaks will create a more distributed, lower intensity, but same complexity volume of requests."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Agents"})," - The available agents (pools/workers) and the max virtual users you can set up for each one. This is the only mandatory field without any default, so you need to manually select the agents you want to set up. If these are not set up you will not be able to save or run the test."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"If you have saved a load test with an agent that is currently offline, you will see an alert and the system will prevent you from running the test with it. You will see the same alert if you are trying to use the same agent for more tests but there are no virtual users available."}),"\n",(0,s.jsx)("img",{src:(0,r.Ay)("/img/api-testing/load-test-agents-offline.png"),alt:"Alert that agents are offline",width:"400"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Virtual users"})," - The number of active users per agent you want to simulate. The value can be any value that is less than or equal to the max virtual users available for that agent. If more than one agent is selected, the lesser virtual users value is the max number of virtual users you can set up. If you try to set more agents than the available you will see an error message."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Environments"})," - The environment dropdown allows you to select an environment to run the load test with or, if you haven't one already, you can create a new one.\nFor more information, see ",(0,s.jsx)(t.a,{href:"/api-testing/environments/",children:"Creating Environments for Tests"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"Variables and snippets in the Vault (Company/Project) are used by default, without the need to select them."})}),"\n",(0,s.jsx)(t.p,{children:"You can set up multiple profiles for each test, from less aggressive to very aggressive, or with varying durations. The only limitations are those inherited from your infrastructure."}),"\n",(0,s.jsx)("img",{src:(0,r.Ay)("/img/api-testing/create-load-test-rebrand.webp"),alt:"The Create Load test page"}),"\n",(0,s.jsxs)(t.ol,{start:"5",children:["\n",(0,s.jsxs)(t.li,{children:["Click ",(0,s.jsx)(t.strong,{children:"Save and Run"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Once you have created and saved a load test, the configuration will be saved for future use. To access the list of previously saved configurations for a specific test, click the load test icon in the test list."}),"\n",(0,s.jsx)(t.h2,{id:"load-test-reports",children:"Load Test Reports"}),"\n",(0,s.jsxs)(t.p,{children:["The execution of a load test will generate a real-time report that is updated every minute. To stop a report before it is complete, click ",(0,s.jsx)(t.strong,{children:"Stop"}),"."]}),"\n",(0,s.jsx)("img",{src:(0,r.Ay)("/img/api-testing/load-test-report-details-environments.webp"),alt:"Load Test Report Details",width:"600"}),"\n",(0,s.jsx)(t.p,{children:"Load test reports include the following details:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Outcome"})," - The status of the test:","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Running - The test is running."}),"\n",(0,s.jsx)(t.li,{children:"Stopped - The test has been stopped manually."}),"\n",(0,s.jsx)(t.li,{children:"Completed - The test is complete."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Load Test"})," - The name of the load test (assigned at creation)."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Test"})," - The name of the test you are running the load test on."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Project"})," - The project that contains the test."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Start"})," - The start date and time of the test."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"End"})," - The end date and time of the test."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"User"})," - The user that executed the test."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Environment"})," - The environment selected for running the test (if any)."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Agents"})," - The agents used to run the test."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Virtual Users"})," - The number of virtual users for the execution of the test."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Failed Tests"})," - The number of load test execution failures. This will only be visible if there were failures."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"Footprint"})," dropdown shows all the endpoints the test is calling, which you can use to filter to a specific endpoint. The default value shows the data for All the endpoints. For best results, set up footprints to ensure the report is readable. For more information, see ",(0,s.jsx)(t.a,{href:"/api-testing/composer#improving-metrics",children:"Improving Metrics"}),"."]}),"\n",(0,s.jsx)("img",{src:(0,r.Ay)("/img/api-testing/load-test-footprint.png"),alt:"The Footprint dropdown",width:"200"}),"\n",(0,s.jsx)(t.p,{children:"The Summary dynamically shows totals of Response time (Average, 90th percentile, Maximum, and Minimum), Requests (Total requests and Failures), and Status codes based on the selected Footprint."}),"\n",(0,s.jsx)("img",{src:(0,r.Ay)("/img/api-testing/load-test-summary.webp"),alt:"The Summary section",width:"600"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"Response time"})," graph shows the response time for all endpoints or for a specific endpoint. In the graph, you can see the maximum, minimum, average, and the 90th percentile. Once the test is complete, you can click any of the report measurements to remove them from the display."]}),"\n",(0,s.jsx)("img",{src:(0,r.Ay)("/img/api-testing/load-testing-report-response-time.png"),alt:"Response time graph",width:"400"}),"\n",(0,s.jsx)("img",{src:(0,r.Ay)("/img/api-testing/load-testing-report-response-time-2.png"),alt:"Response time graph",width:"400"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"Requests"})," graph shows the number of requests and the number of failures. Click any of the measurement labels to remove them from the display."]}),"\n",(0,s.jsx)("img",{src:(0,r.Ay)("/img/api-testing/load-testing-report-requests.png"),alt:"Requests graph",width:"400"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"Status codes"})," graph shows the status codes the test has generated, as well as any connection codes, which are denoted with a negative number."]}),"\n",(0,s.jsx)(t.p,{children:"Negative status codes represent connectivity issues:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"-1 - Connection refused"}),"\n",(0,s.jsx)(t.li,{children:"-2 - Timeout"}),"\n",(0,s.jsx)(t.li,{children:"-3 - Unknown host"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Click any of the measurement labels to remove them from the display."}),"\n",(0,s.jsx)("img",{src:(0,r.Ay)("/img/api-testing/load-test-report-status-codes.png"),alt:"Status codes graph",width:"400"}),"\n",(0,s.jsxs)(t.p,{children:["The data inside each graph can be downloaded in a CSV file. If the footprint is set to ",(0,s.jsx)(t.code,{children:"All"}),", the file will contain the data for all endpoints; if a specific footprint is selected, the file will contain the data for only that endpoint."]}),"\n",(0,s.jsxs)(t.p,{children:["Once the test is completed, the ",(0,s.jsx)(t.strong,{children:"Failures"})," section will be shown at the bottom of the report. In this section, you will see the 100 most recent failures that occurred during the test. There will be one row for each test execution, and each row includes the date and time, the number of failures, and a link to the specific report for that failure."]}),"\n",(0,s.jsx)("img",{src:(0,r.Ay)("/img/api-testing/load-test-failures-report.webp"),alt:"Load tests failures report"}),"\n",(0,s.jsxs)(t.p,{children:["Load test reports can be accessed on the project dashboard under ",(0,s.jsx)(t.strong,{children:"Load Tests"}),"."]}),"\n",(0,s.jsx)("img",{src:(0,r.Ay)("/img/api-testing/load-test-dashboard-nav-rebrand.webp"),alt:"Load tests on the dashboard"})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var s=n(96540);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);