"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[48556],{63093:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>g,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var s=i(74848),o=i(28453),r=i(86025);const t={id:"ignoring-changes",title:"Ignoring Visual Changes and Areas",sidebar_label:"Ignoring Changes"},a=void 0,l={id:"visual/e2e-testing/workflow/ignoring-changes",title:"Ignoring Visual Changes and Areas",description:"Ignoring Changes",source:"@site/docs/visual/e2e-testing/workflow/ignoring-changes.md",sourceDirName:"visual/e2e-testing/workflow",slug:"/visual/e2e-testing/workflow/ignoring-changes",permalink:"/sauce-docs/pr-preview/pr-2916/visual/e2e-testing/workflow/ignoring-changes",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/visual/e2e-testing/workflow/ignoring-changes.md",tags:[],version:"current",lastUpdatedBy:"kristofmuhi",lastUpdatedAt:172492915e4,frontMatter:{id:"ignoring-changes",title:"Ignoring Visual Changes and Areas",sidebar_label:"Ignoring Changes"}},g={},c=[{value:"Ignoring Changes",id:"ignoring-changes",level:2},{value:"Undoing an Ignore",id:"undoing-an-ignore",level:3},{value:"Ignoring Areas",id:"ignoring-areas",level:2}];function d(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"ignoring-changes",children:"Ignoring Changes"}),"\n",(0,s.jsx)(n.p,{children:"Screener gives the ability to easily ignore specific visual changes during the Review Flow."}),"\n",(0,s.jsx)(n.p,{children:"An example of where this could be useful is ignoring content that continuously changes on each test run (such as dates)."}),"\n",(0,s.jsx)(n.p,{children:"To ignore a visual change:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Click on its highlight to open the ",(0,s.jsx)(n.strong,{children:"Change List"})," side panel."]}),"\n",(0,s.jsxs)(n.li,{children:["Find the change in the Change List, and click ",(0,s.jsx)(n.strong,{children:"Ignore"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Changes to this element will now be ignored in future tests:"}),"\n",(0,s.jsx)("img",{src:(0,r.Ay)("img/visual/e2e-ignore-flow.gif"),alt:"E2E Ignore Flow"}),"\n",(0,s.jsx)(n.h3,{id:"undoing-an-ignore",children:"Undoing an Ignore"}),"\n",(0,s.jsxs)(n.p,{children:["To undo an ",(0,s.jsx)(n.strong,{children:"Ignore"})," action:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Follow the same steps above."}),"\n",(0,s.jsx)(n.li,{children:"Find the ignored change."}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.strong,{children:"Undo Ignore"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"ignoring-areas",children:"Ignoring Areas"}),"\n",(0,s.jsx)(n.p,{children:"Screener also provides you the ability to exclude areas from your visual test. An example of where this could be useful is a third-party widget or ads."}),"\n",(0,s.jsx)(n.p,{children:"To ignore a visual area, you have two options:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Add a special class name - ",(0,s.jsx)(n.code,{children:"qa-screener-ignore"})," - to your app's HTML code on the element you want to ignore. Then the element, and everything contained within it, will be ignored."]}),"\n",(0,s.jsxs)(n.li,{children:["Add an ",(0,s.jsx)(n.code,{children:"ignore"})," option in your WebDriver capabilities, with its value set to a comma-delimited string of CSS Selectors that represent areas to be ignored. Example:","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"capabilities = {\n  ...\n  'sauce:visual': {\n    ...\n    ignore: '.qa-ignore-date, .qa-ignore-ad'\n  }\n}\n"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>a});var s=i(96540);const o={},r=s.createContext(o);function t(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);