console.log("FUNCIONES")
console.log("FORMA CLASICA")

function saludar(){
    console.log("Hola desde una función clasica");
}
 saludar();

console.log("FORMA CON PARAMETROS Y RETORNO")
function sumar(a,b){
    return a + b 
}
let resultado = sumar(4,9);
console.log("La suma es ",resultado);

console.log("FUNCIÓN FLECHA")
const resta = (a,b) =>{
    return a - b 
}
let resultadoResta = resta(9,5);
console.log("La resta es ",resultadoResta);

console.log("FUNCIÓN RETORNO DIRECTO");
const cuadrado = x =>x*x;
console.log("El cuadrado de 5: ",cuadrado(5));

console.log("FUNCIÓN CON PARAMETROS POR DEFECTO");
function saludar( nombre, saludo="Hola"){
    return saludo + " "+nombre;
}

let saludo1 = saludar("Dylan");
let saludo2 = saludar("Dylan", "Buenos dias");
console.log(saludo1);
console.log(saludo2);

function parImpar(numero){
    if(numero % 2 == 0){
        return "Numero par"
    }else{
        return "Numero impar"
    }
}
console.log(parImpar(5))
console.log(parImpar(9))

console.log("AREA DEL TRIANGULO")
function area(b,h){
    return (b*h)/2
}

resultadoArea = area(5,7);

console.log(resultadoArea)