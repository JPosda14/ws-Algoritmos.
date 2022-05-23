//llamada de element
const ginicio = document.getElementById('inicio');
const gfinal = document.getElementById('fin');
const cuant = document.getElementById('cuanto');
const cantotal = document.getElementById('cantidadt');
const minexis = document.getElementById('eliexistencias');
const aumexis = document.getElementById('agrexistencias');
const buscp = document.getElementById('buscar');
const elimp = document.getElementById('eliminarpro');
const ordp= document.getElementById('ordenarpro')

let products = [];
let option
ginicio.addEventListener('click', addprodct);
ginicio.addEventListener('click', proi);
gfinal.addEventListener('click', addprodct);
gfinal.addEventListener('click', prof);

cuant.addEventListener('click', crearray);
cuant.addEventListener('click', infocuanto);

cantotal.addEventListener('click', crearray);
cantotal.addEventListener('click', infocantotal);

minexis.addEventListener('click', crearray);
minexis.addEventListener('click', menexis);

aumexis.addEventListener('click', crearray);
aumexis.addEventListener('click', auexis);

buscp.addEventListener('click', crearray);
buscp.addEventListener('click', searchp);

elimp.addEventListener('click', crearray);
elimp.addEventListener('click', eliminp);

ordp.addEventListener('click', crearray);
ordp.addEventListener('click', ordenp);





function addprodct() {
    const nombre = document.getElementById('nombre').value;
    const precio = document.getElementById('precio').value;
    const categoria = document.getElementById('categoria').value;
    const cantidad = document.getElementById('cantidad').value;
    option = { 'nom': nombre, 'pric': precio, 'can': cantidad, 'cat': categoria }
    console.log(option);

}

function proi() {
    products.unshift(option)
    console.log(products)
    localStorage.products = JSON.stringify(products)

}

function prof() {
    products.push(option)
    console.log(products)
    localStorage.products = JSON.stringify(products)
}
var larosadgp
function crearray() {
    larosadgp = JSON.parse(localStorage.products)
    console.log(larosadgp)
}
// Informar cuántos productos hay por categoría
function infocuanto() {
    let htmcat= document.getElementById('procate')
    let string = "";
    let promcat = (prompt('Escriba la categoria que quiere ver'))
    let catep = larosadgp.filter(producto => producto.cat == promcat)
    console.log(catep)
    console.log(larosadgp[0]['cat'])
    string= string + `En la categoria ${promcat} hay ${catep.length} productos`
    for (let i = 0; i < catep.length; i++) {
        string=string+ ` <br>${i+1}) ${catep[i]["nom"]} `
        
    }
       htmcat.innerHTML=`${string}`
  
}

// Informar la cantidad total de productos
function infocantotal() {
    let string=""
    let totalp= document.getElementById('totalp')
    string = `En la tienda hay ${larosadgp.length} productos`
    console.log(larosadgp.length)
    for (let i = 0; i < larosadgp.length; i++) {
        string=string+ `<br>${i+1}) ${larosadgp[i]["nom"]}`
    }
    totalp.innerHTML=`${string}`
}
// Disminuir existencias de un producto
function menexis() {
    let eliexis = document.getElementById('eliexis')
    let promen = prompt('digite el nombre del producto a disminuir su cantidad')
    let noex

    for (let i = 0; i < larosadgp.length; i++) {
        let condicion = larosadgp[i]['nom'].includes(promen)
        if (condicion) {
            if (larosadgp[i]['nom'] == promen) {
                let discanti = prompt('ingrese cuanto va disminuir del producto')
                larosadgp[i]['can']=larosadgp[i]['can']-discanti
                eliexis.innerHTML=`Ahora la cantidad de ${promen} es de ${larosadgp[i]['can']} unidades <br>`
                noex='hola';
                break;
            }
        } else {
            noex="No existe"
        }
    }
    if (noex=="No existe") {
        eliexis.innerHTML=`El producto a buscar no esta en la lista de productos <br>`
    }
    products=larosadgp
    console.log(products)
    localStorage.products = JSON.stringify(products)
}


// Aumentar existencias de un producto
function auexis() {
    let aexis = document.getElementById('aexis')
    let proma = prompt('digite el nombre del producto a aumentar su cantidad')
    let noex

    for (let i = 0; i < larosadgp.length; i++) {
        let condicion = larosadgp[i]['nom'].includes(proma) 
        if (condicion) {
            if (larosadgp[i]['nom'] == proma) {
                let discanti = prompt('Cuanto va aumentar del producto')
                larosadgp[i]['can']=parseInt(larosadgp[i]['can'])+ parseInt(discanti)
                aexis.innerHTML=`Ahora la cantidad de ${proma} es de ${larosadgp[i]['can']} unidades <br>`
                noex=false;
                break;
            }
        } else {
            noex="No existe"
        }
    } 
        
    if (noex=="No existe") {
        aexis.innerHTML=`El producto no esta en la lista de productos  <br>`
    }
    products=larosadgp
    console.log(products)
    localStorage.products= JSON.stringify(products)

}

// buscar un producto por nombre
function searchp() {
    let sear=document.getElementById('sear')
    let promb = prompt('digite el nombre del producto')
    let noex

    for (let i = 0; i < larosadgp.length; i++) {
        let condicion = larosadgp[i]['nom'].includes(promb)
        if (condicion) {
            if (larosadgp[i]['nom'] == promb) {  
                sear.innerHTML=`El producto ${larosadgp[i]['nom']} tiene: <br> Categoria ${larosadgp[i]['cat']}  <br> Precio ${larosadgp[i]['pric']}  <br>Cantidad ${larosadgp[i]['can']}  <br>`
                noex=false;
                break;
            }
        } else {
            noex="No existe"
        }
    }    
    if (noex=="No existe") {
        sear.innerHTML=`El producto no esta en la lista de productos`
    }
}
// eliminar un producto
function eliminp() {

    let elim=document.getElementById('elim')
    let prome = prompt('digite el nombre del producto')
    let noex
    for (let i = 0; i < larosadgp.length; i++) {
        let condicion = larosadgp[i]['nom'].includes(prome)
        if (condicion) {
            if (larosadgp[i]['nom'] == prome) {
                larosadgp.splice(i,1)
                elim.innerHTML=`El producto ${prome} esta eliminao`
                console.log(larosadgp)
                noex=false;
                break;
            }
        } else {
            noex="No existe"
        }
    }    
    if (noex=="No existe") {
        elim.innerHTML=`El producto no esta en la lista de productos`
    }
    products=larosadgp
    console.log(products)
    localStorage.products= JSON.stringify(products)

}
// listar los productos en orden alfabético
function ordenp() {
    let abc=document.getElementById('abc')
    let string=""
    larosadgp   .sort((a,b) => {
        const nombreA = a.nom.toLowerCase() 
        const nombreB =b.nom.toLowerCase()
        if (nombreA < nombreB) {
            return -1;
        }

        if (nombreA > nombreB) {
            return 1;
        }

        return 0;
    })
    console.log(larosadgp)

    for (let i = 0; i < larosadgp.length; i++) {
        string=string+JSON.stringify(larosadgp[i])+`<br>`
    }
    abc.innerHTML=`${string}`


}






























// const listapro=document.getElementById('listapro');
// const element= document.createElement('div');
// element.innerHTML= `
// <div class="card text-center mb-4">
// <div class="card-body">
// <strong>Nombre</strong>: ${nombre}
// <strong>precio</strong>: ${precio}
// <strong>categoria</strong>: ${categoria}
// </div>
// </div>
// `;
// listapro.appendChild(element);