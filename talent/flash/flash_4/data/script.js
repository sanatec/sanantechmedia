const flashcards = [
      { question: "  يوم اطفال کس کے یاد میں منایا جاتا ہے ؟ ", answer: " جوہر لال نہرو  " },
      { question: " يوم ماحولیات کب منایا جاتا ہے ؟ ", answer: "  جون ۵ " },
      { question: "  يوم مطالعہ کب منایا جاتا ہے ؟ ", answer: "  جون ۱۹ " },
      { question: "  يوم مطالعہ کس کے یاد میں منایا جاتا ہے ؟ ", answer: "  پی ۔ اين ۔ پنکر " },
      { question: "  اردو کے پہلے شاعر کون ہے ؟ ", answer: "  امیر خسرو " },
      { question: "  ہندوستان کے قومی گیت کس نے لکھا ؟ ", answer: "  ربیدر ناتھ ٹیگور " },
      { question: " قومی گیت جن گن من  کس زبان میں لکھا گیا ؟  ", answer: "بنگالی  " },
      { question: " رنگون میں جلا وطن کردیا گیا مغل بادشاہ کون ہے ؟ ", answer: " بہادورشاہ طفر  " },
      { question: "آزادی کے دن وزیر اعظم کہاں ترنگہ جھنڈا لہراتے ہیں ؟  ", answer: " لال قلعہ میں  " },
      { question: " دلی مسجد کس مغل بادشاہ نے بنوایا ؟  ", answer: " شاہ جہاں نے  " },
      { question: " تاج محل شاه جہاں نے کس کے یاد میں بنوایا ؟  ", answer: " ممتاز بیگم کے یاد میں " },
      { question: " يوم آزادی کب منایا جاتا ہے؟  ", answer: "اگست ۱۵  " },
      { question: " ڈاکٹر آسپتال میں کام کرتا ہے تو کسان کہاں کام کرتا ہے؟  ", answer: " کھیت میں  " },
      { question: "  دن کا ضد  رات ہے تو  دائیں ... کیا ہے؟ ", answer: "بائیں  " },
      { question: " سر پر ..... ہے؟  ", answer: " ٹوپی " },
      { question: "  صبح کا ضد کیا ہے ؟ ", answer: " شام " },
      { question: "  اردو زبان کو     اردوئے معلیٰ  نام کس نے دیا ؟ ", answer: " مغل بادشاہ شاہ جہاں نے  " },
      { question: " اردو كے دوسرے نام کیا کیا ہے؟  ", answer: " اردوئے معلیٰ ، ہندی ، ہندوی ، ہندوستانی  " },
      { question: " میرزا غالب کہاں پیدا ہوئے ؟  ", answer: " آگره  " },
      { question: " میرتقی میر کہاں پیدا ہوئے ؟ ", answer: " آگره  " },
      { question: " ۔ سرور صاحب کس سال میں پیدا کیا ؟ ", answer: "  جون ۱۹۱۶ء میں 1916 " },
      { question: "  اردو کے مشہور خطوط نگار کون ہے؟  ", answer: " میرزا غالب  " },
      { question: " اردو کا پہلا صاحب دیوان شاعر کون ہے ؟  ", answer: "  محمد قلى قطب شاہ " },
      { question: " بیسوین صدی کے مشہور اردو شاعر کون ہے ؟ ", answer: " علامہ اقبال  " },
      { question: "  ' اردو'  لفظ میں کتنے حروف ہے؟ ", answer: "  چار ۔ ۴ " },
];

let currentCard = 0;
// Update the flashcard content
function updateCard() {
  document.getElementById("question").textContent = flashcards[currentCard].question;
  document.getElementById("answer").textContent = flashcards[currentCard].answer;

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

