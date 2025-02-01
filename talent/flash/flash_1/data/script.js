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
const flashcardInner = document.getElementById("flashcard-inner");
const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const flipSound = document.getElementById("flipSound");

// Function to update flashcard content
function updateCard() {
    questionElement.textContent = flashcards[currentCard].question;
    answerElement.textContent = flashcards[currentCard].answer;

    prevBtn.disabled = currentCard === 0;
    nextBtn.disabled = currentCard === flashcards.length - 1;

    flashcardInner.style.transform = ""; // Reset flip state
}

// Function to flip card
function flipCard() {
    flipSound.play().catch(err => console.log("Audio play blocked:", err));
    flashcardInner.style.transform = (flashcardInner.style.transform === "rotateY(180deg)") ? "" : "rotateY(180deg)";
}

// Function for next card
function nextCard() {
    if (currentCard < flashcards.length - 1) {
        currentCard++;
        updateCard();
    }
}

// Function for previous card
function prevCard() {
    if (currentCard > 0) {
        currentCard--;
        updateCard();
    }
}

// Add event listeners for clicks & touch support
document.getElementById("flashcard").addEventListener("click", flipCard);
document.getElementById("flashcard").addEventListener("touchstart", flipCard);
prevBtn.addEventListener("click", prevCard);
nextBtn.addEventListener("click", nextCard);

// Initialize first card
updateCard();

