"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[80763],{55071:(s,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var e=i(74848),r=i(28453),t=i(86025);const c={id:"configuring-sso-in-ms-azure-ad",title:"Configuring SSO in Microsoft Azure Active Directory",sidebar_label:"Configuring MS Azure AD"},a=void 0,o={id:"basics/sso/configuring-sso-in-ms-azure-ad",title:"Configuring SSO in Microsoft Azure Active Directory",description:"Enterprise Plans only",source:"@site/docs/basics/sso/configuring-sso-in-ms-azure-ad.md",sourceDirName:"basics/sso",slug:"/basics/sso/configuring-sso-in-ms-azure-ad",permalink:"/sauce-docs/pr-preview/pr-2915/basics/sso/configuring-sso-in-ms-azure-ad",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/basics/sso/configuring-sso-in-ms-azure-ad.md",tags:[],version:"current",lastUpdatedBy:"Tian Feng",lastUpdatedAt:1724880664e3,frontMatter:{id:"configuring-sso-in-ms-azure-ad",title:"Configuring SSO in Microsoft Azure Active Directory",sidebar_label:"Configuring MS Azure AD"},sidebar:"docs",previous:{title:"Configuring Google",permalink:"/sauce-docs/pr-preview/pr-2915/basics/sso/configuring-sso-in-google"},next:{title:"Configuring Okta",permalink:"/sauce-docs/pr-preview/pr-2915/basics/sso/configuring-sso-in-okta"}},l={},d=[];function g(s){const n={a:"a",code:"code",li:"li",ol:"ol",p:"p",strong:"strong",...(0,r.R)(),...s.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("p",{children:(0,e.jsx)("span",{className:"sauceGreen",children:"Enterprise Plans only"})}),"\n",(0,e.jsxs)(n.ol,{children:["\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsxs)(n.p,{children:["Log into ",(0,e.jsx)(n.strong,{children:"Azure"})," administrator panel and go to ",(0,e.jsx)(n.strong,{children:"Active Directory"}),"."]}),"\n"]}),"\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsxs)(n.p,{children:["In the menu click ",(0,e.jsx)(n.strong,{children:"Enterprise Applications"}),"."]}),"\n",(0,e.jsx)("img",{src:(0,t.Ay)("img/basics/sso/idp-config/azure/apps.png"),alt:"Menu Applications",width:"250"}),"\n"]}),"\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsxs)(n.p,{children:["Click ",(0,e.jsx)(n.strong,{children:"New Application"}),"."]}),"\n",(0,e.jsx)("img",{src:(0,t.Ay)("img/basics/sso/idp-config/azure/add-app.png"),alt:"Add App",width:"500"}),"\n"]}),"\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsxs)(n.p,{children:["Type ",(0,e.jsx)(n.strong,{children:"Sauce Labs"})," in the search box and choose the app ",(0,e.jsx)(n.strong,{children:"Sauce Labs"}),"."]}),"\n",(0,e.jsx)("img",{src:(0,t.Ay)("img/basics/sso/idp-config/azure/search-app.png"),alt:"Search App",width:"300"}),"\n"]}),"\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsxs)(n.p,{children:["Leave the default name or rename it and click ",(0,e.jsx)(n.strong,{children:"Create"}),"."]}),"\n",(0,e.jsx)("img",{src:(0,t.Ay)("img/basics/sso/idp-config/azure/create-app.png"),alt:"Create App",width:"500"}),"\n"]}),"\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsxs)(n.p,{children:["Set up SAML Single Sign-On either by clicking ",(0,e.jsx)(n.strong,{children:"Single sign-on"})," in the menu on the left or by clicking the tile ",(0,e.jsx)(n.strong,{children:"Set up single sign on"}),"."]}),"\n",(0,e.jsx)("img",{src:(0,t.Ay)("img/basics/sso/idp-config/azure/setup-saml-sso.png"),alt:"Set up SAML SSO",width:"800"}),"\n"]}),"\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsxs)(n.p,{children:["Click the ",(0,e.jsx)(n.strong,{children:"SAML"})," tile."]}),"\n",(0,e.jsx)("img",{src:(0,t.Ay)("img/basics/sso/idp-config/azure/setup-saml-sso-2.png"),alt:"Set up SAML SSO",width:"800"}),"\n"]}),"\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsxs)(n.p,{children:["Save the default configuration by clicking ",(0,e.jsx)(n.strong,{children:"Yes"}),"."]}),"\n",(0,e.jsx)("img",{src:(0,t.Ay)("img/basics/sso/idp-config/azure/save-default-config.png"),alt:"Save default SP configuration",width:"700"}),"\n"]}),"\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsxs)(n.p,{children:["In the ",(0,e.jsx)(n.strong,{children:"Attributes & Claims"})," section click ",(0,e.jsx)(n.strong,{children:"Edit"}),"."]}),"\n",(0,e.jsx)("img",{src:(0,t.Ay)("img/basics/sso/idp-config/azure/edit-claims.png"),alt:"Edit claims",width:"700"}),"\n"]}),"\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsx)(n.p,{children:"Edit the value of NameID by clicking on it."}),"\n",(0,e.jsx)("img",{src:(0,t.Ay)("img/basics/sso/idp-config/azure/edit-name-id.png"),alt:"Edit NameID",width:"700"}),"\n"]}),"\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsxs)(n.p,{children:["Make sure that the source value of this claim is a ",(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.a,{href:"/basics/sso/setting-up-sso/#name-id",children:"valid email address"})})," (for example ",(0,e.jsx)(n.code,{children:"user.mail"}),") and not a user identifier. Sauce Labs Service Provider requires valid email addresses during SAML SSO authentication. If you changed the source attribute, save the changes."]}),"\n",(0,e.jsx)("img",{src:(0,t.Ay)("img/basics/sso/idp-config/azure/name-id-value.png"),alt:"Source attribute of NameID",width:"700"}),"\n"]}),"\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsx)(n.p,{children:"Next, assign users to this application:"}),"\n",(0,e.jsxs)(n.ol,{children:["\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsxs)(n.p,{children:["Go to ",(0,e.jsx)(n.strong,{children:"User and groups"})," in the main menu of the application."]}),"\n",(0,e.jsx)("img",{src:(0,t.Ay)("img/basics/sso/idp-config/azure/menu-users-and-groups.png"),alt:"Menu: Users and groups",width:"250"}),"\n"]}),"\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsxs)(n.p,{children:["Click ",(0,e.jsx)(n.strong,{children:"Add user/group"}),"."]}),"\n",(0,e.jsx)("img",{src:(0,t.Ay)("img/basics/sso/idp-config/azure/add-user-group.png"),alt:"Add user/group",width:"700"}),"\n"]}),"\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsx)(n.p,{children:"Choose which groups and users should have access to Sauce Labs via this SAML application."}),"\n",(0,e.jsx)("img",{src:(0,t.Ay)("img/basics/sso/idp-config/azure/assign-user.png"),alt:"Assign user/group",width:"800"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsxs)(n.p,{children:["Go back to the ",(0,e.jsx)(n.strong,{children:"Single sign-on"})," tab."]}),"\n",(0,e.jsx)("img",{src:(0,t.Ay)("img/basics/sso/idp-config/azure/menu-single-sign-on.png"),alt:"Menu: Single sign-on",width:"250"}),"\n"]}),"\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsxs)(n.p,{children:["In the ",(0,e.jsx)(n.strong,{children:"SAML Certificates"})," section for ",(0,e.jsx)(n.strong,{children:"Federation Metadata XML"}),", click ",(0,e.jsx)(n.strong,{children:"Download"}),"."]}),"\n",(0,e.jsx)("img",{src:(0,t.Ay)("img/basics/sso/idp-config/azure/download-metadata.png"),alt:"Download Metadata",width:"700"}),"\n"]}),"\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsxs)(n.p,{children:["Use the metadata file from the previous step and set up the SSO integration at Sauce Labs in ",(0,e.jsx)(n.a,{href:"/basics/sso/setting-up-sso#integrating-with-sauce-labs-service-provider",children:"Organization Management Panel"}),"."]}),"\n"]}),"\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsxs)(n.p,{children:["Test the integration using the ",(0,e.jsx)(n.a,{href:"/basics/sso/logging-in-via-sso",children:"IdP-initiated and the SP-initiated login"}),"."]}),"\n",(0,e.jsxs)(n.ol,{children:["\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsxs)(n.p,{children:["The IdP-initiated flow can be tested from the ",(0,e.jsx)(n.strong,{children:"Single sign-on"})," tab."]}),"\n",(0,e.jsx)("img",{src:(0,t.Ay)("img/basics/sso/idp-config/azure/menu-single-sign-on.png"),alt:"Menu: Single sign-on",width:"250"}),"\n"]}),"\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsxs)(n.p,{children:["Next, in the last section ",(0,e.jsx)(n.strong,{children:"Test single sign-on with Sauce Labs"})," click ",(0,e.jsx)(n.strong,{children:"Test"}),"."]}),"\n",(0,e.jsx)("img",{src:(0,t.Ay)("img/basics/sso/idp-config/azure/test-integration.png"),alt:"Test integration",width:"650"}),"\n"]}),"\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsxs)(n.p,{children:["Click ",(0,e.jsx)(n.strong,{children:"Test sign in"}),"."]}),"\n",(0,e.jsx)("img",{src:(0,t.Ay)("img/basics/sso/idp-config/azure/test-sign-in.png"),alt:"Test integration",width:"750"}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function h(s={}){const{wrapper:n}={...(0,r.R)(),...s.components};return n?(0,e.jsx)(n,{...s,children:(0,e.jsx)(g,{...s})}):g(s)}},28453:(s,n,i)=>{i.d(n,{R:()=>c,x:()=>a});var e=i(96540);const r={},t=e.createContext(r);function c(s){const n=e.useContext(t);return e.useMemo((function(){return"function"==typeof s?s(n):{...n,...s}}),[n,s])}function a(s){let n;return n=s.disableParentContext?"function"==typeof s.components?s.components(r):s.components||r:c(s.components),e.createElement(t.Provider,{value:n},s.children)}}}]);