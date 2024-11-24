// main.js
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
    .then(reg => console.log('SW registrado'))
    .catch(err => console.error('Error SW', err));

  Notification.requestPermission().then(permission => {
    if (permission === "granted") {
      console.log("Permiso para notificaciones otorgado");
    }
  });
}
