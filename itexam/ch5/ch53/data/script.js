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

