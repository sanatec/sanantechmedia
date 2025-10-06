document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "The name \"GeoGebra\" is a portmanteau of which two words?",
    "options": [
      { "text": "Geography and Gebra", "isCorrect": false },
      { "text": "Geometry and Algebra", "isCorrect": true },
      { "text": "Geology and Algebra", "isCorrect": false },
      { "text": "Geography and Geometry", "isCorrect": false }
    ]
  },
  {
    "question": "In GeoGebra, the coordinates (3, 2) represent a point that is:",
    "options": [
      { "text": "3 units left and 2 units up from the origin.", "isCorrect": false },
      { "text": "3 units right and 2 units down from the origin.", "isCorrect": false },
      { "text": "3 units right and 2 units up from the origin.", "isCorrect": true },
      { "text": "3 units left and 2 units down from the origin.", "isCorrect": false }
    ]
  },
  {
    "question": "Which view in GeoGebra displays the algebraic representation of objects (like equations and coordinates)?",
    "options": [
      { "text": "Graphics View", "isCorrect": false },
      { "text": "Algebra View", "isCorrect": true },
      { "text": "Spreadsheet View", "isCorrect": false },
      { "text": "CAS View", "isCorrect": false }
    ]
  },
  {
    "question": "What is the keyboard shortcut to show the Algebra View in GeoGebra if it is not visible?",
    "options": [
      { "text": "Ctrl+Shift+A", "isCorrect": true },
      { "text": "Ctrl+A", "isCorrect": false },
      { "text": "Ctrl+G", "isCorrect": false },
      { "text": "F5", "isCorrect": false }
    ]
  },
  {
    "question": "The equation x = 1 graphically represents a line that is:",
    "options": [
      { "text": "Parallel to the X-axis", "isCorrect": false },
      { "text": "Parallel to the Y-axis", "isCorrect": true },
      { "text": "At a 45-degree angle", "isCorrect": false },
      { "text": "The line Y = X", "isCorrect": false }
    ]
  },
  {
    "question": "The equation y = 2 graphically represents a line that is:",
    "options": [
      { "text": "Parallel to the X-axis", "isCorrect": true },
      { "text": "Parallel to the Y-axis", "isCorrect": false },
      { "text": "At a 45-degree angle", "isCorrect": false },
      { "text": "The line X = Y", "isCorrect": false }
    ]
  },
  {
    "question": "In GeoGebra's Input Bar, how do you correctly type the equation for a parabola, y = x²?",
    "options": [
      { "text": "y = x2", "isCorrect": false },
      { "text": "y = x^2", "isCorrect": true },
      { "text": "y = x*x", "isCorrect": false },
      { "text": "y = x(sq)", "isCorrect": false }
    ]
  },
  {
    "question": "The command Segment(A, B) in the Input Bar will create:",
    "options": [
      { "text": "A line that extends infinitely through points A and B.", "isCorrect": false },
      { "text": "A ray starting at point A and passing through point B.", "isCorrect": false },
      { "text": "A line segment with endpoints A and B.", "isCorrect": true },
      { "text": "A vector from point A to point B.", "isCorrect": false }
    ]
  },
  {
    "question": "The equation x² + y² = 4 represents a:",
    "options": [
      { "text": "Line with a slope of 4", "isCorrect": false },
      { "text": "Parabola opening upwards", "isCorrect": false },
      { "text": "Circle with a radius of 2", "isCorrect": true },
      { "text": "Circle with a radius of 4", "isCorrect": false }
    ]
  },
  {
    "question": "In the Algebraic View, a point defined as A = (1, 5) indicates that:",
    "options": [
      { "text": "Point A has an x-coordinate of 5 and a y-coordinate of 1.", "isCorrect": false },
      { "text": "Point A has an x-coordinate of 1 and a y-coordinate of 5.", "isCorrect": true },
      { "text": "Point A lies on the line y = 5x.", "isCorrect": false },
      { "text": "Point A is 5 units away from the origin.", "isCorrect": false }
    ]
  },
  {
    "question": "If you type B(1,3), C(1,4), and D(1,5) in the Input Bar, all the points will lie on the line:",
    "options": [
      { "text": "y = 1", "isCorrect": false },
      { "text": "x = 1", "isCorrect": true },
      { "text": "y = x", "isCorrect": false },
      { "text": "y = x + 1", "isCorrect": false }
    ]
  },
  {
    "question": "The \"Input History\" in GeoGebra can be accessed by:",
    "options": [
      { "text": "Closing and reopening the software.", "isCorrect": false },
      { "text": "Pressing the Up Arrow key when the cursor is in the Input Bar.", "isCorrect": true },
      { "text": "Looking in the File menu.", "isCorrect": false },
      { "text": "Checking the Algebra View.", "isCorrect": false }
    ]
  },
  {
    "question": "The tool used to draw a line segment between two points in the Graphics View is the:",
    "options": [
      { "text": "Line Tool", "isCorrect": false },
      { "text": "Ray Tool", "isCorrect": false },
      { "text": "Segment Tool", "isCorrect": true },
      { "text": "Vector Tool", "isCorrect": false }
    ]
  },
  {
    "question": "In the equation x - y = 5, for any point on the line, the relationship between its x and y coordinates is that:",
    "options": [
      { "text": "Their sum is always 5.", "isCorrect": false },
      { "text": "Their difference (x - y) is always 5.", "isCorrect": true },
      { "text": "Their product is always 5.", "isCorrect": false },
      { "text": "Their ratio (x/y) is always 5.", "isCorrect": false }
    ]
  },
  {
    "question": "The shape generated by the equation y = 2x is a:",
    "options": [
      { "text": "Vertical line", "isCorrect": false },
      { "text": "Horizontal line", "isCorrect": false },
      { "text": "Straight line with a positive slope", "isCorrect": true },
      { "text": "Parabola", "isCorrect": false }
    ]
  },
  {
    "question": "You want to create a point at coordinates (4, -2) without using the mouse. What should you type in the Input Bar?",
    "options": [
      { "text": "Point(4, -2)", "isCorrect": false },
      { "text": "(4, -2)", "isCorrect": false },
      { "text": "A(4, -2)", "isCorrect": false },
      { "text": "Any of the above", "isCorrect": true }
    ]
  },
  {
    "question": "You have points A(2,1) and B(2,7). Which command will create a vertical line segment connecting them?",
    "options": [
      { "text": "Line(A, B)", "isCorrect": false },
      { "text": "Ray(A, B)", "isCorrect": false },
      { "text": "Segment(A, B)", "isCorrect": true },
      { "text": "Vector(A, B)", "isCorrect": false }
    ]
  },
  {
    "question": "You need to draw a circle with its center at (0,0) and a radius of 3 units using the Input Bar. What is the correct command?",
    "options": [
      { "text": "Circle((0,0), 3)", "isCorrect": false },
      { "text": "Circle(0, 0, 3)", "isCorrect": false },
      { "text": "x^2 + y^2 = 3", "isCorrect": false },
      { "text": "x^2 + y^2 = 9", "isCorrect": true }
    ]
  },
  {
    "question": "You type y = 3x + 1 into the Input Bar. What will be created?",
    "options": [
      { "text": "A point at (3, 1)", "isCorrect": false },
      { "text": "A horizontal line", "isCorrect": false },
      { "text": "A straight line with a slope of 3 and y-intercept of 1", "isCorrect": true },
      { "text": "A parabola", "isCorrect": false }
    ]
  },
  {
    "question": "You have drawn the lines y=2 and x=5. What are the coordinates of their intersection point?",
    "options": [
      { "text": "(2, 5)", "isCorrect": false },
      { "text": "(5, 2)", "isCorrect": true },
      { "text": "(0, 0)", "isCorrect": false },
      { "text": "(7, 7)", "isCorrect": false }
    ]
  },
  {
    "question": "To draw a line parallel to the x-axis that passes through the point (0, 4), which equation should you enter?",
    "options": [
      { "text": "x = 4", "isCorrect": false },
      { "text": "y = 4", "isCorrect": true },
      { "text": "y = x + 4", "isCorrect": false },
      { "text": "x = 0", "isCorrect": false }
    ]
  },
  {
    "question": "After creating a line, you notice its equation in the Algebra View is y = 0.5x + 2. This means the line:",
    "options": [
      { "text": "Crosses the y-axis at (0, 2) and rises 1 unit for every 2 units it runs to the right.", "isCorrect": true },
      { "text": "Crosses the y-axis at (0, 0.5) and rises 2 units for every 1 unit it runs.", "isCorrect": false },
      { "text": "Is a vertical line at x=2.", "isCorrect": false },
      { "text": "Is a horizontal line at y=2.", "isCorrect": false }
    ]
  },
  {
    "question": "You want to create a geometric construction using only the Input Bar, without any tools. Which of the following sequences is possible?",
    "options": [
      { "text": "A=(1,1), B=(3,3), Line(A,B)", "isCorrect": true },
      { "text": "Segment Tool, click on (1,1), click on (3,3)", "isCorrect": false },
      { "text": "Circle Tool, click on (0,0), drag to (2,0)", "isCorrect": false },
      { "text": "Use the Move tool to drag point A.", "isCorrect": false }
    ]
  },
  {
    "question": "The command Circle(A, 2) where A is the point (1,4) will create a circle with:",
    "options": [
      { "text": "Center at (2, 2) and passing through point A.", "isCorrect": false },
      { "text": "Center at (1, 4) and a radius of 2 units.", "isCorrect": true },
      { "text": "Center at (0,0) and a diameter of 4 units.", "isCorrect": false },
      { "text": "Center at (2, 8) and passing through point A.", "isCorrect": false }
    ]
  },
  {
    "question": "To visualize the solution to the system of equations y = x and y = -x + 4, what should you do in GeoGebra?",
    "options": [
      { "text": "Plot both equations using the Input Bar and find their intersection point.", "isCorrect": true },
      { "text": "Plot only the first equation and use the Slope tool.", "isCorrect": false },
      { "text": "Use the Polygon tool to draw a triangle.", "isCorrect": false },
      { "text": "Plot a single point at (2,2).", "isCorrect": false }
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
