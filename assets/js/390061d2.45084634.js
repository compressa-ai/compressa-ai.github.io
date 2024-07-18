"use strict";(self.webpackChunkcompressa_docs=self.webpackChunkcompressa_docs||[]).push([[410],{5003:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>r,metadata:()=>a,toc:()=>p});var t=s(4848),o=s(8453);const r={sidebar_position:3,title:"\u041f\u0435\u0440\u0435\u0445\u043e\u0434 \u0441 OpenAI",sidebar_class_name:"docs_sidebar_index"},i=void 0,a={id:"docs/api-reference/openai",title:"\u041f\u0435\u0440\u0435\u0445\u043e\u0434 \u0441 OpenAI",description:"API Compsessa \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u044b\u043c \u0441 OpenAI.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/docs/api-reference/openai.md",sourceDirName:"docs/api-reference",slug:"/docs/api-reference/openai",permalink:"/docs/api-reference/openai",draft:!1,unlisted:!1,editUrl:"https://github.com/compressa-ai/compressa-ai.github.io/edit/main/docs/docs/api-reference/openai.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"\u041f\u0435\u0440\u0435\u0445\u043e\u0434 \u0441 OpenAI",sidebar_class_name:"docs_sidebar_index"},sidebar:"docsSidebar",previous:{title:"REST API",permalink:"/docs/api-reference/rest"},next:{title:"Compressa REST API",permalink:"/docs/Quickstart/REST_API"}},c={},p=[];function d(e){const n={br:"br",code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["API Compsessa \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u044b\u043c \u0441 OpenAI.",(0,t.jsx)(n.br,{}),"\n","\u0415\u0441\u043b\u0438 \u0440\u0430\u043d\u0435\u0435 \u0432 \u0432\u0430\u0448\u0435\u043c \u043a\u043e\u0434\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043b\u0441\u044f \u043f\u0430\u043a\u0435\u0442 OpenAI \u043d\u0430\u043f\u0440\u044f\u043c\u0443\u044e, \u0431\u0435\u0437 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f Langchain, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0440\u043e\u0441\u0442\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043f\u0430\u043a\u0435\u0442 OpenAI \u0441 \u043d\u0430\u0448\u0438\u043c\u0438 \u044d\u043d\u0434\u043f\u043e\u0438\u043d\u0442\u0430\u043c\u0438."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 openai \u0438\u0437 PyPI\npip install openai\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u0421\u043d\u0430\u0447\u0430\u043b\u0430, \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'COMPRESSA_BASE=https://compressa-api.mil-team.ru/v1\nEMBED_MODEL=/app/resources/models/models/Salesforce_SFR-Embedding-Mistral\nCHAT_MODEL=/app/resources/models/models/compressa-ai_Llama-3-8B-Instruct\nTIKTOKEN_MODEL=Salesforce/SFR-Embedding-Mistral\nENCODING_FORMAT=float\nCOMPRESSA_API_KEY=<"your_compressa_key_here">\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u0418 \u0437\u0430\u0442\u0435\u043c \u043f\u0440\u043e\u0441\u0442\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'from openai import OpenAI  # \u0432\u0435\u0440\u0441\u0438\u044f openai >= 1.0\nimport os\n\nfrom dotenv import load_dotenv\nload_dotenv()\n\nCOMPRESSA_API_KEY=os.getenv("COMPRESSA_API_KEY")\nCOMPRESSA_BASE=os.getenv("COMPRESSA_BASE")  # \u043d\u0430\u0448 API Endpoint\nCHAT_MODEL=os.getenv("CHAT_MODEL")\nEMBED_MODEL=os.getenv("EMBED_MODEL")\nENCODING_FORMAT=os.getenv("ENCODING_FORMAT")\n\nclient = OpenAI(api_key = COMPRESSA_API_KEY, base_url = COMPRESSA_BASE)\n\nchat_completion = client.chat.completions.create(\n    messages=[\n        {\n            "role": "user",\n            "content": "Say this is a test",\n        }\n    ],\n    model=CHAT_MODEL,\n)\n\nprint(chat_completion)\n\nembedding = client.embeddings.create(\n    model=EMBED_MODEL,\n    input="What is the capital of the United States?",\n    encoding_format=ENCODING_FORMAT\n)\n\nprint(embedding)\n'})})]})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>a});var t=s(6540);const o={},r=t.createContext(o);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);