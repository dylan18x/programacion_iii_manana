class Mascota {
    constructor(nombre, tipo) {
        this.nombre = nombre;
        this.tipo = tipo;
    }
    despertar() {
        console.log(`${this.nombre} (${this.tipo}) esta despierta`);
    }
    jugar() {
        console.log(`${this.nombre} (${this.tipo}) esta jugando`);
    }
    dormir() {
        console.log(`${this.nombre} (${this.tipo}) esta durmiendo`);
    }
}

const miMascota = new Mascota('Luna', 'Gato');
miMascota.despertar();
miMascota.jugar();
miMascota.dormir();
console.log(miMascota.nombre);
console.log(miMascota.tipo);
