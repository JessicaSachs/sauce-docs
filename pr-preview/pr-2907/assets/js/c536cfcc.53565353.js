"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[85165],{73394:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>a});var i=n(74848),r=n(28453),s=n(86025);const o={id:"network-throttling",title:"Network Throttling",sidebar_label:"Network Throttling"},l=void 0,d={id:"mobile-apps/features/network-throttling",title:"Network Throttling",description:"Real Devices Only",source:"@site/docs/mobile-apps/features/network-throttling.md",sourceDirName:"mobile-apps/features",slug:"/mobile-apps/features/network-throttling",permalink:"/sauce-docs/pr-preview/pr-2907/mobile-apps/features/network-throttling",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/mobile-apps/features/network-throttling.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:172477197e4,frontMatter:{id:"network-throttling",title:"Network Throttling",sidebar_label:"Network Throttling"},sidebar:"docs",previous:{title:"Appium Inspector",permalink:"/sauce-docs/pr-preview/pr-2907/mobile-apps/features/appium-inspector"},next:{title:"Biometric Authentication",permalink:"/sauce-docs/pr-preview/pr-2907/mobile-apps/features/biometric-authentication"}},c={},a=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Supported Network Conditions",id:"supported-network-conditions",level:2},{value:"Predefined Network Profiles",id:"predefined-network-profiles",level:2},{value:"Automated Testing",id:"automated-testing",level:2},{value:"Appium - Capability",id:"appium---capability",level:3},{value:"Appium - executeScript",id:"appium---executescript",level:3},{value:"Live Testing",id:"live-testing",level:2},{value:"Upcoming",id:"upcoming",level:2},{value:"Limitations",id:"limitations",level:2},{value:"More Information",id:"more-information",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{children:(0,i.jsx)("small",{children:(0,i.jsx)("span",{className:"sauceGreen",children:"Real Devices Only"})})}),"\n",(0,i.jsx)(t.p,{children:"With Sauce Labs Network Throttling, you can simulate and reproduce different network scenarios on iOS and Android, ensuring that your mobile application performs optimally under\na huge variety of network conditions. From replicating slow network speeds to mimicking offline states, high latency, or connection disruptions,\nthis feature allows you to identify network-related performance issues early in your pipeline."}),"\n",(0,i.jsxs)(t.p,{children:["In combination with our ",(0,i.jsx)(t.a,{href:"https://docs.saucelabs.com/mobile-apps/features/network-capture/",children:"Network Traffic Capture"})," functionality to record network traffic,\nyou have the tools to replicate and troubleshoot any performance concerns stemming from network operations."]}),"\n",(0,i.jsx)(t.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["A Sauce Labs paid account (",(0,i.jsx)(t.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"}),")"]}),"\n",(0,i.jsx)(t.li,{children:"Access to our Real Devices (iOS/Android)"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"supported-network-conditions",children:"Supported Network Conditions"}),"\n",(0,i.jsx)(t.p,{children:"The following table shows the allowed range of supported network condition parameters:"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Network Condition"}),(0,i.jsx)("th",{children:"Parameter"}),(0,i.jsx)("th",{children:"Range"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Download speed"}),(0,i.jsx)("td",{children:"downloadSpeed"}),(0,i.jsx)("td",{children:"0 - 50000 kbps"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Upload speed"}),(0,i.jsx)("td",{children:"uploadSpeed"}),(0,i.jsx)("td",{children:"0 - 50000 kbps"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Latency"}),(0,i.jsx)("td",{children:"latency"}),(0,i.jsx)("td",{children:"0 - 3000 ms"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Packet loss"}),(0,i.jsx)("td",{children:"loss"}),(0,i.jsx)("td",{children:"0 - 100 %"})]})]})]}),"\n",(0,i.jsx)(t.p,{children:"Only specified parameters will undergo conditioning, allowing for flexibility in customizing network simulations to your precise testing needs."}),"\n",(0,i.jsx)(t.h2,{id:"predefined-network-profiles",children:"Predefined Network Profiles"}),"\n",(0,i.jsx)(t.p,{children:"The following table shows the predefined network profiles along with their corresponding parameter values supported on Sauce Labs:"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Network Profile"}),(0,i.jsx)("th",{children:"ID"}),(0,i.jsx)("th",{children:"Download Speed (kbps)"}),(0,i.jsx)("th",{children:"Upload Speed (kbps)"}),(0,i.jsx)("th",{children:"Latency (ms)"}),(0,i.jsx)("th",{children:"Packet Loss (%)"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"No Throttling"}),(0,i.jsx)("td",{children:"no-throttling"}),(0,i.jsx)("td",{children:"-"}),(0,i.jsx)("td",{children:"-"}),(0,i.jsx)("td",{children:"-"}),(0,i.jsx)("td",{children:"-"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"No Network"}),(0,i.jsx)("td",{children:"no-network"}),(0,i.jsx)("td",{children:"0"}),(0,i.jsx)("td",{children:"0"}),(0,i.jsx)("td",{children:"0"}),(0,i.jsx)("td",{children:"100"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"2G Packet Loss"}),(0,i.jsx)("td",{children:"2G-packet-loss"}),(0,i.jsx)("td",{children:"100"}),(0,i.jsx)("td",{children:"50"}),(0,i.jsx)("td",{children:"500"}),(0,i.jsx)("td",{children:"10"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"2G"}),(0,i.jsx)("td",{children:"2G"}),(0,i.jsx)("td",{children:"200"}),(0,i.jsx)("td",{children:"100"}),(0,i.jsx)("td",{children:"300"}),(0,i.jsx)("td",{children:"1"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"3G Slow"}),(0,i.jsx)("td",{children:"3G-slow"}),(0,i.jsx)("td",{children:"500"}),(0,i.jsx)("td",{children:"250"}),(0,i.jsx)("td",{children:"200"}),(0,i.jsx)("td",{children:"1"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"3G Fast"}),(0,i.jsx)("td",{children:"3G-fast"}),(0,i.jsx)("td",{children:"7000"}),(0,i.jsx)("td",{children:"2500"}),(0,i.jsx)("td",{children:"100"}),(0,i.jsx)("td",{children:"-"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"4G Slow"}),(0,i.jsx)("td",{children:"4G-slow"}),(0,i.jsx)("td",{children:"8000"}),(0,i.jsx)("td",{children:"4000"}),(0,i.jsx)("td",{children:"100"}),(0,i.jsx)("td",{children:"-"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"4G Fast"}),(0,i.jsx)("td",{children:"4G-fast"}),(0,i.jsx)("td",{children:"25000"}),(0,i.jsx)("td",{children:"15000"}),(0,i.jsx)("td",{children:"30"}),(0,i.jsx)("td",{children:"-"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"automated-testing",children:"Automated Testing"}),"\n",(0,i.jsx)(t.h3,{id:"appium---capability",children:"Appium - Capability"}),"\n",(0,i.jsxs)(t.p,{children:["To use the Sauce Labs Network Throttling feature in your automated Appium test, you can add the Sauce-specific capability\n",(0,i.jsx)(t.a,{href:"https://docs.saucelabs.com/dev/test-configuration-options/#networkconditions",children:"networkConditions"})," to provide custom network conditions for\nthe entire session.\nAlternatively, you can use the Sauce-specific capability ",(0,i.jsx)(t.a,{href:"https://docs.saucelabs.com/dev/test-configuration-options/#networkprofile",children:"networkProfile"}),"\nto apply one of the predefined network profiles to your session."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:'MutableCapabilities capabilities = new MutableCapabilities();\n//...\nMutableCapabilities sauceOptions = new MutableCapabilities();\n\n// network conditions\nsauceOptions.setCapability("networkConditions", ImmutableMap.of(\n    "downloadSpeed", 5000,\n    "uploadSpeed", 3000,\n    "latency", 200,\n    "loss", 2,\n));\n\n// OR\n\n// network profile\nsauceOptions.setCapability("networkProfile", "2G");\n        \ncapabilities.setCapability("sauce:options", sauceOptions);\n'})}),"\n",(0,i.jsx)(t.h3,{id:"appium---executescript",children:"Appium - executeScript"}),"\n",(0,i.jsxs)(t.p,{children:["To change your desired network conditions dynamically any time during your automated Appium test, use our Sauce-specific scripts\n",(0,i.jsx)(t.a,{href:"/dev/test-configuration-options/#sauce-network-conditions",children:"sauce: network-conditions"})," and ",(0,i.jsx)(t.a,{href:"/dev/test-configuration-options/#sauce-network-profile",children:"sauce: network-profile"})," with\n",(0,i.jsx)(t.a,{href:"https://appium.io/docs/en/2.0/guides/execute-methods/",children:"Appium's Execute Script"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",metastring:'title="Dynamically set Network Conditions"',children:'driver.executeScript("sauce: network-conditions", ImmutableMap.of(\n    "downloadSpeed", 5000,\n    "uploadSpeed", 3000,\n    "latency", 200,\n    "loss", 2,\n));\n'})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",metastring:'title="Dynamically set a Network Profile"',children:'driver.executeScript("sauce: network-profile", "4G-fast");\n'})}),"\n",(0,i.jsxs)(t.p,{children:["To disable network throttling, use the predefined network profile ",(0,i.jsx)(t.code,{children:"no-throttling"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:'driver.executeScript("sauce: network-profile", "no-throttling");\n'})}),"\n",(0,i.jsx)(t.h2,{id:"live-testing",children:"Live Testing"}),"\n",(0,i.jsx)(t.p,{children:"Apply network throttling dynamically to your manual Live tests by selecting a predefined profile or by providing network conditions."}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["In the live test window, in the left toolbar, click ",(0,i.jsx)(t.strong,{children:"Throttle Network"})," to open the network throttling tool."]}),"\n"]}),"\n",(0,i.jsx)("img",{src:(0,s.A)("img/mobile-apps/throttle-network-1.png"),alt:"Throttle Network tool",width:"650"}),"\n",(0,i.jsxs)(t.ol,{start:"2",children:["\n",(0,i.jsx)(t.li,{children:"Select a predefined profile from the dropdown to start the network throttling."}),"\n"]}),"\n",(0,i.jsx)("img",{src:(0,s.A)("img/mobile-apps/throttle-network-2.png"),alt:"Throttle Network profile selection",width:"650"}),"\n",(0,i.jsxs)(t.p,{children:["An active network throttling is indicated by the ",(0,i.jsx)(t.strong,{children:"pulsing red dot"})," on the top left of the ",(0,i.jsx)(t.strong,{children:"Throttle Network"})," tool."]}),"\n",(0,i.jsx)("img",{src:(0,s.A)("img/mobile-apps/throttle-network-3.png"),alt:"Throttle Network profile selection",width:"650"}),"\n",(0,i.jsxs)(t.ol,{start:"3",children:["\n",(0,i.jsxs)(t.li,{children:["Click on the ",(0,i.jsx)(t.strong,{children:"pulsing red dot"})," to ",(0,i.jsx)(t.strong,{children:"pause"})," the network throttling. A paused throttling is indicated by the ",(0,i.jsx)(t.strong,{children:"pause icon"}),"."]}),"\n"]}),"\n",(0,i.jsx)("img",{src:(0,s.A)("img/mobile-apps/throttle-network-4.png"),alt:"Throttle Network profile selection",width:"650"}),"\n",(0,i.jsx)(t.h2,{id:"upcoming",children:"Upcoming"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Apply network throttling to your native Espresso and XCUITest tests"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"limitations",children:"Limitations"}),"\n",(0,i.jsx)(t.admonition,{title:"Limitations",type:"note",children:(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"iOS network throttling is supported on iOS/iPadOS 14.0 and above."}),"\n",(0,i.jsx)(t.li,{children:"Android network throttling is supported on Android 10 and above."}),"\n"]})}),"\n",(0,i.jsx)(t.h2,{id:"more-information",children:"More Information"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Use ",(0,i.jsx)(t.a,{href:"https://docs.saucelabs.com/mobile-apps/features/network-capture/",children:"Network Capture"})," to debug the failures in the app."]}),"\n",(0,i.jsxs)(t.li,{children:["Check out the ",(0,i.jsx)(t.a,{href:"https://github.com/saucelabs-training/demo-java/tree/main/appium/appium-app/appium-app-examples/src/test/java/com/examples/network_throttling",children:"Java Appium examples"})," for iOS and Android."]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var i=n(96540);const r={},s=i.createContext(r);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);