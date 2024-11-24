const checkPermission = () => {
  if (!('serviceWorker' in navigator)) {
    throw new Error("No support for service worker!");
  }

  if (!('Notification' in window)) {
    throw new Error("No support for notification API");
  }
};

const registerSW = async () => {
  const registration = await navigator.serviceWorker.register('service-worker.js');
  return registration;
};

const requestNotificationPermission = async () => {
  const permission = await Notification.requestPermission();

  if (permission !== 'granted') {
    throw new Error("Notification permission not granted");
  }
};

const main = async () => {
  checkPermission();
  await requestNotificationPermission();
  const reg = await registerSW();

  // Mostrar notificación desde la página
  if (Notification.permission === 'granted') {
    new Notification("¡Nuevas promociones!", {
      body: "¡No te pierdas nuestras ofertas!",
      icon: "img/bundesliga-logo.png", // Asegúrate de tener un ícono.
      vibrate: [100, 50, 100], // Vibración para dispositivos móviles.
    });
  }
};

main();

