document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "What is a Python module?",
    "options": [
      { "text": "A function", "isCorrect": false },
      { "text": "A command", "isCorrect": false },
      { "text": "A file with functions, variables, and classes", "isCorrect": true },
      { "text": "A variable", "isCorrect": false }
    ]
  },
  {
    "question": "Which module helps with mathematical functions?",
    "options": [
      { "text": "os", "isCorrect": false },
      { "text": "math", "isCorrect": true },
      { "text": "turtle", "isCorrect": false },
      { "text": "graphics", "isCorrect": false }
    ]
  },
  {
    "question": "What is sqrt() used for in the math module?",
    "options": [
      { "text": "Square", "isCorrect": false },
      { "text": "Square root", "isCorrect": true },
      { "text": "Power", "isCorrect": false },
      { "text": "Multiply", "isCorrect": false }
    ]
  },
  {
    "question": "How to comment a line in Python?",
    "options": [
      { "text": "// comment", "isCorrect": false },
      { "text": "", "isCorrect": false },
      { "text": "-- comment", "isCorrect": false },
      { "text": "# comment", "isCorrect": true }
    ]
  },
  {
    "question": "What is the purpose of indentation in Python?",
    "options": [
      { "text": "Improve readability", "isCorrect": false },
      { "text": "Mark code blocks", "isCorrect": false },
      { "text": "Both A and B", "isCorrect": true },
      { "text": "None", "isCorrect": false }
    ]
  },
  {
    "question": "What happens if indentation is incorrect in Python?",
    "options": [
      { "text": "Warning", "isCorrect": false },
      { "text": "Program skips it", "isCorrect": false },
      { "text": "SyntaxError", "isCorrect": true },
      { "text": "Nothing", "isCorrect": false }
    ]
  },
  {
    "question": "What is the function of elif in Python?",
    "options": [
      { "text": "Else if", "isCorrect": true },
      { "text": "Loop", "isCorrect": false },
      { "text": "Input", "isCorrect": false },
      { "text": "End program", "isCorrect": false }
    ]
  },
  {
    "question": "What will range(1, 20, 2) return?",
    "options": [
      { "text": "All numbers from 1 to 20", "isCorrect": false },
      { "text": "All even numbers", "isCorrect": false },
      { "text": "Odd numbers from 1 to 19", "isCorrect": true },
      { "text": "Multiples of 2", "isCorrect": false }
    ]
  },
  {
    "question": "What does print(\"Hello\", 5) display?",
    "options": [
      { "text": "Hello", "isCorrect": false },
      { "text": "5", "isCorrect": false },
      { "text": "Hello 5", "isCorrect": true },
      { "text": "Error", "isCorrect": false }
    ]
  },
  {
    "question": "What is == used for in Python?",
    "options": [
      { "text": "Assign value", "isCorrect": false },
      { "text": "Compare values", "isCorrect": true },
      { "text": "Comment", "isCorrect": false },
      { "text": "Delete value", "isCorrect": false }
    ]
  },
  {
    "question": "What is the default datatype of input()?",
    "options": [
      { "text": "Integer", "isCorrect": false },
      { "text": "Float", "isCorrect": false },
      { "text": "String", "isCorrect": true },
      { "text": "Boolean", "isCorrect": false }
    ]
  },
  {
    "question": "Which one is a valid list in Python?",
    "options": [
      { "text": "[\"a\", \"b\", \"c\"]", "isCorrect": true },
      { "text": "\"a\", \"b\", \"c\"", "isCorrect": false },
      { "text": "{a, b, c}", "isCorrect": false },
      { "text": "(a, b, c)", "isCorrect": false }
    ]
  },
  {
    "question": "Which loop is ideal when the number of iterations is unknown?",
    "options": [
      { "text": "for", "isCorrect": false },
      { "text": "while", "isCorrect": true },
      { "text": "do-while", "isCorrect": false },
      { "text": "if", "isCorrect": false }
    ]
  },
  {
    "question": "What is the output of range(10)?",
    "options": [
      { "text": "1 to 10", "isCorrect": false },
      { "text": "0 to 9", "isCorrect": true },
      { "text": "10 to 20", "isCorrect": false },
      { "text": "0 to 10", "isCorrect": false }
    ]
  },
  {
    "question": "What is the use of int(input())?",
    "options": [
      { "text": "Take input", "isCorrect": false },
      { "text": "Convert input to string", "isCorrect": false },
      { "text": "Take input and convert to integer", "isCorrect": true },
      { "text": "Convert to float", "isCorrect": false }
    ]
  },
  {
    "question": "Which symbol is used for modulus in Python?",
    "options": [
      { "text": "/", "isCorrect": false },
      { "text": "%", "isCorrect": true },
      { "text": "*", "isCorrect": false },
      { "text": "//", "isCorrect": false }
    ]
  },
  {
    "question": "What is the output of print(10 // 3)?",
    "options": [
      { "text": "3.33", "isCorrect": false },
      { "text": "3", "isCorrect": true },
      { "text": "4", "isCorrect": false },
      { "text": "Error", "isCorrect": false }
    ]
  },
  {
    "question": "Which function is used to print text in Python?",
    "options": [
      { "text": "write()", "isCorrect": false },
      { "text": "display()", "isCorrect": false },
      { "text": "show()", "isCorrect": false },
      { "text": "print()", "isCorrect": true }
    ]
  },
  {
    "question": "What does the not operator do?",
    "options": [
      { "text": "Adds values", "isCorrect": false },
      { "text": "Returns opposite boolean", "isCorrect": true },
      { "text": "Checks values", "isCorrect": false },
      { "text": "Assigns false", "isCorrect": false }
    ]
  },
  {
    "question": "Python is case-sensitive. True or False?",
    "options": [
      { "text": "True", "isCorrect": true },
      { "text": "False", "isCorrect": false }
    ]
  },
  {
    "question": "What is the full form of IDE?",
    "options": [
      { "text": "Integrated Data Editor", "isCorrect": false },
      { "text": "Internal Development Editor", "isCorrect": false },
      { "text": "Integrated Development Environment", "isCorrect": true },
      { "text": "Integrated Device Environment", "isCorrect": false }
    ]
  },
  {
    "question": "What is the turtle command to draw a circle?",
    "options": [
      { "text": "circle()", "isCorrect": true },
      { "text": "drawCircle()", "isCorrect": false },
      { "text": "circle[]", "isCorrect": false },
      { "text": "loop.circle()", "isCorrect": false }
    ]
  },
  {
    "question": "Which command draws all turtle graphics in red?",
    "options": [
      { "text": "pen(\"red\")", "isCorrect": false },
      { "text": "color(\"red\")", "isCorrect": true },
      { "text": "penColor(\"red\")", "isCorrect": false },
      { "text": "fill(\"red\")", "isCorrect": false }
    ]
  },
  {
    "question": "What is count += 1 shorthand for?",
    "options": [
      { "text": "count = 1", "isCorrect": false },
      { "text": "count = count - 1", "isCorrect": false },
      { "text": "count = count + 1", "isCorrect": true },
      { "text": "None", "isCorrect": false }
    ]
  },
  {
    "question": "What does the os module help with?",
    "options": [
      { "text": "Math operations", "isCorrect": false },
      { "text": "Operating system-related tasks", "isCorrect": true },
      { "text": "Internet Browse", "isCorrect": false },
      { "text": "Drawing", "isCorrect": false }
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
