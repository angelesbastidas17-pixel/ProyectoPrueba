let vector = new Array(3);
vector[0] = "fuck";
console.log(vector.length);

var matriz = new Array(3);
for(let i = 0;i<3;i++){
    matriz[i] = new Array(3);
}

for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){
        matriz[i][j] = (i+1);
    }
}
console.log(matriz);

var num = prompt("numero: ");
if(num >1){
    let persona0 = ["Angeles","Cumanda"];
    let persona1 = ["Bastidas","Piedra"];

    let matriz = [persona0,persona1];

    console.log(matriz); // muere aqui
}

console.log(matriz); // la misma del inicio