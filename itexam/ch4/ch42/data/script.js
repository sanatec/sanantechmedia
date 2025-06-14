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

