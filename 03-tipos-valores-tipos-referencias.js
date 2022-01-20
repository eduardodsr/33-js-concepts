// 03 - Tipos de valores e Tipos de referências

// Tipos de Valores - Tipos Primitivos
// Tipos de referências - Arrays, Objetos e Funções

// Tipos de valores
var x = 10;
var y = x;
x = 20;

console.log(x, y);          // x = 20 ; y = 10 

// Tipos de referencia
var x = { valor: 10};
var y = x;
x. valor = 20;

console.log(x);             // { valor: 20 } // Object
console.log(y);             // { valor: 20 } // Object
