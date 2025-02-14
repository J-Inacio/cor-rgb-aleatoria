const colorBox = document.getElementById("color-box");
const randomBtn = document.getElementById("randomBtn");
const rgbInput = document.getElementById("colorTextRGB");
const hexInput = document.getElementById("colorTextHEX");

randomBtn.addEventListener("click", () => {
  const rgb = getRandomRGB();
  colorBox.style.backgroundColor = rgb;
  rgbInput.innerHTML = rgb;
  if(rgbInput.innerText !== `Cor Copiada!`) {
    rgbInput.classList.remove("copy")
  }
});

rgbInput.addEventListener("click", () => {
  if (rgbInput.innerText !== "") {
    navigator.clipboard.writeText(rgbInput.innerText);
    rgbInput.innerText = "Cor Copiada!";
    rgbInput.classList.add("copy");
  } 
  
});

function getRandomRGB() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
}

function getRandomInt() {}

console.log(getRandomRGB());
