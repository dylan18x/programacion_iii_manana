let fichaMascota = null;

document.getElementById('agregarMascota').addEventListener('click', () => {
    fichaMascota = document.createElement('p');
    fichaMascota.textContent = "Mascota registrada en el refugio";
    document.getElementById('zonaMascotas').appendChild(fichaMascota);
});

document.getElementById('removerMascota').addEventListener('click', () => {
    if (fichaMascota) fichaMascota.remove();
});

function saludar() {
    alert("Gracias por visitar el centro de adopción");
}

document.getElementById('info')
    .addEventListener('dblclick', () => {
        alert("Información: todas las mascotas están vacunadas");
    });

document.getElementById('nombreMascota')
    .addEventListener('input', (e) => {
        console.log("Nombre ingresado:", e.target.value);
});
