const backdr = document.querySelector(".backdrop");
const contactme = document.querySelector(".header__right-button");
const modalsend = document.querySelector(".modal-send");
const thankyou = document.querySelector(".thank-you");
const thx = document.querySelector(".thx");
const cls = document.querySelector(".cls");
const contactmeSecond = document.querySelector(".reviews__lets-work__red__button");


contactme.addEventListener("click", function () {
  backdr.style.display = "block";
  document.body.classList.toggle("no-scroll");
})

contactmeSecond.addEventListener("click", function () {
  backdr.style.display = "block";
  document.body.classList.toggle("no-scroll");
})

modalsend.addEventListener("click", function () {
  backdr.style.display = "block";
  backdr.style.zIndex = "16";
  thankyou.style.display = "block";
  thx.style.display = "block";
  cls.style.display = "block";
})

cls.addEventListener("click", function () {
  backdr.style.display = "none";
  thankyou.style.display = "none";
  thx.style.display = "none";
  cls.style.display = "none";
  document.body.classList.toggle("no-scroll");
})