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

let randomPass = Math.floor(Math.random() * slider.value);

genBtn.addEventListener("click", () => {
  generatePassword();
});
function generatePassword() {
let genPass = "";
let allChar = "";

allChar += upper.checked ? upperVal : "";
allChar += lower.checked ? lowerVal : "";
allChar += Num.checked ? numberVal : "";
allChar += symbols.checked ? symbolVal : "";

if(allChar === ""  || allChar.length === 0){
  alert("please select any character for generate password")
}

for(let i = 0; i < slider.value; i++){
  genPass += allChar.charAt(Math.floor(Math.random() * allChar.length));
}

disp.value = genPass;

}