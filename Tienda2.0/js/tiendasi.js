//llamada de element
const ginicio = document.getElementById('inicio');
const gfinal= document.getElementById('final');
let products = [];
let option
ginicio.addEventListener('click', addprodct);
ginicio.addEventListener('click', proi);
gfinal.addEventListener('click', addprodct);
gfinal.addEventListener('click', prof);

cuant.addEventListener('click', infocuanto);
cantotal.addEventListener('click', infocantotal);
minexis.addEventListener('click', menexis);
aumexis.addEventListener('click', auexis);
buscp.addEventListener('click', searchp);
elimp.addEventListener('click',eliminp) ;
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
function infocuanto(){

}
// Informar la cantidad total de productos
function infocantotal(){

}
// Disminuir existencias de un producto
function menexis(){

}
// Aumentar existencias de un producto
function auexis(){

}
// buscar un producto por nombre
function searchp(){

}
// eliminar un producto
function eliminp(){

}
// listar los productos en orden alfabético
function ordenp(){


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