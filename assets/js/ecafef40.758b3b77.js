"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[95],{9220:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var s=i(4848),t=i(8453);const o={sidebar_position:5},r="Finetuning",a={id:"ru/docs/finetuning/index",title:"Finetuning",description:"Compressa provides the feature of low-effort models fine-tuning via LoRA/QLoRA adapters.",source:"@site/docs/ru/docs/finetuning/index.md",sourceDirName:"ru/docs/finetuning",slug:"/ru/docs/finetuning/",permalink:"/ru/docs/finetuning/",draft:!1,unlisted:!1,editUrl:"https://github.com/compressa-ai/docs/main/docs/ru/docs/finetuning/index.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5}},d={},c=[{value:"Preparing data",id:"preparing-data",level:2},{value:"Training",id:"training",level:2},{value:"Compressa Finetuning UI",id:"compressa-finetuning-ui",level:3},{value:"Deploy",id:"deploy",level:3}];function l(n){const e={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"finetuning",children:"Finetuning"}),"\n",(0,s.jsx)(e.p,{children:"Compressa provides the feature of low-effort models fine-tuning via LoRA/QLoRA adapters."}),"\n",(0,s.jsx)(e.p,{children:"Fine-tuning allows to increase quality for business cases, focus model on some topic or introduce format to the output data."}),"\n",(0,s.jsx)(e.h2,{id:"preparing-data",children:"Preparing data"}),"\n",(0,s.jsx)(e.p,{children:"Compressa allows to fine-tune models on chat data.\nTo start the process you should:"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"Prepare conversation examples"}),"\n",(0,s.jsxs)(e.li,{children:["Format them into ",(0,s.jsx)(e.a,{href:"https://jsonlines.org/",children:"JSON Lines"})," format with the next content on each line:"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:'{\n    "messages": [\n        {\n            "role": "user",\n            "content": "<USER MESSAGE 1>"\n        },\n        {\n            "role": "bot",\n            "content": " <BOT\'S RESPONSE>"\n        },\n        {\n            "role": "user",\n            "content": "<USER MESSAGE 2>"\n        },\n        {\n            "role": "bot",\n            "content": " <BOT\'S RESPONSE2>"\n        },\n    ]\n}\n'})}),"\n",(0,s.jsxs)(e.p,{children:["Each dialog can have any number of messages.",(0,s.jsx)(e.br,{}),"\n","Dataset should have at least 100 samples."]}),"\n",(0,s.jsx)(e.h2,{id:"training",children:"Training"}),"\n",(0,s.jsxs)(e.p,{children:["When data is prepared you can start training in Compressa Finetuning UI or with REST API.",(0,s.jsx)(e.br,{}),"\n","Documentation for REST API can be found at Management API documentation ",(0,s.jsx)(e.a,{href:"/docs/services/rest-api/",children:"page"}),"."]}),"\n",(0,s.jsx)(e.h3,{id:"compressa-finetuning-ui",children:"Compressa Finetuning UI"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"URL"}),": ",(0,s.jsx)(e.code,{children:"http://localhost:8080/finetune/"})]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"Fine-Tune UI",src:i(5822).A+"",width:"2704",height:"1698"})}),"\n",(0,s.jsx)(e.p,{children:"To finetune model using UI you should:"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"Select a model in the left panel"}),"\n",(0,s.jsx)(e.li,{children:"Fill-in the name of your finetune"}),"\n",(0,s.jsxs)(e.li,{children:["Upload ",(0,s.jsx)(e.code,{children:"jsonl"})," file to the form"]}),"\n",(0,s.jsxs)(e.li,{children:["Click the ",(0,s.jsx)(e.strong,{children:"Finetune"})," button"]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["Then you can track training process in ",(0,s.jsx)(e.a,{href:"https://github.com/aimhubio/aim",children:"AIM"})," dashboard.",(0,s.jsx)(e.br,{}),"\n","Dashboard can be opened by clicking Training Dashboard.\n",(0,s.jsx)(e.img,{alt:"Training Dashboard",src:i(693).A+"",width:"2714",height:"1702"})]}),"\n",(0,s.jsxs)(e.p,{children:["The dashboard allows to choose run by the provided name and see metrics:\n",(0,s.jsx)(e.img,{alt:"Training Dashboard",src:i(4841).A+"",width:"2858",height:"1770"})]}),"\n",(0,s.jsx)(e.h3,{id:"deploy",children:"Deploy"}),"\n",(0,s.jsxs)(e.p,{children:["When training process is finished, adapter can be deployed in Compressa for inference.",(0,s.jsx)(e.br,{}),"\n","The full instruction for deployment can be found at ",(0,s.jsx)(e.a,{href:"/docs/inference/",children:"page"}),"."]})]})}function h(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(l,{...n})}):l(n)}},4841:(n,e,i)=>{i.d(e,{A:()=>s});const s=i.p+"assets/images/aim-metrics-071e1b428c59dd1f300899a495f778c5.png"},5822:(n,e,i)=>{i.d(e,{A:()=>s});const s=i.p+"assets/images/finetune-272560fe59b36eb751e0d5c92cacd5e7.png"},693:(n,e,i)=>{i.d(e,{A:()=>s});const s=i.p+"assets/images/training-dashboard-9d0e87da0b7d90d5c8404d052358932c.png"},8453:(n,e,i)=>{i.d(e,{R:()=>r,x:()=>a});var s=i(6540);const t={},o=s.createContext(t);function r(n){const e=s.useContext(o);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:r(n.components),s.createElement(o.Provider,{value:e},n.children)}}}]);