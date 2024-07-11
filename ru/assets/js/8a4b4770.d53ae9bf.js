"use strict";(self.webpackChunkcompressa_docs=self.webpackChunkcompressa_docs||[]).push([[10],{7698:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>t,metadata:()=>o,toc:()=>m});var r=s(4848),a=s(8453);const t={sidebar_position:1},i="Quickstart: Langchain Compressa",o={id:"guides/langchain/index",title:"Quickstart: Langchain Compressa",description:"\u0412 \u044d\u0442\u043e\u043c \u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u0435 \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u043e, \u043a\u0430\u043a \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c Compressa \u0432 langchain.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/guides/langchain/index.md",sourceDirName:"guides/langchain",slug:"/guides/langchain/",permalink:"/ru/guides/langchain/",draft:!1,unlisted:!1,editUrl:"https://github.com/compressa-ai/compressa-ai.github.io/edit/main/docs/guides/langchain/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"guidesSidebar",next:{title:"Quickstart: InsightStream",permalink:"/ru/guides/insight-stream/"}},c={},m=[{value:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",level:2},{value:"\u0418\u043c\u043f\u043e\u0440\u0442\u044b",id:"\u0438\u043c\u043f\u043e\u0440\u0442\u044b",level:2},{value:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f",id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-\u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f",level:2},{value:"CompressaEmbeddings",id:"compressaembeddings",level:2},{value:"ChatCompressa",id:"chatcompressa",level:2},{value:"CompressaRerank",id:"compressarerank",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 RAG",id:"\u043f\u0440\u0438\u043c\u0435\u0440-rag",level:2}];function l(n){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"quickstart-langchain-compressa",children:"Quickstart: Langchain Compressa"}),"\n",(0,r.jsx)(e.p,{children:"\u0412 \u044d\u0442\u043e\u043c \u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u0435 \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u043e, \u043a\u0430\u043a \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c Compressa \u0432 langchain."}),"\n",(0,r.jsx)(e.h2,{id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"pip install git+https://github.com/insight-stream/langchain_compressa.git\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u0438\u043c\u043f\u043e\u0440\u0442\u044b",children:"\u0418\u043c\u043f\u043e\u0440\u0442\u044b"}),"\n",(0,r.jsx)(e.p,{children:"langchain compressa \u2014 \u044d\u0442\u043e \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043f\u0440\u0435\u0434\u043b\u0430\u0433\u0430\u0435\u0442:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"from langchain_compressa import CompressaEmbeddings\nfrom langchain_compressa import ChatCompressa\nfrom langchain_compressa.reranks import CompressaRerank\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-\u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f",children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),"\n",(0,r.jsx)(e.p,{children:"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0443\u044e \u0441\u0440\u0435\u0434\u044b:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"COMPRESSA_API_KEY"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:'import os\nos.environ["COMPRESSA_API_KEY"] = "your_key_here"\n'})}),"\n",(0,r.jsx)(e.h2,{id:"compressaembeddings",children:"CompressaEmbeddings"}),"\n",(0,r.jsx)(e.p,{children:"langchain compressa \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u0440\u0430\u0431\u043e\u0442\u0443 \u0441 \u044d\u043c\u0431\u0435\u0434\u0434\u0438\u043d\u0433 \u043c\u043e\u0434\u0435\u043b\u044f\u043c\u0438 Compressa."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:'from langchain_compressa.embeddings import CompressaEmbeddings\n\nembeddings = CompressaEmbeddings()\n\nembeddings.embed_query("\u041c\u043e\u0439 \u0437\u0430\u043f\u0440\u043e\u0441 \u043d\u0430 \u043f\u043e\u0438\u0441\u043a")\n\nembeddings.embed_documents(\n    ["\u042d\u0442\u043e \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u0435 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430", "\u042d\u0442\u043e \u0434\u0440\u0443\u0433\u043e\u0439 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442"]\n)\n# \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0439 \u044d\u043c\u0431\u0435\u0434\u0438\u043d\u0433 \u0437\u0430\u043f\u0440\u043e\u0441\u0430\nawait embeddings.aembed_query("\u041c\u043e\u0439 \u0437\u0430\u043f\u0440\u043e\u0441 \u043d\u0430 \u043f\u043e\u0438\u0441\u043a")\n\n# \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0439 \u044d\u043c\u0431\u0435\u0434\u0438\u043d\u0433 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432\nawait embeddings.aembed_documents(\n    ["\u042d\u0442\u043e \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u0435 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430", "\u042d\u0442\u043e \u0434\u0440\u0443\u0433\u043e\u0439 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442"]\n)\n'})}),"\n",(0,r.jsx)(e.h2,{id:"chatcompressa",children:"ChatCompressa"}),"\n",(0,r.jsx)(e.p,{children:"\u041c\u044b \u043c\u043e\u0436\u0435\u043c \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u044d\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440 \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u043c\u043e\u0434\u0435\u043b\u0438 \u0438 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u0447\u0430\u0442\u0430."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"from langchain_compressa import ChatCompressa\n\nllm = ChatCompressa(\n    temperature=0\n)\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u0412\u044b\u0437\u043e\u0432 LLM"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:'messages = [\n    (\n        "system",\n        "\u0422\u044b \u043f\u043e\u043b\u0435\u0437\u043d\u044b\u0439 \u043f\u043e\u043c\u043e\u0449\u043d\u0438\u043a, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u0438\u0442 \u0441 \u0440\u0443\u0441\u0441\u043a\u043e\u0433\u043e \u043d\u0430 \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0438\u0439. \u041f\u0435\u0440\u0435\u0432\u0435\u0434\u0438 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f.",\n    ),\n    ("human", "\u042f \u043b\u044e\u0431\u043b\u044e \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435."),\n]\nai_msg = llm.invoke(messages)\nai_msg\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u0426\u0435\u043f\u043e\u0447\u043a\u0430 (\u0441haining)"}),"\n",(0,r.jsx)(e.p,{children:"\u041c\u044b \u043c\u043e\u0436\u0435\u043c \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0438\u0442\u044c \u043d\u0430\u0448\u0443 \u043c\u043e\u0434\u0435\u043b\u044c \u0441 \u0448\u0430\u0431\u043b\u043e\u043d\u043e\u043c \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:'from langchain_core.prompts import ChatPromptTemplate\n\nprompt = ChatPromptTemplate.from_messages(\n    [\n        (\n            "system",\n            "\u0422\u044b \u043f\u043e\u043b\u0435\u0437\u043d\u044b\u0439 \u043f\u043e\u043c\u043e\u0449\u043d\u0438\u043a, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u0438\u0442 \u0441 {input_language} \u043d\u0430 {output_language}.",\n        ),\n        ("human", "{input}"),\n    ]\n)\n\nchain = prompt | llm\nchain.invoke(\n    {\n        "input_language": "\u0440\u0443\u0441\u0441\u043a\u0438\u0439",\n        "output_language": "\u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0438\u0439",\n        "input": "\u042f \u043b\u044e\u0431\u043b\u044e \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435.",\n    }\n)\n'})}),"\n",(0,r.jsx)(e.h2,{id:"compressarerank",children:"CompressaRerank"}),"\n",(0,r.jsx)(e.p,{children:"\u041c\u044b \u043c\u043e\u0436\u0435\u043c \u043f\u0435\u0440\u0435\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u044b \u0447\u0435\u0440\u0435\u0437 Compressa \u0438 langchain."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:'from langchain_core.documents import Document\nfrom langchain_compressa.reranks import CompressaRerank\n\n#\u0441\u043d\u0430\u0447\u0430\u043b\u0430 \u0437\u0430\u0434\u0430\u0434\u0438\u043c \u0441\u043f\u0438\u0441\u043e\u043a \u0438\u0437 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0445 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432 langchain\n\ndocuments = [\n    Document(\n        page_content="""\u041a\u0430\u0440\u0441\u043e\u043d-\u0421\u0438\u0442\u0438 \u2014 \u0441\u0442\u043e\u043b\u0438\u0446\u0430 \u0430\u043c\u0435\u0440\u0438\u043a\u0430\u043d\u0441\u043a\u043e\u0433\u043e \u0448\u0442\u0430\u0442\u0430 \u041d\u0435\u0432\u0430\u0434\u0430. \n        \u041f\u043e \u0434\u0430\u043d\u043d\u044b\u043c \u043f\u0435\u0440\u0435\u043f\u0438\u0441\u0438 \u043d\u0430\u0441\u0435\u043b\u0435\u043d\u0438\u044f \u0421\u0428\u0410 2010 \u0433\u043e\u0434\u0430, \u043d\u0430\u0441\u0435\u043b\u0435\u043d\u0438\u0435 \u041a\u0430\u0440\u0441\u043e\u043d-\u0421\u0438\u0442\u0438 \u0441\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u043b\u043e 55 274 \u0447\u0435\u043b\u043e\u0432\u0435\u043a\u0430.""",\n        metadata={"source": "https://\u043f\u0440\u0438\u043c\u0435\u0440.ru/1"}\n    ),\n    Document(\n        page_content="""\u0421\u043e\u0434\u0440\u0443\u0436\u0435\u0441\u0442\u0432\u043e \u0421\u0435\u0432\u0435\u0440\u043d\u044b\u0445 \u041c\u0430\u0440\u0438\u0430\u043d\u0441\u043a\u0438\u0445 \u043e\u0441\u0442\u0440\u043e\u0432\u043e\u0432 \u2014 \u0433\u0440\u0443\u043f\u043f\u0430 \u043e\u0441\u0442\u0440\u043e\u0432\u043e\u0432 \u0432 \u0422\u0438\u0445\u043e\u043c \u043e\u043a\u0435\u0430\u043d\u0435, \n        \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u043f\u043e\u043b\u0438\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u043c \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u0435\u043c, \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0443\u0435\u043c\u044b\u043c \u0421\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u043d\u044b\u043c\u0438 \u0428\u0442\u0430\u0442\u0430\u043c\u0438. \n        \u0421\u0442\u043e\u043b\u0438\u0446\u0430 \u2014 \u0421\u0430\u0439\u043f\u0430\u043d.""",\n        metadata={"source": "https://\u043f\u0440\u0438\u043c\u0435\u0440.ru/2"}\n    ),\n    Document(\n        page_content="""\u0428\u0430\u0440\u043b\u043e\u0442\u0442\u0430-\u0410\u043c\u0430\u043b\u0438\u044f \u2014 \u0441\u0442\u043e\u043b\u0438\u0446\u0430 \u0438 \u043a\u0440\u0443\u043f\u043d\u0435\u0439\u0448\u0438\u0439 \u0433\u043e\u0440\u043e\u0434 \u0412\u0438\u0440\u0433\u0438\u043d\u0441\u043a\u0438\u0445 \u043e\u0441\u0442\u0440\u043e\u0432\u043e\u0432 \u0421\u0428\u0410. \n        \u0412 \u043d\u0435\u043c \u043f\u0440\u043e\u0436\u0438\u0432\u0430\u0435\u0442 \u043e\u043a\u043e\u043b\u043e 20 000 \u0447\u0435\u043b\u043e\u0432\u0435\u043a. \u0413\u043e\u0440\u043e\u0434 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u043d\u0430 \u043e\u0441\u0442\u0440\u043e\u0432\u0435 \u0421\u0435\u043d\u0442-\u0422\u043e\u043c\u0430\u0441.""",\n        metadata={"source": "https://\u043f\u0440\u0438\u043c\u0435\u0440.ru/3"}\n    ),\n    Document(\n        page_content="""\u0412\u0430\u0448\u0438\u043d\u0433\u0442\u043e\u043d, \u043e\u043a\u0440\u0443\u0433 \u041a\u043e\u043b\u0443\u043c\u0431\u0438\u044f (\u0442\u0430\u043a\u0436\u0435 \u0438\u0437\u0432\u0435\u0441\u0442\u043d\u044b\u0439 \u043a\u0430\u043a \u043f\u0440\u043e\u0441\u0442\u043e \u0412\u0430\u0448\u0438\u043d\u0433\u0442\u043e\u043d \u0438\u043b\u0438 \n        \u043e\u043a\u0440\u0443\u0433 \u041a\u043e\u043b\u0443\u043c\u0431\u0438\u044f, \u0438 \u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u043e \u043a\u0430\u043a \u043e\u043a\u0440\u0443\u0433 \u041a\u043e\u043b\u0443\u043c\u0431\u0438\u044f) \u2014 \u0441\u0442\u043e\u043b\u0438\u0446\u0430 \u0421\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u043d\u044b\u0445 \u0428\u0442\u0430\u0442\u043e\u0432. \n        \u042d\u0442\u043e \u0444\u0435\u0434\u0435\u0440\u0430\u043b\u044c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433. \u041d\u0430 \u0442\u0435\u0440\u0440\u0438\u0442\u043e\u0440\u0438\u0438 \u043d\u0430\u0445\u043e\u0434\u044f\u0442\u0441\u044f \u0440\u0435\u0437\u0438\u0434\u0435\u043d\u0446\u0438\u044f \u043f\u0440\u0435\u0437\u0438\u0434\u0435\u043d\u0442\u0430 \u0421\u0428\u0410 \u0438 \u043c\u043d\u043e\u0433\u0438\u0435 \n        \u043a\u0440\u0443\u043f\u043d\u044b\u0435 \u0433\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0435 \u043f\u0440\u0430\u0432\u0438\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0435 \u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043d\u0438\u044f. \u042d\u0442\u043e \u0434\u0435\u043b\u0430\u0435\u0442 \u0435\u0433\u043e \u043f\u043e\u043b\u0438\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u043c \u0446\u0435\u043d\u0442\u0440\u043e\u043c \n        \u0421\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u043d\u044b\u0445 \u0428\u0442\u0430\u0442\u043e\u0432 \u0410\u043c\u0435\u0440\u0438\u043a\u0438.""",\n        metadata={"source": "https://\u043f\u0440\u0438\u043c\u0435\u0440.ru/4"}\n    ), \n    Document(\n        page_content="""\u0421\u043c\u0435\u0440\u0442\u043d\u0430\u044f \u043a\u0430\u0437\u043d\u044c \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043e\u0432\u0430\u043b\u0430 \u0432 \u0421\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u043d\u044b\u0445 \u0428\u0442\u0430\u0442\u0430\u0445 \u0435\u0449\u0435 \u0434\u043e \u0442\u043e\u0433\u043e, \n        \u043a\u0430\u043a \u0421\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u043d\u044b\u0435 \u0428\u0442\u0430\u0442\u044b \u0441\u0442\u0430\u043b\u0438 \u0441\u0442\u0440\u0430\u043d\u043e\u0439. \u041f\u043e \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044e \u043d\u0430 2017 \u0433\u043e\u0434 \u0441\u043c\u0435\u0440\u0442\u043d\u0430\u044f \u043a\u0430\u0437\u043d\u044c \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0430 \n        \u0432 30 \u0438\u0437 50 \u0448\u0442\u0430\u0442\u043e\u0432. \u0424\u0435\u0434\u0435\u0440\u0430\u043b\u044c\u043d\u043e\u0435 \u043f\u0440\u0430\u0432\u0438\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e (\u0432\u043a\u043b\u044e\u0447\u0430\u044f \u0432\u043e\u043e\u0440\u0443\u0436\u0435\u043d\u043d\u044b\u0435 \u0441\u0438\u043b\u044b \u0421\u0428\u0410) \u0442\u0430\u043a\u0436\u0435 \n        \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u0442 \u0441\u043c\u0435\u0440\u0442\u043d\u0443\u044e \u043a\u0430\u0437\u043d\u044c.""",\n        metadata={"source": "https://\u043f\u0440\u0438\u043c\u0435\u0440.ru/5"}\n    )\n]\n\nquery = "\u041a\u0430\u043a\u0430\u044f \u0441\u0442\u043e\u043b\u0438\u0446\u0430 \u0443 \u0421\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u043d\u044b\u0445 \u0428\u0442\u0430\u0442\u043e\u0432 \u0410\u043c\u0435\u0440\u0438\u043a\u0438?"\n\n#\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u043c \u0440\u0435\u0440\u0430\u043d\u043a\u0435\u0440\nreranker = CompressaRerank()\n\n#\u0438 \u0434\u0430\u043b\u0435\u0435 \u043c\u043e\u0436\u0435\u043c \u043f\u0435\u0440\u0435\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u044b \u0434\u043b\u044f \u0432\u043e\u043f\u0440\u043e\u0441\u0430\ncompress_res = reranker.compress_documents(query=query,  documents=documents)\n'})}),"\n",(0,r.jsx)(e.h2,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-rag",children:"\u041f\u0440\u0438\u043c\u0435\u0440 RAG"}),"\n",(0,r.jsx)(e.p,{children:"RAG (Retrieval Augmented Generation) - \u044d\u0442\u043e \u043c\u0435\u0442\u043e\u0434 \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0431\u043e\u043b\u044c\u0448\u0438\u043c\u0438 \u044f\u0437\u044b\u043a\u043e\u0432\u044b\u043c\u0438 \u043c\u043e\u0434\u0435\u043b\u044f\u043c\u0438, \u043a\u043e\u0433\u0434\u0430 \u0432 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\n\u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043a \u044f\u0437\u044b\u043a\u043e\u0432\u043e\u0439 \u043c\u043e\u0434\u0435\u043b\u0438 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f, \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u044f\u0437\u044b\u043a\u043e\u0432\u0430\u044f \u043c\u043e\u0434\u0435\u043b\u044c\n\u043c\u043e\u0436\u0435\u0442 \u0434\u0430\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044e \u0431\u043e\u043b\u0435\u0435 \u043f\u043e\u043b\u043d\u044b\u0439 \u0438 \u0442\u043e\u0447\u043d\u044b\u0439 \u043e\u0442\u0432\u0435\u0442."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"import os\nfrom langchain_compressa import CompressaEmbeddings, ChatCompressa, CompressaRerank\nfrom langchain_core.documents import Document\nfrom langchain.chains.combine_documents import create_stuff_documents_chain\nfrom langchain.chains import create_retrieval_chain\nfrom langchain.retrievers.contextual_compression import ContextualCompressionRetriever\nfrom langchain_core.prompts import ChatPromptTemplate\nfrom langchain_text_splitters import RecursiveCharacterTextSplitter\nfrom langchain_community.document_loaders import WebBaseLoader\nfrom langchain_chroma import Chroma\n\nCOMPRESSA_API_KEY = os.getenv('COMPRESSA_API_KEY')\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u043c llm \u0438 embedding"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"compressa_embedding = CompressaEmbeddings(api_key=COMPRESSA_API_KEY)\nllm = ChatCompressa(api_key=COMPRESSA_API_KEY)\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u043c \u0437\u0430\u0433\u0440\u0443\u0437\u0447\u0438\u043a \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0438 \u043f\u043e\u043b\u0443\u0447\u0438\u043c \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u044b langchain.\n\u0437\u0434\u0435\u0441\u044c \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d \u043b\u044e\u0431\u043e\u0439 \u0438\u0437 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0445 \u0437\u0430\u0433\u0440\u0443\u0437\u0447\u0438\u043a\u043e\u0432."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:'loader = WebBaseLoader("https://ru.wikipedia.org/wiki/\u0410\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430_\u0444\u043e\u043d_\u041d\u0435\u0439\u043c\u0430\u043d\u0430")\ndocs = loader.load()\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u043c text_splitter \u0438 \u0440\u0430\u0437\u043e\u0431\u044a\u0451\u043c \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u044b \u043d\u0430 \u0447\u0430\u043d\u043a\u0438"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"text_splitter = RecursiveCharacterTextSplitter(\n    chunk_size=500, chunk_overlap=100, add_start_index=True\n)\nall_splits = text_splitter.split_documents(docs)\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u043c \u0447\u0430\u043d\u043a\u0438 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0432 vectorstore \u0438 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u043c retriever"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:'vectorstore = Chroma.from_documents(documents=all_splits, embedding=compressa_embedding)\nretriever = vectorstore.as_retriever(search_type="similarity", search_kwargs={"k": 5})\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u043c \u0440\u0435\u0440\u0430\u043d\u043a\u0435\u0440 \u0434\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0432 \u0446\u0435\u043f\u043e\u0447\u043a\u0435 \u043f\u043e\u0441\u043b\u0435 \u0438\u0437\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u044f \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"compressor = CompressaRerank(api_key=COMPRESSA_API_KEY)\ncompression_retriever = ContextualCompressionRetriever(\n    base_compressor=compressor, base_retriever=retriever\n)\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u043c Prompt \u0434\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u043e\u0442\u0432\u0435\u0442\u043e\u0432 \u043d\u0430 \u0432\u043e\u043f\u0440\u043e\u0441\u044b \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0438\u0441\u0445\u043e\u0434\u044f \u0438\u0437 \u0442\u043e\u043b\u044c\u043a\u043e \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430 \u0430 \u043d\u0435 \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u0445 \u0437\u043d\u0430\u043d\u0438\u0439"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:'system_template = f"""\u0422\u044b \u043f\u043e\u043c\u043e\u0449\u043d\u0438\u043a \u043f\u043e \u0432\u043e\u043f\u0440\u043e\u0441\u0430\u043c-\u043e\u0442\u0432\u0435\u0442\u0430\u043c. \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u043d\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e, \n\u0447\u0442\u043e\u0431\u044b \u043e\u0442\u0432\u0435\u0442\u0438\u0442\u044c \u043d\u0430 \u0432\u043e\u043f\u0440\u043e\u0441. \u0415\u0441\u043b\u0438 \u0432 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0435 \u043d\u0435\u0442 \u043e\u0442\u0432\u0435\u0442\u0430, \u043e\u0442\u0432\u0435\u0442\u044c \'\u041d\u0435 \u0437\u043d\u0430\u044e \u043e\u0442\u0432\u0435\u0442\u0430 \u043d\u0430 \u0432\u043e\u043f\u0440\u043e\u0441\'. \n\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439 \u043c\u0430\u043a\u0441\u0438\u043c\u0443\u043c \u0442\u0440\u0438 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0438 \u0431\u0443\u0434\u044c \u0442\u043e\u0447\u043d\u044b\u043c \u043d\u043e \u043a\u0440\u0430\u0442\u043a\u0438\u043c."""\n\nqa_prompt = ChatPromptTemplate.from_messages([\n    ("system", system_template),\n    ("human", """\u041a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f:\n\n        {context}\n        \n        \u0412\u043e\u043f\u0440\u043e\u0441: {input}\t\t\n    """),\n])\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u0437\u0430\u0434\u0430\u0434\u0438\u043c 2 \u0446\u0435\u043f\u043e\u0447\u043a\u0438: \u0434\u043b\u044f \u0438\u0437\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u044f \u0438 \u043f\u0435\u0440\u0435\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u043f\u043e \u0432\u043e\u043f\u0440\u043e\u0441\u0443 \u0438 \u0434\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0438\u0442\u043e\u0433\u043e\u0432\u043e\u0433\u043e \u043e\u0442\u0432\u0435\u0442\u0430"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"question_answer_chain = create_stuff_documents_chain(llm, qa_prompt)\n\nrag_chain = create_retrieval_chain(compression_retriever, question_answer_chain)\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u0442\u0435\u043f\u0435\u0440\u044c \u043c\u043e\u0436\u0435\u043c \u0437\u0430\u0434\u0430\u0432\u0430\u0442\u044c \u0432\u043e\u043f\u0440\u043e\u0441"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:'answ = rag_chain.invoke({"input": "\u041a\u0430\u043a\u043e\u0435 \u0443\u0437\u043a\u043e\u0435 \u043c\u0435\u0441\u0442\u043e \u0443 \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u044b \u0444\u043e\u043d \u041d\u0435\u0439\u043c\u0430\u043d\u0430?"})\nprint(answ["answer"])\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u0417\u0430\u043c\u0435\u0447\u0430\u043d\u0438\u0435: \u0434\u043b\u044f \u043b\u0443\u0447\u0448\u0435\u0439 \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0440\u0443\u0441\u0441\u043a\u0438\u043c\u0438 \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0430\u043c\u0438 \u043f\u0440\u043e\u043c\u0442 \u0442\u043e\u0436\u0435 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043d\u0430 \u0440\u0443\u0441\u0441\u043a\u043e\u043c \u044f\u0437\u044b\u043a\u0435"})]})}function p(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(l,{...n})}):l(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>i,x:()=>o});var r=s(6540);const a={},t=r.createContext(a);function i(n){const e=r.useContext(t);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:i(n.components),r.createElement(t.Provider,{value:e},n.children)}}}]);