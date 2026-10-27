// DOM Elements
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");

const quizQuestions = [
  {
    question: "Khalid is playing with ........ brother.",
    answers: [
      { text: "her", correct: false },
      { text: "Its", correct: false },
      { text: "his", correct: true },
      { text: "she", correct: false },
    ],
  },
  {
    question: "Mona is washing ........ hands",
    answers: [
      { text: "her", correct: true },
      { text: "his", correct: false },
      { text: "she", correct: false },
      { text: "he", correct: false },
    ],
  },
  {
    question: "The dog is drinking ........ water",
    answers: [
      { text: "his", correct: false },
      { text: "her", correct: false },
      { text: "they", correct: false },
      { text: "its", correct: true },
    ],
  },
  {
    question: "I ........ a good student",
    answers: [
      { text: "is", correct: false },
      { text: "are", correct: false },
      { text: "am", correct: true },
      { text: "were", correct: false },
    ],
  },
  {
    question: "They ........ playing football now",
    answers: [
      { text: "am", correct: false },
      { text: "are", correct: true },
      { text: "is", correct: false },
      { text: "was", correct: false },
    ],
  },
  {
    question: "Yesterday, it ........ very hot",
    answers: [
      { text: "am", correct: false },
      { text: "is", correct: false },
      { text: "was", correct: true },
      { text: "were", correct: false },
    ],
  },
  {
    question: "We ........ at school yesterday",
    answers: [
      { text: "were", correct: true },
      { text: "is", correct: false },
      { text: "was", correct: false },
      { text: "am", correct: false },
    ],
  },
  {
    question: "........ are my friends.",
    answers: [
      { text: "them", correct: false },
      { text: "there", correct: false },
      { text: "their", correct: false },
      { text: "they", correct: true },
    ],
  },
  {
    question: "Go ........ and sit down.",
    answers: [
      { text: "they", correct: false },
      { text: "there", correct: true },
      { text: "their", correct: false },
      { text: "them", correct: false },
    ],
  },
  {
    question: "This is ........ car",
    answers: [
      { text: "they", correct: false },
      { text: "there", correct: false },
      { text: "you", correct: false },
      { text: "their", correct: true },
    ],
  },
  {
    question: "The boys ........ swimming in the pool yesterday",
    answers: [
      { text: "were", correct: true },
      { text: "was", correct: false },
      { text: "am", correct: false },
      { text: "is", correct: false },
    ],
  },
  {
    question: "My sister is riding ........ new bicycle",
    answers: [
      { text: "his", correct: false },
      { text: "he", correct: false },
      { text: "her", correct: true },
      { text: "its", correct: false },
    ],
  },
  {
    question: "Look at those birds! ........ are singing beautifully",
    answers: [
      { text: "there", correct: false },
      { text: "their", correct: false },
      { text: "they", correct: true },
      { text: "them", correct: false },
    ],
  },
  {
    question: "Put your shoes over ........ by the door",
    answers: [
      { text: "they", correct: false },
      { text: "their", correct: false },
      { text: "them", correct: false },
      { text: "there", correct: true },
    ],
  },
  {
    question: "The students love ........ school because it is beautiful.",
    answers: [
      { text: "they", correct: false },
      { text: "there", correct: false },
      { text: "their", correct: true },
      { text: "them", correct: false },
    ],
  },
  {
    question: "The children love ........ kind teacher",
    answers: [
      { text: "their", correct: true },
      { text: "they", correct: false },
      { text: "there", correct: false },
      { text: "he", correct: false },
    ],
  },
  {
    question: "Last night, Sami ........ watching a movie",
    answers: [
      { text: "were", correct: false },
      { text: "was", correct: true },
      { text: "am", correct: false },
      { text: "are", correct: false },
    ],
  },
  {
    question: "This bird has broken ........ wing.",
    answers: [
      { text: "her", correct: false },
      { text: "his", correct: false },
      { text: "you", correct: false },
      { text: "its", correct: true },
    ],
  },
  {
    question: "My father is driving ........ car to work",
    answers: [
      { text: "his", correct: false },
      { text: "her", correct: false },
      { text: "its", correct: true },
      { text: "she", correct: false },
    ],
  },
  {
    question: "Where ........ you born",
    answers: [
      { text: "were", correct: true },
      { text: "was", correct: false },
      { text: "is", correct: false },
      { text: "am", correct: false },
    ],
  },
  {
    question: "My mother is preparing ........ delicious lunch",
    answers: [
      { text: "his", correct: false },
      { text: "they", correct: false },
      { text: "its", correct: false },
      { text: "her", correct: true },
    ],
  },
  {
    question: "Look at that car! ........ color is red.",
    answers: [
      { text: "his", correct: false },
      { text: "her", correct: false },
      { text: "its", correct: true },
      { text: "they", correct: false },
    ],
  },
  {
    question: "The students ........ studying for the exam last night",
    answers: [
      { text: "was", correct: false },
      { text: "were", correct: true },
      { text: "is", correct: false },
      { text: "am", correct: false },
    ],
  },
  {
    question: "Look at those trees! ........ are very tall.",
    answers: [
      { text: "there", correct: false },
      { text: "their", correct: false },
      { text: "they", correct: true },
      { text: "them ", correct: false },
    ],
  },
  {
    question: "Is ........ a hospital near here.",
    answers: [
      { text: "they", correct: false },
      { text: "there", correct: true },
      { text: "their", correct: false },
      { text: "theirs", correct: false },
    ],
  },
  {
    question: "The girls forgot ........ homework at home..",
    answers: [
      { text: "they", correct: false },
      { text: "she", correct: false },
      { text: "there", correct: false },
      { text: "their", correct: true },
    ],
  },
  {
    question: "Why ........ you late today? ",
    answers: [
      { text: "are", correct: true },
      { text: "was", correct: false },
      { text: "am", correct: false },
      { text: "is", correct: false },
    ],
  },
  {
    question: "Look at those trees! ........ are very tall.",
    answers: [
      { text: "there", correct: false },
      { text: "they", correct: true },
      { text: "them", correct: false },
      { text: "their", correct: false },
    ],
  },
  {
    question: "The baby ........ crying a few minutes ago",
    answers: [
      { text: "are", correct: false },
      { text: "am", correct: false },
      { text: "were", correct: false },
      { text: "was", correct: true },
    ],
  },
  {
    question: "Faisal is clean. He always washes ........ face.",
    answers: [
      { text: "her", correct: false },
      { text: "its", correct: false },
      { text: "his", correct: true },
      { text: "me", correct: false },
    ],
  },
];

// QUIZ STATE VARS
let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;

totalQuestionsSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length;

// event listeners
startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);

function startQuiz() {
  // reset vars
  currentQuestionIndex = 0;
  score = 0;
  scoreSpan.textContent = 0;

  startScreen.classList.remove("active");
  quizScreen.classList.add("active");

  showQuestion();
}

function showQuestion() {
  // reset state
  answersDisabled = false;

  const currentQuestion = quizQuestions[currentQuestionIndex];

  currentQuestionSpan.textContent = currentQuestionIndex + 1;

  const progressPercent = (currentQuestionIndex / quizQuestions.length) * 100;
  progressBar.style.width = progressPercent + "%";

  questionText.textContent = currentQuestion.question;

  answersContainer.innerHTML = "";

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("answer-btn");

    // what is dataset? it's a property of the button element that allows you to store custom data
    button.dataset.correct = answer.correct;

    button.addEventListener("click", selectAnswer);

    answersContainer.appendChild(button);
  });
}

function selectAnswer(event) {
  // optimization check
  if (answersDisabled) return;

  answersDisabled = true;

  const selectedButton = event.target;
  const isCorrect = selectedButton.dataset.correct === "true";

  // Here Array.from() is used to convert the NodeList returned by answersContainer.children into an array, this is because the NodeList is not an array and we need to use the forEach method
  Array.from(answersContainer.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    } else if (button === selectedButton) {
      button.classList.add("incorrect");
    }
  });

  if (isCorrect) {
    score++;
    scoreSpan.textContent = score;
  }

  setTimeout(() => {
    currentQuestionIndex++;

    // check if there are more questions or if the quiz is over
    if (currentQuestionIndex < quizQuestions.length) {
      showQuestion();
    } else {
      showResults();
    }
  }, 1000);
}

function showResults() {
  quizScreen.classList.remove("active");
  resultScreen.classList.add("active");

  finalScoreSpan.textContent = score;

  const percentage = (score / quizQuestions.length) * 100;

  if (percentage === 100) {
    resultMessage.textContent = "Perfect! You're a genius!";
  } else if (percentage >= 80) {
    resultMessage.textContent = "Great job! You know your stuff!";
  } else if (percentage >= 60) {
    resultMessage.textContent = "Good effort! Keep learning!";
  } else if (percentage >= 40) {
    resultMessage.textContent = "Not bad! Try again to improve!";
  } else {
    resultMessage.textContent = "Keep studying! You'll get better!";
  }
}

function restartQuiz() {
  resultScreen.classList.remove("active");

  startQuiz();
}                                                             