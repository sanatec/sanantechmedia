const flashcards = [
{ question: "data/images/1.jpg", answer: "بھالو" },
{ question: "data/images/2.jpg", answer: "بیل" },
{ question: "data/images/3.jpg", answer: "اونٹ" },
{ question: "data/images/4.jpg", answer: "بلّی" },
{ question: "data/images/5.jpg", answer: "گائے" },
{ question: "data/images/6.jpg", answer: "مگر مچھ" },
{ question: "data/images/7.jpg", answer: "ہرن" },
{ question: "data/images/8.jpg", answer: "کتّا" },
{ question: "data/images/9.jpg", answer: "گدھا" },
{ question: "data/images/10.jpg", answer: "ہاتھی" },
{ question: "data/images/11.jpg", answer: "لومڑی" },
{ question: "data/images/12.jpg", answer: "زراف" },
{ question: "data/images/13.jpg", answer: "بکری" },
{ question: "data/images/14.jpg", answer: "گوریلا" },
{ question: "data/images/15.jpg", answer: "دریائی گھوڑا" },
{ question: "data/images/16.jpg", answer: "گھوڑا" },
{ question: "data/images/17.jpg", answer: "کینگرو" },
{ question: "data/images/18.jpg", answer: "چیتا" },
{ question: "data/images/19.jpg", answer: "شیر" },
{ question: "data/images/20.jpg", answer: "نیولا" },
{ question: "data/images/21.jpg", answer: "بندر" },
{ question: "data/images/22.jpg", answer: "پانڈا" },
{ question: "data/images/23.jpg", answer: "سور" },
{ question: "data/images/24.jpg", answer: "خرگوش" },
{ question: "data/images/25.jpg", answer: "چوہا" },
{ question: "data/images/26.jpg", answer: "گینڈا" },
{ question: "data/images/27.jpg", answer: "گلہری" },
{ question: "data/images/28.jpg", answer: "بارہ سنگا" },
{ question: "data/images/29.jpg", answer: "باگھ" },
{ question: "data/images/30.jpg", answer: "کچھوا" },
{ question: "data/images/31.jpg", answer: "بھیڑیا" },
{ question: "data/images/32.jpg", answer: "زیبرا" },
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

