"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[60637],{88367:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>d,toc:()=>u});var n=o(74848),r=o(28453),t=o(11470),i=o(19365);o(86025);const a={id:"symbolication",title:"Symbolication",sidebar_label:"Symbolication",description:"Generate debug symbols to help debug error callstacks."},l=void 0,d={id:"error-reporting/project-setup/symbolication",title:"Symbolication",description:"Generate debug symbols to help debug error callstacks.",source:"@site/docs/error-reporting/project-setup/symbolication.md",sourceDirName:"error-reporting/project-setup",slug:"/error-reporting/project-setup/symbolication",permalink:"/sauce-docs/pr-preview/pr-2907/error-reporting/project-setup/symbolication",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/project-setup/symbolication.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:172477197e4,frontMatter:{id:"symbolication",title:"Symbolication",sidebar_label:"Symbolication",description:"Generate debug symbols to help debug error callstacks."},sidebar:"backtrace",previous:{title:"Object Reprocessing",permalink:"/sauce-docs/pr-preview/pr-2907/error-reporting/project-setup/object-reprocessing"},next:{title:"Overview",permalink:"/sauce-docs/pr-preview/pr-2907/error-reporting/workflow-integrations/overview"}},c={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Symbol formats",id:"symbol-formats",level:2},{value:"Generate symbol access tokens",id:"generate-symbol-access-tokens",level:2},{value:"Upload to Backtrace",id:"upload-to-backtrace",level:2},{value:"UI",id:"ui",level:3},{value:"API",id:"api",level:3},{value:"Supported archive formats",id:"supported-archive-formats",level:3},{value:"Integrate custom symbol server with Backtrace",id:"integrate-custom-symbol-server-with-backtrace",level:2},{value:"Symbol server requirements",id:"symbol-server-requirements",level:3},{value:"Feature details",id:"feature-details",level:3},{value:"Connecting Backtrace to symbol servers",id:"connecting-backtrace-to-symbol-servers",level:3},{value:"Managing symbol servers",id:"managing-symbol-servers",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Command line debugging",id:"command-line-debugging",level:3},{value:"Invalid token",id:"invalid-token",level:3},{value:"Missing symbols",id:"missing-symbols",level:3},{value:"Reading custom symbol server logs",id:"reading-custom-symbol-server-logs",level:3}];function h(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h2,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsx)(s.p,{children:"Debug symbols are needed when crashes are reported from binaries that have information such as function names and line numbers stripped away. Debug symbols allow Backtrace to provide human-readable callstacks and effectively duplicate error reports. Symbols can be uploaded via the UI or API, or retrieved from a managed private symbol server. Symbols are compilation specific and are applied to crash reports based on matching debug or code ID\u2019s and filename."}),"\n",(0,n.jsx)(s.p,{children:"Please note that only a subset of reports sent to Backtrace require symbols (managed code and some integration paths do not require symbols)."}),"\n",(0,n.jsx)(s.h2,{id:"symbol-formats",children:"Symbol formats"}),"\n",(0,n.jsxs)(s.p,{children:["The sections below cover general information about symbols built on the native tools for their platform. Please note that more information about symbols and other artifacts specific to other integration paths (such as ",(0,n.jsx)(s.a,{href:"https://docs.saucelabs.com/error-reporting/platform-integrations/source-map/",children:"sourcemaps for Javascript"}),", ",(0,n.jsx)(s.a,{href:"https://docs.saucelabs.com/error-reporting/platform-integrations/unity/configuration/#capturing-native-crashes",children:"symbols for Unity"}),", game consoles, etc) are available in the documentation specific to those integration paths."]}),"\n",(0,n.jsxs)(t.A,{groupId:"platforms",defaultValue:"windows",values:[{label:"Windows",value:"windows"},{label:"MacOS",value:"macos"},{label:"iOS",value:"ios"},{label:"Android",value:"android"},{label:"Linux",value:"linux"}],children:[(0,n.jsxs)(i.A,{value:"windows",children:["Debug information is stored in PDB files, and in the case of 64 bit applications, the corresponding .exe or .dll file with debug information.",(0,n.jsx)("b",{children:"With Visual Studio"}),'In Visual Studio, your DEBUG build will generate .pdb symbol files. If you wish to generate symbol files in your RELEASE build or in a custom configuration, make sure that "Generate Debug Info" is turned on in your project\'s Configuration Properties.']}),(0,n.jsxs)(i.A,{value:"macos",children:["Debug information is stored in dSYM files.",(0,n.jsx)("b",{children:"With Xcode"}),(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"Click on the project\u2019s Build-Settings."}),"\n",(0,n.jsx)(s.li,{children:'Search for and select "Debug Information Format", set to "DWARF with dSYM File".'}),"\n",(0,n.jsxs)(s.li,{children:["After building with this setting enabled, the dSYM file will be stored:","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Schema based builds: Derived Data setting in the Locations section of the Xcode preferences"}),"\n",(0,n.jsx)(s.li,{children:"Archived apps: within package contents of the xcarchive file"}),"\n",(0,n.jsx)(s.li,{children:"Not sure? Try the mdfind command (mdfind)"}),"\n"]}),"\n"]}),"\n"]})]}),(0,n.jsxs)(i.A,{value:"ios",children:["Debug information is stored in dSYM files.",(0,n.jsx)("b",{children:"With Xcode"}),(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"Click on the project\u2019s Build-Settings."}),"\n",(0,n.jsx)(s.li,{children:'Search for and select "Debug Information Format", set to "DWARF with dSYM File".'}),"\n",(0,n.jsxs)(s.li,{children:["After building with this setting enabled, the dSYM file will be stored:","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Schema based builds: Derived Data setting in the Locations section of the Xcode preferences"}),"\n",(0,n.jsx)(s.li,{children:"Archived apps: within package contents of the xcarchive file"}),"\n",(0,n.jsx)(s.li,{children:"Not sure? Try the mdfind command (mdfind)"}),"\n"]}),"\n"]}),"\n"]})]}),(0,n.jsxs)(i.A,{value:"android",children:["Debug information is stored in .so files.",(0,n.jsx)("b",{children:"With Android Studio"}),"This involves uploading the native libraries themselves, which are usually found in the APK bundle."]}),(0,n.jsxs)(i.A,{value:"linux",children:["Debug information is stored in ELF or .sym files. We recommend uploading the unstripped executable and/or library files. When uploading the unstripped binary to Backtrace, it must be contained in an archive and cannot be uploaded directly. Additional capabilities (e.g. local variables in debug views) are available if original files are uploaded rather than Breakpad SYM files.",(0,n.jsx)("b",{children:"ELF file with debug info "}),"To generate an ELF file with debug info, refer to compiler specific documentation. For example, this can be done with the -g switch in GCC.",(0,n.jsx)("b",{children:"SYM file via Breakpad"}),"Note that this approach should only be taken if it is impossible to provide the original binaries. Using .sym\u2019s will result in less detailed information.","To generate a .sym, you can use Breakpad\u2019s dump_syms. Assuming the library in question is /lib/libfoo.so and its debugging symbol is /usr/debug/lib/libfoo.so, run: dump_syms /lib/libfoo.so /usr/debug/lib /tmp/libfoo.so.sym.\nYou can find additional info in ",(0,n.jsx)(s.a,{href:"https://www.chromium.org/developers/decoding-crash-dumps/",children:"Breakpad\u2019s documentation"}),"."]})]}),"\n",(0,n.jsx)(s.h2,{id:"generate-symbol-access-tokens",children:"Generate symbol access tokens"}),"\n",(0,n.jsxs)(s.p,{children:["Symbol access tokens are used to upload debug symbols. Go to Project Settings > Project > API Tokens to generate a token with the symbol",":post"," capability. Additional details are available in ",(0,n.jsx)(s.a,{href:"https://docs.saucelabs.com/error-reporting/project-setup/submission-url/#creating-api-tokens",children:"Creating API Tokens and Submission URLs"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"upload-to-backtrace",children:"Upload to Backtrace"}),"\n",(0,n.jsx)(s.h3,{id:"ui",children:"UI"}),"\n",(0,n.jsx)(s.p,{children:"Navigate to Project settings > Symbols > Overview to review your symbol uploads,\nincluding upload history, search functionality, symbol access tokens and more. Backtrace recommends uploading archives (a .tar.gz or .zip file containing one or more .sym, .pdb, .so, .dSYM, or ELF files) of symbols for every build you expect to see crashes for. These symbol files can be uploaded manually or by build automation scripts.\nYou may also specify a tag to any of your symbol uploads in order to group symbols for ease of management. A tag is simply a group of symbols, like a folder on your filesystem. You may want to have different tags for different versions of your application or different platforms. If no tag is specified, symbols are placed into the anon tag."}),"\n",(0,n.jsx)(s.h3,{id:"api",children:"API"}),"\n",(0,n.jsx)(s.p,{children:"In order to build automation around symbol upload, such as integration into a build and release process, you'll want to interface directly with the HTTP API provided by Backtrace."}),"\n",(0,n.jsx)(s.p,{children:"Below is an example of a curl command to submit a symbol archive."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:'curl --data-binary @symbols.tar  -X POST  -H "Expect: gzip" "https://submit.backtrace.io/{your-subdomain}/{symbol-access-token}/symbols"'})}),"\n",(0,n.jsxs)(s.p,{children:["Tags can be appended as a query parameter in the destination url (ie ",(0,n.jsx)(s.code,{children:'"&tag=<tagValue>"'}),")."]}),"\n",(0,n.jsx)(s.h3,{id:"supported-archive-formats",children:"Supported archive formats"}),"\n",(0,n.jsx)(s.p,{children:"Any archive format supported by libarchive 3.2.3 is supported such as .tar, .tar.gz, .zip. Archives should be pre-compressed and be no larger than 10GB where possible."}),"\n",(0,n.jsx)(s.h2,{id:"integrate-custom-symbol-server-with-backtrace",children:"Integrate custom symbol server with Backtrace"}),"\n",(0,n.jsx)(s.p,{children:"Instead of uploading symbols to Backtrace, users may choose to host a symbol server and upload symbols there. The symbol server can be integrated with Backtrace so that symbols are requested as reports requiring them are processed."}),"\n",(0,n.jsx)(s.p,{children:"symbold is the Backtrace service responsible for gathering symbols from connected symbol servers or stores. symbold comes pre configured by Backtrace to automatically download symbols from public third party symbol servers of commonly used libraries such as those from Microsoft, Electron, and others. We refer to these as default public symbol servers. You may also configure connections to your own private symbol servers to speed debugging time and minimize setup effort."}),"\n",(0,n.jsxs)(s.p,{children:["See this ",(0,n.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/windows/win32/debug/symbol-servers-and-symbol-stores",children:"Microsoft guide"})," about setting up symbol servers and symbol stores."]}),"\n",(0,n.jsx)(s.h3,{id:"symbol-server-requirements",children:"Symbol server requirements"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Follow Microsoft's standard symbol structure, ",(0,n.jsx)(s.code,{children:"<url>/<object_name>/<debug_id>/<file>"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Use tools like Windows symstore to generate files in the required structure"}),"\n",(0,n.jsxs)(s.li,{children:["Run ",(0,n.jsx)(s.a,{href:"https://chromium.googlesource.com/chromium/src/+/master/components/crash/content/tools/generate_breakpad_symbols.py",children:"this Breakpad script"})," to generate the symbols and proper directory structure on Linux. An example invocation looks like: ",(0,n.jsx)(s.code,{children:"components/crash/content/tools/generate_breakpad_symbols.py --build-dir=out/gnand --symbols-dir=/tmp/my_symbols/ --binary=out/gnand/lib.unstripped/libchrome.so --clear"}),", but appropriate options may differ depending on your use case."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["Have a web frontend to serve the files via HTTP(S)","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Popular options include nginx, AWS, and Google Cloud buckets"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["Network access from Backtrace to the symbol server","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Firewall and network rules may need adjustments"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.li,{children:"If compressing files, must use CAB mechanism"}),"\n",(0,n.jsx)(s.li,{children:"[Optional] HTTP compression is also supported"}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"feature-details",children:"Feature details"}),"\n",(0,n.jsx)(s.p,{children:"Every time Backtrace receives a report, it is scanned for symbols that do not yet exist in that Backtrace project. A missing symbol event is generated for each of these symbols, and Backtrace then requests symbols from symbol servers accordingly."}),"\n",(0,n.jsx)(s.p,{children:"Backtrace may request symbols from symbol servers for the following debug file, debug id, code file, and code id combinations, to support a variety of customer upload patterns:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"symbol_name = basename(debug_file); id = debug_id, if debug_file and debug _identifier are available"}),"\n",(0,n.jsx)(s.li,{children:"symbol_name = basename(code_file); id = code_id, if code_file and code_id are available and arch=x86_64"}),"\n",(0,n.jsx)(s.li,{children:"symbol_name = basename(code_file); id = debug_id, if code_file and debug_id are available and arch=x86_64"}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"For each of these, Backtrace will concurrently attempt to download from the following URLs from a symbol server. As the first successfully downloaded binary will be used for the purposes of symbolication it is advised to respond to only one of these URLs:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"base-url/symbol_name/id/symbol_name"}),"\n",(0,n.jsx)(s.li,{children:"base-url/symbol_name/id/symbol_name_with_underscore_extension"}),"\n",(0,n.jsx)(s.li,{children:"base-url/symbol_name/id/symbol_name_with_sym_extension"}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:'Where "symbol name with underscore extension" = replace last character of symbol name with underscore, \'_\' (this is typically used as the file extension for CAB compressed binaries on Windows) and where "symbol name with sym extension" = replace or append the extension ".sym" to the symbol name.'}),"\n",(0,n.jsx)(s.p,{children:"For example, if symbol_name = foo.pdb and id = 123, the following URLs are queried:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"base-url/foo.pdb/123/foo.pdb"}),"\n",(0,n.jsx)(s.li,{children:"base-url/foo.pdb/123/foo.pd_"}),"\n",(0,n.jsx)(s.li,{children:"base-url/foo.pdb/123/foo.sym"}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"It is important that symbol servers only host valid symbol files. Symbolication may fail if multiple files exist in these paths, with one containing a valid symbol file and others are invalid."}),"\n",(0,n.jsx)(s.h3,{id:"connecting-backtrace-to-symbol-servers",children:"Connecting Backtrace to symbol servers"}),"\n",(0,n.jsx)(s.p,{children:"You will need the following information to connect:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"URL - HTTPS URL to connect to the symbol server or S3 bucket. When using an AWS S3 bucket, use the HTTPS URL of the region the S3 bucket is hosted from."}),"\n",(0,n.jsx)(s.li,{children:"Name - A descriptive name for this connection."}),"\n",(0,n.jsx)(s.li,{children:"Allowlist - If Allowlist is enabled, then the system will only try to download the symbols specified in the allowlist (no other symbols will be downloaded)."}),"\n",(0,n.jsx)(s.li,{children:"Credentials - Basic Auth, Google Cloud Storage with service secret, or AWS S3 Authentication with bucket name, S3 access key (AWS Key Identifier field), and S3 secret (AWS Secret Key field) are supported. Refer to AWS Account and Access Keys documentation for more information."}),"\n",(0,n.jsx)(s.li,{children:"Proxy Options - If a proxy server is required, these options define the proxy credentials, host, and port."}),"\n",(0,n.jsx)(s.li,{children:"Download Options - How many concurrent downloads to allow, and retry options before adding a symbol to the skip list."}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"managing-symbol-servers",children:"Managing symbol servers"}),"\n",(0,n.jsx)(s.p,{children:"The Symbol Servers Management UI is accessed under Project Settings > Symbols > Symbol Servers. Following is some brief information about each of the tabs and the data within them."}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Strongly recommended"}),": Allowlist - If the allowlist is enabled, then only symbol files in the allowlist will be downloaded. For the public symbol servers that are seeded by default, allowlists are enabled and commonly used symbols are listed for retrieval."]}),"\n",(0,n.jsx)(s.li,{children:"Statistics and Usage - This tab show information about how much has been data has been downloaded, and how many successful or failed downloads there have been since the Symbol Server was added to the system"}),"\n",(0,n.jsx)(s.li,{children:"Blocklist - Items in the blocklist will never be downloaded from the symbol server. Add items to the blocklist if they will not change stack trace information, will not add any additional debugging information, or might cause only networking problems (i.e files too big, they change too often, etc.)."}),"\n",(0,n.jsx)(s.li,{children:"Skip list - Items are automatically added to the skip list if they cannot be downloaded from the symbol server in the specified number of retries (default is 3). Symbols in the skip list will not be requested. The number of retries can be configured. Skip list items over 12 hours old are flushed."}),"\n",(0,n.jsx)(s.li,{children:"Logs - Log information about successful and unsuccessful download and conversion attempts."}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,n.jsx)(s.h3,{id:"command-line-debugging",children:"Command line debugging"}),"\n",(0,n.jsx)(s.p,{children:"If you are blocked on uploading symbols from the command line, try checking verbose output from a tool like curl or similar. Uploading an arhcive in the web browser may also expose additional information or errors."}),"\n",(0,n.jsx)(s.h3,{id:"invalid-token",children:"Invalid token"}),"\n",(0,n.jsxs)(s.p,{children:['If you receive an "invalid token" error in the response when uploading symbols via HTTP, check to make sure that you\'re using a symbol access token and not a submission token. To generate a symbol access token, see ',(0,n.jsx)(s.a,{href:"#generate-symbol-access-tokens",children:"Generating Symbol Access Tokens"}),"."]}),"\n",(0,n.jsx)(s.h3,{id:"missing-symbols",children:"Missing symbols"}),"\n",(0,n.jsxs)(s.p,{children:["See ",(0,n.jsx)(s.a,{href:"https://docs.saucelabs.com/error-reporting/troubleshooting/#missing-symbols",children:"Missing Symbols"})]}),"\n",(0,n.jsx)(s.h3,{id:"reading-custom-symbol-server-logs",children:"Reading custom symbol server logs"}),"\n",(0,n.jsxs)(s.p,{children:["It\u2019s important to note that some failures are expected, due to the wide net Backtrace casts (as explained in ",(0,n.jsx)(s.a,{href:"#feature-details",children:"Symbol server | Feature details"}),"). To troubleshoot, search for the known good path on the symbol server (ie foo.pdb/123/foo.pdb). Successful symbol server requests log lines will include \u201cDownloaded path\u201d, and failed requests log lines will include \u201cDownload failed\u201d with additional information about the error encountered."]})]})}function m(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},19365:(e,s,o)=>{o.d(s,{A:()=>i});o(96540);var n=o(18215);const r={tabItem:"tabItem_Ymn6"};var t=o(74848);function i(e){let{children:s,hidden:o,className:i}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,i),hidden:o,children:s})}},11470:(e,s,o)=>{o.d(s,{A:()=>w});var n=o(96540),r=o(18215),t=o(23104),i=o(56347),a=o(205),l=o(57485),d=o(31682),c=o(89466);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:s,children:o}=e;return(0,n.useMemo)((()=>{const e=s??function(e){return u(e).map((e=>{let{props:{value:s,label:o,attributes:n,default:r}}=e;return{value:s,label:o,attributes:n,default:r}}))}(o);return function(e){const s=(0,d.X)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,o])}function m(e){let{value:s,tabValues:o}=e;return o.some((e=>e.value===s))}function b(e){let{queryString:s=!1,groupId:o}=e;const r=(0,i.W6)(),t=function(e){let{queryString:s=!1,groupId:o}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return o??null}({queryString:s,groupId:o});return[(0,l.aZ)(t),(0,n.useCallback)((e=>{if(!t)return;const s=new URLSearchParams(r.location.search);s.set(t,e),r.replace({...r.location,search:s.toString()})}),[t,r])]}function p(e){const{defaultValue:s,queryString:o=!1,groupId:r}=e,t=h(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:s,tabValues:o}=e;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!m({value:s,tabValues:o}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${o.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const n=o.find((e=>e.default))??o[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:s,tabValues:t}))),[d,u]=b({queryString:o,groupId:r}),[p,f]=function(e){let{groupId:s}=e;const o=function(e){return e?`docusaurus.tab.${e}`:null}(s),[r,t]=(0,c.Dv)(o);return[r,(0,n.useCallback)((e=>{o&&t.set(e)}),[o,t])]}({groupId:r}),y=(()=>{const e=d??p;return m({value:e,tabValues:t})?e:null})();(0,a.A)((()=>{y&&l(y)}),[y]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,t]),tabValues:t}}var f=o(92303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=o(74848);function v(e){let{className:s,block:o,selectedValue:n,selectValue:i,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,t.a_)(),c=e=>{const s=e.currentTarget,o=l.indexOf(s),r=a[o].value;r!==n&&(d(s),i(r))},u=e=>{let s=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const o=l.indexOf(e.currentTarget)+1;s=l[o]??l[0];break}case"ArrowLeft":{const o=l.indexOf(e.currentTarget)-1;s=l[o]??l[l.length-1];break}}s?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":o},s),children:a.map((e=>{let{value:s,label:o,attributes:t}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===s?0:-1,"aria-selected":n===s,ref:e=>l.push(e),onKeyDown:u,onClick:c,...t,className:(0,r.A)("tabs__item",y.tabItem,t?.className,{"tabs__item--active":n===s}),children:o??s},s)}))})}function x(e){let{lazy:s,children:o,selectedValue:r}=e;const t=(Array.isArray(o)?o:[o]).filter(Boolean);if(s){const e=t.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:t.map(((e,s)=>(0,n.cloneElement)(e,{key:s,hidden:e.props.value!==r})))})}function j(e){const s=p(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",y.tabList),children:[(0,g.jsx)(v,{...e,...s}),(0,g.jsx)(x,{...e,...s})]})}function w(e){const s=(0,f.A)();return(0,g.jsx)(j,{...e,children:u(e.children)},String(s))}},28453:(e,s,o)=>{o.d(s,{R:()=>i,x:()=>a});var n=o(96540);const r={},t=n.createContext(r);function i(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);