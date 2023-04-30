let burger = document.querySelector(".header__burger");
let menu = document.querySelector(".header__nav");
let menuLinks = document.querySelectorAll(".nav__link");
let body = document.querySelector("body");

burger.addEventListener(
  "click",

  function () {
    burger.classList.toggle("header__burger--active");

    menu.classList.toggle("header__nav--active");
  }
);

menuLinks.forEach(function (el) {
  el.addEventListener(
    "click",

    function () {
      burger.classList.remove("header__burger--active");

      menu.classList.remove("header__nav--active");
    }
  );
});

body.addEventListener("click", function (e) {
  if (
    !e.target.closest(".header__burger") &&
    !e.target.closest(".header__nav")
  ) {
    burger.classList.remove("header__burger--active");
    menu.classList.remove("header__nav--active");
  }
});
