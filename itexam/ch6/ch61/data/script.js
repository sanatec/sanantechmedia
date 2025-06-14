const questions = [
 {
    "question": "What is robotics?",
    "options": [
      "Study of artificial intelligence",
      "Study of electrical circuits",
      "Study of robot design, construction, and control",
      "Study of programming only"
    ],
    "correct": 2
  },
  {
    "question": "Which component is known as the \"brain\" of the Arduino?",
    "options": [
      "USB Port",
      "ATmega328P microcontroller",
      "Servo motor",
      "IR sensor"
    ],
    "correct": 1
  },
  {
    "question": "Which Arduino pin is used for analog input?",
    "options": ["GND", "DIGITAL PIN 13", "Analog Input", "5V"],
    "correct": 2
  },
  {
    "question": "What does an IR sensor detect?",
    "options": [
      "Sound",
      "Light",
      "Obstacles using infrared rays",
      "Pressure"
    ],
    "correct": 2
  },
  {
    "question": "Which device is used to display output as light?",
    "options": ["Buzzer", "Servo motor", "LED", "Microphone"],
    "correct": 2
  },
  {
    "question": "Which pins on the Arduino are used for PWM control?",
    "options": ["Analog Pins", "Pins marked with ~", "GND pins", "USB Pins"],
    "correct": 1
  },
  {
    "question": "What is used to create temporary circuits without soldering?",
    "options": ["Breadboard", "LED", "Servo motor", "Jumper cable"],
    "correct": 0
  },
  {
    "question": "What is the purpose of a resistor in an LED circuit?",
    "options": [
      "Increase brightness",
      "Prevent excessive current",
      "Increase voltage",
      "Provide ground potential"
    ],
    "correct": 1
  },
  {
    "question": "Which tool is used to program Arduino with block coding?",
    "options": ["Scratch", "PictoBlox", "Blockly", "C++"],
    "correct": 1
  },
  {
    "question": "What is the constant voltage provided by the 5V pin of Arduino?",
    "options": ["3.3V", "0V", "5V", "12V"],
    "correct": 2
  },
  {
    "question": "What does the buzzer produce when a LOW signal is applied to its I/O pin?",
    "options": ["Vibration", "Sound", "Light", "Motion"],
    "correct": 1
  },
  {
    "question": "Which component is used to rotate to a particular angle in robotics?",
    "options": ["Buzzer", "IR Sensor", "Servo Motor", "Breadboard"],
    "correct": 2
  },
  {
    "question": "In the LED blinking circuit, which pin controls ON/OFF state?",
    "options": ["5V pin", "GND", "Digital Pin 13", "Analog Input"],
    "correct": 2
  },
  {
    "question": "Which programming mode in PictoBlox allows the Arduino to run without a computer?",
    "options": ["Live Mode", "Stage Mode", "Upload Mode", "Debug Mode"],
    "correct": 2
  },
  {
    "question": "Which sensor is used in automatic sanitizer dispensers?",
    "options": ["Light Sensor", "Microphone", "IR Sensor", "Camera"],
    "correct": 2
  },
  {
    "question": "How many degrees can a servo motor typically rotate?",
    "options": ["90°", "360°", "0° to 180°", "0° to 270°"],
    "correct": 2
  },
  {
    "question": "Which pin receives the signal to control the servo motor?",
    "options": ["5V", "OUT pin", "GND", "PWM pin (e.g., Pin 9)"],
    "correct": 3
  },
  {
    "question": "What does the OUT pin of the IR sensor become when an object is detected?",
    "options": ["HIGH", "Analog", "LOW", "Blinking"],
    "correct": 2
  },
  {
    "question": "Which device is used for visual detection in the smart door system?",
    "options": ["Arduino", "IR sensor", "PIR sensor", "Laptop camera"],
    "correct": 3
  },
  {
    "question": "Which PictoBlox extension is used to detect faces?",
    "options": [
      "Vision Recognition",
      "Camera Module",
      "Face Detection",
      "Motion Sensing"
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

