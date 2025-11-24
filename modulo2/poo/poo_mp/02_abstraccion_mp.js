class Dueño {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    mayorEdad() {
        if (this.edad >= 18) {
            console.log("Es mayor de edad");
        } else {
            console.log("Es menor de edad");
        }
    }
    mostrar() {
        console.log(this.nombre, this.edad);
    }
}

const dueño1 = new Dueño('Pedro', 17);
dueño1.mayorEdad();
dueño1.mostrar();
