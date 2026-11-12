const markdownInput = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const htmlPreview = document.getElementById("preview");

const mdToHtml = [
  {
    type: "heading1",
    md: /^# ([ =\+&%-\.\?\w]+)/gim,
    html: "<h1>$1</h1>"
  },
  {
    type: "heading2",
    md: /^## ([ =\+&%-\.\?\w]+)/gim,
    html: "<h2>$1</h2>"
  },
  {
    type: "heading3",
    md: /^### ([ =\+&%-\.\?\w]+)/gim,
    html: "<h3>$1</h3>"
  },
  {
    type: "boldTxt",
    md: /(\*\*|__)([ =\+&%-\.\?\w]+)\1/gi,
    html: "<strong>$2</strong>"
  },
  {
    type: "italicTxt",
    md: /(\*|_)([ =\+&%-\.\?\w]+)\1/gi,
    html: "<em>$2</em>"
  },
  {
    type: "img",
    md: /!\[([-\w]*)\]\(([=\+&%-\.\?\w]*)\)/gi,
    html: '<img alt="$1" src="$2">'
  },
  {
    type: "link",
    md: /\[([ =\+&%-\.\?\w]*)\]\(([=\+&%-\.\?\w]*)\)/gi,
    html: '<a href="$2">$1</a>'
  },
  {
    type: "quote",
    md: /^[ ]*> ([ '"<>\/=\+&%-\.\?\w]+)/gim,
    html: "<blockquote>$1</blockquote>"
  }
];

function convertMarkdown() {

  let inputText = markdownInput.value; 

  mdToHtml.forEach(el => {
    if (el.md.test(inputText)) {
      inputText = inputText.replace(el.md, el.html);
    }
  })

  console.log(inputText);
  htmlPreview.innerHTML = htmlOutput.textContent = inputText;
  
  return inputText;
}

markdownInput.addEventListener("input", convertMarkdown)
