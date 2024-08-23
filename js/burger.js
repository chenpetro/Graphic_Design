const ulHidden = document.querySelector(".nav__ul-hidden");
const burger = document.querySelector(".burger");
const center = document.querySelector(".menu_hidden");
const start = document.querySelector(".start");
const end = document.querySelector(".end");
const burgerLine = document.querySelectorAll(".burger__line");

const ulli = document.querySelectorAll(".nav__ul__li");

let i = 1;
burger.addEventListener("click", function () {
  i++;
  console.log(i);
  if (i % 2 == 0) {
    document.querySelector("body").style.background = "red";
    burgerLine.forEach(function (element) {
      element.style.background = "white";
    });
    ulli.forEach(function (element) {
      element.style.color = "white";
    });

    ulHidden.style.transform = "translateY(0%)";
    start.style.rotate = "129deg";
    end.style.rotate = "-129deg";
    menu_hidden.style.display = "block";
    end.style.marginTop = "-12px";
  } else {
    document.querySelector("body").style.background = "white";

    burgerLine.forEach(function (element) {
    element.style.background = "black";
    });
    ulli.forEach(function (element) {
      element.style.color = "black";
    });

    ulHidden.style.transform = "translateY(-300%)";
    center.style.display = "block";
    start.style.rotate = "0deg";
    end.style.rotate = "0deg";
    end.style.marginTop = "0px";
  }
});
    