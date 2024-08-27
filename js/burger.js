const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu-hidden");
const close = document.querySelector(".menu-hidden__close");
const backdrop = document.querySelector(".backdrop-menu");



burger.addEventListener("click", function () {
    backdrop.style.display = "flex";
    menu.style.display = "flex";
    document.body.classList.toggle("no-scroll");
});
close.addEventListener("click", function () {
    menu.style.display = "none";
    backdrop.style.display = "none";
    document.body.classList.toggle("no-scroll");
})
