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



**[⬆ Voltar ao topo](#tabela-de-conteúdos)**

---

## 4. Implícito, Explícito, Nominal, Estruturando e Chamada de métodos


**[⬆ Voltar ao topo](#tabela-de-conteúdos)**

---

## 5. == vs === vs typeof

**[⬆ Voltar ao topo](#tabela-de-conteúdos)**

---

## 6. Escopo da Função, Escopo do Bloco e Escopo léxico


**[⬆ Voltar ao topo](#tabela-de-conteúdos)**

---

## 7. Expression vs Statement


**[⬆ Voltar ao topo](#tabela-de-conteúdos)**

---

## 8. IIFE, Modules e Namespaces



**[⬆ Voltar ao topo](#tabela-de-conteúdos)**

---

## 9. Message Queue e Event Loop


**[⬆ Voltar ao topo](#tabela-de-conteúdos)**

---

## 10. setTimeout, setInterval e requestAnimationFrame



**[⬆ Voltar ao topo](#tabela-de-conteúdos)**

---

## 11. JavaScript Engines



**[⬆ Voltar ao topo](#tabela-de-conteúdos)**

---

## 12. Bitwise Operators, Type Arrays e Array Buffers


**[⬆ Voltar ao topo](#tabela-de-conteúdos)**

---

## 13. DOM e Layout Trees


**[⬆ Voltar ao topo](#tabela-de-conteúdos)**

---

## 14. Factories e Classes


**[⬆ Voltar ao topo](#tabela-de-conteúdos)**

---

## 15. this, call, apply e bind


**[⬆ Voltar ao topo](#tabela-de-conteúdos)**

---

## 16. new, Constructor, instanceof e Instances


**[⬆ Voltar ao topo](#tabela-de-conteúdos)**

---

## 17. Prototype Inheritance e Prototype Chain


**[⬆ Voltar ao topo](#tabela-de-conteúdos)**

---

## 18. Object.create e Object.assign


**[⬆ Voltar ao topo](#tabela-de-conteúdos)**

---

## 19. map, reduce, filter

**[⬆ Voltar ao topo](#tabela-de-conteúdos)**

---

## 20. Pure Functions, Side Effects e State Mutation

**[⬆ Voltar ao topo](#tabela-de-conteúdos)**

---

## 21. Closures

**[⬆ Voltar ao topo](#tabela-de-conteúdos)**

---

## 22. Funções de alta ordem

**[⬆ Voltar ao topo](#tabela-de-conteúdos)**

---

## 23. Recursão

**[⬆ Voltar ao topo](#tabela-de-conteúdos)**

---

## 24. Collections

**[⬆ Voltar ao topo](#tabela-de-conteúdos)**

---

## 25. Promises

**[⬆ Voltar ao topo](#tabela-de-conteúdos)**

---

## 26. async/await

**[⬆ Voltar ao topo](#tabela-de-conteúdos)**

---

## 27. Estrutura dos dados

**[⬆ Voltar ao topo](#tabela-de-conteúdos)**

---

## 28. Expensive Operation e Big O Notation

**[⬆ Voltar ao topo](#tabela-de-conteúdos)**

---

## 29. Algoritmos

**[⬆ Voltar ao topo](#tabela-de-conteúdos)**

---

## 30. Herança, Polimorfismo e Reutilização de Código

**[⬆ Voltar ao topo](#tabela-de-conteúdos)**

---

## 31. Padrões de design

 **[⬆ Voltar ao topo](#tabela-de-conteúdos)**

---

## 32. Aplicações parciais, Currying, Compose e Pipe

**[⬆ Voltar ao topo](#tabela-de-conteúdos)**

---

## 33. Código limpo (clean)

 **[⬆ Voltar ao topo](#tabela-de-conteúdos)**

---