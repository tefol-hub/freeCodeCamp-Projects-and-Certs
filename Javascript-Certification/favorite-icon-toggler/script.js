const btns = document.querySelectorAll("button");

function toggleBtn(btn) {
  btn.classList.toggle("filled"); 
  btn.innerHTML = btn.classList.contains("filled") ? "&#10084;" : "&#9825;";
}

btns.forEach(
  (btn) => btn.addEventListener("click", () => toggleBtn(btn))
);
