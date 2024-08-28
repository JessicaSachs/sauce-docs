"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[20065],{47340:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>t,metadata:()=>d,toc:()=>c});var r=s(74848),i=s(28453),l=s(86025);const t={id:"key-value",title:"The Basic Key/Value Store Workflow",sidebar_label:"Basic Key/Value Store Workflow",description:"The basic key/value store workflow"},o=void 0,d={id:"api-testing/use-cases/key-value",title:"The Basic Key/Value Store Workflow",description:"The basic key/value store workflow",source:"@site/docs/api-testing/use-cases/key-value.md",sourceDirName:"api-testing/use-cases",slug:"/api-testing/use-cases/key-value",permalink:"/sauce-docs/pr-preview/pr-2914/api-testing/use-cases/key-value",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/use-cases/key-value.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:172488024e4,frontMatter:{id:"key-value",title:"The Basic Key/Value Store Workflow",sidebar_label:"Basic Key/Value Store Workflow",description:"The basic key/value store workflow"},sidebar:"docs",previous:{title:"Legacy (APIF) Migration",permalink:"/sauce-docs/pr-preview/pr-2914/api-testing/legacy"},next:{title:"Build an Integration Test",permalink:"/sauce-docs/pr-preview/pr-2914/api-testing/use-cases/integration-test"}},a={},c=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Basic Workflow: Set and Load Methods",id:"basic-workflow-set-and-load-methods",level:2},{value:"Push/Pop Workflow",id:"pushpop-workflow",level:2},{value:"Step 1: Push",id:"step-1-push",level:3},{value:"Step 2: Pop",id:"step-2-pop",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["The Key/Value Store allows you to create temporary key/value pairs that can be accessed across different tests in your Organization. That means, you can create a key/value pair in ",(0,r.jsx)(n.code,{children:"test1"})," in ",(0,r.jsx)(n.code,{children:"projectA"})," and use the value in ",(0,r.jsx)(n.code,{children:"test100"})," in ",(0,r.jsx)(n.code,{children:"projectZ"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["A Sauce Labs account (",(0,r.jsx)(n.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,r.jsx)(n.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")."]}),"\n",(0,r.jsxs)(n.li,{children:["An existing API Testing Project. For details on how to create one, see ",(0,r.jsx)(n.a,{href:"/api-testing/quickstart/",children:"API Testing Quickstart"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Familiarity with the ",(0,r.jsx)(n.a,{href:"/api-testing/composer/",children:"API Testing Composer"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"basic-workflow-set-and-load-methods",children:"Basic Workflow: Set and Load Methods"}),"\n",(0,r.jsx)(n.p,{children:"In this example you will focus on setting and retrieving a value in the Key/Value Store."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["First, open the Composer and add the ",(0,r.jsx)(n.strong,{children:"GET"})," request."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Url - for example ",(0,r.jsx)(n.code,{children:"http://demoapi.apifortress.com/api/retail/product"})]}),"\n",(0,r.jsxs)(n.li,{children:["Variable - for example ",(0,r.jsx)(n.code,{children:"products"})]}),"\n",(0,r.jsxs)(n.li,{children:["Mode - for example ",(0,r.jsx)(n.code,{children:"json"})]}),"\n"]}),"\n",(0,r.jsx)("img",{src:(0,l.Ay)("img/api-testing/kv-examples/get-request.png"),alt:"get request"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click ",(0,r.jsx)(n.strong,{children:"Save Changes"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click ",(0,r.jsx)(n.strong,{children:"Add Child Component"}),", then add the ",(0,r.jsx)(n.strong,{children:"Request Header"})," to the request."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Name - for example ",(0,r.jsx)(n.code,{children:"key"})]}),"\n",(0,r.jsxs)(n.li,{children:["Value - for example ",(0,r.jsx)(n.code,{children:"ABC123"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click ",(0,r.jsx)(n.strong,{children:"Save Changes"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Add the ",(0,r.jsx)(n.strong,{children:"K/V Store"})," component and then, ",(0,r.jsx)(n.strong,{children:"Save Changes"}),"."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Action - for example ",(0,r.jsx)(n.code,{children:"Set"})]}),"\n",(0,r.jsxs)(n.li,{children:["Key - for example ",(0,r.jsx)(n.code,{children:"prods"})]}),"\n",(0,r.jsxs)(n.li,{children:["Data - for example ",(0,r.jsx)(n.code,{children:"products[0].name"})]}),"\n"]}),"\n",(0,r.jsx)("img",{src:(0,l.Ay)("img/api-testing/kv-examples/kv-set.png"),alt:"set method for K/V store component"}),"\n",(0,r.jsxs)(n.p,{children:["In this step, you set the Key/Value pair in the store. In this case, ",(0,r.jsx)(n.code,{children:"prods"})," equals ",(0,r.jsx)(n.code,{children:"products[0].name"}),", which evaluates to ",(0,r.jsx)(n.code,{children:"Baseball Cap"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Next, add another ",(0,r.jsx)(n.strong,{children:"K/V Store"})," component."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Action - for example ",(0,r.jsx)(n.code,{children:"Load"})]}),"\n",(0,r.jsxs)(n.li,{children:["Key - for example ",(0,r.jsx)(n.code,{children:"prods"})]}),"\n",(0,r.jsxs)(n.li,{children:["Variable - for example ",(0,r.jsx)(n.code,{children:"kvprods"})]}),"\n"]}),"\n",(0,r.jsx)("img",{src:(0,l.Ay)("img/api-testing/kv-examples/kv-load.png"),alt:"load method for K/V store component"}),"\n",(0,r.jsxs)(n.p,{children:["In this step, you retrieve the Key/Value pair from the store. In this example, we assign the retrieved value to the variable ",(0,r.jsx)(n.code,{children:"kvprods"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click ",(0,r.jsx)(n.strong,{children:"Save Changes"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Add a ",(0,r.jsx)(n.strong,{children:"Comment"})," component and then ",(0,r.jsx)(n.strong,{children:"Save Changes"}),"."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Comment - for example ",(0,r.jsx)(n.code,{children:"${kvprods}"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"This will print the value and you can ensure that the data is recovered successfully."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"The final result looks like:"}),"\n",(0,r.jsx)("img",{src:(0,l.Ay)("img/api-testing/kv-examples/final-result-basic.webp"),alt:"Final result"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"- id: get\n  children:\n    - id: header\n      name: key\n      value: ABC123\n  url: http://demoapi.apifortress.com/api/retail/product\n  var: products\n  mode: json\n- id: kv\n  key: prods\n  action: set\n  object: products[0].name\n- id: kv\n  key: prods\n  action: load\n  var: kvprods\n- id: comment\n  text: ${kvprods}\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Run"})," the test."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"pushpop-workflow",children:"Push/Pop Workflow"}),"\n",(0,r.jsxs)(n.p,{children:["In the next example, you will take a look at how ",(0,r.jsx)(n.strong,{children:"Push"})," and ",(0,r.jsx)(n.strong,{children:"Pop"})," methods work. ",(0,r.jsx)(n.strong,{children:"Push"})," and ",(0,r.jsx)(n.strong,{children:"Pop"})," are both array methods and behave as they normally do outside of this context: ",(0,r.jsx)(n.strong,{children:"Push"})," will append a value to the end of an array, and ",(0,r.jsx)(n.strong,{children:"Pop"})," will remove the last value in an array."]}),"\n",(0,r.jsx)(n.h3,{id:"step-1-push",children:"Step 1: Push"}),"\n",(0,r.jsxs)(n.p,{children:["In this step, you will ",(0,r.jsx)(n.strong,{children:"Push"})," the data onto the array."]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["First, open the Composer and add the ",(0,r.jsx)(n.strong,{children:"GET"})," request."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Url - for example ",(0,r.jsx)(n.code,{children:"http://demoapi.apifortress.com/api/retail/product"})]}),"\n",(0,r.jsxs)(n.li,{children:["Variable - for example ",(0,r.jsx)(n.code,{children:"products"})]}),"\n",(0,r.jsxs)(n.li,{children:["Mode - for example ",(0,r.jsx)(n.code,{children:"json"})]}),"\n"]}),"\n",(0,r.jsx)("img",{src:(0,l.Ay)("img/api-testing/kv-examples/get-request.png"),alt:"get request"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click ",(0,r.jsx)(n.strong,{children:"Save Changes"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click ",(0,r.jsx)(n.strong,{children:"Add Child Component"}),", then add the ",(0,r.jsx)(n.strong,{children:"Request Header"})," to the request."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Name - for example ",(0,r.jsx)(n.code,{children:"key"})]}),"\n",(0,r.jsxs)(n.li,{children:["Value - for example ",(0,r.jsx)(n.code,{children:"ABC123"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click ",(0,r.jsx)(n.strong,{children:"Save Changes"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Add the ",(0,r.jsx)(n.strong,{children:"K/V Store"})," component."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Action - for example ",(0,r.jsx)(n.code,{children:"Set"})]}),"\n",(0,r.jsxs)(n.li,{children:["Key - for example ",(0,r.jsx)(n.code,{children:"prods"})]}),"\n",(0,r.jsxs)(n.li,{children:["Data - for example ",(0,r.jsx)(n.code,{children:"[products[0].color]"})]}),"\n"]}),"\n",(0,r.jsx)("img",{src:(0,l.Ay)("img/api-testing/kv-examples/adv-kv-set.png"),alt:"set the key/value store"}),"\n",(0,r.jsxs)(n.p,{children:["This step assigns a key in the Key/Value Store to a value from the response payload. In this case, use ",(0,r.jsx)(n.code,{children:"color"}),", which is an array."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click ",(0,r.jsx)(n.strong,{children:"Save Changes"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Next, add another ",(0,r.jsx)(n.strong,{children:"K/V Store"})," component."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Action - for example ",(0,r.jsx)(n.code,{children:"Load"})]}),"\n",(0,r.jsxs)(n.li,{children:["Key - for example ",(0,r.jsx)(n.code,{children:"prods"})]}),"\n",(0,r.jsxs)(n.li,{children:["Variable - for example ",(0,r.jsx)(n.code,{children:"kvprods"})]}),"\n"]}),"\n",(0,r.jsx)("img",{src:(0,l.Ay)("img/api-testing/kv-examples/kv-load.png"),alt:"load method for K/V store component"}),"\n",(0,r.jsxs)(n.p,{children:["In this step, you retrieve the Key/Value pair from the store. In this example, assign the retrieved value to the variable ",(0,r.jsx)(n.code,{children:"kvprods"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click ",(0,r.jsx)(n.strong,{children:"Save Changes"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Add a ",(0,r.jsx)(n.strong,{children:"Comment"})," component."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Comment - for example ",(0,r.jsx)(n.code,{children:"${kvprods}"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The comment will print the value on the test report so you can see the change at the end of this workflow."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Next, add a new ",(0,r.jsx)(n.strong,{children:"K/V Store"})," component."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Action - for example ",(0,r.jsx)(n.code,{children:"Push"})]}),"\n",(0,r.jsxs)(n.li,{children:["Key - for example ",(0,r.jsx)(n.code,{children:"prods"})]}),"\n",(0,r.jsxs)(n.li,{children:["Data - for example ",(0,r.jsx)(n.code,{children:"999"})]}),"\n"]}),"\n",(0,r.jsx)("img",{src:(0,l.Ay)("img/api-testing/kv-examples/adv-push-kv.png"),alt:"push method for K/V store component"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["In this step, you push the new data onto the end of the existing array. In this example, you push the integer 999 onto the ",(0,r.jsx)(n.code,{children:"prods"})," array."]}),"\n",(0,r.jsxs)(n.ol,{start:"11",children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click ",(0,r.jsx)(n.strong,{children:"Save Changes"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Add a new ",(0,r.jsx)(n.strong,{children:"K/V Store"})," component."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Action - for example ",(0,r.jsx)(n.code,{children:"Load"})]}),"\n",(0,r.jsxs)(n.li,{children:["Key - for example ",(0,r.jsx)(n.code,{children:"prods"})]}),"\n",(0,r.jsxs)(n.li,{children:["Variable - for example ",(0,r.jsx)(n.code,{children:"kvprods"})]}),"\n"]}),"\n",(0,r.jsx)("img",{src:(0,l.Ay)("img/api-testing/kv-examples/adv-load-kv.png"),alt:"push method for K/V store component"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"In this step, you load the modified data into the test from the Key/Value Store."}),"\n",(0,r.jsxs)(n.ol,{start:"13",children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click ",(0,r.jsx)(n.strong,{children:"Save Changes"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Add a ",(0,r.jsx)(n.strong,{children:"Comment"})," component."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Comment - for example ",(0,r.jsx)(n.code,{children:"${kvprods}"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"This will print the value so you can see the changes on the test report."}),"\n",(0,r.jsxs)(n.ol,{start:"15",children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click ",(0,r.jsx)(n.strong,{children:"Save Changes"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Run"})," the test."]}),"\n",(0,r.jsx)("img",{src:(0,l.Ay)("img/api-testing/kv-examples/report.png"),alt:"Test Report"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The test report shows that you have pushed the number 999 onto the array stored in the key ",(0,r.jsx)(n.code,{children:"prods"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"step-2-pop",children:"Step 2: Pop"}),"\n",(0,r.jsxs)(n.p,{children:["In this step, you will remove the data with ",(0,r.jsx)(n.strong,{children:"Pop"}),"."]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Add a new ",(0,r.jsx)(n.strong,{children:"K/V Store"})," component."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Action - for example ",(0,r.jsx)(n.code,{children:"Pop"})]}),"\n",(0,r.jsxs)(n.li,{children:["Key - for example ",(0,r.jsx)(n.code,{children:"prods"})]}),"\n",(0,r.jsxs)(n.li,{children:["Variable - for example ",(0,r.jsx)(n.code,{children:"popped"})]}),"\n"]}),"\n",(0,r.jsx)("img",{src:(0,l.Ay)("img/api-testing/kv-examples/kv-pop.png"),alt:"pop method for K/V store component"}),"\n",(0,r.jsxs)(n.p,{children:["In this step, you provide the name of the key from the Key/Value Store (",(0,r.jsx)(n.code,{children:"prods"}),"), and the name of the variable you would like to assign the popped value to (",(0,r.jsx)(n.code,{children:"popped"}),")."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{title:"Important",type:"warning",children:(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"Pop"})," method removes the last value in an array and returns the value itself."]})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click ",(0,r.jsx)(n.strong,{children:"Save Changes"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Add a new ",(0,r.jsx)(n.strong,{children:"K/V Store"})," component."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Action - for example ",(0,r.jsx)(n.code,{children:"Load"})]}),"\n",(0,r.jsxs)(n.li,{children:["Key - for example ",(0,r.jsx)(n.code,{children:"prods"})]}),"\n",(0,r.jsxs)(n.li,{children:["Variable - for example ",(0,r.jsx)(n.code,{children:"kvprods"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"In this step, you load the modified key from the Key/Value Store."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click ",(0,r.jsx)(n.strong,{children:"Save Changes"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Add a ",(0,r.jsx)(n.strong,{children:"Comment"})," component."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Comment - for example ",(0,r.jsx)(n.code,{children:"${popped}"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"This will print the popped value so you can see it on the test report."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click ",(0,r.jsx)(n.strong,{children:"Save Changes"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Add a ",(0,r.jsx)(n.strong,{children:"Comment"})," component."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Comment - for example ",(0,r.jsx)(n.code,{children:"${kvprods}"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"This will print the final state of the array in the K/V Store so you can see the changes on the test report."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click ",(0,r.jsx)(n.strong,{children:"Save Changes"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"The second part of the test looks like:"}),"\n",(0,r.jsx)("img",{src:(0,l.Ay)("img/api-testing/kv-examples/final-second-step.png"),alt:"Final result"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"    - id: kv\n      key: prods\n      action: pop\n      var: popped\n    - id: kv\n      key: prods\n      action: load\n      var: popped\n    - id: comment\n      text: ${popped}\n    - id: comment\n      text: ${kvprods}\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Run"})," the test."]}),"\n",(0,r.jsx)("img",{src:(0,l.Ay)("img/api-testing/kv-examples/final-report.png"),alt:"Test Report"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The report for the full workflow shows that you first assigned an array to the Key/Value Store with the ",(0,r.jsx)(n.strong,{children:"Set"})," method, then added a value to that array with ",(0,r.jsx)(n.strong,{children:"Push"}),", and then removed the value with ",(0,r.jsx)(n.strong,{children:"Pop"}),". Each time there's a change, you used ",(0,r.jsx)(n.strong,{children:"Load"})," to retrieve an updated value from the Key/Value Store. The last two comments show the final state of the array in the Key/Value Store and the popped value itself. The popped value will only be available in the scope of this test run. The array in the Key/Value Store will remain retrievable until 24 hours after its most recent modification."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"Use Set, Push, and Pop to reset the timer. Load does not reset the timer."})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>o});var r=s(96540);const i={},l=r.createContext(i);function t(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);