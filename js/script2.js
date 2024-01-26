function validateFields() {
    var curpInput = document.getElementById('curp');
    var rfcInput = document.getElementById('rfc');
    var emailInput = document.getElementById('email');
    var phoneInput = document.getElementById('phone');
    var nssInput = document.getElementById('nss');

    if (curpInput.checkValidity() && rfcInput.checkValidity() && emailInput.checkValidity() && phoneInput.checkValidity() && nssInput.checkValidity()) {
        alert('Todos los campos son válidos. Puedes enviar el formulario.');
    } else {
        alert('Por favor, completa los campos correctamente.');
    }
}