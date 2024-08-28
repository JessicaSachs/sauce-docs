"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[51684],{84877:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(74848),s=n(28453),i=n(86025);n(11470),n(19365);const a={id:"unity",title:"Unity",sidebar_label:"Unity"},o=void 0,l={id:"testfairy/platforms/unity",title:"Unity",description:"The TestFairy allows you to integrate it's powerful mobile testing platform into your Unity project. By following the steps below, you'll be able to start using TestFairy to capture valuable insights into your app's performance and user behavior.",source:"@site/docs/testfairy/platforms/unity.md",sourceDirName:"testfairy/platforms",slug:"/testfairy/platforms/unity",permalink:"/sauce-docs/pr-preview/pr-2914/testfairy/platforms/unity",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/testfairy/platforms/unity.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:172488024e4,frontMatter:{id:"unity",title:"Unity",sidebar_label:"Unity"},sidebar:"docs",previous:{title:"Titanium",permalink:"/sauce-docs/pr-preview/pr-2914/testfairy/platforms/titanium"},next:{title:"Xamarin Component",permalink:"/sauce-docs/pr-preview/pr-2914/testfairy/platforms/xamarin"}},c={},u=[{value:"Installation",id:"installation",level:2},{value:"Setting Screen Name",id:"setting-screen-name",level:2},{value:"Log Your Exceptions",id:"log-your-exceptions",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Identifying Your Users",id:"identifying-your-users",level:2},{value:"Session Attributes",id:"session-attributes",level:2},{value:"Remote Logging",id:"remote-logging",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"The TestFairy allows you to integrate it's powerful mobile testing platform into your Unity project. By following the steps below, you'll be able to start using TestFairy to capture valuable insights into your app's performance and user behavior."}),"\n",(0,r.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(t.p,{children:"To integrate the TestFairy Unity SDK with your Unity project, follow the steps below:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["From the TestFairy Unity SDK GitHub page, download the ",(0,r.jsx)(t.a,{href:"https://github.com/testfairy/testfairy-unity-plugin/releases",children:"latest"})," version of the ",(0,r.jsx)(t.code,{children:"unitypackage"}),"."]}),"\n",(0,r.jsx)("img",{src:(0,i.Ay)("/img/testfairy/platform/unity-latest.png"),alt:"download latest"}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["In your open Unity project, navigate to ",(0,r.jsx)(t.strong,{children:"Assets"})," > ",(0,r.jsx)(t.strong,{children:"Import Package"})," > ",(0,r.jsx)(t.strong,{children:"Custom Package"}),"."]}),"\n",(0,r.jsx)("img",{src:(0,i.Ay)("/img/testfairy/platform/custom-import.png"),alt:"custom import"}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["In the Import Unity Package window, first click ",(0,r.jsx)(t.strong,{children:"All"})," to include the TestFairy SDK in your app. Then click ",(0,r.jsx)(t.strong,{children:"Import"}),"."]}),"\n",(0,r.jsx)("img",{src:(0,i.Ay)("/img/testfairy/platform/file-select.png"),alt:"select file"}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["To use the TestFairy Unity SDK, click ",(0,r.jsx)(t.code,{children:"mainCamera"})," in Hierarchy and click ",(0,r.jsx)(t.code,{children:"Add Component"})," in the Inspector."]}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(t.p,{children:"You can add the TestFairy script to any game object. TestFairy is a singleton so no harm is done."})}),"\n",(0,r.jsx)("img",{src:(0,i.Ay)("/img/testfairy/platform/step2.png"),alt:"step 2"}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Click ",(0,r.jsx)(t.strong,{children:"Add Component"})," again, and select a ",(0,r.jsx)(t.strong,{children:"Script"})," component. Type in the script's name, for example, ",(0,r.jsx)(t.code,{children:"mainCameraScript"}),", and click on ",(0,r.jsx)(t.strong,{children:"Create and Add"}),"."]}),"\n",(0,r.jsx)("img",{src:(0,i.Ay)("/img/testfairy/platform/step3.png"),alt:"step 3"}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Edit the newly created CSharp script, add ",(0,r.jsx)(t.code,{children:"using TestFairyUnity;"})," to the import section, and a call to ",(0,r.jsx)(t.code,{children:"TestFairy.begin();"})," with your app token. You can find your app token on the ",(0,r.jsx)(t.a,{href:"https://app.testfairy.com/settings/#apptoken",children:"Account Settings"})," page."]}),"\n",(0,r.jsx)("img",{src:(0,i.Ay)("/img/testfairy/platform/step4.png"),alt:"step 4"}),"\n",(0,r.jsx)(t.p,{children:"Below is the code for copy-pasting:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'using UnityEngine;\nusing System.Collections;\nusing TestFairyUnity;\n\npublic class mainCameraScript : MonoBehaviour {\n\n// Use this for initialization\nvoid Start () {\n   TestFairy.begin("PUT YOUR SDK APP TOKEN HERE SEE COMMENT ABOVE");\n}\n\n...\n}\n'})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Save, build, and run."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"setting-screen-name",children:"Setting Screen Name"}),"\n",(0,r.jsxs)(t.p,{children:["TestFairy can capture screenshots during a recorded session. By default, it attempts to name a screenshot based on different measures automatically. However, you can override this behavior and set a custom name for a captured screen using the ",(0,r.jsx)(t.code,{children:"setScreenName"})," method. This can help you organize and label screenshots with appropriate information, such as the level name. See the example below:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"using UnityEngine;\nusing System.Collections;\nusing TestFairyUnity;\nusing UnityEngine.SceneManagement;\n\npublic class cameraScript : MonoBehaviour {\n...\n void OnLevelWasLoaded(int level) {\n TestFairy.setScreenName(Application.loadedLevelName);\n }\n...\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"log-your-exceptions",children:"Log Your Exceptions"}),"\n",(0,r.jsx)(t.p,{children:"To capture exception logs and send them to the TestFairy dashboard, you can use the following code example. This will help you track and analyze any exceptions that occur during the usage of your app."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"private void OnEnable()\n{\n Application.logMessageReceivedThreaded += HandleLog;\n}\n\nprivate void OnDisable()\n{\n Application.logMessageReceivedThreaded -= HandleLog;\n}\n\nprivate void HandleLog(string message, string stackTrace, LogType type)\n{\n TestFairy.log(message);\n TestFairy.log(stackTrace);\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,r.jsx)(t.p,{children:"If you encounter certain errors during the integration process, refer to the following troubleshooting tips:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"ERROR ITMS-90087: \"Unsupported Architectures. The executable TestFairy.framework contains unsupported architectures '[x86_64, i386]'\n"})}),"\n",(0,r.jsx)(t.p,{children:"This error happens when you export your iOS app to the App Store. The App Store only supports apps built for the ARM architecture; however, to allow developers to test in the iOS Simulator, we include the architectures for 64-bit (x86_64) and 32-bit (i386) Intel architectures."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'Error: exportArchive: IPA processing failed\nError Domain=IDEFoundationErrorDomain Code=1 "IPA processing failed" UserInfo={NSLocalizedDescription=IPA processing failed}\n'})}),"\n",(0,r.jsx)(t.p,{children:"This error happens when you export an Ad hoc version of your iOS app. Most often seen in Unity Cloud build."}),"\n",(0,r.jsx)(t.h2,{id:"identifying-your-users",children:"Identifying Your Users"}),"\n",(0,r.jsxs)(t.p,{children:["To learn how to identify users and set session attributes using the TestFairy SDK in Unity, refer to the ",(0,r.jsx)(t.a,{href:"/testfairy/sdk/identifying-users/",children:"identifying users section"})," in the SDK Documentation."]}),"\n",(0,r.jsx)(t.h2,{id:"session-attributes",children:"Session Attributes"}),"\n",(0,r.jsxs)(t.p,{children:["For information on how to set session attributes using the TestFairy Unity SDK, please refer to the ",(0,r.jsx)(t.a,{href:"/testfairy/sdk/session-attributes/",children:"SDK Documentation on session attributes"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"remote-logging",children:"Remote Logging"}),"\n",(0,r.jsxs)(t.p,{children:["To understand how to perform remote logging with the TestFairy SDK in Unity, refer to the ",(0,r.jsx)(t.a,{href:"/testfairy/sdk/remote-logging/",children:"remote logging section"})," in the SDK Documentation."]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var r=n(34164);const s={tabItem:"tabItem_Ymn6"};var i=n(74848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,a),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>T});var r=n(96540),s=n(34164),i=n(23104),a=n(56347),o=n(205),l=n(57485),c=n(31682),u=n(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const s=(0,a.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(s.location.search);t.set(i,e),s.replace({...s.location,search:t.toString()})}),[i,s])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,i=p(e),[a,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[c,d]=g({queryString:n,groupId:s}),[m,y]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,i]=(0,u.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:s}),f=(()=>{const e=c??m;return h({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{f&&l(f)}),[f]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),y(e)}),[d,y,i]),tabValues:i}}var y=n(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(74848);function x(e){let{className:t,block:n,selectedValue:r,selectValue:a,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),s=o[n].value;s!==r&&(c(t),a(s))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...i,className:(0,s.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:i}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function j(e){const t=m(e);return(0,b.jsxs)("div",{className:(0,s.A)("tabs-container",f.tabList),children:[(0,b.jsx)(x,{...t,...e}),(0,b.jsx)(v,{...t,...e})]})}function T(e){const t=(0,y.A)();return(0,b.jsx)(j,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var r=n(96540);const s={},i=r.createContext(s);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);