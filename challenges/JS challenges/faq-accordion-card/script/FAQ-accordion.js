const questionBtn = document.querySelectorAll(".question-btn");
const answer = document.querySelectorAll(".answer");
const questionBox = document.querySelectorAll(".question-box");
const arrows = document.querySelectorAll(".arrow");

const showAnswer = (e) => {
  if (!e.target.parentNode.classList.contains("active")) {
    questionBox.forEach((questionBox) =>
      questionBox.classList.remove("active")
    );
    questionBtn.forEach((btn) => (btn.style.fontWeight = "400"));
    arrows.forEach((arrow) => (arrow.style.transform = ""));
  }

  if (e.target.style.fontWeight == "bold") {
    e.target.style.fontWeight = "";
  } else {
    e.target.style.fontWeight = "bold";
  }

  if (e.target.children[0].style.transform == "") {
    e.target.children[0].style.transform = "rotate(180deg)";
  } else {
    e.target.children[0].style.transform = "";
  }

  e.target.parentNode.classList.toggle("active");
  // e.target.parentNode.children[1].classList.toggle('active')
  console.log(e.target.children[0]);
};

questionBtn.forEach((btn) => btn.addEventListener("click", showAnswer));
