const staticDevCoffee = "dev-coffee-site-v1"
const assets = [
  "/",
  "/index.html",
  "/css/style1.css",
  "/js/app.js",
  "/img/Logo-goal.png",
  "/img/bundesliga-logo.png",
  "/img/col.png",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})

// service-worker.js
self.addEventListener('push', function(event) {
  const data = event.data ? event.data.text() : 'Notificación sin datos';
  const options = {
    body: data,
    icon: '/img/Logo-goal.png',
    badge: '/img/bundesliga-logo.png'
  };
  event.waitUntil(
    self.registration.showNotification('Notificación Push', options)
  );
});

