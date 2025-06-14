const questions = [
 {
    "question": "What is cyberspace?",
    "options": ["A video game", "A physical space", "An imaginary digital realm", "A space rocket"],
    "correct": 2
  },
  {
    "question": "Which of the following is NOT a gateway to cyberspace?",
    "options": ["Mobile phone", "Smartwatch", "Chalkboard", "Printer"],
    "correct": 2
  },
  {
    "question": "The Internet of Things (IoT) is:",
    "options": ["A type of computer", "A virtual world", "A network of physical objects connected to the Internet", "A new game"],
    "correct": 2
  },
  {
    "question": "What does an E-POS device do?",
    "options": ["Tracks weather", "Connects satellites", "Records goods sold", "Transfers money to friends"],
    "correct": 2
  },
  {
    "question": "Which of the following is part of Cyber Infrastructure?",
    "options": ["Books", "Internet, databases, protocols", "Paper", "Pen drives only"],
    "correct": 1
  },
  {
    "question": "What is the Metaverse?",
    "options": ["A social network", "A virtual world integrating AR, VR, AI, and blockchain", "A search engine", "An online shopping site"],
    "correct": 1
  },
  {
    "question": "Avatars in the Metaverse represent:",
    "options": ["Pets", "Other players", "The user", "Robots"],
    "correct": 2
  },
  {
    "question": "Hacking refers to:",
    "options": ["Making websites", "Unauthorized access to computer systems", "Buying new hardware", "Downloading apps"],
    "correct": 1
  },
  {
    "question": "Ethical hacking is done:",
    "options": ["Without permission", "To damage systems", "To improve system security with permission", "For fun only"],
    "correct": 2
  },
  {
    "question": "What is a spoiler?",
    "options": ["A type of software", "Revealing key story details beforehand", "A virus", "An internet bug"],
    "correct": 1
  },
  {
    "question": "What is an NFT?",
    "options": ["Non-Fiction Tool", "Non-Fungible Token", "Network File Tracker", "None of these"],
    "correct": 1
  },
  {
    "question": "Which of the following is NOT a digital asset?",
    "options": ["Software", "School computer lab", "Digital image", "Reward points from a bank"],
    "correct": 1
  },
  {
    "question": "What does cryptocurrency rely on?",
    "options": ["Handwritten codes", "Central banks", "Blockchain technology", "Post offices"],
    "correct": 2
  },
  {
    "question": "Which is an example of a cryptocurrency?",
    "options": ["Litecoin", "Facebook", "PDF", "Keyboard"],
    "correct": 0
  },
  {
    "question": "What is Big Data?",
    "options": ["Heavy books", "Huge files", "Large and complex datasets", "A virus"],
    "correct": 2
  },
  {
    "question": "Implicit data collection means:",
    "options": ["Filling out a form", "Signing up for a newsletter", "Collecting data without direct input", "Writing an essay"],
    "correct": 2
  },
  {
    "question": "Which of these is a reliable source of scientific information?",
    "options": ["Random blog", "WhatsApp message", "Scientific journal", "Facebook post"],
    "correct": 2
  },
  {
    "question": "Sharing someone else's work without credit is:",
    "options": ["Good research", "Plagiarism", "Bibliography", "Grammar error"],
    "correct": 1
  },
  {
    "question": "What does the term \"Netiquette\" refer to?",
    "options": ["Internet speed", "Online rules for respectful behavior", "A new website", "Password manager"],
    "correct": 1
  },
  {
    "question": "Which condition involves anxiety from being away from mobile devices?",
    "options": ["Cyberchondria", "Nomophobia", "Tech Neck", "Data fatigue"],
    "correct": 1
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

