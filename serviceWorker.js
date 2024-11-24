const CACHE_NAME = "dev-coffee-site-v1";
const assets = [
  "/",
  "/index.html",
  "/css/style1.css",
  "/js/app.js",
  "/img/Logo-goal.png",
  "/img/bundesliga-logo.png",
  "/img/col.png",
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(assets).catch((err) => {
        console.error("Error caching assets:", err);
      });
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return (
        cachedResponse ||
        fetch(event.request)
          .then((response) => {
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseClone);
            });
            return response;
          })
          .catch(() => {
            return new Response("Offline content not available", {
              status: 503,
              statusText: "Service Unavailable",
            });
          })
      );
    })
  );
});

self.addEventListener("push", (event) => {
  let notificationData = {};
  if (event.data) {
    notificationData = event.data.json();
  }

  const options = {
    body: notificationData.body || "Default body content",
    icon: notificationData.icon || "/img/Logo-goal.png",
    badge: notificationData.badge || "/img/bundesliga-logo.png",
  };

  event.waitUntil(
    self.registration.showNotification(
      notificationData.title || "Default Title",
      options
    )
  );
});

console.log("Service Worker is running");
