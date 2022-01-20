<h1 align="center">
<br>
  <a href="https://github.com/eduardodsr/33-js-concepts"><img src="https://i.imgur.com/dsHmk6H.jpg" alt="33 Conceitos que todo desenvolvedor JS deve conhecer" width=200"></a>
  <br>
    <br>
  33 Conceitos que todo desenvolvedor JS deve conhecer
  <br>
</h1>


## Introdução

Este repositório foi criado com a intenção de ajudar os desenvolvedores a dominar seus conceitos em JavaScript. Não é um requisito, mas um guia para estudos futuros. É baseado em um artigo escrito por [Stephen Curtis](https://twitter.com/stephenthecurt) e você pode lê-lo  [aqui](https://medium.com/@stephenthecurt/33-fundamentals-every-javascript-developer-should-know-13dd720a90d1).


---

## Tabela de conteúdos

1. **[Pilha de chamadas](#1-pilha-de-chamadas)**
2. **[Tipos primitivos](#2-tipos-primitivos)**
3. **[Tipos de valores e Tipos de referências](#3-tipos-de-valores-e-tipos-de-refer%C3%AAncias)**
4. **[Implícito, Explicito, Nominal, Estruturando e Chamada de métodos](#4-implícito-explícito-nominal-estruturando-e-chamada-de-métodos)**
5. **[== vs === vs typeof](#5--vs--vs-typeof)**
6. **[Escopo da Função, Escopo do Bloco e Escopo Léxico](#6-escopo-da-função-escopo-do-bloco-e-escopo-léxico)**
7. **[Expression vs Statement](#7-expression-vs-statement)**
8. **[IIFE, Modules e Namespaces](#8-iife-modules-e-namespaces)**
9. **[Message Queue e Event Loop](#9-message-queue-e-event-loop)**
10. **[setTimeout, setInterval e requestAnimationFrame](#10-settimeout-setinterval-e-requestanimationframe)**
11. **[JavaScript Engines](#11-javascript-engines)**
12. **[Bitwise Operators, Type Arrays e Array Buffers](#12-bitwise-operators-type-arrays-e-array-buffers)**
13. **[DOM e Layout Trees](#13-dom-e-layout-trees)**
14. **[Factories e Classes](#14-factories-e-classes)**
15. **[this, call, apply e bind](#15-this-call-apply-e-bind)**
16. **[new, Constructor, instanceof e Instances](#16-new-constructor-instanceof-e-instances)**
17. **[Prototype Inheritance e Prototype Chain](#17-prototype-inheritance-e-prototype-chain)**
18. **[Object.create e Object.assign](#18-objectcreate-e-objectassign)**
19. **[map, reduce, filter](#19-map-reduce-filter)**
20. **[Pure Functions, Side Effects e State Mutation](#20-pure-functions-side-effects-e-state-mutation)**
21. **[Closures](#21-closures)**
22. **[Funções de alta ordem](#22-funções-de-alta-ordem)**
23. **[Recursão](#23-recursão)**
24. **[Collections](#24-collections)**
25. **[Promises](#25-promises)**
26. **[async/await](#26-asyncawait)**
27. **[Estrutura dos dados](#27-estrutura-dos-dados)**
28. **[Expensive Operation e Big O Notation](#28-expensive-operation-e-big-o-notation)**
29. **[Algoritmos](#29-algoritmos)**
30. **[Herança, Polimorfismo e Reutilização de Código](#30-herança-polimorfismo-e-reutilização-de-código)**
31. **[Padrões de design](#31-padrões-de-design)**
32. **[Aplicações parciais, Currying, Compose e Pipe](#32-aplicações-parciais-currying-compose-e-pipe)**
33. **[Código limpo (clean)](#33-código-limpo-clean)**

---

## 1. Pilha de chamadas

```js
// FIFO - First In First Out (Primeiro que entrou é o primeiro a sair)
// LIFO - First In First Out (O ultimo que entra é o primeiro que sai)

// As funções em JS funciona como uma pilha, LIFO.
function funcao1(){
    funcao2();
    console.log('executou funçao 1');
}

function funcao2(){
    funcao3();
    console.log('executou funçao 2');
}

function funcao3(){
    console.log('executou funçao 3');
}
  
funcao1();

// Console

// executou a função 3
// executou a função 2
// executou a função 1
```



**[⬆ Voltar ao topo](#tabela-de-conteúdos)**

---

## 2. Tipos primitivos

```js
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
```


**[⬆ Voltar ao topo](#tabela-de-conteúdos)**

---

## 3. Tipos de valores e Tipos de referências

```js
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
```


**[⬆ Voltar ao topo](#tabela-de-conteúdos)**

---

## 4. Implícito, Explícito, Nominal, Estruturando e Chamada de métodos

```js
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


```

**[⬆ Voltar ao topo](#tabela-de-conteúdos)**

---

## 5. == vs === vs typeof

```js
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
```

**[⬆ Voltar ao topo](#tabela-de-conteúdos)**

---

## 6. Escopo da Função, Escopo do Bloco e Escopo léxico

```js
// 6. Escopo da Função, Escopo do Bloco e Escopo léxico

/* 
    No JS temos 3 modos de declarar uma variável:
    * var (escopo global)
    * let (escopo local) 
    * const (não permitindo reatribuição e nem redeclaração).  

    * var -> a variável var, a variável é declarada e iniciada no escopo da função,
        não respeitando blobo e permitindo a redeclaração e reatribuição
    
    * let -> a variável let é declarada no escopo da função, 
        mas só é inicializada posteriormente, respeitando bloco e
        permitindo reatribuição, mas não permite a redeclaração
    
    * const -> a variável const é declarada no escopo da função,
        mas só é inicializada posteriormente, respeitando bloco e
        não permitindo reatribuição nem redeclaração
 
*/

var nome = 'Eduardo'; // o var é uma variável de escopo global



```

**[⬆ Voltar ao topo](#tabela-de-conteúdos)**

---

## 7. Expression vs Statement

```js

```

**[⬆ Voltar ao topo](#tabela-de-conteúdos)**

---

## 8. IIFE, Modules e Namespaces

```js

```

**[⬆ Voltar ao topo](#tabela-de-conteúdos)**

---

## 9. Message Queue e Event Loop

```js

```

**[⬆ Voltar ao topo](#tabela-de-conteúdos)**

---

## 10. setTimeout, setInterval e requestAnimationFrame

```js

```

**[⬆ Voltar ao topo](#tabela-de-conteúdos)**

---

## 11. JavaScript Engines

```js

```

**[⬆ Voltar ao topo](#tabela-de-conteúdos)**

---

## 12. Bitwise Operators, Type Arrays e Array Buffers

```js

```

**[⬆ Voltar ao topo](#tabela-de-conteúdos)**

---

## 13. DOM e Layout Trees

```js

```

**[⬆ Voltar ao topo](#tabela-de-conteúdos)**

---

## 14. Factories e Classes

```js

```

**[⬆ Voltar ao topo](#tabela-de-conteúdos)**

---

## 15. this, call, apply e bind

```js

```

**[⬆ Voltar ao topo](#tabela-de-conteúdos)**

---

## 16. new, Constructor, instanceof e Instances

```js

```

**[⬆ Voltar ao topo](#tabela-de-conteúdos)**

---

## 17. Prototype Inheritance e Prototype Chain

```js

```

**[⬆ Voltar ao topo](#tabela-de-conteúdos)**

---

## 18. Object.create e Object.assign

```js

```

**[⬆ Voltar ao topo](#tabela-de-conteúdos)**

---

## 19. map, reduce, filter

```js

```

**[⬆ Voltar ao topo](#tabela-de-conteúdos)**

---

## 20. Pure Functions, Side Effects e State Mutation

```js

```

**[⬆ Voltar ao topo](#tabela-de-conteúdos)**

---

## 21. Closures

```js

```

**[⬆ Voltar ao topo](#tabela-de-conteúdos)**

---

## 22. Funções de alta ordem

```js

```

**[⬆ Voltar ao topo](#tabela-de-conteúdos)**

---

## 23. Recursão

```js

```

**[⬆ Voltar ao topo](#tabela-de-conteúdos)**

---

## 24. Collections

```js

```

**[⬆ Voltar ao topo](#tabela-de-conteúdos)**

---

## 25. Promises

```js

```

**[⬆ Voltar ao topo](#tabela-de-conteúdos)**

---

## 26. async/await

```js

```

**[⬆ Voltar ao topo](#tabela-de-conteúdos)**

---

## 27. Estrutura dos dados

```js

```

**[⬆ Voltar ao topo](#tabela-de-conteúdos)**

---

## 28. Expensive Operation e Big O Notation

```js

```

**[⬆ Voltar ao topo](#tabela-de-conteúdos)**

---

## 29. Algoritmos

```js

```

**[⬆ Voltar ao topo](#tabela-de-conteúdos)**

---

## 30. Herança, Polimorfismo e Reutilização de Código

```js

```

**[⬆ Voltar ao topo](#tabela-de-conteúdos)**

---

## 31. Padrões de design

```js

```

 **[⬆ Voltar ao topo](#tabela-de-conteúdos)**

---

## 32. Aplicações parciais, Currying, Compose e Pipe

```js

```

**[⬆ Voltar ao topo](#tabela-de-conteúdos)**

---

## 33. Código limpo (clean)

```js

```

 **[⬆ Voltar ao topo](#tabela-de-conteúdos)**

---