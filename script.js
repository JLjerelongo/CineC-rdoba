document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const searchQuery = document.getElementById("searchInput").value.toLowerCase();
    alert(`Buscando la película: ${searchQuery}`);
    // Aquí puedes añadir la lógica para mostrar resultados de búsqueda
});

// Agregar evento al formulario de compra
document.getElementById("compraForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const pelicula = document.getElementById("pelicula").value;
    const sala = document.getElementById("sala").value;
    const funcion = document.getElementById("funcion").value;
    const cantidad = document.getElementById("cantidad").value;

    // Detalles del ticket
    const ticketDetalles = `
        Película: ${pelicula} <br>
        Sala: ${sala} <br>
        Función: ${funcion} <br>
        Cantidad de Entradas: ${cantidad} <br>
        ¡Gracias por su compra!
    `;

    // Mostrar ticket emitido
    document.getElementById("ticketDetalles").innerHTML = ticketDetalles;
    document.getElementById("ticketInfo").style.display = "block";
});
