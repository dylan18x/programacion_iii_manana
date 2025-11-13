console.log("Arrays - HappyTails");

let mascotas = ["Luna", "Rocky", "Max", "Nina"];
let listaVacia = new Array();
let listaVacia2 = [];
console.log(listaVacia);
console.log(listaVacia2);

console.log("Acceso a los elementos del array");
console.log(mascotas[0]);
console.log(mascotas[3]);

console.log("Modificar elemento del array");
mascotas[0] = "Toby";
console.log(mascotas);

console.log("Agregar elemento al final del array");
mascotas.push("Simba");
console.log(mascotas);

console.log("Agregar elemento al inicio del array");
mascotas.unshift("Coco");
console.log(mascotas);

console.log("Eliminar el último elemento del array");
mascotas.pop();
console.log(mascotas);

console.log("Eliminar el primer elemento del array");
mascotas.shift();
console.log(mascotas);

console.log("Iteración del array");
let indice = 0;

console.log("Iteración con While");
while (indice < mascotas.length) {
    console.log("Valor", indice, "es", mascotas[indice]);
    indice++;
}

console.log("Iteración con For");
for (let i = 0; i < mascotas.length; i++) {
    console.log(mascotas[i]);
}

console.log("Iteración con For..of");
for (let nombre of mascotas) {
    console.log(nombre);
}

console.log("Iteración con For Each");
mascotas.forEach(function(nombre, indice) {
    console.log(indice, nombre);
});
