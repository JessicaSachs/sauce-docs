"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[81018],{58713:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var n=t(74848),s=t(28453),a=t(86025);const o={id:"evinced",title:"Evinced Integration",sidebar_label:"Evinced",description:"Test your mobile apps for accessibility challenges with Evinced and the Sauce Labs cloud",keywords:["accessibility","accessibility-testing","automated-testing","mobile","mobile-native","how-to"]},c=void 0,r={id:"basics/integrations/evinced",title:"Evinced Integration",description:"Test your mobile apps for accessibility challenges with Evinced and the Sauce Labs cloud",source:"@site/docs/basics/integrations/evinced.md",sourceDirName:"basics/integrations",slug:"/basics/integrations/evinced",permalink:"/sauce-docs/pr-preview/pr-2914/basics/integrations/evinced",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/basics/integrations/evinced.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:172488024e4,frontMatter:{id:"evinced",title:"Evinced Integration",sidebar_label:"Evinced",description:"Test your mobile apps for accessibility challenges with Evinced and the Sauce Labs cloud",keywords:["accessibility","accessibility-testing","automated-testing","mobile","mobile-native","how-to"]},sidebar:"docs",previous:{title:"Deque axe",permalink:"/sauce-docs/pr-preview/pr-2914/basics/integrations/deque"},next:{title:"Eggplant",permalink:"/sauce-docs/pr-preview/pr-2914/basics/integrations/eggplant"}},l={},d=[{value:"Mobile Flow Analyzer",id:"mobile-flow-analyzer",level:2},{value:"How to Run Evinced Scans on Sauce Labs Devices",id:"how-to-run-evinced-scans-on-sauce-labs-devices",level:2}];function h(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.p,{children:"The Evinced Mobile Flow Analyzer allows you to connect to a mobile device right from your desktop and scan any native mobile applications for accessibility issues. Actionable reports can be created with a single click to make communicating with developer team members easier than ever."}),"\n",(0,n.jsx)(i.p,{children:"The Evinced rule set goes beyond what the vendor accessibility APIs offer to help you find more issues that could be impacting the accessibility of your application. In addition, Evinced uses advanced algorithms to create a single actionable report that is easy to digest. Best of all, access to the source code isn\u2019t required! There is no need to rebuild the app or modify it in any way to test it for accessibility issues."}),"\n",(0,n.jsx)(i.p,{children:"The one thing missing from this powerful tool is access to a wide variety of devices and operating systems. This is crucially important for both the Android and iOS platforms."}),"\n",(0,n.jsx)(i.p,{children:"For Android, breadth of coverage is extremely important due to the large segmentation in the Android market (Samsung, Google, LG, HTC, OnePlus, Huawei, etc). All these manufacturers take the default Android OS image from Google and make it their own. This creates the need for additional testing to make sure we give the best experience possible to all users. For iOS, you may have noticed that once you upgrade your iOS device it is impossible to roll it back to a previous version. This way, proper testing requires a library of iOS devices on all the versions a potential customer might be using to ensure a great experience."}),"\n",(0,n.jsx)(i.p,{children:"Fortunately, Sauce Labs has a comprehensive cloud based continuous testing platform where we can scan our app for accessibility issues on nearly any device and operating system combination. In this blog we will walk through how easy it is to connect to an iOS device in the Sauce Labs cloud from the Evinced Mobile Flow Analyzer desktop client."}),"\n",(0,n.jsxs)(i.p,{children:["Sauce Labs makes this process very easy with their virtual USB feature. Here is description from the ",(0,n.jsx)(i.a,{href:"https://docs.saucelabs.com/mobile-apps/features/virtual-usb/",children:"Sauce Labs documentation"}),":"]}),"\n",(0,n.jsx)(i.p,{children:"Virtual USB (vUSB) is a mobile (app) debugging tool that simulates connecting a Sauce Labs real device directly to your local machine with a USB cable. It integrates into your development environment as if the device is connected directly to your workstation, meaning you can use your choice of homegrown development and testing tools to debug."}),"\n",(0,n.jsx)(i.p,{children:"To get started, we will need to download the vUSB client from the Sauce Labs website. Once we have that, we can navigate to the client directory and start the local vUSB server with the following command:"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.code,{children:"java -jar virtual-usb-client.jar server --datacenter US"})}),"\n",(0,n.jsx)(i.p,{children:"Make sure to double check the data center that is closest to you for the best performance. Once we have the server started, we can grab the device ID from our private iOS device. We can find this ID in the details section when choosing a device in the Sauce Labs UI:"}),"\n","\n",(0,n.jsx)(i.h2,{id:"mobile-flow-analyzer",children:"Mobile Flow Analyzer"}),"\n",(0,n.jsxs)(i.p,{children:["The Evinced ",(0,n.jsx)(i.a,{href:"https://www.evinced.com/products/flow-analyzer-for-mobile",children:"Mobile Flow Analyzer"})," allows you to connect to a mobile device right from your desktop and scan any native mobile applications for accessibility issues. Actionable reports can be created with a single click to make communicating with developer team members easier than ever."]}),"\n",(0,n.jsx)(i.p,{children:"Evinced uses advanced algorithms to create a single actionable report that is easy to digest. Best of all, access to the source code isn\u2019t required! There is no need to rebuild the app or modify it in any way to test it for accessibility issues."}),"\n",(0,n.jsx)(i.p,{children:"For Android, breadth of coverage is extremely important due to the large segmentation in the Android market (Samsung, Google, LG, HTC, OnePlus, Huawei, etc). All these manufacturers take the default Android OS image from Google and make it their own. This requires additional testing to make sure we give the best experience possible to all users."}),"\n",(0,n.jsx)(i.p,{children:"For iOS, once a device's OS is upgraded, it is impossible to roll it back to a previous version. Proper testing requires a library of iOS devices on all the supported versions, in order to ensure a great experience."}),"\n",(0,n.jsxs)(i.p,{children:["Sauce Labs lets you run accessibility scans on nearly ",(0,n.jsx)(i.a,{href:"https://saucelabs.com/platform/platform-configurator#/",children:"any device and operating system"})," combination."]}),"\n",(0,n.jsx)(i.h2,{id:"how-to-run-evinced-scans-on-sauce-labs-devices",children:"How to Run Evinced Scans on Sauce Labs Devices"}),"\n",(0,n.jsx)(i.p,{children:"Let's look at easy it is to connect to an iOS device from the Evinced Mobile Flow Analyzer desktop client."}),"\n",(0,n.jsxs)(i.p,{children:["For this integration, we will use ",(0,n.jsx)(i.a,{href:"https://docs.saucelabs.com/mobile-apps/features/virtual-usb/",children:"Virtual USB"}),":"]}),"\n",(0,n.jsx)(i.p,{children:"Virtual USB (vUSB) is a mobile debugging tool that simulates connecting a Sauce Labs real device directly to your local machine with a USB cable, allowing you to use your choice of homegrown development and testing tools to debug."}),"\n",(0,n.jsxs)(i.p,{children:["To get started, we will need to ",(0,n.jsx)(i.a,{href:"https://docs.saucelabs.com/mobile-apps/features/virtual-usb/#download-client",children:"download the vUSB client"})," from Sauce Labs. Then we navigate to the client directory and start the local vUSB server with the following ",(0,n.jsx)(i.a,{href:"https://docs.saucelabs.com/dev/cli/virtual-usb/",children:"command"}),":"]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.code,{children:"java -jar virtual-usb-client.jar server --datacenter US"})}),"\n",(0,n.jsx)(i.admonition,{type:"tip",children:(0,n.jsxs)(i.p,{children:["Double-check ",(0,n.jsx)(i.a,{href:"https://docs.saucelabs.com/basics/data-center-endpoints/",children:"the data center"})," closest to you for the best performance."]})}),"\n",(0,n.jsxs)(i.p,{children:["Once the server is running, grab the device ID from our private iOS device. This ID is located in the ",(0,n.jsx)(i.strong,{children:"Details"})," section when choosing a device:"]}),"\n",(0,n.jsx)("img",{src:(0,a.Ay)("img/integrations/evinced/evinced-1.webp"),alt:"Sauce Labs Device details screen, highlighting the device ID"}),"\n",(0,n.jsx)(i.p,{children:"Once we have the ID can use the following command in a new terminal tab:"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.code,{children:"java -jar virtual-usb-client.jar startSession --username $SAUCE_USERNAME --accessKey $SAUCE_ACCESS_KEY --deviceName iPhone_Device_ID"})}),"\n",(0,n.jsx)(i.p,{children:"This will start the device session and establish the virtual USB connection. The device is now available to your workstation just as if it were plugged in directly."}),"\n",(0,n.jsxs)(i.p,{children:["Now that we have the vUSB connection established, we can move to the Mobile Flow Analyzer for Mobile UI. Download the desktop client for Mac or Windows (",(0,n.jsx)(i.a,{href:"https://www.evinced.com/products/flow-analyzer-for-mobile",children:"trial here"}),") and then login. Select iOS and then choose your device from the dropdown."]}),"\n",(0,n.jsx)("img",{src:(0,a.Ay)("img/integrations/evinced/evinced-2.webp"),alt:"Evinced Flow Analyzer Device selection"}),"\n",(0,n.jsxs)(i.p,{children:["Select the Sauce Labs device, enter your Apple Developer Team ID, and click ",(0,n.jsx)(i.strong,{children:"Connect"}),". That's it! Start scanning the app for accessibility issues on any of the thousands of devices available from Sauce Labs."]}),"\n",(0,n.jsx)("img",{src:(0,a.Ay)("img/integrations/evinced/evinced-3.webp"),alt:"Evinced scan and Sauce Labs device open in separate browser windows, but in sync"}),"\n",(0,n.jsxs)(i.p,{children:["Check out the ",(0,n.jsx)(i.a,{href:"https://www.evinced.com/",children:"Evinced"})," and ",(0,n.jsx)(i.a,{href:"https://saucelabs.com/sign-up",children:"Sauce Labs"})," pages for more information on getting started!"]}),"\n",(0,n.jsxs)(i.p,{children:["This page was developed with the generous help of the Evinced team, from ",(0,n.jsx)(i.a,{href:"https://get-evinced.com/blog/evinced-flow-analyzer-for-mobile-sauce-labs/",children:"their own documentation"}),"."]})]})}function u(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>o,x:()=>c});var n=t(96540);const s={},a=n.createContext(s);function o(e){const i=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(a.Provider,{value:i},e.children)}}}]);