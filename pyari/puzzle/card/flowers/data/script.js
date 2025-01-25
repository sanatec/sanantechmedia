const flashcards = [
{ question: "data/images/1.jpg", answer: "گلاب",sound: "data/audio/1.wav" },
{ question: "data/images/2.jpg", answer: "کنول",sound: "data/audio/2.wav" },
{ question: "data/images/3.jpg", answer: "چمپا",sound: "data/audio/3.wav" },
{ question: "data/images/4.jpg", answer: "چمیلی",sound: "data/audio/4.wav" },
{ question: "data/images/5.jpg", answer: "گڈہال",sound: "data/audio/5.wav" },
{ question: "data/images/6.jpg", answer: "اشنھ",sound: "data/audio/6.wav" },
{ question: "data/images/7.jpg", answer: "بنفشہ",sound: "data/audio/7.wav" },
{ question: "data/images/8.jpg", answer: "جنگلی سنبل",sound: "data/audio/8.wav" },
{ question: "data/images/9.jpg", answer: "رات کی رانی",sound: "data/audio/9.wav" },
{ question: "data/images/10.jpg", answer: "زغفران",sound: "data/audio/10.wav" },
{ question: "data/images/11.jpg", answer: "سدا بہار",sound: "data/audio/11.wav" },
{ question: "data/images/12.jpg", answer: "سورج مکھی",sound: "data/audio/12.wav" },
{ question: "data/images/13.jpg", answer: "گل بہار",sound: "data/audio/13.wav" },
{ question: "data/images/14.jpg", answer: "گل داؤدی",sound: "data/audio/14.wav" },
{ question: "data/images/15.jpg", answer: "گل نرگس",sound: "data/audio/15.wav" },
{ question: "data/images/16.jpg", answer: "گیندا",sound: "data/audio/16.wav" },
{ question: "data/images/17.jpg", answer: "نرگس",sound: "data/audio/17.wav" },
{ question: "data/images/18.jpg", answer: "نیل کمال",sound: "data/audio/18.wav" },
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

