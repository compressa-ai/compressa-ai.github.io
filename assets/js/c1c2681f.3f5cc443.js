"use strict";(self.webpackChunkcompressa_docs=self.webpackChunkcompressa_docs||[]).push([[4175],{1939:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>r});var l=d(4848),s=d(8453);const i={sidebar_position:1},c="Management API",o={id:"onprem/\u041f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430 Compressa/LLM_management/model_deployment",title:"Management API",description:"Management API \u2014 \u044d\u0442\u043e REST API \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043c\u043e\u0434\u0435\u043b\u044f\u043c\u0438.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/onprem/\u041f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430 Compressa/LLM_management/model_deployment.md",sourceDirName:"onprem/\u041f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430 Compressa/LLM_management",slug:"/onprem/\u041f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430 Compressa/LLM_management/model_deployment",permalink:"/onprem/\u041f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430 Compressa/LLM_management/model_deployment",draft:!1,unlisted:!1,editUrl:"https://github.com/compressa-ai/compressa-ai.github.io/edit/main/i18n/ru/docusaurus-plugin-content-docs/current/onprem/\u041f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430 Compressa/LLM_management/model_deployment.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"onpremSidebar",previous:{title:"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 LLM (UI & API)",permalink:"/onprem/\u041f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430 Compressa/LLM_management/"},next:{title:"Fine-tuning",permalink:"/onprem/\u041f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430 Compressa/LLM_management/fine_tuning"}},a={},r=[{value:"\u0411\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430 \u043c\u043e\u0434\u0435\u043b\u0435\u0439",id:"\u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430-\u043c\u043e\u0434\u0435\u043b\u0435\u0439",level:2},{value:"<code>GET /v1/models/</code>",id:"get-v1models",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440:",id:"\u043f\u0440\u0438\u043c\u0435\u0440",level:4},{value:"\u0421\u0445\u0435\u043c\u0430 \u043e\u0442\u0432\u0435\u0442\u0430:",id:"\u0441\u0445\u0435\u043c\u0430-\u043e\u0442\u0432\u0435\u0442\u0430",level:4},{value:"<code>POST /v1/models/add/</code>",id:"post-v1modelsadd",level:3},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b:",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",level:4},{value:"\u041f\u0440\u0438\u043c\u0435\u0440:",id:"\u043f\u0440\u0438\u043c\u0435\u0440-1",level:4},{value:"\u0421\u0445\u0435\u043c\u0430 \u043e\u0442\u0432\u0435\u0442\u0430:",id:"\u0441\u0445\u0435\u043c\u0430-\u043e\u0442\u0432\u0435\u0442\u0430-1",level:4},{value:"\u0417\u0430\u043f\u0443\u0441\u043a \u043c\u043e\u0434\u0435\u043b\u0435\u0439",id:"\u0437\u0430\u043f\u0443\u0441\u043a-\u043c\u043e\u0434\u0435\u043b\u0435\u0439",level:2},{value:"<code>GET /v1/deploy/</code>",id:"get-v1deploy",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440:",id:"\u043f\u0440\u0438\u043c\u0435\u0440-2",level:4},{value:"\u0421\u0445\u0435\u043c\u0430 \u043e\u0442\u0432\u0435\u0442\u0430:",id:"\u0441\u0445\u0435\u043c\u0430-\u043e\u0442\u0432\u0435\u0442\u0430-2",level:4},{value:"<code>POST /v1/deploy/</code>",id:"post-v1deploy",level:3},{value:"\u0422\u0435\u043b\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0430:",id:"\u0442\u0435\u043b\u043e-\u0437\u0430\u043f\u0440\u043e\u0441\u0430",level:4},{value:"\u041f\u0440\u0438\u043c\u0435\u0440:",id:"\u043f\u0440\u0438\u043c\u0435\u0440-3",level:4},{value:"\u0421\u0445\u0435\u043c\u0430 \u043e\u0442\u0432\u0435\u0442\u0430:",id:"\u0441\u0445\u0435\u043c\u0430-\u043e\u0442\u0432\u0435\u0442\u0430-3",level:4},{value:"<code>GET /v1/deploy/status</code>",id:"get-v1deploystatus",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440:",id:"\u043f\u0440\u0438\u043c\u0435\u0440-4",level:4},{value:"\u0421\u0445\u0435\u043c\u0430 \u043e\u0442\u0432\u0435\u0442\u0430:",id:"\u0441\u0445\u0435\u043c\u0430-\u043e\u0442\u0432\u0435\u0442\u0430-4",level:4},{value:"<code>POST /v1/deploy/interrupt/</code>",id:"post-v1deployinterrupt",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440:",id:"\u043f\u0440\u0438\u043c\u0435\u0440-5",level:4},{value:"\u0421\u0445\u0435\u043c\u0430 \u043e\u0442\u0432\u0435\u0442\u0430:",id:"\u0441\u0445\u0435\u043c\u0430-\u043e\u0442\u0432\u0435\u0442\u0430-5",level:4},{value:"Jobs",id:"jobs",level:2},{value:"<code>GET /v1/jobs/</code>",id:"get-v1jobs",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440:",id:"\u043f\u0440\u0438\u043c\u0435\u0440-6",level:4},{value:"\u0421\u0445\u0435\u043c\u0430 \u043e\u0442\u0432\u0435\u0442\u0430:",id:"\u0441\u0445\u0435\u043c\u0430-\u043e\u0442\u0432\u0435\u0442\u0430-6",level:4},{value:"<code>GET /v1/jobs/{job_id}/status/</code>",id:"get-v1jobsjob_idstatus",level:3},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b:",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b-1",level:4},{value:"\u041f\u0440\u0438\u043c\u0435\u0440:",id:"\u043f\u0440\u0438\u043c\u0435\u0440-7",level:4},{value:"\u0421\u0445\u0435\u043c\u0430 \u043e\u0442\u0432\u0435\u0442\u0430:",id:"\u0441\u0445\u0435\u043c\u0430-\u043e\u0442\u0432\u0435\u0442\u0430-7",level:4},{value:"<code>POST /v1/jobs/{job_id}/interrupt/</code>",id:"post-v1jobsjob_idinterrupt",level:3},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b:",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b-2",level:4},{value:"\u041f\u0440\u0438\u043c\u0435\u0440:",id:"\u043f\u0440\u0438\u043c\u0435\u0440-8",level:4},{value:"\u0421\u0445\u0435\u043c\u0430 \u043e\u0442\u0432\u0435\u0442\u0430:",id:"\u0441\u0445\u0435\u043c\u0430-\u043e\u0442\u0432\u0435\u0442\u0430-8",level:4}];function t(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"management-api",children:"Management API"}),"\n",(0,l.jsxs)(n.p,{children:["Management API \u2014 \u044d\u0442\u043e ",(0,l.jsx)(n.strong,{children:"REST API"})," \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043c\u043e\u0434\u0435\u043b\u044f\u043c\u0438."]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"URL"}),": ",(0,l.jsx)(n.code,{children:"http://localhost:8080/pod-1/api/"})]}),"\n",(0,l.jsx)(n.p,{children:"\u0421 \u0435\u0433\u043e \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u043d\u043e\u0432\u0443\u044e \u043c\u043e\u0434\u0435\u043b\u044c \u0432 Compressa"}),"\n",(0,l.jsx)(n.li,{children:"\u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u043c\u043e\u0434\u0435\u043b\u044c \u0434\u043b\u044f \u0438\u043d\u0444\u0435\u0440\u0435\u043d\u0441\u0430"}),"\n",(0,l.jsx)(n.li,{children:"\u041f\u0440\u043e\u0432\u0435\u0441\u0442\u0438 \u0434\u043e\u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u043c\u043e\u0434\u0435\u043b\u0438"}),"\n",(0,l.jsx)(n.li,{children:"\u0418 \u0442. \u0434."}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"\u0422\u0430\u043a\u0436\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f Swagger, \u0435\u0441\u043b\u0438 \u0432\u0430\u043c \u0443\u0434\u043e\u0431\u043d\u0435\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0441 REST API \u043d\u0430\u043f\u0440\u044f\u043c\u0443\u044e \u0438\u0437 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430"}),"\n",(0,l.jsx)(n.strong,{children:"URL"}),": ",(0,l.jsx)(n.code,{children:"http://localhost:8080/pod-1/api/docs/"})]}),"\n",(0,l.jsx)(n.h2,{id:"\u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430-\u043c\u043e\u0434\u0435\u043b\u0435\u0439",children:"\u0411\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430 \u043c\u043e\u0434\u0435\u043b\u0435\u0439"}),"\n",(0,l.jsx)(n.h3,{id:"get-v1models",children:(0,l.jsx)(n.code,{children:"GET /v1/models/"})}),"\n",(0,l.jsx)(n.p,{children:"\u0421\u043f\u0438\u0441\u043e\u043a \u043c\u043e\u0434\u0435\u043b\u0435\u0439, \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0445 \u0434\u043b\u044f \u0437\u0430\u043f\u0443\u0441\u043a\u0430 \u0438 \u0434\u043e\u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f."}),"\n",(0,l.jsx)(n.h4,{id:"\u043f\u0440\u0438\u043c\u0435\u0440",children:"\u041f\u0440\u0438\u043c\u0435\u0440:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"curl -X 'GET' \\\n  'http://localhost:8080/pod-1/api/v1/models/' \\\n  -H 'accept: application/json'\n"})}),"\n",(0,l.jsx)(n.h4,{id:"\u0441\u0445\u0435\u043c\u0430-\u043e\u0442\u0432\u0435\u0442\u0430",children:"\u0421\u0445\u0435\u043c\u0430 \u043e\u0442\u0432\u0435\u0442\u0430:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:'[\n  {\n    "model_id": "string",\n    "adapter": true,\n    "base_model_id": "string"\n  }\n]\n'})}),"\n",(0,l.jsx)(n.h3,{id:"post-v1modelsadd",children:(0,l.jsx)(n.code,{children:"POST /v1/models/add/"})}),"\n",(0,l.jsx)(n.p,{children:"\u0421\u043a\u0430\u0447\u0438\u0432\u0430\u043d\u0438\u0435 \u043c\u043e\u0434\u0435\u043b\u0438 \u0441 Hugging Face."}),"\n",(0,l.jsx)(n.h4,{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",children:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"query"}),": ",(0,l.jsx)(n.code,{children:"model_id"})," - \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u043c\u043e\u0434\u0435\u043b\u0438 \u043d\u0430 Hugging Face,\n\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 ",(0,l.jsx)(n.code,{children:"openchat/openchat-3.5-0106"})," \u0434\u043b\u044f ",(0,l.jsx)(n.a,{href:"https://huggingface.co/openchat/openchat-3.5-0106",children:"\u0441\u0441\u044b\u043b\u043a\u0438"}),"."]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-1",children:"\u041f\u0440\u0438\u043c\u0435\u0440:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"curl -X 'POST' \\\n  'http://localhost:8080/pod-1/api/v1/models/add/?model_id=mymodel_id' \\\n  -H 'accept: application/json' \\\n  -d ''\n"})}),"\n",(0,l.jsx)(n.h4,{id:"\u0441\u0445\u0435\u043c\u0430-\u043e\u0442\u0432\u0435\u0442\u0430-1",children:"\u0421\u0445\u0435\u043c\u0430 \u043e\u0442\u0432\u0435\u0442\u0430:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:'{\n  "id": "4d78d943-1896-4d7b-9f11-b10cc2389ba3",\n  "name": "DOWNLOAD_mymodel_id",\n  "status": "RUNNING",\n  "started_at": "2024-03-21T09:58:29.846708"\n}\n'})}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"\u0437\u0430\u043f\u0443\u0441\u043a-\u043c\u043e\u0434\u0435\u043b\u0435\u0439",children:"\u0417\u0430\u043f\u0443\u0441\u043a \u043c\u043e\u0434\u0435\u043b\u0435\u0439"}),"\n",(0,l.jsx)(n.h3,{id:"get-v1deploy",children:(0,l.jsx)(n.code,{children:"GET /v1/deploy/"})}),"\n",(0,l.jsx)(n.p,{children:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u0442\u0435\u043a\u0443\u0449\u0435\u0439 \u0440\u0430\u0437\u0432\u0435\u0440\u043d\u0443\u0442\u043e\u0439 \u043c\u043e\u0434\u0435\u043b\u0438."}),"\n",(0,l.jsx)(n.h4,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-2",children:"\u041f\u0440\u0438\u043c\u0435\u0440:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"curl -X 'GET' \\\n  'http://localhost:8080/api/pod-1/v1/deploy/' \\\n  -H 'accept: application/json'\n"})}),"\n",(0,l.jsx)(n.h4,{id:"\u0441\u0445\u0435\u043c\u0430-\u043e\u0442\u0432\u0435\u0442\u0430-2",children:"\u0421\u0445\u0435\u043c\u0430 \u043e\u0442\u0432\u0435\u0442\u0430:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:'{\n  "model_id": "string",\n  "adapter_ids": [\n    "string"\n  ]\n}\n'})}),"\n",(0,l.jsx)(n.h3,{id:"post-v1deploy",children:(0,l.jsx)(n.code,{children:"POST /v1/deploy/"})}),"\n",(0,l.jsxs)(n.p,{children:["\u0417\u0430\u043f\u0443\u0441\u043a \u043c\u043e\u0434\u0435\u043b\u0435\u0439 \u0438 \u0434\u043e\u043e\u0431\u0443\u0447\u0435\u043d\u043d\u044b\u0445 \u0430\u0434\u0430\u043f\u0442\u0435\u0440\u043e\u0432 \u0434\u043b\u044f \u0438\u043d\u0444\u0435\u0440\u0435\u043d\u0441\u0430. \u0421\u043f\u0438\u0441\u043e\u043a id \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,l.jsx)(n.code,{children:"GET /v1/models/"}),"."]}),"\n",(0,l.jsx)(n.h4,{id:"\u0442\u0435\u043b\u043e-\u0437\u0430\u043f\u0440\u043e\u0441\u0430",children:"\u0422\u0435\u043b\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0430:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:'{\n  "model_id": "string",\n  "adapter_ids": [\n    "string"\n  ]\n}\n'})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"model_id"})," - \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u043c\u043e\u0434\u0435\u043b\u0438"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"adapter_ids"})," - \u0441\u043f\u0438\u0441\u043e\u043a \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u043e\u0432 \u0430\u0434\u0430\u043f\u0442\u0435\u0440\u043e\u0432"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-3",children:"\u041f\u0440\u0438\u043c\u0435\u0440:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"curl -X 'POST' \\\n  'http://localhost:8080/pod-1/api/v1/deploy/' \\\n  -H 'accept: application/json' \\\n  -H 'Content-Type: application/json' \\\n  -d '{\n  \"model_id\": \"model_id1\",\n  \"adapter_ids\": [\n    \"adapter_id1\",\n    \"adapter_id2\"\n  ]\n}'\n"})}),"\n",(0,l.jsx)(n.h4,{id:"\u0441\u0445\u0435\u043c\u0430-\u043e\u0442\u0432\u0435\u0442\u0430-3",children:"\u0421\u0445\u0435\u043c\u0430 \u043e\u0442\u0432\u0435\u0442\u0430:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:'{\n  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "name": "string",\n  "status": "CREATED",\n  "started_at": "2024-03-21T10:10:07.521Z"\n}\n'})}),"\n",(0,l.jsx)(n.h3,{id:"get-v1deploystatus",children:(0,l.jsx)(n.code,{children:"GET /v1/deploy/status"})}),"\n",(0,l.jsx)(n.p,{children:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0441\u0442\u0430\u0442\u0443\u0441 \u0440\u0430\u0437\u0432\u0435\u0440\u043d\u0443\u0442\u043e\u0439 \u043c\u043e\u0434\u0435\u043b\u0438."}),"\n",(0,l.jsx)(n.h4,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-4",children:"\u041f\u0440\u0438\u043c\u0435\u0440:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"curl -X 'GET' \\\n  'http://localhost:8080/pod-1/api/v1/deploy/status/' \\\n  -H 'accept: application/json'\n"})}),"\n",(0,l.jsx)(n.h4,{id:"\u0441\u0445\u0435\u043c\u0430-\u043e\u0442\u0432\u0435\u0442\u0430-4",children:"\u0421\u0445\u0435\u043c\u0430 \u043e\u0442\u0432\u0435\u0442\u0430:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:'{\n  "model_id": "model_id1",\n  "adapter_ids": [\n    "adapter_id1",\n    "adapter_id2"\n  ],\n  "job": {\n    "id": "8a63349c-078f-4e98-8968-4f011593329c",\n    "name": "DEPLOY_model_id1_adapters_id1_id2",\n    "status": "RUNNING",\n    "started_at": "2024-03-21T07:35:16.861681"\n  }\n}\n'})}),"\n",(0,l.jsx)(n.h3,{id:"post-v1deployinterrupt",children:(0,l.jsx)(n.code,{children:"POST /v1/deploy/interrupt/"})}),"\n",(0,l.jsx)(n.p,{children:"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u0442\u0435\u043a\u0443\u0449\u0435\u0439 \u0440\u0430\u0437\u0432\u0435\u0440\u043d\u0443\u0442\u043e\u0439 \u043c\u043e\u0434\u0435\u043b\u0438."}),"\n",(0,l.jsx)(n.h4,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-5",children:"\u041f\u0440\u0438\u043c\u0435\u0440:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"curl -X 'POST' \\\n  'http://localhost:8080/pod-1/api/v1/deploy/interrupt/' \\\n  -H 'accept: application/json' \\\n  -d ''\n"})}),"\n",(0,l.jsx)(n.h4,{id:"\u0441\u0445\u0435\u043c\u0430-\u043e\u0442\u0432\u0435\u0442\u0430-5",children:"\u0421\u0445\u0435\u043c\u0430 \u043e\u0442\u0432\u0435\u0442\u0430:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:'{\n  "id": "8a63349c-078f-4e98-8968-4f011593329c",\n  "name": "DEPLOY_model_id1_adapters_id1_id2",\n  "status": "RUNNING",\n  "started_at": "2024-03-21T07:35:16.861681"\n}\n'})}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"jobs",children:"Jobs"}),"\n",(0,l.jsx)(n.p,{children:"\u041e\u043f\u0435\u0440\u0430\u0446\u0438\u0438, \u0442\u0430\u043a\u0438\u0435 \u043a\u0430\u043a \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043c\u043e\u0434\u0435\u043b\u0438 \u0438\u043b\u0438 \u0440\u0430\u0437\u0432\u0435\u0440\u0442\u044b\u0432\u0430\u043d\u0438\u0435, \u0441\u0432\u044f\u0437\u0430\u043d\u044b \u0441 jobs.\n\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 API \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0442 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435\u043c jobs."}),"\n",(0,l.jsx)(n.h3,{id:"get-v1jobs",children:(0,l.jsx)(n.code,{children:"GET /v1/jobs/"})}),"\n",(0,l.jsx)(n.p,{children:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0432\u0441\u0435 jobs \u0441\u043e \u0441\u0442\u0430\u0442\u0443\u0441\u0430\u043c\u0438."}),"\n",(0,l.jsx)(n.h4,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-6",children:"\u041f\u0440\u0438\u043c\u0435\u0440:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"curl -X 'GET' \\\n  'http://localhost:8080/pod-1/api/v1/jobs/' \\\n  -H 'accept: application/json'\n"})}),"\n",(0,l.jsx)(n.h4,{id:"\u0441\u0445\u0435\u043c\u0430-\u043e\u0442\u0432\u0435\u0442\u0430-6",children:"\u0421\u0445\u0435\u043c\u0430 \u043e\u0442\u0432\u0435\u0442\u0430:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:'[\n  {\n    "id": "8a63349c-078f-4e98-8968-4f011593329c",\n    "name": "DEPLOY_model_id1_adapters_id1_id2",\n    "status": "RUNNING",\n    "started_at": "2024-03-21T07:35:16.861681"\n  },\n  {\n    "id": "4d78d943-1896-4d7b-9f11-b10cc2389ba3",\n    "name": "DOWNLOAD_test",\n    "status": "FINISHED",\n    "started_at": "2024-03-21T09:58:29.846708"\n  }\n]\n'})}),"\n",(0,l.jsx)(n.h3,{id:"get-v1jobsjob_idstatus",children:(0,l.jsx)(n.code,{children:"GET /v1/jobs/{job_id}/status/"})}),"\n",(0,l.jsxs)(n.p,{children:["\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439 \u0441\u0442\u0430\u0442\u0443\u0441 job \u0441 ",(0,l.jsx)(n.code,{children:"job_id"}),"."]}),"\n",(0,l.jsx)(n.h4,{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b-1",children:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"path"}),": ",(0,l.jsx)(n.code,{children:"job_id"})]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-7",children:"\u041f\u0440\u0438\u043c\u0435\u0440:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"curl -X 'GET' \\\n  'http://localhost:8080/pod-1/api/v1/jobs/4d78d943-1896-4d7b-9f11-b10cc2389ba3/status/' \\\n  -H 'accept: application/json'\n"})}),"\n",(0,l.jsx)(n.h4,{id:"\u0441\u0445\u0435\u043c\u0430-\u043e\u0442\u0432\u0435\u0442\u0430-7",children:"\u0421\u0445\u0435\u043c\u0430 \u043e\u0442\u0432\u0435\u0442\u0430:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:'{\n  "id": "4d78d943-1896-4d7b-9f11-b10cc2389ba3",\n  "name": "DOWNLOAD_test",\n  "status": "FINISHED",\n  "started_at": "2024-03-21T09:58:29.846708"\n}\n'})}),"\n",(0,l.jsx)(n.h3,{id:"post-v1jobsjob_idinterrupt",children:(0,l.jsx)(n.code,{children:"POST /v1/jobs/{job_id}/interrupt/"})}),"\n",(0,l.jsxs)(n.p,{children:["\u041f\u0440\u0435\u0440\u0432\u0430\u0442\u044c \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 job \u0441 ",(0,l.jsx)(n.code,{children:"job_id"}),"."]}),"\n",(0,l.jsx)(n.h4,{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b-2",children:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"path"}),": ",(0,l.jsx)(n.code,{children:"job_id"})]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-8",children:"\u041f\u0440\u0438\u043c\u0435\u0440:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"curl -X 'POST' \\\n  'http://localhost:8080/api/v1/jobs/8a63349c-078f-4e98-8968-4f011593329c/interrupt/' \\\n  -H 'accept: application/json' \\\n  -d ''\n"})}),"\n",(0,l.jsx)(n.h4,{id:"\u0441\u0445\u0435\u043c\u0430-\u043e\u0442\u0432\u0435\u0442\u0430-8",children:"\u0421\u0445\u0435\u043c\u0430 \u043e\u0442\u0432\u0435\u0442\u0430:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:'{\n  "id": "8a63349c-078f-4e98-8968-4f011593329c",\n  "name": "DEPLOY_model_id1_adapters_id1_id2",\n  "status": "KILLED",\n  "started_at": "2024-03-21T07:35:16.861681"\n}\n\n\n\n\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(t,{...e})}):t(e)}},8453:(e,n,d)=>{d.d(n,{R:()=>c,x:()=>o});var l=d(6540);const s={},i=l.createContext(s);function c(e){const n=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);