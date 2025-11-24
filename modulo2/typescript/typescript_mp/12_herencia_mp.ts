import { Mascota, MascotaPequeña} from "./11_herencia_mp";

const miMascota = new Mascota('Firulais','Perro');
console.log(miMascota.nombre);
console.log(miMascota.tipo);
miMascota.moverse();

const miMiniMascota = new MascotaPequeña('Michi','Gato');
console.log(miMiniMascota.nombre);
console.log(miMiniMascota.tipo);
miMiniMascota.moverse();
