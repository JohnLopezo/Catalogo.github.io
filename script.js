window.addEventListener('scroll', function () {
    let offset = window.pageYOffset; // Obtiene el desplazamiento vertical
    document.querySelector('.parallax-1').style.backgroundPositionY = offset * 0.7 + 'px'; // Ajusta la velocidad del parallax

    let img = document.querySelector('.img'); // Selecciona la imagen
    let socialIcons = document.getElementById('social-icons'); // Selecciona los iconos de redes sociales
    let textOverlay = document.querySelector('.text-overlay'); // Selecciona la superposición de texto
    let scrollText = document.querySelector('.scroll'); // Selecciona el texto con clase 'scroll'

    // Calcula la opacidad basada en la posición actual de scroll
    let opacity = 1 - offset / 500; // Cambia el número para ajustar la velocidad de desaparición

    // Limita la opacidad entre 0 y 1
    if (opacity >= 0) {
        img.style.opacity = opacity; // Aplica la opacidad calculada a la imagen
        socialIcons.style.opacity = opacity; // Aplica la opacidad calculada a los iconos de redes sociales
        textOverlay.style.opacity = opacity; // Aplica la opacidad calculada al texto
        scrollText.style.opacity = opacity; // Aplica la opacidad calculada al texto con clase 'scroll'
    }
});



function filterCards(category) {
    var cards = document.getElementsByClassName('canal');
    for (var i = 0; i < cards.length; i++) {
        if (category === 'all') {
            cards[i].style.display = 'block';
        } else {
            if (cards[i].getAttribute('data-category') === category) {
                cards[i].style.display = 'block';
            } else {
                cards[i].style.display = 'none';
            }
        }
    }

}

// Función para mostrar detalles de un programa específico
function mostrarDetalles(programaId) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');

    // Información de ejemplo
    const detalles = {
        programa1: {
            titulo: "Programa 1",
            imagen: "img/Banner - Página Web_Mesa de trabajo 1.jpg",
            descripcion: "Descripción completa del Programa 1.",
            horario: "Lunes a Viernes, 8:00 PM - 9:00 PM",
            fondo: "img/images.jfif", // URL de la imagen de fondo
            conductores: [
                {
                    nombre: "Conductor 1",
                    biografia: "Biografía completa del Conductor 1.",
                    imagen: "img/Banner Individual_Mesa de trabajo 1.jpg",
                }
        
            ]
        },
        programa2: {
            titulo: "Programa 2",
            imagen: "imagen_programa2.jpg",
            descripcion: "Descripción completa del Programa 2.",
            horario: "Lunes a Viernes, 9:00 PM - 10:00 PM",
            fondo: "img/descargar.jfif", // URL de la imagen de fondo
            conductores: [
                {
                    nombre: "Conductor 3",
                    biografia: "Biografía completa del Conductor 3.",
                    imagen: "img/1198293.png",
                },
                {
                    nombre: "Conductor 4",
                    biografia: "Biografía completa del Conductor 4.",
                    imagen: "img/1198293.png",
                },
                {
                    nombre: "Conductor 3",
                    biografia: "Biografía completa del Conductor 3.",
                    imagen: "img/1198293.png",
                },
                {
                    nombre: "Conductor 4",
                    biografia: "Biografía completa del Conductor 4.",
                    imagen: "img/1198293.png",
                },
                {
                    nombre: "Conductor 3",
                    biografia: "Biografía completa del Conductor 3.",
                    imagen: "img/1198293.png",
                },
                {
                    nombre: "Conductor 4",
                    biografia: "Biografía completa del Conductor 4.",
                    imagen: "img/1198293.png",
                }
            ]
        },
        programa3: {
            titulo: "Programa 3",
            imagen: "imagen_programa3.jpg",
            descripcion: "Descripción completa del Programa 3.",
            horario: "Lunes a Viernes, 9:00 PM - 10:00 PM",
            fondo: "img/descargar.jfif", // URL de la imagen de fondo
            conductores: [
                {
                    nombre: "Conductor 5",
                    biografia: "Biografía completa del Conductor 3.",
                    imagen: "img/1198293.png",
                },
                {
                    nombre: "Conductor 6",
                    biografia: "Biografía completa del Conductor 4.",
                    imagen: "img/1198293.png",
                }
            ]
        },
        programa4: {
            titulo: "Programa 4",
            imagen: "imagen_programa4.jpg",
            descripcion: "Descripción completa del Programa 4.",
            horario: "Lunes a Viernes, 9:00 PM - 10:00 PM",
            fondo: "img/descargar.jfif", // URL de la imagen de fondo
            conductores: [
                {
                    nombre: "Conductor 7",
                    biografia: "Biografía completa del Conductor 3.",
                    imagen: "img/1198293.png",
                },
                {
                    nombre: "Conductor 8",
                    biografia: "Biografía completa del Conductor 4.",
                    imagen: "img/1198293.png",
                }
            ]
        },
        programa5: {
            titulo: "Programa 5",
            imagen: "imagen_programa2.jpg",
            descripcion: "Descripción completa del Programa 5.",
            horario: "Lunes a Viernes, 9:00 PM - 10:00 PM",
            fondo: "img/descargar.jfif", // URL de la imagen de fondo
            conductores: [
                {
                    nombre: "Conductor 9",
                    biografia: "Biografía completa del Conductor 3.",
                    imagen: "img/1198293.png",
                },
                {
                    nombre: "Conductor 10",
                    biografia: "Biografía completa del Conductor 4.",
                    imagen: "img/1198293.png",
                }
            ]
        },
        programa6: {
            titulo: "Programa 6",
            imagen: "imagen_programa22.jpg",
            descripcion: "Descripción completa del Programa 6.",
            horario: "Lunes a Viernes, 9:00 PM - 10:00 PM",
            fondo: "img/descargar.jfif", // URL de la imagen de fondo
            conductores: [
                {
                    nombre: "Conductor 11",
                    biografia: "Biografía completa del Conductor 3.",
                    imagen: "img/1198293.png",
                },
                {
                    nombre: "Conductor 12",
                    biografia: "Biografía completa del Conductor 4.",
                    imagen: "img/1198293.png",
                }
            ]
        },
        programa7: {
            titulo: "Programa 7",
            imagen: "imagen_programa7.jpg",
            descripcion: "Descripción completa del Programa 7.",
            horario: "Lunes a Viernes, 9:00 PM - 10:00 PM",
            fondo: "img/descargar.jfif", // URL de la imagen de fondo
            conductores: [
                {
                    nombre: "Conductor 13",
                    biografia: "Biografía completa del Conductor 3.",
                    imagen: "img/1198293.png",
                },
                {
                    nombre: "Conductor 14",
                    biografia: "Biografía completa del Conductor 4.",
                    imagen: "img/1198293.png",
                }
            ]
        },
        programa8: {
            titulo: "Programa 8",
            imagen: "imagen_programa8.jpg",
            descripcion: "Descripción completa del Programa 8.",
            horario: "Lunes a Viernes, 9:00 PM - 10:00 PM",
            fondo: "img/descargar.jfif", // URL de la imagen de fondo
            conductores: [
                {
                    nombre: "Conductor 15",
                    biografia: "Biografía completa del Conductor 3.",
                    imagen: "img/1198293.png",
                },
                {
                    nombre: "Conductor 16",
                    biografia: "Biografía completa del Conductor 4.",
                    imagen: "img/1198293.png",
                }
            ]
        },
        programa9: {
            titulo: "Programa 9",
            imagen: "imagen_programa9.jpg",
            descripcion: "Descripción completa del Programa 9.",
            horario: "Lunes a Viernes, 9:00 PM - 10:00 PM",
            fondo: "img/descargar.jfif", // URL de la imagen de fondo
            conductores: [
                {
                    nombre: "Conductor 17",
                    biografia: "Biografía completa del Conductor 3.",
                    imagen: "img/1198293.png",
                },
                {
                    nombre: "Conductor 18",
                    biografia: "Biografía completa del Conductor 4.",
                    imagen: "img/1198293.png",
                }
            ]
        },
        programa10: {
            titulo: "Programa 10",
            imagen: "imagen_programa10.jpg",
            descripcion: "Descripción completa del Programa 10.",
            horario: "Lunes a Viernes, 9:00 PM - 10:00 PM",
            fondo: "img/descargar.jfif", // URL de la imagen de fondo
            conductores: [
                {
                    nombre: "Conductor 19",
                    biografia: "Biografía completa del Conductor 3.",
                    imagen: "img/1198293.png",
                },
                {
                    nombre: "Conductor 20",
                    biografia: "Biografía completa del Conductor 4.",
                    imagen: "img/1198293.png",
                }
            ]
        },
        programa11: {
            titulo: "Programa 11",
            imagen: "imagen_programa11.jpg",
            descripcion: "Descripción completa del Programa 6.",
            horario: "Lunes a Viernes, 9:00 PM - 10:00 PM",
            fondo: "img/descargar.jfif", // URL de la imagen de fondo
            conductores: [
                {
                    nombre: "Conductor 21",
                    biografia: "Biografía completa del Conductor 3.",
                    imagen: "img/1198293.png",
                },
                {
                    nombre: "Conductor 22",
                    biografia: "Biografía completa del Conductor 4.",
                    imagen: "img/1198293.png",
                }
            ]
        },
        programa12: {
            titulo: "Programa 12",
            imagen: "imagen_programa12.jpg",
            descripcion: "Descripción completa del Programa 6.",
            horario: "Lunes a Viernes, 9:00 PM - 10:00 PM",
            fondo: "img/descargar.jfif", // URL de la imagen de fondo
            conductores: [
                {
                    nombre: "Conductor 23",
                    biografia: "Biografía completa del Conductor 3.",
                    imagen: "img/1198293.png",
                },
                {
                    nombre: "Conductor 24",
                    biografia: "Biografía completa del Conductor 4.",
                    imagen: "img/1198293.png",
                }
            ]
        },
        programa13: {
            titulo: "Programa 13",
            imagen: "imagen_programa13.jpg",
            descripcion: "Descripción completa del Programa 13.",
            horario: "Lunes a Viernes, 9:00 PM - 10:00 PM",
            fondo: "img/descargar.jfif", // URL de la imagen de fondo
            conductores: [
                {
                    nombre: "Conductor 25",
                    biografia: "Biografía completa del Conductor 3.",
                    imagen: "img/1198293.png",
                },
                {
                    nombre: "Conductor 26",
                    biografia: "Biografía completa del Conductor 4.",
                    imagen: "img/1198293.png",
                }
            ]
        },
        programa14: {
            titulo: "Programa 14",
            imagen: "imagen_programa14.jpg",
            descripcion: "Descripción completa del Programa 14.",
            horario: "Lunes a Viernes, 9:00 PM - 10:00 PM",
            fondo: "img/descargar.jfif", // URL de la imagen de fondo
            conductores: [
                {
                    nombre: "Conductor 27",
                    biografia: "Biografía completa del Conductor 3.",
                    imagen: "img/1198293.png",
                },
                {
                    nombre: "Conductor 28",
                    biografia: "Biografía completa del Conductor 4.",
                    imagen: "img/1198293.png",
                }
            ]
        },
        programa15: {
            titulo: "Programa 15",
            imagen: "imagen_programa15.jpg",
            descripcion: "Descripción completa del Programa 15.",
            horario: "Lunes a Viernes, 9:00 PM - 10:00 PM",
            fondo: "img/descargar.jfif", // URL de la imagen de fondo
            conductores: [
                {
                    nombre: "Conductor 29",
                    biografia: "Biografía completa del Conductor 3.",
                    imagen: "img/1198293.png",
                },
                {
                    nombre: "Conductor 30",
                    biografia: "Biografía completa del Conductor 4.",
                    imagen: "img/1198293.png",
                }
            ]
        },
        programa16: {
            titulo: "Programa 16",
            imagen: "imagen_programa16.jpg",
            descripcion: "Descripción completa del Programa 16.",
            horario: "Lunes a Viernes, 9:00 PM - 10:00 PM",
            fondo: "img/descargar.jfif", // URL de la imagen de fondo
            conductores: [
                {
                    nombre: "Conductor 31",
                    biografia: "Biografía completa del Conductor 3.",
                    imagen: "img/1198293.png",
                },
                {
                    nombre: "Conductor 32",
                    biografia: "Biografía completa del Conductor 4.",
                    imagen: "img/1198293.png",
                }
            ]
        },
        programa17: {
            titulo: "Programa 17",
            imagen: "imagen_programa17.jpg",
            descripcion: "Descripción completa del Programa 17.",
            horario: "Lunes a Viernes, 9:00 PM - 10:00 PM",
            fondo: "img/descargar.jfif", // URL de la imagen de fondo
            conductores: [
                {
                    nombre: "Conductor 33",
                    biografia: "Biografía completa del Conductor 3.",
                    imagen: "img/1198293.png",
                },
                {
                    nombre: "Conductor 34",
                    biografia: "Biografía completa del Conductor 4.",
                    imagen: "img/1198293.png",
                }
            ]
        },
        programa18: {
            titulo: "Programa 18",
            imagen: "imagen_programa18.jpg",
            descripcion: "Descripción completa del Programa 18.",
            horario: "Lunes a Viernes, 9:00 PM - 10:00 PM",
            fondo: "img/descargar.jfif", // URL de la imagen de fondo
            conductores: [
                {
                    nombre: "Conductor 35",
                    biografia: "Biografía completa del Conductor 3.",
                    imagen: "img/1198293.png",
                },
                {
                    nombre: "Conductor 36",
                    biografia: "Biografía completa del Conductor 4.",
                    imagen: "img/1198293.png",
                }
            ]
        },
        programa19: {
            titulo: "Programa 19",
            imagen: "imagen_programa19.jpg",
            descripcion: "Descripción completa del Programa 19.",
            horario: "Lunes a Viernes, 9:00 PM - 10:00 PM",
            fondo: "img/descargar.jfif", // URL de la imagen de fondo
            conductores: [
                {
                    nombre: "Conductor 37",
                    biografia: "Biografía completa del Conductor 3.",
                    imagen: "img/1198293.png",
                },
                {
                    nombre: "Conductor 38",
                    biografia: "Biografía completa del Conductor 4.",
                    imagen: "img/1198293.png",
                }
            ]
        },
        programa20: {
            titulo: "Programa 20",
            imagen: "imagen_programa20.jpg",
            descripcion: "Descripción completa del Programa 20.",
            horario: "Lunes a Viernes, 9:00 PM - 10:00 PM",
            fondo: "img/descargar.jfif", // URL de la imagen de fondo
            conductores: [
                {
                    nombre: "Conductor 39",
                    biografia: "Biografía completa del Conductor 3.",
                    imagen: "img/1198293.png",
                },
                {
                    nombre: "Conductor 40",
                    biografia: "Biografía completa del Conductor 4.",
                    imagen: "img/1198293.png",
                }
            ]
        },
        programa21: {
            titulo: "Programa 21",
            imagen: "imagen_programa21.jpg",
            descripcion: "Descripción completa del Programa 21.",
            horario: "Lunes a Viernes, 9:00 PM - 10:00 PM",
            fondo: "img/descargar.jfif", // URL de la imagen de fondo
            conductores: [
                {
                    nombre: "Conductor 41",
                    biografia: "Biografía completa del Conductor 3.",
                    imagen: "img/1198293.png",
                },
                {
                    nombre: "Conductor 42",
                    biografia: "Biografía completa del Conductor 4.",
                    imagen: "img/1198293.png",
                }
            ]
        },
        programa22: {
            titulo: "Programa 22",
            imagen: "imagen_programa22.jpg",
            descripcion: "Descripción completa del Programa 22.",
            horario: "Lunes a Viernes, 9:00 PM - 10:00 PM",
            fondo: "img/descargar.jfif", // URL de la imagen de fondo
            conductores: [
                {
                    nombre: "Conductor 43",
                    biografia: "Biografía completa del Conductor 3.",
                    imagen: "img/1198293.png",
                },
                {
                    nombre: "Conductor 44",
                    biografia: "Biografía completa del Conductor 4.",
                    imagen: "img/1198293.png",
                }
            ]
        },
        programa23: {
            titulo: "Programa 23",
            imagen: "imagen_programa23.jpg",
            descripcion: "Descripción completa del Programa 23.",
            horario: "Lunes a Viernes, 9:00 PM - 10:00 PM",
            fondo: "img/descargar.jfif", // URL de la imagen de fondo
            conductores: [
                {
                    nombre: "Conductor 45",
                    biografia: "Biografía completa del Conductor 3.",
                    imagen: "img/1198293.png",
                },
                {
                    nombre: "Conductor 46",
                    biografia: "Biografía completa del Conductor 4.",
                    imagen: "img/1198293.png",
                }
            ]
        },
        programa24: {
            titulo: "Programa 24",
            imagen: "imagen_programa24.jpg",
            descripcion: "Descripción completa del Programa 24.",
            horario: "Lunes a Viernes, 9:00 PM - 10:00 PM",
            fondo: "img/descargar.jfif", // URL de la imagen de fondo
            conductores: [
                {
                    nombre: "Conductor 47",
                    biografia: "Biografía completa del Conductor 3.",
                    imagen: "img/1198293.png",
                },
                {
                    nombre: "Conductor 48",
                    biografia: "Biografía completa del Conductor 4.",
                    imagen: "img/1198293.png",
                }
            ]
        },
        programa25: {
            titulo: "Programa 25",
            imagen: "imagen_programa25.jpg",
            descripcion: "Descripción completa del Programa 25.",
            horario: "Lunes a Viernes, 9:00 PM - 10:00 PM",
            fondo: "img/descargar.jfif", // URL de la imagen de fondo
            conductores: [
                {
                    nombre: "Conductor 49",
                    biografia: "Biografía completa del Conductor 3.",
                    imagen: "img/1198293.png",
                },
                {
                    nombre: "Conductor 50",
                    biografia: "Biografía completa del Conductor 4.",
                    imagen: "img/1198293.png",
                }
            ]
        },
        programa26: {
            titulo: "Programa 26",
            imagen: "imagen_programa26.jpg",
            descripcion: "Descripción completa del Programa 26.",
            horario: "Lunes a Viernes, 9:00 PM - 10:00 PM",
            fondo: "img/descargar.jfif", // URL de la imagen de fondo
            conductores: [
                {
                    nombre: "Conductor 51",
                    biografia: "Biografía completa del Conductor 3.",
                    imagen: "img/1198293.png",
                },
                {
                    nombre: "Conductor 52",
                    biografia: "Biografía completa del Conductor 4.",
                    imagen: "img/1198293.png",
                }
            ]
        },
        programa27: {
            titulo: "Programa 27",
            imagen: "imagen_programa27.jpg",
            descripcion: "Descripción completa del Programa 24.",
            horario: "Lunes a Viernes, 9:00 PM - 10:00 PM",
            fondo: "img/descargar.jfif", // URL de la imagen de fondo
            conductores: [
                {
                    nombre: "Conductor 53",
                    biografia: "Biografía completa del Conductor 3.",
                    imagen: "img/1198293.png",
                },
                {
                    nombre: "Conductor 54",
                    biografia: "Biografía completa del Conductor 4.",
                    imagen: "img/1198293.png",
                }
            ]
        },
        programa28: {
            titulo: "Programa 28",
            imagen: "imagen_programa28.jpg",
            descripcion: "Descripción completa del Programa 28.",
            horario: "Lunes a Viernes, 9:00 PM - 10:00 PM",
            fondo: "img/descargar.jfif", // URL de la imagen de fondo
            conductores: [
                {
                    nombre: "Conductor 55",
                    biografia: "Biografía completa del Conductor 3.",
                    imagen: "img/1198293.png",
                },
                {
                    nombre: "Conductor 56",
                    biografia: "Biografía completa del Conductor 4.",
                    imagen: "img/1198293.png",
                }
            ]
        },
        programa29: {
            titulo: "Programa 29",
            imagen: "imagen_programa29.jpg",
            descripcion: "Descripción completa del Programa 29.",
            horario: "Lunes a Viernes, 9:00 PM - 10:00 PM",
            fondo: "img/descargar.jfif", // URL de la imagen de fondo
            conductores: [
                {
                    nombre: "Conductor 57",
                    biografia: "Biografía completa del Conductor 3.",
                    imagen: "img/1198293.png",
                },
                {
                    nombre: "Conductor 58",
                    biografia: "Biografía completa del Conductor 4.",
                    imagen: "img/1198293.png",
                }
            ]
        },
        programa30: {
            titulo: "Programa 30",
            imagen: "imagen_programa30.jpg",
            descripcion: "Descripción completa del Programa 30.",
            horario: "Lunes a Viernes, 9:00 PM - 10:00 PM",
            fondo: "img/descargar.jfif", // URL de la imagen de fondo
            conductores: [
                {
                    nombre: "Conductor 47",
                    biografia: "Biografía completa del Conductor 3.",
                    imagen: "img/1198293.png",
                },
                {
                    nombre: "Conductor 48",
                    biografia: "Biografía completa del Conductor 4.",
                    imagen: "img/1198293.png",
                }
            ]
        },
        programa31: {
            titulo: "Programa 31",
            imagen: "imagen_programa31.jpg",
            descripcion: "Descripción completa del Programa 31.",
            horario: "Lunes a Viernes, 9:00 PM - 10:00 PM",
            fondo: "img/descargar.jfif", // URL de la imagen de fondo
            conductores: [
                {
                    nombre: "Conductor 47",
                    biografia: "Biografía completa del Conductor 3.",
                    imagen: "img/1198293.png",
                },
                {
                    nombre: "Conductor 48",
                    biografia: "Biografía completa del Conductor 4.",
                    imagen: "img/1198293.png",
                }
            ]
        },
        // Agrega más programas aquí si es necesario
    };

    const programa = detalles[programaId];
    if (programa) {
        modalBody.innerHTML = `
            <h2>${programa.titulo}</h2>
            <img src="${programa.imagen}" alt="${programa.titulo}" class="program-image">
            <p>${programa.descripcion}</p>
            <p><strong>Horario:</strong> ${programa.horario}</p>
            <div class="conductores">
                ${programa.conductores.map(conductor => `
                    <div class="conductor-info">
                        <img src="${conductor.imagen}" alt="${conductor.nombre}" class="conductor-img">
                        <div>
                            <h3>${conductor.nombre}</h3>
                            <p>${conductor.biografia}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
        modal.style.display = "block";
    }
}
    

// Función para cerrar el modal
function cerrarModal() {
    const modal = document.getElementById('modal');
    modal.style.display = "none";
}

// Evento para cerrar el modal haciendo clic fuera de él
window.onclick = function (event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
