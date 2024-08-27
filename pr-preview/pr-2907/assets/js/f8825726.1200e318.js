"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[40095],{26028:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var t=n(74848),s=n(28453),o=n(86025);const a={id:"appium-inspector",title:"Appium Inspector",sidebar_label:"Appium Inspector"},l=void 0,r={id:"mobile-apps/features/appium-inspector",title:"Appium Inspector",description:"Real Devices Only",source:"@site/docs/mobile-apps/features/appium-inspector.md",sourceDirName:"mobile-apps/features",slug:"/mobile-apps/features/appium-inspector",permalink:"/sauce-docs/pr-preview/pr-2907/mobile-apps/features/appium-inspector",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/mobile-apps/features/appium-inspector.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:172477197e4,frontMatter:{id:"appium-inspector",title:"Appium Inspector",sidebar_label:"Appium Inspector"},sidebar:"docs",previous:{title:"MDM Support on iOS Real Devices",permalink:"/sauce-docs/pr-preview/pr-2907/mobile-apps/mdm-support"},next:{title:"Network Throttling",permalink:"/sauce-docs/pr-preview/pr-2907/mobile-apps/features/network-throttling"}},p={},c=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Using and accessing Appium Inspector on Real Devices",id:"using-and-accessing-appium-inspector-on-real-devices",level:2},{value:"Using the Inspect View",id:"using-the-inspect-view",level:2},{value:"Using the App Source",id:"using-the-app-source",level:2},{value:"Using Selected Element attributes",id:"using-selected-element-attributes",level:2},{value:"Hybrid Apps / WebView",id:"hybrid-apps--webview",level:2},{value:"More Tools",id:"more-tools",level:2},{value:"Find Element",id:"find-element",level:3},{value:"Limitations",id:"limitations",level:2},{value:"Learn more about the open source Appium Inspector here",id:"learn-more-about-the-open-source-appium-inspector-here",level:3}];function u(e){const i={a:"a",admonition:"admonition",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("p",{children:(0,t.jsx)("small",{children:(0,t.jsx)("span",{className:"sauceGreen",children:"Real Devices Only"})})}),"\n",(0,t.jsxs)(i.p,{children:["Appium Inspector is a powerful tool built on top of the Appium test automation framework to help simplify the process of writing/debugging tests for mobile applications on real devices. This helps to automate a new application or feature in your native application. The tool is designed to help you select specific elements in your application for test automation, so you will be able to debug issues in your test automation scripts in a timely manner.\nOur latest solution seamlessly integrates into the Sauce Labs environment, requires no additional configuration on your end and it removes the burden of installing a 3rd party tool.\nWe are using the ",(0,t.jsx)(i.a,{href:"https://docs.saucelabs.com/mobile-apps/automated-testing/appium/appium-versions/",children:"latest version of Appium"})," to inspect the elements in your application, mirroring the experience of local debugging or attaching 3rd party inspector tools to your native Appium sessions."]}),"\n",(0,t.jsx)("img",{src:(0,o.A)("img/mobile-apps/Appium-inspector-main.png"),alt:"Appium Inspector during a Live Testing Session",width:"800"}),"\n",(0,t.jsx)(i.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["A Sauce Labs paid account (",(0,t.jsx)(i.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"}),")"]}),"\n",(0,t.jsx)(i.li,{children:"A native Android, iOS, or iPadOS mobile app."}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"using-and-accessing-appium-inspector-on-real-devices",children:"Using and accessing Appium Inspector on Real Devices"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"In Sauce Labs click Live and Mobile app testing."}),"\n",(0,t.jsx)(i.li,{children:"Select your native application from the dropdown or go to the App Management page and click Start Testing"}),"\n",(0,t.jsx)(i.li,{children:"Select your desired device and click on Start Test from the device tile."}),"\n",(0,t.jsx)(i.li,{children:"Click on Developer Options in the toolbar, when your session has successfully launched and your native application screen is visible."}),"\n",(0,t.jsx)(i.li,{children:"Click on Appium Inspector on the right side, and click Start Inspection, to start your Appium session."}),"\n",(0,t.jsx)(i.li,{children:"Navigate to the desired page/screen in your native application"}),"\n",(0,t.jsx)(i.li,{children:"Click Refresh inside the Inspect View element whenever you need to take a new snapshot of your application screen."}),"\n",(0,t.jsx)(i.li,{children:"We will take a snapshot of the displayed page source with all of the View Hierarchy and attributes."}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Now you will be able to navigate within your application on the left side throughout the whole session.\nIf you want to take another snapshot of the screen of your application you just need to click Refresh in the Inspect View."}),"\n",(0,t.jsx)(i.admonition,{title:"Note",type:"note",children:(0,t.jsx)(i.p,{children:"You must wait for your app to launch before starting Appium Inspector!"})}),"\n",(0,t.jsx)(i.h2,{id:"using-the-inspect-view",children:"Using the Inspect View"}),"\n",(0,t.jsx)(i.p,{children:"The Inspect View gives you a snapshot of your application screen, which can be used for debugging.\nYou can hover over the elements, highlight them, or by clicking on these elements inspect your App Source Tree or attributes on the right side."}),"\n",(0,t.jsx)(i.p,{children:"When you click on the desired UI element we will pin the App Source and the Selected Elements on the right side."}),"\n",(0,t.jsx)("img",{src:(0,o.A)("img/mobile-apps/Appium-inspector-inspect-refresh.png"),alt:"Appium Inspector Inpect View",width:"450"}),"\n",(0,t.jsx)(i.h2,{id:"using-the-app-source",children:"Using the App Source"}),"\n",(0,t.jsxs)(i.p,{children:["The App Source view will get you the detailed breakdown of your native applications view hierarchy in an XML tree structure.\nWe are using the same getPageSource command as Appium to get the detailed source elements, attributes, and view hierarchy. ",(0,t.jsx)(i.a,{href:"https://appium.io/docs/en/2.4/commands/base-driver/#getpagesource",children:"See more here."})]}),"\n",(0,t.jsx)(i.p,{children:"In addition, you can Copy and Download the App Source along with its attributes for seamless debugging and collaboration with colleagues for effective troubleshooting."}),"\n",(0,t.jsx)("img",{src:(0,o.A)("img/mobile-apps/Appium-inspector-app-source.png"),alt:"Appium Inspector App Source",width:"450"}),"\n",(0,t.jsx)(i.h2,{id:"using-selected-element-attributes",children:"Using Selected Element attributes"}),"\n",(0,t.jsx)(i.p,{children:"When you click on an element in the Inspect view or App Source we will display all the attributes for that given element.\nYou can find unique locators or IDs for your automation script with the element information."}),"\n",(0,t.jsx)("img",{src:(0,o.A)("img/mobile-apps/Appium-inspector-select-element.png"),alt:"Appium Inspector Selected Attributes Views",width:"450"}),"\n",(0,t.jsx)(i.p,{children:"In addition, this helps to view Accessibility elements in your native application. This allows you to validate what an accessibility tool would see and what type of information can be read from your application source."}),"\n",(0,t.jsx)(i.p,{children:"List of Selectors: (These can be used for your automated test scripts)"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"id"}),"\n",(0,t.jsx)(i.li,{children:"Accessibility id"}),"\n",(0,t.jsx)(i.li,{children:"Class Name (Android only)"}),"\n",(0,t.jsx)(i.li,{children:"Name (iOS only)"}),"\n",(0,t.jsx)(i.li,{children:"-ios class chain (iOS only)"}),"\n",(0,t.jsx)(i.li,{children:"-ios predicate string (iOS only)"}),"\n",(0,t.jsx)(i.li,{children:"Xpath"}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Attributes: (These help with debugging or deciding what actions you can make with a given Selector)\nDisplayed\nPackage\nCheckable\nClickable\nIndex\nFocusable\nEnabled\nPassword\nBounds\nFocused\nChecked\nLong-clickable\nTest\nClass\nScrollable\nSelected\nWidth\nHeight\nx/y coordinates"}),"\n",(0,t.jsx)(i.h2,{id:"hybrid-apps--webview",children:"Hybrid Apps / WebView"}),"\n",(0,t.jsxs)(i.p,{children:["Utilize ",(0,t.jsx)(i.a,{href:"https://docs.saucelabs.com/web-apps/live-testing/dev-tools/",children:"Dev Tools"})," to validate hybrid or web views within native applications.\nThis feature enables seamless validation of web content integrated within native apps, providing comprehensive testing capabilities for a\nsmooth user experience across different platforms."]}),"\n",(0,t.jsx)(i.h2,{id:"more-tools",children:"More Tools"}),"\n",(0,t.jsx)(i.h3,{id:"find-element",children:"Find Element"}),"\n",(0,t.jsx)(i.p,{children:"The Find Element functionality allows you to validate locating an element using various locator strategies directly within Appium Inspector.\nOnce the element is successfully located, you can effortlessly trigger a tap action on it, streamlining the element identification and\ninteraction process for efficient testing and debugging."}),"\n",(0,t.jsx)(i.h2,{id:"limitations",children:"Limitations"}),"\n",(0,t.jsxs)(i.admonition,{title:"Limitations",type:"note",children:[(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Emulators/Simulators are not supported"}),"\n",(0,t.jsxs)(i.li,{children:["We are always using the ",(0,t.jsx)(i.a,{href:"https://docs.saucelabs.com/mobile-apps/automated-testing/appium/appium-versions/",children:"latest version of Appium 2"})]}),"\n",(0,t.jsxs)(i.li,{children:["You will not be able to attach your ",(0,t.jsx)(i.a,{href:"https://github.com/appium/appium-inspector",children:"local Appium Inspector GUI"})," to our inspector tools at the moment."]}),"\n",(0,t.jsx)(i.li,{children:"Webviews and hybrid apps will have additional capture limitations"}),"\n"]}),(0,t.jsx)(i.h3,{id:"learn-more-about-the-open-source-appium-inspector-here",children:"Learn more about the open source Appium Inspector here"}),(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://appium.github.io/appium-inspector/",children:" Open Source Appium Inspector GUI"})}),"\n"]})]})]})}function d(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>a,x:()=>l});var t=n(96540);const s={},o=t.createContext(s);function a(e){const i=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(o.Provider,{value:i},e.children)}}}]);