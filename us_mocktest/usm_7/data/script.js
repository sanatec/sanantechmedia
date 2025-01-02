const questions = [
  {
    "question": "What year did World War I begin?",
    "options": ["1912", "1914", "1916", "1918"],
    "correct": 1
  },
  {
    "question": "Who was President of the United States during World War I?",
    "options": ["Theodore Roosevelt", "Woodrow Wilson", "Calvin Coolidge", "Franklin D. Roosevelt"],
    "correct": 1
  },
  {
    "question": "What was the primary goal of the League of Nations?",
    "options": ["To regulate trade", "To promote international peace", "To colonize territories", "To establish economic treaties"],
    "correct": 1
  },
  {
    "question": "When did women gain the right to vote in the United States?",
    "options": ["1900", "1919", "1920", "1925"],
    "correct": 2
  },
  {
    "question": "What was the Great Depression?",
    "options": ["A worldwide economic downturn", "A period of war", "An epidemic", "A political movement"],
    "correct": 0
  },
  {
    "question": "What event is commonly considered the start of World War II?",
    "options": ["The attack on Pearl Harbor", "Germany's invasion of Poland", "The signing of the Treaty of Versailles", "Japan's invasion of China"],
    "correct": 1
  },
  {
    "question": "Who was President during the Great Depression and most of World War II?",
    "options": ["Herbert Hoover", "Franklin D. Roosevelt", "Harry S. Truman", "Dwight D. Eisenhower"],
    "correct": 1
  },
  {
    "question": "What was the significance of D-Day during World War II?",
    "options": [
      "It marked the beginning of the Pacific War",
      "It was the Allied invasion of Nazi-occupied Europe",
      "It was the day Germany surrendered",
      "It was the day the atomic bomb was dropped"
    ],
    "correct": 1
  },
  {
    "question": "When was the United Nations founded?",
    "options": ["1943", "1945", "1947", "1950"],
    "correct": 1
  },
  {
    "question": "What was the purpose of the Marshall Plan?",
    "options": [
      "To rebuild Europe after World War II",
      "To contain the spread of communism",
      "To establish NATO",
      "To create economic sanctions"
    ],
    "correct": 0
  },
  {
    "question": "What was the Cold War?",
    "options": [
      "A war fought in cold climates",
      "A political and military rivalry between the U.S. and Soviet Union",
      "A trade war between Europe and Asia",
      "A global financial crisis"
    ],
    "correct": 1
  },
  {
    "question": "What was the civil rights movement?",
    "options": [
      "A fight for independence",
      "A movement to end racial discrimination",
      "A struggle to expand the U.S. borders",
      "A campaign to abolish slavery"
    ],
    "correct": 1
  },
  {
    "question": "Who delivered the famous 'I Have a Dream' speech?",
    "options": ["John F. Kennedy", "Martin Luther King Jr.", "Malcolm X", "Rosa Parks"],
    "correct": 1
  },
  {
    "question": "When did the United States land a man on the moon?",
    "options": ["1965", "1969", "1972", "1975"],
    "correct": 1
  },
  {
    "question": "What was the Watergate scandal?",
    "options": [
      "A scandal involving the Vietnam War",
      "A political scandal leading to President Nixon's resignation",
      "A financial scandal during Reagan's presidency",
      "An election scandal in 1980"
    ],
    "correct": 1
  },
  {
    "question": "What was the main goal of the Vietnam War?",
    "options": [
      "To unite Vietnam under U.S. control",
      "To prevent the spread of communism",
      "To gain access to natural resources",
      "To establish a trade route to Asia"
    ],
    "correct": 1
  },
  {
    "question": "What year did the Cold War end?",
    "options": ["1985", "1989", "1991", "1995"],
    "correct": 2
  },
  {
    "question": "What was the September 11, 2001, attack?",
    "options": [
      "A terrorist attack on the U.S.",
      "A military invasion of Iraq",
      "The fall of the Berlin Wall",
      "The end of the Cold War"
    ],
    "correct": 0
  },
  {
    "question": "What is the significance of the Affordable Care Act (2010)?",
    "options": [
      "It ended the Iraq War",
      "It reformed the U.S. healthcare system",
      "It introduced new immigration policies",
      "It abolished the Electoral College"
    ],
    "correct": 1
  },
  {
    "question": "Who was the first African American President of the United States?",
    "options": ["Barack Obama", "Martin Luther King Jr.", "Colin Powell", "Jesse Jackson"],
    "correct": 0
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
