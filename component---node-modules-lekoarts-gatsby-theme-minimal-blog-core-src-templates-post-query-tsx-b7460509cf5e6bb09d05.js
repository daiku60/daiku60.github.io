(self.webpackChunkminimal_blog=self.webpackChunkminimal_blog||[]).push([[688],{49174:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return y}});var o=r(36459),n=r(87462),u=r(67294),s=r(70977),l=r(90744),c=r(21955),i=r(91896),p=r(86799),a=r(42557);var f=t=>{let{post:e}=t;return null};const d=["32px","16px","8px","4px"].map((t=>"rgba(0, 0, 0, 0.15) 0px "+t+" "+t+" 0px"));var x=t=>{var e,r,o;let{data:{post:n}}=t;return(0,s.tZ)(i.Z,null,(0,s.tZ)(a.Z,{title:n.title,description:n.description?n.description:n.excerpt,image:n.banner?null===(e=n.banner)||void 0===e||null===(r=e.childImageSharp)||void 0===r||null===(o=r.resize)||void 0===o?void 0:o.src:void 0,pathname:n.slug,canonicalUrl:n.canonicalUrl}),(0,s.tZ)(l.X6,{as:"h1",variant:"styles.h1"},n.title),(0,s.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,s.tZ)("time",null,n.date),n.tags&&(0,s.tZ)(u.Fragment,null," — ",(0,s.tZ)(p.Z,{tags:n.tags})),n.timeToRead&&" — ",n.timeToRead&&(0,s.tZ)("span",null,n.timeToRead," min read")),(0,s.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],boxShadow:d.join(", ")},variant:"layout.content"}},(0,s.tZ)(c.MDXRenderer,null,n.body)),(0,s.tZ)(f,{post:n}))};var y=function(t){let e=(0,n.Z)({},((0,o.Z)(t),t));return u.createElement(x,e)}},86799:function(t,e,r){"use strict";var o=r(64572),n=r(70977),u=r(67294),s=r(71082),l=r(23494),c=r(89706);function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}e.Z=t=>{let{tags:e}=t;const{tagsPath:r,basePath:p}=(0,l.Z)();return(0,n.tZ)(u.Fragment,null,e.map(((t,e)=>(0,n.tZ)(u.Fragment,{key:t.slug},!!e&&", ",(0,n.tZ)(s.Link,{sx:t=>{var e;return function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){(0,o.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},null===(e=t.styles)||void 0===e?void 0:e.a)},to:(0,c.Z)("/"+p+"/"+r+"/"+t.slug)},t.name)))))}},21955:function(t,e,r){const o=r(47927);t.exports={MDXRenderer:o}},47927:function(t,e,r){var o=r(861),n=r(3515),u=r(38416),s=r(70215);const l=["scope","children"];function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){u(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}const p=r(67294),{mdx:a}=r(64983),{useMDXScope:f}=r(32174);t.exports=function(t){let{scope:e,children:r}=t,u=s(t,l);const c=f(e),d=p.useMemo((()=>{if(!r)return null;const t=i({React:p,mdx:a},c),e=Object.keys(t),u=e.map((e=>t[e]));return n(Function,["_fn"].concat(e,[""+r])).apply(void 0,[{}].concat(o(u)))}),[r,e]);return p.createElement(d,i({},u))}},73897:function(t){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,o=new Array(e);r<e;r++)o[r]=t[r];return o},t.exports.__esModule=!0,t.exports.default=t.exports},63405:function(t,e,r){var o=r(73897);t.exports=function(t){if(Array.isArray(t))return o(t)},t.exports.__esModule=!0,t.exports.default=t.exports},3515:function(t,e,r){var o=r(6015),n=r(69617);function u(e,r,s){return n()?(t.exports=u=Reflect.construct.bind(),t.exports.__esModule=!0,t.exports.default=t.exports):(t.exports=u=function(t,e,r){var n=[null];n.push.apply(n,e);var u=new(Function.bind.apply(t,n));return r&&o(u,r.prototype),u},t.exports.__esModule=!0,t.exports.default=t.exports),u.apply(null,arguments)}t.exports=u,t.exports.__esModule=!0,t.exports.default=t.exports},38416:function(t,e,r){var o=r(64062);t.exports=function(t,e,r){return(e=o(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t},t.exports.__esModule=!0,t.exports.default=t.exports},69617:function(t){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}},t.exports.__esModule=!0,t.exports.default=t.exports},79498:function(t){t.exports=function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)},t.exports.__esModule=!0,t.exports.default=t.exports},42281:function(t){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.__esModule=!0,t.exports.default=t.exports},70215:function(t,e,r){var o=r(7071);t.exports=function(t,e){if(null==t)return{};var r,n,u=o(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(n=0;n<s.length;n++)r=s[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(u[r]=t[r])}return u},t.exports.__esModule=!0,t.exports.default=t.exports},7071:function(t){t.exports=function(t,e){if(null==t)return{};var r,o,n={},u=Object.keys(t);for(o=0;o<u.length;o++)r=u[o],e.indexOf(r)>=0||(n[r]=t[r]);return n},t.exports.__esModule=!0,t.exports.default=t.exports},861:function(t,e,r){var o=r(63405),n=r(79498),u=r(86116),s=r(42281);t.exports=function(t){return o(t)||n(t)||u(t)||s()},t.exports.__esModule=!0,t.exports.default=t.exports},95036:function(t,e,r){var o=r(18698).default;t.exports=function(t,e){if("object"!==o(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)},t.exports.__esModule=!0,t.exports.default=t.exports},64062:function(t,e,r){var o=r(18698).default,n=r(95036);t.exports=function(t){var e=n(t,"string");return"symbol"===o(e)?e:String(e)},t.exports.__esModule=!0,t.exports.default=t.exports},18698:function(t){function e(r){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(r)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},86116:function(t,e,r){var o=r(73897);t.exports=function(t,e){if(t){if("string"==typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(t,e):void 0}},t.exports.__esModule=!0,t.exports.default=t.exports},36459:function(t,e,r){"use strict";function o(t){if(null==t)throw new TypeError("Cannot destructure "+t)}r.d(e,{Z:function(){return o}})}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-b7460509cf5e6bb09d05.js.map