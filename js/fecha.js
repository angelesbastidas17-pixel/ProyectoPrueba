var fecha = new Date(2003,9,16);
//var fecha = new Date("10/01/2026");

var dia = fecha.getDate();
var mes = fecha.getMonth();
var año = fecha.getFullYear();

alert("dia: "+dia+" mes "+(mes+1)+" año "+año);
