class Empleado {
    constructor(nombre, salario) {
        this.nombre = nombre;
        this.salario = salario;
    }
    trabajar() {
        console.log("Empleado trabajando");
    }
    calcularVacaciones() {
        return this.salario * 0.15;
    }
    horasExtra(horas) {
        return ((this.salario / 30) / 8) * horas * 2;
    }
}

class Veterinario extends Empleado {
    calcularVacaciones() {
        return this.salario * 0.20;
    }
    horasExtra(horas) {
        return ((this.salario / 30) / 8) * horas * 3;
    }
}

class Cuidador extends Empleado {
    calcularVacaciones() {
        return this.salario * 0.10;
    }
}

const vetPedro = new Veterinario('Pedro', 2000);
const cuidadorJuan = new Cuidador('Juan', 1200);

vetPedro.trabajar();
cuidadorJuan.trabajar();
console.log(vetPedro.calcularVacaciones());
console.log(cuidadorJuan.calcularVacaciones());
console.log(vetPedro.horasExtra(5));
console.log(cuidadorJuan.horasExtra(5));
