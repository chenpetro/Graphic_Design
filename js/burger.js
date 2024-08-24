const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu-hidden");
const close = document.querySelector(".menu-hidden__close");


let i = 1;
burger.addEventListener("click", function () {
  i++;
  console.log(i);
  if (i % 2 == 0) {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }
});
close.addEventListener("click", function () {
    menu.style.display = "none";
})
