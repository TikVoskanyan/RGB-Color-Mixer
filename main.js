const redInput = document.getElementById("red-input");
const greenInput = document.getElementById("green-input");
const blueInput = document.getElementById("blue-input");
const redInputValue = document.getElementById("red-input-value");
const greenInputValue = document.getElementById("green-input-value");
const blueInputValue = document.getElementById("blue-input-value");
const rgbText = document.getElementById("rgb-text");
const colorDiv = document.getElementById("color");
function update() {
  const red = redInput.value;
  const green = greenInput.value;
  const blue = blueInput.value;

  redInputValue.textContent = red;
  greenInputValue.textContent = green;
  blueInputValue.textContent = blue;
  const rgbTextUpdated = `rgb( ${red} , ${green} , ${blue})`;
  rgbText.textContent = rgbTextUpdated;
  colorDiv.style.backgroundColor = rgbTextUpdated;
  redInput.style.accentColor = `rgb( ${red} , 0 , 0 )`;
  greenInput.style.accentColor = `rgb( 0 , ${green} , 0)`;
  blueInput.style.accentColor = `rgb( 0 , 0 , ${blue})`;
}
redInput.addEventListener("input", update);
greenInput.addEventListener("input", update);
blueInput.addEventListener("input", update);
