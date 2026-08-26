let sol = "akhdaedekdedesds"
let solV = sol.split("").reverse().join("")
console.log(solV)

let hola = "holas y los pandas";
console.log(hola.split("s").join(""))
let holaN = hola.slice(2,6)
console.log(holaN)

let parte1 = "hola "
let parte2 = "mundo"
console.log(parte1.concat(parte2))

let s = "(f(b(dc)e)a)"

function cambio (s){
    for(let i = 0; i<s.length;i++){
        if(s.at(i)==")"){
            let scopy = s.slice(0,i);
            let indice1 = scopy.lastIndexOf("C")
            let mini = scopy.slice(indice1+1,i)
            let limpio = mini.split("").reverse().join("")
            let parteA = s.slice(0,indice1)
            let parteB = s.slice(i+1,s.length)
            var snueva = (parteA.concat(limpio).concat(parteB));
        }
    }
    return snueva
}

console.log(cambio(s));