const questions = [
{
    "question": "How do you create a perspective envelope effect in Inkscape?",
    "options": ["Use the 'Pencil Tool'", "Use the 'Gradient Tool'", "Use the 'Extensions' menu and envelope effect", "Use the 'Text Tool'"],
    "correct": 2
  },
  {
    "question": "What is the function of the 'Path Simplify' command?",
    "options": ["Add animation", "Reduce the number of nodes in a path", "Change document size", "Format shapes"],
    "correct": 1
  },
  {
    "question": "What is the purpose of the 'Export Selection' option?",
    "options": ["Add text effects", "Export only the selected objects", "Apply gradients", "Resize objects"],
    "correct": 1
  },
  {
    "question": "How do you create a 3D rotation effect in Inkscape?",
    "options": ["Use the 'Pencil Tool'", "Use the 'Gradient Tool'", "Use the 'Extensions' menu and 3D rotation", "Use the 'Text Tool'"],
    "correct": 2
  },
  {
    "question": "What is the function of the 'Path Reverse' command?",
    "options": ["Add animation", "Reverse the direction of a path", "Change document size", "Format shapes"],
    "correct": 1
  },
  {
    "question": "What is the purpose of the 'Save As Template' option?",
    "options": ["Add text effects", "Save the document as a template for future use", "Apply gradients", "Resize objects"],
    "correct": 1
  },
  {
    "question": "How do you create a 3D shadow effect in Inkscape?",
    "options": ["Use the 'Pencil Tool'", "Use the 'Gradient Tool'", "Use the 'Filters' menu and 3D shadow", "Use the 'Text Tool'"],
    "correct": 2
  },
  {
    "question": "Which shortcut key is used to create rectangles and squares in Inkscape?",
    "options": ["S", "R", "E", "T"],
    "correct": 1
  },
  {
    "question": "What is the shortcut to draw circles, ellipses, and arcs in Inkscape?",
    "options": ["C", "O", "E", "R"],
    "correct": 2
  },
  {
    "question": "Which key is used to create and edit text objects?",
    "options": ["T", "B", "N", "P"],
    "correct": 0
  },
  {
    "question": "The shortcut to open the Document Properties window is:",
    "options": ["Ctrl + D", "Shift + Ctrl + D", "Ctrl + P", "Shift + D"],
    "correct": 1
  },
  {
    "question": "What is the shortcut key for the Bezier curve and straight lines tool?",
    "options": ["B", "E", "S", "D"],
    "correct": 0
  },
  {
    "question": "How can you open the Align and Distribute window quickly?",
    "options": ["Ctrl + A", "Shift + A", "Shift + Ctrl + A", "Ctrl + Shift + D"],
    "correct": 2
  },
  {
    "question": "Which shortcut is used to select and transform objects?",
    "options": ["T", "S", "E", "G"],
    "correct": 1
  },
  {
    "question": "Pressing which key will allow you to draw freehand lines?",
    "options": ["B", "P", "E", "T"],
    "correct": 1
  },
  {
    "question": "The shortcut key to duplicate an object is:",
    "options": ["Ctrl + C", "Ctrl + X", "Ctrl + D", "Ctrl + G"],
    "correct": 2
  },
  {
    "question": "To group selected objects, you press:",
    "options": ["Ctrl + D", "Ctrl + G", "Shift + G", "Alt + G"],
    "correct": 1
  },
  {
    "question": "Which tool is activated by pressing the shortcut key ‘N’ in Inkscape?",
    "options": ["Create Text", "Edit Path by Nodes", "Create Rectangle", "Draw Circles"],
    "correct": 1
  },
  {
    "question": "What does the shortcut ‘Ctrl + S’ do in Inkscape?",
    "options": ["Save the file", "Select an object", "Scale the object", "Open a new document"],
    "correct": 0
  },
  {
    "question": "Which shortcut is used to open the Export PNG Image window?",
    "options": ["Ctrl + E", "Shift + Ctrl + E", "Alt + E", "Ctrl + Shift + P"],
    "correct": 1
  },
  {
    "question": "To bring an object one step forward in the layer stack, you press:",
    "options": ["PgUp", "PgDn", "Ctrl + PgUp", "Shift + PgDn"],
    "correct": 0
  },
  {
    "question": "Which shortcut key flips an object horizontally?",
    "options": ["H", "Shift + H", "Ctrl + H", "No direct shortcut, use toolbar"],
    "correct": 3
  },
  {
    "question": "What happens if you press Ctrl + Z in Inkscape?",
    "options": ["Redo the last action", "Zoom in", "Undo the last action", "Save the document"],
    "correct": 2
  },
  {
    "question": "Which shortcut will you use to zoom in to a selected area?",
    "options": ["Z", "Shift + Z", "Ctrl + Z", "Ctrl + Shift + Z"],
    "correct": 0
  },
  {
    "question": "What is the shortcut to open the Fill and Stroke window?",
    "options": ["Ctrl + F", "Shift + Ctrl + F", "Alt + F", "Ctrl + Shift + S"],
    "correct": 1
  },
  {
    "question": "Which tool's shortcut key is 'G' in Inkscape?",
    "options": ["Gradient tool", "Grid tool", "Group tool", "Guide tool"],
    "correct": 0
  },
  {
    "question": "What is the shortcut to select everything on the canvas?",
    "options": ["Ctrl + A", "Shift + A", "Alt + A", "Ctrl + Shift + A"],
    "correct": 0
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
