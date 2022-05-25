"use strict";

const add = document.querySelector(".add");
const sub = document.querySelector(".sub");
const mul = document.querySelector(".mul");
const div = document.querySelector(".div");

function displayMessage(message) {
  document.querySelector(".result").textContent = message;
}

function addFunc() {
  let num1 = Number(document.querySelector(".input1").value);
  let num2 = Number(document.querySelector(".input2").value);
  displayMessage(num1 + num2);
}

function subFunc() {
  let num1 = Number(document.querySelector(".input1").value);
  let num2 = Number(document.querySelector(".input2").value);
  displayMessage(num1 - num2);
}

function mulFunc() {
  let num1 = Number(document.querySelector(".input1").value);
  let num2 = Number(document.querySelector(".input2").value);
  displayMessage(num1 * num2);
}

function divFunc() {
  let num1 = Number(document.querySelector(".input1").value);
  let num2 = Number(document.querySelector(".input2").value);
  displayMessage(num1 / num2);
}

add.addEventListener("click", addFunc);
sub.addEventListener("click", subFunc);
mul.addEventListener("click", mulFunc);
div.addEventListener("click", divFunc);
