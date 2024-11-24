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

// Manejo de las solicitudes de fetch
self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request)
            .then((response) => {
                const responseClone = response.clone();
                caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, responseClone);
                });
                return response;
            })
            .catch(() => {
                return caches.match(event.request);
            })
    );
});

// Escuchar los eventos de 'push' para las notificaciones
self.addEventListener('push', (event) => {
    let notificationData = event.data.json();
    const options = {
        body: notificationData.body,
        icon: notificationData.icon,
        badge: notificationData.badge,
    };

    event.waitUntil(
        self.registration.showNotification(notificationData.title, options)
    );
});

console.log("This message is from the service worker");



