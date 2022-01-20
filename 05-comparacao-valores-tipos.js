// 5. == vs === vs typeof

// ==                       // comparação somente do valor
// ===                      // comparação do valor e o tipo

console.log(3 == '3');      // true
console.log(3 === '3');     // false

// typeof -> validação de tipos

console.log(typeof 'Eduardo' === 'string'); // true

console.log(typeof 55 === 'number');        // true

console.log(typeof '55' === 'string');        // true

console.log(typeof(true));                  // boolean

console.log(typeof(true) === 'boolean');    // true