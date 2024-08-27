"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[17105],{93081:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=t(74848),s=t(28453);t(86025),t(11470),t(19365);const a={id:"api-server",title:"Sauce Connect Proxy API Server",sidebar_label:"API Server"},o=void 0,c={id:"secure-connections/sauce-connect-5/operation/api-server",title:"Sauce Connect Proxy API Server",description:"Sauce Connect Proxy, optionally, exposes an API server that allows to obtain information about the local Sauce Connect Proxy instance.",source:"@site/docs/secure-connections/sauce-connect-5/operation/api-server.md",sourceDirName:"secure-connections/sauce-connect-5/operation",slug:"/secure-connections/sauce-connect-5/operation/api-server",permalink:"/sauce-docs/pr-preview/pr-2907/secure-connections/sauce-connect-5/operation/api-server",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/secure-connections/sauce-connect-5/operation/api-server.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:172477197e4,frontMatter:{id:"api-server",title:"Sauce Connect Proxy API Server",sidebar_label:"API Server"},sidebar:"docs",previous:{title:"Additional Proxies",permalink:"/sauce-docs/pr-preview/pr-2907/secure-connections/sauce-connect-5/operation/proxies"},next:{title:"Readiness Checks",permalink:"/sauce-docs/pr-preview/pr-2907/secure-connections/sauce-connect-5/operation/readiness-checks"}},i={},l=[{value:"Docker",id:"docker",level:2},{value:"Endpoints",id:"endpoints",level:2},{value:"Info",id:"info",level:3},{value:"Readiness",id:"readiness",level:3},{value:"More Information",id:"more-information",level:2}];function u(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Sauce Connect Proxy, optionally, exposes an API server that allows to obtain information about the local Sauce Connect Proxy instance.\nThe API interface is configured with the ",(0,r.jsx)(n.a,{href:"/dev/cli/sauce-connect-5/run/#--api-address",children:(0,r.jsx)(n.code,{children:"--api-address"})})," flag."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"--api-address :8080 # listens on all the interfaces' port 8080\n--api-address 127.0.0.1:8080 # listens on 127.0.0.1 port 8080\n"})}),"\n",(0,r.jsx)(n.h2,{id:"docker",children:"Docker"}),"\n",(0,r.jsxs)(n.p,{children:["When running Sauce Connect Proxy in a container, the API server is enabled by default and listens on the containers' localhost port 10000.\nDue to configuration options order of precedence, to change the API server address, you need to use the ",(0,r.jsx)(n.code,{children:"SAUCE_API_ADDRESS"})," environment variable."]}),"\n",(0,r.jsx)(n.p,{children:"The following example shows how to start a Sauce Connect Proxy container with the API server accessible on port 8080 on the host machine."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker run \\\n  // your normal options\n  -e SAUCE_API_ADDRESS=':8080' \\\n  -p 8080:8080\n  saucelabs/sauce-connect\n"})}),"\n",(0,r.jsx)(n.h2,{id:"endpoints",children:"Endpoints"}),"\n",(0,r.jsx)(n.p,{children:"The table below summarizes available endpoints."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Path"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"/readyz"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"Returns 200 response code when Sauce Connect Proxy is ready, 503 otherwise."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"/healthz"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"Returns 200 response code when Sauce Connect Proxy is connected, 503 otherwise."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"/info"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"Returns runtime information about the tunnel instance."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"/metrics"})}),(0,r.jsxs)(n.td,{style:{textAlign:"left"},children:["Exposes ",(0,r.jsx)(n.a,{href:"https://prometheus.io/",children:"Prometheus"})," metrics."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"/configz"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"Returns the configuration values."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"/pac"})}),(0,r.jsxs)(n.td,{style:{textAlign:"left"},children:["Returns the PAC content being configured with the ",(0,r.jsx)(n.a,{href:"/dev/cli/sauce-connect-5/run/#--pac",children:(0,r.jsx)(n.code,{children:"--pac"})})," flag."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"/version"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"Returns the Sauce Connect Proxy instance version and build info."})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"info",children:"Info"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"/info"})," response contains a JSON document containing runtime information of the Sauce Connect instance:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "tunnel_id": "ab2cf344d4fc40d2bdc36b2fe6535c6b",\n  "tunnel_name": "ci-tunnel-1",\n  "tunnel_server": "1.2.3.4:443",\n  "tunnel_host": "tunnel-123abc.tunnels.us-west-4.saucelabs.com"\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"readiness",children:"Readiness"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"/readyz"})," response is used to determine when Sauce Connect Proxy is ready to accept jobs. It returns 200 response code when Sauce Connect Proxy is ready, and 503 otherwise."]}),"\n",(0,r.jsx)(n.h2,{id:"more-information",children:"More Information"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/secure-connections/sauce-connect/",children:"Sauce Connect Proxy Overview"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/dev/cli/sauce-connect-5/run/",children:"Sauce Connect Proxy 5 CLI Reference"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var r=t(18215);const s={tabItem:"tabItem_Ymn6"};var a=t(74848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,o),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>A});var r=t(96540),s=t(18215),a=t(23104),o=t(56347),c=t(205),i=t(57485),l=t(31682),u=t(89466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:t}=e;const s=(0,o.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})}),[a,s])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,a=h(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[l,d]=x({queryString:t,groupId:s}),[f,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,a]=(0,u.Dv)(t);return[s,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:s}),m=(()=>{const e=l??f;return p({value:e,tabValues:a})?e:null})();(0,c.A)((()=>{m&&i(m)}),[m]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,a]),tabValues:a}}var b=t(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(74848);function j(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:c}=e;const i=[],{blockElementScrollPositionUntilNextRender:l}=(0,a.a_)(),u=e=>{const n=e.currentTarget,t=i.indexOf(n),s=c[t].value;s!==r&&(l(n),o(s))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:c.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...a,className:(0,s.A)("tabs__item",m.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:s}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function g(e){const n=f(e);return(0,v.jsxs)("div",{className:(0,s.A)("tabs-container",m.tabList),children:[(0,v.jsx)(j,{...e,...n}),(0,v.jsx)(y,{...e,...n})]})}function A(e){const n=(0,b.A)();return(0,v.jsx)(g,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var r=t(96540);const s={},a=r.createContext(s);function o(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);