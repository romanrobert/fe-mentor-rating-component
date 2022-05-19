// Strict Mode
"use strict";

const ratings = document.querySelectorAll(".rating__item");
const ratingCard = document.querySelector(".rating-card");
const thankYouCard = document.querySelector(".ty-card");
const btn = document.querySelector(".content__button");
const span = document.querySelector("span");

// Select Rating

const selectRating = function (arg) {
  // Loops trough the each rating item.
  for (let i = 0; i < arg.length; i++) {
    arg[i].addEventListener("click", () => {
      let value = arg[i].innerHTML;
      console.log(value);
      for (let i = 0; i < arg.length; i++) {
        // Checks if the current rating contains --active class
        arg[i].classList.contains("rating__item--active");
        // if it contains the --active class it removes it.
        arg[i].classList.remove("rating__item--active");
      }

      // adds the active class to the selected rating item
      arg[i].classList.add("rating__item--active");

      btn.addEventListener("click", () => {
        // Adds display:none to rating-card
        ratingCard.style.display = "none";
        // Adds display : flex to thank you card
        thankYouCard.style.display = "flex";
        // Adds value to the span = number of selected rating
        span.innerHTML = value;
      });
    });
  }
};

const ratingValue = selectRating(ratings);
console.log(ratingValue);
