"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[364],{2298:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var s=n(4848),t=n(8453);const r={sidebar_position:1},o="Setup",d={id:"docs/setup/index",title:"Setup",description:"Compressa App is distributed as docker containers which are available at Github",source:"@site/docs/docs/setup/index.mdx",sourceDirName:"docs/setup",slug:"/docs/setup/",permalink:"/ru/docs/setup/",draft:!1,unlisted:!1,editUrl:"https://github.com/compressa-ai/docs/main/docs/docs/setup/index.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Compressa",permalink:"/ru/"},next:{title:"On Premise",permalink:"/ru/docs/setup/on-premise"}},l={},c=[{value:"Requirements",id:"requirements",level:2},{value:"1. Linux Server with supported Nvidia GPU",id:"1-linux-server-with-supported-nvidia-gpu",level:4},{value:"2. Cuda Drivers Installed",id:"2-cuda-drivers-installed",level:4},{value:"3. Docker",id:"3-docker",level:4},{value:"4. Nvidia Container Toolkit",id:"4-nvidia-container-toolkit",level:4},{value:"Deployment",id:"deployment",level:2},{value:"1. The further process is simple:",id:"1-the-further-process-is-simple",level:4},{value:"2. Authenticate to docker with your token:",id:"2-authenticate-to-docker-with-your-token",level:4},{value:"3. Get <code>docker-compose.yaml</code> file:",id:"3-get-docker-composeyaml-file",level:4},{value:"4. Get nginx config:",id:"4-get-nginx-config",level:4},{value:"5. Pull the latest Compressa:",id:"5-pull-the-latest-compressa",level:4},{value:"6. Set environment variable and run service:",id:"6-set-environment-variable-and-run-service",level:4}];function a(e){const i={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"setup",children:"Setup"}),"\n",(0,s.jsx)(i.p,{children:"Compressa App is distributed as docker containers which are available at Github\npackage storage and can be deployed in one command."}),"\n",(0,s.jsx)(i.h2,{id:"requirements",children:"Requirements"}),"\n",(0,s.jsx)(i.h4,{id:"1-linux-server-with-supported-nvidia-gpu",children:"1. Linux Server with supported Nvidia GPU"}),"\n",(0,s.jsx)(i.p,{children:"Current release is tested on:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Nvidia A100"}),"\n",(0,s.jsx)(i.li,{children:"Nvidia V100"}),"\n",(0,s.jsx)(i.li,{children:"Nvidia T4"}),"\n",(0,s.jsx)(i.li,{children:"Nvidia 4090"}),"\n",(0,s.jsx)(i.li,{children:"Nvidia 4080"}),"\n",(0,s.jsx)(i.li,{children:"Nvidia 4070 / 4070Ti"}),"\n",(0,s.jsx)(i.li,{children:"Nvidia 3080 / 3080Ti"}),"\n",(0,s.jsx)(i.li,{children:"Nvidia 3070 / 3070Ti"}),"\n",(0,s.jsx)(i.li,{children:"Nvidia 3060 / 3060Ti"}),"\n",(0,s.jsx)(i.li,{children:"Nvidia 2080Ti"}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Server should have at least the same amount of RAM (we recommend 1.2 of GPU's RAM)."}),"\n",(0,s.jsx)(i.h4,{id:"2-cuda-drivers-installed",children:"2. Cuda Drivers Installed"}),"\n",(0,s.jsx)(i.p,{children:"The latest compatible drivers should be installed."}),"\n",(0,s.jsxs)(i.admonition,{type:"note",children:[(0,s.jsx)(i.p,{children:"Default version of CUDA driver can be installed via:"}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"sudo apt update\nsudo apt install software-properties-common -y\nsudo apt install ubuntu-drivers-common -y\nsudo ubuntu-drivers autoinstall\nsudo apt install nvidia-cuda-toolkit\n"})})]}),"\n",(0,s.jsx)(i.h4,{id:"3-docker",children:"3. Docker"}),"\n",(0,s.jsxs)(i.p,{children:["Installation instruction for Ubuntu:",(0,s.jsx)(i.br,{}),"\n",(0,s.jsx)(i.a,{href:"https://docs.docker.com/engine/install/ubuntu/",children:"https://docs.docker.com/engine/install/ubuntu/"})]}),"\n",(0,s.jsxs)(i.p,{children:["It should be the version which supports ",(0,s.jsx)(i.a,{href:"https://docs.docker.com/compose/migrate/",children:"Docker Compose V2"}),"."]}),"\n",(0,s.jsx)(i.h4,{id:"4-nvidia-container-toolkit",children:"4. Nvidia Container Toolkit"}),"\n",(0,s.jsxs)(i.p,{children:["Linux installation instruction:",(0,s.jsx)(i.br,{}),"\n",(0,s.jsx)(i.a,{href:"https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html",children:"https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html"})]}),"\n",(0,s.jsx)(i.h2,{id:"deployment",children:"Deployment"}),"\n",(0,s.jsx)(i.p,{children:"At the first step of integration, Compressa Team provides you with access token."}),"\n",(0,s.jsx)(i.h4,{id:"1-the-further-process-is-simple",children:"1. The further process is simple:"}),"\n",(0,s.jsx)(i.p,{children:"Set environment variable with token:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{children:"export COMPRESSA_TOKEN=<TOKEN>\n"})}),"\n",(0,s.jsx)(i.h4,{id:"2-authenticate-to-docker-with-your-token",children:"2. Authenticate to docker with your token:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"echo $COMPRESSA_TOKEN | docker login -u compressa --password-stdin\n"})}),"\n",(0,s.jsxs)(i.h4,{id:"3-get-docker-composeyaml-file",children:["3. Get ",(0,s.jsx)(i.code,{children:"docker-compose.yaml"})," file:"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{children:"wget https://raw.githubusercontent.com/compressa-ai/compressa-deploy/main/docker-compose.yaml\n"})}),"\n",(0,s.jsx)(i.h4,{id:"4-get-nginx-config",children:"4. Get nginx config:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{children:"wget https://raw.githubusercontent.com/compressa-ai/compressa-deploy/main/nginx.conf\n"})}),"\n",(0,s.jsx)(i.h4,{id:"5-pull-the-latest-compressa",children:"5. Pull the latest Compressa:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{children:"docker compose pull\n"})}),"\n",(0,s.jsx)(i.h4,{id:"6-set-environment-variable-and-run-service",children:"6. Set environment variable and run service:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"DOCKER_GPU_IDS"})," - list of GPU ids which will be visible for Compressa"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"RESOURCES_PATH"})," - path to directory to store models. It can be ",(0,s.jsx)(i.code,{children:"./data"})," for example.",(0,s.jsx)(i.br,{}),"\n","Please set read-write access for this directory using ",(0,s.jsx)(i.code,{children:"chmod -R 777 ./data"})]}),"\n",(0,s.jsx)(i.admonition,{type:"note",children:(0,s.jsxs)(i.p,{children:["If you're deploying Compressa in private network without internet access, please use\nthe ",(0,s.jsx)(i.a,{href:"/ru/docs/setup/on-premise",children:"instruction"})," to download resources."]})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Deploy:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{children:"export DOCKER_GPU_IDS=0\nexport RESOURCES_PATH=./data\ndocker compose up\n"})}),"\n",(0,s.jsx)(i.p,{children:"That's it! The service is available at the port 8080."})]})}function h(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>o,x:()=>d});var s=n(6540);const t={},r=s.createContext(t);function o(e){const i=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:i},e.children)}}}]);