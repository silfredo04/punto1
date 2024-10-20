// script.js
document.addEventListener('DOMContentLoaded', () => {
    const mosaico = document.getElementById('mosaico');

    // Función para obtener productos de la API
    const obtenerProductos = async () => {
        try {
            const respuesta = await fetch('https://fakestoreapi.com/products');
            const productos = await respuesta.json();
            Mosaico(productos);
        } catch (error) {
            console.error('Error al obtener los productos:', error);
        }
    };

    // Función para renderizar el mosaico de productos
    const Mosaico = (productos) => {
        productos.forEach(producto => {
            const cardHTML = `
                <div class="col-md-4">
                    <div class="card">
                        <img src="${producto.image}" class="card-img-top" alt="${producto.title}">
                        <div class="card-body">
                            <h5 class="card-title">${producto.title}</h5>
                            <p class="card-text">${producto.description.substring(0, 200)}...</p>
                            <p class="card-text"><strong>$${producto.price}</strong></p>
                        </div>
                    </div>
                </div>
            `;
            mosaico.innerHTML += cardHTML;
        });
    };

    // Llamar a la función para obtener y mostrar productos
    obtenerProductos();
});
