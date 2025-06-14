const questions = [
 {
    "question": "Which command draws a square using turtle?",
    "options": ["4 forward() + 4 right(90)", "square()", "box(4)", "draw.square()"],
    "correct": 0
  },
  {
    "question": "How to repeat a block 5 times using while loop?",
    "options": ["while i < 5:", "for i in 5:", "while i == 5:", "repeat(5)"],
    "correct": 0
  },
  {
    "question": "Which of these is not a comparison operator?",
    "options": [">=", "<=", "!=", ":="],
    "correct": 3
  },
  {
    "question": "What is the default starting point in range(10)?",
    "options": ["1", "10", "0", "Undefined"],
    "correct": 2
  },
  {
    "question": "Which function is used to calculate area in a program?",
    "options": ["area()", "calculate_area()", "A formula using variables", "math.area"],
    "correct": 2
  },
  {
    "question": "What is the result of True and False?",
    "options": ["True", "False", "Error", "None"],
    "correct": 1
  },
  {
    "question": "Which of the following is NOT a valid Python datatype?",
    "options": ["Integer", "Float", "Letter", "String"],
    "correct": 2
  },
  {
    "question": "What will print(\"age\" + \"14\") display?",
    "options": ["28", "age14", "Error", "age + 14"],
    "correct": 1
  },
  {
    "question": "What does the + operator do with strings?",
    "options": ["Adds numerically", "Adds boolean", "Concatenates", "Multiplies"],
    "correct": 2
  },
  {
    "question": "Which of the following creates an infinite loop?",
    "options": ["while True:", "for i in range(5):", "while i < 10: with no increment", "A & C"],
    "correct": 3
  },
  {
    "question": "What is a flowchart used for?",
    "options": ["Drawing art", "Writing syntax", "Representing logic visually", "Memory management"],
    "correct": 2
  },
  {
    "question": "How is Kiddies category assigned in program logic?",
    "options": ["age >= 14", "age > 12", "age < 12", "age >= 16"],
    "correct": 2
  },
  {
    "question": "What is from turtle import * used for?",
    "options": ["Drawing images", "Importing all turtle functions", "Importing only forward", "Nothing"],
    "correct": 1
  },
  {
    "question": "Which loop type checks condition before execution?",
    "options": ["for", "while", "do-while", "until"],
    "correct": 1
  },
  {
    "question": "What happens when a condition is False in if block?",
    "options": ["Runs the code", "Skips to else", "Prints the result", "Crashes"],
    "correct": 1
  },
  {
    "question": "Which statement is true about Python lists?",
    "options": ["Lists can contain only strings", "Lists must be of the same data type", "Lists can store multiple data types", "Lists cannot be modified"],
    "correct": 2
  },
  {
    "question": "What will the following code print? colors = [\"red\", \"blue\", \"green\"]; print(colors[1])",
    "options": ["red", "blue", "green", "1"],
    "correct": 1
  },
  {
    "question": "What is the purpose of range(1, 10, 2) in a for loop?",
    "options": ["To count down from 10 to 1", "To iterate by 1", "To generate odd numbers from 1 to 9", "To generate even numbers"],
    "correct": 2
  },
  {
    "question": "In which scenario would you use an if...elif...else statement?",
    "options": ["To run code repeatedly", "To check multiple conditions", "To store values", "To take input"],
    "correct": 1
  },
  {
    "question": "What does the following code do? if age >= 16: print(\"Senior\")",
    "options": ["Checks if age is equal to 16 only", "Prints \"Senior\" only if age is 16", "Prints \"Senior\" if age is 16 or more", "Always prints \"Senior\""],
    "correct": 2
  },
  {
    "question": "What will for i in range(5): print(i) print?",
    "options": ["1 to 5", "0 to 5", "0 to 4", "1 to 4"],
    "correct": 2
  },
  {
    "question": "What is the output of: name = \"Ali\"; print(\"Hello\", name)?",
    "options": ["HelloAli", "Hello name", "Hello Ali", "Ali Hello"],
    "correct": 2
  },
  {
    "question": "Which Python function is used to take user input?",
    "options": ["get()", "print()", "input()", "read()"],
    "correct": 2
  },
  {
    "question": "Which Python module is used for date and time?",
    "options": ["turtle", "math", "os", "datetime"],
    "correct": 3
  },
  {
    "question": "Which statement about Python is FALSE?",
    "options": ["It is open-source", "It uses indentation", "It supports object-oriented programming", "It must declare data types for all variables"],
    "correct": 3
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

