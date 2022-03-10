botonNumeros.forEach(function(boton){
    boton.addEventListener('click', function(){
        agregarNumero(boton.innerText);
        
    })
});

function agregarNumero(num){
    if(num === '.' && opeActual.includes('.')) return;
    opeActual = opeActual.toString() + num.toString();
    actualizarDisplay();
}

function actualizarDisplay(){
    result.value = opeActual;
};


botonDelete.addEventListener('click', function(){
    clear();
    actualizarDisplay();
})

function clear(){
    opeActual = '';
    opeAnterior = '';
    operacion = undefined;
}

clear();



botonBorrar.addEventListener('click', function(){
    borrar();
    actualizarDisplay();
})

function borrar(){
    opeActual = opeActual.toString().slice(0,-1);
}