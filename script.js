"use strict";

const title = document.getElementById("title");
const container = document.getElementById("container");
const input = document.getElementById("input");
const colors = ["#F9ED69", "#F08A5D", "#B83B5E", "#6A2C70", "#00ADB5"];

let SQUARES = 500;

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    if (input.value < 0) {
      title.innerText = "Pick number higher than 0 and lower than 500";
      return;
    }

    if (input.value > 500) {
      title.innerText = "Pick number lower than 500 and higher than 0";
      return;
    }

    title.innerHTML = "Pick number between 1 and 500";
    SQUARES = input.value;
    generateSquares();
    input.value = "";
  }
});

const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

const setColor = (element) => {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
};

const removeColor = (element) => {
  element.style.background = "#1d1d1d";
  element.style.boxShadow = "0 0 2px #000";
};

const generateSquares = () => {
  container.innerHTML = "";

  for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("mouseover", () => setColor(square));
    square.addEventListener("mouseout", () => removeColor(square));

    container.appendChild(square);
  }
};

generateSquares();
