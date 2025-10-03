const questions = [
{
    "question": "What is FOMO?",
    "options": ["Fear of missing out", "Fear of media online", "False online message", "Format of messaging"],
    "correct": 0
  },
  {
    "question": "What is Cyberchondria?",
    "options": ["Love for cyberspace", "Searching for health issues online excessively", "A type of social media", "A coding language"],
    "correct": 1
  },
  {
    "question": "What does Digital Detox mean?",
    "options": ["Deleting data", "Unplugging from digital devices for a while", "Scanning a computer", "Formatting mobile"],
    "correct": 1
  },
  {
    "question": "Which is a correct digital security practice?",
    "options": ["Sharing your password", "Posting bank details online", "Keeping ATM PIN private", "Using same password everywhere"],
    "correct": 2
  },
  {
    "question": "Which of these is true about avatars?",
    "options": ["They are real-life photographs", "They are fictional characters only", "They represent users in digital environments", "They are used in physical classrooms"],
    "correct": 2
  },
  {
    "question": "Which of the following is used to track health data and connect with cyberspace?",
    "options": ["Calculator", "Smartwatch", "USB drive", "Thermometer"],
    "correct": 1
  },
  {
    "question": "What is the major advantage of using the Metaverse in education?",
    "options": ["More homework", "Virtual and immersive learning experiences", "Internet bills increase", "It blocks games"],
    "correct": 1
  },
  {
    "question": "The science fiction novel Neuromancer is significant because:",
    "options": ["It teaches HTML", "It introduced smartphones", "It popularized the term \"cyberspace\"", "It predicts floods"],
    "correct": 2
  },
  {
    "question": "What kind of platform is Khan Academy considered in cyberspace?",
    "options": ["Social media", "News outlet", "Online educational platform", "Digital gaming site"],
    "correct": 2
  },
  {
    "question": "Which of the following is an example of an NFT?",
    "options": ["Textbook", "Digital painting", "Printed photo", "Hard disk"],
    "correct": 1
  },
  {
    "question": "OpenSea is known as a marketplace for:",
    "options": ["Boats", "e-Books", "NFT trading", "Domain hosting"],
    "correct": 2
  },
  {
    "question": "Which digital asset type is www.samagra.kite.kerala.gov.in?",
    "options": ["Digital currency", "NFT", "Domain name", "Software"],
    "correct": 2
  },
  {
    "question": "Which action is part of explicit data collection?",
    "options": ["GPS tracking", "Filling out an online form", "Auto-typing search queries", "Detecting screen time"],
    "correct": 1
  },
  {
    "question": "What does the term “plagiarism” mean?",
    "options": ["Giving references", "Rewriting in your own words", "Copying others’ work without credit", "Publishing new research"],
    "correct": 2
  },
  {
    "question": "What is the purpose of spoiler alerts?",
    "options": ["To notify about malware", "To warn about key plot revelations", "To cancel subscriptions", "To reset passwords"],
    "correct": 1
  },
  {
    "question": "The term “cyberworld” refers to:",
    "options": ["Physical world", "Specific virtual spaces within cyberspace", "A coding language", "Social networking apps only"],
    "correct": 1
  },
  {
    "question": "What is the role of sensors in IoT devices?",
    "options": ["To scan paper documents", "To collect and transmit data", "To increase screen size", "To run antivirus"],
    "correct": 1
  },
  {
    "question": "What is a characteristic of Big Data?",
    "options": ["Easy to store", "Easily processed by traditional software", "Vast and complex datasets", "Created only by scientists"],
    "correct": 2
  },
  {
    "question": "Which of the following is a harmful behavior in cyberspace?",
    "options": ["Using a VPN", "Reading news", "Spreading hate messages", "Participating in online classes"],
    "correct": 2
  },
  {
    "question": "The practice of respectful behavior online is known as:",
    "options": ["Cyberspying", "Cybernet", "Netiquette", "Digital manners"],
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
