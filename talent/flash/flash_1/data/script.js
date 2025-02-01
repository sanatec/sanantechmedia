const flashcards = [
       { question: " اردو زبان کی پیدائش کہاں ہوئی ؟  ", answer: "          ہندوستان" },  
      { question: " لفظ ہندوستان میں کتنے حروف ہیں ؟ ", answer: "      آٹھ 8" },
      { question: " ہندوستانی ترنگا جھنڈا کا اوپر کا رنگ کیا ہے؟      ", answer: "زعفرانی" },
      { question: "کوّا کا رنگ کالا ہے تو توتے کا رنگ کیا ہے ؟", answer: "ہرا" },
      { question: "اردو زبان کسی طرف سے لکھی جاتی ہے؟", answer: "دائیں طرف سے" },
      { question: " لفظ   اردو  کا معنى کیا ہے ؟", answer: "لشكر / فوج" },
      { question: "  لفظ اردو کس زبان کا ہے ؟", answer: "ترکی" },
      { question: " ترانے ہند کسنے لکھا ہے؟  ", answer: "علامہ محمد اقبال" },
      { question: " علامہ اقبال کی پیداش کہاں ہوئی ؟ ", answer: "سیال کوٹ ۔ پنجاب" },
      { question: "   نا مناسب چن کر لکھے ؟ : انگور ، کریلا ، سیب ، انار  ", answer: " کریلا" },
      { question: " پھلوں راجا کون ہے ؟ ", answer: " آم" },
      { question: " پھول کا رانی / راجا کون ہے؟", answer: " گلاب" },
      { question: "میز ...... کتاب ہے؟ :  پر ، سے ،  کو ", answer: " پر" },
      { question: " ہندوستان کے قومی کھیل کون سا ہے؟", answer: "  ہاکی" },
      { question: "ہندوستان کے پہلے وزیرتعلیم کون ہے؟ ", answer: " مولانا ابوالکلام آزاد " },
      { question: "  ہند وستان کے  وزیر اعظم کون ہے؟", answer: "  نریدر مودی" },
      { question: " بال کا رنگ کالا ہے تو دانت کا رنگ کیا ہے؟", answer: "  سفید" },
      { question: "  قومی یوم اردو کب منايا جاتا ہے؟", answer: " فروری 15  " },
      { question: " قومی يوم  اردو کس کے یاد میں منایا جاتا ہے؟  ", answer: "  مرزا اسد الله خان غالب" },
      { question: " عالمی یوم اردو کب منایا جاتا ہے ؟", answer: "  نومبر ۹" },
      { question: "عالمی یوم اردو کس کے یاد میں منایا جاتا ہے ؟ ", answer: "  علامہ محمد اقبال" },
      { question: " بابائے اردو كون ہے؟  ", answer: "  ڈاکٹر مولوی عبد الحق" },
      { question: " بابائے قوم کون ہے؟", answer: "مہاتما گاندھی" },
      { question: "لال قلعہ کہاں واقع ہے؟ ", answer: "  دہلی " },
      { question: "  لال قلعہ کس نے بنایا ؟ ", answer: "  شاہ جہاں" },
      { question: "  تاج محل کس نے بنایا ؟", answer: "  شاہ جہاں" },
      { question: "تاج محل کس ندی کے کنارے واقع ہے ؟ ", answer: "  جمنا " },
      { question: " بالِ جبريل اور بانگ درا کس کا کتاب ہے؟ ", answer: "  علامہ محمد اقبال" },
      { question: " آج جمعہ ہے تو کل کونسا دن ہے ؟ ", answer: " سنیچر / ہفتہ" },
      { question: " شاعر مشرق کون ہے ؟ ", answer: "  ڈاکٹر علامہ محمد اقبال" },
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

