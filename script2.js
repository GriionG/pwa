const checkPermission = () => {
    if (!('serviceWorker' in navigator)) {
      console.error("No support for service workers");
      return;
    }
  
    if (!('Notification' in window)) {
      console.error("No support for notifications API");
      return;
    }
  };
  
  const registerSW = async () => {
    try {
      await navigator.serviceWorker.register('serviceWorker.js');
      console.log("Service Worker registrado");
    } catch (err) {
      console.error("Error al registrar el Service Worker:", err);
    }
  };
  
  const requestNotificationPermission = async () => {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      new Notification("¡Notificaciones activadas!");
    } else {
      console.warn("Permisos de notificación denegados");
    }
  };
  
  document.getElementById("notify-btn").addEventListener("click", () => {
    checkPermission();
    registerSW();
    requestNotificationPermission();
  });
  