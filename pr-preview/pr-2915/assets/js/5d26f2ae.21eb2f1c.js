"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[32018],{22930:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var a=t(74848),n=t(28453);const r={id:"artifacts-download",title:"saucectl imagerunner artifacts download",sidebar_label:"artifacts download"},i=void 0,c={id:"dev/cli/saucectl/imagerunner/artifacts-download",title:"saucectl imagerunner artifacts download",description:"Get artifacts/files of the container from a Sauce Orchestrate run. Only the files specified in artifacts configuration are downloaded. Supports glob pattern.",source:"@site/docs/dev/cli/saucectl/imagerunner/artifacts.md",sourceDirName:"dev/cli/saucectl/imagerunner",slug:"/dev/cli/saucectl/imagerunner/artifacts-download",permalink:"/sauce-docs/pr-preview/pr-2915/dev/cli/saucectl/imagerunner/artifacts-download",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/dev/cli/saucectl/imagerunner/artifacts.md",tags:[],version:"current",lastUpdatedBy:"Tian Feng",lastUpdatedAt:1724880664e3,frontMatter:{id:"artifacts-download",title:"saucectl imagerunner artifacts download",sidebar_label:"artifacts download"},sidebar:"dev",previous:{title:"push",permalink:"/sauce-docs/pr-preview/pr-2915/dev/cli/saucectl/docker/push"},next:{title:"list",permalink:"/sauce-docs/pr-preview/pr-2915/dev/cli/saucectl/imagerunner/list"}},l={},d=[{value:"Usage",id:"usage",level:2},{value:"Available Options",id:"available-options",level:2},{value:"Options Details",id:"options-details",level:2},{value:'<span class="cli">--target-dir</span>',id:"--target-dir",level:3},{value:'<span class="cli">--out</span>',id:"--out",level:3},{value:'<span class="cli">--region</span>',id:"--region",level:3}];function o(e){const s={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.p,{children:["Get artifacts/files of the container from a Sauce Orchestrate run. Only the files specified in ",(0,a.jsx)(s.code,{children:"artifacts"})," configuration are downloaded. Supports glob pattern."]}),"\n",(0,a.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"$ saucectl imagerunner artifacts download <runID> <globPattern> [flags]\n"})}),"\n",(0,a.jsx)(s.h2,{id:"available-options",children:"Available Options"}),"\n",(0,a.jsxs)("table",{id:"table-cli",children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{width:"30%",children:"Flag"}),(0,a.jsx)("th",{width:"10%",children:"Shorthand"}),(0,a.jsx)("th",{children:"Description"})]})}),(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("span",{className:"t-cli",children:(0,a.jsx)("a",{href:"#--target-dir",children:"--target-dir"})})}),(0,a.jsx)("td",{children:(0,a.jsx)("span",{className:"t-cli",children:"None"})}),(0,a.jsx)("td",{children:"Save files to target directory. Defaults to current working directory."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("span",{className:"t-cli",children:(0,a.jsx)("a",{href:"#--out",children:"--out"})})}),(0,a.jsx)("td",{children:(0,a.jsx)("span",{className:"t-cli",children:"-o"})}),(0,a.jsxs)("td",{children:["Output format to the console. Options: ",(0,a.jsx)("code",{children:"text"})," (default) and ",(0,a.jsx)("code",{children:"json"}),"."]})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("span",{className:"t-cli",children:(0,a.jsx)("a",{href:"#--region",children:"--region"})})}),(0,a.jsx)("td",{children:(0,a.jsx)("span",{className:"t-cli",children:"-r"})}),(0,a.jsxs)("td",{children:["The Sauce Labs region. Options are ",(0,a.jsx)("code",{children:"us-west-1"})," (default) and ",(0,a.jsx)("code",{children:"eu-central-1"}),"."]})]})]})]}),"\n",(0,a.jsx)(s.h2,{id:"options-details",children:"Options Details"}),"\n",(0,a.jsx)(s.h3,{id:"--target-dir",children:(0,a.jsx)("span",{className:"cli",children:"--target-dir"})}),"\n",(0,a.jsxs)("div",{className:"cli-desc",children:[(0,a.jsx)("p",{children:(0,a.jsx)("small",{children:"| OPTIONAL | STRING |"})}),"Save files to target directory. Defaults to current working directory.",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"saucectl imagerunner artifacts download <runID> <globPattern> --target-dir my-artifacts-dir\n"})})]}),"\n",(0,a.jsx)(s.h3,{id:"--out",children:(0,a.jsx)("span",{className:"cli",children:"--out"})}),"\n",(0,a.jsxs)("div",{className:"cli-desc",children:[(0,a.jsx)("p",{children:(0,a.jsx)("small",{children:"| OPTIONAL | STRING |"})}),'Specifies the output format for the console. Options include: "text" or "json". The default setting is "text".',(0,a.jsx)(s.strong,{children:"Shorthand:"})," ",(0,a.jsx)(s.code,{children:"-o <text/json>"}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"saucectl imagerunner artifacts download <runID> <globPattern> --out json\n"})})]}),"\n",(0,a.jsx)(s.h3,{id:"--region",children:(0,a.jsx)("span",{className:"cli",children:"--region"})}),"\n",(0,a.jsxs)("div",{className:"cli-desc",children:[(0,a.jsx)("p",{children:(0,a.jsx)("small",{children:"| OPTIONAL | STRING |"})}),"The Sauce Labs region. Options are ",(0,a.jsx)(s.code,{children:"us-west-1"})," (default) and ",(0,a.jsx)(s.code,{children:"eu-central-1"}),".",(0,a.jsx)(s.strong,{children:"Shorthand:"})," ",(0,a.jsx)(s.code,{children:"-r <region>"}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"saucectl imagerunner artifacts download <runID> <globPattern> --region us-west-1\n"})})]})]})}function h(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>i,x:()=>c});var a=t(96540);const n={},r=a.createContext(n);function i(e){const s=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(r.Provider,{value:s},e.children)}}}]);