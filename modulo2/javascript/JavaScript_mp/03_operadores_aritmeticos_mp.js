console.log("Operaciones Mensuales Promedio - HappyTails");

perrosAdoptados = 15;
gatosAdoptados = 5;

console.log("Suma (Total de adopciones)");
totalAdopciones = perrosAdoptados + gatosAdoptados;
console.log("Resultado:", totalAdopciones);

console.log("Resta (Perros sin adoptar)");
perrosRestantes = perrosAdoptados - gatosAdoptados;
console.log("Resultado:", perrosRestantes);

console.log("Multiplicación (Adopciones por semana)");
adopcionesSemanales = perrosAdoptados * gatosAdoptados;
console.log("Resultado:", adopcionesSemanales);

console.log("División (Promedio de adopciones)");
promedioAdopciones = perrosAdoptados / gatosAdoptados;
console.log("Resultado:", promedioAdopciones);

console.log("Módulo (Mascotas restantes al dividir)");
restantes = perrosAdoptados % gatosAdoptados;
console.log("Resultado:", restantes);

console.log("Potencia (Proyecciones a Largo Plazo)");
crecimiento = perrosAdoptados ** gatosAdoptados;
console.log("Resultado:", crecimiento);

console.log("Operadores Comparación");
console.log("Igualdad Débil ==", "5" == 5);
console.log("Igualdad Estricta ===", "5" === 5);
console.log("Desigualdad Débil !=", "5" != 5);
console.log("Desigualdad Estricta !==", "5" !== 5);
console.log("Mayor que >", 8 > 5);
console.log("Menor que <", 3 < 5);
console.log("Mayor o igual >=", 10 >= 10);
console.log("Menor o igual <=", 4 <= 6);

console.log("Operadores Lógicos");
console.log("Hay mas de 10 Perros y 3 Gatos?");
console.log(perrosAdoptados > 10 && gatosAdoptados > 3);

console.log("Almenos los perros y los gatos son mayores a 10?");
console.log(perrosAdoptados > 10 || gatosAdoptados > 10);

console.log("Tiene la misma cantidad de perros y gatos?");
console.log(!(perrosAdoptados == gatosAdoptados));
