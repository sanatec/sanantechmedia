const questions = [
 {
    "question": "Which measurement is relative in CSS?",
    "options": ["px", "in", "cm", "em"],
    "correct": 3
  },
  {
    "question": "What does CSS stand for?",
    "options": ["Cascading Style Scripts", "Computer Styled Sheets", "Creative Style Sheets", "Cascading Style Sheets"],
    "correct": 3
  },
  {
    "question": "Who introduced CSS?",
    "options": ["Bill Gates", "Tim Berners-Lee", "Haakon Wium Lee and Bert Bos", "Elon Musk"],
    "correct": 2
  },
  {
    "question": "Which attribute is used for inline styles?",
    "options": ["class", "id", "style", "div"],
    "correct": 2
  },
  {
    "question": "In which section of HTML is the internal style placed?",
    "options": ["<title>", "<head>", "<body>", "<footer>"],
    "correct": 1
  },
  {
    "question": "What is the purpose of the <link> tag in HTML?",
    "options": ["Connect to JavaScript", "Connect to another webpage", "Link to an external stylesheet", "Display images"],
    "correct": 2
  },
  {
    "question": "Which extension is used for CSS files?",
    "options": [".html", ".js", ".css", ".doc"],
    "correct": 2
  },
  {
    "question": "Where is the external CSS file linked?",
    "options": ["<body>", "<style>", "<script>", "<head>"],
    "correct": 3
  },
  {
    "question": "What happens when the same property is defined in all three types of styles?",
    "options": ["External style applies", "Internal style applies", "Inline style applies", "None applies"],
    "correct": 2
  },
  {
    "question": "Which tag is used to divide sections on a webpage?",
    "options": ["<section>", "<div>", "<split>", "<break>"],
    "correct": 1
  },
  {
    "question": "What is a benefit of external CSS?",
    "options": ["Repetition of code", "Shorter HTML files", "Cannot be reused", "Slower loading"],
    "correct": 1
  },
  {
    "question": "Which style type allows reuse of CSS on multiple pages?",
    "options": ["Inline", "Internal", "External", "None"],
    "correct": 2
  },
  {
    "question": "How is the style.css file included in HTML?",
    "options": ["<style src=\"style.css\">", "<link rel=\"stylesheet\" href=\"style.css\">", "<css src=\"style.css\">", "<script href=\"style.css\">"],
    "correct": 1
  },
  {
    "question": "Which property changes font boldness?",
    "options": ["font-weight", "font-style", "font-size", "font-color"],
    "correct": 0
  },
  {
    "question": "What does the colon (:) in CSS represent?",
    "options": ["Value", "Selector", "Separator between property and value", "End of statement"],
    "correct": 2
  },
  {
    "question": "What does a semicolon (;) in CSS do?",
    "options": ["End the element", "End the property statement", "Start a new tag", "Separate HTML and CSS"],
    "correct": 1
  },
  {
    "question": "Which is a style property for text color?",
    "options": ["text-align", "background-color", "color", "font-size"],
    "correct": 2
  },
  {
    "question": "Which HTML tag does NOT need a closing tag?",
    "options": ["<div>", "<h2>", "<br>", "<p>"],
    "correct": 2
  },
  {
    "question": "What is the file extension for an HTML file?",
    "options": [".html", ".css", ".doc", ".jpg"],
    "correct": 0
  },
  {
    "question": "How many types of CSS are commonly used?",
    "options": ["1", "2", "3", "4"],
    "correct": 2
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

