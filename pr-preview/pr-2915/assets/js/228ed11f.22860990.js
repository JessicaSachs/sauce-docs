"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[69898],{54861:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>j,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var s=t(74848),i=t(28453),a=t(86025);const o={id:"project-access",title:"API Testing Project Settings",sidebar_label:"Project Settings"},c=void 0,r={id:"api-testing/project-access",title:"API Testing Project Settings",description:"Project settings allow you to view the access to projects that was defined when the project was created, and configure project details such as name, description, and tags, and delete projects. You can also add email addresses to receive notifications about tests in a project.",source:"@site/docs/api-testing/project-access.md",sourceDirName:"api-testing",slug:"/api-testing/project-access",permalink:"/sauce-docs/pr-preview/pr-2915/api-testing/project-access",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/project-access.md",tags:[],version:"current",lastUpdatedBy:"Tian Feng",lastUpdatedAt:1724880664e3,frontMatter:{id:"project-access",title:"API Testing Project Settings",sidebar_label:"Project Settings"},sidebar:"docs",previous:{title:"Logger",permalink:"/sauce-docs/pr-preview/pr-2915/api-testing/logger"},next:{title:"Legacy (APIF) Migration",permalink:"/sauce-docs/pr-preview/pr-2915/api-testing/legacy"}},l={},d=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Project Access Levels and User Scenarios",id:"project-access-levels-and-user-scenarios",level:2},{value:"Create a Project",id:"create-a-project",level:2},{value:"Manage Access to Projects",id:"manage-access-to-projects",level:3},{value:"Email Notifications",id:"email-notifications",level:2},{value:"Connectors",id:"connectors",level:2},{value:"Delete a Project",id:"delete-a-project",level:2}];function h(e){const n={a:"a",admonition:"admonition",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Project settings allow you to view the access to projects that was defined when the project was created, and configure project details such as name, description, and tags, and delete projects. You can also add email addresses to receive notifications about tests in a project."}),"\n",(0,s.jsx)("img",{src:(0,a.Ay)("img/api-testing/projectSettings.png"),alt:"Project settings",width:"400"}),"\n",(0,s.jsx)(n.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["A Sauce Labs account (",(0,s.jsx)(n.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,s.jsx)(n.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")."]}),"\n",(0,s.jsxs)(n.li,{children:["An understanding of ",(0,s.jsx)(n.a,{href:"/basics/acct-team-mgmt/managing-user-info/",children:"Organization Management"})," if you are an organization admin configuring team access to projects."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Sauce Labs Organization Management features are available for ",(0,s.jsx)("span",{className:"sauceGreen",children:"Enterprise Plans only"}),"."]})}),"\n",(0,s.jsx)(n.h2,{id:"project-access-levels-and-user-scenarios",children:"Project Access Levels and User Scenarios"}),"\n",(0,s.jsx)(n.p,{children:"Access to a project is assigned when the project is created. You can assign the following access levels to a project:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Team Access"}),": Available if an organization admin has set up teams in Organization Management. Users must be a member of the assigned team or an organization admin to access the project."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Organization Access"}),": Everyone that can access the organization."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The type of project access users have and can configure for the projects they create is based on the following user scenarios:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Team Member"}),": Users who are a member of a team. They can work in projects with access assigned to the team that they are a member of and also projects with organization-wide access. They cannot view projects with access assigned to teams they are not a member of. When creating a project, they will have the option to set the project access to the team that they are a member of or organization-wide access."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Organization Admin"}),": Organization Admins can create and interact with all data in all projects across their organization."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["You can view the access set for projects on the Projects page.",(0,s.jsx)("br",{}),(0,s.jsx)("img",{src:(0,a.Ay)("img/api-testing/accessOrg2.png"),alt:"New user UI",width:"500"})]})}),"\n",(0,s.jsx)(n.h2,{id:"create-a-project",children:"Create a Project"}),"\n",(0,s.jsxs)(n.p,{children:["You create projects and define project settings on the Projects page, and edit project settings on the ",(0,s.jsx)(n.strong,{children:"Settings > General > Project details"})," page."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["In ",(0,s.jsx)(n.strong,{children:"API Testing"}),", on the ",(0,s.jsx)(n.strong,{children:"Projects"})," page, click ",(0,s.jsx)(n.strong,{children:"Create Project"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Select an option in the ",(0,s.jsx)(n.strong,{children:"Create from"})," dropdown."]}),"\n",(0,s.jsxs)(n.li,{children:["Optionally, select one or more ",(0,s.jsx)(n.strong,{children:"Tags"}),", or click ",(0,s.jsx)(n.strong,{children:"Add custom tag"})," to add a new tag."]}),"\n",(0,s.jsxs)(n.li,{children:["Optionally, enter a ",(0,s.jsx)(n.strong,{children:"Description"})," of the project."]}),"\n",(0,s.jsxs)(n.li,{children:["Optionally, enter ",(0,s.jsx)(n.strong,{children:"Notes"})," about the project."]}),"\n",(0,s.jsxs)(n.li,{children:["Select the ",(0,s.jsx)(n.strong,{children:"Access"})," level for the project. If you are a team member you can select your team or organization-wide access. If you are an organization admin, you can select any team or organization-wide access."]}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.strong,{children:"Save"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"manage-access-to-projects",children:"Manage Access to Projects"}),"\n",(0,s.jsxs)(n.p,{children:["Suppose an organization admin deletes a team from Sauce Labs ",(0,s.jsx)(n.a,{href:"/basics/acct-team-mgmt/managing-user-info/",children:"Accounts > Organization Management"})," before managing project access in API Testing. In that case, you see a banner at the top of the Projects page that notifies you some projects belong to a deleted team. Clicking on the ",(0,s.jsx)(n.strong,{children:"Update"})," brings you to the Settings, where you can assign a new access level to that project."]}),"\n",(0,s.jsx)(n.h2,{id:"email-notifications",children:"Email Notifications"}),"\n",(0,s.jsx)(n.p,{children:"You can configure one or more email addresses to be notified when tests in a project are failing."}),"\n",(0,s.jsx)(n.p,{children:'Email notifications are triggered for failing tests. When a test starts failing, an email with "Incident started" included in the subject line is sent to each address configured to receive notifications for a project. A new email notification will be sent after 30 minutes if the test is still failing. The follow up email will include "Incident in progress" in the subject line. This notification is sent only if tests run less than every 30 minutes. When test execution passes, an email is sent with "Incident resolved" in the subject line.'}),"\n",(0,s.jsx)(n.p,{children:"To enable email notifications:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["In ",(0,s.jsx)(n.strong,{children:"API Testing"}),", on the ",(0,s.jsx)(n.strong,{children:"Projects"})," page, under a project name, click ",(0,s.jsx)(n.strong,{children:"Settings"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["In the left nav, click ",(0,s.jsx)(n.strong,{children:"Notifications"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["In the email address field, enter an address. To add more email addresses, click ",(0,s.jsx)(n.strong,{children:"+ New Email"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.strong,{children:"Save changes"}),".","\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("img",{src:(0,a.Ay)("img/api-testing/notifications.png"),alt:"Dashboard Pic 1.5"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["Use the Fact component in your API tests to control the behavior of email notifications. It can be beneficial when you're testing in multiple environments. For more information, see ",(0,s.jsx)(n.a,{href:"/api-testing/composer/other-components/#fact",children:"Fact"})," and ",(0,s.jsx)(n.a,{href:"/api-testing/use-cases/fact/",children:"Use Cases"}),"."]})}),"\n",(0,s.jsx)(n.h2,{id:"connectors",children:"Connectors"}),"\n",(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.a,{href:"/api-testing/integrations/pagerduty-webhooks/",children:"PagerDuty and Webhook Connectors"})," for more information."]}),"\n",(0,s.jsx)(n.h2,{id:"delete-a-project",children:"Delete a Project"}),"\n",(0,s.jsx)(n.p,{children:"To delete a project:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["In ",(0,s.jsx)(n.strong,{children:"API Testing"}),", on the ",(0,s.jsx)(n.strong,{children:"Projects"})," page, under a project name, click ",(0,s.jsx)(n.strong,{children:"Settings"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["On the ",(0,s.jsx)(n.strong,{children:"Settings"})," page, in the left nav, click ",(0,s.jsx)(n.strong,{children:"Danger Zone"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.strong,{children:"Delete project"}),"."]}),"\n"]})]})}function j(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var s=t(96540);const i={},a=s.createContext(i);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);