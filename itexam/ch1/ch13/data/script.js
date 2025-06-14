const questions = [
 {
    "question": "What is the function of the 'Tiled Clones' feature?",
    "options": ["Add animation", "Create repeating patterns from clones", "Change document size", "Format shapes"],
    "correct": 1
  },
  {
    "question": "What is the purpose of the 'Symbols' library in Inkscape?",
    "options": ["Add text effects", "Use pre-made vector graphics", "Apply gradients", "Resize objects"],
    "correct": 1
  },
  {
    "question": "How do you create a drop shadow effect in Inkscape?",
    "options": ["Use the 'Pencil Tool'", "Use the 'Gradient Tool'", "Use the 'Filters' menu and drop shadow filter", "Use the 'Text Tool'"],
    "correct": 2
  },
  {
    "question": "What is the function of the 'Live Path Effects' in Inkscape?",
    "options": ["Add animation", "Apply non-destructive effects to paths", "Change document size", "Format shapes"],
    "correct": 1
  },
  {
    "question": "What is the purpose of the 'Document Metadata' in Inkscape?",
    "options": ["Add text effects", "Store information about the file", "Apply gradients", "Resize objects"],
    "correct": 1
  },
  {
    "question": "How do you create a 3D bevel effect in Inkscape?",
    "options": ["Use the 'Pencil Tool'", "Use the 'Gradient Tool'", "Use the 'Filters' menu and bevel filter", "Use the 'Text Tool'"],
    "correct": 2
  },
  {
    "question": "What is the function of the 'Export Bitmap' option?",
    "options": ["Add animation", "Save the vector file as a raster image", "Change document size", "Format shapes"],
    "correct": 1
  },
  {
    "question": "What is the purpose of the 'Object Properties' panel?",
    "options": ["Add text effects", "View and edit object attributes", "Apply gradients", "Resize objects"],
    "correct": 1
  },
  {
    "question": "How do you create a spiral shape in Inkscape?",
    "options": ["Use the 'Pencil Tool'", "Use the 'Gradient Tool'", "Use the 'Spiral Tool'", "Use the 'Text Tool'"],
    "correct": 2
  },
  {
    "question": "What is the function of the 'Arrange' menu in Inkscape?",
    "options": ["Add animation", "Change the stacking order of objects", "Change document size", "Format shapes"],
    "correct": 1
  },
  {
    "question": "What is the purpose of the 'XML Editor' in Inkscape?",
    "options": ["Add text effects", "Edit the SVG code directly", "Apply gradients", "Resize objects"],
    "correct": 1
  },
  {
    "question": "How do you create a calligraphic stroke in Inkscape?",
    "options": ["Use the 'Pencil Tool'", "Use the 'Gradient Tool'", "Use the 'Calligraphy Tool'", "Use the 'Text Tool'"],
    "correct": 2
  },
  {
    "question": "What is the function of the 'Fill Rules' in Inkscape?",
    "options": ["Add animation", "Determine how overlapping paths are filled", "Change document size", "Format shapes"],
    "correct": 1
  },
  {
    "question": "What is the purpose of the 'Document Units' setting?",
    "options": ["Add text effects", "Change the measurement units for the document", "Apply gradients", "Resize objects"],
    "correct": 1
  },
  {
    "question": "How do you create a lens effect in Inkscape?",
    "options": ["Use the 'Pencil Tool'", "Use the 'Gradient Tool'", "Use the 'Filters' menu and lens filter", "Use the 'Text Tool'"],
    "correct": 2
  },
  {
    "question": "What is the function of the 'Path Effects Editor'?",
    "options": ["Add animation", "Edit and manage Live Path Effects", "Change document size", "Format shapes"],
    "correct": 1
  },
  {
    "question": "What is the purpose of the 'Rulers' in Inkscape?",
    "options": ["Add text effects", "Measure and align objects accurately", "Apply gradients", "Resize objects"],
    "correct": 1
  },
  {
    "question": "How do you create a mesh gradient in Inkscape?",
    "options": ["Use the 'Pencil Tool'", "Use the 'Gradient Tool'", "Use the 'Mesh Gradient Tool'", "Use the 'Text Tool'"],
    "correct": 2
  },
  {
    "question": "What is the function of the 'Display Modes' in Inkscape?",
    "options": ["Add animation", "Change how the document is displayed", "Change document size", "Format shapes"],
    "correct": 1
  },
  {
    "question": "What is the purpose of the 'Extensions Manager'?",
    "options": ["Add text effects", "Install and manage Inkscape extensions", "Apply gradients", "Resize objects"],
    "correct": 1
  },
  {
    "question": "How do you create a scatter effect in Inkscape?",
    "options": ["Use the 'Pencil Tool'", "Use the 'Gradient Tool'", "Use the 'Scatter Tool' from extensions", "Use the 'Text Tool'"],
    "correct": 2
  },
  {
    "question": "What is the function of the 'Document Resources' dialog?",
    "options": ["Add animation", "Manage embedded images and fonts", "Change document size", "Format shapes"],
    "correct": 1
  },
  {
    "question": "What is the purpose of the 'Object to Guide' command?",
    "options": ["Add text effects", "Convert an object into a guide line", "Apply gradients", "Resize objects"],
    "correct": 1
  },
  {
    "question": "How do you create a 3D extrude effect in Inkscape?",
    "options": ["Use the 'Pencil Tool'", "Use the 'Gradient Tool'", "Use the 'Extensions' menu and 3D extrusion", "Use the 'Text Tool'"],
    "correct": 2
  },
  {
    "question": "What is the function of the 'Path Offset' command?",
    "options": ["Add animation", "Create a parallel path at a specified distance", "Change document size", "Format shapes"],
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

