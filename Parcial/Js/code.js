// 1. Identifique la nota más alta y la frecuencia de esta nota en el arreglo de
// estudiantes, imprima en pantalla el resultado, siguiendo este patrón:
// La nota más alta es ###, y la nota fue obtenida ## veces por los estudiantes
// @@@, del curso. (1 punto)
// 2. Buscar un estudiante por nombre, la función debe retornar una cadena de
// texto así: (0,5 puntos)
// Encontrado: nombre: @@ y su nota es: ##
// No se encuentra el estudiante de nombre: @@@
// 3. Promedio de notas del curso, la función debe retornar una cadena indicando
// el promedio de notas del curso. (0,5)
// 4. Mostrar los estudiantes del curso y sus notas asociadas, la función debe
// retornar una cadena de texto con los nombres de los estudiantes y la nota
// asociada.(0,5)


let salir;
let estudiantes = [];
let notas = [];


let i = 0;

while (salir !== 0) {
    let estudiante = prompt("Estudiante:");
    let nota = prompt("Nota estudiante");
    salir = parseInt(prompt("No poner más estudiantes pon 0, si quieres continuar poniendo más pon 1"));
    estudiantes[i] = estudiante;
    notas[i] = nota;
}


function busqueda() {
    let search
    alert("Notas del estudiante")

    while (search != 0) {
        let nombre = prompt("Nombre del estudiante").toUpperCase;
        if (nombre == estudiantes[i].toUpperCase) {
            for (let i = 0; i <= estudiantes.length; i++) {
                if (nombre == estudiantes[i].toUpperCase) {
                    alert(`El estudiante ${estudiantes[i]} tiene una nota de ${notas[i]}`);

                }
            }
        } else {
            alert(`No se encuentra el estudiante de nombre: ${nombre}`)
            
        }
        search = prompt("Para no busacar más estudiantes pon 0")
    }
}
busqueda();

