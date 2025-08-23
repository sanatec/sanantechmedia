const questions = [
   {
        question: "'عالمی        یومِ    اردو  '   کب  مناتا   ہے   ؟ ",
        options: ["نومبر9", "جانوری 26", "اکتوبر2", "فروری15 "],
        correct: 0,
      },{
        question: "محبت    کا   مترادف  لفظ     چن کر   لکھیے ",
        options: ["دشمن", "پیار", "رحم", "دوستی"],
        correct: 1,
      },
{
        question: "کونسا  املا   صحیح    ہے   ؟ ",
        options: ["صفائی", "صفاہی", "صفایی", "سفائ"],
        correct: 0,
      },
{
        question: "ان  میں   سے   موسیقی   آلہ  چن    کر       لکھیے    ",
        options: ["چاکو", "چمچ", "طبلہ", "تلوار"],
        correct: 2,
      },
{
        question: "تم شہر سے کیالائے ہو؟۔یہاں سوالیہ لفظ کونسہ ہے؟ ",
        options: ["شہر", "لایا", "تم", "کیا"],
        correct: 3,
      },
{
        question: "تلاشِ  حق  کس   کی تخلیق  ہے   ؟ ",
        options: ["گاندھی جی", "نہرو", "عبد الکلام", "اقبال"],
        correct: 0,
      },
{
        question: "ہندوستان  کا  قومی  گیت     کس نے  لکھا؟ ",
        options: ["ربیندھر ناتھ   ٹیگور", "علّا ّمہ    محمّد  اقبال", "جوہرلال    نہرو", "آزاد"],
        correct: 0,
      },
{
        question: "تم  کون ",
        options: ["ہو", "ہے", "ہیں", "ہوں"],
        correct: 0,
      },
{
        question: " لال قلعہ کہاں ہے؟",
        options: ["دہلی", "ممبئی", "کلکتہ", "حیدرآباد"],
        correct: 0,
      },
{
        question: "آخری  مغل  بادشاہ          اردو          کے     بہت         بڑے      شاعر     بھی       تھے    ۔      ان کا نام    کیا  ہے     ؟ ",
        options: ["اکبر", "بابر", "شاہ جہان", "بہادرشاہ ظفر"],
        correct: 3,
      },
{
        question: "لفظ  'کامیاب '   کا مترادف    لفظ      چن کر لکھیے۔ ",
        options: ["ہار", "جیت", "مایوس", "دکھ"],
        correct: 1,
      },
{
        question: "ان میں  سے      اردو    اخبار           کونسا     ہے        ؟ ",
        options: ["ایکسپرس", "دیشابھی مانی", "دی ہندو", "اعتماد"],
        correct: 3,
      },
{
        question: "کمیپوٹر  کا  دماغ  کسے کہا جاتاہے   ؟ ",
        options: ["کی بورڑ", "مونیٹر", "سی پی یو", "اسپیکر"],
        correct: 2,
      },
{
        question: "لفظ   مجھے   الگ  کر کی   لکھیے   ۔ ",
        options: ["میں+کا", "میں+سے", "میں+کے", "میں+کو"],
        correct: 2,
      },
{
        question: "کیرلا  کا  ریاستی پھل  کونسا ہے  ؟ ",
        options: ["آم", "ناریل", "امرود", "کٹہل"],
        correct: 3,
      },
{
        question: "جانور کونسا ہے ؟ ",
        options: ["ہاتھ", "باتھ", "باگھ", "ساتھ"],
        correct: 2,
      },
{
        question: "صحت----راحت   ہے   ۔ ",
        options: ["میں", "کا", "نے", "پر"],
        correct: 0,
      },
{
        question: "ان   میں   سے ا یک       کو     پانی    سے     تعلق        نہیں ہے   ۔ ",
        options: ["ساگر", "بارش", "چھتری", "کرسی"],
        correct: 3,
      },
{
        question: "قومی   ترانہ      'جنا گنا منا۔۔۔ 'کس     زبان  میں   ہے   ؟ ",
        options: ["مراٹھی", "بنگالی", "گجراتی", "اردو"],
        correct: 1,
      },
{
        question: "واحد   چن   کر  لکھیے    ۔ ",
        options: ["لوگ", "لشکر", "فوج", "قلم"],
        correct: 3,
      },
{
        question: "'مولانا    آزاد   نیشنل  اردو  یونیو  یر سٹی  '  کہا ں    واقع ہے  ؟ ",
        options: ["دہلی", "حیدر آباد", "الہ آباد", "کشمیر"],
        correct: 1,
      },
{
        question: "پہلا  ،   دوسرا،        تیسرا   ",
        options: ["پا نچواں", "چوتھا", "سوا  چار", "چیسرا"],
        correct: 1,
      },
{
        question: "کسکا جنم دن ہے نومبر 11 ",
        options: ["گاندھی جی", "نہرو", "ابول کلام آزاد", "سبھاش چندر بوس"],
        correct: 2,
      },
{
        question: "ماں    کی    قدمو ں    کے  نیچے   -----     ہے   ؟  ",
        options: ["محنت", "قدرت", "صحت", "جنّت"],
        correct: 3,
      },
{
        question: "امی بچوں   کو    -----  پلاتی       ہے     ۔ ",
        options: ["دودھ", "گیت", "کہانی", "لوری"],
        correct: 0,
      },
 
];

let currentQuestion = 0;
let correctAnswers = 0;
let userAnswers = new Array(questions.length).fill(-1); // Track user selections

const correctSound = document.getElementById("correct-sound");
const incorrectSound = document.getElementById("incorrect-sound");
const backButton = document.getElementById("back");
const nextButton = document.getElementById("next");

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsContainer = document.getElementById("options");

    questionElement.textContent = questions[currentQuestion].question;
    optionsContainer.innerHTML = "";

    questions[currentQuestion].options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(index, button);
        optionsContainer.appendChild(button);

        // If already answered, highlight accordingly
        if (userAnswers[currentQuestion] !== -1) {
            button.disabled = true;
            if (index === questions[currentQuestion].correct) {
                button.classList.add("correct");
            }
            if (index === userAnswers[currentQuestion] && index !== questions[currentQuestion].correct) {
                button.classList.add("wrong");
            }
        }
    });

    // Update navigation buttons
    backButton.disabled = currentQuestion === 0;
    nextButton.disabled = userAnswers[currentQuestion] === -1 && currentQuestion < questions.length - 1;
    if (currentQuestion === questions.length - 1 && userAnswers[currentQuestion] !== -1) {
        nextButton.textContent = "Finish";
    } else {
        nextButton.textContent = "Next";
    }
}

function checkAnswer(selectedIndex, selectedButton) {
    if (userAnswers[currentQuestion] !== -1) return; // Already answered

    const correctIndex = questions[currentQuestion].correct;
    const buttons = document.querySelectorAll(".options button");

    userAnswers[currentQuestion] = selectedIndex;

    // Highlight correct answer always
    buttons[correctIndex].classList.add("correct");

    if (selectedIndex === correctIndex) {
        correctAnswers++;
        document.getElementById("score").textContent = correctAnswers;
        correctSound.play();
        showConfetti();
    } else {
        selectedButton.classList.add("wrong");
        incorrectSound.play();
    }

    // Disable all buttons
    buttons.forEach((button) => (button.disabled = true));

    // Enable next button
    nextButton.disabled = false;
}

function showConfetti() {
    const colors = ['#f00', '#0f0', '#00f', '#ff0', '#f0f', '#0ff'];
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
        confetti.style.opacity = Math.random() + 0.5;
        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }
}

backButton.onclick = () => {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
};

nextButton.onclick = () => {
    if (userAnswers[currentQuestion] === -1) return; // Not answered yet

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        showResults();
    }
};

function showResults() {
    const modal = document.getElementById("results-modal");
    const correctBar = document.getElementById("correct-bar");
    const incorrectBar = document.getElementById("incorrect-bar");
    const correctCount = document.getElementById("correct-count");
    const incorrectCount = document.getElementById("incorrect-count");
    const resultsMessage = document.getElementById("results-message");

    const totalQuestions = questions.length;
    const incorrectAnswers = totalQuestions - correctAnswers;

    correctCount.textContent = correctAnswers;
    incorrectCount.textContent = incorrectAnswers;

    correctBar.style.width = `${(correctAnswers / totalQuestions) * 100}%`;
    incorrectBar.style.width = `${(incorrectAnswers / totalQuestions) * 100}%`;

    if (correctAnswers === totalQuestions) {
        resultsMessage.textContent = "Congratulations! You answered all questions correctly!";
    } else {
        resultsMessage.textContent = "Try Again!";
    }

    modal.style.display = "flex";
}

function showReview() {
    const reviewQuestions = document.getElementById("review-questions");
    reviewQuestions.innerHTML = "";

    questions.forEach((q, idx) => {
        const reviewDiv = document.createElement("div");
        reviewDiv.className = "review-question";

        const questionH3 = document.createElement("h3");
        questionH3.textContent = `${idx + 1}. ${q.question}`;
        reviewDiv.appendChild(questionH3);

        const optionsDiv = document.createElement("div");
        optionsDiv.className = "review-options";

        q.options.forEach((option, optIdx) => {
            const button = document.createElement("button");
            button.textContent = option;
            button.disabled = true;

            if (optIdx === q.correct) {
                button.classList.add("correct");
            }
            if (optIdx === userAnswers[idx] && optIdx !== q.correct) {
                button.classList.add("wrong");
            } else if (optIdx === userAnswers[idx]) {
                button.classList.add("correct"); // If correct, already added
            }

            optionsDiv.appendChild(button);
        });

        reviewDiv.appendChild(optionsDiv);
        reviewQuestions.appendChild(reviewDiv);
    });

    document.getElementById("review-modal").style.display = "flex";
}

function closeReview() {
    document.getElementById("review-modal").style.display = "none";
}

function restartQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    userAnswers.fill(-1);
    document.getElementById("score").textContent = correctAnswers;
    document.getElementById("results-modal").style.display = "none";
    loadQuestion();
}

// Load the first question
loadQuestion();
