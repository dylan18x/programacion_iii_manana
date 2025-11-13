console.log("Condicionales- HappyTails");
let edadAnimal = 4;

if(edadAnimal>3){
    console.log("Es un perro Adulto");
}

let password = "huellitas123";
if(password==="huellitas123345"){
    console.log("Usuario Logueado");
}else{
    console.log("Acceso denegado")
}

let puntuacionMascota = 7;
if (puntuacionMascota >= 9) {
    console.log("Mascota excelente para adopción");
} else if (puntuacionMascota >= 6) {
    console.log("Mascota apta para adopción");
} else {
    console.log("Mascota necesita entrenamiento antes de adopción");
}


let edadAdoptante = 20;
let tieneRequisitos = true;

if (edadAdoptante >= 18) {
    if (tieneRequisitos) {
        console.log("Adoptante autorizado ");
    } else {
        console.log("Debe cumplir los requisitos de adopción ");
    }
} else {
    console.log("Adoptante menor de edad ");
}

let tipoMascota = "perro";

switch (tipoMascota) {
    case "perro":
        console.log("Requiere paseos diarios ");
        break;
    case "gato":
        console.log("Requiere espacio tranquilo ");
        break;
    default:
        console.log("Tipo de mascota no registrado");
}

let edadFirulais = 1;
let edadLuna = 7;
let edadRocky = 10;

if (edadFirulais > edadLuna && edadFirulais > edadRocky) {
    console.log("Firulais es la mascota más vieja ");
} else if (edadLuna < edadRocky) {
    console.log("Rocky es la mascota más vieja ");
} else {
    console.log("Luna es la mascota más vieja ");
}





