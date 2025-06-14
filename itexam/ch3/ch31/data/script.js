const questions = [
{
    "question": "What language do computers use to understand instructions?",
    "options": ["Python", "Java", "Binary", "English"],
    "correct": 2
  },
  {
    "question": "In binary language, ON and OFF states are represented by:",
    "options": ["A and B", "True and False only", "1 and 0", "Yes and No"],
    "correct": 2
  },
  {
    "question": "Which of the following is a high-level language?",
    "options": ["Binary", "Machine Code", "Python", "ON/OFF"],
    "correct": 2
  },
  {
    "question": "What is the function of a compiler?",
    "options": ["Executes code line by line", "Translates code directly into hardware", "Converts high-level language into binary and saves as a file", "Converts binary to high-level language"],
    "correct": 2
  },
  {
    "question": "Which of the following is an interpreted language?",
    "options": ["C", "Java", "C++", "Python"],
    "correct": 3
  },
  {
    "question": "What is an algorithm?",
    "options": ["A programming language", "A list of hardware", "Step-by-step procedure to solve a problem", "A syntax rule"],
    "correct": 2
  },
  {
    "question": "What extension should Python files have?",
    "options": [".java", ".exe", ".txt", ".py"],
    "correct": 3
  },
  {
    "question": "In Python, which function is used to display output?",
    "options": ["write()", "input()", "display()", "print()"],
    "correct": 3
  },
  {
    "question": "Which Python operator is used for multiplication?",
    "options": ["x", "**", "*", "mul"],
    "correct": 2
  },
  {
    "question": "What does the int() function do in Python?",
    "options": ["Returns the current year", "Converts text input to an integer", "Initializes a loop", "None of the above"],
    "correct": 1
  },
  {
    "question": "Who developed the Python programming language?",
    "options": ["Dennis Ritchie", "Guido van Rossum", "James Gosling", "Charles Babbage"],
    "correct": 1
  },
  {
    "question": "Python was developed in which year?",
    "options": ["1980", "1995", "1990", "2000"],
    "correct": 2
  },
  {
    "question": "Python is:",
    "options": ["Closed-source", "Machine-level language", "Open-source", "Binary-only"],
    "correct": 2
  },
  {
    "question": "What is the use of input() in Python?",
    "options": ["Displays output", "Terminates program", "Takes input from user", "Calculates values"],
    "correct": 2
  },
  {
    "question": "What is a variable in Python?",
    "options": ["A fixed number", "A place to store data", "A constant", "A keyword"],
    "correct": 1
  },
  {
    "question": "Which symbol is used to assign a value in Python?",
    "options": ["==", ":=", "=", "=>"],
    "correct": 2
  },
  {
    "question": "Which of these is a valid variable name?",
    "options": ["1value", "value@", "_value", "@value"],
    "correct": 2
  },
  {
    "question": "Python does not require us to define:",
    "options": ["Variable names", "Data types", "Input values", "Keywords"],
    "correct": 1
  },
  {
    "question": "What is the datatype of input from input() function?",
    "options": ["Integer", "String", "Float", "Boolean"],
    "correct": 1
  },
  {
    "question": "What does int(\"2025\") return?",
    "options": ["String \"2025\"", "Boolean", "Integer 2025", "Error"],
    "correct": 2
  },
  {
    "question": "What will print(5 % 2) display?",
    "options": ["2", "1", "0", "2.5"],
    "correct": 1
  },
  {
    "question": "What is the output of a = 100; a = a + 25; print(a)?",
    "options": ["100", "25", "125", "Error"],
    "correct": 2
  },
  {
    "question": "Which operator is used for comparison in Python?",
    "options": [":=", "=", "==", "=>"],
    "correct": 2
  },
  {
    "question": "What is the output of 5 == 5?",
    "options": ["0", "True", "5", "Error"],
    "correct": 1
  },
  {
    "question": "What will this condition do: if age >= 14:?",
    "options": ["Always true", "Checks if age is 14 or more", "Assigns 14 to age", "None"],
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

