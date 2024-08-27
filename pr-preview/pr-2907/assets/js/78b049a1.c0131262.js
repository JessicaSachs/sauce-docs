"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[80203],{52819:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var n=s(74848),i=s(28453),r=s(86025);const a={id:"quickstart",title:"Sauce Labs API Testing Quickstart",sidebar_label:"Quickstart",description:"Learn how to quickly generate an API test using the payload from an API call or from a specification file."},l=void 0,o={id:"api-testing/quickstart",title:"Sauce Labs API Testing Quickstart",description:"Learn how to quickly generate an API test using the payload from an API call or from a specification file.",source:"@site/docs/api-testing/quickstart.md",sourceDirName:"api-testing",slug:"/api-testing/quickstart",permalink:"/sauce-docs/pr-preview/pr-2907/api-testing/quickstart",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/quickstart.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:172477197e4,frontMatter:{id:"quickstart",title:"Sauce Labs API Testing Quickstart",sidebar_label:"Quickstart",description:"Learn how to quickly generate an API test using the payload from an API call or from a specification file."},sidebar:"docs",previous:{title:"Getting Started",permalink:"/sauce-docs/pr-preview/pr-2907/api-testing"},next:{title:"Using Sauce Connect",permalink:"/sauce-docs/pr-preview/pr-2907/api-testing/sauce-connect"}},c={},d=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Create Project",id:"create-project",level:2},{value:"Create Test",id:"create-test",level:2},{value:"Send Request",id:"send-request",level:2},{value:"Generate Test",id:"generate-test",level:2},{value:"Run Test",id:"run-test",level:2},{value:"View Test Results",id:"view-test-results",level:2},{value:"Publish Your Test",id:"publish-your-test",level:2},{value:"Optional Next Steps",id:"optional-next-steps",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Details:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"As the number of APIs communicating with microservices in apps continues to increase, many bugs cannot be captured by UI testing alone. Our API Testing and Monitoring solution combines automated testing, reporting, debugging, diagnostics, and immediate data-driven insight in a centralized platform."}),"\n",(0,n.jsx)(t.p,{children:"Running a functional test on an API takes seconds and will display a pass/fail status as well as the cause(s) for any failures, such as a broken endpoint, API flow, or a bug in the app itself. You can then reuse functional tests as end-to-end monitoring tests that run continuously, thereby maintaining accurate and reliable feedback loops. And by developing APIs in parallel with your testing, you can accelerate working and improve quality throughout development, staging, and production."}),"\n",(0,n.jsx)(t.p,{children:"This Quickstart guide will get you up and running with a functional API Test. Let's get started!"}),"\n",(0,n.jsx)(t.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["A Sauce Labs account (",(0,n.jsx)(t.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,n.jsx)(t.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")."]}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["If your APIs are behind a firewall, you'll need to set up a ",(0,n.jsx)(t.a,{href:"/api-testing/sauce-connect",children:"Sauce Connect Proxy"})," tunnel before proceeding."]})}),"\n",(0,n.jsx)(t.h2,{id:"create-project",children:"Create Project"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Log in to Sauce Labs, then click ",(0,n.jsx)(t.strong,{children:"API Testing"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["From the list of test creation methods, click ",(0,n.jsx)(t.strong,{children:"Use HTTP Client"}),".",(0,n.jsx)("br",{}),(0,n.jsx)("img",{src:(0,r.A)("img/api-testing/newtestHTTP.webp"),alt:"Enter API URL",width:"550"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{title:"Returning Users",type:"note",children:(0,n.jsxs)(t.p,{children:["If you're seeing an existing list of Projects instead of the landing page shown above, click ",(0,n.jsx)(t.strong,{children:"Create Project"})," instead.",(0,n.jsx)("br",{}),(0,n.jsx)("img",{src:(0,r.A)("img/api-testing/createProject.png"),alt:"Create Project",width:"450"})]})}),"\n",(0,n.jsxs)(t.ol,{start:"3",children:["\n",(0,n.jsxs)(t.li,{children:["In the ",(0,n.jsx)(t.strong,{children:"Create a New Project"})," window:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Set the ",(0,n.jsx)(t.strong,{children:"Create from"})," dropdown to ",(0,n.jsx)(t.strong,{children:"blank project"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Enter your ",(0,n.jsx)(t.strong,{children:"Project Name"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Optionally, you can add ",(0,n.jsx)(t.strong,{children:"Tags"}),", a ",(0,n.jsx)(t.strong,{children:"Description"}),", ",(0,n.jsx)(t.strong,{children:"Notes"}),". For the purpose of this Quickstart, leave ",(0,n.jsx)(t.strong,{children:"Access"})," as-is."]}),"\n",(0,n.jsxs)(t.li,{children:["Click ",(0,n.jsx)(t.strong,{children:"Save"})," when you're finished. ",(0,n.jsx)("br",{}),(0,n.jsx)("img",{src:(0,r.A)("img/api-testing/newProject.png"),alt:"Create a Project UI",width:"300"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"create-test",children:"Create Test"}),"\n",(0,n.jsxs)(t.p,{children:["For the purpose of this Quickstart, we'll test a ",(0,n.jsx)(t.code,{children:"GET"})," call from ",(0,n.jsx)(t.a,{href:"https://dog.ceo/dog-api/documentation/",children:"Dog CEO"}),", a public API that generates a list of dog breeds."]}),"\n",(0,n.jsxs)(t.p,{children:["In the ",(0,n.jsx)(t.strong,{children:"HTTP Client"})," > ",(0,n.jsx)(t.strong,{children:"Enter request URL"})," field, enter ",(0,n.jsx)(t.code,{children:"https://dog.ceo/api/breeds/list/all"}),":"]}),"\n",(0,n.jsx)("img",{src:(0,r.A)("img/api-testing/enterRequestURL.png"),alt:"Enter API URL",width:"500"}),"\n",(0,n.jsx)(t.h2,{id:"send-request",children:"Send Request"}),"\n",(0,n.jsxs)(t.p,{children:["Click ",(0,n.jsx)(t.strong,{children:"Send"})," to submit this HTTP request.",(0,n.jsx)("br",{}),(0,n.jsx)("img",{src:(0,r.A)("img/api-testing/enterRequestSave.png"),alt:"Enter API Request save",width:"500"})]}),"\n",(0,n.jsxs)(t.p,{children:["The JSON response \u2014 in this case, a list of dog breeds \u2014 will populate in the ",(0,n.jsx)(t.strong,{children:"Body"})," section along with a ",(0,n.jsx)(t.strong,{children:"200"})," OK success status.",(0,n.jsx)("br",{}),(0,n.jsx)("img",{src:(0,r.A)("img/api-testing/testSuccess.png"),alt:"API Request success",width:"400"})]}),"\n",(0,n.jsx)(t.h2,{id:"generate-test",children:"Generate Test"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Click ",(0,n.jsx)(t.strong,{children:"Generate Test"}),".",(0,n.jsx)("br",{}),(0,n.jsx)("img",{src:(0,r.A)("img/api-testing/generateTest.png"),alt:"Generate Test",width:"400"})]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["In the ",(0,n.jsx)(t.strong,{children:"New Test"})," window:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Enter your ",(0,n.jsx)(t.strong,{children:"Test Name"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Optionally, you can add a ",(0,n.jsx)(t.strong,{children:"Description"})," and/or ",(0,n.jsx)(t.strong,{children:"Tags"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Click ",(0,n.jsx)(t.strong,{children:"Create Test"})," when you're finished.",(0,n.jsx)("br",{}),(0,n.jsx)("img",{src:(0,r.A)("img/api-testing/testDetails.png"),alt:"Create Test",width:"400"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"This will generate a series of assertions for this specific API request."}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(s,{children:[(0,n.jsx)("summary",{children:"Viewing your test"}),(0,n.jsx)(t.strong,{children:"Visual"})," view shows your test as UI components:",(0,n.jsx)("br",{}),(0,n.jsx)("img",{src:(0,r.A)("img/api-testing/testVisual.png"),alt:"Sample Test Visual View"}),(0,n.jsx)(t.strong,{children:"Code"})," view displays it as code:",(0,n.jsx)("br",{}),(0,n.jsx)("img",{src:(0,r.A)("img/api-testing/testCode.webp"),alt:"Sample Test Code View"})]})}),"\n",(0,n.jsx)(t.h2,{id:"run-test",children:"Run Test"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Click the ",(0,n.jsx)(t.strong,{children:"Run"})," button to run your test.",(0,n.jsx)("br",{}),(0,n.jsx)("img",{src:(0,r.A)("img/api-testing/runTest-qs.png"),alt:"Run Test",width:"550"})]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["In the right-hand nav, under ",(0,n.jsx)(t.strong,{children:"Test Runs"}),", you'll see that a new line item has populated with the name of your test. If successful, you'll see a green checkmark indicator and ",(0,n.jsx)(t.strong,{children:"Completed with success"})," message.",(0,n.jsx)("br",{}),(0,n.jsx)("img",{src:(0,r.A)("img/api-testing/testRuns.png"),alt:"Test Runs Section",width:"300"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"view-test-results",children:"View Test Results"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["To view your test results, hover your mouse over your test line item and click ",(0,n.jsx)(t.strong,{children:"Open report document"}),".",(0,n.jsx)("br",{}),(0,n.jsx)("img",{src:(0,r.A)("img/api-testing/testResultsOpen.png"),alt:"Open Test Results",width:"200"})]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Your test report will open in a new browser tab. The report displays granular test information that's helpful for debugging any failures (",(0,n.jsx)(t.a,{href:"/api-testing/project-dashboard/#test-outcome-report",children:"more info"}),").",(0,n.jsx)("br",{}),(0,n.jsx)("img",{src:(0,r.A)("img/api-testing/testResultsPageRebrand.webp"),alt:"Test Results Page",width:"600"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"publish-your-test",children:"Publish Your Test"}),"\n",(0,n.jsx)(t.p,{children:"Our API Testing interface has a unique working copy/published copy workflow that allows you to edit a test without affecting the active (already published) version. Here's how to publish the working copy of your test."}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Once you've finish reviewing and/or editing your test, navigate to the ",(0,n.jsx)(t.strong,{children:"Unpublished changes"})," section, where it states that your test is currently unpublished.",(0,n.jsx)("br",{}),(0,n.jsx)("img",{src:(0,r.A)("img/api-testing/unpublished.png"),alt:"Unpublished Test"})]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Click the ",(0,n.jsx)(t.strong,{children:"Publish"})," button to publish your working copy.",(0,n.jsx)("br",{}),(0,n.jsx)("img",{src:(0,r.A)("img/api-testing/published.png"),alt:"Published Test"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"optional-next-steps",children:"Optional Next Steps"}),"\n",(0,n.jsx)(t.p,{children:"Sauce Labs API Testing has a full suite of tools that enables comprehensive continuous integration testing."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Set up a ",(0,n.jsx)(t.a,{href:"/api-testing/schedule-test",children:"recurring test schedule"})," so that you can monitor the health of your APIs."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/api-testing/composer/",children:"Add logic/components"})," using the Composer."]}),"\n",(0,n.jsxs)(t.li,{children:["Create a new test from a ",(0,n.jsx)(t.a,{href:"/api-testing/build-from-spec",children:"spec file"})," or ",(0,n.jsx)(t.a,{href:"/api-testing/import-postman-collection",children:"Postman collection"}),".","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["When you ",(0,n.jsx)(t.a,{href:"#generate-test",children:"generate a test"})," this way, the test components will be based on your imported request-and-response data."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["Create a new test ",(0,n.jsx)(t.a,{href:"/api-testing/composer/",children:"from scratch"}),"."]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>l});var n=s(96540);const i={},r=n.createContext(i);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);