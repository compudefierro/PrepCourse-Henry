function sumaTres(x) {
    console.log(x + 3);
};

sumaTres(3);

//Función: cuidadoConElConsoleLog
function cuidadoConElConsoleLog(nombre) {
    //console.log(nombre);
    return nombre;
  };
console.log(cuidadoConElConsoleLog('Jorge'));

var sumaTresVar = function(x){
    return x + 3
};

console.log(sumaTresVar(3));

var sumatresFlecha = (x) => {
    return x + 3;
};

console.log(sumatresFlecha(4));