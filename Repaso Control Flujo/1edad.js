
// Agregá caminos
// Revisá el siguiente código y asegurate de entenderlo para poder avanzar con el
// ejercicio.
// let edad = 20 //(el número es a modo de ejemplo, podés cambiarlo o
// crear otras para tener varias pruebas)
// if(edad < 18) {
// console.log("No puede pasar al bar.")
// } else if (edad < 21){
// console.log("Puede pasar al bar, pero no puede tomar alcohol.")
// } else {
// console.log("Puede pasar al bar y tomar alcohol.")
// }
// Sin repetirte, modificá tu código de forma tal que cumpla con estas consignas:
// Si la edad es negativa, que se muestre en la consola este mensaje: "Error, edad
// inválida. Por favor ingrese un número válido."
// Importante: no se deberá mostrar ningún otro mensaje.
// Si tiene 21 años, además de darle la bienvenida, felicitarlo por haber llegado a
// la mayoría de edad.
// Si su edad es impar, decirle en cualquiera de los mensajes: "¿Sabías que tu
// edad es impar?".
var edad = parseInt(prompt("Ingrese su edad:"))

if (edad<18){
    console.log("No puede Pasar al Bar");
}else if (edad < 21){
    console.log ("Puede pasar al Bar, pero no puede tomar alcohol");
}else{
    console.log ("Puede pasar al Bar y tomar alcohol.")
}