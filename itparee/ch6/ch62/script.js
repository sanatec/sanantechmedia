document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "സ്റ്റേജ് മോഡിൽ (Stage Mode) അർഡ്യൂനോ ഉപയോഗിക്കുന്നതിന് മുമ്പ് എന്ത് ചെയ്യണം?",
    "options": [
      { "text": "USB കേബിൾ ബന്ധിപ്പിക്കുക", "isCorrect": false },
      { "text": "ഫേംവെയർ അപ്‌ലോഡ് ചെയ്യുക (Upload Firmware)", "isCorrect": true },
      { "text": "RESET അമർത്തുക", "isCorrect": false },
      { "text": "PictoBlox അടയ്ക്കുക", "isCorrect": false }
    ]
  },
  {
    "question": "ബസറിൻ്റെ ശബ്ദം നിർത്തുന്ന സിഗ്നൽ ഏതാണ്?",
    "options": [
      { "text": "LOW", "isCorrect": false },
      { "text": "HIGH", "isCorrect": true },
      { "text": "0V", "isCorrect": false },
      { "text": "VCC", "isCorrect": false }
    ]
  },
  {
    "question": "അർഡ്യൂനോയിൽ, GND പിൻ നൽകുന്നത്:",
    "options": [
      { "text": "പവർ", "isCorrect": false },
      { "text": "5V", "isCorrect": false },
      { "text": "സിഗ്നൽ", "isCorrect": false },
      { "text": "ഗ്രൗണ്ട് പൊട്ടൻഷ്യൽ (0V)", "isCorrect": true }
    ]
  },
  {
    "question": "താഴെ പറയുന്നവയിൽ റോബോട്ടിലെ ഒരു ഇൻപുട്ട് ഉപകരണം (Input Device) ഏതാണ്?",
    "options": [
      { "text": "സെർവോ മോട്ടോർ (ഔട്ട്പുട്ട്)", "isCorrect": false },
      { "text": "IR സെൻസർ", "isCorrect": true },
      { "text": "LED (ഔട്ട്പുട്ട്)", "isCorrect": false },
      { "text": "ബസർ (ഔട്ട്പുട്ട്)", "isCorrect": false }
    ]
  },
  {
    "question": "സാനിറ്റൈസർ ഡിസ്പെൻസറിൽ ടാപ്പ് നിയന്ത്രിക്കാൻ ഉപയോഗിക്കുന്ന ഘടകം ഏതാണ്?",
    "options": [
      { "text": "LED", "isCorrect": false },
      { "text": "സെർവോ മോട്ടോർ", "isCorrect": true },
      { "text": "IR സെൻസർ", "isCorrect": false },
      { "text": "ബസർ", "isCorrect": false }
    ]
  },
  {
    "question": "കമ്പ്യൂട്ടറുമായി സ്ഥിരമായ കണക്ഷൻ ആവശ്യമുള്ള PictoBlox-ലെ പ്രോഗ്രാമിംഗ് മോഡ് ഏതാണ്?",
    "options": [
      { "text": "അപ്‌ലോഡ് മോഡ്", "isCorrect": false },
      { "text": "ഡീബഗ് മോഡ്", "isCorrect": false },
      { "text": "സ്റ്റേജ് മോഡ് (Stage Mode)", "isCorrect": true },
      { "text": "കംപൈൽ മോഡ്", "isCorrect": false }
    ]
  },
  {
    "question": "അർഡ്യൂനോയിൽ DIGITAL I/O PINs-ൻ്റെ ധർമ്മം എന്താണ്?",
    "options": [
      { "text": "വൈദ്യുതി വിതരണം", "isCorrect": false },
      { "text": "മെമ്മറി സ്റ്റോറേജ്", "isCorrect": false },
      { "text": "സിഗ്നലുകൾ ശേഖരിക്കുകയും അയക്കുകയും ചെയ്യുക", "isCorrect": true },
      { "text": "ക്യാമറ കണക്ഷൻ", "isCorrect": false }
    ]
  },
  {
    "question": "സെർവോ മോട്ടോറിൻ്റെ ഏത് വയറാണ് കൺട്രോൾ സിഗ്നലുകൾ സ്വീകരിക്കാൻ ഉപയോഗിക്കുന്നത്?",
    "options": [
      { "text": "ചുവപ്പ് വയർ (VCC)", "isCorrect": false },
      { "text": "ബ്രൗൺ വയർ (GND)", "isCorrect": false },
      { "text": "ഓറഞ്ച് വയർ (Signal)", "isCorrect": true },
      { "text": "കറുപ്പ് വയർ", "isCorrect": false }
    ]
  },
  {
    "question": "അർഡ്യൂനോയിലെ 3.3V പിൻ നൽകുന്ന വോൾട്ടേജ് എത്രയാണ്?",
    "options": [
      { "text": "5V", "isCorrect": false },
      { "text": "0V", "isCorrect": false },
      { "text": "3.3V", "isCorrect": true },
      { "text": "1.5V", "isCorrect": false }
    ]
  },
  {
    "question": "റോബോട്ടിലെ ഔട്ട്പുട്ട് യൂണിറ്റിലെ (Output Unit) ഒരു ഘടകം ഏതാണ്?",
    "options": [
      { "text": "ക്യാമറ", "isCorrect": false },
      { "text": "മൈക്രോഫോൺ", "isCorrect": false },
      { "text": "ബസർ", "isCorrect": true },
      { "text": "IR സെൻസർ", "isCorrect": false }
    ]
  },
  {
    "question": "പാഠപുസ്തകത്തിൽ കാണിക്കുകയും ചർച്ച ചെയ്യുകയും ചെയ്യുന്ന അർഡ്യൂനോ മോഡൽ ഏതാണ്?",
    "options": [
      { "text": "Arduino Mega", "isCorrect": false },
      { "text": "Arduino Uno R3", "isCorrect": true },
      { "text": "Arduino Nano", "isCorrect": false },
      { "text": "Arduino Due", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു LED-യുടെ ആനോഡ് (Anode) സാധാരണയായി:",
    "options": [
      { "text": "കാഥോഡിനേക്കാൾ ചെറുതാണ്", "isCorrect": false },
      { "text": "കാഥോഡിന് തുല്യമായ നീളമാണ്", "isCorrect": false },
      { "text": "കാഥോഡിനേക്കാൾ നീളമുള്ളതാണ്", "isCorrect": true },
      { "text": "മധ്യഭാഗത്താണ് സ്ഥിതി ചെയ്യുന്നത്", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു സെർവോ മോട്ടോർ നിയന്ത്രിക്കാൻ ഏത് തരം സിഗ്നലാണ് ഉപയോഗിക്കുന്നത്?",
    "options": [
      { "text": "അനലോഗ് വോൾട്ടേജ്", "isCorrect": false },
      { "text": "PWM സിഗ്നൽ (Pulse Width Modulation)", "isCorrect": true },
      { "text": "ഓഡിയോ സിഗ്നൽ", "isCorrect": false },
      { "text": "സീരിയൽ സിഗ്നൽ", "isCorrect": false }
    ]
  },
  {
    "question": "കമ്പ്യൂട്ടറിൽ നിന്ന് അർഡ്യൂനോയിലേക്ക് പ്രോഗ്രാമുകൾ അപ്‌ലോഡ് ചെയ്യാൻ സഹായിക്കുന്ന ഘടകം ഏതാണ്?",
    "options": [
      { "text": "GND പിൻ", "isCorrect": false },
      { "text": "USB പോർട്ട്", "isCorrect": true },
      { "text": "5V പിൻ", "isCorrect": false },
      { "text": "റെസിസ്റ്റർ", "isCorrect": false }
    ]
  },
  {
    "question": "റോബോട്ടിക് കിറ്റിലെ ഏത് ഘടകമാണ് വെളിച്ചം കണ്ടെത്താൻ ഉപയോഗിക്കുന്നത്?",
    "options": [
      { "text": "IR സെൻസർ", "isCorrect": false },
      { "text": "ക്യാമറ", "isCorrect": false },
      { "text": "ലൈറ്റ് സെൻസർ", "isCorrect": true },
      { "text": "അൾട്രാസോണിക് സെൻസർ", "isCorrect": false }
    ]
  },
  {
    "question": "കേടുപാടുകൾ ഒഴിവാക്കാൻ ഒരു LED-യ്‌ക്കൊപ്പം എന്ത് ഉപയോഗിക്കണം?",
    "options": [
      { "text": "സെർവോ മോട്ടോർ", "isCorrect": false },
      { "text": "IR സെൻസർ", "isCorrect": false },
      { "text": "റെസിസ്റ്റർ (Resistor)", "isCorrect": true },
      { "text": "ബ്രെഡ്ബോർഡ്", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു വസ്തുവിനെ കണ്ടെത്താത്തപ്പോൾ IR സെൻസറിൻ്റെ OUT പിൻ എന്ത് ഔട്ട്പുട്ടാണ് നൽകുന്നത്?",
    "options": [
      { "text": "LOW", "isCorrect": false },
      { "text": "OFF", "isCorrect": false },
      { "text": "HIGH", "isCorrect": true },
      { "text": "ഒന്നുമില്ല", "isCorrect": false }
    ]
  },
  {
    "question": "അർഡ്യൂനോയിലേക്ക് ബാഹ്യ ഉപകരണങ്ങൾ ബന്ധിപ്പിക്കാൻ നമ്മൾ ഉപയോഗിക്കുന്നത്:",
    "options": [
      { "text": "HDMI പോർട്ടുകൾ", "isCorrect": false },
      { "text": "DIGITAL I/O PINs", "isCorrect": true },
      { "text": "WiFi", "isCorrect": false },
      { "text": "സീരിയൽ കേബിൾ", "isCorrect": false }
    ]
  },
  {
    "question": "അർഡ്യൂനോയിൽ പ്രോഗ്രാം നിർദ്ദേശങ്ങൾ സംഭരിക്കുന്ന ഘടകം ഏതാണ്?",
    "options": [
      { "text": "RAM", "isCorrect": false },
      { "text": "USB", "isCorrect": false },
      { "text": "മൈക്രോകൺട്രോളർ", "isCorrect": true },
      { "text": "GND", "isCorrect": false }
    ]
  },
  {
    "question": "PictoBlox-ൽ DIGITAL PIN 13 **ഓൺ** ആക്കാൻ, നമ്മൾ അതിനെ എന്തായി സജ്ജമാക്കണം?",
    "options": [
      { "text": "OFF", "isCorrect": false },
      { "text": "LOW (ഓഫ്)", "isCorrect": false },
      { "text": "ON", "isCorrect": false },
      { "text": "HIGH", "isCorrect": true }
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
