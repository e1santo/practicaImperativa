// Comentar linea ctrl+k+c ----- sacar comentario ctrl+c+u ---- tb se usa /* texto */ 

/* delaro variable con let*/
let variable1=123
/*cambio valor de la variable sin let*/
variable1 = 234
/*console.log() imprime en consola, veo lo que hice escribiendo en consola: "node nombreArchivo.js"*/
console.log(variable1);

/*declaro variables constantes con const, estas no pueden modificar su valor*/
/*las cadenas de textos van entre comillas*/
const constante1= "Matias Cusimano"
console.log(constante1);
/*_____________________________________________________________________*/

/* FUNCIONES*/
//FUNCIONES DECLARADAS: se cargan antes de que cualquier otro código sea ejecutado
//function sumar(){...arguments}

//ejemplo 
function sumar(a,b){
return a+b;
}
let suma = sumar(5,8)
console.log(suma);

//FUNCIONES EXPRESADAS: se cargan unicamente cuando el interprete alcanza la linea de codigo donde se encuentra la función
//let sumar =function (){...arguments.}

/*arrows functions*/

let sumando =(a,b) => a + b;
//____________________________________________________

/*CONTROL DE FLUJO*/
/* IF - ELSE IF - ELSE */

// Veamos cómo funciona
// Si quisiéramos restringir el acceso a una discoteca, tendríamos que saber si la
// persona es mayor o menor de edad. Esto lo podríamos resolver con una condición
// muy sencilla. ¿Qué opinás de nuestro programa para filtrar el acceso?

if (edad>=18){ //esto se lee: Si la edad es mayor a 18(condicion) entonces hago...
console.log("Puede pasar") //.. hago esto...
}else{ //... si no se cumple condicion entonces...
console.log("No puede pasar")//... hago esto.
}

if (condicion){
    funcion()
}else if (condicion){
    funcion()
}else {
    funcion()
}


