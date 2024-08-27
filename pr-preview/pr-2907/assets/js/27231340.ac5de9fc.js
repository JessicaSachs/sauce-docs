"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[5227],{53044:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var s=t(74848),i=t(28453),o=t(86025);const r={id:"pagerduty-webhooks",title:"PagerDuty and Webhook Connectors",sidebar_label:"PagerDuty and Webhook Connectors"},a=void 0,l={id:"api-testing/integrations/pagerduty-webhooks",title:"PagerDuty and Webhook Connectors",description:"Our Connector feature enables you to track your Sauce Labs API Testing results in third-party apps outside of our platform. It seamlessly integrates API Testing into your day-to-day operations without disrupting workflows. Data is sent as an HTTP POST request containing a JSON payload.",source:"@site/docs/api-testing/integrations/pagerduty-webhooks.md",sourceDirName:"api-testing/integrations",slug:"/api-testing/integrations/pagerduty-webhooks",permalink:"/sauce-docs/pr-preview/pr-2907/api-testing/integrations/pagerduty-webhooks",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/integrations/pagerduty-webhooks.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:172477197e4,frontMatter:{id:"pagerduty-webhooks",title:"PagerDuty and Webhook Connectors",sidebar_label:"PagerDuty and Webhook Connectors"},sidebar:"docs",previous:{title:"saucectl YAML Configuration",permalink:"/sauce-docs/pr-preview/pr-2907/api-testing/integrations/yaml"},next:{title:"Test Results and Insights",permalink:"/sauce-docs/pr-preview/pr-2907/api-testing/project-dashboard"}},c={},d=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"PagerDuty Connector Setup",id:"pagerduty-connector-setup",level:2},{value:"Webhook Connector Setup",id:"webhook-connector-setup",level:2},{value:"Testing Connectors",id:"testing-connectors",level:2},{value:"More Information",id:"more-information",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Our ",(0,s.jsx)(n.strong,{children:"Connector"})," feature enables you to track your Sauce Labs API Testing results in third-party apps outside of our platform. It seamlessly integrates API Testing into your day-to-day operations without disrupting workflows. Data is sent as an HTTP POST request containing a JSON payload."]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["Stay organized and facilitate monitoring by adding ",(0,s.jsx)(n.a,{href:"/api-testing/composer/other-components/#tag",children:"tags"})," and clear naming conventions to your API Tests and Projects."]})}),"\n",(0,s.jsx)(n.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["A Sauce Labs account (",(0,s.jsx)(n.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,s.jsx)(n.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")."]}),"\n",(0,s.jsxs)(n.li,{children:["A ",(0,s.jsx)(n.a,{href:"https://www.pagerduty.com/",children:"PagerDuty account"})," (for the PagerDuty connector only)."]}),"\n",(0,s.jsxs)(n.li,{children:["An existing API Testing Project. For details on how to create one, see ",(0,s.jsx)(n.a,{href:"/api-testing/quickstart/",children:"API Testing Quickstart"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"pagerduty-connector-setup",children:"PagerDuty Connector Setup"}),"\n",(0,s.jsx)(n.p,{children:"The PagerDuty Connector will trigger an incident in PagerDuty upon failure and then resolve that incident when the next automation execution succeeds."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Notifies on-call responders based on failures in your API tests."}),"\n",(0,s.jsx)(n.li,{children:"Sends critical information on test failures as well as a link to the test report."}),"\n",(0,s.jsx)(n.li,{children:"Creates high and low urgency incidents based on the severity of the failure via dynamic tags in the test."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"To set up this feature:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Log in to Sauce Labs > click ",(0,s.jsx)(n.strong,{children:"API Testing"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Click on any Project."}),"\n",(0,s.jsxs)(n.li,{children:["Within that Project, go to ",(0,s.jsx)(n.strong,{children:"Settings"})," > ",(0,s.jsx)(n.strong,{children:"Connectors"})," > ",(0,s.jsx)(n.strong,{children:"Create Connector"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Under the ",(0,s.jsx)(n.strong,{children:"Template"})," dropdown, select ",(0,s.jsx)(n.strong,{children:"PagerDuty"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["In the ",(0,s.jsx)(n.strong,{children:"Template"})," section, you'll need to replace the ",(0,s.jsx)(n.code,{children:'\u201crouting_key"'})," value with your PagerDuty Integration Key, which you can find in PagerDuty by creating an App in Developer Mode. Optionally, you can also edit the other template values meet your needs.",(0,s.jsx)("br",{}),(0,s.jsx)("img",{src:(0,o.A)("img/api-testing/pagerduty_template.webp"),alt:"pagerduty-template field"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"URL"})," field is pre-populated with the PagerDuty URL (no action required)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Content-Type"})," field will pre-populate with ",(0,s.jsx)(n.strong,{children:"application/json"})," (no action required)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Headers"})," Key/Value pair fields are optional."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"On_success"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Turn the toggle to ",(0,s.jsx)(n.strong,{children:"True"})," if you'd like to receive data on all events, including successes, which can be handy when the service needs to log everything or alter a state."]}),"\n",(0,s.jsxs)(n.li,{children:["Turn the toggle to ",(0,s.jsx)(n.strong,{children:"False"})," to receive notifications for test failures only. This is typical for stateless services such as Slack."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"webhook-connector-setup",children:"Webhook Connector Setup"}),"\n",(0,s.jsx)(n.p,{children:"We also offer Webhook integrations to export data between Sauce Labs API Testing and third-party apps."}),"\n",(0,s.jsx)(n.p,{children:"Like the PagerDuty Connector, setting up an outgoing webbook connector allows Sauce Labs API Testing to send test result data to external sources. To enable:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Find the webhook URL for the third-party app you'd like to integrate."}),"\n",(0,s.jsxs)(n.li,{children:["Log in to Sauce Labs > click ",(0,s.jsx)(n.strong,{children:"API Testing"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Click on any Project."}),"\n",(0,s.jsxs)(n.li,{children:["Within that Project, go to ",(0,s.jsx)(n.strong,{children:"Settings"})," > ",(0,s.jsx)(n.strong,{children:"Connectors"})," > ",(0,s.jsx)(n.strong,{children:"Create Connector"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Under the ",(0,s.jsx)(n.strong,{children:"Template"})," dropdown, select ",(0,s.jsx)(n.strong,{children:"WebHook"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["In the ",(0,s.jsx)(n.strong,{children:"URL"})," field, you'll need to enter the webhook URL for the third-party app you want to integrate.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Content-Type"})," field will pre-populate with ",(0,s.jsx)(n.strong,{children:"application/json"})," (no action required)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Headers"})," Key/Value pair fields are optional."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Template"})," section is pre-populated with the JSON payload indicating what data will be sent from API Testing to the third-party app. Optionally, you can also edit the other template values meet your needs."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"On_success"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Turn the toggle to ",(0,s.jsx)(n.strong,{children:"True"})," if you'd like to receive data on all events, including successes, which can be handy when the service needs to log everything or alter a state."]}),"\n",(0,s.jsxs)(n.li,{children:["Turn the toggle to ",(0,s.jsx)(n.strong,{children:"False"})," to receive notifications for test failures only. This is typical for stateless services such as Slack."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"testing-connectors",children:"Testing Connectors"}),"\n",(0,s.jsx)(n.p,{children:"The Test Connectors feature tests the functionality of all connectors you have set up (as defined in their settings), but will not display any notifications on the dashboard. Testing a connector before executing it can minimize the time you spend creating connectors."}),"\n",(0,s.jsx)(n.p,{children:"To test a connector:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Log in to Sauce Labs > click ",(0,s.jsx)(n.strong,{children:"API Testing"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Click on any project."}),"\n",(0,s.jsxs)(n.li,{children:["Within that project, click ",(0,s.jsx)(n.strong,{children:"Settings"})," and then click ",(0,s.jsx)(n.strong,{children:"Connectors"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["On the ",(0,s.jsx)(n.strong,{children:"Connectors"})," page, click ",(0,s.jsx)(n.strong,{children:"Test Connectors"}),".","\n",(0,s.jsx)("img",{src:(0,o.A)("img/api-testing/test-connectors-rebrand.png"),alt:"Test Connectors button",width:"600"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["In the ",(0,s.jsx)(n.strong,{children:"Connectors Test Drive"})," window, select either the ",(0,s.jsx)(n.strong,{children:"Failure"})," or ",(0,s.jsx)(n.strong,{children:"Success"})," radio button, and then click ",(0,s.jsx)(n.strong,{children:"Trigger"}),".","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Failure - You will receive a notification in all connector platforms in your list"}),"\n",(0,s.jsxs)(n.li,{children:["Success - If the ",(0,s.jsx)(n.strong,{children:"On_success"})," toggle is set to ",(0,s.jsx)(n.strong,{children:"True"}),", you will receive a notification for the connector",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("img",{src:(0,o.A)("img/api-testing/trigger-confirmation.webp"),alt:"Test Connectors dialog box",width:"400"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["To check the functionality of connectors like PagerDuty that trigger an incident upon failure, and then resolve that incident with the following success, you need to first test for ",(0,s.jsx)(n.strong,{children:"Failure"})," and then for ",(0,s.jsx)(n.strong,{children:"Success"}),"."]})}),"\n",(0,s.jsx)(n.h2,{id:"more-information",children:"More Information"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.pagerduty.com/integrations/sauce-api-testing/",children:"PagerDuty / API Testing Integration"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var s=t(96540);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);