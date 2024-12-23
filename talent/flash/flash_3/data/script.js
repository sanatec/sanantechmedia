const flashcards = [
      { question: "کیرلا کے ریاستی کھیل کون سا ہے؟ ", answer: " کبڑی" },
      { question: " اقبال کا پورا نام کیا ہے؟", answer: " ڈاکٹر سر علامہ محمد اقبال" },
      { question: "غالب کا پورا نام کیا ہے؟ ", answer: " مرزا اسد اللہ خان غالب" },
      { question: "میر کا پورا نام کیا ہے؟ ", answer: " میرتقی میر" },
      { question: " علی گڑ مسلم یونیورسٹی کس نے قائم کیا ؟ ", answer: " سرسید احمد خان" },
      { question: " خدائے سخن كون ہے؟ ", answer: " میرتقی میر" },
      { question: " اردو کے شيكسپیر کون ہے ؟ ", answer: " آغا حشر کاشمیری" },
      { question: "  اردو غزل کا بادشاہ کون ہے ؟", answer: " مرزا غالب" },
      { question: "  اردو عزل کا شہنشاہ کون ہے ؟", answer: " میر تقی میر" },
      { question: "  اردو کے ایک حرف سے کوئی لفظ کا شروع نہیں ہوتا۔ وہ حرف کونسا ہے؟", answer: "ڑ" },
      { question: "پہلا ، دوسرا ", answer: " تیسرا" },
      { question: " ہم كان سے سنتے ہے تو کس سے دیکھتے ہیں ؟", answer: " آنکھ سے" },
      { question: "  وطن      کا ہم آواز لفظ ؟ زبان ، کسان ، گمان ، چمن", answer: "" },
      { question: "کبوتر کی آواز  غڑغوں غڑغوں ہے تو توتے کی آواز کیا ہے؟ ", answer: "ٹین ٹین" },
      { question: "ریل گاڑی کے آواز چک چک ہے تو  گائے کا آواز کیا ہے؟ ", answer: " امبا ۔ امبا" },
      { question: "  خدا کی اپنی بستی  کس ریاست کو کہا جاتا ہے؟", answer: " کیرلا" },
      { question: "  دس ، بیس ، تیس ", answer: " چالیس" },
      { question: " ہفتہ کے بعد کونسا دن آتا ہے؟ ", answer: " اتوار" },
      { question: "بارش کا آواز کون سا ہے ؟", answer: "رم جھم ۔ رم جھم" },
      { question: " ۔ مرغا کا آواز کیا ہے؟", answer: "  ککڑوں کوں ۔ ککڑوں کوں" },
      { question: "  میں اسکول ...جاتا ہے ، جاتی ہے ، جا تے ہیں ، جاتا ہوں ", answer: " جاتا ہوں" },
      { question: " يوم اسا تذہ کب منايا جاتا ہے  ", answer: " ستمبر ۵" },
      { question: "  يوم تعلیم کب منایا جاتا ہے؟", answer: " نومبر ۱۱" },
      { question: "يوم اسا تذہ کس کے یاد میں منایا جاتا ہے ؟ ", answer: " ایس ۔ رادا کرشن" },
      { question: "يوم تعلیم کس کے یاد میں منایا جاتا ہے ؟ ", answer: " مولانا ابو الکلام آزاد" },
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

