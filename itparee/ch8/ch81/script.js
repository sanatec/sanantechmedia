document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "പെർസിസ്റ്റൻസ് ഓഫ് വിഷൻ (Persistence of vision) എന്നത് എന്തിനെ സൂചിപ്പിക്കുന്നു?",
    "options": [
      { "text": "ഇരുട്ടിൽ കാണാനുള്ള കഴിവ്", "isCorrect": false },
      { "text": "ഒരു ഇമേജ് റെറ്റിനയിൽ കുറഞ്ഞ സമയത്തേക്ക് തങ്ങിനിൽക്കുന്നത്", "isCorrect": true },
      { "text": "ആനിമേഷനായി കമ്പ്യൂട്ടറുകൾ ഉപയോഗിക്കുന്നത്", "isCorrect": false },
      { "text": "ചലിക്കുന്ന വസ്തുക്കൾ മങ്ങിയതായി തോന്നുന്നത്", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു ഇമേജ് എത്ര സമയമാണ് റെറ്റിനയിൽ തങ്ങിനിൽക്കുന്നത്?",
    "options": [
      { "text": "ഒരു സെക്കൻഡ്", "isCorrect": false },
      { "text": "ഒരു സെക്കൻഡിൻ്റെ പതിനാറിലൊന്ന്", "isCorrect": true },
      { "text": "ഒരു സെക്കൻഡിൻ്റെ പത്തിലൊന്ന്", "isCorrect": false },
      { "text": "അര സെക്കൻഡ്", "isCorrect": false }
    ]
  },
  {
    "question": "ചലനം (Motion) തിരിച്ചറിയുന്നത് എപ്പോഴാണ്?",
    "options": [
      { "text": "ഒരു നിശ്ചല ചിത്രം സാവധാനം കാണിക്കുമ്പോൾ", "isCorrect": false },
      { "text": "നിറങ്ങൾ മാറുമ്പോൾ", "isCorrect": false },
      { "text": "ക്രമത്തിലുള്ള ഇമേജുകൾ അതിവേഗം കാണിക്കുമ്പോൾ", "isCorrect": true },
      { "text": "വസ്തു കറങ്ങുമ്പോൾ", "isCorrect": false }
    ]
  },
  {
    "question": "ആനിമേഷൻ സാങ്കേതികവിദ്യ വികസിപ്പിച്ചത്:",
    "options": [
      { "text": "റോബോട്ടിക്സ് ഉപയോഗിച്ച്", "isCorrect": false },
      { "text": "കൃത്രിമ ബുദ്ധി (Artificial Intelligence) ഉപയോഗിച്ച്", "isCorrect": false },
      { "text": "കമ്പ്യൂട്ടർ വിഷൻ ഉപയോഗിച്ച്", "isCorrect": false },
      { "text": "മനുഷ്യൻ്റെ 'പെർസിസ്റ്റൻസ് ഓഫ് വിഷൻ' ഉപയോഗിച്ച്", "isCorrect": true }
    ]
  },
  {
    "question": "ആനിമേഷൻ ഉപകരണങ്ങളിൽ ഏറ്റവും ആദ്യത്തേത്:",
    "options": [
      { "text": "OpenToonz", "isCorrect": false },
      { "text": "ഫ്ലിപ്പ്ബുക്ക് (Flipbook)", "isCorrect": false },
      { "text": "സൂട്രോപ്പ് (Zoetrope)", "isCorrect": false },
      { "text": "ഫെനാക്കിസ്റ്റിസ്കോപ്പ് (Phenakistiscope)", "isCorrect": true }
    ]
  },
  {
    "question": "ഒരു ഫ്ലിപ്പ്ബുക്ക് അറിയപ്പെടുന്നത്:",
    "options": [
      { "text": "കൈനോഗ്രാഫ് (Kineograph)", "isCorrect": true },
      { "text": "സീക്വൻസ് ബുക്ക്", "isCorrect": false },
      { "text": "മോഷൻ ഡയറി", "isCorrect": false },
      { "text": "സ്റ്റോറിബോർഡ്", "isCorrect": false }
    ]
  },
  {
    "question": "ഫ്ലിപ്പ്ബുക്കുകൾ ചലനം സൃഷ്ടിക്കുന്നത് എപ്പോഴാണ്?",
    "options": [
      { "text": "ഇമേജുകൾ മങ്ങിക്കുമ്പോൾ", "isCorrect": false },
      { "text": "ഒരു ചിത്രം ആവർത്തിച്ച് കാണിക്കുമ്പോൾ", "isCorrect": false },
      { "text": "ടെക്സ്റ്റ് മാത്രം ഉൾപ്പെടുത്തുമ്പോൾ", "isCorrect": false },
      { "text": "ചെറിയ വ്യത്യാസങ്ങളുള്ള ചിത്രങ്ങളോടുകൂടിയ പേജുകൾ അതിവേഗം മറിക്കുമ്പോൾ", "isCorrect": true }
    ]
  },
  {
    "question": "ഫെനാക്കിസ്റ്റിസ്കോപ്പ് (Phenakistiscope) അവതരിപ്പിച്ചത്:",
    "options": [
      { "text": "1820-കളിൽ", "isCorrect": false },
      { "text": "1830-കളിൽ", "isCorrect": true },
      { "text": "1900-കളിൽ", "isCorrect": false },
      { "text": "1850-കളിൽ", "isCorrect": false }
    ]
  },
  {
    "question": "ഫെനാക്കിസ്റ്റിസ്കോപ്പിൽ, ചിത്രങ്ങൾ വരച്ചിരുന്നത്:",
    "options": [
      { "text": "വൃത്താകൃതിയിലുള്ള ഹാർഡ്ബോർഡിൽ", "isCorrect": true },
      { "text": "കമ്പ്യൂട്ടർ സ്ക്രീനിൽ", "isCorrect": false },
      { "text": "കല്ല് ഫലകങ്ങളിൽ", "isCorrect": false },
      { "text": "പേപ്പർ റോളുകളിൽ", "isCorrect": false }
    ]
  },
  {
    "question": "ICT പാഠപുസ്തകത്തിലെ ഫ്ലിപ്പ്ബുക്ക് ആനിമേഷൻ കാണിച്ചത്:",
    "options": [
      { "text": "ഒരു പൂമ്പാറ്റ പറക്കുന്നത്", "isCorrect": false },
      { "text": "ഒരു നായ്ക്കുട്ടി കുരയ്ക്കുന്നത്", "isCorrect": false },
      { "text": "ഒരു ചെടി വളരുന്നതും നായ്ക്കുട്ടി വാലാട്ടുന്നതും", "isCorrect": true },
      { "text": "ഒരു മനുഷ്യൻ നടക്കുന്നത്", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു ആനിമേഷൻ സിനിമ നിർമ്മിക്കുന്നതിലെ ആദ്യപടി:",
    "options": [
      { "text": "സ്റ്റോറിബോർഡ്", "isCorrect": false },
      { "text": "കളറിംഗ്", "isCorrect": false },
      { "text": "തീം തിരഞ്ഞെടുക്കൽ", "isCorrect": true },
      { "text": "ശബ്ദം ചേർക്കൽ", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു സ്റ്റോറിബോർഡിൽ ഉൾപ്പെടുന്നത്:",
    "options": [
      { "text": "ഓരോ രംഗത്തിലെയും പ്രവർത്തനങ്ങൾ, കഥാപാത്രങ്ങൾ, സംഗീതം എന്നിവയുടെ വിശദാംശങ്ങൾ", "isCorrect": true },
      { "text": "സംഭാഷണങ്ങൾ മാത്രം", "isCorrect": false },
      { "text": "കമ്പ്യൂട്ടർ കോഡിംഗ്", "isCorrect": false },
      { "text": "എഡിറ്റിംഗ് കുറിപ്പുകൾ മാത്രം", "isCorrect": false }
    ]
  },
  {
    "question": "കഥാപാത്ര രൂപകൽപ്പനയ്ക്ക് (Character design) വേണ്ടത്:",
    "options": [
      { "text": "ക്രമരഹിതമായ ഡ്രോയിംഗ്", "isCorrect": false },
      { "text": "സങ്കീർണ്ണമായ സോഫ്റ്റ്‌വെയർ", "isCorrect": false },
      { "text": "ശരിയായ രൂപങ്ങൾ, നിറങ്ങൾ തിരഞ്ഞെടുക്കൽ, എളുപ്പത്തിൽ മാറ്റം വരുത്താൻ കഴിയുന്നത്", "isCorrect": true },
      { "text": "തിളക്കമുള്ള നിറങ്ങൾ മാത്രം", "isCorrect": false }
    ]
  },
  {
    "question": "ലൂണയുടെ കഥയിലെ പ്രധാന കഥാപാത്രം:",
    "options": [
      { "text": "ഒരു പക്ഷി", "isCorrect": false },
      { "text": "ഒരു ആൺകുട്ടി", "isCorrect": false },
      { "text": "ഒരു പൂച്ച", "isCorrect": false },
      { "text": "ലൂണ എന്ന നായ്ക്കുട്ടി", "isCorrect": true }
    ]
  },
  {
    "question": "ആനിമേഷൻ നിർമ്മിക്കുന്നതിന് മുമ്പ് അത് മുൻകൂട്ടി കാണാൻ സഹായിക്കുന്ന ഉപകരണം ഏതാണ്?",
    "options": [
      { "text": "വീഡിയോ എഡിറ്റർ", "isCorrect": false },
      { "text": "ടൈംലൈൻ", "isCorrect": false },
      { "text": "ഫ്ലിപ്പ്ബുക്ക്", "isCorrect": false },
      { "text": "സ്റ്റോറിബോർഡ്", "isCorrect": true }
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
