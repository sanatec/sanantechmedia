document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "Which platform is recommended for finding reliable academic content?",
    "options": [
      { "text": "TikTok", "isCorrect": false },
      { "text": "Instagram", "isCorrect": false },
      { "text": "Google Scholar", "isCorrect": true },
      { "text": "Shopping apps", "isCorrect": false }
    ]
  },
  {
    "question": "What is the danger of excessive screen time?",
    "options": [
      { "text": "High battery use", "isCorrect": false },
      { "text": "Health problems like Tech Neck", "isCorrect": true },
      { "text": "Better eyesight", "isCorrect": false },
      { "text": "Fast charging issues", "isCorrect": false }
    ]
  },
  {
    "question": "What does \"Tech Neck\" result from?",
    "options": [
      { "text": "Playing VR games", "isCorrect": false },
      { "text": "Reading too much", "isCorrect": false },
      { "text": "Prolonged bending of neck while using devices", "isCorrect": true },
      { "text": "Using headphones", "isCorrect": false }
    ]
  },
  {
    "question": "What is one symptom of Gaming Disorder?",
    "options": [
      { "text": "Reading books", "isCorrect": false },
      { "text": "Ignoring daily responsibilities", "isCorrect": true },
      { "text": "Eating vegetables", "isCorrect": false },
      { "text": "Sleeping early", "isCorrect": false }
    ]
  },
  {
    "question": "Which of the following should NOT be shared online?",
    "options": [
      { "text": "Photos of pets", "isCorrect": false },
      { "text": "Passwords", "isCorrect": true },
      { "text": "Inspirational quotes", "isCorrect": false },
      { "text": "Public news", "isCorrect": false }
    ]
  },
  {
    "question": "Which term refers to the anxiety of not having a phone or internet connection?",
    "options": [
      { "text": "Nomophobia", "isCorrect": true },
      { "text": "Phonitis", "isCorrect": false },
      { "text": "Disconnect disorder", "isCorrect": false },
      { "text": "Cyberstress", "isCorrect": false }
    ]
  },
  {
    "question": "The correct way to complete an academic essay is by:",
    "options": [
      { "text": "Copying from Wikipedia", "isCorrect": false },
      { "text": "Adding unverified quotes", "isCorrect": false },
      { "text": "Using authentic references", "isCorrect": true },
      { "text": "Writing in emojis", "isCorrect": false }
    ]
  },
  {
    "question": "A domain name is:",
    "options": [
      { "text": "A physical server", "isCorrect": false },
      { "text": "An address for websites on the internet", "isCorrect": true },
      { "text": "An AI system", "isCorrect": false },
      { "text": "A blog title", "isCorrect": false }
    ]
  },
  {
    "question": "“Paddy and chaff” metaphor in cyberspace refers to:",
    "options": [
      { "text": "Rice and wheat", "isCorrect": false },
      { "text": "Old traditions", "isCorrect": false },
      { "text": "Truth and misinformation", "isCorrect": true },
      { "text": "Internet filters", "isCorrect": false }
    ]
  },
  {
    "question": "Who should you report inappropriate online content to?",
    "options": [
      { "text": "Classmates only", "isCorrect": false },
      { "text": "Cyber police or teacher", "isCorrect": true },
      { "text": "Random users", "isCorrect": false },
      { "text": "Online influencers", "isCorrect": false }
    ]
  },
  {
    "question": "Which of the following is not typically used for implicit data collection?",
    "options": [
      { "text": "Browse history", "isCorrect": false },
      { "text": "Location data", "isCorrect": false },
      { "text": "Feedback form", "isCorrect": true },
      { "text": "App usage details", "isCorrect": false }
    ]
  },
  {
    "question": "What is the primary purpose of ethical hacking?",
    "options": [
      { "text": "To break into secure systems", "isCorrect": false },
      { "text": "To play online games", "isCorrect": false },
      { "text": "To improve cybersecurity with permission", "isCorrect": true },
      { "text": "To steal data legally", "isCorrect": false }
    ]
  },
  {
    "question": "Which device is often used for voice-command-based control of appliances?",
    "options": [
      { "text": "Calculator", "isCorrect": false },
      { "text": "Smart speaker", "isCorrect": true },
      { "text": "Hair dryer", "isCorrect": false },
      { "text": "Blender", "isCorrect": false }
    ]
  },
  {
    "question": "Which of the following is NOT a feature of the Metaverse?",
    "options": [
      { "text": "Virtual meetings", "isCorrect": false },
      { "text": "Blockchain integration", "isCorrect": false },
      { "text": "Manual typewriters", "isCorrect": true },
      { "text": "Avatars", "isCorrect": false }
    ]
  },
  {
    "question": "A digital wallet is an example of a:",
    "options": [
      { "text": "Physical safe", "isCorrect": false },
      { "text": "Digital asset", "isCorrect": true },
      { "text": "Hard drive", "isCorrect": false },
      { "text": "Cryptocurrency", "isCorrect": false }
    ]
  },
  {
    "question": "Which one of these is NOT a valid use of blockchain in cyberspace?",
    "options": [
      { "text": "Securing transactions", "isCorrect": false },
      { "text": "Creating decentralized networks", "isCorrect": false },
      { "text": "Printing books", "isCorrect": true },
      { "text": "Supporting NFTs", "isCorrect": false }
    ]
  },
  {
    "question": "Which term refers to false or misleading information shared in cyberspace?",
    "options": [
      { "text": "Netiquette", "isCorrect": false },
      { "text": "Encryption", "isCorrect": false },
      { "text": "Misinformation", "isCorrect": true },
      { "text": "Data privacy", "isCorrect": false }
    ]
  },
  {
    "question": "Which of these helps identify fake or outdated information online?",
    "options": [
      { "text": "Following all trending hashtags", "isCorrect": false },
      { "text": "Relying on gossip", "isCorrect": false },
      { "text": "Using reliable sources", "isCorrect": true },
      { "text": "Ignoring references", "isCorrect": false }
    ]
  },
  {
    "question": "What is an example of direct user interaction that produces data?",
    "options": [
      { "text": "GPS tracking", "isCorrect": false },
      { "text": "Liking a social media post", "isCorrect": true },
      { "text": "App background refresh", "isCorrect": false },
      { "text": "Device sync logs", "isCorrect": false }
    ]
  },
  {
    "question": "Which is the best reason to rewrite information in your own words in essays?",
    "options": [
      { "text": "It's faster", "isCorrect": false },
      { "text": "Avoids plagiarism and helps understanding", "isCorrect": true },
      { "text": "You don't need references", "isCorrect": false },
      { "text": "It's more colorful", "isCorrect": false }
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
