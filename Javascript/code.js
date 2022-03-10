const botonNumeros = document.querySelectorAll('.numero');
const botonOperadores = document.querySelectorAll('.operador');
const botonIgual = document.querySelector('.igual');
const botonDelete = document.querySelector('.delete');
const botonBorrar = document.querySelector('.borrar');
var result = document.getElementById('result'); 
var opeActual = '';
var opeAnterior = '';
var operacion = undefined;



botonOperadores.forEach(function(boton) {
    boton.addEventListener('click', function(){
         selectOperacion(boton.innerText);
       
    })
});

botonIgual.addEventListener('click', function(){
    calcular();
    actualizarDisplay();
})



function selectOperacion(op) {
    if (opeActual === '') return;
    if (opeAnterior !== '') {
        calcular()
    }
    operacion = op.toString();
    opeAnterior = opeActual;
    opeActual = '';
}


