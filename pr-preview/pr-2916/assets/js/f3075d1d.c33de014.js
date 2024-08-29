"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[43993],{88642:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var s=t(74848),i=t(28453),a=(t(86025),t(11470)),r=t(19365);const o={id:"cdp-bidi",title:"CDP / BiDi on Sauce Labs",sidebar_label:"Using CDP / BiDi",description:"An introduction to CDP / BiDi usage within Sauce Labs"},l=void 0,u={id:"web-apps/automated-testing/cdp-bidi",title:"CDP / BiDi on Sauce Labs",description:"An introduction to CDP / BiDi usage within Sauce Labs",source:"@site/docs/web-apps/automated-testing/cdp.md",sourceDirName:"web-apps/automated-testing",slug:"/web-apps/automated-testing/cdp-bidi",permalink:"/sauce-docs/pr-preview/pr-2916/web-apps/automated-testing/cdp-bidi",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/web-apps/automated-testing/cdp.md",tags:[],version:"current",lastUpdatedBy:"kristofmuhi",lastUpdatedAt:172492915e4,frontMatter:{id:"cdp-bidi",title:"CDP / BiDi on Sauce Labs",sidebar_label:"Using CDP / BiDi",description:"An introduction to CDP / BiDi usage within Sauce Labs"},sidebar:"docs",previous:{title:"YAML Configuration",permalink:"/sauce-docs/pr-preview/pr-2916/web-apps/automated-testing/replay/yaml"},next:{title:"Examples",permalink:"/sauce-docs/pr-preview/pr-2916/web-apps/automated-testing/cdp-bidi/examples"}},c={},d=[{value:"What You\u2019ll Need",id:"what-youll-need",level:2},{value:"Enabling CDP / BiDi",id:"enabling-cdp--bidi",level:2},{value:"1. Using Selenium",id:"1-using-selenium",level:3},{value:"2. Using Playwright (Selenium Grid)",id:"2-using-playwright-selenium-grid",level:3},{value:"Limitations",id:"limitations",level:2},{value:"Resources",id:"resources",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:'The Chrome DevTools Protocol (CDP) support allows developers to debug web apps running on chromium browsers (such as Google Chrome or Microsoft Edge) by harnessing the power of "DevTools" functionality that is built in those browsers.'}),"\n",(0,s.jsx)(n.p,{children:"Sauce Labs offers you to use this feature using either the CDP API or BiDi (BiDirectional) API in combination with Selenium or Playwright as testing frameworks."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"Selenium has stated in their reference that they will eventually move away from CDP, hence they suggest using the agnostic BiDi API, which abstracts away the implementation details of CDP."})}),"\n",(0,s.jsx)(n.h2,{id:"what-youll-need",children:"What You\u2019ll Need"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["A Sauce Labs account (",(0,s.jsx)(n.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,s.jsx)(n.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")."]}),"\n",(0,s.jsxs)(n.li,{children:["Your Sauce Labs ",(0,s.jsx)(n.a,{href:"https://app.saucelabs.com/user-settings",children:"Username"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"A working development environment for one of the supported languages: Java, Python, or JavaScript (Node.js)."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"enabling-cdp--bidi",children:"Enabling CDP / BiDi"}),"\n",(0,s.jsx)(n.p,{children:"In order to make use of the CDP / BiDi functionality, you have three possibilities:"}),"\n",(0,s.jsx)(n.h3,{id:"1-using-selenium",children:"1. Using Selenium"}),"\n",(0,s.jsxs)(n.p,{children:["If you're using Selenium, you can enable CDP / BiDi by setting the ",(0,s.jsx)(n.code,{children:"devTools"})," parameter in ",(0,s.jsx)(n.code,{children:"sauce:options"})," to ",(0,s.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,s.jsxs)(a.A,{groupId:"lang-ex",defaultValue:"Python",values:[{label:"Java",value:"Java"},{label:"Python",value:"Python"},{label:"WebdriverIO",value:"WebdriverIO"}],children:[(0,s.jsx)(r.A,{value:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'public class SauceLabsTest {\n\n    public static void main(String[] args) {\n\n        ChromeOptions options = new ChromeOptions();\n        options.setBrowserVersion("latest");\n        options.setPlatformName("Windows 10");\n\n        HashMap<String, Object> sauceOptions = new HashMap<>();\n        sauceOptions.put("username", System.getenv("SAUCE_USERNAME"));\n        sauceOptions.put("accessKey", System.getenv("SAUCE_ACCESS_KEY"));\n        sauceOptions.put("devTools", true);\n        sauceOptions.put("name", "My Selenium CDP Test");\n\n        options.setCapability("sauce:options", sauceOptions);\n\n        String sauceUrl = "https://ondemand.us-west-1.saucelabs.com/wd/hub";\n        // Alternatively use EU datacenter\n        // String sauceUrl = "https://ondemand.eu-central-1.saucelabs.com/wd/hub";\n\n        WebDriver driver = new RemoteWebDriver(new URL(sauceUrl), options);\n\n        driver.quit();\n    }\n}\n'})})}),(0,s.jsx)(r.A,{value:"Python",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:"options = ChromeOptions()\noptions.browser_version = 'latest'\noptions.platform_name = 'Windows 10'\n\nsauce_options = {'username': os.environ[\"SAUCE_USERNAME\"],\n                 'accessKey': os.environ[\"SAUCE_ACCESS_KEY\"],\n                 'devTools': True,\n                 'name': 'My Selenium CDP Test'}\n\noptions.set_capability('sauce:options', sauce_options)\nsauce_url = \"https://ondemand.us-west-1.saucelabs.com/wd/hub\"\n# Alternatively use EU datacenter\n# sauce_url = \"https://ondemand.eu-central-1.saucelabs.com/wd/hub\"\n\ndriver = webdriver.Remote(command_executor=sauce_url, options=options)\n"})})}),(0,s.jsx)(r.A,{value:"WebdriverIO",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"const { ChromeOptions } = require('selenium-webdriver');\nconst { Builder, By, Key } = require('selenium-webdriver');\n\nconst SAUCE_USERNAME = process.env.SAUCE_USERNAME;\nconst SAUCE_ACCESS_KEY = process.env.SAUCE_ACCESS_KEY;\n\nconst options = new ChromeOptions();\noptions.browser_version = 'latest';\noptions.platform_name = 'Windows 10';\n\nconst sauce_options = {\n  'username': SAUCE_USERNAME,\n  'accessKey': SAUCE_ACCESS_KEY,\n  'devTools': true,\n  'name': 'My Selenium CDP Test'\n};\n\noptions.set_capability('sauce:options', sauce_options);\n\nconst sauce_url = \"https://ondemand.us-west-1.saucelabs.com/wd/hub\";\n// Alternatively use EU datacenter\n// const sauce_url = \"https://ondemand.eu-central-1.saucelabs.com/wd/hub\";\n\n(async () => {\n  try {\n    const driver = await new Builder().forBrowser('chrome').remote(sauce_url, options).build();\n\n    await driver.get('https://www.example.com'); // Replace with your test URL\n\n    const element = await driver.findElement(By.id('search-box'));\n    await element.sendKeys('Selenium Test');\n    await element.sendKeys(Key.ENTER);\n\n    await driver.quit();\n  } catch (error) {\n    console.error(error);\n  }\n})();\n"})})})]}),"\n",(0,s.jsx)(n.h3,{id:"2-using-playwright-selenium-grid",children:"2. Using Playwright (Selenium Grid)"}),"\n",(0,s.jsx)(n.p,{children:"Using Playwright in conjunction with Selenium Grid, you need to provide the Selenium Remote URL and the capabilities as environment variables:"}),"\n",(0,s.jsxs)(a.A,{groupId:"dc-url",defaultValue:"us",values:[{label:"United States",value:"us"},{label:"Europe",value:"eu"}],children:[(0,s.jsx)(r.A,{value:"us",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'SELENIUM_REMOTE_URL="https://{SAUCE_USERNAME}:{SAUCE_ACCESS_KEY}@ondemand.us-west-1.saucelabs.com:443/wd/hub"\nSELENIUM_REMOTE_CAPABILITIES=\'{"browserName": "chrome", "sauce:options": {"devTools": "true", "name": "My Playwright Selenium Grid CDP Test"}}\'\n'})})}),(0,s.jsx)(r.A,{value:"eu",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'SELENIUM_REMOTE_URL="https://{SAUCE_USERNAME}:{SAUCE_ACCESS_KEY}@ondemand.eu-central-1.saucelabs.com:443/wd/hub"\nSELENIUM_REMOTE_CAPABILITIES=\'{"browserName": "chrome", "sauce:options": {"devTools": "true", "name": "My Playwright Selenium Grid CDP Test"}}\'\n'})})})]}),"\n",(0,s.jsxs)(n.p,{children:["For more information, please refer to the ",(0,s.jsx)(n.a,{href:"https://playwright.dev/docs/selenium-grid",children:"Playwright Selenium Grid documentation"})]}),"\n",(0,s.jsx)(n.h2,{id:"limitations",children:"Limitations"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"CDP / BiDi Sessions are currently limited to 10mins"}),"\n",(0,s.jsx)(n.li,{children:"Extended debugging cannot be used along CDP / BiDi"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://w3c.github.io/webdriver-bidi/",children:"WebDriver BiDi Protocol"}),": Documentation of the BiDirectional WebDriver Protocol"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://chromedevtools.github.io/devtools-protocol/",children:"Chrome DevTools Protocol"}),": Documentation of the Chrome DevTools Protocol"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://www.selenium.dev/documentation/webdriver/bidirectional/chrome_devtools/",children:"Selenium Chrome DevTools"}),": Selenium CDP Usage Documentation"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://playwright.dev/docs/api/class-cdpsession",children:"Playwright CDPSession"}),": Playwright CDP Usage Documentation"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>r});t(96540);var s=t(34164);const i={tabItem:"tabItem_Ymn6"};var a=t(74848);function r(e){let{children:n,hidden:t,className:r}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(i.tabItem,r),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>E});var s=t(96540),i=t(34164),a=t(23104),r=t(56347),o=t(205),l=t(57485),u=t(31682),c=t(70679);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:i}}=e;return{value:n,label:t,attributes:s,default:i}}))}(t);return function(e){const n=(0,u.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const i=(0,r.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(i.location.search);n.set(a,e),i.replace({...i.location,search:n.toString()})}),[a,i])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,a=h(e),[r,l]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:a}))),[u,d]=m({queryString:t,groupId:i}),[b,v]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,a]=(0,c.Dv)(t);return[i,(0,s.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:i}),g=(()=>{const e=u??b;return p({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{g&&l(g)}),[g]);return{selectedValue:r,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),v(e)}),[d,v,a]),tabValues:a}}var v=t(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var w=t(74848);function f(e){let{className:n,block:t,selectedValue:s,selectValue:r,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.a_)(),c=e=>{const n=e.currentTarget,t=l.indexOf(n),i=o[t].value;i!==s&&(u(n),r(i))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,w.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,w.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>l.push(e),onKeyDown:d,onClick:c,...a,className:(0,i.A)("tabs__item",g.tabItem,a?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:a}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,w.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function S(e){const n=b(e);return(0,w.jsxs)("div",{className:(0,i.A)("tabs-container",g.tabList),children:[(0,w.jsx)(f,{...n,...e}),(0,w.jsx)(y,{...n,...e})]})}function E(e){const n=(0,v.A)();return(0,w.jsx)(S,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var s=t(96540);const i={},a=s.createContext(i);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);