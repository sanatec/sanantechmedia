const questions = [
  {
    "question": "What were the 13 Colonies?",
    "options": ["The first states of the U.S.", "A group of British colonies on the East Coast of North America", "A confederation of Native American tribes", "Territories governed by Spain"],
    "correct": 1
  },
  {
    "question": "Which country originally controlled the 13 Colonies?",
    "options": ["France", "Spain", "Britain", "Portugal"],
    "correct": 2
  },
  {
    "question": "Which colony was founded by the Pilgrims in 1620?",
    "options": ["Virginia", "Plymouth", "Massachusetts Bay", "Rhode Island"],
    "correct": 1
  },
  {
    "question": "What was the primary crop of the Southern Colonies?",
    "options": ["Corn", "Tobacco", "Wheat", "Cotton"],
    "correct": 1
  },
  {
    "question": "Which colony was originally established as a haven for Catholics?",
    "options": ["Maryland", "Georgia", "Pennsylvania", "New York"],
    "correct": 0
  },
  {
    "question": "What was the first permanent English settlement in North America?",
    "options": ["Plymouth", "Jamestown", "New Amsterdam", "Boston"],
    "correct": 1
  },
  {
    "question": "Which colony was known for its Quaker population?",
    "options": ["Massachusetts", "Virginia", "Pennsylvania", "Georgia"],
    "correct": 2
  },
  {
    "question": "What was the main economy of the New England Colonies?",
    "options": ["Shipbuilding and fishing", "Agriculture", "Mining", "Fur trading"],
    "correct": 0
  },
  {
    "question": "What year did the 13 Colonies declare independence from Britain?",
    "options": ["1774", "1775", "1776", "1783"],
    "correct": 2
  },
  {
    "question": "Which colony was originally a Dutch settlement called New Amsterdam?",
    "options": ["New York", "New Jersey", "Delaware", "Connecticut"],
    "correct": 0
  },
  {
    "question": "What type of government did most of the colonies have?",
    "options": ["Monarchies", "Self-governments", "Theocracies", "Direct democracies"],
    "correct": 1
  },
  {
    "question": "Who founded the colony of Georgia?",
    "options": ["James Oglethorpe", "John Smith", "William Penn", "Roger Williams"],
    "correct": 0
  },
  {
    "question": "Which colony was founded as a place for debtors and prisoners?",
    "options": ["Maryland", "Virginia", "Georgia", "New Hampshire"],
    "correct": 2
  },
  {
    "question": "Which colonies made up the New England region?",
    "options": [
      "Massachusetts, Connecticut, Rhode Island, New Hampshire",
      "New York, New Jersey, Pennsylvania, Delaware",
      "Virginia, North Carolina, South Carolina, Georgia",
      "Maryland, Pennsylvania, Delaware, New York"
    ],
    "correct": 0
  },
  {
    "question": "What was the main religion in the New England Colonies?",
    "options": ["Puritanism", "Catholicism", "Anglicanism", "Quakerism"],
    "correct": 0
  },
  {
    "question": "Which colony was the last of the 13 Colonies to be established?",
    "options": ["Georgia", "New Jersey", "Virginia", "Massachusetts"],
    "correct": 0
  },
  {
    "question": "What was the Middle Colonies' economy based on?",
    "options": ["Plantation agriculture", "Manufacturing", "Diverse farming and trade", "Fishing"],
    "correct": 2
  },
  {
    "question": "Which colony was founded by Roger Williams for religious freedom?",
    "options": ["Rhode Island", "Massachusetts", "Connecticut", "New Hampshire"],
    "correct": 0
  },
  {
    "question": "What was the purpose of the Mayflower Compact?",
    "options": [
      "To establish self-government among the Pilgrims",
      "To declare independence from Britain",
      "To create a trade agreement with Native Americans",
      "To outline the rights of colonists"
    ],
    "correct": 0
  },
  {
    "question": "Which colony was originally part of Pennscomplete all 100 questions nowylvania?",
    "options": ["Maryland", "Delaware", "New Jersey", "Connecticut"],
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
