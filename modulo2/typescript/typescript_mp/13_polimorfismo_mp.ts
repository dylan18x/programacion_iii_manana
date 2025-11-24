import { Mascota, MascotaPequeña } from "./11_herencia_mp";

export class JaulaGrande extends Mascota{
    getEspacioRequerido(): void{
        console.log('Requiere una jaula de gran tamaño');
    }
}

const miJaula = new JaulaGrande('Rocky','Perro grande');
console.log(miJaula.nombre);
console.log(miJaula.tipo);
miJaula.moverse();
miJaula.getEspacioRequerido();
