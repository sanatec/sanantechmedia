const questions = [
{
    "question": "What must be done before using Arduino in Stage Mode?",
    "options": [
      "Connect USB cable",
      "Upload Firmware",
      "Press RESET",
      "Close PictoBlox"
    ],
    "correct": 1
  },
  {
    "question": "What signal stops the buzzer sound?",
    "options": ["LOW", "HIGH", "0V", "VCC"],
    "correct": 1
  },
  {
    "question": "In Arduino, GND pin provides:",
    "options": ["Power", "5V", "Signal", "Ground potential (0V)"],
    "correct": 3
  },
  {
    "question": "Which of the following is an input device in a robot?",
    "options": ["Servo Motor", "IR Sensor", "LED", "Buzzer"],
    "correct": 1
  },
  {
    "question": "Which of these components is used to control a tap in the sanitizer dispenser?",
    "options": ["LED", "Servo Motor", "IR Sensor", "Buzzer"],
    "correct": 1
  },
  {
    "question": "Which programming mode in PictoBlox requires a constant connection to a computer?",
    "options": ["Upload Mode", "Debug Mode", "Stage Mode", "Compile Mode"],
    "correct": 2
  },
  {
    "question": "In Arduino, what is the function of DIGITAL I/O PINs?",
    "options": [
      "Power supply",
      "Memory storage",
      "Collect and send signals",
      "Camera connection"
    ],
    "correct": 2
  },
  {
    "question": "Which wire of the servo motor is used to receive control signals?",
    "options": ["Red wire", "Brown wire", "Orange wire", "Black wire"],
    "correct": 2
  },
  {
    "question": "What voltage does the 3.3V pin on Arduino provide?",
    "options": ["5V", "0V", "3.3V", "1.5V"],
    "correct": 2
  },
  {
    "question": "Which of these is a component of the Output Unit in a robot?",
    "options": ["Camera", "Microphone", "Buzzer", "IR Sensor"],
    "correct": 2
  },
  {
    "question": "Which Arduino model is shown and discussed in the textbook?",
    "options": ["Arduino Mega", "Arduino Uno R3", "Arduino Nano", "Arduino Due"],
    "correct": 1
  },
  {
    "question": "The anode of an LED is typically:",
    "options": [
      "Shorter than the cathode",
      "Equal in length to the cathode",
      "Longer than the cathode",
      "Located in the center"
    ],
    "correct": 2
  },
  {
    "question": "What type of signal is used to control a servo motor?",
    "options": ["Analog voltage", "PWM signal", "Audio signal", "Serial signal"],
    "correct": 1
  },
  {
    "question": "Which component helps in uploading programs from computer to Arduino?",
    "options": ["GND Pin", "USB Port", "5V Pin", "Resistor"],
    "correct": 1
  },
  {
    "question": "Which robotic kit component is used to detect light?",
    "options": ["IR Sensor", "Camera", "Light Sensor", "Ultrasonic Sensor"],
    "correct": 2
  },
  {
    "question": "What must be used with an LED to avoid damage?",
    "options": ["Servo motor", "IR sensor", "Resistor", "Breadboard"],
    "correct": 2
  },
  {
    "question": "What output does the OUT pin of an IR sensor give when no object is detected?",
    "options": ["LOW", "OFF", "HIGH", "None"],
    "correct": 2
  },
  {
    "question": "To connect external devices to Arduino, we use:",
    "options": ["HDMI ports", "DIGITAL I/O PINs", "WiFi", "Serial cable"],
    "correct": 1
  },
  {
    "question": "Which component stores program instructions in Arduino?",
    "options": ["RAM", "USB", "Microcontroller", "GND"],
    "correct": 2
  },
  {
    "question": "In PictoBlox, to turn ON DIGITAL PIN 13, we set it to:",
    "options": ["OFF", "LOW", "ON", "HIGH"],
    "correct": 3
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
