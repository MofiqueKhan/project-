const quizDB = [
  {
    Q: "Q1. What is the full form of HTML",
    a: "Hello To My Land",
    b: "Hey Text Markup Language",
    c: "Hyper Text My Language",
    d: "Hyper Text Markup Language",
    ans: "ans4",
  },
  {
    Q: "Q2. What is the full form of CSS",
    a: "Cascading Sheet Style",
    b: "Cascading Style Sheet",
    c: "Cascading Start Sheet",
    d: "Cascading String Sheet",
    ans: "ans2",
  },
  {
    Q: "Q3. What is the full form of JS",
    a: "JavaScript",
    b: "JavaSuper",
    c: "JavaStyle",
    d: "JustScript",
    ans: "ans1",
  },
];

const title = document.querySelector("#title");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const answers = document.querySelectorAll(".answer");
const showScore = document.querySelector("#showScore");
const Submit = document.querySelector("#Submit");
const feedBack = document.querySelector("#feedback");

let check = 0;
let score = 0;

// ---- Change Otions ------
const loadQuestion = () => {
  title.innerHTML = quizDB[score].Q;
  option1.innerHTML = quizDB[score].a;
  option2.innerHTML = quizDB[score].b;
  option3.innerHTML = quizDB[score].c;
  option4.innerHTML = quizDB[score].d;
};
loadQuestion();

// ------ Check input click ------
const getAnswer = () => {
  let answer;
  answers.forEach((curElem) => {
    if (curElem.checked) {
      answer = curElem.id;
    }
  });
  return answer;
};

Submit.addEventListener("click", () => {
  const checkAnswer = getAnswer();
  console.log(checkAnswer);

  if (checkAnswer === quizDB[check].ans) {
    check++;
  }

  // ----- Load next Question -----
  score++;
  if (score < quizDB.length) {
    loadQuestion();
  }
});

  // feedBack prompt
feedBack.addEventListener('click',(homePage)=> {
  homePage.preventDefault();

  const userThouht = prompt('Please Give Your Thoughts');
  console.log(userThouht);
})