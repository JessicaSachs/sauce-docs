"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[45337],{27758:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var t=s(74848),r=s(28453),i=(s(11470),s(19365),s(86025));const o={id:"logical-components",title:"Logical Test Components",sidebar_label:"Logical Components",description:"Learn to write logical components using the Sauce Labs API Testing Composer."},a=void 0,l={id:"api-testing/composer/logical-components",title:"Logical Test Components",description:"Learn to write logical components using the Sauce Labs API Testing Composer.",source:"@site/docs/api-testing/composer/logical-components.md",sourceDirName:"api-testing/composer",slug:"/api-testing/composer/logical-components",permalink:"/sauce-docs/pr-preview/pr-2914/api-testing/composer/logical-components",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/composer/logical-components.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:172488024e4,frontMatter:{id:"logical-components",title:"Logical Test Components",sidebar_label:"Logical Components",description:"Learn to write logical components using the Sauce Labs API Testing Composer."},sidebar:"docs",previous:{title:"Assertion Components",permalink:"/sauce-docs/pr-preview/pr-2914/api-testing/composer/assertion-components"},next:{title:"Other Components",permalink:"/sauce-docs/pr-preview/pr-2914/api-testing/composer/other-components"}},c={},d=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Logical Components",id:"logical-components",level:2},{value:"Each",id:"each",level:3},{value:"If",id:"if",level:3},{value:"While",id:"while",level:3}];function u(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Logical components are a type of component that you can add to a test using the ",(0,t.jsx)(n.strong,{children:"Compose"})," tab (aka Composer). To learn how to access the components and create a test using the Composer see ",(0,t.jsx)(n.a,{href:"/api-testing/composer/",children:"Writing API Tests with the Composer"}),"."]}),"\n",(0,t.jsx)("img",{src:(0,i.Ay)("img/api-testing/logicalComponents.png"),alt:"Logical Components"}),"\n",(0,t.jsx)(n.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["A Sauce Labs account (",(0,t.jsx)(n.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,t.jsx)(n.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")."]}),"\n",(0,t.jsxs)(n.li,{children:["An existing API Testing Project. For details on how to create one, see ",(0,t.jsx)(n.a,{href:"/api-testing/quickstart/",children:"API Testing Quickstart"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Familiarity with the ",(0,t.jsx)(n.a,{href:"/api-testing/composer/",children:"API Testing Composer"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"logical-components",children:"Logical Components"}),"\n",(0,t.jsx)(n.h3,{id:"each",children:"Each"}),"\n",(0,t.jsx)(n.p,{children:"Allows you to iterate over a collection of elements and execute the piece of code for each element."}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("strong",{children:"Parameters"})}),(0,t.jsx)("table",{id:"table-api",children:(0,t.jsxs)("tbody",{children:[(0,t.jsx)("tr",{children:(0,t.jsx)("td",{colSpan:"2",children:"Fields"})}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Expression"})}),(0,t.jsxs)("td",{children:[(0,t.jsx)("p",{children:(0,t.jsxs)("small",{children:["| REQUIRED | ",(0,t.jsx)("a",{href:"/api-testing/composer/expressions/#using-expressions",children:"EXPRESSION"})," |"]})}),(0,t.jsx)("p",{children:"The path of the collection you want to iterate on."})]})]})]})}),(0,t.jsx)("br",{}),(0,t.jsx)("strong",{children:"Examples"}),(0,t.jsx)("img",{src:(0,i.Ay)("img/api-testing/simple_each.png"),alt:"one each"}),"For ",(0,t.jsx)(n.strong,{children:"Each"})," legs collection, checks if the nested ",(0,t.jsx)(n.code,{children:"vector"})," item is an integer value.",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="Legs Collection Example"',children:'{\n  "legs": [\n    {\n      "vector": 1\n    },\n    {\n      "vector": 3\n    }\n  ]\n}\n'})}),"If a collection is nested in another one, you need to refer to them as ",(0,t.jsx)(n.code,{children:"_1"}),", ",(0,t.jsx)(n.code,{children:"_2"}),", and so on.",(0,t.jsx)("img",{src:(0,i.Ay)("img/api-testing/nested-each.png"),alt:"nested each"}),"For ",(0,t.jsx)(n.strong,{children:"Each"})," flights collection nested in ",(0,t.jsx)(n.code,{children:"content"})," item, checks if ",(0,t.jsx)(n.code,{children:"price.amount"})," is an integer. Then, for ",(0,t.jsx)(n.strong,{children:"Each"})," legs array, a nested collection in the flights collection, checks if ",(0,t.jsx)(n.code,{children:"vector"})," item is an integer value.",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="Nested Collection Example"',children:'{\n  "content": {\n    "flights": [\n      {\n        "price": {\n          "amount": 100\n        },\n        "legs": [\n          {\n            "vector": 1\n          },\n          {\n            "vector": 3\n          }\n        ]\n      }\n    ]\n  }\n}\n'})})]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("strong",{children:"Code View Examples"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"- id: each\n  children:\n    - id: assert-is\n      expression: _1.vector\n      type: integer\n  expression: payload.legs\n"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"- id: each\n  children:\n    - id: assert-is\n      expression: _1.price.amount\n      type: integer\n    - id: each\n      children:\n        - id: assert-is\n          expression: _2.vector\n          type: integer\n      expression: _1.legs\n  expression: payload.content.flights\n"})})]}),"\n",(0,t.jsx)(n.h3,{id:"if",children:"If"}),"\n",(0,t.jsx)(n.p,{children:"Allows you to run a specific piece of code only if a specific condition is met."}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("strong",{children:"Parameters"})}),(0,t.jsx)("table",{id:"table-api",children:(0,t.jsxs)("tbody",{children:[(0,t.jsx)("tr",{children:(0,t.jsx)("td",{colSpan:"2",children:"Fields"})}),(0,t.jsx)("tr",{children:(0,t.jsxs)("td",{children:[(0,t.jsx)("p",{children:(0,t.jsxs)("small",{children:["| REQUIRED | ",(0,t.jsx)("a",{href:"/api-testing/composer/expressions/#using-expressions",children:"EXPRESSION"})," |"]})}),(0,t.jsx)("p",{children:"The path of the collection you want to iterate on."})]})})]})}),(0,t.jsx)("br",{}),(0,t.jsx)("strong",{children:"Examples"}),"If ",(0,t.jsx)(n.code,{children:"payload.success"})," is equal to true then the code within the element is executed, otherwise is skipped.",(0,t.jsx)("img",{src:(0,i.Ay)("img/api-testing/if.png"),alt:"if.png"}),"If ",(0,t.jsx)(n.code,{children:"_1.intermediate"})," exists then the code within the element is executed, otherwise is skipped. This is useful when the element is not always present.",(0,t.jsx)("img",{src:(0,i.Ay)("img/api-testing/ifexists.png"),alt:"ifexists.png"})]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("strong",{children:"Code View Examples"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"- id: if\n  children:\n  - id: assert-equals\n    expression: payload.message\n    value: Seats Available\n  - id: assert-equals\n    expression: payload.content.flightid\n    value: ${id}\n    type: string\n  expression: payload.success == true\n"})})]}),"\n",(0,t.jsx)(n.h3,{id:"while",children:"While"}),"\n",(0,t.jsx)(n.p,{children:"Allows you to run a block of assertions as long as a condition is valid."}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("strong",{children:"Parameters"})}),(0,t.jsx)("table",{id:"table-api",children:(0,t.jsxs)("tbody",{children:[(0,t.jsx)("tr",{children:(0,t.jsx)("td",{colSpan:"2",children:"Fields"})}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Expression"})}),(0,t.jsxs)("td",{children:[(0,t.jsx)("p",{children:(0,t.jsxs)("small",{children:["| REQUIRED | ",(0,t.jsx)("a",{href:"/api-testing/composer/expressions/#using-expressions",children:"EXPRESSION"})," |"]})}),(0,t.jsx)("p",{children:"The condition that has to be met for the assertions block to be executed."})]})]})]})}),(0,t.jsx)("br",{}),(0,t.jsx)("strong",{children:"Examples"}),(0,t.jsx)("br",{}),(0,t.jsx)("img",{src:(0,i.Ay)("img/api-testing/while.png"),alt:"while.png"})]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("strong",{children:"Code View Examples"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"- id: while\n  children:\n  - id: comment\n    text: Executes assertion until items are less than 5\n  expression: items<5\n"})})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},19365:(e,n,s)=>{s.d(n,{A:()=>o});s(96540);var t=s(34164);const r={tabItem:"tabItem_Ymn6"};var i=s(74848);function o(e){let{children:n,hidden:s,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,o),hidden:s,children:n})}},11470:(e,n,s)=>{s.d(n,{A:()=>w});var t=s(96540),r=s(34164),i=s(23104),o=s(56347),a=s(205),l=s(57485),c=s(31682),d=s(70679);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:s}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:s,attributes:t,default:r}}=e;return{value:n,label:s,attributes:t,default:r}}))}(s);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function p(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:s}=e;const r=(0,o.W6)(),i=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,l.aZ)(i),(0,t.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function g(e){const{defaultValue:n,queryString:s=!1,groupId:r}=e,i=h(e),[o,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=s.find((e=>e.default))??s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:i}))),[c,u]=m({queryString:s,groupId:r}),[g,x]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,d.Dv)(s);return[r,(0,t.useCallback)((e=>{s&&i.set(e)}),[s,i])]}({groupId:r}),j=(()=>{const e=c??g;return p({value:e,tabValues:i})?e:null})();(0,a.A)((()=>{j&&l(j)}),[j]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),x(e)}),[u,x,i]),tabValues:i}}var x=s(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=s(74848);function b(e){let{className:n,block:s,selectedValue:t,selectValue:o,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const n=e.currentTarget,s=l.indexOf(n),r=a[s].value;r!==t&&(c(n),o(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=l.indexOf(e.currentTarget)+1;n=l[s]??l[0];break}case"ArrowLeft":{const s=l.indexOf(e.currentTarget)-1;n=l[s]??l[l.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":s},n),children:a.map((e=>{let{value:n,label:s,attributes:i}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...i,className:(0,r.A)("tabs__item",j.tabItem,i?.className,{"tabs__item--active":t===n}),children:s??n},n)}))})}function v(e){let{lazy:n,children:s,selectedValue:i}=e;const o=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===i));return e?(0,t.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function y(e){const n=g(e);return(0,f.jsxs)("div",{className:(0,r.A)("tabs-container",j.tabList),children:[(0,f.jsx)(b,{...n,...e}),(0,f.jsx)(v,{...n,...e})]})}function w(e){const n=(0,x.A)();return(0,f.jsx)(y,{...e,children:u(e.children)},String(n))}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>a});var t=s(96540);const r={},i=t.createContext(r);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);