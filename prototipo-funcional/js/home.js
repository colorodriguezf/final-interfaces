// Menu desplegable perfil
document.addEventListener("DOMContentLoaded", function () {
    let profileBtn = document.getElementById("btn-perfil");
    let dropdownMenu = document.getElementById("menuDesplegable");
    
    profileBtn.addEventListener("click", function () {
        console.log("AHSJA")
        dropdownMenu.classList.toggle("show");
    });

    document.addEventListener("click", function (event) {
        if (!profileBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove("show");
        }
    });
});


// Recomendaciones
// Filtros (todos, musica, podcast)
let btns_filtro = document.querySelectorAll('.btn-filtro');

// Añadir un evento de clic a cada botón
btns_filtro.forEach(boton => {
    boton.addEventListener('click', () => {
        btns_filtro.forEach(b => b.classList.remove('activo'));
        boton.classList.add('activo');
    });
});
