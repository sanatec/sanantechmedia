const questions = [
{
    "question": "What is the primary goal of page design in a newspaper?",
    "options": ["To print in color", "To reduce printing cost", "To enhance effective communication", "To add advertisements"],
    "correct": 2
  },
  {
    "question": "Which of the following software is not a DTP tool?",
    "options": ["Scribus", "Microsoft Publisher", "LibreOffice Writer", "Adobe InDesign"],
    "correct": 2
  },
  {
    "question": "What feature of Scribus is used to include text?",
    "options": ["Image frame", "Shape tool", "Text frame", "Node editor"],
    "correct": 2
  },
  {
    "question": "What is the function of the 'Drop Shadow' feature in Scribus?",
    "options": ["To highlight text", "To create animations", "To add visual depth to shapes", "To duplicate objects"],
    "correct": 2
  },
  {
    "question": "What tool is used to draw rectangles or shapes in Scribus?",
    "options": ["Text frame", "Image frame", "Shape tool", "Banner tool"],
    "correct": 2
  },
  {
    "question": "To change the appearance of a shape using points, you use:",
    "options": ["Font properties", "Image settings", "Node Editing", "Layer manager"],
    "correct": 2
  },
  {
    "question": "What option is used in Scribus to insert an image into an Image Frame?",
    "options": ["Insert → Add Picture", "File → Open Image", "Content → Get Image", "Import → Picture"],
    "correct": 2
  },
  {
    "question": "Which tab in the Properties window is used to set the number of columns in a text frame?",
    "options": ["Fill and Stroke", "Columns & Text Distance", "Font Style", "Line spacing"],
    "correct": 1
  },
  {
    "question": "Which of the following is a Unicode Malayalam font?",
    "options": ["Arial", "Manjari", "Calibri", "Times New Roman"],
    "correct": 1
  },
  {
    "question": "What must you do to ensure a shape appears behind other page elements?",
    "options": ["Set Drop Shadow", "Use Send to Back in Level", "Adjust Font Size", "Apply Justify Alignment"],
    "correct": 1
  },
  {
    "question": "Which DTP software is open-source and widely used in Malayalam newspapers?",
    "options": ["QuarkXPress", "Adobe Illustrator", "Scribus", "CorelDRAW"],
    "correct": 2
  },
  {
    "question": "What is the purpose of the ‘Preview Mode’ in Scribus?",
    "options": ["To edit shapes", "To test print layout", "To view final design without guides", "To zoom in on content"],
    "correct": 2
  },
  {
    "question": "What is required before typing text in Scribus?",
    "options": ["Create a shape", "Open a layer", "Create a text frame", "Change page orientation"],
    "correct": 2
  },
  {
    "question": "Which option is used to duplicate an object in Scribus?",
    "options": ["File → Save As", "Edit → Copy", "Item → Duplicate/Transform → Duplicate", "View → Repeat"],
    "correct": 2
  },
  {
    "question": "What does DTP stand for?",
    "options": ["Digital Text Processor", "Document Text Publisher", "Desktop Publishing", "Dynamic Text Placement"],
    "correct": 2
  },
  {
    "question": "Which Scribus feature allows flipping a shape horizontally?",
    "options": ["Flip tool", "Properties → Level → Flip Horizontally", "Text Properties → Mirror", "Banner tool"],
    "correct": 1
  },
  {
    "question": "How do you adjust text to fit inside a frame if there’s overflow?",
    "options": ["Shrink font", "Use overflow icon to link to another frame", "Recreate the frame", "Reduce spacing"],
    "correct": 1
  },
  {
    "question": "What element is essential on the first page of a school newspaper?",
    "options": ["Subheadings only", "Editorial only", "Title and subtitle", "Advertisements"],
    "correct": 2
  },
  {
    "question": "In Scribus, how do you apply a color fill to a shape?",
    "options": ["Use the Fill option in Properties window", "Use Font color settings", "Use Shape editor", "Use Background tool"],
    "correct": 0
  },
  {
    "question": "What tool is used to add straight lines in Scribus?",
    "options": ["Text Frame", "Line Tool", "Brush Tool", "Ruler Tool"],
    "correct": 1
  },
  {
    "question": "Which shape transformation helps create a new design for banners?",
    "options": ["Drop shadow", "Gradient", "Node Editing", "Insert Table"],
    "correct": 2
  },
  {
    "question": "To insert a QR code, which toolbar icon should be used?",
    "options": ["Image", "Barcode", "Scan", "Add Link"],
    "correct": 1
  },
  {
    "question": "How can you adjust the spacing between lines in a text frame?",
    "options": ["Set Margin", "Use Line spacing mode in Text Properties", "Drag the frame", "Reduce font size"],
    "correct": 1
  },
  {
    "question": "Which property in Text Frame sets spacing between columns?",
    "options": ["Justify Alignment", "Columns & Text Distance", "Contour Settings", "Background Fill"],
    "correct": 1
  },
  {
    "question": "How can one adjust the text to flow around an image?",
    "options": ["Use Image wrap setting", "Use Text Overflow option", "Use Contour Line under Shape → Text Flow Around Frame", "Apply Gradient"],
    "correct": 2
  },
  {
    "question": "Which of the following fonts is a Malayalam Unicode font?",
    "options": ["RIT Ezhuthu", "Courier New", "Times", "Comic Sans"],
    "correct": 0
  }
];

let currentQuestion = 0;
let correctAnswers = 0;
let userAnswers = [];
let currentReviewIndex = 0;
let answeredQuestions = [];

const correctSound = document.getElementById("correct-sound");
const incorrectSound = document.getElementById("incorrect-sound");

function loadQuestion() {
  const questionElement = document.getElementById("question");
  const optionsContainer = document.getElementById("options");
  const backBtn = document.getElementById("back-btn");
  const nextBtn = document.getElementById("next-btn");

  questionElement.textContent = questions[currentQuestion].question;
  optionsContainer.innerHTML = "";

  questions[currentQuestion].options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    
    // If this question has been answered, show the result
    if (answeredQuestions[currentQuestion]) {
      const correctIndex = questions[currentQuestion].correct;
      if (index === correctIndex) {
        button.classList.add("correct");
      } else if (index === userAnswers[currentQuestion] && index !== correctIndex) {
        button.classList.add("wrong");
      }
      button.disabled = true;
    } else {
      button.onclick = () => checkAnswer(index, button);
    }
    
    optionsContainer.appendChild(button);
  });

  // Update navigation buttons
  backBtn.disabled = currentQuestion === 0;
  nextBtn.disabled = !answeredQuestions[currentQuestion];
  nextBtn.textContent = currentQuestion === questions.length - 1 ? "Finish" : "Next";

  // Update progress bar
  const progress = document.getElementById("progress");
  const progressPercent = ((currentQuestion) / questions.length) * 100;
  progress.style.width = `${progressPercent}%`;
}

function checkAnswer(selectedIndex, selectedButton) {
  const correctIndex = questions[currentQuestion].correct;
  const buttons = document.querySelectorAll(".options button");

  userAnswers[currentQuestion] = selectedIndex;
  answeredQuestions[currentQuestion] = true;

  if (selectedIndex === correctIndex) {
    correctAnswers++;
    document.getElementById("score").textContent = correctAnswers;
    correctSound.play();
    launchFireworks();
  } else {
    selectedButton.classList.add("wrong");
    incorrectSound.play();
    
    // Highlight the correct answer
    buttons[correctIndex].classList.add("show-correct");
  }

  buttons[correctIndex].classList.add("correct");
  buttons.forEach((btn) => (btn.disabled = true));
  
  // Enable next button
  document.getElementById("next-btn").disabled = false;
}

function nextQuestion() {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    loadQuestion();
  } else {
    showResults();
  }
}

function prevQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    loadQuestion();
  }
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
  answeredQuestions = [];
  document.getElementById("score").textContent = correctAnswers;
  document.getElementById("results-modal").style.display = "none";
  loadQuestion();
}

function launchFireworks() {
  const canvas = document.getElementById("star-canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const colors = ["#FFD700", "#FFEE58", "#FFF176", "#FFAB00", "#FF6F00"];

  // Create explosion at center
  for (let i = 0; i < 60; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 6 + 3;
    particles.push({
      x: canvas.width / 2,
      y: canvas.height / 2,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 2,
      size: Math.random() * 4 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      life: 100
    });
  }

  function drawStar(x, y, size, color) {
    ctx.save();
    ctx.beginPath();
    ctx.translate(x, y);
    ctx.moveTo(0, -size);
    for (let i = 0; i < 5; i++) {
      ctx.rotate(Math.PI / 5);
      ctx.lineTo(0, -size * 0.5);
      ctx.rotate(Math.PI / 5);
      ctx.lineTo(0, -size);
    }
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.shadowColor = color;
    ctx.shadowBlur = 15;
    ctx.fill();
    ctx.restore();
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p, i) => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.05; // gravity
      p.life--;

      if (p.life > 0) {
        drawStar(p.x, p.y, p.size, p.color);
      } else {
        particles.splice(i, 1);
      }
    });

    if (particles.length > 0) {
      requestAnimationFrame(animate);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  animate();
}

window.onload = function() {
  // Initialize answeredQuestions array
  answeredQuestions = new Array(questions.length).fill(false);
  loadQuestion();
};
