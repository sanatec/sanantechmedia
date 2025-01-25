const flashcards = [
{ question: "data/images/1.jpg", answer: "ٹماٹر",sound: "data/audio/1.wav" },
{ question: "data/images/2.jpg", answer: "بینگن",sound: "data/audio/2.wav" },
{ question: "data/images/3.jpg", answer: "شملہ مرچ",sound: "data/audio/3.wav" },
{ question: "data/images/4.jpg", answer: "مرچ",sound: "data/audio/4.wav" },
{ question: "data/images/5.jpg", answer: "کھمبی",sound: "data/audio/5.wav" },
{ question: "data/images/6.jpg", answer: "لہسن",sound: "data/audio/6.wav" },
{ question: "data/images/7.jpg", answer: "پیاز",sound: "data/audio/7.wav" },
{ question: "data/images/8.jpg", answer: "آلو",sound: "data/audio/8.wav" },
{ question: "data/images/9.jpg", answer: "دھنیا",sound: "data/audio/9.wav" },
{ question: "data/images/10.jpg", answer: "بند گوبھی",sound: "data/audio/10.wav" },
{ question: "data/images/11.jpg", answer: "مولی",sound: "data/audio/11.wav" },
{ question: "data/images/12.jpg", answer: "مٹر",sound: "data/audio/12.wav" },
{ question: "data/images/13.jpg", answer: "شاخ گوبھی",sound: "data/audio/13.wav" },
{ question: "data/images/14.jpg", answer: "پالک",sound: "data/audio/14.wav" },
{ question: "data/images/15.jpg", answer: "کھیرا",sound: "data/audio/15.wav" },
{ question: "data/images/16.jpg", answer: "گاجر",sound: "data/audio/16.wav" },
{ question: "data/images/17.jpg", answer: "اروی",sound: "data/audio/17.wav" },
{ question: "data/images/18.jpg", answer: "کڑی پتہ",sound: "data/audio/18.wav" },
{ question: "data/images/19.jpg", answer: "پیٹھا",sound: "data/audio/19.wav" },
{ question: "data/images/20.jpg", answer: "چقندر",sound: "data/audio/20.wav" },
{ question: "data/images/21.jpg", answer: "پھول گوبھی",sound: "data/audio/21.wav" },
{ question: "data/images/22.jpg", answer: "ادرک",sound: "data/audio/22.wav" },
{ question: "data/images/23.jpg", answer: "ہلدی",sound: "data/audio/23.wav" },
{ question: "data/images/24.jpg", answer: "کریلا",sound: "data/audio/24.wav" },
{ question: "data/images/25.jpg", answer: "بھنڈی",sound: "data/audio/25.wav" },
{ question: "data/images/26.jpg", answer: "کدو",sound: "data/audio/26.wav" },
{ question: "data/images/27.jpg", answer: "سبز پھلی",sound: "data/audio/27.wav" },
{ question: "data/images/28.jpg", answer: "زمین قند",sound: "data/audio/28.wav" },
{ question: "data/images/29.jpg", answer: "شکر قندی",sound: "data/audio/29.wav" },
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

