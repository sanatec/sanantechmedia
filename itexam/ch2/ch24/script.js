document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "Which feature helps maintain visual balance when designing headlines and content?",
    "options": [
      { "text": "Flip vertically", "isCorrect": false },
      { "text": "Use of shadows", "isCorrect": false },
      { "text": "Alignment and spacing", "isCorrect": true },
      { "text": "Use of large shapes only", "isCorrect": false }
    ]
  },
  {
    "question": "To create a banner on the front page, which tool is commonly used?",
    "options": [
      { "text": "Text Tool", "isCorrect": false },
      { "text": "Shape Tool", "isCorrect": true },
      { "text": "Node Tool", "isCorrect": false },
      { "text": "Gradient Tool", "isCorrect": false }
    ]
  },
  {
    "question": "How can the appearance of a banner be enhanced for visual impact?",
    "options": [
      { "text": "Increase font size", "isCorrect": false },
      { "text": "Add lines", "isCorrect": false },
      { "text": "Use shapes, colors, and shadows", "isCorrect": true },
      { "text": "Convert to table", "isCorrect": false }
    ]
  },
  {
    "question": "Why are images crucial on a newspaper's front page?",
    "options": [
      { "text": "They reduce space used by text", "isCorrect": false },
      { "text": "They make the newspaper more colorful", "isCorrect": false },
      { "text": "They grab readers’ attention and communicate messages quickly", "isCorrect": true },
      { "text": "They are used only for decoration", "isCorrect": false }
    ]
  },
  {
    "question": "Which tool is primarily used to create a banner in Scribus?",
    "options": [
      { "text": "Line Tool", "isCorrect": false },
      { "text": "Image Frame", "isCorrect": false },
      { "text": "Shape Tool", "isCorrect": true },
      { "text": "Polygon Tool", "isCorrect": false }
    ]
  },
  {
    "question": "What technique is used to modify the structure of a banner shape?",
    "options": [
      { "text": "Rotate tool", "isCorrect": false },
      { "text": "Node Editing", "isCorrect": true },
      { "text": "Stroke settings", "isCorrect": false },
      { "text": "Grouping", "isCorrect": false }
    ]
  },
  {
    "question": "How can you access the Node Editing window in Scribus?",
    "options": [
      { "text": "Right-click and select Node", "isCorrect": false },
      { "text": "Double-click on the shape", "isCorrect": true },
      { "text": "Use Text Properties", "isCorrect": false },
      { "text": "Use Layers menu", "isCorrect": false }
    ]
  },
  {
    "question": "To adjust the size or position of a node on a shape, you should modify:",
    "options": [
      { "text": "X-Pos and Y-Pos values", "isCorrect": true },
      { "text": "Font size", "isCorrect": false },
      { "text": "Stroke color", "isCorrect": false },
      { "text": "Layer level", "isCorrect": false }
    ]
  },
  {
    "question": "To create a reflected version of a shape for banner design, you should:",
    "options": [
      { "text": "Rotate the object 90 degrees", "isCorrect": false },
      { "text": "Flip it horizontally", "isCorrect": true },
      { "text": "Change the font", "isCorrect": false },
      { "text": "Justify the shape", "isCorrect": false }
    ]
  },
  {
    "question": "Which menu option is used to flip a shape in Scribus?",
    "options": [
      { "text": "Insert → Flip", "isCorrect": false },
      { "text": "File → Transform", "isCorrect": false },
      { "text": "Properties → X,Y,Z → Flip Horizontally", "isCorrect": true },
      { "text": "Tools → Mirror", "isCorrect": false }
    ]
  },
  {
    "question": "How can two overlapping shapes be aligned more precisely?",
    "options": [
      { "text": "Drag manually", "isCorrect": false },
      { "text": "Use arrow keys for fine adjustment", "isCorrect": true },
      { "text": "Use snap guides only", "isCorrect": false },
      { "text": "Zoom out", "isCorrect": false }
    ]
  },
  {
    "question": "Why is the Drop Shadow option used in banner design?",
    "options": [
      { "text": "To change object color", "isCorrect": false },
      { "text": "To give a 3D visual effect", "isCorrect": true },
      { "text": "To convert shape to text", "isCorrect": false },
      { "text": "To lighten the background", "isCorrect": false }
    ]
  },
  {
    "question": "Where is the Drop Shadow option found?",
    "options": [
      { "text": "Text Properties", "isCorrect": false },
      { "text": "Image Frame Menu", "isCorrect": false },
      { "text": "Properties Window under Drop Shadow tab", "isCorrect": true },
      { "text": "Insert → Effects", "isCorrect": false }
    ]
  },
  {
    "question": "Which button helps you view the current design without guides and outlines?",
    "options": [
      { "text": "Save", "isCorrect": false },
      { "text": "Export", "isCorrect": false },
      { "text": "Preview Mode", "isCorrect": true },
      { "text": "Print Preview", "isCorrect": false }
    ]
  },
  {
    "question": "What should you do frequently while designing to avoid losing your work?",
    "options": [
      { "text": "Preview the design", "isCorrect": false },
      { "text": "Adjust the layers", "isCorrect": false },
      { "text": "Save the file", "isCorrect": true },
      { "text": "Print the page", "isCorrect": false }
    ]
  },
  {
    "question": "What file format should you export your final newspaper to for printing?",
    "options": [
      { "text": "JPG", "isCorrect": false },
      { "text": "DOCX", "isCorrect": false },
      { "text": "PDF", "isCorrect": true },
      { "text": "PNG", "isCorrect": false }
    ]
  },
  {
    "question": "Which menu is used to export a Scribus document to PDF?",
    "options": [
      { "text": "Edit → Export", "isCorrect": false },
      { "text": "File → Export", "isCorrect": true },
      { "text": "Tools → Print", "isCorrect": false },
      { "text": "View → Export", "isCorrect": false }
    ]
  },
  {
    "question": "What is the benefit of exporting to PDF in Scribus?",
    "options": [
      { "text": "Smaller file size only", "isCorrect": false },
      { "text": "Editable in Word", "isCorrect": false },
      { "text": "Maintains layout and print quality", "isCorrect": true },
      { "text": "Enables animations", "isCorrect": false }
    ]
  },
  {
    "question": "What should you do before exporting to PDF to ensure everything is in place?",
    "options": [
      { "text": "Add animation", "isCorrect": false },
      { "text": "Resize the window", "isCorrect": false },
      { "text": "Use Preview Mode", "isCorrect": true },
      { "text": "Change the theme", "isCorrect": false }
    ]
  },
  {
    "question": "Which tool is used to add color to the full page background?",
    "options": [
      { "text": "Image Frame", "isCorrect": false },
      { "text": "Text Frame", "isCorrect": false },
      { "text": "Shape Tool", "isCorrect": true },
      { "text": "Font Tool", "isCorrect": false }
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
