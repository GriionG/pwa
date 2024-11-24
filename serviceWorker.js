const staticDevCoffee = "dev-coffee-site-v1"
const assets = [
  "/",
  "/index.html",
  "/css/style1.css",
  "/js/app.js",
  "/img/Logo-goal.png",
  "/img/Liga-premier-logo.png",
  "/img/liga-MX-logo.png",
  "/img/foto-7.jpg",
  "/img/foto-20.jpg",
  "/img/foto-30.png",
  "/img/foto-21.jpeg",
  "/img/foto-27.png",
  "/img/payment-method.png",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})
