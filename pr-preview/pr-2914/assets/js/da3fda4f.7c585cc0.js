"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[42390],{46602:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=i(74848),t=i(28453),s=i(86025);const r={id:"variables-environment-overrides",title:"Managing Variables and Environment Overrides",sidebar_label:"Variables and Environment Overrides"},l=void 0,o={id:"api-testing/variables-environment-overrides",title:"Managing Variables and Environment Overrides",description:"Our API Testing provides the flexibility to combine the use of global, local, and hard-coded variables. In addition, we provide helpful hints as you work with variables.",source:"@site/docs/api-testing/variables-environment-overrides.md",sourceDirName:"api-testing",slug:"/api-testing/variables-environment-overrides",permalink:"/sauce-docs/pr-preview/pr-2914/api-testing/variables-environment-overrides",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/variables-environment-overrides.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:172488024e4,frontMatter:{id:"variables-environment-overrides",title:"Managing Variables and Environment Overrides",sidebar_label:"Variables and Environment Overrides"},sidebar:"docs",previous:{title:"Environments",permalink:"/sauce-docs/pr-preview/pr-2914/api-testing/environments"},next:{title:"CI/CD Integration (apifctl)",permalink:"/sauce-docs/pr-preview/pr-2914/api-testing/integrations/apifctl-cicd-integration"}},d={},c=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Formatting Variables",id:"formatting-variables",level:2},{value:"From the Vault",id:"from-the-vault",level:3},{value:"From a Request Body",id:"from-a-request-body",level:3},{value:"Variable Containers",id:"variable-containers",level:2},{value:"Company Vault",id:"company-vault",level:3},{value:"Project Vault",id:"project-vault",level:3},{value:"Globals/Input Set",id:"globalsinput-set",level:3},{value:"Overriding Variables, Environments",id:"overriding-variables-environments",level:3},{value:"<code>Set</code> Variable Component",id:"set-variable-component",level:3},{value:"Container Priority Examples",id:"container-priority-examples",level:3},{value:"Scenario 1",id:"scenario-1",level:4},{value:"Scenario 2",id:"scenario-2",level:4},{value:"Scenario 3",id:"scenario-3",level:4},{value:"Scenario 4",id:"scenario-4",level:4},{value:"Scenario 5",id:"scenario-5",level:4},{value:"Scenario 6",id:"scenario-6",level:4},{value:"Double Evaluation Capability",id:"double-evaluation-capability",level:3},{value:"Suggested Usage",id:"suggested-usage",level:2},{value:"More Information",id:"more-information",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Our API Testing provides the flexibility to combine the use of global, local, and hard-coded variables. In addition, we provide helpful hints as you work with variables."}),"\n",(0,a.jsx)(n.p,{children:"You do not have to be concerned with organizing variables in a hierarchy from global to local... why? Almost any string can be hardcoded or referenced as a variable. Hardcoding is fine as long as you\u2019re building simple tests, however, it is advisable to parametrize some items when:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"The number of tests is increasing"}),"\n",(0,a.jsx)(n.li,{children:"The complexity of tests is increasing"}),"\n",(0,a.jsx)(n.li,{children:"The number of tested environments is increasing"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Most of the parametrization you will likely do relates to the HTTP request itself."}),"\n",(0,a.jsx)(n.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["An existing API Testing Project and Test. For details on how to create them, see ",(0,a.jsx)(n.a,{href:"/api-testing/quickstart/",children:"API Testing Quickstart"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["Recommended: review ",(0,a.jsx)(n.a,{href:"/api-testing/vault/",children:"Creating Reusable Variables and Snippets with the Vault"})," and ",(0,a.jsx)(n.a,{href:"/api-testing/environments/",children:"Using Test Environments"})]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"formatting-variables",children:"Formatting Variables"}),"\n",(0,a.jsx)(n.h3,{id:"from-the-vault",children:"From the Vault"}),"\n",(0,a.jsxs)(n.p,{children:["Go into your ",(0,a.jsx)(n.a,{href:"/api-testing/vault",children:"Company Vault or Project-specific Vault"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Consider this variable:",(0,a.jsx)("br",{}),(0,a.jsx)("img",{src:(0,s.Ay)("img/api-testing/harcoded.png"),alt:"Hardcoded Variables"})]}),"\n",(0,a.jsx)(n.p,{children:"While the following variable is perfectly valid, it may become painful to update tens or hundreds of tests if the domain changes."}),"\n",(0,a.jsxs)(n.p,{children:["Alternatively, you can use the API Testing Vault to store domain names to solve this problem. Simply add a \u201cdomain\u201d variable in your vault:",(0,a.jsx)("br",{}),(0,a.jsx)("img",{src:(0,s.Ay)("img/api-testing/variableEntry.png"),alt:"Domain Variables"})]}),"\n",(0,a.jsxs)(n.p,{children:["And then edit the ",(0,a.jsx)(n.code,{children:"GET"})," request with ",(0,a.jsx)(n.code,{children:"${domain}"})," like this:"]}),"\n",(0,a.jsx)("img",{src:(0,s.Ay)("img/api-testing/parametrized.png"),alt:"Parametrized Variables"}),"\n",(0,a.jsx)(n.p,{children:"You can also set URL endpoints as variables, for example:"}),"\n",(0,a.jsx)("img",{src:(0,s.Ay)("img/api-testing/urlVariable.png"),alt:"URL Variables"}),"\n",(0,a.jsxs)(n.p,{children:["In this way, you can eliminate duplicate tasks by editing the ",(0,a.jsx)(n.strong,{children:"Vault"})," variable to instantly update all tests based on ",(0,a.jsx)(n.code,{children:"domain"})," and ",(0,a.jsx)(n.code,{children:"url"})," changes."]}),"\n",(0,a.jsx)(n.h3,{id:"from-a-request-body",children:"From a Request Body"}),"\n",(0,a.jsx)(n.p,{children:'Variables are not only bound to URLs. Request bodies can also be handled like "templates" when needed, incorporating variables as in:'}),"\n",(0,a.jsx)("img",{src:(0,s.Ay)("img/api-testing/body.webp"),alt:"BODY"}),"\n",(0,a.jsx)(n.p,{children:"And basically anywhere."}),"\n",(0,a.jsx)(n.p,{children:"Reference variables almost anywhere that you need. Consider the following example assertion:"}),"\n",(0,a.jsx)("img",{src:(0,s.Ay)("img/api-testing/exp.png"),alt:"EXP"}),"\n",(0,a.jsx)(n.p,{children:"Yes, we're using variables as expected values."}),"\n",(0,a.jsx)(n.h2,{id:"variable-containers",children:"Variable Containers"}),"\n",(0,a.jsxs)(n.p,{children:["Explore our variable containers from the ",(0,a.jsx)(n.em,{children:"lowest"})," to the ",(0,a.jsx)(n.em,{children:"highest"})," priority:"]}),"\n",(0,a.jsx)(n.h3,{id:"company-vault",children:"Company Vault"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.a,{href:"/api-testing/vault/#company-vault",children:(0,a.jsx)(n.strong,{children:"Company Vault"})})," is where you can store variables and snippets to use across globally (i.e., across all of your Projects)."]}),"\n",(0,a.jsx)(n.h3,{id:"project-vault",children:"Project Vault"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsxs)(n.a,{href:"/api-testing/vault/#project-vault",children:["Project ",(0,a.jsx)(n.strong,{children:"Vault"})]})," is where you can save variables and snippets that will be specific to that Project (i.e., across all tests). Its variables are injected during test execution."]}),"\n",(0,a.jsxs)(n.p,{children:["If the same variable exists in both in the ",(0,a.jsx)(n.strong,{children:"Company Vault"})," and Project-specific ",(0,a.jsx)(n.strong,{children:"Vault"}),", the one used in the ",(0,a.jsx)(n.strong,{children:"Project Vault"})," will take precedence over the ",(0,a.jsx)(n.strong,{children:"Company Vault"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"globalsinput-set",children:"Globals/Input Set"}),"\n",(0,a.jsxs)(n.p,{children:["These are ",(0,a.jsx)(n.em,{children:"test"}),"-specific and contain the variables needed by the test to perform its duties."]}),"\n",(0,a.jsx)(n.p,{children:"Since Globals/Input Set variables can be overridden to hit different Environments, we recommend considering these variables as containers of the default scenario."}),"\n",(0,a.jsxs)(n.p,{children:["If the same variable exists in both in the ",(0,a.jsx)(n.strong,{children:"Globals/Input Set"})," and Project-specific ",(0,a.jsx)(n.strong,{children:"Vault"}),", the one used in the ",(0,a.jsx)(n.strong,{children:"Globals/Input Set"})," will win over the ",(0,a.jsx)(n.strong,{children:"Vault"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"overriding-variables-environments",children:"Overriding Variables, Environments"}),"\n",(0,a.jsxs)(n.p,{children:["When you declare a variable override (using the ",(0,a.jsx)(n.a,{href:"/dev/api/api-testing/",children:"API"}),", ",(0,a.jsx)(n.a,{href:"/api-testing/integrations/yaml/#env",children:"saucectl command line utility"}),", or the ",(0,a.jsxs)(n.a,{href:"/api-testing/schedule-test",children:[(0,a.jsx)(n.strong,{children:"Schedule"})," tool"]}),") its value will be injected into the test when it is executed."]}),"\n",(0,a.jsxs)(n.p,{children:["If the variable has already been declared in the ",(0,a.jsx)(n.strong,{children:"Vault"})," or the ",(0,a.jsx)(n.strong,{children:"Globals/Input Set"}),", it will be rewritten with the new value."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Environments"})," are collections of overrides. You can save an environment as a preset with a name and reuse it when running a test."]}),"\n",(0,a.jsxs)(n.h3,{id:"set-variable-component",children:[(0,a.jsx)(n.code,{children:"Set"})," Variable Component"]}),"\n",(0,a.jsxs)(n.p,{children:["The last item of the chain, the ",(0,a.jsx)(n.code,{children:"Set"})," commands within a test, will introduce a runtime variable. If a variable with that name has already been declared, it will be overwritten by this."]}),"\n",(0,a.jsxs)(n.p,{children:["From a test, go to ",(0,a.jsx)(n.strong,{children:"Compose"})," > Click ",(0,a.jsx)(n.strong,{children:"Add Component"})," (",(0,a.jsx)(n.strong,{children:"+"})," icon) > Click the ",(0,a.jsx)(n.strong,{children:"Set (variable)"})," component > Fill out the required fields shown > Click the checkmark icon to add to your test."]}),"\n",(0,a.jsx)(n.h3,{id:"container-priority-examples",children:"Container Priority Examples"}),"\n",(0,a.jsx)(n.p,{children:"The following examples describe how container priority works."}),"\n",(0,a.jsx)(n.h4,{id:"scenario-1",children:"Scenario 1"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"COMPANY VAULT: foo = bar\nPROJECT VAULT: foo = bar2\nINPUT SET: foo = bar3\n"})}),"\n",(0,a.jsxs)(n.p,{children:["With this example, the variable ",(0,a.jsx)(n.code,{children:"foo"})," will have the value ",(0,a.jsx)(n.code,{children:"bar3"}),", because Input Set is given priority."]}),"\n",(0,a.jsx)(n.h4,{id:"scenario-2",children:"Scenario 2"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"SET(Variable): foo = bar\nINPUT SET: foo = bar2\n"})}),"\n",(0,a.jsxs)(n.p,{children:["With this example, the variable ",(0,a.jsx)(n.code,{children:"foo"})," will have the value ",(0,a.jsx)(n.code,{children:"bar"}),"."]}),"\n",(0,a.jsx)(n.h4,{id:"scenario-3",children:"Scenario 3"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"GLOBAL VARIABLE: foo = bar\nENVIRONMENT: foo = bar2\nPROJECT VAULT: foo = bar3\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The variable ",(0,a.jsx)(n.code,{children:"foo"})," has value ",(0,a.jsx)(n.code,{children:"bar2"})," if the environment is active, ",(0,a.jsx)(n.code,{children:"bar"})," if the environment is not active."]}),"\n",(0,a.jsx)(n.h4,{id:"scenario-4",children:"Scenario 4"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"INPUT SET: foo = bar\nOVERRIDE: foo = bar2\n(COMPAM=NY/PROJECT)VAULT: foo = bar3\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The variable ",(0,a.jsx)(n.code,{children:"foo"})," has value ",(0,a.jsx)(n.code,{children:"bar2"})," when the test runs through the scheduler, ",(0,a.jsx)(n.code,{children:"bar"})," if the test runs manually."]}),"\n",(0,a.jsx)(n.h4,{id:"scenario-5",children:"Scenario 5"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"SET (Variable): foo = bar\nOVERRIDE: foo = bar2\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The variable ",(0,a.jsx)(n.code,{children:"foo"})," has value ",(0,a.jsx)(n.code,{children:"bar"}),"."]}),"\n",(0,a.jsx)(n.h4,{id:"scenario-6",children:"Scenario 6"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"COMPANY VAULT: foo = bar\nENVIRONMENT: foo = bar2\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The variable ",(0,a.jsx)(n.code,{children:"foo"})," has value ",(0,a.jsx)(n.code,{children:"bar2"})," if the environment is active, ",(0,a.jsx)(n.code,{children:"bar"})," if the environment is not active."]}),"\n",(0,a.jsx)(n.h3,{id:"double-evaluation-capability",children:"Double Evaluation Capability"}),"\n",(0,a.jsx)(n.p,{children:"All variable containers have a \u201cdouble evaluation\u201d capability, meaning that a variable declaration can actually reference another variable. By doing so, you can store the actual data in the variable container that best suits your approach, and then reference it."}),"\n",(0,a.jsx)(n.p,{children:"In the following example, we are storing the actual domains in the Vault, deciding a default in the Globals, and overriding in the environments:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"VAULT:\nproduction_domain: example.com\nstaging_domain: staging_example.com\n\nGLOBALS:\ndomain: ${production_domain}\n\nENVIRONMENTS Name: staging\ndomain: ${staging_domain}\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"If you run a test without environments selection, the test will hit the production domain, because the default value defined in the Globals reference the production domain stored in the Vault."}),"\n",(0,a.jsx)(n.li,{children:"If you run a test selecting the environments, the test will hit the staging domain. The Environments will not know the actual domain, therefore the actual data management will happen within the Vault."}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{type:"caution",children:(0,a.jsx)(n.p,{children:"As you become acquainted with the platform, you may be tempted to use all of these features at once before you\u2019ve achieved sufficient expertise. We should warn you that you may not be prepared for the overall complexity that may occur as a consequence, especially if you double-reference variables."})}),"\n",(0,a.jsx)(n.h2,{id:"suggested-usage",children:"Suggested Usage"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Tests should be as self-contained as possible and should host as much information as possible \u2014 with the help of the ",(0,a.jsx)(n.strong,{children:"Vault"})," \u2014 to perform their operations. In other words, ",(0,a.jsx)(n.strong,{children:"Vault"})," + ",(0,a.jsx)(n.strong,{children:"Globals / Input set"})," should always generate a complete variable scope. In other words, the test should be able to run without further information. Therefore, running a test without any Environment selection should at least lead to no syntax or runtime errors."]}),"\n",(0,a.jsx)(n.li,{children:"Environments and overrides should be used to change some of the values of the variable scope generated by the vault+global/input sets."}),"\n",(0,a.jsxs)(n.li,{children:["Fill the ",(0,a.jsx)(n.strong,{children:"Vault"})," with data that is Project-specific, such as domains, protocols, and API keys. We do not recommend introducing test-specific variables because it would produce an overhead of information that would go unused most of the time."]}),"\n",(0,a.jsxs)(n.li,{children:["Fill the ",(0,a.jsx)(n.strong,{children:"Globals/input set"})," with test-specific variables, such as paths, IDs, dates, and serial numbers."]}),"\n",(0,a.jsx)(n.li,{children:"Don\u2019t overdo things. Parametrize stuff that can actually change, and leave everything else as static strings. Variables are\u2026 well, variable, so an excessive and unnecessary use of them can lead to uncertainty and hard-to-track behaviors."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"more-information",children:"More Information"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/api-testing/vault",children:"Creating Reusable Variables and Snippets with the Vault"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/api-testing/environments/",children:"Creating Environments for Tests"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>l});var a=i(96540);const t={},s=a.createContext(t);function r(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);