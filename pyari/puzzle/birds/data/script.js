const questions = [
{ imagePath: "data/images/1.jpg", answer: ["ک","ب","و","ت","ر"] },
{ imagePath: "data/images/2.jpg", answer: ["م","ر","غ","ا"] },
{ imagePath: "data/images/3.jpg", answer: ["م","ر","غ","ی"] },
{ imagePath: "data/images/4.jpg", answer: ["ط","و","ط","ا"] },
{ imagePath: "data/images/5.jpg", answer: ["م","ا","ہ","ی","خ","و","ر"] },
{ imagePath: "data/images/6.jpg", answer: ["م","و","ر"] },
{ imagePath: "data/images/7.jpg", answer: ["ک","وّ","ا"] },
{ imagePath: "data/images/8.jpg", answer: ["ک","و","ئ","ل"] },
{ imagePath: "data/images/9.jpg", answer: ["ا","لّ","و"] },
{ imagePath: "data/images/10.jpg", answer: ["ہ","د","ہ","د"] },
{ imagePath: "data/images/11.jpg", answer: ["ا","ب","ا","ب","ی","ل"] },
{ imagePath: "data/images/12.jpg", answer: ["ب","ل","ب","ل"] },
{ imagePath: "data/images/13.jpg", answer: ["ت","ی","ت","ر"] },
{ imagePath: "data/images/14.jpg", answer: ["م","ی","ن","ا"] },
{ imagePath: "data/images/15.jpg", answer: ["چ","ن","ڈ","و","ل"] },
{ imagePath: "data/images/16.jpg", answer: ["چ","م","گ","ا","د","ڑ"] },
{ imagePath: "data/images/17.jpg", answer: ["ب","ط","خ"] },
{ imagePath: "data/images/18.jpg", answer: ["گ","د","ھ"] },
{ imagePath: "data/images/19.jpg", answer: ["ب","ٹ","ی","ر"] },
{ imagePath: "data/images/20.jpg", answer: ["ب","گ","ل","ا"] },
{ imagePath: "data/images/21.jpg", answer: ["ب","ا","ز"] },
{ imagePath: "data/images/22.jpg", answer: ["ش","ت","ر","م","ر","غ"] },
{ imagePath: "data/images/23.jpg", answer: ["چ","ڑ","ی","ا"] },
{ imagePath: "data/images/24.jpg", answer: ["ف","ا","خ","ت","ہ"] },

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

