// 4 - Implícito, Explicito, Nominal, Estruturando e Chamada de métodos

// Coerção - > é quando o JavaScript tenta converter um tipo de um valor para um tipo esperado. 

console.log('5' - 5);       // 0 
console.log('5' + 5);       // '55'
console.log(true + 1);      // 2
console.log(true + true);   // 2
console.log([] + {});       // [object Object]
console.log([] + []);       // ""

// Coerção Implícito -> O JavaScript deduz facilmente o que deve ser feito.

console.log(+'5');          // 5
console.log(5 + '');        // '5'
console.log(123 && 'oi');   // 'oi'
console.log(null || true);  // true

// Coerção Explicito -> String, Number, Bolean. O JS entende de forma muita clara o que deve ser feito.

console.log(Number('50'));  // 50
console.log(String(50));    // '50'

// Duck Typing in JavaScript - Se anda como Pato e fala com um Pato. Então, só pode ser um Pato.
// Qualquer coisa pode ser de qualquer tipo em JavaScript. 
// O JavaScript não valida os tipos esperados. Essa validação o deservolvedor deve fazer.
// Portanto, a importancia do TypeScript para o JS ficar fortemente tipado.

function somaNumeros (a, b) {
    return a + b;
}
console.log(somaNumeros(4, 6));         // soma dos números     // (4 + 6) = 10
console.log(somaNumeros(4, 'DuckType')); // concatenação        // (4 + 'DuckType') = '4DuckType'

