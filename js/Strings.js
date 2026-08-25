let nombreCompleto = "Angeles Cumandá Bastidas Piedra"

// console.log(nombreCompleto.slice(2,12));
// console.log(nombreCompleto.split(" "));

let correo = "angeles12@gmail.com"

// console.log(correo.includes("@"));

let nombres = ["Ana","Sofia","Carla","Lola","Luna","Silvia"];
let numeros = [10,20,30,40,50];

function darVuelta(modelo){
    for(let i=0,j=modelo.length-1;i<j;i++,j--){
        let aux = modelo[i];
        modelo[i]=modelo[j];
        modelo[j]=aux;
    }
    return modelo
}

// console.log(darVuelta(nombres))
// console.log(darVuelta(numeros))



let nombre = prompt("Un nombre: ")

let nombresTrans = nombres.map(nombre => nombre.toLowerCase())

let tieneEseNombre = nombresTrans.includes(nombre.toLocaleLowerCase());
console.log(tieneEseNombre)


// for(let i=0;i<nombres.length;i++){
//     let tieneEseNombre = nombres[i].includes(nombre);
//     if(tieneEseNombre==true){
//         console.log("El nombre si esta")
//     }else{
//         console.log("El nombre no esta")
//     }
// }

