var button = document.querySelector(".modal-open-close");
var popup = document.querySelector(".popup form");
var arrive = document.querySelector("[name=check-in]");
var departue = document.querySelector("[name=check-out]");
var adults = document.querySelector("[name=adults]");
var children = document.querySelector("[name=children]");

popup.classList.add("modal-close");

button.addEventListener("click", function () {
  popup.classList.toggle("modal-close");
  popup.classList.remove("modal-error");
});

popup.addEventListener("submit", function (evt) {
  if (!arrive.value || !departue.value || !adults.value || !children.value) {
 evt.preventDefault();
 popup.classList.remove("modal-error");
 popup.offsetWidth = popup.offsetWidth;
 popup.classList.add("modal-error");
  }
});
