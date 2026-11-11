const C='cancionero-1794402536';
const CORE=['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png','datos/cambios.json'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>Promise.all(CORE.map(u=>c.add(new Request(u,{cache:'reload'})).catch(()=>{})))));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))));self.clients.claim()});
// Página y cambios: primero internet (para recibir actualizaciones), si no hay, lo guardado.
self.addEventListener('fetch',e=>{
  const req=e.request; if(req.method!=='GET') return;
  const url=new URL(req.url); if(url.origin!==location.origin) return;
  const fresh=req.mode==='navigate'||url.pathname.endsWith('.json')||url.pathname.endsWith('.html');
  if(fresh){
    e.respondWith(fetch(req,{cache:'no-store'}).then(res=>{if(res.ok){const cp=res.clone();caches.open(C).then(c=>c.put(url.pathname.endsWith('.json')?new Request(url.pathname):req,cp))}return res})
      .catch(()=>caches.match(url.pathname.endsWith('.json')?new Request(url.pathname):req,{ignoreSearch:true}).then(r=>r||caches.match('index.html'))));
    return;
  }
  e.respondWith(caches.match(req).then(r=>r||fetch(req).then(res=>{const cp=res.clone();caches.open(C).then(c=>c.put(req,cp));return res})));
});
