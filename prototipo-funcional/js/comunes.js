"use strict";
// Menu desplegable notificacion
document.addEventListener("DOMContentLoaded", function () {
    let notificacionBtn = document.getElementById("btn-notificacion");
    let dropdownMenu = document.getElementById("menuDesplegableNotificacion");
    
    notificacionBtn.addEventListener("click", function () {
        dropdownMenu.classList.toggle("show");
    });

    // si clickeas afuera del menu se cierra
    document.addEventListener("click", function (event) {
        if (!notificacionBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove("show");
        }
    });
});

// Menu desplegable perfil
document.addEventListener("DOMContentLoaded", function () {
    let profileBtn = document.getElementById("btn-perfil");
    let dropdownMenu = document.getElementById("menuDesplegable");
    
    profileBtn.addEventListener("click", function () {
        dropdownMenu.classList.toggle("show");
    });

    // si clickeas afuera del menu se cierra
    document.addEventListener("click", function (event) {
        if (!profileBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove("show");
        }
    });
});