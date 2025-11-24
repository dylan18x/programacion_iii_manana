const formulario = document.getElementById('formulario');
const contenedor = document.getElementById('contenedorMascotas');
let mascotas = [];

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value.trim();
  const raza = document.getElementById('raza').value.trim();
  const edad = parseFloat(document.getElementById('edad').value.trim());

  if (nombre && raza && !isNaN(edad)) {
    const nuevaMascota = { id: Date.now(), nombre, raza, edad };
    mascotas.push(nuevaMascota);
    renderizarMascota(nuevaMascota);
    formulario.reset();
  }
});

function renderizarMascota({ id, nombre, raza, edad }) {
  const div = document.createElement('div');
  div.className = 'mascota';
  div.setAttribute('data-id', id);
  div.innerHTML = `
    <h3>${nombre}</h3>
    <p>${raza}</p>
    <p><strong>Edad: ${edad} años</strong></p>
    <div class="acciones"><button class="eliminar">Eliminar</button></div>
  `;
  contenedor.appendChild(div);
}

contenedor.addEventListener('click', (e) => {
  if (e.target.classList.contains('eliminar')) {
    const tarjeta = e.target.closest('.mascota');
    const id = parseInt(tarjeta.getAttribute('data-id'));
    mascotas = mascotas.filter(m => m.id !== id);
    tarjeta.remove();
  }
});
