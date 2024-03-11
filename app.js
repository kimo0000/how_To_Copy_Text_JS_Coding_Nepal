const btns = document.querySelectorAll(".code button");

const copyCode = (e) => {
  //    console.log(e.target.className);
  e.target.previousElementSibling.select();
  e.target.innerHTML = `Code Copied <i class="fa-solid fa-check"></i>`;

  if (e.target.className == "copy_code_html") {
    navigator.clipboard.writeText(e.target.previousElementSibling.value);
  } else if (e.target.className == "copy_code_css") {
    navigator.clipboard.writeText(e.target.previousElementSibling.value);
  } else {
    navigator.clipboard.writeText(e.target.previousElementSibling.value);
  }

  setTimeout(() => {
    e.target.innerText = "Copy Code";
  }, 1000);
};

btns.forEach((btn) => {
  btn.addEventListener("click", copyCode);
});


