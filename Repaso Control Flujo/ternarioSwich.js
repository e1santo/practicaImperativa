//if ternario "" variable == Condicion?lo que hace si se cumple:lo que hace si no se cumple

let fruta = "Pera"
let resultado = fruta == "Naranja"?"buenisimo, me hago un jugo": "...mmm...Que me puedo hacer";
console.log (resultado);


//Switch ""Switch(variable){
//     case condicion:
//     lo que hace si se cumple;
//     break
//     case condicion:
//     lo que hace si se cumple;
//     break
//     case condicion:
//     lo que hace si se cumple;
//     break
//     default: lo que hace si no se cumple nada de los casos anteriores
// }

let luz = "verde"
switch (luz){
    case "verde":
    console.log ("Puede pasar")
    break;
    case "amarilla":
    console.log ("Precaucion")
    break;
    case "roja":
    console.log ("No Puede pasar")
    break;
    default :
    console.log ("No funca el semaforo");
}