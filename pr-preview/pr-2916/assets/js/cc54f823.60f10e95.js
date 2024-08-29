"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[3889],{8637:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var n=s(74848),r=s(28453);s(11470),s(19365);const a={id:"api",title:"About the Sauce REST APIs",sidebar_label:"Getting Started",description:"Introduction to basic principles of authentication, request/response structure, response codes and errors."},i=void 0,o={id:"dev/api",title:"About the Sauce REST APIs",description:"Introduction to basic principles of authentication, request/response structure, response codes and errors.",source:"@site/docs/dev/api.md",sourceDirName:"dev",slug:"/dev/api",permalink:"/sauce-docs/pr-preview/pr-2916/dev/api",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/dev/api.md",tags:[],version:"current",lastUpdatedBy:"kristofmuhi",lastUpdatedAt:172492915e4,frontMatter:{id:"api",title:"About the Sauce REST APIs",sidebar_label:"Getting Started",description:"Introduction to basic principles of authentication, request/response structure, response codes and errors."},sidebar:"dev",previous:{title:"About",permalink:"/sauce-docs/pr-preview/pr-2916/dev"},next:{title:"Accounts",permalink:"/sauce-docs/pr-preview/pr-2916/dev/api/accounts"}},l={},c=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Accessing the APIs",id:"accessing-the-apis",level:2},{value:"Authentication",id:"authentication",level:3},{value:"Versioning",id:"versioning",level:3},{value:"Methods",id:"methods",level:3},{value:"Status Codes",id:"status-codes",level:2},{value:"Rate Limits",id:"rate-limits",level:2},{value:"Rate Limit Breakdown",id:"rate-limit-breakdown",level:3},{value:"JSON Response Formatting",id:"json-response-formatting",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Sauce Labs exposes a set of REST API endpoints that allow you to perform operations, manage accounts, and retrieve data programmatically so you can use the Sauce platform in the way that best suits your business logic."}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["You can check the current accessibility of any Sauce Labs system on the ",(0,n.jsx)(t.a,{href:"https://status.saucelabs.com/",children:"Sauce Labs Systems Status"})," page."]})}),"\n",(0,n.jsx)(t.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["A Sauce Labs account (",(0,n.jsx)(t.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,n.jsx)(t.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Your Sauce Labs ",(0,n.jsx)(t.a,{href:"https://app.saucelabs.com/user-settings",children:"Username and Access Key"})]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"accessing-the-apis",children:"Accessing the APIs"}),"\n",(0,n.jsx)(t.p,{children:"The Sauce Labs APIs are organized around REST. Each endpoint is structured as a resource-oriented URL that accepts inline query parameters and form-encoded request bodies, then returns JSON-encoded responses."}),"\n",(0,n.jsxs)(t.p,{children:["Each endpoint is constructed from a ",(0,n.jsx)(t.code,{children:"{base-url}"})," prefix that is based on the data center associated with the Sauce Labs account for which the request is relevant, plus the latest version for the given method. The following table provide the base URLs for each data center."]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Data Center"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"API Base URL"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"US West"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"https://api.us-west-1.saucelabs.com/"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"US East"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"https://api.us-east-4.saucelabs.com/"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Europe"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"https://api.eu-central-1.saucelabs.com/"})})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"authentication",children:"Authentication"}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["The request examples throughout the API documentation utilize variables in place of Sauce Labs authentication credentials. Consider ",(0,n.jsx)(t.a,{href:"/basics/environment-variables/",children:"setting your credentials as environment variables"})," so that you can simply copy, paste, and run the code examples rather than manually passing your credentials for each call."]})}),"\n",(0,n.jsxs)(t.p,{children:["The Sauce Labs API uses API keys to authenticate requests. You can view and manage your API key under your ",(0,n.jsx)(t.a,{href:"https://app.saucelabs.com/user-settings",children:"Sauce Labs User Settings"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Authentication to the API is performed via ",(0,n.jsx)(t.a,{href:"http://en.wikipedia.org/wiki/Basic_access_authentication",children:"HTTP Basic Auth"}),". Provide your username and API key as the basic auth username and password values, respectively. All requests must be made over HTTPS. Calls made over HTTP or without proper authentication will fail."]}),"\n",(0,n.jsx)(t.p,{children:"You can provide your authentication credentials as inline parameters of your request or using a Basic Header."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",metastring:'title="Inline Authenticated Request Example"',children:"curl -u \"$SAUCE_USERNAME:$SAUCE_ACCESS_KEY\" --location \\\n--request GET 'https://api.us-west-1.saucelabs.com/team-management/v1/teams'\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",metastring:'title="Header Authenticated Request Example"',children:"curl -L -X GET 'https://api.us-west-1.saucelabs.com/team-management/v1/users/' \\\n-u $SAUCE_USERNAME:$SAUCE_ACCESS_KEY\n"})}),"\n",(0,n.jsx)(t.h3,{id:"versioning",children:"Versioning"}),"\n",(0,n.jsx)(t.p,{children:"The API is versioned by URL, each of which may be in a different stage of release. The currently published version of each endpoint is reflected in the URL itself, as demonstrated in the following two endpoints:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"https://api.us-west-1.saucelabs.com/rest/v1/{username}/jobs"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"https://api.us-west-1.saucelabs.com/v2/performance/metrics/"})}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"methods",children:"Methods"}),"\n",(0,n.jsxs)(t.p,{children:["Unspecified method requests default to ",(0,n.jsx)(t.code,{children:"GET"}),". All other supported request types (",(0,n.jsx)(t.code,{children:"PUT"}),"; ",(0,n.jsx)(t.code,{children:"POST"}),"; ",(0,n.jsx)(t.code,{children:"DELETE"}),": ",(0,n.jsx)(t.code,{children:"PATCH"}),") require setting the ",(0,n.jsx)(t.code,{children:"Content-Type"})," header to ",(0,n.jsx)(t.code,{children:"application/json"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"status-codes",children:"Status Codes"}),"\n",(0,n.jsxs)(t.p,{children:["Sauce Labs uses conventional HTTP response codes to indicate the success or failure of an API request. In general, codes in the ",(0,n.jsx)(t.code,{children:"2xx"})," range indicate success, while codes in the ",(0,n.jsx)(t.code,{children:"4xx"})," range indicate an error that caused the request to be denied. Codes in the ",(0,n.jsx)(t.code,{children:"5xx"})," range indicate an error reaching the Sauce Labs server (which is rare). The following table provides a summary of response codes returned by the APIs."]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Code"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"200"})," - OK"]}),(0,n.jsx)(t.td,{children:"The request was processed successfully."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"201"})," - Created"]}),(0,n.jsxs)(t.td,{children:["The request has been fulfilled, resulting in the creation of a new resource. Typically returned for ",(0,n.jsx)(t.code,{children:"POST"}),", ",(0,n.jsx)(t.code,{children:"PUT"}),", or ",(0,n.jsx)(t.code,{children:"PATCH"})," requests that pass data values for the purpose of creating or updating records."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"400"})," - Bad Request"]}),(0,n.jsx)(t.td,{children:"The request was not acceptable, often due to missing or improperly formatted parameters. This code may be accompanied by additional information in the form of a body payload or a message attribute of the response code."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"401"})," - Unauthorized"]}),(0,n.jsx)(t.td,{children:"The authentication credentials were missing or not valid."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"403"})," - Forbidden"]}),(0,n.jsx)(t.td,{children:"The authenticated user does not have permission to perform the request."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"404"})," - Not Found"]}),(0,n.jsx)(t.td,{children:"The requested resource does not exist. This can refer to the endpoint itself (check for typos in the request URL), or the requested data (the job ID does not match any existing records, for example). This code may be accompanied by additional information in the form of a body payload or message attribute of the response code."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"429"})," - Too many requests"]}),(0,n.jsxs)(t.td,{children:["The number of requests has exceeded the ",(0,n.jsx)(t.a,{href:"#rate-limits",children:"rate limit"})," for the API."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"500"})," - Internal Server Error"]}),(0,n.jsx)(t.td,{children:"The Sauce Labs server was not responsive."})]})]})]}),"\n",(0,n.jsx)(t.p,{children:"Following are some sample error responses that include additional detail."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-html",metastring:'title="404 Typo in Request URL Error Response"',children:'<!doctype html>\n<html lang="en">\n\n<head>\n\t<title>Not Found</title>\n</head>\n\n<body>\n\t<h1>Not Found</h1>\n\t<p>The requested resource was not found on this server.</p>\n</body>\n\n</html>\n'})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",metastring:'title="404 User ID Not Found Error Response"',children:'{\n"detail": "Not found."\n}\n'})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",metastring:'title="400 Missing Required Parameter Error Response"',children:'{\n"verify_password": ["This field is required."]\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"rate-limits",children:"Rate Limits"}),"\n",(0,n.jsx)(t.p,{children:"The Sauce Labs REST API places rate limits on some endpoints in order to prevent over-utilization."}),"\n",(0,n.jsx)(t.p,{children:"For example:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Incoming authenticated API requests have rate limits imposed against the individual user accounts."}),"\n",(0,n.jsx)(t.li,{children:"Incoming unauthenticated API requests have rate limits imposed against the IP addresses."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Requests received after the rate limit is reached return a ",(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429#:~:text=The%20HTTP%20429%20Too%20Many,before%20making%20a%20new%20request",children:"429 response code"})," indicating that the number of allowable requests has been exceeded."]}),"\n",(0,n.jsx)(t.h3,{id:"rate-limit-breakdown",children:"Rate Limit Breakdown"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"REST API Endpoint"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Rate Limit"}),(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"Authenticated"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"All authenticated request endpoints"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"10 requests per second, or 3,500 requests per hour"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"\u2714\ufe0f"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"All unauthenticated request endpoints"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"2 requests per minute"}),(0,n.jsx)(t.td,{style:{textAlign:"right"}})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"json-response-formatting",children:"JSON Response Formatting"}),"\n",(0,n.jsxs)(t.p,{children:["The request examples throughout the API documentation are appended with ",(0,n.jsx)(t.code,{children:"| json_pp"})," as a convenience to return the response in a more readable format that does not require the installation of any additional tools."]}),"\n",(0,n.jsxs)(t.p,{children:["You can remove the ",(0,n.jsx)(t.code,{children:"| json_pp"})," reference from your requests to have responses returned as raw JSON, or you can specify a different syntax formatter of your choosing, such as ",(0,n.jsx)(t.a,{href:"https://stedolan.github.io/jq/",children:"JQ"}),"."]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},19365:(e,t,s)=>{s.d(t,{A:()=>i});s(96540);var n=s(34164);const r={tabItem:"tabItem_Ymn6"};var a=s(74848);function i(e){let{children:t,hidden:s,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,i),hidden:s,children:t})}},11470:(e,t,s)=>{s.d(t,{A:()=>A});var n=s(96540),r=s(34164),a=s(23104),i=s(56347),o=s(205),l=s(57485),c=s(31682),d=s(70679);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:s}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:s,attributes:n,default:r}}=e;return{value:t,label:s,attributes:n,default:r}}))}(s);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,s])}function p(e){let{value:t,tabValues:s}=e;return s.some((e=>e.value===t))}function x(e){let{queryString:t=!1,groupId:s}=e;const r=(0,i.W6)(),a=function(e){let{queryString:t=!1,groupId:s}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:t,groupId:s});return[(0,l.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function m(e){const{defaultValue:t,queryString:s=!1,groupId:r}=e,a=h(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=s.find((e=>e.default))??s[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[c,u]=x({queryString:s,groupId:r}),[m,f]=function(e){let{groupId:t}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,d.Dv)(s);return[r,(0,n.useCallback)((e=>{s&&a.set(e)}),[s,a])]}({groupId:r}),j=(()=>{const e=c??m;return p({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{j&&l(j)}),[j]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,a]),tabValues:a}}var f=s(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=s(74848);function g(e){let{className:t,block:s,selectedValue:n,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const t=e.currentTarget,s=l.indexOf(t),r=o[s].value;r!==n&&(c(t),i(r))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=l.indexOf(e.currentTarget)+1;t=l[s]??l[0];break}case"ArrowLeft":{const s=l.indexOf(e.currentTarget)-1;t=l[s]??l[l.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":s},t),children:o.map((e=>{let{value:t,label:s,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:u,onClick:d,...a,className:(0,r.A)("tabs__item",j.tabItem,a?.className,{"tabs__item--active":n===t}),children:s??t},t)}))})}function v(e){let{lazy:t,children:s,selectedValue:a}=e;const i=(Array.isArray(s)?s:[s]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=m(e);return(0,b.jsxs)("div",{className:(0,r.A)("tabs-container",j.tabList),children:[(0,b.jsx)(g,{...t,...e}),(0,b.jsx)(v,{...t,...e})]})}function A(e){const t=(0,f.A)();return(0,b.jsx)(y,{...e,children:u(e.children)},String(t))}},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>o});var n=s(96540);const r={},a=n.createContext(r);function i(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);