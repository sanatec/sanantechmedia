const questions = [
  {
    "question": "When did the American Civil War begin?",
    "options": ["1860", "1861", "1862", "1865"],
    "correct": 1
  },
  {
    "question": "What was the main cause of the American Civil War?",
    "options": ["Economic differences", "Slavery", "Territorial disputes", "Foreign invasion"],
    "correct": 1
  },
  {
    "question": "Who was the President of the United States during the Civil War?",
    "options": ["Andrew Johnson", "Abraham Lincoln", "Ulysses S. Grant", "Jefferson Davis"],
    "correct": 1
  },
  {
    "question": "What were the states that seceded from the Union called?",
    "options": ["The Confederacy", "The Union", "The Border States", "The Territories"],
    "correct": 0
  },
  {
    "question": "Who was the President of the Confederacy?",
    "options": ["Robert E. Lee", "Jefferson Davis", "Alexander Stephens", "Stonewall Jackson"],
    "correct": 1
  },
  {
    "question": "What was the first state to secede from the Union?",
    "options": ["Virginia", "Georgia", "South Carolina", "Mississippi"],
    "correct": 2
  },
  {
    "question": "What event is considered the start of the Civil War?",
    "options": ["The election of Abraham Lincoln", "The attack on Fort Sumter", "The Battle of Bull Run", "The Emancipation Proclamation"],
    "correct": 1
  },
  {
    "question": "Which side won the Civil War?",
    "options": ["The Union", "The Confederacy", "The Border States", "It was a draw"],
    "correct": 0
  },
  {
    "question": "What document declared the freedom of slaves in Confederate states?",
    "options": ["The Gettysburg Address", "The Emancipation Proclamation", "The 13th Amendment", "The Compromise of 1850"],
    "correct": 1
  },
  {
    "question": "Who was the commanding general of the Confederate Army?",
    "options": ["Ulysses S. Grant", "William T. Sherman", "Robert E. Lee", "George B. McClellan"],
    "correct": 2
  },
  {
    "question": "What was the bloodiest single-day battle of the Civil War?",
    "options": ["The Battle of Antietam", "The Battle of Gettysburg", "The Battle of Shiloh", "The Battle of Bull Run"],
    "correct": 0
  },
  {
    "question": "Which battle is considered the turning point of the Civil War?",
    "options": ["The Battle of Fredericksburg", "The Battle of Gettysburg", "The Battle of Vicksburg", "The Battle of Chattanooga"],
    "correct": 1
  },
  {
    "question": "Which Union general led the famous 'March to the Sea'?",
    "options": ["Ulysses S. Grant", "George B. McClellan", "William T. Sherman", "Philip Sheridan"],
    "correct": 2
  },
  {
    "question": "When was the Emancipation Proclamation issued?",
    "options": ["1861", "1862", "1863", "1864"],
    "correct": 2
  },
  {
    "question": "What was the primary strategy of the Union to defeat the Confederacy?",
    "options": ["Blitzkrieg", "Guerrilla warfare", "The Anaconda Plan", "Trench warfare"],
    "correct": 2
  },
  {
    "question": "What amendment officially abolished slavery in the United States?",
    "options": ["13th", "14th", "15th", "16th"],
    "correct": 0
  },
  {
    "question": "Which Confederate general was accidentally shot by his own men?",
    "options": ["J.E.B. Stuart", "Stonewall Jackson", "James Longstreet", "Nathan Bedford Forrest"],
    "correct": 1
  },
  {
    "question": "Which city served as the capital of the Confederacy after Montgomery, Alabama?",
    "options": ["Richmond, Virginia", "Charleston, South Carolina", "Atlanta, Georgia", "Jackson, Mississippi"],
    "correct": 0
  },
  {
    "question": "What year did the Civil War end?",
    "options": ["1863", "1864", "1865", "1866"],
    "correct": 2
  },
  {
    "question": "Where did General Robert E. Lee surrender to General Ulysses S. Grant?",
    "options": ["Richmond", "Appomattox Court House", "Gettysburg", "Vicksburg"],
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
