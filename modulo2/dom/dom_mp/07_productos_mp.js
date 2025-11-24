const mascotas = [
  { nombre: "Luna", especie: "Perro", edad: 2, estado: "Disponible", ubicacion: "Zona A" },
  { nombre: "Milo", especie: "Gato", edad: 1, estado: "Disponible", ubicacion: "Zona B" },
  { nombre: "Rocky", especie: "Perro", edad: 4, estado: "En revisión", ubicacion: "Zona C" },
  { nombre: "Nina", especie: "Gata", edad: 3, estado: "Disponible", ubicacion: "Zona D" },
  { nombre: "Toby", especie: "Perro", edad: 5, estado: "Disponible", ubicacion: "Zona E" },
  { nombre: "Coco", especie: "Conejo", edad: 1, estado: "Disponible", ubicacion: "Zona F" },
  { nombre: "Simba", especie: "Gato", edad: 2, estado: "En revisión", ubicacion: "Zona G" },
  { nombre: "Max", especie: "Perro", edad: 6, estado: "Disponible", ubicacion: "Zona H" },
  { nombre: "Pelusa", especie: "Gata", edad: 2, estado: "Disponible", ubicacion: "Zona I" },
  { nombre: "Bobby", especie: "Perro", edad: 3, estado: "Disponible", ubicacion: "Zona J" }
];

const tabla = document.getElementById('cuerpoTabla');

mascotas.forEach(m => {
  const fila = document.createElement('tr');
  fila.innerHTML = `
    <td>${m.nombre}</td>
    <td>${m.especie}</td>
    <td>${m.edad}</td>
    <td>${m.estado}</td>
    <td>${m.ubicacion}</td>
  `;
  tabla.appendChild(fila);
});
