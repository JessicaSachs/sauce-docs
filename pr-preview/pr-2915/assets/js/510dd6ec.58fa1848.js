"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[23027],{31187:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var s=t(74848),a=t(28453),o=t(86025);const r={id:"jdbc",title:"Databases \u2013 JDBC (direct)",sidebar_label:"Databases \u2013 JDBC (direct)",keywords:["api-testing","io-components","jdbc","database","data","base","sql","mysql"]},i=void 0,c={id:"api-testing/on-prem/io-components/jdbc",title:"Databases \u2013 JDBC (direct)",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/io-components/jdbc.md",sourceDirName:"api-testing/on-prem/io-components",slug:"/api-testing/on-prem/io-components/jdbc",permalink:"/sauce-docs/pr-preview/pr-2915/api-testing/on-prem/io-components/jdbc",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/io-components/jdbc.md",tags:[],version:"current",lastUpdatedBy:"Tian Feng",lastUpdatedAt:1724880664e3,frontMatter:{id:"jdbc",title:"Databases \u2013 JDBC (direct)",sidebar_label:"Databases \u2013 JDBC (direct)",keywords:["api-testing","io-components","jdbc","database","data","base","sql","mysql"]},sidebar:"apif",previous:{title:"Overview",permalink:"/sauce-docs/pr-preview/pr-2915/api-testing/on-prem/io-components"},next:{title:"POST: Multipart Upload",permalink:"/sauce-docs/pr-preview/pr-2915/api-testing/on-prem/io-components/multipart-upload"}},d={},l=[];function p(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t,{children:(0,s.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Legacy Documentation"}),(0,s.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,s.jsx)(n.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n","\n",(0,s.jsx)(n.p,{children:"The JDBC component allows a test to query data from a database. Typical use cases are:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"to retrieve data items to use as input data"}),"\n",(0,s.jsx)(n.li,{children:"to perform data driven testing"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The currently supported databases are: MySQL, PostgreSQL, and Microsft SQL Server."}),"\n",(0,s.jsx)(n.p,{children:"Configuration keys:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"Url"}),": the JDBC url to the database. Depending on the database type, URLs will look like the following:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"jdbc:mysql://database.example.com/databaseName"}),"\n",(0,s.jsx)(n.li,{children:"jdbc:postgresql://database.example.com/databaseName"}),"\n",(0,s.jsx)(n.li,{children:"jdbc:sqlserver://database.example.com;databaseName=databaseName;"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"Driver"}),": the type of driver; you can choose it from the options available in the drop down:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"org.postgresql.Driver"}),"\n",(0,s.jsx)(n.li,{children:"com.microsoft.sqlserver.jdbc.SQLServerDriver"}),"\n",(0,s.jsx)(n.li,{children:"com.mysql.jdbc.Driver"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"Username"}),": the username to access the database"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"Password"}),": the password to access the database"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"Content"}),": the SQL query"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"Variable"}),": the name of the variable that will store the results"]}),"\n"]}),"\n",(0,s.jsx)("img",{src:(0,o.Ay)("img/api-fortress/2019/10/Screen-Shot-2019-10-31-at-9.59.13-AM.png"),alt:"screenshot"}),"\n",(0,s.jsx)(n.p,{children:"The result of the query will be represented as an array where each item is a row. Every row is a key/value map, as in:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'[\n {"id",123,"first_name":"John","last_name":"Doe"},\n {"id",456,"first_name":"Annie","last_name":"Doe"}\n]\n'})}),"\n",(0,s.jsx)(n.p,{children:"Therefore, you can then iterate over the results to use them according to your needs."}),"\n",(0,s.jsxs)(n.p,{children:["To see another way to connect to a database using the API Fortress Helper Utility ",(0,s.jsx)(n.a,{href:"https://apifortress.com/doc/helper-databases/",children:"click here!"})]})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>i});var s=t(96540);const a={},o=s.createContext(a);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);