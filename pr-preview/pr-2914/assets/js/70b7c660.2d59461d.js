"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[82206],{44763:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(74848),i=a(28453),s=a(86025);const o={id:"the-vault",title:"Use the Vault (Resuable Variables / Code Snippets)",sidebar_label:"Using the Vault",description:"The vault allows you to store variables and code snippets that can be used across an entire project."},r=void 0,l={id:"api-testing/on-prem/quick-start/the-vault",title:"Use the Vault (Resuable Variables / Code Snippets)",description:"The vault allows you to store variables and code snippets that can be used across an entire project.",source:"@site/docs/api-testing/on-prem/quick-start/the-vault.md",sourceDirName:"api-testing/on-prem/quick-start",slug:"/api-testing/on-prem/quick-start/the-vault",permalink:"/sauce-docs/pr-preview/pr-2914/api-testing/on-prem/quick-start/the-vault",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/quick-start/the-vault.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:172488024e4,frontMatter:{id:"the-vault",title:"Use the Vault (Resuable Variables / Code Snippets)",sidebar_label:"Using the Vault",description:"The vault allows you to store variables and code snippets that can be used across an entire project."},sidebar:"apif",previous:{title:"Set Up Connectors",permalink:"/sauce-docs/pr-preview/pr-2914/api-testing/on-prem/quick-start/setup-connectors"},next:{title:"Importing Postman Collections",permalink:"/sauce-docs/pr-preview/pr-2914/api-testing/on-prem/quick-start/importing-postman-collections"}},c={},p=[{value:"Vault Overview",id:"vault-overview",level:2},{value:"Project Column",id:"project-column",level:3},{value:"Snippet Section",id:"snippet-section",level:3},{value:"Variable Section",id:"variable-section",level:3},{value:"Vault Tab in Composer",id:"vault-tab-in-composer",level:2},{value:"The Authentication Snippet",id:"the-authentication-snippet",level:3}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",strong:"strong",...(0,i.R)(),...e.components},{Head:a}=t;return a||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a,{children:(0,n.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Legacy Documentation"}),(0,n.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,n.jsx)(t.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n","\n",(0,n.jsx)(t.p,{children:"The vault allows you to store variables and code snippets that can be used across an entire project."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://www.youtube.com/watch?v=cBNMi30Fj9Q",children:"Explanation Video"})}),"\n",(0,n.jsx)(t.h2,{id:"vault-overview",children:"Vault Overview"}),"\n",(0,n.jsx)(t.p,{children:"The link to access the Vault is at the top of the window, as shown below:"}),"\n",(0,n.jsx)("img",{src:(0,s.Ay)("img/api-fortress/2020/01/vault_header.jpg"),alt:"Vault Header"}),"\n",(0,n.jsx)(t.h3,{id:"project-column",children:"Project Column"}),"\n",(0,n.jsxs)(t.p,{children:["The first column shows all of the projects of a company and the Global Vault. Code snippets and variables saved in a specific project are only available in that project. ",(0,n.jsx)(t.em,{children:"They are not available across projects."})," If a variable and/or code snippet needs to be available in more projects within the company, they must be saved to the ",(0,n.jsx)(t.strong,{children:"Global Vault"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"The Global Vault has been built to make variables and code snippets available across all of the projects in a company."}),"\n",(0,n.jsx)("img",{src:(0,s.Ay)("img/api-fortress/2020/01/prj_global.jpg"),alt:"Global Projects"}),"\n",(0,n.jsx)("img",{src:(0,s.Ay)("img/api-fortress/2020/01/snippet_var.jpg"),alt:"Snippet Variable"}),"\n",(0,n.jsx)(t.h3,{id:"snippet-section",children:"Snippet Section"}),"\n",(0,n.jsxs)(t.p,{children:["In the snippet section, you will find all of the snippets you have created using the Composer (see ",(0,n.jsx)(t.a,{href:"/api-testing/on-prem/reference/composer-snippets",children:"here"})," for more details)."]}),"\n",(0,n.jsx)(t.p,{children:"Once you have saved the snippet, from the composer, you can choose whether you want to save it and make it available only for the current project or for all the projects within the company by saving it in the Global Vault. If you already have a snippet saved for the current project but you need to make it available across all projects, you can easily export them from the current project to the Global Vault by using the import/export feature."}),"\n",(0,n.jsx)("img",{src:(0,s.Ay)("img/api-fortress/2020/01/snippet.jpg"),alt:"Snippet"}),"\n",(0,n.jsx)(t.p,{children:"A good use case for the snippets feature is an authentication flow; you don't need or want to rewrite all of the steps in every test. You just need to call the snippet that contains the authentication snippet. Another good example is integration testing, where you can reuse various tests to create one larger flow."}),"\n",(0,n.jsx)(t.h3,{id:"variable-section",children:"Variable Section"}),"\n",(0,n.jsx)(t.p,{children:"In the variable section, you can define variables that will be part of the scope of the tests."}),"\n",(0,n.jsx)("img",{src:(0,s.Ay)("img/api-fortress/2020/01/variable.jpg"),alt:"Variable"}),"\n",(0,n.jsx)(t.p,{children:"If a variable with the same name is defined within the test, it will override the one defined in the Vault. For identical variable names in the global vault and in the project vault, the latter will have higher priority."}),"\n",(0,n.jsx)(t.p,{children:"Defining a variable in the Vault is helpful when you need to use the same variable across multiple tests. This way, you don't need to rewrite it every time."}),"\n",(0,n.jsx)(t.p,{children:"For example, a password could be saved as a variable and reused in multiple places."}),"\n",(0,n.jsx)(t.p,{children:"Just like code snippets, if you need a variable available across multiple projects, you can save it in the Global Vault or import it directly from another project."}),"\n",(0,n.jsxs)(t.p,{children:["Additionally, you can import variables from Postman. See ",(0,n.jsx)(t.a,{href:"/api-testing/on-prem/quick-start/importing-postman-collections/",children:"here"})," for more details."]}),"\n",(0,n.jsx)(t.h2,{id:"vault-tab-in-composer",children:"Vault Tab in Composer"}),"\n",(0,n.jsx)(t.p,{children:"When you open the Vault tab in the Composer, global snippets and variables will be highlighted for ease of identification."}),"\n",(0,n.jsx)("img",{src:(0,s.Ay)("img/api-fortress/2020/01/globalVsCompany.jpg"),alt:"Global vs. Company"}),"\n",(0,n.jsx)(t.p,{children:"Here is a quick example on how the Vault can be used in a test."}),"\n",(0,n.jsx)(t.h3,{id:"the-authentication-snippet",children:"The Authentication Snippet"}),"\n",(0,n.jsxs)(t.p,{children:["First, create a new test. Go to the test list, click ",(0,n.jsx)(t.strong,{children:"+New Test"}),", enter the test name and click ",(0,n.jsx)(t.strong,{children:"Compose"}),". Once the composer appears, simply enter the call. For this example, we will add a GET request that logs in using a Basic authentication:"]}),"\n",(0,n.jsx)("img",{src:(0,s.Ay)("img/api-fortress/2020/01/login-1.jpg"),alt:"Login screenshot"}),"\n",(0,n.jsx)(t.p,{children:"Consider a scenario where this login will be required for all the endpoints we have to test. It makes sense for this call to be stored in the Vault."}),"\n",(0,n.jsxs)(t.p,{children:["Select the ",(0,n.jsx)(t.code,{children:"GET"}),", open the Vault panel and click the + button. Enter a name and description."]}),"\n",(0,n.jsx)("img",{src:(0,s.Ay)("img/api-fortress/2020/01/loginSnippet.jpg"),alt:"Login Snippet"}),"\n",(0,n.jsxs)(t.p,{children:["Now you can proceed with creating the test. Once done, you may create other tests for your API. Once again, click ",(0,n.jsx)(t.strong,{children:"+New Test"}),". Once you are in the Composer, you can open the Vault panel and select the snippet saved in the previous step."]}),"\n",(0,n.jsx)("img",{src:(0,s.Ay)("img/api-fortress/2020/01/newTestSnippet.jpg"),alt:"New Test Snippet"}),"\n",(0,n.jsx)(t.p,{children:"To use the login call in the new test, just click the down arrow button next to the snippet, and it will be added into the test."}),"\n",(0,n.jsx)("img",{src:(0,s.Ay)("img/api-fortress/2020/01/invokeSnippet.jpg"),alt:"Invoke Snippet"}),"\n",(0,n.jsx)(t.p,{children:"Now you can call the endpoint that you want to test. Let\u2019s use the search endpoint. Pass the \u201dID\u201d variable as a query parameter. The authorization token that was parameterized after the login call will be passed in as well:"}),"\n",(0,n.jsx)("img",{src:(0,s.Ay)("img/api-fortress/2020/01/call_search.jpg"),alt:"Call Search"}),"\n",(0,n.jsx)(t.p,{children:"Now, consider the case where we want to use the same \u201dID\u201d in multiple tests. Don\u2019t set the ID as a global param or an input set. Add it to the vault instead. Save the test and exit from the Composer. Click on Vault in the header and add the variable \u201dID\u201d here:"}),"\n",(0,n.jsx)("img",{src:(0,s.Ay)("img/api-fortress/2020/01/saveVar.jpg"),alt:"Save Variable"}),"\n",(0,n.jsx)(t.p,{children:"Once done, go back to the test and check that the variable is available in the Vault panel:"}),"\n",(0,n.jsx)("img",{src:(0,s.Ay)("img/api-fortress/2020/01/varInVault.jpg"),alt:"Variable in Vault"}),"\n",(0,n.jsx)(t.p,{children:"If you launch the test, you can see that the \u201dID\u201d will be replaced with the value you have set in the Vault."})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>o,x:()=>r});var n=a(96540);const i={},s=n.createContext(i);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);