"use strict";(self.webpackChunkcompressa_docs=self.webpackChunkcompressa_docs||[]).push([[355],{687:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var s=t(4848),a=t(8453),r=t(1470),i=t(9365);const o={sidebar_position:3},l="Embeddings",d={id:"docs/basic_modules/Embeddings",title:"Embeddings",description:"Embeddings \u2014 \u044d\u0442\u043e \u0447\u0438\u0441\u043b\u0435\u043d\u043d\u044b\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u044b\u0445 \u0441\u0442\u0440\u043e\u043a, \u0438\u0437\u043c\u0435\u0440\u044f\u044e\u0449\u0438\u0435 \u0438\u0445 \u0432\u0437\u0430\u0438\u043c\u043e\u0441\u0432\u044f\u0437\u044c. \u0422\u0435\u043a\u0441\u0442\u043e\u0432\u044b\u0435 \u044d\u043c\u0431\u0435\u0434\u0434\u0438\u043d\u0433\u0438 \u0438\u0437\u043c\u0435\u0440\u044f\u044e\u0442 \u0441\u0442\u0435\u043f\u0435\u043d\u044c \u0441\u0445\u043e\u0436\u0435\u0441\u0442\u0438 \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u044b\u0445 \u0441\u0442\u0440\u043e\u043a \u0438 \u0447\u0430\u0441\u0442\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0437\u0430\u0434\u0430\u0447:",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/docs/basic_modules/Embeddings.md",sourceDirName:"docs/basic_modules",slug:"/docs/basic_modules/Embeddings",permalink:"/docs/basic_modules/Embeddings",draft:!1,unlisted:!1,editUrl:"https://github.com/compressa-ai/compressa-ai.github.io/edit/main/i18n/ru/docusaurus-plugin-content-docs/current/docs/basic_modules/Embeddings.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"\u041f\u0435\u0440\u0435\u0445\u043e\u0434 \u0441 OpenAI",permalink:"/docs/basic_modules/LLM/OpenAI"},next:{title:"Rerank",permalink:"/docs/basic_modules/Rerank"}},c={},u=[{value:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u044d\u043c\u0431\u0435\u0434\u0434\u0438\u043d\u0433\u043e\u0432 \u0434\u043b\u044f \u043e\u0434\u043d\u043e\u0433\u043e \u0438 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u044b\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432",id:"\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435-\u044d\u043c\u0431\u0435\u0434\u0434\u0438\u043d\u0433\u043e\u0432-\u0434\u043b\u044f-\u043e\u0434\u043d\u043e\u0433\u043e-\u0438-\u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445-\u0442\u0435\u043a\u0441\u0442\u043e\u0432\u044b\u0445-\u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432",level:3},{value:"\u0422\u0430\u043a\u0436\u0435 \u0432 Python \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0435 Compressa \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e\u0435 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435 embeddings",id:"\u0442\u0430\u043a\u0436\u0435-\u0432-python-\u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0435-compressa-\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e-\u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e\u0435-\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435-embeddings",level:3}];function m(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"embeddings",children:"Embeddings"}),"\n",(0,s.jsx)(n.p,{children:"Embeddings \u2014 \u044d\u0442\u043e \u0447\u0438\u0441\u043b\u0435\u043d\u043d\u044b\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u044b\u0445 \u0441\u0442\u0440\u043e\u043a, \u0438\u0437\u043c\u0435\u0440\u044f\u044e\u0449\u0438\u0435 \u0438\u0445 \u0432\u0437\u0430\u0438\u043c\u043e\u0441\u0432\u044f\u0437\u044c. \u0422\u0435\u043a\u0441\u0442\u043e\u0432\u044b\u0435 \u044d\u043c\u0431\u0435\u0434\u0434\u0438\u043d\u0433\u0438 \u0438\u0437\u043c\u0435\u0440\u044f\u044e\u0442 \u0441\u0442\u0435\u043f\u0435\u043d\u044c \u0441\u0445\u043e\u0436\u0435\u0441\u0442\u0438 \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u044b\u0445 \u0441\u0442\u0440\u043e\u043a \u0438 \u0447\u0430\u0441\u0442\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0437\u0430\u0434\u0430\u0447:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u041f\u043e\u0438\u0441\u043a (\u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u0441\u043e\u0440\u0442\u0438\u0440\u0443\u044e\u0442\u0441\u044f \u043f\u043e \u0440\u0435\u043b\u0435\u0432\u0430\u043d\u0442\u043d\u043e\u0441\u0442\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0443)"}),"\n",(0,s.jsx)(n.li,{children:"\u041a\u043b\u0430\u0441\u0442\u0435\u0440\u0438\u0437\u0430\u0446\u0438\u044f (\u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u043a\u0430 \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u044b\u0445 \u0441\u0442\u0440\u043e\u043a \u043f\u043e \u0441\u0445\u043e\u0436\u0435\u0441\u0442\u0438)"}),"\n",(0,s.jsx)(n.li,{children:"\u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438 (\u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u044f \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u0441 \u043f\u043e\u0445\u043e\u0436\u0438\u043c\u0438 \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u044b\u043c\u0438 \u0441\u0442\u0440\u043e\u043a\u0430\u043c\u0438)"}),"\n",(0,s.jsx)(n.li,{children:"\u041e\u0431\u043d\u0430\u0440\u0443\u0436\u0435\u043d\u0438\u0435 \u0430\u043d\u043e\u043c\u0430\u043b\u0438\u0439 (\u043f\u043e\u0438\u0441\u043a \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432, \u0437\u043d\u0430\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043e\u0442\u043b\u0438\u0447\u0430\u044e\u0449\u0438\u0445\u0441\u044f \u043e\u0442 \u0434\u0440\u0443\u0433\u0438\u0445)"}),"\n",(0,s.jsx)(n.li,{children:"\u0418\u0437\u043c\u0435\u0440\u0435\u043d\u0438\u0435 \u0440\u0430\u0437\u043d\u043e\u043e\u0431\u0440\u0430\u0437\u0438\u044f (\u0430\u043d\u0430\u043b\u0438\u0437 \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0441\u0445\u043e\u0436\u0435\u0441\u0442\u0438)"}),"\n",(0,s.jsx)(n.li,{children:"\u041a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f (\u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u044b\u0445 \u0441\u0442\u0440\u043e\u043a \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0438\u0445 \u0441\u0445\u043e\u0436\u0435\u0441\u0442\u0438 \u0441 \u043c\u0435\u0442\u043a\u0430\u043c\u0438)"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u042d\u043c\u0431\u0435\u0434\u0434\u0438\u043d\u0433 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u043e\u0431\u043e\u0439 \u0432\u0435\u043a\u0442\u043e\u0440 (\u0441\u043f\u0438\u0441\u043e\u043a) \u0447\u0438\u0441\u0435\u043b. \u0420\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u043c\u0435\u0436\u0434\u0443 \u0434\u0432\u0443\u043c\u044f \u0432\u0435\u043a\u0442\u043e\u0440\u0430\u043c\u0438 \u0438\u0437\u043c\u0435\u0440\u044f\u0435\u0442 \u0441\u0442\u0435\u043f\u0435\u043d\u044c \u0438\u0445 \u0441\u0445\u043e\u0436\u0435\u0441\u0442\u0438: \u043d\u0435\u0431\u043e\u043b\u044c\u0448\u043e\u0435 \u0440\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u043d\u0430 \u0432\u044b\u0441\u043e\u043a\u0443\u044e \u0441\u0442\u0435\u043f\u0435\u043d\u044c \u0441\u0445\u043e\u0436\u0435\u0441\u0442\u0438, \u0430 \u0431\u043e\u043b\u044c\u0448\u043e\u0435 \u0440\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u2014 \u043d\u0430 \u043d\u0438\u0437\u043a\u0443\u044e."}),"\n",(0,s.jsx)(n.h3,{id:"\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435-\u044d\u043c\u0431\u0435\u0434\u0434\u0438\u043d\u0433\u043e\u0432-\u0434\u043b\u044f-\u043e\u0434\u043d\u043e\u0433\u043e-\u0438-\u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445-\u0442\u0435\u043a\u0441\u0442\u043e\u0432\u044b\u0445-\u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432",children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u044d\u043c\u0431\u0435\u0434\u0434\u0438\u043d\u0433\u043e\u0432 \u0434\u043b\u044f \u043e\u0434\u043d\u043e\u0433\u043e \u0438 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u044b\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432"}),"\n","\n",(0,s.jsxs)(r.A,{children:[(0,s.jsx)(i.A,{value:"python",label:"Python (Langchain)",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'#pip install langchain-compressa - \u0435\u0441\u043b\u0438 \u0443 \u0432\u0430\u0441 \u0435\u0449\u0435 \u043d\u0435\u0442 \u044d\u0442\u043e\u0433\u043e \u043f\u0430\u043a\u0435\u0442\u0430\n\nfrom langchain_compressa import CompressaEmbeddings\n\nembeddings = CompressaEmbeddings(\n    model="Compressa-Embedding",\n    base_url="https://compressa-api.mil-team.ru/v1", # \u043f\u0440\u0438 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u043c \u0437\u0430\u043f\u0443\u0441\u043a\u0435 \u0437\u0430\u043c\u0435\u043d\u0438\u0442\u0435 \u043d\u0430 \u0432\u0430\u0448 url, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 http://localhost:8080/api/v1\n    api_key="\u0412\u0430\u0448_API_\u043a\u043b\u044e\u0447_Compressa", # \u043f\u0440\u0438 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u043c \u0437\u0430\u043f\u0443\u0441\u043a\u0435 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0435 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u0442\u044c \u043a\u043b\u044e\u0447 \u0438\u043b\u0438 \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0441\u0432\u043e\u0439\n    model_kwargs={"encoding_format": \'float\'},\n    tiktoken_enabled=False,\n    tiktoken_model_name="Salesforce/SFR-Embedding-Mistral",\n)\n\n# \u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 embedding \u0434\u043b\u044f \u043e\u0434\u043d\u043e\u0433\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0430\nquery_embedding = embeddings.embed_query("\u041a\u0430\u043a \u043f\u0440\u0438\u0433\u043e\u0442\u043e\u0432\u0438\u0442\u044c \u0431\u043e\u0440\u0449?")\n\n# \u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 embeddings \u0434\u043b\u044f \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432\ndocs_embeddings = embeddings.embed_documents([\n    "\u0411\u043e\u0440\u0449 - \u044d\u0442\u043e \u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0441\u043b\u0430\u0432\u044f\u043d\u0441\u043a\u0438\u0439 \u0441\u0443\u043f",\n    "\u0414\u043b\u044f \u043f\u0440\u0438\u0433\u043e\u0442\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u0431\u043e\u0440\u0449\u0430 \u043d\u0443\u0436\u043d\u0430 \u0441\u0432\u0435\u043a\u043b\u0430",\n    "\u0411\u043e\u0440\u0449 \u043e\u0431\u044b\u0447\u043d\u043e \u043f\u043e\u0434\u0430\u044e\u0442 \u0441\u043e \u0441\u043c\u0435\u0442\u0430\u043d\u043e\u0439",\n    "\u0412 \u0431\u043e\u0440\u0449 \u0447\u0430\u0441\u0442\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u044e\u0442 \u043c\u044f\u0441\u043e",\n    "\u0411\u043e\u0440\u0449 \u0438\u043c\u0435\u0435\u0442 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u043d\u044b\u0439 \u043a\u0440\u0430\u0441\u043d\u044b\u0439 \u0446\u0432\u0435\u0442"\n])\n'})})}),(0,s.jsx)(i.A,{value:"openai",label:"Python (OpenAI \u043a\u043b\u0438\u0435\u043d\u0442)",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'# from openai import OpenAI - \u0435\u0441\u043b\u0438 \u0443 \u0432\u0430\u0441 \u0435\u0449\u0435 \u043d\u0435\u0442 \u044d\u0442\u043e\u0433\u043e \u043f\u0430\u043a\u0435\u0442\u0430\n\nclient = OpenAI(\n    api_key = "\u0412\u0430\u0448_API_\u043a\u043b\u044e\u0447_Compressa", # \u043f\u0440\u0438 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u043c \u0437\u0430\u043f\u0443\u0441\u043a\u0435 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0435 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u0442\u044c \u043a\u043b\u044e\u0447 \u0438\u043b\u0438 \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0441\u0432\u043e\u0439\n    base_url = "https://compressa-api.mil-team.ru/v1" # \u043f\u0440\u0438 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u043c \u0437\u0430\u043f\u0443\u0441\u043a\u0435 \u0437\u0430\u043c\u0435\u043d\u0438\u0442\u0435 \u043d\u0430 \u0432\u0430\u0448 url, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 http://localhost:8080/api/v1\n)\n\n# \u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 embedding \u0434\u043b\u044f \u043e\u0434\u043d\u043e\u0433\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0430\nembedding = client.embeddings.create(\n    model="Compressa-Embedding",\n    input="\u041a\u0430\u043a \u043f\u0440\u0438\u0433\u043e\u0442\u043e\u0432\u0438\u0442\u044c \u0431\u043e\u0440\u0449?",\n    encoding_format="float",\n)\n\n# \u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 embeddings \u0434\u043b\u044f \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432\ndocs = [\n    "\u0411\u043e\u0440\u0449 - \u044d\u0442\u043e \u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0441\u043b\u0430\u0432\u044f\u043d\u0441\u043a\u0438\u0439 \u0441\u0443\u043f",\n    "\u0414\u043b\u044f \u043f\u0440\u0438\u0433\u043e\u0442\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u0431\u043e\u0440\u0449\u0430 \u043d\u0443\u0436\u043d\u0430 \u0441\u0432\u0435\u043a\u043b\u0430",\n    "\u0411\u043e\u0440\u0449 \u043e\u0431\u044b\u0447\u043d\u043e \u043f\u043e\u0434\u0430\u044e\u0442 \u0441\u043e \u0441\u043c\u0435\u0442\u0430\u043d\u043e\u0439",\n    "\u0412 \u0431\u043e\u0440\u0449 \u0447\u0430\u0441\u0442\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u044e\u0442 \u043c\u044f\u0441\u043e",\n    "\u0411\u043e\u0440\u0449 \u0438\u043c\u0435\u0435\u0442 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u043d\u044b\u0439 \u043a\u0440\u0430\u0441\u043d\u044b\u0439 \u0446\u0432\u0435\u0442"\n]\n\nembeddings = client.embeddings.create(\n    model="Compressa-Embedding",\n    input=docs,\n    encoding_format="float",\n)\n'})})}),(0,s.jsx)(i.A,{value:"curl",label:"cURL",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# \u043f\u0440\u0438 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u043c \u0437\u0430\u043f\u0443\u0441\u043a\u0435 \u0437\u0430\u043c\u0435\u043d\u0438\u0442\u0435 \u043d\u0430 \u0432\u0430\u0448 url, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 http://localhost:8080/api/v1/embeddings\n# \u043f\u0440\u0438 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u043c \u0437\u0430\u043f\u0443\u0441\u043a\u0435 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0435 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u0442\u044c API \u043a\u043b\u044e\u0447 \u0438\u043b\u0438 \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0441\u0432\u043e\u0439\n\ncurl -X 'POST' \\\n  'https://compressa-api.mil-team.ru/v1/embeddings' \\\n  -H 'accept: application/json' \\\n  -H 'Content-Type: application/json' \\\n  -H 'Authorization: Bearer \u0412\u0430\u0448_API_\u043a\u043b\u044e\u0447_Compressa' \\\n  -d '{\n  \"model\": \"Compressa-Embedding\",\n  \"input\": \"\u0437\u0430\u043f\u0440\u043e\u0441 \u043d\u0430 \u044d\u043c\u0431\u0435\u0434\u0438\u043d\u0433\"\n}'\n"})})})]}),"\n",(0,s.jsx)(n.h3,{id:"\u0442\u0430\u043a\u0436\u0435-\u0432-python-\u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0435-compressa-\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e-\u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e\u0435-\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435-embeddings",children:"\u0422\u0430\u043a\u0436\u0435 \u0432 Python \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0435 Compressa \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e\u0435 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435 embeddings"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'#pip install langchain-compressa - \u0435\u0441\u043b\u0438 \u0443 \u0432\u0430\u0441 \u0435\u0449\u0435 \u043d\u0435\u0442 \u044d\u0442\u043e\u0433\u043e \u043f\u0430\u043a\u0435\u0442\u0430\n\nimport os\nfrom langchain_compressa import CompressaEmbeddings\n\nembeddings = CompressaEmbeddings(\n    model="Compressa-Embedding",\n    base_url="https://compressa-api.mil-team.ru/v1", # \u043f\u0440\u0438 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u043c \u0437\u0430\u043f\u0443\u0441\u043a\u0435 \u0437\u0430\u043c\u0435\u043d\u0438\u0442\u0435 \u043d\u0430 \u0432\u0430\u0448 url, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 http://localhost:8080/api/v1\n    api_key="\u0412\u0430\u0448_API_\u043a\u043b\u044e\u0447_Compressa", # \u043f\u0440\u0438 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u043c \u0437\u0430\u043f\u0443\u0441\u043a\u0435 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0435 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u0442\u044c \u043a\u043b\u044e\u0447 \u0438\u043b\u0438 \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0441\u0432\u043e\u0439\n    model_kwargs={"encoding_format": \'float\'},\n    tiktoken_enabled=False,\n    tiktoken_model_name="Salesforce/SFR-Embedding-Mistral",\n)\n\n# \u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 embedding \u0434\u043b\u044f \u043e\u0434\u043d\u043e\u0433\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0430\nawait embeddings.aembed_query("\u041a\u0430\u043a \u043f\u0440\u0438\u0433\u043e\u0442\u043e\u0432\u0438\u0442\u044c \u0431\u043e\u0440\u0449?")\n\n# \u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 embeddings \u0434\u043b\u044f \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432\nawait embeddings.aembed_documents([\n    "\u0411\u043e\u0440\u0449 - \u044d\u0442\u043e \u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0441\u043b\u0430\u0432\u044f\u043d\u0441\u043a\u0438\u0439 \u0441\u0443\u043f",\n    "\u0414\u043b\u044f \u043f\u0440\u0438\u0433\u043e\u0442\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u0431\u043e\u0440\u0449\u0430 \u043d\u0443\u0436\u043d\u0430 \u0441\u0432\u0435\u043a\u043b\u0430",\n    "\u0411\u043e\u0440\u0449 \u043e\u0431\u044b\u0447\u043d\u043e \u043f\u043e\u0434\u0430\u044e\u0442 \u0441\u043e \u0441\u043c\u0435\u0442\u0430\u043d\u043e\u0439",\n    "\u0412 \u0431\u043e\u0440\u0449 \u0447\u0430\u0441\u0442\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u044e\u0442 \u043c\u044f\u0441\u043e",\n    "\u0411\u043e\u0440\u0449 \u0438\u043c\u0435\u0435\u0442 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u043d\u044b\u0439 \u043a\u0440\u0430\u0441\u043d\u044b\u0439 \u0446\u0432\u0435\u0442"\n])\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["\u0415\u0441\u043b\u0438 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u0433\u043b\u0443\u0431\u0436\u0435 \u043f\u043e\u0433\u0440\u0443\u0437\u0438\u0442\u044c\u0441\u044f \u0432 Embeddings \u0438 \u043f\u043e\u043d\u044f\u0442\u044c, \u043a\u0430\u043a \u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438 \u0443\u0441\u0442\u0440\u043e\u0435\u043d \u0441\u0435\u043c\u0430\u043d\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u043f\u043e\u0438\u0441\u043a - \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u043d\u0430\u0448\u0435 ",(0,s.jsx)(n.a,{href:"/guides/langchain_basic_semantic_search/",children:"\u043f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u043e"}),"."]})})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>i});t(6540);var s=t(4164);const a={tabItem:"tabItem_Ymn6"};var r=t(4848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.A)(a.tabItem,i),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>y});var s=t(6540),a=t(4164),r=t(3104),i=t(6347),o=t(205),l=t(7485),d=t(1682),c=t(9466);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:a}}=e;return{value:n,label:t,attributes:s,default:a}}))}(t);return function(e){const n=(0,d.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(r),(0,s.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(a.location.search);n.set(r,e),a.replace({...a.location,search:n.toString()})}),[r,a])]}function h(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,r=m(e),[i,l]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:r}))),[d,u]=b({queryString:t,groupId:a}),[h,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,r]=(0,c.Dv)(t);return[a,(0,s.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:a}),f=(()=>{const e=d??h;return p({value:e,tabValues:r})?e:null})();(0,o.A)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),g(e)}),[u,g,r]),tabValues:r}}var g=t(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(4848);function _(e){let{className:n,block:t,selectedValue:s,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.a_)(),c=e=>{const n=e.currentTarget,t=l.indexOf(n),a=o[t].value;a!==s&&(d(n),i(a))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>l.push(e),onKeyDown:u,onClick:c,...r,className:(0,a.A)("tabs__item",f.tabItem,r?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function x(e){let{lazy:n,children:t,selectedValue:a}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function j(e){const n=h(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",f.tabList),children:[(0,v.jsx)(_,{...n,...e}),(0,v.jsx)(x,{...n,...e})]})}function y(e){const n=(0,g.A)();return(0,v.jsx)(j,{...e,children:u(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var s=t(6540);const a={},r=s.createContext(a);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);