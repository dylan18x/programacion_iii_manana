export class Mascota {
    public nombre: string;
    public tipo: string;

    constructor(nombre: string, tipo: string) {
        this.nombre = nombre;
        this.tipo = tipo;
    }

    moverse(): void {
        console.log('la mascota está caminando');
    }
}

export class MascotaPequeña extends Mascota {
    constructor(nombre: string, tipo: string) {
        super(nombre, tipo);
    }
}
