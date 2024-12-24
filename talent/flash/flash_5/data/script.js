const flashcards = [
      { question: "خط كون لاتا ہے ؟  ", answer: "  ڈاکیہ " },
      { question: "  ڈاکیہ کیا لاتا ہے؟ ", answer: "  خط " },
      { question: "  ہفتہ میں کتنے دن ہے؟ ", answer: "  سات ۔ ۷ " },
      { question: "  مرغی کا بچہ      چوزا     ہے تو گائے کا بچہ کو کیا کہتا ہے ؟ ", answer: " بچڑا   " },
      { question: "  کیرلا کے لمبی ندی کون ہے؟ ", answer: "  پر یار " },
      { question: "  مٹی کے برتن بننے والے کو کیا کہتا ہے؟ ", answer: " کمہار  " },
      { question: " ۔ ہندوستان کر پايا تخت کہاں ہے ؟ ", answer: "  دہلی ۔ دلی  " },
      { question: "  جنگل کی چالاکی جانور کون ہے؟  ", answer: "  لومڑی  " },
      { question: " میرے گھر میں کروٹوں لوگ ہیں۔ یہ کس نے کہا ؟ ", answer: " مہاتما گاندھی   " },
      { question: "  اردو کے پہلا کالج کون ہے ؟ ", answer: "  فورٹ ولیم کالج " },
      { question: " میسور شیر کون ہے ؟ ", answer: "  ڈپو سلطان " },
      { question: "   آداب  لفظ الگ کرکے لکھیے ؟ ", answer: "  ا  ا  د  ا  ب " },
      { question: " طوطا ہرا ہے تو كوا ..؟ ", answer: "  کالا  " },
      { question: " ایک شعر میں کتنے مصره ہے ؟ ", answer: "  دو ۔ ۲ " },
      { question: "  اردو  اکاٹمی  کیرلا میں کدھر اور کہاں ہے؟ ", answer: " کا سرکوٹ ۔ اپلا  " },
      { question: " ہندوستان کے سب سے چھوٹی ریاست کون سا ہے؟ ", answer: "  گووا   " },
      { question: "  تاج محل کس سے بنائی گئی ؟ ", answer: "    سنگ مرمر   " },
      { question: "   شاعر نیر کا پورا نام کیا ہے؟ ", answer: "  محمد شفیع الدين نیر  " },
      { question: " علامہ محمد اقبال کا تخلص    کیا ہے ؟ ", answer: "  اقبال  " },
      { question: "  جگن ناتھ کا تخلص کیا ہے؟ ", answer: "آزاد  ۔ جگن ناتھ آزاد  " },
      { question: "  بس سڑک پر چلتی ہے تو جہاز کہاں سے چلتی ہے ؟ ", answer: " سمندر سے  " },
      { question: "   ریل گاڑی کہاں سے جاتی ہے؟", answer: "  پٹری " },
      { question: "  شاعری لکھنے والے کو کیا کہتے ہیں ؟ ", answer: "  شاعر " },
      { question: "  بچوں نے گاند جی کو کس نام سے پکارتے ہیں ؟ ", answer: " باپوجی  " },
      { question: "۔ بچوں نے جوہر لال نہرو کو کس نام سے پکارتے ہیں ؟  ", answer: "  چاچاجی " },
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

