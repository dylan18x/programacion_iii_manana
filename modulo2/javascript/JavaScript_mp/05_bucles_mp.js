console.log("Bucles - HappyTails");

totalMascotas = 0;
for (let i = 1; i <= 10; i++) {
    console.log("Mascota número:", i);
    totalMascotas += 1;
    console.log("Total de mascotas registradas:", totalMascotas);
}

adopciones = 0;
for (let i = 0; i <= 10; i++) {
    console.log("Día", i, ": Adopciones =", adopciones);
    adopciones += 4;
}

let nombreRefugio = "HappyTails";
for (let i = 0; i < nombreRefugio.length; i++) {
    console.log(nombreRefugio[i]);
}

for (let i = 1; i <= 10; i++) {
    console.log("El cuadrado de la edad", i, "es", i ** 2);
}

console.log("Bucle While - Revisión de jaulas");
let jaula = 1;
while (jaula <= 6) {
    console.log("Jaula número", jaula, "revisada 🐕");
    jaula++;
}

let pesosMascotas = [4, 7, 3, 6, 5];
let indicePeso = 0;
while (indicePeso < pesosMascotas.length) {
    console.log("Peso de la mascota", indicePeso + 1, ":", pesosMascotas[indicePeso], "kg");
    indicePeso++;
}

let fichas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let indiceFicha = 0;
while (indiceFicha < fichas.length) {
    if (indiceFicha % 2 == 0) {
        console.log("Ficha número", indiceFicha, "→ Mascota par 🐾");
    } else {
        console.log("Ficha número", indiceFicha, "→ Mascota impar 🐾");
    }
    indiceFicha++;
}

let numeroMascota = 1;
while (numeroMascota <= 10) {
    if (numeroMascota % 2 == 0)
        console.log("Mascota", numeroMascota, "tiene número par de adopción 🐕");
    numeroMascota++;
}

let porRevisar = 5;
do {
    console.log("Mascotas por revisar:", porRevisar);
    porRevisar--;
} while (porRevisar != 0);

let dia = 0;
let adopTotal = 0;
do {
    console.log("Día", dia, ": adopciones acumuladas =", adopTotal);
    adopTotal += 5;
    dia++;
} while (dia != 11);

let pesos = [4, 7, 6, 3, 9];
let indice = 0;
let mayorPeso = 0;

while (indice < pesos.length) {
    if (pesos[indice] > mayorPeso) {
        mayorPeso = pesos[indice];
    }
    indice++;
}
console.log("La mascota más pesada pesa:", mayorPeso, "kg 🐶");
