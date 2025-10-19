document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "താഴെ പറയുന്നവയിൽ സാധാരണയായി ഒരു അർഡ്യൂനോ ബോർഡിൻ്റെ ഭാഗമല്ലാത്തത് ഏതാണ്?",
    "options": [
      { "text": "GND പിൻ", "isCorrect": false },
      { "text": "എക്സ്റ്റേണൽ പവർ സപ്ലൈ (കണക്റ്റർ ഉണ്ടായിരിക്കും, പക്ഷെ സപ്ലൈ ഭാഗമല്ല)", "isCorrect": false },
      { "text": "**സെർവോ ഷാഫ്റ്റ്**", "isCorrect": true },
      { "text": "ഡിജിറ്റൽ I/O പിന്നുകൾ", "isCorrect": false }
    ]
  },
  {
    "question": "ഇടയ്ക്കിടെ ബസർ ശബ്ദമുണ്ടാക്കുന്ന ഒരു സർക്യൂട്ട് ഏത് സിസ്റ്റത്തിന് സമാനമാണ്?",
    "options": [
      { "text": "സ്മാർട്ട് ഡോർ", "isCorrect": false },
      { "text": "LED ബ്ലിങ്കിംഗ് സിസ്റ്റം", "isCorrect": true },
      { "text": "സാനിറ്റൈസർ ഡിസ്പെൻസർ", "isCorrect": false },
      { "text": "മോഷൻ ഡിറ്റക്ടർ", "isCorrect": false }
    ]
  },
  {
    "question": "ബസറിൻ്റെ I/O പിന്നിലേക്ക് ബീപ്പ് നിർത്താൻ ഏത് സിഗ്നലാണ് അയക്കേണ്ടത്?",
    "options": [
      { "text": "OFF", "isCorrect": false },
      { "text": "LOW (ശബ്ദം ഉണ്ടാക്കാൻ)", "isCorrect": false },
      { "text": "HIGH (ശബ്ദം നിർത്താൻ)", "isCorrect": true },
      { "text": "GND", "isCorrect": false }
    ]
  },
  {
    "question": "ഏത് റോബോട്ടിക് ഘടകമാണ് ചിത്രങ്ങൾ ശേഖരിക്കാൻ കഴിയുന്നത്?",
    "options": [
      { "text": "IR സെൻസർ", "isCorrect": false },
      { "text": "മൈക്രോഫോൺ", "isCorrect": false },
      { "text": "ക്യാമറ", "isCorrect": true },
      { "text": "ബസർ", "isCorrect": false }
    ]
  },
  {
    "question": "സ്റ്റേജ് മോഡിൽ (Stage Mode) അർഡ്യൂനോയെ PictoBlox-ലേക്ക് ബന്ധിപ്പിക്കാൻ എന്ത് ആവശ്യമാണ്?",
    "options": [
      { "text": "ഫേംവെയർ അപ്‌ലോഡ് ചെയ്യുക", "isCorrect": true },
      { "text": "വൈഫൈ ഉപയോഗിക്കുക", "isCorrect": false },
      { "text": "റീസെറ്റ് ബട്ടൺ അമർത്തുക", "isCorrect": false },
      { "text": "ക്യാമറ ബന്ധിപ്പിക്കുക", "isCorrect": false }
    ]
  },
  {
    "question": "PictoBlox-ലെ ഫേസ് ഡിറ്റക്ഷൻ ഏത് ഹാർഡ്‌വെയറാണ് ഉപയോഗിക്കുന്നത്?",
    "options": [
      { "text": "സെർവോ മോട്ടോർ", "isCorrect": false },
      { "text": "ബസർ", "isCorrect": false },
      { "text": "കമ്പ്യൂട്ടർ/ലാപ്ടോപ്പ് ക്യാമറ", "isCorrect": true },
      { "text": "PIR സെൻസർ", "isCorrect": false }
    ]
  },
  {
    "question": "ഏത് റോബോട്ടിക് ആപ്ലിക്കേഷനാണ് കമ്പ്യൂട്ടർ വിഷൻ (computer vision) ഉപയോഗിക്കുന്നത്?",
    "options": [
      { "text": "LED ബ്ലിങ്കിംഗ്", "isCorrect": false },
      { "text": "ഓട്ടോമാറ്റിക് ടാപ്പ്", "isCorrect": false },
      { "text": "സ്മാർട്ട് ഡോർ", "isCorrect": true },
      { "text": "ബസർ കൺട്രോൾ", "isCorrect": false }
    ]
  },
  {
    "question": "സ്മാർട്ട് ഡോർ സജ്ജീകരിക്കുമ്പോൾ, എത്ര ഡിഗ്രിയാണ് വാതിൽ തുറക്കുന്നത്?",
    "options": [
      { "text": "45°", "isCorrect": false },
      { "text": "180°", "isCorrect": false },
      { "text": "0°", "isCorrect": false },
      { "text": "90°", "isCorrect": true }
    ]
  },
  {
    "question": "ഓട്ടോമാറ്റിക് സാനിറ്റൈസർ സിസ്റ്റത്തിൽ ഉപയോഗിക്കുന്ന രണ്ട് ഘടകങ്ങൾ ഏതാണ്?",
    "options": [
      { "text": "സെർവോ മോട്ടോറും ബസറും", "isCorrect": false },
      { "text": "IR സെൻസറും ബസറും", "isCorrect": false },
      { "text": "സെർവോ മോട്ടോറും IR സെൻസറും", "isCorrect": true },
      { "text": "ക്യാമറയും ബസറും", "isCorrect": false }
    ]
  },
  {
    "question": "ഇൻഫ്രാറെഡ് തരംഗങ്ങൾ പുറത്തുവിടുകയും കണ്ടെത്തുകയും ചെയ്യുന്ന സെൻസർ ഏതാണ്?",
    "options": [
      { "text": "ക്യാമറ", "isCorrect": false },
      { "text": "ലൈറ്റ് സെൻസർ", "isCorrect": false },
      { "text": "IR സെൻസർ", "isCorrect": true },
      { "text": "അൾട്രാസോണിക് സെൻസർ", "isCorrect": false }
    ]
  },
  {
    "question": "അർഡ്യൂനോയിലെ മൈക്രോകൺട്രോളറിൻ്റെ ധർമ്മം എന്താണ്?",
    "options": [
      { "text": "ഔട്ട്പുട്ട് പ്രദർശിപ്പിക്കുക", "isCorrect": false },
      { "text": "ക്യാമറ ഡാറ്റ സംഭരിക്കുക", "isCorrect": false },
      { "text": "വിവരങ്ങൾ ശേഖരിക്കുകയും പ്രോസസ്സ് ചെയ്യുകയും ചെയ്യുക", "isCorrect": true },
      { "text": "ഇൻ്റർനെറ്റ് ആക്സസ് നൽകുക", "isCorrect": false }
    ]
  },
  {
    "question": "ശബ്ദം മനസ്സിലാക്കാൻ (sensing sound) ഉപയോഗിക്കുന്ന ഉപകരണം ഏതാണ്?",
    "options": [
      { "text": "IR സെൻസർ", "isCorrect": false },
      { "text": "ലൈറ്റ് സെൻസർ", "isCorrect": false },
      { "text": "മൈക്രോഫോൺ", "isCorrect": true },
      { "text": "LED", "isCorrect": false }
    ]
  },
  {
    "question": "സോൾഡറിംഗ് ഇല്ലാതെ സർക്യൂട്ടുകൾ നിർമ്മിക്കാൻ നിങ്ങളെ അനുവദിക്കുന്ന ഘടകം ഏതാണ്?",
    "options": [
      { "text": "ജമ്പർ വയറുകൾ", "isCorrect": false },
      { "text": "ബ്രെഡ്ബോർഡ് (Breadboard)", "isCorrect": true },
      { "text": "PCB ബോർഡ്", "isCorrect": false },
      { "text": "അർഡ്യൂനോ ഷീൽഡ്", "isCorrect": false }
    ]
  },
  {
    "question": "സ്മാർട്ട് ഡോറുകളിൽ താപ വികിരണം (heat radiation) കണ്ടെത്താൻ ഉപയോഗിക്കുന്ന സെൻസർ ഏതാണ്?",
    "options": [
      { "text": "PIR സെൻസർ (Passive Infrared)", "isCorrect": true },
      { "text": "IR സെൻസർ", "isCorrect": false },
      { "text": "അൾട്രാസോണിക് സെൻസർ", "isCorrect": false },
      { "text": "ക്യാമറ", "isCorrect": false }
    ]
  },
  {
    "question": "LED, ബസർ, സെർവോ മോട്ടോർ എന്നിവ ഏത് തരം ഉപകരണങ്ങളാണ്?",
    "options": [
      { "text": "ഇൻപുട്ട് ഉപകരണങ്ങൾ", "isCorrect": false },
      { "text": "സംഭരണ ഉപകരണങ്ങൾ", "isCorrect": false },
      { "text": "ഔട്ട്പുട്ട് ഉപകരണങ്ങൾ", "isCorrect": true },
      { "text": "വയർലെസ്സ് ഉപകരണങ്ങൾ", "isCorrect": false }
    ]
  },
  {
    "question": "ഡിജിറ്റൽ കൺട്രോളിനായി ബസർ ബന്ധിപ്പിക്കാൻ അർഡ്യൂനോയിലെ ഏത് പിന്നാണ് സാധാരണയായി ഉപയോഗിക്കുന്നത്?",
    "options": [
      { "text": "5V", "isCorrect": false },
      { "text": "DIGITAL PIN 8", "isCorrect": true },
      { "text": "അനലോഗ് പിൻ A0", "isCorrect": false },
      { "text": "RESET", "isCorrect": false }
    ]
  },
  {
    "question": "ഈ അദ്ധ്യായത്തിൽ പരാമർശിക്കാത്ത ഒരു സെൻസർ ഏതാണ്?",
    "options": [
      { "text": "IR സെൻസർ", "isCorrect": false },
      { "text": "PIR സെൻസർ", "isCorrect": false },
      { "text": "പ്രഷർ സെൻസർ", "isCorrect": true },
      { "text": "അൾട്രാസോണിക് സെൻസർ", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു ജമ്പർ വയറിൻ്റെ ഉപയോഗം എന്താണ്?",
    "options": [
      { "text": "അർഡ്യൂനോക്ക് പവർ നൽകാൻ", "isCorrect": false },
      { "text": "ഫേംവെയർ അപ്‌ലോഡ് ചെയ്യാൻ", "isCorrect": false },
      { "text": "ഒരു ബ്രെഡ്ബോർഡിൽ ഘടകങ്ങൾ ബന്ധിപ്പിക്കാൻ", "isCorrect": true },
      { "text": "സർക്യൂട്ടുകൾ സോൾഡർ ചെയ്യാൻ", "isCorrect": false }
    ]
  },
  {
    "question": "LED-യുടെ ആനോഡ് GND-യിലും കാഥോഡ് 5V-യിലും ബന്ധിപ്പിച്ചാൽ എന്ത് സംഭവിക്കും?",
    "options": [
      { "text": "LED തിളങ്ങും", "isCorrect": false },
      { "text": "LED മിന്നിമറയും", "isCorrect": false },
      { "text": "LED കത്തിപ്പോകും", "isCorrect": false },
      { "text": "LED പ്രവർത്തിക്കില്ല (റിവേഴ്സ് പോളാരിറ്റി)", "isCorrect": true }
    ]
  },
  {
    "question": "ഒരു ഡിജിറ്റൽ പിൻ LOW-യിലേക്ക് സജ്ജമാക്കുന്ന PictoBlox ബ്ലോക്ക് ഏതാണ്?",
    "options": [
      { "text": "Set digital pin [x] HIGH", "isCorrect": false },
      { "text": "Set analog pin [x] ON", "isCorrect": false },
      { "text": "Set digital pin [x] LOW", "isCorrect": true },
      { "text": "Digital write OFF", "isCorrect": false }
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
