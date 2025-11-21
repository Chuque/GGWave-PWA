const CACHE = 'hello-pwa-cache-v1';
const FILES = [
    './',
    './index.html',
    './manifest.json',
    './bacground-0.png',
    './favicon.ico',
    './favicon.png',
    './style.css',
    './waver.data',
    './waver.js',
    './waver.wasm'
];


self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE).then(cache => cache.addAll(FILES))
    );
});


self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(cached => {
            return cached; // nunca faz fetch
        })
    );
});