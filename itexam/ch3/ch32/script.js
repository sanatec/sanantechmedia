const questions = [
{
    "question": "What is indentation in Python?",
    "options": ["Syntax error", "Tab space before a line", "Ignored space", "Not required"],
    "correct": 1
  },
  {
    "question": "What is the use of else: in Python?",
    "options": ["Ends the program", "Checks the condition", "Runs when if condition is false", "Repeats block"],
    "correct": 2
  },
  {
    "question": "Which of these is a conditional structure?",
    "options": ["loop", "print()", "if...else", "import"],
    "correct": 2
  },
  {
    "question": "What does while count < 3: do?",
    "options": ["Loops infinitely", "Runs 3 times if count is updated", "Terminates the program", "Gives error"],
    "correct": 1
  },
  {
    "question": "Which of these keywords is used in loops?",
    "options": ["stop", "repeat", "while", "do"],
    "correct": 2
  },
  {
    "question": "How many times will this loop run? count = 0; while count < 3: count += 1",
    "options": ["0", "2", "3", "Infinite"],
    "correct": 2
  },
  {
    "question": "Which loop is used for a known number of repetitions?",
    "options": ["while", "do-while", "for", "if"],
    "correct": 2
  },
  {
    "question": "What does range(1, 5) return?",
    "options": ["1, 2, 3, 4", "1 to 5", "0 to 5", "Error"],
    "correct": 0
  },
  {
    "question": "What is the output of for i in range(1,6): print(i)?",
    "options": ["1 2 3 4 5", "0 1 2 3 4 5", "1 to 6", "2 to 6"],
    "correct": 0
  },
  {
    "question": "How to print even numbers from 20 to 40 in Python?",
    "options": ["range(20,41,2)", "range(20,40)", "range(1,20,2)", "range(2,20,20)"],
    "correct": 0
  },
  {
    "question": "What does the for loop require in Python?",
    "options": ["A set of conditions", "A function", "A range or sequence", "A class"],
    "correct": 2
  },
  {
    "question": "Which Python module is used for graphics?",
    "options": ["sys", "os", "turtle", "cmd"],
    "correct": 2
  },
  {
    "question": "What does forward(100) do in turtle?",
    "options": ["Prints text", "Moves forward 100 units", "Draws a circle", "Rotates left"],
    "correct": 1
  },
  {
    "question": "How do you turn right in turtle?",
    "options": ["rotate(90)", "right(90)", "turn_right(90)", "move(90)"],
    "correct": 1
  },
  {
    "question": "To import all turtle functions, use:",
    "options": ["import turtle.all", "import * from turtle", "from turtle import *", "include turtle"],
    "correct": 2
  },
  {
    "question": "Which Python keyword is used to import a module?",
    "options": ["include", "import", "using", "use"],
    "correct": 1
  },
  {
    "question": "What does color(\"red\") do in turtle graphics?",
    "options": ["Sets background red", "Fills red", "Sets pen color to red", "Prints \"red\""],
    "correct": 2
  },
  {
    "question": "What does circle(100) do in turtle?",
    "options": ["Draws a circle with radius 100", "Rotates turtle 100 degrees", "Moves turtle 100 units", "Sets pen width"],
    "correct": 0
  },
  {
    "question": "Which command draws a rectangle using turtle graphics?",
    "options": ["4 forward and 4 turn commands", "rectangle(4)", "draw_rectangle()", "draw.square()"],
    "correct": 0
  },
  {
    "question": "What is the purpose of lists in Python?",
    "options": ["Store multiple data items", "Perform calculations", "Draw shapes", "Create loops"],
    "correct": 0
  },
  {
    "question": "What is the correct syntax to create a list?",
    "options": ["list = (1,2,3)", "list = {1,2,3}", "list = [1,2,3]", "list = <1,2,3>"],
    "correct": 2
  },
  {
    "question": "What does the for clr in colors: loop do?",
    "options": ["Loops through string", "Loops through a list", "Loops through integers", "Error"],
    "correct": 1
  },
  {
    "question": "What is the datatype of items in a list?",
    "options": ["Only strings", "Only integers", "Any datatype", "Boolean only"],
    "correct": 2
  },
  {
    "question": "What is IDLE in Python?",
    "options": ["An image editor", "An IDE for Python", "A debugger tool", "A game"],
    "correct": 1
  },
  {
    "question": "Which menu is used to run a program in IDLE?",
    "options": ["File", "Tools", "Run", "Debug"],
    "correct": 2
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
