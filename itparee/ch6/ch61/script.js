document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "റോബോട്ടിക്സ് എന്നാൽ എന്താണ്?",
    "options": [
      { "text": "കൃത്രിമ ബുദ്ധിയെക്കുറിച്ചുള്ള പഠനം", "isCorrect": false },
      { "text": "ഇലക്ട്രിക്കൽ സർക്യൂട്ടുകളെക്കുറിച്ചുള്ള പഠനം", "isCorrect": false },
      { "text": "റോബോട്ടിൻ്റെ രൂപകൽപ്പന, നിർമ്മാണം, നിയന്ത്രണം എന്നിവയെക്കുറിച്ചുള്ള പഠനം", "isCorrect": true },
      { "text": "പ്രോഗ്രാമിംഗിനെക്കുറിച്ചുള്ള പഠനം മാത്രം", "isCorrect": false }
    ]
  },
  {
    "question": "അർഡ്യൂനോയുടെ \"തലച്ചോറ്\" എന്നറിയപ്പെടുന്ന ഘടകം ഏതാണ്?",
    "options": [
      { "text": "USB പോർട്ട്", "isCorrect": false },
      { "text": "ATmega328P മൈക്രോകൺട്രോളർ", "isCorrect": true },
      { "text": "സെർവോ മോട്ടോർ", "isCorrect": false },
      { "text": "IR സെൻസർ", "isCorrect": false }
    ]
  },
  {
    "question": "അർഡ്യൂനോയിൽ അനലോഗ് ഇൻപുട്ടിനായി (Analog Input) ഉപയോഗിക്കുന്ന പിൻ ഏതാണ്?",
    "options": [
      { "text": "GND", "isCorrect": false },
      { "text": "DIGITAL PIN 13", "isCorrect": false },
      { "text": "Analog Input", "isCorrect": true },
      { "text": "5V", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു IR സെൻസർ എന്താണ് കണ്ടെത്തുന്നത്?",
    "options": [
      { "text": "ശബ്ദം", "isCorrect": false },
      { "text": "വെളിച്ചം", "isCorrect": false },
      { "text": "ഇൻഫ്രാറെഡ് രശ്മികൾ ഉപയോഗിച്ച് തടസ്സങ്ങൾ", "isCorrect": true },
      { "text": "മർദ്ദം", "isCorrect": false }
    ]
  },
  {
    "question": "ഔട്ട്പുട്ട് വെളിച്ചമായി പ്രദർശിപ്പിക്കാൻ ഉപയോഗിക്കുന്ന ഉപകരണം ഏതാണ്?",
    "options": [
      { "text": "ബസർ", "isCorrect": false },
      { "text": "സെർവോ മോട്ടോർ", "isCorrect": false },
      { "text": "LED", "isCorrect": true },
      { "text": "മൈക്രോഫോൺ", "isCorrect": false }
    ]
  },
  {
    "question": "PWM നിയന്ത്രണത്തിനായി (PWM control) അർഡ്യൂനോയിൽ ഉപയോഗിക്കുന്ന പിന്നുകൾ ഏതാണ്?",
    "options": [
      { "text": "അനലോഗ് പിന്നുകൾ", "isCorrect": false },
      { "text": "~ ചിഹ്നം അടയാളപ്പെടുത്തിയ പിന്നുകൾ", "isCorrect": true },
      { "text": "GND പിന്നുകൾ", "isCorrect": false },
      { "text": "USB പിന്നുകൾ", "isCorrect": false }
    ]
  },
  {
    "question": "സോൾഡറിംഗ് ഇല്ലാതെ താൽക്കാലിക സർക്യൂട്ടുകൾ നിർമ്മിക്കാൻ ഉപയോഗിക്കുന്നത് എന്താണ്?",
    "options": [
      { "text": "ബ്രെഡ്ബോർഡ് (Breadboard)", "isCorrect": true },
      { "text": "LED", "isCorrect": false },
      { "text": "സെർവോ മോട്ടോർ", "isCorrect": false },
      { "text": "ജമ്പർ കേബിൾ", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു LED സർക്യൂട്ടിൽ റെസിസ്റ്ററിൻ്റെ (resistor) ഉദ്ദേശ്യം എന്താണ്?",
    "options": [
      { "text": "തെളിച്ചം വർദ്ധിപ്പിക്കുക", "isCorrect": false },
      { "text": "അമിതമായ കറൻ്റ് തടയുക", "isCorrect": true },
      { "text": "വോൾട്ടേജ് വർദ്ധിപ്പിക്കുക", "isCorrect": false },
      { "text": "ഗ്രൗണ്ട് പൊട്ടൻഷ്യൽ നൽകുക", "isCorrect": false }
    ]
  },
  {
    "question": "ബ്ലോക്ക് കോഡിംഗ് (block coding) ഉപയോഗിച്ച് അർഡ്യൂനോ പ്രോഗ്രാം ചെയ്യാൻ ഉപയോഗിക്കുന്ന ഉപകരണം ഏതാണ്?",
    "options": [
      { "text": "Scratch", "isCorrect": false },
      { "text": "PictoBlox", "isCorrect": true },
      { "text": "Blockly", "isCorrect": false },
      { "text": "C++", "isCorrect": false }
    ]
  },
  {
    "question": "അർഡ്യൂനോയുടെ 5V പിൻ നൽകുന്ന സ്ഥിരമായ വോൾട്ടേജ് എത്രയാണ്?",
    "options": [
      { "text": "3.3V", "isCorrect": false },
      { "text": "0V", "isCorrect": false },
      { "text": "5V", "isCorrect": true },
      { "text": "12V", "isCorrect": false }
    ]
  },
  {
    "question": "ബസറിൻ്റെ I/O പിന്നിൽ ഒരു LOW സിഗ്നൽ പ്രയോഗിക്കുമ്പോൾ അത് എന്ത് ഉത്പാദിപ്പിക്കുന്നു?",
    "options": [
      { "text": "വൈബ്രേഷൻ", "isCorrect": false },
      { "text": "ശബ്ദം", "isCorrect": true },
      { "text": "വെളിച്ചം", "isCorrect": false },
      { "text": "ചലനം", "isCorrect": false }
    ]
  },
  {
    "question": "റോബോട്ടിക്സിൽ ഒരു പ്രത്യേക കോണിലേക്ക് തിരിക്കാൻ ഉപയോഗിക്കുന്ന ഘടകം ഏതാണ്?",
    "options": [
      { "text": "ബസർ", "isCorrect": false },
      { "text": "IR സെൻസർ", "isCorrect": false },
      { "text": "സെർവോ മോട്ടോർ (Servo Motor)", "isCorrect": true },
      { "text": "ബ്രെഡ്ബോർഡ്", "isCorrect": false }
    ]
  },
  {
    "question": "LED ബ്ലിങ്കിംഗ് സർക്യൂട്ടിൽ, ON/OFF അവസ്ഥ നിയന്ത്രിക്കുന്നത് ഏത് പിന്നാണ്?",
    "options": [
      { "text": "5V പിൻ", "isCorrect": false },
      { "text": "GND", "isCorrect": false },
      { "text": "ഡിജിറ്റൽ പിൻ 13", "isCorrect": true },
      { "text": "അനലോഗ് ഇൻപുട്ട്", "isCorrect": false }
    ]
  },
  {
    "question": "കമ്പ്യൂട്ടർ ഇല്ലാതെ അർഡ്യൂനോ പ്രവർത്തിക്കാൻ PictoBlox-ലെ ഏത് പ്രോഗ്രാമിംഗ് മോഡാണ് അനുവദിക്കുന്നത്?",
    "options": [
      { "text": "ലൈവ് മോഡ്", "isCorrect": false },
      { "text": "സ്റ്റേജ് മോഡ്", "isCorrect": false },
      { "text": "അപ്‌ലോഡ് മോഡ് (Upload Mode)", "isCorrect": true },
      { "text": "ഡീബഗ് മോഡ്", "isCorrect": false }
    ]
  },
  {
    "question": "ഓട്ടോമാറ്റിക് സാനിറ്റൈസർ ഡിസ്പെൻസറുകളിൽ ഉപയോഗിക്കുന്ന സെൻസർ ഏതാണ്?",
    "options": [
      { "text": "ലൈറ്റ് സെൻസർ", "isCorrect": false },
      { "text": "മൈക്രോഫോൺ", "isCorrect": false },
      { "text": "IR സെൻസർ", "isCorrect": true },
      { "text": "ക്യാമറ", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു സെർവോ മോട്ടോറിന് സാധാരണയായി എത്ര ഡിഗ്രി കറങ്ങാൻ കഴിയും?",
    "options": [
      { "text": "90°", "isCorrect": false },
      { "text": "360°", "isCorrect": false },
      { "text": "0° മുതൽ 180° വരെ", "isCorrect": true },
      { "text": "0° മുതൽ 270° വരെ", "isCorrect": false }
    ]
  },
  {
    "question": "സെർവോ മോട്ടോർ നിയന്ത്രിക്കുന്നതിനുള്ള സിഗ്നൽ ഏത് പിന്നാണ് സ്വീകരിക്കുന്നത്?",
    "options": [
      { "text": "5V", "isCorrect": false },
      { "text": "OUT പിൻ", "isCorrect": false },
      { "text": "GND", "isCorrect": false },
      { "text": "PWM പിൻ (ഉദാഹരണത്തിന്, പിൻ 9)", "isCorrect": true }
    ]
  },
  {
    "question": "ഒരു വസ്തുവിനെ കണ്ടെത്തുമ്പോൾ IR സെൻസറിൻ്റെ OUT പിൻ എന്തായി മാറുന്നു?",
    "options": [
      { "text": "HIGH", "isCorrect": false },
      { "text": "അനലോഗ്", "isCorrect": false },
      { "text": "LOW", "isCorrect": true },
      { "text": "ബ്ലിങ്കിംഗ്", "isCorrect": false }
    ]
  },
  {
    "question": "സ്മാർട്ട് ഡോർ സിസ്റ്റത്തിലെ വിഷ്വൽ ഡിറ്റക്ഷനായി (visual detection) ഉപയോഗിക്കുന്ന ഉപകരണം ഏതാണ്?",
    "options": [
      { "text": "അർഡ്യൂനോ", "isCorrect": false },
      { "text": "IR സെൻസർ", "isCorrect": false },
      { "text": "PIR സെൻസർ", "isCorrect": false },
      { "text": "ലാപ്ടോപ്പ് ക്യാമറ", "isCorrect": true }
    ]
  },
  {
    "question": "മുഖങ്ങൾ കണ്ടെത്താൻ (detect faces) PictoBlox-ൻ്റെ ഏത് എക്സ്റ്റൻഷനാണ് ഉപയോഗിക്കുന്നത്?",
    "options": [
      { "text": "വിഷൻ റെക്കഗ്നിഷൻ", "isCorrect": false },
      { "text": "ക്യാമറ മൊഡ്യൂൾ", "isCorrect": false },
      { "text": "ഫേസ് ഡിറ്റക്ഷൻ (Face Detection)", "isCorrect": true },
      { "text": "മോഷൻ സെൻസിംഗ്", "isCorrect": false }
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
