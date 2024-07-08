let disp = document.getElementById("display");
let copy = document.querySelector("#copy");
let upper = document.querySelector("#UC");
let lower = document.querySelector("#LC");
let symbols = document.querySelector("#SB");
let Num = document.querySelector("#NUM");
let slider = document.querySelector("#ran");
let sliderVal = document.querySelector("#val");
let genBtn = document.querySelector("#genBtn");
let upperVal = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerVal = "abcdefgjijklmnopqrstuvwxyz";
let symbolVal = "!@#$%^&*()_+=-><?:;|}";
let numberVal = "1234567890";

sliderVal.textContent = slider.value;
slider.addEventListener("input", () => {
  sliderVal.textContent = slider.value;
});

genBtn.addEventListener("click", () => {
  generatePassword();
});

copy.addEventListener("click", () => {
  copyText();
});

function generatePassword() {
  let genPass = "";
  let allChar = "";

  allChar += upper.checked ? upperVal : "";
  allChar += lower.checked ? lowerVal : "";
  allChar += Num.checked ? numberVal : "";
  allChar += symbols.checked ? symbolVal : "";

  if (allChar === "" || allChar.length === 0) {
    alert("please select any character for generate password");
    return;
  }

  for (let i = 0; i < slider.value; i++) {
    genPass += allChar.charAt(Math.floor(Math.random() * allChar.length));
  }

  disp.value = genPass;
}

function copyText() {
  if (disp.value === "") {
    alert("No text to copy");
    return; 
  }

  disp.select();
  disp.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(disp.value).then(function() {
    alert("Text copied: " + disp.value);
  }, function(err) {
    console.error("Could not copy text: ", err);
  });
}
