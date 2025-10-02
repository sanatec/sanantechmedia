const questions = [
{
    "question": "Where can you add more colors in Scribus?",
    "options": ["Tools → Palette Editor", "File → Color Settings", "Edit → Colours and Fills", "Insert → New Colors"],
    "correct": 2
  },
  {
    "question": "Which font developed by CDIT is used in Malayalam textbooks?",
    "options": ["Manjari", "THUMBA", "Lato", "Kartika"],
    "correct": 1
  },
  {
    "question": "Which component shows object positions like X-Pos and Y-Pos?",
    "options": ["Toolbar", "Canvas", "Properties Window", "Layers Panel"],
    "correct": 2
  },
  {
    "question": "What should be done if Malayalam text appears unreadable?",
    "options": ["Restart Scribus", "Convert to shape", "Select proper Unicode font and language", "Delete the text"],
    "correct": 2
  },
  {
    "question": "Which menu in Scribus is used to start a new document?",
    "options": ["Insert", "File", "Tools", "View"],
    "correct": 1
  },
  {
    "question": "What setting can you choose in the Scribus New Document window?",
    "options": ["Line spacing", "Colour palette", "Page size and margins", "File format"],
    "correct": 2
  },
  {
    "question": "Which of the following is not part of the Scribus workspace?",
    "options": ["Menubar", "Titlebar", "Timeline", "Canvas"],
    "correct": 2
  },
  {
    "question": "Where can you find the Properties window in Scribus?",
    "options": ["Tools menu only", "By double-clicking an object or from the Windows menu", "Insert menu", "Format menu"],
    "correct": 1
  },
  {
    "question": "Which tool is used to draw a polygon shape in Scribus?",
    "options": ["Text Frame", "Image Frame", "Polygon Tool", "Node Tool"],
    "correct": 2
  },
  {
    "question": "Which of these is not available in the Scribus toolbar by default?",
    "options": ["Text frame", "Canvas grid", "Image frame", "Shape tool"],
    "correct": 1
  },
  {
    "question": "What action does pressing Ctrl while drawing a line do in Scribus?",
    "options": ["Makes the line curved", "Creates a dashed line", "Ensures the line is perfectly straight", "Activates shadow"],
    "correct": 2
  },
  {
    "question": "What does the Selection Tool allow you to do in Scribus?",
    "options": ["Add new text", "Import fonts", "Move and resize objects", "Export documents"],
    "correct": 2
  },
  {
    "question": "What happens when you right-click on a shape in Scribus?",
    "options": ["Nothing", "Opens color settings only", "Opens context menu with editing options", "Activates Node Editing"],
    "correct": 2
  },
  {
    "question": "Which component is used to edit the position (X/Y) and size of an object?",
    "options": ["Canvas", "Toolbar", "Properties Window", "Menubar"],
    "correct": 2
  },
  {
    "question": "Which tab in the Properties window is used to change a shape's fill color?",
    "options": ["Text", "Stroke", "Colours", "Effects"],
    "correct": 2
  },
  {
    "question": "To remove the border around a shape, what should be selected in the Stroke tab?",
    "options": ["White", "Transparent", "None", "Hidden"],
    "correct": 2
  },
  {
    "question": "Where do you go to find more color options in Scribus?",
    "options": ["Tools → Color Picker", "File → Preferences", "Edit → Colours and Fills", "View → Palettes"],
    "correct": 2
  },
  {
    "question": "Which colour set can be selected to expand the colour palette in Scribus?",
    "options": ["Scribus Default", "Basic Colors", "Oxygen", "Gradient"],
    "correct": 2
  },
  {
    "question": "How do you give shadow to a text or object in Scribus?",
    "options": ["Use Shadow Tool", "Apply drop shadow in Text Effects", "Enable “Has Drop Shadow” in Properties", "Convert to 3D"],
    "correct": 2
  },
  {
    "question": "Which tool allows you to change the shape of an object by modifying its points?",
    "options": ["Contour Line Editor", "Node Editing", "Shape Tool", "Polygon Tool"],
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
