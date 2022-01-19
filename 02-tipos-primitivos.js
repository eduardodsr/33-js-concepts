// 02 - Tipos Primitivos

/* 
    No JavaScript, existem 6 tipos primitivos:
        * String
        * Number
        * Boolean
        * Null
        * undefined
        * Symbol (novo no ECMAScript 6)
*/

console.log(typeof true);                           // bolean
console.log(typeof Boolean(true));                  // bolean
console.log(typeof new Boolean(true));              // object
console.log(typeof (new Boolean(true)).valueOf);    // function

console.log(typeof 'Eduardo');                      // string
console.log(typeof 18);                             // number

console.log('Eduardo'.length);                      // 7

var doze = new Number(12);                          // 12
var quinze = doze + 3;                              // 12 + 3
console.log(quinze);                                // 15

console.log(typeof doze);                           // object
console.log(typeof quinze);                         // number