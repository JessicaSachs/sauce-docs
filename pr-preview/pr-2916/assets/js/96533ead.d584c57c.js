"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[80505],{54134:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var t=n(74848),c=n(28453),o=n(86025);n(11470),n(19365);const l={id:"monitoring",title:"Monitoring"},a=void 0,r={id:"secure-connections/sauce-connect-5/monitoring",title:"Monitoring",description:"Sauce Connect Proxy provides server-side monitoring via the REST API and the Sauce Labs web application as well as the client-side monitoring via the local API server and Prometheus metrics.",source:"@site/docs/secure-connections/sauce-connect-5/monitoring.md",sourceDirName:"secure-connections/sauce-connect-5",slug:"/secure-connections/sauce-connect-5/monitoring",permalink:"/sauce-docs/pr-preview/pr-2916/secure-connections/sauce-connect-5/monitoring",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/secure-connections/sauce-connect-5/monitoring.md",tags:[],version:"current",lastUpdatedBy:"kristofmuhi",lastUpdatedAt:172492915e4,frontMatter:{id:"monitoring",title:"Monitoring"},sidebar:"docs",previous:{title:"Logging",permalink:"/sauce-docs/pr-preview/pr-2916/secure-connections/sauce-connect-5/logging"},next:{title:"Getting Started",permalink:"/sauce-docs/pr-preview/pr-2916/secure-connections/sauce-connect-5/operation/overview"}},i={},d=[{value:"Sauce Labs Web UI",id:"sauce-labs-web-ui",level:2},{value:"Grafana Dashboard",id:"grafana-dashboard",level:2},{value:"Prometheus Metrics",id:"prometheus-metrics",level:2},{value:"<code>sauce_connect_dialer_closed_total</code>",id:"sauce_connect_dialer_closed_total",level:3},{value:"<code>sauce_connect_dialer_dialed_total</code>",id:"sauce_connect_dialer_dialed_total",level:3},{value:"<code>sauce_connect_dialer_errors_total</code>",id:"sauce_connect_dialer_errors_total",level:3},{value:"<code>sauce_connect_errors_total</code>",id:"sauce_connect_errors_total",level:3},{value:"<code>sauce_connect_http_request_duration_seconds</code>",id:"sauce_connect_http_request_duration_seconds",level:3},{value:"<code>sauce_connect_http_request_size_bytes</code>",id:"sauce_connect_http_request_size_bytes",level:3},{value:"<code>sauce_connect_http_requests_in_flight</code>",id:"sauce_connect_http_requests_in_flight",level:3},{value:"<code>sauce_connect_http_requests_total</code>",id:"sauce_connect_http_requests_total",level:3},{value:"<code>sauce_connect_http_response_size_bytes</code>",id:"sauce_connect_http_response_size_bytes",level:3},{value:"<code>sauce_connect_process_cpu_seconds_total</code>",id:"sauce_connect_process_cpu_seconds_total",level:3},{value:"<code>sauce_connect_process_max_fds</code>",id:"sauce_connect_process_max_fds",level:3},{value:"<code>sauce_connect_process_open_fds</code>",id:"sauce_connect_process_open_fds",level:3},{value:"<code>sauce_connect_process_resident_memory_bytes</code>",id:"sauce_connect_process_resident_memory_bytes",level:3},{value:"<code>sauce_connect_process_start_time_seconds</code>",id:"sauce_connect_process_start_time_seconds",level:3},{value:"<code>sauce_connect_process_virtual_memory_bytes</code>",id:"sauce_connect_process_virtual_memory_bytes",level:3},{value:"<code>sauce_connect_process_virtual_memory_max_bytes</code>",id:"sauce_connect_process_virtual_memory_max_bytes",level:3},{value:"<code>sauce_connect_proxy_errors_total</code>",id:"sauce_connect_proxy_errors_total",level:3},{value:"<code>sauce_connect_tunnel_closed_idle_total</code>",id:"sauce_connect_tunnel_closed_idle_total",level:3},{value:"<code>sauce_connect_tunnel_connections_total</code>",id:"sauce_connect_tunnel_connections_total",level:3},{value:"<code>sauce_connect_tunnel_dialer_closed_total</code>",id:"sauce_connect_tunnel_dialer_closed_total",level:3},{value:"<code>sauce_connect_tunnel_dialer_dialed_total</code>",id:"sauce_connect_tunnel_dialer_dialed_total",level:3},{value:"<code>sauce_connect_tunnel_dialer_errors_total</code>",id:"sauce_connect_tunnel_dialer_errors_total",level:3},{value:"<code>sauce_connect_tunnel_errors_total</code>",id:"sauce_connect_tunnel_errors_total",level:3},{value:"<code>sauce_connect_tunnel_info</code>",id:"sauce_connect_tunnel_info",level:3},{value:"<code>sauce_connect_tunnel_received_bytes</code>",id:"sauce_connect_tunnel_received_bytes",level:3},{value:"<code>sauce_connect_tunnel_sent_bytes</code>",id:"sauce_connect_tunnel_sent_bytes",level:3},{value:"<code>sauce_connect_version</code>",id:"sauce_connect_version",level:3},{value:"<code>go_gc_duration_seconds</code>",id:"go_gc_duration_seconds",level:3},{value:"<code>go_goroutines</code>",id:"go_goroutines",level:3},{value:"<code>go_info</code>",id:"go_info",level:3},{value:"<code>go_memstats_alloc_bytes</code>",id:"go_memstats_alloc_bytes",level:3},{value:"<code>go_memstats_alloc_bytes_total</code>",id:"go_memstats_alloc_bytes_total",level:3},{value:"<code>go_memstats_buck_hash_sys_bytes</code>",id:"go_memstats_buck_hash_sys_bytes",level:3},{value:"<code>go_memstats_frees_total</code>",id:"go_memstats_frees_total",level:3},{value:"<code>go_memstats_gc_sys_bytes</code>",id:"go_memstats_gc_sys_bytes",level:3},{value:"<code>go_memstats_heap_alloc_bytes</code>",id:"go_memstats_heap_alloc_bytes",level:3},{value:"<code>go_memstats_heap_idle_bytes</code>",id:"go_memstats_heap_idle_bytes",level:3},{value:"<code>go_memstats_heap_inuse_bytes</code>",id:"go_memstats_heap_inuse_bytes",level:3},{value:"<code>go_memstats_heap_objects</code>",id:"go_memstats_heap_objects",level:3},{value:"<code>go_memstats_heap_released_bytes</code>",id:"go_memstats_heap_released_bytes",level:3},{value:"<code>go_memstats_heap_sys_bytes</code>",id:"go_memstats_heap_sys_bytes",level:3},{value:"<code>go_memstats_last_gc_time_seconds</code>",id:"go_memstats_last_gc_time_seconds",level:3},{value:"<code>go_memstats_lookups_total</code>",id:"go_memstats_lookups_total",level:3},{value:"<code>go_memstats_mallocs_total</code>",id:"go_memstats_mallocs_total",level:3},{value:"<code>go_memstats_mcache_inuse_bytes</code>",id:"go_memstats_mcache_inuse_bytes",level:3},{value:"<code>go_memstats_mcache_sys_bytes</code>",id:"go_memstats_mcache_sys_bytes",level:3},{value:"<code>go_memstats_mspan_inuse_bytes</code>",id:"go_memstats_mspan_inuse_bytes",level:3},{value:"<code>go_memstats_mspan_sys_bytes</code>",id:"go_memstats_mspan_sys_bytes",level:3},{value:"<code>go_memstats_next_gc_bytes</code>",id:"go_memstats_next_gc_bytes",level:3},{value:"<code>go_memstats_other_sys_bytes</code>",id:"go_memstats_other_sys_bytes",level:3},{value:"<code>go_memstats_stack_inuse_bytes</code>",id:"go_memstats_stack_inuse_bytes",level:3},{value:"<code>go_memstats_stack_sys_bytes</code>",id:"go_memstats_stack_sys_bytes",level:3},{value:"<code>go_memstats_sys_bytes</code>",id:"go_memstats_sys_bytes",level:3},{value:"<code>go_threads</code>",id:"go_threads",level:3},{value:"More Information",id:"more-information",level:2}];function _(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["Sauce Connect Proxy provides server-side monitoring via the REST API and the Sauce Labs ",(0,t.jsx)(s.a,{href:"https://app.saucelabs.com/",children:"web application"})," as well as the client-side monitoring via the local API server and ",(0,t.jsx)(s.a,{href:"https://prometheus.io/",children:"Prometheus"})," metrics."]}),"\n",(0,t.jsx)(s.h2,{id:"sauce-labs-web-ui",children:"Sauce Labs Web UI"}),"\n",(0,t.jsxs)(s.p,{children:["You can manage and monitor all Sauce Connect Proxy tunnel activity from the Sauce Labs ",(0,t.jsx)(s.a,{href:"https://app.saucelabs.com/tunnels",children:(0,t.jsx)(s.strong,{children:"Tunnels"})})," page, which displays useful information, such as the number of active tunnels, tunnel status, and specific attributes for each tunnel. You can also check the health of an individual tunnel by running a test on it."]}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Column"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"Type"}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"The icon shows whether the tunnel is a Sauce Connect Proxy, or an IPSec Proxy."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"State"}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"The icon shows whether the tunnel is running or stopped."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"Tunnel Name"}),(0,t.jsxs)(s.td,{style:{textAlign:"left"},children:["The name of the tunnel. This is the ",(0,t.jsx)(s.a,{href:"/dev/cli/sauce-connect-5/run/#--tunnel-name",children:(0,t.jsx)(s.code,{children:"--tunnel-name"})})," used when starting the Sauce Connect tunnel."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"Client Hostname"}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"The name of the machine where the Sauce Connect Proxy client is running."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"Owner"}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"The name of the account that is running the tunnel."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"Sharing"}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"Indicates whether or not the tunnel is shared."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"Duration"}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"The amount of time the tunnel has been running."})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"grafana-dashboard",children:"Grafana Dashboard"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"https://prometheus.io/",children:"Prometheus"})," can be used to monitor Sauce Connect Proxy.\nThe ",(0,t.jsx)(s.code,{children:"/mertics"})," endpoint is available on ",(0,t.jsx)(s.a,{href:"/secure-connections/sauce-connect-5/operation/api-server",children:"the local API server"}),".\nNote that the API server must be enabled with the ",(0,t.jsx)(s.code,{children:"--api-address"})," option, and by default it's disabled."]}),"\n",(0,t.jsxs)(s.p,{children:["Grafana dashboard using these metrics is available at ",(0,t.jsx)(s.a,{href:"https://grafana.com/grafana/dashboards/20232-sauce-connect/",children:"Grafana Dashboards"}),".\nSee ",(0,t.jsx)(s.a,{href:"https://github.com/saucelabs/sauce-connect-docker/tree/main/examples/docker-compose-prometheus-grafana",children:"this demo"})," for an example of running Sauce Connect Proxy along with ",(0,t.jsx)(s.a,{href:"https://prometheus.io/",children:"Prometheus"})," server and ",(0,t.jsx)(s.a,{href:"http://grafana.org/",children:"Grafana"})," dashboard."]}),"\n",(0,t.jsx)("img",{src:(0,o.Ay)("img/sauce-connect/sc5-dashboard.png"),alt:"Sauce Connect Proxy 5 Grafana dashboard",width:"650"}),"\n",(0,t.jsx)(s.h2,{id:"prometheus-metrics",children:"Prometheus Metrics"}),"\n",(0,t.jsx)(s.p,{children:"The following metrics are available:"}),"\n",(0,t.jsx)(s.h3,{id:"sauce_connect_dialer_closed_total",children:(0,t.jsx)(s.code,{children:"sauce_connect_dialer_closed_total"})}),"\n",(0,t.jsx)(s.p,{children:"Number of closed connections"}),"\n",(0,t.jsx)(s.p,{children:"Labels:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"host"}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"sauce_connect_dialer_dialed_total",children:(0,t.jsx)(s.code,{children:"sauce_connect_dialer_dialed_total"})}),"\n",(0,t.jsx)(s.p,{children:"Number of dialed connections"}),"\n",(0,t.jsx)(s.p,{children:"Labels:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"host"}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"sauce_connect_dialer_errors_total",children:(0,t.jsx)(s.code,{children:"sauce_connect_dialer_errors_total"})}),"\n",(0,t.jsx)(s.p,{children:"Number of dialer errors"}),"\n",(0,t.jsx)(s.p,{children:"Labels:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"host"}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"sauce_connect_errors_total",children:(0,t.jsx)(s.code,{children:"sauce_connect_errors_total"})}),"\n",(0,t.jsx)(s.p,{children:"Number of errors"}),"\n",(0,t.jsx)(s.p,{children:"Labels:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"name"}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"sauce_connect_http_request_duration_seconds",children:(0,t.jsx)(s.code,{children:"sauce_connect_http_request_duration_seconds"})}),"\n",(0,t.jsx)(s.p,{children:"The HTTP request latencies in seconds."}),"\n",(0,t.jsx)(s.p,{children:"Labels:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"code"}),"\n",(0,t.jsx)(s.li,{children:"method"}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"sauce_connect_http_request_size_bytes",children:(0,t.jsx)(s.code,{children:"sauce_connect_http_request_size_bytes"})}),"\n",(0,t.jsx)(s.p,{children:"The HTTP request sizes in bytes."}),"\n",(0,t.jsx)(s.p,{children:"Labels:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"code"}),"\n",(0,t.jsx)(s.li,{children:"method"}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"sauce_connect_http_requests_in_flight",children:(0,t.jsx)(s.code,{children:"sauce_connect_http_requests_in_flight"})}),"\n",(0,t.jsx)(s.p,{children:"Current number of HTTP requests being served."}),"\n",(0,t.jsx)(s.p,{children:"Labels:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"method"}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"sauce_connect_http_requests_total",children:(0,t.jsx)(s.code,{children:"sauce_connect_http_requests_total"})}),"\n",(0,t.jsx)(s.p,{children:"Total number of HTTP requests processed."}),"\n",(0,t.jsx)(s.p,{children:"Labels:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"code"}),"\n",(0,t.jsx)(s.li,{children:"method"}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"sauce_connect_http_response_size_bytes",children:(0,t.jsx)(s.code,{children:"sauce_connect_http_response_size_bytes"})}),"\n",(0,t.jsx)(s.p,{children:"The HTTP response sizes in bytes."}),"\n",(0,t.jsx)(s.p,{children:"Labels:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"code"}),"\n",(0,t.jsx)(s.li,{children:"method"}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"sauce_connect_process_cpu_seconds_total",children:(0,t.jsx)(s.code,{children:"sauce_connect_process_cpu_seconds_total"})}),"\n",(0,t.jsx)(s.p,{children:"Total user and system CPU time spent in seconds."}),"\n",(0,t.jsx)(s.h3,{id:"sauce_connect_process_max_fds",children:(0,t.jsx)(s.code,{children:"sauce_connect_process_max_fds"})}),"\n",(0,t.jsx)(s.p,{children:"Maximum number of open file descriptors."}),"\n",(0,t.jsx)(s.h3,{id:"sauce_connect_process_open_fds",children:(0,t.jsx)(s.code,{children:"sauce_connect_process_open_fds"})}),"\n",(0,t.jsx)(s.p,{children:"Number of open file descriptors."}),"\n",(0,t.jsx)(s.h3,{id:"sauce_connect_process_resident_memory_bytes",children:(0,t.jsx)(s.code,{children:"sauce_connect_process_resident_memory_bytes"})}),"\n",(0,t.jsx)(s.p,{children:"Resident memory size in bytes."}),"\n",(0,t.jsx)(s.h3,{id:"sauce_connect_process_start_time_seconds",children:(0,t.jsx)(s.code,{children:"sauce_connect_process_start_time_seconds"})}),"\n",(0,t.jsx)(s.p,{children:"Start time of the process since unix epoch in seconds."}),"\n",(0,t.jsx)(s.h3,{id:"sauce_connect_process_virtual_memory_bytes",children:(0,t.jsx)(s.code,{children:"sauce_connect_process_virtual_memory_bytes"})}),"\n",(0,t.jsx)(s.p,{children:"Virtual memory size in bytes."}),"\n",(0,t.jsx)(s.h3,{id:"sauce_connect_process_virtual_memory_max_bytes",children:(0,t.jsx)(s.code,{children:"sauce_connect_process_virtual_memory_max_bytes"})}),"\n",(0,t.jsx)(s.p,{children:"Maximum amount of virtual memory available in bytes."}),"\n",(0,t.jsx)(s.h3,{id:"sauce_connect_proxy_errors_total",children:(0,t.jsx)(s.code,{children:"sauce_connect_proxy_errors_total"})}),"\n",(0,t.jsx)(s.p,{children:"Number of proxy errors"}),"\n",(0,t.jsx)(s.p,{children:"Labels:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"reason"}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"sauce_connect_tunnel_closed_idle_total",children:(0,t.jsx)(s.code,{children:"sauce_connect_tunnel_closed_idle_total"})}),"\n",(0,t.jsx)(s.p,{children:"Total number of connections closed due to inactivity."}),"\n",(0,t.jsx)(s.h3,{id:"sauce_connect_tunnel_connections_total",children:(0,t.jsx)(s.code,{children:"sauce_connect_tunnel_connections_total"})}),"\n",(0,t.jsx)(s.p,{children:"Total number of connections."}),"\n",(0,t.jsx)(s.h3,{id:"sauce_connect_tunnel_dialer_closed_total",children:(0,t.jsx)(s.code,{children:"sauce_connect_tunnel_dialer_closed_total"})}),"\n",(0,t.jsx)(s.p,{children:"Number of closed connections"}),"\n",(0,t.jsx)(s.p,{children:"Labels:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"host"}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"sauce_connect_tunnel_dialer_dialed_total",children:(0,t.jsx)(s.code,{children:"sauce_connect_tunnel_dialer_dialed_total"})}),"\n",(0,t.jsx)(s.p,{children:"Number of dialed connections"}),"\n",(0,t.jsx)(s.p,{children:"Labels:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"host"}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"sauce_connect_tunnel_dialer_errors_total",children:(0,t.jsx)(s.code,{children:"sauce_connect_tunnel_dialer_errors_total"})}),"\n",(0,t.jsx)(s.p,{children:"Number of dialer errors"}),"\n",(0,t.jsx)(s.p,{children:"Labels:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"host"}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"sauce_connect_tunnel_errors_total",children:(0,t.jsx)(s.code,{children:"sauce_connect_tunnel_errors_total"})}),"\n",(0,t.jsx)(s.p,{children:"Total number of errors by type."}),"\n",(0,t.jsx)(s.p,{children:"Labels:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"type"}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"sauce_connect_tunnel_info",children:(0,t.jsx)(s.code,{children:"sauce_connect_tunnel_info"})}),"\n",(0,t.jsx)(s.p,{children:"Information about Sauce Connect tunnel, value is always 1"}),"\n",(0,t.jsx)(s.p,{children:"Labels:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"addr"}),"\n",(0,t.jsx)(s.li,{children:"hostname"}),"\n",(0,t.jsx)(s.li,{children:"id"}),"\n",(0,t.jsx)(s.li,{children:"name"}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"sauce_connect_tunnel_received_bytes",children:(0,t.jsx)(s.code,{children:"sauce_connect_tunnel_received_bytes"})}),"\n",(0,t.jsx)(s.p,{children:"Total number of bytes received."}),"\n",(0,t.jsx)(s.p,{children:"Labels:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"conn"}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"sauce_connect_tunnel_sent_bytes",children:(0,t.jsx)(s.code,{children:"sauce_connect_tunnel_sent_bytes"})}),"\n",(0,t.jsx)(s.p,{children:"Total number of bytes sent."}),"\n",(0,t.jsx)(s.p,{children:"Labels:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"conn"}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"sauce_connect_version",children:(0,t.jsx)(s.code,{children:"sauce_connect_version"})}),"\n",(0,t.jsx)(s.p,{children:"Sauce Connect Proxy version, value is always 1"}),"\n",(0,t.jsx)(s.p,{children:"Labels:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"commit"}),"\n",(0,t.jsx)(s.li,{children:"time"}),"\n",(0,t.jsx)(s.li,{children:"version"}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"go_gc_duration_seconds",children:(0,t.jsx)(s.code,{children:"go_gc_duration_seconds"})}),"\n",(0,t.jsx)(s.p,{children:"A summary of the pause duration of garbage collection cycles."}),"\n",(0,t.jsx)(s.h3,{id:"go_goroutines",children:(0,t.jsx)(s.code,{children:"go_goroutines"})}),"\n",(0,t.jsx)(s.p,{children:"Number of goroutines that currently exist."}),"\n",(0,t.jsx)(s.h3,{id:"go_info",children:(0,t.jsx)(s.code,{children:"go_info"})}),"\n",(0,t.jsx)(s.p,{children:"Information about the Go environment."}),"\n",(0,t.jsx)(s.p,{children:"Labels:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"version"}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"go_memstats_alloc_bytes",children:(0,t.jsx)(s.code,{children:"go_memstats_alloc_bytes"})}),"\n",(0,t.jsx)(s.p,{children:"Number of bytes allocated and still in use."}),"\n",(0,t.jsx)(s.h3,{id:"go_memstats_alloc_bytes_total",children:(0,t.jsx)(s.code,{children:"go_memstats_alloc_bytes_total"})}),"\n",(0,t.jsx)(s.p,{children:"Total number of bytes allocated, even if freed."}),"\n",(0,t.jsx)(s.h3,{id:"go_memstats_buck_hash_sys_bytes",children:(0,t.jsx)(s.code,{children:"go_memstats_buck_hash_sys_bytes"})}),"\n",(0,t.jsx)(s.p,{children:"Number of bytes used by the profiling bucket hash table."}),"\n",(0,t.jsx)(s.h3,{id:"go_memstats_frees_total",children:(0,t.jsx)(s.code,{children:"go_memstats_frees_total"})}),"\n",(0,t.jsx)(s.p,{children:"Total number of frees."}),"\n",(0,t.jsx)(s.h3,{id:"go_memstats_gc_sys_bytes",children:(0,t.jsx)(s.code,{children:"go_memstats_gc_sys_bytes"})}),"\n",(0,t.jsx)(s.p,{children:"Number of bytes used for garbage collection system metadata."}),"\n",(0,t.jsx)(s.h3,{id:"go_memstats_heap_alloc_bytes",children:(0,t.jsx)(s.code,{children:"go_memstats_heap_alloc_bytes"})}),"\n",(0,t.jsx)(s.p,{children:"Number of heap bytes allocated and still in use."}),"\n",(0,t.jsx)(s.h3,{id:"go_memstats_heap_idle_bytes",children:(0,t.jsx)(s.code,{children:"go_memstats_heap_idle_bytes"})}),"\n",(0,t.jsx)(s.p,{children:"Number of heap bytes waiting to be used."}),"\n",(0,t.jsx)(s.h3,{id:"go_memstats_heap_inuse_bytes",children:(0,t.jsx)(s.code,{children:"go_memstats_heap_inuse_bytes"})}),"\n",(0,t.jsx)(s.p,{children:"Number of heap bytes that are in use."}),"\n",(0,t.jsx)(s.h3,{id:"go_memstats_heap_objects",children:(0,t.jsx)(s.code,{children:"go_memstats_heap_objects"})}),"\n",(0,t.jsx)(s.p,{children:"Number of allocated objects."}),"\n",(0,t.jsx)(s.h3,{id:"go_memstats_heap_released_bytes",children:(0,t.jsx)(s.code,{children:"go_memstats_heap_released_bytes"})}),"\n",(0,t.jsx)(s.p,{children:"Number of heap bytes released to OS."}),"\n",(0,t.jsx)(s.h3,{id:"go_memstats_heap_sys_bytes",children:(0,t.jsx)(s.code,{children:"go_memstats_heap_sys_bytes"})}),"\n",(0,t.jsx)(s.p,{children:"Number of heap bytes obtained from system."}),"\n",(0,t.jsx)(s.h3,{id:"go_memstats_last_gc_time_seconds",children:(0,t.jsx)(s.code,{children:"go_memstats_last_gc_time_seconds"})}),"\n",(0,t.jsx)(s.p,{children:"Number of seconds since 1970 of last garbage collection."}),"\n",(0,t.jsx)(s.h3,{id:"go_memstats_lookups_total",children:(0,t.jsx)(s.code,{children:"go_memstats_lookups_total"})}),"\n",(0,t.jsx)(s.p,{children:"Total number of pointer lookups."}),"\n",(0,t.jsx)(s.h3,{id:"go_memstats_mallocs_total",children:(0,t.jsx)(s.code,{children:"go_memstats_mallocs_total"})}),"\n",(0,t.jsx)(s.p,{children:"Total number of mallocs."}),"\n",(0,t.jsx)(s.h3,{id:"go_memstats_mcache_inuse_bytes",children:(0,t.jsx)(s.code,{children:"go_memstats_mcache_inuse_bytes"})}),"\n",(0,t.jsx)(s.p,{children:"Number of bytes in use by mcache structures."}),"\n",(0,t.jsx)(s.h3,{id:"go_memstats_mcache_sys_bytes",children:(0,t.jsx)(s.code,{children:"go_memstats_mcache_sys_bytes"})}),"\n",(0,t.jsx)(s.p,{children:"Number of bytes used for mcache structures obtained from system."}),"\n",(0,t.jsx)(s.h3,{id:"go_memstats_mspan_inuse_bytes",children:(0,t.jsx)(s.code,{children:"go_memstats_mspan_inuse_bytes"})}),"\n",(0,t.jsx)(s.p,{children:"Number of bytes in use by mspan structures."}),"\n",(0,t.jsx)(s.h3,{id:"go_memstats_mspan_sys_bytes",children:(0,t.jsx)(s.code,{children:"go_memstats_mspan_sys_bytes"})}),"\n",(0,t.jsx)(s.p,{children:"Number of bytes used for mspan structures obtained from system."}),"\n",(0,t.jsx)(s.h3,{id:"go_memstats_next_gc_bytes",children:(0,t.jsx)(s.code,{children:"go_memstats_next_gc_bytes"})}),"\n",(0,t.jsx)(s.p,{children:"Number of heap bytes when next garbage collection will take place."}),"\n",(0,t.jsx)(s.h3,{id:"go_memstats_other_sys_bytes",children:(0,t.jsx)(s.code,{children:"go_memstats_other_sys_bytes"})}),"\n",(0,t.jsx)(s.p,{children:"Number of bytes used for other system allocations."}),"\n",(0,t.jsx)(s.h3,{id:"go_memstats_stack_inuse_bytes",children:(0,t.jsx)(s.code,{children:"go_memstats_stack_inuse_bytes"})}),"\n",(0,t.jsx)(s.p,{children:"Number of bytes in use by the stack allocator."}),"\n",(0,t.jsx)(s.h3,{id:"go_memstats_stack_sys_bytes",children:(0,t.jsx)(s.code,{children:"go_memstats_stack_sys_bytes"})}),"\n",(0,t.jsx)(s.p,{children:"Number of bytes obtained from system for stack allocator."}),"\n",(0,t.jsx)(s.h3,{id:"go_memstats_sys_bytes",children:(0,t.jsx)(s.code,{children:"go_memstats_sys_bytes"})}),"\n",(0,t.jsx)(s.p,{children:"Number of bytes obtained from system."}),"\n",(0,t.jsx)(s.h3,{id:"go_threads",children:(0,t.jsx)(s.code,{children:"go_threads"})}),"\n",(0,t.jsx)(s.p,{children:"Number of OS threads created."}),"\n",(0,t.jsx)(s.h2,{id:"more-information",children:"More Information"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/secure-connections/sauce-connect/",children:"Sauce Connect Proxy Overview"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/dev/cli/sauce-connect-5/run/",children:"Sauce Connect Proxy 5 CLI Reference"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://grafana.com/grafana/dashboards/20232-sauce-connect/",children:"Sauce Connect Grafana Dashboard"})}),"\n"]})]})}function u(e={}){const{wrapper:s}={...(0,c.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(_,{...e})}):_(e)}},19365:(e,s,n)=>{n.d(s,{A:()=>l});n(96540);var t=n(34164);const c={tabItem:"tabItem_Ymn6"};var o=n(74848);function l(e){let{children:s,hidden:n,className:l}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,t.A)(c.tabItem,l),hidden:n,children:s})}},11470:(e,s,n)=>{n.d(s,{A:()=>v});var t=n(96540),c=n(34164),o=n(23104),l=n(56347),a=n(205),r=n(57485),i=n(31682),d=n(70679);function _(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:s,children:n}=e;return(0,t.useMemo)((()=>{const e=s??function(e){return _(e).map((e=>{let{props:{value:s,label:n,attributes:t,default:c}}=e;return{value:s,label:n,attributes:t,default:c}}))}(n);return function(e){const s=(0,i.XI)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,n])}function h(e){let{value:s,tabValues:n}=e;return n.some((e=>e.value===s))}function m(e){let{queryString:s=!1,groupId:n}=e;const c=(0,l.W6)(),o=function(e){let{queryString:s=!1,groupId:n}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:s,groupId:n});return[(0,r.aZ)(o),(0,t.useCallback)((e=>{if(!o)return;const s=new URLSearchParams(c.location.search);s.set(o,e),c.replace({...c.location,search:s.toString()})}),[o,c])]}function x(e){const{defaultValue:s,queryString:n=!1,groupId:c}=e,o=u(e),[l,r]=(0,t.useState)((()=>function(e){let{defaultValue:s,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!h({value:s,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:s,tabValues:o}))),[i,_]=m({queryString:n,groupId:c}),[x,b]=function(e){let{groupId:s}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(s),[c,o]=(0,d.Dv)(n);return[c,(0,t.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:c}),p=(()=>{const e=i??x;return h({value:e,tabValues:o})?e:null})();(0,a.A)((()=>{p&&r(p)}),[p]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);r(e),_(e),b(e)}),[_,b,o]),tabValues:o}}var b=n(92303);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(74848);function y(e){let{className:s,block:n,selectedValue:t,selectValue:l,tabValues:a}=e;const r=[],{blockElementScrollPositionUntilNextRender:i}=(0,o.a_)(),d=e=>{const s=e.currentTarget,n=r.indexOf(s),c=a[n].value;c!==t&&(i(s),l(c))},_=e=>{let s=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=r.indexOf(e.currentTarget)+1;s=r[n]??r[0];break}case"ArrowLeft":{const n=r.indexOf(e.currentTarget)-1;s=r[n]??r[r.length-1];break}}s?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.A)("tabs",{"tabs--block":n},s),children:a.map((e=>{let{value:s,label:n,attributes:o}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:t===s?0:-1,"aria-selected":t===s,ref:e=>r.push(e),onKeyDown:_,onClick:d,...o,className:(0,c.A)("tabs__item",p.tabItem,o?.className,{"tabs__item--active":t===s}),children:n??s},s)}))})}function g(e){let{lazy:s,children:n,selectedValue:o}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(s){const e=l.find((e=>e.props.value===o));return e?(0,t.cloneElement)(e,{className:(0,c.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:l.map(((e,s)=>(0,t.cloneElement)(e,{key:s,hidden:e.props.value!==o})))})}function f(e){const s=x(e);return(0,j.jsxs)("div",{className:(0,c.A)("tabs-container",p.tabList),children:[(0,j.jsx)(y,{...s,...e}),(0,j.jsx)(g,{...s,...e})]})}function v(e){const s=(0,b.A)();return(0,j.jsx)(f,{...e,children:_(e.children)},String(s))}},28453:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>a});var t=n(96540);const c={},o=t.createContext(c);function l(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:l(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);