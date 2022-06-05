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
    larosadgp=JSON.parse(localStorage.products)

    let eliexis = document.getElementById('eliexis')
    let promen = prompt('digite el nombre del producto a disminuir su cantidad')
    let findd= larosadgp.find(elemett => elemett.nom == promen)
    if (findd==undefined) {
        eliexis.innerHTML=`<br> El producto no esta en la lista de productos`
    } else{
        let menenexis=parseInt(prompt('ingrese la cantidad que quiere disminuir'))
        findd.can=parseInt(findd.can)-parseInt(menenexis)
        eliexis.innerHTML=`<br> La cantidad de ${promen} es de ${findd.can} unidades `
   }
    products=larosadgp
    console.log(products)
    localStorage.products = JSON.stringify(products)
}


// Aumentar existencias de un producto
function auexis() {
    larosadgp=JSON.parse(localStorage.products)

    let aexis = document.getElementById('aexis')
    let proma = prompt('digite el nombre del producto a aumentar su cantidad')
    let findd= larosadgp.find(elemett => elemett.nom == proma)
    if (findd==undefined) {
        aexis.innerHTML=`<br> El producto no esta en la lista de productos`
    } else{
        let morexis=parseInt(prompt('ingrese la cantidad a aumentar'))
        findd.can=parseInt(findd.can)+parseInt(morexis)
        aexis.innerHTML=`<br> La cantidad de ${proma} es de ${findd.can} unidades `
   }
    
    products=larosadgp
    console.log(products)
    localStorage.products= JSON.stringify(products)

}

// buscar un producto por nombre
function searchp() {
    larosadgp=JSON.parse(localStorage.products)

    let sear=document.getElementById('sear')
    let promb = prompt('digite el nombre del producto')
    let findd=larosadgp.find(elemett => elemett.nom == promb)                                
     if (findd==undefined) {
        sear.innerHTML=`No está el producto ${promb}`
    } else{
        sear.innerHTML=`El producto ${findd.nom} tiene: <br> Categoria ${findd.cat}  <br> Precio ${findd.pric}  <br>Cantidad ${findd.can}  <br>`
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
    larosadgp.sort((a,b) => {
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