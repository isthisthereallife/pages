(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{9361:function(e,t){"use strict";t.Z=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}},3837:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(7345)}])},1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8045:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(9361).Z,o=n(4941).Z,i=n(3929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,n=e.sizes,c=e.unoptimized,l=void 0!==c&&c,h=e.priority,m=void 0!==h&&h,w=e.loading,S=e.lazyRoot,L=void 0===S?null:S,E=e.lazyBoundary,A=e.className,P=e.quality,O=e.width,R=e.height,z=e.style,I=e.objectFit,M=e.objectPosition,T=e.onLoadingComplete,N=e.placeholder,U=void 0===N?"empty":N,q=e.blurDataURL,F=u(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),D=s.useContext(g.ImageConfigContext),G=s.useMemo((function(){var e=y||D||d.imageConfigDefault,t=i(e.deviceSizes).concat(i(e.imageSizes)).sort((function(e,t){return e-t})),n=e.deviceSizes.sort((function(e,t){return e-t}));return a({},e,{allSizes:t,deviceSizes:n})}),[D]),Z=F,B=n?"responsive":"intrinsic";"layout"in Z&&(Z.layout&&(B=Z.layout),delete Z.layout);var W=_;if("loader"in Z){if(Z.loader){var V=Z.loader;W=function(e){e.config;var t=u(e,["config"]);return V(t)}}delete Z.loader}var H="";if(function(e){return"object"===typeof e&&(k(e)||function(e){return void 0!==e.src}(e))}(t)){var K=k(t)?t.default:t;if(!K.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(K)));if(q=q||K.blurDataURL,H=K.src,(!B||"fill"!==B)&&(R=R||K.height,O=O||K.width,!K.height||!K.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(K)))}var J=!m&&("lazy"===w||"undefined"===typeof w);((t="string"===typeof t?t:H).startsWith("data:")||t.startsWith("blob:"))&&(l=!0,J=!1);v.has(t)&&(J=!1);G.unoptimized&&(l=!0);var Y,X=o(s.useState(!1),2),Q=X[0],$=X[1],ee=o(p.useIntersection({rootRef:L,rootMargin:E||"200px",disabled:!J}),3),te=ee[0],ne=ee[1],re=ee[2],oe=!J||ne,ie={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ae={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ce=!1,le={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:I,objectPosition:M},ue=x(O),se=x(R),fe=x(P);0;var de=Object.assign({},z,le),pe="blur"!==U||Q?{}:{backgroundSize:I||"cover",backgroundPosition:M||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(q,'")')};if("fill"===B)ie.display="block",ie.position="absolute",ie.top=0,ie.left=0,ie.bottom=0,ie.right=0;else if("undefined"!==typeof ue&&"undefined"!==typeof se){var ge=se/ue,he=isNaN(ge)?"100%":"".concat(100*ge,"%");"responsive"===B?(ie.display="block",ie.position="relative",ce=!0,ae.paddingTop=he):"intrinsic"===B?(ie.display="inline-block",ie.position="relative",ie.maxWidth="100%",ce=!0,ae.maxWidth="100%",Y="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(ue,"%27%20height=%27").concat(se,"%27/%3e")):"fixed"===B&&(ie.display="inline-block",ie.position="relative",ie.width=ue,ie.height=se)}else 0;var me={src:b,srcSet:void 0,sizes:void 0};oe&&(me=j({config:G,src:t,unoptimized:l,layout:B,width:ue,quality:fe,sizes:n,loader:W}));var ye=t;0;var ve,be="imagesrcset",we="imagesizes";be="imageSrcSet",we="imageSizes";var ke=(r(ve={},be,me.srcSet),r(ve,we,me.sizes),ve),je=s.default.useLayoutEffect,xe=s.useRef(T),_e=s.useRef(t);s.useEffect((function(){xe.current=T}),[T]),je((function(){_e.current!==t&&(re(),_e.current=t)}),[re,t]);var Se=a({isLazy:J,imgAttributes:me,heightInt:se,widthInt:ue,qualityInt:fe,layout:B,className:A,imgStyle:de,blurStyle:pe,loading:w,config:G,unoptimized:l,placeholder:U,loader:W,srcString:ye,onLoadingCompleteRef:xe,setBlurComplete:$,setIntersection:te,isVisible:oe,noscriptSizes:n},Z);return s.default.createElement(s.default.Fragment,null,s.default.createElement("span",{style:ie},ce?s.default.createElement("span",{style:ae},Y?s.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:Y}):null):null,s.default.createElement(C,Object.assign({},Se))),m?s.default.createElement(f.default,null,s.default.createElement("link",Object.assign({key:"__nimg-"+me.src+me.srcSet+me.sizes,rel:"preload",as:"image",href:me.srcSet?void 0:me.src},ke))):null)};var a=n(6495).Z,c=n(2648).Z,l=n(1598).Z,u=n(7273).Z,s=l(n(7294)),f=c(n(5443)),d=n(9309),p=n(7190),g=n(9977),h=(n(3794),n(2392));function m(e){return"/"===e[0]?e.slice(1):e}var y={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0},v=new Set,b=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var w=new Map([["default",function(e){var t=e.config,n=e.src,r=e.width,o=e.quality;return n.endsWith(".svg")&&!t.dangerouslyAllowSVG?n:"".concat(h.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(o||75)}],["imgix",function(e){var t=e.config,n=e.src,r=e.width,o=e.quality,i=new URL("".concat(t.path).concat(m(n))),a=i.searchParams;return a.set("auto",a.getAll("auto").join(",")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||r.toString()),o&&a.set("q",o.toString()),i.href}],["cloudinary",function(e){var t=e.config,n=e.src,r=["f_auto","c_limit","w_"+e.width,"q_"+(e.quality||"auto")].join(",")+"/";return"".concat(t.path).concat(r).concat(m(n))}],["akamai",function(e){var t=e.config,n=e.src,r=e.width;return"".concat(t.path).concat(m(n),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function k(e){return void 0!==e.default}function j(e){var t=e.config,n=e.src,r=e.unoptimized,o=e.layout,a=e.width,c=e.quality,l=e.sizes,u=e.loader;if(r)return{src:n,srcSet:void 0,sizes:void 0};var s=function(e,t,n,r){var o=e.deviceSizes,a=e.allSizes;if(r&&("fill"===n||"responsive"===n)){for(var c,l=/(^|\s)(1?\d?\d)vw/g,u=[];c=l.exec(r);c)u.push(parseInt(c[2]));if(u.length){var s,f=.01*(s=Math).min.apply(s,i(u));return{widths:a.filter((function(e){return e>=o[0]*f})),kind:"w"}}return{widths:a,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:o,kind:"w"}:{widths:i(new Set([t,2*t].map((function(e){return a.find((function(t){return t>=e}))||a[a.length-1]})))),kind:"x"}}(t,a,o,l),f=s.widths,d=s.kind,p=f.length-1;return{sizes:l||"w"!==d?l:"100vw",srcSet:f.map((function(e,r){return"".concat(u({config:t,src:n,quality:c,width:e})," ").concat("w"===d?e:r+1).concat(d)})).join(", "),src:u({config:t,src:n,quality:c,width:f[p]})}}function x(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function _(e){var t,n=(null==(t=e.config)?void 0:t.loader)||"default",r=w.get(n);if(r)return r(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(d.VALID_LOADERS.join(", "),". Received: ").concat(n))}function S(e,t,n,r,o,i){e&&e.src!==b&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(v.add(t),"blur"===r&&i(!0),null==o?void 0:o.current)){var n=e.naturalWidth,a=e.naturalHeight;o.current({naturalWidth:n,naturalHeight:a})}})))}var C=function(e){var t=e.imgAttributes,n=(e.heightInt,e.widthInt),r=e.qualityInt,o=e.layout,i=e.className,c=e.imgStyle,l=e.blurStyle,f=e.isLazy,d=e.placeholder,p=e.loading,g=e.srcString,h=e.config,m=e.unoptimized,y=e.loader,v=e.onLoadingCompleteRef,b=e.setBlurComplete,w=e.setIntersection,k=e.onLoad,x=e.onError,_=(e.isVisible,e.noscriptSizes),C=u(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return p=f?"lazy":p,s.default.createElement(s.default.Fragment,null,s.default.createElement("img",Object.assign({},C,t,{decoding:"async","data-nimg":o,className:i,style:a({},c,l),ref:s.useCallback((function(e){w(e),(null==e?void 0:e.complete)&&S(e,g,0,d,v,b)}),[w,g,o,d,v,b]),onLoad:function(e){S(e.currentTarget,g,0,d,v,b),k&&k(e)},onError:function(e){"blur"===d&&b(!0),x&&x(e)}})),(f||"blur"===d)&&s.default.createElement("noscript",null,s.default.createElement("img",Object.assign({},C,j({config:h,src:g,unoptimized:m,layout:o,width:n,quality:r,sizes:_,loader:y}),{decoding:"async","data-nimg":o,style:c,className:i,loading:p}))))};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;n(5753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(2648).Z,i=n(7273).Z,a=o(n(7294)),c=n(6273),l=n(2725),u=n(3462),s=n(1018),f=n(7190),d=n(1210),p=n(8684),g="undefined"!==typeof a.default.useTransition,h={};function m(e,t,n,r){if(e&&c.isLocalURL(t)){Promise.resolve(e.prefetch(t,n,r)).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;h[t+"%"+n+(o?"%"+o:"")]=!0}}var y=a.default.forwardRef((function(e,t){var n,o=e.href,y=e.as,v=e.children,b=e.prefetch,w=e.passHref,k=e.replace,j=e.shallow,x=e.scroll,_=e.locale,S=e.onClick,C=e.onMouseEnter,L=e.onTouchStart,E=e.legacyBehavior,A=void 0===E?!0!==Boolean(!1):E,P=i(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=v,!A||"string"!==typeof n&&"number"!==typeof n||(n=a.default.createElement("a",null,n));var O=!1!==b,R=r(g?a.default.useTransition():[],2)[1],z=a.default.useContext(u.RouterContext),I=a.default.useContext(s.AppRouterContext);I&&(z=I);var M,T=a.default.useMemo((function(){var e=r(c.resolveHref(z,o,!0),2),t=e[0],n=e[1];return{href:t,as:y?c.resolveHref(z,y):n||t}}),[z,o,y]),N=T.href,U=T.as,q=a.default.useRef(N),F=a.default.useRef(U);A&&(M=a.default.Children.only(n));var D=A?M&&"object"===typeof M&&M.ref:t,G=r(f.useIntersection({rootMargin:"200px"}),3),Z=G[0],B=G[1],W=G[2],V=a.default.useCallback((function(e){F.current===U&&q.current===N||(W(),F.current=U,q.current=N),Z(e),D&&("function"===typeof D?D(e):"object"===typeof D&&(D.current=e))}),[U,D,N,W,Z]);a.default.useEffect((function(){var e=B&&O&&c.isLocalURL(N),t="undefined"!==typeof _?_:z&&z.locale,n=h[N+"%"+U+(t?"%"+t:"")];e&&!n&&m(z,N,U,{locale:t})}),[U,N,B,_,O,z]);var H={ref:V,onClick:function(e){A||"function"!==typeof S||S(e),A&&M.props&&"function"===typeof M.props.onClick&&M.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,a,l,u,s){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(n)){e.preventDefault();var f=function(){"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:i,locale:l,scroll:a}):t[o?"replace":"push"](n,{forceOptimisticNavigation:!s})};u?u(f):f()}}(e,z,N,U,k,j,x,_,I?R:void 0,O)},onMouseEnter:function(e){A||"function"!==typeof C||C(e),A&&M.props&&"function"===typeof M.props.onMouseEnter&&M.props.onMouseEnter(e),!O&&I||c.isLocalURL(N)&&m(z,N,U,{priority:!0})},onTouchStart:function(e){A||"function"!==typeof L||L(e),A&&M.props&&"function"===typeof M.props.onTouchStart&&M.props.onTouchStart(e),!O&&I||c.isLocalURL(N)&&m(z,N,U,{priority:!0})}};if(!A||w||"a"===M.type&&!("href"in M.props)){var K="undefined"!==typeof _?_:z&&z.locale,J=z&&z.isLocaleDomain&&d.getDomainLocale(U,K,z.locales,z.domainLocales);H.href=J||p.addBasePath(l.addLocale(U,K,z&&z.defaultLocale))}return A?a.default.cloneElement(M,H):a.default.createElement("a",Object.assign({},P,H),n)}));t.default=y,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,u=e.disabled||!a,s=r(o.useState(!1),2),f=s[0],d=s[1],p=r(o.useState(null),2),g=p[0],h=p[1];o.useEffect((function(){if(a){if(u||f)return;if(g&&g.tagName){var e=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=l.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(r&&(t=c.get(r)))return t;var o=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:i,elements:o},l.push(n),c.set(n,t),t}(n),o=r.id,i=r.observer,a=r.elements;return a.set(e,t),i.observe(e),function(){if(a.delete(e),i.unobserve(e),0===a.size){i.disconnect(),c.delete(o);var t=l.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&l.splice(t,1)}}}(g,(function(e){return e&&d(e)}),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!f){var r=i.requestIdleCallback((function(){return d(!0)}));return function(){return i.cancelIdleCallback(r)}}}),[g,u,n,t,f]);var m=o.useCallback((function(){d(!1)}),[]);return[h,f,m]};var o=n(7294),i=n(9311),a="function"===typeof IntersectionObserver,c=new Map,l=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var r=(0,n(2648).Z)(n(7294)),o=r.default.createContext(null);t.AppRouterContext=o;var i=r.default.createContext(null);t.LayoutRouterContext=i;var a=r.default.createContext(null);t.GlobalLayoutRouterContext=a},2125:function(e,t,n){"use strict";n.d(t,{qG:function(){return l}});var r=n(5893),o=n(7294),i=n(7080),a=n(5697),c=n.n(a),l=(0,o.createContext)(),u=function(e){var t=e.children,n=(0,o.useReducer)(i.Ye,{id:null,currentPage:null,index:null,currentIndex:null,visits:[{}]}),a=n[0],c=n[1];return(0,r.jsxs)(l.Provider,{value:{creep:a,creepDispatch:c},children:[" ",t]})};u.propTypes={children:c().array},t.ZP=u},2994:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(2125),o=n(7294);function i(){return(0,o.useContext)(r.qG)}},7345:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){r(e,t,n[t])}))}return e}n.r(t),n.d(t,{default:function(){return x}});var i=n(5893),a=n(7294),c=n(5697),l=n.n(c),u=n(2125),s=n(1664),f=n.n(s),d=n(4461),p=n.n(d);function g(){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:p().navbar,children:(0,i.jsx)("h1",{children:(0,i.jsx)(f(),{href:"/",children:" HANS_ONLINE "})})})})}var h=n(2994),m=n(7460),y=n.n(m),v={src:"/_next/static/media/Copyleft_white.ea8474d3.svg",height:197,width:197},b=n(5675),w=n.n(b);Object.freeze({INDEX:{name:"index",uri:"/",id:1},ABOUT:{name:"about",uri:"/about",id:2},PROJECTS:{name:"projects",uri:"/projects",id:3},SVTPK:{name:"svtpk",uri:"/projects/SVTpk",id:10},POKERTIMER:{name:"pokertimer",uri:"/projects/Pokertimer",id:11},MURVEL:{name:"murvel",uri:"/projects/Murvel",id:12},GILFOYLE:{name:"gilfoyle",uri:"/projects/GilfoyleGo",id:13}});function k(){var e=(0,h.Z)(),t=e.creep.currentPageType,n=e.creep.currentPageIndex,r=(e.creep.currentPageUri,(0,a.useState)(!1)),o=r[0],c=r[1];(0,a.useEffect)((function(){console.log("footer hej!"),console.log("nu \xe4r currentIndex: ",t),c("project"===t)}),[t,n]);var l,u;switch(n){case 10:l='<Link href="/projects/GilfoyleGo"><FaArrowLeft className={styles.icon} onClick={(e)=>arrowClicked(false)}/></></Link>',u='<Link href="/projects/Pokertimer"><FaArrowRight className={styles.icon} onClick={(e)=>arrowClicked(true)}/></></Link> ';break;case 11:l='<Link href="/projects/SVTpk"><FaArrowLeft className={styles.icon} onClick={(e)=>arrowClicked(false)}/></></Link>',u='<Link href="/projects/Murvel"><FaArrowRight className={styles.icon} onClick={(e)=>arrowClicked(true)}/></></Link>';break;case 12:l='<Link href="/projects/Pokertimer"><FaArrowLeft className={styles.icon} onClick={(e)=>arrowClicked(false)}/></></Link>',u='<Link href="/projects/GilfoyleGo"><FaArrowRight className={styles.icon} onClick={(e)=>arrowClicked(true)}/></></Link>';break;case 13:l='<Link href="/projects/Murvel"><FaArrowLeft className={styles.icon} onClick={(e)=>arrowClicked(false)}/></></Link>',u='<Link href="/projects/SVTpk"><FaArrowRight className={styles.icon} onClick={(e)=>arrowClicked(true)}/></></Link>';break;default:console.log("det fanns inget index??",n)}return console.log(l,u),(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:y().main,children:o?(0,i.jsxs)(i.Fragment,{children:[l,(0,i.jsx)(f(),{href:"/projects",children:(0,i.jsx)("h3",{children:"Projects"})}),u]}):(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(w(),{height:"50px",width:"50px",src:v})})})})}n(9885);function j(e){var t=e.Component,n=e.pageProps;return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(u.ZP,{children:[(0,i.jsx)(g,{}),(0,i.jsx)(t,o({},n)),(0,i.jsx)(k,{})]})})}j.propTypes={Component:l().func,pageProps:l().object};var x=j},7080:function(e,t,n){"use strict";n.d(t,{Aw:function(){return r},Ye:function(){return o}});var r={APPEAR:"hello",PURGE:"purge",UPDATE:"update"};function o(e,t){var n=e;switch(t.type){case r.APPEAR:n=t.payload;break;case r.PURGE:n=null;break;case r.UPDATE:n=t.payload;break;default:return{newState:n}}return n}},7460:function(e){e.exports={main:"footer_main__GGfJy",icon:"footer_icon___k2f5"}},4461:function(e){e.exports={navbar:"navbar_navbar__8tj4O"}},9885:function(){},5675:function(e,t,n){e.exports=n(8045)},1664:function(e,t,n){e.exports=n(8418)},2703:function(e,t,n){"use strict";var r=n(5268);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},5697:function(e,t,n){e.exports=n(2703)()},5268:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(3837),t(387)}));var n=e.O();_N_E=n}]);