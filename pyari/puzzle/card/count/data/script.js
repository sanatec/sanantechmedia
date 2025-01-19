const flashcards = [
{ question: "data/images/1.jpg", answer: "ایک" },
{ question: "data/images/2.jpg", answer: "دو" },
{ question: "data/images/3.jpg", answer: "تین" },
{ question: "data/images/4.jpg", answer: "چار" },
{ question: "data/images/5.jpg", answer: "پانچ" },
{ question: "data/images/6.jpg", answer: "چھہ" },
{ question: "data/images/7.jpg", answer: "سات" },
{ question: "data/images/8.jpg", answer: "آٹھ" },
{ question: "data/images/9.jpg", answer: "نو" },
{ question: "data/images/10.jpg", answer: "دس" },
{ question: "data/images/11.jpg", answer: "گیارہ" },
{ question: "data/images/12.jpg", answer: "بارہ" },
{ question: "data/images/13.jpg", answer: "تیرہ" },
{ question: "data/images/14.jpg", answer: "چودہ" },
{ question: "data/images/15.jpg", answer: "پندرہ" },
{ question: "data/images/16.jpg", answer: "سولہ" },
{ question: "data/images/17.jpg", answer: "سترہ" },
{ question: "data/images/18.jpg", answer: "اٹھارہ" },
{ question: "data/images/19.jpg", answer: "انیس" },
{ question: "data/images/20.jpg", answer: "بیس" },
{ question: "data/images/25.jpg", answer: "پچیس" },
{ question: "data/images/50.jpg", answer: "پچاس" },
{ question: "data/images/100.jpg", answer: "سو" },
{ question: "data/images/500.jpg", answer: "پانچ سو" },
{ question: "data/images/1000.jpg", answer: "ہزار" },
];

let currentCard = 0;

// Update the flashcard content
function updateCard() {
  const questionContainer = document.getElementById("question-container");
  const answer = document.getElementById("answer");

  // Check if the question is an image or text
  if (flashcards[currentCard].question.endsWith(".png") || 
      flashcards[currentCard].question.endsWith(".jpg") || 
      flashcards[currentCard].question.endsWith(".jpeg") || 
      flashcards[currentCard].question.endsWith(".gif")) {
    questionContainer.innerHTML = `<img src="${flashcards[currentCard].question}" alt="Question Image" style="max-width: 100%; height: auto;">`;
  } else {
    questionContainer.innerHTML = `<p>${flashcards[currentCard].question}</p>`;
  }

  answer.textContent = flashcards[currentCard].answer;

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

