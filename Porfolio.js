// 1. Inicialización de la librería EmailJS
emailjs.init("hZAoI7xClx4xxxTPc");//emailjs libreria. init inicia la conexion con el servidor
//lo que esta en el parentecis es al contraseña publica
// 2. Selección de elementos del DOM
const formulario = document.getElementById("form-contacto");// declara una variable de lectura
const botonEnviar = document.getElementById("btn-enviar");// declara una variable de lectura
// document representa todo el arbol del documento html en momoria(EL DOM)
//getElementById busca en el html el elemento que tenga el id que esta entre parentecis y lo guarda en la variable formulario

// 3. Escuchar el evento de envío (submit)
formulario.addEventListener("submit", function(evento) {
    //espera las acciones del usuario. submit se dispara si el formulario se intenta enviar
    // 4. Detener la recarga por defecto
    evento.preventDefault();
    //cancela la recarga de la pagina y procesa el envio del formulario

    // 5. Estado de carga en el botón
    botonEnviar.innerText = "Enviando...";//.innerText modifica el texto que hay en el boton una vez enviado el correo
    botonEnviar.disabled = true;//.disabled desactiva el boton para que el usuario no mande mas de una vez el mismo correo

    // 6. Identificadores de EmailJS
    const serviceID = "service_30bl28e";//claves
    const templateID = "template_ysjmcac";//claves

    // 7. Envío de los datos del formulario
    emailjs.sendForm(serviceID, templateID, this)//sendFrom sube todo lo que haya en los campos del formulario
        .then(function() {//se ejecuta si el correo se envio correctamente
            // 8. Manejo de éxito
            alert("¡Correo enviado con éxito!");//genera una alerta
            formulario.reset();//reincia el formulario
            botonEnviar.innerText = "Enviar Mensaje";//corrige el texto del boton
            botonEnviar.disabled = false;//activa el boton de nuevo
        })
        .catch(function(error) {//se ejecuta si el mensaje no se pudo enviar
            // 9. Manejo de errores
            alert("Hubo un error al enviar el mensaje.");
            console.error("Error EmailJS:", error);
            botonEnviar.innerText = "Enviar Mensaje";
            botonEnviar.disabled = false;
        });
});

// 1. "Atrapamos" el título usando su ID y lo guardamos en una variable
const elementoTitulo = document.getElementById('titulo-principal');
const elementoParrafo=document.getElementById('parrafo')
// 2. Guardamos el texto que queremos escribir en otra variable
const textoOriginal = "Ian Alejandro Miño";
const textoParrafo="Hola, Mi nombre es Ian, soy estudiante de Informatica. Me gusta el mundo de la tecnología en todas sus formas, desde el armado y mantenimiento de hardware hasta el desarrollo web. Actualmente me enfoco en aprender a crear sistemas funcionales y escribir código que resuelva problemas reales.";

// 3. Vaciamos el título en la pantalla para que arranque en blanco
elementoTitulo.innerHTML = "";
elementoParrafo.innerHTML="";

// 4. Creamos un contador para saber por qué letra vamos
let contador = 0;
let contadorP=0;
// 5. Creamos la función que va a escribir letra por letra
function efectoEscribir() {
    // Si el contador es menor a la cantidad de letras del texto...
    if (contador < textoOriginal.length) {
        // ...agregamos la letra que toca a la pantalla
        elementoTitulo.innerHTML += textoOriginal.charAt(contador);
        // ...y le sumamos 1 al contador para la próxima vuelta
        contador++;
        
        // Volvemos a llamar a la función después de 100 milisegundos
        setTimeout(efectoEscribir, 100);// funcion recursiva
    }
    if(contadorP <textoParrafo.length){
        elementoParrafo.innerHTML +=textoParrafo.charAt(contadorP);
        contadorP++;
        setTimeout(efectoEscribir,100);
    }
}
// 6. Damos la orden de que arranque el efecto
efectoEscribir();


// ============================================
// "TABLA" DE CERTIFICADOS
// Cada objeto = una fila. Cuando termine un 
// curso nuevo, solo agrego un objeto más acá,
// no toco el HTML ni el CSS.
// ============================================
// ============================================
// "TABLA" DE CERTIFICADOS
// ============================================
const certificados = [
    { titulo: "Certificado 1", archivo: "assets/certificados/curso-01.jpg" },
    { titulo: "Certificado 2", archivo: "assets/certificados/curso-02.jpg" },
    {titulo: "Certificado 3", archivo: "assets/certificados/curso-03.jpg"},
    // Nuevo curso: agregar un objeto más acá
];

// Selecciona el contenedor donde van los certificados
const contenedorCursos = document.querySelector(".Cursos");

// Dibuja las imágenes en el HTML a partir de la tabla
certificados.forEach(function (cert) {
    const img = document.createElement("img");
    img.src = cert.archivo;
    img.alt = cert.titulo;
    contenedorCursos.appendChild(img);
});

// --- Lightbox: abrir certificados en grande ---

// Selecciona el modal, la imagen dentro del modal y el botón de cerrar
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCerrar = document.getElementById("lightbox-cerrar");

// Función para cerrar el modal (la recuperamos igual que la tenías)
function cerrarLightbox() {
    lightbox.classList.remove("activo");
    lightboxImg.src = ""; // limpia la imagen (evita que siga cargada de fondo)
}

// 👇 ESTA es la función que abre el lightbox — la recupero y la dejo
// declarada aparte para poder reutilizarla cada vez que se cree una imagen nueva
function abrirLightbox(imagen) {
    lightboxImg.src = imagen.src; // copia la imagen clickeada al modal
    lightboxImg.alt = imagen.alt; // copia la descripción de la imagen clickeada
    lightbox.classList.add("activo"); // muestra el modal
}

// Ahora sí: recién ACÁ seleccionamos las imágenes de certificados,
// porque en este punto del código ya fueron creadas por el forEach de arriba
const imagenesCursos = document.querySelectorAll(".Cursos img");

// A cada certificado le agrego el evento de clic para abrirlo en grande
imagenesCursos.forEach(function (imagen) {
    imagen.addEventListener("click", function () {
        abrirLightbox(imagen); // reutilizamos la función en vez de repetir el código
    });
});

// Cerrar con el botón "X"
lightboxCerrar.addEventListener("click", cerrarLightbox);

// Cerrar haciendo clic en el fondo oscuro (fuera de la imagen)
lightbox.addEventListener("click", function (evento) {
    if (evento.target === lightbox) {
        cerrarLightbox();
    }
});

// Cerrar con la tecla Escape
document.addEventListener("keydown", function (evento) {
    if (evento.key === "Escape") {
        cerrarLightbox();
    }
});
// ============================================
// "TABLA" DE HERRAMIENTAS
// nivel: 1 a 5 (se usa para la barra de progreso)
// icono: clase de Devicon (librería de íconos de 
// tecnologías, gratuita, cargada por CDN)
// categoria: "base" (con experiencia práctica) o 
// "aprendiendo" (en proceso, proyecto de gestión de clases)
// ============================================
const herramientas = [
    // --- Base ---
    { nombre: "C / C++",   icono: "devicon-cplusplus-plain",  etiqueta:"intermedio/avanzado", categoria: "base", descripcion: "Gestión manual de memoria, estructuras de datos, algoritmos." },
    { nombre: "JavaScript", icono: "devicon-javascript-plain", etiqueta:"intermedio/avanzado", categoria: "base", descripcion: "Manipulación del DOM, manejo de eventos y programación orientada a la lógica del navegador." },
    { nombre: "Python",    icono: "devicon-python-plain",     etiqueta:"intermedio/avanzado", categoria: "base", descripcion: "Scripting, automatización, estructuras de datos nativas." },
    { nombre: "HTML",      icono: "devicon-html5-plain",      etiqueta: "avanzado", categoria: "base", descripcion: "Estructura semántica, accesibilidad, formularios." },
    { nombre: "CSS",       icono: "devicon-css3-plain",       etiqueta: "avanzado", categoria: "base", descripcion: "Flexbox, Grid, responsive design, transiciones." },
    { nombre: "Git",       icono: "devicon-git-plain",        etiqueta: "avanzado", categoria: "base", descripcion: "Ramas, merge, rebase, resolución de conflictos." },
    { nombre: "GitHub",    icono: "devicon-github-original",  etiqueta: "avanzado", categoria: "base", descripcion: "Repositorios remotos, Pull Requests, Codespaces." },
    { nombre: "VS Code",   icono: "devicon-vscode-plain",     etiqueta: "avanzado", categoria: "base", descripcion: "Editor principal, extensiones, debugging." },
    { nombre: "Bash/Zsh",  icono: "devicon-bash-plain",       etiqueta: "intermedio/avanzado", categoria: "base", descripcion: "Terminal, compilación, gestión de entornos." },

    // --- Aprendiendo ahora (proyecto de gestión de clases) ---
    { nombre: "React",     icono: "devicon-react-original",   etiqueta: "intermedio", categoria: "aprendiendo", descripcion: "Componentes, useState, props." },
    { nombre: "Next.js",   icono: "devicon-nextjs-plain",     etiqueta: "intermedio", categoria: "aprendiendo", descripcion: "App Router, rutas, estructura y build." },
    { nombre: "Tailwind CSS", icono: "devicon-tailwindcss-plain", etiqueta: "intermedio", categoria: "aprendiendo", descripcion: "Clases utilitarias directo en el JSX." },
    { nombre: "Node.js",   icono: "devicon-nodejs-plain",     etiqueta: "intermedio", categoria: "aprendiendo", descripcion: "Entorno de ejecución para correr el proyecto." },
    { nombre: "npm",       icono: "devicon-npm-original-wordmark", etiqueta: "intermedio", categoria: "aprendiendo", descripcion: "Gestor de paquetes, scripts de desarrollo." },
    { nombre: "ESLint",    icono: "devicon-eslint-original",  etiqueta: "básico", categoria: "aprendiendo", descripcion: "Linter para errores y buenas prácticas." },
    { nombre: "Supabase",  icono: "devicon-supabase-plain",   etiqueta: "básico", categoria: "aprendiendo", descripcion: "Base de datos PostgreSQL y backend as a service." }
];

// Dibuja una lista de herramientas dentro de un contenedor, con la barra
// arrancando en 0% (para poder animarla después) y en el color que le pasemos
function dibujarTarjetas(lista, contenedor, colorBadge) {
    lista.forEach(function (h) {
        contenedor.innerHTML += `
            <div class="tarjeta-herramienta">
                <i class="${h.icono}"></i>
                <h3>${h.nombre}</h3>
                <p class="texto-xs">${h.descripcion}</p>
                <span class="badge-nivel" style="background-color: ${colorBadge}">${h.etiqueta}</span>
            </div>
        `;
    });
}
// Filtramos la tabla por categoría y dibujamos cada grupo en su contenedor

const herramientasBase = herramientas.filter(h => h.categoria === "base");
const herramientasAprendiendo = herramientas.filter(h => h.categoria === "aprendiendo");

dibujarTarjetas(herramientasBase, document.getElementById("grid-base"), "var(--color-secundario)");
dibujarTarjetas(herramientasAprendiendo, document.getElementById("grid-aprendiendo"), "var(--color-accion)");

// Después de crear todas las barras (en 0%), les asignamos su ancho real
// con un pequeño delay — así el navegador "ve" el cambio y lo anima
setTimeout(function () {
    document.querySelectorAll(".barra-nivel-relleno").forEach(function (barra) {
        barra.style.width = barra.dataset.nivel + "%";
    });
}, 100);

// ===================
// "TABLA" DE PROYECTOS
// ===================
const proyectos = [
    {
        nombre: "Sistema de Gestión de Turnos",
        estado: "En desarrollo",
        descripcion: "App web para profesores particulares: los alumnos eligen día/horario según disponibilidad, suben comprobante de pago y materia. El turno pasa por estados pendiente/confirmado/cancelado según validación del profesor.",
        stack: ["React", "Next.js", "Tailwind", "Supabase"],
        link: "https://github.com/Ian-M-09" // reemplazar por el repo real cuando lo subas
    }
    // Nuevo proyecto: agregar un objeto más acá cuando termine o empiece otro
];

const contenedorProyectos = document.querySelector(".grid-proyectos");

proyectos.forEach(function (p) {
    const tags = p.stack.map(t => `<span class="tag">${t}</span>`).join("");
    contenedorProyectos.innerHTML += `
        <div class="tarjeta-proyecto">
            <span class="badge-estado badge-en-desarrollo">${p.estado}</span>
            <h3>${p.nombre}</h3>
            <p>${p.descripcion}</p>
            <div class="tags-stack">${tags}</div>
            <a href="https://github.com/Ian-M-09/sistema-turnos-clases" target="_blank" rel="noopener noreferrer">Ver repositorio →</a>
        </div>
    `;
});

// ============================================
// FONDO INTERACTIVO: partículas conectadas
// Reacciona al mouse: al pasar cerca, las líneas 
// se atraen/repelen según la config
// ============================================
tsParticles.load("fondo-particulas", {
    fpsLimit: 60,
    particles: {
        number: { value: 50 }, // cantidad de puntos — 50 es liviano, no satura
        color: { value: "#00ffcc" }, // color de los puntos
        links: {
            enable: true,
            color: "#ff00ff", // color de las líneas que conectan puntos cercanos
            distance: 150,     // distancia máxima para que dos puntos se conecten
            opacity: 0.3
        },
        move: {
            enable: true,
            speed: 1 // velocidad de movimiento — lento
        },
        size: { value: 2 },
        opacity: { value: 0.5 }
    },
    interactivity: {
        events: {
            onHover: { enable: true, mode: "grab" } // al pasar el mouse, "atrapa" los puntos cercanos
        },
        modes: {
            grab: { distance: 140, links: { opacity: 0.6 } }
        }
    },
    background: { color: "transparent" } // usa el fondo que ya tengo en el CSS
});