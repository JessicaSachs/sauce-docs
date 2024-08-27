"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[83488],{29235:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var t=o(74848),s=o(28453);const i={id:"deployment-configure-the-dns-for-the-mocking-service",title:"Deployment \u2013 Configure the DNS for the Mocking Service",sidebar_label:"Deployment \u2013 Configure the DNS for the Mocking Service",keywords:["api","api-fortress","self-hosted","mocking"]},r=void 0,c={id:"api-testing/on-prem/self-hosted/deployment-configure-the-dns-for-the-mocking-service",title:"Deployment \u2013 Configure the DNS for the Mocking Service",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/self-hosted/deployment-configure-the-dns-for-the-mocking-service.md",sourceDirName:"api-testing/on-prem/self-hosted",slug:"/api-testing/on-prem/self-hosted/deployment-configure-the-dns-for-the-mocking-service",permalink:"/sauce-docs/pr-preview/pr-2907/api-testing/on-prem/self-hosted/deployment-configure-the-dns-for-the-mocking-service",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/self-hosted/deployment-configure-the-dns-for-the-mocking-service.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:172477197e4,frontMatter:{id:"deployment-configure-the-dns-for-the-mocking-service",title:"Deployment \u2013 Configure the DNS for the Mocking Service",sidebar_label:"Deployment \u2013 Configure the DNS for the Mocking Service",keywords:["api","api-fortress","self-hosted","mocking"]},sidebar:"apif",previous:{title:"Certificate-based (mutual) SSL/TLS Authentication",permalink:"/sauce-docs/pr-preview/pr-2907/api-testing/on-prem/self-hosted/certificate-based-mutual-ssl-tls-authentication"},next:{title:"Downloader 101",permalink:"/sauce-docs/pr-preview/pr-2907/api-testing/on-prem/learn-more/downloader-101"}},a={},d=[];function p(e){const n={a:"a",blockquote:"blockquote",code:"code",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components},{Head:o}=n;return o||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o,{children:(0,t.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Legacy Documentation"}),(0,t.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,t.jsx)(n.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Regardless of the deployment method used, to use the Mocking service you will need to apply one change in your DNS."}),"\n",(0,t.jsx)(n.p,{children:"Assuming your API Fortress dashboard is mapped to the domain:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"apif.yourcompany.com\n"})}),"\n",(0,t.jsx)(n.p,{children:"A new CNAME entry needs to be created, as in:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"CNAME *.apif.yourcompany.com > apif.yourcompany.com\n"})}),"\n",(0,t.jsx)(n.p,{children:"As mocked services will be accessible via subdomains of the dashboard."})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>c});var t=o(96540);const s={},i=t.createContext(s);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);