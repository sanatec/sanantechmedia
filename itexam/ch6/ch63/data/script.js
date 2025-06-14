const questions = [
 {
    "question": "Which of the following is NOT typically a part of an Arduino board?",
    "options": ["GND pin", "External Power Supply", "Servo Shaft", "Digital I/O Pins"],
    "correct": 2
  },
  {
    "question": "A circuit that makes a buzzer beep at intervals is similar to which system?",
    "options": [
      "Smart door",
      "LED blinking system",
      "Sanitizer dispenser",
      "Motion detector"
    ],
    "correct": 1
  },
  {
    "question": "Which signal needs to be sent to the buzzer’s I/O pin to stop the beep?",
    "options": ["OFF", "LOW", "HIGH", "GND"],
    "correct": 2
  },
  {
    "question": "Which robotic component can collect images?",
    "options": ["IR sensor", "Microphone", "Camera", "Buzzer"],
    "correct": 2
  },
  {
    "question": "What is required to connect Arduino to PictoBlox in Stage Mode?",
    "options": [
      "Upload the firmware",
      "Use WiFi",
      "Press the reset button",
      "Connect camera"
    ],
    "correct": 0
  },
  {
    "question": "Face Detection in PictoBlox uses which hardware?",
    "options": ["Servo motor", "Buzzer", "Computer/laptop camera", "PIR sensor"],
    "correct": 2
  },
  {
    "question": "Which robotic application uses computer vision?",
    "options": ["LED blinking", "Automatic tap", "Smart door", "Buzzer control"],
    "correct": 2
  },
  {
    "question": "When setting up the smart door, what degree opens the door?",
    "options": ["45°", "180°", "0°", "90°"],
    "correct": 3
  },
  {
    "question": "The automatic sanitizer system uses which two components?",
    "options": [
      "Servo motor and buzzer",
      "IR sensor and buzzer",
      "Servo motor and IR sensor",
      "Camera and buzzer"
    ],
    "correct": 2
  },
  {
    "question": "Which sensor emits and detects infrared waves?",
    "options": ["Camera", "Light sensor", "IR sensor", "Ultrasonic sensor"],
    "correct": 2
  },
  {
    "question": "What is the function of a microcontroller in Arduino?",
    "options": [
      "Display output",
      "Store camera data",
      "Collect and process information",
      "Provide internet access"
    ],
    "correct": 2
  },
  {
    "question": "Which of the following devices is used for sensing sound?",
    "options": ["IR Sensor", "Light Sensor", "Microphone", "LED"],
    "correct": 2
  },
  {
    "question": "Which component allows you to build circuits without soldering?",
    "options": ["Jumper Wires", "Breadboard", "PCB Board", "Arduino Shield"],
    "correct": 1
  },
  {
    "question": "Which sensor is used in smart doors to detect heat radiation?",
    "options": ["PIR sensor", "IR sensor", "Ultrasonic sensor", "Camera"],
    "correct": 0
  },
  {
    "question": "Which type of devices are LED, Buzzer, and Servo Motor?",
    "options": ["Input Devices", "Storage Devices", "Output Devices", "Wireless Devices"],
    "correct": 2
  },
  {
    "question": "Which pin on Arduino is usually used to connect a buzzer for digital control?",
    "options": ["5V", "DIGITAL PIN 8", "Analog Pin A0", "RESET"],
    "correct": 1
  },
  {
    "question": "Which of these is NOT a sensor mentioned in the chapter?",
    "options": ["IR Sensor", "PIR Sensor", "Pressure Sensor", "Ultrasonic Sensor"],
    "correct": 2
  },
  {
    "question": "What is the use of a jumper wire?",
    "options": [
      "To power Arduino",
      "To upload firmware",
      "To connect components on a breadboard",
      "To solder circuits"
    ],
    "correct": 2
  },
  {
    "question": "What will happen if the LED’s anode is connected to GND and cathode to 5V?",
    "options": ["LED will glow", "LED will blink", "LED will burn", "LED will not work"],
    "correct": 3
  },
  {
    "question": "Which PictoBlox block sets a digital pin to LOW?",
    "options": [
      "Set digital pin [x] HIGH",
      "Set analog pin [x] ON",
      "Set digital pin [x] LOW",
      "Digital write OFF"
    ],
    "correct": 2
  }
  
];

let currentQuestion = 0;
let correctAnswers = 0;
let userAnswers = [];
let currentReviewIndex = 0;

const correctSound = document.getElementById("correct-sound");
const incorrectSound = document.getElementById("incorrect-sound");

function loadQuestion() {
  const questionElement = document.getElementById("question");
  const optionsContainer = document.getElementById("options");

  questionElement.textContent = questions[currentQuestion].question;
  optionsContainer.innerHTML = "";

  questions[currentQuestion].options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.onclick = () => checkAnswer(index, button);
    optionsContainer.appendChild(button);
  });

  // Update progress bar
  const progress = document.getElementById("progress");
  const progressPercent = ((currentQuestion) / questions.length) * 100;
  progress.style.width = `${progressPercent}%`;
}

function checkAnswer(selectedIndex, selectedButton) {
  const correctIndex = questions[currentQuestion].correct;
  const buttons = document.querySelectorAll(".options button");

  userAnswers[currentQuestion] = selectedIndex;

  if (selectedIndex === correctIndex) {
    correctAnswers++;
    document.getElementById("score").textContent = correctAnswers;
    correctSound.play();
  } else {
    selectedButton.classList.add("wrong");
    incorrectSound.play();
  }

  buttons[correctIndex].classList.add("correct");
  buttons.forEach((btn) => (btn.disabled = true));

  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      showResults();
    }
  }, 1000);
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
  document.getElementById("score").textContent = correctAnswers;
  document.getElementById("results-modal").style.display = "none";
  loadQuestion();
}

window.onload = loadQuestion;

