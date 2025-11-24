"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mascota = void 0;
var Mascota = /** @class */ (function () {
    function Mascota(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    Mascota.prototype.mostrar = function () {
        console.log("Mascota ".concat(this.nombre, " con ").concat(this.edad, " años"));
    };
    return Mascota;
}());
exports.Mascota = Mascota;
