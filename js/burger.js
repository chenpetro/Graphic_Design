const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu-hidden");
const close = document.querySelector(".menu-hidden__close");
const backdrop = document.querySelector(".backdrop-menu");


let i = 1;
burger.addEventListener("click", function () {
  i++;
  console.log(i);
  if (i % 2 == 0) {
    backdrop.style.display = "flex";
    menu.style.display = "flex";
    document.body.classList.toggle("no-scroll");
  } else {
    menu.style.display = "none";
    backdrop.style.display = "none";
  }
});
close.addEventListener("click", function () {
    menu.style.display = "none";
    backdrop.style.display = "none";
    document.body.classList.toggle("no-scroll");
})
