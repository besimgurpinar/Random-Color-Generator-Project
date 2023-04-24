const colorBox = document.getElementById('color-box');
const colorCode = document.getElementById('color-code');
const generateBtn = document.getElementById('generate-btn');

function generateColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const color = `rgb(${r}, ${g}, ${b})`;
  colorBox.style.backgroundColor = color;
  colorCode.innerText = color;
}

generateBtn.addEventListener('click', generateColor);
