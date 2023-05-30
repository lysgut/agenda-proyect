let botonAgregar = document.getElementById('abrir-formulario');
let formulario = document.getElementById('formulario');
let formularioAgregar = document.getElementById('formulario-agregar');

botonAgregar.addEventListener('click', function() {
    formulario.style.display = 'block';
});

formularioAgregar.addEventListener('submit', function(event) {
    event.preventDefault();

    let asunto = document.getElementById('asunto').value;
    let prioridad = document.getElementById('prioridad').value;
    let descripcion = document.getElementById('descripcion').value;
    let color = document.getElementById('color').value;

    let nuevoEvento = {
        asunto: asunto,
        prioridad: prioridad,
        descripcion: descripcion,
        color: color
    };

    console.log(nuevoEvento)

    formularioAgregar.reset();
    formulario.style.display = 'none';
});
