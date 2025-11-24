function saludar(nombre?: string) {
    return `Hola ${nombre}`;
}
console.log(saludar("Carlos"));
console.log(saludar("Carlos"));

const sumar = (a: number, b: number): number => {
    return a + b;
};
console.log(sumar(5, 5));

function mostrarBienvenida(): void {
    console.log("Centro de Mascotas");
    console.log("Bienvenido");
}

function calcularAreaParque(radio: number): number {
    return Math.PI * radio * radio;
}

function calcularAreaParqueVoid(radio: number): void {
    console.log(Math.PI * radio * radio);
}

console.log(calcularAreaParque(5));
calcularAreaParqueVoid(7);
