"use strict";var precacheConfig=[["/Portfolio/b71e0538bffd3cde8386.worker.js","dd463614f9b1b7677930c611aec4a593"],["/Portfolio/index.html","8202c1b44365f8ede7e9921292e28d46"],["/Portfolio/static/css/main.f0209a4b.css","d744c9ff8c27ef06ef56a1ca1f902974"],["/Portfolio/static/js/0.6f039574.chunk.js","8360f77523a0609f11e3cf4e908849a4"],["/Portfolio/static/js/1.f73cb568.chunk.js","ed27445a2329c364e6dbdf92d6422429"],["/Portfolio/static/js/main.6e420400.js","e301c24dace63a92493468fcfa9e152b"],["/Portfolio/static/media/Product Sans Bold.dba0c688.ttf","dba0c688b8d5ee09a1e214aebd5d25e4"],["/Portfolio/static/media/Product Sans Regular.eae9c18c.ttf","eae9c18cee82a8a1a52e654911f8fe83"],["/Portfolio/static/media/Resume-2018.371e1adc.docx","371e1adceed88b6c7d760ea566e13807"],["/Portfolio/static/media/Resume-2018.415e7d45.pdf","415e7d454cab4b40a218c8a22282ff52"],["/Portfolio/static/media/angular-icon.a31bec43.svg","a31bec43e77b17be62d9e899ce260650"],["/Portfolio/static/media/arrow-circle-down.5596c7c5.svg","5596c7c564719a7a80893b7000ec5a9e"],["/Portfolio/static/media/express-icon.d638bd34.png","d638bd34b425dec39792d4a81189eddf"],["/Portfolio/static/media/external-link.06cc4d5a.svg","06cc4d5ae3ac49bfaa4434dc5ba6c888"],["/Portfolio/static/media/mongo-icon.e5eee315.png","e5eee315a17de0d7f56117077eb71fa9"],["/Portfolio/static/media/nodejs-icon.f7337d33.png","f7337d339216d05c1551688efb13a830"],["/Portfolio/static/media/quick-poll.9df4ed76.png","9df4ed76e291808699146d0ee650ba00"],["/Portfolio/static/media/react-icon.6bd54ce5.svg","6bd54ce5d900ecb55c6e5618f955294a"],["/Portfolio/static/media/todos-plus.73e05270.png","73e0527075a2631e01aad21f3bcdccef"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/Portfolio/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});