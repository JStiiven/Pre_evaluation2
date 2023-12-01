function hora(horas){
    if(isNaN(horas)){
        return "Ingrese sus horas en dato numerico"
    }
    if(horas >= 1){
        return horas * 2000
    }
    return "usted no tiene derecho a bonificación este mes"
}
let pedirHoras = parseInt(prompt("Ingrese horas extras trabajadas"))
console.log(hora(pedirHoras));