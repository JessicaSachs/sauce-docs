"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[49705],{94533:(e,n,t)=>{t.r(n),t.d(n,{Highlight:()=>d,assets:()=>a,contentTitle:()=>l,default:()=>x,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var s=t(74848),i=t(28453),r=t(86025);const o={id:"ipsec-vpn",title:"Using Sauce IPSec Proxy",sidebar_label:"Sauce IPSec Proxy"},l=void 0,c={id:"secure-connections/ipsec-vpn",title:"Using Sauce IPSec Proxy",description:"Enterprise Only",source:"@site/docs/secure-connections/ipsec-vpn.md",sourceDirName:"secure-connections",slug:"/secure-connections/ipsec-vpn",permalink:"/sauce-docs/pr-preview/pr-2907/secure-connections/ipsec-vpn",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/secure-connections/ipsec-vpn.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:172477197e4,frontMatter:{id:"ipsec-vpn",title:"Using Sauce IPSec Proxy",sidebar_label:"Sauce IPSec Proxy"},sidebar:"docs",previous:{title:"FAQ",permalink:"/sauce-docs/pr-preview/pr-2907/secure-connections/sauce-connect/faq"},next:{title:"Overview",permalink:"/sauce-docs/pr-preview/pr-2907/orchestrate"}},a={},d=({children:e,color:n})=>{const t={span:"span",...(0,i.R)()};return(0,s.jsx)(t.span,{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"},children:e})},u=[{value:"What You&#39;ll Learn",id:"what-youll-learn",level:2},{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Sauce IPSec Proxy Setup",id:"sauce-ipsec-proxy-setup",level:2},{value:"Public Real Devices",id:"public-real-devices",level:3},{value:"Network and Security",id:"network-and-security",level:2},{value:"Bandwidth Recommendations",id:"bandwidth-recommendations",level:3},{value:"Tunnel Gateway Security Features",id:"tunnel-gateway-security-features",level:3},{value:"Firewall Ports and Protocols",id:"firewall-ports-and-protocols",level:3},{value:"Self-Signed Certificates",id:"self-signed-certificates",level:3},{value:"Testing with Sauce IPSec Proxy Tunnels",id:"testing-with-sauce-ipsec-proxy-tunnels",level:2},{value:"Automated Testing",id:"automated-testing",level:3},{value:"Appium and Selenium Frameworks",id:"appium-and-selenium-frameworks",level:4},{value:"Espresso and XCUITest Frameworks",id:"espresso-and-xcuitest-frameworks",level:4},{value:"Live Testing",id:"live-testing",level:3},{value:"Cross Browser",id:"cross-browser",level:4},{value:"Mobile App",id:"mobile-app",level:4},{value:"Monitoring and Troubleshooting",id:"monitoring-and-troubleshooting",level:2},{value:"Additional Resources",id:"additional-resources",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("p",{children:(0,s.jsx)("span",{className:"sauceGreen",children:"Enterprise Only"})}),"\n","\n",(0,s.jsx)(n.p,{children:"Internet Protocol Security VPN (IPSec VPN) is a technology that connects two private networks securely over the public internet. If your organization has firewall rules that limit your ability to run tests on Sauce Labs, you can use Sauce IPSec Proxy to connect to Sauce Labs without exposing your organization's IT infrastructure to security risks."}),"\n",(0,s.jsx)(n.p,{children:"Sauce IPSec Proxy is an enterprise-grade IPSec VPN solution that provides a secure, static connection between apps hosted on your private network (or local machine) and devices on the Sauce Labs cloud."}),"\n",(0,s.jsx)(n.admonition,{title:"Add-on feature",type:"note",children:(0,s.jsx)(n.p,{children:"Sauce IPSec Proxy is available as an add-on for Enterprise plans only. If you want to upgrade your Enterprise plan to use Sauce IPSec Proxy, contact your Sauce Labs account executive."})}),"\n",(0,s.jsx)(n.h2,{id:"what-youll-learn",children:"What You'll Learn"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"How to get up and running with Sauce IPSec Proxy"}),"\n",(0,s.jsx)(n.li,{children:"Overview of Sauce IPSec Proxy network architecture"}),"\n",(0,s.jsx)(n.li,{children:"How to run tests using Sauce IPSec Proxy"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Sauce IPSec Proxy is an enterprise-only feature that must be configured by our Support Team prior to use. Contact your Sauce Labs Sales Engineer or Customer Success Manager to learn more about how this solution can meet your business needs."}),"\n",(0,s.jsxs)(n.li,{children:["Authorization to use your organization's Sauce IPSec Proxy tunnel. You can verify this by going to the ",(0,s.jsx)(n.strong,{children:"Tunnels"})," page, where you should see the tunnel name displayed. If you don't see it, contact the organization admin for your Sauce Labs account to request access."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"sauce-ipsec-proxy-setup",children:"Sauce IPSec Proxy Setup"}),"\n",(0,s.jsx)(n.p,{children:"As part of our initial Sauce IPSec Proxy tunnel setup and configuration on your network, we'll ask your organization to choose from two sharing settings:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Restricted"}),": Only organization admins can utilize Sauce IPSec Proxy tunnels"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Organization-wide"}),": All users in your organization can utilize Sauce IPSec Proxy tunnels"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Team-wide"}),": All users in a specific team can utilize Sauce IPSec Proxy tunnels"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"If you're an organization admin who would like to change your sharing settings, please reach out to our Support Team."}),"\n",(0,s.jsx)(n.h3,{id:"public-real-devices",children:"Public Real Devices"}),"\n",(0,s.jsxs)(n.p,{children:["To run tests on public real devices in the Sauce Labs cloud using Sauce IPSec Proxy, organization admins must set the ",(0,s.jsx)(n.strong,{children:"Enable Sauce Connect Proxy/IPSec VPN for Public Cloud Devices"})," option to ",(0,s.jsx)(n.strong,{children:"Enabled"}),". See ",(0,s.jsx)(n.a,{href:"/basics/acct-team-mgmt/org-settings",children:"Security Settings"})," for more information."]}),"\n",(0,s.jsx)(n.p,{children:"The organization admin will see a pop-up modal asking them to read and agree to our Risk Advisory regarding the use of public real devices on a trusted Sauce IPSec Proxy connection."}),"\n",(0,s.jsx)(n.h2,{id:"network-and-security",children:"Network and Security"}),"\n",(0,s.jsx)(n.p,{children:"The Sauce IPSec Proxy solution consists of a VPN connection and two IPSec tunnel gateways: one running on your network, and the other on Sauce Labs."}),"\n",(0,s.jsx)(n.p,{children:"This connection allows secure communication between the gateways, which provide rules for DNS resolution, routing, and security."}),"\n",(0,s.jsx)("img",{src:(0,r.A)("img/ipsec-vpn/ipsec-vpn-architecture.png"),alt:"Sauce IPSec Proxy Network Architecture"}),"\n",(0,s.jsx)(n.h3,{id:"bandwidth-recommendations",children:"Bandwidth Recommendations"}),"\n",(0,s.jsx)(n.p,{children:"Below are some general guidelines to ensure that your Sauce IPSec Proxy tunnels can support your desired number of concurrent sessions."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"We set up all Sauce IPSec Proxy customers with a redundant, High Availability (HA) tunnel pool with two tunnel gateways."})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Number of Concurrent Sessions"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Recommended Number of IPSec Tunnels"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Recommended Total Bandwidth"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"20"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"1"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"50Mbps"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"100"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"1"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"250Mbps"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"500"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"2"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"750Mbps"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"1,000"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"2"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"1.5Gbps"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"2,000"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"2"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"3Gbps"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"Bandwidth recommendations for testing depend on the number of pages downloaded by each test, and the approximate size of each page. To estimate your requirements, we recommend running 25-40 concurrent sessions through a proxy while observing network usage patterns. You should have enough bandwidth to download a page in 3-5 seconds."}),"\n",(0,s.jsx)(n.p,{children:"Multiple users can run different tests simultaneously through the same tunnel, as long as the number is within the threshold of your concurrency limits/allocations."}),"\n",(0,s.jsx)(n.h3,{id:"tunnel-gateway-security-features",children:"Tunnel Gateway Security Features"}),"\n",(0,s.jsx)(n.p,{children:"The Sauce Labs infrastructure is configured so that our virtual machines (VMs) and real devices running tests are fully, securely isolated from each other through traffic filtering. They are prohibited from cross-communicating. Sauce Labs VMs and real devices that are being accessed through your tunnel will only send traffic owned by your organization."}),"\n",(0,s.jsx)(n.p,{children:'The only exception for this rule is tunnel gateway VMs. While VMs and devices are allowed to connect to the internet, we also offer a "lockdown" feature that locks traffic down to that particular user\u2019s tunnels only.'}),"\n",(0,s.jsx)(n.p,{children:"Additionally, Sauce Labs only permits internal services necessary for allowlisting, such as monitoring services or firewall controllers, to communicate with VMs, real devices, and control plane services running on tunnel gateways. Each tunnel gateway VM is customized at the time of provisioning per your specifications and configured to direct all traffic via Sauce IPSec Proxy."}),"\n",(0,s.jsx)(n.p,{children:"Tunnel gateway firewalls restrict access so that only your pre-authorized test VMs can connect. Authorized test VMs include:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Test VMs that run jobs started by the Sauce IPSec Proxy tunnel owner"}),"\n",(0,s.jsx)(n.li,{children:"Test VMs that run jobs started by accounts with which the tunnel is shared"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"firewall-ports-and-protocols",children:"Firewall Ports and Protocols"}),"\n",(0,s.jsx)(n.p,{children:"The firewall allows the following ports and protocols through the Sauce IPSec Proxy connection:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Directions"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Protocols"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Inbound from customer network"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"BGP (TCP/179)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Inbound and Outbound"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"ICMP"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Outbound from Sauce"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"HTTP (TCP/80, TCP/8080), HTTPS (TCP/443, TCP/8443)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Outbound from Sauce"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"DNS (UDP/53, TCP/53, TCP/853)"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["To request additional ports and protocols to be opened, contact ",(0,s.jsx)(n.a,{href:"https://saucelabs.com/training-support",children:"Sauce Labs Support"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"self-signed-certificates",children:"Self-Signed Certificates"}),"\n",(0,s.jsx)(n.p,{children:"The tunnel gateway acts as a man-in-the-middle proxy, re-encrypting all SSL connections with Sauce Labs certificate by default. If your tests don't require access to servers with self-signed certificates, we strongly recommend disabling SSL re-encryption."}),"\n",(0,s.jsxs)(n.p,{children:["SSL re-encryption can be disabled for all domains or selected domains with ",(0,s.jsx)(n.code,{children:"no-ssl-bump-domains"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"WebSocket servers with self-signed certificates are not supported."}),"\n",(0,s.jsx)(n.h2,{id:"testing-with-sauce-ipsec-proxy-tunnels",children:"Testing with Sauce IPSec Proxy Tunnels"}),"\n",(0,s.jsx)(n.h3,{id:"automated-testing",children:"Automated Testing"}),"\n",(0,s.jsx)(n.p,{children:"Depending on the type of framework you're using and the device you're testing on, you'll need to include test script capabilities and/or CLI flags that point to your Sauce IPSec Proxy tunnel."}),"\n",(0,s.jsx)(n.h4,{id:"appium-and-selenium-frameworks",children:"Appium and Selenium Frameworks"}),"\n",(0,s.jsx)(n.p,{children:"In your test script, you'll need to:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Specify the ",(0,s.jsx)(n.a,{href:"/basics/data-center-endpoints",children:"data center endpoint"})," location of the device you're testing on. See the ",(0,s.jsx)(n.a,{href:"https://github.com/saucelabs-training",children:"Sauce Labs Training Repo"})," for examples in JavaScript, Java, Python, Ruby, and C#."]}),"\n",(0,s.jsxs)(n.li,{children:["Use the ",(0,s.jsx)(n.a,{href:"/dev/test-configuration-options#tunnelName",children:(0,s.jsx)(n.code,{children:"tunnelName"})})," capability to specify the name of your organization's Sauce IPSec Proxy tunnel, and then set the ",(0,s.jsx)(n.a,{href:"/dev/test-configuration-options#tunnelOwner",children:(0,s.jsx)(n.code,{children:"tunnelOwner"})})," capability to the Sauce Labs username of your organization admin."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",metastring:'title="Java example"',children:'MutableCapabilities caps = new MutableCapabilities();\ncaps.setCapability("tunnelName", "$TUNNEL_NAME");\ncaps.setCapability("tunnelOwner","$SAUCE_USERNAME");\n'})}),"\n",(0,s.jsx)(n.h4,{id:"espresso-and-xcuitest-frameworks",children:"Espresso and XCUITest Frameworks"}),"\n",(0,s.jsxs)(n.p,{children:["If you're working in Espresso or XCUITest, you'll need to use ",(0,s.jsx)(n.a,{href:"/dev/cli/saucectl/",children:(0,s.jsx)(n.code,{children:"saucectl"})})," to run all tests on Sauce Labs."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Specify the ",(0,s.jsx)(n.a,{href:"/basics/data-center-endpoints",children:"data center"})," location of the device you're testing on. There are two ways to do this:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Specify the ",(0,s.jsx)(n.code,{children:"region"})," in your YAML configuration file (see ",(0,s.jsxs)(n.a,{href:"/mobile-apps/automated-testing/espresso-xcuitest/espresso/#region",children:["Espresso config > ",(0,s.jsx)(n.code,{children:"region"})]})," or ",(0,s.jsxs)(n.a,{href:"/mobile-apps/automated-testing/espresso-xcuitest/xcuitest/#region",children:["XCUITest config > ",(0,s.jsx)(n.code,{children:"region"})]}),"); or"]}),"\n",(0,s.jsxs)(n.li,{children:["Use the ",(0,s.jsx)(n.a,{href:"/dev/cli/saucectl/run/#--region",children:(0,s.jsx)(n.code,{children:"--region"})})," flag in conjunction with the ",(0,s.jsx)(n.code,{children:"saucectl"})," run command at test runtime.","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"saucectl run --region eu-central-1\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Next, you'll need to assign your Sauce IPSec Proxy tunnel to your job. There are two ways to do this:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Specify the applicable ",(0,s.jsx)(n.a,{href:"/mobile-apps/automated-testing/espresso-xcuitest/espresso/#tunnel",children:(0,s.jsx)(n.code,{children:"tunnel"})})," settings in your YAML configuration file; or"]}),"\n",(0,s.jsxs)(n.li,{children:["Use the ",(0,s.jsx)(n.a,{href:"/dev/cli/saucectl/run/#--tunnel-name",children:(0,s.jsx)(n.code,{children:"--tunnel-name"})})," and ",(0,s.jsx)(n.a,{href:"/dev/cli/saucectl/run/#--tunnel-owner",children:(0,s.jsx)(n.code,{children:"--tunnel-owner"})})," flags in conjunction with the ",(0,s.jsx)(n.code,{children:"saucectl"})," run command at test runtime.","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"saucectl run --tunnel-name not-my-tunnel --tunnel-owner another.sauce.username\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"live-testing",children:"Live Testing"}),"\n",(0,s.jsx)(n.h4,{id:"cross-browser",children:"Cross Browser"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.strong,{children:"Live"})," > ",(0,s.jsx)(n.strong,{children:"Cross Browser"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["In the ",(0,s.jsx)(n.strong,{children:"Sauce Connect Proxy"})," dropdown, select the name of your Sauce IPSec Proxy tunnel."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"mobile-app",children:"Mobile App"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.strong,{children:"Live"})," > ",(0,s.jsx)(n.strong,{children:"Mobile App"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["From the app selection page, hover your mouse over your app and click ",(0,s.jsx)(n.strong,{children:"Choose Device"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["In the ",(0,s.jsx)(n.strong,{children:"Sauce Connect Proxy"})," dropdown, select the name of your Sauce IPSec Proxy tunnel."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"To ensure compliance with your company's settings and network policy, we recommend checking with your organization admin before running any mobile app tests over a Sauce IPSec Proxy connection."})}),"\n",(0,s.jsx)(n.h2,{id:"monitoring-and-troubleshooting",children:"Monitoring and Troubleshooting"}),"\n",(0,s.jsx)(n.p,{children:"To monitor tunnel stability, we recommend pinging the tunnel gateway or checking the status of the VPN connection from the IPSec gateway itself."}),"\n",(0,s.jsx)(n.h2,{id:"additional-resources",children:"Additional Resources"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://saucelabs.com/resources/white-papers/overview-of-sauce-labs-security-processes",children:"Overview of Sauce Labs Security Processes"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://saucelabs.com/resources/white-papers/sauce-connect-proxy-security-overview",children:"Sauce Connect Proxy Security Overview"})}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var s=t(96540);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);