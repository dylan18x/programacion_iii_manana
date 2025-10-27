console.log("OBJETOS");
let persona = {
    nombre: "Dylan",
    edad: 19,
    Ciudad: "Quito"
};

console.log(persona);
console.log(persona.nombre);
console.log(persona.ciudad);
console.log(persona["edad"]);
console.log("Modificacion del objeto");
persona = nombre="Maria";
console.log(persona);
persona.direccion="Av.Occidental";
console.log(persona)
console.log("Eliminar clave al objeto");
delete persona.direccion;
console.log(persona);

console.log("Recorrer un Objeto");
for(let clave in persona){
    console.log(clave);
}
console.log("Mostrar claves con Object.keys");
console.log(Object.keys(persona));
console.log("Mostrar claves con Object.values");
console.log(Object.values(persona));

let estudiante = {
    nombre: "Maicol",
    apellido: "Lidioma",
    contacto: {
        correo: "maicolmanco@gmail.com",
        telefono: "023765885",
        celular: "09345123240"
    },
    materias:[
        {
            nombre: "programacion III",
            calificacion: 8
        },
        {
            nombre: "Base de Datos II",
            calificacion: 9
        },
    ]
};
console.log("Estudiante: ", estudiante)
