function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxes = document.querySelector("#boxes");
const create = document.querySelector("#controls button[data-create]");
const destroy = document.querySelector("#controls button[data-destroy]")
const number = document.querySelector("#controls input");

function createBoxes(amount) {
  boxes.innerHTML = "";
  for (let index = 0; index < amount && amount <= 100 && amount >= 1; index++) {
    const box = `<div style="height: ${30+10*index}px; width: ${30+10*index}px; background-color: ${getRandomHexColor()}"></div>`;
    boxes.insertAdjacentHTML("beforeend", box);
  }
}

create.addEventListener("click", () => {
  createBoxes(number.value);
  number.value = "";
});
destroy.addEventListener("click", () => boxes.innerHTML = "");