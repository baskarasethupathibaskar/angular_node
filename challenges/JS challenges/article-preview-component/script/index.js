const btn = document.querySelector(".card__footer--button");
const tooltip = document.querySelector(".tooltip");
const tooltipBtn = document.querySelector(".tooltip__button");

btn.addEventListener("click", (e) => {
  tooltip.classList.toggle("active");
});

tooltipBtn.addEventListener("click", (e) => {
  tooltip.classList.remove("active");
});