const flashcards = [
  { question: "ا", answer: "data/images/1.jpg" },
  { question: "ب", answer: "data/images/2.jpg" },
  { question: "پ", answer: "data/images/3.jpg" },
  { question: "ت", answer: "data/images/4.jpg" },
  { question: "ٹ", answer: "data/images/5.jpg" },
  { question: "ث", answer: "data/images/6.jpg" },
  { question: "ج", answer: "data/images/7.jpg" },
  { question: "چ", answer: "data/images/8.jpg" },
  { question: "ح", answer: "data/images/9.jpg" },
  { question: "خ", answer: "data/images/10.jpg" },
  { question: "د", answer: "data/images/11.jpg" },
  { question: "ڈ", answer: "data/images/12.jpg" },
  { question: "ذ", answer: "data/images/13.jpg" },
  { question: "ر", answer: "data/images/14.jpg" },
  { question: "ڑ", answer: "data/images/15.jpg" },
  { question: "ز", answer: "data/images/16.jpg" },
  { question: "ژ", answer: "data/images/17.jpg" },
  { question: "س", answer: "data/images/18.jpg" },
  { question: "ش", answer: "data/images/19.jpg" },
  { question: "ص", answer: "data/images/20.jpg" },
  { question: "ض", answer: "data/images/21.jpg" },
  { question: "ط", answer: "data/images/22.jpg" },
  { question: "ظ", answer: "data/images/23.jpg" },
  { question: "ع", answer: "data/images/24.jpg" },
  { question: "غ", answer: "data/images/25.jpg" },
  { question: "ف", answer: "data/images/26.jpg" },
  { question: "ق", answer: "data/images/27.jpg" },
  { question: "ک", answer: "data/images/28.jpg" },
  { question: "گ", answer: "data/images/29.jpg" },
  { question: "ل", answer: "data/images/30.jpg" },
  { question: "م", answer: "data/images/31.jpg" },
  { question: "ن", answer: "data/images/32.jpg" },
  { question: "و", answer: "data/images/33.jpg" },
  { question: "ہ", answer: "data/images/34.jpg" },
  { question: "ی", answer: "data/images/35.jpg" },
];

let currentCard = 0;

// Update the flashcard content
function updateCard() {
  const question = document.getElementById("question");
  const answerContainer = document.getElementById("answer-container");

  // Update question text
  question.textContent = flashcards[currentCard].question;

  // Check if the answer is an image
  if (
    flashcards[currentCard].answer.endsWith(".png") ||
    flashcards[currentCard].answer.endsWith(".jpg") ||
    flashcards[currentCard].answer.endsWith(".jpeg") ||
    flashcards[currentCard].answer.endsWith(".gif")
  ) {
    answerContainer.innerHTML = `<img src="${flashcards[currentCard].answer}" alt="Answer Image">`;
  } else {
    answerContainer.innerHTML = `<p>${flashcards[currentCard].answer}</p>`;
  }

  // Update button states
  document.getElementById("prevBtn").disabled = currentCard === 0;
  document.getElementById("nextBtn").disabled = currentCard === flashcards.length - 1;

  // Reset card flip
  document.getElementById("flashcard-inner").style.transform = "";
}

// Play sound and flip the card
function flipCard() {
  const card = document.getElementById("flashcard-inner");
  const flipSound = document.getElementById("flipSound");

  // Play the flip sound
  flipSound.currentTime = 0; // Reset the sound to the beginning
  flipSound.play();

  // Flip the card
  card.style.transform = card.style.transform === "rotateY(180deg)" ? "" : "rotateY(180deg)";
}

// Navigate to the next flashcard
function nextCard() {
  if (currentCard < flashcards.length - 1) {
    currentCard++;
    updateCard();
  }
}

// Navigate to the previous flashcard
function prevCard() {
  if (currentCard > 0) {
    currentCard--;
    updateCard();
  }
}

// Initialize the first card
updateCard();

