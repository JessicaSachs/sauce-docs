"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[8188],{5780:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>r,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>t,toc:()=>d});var n=i(74848),a=i(28453);const l={id:"delete-session",title:"Virtual USB CLI: Delete Session",sidebar_label:"Delete Session"},c=void 0,t={id:"dev/cli/virtual-usb/delete-session",title:"Virtual USB CLI: Delete Session",description:"Close a Virtual USB session that you launched using the startSession command.",source:"@site/docs/dev/cli/virtual-usb/delete-session.md",sourceDirName:"dev/cli/virtual-usb",slug:"/dev/cli/virtual-usb/delete-session",permalink:"/sauce-docs/pr-preview/pr-2907/dev/cli/virtual-usb/delete-session",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/dev/cli/virtual-usb/delete-session.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:172477197e4,frontMatter:{id:"delete-session",title:"Virtual USB CLI: Delete Session",sidebar_label:"Delete Session"},sidebar:"dev",previous:{title:"Disconnect Session",permalink:"/sauce-docs/pr-preview/pr-2907/dev/cli/virtual-usb/disconnect-session"},next:{title:"Find SessionID",permalink:"/sauce-docs/pr-preview/pr-2907/dev/cli/virtual-usb/find-sessionid"}},r={},d=[{value:"Usage",id:"usage",level:2},{value:"Options Details",id:"options-details",level:2},{value:'<span class="cli">--sessionId</span>',id:"--sessionid",level:3},{value:'<span class="cli">--username</span>',id:"--username",level:3},{value:'<span class="cli">--accessKey</span>',id:"--accesskey",level:3},{value:'<span class="cli">--serverHost</span>',id:"--serverhost",level:3},{value:'<span class="cli">--serverPort</span>',id:"--serverport",level:3},{value:"Examples",id:"examples",level:2},{value:"Basic Example with Required Flags",id:"basic-example-with-required-flags",level:3},{value:"Full Example with Optional Flags",id:"full-example-with-optional-flags",level:3}];function o(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:["Close a Virtual USB session that you launched using the ",(0,n.jsxs)(s.a,{href:"/dev/cli/virtual-usb/start-session",children:[(0,n.jsx)(s.code,{children:"startSession"})," command"]}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"$ <main class> [OPTIONS] deleteSession [OPTIONS]\n"})}),"\n",(0,n.jsx)(s.h2,{id:"options-details",children:"Options Details"}),"\n",(0,n.jsx)(s.h3,{id:"--sessionid",children:(0,n.jsx)("span",{className:"cli",children:"--sessionId"})}),"\n",(0,n.jsxs)("div",{className:"cli-desc",children:[(0,n.jsx)("p",{children:(0,n.jsx)("small",{children:"| REQUIRED | STRING |"})}),"The unique identifier of the session to delete. You can retrieve the session ID of an active session using the ",(0,n.jsxs)(s.a,{href:"/dev/cli/virtual-usb/find-sessionid",children:[(0,n.jsx)(s.code,{children:"sessions"})," command"]}),"."]}),"\n",(0,n.jsx)(s.h3,{id:"--username",children:(0,n.jsx)("span",{className:"cli",children:"--username"})}),"\n",(0,n.jsxs)("div",{className:"cli-desc",children:[(0,n.jsx)("p",{children:(0,n.jsx)("small",{children:"| REQUIRED | STRING |"})}),"A valid Sauce Labs user account. You can find your username on the Sauce Labs ",(0,n.jsx)(s.a,{href:"https://app.saucelabs.com/user-settings",children:"User Settings page"}),". This option supports environment variable values."]}),"\n",(0,n.jsx)(s.h3,{id:"--accesskey",children:(0,n.jsx)("span",{className:"cli",children:"--accessKey"})}),"\n",(0,n.jsxs)("div",{className:"cli-desc",children:[(0,n.jsx)("p",{children:(0,n.jsx)("small",{children:"| REQUIRED | STRING |"})}),"The authentication access key associated with your Sauce Labs user account. You can find your access key on the Sauce Labs ",(0,n.jsx)(s.a,{href:"https://app.saucelabs.com/user-settings",children:"User Settings page"}),". This option supports environment variable values."]}),"\n",(0,n.jsx)(s.h3,{id:"--serverhost",children:(0,n.jsx)("span",{className:"cli",children:"--serverHost"})}),"\n",(0,n.jsxs)("div",{className:"cli-desc",children:[(0,n.jsx)("p",{children:(0,n.jsx)("small",{children:"| OPTIONAL | URL ADDRESS |"})}),"A specific Virtual USB server host address. The default value, if not specified, is ",(0,n.jsx)(s.code,{children:"http://127.0.0.1"}),"."]}),"\n",(0,n.jsx)(s.h3,{id:"--serverport",children:(0,n.jsx)("span",{className:"cli",children:"--serverPort"})}),"\n",(0,n.jsxs)("div",{className:"cli-desc",children:[(0,n.jsx)("p",{children:(0,n.jsx)("small",{children:"| OPTIONAL | STRING |"})}),"A specific Virtual USB server port. The default value, if not specified, is ",(0,n.jsx)(s.code,{children:"33657"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(s.h3,{id:"basic-example-with-required-flags",children:"Basic Example with Required Flags"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-java",metastring:'title="Delete Request"',children:"java -jar virtual-usb-client.jar deleteSession --sessionId d03a1b81-158d-4bb4-bcc9-074e43dd8465 --username $SAUCE_USERNAME --accessKey $SAUCE_ACCESS_KEY\n"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",metastring:'title="Sample Response"',children:"07:45:46.375 [main] INFO com.saucelabs.vusb.client.Runner - Runner Version 2.0.0\nDisconnected\nDeleted session d03a1b81-158d-4bb4-bcc9-074e43dd8465\n"})}),"\n",(0,n.jsx)(s.h3,{id:"full-example-with-optional-flags",children:"Full Example with Optional Flags"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"java -jar virtual-usb-client.jar deleteSession \\\n    --sessionId d03a1b81-158d-4bb4-bcc9-074e43dd8465 \\\n    --username $SAUCE_USERNAME \\\n    --accessKey $SAUCE_ACCESS_KEY\n    --serverHost http://127.0.0.1 \\\n    --serverPort 8080 \\\n"})})]})}function u(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},28453:(e,s,i)=>{i.d(s,{R:()=>c,x:()=>t});var n=i(96540);const a={},l=n.createContext(a);function c(e){const s=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),n.createElement(l.Provider,{value:s},e.children)}}}]);