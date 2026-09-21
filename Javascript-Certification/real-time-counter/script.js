const textInput = document.getElementById("text-input");
const charCount = document.getElementById("char-count");

textInput.addEventListener("input", (event) => {
  let count = event.target.value.length;
  
  if (count >= 50) {
    charCount.style.color = "red";
    textInput.value = textInput.value.slice(0, 50);
    return; 
  }

  charCount.textContent = `Character Count: ${count}/50`;
});