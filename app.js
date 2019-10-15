//exercici 1//
console.log("Hola Mundo");

//exercici 2//
alert("¡Me llamo Cristian!");
var a = "¡Mi apellido es Fàbregas!";
alert(a);

//exercici 3//
var b = "Cristian"
var c = " Fàbregas"
console.log(b+c);

//exercici 4//
var num1 = 48
var num2 = 62
suma = num1 + num2
console.log("La suma entre los números es: "+suma);

//exercici 5//
var nota_examen = 9.8;
if (nota_examen >= 5) {
alert("Felicidades, has aprovado el examen con un "+nota_examen);
}
else {
alert("Mecachis, has suspendido el examen con un "+nota_examen);
}

//exercici 6//
var d = "Tinc un cotxe de color verd"
console.log( d )

var frase = "Tinc un cotxe de color verd";
frase = frase.replace("verd","blau");
console.log(frase)

var frase2 = "Tinc un cotxe de color blau";
frase2 = frase2.replace(/o/gi,'u');
console.log(frase2);

//xercisi 7//
var objeto = ["Mesa", "Silla", "Ordenador", "Libreta"];
var contador;
for( contador=0; contador < 4; contador++ ) {
console.log( "El objeto " + objeto[contador] + " está en la posición " + contador + "  " ); 
}

//exercici 8//
function calculadora(operador, valor1, valor2){
if (operador == "suma"){
    return "El resultado de la suma entre " +valor1+ " y " +valor2+ " da como resultado " +(parseInt(valor1) + parseInt(valor2));
} 
else if (operador == "resta"){
    return "El resultado de la resta entre " +valor1+ " y " +valor2+ " da como resultado " +(parseInt(valor1)-parseInt(valor2));
}    
else if (operador == "multipl"){
    return "El resultado de la multiplicación entre " +valor1+ " y " +valor2+ " da como resultado " +valor1*valor2;
}
}
alert (calculadora("resta",20,5))