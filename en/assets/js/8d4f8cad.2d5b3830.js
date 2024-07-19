"use strict";(self.webpackChunkcompressa_docs=self.webpackChunkcompressa_docs||[]).push([[121],{3975:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>d,metadata:()=>t,toc:()=>l});var s=i(4848),a=i(8453);const d={sidebar_position:1},r="Deep dive into embeddings and semantic search",t={id:"guides/langchain_basic_semantic_search/index",title:"Deep dive into embeddings and semantic search",description:"\u042f\u0437\u044b\u043a\u043e\u0432\u044b\u0435 \u043c\u043e\u0434\u0435\u043b\u0438 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0442 \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u0430\u043c \u0432\u044b\u0445\u043e\u0434\u0438\u0442\u044c \u0437\u0430 \u0440\u0430\u043c\u043a\u0438 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0433\u043e \u043f\u043e\u0438\u0441\u043a\u0430 \u043f\u043e \u043a\u043b\u044e\u0447\u0435\u0432\u044b\u043c \u0441\u043b\u043e\u0432\u0430\u043c \u0438 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u044c \u043d\u0443\u0436\u043d\u044b\u0435 \u0444\u0440\u0430\u0433\u043c\u0435\u043d\u0442\u044b \u043f\u043e \u0441\u043c\u044b\u0441\u043b\u0443 \u0442\u0435\u043a\u0441\u0442\u0430. \u042d\u0442\u043e \u043d\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0441\u0435\u043c\u0430\u043d\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u043c \u043f\u043e\u0438\u0441\u043a\u043e\u043c, \u0438 \u0441\u0435\u0433\u043e\u0434\u043d\u044f \u043c\u044b \u0440\u0435\u0430\u043b\u0438\u0437\u0443\u0435\u043c \u0435\u0433\u043e \u043d\u0430 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0435.",source:"@site/docs/guides/langchain_basic_semantic_search/index.md",sourceDirName:"guides/langchain_basic_semantic_search",slug:"/guides/langchain_basic_semantic_search/",permalink:"/en/guides/langchain_basic_semantic_search/",draft:!1,unlisted:!1,editUrl:"https://github.com/compressa-ai/compressa-ai.github.io/edit/main/docs/guides/langchain_basic_semantic_search/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"guidesSidebar",previous:{title:"Improving search accuracy with Rerank",permalink:"/en/guides/langchain_basic_rerank/"},next:{title:"Basic RAG in 15 minutes",permalink:"/en/guides/langchain_rag/"}},c={},l=[{value:"1. \u041d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u043c \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u0435",id:"1-\u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u043c-\u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u0435",level:2},{value:"2. \u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0434\u0430\u0442\u0430\u0441\u0435\u0442 \u0441 \u0432\u043e\u043f\u0440\u043e\u0441\u0430\u043c\u0438",id:"2-\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435-\u0434\u0430\u0442\u0430\u0441\u0435\u0442-\u0441-\u0432\u043e\u043f\u0440\u043e\u0441\u0430\u043c\u0438",level:2},{value:"2. \u041f\u0440\u0435\u0432\u0440\u0430\u0449\u0430\u0435\u043c \u0434\u0430\u0442\u0430\u0441\u0435\u0442 \u0432\u043e\u043f\u0440\u043e\u0441\u043e\u0432 \u0432 embeddings",id:"2-\u043f\u0440\u0435\u0432\u0440\u0430\u0449\u0430\u0435\u043c-\u0434\u0430\u0442\u0430\u0441\u0435\u0442-\u0432\u043e\u043f\u0440\u043e\u0441\u043e\u0432-\u0432-embeddings",level:2},{value:"3. \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c \u043f\u043e\u0438\u0441\u043a \u043f\u043e \u0438\u043d\u0434\u0435\u043a\u0441\u0443 \u0438 \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0435\u043c\u0443 \u0441\u043e\u0441\u0435\u0434\u0443",id:"3-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c-\u043f\u043e\u0438\u0441\u043a-\u043f\u043e-\u0438\u043d\u0434\u0435\u043a\u0441\u0443-\u0438-\u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0435\u043c\u0443-\u0441\u043e\u0441\u0435\u0434\u0443",level:2},{value:"3.1. \u0418\u0449\u0435\u043c \u043f\u043e\u0445\u043e\u0436\u0438\u0435 \u043f\u043e \u0441\u043c\u044b\u0441\u043b\u0443 \u0432\u043e\u043f\u0440\u043e\u0441\u044b \u0434\u043b\u044f \u043e\u0434\u043d\u043e\u0433\u043e \u043f\u0440\u0438\u043c\u0435\u0440\u0430 \u0438\u0437 \u0434\u0430\u0442\u0430\u0441\u0435\u0442\u0430",id:"31-\u0438\u0449\u0435\u043c-\u043f\u043e\u0445\u043e\u0436\u0438\u0435-\u043f\u043e-\u0441\u043c\u044b\u0441\u043b\u0443-\u0432\u043e\u043f\u0440\u043e\u0441\u044b-\u0434\u043b\u044f-\u043e\u0434\u043d\u043e\u0433\u043e-\u043f\u0440\u0438\u043c\u0435\u0440\u0430-\u0438\u0437-\u0434\u0430\u0442\u0430\u0441\u0435\u0442\u0430",level:3},{value:"3.2. \u0418\u0449\u0435\u043c \u0432\u043e\u043f\u0440\u043e\u0441\u044b, \u043f\u043e\u0445\u043e\u0436\u0438\u0435 \u043d\u0430 \u0437\u0430\u043f\u0440\u043e\u0441 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",id:"32-\u0438\u0449\u0435\u043c-\u0432\u043e\u043f\u0440\u043e\u0441\u044b-\u043f\u043e\u0445\u043e\u0436\u0438\u0435-\u043d\u0430-\u0437\u0430\u043f\u0440\u043e\u0441-\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",level:3},{value:"4. \u0412\u0438\u0437\u0443\u0430\u043b\u0438\u0437\u0438\u0440\u0443\u0435\u043c \u0444\u0430\u0439\u043b \u0432\u043e\u043f\u0440\u043e\u0441\u043e\u0432",id:"4-\u0432\u0438\u0437\u0443\u0430\u043b\u0438\u0437\u0438\u0440\u0443\u0435\u043c-\u0444\u0430\u0439\u043b-\u0432\u043e\u043f\u0440\u043e\u0441\u043e\u0432",level:2}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"deep-dive-into-embeddings-and-semantic-search",children:"Deep dive into embeddings and semantic search"}),"\n",(0,s.jsx)(n.p,{children:"\u042f\u0437\u044b\u043a\u043e\u0432\u044b\u0435 \u043c\u043e\u0434\u0435\u043b\u0438 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0442 \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u0430\u043c \u0432\u044b\u0445\u043e\u0434\u0438\u0442\u044c \u0437\u0430 \u0440\u0430\u043c\u043a\u0438 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0433\u043e \u043f\u043e\u0438\u0441\u043a\u0430 \u043f\u043e \u043a\u043b\u044e\u0447\u0435\u0432\u044b\u043c \u0441\u043b\u043e\u0432\u0430\u043c \u0438 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u044c \u043d\u0443\u0436\u043d\u044b\u0435 \u0444\u0440\u0430\u0433\u043c\u0435\u043d\u0442\u044b \u043f\u043e \u0441\u043c\u044b\u0441\u043b\u0443 \u0442\u0435\u043a\u0441\u0442\u0430. \u042d\u0442\u043e \u043d\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0441\u0435\u043c\u0430\u043d\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u043c \u043f\u043e\u0438\u0441\u043a\u043e\u043c, \u0438 \u0441\u0435\u0433\u043e\u0434\u043d\u044f \u043c\u044b \u0440\u0435\u0430\u043b\u0438\u0437\u0443\u0435\u043c \u0435\u0433\u043e \u043d\u0430 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0435."}),"\n",(0,s.jsx)(n.p,{children:"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0441\u0435\u043c\u0430\u043d\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u043f\u043e\u0438\u0441\u043a\u0430 \u0432\u044b\u0445\u043e\u0434\u0438\u0442 \u0437\u0430 \u0440\u0430\u043c\u043a\u0438 \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u044f \u0432\u0435\u0431-\u043f\u043e\u0438\u0441\u043a\u0430. \u0421 \u043d\u0438\u043c \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u0443\u044e \u043f\u043e\u0438\u0441\u043a\u043e\u0432\u0443\u044e \u0441\u0438\u0441\u0442\u0435\u043c\u0443 \u043f\u043e \u0432\u043d\u0443\u0440\u0435\u043d\u043d\u0438\u043c \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u043c \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438 \u0438\u043b\u0438 \u043f\u043e\u043c\u043e\u0447\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f\u043c \u043b\u0443\u0447\u0448\u0435 \u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0432 \u0432\u0430\u0448\u0435\u043c FAQ. \u0415\u0449\u0435 \u043e\u0434\u0438\u043d \u043f\u0440\u0438\u043c\u0435\u0440 \u043f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0432\u043d\u0435\u0434\u0440\u0435\u043d\u0438\u044f \u0441\u0435\u043c\u0430\u043d\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u043f\u043e\u0438\u0441\u043a\u0430 - \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438 \u0440\u0435\u043b\u0435\u0432\u0430\u043d\u0442\u043d\u044b\u0445 \u0441\u0442\u0430\u0442\u0435\u0439 \u0432 \u0431\u043b\u043e\u0433\u0435 \u043f\u043e\u0441\u043b\u0435 \u043f\u0440\u043e\u0447\u0442\u0435\u043d\u0438\u044f \u043e\u0434\u043d\u043e\u0439 \u0438\u0437 \u043d\u0438\u0445."}),"\n",(0,s.jsx)(n.p,{children:"\u0412\u043e\u0442 \u043a\u0430\u043a \u044d\u0442\u043e \u0432\u044b\u0433\u043b\u044f\u0434\u0438\u0442 \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 \u0441\u0445\u0435\u043c\u044b:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://raw.githubusercontent.com/walyoung1/pictures/main/guides_semantic_pic1.jpg",alt:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430 1"})}),"\n",(0,s.jsx)(n.p,{children:"\u0418\u0442\u0430\u043a, \u0432 \u0440\u0430\u043c\u043a\u0430\u0445 \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u0433\u0430\u0439\u0434\u0430 \u043c\u044b \u043f\u0440\u043e\u0439\u0434\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0448\u0430\u0433\u0438:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u041f\u043e\u043b\u0443\u0447\u0438\u043c csv \u0444\u0430\u0439\u043b 1000 \u0432\u043e\u043f\u0440\u043e\u0441\u043e\u0432 \u043d\u0430 \u0440\u0443\u0441\u0441\u043a\u043e\u043c"}),"\n",(0,s.jsx)(n.li,{children:"\u041f\u0440\u0435\u0432\u0440\u0430\u0442\u0438\u043c \u0442\u0435\u043a\u0441\u0442 \u0432 \u0447\u0438\u0441\u043b\u043e\u0432\u044b\u0435 embeddings"}),"\n",(0,s.jsx)(n.li,{children:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c \u043f\u043e\u0438\u0441\u043a \u043f\u043e \u0438\u043d\u0434\u0435\u043a\u0441\u0443 \u0438 \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0438\u043c \u0441\u043e\u0441\u0435\u0434\u044f\u043c"}),"\n",(0,s.jsx)(n.li,{children:"\u0412\u0438\u0437\u0443\u0430\u043b\u0438\u0437\u0438\u0440\u0443\u0435\u043c \u0444\u0430\u0439\u043b \u0432\u043e\u043f\u0440\u043e\u0441\u043e\u0432 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 embeddings"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u0412\u0435\u0441\u044c \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0439 \u043d\u0438\u0436\u0435 \u043a\u043e\u0434 \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0432 \u0432\u0438\u0434\u0435 .ipynb \u043d\u043e\u0443\u0442\u0431\u0443\u043a\u0430 ",(0,s.jsx)(n.a,{href:"https://github.com/compressa-ai/langchain_compressa/blob/main/docs/Basic_Semantic_Search.ipynb",children:"\u0437\u0434\u0435\u0441\u044c"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"# \u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 Compressa \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f embeddings, Umap \u2013 \u0434\u043b\u044f \u0443\u043c\u0435\u043d\u044c\u0448\u0435\u043d\u0438\u044f \u0438\u0445 \u0440\u0430\u0437\u043c\u0435\u0440\u043d\u043e\u0441\u0442\u0438 \u0434\u043e 2 \u0438\u0437\u043c\u0435\u0440\u0435\u043d\u0438\u0439;\n# Altair \u2013 \u0434\u043b\u044f \u0432\u0438\u0437\u0443\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438, Annoy \u2013 \u0434\u043b\u044f \u043f\u0440\u0438\u0431\u043b\u0438\u0437\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0433\u043e \u043f\u043e\u0438\u0441\u043a\u0430 \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0438\u0445 \u0441\u043e\u0441\u0435\u0434\u0435\u0439; \n\n!pip install langchain-compressa\n!pip install umap-learn\n!pip install altair\n!pip install annoy\n\n# \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e, \u0443 \u0432\u0430\u0441 \u0442\u0430\u043a\u0436\u0435 \u043d\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u044b \u043a\u0430\u043a\u0438\u0435-\u0442\u043e \u0438\u0437 \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0445 \u043f\u0430\u043a\u0435\u0442\u043e\u0432\n\n!pip install pandas\n!pip install numpy\n!pip install tqdm\n!pip install scikit-learn\n!pip install gdown\n"})}),"\n",(0,s.jsx)(n.h2,{id:"1-\u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u043c-\u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u0435",children:"1. \u041d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u043c \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u0435"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"# \u0418\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0435\u043c \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438\n\nfrom langchain_compressa import CompressaEmbeddings\nimport os\nimport gdown\nimport numpy as np\nimport re\nimport pandas as pd\nfrom tqdm import tqdm\nimport altair as alt\nfrom sklearn.metrics.pairwise import cosine_similarity\nfrom annoy import AnnoyIndex\nimport umap.umap_ as umap\nimport warnings\nwarnings.filterwarnings('ignore')\npd.set_option('display.max_colwidth', None)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u0414\u043b\u044f \u044f\u0447\u0435\u0439\u043a\u0438 \u043d\u0438\u0436\u0435 \u0432\u0430\u043c \u043f\u043e\u043d\u0430\u0434\u043e\u0431\u0438\u0442\u0441\u044f API \u043a\u043b\u044e\u0447 Compressa. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0435\u0433\u043e \u043f\u043e\u0441\u043b\u0435 ",(0,s.jsx)(n.a,{href:"https://compressa.ai/form",children:"\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'os.environ["COMPRESSA_API_KEY"] = "\u0432\u0430\u0448_\u043a\u043b\u044e\u0447"\n'})}),"\n",(0,s.jsx)(n.h2,{id:"2-\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435-\u0434\u0430\u0442\u0430\u0441\u0435\u0442-\u0441-\u0432\u043e\u043f\u0440\u043e\u0441\u0430\u043c\u0438",children:"2. \u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0434\u0430\u0442\u0430\u0441\u0435\u0442 \u0441 \u0432\u043e\u043f\u0440\u043e\u0441\u0430\u043c\u0438"}),"\n",(0,s.jsx)(n.p,{children:"\u041c\u044b \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u043e \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u0438\u043b\u0438 1000 \u0432\u043e\u043f\u0440\u043e\u0441\u043e\u0432 \u043d\u0430 \u0440\u0443\u0441\u0441\u043a\u043e\u043c \u044f\u0437\u044b\u043a\u0435 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u043d\u0438\u043c\u0438 \u0432 \u0440\u0430\u043c\u043a\u0430\u0445 \u044d\u0442\u043e\u0433\u043e \u0433\u0430\u0439\u0434\u0430."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"#\u0421\u043a\u0430\u0447\u0438\u0432\u0430\u0435\u043c \u0434\u0430\u0442\u0430\u0441\u0435\u0442 c google \u0434\u0438\u0441\u043a\u0430 \u0421ompressa\nfile_id = '1wRC8bKBY5W8lrXU9cTKCgAdoL0g72ANI'\nurl = f'https://drive.google.com/uc?id={file_id}'\ngdown.download(url, '1000_ru_questions.csv', quiet=False)\n\n# \u0418\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0435\u043c \u0432 pandas dataframe\ndf = pd.read_csv(file_path)\n\n# \u041f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u043c, \u0447\u0442\u043e \u0432\u0441\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u043b\u043e\u0441\u044c \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\ndf.head(10)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"2-\u043f\u0440\u0435\u0432\u0440\u0430\u0449\u0430\u0435\u043c-\u0434\u0430\u0442\u0430\u0441\u0435\u0442-\u0432\u043e\u043f\u0440\u043e\u0441\u043e\u0432-\u0432-embeddings",children:"2. \u041f\u0440\u0435\u0432\u0440\u0430\u0449\u0430\u0435\u043c \u0434\u0430\u0442\u0430\u0441\u0435\u0442 \u0432\u043e\u043f\u0440\u043e\u0441\u043e\u0432 \u0432 embeddings"}),"\n",(0,s.jsx)(n.p,{children:"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0448\u0430\u0433 - \u043f\u0440\u0435\u0432\u0440\u0430\u0442\u0438\u0442\u044c \u043d\u0430\u0448\u0438 \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u044b\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b \u0432 \u0447\u0438\u0441\u043b\u043e\u0432\u044b\u0435 embeddings."}),"\n",(0,s.jsx)(n.p,{children:"\u0421\u0445\u0435\u043c\u0430\u0442\u0438\u0447\u043d\u043e \u044d\u0442\u043e \u0432\u044b\u0433\u043b\u044f\u0434\u0438\u0442 \u0442\u0430\u043a:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://raw.githubusercontent.com/walyoung1/pictures/main/guides_semantic_pic2.jpg",alt:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430 2"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"# \u041f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u043d\u0430\u0448\u0438 embeddings\nembeddings = CompressaEmbeddings()\ntexts = list(df['question'])\nembeds = embeddings.embed_documents(texts)\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"# \u041f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u043c \u0440\u0430\u0437\u043c\u0435\u0440\u043d\u043e\u0441\u0442\u044c \u043d\u0430\u0448\u0438\u0445 embeddings (\u043d\u0430\u043f\u043e\u043c\u043d\u0438\u043c, \u0447\u0442\u043e \u0443 \u043d\u0430\u0441 1000 \u0432\u043e\u043f\u0440\u043e\u0441\u043e\u0432)\nembeds = np.array(embeds)\nprint(embeds.shape) \n"})}),"\n",(0,s.jsx)(n.h2,{id:"3-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c-\u043f\u043e\u0438\u0441\u043a-\u043f\u043e-\u0438\u043d\u0434\u0435\u043a\u0441\u0443-\u0438-\u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0435\u043c\u0443-\u0441\u043e\u0441\u0435\u0434\u0443",children:"3. \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c \u043f\u043e\u0438\u0441\u043a \u043f\u043e \u0438\u043d\u0434\u0435\u043a\u0441\u0443 \u0438 \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0435\u043c\u0443 \u0441\u043e\u0441\u0435\u0434\u0443"}),"\n",(0,s.jsx)(n.p,{children:"\u0415\u0449\u0435 \u043e\u0434\u043d\u0430 \u0441\u0445\u0435\u043c\u0430 \u0434\u043b\u044f \u043d\u0430\u0433\u043b\u044f\u0434\u043d\u043e\u0441\u0442\u0438 :)"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{src:"https://raw.githubusercontent.com/walyoung1/pictures/main/guides_semantic_pic3.jpg",alt:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430 3"}),"\n\u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u0442\u0435\u043f\u0435\u0440\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c ",(0,s.jsx)(n.a,{href:"https://github.com/spotify/annoy",children:"Annoy"})," \u0434\u043b\u044f \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u044f \u0438\u043d\u0434\u0435\u043a\u0441\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0445\u0440\u0430\u043d\u0438\u0442 embeddings \u0432 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u043c \u0432\u0438\u0434\u0435, \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u043c \u0434\u043b\u044f \u0431\u044b\u0441\u0442\u0440\u043e\u0433\u043e \u043f\u043e\u0438\u0441\u043a\u0430. \u042d\u0442\u043e\u0442 \u043f\u043e\u0434\u0445\u043e\u0434 \u0445\u043e\u0440\u043e\u0448\u043e \u043c\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u043d\u0430 \u0431\u043e\u043b\u044c\u0448\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0442\u0435\u043a\u0441\u0442\u043e\u0432. \u0415\u0441\u0442\u044c \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0440\u0435\u0448\u0435\u043d\u0438\u044f - ",(0,s.jsx)(n.a,{href:"https://github.com/facebookresearch/faiss",children:"Faiss"}),", ",(0,s.jsx)(n.a,{href:"https://github.com/google-research/google-research/tree/master/scann",children:"ScaNN"}),", ",(0,s.jsx)(n.a,{href:"https://github.com/lmcinnes/pynndescent",children:"PyNNDescent"}),")."]}),"\n",(0,s.jsx)(n.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0438\u043d\u0434\u0435\u043a\u0441\u0430, \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0435\u0433\u043e \u0434\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0438\u0445 \u0441\u043e\u0441\u0435\u0434\u0435\u0439 \u0434\u043b\u044f \u043a\u0430\u043a\u043e\u0433\u043e-\u0442\u043e \u0438\u0437 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0445 \u0432\u043e\u043f\u0440\u043e\u0441\u043e\u0432."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"# \u0421\u043e\u0437\u0434\u0430\u0435\u043c \u043f\u043e\u0438\u0441\u043a\u043e\u0432\u044b\u0439 \u0438\u043d\u0434\u0435\u043a\u0441, \u043f\u0435\u0440\u0435\u0434\u0430\u0435\u043c \u0440\u0430\u0437\u043c\u0435\u0440 \u043d\u0430\u0448\u0438\u0445 embeddings\nsearch_index = AnnoyIndex(embeds.shape[1], 'angular')\n\n# \u0414\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c \u0432\u0441\u0435 \u0432\u0435\u043a\u0442\u043e\u0440\u0430 \u0432 \u043f\u043e\u0438\u0441\u043a\u043e\u0432\u044b\u0439 \u0438\u043d\u0434\u0435\u043a\u0441 \u0438 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c\u043d\u043e \u0442\u0435\u0441\u0442\u0438\u0440\u0443\u0435\u043c\nfor i in range(len(embeds)):\n    search_index.add_item(i, embeds[i])\n\nsearch_index.build(10) # 10 trees\nsearch_index.save('test.ann')\n"})}),"\n",(0,s.jsx)(n.h3,{id:"31-\u0438\u0449\u0435\u043c-\u043f\u043e\u0445\u043e\u0436\u0438\u0435-\u043f\u043e-\u0441\u043c\u044b\u0441\u043b\u0443-\u0432\u043e\u043f\u0440\u043e\u0441\u044b-\u0434\u043b\u044f-\u043e\u0434\u043d\u043e\u0433\u043e-\u043f\u0440\u0438\u043c\u0435\u0440\u0430-\u0438\u0437-\u0434\u0430\u0442\u0430\u0441\u0435\u0442\u0430",children:"3.1. \u0418\u0449\u0435\u043c \u043f\u043e\u0445\u043e\u0436\u0438\u0435 \u043f\u043e \u0441\u043c\u044b\u0441\u043b\u0443 \u0432\u043e\u043f\u0440\u043e\u0441\u044b \u0434\u043b\u044f \u043e\u0434\u043d\u043e\u0433\u043e \u043f\u0440\u0438\u043c\u0435\u0440\u0430 \u0438\u0437 \u0434\u0430\u0442\u0430\u0441\u0435\u0442\u0430"}),"\n",(0,s.jsx)(n.p,{children:"\u0415\u0441\u043b\u0438 \u043d\u0430\u0441 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u0443\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u0431\u043b\u0438\u0437\u043e\u0441\u0442\u044c \u0432\u043e\u043f\u0440\u043e\u0441\u043e\u0432 \u0432 \u0434\u0430\u0442\u0430\u0441\u0435\u0442\u0435 (\u0431\u0435\u0437 \u0432\u043d\u0435\u0448\u043d\u0438\u0445 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432), \u0442\u043e\u0433\u0434\u0430 \u043f\u0440\u043e\u0449\u0435 \u0432\u0441\u0435\u0433\u043e \u043f\u043e\u0441\u0447\u0438\u0442\u0430\u0442\u044c \u0440\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u043c\u0435\u0436\u0434\u0443 \u0432\u0441\u0435\u043c\u0438 \u043f\u0430\u0440\u0430\u043c\u0438 embeddings, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u043b\u0438 \u0440\u0430\u043d\u0435\u0435."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"# \u0412\u044b\u0431\u0438\u0440\u0430\u0435\u043c \u043e\u0434\u0438\u043d \u0438\u0437 \u0432\u043e\u043f\u0440\u043e\u0441\u043e\u0432, \u0447\u0442\u043e\u0431\u044b \u043d\u0430\u0439\u0442\u0438 \u0434\u0440\u0443\u0433\u0438\u0435, \u043f\u043e\u0445\u043e\u0436\u0438\u0435 \u043d\u0430 \u043d\u0435\u0433\u043e\nexample_id = 109\n\n# \u0414\u043e\u0441\u0442\u0430\u0435\u043c \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0438\u0445 \u0441\u043e\u0441\u0435\u0434\u0435\u0439\nsimilar_item_ids = search_index.get_nns_by_item(example_id,10,\n                                                include_distances=True)\n# \u0424\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u0443\u0435\u043c \u0438 \u0432\u044b\u0432\u043e\u0434\u0438\u043c \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0438\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b \u0438 \u0440\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u0434\u043e \u043d\u0438\u0445\nresults = pd.DataFrame(data={'\u0432\u043e\u043f\u0440\u043e\u0441\u044b': df.iloc[similar_item_ids[0]]['question'], \n                             '\u0440\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u0435': similar_item_ids[1]}).drop(example_id)\n\nprint(f\"\u0412\u043e\u043f\u0440\u043e\u0441:'{df.iloc[example_id]['question']}'\\n\u041f\u043e\u0445\u043e\u0436\u0438\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b:\")\nresults\n"})}),"\n",(0,s.jsx)(n.h3,{id:"32-\u0438\u0449\u0435\u043c-\u0432\u043e\u043f\u0440\u043e\u0441\u044b-\u043f\u043e\u0445\u043e\u0436\u0438\u0435-\u043d\u0430-\u0437\u0430\u043f\u0440\u043e\u0441-\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",children:"3.2. \u0418\u0449\u0435\u043c \u0432\u043e\u043f\u0440\u043e\u0441\u044b, \u043f\u043e\u0445\u043e\u0436\u0438\u0435 \u043d\u0430 \u0437\u0430\u043f\u0440\u043e\u0441 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"}),"\n",(0,s.jsx)(n.p,{children:"\u041c\u044b \u043d\u0435 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u044b \u043f\u043e\u0438\u0441\u043a\u043e\u043c \u0441\u043e\u0441\u0435\u0434\u0435\u0439 \u0434\u043b\u044f \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0445 \u0432\u043e\u043f\u0440\u043e\u0441\u043e\u0432. \u0415\u0441\u043b\u0438 \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u043d\u043e\u0432\u044b\u0439 \u0437\u0430\u043f\u0440\u043e\u0441 \u043e\u0442 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f, \u043c\u044b \u043c\u043e\u0436\u0435\u043c \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u0442\u044c \u0435\u0433\u043e \u0432 embedding \u0438 \u043d\u0430\u0439\u0442\u0438 \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0438\u0445 \u0441\u043e\u0441\u0435\u0434\u0435\u0439 \u0432 \u043d\u0430\u0448\u0435\u043c \u043d\u0430\u0431\u043e\u0440\u0435 \u0434\u0430\u043d\u043d\u044b\u0445."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"query = \"\u041a\u0430\u043a\u0430\u044f \u0441\u0430\u043c\u0430\u044f \u0432\u044b\u0441\u043e\u043a\u0430\u044f \u0433\u043e\u0440\u0430 \u0432 \u043c\u0438\u0440\u0435?\"\n\n# \u041f\u0440\u0435\u0432\u0440\u0430\u0449\u0430\u0435\u043c \u0437\u0430\u043f\u0440\u043e\u0441 \u0432 embedding\nquery_embed = embeddings.embed_query(query)\n\n# \u0414\u043e\u0441\u0442\u0430\u0435\u043c \u0431\u043b\u0438\u0437\u043a\u0438\u0435 \u043f\u043e \u0441\u043c\u044b\u0441\u043b\u0443 \u0432\u043e\u043f\u0440\u043e\u0441\u044b \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0438\u043d\u0434\u0435\u043a\u0441\u0430 Annoy\nsimilar_item_ids, distances = search_index.get_nns_by_vector(query_embed, 10, include_distances=True)\n\n# \u0424\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u0443\u0435\u043c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b\nquery_results = pd.DataFrame(data={'questions': df.iloc[similar_item_ids]['question'], \n                                   'distance': distances})\n\nprint(f\"\u0417\u0430\u043f\u0440\u043e\u0441 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f: '{query}'\\n\u041f\u043e\u0445\u043e\u0436\u0438\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b:\")\nprint(query_results)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"4-\u0432\u0438\u0437\u0443\u0430\u043b\u0438\u0437\u0438\u0440\u0443\u0435\u043c-\u0444\u0430\u0439\u043b-\u0432\u043e\u043f\u0440\u043e\u0441\u043e\u0432",children:"4. \u0412\u0438\u0437\u0443\u0430\u043b\u0438\u0437\u0438\u0440\u0443\u0435\u043c \u0444\u0430\u0439\u043b \u0432\u043e\u043f\u0440\u043e\u0441\u043e\u0432"}),"\n",(0,s.jsx)(n.p,{children:"\u0412 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0433\u043e \u0443\u043f\u0440\u0430\u0436\u043d\u0435\u043d\u0438\u044f \u0434\u0430\u0432\u0430\u0439\u0442\u0435 \u043e\u0442\u043e\u0431\u0440\u0430\u0437\u0438\u043c \u0432\u043e\u043f\u0440\u043e\u0441\u044b \u0438\u0437 \u0434\u0430\u0442\u0430\u0441\u0435\u0442\u0430 \u043d\u0430 2D \u0433\u0440\u0430\u0444\u0438\u043a\u0435 \u0438 \u043d\u0430\u0433\u043b\u044f\u0434\u043d\u043e \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u043d\u0430 \u0441\u0435\u043c\u0430\u043d\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0441\u0432\u044f\u0437\u0438."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"# UMAP \u0443\u043c\u0435\u043d\u044c\u0448\u0430\u0435\u0442 \u0440\u0430\u0437\u043c\u0435\u0440\u043d\u043e\u0441\u0442\u044c embeddings \u0441 4096 \u0434\u043e 2, \u0447\u0442\u043e\u0431\u044b \u043c\u044b \u043c\u043e\u0433\u043b\u0438 \u043e\u0442\u043e\u0431\u0440\u0430\u0437\u0438\u0442\u044c \u0438\u0445 \u043d\u0430 \u0433\u0440\u0430\u0444\u0438\u043a\u0435\nreducer = umap.UMAP(n_neighbors=20) \numap_embeds = reducer.fit_transform(embeds)\n\n# \u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u0438\u043c \u0434\u0430\u043d\u043d\u044b\u0435 \u0434\u043b\u044f \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u044f \u0438\u043d\u0442\u0435\u0440\u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0433\u0440\u0430\u0444\u0438\u043a\u0430 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e Altair\ndf_explore = pd.DataFrame(data={'questions': df['question']})\ndf_explore['x'] = umap_embeds[:,0]\ndf_explore['y'] = umap_embeds[:,1]\n\n# \u0421\u0442\u0440\u043e\u0438\u043c \u0433\u0440\u0430\u0444\u0438\u043a\nchart = alt.Chart(df_explore).mark_circle(size=60).encode(\n    x=#'x',\n    alt.X('x',\n        scale=alt.Scale(zero=False)\n    ),\n    y=\n    alt.Y('y',\n        scale=alt.Scale(zero=False)\n    ),\n    tooltip=['questions']\n).properties(\n    width=700,\n    height=400\n)\nchart.interactive()\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u041f\u043e\u0432\u043e\u0434\u0438\u0442\u0435 \u043a\u0443\u0440\u0441\u043e\u0440\u043e\u043c \u043f\u043e \u0442\u043e\u0447\u043a\u0430\u043c, \u0447\u0442\u043e\u0431\u044b \u0443\u0432\u0438\u0434\u0435\u0442\u044c \u0442\u0435\u043a\u0441\u0442. \u0412\u0438\u0434\u0438\u0442\u0435 \u043b\u0438 \u0432\u044b \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0437\u0430\u043a\u043e\u043d\u043e\u043c\u0435\u0440\u043d\u043e\u0441\u0442\u0438 \u0432 \u0441\u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u0442\u043e\u0447\u043a\u0430\u0445? \u041f\u043e\u0445\u043e\u0436\u0438\u0435 \u043f\u043e \u0441\u043c\u044b\u0441\u043b\u0443 \u0432\u043e\u043f\u0440\u043e\u0441\u044b \u0438\u043b\u0438 \u0432\u043e\u043f\u0440\u043e\u0441\u044b \u043d\u0430 \u0441\u0445\u043e\u0436\u0438\u0435 \u0442\u0435\u043c\u044b?"}),"\n",(0,s.jsx)(n.p,{children:"\u041f\u043e\u0437\u0434\u0440\u0430\u0432\u043b\u044f\u0435\u043c! \u041d\u0430 \u044d\u0442\u043e\u043c \u0437\u0430\u0432\u0435\u0440\u0448\u0430\u0435\u0442\u0441\u044f \u043d\u0430\u0448\u0435 \u0432\u0432\u043e\u0434\u043d\u043e\u0435 \u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u043e \u043f\u043e \u0441\u0435\u043c\u0430\u043d\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u043c\u0443 \u043f\u043e\u0438\u0441\u043a\u0443 \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c embeddings. \u041f\u043e \u043c\u0435\u0440\u0435 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043f\u043e\u0438\u0441\u043a\u043e\u0432\u044b\u0445 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u0432, \u0431\u0435\u0437\u0443\u0441\u043b\u043e\u0432\u043d\u043e, \u0432\u043e\u0437\u043d\u0438\u043a\u043d\u0443\u0442 \u0438 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0434\u043b\u0438\u043d\u043d\u044b\u0445 \u0442\u0435\u043a\u0441\u0442\u043e\u0432 \u0438\u043b\u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0434\u043b\u044f \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u0438\u044f embeddings \u043f\u043e\u0434 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u0443\u044e \u0437\u0430\u0434\u0430\u0447\u0443)."}),"\n",(0,s.jsxs)(n.p,{children:["\u041d\u0430\u0447\u043d\u0438\u0442\u0435 \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u0441\u0432\u043e\u0438 \u043f\u0440\u043e\u0435\u043a\u0442\u044b \u0441 \u043d\u0430\u0448\u0438\u043c\u0438 API! \u0415\u0441\u043b\u0438 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u043f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430\u043c\u0438 \u0438\u043b\u0438 \u0437\u0430\u0434\u0430\u0442\u044c \u0432\u043e\u043f\u0440\u043e\u0441 \u043a\u043e\u043c\u0430\u043d\u0434\u0435 - \u0432\u0441\u0442\u0443\u043f\u0430\u0439\u0442\u0435 \u0432 \u043d\u0430\u0448 ",(0,s.jsx)(n.a,{href:"https://t.me/+-0smoj_KpEw3MGQy",children:"\u0422\u0435\u043b\u0435\u0433\u0440\u0430\u043c \u0447\u0430\u0442"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>t});var s=i(6540);const a={},d=s.createContext(a);function r(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);