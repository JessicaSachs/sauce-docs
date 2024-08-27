"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[6501],{21903:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var s=t(74848),i=t(28453),a=t(86025);const r={id:"integration-test",title:"Build an Integration Test",sidebar_label:"Build an Integration Test",description:"How to generate an integration test"},o=void 0,d={id:"api-testing/use-cases/integration-test",title:"Build an Integration Test",description:"How to generate an integration test",source:"@site/docs/api-testing/use-cases/integration-test.md",sourceDirName:"api-testing/use-cases",slug:"/api-testing/use-cases/integration-test",permalink:"/sauce-docs/pr-preview/pr-2907/api-testing/use-cases/integration-test",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/use-cases/integration-test.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:172477197e4,frontMatter:{id:"integration-test",title:"Build an Integration Test",sidebar_label:"Build an Integration Test",description:"How to generate an integration test"},sidebar:"docs",previous:{title:"Basic Key/Value Store Workflow",permalink:"/sauce-docs/pr-preview/pr-2907/api-testing/use-cases/key-value"},next:{title:"Composing the Request Body",permalink:"/sauce-docs/pr-preview/pr-2907/api-testing/use-cases/compose-body"}},c={},l=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Test Interactions between Endpoints",id:"test-interactions-between-endpoints",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"One of the core features of Sauce Labs API Testing is the ability to create integration tests. An integration test is a test in which you examine a complete user flow, simulating what an API consumer would experience. Integration testing is critical for creating a strong API testing strategy. While only testing individual endpoints is a good start, this method will miss a large number of problems that occur when all services need to work together."}),"\n",(0,s.jsx)(n.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["A Sauce Labs account (",(0,s.jsx)(n.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,s.jsx)(n.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")."]}),"\n",(0,s.jsxs)(n.li,{children:["An existing API Testing Project. For details on how to create one, see ",(0,s.jsx)(n.a,{href:"/api-testing/quickstart/",children:"API Testing Quickstart"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"test-interactions-between-endpoints",children:"Test Interactions between Endpoints"}),"\n",(0,s.jsx)(n.p,{children:"For the purposes of this guide, the example is simple and works with two API endpoints, but your integration test can be longer."}),"\n",(0,s.jsxs)(n.p,{children:["This example, uses an API endpoint that produces an array of all the available products (",(0,s.jsx)(n.a,{href:"http://demoapi.apifortress.com/api/retail/product",children:"http://demoapi.apifortress.com/api/retail/product"}),") and another endpoint that shows the details of a specific product based on its ID (",(0,s.jsx)(n.a,{href:"http://demoapi.apifortress.com/api/retail/product/$%7Bid%7D",children:"http://demoapi.apifortress.com/api/retail/product/${id}"}),")."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-http",metastring:"request",children:"http://demoapi.apifortress.com/api/retail/product\nhttp://demoapi.apifortress.com/api/retail/product/${id}\n"})}),"\n",(0,s.jsx)(n.p,{children:"To create an integration test to check the interaction between the endpoints:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Call the product listing endpoint by adding a ",(0,s.jsx)(n.code,{children:"GET"})," request and assign the response to the ",(0,s.jsx)(n.code,{children:"productsPayload"})," variable. The endpoint requires an Authentication header so add the Request Header component and enter ",(0,s.jsx)(n.code,{children:"key"})," into the Name field and ",(0,s.jsx)(n.code,{children:"ABC123"})," into the Value field."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["(Optionally) Add an assert-is component to verify that ",(0,s.jsx)(n.code,{children:"productsPayload"})," is an array."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"You can use the Comment component and print the whole payload response inside your test report by writing ${productsPayload}"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsxs)(n.li,{children:["Add an ",(0,s.jsx)(n.code,{children:"each"})," component and reference the ",(0,s.jsx)(n.code,{children:"productsPayload"})," object."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["In a scenario in which the response contains many products, it may be useful to pick a few at random by using ",(0,s.jsx)(n.a,{href:"/api-testing/composer/expressions/#pick",children:"pick(n)"}),"."]})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Test the response payload for the endpoint by adding assertions."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Add a new ",(0,s.jsx)(n.code,{children:"Set(variable)"})," assertion to set the ",(0,s.jsx)(n.code,{children:"id"})," variable as every single product that is returned:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Variable (the variable name) - for example ",(0,s.jsx)(n.code,{children:"id"})]}),"\n",(0,s.jsxs)(n.li,{children:["Mode (the variable type) - for example ",(0,s.jsx)(n.code,{children:"String"})]}),"\n",(0,s.jsxs)(n.li,{children:["Value (the value the variable will contain) - for example ",(0,s.jsx)(n.code,{children:"${_1.id}"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The system uses ",(0,s.jsx)(n.code,{children:"_1"})," automatically when recognizing a subroutine, which makes it easier when there are multiple sub-levels."]}),"\n",(0,s.jsxs)(n.p,{children:["This is how your test might look after you set the ",(0,s.jsx)(n.code,{children:"id"})," variable:"]}),"\n",(0,s.jsx)("img",{src:(0,a.A)("/img/api-testing/int-test-endpoints.png"),alt:"Testing interactions between endpoints",width:"600"}),"\n",(0,s.jsxs)(n.ol,{start:"6",children:["\n",(0,s.jsxs)(n.li,{children:["Create a ",(0,s.jsx)(n.code,{children:"GET"})," to the product details endpoint, using the new ",(0,s.jsx)(n.code,{children:"id"})," variable as the ",(0,s.jsx)(n.strong,{children:"id"})," parameter. The endpoint requires an Authentication header so add the Request Header component and enter ",(0,s.jsx)(n.code,{children:"key"})," into the Name field and ",(0,s.jsx)(n.code,{children:"ABC123"})," into the Value field."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"Variables last through the entire test unless overwritten."})}),"\n",(0,s.jsxs)(n.ol,{start:"7",children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Test the response payload for the endpoint."}),"\n",(0,s.jsx)("img",{src:(0,a.A)("/img/api-testing/int-test-response-payload.webp"),alt:"Testing the response payload"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"In Code view, the test should look like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'- id: get\n  children:\n    - id: header\n      name: key\n      value: ABC123\n  url: http://demoapi.apifortress.com/api/retail/product\n  var: productsPayload\n  mode: json\n- id: assert-is\n  expression: productsPayload\n  comment: payload must be an array\n  type: array\n- id: each\n  children:\n    - id: comment\n      text: "product id is: ${_1.id} and product name is: ${_1.name}"\n    - id: assert-is\n      expression: _1.id\n      comment: id must be an integer value\n      type: integer\n    - id: set\n      var: id\n      mode: string\n      value: ${_1.id}\n    - id: assert-exists\n      expression: _1.name\n      comment: name must exists\n    - id: assert-is\n      expression: _1.price\n      comment: price must be a float number\n      type: float\n    - id: assert-exists\n      expression: _1.category\n      comment: category must exists\n    - id: assert-exists\n      expression: _1.description\n      comment: description must exists\n    - id: assert-is\n      expression: _1.quantity\n      comment: quantity must be an integer value\n      type: integer\n    - id: assert-greater\n      expression: _1.quantity\n      comment: quantity must be greater than 0\n      value: 0\n    - id: assert-is\n      expression: _1.imageURL\n      comment: imageURL must be a valid url value\n      type: url\n    - id: assert-is\n      expression: _1.color\n      comment: color must be an array\n      type: array\n    - id: each\n      children:\n        - id: assert-exists\n          expression: _2\n          comment: color array should contain some values\n        - id: assert-in\n          expression: _2\n          comment: colors must be the expected one\n          value:\n            - yellow\n            - blue\n            - red\n            - green\n            - brown\n            - orange\n            - gray\n            - pink\n            - black\n            - white\n      expression: _1.color\n    - id: assert-exists\n      expression: _1.createdAt\n      comment: createdAt must exists\n    - id: assert-exists\n      expression: _1.updatedAt\n      comment: updateAt must exists\n    - id: comment\n      text: get product details\n    - id: get\n      children:\n        - id: header\n          name: key\n          value: ABC123\n      url: http://demoapi.apifortress.com/api/retail/product/${id}\n      var: productPayload\n      mode: json\n    - id: assert-exists\n      expression: productPayload\n      comment: payload must exist, if not, test does not need to be executed\n    - id: comment\n      text: "product id is: ${productPayload.id} and product name is:\n        ${productPayload.name}"\n    - id: assert-is\n      expression: productPayload.id\n      comment: id must be an integer value\n      type: integer\n    - id: assert-exists\n      expression: productPayload.name\n      comment: name must exists\n    - id: assert-is\n      expression: productPayload.price\n      comment: price must be a float number\n      type: float\n    - id: assert-exists\n      expression: productPayload.category\n      comment: category must exists\n    - id: assert-exists\n      expression: productPayload.description\n      comment: description must exists\n    - id: assert-is\n      expression: productPayload.quantity\n      comment: quantity must be an integer value\n      type: integer\n    - id: assert-greater\n      expression: productPayload.quantity\n      comment: quantity must be greater than 0\n      value: 0\n    - id: assert-is\n      expression: productPayload.imageURL\n      comment: imageURL must be a valid url value\n      type: url\n    - id: assert-is\n      expression: productPayload.color\n      comment: color must be an array\n      type: array\n    - id: each\n      children:\n        - id: assert-exists\n          expression: _2\n          comment: color array should contain some values\n        - id: assert-in\n          expression: _2\n          comment: colors must be the expected one\n          value:\n            - yellow\n            - blue\n            - red\n            - green\n            - brown\n            - orange\n            - gray\n            - pink\n            - black\n            - white\n      expression: productPayload.color\n    - id: assert-exists\n      expression: productPayload.createdAt\n      comment: createdAt must exists\n    - id: assert-exists\n      expression: productPayload.updatedAt\n      comment: updateAt must exists\n  expression: productsPayload.pick(5)\n'})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var s=t(96540);const i={},a=s.createContext(i);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);