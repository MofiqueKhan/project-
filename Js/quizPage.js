// target Question field;
const title = document.querySelector("#title");
// target Answers field;
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const answers = document.querySelectorAll(".answer");
// Select Option
const MCQ = document.querySelector("#MCQ").value;
const trueFalse = document.querySelector("#True-False");
const Math = document.querySelector("#Math");
// target Scoring box;
const showScore = document.querySelector("#showScore");
// target Submit Button;
const Submit = document.querySelector("#Submit");
// target feedBack option;
const feedBack = document.querySelector("#feedback");

let Score = 0;
let questionCount = 0;

// ---- Change Options and Start Timer ------
const loadQuestion = () => {
  // load questions and options
  title.innerHTML = quizDB[questionCount].Q;
  option1.innerHTML = quizDB[questionCount].a;
  option2.innerHTML = quizDB[questionCount].b;
  option3.innerHTML = quizDB[questionCount].c;
  option4.innerHTML = quizDB[questionCount].d;
};
loadQuestion();

// --- get the id of what input user was select ---;
const getAnswer = () => {
  let answer;
  answers.forEach((curElem) => {
    if (curElem.checked) {
      answer = curElem.id;
    }
  });
  return answer;
};

// deSelect options for next question;
const deSelect = () => {
  answers.forEach((element) => (element.checked = false));
};

// check whose input user was select;
Submit.addEventListener("click", () => {
  const checkAnswer = getAnswer();
  console.log(checkAnswer);

  if (checkAnswer === quizDB[Score].ans) {
    Score++;
  }

  questionCount++;
  deSelect();

  // ----- Load next Question -----
  if (questionCount < quizDB.length) {
    loadQuestion();
  } else {
    showQuizResult();
  }
});

// feedBack prompt
feedBack.addEventListener("click", (homePage) => {
  homePage.preventDefault();

  const userThouht = prompt("Please Give Your Thoughts");
  if (userThouht) {
    console.log(userThouht);
    alert("Thank You For Your Attention");
  }
});

// function to show quiz result
const showQuizResult = () => {
  // Show Score which is user was select;
  showScore.innerHTML = `<h3>You Scored ${Score} / ${quizDB.length}</h3>
    <button class='btn' onclick='location.reload()'> Play Again </button>`;
  showScore.style.display = "block";
  // hide the submit button
  Submit.style.display = "none";
};

// Open True-False Quiz File
function categoryChange() {
  var selectedCategory = document.getElementById("categories").value;
  if (selectedCategory == "True-False") {
    window.location.href = "../html/true-false.html";
  }
  // open Math.html
  if (selectedCategory == "Math") {
    window.location.href = "../html/Math.html";
  }
}
