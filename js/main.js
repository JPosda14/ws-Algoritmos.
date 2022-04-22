//Validar los estudiantes que se inscriben al semillero y premiar con el pago de la inscripción bajo las siguientes condiciones:
// los estudiantes deben vivir en Armenia
//solo se pueden inscribir estudiantes de grado 10 o 11
// el primer estudiante en registrarse en el semillero tiene derecho al formulario de inscripción de manera gratuita. (se le debe indicar al usuario)
//El programa debe indicar al usuario si pudo ser realizada la inscripción y si tiene algún beneficio, así mismo informar el costo que tendrá la inscripción, utilice el
//valor de $100.000 como tarifa plena a pagar.
let estudiante = prompt("Bienvenido a la inscripción, cual es tu nombre?");
let ciudad= prompt("De que ciudad eres?");
let grado;
if (ciudad=="Armenia"){
grado= prompt("De que grado eres?")
}
else {alert("No puedes inscribirte si no eres de Armenia ;(")}
if (grado==10) {alert("te has inscrito al programa con un valor de 100.000$")} 
else if(grado==11) {alert("te has inscrito al programa con un valor de 100.000$")}


