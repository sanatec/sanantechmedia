document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "Scribus-ൽ കൂടുതൽ നിറങ്ങൾ എവിടെ ചേർക്കാം?",
    "options": [
      { "text": "Tools → Palette Editor", "isCorrect": false },
      { "text": "File → Color Settings", "isCorrect": false },
      { "text": "Edit → Colours and Fills", "isCorrect": true },
      { "text": "Insert → New Colors", "isCorrect": false }
    ]
  },
  {
    "question": "മലയാളം പാഠപുസ്തകങ്ങളിൽ ഉപയോഗിക്കുന്ന, CDIT വികസിപ്പിച്ച ഫോണ്ട് ഏതാണ്?",
    "options": [
      { "text": "Manjari", "isCorrect": false },
      { "text": "THUMBA", "isCorrect": true },
      { "text": "Lato", "isCorrect": false },
      { "text": "Kartika", "isCorrect": false }
    ]
  },
  {
    "question": "X-Pos, Y-Pos പോലുള്ള ഒബ്‌ജെക്റ്റ് സ്ഥാനങ്ങൾ കാണിക്കുന്ന ഘടകം ഏതാണ്?",
    "options": [
      { "text": "Toolbar", "isCorrect": false },
      { "text": "Canvas", "isCorrect": false },
      { "text": "Properties Window", "isCorrect": true },
      { "text": "Layers Panel", "isCorrect": false }
    ]
  },
  {
    "question": "മലയാളം ടെക്സ്റ്റ് വായിക്കാൻ കഴിയുന്നില്ലെങ്കിൽ എന്തു ചെയ്യണം?",
    "options": [
      { "text": "Scribus റീസ്റ്റാർട്ട് ചെയ്യുക", "isCorrect": false },
      { "text": "രൂപത്തിലേക്ക് മാറ്റുക", "isCorrect": false },
      { "text": "ശരിയായ യൂണിക്കോഡ് ഫോണ്ടും ഭാഷയും തിരഞ്ഞെടുക്കുക", "isCorrect": true },
      { "text": "ടെക്സ്റ്റ് ഡിലീറ്റ് ചെയ്യുക", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു പുതിയ ഡോക്യുമെൻ്റ് തുടങ്ങാൻ Scribus-ൽ ഉപയോഗിക്കുന്ന മെനു ഏതാണ്?",
    "options": [
      { "text": "Insert", "isCorrect": false },
      { "text": "File", "isCorrect": true },
      { "text": "Tools", "isCorrect": false },
      { "text": "View", "isCorrect": false }
    ]
  },
  {
    "question": "Scribus New Document വിൻഡോയിൽ നിങ്ങൾക്ക് തിരഞ്ഞെടുക്കാൻ കഴിയുന്ന ക്രമീകരണം (setting) ഏതാണ്?",
    "options": [
      { "text": "Line spacing", "isCorrect": false },
      { "text": "Colour palette", "isCorrect": false },
      { "text": "Page size-ഉം margins-ഉം", "isCorrect": true },
      { "text": "File format", "isCorrect": false }
    ]
  },
  {
    "question": "താഴെ പറയുന്നവയിൽ ഏതാണ് Scribus വർക്ക്‌സ്പെയ്‌സിൻ്റെ ഭാഗമല്ലാത്തത്?",
    "options": [
      { "text": "Menubar", "isCorrect": false },
      { "text": "Titlebar", "isCorrect": false },
      { "text": "Timeline", "isCorrect": true },
      { "text": "Canvas", "isCorrect": false }
    ]
  },
  {
    "question": "Scribus-ൽ Properties വിൻഡോ എവിടെ കണ്ടെത്താം?",
    "options": [
      { "text": "Tools മെനുവിൽ മാത്രം", "isCorrect": false },
      { "text": "ഒരു ഒബ്‌ജെക്റ്റിൽ ഇരട്ട ക്ലിക്കു ചെയ്താലോ അല്ലെങ്കിൽ Windows മെനുവിലൂടെയോ", "isCorrect": true },
      { "text": "Insert മെനുവിൽ", "isCorrect": false },
      { "text": "Format മെനുവിൽ", "isCorrect": false }
    ]
  },
  {
    "question": "Scribus-ൽ ഒരു പോളിഗൺ (polygon) രൂപം വരയ്ക്കാൻ ഉപയോഗിക്കുന്ന ഉപകരണം ഏതാണ്?",
    "options": [
      { "text": "Text Frame", "isCorrect": false },
      { "text": "Image Frame", "isCorrect": false },
      { "text": "Polygon Tool", "isCorrect": true },
      { "text": "Node Tool", "isCorrect": false }
    ]
  },
  {
    "question": "താഴെ പറയുന്നവയിൽ ഏതാണ് Scribus ടൂൾബാറിൽ സ്ഥിരമായി (by default) ലഭ്യമല്ലാത്തത്?",
    "options": [
      { "text": "Text frame", "isCorrect": false },
      { "text": "Canvas grid", "isCorrect": true },
      { "text": "Image frame", "isCorrect": false },
      { "text": "Shape tool", "isCorrect": false }
    ]
  },
  {
    "question": "Scribus-ൽ ഒരു ലൈൻ വരയ്ക്കുമ്പോൾ Ctrl അമർത്തുന്നത് എന്ത് പ്രവർത്തനമാണ് ചെയ്യുന്നത്?",
    "options": [
      { "text": "ലൈൻ വളഞ്ഞതാക്കുന്നു", "isCorrect": false },
      { "text": "ഒരു ഡാഷ് ലൈൻ സൃഷ്ടിക്കുന്നു", "isCorrect": false },
      { "text": "ലൈൻ പൂർണ്ണമായും നേർരേഖയായി ഉറപ്പാക്കുന്നു", "isCorrect": true },
      { "text": "ഷാഡോ സജീവമാക്കുന്നു", "isCorrect": false }
    ]
  },
  {
    "question": "Scribus-ൽ Selection Tool ഉപയോഗിച്ച് നിങ്ങൾക്ക് എന്തുചെയ്യാൻ കഴിയും?",
    "options": [
      { "text": "പുതിയ ടെക്സ്റ്റ് ചേർക്കാൻ", "isCorrect": false },
      { "text": "ഫോണ്ടുകൾ ഇംപോർട്ട് ചെയ്യാൻ", "isCorrect": false },
      { "text": "ഒബ്‌ജെക്റ്റുകൾ നീക്കാനും വലുപ്പം മാറ്റാനും", "isCorrect": true },
      { "text": "ഡോക്യുമെൻ്റുകൾ എക്സ്പോർട്ട് ചെയ്യാൻ", "isCorrect": false }
    ]
  },
  {
    "question": "Scribus-ൽ ഒരു രൂപത്തിൽ റൈറ്റ്-ക്ലിക്കു ചെയ്യുമ്പോൾ എന്ത് സംഭവിക്കുന്നു?",
    "options": [
      { "text": "ഒന്നും സംഭവിക്കുന്നില്ല", "isCorrect": false },
      { "text": "കളർ സെറ്റിംഗ്‌സ് മാത്രം തുറക്കുന്നു", "isCorrect": false },
      { "text": "എഡിറ്റിംഗ് ഓപ്ഷനുകളുള്ള ഒരു കോൺടെക്സ്റ്റ് മെനു തുറക്കുന്നു", "isCorrect": true },
      { "text": "Node Editing സജീവമാക്കുന്നു", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു ഒബ്‌ജെക്റ്റിൻ്റെ സ്ഥാനവും (X/Y) വലുപ്പവും എഡിറ്റ് ചെയ്യാൻ ഉപയോഗിക്കുന്ന ഘടകം ഏതാണ്?",
    "options": [
      { "text": "Canvas", "isCorrect": false },
      { "text": "Toolbar", "isCorrect": false },
      { "text": "Properties Window", "isCorrect": true },
      { "text": "Menubar", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു രൂപത്തിൻ്റെ ഫിൽ കളർ (fill color) മാറ്റാൻ Properties വിൻഡോയിലെ ഏത് ടാബാണ് ഉപയോഗിക്കുന്നത്?",
    "options": [
      { "text": "Text", "isCorrect": false },
      { "text": "Stroke", "isCorrect": false },
      { "text": "Colours", "isCorrect": true },
      { "text": "Effects", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു രൂപത്തിന് ചുറ്റുമുള്ള ബോർഡർ നീക്കം ചെയ്യാൻ, Stroke ടാബിൽ എന്ത് തിരഞ്ഞെടുക്കണം?",
    "options": [
      { "text": "White", "isCorrect": false },
      { "text": "Transparent", "isCorrect": false },
      { "text": "None", "isCorrect": true },
      { "text": "Hidden", "isCorrect": false }
    ]
  },
  {
    "question": "Scribus-ൽ കൂടുതൽ കളർ ഓപ്ഷനുകൾ കണ്ടെത്താൻ നിങ്ങൾ എവിടെ പോകണം?",
    "options": [
      { "text": "Tools → Color Picker", "isCorrect": false },
      { "text": "File → Preferences", "isCorrect": false },
      { "text": "Edit → Colours and Fills", "isCorrect": true },
      { "text": "View → Palettes", "isCorrect": false }
    ]
  },
  {
    "question": "Scribus-ൽ കളർ പാലറ്റ് വിപുലീകരിക്കാൻ ഏത് കളർ സെറ്റ് തിരഞ്ഞെടുക്കാം?",
    "options": [
      { "text": "Scribus Default", "isCorrect": false },
      { "text": "Basic Colors", "isCorrect": false },
      { "text": "Oxygen", "isCorrect": true },
      { "text": "Gradient", "isCorrect": false }
    ]
  },
  {
    "question": "Scribus-ൽ ഒരു ടെക്സ്റ്റിനോ ഒബ്‌ജെക്റ്റിനോ ഷാഡോ (shadow) എങ്ങനെ നൽകാം?",
    "options": [
      { "text": "Shadow Tool ഉപയോഗിക്കുക", "isCorrect": false },
      { "text": "Text Effects-ൽ ഡ്രോപ്പ് ഷാഡോ പ്രയോഗിക്കുക", "isCorrect": false },
      { "text": "Properties-ൽ “Has Drop Shadow” പ്രവർത്തനക്ഷമമാക്കുക", "isCorrect": true },
      { "text": "3D-യിലേക്ക് മാറ്റുക", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു ഒബ്‌ജെക്റ്റിൻ്റെ പോയിന്റുകൾ പരിഷ്‌ക്കരിച്ച് അതിൻ്റെ രൂപം മാറ്റാൻ നിങ്ങളെ അനുവദിക്കുന്ന ടൂൾ ഏതാണ്?",
    "options": [
      { "text": "Contour Line Editor", "isCorrect": false },
      { "text": "Node Editing", "isCorrect": true },
      { "text": "Shape Tool", "isCorrect": false },
      { "text": "Polygon Tool", "isCorrect": false }
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
