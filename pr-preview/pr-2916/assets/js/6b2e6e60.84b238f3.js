"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[98341],{28431:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=n(74848),o=n(28453);n(86025),n(11470),n(19365);const s={id:"google",title:"Google",sidebar_label:"Google"},a=void 0,i={id:"testfairy/security/sso/google",title:"Google",description:"When SSO is configured into your account, the login page is replaced with the Login with Google button.",source:"@site/docs/testfairy/security/sso/google.md",sourceDirName:"testfairy/security/sso",slug:"/testfairy/security/sso/google",permalink:"/sauce-docs/pr-preview/pr-2916/testfairy/security/sso/google",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/testfairy/security/sso/google.md",tags:[],version:"current",lastUpdatedBy:"kristofmuhi",lastUpdatedAt:172492915e4,frontMatter:{id:"google",title:"Google",sidebar_label:"Google"},sidebar:"docs",previous:{title:"Azure",permalink:"/sauce-docs/pr-preview/pr-2916/testfairy/security/sso/azure"},next:{title:"Okta",permalink:"/sauce-docs/pr-preview/pr-2916/testfairy/security/sso/okta"}},l={},c=[{value:"Setting Up Login With Google In Your Account",id:"setting-up-login-with-google-in-your-account",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"<code>Error: app_not_configured_for_user</code>",id:"error-app_not_configured_for_user",level:3}];function u(e){const t={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["When SSO is configured into your account, the login page is replaced with the ",(0,r.jsx)(t.code,{children:"Login with Google"})," button."]}),"\n",(0,r.jsx)(t.h2,{id:"setting-up-login-with-google-in-your-account",children:"Setting Up Login With Google In Your Account"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Log in to Google Apps as admin, go to the admin console and select ",(0,r.jsx)(t.strong,{children:"Apps"}),", click on ",(0,r.jsx)(t.strong,{children:"SAML apps"}),", and click on ",(0,r.jsx)(t.strong,{children:"Add"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["In the popup window, select ",(0,r.jsx)(t.strong,{children:"Setup my custom app"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["Click on ",(0,r.jsx)(t.strong,{children:"Option 2: IDP metadata"})," to download an xml file, and click ",(0,r.jsx)(t.strong,{children:"next"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["Enter ",(0,r.jsx)(t.strong,{children:"TestFairy"})," as the application's name, and then click ",(0,r.jsx)(t.strong,{children:"Next"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["Add the service provider details. Change ",(0,r.jsx)(t.code,{children:"acme"})," to your enterprise subdomain name on TestFairy.com in the ACS URL."]}),"\n",(0,r.jsxs)(t.li,{children:["Review and click ",(0,r.jsx)(t.strong,{children:"Next"})," and then click ",(0,r.jsx)(t.strong,{children:"Finish"})," when done."]}),"\n",(0,r.jsxs)(t.li,{children:["Ensure the service is ",(0,r.jsx)(t.code,{children:"on"})," to finish the setup. If it isn't, go to ",(0,r.jsx)(t.strong,{children:"EDIT SERVICE"})," and change it to ",(0,r.jsx)(t.strong,{children:"ON"})," for everyone."]}),"\n",(0,r.jsxs)(t.li,{children:["Go to your TestFairy account, click on ",(0,r.jsx)(t.strong,{children:"Account Preferences"})," in the top-right menu, and select ",(0,r.jsx)(t.strong,{children:"Security"})," from the left menu. Paste the previously saved file contents in the ",(0,r.jsx)(t.code,{children:"ID Provider metadata"}),". Click on ",(0,r.jsx)(t.strong,{children:"Update SAML ID Provider metadata"})," when done. Log out and make sure you can see the ",(0,r.jsx)(t.strong,{children:"Login with Google"})," button."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,r.jsx)(t.h3,{id:"error-app_not_configured_for_user",children:(0,r.jsx)(t.code,{children:"Error: app_not_configured_for_user"})}),"\n",(0,r.jsx)(t.p,{children:"If you are seeing this error message on Google, then it means that you:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Didn't enable this app for the current user or all users. See the installation section above for how to enable the newly created app for all users."}),"\n",(0,r.jsxs)(t.li,{children:["Accidentally provided wrong ",(0,r.jsx)(t.strong,{children:"ACS URL"})," or ",(0,r.jsx)(t.strong,{children:"Entity ID"}),". See the installation section above for the correct values. Notice that every character matters as values must be identical for verification."]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var r=n(34164);const o={tabItem:"tabItem_Ymn6"};var s=n(74848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,a),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(96540),o=n(34164),s=n(23104),a=n(56347),i=n(205),l=n(57485),c=n(31682),u=n(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:o}}=e;return{value:t,label:n,attributes:r,default:o}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const o=(0,a.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(o.location.search);t.set(s,e),o.replace({...o.location,search:t.toString()})}),[s,o])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,s=h(e),[a,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[c,d]=g({queryString:n,groupId:o}),[f,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,s]=(0,u.Dv)(n);return[o,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:o}),b=(()=>{const e=c??f;return p({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{b&&l(b)}),[b]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),m(e)}),[d,m,s]),tabValues:s}}var m=n(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(74848);function x(e){let{className:t,block:n,selectedValue:r,selectValue:a,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),o=i[n].value;o!==r&&(c(t),a(o))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...s,className:(0,o.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:s}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function j(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,o.A)("tabs-container",b.tabList),children:[(0,v.jsx)(x,{...t,...e}),(0,v.jsx)(y,{...t,...e})]})}function w(e){const t=(0,m.A)();return(0,v.jsx)(j,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var r=n(96540);const o={},s=r.createContext(o);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);