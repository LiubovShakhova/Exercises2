'use strict';

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

const game = function() {

  let n = Math.floor(Math.random() * 100) + 1;
  console.log(n);

  const condition = function(){ 
    let question = prompt('Угадай число от 1 до 100');

    if ( parseInt(question) > n) {
        alert('Загаданное число меньше.');
        condition();
    } else if (parseInt(question) < n) {
        alert('Загаданное число больше');
        condition();
    } else if (parseInt(question) === n){
        alert(' You are the Winner!');
    } else if (!isNumber(question) && question !== null) { 
        alert('Введи число!'); 
        condition();
    } else if (question === null) {
          alert('We are sorry. Hope to see you soon'); 
    }
    };
    condition();
};
game();
