"use strict";(self.webpackChunkcompressa_docs=self.webpackChunkcompressa_docs||[]).push([[985],{6658:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var a=s(4848),r=s(8453);const i={sidebar_position:1,title:"Langchain",sidebar_class_name:"docs_sidebar_index"},o=void 0,c={id:"docs/api-reference/langchain",title:"Langchain",description:"\u0421ompress\u0430 can use standard langchain methods.",source:"@site/docs/docs/api-reference/langchain.md",sourceDirName:"docs/api-reference",slug:"/docs/api-reference/langchain",permalink:"/docs/api-reference/langchain",draft:!1,unlisted:!1,editUrl:"https://github.com/compressa-ai/compressa-ai.github.io/edit/main/docs/docs/api-reference/langchain.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Langchain",sidebar_class_name:"docs_sidebar_index"},sidebar:"docsSidebar",previous:{title:"API Reference",permalink:"/docs/api-reference/"},next:{title:"REST API",permalink:"/docs/api-reference/rest"}},t={},d=[];function p(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"\u0421ompress\u0430 can use standard langchain methods."}),"\n",(0,a.jsx)(n.p,{children:"For setup:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pip install git+https://github.com/insight-stream/langchain_compressa.git\n"})}),"\n",(0,a.jsx)(n.p,{children:"For use:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"from langchain_compressa import CompressaEmbeddings\nfrom langchain_compressa import ChatCompressa\nfrom langchain_compressa import CompressaRerank\n"})}),"\n",(0,a.jsx)(n.p,{children:"To work, the key COMPRESSA_API_KEY must be obtained and set:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'import os\nos.environ["COMPRESSA_API_KEY"] = "your_key_here"\n'})}),"\n",(0,a.jsx)(n.p,{children:"After that, you can use our Compressa in your code with langchain"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"from langchain_compressa import CompressaEmbeddings, ChatCompressa, CompressaRerank\n\ncompressa_embedding = CompressaEmbeddings()\nllm = ChatCompressa()\nreranker = CompressaRerank()\n"})}),"\n",(0,a.jsxs)(n.p,{children:["For detailed instructions visit ",(0,a.jsx)(n.a,{href:"/guides/langchain/",children:"Quickstart: Langchain Compressa"})]})]})}function l(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>c});var a=s(6540);const r={},i=a.createContext(r);function o(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);