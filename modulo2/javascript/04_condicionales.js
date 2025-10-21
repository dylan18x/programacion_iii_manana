let temperatura = 35;

if(temperatura>30){
    console.log("Hace calor");
}

let password = "pass123";
if(password==="pass123345"){
    console.log("Usuario Logueado");
}else{
    console.log("Acceso denegado")
}

let nota= 7;
if(nota>=9){
    console.log("Sobresaliente");
}else if(nota>=6){
    console.log("Aprobado")
}else{
    console.log("Reprobado")
}

let edad=20;
let tiene_licencia=true;
if(edad>=18){
    if(tiene_licencia){
        console.log("Puedes Conducir")
    }else{
        console.log("Necesita Licencia para Conducir")
    }
}else{
    console.log("Es menor de edad");
}
//Estructura Switch
let dia = "lunes";

switch(dia){
    case "lunes":
        console.log("Inicio de semana");
        break;
    case "viernes":
        console.log("Ultimo dia laboral");
        break;
    default:
        console.log("Dia Normal");
}

let num1 = 1;
let num2 = 7;
let num3 = 10;

if(num1>num2 && num1>num3){
    console.log("El numero ",num1," es el mayor de los 3");
}else if(num2<num3){
    console.log("El numero ",num3," es el mayor de los 3");
}else{
    console.log("El numero ",num2," es el mayor de los 3");
}






