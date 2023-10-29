function cancelForm() {
    // Redirige a la página inicial
    window.location.href = "index.html";
}

function submitForm() {
    // Obtiene los valores de los campos
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var celular = document.getElementById("celular").value;
    var servicio = document.getElementById("servicio").value;

    // Crea una URL para la nueva página
    var newPageURL = "solicitud.html?" +
        "nombre=" + encodeURIComponent(nombre) +
        "&correo=" + encodeURIComponent(correo) +
        "&celular=" + encodeURIComponent(celular) +
        "&servicio=" + encodeURIComponent(servicio);

    // Abre la nueva página en una pestaña completamente nueva
    window.open(newPageURL, "_blank");
}

