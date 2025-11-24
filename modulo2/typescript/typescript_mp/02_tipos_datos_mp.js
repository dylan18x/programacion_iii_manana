var edadMascota = 3;
var nombreMascota = "Luna";
var disponible = true;
var precio = 12;

if (edadMascota > 1 && disponible) {
    console.log("Mascota lista para adopcion");
} else {
    console.log("Mascota no disponible");
}

var accesorios = ["collar", "juguete", "cama"];
for (var i = 0; i < accesorios.length; i++) {
    console.log(accesorios[i]);
}

var EstadoProducto;
(function (EstadoProducto) {
    EstadoProducto[EstadoProducto["Pendiente"] = 0] = "Pendiente";
    EstadoProducto[EstadoProducto["Enviado"] = 1] = "Enviado";
    EstadoProducto[EstadoProducto["Entregado"] = 2] = "Entregado";
})(EstadoProducto || (EstadoProducto = {}));

console.log(EstadoProducto);
console.log(EstadoProducto.Entregado);
