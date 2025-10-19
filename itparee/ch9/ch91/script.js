document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "DB Browser for SQLite-ലെ ഏത് ടാബാണ് എല്ലാ റെക്കോർഡുകളും കാണാൻ നിങ്ങളെ അനുവദിക്കുന്നത്?",
    "options": [
      { "text": "Execute SQL", "isCorrect": false },
      { "text": "New Database", "isCorrect": false },
      { "text": "Browse Data", "isCorrect": true },
      { "text": "Edit Table", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു മത്സരത്തിൻ്റെ വർഷത്തിനായി ഉപയോഗിക്കുന്ന ഡാറ്റാടൈപ്പ് ഏതാണ്?",
    "options": [
      { "text": "Date", "isCorrect": false },
      { "text": "Number", "isCorrect": true },
      { "text": "Image", "isCorrect": false },
      { "text": "Text", "isCorrect": false }
    ]
  },
  {
    "question": "SQL എന്നതിൻ്റെ പൂർണ്ണരൂപം എന്താണ്?",
    "options": [
      { "text": "System Query Logic", "isCorrect": false },
      { "text": "Structured Query Language", "isCorrect": true },
      { "text": "Standard Quick Language", "isCorrect": false },
      { "text": "Simple Query Language", "isCorrect": false }
    ]
  },
  {
    "question": "2023 അല്ലെങ്കിൽ 45 പോലുള്ള മൂല്യങ്ങൾ സംഭരിക്കുന്ന ഡാറ്റാടൈപ്പ് ഏതാണ്?",
    "options": [
      { "text": "Audio", "isCorrect": false },
      { "text": "Text", "isCorrect": false },
      { "text": "Number", "isCorrect": true },
      { "text": "Image", "isCorrect": false }
    ]
  },
  {
    "question": "SQL-ൽ, 'where' ക്ലോസ് ഉപയോഗിക്കുന്നത് ________ നാണ്.",
    "options": [
      { "text": "പട്ടിക ഇല്ലാതാക്കാൻ", "isCorrect": false },
      { "text": "കോളം അപ്ഡേറ്റ് ചെയ്യാൻ", "isCorrect": false },
      { "text": "ഡാറ്റ ഫിൽട്ടർ ചെയ്യാൻ", "isCorrect": true },
      { "text": "ഡാറ്റ ഉൾപ്പെടുത്താൻ", "isCorrect": false }
    ]
  },
  {
    "question": "വരികളിലും നിരകളിലുമായി ക്രമീകരിച്ചിട്ടുള്ള ബന്ധപ്പെട്ട ഡാറ്റയുടെ ഒരു ശേഖരം ഒരു ________ ആണ്.",
    "options": [
      { "text": "ലിസ്റ്റ്", "isCorrect": false },
      { "text": "ചാർട്ട്", "isCorrect": false },
      { "text": "പട്ടിക (Table)", "isCorrect": true },
      { "text": "ഫയൽ", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു DBMS-മായി ആശയവിനിമയം നടത്താൻ ഉപയോഗിക്കുന്ന ഭാഷ ഏതാണ്?",
    "options": [
      { "text": "HTML", "isCorrect": false },
      { "text": "SQL", "isCorrect": true },
      { "text": "JavaScript", "isCorrect": false },
      { "text": "C++", "isCorrect": false }
    ]
  },
  {
    "question": "പേരുകളോ വാക്കുകളോ സംഭരിക്കുന്ന ഡാറ്റാടൈപ്പ് ഏതാണ്?",
    "options": [
      { "text": "Text", "isCorrect": true },
      { "text": "Date", "isCorrect": false },
      { "text": "Audio", "isCorrect": false },
      { "text": "Number", "isCorrect": false }
    ]
  },
  {
    "question": "DB Browser for SQLite ഉപയോഗിക്കുന്നത് ________ നാണ്.",
    "options": [
      { "text": "ഫോട്ടോകൾ എഡിറ്റ് ചെയ്യാൻ", "isCorrect": false },
      { "text": "വീഡിയോകൾ ഉണ്ടാക്കാൻ", "isCorrect": false },
      { "text": "SQLite ഡാറ്റാബേസുകൾ സൃഷ്ടിക്കാനും നിയന്ത്രിക്കാനും", "isCorrect": true },
      { "text": "ഇൻ്റർനെറ്റ് ബ്രൗസ് ചെയ്യാൻ", "isCorrect": false }
    ]
  },
  {
    "question": "താഴെ പറയുന്നവയിൽ ഒരു ഡാറ്റാടൈപ്പ് ഏതാണ്?",
    "options": [
      { "text": "Folder", "isCorrect": false },
      { "text": "Index", "isCorrect": false },
      { "text": "Image", "isCorrect": true },
      { "text": "File", "isCorrect": false }
    ]
  },
  {
    "question": "Player പട്ടികയിൽ Country പട്ടികയിലേക്ക് ലിങ്ക് ചെയ്യുന്ന കീ ഏതാണ്?",
    "options": [
      { "text": "Player_ID", "isCorrect": false },
      { "text": "Country_ID", "isCorrect": true },
      { "text": "Year", "isCorrect": false },
      { "text": "Match_ID", "isCorrect": false }
    ]
  },
  {
    "question": "മൊബൈൽ ആപ്പുകളിലും ഉപയോഗിക്കാൻ കഴിയുന്ന DBMS ഏതാണ്?",
    "options": [
      { "text": "PostgreSQL", "isCorrect": false },
      { "text": "MS Access", "isCorrect": false },
      { "text": "Oracle", "isCorrect": false },
      { "text": "SQLite", "isCorrect": true }
    ]
  },
  {
    "question": "ഒരു പട്ടികയിൽ നിന്ന് ഒരു റെക്കോർഡ് നീക്കം ചെയ്യുന്ന കമാൻഡ് ഏതാണ്?",
    "options": [
      { "text": "Select", "isCorrect": false },
      { "text": "Delete", "isCorrect": true },
      { "text": "Insert", "isCorrect": false },
      { "text": "Add", "isCorrect": false }
    ]
  },
  {
    "question": "Matches പട്ടികയിൽ വിജയിച്ച രാജ്യത്തെ പ്രതിനിധീകരിക്കുന്ന ഫീൽഡ് ഏതാണ്?",
    "options": [
      { "text": "Winner", "isCorrect": true },
      { "text": "Best_Player", "isCorrect": false },
      { "text": "Year", "isCorrect": false },
      { "text": "Country_ID", "isCorrect": false }
    ]
  },
  {
    "question": "DB Browser for SQLite ഒരു ________ സോഫ്റ്റ്‌വെയറാണ്.",
    "options": [
      { "text": "ട്രയൽ", "isCorrect": false },
      { "text": "സബ്സ്ക്രിപ്ഷൻ അടിസ്ഥാനമാക്കിയുള്ളത്", "isCorrect": false },
      { "text": "പണം നൽകേണ്ടത്", "isCorrect": false },
      { "text": "സൗജന്യം", "isCorrect": true }
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
