"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[89312],{54415:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>x,frontMatter:()=>o,metadata:()=>u,toc:()=>h});var s=t(74848),r=t(28453),a=t(86025),l=t(11470),i=t(19365);const o={id:"sauce-connect",title:"Using Sauce Connect Proxy Tunnels for API Tests",sidebar_label:"Using Sauce Connect",description:"Get a Sauce Connect Proxy tunnel up and running quickly for your API tests."},c=void 0,u={id:"api-testing/sauce-connect",title:"Using Sauce Connect Proxy Tunnels for API Tests",description:"Get a Sauce Connect Proxy tunnel up and running quickly for your API tests.",source:"@site/docs/api-testing/sauce-connect.md",sourceDirName:"api-testing",slug:"/api-testing/sauce-connect",permalink:"/sauce-docs/pr-preview/pr-2916/api-testing/sauce-connect",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/sauce-connect.md",tags:[],version:"current",lastUpdatedBy:"kristofmuhi",lastUpdatedAt:172492915e4,frontMatter:{id:"sauce-connect",title:"Using Sauce Connect Proxy Tunnels for API Tests",sidebar_label:"Using Sauce Connect",description:"Get a Sauce Connect Proxy tunnel up and running quickly for your API tests."},sidebar:"docs",previous:{title:"Quickstart",permalink:"/sauce-docs/pr-preview/pr-2916/api-testing/quickstart"},next:{title:"Build Test from Spec File",permalink:"/sauce-docs/pr-preview/pr-2916/api-testing/build-from-spec"}},d={},h=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Start API-Specific Tunnel",id:"start-api-specific-tunnel",level:2},{value:"Configure Test to Use Tunnel",id:"configure-test-to-use-tunnel",level:2},{value:"Run Test through Tunnel",id:"run-test-through-tunnel",level:2},{value:"More Information",id:"more-information",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Sauce Labs API Testing fully integrates with Sauce Connect Proxy tunnels, enabling you to test and monitor both internal and public APIs. If your APIs are behind a firewall on your private network, follow the steps below to launch a secure trusted connection between your network and Sauce Labs."}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["We do not support ",(0,s.jsx)(n.a,{href:"/basics/data-center-endpoints/",children:"Allow-listing static IPs"}),". We strongly suggest running your tests using Sauce Connect Proxy tunnel. For assistance, contact your CSM/SE or our Support Team."]})}),"\n",(0,s.jsx)(n.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["A Sauce Labs account (",(0,s.jsx)(n.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,s.jsx)(n.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")."]}),"\n",(0,s.jsxs)(n.li,{children:["Your Sauce Labs ",(0,s.jsx)(n.a,{href:"https://app.saucelabs.com/user-settings",children:"Username"})," and ",(0,s.jsx)(n.a,{href:"https://app.saucelabs.com/user-settings",children:"Access Key"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Have the ",(0,s.jsx)(n.a,{href:"/secure-connections/sauce-connect/installation/",children:"Sauce Connect Proxy client installed"})," on your local machine. If you're new to the feature, check out the ",(0,s.jsx)(n.a,{href:"/secure-connections/sauce-connect/quickstart/",children:"Sauce Connect Proxy Quickstart"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["An existing API Testing Project and Test. For details on how to create them, see ",(0,s.jsx)(n.a,{href:"/api-testing/quickstart/",children:"API Testing Quickstart"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"start-api-specific-tunnel",children:"Start API-Specific Tunnel"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["First, you'll need to create a YAML configuration file. From a text editor or IDE, create a file called ",(0,s.jsx)(n.strong,{children:"api-config.yaml"}),", then copy and paste it into the template below."]}),"\n"]}),"\n",(0,s.jsxs)(l.A,{defaultValue:"US Data Center",values:[{label:"US Data Center",value:"US Data Center"},{label:"EU Data Center",value:"EU Data Center"}],children:[(0,s.jsx)(i.A,{value:"US Data Center",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"---\nrest-url: 'https://api.us-west-4-i3er.saucelabs.com/rest/v1'\nuser: '$SAUCE_USERNAME'\napi-key: '$SAUCE_ACCESS_KEY'\nvm-version: 'v2alpha'\ntunnel-identifier: '$SAUCE_USERNAME_TUNNEL'\n"})})}),(0,s.jsx)(i.A,{value:"EU Data Center",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"---\nrest-url: 'https://api.eu-west-3-lnbf.saucelabs.com/rest/v1'\nuser: '$SAUCE_USERNAME'\napi-key: '$SAUCE_ACCESS_KEY'\nvm-version: 'v2alpha'\ntunnel-identifier: '$SAUCE_USERNAME_TUNNEL'\n"})})})]}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["In the ",(0,s.jsx)(n.strong,{children:"api-config.yaml"})," file:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Leave the ",(0,s.jsx)(n.code,{children:"rest-url"})," and ",(0,s.jsx)(n.code,{children:"vm-version"})," values as-is"]}),"\n",(0,s.jsxs)(n.li,{children:["Set the ",(0,s.jsx)(n.code,{children:"user"})," and ",(0,s.jsx)(n.code,{children:"api-key"})," values as your own Sauce username and access key, respectively"]}),"\n",(0,s.jsxs)(n.li,{children:["Set the ",(0,s.jsx)(n.code,{children:"tunnel-identifier"})," value to whatever you'd like to name your tunnel"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Save the ",(0,s.jsx)(n.strong,{children:"api-config.yaml"})," file to the Sauce Connect Proxy root folder on your local machine. ",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("img",{src:(0,a.Ay)("img/api-testing/sauceconnect-folders.png"),alt:"API Testing Sauce Connect folder structure",width:"350"}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Open your terminal and navigate to the Sauce Connect Proxy folder. If your folder is in your home directory, you'd run:"}),"\n"]}),"\n",(0,s.jsxs)(l.A,{defaultValue:"Linux",values:[{label:"Linux",value:"Linux"},{label:"Windows",value:"Windows"},{label:"Mac",value:"Mac"}],children:[(0,s.jsx)(i.A,{value:"Linux",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd sc-4.9.2-linux\n"})})}),(0,s.jsx)(i.A,{value:"Windows",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd C:\\sc-4.9.2-win32\n"})})}),(0,s.jsx)(i.A,{value:"Mac",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd sc-4.9.1-osx\n"})})})]}),"\n",(0,s.jsxs)(n.ol,{start:"5",children:["\n",(0,s.jsx)(n.li,{children:"Start your tunnel by issuing:"}),"\n"]}),"\n",(0,s.jsxs)(l.A,{defaultValue:"Mac/Linux",values:[{label:"Mac/Linux",value:"Mac/Linux"},{label:"Windows",value:"Windows"}],children:[(0,s.jsx)(i.A,{value:"Mac/Linux",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"bin/sc -c api-config.yaml\n"})})}),(0,s.jsx)(i.A,{value:"Windows",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"bin\\sc.exe -c api-config.yaml\n"})})})]}),"\n",(0,s.jsxs)(n.p,{children:["If the tunnel was launched successfully, you'll see a ",(0,s.jsx)(n.a,{href:"/secure-connections/sauce-connect/proxy-tunnels/#command-line-interface",children:"CLI response"})," indicating that you can start your tests."]}),"\n",(0,s.jsx)(n.h2,{id:"configure-test-to-use-tunnel",children:"Configure Test to Use Tunnel"}),"\n",(0,s.jsxs)(n.ol,{start:"6",children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Find the test you'd like to run. Tests can be located and run under the ",(0,s.jsx)(n.strong,{children:"Tests"})," tab, ",(0,s.jsx)(n.strong,{children:"Compose"})," tab, ",(0,s.jsx)(n.strong,{children:"HTTP Client"})," tab, and ",(0,s.jsx)(n.strong,{children:"Schedule"})," tabs."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Under the ",(0,s.jsx)(n.strong,{children:"Run Configuration"})," section, click on the Sauce Connect Proxy dropdown menu (defaults to ",(0,s.jsx)(n.strong,{children:"No Tunnel"}),"), then click the name of your tunnel.",(0,s.jsx)("br",{}),(0,s.jsx)("img",{src:(0,a.Ay)("img/api-testing/sauceconnect-nav1.png"),alt:"API Testing Sauce Connect Nav",width:"175"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.admonition,{title:"Session Stickiness",type:"tip",children:[(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"Tests"})," and ",(0,s.jsx)(n.strong,{children:"Compose"})," tabs have a ",(0,s.jsx)(n.em,{children:"session stickiness"})," feature (also known as session persistence) that binds your tunnel session to our API testing server. When you select a tunnel from the Sauce Connect Proxy dropdown, that tunnel will stay as the default selection, even if you close your browser."]}),(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:"Learn more"}),"This feature does not apply to the ",(0,s.jsx)(n.strong,{children:"HTTP Client"})," or ",(0,s.jsx)(n.strong,{children:"Schedule"})," tabs, where the tunnel dropdown will always default to ",(0,s.jsx)(n.strong,{children:"No Tunnel"}),".","If you shut down a tunnel that's currently selected in a Sauce Connect dropdown anywhere in the platform (",(0,s.jsx)(n.strong,{children:"Tests"}),", ",(0,s.jsx)(n.strong,{children:"Compose"}),", ",(0,s.jsx)(n.strong,{children:"HTTP Client"}),", or ",(0,s.jsx)(n.strong,{children:"Schedule"})," tab), the test would fail and you'd see the below error message. This is something to be mindful of when selecting a tunnel in the ",(0,s.jsx)(n.strong,{children:"Schedule"})," tab to run in the future.",(0,s.jsx)("img",{src:(0,a.Ay)("img/api-testing/api-sc-tunnel-error.png"),alt:"API Testing Sauce Connect Nav error",width:"350"})]})]}),"\n",(0,s.jsx)(n.h2,{id:"run-test-through-tunnel",children:"Run Test through Tunnel"}),"\n",(0,s.jsxs)(n.ol,{start:"8",children:["\n",(0,s.jsxs)(n.li,{children:["Once you've selected your tunnel from the dropdown, ",(0,s.jsx)(n.a,{href:"/api-testing/quickstart/#run-test",children:"run your test"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"more-information",children:"More Information"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/secure-connections/sauce-connect",children:"Using Sauce Connect Proxy"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/secure-connections/sauce-connect/setup-configuration/specialized-environments/#api-testing-setup",children:"Specialized Sauce Connect Proxy Setups"})}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>l});t(96540);var s=t(34164);const r={tabItem:"tabItem_Ymn6"};var a=t(74848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,l),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>S});var s=t(96540),r=t(34164),a=t(23104),l=t(56347),i=t(205),o=t(57485),c=t(31682),u=t(70679);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:r}}=e;return{value:n,label:t,attributes:s,default:r}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:t}=e;const r=(0,l.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})}),[a,r])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,a=h(e),[l,o]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:a}))),[c,d]=x({queryString:t,groupId:r}),[f,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,a]=(0,u.Dv)(t);return[r,(0,s.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:r}),m=(()=>{const e=c??f;return p({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{m&&o(m)}),[m]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),g(e)}),[d,g,a]),tabValues:a}}var g=t(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(74848);function j(e){let{className:n,block:t,selectedValue:s,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const n=e.currentTarget,t=o.indexOf(n),r=i[t].value;r!==s&&(c(n),l(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>o.push(e),onKeyDown:d,onClick:u,...a,className:(0,r.A)("tabs__item",m.tabItem,a?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:a}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function v(e){const n=f(e);return(0,b.jsxs)("div",{className:(0,r.A)("tabs-container",m.tabList),children:[(0,b.jsx)(j,{...n,...e}),(0,b.jsx)(y,{...n,...e})]})}function S(e){const n=(0,g.A)();return(0,b.jsx)(v,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>i});var s=t(96540);const r={},a=s.createContext(r);function l(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);