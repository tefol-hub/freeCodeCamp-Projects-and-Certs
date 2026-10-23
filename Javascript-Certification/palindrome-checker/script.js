const result = document.getElementById("result");
const text = document.getElementById("text-input");
const button = document.getElementById("check-btn");

const storeText = text => {
  if (text == '') {
    return alert("Please input a value");
  } else {
    const regex = /[^a-zA-Z0-9]/g;
    const modifiedText = text.replace(regex, '').toLowerCase();
    return modifiedText;
  }
}

const palindromeCheck = text => {
  const gottenText = text.value;
  const storedText = storeText(gottenText);
  const reversedText = storedText.split('').reverse().join('');
  let outcome = ``;

  if (reversedText == storedText) {
    outcome = `<strong>${text.value}</strong> is a palindrome.`;
  } else {
    outcome = `<strong>${text.value}</strong> is not a palindrome.`;
  }

  result.innerHTML = outcome;
  result.style.display = 'inline';
  return;
}

button.addEventListener("click", () => {
  palindromeCheck(text); 
});
