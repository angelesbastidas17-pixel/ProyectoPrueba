let names = ["Pikaro","Slashi","Kiku"]
let poderes = [[50,20,60],[96,80,50],[50,20,10]];

function promedio (poderes) {
    let sumaPod = poderes.reduce((total,habilidad) => total+habilidad,0);
    return (sumaPod/poderes.length)
}

function pasaONo(names,poderes){
    for (let i=0; i<names.length;i++){
        let prom = promedio(poderes[i])
        if(prom >= 70){
            console.log(names[i]+" pasa con: "+prom)
        }else{
            console.log(names[i]+" no pasa con: "+prom)
        }
    }
}

pasaONo(names,poderes);