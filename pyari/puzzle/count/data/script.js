const questions = [
{ imagePath: "data/images/1.jpg", answer: ["ا","ی","ک"] },
{ imagePath: "data/images/2.jpg", answer: ["د","و"] },
{ imagePath: "data/images/3.jpg", answer: ["ت","ی","ن"] },
{ imagePath: "data/images/4.jpg", answer: ["چ","ا","ر"] },
{ imagePath: "data/images/5.jpg", answer: ["پ","ا","ن","چ"] },
{ imagePath: "data/images/6.jpg", answer: ["چ","ھ","ہ"] },
{ imagePath: "data/images/7.jpg", answer: ["س","ا","ت"] },
{ imagePath: "data/images/8.jpg", answer: ["آ","ٹ","ھ"] },
{ imagePath: "data/images/9.jpg", answer: ["ن","و"] },
{ imagePath: "data/images/10.jpg", answer: ["د","س"] },
{ imagePath: "data/images/11.jpg", answer: ["گ","ی","ا","ر","ہ"] },
{ imagePath: "data/images/12.jpg", answer: ["ب","ا","ر","ہ"] },
{ imagePath: "data/images/13.jpg", answer: ["ت","ی","ر","ہ"] },
{ imagePath: "data/images/14.jpg", answer: ["چ","و","د","ہ"] },
{ imagePath: "data/images/15.jpg", answer: ["پ","ن","د","ر","ہ"] },
{ imagePath: "data/images/16.jpg", answer: ["س","و","ل","ہ"] },
{ imagePath: "data/images/17.jpg", answer: ["س","ت","ر","ہ"] },
{ imagePath: "data/images/18.jpg", answer: ["ا","ٹ","ھ","ا","ر","ہ"] },
{ imagePath: "data/images/19.jpg", answer: ["ا","نّ","ی","س"] },
{ imagePath: "data/images/20.jpg", answer: ["ب","ی","س"] },
{ imagePath: "data/images/25.jpg", answer: ["پ","چ","ی","س"] },
{ imagePath: "data/images/50.jpg", answer: ["پ","چ","ا","س"] },
{ imagePath: "data/images/100.jpg", answer: ["س","و"] },
{ imagePath: "data/images/500.jpg", answer: ["پ","ا","ن","چ","س","و"] },
{ imagePath: "data/images/1000.jpg", answer: ["ہ","ز","ا","ر"] },
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

