'use strict';

let isNumber = function(n) {

    return !isNaN(parseFloat(n)) && isFinite(n);
};

const game = function() {

let n = Math.floor(Math.random() * 100) + 1;
console.log(n);
let i = 1;

const condition = function(){ 
    let question = prompt('Угадай число от 1 до 100');

    if ( parseInt(question) > n && i !== 10) {
        alert('Загаданное число меньше, осталось попыток ' + (10 - i));
        i++;
        condition();
    } else if (parseInt(question) < n && i !== 10) {
        alert('Загаданное число больше, осталось попыток ' + (10 - i));
        i++;
        condition();
    } else if (parseInt(question) === n){
        let commit = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
        game();
        if (!Boolean(commit)) {
            alert('We are sorry. Hope to see you soon');
            return;
        }
    } else if (!isNumber(question) && question !== null) { 
        alert('Введи число!'); 
        condition();
    } else if (question === null) {
        alert('We are sorry. Hope to see you soon'); 
    } else if ( i === 10) {
        let commit = confirm('Попытки закончились, хотите сыграть еще?');
        game();
        if (!Boolean(commit)) {
            alert('We are sorry. Hope to see you soon');
            return;
        }
    }
    };
    condition();
};
game();
