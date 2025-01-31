document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Evita que el formulario se recargue

    // Obtener los datos del formulario
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const position = document.getElementById("position").value;
    const area = document.getElementById("area").value;

    // Crear un objeto con los datos
    const userData = {
        email,
        password,
        name,
        phone,
        position,
        area
    };

    // Enviar los datos a la API (ajustar la URL según tu API)
    fetch("https://api.ejemplo.com/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Registro exitoso");
            window.location.href = "login.html"; // Redirige a la página de login
        } else {
            alert("Error en el registro: " + data.message);
        }
    })
    .catch(error => {
        console.error("Error en la solicitud:", error);
        alert("Ocurrió un error. Intenta nuevamente.");
    });
});