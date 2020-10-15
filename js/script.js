'use strict';

let isNumber = function(n){ //проверка входящих prompt
  return !isNaN(parseFloat(n)) && isFinite(n)
};

function start(){
  let numberRandom = parseInt(Math.random()*100);
  console.dir(numberRandom);

  function sayNumber(){
    let say = prompt('Угадай число от 1 до 100');
  if(isNumber(numberRandom)){ 
    if(say > numberRandom){
    say = prompt('Повторите');
    alert('Загаданное число меньше');
    }else if(say < numberRandom){
    say = prompt('Повторите');
    alert('Загаданное число больше');
    }else if(say == numberRandom){
    alert('Поздравляю, Вы угадали!!!');
    }
  }else
  alert('Введите число');
  }
  sayNumber();
};
start();
