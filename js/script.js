"use strict";

const projectButtons = document.querySelectorAll(".projects__button"),
  imgSections = document.querySelectorAll(".projects__grid-container"),
  callText = document.querySelector(".contacts__sub-title_dynamic");
let windowSize = document.body.clientWidth;

projectButtons.forEach((e) => {
  e.addEventListener("click", function () {
    imgSections.forEach((e) => {
      e.classList.add("hide");
    });
    projectButtons.forEach((e) => {
      e.classList.remove("active-button");
    });
    this.classList.add("active-button");
    document
      .getElementById(`${this.dataset.sectionnumber}`)
      .classList.remove("hide");
  });
});

window.addEventListener("resize", () => {
  windowSize = document.body.clientWidth;
  if (windowSize <= 789) {
    callText.textContent = "WhatsApp";
  } else {
    callText.textContent = "Call";
  }
});
