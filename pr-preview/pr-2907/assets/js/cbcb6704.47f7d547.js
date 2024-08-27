"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[71046],{3812:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=s(74848),r=s(28453);s(11470),s(19365);const a={id:"espresso-xcuitest",title:"Espresso and XCUITest on Sauce Labs",sidebar_label:"Using Espresso and XCUITest",description:"Run Espresso and XCUITest projects on Sauce Labs."},o=void 0,i={id:"mobile-apps/automated-testing/espresso-xcuitest",title:"Espresso and XCUITest on Sauce Labs",description:"Run Espresso and XCUITest projects on Sauce Labs.",source:"@site/docs/mobile-apps/automated-testing/espresso-xcuitest.md",sourceDirName:"mobile-apps/automated-testing",slug:"/mobile-apps/automated-testing/espresso-xcuitest",permalink:"/sauce-docs/pr-preview/pr-2907/mobile-apps/automated-testing/espresso-xcuitest",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/mobile-apps/automated-testing/espresso-xcuitest.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:172477197e4,frontMatter:{id:"espresso-xcuitest",title:"Espresso and XCUITest on Sauce Labs",sidebar_label:"Using Espresso and XCUITest",description:"Run Espresso and XCUITest projects on Sauce Labs."},sidebar:"docs",previous:{title:"Appium Flutter Integration Testing",permalink:"/sauce-docs/pr-preview/pr-2907/mobile-apps/automated-testing/appium/appium-flutter-integration-driver"},next:{title:"XCUITest Introduction",permalink:"/sauce-docs/pr-preview/pr-2907/mobile-apps/automated-testing/espresso-xcuitest/xcuitest-introduction"}},l={},c=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Installation &amp; Setup",id:"installation--setup",level:2},{value:"1. Install <code>saucectl</code>",id:"1-install-saucectl",level:3},{value:"2. Check out the demo repositories",id:"2-check-out-the-demo-repositories",level:3},{value:"3. Link your Sauce Labs account",id:"3-link-your-sauce-labs-account",level:3},{value:"4. Configure your test parameters",id:"4-configure-your-test-parameters",level:3},{value:"5. Run your tests",id:"5-run-your-tests",level:3}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Sauce Labs uses its framework agnostic test orchestrator ",(0,n.jsx)(t.a,{href:"/dev/cli/saucectl",children:(0,n.jsx)(t.code,{children:"saucectl"})})," to execute Espresso and XCUITest tests based on one or more configuration files that instruct ",(0,n.jsx)(t.code,{children:"saucectl"})," to run your tests exactly the way you specify. Results get published in your Sauce Labs account, where you can compare 30 days of results across different environments and frameworks all in one view."]}),"\n",(0,n.jsx)(t.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["A Sauce Labs account (",(0,n.jsx)(t.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,n.jsx)(t.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Your Sauce Labs ",(0,n.jsx)(t.a,{href:"https://app.saucelabs.com/user-settings",children:"Username and Access Key"})]}),"\n",(0,n.jsx)(t.li,{children:"Your Espresso apps and files for real devices and/or emulators"}),"\n",(0,n.jsx)(t.li,{children:"Your XCUITest apps and files for real devices (automated tests for simulators are not supported at this time)"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"installation--setup",children:"Installation & Setup"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"saucectl"})," can execute both Espresso and XCUITest tests, so the set up steps are the same regardless of which framework you are using."]}),"\n",(0,n.jsxs)(t.h3,{id:"1-install-saucectl",children:["1. Install ",(0,n.jsx)(t.code,{children:"saucectl"})]}),"\n",(0,n.jsxs)(t.p,{children:["Begin by installing the ",(0,n.jsx)(t.code,{children:"saucectl"})," CLI so it has access to your local project."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"sudo sh -c 'curl -L https://saucelabs.github.io/saucectl/install | bash -s -- -b /usr/local/bin'\n"})}),"\n",(0,n.jsx)(t.admonition,{title:"Required Minimum Versions",type:"caution",children:(0,n.jsxs)(t.p,{children:["XCUITest for Simulators is in ",(0,n.jsx)("span",{className:"sauceGreen",children:"Beta"})," and requires ",(0,n.jsx)(t.code,{children:"saucectl"})," version ",(0,n.jsx)(t.code,{children:"0.1xx.0"})," or later. If your current version is older, you must upgrade to the most recent one."]})}),"\n",(0,n.jsx)(t.h3,{id:"2-check-out-the-demo-repositories",children:"2. Check out the demo repositories"}),"\n",(0,n.jsxs)(t.p,{children:["Clone or download the ",(0,n.jsx)(t.a,{href:"https://github.com/saucelabs/saucectl-espresso-example",children:"Espresso"})," and/or ",(0,n.jsx)(t.a,{href:"https://github.com/saucelabs/saucectl-xcuitest-example",children:"XCUITest"})," example repos, as applicable to your project, to obtain the ",(0,n.jsx)(t.code,{children:"saucectl"})," directory structure and example files for use as templates."]}),"\n",(0,n.jsx)(t.h3,{id:"3-link-your-sauce-labs-account",children:"3. Link your Sauce Labs account"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Generate a credentials file that ",(0,n.jsx)(t.code,{children:"saucectl"})," can reference to authenticate your CLI commands.","\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"saucectl configure\n"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["Enter your Sauce Labs ",(0,n.jsx)(t.code,{children:"SAUCE_USERNAME"})," and ",(0,n.jsx)(t.code,{children:"SAUCE_ACCESS_KEY"})," at the prompts."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"saucectl"})," creates a ",(0,n.jsx)(t.code,{children:"credentials.yml"})," file in a ",(0,n.jsx)(t.code,{children:".sauce"})," folder of your home directory."]}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{title:"Use Environment Variables",type:"tip",children:(0,n.jsxs)(t.p,{children:["You can set your Sauce Labs credentials as ",(0,n.jsx)(t.a,{href:"/basics/environment-variables",children:"environment variables"})," instead of generating a ",(0,n.jsx)(t.code,{children:"credentials.yml"}),", if you prefer. In systems where both sets of credentials exist, environment variable values are prioritized."]})}),"\n",(0,n.jsx)(t.h3,{id:"4-configure-your-test-parameters",children:"4. Configure your test parameters"}),"\n",(0,n.jsxs)(t.p,{children:["Each demo repo includes a sample ",(0,n.jsx)(t.code,{children:"config.yml"})," file (in the ",(0,n.jsx)(t.code,{children:"<root>/.sauce"})," directory) that is preconfigured to run the example test, which is also included in the repo."]}),"\n",(0,n.jsxs)(t.p,{children:["Modify the ",(0,n.jsx)(t.code,{children:"config.yml"})," file according to the configuration documentation for ",(0,n.jsx)(t.a,{href:"/mobile-apps/automated-testing/espresso-xcuitest/espresso",children:"Espresso"})," and ",(0,n.jsx)(t.a,{href:"/mobile-apps/automated-testing/espresso-xcuitest/xcuitest",children:"XCUITest"}),"."]}),"\n",(0,n.jsxs)(t.admonition,{title:"Alternative Config Files",type:"tip",children:[(0,n.jsx)(t.p,{children:"You can create multiple configuration files to support different frameworks or different test setups and then reference the applicable configuration file at runtime using the CLI command:"}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"saucectl run -c ./path/to/<configFile>.yml\n"})})]}),"\n",(0,n.jsx)(t.h3,{id:"5-run-your-tests",children:"5. Run your tests"}),"\n",(0,n.jsxs)(t.p,{children:["Use the ",(0,n.jsx)(t.code,{children:"saucectl"})," CLI ",(0,n.jsx)(t.code,{children:"run"})," command to execute your tests using the parameters you have specified in your configuration file."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"saucectl run\n"})}),"\n",(0,n.jsxs)(t.p,{children:["You can optionally set ",(0,n.jsx)(t.a,{href:"/dev/cli/saucectl/run",children:"runtime parameters in the CLI"}),", but keep in mind that ",(0,n.jsx)(t.code,{children:"saucectl"})," looks for settings in your config file first, so if you use the CLI flags to specify settings that are also set in your config file, the CLI flag values are ignored."]})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},19365:(e,t,s)=>{s.d(t,{A:()=>o});s(96540);var n=s(18215);const r={tabItem:"tabItem_Ymn6"};var a=s(74848);function o(e){let{children:t,hidden:s,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,o),hidden:s,children:t})}},11470:(e,t,s)=>{s.d(t,{A:()=>I});var n=s(96540),r=s(18215),a=s(23104),o=s(56347),i=s(205),l=s(57485),c=s(31682),u=s(89466);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:s}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:s,attributes:n,default:r}}=e;return{value:t,label:s,attributes:n,default:r}}))}(s);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,s])}function h(e){let{value:t,tabValues:s}=e;return s.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:s}=e;const r=(0,o.W6)(),a=function(e){let{queryString:t=!1,groupId:s}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:t,groupId:s});return[(0,l.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function f(e){const{defaultValue:t,queryString:s=!1,groupId:r}=e,a=p(e),[o,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=s.find((e=>e.default))??s[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[c,d]=m({queryString:s,groupId:r}),[f,b]=function(e){let{groupId:t}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,u.Dv)(s);return[r,(0,n.useCallback)((e=>{s&&a.set(e)}),[s,a])]}({groupId:r}),x=(()=>{const e=c??f;return h({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{x&&l(x)}),[x]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,a]),tabValues:a}}var b=s(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=s(74848);function j(e){let{className:t,block:s,selectedValue:n,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const t=e.currentTarget,s=l.indexOf(t),r=i[s].value;r!==n&&(c(t),o(r))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const s=l.indexOf(e.currentTarget)+1;t=l[s]??l[0];break}case"ArrowLeft":{const s=l.indexOf(e.currentTarget)-1;t=l[s]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":s},t),children:i.map((e=>{let{value:t,label:s,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...a,className:(0,r.A)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":n===t}),children:s??t},t)}))})}function v(e){let{lazy:t,children:s,selectedValue:r}=e;const a=(Array.isArray(s)?s:[s]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function y(e){const t=f(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",x.tabList),children:[(0,g.jsx)(j,{...e,...t}),(0,g.jsx)(v,{...e,...t})]})}function I(e){const t=(0,b.A)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(t))}},28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>i});var n=s(96540);const r={},a=n.createContext(r);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);