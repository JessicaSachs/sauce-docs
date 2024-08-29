"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[20945],{12887:(e,s,l)=>{l.r(s),l.d(s,{assets:()=>r,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>d});var n=l(74848),c=l(28453);const a={id:"list",title:"saucectl storage list",sidebar_label:"list"},i=void 0,t={id:"dev/cli/saucectl/storage/list",title:"saucectl storage list",description:"Returns the list of files that have been uploaded to Sauce Storage.",source:"@site/docs/dev/cli/saucectl/storage/list.md",sourceDirName:"dev/cli/saucectl/storage",slug:"/dev/cli/saucectl/storage/list",permalink:"/sauce-docs/pr-preview/pr-2916/dev/cli/saucectl/storage/list",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/dev/cli/saucectl/storage/list.md",tags:[],version:"current",lastUpdatedBy:"kristofmuhi",lastUpdatedAt:172492915e4,frontMatter:{id:"list",title:"saucectl storage list",sidebar_label:"list"},sidebar:"dev",previous:{title:"download",permalink:"/sauce-docs/pr-preview/pr-2916/dev/cli/saucectl/storage/download"},next:{title:"upload",permalink:"/sauce-docs/pr-preview/pr-2916/dev/cli/saucectl/storage/upload"}},r={},d=[{value:"Usage",id:"usage",level:2},{value:"Available Options",id:"available-options",level:2},{value:"Options Details",id:"options-details",level:2},{value:'<span class="cli">--name</span>',id:"--name",level:3},{value:'<span class="cli">--out</span>',id:"--out",level:3},{value:'<span class="cli">--query</span>',id:"--query",level:3},{value:'<span class="cli">--region</span>',id:"--region",level:3}];function o(e){const s={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,c.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"Returns the list of files that have been uploaded to Sauce Storage."}),"\n",(0,n.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"$ saucectl storage list [flags]\n"})}),"\n",(0,n.jsx)(s.h2,{id:"available-options",children:"Available Options"}),"\n",(0,n.jsxs)("table",{id:"table-cli",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{width:"30%",children:"Flag"}),(0,n.jsx)("th",{width:"10%",children:"Shorthand"}),(0,n.jsx)("th",{children:"Description"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{className:"t-cli",children:(0,n.jsx)("a",{href:"#--name",children:"--name"})})}),(0,n.jsx)("td",{children:(0,n.jsx)("span",{className:"t-cli",children:"-n"})}),(0,n.jsx)("td",{children:"The filename (case-insensitive) by which you want to filter."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{className:"t-cli",children:(0,n.jsx)("a",{href:"#--out",children:"--out"})})}),(0,n.jsx)("td",{children:(0,n.jsx)("span",{className:"t-cli",children:"-o"})}),(0,n.jsxs)("td",{children:["Output format to the console. Options are ",(0,n.jsx)("code",{children:"text"})," (default) and ",(0,n.jsx)("code",{children:"json"}),"."]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{className:"t-cli",children:(0,n.jsx)("a",{href:"#--query",children:"--query"})})}),(0,n.jsx)("td",{children:(0,n.jsx)("span",{className:"t-cli",children:"-q"})}),(0,n.jsx)("td",{children:"Any search term (such as app name, file name, description, build number or version) by which you want to filter."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{className:"t-cli",children:(0,n.jsx)("a",{href:"#--region",children:"--region"})})}),(0,n.jsx)("td",{children:(0,n.jsx)("span",{className:"t-cli",children:"-r"})}),(0,n.jsxs)("td",{children:["The Sauce Labs region. Options are ",(0,n.jsx)("code",{children:"us-west-1"})," (default) and ",(0,n.jsx)("code",{children:"eu-central-1"}),"."]})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"options-details",children:"Options Details"}),"\n",(0,n.jsx)(s.h3,{id:"--name",children:(0,n.jsx)("span",{className:"cli",children:"--name"})}),"\n",(0,n.jsxs)("div",{className:"cli-desc",children:[(0,n.jsx)("p",{children:(0,n.jsx)("small",{children:"| OPTIONAL | STRING |"})}),"The filename (case-insensitive) by which you want to filter.",(0,n.jsx)(s.strong,{children:"Shorthand:"})," ",(0,n.jsx)(s.code,{children:"-n <name>"}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"saucectl storage list --name app.apk\n"})})]}),"\n",(0,n.jsx)(s.h3,{id:"--out",children:(0,n.jsx)("span",{className:"cli",children:"--out"})}),"\n",(0,n.jsxs)("div",{className:"cli-desc",children:[(0,n.jsx)("p",{children:(0,n.jsx)("small",{children:"| OPTIONAL | STRING |"})}),"Output format to the console. Options are ",(0,n.jsx)(s.code,{children:"text"})," (default) and ",(0,n.jsx)(s.code,{children:"json"}),".",(0,n.jsx)(s.strong,{children:"Shorthand:"})," ",(0,n.jsx)(s.code,{children:"-o <format>"}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"saucectl storage list --out json\n"})})]}),"\n",(0,n.jsx)(s.h3,{id:"--query",children:(0,n.jsx)("span",{className:"cli",children:"--query"})}),"\n",(0,n.jsxs)("div",{className:"cli-desc",children:[(0,n.jsx)("p",{children:(0,n.jsx)("small",{children:"| OPTIONAL | STRING |"})}),"Any search term (such as app name, file name, description, build number or version) by which you want to filter.",(0,n.jsx)(s.strong,{children:"Shorthand:"})," ",(0,n.jsx)(s.code,{children:"-q <query>"}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"saucectl storage list --query myapp\n"})})]}),"\n",(0,n.jsx)(s.h3,{id:"--region",children:(0,n.jsx)("span",{className:"cli",children:"--region"})}),"\n",(0,n.jsxs)("div",{className:"cli-desc",children:[(0,n.jsx)("p",{children:(0,n.jsx)("small",{children:"| OPTIONAL | STRING |"})}),"The Sauce Labs region. Options are ",(0,n.jsx)(s.code,{children:"us-west-1"})," (default) and ",(0,n.jsx)(s.code,{children:"eu-central-1"}),".",(0,n.jsx)(s.strong,{children:"Shorthand:"})," ",(0,n.jsx)(s.code,{children:"-r <region>"}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"saucectl storage list --region us-west-1\n"})})]})]})}function h(e={}){const{wrapper:s}={...(0,c.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},28453:(e,s,l)=>{l.d(s,{R:()=>i,x:()=>t});var n=l(96540);const c={},a=n.createContext(c);function i(e){const s=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);