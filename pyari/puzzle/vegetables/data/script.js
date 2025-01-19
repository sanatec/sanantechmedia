const questions = [
{ imagePath: "data/images/1.jpg", answer: ["ٹ","م","ا","ٹ","ر"] },
{ imagePath: "data/images/2.jpg", answer: ["ب","ی","ن","گ","ن"] },
{ imagePath: "data/images/3.jpg", answer: ["ش","م","ل","ہ","م","ر","چ"] },
{ imagePath: "data/images/4.jpg", answer: ["م","ر","چ"] },
{ imagePath: "data/images/5.jpg", answer: ["ک","ھ","م","ب","ی"] },
{ imagePath: "data/images/6.jpg", answer: ["ل","ہ","س","ن"] },
{ imagePath: "data/images/7.jpg", answer: ["پ","ی","ا","ز"] },
{ imagePath: "data/images/8.jpg", answer: ["آ","ل","و"] },
{ imagePath: "data/images/9.jpg", answer: ["د","ھ","ن","ی","ا"] },
{ imagePath: "data/images/10.jpg", answer: ["ب","ن","د","گ","و","ب","ھ","ی"] },
{ imagePath: "data/images/11.jpg", answer: ["م","و","ل","ی"] },
{ imagePath: "data/images/12.jpg", answer: ["م","ٹ","ر"] },
{ imagePath: "data/images/13.jpg", answer: ["ش","ا","خ","گ","و","ب","ھ","ی"] },
{ imagePath: "data/images/14.jpg", answer: ["پ","ا","ل","ک"] },
{ imagePath: "data/images/15.jpg", answer: ["ک","ھ","ی","ر","ا"] },
{ imagePath: "data/images/16.jpg", answer: ["گ","ا","ج","ر"] },
{ imagePath: "data/images/17.jpg", answer: ["ا","ر","و","ی"] },
{ imagePath: "data/images/18.jpg", answer: ["ک","ڑ","ی","پ","ت","ہ"] },
{ imagePath: "data/images/19.jpg", answer: ["پ","ی","ٹ","ھ","ا"] },
{ imagePath: "data/images/20.jpg", answer: ["چ","ق","ن","د","ر"] },
{ imagePath: "data/images/21.jpg", answer: ["پ","ھ","و","ل","گ","و","ب","ھ","ی"] },
{ imagePath: "data/images/22.jpg", answer: ["ا","د","ر","ک"] },
{ imagePath: "data/images/23.jpg", answer: ["ہ","ل","د","ی"] },
{ imagePath: "data/images/24.jpg", answer: ["ک","ر","ی","ل","ا"] },
{ imagePath: "data/images/25.jpg", answer: ["ب","ھ","ن","ڈ","ی"] },
{ imagePath: "data/images/26.jpg", answer: ["ک","د","و"] },
{ imagePath: "data/images/27.jpg", answer: ["س","ب","ز","پ","ھ","ل","ی"] },
{ imagePath: "data/images/28.jpg", answer: ["ز","م","ی","ن","ق","ن","د"] },
{ imagePath: "data/images/29.jpg", answer: ["ش","ک","ر","ق","ن","د"] },
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

