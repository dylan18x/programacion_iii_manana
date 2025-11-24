const mensaje = document.getElementById('mensaje');
mensaje.textContent = "Mascota Disponible para Adopción";
mensaje.style.color = "red";

const link = document.getElementById('link');
link.setAttribute('href', 'https://pae.ec/adopciones/');
link.classList.add('boton');
