const questions = [
{
    "question": "When changing the font in the Text Properties window, what must be selected first?",
    "options": ["The canvas", "The entire text (Ctrl + A)", "The shape", "The file name"],
    "correct": 1
  },
  {
    "question": "Which option helps ensure even spacing between lines in a paragraph?",
    "options": ["Font Size", "Justify Alignment", "Auto Line Spacing", "Drop Cap"],
    "correct": 2
  },
  {
    "question": "To make a heading stand out, which Text Properties feature would you use?",
    "options": ["Font shadow and size", "Line tool", "Insert shape", "Image frame"],
    "correct": 0
  },
  {
    "question": "What alignment option should you choose to spread text evenly across a column?",
    "options": ["Center", "Right", "Justify", "Left"],
    "correct": 2
  },
  {
    "question": "What is the purpose of an Image Frame in Scribus?",
    "options": ["To draw borders", "To insert images into a layout", "To create a text box", "To color shapes"],
    "correct": 1
  },
  {
    "question": "What must be done before an image can be inserted into an Image Frame?",
    "options": ["Convert it to PDF", "Resize the image", "Draw the image frame", "Type text inside"],
    "correct": 2
  },
  {
    "question": "Which menu option is used to insert an image into an Image Frame?",
    "options": ["File → Open", "Content → Get Image", "Insert → Image", "Tools → Picture"],
    "correct": 1
  },
  {
    "question": "After inserting an image, what option ensures the image fits properly inside the frame?",
    "options": ["Fit to page", "Shrink to fit", "Image → Adjust Image to Frame", "Auto Resize"],
    "correct": 2
  },
  {
    "question": "To ensure image clarity, which setting should be enabled in Preview Settings?",
    "options": ["Fast Display", "Print Mode", "Full Resolution", "Vector Display"],
    "correct": 2
  },
  {
    "question": "What is the function of the “Convert to Image Frame” option?",
    "options": ["Converts shape into image format", "Turns a shape into a frame that can hold an image", "Changes a text frame to image", "Resets image size"],
    "correct": 1
  },
  {
    "question": "How can you overlay a QR code onto the newspaper design in Scribus?",
    "options": ["Draw using Shape tool", "Insert as image", "Use the Barcode icon and select QR Code", "Paste from clipboard"],
    "correct": 2
  },
  {
    "question": "What must be entered in the QR code settings to make it functional?",
    "options": ["The name of the newspaper", "A sentence or caption", "The schoolwiki URL or page address", "A barcode number"],
    "correct": 2
  },
  {
    "question": "What happens after generating a QR Code using the Barcode Tool?",
    "options": ["A text frame is created", "The QR code opens in browser", "An image frame appears to place the QR code", "Nothing until page is refreshed"],
    "correct": 2
  },
  {
    "question": "How can you bring an image to the top layer above other objects?",
    "options": ["Use Shape Tool", "Use Level → Raise to Top", "Use Text Properties", "Reinsert the image"],
    "correct": 1
  },
  {
    "question": "Why is the front page of a newspaper considered important?",
    "options": ["It shows the table of contents", "It contains ads only", "It acts as the “window” showcasing key news", "It is used for editing articles"],
    "correct": 2
  },
  {
    "question": "What type of content is typically found on the front page?",
    "options": ["Entire news articles", "Classifieds", "Brief news snippets and images", "Cartoons only"],
    "correct": 2
  },
  {
    "question": "What layout feature helps organize text and images clearly on the front page?",
    "options": ["Watermark", "Guides", "Columns", "Animation"],
    "correct": 2
  },
  {
    "question": "How should the title of a school newspaper be presented?",
    "options": ["In small plain text", "In an image frame", "In a bold, visually striking text frame", "In a table"],
    "correct": 2
  },
  {
    "question": "What can be included under the newspaper title to provide additional info?",
    "options": ["Captions", "Footnotes", "Subtitles like school name and date", "Image gallery"],
    "correct": 2
  },
  {
    "question": "Which tool is used to place the school’s email or subtitle below the heading?",
    "options": ["Line Tool and Text Frame", "Image Frame", "Polygon Tool", "Shape Tool"],
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

