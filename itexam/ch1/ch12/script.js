const questions = [
  {
    "question": "What does 'dpi' stand for in digital imaging?",
    "options": ["Dots per inch", "Digital pixels interface", "Dynamic picture integrity", "Data processing input"],
    "correct": 0
  },
  {
    "question": "Which Inkscape tool is used to select and move objects?",
    "options": ["Bezier Tool", "Pencil Tool", "Select Tool", "Gradient Tool"],
    "correct": 2
  },
  {
    "question": "What is the purpose of layers in Inkscape?",
    "options": ["Add animation", "Organize and manage objects", "Apply filters", "Change document size"],
    "correct": 1
  },
  {
    "question": "What is the function of the 'Align and Distribute' panel?",
    "options": ["Add text effects", "Format shapes", "Position and space objects", "Apply gradients"],
    "correct": 2
  },
  {
    "question": "Which keyboard shortcut is used to save a file in Inkscape?",
    "options": ["Ctrl + X", "Ctrl + Z", "Ctrl + D", "Ctrl + S"],
    "correct": 3
  },
  {
    "question": "What is the purpose of the 'Zoom Tool' in Inkscape?",
    "options": ["Rotate objects", "Resize objects", "Magnify or reduce the view", "Apply filters"],
    "correct": 2
  },
  {
    "question": "How do you create a circle or ellipse in Inkscape?",
    "options": ["Rectangle Tool", "Bezier Tool", "Ellipse Tool", "Pencil Tool"],
    "correct": 2
  },
  {
    "question": "What is the function of the 'Node Tool' in Inkscape?",
    "options": ["Add text", "Edit nodes of paths and shapes", "Apply gradients", "Resize objects"],
    "correct": 1
  },
  {
    "question": "What is the purpose of the 'Object' menu in Inkscape?",
    "options": ["Apply filters", "Manipulate objects", "Add text effects", "Change document size"],
    "correct": 1
  },
  {
    "question": "What is the function of the 'Filters' menu in Inkscape?",
    "options": ["Add animation", "Apply visual effects to objects", "Change document size", "Format shapes"],
    "correct": 1
  },
  {
    "question": "What is the purpose of the 'Extension' menu in Inkscape?",
    "options": ["Add text effects", "Add extra functionality", "Apply gradients", "Resize objects"],
    "correct": 1
  },
  {
    "question": "How do you rotate an object in Inkscape?",
    "options": ["Use the 'Select Tool' and rotate handles", "Use the 'Gradient Tool'", "Use the 'Pencil Tool'", "Use the 'Text Tool'"],
    "correct": 0
  },
  {
    "question": "What is the function of the 'Stroke Style' in the 'Fill and Stroke' panel?",
    "options": ["Add text effects", "Adjust the border of a shape", "Apply gradients", "Change document size"],
    "correct": 1
  },
  {
    "question": "What is the purpose of the 'Opacity' setting in Inkscape?",
    "options": ["Add animation", "Adjust the transparency of an object", "Change document size", "Format shapes"],
    "correct": 1
  },
  {
    "question": "How do you create a new document in Inkscape?",
    "options": ["Ctrl + X", "Ctrl + Z", "Ctrl + N", "Ctrl + S"],
    "correct": 2
  },
  {
    "question": "What is the function of the 'Color Picker Tool' in Inkscape?",
    "options": ["Add text effects", "Select colors from the canvas", "Apply gradients", "Resize objects"],
    "correct": 1
  },
  {
    "question": "What is the purpose of the 'Grid' in Inkscape?",
    "options": ["Add animation", "Align and position objects accurately", "Change document size", "Format shapes"],
    "correct": 1
  },
  {
    "question": "How do you flip an object horizontally or vertically in Inkscape?",
    "options": ["Use the 'Pencil Tool'", "Use the 'Gradient Tool'", "Use the 'Object' menu and flip options", "Use the 'Text Tool'"],
    "correct": 2
  },
  {
    "question": "What is the function of the 'Convert Object to Path' command?",
    "options": ["Add text effects", "Change shapes into editable paths", "Apply gradients", "Resize objects"],
    "correct": 1
  },
  {
    "question": "What is the purpose of the 'Clones' in Inkscape?",
    "options": ["Add animation", "Create linked copies of objects", "Change document size", "Format shapes"],
    "correct": 1
  },
  {
    "question": "How do you create a pattern fill in Inkscape?",
    "options": ["Use the 'Text Tool'", "Use the 'Gradient Tool'", "Use the 'Fill and Stroke' panel, pattern tab", "Use the 'Pencil Tool'"],
    "correct": 2
  },
  {
    "question": "What is the purpose of the 'Trace Bitmap' function?",
    "options": ["Add text effects", "Convert raster images to vector graphics", "Apply gradients", "Resize objects"],
    "correct": 1
  },
  {
    "question": "What is the function of the 'Boolean Operations' in the 'Path' menu?",
    "options": ["Add animation", "Combine or subtract shapes", "Change document size", "Format shapes"],
    "correct": 1
  },
  {
    "question": "What is the purpose of the 'Guides' in Inkscape?",
    "options": ["Add text effects", "Align objects with non-printing lines", "Apply gradients", "Resize objects"],
    "correct": 1
  },
  {
    "question": "How do you create a perspective effect in Inkscape?",
    "options": ["Use the 'Pencil Tool'", "Use the 'Gradient Tool'", "Use the 'Extensions' menu and perspective effect", "Use the 'Text Tool'"],
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
