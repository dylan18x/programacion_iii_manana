function saludar(nombre) {
    return "Hola " + nombre;
}
console.log(saludar("Carlos"));

console.log(saludar("Carlos"));

var sumar = function (a, b) {
    return a + b;
};
console.log(sumar(5, 5));

function mostrarBienvenida() {
    console.log("Centro de Mascotas");
    console.log("Bienvenido");
}

function calcularAreaParque(radio) {
    return Math.PI * radio * radio;
}

function calcularAreaParqueVoid(radio) {
    console.log(Math.PI * radio * radio);
}

console.log(calcularAreaParque(5));
calcularAreaParqueVoid(7);
