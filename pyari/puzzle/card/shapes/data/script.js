const flashcards = [
{ question: "data/images/1.jpg", answer: "مر بع",sound: "data/audio/1.wav" },
{ question: "data/images/2.jpg", answer: "مستطیل",sound: "data/audio/2.wav" },
{ question: "data/images/3.jpg", answer: "دائرہ",sound: "data/audio/3.wav" },
{ question: "data/images/4.jpg", answer: "بیضوی",sound: "data/audio/4.wav" },
{ question: "data/images/5.jpg", answer: "پنچ گوشہ ",sound: "data/audio/5.wav" },
{ question: "data/images/6.jpg", answer: "شش پہلو",sound: "data/audio/6.wav" },
{ question: "data/images/7.jpg", answer: "ہفت پہلو",sound: "data/audio/7.wav" },
{ question: "data/images/8.jpg", answer: "مثلث",sound: "data/audio/8.wav" },
{ question: "data/images/9.jpg", answer: "نوپہلو",sound: "data/audio/9.wav" },
{ question: "data/images/10.jpg", answer: "مکعب",sound: "data/audio/10.wav" },
{ question: "data/images/11.jpg", answer: "اسطوانہ",sound: "data/audio/11.wav" },
{ question: "data/images/12.jpg", answer: "ہیرا",sound: "data/audio/12.wav" },
{ question: "data/images/13.jpg", answer: "ستارہ",sound: "data/audio/13.wav" },
{ question: "data/images/14.jpg", answer: "دل",sound: "data/audio/14.wav" },
{ question: "data/images/15.jpg", answer: "کرہ",sound: "data/audio/15.wav" },
];

let currentCard = 0;

function updateCard() {
  const questionContainer = document.getElementById("question-container");
  const answer = document.getElementById("answer");

  if (flashcards[currentCard].question.endsWith(".png") || 
      flashcards[currentCard].question.endsWith(".jpg") || 
      flashcards[currentCard].question.endsWith(".jpeg")) {
    questionContainer.innerHTML = `<img src="${flashcards[currentCard].question}" alt="Question Image" style="max-width: 100%; height: auto;">`;
  } else {
    questionContainer.innerHTML = `<p>${flashcards[currentCard].question}</p>`;
  }

  answer.textContent = flashcards[currentCard].answer;

  document.getElementById("prevBtn").disabled = currentCard === 0;
  document.getElementById("nextBtn").disabled = currentCard === flashcards.length - 1;

  document.getElementById("flashcard-inner").style.transform = "";
}

function flipCard() {
  const card = document.getElementById("flashcard-inner");
  const sound = new Audio(flashcards[currentCard].sound);

  sound.play();
  card.style.transform = card.style.transform === "rotateY(180deg)" ? "" : "rotateY(180deg)";
}

function nextCard() {
  if (currentCard < flashcards.length - 1) {
    currentCard++;
    updateCard();
  }
}

function prevCard() {
  if (currentCard > 0) {
    currentCard--;
    updateCard();
  }
}

updateCard();

