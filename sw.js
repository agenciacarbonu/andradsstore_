const CACHE_NAME = 'v1_cache';
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './paginas/inicio.html',
  './paginas/produtos.html',
  './paginas/contatos.html',
  './paginas/sobre.html',
];

// Instala o service worker e guarda os arquivos no cache do celular
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

// Responde usando o cache quando estiver sem internet
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});