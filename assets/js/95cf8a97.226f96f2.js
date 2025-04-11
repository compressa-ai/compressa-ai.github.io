"use strict";(self.webpackChunkcompressa_docs=self.webpackChunkcompressa_docs||[]).push([[8563],{5394:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>a});var r=s(74848),l=s(28453);const c={sidebar_position:2},i="\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u044b",o={id:"platform_local/platform_installation",title:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u044b",description:"\u0410\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f \u0432 Docker",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/platform_local/platform_installation.md",sourceDirName:"platform_local",slug:"/platform_local/platform_installation",permalink:"/platform_local/platform_installation",draft:!1,unlisted:!1,editUrl:"https://github.com/compressa-ai/compressa-ai.github.io/edit/main/i18n/ru/docusaurus-plugin-content-docs/current/platform_local/platform_installation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"PlatformLocalSidebar",previous:{title:"\u0422\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f \u043a \u0441\u0435\u0440\u0432\u0435\u0440\u0443",permalink:"/platform_local/server_requirements"},next:{title:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 InsightStream RAG",permalink:"/platform_local/Insightstream_installation"}},d={},a=[{value:"\u0410\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f \u0432 Docker",id:"\u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f-\u0432-docker",level:2},{value:"\u0411\u0430\u0437\u043e\u0432\u0430\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430",id:"\u0431\u0430\u0437\u043e\u0432\u0430\u044f-\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430",level:2},{value:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0430",id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-\u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0430",level:2},{value:"\u041c\u043e\u0434\u0435\u043b\u0438 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e",id:"\u043c\u043e\u0434\u0435\u043b\u0438-\u043f\u043e-\u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e",level:2},{value:"\u0417\u0430\u043f\u0443\u0441\u043a \u0441\u0435\u0440\u0432\u0438\u0441\u043e\u0432",id:"\u0437\u0430\u043f\u0443\u0441\u043a-\u0441\u0435\u0440\u0432\u0438\u0441\u043e\u0432",level:2},{value:"\u0422\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",id:"\u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",level:2},{value:"LLM \u041c\u043e\u0434\u0435\u043b\u044c",id:"llm-\u043c\u043e\u0434\u0435\u043b\u044c",level:4},{value:"Embeddings \u041c\u043e\u0434\u0435\u043b\u044c",id:"embeddings-\u043c\u043e\u0434\u0435\u043b\u044c",level:4},{value:"Rerank \u041c\u043e\u0434\u0435\u043b\u044c",id:"rerank-\u043c\u043e\u0434\u0435\u043b\u044c",level:4}];function t(e){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430-\u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u044b",children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u044b"}),"\n",(0,r.jsx)(n.h2,{id:"\u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f-\u0432-docker",children:"\u0410\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f \u0432 Docker"}),"\n",(0,r.jsx)(n.p,{children:"\u0414\u043b\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u044b Compressa \u0432\u0430\u043c \u043f\u043e\u043d\u0430\u0434\u043e\u0431\u0438\u0442\u0441\u044f \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0442\u043e\u043a\u0435\u043d \u0434\u043e\u0441\u0442\u0443\u043f\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u0438\u0442 \u043a\u043e\u043c\u0430\u043d\u0434\u0430."}),"\n",(0,r.jsx)(n.p,{children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0443\u044e \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f \u0441 \u0442\u043e\u043a\u0435\u043d\u043e\u043c:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"export COMPRESSA_TOKEN=<TOKEN>\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u041f\u0440\u043e\u0439\u0434\u0438\u0442\u0435 \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044e \u0432 Docker \u0441 \u0432\u0430\u0448\u0438\u043c \u0442\u043e\u043a\u0435\u043d\u043e\u043c:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"echo $COMPRESSA_TOKEN | docker login -u compressa --password-stdin\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u0431\u0430\u0437\u043e\u0432\u0430\u044f-\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430",children:"\u0411\u0430\u0437\u043e\u0432\u0430\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430"}),"\n",(0,r.jsx)(n.p,{children:"\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u043a\u043b\u043e\u043d\u0438\u0440\u0443\u0439\u0442\u0435 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0439 \u0441 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0435\u0439:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"git clone -b deploy/platform git@github.com:compressa-ai/compressa-deploy.git\ncd compressa-deploy\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u0420\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0439 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0434\u0432\u0430 \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0445 \u0444\u0430\u0439\u043b\u0430, \u0441 \u043d\u0430\u0441\u0442\u043a\u0440\u043e\u0439\u043a\u0438 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u043c\u044b \u043d\u0430\u0447\u043d\u0435\u043c:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:".env"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"docker-compose.yml"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u044b GPU \u0432 \u0444\u0430\u0439\u043b\u0435 ",(0,r.jsx)(n.code,{children:".env"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"DOCKER_GPU_IDS_1=<ID1>\nDOCKER_GPU_IDS_2=<ID2>\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0441\u0435\u0440\u0432\u0438\u0441\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442 \u043f\u043e\u0440\u0442 ",(0,r.jsx)(n.code,{children:"8080"}),". \u0415\u0433\u043e \u043c\u043e\u0436\u043d\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0432 \u0444\u0430\u0439\u043b\u0435 ",(0,r.jsx)(n.code,{children:"docker-compose.yml"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'  nginx:\n    image: nginx:stable-alpine3.19-slim\n    ports:\n      - "8080:80" <----\n...\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-\u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0430",children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0430"}),"\n",(0,r.jsx)(n.p,{children:"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u043f\u0443\u0442\u044c \u0434\u043b\u044f \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0430:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"compressa"})," - ",(0,r.jsx)(n.code,{children:"./data/compressa"}),(0,r.jsx)(n.br,{}),"\n","\u0423 \u044d\u0442\u043e\u0439 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438 \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u043f\u0440\u0430\u0432\u0430 777, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u043e\u0436\u043d\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043a\u043e\u043c\u0430\u043d\u0434\u044b:","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"chmod 777 -R ./data/compressa\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u0443\u0442\u044c \u043a \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0443 \u0432 \u0444\u0430\u0439\u043b\u0435 ",(0,r.jsx)(n.code,{children:"docker-compose.yml"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"\u043c\u043e\u0434\u0435\u043b\u0438-\u043f\u043e-\u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e",children:"\u041c\u043e\u0434\u0435\u043b\u0438 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e"}),"\n",(0,r.jsx)(n.p,{children:"Compressa \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043c\u043e\u0434\u0435\u043b\u044f\u043c\u0438 \u0447\u0435\u0440\u0435\u0437 REST API \u043f\u043e \u0430\u0434\u0440\u0435\u0441\u0430\u043c:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"SERVER_NAME:$PORT/api/chat/"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"SERVER_NAME:$PORT/api/embeddings/"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u0414\u043b\u044f \u0434\u0430\u043d\u043d\u044b\u0445 API \u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d Swagger:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"SERVER_NAME:$PORT/api/chat/docs"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"SERVER_NAME:$PORT/api/embeddings/docs"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u041f\u043e\u043c\u0438\u043c\u043e \u044d\u0442\u043e\u0433\u043e, \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043c\u043e\u0434\u0435\u043b\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0431\u0443\u0434\u0443\u0442 \u0437\u0430\u0434\u0435\u043f\u043b\u043e\u0435\u043d\u044b \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e.\n\u041a\u043e\u043d\u0444\u0438\u0433\u0438 \u044d\u0442\u0438\u0445 \u043c\u043e\u0434\u0435\u043b\u0435\u0439 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c\u0441\u044f \u0432 \u0444\u0430\u0439\u043b\u0430\u0445:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"deploy-qwen14.json"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"deploy-embeddings.json"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u0418 \u043c\u043e\u043d\u0442\u0438\u0440\u0443\u044e\u0442\u0441\u044f \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0439 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u044b:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'  compressa-pod-1:\n    image: "compressa/compressa-pod:0.3.4"\n  ...\n      - ./deploy-qwen14.json:/configs/deploy.json:ro\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u041c\u044b \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u044e\u0442 \u043d\u0430\u0447\u0430\u0442\u044c \u0440\u0430\u0431\u043e\u0442\u0443 \u0441 Compressa \u0441 \u043c\u043e\u0434\u0435\u043b\u0435\u0439, \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044b\u043c\u0438 \u0432 \u0434\u0430\u043d\u043d\u044b\u0445 \u043a\u043e\u043d\u0444\u0438\u0433\u0430\u0445 \u0432 \u043f\u0440\u0438\u043c\u0435\u0440\u0435."}),"\n",(0,r.jsxs)(n.p,{children:["\u0411\u043e\u043b\u044c\u0448\u0435 \u043f\u0440\u043e \u0440\u0443\u0447\u043d\u043e\u0435 \u0440\u0430\u0437\u0432\u0435\u0440\u0442\u044b\u0432\u0430\u043d\u0438\u0435 \u043c\u043e\u0434\u0435\u043b\u0435\u0439 \u043c\u043e\u0436\u043d\u043e \u043d\u0430\u0439\u0442\u0438 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 ",(0,r.jsx)(n.a,{href:"/onprem/%D0%9F%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D0%B0%20Compressa/LLM_management/model_deployment",children:"Managment API"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"\u0437\u0430\u043f\u0443\u0441\u043a-\u0441\u0435\u0440\u0432\u0438\u0441\u043e\u0432",children:"\u0417\u0430\u043f\u0443\u0441\u043a \u0441\u0435\u0440\u0432\u0438\u0441\u043e\u0432"}),"\n",(0,r.jsx)(n.p,{children:"\u041f\u0440\u043e\u0439\u0434\u044f \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u0435 \u0448\u0430\u0433\u0438, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043a\u043e\u043c\u0430\u043d\u0434\u044b:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"docker compose up --build\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u0412\u0430\u0436\u043d\u043e!"})," \u041c\u043e\u0434\u0443\u043b\u0438 ETL \u0438 Rerank \u0431\u0443\u0434\u0443\u0442 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u044b \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0438 \u043d\u0435 \u0442\u0440\u0435\u0431\u0443\u044e\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0445 \u043a\u043e\u043c\u0430\u043d\u0434."]}),"\n",(0,r.jsxs)(n.p,{children:["\u041f\u043e\u0441\u043b\u0435 \u0443\u0441\u043f\u0435\u0448\u043d\u043e\u0439 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0432\u0441\u0435\u0445 \u043c\u043e\u0434\u0443\u043b\u0435\u0439 \u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0430 \u043c\u043e\u0434\u0435\u043b\u0435\u0439, \u043e\u043d\u0438 \u0433\u043e\u0442\u043e\u0432\u044b \u043a \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044e. \u041a\u0430\u043a \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u0447\u0435\u0440\u0435\u0437 REST API \u0438\u043b\u0438 Python \u043a\u043b\u0438\u0435\u043d\u0442 \u0440\u0430\u0441\u0441\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u043c ",(0,r.jsx)(n.a,{href:"/docs/basic_modules/LLM/",children:"\u0437\u0434\u0435\u0441\u044c"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"\u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",children:"\u0422\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"}),"\n",(0,r.jsx)(n.p,{children:"\u0423\u0441\u043f\u0435\u0448\u043d\u044b\u0439 \u0434\u0435\u043f\u043b\u043e\u0439 \u043c\u043e\u0436\u043d\u043e \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432:"}),"\n",(0,r.jsx)(n.h4,{id:"llm-\u043c\u043e\u0434\u0435\u043b\u044c",children:"LLM \u041c\u043e\u0434\u0435\u043b\u044c"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'curl -X \'POST\' "$SERVER_NAME:$PORT/v1/chat/completions" \\\n  -H \'accept: application/json\' \\\n  -H \'Content-Type: application/json\' -d \'{\n  "model": "Compressa-LLM",\n  "messages": [{"role": "user", "content": "\u041d\u0430\u043f\u0438\u0448\u0438 \u0441\u043a\u0430\u0437\u043a\u0443 \u043d\u0430 \u043d\u043e\u0447\u044c \u043f\u0440\u043e \u0434\u043e\u0431\u0440\u044b\u0439 \u0438\u0441\u043a\u0443\u0441\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u0438\u043d\u0442\u0435\u043b\u043b\u0435\u043a\u0442!"}],\n  "stream": false\n}\'\n'})}),"\n",(0,r.jsx)(n.h4,{id:"embeddings-\u043c\u043e\u0434\u0435\u043b\u044c",children:"Embeddings \u041c\u043e\u0434\u0435\u043b\u044c"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'curl -X \'POST\' "$SERVER_NAME:$PORT/v1/embeddings" \\\n  -H \'accept: application/json\' \\\n  -H \'Content-Type: application/json\' -d \'{\n  "model": "Compressa-Embedding",\n  "input": "Document 1",\n  "encoding_format": "float"\n}\'\n'})}),"\n",(0,r.jsx)(n.h4,{id:"rerank-\u043c\u043e\u0434\u0435\u043b\u044c",children:"Rerank \u041c\u043e\u0434\u0435\u043b\u044c"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'curl -X POST "$SERVER_NAME:$PORT/v1/rerank" -H "accept: application/json" -H "Content-Type: application/json" -d \'{\n  "model": "Compressa-ReRank",\n  "query": "Query?",\n  "documents": [\n    "document 1",\n    "document 2",\n    "document 3"\n  ],\n  "return_documents": false\n}\'\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["\u0414\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u043c\u043e\u0434\u0443\u043b\u0435\u043c InsightStream RAG, \u0432\u0430\u043c \u043f\u043e\u043d\u0430\u0434\u043e\u0431\u0438\u0442\u0441\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c ",(0,r.jsx)(n.a,{href:"/onprem/%D0%9F%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D0%B0%20Compressa/Insightstream_installation",children:"\u0435\u0449\u0435 \u043e\u0434\u0438\u043d \u0448\u0430\u0433"})]})})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>o});var r=s(96540);const l={},c=r.createContext(l);function i(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);