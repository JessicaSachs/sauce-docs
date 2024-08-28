"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[53339],{32803:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=s(74848),a=s(28453),r=s(86025);s(11470),s(19365);const i={id:"acct-team-mgmt",title:"Screener Account and Team Management",sidebar_label:"Account and Team Management"},o=void 0,l={id:"visual/acct-team-mgmt",title:"Screener Account and Team Management",description:"The Screener visual testing solution is going to be discontinued on May 31st, 2024. You can migrate to the new Sauce Labs Visual Testing solution by following the integration steps.",source:"@site/docs/visual/acct-team-mgmt.md",sourceDirName:"visual",slug:"/visual/acct-team-mgmt",permalink:"/sauce-docs/pr-preview/pr-2915/visual/acct-team-mgmt",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/visual/acct-team-mgmt.md",tags:[],version:"current",lastUpdatedBy:"Tian Feng",lastUpdatedAt:1724880664e3,frontMatter:{id:"acct-team-mgmt",title:"Screener Account and Team Management",sidebar_label:"Account and Team Management"}},c={},d=[{value:"1. Add an Account Name",id:"1-add-an-account-name",level:2},{value:"2. User Roles",id:"2-user-roles",level:2},{value:"3. Create a Team",id:"3-create-a-team",level:2},{value:"4. Add Users to a Team",id:"4-add-users-to-a-team",level:2},{value:"5. Assign Projects to a Team",id:"5-assign-projects-to-a-team",level:2}];function u(e){const t={a:"a",admonition:"admonition",h2:"h2",p:"p",strong:"strong",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.admonition,{title:"Screener End-of-life",type:"warning",children:[(0,n.jsxs)(t.p,{children:["The Screener visual testing solution is going to be discontinued on May 31st, 2024. You can migrate to the new Sauce Labs Visual Testing solution by following the ",(0,n.jsx)(t.a,{href:"/visual-testing/",children:"integration steps"}),"."]}),(0,n.jsx)(t.p,{children:"If you have any questions, please reach out to your Customer Success Manager or Sauce Labs Support."})]}),"\n",(0,n.jsx)(t.p,{children:"Teams Management allows you to create Teams for your Account, add users to your Teams, specify user roles, and specify which projects users have access to. In addition, you can assign a user to be an administrator for your Screener Account."}),"\n",(0,n.jsx)(t.h2,{id:"1-add-an-account-name",children:"1. Add an Account Name"}),"\n",(0,n.jsx)(t.p,{children:"Before you can add teams to your account, you must give your account a name. This name is globally unique in Screener."}),"\n",(0,n.jsx)("img",{src:(0,r.Ay)("img/visual/e2e-add-account-name.png"),alt:"E2E Add Account Name"}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["Your account will be named ",(0,n.jsx)(t.strong,{children:"My Account"})," temporarily until you name your account."]})}),"\n",(0,n.jsx)(t.h2,{id:"2-user-roles",children:"2. User Roles"}),"\n",(0,n.jsx)(t.p,{children:"Before you create a team, it is useful to understand the different user roles in Screener. The table below identifies the features that are accessible for each role."}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("strong",{})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:(0,n.jsx)("small",{children:"Viewer"})})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:(0,n.jsx)("small",{children:"Tester"})})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:(0,n.jsx)("small",{children:"Administrator"})})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:(0,n.jsx)("small",{children:"Account Owner"})})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"View Projects & UI States"}),(0,n.jsx)("td",{children:"x"}),(0,n.jsx)("td",{children:"x"}),(0,n.jsx)("td",{children:"x"}),(0,n.jsx)("td",{children:"x"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Change Status of UI States"}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"x"}),(0,n.jsx)("td",{children:"x"}),(0,n.jsx)("td",{children:"x"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Delete Branches"}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"x"}),(0,n.jsx)("td",{children:"x"}),(0,n.jsx)("td",{children:"x"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Add/Delete Projects"}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"x"}),(0,n.jsx)("td",{children:"x"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Manage Teams"}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"x"}),(0,n.jsx)("td",{children:"x"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Manage Billing Information"}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"x"})]})]}),"\n",(0,n.jsxs)(t.p,{children:["Every Screener user has an individual account and will be the ",(0,n.jsx)(t.strong,{children:"Account Owner"})," for their own account. When a user is added to a team in another user's account, they will have access to the project(s) as defined by their role in the team."]}),"\n",(0,n.jsxs)(t.p,{children:["When a user is added as an ",(0,n.jsx)(t.strong,{children:"Administrator"}),", this user will have access to all projects within the account. There is no option to add a specific project to the team that has an Administrator role. Administrators have access to add/edit/delete projects."]}),"\n",(0,n.jsx)(t.p,{children:"If a user is assigned to more than one team with different roles, and there is a common project(s) between the teams, the highest role/permissions will be assigned to that user."}),"\n",(0,n.jsx)(t.h2,{id:"3-create-a-team",children:"3. Create a Team"}),"\n",(0,n.jsx)(t.p,{children:"Creating a team will allow you to specify which users have access to a specific projects. You will then assign a role to the team, allowing all users in the team to have certain permissions."}),"\n",(0,n.jsxs)(t.p,{children:["To add a new Team, click on the ",(0,n.jsx)(t.strong,{children:"+ Team"})," button."]}),"\n",(0,n.jsx)("img",{src:(0,r.Ay)("img/visual/e2e-add-team-button.png"),alt:"E2E Add Team",width:"350"}),"\n",(0,n.jsxs)(t.p,{children:["Enter a team name, select the appropriate user role, and click ",(0,n.jsx)(t.strong,{children:"Save"}),"."]}),"\n",(0,n.jsx)("img",{src:(0,r.Ay)("img/visual/e2e-add-team.png"),alt:"E2E Add Team"}),"\n",(0,n.jsx)(t.h2,{id:"4-add-users-to-a-team",children:"4. Add Users to a Team"}),"\n",(0,n.jsxs)(t.p,{children:["After a team is created, you can add users to a team. Click on the team you wish to add a user to, and click on ",(0,n.jsx)(t.strong,{children:"Assign Users"}),"."]}),"\n",(0,n.jsx)("img",{src:(0,r.Ay)("img/visual/e2e-add-user-button.png"),alt:"E2E Add User",width:"350"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"Manage Team Users"})," dialog will appear. Type the user's email address into the text box and click ",(0,n.jsx)(t.strong,{children:"Add User"}),". At this point, Screener will check to see if the user already exists in the system. If the user already exists, their email address will be added to the list of users below. If the user does not exist, you will be asked to invite the user by clicking ",(0,n.jsx)(t.strong,{children:"Click to Invite User"}),"."]}),"\n",(0,n.jsx)("img",{src:(0,r.Ay)("img/visual/e2e-add-user-team.png"),alt:"E2E Add User Team"}),"\n",(0,n.jsxs)(t.p,{children:["You will see the user added to the list. For new users, you will see ",(0,n.jsx)(t.strong,{children:"To Be Invited"})," beside the user's email address. This highlights new users to the system. Click ",(0,n.jsx)(t.strong,{children:"Save"})," to save the user to the team."]}),"\n",(0,n.jsx)("img",{src:(0,r.Ay)("img/visual/e2e-add-user-team-save.png"),alt:"E2E Add User Team Save"}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"For new users who are invited to join Screener, they will receive an invitation email. They can follow the instructions in the email to complete the registration process. When they are registered, they will have access to your project(s)."})}),"\n",(0,n.jsx)(t.h2,{id:"5-assign-projects-to-a-team",children:"5. Assign Projects to a Team"}),"\n",(0,n.jsxs)(t.p,{children:["Assigning projects to a team allows users of the team to have access to the specified projects. To add a project to a team, in the ",(0,n.jsx)(t.strong,{children:"Team Management"})," page, click on the team you wish to add a project to, and click on ",(0,n.jsx)(t.strong,{children:"Assign Projects"}),"."]}),"\n",(0,n.jsx)("img",{src:(0,r.Ay)("img/visual/e2e-add-project-team.png"),alt:"E2E Add Project Team",width:"350"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"Manage Team Projects"})," dialog will appear. Select the project(s) you wish to add and click ",(0,n.jsx)(t.strong,{children:"Save"}),"."]}),"\n",(0,n.jsx)("img",{src:(0,r.Ay)("img/visual/e2e-add-project-team-save.png"),alt:"E2E Add Project Team Save"})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},19365:(e,t,s)=>{s.d(t,{A:()=>i});s(96540);var n=s(34164);const a={tabItem:"tabItem_Ymn6"};var r=s(74848);function i(e){let{children:t,hidden:s,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,i),hidden:s,children:t})}},11470:(e,t,s)=>{s.d(t,{A:()=>w});var n=s(96540),a=s(34164),r=s(23104),i=s(56347),o=s(205),l=s(57485),c=s(31682),d=s(70679);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:s}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:s,attributes:n,default:a}}=e;return{value:t,label:s,attributes:n,default:a}}))}(s);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,s])}function m(e){let{value:t,tabValues:s}=e;return s.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:s}=e;const a=(0,i.W6)(),r=function(e){let{queryString:t=!1,groupId:s}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:t,groupId:s});return[(0,l.aZ)(r),(0,n.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function x(e){const{defaultValue:t,queryString:s=!1,groupId:a}=e,r=h(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=s.find((e=>e.default))??s[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[c,u]=p({queryString:s,groupId:a}),[x,g]=function(e){let{groupId:t}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,d.Dv)(s);return[a,(0,n.useCallback)((e=>{s&&r.set(e)}),[s,r])]}({groupId:a}),j=(()=>{const e=c??x;return m({value:e,tabValues:r})?e:null})();(0,o.A)((()=>{j&&l(j)}),[j]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),g(e)}),[u,g,r]),tabValues:r}}var g=s(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=s(74848);function v(e){let{className:t,block:s,selectedValue:n,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),d=e=>{const t=e.currentTarget,s=l.indexOf(t),a=o[s].value;a!==n&&(c(t),i(a))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=l.indexOf(e.currentTarget)+1;t=l[s]??l[0];break}case"ArrowLeft":{const s=l.indexOf(e.currentTarget)-1;t=l[s]??l[l.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":s},t),children:o.map((e=>{let{value:t,label:s,attributes:r}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:u,onClick:d,...r,className:(0,a.A)("tabs__item",j.tabItem,r?.className,{"tabs__item--active":n===t}),children:s??t},t)}))})}function b(e){let{lazy:t,children:s,selectedValue:r}=e;const i=(Array.isArray(s)?s:[s]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function y(e){const t=x(e);return(0,f.jsxs)("div",{className:(0,a.A)("tabs-container",j.tabList),children:[(0,f.jsx)(v,{...t,...e}),(0,f.jsx)(b,{...t,...e})]})}function w(e){const t=(0,g.A)();return(0,f.jsx)(y,{...e,children:u(e.children)},String(t))}},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>o});var n=s(96540);const a={},r=n.createContext(a);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);