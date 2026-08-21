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

let noEstaNombre = true
for(let i=0;i<nombres.length;i++){
    if((nombre.toLowerCase() === nombres[i].toLowerCase())==true){
        console.log("nombre: "+nombre.toLocaleLowerCase())
        console.log("nombres[i]: "+nombres[i].toLowerCase())
        console.log("comparación: "+nombre.toLowerCase() === nombres[i].toLowerCase())
        noEstaNombre = false
    }
}
if(noEstaNombre===false){
    console.log("El nombre si esta")
}else{
    console.log("El nombre no esta")
}