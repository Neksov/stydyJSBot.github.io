'use strict';

let isNumber = function(n){ //проверка входящих prompt
  return !isNaN(parseFloat(n)) && isFinite(n)
};
let numberRandom = parseInt(Math.random()*100);//загаданное число
console.log(numberRandom);

function start(){
  let say = prompt('Угадай число от 1 до 100');

  function sayNumber(){
  if(isNumber(say)){ 
    if(say > numberRandom){
      alert('Загаданное число меньше');
      repeat();
      alert('Правильное число: ' + numberRandom);
    }else if(say < numberRandom){
      alert('Загаданное число больше');
      repeat();
      alert ('Правильное число: ' + numberRandom);    
    }else if(say == numberRandom){
      alert('Поздравляю, Вы угадали!!!Закаданное число ' + numberRandom);
    }
  }else if (say !== 'number'){
    alert('Введите число');
    repeat();
  }else (say === null)
    alert('Игра окончена');
};

sayNumber();
};

function repeat(){//функция повтора
  let say = prompt('Повторите');
    if(say > numberRandom){
      alert('Загаданное число меньше');
    }else if(say < numberRandom){
      alert('Загаданное число больше');
    }else if(say == numberRandom){
      alert('Поздравляю, Вы угадали!!!Закаданное число ' + numberRandom);
    }
};