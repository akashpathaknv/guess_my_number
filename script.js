'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const a = Number(document.querySelector('.guess').value);
  console.log(a, typeof a);

  if (!a) {
    document.querySelector('.message').textContent = 'No Number';
  } else if (a === secretNumber) {
    //document.querySelector('.message').textContent = 'You Guest it right!!!';
    displayMessage('You Guessed it right!!!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (a !== secretNumber) {
    // document.querySelector('.message').textContent =
    //   a < secretNumber ? 'Number too low' : 'Number too high';
    displayMessage(a < secretNumber ? 'Number too low' : 'Number too high');
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    displayMessage('You lost the game');
    //document.querySelector('.message').textContent = 'You lost the game';
    score = 0;
    document.querySelector('.score').textContent = score;
  }
  //   else if (a < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Number too low';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost the game';
  //       score = 0;
  //       document.querySelector('.score').textContent = score;
  //     }
  //   } else if (a > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = ;
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost the game';
  //       score = 0;
  //       document.querySelector('.score').textContent = score;
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  //highScore = 0;
  document.querySelector('.score').textContent = score;
  document.querySelector('.highscore').textContent = highScore;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing....';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
});
