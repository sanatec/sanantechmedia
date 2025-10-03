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
