(window.webpackJsonp=window.webpackJsonp||[]).push([[863],{1069:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),b=r,h=d["".concat(o,".").concat(b)]||d[b]||p[b]||i;return n?a.a.createElement(h,l(l({ref:t},s),{},{components:n})):a.a.createElement(h,l({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},1070:function(e,t,n){"use strict";(function(e){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return a(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.OssOnly=t.FbInternalOnly=t.isInternal=t.validateFbContentArgs=t.fbInternalOnly=t.fbContent=t.bloks=void 0,t.bloks=i(n(1073));const o=["internal","external"];let l;try{l=n(1071).usePluginData}catch(p){l=null}function c(e){return u(e),d()?"internal"in e?s(e.internal):[]:"external"in e?s(e.external):[]}function s(e){return"function"==typeof e?e():e}function u(e){if("object"!=typeof e)throw new Error(`fbContent() args must be an object containing keys: ${o}. Instead got ${e}`);if(!Object.keys(e).find((e=>o.find((t=>t===e)))))throw new Error(`No valid args found in ${JSON.stringify(e)}. Accepted keys: ${o}`);const t=Object.keys(e).filter((e=>!o.find((t=>t===e))));if(t.length>0)throw new Error(`Unexpected keys ${t} found in fbContent() args. Accepted keys: ${o}`)}function d(){return e.env.FB_INTERNAL||l&&l("internaldocs-fb").FB_INTERNAL}t.fbContent=c,t.fbInternalOnly=function(e){return c({internal:e})},t.validateFbContentArgs=u,t.isInternal=d,t.FbInternalOnly=function(e){return d()?e.children:null},t.OssOnly=function(e){return d()?null:e.children}}).call(this,n(1072))},1071:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return a})),n.d(t,"useAllPluginInstancesData",(function(){return i})),n.d(t,"usePluginData",(function(){return o}));var r=n(22);function a(){var e=Object(r.default)().globalData;if(!e)throw new Error("Docusaurus global data not found");return e}function i(e){var t=a()[e];if(!t)throw new Error("Docusaurus plugin global data not found for pluginName="+e);return t}function o(e,t){void 0===t&&(t="default");var n=i(e)[t];if(!n)throw new Error("Docusaurus plugin global data not found for pluginName="+e+" and pluginId="+t);return n}},1072:function(e,t){var n,r,a=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function l(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var c,s=[],u=!1,d=-1;function p(){u&&c&&(u=!1,c.length?s=c.concat(s):d=-1,s.length&&b())}function b(){if(!u){var e=l(p);u=!0;for(var t=s.length;t;){for(c=s,s=[];++d<t;)c&&c[d].run();d=-1,t=s.length}c=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new h(e,t)),1!==s.length||u||l(b)},h.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=m,a.addListener=m,a.once=m,a.off=m,a.removeListener=m,a.removeAllListeners=m,a.emit=m,a.prependListener=m,a.prependOnceListener=m,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},1073:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(a,i){function o(e){try{c(r.next(e))}catch(t){i(t)}}function l(e){try{c(r.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}c((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.getSpecInfo=void 0;const a=n(1074);t.getSpecInfo=function(e){return r(this,void 0,void 0,(function*(){return yield a.call({module:"bloks",api:"getSpecInfo",args:{styleId:e}})}))}},1074:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(a,i){function o(e){try{c(r.next(e))}catch(t){i(t)}}function l(e){try{c(r.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}c((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.call=void 0;let a=!1,i=0;const o={};t.call=function(e){return r(this,void 0,void 0,(function*(){if("staticdocs.thefacebook.com"!==window.location.hostname&&"localhost"!==window.location.hostname)return Promise.reject(new Error("Not running on static docs"));a||(a=!0,window.addEventListener("message",(e=>{if("static-docs-bridge-response"!==e.data.event)return;const t=e.data.id;t in o||console.error(`Recieved response for id: ${t} with no matching receiver`),"response"in e.data?o[t].resolve(e.data.response):o[t].reject(new Error(e.data.error)),delete o[t]})));const t=i++,n=new Promise(((e,n)=>{o[t]={resolve:e,reject:n}})),r={event:"static-docs-bridge-call",id:t,module:e.module,api:e.api,args:e.args},l="localhost"===window.location.hostname?"*":"https://www.internalfb.com";return window.parent.postMessage(r,l),n}))}},1075:function(e,t,n){"use strict";n(60);var r=n(1070),a=n(0);var i=function(){var e=a.useState(!1),t=e[0],n=e[1],r=function(e){n(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?a.createElement("div",{className:"docsRating",id:"docsRating"},a.createElement("hr",null),"Thank you for letting us know!"):a.createElement("div",{className:"docsRating",id:"docsRating"},a.createElement("hr",null),"Is this page useful?",a.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(1)}},a.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),a.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(0)}},a.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},o=function(){return null};t.a=function(){return Object(r.fbContent)({internal:a.createElement(o,null),external:a.createElement(i,null)})}},937:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return h}));var r,a=n(3),i=n(7),o=(n(0),n(1069)),l=n(1075),c=n(1070),s={id:"queries",title:"Queries",slug:"/guided-tour/rendering/queries/"},u={unversionedId:"guided-tour/rendering/queries",id:"guided-tour/rendering/queries",isDocsHomePage:!1,title:"Queries",description:"Queries",source:"@site/docs/guided-tour/rendering/queries.md",slug:"/guided-tour/rendering/queries/",permalink:"/docs/next/guided-tour/rendering/queries/",editUrl:"https://github.com/facebook/relay/edit/master/website-v2/docs/docs/guided-tour/rendering/queries.md",version:"current",lastUpdatedBy:"Jan Kassens",lastUpdatedAt:1614895260,sidebar:"docs",previous:{title:"Fragments",permalink:"/docs/next/guided-tour/rendering/fragments/"},next:{title:"Variables",permalink:"/docs/next/guided-tour/rendering/variables/"}},d=[{value:"Queries",id:"queries",children:[{value:"Rendering Queries",id:"rendering-queries",children:[]},{value:"Fetching Queries for Render",id:"fetching-queries-for-render",children:[]},{value:"Lazily Fetching Queries During Render",id:"lazily-fetching-queries-during-render",children:[]},{value:"Render as you fetch",id:"render-as-you-fetch",children:[]},{value:"Composing Fragments into Queries",id:"composing-fragments-into-queries",children:[]}]}],p=(r="FbEntrypointsExtraInfo",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",e)}),b={toc:d};function h(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"queries"},"Queries"),Object(o.b)("p",null,"A ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://graphql.github.io/learn/queries/"}),"GraphQL Query")," is a collection of fields (and potentially ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../fragments/"}),"fragments"),") we can request from a GraphQL server, based on what fields the server exposes. A query can be sent as a request over the network, along with an optional collection of ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../variables/"}),"variables")," that the query uses, in order to fetch the data. The server response will be a JSON object that matches the shape of the query we sent:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"query UserQuery($id: ID!) {\n  user(id: $id) {\n    id\n    name\n    ...UserFragment\n  }\n  viewer {\n    actor {\n      name\n    }\n  }\n}\n\nfragment UserFragment on User {\n  username\n}\n")),Object(o.b)(c.FbInternalOnly,{mdxType:"FbInternalOnly"},Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://fburl.com/graphiql/v5hs717f"}),"Sample response"))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "user": {\n      "id": "4",\n      "name": "Mark Zuckerberg",\n      "username": "zuck"\n    },\n    "viewer": {\n      "actor": {\n        "name": "Your Name"\n      }\n    }\n  }\n}\n')),Object(o.b)("h3",{id:"rendering-queries"},"Rendering Queries"),Object(o.b)("p",null,"To ",Object(o.b)("em",{parentName:"p"},"render")," a query in Relay, you can use the ",Object(o.b)("inlineCode",{parentName:"p"},"usePreloadedQuery")," Hook:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import type {HomeTabQuery} from 'HomeTabQuery.graphql';\n\nconst React = require('React');\nconst {graphql, usePreloadedQuery} = require('react-relay');\n\ntype Props = {\n  queryRef: PreloadedQuery<HomeTabQuery>,\n};\n\nfunction HomeTab(props: Props) {\n  const data = usePreloadedQuery<HomeTabQuery>(\n    graphql`\n      query HomeTabQuery($id: ID!) {\n        user(id: $id) {\n          name\n        }\n      }\n    `,\n    props.queryRef,\n  );\n\n  return (\n    <h1>{data.user?.name}</h1>\n  );\n}\n")),Object(o.b)("p",null,"Lets see what's going on here:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"usePreloadedQuery"),"  takes a ",Object(o.b)("inlineCode",{parentName:"li"},"graphql")," query and a ",Object(o.b)("inlineCode",{parentName:"li"},"PreloadedQuery")," reference, and returns the data that was fetched for that query.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("inlineCode",{parentName:"li"},"PreloadedQuery")," (in this case ",Object(o.b)("inlineCode",{parentName:"li"},"queryRef"),") is an object that describes and references an ",Object(o.b)("em",{parentName:"li"},"instance")," of our query that is being (or was) fetched.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"We'll cover how to actually fetch the query in the next section below, and cover how to show loading states if the query is in-flight when we try to render it in the ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"../loading-states/"}),"Loading States with Suspense")," section."))),Object(o.b)("li",{parentName:"ul"},"Note that the ",Object(o.b)("inlineCode",{parentName:"li"},"PreloadedQuery")," type takes a Flow type parameter, which corresponds to the Flow type for the query, in this case ",Object(o.b)("inlineCode",{parentName:"li"},"HomeTabQuery"),"."))),Object(o.b)("li",{parentName:"ul"},"Similarly to fragments, ",Object(o.b)("em",{parentName:"li"},"the component is automatically subscribed to updates to the query data"),": if the data for this query is updated anywhere in the app, the component will automatically re-render with the latest updated data."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"usePreloadedQuery")," also additionally takes a Flow type parameter, which corresponds to the Flow type for the query, in this case ",Object(o.b)("inlineCode",{parentName:"li"},"HomeTabQuery"),".",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Remember that Relay automatically generates Flow types for any declared queries, which are available to import from the generated files with the following name format: ",Object(o.b)("em",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"em"},"<query_name>")),Object(o.b)("inlineCode",{parentName:"li"},".graphql.js"),"."),Object(o.b)("li",{parentName:"ul"},"Note that the ",Object(o.b)("inlineCode",{parentName:"li"},"data")," is already properly Flow typed without requiring an explicit annotation, and is based on the types from the GraphQL schema. For example, the type of ",Object(o.b)("inlineCode",{parentName:"li"},"data")," above would be: ",Object(o.b)("inlineCode",{parentName:"li"},"{ user: ?{ name: ?string } }"),"."))),Object(o.b)("li",{parentName:"ul"},"Make sure you're providing a Relay environment using a ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"../environment/"}),"Relay Environment Provider")," at the root of your app before trying to render a query.")),Object(o.b)("h3",{id:"fetching-queries-for-render"},"Fetching Queries for Render"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Rendering")," a query works very similarly to rendering a fragment; however, as described before, unlike fragments, queries can be fetched from the server. Usually we want to fetch somewhere at the root of our app ",Object(o.b)("em",{parentName:"p"},"one or a few queries that")," ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.internalfb.com/intern/wiki/Relay/guided-tour-of-relay/rendering-data/#composing-fragments-into"}),Object(o.b)("em",{parentName:"a"},"accumulate"))," ",Object(o.b)("em",{parentName:"p"},"all the data required to render the screen"),", and ideally we'd fetch them as early as possible, before we even start rendering."),Object(o.b)("p",null,"In order to ",Object(o.b)("em",{parentName:"p"},"fetch")," a query for later rendering it, you can use the ",Object(o.b)("inlineCode",{parentName:"p"},"useQueryLoader")," Hook:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import type {HomeTabQuery as HomeTabQueryType} from 'HomeTabQuery.graphql';\n\nconst HomeTabQuery = require('HomeTabQuery.graphql')\nconst {useQueryLoader} = require('react-relay');\n\nfunction AppTabs() {\n  const [\n    homeTabQueryRef,\n    loadHomeTabQuery,\n  ] = useQueryLoader<HomeTabQueryType>(HomeTabQuery);\n\n  const onSelectHomeTab = () => {\n    // Start loading query for HomeTab immediately in the event handler\n    // that triggers navigation to that tab, *before* we even start\n    // rendering the target tab.\n    // Calling this function will update the value of homeTabQueryRef.\n    loadHomeTabQuery({id: '4'});\n\n    // ...\n  }\n\n  // ...\n\n  return (\n    screen === 'HomeTab' && homeTabQueryRef != null ?\n      // Pass to component that uses usePreloadedQuery\n      <HomeTab queryRef={homeTabQueryRef} /> :\n      // ...\n  );\n}\n")),Object(o.b)("p",null,"The example above is somewhat contrived, but let's distill what is happening:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"We are calling ",Object(o.b)("inlineCode",{parentName:"li"},"useQueryLoader")," inside our ",Object(o.b)("inlineCode",{parentName:"li"},"AppTabs")," component.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"It takes a query, which in this case is our ",Object(o.b)("inlineCode",{parentName:"li"},"HomeTabQuery")," (the query that we declared in our previous example), and which we can obtain by requiring the auto-generated file: ",Object(o.b)("inlineCode",{parentName:"li"},"\u2018HomeTabQuery.graphql'"),"."),Object(o.b)("li",{parentName:"ul"},"It also additionally takes a Flow type parameter, which corresponds to the Flow type for the query, in this case ",Object(o.b)("inlineCode",{parentName:"li"},"HomeTabQueryType"),", which you can also obtain from the auto-generated file: ",Object(o.b)("inlineCode",{parentName:"li"},"\u2018HomeTabQuery.graphql'"),"."))),Object(o.b)("li",{parentName:"ul"},"Calling ",Object(o.b)("inlineCode",{parentName:"li"},"useQueryLoader")," allows us to obtain 2 things:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"homeTabQueryRef"),": A ",Object(o.b)("inlineCode",{parentName:"li"},"?PreloadedQuery"),", which is an object that describes and references an ",Object(o.b)("em",{parentName:"li"},"instance")," of our query that is being (or was) fetched. This value will be null if we haven't fetched the query, i.e. if we haven't called ",Object(o.b)("inlineCode",{parentName:"li"},"loadHomeTabQuery"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"loadHomeTabQuery"),": A function that will ",Object(o.b)("em",{parentName:"li"},"fetch")," the data for this query from the server (if it isn't already cached), and given an object with the ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"../variables/"}),"variables")," the query expects, in this case ",Object(o.b)("inlineCode",{parentName:"li"},"{id: '4'}")," (we'll go into more detail about how Relay uses cached data in the ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"../../reusing-cached-data/"}),"Reusing Cached Data For Render")," section). Calling this function will also update the value of ",Object(o.b)("inlineCode",{parentName:"li"},"homeTabQueryRef")," to an instance of a ",Object(o.b)("inlineCode",{parentName:"li"},"PreloadedQuery"),".",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Note that the ",Object(o.b)("inlineCode",{parentName:"li"},"variables")," we pass to this function will checked by Flow to ensure that you are passing values that match what the GraphQL query expects."),Object(o.b)("li",{parentName:"ul"},"Also note that we are calling this function in the event handler that causes the ",Object(o.b)("inlineCode",{parentName:"li"},"HomeTab")," to be rendered. This allows us to start fetching the data for the screen as early as possible, even before the new tab starts rendering.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"In fact, note that this function can NOT be called during render; it ",Object(o.b)("em",{parentName:"li"},"must")," be called outside of a Component's render function, otherwise it will produce an error."))))))),Object(o.b)("li",{parentName:"ul"},"Note that ",Object(o.b)("inlineCode",{parentName:"li"},"useQueryLoader")," will automatically dispose of all queries that have been loaded when the component unmounts. Disposing of a query means that Relay will no longer hold on to the data for that particular instance of the query in its cache (we'll cover the lifetime of query data in ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"../../reusing-cached-data/"}),"Reusing Cached Data For Render")," section). Additionally, if the request for the query is still in flight when disposal occurs, it will be canceled."),Object(o.b)("li",{parentName:"ul"},"Our ",Object(o.b)("inlineCode",{parentName:"li"},"AppTabs")," component renders the ",Object(o.b)("inlineCode",{parentName:"li"},"HomeTab")," component from the previous example, and passes it the corresponding query reference. Note that this parent component owns the lifetime of the data for that query, meaning that when it unmounts, it will of dispose of that query, as mentioned above."),Object(o.b)("li",{parentName:"ul"},"Finally, make sure you're providing a Relay environment using a ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"../environment/"}),"Relay Environment Provider")," at the root of your app before trying to use ",Object(o.b)("inlineCode",{parentName:"li"},"useQueryLoader"),".")),Object(o.b)("p",null,"Sometimes, you want to start a fetch outside of the context of a parent component, for example to fetch the data required for the initial load of the application. For these cases, you can use the ",Object(o.b)("inlineCode",{parentName:"p"},"loadQuery")," API directly, without using ",Object(o.b)("inlineCode",{parentName:"p"},"useQueryLoader"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import type {HomeTabQuery as HomeTabQueryType} from 'HomeTabQuery.graphql';\n\nconst HomeTabQuery = require('HomeTabQuery.graphql')\nconst {loadQuery} = require('react-relay');\n\n\nconst environment = createEnvironment(...);\n\n// At some point during app initialization\nconst initialQueryRef = loadQuery<HomeTabQueryType>(\n  environment,\n  HomeTabQuery,\n  {id: '4'},\n);\n\n// ...\n\n// E.g. passing the initialQueryRef to the root component\nrender(<AppTabs initialQueryRef={initialQueryRef} initialTab={...} />)\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"In this example, we are calling the ",Object(o.b)("inlineCode",{parentName:"li"},"loadQuery")," function directly to obtain a ",Object(o.b)("inlineCode",{parentName:"li"},"PreloadedQuery")," instance that we can later pass to a component that uses ",Object(o.b)("inlineCode",{parentName:"li"},"usePreloadedQuery"),"."),Object(o.b)("li",{parentName:"ul"},"In this case, we would expect the root ",Object(o.b)("inlineCode",{parentName:"li"},"AppTabs")," component to manage the lifetime of the query reference, and dispose of it at the appropriate time, if at all."),Object(o.b)("li",{parentName:"ul"},'We\'ve left the details of "app initialization" vague in this example, since that will vary from application to application. The important thing to note here is that we should obtain a query reference before we start rendering the root component. Specifically, ',Object(o.b)("inlineCode",{parentName:"li"},"loadQuery")," can NOT be called during render; it must be called outside of a Component's render function, otherwise it will produce an error.")),Object(o.b)("h3",{id:"lazily-fetching-queries-during-render"},"Lazily Fetching Queries During Render"),Object(o.b)("p",null,"Lazily fetching queries during render can be unavoidable, but comes with some pitfalls:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"it can be hard to reason about"),Object(o.b)("li",{parentName:"ul"},"it can lead to waterfalls of requests")),Object(o.b)("p",null,"As a result, we strongly discourage you from lazily loading queries."),Object(o.b)("h3",{id:"render-as-you-fetch"},"Render as you fetch"),Object(o.b)("p",null,"The examples above illustrate how to separate fetching the data from rendering it, in order to start the fetch as early as possible (as opposed to waiting until we start rendering the component to start the fetch), and hopefully allow us to show content to our users a lot sooner. It also gives us more control and predictability over when the fetch occurs, whereas if we fetch during render, it becomes harder to determine when the fetch will (or should) occur, and it fits nicely with the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactjs.org/docs/concurrent-mode-suspense.html#approach-3-render-as-you-fetch-using-suspense"}),Object(o.b)("em",{parentName:"a"},'"render-as-you-fetch"'))," pattern with ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../loading-states/"}),"React Suspense"),"."),Object(o.b)("p",null,"This is the preferred pattern for fetching data with Relay, and it applies in several circumstances, such as the initial load of an application, during subsequent navigations, or when using UI elements such as menus, popovers, dialogs, or other UI elements which are initially hidden and later revealed upon an interaction, and which require fetching additional data apart from one initially required for the screen."),Object(o.b)(c.OssOnly,{mdxType:"OssOnly"},Object(o.b)("p",null,"Relay Entrypoints are a pattern one can use to efficiently and easily implement the render-as-you-fetch pattern. Relay Entrypoints allow us not only fetch data ahead of render, but also download the required JS code for the root in parallel with the data fetch."),Object(o.b)("p",null,"This requires an integration with your router.")),Object(o.b)(p,{mdxType:"FbEntrypointsExtraInfo"}),Object(o.b)("h3",{id:"composing-fragments-into-queries"},"Composing Fragments into Queries"),Object(o.b)("p",null,"To fetch and render a query that includes a fragment, you can compose them in the same way fragments are composed, as shown in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#composing-fragments"}),"Composing Fragments")," section:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"/**\n * UserComponent.react.js\n *\n * Fragment Component\n */\n\nimport type {UserComponent_user$key} from 'UserComponent_user.graphql';\n\nconst React = require('React');\nconst {graphql, useFragment} = require('react-relay');\n\ntype Props = {\n  user: UserComponent_user$key,\n};\n\nfunction UserComponent(props: Props) {\n  const data = useFragment(\n    graphql`...`,\n    props.user,\n  );\n\n  return (...);\n}\n\nmodule.exports = UserComponent;\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"/**\n * App.react.js\n *\n * Query Component\n */\n\nimport type {AppQuery} from 'AppQuery.graphql';\nimport type {PreloadedQuery} from 'react-relay';\n\nconst React = require('React');\nconst {graphql, usePreloadedQuery} = require('react-relay');\n\nconst UserComponent = require('./UserComponent.react');\n\ntype Props = {\n  appQueryRef: PreloadedQuery<AppQuery>,\n}\n\nfunction App() {\n  const data = usePreloadedQuery<AppQuery>(\n    graphql`\n      query AppQuery($id: ID!) {\n        user(id: $id) {\n          name\n\n          # Include child fragment:\n          ...UserComponent_user\n        }\n      }\n    `,\n    appQueryRef,\n  );\n\n  return (\n    <>\n      <h1>{data.user?.name}</h1>\n      {/* Render child component, passing the fragment reference: */}\n      <UserComponent user={data.user} />\n    </>\n  );\n}\n\n")),Object(o.b)("p",null,"Note that:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("em",{parentName:"li"},"fragment reference")," that  ",Object(o.b)("inlineCode",{parentName:"li"},"UserComponent")," expects is is the result of reading a parent query that includes its fragment, which in our case means a query that includes ",Object(o.b)("inlineCode",{parentName:"li"},"...UsernameSection_user"),". In other words, the ",Object(o.b)("inlineCode",{parentName:"li"},"data")," obtained as a result of ",Object(o.b)("inlineCode",{parentName:"li"},"usePreloadedQuery")," also serves as the fragment reference for any child fragments included in that query."),Object(o.b)("li",{parentName:"ul"},"As mentioned previously, ",Object(o.b)("em",{parentName:"li"},"all fragments must belong to a query when they are rendered,")," which means that all fragment components ",Object(o.b)("em",{parentName:"li"},"must")," be descendants of a query. This guarantees that you will always be able to provide a fragment reference for ",Object(o.b)("inlineCode",{parentName:"li"},"useFragment"),", by starting from the result of reading a root query with ",Object(o.b)("inlineCode",{parentName:"li"},"usePreloadedQuery"),".")),Object(o.b)(l.a,{mdxType:"DocsRating"}))}h.isMDXComponent=!0}}]);