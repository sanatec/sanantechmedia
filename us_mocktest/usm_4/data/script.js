const questions = [
  {
    "question": "Who is the current President of the United States?",
    "options": ["Joe Biden", "Donald Trump", "Barack Obama", "George W. Bush"],
    "correct": 0
  },
  {
    "question": "Who was the first President of the United States?",
    "options": ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"],
    "correct": 1
  },
  {
    "question": "What is the term length for a U.S. President?",
    "options": ["2 years", "4 years", "6 years", "8 years"],
    "correct": 1
  },
  {
    "question": "How many terms can a President serve?",
    "options": ["1", "2", "3", "Unlimited"],
    "correct": 1
  },
  {
    "question": "Who was the President during the Civil War?",
    "options": ["Ulysses S. Grant", "Andrew Johnson", "Abraham Lincoln", "James Buchanan"],
    "correct": 2
  },
  {
    "question": "Who becomes President if the President can no longer serve?",
    "options": ["The Secretary of State", "The Vice President", "The Speaker of the House", "The Chief Justice"],
    "correct": 1
  },
  {
    "question": "Who was the President during the Great Depression and World War II?",
    "options": ["Woodrow Wilson", "Franklin D. Roosevelt", "Harry S. Truman", "Dwight D. Eisenhower"],
    "correct": 1
  },
  {
    "question": "Who is the Commander-in-Chief of the military?",
    "options": ["The Secretary of Defense", "The Vice President", "The President", "The Speaker of the House"],
    "correct": 2
  },
  {
    "question": "Who signs bills into law?",
    "options": ["The Vice President", "The Speaker of the House", "The President", "The Chief Justice"],
    "correct": 2
  },
  {
    "question": "Who was the youngest elected President?",
    "options": ["Theodore Roosevelt", "John F. Kennedy", "Bill Clinton", "Barack Obama"],
    "correct": 1
  },
  {
    "question": "Which President resigned from office?",
    "options": ["Richard Nixon", "Lyndon B. Johnson", "Gerald Ford", "Jimmy Carter"],
    "correct": 0
  },
  {
    "question": "Who was the first President to live in the White House?",
    "options": ["John Adams", "George Washington", "Thomas Jefferson", "James Madison"],
    "correct": 0
  },
  {
    "question": "What is the official residence of the U.S. President?",
    "options": ["Camp David", "The Pentagon", "The White House", "The Capitol"],
    "correct": 2
  },
  {
    "question": "Which President signed the Emancipation Proclamation?",
    "options": ["Thomas Jefferson", "Abraham Lincoln", "Ulysses S. Grant", "Andrew Johnson"],
    "correct": 1
  },
  {
    "question": "What is the minimum age to become President of the United States?",
    "options": ["30 years", "35 years", "40 years", "45 years"],
    "correct": 1
  },
  {
    "question": "Who was the first President to be impeached?",
    "options": ["Andrew Johnson", "Bill Clinton", "Richard Nixon", "Donald Trump"],
    "correct": 0
  },
  {
    "question": "Who was the only U.S. President to serve more than two terms?",
    "options": ["Theodore Roosevelt", "Franklin D. Roosevelt", "Woodrow Wilson", "Harry S. Truman"],
    "correct": 1
  },
  {
    "question": "What is the line of succession after the Vice President?",
    "options": ["Secretary of State", "Speaker of the House", "Chief Justice", "Attorney General"],
    "correct": 1
  },
  {
    "question": "Who was the President during World War I?",
    "options": ["Theodore Roosevelt", "Woodrow Wilson", "Warren G. Harding", "Calvin Coolidge"],
    "correct": 1
  },
  {
    "question": "Which President is on the $20 bill?",
    "options": ["George Washington", "Abraham Lincoln", "Andrew Jackson", "Thomas Jefferson"],
    "correct": 2
  },
  {
    "question": "Which amendment limits the President to two terms?",
    "options": ["18th", "20th", "22nd", "25th"],
    "correct": 2
  },
  {
    "question": "Who was the first President to be assassinated?",
    "options": ["Abraham Lincoln", "James Garfield", "William McKinley", "John F. Kennedy"],
    "correct": 0
  },
  {
    "question": "Who was the President during the Louisiana Purchase?",
    "options": ["Thomas Jefferson", "James Madison", "Andrew Jackson", "James Monroe"],
    "correct": 0
  },
  {
    "question": "Who was the first President to face impeachment twice?",
    "options": ["Bill Clinton", "Richard Nixon", "Andrew Johnson", "Donald Trump"],
    "correct": 3
  },
  {
    "question": "What is the President’s primary role in the legislative process?",
    "options": ["Propose laws", "Veto or sign bills", "Lead the Senate", "Appoint judges"],
    "correct": 1
  },
  {
    "question": "Who was the President during the Cuban Missile Crisis?",
    "options": ["Dwight D. Eisenhower", "John F. Kennedy", "Lyndon B. Johnson", "Richard Nixon"],
    "correct": 1
  },
  {
    "question": "What year was the current presidential line of succession established?",
    "options": ["1947", "1937", "1927", "1957"],
    "correct": 0
  },
  {
    "question": "Which President created the New Deal programs?",
    "options": ["Herbert Hoover", "Franklin D. Roosevelt", "Harry S. Truman", "Lyndon B. Johnson"],
    "correct": 1
  },
  {
    "question": "Who was the only U.S. President never elected to the presidency or vice presidency?",
    "options": ["Richard Nixon", "Gerald Ford", "Jimmy Carter", "Lyndon B. Johnson"],
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
