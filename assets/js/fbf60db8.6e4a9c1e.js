"use strict";(self.webpackChunkcompressa_docs=self.webpackChunkcompressa_docs||[]).push([[245],{7976:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var o=s(4848),t=s(8453);const i={sidebar_position:3},r="Quickstart: Mistral-7B On-Premises",a={id:"onprem/LLM_On-Premises/mistral/index",title:"Quickstart: Mistral-7B On-Premises",description:"This guide will show you how to deploy the Mistral-7B inference on a single A100-40GB GPU.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/onprem/LLM_On-Premises/mistral/index.md",sourceDirName:"onprem/LLM_On-Premises/mistral",slug:"/onprem/LLM_On-Premises/mistral/",permalink:"/onprem/LLM_On-Premises/mistral/",draft:!1,unlisted:!1,editUrl:"https://github.com/compressa-ai/compressa-ai.github.io/edit/main/docs/onprem/LLM_On-Premises/mistral/index.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"onpremSidebar",previous:{title:"Inference",permalink:"/onprem/LLM_On-Premises/inference/"},next:{title:"Finetuning",permalink:"/onprem/LLM_On-Premises/finetuning/"}},l={},c=[{value:"Deploy Compressa",id:"deploy-compressa",level:2},{value:"Download model",id:"download-model",level:2},{value:"Deploy model",id:"deploy-model",level:2},{value:"Model access",id:"model-access",level:2}];function d(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"quickstart-mistral-7b-on-premises",children:"Quickstart: Mistral-7B On-Premises"}),"\n",(0,o.jsxs)(n.p,{children:["This guide will show you how to deploy the Mistral-7B inference on a single A100-40GB GPU.",(0,o.jsx)(n.br,{}),"\n","The A100-40GB GPU allows you to host the Mistral-7B without quantization."]}),"\n",(0,o.jsxs)(n.p,{children:["We recommend using ",(0,o.jsx)(n.a,{href:"https://huggingface.co/openchat/openchat-3.5-0106",children:"openchat/openchat-3.5-0106"})," version of the Mistral-7B.",(0,o.jsx)(n.br,{}),"\n","Experiments demonstrate that this model achieves the best quality across a wide range of tasks among models of this size."]}),"\n",(0,o.jsx)(n.h2,{id:"deploy-compressa",children:"Deploy Compressa"}),"\n",(0,o.jsxs)(n.p,{children:["The first step is to deploy compressa according to the ",(0,o.jsx)(n.a,{href:"/onprem/LLM_On-Premises/setup/",children:"instruction"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Assuming Compressa is deployed on port 8080,\nyou can use the manager's REST API at ",(0,o.jsx)(n.a,{href:"http://localhost:8080/api",children:"http://localhost:8080/api"})," to download and deploy the model."]}),"\n",(0,o.jsxs)(n.p,{children:["Full details about the manager API can be found in the ",(0,o.jsx)(n.a,{href:"/onprem/LLM_On-Premises/services/rest-api",children:"instruction"}),"\nor on the Swagger page at ",(0,o.jsx)(n.code,{children:"http://localhost:8080/api/docs"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"download-model",children:"Download model"}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["If you're deploying Compressa in private network without internet access that step can be skipped.\nPlease use the ",(0,o.jsx)(n.a,{href:"/onprem/LLM_On-Premises/setup/internet-access",children:"instruction"})," to download resources before deployment."]})}),"\n",(0,o.jsxs)(n.p,{children:["You can download the model using the following ",(0,o.jsx)(n.code,{children:"curl"})," command:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"curl -X 'POST' \\\n    'http://localhost:8080/api/v1/models/add/?model_id=openchat%2Fopenchat-3.5-0106' \\\n    -H 'accept: application/json' \\\n    -d ''\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Alternatively, download directly from the Swagger page by clicking ",(0,o.jsx)(n.strong,{children:"Try it out"}),":\n",(0,o.jsx)(n.img,{alt:"Add model",src:s(3606).A+"",width:"2324",height:"1022"})]}),"\n",(0,o.jsxs)(n.p,{children:["The model will be downloaded within a few minutes.",(0,o.jsx)(n.br,{}),"\n","The process can be monitored from the console log or via the ",(0,o.jsx)(n.a,{href:"/onprem/LLM_On-Premises/services/rest-api#get-v1models",children:"API"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"deploy-model",children:"Deploy model"}),"\n",(0,o.jsx)(n.p,{children:"You can also deploy the model using the following curl command:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"curl -X 'POST' \\\n    'http://localhost:8080/api/v1/deploy/' \\\n    -H 'accept: application/json' \\\n    -H 'Content-Type: application/json' \\\n    -d '{\n        \"model_id\": \"openchat/openchat-3.5-0106\"\n    }'\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Or directly from the Swagger page:\n",(0,o.jsx)(n.img,{alt:"Deloy model",src:s(9526).A+"",width:"2354",height:"1514"})]}),"\n",(0,o.jsx)(n.p,{children:"Deployment will take less than a minute."}),"\n",(0,o.jsx)(n.h2,{id:"model-access",children:"Model access"}),"\n",(0,o.jsxs)(n.p,{children:["Once the model is deployed, it will be accessible at ",(0,o.jsx)(n.code,{children:"http://localhost:8080/chat"}),":"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Chat",src:s(6336).A+"",width:"2880",height:"1690"})}),"\n",(0,o.jsxs)(n.p,{children:["and through the OpenAI compatible API at ",(0,o.jsx)(n.code,{children:"http://localhost:8080/openai-api"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"curl -X 'GET' \\\n    'http://localhost:8080/openai-api/v1/models'\n"})})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},6336:(e,n,s)=>{s.d(n,{A:()=>o});const o=s.p+"assets/images/chat-8f8e70880036b752e391b980093048b7.png"},3606:(e,n,s)=>{s.d(n,{A:()=>o});const o=s.p+"assets/images/swagger-add-f34083339d3c7663d4a7599c5ee7915a.png"},9526:(e,n,s)=>{s.d(n,{A:()=>o});const o=s.p+"assets/images/swagger-deploy-e5ce0aca812fa2a46efe0e3c105cc24f.png"},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>a});var o=s(6540);const t={},i=o.createContext(t);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);