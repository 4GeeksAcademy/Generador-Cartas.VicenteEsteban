/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector(`.paloTop`).innerHTML = generateRandomTop();
  document.querySelector(`.number`).innerHTML = generateRandomNumber();
  document.querySelector(`.paloBot`).innerHTML = document.querySelector(
    `.paloTop`
  ).innerHTML;
};
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
let palo = document.querySelector("#palo");
palo.style.color = "red";
