const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function () {
    this.classList.toggle('bi-moon');
    if (this.classList.toggle('bi-brightness-high-fill')) {
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';
    } else {
        body.style.background ='#191e25';
        body.style.color = 'white';
        body.style.transition = '2s';
    }
})

function validarFormulario() {
    var nombre = document.getElementById('nombre');
    var email = document.getElementById('email');
    var errorNombre = document.getElementById('errorNombre');
    var errorEmail = document.getElementById('errorEmail');

    errorNombre.textContent = '';
    errorEmail.textContent = '';

    // Validar el nombre
    if (nombre.value.trim() === '') {
        errorNombre.textContent = 'Por favor, ingrese su nombre.';
        nombre.focus();
        return false;
    }

    // Validar el email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        errorEmail.textContent = 'Por favor, ingrese un correo electrónico válido.';
        email.focus();
        return false;
    }


    alert('¡Formulario enviado correctamente!');
    return true;
}