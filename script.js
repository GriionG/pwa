const button = document.getElementById("notifications");
button.addEventListener("click",() => {
    Notification.requestPermission().then((result) => {
        if (result === "granted"){
            randomNotification();
        }
    })
});

const datos = [
    { name: "Nuevas Ofertas!", author: "GearGoal"" },
];

function randomNotification(){
    const randomItem = Math.floor(Math.random() * datos.length);
    const notiTitle = datos[randomItem].name;
    const notiBody = `Created by ${datos[randomItem].author}`;
    const notiImg = `img/bundesliga-logo.png`;

    const options = {
        body: notiBody,
        icon: notiImg,
    };

    // Enviar la notificación desde el service worker
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then(function(registration) {
            registration.showNotification(notiTitle, options);
        });
    }

   setTimeout(randomNotification, 3600000); // 1 hora en milisegundos  
}

// Registrar el Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('serviceWorker.js')
    .then((registration) => {
      console.log('Service Worker registrado con éxito:', registration);
    })
    .catch((error) => {
      console.error('Error al registrar el Service Worker:', error);
    });
}


