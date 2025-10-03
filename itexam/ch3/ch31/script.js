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
let answeredQuestions = [];

const correctSound = document.getElementById("correct-sound");
const incorrectSound = document.getElementById("incorrect-sound");

function loadQuestion() {
  const questionElement = document.getElementById("question");
  const optionsContainer = document.getElementById("options");
  const backBtn = document.getElementById("back-btn");
  const nextBtn = document.getElementById("next-btn");

  questionElement.textContent = questions[currentQuestion].question;
  optionsContainer.innerHTML = "";

  questions[currentQuestion].options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    
    // If this question has been answered, show the result
    if (answeredQuestions[currentQuestion]) {
      const correctIndex = questions[currentQuestion].correct;
      if (index === correctIndex) {
        button.classList.add("correct");
      } else if (index === userAnswers[currentQuestion] && index !== correctIndex) {
        button.classList.add("wrong");
      }
      button.disabled = true;
    } else {
      button.onclick = () => checkAnswer(index, button);
    }
    
    optionsContainer.appendChild(button);
  });

  // Update navigation buttons
  backBtn.disabled = currentQuestion === 0;
  nextBtn.disabled = !answeredQuestions[currentQuestion];
  nextBtn.textContent = currentQuestion === questions.length - 1 ? "Finish" : "Next";

  // Update progress bar
  const progress = document.getElementById("progress");
  const progressPercent = ((currentQuestion) / questions.length) * 100;
  progress.style.width = `${progressPercent}%`;
}

function checkAnswer(selectedIndex, selectedButton) {
  const correctIndex = questions[currentQuestion].correct;
  const buttons = document.querySelectorAll(".options button");

  userAnswers[currentQuestion] = selectedIndex;
  answeredQuestions[currentQuestion] = true;

  if (selectedIndex === correctIndex) {
    correctAnswers++;
    document.getElementById("score").textContent = correctAnswers;
    correctSound.play();
    launchFireworks();
  } else {
    selectedButton.classList.add("wrong");
    incorrectSound.play();
    
    // Highlight the correct answer
    buttons[correctIndex].classList.add("show-correct");
  }

  buttons[correctIndex].classList.add("correct");
  buttons.forEach((btn) => (btn.disabled = true));
  
  // Enable next button
  document.getElementById("next-btn").disabled = false;
}

function nextQuestion() {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    loadQuestion();
  } else {
    showResults();
  }
}

function prevQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    loadQuestion();
  }
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
  answeredQuestions = [];
  document.getElementById("score").textContent = correctAnswers;
  document.getElementById("results-modal").style.display = "none";
  loadQuestion();
}

function launchFireworks() {
  const canvas = document.getElementById("star-canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const colors = ["#FFD700", "#FFEE58", "#FFF176", "#FFAB00", "#FF6F00"];

  // Create explosion at center
  for (let i = 0; i < 60; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 6 + 3;
    particles.push({
      x: canvas.width / 2,
      y: canvas.height / 2,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 2,
      size: Math.random() * 4 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      life: 100
    });
  }

  function drawStar(x, y, size, color) {
    ctx.save();
    ctx.beginPath();
    ctx.translate(x, y);
    ctx.moveTo(0, -size);
    for (let i = 0; i < 5; i++) {
      ctx.rotate(Math.PI / 5);
      ctx.lineTo(0, -size * 0.5);
      ctx.rotate(Math.PI / 5);
      ctx.lineTo(0, -size);
    }
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.shadowColor = color;
    ctx.shadowBlur = 15;
    ctx.fill();
    ctx.restore();
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p, i) => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.05; // gravity
      p.life--;

      if (p.life > 0) {
        drawStar(p.x, p.y, p.size, p.color);
      } else {
        particles.splice(i, 1);
      }
    });

    if (particles.length > 0) {
      requestAnimationFrame(animate);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  animate();
}

window.onload = function() {
  // Initialize answeredQuestions array
  answeredQuestions = new Array(questions.length).fill(false);
  loadQuestion();
};
