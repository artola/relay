(window.webpackJsonp=window.webpackJsonp||[]).push([[434],{1171:function(e,n,r){"use strict";r.d(n,"a",(function(){return p})),r.d(n,"b",(function(){return f}));var t=r(0),a=r.n(t);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),s=function(e){var n=a.a.useContext(b),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},p=function(e){var n=s(e.components);return a.a.createElement(b.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=s(r),u=t,f=p["".concat(i,".").concat(u)]||p[u]||d[u]||o;return r?a.a.createElement(f,c(c({ref:n},b),{},{components:r})):a.a.createElement(f,c({ref:n},b))}));function f(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,i=new Array(o);i[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var b=2;b<o;b++)i[b]=r[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},521:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return i})),r.d(n,"metadata",(function(){return c})),r.d(n,"toc",(function(){return l})),r.d(n,"default",(function(){return s}));var t=r(3),a=r(7),o=(r(0),r(1171)),i={id:"classic-api-reference-relay-renderer",title:"Relay.Renderer",original_id:"classic-api-reference-relay-renderer"},c={unversionedId:"classic-api-reference-relay-renderer",id:"version-classic/classic-api-reference-relay-renderer",isDocsHomePage:!1,title:"Relay.Renderer",description:"Relay.Renderer is a replacement for Relay.RootContainer that composes a Relay.ReadyStateRenderer and performs data fetching for a given queryConfig.",source:"@site/versioned_docs/version-classic/Classic-APIReference-Renderer.md",slug:"/classic-api-reference-relay-renderer",permalink:"/docs/classic/classic-api-reference-relay-renderer",editUrl:"https://github.com/facebook/relay/edit/master/website-v2/versioned_docs/version-classic/Classic-APIReference-Renderer.md",version:"classic",lastUpdatedBy:"Yaroslav Kukytsyak",lastUpdatedAt:1615343022,sidebar:"version-classic/docs",previous:{title:"Relay.Route",permalink:"/docs/classic/classic-api-reference-relay-route"},next:{title:"Relay.RootContainer",permalink:"/docs/classic/classic-api-reference-relay-root-container"}},l=[{value:"Overview",id:"overview",children:[]},{value:"Props",id:"props",children:[{value:"Container",id:"container",children:[]},{value:"forceFetch",id:"forcefetch",children:[]},{value:"QueryConfig",id:"queryconfig",children:[]},{value:"Environment",id:"environment",children:[]},{value:"render",id:"render",children:[]},{value:"onReadyStateChange",id:"onreadystatechange",children:[]}]}],b={toc:l};function s(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},b,r,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Relay.Renderer")," is a replacement for ",Object(o.b)("inlineCode",{parentName:"p"},"Relay.RootContainer")," that composes a ",Object(o.b)("inlineCode",{parentName:"p"},"Relay.ReadyStateRenderer")," and performs data fetching for a given ",Object(o.b)("inlineCode",{parentName:"p"},"queryConfig"),"."),Object(o.b)("h2",{id:"overview"},"Overview"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Props")),Object(o.b)("ul",{className:"apiIndex"},Object(o.b)("li",null,Object(o.b)("a",{href:"#container"},Object(o.b)("pre",null,"Container"),"Relay container that defines fragments and the view to render.")),Object(o.b)("li",null,Object(o.b)("a",{href:"#forcefetch"},Object(o.b)("pre",null,"forceFetch"),"Whether to send a server request regardless of data available on the client.")),Object(o.b)("li",null,Object(o.b)("a",{href:"#queryconfig"},Object(o.b)("pre",null,"queryConfig"),"`QueryConfig` or `Relay.Route` that defines the query roots.")),Object(o.b)("li",null,Object(o.b)("a",{href:"#environment"},Object(o.b)("pre",null,"environment"),"An instance of `Relay.Environment` or any object that implements the `RelayEnvironment` interface.")),Object(o.b)("li",null,Object(o.b)("a",{href:"#render"},Object(o.b)("pre",null,"render"),"Called to render when data requirements are being fulfilled.")),Object(o.b)("li",null,Object(o.b)("a",{href:"#onreadystatechange"},Object(o.b)("pre",null,"onReadyStateChange")))),Object(o.b)("h2",{id:"props"},"Props"),Object(o.b)("h3",{id:"container"},"Container"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{}),"\nContainer: RelayContainer\n\n")),Object(o.b)("p",null,"Must be a valid ",Object(o.b)("inlineCode",{parentName:"p"},"RelayContainer"),". Relay will attempt to fulfill its data requirements before rendering it."),Object(o.b)("h3",{id:"forcefetch"},"forceFetch"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{}),"\nforceFetch: boolean\n\n")),Object(o.b)("p",null,"If supplied and set to true, a request for data will always be made to the server regardless of whether data on the client is available already."),Object(o.b)("h3",{id:"queryconfig"},"QueryConfig"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{}),"\nqueryConfig: RelayRoute\n\n")),Object(o.b)("p",null,"Either an instance of ",Object(o.b)("inlineCode",{parentName:"p"},"Relay.Route")," or an object with the ",Object(o.b)("inlineCode",{parentName:"p"},"name"),", ",Object(o.b)("inlineCode",{parentName:"p"},"queries"),", and optionally the ",Object(o.b)("inlineCode",{parentName:"p"},"params")," properties."),Object(o.b)("h3",{id:"environment"},"Environment"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{}),"\nenvironment: RelayEnvironment\n\n")),Object(o.b)("p",null,"An object that conforms to the ",Object(o.b)("inlineCode",{parentName:"p"},"Relay.Environment")," interface, such as ",Object(o.b)("inlineCode",{parentName:"p"},"Relay.Store"),"."),Object(o.b)("h3",{id:"render"},"render"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{}),"\nrender({\n  props: ?{[propName: string]: mixed},\n  done: boolean,\n  error: ?Error,\n  retry: ?Function,\n  stale: boolean\n}): ?React$Element\n\n")),Object(o.b)("p",null,"If the render callback is not supplied, the default behavior is to render the container if data is available, the existing view if one exists, or nothing."),Object(o.b)("p",null,"If the callback returns ",Object(o.b)("inlineCode",{parentName:"p"},"undefined"),", the previously rendered view (or nothing if there is no previous view) is rendered (e.g. when transitioning from one ",Object(o.b)("inlineCode",{parentName:"p"},"queryConfig")," to another)."),Object(o.b)("h4",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:'language-{"{"}4-6{"}"}'}),"\n// In this example, `ErrorComponent` and `LoadingComponent`\n// simply display a static error message / loading indicator.\n<Relay.Renderer\n  Container={ProfilePicture}\n  queryConfig={profileRoute}\n  environment={Relay.Store}\n  render={({done, error, props, retry, stale}) => {\n        if (error) {\n          return <ErrorComponent />;\n        } else if (props) {\n          return <ProfilePicture {...props} />;\n        } else {\n          return <LoadingComponent />;\n        }\n      }}\n/>\n\n")),Object(o.b)("h3",{id:"onreadystatechange"},"onReadyStateChange"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{}),"\nonReadyStateChange(\n  readyState: {\n    aborted: boolean;\n    done: boolean;\n    error: ?Error;\n    events: Array<ReadyStateEvent>;\n    ready: boolean;\n    stale: boolean;\n  }\n): void\n\n")),Object(o.b)("p",null,"This callback prop is called as the various events of data resolution occur."),Object(o.b)("p",null,"See also: ",Object(o.b)("a",Object(t.a)({parentName:"p"},{href:"./classic-guides-ready-state"}),"Ready State")))}s.isMDXComponent=!0}}]);