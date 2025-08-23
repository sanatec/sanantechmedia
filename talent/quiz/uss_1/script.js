const questions = [
    {
        question: "ہمارے وطن کا نام کیا ہے؟",
        options: ["کیرلا", "ہندوستان", "راجھستان", "دہلی"],
        correct: 1,
    },
    {
        question: "ناریل کے پیڑ کے نام سے مشہور ہے؟",
        options: ["بنگال", "گجرات", "کیرلا", "دہلی"],
        correct: 2,
    },
    {
        question: "لفظ نیاری کا ہم آواز لفظ ہے؟",
        options: ["ہریالی", "پیاری", "کیسی", "حالی"],
        correct: 1,
    },
    {
        question: "گروہ سے نا مناسب چن کر لکھیے۔",
        options: ["کاجو", "ناریل", "سپاری", "کھجور"],
        correct: 3,
    },
    {
        question: "کیرلا کی ایک ندی ہے؟",
        options: ["گنگا", "جمنا", "پریار", "کاویری"],
        correct: 2,
    },
    {
        question: "کیرلا کے ریاستی پرندہ کون سا ہے؟",
        options: ["کبوتر", "پپیہا", "مرغا", "بکرا"],
        correct: 1,
    },
    {
        question: "کیرلا کے ایک فن کے نام چن لیجیے؟",
        options: ["کتھا کلی", "کچی پڑی", "اوڈیسی", "موہنیاٹم"],
        correct: 0,
    },
    {
        question: "ان میں رنگوں کا تہوار کون سا ہے؟",
        options: ["عید", "ہولی", "دیوالی", "اونم"],
        correct: 1,
    },
    {
        question: "ایک کلو سونا پاپڑی کا دام ایک سو پچاس ہے تو دو کلو کے لیے کتنے ہیں؟",
        options: ["دو سو", "دو سو پچاس", "تین سو", "تین سو پچاس"],
        correct: 2,
    },
    {
        question: "یومِ جمہوریہ جشن کے موقع پر وزیرِ اعظم کہاں ترنگا جھنڈا لہراتے ہیں؟",
        options: ["تاج محل", "لال قلعہ", "چار مینار", "آگرہ قلعہ"],
        correct: 1,
    },
    {
        question: "جھانسی کی رانی کا اصل نام کیا ہے؟",
        options: ["پتھلی بھائی", "سروجنی نائڈو", "منی کرنکا", "بی اماں"],
        correct: 2,
    },
    {
        question: "ہماری قومی جانور کون سا ہے؟",
        options: ["ہاتھی", "بھالو", "باگھ", "چیتا"],
        correct: 2,
    },
    {
        question: "مشہور نعرہ انقلاب زندہ باد کا بانی کون ہے؟",
        options: ["علامہ اقبال", "حسرت موہانی", "بھگت سنگھ", "گاندھی جی"],
        correct: 1,
    },
    {
        question: "نیتاجی کے نام سے کون مشہور ہیں؟",
        options: ["مرزا غالب", "جھانسی رانی", "ابوالکلام آزاد", "سبھاش چندر بوس"],
        correct: 3,
    },
    {
        question: "ہمارے قومی جھنڈا کس نے بنائے؟",
        options: ["پنگلی وینگیّ", "گاندھی جی", "جواہر لال نہرو", "ابوالکلام آزاد"],
        correct: 0,
    },
    {
        question: "گروہ میں قومی نشانیات نہیں ہے؟",
        options: ["آم", "باگھ", "کنول", "کٹہل"],
        correct: 3,
    },
    {
        question: "دنیا کا سب سے بڑا پھل کون سا ہے؟",
        options: ["آم", "انار", "کٹہل", "اننّاس"],
        correct: 2,
    },
    {
        question: "خدا کی اپنی بستی کے نام سے مشہور ہے؟",
        options: ["تامل ناڈو", "کرناٹک", "کیرلا", "کاشمیر"],
        correct: 2,
    },
    {
        question: "ہندوستاں ہے ہمارا وطن۔ یہ شعر کا شاعر کون ہے؟",
        options: ["برج نرائن چکبست", "میر", "جگر", "جوش"],
        correct: 0,
    },
    {
        question: "ہمارے قومی پرندہ کون سا ہے؟",
        options: ["مور", "مرغی", "کبوتر", "الوّ"],
        correct: 0,
    },
    {
        question: "14 / نومبر کی خصوصیت ہے؟",
        options: ["یومِ آزادی", "یومِ جمہوریہ", "یومِ اطفال", "یومِ تعلیم"],
        correct: 2,
    },
    {
        question: "19 / جون کی خصوصیت ہے؟",
        options: ["یومِ آزادی", "یومِ جمہوریہ", "یومِ ماحولیات", "یومِ مطالعہ"],
        correct: 3,
    },
    {
        question: "15 / اگست کی خصوصیت ہے؟",
        options: ["یومِ آزادی", "یومِ جمہوریہ", "یومِ آب", "یومِ اطفال"],
        correct: 0,
    },
    {
        question: "26 / جنوری کی خصوصیت ہے؟",
        options: ["یومِ آزادی", "یومِ جمہوریہ", "یومِ اطفال", "یومِ پیدائش"],
        correct: 1,
    },
    {
        question: "30 / جنوری کی خصوصیت ہے؟",
        options: ["یومِ شہادت", "یومِ جمہوریہ", "یومِ اطفال", "یومِ پیدائش"],
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
    confetti({
        particleCount: 200,
        spread: 90,
        origin: { y: 0.6 },
        colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'],
        shapes: ['star', 'circle'],
        scalar: 1.2
    });
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
