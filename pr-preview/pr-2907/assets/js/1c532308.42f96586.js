"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[96226],{60131:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>u,toc:()=>d});var a=s(74848),r=s(28453),n=s(11470),l=s(19365);s(86025);const c={id:"quickstart",title:"Cucumber.js with Playwright Quickstart",sidebar_label:"Quickstart"},i=void 0,u={id:"web-apps/automated-testing/cucumberjs-playwright/quickstart",title:"Cucumber.js with Playwright Quickstart",description:"saucectl -- the Sauce Labs test orchestrator CLI provides a way to run Cucumber.js tests with Playwright. In this case, Cucumber.js acts as the test framework, utilizing Playwright as the automation framework. Use saucectl to run Cucumber-js with Playwright tests directly from your existing Cucumber.js Playwright project.",source:"@site/docs/web-apps/automated-testing/cucumberjs-playwright/quickstart.md",sourceDirName:"web-apps/automated-testing/cucumberjs-playwright",slug:"/web-apps/automated-testing/cucumberjs-playwright/quickstart",permalink:"/sauce-docs/pr-preview/pr-2907/web-apps/automated-testing/cucumberjs-playwright/quickstart",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/web-apps/automated-testing/cucumberjs-playwright/quickstart.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:172477197e4,frontMatter:{id:"quickstart",title:"Cucumber.js with Playwright Quickstart",sidebar_label:"Quickstart"},sidebar:"docs",previous:{title:"Limitations",permalink:"/sauce-docs/pr-preview/pr-2907/web-apps/automated-testing/playwright/limitations"},next:{title:"YAML Configuration",permalink:"/sauce-docs/pr-preview/pr-2907/web-apps/automated-testing/cucumberjs-playwright/yaml"}},o={},d=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Step 1: Install <code>saucectl</code>",id:"step-1-install-saucectl",level:2},{value:"Step 2: Link Your Sauce Labs Account",id:"step-2-link-your-sauce-labs-account",level:2},{value:"Step 3: Clone the Playwright Project",id:"step-3-clone-the-playwright-project",level:2},{value:"Step 4: Run Tests",id:"step-4-run-tests",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"saucectl"})," -- the Sauce Labs test orchestrator CLI provides a way to run Cucumber.js tests with Playwright. In this case, Cucumber.js acts as the test framework, utilizing Playwright as the automation framework. Use ",(0,a.jsx)(t.code,{children:"saucectl"})," to run ",(0,a.jsx)(t.a,{href:"https://github.com/cucumber/cucumber-js",children:"Cucumber-js"})," with ",(0,a.jsx)(t.a,{href:"https://github.com/microsoft/playwright",children:"Playwright"})," tests directly from your existing Cucumber.js Playwright project."]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Don't have Cucumber.js with Playwright tests but want to try? The Demo Repo includes a sample project structure, working configuration file, and sample Playwright test so you can get up and running in less than 10 minutes!"}),"\n",(0,a.jsxs)(t.li,{children:["Already running Cucumber.js with Playwright? Let ",(0,a.jsx)(t.code,{children:"saucectl"})," run your tests in the Sauce Labs Cloud, where you have access to thousands of OS/browser combinations and Sauce Labs analytics."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["A Sauce Labs account (if you don't have one, start a ",(0,a.jsx)(t.a,{href:"https://saucelabs.com/sign-up",children:"free trial"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Your Sauce Labs ",(0,a.jsx)(t.a,{href:"https://app.saucelabs.com/user-settings",children:"Username and Access Key"})]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://nodejs.org/en/",children:"Node.js"})," to use the NPM package manager"]}),"\n",(0,a.jsxs)(t.li,{children:["A ",(0,a.jsx)(t.a,{href:"https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home",children:"GitHub"})," account"]}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://git-scm.com/downloads",children:"Git"})}),"\n"]}),"\n",(0,a.jsxs)(t.h2,{id:"step-1-install-saucectl",children:["Step 1: Install ",(0,a.jsx)(t.code,{children:"saucectl"})]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"npm install -g saucectl\n"})}),"\n",(0,a.jsx)(t.h2,{id:"step-2-link-your-sauce-labs-account",children:"Step 2: Link Your Sauce Labs Account"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"saucectl"})," requires access to a valid Sauce Labs account."]}),"\n",(0,a.jsxs)(t.admonition,{title:"Use Environment Variables",type:"tip",children:[(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"saucectl"})," detects your Sauce Labs credentials ",(0,a.jsx)(t.a,{href:"/basics/environment-variables",children:"environment variables"})," and prioritizes them over values in the ",(0,a.jsx)(t.code,{children:"credentials.yml"})," file when both are present. ",(0,a.jsx)(t.strong,{children:"If you have set them, you may skip this step."})," Not sure if you have them set? Run the following command to check:"]}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"echo $SAUCE_USERNAME\necho $SAUCE_ACCESS_KEY\n"})}),(0,a.jsx)(t.p,{children:"If a value is returned for both variables, they are set."})]}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Run the ",(0,a.jsx)(t.code,{children:"configure"})," command:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"saucectl configure\n"})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Enter your Sauce Labs Username and Access Key at the prompts."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"step-3-clone-the-playwright-project",children:"Step 3: Clone the Playwright Project"}),"\n",(0,a.jsxs)(n.A,{defaultValue:"https",values:[{label:"HTTPS",value:"https"},{label:"SSH",value:"ssh"}],children:[(0,a.jsx)(l.A,{value:"https",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"git clone https://github.com/saucelabs/saucectl-playwright-example.git\n"})})}),(0,a.jsx)(l.A,{value:"ssh",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"git clone git@github.com:saucelabs/saucectl-playwright-example.git\n"})})})]}),"\n",(0,a.jsx)(t.h2,{id:"step-4-run-tests",children:"Step 4: Run Tests"}),"\n",(0,a.jsxs)(t.p,{children:["Navigate to the root of the Cucumber.js example folder you just cloned, then use the ",(0,a.jsx)(t.code,{children:"run"})," command to execute the sample test included with the ",(0,a.jsx)(t.code,{children:"saucectl"})," example."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"cd saucectl-playwright-example/examples/cucumber\nsaucectl run\n"})}),"\n",(0,a.jsx)(t.p,{children:"The console displays the executing tests, distinguishing which mode is running."}),"\n",(0,a.jsxs)(t.p,{children:["The results and test assets are available immediately following test completion in your ",(0,a.jsx)(t.a,{href:"https://app.saucelabs.com/dashboard/tests/vdc",children:"Sauce Labs account"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,t,s)=>{s.d(t,{A:()=>l});s(96540);var a=s(18215);const r={tabItem:"tabItem_Ymn6"};var n=s(74848);function l(e){let{children:t,hidden:s,className:l}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,l),hidden:s,children:t})}},11470:(e,t,s)=>{s.d(t,{A:()=>v});var a=s(96540),r=s(18215),n=s(23104),l=s(56347),c=s(205),i=s(57485),u=s(31682),o=s(89466);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:s}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:s,attributes:a,default:r}}=e;return{value:t,label:s,attributes:a,default:r}}))}(s);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,s])}function p(e){let{value:t,tabValues:s}=e;return s.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:s}=e;const r=(0,l.W6)(),n=function(e){let{queryString:t=!1,groupId:s}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:t,groupId:s});return[(0,i.aZ)(n),(0,a.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(r.location.search);t.set(n,e),r.replace({...r.location,search:t.toString()})}),[n,r])]}function b(e){const{defaultValue:t,queryString:s=!1,groupId:r}=e,n=h(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=s.find((e=>e.default))??s[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:n}))),[u,d]=m({queryString:s,groupId:r}),[b,g]=function(e){let{groupId:t}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,n]=(0,o.Dv)(s);return[r,(0,a.useCallback)((e=>{s&&n.set(e)}),[s,n])]}({groupId:r}),f=(()=>{const e=u??b;return p({value:e,tabValues:n})?e:null})();(0,c.A)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),g(e)}),[d,g,n]),tabValues:n}}var g=s(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=s(74848);function x(e){let{className:t,block:s,selectedValue:a,selectValue:l,tabValues:c}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,n.a_)(),o=e=>{const t=e.currentTarget,s=i.indexOf(t),r=c[s].value;r!==a&&(u(t),l(r))},d=e=>{let t=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const s=i.indexOf(e.currentTarget)+1;t=i[s]??i[0];break}case"ArrowLeft":{const s=i.indexOf(e.currentTarget)-1;t=i[s]??i[i.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":s},t),children:c.map((e=>{let{value:t,label:s,attributes:n}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>i.push(e),onKeyDown:d,onClick:o,...n,className:(0,r.A)("tabs__item",f.tabItem,n?.className,{"tabs__item--active":a===t}),children:s??t},t)}))})}function w(e){let{lazy:t,children:s,selectedValue:r}=e;const n=(Array.isArray(s)?s:[s]).filter(Boolean);if(t){const e=n.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function y(e){const t=b(e);return(0,j.jsxs)("div",{className:(0,r.A)("tabs-container",f.tabList),children:[(0,j.jsx)(x,{...e,...t}),(0,j.jsx)(w,{...e,...t})]})}function v(e){const t=(0,g.A)();return(0,j.jsx)(y,{...e,children:d(e.children)},String(t))}},28453:(e,t,s)=>{s.d(t,{R:()=>l,x:()=>c});var a=s(96540);const r={},n=a.createContext(r);function l(e){const t=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(n.Provider,{value:t},e.children)}}}]);