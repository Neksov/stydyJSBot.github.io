'use strict';

let isNumber = function (n) { //проверка входящих prompt
  return !isNaN(parseFloat(n)) && isFinite(n)
};

let numberRandom = parseInt(Math.random() * 100);//загаданное число
console.log(numberRandom);

function start() {
  let say = prompt('Угадай число от 1 до 100');
  function sayNumber() {
    if (isNumber(say)) {
      if (say > numberRandom) {
          alert('Загаданное число меньше');
          repeat();
      } else if (say < numberRandom) {
          alert('Загаданное число больше');
          repeat();
      } else if (say == numberRandom) {
          alert('Поздравляю, Вы угадали!!! Загаданное число ' + numberRandom);
      } 
    }else if (say === null) {
      alert('Игра окончена.');
    }else if(say != 'number'){
      alert('Введите число');
      repeat();}
  };

sayNumber();
};

function repeat() {//функция повтора
// for (let i = 0; i < 3; i++) {
  let say = prompt('Повторите');
  if (say > numberRandom) {
    alert('Загаданное число меньше');
    alert('Правильное число: ' + numberRandom);
  } else if (say < numberRandom) {
    alert('Загаданное число больше');
    alert('Правильное число: ' + numberRandom);
  } else if (say == numberRandom) {
    alert('Поздравляю, Вы угадали!!! Загаданное число ' + numberRandom);
  // break;
  }
// say += i;
// }
};

// else if (say != 'number') {
// alert('Введите число');
// }