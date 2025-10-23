suma=0;
for(let i=1; i<=10;i++){
    console.log("numero ",i);
    suma += i;
    console.log("suma: ", suma);
}
multi=0;
for(let i=0; i<=10;i++){
    console.log("4 x ",i," = ", multi);
    multi += 4;
}

let nombre = "dylan";
for(let i=0;i<nombre.length;i++){
    console.log(nombre[i]);
}

for(let i=1;i<=10;i++){
    console.log("El cuadrado de",i, " es ", i**2);
}

console.log("Bucle While");
let i=1;
while(i<=6){
    console.log("Indice", i);
    i++;
}

let miArreglo=[-2,3,1,2,3];
let indice=1;

while(indice<miArreglo.length){
    console.log("Valor ", indice, " es ", miArreglo[indice]);
    indice++;
}

let miArreglo1=[1,2,3,4,5,6,7,8,9,10];
let indice1=0;
while(indice1<miArreglo1.length){
    if(indice1 %2 == 0){
        console.log("Numero par", indice1);
    }else{
        console.log("Numero impar", indice1);
    }
    indice1++;
}

let numero=1;
while(numero<=10){
    if(numero%2==0)
        console.log("Numero", numero," es par");
    numero++;
}

let x=5;
do{
    console.log("x es ", x)
    x--;
}while(x!=0);


let y=0;
multip=0;
do{
    console.log("5 x ",y," = ", multip)
    multip += 5
    y++;
}while(y!=11);


let arreglo = [1,4,6,3,2];
let indice2 = 0;
let mayor = 0;

while(indice2<arreglo.length){
    if(arreglo[indice2] < mayor){
        mayor=arreglo[indice2]
    }
    indice2++;
}
console.log(mayor);
