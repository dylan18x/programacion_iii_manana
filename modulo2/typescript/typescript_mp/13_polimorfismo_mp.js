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
exports.JaulaGrande = void 0;
var _11_herencia_mp_1 = require("./11_herencia_mp");
var JaulaGrande = /** @class */ (function (_super) {
    __extends(JaulaGrande, _super);
    function JaulaGrande() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JaulaGrande.prototype.getEspacioRequerido = function () {
        console.log('Requiere una jaula de gran tamaño');
    };
    return JaulaGrande;
}(_11_herencia_mp_1.Mascota));
exports.JaulaGrande = JaulaGrande;
var miJaula = new JaulaGrande('Rocky', 'Perro grande');
console.log(miJaula.nombre);
console.log(miJaula.tipo);
miJaula.moverse();
miJaula.getEspacioRequerido();
