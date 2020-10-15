'use strict';

let isNumber = function(n){ //проверка входящих prompt
  return !isNaN(parseFloat(n)) && isFinite(n)
};

let b;

let start = function(){
  let a = 50;
  b = +prompt('Угадай число от 1 до 100');
  if(isNumber(b) || b === 0){
    number();
    console.log(b);
  }else
  console.log('Введите число ')
};
start();

function number(){
  if(b>50){
    console.log('Загаданное число меньше');
    b = +prompt('Попробуйте еще раз');
  } else if(b<50){
    console.log('Загаданное число меньше');
    b = +prompt('Попробуйте еще раз');
  }else (b === a)
  console.log('Поздравляю, Вы угадали!!!');
}
