"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[25930],{18807:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var o=n(74848),s=n(28453),i=n(86025);const r={id:"flow",title:"Flow (Pause or Stop a Test)",sidebar_label:"Flow (Pause or Stop a Test)",keywords:["api-testing","logicalcomponents","flow","start","stop"]},a=void 0,l={id:"api-testing/on-prem/logical-components/flow",title:"Flow (Pause or Stop a Test)",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/logical-components/flow.md",sourceDirName:"api-testing/on-prem/logical-components",slug:"/api-testing/on-prem/logical-components/flow",permalink:"/sauce-docs/pr-preview/pr-2916/api-testing/on-prem/logical-components/flow",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/logical-components/flow.md",tags:[],version:"current",lastUpdatedBy:"kristofmuhi",lastUpdatedAt:172492915e4,frontMatter:{id:"flow",title:"Flow (Pause or Stop a Test)",sidebar_label:"Flow (Pause or Stop a Test)",keywords:["api-testing","logicalcomponents","flow","start","stop"]},sidebar:"apif",previous:{title:"Each",permalink:"/sauce-docs/pr-preview/pr-2916/api-testing/on-prem/logical-components/each"},next:{title:"If",permalink:"/sauce-docs/pr-preview/pr-2916/api-testing/on-prem/logical-components/if"}},c={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function p(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n,{children:(0,o.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Legacy Documentation"}),(0,o.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,o.jsx)(t.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n","\n",(0,o.jsx)(t.p,{children:"This component allows you to pause or stop a test entirely."}),"\n",(0,o.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:(0,o.jsx)(t.strong,{children:"Name"})}),(0,o.jsx)(t.th,{children:(0,o.jsx)(t.strong,{children:"Type/Value"})}),(0,o.jsx)(t.th,{children:(0,o.jsx)(t.strong,{children:"Required"})})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Command"}),(0,o.jsx)(t.td,{children:"'stop', 'wait'"}),(0,o.jsx)(t.td,{children:"Yes"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Value (depends on 'Command = wait')"}),(0,o.jsx)(t.td,{children:"Number"}),(0,o.jsx)(t.td,{children:"Yes"})]})]})]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Command"}),": This parameter defines the action you want to take. 'Stop' will stop the test. 'Wait' will pause the test for a number of milliseconds defined in the 'Value' parameter."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Value"}),": The number of milliseconds you want to pause the test for."]}),"\n",(0,o.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(t.p,{children:'This component is especially useful when combined with the "If" component. See the examples below:'}),"\n",(0,o.jsx)("img",{src:(0,i.Ay)("img/api-fortress/2020/12/flow_stop.jpg"),alt:"flow_stop.jpg"}),"\n",(0,o.jsxs)(t.p,{children:["If the statusCode is not ",(0,o.jsx)(t.code,{children:"200"}),", the test will be halt; none of the\xa0remaining assertions will be checked."]}),"\n",(0,o.jsx)("img",{src:(0,i.Ay)("img/api-fortress/2020/12/flow_wait.jpg"),alt:"flow_wait.jpg"}),"\n",(0,o.jsxs)(t.p,{children:["In this example, the test will wait 1000 milliseconds before performing the ",(0,o.jsx)(t.code,{children:"GET"})," request."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var o=n(96540);const s={},i=o.createContext(s);function r(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);