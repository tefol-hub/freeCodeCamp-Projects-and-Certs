const textInput = document.getElementById("text-input");
const charCount = document.getElementById("char-count");

textInput.addEventListener("input", (event) => {
  if (event.target.value.length > 50) {
    event.target.value = event.target.value.slice(0, 50);
    return;
  }

  let count = event.target.value.length;
  charCount.textContent = `Character Count: ${count}/50`;
  charCount.style.color = count === 50 ? "red" : "";
});