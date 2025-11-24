import { ProductoMascota } from "./09_acceso_mp";

const miProducto: ProductoMascota = new ProductoMascota('Collar cuadrado rojo');

console.log(miProducto.nombreProducto);
console.log(miProducto.getRegistro);
console.log(miProducto.getAtributos);
