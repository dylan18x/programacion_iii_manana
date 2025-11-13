try{
    console.log(mascotaNoRegistrada);
}catch(error){
    console.log("mensaje de error: ",error.message);
}

try{
    console.log("Intentando registrar adopción . . .");
    throw new Error("Formulario de adopción incompleto");
}catch(error){
    console.log("mensaje de error: ", error.message);
}finally{
    console.log('Finalizando proceso de registro');
}