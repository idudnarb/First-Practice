const container = document.querySelector("[data-container]");
const colors = ["#1dd1a1", "#5f27cd", "#ee5253", "#ff9ff3", "#feca57"];
const SQUARES = 1400;
let btnsun = document.getElementById("btnsun");
let colorinput = document.getElementById("color");

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement("div");

  let btn = document.getElementById("btn");

  square.className = "square";

  square.addEventListener("mouseover", setColor);
  // square.addEventListener("click", setColorsun);

  // square.addEventListener("mouseleave", removeColor);

  btn.addEventListener("click", () => {
    square.style.background = "#1d1d1d";
    square.style.boxShadow = "0 0 2px #000";
  });

  container.append(square);
}

// function setColor(e) {
//   let color = generateColor();
//   e.target.style.background = color;
//   e.target.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
// }

function setColor(e) {
  let color = colorinput.value;
  e.target.style.background = color;
  e.target.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(e) {
  e.target.style.background = "#1d1d1d";
  e.target.style.boxShadow = "0 0 2px #000";
}

function generateColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

// btnsun.addEventListener("click", setColorsun);

// function setColorsun(e) {
//   let color = "#f1c40f";
//   e.target.style.background = color;
//   e.target.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
// }
