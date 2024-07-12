/* eslint-disable */
import "bootstrap";
import "./style.css";
window.onload = function() {
  generateCard();
  cardSize();
};
const randomButton = document.querySelector(".button");
randomButton.addEventListener("click", () => {
  generateCard();
  cardSize();
});
function generateCard() {
  //write your code here

  document.querySelector(`.paloTop`).innerHTML = generateRandomTop();
  document.querySelector(`.number`).innerHTML = generateRandomNumber();
  document.querySelector(`.paloBot`).innerHTML = document.querySelector(
    `.paloTop`
  ).innerHTML;
  let paloColor = document.querySelectorAll(".palo");
  paloColor.forEach(palo => {
    if (palo.innerHTML === "♦" || palo.innerHTML === "♥") {
      palo.style.color = "red";
      document.querySelector(".number").style.color = "red";
    } else {
      palo.style.color = "black";
      document.querySelector(".number").style.color = "black";
    }
  });
}
function cardSize() {
  const card = document.getElementById("card");
  const maxWidth = document.getElementById("changeWidth").value;
  const maxHeight = document.getElementById("changeHeight").value;

  if (maxWidth) {
    card.style.width = `${maxWidth}px`;
  }
  if (maxHeight) {
    card.style.height = `${maxHeight}px`;
  }
  const newFontSize = Math.min(card.offsetWidth, card.offsetHeight) / 5;
  document.querySelectorAll(".paloTop, .paloBot").forEach(element => {
    element.style.fontSize = `${newFontSize}px`;
  });
  document.querySelector(".number").style.fontSize = `${newFontSize * 1.5}px`;
}

let generateRandomNumber = () => {
  let number = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let indexNumber = Math.floor(Math.random() * number.length);
  return number[indexNumber];
};

let generateRandomTop = () => {
  let palo = ["♦", "♥", "♠", "♣"];
  let indexTop = Math.floor(Math.random() * palo.length);
  return palo[indexTop];
};
