// localizar el nodo en el DOM
// nodo: etiqueta en su archivo .html

let header_del_DOM = document.querySelector(".header");

// almacenar en una variable el contenido a agregar
let header = `
<div class="logo">
    <img src="./img/logo.png">
    <h2>Parqueo SCL</h2>
</div>
<nav class="nav">
    <ul>
        <li>Buces 🚌</li>
        <li>Camionetas 🛻</li>
        <li>Carros 🚗</li>
        <li>Motos 🏍️</li>
        <li>Otros 🚲</li>
    </ul>
</nav>
`;

// agregar el contenido a la referencia del DOM
header_del_DOM.innerHTML = header;