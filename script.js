'use strict';

let game = function() {
  let question = +prompt('Угадай число от 1 до 100');
  if (!Boolean(question)) {
    alert('We are sorry. Hope to see you soon');
    return;
  }

  const condition = function(){ 

  if ( question > 25) {
      alert('Загаданное число меньше.');
      game();
    } else if (question < 25 && question !== 0) {
      alert('Загаданное число больше');
      game();
    } else if (question === 25){
      alert(' You are the Winner!');
    } else if (!Number(question)) { 
        alert('Введи число!'); 
        game();
    }
  };
  condition();
};

game();
