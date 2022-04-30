// //Se tiene una tienda con un inventario de los siguientes productos:

// ● huevos (30 canastas)=15000 c/u
// ● leche (20 unidades) =3500 c/u
// ● pan (50 unidades)=2000 c/u
// ● fruta mix (50 unidades)=5000 c/u
// ● Al presionar un botón genere un bono de regalo utilizando un random
// (Math.random), indiquele al usuario el valor del bono generado.
// ● Solicite al usuario ingresar los productos que desea llevar, agregando uno a uno
// ● Al finalizar la compra debe indicarle al usuario el monto total de la compra, el
// descuento generado por el bono de regalo, y el monto final que deberá pagar.
// ● Suba el proyecto a su repositorio personal y comparta la URL del repositorio en
// classroom. Puede usar como guía el proyecto cargado en el repositorio base
// (ejercicio-práctico).


//Se crea las variables de precio de cada producto
const huevos=15000; 
const leche=3500;
const pan=2000;
const fruta=5000;
//Se hace el arreglo donde se situan los productos 
let array_precio=[huevos,leche,pan,fruta];
console.log(array_precio);

//Se sacan los elementos del html registrados en el formulario
const cantihuevos=document.getElementById('cantihuevos')
const cantifruta=document.getElementById('cantifruta')
const cantipan=document.getElementById('cantipan')
const cantileche=document.getElementById('cantileche')

//Se ponen los respectivos elementos en un arreglo
let arrecant;
let form=document.getElementById("fomulario");
form.addEventListener("submit",conservar=(e)=>{ e.preventDefault();
    console.log("nada");
    arrecant=[cantidadegg.value,cantidadmilk.value,cantidadpan.value,cantidadfruit.value]
    let paytotal=document.getElementById("Totalpay");
    //Funcion donde se crea el pago total a pagar
    function totalpagar(){
        let valores=[huevos,leche,fruta,pan]
        let  valortal=[]
        for (let i = 0; i < 4; i++) {
        valortal[i]=parseInt(arrecant[i]*valores[i]);
        }
        for (let i = 0; i < 4; i++) {
        sumarreglo+=resultadopago[i];               
        } 
        let pordes=parseInt(resultado_descuento*sumarreglo);
        let paydes=parseInt(sumarreglo-pordes);
        sumarreglo=0;
     paytotal.innerHTML=`El total que debes de pagar es de ${paydes}`
    }
    let boton2=document.getElementById("boton2")
    boton2.addEventListener('click',totalpagar())
})  


//Función donde se va a crear el descuento aleatorio para el usuario

let band=false;
let promocion= 0
let preciofin=0

function descuento(){
    
    if (band==false){
        let descuento= parseInt(Math.random() * (100 - 1) + 1)
        console.log(descuento)
        preciofin=promocion/100;
        let lado=document.getElementById("ladescuento");
        lado.innerHTML=`Mira aquí esta el descuento, equivale a ${descuento}%`;
        band=true;     
    } else {
        alert("Ey ya tienes descuento")
    }
console.log(descuento);
    }
    
let boton_descuento=document.getElementById("boton")
boton_descuento.addEventListener('click',descuento)