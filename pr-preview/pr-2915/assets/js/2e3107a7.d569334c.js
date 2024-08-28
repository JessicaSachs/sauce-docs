"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[74539],{16781:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var i=n(74848),a=n(28453),r=n(86025),s=n(11470),l=n(19365);const o={id:"hiding-data",title:"Hiding Sensitive Data",sidebar_label:"Hiding Data"},d=void 0,c={id:"testfairy/sdk/security/hiding-data",title:"Hiding Sensitive Data",description:"TestFairy offers a valuable feature that allows developers to conceal sensitive information from recorded sessions, ensuring that sensitive data, such as credit card information, remains protected during testing and debugging.",source:"@site/docs/testfairy/sdk/security/hiding-data.md",sourceDirName:"testfairy/sdk/security",slug:"/testfairy/sdk/security/hiding-data",permalink:"/sauce-docs/pr-preview/pr-2915/testfairy/sdk/security/hiding-data",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/testfairy/sdk/security/hiding-data.md",tags:[],version:"current",lastUpdatedBy:"Tian Feng",lastUpdatedAt:1724880664e3,frontMatter:{id:"hiding-data",title:"Hiding Sensitive Data",sidebar_label:"Hiding Data"},sidebar:"docs",previous:{title:"Data Encryption",permalink:"/sauce-docs/pr-preview/pr-2915/testfairy/sdk/security/data-encryption"},next:{title:"Adding the TestFairy SDK",permalink:"/sauce-docs/pr-preview/pr-2915/testfairy/sdk/adding-tf-sdk"}},u={},h=[{value:"Example",id:"example",level:3}];function p(e){const t={admonition:"admonition",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"TestFairy offers a valuable feature that allows developers to conceal sensitive information from recorded sessions, ensuring that sensitive data, such as credit card information, remains protected during testing and debugging."}),"\n",(0,i.jsx)(t.p,{children:"For example, you might want to prevent all information related to credit card data from appearing in the session:"}),"\n",(0,i.jsxs)(s.A,{groupId:"sdk",defaultValue:"android",values:[{label:"Android",value:"android"},{label:"iOS",value:"ios"},{label:"React Native",value:"react"},{label:"Nativescript",value:"native"},{label:"Xamarin",value:"xamarin"}],children:[(0,i.jsxs)(l.A,{value:"android",children:["To hide a view from video, all you need to do is the following:",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"TestFairy.hideView(Integer.valueOf(R.id.my_view));\n"})}),"or",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"TestFairy.hideView(View myView);\n"})}),"Replace ",(0,i.jsx)(t.code,{children:"R.id.my_view"})," with the identifier of the view you wish to hide. Review the full example below:","Example",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"public class MyActivity extends Activity {\n\n    @Override\n    protected void onCreate(Bundle savedInstanceState) {\n\n        super.onCreate(savedInstanceState);\n        setContentView(R.layout.my_activity);\n\n        TestFairy.hideView(findViewById(R.id.credit_card));\n    }\n}\n"})})]}),(0,i.jsxs)(l.A,{value:"ios",children:["To hide a view from video, all you need to do is call the static instance method hideView in the TestFairy class:",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"UIView *view = ...\n[TestFairy hideView:view];\n"})}),"Example",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"@interface MyViewController : UIViewController {\n    IBOutlet UITextField *usernameView;\n    IBOutlet UITextField *creditCardView;\n    IBOutlet UITextField *cvvView;\n}\n\n@implementation MyViewController\n\n- (void)viewDidLoad {\n    [super viewDidLoad];\n\n    [TestFairy hideView:creditCardView];\n    [TestFairy hideView:cvvView];\n}\n"})})]}),(0,i.jsxs)(l.A,{value:"react",children:["To hide views from your recorded session, you must pass a reference to a view to TestFairy. First, give the element to be hidden as a ref attribute. For example:",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-xml",children:'<Text ref="instructions">This will be hidden</Text>\n'})}),"Next, in a component callback, such as componentDidMount, pass the reference ID back to TestFairy by invoking hideView.","Example",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"const TestFairy = require('react-native-testfairy');\nvar MyComponent = React.createClass({\n\n    componentDidMount: function() {\n        TestFairy.hideView(this.refs.instructions);\n    },\n\n    render: function() {\n        return (<Text ref=\"instructions\">This will be hidden</Text>);\n    }\n});\n"})})]}),(0,i.jsxs)(l.A,{value:"native",children:[(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"TestFairySDK.hideView(view);\n"})}),"Example",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"// in Nativescript\nimport { TestFairySDK } from 'nativescript-testfairy';\n\n// in Javascript\nvar TestFairySDK = require('nativescript-testfairy').TestFairySDK;\n\nTestFairySDK.hideView(view);\n"})})]}),(0,i.jsxs)(l.A,{value:"xamarin",children:[(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"TestFairy.HideView (View view) - on Android\nTestFairy.HideView (UIView view) - on iOS\n"})}),"Example",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"// Be sure to import TestFairy\nusing TestFairyLib;\n\n// On Android\nView view = ...\nTestFairy.HideView (view);\n\n// On iOS\nUIView view = ...\nTestFairy.HideView (view);\n"})})]})]}),"\n",(0,i.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(t.p,{children:["Below is a screen taken from a demo video: on the left, you can see what an app usually looks like; on the right is a screenshot taken with the Card Number EditText hidden by ",(0,i.jsx)(t.code,{children:"testfairy-secure-viewid"}),"."]}),"\n",(0,i.jsx)("img",{src:(0,r.Ay)("/img/testfairy/sdk/iphone-with-fields.png"),alt:"iphone no hidden HTML elements",width:"400"}),"\n",(0,i.jsx)("img",{src:(0,r.Ay)("/img/testfairy/sdk/iphone-no-fields.png"),alt:"iphone hidden HTML elements",width:"400"}),"\n",(0,i.jsx)("br",{clear:"both"}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Hidden views are automatically removed from the video before being sent to TestFairy's servers, ensuring that sensitive data is never captured or exposed."}),"\n",(0,i.jsx)(t.li,{children:"Developers can hide multiple views within a session to protect various sensitive elements in the application."}),"\n",(0,i.jsx)(t.li,{children:"It is permissible to add the same view multiple times for hiding without any additional checks."}),"\n"]})})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var i=n(34164);const a={tabItem:"tabItem_Ymn6"};var r=n(74848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.A)(a.tabItem,s),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>j});var i=n(96540),a=n(34164),r=n(23104),s=n(56347),l=n(205),o=n(57485),d=n(31682),c=n(70679);function u(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:i,default:a}}=e;return{value:t,label:n,attributes:i,default:a}}))}(n);return function(e){const t=(0,d.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.W6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(r),(0,i.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=h(e),[s,o]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const i=n.find((e=>e.default))??n[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:r}))),[d,u]=m({queryString:n,groupId:a}),[v,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,c.Dv)(n);return[a,(0,i.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),y=(()=>{const e=d??v;return p({value:e,tabValues:r})?e:null})();(0,l.A)((()=>{y&&o(y)}),[y]);return{selectedValue:s,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),f(e)}),[u,f,r]),tabValues:r}}var f=n(92303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(74848);function w(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.a_)(),c=e=>{const t=e.currentTarget,n=o.indexOf(t),a=l[n].value;a!==i&&(d(t),s(a))},u=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>o.push(e),onKeyDown:u,onClick:c,...r,className:(0,a.A)("tabs__item",y.tabItem,r?.className,{"tabs__item--active":i===t}),children:n??t},t)}))})}function b(e){let{lazy:t,children:n,selectedValue:r}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function x(e){const t=v(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",y.tabList),children:[(0,g.jsx)(w,{...t,...e}),(0,g.jsx)(b,{...t,...e})]})}function j(e){const t=(0,f.A)();return(0,g.jsx)(x,{...e,children:u(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var i=n(96540);const a={},r=i.createContext(a);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);