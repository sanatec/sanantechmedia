const questions = [
{ imagePath: "data/images/1.jpg", answer: ["م","ر","ب","ع"] },
{ imagePath: "data/images/2.jpg", answer: ["م","س","ت","ط","ی","ل"] },
{ imagePath: "data/images/3.jpg", answer: ["د","ا","ئ","ر","ہ"] },
{ imagePath: "data/images/4.jpg", answer: ["ب","ی","ض","و","ی"] },
{ imagePath: "data/images/5.jpg", answer: ["پ","ن","چ","گ","و","ش","ہ"] },
{ imagePath: "data/images/6.jpg", answer: ["ش","ش","پ","ہ","ل","و"] },
{ imagePath: "data/images/7.jpg", answer: ["ہ","ف","ت","پ","ہ","ل","و"] },
{ imagePath: "data/images/8.jpg", answer: ["م","ث","ل","ث"] },
{ imagePath: "data/images/9.jpg", answer: ["ن","و","پ","ہ","ل","و"] },
{ imagePath: "data/images/10.jpg", answer: ["م","ک","ع","ب"] },
{ imagePath: "data/images/11.jpg", answer: ["ا","س","ط","و","ا","ن","ہ"] },
{ imagePath: "data/images/12.jpg", answer: ["ہ","ی","ر","ا"] },
{ imagePath: "data/images/13.jpg", answer: ["س","ت","ا","ر","ہ"] },
{ imagePath: "data/images/14.jpg", answer: ["د","ل"] },
{ imagePath: "data/images/15.jpg", answer: ["ک","ر","ہ"] },
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

