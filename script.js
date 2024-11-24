const button = document.getElementById("notifications");
button.addEventListener("click",() => {
    Notification.requestPermission().then((result) => {
        if (result === "granted"){
            randomNotification();
        }
    })
});

const datos = [
    { name: "NotiCript ¡Hora de Encriptar!", author: "Alex Salas", slug: "icon-128-128" },
];

function randomNotification(){
    const randomItem = Math.floor(Math.random() * datos.length);
    const notiTitle = datos[randomItem].name;
    const notiBody = `Created by ${datos[randomItem].author}`;
    const notiImg = `/challenge_encriptador_oracle/assets/${datos[randomItem].slug}.png`;

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

    setTimeout(randomNotification, 30000);  // Enviar notificaciones cada 30 segundos
}

// Registrar el Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/challenge_encriptador_oracle/SW.js')
    .then((registration) => {
      console.log('Service Worker registrado con éxito:', registration);
    })
    .catch((error) => {
      console.error('Error al registrar el Service Worker:', error);
    });
}


