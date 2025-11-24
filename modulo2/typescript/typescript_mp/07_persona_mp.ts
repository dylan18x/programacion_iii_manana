export class Mascota {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    mostrar(): void {
        console.log(`Mascota ${this.nombre} con ${this.edad} anios`);
    }
}
