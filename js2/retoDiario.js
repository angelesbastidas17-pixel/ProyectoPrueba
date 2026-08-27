let sol = "akhdaedekdedesds"
let solV = sol.split("").reverse().join("")
console.log(solV)

// let hola = "holas y los pandas";
// console.log(hola.split("s").join(""))
// let holaN = hola.slice(2,6)
// let holaLong = hola.split("")
// holaLong.slice(2,6)
// console.log(holaN)
// console.log(holaLong)

let parte1 = "hola "
let parte2 = "mundo"
console.log(parte1.concat(parte2))

let hola = "holas y los pandas";
let holaLong = hola.split("")

while(holaLong.includes("s")){
    holaLong.pop()
}
console.log(holaLong)

let s = "(f(b(dc)e)a)"

while(s.includes("(") || s.includes(")")){
    
}

// function cambio (s){
//     let scopia = s.slice(0,s.length+1);
//     for(let i = 0; i<scopia.length;i++){
//         if(s.at(i)==")"){
//             let scopy = s.slice(0,i);
//             let indice1 = scopy.lastIndexOf("C")
//             let mini = s.slice(indice1+1,i)
//             let limpio = mini.split("").reverse().join("")
//             let parteA = s.slice(0,indice1)
//             let parteB = s.slice(i+1,s.length)
//             var s = (parteA.concat(limpio).concat(parteB));
//         }
//     }
//     return s
// }

// console.log(cambio(s));