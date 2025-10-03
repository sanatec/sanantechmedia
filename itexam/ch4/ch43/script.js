const questions = [
{
    "question": "Which platform is recommended for finding reliable academic content?",
    "options": ["TikTok", "Instagram", "Google Scholar", "Shopping apps"],
    "correct": 2
  },
  {
    "question": "What is the danger of excessive screen time?",
    "options": ["High battery use", "Health problems like Tech Neck", "Better eyesight", "Fast charging issues"],
    "correct": 1
  },
  {
    "question": "What does \"Tech Neck\" result from?",
    "options": ["Playing VR games", "Reading too much", "Prolonged bending of neck while using devices", "Using headphones"],
    "correct": 2
  },
  {
    "question": "What is one symptom of Gaming Disorder?",
    "options": ["Reading books", "Ignoring daily responsibilities", "Eating vegetables", "Sleeping early"],
    "correct": 1
  },
  {
    "question": "Which of the following should NOT be shared online?",
    "options": ["Photos of pets", "Passwords", "Inspirational quotes", "Public news"],
    "correct": 1
  },
  {
    "question": "Which term refers to the anxiety of not having a phone or internet connection?",
    "options": ["Nomophobia", "Phonitis", "Disconnect disorder", "Cyberstress"],
    "correct": 0
  },
  {
    "question": "The correct way to complete an academic essay is by:",
    "options": ["Copying from Wikipedia", "Adding unverified quotes", "Using authentic references", "Writing in emojis"],
    "correct": 2
  },
  {
    "question": "A domain name is:",
    "options": ["A physical server", "An address for websites on the internet", "An AI system", "A blog title"],
    "correct": 1
  },
  {
    "question": "“Paddy and chaff” metaphor in cyberspace refers to:",
    "options": ["Rice and wheat", "Old traditions", "Truth and misinformation", "Internet filters"],
    "correct": 2
  },
  {
    "question": "Who should you report inappropriate online content to?",
    "options": ["Classmates only", "Cyber police or teacher", "Random users", "Online influencers"],
    "correct": 1
  },
  {
    "question": "Which of the following is not typically used for implicit data collection?",
    "options": ["Browse history", "Location data", "Feedback form", "App usage details"],
    "correct": 2
  },
  {
    "question": "What is the primary purpose of ethical hacking?",
    "options": ["To break into secure systems", "To play online games", "To improve cybersecurity with permission", "To steal data legally"],
    "correct": 2
  },
  {
    "question": "Which device is often used for voice-command-based control of appliances?",
    "options": ["Calculator", "Smart speaker", "Hair dryer", "Blender"],
    "correct": 1
  },
  {
    "question": "Which of the following is NOT a feature of the Metaverse?",
    "options": ["Virtual meetings", "Blockchain integration", "Manual typewriters", "Avatars"],
    "correct": 2
  },
  {
    "question": "A digital wallet is an example of a:",
    "options": ["Physical safe", "Digital asset", "Hard drive", "Cryptocurrency"],
    "correct": 1
  },
  {
    "question": "Which one of these is NOT a valid use of blockchain in cyberspace?",
    "options": ["Securing transactions", "Creating decentralized networks", "Printing books", "Supporting NFTs"],
    "correct": 2
  },
  {
    "question": "Which term refers to false or misleading information shared in cyberspace?",
    "options": ["Netiquette", "Encryption", "Misinformation", "Data privacy"],
    "correct": 2
  },
  {
    "question": "Which of these helps identify fake or outdated information online?",
    "options": ["Following all trending hashtags", "Relying on gossip", "Using reliable sources", "Ignoring references"],
    "correct": 2
  },
  {
    "question": "What is an example of direct user interaction that produces data?",
    "options": ["GPS tracking", "Liking a social media post", "App background refresh", "Device sync logs"],
    "correct": 1
  },
  {
    "question": "Which is the best reason to rewrite information in your own words in essays?",
    "options": ["It’s faster", "Avoids plagiarism and helps understanding", "You don’t need references", "It's more colorful"],
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
