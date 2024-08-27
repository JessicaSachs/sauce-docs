"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[47407],{29837:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>x,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var s=r(74848),t=r(28453),i=(r(86025),r(11470)),o=r(19365);const a={id:"environment-variables",title:"Sauce Connect Proxy Environment Variables",sidebar_label:"Environment Variables",hide_table_of_contents:!0},c=void 0,l={id:"secure-connections/sauce-connect/setup-configuration/environment-variables",title:"Sauce Connect Proxy Environment Variables",description:"The standard way to launch a Sauce Connect Proxy tunnel is to run a single command line comprised of all required flags and any optional flags you want to use to customize tunnel behavior.",source:"@site/docs/secure-connections/sauce-connect/setup-configuration/environment-variables.md",sourceDirName:"secure-connections/sauce-connect/setup-configuration",slug:"/secure-connections/sauce-connect/setup-configuration/environment-variables",permalink:"/sauce-docs/pr-preview/pr-2907/secure-connections/sauce-connect/setup-configuration/environment-variables",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/secure-connections/sauce-connect/setup-configuration/environment-variables.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:172477197e4,frontMatter:{id:"environment-variables",title:"Sauce Connect Proxy Environment Variables",sidebar_label:"Environment Variables",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"YAML File Configuration",permalink:"/sauce-docs/pr-preview/pr-2907/secure-connections/sauce-connect/setup-configuration/yaml-config"},next:{title:"High Availability Setup",permalink:"/sauce-docs/pr-preview/pr-2907/secure-connections/sauce-connect/setup-configuration/high-availability"}},d={},u=[{value:"User Credentials Environment Variables",id:"user-credentials-environment-variables",level:2},{value:"Use Cases",id:"use-cases",level:3},{value:"Command Line Options Environment Variables",id:"command-line-options-environment-variables",level:2},{value:"Use Cases",id:"use-cases-1",level:3},{value:"Proxy Environment Variables",id:"proxy-environment-variables",level:2},{value:"Running Sauce Connect Proxy With Environment Variables",id:"running-sauce-connect-proxy-with-environment-variables",level:2},{value:"More Information",id:"more-information",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["The standard way to launch a Sauce Connect Proxy tunnel is to run a single command line comprised of all ",(0,s.jsx)(n.a,{href:"/dev/cli/sauce-connect-proxy/#main",children:"required flags"})," and any ",(0,s.jsx)(n.a,{href:"/dev/cli/sauce-connect-proxy/",children:"optional flags"})," you want to use to customize tunnel behavior.\nIt's also possible to pass the same command-line arguments through a ",(0,s.jsx)(n.a,{href:"/secure-connections/sauce-connect/setup-configuration/yaml-config/",children:"YAML config file"}),", and as environment variables.\nIf you pass the same argument through multiple methods, the order of precedence is as follows (from highest to lowest):"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"command-line option"}),"\n",(0,s.jsx)(n.li,{children:"environment variable"}),"\n",(0,s.jsx)(n.li,{children:"YAML config file"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Sauce Connect Proxy environment variables can be divided into 3 groups:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"User credentials"}),"\n",(0,s.jsx)(n.li,{children:"All command line options as environment variables"}),"\n",(0,s.jsx)(n.li,{children:"Proxy environment variables"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"user-credentials-environment-variables",children:"User Credentials Environment Variables"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Environment Variable"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Corresponding CLI Option"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"SAUCE_USERNAME"}),(0,s.jsx)("br",{}),(0,s.jsx)(n.code,{children:"SAUCE_USER"})]}),(0,s.jsx)(n.td,{children:"Sets your Sauce Labs username."}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/dev/cli/sauce-connect-proxy/#--user",children:(0,s.jsx)(n.code,{children:"--user"})})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"SAUCE_ACCESS_KEY"}),(0,s.jsx)("br",{}),(0,s.jsx)(n.code,{children:"SAUCE_API_KEY"})]}),(0,s.jsx)(n.td,{children:"Sets your Sauce Labs access key."}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/dev/cli/sauce-connect-proxy/#--api-key",children:(0,s.jsx)(n.code,{children:"--api-key"})})})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"use-cases",children:"Use Cases"}),"\n",(0,s.jsx)(n.p,{children:"We recommend configuring credentials via environment variables in the following scenarios:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Sauce Connect Proxy command containing credentials may be exposed via process monitoring tools such as ",(0,s.jsx)(n.code,{children:"ps"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"When running Sauce Connect Proxy in CI/CD environment to avoid clear-text logging your credentials."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"command-line-options-environment-variables",children:"Command Line Options Environment Variables"}),"\n",(0,s.jsxs)(n.p,{children:["You can set via environment variables almost all Sauce Connect Proxy ",(0,s.jsx)(n.a,{href:"/dev/cli/sauce-connect-proxy",children:"command-line options"}),".\nEach option description includes the corresponding environment variable."]}),"\n",(0,s.jsx)(n.h3,{id:"use-cases-1",children:"Use Cases"}),"\n",(0,s.jsx)(n.p,{children:"We recommend configuring options via environment variables in the following scenarios."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Sauce Connect Proxy command is too long and not easily readable."}),"\n",(0,s.jsx)(n.li,{children:"Sauce Connect Proxy runs in a docker container, and a CI system (such as GitLab) allows a straightforward way to set environment variables."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"proxy-environment-variables",children:"Proxy Environment Variables"}),"\n",(0,s.jsxs)(n.p,{children:["Sauce Connect Proxy supports the following ",(0,s.jsx)(n.a,{href:"/secure-connections/sauce-connect/setup-configuration/additional-proxies/#proxy-auto-configuration-automatic",children:"proxy auto-configuration"})," environment variables, but we strongly advise using Sauce Connect Proxy specific variables, such as ",(0,s.jsx)(n.code,{children:"SAUCE_PROXY"})," or ",(0,s.jsx)(n.code,{children:"SAUCE_PROXY_TUNNEL"})," instead, since the auto-configuration variables listed here behave differently on different platforms."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Environment Variable"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Platforms"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"http_proxy"}),(0,s.jsx)("br",{}),(0,s.jsx)(n.code,{children:"HTTP_PROXY"}),(0,s.jsx)("br",{}),(0,s.jsx)(n.code,{children:"all_proxy"}),(0,s.jsx)("br",{}),(0,s.jsx)(n.code,{children:"ALL_PROXY"})]}),(0,s.jsxs)(n.td,{children:["Sets an HTTP proxy to be used by Sauce Connect Proxy. It can be formatted as ",(0,s.jsx)(n.code,{children:"http://hostname:port"})," or ",(0,s.jsx)(n.code,{children:"hostname:port"}),".",(0,s.jsx)("br",{}),"On Linux and Mac environments, ",(0,s.jsx)(n.code,{children:"http_proxy"})," variable can contain proxy credentials in the following format: ",(0,s.jsx)(n.code,{children:"scheme://user:password@host:port"})]}),(0,s.jsx)(n.td,{children:"Linux, macOS"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"no_proxy"}),(0,s.jsx)("br",{}),(0,s.jsx)(n.code,{children:"NO_PROXY"})]}),(0,s.jsxs)(n.td,{children:["Sets hostnames that will not be proxied, even when Sauce Connect Proxy is configured to use a proxy. Format as a comma-separated list. Subdomain wildcarding is supported when the hostname starts with a ",(0,s.jsx)(n.code,{children:"."})," Examples:",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)(n.code,{children:"saucelabs.com,spam.net"}),": Only requests hitting ",(0,s.jsx)(n.code,{children:"saucelabs.com"})," and ",(0,s.jsx)(n.code,{children:"spam.net"})," will not be proxied. All other requests will be proxied.",(0,s.jsx)("br",{}),(0,s.jsx)(n.code,{children:".example.com"}),": All requests going to any subdomain of ",(0,s.jsx)(n.code,{children:"example.com"})," will not be proxied (e.g., ",(0,s.jsx)(n.code,{children:"one.example.com"}),", ",(0,s.jsx)(n.code,{children:"asdf.example.com"}),")"]}),(0,s.jsx)(n.td,{children:"Linux, macOS"})]})]})]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/dev/cli/sauce-connect-proxy/#--no-autodetect",children:(0,s.jsx)(n.code,{children:"--no-autodetect"})})," command-line option disables proxy auto-detection."]})}),"\n",(0,s.jsx)(n.h2,{id:"running-sauce-connect-proxy-with-environment-variables",children:"Running Sauce Connect Proxy With Environment Variables"}),"\n",(0,s.jsxs)(i.A,{children:[(0,s.jsxs)(o.A,{value:"macOS/Linux",label:"macOS and Linux",default:!0,children:["Follow the steps below to configure Sauce Connect Proxy using environment variables in your terminal.",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["In your terminal window, set the following environment variables","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'export SAUCE_USERNAME="your Sauce username"\nexport SAUCE_ACCESS_KEY="your Sauce access key"\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Starting a new Sauce Connect Proxy does not require adding ",(0,s.jsx)(n.code,{children:"--api-key"})," or ",(0,s.jsx)(n.code,{children:"--user"})," flags.","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sc --region us-west\n"})}),"\n"]}),"\n"]}),"Alternatively, you can persist Sauce Connect Proxy environment variables by adding them to one of your user environment configuration files, such as ",(0,s.jsx)(n.code,{children:".bash_profile"})," or ",(0,s.jsx)(n.code,{children:".zshrc"}),".",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Open ",(0,s.jsx)(n.code,{children:"~/.bash_profile"})," or ",(0,s.jsx)(n.code,{children:"~/.zshrc"})," in your preferred text editor."]}),"\n",(0,s.jsxs)(n.li,{children:["Add the variables","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-zsh",children:'export SAUCE_USERNAME="your Sauce username"\nexport SAUCE_ACCESS_KEY="your Sauce access key"\n'})}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Start a new shell or a new terminal."}),"\n",(0,s.jsxs)(n.li,{children:["To confirm that your environment variables are set, enter ",(0,s.jsx)(n.code,{children:"echo $SAUCE_USERNAME"})," in your terminal. The expected response is your username value."]}),"\n",(0,s.jsxs)(n.li,{children:["Just as above, starting a new Sauce Connect Proxy does not require adding ",(0,s.jsx)(n.code,{children:"--api-key"})," or ",(0,s.jsx)(n.code,{children:"--user"})," flags.","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sc --region us-west\n"})}),"\n"]}),"\n"]})]}),(0,s.jsx)(o.A,{value:"Windows",label:"Windows",children:(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Open the Control Panel and click the System icon to open the ",(0,s.jsx)(n.strong,{children:"System Properties"})," dialog."]}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.strong,{children:"Environment Variables"})," to open the ",(0,s.jsx)(n.strong,{children:"Environment Variables"})," dialog."]}),"\n",(0,s.jsxs)(n.li,{children:["In the ",(0,s.jsx)(n.strong,{children:"User variables"})," section, click ",(0,s.jsx)(n.strong,{children:"New"})," to open the ",(0,s.jsx)(n.strong,{children:"New System Variable"})," dialog."]}),"\n",(0,s.jsxs)(n.li,{children:["For ",(0,s.jsx)(n.strong,{children:"Variable name"}),", enter ",(0,s.jsx)(n.strong,{children:"SAUCE_USERNAME"})," and for ",(0,s.jsx)(n.strong,{children:"Variable value"}),", enter your Sauce username and then click ",(0,s.jsx)(n.strong,{children:"OK"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Repeat 3-4 to set up the ",(0,s.jsx)(n.strong,{children:"SAUCE_ACCESS_KEY"})," or any other environment variable."]}),"\n",(0,s.jsxs)(n.li,{children:["Confirm that your environment variables have been set by typing ",(0,s.jsx)(n.code,{children:"echo %SAUCE_USERNAME%"})," in your terminal. The response should be your username value. Then do the same for your access key."]}),"\n",(0,s.jsxs)(n.li,{children:["Starting a new Sauce Connect Proxy will not require adding ",(0,s.jsx)(n.code,{children:"--api-key"})," or ",(0,s.jsx)(n.code,{children:"--user"})," flags.","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sc.exe --region us-west\n"})}),"\n"]}),"\n"]})})]}),"\n",(0,s.jsx)(n.h2,{id:"more-information",children:"More Information"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.youtube.com/watch?v=3K1Eu0eTha8",children:"Video: Setting Sauce Labs Credentials as Environment Variables"})}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>o});r(96540);var s=r(18215);const t={tabItem:"tabItem_Ymn6"};var i=r(74848);function o(e){let{children:n,hidden:r,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,s.A)(t.tabItem,o),hidden:r,children:n})}},11470:(e,n,r)=>{r.d(n,{A:()=>S});var s=r(96540),t=r(18215),i=r(23104),o=r(56347),a=r(205),c=r(57485),l=r(31682),d=r(89466);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:s,default:t}}=e;return{value:n,label:r,attributes:s,default:t}}))}(r);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function x(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const t=(0,o.W6)(),i=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,c.aZ)(i),(0,s.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(t.location.search);n.set(i,e),t.replace({...t.location,search:n.toString()})}),[i,t])]}function p(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,i=h(e),[o,c]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:i}))),[l,u]=m({queryString:r,groupId:t}),[p,b]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,i]=(0,d.Dv)(r);return[t,(0,s.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:t}),v=(()=>{const e=l??p;return x({value:e,tabValues:i})?e:null})();(0,a.A)((()=>{v&&c(v)}),[v]);return{selectedValue:o,selectValue:(0,s.useCallback)((e=>{if(!x({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),b(e)}),[u,b,i]),tabValues:i}}var b=r(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=r(74848);function f(e){let{className:n,block:r,selectedValue:s,selectValue:o,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,i.a_)(),d=e=>{const n=e.currentTarget,r=c.indexOf(n),t=a[r].value;t!==s&&(l(n),o(t))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;n=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;n=c[r]??c[c.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":r},n),children:a.map((e=>{let{value:n,label:r,attributes:i}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>c.push(e),onKeyDown:u,onClick:d,...i,className:(0,t.A)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":s===n}),children:r??n},n)}))})}function g(e){let{lazy:n,children:r,selectedValue:t}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===t));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function y(e){const n=p(e);return(0,j.jsxs)("div",{className:(0,t.A)("tabs-container",v.tabList),children:[(0,j.jsx)(f,{...e,...n}),(0,j.jsx)(g,{...e,...n})]})}function S(e){const n=(0,b.A)();return(0,j.jsx)(y,{...e,children:u(e.children)},String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>a});var s=r(96540);const t={},i=s.createContext(t);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);