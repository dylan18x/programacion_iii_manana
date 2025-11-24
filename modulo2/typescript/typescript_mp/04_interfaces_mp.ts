interface Adoptante {
    id: number;
    nombre: string;
    correo?: string;
}

const adoptante1: Adoptante = {
    id: 1,
    nombre: "Dylan Fernandez"
};

const adoptante2: Adoptante = {
    id: 2,
    nombre: "Helen Moquincho",
    correo: "helen@correo.com"
};

console.log(adoptante1);
console.log(adoptante1.id);
console.log(adoptante1.nombre);
console.log(adoptante1.correo);

console.log(adoptante2);
console.log(adoptante2.id);
console.log(adoptante2.nombre);
console.log(adoptante2.correo);
