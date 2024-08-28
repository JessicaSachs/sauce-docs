"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[15998],{63965:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=n(74848),o=n(28453),i=n(86025);const r={id:"working-with-the-response-object",title:"Working with the Header (status code, latency, fetch)",sidebar_label:"Working with  the Header",keywords:["api-testing","test","response-object","headers"]},a=void 0,c={id:"api-testing/on-prem/learn-more/working-with-the-response-object",title:"Working with the Header (status code, latency, fetch)",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/learn-more/working-with-the-response-object.md",sourceDirName:"api-testing/on-prem/learn-more",slug:"/api-testing/on-prem/learn-more/working-with-the-response-object",permalink:"/sauce-docs/pr-preview/pr-2914/api-testing/on-prem/learn-more/working-with-the-response-object",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/learn-more/working-with-the-response-object.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:172488024e4,frontMatter:{id:"working-with-the-response-object",title:"Working with the Header (status code, latency, fetch)",sidebar_label:"Working with  the Header",keywords:["api-testing","test","response-object","headers"]},sidebar:"apif",previous:{title:"The Variables System in API Fortress",permalink:"/sauce-docs/pr-preview/pr-2914/api-testing/on-prem/learn-more/the-variables-system-in-api-fortress"},next:{title:"The Working Copy / Published Tests",permalink:"/sauce-docs/pr-preview/pr-2914/api-testing/on-prem/learn-more/the-working-copy-published-tests"}},l={},d=[{value:"Overview",id:"overview",level:2},{value:"Code View Example",id:"code-view-example",level:2},{value:"Visual Composer View",id:"visual-composer-view",level:2}];function p(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n,{children:(0,s.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Legacy Documentation"}),(0,s.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,s.jsx)(t.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n","\n",(0,s.jsx)(t.p,{children:"An HTTP response is made of a payload (what you are mainly interested in), but also contains contextual information. Using API Fortress you can also deal with the whole response envelope."}),"\n",(0,s.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsxs)(t.p,{children:["When you're making an HTTP request in the composer, you're providing a variable name. That variable will host the entire response payload. So let's say \"payload\" is the name of that variable. When the operation completes, another variable called ",(0,s.jsx)(t.code,{children:"<variable_name>_response"})," is also created."]}),"\n",(0,s.jsxs)(t.p,{children:["Therefore various pieces of information such as HTTP header and metrics are contained in the variable ",(0,s.jsx)(t.code,{children:"payload_response"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["So by referencing the ",(0,s.jsx)(t.code,{children:"payload_response.statusCode"})," expression you can access the status code. For example, if you want to run a branch of code when the status code is ",(0,s.jsx)(t.code,{children:"400"}),", here's how you do it:"]}),"\n",(0,s.jsx)("img",{src:(0,i.Ay)("img/api-fortress/2017/03/statusCode.jpg"),alt:"statusCode.jpg"}),"\n",(0,s.jsx)(t.p,{children:"You can have multiple 'IF' conditions for checking all the possible status codes you need to check. Very useful for creating positive and negative tests."}),"\n",(0,s.jsx)("img",{src:(0,i.Ay)("img/api-fortress/2017/03/multiStatusCode.jpg"),alt:"multiStatusCode.jpg"}),"\n",(0,s.jsx)(t.p,{children:"Headers are also a big part of the response."}),"\n",(0,s.jsx)(t.p,{children:"Let's say you want to check that a resource shouldn't be cached:"}),"\n",(0,s.jsx)("img",{src:(0,i.Ay)("img/api-fortress/2017/03/response_headers.jpg"),alt:"response_headers.jpg"}),"\n",(0,s.jsx)(t.p,{children:"Furthermore, you can have the performance of the call verified as well."}),"\n",(0,s.jsx)(t.h2,{id:"code-view-example",children:"Code View Example"}),"\n",(0,s.jsx)(t.p,{children:"Here is what it looks like in the CODE view:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:'<assert-less\nexpression="payload_response.metrics.latency"\nvalue="350"\ntype="integer"\n/>\n\n<assert-less\nexpression="payload_response.metrics.fetch"\nvalue="350"\ntype="integer"\n/>\n\n<assert-less\nexpression="payload_response.metrics.overall"\nvalue="550"\ntype="integer"\n/>\n'})}),"\n",(0,s.jsx)(t.h2,{id:"visual-composer-view",children:"Visual Composer View"}),"\n",(0,s.jsx)(t.p,{children:"Here is what it looks like in the VISUAL view:"}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsx)(t.p,{children:"Use the Assert-Less component"})}),"\n",(0,s.jsx)("img",{src:(0,i.Ay)("img/api-fortress/2017/03/metric-test-1.png"),alt:"metric-test-1.png"}),"\n",(0,s.jsx)("img",{src:(0,i.Ay)("img/api-fortress/2017/03/metric-test-2.png"),alt:"metric-test-2.png"}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"Latency is defined as time to first byte. Fetch is the total download time of the payload."})})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var s=n(96540);const o={},i=s.createContext(o);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);