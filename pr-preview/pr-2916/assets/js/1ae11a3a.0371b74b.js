"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[63109],{82818:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var s=r(74848),n=r(28453),a=r(11470),i=r(19365);r(86025);const c={id:"webdriverio",title:"WebdriverIO Quickstart",sidebar_label:"WebdriverIO Quickstart"},l=void 0,o={id:"orchestrate/quickstart/webdriverio",title:"WebdriverIO Quickstart",description:"This page explains how to run your WebdriverIO tests in Sauce Orchestrate with saucectl.",source:"@site/docs/orchestrate/quickstart/webdriverio.md",sourceDirName:"orchestrate/quickstart",slug:"/orchestrate/quickstart/webdriverio",permalink:"/sauce-docs/pr-preview/pr-2916/orchestrate/quickstart/webdriverio",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/orchestrate/quickstart/webdriverio.md",tags:[],version:"current",lastUpdatedBy:"kristofmuhi",lastUpdatedAt:172492915e4,frontMatter:{id:"webdriverio",title:"WebdriverIO Quickstart",sidebar_label:"WebdriverIO Quickstart"},sidebar:"docs",previous:{title:"Playwright Quickstart",permalink:"/sauce-docs/pr-preview/pr-2916/orchestrate/quickstart/playwright"},next:{title:"saucectl Configuration",permalink:"/sauce-docs/pr-preview/pr-2916/orchestrate/saucectl-configuration"}},u={},d=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"How Orchestrate Works",id:"how-orchestrate-works",level:2},{value:"Step 1: Clone the Project",id:"step-1-clone-the-project",level:2},{value:"Step 2: Link Your Sauce Labs Account",id:"step-2-link-your-sauce-labs-account",level:2},{value:"Step 3: Install <code>saucectl</code>",id:"step-3-install-saucectl",level:2},{value:"Step 4: Run Tests Using saucectl",id:"step-4-run-tests-using-saucectl",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["This page explains how to run your WebdriverIO tests in Sauce Orchestrate with ",(0,s.jsx)(t.code,{children:"saucectl"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["A Sauce Labs account (if you don't have one, start a ",(0,s.jsx)(t.a,{href:"https://saucelabs.com/sign-up",children:"free trial"}),")"]}),"\n",(0,s.jsxs)(t.li,{children:["Your Sauce Labs ",(0,s.jsx)(t.a,{href:"https://app.saucelabs.com/user-settings",children:"Username and Access Key"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://nodejs.org/en/",children:"Node.js"})," to use the NPM package manager"]}),"\n",(0,s.jsxs)(t.li,{children:["A ",(0,s.jsx)(t.a,{href:"https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home",children:"GitHub"})," account"]}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://git-scm.com/downloads",children:"Git"})}),"\n",(0,s.jsxs)(t.li,{children:["Access to a Docker registry. This example uses ",(0,s.jsx)(t.a,{href:"https://hub.docker.com",children:"DockerHub"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://docs.docker.com/engine/install/",children:"Docker installed"})," if you want to modify and rebuild the example docker image."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"how-orchestrate-works",children:"How Orchestrate Works"}),"\n",(0,s.jsxs)(t.p,{children:["Sauce Orchestrate uses container technology to package and run your tests in the Sauce Labs cloud. See ",(0,s.jsx)(t.a,{href:"/orchestrate/getting-started/#how-it-works",children:"How it Works"})," for more details."]}),"\n",(0,s.jsxs)(t.p,{children:["The following example uses a project with a ",(0,s.jsx)(t.code,{children:"saucectl"})," configuration file that is set up to run in Orchestrate. See ",(0,s.jsxs)(t.a,{href:"/orchestrate/saucectl-configuration",children:[(0,s.jsx)(t.code,{children:"saucectl"})," Configuration"]})," for more information about the configuration and run options available. The example also has a Dockerfile for building the container image. See ",(0,s.jsx)(t.a,{href:"/orchestrate/building-images",children:"Building Images"})," for more information about creating your own container images."]}),"\n",(0,s.jsx)(t.h2,{id:"step-1-clone-the-project",children:"Step 1: Clone the Project"}),"\n",(0,s.jsxs)(a.A,{defaultValue:"https",values:[{label:"HTTPS",value:"https"},{label:"SSH",value:"ssh"}],children:[(0,s.jsx)(i.A,{value:"https",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"git clone https://github.com/saucelabs/saucectl-imagerunner-example.git\n"})})}),(0,s.jsx)(i.A,{value:"ssh",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"git clone git@github.com:saucelabs/saucectl-imagerunner-example.git\n"})})})]}),"\n",(0,s.jsx)(t.h2,{id:"step-2-link-your-sauce-labs-account",children:"Step 2: Link Your Sauce Labs Account"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"saucectl"})," requires access to a valid Sauce Labs account."]}),"\n",(0,s.jsxs)(t.admonition,{title:"Use Environment Variables",type:"tip",children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"saucectl"})," uses your Sauce Labs credentials as ",(0,s.jsx)(t.a,{href:"/basics/environment-variables",children:"environment variables"})," and prioritizes them over values in the ",(0,s.jsx)(t.code,{children:"credentials.yml"})," file when both are present. ",(0,s.jsx)(t.strong,{children:"If you have set them, you may skip this step."})," Not sure if you have them set? Run the following command to check:"]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"echo $SAUCE_USERNAME\necho $SAUCE_ACCESS_KEY\n"})}),(0,s.jsx)(t.p,{children:"If a value is returned for both variables, they are set."})]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Run the ",(0,s.jsx)(t.code,{children:"configure"})," command:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"saucectl configure\n"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Enter your Sauce Labs Username and Access Key at the prompts."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.h2,{id:"step-3-install-saucectl",children:["Step 3: Install ",(0,s.jsx)(t.code,{children:"saucectl"})]}),"\n",(0,s.jsxs)(t.p,{children:["Navigate to the WebdriverIO example in the project you just cloned, then install ",(0,s.jsx)(t.code,{children:"saucectl"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"cd saucectl-imagerunner-example/webdriverio\nnpm install -g saucectl\n"})}),"\n",(0,s.jsx)(t.h2,{id:"step-4-run-tests-using-saucectl",children:"Step 4: Run Tests Using saucectl"}),"\n",(0,s.jsx)(t.p,{children:"Run the WebdriverIO tests."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"saucectl run\n"})}),"\n",(0,s.jsx)(t.p,{children:"The console displays the running tests, distinguishing which mode is running."}),"\n",(0,s.jsxs)(t.p,{children:["After the tests are run, ",(0,s.jsx)(t.code,{children:"saucectl"})," outputs the command logs from Orchestrate and downloads the artifacts from the container."]}),"\n",(0,s.jsx)(t.p,{children:"The following is an example CLI output."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"13:36:16 INF Downloading artifacts archive\n\n       Name                              Duration    Status       Attempts\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n  \u2714    WebdriverIO in ImageRunner            1m1s    Succeeded           1\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n  \u2714    All suites have passed               1m13s\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The results and test assets are also available immediately following test completion in your ",(0,s.jsx)(t.a,{href:"https://app.saucelabs.com/dashboard/tests/vdc",children:"Sauce Labs account"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>i});r(96540);var s=r(34164);const n={tabItem:"tabItem_Ymn6"};var a=r(74848);function i(e){let{children:t,hidden:r,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(n.tabItem,i),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>y});var s=r(96540),n=r(34164),a=r(23104),i=r(56347),c=r(205),l=r(57485),o=r(31682),u=r(70679);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:s,default:n}}=e;return{value:t,label:r,attributes:s,default:n}}))}(r);return function(e){const t=(0,o.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const n=(0,i.W6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(n.location.search);t.set(a,e),n.replace({...n.location,search:t.toString()})}),[a,n])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,a=h(e),[i,l]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:a}))),[o,d]=m({queryString:r,groupId:n}),[b,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,a]=(0,u.Dv)(r);return[n,(0,s.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:n}),v=(()=>{const e=o??b;return p({value:e,tabValues:a})?e:null})();(0,c.A)((()=>{v&&l(v)}),[v]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,a]),tabValues:a}}var f=r(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(74848);function g(e){let{className:t,block:r,selectedValue:s,selectValue:i,tabValues:c}=e;const l=[],{blockElementScrollPositionUntilNextRender:o}=(0,a.a_)(),u=e=>{const t=e.currentTarget,r=l.indexOf(t),n=c[r].value;n!==s&&(o(t),i(n))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":r},t),children:c.map((e=>{let{value:t,label:r,attributes:a}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...a,className:(0,n.A)("tabs__item",v.tabItem,a?.className,{"tabs__item--active":s===t}),children:r??t},t)}))})}function j(e){let{lazy:t,children:r,selectedValue:a}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function w(e){const t=b(e);return(0,x.jsxs)("div",{className:(0,n.A)("tabs-container",v.tabList),children:[(0,x.jsx)(g,{...t,...e}),(0,x.jsx)(j,{...t,...e})]})}function y(e){const t=(0,f.A)();return(0,x.jsx)(w,{...e,children:d(e.children)},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>c});var s=r(96540);const n={},a=s.createContext(n);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);