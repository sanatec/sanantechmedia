const flashcards = [
      { question: " ہندوستان میں کتنے ریاست ہے؟ ", answer: "  اٹھائیس " },
      { question: "    جب وه بولے ککڑوں کوں ۔ بھوکا ہوں میں بھوکا ہوں ۔ ڈربہ کھولو باہر آؤں ۔ باہر آؤں دانہ کھاؤں ۔  میں کون ہوں؟ ", answer: "   مرغی  " },
      { question: "  بارش کا آواز ", answer: "   رم جھم  رم جھم " },
      { question: " گاندجی کی والده کا نام کیا ہے؟  ", answer: " پتلی بھائی  " },
      { question: " گاندجی کے والد / ابا کا نام کیا ہے؟  ", answer: "  کرم چند گاندھی  " },
      { question: "  گاندجی کی بیوی کا نام کیا ہے؟ ", answer: "   کستوربا گاندھی " },
      { question: "  گاندجی  کا پورا / اصلی نام کیا ہے؟ ", answer: "   موہن داس کرم چند گاندھی " },
      { question: "گائے ہم کو ..... دیتے ہیں ؟  ", answer: "   دودھ " },
      { question: "  چار منار کہاں ہے ؟ ", answer: "  حیدر آباد  " },
      { question: " کیرلا گاندھی کے نام سے کون مشہور ہیں ؟  ", answer: "   کے کيلپن " },
      { question: "  بھولی بھالی صورت ہے۔ ممتا کر وہ مورت ہے۔ گھر آنگن آباد کرے ۔ دودھ دہی سے شاد کرے ۔   میں کون ہوں ؟", answer: "  گائے  " },
      { question: "  ایک سال میں کتنے مہینے ہیں؟ ", answer: "    باره ۔  ۱۲  " },
      { question: " یہ میرے ابا ہے ۔   ابا کے جگہ امی  بدل کر لکھیے ؟ ", answer: "  یہ میری امی ہے ۔  " },
      { question: " حرکت میں وہ تو رہتی ۔ دیوار پر ہے بیٹھی ۔ روٹی کا ایک ٹکڑا ۔ پنجوں میں اس نے پکڑا ۔  میں کون ہوں؟؟ ", answer: "  گلہری  " },
      { question: " چل کے اندر ریشے ۔ ریشے کے اندر چڑان ۔ چڑان کے اندر مجا ۔ مجا کے اندر پانی ۔   بولو میں کون ہوں؟  ", answer: " ناريل  " },
      { question: "  ترنگا جھنڈا کے نیچے کا رنگ کیا ہے؟ ", answer: "  ہرا" },
      { question: "  ترنگا جھنڈا کو یہ نام کیوں کہتے ہیں ؟ ", answer: " تین رنگ ہونے سے  " },
      { question: " مینڈک کی آواز ", answer: "  ٹر ٹر  ٹر ٹر  " },
      { question: "  مولانا ابو الکلام آزاد کہاں پیدا ہوئے ؟ ", answer: "   مکہ میں " },
      { question: "  ایک ، دو ، تین ، ..... پانچ ", answer: "   چار " },
      { question: "وطن  کا دوسرا نام / مترادف الفاظ  کیا کیا ہے؟  ", answer: " ملک ، دیس ۔ " },
      { question: "  میں ایک ڈاکٹر  ", answer: "   ہوں " },
      { question: "مرچ ، چاول ، بھنڈی     نامناسب كون ہے؟  ", answer: "  چاول " },
      { question: " ٹیلی فون  ........ کرتی ہے ؟   ", answer: " ٹرین  ٹرین  " },
      { question: "  وه شیر کی خالا ہے ۔ چوہا اس کی نوالا ہے۔ اسکو کس کا کب ہے ڈر ۔ ہر گھر کو سمجھے اپنا گھر ۔ ", answer: "   بلی " },
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

