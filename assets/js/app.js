//carrito
//Funciones
const carrito = document.getElementById("carrito");
const productos = document.getElementById("lista-productos");
// --agregar despues
const listaProductos = document.querySelector("#lista-carrito tbody");

//Listeners

cargarEventListeners();
function cargarEventListeners() {
    productos.addEventListener("click", comprarProducto);
}


//añadir producto al carrito
function comprarProducto(e) {
    e.preventDefault();

    console.log(e.target.classList);
    if (e.target.classList.contains("agregar-carrito")) {
        const producto = e.target.parentElement.parentElement;
        // enviamos el producto seleccionado
        leerDatosProducto(producto);
    }
}

// Lee los datos del producto
function leerDatosProducto(producto) {
    // crear objeto
    const infoProducto = {
        imagen: producto.querySelector("img").src,
        nombre: producto.querySelector("h5").textContent,
        precio: producto.querySelector(".precio").textContent,
        id: producto.querySelector("a"),
    };

    insertarCarrito(infoProducto);
}

// Muestra el producto seleccionado en el Carrito
function insertarCarrito(producto) {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>  
            <img src="${producto.imagen}" width=100>
        </td>
        <td>${producto.nombre}</td>
        <td>${producto.precio}</td>
        <td>
            <a href="#" class=""> X 
            </a>
        </td>
    `;
    listaProductos.appendChild(row);
}

