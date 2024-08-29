"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[49545],{23853:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=s(74848),n=s(28453),r=s(86025);s(11470),s(19365);const i={id:"testrail",title:"TestRail Integration",sidebar_label:"TestRail",description:"Integrate your Sauce Labs test results with TestRail using the TestRail CLI."},o=void 0,l={id:"basics/integrations/testrail",title:"TestRail Integration",description:"Integrate your Sauce Labs test results with TestRail using the TestRail CLI.",source:"@site/docs/basics/integrations/testrail.md",sourceDirName:"basics/integrations",slug:"/basics/integrations/testrail",permalink:"/sauce-docs/pr-preview/pr-2916/basics/integrations/testrail",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/basics/integrations/testrail.md",tags:[],version:"current",lastUpdatedBy:"kristofmuhi",lastUpdatedAt:172492915e4,frontMatter:{id:"testrail",title:"TestRail Integration",sidebar_label:"TestRail",description:"Integrate your Sauce Labs test results with TestRail using the TestRail CLI."},sidebar:"docs",previous:{title:"Appdome",permalink:"/sauce-docs/pr-preview/pr-2916/basics/integrations/appdome"},next:{title:"Webhooks",permalink:"/sauce-docs/pr-preview/pr-2916/basics/integrations/webhooks"}},c={},u=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Using the TestRail CLI",id:"using-the-testrail-cli",level:2},{value:"Sample Report",id:"sample-report",level:3},{value:"Sample Command",id:"sample-command",level:3},{value:"Viewing Sauce Labs Test Results in TestRail",id:"viewing-sauce-labs-test-results-in-testrail",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["TestRail provides a ",(0,a.jsx)(t.a,{href:"https://support.testrail.com/hc/en-us/articles/7146548750868-TestRail-CLI#Overview",children:"command line interface tool"})," to import automated test results and automatically create test cases. The TestRail CLI parses JUnit reports and sends execution data to TestRail to centralize all your test results."]}),"\n",(0,a.jsxs)(t.p,{children:["As shown in the diagram below, you can use ",(0,a.jsx)(t.code,{children:"saucectl"})," to run your automated tests in Sauce Labs and generate a JUnit report of your test results in XML format, which can then be imported into TestRail with the TestRail CLI."]}),"\n",(0,a.jsx)("img",{src:(0,r.Ay)("img/integrations/testrail/testrail-1.png"),alt:"Shows the saucectl-TestRail Flow",width:"700"}),"\n",(0,a.jsxs)(t.p,{children:["For more information, see the ",(0,a.jsx)(t.a,{href:"https://support.testrail.com/hc/en-us/articles/7146548750868-Overview-and-installation",children:"TestRail CLI documentation"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["A Sauce Labs account (if you don't have one, start a ",(0,a.jsx)(t.a,{href:"https://saucelabs.com/sign-up",children:"free trial"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Your Sauce Labs ",(0,a.jsx)(t.a,{href:"https://app.saucelabs.com/user-settings",children:"Username and Access Key"})]}),"\n",(0,a.jsxs)(t.li,{children:["A TestRail account (if you don't have one, start a ",(0,a.jsx)(t.a,{href:"https://secure.gurock.com/customers/testrail/trial",children:"free trial"}),")"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"using-the-testrail-cli",children:"Using the TestRail CLI"}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsxs)(t.p,{children:["To get started, see the ",(0,a.jsx)(t.a,{href:"https://github.com/gurock/automation-frameworks-integration/tree/main/samples/javascript/cypress-saucectl",children:"cypress-saucectl"})," sample project on GitHub."]})}),"\n",(0,a.jsx)(t.p,{children:"As mentioned above, the TestRail CLI is designed to parse JUnit reports and import certain execution data by default. TestRail's CLI tool was specially designed to parse Sauce Labs' test reports, including those with multiple executions in one report."}),"\n",(0,a.jsxs)(t.p,{children:["To import Sauce Labs results, when running the TestRail CLI in your command line, use the ",(0,a.jsx)(t.code,{children:"--special-parser saucectl"})," option, which imports all test executions into separate test runs in TestRail."]}),"\n",(0,a.jsx)(t.h3,{id:"sample-report",children:"Sample Report"}),"\n",(0,a.jsxs)(t.p,{children:["The following sample report shows the execution of the same test cases on two different devices (Firefox and Chrome), which can be identified in the ",(0,a.jsx)(t.code,{children:"testsuite"})," element names."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-xml",children:'<testsuites tests="8">\n  <testsuite name="Firefox - test_suite_1.cy.js" tests="1" time="48">\n    <properties>\n      <property name="url" value="https://app.saucelabs.com/tests/7d7544f09a47428fb97ee53d1a5b1419"/>\n      <property name="browser" value="firefox 108"/>\n      <property name="platform" value="Windows 11"/>\n    </properties>\n    <testcase name="Component 1 Verify page structure" time="0.9450" classname="Verify page structure"/>\n  </testsuite>\n  <testsuite name="Firefox - test_suite_2.cy.js" tests="1" time="80">\n    <properties>\n      <property name="url" value="https://app.saucelabs.com/tests/cbb864e049c645e1a96d56e953fe33f0"/>\n      <property name="browser" value="firefox 108"/>\n      <property name="platform" value="Windows 11"/>\n    </properties>\n    <testcase name="Component 2 Verify page structure" time="0.9670" classname="Verify page structure"/>\n  </testsuite>\n  <testsuite name="Chrome - test_suite_1.cy.js" tests="1" time="65">\n    <properties>\n      <property name="url" value="https://app.saucelabs.com/tests/349cf779c0f94e649f7ea6ccc42e1753"/>\n      <property name="browser" value="chrome 106"/>\n      <property name="platform" value="Windows 11"/>\n    </properties>\n    <testcase name="Component 1 Verify page structure" time="0.7500" classname="Verify page structure">\n      <failure type="element not found" message="Fail due to...">stacktrace...</failure>\n    </testcase>\n  </testsuite>\n  <testsuite name="Chrome - test_suite_2.cy.js" tests="1" time="33">\n    <properties>\n      <property name="url" value="https://app.saucelabs.com/tests/c0e3ddae1e104b86b940ed7e8026ff83"/>\n      <property name="browser" value="chrome 106"/>\n      <property name="platform" value="Windows 11"/>\n    </properties>\n    <testcase name="Component 2 Verify page structure"\n    time="0.7570" classname="Verify page structure"/>\n  </testsuite>\n</testsuites>\n'})}),"\n",(0,a.jsxs)(t.p,{children:["The TestRail CLI will create two test runs in TestRail and add the corresponding test results. Each test run contains the same tests, which are ",(0,a.jsx)(t.code,{children:"Component 2 Verify page structure"})," and ",(0,a.jsx)(t.code,{children:"Component 1 Verify page structure"}),"."]}),"\n",(0,a.jsx)("img",{src:(0,r.Ay)("img/integrations/testrail/testrail-2.png"),alt:"Shows a sample report with two test runs for two different devices.",width:"700"}),"\n",(0,a.jsxs)(t.p,{children:["TestRail will also include the ",(0,a.jsx)(t.code,{children:"browser"})," and ",(0,a.jsx)(t.code,{children:"platform"})," values in each test run description and the ",(0,a.jsx)(t.code,{children:"session url"})," in the results of each test case."]}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsx)(t.p,{children:"More than one test case can be executed in one Sauce Labs session, so multiple test results will often have the URL to the same session."})}),"\n",(0,a.jsx)(t.h3,{id:"sample-command",children:"Sample Command"}),"\n",(0,a.jsxs)(t.p,{children:["In the snippet below you can find a sample of the command that parses Sauce Labs reports. The difference is the inclusion of the ",(0,a.jsx)(t.code,{children:"--special-parser saucectl"})," flag."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'$ trcli -y \\\n>  -h https://INSERT-INSTANCE-NAME.testrail.io \\\n>  --project "My Project" \\\n>  --username INSERT-EMAIL \\\n>  --password INSERT-PASSWORD \\\n>  parse_junit \\\n>  --title "Cross-browser automated tests" \\\n>  --special-parser "saucectl" \\\n>  "./saucelabs-report.xml"\n'})}),"\n",(0,a.jsx)(t.h2,{id:"viewing-sauce-labs-test-results-in-testrail",children:"Viewing Sauce Labs Test Results in TestRail"}),"\n",(0,a.jsxs)(t.p,{children:["If you run the ",(0,a.jsx)(t.a,{href:"#sample-command",children:"sample command"})," using the ",(0,a.jsx)(t.a,{href:"#sample-report",children:"sample report"})," above and go to the ",(0,a.jsx)(t.strong,{children:"Test Cases"})," page in TestRail, you will see that test cases were automatically created, resulting in a test suite similar to the one shown in the image below."]}),"\n",(0,a.jsxs)(t.p,{children:["Notice that although there are four ",(0,a.jsx)(t.code,{children:"testcase"})," elements in the report file, they refer to the same two test cases being executed in two different browsers, so only two tests are created in TestRail."]}),"\n",(0,a.jsx)("img",{src:(0,r.Ay)("img/integrations/testrail/testrail-3.png"),alt:"Shows the Test Cases page in TestRail.",width:"700"}),"\n",(0,a.jsxs)(t.p,{children:["In the ",(0,a.jsx)(t.strong,{children:"Test Runs & Results page"}),", you will see two test runs, one for each browser, which is added to the test run title between parenthesis."]}),"\n",(0,a.jsx)("img",{src:(0,r.Ay)("img/integrations/testrail/testrail-4.png"),alt:"Shows two test runs for different devices in the Test Runs & Results page in TestRail.",width:"700"}),"\n",(0,a.jsx)(t.p,{children:"By drilling down to the first test run, relative to the automated tests execution using Chrome, we can see the execution platform information on the test run description and the session URL in the test result. This gives you execution context, as well as links to the Sauce Labs session to find more information about the test execution itself."}),"\n",(0,a.jsx)("img",{src:(0,r.Ay)("img/integrations/testrail/testrail-5.png"),alt:"Shows test run details in TestRail.",width:"700"})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},19365:(e,t,s)=>{s.d(t,{A:()=>i});s(96540);var a=s(34164);const n={tabItem:"tabItem_Ymn6"};var r=s(74848);function i(e){let{children:t,hidden:s,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(n.tabItem,i),hidden:s,children:t})}},11470:(e,t,s)=>{s.d(t,{A:()=>j});var a=s(96540),n=s(34164),r=s(23104),i=s(56347),o=s(205),l=s(57485),c=s(31682),u=s(70679);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:s}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:s,attributes:a,default:n}}=e;return{value:t,label:s,attributes:a,default:n}}))}(s);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,s])}function h(e){let{value:t,tabValues:s}=e;return s.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:s}=e;const n=(0,i.W6)(),r=function(e){let{queryString:t=!1,groupId:s}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:t,groupId:s});return[(0,l.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function f(e){const{defaultValue:t,queryString:s=!1,groupId:n}=e,r=p(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=s.find((e=>e.default))??s[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[c,d]=m({queryString:s,groupId:n}),[f,b]=function(e){let{groupId:t}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,u.Dv)(s);return[n,(0,a.useCallback)((e=>{s&&r.set(e)}),[s,r])]}({groupId:n}),g=(()=>{const e=c??f;return h({value:e,tabValues:r})?e:null})();(0,o.A)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,r]),tabValues:r}}var b=s(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var w=s(74848);function x(e){let{className:t,block:s,selectedValue:a,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),u=e=>{const t=e.currentTarget,s=l.indexOf(t),n=o[s].value;n!==a&&(c(t),i(n))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const s=l.indexOf(e.currentTarget)+1;t=l[s]??l[0];break}case"ArrowLeft":{const s=l.indexOf(e.currentTarget)-1;t=l[s]??l[l.length-1];break}}t?.focus()};return(0,w.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":s},t),children:o.map((e=>{let{value:t,label:s,attributes:r}=e;return(0,w.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...r,className:(0,n.A)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":a===t}),children:s??t},t)}))})}function v(e){let{lazy:t,children:s,selectedValue:r}=e;const i=(Array.isArray(s)?s:[s]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,w.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function y(e){const t=f(e);return(0,w.jsxs)("div",{className:(0,n.A)("tabs-container",g.tabList),children:[(0,w.jsx)(x,{...t,...e}),(0,w.jsx)(v,{...t,...e})]})}function j(e){const t=(0,b.A)();return(0,w.jsx)(y,{...e,children:d(e.children)},String(t))}},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>o});var a=s(96540);const n={},r=a.createContext(n);function i(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);