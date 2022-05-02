"use strict";
function saludar(){
    let saludo = document.getElementById('Saludo');
    //Este sirve para obtener un elemento como su nombre lo indica, según el nombre o el identificador que le hayamos puesto en el HTML
}
saludar()


function Pregunta() {
    const list = document.getElementsByTagName("ul")[0];
    list.getElementsByTagName("li")[0].innerHTML = "Seguir avanzando";
    //Este devuelve una colección de elementos con el nnombre de una etiqueta de HTML especifica.
  }

  function nuevoelemento(){
    let nuevoDiv = document.createElement("div");
    let contdiv = document.createTextNode("Como sigue la vida?");
    nuevoDiv.appendChild(contdiv);
    let div = document.getElementById("div1");
    document.body.insertBefore(newDiv, div);
  }//Este sirve para crear un nuevo elemento en el HTML, como puede ser un div, y poder ponerle información adentro.
  nuevoelemento()   

  function niño(){
  let p = document.createElement("p");
document.body.appendChild(p);
//Se pone un nodo al final de un elemento 
}
niño()
txt = document.getElementById("texto");
console.log(txt.innerHTML);
//remplaza lo que hay en el HTML del elemento que hay por uno nuevo.

let boton = document.querySelector("button");
boton.setAttribute("Nombre", "holaboton");
boton.setAttribute("deshabilitar", "");
// Aquí establecemos de un atributo indicado. Si este atributo ya existe, pues se actualiza. Ya se le da un nombre y valor nuevo.
let div1 = document.getElementById("div1");
let atridiv = div1.getAttribute("atridiv");
alert(atridiv);
//Aqui si el atributo no está definido nos dara un null, pero si esta definido pero no tiene valo se devuelve un string vacio ("").

function Cambiartexto() {
    let t2 = document.getElementById("Saludo");
    t2.firstChild.nodeValue = "three";
    function evento() {
        let el = document.getElementById("tecto");
        el.addEventListener("click", Cambiartexto, false);
    }//Registra un evento a un objeto que nosotros le digamos, también puede ser un archivo

    window.scrollTo( 0, 100 );
    //Desplaza nuestra vista a un lugar especifico con las cordenada que se le den 

    let timeout;
function delayedAlert() {
  timeoutID = window.Timeout(slowAlert, 2000);
}

function slowAlert() {
  alert("Si ves que se demora");
}

function clearAlert() {
  window.clearTimeout(timeoutID);
}// Aquí puedes modificar cuanto tarda en salir una alerta o una función que pueda salir en pantalla para el usuario.

let repit;

     function cambiaDeColor() {
        repit = setInterval(flasheaTexto, 1000);
     }
     function flasheaTexto() {
        let oElem = document.getElementById('saludo');
        oElem.style.color = oElem.style.color == 'red' ? 'blue' : 'red';
     }

     function detenerCambioDeColor() {
        clearInterval(repit	);
     }//Se ejecuta una parte del codigo de forma repetida cada cierto tiempo.

 let comfirmar= window.confirm(message);// nos muestra una pestaña donde se le pregunta al usuario algo para confirmar.
    }