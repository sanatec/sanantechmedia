document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "ആനിമേഷൻ ഉപയോഗിക്കുന്നത്:",
    "options": [
      { "text": "ചലച്ചിത്ര വ്യവസായത്തിൽ", "isCorrect": false },
      { "text": "വിദ്യാഭ്യാസത്തിൽ", "isCorrect": false },
      { "text": "ആരോഗ്യ സംരക്ഷണത്തിൽ", "isCorrect": false },
      { "text": "മുകളിൽ പറഞ്ഞിരിക്കുന്നവയിലെല്ലാം", "isCorrect": true }
    ]
  },
  {
    "question": "ആനിമേറ്റഡ് പരസ്യങ്ങൾ എന്തിനു ഉദാഹരണമാണ്?",
    "options": [
      { "text": "ഫ്ലിപ്പ്ബുക്കുകൾ", "isCorrect": false },
      { "text": "സ്റ്റാറ്റിക് മീഡിയ", "isCorrect": false },
      { "text": "മോഷൻ ഗ്രാഫിക്സ്", "isCorrect": true },
      { "text": "ഡ്രോയിംഗ് ഷീറ്റുകൾ", "isCorrect": false }
    ]
  },
  {
    "question": "ആനിമേഷൻ മേഖലയിലെ ഒരു കരിയറിന് ആവശ്യമായത്:",
    "options": [
      { "text": "സാങ്കേതികവും സർഗ്ഗാത്മകവുമായ വൈദഗ്ദ്ധ്യം", "isCorrect": true },
      { "text": "കമ്പ്യൂട്ടർ പരിജ്ഞാനം മാത്രം", "isCorrect": false },
      { "text": "കലാപരമായ കഴിവുകൾ മാത്രം", "isCorrect": false },
      { "text": "ഇവയിൽ ഒന്നുമല്ല", "isCorrect": false }
    ]
  },
  {
    "question": "ആനിമേഷൻ സഹായിക്കുന്നത്:",
    "options": [
      { "text": "ആശയവിനിമയത്തിനും പഠനത്തിനും", "isCorrect": true },
      { "text": "ബിസിനസ്സിന് മാത്രം", "isCorrect": false },
      { "text": "ഗെയിമുകൾക്ക് മാത്രം", "isCorrect": false },
      { "text": "വിനോദത്തിന് മാത്രം", "isCorrect": false }
    ]
  },
  {
    "question": "ഫ്ലിപ്പ്ബുക്കുകൾ ഡിജിറ്റലായി സൃഷ്ടിക്കാൻ ഉപയോഗിക്കുന്നത്:",
    "options": [
      { "text": "പത്രങ്ങൾ", "isCorrect": false },
      { "text": "ഇൻ്റർനെറ്റ് വെബ്സൈറ്റുകളും സോഫ്റ്റ്‌വെയറുകളും", "isCorrect": true },
      { "text": "പെൻസിലുകൾ മാത്രം", "isCorrect": false },
      { "text": "പാഠപുസ്തകങ്ങൾ മാത്രം", "isCorrect": false }
    ]
  },
  {
    "question": "ട്വീനിംഗിൻ്റെ (Tweening) പ്രധാന ലക്ഷ്യം:",
    "options": [
      { "text": "എല്ലാ ഫ്രെയിമുകളും കൈകൊണ്ട് വരയ്ക്കുന്നത് ഒഴിവാക്കുക", "isCorrect": true },
      { "text": "നിറങ്ങൾ മാറ്റുന്നത്", "isCorrect": false },
      { "text": ".mp4 ആയി സേവ് ചെയ്യുന്നത്", "isCorrect": false },
      { "text": "ശബ്ദ ഇഫക്റ്റുകൾ ചേർക്കുന്നത്", "isCorrect": false }
    ]
  },
  {
    "question": "ഇവയിൽ 2D സോഫ്റ്റ്‌വെയർ അല്ലാത്തത് ഏതാണ്?",
    "options": [
      { "text": "ബ്ലെൻഡർ", "isCorrect": true },
      { "text": "ഓപ്പൺടൂൺസ്", "isCorrect": false },
      { "text": "തുപ്പി ട്യൂബ് ഡെസ്ക്", "isCorrect": false },
      { "text": "സിൻഫിഗ് സ്റ്റുഡിയോ", "isCorrect": false }
    ]
  },
  {
    "question": "ഓപ്പൺടൂൺസിലെ എക്സ്ഷീറ്റ് (Xsheet) എന്തിനു സമാനമാണ്?",
    "options": [
      { "text": "ടൈംലൈൻ", "isCorrect": true },
      { "text": "സ്റ്റോറിബോർഡ്", "isCorrect": false },
      { "text": "ഫ്ലിപ്പ്ബുക്ക്", "isCorrect": false },
      { "text": "മ്യൂസിക് ഷീറ്റ്", "isCorrect": false }
    ]
  },
  {
    "question": "FPS എന്നതിൻ്റെ പൂർണ്ണരൂപം:",
    "options": [
      { "text": "ഫ്രെയിം പെർ സെക്കൻഡ്", "isCorrect": true },
      { "text": "ഫിലിം പ്ലേബാക്ക് സിസ്റ്റം", "isCorrect": false },
      { "text": "ഫ്രെയിംസ് പെർ സ്റ്റോറേജ്", "isCorrect": false },
      { "text": "ഫയൽ പ്രോസസ്സിംഗ് സ്പീഡ്", "isCorrect": false }
    ]
  },
  {
    "question": "ഓപ്പൺടൂൺസിൽ റിപ്പീറ്റ് ബട്ടൺ ഉപയോഗിക്കുന്നത്:",
    "options": [
      { "text": "മേഘങ്ങൾ വീണ്ടും വരയ്ക്കാൻ", "isCorrect": false },
      { "text": "ഫ്രെയിമുകളിലുടനീളം ചിത്രങ്ങൾ പകർത്താൻ", "isCorrect": true },
      { "text": "ഫ്രെയിമുകൾ ഇല്ലാതാക്കാൻ", "isCorrect": false },
      { "text": "ജോലി സേവ് ചെയ്യാൻ", "isCorrect": false }
    ]
  },
  {
    "question": "സ്റ്റൈൽ എഡിറ്റർ (Style Editor) ഉപയോഗിക്കുന്നത്:",
    "options": [
      { "text": "രൂപങ്ങൾ വരയ്ക്കാൻ", "isCorrect": false },
      { "text": "സംഭാഷണങ്ങൾ എഴുതാൻ", "isCorrect": false },
      { "text": "നിറങ്ങൾ തിരഞ്ഞെടുക്കാനും എഡിറ്റ് ചെയ്യാനും", "isCorrect": true },
      { "text": "ശബ്ദം ചേർക്കാൻ", "isCorrect": false }
    ]
  },
  {
    "question": "ടൂൺസ് വെക്റ്റർ ലെവൽ (Toonz Vector Level) ഉപയോഗിക്കുന്നത്:",
    "options": [
      { "text": "ശബ്ദങ്ങൾ ഉൾപ്പെടുത്താൻ", "isCorrect": false },
      { "text": "നേരിട്ട് ആനിമേറ്റ് ചെയ്യാൻ", "isCorrect": false },
      { "text": "റാസ്റ്റർ ഇമേജുകൾ വരയ്ക്കാൻ", "isCorrect": false },
      { "text": "സ്കെയിലബിൾ വെക്റ്റർ ഇമേജുകൾ വരയ്ക്കാൻ", "isCorrect": true }
    ]
  },
  {
    "question": "ഓപ്പൺടൂൺസിൽ റെൻഡറിംഗ് ചെയ്യാൻ കഴിയുന്നത്:",
    "options": [
      { "text": "റെൻഡർ → ഫാസ്റ്റ് റെൻഡർ ടു MP4 വഴി", "isCorrect": true },
      { "text": "ഫയൽ → എക്സ്പോർട്ട് ആസ് PDF വഴി", "isCorrect": false },
      { "text": "ടൂൾസ് → സേവ് ഫ്രെയിം വഴി", "isCorrect": false },
      { "text": "എഡിറ്റ് → എക്സ്പോർട്ട് സീൻ വഴി", "isCorrect": false }
    ]
  },
  {
    "question": "ഏത് പ്രവർത്തനം കൊണ്ടാണ് ആനിമേഷൻ കൂടുതൽ ആകർഷകമാകുന്നത്?",
    "options": [
      { "text": "FPS കുറയ്ക്കുന്നത്", "isCorrect": false },
      { "text": "പശ്ചാത്തല സംഗീതവും ചലനങ്ങളും ചേർക്കുന്നത്", "isCorrect": true },
      { "text": "ശബ്ദം നീക്കം ചെയ്യുന്നത്", "isCorrect": false },
      { "text": "രംഗങ്ങൾ കുറയ്ക്കുന്നത്", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു നല്ല ആനിമേഷൻ ഡിസൈനർക്ക് ഉണ്ടായിരിക്കേണ്ടത്:",
    "options": [
      { "text": "ഓർമ്മശക്തി മാത്രം", "isCorrect": false },
      { "text": "കമ്പ്യൂട്ടർ സാക്ഷരത മാത്രം", "isCorrect": false },
      { "text": "സർഗ്ഗാത്മകത മാത്രം", "isCorrect": false },
      { "text": "സാങ്കേതിക വൈദഗ്ദ്ധ്യം + കലാപരമായ കഴിവുകൾ", "isCorrect": true }
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
