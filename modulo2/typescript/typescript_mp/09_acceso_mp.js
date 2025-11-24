"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoMascota = void 0;
var ProductoMascota = /** @class */ (function () {
    function ProductoMascota(nombreProducto) {
        this.idGeneric = 'PET-000-XYZ';
        this.nombreProducto = nombreProducto;
        this.generarRegistro();
    }
    ProductoMascota.prototype.generarRegistro = function () {
        this.registro = (new Date()).toDateString();
    };
    ProductoMascota.prototype.getRegistro = function () {
        return this.registro;
    };
    ProductoMascota.prototype.getAtributos = function () {
        return {
            nombreProducto: this.nombreProducto,
            registro: this.registro,
            id: this.idGeneric
        };
    };
    return ProductoMascota;
}());
exports.ProductoMascota = ProductoMascota;

