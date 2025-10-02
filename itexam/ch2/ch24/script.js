const questions = [
{
    "question": "Which feature helps maintain visual balance when designing headlines and content?",
    "options": ["Flip vertically", "Use of shadows", "Alignment and spacing", "Use of large shapes only"],
    "correct": 2
  },
  {
    "question": "To create a banner on the front page, which tool is commonly used?",
    "options": ["Text Tool", "Shape Tool", "Node Tool", "Gradient Tool"],
    "correct": 1
  },
  {
    "question": "How can the appearance of a banner be enhanced for visual impact?",
    "options": ["Increase font size", "Add lines", "Use shapes, colors, and shadows", "Convert to table"],
    "correct": 2
  },
  {
    "question": "Why are images crucial on a newspaper's front page?",
    "options": ["They reduce space used by text", "They make the newspaper more colorful", "They grab readers’ attention and communicate messages quickly", "They are used only for decoration"],
    "correct": 2
  },
  {
    "question": "Which tool is primarily used to create a banner in Scribus?",
    "options": ["Line Tool", "Image Frame", "Shape Tool", "Polygon Tool"],
    "correct": 2
  },
  {
    "question": "What technique is used to modify the structure of a banner shape?",
    "options": ["Rotate tool", "Node Editing", "Stroke settings", "Grouping"],
    "correct": 1
  },
  {
    "question": "How can you access the Node Editing window in Scribus?",
    "options": ["Right-click and select Node", "Double-click on the shape", "Use Text Properties", "Use Layers menu"],
    "correct": 1
  },
  {
    "question": "To adjust the size or position of a node on a shape, you should modify:",
    "options": ["X-Pos and Y-Pos values", "Font size", "Stroke color", "Layer level"],
    "correct": 0
  },
  {
    "question": "To create a reflected version of a shape for banner design, you should:",
    "options": ["Rotate the object 90 degrees", "Flip it horizontally", "Change the font", "Justify the shape"],
    "correct": 1
  },
  {
    "question": "Which menu option is used to flip a shape in Scribus?",
    "options": ["Insert → Flip", "File → Transform", "Properties → X,Y,Z → Flip Horizontally", "Tools → Mirror"],
    "correct": 2
  },
  {
    "question": "How can two overlapping shapes be aligned more precisely?",
    "options": ["Drag manually", "Use arrow keys for fine adjustment", "Use snap guides only", "Zoom out"],
    "correct": 1
  },
  {
    "question": "Why is the Drop Shadow option used in banner design?",
    "options": ["To change object color", "To give a 3D visual effect", "To convert shape to text", "To lighten the background"],
    "correct": 1
  },
  {
    "question": "Where is the Drop Shadow option found?",
    "options": ["Text Properties", "Image Frame Menu", "Properties Window under Drop Shadow tab", "Insert → Effects"],
    "correct": 2
  },
  {
    "question": "Which button helps you view the current design without guides and outlines?",
    "options": ["Save", "Export", "Preview Mode", "Print Preview"],
    "correct": 2
  },
  {
    "question": "What should you do frequently while designing to avoid losing your work?",
    "options": ["Preview the design", "Adjust the layers", "Save the file", "Print the page"],
    "correct": 2
  },
  {
    "question": "What file format should you export your final newspaper to for printing?",
    "options": ["JPG", "DOCX", "PDF", "PNG"],
    "correct": 2
  },
  {
    "question": "Which menu is used to export a Scribus document to PDF?",
    "options": ["Edit → Export", "File → Export", "Tools → Print", "View → Export"],
    "correct": 1
  },
  {
    "question": "What is the benefit of exporting to PDF in Scribus?",
    "options": ["Smaller file size only", "Editable in Word", "Maintains layout and print quality", "Enables animations"],
    "correct": 2
  },
  {
    "question": "What should you do before exporting to PDF to ensure everything is in place?",
    "options": ["Add animation", "Resize the window", "Use Preview Mode", "Change the theme"],
    "correct": 2
  },
  {
    "question": "Which tool is used to add color to the full page background?",
    "options": ["Image Frame", "Text Frame", "Shape Tool", "Font Tool"],
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
