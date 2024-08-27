"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[45492],{65509:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var r=s(74848),n=s(28453),a=s(11470),l=s(19365);s(86025);const c={id:"quickstart",title:"Cypress Quickstart",sidebar_label:"Quickstart"},i=void 0,o={id:"web-apps/automated-testing/cypress/quickstart",title:"Cypress Quickstart",description:"Use saucectl \u2014 the Sauce Labs test orchestrator CLI \u2014 to run Cypress tests directly from your existing Cypress project.",source:"@site/docs/web-apps/automated-testing/cypress/quickstart.md",sourceDirName:"web-apps/automated-testing/cypress",slug:"/web-apps/automated-testing/cypress/quickstart",permalink:"/sauce-docs/pr-preview/pr-2907/web-apps/automated-testing/cypress/quickstart",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/web-apps/automated-testing/cypress/quickstart.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:172477197e4,frontMatter:{id:"quickstart",title:"Cypress Quickstart",sidebar_label:"Quickstart"},sidebar:"docs",previous:{title:"Using Cypress",permalink:"/sauce-docs/pr-preview/pr-2907/web-apps/automated-testing/cypress"},next:{title:"Configuration Version Overview",permalink:"/sauce-docs/pr-preview/pr-2907/web-apps/automated-testing/cypress/yaml"}},u={},d=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Step 1: Install <code>saucectl</code>",id:"step-1-install-saucectl",level:2},{value:"Step 2: Link Your Sauce Labs Account",id:"step-2-link-your-sauce-labs-account",level:2},{value:"Step 3: Set up Your Cypress Project",id:"step-3-set-up-your-cypress-project",level:2},{value:"Step 4: Run Tests",id:"step-4-run-tests",level:2}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["Use ",(0,r.jsx)(t.code,{children:"saucectl"})," \u2014 the Sauce Labs test orchestrator CLI \u2014 to run ",(0,r.jsx)(t.a,{href:"https://docs.cypress.io/guides/overview/why-cypress.html",children:"Cypress"})," tests directly from your existing Cypress project."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Don't have Cypress tests but want to try? Follow the steps below to use the Cypress Demo Repo to build a sample project structure, working configuration file, and sample Cypress test \u2014 get up and running in less than 10 minutes!"}),"\n",(0,r.jsxs)(t.li,{children:["Already running Cypress? Let ",(0,r.jsx)(t.code,{children:"saucectl"})," run your tests in the Sauce Labs Cloud, where you have access to thousands of OS/browser combinations and Sauce Labs analytics."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["A Sauce Labs account (",(0,r.jsx)(t.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,r.jsx)(t.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")"]}),"\n",(0,r.jsxs)(t.li,{children:["Your Sauce Labs ",(0,r.jsx)(t.a,{href:"https://app.saucelabs.com/user-settings",children:"Username and Access Key"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://nodejs.org/en/",children:"Node.js"})," to use the NPM package manager"]}),"\n",(0,r.jsxs)(t.li,{children:["A ",(0,r.jsx)(t.a,{href:"https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home",children:"GitHub"})," account"]}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://git-scm.com/downloads",children:"Git"})}),"\n"]}),"\n",(0,r.jsxs)(t.h2,{id:"step-1-install-saucectl",children:["Step 1: Install ",(0,r.jsx)(t.code,{children:"saucectl"})]}),"\n",(0,r.jsxs)(t.p,{children:["In a terminal shell, run the install command from your chosen ",(0,r.jsx)(t.code,{children:"saucectl"})," home directory."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"npm install -g saucectl\n"})}),"\n",(0,r.jsx)(t.h2,{id:"step-2-link-your-sauce-labs-account",children:"Step 2: Link Your Sauce Labs Account"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"saucectl"})," requires access to a valid Sauce Labs account."]}),"\n",(0,r.jsxs)(t.admonition,{title:"Use Environment Variables",type:"tip",children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"saucectl"})," detects your Sauce Labs credentials ",(0,r.jsx)(t.a,{href:"/basics/environment-variables",children:"environment variables"})," and prioritizes them over values in the ",(0,r.jsx)(t.code,{children:"credentials.yml"})," file when both are present. ",(0,r.jsx)(t.strong,{children:"If you have set them, you may skip this step."})," Not sure if you have them set? Run the following command to check:"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"echo $SAUCE_USERNAME\necho $SAUCE_ACCESS_KEY\n"})}),(0,r.jsx)(t.p,{children:"If a value is returned for both variables, they are set."})]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Run the ",(0,r.jsx)(t.code,{children:"configure"})," command:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"saucectl configure\n"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Enter your Sauce Labs Username and Access Key at the prompts."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"step-3-set-up-your-cypress-project",children:"Step 3: Set up Your Cypress Project"}),"\n",(0,r.jsxs)(t.p,{children:["Clone the ",(0,r.jsx)(t.a,{href:"https://github.com/saucelabs/saucectl-cypress-example",children:"Cypress Demo Repo"})," to get a Cypress project structure, Cypress-ready configuration file, and sample Cypress test. Use the command below that is applicable to your GitHub setup."]}),"\n",(0,r.jsxs)(a.A,{defaultValue:"https",values:[{label:"HTTPS",value:"https"},{label:"SSH",value:"ssh"}],children:[(0,r.jsx)(l.A,{value:"https",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"git clone https://github.com/saucelabs/saucectl-cypress-example.git\n"})})}),(0,r.jsx)(l.A,{value:"ssh",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"git clone git@github.com:saucelabs/saucectl-cypress-example.git\n"})})})]}),"\n",(0,r.jsx)(t.h2,{id:"step-4-run-tests",children:"Step 4: Run Tests"}),"\n",(0,r.jsxs)(t.p,{children:["Navigate to the versioned example you would like to use. v1 is an example for Cypress 10 and above. Then use the ",(0,r.jsx)(t.code,{children:"run"})," command to execute the sample test included with the ",(0,r.jsx)(t.code,{children:"saucectl"})," example."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"cd saucectl-cypress-example/v1\nsaucectl run\n"})}),"\n",(0,r.jsx)(t.p,{children:"The console displays the executing tests, distinguishing which mode is running."}),"\n",(0,r.jsxs)(t.p,{children:["The results and test assets are available immediately following test completion in your ",(0,r.jsx)(t.a,{href:"https://app.saucelabs.com/dashboard/tests/vdc",children:"Sauce Labs account"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},19365:(e,t,s)=>{s.d(t,{A:()=>l});s(96540);var r=s(18215);const n={tabItem:"tabItem_Ymn6"};var a=s(74848);function l(e){let{children:t,hidden:s,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(n.tabItem,l),hidden:s,children:t})}},11470:(e,t,s)=>{s.d(t,{A:()=>w});var r=s(96540),n=s(18215),a=s(23104),l=s(56347),c=s(205),i=s(57485),o=s(31682),u=s(89466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:s}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:s,attributes:r,default:n}}=e;return{value:t,label:s,attributes:r,default:n}}))}(s);return function(e){const t=(0,o.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,s])}function h(e){let{value:t,tabValues:s}=e;return s.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:s}=e;const n=(0,l.W6)(),a=function(e){let{queryString:t=!1,groupId:s}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:t,groupId:s});return[(0,i.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(n.location.search);t.set(a,e),n.replace({...n.location,search:t.toString()})}),[a,n])]}function b(e){const{defaultValue:t,queryString:s=!1,groupId:n}=e,a=p(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=s.find((e=>e.default))??s[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[o,d]=m({queryString:s,groupId:n}),[b,f]=function(e){let{groupId:t}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,a]=(0,u.Dv)(s);return[n,(0,r.useCallback)((e=>{s&&a.set(e)}),[s,a])]}({groupId:n}),x=(()=>{const e=o??b;return h({value:e,tabValues:a})?e:null})();(0,c.A)((()=>{x&&i(x)}),[x]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,a]),tabValues:a}}var f=s(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=s(74848);function v(e){let{className:t,block:s,selectedValue:r,selectValue:l,tabValues:c}=e;const i=[],{blockElementScrollPositionUntilNextRender:o}=(0,a.a_)(),u=e=>{const t=e.currentTarget,s=i.indexOf(t),n=c[s].value;n!==r&&(o(t),l(n))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const s=i.indexOf(e.currentTarget)+1;t=i[s]??i[0];break}case"ArrowLeft":{const s=i.indexOf(e.currentTarget)-1;t=i[s]??i[i.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":s},t),children:c.map((e=>{let{value:t,label:s,attributes:a}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>i.push(e),onKeyDown:d,onClick:u,...a,className:(0,n.A)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":r===t}),children:s??t},t)}))})}function g(e){let{lazy:t,children:s,selectedValue:n}=e;const a=(Array.isArray(s)?s:[s]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function j(e){const t=b(e);return(0,y.jsxs)("div",{className:(0,n.A)("tabs-container",x.tabList),children:[(0,y.jsx)(v,{...e,...t}),(0,y.jsx)(g,{...e,...t})]})}function w(e){const t=(0,f.A)();return(0,y.jsx)(j,{...e,children:d(e.children)},String(t))}},28453:(e,t,s)=>{s.d(t,{R:()=>l,x:()=>c});var r=s(96540);const n={},a=r.createContext(n);function l(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);