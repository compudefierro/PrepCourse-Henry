//Operaciones de comparación
console.log (4 < 7); 
console.log (4 < 1 );
console.log (4 > 4); 
console.log (4 == 7);
console.log (4 <= 5);
console.log (4 >= 5);
console.log (4 == '4');
console.log (5 == '5');
console.log (5 === 5);

//Igualdad vs igualdad estricta 
console.log (3 == 3); 
console.log (3 === 3); 
console.log (3 == "3"); 
console.log (3 === "3");
console.log (7 == "7");
console.log (7 === "7");

var a = 1;
var b = 2;
var c = a = b;
console.log('c= ', c);

console.log( 16 * 2 / 4 );

//Asignación y asociatividad
var a = 1;
var b = 2;
var c = a = b;
console.log (c); 