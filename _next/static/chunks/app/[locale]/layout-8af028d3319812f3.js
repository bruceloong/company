(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[450],{345:()=>{},3649:(e,t)=>{"use strict";function r(e){let t={};for(let[r,n]of e.entries()){let e=t[r];void 0===e?t[r]=n:Array.isArray(e)?e.push(n):t[r]=[e,n]}return t}function n(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function s(e){let t=new URLSearchParams;for(let[r,s]of Object.entries(e))if(Array.isArray(s))for(let e of s)t.append(r,n(e));else t.set(r,n(s));return t}function o(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];for(let t of r){for(let r of t.keys())e.delete(r);for(let[r,n]of t.entries())e.append(r,n)}return e}Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{assign:function(){return o},searchParamsToUrlQuery:function(){return r},urlQueryToSearchParams:function(){return s}})},4789:e=>{e.exports={style:{fontFamily:"'Inter', 'Inter Fallback'",fontStyle:"normal"},className:"__className_d65c78"}},4996:(e,t,r)=>{"use strict";r.d(t,{default:()=>o});var n=r(7652),s=r(6063);function o(e){let{locale:t,...r}=e;if(!t)throw Error(void 0);return(0,s.jsx)(n.Dk,{locale:t,...r})}},5147:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{formatUrl:function(){return o},formatWithValidation:function(){return l},urlObjectKeys:function(){return a}});let n=r(2576)._(r(3649)),s=/https?|ftp|gopher|file/;function o(e){let{auth:t,hostname:r}=e,o=e.protocol||"",a=e.pathname||"",l=e.hash||"",i=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:r&&(c=t+(~r.indexOf(":")?"["+r+"]":r),e.port&&(c+=":"+e.port)),i&&"object"==typeof i&&(i=String(n.urlQueryToSearchParams(i)));let u=e.search||i&&"?"+i||"";return o&&!o.endsWith(":")&&(o+=":"),e.slashes||(!o||s.test(o))&&!1!==c?(c="//"+(c||""),a&&"/"!==a[0]&&(a="/"+a)):c||(c=""),l&&"#"!==l[0]&&(l="#"+l),u&&"?"!==u[0]&&(u="?"+u),""+o+c+(a=a.replace(/[?#]/g,encodeURIComponent))+(u=u.replace("#","%23"))+l}let a=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function l(e){return o(e)}},5801:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{DecodeError:function(){return p},MiddlewareNotFoundError:function(){return b},MissingStaticPage:function(){return g},NormalizeError:function(){return m},PageNotFoundError:function(){return x},SP:function(){return f},ST:function(){return h},WEB_VITALS:function(){return r},execOnce:function(){return n},getDisplayName:function(){return i},getLocationOrigin:function(){return a},getURL:function(){return l},isAbsoluteUrl:function(){return o},isResSent:function(){return c},loadGetInitialProps:function(){return d},normalizeRepeatedSlashes:function(){return u},stringifyError:function(){return y}});let r=["CLS","FCP","FID","INP","LCP","TTFB"];function n(e){let t,r=!1;return function(){for(var n=arguments.length,s=Array(n),o=0;o<n;o++)s[o]=arguments[o];return r||(r=!0,t=e(...s)),t}}let s=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,o=e=>s.test(e);function a(){let{protocol:e,hostname:t,port:r}=window.location;return e+"//"+t+(r?":"+r:"")}function l(){let{href:e}=window.location,t=a();return e.substring(t.length)}function i(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function c(e){return e.finished||e.headersSent}function u(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function d(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await d(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&c(r))return n;if(!n)throw Object.defineProperty(Error('"'+i(e)+'.getInitialProps()" should resolve to an object. But found "'+n+'" instead.'),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return n}let f="undefined"!=typeof performance,h=f&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class p extends Error{}class m extends Error{}class x extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class g extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class b extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function y(e){return JSON.stringify({message:e.message,stack:e.stack})}},7124:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return p}});let n=r(5227),s=r(6063),o=n._(r(3927)),a=r(5147),l=r(5485),i=r(2824),c=r(3108),u=r(5801),d=r(9119);r(8484);let f=r(3196);function h(e){return"string"==typeof e?e:(0,a.formatUrl)(e)}let p=o.default.forwardRef(function(e,t){let r,n;let{href:a,as:p,children:m,prefetch:x=null,passHref:g,replace:b,shallow:y,scroll:j,onClick:v,onMouseEnter:N,onTouchStart:w,legacyBehavior:k=!1,...P}=e;r=m,k&&("string"==typeof r||"number"==typeof r)&&(r=(0,s.jsx)("a",{children:r}));let E=o.default.useContext(l.AppRouterContext),_=!1!==x,C=null===x?i.PrefetchKind.AUTO:i.PrefetchKind.FULL,{href:T,as:O}=o.default.useMemo(()=>{let e=h(a);return{href:e,as:p?h(p):e}},[a,p]);k&&(n=o.default.Children.only(r));let S=k?n&&"object"==typeof n&&n.ref:t,A=o.default.useCallback(e=>(_&&null!==E&&(0,f.mountLinkInstance)(e,T,E,C),()=>{(0,f.unmountLinkInstance)(e)}),[_,T,E,C]),M={ref:(0,c.useMergedRef)(A,S),onClick(e){k||"function"!=typeof v||v(e),k&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),E&&!e.defaultPrevented&&!function(e,t,r,n,s,a,l){let{nodeName:i}=e.currentTarget;!("A"===i.toUpperCase()&&function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e))&&(e.preventDefault(),o.default.startTransition(()=>{let e=null==l||l;"beforePopState"in t?t[s?"replace":"push"](r,n,{shallow:a,scroll:e}):t[s?"replace":"push"](n||r,{scroll:e})}))}(e,E,T,O,b,y,j)},onMouseEnter(e){k||"function"!=typeof N||N(e),k&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),E&&_&&(0,f.onNavigationIntent)(e.currentTarget)},onTouchStart:function(e){k||"function"!=typeof w||w(e),k&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),E&&_&&(0,f.onNavigationIntent)(e.currentTarget)}};return(0,u.isAbsoluteUrl)(O)?M.href=O:k&&!g&&("a"!==n.type||"href"in n.props)||(M.href=(0,d.addBasePath)(O)),k?o.default.cloneElement(n,M):(0,s.jsx)("a",{...P,...M,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8170:(e,t,r)=>{"use strict";r.d(t,{default:()=>h});var n=r(6063),s=r(3927),o=r(7124),a=r.n(o),l=r(2624),i=r(5973),c=r(7652),u=r(8605);function d(){let e=(0,c.Ym)(),t=(0,i.useRouter)(),r=(0,i.usePathname)(),[o,a]=(0,s.useState)(!1),l=[{code:"en",name:"English"},{code:"zh",name:"中文"}],d=l.find(t=>t.code===e)||l[0],f=n=>{let s=r.replace("/".concat(e),"/".concat(n));t.push(s),a(!1)};return(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsxs)("button",{className:"flex items-center space-x-1 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400",onClick:()=>a(!o),children:[(0,n.jsx)(u.VeH,{className:"w-5 h-5"}),(0,n.jsx)("span",{children:d.name})]}),o&&(0,n.jsx)("div",{className:"absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-md shadow-lg overflow-hidden z-20",children:(0,n.jsx)("div",{className:"py-1",children:l.map(t=>(0,n.jsx)("button",{onClick:()=>f(t.code),className:"w-full text-left px-4 py-2 text-sm ".concat(t.code===e?"bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400":"text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"),children:t.name},t.code))})})]})}var f=r(9993);function h(){let e=(0,l.c3)("header"),t=(0,i.usePathname)(),[r,o]=(0,s.useState)(!1),[c,u]=(0,s.useState)(!1);(0,s.useEffect)(()=>{let e=()=>{let e=window.scrollY>10;e!==c&&u(e)};return window.addEventListener("scroll",e),f.os.fromTo(".header",{y:-100,opacity:0},{y:0,opacity:1,duration:.8,ease:"power3.out"}),()=>{window.removeEventListener("scroll",e)}},[c]),(0,s.useEffect)(()=>{o(!1)},[t]);let h=[{href:"#",label:e("home")},{href:"#about",label:e("about")},{href:"#services",label:e("services")},{href:"#products",label:e("products")},{href:"#testimonials",label:e("testimonials")},{href:"#contact",label:e("contact")}];return(0,n.jsxs)("header",{className:"fixed top-0 left-0 right-0 z-50 transition-all duration-300 ".concat(c?"bg-white shadow-md py-2":"bg-transparent py-4"),children:[(0,n.jsxs)("div",{className:"container mx-auto px-4 flex justify-between items-center",children:[(0,n.jsx)(a(),{href:"/",className:"text-2xl font-bold text-blue-600",children:e("logo")}),(0,n.jsxs)("div",{className:"hidden md:flex items-center space-x-8",children:[(0,n.jsx)("nav",{className:"flex space-x-6",children:h.map((e,t)=>(0,n.jsx)("a",{href:e.href,className:"font-medium transition-colors ".concat(c?"text-gray-800 hover:text-blue-600":"text-white hover:text-blue-200"),children:e.label},t))}),(0,n.jsx)(d,{})]}),(0,n.jsx)("button",{className:"md:hidden text-gray-800 dark:text-white",onClick:()=>o(!r),children:(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})})]}),(0,n.jsx)("div",{className:"md:hidden transition-all duration-300 ease-in-out overflow-hidden ".concat(r?"max-h-screen bg-white dark:bg-gray-900":"max-h-0"),children:(0,n.jsxs)("nav",{className:"px-4 pt-2 pb-4 space-y-1",children:[h.map((e,r)=>(0,n.jsx)("a",{href:e.href,className:"block px-3 py-2 rounded-md text-base font-medium ".concat(t===e.href?"text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20":"text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"),onClick:()=>o(!1),children:e.label},r)),(0,n.jsx)("div",{className:"px-4 py-2",children:(0,n.jsx)(d,{})})]})})]})}},9305:(e,t,r)=>{"use strict";r.d(t,{default:()=>f});var n=r(6063),s=r(7124),o=r.n(s),a=r(2624),l=r(3781),i=r(3927),c=r(9993),u=r(1686),d=r(8605);function f(){let e=(0,a.c3)("footer"),t=(0,i.useRef)(null),r=new Date().getFullYear(),s=(0,a.c3)("header"),u=[{href:"#",label:s("home")},{href:"#about",label:s("about")},{href:"#services",label:s("services")},{href:"#products",label:s("products")},{href:"#testimonials",label:s("testimonials")},{href:"#contact",label:s("contact")}],f=[{icon:(0,n.jsx)(d.BR8,{}),href:"https://github.com"},{icon:(0,n.jsx)(d.TC4,{}),href:"https://twitter.com"},{icon:(0,n.jsx)(d.Wjy,{}),href:"https://linkedin.com"},{icon:(0,n.jsx)(d.spH,{}),href:"https://facebook.com"}];return(0,i.useEffect)(()=>{t.current&&c.os.fromTo(t.current,{opacity:0,y:50},{opacity:1,y:0,duration:.8,scrollTrigger:{trigger:t.current,start:"top bottom-=100",toggleActions:"play none none none"}})},[]),(0,n.jsx)("footer",{ref:t,className:"bg-gray-900 text-white",children:(0,n.jsxs)("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[(0,n.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{className:"text-xl font-bold mb-4",children:e("logo")}),(0,n.jsx)("p",{className:"mb-4 text-gray-400",children:e("description")}),(0,n.jsx)("div",{className:"flex space-x-4",children:f.map((e,t)=>(0,n.jsx)("a",{href:e.href,target:"_blank",rel:"noopener noreferrer",className:"text-gray-400 hover:text-white transition-colors",children:e.icon},t))})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{className:"text-xl font-bold mb-4",children:e("quickLinks")}),(0,n.jsx)("ul",{className:"space-y-2",children:u.map((e,t)=>(0,n.jsx)("li",{children:(0,n.jsx)(o(),{href:e.href,className:"text-gray-400 hover:text-white transition-colors",children:e.label})},t))})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{className:"text-xl font-bold mb-4",children:e("contactInfo")}),(0,n.jsxs)("ul",{className:"space-y-3",children:[(0,n.jsxs)("li",{className:"flex items-start space-x-3",children:[(0,n.jsx)(l.vq8,{className:"text-gray-400 mt-1 flex-shrink-0"}),(0,n.jsx)("span",{className:"text-gray-400",children:e("address")})]}),(0,n.jsxs)("li",{className:"flex items-center space-x-3",children:[(0,n.jsx)(l.Cab,{className:"text-gray-400 flex-shrink-0"}),(0,n.jsx)("span",{className:"text-gray-400",children:e("phone")})]}),(0,n.jsxs)("li",{className:"flex items-center space-x-3",children:[(0,n.jsx)(l.maD,{className:"text-gray-400 flex-shrink-0"}),(0,n.jsx)("span",{className:"text-gray-400",children:e("email")})]})]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{className:"text-xl font-bold mb-4",children:e("newsletter")}),(0,n.jsx)("p",{className:"mb-4 text-gray-400",children:e("newsletterText")}),(0,n.jsxs)("form",{className:"flex flex-col sm:flex-row gap-2",children:[(0,n.jsx)("input",{type:"email",placeholder:e("emailPlaceholder"),className:"px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"}),(0,n.jsx)("button",{type:"submit",className:"px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors",children:e("subscribe")})]})]})]}),(0,n.jsx)("div",{className:"border-t border-gray-800 mt-12 pt-8 text-center text-gray-400",children:(0,n.jsxs)("p",{children:["\xa9 ",r," ",e("copyright")]})})]})})}c.os.registerPlugin(u.u)},9750:(e,t,r)=>{Promise.resolve().then(r.bind(r,4996)),Promise.resolve().then(r.t.bind(r,4789,23)),Promise.resolve().then(r.t.bind(r,345,23)),Promise.resolve().then(r.bind(r,9305)),Promise.resolve().then(r.bind(r,8170))}},e=>{var t=t=>e(e.s=t);e.O(0,[663,694,267,373,96,743,908,358],()=>t(9750)),_N_E=e.O()}]);