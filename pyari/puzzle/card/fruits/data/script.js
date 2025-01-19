const flashcards = [
{ question: "data/images/1.jpg", answer: "سیب" },
{ question: "data/images/2.jpg", answer: "بادام" },
{ question: "data/images/3.jpg", answer: "خوبانی" },
{ question: "data/images/4.jpg", answer: "ایواکاڈو" },
{ question: "data/images/5.jpg", answer: "کیلا" },
{ question: "data/images/6.jpg", answer: "انگور" },
{ question: "data/images/7.jpg", answer: "جامن" },
{ question: "data/images/8.jpg", answer: "کاجو" },
{ question: "data/images/9.jpg", answer: "چیری" },
{ question: "data/images/10.jpg", answer: "ناریل" },
{ question: "data/images/11.jpg", answer: "کھجور" },
{ question: "data/images/12.jpg", answer: "امرود" },
{ question: "data/images/14.jpg", answer: "کٹہل" },
{ question: "data/images/15.jpg", answer: "کیوی" },
{ question: "data/images/16.jpg", answer: "آم" },
{ question: "data/images/17.jpg", answer: "سنترہ" },
{ question: "data/images/18.jpg", answer: "آڑو" },
{ question: "data/images/19.jpg", answer: "توت فرنگی" },
{ question: "data/images/20.jpg", answer: "ناشپاتی" },
{ question: "data/images/21.jpg", answer: "انناس" },
{ question: "data/images/22.jpg", answer: "انار" },
{ question: "data/images/23.jpg", answer: "تربوز" },
{ question: "data/images/24.jpg", answer: "پپیتا" },
{ question: "data/images/25.jpg", answer: "آلو بخارہ" },
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

