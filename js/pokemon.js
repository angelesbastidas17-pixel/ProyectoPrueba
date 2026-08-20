function preparadoONo(nombres,habilidades){
    for(i = 0; i<nombres.length;i++){
        if(calcularPromedio(habilidades[i])>=70){
            console.log("el pokemon "+nombres[i]+" supera el promedio con: "+calcularPromedio(habilidades[i]))
        }else{
            console.log("el pokemon "+nombres[i]+" No supera el promedio con: "+calcularPromedio(habilidades[i]))
        }
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

preparadoONo(nombres,habilidades);