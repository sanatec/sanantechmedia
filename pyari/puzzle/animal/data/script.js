const questions = [
{ imagePath: "data/images/1.jpg", answer: ["ب","ھ","ا","ل","و"] },
{ imagePath: "data/images/2.jpg", answer: ["ب","ی","ل"] },
{ imagePath: "data/images/3.jpg", answer: ["ا","و","ن","ٹ"] },
{ imagePath: "data/images/4.jpg", answer: ["ب","لّ","ی"] },
{ imagePath: "data/images/5.jpg", answer: ["گ","ا","ی"] },
{ imagePath: "data/images/6.jpg", answer: ["م","گ","ر","م","چ","ھ"] },
{ imagePath: "data/images/7.jpg", answer: ["ہ","ر","ن"] },
{ imagePath: "data/images/8.jpg", answer: ["ک","تّ","ا"] },
{ imagePath: "data/images/9.jpg", answer: ["گ","د","ھ","ا"] },
{ imagePath: "data/images/10.jpg", answer: ["ہ","ا","ت","ھ","ی"] },
{ imagePath: "data/images/11.jpg", answer: ["ل","و","م","ڑ","ی"] },
{ imagePath: "data/images/12.jpg", answer: ["ز","ر","ا","ف"] },
{ imagePath: "data/images/13.jpg", answer: ["ب","ک","ر","ی"] },
{ imagePath: "data/images/14.jpg", answer: ["گ","و","ر","ی","ل","ا"] },
{ imagePath: "data/images/15.jpg", answer: ["د","ر","ی","ا","ئی","گ","ھ","و","ڑ","ا"] },
{ imagePath: "data/images/16.jpg", answer: ["گ","ھ","و","ڑ","ا"] },
{ imagePath: "data/images/17.jpg", answer: ["ک","ی","ن","گ","ر","و"] },
{ imagePath: "data/images/18.jpg", answer: ["چ","ی","ت","ا"] },
{ imagePath: "data/images/19.jpg", answer: ["ش","ی","ر"] },
{ imagePath: "data/images/20.jpg", answer: ["ن","ی","و","ل","ا"] },
{ imagePath: "data/images/21.jpg", answer: ["ب","ن","د","ر"] },
{ imagePath: "data/images/22.jpg", answer: ["پ","ا","ن","ڈ","ا"] },
{ imagePath: "data/images/23.jpg", answer: ["س","و","ر"] },
{ imagePath: "data/images/24.jpg", answer: ["خ","ر","گ","و","ش"] },
{ imagePath: "data/images/25.jpg", answer: ["چ","و","ہ","ا"] },
{ imagePath: "data/images/26.jpg", answer: ["گ","ی","ن","ڈ","ا"] },
{ imagePath: "data/images/27.jpg", answer: ["گ","ل","ہ","ر","ی"] },
{ imagePath: "data/images/28.jpg", answer: ["ب","ا","ر","ہ","س","ن","گ","ا"] },
{ imagePath: "data/images/29.jpg", answer: ["ب","ا","گ","ھ"] },
{ imagePath: "data/images/30.jpg", answer: ["ک","چ","ھ","و","ا"] },
{ imagePath: "data/images/31.jpg", answer: ["ب","ھ","ڑ","ی","ا"] },
{ imagePath: "data/images/32.jpg", answer: ["ز","ی","ب","ر","ا"] },
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

