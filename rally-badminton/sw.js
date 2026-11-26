self.addEventListener('install', event => event.waitUntil(self.skipWaiting()));
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', event => {
  if (event.request.mode === 'navigate') {
    // The bookmark page preserves both query parameters and the browser-only URL fragment.
    event.respondWith(fetch(new URL('index.html', self.registration.scope), { cache: 'no-store' })
      .catch(() => Response.redirect('https://kaipairally.cn/' + new URL(event.request.url).search, 302)));
  }
});
