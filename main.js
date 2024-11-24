document.getElementById('enable-notifications').addEventListener('click', () => {
  if ('Notification' in window && 'serviceWorker' in navigator) {
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        navigator.serviceWorker.ready.then(swReg => {
          swReg.showNotification('¡Notificaciones activadas!', {
            body: 'Ahora recibirás notificaciones push.',
            icon: '/img/bundesliga-logo.png',
            badge: '/img/col.png'
          });
        });
      } else {
        alert('Permiso de notificaciones denegado.');
      }
    });
  } else {
    alert('Tu navegador no soporta notificaciones.');
  }
});

