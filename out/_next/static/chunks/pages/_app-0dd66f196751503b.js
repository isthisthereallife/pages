(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{9361:function(e,t){"use strict";t.Z=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}},3837:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(4655)}])},1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8045:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(9361).Z,o=n(4941).Z,i=n(3929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,n=e.sizes,c=e.unoptimized,l=void 0!==c&&c,g=e.priority,v=void 0!==g&&g,x=e.loading,k=e.lazyRoot,C=void 0===k?null:k,E=e.lazyBoundary,P=e.className,z=e.quality,A=e.width,L=e.height,N=e.style,R=e.objectFit,M=e.objectPosition,I=e.onLoadingComplete,T=e.placeholder,Z=void 0===T?"empty":T,B=e.blurDataURL,U=s(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),q=u.useContext(h.ImageConfigContext),H=u.useMemo((function(){var e=m||q||f.imageConfigDefault,t=i(e.deviceSizes).concat(i(e.imageSizes)).sort((function(e,t){return e-t})),n=e.deviceSizes.sort((function(e,t){return e-t}));return a({},e,{allSizes:t,deviceSizes:n})}),[q]),D=U,V=n?"responsive":"intrinsic";"layout"in D&&(D.layout&&(V=D.layout),delete D.layout);var W=S;if("loader"in D){if(D.loader){var F=D.loader;W=function(e){e.config;var t=s(e,["config"]);return F(t)}}delete D.loader}var G="";if(function(e){return"object"===typeof e&&(j(e)||function(e){return void 0!==e.src}(e))}(t)){var Y=j(t)?t.default:t;if(!Y.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(Y)));if(B=B||Y.blurDataURL,G=Y.src,(!V||"fill"!==V)&&(L=L||Y.height,A=A||Y.width,!Y.height||!Y.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(Y)))}var K=!v&&("lazy"===x||"undefined"===typeof x);((t="string"===typeof t?t:G).startsWith("data:")||t.startsWith("blob:"))&&(l=!0,K=!1);y.has(t)&&(K=!1);H.unoptimized&&(l=!0);var J,X=o(u.useState(!1),2),Q=X[0],$=X[1],ee=o(p.useIntersection({rootRef:C,rootMargin:E||"200px",disabled:!K}),3),te=ee[0],ne=ee[1],re=ee[2],oe=!K||ne,ie={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ae={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ce=!1,le={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:R,objectPosition:M},se=_(A),ue=_(L),de=_(z);0;var fe=Object.assign({},N,le),pe="blur"!==Z||Q?{}:{backgroundSize:R||"cover",backgroundPosition:M||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(B,'")')};if("fill"===V)ie.display="block",ie.position="absolute",ie.top=0,ie.left=0,ie.bottom=0,ie.right=0;else if("undefined"!==typeof se&&"undefined"!==typeof ue){var he=ue/se,ge=isNaN(he)?"100%":"".concat(100*he,"%");"responsive"===V?(ie.display="block",ie.position="relative",ce=!0,ae.paddingTop=ge):"intrinsic"===V?(ie.display="inline-block",ie.position="relative",ie.maxWidth="100%",ce=!0,ae.maxWidth="100%",J="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(se,"%27%20height=%27").concat(ue,"%27/%3e")):"fixed"===V&&(ie.display="inline-block",ie.position="relative",ie.width=se,ie.height=ue)}else 0;var ve={src:b,srcSet:void 0,sizes:void 0};oe&&(ve=w({config:H,src:t,unoptimized:l,layout:V,width:se,quality:de,sizes:n,loader:W}));var me=t;0;var ye,be="imagesrcset",xe="imagesizes";be="imageSrcSet",xe="imageSizes";var je=(r(ye={},be,ve.srcSet),r(ye,xe,ve.sizes),r(ye,"crossOrigin",D.crossOrigin),ye),we=u.default.useLayoutEffect,_e=u.useRef(I),Se=u.useRef(t);u.useEffect((function(){_e.current=I}),[I]),we((function(){Se.current!==t&&(re(),Se.current=t)}),[re,t]);var ke=a({isLazy:K,imgAttributes:ve,heightInt:ue,widthInt:se,qualityInt:de,layout:V,className:P,imgStyle:fe,blurStyle:pe,loading:x,config:H,unoptimized:l,placeholder:Z,loader:W,srcString:me,onLoadingCompleteRef:_e,setBlurComplete:$,setIntersection:te,isVisible:oe,noscriptSizes:n},D);return u.default.createElement(u.default.Fragment,null,u.default.createElement("span",{style:ie},ce?u.default.createElement("span",{style:ae},J?u.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:J}):null):null,u.default.createElement(O,Object.assign({},ke))),v?u.default.createElement(d.default,null,u.default.createElement("link",Object.assign({key:"__nimg-"+ve.src+ve.srcSet+ve.sizes,rel:"preload",as:"image",href:ve.srcSet?void 0:ve.src},je))):null)};var a=n(6495).Z,c=n(2648).Z,l=n(1598).Z,s=n(7273).Z,u=l(n(7294)),d=c(n(5443)),f=n(9309),p=n(7190),h=n(9977),g=(n(3794),n(2392));function v(e){return"/"===e[0]?e.slice(1):e}var m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/pages/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0},y=new Set,b=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var x=new Map([["default",function(e){var t=e.config,n=e.src,r=e.width,o=e.quality;return n.endsWith(".svg")&&!t.dangerouslyAllowSVG?n:"".concat(g.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(o||75)}],["imgix",function(e){var t=e.config,n=e.src,r=e.width,o=e.quality,i=new URL("".concat(t.path).concat(v(n))),a=i.searchParams;return a.set("auto",a.getAll("auto").join(",")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||r.toString()),o&&a.set("q",o.toString()),i.href}],["cloudinary",function(e){var t=e.config,n=e.src,r=["f_auto","c_limit","w_"+e.width,"q_"+(e.quality||"auto")].join(",")+"/";return"".concat(t.path).concat(r).concat(v(n))}],["akamai",function(e){var t=e.config,n=e.src,r=e.width;return"".concat(t.path).concat(v(n),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function j(e){return void 0!==e.default}function w(e){var t=e.config,n=e.src,r=e.unoptimized,o=e.layout,a=e.width,c=e.quality,l=e.sizes,s=e.loader;if(r)return{src:n,srcSet:void 0,sizes:void 0};var u=function(e,t,n,r){var o=e.deviceSizes,a=e.allSizes;if(r&&("fill"===n||"responsive"===n)){for(var c,l=/(^|\s)(1?\d?\d)vw/g,s=[];c=l.exec(r);c)s.push(parseInt(c[2]));if(s.length){var u,d=.01*(u=Math).min.apply(u,i(s));return{widths:a.filter((function(e){return e>=o[0]*d})),kind:"w"}}return{widths:a,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:o,kind:"w"}:{widths:i(new Set([t,2*t].map((function(e){return a.find((function(t){return t>=e}))||a[a.length-1]})))),kind:"x"}}(t,a,o,l),d=u.widths,f=u.kind,p=d.length-1;return{sizes:l||"w"!==f?l:"100vw",srcSet:d.map((function(e,r){return"".concat(s({config:t,src:n,quality:c,width:e})," ").concat("w"===f?e:r+1).concat(f)})).join(", "),src:s({config:t,src:n,quality:c,width:d[p]})}}function _(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function S(e){var t,n=(null==(t=e.config)?void 0:t.loader)||"default",r=x.get(n);if(r)return r(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(n))}function k(e,t,n,r,o,i){e&&e.src!==b&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(y.add(t),"blur"===r&&i(!0),null==o?void 0:o.current)){var n=e.naturalWidth,a=e.naturalHeight;o.current({naturalWidth:n,naturalHeight:a})}})))}var O=function(e){var t=e.imgAttributes,n=(e.heightInt,e.widthInt),r=e.qualityInt,o=e.layout,i=e.className,c=e.imgStyle,l=e.blurStyle,d=e.isLazy,f=e.placeholder,p=e.loading,h=e.srcString,g=e.config,v=e.unoptimized,m=e.loader,y=e.onLoadingCompleteRef,b=e.setBlurComplete,x=e.setIntersection,j=e.onLoad,_=e.onError,S=(e.isVisible,e.noscriptSizes),O=s(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return p=d?"lazy":p,u.default.createElement(u.default.Fragment,null,u.default.createElement("img",Object.assign({},O,t,{decoding:"async","data-nimg":o,className:i,style:a({},c,l),ref:u.useCallback((function(e){x(e),(null==e?void 0:e.complete)&&k(e,h,0,f,y,b)}),[x,h,o,f,y,b]),onLoad:function(e){k(e.currentTarget,h,0,f,y,b),j&&j(e)},onError:function(e){"blur"===f&&b(!0),_&&_(e)}})),(d||"blur"===f)&&u.default.createElement("noscript",null,u.default.createElement("img",Object.assign({},O,w({config:g,src:h,unoptimized:v,layout:o,width:n,quality:r,sizes:S,loader:m}),{decoding:"async","data-nimg":o,style:c,className:i,loading:p}))))};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;n(5753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(2648).Z,i=n(7273).Z,a=o(n(7294)),c=n(6273),l=n(2725),s=n(3462),u=n(1018),d=n(7190),f=n(1210),p=n(8684),h={};function g(e,t,n,r){if(e&&c.isLocalURL(t)){Promise.resolve(e.prefetch(t,n,r)).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;h[t+"%"+n+(o?"%"+o:"")]=!0}}var v=a.default.forwardRef((function(e,t){var n,o=e.href,v=e.as,m=e.children,y=e.prefetch,b=e.passHref,x=e.replace,j=e.shallow,w=e.scroll,_=e.locale,S=e.onClick,k=e.onMouseEnter,O=e.onTouchStart,C=e.legacyBehavior,E=void 0===C?!0!==Boolean(!1):C,P=i(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=m,!E||"string"!==typeof n&&"number"!==typeof n||(n=a.default.createElement("a",null,n));var z=!1!==y,A=a.default.useContext(s.RouterContext),L=a.default.useContext(u.AppRouterContext);L&&(A=L);var N,R=a.default.useMemo((function(){var e=r(c.resolveHref(A,o,!0),2),t=e[0],n=e[1];return{href:t,as:v?c.resolveHref(A,v):n||t}}),[A,o,v]),M=R.href,I=R.as,T=a.default.useRef(M),Z=a.default.useRef(I);E&&(N=a.default.Children.only(n));var B=E?N&&"object"===typeof N&&N.ref:t,U=r(d.useIntersection({rootMargin:"200px"}),3),q=U[0],H=U[1],D=U[2],V=a.default.useCallback((function(e){Z.current===I&&T.current===M||(D(),Z.current=I,T.current=M),q(e),B&&("function"===typeof B?B(e):"object"===typeof B&&(B.current=e))}),[I,B,M,D,q]);a.default.useEffect((function(){var e=H&&z&&c.isLocalURL(M),t="undefined"!==typeof _?_:A&&A.locale,n=h[M+"%"+I+(t?"%"+t:"")];e&&!n&&g(A,M,I,{locale:t})}),[I,M,H,_,z,A]);var W={ref:V,onClick:function(e){E||"function"!==typeof S||S(e),E&&N.props&&"function"===typeof N.props.onClick&&N.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,l,s,u,d){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(n)){e.preventDefault();var f=function(){"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:i,locale:s,scroll:l}):t[o?"replace":"push"](n,{forceOptimisticNavigation:!d})};u?a.default.startTransition(f):f()}}(e,A,M,I,x,j,w,_,Boolean(L),z)},onMouseEnter:function(e){E||"function"!==typeof k||k(e),E&&N.props&&"function"===typeof N.props.onMouseEnter&&N.props.onMouseEnter(e),!z&&L||c.isLocalURL(M)&&g(A,M,I,{priority:!0})},onTouchStart:function(e){E||"function"!==typeof O||O(e),E&&N.props&&"function"===typeof N.props.onTouchStart&&N.props.onTouchStart(e),!z&&L||c.isLocalURL(M)&&g(A,M,I,{priority:!0})}};if(!E||b||"a"===N.type&&!("href"in N.props)){var F="undefined"!==typeof _?_:A&&A.locale,G=A&&A.isLocaleDomain&&f.getDomainLocale(I,F,A.locales,A.domainLocales);W.href=G||p.addBasePath(l.addLocale(I,F,A&&A.defaultLocale))}return E?a.default.cloneElement(N,W):a.default.createElement("a",Object.assign({},P,W),n)}));t.default=v,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,s=e.disabled||!a,u=r(o.useState(!1),2),d=u[0],f=u[1],p=r(o.useState(null),2),h=p[0],g=p[1];o.useEffect((function(){if(a){if(s||d)return;if(h&&h.tagName){var e=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=l.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(r&&(t=c.get(r)))return t;var o=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:i,elements:o},l.push(n),c.set(n,t),t}(n),o=r.id,i=r.observer,a=r.elements;return a.set(e,t),i.observe(e),function(){if(a.delete(e),i.unobserve(e),0===a.size){i.disconnect(),c.delete(o);var t=l.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&l.splice(t,1)}}}(h,(function(e){return e&&f(e)}),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!d){var r=i.requestIdleCallback((function(){return f(!0)}));return function(){return i.cancelIdleCallback(r)}}}),[h,s,n,t,d]);var v=o.useCallback((function(){f(!1)}),[]);return[g,d,v]};var o=n(7294),i=n(9311),a="function"===typeof IntersectionObserver,c=new Map,l=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var r=(0,n(2648).Z)(n(7294)),o=r.default.createContext(null);t.AppRouterContext=o;var i=r.default.createContext(null);t.LayoutRouterContext=i;var a=r.default.createContext(null);t.GlobalLayoutRouterContext=a;var c=r.default.createContext(null);t.TemplateContext=c},2125:function(e,t,n){"use strict";n.d(t,{qG:function(){return l}});var r=n(5893),o=n(7294),i=n(7080),a=n(5697),c=n.n(a),l=(0,o.createContext)(),s=function(e){var t=e.children,n=(0,o.useReducer)(i.Ye,{id:null,currentPage:null,index:null,currentIndex:null,visits:[{}]}),a=n[0],c=n[1];return(0,r.jsxs)(l.Provider,{value:{creep:a,creepDispatch:c},children:[" ",t]})};s.propTypes={children:c().array},t.ZP=s},2994:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(2125),o=n(7294);function i(){return(0,o.useContext)(r.qG)}},4655:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){r(e,t,n[t])}))}return e}n.r(t),n.d(t,{default:function(){return S}});var i=n(5893),a=n(7294),c=n(5697),l=n.n(c),s=n(2125),u=n(1664),d=n.n(u),f=n(5154),p=n(2994),h=n(4461),g=n.n(h);function v(){var e="isthisthereallife",t=(0,p.Z)(),n=t.creep.currentPageType,r=t.creep.currentPage;return"project"===n&&(e=r),(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(d(),{href:"/",children:(0,i.jsxs)("div",{className:g().navbar,children:[(0,i.jsx)("span",{children:"home"!==n?(0,i.jsx)(d(),{href:"/",children:(0,i.jsx)(f._HU,{className:g().icon})}):(0,i.jsx)(i.Fragment,{})}),(0,i.jsx)("h1",{children:e}),(0,i.jsx)("span",{})]})})})}var m=n(7460),y=n.n(m),b={src:"/pages//_next/static/media/Copyleft_white.ea8474d3.svg",height:197,width:197},x=n(5675),j=n.n(x);function w(){var e,t,n=(0,p.Z)(),r=n.creep.currentPageType,o=n.creep.currentIndex,c=(0,a.useState)(!1),l=c[0],s=c[1];switch((0,a.useEffect)((function(){s("project"===r)}),[r,o]),o){case 10:e=(0,i.jsx)(d(),{href:"/projects/Spaced",children:(0,i.jsx)(f.x_l,{className:y().icon,alt:"Arrow left"})}),t=(0,i.jsx)(d(),{href:"/projects/TropesBingo",children:(0,i.jsx)(f.Z1Y,{className:y().icon})});break;case 11:e=(0,i.jsx)(d(),{href:"/projects/SVTpk",children:(0,i.jsx)(f.x_l,{className:y().icon})}),t=(0,i.jsx)(d(),{href:"/projects/Murvel",children:(0,i.jsx)(f.Z1Y,{className:y().icon})});break;case 12:e=(0,i.jsx)(d(),{href:"/projects/TropesBingo",children:(0,i.jsx)(f.x_l,{className:y().icon})}),t=(0,i.jsx)(d(),{href:"/projects/Webshop",children:(0,i.jsx)(f.Z1Y,{className:y().icon})});break;case 13:e=(0,i.jsx)(d(),{href:"/projects/Murvel",children:(0,i.jsx)(f.x_l,{className:y().icon})}),t=(0,i.jsx)(d(),{href:"/projects/Pokertimer",children:(0,i.jsx)(f.Z1Y,{className:y().icon})});break;case 14:e=(0,i.jsx)(d(),{href:"/projects/Webshop",children:(0,i.jsx)(f.x_l,{className:y().icon})}),t=(0,i.jsx)(d(),{href:"/projects/Spaced",children:(0,i.jsx)(f.Z1Y,{className:y().icon})});break;case 15:e=(0,i.jsx)(d(),{href:"/projects/Pokertimer",children:(0,i.jsx)(f.x_l,{className:y().icon})}),t=(0,i.jsx)(d(),{href:"/projects/SVTpk",children:(0,i.jsx)(f.Z1Y,{className:y().icon})});break;case 16:e=(0,i.jsx)(d(),{href:"/projects/Spaced",children:(0,i.jsx)(f.x_l,{className:y().icon})}),t=(0,i.jsx)(d(),{href:"/projects/SVTpk",children:(0,i.jsx)(f.Z1Y,{className:y().icon})})}return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:y().main,children:l?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:y().link,children:e}),(0,i.jsx)("div",{className:y().link,children:(0,i.jsx)(d(),{href:"/projects",children:(0,i.jsx)("h3",{children:"Projects"})})}),(0,i.jsx)("div",{className:y().link,children:t})]}):(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(j(),{height:"50px",width:"50px",src:b})})})})}n(9885);function _(e){var t=e.Component,n=e.pageProps;return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(s.ZP,{children:[(0,i.jsx)(v,{}),(0,i.jsx)(t,o({},n)),(0,i.jsx)(w,{})]})})}_.propTypes={Component:l().func,pageProps:l().object};var S=_},7080:function(e,t,n){"use strict";n.d(t,{Aw:function(){return r},Ye:function(){return o}});var r={APPEAR:"hello",PURGE:"purge",UPDATE:"update"};function o(e,t){var n=e;switch(t.type){case r.APPEAR:n=t.payload;break;case r.PURGE:n=null;break;case r.UPDATE:n=t.payload;break;default:return{newState:n}}return n}},7460:function(e){e.exports={main:"footer_main__GGfJy",icon:"footer_icon___k2f5",link:"footer_link__9X2w5"}},4461:function(e){e.exports={navbar:"navbar_navbar__8tj4O",icon:"navbar_icon__NMgNm"}},9885:function(){},5675:function(e,t,n){e.exports=n(8045)},1664:function(e,t,n){e.exports=n(8418)},2703:function(e,t,n){"use strict";var r=n(5268);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},5697:function(e,t,n){e.exports=n(2703)()},5268:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},5154:function(e,t,n){"use strict";n.d(t,{_HU:function(){return d},x_l:function(){return f},Z1Y:function(){return p},Eoi:function(){return h},jcU:function(){return g},B8i:function(){return v}});var r=n(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(o),a=function(){return a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},a.apply(this,arguments)},c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function l(e){return e&&e.map((function(e,t){return r.createElement(e.tag,a({key:t},e.attr),l(e.child))}))}function s(e){return function(t){return r.createElement(u,a({attr:a({},e.attr)},t),l(e.child))}}function u(e){var t=function(t){var n,o=e.attr,i=e.size,l=e.title,s=c(e,["attr","size","title"]),u=i||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,s,{className:n,style:a(a({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),l&&r.createElement("title",null,l),e.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(e){return t(e)})):t(o)}function d(e){return s({tag:"svg",attr:{viewBox:"0 0 256 512"},child:[{tag:"path",attr:{d:"M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"}}]})(e)}function f(e){return s({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"}}]})(e)}function p(e){return s({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"}}]})(e)}function h(e){return s({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M570.69,236.27,512,184.44V48a16,16,0,0,0-16-16H432a16,16,0,0,0-16,16V99.67L314.78,10.3C308.5,4.61,296.53,0,288,0s-20.46,4.61-26.74,10.3l-256,226A18.27,18.27,0,0,0,0,248.2a18.64,18.64,0,0,0,4.09,10.71L25.5,282.7a21.14,21.14,0,0,0,12,5.3,21.67,21.67,0,0,0,10.69-4.11l15.9-14V480a32,32,0,0,0,32,32H480a32,32,0,0,0,32-32V269.88l15.91,14A21.94,21.94,0,0,0,538.63,288a20.89,20.89,0,0,0,11.87-5.31l21.41-23.81A21.64,21.64,0,0,0,576,248.19,21,21,0,0,0,570.69,236.27ZM288,176a64,64,0,1,1-64,64A64,64,0,0,1,288,176ZM400,448H176a16,16,0,0,1-16-16,96,96,0,0,1,96-96h64a96,96,0,0,1,96,96A16,16,0,0,1,400,448Z"}}]})(e)}function g(e){return s({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M423.5 0C339.5.3 272 69.5 272 153.5V224H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48h-48v-71.1c0-39.6 31.7-72.5 71.3-72.9 40-.4 72.7 32.1 72.7 72v80c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-80C576 68 507.5-.3 423.5 0z"}}]})(e)}function v(e){return s({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M569.344 231.631C512.96 135.949 407.81 72 288 72c-28.468 0-56.102 3.619-82.451 10.409L152.778 10.24c-7.601-10.858-22.564-13.5-33.423-5.9l-13.114 9.178c-10.86 7.601-13.502 22.566-5.9 33.426l43.131 58.395C89.449 131.73 40.228 174.683 6.682 231.581c-.01.017-.023.033-.034.05-8.765 14.875-8.964 33.528 0 48.739 38.5 65.332 99.742 115.862 172.859 141.349L55.316 244.302A272.194 272.194 0 0 1 83.61 208.39l119.4 170.58h.01l40.63 58.04a330.055 330.055 0 0 0 78.94 1.17l-189.98-271.4a277.628 277.628 0 0 1 38.777-21.563l251.836 356.544c7.601 10.858 22.564 13.499 33.423 5.9l13.114-9.178c10.86-7.601 13.502-22.567 5.9-33.426l-43.12-58.377-.007-.009c57.161-27.978 104.835-72.04 136.81-126.301a47.938 47.938 0 0 0 .001-48.739zM390.026 345.94l-19.066-27.23c24.682-32.567 27.711-76.353 8.8-111.68v.03c0 23.65-19.17 42.82-42.82 42.82-23.828 0-42.82-19.349-42.82-42.82 0-23.65 19.17-42.82 42.82-42.82h.03c-24.75-13.249-53.522-15.643-79.51-7.68l-19.068-27.237C253.758 123.306 270.488 120 288 120c75.162 0 136 60.826 136 136 0 34.504-12.833 65.975-33.974 89.94z"}}]})(e)}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(3837),t(387)}));var n=e.O();_N_E=n}]);