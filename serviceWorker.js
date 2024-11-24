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

// Aquí se gestionan las notificaciones push
self.addEventListener('push', event => {
  const options = {
    body: event.data.text(),
    icon: '/img/bundesliga-logo.png', // O el ícono de tu elección
    badge: '/img/Logo-goal.png', // O un ícono para la notificación
  };

  event.waitUntil(
    self.registration.showNotification("Nueva Notificación", options)
  );
});

console.log("This message is from the service worker");



