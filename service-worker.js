"use strict";var precacheConfig=[["/Portfolio/b71e0538bffd3cde8386.worker.js","dd463614f9b1b7677930c611aec4a593"],["/Portfolio/index.html","cb1cc1e96eefd3836606b0b30f9c9ce5"],["/Portfolio/static/css/main.55241a2c.css","9c6b3ed95aee5dd630eab855f50b9327"],["/Portfolio/static/js/0.d0d8b26c.chunk.js","d77d9e15282303194072600b7b7bf63c"],["/Portfolio/static/js/1.56d80f07.chunk.js","eaa43dae3ff9971bccb65b81ec3038d7"],["/Portfolio/static/js/main.3d9568e2.js","fb1d3c4334a600082ebb67a8e2e9111b"],["/Portfolio/static/media/Resume-2018.371e1adc.docx","371e1adceed88b6c7d760ea566e13807"],["/Portfolio/static/media/Resume-2018.415e7d45.pdf","415e7d454cab4b40a218c8a22282ff52"],["/Portfolio/static/media/angular-icon.a31bec43.svg","a31bec43e77b17be62d9e899ce260650"],["/Portfolio/static/media/arrow-circle-down.5596c7c5.svg","5596c7c564719a7a80893b7000ec5a9e"],["/Portfolio/static/media/express-icon.d638bd34.png","d638bd34b425dec39792d4a81189eddf"],["/Portfolio/static/media/external-link.06cc4d5a.svg","06cc4d5ae3ac49bfaa4434dc5ba6c888"],["/Portfolio/static/media/mongo-icon.e5eee315.png","e5eee315a17de0d7f56117077eb71fa9"],["/Portfolio/static/media/nodejs-icon.f7337d33.png","f7337d339216d05c1551688efb13a830"],["/Portfolio/static/media/react-icon.6bd54ce5.svg","6bd54ce5d900ecb55c6e5618f955294a"],["/Portfolio/static/media/todos-plus.73e05270.png","73e0527075a2631e01aad21f3bcdccef"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,r){var a=new URL(e);return r&&a.pathname.match(r)||(a.search+=(a.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),a.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],r=new URL(t,self.location),a=createCacheKey(r,hashParamName,n,/\.\w{8}\./);return[r.toString(),a]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,r),e=urlsToCacheKeys.has(n));var a="/Portfolio/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(a,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});