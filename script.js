const email = document.querySelector(".email-input");
const submitBtn = document.querySelector(".email-btn");
const errorIcon = document.querySelector(".error-icon");
const errorText = document.querySelector(".error-text");

submitBtn.addEventListener("click", () => {
  var re = /\S+@\S+\.\S+/;
  console.log(email.value);
  if (re.test(email.value)) {
    errorText.innerHTML = "Thank you";
    errorIcon.style.display = "none";
    email.value = "";
    setTimeout(clearText, 1000);
  } else {
    errorText.innerHTML = "Please enter valid email";
    errorText.style.opacity = "1";
    errorIcon.style.display = "block";
    email.focus();
  }
});

function clearText() {
  errorText.innerHTML = "";
}
