"use strict";(self.webpackChunkcompressa_docs=self.webpackChunkcompressa_docs||[]).push([[496],{1943:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var t=s(4848),a=s(8453);const r={sidebar_position:2,title:"REST API",sidebar_class_name:"docs_sidebar_index"},i="Quickstart: Compressa REST API",o={id:"docs/Quickstart/REST_API",title:"REST API",description:"This guide shows how to start using Compressa via curl requests.",source:"@site/docs/docs/Quickstart/REST_API.md",sourceDirName:"docs/Quickstart",slug:"/docs/Quickstart/REST_API",permalink:"/en/docs/Quickstart/REST_API",draft:!1,unlisted:!1,editUrl:"https://github.com/compressa-ai/compressa-ai.github.io/edit/main/docs/docs/Quickstart/REST_API.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"REST API",sidebar_class_name:"docs_sidebar_index"},sidebar:"docsSidebar",previous:{title:"Python SDK (Langchain)",permalink:"/en/docs/Quickstart/langchain"},next:{title:"Transition from OpenAI",permalink:"/en/docs/Quickstart/openai"}},c={},d=[{value:"Get API_KEY",id:"get-api_key",level:2},{value:"Chunking",id:"chunking",level:2},{value:"Embeddings",id:"embeddings",level:2},{value:"Chat completions",id:"chat-completions",level:2},{value:"Rerank",id:"rerank",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"quickstart-compressa-rest-api",children:"Quickstart: Compressa REST API"}),"\n",(0,t.jsx)(n.p,{children:"This guide shows how to start using Compressa via curl requests."}),"\n",(0,t.jsx)(n.h2,{id:"get-api_key",children:"Get API_KEY"}),"\n",(0,t.jsxs)(n.p,{children:["You can get the key after ",(0,t.jsx)(n.a,{href:"https://compressa.ai/form",children:"registration"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"chunking",children:"Chunking"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl -X POST "https://compressa-api.mil-team.ru/v1/layout" \\\n  -H "Authorization: Bearer <your_key_here>" \\\n  -H "accept: application/json" \\\n  -F "files=@path/to/file.pdf" \\\n  -F "xml_keep_tags=false" \\\n  -F "output_format=application/json" \\\n  -F "coordinates=true" \\\n  -F "strategy=auto" \\\n  -F "languages[]=rus" \\\n  -F "languages[]=eng"\n'})}),"\n",(0,t.jsx)(n.h2,{id:"embeddings",children:"Embeddings"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -X 'POST' \\\n  'https://compressa-api.mil-team.ru/v1/embeddings' \\\n  -H 'accept: application/json' \\\n  -H 'Content-Type: application/json' \\\n  -H 'Authorization: Bearer <your_key_here>' \\\n  -d '{\n  \"model\": \"Compressa-Embedding\",\n  \"input\": \"string\"\n}'\n"})}),"\n",(0,t.jsx)(n.h2,{id:"chat-completions",children:"Chat completions"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl -X \'POST\' \\\n  \'https://compressa-api.mil-team.ru/v1/chat/completions\' \\\n  -H \'accept: application/json\' \\\n  -H \'Content-Type: application/json\' \\\n  -H \'Authorization: Bearer <your_key_here>\' \\\n  -d \'{\n    "model": "Compressa-LLM",\n    "messages": [\n            {"role": "user", "content": "Who won the world series in 2020?"}\n        ],\n    "max_tokens": 128,\n    "temperature": 0.5,\n    "stream": false\n}\'\n'})}),"\n",(0,t.jsx)(n.h2,{id:"rerank",children:"Rerank"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl -X POST "https://compressa-api.mil-team.ru/v1/rerank" \\\n  -H "accept: application/json" \\\n  -H "Content-Type: application/json" \\\n  -H \'Authorization: Bearer <your_key_here>\' \\\n  -d \'{\n    "model": "Compressa-ReRank",\n    "query": "Query?",\n    "documents": [\n      "document 1",\n      "document 2",\n      "document 3"\n    ],\n    "return_documents": false\n  }\'\n'})})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>o});var t=s(6540);const a={},r=t.createContext(a);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);