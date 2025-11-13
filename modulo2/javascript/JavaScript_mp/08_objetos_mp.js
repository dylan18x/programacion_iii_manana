console.log("Objetos - HappyTails");
let mascota = {
    nombre: "Firulais",
    edad: 3,
    especie: "Perro"
};

console.log(mascota);
console.log(mascota.nombre);
console.log(mascota.especie);
console.log(mascota["edad"]);
console.log("Modificacion del objeto");
mascota = nombre="Luna";
console.log(mascota);
mascota.refugio="Huella Animal";
console.log(mascota)
console.log("Eliminar clave al objeto");
delete mascota.refugio;
console.log(mascota);

console.log("Recorrer un Objeto");
for(let clave in mascota){
    console.log(clave);
}
console.log("Mostrar claves con Object.keys");
console.log(Object.keys(mascota));
console.log("Mostrar claves con Object.values");
console.log(Object.values(mascota));

let adopcion = {
    adoptante: "Carlos",
    apellido: "Mendoza",
    contacto: {
        correo: "carlosmendoza@gmail.com",
        telefono: "022334455",
        celular: "0987654321"
    },
    mascotas:[
        {
            nombre: "Luna",
            especie: "Gato"
        },
        {
            nombre: "Rocky",
            especie: "Perro"
        },
    ]
};
console.log("Adopción: ", adopcion)
