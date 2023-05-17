/*
Héctor Pascual Marín
24/02/2023
Trabajo Javascript
*/
window.addEventListener("load", (evento) => {

//Datos de los personajes
let personajes = [
    {id: "p1", nombre: "Colt", tipo: "francotirador", salud: 2800, ataque: 300, imagen: "img/colt.png", habilidad: "Se puede mover muy rápido"},
    {id: "p2", nombre: "Jessie", tipo: "luchador", salud: 3200, ataque: 820, imagen: "img/jessie.png", habilidad: "Restaura la salud de su torreta"},
    {id: "p3", nombre: "Brock", tipo: "francotirador", salud: 2800, ataque: 1100, imagen: "img/brock.png", habilidad: "Lanza una potente salva de 9 misiles"},
    {id: "p4", nombre: "Rico", tipo: "francotirador", salud: 2600, ataque: 280, imagen: "img/rico.png", habilidad: "Sus balas son más rápidas y dañinas al chocar contra algo"},
    {id: "p5", nombre: "Shelly", tipo: "luchador", salud: 3600, ataque: 300, imagen: "img/shelly.png", habilidad: "Ralentiza a los enemigos de un área con su ataque"},
    {id: "p6", nombre: "Nita", tipo: "luchador", salud: 3800, ataque: 740, imagen: "img/nita.png", habilidad: "Recupera salud con sus ataques"}
];

let personaje = document.getElementById("personajes");
let ficha = document.getElementById("ficha");
let botonTodos = document.getElementById("todos");
let botonLuchador = document.getElementById("luchador");
let botonFrancotirador = document.getElementById("francotirador");
let lupa = document.getElementById("lupa");
let datosPersonajes = document.getElementById("personajes");

funcionInit();

//Filtrado de botones
botonTodos.addEventListener("click", () => {
    personaje.innerHTML = "";
    for(let i=0;i<6;i++)
    {
        AñadirPersonaje(personajes[i].id, personajes[i].nombre, personajes[i].imagen);
    }
    colorPersonaje();
    colorBoton();
});

botonLuchador.addEventListener("click", () => {
    personaje.innerHTML = "";
    for(let i=0;i<6;i++)
    {
        if(personajes[i].tipo == "luchador")
        {
            AñadirPersonaje(personajes[i].id, personajes[i].nombre, personajes[i].imagen);
        }
        
    }
    colorPersonaje();
    colorBoton();
});

botonFrancotirador.addEventListener("click", () => {
    personaje.innerHTML = "";
    for(let i=0;i<6;i++)
    {
        if(personajes[i].tipo == "francotirador")
        {
            AñadirPersonaje(personajes[i].id, personajes[i].nombre, personajes[i].imagen);
        }
        
    }
    colorPersonaje();
    colorBoton();
});

//Drag y drop para la lupa y las imágenes
datosPersonajes.addEventListener("dragstart", function(evento ) {
    evento.dataTransfer.setData("elemento", evento.target.id);
});

lupa.addEventListener("dragover", function(evento) {
    evento.preventDefault();
});

lupa.addEventListener("drop", function(evento) {
    ficha.innerHTML = "";
    evento.preventDefault();
    let datos = evento.dataTransfer.getData("elemento");
    for(let i=0;i<6;i++)
    {
        if(datos.substring(2, 1) == i+1)
        {
            AñadirFicha(personajes[i].imagen, personajes[i].nombre, personajes[i].tipo, personajes[i].salud, personajes[i].ataque, personajes[i].habilidad);
        }
    }
});

//Función inicial
function funcionInit(){
    for(let i=0;i<6;i++)
    {
        AñadirPersonaje(personajes[i].id, personajes[i].nombre, personajes[i].imagen);
    }
    colorPersonaje();
    colorBoton();
}

//Añadir la lista de personajes
function AñadirPersonaje(codigoPersonaje, nombrePersonaje, imagenPersonaje)
{
    let contenedor = document.getElementById("personajes");
    let listado = document.createElement("section");
    listado.className = "listado";
    let sectionImagen = document.createElement("section");
    let imagen = document.createElement("img");
    imagen.src = imagenPersonaje;
    imagen.id = codigoPersonaje;
    imagen.draggable = true;
    let sectionNombre = document.createElement("section");
    let nombre = document.createElement("p");
    nombre.textContent = nombrePersonaje;
    sectionNombre.append(nombre);
    sectionImagen.append(imagen);
    listado.append(sectionImagen);
    listado.append(sectionNombre);
    contenedor.append(listado);
}

//Añadir los detalles de un personaje en concreto
function AñadirFicha(imagen, nombre, tipo, salud, ataque, habilidad)
{
    let contenedor = document.getElementById("ficha");
    let h2 = document.createElement("h2");
    h2.textContent = "Ficha de personaje";
    contenedor.append(h2);
    let datos = document.createElement("section");
    datos.className = "detalle";
    let section1 = document.createElement("section");
    //Imagen
    let section2 = document.createElement("section");
    let imagenPersonajes = document.createElement("img");
    imagenPersonajes.src = imagen;
    imagenPersonajes.width = 500;
    section2.append(imagenPersonajes);
    section1.append(section2);
    //Nombre
    let nombrePersonaje = document.createElement("strong");
    nombrePersonaje.textContent = "Nombre: ";
    let elNombre = document.createElement("p");
    elNombre.append(nombrePersonaje);
    elNombre.append(nombre);
    section1.append(elNombre);
    //Tipo
    let tipoPersonaje = document.createElement("strong");
    tipoPersonaje.textContent = "Tipo: ";
    let elTipo = document.createElement("p");
    elTipo.append(tipoPersonaje);
    elTipo.append(tipo);
    section1.append(elTipo);
    //Salud
    let saludPersonaje = document.createElement("strong");
    saludPersonaje.textContent = "Salud: ";
    let laSalud = document.createElement("p");
    laSalud.append(saludPersonaje);
    laSalud.append(salud);
    section1.append(laSalud);
    //Ataque
    let ataquePersonaje = document.createElement("strong");
    ataquePersonaje.textContent = "Ataque: ";
    let elAtaque = document.createElement("p");
    elAtaque.append(ataquePersonaje);
    elAtaque.append(ataque);
    section1.append(elAtaque);
    //Habilidad
    let habilidadPersonaje = document.createElement("strong");
    habilidadPersonaje.textContent = "Habilidad: ";
    let laHabilidad = document.createElement("p");
    laHabilidad.append(habilidadPersonaje);
    laHabilidad.append(habilidad);
    section1.append(laHabilidad);
    datos.append(section1);
    contenedor.append(datos);
}

//Cambiar el color del personaje al poner el ratón encima.
function colorPersonaje() {
    let seleccionPersonajes = Array.from(document.querySelectorAll(".listado"));
    let nombrePersonajes = Array.from(document.querySelectorAll("p"));
    let colorBase;
    let colorEncima = "#f2f5a9";
    let textoBase;
    let textoEncima = "#000000";
    for(let i=0;i<seleccionPersonajes.length;i++)
    {
        colorBase = seleccionPersonajes[i].style.backgroundColor;
        textoBase = nombrePersonajes[i].style.color;
        seleccionPersonajes[i].addEventListener("mouseenter", (evento) => {
            seleccionPersonajes[i].style.setProperty("background-color", colorEncima);
            nombrePersonajes[i].style.setProperty("color", textoEncima);
        });
        seleccionPersonajes[i].addEventListener("mouseleave", (evento) => {
            seleccionPersonajes[i].style.setProperty("background-color", colorBase);
            nombrePersonajes[i].style.setProperty("color", textoBase);
        });
    }
}
function colorBoton() {
    let botones = Array.from(document.querySelectorAll("button"));
    for(let i=0;i<botones.length;i++)
    {
        botones[i].addEventListener("mouseenter", (evento) => {
            botones[i].style.opacity = "0.5";
        });
        botones[i].addEventListener("mouseleave", (evento) => {
            botones[i].style.opacity = "1";
        }); 
    }
}
});