const questions = [
 {
    "question": "What is a Python module?",
    "options": ["A function", "A command", "A file with functions, variables, and classes", "A variable"],
    "correct": 2
  },
  {
    "question": "Which module helps with mathematical functions?",
    "options": ["os", "math", "turtle", "graphics"],
    "correct": 1
  },
  {
    "question": "What is sqrt() used for in the math module?",
    "options": ["Square", "Square root", "Power", "Multiply"],
    "correct": 1
  },
  {
    "question": "How to comment a line in Python?",
    "options": ["// comment", "", "-- comment", "# comment"],
    "correct": 3
  },
  {
    "question": "What is the purpose of indentation in Python?",
    "options": ["Improve readability", "Mark code blocks", "Both A and B", "None"],
    "correct": 2
  },
  {
    "question": "What happens if indentation is incorrect in Python?",
    "options": ["Warning", "Program skips it", "SyntaxError", "Nothing"],
    "correct": 2
  },
  {
    "question": "What is the function of elif in Python?",
    "options": ["Else if", "Loop", "Input", "End program"],
    "correct": 0
  },
  {
    "question": "What will range(1, 20, 2) return?",
    "options": ["All numbers from 1 to 20", "All even numbers", "Odd numbers from 1 to 19", "Multiples of 2"],
    "correct": 2
  },
  {
    "question": "What does print(\"Hello\", 5) display?",
    "options": ["Hello", "5", "Hello 5", "Error"],
    "correct": 2
  },
  {
    "question": "What is == used for in Python?",
    "options": ["Assign value", "Compare values", "Comment", "Delete value"],
    "correct": 1
  },
  {
    "question": "What is the default datatype of input()?",
    "options": ["Integer", "Float", "String", "Boolean"],
    "correct": 2
  },
  {
    "question": "Which one is a valid list in Python?",
    "options": ["[\"a\", \"b\", \"c\"]", "\"a\", \"b\", \"c\"", "{a, b, c}", "(a, b, c)"],
    "correct": 0
  },
  {
    "question": "Which loop is ideal when the number of iterations is unknown?",
    "options": ["for", "while", "do-while", "if"],
    "correct": 1
  },
  {
    "question": "What is the output of range(10)?",
    "options": ["1 to 10", "0 to 9", "10 to 20", "0 to 10"],
    "correct": 1
  },
  {
    "question": "What is the use of int(input())?",
    "options": ["Take input", "Convert input to string", "Take input and convert to integer", "Convert to float"],
    "correct": 2
  },
  {
    "question": "Which symbol is used for modulus in Python?",
    "options": ["/", "%", "*", "//"],
    "correct": 1
  },
  {
    "question": "What is the output of print(10 // 3)?",
    "options": ["3.33", "3", "4", "Error"],
    "correct": 1
  },
  {
    "question": "Which function is used to print text in Python?",
    "options": ["write()", "display()", "show()", "print()"],
    "correct": 3
  },
  {
    "question": "What does the not operator do?",
    "options": ["Adds values", "Returns opposite boolean", "Checks values", "Assigns false"],
    "correct": 1
  },
  {
    "question": "Python is case-sensitive. True or False?",
    "options": ["True", "False"],
    "correct": 0
  },
  {
    "question": "What is the full form of IDE?",
    "options": ["Integrated Data Editor", "Internal Development Editor", "Integrated Development Environment", "Integrated Device Environment"],
    "correct": 2
  },
  {
    "question": "What is the turtle command to draw a circle?",
    "options": ["circle()", "drawCircle()", "circle[]", "loop.circle()"],
    "correct": 0
  },
  {
    "question": "Which command draws all turtle graphics in red?",
    "options": ["pen(\"red\")", "color(\"red\")", "penColor(\"red\")", "fill(\"red\")"],
    "correct": 1
  },
  {
    "question": "What is count += 1 shorthand for?",
    "options": ["count = 1", "count = count - 1", "count = count + 1", "None"],
    "correct": 2
  },
  {
    "question": "What does the os module help with?",
    "options": ["Math operations", "Operating system-related tasks", "Internet Browse", "Drawing"],
    "correct": 1
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

