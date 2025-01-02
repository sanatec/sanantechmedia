const questions = [
  {
    "question": "What is the principle of the 'rule of law'?",
    "options": ["The government can do whatever it wants", "Everyone must follow the law", "Only leaders are bound by the law", "Laws are optional guidelines"],
    "correct": 1
  },
  {
    "question": "Who creates federal laws in the United States?",
    "options": ["The President", "Congress", "The Supreme Court", "State Governors"],
    "correct": 1
  },
  {
    "question": "What is the purpose of the Constitution in a country of law?",
    "options": ["To grant rights to the government", "To establish the structure and principles of the government", "To declare independence", "To protect only government officials"],
    "correct": 1
  },
  {
    "question": "What is one responsibility of the judicial branch?",
    "options": ["To make laws", "To interpret and apply laws", "To enforce laws", "To veto laws"],
    "correct": 1
  },
  {
    "question": "What does the term 'due process of law' mean?",
    "options": ["Guaranteed fairness in legal proceedings", "The right to create personal laws", "Immediate punishment for crimes", "Only lawyers can represent themselves"],
    "correct": 0
  },
  {
    "question": "What is a law called that is created by the legislature?",
    "options": ["A statute", "A verdict", "An ordinance", "A proclamation"],
    "correct": 0
  },
  {
    "question": "What type of law deals with disputes between individuals?",
    "options": ["Criminal law", "Constitutional law", "Civil law", "Military law"],
    "correct": 2
  },
  {
    "question": "What type of law deals with crimes and punishments?",
    "options": ["Civil law", "Criminal law", "Tax law", "Constitutional law"],
    "correct": 1
  },
  {
    "question": "What is the role of the Supreme Court in a country of law?",
    "options": ["To create laws", "To interpret the Constitution", "To enforce laws", "To elect officials"],
    "correct": 1
  },
  {
    "question": "What is a precedent in legal terms?",
    "options": ["A new law passed by Congress", "An earlier court decision used as a guide in similar cases", "An executive order", "A referendum"],
    "correct": 1
  },
  {
    "question": "Who is responsible for enforcing federal laws?",
    "options": ["The Supreme Court", "The President", "Congress", "State Governors"],
    "correct": 1
  },
  {
    "question": "What document guarantees the rights and freedoms of individuals in the U.S.?",
    "options": ["The Declaration of Independence", "The Bill of Rights", "The Articles of Confederation", "The Federalist Papers"],
    "correct": 1
  },
  {
    "question": "What is the term for laws that apply to everyone equally?",
    "options": ["Equal laws", "Universal laws", "Impartial laws", "Rule of law"],
    "correct": 3
  },
  {
    "question": "What branch of government interprets laws?",
    "options": ["Executive", "Legislative", "Judicial", "Administrative"],
    "correct": 2
  },
  {
    "question": "What is the term for the system of courts that interpret and apply the law?",
    "options": ["Legislature", "Judiciary", "Executive branch", "Civil service"],
    "correct": 1
  },
  {
    "question": "What is the purpose of checks and balances in a legal system?",
    "options": ["To allow one branch to dominate", "To prevent any one branch from becoming too powerful", "To eliminate laws", "To increase bureaucracy"],
    "correct": 1
  },
  {
    "question": "What is a law that is passed by a local government called?",
    "options": ["A statute", "An ordinance", "A resolution", "A regulation"],
    "correct": 1
  },
  {
    "question": "What does 'habeas corpus' protect against?",
    "options": ["Unlawful imprisonment", "Excessive fines", "Unfair taxation", "Mandatory voting"],
    "correct": 0
  },
  {
    "question": "What is a constitution in the context of a legal system?",
    "options": ["A set of statutes", "The supreme law of the land", "A declaration of independence", "A judicial opinion"],
    "correct": 1
  },
  {
    "question": "What type of law is based on court decisions rather than statutes?",
    "options": ["Statutory law", "Constitutional law", "Common law", "Administrative law"],
    "correct": 2
  },
  {
    "question": "Who has the authority to sign bills into law at the federal level in the U.S.?",
    "options": ["The Supreme Court", "The Senate", "The President", "The Attorney General"],
    "correct": 2
  },
  {
    "question": "What term refers to the principle that no one is above the law?",
    "options": ["Equality under law", "Rule of law", "Legal fairness", "Due process"],
    "correct": 1
  },
  {
    "question": "What is the main role of the executive branch in a country of law?",
    "options": ["To interpret laws", "To enforce laws", "To create laws", "To amend laws"],
    "correct": 1
  },
  {
    "question": "What is the purpose of legal rights?",
    "options": ["To ensure fairness and justice", "To give power to the government", "To restrict individual freedoms", "To enforce majority rule"],
    "correct": 0
  },
  {
    "question": "What is the highest form of law in the United States?",
    "options": ["Federal laws", "The Constitution", "State laws", "Executive orders"],
    "correct": 1
  }
];

let currentQuestion = 0;
let correctAnswers = 0;

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
}

function checkAnswer(selectedIndex, selectedButton) {
  const correctIndex = questions[currentQuestion].correct;
  const buttons = document.querySelectorAll(".options button");

  if (selectedIndex === correctIndex) {
    correctAnswers++;
    document.getElementById("score").textContent = correctAnswers;
    correctSound.play(); // Play correct sound
  } else {
    selectedButton.classList.add("wrong");
    incorrectSound.play(); // Play incorrect sound
  }
  buttons[correctIndex].classList.add("correct");

  // Disable all buttons after the answer is selected
  buttons.forEach((button) => (button.disabled = true));

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
  const correctBar = document.getElementById("correct-bar");
  const incorrectBar = document.getElementById("incorrect-bar");
  const correctCount = document.getElementById("correct-count");
  const incorrectCount = document.getElementById("incorrect-count");
  const resultsMessage = document.getElementById("results-message");

  const totalQuestions = questions.length;
  const incorrectAnswers = totalQuestions - correctAnswers;

  // Update modal content
  correctCount.textContent = correctAnswers;
  incorrectCount.textContent = incorrectAnswers;

  // Update progress bars
  correctBar.style.width = `${(correctAnswers / totalQuestions) * 100}%`;
  incorrectBar.style.width = `${(incorrectAnswers / totalQuestions) * 100}%`;

  // Show congratulatory or try-again message
  if (correctAnswers === totalQuestions) {
    resultsMessage.textContent = "Congratulations! You answered all questions correctly!";
  } else {
    resultsMessage.textContent = "Try Again!";
  }

  // Show the modal
  modal.style.display = "flex";
}

function restartQuiz() {
  currentQuestion = 0;
  correctAnswers = 0;
  document.getElementById("score").textContent = correctAnswers;
  document.getElementById("results-modal").style.display = "none";
  loadQuestion();
}

// Load the first question
window.onload = loadQuestion;
