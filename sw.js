// Service worker minimal — cukup untuk memenuhi syarat "installable PWA"
// (butuh fetch handler aktif) tanpa caching offline yang rumit.
self.addEventListener('install', (e) => { self.skipWaiting(); });
self.addEventListener('activate', (e) => { self.clients.claim(); });
self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).catch(() => new Response('Sedang offline', { status: 503 }))
  );
});
