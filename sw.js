/* Eigener Cache-Name mit Präfix "seidenschluessel-", damit sich die Apps unter derselben Webadresse nicht gegenseitig aufräumen. */
const C="seidenschluessel-v18";const CORE=["./","index.html","familie-sync.js","manifest.webmanifest","icon-192.png","icon-512.png","bilder/tuer01.jpg","bilder/tuer02.jpg","bilder/tuer03.jpg","bilder/tuer04.jpg","bilder/tuer05.jpg","bilder/tuer06.jpg","bilder/tuer07.jpg","bilder/tuer08.jpg","bilder/tuer09.jpg","bilder/tuer10.jpg","bilder/tuer11.jpg","bilder/tuer12.jpg","bilder/tuer13.jpg","bilder/tuer14.jpg","bilder/tuer15.jpg","bilder/tuer16.jpg","bilder/tuer17.jpg"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()));});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith("seidenschluessel-")&&k!==C).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
/* Nur eigene Dateien cachen – Anfragen an den Familienspeicher gehen immer frisch ins Netz. */
self.addEventListener("fetch",e=>{const r=e.request;if(r.method!=="GET"||new URL(r.url).origin!==location.origin)return;
 e.respondWith(fetch(r).then(res=>{const copy=res.clone();caches.open(C).then(c=>c.put(r,copy)).catch(()=>{});return res;}).catch(()=>caches.match(r).then(m=>m||caches.match("index.html"))));});
