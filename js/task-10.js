function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const create = document.querySelector("[data-create]");
const destroy = document.querySelector("[data-destroy]");
const boxes = document.getElementById("boxes");
const input = document.querySelector("input");

const inputChange = (ev) => {
  input.setAttribute("count", Number(ev.currentTarget.value));
};
input.addEventListener("input", inputChange);
let baseBoxSize = 30;

const renderBoxes = () => {
  let countBox = Number(input.getAttribute("count"));
  for (let i = 0; i < countBox; i += 1) {
    baseBoxSize += 10;
    const newBox = document.createElement("div");
    newBox.style.background = getRandomHexColor();
    newBox.style.height = baseBoxSize + "px";
    newBox.style.width = baseBoxSize + "px";
    newBox.style.margin = "10px";
    newBox.classList.add("new-box");
    boxes.append(newBox);
  }
};
create.addEventListener("click", renderBoxes);
const destroyBoxes = () => {
  const allNewBoxes = document.querySelectorAll(".new-box");

  for (let allNewBoxe of allNewBoxes) {
    boxes.removeChild(allNewBoxe);
  }
  baseBoxSize = 30;
};
destroy.addEventListener("click", destroyBoxes);