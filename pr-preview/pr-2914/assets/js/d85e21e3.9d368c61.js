"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[17554],{7774:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var t=s(74848),i=s(28453);const r={id:"config-adfs",title:"Configuring Active Directory Federation Services (AD FS)",sidebar_label:"Configuring Active Directory Federation Services (AD FS)"},o=void 0,c={id:"basics/sso-deprecated/config-adfs",title:"Configuring Active Directory Federation Services (AD FS)",description:"Deprecated",source:"@site/docs/basics/sso-deprecated/config-adfs.md",sourceDirName:"basics/sso-deprecated",slug:"/basics/sso-deprecated/config-adfs",permalink:"/sauce-docs/pr-preview/pr-2914/basics/sso-deprecated/config-adfs",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/basics/sso-deprecated/config-adfs.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:172488024e4,frontMatter:{id:"config-adfs",title:"Configuring Active Directory Federation Services (AD FS)",sidebar_label:"Configuring Active Directory Federation Services (AD FS)"},sidebar:"docs",previous:{title:"Migration From The Deprecated SSO",permalink:"/sauce-docs/pr-preview/pr-2914/basics/sso/migration-from-deprecated-sso"},next:{title:"Configuring Okta",permalink:"/sauce-docs/pr-preview/pr-2914/basics/sso-deprecated/config-okta"}},a={},l=[{value:"Before You Begin",id:"before-you-begin",level:2},{value:"Configuration",id:"configuration",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("p",{children:(0,t.jsx)("span",{className:"sauceGold",children:"Deprecated"})}),"\n",(0,t.jsxs)(n.admonition,{type:"caution",children:[(0,t.jsxs)(n.p,{children:["This SSO flow has been ",(0,t.jsx)(n.code,{children:"deprecated"}),". Use this documentation only if your organization was not migrated to the new SSO."]}),(0,t.jsxs)(n.p,{children:["If you do not have any SSO integrations set up at Sauce Labs and you wish to establish a new integration, see ",(0,t.jsx)(n.a,{href:"/basics/sso/setting-up-sso",children:"Setting Up SSO"})," to get started."]}),(0,t.jsxs)(n.p,{children:["If you have previously implemented the deprecated SSO integration and wish to migrate to the new SSO implementation, see the ",(0,t.jsx)(n.a,{href:"/basics/sso/migration-from-deprecated-sso/",children:"step-by-step migration guide"}),"."]})]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.p,{children:"These instructions are for setting up Microsoft's Active Directory Federated Service (AD FS) as an Identity Provider for Sauce Labs SSO using Windows Server 2012 R2 and ADFS 3.0. ADFS 3.0 is also supported on Windows Server 2008R2, but may require additional configuration for that operating system."}),"\n",(0,t.jsx)(n.h2,{id:"before-you-begin",children:"Before You Begin"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Make sure that your Active Directory Domain Service is set up"}),"\n",(0,t.jsx)(n.li,{children:"Make sure that the Active Directory Federation Services Role is set up"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Microsoft has an extensive library of how-to and step-by-step guides for AD FS in their ",(0,t.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/windows-server/identity/active-directory-federation-services",children:"documentation library"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Log in to the Server Manager app for your Windows Server 2012 R2 instance as an administrator and go to the ",(0,t.jsx)(n.strong,{children:"Dashboard"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["In the ",(0,t.jsx)(n.strong,{children:"Tools"})," menu, select ",(0,t.jsx)(n.strong,{children:"AD FS Management"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["In the ",(0,t.jsx)(n.strong,{children:"Actions"})," menu, under ",(0,t.jsx)(n.strong,{children:"AD FS"}),", select ",(0,t.jsx)(n.strong,{children:"Add Relying Party Trust"}),".\nThis will launch the ",(0,t.jsx)(n.strong,{children:"Add Relying Party Trust Wizard"}),".",(0,t.jsx)("br",{})]}),"\n",(0,t.jsxs)(n.li,{children:["In the ",(0,t.jsx)(n.strong,{children:"Select Data Source"})," screen, select ",(0,t.jsx)(n.strong,{children:"Enter Data about the Relying Party Manually"}),", and then click ",(0,t.jsx)(n.strong,{children:"Next"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["On the ",(0,t.jsx)(n.strong,{children:"Specify Display Name"})," screen, enter ",(0,t.jsx)(n.strong,{children:"Sauce Labs"}),", and then click ",(0,t.jsx)(n.strong,{children:"Next"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["On the ",(0,t.jsx)(n.strong,{children:"Choose Profile"})," screen, select ",(0,t.jsx)(n.strong,{children:"AD FS profile"}),", and then click ",(0,t.jsx)(n.strong,{children:"Next"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["On the ",(0,t.jsx)(n.strong,{children:"Configure Certificate"})," screen, click ",(0,t.jsx)(n.strong,{children:"Next"}),", as this is an optional step."]}),"\n",(0,t.jsxs)(n.li,{children:["On the ",(0,t.jsx)(n.strong,{children:"Configure URL"})," screen, select ",(0,t.jsx)(n.strong,{children:"Enable Support"})," for the SAML 2.0 WebSSO Protocol."]}),"\n",(0,t.jsxs)(n.li,{children:["On the ",(0,t.jsx)(n.strong,{children:"Configure URL"})," screen, in the ",(0,t.jsx)(n.strong,{children:"Relying Party SAML 2.0 SSO Service URL"})," field, enter ",(0,t.jsxs)(n.strong,{children:["https",(0,t.jsx)("span",{}),"://saucelabs",(0,t.jsx)("span",{}),".com/sso/acs"]}),", and then click ",(0,t.jsx)(n.strong,{children:"Next"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["On the ",(0,t.jsx)(n.strong,{children:"Configure Identifiers"})," screen, select ",(0,t.jsxs)(n.strong,{children:[(0,t.jsx)(n.a,{href:"http://www",children:"www"}),".",(0,t.jsx)("span",{}),"saucelabs.com"]}),", click ",(0,t.jsx)(n.strong,{children:"Add"}),", and then click ",(0,t.jsx)(n.strong,{children:"Next"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["On the ",(0,t.jsx)(n.strong,{children:"Configure Multi-factor Authentication Now?"})," screen, select ",(0,t.jsx)(n.strong,{children:"I do not want to configure multi-factor authentication settings for this relying trust part at this time"}),", and then click ",(0,t.jsx)(n.strong,{children:"Next"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["On the ",(0,t.jsx)(n.strong,{children:"Choose Issuance Authorization Rules"})," screen, select ",(0,t.jsx)(n.strong,{children:"Permit all users to access this relying party"}),", and then click ",(0,t.jsx)(n.strong,{children:"Next"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["On the ",(0,t.jsx)(n.strong,{children:"Ready to Add Trust"})," screen, click ",(0,t.jsx)(n.strong,{children:"Next"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["On the ",(0,t.jsx)(n.strong,{children:"Finish"})," screen, make sure the option ",(0,t.jsx)(n.strong,{children:"Open Edit Claims"})," dialog for this relying party trust when the wizard closes is selected, and then click ",(0,t.jsx)(n.strong,{children:"Close"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["In the ",(0,t.jsx)(n.strong,{children:"Edit Claims"})," dialog, make sure the ",(0,t.jsx)(n.strong,{children:"Issuance Transform Rules"})," tab is selected, and then click ",(0,t.jsx)(n.strong,{children:"Add Rule"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["In the ",(0,t.jsx)(n.strong,{children:"Choose Rule Type"})," screen of the ",(0,t.jsx)(n.strong,{children:"Add Transform Claim Rule"})," wizard, select ",(0,t.jsx)(n.strong,{children:"Send LDAP Attributes as Claims"}),", and then click ",(0,t.jsx)(n.strong,{children:"Next"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["In the ",(0,t.jsx)(n.strong,{children:"Configure Claim Rule"})," screen, in the ",(0,t.jsx)(n.strong,{children:"Claim Rule Name"})," field, enter ",(0,t.jsx)(n.strong,{children:"Email"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["In the ",(0,t.jsx)(n.strong,{children:"Configure Claim Rule"})," screen, under ",(0,t.jsx)(n.strong,{children:"Attribute Score"}),", select ",(0,t.jsx)(n.strong,{children:"E-mail Addresses"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["In the ",(0,t.jsx)(n.strong,{children:"Configure Claim Rule"})," screen, under ",(0,t.jsx)(n.strong,{children:"Mapping of LDAP attributes to outgoing claim types"}),", select ",(0,t.jsx)(n.strong,{children:"Email addresses"})," for ",(0,t.jsx)(n.strong,{children:"LDAP Attribute"}),", and ",(0,t.jsx)(n.strong,{children:"Name ID"})," for ",(0,t.jsx)(n.strong,{children:"Outgoing Claim Type"}),", and then click ",(0,t.jsx)(n.strong,{children:"Finish"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["You can now check to make sure that Sauce Labs has been added as a Relying Party Trust by going to the AD FS directory on you server, and then navigating to ",(0,t.jsx)(n.strong,{children:"Trust Relationships > Relying Party Trusts"}),", where you should see a listing for Sauce Labs. You can then finish configuring Sauce Labs SSO by following the instructions in ",(0,t.jsx)(n.a,{href:"/basics/acct-team-mgmt/org-settings/#single-sign-on-settings-deprecated-flow",children:"Single Sign-On Settings (Deprecated Flow)"}),". If you need more assistance setting up SSO, contact ",(0,t.jsx)(n.a,{href:"mailto:help@saucelabs.com",children:"help@saucelabs.com"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>c});var t=s(96540);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);