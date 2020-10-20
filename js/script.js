'use strict';

let isNumber = function (n) { //проверка входящих prompt
  return !isNaN(parseFloat(n)) && isFinite(n)
};

function start() {
  let numberRandom = parseInt(Math.random() * 100);//загаданное число
  console.log(numberRandom);

  function sayNumber() {
    let say = prompt('Угадай число от 1 до 100');

    if (isNumber(say)) {
      if (say > numberRandom) {
          alert('Загаданное число меньше');
          repeat();
          alert('Правильное число: ' + numberRandom);
      } else if (say < numberRandom) {
          alert('Загаданное число больше');
          repeat();
          alert('Правильное число: ' + numberRandom);
      } else if (say == numberRandom) {
          confirm('Поздравляю, Вы угадали!!! Загаданное число ' + numberRandom + ' Хотели бы сыграть еще?');
          // start();
      } 
    }else if (say == null) {
      alert('Игра окончена.');
    }else if(say != 'number'){
      alert('Введите число');
      repeat();
      alert('Правильное число: ' + numberRandom);
    }
  };

  function repeat() {//функция повтора
    for (let i = 3; i >= 0; i--) {
      let say = prompt('Повторите');
      if (say > numberRandom) {
        alert('Загаданное число меньше, осталось попыток - '+ [i]);
      } else if (say < numberRandom) {
        alert('Загаданное число больше, осталось попыток - ' + [i]);
      } else if (say == numberRandom) {
        confirm('Поздравляю, Вы угадали!!! Загаданное число ' + numberRandom + ' Хотели бы сыграть еще?');
        // start();
      } else if(say != 'number'){
        alert('Введите число, осталось попыток - ' + [i]);
      } else if (say == null) {
        alert('Игра окончена.');
      }
    say += i;
    }
  };
sayNumber();

};

