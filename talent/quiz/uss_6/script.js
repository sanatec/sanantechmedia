const questions = [
 {
        question: "کھیت   سے   متعلقہ    لفظ         کونسا       ہے   ؟ ",
        options: ["دھوبی", "درزی", "سنار", "کسان"],
        correct: 3,
      },{
        question: "دو،	چار،	چھہ ",
        options: ["پانچ", "سات", "آٹھ", "نو"],
        correct: 2,
      },
{
        question: "گڑیا   ------ سے      لائی ہے     ؟ ",
        options: ["کب", "کہاں", "کتنے", "کیا"],
        correct: 1,
      },
{
        question: "کیرلا       کا        ریاستی        پھل       ہے   ؟ ",
        options: ["کیلا", "جامن", "آم", "کٹہل"],
        correct: 3,
      },
{
        question: "بابا ئے          ملیالم       کے نام سے کون مشہور     ہیں    ؟ ",
        options: ["مولوی   عبدالحق", "ولّاتول", "ایژوتچن", "تکژی"],
        correct: 2,
      },
{
        question: " محبت       کا          ضد      کیا    ہے     ؟  ",
        options: ["صحت ", "نفرت", "شدّت", "شربت"],
        correct: 1,
      },
{
        question: "تاج   محل     کس مغل بادشاہ نے بنوایا؟ ",
        options: ["شاہ     جہاں", "اورنگزیب", "اکبر", "بابر"],
        correct: 0,
      },
{
        question: "لفظ اردو           کا     معنیٰ    کیا      ہے   ؟ ",
        options: ["آزادی", "اتحاد", "لشکر", "دماغ"],
        correct: 2,
      },
{
        question: "گروہ سے      نا   مناسب     چن کر     لکھیے   ؟ ",
        options: ["قظب   منار", "جامع مسجد", "لال قلعہ", "برج خلیفہ"],
        correct: 3,
      },
{
        question: "کیرلا      کے     ریاستی     پھول   ---   ہے   ؟ ",
        options: ["کنّول", "چمبا", "کنی کونّا", "گلاب"],
        correct: 2,
      },
{
        question: " مور----   ہے   ؟",
        options: ["ناچتی", "ناچتا", "ناچتے", "ناچنا"],
        correct: 0,
      },
{
        question: "کھیت    کہاں        واقع ہے   ؟ ",
        options: ["بازار", "ساگر", "گاوّں", "سمندر"],
        correct: 2,
      },
{
        question: "صبح    کا      ضد    کونسا      ہے     ؟ ",
        options: ["رات", "سویرے", "دو  پہر", "شام"],
        correct: 3,
      },
{
        question: "یومِ         اطفال      کس کی     یاد     میں     منایاجاتا   ہے   ؟ ",
        options: ["گاندھی جی", "ابولکلام    آزاد", "جواہرلال نہرو", "سبھاش چندر بوس"],
        correct: 2,
      },
{
        question: " چاچاجی   کا     اصلی    نام    کیا      ہے   ؟",
        options: ["مہاتما گاندھی", "جواہرلال نہرو", "ابوالکلام    آزاد", "اندرا  گاندھی"],
        correct: 1,
      },
{
        question: "ان میں     سے   اردو   کے   مشہور     ادیب     کون  ہے    ؟ ",
        options: ["بھگت سنکھ", "مہاتما گاندھی", " جواہرلال نہرو", " ابوالکلام    آزاد"],
        correct: 3,
      },
{
        question: "ہمارے   بابائے  قوم     کہاں    پیدا  ہوئی؟ ",
        options: ["گجرات ", "کیرلا", "دہلی", "کلکتہ"],
        correct: 0,
      },
{
        question: "چھتری  سے      تعلق   رکھنے    والا    لفظ  کونسا  ہے  ؟ ",
        options: ["بارش", "خوائش", "تلاش", "کوشش"],
        correct: 0,
      },
{
        question: "ہندوستان    میں      کتنی ریاستیں          ہیں    ؟ ",
        options: ["ستائیس", "چھتیس", "اٹھائیس", "         انتیس"],
        correct: 2,
      },
{
        question: "ردو   کی   حروفِ      تہجی    میں   کتنے     حروف      ہیں     ؟ ",
        options: ["35", "30", "28", "36"],
        correct: 0,
      },
{
        question: "ہم      -------   سے      چلتے     ہیں      ؟ ",
        options: ["ناک", "کان", "ہاتھ", "پاؤں"],
        correct: 3,
      },
{
        question: "صحت قائم     کرنے   کے  لیے     ----  ضروری     ہے؟ ",
        options: ["علم", "نفرت", "ورزش", "عظمت"],
        correct: 2,
      },
{
        question: "دھنک  کے دوسرا  رنگ   کونسا   ہے     ؟ ",
        options: ["ہرا", "اودا", "پیلا", "نیلا"],
        correct: 1,
      },
{
        question: "ان  میں    پھول  کی   رانی      کون  ہے  ؟ ",
        options: ["مور", "کوّا", "گلاب", "کوئل"],
        correct: 2,
      },
{
        question: " عورت         کا    مذکر لفظ     کونسا ہے       ؟",
        options: ["درد", "مرد", "دادی     ", "نانی"],
        correct: 1,
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
