const V='cpp-v3',A=['./','index.html','offline.html','manifest.webmanifest','css/styles.css','js/db.js','js/templates.js','js/signature.js','js/app.js','icons/icon-192.png','icons/icon-512.png'],bc=new BroadcastChannel('cpp');
self.addEventListener('install',e=>e.waitUntil(caches.open(V).then(c=>c.addAll(A)).then(()=>bc.postMessage({t:'update-ready'}))));
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()).then(()=>bc.postMessage({t:'activated',v:V})))});
self.addEventListener('message',e=>{if(e.data==='SKIP_WAITING')self.skipWaiting()});
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET')return;
if(r.mode==='navigate'){e.respondWith(fetch(r).then(x=>{const c=x.clone();caches.open(V).then(h=>h.put(r,c));return x}).catch(()=>caches.match(r,{ignoreSearch:true}).then(m=>m||caches.match('index.html')).then(m=>m||caches.match('offline.html'))));return}
e.respondWith(caches.match(r).then(m=>m||fetch(r).then(x=>{const c=x.clone();caches.open(V).then(h=>h.put(r,c));return x}).catch(()=>caches.match('offline.html'))))});