class MascotaRefugio {
    constructor(nombre) {
        this.nombre = nombre;
    }
    hacerSonido() {
        console.log("La mascota",this.nombre ,"hace un sonido");
    }
}

class Perro extends MascotaRefugio {}
const perro1 = new Perro('Toby');
const perro2 = new Perro('Lucero');

perro1.hacerSonido();
perro2.hacerSonido();
