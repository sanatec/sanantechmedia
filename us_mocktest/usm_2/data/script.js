const questions = [
  {
    "question": "What are the two parts of the U.S. Congress?",
    "options": ["The Senate and the Cabinet", "The Senate and the House of Representatives", "The House of Representatives and the Supreme Court", "The Cabinet and the Supreme Court"],
    "correct": 1
  },
  {
    "question": "How many U.S. Senators are there?",
    "options": ["50", "100", "150", "435"],
    "correct": 1
  },
  {
    "question": "How long is a U.S. Senator’s term?",
    "options": ["2 years", "4 years", "6 years", "8 years"],
    "correct": 2
  },
  {
    "question": "How many voting members are in the House of Representatives?",
    "options": ["100", "435", "538", "270"],
    "correct": 1
  },
  {
    "question": "How long is a U.S. Representative’s term?",
    "options": ["2 years", "4 years", "6 years", "8 years"],
    "correct": 0
  },
  {
    "question": "Who is in charge of the Senate?",
    "options": ["The Speaker of the House", "The Vice President", "The President Pro Tempore", "The Chief Justice"],
    "correct": 1
  },
  {
    "question": "Who can vote to break a tie in the Senate?",
    "options": ["The Senate Majority Leader", "The Speaker of the House", "The Vice President", "The Chief Justice"],
    "correct": 2
  },
  {
    "question": "How is the number of Representatives for each state determined?",
    "options": ["By state population", "By land area", "By the number of registered voters", "By the state's age"],
    "correct": 0
  },
  {
    "question": "Who is the current Speaker of the House?",
    "options": ["Nancy Pelosi", "Kevin McCarthy", "Paul Ryan", "John Boehner"],
    "correct": 1
  },
  {
    "question": "What is the primary duty of Congress?",
    "options": ["Enforce laws", "Make laws", "Interpret laws", "Oversee the judiciary"],
    "correct": 1
  },
  {
    "question": "Which branch of government does Congress belong to?",
    "options": ["Executive", "Judicial", "Legislative", "Federal"],
    "correct": 2
  },
  {
    "question": "Who can declare war?",
    "options": ["The President", "The Supreme Court", "Congress", "The Secretary of Defense"],
    "correct": 2
  },
  {
    "question": "How often are elections held for the House of Representatives?",
    "options": ["Every 2 years", "Every 4 years", "Every 6 years", "Every 8 years"],
    "correct": 0
  },
  {
    "question": "How many Senators does each state have?",
    "options": ["1", "2", "3", "It varies"],
    "correct": 1
  },
  {
    "question": "What is the minimum age to be elected to the House of Representatives?",
    "options": ["18 years", "21 years", "25 years", "30 years"],
    "correct": 2
  },
  {
    "question": "What is the minimum age to be elected to the Senate?",
    "options": ["25 years", "30 years", "35 years", "40 years"],
    "correct": 1
  },
  {
    "question": "Who presides over the House of Representatives?",
    "options": ["The Vice President", "The Speaker of the House", "The Majority Leader", "The Chief Justice"],
    "correct": 1
  },
  {
    "question": "Who represents the legislative branch in checks and balances?",
    "options": ["The Supreme Court", "The Congress", "The President", "The Cabinet"],
    "correct": 1
  },
  {
    "question": "What is a bill?",
    "options": ["A proposed law", "A constitutional amendment", "A presidential directive", "A Supreme Court ruling"],
    "correct": 0
  },
  {
    "question": "Who can introduce a bill in Congress?",
    "options": ["Only the President", "Only Senators", "Only Representatives", "Any member of Congress"],
    "correct": 3
  },
  {
    "question": "Where do revenue bills originate?",
    "options": ["The Senate", "The House of Representatives", "The White House", "The Supreme Court"],
    "correct": 1
  },
  {
    "question": "Who confirms the President’s Cabinet appointments?",
    "options": ["The Senate", "The House of Representatives", "The Supreme Court", "The Vice President"],
    "correct": 0
  },
  {
    "question": "What fraction of the Senate must agree to ratify a treaty?",
    "options": ["One-third", "One-half", "Two-thirds", "Three-fourths"],
    "correct": 2
  },
  {
    "question": "Who leads the Senate in the absence of the Vice President?",
    "options": ["The Speaker of the House", "The Senate Majority Leader", "The President Pro Tempore", "The Chief Justice"],
    "correct": 2
  },
  {
    "question": "What is a filibuster?",
    "options": ["A veto override", "An extended debate to block legislation", "A bill revision", "A voting procedure"],
    "correct": 1
  },
  {
    "question": "What is the required vote to override a presidential veto?",
    "options": ["Simple majority", "Three-fifths", "Two-thirds", "Unanimous"],
    "correct": 2
  },
  {
    "question": "How many total Congress members are there?",
    "options": ["435", "535", "100", "538"],
    "correct": 1
  },
  {
    "question": "What is the role of Congressional committees?",
    "options": ["To pass laws", "To draft and review legislation", "To enforce laws", "To interpret laws"],
    "correct": 1
  },
  {
    "question": "What is the name of the annual address the President delivers to Congress?",
    "options": ["The State of the Union", "The Inaugural Address", "The Budget Speech", "The Cabinet Meeting"],
    "correct": 0
  },
  {
    "question": "Who elects Senators?",
    "options": ["State legislatures", "The President", "The Supreme Court", "The citizens of the state"],
    "correct": 3
  },
  {
    "question": "Who has the power to impeach the President?",
    "options": ["The Senate", "The House of Representatives", "The Supreme Court", "The Vice President"],
    "correct": 1
  },
  {
    "question": "Which chamber holds the impeachment trial?",
    "options": ["The Senate", "The House of Representatives", "The Supreme Court", "The Vice President"],
    "correct": 0
  },
  {
    "question": "How often does Congress convene?",
    "options": ["Every year", "Every two years", "Every four years", "Continuously"],
    "correct": 1
  },
  {
    "question": "Who is the Majority Leader in the Senate?",
    "options": ["A senator elected by the majority party", "The Vice President", "The President Pro Tempore", "The Chief Justice"],
    "correct": 0
  },
  {
    "question": "Which amendment allowed for the direct election of Senators?",
    "options": ["15th", "17th", "19th", "22nd"],
    "correct": 1
  },
  {
    "question": "What is the Capitol Building?",
    "options": ["The President's residence", "The Supreme Court building", "The meeting place of Congress", "The Vice President's residence"],
    "correct": 2
  },
  {
    "question": "What is the salary of a U.S. Senator?",
    "options": ["$150,000", "$174,000", "$200,000", "$250,000"],
    "correct": 1
  },
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
