document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "ഒരു IR സെൻസർ ഒരു വസ്തുവിൻ്റെ സാന്നിദ്ധ്യം എങ്ങനെയാണ് സൂചിപ്പിക്കുന്നത്?",
    "options": [
      { "text": "അതിൻ്റെ OUT പിൻ HIGH ആകുന്നു", "isCorrect": false },
      { "text": "അതിൻ്റെ OUT പിൻ LOW ആകുന്നു", "isCorrect": true },
      { "text": "അത് വൈബ്രേറ്റ് ചെയ്യുന്നു", "isCorrect": false },
      { "text": "അത് പ്രകാശിക്കുന്നു", "isCorrect": false }
    ]
  },
  {
    "question": "താഴെ പറയുന്നവയിൽ PictoBlox-ലെ ഒരു പ്രോഗ്രാമിംഗ് ബ്ലോക്ക് **അല്ലാത്തത്** ഏതാണ്?",
    "options": [
      { "text": "Upload Firmware (ഒരു മോഡ് അല്ലെങ്കിൽ പ്രവർത്തനം)", "isCorrect": false },
      { "text": "Set pin mode", "isCorrect": false },
      { "text": "Show Text", "isCorrect": false },
      { "text": "**Start Sound Wave**", "isCorrect": true }
    ]
  },
  {
    "question": "ബൈനറി ലോജിക്കിൽ HIGH, LOW എന്നിവ എന്തിനെയാണ് പ്രതിനിധീകരിക്കുന്നത്?",
    "options": [
      { "text": "യഥാക്രമം 1 ഉം 0 ഉം", "isCorrect": false },
      { "text": "യഥാക്രമം 0 ഉം 1 ഉം", "isCorrect": false },
      { "text": "യഥാക്രമം True ഉം False ഉം", "isCorrect": false },
      { "text": "**a യും c യും** (HIGH = 1 = True, LOW = 0 = False)", "isCorrect": true }
    ]
  },
  {
    "question": "അർഡ്യൂനോയിൽ LED-യുടെ മിന്നുന്ന വേഗത എങ്ങനെ നിയന്ത്രിക്കുന്നു?",
    "options": [
      { "text": "പവർ പിൻ ഉപയോഗിച്ച്", "isCorrect": false },
      { "text": "കോഡിലെ **delay** മാറ്റിക്കൊണ്ട്", "isCorrect": true },
      { "text": "റെസിസ്റ്റർ ഉപയോഗിച്ച്", "isCorrect": false },
      { "text": "LED തിരിക്കുന്നതിലൂടെ", "isCorrect": false }
    ]
  },
  {
    "question": "അർഡ്യൂനോയിൽ PWM-ൻ്റെ (Pulse Width Modulation) പങ്ക് എന്താണ്?",
    "options": [
      { "text": "ഡാറ്റ സംഭരണം", "isCorrect": false },
      { "text": "പവർ വർദ്ധിപ്പിക്കൽ", "isCorrect": false },
      { "text": "ഡിജിറ്റൽ പിന്നുകളിലൂടെ അനലോഗ് സിഗ്നൽ നിയന്ത്രിക്കൽ", "isCorrect": true },
      { "text": "മെമ്മറി ആക്സസ്", "isCorrect": false }
    ]
  },
  {
    "question": "PictoBlox-ൽ മുഖങ്ങളുടെ എണ്ണം കണ്ടെത്താൻ സഹായിക്കുന്ന കമാൻഡ് ഏതാണ്?",
    "options": [
      { "text": "Count sprites", "isCorrect": false },
      { "text": "Detect face number", "isCorrect": false },
      { "text": "**Number of faces detected**", "isCorrect": true },
      { "text": "Capture facial data", "isCorrect": false }
    ]
  },
  {
    "question": "അർഡ്യൂനോയിൽ Digital PIN 9-ൻ്റെ പൊതുവായ ഉദ്ദേശ്യം എന്താണ്?",
    "options": [
      { "text": "USB ബന്ധിപ്പിക്കുക", "isCorrect": false },
      { "text": "വൈദ്യുതി വിതരണം നിയന്ത്രിക്കുക", "isCorrect": false },
      { "text": "സെർവോ മോട്ടോർ നിയന്ത്രിക്കുക (PWM)", "isCorrect": true },
      { "text": "മൈക്രോകൺട്രോളർ പ്രവർത്തിപ്പിക്കുക", "isCorrect": false }
    ]
  },
  {
    "question": "താഴെ പറയുന്നവയിൽ ഗ്രൗണ്ട് പൊട്ടൻഷ്യൽ (0V) നൽകുന്നത് ഏതാണ്?",
    "options": [
      { "text": "5V pin", "isCorrect": false },
      { "text": "USB പോർട്ട്", "isCorrect": false },
      { "text": "**GND pin**", "isCorrect": true },
      { "text": "RESET button", "isCorrect": false }
    ]
  },
  {
    "question": "അർഡ്യൂനോയെ എന്തുകൊണ്ടാണ് ഓപ്പൺ സോഴ്‌സ് ഹാർഡ്‌വെയർ (open-source hardware) എന്ന് വിളിക്കുന്നത്?",
    "options": [
      { "text": "ഇത് മൈക്രോസോഫ്റ്റ് നിർമ്മിച്ചതാണ്", "isCorrect": false },
      { "text": "അതിൻ്റെ കോഡുകളും സ്കീമാറ്റിക്സുകളും പരസ്യമായി ലഭ്യമാണ്", "isCorrect": true },
      { "text": "ഇത് സൗജന്യമായി വാങ്ങാൻ കഴിയും", "isCorrect": false },
      { "text": "ഇത് ഓപ്പൺ സർക്യൂട്ടുകൾ മാത്രമാണ് ഉപയോഗിക്കുന്നത്", "isCorrect": false }
    ]
  },
  {
    "question": "താഴെ പറയുന്നവയിൽ Arduino Uno R3-ൻ്റെ സവിശേഷത **അല്ലാത്തത്** ഏതാണ്?",
    "options": [
      { "text": "DIGITAL I/O പിന്നുകൾ", "isCorrect": false },
      { "text": "USB പോർട്ട്", "isCorrect": false },
      { "text": "**ബിൽറ്റ്-ഇൻ ക്യാമറ**", "isCorrect": true },
      { "text": "മൈക്രോകൺട്രോളർ ചിപ്പ്", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു LED-യുടെ മിന്നൽ എന്തിൻ്റെ ഉദാഹരണമാണ്?",
    "options": [
      { "text": "ഡിജിറ്റൽ ഔട്ട്പുട്ട് (Digital Output)", "isCorrect": true },
      { "text": "ഡിജിറ്റൽ ഇൻപുട്ട്", "isCorrect": false },
      { "text": "അനലോഗ് ഇൻപുട്ട്", "isCorrect": false },
      { "text": "സീരിയൽ ആശയവിനിമയം", "isCorrect": false }
    ]
  },
  {
    "question": "താഴെ പറയുന്നവയിൽ അർഡ്യൂനോയിലേക്ക് ഒരു പ്രോഗ്രാം എഴുതേണ്ടത് ആവശ്യമുള്ള പ്രവർത്തനം ഏതാണ്?",
    "options": [
      { "text": "ഒരു LED-ക്ക് പവർ നൽകുന്നത്", "isCorrect": false },
      { "text": "ഒരു ബസർ ഇടവിട്ട് ശബ്ദമുണ്ടാക്കുന്നത്", "isCorrect": true },
      { "text": "USB പ്ലഗ് ചെയ്യുന്നത്", "isCorrect": false },
      { "text": "ബ്രെഡ്ബോർഡിൽ ഘടിപ്പിക്കുന്നത്", "isCorrect": false }
    ]
  },
  {
    "question": "കോഡ് വഴി സെർവോ മോട്ടോർ ആംഗിൾ എങ്ങനെ മാറ്റുന്നു?",
    "options": [
      { "text": "Set digital pin LOW", "isCorrect": false },
      { "text": "Rotate motor fast", "isCorrect": false },
      { "text": "**Use set servo angle block**", "isCorrect": true },
      { "text": "Use voltage divider", "isCorrect": false }
    ]
  },
  {
    "question": "സ്മാർട്ട് ഡോർ സിസ്റ്റങ്ങളിൽ, മുഖമൊന്നും കണ്ടെത്തിയില്ലെങ്കിൽ, സെർവോ മോട്ടോർ എന്തുചെയ്യണം?",
    "options": [
      { "text": "90° ലേക്ക് തിരിയുക", "isCorrect": false },
      { "text": "വൈബ്രേറ്റ് ചെയ്യുക", "isCorrect": false },
      { "text": "0° ലേക്ക് തിരിയുക", "isCorrect": true },
      { "text": "ഓഫ് ചെയ്യുക", "isCorrect": false }
    ]
  },
  {
    "question": "താഴെ പറയുന്നവയിൽ ഒരു സെൻസർ ഉപയോഗിച്ച് ഭൗതിക ബട്ടൺ ഇല്ലാതെ പ്രവർത്തിക്കുന്ന ഉപകരണം ഏതാണ്?",
    "options": [
      { "text": "പരമ്പരാഗത ടാപ്പ്", "isCorrect": false },
      { "text": "ഓട്ടോമാറ്റിക് ഡോർ", "isCorrect": true },
      { "text": "കൈ പമ്പ്", "isCorrect": false },
      { "text": "സൈക്കിൾ ബെൽ", "isCorrect": false }
    ]
  },
  {
    "question": "LED ബ്ലിങ്കിംഗ് പ്രോഗ്രാമിലെ delay സമയം വർദ്ധിപ്പിക്കുമ്പോൾ എന്ത് സംഭവിക്കും?",
    "options": [
      { "text": "LED വേഗത്തിൽ മിന്നുന്നു", "isCorrect": false },
      { "text": "LED മിന്നുന്നത് നിർത്തുന്നു", "isCorrect": false },
      { "text": "LED **പതുക്കെ** മിന്നുന്നു", "isCorrect": true },
      { "text": "LED തുടർച്ചയായി പ്രകാശിക്കുന്നു", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു സെർവോ മോട്ടോർ തിരിക്കുന്നതിന് PictoBlox-ൽ ഉപയോഗിക്കുന്ന പ്രോഗ്രാമിംഗ് ബ്ലോക്ക് ഏതാണ്?",
    "options": [
      { "text": "Rotate pin", "isCorrect": false },
      { "text": "Set motor angle to [x]", "isCorrect": false },
      { "text": "**Set servo motor to [x] degrees**", "isCorrect": true },
      { "text": "Start motor rotation", "isCorrect": false }
    ]
  },
  {
    "question": "ഏത് സിഗ്നലാണ് ബസറിന് ശബ്ദമുണ്ടാക്കാൻ പ്രേരണ നൽകുന്നത്?",
    "options": [
      { "text": "GND", "isCorrect": false },
      { "text": "HIGH (ഓഫ്)", "isCorrect": false },
      { "text": "LOW (ഓൺ)", "isCorrect": true },
      { "text": "OFF", "isCorrect": false }
    ]
  },
  {
    "question": "ഫേസ് ഡിറ്റക്ഷൻ അടിസ്ഥാനമാക്കിയുള്ള സ്മാർട്ട് ഡോറുകളിൽ, വാതിൽ തുറക്കാൻ എത്ര മുഖങ്ങൾ കണ്ടെത്തണം?",
    "options": [
      { "text": "0", "isCorrect": false },
      { "text": "**1 അല്ലെങ്കിൽ അതിൽ കൂടുതൽ**", "isCorrect": true },
      { "text": "2 മാത്രം", "isCorrect": false },
      { "text": "പരിധിയില്ലാത്തത്", "isCorrect": false }
    ]
  },
  {
    "question": "അർഡ്യൂനോ പ്രോജക്റ്റുകളിൽ USB കേബിളിൻ്റെ ധർമ്മം എന്താണ്?",
    "options": [
      { "text": "ഇൻ്റർനെറ്റ് നൽകുന്നു", "isCorrect": false },
      { "text": "സെൻസറിന് പവർ നൽകുന്നു", "isCorrect": false },
      { "text": "**പ്രോഗ്രാമുകളും പവറും കൈമാറ്റം ചെയ്യുന്നു**", "isCorrect": true },
      { "text": "ഘടകങ്ങൾ തണുപ്പിക്കുന്നു", "isCorrect": false }
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
