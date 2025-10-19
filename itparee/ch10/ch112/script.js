document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "GNU പ്രോജക്റ്റിൻ്റെ പ്രധാന ലക്ഷ്യം എന്താണ്?",
    "options": [
      { "text": "ഹാർഡ്‌വെയർ ഉണ്ടാക്കുക", "isCorrect": false },
      { "text": "ഗെയിമുകൾ നിർമ്മിക്കുക", "isCorrect": false },
      { "text": "വാണിജ്യ സോഫ്റ്റ്‌വെയർ വിൽക്കുക", "isCorrect": false },
      { "text": "ഫ്രീ സോഫ്റ്റ്‌വെയർ (Free Software) സൃഷ്ടിക്കുക", "isCorrect": true }
    ]
  },
  {
    "question": "FSF എന്നതിൻ്റെ പൂർണ്ണരൂപം എന്താണ്?",
    "options": [
      { "text": "File Sharing Federation", "isCorrect": false },
      { "text": "Free System Foundation", "isCorrect": false },
      { "text": "File Storage Framework", "isCorrect": false },
      { "text": "Free Software Foundation", "isCorrect": true }
    ]
  },
  {
    "question": "GNU പ്രോജക്റ്റ് ആരംഭിച്ചത് ഏത് വർഷമാണ്?",
    "options": [
      { "text": "1985", "isCorrect": false },
      { "text": "1983", "isCorrect": true },
      { "text": "1980", "isCorrect": false },
      { "text": "1979", "isCorrect": false }
    ]
  },
  {
    "question": "ഫ്രീ സോഫ്റ്റ്‌വെയർ ഫൗണ്ടേഷൻ (FSF) രൂപീകരിച്ചത് എപ്പോഴാണ്?",
    "options": [
      { "text": "1985", "isCorrect": true },
      { "text": "1980", "isCorrect": false },
      { "text": "1979", "isCorrect": false },
      { "text": "1987", "isCorrect": false }
    ]
  },
  {
    "question": "Android OS ഉപയോഗിക്കുന്ന ലൈസൻസ് ഏതാണ്?",
    "options": [
      { "text": "EULA", "isCorrect": false },
      { "text": "GPL", "isCorrect": false },
      { "text": "BSD", "isCorrect": false },
      { "text": "Apache License", "isCorrect": true }
    ]
  },
  {
    "question": "FLOSS എന്നതിൻ്റെ പൂർണ്ണരൂപം എന്താണ്?",
    "options": [
      { "text": "Free/Libre and Open Source Software", "isCorrect": true },
      { "text": "File Layer Open System Software", "isCorrect": false },
      { "text": "Free License Operating System Software", "isCorrect": false },
      { "text": "Full License Open Software Suite", "isCorrect": false }
    ]
  },
  {
    "question": "FLOSS-ന് ഒരു ഉദാഹരണമായ OS ഏതാണ്?",
    "options": [
      { "text": "Windows", "isCorrect": false },
      { "text": "iOS", "isCorrect": false },
      { "text": "macOS", "isCorrect": false },
      { "text": "GNU/Linux", "isCorrect": true }
    ]
  },
  {
    "question": "പരാമർശിച്ചിട്ടുള്ള പ്രോഗ്രാമിംഗ് ഭാഷകൾ ഏതെല്ലാമാണ്?",
    "options": [
      { "text": "Python, C, Java, Rust", "isCorrect": true },
      { "text": "C#, Go, Ruby, Swift", "isCorrect": false },
      { "text": "Pascal, Ada, Lisp, SQL", "isCorrect": false },
      { "text": "JavaScript, Kotlin, PHP, Perl", "isCorrect": false }
    ]
  },
  {
    "question": "GitHub എന്തിനാണ് ഉപയോഗിക്കുന്നത്?",
    "options": [
      { "text": "കോഡ് പ്രസിദ്ധീകരിക്കുന്നതിനും കൈകാര്യം ചെയ്യുന്നതിനും", "isCorrect": true },
      { "text": "ഡോക്യുമെൻ്റുകൾ സൃഷ്ടിക്കുന്നതിന്", "isCorrect": false },
      { "text": "ആപ്ലിക്കേഷനുകൾ പ്രവർത്തിപ്പിക്കുന്നതിന്", "isCorrect": false },
      { "text": "സോഫ്റ്റ്‌വെയർ ടെസ്റ്റ് ചെയ്യുന്നതിന്", "isCorrect": false }
    ]
  },
  {
    "question": "Freeware എന്നാൽ എന്താണ്?",
    "options": [
      { "text": "ചെലവില്ലാതെ വിതരണം ചെയ്യുന്ന സോഫ്റ്റ്‌വെയർ", "isCorrect": true },
      { "text": "മാറ്റം വരുത്താൻ സ്വാതന്ത്ര്യമുള്ള സോഫ്റ്റ്‌വെയർ", "isCorrect": false },
      { "text": "ഹാർഡ്‌വെയർ സോഫ്റ്റ്‌വെയർ", "isCorrect": false },
      { "text": "ഓപ്പൺ സോഴ്‌സ് ലൈസൻസ്", "isCorrect": false }
    ]
  },
  {
    "question": "Testware എന്നാൽ എന്താണ്?",
    "options": [
      { "text": "പരിമിതമായ സമയം മാത്രം ഉപയോഗിക്കാൻ കഴിയുന്ന സോഫ്റ്റ്‌വെയർ", "isCorrect": true },
      { "text": "ഫ്രീ സോഫ്റ്റ്‌വെയർ", "isCorrect": false },
      { "text": "ഓപ്പൺ ഹാർഡ്‌വെയർ", "isCorrect": false },
      { "text": "GPL-ന് കീഴിലുള്ള സോഫ്റ്റ്‌വെയർ", "isCorrect": false }
    ]
  },
  {
    "question": "Unix വികസിപ്പിച്ചത് ആരാണ്?",
    "options": [
      { "text": "ബിൽ ഗേറ്റ്സ്", "isCorrect": false },
      { "text": "ലിനസ് ടോർവാൾഡ്സ്", "isCorrect": false },
      { "text": "റിച്ചാർഡ് സ്റ്റാൾമാൻ", "isCorrect": false },
      { "text": "കെൻ തോംസൺ, ഡെന്നിസ് റിച്ചി", "isCorrect": true }
    ]
  },
  {
    "question": "Zen of Python എന്താണ്?",
    "options": [
      { "text": "കോഡ് വായിക്കാൻ എളുപ്പമുള്ളതും വ്യക്തവുമായിരിക്കണം", "isCorrect": true },
      { "text": "കോഡ് എൻക്രിപ്റ്റ് ചെയ്യണം", "isCorrect": false },
      { "text": "കോഡ് കംപൈൽ ചെയ്യണം", "isCorrect": false },
      { "text": "കോഡ് ചെറുതായിരിക്കണം", "isCorrect": false }
    ]
  },
  {
    "question": "ഫ്രീ സോഫ്റ്റ്‌വെയറിലെ “Free” എന്നതിൻ്റെ അർത്ഥം എന്താണ്?",
    "options": [
      { "text": "സ്വാതന്ത്ര്യം (Freedom)", "isCorrect": true },
      { "text": "ട്രയൽ പിരീഡ്", "isCorrect": false },
      { "text": "വിലയില്ലായ്മ", "isCorrect": false },
      { "text": "ലൈസൻസ് കാലഹരണപ്പെടൽ", "isCorrect": false }
    ]
  },
  {
    "question": "BSD എന്നതിൻ്റെ പൂർണ്ണരൂപം എന്താണ്?",
    "options": [
      { "text": "Berkeley Software Distribution", "isCorrect": true },
      { "text": "Binary Source Data", "isCorrect": false },
      { "text": "Basic Software Design", "isCorrect": false },
      { "text": "Berkeley System Device", "isCorrect": false }
    ]
  },
  {
    "question": "വേർഷൻ കൺട്രോൾ എന്തിന് സഹായിക്കുന്നു?",
    "options": [
      { "text": "സോഫ്റ്റ്‌വെയർ മാറ്റങ്ങൾ ട്രാക്ക് ചെയ്യുന്നതിന്", "isCorrect": true },
      { "text": "കോഡ് കംപൈൽ ചെയ്യുന്നതിന്", "isCorrect": false },
      { "text": "ആപ്ലിക്കേഷനുകൾ പ്രവർത്തിപ്പിക്കുന്നതിന്", "isCorrect": false },
      { "text": "ഡാറ്റ എൻക്രിപ്റ്റ് ചെയ്യുന്നതിന്", "isCorrect": false }
    ]
  },
  {
    "question": "GPL-ഉം EULA-യും തമ്മിലുള്ള വ്യത്യാസം എന്താണ്?",
    "options": [
      { "text": "GPL മാറ്റം വരുത്താൻ അനുവദിക്കുന്നു; EULA അനുവദിക്കുന്നില്ല", "isCorrect": true },
      { "text": "EULA ഫ്രീ ആണ്; GPL ഫ്രീ അല്ല", "isCorrect": false },
      { "text": "GPL പണം നൽകേണ്ടതാണ്; EULA ഫ്രീ ആണ്", "isCorrect": false },
      { "text": "EULA ഓപ്പൺ സോഴ്‌സ് ആണ്", "isCorrect": false }
    ]
  },
  {
    "question": "FLOSS ബ്രൗസറിന് ഉദാഹരണം?",
    "options": [
      { "text": "Edge", "isCorrect": false },
      { "text": "Chrome", "isCorrect": false },
      { "text": "Safari", "isCorrect": false },
      { "text": "Mozilla Firefox", "isCorrect": true }
    ]
  },
  {
    "question": "സോഫ്റ്റ്‌വെയർ ലൈസൻസുകളുടെ ഉദ്ദേശ്യം എന്താണ്?",
    "options": [
      { "text": "ഉപയോഗിക്കാനുള്ള അവകാശങ്ങൾ നിർവചിക്കുന്നതിന്", "isCorrect": true },
      { "text": "പ്രോഗ്രാമുകൾ പ്രവർത്തിപ്പിക്കുന്നതിന്", "isCorrect": false },
      { "text": "ഡാറ്റ സംഭരിക്കുന്നതിന്", "isCorrect": false },
      { "text": "സോഫ്റ്റ്‌വെയർ എൻക്രിപ്റ്റ് ചെയ്യുന്നതിന്", "isCorrect": false }
    ]
  },
  {
    "question": "Scribe സോഫ്റ്റ്‌വെയറിനെ വിമർശിച്ചത് ആരാണ്?",
    "options": [
      { "text": "ലിനസ് ടോർവാൾഡ്സ്", "isCorrect": false },
      { "text": "ഡെന്നിസ് റിച്ചി", "isCorrect": false },
      { "text": "കെൻ തോംസൺ", "isCorrect": false },
      { "text": "റിച്ചാർഡ് സ്റ്റാൾമാൻ", "isCorrect": true }
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
