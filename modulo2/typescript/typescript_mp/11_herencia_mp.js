"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MascotaPequeña = exports.Mascota = void 0;
var Mascota = /** @class */ (function () {
    function Mascota(nombre, tipo) {
        this.nombre = nombre;
        this.tipo = tipo;
    }
    Mascota.prototype.moverse = function () {
        console.log('la mascota está caminando');
    };
    return Mascota;
}());
exports.Mascota = Mascota;
var MascotaPequeña = /** @class */ (function (_super) {
    __extends(MascotaPequeña, _super);
    function MascotaPequeña(nombre, tipo) {
        return _super.call(this, nombre, tipo) || this;
    }
    return MascotaPequeña;
}(Mascota));
exports.MascotaPequeña = MascotaPequeña;
