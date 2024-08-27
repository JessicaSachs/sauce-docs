"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[23683],{79305:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var r=t(74848),s=t(28453),i=t(86025),o=t(11470),c=t(19365);const l={id:"system-requirements",title:"Sauce Connect Proxy System and Network Requirements",sidebar_label:"System and Network Requirements"},a=void 0,d={id:"secure-connections/sauce-connect/system-requirements",title:"Sauce Connect Proxy System and Network Requirements",description:"Sauce Connect Proxy system requirements vary, depending on the number of parallel tests you plan to run.",source:"@site/docs/secure-connections/sauce-connect/system-requirements.md",sourceDirName:"secure-connections/sauce-connect",slug:"/secure-connections/sauce-connect/system-requirements",permalink:"/sauce-docs/pr-preview/pr-2907/secure-connections/sauce-connect/system-requirements",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/secure-connections/sauce-connect/system-requirements.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:172477197e4,frontMatter:{id:"system-requirements",title:"Sauce Connect Proxy System and Network Requirements",sidebar_label:"System and Network Requirements"},sidebar:"docs",previous:{title:"Quickstart",permalink:"/sauce-docs/pr-preview/pr-2907/secure-connections/sauce-connect/quickstart"},next:{title:"Basic Setup",permalink:"/sauce-docs/pr-preview/pr-2907/secure-connections/sauce-connect/setup-configuration/basic-setup"}},u={},h=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Supported Operating Systems",id:"supported-operating-systems",level:2},{value:"Sauce Connect v4.x.x",id:"sauce-connect-v4xx",level:3},{value:"Verifying Sauce Connect Network Routes on Your Host Machine",id:"verifying-sauce-connect-network-routes-on-your-host-machine",level:2},{value:"Configuring Your System to Use Sauce Connect",id:"configuring-your-system-to-use-sauce-connect",level:2},{value:"Amazon Web Services (AWS)",id:"amazon-web-services-aws",level:3},{value:"Google Compute Engine (GCE)",id:"google-compute-engine-gce",level:3},{value:"Microsoft Azure",id:"microsoft-azure",level:3},{value:"Optimizing the Sauce Connect Proxy Performance",id:"optimizing-the-sauce-connect-proxy-performance",level:2},{value:"Setting Up Sauce Connect on Your Test Device Network",id:"setting-up-sauce-connect-on-your-test-device-network",level:2},{value:"Configuring Your Network to Use Sauce Connect",id:"configuring-your-network-to-use-sauce-connect",level:2},{value:"Firewall Restrictions",id:"firewall-restrictions",level:3},{value:"Allowlisting for Restricted Networks",id:"allowlisting-for-restricted-networks",level:3},{value:"REST API Endpoints",id:"rest-api-endpoints",level:3},{value:"Sauce Connect Tunnel Service Domains",id:"sauce-connect-tunnel-service-domains",level:4},{value:"Transport Layer Security (TLS) Requirements",id:"transport-layer-security-tls-requirements",level:2},{value:"Certificate Management",id:"certificate-management",level:2}];function x(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Sauce Connect Proxy system requirements vary, depending on the number of parallel tests you plan to run."}),"\n",(0,r.jsx)(n.p,{children:"Keep in mind that these are guidelines. Most environments have their own workload requirements for optimal performance. Test and profile your own environment using these recommendations as a baseline."}),"\n",(0,r.jsx)(n.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Minimum 2 core x 8 GB Machine."}),"\n",(0,r.jsxs)(n.li,{children:["We recommend using the ",(0,r.jsx)(n.a,{href:"https://curl.haxx.se/download.html",children:"cURL command line"})," or an equivalent tool to ensure that any error messages you receive are precise and actionable. If you're not familiar with the tool, ",(0,r.jsx)(n.a,{href:"https://curl.se/docs",children:"review their docs here"})," and then install cURL on your local machine."]}),"\n",(0,r.jsxs)(n.li,{children:["For macOS and other Unix-based systems, set your ",(0,r.jsx)(n.a,{href:"https://www.tecmint.com/increase-set-open-file-limits-in-linux/",children:"open file limit"})," to at least 64000. See ",(0,r.jsx)(n.a,{href:"/secure-connections/sauce-connect/faq/#what-are-the-optimal-open-file-settings",children:"What are the optimal open file settings?"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"supported-operating-systems",children:"Supported Operating Systems"}),"\n",(0,r.jsx)(n.h3,{id:"sauce-connect-v4xx",children:"Sauce Connect v4.x.x"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:"Name"})}),(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:"Value"})}),(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:"CPU Arch"})}),(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:"Notes"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Linux"}),(0,r.jsxs)("td",{children:["Ubuntu 18.04 or higher\n",(0,r.jsx)("p",{children:"Debian 9 or higher"}),"\n",(0,r.jsx)("p",{children:"CentOS/RHEL-7 or higher"}),"\n",(0,r.jsx)("p",{children:"SUSE Linux Enterprise 15.0 and higher"})]}),(0,r.jsxs)("td",{children:["x86_64",(0,r.jsx)("br",{}),"arm64"]}),(0,r.jsx)("td",{children:"Unsupported OSes may still be able to run Sauce Connect, but they've not been tested for versions 4.8.x and higher."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"macOS"}),(0,r.jsx)("td",{children:"macOS 10.13 (High Sierra) and higher"}),(0,r.jsx)("td",{children:"x86_64"}),(0,r.jsx)("td",{})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Windows"}),(0,r.jsx)("td",{children:"Windows 10 and higher"}),(0,r.jsx)("td",{children:"x86"}),(0,r.jsx)("td",{})]})]}),"\n",(0,r.jsxs)(n.admonition,{title:"macOS Catalina 10.15+ compatibility",type:"note",children:[(0,r.jsx)(n.p,{children:"Enable your Mac to allow apps from the App Store and identified developers."}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Go to ",(0,r.jsx)(n.strong,{children:"System Preferences"})," > ",(0,r.jsx)(n.strong,{children:"Security & Privacy"})," > ",(0,r.jsx)(n.strong,{children:"General"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Under ",(0,r.jsx)(n.strong,{children:"Allow apps downloaded from"}),", select the option ",(0,r.jsx)(n.strong,{children:"App Store and identified developers"}),"."]}),"\n"]})]}),"\n",(0,r.jsx)(n.h2,{id:"verifying-sauce-connect-network-routes-on-your-host-machine",children:"Verifying Sauce Connect Network Routes on Your Host Machine"}),"\n",(0,r.jsx)(n.p,{children:"As an important step prior to downloading Sauce Connect Proxy, you or your systems administrator will need to verify that Sauce Connect Proxy can make the required network requests."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Log into the machine that will be hosting your Sauce Connect Proxy tunnels. This is the machine where you'll eventually be placing and running the downloaded Sauce Connect Binary."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Use cURL (or equivalent tool) to reach your Site Under Test. If you are relying on API to support a website or mobile app, you can cURL that as well. You should get a ",(0,r.jsx)(n.code,{children:"200 OK HTTP"})," response. If you do NOT see a ",(0,r.jsx)(n.code,{children:"200 OK HTTP"})," response, then Sauce Connect Proxy will not be able to reach it either."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Use cURL (or equivalent tool) to reach the below URLs, as needed. For example:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://api.us-west-1.saucelabs.com/rest/v1",children:"https://api.us-west-1.saucelabs.com/rest/v1"})," for US-WEST region"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://api.eu-central-1.saucelabs.com/",children:"https://api.eu-central-1.saucelabs.com"})," for EU-Central region"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["If you can get a ",(0,r.jsx)(n.code,{children:"200 OK"})," response from all URLs above, you are ready to start Sauce Connect!\nAs an alternative, you can just try to ",(0,r.jsx)(n.a,{href:"/secure-connections/sauce-connect/setup-configuration/basic-setup/#validating-your-basic-setup",children:"start a tunnel"}),"\nand check the console output."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"configuring-your-system-to-use-sauce-connect",children:"Configuring Your System to Use Sauce Connect"}),"\n",(0,r.jsx)(n.p,{children:"Select a cloud provider from the tables below to view the minimum and recommended system requirements:"}),"\n",(0,r.jsx)(n.admonition,{title:"These are general recommendations",type:"note",children:(0,r.jsx)(n.p,{children:"Actual system requirements will depend on the number of parallel tests, and amount of data transferred with each test."})}),"\n",(0,r.jsx)(n.h3,{id:"amazon-web-services-aws",children:"Amazon Web Services (AWS)"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:"Machine Type"})}),(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:"Memory"})}),(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:"Processor"})}),(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:"Bandwidth"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Minimum"}),(0,r.jsx)("td",{children:"EC2 m4.large"}),(0,r.jsx)("td",{children:"8 GB"}),(0,r.jsx)("td",{children:"2"}),(0,r.jsx)("td",{children:"450 Mbps"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Recommended"}),(0,r.jsx)("td",{children:"EC2 m4.xlarge"}),(0,r.jsx)("td",{children:"16 GB"}),(0,r.jsx)("td",{children:"4"}),(0,r.jsx)("td",{children:"750 Mbps"})]})]}),"\n",(0,r.jsx)(n.h3,{id:"google-compute-engine-gce",children:"Google Compute Engine (GCE)"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:"Machine Type"})}),(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:"Memory"})}),(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:"Processor"})}),(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:"Bandwidth"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Minimum"}),(0,r.jsx)("td",{children:"GCE n1-standard-2"}),(0,r.jsx)("td",{children:"7.5 GB"}),(0,r.jsx)("td",{children:"2"}),(0,r.jsx)("td",{children:"450 Mbps"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Recommended"}),(0,r.jsx)("td",{children:"GCE n1-standard-4"}),(0,r.jsx)("td",{children:"15 GB"}),(0,r.jsx)("td",{children:"4"}),(0,r.jsx)("td",{children:"750 Mbps"})]})]}),"\n",(0,r.jsx)(n.h3,{id:"microsoft-azure",children:"Microsoft Azure"}),"\n",(0,r.jsx)(n.p,{children:"The below recommendations are for Linux VMs."}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:"Machine Type"})}),(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:"Memory"})}),(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:"Processor"})}),(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:"Bandwidth"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Minimum"}),(0,r.jsx)("td",{children:"Standard_D2a_v4"}),(0,r.jsx)("td",{children:"8 GiB"}),(0,r.jsx)("td",{children:"2"}),(0,r.jsx)("td",{children:"2000 Mbps"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Recommended"}),(0,r.jsx)("td",{children:"Standard_D4a_v4"}),(0,r.jsx)("td",{children:"16 GiB"}),(0,r.jsx)("td",{children:"4"}),(0,r.jsx)("td",{children:"4000 Mbps"})]})]}),"\n",(0,r.jsx)(n.h2,{id:"optimizing-the-sauce-connect-proxy-performance",children:"Optimizing the Sauce Connect Proxy Performance"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["If you're running ",(0,r.jsx)(n.strong,{children:"50 or more parallel tests"}),", we recommend a minimum network bandwidth of 450 Mbps to support the high volume of network traffic."]}),"\n",(0,r.jsxs)(n.li,{children:["If you're running ",(0,r.jsx)(n.strong,{children:"100 or more parallel tests"}),", we recommend a minimum network bandwidth of 750 Mbps to support the high volume of network traffic."]}),"\n",(0,r.jsxs)(n.li,{children:["For best performance, stability, and security, we recommend using a dedicated server for each tunnel (see ",(0,r.jsx)(n.a,{href:"/secure-connections/sauce-connect/security-authentication",children:"Sauce Connect Proxy Network Security"}),")."]}),"\n",(0,r.jsxs)(n.li,{children:["If you're running ",(0,r.jsx)(n.strong,{children:"60 or more parallel tests"}),", we recommend launching more than one tunnel and using the ",(0,r.jsx)(n.a,{href:"/secure-connections/sauce-connect/setup-configuration/high-availability",children:"High Availability Sauce Connect Proxy Setup"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"These are recommendations for the number of Sauce Connect tunnels by number of tests running in parallel:"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:"Parallel Tests"})}),(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:"Recommended SC Tunnels"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"0-59"}),(0,r.jsx)("td",{children:"1"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"60-119"}),(0,r.jsx)("td",{children:"2"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"120-199"}),(0,r.jsx)("td",{children:"3"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"200-299"}),(0,r.jsx)("td",{children:"4-5"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"400-599"}),(0,r.jsx)("td",{children:"6-7"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"600-799"}),(0,r.jsx)("td",{children:"8-9"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"800+"}),(0,r.jsx)("td",{children:"10"})]})]}),"\n",(0,r.jsx)(n.h2,{id:"setting-up-sauce-connect-on-your-test-device-network",children:"Setting Up Sauce Connect on Your Test Device Network"}),"\n",(0,r.jsx)(n.p,{children:"Sauce Connect Proxy must be set up on the same network as your test devices. It does not, however, need to be set up on the same machine as the website or app you're testing."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/secure-connections/sauce-connect/troubleshooting",children:"What Not to Do: Common Mistakes in Sauce Connect Proxy Network Configurations"})," illustrates some examples of network architectures in which Sauce Connect will not be able to create a tunnel or will be too slow to carry out effective testing."]}),"\n",(0,r.jsx)(n.h2,{id:"configuring-your-network-to-use-sauce-connect",children:"Configuring Your Network to Use Sauce Connect"}),"\n",(0,r.jsx)(n.h3,{id:"firewall-restrictions",children:"Firewall Restrictions"}),"\n",(0,r.jsx)(n.p,{children:"Before getting started with Sauce Connect, we recommend checking with your network administrator about updating firewall or proxy settings on your organization's network. Firewall restrictions may interfere with testing."}),"\n",(0,r.jsx)(n.p,{children:"During Sauce Connect Proxy tunnel startup, the Sauce Connect client that runs on your network needs to make three types of outbound connections:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"To request a new Sauce Connect tunnel: Communication to the Sauce Labs REST API tunnels endpoint."}),"\n",(0,r.jsx)(n.li,{children:"To validate the REST API certificate: Communication to third-party web sites of Certificate Authorities."}),"\n",(0,r.jsx)(n.li,{children:"To establish the tunnel: Communication to Sauce Connect Tunnel VMs in the Sauce Labs cloud."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"When your tests are running through a Sauce Connect tunnel, the client on your network needs to make two types of outbound connections:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"To pass status information: Communication to the Sauce Labs REST API tunnels endpoint."}),"\n",(0,r.jsx)(n.li,{children:"To connect with the site or app under test: Communication to the sites or apps you specify in your tests."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"allowlisting-for-restricted-networks",children:"Allowlisting for Restricted Networks"}),"\n",(0,r.jsxs)(n.p,{children:["If you're testing in a restricted network setting, you may need to allowlist the Sauce Labs domains below to allow outbound communication to Sauce Labs Selenium and Appium endpoints. Allowlisting for inbound traffic coming into your network is not necessary. To confirm your setup is successful, try running a test using the ",(0,r.jsx)(n.a,{href:"/secure-connections/sauce-connect/setup-configuration/basic-setup",children:"basic setup"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["You need to use the set of domains for your corresponding Sauce Labs data center: US data center (US West 1) or European data center (EU Central 1). The data center you're connected to is indicated in your navigation.",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)("img",{src:(0,i.A)("img/sauce-connect/dc-ui.png"),alt:"Sauce Connect data center",width:"450"}),"\n",(0,r.jsxs)(n.p,{children:["For more information on our data centers and how to choose the right one for you, see ",(0,r.jsx)(n.a,{href:"/basics/data-center-endpoints",children:"Data Center Endpoints"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"rest-api-endpoints",children:"REST API Endpoints"}),"\n",(0,r.jsxs)(n.p,{children:["The Sauce Labs REST API is a requirement for using Sauce Connect Proxy. Select your relevant ",(0,r.jsx)(n.a,{href:"/basics/data-center-endpoints",children:"Data Center"}),":"]}),"\n",(0,r.jsxs)(o.A,{groupId:"dc-url",defaultValue:"US-West-1",values:[{label:"US-West-1",value:"US-West-1"},{label:"EU-Central-1",value:"EU-Central-1"}],children:[(0,r.jsx)(c.A,{value:"US-West-1",children:(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Virtual Device Cloud/Real Device Cloud + Sauce Connect"})})}),(0,r.jsx)(n.tbody,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"https://api.us-west-1.saucelabs.com/rest/v1"})})})})]})}),(0,r.jsx)(c.A,{value:"EU-Central-1",children:(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Virtual Device Cloud/Real Device Cloud + Sauce Connect"})})}),(0,r.jsx)(n.tbody,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"https://api.eu-central-1.saucelabs.com/rest/v1"})})})})]})})]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.h4,{id:"sauce-connect-tunnel-service-domains",children:"Sauce Connect Tunnel Service Domains"}),"\n",(0,r.jsxs)(n.p,{children:["The following domains must be allowlisted for outbound communication from you network in order to make connections to Sauce Connect tunnels. Select your relevant ",(0,r.jsx)(n.a,{href:"/basics/data-center-endpoints",children:"Data Center"}),":"]}),"\n",(0,r.jsxs)(o.A,{groupId:"dc-url",defaultValue:"US-West-1",values:[{label:"US-West-1",value:"US-West-1"},{label:"EU-Central-1",value:"EU-Central-1"}],children:[(0,r.jsx)(c.A,{value:"US-West-1",children:(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Virtual Device Cloud/Real Device Cloud + Sauce Connect"})})}),(0,r.jsx)(n.tbody,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"*.miso.saucelabs.com"})})})})]})}),(0,r.jsx)(c.A,{value:"EU-Central-1",children:(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Virtual Device Cloud/Real Device Cloud + Sauce Connect"})})}),(0,r.jsx)(n.tbody,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"*.eu-central-1.miso.saucelabs.com"})})})})]})})]}),"\n",(0,r.jsx)(n.admonition,{title:"Recommended Wildcard Allowlisting",type:"note",children:(0,r.jsxs)(n.p,{children:["For US-West-1 (Virtual Device Cloud/Real Device Cloud + Sauce Connect): ",(0,r.jsx)(n.code,{children:"*.miso.saucelabs.com"})]})}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.h2,{id:"transport-layer-security-tls-requirements",children:"Transport Layer Security (TLS) Requirements"}),"\n",(0,r.jsx)(n.p,{children:"Here are the Sauce Connect Proxy network requirements for TLS and SSL traffic:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"TLS version 1.2 or higher"}),"\n",(0,r.jsx)(n.li,{children:"TLS/SSL library (e.g., OpenSSL)"}),"\n",(0,r.jsxs)(n.li,{children:["Network ",(0,r.jsx)(n.code,{children:"port 443"}),", through which all traffic between your site and a Sauce Labs tunnel endpoint must pass"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"certificate-management",children:"Certificate Management"}),"\n",(0,r.jsxs)(n.p,{children:["Public key certificates are used to manage the security of Sauce Connect Proxy communication to both the Sauce Labs API and to the Virtual Machine hosting your tests in the Sauce Labs cloud. For information on saucelabs.com certificate authentication, see ",(0,r.jsx)(n.a,{href:"/secure-connections/sauce-connect/security-authentication",children:"Sauce Connect Proxy Certificate Handling"}),"."]})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var r=t(18215);const s={tabItem:"tabItem_Ymn6"};var i=t(74848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,o),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(96540),s=t(18215),i=t(23104),o=t(56347),c=t(205),l=t(57485),a=t(31682),d=t(89466);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,a.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function x(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const s=(0,o.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(s.location.search);n.set(i,e),s.replace({...s.location,search:n.toString()})}),[i,s])]}function j(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,i=h(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[a,u]=m({queryString:t,groupId:s}),[j,p]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,i]=(0,d.Dv)(t);return[s,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:s}),f=(()=>{const e=a??j;return x({value:e,tabValues:i})?e:null})();(0,c.A)((()=>{f&&l(f)}),[f]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!x({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),p(e)}),[u,p,i]),tabValues:i}}var p=t(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(74848);function y(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:c}=e;const l=[],{blockElementScrollPositionUntilNextRender:a}=(0,i.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),s=c[t].value;s!==r&&(a(n),o(s))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:c.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...i,className:(0,s.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function b(e){let{lazy:n,children:t,selectedValue:s}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function v(e){const n=j(e);return(0,g.jsxs)("div",{className:(0,s.A)("tabs-container",f.tabList),children:[(0,g.jsx)(y,{...e,...n}),(0,g.jsx)(b,{...e,...n})]})}function w(e){const n=(0,p.A)();return(0,g.jsx)(v,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var r=t(96540);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);