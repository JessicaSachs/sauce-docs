"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[82330],{26320:(e,t,i)=>{i.r(t),i.d(t,{Highlight:()=>d,assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>p});var n=i(74848),o=i(28453),s=i(86025);const r={id:"build-from-spec",title:"Build from a Spec File",sidebar_label:"Build from Spec File",description:"The available spec files you can automatically generate from are: Swagger, RAML, OpenAPI 3, API Blueprint, I/O Docs, SOAP WSDL, and Postman Collection."},l=void 0,a={id:"api-testing/on-prem/quick-start/build-from-spec",title:"Build from a Spec File",description:"The available spec files you can automatically generate from are: Swagger, RAML, OpenAPI 3, API Blueprint, I/O Docs, SOAP WSDL, and Postman Collection.",source:"@site/docs/api-testing/on-prem/quick-start/build-from-spec.md",sourceDirName:"api-testing/on-prem/quick-start",slug:"/api-testing/on-prem/quick-start/build-from-spec",permalink:"/sauce-docs/pr-preview/pr-2914/api-testing/on-prem/quick-start/build-from-spec",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/quick-start/build-from-spec.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:172488024e4,frontMatter:{id:"build-from-spec",title:"Build from a Spec File",sidebar_label:"Build from Spec File",description:"The available spec files you can automatically generate from are: Swagger, RAML, OpenAPI 3, API Blueprint, I/O Docs, SOAP WSDL, and Postman Collection."},sidebar:"apif",previous:{title:"Test Composer Guide",permalink:"/sauce-docs/pr-preview/pr-2914/api-testing/on-prem/quick-start/composer"},next:{title:"Test Reports",permalink:"/sauce-docs/pr-preview/pr-2914/api-testing/on-prem/quick-start/test-reports"}},c={},d=({children:e,color:t})=>{const i={span:"span",...(0,o.R)()};return(0,n.jsx)(i.span,{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"},children:e})},p=[{value:"Generate a Single Test From a Spec File",id:"generate-a-single-test-from-a-spec-file",level:2},{value:"Upload the Spec File",id:"upload-the-spec-file",level:3},{value:"Reference the Spec File",id:"reference-the-spec-file",level:3},{value:"Mass Generate Tests From a Spec File",id:"mass-generate-tests-from-a-spec-file",level:2}];function h(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components},{Head:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i,{children:(0,n.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Legacy Documentation"}),(0,n.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,n.jsx)(t.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n","\n","\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Legacy Documentation"}),": You're viewing the API Testing On-Premises (Legacy) documentation. To see the current documentation, see ",(0,n.jsx)(t.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n",(0,n.jsxs)("p",{children:["Supported specs: ",(0,n.jsxs)("small",{children:[(0,n.jsx)(d,{color:"#37b732",children:"Swagger"})," ",(0,n.jsx)(d,{color:"#29d3fe",children:"RAML"})," ",(0,n.jsx)(d,{color:"#4e5b2e",children:"OpenAPI 3"})," ",(0,n.jsx)(d,{color:"#9073d2",children:"API Blueprint"})," ",(0,n.jsx)(d,{color:"#c3090c",children:"I/O Docs"})," ",(0,n.jsx)(d,{color:"#025b9c",children:"SOAP"})," ",(0,n.jsx)(d,{color:"#025b9c",children:"WSDL"})," ",(0,n.jsx)(d,{color:"#ff6c37",children:"Postman Collection"})," "]})]}),"\n",(0,n.jsxs)(t.p,{children:["There are generally two ways to generate tests from a spec file: ",(0,n.jsx)(t.a,{href:"#generate-a-single-test-from-a-spec-file",children:"generate a single test file"}),", or ",(0,n.jsx)(t.a,{href:"#mass-generate-tests-from-a-spec-file",children:"mass generate tests files"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"generate-a-single-test-from-a-spec-file",children:"Generate a Single Test From a Spec File"}),"\n",(0,n.jsxs)(t.p,{children:["This feature allows you to create a test starting with a specification file. From the interstitial page, choose the ",(0,n.jsx)(t.strong,{children:"Build from SPEC"})," icon."]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"This process deletes your working copy. Keep this in mind if you attempt to use a specification file with a test that has already been written."})}),"\n",(0,n.jsx)("img",{src:(0,s.Ay)("img/api-fortress/2019/06/buildFromSpec.jpg"),alt:"Build from a Spec File"}),"\n",(0,n.jsx)(t.p,{children:"There are two ways to build a test from a specification file:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Upload the specification file itself."}),"\n",(0,n.jsx)(t.li,{children:"Reference the URL that points to the specification file."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"The dropdown in the top right allows you to select your mode."}),"\n",(0,n.jsx)(t.h3,{id:"upload-the-spec-file",children:"Upload the Spec File"}),"\n",(0,n.jsxs)(t.p,{children:["If you choose to upload your spec file, start by clicking the ",(0,n.jsx)(t.strong,{children:"Attach File"})," button, then select the correct file from the popup."]}),"\n",(0,n.jsx)("img",{src:(0,s.Ay)("img/api-fortress/2019/06/newBuildFromFile.jpg"),alt:"Build from a Spec File"}),"\n",(0,n.jsx)(t.h3,{id:"reference-the-spec-file",children:"Reference the Spec File"}),"\n",(0,n.jsx)(t.p,{children:"You may also reference the specification file with a URL. Selecting the URL field in the dropdown will open the SPEC URL field."}),"\n",(0,n.jsx)(t.p,{children:'Once you have chosen the file type and the method, click the Save button and you will be redirected to the next step where the available endpoints are listed in a dropdown. Choose the one that you wish to test and click "Continue." The test will then be created. You can now make any further adjustments, save and publish them for later use and scheduling.'}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note"}),": For ",(0,n.jsx)(t.code,{children:"RAML"}),", we suggest uploading the entire zip file. Here's an example video of building tests from a ",(0,n.jsx)(t.code,{children:"RAML"})," file."]}),"\n"]}),"\n",(0,n.jsx)("iframe",{width:"520",height:"315",src:"https://apifortress.com/doc/wp-content/uploads/2017/03/Create-from-RAML.webm",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),"\n",(0,n.jsx)(t.h2,{id:"mass-generate-tests-from-a-spec-file",children:"Mass Generate Tests From a Spec File"}),"\n",(0,n.jsxs)(t.p,{children:["This feature allows you to create multiple tests from one specification file. From within the project page (where you would like the tests to be stored), choose the ",(0,n.jsx)(t.strong,{children:"New Tests from SPEC"})," icon at the top."]}),"\n",(0,n.jsx)("img",{src:(0,s.Ay)("img/api-fortress/2020/02/Screen-Shot-2020-02-06-at-2.58.02-PM.png"),alt:"Mass Tests from a spec"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note"}),": This process will create one test per path chosen in the specification file inside of the project you are in."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["There are two ways to build a test from a specification file. One way is to ",(0,n.jsx)(t.a,{href:"#upload-the-spec-file",children:"upload the specification file itself"}),". Another way involves ",(0,n.jsx)(t.a,{href:"#reference-the-spec-file",children:"providing the URL that points to the specification file"}),". The dropdown in the top right allows you to select your mode."]}),"\n",(0,n.jsx)("img",{src:(0,s.Ay)("img/api-fortress/2020/02/newBuildFromFile.jpg"),alt:"New Build from a Spec File"}),"\n",(0,n.jsx)(t.p,{children:"Upload your spec file by clicking then Choose File button, and select the correct file from the popup."}),"\n",(0,n.jsx)(t.p,{children:"You may also reference the specification file with a URL. Selecting the URL field in the dropdown will open the SPEC URL field."}),"\n",(0,n.jsx)(t.p,{children:"Once you have chosen the file type and the method, click the green check mark on the top right and you will be redirected to the next step where the available endpoints are listed out."}),"\n",(0,n.jsx)("img",{src:(0,s.Ay)("img/api-fortress/2020/02/Screen-Shot-2020-02-06-at-3.06.35-PM.png"),alt:"List of available endpoints"}),"\n",(0,n.jsxs)(t.p,{children:["Choose as many as you wish to test or select one then click ",(0,n.jsx)(t.strong,{children:"Select All"})," in the top left to select all paths and then click ",(0,n.jsx)(t.strong,{children:"Import selected"}),". The tests will then be created and named in the following syntax ",(0,n.jsx)(t.code,{children:'"method endpoint - status\\_code"'})," (i.e. ",(0,n.jsx)(t.code,{children:'"GET /v1/users/ - 200"'}),")."]}),"\n",(0,n.jsx)("img",{src:(0,s.Ay)("img/api-fortress/2020/02/Screen-Shot-2020-02-06-at-3.10.52-PM.png"),alt:"List of available endpoints"})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>l});var n=i(96540);const o={},s=n.createContext(o);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);