const quizDB = [
  {
    Q: "Q1. Only one capital exists in South Africa",
    a: "True",
    b: "False",
    ans: "ans2",
  },
  {
    Q: "Q2. California is home to the “Desert of Death",
    a: "True",
    b: "False",
    ans: "ans2",
  },
  {
    Q: "Q3. The average human body consists of 60% water",
    a: "True",
    b: "False",
    ans: "ans1",
  },
  {
    Q: "Q4. The liver is the largest internal organ in the human body. ",
    a: "True",
    b: "False",
    ans: "ans1",
  },

  {
    Q: "Q5. The human eyes can observe 10 million different colors.",
    a: "True",
    b: "False",
    ans: "ans1",
  },
  {
    Q: "Q6. Humans lose an an average of 75 strands of hair per week. ",
    a: "True",
    b: "False",
    ans: "ans2",
  },
  {
    Q: "Q7. The Golden State Warriors won the 2020 NBA championship.",
    a: "True",
    b: "False",
    ans: "ans2",
  },
  {
    Q: "Q8. KPI is a short form for Key Performance Indicator.",
    a: "True",
    b: "False",
    ans: "ans1",
  },
  {
    Q: "Q9. The blue whale is the biggest animal to have ever lived.",
    a: "True",
    b: "False",
    ans: "ans1",
  },
  {
    Q: "Q10. Mount Everest is the tallest mountain in the world.",
    a: "True",
    b: "False",
    ans: "ans1",
  },
];

// target Question field;
const title = document.querySelector("#title");
// target Answers field;
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
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
    // Show Score which is user was select;
    showScore.innerHTML = `<h3>You Scored ${Score} / ${quizDB.length}</h3>
    <button class='btn' onclick='location.reload()'> Play Again </button>`;
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
