document.querySelector('#recovery-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que el formulario se envíe por defecto

    let correo = document.querySelector('input[name="correo"]').value;
    let telefono = document.querySelector('input[name="telefono"]').value;
    let codigo = document.querySelector('input[name="codigo-verificacion"]').value;

    // Validación básica: todos los campos deben estar llenos
    if (correo === '' || telefono === '' || codigo === '') {
        alert("Por favor, complete todos los campos.");
    } else {
        alert("Solicitud de recuperación enviada.");
        // Redirige solo si todo está lleno
        window.location.href = '../login/login.html';
    }
});
