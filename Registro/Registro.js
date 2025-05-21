document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita el envío del formulario por defecto
    
    let nombre = document.querySelector('input[name="nombre"]').value;
    let apellido = document.querySelector('input[name="apellido"]').value;
    let correo = document.querySelector('input[name="correo"]').value;
    let contraseña = document.querySelector('input[name="contraseña"]').value;
    
    // Verificación básica
    if (nombre === '' || apellido === '' || correo === '' || contraseña === '') {
        alert("Por favor, complete todos los campos.");
    } else {
        // Validación del formato del correo
        let correoValido = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!correoValido.test(correo)) {
            alert("Por favor, ingrese un correo válido.");
            return;
        }

        alert("Registro exitoso.");
    }

    // Redirigir a login sin importar si la validación fue exitosa o no
    window.location.href = '/login/login.html'; // Asegúrate de que esta ruta sea correcta
});

