fetch('script.js')
  .then(response => response.text())
  .then(data => {
    const codeEl = document.getElementById('js-code');
    codeEl.textContent = data;
    Prism.highlightElement(codeEl);
  })
  .catch(error => {
    console.error('Error loading the JS file:', error);
  });

// Prism.plugins.toolbar.registerButton("lang-label", function (env) {
//   const span = document.createElement("span");

//   span.textContent = `${env.language}`;

//   span.classList.add("lang-label");
  
//   return span;
// });

Prism.plugins.toolbar.registerButton("download-code", function (env) {
  const button = document.createElement("button");

  button.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round">

      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7 10 12 15 17 10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
  `;

  button.title = "Download";

  button.addEventListener("click", () => {
    const blob = new Blob([env.code], { type: "text/plain" });

    const a = document.createElement("a");

    a.href = URL.createObjectURL(blob);

    a.download = `code.${env.language || "txt"}`;

    a.click();

    URL.revokeObjectURL(a.href);
  });

  return button;
});

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.querySelectorAll(".copy-to-clipboard-button").forEach(btn => {
      btn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round">

          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
      `;

      btn.title = "Copy";
    });
  }, 0);
});

