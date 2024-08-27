"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[83690],{20294:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>c,metadata:()=>r,toc:()=>l});var s=t(74848),o=t(28453);const c={id:"kubernetes",title:"Run Sauce Connect in Kubernetes",sidebar_label:"Kubernetes"},a=void 0,r={id:"secure-connections/sauce-connect-5/installation/kubernetes",title:"Run Sauce Connect in Kubernetes",description:"Kubernetes, an industry-standard environment for management of containerized applications, may be used for the automation of much of the operational effort required to run Sauce Connect Proxy.",source:"@site/docs/secure-connections/sauce-connect-5/installation/kubernetes.md",sourceDirName:"secure-connections/sauce-connect-5/installation",slug:"/secure-connections/sauce-connect-5/installation/kubernetes",permalink:"/sauce-docs/pr-preview/pr-2907/secure-connections/sauce-connect-5/installation/kubernetes",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/secure-connections/sauce-connect-5/installation/kubernetes.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:172477197e4,frontMatter:{id:"kubernetes",title:"Run Sauce Connect in Kubernetes",sidebar_label:"Kubernetes"},sidebar:"docs",previous:{title:"Docker",permalink:"/sauce-docs/pr-preview/pr-2907/secure-connections/sauce-connect-5/installation/docker"},next:{title:"Logging",permalink:"/sauce-docs/pr-preview/pr-2907/secure-connections/sauce-connect-5/logging"}},i={},l=[{value:"Helm Chart",id:"helm-chart",level:2},{value:"Usage",id:"usage",level:3},{value:"Define a required values file",id:"define-a-required-values-file",level:4},{value:"Install the Helm chart",id:"install-the-helm-chart",level:4},{value:"Application logs",id:"application-logs",level:3}];function u(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://kubernetes.io/",children:"Kubernetes"}),", an industry-standard environment for management of containerized applications, may be used for the automation of much of the operational effort required to run Sauce Connect Proxy.\nThis article provides documentation for running Sauce Connect Proxy in ",(0,s.jsx)(n.a,{href:"https://kubernetes.io/",children:"Kubernetes"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"helm-chart",children:"Helm Chart"}),"\n",(0,s.jsxs)(n.p,{children:["If you need a Sauce Connect Proxy to stay up indefinitely, we recommend using a ",(0,s.jsx)(n.a,{href:"https://helm.sh/docs/topics/charts/",children:"Helm chart"})," to manage your Sauce Connect Proxy instance or pool.\nThe Sauce Connect 5 Helm chart is available at the ",(0,s.jsx)(n.a,{href:"https://opensource.saucelabs.com/helm-charts/SAUCE-CONNECT.html",children:"Sauce Labs Helm Charts Registry"}),".\nThe chart may be used as is, or adapted to your needs."]}),"\n",(0,s.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,s.jsxs)(n.p,{children:["To use the chart, you must have a Kubernetes cluster running and ",(0,s.jsx)(n.a,{href:"https://helm.sh/",children:"Helm"})," installed."]}),"\n",(0,s.jsx)(n.h4,{id:"define-a-required-values-file",children:"Define a required values file"}),"\n",(0,s.jsxs)(n.p,{children:["Example ",(0,s.jsx)(n.code,{children:"values.yaml"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'config:\n  # You can use and sc run command option here. Check the CLI reference for more information.\n  region: us-west\n  username: johndoe\n  access-key: "xxx-xxx-xxx"\n  tunnel-name: "my-k8s-tunnel"\n\n# To run a tunnel pool, set the `tunnelPoolSize` value to the desired number of tunnels in the pool.\n#tunnelPoolSize: 2\n\n# Adjust the time for jobs using the Sauce Connect Proxy to finish when the pod is terminated.\n# By default, the terminationGracePeriodSeconds is set to 600 seconds.\n#terminationGracePeriodSeconds: 600\n'})}),"\n",(0,s.jsxs)(n.p,{children:["For more information about the ",(0,s.jsx)(n.code,{children:"config"})," values, see the ",(0,s.jsx)(n.a,{href:"https://docs.saucelabs.com/dev/cli/sauce-connect-5/run",children:"sc run command reference"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"install-the-helm-chart",children:"Install the Helm chart"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"helm repo add saucelabs https://opensource.saucelabs.com/helm-charts\nhelm install sauce-connect  saucelabs/sauce-connect --values /path/to/values.yaml --set config.tunnel-name=your-pool-name --set tunnelPoolSize=2\n"})}),"\n",(0,s.jsx)(n.h3,{id:"application-logs",children:"Application logs"}),"\n",(0,s.jsx)(n.p,{children:"Use the following commands in order to get the application logs:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'kubectl logs -l "app.kubernetes.io/name=sauce-connect" --tail -1 -f\n'})}),"\n",(0,s.jsx)(n.p,{children:"The output should look like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"2023/10/04 17:19:53 [tunnel] [INFO] established connection to Sauce Connect server active=1/2\n2023/10/04 17:19:54 [tunnel] [INFO] established connection to Sauce Connect server active=2/2\n2023/10/04 17:19:54 [control] [INFO] Sauce Connect is up, you may start your tests\n"})})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var s=t(96540);const o={},c=s.createContext(o);function a(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);