if(!self.define){let e,r={};const s=(s,i)=>(s=new URL(s+".js",i).href,r[s]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=r,document.head.appendChild(e)}else e=s,importScripts(s),r()})).then((()=>{let e=r[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,n)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(r[l])return;let o={};const c=e=>s(e,l),u={module:{uri:l},exports:o,require:c};r[l]=Promise.all(i.map((e=>u[e]||c(e)))).then((e=>(n(...e),o)))}}define(["./workbox-5b385ed2"],(function(e){"use strict";e.setCacheNameDetails({prefix:"project"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.e12c047c.css",revision:null},{url:"/css/chunk-vendors.88bffdcf.css",revision:null},{url:"/img/calculator.9409e4e4.png",revision:null},{url:"/img/logo.c5e99b2e.jpg",revision:null},{url:"/img/logo_3.382571a4.png",revision:null},{url:"/img/orders.12b02afe.png",revision:null},{url:"/img/xlsx.dc85d04b.png",revision:null},{url:"/index.html",revision:"9c038f2fe1b01491e092da4182eb3dfb"},{url:"/js/app.605ba502.js",revision:null},{url:"/js/chunk-vendors.aa5c33e6.js",revision:null},{url:"/logo.jpg",revision:"71b3147b68cb2b57936e15aaa9f6e917"},{url:"/manifest.json",revision:"c3b4eb26c8b7befb2d344975a6cda609"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
