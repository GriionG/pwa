const checkPermission = () => {
  if (!('serviceWorker' in navigator)) {
    throw new Error ("No support for service worker!")
  }

  if(!('Notification' in window)){
    throw new Error ("No support fro notification API");
  }
}

const registerSW = async () => {
  const registration = await navigator.serviceWorker.register('serviceWorker.js');
  return registration;
}

const requestNotificationPermission = async () => {
  const permission = await Notificacion.requestPermission();

  if (permission !== 'granted'){
    throw new Error("Notification permission not granted")
  }else{
    new Notification("Hello world")
  }
}

checkPermission()
registerSW()
requestNotificationPermission()