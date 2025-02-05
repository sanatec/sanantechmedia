const flashcards = [
  { question: "ا", answer: "data/images/1.jpg",audio: "data/audio/1.wav" },
  { question: "ب", answer: "data/images/2.jpg",audio: "data/audio/2.wav" },
  { question: "پ", answer: "data/images/3.jpg",audio: "data/audio/3.wav" },
  { question: "ت", answer: "data/images/4.jpg",audio: "data/audio/4.wav" },
  { question: "ٹ", answer: "data/images/5.jpg",audio: "data/audio/5.wav" },
  { question: "ث", answer: "data/images/6.jpg",audio: "data/audio/6.wav" },
  { question: "ج", answer: "data/images/7.jpg",audio: "data/audio/7.wav" },
  { question: "چ", answer: "data/images/8.jpg",audio: "data/audio/8.wav" },
  { question: "ح", answer: "data/images/9.jpg",audio: "data/audio/9.wav" },
  { question: "خ", answer: "data/images/10.jpg",audio: "data/audio/10.wav" },
  { question: "د", answer: "data/images/11.jpg",audio: "data/audio/11.wav" },
  { question: "ڈ", answer: "data/images/12.jpg",audio: "data/audio/12.wav" },
  { question: "ذ", answer: "data/images/13.jpg",audio: "data/audio/13.wav" },
  { question: "ر", answer: "data/images/14.jpg",audio: "data/audio/14.wav" },
  { question: "ڑ", answer: "data/images/15.jpg",audio: "data/audio/15.wav" },
  { question: "ز", answer: "data/images/16.jpg",audio: "data/audio/16.wav" },
  { question: "ژ", answer: "data/images/17.jpg",audio: "data/audio/17.wav" },
  { question: "س", answer: "data/images/18.jpg",audio: "data/audio/18.wav" },
  { question: "ش", answer: "data/images/19.jpg",audio: "data/audio/19.wav" },
  { question: "ص", answer: "data/images/20.jpg",audio: "data/audio/20.wav" },
  { question: "ض", answer: "data/images/21.jpg",audio: "data/audio/21.wav" },
  { question: "ط", answer: "data/images/22.jpg",audio: "data/audio/22.wav" },
  { question: "ظ", answer: "data/images/23.jpg",audio: "data/audio/23.wav" },
  { question: "ع", answer: "data/images/24.jpg",audio: "data/audio/24.wav" },
  { question: "غ", answer: "data/images/25.jpg",audio: "data/audio/25.wav" },
  { question: "ف", answer: "data/images/26.jpg",audio: "data/audio/26.wav" },
  { question: "ق", answer: "data/images/27.jpg",audio: "data/audio/27.wav" },
  { question: "ک", answer: "data/images/28.jpg",audio: "data/audio/28.wav" },
  { question: "گ", answer: "data/images/29.jpg",audio: "data/audio/29.wav" },
  { question: "ل", answer: "data/images/30.jpg",audio: "data/audio/30.wav" },
  { question: "م", answer: "data/images/31.jpg",audio: "data/audio/31.wav" },
  { question: "ن", answer: "data/images/32.jpg",audio: "data/audio/32.wav" },
  { question: "و", answer: "data/images/33.jpg",audio: "data/audio/33.wav" },
  { question: "ہ", answer: "data/images/34.jpg",audio: "data/audio/34.wav" },
  { question: "ی", answer: "data/images/35.jpg",audio: "data/audio/35.wav" },
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
  const answerSound = document.getElementById("answerSound");

  // Play the flip sound
  flipSound.currentTime = 0; // Reset the sound to the beginning
  flipSound.play();

  // Flip the card
  const isFlipped = card.style.transform === "rotateY(180deg)";
  card.style.transform = isFlipped ? "" : "rotateY(180deg)";

  // If flipping to the back, play the answer sound
  if (!isFlipped) {
    answerSound.src = flashcards[currentCard].audio;
    answerSound.currentTime = 0;
    answerSound.play();
  }
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

