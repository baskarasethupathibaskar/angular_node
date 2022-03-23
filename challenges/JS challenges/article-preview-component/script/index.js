const popup = document.querySelector(".pop-up");
const btnOpenPop = document.querySelector(".share-btn");
const btnClosePop = document.querySelector(".close-popup");

const openPopUp = function () {
  popup.classList.toggle("hidden");
  console.log("this worked");
};

btnOpenPop.addEventListener("click", openPopUp);
