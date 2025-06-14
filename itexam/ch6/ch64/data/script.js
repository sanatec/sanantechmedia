const questions = [
{
    "question": "How does an IR sensor indicate the presence of an object?",
    "options": [
      "Its OUT pin becomes HIGH",
      "Its OUT pin becomes LOW",
      "It vibrates",
      "It lights up"
    ],
    "correct": 1
  },
  {
    "question": "Which of these is NOT a programming block in PictoBlox?",
    "options": ["Upload Firmware", "Set pin mode", "Show Text", "Start Sound Wave"],
    "correct": 3
  },
  {
    "question": "What does HIGH and LOW represent in binary logic?",
    "options": [
      "1 and 0 respectively",
      "0 and 1 respectively",
      "True and False respectively",
      "Both a and c"
    ],
    "correct": 3
  },
  {
    "question": "How is the LED blinking speed controlled in Arduino?",
    "options": [
      "By power pin",
      "By changing delay in code",
      "By using resistor",
      "By rotating the LED"
    ],
    "correct": 1
  },
  {
    "question": "What is the role of PWM in Arduino?",
    "options": [
      "Data storage",
      "Power boost",
      "Analog signal control through digital pins",
      "Memory access"
    ],
    "correct": 2
  },
  {
    "question": "Which command in PictoBlox helps you find the number of faces?",
    "options": [
      "Count sprites",
      "Detect face number",
      "Number of faces detected",
      "Capture facial data"
    ],
    "correct": 2
  },
  {
    "question": "What is the common purpose of Digital PIN 9 in Arduino?",
    "options": [
      "Connect USB",
      "Control power supply",
      "Control servo motor (PWM)",
      "Run the microcontroller"
    ],
    "correct": 2
  },
  {
    "question": "Which of the following provides ground potential?",
    "options": ["5V pin", "USB port", "GND pin", "RESET button"],
    "correct": 2
  },
  {
    "question": "Why is Arduino called open-source hardware?",
    "options": [
      "It is made by Microsoft",
      "Its code and schematics are publicly available",
      "It can be purchased freely",
      "It uses only open circuits"
    ],
    "correct": 1
  },
  {
    "question": "Which is NOT a feature of Arduino Uno R3?",
    "options": ["DIGITAL I/O Pins", "USB Port", "Built-in camera", "Microcontroller chip"],
    "correct": 2
  },
  {
    "question": "The blinking of an LED is an example of:",
    "options": ["Digital Output", "Digital Input", "Analog Input", "Serial Communication"],
    "correct": 0
  },
  {
    "question": "Which of these actions requires writing a program to the Arduino?",
    "options": [
      "Powering an LED",
      "Making a buzzer beep at intervals",
      "Plugging USB",
      "Mounting on breadboard"
    ],
    "correct": 1
  },
  {
    "question": "How is the servo motor angle changed through code?",
    "options": [
      "Set digital pin LOW",
      "Rotate motor fast",
      "Use set servo angle block",
      "Use voltage divider"
    ],
    "correct": 2
  },
  {
    "question": "In smart door systems, when no face is detected, what should the servo motor do?",
    "options": ["Rotate to 90°", "Vibrate", "Rotate to 0°", "Turn off"],
    "correct": 2
  },
  {
    "question": "Which of the following devices functions without a physical button using a sensor?",
    "options": ["Traditional tap", "Automatic door", "Hand pump", "Bicycle bell"],
    "correct": 1
  },
  {
    "question": "What happens when you increase the delay time in the LED blinking program?",
    "options": [
      "LED blinks faster",
      "LED stops blinking",
      "LED blinks slower",
      "LED glows continuously"
    ],
    "correct": 2
  },
  {
    "question": "Which programming block is used in PictoBlox to rotate a servo motor?",
    "options": [
      "Rotate pin",
      "Set motor angle to [x]",
      "Set servo motor to [x] degrees",
      "Start motor rotation"
    ],
    "correct": 2
  },
  {
    "question": "Which signal triggers the buzzer to produce sound?",
    "options": ["GND", "HIGH", "LOW", "OFF"],
    "correct": 2
  },
  {
    "question": "In face detection-based smart doors, how many faces must be detected to open the door?",
    "options": ["0", "1 or more", "2 only", "Unlimited"],
    "correct": 1
  },
  {
    "question": "What is the function of a USB cable in Arduino projects?",
    "options": [
      "Provides internet",
      "Powers the sensor",
      "Transfers programs and power",
      "Cools down components"
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

