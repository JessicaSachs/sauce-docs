"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[76934],{17795:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var s=t(74848),a=t(28453);t(86025),t(11470),t(19365);const r={id:"readiness-checks",title:"Sauce Connect Proxy Readiness Checks",sidebar_label:"Readiness Checks"},c=void 0,o={id:"secure-connections/sauce-connect/setup-configuration/readiness-checks",title:"Sauce Connect Proxy Readiness Checks",description:"To run tests using an ephemeral tunnel, it's important to be sure the tunnel is ready to accept jobs. Jobs that are run when the tunnel is still in a booting state could fail because the tunnel won't be available.",source:"@site/docs/secure-connections/sauce-connect/setup-configuration/readiness-checks.md",sourceDirName:"secure-connections/sauce-connect/setup-configuration",slug:"/secure-connections/sauce-connect/setup-configuration/readiness-checks",permalink:"/sauce-docs/pr-preview/pr-2915/secure-connections/sauce-connect/setup-configuration/readiness-checks",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/secure-connections/sauce-connect/setup-configuration/readiness-checks.md",tags:[],version:"current",lastUpdatedBy:"Tian Feng",lastUpdatedAt:1724880664e3,frontMatter:{id:"readiness-checks",title:"Sauce Connect Proxy Readiness Checks",sidebar_label:"Readiness Checks"},sidebar:"docs",previous:{title:"CI/CD Integration",permalink:"/sauce-docs/pr-preview/pr-2915/secure-connections/sauce-connect/setup-configuration/ci-cd-integration"},next:{title:"Using Tunnels",permalink:"/sauce-docs/pr-preview/pr-2915/secure-connections/sauce-connect/proxy-tunnels"}},i={},l=[{value:"Manual Testing",id:"manual-testing",level:2},{value:"CI/CD Testing",id:"cicd-testing",level:2},{value:"Status Server HTTP Endpoint",id:"status-server-http-endpoint",level:3},{value:"Ready File",id:"ready-file",level:3},{value:"Tunnels REST API",id:"tunnels-rest-api",level:3}];function u(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"To run tests using an ephemeral tunnel, it's important to be sure the tunnel is ready to accept jobs. Jobs that are run when the tunnel is still in a booting state could fail because the tunnel won't be available."}),"\n",(0,s.jsx)(n.p,{children:"There are four approaches to check for readiness:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Manual testing"}),"\n",(0,s.jsx)(n.li,{children:"Using the Status Server HTTP Endpoint"}),"\n",(0,s.jsx)(n.li,{children:"Using the ready file"}),"\n",(0,s.jsx)(n.li,{children:"Using the REST API"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"manual-testing",children:"Manual Testing"}),"\n",(0,s.jsx)(n.p,{children:"If you are starting a tunnel manually for local testing, the SC client will print a message to stdout:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Sauce Connect is up, you may start your tests.\n"})}),"\n",(0,s.jsx)(n.p,{children:"or its logfile:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"2023-01-31 16:15:41.574 [56684] [CLI] [info] Sauce Connect is up, you may start your tests.\n"})}),"\n",(0,s.jsx)(n.h2,{id:"cicd-testing",children:"CI/CD Testing"}),"\n",(0,s.jsx)(n.p,{children:"If you're starting ephemeral tunnels from a CI/CD system, there are multiple methods of readiness testing. The choice will depend on what the CI/CD server has access to."}),"\n",(0,s.jsx)(n.h3,{id:"status-server-http-endpoint",children:"Status Server HTTP Endpoint"}),"\n",(0,s.jsxs)(n.p,{children:["The SC client (4.8.x or newer) provides an HTTP endpoint for ",(0,s.jsx)(n.a,{href:"/secure-connections/sauce-connect/proxy-tunnels/#status-server-endpoints",children:"various health checks"}),". This can be used when the CI/CD system has access to the SC process' network."]}),"\n",(0,s.jsxs)(n.p,{children:["It's enabled with the ",(0,s.jsx)(n.a,{href:"/dev/cli/sauce-connect-proxy/#--status-address",children:(0,s.jsx)(n.code,{children:"--status-address"})})," option, and takes a ",(0,s.jsx)(n.code,{children:"host:port"})," parameter."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--status-address :8080 # listens on all the interfaces' port 8080\n--status-address 1.2.3.4:80 # listens on 1.2.3.4 port 80\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"/readiness"})," returns 200 response code when Sauce Connect Proxy is ready, 503 otherwise."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"\xb1 curl -v localhost:8080/readiness\n*   Trying 127.0.0.1:8080...\n* Connected to localhost (127.0.0.1) port 8080 (#0)\n> GET /readiness HTTP/1.1\n> Host: localhost:8080\n> User-Agent: curl/7.84.0\n> Accept: */*\n>\n* Mark bundle as not supporting multiuse\n< HTTP/1.1 503 Service Unavailable\n< Content-Type: text/plain; charset=utf-8\n< X-Content-Type-Options: nosniff\n< Date: Wed, 01 Feb 2023 18:50:22 GMT\n< Content-Length: 44\n<\nserver isn't ready. tunnel failed readiness\n* Connection #0 to host localhost left intact\n\n$ sleep 5\n\n$ curl -v localhost:8080/readiness\n*   Trying 127.0.0.1:8080...\n* Connected to localhost (127.0.0.1) port 8080 (#0)\n> GET /readiness HTTP/1.1\n> Host: localhost:8080\n> User-Agent: curl/7.84.0\n> Accept: */*\n>\n* Mark bundle as not supporting multiuse\n< HTTP/1.1 200 OK\n< Content-Type: text/plain; charset=utf-8\n< Date: Wed, 01 Feb 2023 18:48:32 GMT\n< Content-Length: 3\n<\nOK\n* Connection #0 to host localhost left intact\n"})}),"\n",(0,s.jsx)(n.h3,{id:"ready-file",children:"Ready File"}),"\n",(0,s.jsxs)(n.p,{children:["The SC client can create a file when it's ready using the ",(0,s.jsx)(n.a,{href:"/dev/cli/sauce-connect-proxy/#--readyfile",children:(0,s.jsx)(n.code,{children:"--readyfile"})})," option. This can be used when the CI/CD system has access to the filesystem that the SC process is running in."]}),"\n",(0,s.jsx)(n.h3,{id:"tunnels-rest-api",children:"Tunnels REST API"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"/dev/api/connect/#get-tunnels-for-a-user",children:"Sauce Connect REST API"})," provides metadata on tunnels. One of the keys ",(0,s.jsx)(n.code,{children:"is_ready"})," is a boolean that tracks the state of the tunnel. This method can be used for jobs that don't have access to the tunnel's filesystem or network. It will need some logic to find the right tunnel, since the ",(0,s.jsx)(n.code,{children:"tunnel_id"})," is probably not known when the request is sent."]}),"\n",(0,s.jsxs)(n.p,{children:["When the ",(0,s.jsx)(n.code,{children:"/tunnels?full=true"})," call is made, an array of tunnel objects is sent back with metadata. Each item could be checked for a matching ",(0,s.jsx)(n.code,{children:"tunnel_identifier"}),", and once the correct tunnel is found, the ",(0,s.jsx)(n.code,{children:"is_ready"})," flag could be checked."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl --user ${SAUCE_USERNAME}:${SAUCE_ACCESS_KEY} https://api.us-west-1.saucelabs.com/rest/v1/${SAUCE_USERNAME}/tunnels?full=true\n\n[\n  {\n    ...\n    "id": "674442d71ffe446aa854a24a4c1c8bdd",\n    "is_ready": true,\n    ...\n    "tunnel_identifier": "jenkins-job-1234"\n    ...\n  }\n]\n'})})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>c});t(96540);var s=t(34164);const a={tabItem:"tabItem_Ymn6"};var r=t(74848);function c(e){let{children:n,hidden:t,className:c}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.A)(a.tabItem,c),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>T});var s=t(96540),a=t(34164),r=t(23104),c=t(56347),o=t(205),i=t(57485),l=t(31682),u=t(70679);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:a}}=e;return{value:n,label:t,attributes:s,default:a}}))}(t);return function(e){const n=(0,l.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const a=(0,c.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(r),(0,s.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(a.location.search);n.set(r,e),a.replace({...a.location,search:n.toString()})}),[r,a])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,r=h(e),[c,i]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:r}))),[l,d]=f({queryString:t,groupId:a}),[b,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,r]=(0,u.Dv)(t);return[a,(0,s.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:a}),g=(()=>{const e=l??b;return p({value:e,tabValues:r})?e:null})();(0,o.A)((()=>{g&&i(g)}),[g]);return{selectedValue:c,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),m(e)}),[d,m,r]),tabValues:r}}var m=t(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(74848);function x(e){let{className:n,block:t,selectedValue:s,selectValue:c,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:l}=(0,r.a_)(),u=e=>{const n=e.currentTarget,t=i.indexOf(n),a=o[t].value;a!==s&&(l(n),c(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...r,className:(0,a.A)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:r}=e;const c=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=c.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:c.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function j(e){const n=b(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,v.jsx)(x,{...n,...e}),(0,v.jsx)(y,{...n,...e})]})}function T(e){const n=(0,m.A)();return(0,v.jsx)(j,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var s=t(96540);const a={},r=s.createContext(a);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);