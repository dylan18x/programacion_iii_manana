console.log("Funciones - HappyTails");

console.log("FORMA CLÁSICA");
function mostrarMensaje() {
    console.log("Bienvenido al centro de adopción HappyTails");
}
mostrarMensaje();

console.log("FORMA CON PARÁMETROS Y RETORNO");
function totalAdopciones(perros, gatos) {
    return perros + gatos;
}
let total = totalAdopciones(4, 9);
console.log("El total de adopciones es", total);

console.log("FUNCIÓN FLECHA");
const diferenciaAdopciones = (perros, gatos) => {
    return perros - gatos;
};
let diferencia = diferenciaAdopciones(9, 5);
console.log("La diferencia de adopciones es", diferencia);

console.log("FUNCIÓN RETORNO DIRECTO");
const duplicarMascotas = x => x * x;
console.log("El resultado del duplicado de 5 es", duplicarMascotas(5));

console.log("FUNCIÓN CON PARÁMETROS POR DEFECTO");
function saludar(nombre, saludo = "Hola") {
    return saludo + " " + nombre;
}
let mensaje1 = saludar("Carlos");
let mensaje2 = saludar("Ana", "Buenos días");
console.log(mensaje1);
console.log(mensaje2);

function tipoMascota(numero) {
    if (numero % 2 == 0) {
        return "Número par de mascotas";
    } else {
        return "Número impar de mascotas";
    }
}
console.log(tipoMascota(5));
console.log(tipoMascota(9));

console.log("CÁLCULO DE ÁREA DE ESPACIO PARA MASCOTAS");
function areaZona(base, altura) {
    return (base * altura) / 2;
}
let resultadoZona = areaZona(5, 7);
console.log(resultadoZona);
