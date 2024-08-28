"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[10333],{70554:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=t(74848),r=t(28453);const i={id:"best-practices-for-disaster-recovery",title:"Best Practices for Disaster Recovery (Self-Hosted)",sidebar_label:"Best Practices for Disaster Recovery (Self-Hosted)",keywords:["api","api-fortress","self-hosted","docker"]},a=void 0,o={id:"api-testing/on-prem/self-hosted/best-practices-for-disaster-recovery",title:"Best Practices for Disaster Recovery (Self-Hosted)",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/self-hosted/best-practices-for-disaster-recovery.md",sourceDirName:"api-testing/on-prem/self-hosted",slug:"/api-testing/on-prem/self-hosted/best-practices-for-disaster-recovery",permalink:"/sauce-docs/pr-preview/pr-2914/api-testing/on-prem/self-hosted/best-practices-for-disaster-recovery",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/self-hosted/best-practices-for-disaster-recovery.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:172488024e4,frontMatter:{id:"best-practices-for-disaster-recovery",title:"Best Practices for Disaster Recovery (Self-Hosted)",sidebar_label:"Best Practices for Disaster Recovery (Self-Hosted)",keywords:["api","api-fortress","self-hosted","docker"]},sidebar:"apif",previous:{title:"Deployment \u2013 Red Hat OpenShift",permalink:"/sauce-docs/pr-preview/pr-2914/api-testing/on-prem/self-hosted/red-hat-openshift"},next:{title:"Certificate-based (mutual) SSL/TLS Authentication",permalink:"/sauce-docs/pr-preview/pr-2914/api-testing/on-prem/self-hosted/certificate-based-mutual-ssl-tls-authentication"}},c={},l=[{value:"<strong>Components:</strong>",id:"components",level:2},{value:"Resiliency / High availability",id:"resiliency--high-availability",level:2},{value:"Backup and Restore",id:"backup-and-restore",level:2},{value:"Backup",id:"backup",level:3},{value:"Restoration",id:"restoration",level:3},{value:"Disaster recovery",id:"disaster-recovery",level:2}];function d(e){const s={a:"a",admonition:"admonition",blockquote:"blockquote",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Head:t}=s;return t||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t,{children:(0,n.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Legacy Documentation"}),(0,n.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,n.jsx)(s.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n",(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsx)(s.p,{children:"This document is referential only to the API Fortress-HA (High Availability) deployment."})}),"\n",(0,n.jsx)(s.h2,{id:"components",children:(0,n.jsx)(s.strong,{children:"Components:"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Databases:"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"PostgreSQL"}),"\n",(0,n.jsx)(s.li,{children:"MongoDB"}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Message queues:"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"RabbitMQ"}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"API Fortress:"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"API Fortress Dashboard"}),"\n",(0,n.jsx)(s.li,{children:"Microservices (mailer, scheduler, connector)"}),"\n",(0,n.jsx)(s.li,{children:"Remote workers (downloaders, core-server)"}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"resiliency--high-availability",children:"Resiliency / High availability"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Databases"})," can be replicated using their specific mechanism and the systems will connect to the clusters. Each replica will carry the full database in a streaming replication fashion."]}),"\n",(0,n.jsx)(s.p,{children:"Therefore, a failure (software, hardware, network) of any of the instances will not cause a service disruption."}),"\n",(0,n.jsx)(s.p,{children:"When a replica is brought back to life, whether it's the same server or another, their specific replication systems will synchronize the new instance."}),"\n",(0,n.jsx)(s.p,{children:"Databases are the only components in need of a persistent state, therefore the machines spinning them need to be able to provide a persistent storage."}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"The message queue"})," is stateless (therefore does not require persistent storage) and queues and exchanges are replicated using the high availability internal mechanism. Services can connect to both so that if one replica goes down, the other will take care of the work without service disruption."]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"The API Fortress dashboards"})," are stateless (with the exclusion of in-memory web sessions) and can be scaled horizontally and load balanced."]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"The API Fortress microservices"})," are stateless single-instance services that can be respawed in any server, without any specific concern."]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"The API Fortress remote workers"})," are stateless multi-instance services that can be scaled horizontally and load balanced."]}),"\n",(0,n.jsx)(s.h2,{id:"backup-and-restore",children:"Backup and Restore"}),"\n",(0,n.jsx)(s.h3,{id:"backup",children:"Backup"}),"\n",(0,n.jsx)(s.p,{children:"There are 2 primary types of backups:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Taking ",(0,n.jsx)(s.strong,{children:"snapshots"})," of the persisted database disks. The procedure is runtime dependent (AWS, GCloud, OpenShift etc.)"]}),"\n",(0,n.jsxs)(s.li,{children:["Dumping databases to files for classic restore. These procedures are described ",(0,n.jsx)(s.a,{href:"https://apifortress.com/doc/backing-up-your-data-on-premises-only/",children:"here"}),". The actual commands may vary based on the runtime."]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"restoration",children:"Restoration"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Given the ",(0,n.jsx)(s.strong,{children:"snapshot"})," of a disk, the runtime should provide the ability to create a new disk from it."]}),"\n",(0,n.jsxs)(s.li,{children:["Given the dump files, you can follow the procedure described ",(0,n.jsx)(s.a,{href:"https://apifortress.com/doc/backing-up-your-data-on-premises-only/",children:"here"}),". The actual commands may vary based on the runtime."]}),"\n"]}),"\n",(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsx)(s.p,{children:"No service except the two databases require access to persistent storage."})}),"\n",(0,n.jsx)(s.h2,{id:"disaster-recovery",children:"Disaster recovery"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Databases:"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["In case of a database being ",(0,n.jsx)(s.strong,{children:"unreachable"})," for connectivity issues, the system will continue working using a replica. When the issue is solved, the system will sync itself automatically. No service degradation is expected."]}),"\n",(0,n.jsxs)(s.li,{children:["In case of a ",(0,n.jsx)(s.strong,{children:"system failure, disk failure, or data corruption"}),", spin a new server in the same cluster with the same hostname. This will trigger the database automatic replication. No service degradation is expected."]}),"\n",(0,n.jsxs)(s.li,{children:["In case of a ",(0,n.jsx)(s.strong,{children:"global failure of all replicas"}),", API Fortress will stop working. Spin a new database cluster starting from a backup and restart all services. Service degradation is expected. Data loss may occur, depending on your backup strategy."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Message queues:"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["In case of a message queue being ",(0,n.jsx)(s.strong,{children:"unreachable"})," for connectivity issues, the system will continue working using a replica. A respawn of the failing message queue will bring it back to the cluster. No service degradation is expected."]}),"\n",(0,n.jsxs)(s.li,{children:["In case of a ",(0,n.jsx)(s.strong,{children:"system failure"}),", spin a new server in the same cluster with the same hostname.\xa0 No service degradation is expected."]}),"\n",(0,n.jsxs)(s.li,{children:["In case of a ",(0,n.jsx)(s.strong,{children:"global failure of all replicas"}),", API Fortress will stop executing scheduled tests and will not send notifications. Start a new message queue cluster. A restart of all services is not required but recommended. Service degradation is expected."]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>a,x:()=>o});var n=t(96540);const r={},i=n.createContext(r);function a(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);