const flashcards = [
      { question: " کیرلا کے مشہور اردو شاعر کون ہے؟ ", answer: "  ایس ۔ ایم ۔ سرور" },
      { question: " ہند کی انگشتری کا ہے نگینہ کیرلا .... یہ نظم کس نے لکھا ؟  ", answer: "ایس ۔ ایم ۔ سرور" },
      { question: "سرور صاحب کے اصلی نام کیا ہے؟  ", answer: "  سید محمد سرور" },
      { question: " سرور صاحب کہاں پیدا ہوئے ؟ ", answer: "ترشور ۔ کاٹور" },
      { question: " سرور صاحب کا مجموعہ کلام كون كون ہے؟", answer: " ارمغان کیرلا ۔ نوائے سرور" },
      { question: " سرور صاحب کہاں وفات پائی؟", answer: " ملا پرم منڈم پر مپا" },
      { question: "کیرلا کے مشہور اردو ناول نگار کون ہے؟ ", answer: " زلیخا حسین" },
      { question: " مرچ کا مزہ کٹوا ہے تو حلوہ کامزہ کیا ہے؟", answer: " میٹھا " },
      { question: "  کوا   کائیں ۔ کائیں کہتا ہے تو بلی کیا کہتی ہے ؟", answer: " میاؤں میاؤں" },
      { question: "پانی پیتا ہے تو کھانا ...... ہے؟ ", answer: " کھاتا ہے" },
      { question: " بیس اور بیس کتنا ہے؟ ", answer: "چالیس" },
      { question: "  دس اور دس کتنا ہے؟ ", answer: " بیس" },
      { question: " کیرلا کے پہلے وزير اعلى كون ہے؟", answer: "ای۔ ایم ۔ ایس نمبوتر پاڑ" },
      { question: "کیرلا کے پہلے وزير تعليم كون ہے؟ ", answer: " جوزف میڈ شیری" },
      { question: " ہندوستان کے پہلے وزير اعظم كون ہے؟", answer: " جوہر لال نہرو" },
      { question: "  ہندوستان کے پہلے صدر جمعوریہ كون ہے؟", answer: " ڈاکٹر راجیدر پرساد" },
      { question: "کیرلا کےریاستی جانور کونسا ہے؟ ", answer: " ہاتھی" },
      { question: "ہندوستان کے قومی جانور کونسا ہے؟ ", answer: " باگھ" },
      { question: " ہندوستان کے قومی پھول کونسا ہے؟", answer: " کنول" },
      { question: "  ہندوستان کے قومی پھل کونسا ہے؟", answer: " آم" },
      { question: " ہندوستان کے قومی پرنده کونسا ہے؟ ", answer: " مور" },
      { question: "  ہندوستان کے قومی پیڑ کونسا ہے؟", answer: " پیپل" },
      { question: " کیرلا کے ریاستی پیڑ کون سا ہے؟ ", answer: "ناريل کا پیڑ" },
      { question: " کیرلا کے ریاستی پھل کون سا ہے؟ ", answer: " کٹہل" },
      { question: " کیرلا کے ریاستی پھول کون سا ہے؟", answer: " کنی کونا / امل تاس" },
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

