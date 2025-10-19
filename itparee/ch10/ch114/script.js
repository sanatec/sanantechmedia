document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "FSF (ഫ്രീ സോഫ്റ്റ്‌വെയർ ഫൗണ്ടേഷൻ) പ്രോത്സാഹിപ്പിക്കുന്നത് എന്താണ്?",
    "options": [
      { "text": "ഹാർഡ്‌വെയർ രൂപകൽപ്പന", "isCorrect": false },
      { "text": "പണം നൽകേണ്ട സോഫ്റ്റ്‌വെയർ", "isCorrect": false },
      { "text": "ക്ലോസ്ഡ് സോഴ്‌സ് സിസ്റ്റങ്ങൾ", "isCorrect": false },
      { "text": "ഫ്രീ സോഫ്റ്റ്‌വെയർ പ്രസ്ഥാനം", "isCorrect": true }
    ]
  },
  {
    "question": "GNU Bash-ൻ്റെ ധർമ്മം എന്താണ്?",
    "options": [
      { "text": "ഷെൽ (Shell) ആയി പ്രവർത്തിക്കുന്നു", "isCorrect": true },
      { "text": "കംപൈലർ ആയി പ്രവർത്തിക്കുന്നു", "isCorrect": false },
      { "text": "ലൈസൻസ് ആയി പ്രവർത്തിക്കുന്നു", "isCorrect": false },
      { "text": "കേർണൽ ആയി പ്രവർത്തിക്കുന്നു", "isCorrect": false }
    ]
  },
  {
    "question": "GNU-ൽ മോഡൽ ചെയ്ത OS ഏതാണ്?",
    "options": [
      { "text": "Windows", "isCorrect": false },
      { "text": "Android", "isCorrect": false },
      { "text": "macOS", "isCorrect": false },
      { "text": "Unix", "isCorrect": true }
    ]
  },
  {
    "question": "‘Fork’ എന്നതിൻ്റെ അർത്ഥം?",
    "options": [
      { "text": "മാറ്റം വരുത്തിയ പതിപ്പ് സൃഷ്ടിക്കുന്നത്", "isCorrect": true },
      { "text": "പുതിയ പ്രോഗ്രാം ഇൻസ്റ്റാൾ ചെയ്യുന്നത്", "isCorrect": false },
      { "text": "കോഡ് കംപൈൽ ചെയ്യുന്നത്", "isCorrect": false },
      { "text": "സിസ്റ്റം ടെസ്റ്റ് ചെയ്യുന്നത്", "isCorrect": false }
    ]
  },
  {
    "question": "ഫ്രീ സോഫ്റ്റ്‌വെയർ അല്ലാത്തത് ഏതാണ്?",
    "options": [
      { "text": "Windows", "isCorrect": true },
      { "text": "Linux", "isCorrect": false },
      { "text": "GIMP", "isCorrect": false },
      { "text": "LibreOffice", "isCorrect": false }
    ]
  },
  {
    "question": "FLOSS എന്നാൽ എന്താണ്?",
    "options": [
      { "text": "Free/Libre and Open Source Software", "isCorrect": true },
      { "text": "File Level Operating System Software", "isCorrect": false },
      { "text": "Free License Object Software", "isCorrect": false },
      { "text": "Framework Library Of System Software", "isCorrect": false }
    ]
  },
  {
    "question": "പ്രൊപ്രൈറ്ററി (Proprietary) ലൈസൻസ് ഏതാണ്?",
    "options": [
      { "text": "BSD", "isCorrect": false },
      { "text": "Apache", "isCorrect": false },
      { "text": "GPL", "isCorrect": false },
      { "text": "EULA", "isCorrect": true }
    ]
  },
  {
    "question": "ഒരു സോഫ്റ്റ്‌വെയർ ലൈസൻസിൻ്റെ ഉദ്ദേശ്യം?",
    "options": [
      { "text": "ഉപയോക്താവിൻ്റെ അവകാശങ്ങൾ നിർവചിക്കുക", "isCorrect": true },
      { "text": "പ്രോഗ്രാമുകൾ വേഗത്തിൽ പ്രവർത്തിപ്പിക്കുക", "isCorrect": false },
      { "text": "GUI ചേർക്കുക", "isCorrect": false },
      { "text": "ഡാറ്റ എൻക്രിപ്റ്റ് ചെയ്യുക", "isCorrect": false }
    ]
  },
  {
    "question": "Copyleft-ന് തുടക്കമിട്ടത് ആരാണ്?",
    "options": [
      { "text": "ലിനസ് ടോർവാൾഡ്സ്", "isCorrect": false },
      { "text": "കെൻ തോംസൺ", "isCorrect": false },
      { "text": "ബിൽ ഗേറ്റ്സ്", "isCorrect": false },
      { "text": "റിച്ചാർഡ് സ്റ്റാൾമാൻ", "isCorrect": true }
    ]
  },
  {
    "question": "ഫ്രീ അല്ലാത്ത സോഫ്റ്റ്‌വെയറുമായി സംയോജിപ്പിക്കാൻ അനുവദിക്കുന്ന ലൈസൻസ്?",
    "options": [
      { "text": "Apache License", "isCorrect": true },
      { "text": "GPL", "isCorrect": false },
      { "text": "BSD", "isCorrect": false },
      { "text": "FLOSS", "isCorrect": false }
    ]
  },
  {
    "question": "GPL എന്നതിൻ്റെ പൂർണ്ണരൂപം?",
    "options": [
      { "text": "General Public License", "isCorrect": true },
      { "text": "GNU Programming License", "isCorrect": false },
      { "text": "Global Program License", "isCorrect": false },
      { "text": "Generic Product License", "isCorrect": false }
    ]
  },
  {
    "question": "ഓപ്പൺ ഹാർഡ്‌വെയർ ഏതാണ്?",
    "options": [
      { "text": "MacBook", "isCorrect": false },
      { "text": "Surface Pro", "isCorrect": false },
      { "text": "iPhone", "isCorrect": false },
      { "text": "Arduino", "isCorrect": true }
    ]
  },
  {
    "question": "Testware എന്നതിൻ്റെ അർത്ഥം?",
    "options": [
      { "text": "ടെസ്റ്റിംഗ് ആവശ്യങ്ങൾക്കുള്ള സോഫ്റ്റ്‌വെയർ", "isCorrect": true },
      { "text": "സ്ഥിരമായ സോഫ്റ്റ്‌വെയർ", "isCorrect": false },
      { "text": "ഓപ്പൺ സോഴ്‌സ് കോഡ്", "isCorrect": false },
      { "text": "ഹാർഡ്‌വെയർ ടെസ്റ്റിംഗ് ടൂൾ", "isCorrect": false }
    ]
  },
  {
    "question": "പ്രൊപ്രൈറ്ററി ലൈസൻസിംഗ് ഉപയോഗിക്കുന്ന OS?",
    "options": [
      { "text": "Windows", "isCorrect": true },
      { "text": "Ubuntu", "isCorrect": false },
      { "text": "Debian", "isCorrect": false },
      { "text": "Linux Mint", "isCorrect": false }
    ]
  },
  {
    "question": "Python ഭാഷയുടെ പ്രധാന തത്വം?",
    "options": [
      { "text": "കോഡ് എളുപ്പത്തിൽ വായിക്കാൻ കഴിയുന്നത്", "isCorrect": true },
      { "text": "വേഗത്തിലുള്ള കംപൈലേഷൻ", "isCorrect": false },
      { "text": "കുറഞ്ഞ മെമ്മറി ഉപയോഗം", "isCorrect": false },
      { "text": "കോഡ് എൻക്രിപ്ഷൻ", "isCorrect": false }
    ]
  },
  {
    "question": "വേർഷൻ മാനേജ്‌മെൻ്റിനുള്ള ടൂൾ?",
    "options": [
      { "text": "Git", "isCorrect": true },
      { "text": "Excel", "isCorrect": false },
      { "text": "Notepad", "isCorrect": false },
      { "text": "MS Paint", "isCorrect": false }
    ]
  },
  {
    "question": "പുതിയ അപ്‌ഡേറ്റുകൾ പുറത്തിറക്കുന്നതിനെ വിളിക്കുന്നത്?",
    "options": [
      { "text": "വേർഷനിംഗ് (Versioning)", "isCorrect": true },
      { "text": "ഡീബഗ്ഗിംഗ്", "isCorrect": false },
      { "text": "ഫോർക്കിംഗ്", "isCorrect": false },
      { "text": "എൻക്രിപ്ഷൻ", "isCorrect": false }
    ]
  },
  {
    "question": "FLOSS ബ്രൗസറിന് ഉദാഹരണം?",
    "options": [
      { "text": "Safari", "isCorrect": false },
      { "text": "Opera", "isCorrect": false },
      { "text": "Edge", "isCorrect": false },
      { "text": "Mozilla Firefox", "isCorrect": true }
    ]
  },
  {
    "question": "Unix-ൻ്റെ ഡെവലപ്പർമാർ?",
    "options": [
      { "text": "ബിൽ ഗേറ്റ്സ് & പോൾ അലൻ", "isCorrect": false },
      { "text": "സ്റ്റാൾമാൻ & ടോർവാൾഡ്സ്", "isCorrect": false },
      { "text": "ജോബ്സ് & വോസ്നിയാക്ക്", "isCorrect": false },
      { "text": "കെൻ തോംസൺ, ഡെന്നിസ് റിച്ചി, ഡഗ്ലസ് മക്ഇൽറോയ്", "isCorrect": true }
    ]
  },
  {
    "question": "GNU പ്രോജക്റ്റിൻ്റെ ഉദ്ദേശ്യം?",
    "options": [
      { "text": "ഫ്രീ സോഫ്റ്റ്‌വെയർ സിസ്റ്റം വികസിപ്പിക്കുക", "isCorrect": true },
      { "text": "OS വിൽക്കുക", "isCorrect": false },
      { "text": "ടെസ്റ്റ്‌വെയർ ഉണ്ടാക്കുക", "isCorrect": false },
      { "text": "ഹാർഡ്‌വെയർ ഉണ്ടാക്കുക", "isCorrect": false }
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
