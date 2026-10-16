const themes = [
  {
    name: "light",
    message: "You Light Up My World!",
    buttonTxtColor: "#e8f6fa",
    buttonBgColor: "#465053",
  },
  {
    name: "dark",
    message: "Blackest Day, Darkest Night...",
    buttonTxtColor: "#121212",
    buttonBgColor: "#a8b1b5",
  },
  {
    name: "autumn",
    message: "Nature in transition",
    buttonTxtColor: "#2e2522",
    buttonBgColor: "#d97443",
  }
];

const [theme1, theme2, theme3] = themes;
const body = document.querySelector("body");
const themeSwitchBtn = document.getElementById("theme-switcher-button");
const themeDropdown = document.getElementById("theme-dropdown");
const message = document.querySelector('[aria-live="polite"]');

const toggleDropdown = () => {
  themeDropdown.hidden = !themeDropdown.hidden;
  themeSwitchBtn.setAttribute("aria-expanded", `${themeDropdown.hidden ? "false" : "true"}`);
  console.log(themeSwitchBtn.getAttribute("aria-expanded"));
}

themeSwitchBtn.addEventListener("click", toggleDropdown);

themeDropdown.addEventListener("click", e => {
  let theme = e.target.textContent;
  let themeObj = theme === theme1.name ? theme1 
    : theme === theme2.name ? theme2
    : theme3;
  
  message.textContent = themeObj.message;
  body.setAttribute("class", `${e.target.id}`);
  themeSwitchBtn.style.backgroundColor = themeObj.buttonBgColor;
  themeSwitchBtn.style.color = themeObj.buttonTxtColor;
})
