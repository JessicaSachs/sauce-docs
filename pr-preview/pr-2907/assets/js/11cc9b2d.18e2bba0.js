"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[89836],{63788:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=i(74848),t=i(28453),r=i(86025);const o={id:"troubleshooting-sso",title:"Troubleshooting SSO",sidebar_label:"Troubleshooting SSO"},a=void 0,l={id:"basics/sso/troubleshooting-sso",title:"Troubleshooting SSO",description:"Enterprise Plans only",source:"@site/docs/basics/sso/troubleshooting-sso.md",sourceDirName:"basics/sso",slug:"/basics/sso/troubleshooting-sso",permalink:"/sauce-docs/pr-preview/pr-2907/basics/sso/troubleshooting-sso",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/basics/sso/troubleshooting-sso.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:172477197e4,frontMatter:{id:"troubleshooting-sso",title:"Troubleshooting SSO",sidebar_label:"Troubleshooting SSO"},sidebar:"docs",previous:{title:"Logging In via SSO",permalink:"/sauce-docs/pr-preview/pr-2907/basics/sso/logging-in-via-sso"},next:{title:"Getting Started",permalink:"/sauce-docs/pr-preview/pr-2907/basics/sso-deprecated/sso-hub"}},d={},c=[{value:"Common Mistakes in SAML SSO Configuration",id:"common-mistakes-in-saml-sso-configuration",level:2},{value:"Incorrect Configuration in Identity Provider",id:"incorrect-configuration-in-identity-provider",level:3},{value:"Incorrect Name ID Attribute Format or Value",id:"incorrect-name-id-attribute-format-or-value",level:3},{value:"Misconfiguration on the Identity Provider&#39;s Side",id:"misconfiguration-on-the-identity-providers-side",level:3},{value:"Wrong Metadata Uploaded (Error: &quot;Issuer in Response is invalid&quot;)",id:"wrong-metadata-uploaded-error-issuer-in-response-is-invalid",level:3},{value:"Service Provider Initiated SSO Email Error",id:"service-provider-initiated-sso-email-error",level:3},{value:"Using Legacy SSO Endpoints",id:"using-legacy-sso-endpoints",level:3},{value:"How to Debug SAML SSO Authentication?",id:"how-to-debug-saml-sso-authentication",level:2},{value:"Step 1: Install SAML Tracer",id:"step-1-install-saml-tracer",level:3},{value:"Step 2: Capture SAML Messages",id:"step-2-capture-saml-messages",level:3},{value:"Step 3: Analyze SAML Messages",id:"step-3-analyze-saml-messages",level:3}];function h(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("p",{children:(0,n.jsx)("span",{className:"sauceGreen",children:"Enterprise Plans only"})}),"\n",(0,n.jsx)(s.admonition,{type:"caution",children:(0,n.jsxs)(s.p,{children:["If you have previously implemented the ",(0,n.jsx)(s.a,{href:"/basics/sso-deprecated/setting-up-single-sign-on/",children:"deprecated SSO integration"})," and wish to migrate to the new SSO implementation, follow our ",(0,n.jsx)(s.a,{href:"/basics/sso/migration-from-deprecated-sso/",children:"step-by-step migration tutorial"}),"."]})}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(s.p,{children:"When integrating SAML Single Sign-On (SSO) into your system, it's crucial to ensure that all configurations are correctly set up. This guide provides common troubleshooting tips and steps for debugging SAML SSO authentication issues, particularly using browser-based tools like the Chrome SAML debug extension."}),"\n",(0,n.jsx)(s.h2,{id:"common-mistakes-in-saml-sso-configuration",children:"Common Mistakes in SAML SSO Configuration"}),"\n",(0,n.jsx)(s.h3,{id:"incorrect-configuration-in-identity-provider",children:"Incorrect Configuration in Identity Provider"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Double-check that you have entered the ",(0,n.jsx)(s.a,{href:"/basics/sso/setting-up-sso#service-provider-saml-requirements",children:"correct values"})," in the SAML app configuration in your identity provider. For ease and accuracy, consider using the preconfigured Sauce Labs app from your ",(0,n.jsx)(s.a,{href:"/basics/sso/setting-up-sso#setting-up-identity-provider",children:"identity provider app catalog"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(s.h3,{id:"incorrect-name-id-attribute-format-or-value",children:["Incorrect ",(0,n.jsx)(s.a,{href:"/basics/sso/setting-up-sso#name-id",children:"Name ID Attribute"})," Format or Value"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Ensure that the Name ID (also known as SAML_SUBJECT) in your identity provider configuration is set to a valid email address, not a username."}),"\n",(0,n.jsxs)(s.li,{children:["Verify that the Name ID format is correctly set to ",(0,n.jsx)(s.code,{children:"urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress"}),"."]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"misconfiguration-on-the-identity-providers-side",children:"Misconfiguration on the Identity Provider's Side"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:['An "Invalid Status code in Response" error indicates an authentication failure from your identity provider, not Sauce Labs.',"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)("img",{src:(0,r.A)("img/basics/sso/troubleshooting/invalid-status-code-in-response.png"),alt:"Error: Invalid Status code in Response",width:"900"}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["The error details can be found in the SAML Response, under the ",(0,n.jsx)(s.strong,{children:"StatusCode"})," and ",(0,n.jsx)(s.strong,{children:"StatusMessage"})," tags. Use a ",(0,n.jsx)(s.a,{href:"#how-to-debug-saml-sso-authentication",children:"SAML debugger"})," to capture the SAML response. For example, the error below says that you set wrong ",(0,n.jsx)(s.a,{href:"/basics/sso/setting-up-sso#name-id",children:"Name ID format"}),".","\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)("img",{src:(0,r.A)("img/basics/sso/troubleshooting/saml-response-error.png"),alt:"SAML Response Error",width:"700"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"wrong-metadata-uploaded-error-issuer-in-response-is-invalid",children:'Wrong Metadata Uploaded (Error: "Issuer in Response is invalid")'}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["This error indicates a mismatch between the Issuer (Identity Provider identifier) in the SAML request and the metadata uploaded to Sauce Labs.","\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)("img",{src:(0,r.A)("img/basics/sso/troubleshooting/invalid-metadata-issuer-error.png"),alt:"Invalid Metadata Issuer Error",width:"550"}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["Re-download the metadata from your identity provider's Sauce Labs SAML app and re-upload it in the ",(0,n.jsx)(s.a,{href:"/basics/sso/setting-up-sso#integrating-with-sauce-labs-service-provider",children:"Organization Management"})," section."]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"service-provider-initiated-sso-email-error",children:"Service Provider Initiated SSO Email Error"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"If this error occurs, check that:"}),"\n"]}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"The account with the provided email is part of your Sauce Labs organization with SSO enabled."}),"\n",(0,n.jsxs)(s.li,{children:["Your ",(0,n.jsx)(s.a,{href:"/basics/sso/setting-up-sso#email-domains",children:"company email domains"})," are correctly assigned to your Sauce Labs organization."]}),"\n",(0,n.jsxs)(s.li,{children:["SSO is enabled (",(0,n.jsx)(s.a,{href:"/basics/sso/setting-up-sso#integrating-with-sauce-labs-service-provider",children:"step 5 in the integration tutorial"}),").","\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)("img",{src:(0,r.A)("img/basics/sso/troubleshooting/sp-initiated-sso-email-error.png"),alt:"SP-initiated SSO email error",width:"550"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"using-legacy-sso-endpoints",children:"Using Legacy SSO Endpoints"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["This error means that your identity provider's Sauce Labs SAML app is configured with legacy SSO endpoints.","\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)("img",{src:(0,r.A)("img/basics/sso/troubleshooting/legacy-sso-error.png"),alt:"Legacy SSO Error",width:"550"}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["Follow the ",(0,n.jsx)(s.a,{href:"/basics/sso/migration-from-deprecated-sso/#migration-tutorial",children:"migration tutorial"})," to ensure you use the ",(0,n.jsx)(s.a,{href:"/basics/sso/setting-up-sso#service-provider-saml-requirements",children:"correct endpoints and configuration values"}),"."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"how-to-debug-saml-sso-authentication",children:"How to Debug SAML SSO Authentication?"}),"\n",(0,n.jsx)(s.p,{children:"To effectively debug SAML SSO authentication issues, using browser extensions such as the SAML Tracer can be highly beneficial. Here's a step-by-step guide on how to use it."}),"\n",(0,n.jsx)(s.h3,{id:"step-1-install-saml-tracer",children:"Step 1: Install SAML Tracer"}),"\n",(0,n.jsx)(s.p,{children:"First, you need to install the SAML Tracer extension in your Google Chrome browser."}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["Navigate to the ",(0,n.jsx)(s.a,{href:"https://chromewebstore.google.com/detail/saml-tracer/mpdajninpobndbfcldcmbpnnbhibjmch?pli=1",children:"SAML Tracer page"})," on the Chrome Web Store."]}),"\n",(0,n.jsxs)(s.li,{children:["Click ",(0,n.jsx)(s.code,{children:"Add to Chrome"})," to install the extension."]}),"\n",(0,n.jsx)(s.li,{children:"Once installed, the SAML Tracer icon will appear in your browser\u2019s extension toolbar."}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"step-2-capture-saml-messages",children:"Step 2: Capture SAML Messages"}),"\n",(0,n.jsx)(s.p,{children:"Begin the SSO login process as usual in your web application."}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"Ensure that the SAML Tracer window is open before you start the SSO process."}),"\n",(0,n.jsx)(s.li,{children:"With SAML Tracer running, proceed with the SSO authentication."}),"\n",(0,n.jsx)(s.li,{children:"As you authenticate, SAML Tracer will capture the HTTP traffic."}),"\n",(0,n.jsxs)(s.li,{children:["Look for HTTP requests marked with a ",(0,n.jsx)(s.code,{children:"SAML"})," label, indicating SAML-related traffic."]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"step-3-analyze-saml-messages",children:"Step 3: Analyze SAML Messages"}),"\n",(0,n.jsx)(s.p,{children:"Analyze the captured SAML messages for troubleshooting:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"In the SAML Tracer window, click on a SAML-labeled HTTP request."}),"\n",(0,n.jsxs)(s.li,{children:["Switch to the ",(0,n.jsx)(s.code,{children:"SAML"})," tab in the details pane to view the SAML message."]}),"\n",(0,n.jsxs)(s.li,{children:["Review the details in the ",(0,n.jsx)(s.code,{children:"Summary"})," tab, including issuer, audience, session index, and any attributes or conditions."]}),"\n"]})]})}function u(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,s,i)=>{i.d(s,{R:()=>o,x:()=>a});var n=i(96540);const t={},r=n.createContext(t);function o(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);