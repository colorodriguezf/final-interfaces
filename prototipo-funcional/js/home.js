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
let musicaItems = document.querySelectorAll('.musica');
let podcastItems = document.querySelectorAll('.podcast');

btns_filtro.forEach(boton => {
    boton.addEventListener('click', () => {
        btns_filtro.forEach(b => b.classList.remove('activo'));
        boton.classList.add('activo');
        let filtroSeleccionado = boton.textContent.trim();
        if (filtroSeleccionado === 'Música') {
            musicaItems.forEach(item => item.style.display = 'block');
            podcastItems.forEach(item => item.style.display = 'none');
        } else if (filtroSeleccionado === 'Podcast') {
            podcastItems.forEach(item => item.style.display = 'block');
            musicaItems.forEach(item => item.style.display = 'none');
        } else {
            musicaItems.forEach(item => item.style.display = 'block');
            podcastItems.forEach(item => item.style.display = 'block');
        }
    });    
});

// Filtro contenido izqueirda (musica, podcast)
// let btns_filtro_tus = document.querySelectorAll('.btn-filtro-tus');
// btns_filtro_tus.forEach(boton => {
//     boton.addEventListener('click', () => {
//         btns_filtro_tus.forEach(b => b.classList.remove('activo'));
//         boton.classList.add('activo');
//     });    
// });

// Quitar publicidad 
let publicidad = document.querySelector(".publicidad-playlist");
publicidad.addEventListener("click", quitarPublicidad);
function quitarPublicidad() {
    publicidad.style.display = 'none';
}

// Playlist y recomendaciones
// Carousel
$(document).ready(function() {
    $('.carousel-recomendaciones').slick({
        slidesToShow: 7, // Mostramos 7 elementos en pantallas grandes
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        // responsive: [
        //     {
        //         breakpoint: 1800,
        //         settings: {
        //             slidesToShow: 6
        //         }
        //     },
        //     {
        //         breakpoint: 1600,
        //         settings: {
        //             slidesToShow: 6
        //         }
        //     },
        //     {
        //         breakpoint: 1200,
        //         settings: {
        //             slidesToShow: 5
        //         }
        //     },
        //     {
        //         breakpoint: 992,
        //         settings: {
        //             slidesToShow: 4
        //         }
        //     },
        // ]
    });
});


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 5,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next", // Solo el botón siguiente
    },
    loop: true,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      800: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      1300: {
        slidesPerView: 5,
        spaceBetween: 5,
      },
      1600: {
        slidesPerView: 7,
        spaceBetween: 8,
      },
    },
  });


//  Cambio de corazon al darle like a una card
document.querySelectorAll('.corazon-card').forEach(card => {
    card.addEventListener('click', () => {
        let srcActual = card.getAttribute("src");
        if (srcActual == "icons/corazon-gris.svg") {
            card.setAttribute("src", "icons/corazon-amarillo.svg");
            card.classList.add("efecto-like");
        } else {
            card.setAttribute("src", "icons/corazon-gris.svg");
            card.classList.remove("efecto-like");
        }
    });
});

// Reproductor
// Cambio de img en el reproductor al hacer hover
document.querySelectorAll('.btn-reproductor img').forEach(img => {
    let srcOriginal = img.getAttribute("src");
    let srcHover = srcOriginal.replace('.svg', '-hover.svg');

    img.addEventListener("mouseenter", () => img.setAttribute("src", srcHover));
    img.addEventListener("mouseleave", () => img.setAttribute("src", srcOriginal));
});

// Img de expandir
document.addEventListener("DOMContentLoaded", () => {
    let img = document.querySelector('.rep-derecho img.expandir');
    let srcOriginal = img.getAttribute("src");
    let srcHover = srcOriginal.replace('.svg', '-hover.svg');

    img.addEventListener("mouseenter", () => img.setAttribute("src", srcHover));
    img.addEventListener("mouseleave", () => img.setAttribute("src", srcOriginal));
});


// Mostrar playlis cuando se clickea solo en la playlist ROCK NACIONAL
//Mostrar contenido del crear PLAYLIST
// Mostrar resultado de la busqueda (charly)
document.addEventListener("DOMContentLoaded", function () {
    let playlistRockNacional = document.querySelector("li.rockNacional");
    let btnCrear = document.querySelector(".btn-crear");

    let contenedorPlaylist = document.querySelector(".contenedor-playlist");
    let filtros = document.querySelector(".contenedor-recomendaciones-filtro");

    //contenido: playlist rock nacional, crear playlist, y resultado busquead
    let contenidoPlaylist = document.querySelector("section.contenido-playlist");
    let contenidoCrear = document.querySelector("section.contendio-crear-playlist");
    let contenidoBusqueda = document.querySelector("section.resultado-busqueda");

    // al iniciar saco los filtros del resultado de la busqueda (por defecto no estan)
    document.querySelectorAll("button.filtro-resultado-busqueda").forEach(boton => {
        boton.style.display = 'none';
    }); 
    contenidoBusqueda.style.display = 'none'; //si estoy en los resultados y vuelvo al home via icono del nav, no desaparece. por eso lo saco aca

    playlistRockNacional.addEventListener("click", function () {
        contenedorPlaylist.style.display = 'none';
        contenidoCrear.style.display = 'none';
        filtros.style.display = 'none';
        contenidoBusqueda.style.display = 'none';
        contenidoPlaylist.style.display = 'block';
    });

    let contador = 0;
    let li_nueva_playlist = document.querySelector(".tus-playlist ul li.li-nueva-playlist");

    btnCrear.addEventListener("click", function () {
        contenedorPlaylist.style.display = 'none';
        contenidoPlaylist.style.display = 'none';
        filtros.style.display = 'none';
        contenidoBusqueda.style.display = 'none';
        contenidoCrear.style.display = 'block';
        if(contador == 0) {
            li_nueva_playlist.style.display = 'flex';
        }
        contador++;
    });

    // Botones eliminar playlist rock y nueva playlist n6
    let btn_eliminar_rock = document.querySelector(".eliminar-rock-nacional");
    let btn_eliminar_nueva = document.querySelector(".eliminar-nueva");


    btn_eliminar_rock.addEventListener("click", function () {
        playlistRockNacional.style.display = 'none';

        // mostrar contenido como antes
        contenedorPlaylist.style.display = 'block';
        contenidoCrear.style.display = 'none';
        filtros_busqueda.style.display = 'none';
        contenidoBusqueda.style.display = 'none';
        contenidoPlaylist.style.display = 'block';
        filtros.style.display = 'block';
    });
    
    btn_eliminar_nueva.addEventListener("click", function () {
        li_nueva_playlist.style.display = 'none';

         // mostrar contenido como antes
        contenedorPlaylist.style.display = 'block';
        contenidoCrear.style.display = 'none';
        contenidoPlaylist.style.display = 'block';
        filtros_busqueda.style.display = 'none';
        contenidoBusqueda.style.display = 'none';
        filtros.style.display = 'block';
    });


    // resultados busqueda
    //al clickear en el input ya te escribe CHARLY popr defecto
    let input = document.querySelector(".input-buscador");
    document.querySelector(".buscador").addEventListener("click", function() {
        input.value = "Charly"; 
    });

    let btn_busqueda = document.querySelector(".icono-buscar");
    btn_busqueda.addEventListener("click", function () {
        contenedorPlaylist.style.display = 'none';
        contenidoCrear.style.display = 'none';
        contenidoPlaylist.style.display = 'none';

        // filtros dentro de la busqueda
        filtros.style.display = 'block'; //muestro todos
         // al iniciar saco los filtros del resultado de la busqueda
         document.querySelectorAll("button.btn-filtro").forEach(boton => {
            boton.style.display = 'none'; //saco los de las recomendaciones del home
        }); 
        document.querySelectorAll("button.filtro-resultado-busqueda").forEach(boton => {
            boton.style.display = 'block'; //muestro los de la busqueda
        }); 
        contenidoBusqueda.style.display = 'block';

    });
});



//Abrir menu cuando se aprieta en ... de playlist
document.addEventListener("DOMContentLoaded", function () {
    
    let opcionesBtn = document.querySelector("svg.opciones");
    let dropdownMenu = document.querySelector(".menu-desplegable-playlist");
    
    opcionesBtn.addEventListener("click", function () {
        dropdownMenu.classList.toggle("show");
    });

    // si clickeas afuera del menu se cierra
    document.addEventListener("click", function (event) {
        if (!opcionesBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove("show");
        }
    });
    
});

//Abrir menu cuando se aprieta en ... en crear playlist
document.addEventListener("DOMContentLoaded", function () {
    
    let opcionesBtn = document.querySelector("svg.opciones-crear");
    let dropdownMenu = document.querySelector(".menu-desplegable-crear");
    
    opcionesBtn.addEventListener("click", function () {
        dropdownMenu.classList.toggle("show");
    });

    // si clickeas afuera del menu se cierra
    document.addEventListener("click", function (event) {
        if (!opcionesBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove("show");
        }
    });
    
});


