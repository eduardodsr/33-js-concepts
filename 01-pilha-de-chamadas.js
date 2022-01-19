// 01 - Pilha de chamadas

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