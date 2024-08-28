"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[12979],{54905:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var n=s(74848),t=s(28453),a=s(86025);const r={id:"setting-up-sso",title:"Setting Up SSO",sidebar_label:"Setting Up SSO"},o=void 0,c={id:"basics/sso/setting-up-sso",title:"Setting Up SSO",description:"Enterprise Plans only",source:"@site/docs/basics/sso/setting-up-sso.md",sourceDirName:"basics/sso",slug:"/basics/sso/setting-up-sso",permalink:"/sauce-docs/pr-preview/pr-2915/basics/sso/setting-up-sso",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/basics/sso/setting-up-sso.md",tags:[],version:"current",lastUpdatedBy:"Tian Feng",lastUpdatedAt:1724880664e3,frontMatter:{id:"setting-up-sso",title:"Setting Up SSO",sidebar_label:"Setting Up SSO"},sidebar:"docs",previous:{title:"Managing Private Devices",permalink:"/sauce-docs/pr-preview/pr-2915/basics/acct-team-mgmt/private-device-mgmt"},next:{title:"Setting Up SSO - Special Cases",permalink:"/sauce-docs/pr-preview/pr-2915/basics/sso/setting-up-sso-special-cases"}},l={},d=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Special Cases",id:"special-cases",level:2},{value:"Setup Overview",id:"setup-overview",level:2},{value:"Setting Up Identity Provider",id:"setting-up-identity-provider",level:2},{value:"Service Provider SAML Requirements",id:"service-provider-saml-requirements",level:3},{value:"Signature",id:"signature",level:3},{value:"Encryption",id:"encryption",level:3},{value:"Possible Issues",id:"possible-issues",level:4},{value:"Name ID",id:"name-id",level:3},{value:"SAML Claims",id:"saml-claims",level:3},{value:"Identity Provider (Signing) Certificate Rotation",id:"identity-provider-signing-certificate-rotation",level:3},{value:"Sauce Labs (Encryption) Certificate Rotation",id:"sauce-labs-encryption-certificate-rotation",level:3},{value:"Integrating With Sauce Labs Service Provider",id:"integrating-with-sauce-labs-service-provider",level:2},{value:"Email domains",id:"email-domains",level:3},{value:"Enforce SAML SSO - Big Bang configuration",id:"enforce-saml-sso---big-bang-configuration",level:3},{value:"Just-In-Time (JIT) Provisioning",id:"just-in-time-jit-provisioning",level:3},{value:"Team placement",id:"team-placement",level:4},{value:"Usernames",id:"usernames",level:4},{value:"Email Verification in SSO Login",id:"email-verification-in-sso-login",level:3},{value:"Unsupported features",id:"unsupported-features",level:2}];function h(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("p",{children:(0,n.jsx)("span",{className:"sauceGreen",children:"Enterprise Plans only"})}),"\n",(0,n.jsx)(i.admonition,{type:"caution",children:(0,n.jsxs)(i.p,{children:["If you have previously implemented the ",(0,n.jsx)(i.a,{href:"/basics/sso-deprecated/setting-up-single-sign-on/",children:"deprecated SSO integration"})," and wish to migrate to the new SSO implementation, follow our ",(0,n.jsx)(i.a,{href:"/basics/sso/migration-from-deprecated-sso/",children:"step-by-step migration tutorial"}),"."]})}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(i.p,{children:"Sauce Labs supports Identity Provider (IdP)-initiated and Service Provider (SP)-initiated Single Sign-On (SSO) via SAML 2.0 protocol. This feature allows your authorized employees to access Sauce Labs in a moderated fashion, as an alternative to using credentials. SAML SSO is available to invoiced accounts, and can only be implemented by the organization admin of the account. If you are an invoice customer, the following sections will guide you on how to set up SAML SSO."}),"\n",(0,n.jsx)(i.p,{children:"Sauce Labs supports the following features:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"/basics/sso/logging-in-via-sso/#service-provider-sp-initiated-sso",children:"SP-initiated SSO"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"/basics/sso/logging-in-via-sso/#identity-provider-idp-initiated-sso",children:"IdP-initiated SSO"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"#just-in-time-jit-provisioning",children:"JIT (Just-In-Time) Provisioning"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"#enforce-saml-sso---big-bang-configuration",children:"Force authentication"}),"."]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"An enterprise license for Sauce Labs."}),"\n",(0,n.jsxs)(i.li,{children:["Organization admin access (see ",(0,n.jsx)(i.a,{href:"/basics/acct-team-mgmt/managing-user-info",children:"User Roles"})," for more information)."]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"special-cases",children:"Special Cases"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["If your company has more than one organization at Sauce Labs to be integrated with SAML SSO and your Identity Provider requires a unique entity ID for Service Providers, ",(0,n.jsx)(i.a,{href:"/basics/sso/setting-up-sso-special-cases#single-identity-provider-and-multiple-organizations-at-sauce-labs",children:"see these special setup steps"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:["If your company has multiple organizations at Sauce Labs to be integrated with SAML SSO, and you want to use the same ",(0,n.jsx)(i.a,{href:"#email-domains",children:"email domain"})," across multiple organizations, please refer to ",(0,n.jsx)(i.a,{href:"/basics/sso/setting-up-sso-special-cases#the-same-email-domain-is-used-in-multiple-organizations-at-sauce-labs",children:"this section"}),"."]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"setup-overview",children:"Setup Overview"}),"\n",(0,n.jsxs)(i.p,{children:["First, set up a new SAML application in your ",(0,n.jsx)(i.a,{href:"#setting-up-identity-provider",children:"Identity Provider (IdP)"}),". Next, enable and configure SSO in ",(0,n.jsx)(i.a,{href:"#integrating-with-sauce-labs-service-provider",children:"Sauce Labs Organization Management Panel"}),"."]}),"\n",(0,n.jsx)(i.admonition,{type:"note",children:(0,n.jsxs)(i.p,{children:["SSO at Sauce Labs is global. In other words, it does not matter in which region you set it up. Unlike to the ",(0,n.jsx)(i.a,{href:"/basics/sso-deprecated/setting-up-single-sign-on",children:"former SSO implementation"}),", which has been deprecated."]})}),"\n",(0,n.jsx)(i.h2,{id:"setting-up-identity-provider",children:"Setting Up Identity Provider"}),"\n",(0,n.jsxs)(i.admonition,{type:"tip",children:[(0,n.jsx)(i.p,{children:"We provide preconfigured SAML applications for some identity providers. They allow you to set up SSO integration with a few clicks. Choose your provider and follow the configuration steps:"}),(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/basics/sso/configuring-sso-in-auth0",children:"Auth0"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/basics/sso/configuring-sso-in-google",children:"Google"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/basics/sso/configuring-sso-in-ms-azure-ad",children:"Microsoft Azure Active Directory"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/basics/sso/configuring-sso-in-okta",children:"Okta"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/basics/sso/configuring-sso-in-onelogin",children:"OneLogin"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/basics/sso/configuring-sso-in-pingone",children:"PingOne"})}),"\n"]}),(0,n.jsx)(i.p,{children:"We support also a manual setup for any other identity provider which implements SAML 2.0, for example:"}),(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Microsoft Active Directory Federation Services (MS ADFS)"}),"\n",(0,n.jsx)(i.li,{children:"Google Workspace (formerly G Suite)"}),"\n",(0,n.jsx)(i.li,{children:"Oracle Identity Cloud Service"}),"\n",(0,n.jsx)(i.li,{children:"ForgeRock"}),"\n",(0,n.jsx)(i.li,{children:"Salesforce"}),"\n",(0,n.jsx)(i.li,{children:"JumpCloud"}),"\n",(0,n.jsx)(i.li,{children:"CyberArk"}),"\n",(0,n.jsx)(i.li,{children:"KeyCloak"}),"\n"]})]}),"\n",(0,n.jsx)(i.p,{children:"If you use a custom identity provider or if we do not provide a preconfigured Sauce Labs SAML application for your identity provider, please complete the manual setup:"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:["Obtain SAML metadata from Sauce Labs Service Provider, which is served under ",(0,n.jsx)(i.a,{href:"https://accounts.saucelabs.com/am/sso/metadata/https%3A%2F%2Faccounts.saucelabs.com%2Fsp",children:"this link"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:["Log in to your identity provider administrator panel.","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["For example in Okta, you log into your account and click the ",(0,n.jsx)(i.strong,{children:"Admin"})," button.","\n",(0,n.jsx)("img",{src:(0,a.Ay)("img/basics/sso/setup-sso-idp-admin-login.png"),alt:"IdP Admin Login",width:"900"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["Create a new SAML application.","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:'In the IdP, go to the "Applications" or "Integrations" section and create a new SAML application.'}),"\n",(0,n.jsxs)(i.li,{children:["Follow the instructions from your IdP to provide the Sauce Labs SAML metadata obtained in Step 1. If your IdP does not allow uploading service provider metadata, set up the integration manually using ",(0,n.jsx)(i.a,{href:"#service-provider-saml-requirements",children:"Service Provider SAML Requirements"}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["Export SAML metadata of your new SAML application.","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["It will be used to set up the SSO at Sauce Labs in ",(0,n.jsx)(i.a,{href:"#integrating-with-sauce-labs-service-provider",children:"Organization Management Panel"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"service-provider-saml-requirements",children:"Service Provider SAML Requirements"}),"\n",(0,n.jsx)(i.p,{children:"Here is the list of settings that are required by Sauce Labs Service Provider:"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Setting"}),(0,n.jsx)(i.th,{children:"Value"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Entity ID"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"https://accounts.saucelabs.com/sp"})})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Audience (Recipient)"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"https://accounts.saucelabs.com/sp"})})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Assertion Consumer Service (ACS URL, Reply URL)"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"https://accounts.saucelabs.com/am/AuthConsumer/metaAlias/authtree/sp"})})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Recipient URL"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"https://accounts.saucelabs.com/am/AuthConsumer/metaAlias/authtree/sp"})})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Destination URL"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"https://accounts.saucelabs.com/am/AuthConsumer/metaAlias/authtree/sp"})})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Name ID (Unique User Identifier)"}),(0,n.jsxs)(i.td,{children:[(0,n.jsx)(i.code,{children:"email"}),"/",(0,n.jsx)(i.code,{children:"mail"})]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Name ID format/policy"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress"})})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Binding"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST"})})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Login/Application/Sign on URL"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"https://accounts.saucelabs.com/am/XUI/#sso-login/"})})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"SAML claims"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"/basics/sso/setting-up-sso/#saml-claims",children:"List of supported optional claims"})})]})]})]}),"\n",(0,n.jsx)(i.h3,{id:"signature",children:"Signature"}),"\n",(0,n.jsxs)(i.p,{children:["Either the SAML Assertion or SAML Response ",(0,n.jsx)(i.strong,{children:"must be signed"}),"."]}),"\n",(0,n.jsxs)(i.p,{children:["A digital signature is required to ensure that only your IdP generated the assertion.\nThe IdP signs SAML requests or assertions with the private key, and Sauce Labs Service Provider verifies the signature using the public key from the IdP metadata uploaded in ",(0,n.jsx)(i.a,{href:"/basics/sso/setting-up-sso/#integrating-with-sauce-labs-service-provider",children:"SSO settings in the Organization Management UI"}),"."]}),"\n",(0,n.jsxs)(i.p,{children:["If you rotate the signing certificate in your Identity Provider, you have to ",(0,n.jsx)(i.a,{href:"#identity-provider-signing-certificate-rotation",children:"reupload the IdP metadata"})," in the Sauce Labs Organization Management UI."]}),"\n",(0,n.jsx)(i.h3,{id:"encryption",children:"Encryption"}),"\n",(0,n.jsxs)(i.p,{children:["Encryption of the SAML Assertion ",(0,n.jsx)(i.strong,{children:"is not mandatory"}),"."]}),"\n",(0,n.jsxs)(i.p,{children:["You can enable encryption if you want an additional layer of security. You will need to use the certificate (with alias ",(0,n.jsx)(i.em,{children:"encryption"}),") from ",(0,n.jsx)(i.a,{href:"https://accounts.saucelabs.com/am/sso/metadata/https%3A%2F%2Faccounts.saucelabs.com%2Fsp",children:"the Sauce Labs metadata"}),"."]}),"\n",(0,n.jsxs)(i.p,{children:["In the encryption process, the Identity Provider encrypts the SAML Assertion using the public key from ",(0,n.jsx)(i.a,{href:"https://accounts.saucelabs.com/am/sso/metadata/https%3A%2F%2Faccounts.saucelabs.com%2Fsp",children:"the Sauce Labs metadata"}),", and Sauce Labs Service Provider decrypts it using the private key. When Sauce Labs updates its encryption certificate, customers are required to ",(0,n.jsx)(i.a,{href:"#sauce-labs-encryption-certificate-rotation",children:"update their configurations with the new certificate (public key)"}),"."]}),"\n",(0,n.jsxs)(i.admonition,{type:"tip",children:[(0,n.jsx)(i.h4,{id:"possible-issues",children:"Possible Issues"}),(0,n.jsxs)(i.p,{children:["If you start to see errors after enabling encryption, make sure that you use the encryption certificate that is provided in Sauce Labs metadata (in the tag ",(0,n.jsx)(i.code,{children:'<KeyDescriptor use="encryption">'}),") and the encryption algorithm matches the algorithm provided in Sauce Labs metadata (value of the attribute ",(0,n.jsx)(i.code,{children:"Algorithm"})," in the tag ",(0,n.jsx)(i.code,{children:"EncryptionMethod"}),")."]})]}),"\n",(0,n.jsx)(i.h3,{id:"name-id",children:"Name ID"}),"\n",(0,n.jsxs)(i.p,{children:["Name ID format must be set to ",(0,n.jsx)(i.code,{children:"urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress"}),"."]}),"\n",(0,n.jsxs)(i.p,{children:["The value of the attribute NameID in SAML Response must be ",(0,n.jsx)(i.strong,{children:"a valid email address"}),". We do not accept values which are not email addresses, for instance usernames, IDs, etc."]}),"\n",(0,n.jsxs)(i.p,{children:["If your Identity Provider does not provide the email address in the NameID attribute, please refer to the instructions provided in the ",(0,n.jsx)(i.a,{href:"/basics/sso/setting-up-sso-special-cases#nameid-is-not-a-real-email-address-but-a-user-identifier",children:"Special Cases"})," section."]}),"\n",(0,n.jsx)(i.h3,{id:"saml-claims",children:"SAML Claims"}),"\n",(0,n.jsx)(i.p,{children:"Sauce Labs Service Provider supports the following SAML custom claims:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"first_name"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"last_name"})}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"contact_email"})," (Click ",(0,n.jsx)(i.a,{href:"/basics/sso/setting-up-sso-special-cases#nameid-is-not-a-real-email-address-but-a-user-identifier",children:"here"})," to see the use case)"]}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["These attributes are ",(0,n.jsx)(i.strong,{children:"optional"}),"."]}),"\n",(0,n.jsx)(i.p,{children:"Incorporating these attributes can improve user identification and personalization within the Sauce Labs platform."}),"\n",(0,n.jsx)(i.h3,{id:"identity-provider-signing-certificate-rotation",children:"Identity Provider (Signing) Certificate Rotation"}),"\n",(0,n.jsx)(i.p,{children:"SAML certificates have a predetermined expiration date. It is possible that your identity provider will notify you in advance or provide an alert regarding the certificate's expiry."}),"\n",(0,n.jsxs)(i.p,{children:["If the ",(0,n.jsx)(i.a,{href:"#signature",children:"signing certificate"})," for the Sauce Labs app from your identity provider is nearing expiration or has already expired, follow these steps:"]}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsx)(i.li,{children:"Generate a new certificate for the Sauce Labs app within your identity provider. This new certificate will replace the expired one and will be reflected in the identity provider metadata."}),"\n",(0,n.jsxs)(i.li,{children:["Export or copy the updated metadata file from your identity provider, then upload it to Sauce Labs. For information on how to upload the metadata file, see ",(0,n.jsx)(i.a,{href:"#integrating-with-sauce-labs-service-provider",children:"Integrating With Sauce Labs Service Provider"}),"."]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"sauce-labs-encryption-certificate-rotation",children:"Sauce Labs (Encryption) Certificate Rotation"}),"\n",(0,n.jsx)(i.admonition,{type:"note",children:(0,n.jsx)(i.p,{children:"This section is relevant only for identity providers that enabled encryption of SAML Assertions."})}),"\n",(0,n.jsxs)(i.p,{children:["If you enabled ",(0,n.jsx)(i.a,{href:"#encryption",children:"encryption of SAML Assertions"})," in your IdP, you must upload the certificate that is provided in Sauce Labs ",(0,n.jsx)(i.a,{href:"https://accounts.saucelabs.com/am/sso/metadata/https%3A%2F%2Faccounts.saucelabs.com%2Fsp",children:"metadata"}),"."]}),"\n",(0,n.jsxs)(i.p,{children:["The certificate is valid for one year. ",(0,n.jsx)(i.strong,{children:"120 days"})," before the expiration date the new certificate will be available in Sauce Labs ",(0,n.jsx)(i.a,{href:"https://accounts.saucelabs.com/am/sso/metadata/https%3A%2F%2Faccounts.saucelabs.com%2Fsp",children:"metadata"}),"."]}),"\n",(0,n.jsxs)(i.p,{children:["During the rotation period, the Sauce Labs metadata contains two valid certificates. If you are unsure which certificate to upload, copy the content of the ",(0,n.jsx)(i.code,{children:"<ds:X509Certificate>"})," tag and paste it into a ",(0,n.jsx)(i.a,{href:"https://www.sslshopper.com/certificate-decoder.html",children:"certificate decoder"}),". Then, select the certificate that has a longer validity period."]}),"\n",(0,n.jsxs)(i.p,{children:["To convert the certificate from the metadata into the PEM format required by most identity providers, you can use the ",(0,n.jsx)(i.a,{href:"https://www.samltool.com/format_x509cert.php",children:"online tool provided by OneLogin"}),". Follow these steps:"]}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:["Copy the content of the ",(0,n.jsx)(i.code,{children:"<ds:X509Certificate>"})," tag, paste it into the ",(0,n.jsx)(i.strong,{children:"X.509 cert"})," text box, then click ",(0,n.jsx)(i.strong,{children:"FORMAT X.509 CERTIFICATE"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:["Copy the content of the ",(0,n.jsx)(i.strong,{children:"X.509 cert with header"})," textbox and save it in a text file, for example ",(0,n.jsx)(i.code,{children:"saucelabs-sso.pem"}),"."]}),"\n",(0,n.jsx)(i.li,{children:"Upload the new certificate in your IdP."}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"If you encounter any issues during the certificate rotation, you can safely go back to the old certificate (until the expiration date). Both certificates will work."}),"\n",(0,n.jsx)(i.admonition,{type:"warning",children:(0,n.jsx)(i.p,{children:"If you do not replace the encryption certificate in your IdP on time, once the certificate expires, any user from your organization will not be able to authenticate via SSO."})}),"\n",(0,n.jsx)(i.h2,{id:"integrating-with-sauce-labs-service-provider",children:"Integrating With Sauce Labs Service Provider"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:["On Sauce Labs, click ",(0,n.jsx)(i.strong,{children:"Account"}),", and then click ",(0,n.jsx)(i.strong,{children:"Organization Management"}),"."]}),"\n"]}),"\n",(0,n.jsx)("img",{src:(0,a.Ay)("img/basics/sso/setup-sso-sp-tm-menu.png"),alt:"Organization Management Menu",width:"300"}),"\n",(0,n.jsxs)(i.ol,{start:"2",children:["\n",(0,n.jsxs)(i.li,{children:["On the ",(0,n.jsx)(i.strong,{children:"Organization Management"})," page, in the ",(0,n.jsx)(i.strong,{children:"ORGANIZATION SETTINGS"})," section, click ",(0,n.jsx)(i.strong,{children:"View Settings"}),"."]}),"\n"]}),"\n",(0,n.jsx)("img",{src:(0,a.Ay)("img/basics/sso/setup-sso-sp-org-settings-btn.png"),alt:"Organization Setting Button",width:"800"}),"\n",(0,n.jsxs)(i.ol,{start:"3",children:["\n",(0,n.jsxs)(i.li,{children:["On the ",(0,n.jsx)(i.strong,{children:"Organization Settings"})," page, click the ",(0,n.jsx)(i.strong,{children:"SINGLE SIGN-ON"})," tab."]}),"\n"]}),"\n",(0,n.jsx)("img",{src:(0,a.Ay)("img/basics/sso/setup-sso-sp-sso-tab.png"),alt:"SSO Tab",width:"400"}),"\n",(0,n.jsxs)(i.ol,{start:"4",children:["\n",(0,n.jsx)(i.li,{children:"Upload the SAML metadata file provided by your IdP."}),"\n"]}),"\n",(0,n.jsx)("img",{src:(0,a.Ay)("img/basics/sso/setup-sso-sp-upload-metadata.png"),alt:"Upload Metadata Button",width:"500"}),"\n",(0,n.jsxs)(i.ol,{start:"5",children:["\n",(0,n.jsxs)(i.li,{children:["In the ",(0,n.jsx)(i.strong,{children:"Status"})," section, toggle the switch to ",(0,n.jsx)(i.strong,{children:"Enabled"}),". For more information about adding new users and SSO considerations, see ",(0,n.jsx)(i.a,{href:"/basics/acct-team-mgmt/adding-deactivating-users",children:"Adding and Deactivating Users"}),"."]}),"\n"]}),"\n",(0,n.jsx)("img",{src:(0,a.Ay)("img/basics/sso/setup-sso-enable-sso.png"),alt:"Enable SSO",width:"500"}),"\n",(0,n.jsxs)(i.ol,{start:"6",children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"/basics/sso/logging-in-via-sso",children:"Test the integration"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:["In case of any error, please refer to the ",(0,n.jsx)(i.a,{href:"/basics/sso/troubleshooting-sso",children:"Troubleshooting section"}),"."]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"email-domains",children:"Email domains"}),"\n",(0,n.jsxs)(i.p,{children:["We strongly recommend that you assign your company email domains to your Sauce Labs organization. This allows users who do not have an account at Sauce Labs to initiate SSO at ",(0,n.jsx)(i.a,{href:"https://accounts.saucelabs.com",children:"the Sauce Labs login page"}),"."]}),"\n",(0,n.jsx)("img",{src:(0,a.Ay)("img/basics/sso/login-sso-btn.png"),alt:"SSO Login Button",width:"400"}),"\n",(0,n.jsxs)(i.admonition,{type:"note",children:[(0,n.jsxs)(i.p,{children:[(0,n.jsx)("a",{href:"mailto:help@saucelabs.com",children:"Contact support"})," to assign email domains to your organization."]}),(0,n.jsx)(i.p,{children:"You can assign multiple domains."})]}),"\n",(0,n.jsx)(i.h3,{id:"enforce-saml-sso---big-bang-configuration",children:"Enforce SAML SSO - Big Bang configuration"}),"\n",(0,n.jsx)(i.p,{children:"As an additional security measure, you can require users from your organization to sign in only via SAML SSO (IdP and SP-initiated flow). All other authentication methods will not be allowed."}),"\n",(0,n.jsx)(i.p,{children:"You can toggle this setting in SSO settings:"}),"\n",(0,n.jsx)("img",{src:(0,a.Ay)("img/basics/sso/setup-sso-sso-only.png"),alt:"SSO Required",width:"800"}),"\n",(0,n.jsx)(i.admonition,{title:"Read this before you enable Enforcing SAML login (Big Bang configuration)",type:"warning",children:(0,n.jsx)(i.p,{children:"Enabling SAML affects all users who use this application.\nUsers won't be able to sign in to SauceLabs using their regular sign-in page with login and password.\nThey are able to access the app through the SSO provider service."})}),"\n",(0,n.jsx)(i.h3,{id:"just-in-time-jit-provisioning",children:"Just-In-Time (JIT) Provisioning"}),"\n",(0,n.jsx)(i.p,{children:"Organization admins do not have to manually create accounts at Sauce Labs for new SSO users. JIT makes the onboarding process much more efficient."}),"\n",(0,n.jsx)(i.p,{children:"New users can sign up via SP or IdP-initiated SSO and the new accounts at Sauce Labs will be created automatically."}),"\n",(0,n.jsx)(i.admonition,{type:"tip",children:(0,n.jsxs)(i.p,{children:["Make sure that you assign your ",(0,n.jsx)(i.a,{href:"#email-domains",children:"company email domains"})," to your SSO integration at Sauce Labs so that new accounts can be provisioning via the SP-initiated flow."]})}),"\n",(0,n.jsx)(i.h4,{id:"team-placement",children:"Team placement"}),"\n",(0,n.jsx)(i.p,{children:"Users who are created via SSO are placed into the default team."}),"\n",(0,n.jsxs)(i.p,{children:["Organization admins can ",(0,n.jsx)(i.a,{href:"/basics/acct-team-mgmt/assigning-removing-users-teams",children:"assign users to other teams"}),"."]}),"\n",(0,n.jsxs)(i.p,{children:["Additionally, you have the option to limit concurrency, which controls the number of virtual machines and real devices available for running tests simultaneously, for newly provisioned accounts. This can be configured in the ",(0,n.jsx)(i.a,{href:"/basics/acct-team-mgmt/concurrency/managing-concurrency",children:"default team settings"}),"."]}),"\n",(0,n.jsx)(i.h4,{id:"usernames",children:"Usernames"}),"\n",(0,n.jsx)(i.p,{children:"Usernames for new accounts provisioned via SSO are generated according to the following pattern:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{children:"sso-<USERNAME_FROM_EMAIL_ADDRESS>-<EMAIL_HASH>\n"})}),"\n",(0,n.jsxs)(i.p,{children:["For example, if a new user has ",(0,n.jsx)(i.code,{children:"johndoe@example.com"})," as their email address, their generated username would be:"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{children:"sso-johndoe-4a74a9a\n"})}),"\n",(0,n.jsx)(i.p,{children:"Including a random suffix is essential to guarantee the uniqueness of usernames in the Sauce Labs database."}),"\n",(0,n.jsx)(i.h3,{id:"email-verification-in-sso-login",children:"Email Verification in SSO Login"}),"\n",(0,n.jsx)(i.p,{children:"When a user logs in via SSO without having previously verified their email address, the system will automatically verify the account if the email address associated with the account matches the one provided by the Identity Provider. This process ensures that successful SSO login serves as a validation of the user's email address."}),"\n",(0,n.jsx)(i.h2,{id:"unsupported-features",children:"Unsupported features"}),"\n",(0,n.jsx)(i.p,{children:"The following SSO-related features are currently not supported:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"SCIM (System for Cross-domain Identity Management)"}),"\n",(0,n.jsx)(i.li,{children:"SLO (Single Logout)"}),"\n",(0,n.jsx)(i.li,{children:"a staging environment for pre-integration testing of SSO"}),"\n",(0,n.jsx)(i.li,{children:"integration with multiple identity providers in a single Sauce Labs organization"}),"\n"]})]})}function u(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,i,s)=>{s.d(i,{R:()=>r,x:()=>o});var n=s(96540);const t={},a=n.createContext(t);function r(e){const i=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),n.createElement(a.Provider,{value:i},e.children)}}}]);