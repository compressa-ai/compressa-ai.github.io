"use strict";(self.webpackChunkcompressa_docs=self.webpackChunkcompressa_docs||[]).push([[959],{7646:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var t=r(4848),o=r(8453);const s={sidebar_position:2},i="No Internet",c={id:"onprem/setup/internet-access",title:"No Internet",description:"If you're deploying Compressa in private network without internet access,",source:"@site/docs/onprem/setup/internet-access.md",sourceDirName:"onprem/setup",slug:"/onprem/setup/internet-access",permalink:"/onprem/setup/internet-access",draft:!1,unlisted:!1,editUrl:"https://github.com/compressa-ai/compressa-ai.github.io/edit/main/docs/onprem/setup/internet-access.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"onpremSidebar",previous:{title:"Setup",permalink:"/onprem/setup/"},next:{title:"Services",permalink:"/onprem/services/"}},a={},d=[{value:"Download resources",id:"download-resources",level:4},{value:"Unarchive resources",id:"unarchive-resources",level:4},{value:"Set environment variable",id:"set-environment-variable",level:4}];function l(e){const n={a:"a",code:"code",h1:"h1",h4:"h4",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"no-internet",children:"No Internet"}),"\n",(0,t.jsx)(n.p,{children:"If you're deploying Compressa in private network without internet access,\nthe Compressa Team provided you with the GDrive link to archive with needed resources to run the model."}),"\n",(0,t.jsxs)(n.p,{children:["The archive can be downloaded with command line tools like ",(0,t.jsx)(n.a,{href:"https://github.com/wkentaro/gdown",children:"gdown"})," or directly from browser."]}),"\n",(0,t.jsx)(n.h4,{id:"download-resources",children:"Download resources"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"gdown --fuzzy https://drive.google.com/file/d/<FILE_ID>/view?usp=sharing  -O data.tar.gz\n"})}),"\n",(0,t.jsx)(n.h4,{id:"unarchive-resources",children:"Unarchive resources"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"tar -xvf data.tar.gz\nchmod 777 -R data\n"})}),"\n",(0,t.jsx)(n.h4,{id:"set-environment-variable",children:"Set environment variable"}),"\n",(0,t.jsxs)(n.p,{children:["Set the ",(0,t.jsx)(n.code,{children:"RESOURCE_PATH"})," environment variable to the ",(0,t.jsx)(n.code,{children:"data"})," folder from archive."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"export RESOURCES_PATH=./data\n"})}),"\n",(0,t.jsx)(n.p,{children:"Run Compressa as usual.\nThe model will be available from the first run without need to download."})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>c});var t=r(6540);const o={},s=t.createContext(o);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);