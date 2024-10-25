"use strict";(self.webpackChunkcompressa_docs=self.webpackChunkcompressa_docs||[]).push([[956],{8256:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>c});var i=s(4848),d=s(8453);const a={sidebar_position:2},l="Fine-tuning",t={id:"onprem/\u041f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430 Compressa/LLM_management/fine_tuning",title:"Fine-tuning",description:"\u041f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430 Compressa \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442\u0441\u044f \u0434\u043e\u043e\u0431\u0443\u0447\u0438\u0442\u044c LLM \u043c\u043e\u0434\u0435\u043b\u044c \u0431\u044b\u0441\u0442\u0440\u043e \u0438 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e LoRA/QLoRA \u0430\u0434\u0430\u043f\u0442\u0435\u0440\u043e\u0432. \u0414\u043e\u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0443\u043b\u0443\u0447\u0448\u0438\u0442\u044c \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u043e \u043e\u0442\u0432\u0435\u0442\u043e\u0432 \u043d\u0430 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0439 \u0431\u0438\u0437\u043d\u0435\u0441-\u0437\u0430\u0434\u0430\u0447\u0435, \u0441\u0444\u043e\u043a\u0443\u0441\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043d\u0430 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0439 \u0442\u0435\u043c\u0435 \u0438\u043b\u0438 \u0437\u0430\u0434\u0430\u0442\u044c \u0444\u043e\u0440\u043c\u0430\u0442/\u0441\u0442\u0438\u043b\u044c \u043e\u0442\u0432\u0435\u0442\u043e\u0432.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/onprem/\u041f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430 Compressa/LLM_management/fine_tuning.md",sourceDirName:"onprem/\u041f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430 Compressa/LLM_management",slug:"/onprem/\u041f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430 Compressa/LLM_management/fine_tuning",permalink:"/onprem/\u041f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430 Compressa/LLM_management/fine_tuning",draft:!1,unlisted:!1,editUrl:"https://github.com/compressa-ai/compressa-ai.github.io/edit/main/i18n/ru/docusaurus-plugin-content-docs/current/onprem/\u041f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430 Compressa/LLM_management/fine_tuning.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"onpremSidebar",previous:{title:"Management API",permalink:"/onprem/\u041f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430 Compressa/LLM_management/model_deployment"},next:{title:"Compressa LLM",permalink:"/onprem/Compressa LLM/"}},r={},c=[{value:"\u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445",id:"\u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430-\u0434\u0430\u043d\u043d\u044b\u0445",level:2},{value:"\u0414\u043e\u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435",id:"\u0434\u043e\u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435",level:2},{value:"\u0414\u043e\u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u0447\u0435\u0440\u0435\u0437 UI",id:"\u0434\u043e\u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435-\u0447\u0435\u0440\u0435\u0437-ui",level:3},{value:"\u0414\u043e\u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u0447\u0435\u0440\u0435\u0437 REST API",id:"\u0434\u043e\u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435-\u0447\u0435\u0440\u0435\u0437-rest-api",level:2},{value:"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0434\u0430\u0442\u0430\u0441\u0435\u0442\u0430\u043c\u0438",id:"\u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435-\u0434\u0430\u0442\u0430\u0441\u0435\u0442\u0430\u043c\u0438",level:3},{value:"<code>GET /v1/datasets/</code>",id:"get-v1datasets",level:4},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0437\u0430\u043f\u0440\u043e\u0441\u0430:",id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0437\u0430\u043f\u0440\u043e\u0441\u0430",level:4},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 \u043e\u0442\u0432\u0435\u0442\u0430:",id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u043e\u0442\u0432\u0435\u0442\u0430",level:4},{value:"<code>POST /v1/datasets/upload/</code>",id:"post-v1datasetsupload",level:4},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b:",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",level:4},{value:"\u0422\u0435\u043b\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0430:",id:"\u0442\u0435\u043b\u043e-\u0437\u0430\u043f\u0440\u043e\u0441\u0430",level:4},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0437\u0430\u043f\u0440\u043e\u0441\u0430:",id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0437\u0430\u043f\u0440\u043e\u0441\u0430-1",level:4},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 \u043e\u0442\u0432\u0435\u0442\u0430:",id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u043e\u0442\u0432\u0435\u0442\u0430-1",level:4},{value:"<code>GET /v1/datasets/{dataset_id}/</code>",id:"get-v1datasetsdataset_id",level:4},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b:",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b-1",level:4},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0437\u0430\u043f\u0440\u043e\u0441\u0430:",id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0437\u0430\u043f\u0440\u043e\u0441\u0430-2",level:4},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 \u043e\u0442\u0432\u0435\u0442\u0430:",id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u043e\u0442\u0432\u0435\u0442\u0430-2",level:4},{value:"\u0414\u043e\u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u043c\u043e\u0434\u0435\u043b\u0438",id:"\u0434\u043e\u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435-\u043c\u043e\u0434\u0435\u043b\u0438",level:3},{value:"<code>GET /v1/finetune/models/</code>",id:"get-v1finetunemodels",level:4},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0437\u0430\u043f\u0440\u043e\u0441\u0430:",id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0437\u0430\u043f\u0440\u043e\u0441\u0430-3",level:4},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 \u043e\u0442\u0432\u0435\u0442\u0430:",id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u043e\u0442\u0432\u0435\u0442\u0430-3",level:4},{value:"<code>POST /v1/finetune/</code>",id:"post-v1finetune",level:4},{value:"\u0422\u0435\u043b\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0430:",id:"\u0442\u0435\u043b\u043e-\u0437\u0430\u043f\u0440\u043e\u0441\u0430-1",level:4},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0437\u0430\u043f\u0440\u043e\u0441\u0430:",id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0437\u0430\u043f\u0440\u043e\u0441\u0430-4",level:4},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 \u043e\u0442\u0432\u0435\u0442\u0430:",id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u043e\u0442\u0432\u0435\u0442\u0430-4",level:4},{value:"<code>GET /v1/finetune/status</code>",id:"get-v1finetunestatus",level:4},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0437\u0430\u043f\u0440\u043e\u0441\u0430:",id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0437\u0430\u043f\u0440\u043e\u0441\u0430-5",level:4},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 \u043e\u0442\u0432\u0435\u0442\u0430:",id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u043e\u0442\u0432\u0435\u0442\u0430-5",level:4},{value:"<code>POST /v1/finetune/interrupt/</code>",id:"post-v1finetuneinterrupt",level:4},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0437\u0430\u043f\u0440\u043e\u0441:",id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0437\u0430\u043f\u0440\u043e\u0441",level:4},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 \u043e\u0442\u0432\u0435\u0442\u0430:",id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u043e\u0442\u0432\u0435\u0442\u0430-6",level:4},{value:"\u0417\u0430\u043f\u0443\u0441\u043a \u0434\u043e\u043e\u0431\u0443\u0447\u0435\u043d\u043d\u043e\u0439 \u043c\u043e\u0434\u0435\u043b\u0438",id:"\u0437\u0430\u043f\u0443\u0441\u043a-\u0434\u043e\u043e\u0431\u0443\u0447\u0435\u043d\u043d\u043e\u0439-\u043c\u043e\u0434\u0435\u043b\u0438",level:2}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"fine-tuning",children:"Fine-tuning"}),"\n",(0,i.jsx)(n.p,{children:"\u041f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430 Compressa \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442\u0441\u044f \u0434\u043e\u043e\u0431\u0443\u0447\u0438\u0442\u044c LLM \u043c\u043e\u0434\u0435\u043b\u044c \u0431\u044b\u0441\u0442\u0440\u043e \u0438 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e LoRA/QLoRA \u0430\u0434\u0430\u043f\u0442\u0435\u0440\u043e\u0432. \u0414\u043e\u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0443\u043b\u0443\u0447\u0448\u0438\u0442\u044c \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u043e \u043e\u0442\u0432\u0435\u0442\u043e\u0432 \u043d\u0430 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0439 \u0431\u0438\u0437\u043d\u0435\u0441-\u0437\u0430\u0434\u0430\u0447\u0435, \u0441\u0444\u043e\u043a\u0443\u0441\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043d\u0430 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0439 \u0442\u0435\u043c\u0435 \u0438\u043b\u0438 \u0437\u0430\u0434\u0430\u0442\u044c \u0444\u043e\u0440\u043c\u0430\u0442/\u0441\u0442\u0438\u043b\u044c \u043e\u0442\u0432\u0435\u0442\u043e\u0432."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u0412\u0430\u0436\u043d\u043e! \u0414\u043e\u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u043c\u043e\u0434\u0435\u043b\u0438 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e \u0442\u043e\u043b\u044c\u043a\u043e \u0432 on-premise \u0432\u0435\u0440\u0441\u0438\u0438 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u044b, \u0437\u0430\u043f\u0443\u0449\u0435\u043d\u043d\u043e\u0439 \u043d\u0430 \u0432\u0430\u0448\u0438\u0445 \u0441\u0435\u0440\u0432\u0435\u0440\u0430\u0445."})}),"\n",(0,i.jsx)(n.p,{children:"\u041f\u0440\u0435\u0436\u0434\u0435 \u0447\u0435\u043c \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0438\u0442\u044c \u043a \u0434\u043e\u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044e, \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f \u043f\u0440\u043e\u0432\u0435\u0441\u0442\u0438 \u044d\u043a\u0441\u043f\u0435\u0440\u0438\u043c\u0435\u043d\u0442\u044b \u0441 \u0432\u044b\u0431\u043e\u0440\u043e\u043c \u043e\u043f\u0442\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0439 \u043c\u043e\u0434\u0435\u043b\u0438 \u0438 \u043f\u0440\u043e\u043c\u043f\u0442\u0438\u043d\u0433\u043e\u043c."}),"\n",(0,i.jsx)(n.h2,{id:"\u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430-\u0434\u0430\u043d\u043d\u044b\u0445",children:"\u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445"}),"\n",(0,i.jsx)(n.p,{children:"\u0414\u043b\u044f \u0434\u043e\u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u0432\u0430\u043c \u043f\u043e\u043d\u0430\u0434\u043e\u0431\u044f\u0442\u0441\u044f \u0434\u0438\u0430\u043b\u043e\u0433\u043e\u0432\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435. \u0412\u0430\u043c \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u0438\u0442\u044c \u043f\u0440\u0438\u043c\u0435\u0440\u044b \u0446\u0435\u043b\u0435\u0432\u044b\u0445 \u0434\u0438\u0430\u043b\u043e\u0433\u043e\u0432"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u041e\u0442\u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0438\u0445 \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 ",(0,i.jsx)(n.a,{href:"https://jsonlines.org/",children:"JSON Lines"}),", \u0433\u0434\u0435 \u043a\u0430\u0436\u0434\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u0430 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u043a\u043e\u043d\u0442\u0435\u043d\u0442:"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Compressa allows to fine-tune models on chat data.\nTo start the process you should:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Prepare conversation examples"}),"\n",(0,i.jsxs)(n.li,{children:["Format them into ",(0,i.jsx)(n.a,{href:"https://jsonlines.org/",children:"JSON Lines"})," format with the next content on each line:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'{\n    "messages": [\n        {\n            "role": "user",\n            "content": "<USER MESSAGE 1>"\n        },\n        {\n            "role": "bot",\n            "content": " <BOT\'S RESPONSE>"\n        },\n        {\n            "role": "user",\n            "content": "<USER MESSAGE 2>"\n        },\n        {\n            "role": "bot",\n            "content": " <BOT\'S RESPONSE2>"\n        },\n    ]\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u041a\u0430\u0436\u0434\u044b\u0439 \u0434\u0438\u0430\u043b\u043e\u0433 \u043c\u043e\u0436\u0435\u0442 \u0432\u043a\u043b\u044e\u0447\u0430\u0442\u044c \u043b\u044e\u0431\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439. \u0414\u043b\u044f \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0434\u043e\u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u043d\u0430\u0431\u043e\u0440 \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 100 \u043f\u0440\u0438\u043c\u0435\u0440\u043e\u0432."}),"\n",(0,i.jsx)(n.h2,{id:"\u0434\u043e\u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435",children:"\u0414\u043e\u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435"}),"\n",(0,i.jsx)(n.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u043c\u043e\u0436\u043d\u043e \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u0447\u0435\u0440\u0435\u0437 UI \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 Compressa Fine-tuning \u0438\u043b\u0438 \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c REST API. \u041d\u0438\u0436\u0435 \u043c\u044b \u0440\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u043e\u0431\u0430 \u044d\u0442\u0438\u0445 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u0430."}),"\n",(0,i.jsx)(n.h3,{id:"\u0434\u043e\u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435-\u0447\u0435\u0440\u0435\u0437-ui",children:"\u0414\u043e\u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u0447\u0435\u0440\u0435\u0437 UI"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"URL"}),": ",(0,i.jsx)(n.code,{children:"http://localhost:8080/pod-1/finetune/"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Fine-Tune UI",src:s(9068).A+"",width:"2704",height:"1698"})}),"\n",(0,i.jsx)(n.p,{children:"\u0427\u0442\u043e\u0431\u044b \u0434\u043e\u043e\u0431\u0443\u0447\u0438\u0442\u044c \u043c\u043e\u0434\u0435\u043b\u044c \u0447\u0435\u0440\u0435\u0437 UI \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441, \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c LLM \u043c\u043e\u0434\u0435\u043b\u044c \u0432 \u043b\u0435\u0432\u043e\u0439 \u043f\u0430\u043d\u0435\u043b\u0438"}),"\n",(0,i.jsx)(n.li,{children:"\u0412\u0432\u0435\u0441\u0442\u0438 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0434\u043b\u044f \u0432\u0430\u0448\u0435\u0439 \u0434\u043e\u043e\u0431\u0443\u0447\u0435\u043d\u043d\u043e\u0439 \u0432\u0435\u0440\u0441\u0438\u0438"}),"\n",(0,i.jsxs)(n.li,{children:["\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c ",(0,i.jsx)(n.strong,{children:"jsonl"})," \u0444\u0430\u0439\u043b \u0432 \u0444\u043e\u0440\u043c\u0443"]}),"\n",(0,i.jsxs)(n.li,{children:["\u041d\u0430\u0436\u0430\u0442\u044c \u043a\u043d\u043e\u043f\u043a\u0443 ",(0,i.jsx)(n.strong,{children:"Finetune"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u041f\u0440\u043e\u0446\u0435\u0441\u0441 \u0434\u043e\u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u043c\u043e\u0436\u043d\u043e \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u0442\u044c \u0432 \u0434\u044d\u0448\u0431\u043e\u0440\u0434\u0435 ",(0,i.jsx)(n.a,{href:"https://github.com/aimhubio/aim",children:"AIM"}),". \u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u043d\u0430\u0436\u043c\u0438\u0442\u0435 ",(0,i.jsx)(n.strong,{children:"Training Dashboard"})," \u043f\u043e\u0441\u043b\u0435 \u0437\u0430\u043f\u0443\u0441\u043a\u0430 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0430."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Training Dashboard",src:s(6720).A+"",width:"2714",height:"1702"})}),"\n",(0,i.jsx)(n.p,{children:"\u0412 \u0434\u044d\u0448\u0431\u043e\u0440\u0434\u0435 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u044b\u0439 \u0437\u0430\u043f\u0443\u0441\u043a \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0434\u043e\u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u043f\u043e \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044e, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0432\u044b \u0443\u043a\u0430\u0437\u0430\u043b\u0438 \u043d\u0430 \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0435\u043c \u0448\u0430\u0433\u0435, \u0438 \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043a\u043b\u044e\u0447\u0435\u0432\u044b\u0435 \u043c\u0435\u0442\u0440\u0438\u043a\u0438"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Training Dashboard",src:s(1674).A+"",width:"2858",height:"1770"})}),"\n",(0,i.jsx)(n.h2,{id:"\u0434\u043e\u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435-\u0447\u0435\u0440\u0435\u0437-rest-api",children:"\u0414\u043e\u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u0447\u0435\u0440\u0435\u0437 REST API"}),"\n",(0,i.jsx)(n.h3,{id:"\u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435-\u0434\u0430\u0442\u0430\u0441\u0435\u0442\u0430\u043c\u0438",children:"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0434\u0430\u0442\u0430\u0441\u0435\u0442\u0430\u043c\u0438"}),"\n",(0,i.jsx)(n.h4,{id:"get-v1datasets",children:(0,i.jsx)(n.code,{children:"GET /v1/datasets/"})}),"\n",(0,i.jsx)(n.p,{children:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0445 \u0434\u0430\u0442\u0430\u0441\u0435\u0442\u043e\u0432."}),"\n",(0,i.jsx)(n.h4,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0437\u0430\u043f\u0440\u043e\u0441\u0430",children:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0437\u0430\u043f\u0440\u043e\u0441\u0430:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"curl -X 'GET' \\\n  'http://localhost:8080/pod-1/api/v1/datasets/' \\\n  -H 'accept: application/json'\n"})}),"\n",(0,i.jsx)(n.h4,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u043e\u0442\u0432\u0435\u0442\u0430",children:"\u041f\u0440\u0438\u043c\u0435\u0440 \u043e\u0442\u0432\u0435\u0442\u0430:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'[\n  {\n    "id": "01be6d68-f790-434b-aa6d-5bd492aef202",\n    "name": "train.jsonl",\n    "s3_path": "01be6d68-f790-434b-aa6d-5bd492aef202/metadata.json",\n    "description": null\n  },\n  {\n    "id": "077adb68-2b0e-481b-bd13-e8807adf625f",\n    "name": "train.jsonl",\n    "s3_path": "077adb68-2b0e-481b-bd13-e8807adf625f/metadata.json",\n    "description": "My dataset 2"\n  }\n]\n'})}),"\n",(0,i.jsx)(n.h4,{id:"post-v1datasetsupload",children:(0,i.jsx)(n.code,{children:"POST /v1/datasets/upload/"})}),"\n",(0,i.jsx)(n.p,{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u0434\u0430\u0442\u0430\u0441\u0435\u0442 (\u0442\u043e\u043b\u044c\u043a\u043e \u2018jsonl\u2019 \u0444\u043e\u0440\u043c\u0430\u0442)."}),"\n",(0,i.jsx)(n.h4,{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",children:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"query"}),": ",(0,i.jsx)(n.code,{children:"description"})," - dataset description"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"\u0442\u0435\u043b\u043e-\u0437\u0430\u043f\u0440\u043e\u0441\u0430",children:"\u0422\u0435\u043b\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0430:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"multipart/form-data"}),": ",(0,i.jsx)(n.code,{children:"file"})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0437\u0430\u043f\u0440\u043e\u0441\u0430-1",children:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0437\u0430\u043f\u0440\u043e\u0441\u0430:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"curl -X 'POST' \\\n  'http://localhost:8080/pod-1/api/v1/datasets/upload/?description=My%20Description' \\\n  -H 'accept: application/json' \\\n  -H 'Content-Type: multipart/form-data' \\\n  -F 'file=@train.jsonl'\n"})}),"\n",(0,i.jsx)(n.h4,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u043e\u0442\u0432\u0435\u0442\u0430-1",children:"\u041f\u0440\u0438\u043c\u0435\u0440 \u043e\u0442\u0432\u0435\u0442\u0430:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'{\n  "id": "string",\n  "name": "string",\n  "s3_path": "string",\n  "description": "string"\n}\n'})}),"\n",(0,i.jsx)(n.h4,{id:"get-v1datasetsdataset_id",children:(0,i.jsx)(n.code,{children:"GET /v1/datasets/{dataset_id}/"})}),"\n",(0,i.jsxs)(n.p,{children:["\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u044b\u0439 \u0434\u0430\u0442\u0430\u0441\u0435\u0442 \u043f\u043e id ",(0,i.jsx)(n.code,{children:"dataset_id"})]}),"\n",(0,i.jsx)(n.h4,{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b-1",children:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"path"}),": ",(0,i.jsx)(n.code,{children:"dataset_id"})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0437\u0430\u043f\u0440\u043e\u0441\u0430-2",children:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0437\u0430\u043f\u0440\u043e\u0441\u0430:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"curl -X 'GET' \\\n  'http://localhost:8080/pod-1/api/v1/datasets/01be6d68-f790-434b-aa6d-5bd492aef202/' \\\n  -H 'accept: application/json'\n"})}),"\n",(0,i.jsx)(n.h4,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u043e\u0442\u0432\u0435\u0442\u0430-2",children:"\u041f\u0440\u0438\u043c\u0435\u0440 \u043e\u0442\u0432\u0435\u0442\u0430:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"file"})}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"\u0434\u043e\u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435-\u043c\u043e\u0434\u0435\u043b\u0438",children:"\u0414\u043e\u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u043c\u043e\u0434\u0435\u043b\u0438"}),"\n",(0,i.jsx)(n.h4,{id:"get-v1finetunemodels",children:(0,i.jsx)(n.code,{children:"GET /v1/finetune/models/"})}),"\n",(0,i.jsx)(n.p,{children:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a \u043c\u043e\u0434\u0435\u043b\u0435\u0439, \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0445 \u0434\u043b\u044f \u0434\u043e\u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f"}),"\n",(0,i.jsx)(n.h4,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0437\u0430\u043f\u0440\u043e\u0441\u0430-3",children:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0437\u0430\u043f\u0440\u043e\u0441\u0430:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"curl -X 'GET' \\\n  'http://localhost:8080/pod-1/api/v1/finetune/models/' \\\n  -H 'accept: application/json'\n"})}),"\n",(0,i.jsx)(n.h4,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u043e\u0442\u0432\u0435\u0442\u0430-3",children:"\u041f\u0440\u0438\u043c\u0435\u0440 \u043e\u0442\u0432\u0435\u0442\u0430:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'[\n  {\n    "model_id": "TheBloke/mixtral-8x7b-v0.1-AWQ",\n    "adapter": false,\n    "base_model_id": null\n  },\n  {\n    "model_id": "NeuralNovel/Mistral-7B-Instruct-v0.2-Neural-Story",\n    "adapter": false,\n    "base_model_id": null\n  }\n]\n'})}),"\n",(0,i.jsx)(n.h4,{id:"post-v1finetune",children:(0,i.jsx)(n.code,{children:"POST /v1/finetune/"})}),"\n",(0,i.jsx)(n.p,{children:"\u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u0434\u043e\u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u043c\u043e\u0434\u0435\u043b\u0438 \u043d\u0430 \u0434\u0430\u0442\u0430\u0441\u0435\u0442\u0435"}),"\n",(0,i.jsx)(n.h4,{id:"\u0442\u0435\u043b\u043e-\u0437\u0430\u043f\u0440\u043e\u0441\u0430-1",children:"\u0422\u0435\u043b\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0430:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'{\n  "name": "string",\n  "model_id": "string",\n  "dataset_id": "string"\n}\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"name"})," - name of training"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"model_id"})," - id of model to train"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"dataset_id"})," - id of dataset to train on"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0437\u0430\u043f\u0440\u043e\u0441\u0430-4",children:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0437\u0430\u043f\u0440\u043e\u0441\u0430:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'curl -X \'POST\' \\\n  \'http://localhost:8080/pod-1/api/v1/finetune/\' \\\n  -H \'accept: application/json\' \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{\n  "name": "My Adapter Training",\n  "model_id": "NousResearch/Llama-2-7b-chat-hf",\n  "dataset_id": "01be6d68-f790-434b-aa6d-5bd492aef202"\n}\'\n'})}),"\n",(0,i.jsx)(n.h4,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u043e\u0442\u0432\u0435\u0442\u0430-4",children:"\u041f\u0440\u0438\u043c\u0435\u0440 \u043e\u0442\u0432\u0435\u0442\u0430:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'{\n  "id": "74280be7-4723-475d-89ae-346e9017990e",\n  "name": "FT_NousResearch/Llama-2-7b-chat-hf_01be6d68-f790-434b-aa6d-5bd492aef202",\n  "status": "CREATED",\n  "started_at": "2024-03-21T10:40:40.928442"\n}\n'})}),"\n",(0,i.jsx)(n.h4,{id:"get-v1finetunestatus",children:(0,i.jsx)(n.code,{children:"GET /v1/finetune/status"})}),"\n",(0,i.jsx)(n.p,{children:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0441\u0442\u0430\u0442\u0443\u0441 \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0430 \u0434\u043e\u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f"}),"\n",(0,i.jsx)(n.h4,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0437\u0430\u043f\u0440\u043e\u0441\u0430-5",children:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0437\u0430\u043f\u0440\u043e\u0441\u0430:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"curl -X 'GET' \\\n  'http://localhost:8080/pod-1/api/v1/finetune/status/' \\\n  -H 'accept: application/json'\n"})}),"\n",(0,i.jsx)(n.h4,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u043e\u0442\u0432\u0435\u0442\u0430-5",children:"\u041f\u0440\u0438\u043c\u0435\u0440 \u043e\u0442\u0432\u0435\u0442\u0430:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'{\n  "id": "46c155b4-17fe-4226-9412-a77edfadc7e7",\n  "name": "My Adapter Training",\n  "model_id": "NousResearch/Llama-2-7b-chat-hf",\n  "dataset_id": "01be6d68-f790-434b-aa6d-5bd492aef202",\n  "job": {\n    "id": "74280be7-4723-475d-89ae-346e9017990e",\n    "name": "FT_NousResearch/Llama-2-7b-chat-hf_01be6d68-f790-434b-aa6d-5bd492aef202",\n    "status": "RUNNING",\n    "started_at": "2024-03-21T10:40:40.928442"\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h4,{id:"post-v1finetuneinterrupt",children:(0,i.jsx)(n.code,{children:"POST /v1/finetune/interrupt/"})}),"\n",(0,i.jsx)(n.p,{children:"\u041f\u0440\u0435\u0440\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0434\u043e\u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f"}),"\n",(0,i.jsx)(n.h4,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0437\u0430\u043f\u0440\u043e\u0441",children:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0437\u0430\u043f\u0440\u043e\u0441:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"curl -X 'POST' \\\n  'http://localhost:8080/pod-1/api/v1/finetune/interrupt/' \\\n  -H 'accept: application/json' \\\n  -d ''\n"})}),"\n",(0,i.jsx)(n.h4,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u043e\u0442\u0432\u0435\u0442\u0430-6",children:"\u041f\u0440\u0438\u043c\u0435\u0440 \u043e\u0442\u0432\u0435\u0442\u0430:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'{\n  "id": "74280be7-4723-475d-89ae-346e9017990e",\n  "name": "FT_NousResearch/Llama-2-7b-chat-hf_01be6d68-f790-434b-aa6d-5bd492aef202",\n  "status": "RUNNING",\n  "started_at": "2024-03-21T10:40:40.928442"\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"\u0437\u0430\u043f\u0443\u0441\u043a-\u0434\u043e\u043e\u0431\u0443\u0447\u0435\u043d\u043d\u043e\u0439-\u043c\u043e\u0434\u0435\u043b\u0438",children:"\u0417\u0430\u043f\u0443\u0441\u043a \u0434\u043e\u043e\u0431\u0443\u0447\u0435\u043d\u043d\u043e\u0439 \u043c\u043e\u0434\u0435\u043b\u0438"}),"\n",(0,i.jsx)(n.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0430, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u0434\u043e\u043e\u0431\u0443\u0447\u0435\u043d\u043d\u0443\u044e \u0432\u0435\u0440\u0441\u0438\u044e \u043c\u043e\u0434\u0435\u043b\u0438 \u043d\u0430 \u0441\u0432\u043e\u0435\u043c \u0441\u0435\u0440\u0432\u0435\u0440\u0435 \u0438 \u043d\u0430\u0447\u0430\u0442\u044c \u0435\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435."}),"\n",(0,i.jsxs)(n.p,{children:["\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u044b\u0435 \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438 \u043c\u043e\u0436\u043d\u043e \u043d\u0430\u0439\u0442\u0438 \u043d\u0430 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0439 ",(0,i.jsx)(n.a,{href:"/onprem/%D0%9F%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D0%B0%20Compressa/LLM_management/model_deployment",children:"\u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},1674:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/aim-metrics-071e1b428c59dd1f300899a495f778c5.png"},9068:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/finetune-272560fe59b36eb751e0d5c92cacd5e7.png"},6720:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/training-dashboard-9d0e87da0b7d90d5c8404d052358932c.png"},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>t});var i=s(6540);const d={},a=i.createContext(d);function l(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);