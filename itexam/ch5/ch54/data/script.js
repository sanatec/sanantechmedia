const questions = [
 {
    "question": "Which is NOT a type of CSS?",
    "options": ["Internal", "Inline", "Network", "External"],
    "correct": 2
  },
  {
    "question": "What is the correct tag for linking CSS?",
    "options": ["<link>", "<script>", "<css>", "<connect>"],
    "correct": 0
  },
  {
    "question": "Which part of an HTML document links external CSS?",
    "options": ["<head>", "<body>", "<style>", "<div>"],
    "correct": 0
  },
  {
    "question": "Which is the correct order of CSS priority (highest to lowest)?",
    "options": ["External > Internal > Inline", "Inline > Internal > External", "Internal > External > Inline", "Inline > External > Internal"],
    "correct": 1
  },
  {
    "question": "The main benefit of using CSS is:",
    "options": ["Use fewer tags", "Add more HTML", "Improve styling and reduce code duplication", "Increase file size"],
    "correct": 2
  },
  {
    "question": "How do you add a border to an element using CSS?",
    "options": ["border-color", "border: 1px solid black;", "outline: black;", "text-outline: true;"],
    "correct": 1
  },
  {
    "question": "Which property changes the background of a tag?",
    "options": ["color", "background", "background-color", "bgcolor"],
    "correct": 2
  },
  {
    "question": "To make text italic in CSS:",
    "options": ["text-style: italic;", "font-style: italic;", "font-weight: italic;", "text-align: italic;"],
    "correct": 1
  },
  {
    "question": "Which is the correct property to change font?",
    "options": ["font-style", "font-family", "font-weight", "font-size"],
    "correct": 1
  },
  {
    "question": "How do you increase space between lines in CSS?",
    "options": ["line-height", "padding", "margin", "spacing"],
    "correct": 0
  },
  {
    "question": "To change color of visited links, use:",
    "options": ["a:visited", "link:visited", "a:hover", "a:clicked"],
    "correct": 0
  },
  {
    "question": "What is the selector to apply style to a paragraph with class \"intro\"?",
    "options": ["p.intro", "p#intro", ".intro", "intro.p"],
    "correct": 2
  },
  {
    "question": "Which tag defines style for internal CSS?",
    "options": ["<style>", "<script>", "<css>", "<format>"],
    "correct": 0
  },
  {
    "question": "To align content horizontally center in a block:",
    "options": ["text-align: middle;", "align: center;", "text-align: center;", "justify-content: center;"],
    "correct": 2
  },
  {
    "question": "Which selector targets all elements?",
    "options": ["#", ".", "*", "all"],
    "correct": 2
  },
  {
    "question": "How can we include Google Fonts in a webpage?",
    "options": ["<google-font>", "Using external link in <head>", "<font src=\"\">", "<script font=\"\">"],
    "correct": 1
  },
  {
    "question": "Which of the following will apply red color to all <h2> tags?",
    "options": ["h2 { color: red; }", "h2.color = red;", "color: red h2;", "red.h2 {}"],
    "correct": 0
  },
  {
    "question": "What is the difference between id and class selectors in CSS?",
    "options": ["id uses #, class uses .", "class uses #, id uses .", "both use #", "both use ."],
    "correct": 0
  },
  {
    "question": "To apply style to a specific element by its ID:",
    "options": [".idname", "#idname", "id.name", "element.id"],
    "correct": 1
  },
  {
    "question": "How many times can the same ID be used on a page?",
    "options": ["Once", "Twice", "Unlimited", "10"],
    "correct": 0
  }
  
];

let currentQuestion = 0;
let correctAnswers = 0;
let userAnswers = [];
let currentReviewIndex = 0;

const correctSound = document.getElementById("correct-sound");
const incorrectSound = document.getElementById("incorrect-sound");

function loadQuestion() {
  const questionElement = document.getElementById("question");
  const optionsContainer = document.getElementById("options");

  questionElement.textContent = questions[currentQuestion].question;
  optionsContainer.innerHTML = "";

  questions[currentQuestion].options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.onclick = () => checkAnswer(index, button);
    optionsContainer.appendChild(button);
  });

  // Update progress bar
  const progress = document.getElementById("progress");
  const progressPercent = ((currentQuestion) / questions.length) * 100;
  progress.style.width = `${progressPercent}%`;
}

function checkAnswer(selectedIndex, selectedButton) {
  const correctIndex = questions[currentQuestion].correct;
  const buttons = document.querySelectorAll(".options button");

  userAnswers[currentQuestion] = selectedIndex;

  if (selectedIndex === correctIndex) {
    correctAnswers++;
    document.getElementById("score").textContent = correctAnswers;
    correctSound.play();
  } else {
    selectedButton.classList.add("wrong");
    incorrectSound.play();
  }

  buttons[correctIndex].classList.add("correct");
  buttons.forEach((btn) => (btn.disabled = true));

  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      showResults();
    }
  }, 1000);
}

function showResults() {
  const modal = document.getElementById("results-modal");
  const correctCount = document.getElementById("correct-count");
  const incorrectCount = document.getElementById("incorrect-count");
  const resultsMessage = document.getElementById("results-message");

  const totalQuestions = questions.length;
  const incorrectAnswers = totalQuestions - correctAnswers;

  correctCount.textContent = correctAnswers;
  incorrectCount.textContent = incorrectAnswers;

  resultsMessage.textContent = correctAnswers === totalQuestions
    ? "Congratulations! All correct!"
    : "Quiz Complete!";

  modal.style.display = "flex";
}

function reviewAnswers() {
  currentReviewIndex = 0;
  document.getElementById("review-modal").style.display = "flex";
  showReviewQuestion(currentReviewIndex);
}

function showReviewQuestion(index) {
  const q = questions[index];
  const userAnswer = userAnswers[index];
  const isCorrect = userAnswer === q.correct;

  const questionElem = document.getElementById("review-question");
  const answerElem = document.getElementById("review-answer");

  questionElem.textContent = `${index + 1}. ${q.question}`;
  answerElem.innerHTML = `
    <div class="${isCorrect ? 'review-correct' : 'review-incorrect'}">
      Your Answer: ${q.options[userAnswer] || "No answer"}<br>
      Correct Answer: ${q.options[q.correct]}
    </div>
  `;
}

function nextReview() {
  if (currentReviewIndex < questions.length - 1) {
    currentReviewIndex++;
    showReviewQuestion(currentReviewIndex);
  }
}

function prevReview() {
  if (currentReviewIndex > 0) {
    currentReviewIndex--;
    showReviewQuestion(currentReviewIndex);
  }
}

function closeReview() {
  document.getElementById("review-modal").style.display = "none";
}

function restartQuiz() {
  currentQuestion = 0;
  correctAnswers = 0;
  userAnswers = [];
  document.getElementById("score").textContent = correctAnswers;
  document.getElementById("results-modal").style.display = "none";
  loadQuestion();
}

window.onload = loadQuestion;

