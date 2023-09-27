let contenido_DOM = document.querySelector(".contenido");

let contenido = `
    <div class="caja">
        <h3>Transporte pesado (Buses)<h3>
        <span>🚌</span>
    </div>
    <form class="entrada">
        <span>Información del veículo</span>
        <input type="num" class="placa" value="C- ">
        <input type="time" class="tiempo">
        <textarea class="comentario" placeholder="Características del carro"></textarea>
        <button>Ingresar</button>
    </form>
`;

contenido_DOM.innerHTML = contenido;