//llamada de elementos

document.getElementById('formulario')
    .addEventListener('submit', function (e) {
     const nombre= document.getElementById('nombre').value;
     const precio= document.getElementById('precio').value;
     const categoria= document.getElementById('categoria').value;
     e.preventDefault();
    })
