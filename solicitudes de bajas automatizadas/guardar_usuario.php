<?php
// Obtener los datos JSON enviados desde el frontend
$data = json_decode(file_get_contents('php://input'), true);

// Verificar si los datos son válidos
if (isset($data['name'], $data['phone'], $data['email'], $data['password'], $data['position'], $data['area'])) {
    // Ruta al archivo donde se almacenarán los datos
    $file = 'usuarios.json';

    // Leer el contenido actual del archivo (si existe)
    if (file_exists($file)) {
        $users = json_decode(file_get_contents($file), true);
    } else {
        $users = [];
    }

    // Agregar el nuevo usuario al array
    $users[] = $data;

    // Guardar el array actualizado en el archivo JSON
    file_put_contents($file, json_encode($users, JSON_PRETTY_PRINT));

    // Enviar respuesta de éxito
    echo json_encode(['status' => 'success']);
} else {
    // Si falta algún dato, enviar respuesta de error
    echo json_encode(['status' => 'error', 'message' => 'Datos incompletos']);
}
?>
