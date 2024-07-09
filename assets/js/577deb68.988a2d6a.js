"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[501],{2928:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>m,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=s(4848),t=s(8453);const r={sidebar_position:1},i="Quickstart: Langchain Compressa On-Premises",o={id:"guides/langchain/index",title:"Quickstart: Langchain Compressa On-Premises",description:"This guide shows how to use Compressa into langchain.",source:"@site/docs/guides/langchain/index.md",sourceDirName:"guides/langchain",slug:"/guides/langchain/",permalink:"/guides/langchain/",draft:!1,unlisted:!1,editUrl:"https://github.com/compressa-ai/compressa-ai.github.io/edit/main/docs/guides/langchain/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"guidesSidebar",next:{title:"Quickstart: On-Premises InsightStream",permalink:"/guides/insight-stream/"}},m={},c=[{value:"Installation",id:"installation",level:2},{value:"Imports",id:"imports",level:2},{value:"Environment Setup",id:"environment-setup",level:2},{value:"CompressaEmbeddings",id:"compressaembeddings",level:2},{value:"CompressaLLM",id:"compressallm",level:2},{value:"ChatCompressa",id:"chatcompressa",level:2},{value:"RAG example",id:"rag-example",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"quickstart-langchain-compressa-on-premises",children:"Quickstart: Langchain Compressa On-Premises"}),"\n",(0,a.jsx)(n.p,{children:"This guide shows how to use Compressa into langchain."}),"\n",(0,a.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"pip install -i https://test.pypi.org/simple/ --extra-index-url https://pypi.org/simple/ langchain-compressa\n"})}),"\n",(0,a.jsx)(n.h2,{id:"imports",children:"Imports"}),"\n",(0,a.jsx)(n.p,{children:"langchain compressa is a platform that offers:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"from langchain_compressa import CompressaLLM\nfrom langchain_compressa import CompressaEmbeddings\nfrom langchain_compressa import ChatCompressa\n"})}),"\n",(0,a.jsx)(n.h2,{id:"environment-setup",children:"Environment Setup"}),"\n",(0,a.jsx)(n.p,{children:"Make sure to set the following environment variable:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"COMPRESSA_API_KEY"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'import os\nos.environ["COMPRESSA_API_KEY"] = "your_key_here"\n'})}),"\n",(0,a.jsx)(n.h2,{id:"compressaembeddings",children:"CompressaEmbeddings"}),"\n",(0,a.jsx)(n.p,{children:"langchain compressa provide work with Compressa embedding models."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'from langchain_compressa.embeddings import CompressaEmbeddings\n\nembeddings = CompressaEmbeddings()\n\nembeddings.embed_query("My query to look up")\n\nembeddings.embed_documents(\n    ["This is a content of the document", "This is another document"]\n)\n# async embed query\nawait embeddings.aembed_query("My query to look up")\n\n# async embed documents\nawait embeddings.aembed_documents(\n    ["This is a content of the document", "This is another document"]\n)\n'})}),"\n",(0,a.jsx)(n.h2,{id:"compressallm",children:"CompressaLLM"}),"\n",(0,a.jsxs)(n.p,{children:["This example goes over how to use LangChain to interact with ",(0,a.jsx)(n.code,{children:"Compressa"})," models."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'from langchain_core.prompts import PromptTemplate\nfrom langchain_compressa.llms import CompressaLLM\n\ntemplate = """Question: {question}\n\nAnswer: Let\'s think step by step."""\n\nprompt = PromptTemplate.from_template(template)\nmodel = CompressaLLM()\n\n\nchain = prompt | model\nchain.invoke({"question": "What is LangChain?"})\n'})}),"\n",(0,a.jsx)(n.h2,{id:"chatcompressa",children:"ChatCompressa"}),"\n",(0,a.jsx)(n.p,{children:"We can instantiate our model object and generate chat completions"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"from langchain_compressa import ChatCompressa\n\nllm = ChatCompressa(\n    temperature=0,\n    max_tokens=None,\n    timeout=None,\n    max_retries=2,\n    # other params...\n)\n"})}),"\n",(0,a.jsx)(n.p,{children:"Invocation"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'messages = [\n    (\n        "system",\n        "You are a helpful assistant that translates English to French. Translate the user sentence.",\n    ),\n    ("human", "I love programming."),\n]\nai_msg = llm.invoke(messages)\nai_msg\n'})}),"\n",(0,a.jsx)(n.p,{children:"Chaining"}),"\n",(0,a.jsx)(n.p,{children:"We can chain our model with a prompt template like so:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'from langchain_core.prompts import ChatPromptTemplate\n\nprompt = ChatPromptTemplate.from_messages(\n    [\n        (\n            "system",\n            "You are a helpful assistant that translates {input_language} to {output_language}.",\n        ),\n        ("human", "{input}"),\n    ]\n)\n\nchain = prompt | llm\nchain.invoke(\n    {\n        "input_language": "English",\n        "output_language": "German",\n        "input": "I love programming.",\n    }\n)\n'})}),"\n",(0,a.jsx)(n.h2,{id:"rag-example",children:"RAG example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'import os\nfrom langchain_compressa import CompressaEmbeddings, ChatCompressa\nfrom langchain_core.documents import Document\nfrom langchain.chains.combine_documents import create_stuff_documents_chain\nfrom langchain.chains import create_retrieval_chain\nfrom langchain_core.prompts import ChatPromptTemplate\nfrom langchain_text_splitters import RecursiveCharacterTextSplitter\nfrom langchain_community.document_loaders import WebBaseLoader\nfrom langchain_chroma import Chroma\n\nCOMPRESSA_API_KEY = os.getenv(\'COMPRESSA_API_KEY\')\n\ncompressa_embedding = CompressaEmbeddings(compressa_api_key=COMPRESSA_API_KEY)\nllm = ChatCompressa(compressa_api_key=COMPRESSA_API_KEY)\n\nloader = WebBaseLoader("https://docs.smith.langchain.com/overview")\ndocs = loader.load()\n\ntext_splitter = RecursiveCharacterTextSplitter(\n    chunk_size=500, chunk_overlap=100, add_start_index=True\n)\nall_splits = text_splitter.split_documents(docs)\n\nvectorstore = Chroma.from_documents(documents=all_splits, embedding=compressa_embedding)\nretriever = vectorstore.as_retriever(search_type="similarity", search_kwargs={"k": 5})\n\nsystem_template = f"""You are an assistant for question-answering tasks. \nUse the following pieces of retrieved context to answer the question. \nIf you don\'t know the answer, just say that you don\'t know. \nUse three sentences maximum and keep the answer concise."""\n\nqa_prompt = ChatPromptTemplate.from_messages([\n    ("system", system_template),\n    ("human", """Context information:\n\n        {context}\n        \n        Query: {input}\t\t\n    """),\n])\n\nquestion_answer_chain = create_stuff_documents_chain(llm, qa_prompt)\n\nrag_chain = create_retrieval_chain(retriever, question_answer_chain)\n\nansw = rag_chain.invoke({"input": "how can langsmith help with testing?"})\nprint(answ["answer"])\n'})}),"\n",(0,a.jsx)(n.p,{children:"Note: to work better with Russian sources, prompt also needs to be written in Russian"})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>o});var a=s(6540);const t={},r=a.createContext(t);function i(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);