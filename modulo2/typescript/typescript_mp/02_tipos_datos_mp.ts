let edadMascota: number = 3;
let nombreMascota: string = "Luna";
let disponible: boolean = true;
let precio: any = 12;

if (edadMascota > 1 && disponible) {
    console.log("Mascota lista para adopcion");
} else {
    console.log("Mascota no disponible");
}

let accesorios: string[] = ["collar", "juguete", "cama"];
for (let i = 0; i < accesorios.length; i++) {
    console.log(accesorios[i]);
}

enum EstadoProducto {
    Pendiente,
    Enviado,
    Entregado
}

console.log(EstadoProducto);
console.log(EstadoProducto.Entregado);
