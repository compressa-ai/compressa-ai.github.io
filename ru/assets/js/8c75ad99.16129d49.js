"use strict";(self.webpackChunkcompressa_docs=self.webpackChunkcompressa_docs||[]).push([[185],{8251:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var r=s(4848),a=s(8453);const t={sidebar_position:1},i="\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0432 Rerank \u0441 Compressa",o={id:"guides/langchain_basic_rerank/index",title:"\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0432 Rerank \u0441 Compressa",description:"\u0421\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0433\u043e \u043f\u043e\u0438\u0441\u043a\u0430 \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e \u0441\u043e\u0432\u0435\u0440\u0448\u0435\u043d\u0441\u0442\u0432\u0443\u044e\u0442\u0441\u044f, \u0441\u0442\u0440\u0435\u043c\u044f\u0441\u044c \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f\u043c \u043d\u0430\u0438\u0431\u043e\u043b\u0435\u0435 \u0440\u0435\u043b\u0435\u0432\u0430\u043d\u0442\u043d\u044b\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b. \u041e\u0434\u043d\u0438\u043c \u0438\u0437 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u044b\u0445 \u043c\u0435\u0442\u043e\u0434\u043e\u0432 \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u0438\u044f \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0430 \u043f\u043e\u0438\u0441\u043a\u0430 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u0432\u0443\u0445\u044d\u0442\u0430\u043f\u043d\u043e\u0433\u043e \u043f\u043e\u0434\u0445\u043e\u0434\u0430 \u0441 \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435\u043c \u043f\u0435\u0440\u0435\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/guides/langchain_basic_rerank/index.md",sourceDirName:"guides/langchain_basic_rerank",slug:"/guides/langchain_basic_rerank/",permalink:"/ru/guides/langchain_basic_rerank/",draft:!1,unlisted:!1,editUrl:"https://github.com/compressa-ai/compressa-ai.github.io/edit/main/docs/guides/langchain_basic_rerank/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"guidesSidebar",next:{title:"\u0411\u0430\u0437\u043e\u0432\u043e\u0435 \u0438\u043d\u0442\u0440\u043e \u0432 \u0441\u0435\u043c\u0430\u043d\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u043f\u043e\u0438\u0441\u043a",permalink:"/ru/guides/langchain_basic_semantic_search/"}},c={},d=[{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c Compressa Rerank",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c-compressa-rerank",level:2},{value:"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0412\u0438\u043a\u0438\u043f\u0435\u0434\u0438\u0438 - End2end \u0434\u0435\u043c\u043e",id:"\u043f\u043e\u0438\u0441\u043a-\u043f\u043e-\u0432\u0438\u043a\u0438\u043f\u0435\u0434\u0438\u0438---end2end-\u0434\u0435\u043c\u043e",level:2}];function p(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u0435-\u0432-rerank-\u0441-compressa",children:"\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0432 Rerank \u0441 Compressa"}),"\n",(0,r.jsx)(e.p,{children:"\u0421\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0433\u043e \u043f\u043e\u0438\u0441\u043a\u0430 \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e \u0441\u043e\u0432\u0435\u0440\u0448\u0435\u043d\u0441\u0442\u0432\u0443\u044e\u0442\u0441\u044f, \u0441\u0442\u0440\u0435\u043c\u044f\u0441\u044c \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f\u043c \u043d\u0430\u0438\u0431\u043e\u043b\u0435\u0435 \u0440\u0435\u043b\u0435\u0432\u0430\u043d\u0442\u043d\u044b\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b. \u041e\u0434\u043d\u0438\u043c \u0438\u0437 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u044b\u0445 \u043c\u0435\u0442\u043e\u0434\u043e\u0432 \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u0438\u044f \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0430 \u043f\u043e\u0438\u0441\u043a\u0430 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u0432\u0443\u0445\u044d\u0442\u0430\u043f\u043d\u043e\u0433\u043e \u043f\u043e\u0434\u0445\u043e\u0434\u0430 \u0441 \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435\u043c \u043f\u0435\u0440\u0435\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f."}),"\n",(0,r.jsx)(e.p,{children:"\u041f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430 Compressa \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 Rerank \u043c\u043e\u0434\u0435\u043b\u044c \u0434\u043b\u044f \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0442\u0430\u043a\u043e\u0433\u043e \u043f\u043e\u0434\u0445\u043e\u0434\u0430."}),"\n",(0,r.jsx)(e.p,{children:"\u041f\u0440\u043e\u0446\u0435\u0441\u0441 \u0440\u0430\u0431\u043e\u0442\u044b \u043c\u043e\u0436\u0435\u0442 \u0432\u044b\u0433\u043b\u044f\u0434\u0435\u0442\u044c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c:"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u0431\u0435\u0440\u0435\u0442 \u0432\u043e\u043f\u0440\u043e\u0441 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0438 \u0438\u0437\u0432\u043b\u0435\u043a\u0430\u0435\u0442 \u0442\u043e\u043f-100 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0438\u0437 \u0434\u0430\u0442\u0430\u0441\u0435\u0442\u0430, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u043b\u0438\u0431\u043e \u043b\u0435\u043a\u0441\u0438\u0447\u0435\u0441\u043a\u0438\u0439, \u043b\u0438\u0431\u043e \u0441\u0435\u043c\u0430\u043d\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u043f\u043e\u0438\u0441\u043a."}),"\n",(0,r.jsx)(e.li,{children:"\u0417\u0430\u0442\u0435\u043c \u044d\u0442\u0438 100 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0432\u043c\u0435\u0441\u0442\u0435 \u0441 \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u043c \u0432\u043e\u043f\u0440\u043e\u0441\u043e\u043c \u043f\u0435\u0440\u0435\u0434\u0430\u044e\u0442\u0441\u044f \u0432 Compressa Rerank."}),"\n",(0,r.jsx)(e.li,{children:"\u0414\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430 \u0432\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u0446\u0435\u043d\u043a\u0430 \u0440\u0435\u043b\u0435\u0432\u0430\u043d\u0442\u043d\u043e\u0441\u0442\u0438."}),"\n",(0,r.jsx)(e.li,{children:"\u041d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u0445 \u043e\u0446\u0435\u043d\u043e\u043a \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u044b \u043f\u0435\u0440\u0435\u0440\u0430\u043d\u0436\u0438\u0440\u0443\u044e\u0442\u0441\u044f, \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044e \u043d\u0430\u0438\u0431\u043e\u043b\u0435\u0435 \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0438\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b."}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u044b\u043c \u044d\u0442\u043e\u0442 \u043c\u0435\u0442\u043e\u0434 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0432 \u0441\u043b\u0443\u0447\u0430\u044f\u0445, \u043a\u043e\u0433\u0434\u0430 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044e\u0442 \u043e\u0431\u0443\u0447\u0430\u044e\u0449\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0434\u043b\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043f\u043e\u0438\u0441\u043a\u043e\u0432\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u044b."}),"\n",(0,r.jsx)(e.p,{children:"\u0412 \u044d\u0442\u043e\u043c \u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u0435 \u043c\u044b \u0440\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c, \u043a\u0430\u043a \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c Compressa Rerank \u0434\u043b\u044f \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u0438\u044f \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432 \u043f\u043e\u0438\u0441\u043a\u0430, \u0438 \u043f\u0440\u043e\u0434\u0435\u043c\u043e\u043d\u0441\u0442\u0440\u0438\u0440\u0443\u0435\u043c \u0435\u0451 \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043d\u0430 \u043f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u043f\u0440\u0438\u043c\u0435\u0440\u0430\u0445."}),"\n",(0,r.jsxs)(e.p,{children:["\u0412\u0435\u0441\u044c \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0439 \u043d\u0438\u0436\u0435 \u043a\u043e\u0434 \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0432 \u0432\u0438\u0434\u0435 .ipynb \u043d\u043e\u0443\u0442\u0431\u0443\u043a\u0430 ",(0,r.jsx)(e.a,{href:"https://github.com/insight-stream/langchain_compressa/blob/main/docs/Basic_Rerank.ipynb",children:"\u0437\u0434\u0435\u0441\u044c"}),"."]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"# \u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0445 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\n!pip install langchain-compressa\n!pip install langchain\n\n\n# \u0418\u043c\u043f\u043e\u0440\u0442 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0445 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\nimport os\nimport requests\nimport numpy as np\nfrom time import time\nfrom typing import List\nfrom pprint import pprint\nfrom langchain_compressa import CompressaRerank\nfrom langchain.schema import Document\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u0414\u043b\u044f \u044f\u0447\u0435\u0439\u043a\u0438 \u043d\u0438\u0436\u0435 \u0432\u0430\u043c \u043f\u043e\u043d\u0430\u0434\u043e\u0431\u0438\u0442\u0441\u044f API \u043a\u043b\u044e\u0447 Compressa. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0435\u0433\u043e \u043f\u043e\u0441\u043b\u0435 ",(0,r.jsx)(e.a,{href:"https://compressa.ai/form",children:"\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438"}),"."]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:'os.environ["COMPRESSA_API_KEY"] = "\u0432\u0430\u0448_\u043a\u043b\u044e\u0447"\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:'# \u0418\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f Compressa Rerank\nreranker = CompressaRerank()\n\n# \u041f\u0440\u0438\u043c\u0435\u0440 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0438 "\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432"\nquery = "\u041a\u0442\u043e \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0430\u0432\u0442\u043e\u0440\u043e\u043c \u043a\u0430\u0440\u0442\u0438\u043d\u044b \'\u0427\u0435\u0440\u043d\u044b\u0439 \u043a\u0432\u0430\u0434\u0440\u0430\u0442\'?"\ndocs = [\n    "\u041a\u0430\u0437\u0438\u043c\u0438\u0440 \u041c\u0430\u043b\u0435\u0432\u0438\u0447 \u0441\u043e\u0437\u0434\u0430\u043b \'\u0427\u0435\u0440\u043d\u044b\u0439 \u043a\u0432\u0430\u0434\u0440\u0430\u0442\' \u0432 1915 \u0433\u043e\u0434\u0443, \u0447\u0442\u043e \u0441\u0442\u0430\u043b\u043e \u0440\u0435\u0432\u043e\u043b\u044e\u0446\u0438\u043e\u043d\u043d\u044b\u043c \u0441\u043e\u0431\u044b\u0442\u0438\u0435\u043c \u0432 \u043c\u0438\u0440\u0435 \u0438\u0441\u043a\u0443\u0441\u0441\u0442\u0432\u0430.",\n    "\u0418\u043b\u044c\u044f \u0420\u0435\u043f\u0438\u043d \u0438\u0437\u0432\u0435\u0441\u0442\u0435\u043d \u0441\u0432\u043e\u0438\u043c\u0438 \u0440\u0435\u0430\u043b\u0438\u0441\u0442\u0438\u0447\u043d\u044b\u043c\u0438 \u043a\u0430\u0440\u0442\u0438\u043d\u0430\u043c\u0438, \u0442\u0430\u043a\u0438\u043c\u0438 \u043a\u0430\u043a \'\u0411\u0443\u0440\u043b\u0430\u043a\u0438 \u043d\u0430 \u0412\u043e\u043b\u0433\u0435\' \u0438 \'\u0418\u0432\u0430\u043d \u0413\u0440\u043e\u0437\u043d\u044b\u0439 \u0438 \u0441\u044b\u043d \u0435\u0433\u043e \u0418\u0432\u0430\u043d\'.",\n    "\'\u0427\u0435\u0440\u043d\u044b\u0439 \u043a\u0432\u0430\u0434\u0440\u0430\u0442\' \u041c\u0430\u043b\u0435\u0432\u0438\u0447\u0430 \u0441\u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044f \u043e\u0434\u043d\u0438\u043c \u0438\u0437 \u0441\u0430\u043c\u044b\u0445 \u0432\u043b\u0438\u044f\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u0439 \u0430\u0431\u0441\u0442\u0440\u0430\u043a\u0442\u043d\u043e\u0433\u043e \u0438\u0441\u043a\u0443\u0441\u0441\u0442\u0432\u0430 XX \u0432\u0435\u043a\u0430.",\n    "\u0412\u0430\u0441\u0438\u043b\u0438\u0439 \u041a\u0430\u043d\u0434\u0438\u043d\u0441\u043a\u0438\u0439, \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u0438\u043a \u041c\u0430\u043b\u0435\u0432\u0438\u0447\u0430, \u0442\u0430\u043a\u0436\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u043b \u0432 \u0436\u0430\u043d\u0440\u0435 \u0430\u0431\u0441\u0442\u0440\u0430\u043a\u0442\u043d\u043e\u0433\u043e \u0438\u0441\u043a\u0443\u0441\u0441\u0442\u0432\u0430.",\n    "\u041c\u0430\u043b\u0435\u0432\u0438\u0447 \u043d\u0430\u043f\u0438\u0441\u0430\u043b \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0432\u0435\u0440\u0441\u0438\u0439 \'\u0427\u0435\u0440\u043d\u043e\u0433\u043e \u043a\u0432\u0430\u0434\u0440\u0430\u0442\u0430\' \u043c\u0435\u0436\u0434\u0443 1915 \u0438 1930 \u0433\u043e\u0434\u0430\u043c\u0438.",\n    "\u041a\u0430\u0440\u0442\u0438\u043d\u0430 \'\u0427\u0435\u0440\u043d\u044b\u0439 \u043a\u0432\u0430\u0434\u0440\u0430\u0442\' \u0432\u043f\u0435\u0440\u0432\u044b\u0435 \u0431\u044b\u043b\u0430 \u0432\u044b\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0430 \u043d\u0430 \u0444\u0443\u0442\u0443\u0440\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u0432\u044b\u0441\u0442\u0430\u0432\u043a\u0435 \'0,10\' \u0432 \u041f\u0435\u0442\u0440\u043e\u0433\u0440\u0430\u0434\u0435.",\n    "\u041f\u043e\u043c\u0438\u043c\u043e \'\u0427\u0435\u0440\u043d\u043e\u0433\u043e \u043a\u0432\u0430\u0434\u0440\u0430\u0442\u0430\', \u041c\u0430\u043b\u0435\u0432\u0438\u0447 \u0438\u0437\u0432\u0435\u0441\u0442\u0435\u043d \u0441\u0432\u043e\u0438\u043c\u0438 \u0440\u0430\u0431\u043e\u0442\u0430\u043c\u0438 \u0432 \u0441\u0442\u0438\u043b\u0435 \u0441\u0443\u043f\u0440\u0435\u043c\u0430\u0442\u0438\u0437\u043c\u0430.",\n    "\u041c\u0430\u0440\u043a \u0428\u0430\u0433\u0430\u043b, \u0435\u0449\u0435 \u043e\u0434\u0438\u043d \u0438\u0437\u0432\u0435\u0441\u0442\u043d\u044b\u0439 \u0440\u0443\u0441\u0441\u043a\u0438\u0439 \u0445\u0443\u0434\u043e\u0436\u043d\u0438\u043a, \u0440\u0430\u0431\u043e\u0442\u0430\u043b \u0432 \u0441\u0442\u0438\u043b\u0435 \u043c\u043e\u0434\u0435\u0440\u043d\u0438\u0437\u043c\u0430 \u0438 \u0441\u044e\u0440\u0440\u0435\u0430\u043b\u0438\u0437\u043c\u0430.",\n    "\u0412 \u0422\u0440\u0435\u0442\u044c\u044f\u043a\u043e\u0432\u0441\u043a\u043e\u0439 \u0433\u0430\u043b\u0435\u0440\u0435\u0435 \u0432 \u041c\u043e\u0441\u043a\u0432\u0435 \u0445\u0440\u0430\u043d\u0438\u0442\u0441\u044f \u043e\u0434\u043d\u0430 \u0438\u0437 \u0432\u0435\u0440\u0441\u0438\u0439 \'\u0427\u0435\u0440\u043d\u043e\u0433\u043e \u043a\u0432\u0430\u0434\u0440\u0430\u0442\u0430\' \u041c\u0430\u043b\u0435\u0432\u0438\u0447\u0430.",\n    "\u041a\u0430\u0440\u0442\u0438\u043d\u0430 \'\u0427\u0435\u0440\u043d\u044b\u0439 \u043a\u0432\u0430\u0434\u0440\u0430\u0442\' \u0432\u044b\u0437\u0432\u0430\u043b\u0430 \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e \u0434\u0438\u0441\u043a\u0443\u0441\u0441\u0438\u0439 \u0438 \u0438\u043d\u0442\u0435\u0440\u043f\u0440\u0435\u0442\u0430\u0446\u0438\u0439 \u0432 \u043c\u0438\u0440\u0435 \u0438\u0441\u043a\u0443\u0441\u0441\u0442\u0432\u0430."\n]\n\n# \u0421\u043e\u0437\u0434\u0430\u0435\u043c \u043e\u0431\u044a\u0435\u043a\u0442\u044b \u0442\u0438\u043f\u0430 Langchain Document \u0438\u0437 \u043d\u0430\u0448\u0438\u0445 \u0432\u043e\u043f\u0440\u043e\u0441\u043e\u0432\ndoc_objects = [\n    Document(page_content=doc, metadata={"index": idx})\n    for idx, doc in enumerate(docs)\n]\n'})}),"\n",(0,r.jsx)(e.h2,{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c-compressa-rerank",children:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c Compressa Rerank"}),"\n",(0,r.jsxs)(e.p,{children:["\u0412 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0439 \u044f\u0447\u0435\u0439\u043a\u0435 \u043c\u044b \u0432\u044b\u0437\u043e\u0432\u0435\u043c Compressa Rerank \u0434\u043b\u044f \u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f ",(0,r.jsx)(e.code,{children:"docs"})," \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0438\u0445 \u0440\u0435\u043b\u0435\u0432\u0430\u043d\u0442\u043d\u043e\u0441\u0442\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 ",(0,r.jsx)(e.code,{children:"query"})]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:'results = reranker.compress_documents(query=query, documents=doc_objects)\n\ntop_n = 3 # \u0418\u0437\u043c\u0435\u043d\u0438\u0442\u0435 top_n, \u0447\u0442\u043e\u0431\u044b \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u044b\u0445 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432.\nsorted_results = sorted(results, key=lambda x: x.metadata[\'relevance_score\'], reverse=True)\nselected_results = sorted_results[:top_n]\n\nprint(query)\n\nfor idx, r in enumerate(selected_results):\n    doc_index = r.metadata["index"]\n    doc_text = r.page_content if doc_index < len(docs) else "\u0422\u0435\u043a\u0441\u0442 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d"\n    print(f"\u0420\u0430\u043d\u0433 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430: {idx + 1}, \u0418\u043d\u0434\u0435\u043a\u0441 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430: {doc_index}")\n    print(f"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442: {doc_text}")\n    print(f"\u041e\u0446\u0435\u043d\u043a\u0430 \u0440\u0435\u043b\u0435\u0432\u0430\u043d\u0442\u043d\u043e\u0441\u0442\u0438: {r.metadata[\'relevance_score\']:.2f}")\n    print("\\n")\n'})}),"\n",(0,r.jsx)(e.h2,{id:"\u043f\u043e\u0438\u0441\u043a-\u043f\u043e-\u0432\u0438\u043a\u0438\u043f\u0435\u0434\u0438\u0438---end2end-\u0434\u0435\u043c\u043e",children:"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0412\u0438\u043a\u0438\u043f\u0435\u0434\u0438\u0438 - End2end \u0434\u0435\u043c\u043e"}),"\n",(0,r.jsx)(e.p,{children:'\u0412 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u043c \u043f\u0440\u0438\u043c\u0435\u0440\u0435 \u043c\u044b \u043f\u043e\u043a\u0430\u0436\u0435\u043c, \u043a\u0430\u043a \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c Rerank \u043c\u043e\u0434\u0435\u043b\u044c \u0434\u043b\u044f \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u0438\u044f \u043f\u043e\u0438\u0441\u043a\u0430 \u043f\u043e \u0441\u0442\u0430\u0442\u044c\u044f\u043c \u0440\u0443\u0441\u0441\u043a\u043e\u044f\u0437\u044b\u0447\u043d\u043e\u0439 Wikipedia. \u0414\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0443\u0434\u043e\u0431\u043d\u043e\u0433\u043e \u0434\u0430\u0442\u0430\u0441\u0435\u0442\u0430 \u043c\u044b \u0443\u043c\u0435\u043d\u044c\u0448\u0438\u043b\u0438 mrtydi-v1.1-russian \u0434\u043e \u043f\u043e\u0440\u044f\u0434\u043a\u0430 500\u043a \u043e\u0442\u0440\u044b\u0432\u043a\u043e\u0432 \u0438\u0437 \u0441\u0442\u0430\u0442\u0435\u0439, \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0432 "\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0435" \u043e\u0442\u0432\u0435\u0442\u044b \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u0432\u043e\u043f\u0440\u043e\u0441\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u0443\u0434\u0435\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043d\u0438\u0436\u0435, \u0438 \u0434\u043e\u0431\u0430\u0432\u0438\u043b\u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0440\u0430\u043d\u0434\u043e\u043c\u043d\u044b\u0435 \u0441\u0442\u0430\u0442\u044c\u0438.'}),"\n",(0,r.jsx)(e.p,{children:"\u041c\u044b \u0431\u0443\u0434\u0435\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043b\u0435\u043a\u0441\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u043f\u043e\u0438\u0441\u043a BM25 \u0434\u043b\u044f \u0438\u0437\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u044f \u0442\u043e\u043f-100 \u043e\u0442\u0440\u044b\u0432\u043a\u043e\u0432, \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0445 \u0437\u0430\u043f\u0440\u043e\u0441\u0443, \u0430 \u0437\u0430\u0442\u0435\u043c \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u043c \u044d\u0442\u0438 100 \u043e\u0442\u0440\u044b\u0432\u043a\u043e\u0432 \u0438 \u0437\u0430\u043f\u0440\u043e\u0441 \u0432 Compressa Rerank, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043e\u0442\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b."}),"\n",(0,r.jsx)(e.p,{children:"\u041c\u044b \u0432\u044b\u0432\u0435\u0434\u0435\u043c \u0442\u043e\u043f-3 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430 \u0441\u043e\u0433\u043b\u0430\u0441\u043d\u043e BM25 (\u043a\u0430\u043a \u044d\u0442\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0432 Elasticsearch) \u0438 \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u043d\u044b\u0439 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u043e\u0442 \u043d\u0430\u0448\u0435\u0439 \u043c\u043e\u0434\u0435\u043b\u0438 Compressa Rerank."}),"\n",(0,r.jsx)(e.p,{children:"\u0414\u043b\u044f \u043d\u0430\u0447\u0430\u043b\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u043c \u0438 \u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0435\u043c \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"!pip install -U  rank_bm25\n!pip install gdown\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"import gdown\nimport json\nimport gzip\nimport os\nfrom rank_bm25 import BM25Okapi\nfrom sklearn.feature_extraction import _stop_words\nimport string\nfrom tqdm.autonotebook import tqdm\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"#\u0421\u043a\u0430\u0447\u0438\u0432\u0430\u0435\u043c \u0434\u0430\u0442\u0430\u0441\u0435\u0442 c google \u0434\u0438\u0441\u043a\u0430 \u0421ompressa, \u043e\u043d \u0443\u0436\u0435 \u043d\u0430\u0440\u0435\u0437\u0430\u043d \u043d\u0430 \u043e\u0442\u0440\u044b\u0432\u043a\u0438\nfile_id = '1u-3EQ4yoYys1wSSK_EifIPPRyh_6oaR6'\nurl = f'https://drive.google.com/uc?id={file_id}'\ngdown.download(url, 'mrtydi-russian-subset.jsonl', quiet=False)\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"with open('mrtydi-russian-subset.jsonl', 'r', encoding='utf-8') as f:\n    passages = [json.loads(line) for line in tqdm(f)]\n\nprint(f\"\u0412\u0441\u0435\u0433\u043e \u043e\u0442\u0440\u044b\u0432\u043a\u043e\u0432 \u0432 \u043f\u043e\u0434\u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0435: {len(passages)}\")\nprint(f\"\u041f\u0440\u0438\u043c\u0435\u0440 \u043f\u0435\u0440\u0432\u043e\u0433\u043e \u043e\u0442\u0440\u044b\u0432\u043a\u0430:\")\nprint(f\"ID: {passages[0]['id']}\")\nprint(f\"\u0421\u043e\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u0435: {passages[0]['contents'][:300]}...\")  # \u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u043c \u043f\u0435\u0440\u0432\u044b\u0435 200 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u044f\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"# \u041c\u044b \u0431\u0443\u0434\u0435\u043c \u0441\u0440\u0430\u0432\u043d\u0438\u0432\u0430\u0442\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u0441 \u043e\u0431\u044b\u0447\u043d\u044b\u043c \u043b\u0435\u043a\u0441\u0438\u0447\u0435\u0441\u043a\u0438\u043c \u043f\u043e\u0438\u0441\u043a\u043e\u043c (\u043f\u043e\u0438\u0441\u043a\u043e\u043c \u043f\u043e \u043a\u043b\u044e\u0447\u0435\u0432\u044b\u043c \u0441\u043b\u043e\u0432\u0430\u043c). \n# \u0417\u0434\u0435\u0441\u044c \u043c\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c BM25, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d \u0432 \u043f\u0430\u043a\u0435\u0442\u0435 rank_bm25.\n# \u041c\u044b \u043f\u0440\u0438\u0432\u043e\u0434\u0438\u043c \u043d\u0430\u0448 \u0442\u0435\u043a\u0441\u0442 \u043a \u043d\u0438\u0436\u043d\u0435\u043c\u0443 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0443 \u0438 \u0443\u0434\u0430\u043b\u044f\u0435\u043c \u0441\u0442\u043e\u043f-\u0441\u043b\u043e\u0432\u0430 \u043f\u0440\u0438 \u0438\u043d\u0434\u0435\u043a\u0441\u0430\u0446\u0438\u0438\n\n# \u0414\u043b\u044f \u043d\u0430\u0447\u0430\u043b\u0430 \u0437\u0430\u0434\u0430\u0434\u0438\u043c \u0441\u043f\u0438\u0441\u043e\u043a \u0440\u0443\u0441\u0441\u043a\u0438\u0445 \u0441\u0442\u043e\u043f-\u0441\u043b\u043e\u0432, \u0447\u0442\u043e\u0431\u044b \u0443\u043b\u0443\u0447\u0448\u0438\u0442\u044c \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0442\u043e\u043a\u0435\u043d\u0438\u0437\u0430\u0446\u0438\u0438. \u0421\u043f\u0438\u0441\u043e\u043a \u043c\u043e\u0436\u043d\u043e \u0440\u0430\u0441\u0448\u0438\u0440\u0438\u0442\u044c \u0438\u043b\u0438 \u0432\u0437\u044f\u0442\u044c \u0433\u043e\u0442\u043e\u0432\u044b\u0439, \u043e\u043d \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d \u0434\u043b\u044f \u043f\u0440\u0438\u043c\u0435\u0440\u0430.\nRUSSIAN_STOP_WORDS = set([\n    '\u0438', '\u0432', '\u0432\u043e', '\u043d\u0435', '\u0447\u0442\u043e', '\u043e\u043d', '\u043d\u0430', '\u044f', '\u0441', '\u0441\u043e', '\u043a\u0430\u043a', '\u0430', '\u0442\u043e', '\u0432\u0441\u0435', '\u043e\u043d\u0430', '\u0442\u0430\u043a',\n    '\u0435\u0433\u043e', '\u043d\u043e', '\u0434\u0430', '\u0442\u044b', '\u043a', '\u0443', '\u0436\u0435', '\u0432\u044b', '\u0437\u0430', '\u0431\u044b', '\u043f\u043e', '\u0442\u043e\u043b\u044c\u043a\u043e', '\u0435\u0435', '\u043c\u043d\u0435', '\u0431\u044b\u043b\u043e',\n    '\u0432\u043e\u0442', '\u043e\u0442', '\u043c\u0435\u043d\u044f', '\u0435\u0449\u0435', '\u043d\u0435\u0442', '\u043e', '\u0438\u0437', '\u0435\u043c\u0443', '\u0442\u0435\u043f\u0435\u0440\u044c', '\u043a\u043e\u0433\u0434\u0430', '\u0434\u0430\u0436\u0435', '\u043d\u0443', '\u0432\u0434\u0440\u0443\u0433',\n    '\u043b\u0438', '\u0435\u0441\u043b\u0438', '\u0443\u0436\u0435', '\u0438\u043b\u0438', '\u043d\u0438', '\u0431\u044b\u0442\u044c', '\u0431\u044b\u043b', '\u043d\u0435\u0433\u043e', '\u0434\u043e', '\u0432\u0430\u0441', '\u043d\u0438\u0431\u0443\u0434\u044c', '\u043e\u043f\u044f\u0442\u044c', '\u0443\u0436',\n    '\u0432\u0430\u043c', '\u0432\u0435\u0434\u044c', '\u0442\u0430\u043c', '\u043f\u043e\u0442\u043e\u043c', '\u0441\u0435\u0431\u044f', '\u043d\u0438\u0447\u0435\u0433\u043e', '\u0435\u0439', '\u043c\u043e\u0436\u0435\u0442', '\u043e\u043d\u0438', '\u0442\u0443\u0442', '\u0433\u0434\u0435', '\u0435\u0441\u0442\u044c',\n    '\u043d\u0430\u0434\u043e', '\u043d\u0435\u0439', '\u0434\u043b\u044f', '\u043c\u044b', '\u0442\u0435\u0431\u044f', '\u0438\u0445', '\u0447\u0435\u043c', '\u0431\u044b\u043b\u0430', '\u0441\u0430\u043c', '\u0447\u0442\u043e\u0431', '\u0431\u0435\u0437', '\u0431\u0443\u0434\u0442\u043e', '\u0447\u0435\u0433\u043e',\n    '\u0440\u0430\u0437', '\u0442\u043e\u0436\u0435', '\u0441\u0435\u0431\u0435', '\u043f\u043e\u0434', '\u0431\u0443\u0434\u0435\u0442', '\u0436', '\u0442\u043e\u0433\u0434\u0430', '\u043a\u0442\u043e', '\u044d\u0442\u043e\u0442', '\u0442\u043e\u0433\u043e', '\u043f\u043e\u0442\u043e\u043c\u0443', '\u044d\u0442\u043e\u0433\u043e',\n    '\u043a\u0430\u043a\u043e\u0439', '\u0441\u043e\u0432\u0441\u0435\u043c', '\u043d\u0438\u043c', '\u0437\u0434\u0435\u0441\u044c', '\u044d\u0442\u043e\u043c', '\u043e\u0434\u0438\u043d', '\u043f\u043e\u0447\u0442\u0438', '\u043c\u043e\u0439', '\u0442\u0435\u043c', '\u0447\u0442\u043e\u0431\u044b', '\u043d\u0435\u0435', '\u0441\u0435\u0439\u0447\u0430\u0441',\n    '\u0431\u044b\u043b\u0438', '\u043a\u0443\u0434\u0430', '\u0437\u0430\u0447\u0435\u043c', '\u0432\u0441\u0435\u0445', '\u043d\u0438\u043a\u043e\u0433\u0434\u0430', '\u043c\u043e\u0436\u043d\u043e', '\u043f\u0440\u0438', '\u043d\u0430\u043a\u043e\u043d\u0435\u0446', '\u0434\u0432\u0430', '\u043e\u0431', '\u0434\u0440\u0443\u0433\u043e\u0439',\n    '\u0445\u043e\u0442\u044c', '\u043f\u043e\u0441\u043b\u0435', '\u043d\u0430\u0434', '\u0431\u043e\u043b\u044c\u0448\u0435', '\u0442\u043e\u0442', '\u0447\u0435\u0440\u0435\u0437', '\u044d\u0442\u0438', '\u043d\u0430\u0441', '\u043f\u0440\u043e', '\u0432\u0441\u0435\u0433\u043e', '\u043d\u0438\u0445', '\u043a\u0430\u043a\u0430\u044f',\n    '\u043c\u043d\u043e\u0433\u043e', '\u0440\u0430\u0437\u0432\u0435', '\u0442\u0440\u0438', '\u044d\u0442\u0443', '\u043c\u043e\u044f', '\u0432\u043f\u0440\u043e\u0447\u0435\u043c', '\u0445\u043e\u0440\u043e\u0448\u043e', '\u0441\u0432\u043e\u044e', '\u044d\u0442\u043e\u0439', '\u043f\u0435\u0440\u0435\u0434', '\u0438\u043d\u043e\u0433\u0434\u0430',\n    '\u043b\u0443\u0447\u0448\u0435', '\u0447\u0443\u0442\u044c', '\u0442\u043e\u043c', '\u043d\u0435\u043b\u044c\u0437\u044f', '\u0442\u0430\u043a\u043e\u0439', '\u0438\u043c', '\u0431\u043e\u043b\u0435\u0435', '\u0432\u0441\u0435\u0433\u0434\u0430', '\u043a\u043e\u043d\u0435\u0447\u043d\u043e', '\u0432\u0441\u044e', '\u043c\u0435\u0436\u0434\u0443'\n])\n\ndef bm25_tokenizer(text):\n    tokenized_doc = []\n    for token in text.lower().split():\n        token = token.strip(string.punctuation)\n        if len(token) > 0 and token not in RUSSIAN_STOP_WORDS:\n            tokenized_doc.append(token)\n    return tokenized_doc\n\ntokenized_corpus = []\nfor passage in tqdm(passages):\n    tokenized_corpus.append(bm25_tokenizer(passage['contents']))\n\nbm25 = BM25Okapi(tokenized_corpus)\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:'# \u042d\u0442\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0431\u0443\u0434\u0435\u0442 \u0438\u0441\u043a\u0430\u0442\u044c \u0432\u043e \u0432\u0441\u0435\u0445 \u043e\u0442\u0440\u044b\u0432\u043a\u0430\u0445 \u0438\u0437 \u0412\u0438\u043a\u0438\u043f\u0435\u0434\u0438\u0438 \u0442\u0435, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043e\u0442\u0432\u0435\u0447\u0430\u044e\u0442 \u043d\u0430 \u0437\u0430\u043f\u0440\u043e\u0441. \n# \u0417\u0430\u0442\u0435\u043c \u043c\u044b \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u043c \u043f\u0435\u0440\u0435\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f Compressa Rerank\n\ndef search(query, top_k=3, num_candidates=100):\n    print("\u041d\u0430\u0448 \u0432\u043e\u043f\u0440\u043e\u0441:", query)\n\n    # \u041f\u043e\u0438\u0441\u043a BM25, \u0442\u043e \u0435\u0441\u0442\u044c \u043f\u043e\u0438\u0441\u043a \u043f\u043e \u043a\u043b\u044e\u0447\u0435\u0432\u044b\u043c \u0441\u043b\u043e\u0432\u0430\u043c \n    bm25_scores = bm25.get_scores(bm25_tokenizer(query))\n    top_n = np.argpartition(bm25_scores, -num_candidates)[-num_candidates:]\n    bm25_hits = [{\'corpus_id\': idx, \'score\': bm25_scores[idx]} for idx in top_n]\n    bm25_hits = sorted(bm25_hits, key=lambda x: x[\'score\'], reverse=True)\n    \n    print(f"\u0422\u043e\u043f-3 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430 \u043f\u043e\u0438\u0441\u043a\u0430 BM25 \u043f\u043e \u043a\u043b\u044e\u0447\u0435\u0432\u044b\u043c \u0441\u043b\u043e\u0432\u0430\u043c")\n    for hit in bm25_hits[0:top_k]:\n        print("\\t{:.3f}\\t{}".format(hit[\'score\'], passages[hit[\'corpus_id\']][\'contents\'].replace("\\n", " ")))\n\n    # \u041f\u0440\u0435\u0432\u0440\u0430\u0442\u0438\u043c \u043e\u0442\u0440\u044b\u0432\u043a\u0438 \u0432 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u044b \u0434\u043b\u044f \u043f\u0435\u0440\u0435\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f\n    docs = [\n        Document(page_content=passages[hit[\'corpus_id\']][\'contents\'], metadata={"corpus_id": hit[\'corpus_id\']})\n        for hit in bm25_hits\n    ]\n    \n    # \u0420\u0435\u0440\u0430\u043d\u0436\u0438\u0440\u0443\u0435\u043c \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u044b\n    reranked_results = reranker.compress_documents(query=query, documents=docs)\n    sorted_results = sorted(reranked_results, key=lambda x: x.metadata["relevance_score"], reverse=True)\n\n    print(f"\\n\u0422\u043e\u043f-3 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430 \u043f\u043e\u0441\u043b\u0435 \u043f\u0435\u0440\u0435\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f ({len(bm25_hits)} \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432 BM25 \u043f\u0435\u0440\u0435\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u0430\u043d\u044b)")\n    for hit in sorted_results[:top_k]:\n        print("\\t{:.3f}\\t{}".format(hit.metadata[\'relevance_score\'], hit.page_content.replace("\\n", " ")))\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:'search(query = "\u0412 \u043a\u0430\u043a\u043e\u043c \u0433\u043e\u0434\u0443 \u0431\u044b\u043b\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0430 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u044f Apple?")\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:'search(query = "\u0413\u0434\u0435 \u0431\u044b\u043b\u0438 \u043d\u0430\u0439\u0434\u0435\u043d\u044b \u043e\u0441\u0442\u0430\u043d\u043a\u0438 \u0447\u0435\u043b\u043e\u0432\u0435\u043a\u0430 \u0444\u043b\u043e\u0440\u0435\u0441\u0441\u043a\u043e\u0433\u043e \u0432 2003 \u0433\u043e\u0434\u0443?")\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:'search(query = "\u041a\u043e\u0433\u0434\u0430 \u043d\u0430\u0447\u0430\u043b\u043e\u0441\u044c \u0412\u043e\u0437\u0440\u043e\u0436\u0434\u0435\u043d\u0438\u0435?")\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:'search(query = "\u0421\u043a\u043e\u043b\u044c\u043a\u043e \u043b\u044e\u0434\u0435\u0439 \u0436\u0438\u0432\u0435\u0442 \u0432 \u041c\u0435\u0445\u0438\u043a\u043e \u0432 2019 \u0433\u043e\u0434\u0443?")\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:'search(query="\u041a\u0430\u043a\u043e\u0439 \u044f\u0437\u044b\u043a \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0441\u0430\u043c\u044b\u043c \u0434\u0440\u0435\u0432\u043d\u0438\u043c?")\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:'search(query="\u041a\u0430\u043a\u043e\u0439 \u043a\u043b\u0438\u043c\u0430\u0442 \u0432 \u0411\u0443\u0440\u044f\u0442\u0438\u0438?")\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:'search(query="\u041d\u0430 \u043a\u0430\u043a\u043e\u0439 \u0440\u0435\u043a\u0435 \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d \u0422\u043e\u043b\u044c\u044f\u0442\u0442\u0438?")\n'})})]})}function l(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(p,{...n})}):p(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>i,x:()=>o});var r=s(6540);const a={},t=r.createContext(a);function i(n){const e=r.useContext(t);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:i(n.components),r.createElement(t.Provider,{value:e},n.children)}}}]);