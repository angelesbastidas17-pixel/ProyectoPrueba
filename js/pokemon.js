function preparadoONo(promedio){
    if(promedio>=70){
        return true;
    }else{
        return false
    }
}

function calcularPromedio(habilidad){
    let suma = 0;
    for(let i =0;i<habilidad.length;i++){
        suma += habilidad[i];
    }
    return suma/(habilidad.length); // la i se queda en la ultima iteracion (0 si, 1 si, 2 si, 3 no entra pero conserva ese valor)
}

let nombres = ["pikachu","Charmi","Squirrel"];
let habilidades = [[50,70,90],[100,35,56],[54,22,89]];

for(i = 0; i<nombres.length;i++){
    console.log(nombres[i]);
    let prom = calcularPromedio(habilidades[i]);
    console.log("habilidades: "+habilidades[i]+" y el promedio: "+prom);
    console.log("Esta preparado? "+preparadoONo(prom));
}
