"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[38966],{16535:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=r(74848),n=r(28453),s=(r(11470),r(19365),r(86025));const o={id:"team-mgmnt",title:"Team Management",sidebar_label:"Team Management",description:"Manage teams."},i=void 0,l={id:"error-reporting/org-settings/team-mgmnt",title:"Team Management",description:"Manage teams.",source:"@site/docs/error-reporting/org-settings/team-mgmnt.md",sourceDirName:"error-reporting/org-settings",slug:"/error-reporting/org-settings/team-mgmnt",permalink:"/sauce-docs/pr-preview/pr-2914/error-reporting/org-settings/team-mgmnt",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/org-settings/team-mgmnt.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:172488024e4,frontMatter:{id:"team-mgmnt",title:"Team Management",sidebar_label:"Team Management",description:"Manage teams."},sidebar:"backtrace",previous:{title:"Account Management",permalink:"/sauce-docs/pr-preview/pr-2914/error-reporting/org-settings/user-mgmnt"},next:{title:"SAML Single Sign-On",permalink:"/sauce-docs/pr-preview/pr-2914/error-reporting/org-settings/saml-sso"}},c={},u=[];function m(e){const t={p:"p",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Teams are a way to group users together for the purposes of allowing access to certain projects. Organization Administrators can access Organization Settings - Teams to create and manage new teams."}),"\n",(0,a.jsx)("img",{src:(0,s.Ay)("img/error-reporting/project-settings/teams.webp"),alt:""}),"\n",(0,a.jsx)(t.p,{children:"Teams can be added to Projects so that all members of the team have access to the project. As you manage team membership, project access is automatically reflected."}),"\n",(0,a.jsx)(t.p,{children:"A project by default has no project members, and all users in the tenant have access to it. In order for access control to be implemented, a project member mapping must exist. When a project member mapping exists: The user\u2019s role with respect to a project is the highest project role across project member mappings. When no project member mapping exists: all users have access."}),"\n",(0,a.jsx)(t.p,{children:"Organization Admins (users with the admin role under Organization settings | Users) can also manage project membership through this interface. Organization Admins will be able to see projects even if the project has a team associated that the admin user is not part of."}),"\n",(0,a.jsx)(t.p,{children:"Organization Admins will also retain their admin privileges if they are added to a team with member access to a project. On the other hand, a user with the member role will have admin privileges if they are added to a team with admin access to a project. The owner of a project (derived from the owner field of project) always has \u201cadmin\u201d project member privileges for that project."})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>o});r(96540);var a=r(34164);const n={tabItem:"tabItem_Ymn6"};var s=r(74848);function o(e){let{children:t,hidden:r,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(n.tabItem,o),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>x});var a=r(96540),n=r(34164),s=r(23104),o=r(56347),i=r(205),l=r(57485),c=r(31682),u=r(70679);function m(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return m(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}(r);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const n=(0,o.W6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function g(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,s=d(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[c,m]=h({queryString:r,groupId:n}),[g,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,u.Dv)(r);return[n,(0,a.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:n}),f=(()=>{const e=c??g;return p({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{f&&l(f)}),[f]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),m(e),b(e)}),[m,b,s]),tabValues:s}}var b=r(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(74848);function j(e){let{className:t,block:r,selectedValue:a,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const t=e.currentTarget,r=l.indexOf(t),n=i[r].value;n!==a&&(c(t),o(n))},m=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":r},t),children:i.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:m,onClick:u,...s,className:(0,n.A)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":a===t}),children:r??t},t)}))})}function w(e){let{lazy:t,children:r,selectedValue:s}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=g(e);return(0,v.jsxs)("div",{className:(0,n.A)("tabs-container",f.tabList),children:[(0,v.jsx)(j,{...t,...e}),(0,v.jsx)(w,{...t,...e})]})}function x(e){const t=(0,b.A)();return(0,v.jsx)(y,{...e,children:m(e.children)},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>i});var a=r(96540);const n={},s=a.createContext(n);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);