"use strict";(self.webpackChunkcompressa_docs=self.webpackChunkcompressa_docs||[]).push([[2482],{11470:(e,n,t)=>{t.d(n,{A:()=>y});var r=t(96540),a=t(34164),s=t(23104),o=t(56347),l=t(205),u=t(57485),i=t(31682),c=t(89466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,i.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,o.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,u.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=p(e),[o,u]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[i,d]=m({queryString:t,groupId:a}),[f,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,c.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),g=(()=>{const e=i??f;return h({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{g&&u(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=t(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(74848);function x(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:l}=e;const u=[],{blockElementScrollPositionUntilNextRender:i}=(0,s.a_)(),c=e=>{const n=e.currentTarget,t=u.indexOf(n),a=l[t].value;a!==r&&(i(n),o(a))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>u.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function _(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function j(e){const n=f(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,v.jsx)(x,{...n,...e}),(0,v.jsx)(_,{...n,...e})]})}function y(e){const n=(0,b.A)();return(0,v.jsx)(j,{...e,children:d(e.children)},String(n))}},19365:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var r=t(34164);const a={tabItem:"tabItem_Ymn6"};var s=t(74848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,o),hidden:t,children:n})}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var r=t(96540);const a={},s=r.createContext(a);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:n},e.children)}},33382:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var r=t(74848),a=t(28453),s=t(11470),o=t(19365);const l={sidebar_position:1},u="ETL",i={id:"docs/basic_modules/ETL",title:"ETL",description:"\u0414\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u0434\u0443\u043b\u044c \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u044b Compressa \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0438\u0437\u0432\u043b\u0435\u043a\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0438\u0437 \u043d\u0435\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0438 \u043d\u0430\u0440\u0435\u0437\u0430\u0442\u044c \u0438\u0445 \u043d\u0430 \u0447\u0430\u043d\u043a\u0438 \u0441 \u0443\u0447\u0435\u0442\u043e\u043c \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432. \u042d\u0442\u043e \u0432\u0430\u0436\u043d\u043e \u0434\u043b\u044f \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u043f\u043e\u0438\u0441\u043a\u0430 / RAG \u0438\u043b\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0432 LLM.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/docs/basic_modules/ETL.md",sourceDirName:"docs/basic_modules",slug:"/docs/basic_modules/ETL",permalink:"/docs/basic_modules/ETL",draft:!1,unlisted:!1,editUrl:"https://github.com/compressa-ai/compressa-ai.github.io/edit/main/i18n/ru/docusaurus-plugin-content-docs/current/docs/basic_modules/ETL.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"\u0411\u0430\u0437\u043e\u0432\u044b\u0435 \u043c\u043e\u0434\u0443\u043b\u0438",permalink:"/docs/basic_modules/"},next:{title:"LLM",permalink:"/docs/basic_modules/LLM/"}},c={},d=[{value:"\u0421\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044f \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430 (strategy)",id:"\u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044f-\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438-\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430-strategy",level:3},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0447\u0430\u043d\u043a\u0438\u043d\u0433\u0430 (\u043d\u0430\u0440\u0435\u0437\u043a\u0438 \u0442\u0435\u043a\u0441\u0442\u0430)",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b-\u0447\u0430\u043d\u043a\u0438\u043d\u0433\u0430-\u043d\u0430\u0440\u0435\u0437\u043a\u0438-\u0442\u0435\u043a\u0441\u0442\u0430",level:3}];function p(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"etl",children:"ETL"}),"\n",(0,r.jsx)(n.p,{children:"\u0414\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u0434\u0443\u043b\u044c \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u044b Compressa \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0438\u0437\u0432\u043b\u0435\u043a\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0438\u0437 \u043d\u0435\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0438 \u043d\u0430\u0440\u0435\u0437\u0430\u0442\u044c \u0438\u0445 \u043d\u0430 \u0447\u0430\u043d\u043a\u0438 \u0441 \u0443\u0447\u0435\u0442\u043e\u043c \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432. \u042d\u0442\u043e \u0432\u0430\u0436\u043d\u043e \u0434\u043b\u044f \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u043f\u043e\u0438\u0441\u043a\u0430 / RAG \u0438\u043b\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0432 LLM."}),"\n",(0,r.jsx)(n.p,{children:"\u0421\u043e\u0441\u0442\u0430\u0432\u0438\u043c \u0437\u0430\u043f\u0440\u043e\u0441 \u043d\u0430 \u043f\u0440\u0438\u043c\u0435\u0440\u0435 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430 \u0434\u043b\u044f \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u043e\u0432 \u043c\u0430\u0440\u043a\u0435\u0442\u043f\u043b\u0435\u0439\u0441\u0430:"}),"\n","\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(o.A,{value:"python-requests",label:"Python (requests)",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'# pip install requests, \u0435\u0441\u043b\u0438 \u0443 \u0432\u0430\u0441 \u043d\u0435\u0442 \u044d\u0442\u043e\u0439 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438\nimport requests\nimport os\n\n# \u043f\u0440\u0438 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u043c \u0437\u0430\u043f\u0443\u0441\u043a\u0435 \u0437\u0430\u043c\u0435\u043d\u0438\u0442\u0435 \u043d\u0430 \u0432\u0430\u0448 url, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 http://localhost:8080/api/v1/layout\n# \u043f\u0440\u0438 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u043c \u0437\u0430\u043f\u0443\u0441\u043a\u0435 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0435 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u0442\u044c API \u043a\u043b\u044e\u0447 \u0438\u043b\u0438 \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0441\u0432\u043e\u0439\n\n# \u0421\u043a\u0430\u0447\u0438\u0432\u0430\u0435\u043c \u0434\u043b\u044f \u043f\u0440\u0438\u043c\u0435\u0440\u0430 PDF \u0444\u0430\u0439\u043b \u0434\u043b\u044f \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u043e\u0432 \u043c\u0430\u0440\u043a\u0435\u0442\u043f\u043b\u0435\u0439\u0441\u0430: \npdf_url = "https://docs.ozon.ru/company/attachments/6828150/6828198.pdf"\npdf_response = requests.get(pdf_url)\n\n# \u0421\u043e\u0445\u0440\u0430\u043d\u044f\u0435\u043c \u0444\u0430\u0439\u043b\nwith open("ozon_guide.pdf", "wb") as file:\n    file.write(pdf_response.content)\n\n# \u041e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c \u0444\u0430\u0439\u043b \u0434\u043b\u044f \u043d\u0430\u0440\u0435\u0437\u043a\u0438 \u043d\u0430 \u0447\u0430\u043d\u043a\u0438\ncompressa_url = "https://compressa-api.mil-team.ru/v1/layout"\nheaders = {\n    "Authorization": Bearer \u0412\u0430\u0448_API_\u043a\u043b\u044e\u0447_Compressa",\n    "accept": "application/json",\n}\n\n# \u0423\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u043c \u043f\u0443\u0442\u044c \u043a \u043d\u0430\u0448\u0435\u043c\u0443 \u0444\u0430\u0439\u043b\u0443\nfiles = {"files": open("marketplace_guide.pdf", "rb")}\n\n# \u0417\u0430\u0434\u0430\u0435\u043c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0447\u0430\u043d\u043a\u043e\u0432\ndata = {\n    "output_format": "application/json",\n    "coordinates": "false",\n    "strategy": "fast",\n    "languages": ["rus", "eng"]\n}\n\nresponse = requests.post(\n    compressa_url,\n    headers=headers,\n    files=files,\n    data=data\n)\n\n# \u0412\u044b\u0432\u043e\u0434\u0438\u043c \u0447\u0430\u043d\u043a\u0438 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430 \u0432 JSON \u0444\u043e\u0440\u043c\u0430\u0442\u0435\nprint(response.json())\n'})})}),(0,r.jsx)(o.A,{value:"curl",label:"cURL",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'# \u043f\u0440\u0438 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u043c \u0437\u0430\u043f\u0443\u0441\u043a\u0435 \u0437\u0430\u043c\u0435\u043d\u0438\u0442\u0435 \u043d\u0430 \u0432\u0430\u0448 url, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 http://localhost:8080/api/v1/layout\n# \u043f\u0440\u0438 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u043c \u0437\u0430\u043f\u0443\u0441\u043a\u0435 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0435 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u0442\u044c API \u043a\u043b\u044e\u0447 \u0438\u043b\u0438 \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0441\u0432\u043e\u0439\n\ncurl -X POST "https://compressa-api.mil-team.ru/v1/layout" \\\n  -H "Authorization: Bearer \u0412\u0430\u0448_API_\u043a\u043b\u044e\u0447_Compressa" \\\n  -H "accept: application/json" \\\n  -F "files=@path/to/file.pdf" \\\n  -F "xml_keep_tags=false" \\\n  -F "output_format=application/json" \\\n  -F "coordinates=false" \\\n  -F "strategy=auto" \\\n  -F "languages[]=rus" \\\n  -F "languages[]=eng"\n'})})})]}),"\n",(0,r.jsx)(n.p,{children:"\u041d\u0438\u0436\u0435 \u043c\u044b \u0440\u0430\u0437\u0431\u0435\u0440\u0435\u043c \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u0447\u0430\u0441\u0442\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a, \u043f\u043e\u043b\u043d\u0430\u044f \u0441\u0445\u0435\u043c\u0430 API \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u0437\u0434\u0435\u0441\u044c."}),"\n",(0,r.jsx)(n.h3,{id:"\u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044f-\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438-\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430-strategy",children:"\u0421\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044f \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430 (strategy)"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"fast"}),': \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044f "rule-based" \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u0442\u0435\u0445\u043d\u0438\u043a\u0438 \u0438\u0437\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u044f \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 NLP \u0434\u043b\u044f \u0431\u044b\u0441\u0442\u0440\u043e\u0433\u043e \u0438\u0437\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u044f \u0432\u0441\u0435\u0445 \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u044b\u0445 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432. \u0421\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044f "fast" \u043d\u0435 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u0444\u0430\u0439\u043b\u043e\u0432, \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0449\u0438\u0445 \u0441\u043b\u043e\u0436\u043d\u044b\u0435 \u043c\u0430\u043a\u0435\u0442\u044b, \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u0432\u0438\u0437\u0443\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0441\u0442\u0438\u043b\u044f.']}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"hi_res"}),': \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044f "model-based" \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442 \u043c\u0430\u043a\u0435\u0442 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430. \u041f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u043e \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u0438 "hi_res" \u0437\u0430\u043a\u043b\u044e\u0447\u0430\u0435\u0442\u0441\u044f \u0432 \u0442\u043e\u043c, \u0447\u0442\u043e \u043e\u043d\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u043c\u0430\u043a\u0435\u0442 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430 \u0434\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u0435\u0433\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u0445. \u041c\u044b \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u044d\u0442\u0443 \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044e, \u0435\u0441\u043b\u0438 \u0432\u0430\u0448 \u0441\u043b\u0443\u0447\u0430\u0439 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u0432\u044b\u0441\u043e\u043a\u043e\u0439 \u0442\u043e\u0447\u043d\u043e\u0441\u0442\u0438 \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430.']}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"auto"}),': c\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044f "auto" \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0432\u044b\u0431\u0438\u0440\u0430\u0435\u0442 \u043c\u0435\u0442\u043e\u0434 \u0440\u0430\u0437\u0431\u0438\u0435\u043d\u0438\u044f \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430 \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u0435\u0433\u043e \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a \u0438 \u0434\u0440\u0443\u0433\u0438\u0445 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432.']}),"\n",(0,r.jsx)(n.h3,{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b-\u0447\u0430\u043d\u043a\u0438\u043d\u0433\u0430-\u043d\u0430\u0440\u0435\u0437\u043a\u0438-\u0442\u0435\u043a\u0441\u0442\u0430",children:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0447\u0430\u043d\u043a\u0438\u043d\u0433\u0430 (\u043d\u0430\u0440\u0435\u0437\u043a\u0438 \u0442\u0435\u043a\u0441\u0442\u0430)"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"max_characters (\u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e = 500)"})," \u2014 \u0436\u0451\u0441\u0442\u043a\u0438\u0439 \u043f\u0440\u0435\u0434\u0435\u043b \u0440\u0430\u0437\u043c\u0435\u0440\u0430 \u0434\u043b\u044f \u043e\u0434\u043d\u043e\u0433\u043e \u0431\u043b\u043e\u043a\u0430. \u041d\u0438 \u043e\u0434\u0438\u043d \u0431\u043b\u043e\u043a \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u0435\u0432\u044b\u0448\u0430\u0442\u044c \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0433\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432. \u0415\u0441\u043b\u0438 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0441\u0430\u043c \u043f\u043e \u0441\u0435\u0431\u0435 \u043f\u0440\u0435\u0432\u044b\u0448\u0430\u0435\u0442 \u044d\u0442\u043e\u0442 \u0440\u0430\u0437\u043c\u0435\u0440, \u043e\u043d \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0437\u0434\u0435\u043b\u0451\u043d \u043d\u0430 \u0434\u0432\u0430 \u0438\u043b\u0438 \u0431\u043e\u043b\u0435\u0435 \u0431\u043b\u043e\u043a\u043e\u0432 \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u043e\u0433\u043e \u0440\u0430\u0437\u0431\u0438\u0435\u043d\u0438\u044f."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"new_after_n_chars (\u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e = max_characters)"}),' \u2014 "\u043c\u044f\u0433\u043a\u0438\u0439" \u043f\u0440\u0435\u0434\u0435\u043b \u0440\u0430\u0437\u043c\u0435\u0440\u0430 \u0431\u043b\u043e\u043a\u0430. \u0411\u043b\u043e\u043a, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0443\u0436\u0435 \u0434\u043e\u0441\u0442\u0438\u0433 \u044d\u0442\u043e\u0433\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432, \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d, \u0434\u0430\u0436\u0435 \u0435\u0441\u043b\u0438 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u043f\u043e\u043c\u0435\u0441\u0442\u0438\u0442\u0441\u044f \u0431\u0435\u0437 \u043f\u0440\u0435\u0432\u044b\u0448\u0435\u043d\u0438\u044f \u0436\u0451\u0441\u0442\u043a\u043e\u0433\u043e \u043f\u0440\u0435\u0434\u0435\u043b\u0430. \u042d\u0442\u043e\u0442 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432\u043c\u0435\u0441\u0442\u0435 \u0441 max_characters, \u0447\u0442\u043e\u0431\u044b \u0437\u0430\u0434\u0430\u0442\u044c "\u043f\u0440\u0435\u0434\u043f\u043e\u0447\u0442\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439" \u0440\u0430\u0437\u043c\u0435\u0440, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440: "\u041f\u0440\u0435\u0434\u043f\u043e\u0447\u0438\u0442\u0430\u044e \u0431\u043b\u043e\u043a\u0438 \u043e\u043a\u043e\u043b\u043e 1000 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432, \u043d\u043e \u043b\u0443\u0447\u0448\u0435 \u0432\u0437\u044f\u0442\u044c \u0431\u043b\u043e\u043a \u0440\u0430\u0437\u043c\u0435\u0440\u043e\u043c 1500 (max_characters), \u0447\u0435\u043c \u043f\u0440\u0438\u0431\u0435\u0433\u0430\u0442\u044c \u043a \u0440\u0430\u0437\u0431\u0438\u0435\u043d\u0438\u044e \u0442\u0435\u043a\u0441\u0442\u0430". \u042d\u0442\u043e \u043c\u043e\u0436\u043d\u043e \u0437\u0430\u0434\u0430\u0442\u044c \u043a\u0430\u043a (..., max_characters=1500, new_after_n_chars=1000).']}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"overlap (\u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e = 0)"})," \u2014 \u043f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u043e\u0433\u043e \u0440\u0430\u0437\u0431\u0438\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u0431\u043e\u043b\u044c\u0448\u043e\u0433\u043e \u0431\u043b\u043e\u043a\u0430, \u0432\u043a\u043b\u044e\u0447\u0430\u0435\u0442\u0441\u044f \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432 \u0441 \u043a\u043e\u043d\u0446\u0430 \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0435\u0433\u043e \u0431\u043b\u043e\u043a\u0430 \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043f\u0440\u0435\u0444\u0438\u043a\u0441\u0430 \u0434\u043b\u044f \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0433\u043e. \u042d\u0442\u043e \u043f\u043e\u043c\u043e\u0433\u0430\u0435\u0442 \u0441\u043c\u044f\u0433\u0447\u0438\u0442\u044c \u044d\u0444\u0444\u0435\u043a\u0442 \u0440\u0430\u0437\u0440\u044b\u0432\u0430 \u0441\u0435\u043c\u0430\u043d\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u0435\u0434\u0438\u043d\u0438\u0446\u044b, \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u043e\u0439 \u0431\u043e\u043b\u044c\u0448\u0438\u043c \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u043c."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"overlap_all (\u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e = False)"}),' \u2014 \u0442\u0430\u043a\u0436\u0435 \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u0442 overlap \u043c\u0435\u0436\u0434\u0443 "\u043e\u0431\u044b\u0447\u043d\u044b\u043c\u0438" \u0431\u043b\u043e\u043a\u0430\u043c\u0438, \u0430 \u043d\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u0438 \u0440\u0430\u0437\u0431\u0438\u0435\u043d\u0438\u0438 \u0431\u043e\u043b\u044c\u0448\u0438\u0445 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432. \u0422\u0430\u043a \u043a\u0430\u043a \u043e\u0431\u044b\u0447\u043d\u044b\u0435 \u0431\u043b\u043e\u043a\u0438 \u0444\u043e\u0440\u043c\u0438\u0440\u0443\u044e\u0442\u0441\u044f \u0438\u0437 \u0446\u0435\u043b\u044b\u0445 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432, \u043a\u0430\u0436\u0434\u044b\u0439 \u0438\u0437 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0438\u043c\u0435\u0435\u0442 \u0447\u0451\u0442\u043a\u0443\u044e \u0441\u0435\u043c\u0430\u043d\u0442\u0438\u0447\u0435\u0441\u043a\u0443\u044e \u0433\u0440\u0430\u043d\u0438\u0446\u0443, \u044d\u0442\u0430 \u043e\u043f\u0446\u0438\u044f \u043c\u043e\u0436\u0435\u0442 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0448\u0443\u043c\u0430 \u0432 \u043d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u044b\u0435 \u0431\u043b\u043e\u043a\u0438. \u041d\u0443\u0436\u043d\u043e \u0443\u0447\u0438\u0442\u044b\u0432\u0430\u0442\u044c \u0441\u043f\u0435\u0446\u0438\u0444\u0438\u043a\u0443 \u0432\u0430\u0448\u0435\u0433\u043e \u0441\u043b\u0443\u0447\u0430\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f, \u0447\u0442\u043e\u0431\u044b \u0440\u0435\u0448\u0438\u0442\u044c, \u043f\u043e\u0434\u0445\u043e\u0434\u0438\u0442 \u043b\u0438 \u0432\u0430\u043c \u044d\u0442\u043e\u0442 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440.']}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["\u0427\u0442\u043e\u0431\u044b \u0443\u0437\u043d\u0430\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 \u043e CompressaChunking \u043d\u0430 \u043f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u043c \u043f\u0440\u0438\u043c\u0435\u0440\u0435 \u2014 \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 ",(0,r.jsx)(n.a,{href:"/guides/langchain_advanced_chunking/",children:"\u043d\u0430\u0448 \u0433\u0430\u0439\u0434"}),"."]})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}}}]);