"use strict";(self.webpackChunkcompressa_docs=self.webpackChunkcompressa_docs||[]).push([[278],{7326:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var i=s(4848),d=s(8453);const r={sidebar_position:3},c="Quickstart: InsightStream",l={id:"guides/insight-stream/index",title:"Quickstart: InsightStream",description:"\u042d\u0442\u043e \u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u043e \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442, \u043a\u0430\u043a \u0440\u0430\u0437\u0432\u0435\u0440\u043d\u0443\u0442\u044c \u0447\u0430\u0442-\u0431\u043e\u0442 InsightStream RAG \u0432\u043c\u0435\u0441\u0442\u0435 \u0441 Compressa \u0434\u043b\u044f \u0438\u043d\u0444\u0435\u0440\u0435\u043d\u0441\u0430 \u043c\u043e\u0434\u0435\u043b\u0435\u0439.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/guides/insight-stream/index.md",sourceDirName:"guides/insight-stream",slug:"/guides/insight-stream/",permalink:"/ru/guides/insight-stream/",draft:!1,unlisted:!1,editUrl:"https://github.com/compressa-ai/compressa-ai.github.io/edit/main/docs/guides/insight-stream/index.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"guidesSidebar",previous:{title:"\u0411\u0430\u0437\u043e\u0432\u043e\u0435 \u0438\u043d\u0442\u0440\u043e \u0432 \u0441\u0435\u043c\u0430\u043d\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u043f\u043e\u0438\u0441\u043a",permalink:"/ru/guides/langchain_basic_semantic_search/"},next:{title:"Quickstart: Mistral-7B On-Premises",permalink:"/ru/guides/mistral/"}},t={},a=[{value:"\u0422\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f",id:"\u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f",level:2},{value:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430",id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-\u0441\u0435\u0440\u0432\u0435\u0440\u0430",level:2},{value:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0430",id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-\u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0430",level:2},{value:"\u0420\u0430\u0437\u0432\u0435\u0440\u0442\u044b\u0432\u0430\u043d\u0438\u0435 Inference \u0438 Embedding \u043c\u043e\u0434\u0435\u043b\u0435\u0439",id:"\u0440\u0430\u0437\u0432\u0435\u0440\u0442\u044b\u0432\u0430\u043d\u0438\u0435-inference-\u0438-embedding-\u043c\u043e\u0434\u0435\u043b\u0435\u0439",level:2},{value:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 LLama3-8B \u0432 Compressa:",id:"\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430-llama3-8b-\u0432-compressa",level:4},{value:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 embedding-\u043c\u043e\u0434\u0435\u043b\u0438 \u0432 Compressa:",id:"\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430-embedding-\u043c\u043e\u0434\u0435\u043b\u0438-\u0432-compressa",level:4},{value:"\u0420\u0430\u0437\u0432\u0435\u0440\u0442\u044b\u0432\u0430\u043d\u0438\u0435 LLama3-8B",id:"\u0440\u0430\u0437\u0432\u0435\u0440\u0442\u044b\u0432\u0430\u043d\u0438\u0435-llama3-8b",level:4},{value:"\u0420\u0430\u0437\u0432\u0435\u0440\u0442\u044b\u0432\u0430\u043d\u0438\u0435 embedding-\u043c\u043e\u0434\u0435\u043b\u0438",id:"\u0440\u0430\u0437\u0432\u0435\u0440\u0442\u044b\u0432\u0430\u043d\u0438\u0435-embedding-\u043c\u043e\u0434\u0435\u043b\u0438",level:4},{value:"CLI",id:"cli",level:2},{value:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",level:3},{value:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430",id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430",level:3},{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",level:2},{value:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430 \u0432 \u0438\u043d\u0434\u0435\u043a\u0441",id:"\u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435-\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430-\u0432-\u0438\u043d\u0434\u0435\u043a\u0441",level:3},{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0431\u043e\u0442\u0430 InsightStream",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435-\u0431\u043e\u0442\u0430-insightstream",level:3},{value:"REST API",id:"rest-api",level:3},{value:"\u0417\u0430\u0434\u0430\u0442\u044c \u0432\u043e\u043f\u0440\u043e\u0441 \u0431\u043e\u0442\u0443:",id:"\u0437\u0430\u0434\u0430\u0442\u044c-\u0432\u043e\u043f\u0440\u043e\u0441-\u0431\u043e\u0442\u0443",level:4},{value:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0444\u0430\u0439\u043b \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430:",id:"\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c-\u0444\u0430\u0439\u043b-\u0441-\u0441\u0435\u0440\u0432\u0435\u0440\u0430",level:4},{value:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0444\u0430\u0439\u043b \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440:",id:"\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c-\u0444\u0430\u0439\u043b-\u043d\u0430-\u0441\u0435\u0440\u0432\u0435\u0440",level:4}];function o(e){const n={a:"a",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"quickstart-insightstream",children:"Quickstart: InsightStream"}),"\n",(0,i.jsx)(n.p,{children:"\u042d\u0442\u043e \u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u043e \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442, \u043a\u0430\u043a \u0440\u0430\u0437\u0432\u0435\u0440\u043d\u0443\u0442\u044c \u0447\u0430\u0442-\u0431\u043e\u0442 InsightStream RAG \u0432\u043c\u0435\u0441\u0442\u0435 \u0441 Compressa \u0434\u043b\u044f \u0438\u043d\u0444\u0435\u0440\u0435\u043d\u0441\u0430 \u043c\u043e\u0434\u0435\u043b\u0435\u0439."}),"\n",(0,i.jsx)(n.h2,{id:"\u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f",children:"\u0422\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f"}),"\n",(0,i.jsxs)(n.p,{children:["\u0414\u043b\u044f \u0440\u0430\u0437\u0432\u0435\u0440\u0442\u044b\u0432\u0430\u043d\u0438\u044f InsightStream \u0441 Compressa \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c \u0441\u0435\u0440\u0432\u0435\u0440 \u0441 2 GPU.",(0,i.jsx)(n.br,{}),"\n","\u0422\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f \u043a GPU \u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043c\u043e\u0436\u043d\u043e \u043d\u0430\u0439\u0442\u0438 \u043d\u0430 \u044d\u0442\u043e\u0439 ",(0,i.jsx)(n.a,{href:"/onprem/setup/#requirements",children:"\u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-\u0441\u0435\u0440\u0432\u0435\u0440\u0430",children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430"}),"\n",(0,i.jsx)(n.p,{children:"\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u043a\u043b\u043e\u043d\u0438\u0440\u0443\u0439\u0442\u0435 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0439 \u0441 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430\u043c\u0438:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git clone -b insight-stream git@github.com:compressa-ai/compressa-deploy.git\ncd compressa-deploy\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u0420\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0439 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0434\u0432\u0430 \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0445 \u0444\u0430\u0439\u043b\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u044b \u0431\u0443\u0434\u0435\u043c \u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0442\u044c:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:".env"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"docker-compose.yml"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u0442\u0435 id GPU, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u0443\u0434\u0443\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0432 \u0444\u0430\u0439\u043b\u0435 ",(0,i.jsx)(n.code,{children:".env"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"DOCKER_GPU_IDS_CHAT=<ID1>\nDOCKER_GPU_IDS_EMB=<ID2>\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0441\u0435\u0440\u0432\u0438\u0441\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u043f\u043e\u0440\u0442\u044b:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"qdrant"})," - 6333"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"compressa"})," - 5500"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"insight-stream-bot"})," - 80"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u0415\u0441\u043b\u0438 \u0432\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u044d\u0442\u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438, \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u0435 \u043c\u0430\u043f\u043f\u0438\u043d\u0433\u0438 \u043f\u043e\u0440\u0442\u043e\u0432 \u0432 ",(0,i.jsx)(n.code,{children:"docker-compose.yml"})," \u0434\u043b\u044f \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043e\u0432 ",(0,i.jsx)(n.code,{children:"qdrant"}),", ",(0,i.jsx)(n.code,{children:"openai-api"}),", ",(0,i.jsx)(n.code,{children:"nginx"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f ",(0,i.jsx)(n.code,{children:"SERVER_NAME"})," \u0434\u043e\u043b\u0436\u043d\u0430 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c URL, \u043f\u043e \u043a\u043e\u0442\u043e\u0440\u043e\u043c\u0443 \u0431\u0443\u0434\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0431\u043e\u0442 InsightStream.\n",(0,i.jsx)(n.em,{children:"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, localhost:80, \u0435\u0441\u043b\u0438 \u0432\u044b \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442\u0435 \u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e \u0438\u043b\u0438 \u043f\u0435\u0440\u0435\u043d\u0430\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442\u0435 \u043f\u043e\u0440\u0442 80 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043d\u0430 \u043f\u043e\u0440\u0442 80 localhost."})]}),"\n",(0,i.jsx)(n.h2,{id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-\u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0430",children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0430"}),"\n",(0,i.jsx)(n.p,{children:"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u043f\u0443\u0442\u0438 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"qdrant"})," - ",(0,i.jsx)(n.code,{children:"./data/qdrant"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"compressa"})," - ",(0,i.jsx)(n.code,{children:"./data/compressa"}),(0,i.jsx)(n.br,{}),"\n","\u0414\u043b\u044f \u044d\u0442\u043e\u0439 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438 \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u044b \u043f\u0440\u0430\u0432\u0430 777, \u044d\u0442\u043e \u043c\u043e\u0436\u043d\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u043e\u043c\u0430\u043d\u0434\u043e\u0439:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"chmod 777 -R ./data/compressa\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432 - ",(0,i.jsx)(n.code,{children:"./data/documents"}),(0,i.jsx)(n.br,{}),"\n","\u0414\u043b\u044f \u044d\u0442\u043e\u0439 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438 \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u044b \u043f\u0440\u0430\u0432\u0430 755 \u0434\u043b\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f ",(0,i.jsx)(n.code,{children:"systemd-network"})," \u0438 \u0433\u0440\u0443\u043f\u043f\u044b ",(0,i.jsx)(n.code,{children:"systemd-journal"}),",\n\u044d\u0442\u043e \u043c\u043e\u0436\u043d\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u043e\u043c\u0430\u043d\u0434\u043e\u0439:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo chown systemd-network:systemd-journal ./data/documents && sudo chmod 755 ./data/documents\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438 \u0432 ",(0,i.jsx)(n.code,{children:"docker-compose.yml"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"\u0414\u043b\u044f \u0437\u0430\u043f\u0443\u0441\u043a\u0430 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043e\u0432 \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0435:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker compose up --build\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u0440\u0430\u0437\u0432\u0435\u0440\u0442\u044b\u0432\u0430\u043d\u0438\u0435-inference-\u0438-embedding-\u043c\u043e\u0434\u0435\u043b\u0435\u0439",children:"\u0420\u0430\u0437\u0432\u0435\u0440\u0442\u044b\u0432\u0430\u043d\u0438\u0435 Inference \u0438 Embedding \u043c\u043e\u0434\u0435\u043b\u0435\u0439"}),"\n",(0,i.jsxs)(n.p,{children:["\u041a\u043e\u0433\u0434\u0430 \u0441\u0435\u0440\u0432\u0438\u0441\u044b \u0437\u0430\u043f\u0443\u0449\u0435\u043d\u044b, \u043d\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u0440\u0430\u0437\u0432\u0435\u0440\u043d\u0443\u0442\u044c \u043c\u043e\u0434\u0435\u043b\u0438 \u0432 Compressa.\n\u0420\u0435\u0448\u0435\u043d\u0438\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u043c\u043e\u0434\u0435\u043b\u044c LLama3-8B \u0434\u043b\u044f \u0447\u0430\u0442\u0430 \u0438 \u043c\u043e\u0434\u0435\u043b\u044c SFR-Embedding-Mistral \u0434\u043b\u044f \u0432\u0435\u043a\u0442\u043e\u0440\u043d\u044b\u0445 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0439.",(0,i.jsx)(n.br,{}),"\n","\u041c\u043e\u0434\u0435\u043b\u0438 \u043c\u043e\u0436\u043d\u043e \u0440\u0430\u0437\u0432\u0435\u0440\u043d\u0443\u0442\u044c, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f ",(0,i.jsx)(n.a,{href:"/onprem/services/rest-api/",children:"REST API"})," \u0438\u043b\u0438 UI Swagger'\u0430."]}),"\n",(0,i.jsx)(n.p,{children:"REST API \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b \u043f\u043e \u0430\u0434\u0440\u0435\u0441\u0430\u043c:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"SERVER_NAME:5500/api/chat/"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"SERVER_NAME:5500/api/embeddings/"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Swagger UI \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b \u043f\u043e \u0430\u0434\u0440\u0435\u0441\u0430\u043c:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"SERVER_NAME:5500/api/chat/docs"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"SERVER_NAME:5500/api/embeddings/docs"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u041c\u043e\u0434\u0435\u043b\u0438 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u0440\u0430\u0437\u0432\u0435\u0440\u043d\u0442\u044b \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u043a\u043e\u043c\u043c\u0430\u043d\u0434 ",(0,i.jsx)(n.code,{children:"curl"}),":"]}),"\n",(0,i.jsx)(n.h4,{id:"\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430-llama3-8b-\u0432-compressa",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 LLama3-8B \u0432 Compressa:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"curl -X 'POST' \\\n  'http://localhost:5500/api/chat/v1/models/add/?model_id=compressa-ai%2FLlama-3-8B-Instruct' \\\n  -H 'accept: application/json' \\\n  -d ''\n"})}),"\n",(0,i.jsx)(n.h4,{id:"\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430-embedding-\u043c\u043e\u0434\u0435\u043b\u0438-\u0432-compressa",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 embedding-\u043c\u043e\u0434\u0435\u043b\u0438 \u0432 Compressa:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"curl -X 'POST' \\\n  'http://localhost:5500/api/embeddings/v1/models/add/?model_id=Salesforce%2FSFR-Embedding-Mistral' \\\n  -H 'accept: application/json' \\\n  -d ''\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438, \u043c\u043e\u0436\u043d\u043e \u0440\u0430\u0437\u0432\u0435\u0440\u043d\u0443\u0442\u044c \u043c\u043e\u0434\u0435\u043b\u0438:"}),"\n",(0,i.jsx)(n.h4,{id:"\u0440\u0430\u0437\u0432\u0435\u0440\u0442\u044b\u0432\u0430\u043d\u0438\u0435-llama3-8b",children:"\u0420\u0430\u0437\u0432\u0435\u0440\u0442\u044b\u0432\u0430\u043d\u0438\u0435 LLama3-8B"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"curl -X 'POST' \\\n  'http://localhost:5500/api/chat/v1/deploy/' \\\n  -H 'accept: application/json' \\\n  -H 'Content-Type: application/json' \\\n  -d '{\n  \"model_id\": \"compressa-ai/Llama-3-8B-Instruct\",\n  \"dtype\": \"float16\"\n}'\n"})}),"\n",(0,i.jsx)(n.h4,{id:"\u0440\u0430\u0437\u0432\u0435\u0440\u0442\u044b\u0432\u0430\u043d\u0438\u0435-embedding-\u043c\u043e\u0434\u0435\u043b\u0438",children:"\u0420\u0430\u0437\u0432\u0435\u0440\u0442\u044b\u0432\u0430\u043d\u0438\u0435 embedding-\u043c\u043e\u0434\u0435\u043b\u0438"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"curl -X 'POST' \\\n  'http://localhost:5500/api/embeddings/v1/deploy/' \\\n  -H 'accept: application/json' \\\n  -H 'Content-Type: application/json' \\\n  -d '{\n  \"model_id\": \"Salesforce/SFR-Embedding-Mistral\",\n  \"dtype\": \"float16\"\n}'\n"})}),"\n",(0,i.jsx)(n.p,{children:"When the models are deployed, the server is ready to use!"}),"\n",(0,i.jsx)(n.h2,{id:"cli",children:"CLI"}),"\n",(0,i.jsx)(n.p,{children:"CLI \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043d\u043e\u0432\u044b\u0445 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0432 \u0431\u0430\u0437\u0443."}),"\n",(0,i.jsx)(n.h3,{id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430"}),"\n",(0,i.jsxs)(n.p,{children:["CLI \u043c\u043e\u0436\u043d\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0438\u0437 \u0442\u043e\u0433\u043e \u0436\u0435 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u044f (\u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f ",(0,i.jsx)(n.code,{children:"python3.10+"}),"):"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"cd compressa-deploy/cli\npip install -r requirements.txt\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430",children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430"}),"\n",(0,i.jsxs)(n.p,{children:["CLI-\u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 \u0434\u043e\u043b\u0436\u0435\u043d \u0438\u043c\u0435\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0440\u0430\u0437\u0432\u0435\u0440\u043d\u0443\u0442\u043e\u043c\u0443 \u0447\u0430\u0442-\u0431\u043e\u0442\u0443, \u043c\u043e\u0434\u0435\u043b\u044f\u043c \u0438 qdrant.",(0,i.jsx)(n.br,{}),"\n","\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 URL \u043a \u043d\u0438\u043c \u0432 \u0444\u0430\u0439\u043b\u0435 ",(0,i.jsx)(n.code,{children:".env"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"SERVER_NAME=<SERVER_NAME> # in case of port 80\nQDRANT_URL=<SERVER_NAME>:6333\nOPENAI_BASE=<SERVER_NAME>:5500/v1 # Compressa \nQDRANT_KEY=your_secret_api_key_here\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",children:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"}),"\n",(0,i.jsx)(n.h3,{id:"\u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435-\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430-\u0432-\u0438\u043d\u0434\u0435\u043a\u0441",children:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430 \u0432 \u0438\u043d\u0434\u0435\u043a\u0441"}),"\n",(0,i.jsx)(n.p,{children:"\u041a\u043e\u0433\u0434\u0430 \u0432\u0441\u0435 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u0441\u0440\u0435\u0434\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u044b, \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u044b \u043c\u043e\u0436\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0443 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043e\u0434\u043d\u043e\u0439 \u0438\u0437 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u043a\u043e\u043c\u0430\u043d\u0434:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"python3 create_bot.py <BOT_ID> /path/to/document.pdf  \npython3 create_bot.py <BOT_ID> /path/to/folder\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u0411\u043e\u0442 InsightStream \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0444\u043e\u0440\u043c\u0430\u0442\u044b ",(0,i.jsx)(n.code,{children:".docx"})," \u0438 ",(0,i.jsx)(n.code,{children:".pdf"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["\u041a\u043e\u0433\u0434\u0430 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u044b \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u044b, \u0431\u043e\u0442 \u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d \u043f\u043e \u0430\u0434\u0440\u0435\u0441\u0443 ",(0,i.jsx)(n.code,{children:"<SERVER_NAME>/agent/<bot_id>"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435-\u0431\u043e\u0442\u0430-insightstream",children:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0431\u043e\u0442\u0430 InsightStream"}),"\n",(0,i.jsxs)(n.p,{children:["\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043e\u0442\u043a\u0440\u044b\u0442\u044c \u0431\u043e\u0442\u0430 InsightStream \u043f\u043e \u0430\u0434\u0440\u0435\u0441\u0443 ",(0,i.jsx)(n.code,{children:"<SERVER_NAME>/agent/<bot_id>"})," \u0438 \u0437\u0430\u0434\u0430\u0442\u044c \u0432\u043e\u043f\u0440\u043e\u0441 \u0432 \u0447\u0430\u0442\u0435:\n",(0,i.jsx)(n.img,{alt:"Chat UI",src:s(1160).A+"",width:"2402",height:"1820"})]}),"\n",(0,i.jsx)(n.p,{children:"\u0411\u043e\u0442 \u0442\u0430\u043a\u0436\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d \u0447\u0435\u0440\u0435\u0437 REST API."}),"\n",(0,i.jsx)(n.h3,{id:"rest-api",children:"REST API"}),"\n",(0,i.jsx)(n.h4,{id:"\u0437\u0430\u0434\u0430\u0442\u044c-\u0432\u043e\u043f\u0440\u043e\u0441-\u0431\u043e\u0442\u0443",children:"\u0417\u0430\u0434\u0430\u0442\u044c \u0432\u043e\u043f\u0440\u043e\u0441 \u0431\u043e\u0442\u0443:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'curl -X POST \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n    "question": "<your_question_here>"\n  }\' \\\n  "<SERVER_NAME>/v.1.0/<bot_id>"\n'})}),"\n",(0,i.jsx)(n.h4,{id:"\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c-\u0444\u0430\u0439\u043b-\u0441-\u0441\u0435\u0440\u0432\u0435\u0440\u0430",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0444\u0430\u0439\u043b \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"curl <SERVER_NAME>/documents/<filename> > <filename> \n"})}),"\n",(0,i.jsx)(n.h4,{id:"\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c-\u0444\u0430\u0439\u043b-\u043d\u0430-\u0441\u0435\u0440\u0432\u0435\u0440",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0444\u0430\u0439\u043b \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"curl -X PUT -T /path/to/file <SERVER_NAME>/documents/<filename> \n"})})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},1160:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/insight-stream-bd48ccdd03b5a09ce6e440b9ca5bfd28.png"},8453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>l});var i=s(6540);const d={},r=i.createContext(d);function c(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);