"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[58503],{47854:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var t=n(74848),s=n(28453);const r={id:"enabling-api-fortress-to-read-local-files",title:"Enabling API Fortress to Read Local Files",sidebar_label:"Enabling API Fortress to Read Local Files",keywords:["api","api-fortress","onpremises","read"]},a=void 0,i={id:"api-testing/on-prem/self-hosted/enabling-api-fortress-to-read-local-files",title:"Enabling API Fortress to Read Local Files",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/self-hosted/enabling-api-fortress-to-read-local-files.md",sourceDirName:"api-testing/on-prem/self-hosted",slug:"/api-testing/on-prem/self-hosted/enabling-api-fortress-to-read-local-files",permalink:"/sauce-docs/pr-preview/pr-2915/api-testing/on-prem/self-hosted/enabling-api-fortress-to-read-local-files",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/self-hosted/enabling-api-fortress-to-read-local-files.md",tags:[],version:"current",lastUpdatedBy:"Tian Feng",lastUpdatedAt:1724880664e3,frontMatter:{id:"enabling-api-fortress-to-read-local-files",title:"Enabling API Fortress to Read Local Files",sidebar_label:"Enabling API Fortress to Read Local Files",keywords:["api","api-fortress","onpremises","read"]},sidebar:"apif",previous:{title:"Downloader 101",permalink:"/sauce-docs/pr-preview/pr-2915/api-testing/on-prem/learn-more/downloader-101"},next:{title:"Load Agent Deployment",permalink:"/sauce-docs/pr-preview/pr-2915/api-testing/on-prem/how-to/load-agent-deployment"}},l={},c=[];function d(e){const o={a:"a",blockquote:"blockquote",code:"code",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components},{Head:n}=o;return n||function(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n,{children:(0,t.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,t.jsxs)(o.blockquote,{children:["\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"Legacy Documentation"}),(0,t.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,t.jsx)(o.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(o.p,{children:["Using the ",(0,t.jsx)(o.a,{href:"/api-testing/on-prem/reference/read-file",children:"read-file"})," command, you can have your test read local files."]}),"\n",(0,t.jsx)(o.p,{children:"Currently, there is no GUI functionality to upload the files, however, you can set up your container to connect to a local folder on your host machine."}),"\n",(0,t.jsxs)(o.p,{children:["To do so, you have to update your docker-compose.yml file in the ",(0,t.jsx)(o.code,{children:"core/"})," directory."]}),"\n",(0,t.jsx)(o.p,{children:'In the "apifortress" service definition, modify the "volumes" block by adding one entry looking like this:'}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-yaml",children:"volumes:\n- /var/local/data:/data\n"})}),"\n",(0,t.jsxs)(o.p,{children:["Where ",(0,t.jsx)(o.code,{children:"/var/local/data"})," is the path in your host machine where you want to store the files."]})]})}function p(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,o,n)=>{n.d(o,{R:()=>a,x:()=>i});var t=n(96540);const s={},r=t.createContext(s);function a(e){const o=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:o},e.children)}}}]);