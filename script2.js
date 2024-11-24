const datos = [
    { name: "Nuevas Ofertas!", author: "GearGoal", img: "img/bundesliga-logo.png" },
    { name: "Promoción Especial!", author: "SportDeals", img: "img/promo-logo.png" }
];

const checkPermission = () => {
    if (!('serviceWorker' in navigator)) {
        console.error("No hay soporte para Service Workers");
        return;
    }

    if (!('Notification' in window)) {
        console.error("No hay soporte para la API de Notificaciones");
        return;
    }
};

const randomNotification = () => {
    const randomItem = Math.floor(Math.random() * datos.length);
    const notiTitle = datos[randomItem].name;
    const notiBody = `Autor: ${datos[randomItem].author}`;
    const notiImg = datos[randomItem].img;

    const options = {
        body: notiBody,
        icon: notiImg,
    };

    if (Notification.permission === 'granted') {
        new Notification(notiTitle, options);
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
        randomNotification();
    } else {
        console.warn("Permisos de notificación denegados");
    }
};

document.getElementById("notify-btn").addEventListener("click", () => {
    checkPermission();
    registerSW();
    requestNotificationPermission();
});
