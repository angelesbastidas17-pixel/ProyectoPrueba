let cosas = ["lapiz","esfero"];
cosas.push("calculadora");
cosas.shift();
cosas.unshift("gato","mesa");
cosas.pop();

console.log(cosas);

let cosasConO = cosas.filter(cosa => cosa.includes("o"));
console.log(cosasConO);

cosas2 = ["tablet","laptop","audífonos","agua"];

let cosasTodas = cosas.concat(cosas2);
console.log(cosasTodas);
console.log(cosasTodas.reverse());
console.log(cosasTodas.sort());