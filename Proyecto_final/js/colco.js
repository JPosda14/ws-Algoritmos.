Comprar= function comprao() {
    infoProductos.unshift([document.getElementById("nombreUno-producto").value,document.getElementById("preci1").value,document.getElementById("Cantip1").value])
    infoProductos.push([document.getElementById("nombreDos-Producto").value,document.getElementById("preci2").value,document.getElementById("Cantip2").value])
    infoProductos.push([document.getElementById("nombreTres-Producto").value,document.getElementById("preci3").value,document.getElementById("Cantip3").value])}
    try {
        comprarbtn.addEventListener('click',()=>{
        for (let i = 0; i < ubications.length; i++) {
            cambiosarreglos(i,ubications[i])
        }
        btncomprar()
       swal({
            title: "Completado!",
            text: "Has completado tu compra",
            icon: "success",
            button: "Continuar",
          })
          setInterval(() => {
            location.reload()
          }, 6000);
    
    })
    } catch (error) {
        console.log(error)
    }
    
    try {
        descartarbtn.addEventListener('click',descartar)
    } catch (error) {
        console.log(error)
    }
    
    try {
        valortt.addEventListener('click',()=>{
        valortotal()
        comprarbtn.removeAttribute('hidden')
    
    })
    } catch (error) {
        console.log(error)
    }
    
    
    
    async function takedatos() {
        productos=await getInfo('products')
        getproducts()
    
    }
    
    async function takeges() {
        ventas=await getInfo('ventas')
        productos=await getInfo('products')
        showsell()
        showInfo()
    
    }
    function direccionfactura(ubication) {
        string=string+`<tr><td>${productos[ubication]['nombre']}</td><td><input type="number" placeholder="Cantidad" class="espcantidad" min=1  max='${productos[ubication]['cantidad']}' autocomplete="off"
        class="form-control" id="canti${itt}"></td><td class='esprec'>${parseInt(productos[ubication]['precio'])}</td></tr>`
        ubications.push(ubication)
        espfactura.innerHTML=`${string}`;
        itt=itt+1
        
   }
   function valortotal() {
    let cantidades=document.querySelectorAll(`.espcantidad`)
    let precios=document.querySelectorAll(`.esprec`)
    let preciototal=0;
    console.log(cantidades);
    console.log(precios);
    for (let i = 0; i < precios.length; i++) {
       preciototal=preciototal+(parseInt(cantidades[i].value)*parseInt(precios[i].innerText))
    }

    totalnote.innerHTML=`Valor total:$${preciototal}`
}   