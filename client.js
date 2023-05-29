var botonAgregar = document.getElementById('abrir-formulario');
var formulario = document.getElementById('formulario');
var formularioAgregar = document.getElementById('formulario-agregar');

botonAgregar.addEventListener('click', function() {
    formulario.style.display = 'block';
});

formularioAgregar.addEventListener('submit', function(event) {
    event.preventDefault();

    var asunto = document.getElementById('asunto').value;
    var prioridad = document.getElementById('prioridad').value;
    var descripcion = document.getElementById('descripcion').value;
    var color = document.getElementById('color').value;

    var nuevoElemento = {
        asunto: asunto,
        prioridad: prioridad,
        descripcion: descripcion,
        color: color
    };

    // Aquí puedes hacer algo con el nuevo elemento, como guardarlo o mostrarlo en la página

    formularioAgregar.reset();
    formulario.style.display = 'none';
});
