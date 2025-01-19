const flashcards = [
{ question: "data/images/1.jpg", answer: "ٹماٹر" },
{ question: "data/images/2.jpg", answer: "بینگن" },
{ question: "data/images/3.jpg", answer: "شملہ مرچ" },
{ question: "data/images/4.jpg", answer: "مرچ" },
{ question: "data/images/5.jpg", answer: "کھمبی" },
{ question: "data/images/6.jpg", answer: "لہسن" },
{ question: "data/images/7.jpg", answer: "پیاز" },
{ question: "data/images/8.jpg", answer: "آلو" },
{ question: "data/images/9.jpg", answer: "دھنیا" },
{ question: "data/images/10.jpg", answer: "بند گوبھی" },
{ question: "data/images/11.jpg", answer: "مولی" },
{ question: "data/images/12.jpg", answer: "مٹر" },
{ question: "data/images/13.jpg", answer: "شاخ گوبھی" },
{ question: "data/images/14.jpg", answer: "پالک" },
{ question: "data/images/15.jpg", answer: "کھیرا" },
{ question: "data/images/16.jpg", answer: "گاجر" },
{ question: "data/images/17.jpg", answer: "اروی" },
{ question: "data/images/18.jpg", answer: "کڑی پتہ" },
{ question: "data/images/19.jpg", answer: "پیٹھا" },
{ question: "data/images/20.jpg", answer: "چقندر" },
{ question: "data/images/21.jpg", answer: "پھول گوبھی" },
{ question: "data/images/22.jpg", answer: "ادرک" },
{ question: "data/images/23.jpg", answer: "ہلدی" },
{ question: "data/images/24.jpg", answer: "کریلا" },
{ question: "data/images/25.jpg", answer: "بھنڈی" },
{ question: "data/images/26.jpg", answer: "کدو" },
{ question: "data/images/27.jpg", answer: "سبز پھلی" },
{ question: "data/images/28.jpg", answer: "زمین قند" },
{ question: "data/images/29.jpg", answer: "شکر قندی" },
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

