const questions = [
    { hint: "چیز جو ہم پڑھتے ہیں", answer: ["ک", "ت", "ا", "ب"] },
    { hint: "روشنی دینے والی چیز", answer: ["چ", "ر", "ا", "غ"] },
    { hint: "پانی پینے کا برتن", answer: ["گ", "ل", "ا", "س"] },
    { hint: "میٹھا پھل", answer: ["آ", "م"] },
    { hint: "خوشبو دینے والی چیز", answer: ["گ", "ل"] },
    { hint: "خوبصورت پرندہ", answer: ["م", "و", "ر"] },
    { hint: "سب سے بڑا جانور", answer: ["ہ","ا","ت","ھ","ی"] },
    { hint: "آسمان کی روشنی", answer: ["س", "و", "ر", "ج"] },
    { hint: "چاندنی رات میں نظر آنے والی چیز", answer: ["چ", "ا", "ن", "د"] },
    { hint: "سبزیاں کاٹنے کا آلہ", answer: ["چ", "ھ", "ر", "ی"] },
    { hint: "بارش میں استعمال ہونے والی چیز", answer: ["چ", "ھ", "ت", "ر", "ی"] },
    { hint: "پھل کا بادشاہ", answer: ["آ", "م"] },
    { hint: "سبزیاں اگانے کی جگہ", answer: ["ب", "ا", "غ"] },
    { hint: "پانی کے بغیر ممکن نہیں", answer: ["پ", "ا", "ن", "ی"] },
    { hint: "دن اور رات کا بیچ", answer: ["ش", "ا", "م"] },
    { hint: "پہاڑ پر رہنے والا جانور", answer: ["ب", "ک", "ر", "ی"] },
    { hint: "ہرے رنگ کی سبزی", answer: ["م", "ت", "ر"] },
    { hint: "سب سے تیز پرندہ", answer: ["ش", "ا", "ہ", "ی", "ن"] },
    { hint: "خوبصورت پھول", answer: ["گ", "ل", "ا", "ب"] },
    { hint: "پانی میں رہنے والا جانور", answer: ["م","چ","ھ","ل","ی"] },
    { hint: "رات میں نظر آنے والی روشنی", answer: ["چ", "ا", "ن", "د"] },
    { hint: "جانور جو دودھ دیتا ہے", answer: ["گ", "ا", "ی"] },
    { hint: "چیز جس سے گاڑی چلتی ہے", answer: ["پ", "ی", "ٹ", "ر", "و", "ل"] },
    { hint: "پرندہ جو رات کو دیکھتا ہے", answer: ["ا", "ل", "و"] },
    { hint: "سب سے قریبی ستارہ", answer: ["س", "و", "ر", "ج"] },
    { hint: "ہمارا سیارہ", answer: ["ز", "م", "ی", "ن"] },
    { hint: "جنگل کا بادشاہ", answer: ["ش", "ی", "ر"] },
    { hint: "پھول جس کی خوشبو پیاری ہوتی ہے", answer: ["گ", "ل", "ا", "ب"] },
    { hint: "گرمی کا موسم", answer: ["گ", "ر", "م", "ی"] },
    { hint: "ہمارا ملک", answer: ["ہ", "ن", "د", "س", "ت", "ا", "ن"] },
    { hint: "کھانے کا ایک برتن", answer: ["پ", "ل", "ی", "ٹ"] },
    { hint: "دودھ دینے والا جانور", answer: ["ب", "ھ", "ی", "ن", "س"] },
    { hint: "پرندہ جو خوبصورت آواز نکالتا ہے", answer: ["ک", "و", "ی", "ل"] },
    { hint: "چیز جو ہمیں سردی میں گرم رکھتی ہے", answer: ["ک", "م", "ب", "ل"] },
    { hint: "چیز جس سے وقت دیکھتے ہیں", answer: ["گ", "ھ", "ڑ", "ی"] },
    { hint: "دھوپ سے بچانے والی چیز", answer: ["چ", "ھ", "ت", "ر", "ی"] },
    { hint: "چیز جو درخت پر اگتی ہے", answer: ["پ", "ھ", "ل"] },
    { hint: "چیز جو ہم کھاتے ہیں", answer: ["ر", "و", "ٹ", "ی"] },
    { hint: "سمندر کا بادشاہ", answer: ["ش","ا","ر","ک"] },
    { hint: "موسم جب پھول کھلتے ہیں", answer: ["ب", "ہ", "ا", "ر"] },
    { hint: "خوبصورت جھیل", answer: ["ڈ", "ا", "ل"] },
    { hint: "ہماری زندگی کا سب سے خوبصورت حصہ", answer: ["ب", "چ", "پ", "ن"] },
    { hint: "سب سے اونچا جانور", answer: ["ز", "ر", "ا", "ف"] },
    { hint: "پانی کا دوسرا نام", answer: ["آ", "ب"] },
    { hint: "سبزیوں کا بادشاہ", answer: ["ب", "ھ", "ن", "ڈ", "ی"] },
    { hint: "چیز جس سے سردی میں بچتے ہیں", answer: ["ج", "ا", "ک", "ی", "ٹ"] },
    { hint: "خوبصورت علاقہ", answer: ["و", "ا", "د", "ی"] },
    ];

        let currentQuestionIndex = 0;
        let score = 0;

        // Sound files
        const correctSound = new Audio("data/correct.mp3");
        const wrongSound = new Audio("data/wrong.mp3");

        function loadQuestion() {
            const question = questions[currentQuestionIndex];
            document.getElementById("question").innerText = `سوال: ${question.hint}`;
            const crossword = document.getElementById("crossword");
            const lettersContainer = document.getElementById("letters");

            // Clear previous elements
            crossword.innerHTML = "";
            lettersContainer.innerHTML = "";

            // Create crossword cells
            question.answer.forEach(() => {
                const cell = document.createElement("div");
                cell.classList.add("droppable");
                crossword.appendChild(cell);
            });

            // Shuffle and create draggable letters
            const shuffledLetters = [...question.answer].sort(() => Math.random() - 0.5);
            shuffledLetters.forEach((letter) => {
                const letterElement = document.createElement("div");
                letterElement.classList.add("letter");
                letterElement.innerText = letter;

                // On click (or touch), move to next empty droppable cell
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
            const lettersContainer = document.getElementById("letters");
            lettersContainer.innerHTML = "";
            const crossword = document.getElementById("crossword");
            crossword.innerHTML = "";

            // Re-add all letters and empty droppables
            loadQuestion();
        }

        function nextQuestion() {
            if (currentQuestionIndex < questions.length - 1) {
                currentQuestionIndex++;
                loadQuestion();
            } else {
                alert(`مبارک ہو! آپ نے تمام سوالات مکمل کرلیے ہیں۔ آپ کا حتمی اسکور: ${score}`);
            }
        }

        // Initialize the game
        loadQuestion();

        // Add submit button functionality
        document.getElementById("submit").addEventListener("click", checkAnswer);
