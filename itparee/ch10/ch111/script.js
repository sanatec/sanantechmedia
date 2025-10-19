document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "GNU പ്രോജക്റ്റ് സ്ഥാപിച്ചത് ആരാണ്?",
    "options": [
      { "text": "ലിനസ് ടോർവാൾഡ്സ്", "isCorrect": false },
      { "text": "കെൻ തോംസൺ", "isCorrect": false },
      { "text": "ഡെന്നിസ് റിച്ചി", "isCorrect": false },
      { "text": "റിച്ചാർഡ് സ്റ്റാൾമാൻ", "isCorrect": true }
    ]
  },
  {
    "question": "GNU എന്നതിൻ്റെ പൂർണ്ണരൂപം എന്താണ്?",
    "options": [
      { "text": "General Network Utility", "isCorrect": false },
      { "text": "GNU is Not Unix", "isCorrect": true },
      { "text": "Global Network Unix", "isCorrect": false },
      { "text": "General Node Utility", "isCorrect": false }
    ]
  },
  {
    "question": "ഉദാഹരണ സോഫ്റ്റ്‌വെയറായ കാൽക്കുലേറ്ററിൽ ഉപയോഗിച്ച പ്രോഗ്രാമിംഗ് ഭാഷ ഏതാണ്?",
    "options": [
      { "text": "Java", "isCorrect": false },
      { "text": "Rust", "isCorrect": false },
      { "text": "Python", "isCorrect": true },
      { "text": "C", "isCorrect": false }
    ]
  },
  {
    "question": "സോഴ്‌സ് കോഡ് (Source Code) എന്നാൽ എന്താണ്?",
    "options": [
      { "text": "മനുഷ്യർക്ക് വായിക്കാൻ കഴിയുന്ന പ്രോഗ്രാം നിർദ്ദേശങ്ങൾ", "isCorrect": true },
      { "text": "മെഷീന് പ്രവർത്തിപ്പിക്കാൻ കഴിയുന്ന ഫയൽ", "isCorrect": false },
      { "text": "ബൈനറി ഡാറ്റ", "isCorrect": false },
      { "text": "കംപൈൽ ചെയ്ത ഔട്ട്പുട്ട്", "isCorrect": false }
    ]
  },
  {
    "question": "ഒബ്ജക്റ്റ് കോഡ് (Object Code) എന്നാൽ എന്താണ്?",
    "options": [
      { "text": "സോഫ്റ്റ്‌വെയർ ലൈസൻസ്", "isCorrect": false },
      { "text": "എഡിറ്റ് ചെയ്യാൻ കഴിയുന്ന ടെക്സ്റ്റ്", "isCorrect": false },
      { "text": "പൈത്തൺ സ്ക്രിപ്റ്റ്", "isCorrect": false },
      { "text": "മെഷീന് വായിക്കാൻ കഴിയുന്ന പ്രോഗ്രാം കോഡ്", "isCorrect": true }
    ]
  },
  {
    "question": "ഒരേ നിബന്ധനകൾക്ക് കീഴിൽ മാറ്റം വരുത്താനും പുനർവിതരണം ചെയ്യാനും അനുവദിക്കുന്ന ലൈസൻസ് ഏതാണ്?",
    "options": [
      { "text": "GPL", "isCorrect": true },
      { "text": "Apache", "isCorrect": false },
      { "text": "EULA", "isCorrect": false },
      { "text": "BSD", "isCorrect": false }
    ]
  },
  {
    "question": "ഇവയിൽ FLOSS ലൈസൻസ് ഏതാണ്?",
    "options": [
      { "text": "ട്രയൽവെയർ", "isCorrect": false },
      { "text": "EULA", "isCorrect": false },
      { "text": "പ്രൊപ്രൈറ്ററി ലൈസൻസ്", "isCorrect": false },
      { "text": "Mozilla Public License", "isCorrect": true }
    ]
  },
  {
    "question": "Git നെ പരിപാലിക്കുന്ന (maintained) സംഘടന ഏതാണ്? (തുടക്കക്കാരൻ എന്ന നിലയിൽ)",
    "options": [
      { "text": "ലിനസ് ടോർവാൾഡ്സ്", "isCorrect": true },
      { "text": "മൈക്രോസോഫ്റ്റ്", "isCorrect": false },
      { "text": "അപ്പാച്ചെ ഫൗണ്ടേഷൻ", "isCorrect": false },
      { "text": "GNU ഫൗണ്ടേഷൻ", "isCorrect": false }
    ]
  },
  {
    "question": "“Copyleft” എന്നതിൻ്റെ അർത്ഥം എന്താണ്?",
    "options": [
      { "text": "സോഫ്റ്റ്‌വെയർ മാറ്റം വരുത്താനും പുനർവിതരണം ചെയ്യാനുമുള്ള സ്വാതന്ത്ര്യം", "isCorrect": true },
      { "text": "പണം നൽകേണ്ട സോഫ്റ്റ്‌വെയർ", "isCorrect": false },
      { "text": "പകർപ്പവകാശമില്ലാത്ത സോഫ്റ്റ്‌വെയർ", "isCorrect": false },
      { "text": "പരിമിതമായ ലൈസൻസുള്ള സോഫ്റ്റ്‌വെയർ", "isCorrect": false }
    ]
  },
  {
    "question": "Linux Kernel വികസിപ്പിച്ചത് ആരാണ്?",
    "options": [
      { "text": "ലിനസ് ടോർവാൾഡ്സ്", "isCorrect": true },
      { "text": "റിച്ചാർഡ് സ്റ്റാൾമാൻ", "isCorrect": false },
      { "text": "കെൻ തോംസൺ", "isCorrect": false },
      { "text": "ഡെന്നിസ് റിച്ചി", "isCorrect": false }
    ]
  },
  {
    "question": "ലിനസ് ടോർവാൾഡ്സ് സൃഷ്ടിച്ച സോഫ്റ്റ്‌വെയർ മാനേജ്‌മെൻ്റ് ടൂൾ ഏതാണ്?",
    "options": [
      { "text": "GitLab", "isCorrect": false },
      { "text": "Apache", "isCorrect": false },
      { "text": "Subversion", "isCorrect": false },
      { "text": "Git", "isCorrect": true }
    ]
  },
  {
    "question": "അവകാശങ്ങളില്ലാതെ ഒബ്ജക്റ്റ് കോഡ് മാത്രം നൽകുന്ന ലൈസൻസ് ഏതാണ്?",
    "options": [
      { "text": "EULA", "isCorrect": true },
      { "text": "Apache", "isCorrect": false },
      { "text": "BSD", "isCorrect": false },
      { "text": "GPL", "isCorrect": false }
    ]
  },
  {
    "question": "ഫ്രീ സോഫ്റ്റ്‌വെയറിന് ഒരു ഉദാഹരണം ഏതാണ്?",
    "options": [
      { "text": "GIMP", "isCorrect": true },
      { "text": "MS Word", "isCorrect": false },
      { "text": "Adobe Photoshop", "isCorrect": false },
      { "text": "Windows OS", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു “Fork” എന്നാൽ എന്താണ്?",
    "options": [
      { "text": "നിലവിലുള്ള സോഫ്റ്റ്‌വെയറിൻ്റെ മാറ്റം വരുത്തിയ പതിപ്പ്", "isCorrect": true },
      { "text": "ഒരു വൈറസ്", "isCorrect": false },
      { "text": "ഒരു ഡ്രൈവർ", "isCorrect": false },
      { "text": "ഒരു പുതിയ പ്രോഗ്രാമിംഗ് ഭാഷ", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു സോഫ്റ്റ്‌വെയറിൻ്റെ പുതിയ പതിപ്പിനെ സൂചിപ്പിക്കുന്ന പദം ഏതാണ്?",
    "options": [
      { "text": "Update", "isCorrect": true },
      { "text": "Shell", "isCorrect": false },
      { "text": "Patch", "isCorrect": false },
      { "text": "Script", "isCorrect": false }
    ]
  },
  {
    "question": "GNU/Linux-ൽ ഉപയോഗിക്കുന്ന ഷെൽ (Shell) ഏതാണ്?",
    "options": [
      { "text": "Bash", "isCorrect": true },
      { "text": "Zsh", "isCorrect": false },
      { "text": "PowerShell", "isCorrect": false },
      { "text": "Command Prompt", "isCorrect": false }
    ]
  },
  {
    "question": "Linux Kernel-നെ അടിസ്ഥാനമാക്കിയുള്ള ഓപ്പറേറ്റിംഗ് സിസ്റ്റം ഏതാണ്?",
    "options": [
      { "text": "iOS", "isCorrect": false },
      { "text": "macOS", "isCorrect": false },
      { "text": "Windows", "isCorrect": false },
      { "text": "Android", "isCorrect": true }
    ]
  },
  {
    "question": "Kernel-ൻ്റെ ധർമ്മം എന്താണ്?",
    "options": [
      { "text": "ഹാർഡ്‌വെയറുമായി സംവദിക്കുന്നു", "isCorrect": true },
      { "text": "GUI പ്രദർശിപ്പിക്കുന്നു", "isCorrect": false },
      { "text": "ഉപയോക്താവുമായി സംവദിക്കുന്നു", "isCorrect": false },
      { "text": "കോഡ് കംപൈൽ ചെയ്യുന്നു", "isCorrect": false }
    ]
  },
  {
    "question": "Shell-ൻ്റെ ധർമ്മം എന്താണ്?",
    "options": [
      { "text": "ഉപയോക്താവുമായി സംവദിക്കുന്നു", "isCorrect": true },
      { "text": "ഹാർഡ്‌വെയർ ബന്ധിപ്പിക്കുന്നു", "isCorrect": false },
      { "text": "ഡ്രൈവറുകൾ കൈകാര്യം ചെയ്യുന്നു", "isCorrect": false },
      { "text": "ബാക്ക്ഗ്രൗണ്ട് സേവനങ്ങൾ പ്രവർത്തിപ്പിക്കുന്നു", "isCorrect": false }
    ]
  },
  {
    "question": "ഇവയിൽ ഓപ്പൺ ഹാർഡ്‌വെയർ ഉദാഹരണം ഏതാണ്?",
    "options": [
      { "text": "iPhone", "isCorrect": false },
      { "text": "MacBook", "isCorrect": false },
      { "text": "PlayStation", "isCorrect": false },
      { "text": "Arduino", "isCorrect": true }
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
