const flashcards = [
{ question: "data/images/1.jpg", answer: "بھالو",sound: "data/audio/1.wav" },
{ question: "data/images/2.jpg", answer: "بیل",sound: "data/audio/2.wav" },
{ question: "data/images/3.jpg", answer: "اونٹ",sound: "data/audio/3.wav" },
{ question: "data/images/4.jpg", answer: "بلّی",sound: "data/audio/4.wav" },
{ question: "data/images/5.jpg", answer: "گائے",sound: "data/audio/5.wav" },
{ question: "data/images/6.jpg", answer: "مگر مچھ",sound: "data/audio/6.wav" },
{ question: "data/images/7.jpg", answer: "ہرن",sound: "data/audio/7.wav" },
{ question: "data/images/8.jpg", answer: "کتّا",sound: "data/audio/8.wav" },
{ question: "data/images/9.jpg", answer: "گدھا",sound: "data/audio/9.wav" },
{ question: "data/images/10.jpg", answer: "ہاتھی",sound: "data/audio/10.wav" },
{ question: "data/images/11.jpg", answer: "لومڑی",sound: "data/audio/11.wav" },
{ question: "data/images/12.jpg", answer: "زراف",sound: "data/audio/12.wav" },
{ question: "data/images/13.jpg", answer: "بکری",sound: "data/audio/13.wav" },
{ question: "data/images/14.jpg", answer: "گوریلا",sound: "data/audio/14.wav" },
{ question: "data/images/15.jpg", answer: "دریائی گھوڑا",sound: "data/audio/15.wav" },
{ question: "data/images/16.jpg", answer: "گھوڑا",sound: "data/audio/16.wav" },
{ question: "data/images/17.jpg", answer: "کینگرو",sound: "data/audio/17.wav" },
{ question: "data/images/18.jpg", answer: "چیتا",sound: "data/audio/18.wav" },
{ question: "data/images/19.jpg", answer: "شیر",sound: "data/audio/19.wav" },
{ question: "data/images/20.jpg", answer: "نیولا",sound: "data/audio/20.wav" },
{ question: "data/images/21.jpg", answer: "بندر",sound: "data/audio/21.wav" },
{ question: "data/images/22.jpg", answer: "پانڈا",sound: "data/audio/22.wav" },
{ question: "data/images/23.jpg", answer: "سور",sound: "data/audio/23.wav" },
{ question: "data/images/24.jpg", answer: "خرگوش",sound: "data/audio/24.wav" },
{ question: "data/images/25.jpg", answer: "چوہا",sound: "data/audio/25.wav" },
{ question: "data/images/26.jpg", answer: "گینڈا",sound: "data/audio/26.wav" },
{ question: "data/images/27.jpg", answer: "گلہری",sound: "data/audio/27.wav" },
{ question: "data/images/28.jpg", answer: "بارہ سنگا",sound: "data/audio/28.wav" },
{ question: "data/images/29.jpg", answer: "باگھ",sound: "data/audio/29.wav" },
{ question: "data/images/30.jpg", answer: "کچھوا",sound: "data/audio/30.wav" },
{ question: "data/images/31.jpg", answer: "بھیڑیا",sound: "data/audio/31.wav" },
{ question: "data/images/32.jpg", answer: "زیبرا",sound: "data/audio/32.wav" },
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

