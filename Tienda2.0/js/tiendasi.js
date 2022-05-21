//llamada de elementos

document.getElementById('formulario')
    .addEventListener('submit', function (e) {
     const nombre= document.getElementById('nombre').value;
     const precio= document.getElementById('precio').value;
     const categoria= document.getElementById('categoria').value;
     e.preventDefault();
    });
const listapro=document.getElementById('listapro');
const element= document.createElement('div');
element.innerHTML= `
<div class="card text-center mb-4">
<div class="card-body">
<strong>Nombre</strong>: ${nombre}
<strong>precio</strong>: ${precio}
<strong>categoria</strong>: ${categoria}
</div>
</div>
`;
listapro.appendChild(element);