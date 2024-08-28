"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[98444],{34467:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>t,default:()=>h,frontMatter:()=>d,metadata:()=>a,toc:()=>o});var s=i(74848),l=i(28453);const d={id:"api-lifecycle",title:"API Lifecycle",sidebar_label:"API Lifecycle"},t="API Lifecycle",a={id:"visual-testing/workflows/api-lifecycle",title:"API Lifecycle",description:"This documentation provides a step-by-step guide on how to interact with Sauce Visual API. By following these steps, you'll be able to create builds, upload images, create snapshots, and finish builds. This guide is intended for users who wish to connect directly to the API or implement a binding on their own, including a link to our GraphQL API documentation for further reference.",source:"@site/docs/visual-testing/workflows/api-lifecycle.md",sourceDirName:"visual-testing/workflows",slug:"/visual-testing/workflows/api-lifecycle",permalink:"/sauce-docs/pr-preview/pr-2914/visual-testing/workflows/api-lifecycle",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/visual-testing/workflows/api-lifecycle.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:172488024e4,frontMatter:{id:"api-lifecycle",title:"API Lifecycle",sidebar_label:"API Lifecycle"},sidebar:"docs",previous:{title:"Continuous Integration",permalink:"/sauce-docs/pr-preview/pr-2914/visual-testing/workflows/ci"},next:{title:"Cypress",permalink:"/sauce-docs/pr-preview/pr-2914/visual-testing/integrations/cypress"}},r={},o=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Lifecycle Steps",id:"lifecycle-steps",level:2},{value:"1. Create a Build",id:"1-create-a-build",level:3},{value:"2. Upload Image",id:"2-upload-image",level:3},{value:"3. Create Snapshot",id:"3-create-snapshot",level:3},{value:"4. Finish Build",id:"4-finish-build",level:3},{value:"Additional Information",id:"additional-information",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"api-lifecycle",children:"API Lifecycle"})}),"\n",(0,s.jsx)(n.p,{children:"This documentation provides a step-by-step guide on how to interact with Sauce Visual API. By following these steps, you'll be able to create builds, upload images, create snapshots, and finish builds. This guide is intended for users who wish to connect directly to the API or implement a binding on their own, including a link to our GraphQL API documentation for further reference."}),"\n",(0,s.jsx)(n.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["A Sauce Labs account (",(0,s.jsx)(n.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,s.jsx)(n.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")"]}),"\n",(0,s.jsx)(n.li,{children:"Familiarity with GraphQL queries and mutations"}),"\n",(0,s.jsx)(n.li,{children:"Tools like Postman or cURL for testing API calls"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"lifecycle-steps",children:"Lifecycle Steps"}),"\n",(0,s.jsx)(n.h3,{id:"1-create-a-build",children:"1. Create a Build"}),"\n",(0,s.jsx)(n.p,{children:"To start, you need to create a build. This initializes the process and prepares the environment for subsequent steps."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"GraphQL Mutation:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:'mutation {\n  createBuild(input: { name: "Your Build Name", branch: "Branch name", project: "Project name" }) {\n    id\n    name\n    status\n    url\n  }\n}\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"branch"}),": Branch name to associate the build with."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"project"}),": Label/project to associate the build with."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Expected Response:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "createBuild": {\n      "id": "build-id-here",\n      "name": "Your Build Name",\n      "status": "RUNNING",\n      "url": "https://app.saucelabs.com/visual/builds/build-id-here"\n    }\n  }\n}\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"status"}),": As a newly created build without any snapshots, this will be ",(0,s.jsx)(n.code,{children:"RUNNING"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"url"}),": The URL that can be used any time to check the build on Sauce Labs."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"2-upload-image",children:"2. Upload Image"}),"\n",(0,s.jsx)(n.p,{children:"Next, upload an image to the build. This is a two step process."}),"\n",(0,s.jsxs)(n.p,{children:["First, obtain a signed URL for uploading your image by using the ",(0,s.jsx)(n.code,{children:"createSnapshotUpload"})," mutation."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"GraphQL Mutation:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:'mutation {\n  createSnapshotUpload(input: {buildUuid: "build-id-here"}) {\n    id\n    imageUploadUrl\n    domUploadUrl\n  }\n}\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"buildUuid"}),": The ID of the build created in the previous step."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Expected Response:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "createSnapshotUpload": {\n      "id": "upload-id-here",\n      "imageUploadUrl": "image-upload-url-here",\n      "domUploadUrl": "dom-upload-url-here"\n    }\n  }\n}\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"id"}),": Upload ID to use in the subsequent steps."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"imageUploadUrl"}),": The URL to upload the image in the next step."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"domUploadUrl"}),": The URL to upload the DOM to (if desired and available). Explained in the optional step below."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Next, send a ",(0,s.jsx)(n.code,{children:"PUT"})," request to ",(0,s.jsx)(n.code,{children:"imageUploadUrl"})," with image file in the body of the request. Only ",(0,s.jsx)(n.strong,{children:"PNG"})," files are supported."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"cURL Request:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"curl --request PUT \\\n  --url 'upload-url-here' \\\n  --header 'Content-MD5: base64-encoded-md5-hash' \\\n  --header 'Content-Type: image/png' \\\n  --data '@my-screenshot.png'\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Content-MD5"})," header: Base64 encoded MD5 hash of the file (",(0,s.jsx)(n.code,{children:"my-screenshot.png"}),")."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Content-Type"})," header: Must be set to ",(0,s.jsx)(n.code,{children:"image/png"}),". Not other extensions are supported."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Optional: Upload DOM"}),"\n",(0,s.jsxs)(n.p,{children:["If desired (and available), DOM can be also uploaded to ",(0,s.jsx)(n.code,{children:"domUploadUrl"})," obtained from ",(0,s.jsx)(n.code,{children:"createSnapshotUpload"})," mutation."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"cURL Request:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"curl --request PUT \\\n  --url 'dom-upload-url-here' \\\n  --header 'Content-MD5: base64-encoded-md5-hash' \\\n  --header 'Content-Type: text/html' \\\n  --data '@my-dom.html'\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Content-MD5"})," header: Base64 encoded MD5 hash of the file (",(0,s.jsx)(n.code,{children:"my-dom.html"}),")."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Content-Type"})," header: Must be set to ",(0,s.jsx)(n.code,{children:"text/html"}),". Not other extensions are supported."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"3-create-snapshot",children:"3. Create Snapshot"}),"\n",(0,s.jsx)(n.p,{children:"After uploading your image, add your snapshot along with its metadata to your build."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"GraphQL Mutation:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:'mutation {\n  createSnapshot(\n    input: {\n      buildUuid: "build-id-here", \n      uploadUuid: "upload-id-here", \n      name: "Your snapshot name", \n      operatingSystem: OS,\n      operatingSystemVersion: "os-version",\n      browser: BROWSER,\n      browserVersion: "browser-version"\n    }\n  ) {\n    id\n    uploadId\n  }\n}\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"buildUuid"}),": Build ID that was used in previous steps."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"uploadUuid"}),": Upload ID acquired with ",(0,s.jsx)(n.code,{children:"createSnapshotUpload"})," in the previous step."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"operatingSystem"}),": The operating system used to take the snapshot. Strongly advised to be filled in. Available options: ",(0,s.jsx)(n.code,{children:"ANDROID"}),", ",(0,s.jsx)(n.code,{children:"IOS"}),", ",(0,s.jsx)(n.code,{children:"LINUX"}),", ",(0,s.jsx)(n.code,{children:"MACOS"}),", ",(0,s.jsx)(n.code,{children:"WINDOWS"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"operatingSystemVersion"}),': The operating system version. e.g. "14.5" for ',(0,s.jsx)(n.code,{children:"MACOS"}),' or "11" for ',(0,s.jsx)(n.code,{children:"WINDOWS"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"browser"}),": The browser used to take the snapshot. Strongly advised to be filled in (if available). Available options: ",(0,s.jsx)(n.code,{children:"CHROME"}),", ",(0,s.jsx)(n.code,{children:"EDGE"}),", ",(0,s.jsx)(n.code,{children:"FIREFOX"}),", ",(0,s.jsx)(n.code,{children:"PLAYWRIGHT_WEBKIT"}),", ",(0,s.jsx)(n.code,{children:"SAFARI"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"browserVersion"}),': The browser version. e.g. "120.0.6099.318", "128.0.2".']}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Expected Response:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "createSnapshot": {\n      "id": "snapshot-id-here",\n      "uploadId": "upload-id-here"\n    }\n  }\n}\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"id"}),": The ID of the snapshot that has been created."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"4-finish-build",children:"4. Finish Build"}),"\n",(0,s.jsx)(n.p,{children:"Finally, finish the build to mark it as complete. Keep in mind that this is a necessary step and the build cannot be reused after it's finished."}),"\n",(0,s.jsxs)(n.p,{children:["It's also worth noting that unfinished builds will be automatically closed and set to ",(0,s.jsx)(n.code,{children:"ERRORED"})," state after a certain period of time (default: 3 hours)."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"GraphQL Mutation:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:'mutation {\n  finishBuild(input: {uuid: "build-id-here"}) {\n    id\n    status\n    url\n  }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Expected Response:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "finishBuild": {\n      "id": "build-id-here",\n      "status": "UNAPPROVED",\n      "url": "https://app.saucelabs.com/visual/builds/build-id-here"\n    }\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"additional-information",children:"Additional Information"}),"\n",(0,s.jsxs)(n.p,{children:["For more detailed information about the available queries and mutations, refer to our ",(0,s.jsx)(n.a,{href:"https://api.us-west-1.saucelabs.com/v1/visual/graphql",children:"GraphQL API documentation"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>a});var s=i(96540);const l={},d=s.createContext(l);function t(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);