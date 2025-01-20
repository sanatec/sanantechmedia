const questions = [
{ imagePath: "data/images/1.jpg", answer: ["س","ی","ب"] },
{ imagePath: "data/images/2.jpg", answer: ["ب","ا","د","ا","م"] },
{ imagePath: "data/images/3.jpg", answer: ["خ","و","ب","ا","ن","ی"] },
{ imagePath: "data/images/4.jpg", answer: ["ا","ی","و","ا","ک","ا","ڈ","و"] },
{ imagePath: "data/images/5.jpg", answer: ["ک","ی","ل","ا"] },
{ imagePath: "data/images/6.jpg", answer: ["ا","ن","گ","و","ر"] },
{ imagePath: "data/images/7.jpg", answer: ["ج","ا","م","ن"] },
{ imagePath: "data/images/8.jpg", answer: ["ک","ا","ج","و"] },
{ imagePath: "data/images/9.jpg", answer: ["چ","ی","ر","ی"] },
{ imagePath: "data/images/10.jpg", answer: ["ن","ا","ر","ی","ل"] },
{ imagePath: "data/images/11.jpg", answer: ["ک","ھ","ج","و","ر"] },
{ imagePath: "data/images/12.jpg", answer: ["ا","م","ر","و","د"] },
{ imagePath: "data/images/14.jpg", answer: ["ک","ٹ","ہ","ل"] },
{ imagePath: "data/images/15.jpg", answer: ["ک","ی","و","ی"] },
{ imagePath: "data/images/16.jpg", answer: ["آ","م"] },
{ imagePath: "data/images/17.jpg", answer: ["س","ن","ت","ر","ہ"] },
{ imagePath: "data/images/18.jpg", answer: ["آ","ڑ","و"] },
{ imagePath: "data/images/19.jpg", answer: ["ت","و","ت","ف","ر","ن","گ","ی"] },
{ imagePath: "data/images/20.jpg", answer: ["ن","ا","ش","پ","ا","ت","ی"] },
{ imagePath: "data/images/21.jpg", answer: ["ا","ن","نّ","ا","س"] },
{ imagePath: "data/images/22.jpg", answer: ["ا","ن","ا","ر"] },
{ imagePath: "data/images/23.jpg", answer: ["ت","ر","ب","و","ز"] },
{ imagePath: "data/images/24.jpg", answer: ["پ","پ","ی","ت","ا"] },
{ imagePath: "data/images/25.jpg", answer: ["آ","ل","و","ب","خ","ا","ر","ہ"] },
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

