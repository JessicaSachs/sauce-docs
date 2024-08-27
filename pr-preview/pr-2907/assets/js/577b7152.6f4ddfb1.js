"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[15701],{71390:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=t(74848),n=t(28453),o=t(86025);const i={id:"assert-compares",title:"Assert Compares",sidebar_label:"Assert Compares",description:"Compare two payloads in text, structure or values. Text compares as plain text, values compares regardless of text layout, structure compares the structure."},a=void 0,c={id:"api-testing/on-prem/assertion-components/assert-compares",title:"Assert Compares",description:"Compare two payloads in text, structure or values. Text compares as plain text, values compares regardless of text layout, structure compares the structure.",source:"@site/docs/api-testing/on-prem/assertion-components/assert-compares.md",sourceDirName:"api-testing/on-prem/assertion-components",slug:"/api-testing/on-prem/assertion-components/assert-compares",permalink:"/sauce-docs/pr-preview/pr-2907/api-testing/on-prem/assertion-components/assert-compares",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/assertion-components/assert-compares.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:172477197e4,frontMatter:{id:"assert-compares",title:"Assert Compares",sidebar_label:"Assert Compares",description:"Compare two payloads in text, structure or values. Text compares as plain text, values compares regardless of text layout, structure compares the structure."},sidebar:"apif",previous:{title:"Using the API",permalink:"/sauce-docs/pr-preview/pr-2907/api-testing/on-prem/api/using-the-api"},next:{title:"Assert Contains",permalink:"/sauce-docs/pr-preview/pr-2907/api-testing/on-prem/assertion-components/assert-contains"}},l={},d=[{value:"Parameters",id:"parameters",level:2}];function p(e){const s={a:"a",admonition:"admonition",blockquote:"blockquote",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components},{Head:t}=s;return t||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Legacy Documentation"}),(0,r.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,r.jsx)(s.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n","\n",(0,r.jsx)(s.p,{children:"Allows you to compare two payloads in terms of text, structure or values."}),"\n",(0,r.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"Name"})}),(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"Type/Value"})}),(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"Required"})})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Expression 1"}),(0,r.jsx)(s.td,{children:"Expression"}),(0,r.jsx)(s.td,{children:"Yes"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Expression 2"}),(0,r.jsx)(s.td,{children:"Expression"}),(0,r.jsx)(s.td,{children:"Yes"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Mode"}),(0,r.jsx)(s.td,{children:"Text, values, structure"}),(0,r.jsx)(s.td,{children:"Yes"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Level"}),(0,r.jsx)(s.td,{children:"error, warning"}),(0,r.jsx)(s.td,{children:"No"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Stop test if fails"}),(0,r.jsx)(s.td,{children:"True, false"}),(0,r.jsx)(s.td,{children:"No"})]})]})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Expression 1"}),": the first payload you want to compare. See ",(0,r.jsx)(s.a,{href:"/api-testing/on-prem/reference/expression/",children:"Expression"})," for more details."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Expression 2"}),": the second payload you want to compare."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Mode"}),": the comparator you wish to use.","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Text"})," compares the text of the two payloads as plain text"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"values"})," compares the two payloads regardless the text layout"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"structure"})," compares only the structure of the two payloads."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Level"}),": Specifies, when the assertion fails, whether it should be considered an ",(0,r.jsx)(s.strong,{children:"error"})," or just a ",(0,r.jsx)(s.strong,{children:"warning"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Stop test if fails"}),": The test will be immediately stopped if the assertion fails."]}),"\n"]}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsxs)(s.p,{children:["A ",(0,r.jsx)(s.strong,{children:"warning"})," will not trigger alerts (such as email or text messages)."]})}),"\n",(0,r.jsx)("img",{src:(0,o.A)("img/api-fortress/2020/09/compares.jpg"),alt:"Assertion Compares Pic"})]})}function h(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>i,x:()=>a});var r=t(96540);const n={},o=r.createContext(n);function i(e){const s=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(o.Provider,{value:s},e.children)}}}]);