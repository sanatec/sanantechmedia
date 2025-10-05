document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "Which command draws a square using turtle?",
    "options": [
      { "text": "4 forward() + 4 right(90)", "isCorrect": true },
      { "text": "square()", "isCorrect": false },
      { "text": "box(4)", "isCorrect": false },
      { "text": "draw.square()", "isCorrect": false }
    ]
  },
  {
    "question": "How to repeat a block 5 times using while loop?",
    "options": [
      { "text": "while i < 5:", "isCorrect": true },
      { "text": "for i in 5:", "isCorrect": false },
      { "text": "while i == 5:", "isCorrect": false },
      { "text": "repeat(5)", "isCorrect": false }
    ]
  },
  {
    "question": "Which of these is not a comparison operator?",
    "options": [
      { "text": ">=", "isCorrect": false },
      { "text": "<=", "isCorrect": false },
      { "text": "!=", "isCorrect": false },
      { "text": ":=", "isCorrect": true }
    ]
  },
  {
    "question": "What is the default starting point in range(10)?",
    "options": [
      { "text": "1", "isCorrect": false },
      { "text": "10", "isCorrect": false },
      { "text": "0", "isCorrect": true },
      { "text": "Undefined", "isCorrect": false }
    ]
  },
  {
    "question": "Which function is used to calculate area in a program?",
    "options": [
      { "text": "area()", "isCorrect": false },
      { "text": "calculate_area()", "isCorrect": false },
      { "text": "A formula using variables", "isCorrect": true },
      { "text": "math.area", "isCorrect": false }
    ]
  },
  {
    "question": "What is the result of True and False?",
    "options": [
      { "text": "True", "isCorrect": false },
      { "text": "False", "isCorrect": true },
      { "text": "Error", "isCorrect": false },
      { "text": "None", "isCorrect": false }
    ]
  },
  {
    "question": "Which of the following is NOT a valid Python datatype?",
    "options": [
      { "text": "Integer", "isCorrect": false },
      { "text": "Float", "isCorrect": false },
      { "text": "Letter", "isCorrect": true },
      { "text": "String", "isCorrect": false }
    ]
  },
  {
    "question": "What will print(\"age\" + \"14\") display?",
    "options": [
      { "text": "28", "isCorrect": false },
      { "text": "age14", "isCorrect": true },
      { "text": "Error", "isCorrect": false },
      { "text": "age + 14", "isCorrect": false }
    ]
  },
  {
    "question": "What does the + operator do with strings?",
    "options": [
      { "text": "Adds numerically", "isCorrect": false },
      { "text": "Adds boolean", "isCorrect": false },
      { "text": "Concatenates", "isCorrect": true },
      { "text": "Multiplies", "isCorrect": false }
    ]
  },
  {
    "question": "Which of the following creates an infinite loop?",
    "options": [
      { "text": "while True:", "isCorrect": false },
      { "text": "for i in range(5):", "isCorrect": false },
      { "text": "while i < 10: with no increment", "isCorrect": false },
      { "text": "A & C", "isCorrect": true }
    ]
  },
  {
    "question": "What is a flowchart used for?",
    "options": [
      { "text": "Drawing art", "isCorrect": false },
      { "text": "Writing syntax", "isCorrect": false },
      { "text": "Representing logic visually", "isCorrect": true },
      { "text": "Memory management", "isCorrect": false }
    ]
  },
  {
    "question": "How is Kiddies category assigned in program logic?",
    "options": [
      { "text": "age >= 14", "isCorrect": false },
      { "text": "age > 12", "isCorrect": false },
      { "text": "age < 12", "isCorrect": true },
      { "text": "age >= 16", "isCorrect": false }
    ]
  },
  {
    "question": "What is from turtle import * used for?",
    "options": [
      { "text": "Drawing images", "isCorrect": false },
      { "text": "Importing all turtle functions", "isCorrect": true },
      { "text": "Importing only forward", "isCorrect": false },
      { "text": "Nothing", "isCorrect": false }
    ]
  },
  {
    "question": "Which loop type checks condition before execution?",
    "options": [
      { "text": "for", "isCorrect": false },
      { "text": "while", "isCorrect": true },
      { "text": "do-while", "isCorrect": false },
      { "text": "until", "isCorrect": false }
    ]
  },
  {
    "question": "What happens when a condition is False in if block?",
    "options": [
      { "text": "Runs the code", "isCorrect": false },
      { "text": "Skips to else", "isCorrect": true },
      { "text": "Prints the result", "isCorrect": false },
      { "text": "Crashes", "isCorrect": false }
    ]
  },
  {
    "question": "Which statement is true about Python lists?",
    "options": [
      { "text": "Lists can contain only strings", "isCorrect": false },
      { "text": "Lists must be of the same data type", "isCorrect": false },
      { "text": "Lists can store multiple data types", "isCorrect": true },
      { "text": "Lists cannot be modified", "isCorrect": false }
    ]
  },
  {
    "question": "What will the following code print? colors = [\"red\", \"blue\", \"green\"]; print(colors[1])",
    "options": [
      { "text": "red", "isCorrect": false },
      { "text": "blue", "isCorrect": true },
      { "text": "green", "isCorrect": false },
      { "text": "1", "isCorrect": false }
    ]
  },
  {
    "question": "What is the purpose of range(1, 10, 2) in a for loop?",
    "options": [
      { "text": "To count down from 10 to 1", "isCorrect": false },
      { "text": "To iterate by 1", "isCorrect": false },
      { "text": "To generate odd numbers from 1 to 9", "isCorrect": true },
      { "text": "To generate even numbers", "isCorrect": false }
    ]
  },
  {
    "question": "In which scenario would you use an if...elif...else statement?",
    "options": [
      { "text": "To run code repeatedly", "isCorrect": false },
      { "text": "To check multiple conditions", "isCorrect": true },
      { "text": "To store values", "isCorrect": false },
      { "text": "To take input", "isCorrect": false }
    ]
  },
  {
    "question": "What does the following code do? if age >= 16: print(\"Senior\")",
    "options": [
      { "text": "Checks if age is equal to 16 only", "isCorrect": false },
      { "text": "Prints \"Senior\" only if age is 16", "isCorrect": false },
      { "text": "Prints \"Senior\" if age is 16 or more", "isCorrect": true },
      { "text": "Always prints \"Senior\"", "isCorrect": false }
    ]
  },
  {
    "question": "What will for i in range(5): print(i) print?",
    "options": [
      { "text": "1 to 5", "isCorrect": false },
      { "text": "0 to 5", "isCorrect": false },
      { "text": "0 to 4", "isCorrect": true },
      { "text": "1 to 4", "isCorrect": false }
    ]
  },
  {
    "question": "What is the output of: name = \"Ali\"; print(\"Hello\", name)?",
    "options": [
      { "text": "HelloAli", "isCorrect": false },
      { "text": "Hello name", "isCorrect": false },
      { "text": "Hello Ali", "isCorrect": true },
      { "text": "Ali Hello", "isCorrect": false }
    ]
  },
  {
    "question": "Which Python function is used to take user input?",
    "options": [
      { "text": "get()", "isCorrect": false },
      { "text": "print()", "isCorrect": false },
      { "text": "input()", "isCorrect": true },
      { "text": "read()", "isCorrect": false }
    ]
  },
  {
    "question": "Which Python module is used for date and time?",
    "options": [
      { "text": "turtle", "isCorrect": false },
      { "text": "math", "isCorrect": false },
      { "text": "os", "isCorrect": false },
      { "text": "datetime", "isCorrect": true }
    ]
  },
  {
    "question": "Which statement about Python is FALSE?",
    "options": [
      { "text": "It is open-source", "isCorrect": false },
      { "text": "It uses indentation", "isCorrect": false },
      { "text": "It supports object-oriented programming", "isCorrect": false },
      { "text": "It must declare data types for all variables", "isCorrect": true }
    ]
  }
    ];

    let currentQuestionIndex = 0;
    let totalScore = 0;
    const userAnswers = []; // Stores user selections and score for review

    // --- DOM Elements ---
    const quizScreen = document.getElementById('quiz-screen');
    const reviewScreen = document.getElementById('review-screen');
    const questionCounter = document.getElementById('question-counter');
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const feedbackMessage = document.getElementById('feedback-message');
    const backButton = document.getElementById('back-button');
    const nextButton = document.getElementById('next-button');
    const scoreDisplay = document.getElementById('score-display');
    const correctSound = document.getElementById('correct-sound');
    const wrongSound = document.getElementById('wrong-sound');

    // --- Sound Functions (Unchanged) ---
    function playCorrectSound() {
        try {
            correctSound.currentTime = 0; 
            correctSound.play().catch(error => {
                console.log('Could not play correct sound:', error);
                playFallbackSound('correct');
            });
        } catch (error) {
            console.log('Error playing correct sound:', error);
            playFallbackSound('correct');
        }
    }

    function playWrongSound() {
        try {
            wrongSound.currentTime = 0; 
            wrongSound.play().catch(error => {
                console.log('Could not play wrong sound:', error);
                playFallbackSound('wrong');
            });
        } catch (error) {
            console.log('Error playing wrong sound:', error);
            playFallbackSound('wrong');
        }
    }

    function playFallbackSound(type) {
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            if (type === 'correct') {
                oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5
            } else {
                oscillator.frequency.setValueAtTime(349.23, audioContext.currentTime); // F4
            }
            
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 1);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 1);
        } catch (error) {
            console.log('Fallback sound also failed:', error);
        }
    }

    // --- Core Functions ---

    /**
     * Updates the score display in the header
     */
    function updateScoreDisplay() {
        scoreDisplay.textContent = `Score: ${totalScore.toFixed(0)}`; 
    }

    /**
     * Loads the current question onto the screen.
     */
    function loadQuestion() {
        if (currentQuestionIndex >= quizData.length) {
            showReviewScreen();
            return;
        }

        const question = quizData[currentQuestionIndex];
        const userAnswer = userAnswers[currentQuestionIndex];
        const hasBeenSubmitted = !!userAnswer;

        // 1. Reset UI State
        questionCounter.textContent = `Question ${currentQuestionIndex + 1}/${quizData.length}`;
        questionText.textContent = question.question;
        optionsContainer.innerHTML = '';
        feedbackMessage.classList.remove('show', 'success', 'partial', 'error');
        feedbackMessage.textContent = '';
        optionsContainer.classList.remove('disabled');

        // 2. Set Navigation Buttons
        backButton.disabled = currentQuestionIndex === 0;
        nextButton.textContent = hasBeenSubmitted ? 'Next' : 'Submit';
        
        if (!hasBeenSubmitted) {
            // Initially disable Submit button until an option is selected
            nextButton.disabled = true;
        } else {
            // If submitted, enable Next
            nextButton.disabled = false;
        }

        // 3. Create Option Buttons
        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.classList.add('option-button');
            button.textContent = option.text;
            button.dataset.index = index;
            button.dataset.isCorrect = option.isCorrect;
            
            button.disabled = hasBeenSubmitted; 
            if (!hasBeenSubmitted) {
                button.addEventListener('click', selectOption); 
            }

            // Restore state if submitted
            if (hasBeenSubmitted) {
                if (userAnswer.selected.includes(index)) {
                    button.classList.add('selected');
                }
                // Show correction
                if (option.isCorrect) {
                    button.classList.add('correct');
                } else if (userAnswer.selected.includes(index) && !option.isCorrect) {
                    button.classList.add('wrong');
                }
                displayFeedback(userAnswer.score);
            }
            
            optionsContainer.appendChild(button);
        });

        // Update score display
        updateScoreDisplay();
    }

    /**
     * Selects one option and deselects all others, enabling the submit button.
     */
    function selectOption(e) {
        // 1. Deselect all
        optionsContainer.querySelectorAll('.option-button').forEach(btn => {
            btn.classList.remove('selected');
        });
        
        // 2. Select the clicked button
        const button = e.target;
        button.classList.add('selected');
        
        // 3. Enable next button
        nextButton.disabled = false;
    }

    /**
     * Handles the 'Next' button click: submits the answer or moves to the next question.
     */
    function handleNext() {
        // If it's a new question (unanswered) -> SUBMIT
        if (!userAnswers[currentQuestionIndex]) {
            submitAnswer();
        } 
        // If already submitted -> NEXT QUESTION
        else {
            currentQuestionIndex++;
            loadQuestion();
        }
    }

    /**
     * Calculates score, provides feedback, and saves the result.
     */
    function submitAnswer() {
        const question = quizData[currentQuestionIndex];
        const selectedButton = optionsContainer.querySelector('.option-button.selected');
        const selectedIndex = selectedButton ? parseInt(selectedButton.dataset.index) : -1;
        
        let score = 0;
        let isCorrect = false;

        if (selectedIndex !== -1) {
            isCorrect = question.options[selectedIndex].isCorrect;
            score = isCorrect ? 1 : 0;
        }

        // 1. Save Answer
        totalScore += score;
        userAnswers[currentQuestionIndex] = { selected: selectedIndex !== -1 ? [selectedIndex] : [], score: score };

        // 2. Update UI with Feedback and Correction
        optionsContainer.classList.add('disabled'); // Prevent further clicks
        Array.from(optionsContainer.children).forEach(button => {
            button.disabled = true;
            const index = parseInt(button.dataset.index);
            const isCorrectOption = question.options[index].isCorrect;

            if (isCorrectOption) {
                button.classList.add('correct');
            } else if (index === selectedIndex && !isCorrectOption) {
                button.classList.add('wrong');
            }
        });

        // 3. Play Sound and Animation
        if (score === 1) {
            playConfetti();
            playCorrectSound();
        } else {
            playWrongSound();
        }

        // 4. Display Textual Feedback
        displayFeedback(score);

        // 5. Update Navigation and Score
        nextButton.textContent = 'Next';
        nextButton.disabled = false;
        updateScoreDisplay();
    }

    /**
     * Displays a textual message based on the score.
     */
    function displayFeedback(score) {
        feedbackMessage.classList.add('show');
        
        if (score === 1) {
            // Correct answer
            feedbackMessage.textContent = "🎉 Correct! You earned 1 point!";
            feedbackMessage.className = 'feedback-message show success';
        } else {
            // Wrong answer
            feedbackMessage.textContent = "📚 Incorrect. The correct answer is highlighted in green. You earned 0 points.";
            feedbackMessage.className = 'feedback-message show error';
        }
    }

    /**
     * CUSTOM CANVAS IMPLEMENTATION (Replaces the confetti library call)
     * Plays the custom fireworks animation from the middle of the app area to the top.
     */
    function playConfetti() {
        const canvas = document.getElementById("star-canvas");
        if (!canvas) return; 
        
        const ctx = canvas.getContext("2d");
        // Always resize to fit the current window on launch
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let particles = [];
        const colors = ["#FFD700", "#FFEE58", "#FFF176", "#FFAB00", "#FF6F00"];
        
        // Explosion Origin: Middle of screen width, roughly 40% down from the top (middle of app area)
        const centerX = canvas.width / 2;
        const centerY = canvas.height * 0.4; 

        // Create initial explosion particles
        for (let i = 0; i < 60; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 6 + 3;
            particles.push({
                x: centerX,
                y: centerY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed - 2,
                size: Math.random() * 4 + 2,
                color: colors[Math.floor(Math.random() * colors.length)],
                life: 100
            });
        }

        function drawStar(x, y, size, color) {
            ctx.save();
            ctx.beginPath();
            ctx.translate(x, y);
            ctx.moveTo(0, -size);
            for (let i = 0; i < 5; i++) {
                ctx.rotate(Math.PI / 5);
                ctx.lineTo(0, -size * 0.5);
                ctx.rotate(Math.PI / 5);
                ctx.lineTo(0, -size);
            }
            ctx.closePath();
            ctx.fillStyle = color;
            ctx.shadowColor = color;
            ctx.shadowBlur = 15;
            ctx.fill();
            ctx.restore();
        }

        function animate() {
            // Clear the canvas completely for a clean look
            ctx.clearRect(0, 0, canvas.width, canvas.height); 

            // Update and draw particles
            particles.forEach((p, i) => {
                p.x += p.vx;
                p.y += p.vy;
                p.vy += 0.05; // gravity pull
                p.life--;

                if (p.life > 0) {
                    drawStar(p.x, p.y, p.size, p.color);
                } else {
                    particles.splice(i, 1);
                }
            });

            // Continue animation if particles remain
            if (particles.length > 0) {
                requestAnimationFrame(animate);
            } else {
                // Final clear once animation is complete
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            }
        }

        animate();
    }

    /**
     * Handles the 'Back' button click.
     */
    function handleBack() {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            loadQuestion();
        }
    }

    /**
     * Switches to the Review Screen and generates the review content.
     */
    function showReviewScreen() {
        quizScreen.classList.remove('active');
        reviewScreen.classList.add('active');
        
        // Hide/disable navigation buttons
        backButton.style.display = 'none';
        nextButton.style.display = 'none';

        const reviewDetails = document.getElementById('review-details');
        reviewDetails.innerHTML = '';

        quizData.forEach((question, index) => {
            const userAnswer = userAnswers[index];
            const item = document.createElement('div');
            item.classList.add('review-item');

            const scoreDisplay = userAnswer ? `<span class="review-score">${userAnswer.score.toFixed(0)} / 1</span>` : '';

            item.innerHTML = `
                <div class="review-question-title">Q${index + 1}: ${question.question} ${scoreDisplay}</div>
                <ul style="list-style-type: none; padding-left: 0;">
                    ${question.options.map((opt, i) => {
                        const isSelected = userAnswer && userAnswer.selected.includes(i);
                        let className = '';
                        if (opt.isCorrect) {
                            className = 'correct';
                        } else if (isSelected && !opt.isCorrect) {
                            className = 'wrong';
                        }
                        return `<li class="${className}" style="padding: 5px; margin-left: 10px; border-left: 3px solid ${opt.isCorrect ? '#4cd964' : (isSelected ? '#ff3b30' : '#ccc')}; margin-bottom: 3px; background-color: ${className === 'correct' ? '#e6ffe6' : (className === 'wrong' ? '#ffe6e6' : 'white')};">
                            ${opt.text}
                            ${isSelected ? ' (Your Selection)' : ''}
                        </li>`;
                    }).join('')}
                </ul>
            `;
            reviewDetails.appendChild(item);
        });

        // Display Final Score
        const finalScore = document.createElement('div');
        finalScore.classList.add('review-final-score');
        finalScore.textContent = `FINAL SCORE: ${totalScore.toFixed(0)} / ${quizData.length.toFixed(0)}`;
        reviewDetails.appendChild(finalScore);
    }

    // --- Event Listeners and Initialization ---
    backButton.addEventListener('click', handleBack);
    nextButton.addEventListener('click', handleNext);

    // Preload sounds
    correctSound.load();
    wrongSound.load();

    // Initial load
    loadQuestion();
    updateScoreDisplay();
});
