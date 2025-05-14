document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita el envío del formulario por defecto
    
    let correo = document.querySelector('input[name="Correo"]').value;
    let telefono = document.querySelector('input[name="telefono"]').value;
    let codigo = document.querySelector('input[name="codigo"]').value;
    
    // Verificar si los campos están vacíos
    if (correo === '' || telefono === '' || codigo === '') {
        alert("Por favor, complete todos los campos.");
    } else {
        alert("Solicitud de recuperación enviada.");
        // Aquí agregarías el código para la verificación de los datos
    }
});
