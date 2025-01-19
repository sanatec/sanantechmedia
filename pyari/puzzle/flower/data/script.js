const questions = [
{ imagePath: "data/images/1.jpg", answer: ["گ","ل","ا","ب"] },
{ imagePath: "data/images/2.jpg", answer: ["ک","ن","و","ل"] },
{ imagePath: "data/images/3.jpg", answer: ["چ","م","پ","ا"] },
{ imagePath: "data/images/4.jpg", answer: ["چ","م","ی","ل","ی"] },
{ imagePath: "data/images/5.jpg", answer: ["گ","ڈ","ہ","ا","ل"] },
{ imagePath: "data/images/6.jpg", answer: ["ا","ش","ن","ھ"] },
{ imagePath: "data/images/7.jpg", answer: ["ب","ن","ف","ش","ہ"] },
{ imagePath: "data/images/8.jpg", answer: ["ج","ن","گ","ل","ی","س","ن","ب","ل"] },
{ imagePath: "data/images/9.jpg", answer: ["ر","ا","ت","ک","ی","ر","ا","ن","ی"] },
{ imagePath: "data/images/10.jpg", answer: ["ز","غ","ف","ر","ا","ن"] },
{ imagePath: "data/images/11.jpg", answer: ["س","د","ا","ب","ہ","ا","ر"] },
{ imagePath: "data/images/12.jpg", answer: ["س","و","ر","ج","م","ک","ھ","ی"] },
{ imagePath: "data/images/13.jpg", answer: ["گ","ل","ب","ہ","ا","ر"] },
{ imagePath: "data/images/14.jpg", answer: ["گ","ل","د","ا","ؤ","د","ی"] },
{ imagePath: "data/images/15.jpg", answer: ["گ","ل","ن","ر","گ","س"] },
{ imagePath: "data/images/16.jpg", answer: ["گ","ی","ن","د","ا"] },
{ imagePath: "data/images/17.jpg", answer: ["ن","ر","گ","س","آ","ب","ی"] },
{ imagePath: "data/images/18.jpg", answer: ["ن","ی","ل","ک","م","ا","ل"] },
];

let currentQuestionIndex = 0;
let score = 0;

const correctSound = new Audio("data/sound/co.mp3");
const wrongSound = new Audio("data/sound/wr.mp3");

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById("questionImage").style.display = "block";
    document.getElementById("questionImage").src = question.imagePath;
    document.getElementById("congratulations-message").style.display = "none";

    const crossword = document.getElementById("crossword");
    const lettersContainer = document.getElementById("letters");

    crossword.innerHTML = "";
    lettersContainer.innerHTML = "";

    question.answer.forEach(() => {
        const cell = document.createElement("div");
        cell.classList.add("droppable");
        crossword.appendChild(cell);
    });

    const shuffledLetters = [...question.answer].sort(() => Math.random() - 0.5);
    shuffledLetters.forEach((letter) => {
        const letterElement = document.createElement("div");
        letterElement.classList.add("letter");
        letterElement.innerText = letter;

        letterElement.addEventListener("click", () => {
            const emptyCell = Array.from(document.querySelectorAll(".droppable")).find(
                (cell) => !cell.innerText
            );
            if (emptyCell) {
                emptyCell.innerText = letter;
                letterElement.remove();
            }
        });

        lettersContainer.appendChild(letterElement);
    });
}

function checkAnswer() {
    const cells = document.querySelectorAll(".droppable");
    const userAnswer = Array.from(cells).map((cell) => cell.innerText).join("");
    const correctAnswer = questions[currentQuestionIndex].answer.join("");

    if (userAnswer === correctAnswer) {
        score++;
        document.getElementById("score").innerText = `Score: ${score}`;
        correctSound.play();
        nextQuestion();
    } else {
        wrongSound.play();
        resetToInitial();
    }
}

function resetToInitial() {
    loadQuestion();
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        document.getElementById("questionImage").style.display = "none";
        const congratsMessage = document.getElementById("congratulations-message");
        congratsMessage.style.display = "flex";
        document.getElementById("submit").style.display = "none";
        document.getElementById("restart").style.display = "block";
    }
}

function restartGame() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("score").innerText = "Score: 0";

    const submitButton = document.getElementById("submit");
    submitButton.style.display = "block";
    document.getElementById("restart").style.display = "none";
    loadQuestion();
}

loadQuestion();
document.getElementById("submit").addEventListener("click", checkAnswer);

