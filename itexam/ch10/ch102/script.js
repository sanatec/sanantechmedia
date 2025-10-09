document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
    {
        "question": "What is the main goal of the GNU Project?",
        "options": [
          { "text": "To make hardware", "isCorrect": false },
          { "text": "To produce games", "isCorrect": false },
          { "text": "To sell commercial software", "isCorrect": false },
          { "text": "To create free software", "isCorrect": true }
        ],
        "correctAnswer": "To create free software"
      },
      {
        "question": "What does FSF stand for?",
        "options": [
          { "text": "File Sharing Federation", "isCorrect": false },
          { "text": "Free System Foundation", "isCorrect": false },
          { "text": "File Storage Framework", "isCorrect": false },
          { "text": "Free Software Foundation", "isCorrect": true }
        ],
        "correctAnswer": "Free Software Foundation"
      },
      {
        "question": "Which year was the GNU Project launched?",
        "options": [
          { "text": "1985", "isCorrect": false },
          { "text": "1983", "isCorrect": true },
          { "text": "1980", "isCorrect": false },
          { "text": "1979", "isCorrect": false }
        ],
        "correctAnswer": "1983"
      },
      {
        "question": "When was the Free Software Foundation formed?",
        "options": [
          { "text": "1985", "isCorrect": true },
          { "text": "1980", "isCorrect": false },
          { "text": "1979", "isCorrect": false },
          { "text": "1987", "isCorrect": false }
        ],
        "correctAnswer": "1985"
      },
      {
        "question": "Which license is used by Android OS?",
        "options": [
          { "text": "EULA", "isCorrect": false },
          { "text": "GPL", "isCorrect": false },
          { "text": "BSD", "isCorrect": false },
          { "text": "Apache License", "isCorrect": true }
        ],
        "correctAnswer": "Apache License"
      },
      {
        "question": "What does FLOSS stand for?",
        "options": [
          { "text": "Free/Libre and Open Source Software", "isCorrect": true },
          { "text": "File Layer Open System Software", "isCorrect": false },
          { "text": "Free License Operating System Software", "isCorrect": false },
          { "text": "Full License Open Software Suite", "isCorrect": false }
        ],
        "correctAnswer": "Free/Libre and Open Source Software"
      },
      {
        "question": "Which OS is an example of FLOSS?",
        "options": [
          { "text": "Windows", "isCorrect": false },
          { "text": "iOS", "isCorrect": false },
          { "text": "macOS", "isCorrect": false },
          { "text": "GNU/Linux", "isCorrect": true }
        ],
        "correctAnswer": "GNU/Linux"
      },
      {
        "question": "Which programming languages are mentioned?",
        "options": [
          { "text": "Python, C, Java, Rust", "isCorrect": true },
          { "text": "C#, Go, Ruby, Swift", "isCorrect": false },
          { "text": "Pascal, Ada, Lisp, SQL", "isCorrect": false },
          { "text": "JavaScript, Kotlin, PHP, Perl", "isCorrect": false }
        ],
        "correctAnswer": "Python, C, Java, Rust"
      },
      {
        "question": "What is GitHub used for?",
        "options": [
          { "text": "Publishing and managing code", "isCorrect": true },
          { "text": "Creating documents", "isCorrect": false },
          { "text": "Running applications", "isCorrect": false },
          { "text": "Testing software", "isCorrect": false }
        ],
        "correctAnswer": "Publishing and managing code"
      },
      {
        "question": "What is Freeware?",
        "options": [
          { "text": "Software distributed free of cost", "isCorrect": true },
          { "text": "Free to modify software", "isCorrect": false },
          { "text": "Hardware software", "isCorrect": false },
          { "text": "Open source license", "isCorrect": false }
        ],
        "correctAnswer": "Software distributed free of cost"
      },
      {
        "question": "What is Testware?",
        "options": [
          { "text": "Software with limited time use", "isCorrect": true },
          { "text": "Free software", "isCorrect": false },
          { "text": "Open hardware", "isCorrect": false },
          { "text": "Software under GPL", "isCorrect": false }
        ],
        "correctAnswer": "Software with limited time use"
      },
      {
        "question": "Who developed Unix?",
        "options": [
          { "text": "Bill Gates", "isCorrect": false },
          { "text": "Linus Torvalds", "isCorrect": false },
          { "text": "Richard Stallman", "isCorrect": false },
          { "text": "Ken Thompson and Dennis Ritchie", "isCorrect": true }
        ],
        "correctAnswer": "Ken Thompson and Dennis Ritchie"
      },
      {
        "question": "What is the Zen of Python?",
        "options": [
          { "text": "Code should be readable and clear", "isCorrect": true },
          { "text": "Code must be encrypted", "isCorrect": false },
          { "text": "Code must be compiled", "isCorrect": false },
          { "text": "Code should be short", "isCorrect": false }
        ],
        "correctAnswer": "Code should be readable and clear"
      },
      {
        "question": "What is the meaning of “Free” in Free Software?",
        "options": [
          { "text": "Freedom", "isCorrect": true },
          { "text": "Trial period", "isCorrect": false },
          { "text": "Zero price", "isCorrect": false },
          { "text": "License expiry", "isCorrect": false }
        ],
        "correctAnswer": "Freedom"
      },
      {
        "question": "What is the full form of BSD?",
        "options": [
          { "text": "Berkeley Software Distribution", "isCorrect": true },
          { "text": "Binary Source Data", "isCorrect": false },
          { "text": "Basic Software Design", "isCorrect": false },
          { "text": "Berkeley System Device", "isCorrect": false }
        ],
        "correctAnswer": "Berkeley Software Distribution"
      },
      {
        "question": "What does version control help with?",
        "options": [
          { "text": "Tracking software changes", "isCorrect": true },
          { "text": "Compiling code", "isCorrect": false },
          { "text": "Running applications", "isCorrect": false },
          { "text": "Encrypting data", "isCorrect": false }
        ],
        "correctAnswer": "Tracking software changes"
      },
      {
        "question": "Difference between GPL and EULA?",
        "options": [
          { "text": "GPL allows modification; EULA does not", "isCorrect": true },
          { "text": "EULA is free; GPL is not", "isCorrect": false },
          { "text": "GPL is paid; EULA is free", "isCorrect": false },
          { "text": "EULA is open source", "isCorrect": false }
        ],
        "correctAnswer": "GPL allows modification; EULA does not"
      },
      {
        "question": "Example of FLOSS browser?",
        "options": [
          { "text": "Edge", "isCorrect": false },
          { "text": "Chrome", "isCorrect": false },
          { "text": "Safari", "isCorrect": false },
          { "text": "Mozilla Firefox", "isCorrect": true }
        ],
        "correctAnswer": "Mozilla Firefox"
      },
      {
        "question": "Purpose of software licenses?",
        "options": [
          { "text": "To define usage rights", "isCorrect": true },
          { "text": "To run programs", "isCorrect": false },
          { "text": "To store data", "isCorrect": false },
          { "text": "To encrypt software", "isCorrect": false }
        ],
        "correctAnswer": "To define usage rights"
      },
      {
        "question": "Who criticized the Scribe software?",
        "options": [
          { "text": "Linus Torvalds", "isCorrect": false },
          { "text": "Dennis Ritchie", "isCorrect": false },
          { "text": "Ken Thompson", "isCorrect": false },
          { "text": "Richard Stallman", "isCorrect": true }
        ],
        "correctAnswer": "Richard Stallman"
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
