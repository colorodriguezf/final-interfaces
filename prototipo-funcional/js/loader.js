"use strict";

document.addEventListener("DOMContentLoaded", function () {
    // Loader
    setTimeout(() => {
        let loader = document.querySelector('.loader');
        let contenido = document.querySelector('.contenedor-todo-home');

        loader.style.display = 'none';
        contenido.style.display = 'block';
    }, 2500);
});