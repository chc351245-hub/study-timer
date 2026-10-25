// Minimal Service Worker to enable PWA installability
const CACHE_NAME = 'focustime-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Let the browser handle standard requests
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
