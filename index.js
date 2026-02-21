// JavaScript for TicTac Toe game
const wrapper = document.querySelector(".wrapper");

const boxes = document.querySelectorAll(".item");
const head = document.getElementById("head");
const ticTac = document.querySelector(".playGround");
const button = document.querySelector(".button");
const restart = document.querySelector(".rstbtn");
let draw = 0;

const counter = document.querySelector(".counter");

document.body.style.color = "white";

let winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
wrapper.replaceChild(button, restart);
let currentPlayer = "X";

function StartGame(e) {
  if (e.target.innerText === "") {
    e.target.innerText = currentPlayer;
    draw++;
    winner();

    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
  if (draw === 9) {
    head.innerText = "Draw";
  }
}

let count = 6;

button.addEventListener("click", () => {
  let timer = setInterval(() => {
    counter.innerText = `Your game starts in ${--count}`;
    if (count === 0) {
      clearInterval(timer);
      counter.innerText = "";
      count = 6;
      ticTac.addEventListener("click", StartGame);
      wrapper.replaceChild(restart, button);
    }
  }, 1000);
});

function winner() {
  winConditions.forEach((item) => {
    let index0 = item[0];
    let index1 = item[1];
    let index2 = item[2];

    let value0 = boxes[index0].innerText;
    let value1 = boxes[index1].innerText;
    let value2 = boxes[index2].innerText;

    if (value0 !== "" && value1 !== "" && value2 !== "") {
      if (value0 === value1 && value1 === value2) {
        draw = 0;
        head.innerText = `winner is ${value0}`;
        ticTac.removeEventListener("click", StartGame);
      }
    }
  });
}
restart.addEventListener("dblclick", () => {
  currentPlayer = "X";
  boxes.forEach((item) => {
    item.innerText = "";
    head.innerText = "Tic Tac Toe";
  });
  wrapper.replaceChild(button, restart);
  ticTac.removeEventListener("click", StartGame);
});
