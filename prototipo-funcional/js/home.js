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

// Menu desplegable LIST tus playlist
document.querySelector(".list").addEventListener("click", function() {
    document.querySelector(".menu-tus-playlist").classList.toggle("show-menu-tus-playlist");
});

let li_filtro = document.querySelectorAll('.menu-tus-playlist li');

let tu_contenido_playlist = document.querySelectorAll(".li-playlist");
let tu_contendio_podcast = document.querySelectorAll(".li-podcast");

li_filtro.forEach(li => {
    li.addEventListener('click', () => {
        li_filtro.forEach(b => {
            b.classList.remove('active'); //saco el active (color) a todos los li
            let img = b.querySelector('img'); 
            img.style.display = "none"; //saco img de todos los li
        });

        li.classList.add('active'); //agrego clase al clickeado
        let img = li.querySelector('img');
        img.style.display = "flex"; //muestro img clickeado

        // Filtro de tus playlist segun li seleccionado
        let valor_filtro = li.textContent;
        if (valor_filtro === 'Playlist') {
            tu_contenido_playlist.forEach(item => {
                item.style.display = "flex";
            });
            tu_contendio_podcast.forEach(item => {
                item.style.display = "none";
            });
        } else if (valor_filtro === 'Podcast') {
            tu_contendio_podcast.forEach(item => {
                item.style.display = "flex";
            });
            tu_contenido_playlist.forEach(item => {
                item.style.display = "none";
            });
        } else if (valor_filtro === 'Artistas') {
            tu_contendio_podcast.forEach(item => {
                item.style.display = "none";
            });
            tu_contenido_playlist.forEach(item => {
                item.style.display = "none";
            });
        } else {
            tu_contenido_playlist.forEach(item => {
                item.style.display = "flex";
            });
            tu_contendio_podcast.forEach(item => {
                item.style.display = "flex";
            });
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