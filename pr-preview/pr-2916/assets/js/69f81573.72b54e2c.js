"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[79934],{20509:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>r,contentTitle:()=>c,default:()=>o,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=t(74848),n=t(28453);const a={id:"set-snippet",title:"saucectl apit vault set-snippet",sidebar_label:"set-snippet"},c=void 0,l={id:"dev/cli/saucectl/apit/vault/set-snippet",title:"saucectl apit vault set-snippet",description:"Sets/updates a snippet in a project's vault.",source:"@site/docs/dev/cli/saucectl/apit/vault/set-snippet.md",sourceDirName:"dev/cli/saucectl/apit/vault",slug:"/dev/cli/saucectl/apit/vault/set-snippet",permalink:"/sauce-docs/pr-preview/pr-2916/dev/cli/saucectl/apit/vault/set-snippet",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/dev/cli/saucectl/apit/vault/set-snippet.md",tags:[],version:"current",lastUpdatedBy:"kristofmuhi",lastUpdatedAt:172492915e4,frontMatter:{id:"set-snippet",title:"saucectl apit vault set-snippet",sidebar_label:"set-snippet"},sidebar:"dev",previous:{title:"get-snippet",permalink:"/sauce-docs/pr-preview/pr-2916/dev/cli/saucectl/apit/vault/get-snippet"},next:{title:"list-files",permalink:"/sauce-docs/pr-preview/pr-2916/dev/cli/saucectl/apit/vault/list-files"}},r={},p=[{value:"Usage",id:"usage",level:2},{value:"Available Options",id:"available-options",level:2},{value:"Options Details",id:"options-details",level:2},{value:'<span class="cli">--project</span>',id:"--project",level:3},{value:'<span class="cli">--region</span>',id:"--region",level:3}];function d(e){const s={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:"Sets/updates a snippet in a project's vault."}),"\n",(0,i.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsxs)(s.p,{children:["When a ",(0,i.jsx)(s.code,{children:"snippet_name"}),' exists in the vault, it will be replaced with the new content. If it does not exist, a new snippet is created. You can update or add a snippet by either specifying a file that contains the snippet or by using "-" to input the snippet directly from the standard input stream (stdin).']}),"\n",(0,i.jsx)(s.p,{children:"To update or add from a file:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:'saucectl apit vault set-snippet "snippet_name" "file_name" [flags]\n'})}),"\n",(0,i.jsx)(s.p,{children:"To update or add via stdin:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:'cat "file_name" | saucectl apit vault set-snippet "snippet_name" - [flags]\n'})}),"\n",(0,i.jsx)(s.h2,{id:"available-options",children:"Available Options"}),"\n",(0,i.jsxs)("table",{id:"table-cli",children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{width:"30%",children:"Flag"}),(0,i.jsx)("th",{width:"10%",children:"Shorthand"}),(0,i.jsx)("th",{children:"Description"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("span",{className:"t-cli",children:(0,i.jsx)("a",{href:"#--project",children:"--project"})})}),(0,i.jsx)("td",{children:(0,i.jsx)("span",{className:"t-cli",children:"None"})}),(0,i.jsx)("td",{children:"Select a vault by project name."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("span",{className:"t-cli",children:(0,i.jsx)("a",{href:"#--region",children:"--region"})})}),(0,i.jsx)("td",{children:(0,i.jsx)("span",{className:"t-cli",children:"-r"})}),(0,i.jsxs)("td",{children:["The Sauce Labs region. Options are ",(0,i.jsx)("code",{children:"us-west-1"})," (default) and ",(0,i.jsx)("code",{children:"eu-central-1"}),"."]})]})]})]}),"\n",(0,i.jsx)(s.h2,{id:"options-details",children:"Options Details"}),"\n",(0,i.jsx)(s.h3,{id:"--project",children:(0,i.jsx)("span",{className:"cli",children:"--project"})}),"\n",(0,i.jsxs)("div",{className:"cli-desc",children:[(0,i.jsx)("p",{children:(0,i.jsx)("small",{children:"| OPTIONAL | STRING |"})}),"Specifies the project by its name using ",(0,i.jsx)(s.code,{children:"--project"}),", or omits ",(0,i.jsx)(s.code,{children:"--project"})," to select from a list of available projects.",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:'saucectl apit vault set-snippet "snippet_name" "file_name" --project "project_name"\n'})}),"or",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:'cat "file_name" | saucectl apit vault set-snippet "snippet_name" - --project "project_name"\n'})})]}),"\n",(0,i.jsx)(s.h3,{id:"--region",children:(0,i.jsx)("span",{className:"cli",children:"--region"})}),"\n",(0,i.jsxs)("div",{className:"cli-desc",children:[(0,i.jsx)("p",{children:(0,i.jsx)("small",{children:"| OPTIONAL | STRING |"})}),"The Sauce Labs region. Options are ",(0,i.jsx)(s.code,{children:"us-west-1"})," (default) and ",(0,i.jsx)(s.code,{children:"eu-central-1"}),".",(0,i.jsx)(s.strong,{children:"Shorthand:"})," ",(0,i.jsx)(s.code,{children:"-r <region>"}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:'saucectl apit vault set-snippet "snippet_name" "file_name" --region us-west-1\n'})}),"or",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:'cat "file_name" | saucectl apit vault set-snippet "snippet_name" - --region us-west-1\n'})})]})]})}function o(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>c,x:()=>l});var i=t(96540);const n={},a=i.createContext(n);function c(e){const s=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),i.createElement(a.Provider,{value:s},e.children)}}}]);