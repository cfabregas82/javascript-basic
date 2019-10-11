console.log("Hola Mundo")

alert("¡Me llamo Cristian!")
var a = "¡Mi apellido es Fàbregas!"
alert( a )

var b = "Cristian"
var c = " Fàbregas"
console.log( b+c )

var num1 = 48
var num2 = 62
suma = num1 + num2
console.log("La suma entre los números es: "+suma)

var nota_examen = 9.8;
if (nota_examen >= 5) {
alert("Felicidades, has aprovado el examen con un "+nota_examen);
}
else {
alert("Mecachis, has suspendido el examen con un "+nota_examen);
}

var d = "Tinc un cotxe de color verd"
console.log( d )

var frase = "Tinc un cotxe de color verd";
frase = frase.replace("verd","blau");
console.log(frase)

var frase2 = "Tinc un cotxe de color blau";
frase2 = frase2.replace(/o/gi,'u');
console.log(frase2);

var objeto = ["Mesa", "Silla", "Ordenador", "Libreta"];
var contador;
for( contador=0; contador < 4; contador++ ) {
console.log( "El objeto " + objeto[contador] + " está en la posición " + contador + "  " ); 
}

