(self.webpackChunkminimal_blog=self.webpackChunkminimal_blog||[]).push([[425],{67228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.default=e.exports,e.exports.__esModule=!0},23646:function(e,t,r){var n=r(67228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.default=e.exports,e.exports.__esModule=!0},69100:function(e,t,r){var n=r(99489),a=r(57067);function o(t,r,i){return a()?(e.exports=o=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=o=function(e,t,r){var a=[null];a.push.apply(a,t);var o=new(Function.bind.apply(e,a));return r&&n(o,r.prototype),o},e.exports.default=e.exports,e.exports.__esModule=!0),o.apply(null,arguments)}e.exports=o,e.exports.default=e.exports,e.exports.__esModule=!0},57067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},46860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},98206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},319:function(e,t,r){var n=r(23646),a=r(46860),o=r(60379),i=r(98206);e.exports=function(e){return n(e)||a(e)||o(e)||i()},e.exports.default=e.exports,e.exports.__esModule=!0},60379:function(e,t,r){var n=r(67228);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},47452:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return O}});var n=r(67294),a=r(70977),o=r(9983),i=r(46725),s=r(61796),c=r(61930),u=r(77710),p=r(6125),l=r(63366),d=r(64983),f=["components"],m={_frontmatter:{}};function b(e){var t=e.components,r=(0,l.Z)(e,f);return(0,d.mdx)("wrapper",Object.assign({},m,r,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Daiku")," (He/Him). iOS developer since 2010, he worked with several languages and platforms, including Android, ReactJS and more. He's pasionate about his work and teaching others. His ",(0,d.mdx)("a",{parentName:"p",href:"https://github.com/daiku60"},"Github"),". 🚀"))}b.isMDXComponent=!0;var x=["components"],g={_frontmatter:{}};function w(e){var t=e.components,r=(0,l.Z)(e,x);return(0,d.mdx)("wrapper",Object.assign({},g,r,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("p",null,"Pier just Landed! Any questions? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."))}w.isMDXComponent=!0;var y={daiku:{image:n.createElement(p.S,{width:120,height:120,style:{borderRadius:"100%"},alt:"Profile picture of Daiku",src:"../texts/bio/daiku/img.jpg",__imageData:r(99167)}),text:n.createElement(b,null)},pier:{image:n.createElement(p.S,{width:120,height:120,style:{borderRadius:"100%"},alt:"Profile picture of Pier",src:"../texts/bio/pier/img.jpg",__imageData:r(53306)}),text:n.createElement(w,null)}},h=function(e){var t=e.author;return y[t]&&n.createElement(o.kC,null,n.createElement(o.xu,{sx:{minWidth:130,margin:"20px 0"}},y[t].image),n.createElement(o.xu,null,y[t].text))},v=function(e){var t=e.post.parent.frontmatter.author;return t?(0,a.tZ)("footer",{sx:{boxSizing:"border-box",display:"flex",justifyContent:"space-between",mt:[6],color:"secondary",a:{variant:"links.secondary"},flexDirection:["column","column","row"],variant:"dividers.top"}},(0,a.tZ)(h,{author:t})):null},_=["32px","16px","8px","4px"].map((function(e){return"rgba(0, 0, 0, 0.15) 0px "+e+" "+e+" 0px"})),j=function(e){var t,r,p,l=e.data.post;return(0,a.tZ)(s.Z,null,(0,a.tZ)(u.Z,{title:l.title,description:l.description?l.description:l.excerpt,image:l.banner?null===(t=l.banner)||void 0===t||null===(r=t.childImageSharp)||void 0===r||null===(p=r.resize)||void 0===p?void 0:p.src:void 0,pathname:l.slug,canonicalUrl:l.canonicalUrl}),(0,a.tZ)(o.X6,{as:"h1",variant:"styles.h1"},l.title),(0,a.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,a.tZ)("time",null,l.date),l.tags&&(0,a.tZ)(n.Fragment,null," — ",(0,a.tZ)(c.Z,{tags:l.tags})),l.timeToRead&&" — ",l.timeToRead&&(0,a.tZ)("span",null,l.timeToRead," min read")),(0,a.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],boxShadow:_.join(", ")},variant:"layout.content"}},(0,a.tZ)(i.MDXRenderer,null,l.body)),(0,a.tZ)(v,{post:l}))};var O=function(e){var t=Object.assign({},e);return n.createElement(j,t)}},46725:function(e,t,r){var n=r(93395);e.exports={MDXRenderer:n}},93395:function(e,t,r){var n=r(69100),a=r(319),o=r(59713),i=r(37316),s=["scope","children"];function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=r(67294),l=r(64983).mdx,d=r(89480).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,o=i(e,s),c=d(t),f=p.useMemo((function(){if(!r)return null;var e=u({React:p,mdx:l},c),t=Object.keys(e),o=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(a(t),[""+r])).apply(void 0,[{}].concat(a(o)))}),[r,t]);return p.createElement(f,u({},o))}},53306:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/f59eb60de83d287229102563054976fd/a8b52/img.png","srcSet":"/static/f59eb60de83d287229102563054976fd/53973/img.png 30w,\\n/static/f59eb60de83d287229102563054976fd/7ab40/img.png 60w,\\n/static/f59eb60de83d287229102563054976fd/a8b52/img.png 120w,\\n/static/f59eb60de83d287229102563054976fd/87351/img.png 240w","sizes":"(min-width: 120px) 120px, 100vw"},"sources":[{"srcSet":"/static/f59eb60de83d287229102563054976fd/bde72/img.webp 30w,\\n/static/f59eb60de83d287229102563054976fd/927d1/img.webp 60w,\\n/static/f59eb60de83d287229102563054976fd/507b0/img.webp 120w,\\n/static/f59eb60de83d287229102563054976fd/8d565/img.webp 240w","type":"image/webp","sizes":"(min-width: 120px) 120px, 100vw"}]},"width":120,"height":120}')},99167:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#e8e8d8","images":{"fallback":{"src":"/static/f094b963eeaa75248f6aa48a1e86fbbb/73bb6/img.jpg","srcSet":"/static/f094b963eeaa75248f6aa48a1e86fbbb/3c559/img.jpg 30w,\\n/static/f094b963eeaa75248f6aa48a1e86fbbb/93848/img.jpg 60w,\\n/static/f094b963eeaa75248f6aa48a1e86fbbb/73bb6/img.jpg 120w,\\n/static/f094b963eeaa75248f6aa48a1e86fbbb/f9edd/img.jpg 240w","sizes":"(min-width: 120px) 120px, 100vw"},"sources":[{"srcSet":"/static/f094b963eeaa75248f6aa48a1e86fbbb/bde72/img.webp 30w,\\n/static/f094b963eeaa75248f6aa48a1e86fbbb/927d1/img.webp 60w,\\n/static/f094b963eeaa75248f6aa48a1e86fbbb/507b0/img.webp 120w,\\n/static/f094b963eeaa75248f6aa48a1e86fbbb/8d565/img.webp 240w","type":"image/webp","sizes":"(min-width: 120px) 120px, 100vw"}]},"width":120,"height":120}')}}]);
//# sourceMappingURL=component---src-lekoarts-gatsby-theme-minimal-blog-core-templates-post-query-tsx-3ab1688abcf2b94fcf99.js.map