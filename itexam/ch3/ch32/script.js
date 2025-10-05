document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "What is indentation in Python?",
    "options": [
      { "text": "Syntax error", "isCorrect": false },
      { "text": "Tab space before a line", "isCorrect": true },
      { "text": "Ignored space", "isCorrect": false },
      { "text": "Not required", "isCorrect": false }
    ]
  },
  {
    "question": "What is the use of else: in Python?",
    "options": [
      { "text": "Ends the program", "isCorrect": false },
      { "text": "Checks the condition", "isCorrect": false },
      { "text": "Runs when if condition is false", "isCorrect": true },
      { "text": "Repeats block", "isCorrect": false }
    ]
  },
  {
    "question": "Which of these is a conditional structure?",
    "options": [
      { "text": "loop", "isCorrect": false },
      { "text": "print()", "isCorrect": false },
      { "text": "if...else", "isCorrect": true },
      { "text": "import", "isCorrect": false }
    ]
  },
  {
    "question": "What does while count < 3: do?",
    "options": [
      { "text": "Loops infinitely", "isCorrect": false },
      { "text": "Runs 3 times if count is updated", "isCorrect": true },
      { "text": "Terminates the program", "isCorrect": false },
      { "text": "Gives error", "isCorrect": false }
    ]
  },
  {
    "question": "Which of these keywords is used in loops?",
    "options": [
      { "text": "stop", "isCorrect": false },
      { "text": "repeat", "isCorrect": false },
      { "text": "while", "isCorrect": true },
      { "text": "do", "isCorrect": false }
    ]
  },
  {
    "question": "How many times will this loop run? count = 0; while count < 3: count += 1",
    "options": [
      { "text": "0", "isCorrect": false },
      { "text": "2", "isCorrect": false },
      { "text": "3", "isCorrect": true },
      { "text": "Infinite", "isCorrect": false }
    ]
  },
  {
    "question": "Which loop is used for a known number of repetitions?",
    "options": [
      { "text": "while", "isCorrect": false },
      { "text": "do-while", "isCorrect": false },
      { "text": "for", "isCorrect": true },
      { "text": "if", "isCorrect": false }
    ]
  },
  {
    "question": "What does range(1, 5) return?",
    "options": [
      { "text": "1, 2, 3, 4", "isCorrect": true },
      { "text": "1 to 5", "isCorrect": false },
      { "text": "0 to 5", "isCorrect": false },
      { "text": "Error", "isCorrect": false }
    ]
  },
  {
    "question": "What is the output of for i in range(1,6): print(i)?",
    "options": [
      { "text": "1 2 3 4 5", "isCorrect": true },
      { "text": "0 1 2 3 4 5", "isCorrect": false },
      { "text": "1 to 6", "isCorrect": false },
      { "text": "2 to 6", "isCorrect": false }
    ]
  },
  {
    "question": "How to print even numbers from 20 to 40 in Python?",
    "options": [
      { "text": "range(20,41,2)", "isCorrect": true },
      { "text": "range(20,40)", "isCorrect": false },
      { "text": "range(1,20,2)", "isCorrect": false },
      { "text": "range(2,20,20)", "isCorrect": false }
    ]
  },
  {
    "question": "What does the for loop require in Python?",
    "options": [
      { "text": "A set of conditions", "isCorrect": false },
      { "text": "A function", "isCorrect": false },
      { "text": "A range or sequence", "isCorrect": true },
      { "text": "A class", "isCorrect": false }
    ]
  },
  {
    "question": "Which Python module is used for graphics?",
    "options": [
      { "text": "sys", "isCorrect": false },
      { "text": "os", "isCorrect": false },
      { "text": "turtle", "isCorrect": true },
      { "text": "cmd", "isCorrect": false }
    ]
  },
  {
    "question": "What does forward(100) do in turtle?",
    "options": [
      { "text": "Prints text", "isCorrect": false },
      { "text": "Moves forward 100 units", "isCorrect": true },
      { "text": "Draws a circle", "isCorrect": false },
      { "text": "Rotates left", "isCorrect": false }
    ]
  },
  {
    "question": "How do you turn right in turtle?",
    "options": [
      { "text": "rotate(90)", "isCorrect": false },
      { "text": "right(90)", "isCorrect": true },
      { "text": "turn_right(90)", "isCorrect": false },
      { "text": "move(90)", "isCorrect": false }
    ]
  },
  {
    "question": "To import all turtle functions, use:",
    "options": [
      { "text": "import turtle.all", "isCorrect": false },
      { "text": "import * from turtle", "isCorrect": false },
      { "text": "from turtle import *", "isCorrect": true },
      { "text": "include turtle", "isCorrect": false }
    ]
  },
  {
    "question": "Which Python keyword is used to import a module?",
    "options": [
      { "text": "include", "isCorrect": false },
      { "text": "import", "isCorrect": true },
      { "text": "using", "isCorrect": false },
      { "text": "use", "isCorrect": false }
    ]
  },
  {
    "question": "What does color(\"red\") do in turtle graphics?",
    "options": [
      { "text": "Sets background red", "isCorrect": false },
      { "text": "Fills red", "isCorrect": false },
      { "text": "Sets pen color to red", "isCorrect": true },
      { "text": "Prints \"red\"", "isCorrect": false }
    ]
  },
  {
    "question": "What does circle(100) do in turtle?",
    "options": [
      { "text": "Draws a circle with radius 100", "isCorrect": true },
      { "text": "Rotates turtle 100 degrees", "isCorrect": false },
      { "text": "Moves turtle 100 units", "isCorrect": false },
      { "text": "Sets pen width", "isCorrect": false }
    ]
  },
  {
    "question": "Which command draws a rectangle using turtle graphics?",
    "options": [
      { "text": "4 forward and 4 turn commands", "isCorrect": true },
      { "text": "rectangle(4)", "isCorrect": false },
      { "text": "draw_rectangle()", "isCorrect": false },
      { "text": "draw.square()", "isCorrect": false }
    ]
  },
  {
    "question": "What is the purpose of lists in Python?",
    "options": [
      { "text": "Store multiple data items", "isCorrect": true },
      { "text": "Perform calculations", "isCorrect": false },
      { "text": "Draw shapes", "isCorrect": false },
      { "text": "Create loops", "isCorrect": false }
    ]
  },
  {
    "question": "What is the correct syntax to create a list?",
    "options": [
      { "text": "list = (1,2,3)", "isCorrect": false },
      { "text": "list = {1,2,3}", "isCorrect": false },
      { "text": "list = [1,2,3]", "isCorrect": true },
      { "text": "list = <1,2,3>", "isCorrect": false }
    ]
  },
  {
    "question": "What does the for clr in colors: loop do?",
    "options": [
      { "text": "Loops through string", "isCorrect": false },
      { "text": "Loops through a list", "isCorrect": true },
      { "text": "Loops through integers", "isCorrect": false },
      { "text": "Error", "isCorrect": false }
    ]
  },
  {
    "question": "What is the datatype of items in a list?",
    "options": [
      { "text": "Only strings", "isCorrect": false },
      { "text": "Only integers", "isCorrect": false },
      { "text": "Any datatype", "isCorrect": true },
      { "text": "Boolean only", "isCorrect": false }
    ]
  },
  {
    "question": "What is IDLE in Python?",
    "options": [
      { "text": "An image editor", "isCorrect": false },
      { "text": "An IDE for Python", "isCorrect": true },
      { "text": "A debugger tool", "isCorrect": false },
      { "text": "A game", "isCorrect": false }
    ]
  },
  {
    "question": "Which menu is used to run a program in IDLE?",
    "options": [
      { "text": "File", "isCorrect": false },
      { "text": "Tools", "isCorrect": false },
      { "text": "Run", "isCorrect": true },
      { "text": "Debug", "isCorrect": false }
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
