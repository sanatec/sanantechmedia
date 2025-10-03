const questions = [
{
    "question": "What is the structure of a style instruction?",
    "options": ["selector, color, property", "property: value;", "color - value", "tag.value:property"],
    "correct": 1
  },
  {
    "question": "What happens if a tag is styled multiple times inline?",
    "options": ["The page loads faster", "Code size increases", "Code becomes cleaner", "Nothing changes"],
    "correct": 1
  },
  {
    "question": "Which of these is NOT a reason to avoid inline styles?",
    "options": ["Code becomes complex", "Repetition of styles", "Easier maintenance", "Larger code size"],
    "correct": 2
  },
  {
    "question": "What is a selector in CSS?",
    "options": ["A style tag", "An HTML attribute", "An element to which styles are applied", "A script function"],
    "correct": 2
  },
  {
    "question": "Which of the following will make a paragraph background light blue using inline style?",
    "options": ["<p style=\"background-color: lightblue;\">", "<p bg=\"lightblue\">", "<p color=\"blue\">", "<p style=\"color: lightblue;\">"],
    "correct": 0
  },
  {
    "question": "Where is the internal CSS written in HTML?",
    "options": ["Inside the <head> within <style> tags", "Inside <body> using <div>", "In an external file", "In the footer"],
    "correct": 0
  },
  {
    "question": "What is the purpose of class selectors in CSS?",
    "options": ["To apply style to JavaScript", "To group paragraphs", "To apply styles to specific elements with the same class", "To insert images"],
    "correct": 2
  },
  {
    "question": "What is the format of a class selector?",
    "options": ["#class {}", "class {}", ".class {}", "@class {}"],
    "correct": 2
  },
  {
    "question": "Which is a correct example of internal CSS?",
    "options": ["<style> p { color: red; } </style>", "<p style=\"color: red;\">", "<link href=\"style.css\">", "style=\"color:red;\""],
    "correct": 0
  },
  {
    "question": "CSS allows reusability of styles through:",
    "options": ["JavaScript", "Tags", "Stylesheets", "IDs only"],
    "correct": 2
  },
  {
    "question": "Inline CSS is written using which attribute?",
    "options": ["style", "css", "font", "link"],
    "correct": 0
  },
  {
    "question": "Which method of styling should be used for large websites with many pages?",
    "options": ["Inline CSS", "Internal CSS", "External CSS", "HTML styling"],
    "correct": 2
  },
  {
    "question": "What is the advantage of external CSS?",
    "options": ["More lines of code", "Code duplication", "Single change affects all pages", "Must be written for every tag"],
    "correct": 2
  },
  {
    "question": "The syntax for applying color red to text using inline style is:",
    "options": ["<p style=\"color:red;\">", "<p style: color=red>", "<p color:red>", "<p font-color=\"red\">"],
    "correct": 0
  },
  {
    "question": "Which part of CSS is enclosed in curly braces {}?",
    "options": ["The selector", "The property", "The declaration block", "The tag"],
    "correct": 2
  },
  {
    "question": "Which is NOT a CSS property?",
    "options": ["color", "background-color", "text-align", "paragraph"],
    "correct": 3
  },
  {
    "question": "What is the use of font-size in CSS?",
    "options": ["Changes color", "Sets text alignment", "Sets size of the font", "Changes background"],
    "correct": 2
  },
  {
    "question": "The default unit for font-size is:",
    "options": ["em", "px", "cm", "%"],
    "correct": 1
  },
  {
    "question": "What is the correct way to comment in CSS?",
    "options": ["", "// comment", "/* comment */", "# comment"],
    "correct": 2
  },
  {
    "question": "How to apply styles to all <h1> elements?",
    "options": ["h1 {}", "<h1> {}", "style(h1)", "h1:style {}"],
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
