const questions = [
{
    "question": "What does the <div> tag help with in HTML?",
    "options": ["Adding style to text", "Creating hyperlinks", "Dividing the webpage into sections", "Displaying images"],
    "correct": 2
  },
  {
    "question": "Which tag is used to give heading level 2 in HTML?",
    "options": ["<head2>", "<h2>", "<heading2>", "<h>"],
    "correct": 1
  },
  {
    "question": "What does the style color:#0000FF; do to an element?",
    "options": ["Makes the background blue", "Adds border color", "Changes the text color to blue", "Aligns the text"],
    "correct": 2
  },
  {
    "question": "Which of the following is an inline style?",
    "options": ["<h3 style=\"text-align:center;\">", "<style>h3 { text-align: center; }</style>", "<link rel=\"stylesheet\" href=\"style.css\">", "<p class=\"center\">"],
    "correct": 0
  },
  {
    "question": "What does the property font-weight: bold; do?",
    "options": ["Increases font size", "Makes the font italic", "Makes the text bold", "Changes font color"],
    "correct": 2
  },
  {
    "question": "Which style property aligns text to the center?",
    "options": ["text-align: center;", "font-weight: center;", "align: center;", "text-style: center;"],
    "correct": 0
  },
  {
    "question": "What is the use of <style> tag in HTML?",
    "options": ["Adds scripts", "Links other HTML pages", "Defines internal CSS styles", "Displays an image"],
    "correct": 2
  },
  {
    "question": "Which of the following is NOT a limitation of inline styles?",
    "options": ["Repetition of code", "Smaller code size", "Difficult to maintain", "Code becomes lengthy"],
    "correct": 1
  },
  {
    "question": "In which part of the HTML document are internal styles written?",
    "options": ["<body>", "<footer>", "<head>", "<div>"],
    "correct": 2
  },
  {
    "question": "What is the correct way to link an external stylesheet?",
    "options": ["<script src=\"style.css\">", "<link rel=\"stylesheet\" href=\"style.css\">", "<a href=\"style.css\">", "<css>style.css</css>"],
    "correct": 1
  },
  {
    "question": "What is the purpose of using the <style> tag in HTML?",
    "options": ["Insert images", "Add CSS internally", "Add JavaScript", "Create links"],
    "correct": 1
  },
  {
    "question": "What does the property background-color define?",
    "options": ["Text alignment", "Font size", "Background color of an element", "Text color"],
    "correct": 2
  },
  {
    "question": "Which of these is a correct CSS color code for red?",
    "options": ["#0000FF", "#FF0000", "#00FF00", "#FFFF00"],
    "correct": 1
  },
  {
    "question": "Which style type takes the highest priority in HTML?",
    "options": ["Internal", "External", "Inline", "None"],
    "correct": 2
  },
  {
    "question": "Which of the following is a style property?",
    "options": ["<style>", "font-style", "head", "style-sheet"],
    "correct": 1
  },
  {
    "question": "What is the function of text-align: center;?",
    "options": ["Aligns text to the right", "Aligns text to the left", "Aligns text to the center", "Makes text bold"],
    "correct": 2
  },
  {
    "question": "What is an advantage of internal CSS?",
    "options": ["Styles are applied to multiple pages", "Styles are written in a separate file", "No need to repeat styles", "Styles are applied to the same file"],
    "correct": 3
  },
  {
    "question": "What unit is used to measure size in CSS?",
    "options": ["gm", "ml", "px", "kg"],
    "correct": 2
  },
  {
    "question": "Which of the following is a valid CSS measurement unit?",
    "options": ["meter", "px", "byte", "rpm"],
    "correct": 1
  },
  {
    "question": "Which of the following are absolute measurement units in CSS?",
    "options": ["%, em", "in, cm", "vw, vh", "rem, em"],
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
