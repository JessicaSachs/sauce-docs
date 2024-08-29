"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[83808],{79407:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var o=n(74848),i=n(28453),s=n(86025);const r={id:"the-working-copy-published-tests",title:"The Working Copy / Published Tests",sidebar_label:"The Working Copy / Published Tests"},a=void 0,l={id:"api-testing/on-prem/learn-more/the-working-copy-published-tests",title:"The Working Copy / Published Tests",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/learn-more/the-working-copy-published-tests.md",sourceDirName:"api-testing/on-prem/learn-more",slug:"/api-testing/on-prem/learn-more/the-working-copy-published-tests",permalink:"/sauce-docs/pr-preview/pr-2916/api-testing/on-prem/learn-more/the-working-copy-published-tests",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/learn-more/the-working-copy-published-tests.md",tags:[],version:"current",lastUpdatedBy:"kristofmuhi",lastUpdatedAt:172492915e4,frontMatter:{id:"the-working-copy-published-tests",title:"The Working Copy / Published Tests",sidebar_label:"The Working Copy / Published Tests"},sidebar:"apif",previous:{title:"Working with  the Header",permalink:"/sauce-docs/pr-preview/pr-2916/api-testing/on-prem/learn-more/working-with-the-response-object"},next:{title:"Each",permalink:"/sauce-docs/pr-preview/pr-2916/api-testing/on-prem/logical-components/each"}},c={},u=[{value:"The Problem",id:"the-problem",level:2},{value:"Solution Summary",id:"solution-summary",level:2}];function d(e){const t={a:"a",blockquote:"blockquote",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n,{children:(0,o.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Legacy Documentation"}),(0,o.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,o.jsx)(t.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n","\n",(0,o.jsx)(t.p,{children:"When you work on a test you are not editing the actual test, but a working copy (a clone) of the test. The working copy can be edited, reset, and saved to continue the work later, but none of these actions alter the state of the live test."}),"\n",(0,o.jsxs)(t.p,{children:["When you're done editing you will need to ",(0,o.jsx)(t.strong,{children:"PUBLISH"})," the test so that the working copy replaces the current live test to become official."]}),"\n",(0,o.jsx)("img",{src:(0,s.Ay)("img/api-fortress/2016/03/testControlPanel.jpeg"),alt:"Test Control Panel"}),"\n",(0,o.jsx)(t.h2,{id:"the-problem",children:"The Problem"}),"\n",(0,o.jsx)(t.p,{children:"API Fortress is meant to alert people when something goes wrong. So if you are editing a test, and an incomplete test runs based on the schedule, you will receive a failure notification (i.e. a false positive)."}),"\n",(0,o.jsx)(t.p,{children:"By using the working copy to make your edits, the scheduler will not execute a test unless it is finalized and published."}),"\n",(0,o.jsx)(t.h2,{id:"solution-summary",children:"Solution Summary"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"You don't edit the live test. When you edit one, you're actually editing the working copy."}),"\n",(0,o.jsx)(t.li,{children:"If you want to start over from the live test you can 'Clear Working Copy' to create a fresh version of the live test that you can edit."}),"\n",(0,o.jsx)(t.li,{children:"When you are done editing click 'Publish' so your working copy goes live and the scheduler will use this new test for its executions."}),"\n",(0,o.jsx)(t.li,{children:"If you create a new test but never publish it, the test will be marked as 'incomplete.'"}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var o=n(96540);const i={},s=o.createContext(i);function r(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);