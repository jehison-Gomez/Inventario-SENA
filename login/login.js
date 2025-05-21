document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Previene el envío del formulario

    const usuario = document.querySelector('input[name="usuario"]').value;
    const contraseña = document.querySelector('input[name="contraseña"]').value;

    // Aquí puedes hacer validaciones si quieres (opcional)

    // Redirigir a otra página (ajusta la ruta si es necesario)
    window.location.href = '../Home.html'
});
