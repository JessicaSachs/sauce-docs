"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[82957],{69586:(e,n,t)=>{t.d(n,{Ay:()=>l,RM:()=>a});var s=t(74848),i=t(28453);const a=[];function r(e){const n={code:"code",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["You can clip to a specific element on the page by using the ",(0,s.jsx)(n.code,{children:"clipSelector"})," option when calling Sauce visual."]}),"\n",(0,s.jsx)(n.p,{children:"Notes:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Clipping is done by taking a screenshot of the page then clipping it to the location of the requested element."}),"\n",(0,s.jsx)(n.li,{children:"We will attempt to scroll the element into view before taking the snapshot."}),"\n",(0,s.jsx)(n.li,{children:"We can only take a screenshot of what is visible in the current viewport, however, this can be combined with full page option to enable clipping large vertical elements."}),"\n"]})]})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},76632:(e,n,t)=>{t.d(n,{Ay:()=>o,RM:()=>r});var s=t(74848),i=t(28453),a=t(69586);const r=[...a.RM];function l(e){const n={code:"code",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.Ay,{}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"await browser.sauceVisualCheck('Visible Sale Banner', {\n  // A document.querySelector compatible selector that we should crop the screenshot to\n  clipSelector: '.your-css-selector',\n})\n"})})]})}function o(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8254:(e,n,t)=>{t.d(n,{Ay:()=>l,RM:()=>a});var s=t(74848),i=t(28453);const a=[];function r(e){const n={a:"a",code:"code",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Variable Name"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"SAUCE_USERNAME"})}),(0,s.jsx)(n.td,{children:"required"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Your Sauce Labs username. You can get this from the header of app.saucelabs.com"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"SAUCE_ACCESS_KEY"})}),(0,s.jsx)(n.td,{children:"required"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Your Sauce Labs access key. You can get this from the header of app.saucelabs.com"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"SAUCE_REGION"})}),(0,s.jsx)(n.td,{}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:["The region you'd like to run your Visual tests in. Defaults to ",(0,s.jsx)(n.code,{children:"us-west-1"})," if not supplied. Can be one of the following: ",(0,s.jsx)("br",{})," ",(0,s.jsx)(n.code,{children:"'eu-central-1'"}),", ",(0,s.jsx)(n.code,{children:"'us-west-1'"})," or ",(0,s.jsx)(n.code,{children:"'us-east-4'"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"SAUCE_VISUAL_BUILD_NAME"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"The name you would like to appear in the Sauce Visual dashboard."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"SAUCE_VISUAL_BRANCH"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"The branch name you would like to associate this build with. We recommend using your current VCS branch in CI."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"SAUCE_VISUAL_DEFAULT_BRANCH"})}),(0,s.jsx)(n.td,{}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:["The main branch name you would like to associate this build with. Usually ",(0,s.jsx)(n.code,{children:"main"})," or ",(0,s.jsx)(n.code,{children:"master"})," or alternatively the branch name your current branch was derived from. ",(0,s.jsx)(n.a,{href:"/sauce-docs/pr-preview/pr-2907/visual-testing/workflows/ci",children:"Follow me to learn more"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"SAUCE_VISUAL_PROJECT"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"The label / project you would like to associate this build with."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"SAUCE_VISUAL_BUILD_ID"})}),(0,s.jsx)(n.td,{}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:["For advanced users, a user-supplied SauceLabs Visual build ID. Can be used to create builds in advance using the GraphQL API. This can be used to parallelize tests with multiple browsers, shard, or more. ",(0,s.jsx)("br",{})," By default, this is not set and we create / finish a build during setup / teardown."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"SAUCE_VISUAL_CUSTOM_ID"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"For advanced users, a user-supplied custom ID to identify this build. Can be used in CI to identify / check / re-check the status of a single build. Usage suggestions: CI pipeline ID."})]})]})]})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},78679:(e,n,t)=>{t.d(n,{Ay:()=>d,RM:()=>o});var s=t(74848),i=t(28453);function a(e){const n={admonition:"admonition",code:"code",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["By default, only the current viewport is captured when ",(0,s.jsx)(n.code,{children:".sauceVisualCheck"})," is used. You can opt in to capturing the entire page by using the ",(0,s.jsx)(n.code,{children:"fullPage"})," option. It will capture everything by scrolling and stitching multiple screenshots together."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["It's recommended to use the ",(0,s.jsx)(n.code,{children:"hideAfterFirstScroll"})," option for fixed or sticky position elements such as sticky headers or consent banners."]})}),"\n",(0,s.jsx)(n.p,{children:"Options:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"delayAfterScrollMs"}),": Delay in ms after scrolling and before taking screenshots. The default value is 0. We recommend using this option for lazy loading content."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"disableCSSAnimation"}),": Disable CSS animations and the input caret in the app. The default value is true."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"hideAfterFirstScroll"}),": One or more CSS selectors that we should remove from the page after the first scroll. Useful for hiding fixed elements such as headers, cookie banners, etc."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"hideScrollBars"}),": Hide all scrollbars in the app. The default value is true."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"scrollLimit"}),": Limit the number of screenshots taken for scrolling and stitching. The default value is 10. The value needs to be between 1 and 10."]}),"\n"]})]})}function r(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}var l=t(62443);const o=[...l.RM];function c(e){const n={code:"code",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r,{}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"await browser.sauceVisualCheck('Long content page', {\n  // Enable full page screenshots using the default options\n  fullPage: true,\n});\n\nawait browser.sauceVisualCheck('Long content page', {\n  // Enable full page screenshots and customize the behavior\n  fullPage: {\n    delayAfterScrollMs: 500,\n    disableCSSAnimation: false,\n    hideAfterFirstScroll: [\"#header\"],\n    hideScrollBars: false,\n    scrollLimit: 5\n  },\n});\n"})}),"\n",(0,s.jsx)(l.Ay,{})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},62443:(e,n,t)=>{t.d(n,{Ay:()=>l,RM:()=>a});var s=t(74848),i=t(28453);const a=[];function r(e){const n={admonition:"admonition",p:"p",...(0,i.R)(),...e.components};return(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"The maximum number of scrolls and stitches in a full page screenshot is 10."})})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},32309:(e,n,t)=>{t.d(n,{Ay:()=>l,RM:()=>a});var s=t(74848),i=t(28453);const a=[];function r(e){const n={p:"p",...(0,i.R)(),...e.components};return(0,s.jsx)(n.p,{children:"Sauce Visual Binding allows to configure which kinds of changes should be effective on snapshot."})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},12758:(e,n,t)=>{t.d(n,{Ay:()=>l,RM:()=>a});var s=t(74848),i=t(28453);const a=[];function r(e){const n={p:"p",...(0,i.R)(),...e.components};return(0,s.jsx)(n.p,{children:"Sauce Visual Binding allows to configure which kinds of changes should be effective specific regions of the snapshot."})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},59697:(e,n,t)=>{t.d(n,{Ay:()=>l,RM:()=>a});var s=t(74848),i=t(28453);const a=[];function r(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Sauce Visual allows selective diffing that permits to ignore changes from a certain kind (",(0,s.jsxs)(n.em,{children:["more information ",(0,s.jsx)(n.a,{href:"/visual-testing/selective-diffing/",children:"here"})]}),")."]}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["Selective diffing is only available with ",(0,s.jsx)(n.code,{children:"Balanced"})," diffing method ",(0,s.jsx)(n.strong,{children:"AND"})," with DOM capture enabled."]})})]})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},69919:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>p,default:()=>j,frontMatter:()=>h,metadata:()=>g,toc:()=>x});var s=t(74848),i=t(28453),a=t(11470),r=t(19365),l=t(78679),o=t(76632),c=t(8254),d=t(59697),u=(t(32309),t(12758));const h={sidebar_label:"Nightwatch"},p="Nightwatch Integration",g={id:"visual-testing/integrations/nightwatch",title:"Nightwatch Integration",description:"Introduction",source:"@site/docs/visual-testing/integrations/nightwatch.md",sourceDirName:"visual-testing/integrations",slug:"/visual-testing/integrations/nightwatch",permalink:"/sauce-docs/pr-preview/pr-2907/visual-testing/integrations/nightwatch",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/visual-testing/integrations/nightwatch.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:172477197e4,frontMatter:{sidebar_label:"Nightwatch"},sidebar:"docs",previous:{title:"Java",permalink:"/sauce-docs/pr-preview/pr-2907/visual-testing/integrations/java"},next:{title:"Storybook",permalink:"/sauce-docs/pr-preview/pr-2907/visual-testing/integrations/storybook"}},m={},x=[{value:"Introduction",id:"introduction",level:2},{value:"Quickstart",id:"quickstart",level:2},{value:"Step 1: Add Sauce Visual dependency",id:"step-1-add-sauce-visual-dependency",level:3},{value:"Step 2: Add SauceVisualService to your Nightwatch configuration",id:"step-2-add-saucevisualservice-to-your-nightwatch-configuration",level:3},{value:"Step 3: Add visual tests in your project",id:"step-3-add-visual-tests-in-your-project",level:3},{value:"Step 4: Configure your Sauce Labs credentials",id:"step-4-configure-your-sauce-labs-credentials",level:3},{value:"Step 5: Run the test",id:"step-5-run-the-test",level:3},{value:"Advanced usage",id:"advanced-usage",level:2},{value:"Customizing Your Builds (Environment Variables)",id:"customizing-your-builds-environment-variables",level:3},...c.RM,{value:"Sauce Visual Assertion",id:"sauce-visual-assertion",level:3},{value:"Build attributes",id:"build-attributes",level:3},{value:"Ignored regions",id:"ignored-regions",level:3},{value:"Component-based ignored region",id:"component-based-ignored-region",level:4},{value:"User-specified ignored region",id:"user-specified-ignored-region",level:4},{value:"Selective Diffing",id:"selective-diffing",level:3},...d.RM,{value:"Area-specific configuration",id:"area-specific-configuration",level:4},...u.RM,{value:"Capturing the DOM snapshot",id:"capturing-the-dom-snapshot",level:3},{value:"Full page screenshots",id:"full-page-screenshots",level:3},...l.RM,{value:"Clip to an element",id:"clip-to-an-element",level:3},...o.RM,{value:"Fail on failures",id:"fail-on-failures",level:3},{value:"Skip Execution of Visual Tests",id:"skip-execution-of-visual-tests",level:3},{value:"Example",id:"example",level:2}];function f(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"nightwatch-integration",children:"Nightwatch Integration"}),"\n",(0,s.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsxs)(n.p,{children:["This guide requires an existing Nightwatch project.",(0,s.jsx)("br",{}),"\nYou can alternatively take a look to our ",(0,s.jsx)(n.a,{href:"#example",children:"example repository"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Sauce Visual provides an integration with ",(0,s.jsx)(n.a,{href:"https://nightwatchjs.org/",children:"Nightwatch"})," through a service that you can add to any existing Nightwatch project."]}),"\n",(0,s.jsxs)(n.p,{children:["Sauce Visual adds new commands to the Nightwatch's ",(0,s.jsx)(n.code,{children:"browser"})," object:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"browser.sauceVisualCheck()"}),": Takes a screenshot and send it to Sauce Visual for comparison."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"browser.sauceVisualResults()"}),": Waits for diff calculations to complete and returns a summary of results.\nSee ",(0,s.jsx)(n.a,{href:"#test-results-summary",children:"Test results summary"})," for more details about summary format and sample usage."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"quickstart",children:"Quickstart"}),"\n",(0,s.jsx)(n.h3,{id:"step-1-add-sauce-visual-dependency",children:"Step 1: Add Sauce Visual dependency"}),"\n",(0,s.jsx)(n.p,{children:"Install the Sauce Visual service in your current project."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"npm install --save-dev @saucelabs/nightwatch-sauce-visual-service\n"})}),"\n",(0,s.jsx)(n.h3,{id:"step-2-add-saucevisualservice-to-your-nightwatch-configuration",children:"Step 2: Add SauceVisualService to your Nightwatch configuration"}),"\n",(0,s.jsxs)(n.p,{children:["Add the ",(0,s.jsx)(n.code,{children:"SauceVisualService"})," to your existing configuration (E.g. ",(0,s.jsx)(n.code,{children:"nightwatch.conf.(js|ts)"}),"):"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// ...\nmodule.exports = {\n  // ...\n  // Add the service\n  plugins: [\n    // ... other plugins\n    '@saucelabs/nightwatch-sauce-visual-service',\n  ],\n  // ...\n  test_settings: {\n    // ...\n    default: {\n      // ...\n      sauceVisualService: {\n        buildName: 'Nightwatch Visual Demo Test',\n        project: 'Nightwatch Project',\n        branch: 'main',\n      },\n      // ...\n    },\n    // ...\n  },\n  // ...\n};\n"})}),"\n",(0,s.jsx)(n.h3,{id:"step-3-add-visual-tests-in-your-project",children:"Step 3: Add visual tests in your project"}),"\n",(0,s.jsx)(n.p,{children:"Add a check to one of your tests:"}),"\n",(0,s.jsxs)(a.A,{defaultValue:"Default",values:[{label:"Default",value:"Default"},{label:"Mocha",value:"Mocha"},{label:"CucumberJS",value:"CucumberJS"}],children:[(0,s.jsx)(r.A,{value:"Default",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { NightwatchTests } from 'nightwatch';\n\nconst home: NightwatchTests = {\n  'Sauce Demo test': () => {\n    browser.url('https://saucedemo.com').sauceVisualCheck('Home Page').end();\n  },\n};\n\nexport default home;\n"})})}),(0,s.jsx)(r.A,{value:"Mocha",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"describe('Saucedemo example', function () {\n  it('Check Home Page - 1', (browser) => {\n    browser\n      .url('https://saucedemo.com')\n      // NOTE: adding the `this` context is required for the service\n      // to properly pass the suite and test name to Sauce Labs Visual\n      .sauceVisualCheck('Home Page - 1', this);\n  });\n});\n"})})}),(0,s.jsx)(r.A,{value:"CucumberJS",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const { Given, When } = require('@cucumber/cucumber');\n\nGiven(/^I am on the login page$/, function () {\n  return browser.navigateTo('https://www.saucedemo.com');\n});\n\nWhen(/^I check the page before login$/, function () {\n  return browser.sauceVisualCheck('Before Login');\n});\n// ...\n"})})})]}),"\n",(0,s.jsx)(n.h3,{id:"step-4-configure-your-sauce-labs-credentials",children:"Step 4: Configure your Sauce Labs credentials"}),"\n",(0,s.jsxs)(n.p,{children:["Sauce Visual relies on environment variables for authentications.",(0,s.jsx)("br",{}),"\nBoth ",(0,s.jsx)(n.code,{children:"SAUCE_USERNAME"})," and ",(0,s.jsx)(n.code,{children:"SAUCE_ACCESS_KEY"})," need to be set prior starting your Nightwatch job."]}),"\n",(0,s.jsxs)(n.p,{children:["Username and Access Key can be retrieved from ",(0,s.jsx)(n.a,{href:"https://app.saucelabs.com/user-settings",children:"https://app.saucelabs.com/user-settings"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"export SAUCE_USERNAME=__YOUR_SAUCE_USER_NAME__\nexport SAUCE_ACCESS_KEY=__YOUR_SAUCE_ACCESS_KEY__\n"})}),"\n",(0,s.jsx)(n.h3,{id:"step-5-run-the-test",children:"Step 5: Run the test"}),"\n",(0,s.jsxs)(n.p,{children:["Upon executing your tests for the first time under this step, a visual baseline is automatically created in our system. This baseline serves as the standard for all subsequent Nightwatch tests. As new tests are run, they are compared to this original baseline, with any deviations highlighted to signal visual changes. These comparisons are integral for detecting any unintended visual modifications early in your development cycle. All test builds, including the initial baseline and subsequent runs, can be monitored and managed through the Sauce Labs platform at ",(0,s.jsx)(n.a,{href:"https://app.saucelabs.com/visual/builds",children:"Sauce Visual Builds"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Remember, the baseline is established during the initial run, and any subsequent visual differences detected will be marked for review."}),"\n",(0,s.jsx)(n.p,{children:"At the end of the build, a summary will be displayed in the console:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 Count \u2502 Status     \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 0     \u2502 Approved   \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 1     \u2502 Equal      \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 0     \u2502 Queued     \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 5     \u2502 Unapproved \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 0     \u2502 Rejected   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["More information about the status can be found ",(0,s.jsx)(n.a,{href:"#sauce-visual-assertion",children:"here"})]})}),"\n",(0,s.jsx)(n.h2,{id:"advanced-usage",children:"Advanced usage"}),"\n",(0,s.jsx)(n.h3,{id:"customizing-your-builds-environment-variables",children:"Customizing Your Builds (Environment Variables)"}),"\n",(0,s.jsx)(n.p,{children:"Below are the environment variables available in the Sauce Visual Nightwatch plugin. Keep in mind that the variables defined in Nightwatch configuration have precedence over these."}),"\n",(0,s.jsx)(c.Ay,{}),"\n",(0,s.jsx)(n.h3,{id:"sauce-visual-assertion",children:"Sauce Visual Assertion"}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["This feature is only available when using the ",(0,s.jsx)(n.code,{children:"default"})," and ",(0,s.jsx)(n.code,{children:"CucumberJS"})," TestRunners. It is not available when using the ",(0,s.jsx)(n.code,{children:"mocha"})," TestRunner."]})}),"\n",(0,s.jsx)(n.p,{children:"At the end of each Test you can assert the status of all the visual comparisons that have been made during the test. Sauce Visual will return a summary of the test results in this format:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"{\n    QUEUED: number;     // Diffs that are pending for processing. Should be 0 in case the test is completed without any timeouts\n    EQUAL: number;      // Diffs that have no changes detected\n    UNAPPROVED: number; // Diffs that have detected changes and waiting for action\n    APPROVED: number;   // Diffs that have detected changes and have been approved\n    REJECTED: number;   // Diffs that have detected changes and have been rejected\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"By using the following assertion you can make sure that all the visual comparisons have been completed and approved:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { NightwatchTests } from 'nightwatch';\nimport { DiffStatus } from '@saucelabs/nightwatch-sauce-visual-service';\n\nconst home: NightwatchTests = {\n  'Check Inventory Page': () => {\n    browser\n      .url('https://saucedemo.com')\n      .setValue('input[data-test=\"username\"]', 'standard_user')\n      .setValue('input[data-test=\"password\"]', 'secret_sauce')\n      .click('input[data-test=\"login-button\"]')\n      .waitForElementVisible('.inventory_list')\n      .sauceVisualCheck('Inventory Page')\n      .click('[data-test=\"add-to-cart-sauce-labs-backpack\"]')\n      .sauceVisualCheck('Added backpack to cart')\n      // Here we validate that we don't have any unapproved visual changes\n      // See status codes above\n      .assert.sauceVisualResults(DiffStatus.Unapproved, 0);\n  },\n};\n\nexport default home;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"build-attributes",children:"Build attributes"}),"\n",(0,s.jsxs)(n.p,{children:["When creating the service in Nightwatch's configuration, extra fields can be set to define the context, thus acting on which baselines new snapshots will be compared to. (",(0,s.jsx)(n.a,{href:"/sauce-docs/pr-preview/pr-2907/visual-testing#baseline-matching",children:"More info on baseline matching"}),")."]}),"\n",(0,s.jsx)(n.p,{children:"Options:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"buildName"}),": Name of the build, not used for matching, only for display purposes"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"project"}),": Name of the project, used for matching"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"branch"}),": Name of the branch, used for matching"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"defaultBranch"}),": Name of the default branch, used for matching"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"captureDom"}),": Enable DOM capture globally, can also be enabled on a per-screenshot basis"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// ...\nmodule.exports = {\n  // ...\n  // ...\n  test_settings: {\n    // ...\n    default: {\n      // ...\n      sauceVisualService: {\n        buildName: 'Nightwatch Visual Demo Test',\n        project: 'Nightwatch Project',\n        branch: 'main',\n        // captureDom: true,\n      },\n      // ...\n    },\n    // ...\n  },\n  // ...\n};\n"})}),"\n",(0,s.jsx)(n.h3,{id:"ignored-regions",children:"Ignored regions"}),"\n",(0,s.jsx)(n.p,{children:"In the case you need to ignore some region when running your tests, Sauce Visual provides a way to ignore user-specified areas."}),"\n",(0,s.jsx)(n.p,{children:"Those ignored regions are specified when requesting a new snapshot."}),"\n",(0,s.jsx)(n.h4,{id:"component-based-ignored-region",children:"Component-based ignored region"}),"\n",(0,s.jsx)(n.p,{children:"You can ignore elements from the page based on providing a component by its selector or by a page object reference (if you are using page objects)."}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const page = browser.page.homePage();\nawait browser.sauceVisualCheck('Home Page', {\n  ignore: [\n    // If you are using page objects\n    page.elements.username.selector,\n    //\n    // NOTE: You can't use the normal page object syntax, like '@username' here. Please use the above.\n    // If you do use the normal syntax, then the service will filter out the property, not use it and log a warning like\n    //  Ignoring page object reference: '@username'. Please use the 'pageObjectName.elements.username.selector' annotation.\n    //\n    // If you prefer selectors\n    'input[data-test=\"password\"]',\n  ],\n});\n"})}),"\n",(0,s.jsx)(n.h4,{id:"user-specified-ignored-region",children:"User-specified ignored region"}),"\n",(0,s.jsx)(n.p,{children:"Alternatively, an ignored region can be a specific region that is defined by four elements."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"x"}),", ",(0,s.jsx)(n.code,{children:"y"}),": The location of the top-left corner of the ignored region"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"width"}),": The width of the region to ignore"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"height"}),": The height of the region to ignore"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Note: all values are pixels"})}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"browser\n  .url('https://saucedemo.com')\n  .sauceVisualCheck('Home Page', {\n    ignore: [\n      {\n        x: 100,\n        y: 100,\n        width: 200,\n        height: 200,\n      },\n    ],\n  })\n  .end();\n"})}),"\n",(0,s.jsx)(n.h3,{id:"selective-diffing",children:"Selective Diffing"}),"\n",(0,s.jsx)(d.Ay,{}),"\n",(0,s.jsx)(n.h4,{id:"area-specific-configuration",children:"Area-specific configuration"}),"\n",(0,s.jsx)(u.Ay,{}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"  const login = browser.page.login();\n  login\n    .navigate()\n    .waitForElementVisible('@username')\n    .sauceVisualCheck('Home Page', {\n      diffingMethod: DiffingMethod.Balanced,\n      captureDom: true,\n      regions: [\n        {\n          element: login.elements.username.selector,\n          enableOnly: [],\n        },\n        {\n          element: login.elements.password.selector,\n          enableOnly: ['style],\n        },\n      ],\n    });\n"})}),"\n",(0,s.jsx)(n.h3,{id:"capturing-the-dom-snapshot",children:"Capturing the DOM snapshot"}),"\n",(0,s.jsxs)(n.p,{children:["Sauce Visual does not capture dom snapshot by default. It can be changed in ",(0,s.jsx)(n.code,{children:"sauceVisualCheck"})," options."]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"browser\n  .url('https://saucedemo.com')\n  .sauceVisualCheck('Home Page', {\n    captureDom: true\n  })\n  .end();\n"})}),"\n",(0,s.jsx)(n.h3,{id:"full-page-screenshots",children:"Full page screenshots"}),"\n",(0,s.jsx)(l.Ay,{}),"\n",(0,s.jsx)(n.h3,{id:"clip-to-an-element",children:"Clip to an element"}),"\n",(0,s.jsx)(o.Ay,{}),"\n",(0,s.jsx)(n.h3,{id:"fail-on-failures",children:"Fail on failures"}),"\n",(0,s.jsx)(n.p,{children:"By default, Sauce Visual will not fail the test if there are any failures during the comparison process. A failure will be logged in the Sauce Labs Visual dashboard, but the test will continue to run."}),"\n",(0,s.jsxs)(n.p,{children:["If you want to fail the test when there are failures, you can set the ",(0,s.jsx)(n.code,{children:"failOnFailures"})," option to ",(0,s.jsx)(n.code,{children:"true"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// ...\nmodule.exports = {\n  // ...\n  // ...\n  test_settings: {\n    // ...\n    default: {\n      // ...\n      sauceVisualService: {\n        failOnFailures: true, // Default is false\n      },\n      // ...\n    },\n    // ...\n  },\n  // ...\n};\n"})}),"\n",(0,s.jsx)(n.h3,{id:"skip-execution-of-visual-tests",children:"Skip Execution of Visual Tests"}),"\n",(0,s.jsxs)(n.p,{children:["In the event you're running / debugging tests locally and would like to disable the Sauce Visual integration temporarily, you can use the ",(0,s.jsx)(n.code,{children:"SAUCE_VISUAL_SKIP"})," environment variable with any truthy value. When provided, we'll skip build creation, taking snapshots, and all snapshot based assertions will be marked as successful."]}),"\n",(0,s.jsxs)(n.p,{children:["Available in ",(0,s.jsx)(n.code,{children:"@saucelabs/nightwatch-sauce-visual-service@0.6.0"})," and later."]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.p,{children:["An example project is available ",(0,s.jsx)(n.a,{href:"https://github.com/saucelabs/visual-examples/tree/main/nightwatch",children:"here"}),"."]})]})}function j(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(f,{...e})}):f(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>r});t(96540);var s=t(18215);const i={tabItem:"tabItem_Ymn6"};var a=t(74848);function r(e){let{children:n,hidden:t,className:r}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(i.tabItem,r),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>w});var s=t(96540),i=t(18215),a=t(23104),r=t(56347),l=t(205),o=t(57485),c=t(31682),d=t(89466);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:i}}=e;return{value:n,label:t,attributes:s,default:i}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const i=(0,r.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(i.location.search);n.set(a,e),i.replace({...i.location,search:n.toString()})}),[a,i])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,a=h(e),[r,o]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:a}))),[c,u]=g({queryString:t,groupId:i}),[m,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,a]=(0,d.Dv)(t);return[i,(0,s.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:i}),f=(()=>{const e=c??m;return p({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{f&&o(f)}),[f]);return{selectedValue:r,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),x(e)}),[u,x,a]),tabValues:a}}var x=t(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(74848);function b(e){let{className:n,block:t,selectedValue:s,selectValue:r,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const n=e.currentTarget,t=o.indexOf(n),i=l[t].value;i!==s&&(c(n),r(i))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>o.push(e),onKeyDown:u,onClick:d,...a,className:(0,i.A)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:i}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===i));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function y(e){const n=m(e);return(0,j.jsxs)("div",{className:(0,i.A)("tabs-container",f.tabList),children:[(0,j.jsx)(b,{...e,...n}),(0,j.jsx)(v,{...e,...n})]})}function w(e){const n=(0,x.A)();return(0,j.jsx)(y,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var s=t(96540);const i={},a=s.createContext(i);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);