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

function generateInput(inputOptions) {
  const input = document.createElement("input");
  Object.keys(inputOptions).forEach((eachKey) => {
    input[eachKey] = inputOptions[eachKey];
  });
  return input;
}

function generateLabel(labelOptions) {
  const label = document.createElement("label");
  Object.keys(labelOptions).forEach((eachKey) => {
    label[eachKey] = labelOptions[eachKey];
  });
  return label;
}

function generateMCQs(currentQuestion) {
  const ul = document.createElement("ul");
  for (let i = 0; i <= 3; i++) {
    const li = document.createElement("li");
    const inputOptions = {
      type: "radio",
      class: "answer",
      id: `ans${i + 1}`,
      value: currentQuestion.options[i],
    };
    const input = generateInput(inputOptions);

    const labelOptions = {
      for: `ans${i + 1}`,
      id: `option${i + 1}`,
      value: String.fromCharCode(65 + i),
    };
    const label = generateLabel(labelOptions);
    li.append(input, label);
    ul.append(li);
  }
  return ul;
}

// ---- Change Options and Start Timer ------
const loadQuestion = (quiz) => {
  const currentQuiz = quiz[questionCount];
  // target Question field;
  const title = document.querySelector("#title");
  title.innerText = currentQuiz.Q;
  // load questions and options
  const currentQues = generateMCQs(currentQuiz);
};
loadQuestion(quiz);

// check whose input user was select;
Submit.addEventListener("click", (event) => {
  const userAnswer = event.target.innerText;
  console.log(userAnswer);

  if (userAnswer === quizDB[questionCount].ans) {
    Score++;
  }

  questionCount++;

  // ----- Load next Question -----
  if (questionCount < quizDB.length) {
    loadQuestion(quiz);
  } else {
    showQuizResult();
  }
});

// feedBack prompt
feedBack.addEventListener("click", (homePage) => {
  homePage.preventDefault();

  const userThouht = prompt("Please Give Your Thoughts");
  if (!!userThouht) {
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
  const selectedCategory = document.getElementById("categories").value;
  if (selectedCategory === "True-False") {
    window.location.href = "../html/true-false.html";
  }
  // open Math.html
  if (selectedCategory === "Math") {
    window.location.href = "../html/Math.html";
  }
}
