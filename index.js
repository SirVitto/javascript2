//Promedio de notas
//pedimos cantidad de notas
function pedirCantidad(){
    let cantNotas = parseInt(prompt("Ingrese la cantidad de notas que desee calcular"))
    return cantNotas
}
function promedio(total, cantidad){
    let resultado = total/cantidad
    return resultado
}
function mostrarDatos(acumulador, promedio){
    console.log("La suma total es " + acumulador);
    console.log("El promedio es " + promedio);
}
let nota = 0;
let acum = 0;
let prom = 0;

let cantNotas = pedirCantidad()
for (let i=0; i<cantNotas; i++){
    nota = parseInt(prompt(`Ingrese la nota ${i+1}`))
    acum = acum + nota
    console.log("acumulador parcial " + acum)
}
prom = promedio(acum,cantNotas)
mostrarDatos(acum, prom)