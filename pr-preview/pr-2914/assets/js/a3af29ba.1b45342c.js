"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[93446],{95021:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var s=t(74848),i=t(28453),o=t(86025);const a={id:"dynamic-dates",title:"Dynamic Dates",sidebar_label:"Dynamic Dates",keywords:["api-testing","how-to","dynamic-dates"]},r=void 0,d={id:"api-testing/on-prem/how-to/dynamic-dates",title:"Dynamic Dates",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/how-to/set-dynamic-dates.md",sourceDirName:"api-testing/on-prem/how-to",slug:"/api-testing/on-prem/how-to/dynamic-dates",permalink:"/sauce-docs/pr-preview/pr-2914/api-testing/on-prem/how-to/dynamic-dates",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/how-to/set-dynamic-dates.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:172488024e4,frontMatter:{id:"dynamic-dates",title:"Dynamic Dates",sidebar_label:"Dynamic Dates",keywords:["api-testing","how-to","dynamic-dates"]},sidebar:"apif",previous:{title:"Disable SSL Validation",permalink:"/sauce-docs/pr-preview/pr-2914/api-testing/on-prem/how-to/disable-ssl-validation"},next:{title:"Email Notification Adjustments",permalink:"/sauce-docs/pr-preview/pr-2914/api-testing/on-prem/how-to/tweaking-stateful-email-notifications"}},c={},l=[];function p(e){const n={a:"a",blockquote:"blockquote",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t,{children:(0,s.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Legacy Documentation"}),(0,s.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,s.jsx)(n.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n","\n",(0,s.jsx)(n.p,{children:"Have you ever needed to pass a future date as part of the request inside of a test? Perhaps as a check-in or check-out date? You could enter it as static value, but that means you would have to periodically update the date as time went on."}),"\n",(0,s.jsx)(n.p,{children:"Creating a dynamic date in API Fortress is a simple solution for this sort of situation."}),"\n",(0,s.jsx)(n.p,{children:"Here's the procedure:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["First, open the Composer and add a ",(0,s.jsx)(n.strong,{children:"Set (variable)"}),":",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("img",{src:(0,o.Ay)("img/api-fortress/2018/04/setVar.jpg"),alt:"setVar.jpg"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["In the Variable component editor, enter the following:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Var"})," field: enter your variable name."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Variable mode"})," field: leave it as ",(0,s.jsx)(n.code,{children:"_String"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Value"})," field: enter the following string: ",(0,s.jsx)(n.code,{children:"${D.format(D.plusDays(D.nowMillis(),35), 'yyyy-MM-DD')}"}),".","\n",(0,s.jsx)("img",{src:(0,o.Ay)("img/api-fortress/2018/04/valueField.jpg"),alt:"valueField.jpg"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Let's analyze the string mentioned above:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"${D.format(D.plusDays(D.nowMillis(),35), 'yyyy-MM-DD')}\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"D.nowMillis()"}),": returns the current Unix epoch in milliseconds"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"D.plusDays()"}),": returns the provided milliseconds, plus the provided number of days (in our example, we have added 35 days to today's date)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"D.format()"}),": creates a timestamp with the given format, using the current timezone (in our example ",(0,s.jsx)(n.code,{children:"yyyy-MM-DD"}),")"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["As result, you will have something like ",(0,s.jsx)(n.code,{children:"2018-05-15"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"You can obtain a past date, starting from today's date with the following string:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"${D.format(D.minusDays(D.nowMillis(),35), 'yyyy-MM-DD')}\n"})}),"\n",(0,s.jsx)(n.p,{children:"You can also create a date based on a specified time zone:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"${D.format(D.plusDays(D.nowMillis(),35), 'yyyy-MM-DD','America/New_York')}\n"})}),"\n",(0,s.jsx)(n.p,{children:"The above string create the same date as our first example using New York (EST) as the timezone."}),"\n",(0,s.jsxs)(n.p,{children:["For more details, see our ",(0,s.jsx)(n.a,{href:"https://apifortress.com/doc/expression-language-extensions",children:"reference page"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var s=t(96540);const i={},o=s.createContext(i);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);