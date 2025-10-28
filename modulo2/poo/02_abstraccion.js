class Persona{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad =edad;
    }
    mayorEdad(){
        if(edad>=18){
            this.console.log("es mayor de edad")
        }else{
            this.console.loh("es menor de edad")
        }
    }
    mostrar(){
        console.log(this.nombre,this.edad)
    }
}
const Pedro = new Persona('Pedro',17);
Pedro.mayorEdad();
Pedro.mostrar();
