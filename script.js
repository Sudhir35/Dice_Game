"use strict";

let score0El = document.getElementById("score--0");

let score1El = document.getElementById("score--1");

let current0El = document.getElementById("current--0");

let current1El = document.getElementById("current--1");

let player0el = document.querySelector(".player--0");

let player1el = document.querySelector(".player--1");

let dice = document.querySelector(".dice");

const btnNew = document.querySelector(".btn--new");

const btnHold = document.querySelector(".btn--hold");

const btnRoll = document.querySelector(".btn--roll");

let scores, currentScore, activeplayer, playing;

const init = function () {
  score0El.textContent = 0;

  score1El.textContent = 0;

  current0El.textContent = 0;

  current1El.textContent = 0;

  scores = [0, 0];

  currentScore = 0;

  activeplayer = 0;

  playing = true;

  player0el.classList.remove("player--winner");

  player1el.classList.remove("player--winner");

  player0el.classList.add("player--active");

  player1el.classList.remove("player--active");

  dice.classList.add("hidden");
};

init();

function switchfun() {
  document.getElementById(`current--${activeplayer}`).textContent = 0;

  currentScore = 0;

  activeplayer = activeplayer === 0 ? 1 : 0;

  player0el.classList.toggle("player--active");

  player1el.classList.toggle("player--active");
}

btnRoll.addEventListener("click", function () {
  if (playing) {
    const dicenum = Math.trunc(Math.random() * 6) + 1;

    dice.classList.remove("hidden");

    dice.src = `dice-${dicenum}.png`;

    if (dicenum !== 1) {
      currentScore += dicenum;
      document.getElementById(`current--${activeplayer}`).textContent =
        currentScore;
    } else {
      switchfun();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    scores[activeplayer] += currentScore;

    document.getElementById(`score--${activeplayer}`).textContent =
      scores[activeplayer];

    if (scores[activeplayer] >= 100) {
      playing = false;

      document
        .querySelector(`.player--${activeplayer}`)
        .classList.add("player--winner");

      document
        .querySelector(`.player--${activeplayer}`)
        .classList.remove("player--active");

      dice.classList.add("hidden");
    } else {
      switchfun();
    }
  }
});

btnNew.addEventListener("click", init);
