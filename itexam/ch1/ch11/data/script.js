const questions = [
 {
    "question": "What is the main function of Inkscape?",
    "options": ["Photo editing", "3D modeling", "Vector graphic designing", "Video editing"],
    "correct": 2
  },
  {
    "question": "Which of the following is a vector image format?",
    "options": ["JPG", "PNG", "SVG", "BMP"],
    "correct": 2
  },
  {
    "question": "What is a major benefit of using vector images?",
    "options": ["Faster animations", "They don't require software", "Can be resized without losing quality", "Use more disk space"],
    "correct": 2
  },
  {
    "question": "What type of tool is GIMP?",
    "options": ["Vector graphic editor", "Raster image editor", "Word processor", "Audio editor"],
    "correct": 1
  },
  {
    "question": "Which software is used for creating scalable vector graphics?",
    "options": ["Paint", "GIMP", "Inkscape", "Krita"],
    "correct": 2
  },
  {
    "question": "What shortcut is used to open Document Properties in Inkscape?",
    "options": ["Ctrl + D", "Shift + Ctrl + D", "Alt + P", "Ctrl + Shift + N"],
    "correct": 1
  },
  {
    "question": "Which key must be held to proportionally resize objects in Inkscape?",
    "options": ["Alt", "Ctrl", "Shift", "Tab"],
    "correct": 1
  },
  {
    "question": "What does the Bezier Tool allow you to do?",
    "options": ["Add filters", "Type text", "Draw curves and lines", "Move objects"],
    "correct": 2
  },
  {
    "question": "What is the function of the 'Create Rectangles & Squares' tool in Inkscape?",
    "options": ["Rotate objects", "Draw squares", "Add text", "Remove background"],
    "correct": 1
  },
  {
    "question": "Which file formats does Inkscape support?",
    "options": ["DOCX, XLSX", "PNG, JPG", "SVG, AI, EPS, PDF, PS, PNG", "TXT, CSV"],
    "correct": 2
  },
  {
    "question": "What is the purpose of the Fill and Stroke tool in Inkscape?",
    "options": ["Add animation", "Adjust transparency", "Format shapes with color and border", "Resize images"],
    "correct": 2
  },
  {
    "question": "What does the X button at the left of the color palette do?",
    "options": ["Fills with red", "Fills with black", "Removes color", "Exports design"],
    "correct": 2
  },
  {
    "question": "How can you apply a gradient in Inkscape?",
    "options": ["Use blur tool", "Use opacity", "Use Gradient tool (G)", "Use stroke path"],
    "correct": 2
  },
  {
    "question": "What kind of messages do digital posters often aim to convey?",
    "options": ["News articles", "Entertainment", "Visual communication ideas", "Personal emails"],
    "correct": 2
  },
  {
    "question": "What key is used to bring an object to the top layer in Inkscape?",
    "options": ["Ctrl", "Pg Up", "Shift", "Esc"],
    "correct": 1
  },
  {
    "question": "What is the purpose of grouping elements in a design?",
    "options": ["Lock the design", "Export the file", "Move and scale multiple objects together", "Change colors"],
    "correct": 2
  },
  {
    "question": "What does Inkscape use to create 3D effects?",
    "options": ["Vector math", "Stroke fill", "Blur and gradients", "Noise filter"],
    "correct": 2
  },
  {
    "question": "What is the best resolution to export a digital poster for print?",
    "options": ["72 dpi", "96 dpi", "150 dpi", "300 dpi"],
    "correct": 3
  },
  {
    "question": "What tool is used to draw and edit freehand lines?",
    "options": ["Bezier Tool", "Pencil Tool", "Text Tool", "Rectangle Tool"],
    "correct": 1
  },
  {
    "question": "What software mentioned in the document is best for drawing simple shapes and editing them?",
    "options": ["WordPad", "GIMP", "Inkscape", "Excel"],
    "correct": 2
  },
  {
    "question": "What is the purpose of the 'Path' menu in Inkscape?",
    "options": ["Apply filters", "Edit node points of shapes", "Add text effects", "Change document size"],
    "correct": 1
  },
  {
    "question": "Which tool allows you to create stars and polygons in Inkscape?",
    "options": ["Pencil Tool", "Rectangle Tool", "Stars and Polygons Tool", "Bezier Tool"],
    "correct": 2
  },
  {
    "question": "What does 'SVG' stand for?",
    "options": ["Standard Vector Graphics", "Scalable Vector Graphics", "Simple Visual Graphics", "Structured Vector Geometry"],
    "correct": 1
  },
  {
    "question": "How do you create a duplicate of an object in Inkscape?",
    "options": ["Ctrl + X", "Ctrl + Z", "Ctrl + D", "Ctrl + S"],
    "correct": 2
  },
  {
    "question": "What is the function of the 'Text Tool' in Inkscape?",
    "options": ["Draw shapes", "Add and edit text", "Apply gradients", "Resize objects"],
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

