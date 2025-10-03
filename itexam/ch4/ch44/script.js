const questions = [
{
    "question": "One way to reduce the negative effects of screen time is:",
    "options": ["Avoiding friends", "Limiting digital device use", "Staying up late", "Ignoring warning signs"],
    "correct": 1
  },
  {
    "question": "Which of the following is NOT a good example of Netiquette?",
    "options": ["Respecting online opinions", "Reporting inappropriate content", "Sharing someone’s private info without consent", "Avoiding hateful comments"],
    "correct": 2
  },
  {
    "question": "Which platform is best for finding scholarly publications?",
    "options": ["Google Scholar", "Instagram", "Facebook", "Amazon"],
    "correct": 0
  },
  {
    "question": "Which of these is a symptom of Cyberchondria?",
    "options": ["Fear of losing phone", "Searching medical symptoms constantly online", "Craving for video games", "Watching cooking videos"],
    "correct": 1
  },
  {
    "question": "Which organization is mentioned as spreading correct information against fake news?",
    "options": ["WHO", "UNICEF", "NASA", "FIFA"],
    "correct": 1
  },
  {
    "question": "What is the best way to verify whether online information is true?",
    "options": ["Check multiple reliable sources", "Believe the first result", "Ask a friend", "Trust every social media post"],
    "correct": 0
  },
  {
    "question": "Which file type is considered part of Big Data in cyberspace?",
    "options": ["Paper records", "Printed receipts", "Video and voice files", "Notebook drawings"],
    "correct": 2
  },
  {
    "question": "What makes a digital asset “non-fungible”?",
    "options": ["It can be used multiple times", "It is easily replaceable", "It is unique and not interchangeable", "It is stored in a USB"],
    "correct": 2
  },
  {
    "question": "What do avatars help with in cyberspace?",
    "options": ["Cooking food", "Representing users in virtual environments", "Playing physical sports", "Generating electricity"],
    "correct": 1
  },
  {
    "question": "What should you do before publishing content from cyberspace in your work?",
    "options": ["Modify it", "Credit the original source", "Hide the source", "Ignore it"],
    "correct": 1
  },
  {
    "question": "What happens when you copy work without permission or reference?",
    "options": ["You get a reward", "It's called plagiarism", "You become a researcher", "It’s encouraged"],
    "correct": 1
  },
  {
    "question": "What is one major risk of excessive use of cyberspace for entertainment?",
    "options": ["Better marks", "Increased energy", "Sedentary lifestyle", "Improved sleep"],
    "correct": 2
  },
  {
    "question": "Which behavior may be caused by checking social media constantly?",
    "options": ["Joy", "FOMO (Fear of Missing Out)", "Courage", "Patience"],
    "correct": 1
  },
  {
    "question": "What is an appropriate way to use information from Wikipedia in an assignment?",
    "options": ["Copy-paste it directly", "Share without editing", "Paraphrase and cite it properly", "Remove the author name"],
    "correct": 2
  },
  {
    "question": "Which data is created while using map software?",
    "options": ["Birthday data", "Exam results", "Travel route and time data", "Image resolution data"],
    "correct": 2
  },
  {
    "question": "What kind of data includes Browse history and app usage tracked silently?",
    "options": ["Explicit data", "Confidential data", "Implicit data", "Protected data"],
    "correct": 2
  },
  {
    "question": "Why is it important to verify the authenticity of information before sharing it?",
    "options": ["To win arguments", "To increase screen time", "To avoid spreading misinformation", "To avoid reading books"],
    "correct": 2
  },
  {
    "question": "What is the main difference between cyberspace and the internet?",
    "options": ["Cyberspace is a search engine", "Internet is part of cyberspace", "Internet is a virtual space", "Cyberspace is physical"],
    "correct": 1
  },
  {
    "question": "What are digital currencies secured by cryptography called?",
    "options": ["Digital wallets", "Cryptocurrency", "Cyber cash", "Tokens"],
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
