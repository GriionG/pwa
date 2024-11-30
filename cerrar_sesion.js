function cerrarSesion() {
    // Elimina los datos del usuario almacenados
    localStorage.removeItem("usuario");
    alert("Sesión cerrada.");

    // Redirige al login
    location.href = "login.html";
}