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
btns_filtro.forEach(boton => {
    boton.addEventListener('click', () => {
        btns_filtro.forEach(b => b.classList.remove('activo'));
        boton.classList.add('activo');
    });    
});

// Filtro contenido izqueirda (musica, podcast)
let btns_filtro_tus = document.querySelectorAll('.btn-filtro-tus');
btns_filtro_tus.forEach(boton => {
    console.log("sdasdas")
    boton.addEventListener('click', () => {
        btns_filtro_tus.forEach(b => b.classList.remove('activo'));
        boton.classList.add('activo');
    });    
});

// Quitar publicidad 
let publicidad = document.querySelector(".publicidad-playlist");
publicidad.addEventListener("click", quitarPublicidad);
function quitarPublicidad() {
    publicidad.style.display = 'none';
}