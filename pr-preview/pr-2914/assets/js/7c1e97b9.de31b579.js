"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[31232],{18293:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var i=t(74848),s=t(28453),r=t(86025);t(11470),t(19365);const a={id:"jira-cloud",title:"Connecting TestFairy to JIRA Cloud",sidebar_label:"Jira Cloud"},o=void 0,l={id:"testfairy/sdk/bug-tracking/jira-cloud",title:"Connecting TestFairy to JIRA Cloud",description:"Creating a Jira API Token",source:"@site/docs/testfairy/sdk/bug-tracking/jira-cloud.md",sourceDirName:"testfairy/sdk/bug-tracking",slug:"/testfairy/sdk/bug-tracking/jira-cloud",permalink:"/sauce-docs/pr-preview/pr-2914/testfairy/sdk/bug-tracking/jira-cloud",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/testfairy/sdk/bug-tracking/jira-cloud.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:172488024e4,frontMatter:{id:"jira-cloud",title:"Connecting TestFairy to JIRA Cloud",sidebar_label:"Jira Cloud"},sidebar:"docs",previous:{title:"GitHub",permalink:"/sauce-docs/pr-preview/pr-2914/testfairy/sdk/bug-tracking/github"},next:{title:"Jira Server",permalink:"/sauce-docs/pr-preview/pr-2914/testfairy/sdk/bug-tracking/jira-server"}},c={},d=[{value:"Creating a Jira API Token",id:"creating-a-jira-api-token",level:2},{value:"Configuring Jira in Your TestFairy Settings",id:"configuring-jira-in-your-testfairy-settings",level:2},{value:"(Optional) Installing the TestFairy Chrome Extension",id:"optional-installing-the-testfairy-chrome-extension",level:2},{value:"(Optional) Adding the TestFairy Jira Add-on to Your Jira Account",id:"optional-adding-the-testfairy-jira-add-on-to-your-jira-account",level:2},{value:"(Optional) Mapping Jira Custom Fields",id:"optional-mapping-jira-custom-fields",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"creating-a-jira-api-token",children:"Creating a Jira API Token"}),"\n",(0,i.jsx)(n.p,{children:"To connect TestFairy to Jira Cloud, you'll need to create an API token in Jira. This token will be used to authenticate TestFairy when accessing your Jira account. Follow these steps to create the API token:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Log in to ",(0,i.jsx)(n.a,{href:"https://id.atlassian.com/manage/api-tokens#",children:"https://id.atlassian.com/manage/api-tokens#"})," and click on ",(0,i.jsx)(n.strong,{children:"Create API token"}),"."]}),"\n",(0,i.jsx)("img",{src:(0,r.Ay)("/img/testfairy/testing-an-app/bug-tracking/jira-create-api.png"),alt:"Create Jira API Token"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Label the new token ",(0,i.jsx)(n.code,{children:"TestFairy"}),"."]}),"\n",(0,i.jsx)("img",{src:(0,r.Ay)("/img/testfairy/testing-an-app/bug-tracking/jira-label.png"),alt:"Set TestFairy Jira Key"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Copy the API Token."}),"\n",(0,i.jsx)("img",{src:(0,r.Ay)("/img/testfairy/testing-an-app/bug-tracking/jira-token.png"),alt:"Copy the API Token"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"configuring-jira-in-your-testfairy-settings",children:"Configuring Jira in Your TestFairy Settings"}),"\n",(0,i.jsx)(n.p,{children:"To connect TestFairy to Jira, you'll need to configure Jira settings in your TestFairy account. Follow these steps to complete the configuration:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Open your TestFairy account Preferences ."}),"\n",(0,i.jsx)("img",{src:(0,r.Ay)("/img/testfairy/testing-an-app/bug-tracking/jira-cloud-1.png"),alt:"Open TestFairy preferences"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Choose ",(0,i.jsx)(n.strong,{children:"Integrations"}),", scroll to Jira and press ",(0,i.jsx)(n.strong,{children:"Add integration"}),"."]}),"\n",(0,i.jsx)("img",{src:(0,r.Ay)("/img/testfairy/testing-an-app/bug-tracking/jira-cloud-1-1.png"),alt:"Jira cloud"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Enter your Jira Username, API Token, and JIRA URL in the next screen and press ",(0,i.jsx)(n.strong,{children:"Update Jira Settings"}),"."]}),"\n",(0,i.jsx)("img",{src:(0,r.Ay)("/img/testfairy/testing-an-app/bug-tracking/jira-cloud-2.png"),alt:"Configure Jira Cloud"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"optional-installing-the-testfairy-chrome-extension",children:"(Optional) Installing the TestFairy Chrome Extension"}),"\n",(0,i.jsxs)(n.p,{children:["The TestFairy Chrome Extension is available at ",(0,i.jsx)(n.a,{href:"https://chrome.google.com/webstore/detail/testfairy-for-jira/joaafaemekbkgekhjbaldlllcnjifcee",children:"https://chrome.google.com/webstore/detail/testfairy-for-jira/joaafaemekbkgekhjbaldlllcnjifcee"}),". With this Chrome extension, every JIRA issue that has a link to a TestFairy session will contain the proper TestFairy session, timeline, logs, and crash reports embedded in the Jira issue. Follow these steps to install the Chrome extension:"]}),"\n",(0,i.jsx)(n.h2,{id:"optional-adding-the-testfairy-jira-add-on-to-your-jira-account",children:"(Optional) Adding the TestFairy Jira Add-on to Your Jira Account"}),"\n",(0,i.jsx)(n.p,{children:"If you choose not to use the TestFairy Chrome Extension, you can add the TestFairy Jira Add-on to your Jira account. This add-on allows you to include TestFairy videos in Jira issues. Follow these steps to add the TestFairy Jira Add-on:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Open ",(0,i.jsx)(n.strong,{children:"Jira Settings"}),"."]}),"\n",(0,i.jsx)("img",{src:(0,r.Ay)("/img/testfairy/testing-an-app/bug-tracking/jira-settings.png"),alt:"Open Jira Settings"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Open ",(0,i.jsx)(n.strong,{children:"Apps"}),"."]}),"\n",(0,i.jsx)("img",{src:(0,r.Ay)("/img/testfairy/testing-an-app/bug-tracking/jira-settings1.png"),alt:"Open Apps"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the Apps menu, press ",(0,i.jsx)(n.strong,{children:"Find new apps"}),"."]}),"\n",(0,i.jsx)("img",{src:(0,r.Ay)("/img/testfairy/testing-an-app/bug-tracking/jira-find-apps.png"),alt:"Find new apps"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Add ",(0,i.jsx)(n.strong,{children:"TestFairy for Jira"})," to your account."]}),"\n",(0,i.jsx)("img",{src:(0,r.Ay)("/img/testfairy/testing-an-app/bug-tracking/jira-discover.png"),alt:"TestFairy for Jira"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:['On the first issue created, click on the "3 dots" icon and choose ',(0,i.jsx)(n.strong,{children:"TestFairy Session"}),"."]}),"\n",(0,i.jsx)("img",{src:(0,r.Ay)("/img/testfairy/testing-an-app/bug-tracking/jira-3-dots.png"),alt:"TestFairy session"}),"\n",(0,i.jsx)(n.p,{children:"After the installation, the Jira issue looks like the following:"}),"\n",(0,i.jsx)("img",{src:(0,r.Ay)("/img/testfairy/testing-an-app/bug-tracking/hira6a.png"),alt:"Jira ticket"}),"\n",(0,i.jsx)("img",{src:(0,r.Ay)("/img/testfairy/testing-an-app/bug-tracking/jira5b.png"),alt:"Jira popup"}),"\n",(0,i.jsx)("img",{src:(0,r.Ay)("/img/testfairy/testing-an-app/bug-tracking/jira6c.png"),alt:"Application logs"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"optional-mapping-jira-custom-fields",children:"(Optional) Mapping Jira Custom Fields"}),"\n",(0,i.jsx)("p",{children:(0,i.jsx)("span",{className:"sauceGreen",children:"Highly Recommended"})}),"\n",(0,i.jsx)(n.p,{children:"To leverage the full capabilities of the TestFairy Jira integration, it's recommended to map Jira custom fields. This feature allows you to automatically populate any field in Jira when creating a new issue, using standard TestFairy data or your custom session attributes. Follow these steps to map Jira custom fields:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["First, you need to connect a Jira account. Follow the ",(0,i.jsx)(n.a,{href:"#1-creating-a-jira-api-token",children:"instructions"})," above."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Choose one of the apps you want to connect to and press ",(0,i.jsx)(n.strong,{children:"Activate"}),"."]}),"\n",(0,i.jsx)("img",{src:(0,r.Ay)("/img/testfairy/testing-an-app/bug-tracking/jira-connect-proj-map1.png"),alt:"Activate apps"}),"\n",(0,i.jsx)(n.p,{children:"You can configure the Jira fields:"}),"\n",(0,i.jsx)("img",{src:(0,r.Ay)("/img/testfairy/testing-an-app/bug-tracking/jira-proj-fileds-config.png"),alt:"Configure Jira fields"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the Jira configuration screen, choose the ",(0,i.jsx)(n.strong,{children:"Project Key"})," you want to connect."]}),"\n",(0,i.jsx)("img",{src:(0,r.Ay)("/img/testfairy/testing-an-app/bug-tracking/jira-project-select.png"),alt:"Connect project"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Next, select the issue type you want to configure."}),"\n",(0,i.jsx)("img",{src:(0,r.Ay)("/img/testfairy/testing-an-app/bug-tracking/issue-type-select.png"),alt:"Configure issue type"}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsxs)(n.p,{children:["If you want first to test the connection to the Jira project, you can press ",(0,i.jsx)(n.strong,{children:"TEST"})," to validate the Jira issue creation. You will get a pop-up window with the response. Make sure you get a valid Jira link.\nIn case you get a ",(0,i.jsx)(n.strong,{children:"PENDING"})," response, check the connection configuration."]}),(0,i.jsx)("img",{src:(0,r.Ay)("/img/testfairy/testing-an-app/bug-tracking/jira-connect-test-ok.png"),alt:"Connection configuration"})]}),"\n",(0,i.jsxs)(n.p,{children:["Each ",(0,i.jsx)(n.strong,{children:"Issue type"})," has different fields associated with it:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Name"})," - the field name."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type"})," - the type of field as defined in the JIRA system."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Value"})," - the values from the JIRA system (in addition to predefined fixed values and Dynamic value, see below)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Required?"})," - specify if the field required or optional.","\n",(0,i.jsx)("img",{src:(0,r.Ay)("/img/testfairy/testing-an-app/bug-tracking/jira-requiered-fildes-mark.png"),alt:"Required fields"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"When defining fields in the Configure Fields window, follow the below conventions:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"When you choose a field from a drop-down list, this field as is (text) will be populated in the corresponding Jira field in the issue opened."}),"\n",(0,i.jsx)("img",{src:(0,r.Ay)("/img/testfairy/testing-an-app/bug-tracking/jira-values-drop-down.png"),alt:"Values drop down"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"You can also choose from the fixed predefined values in the list below:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"{user.id}"})," - the UserId of the session running."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"{session.timestamp}"})," - the timestamp of the session."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"{session.url}"})," - the session URL on the TestFairy dashboard."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"{session.ipAddress}"})," - the IP address of the device running the session."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"{device.os}"})," - the running device OS"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"{device.model}"})," - the device model of the handset"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"{device.osVersion}"})," - the OS version on the device (if the iPhone is running version IOS 12 value=12)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"{app.name}"})," - the app name."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"{app.version}"})," - the ",(0,i.jsx)(n.em,{children:"versionName"})," or ",(0,i.jsx)(n.em,{children:"CFBundleShortVersionString"})," of the build. example: 1.7.0"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"{app.fullVersion}"})," - the ",(0,i.jsx)(n.em,{children:"versionName"})," + (",(0,i.jsx)(n.em,{children:"versionCode"})," or ",(0,i.jsx)(n.em,{children:"CFBundleVersion"}),") of the build. example: 1.7.0 (1700)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"{feedback.text}"})," - the feedback message"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"{feedback.timestamp}"})," - the timestamp of the feedback (absolute)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"{feedback.relTimestamp}"})," - relative timestamp of the feedback (mm",":ss",") since the session started"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["To use these values, add them to the ",(0,i.jsx)(n.code,{children:"Dynamic value"})," field that opens when you select the ",(0,i.jsx)(n.strong,{children:"Dynamic value"})," option like so:"]}),"\n",(0,i.jsx)("img",{src:(0,r.Ay)("/img/testfairy/testing-an-app/bug-tracking/jira-fixed-attr-popup.png"),alt:"Fixed values"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["You can add attributes defined in your app's code to the ",(0,i.jsx)(n.code,{children:"Dynamic value"})," field. The structure of a dynamic field is as follows:\n",(0,i.jsx)(n.code,{children:"{attr.[attribute_name]||[default_value]}"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"attribute_name"})," - is the name of the Teasfairy attribute set in the code by the ",(0,i.jsx)(n.code,{children:"TestFairy.setAttribute"})," function. What passes to the Jira is the value of this attribute."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"default_value"})," - for each attribute, you can set a default value so that if you receive a null or wrong attribute value from the code (impossible in this field in Jira), the default value will be passed to Jira instead."]}),"\n"]}),"\n",(0,i.jsx)("img",{src:(0,r.Ay)("/img/testfairy/testing-an-app/bug-tracking/jira-dynamic-attr-setattr.png"),alt:"Attribute Setting"})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>a});t(96540);var i=t(34164);const s={tabItem:"tabItem_Ymn6"};var r=t(74848);function a(e){let{children:n,hidden:t,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.A)(s.tabItem,a),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>k});var i=t(96540),s=t(34164),r=t(23104),a=t(56347),o=t(205),l=t(57485),c=t(31682),d=t(70679);function u(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:s}}=e;return{value:n,label:t,attributes:i,default:s}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const s=(0,a.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(r),(0,i.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(s.location.search);n.set(r,e),s.replace({...s.location,search:n.toString()})}),[r,s])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,r=h(e),[a,l]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:r}))),[c,u]=g({queryString:t,groupId:s}),[f,j]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,r]=(0,d.Dv)(t);return[s,(0,i.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:s}),m=(()=>{const e=c??f;return p({value:e,tabValues:r})?e:null})();(0,o.A)((()=>{m&&l(m)}),[m]);return{selectedValue:a,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),j(e)}),[u,j,r]),tabValues:r}}var j=t(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function y(e){let{className:n,block:t,selectedValue:i,selectValue:a,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),s=o[t].value;s!==i&&(c(n),a(s))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...r,className:(0,s.A)("tabs__item",m.tabItem,r?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function b(e){let{lazy:n,children:t,selectedValue:r}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function v(e){const n=f(e);return(0,x.jsxs)("div",{className:(0,s.A)("tabs-container",m.tabList),children:[(0,x.jsx)(y,{...n,...e}),(0,x.jsx)(b,{...n,...e})]})}function k(e){const n=(0,j.A)();return(0,x.jsx)(v,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var i=t(96540);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);