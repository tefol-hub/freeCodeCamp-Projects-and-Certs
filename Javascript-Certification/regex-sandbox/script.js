const regexPattern = document.getElementById("pattern");
const stringToTest = document.getElementById("test-string");
const testButton = document.getElementById("test-btn");
const testResult = document.getElementById("result");
const caseInsensitiveFlag = document.getElementById("i");
const globalFlag = document.getElementById("g");

function getFlags() {
  return (
    caseInsensitiveFlag.checked 
      ? "i"
      : "" 
  ) + (
    globalFlag.checked
      ? "g"
      : ""
  );
}

testButton.addEventListener("click", () => {
  const regex = new RegExp(regexPattern.value, getFlags());
  stringToTest.innerHTML = stringToTest.textContent.replace(
    regex, 
    (match) => `<span class="highlight">${match}</span>`
  );

  testResult.textContent = stringToTest.textContent.match(regex)?.join(", ") ?? "No Match";
})