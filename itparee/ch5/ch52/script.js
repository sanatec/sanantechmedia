document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "CSS-ൽ ഏത് അളവാണ് റിലേറ്റീവ് (Relative) ആയത്?",
    "options": [
      { "text": "px (Absolute)", "isCorrect": false },
      { "text": "in (Absolute)", "isCorrect": false },
      { "text": "cm (Absolute)", "isCorrect": false },
      { "text": "em", "isCorrect": true }
    ]
  },
  {
    "question": "CSS എന്നാൽ എന്താണ്?",
    "options": [
      { "text": "Cascading Style Scripts", "isCorrect": false },
      { "text": "Computer Styled Sheets", "isCorrect": false },
      { "text": "Creative Style Sheets", "isCorrect": false },
      { "text": "Cascading Style Sheets", "isCorrect": true }
    ]
  },
  {
    "question": "CSS അവതരിപ്പിച്ചത് ആരാണ്?",
    "options": [
      { "text": "ബിൽ ഗേറ്റ്സ്", "isCorrect": false },
      { "text": "ടിം ബെർണേഴ്സ്-ലീ", "isCorrect": false },
      { "text": "ഹാക്കോൺ വിയം ലീ, ബെർട്ട് ബോസ്", "isCorrect": true },
      { "text": "ഇലോൺ മസ്ക്", "isCorrect": false }
    ]
  },
  {
    "question": "ഇൻലൈൻ സ്റ്റൈലുകൾക്കായി (inline styles) ഉപയോഗിക്കുന്ന ആട്രിബ്യൂട്ട് ഏതാണ്?",
    "options": [
      { "text": "class", "isCorrect": false },
      { "text": "id", "isCorrect": false },
      { "text": "style", "isCorrect": true },
      { "text": "div", "isCorrect": false }
    ]
  },
  {
    "question": "HTML-ൻ്റെ ഏത് ഭാഗത്താണ് ഇൻ്റേണൽ സ്റ്റൈൽ (Internal style) സ്ഥാപിച്ചിരിക്കുന്നത്?",
    "options": [
      { "text": "<title>", "isCorrect": false },
      { "text": "<head>", "isCorrect": true },
      { "text": "<body>", "isCorrect": false },
      { "text": "<footer>", "isCorrect": false }
    ]
  },
  {
    "question": "HTML-ലെ `<link>` ടാഗിൻ്റെ ഉദ്ദേശ്യം എന്താണ്?",
    "options": [
      { "text": "JavaScript-ലേക്ക് കണക്ട് ചെയ്യാൻ", "isCorrect": false },
      { "text": "മറ്റൊരു വെബ്‌പേജിലേക്ക് കണക്ട് ചെയ്യാൻ", "isCorrect": false },
      { "text": "ഒരു **എക്സ്റ്റേണൽ സ്റ്റൈൽഷീറ്റിലേക്ക്** ലിങ്ക് ചെയ്യാൻ", "isCorrect": true },
      { "text": "ചിത്രങ്ങൾ പ്രദർശിപ്പിക്കാൻ", "isCorrect": false }
    ]
  },
  {
    "question": "CSS ഫയലുകൾക്കായി ഉപയോഗിക്കുന്ന എക്സ്റ്റൻഷൻ ഏതാണ്?",
    "options": [
      { "text": ".html", "isCorrect": false },
      { "text": ".js", "isCorrect": false },
      { "text": ".css", "isCorrect": true },
      { "text": ".doc", "isCorrect": false }
    ]
  },
  {
    "question": "എക്സ്റ്റേണൽ CSS ഫയൽ എവിടെയാണ് ലിങ്ക് ചെയ്യുന്നത്?",
    "options": [
      { "text": "<body>", "isCorrect": false },
      { "text": "<style>", "isCorrect": false },
      { "text": "<script>", "isCorrect": false },
      { "text": "<head>", "isCorrect": true }
    ]
  },
  {
    "question": "ഒരേ പ്രോപ്പർട്ടി മൂന്ന് തരം സ്റ്റൈലുകളിലും നിർവചിക്കുമ്പോൾ എന്ത് സംഭവിക്കും?",
    "options": [
      { "text": "എക്സ്റ്റേണൽ സ്റ്റൈൽ പ്രയോഗിക്കുന്നു", "isCorrect": false },
      { "text": "ഇൻ്റേണൽ സ്റ്റൈൽ പ്രയോഗിക്കുന്നു", "isCorrect": false },
      { "text": "ഇൻലൈൻ സ്റ്റൈൽ പ്രയോഗിക്കുന്നു (ഏറ്റവും ഉയർന്ന മുൻഗണന)", "isCorrect": true },
      { "text": "ഒന്നും പ്രയോഗിക്കില്ല", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു വെബ്‌പേജിൽ ഭാഗങ്ങൾ വിഭജിക്കാൻ ഉപയോഗിക്കുന്ന ടാഗ് ഏതാണ്?",
    "options": [
      { "text": "<section>", "isCorrect": false },
      { "text": "<div>", "isCorrect": true },
      { "text": "<split>", "isCorrect": false },
      { "text": "<break>", "isCorrect": false }
    ]
  },
  {
    "question": "എക്സ്റ്റേണൽ CSS-ൻ്റെ ഒരു നേട്ടം എന്താണ്?",
    "options": [
      { "text": "കോഡ് ആവർത്തിക്കുന്നു", "isCorrect": false },
      { "text": "HTML ഫയലുകൾ ചെറുതാക്കുന്നു", "isCorrect": true },
      { "text": "പുനരുപയോഗിക്കാൻ കഴിയില്ല", "isCorrect": false },
      { "text": "വേഗത കുറഞ്ഞ ലോഡിംഗ്", "isCorrect": false }
    ]
  },
  {
    "question": "ഒന്നിലധികം പേജുകളിൽ CSS പുനരുപയോഗിക്കാൻ അനുവദിക്കുന്ന സ്റ്റൈൽ തരം ഏതാണ്?",
    "options": [
      { "text": "ഇൻലൈൻ", "isCorrect": false },
      { "text": "ഇൻ്റേണൽ", "isCorrect": false },
      { "text": "എക്സ്റ്റേണൽ", "isCorrect": true },
      { "text": "ഒന്നുമില്ല", "isCorrect": false }
    ]
  },
  {
    "question": "`style.css` ഫയൽ HTML-ൽ എങ്ങനെയാണ് ഉൾപ്പെടുത്തുന്നത്?",
    "options": [
      { "text": "<style src=\"style.css\">", "isCorrect": false },
      { "text": "<link rel=\"stylesheet\" href=\"style.css\">", "isCorrect": true },
      { "text": "<css src=\"style.css\">", "isCorrect": false },
      { "text": "<script href=\"style.css\">", "isCorrect": false }
    ]
  },
  {
    "question": "ഏത് പ്രോപ്പർട്ടിയാണ് ഫോണ്ടിൻ്റെ കനം (boldness) മാറ്റുന്നത്?",
    "options": [
      { "text": "font-weight", "isCorrect": true },
      { "text": "font-style", "isCorrect": false },
      { "text": "font-size", "isCorrect": false },
      { "text": "font-color", "isCorrect": false }
    ]
  },
  {
    "question": "CSS-ൽ കോളൻ (:) എന്തിനെയാണ് പ്രതിനിധീകരിക്കുന്നത്?",
    "options": [
      { "text": "വാല്യൂ", "isCorrect": false },
      { "text": "സെലക്ടർ", "isCorrect": false },
      { "text": "പ്രോപ്പർട്ടിയും വാല്യുവും തമ്മിലുള്ള സെപ്പറേറ്റർ", "isCorrect": true },
      { "text": "സ്റ്റേറ്റ്മെൻ്റിൻ്റെ അവസാനം", "isCorrect": false }
    ]
  },
  {
    "question": "CSS-ൽ ഒരു അർദ്ധവിരാമം (;) എന്ത് ചെയ്യുന്നു?",
    "options": [
      { "text": "എലമെൻ്റ് അവസാനിപ്പിക്കുന്നു", "isCorrect": false },
      { "text": "പ്രോപ്പർട്ടി സ്റ്റേറ്റ്മെൻ്റ് അവസാനിപ്പിക്കുന്നു", "isCorrect": true },
      { "text": "ഒരു പുതിയ ടാഗ് ആരംഭിക്കുന്നു", "isCorrect": false },
      { "text": "HTML-ഉം CSS-ഉം വേർതിരിക്കുന്നു", "isCorrect": false }
    ]
  },
  {
    "question": "ടെക്സ്റ്റ് കളറിനായുള്ള (text color) സ്റ്റൈൽ പ്രോപ്പർട്ടി ഏതാണ്?",
    "options": [
      { "text": "text-align", "isCorrect": false },
      { "text": "background-color", "isCorrect": false },
      { "text": "color", "isCorrect": true },
      { "text": "font-size", "isCorrect": false }
    ]
  },
  {
    "question": "ക്ലോസിംഗ് ടാഗ് ആവശ്യമില്ലാത്ത HTML ടാഗ് ഏതാണ്?",
    "options": [
      { "text": "<div>", "isCorrect": false },
      { "text": "<h2>", "isCorrect": false },
      { "text": "<br> (ബ്രേക്ക് ലൈൻ)", "isCorrect": true },
      { "text": "<p>", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു HTML ഫയലിൻ്റെ ഫയൽ എക്സ്റ്റൻഷൻ എന്താണ്?",
    "options": [
      { "text": ".html", "isCorrect": true },
      { "text": ".css", "isCorrect": false },
      { "text": ".doc", "isCorrect": false },
      { "text": ".jpg", "isCorrect": false }
    ]
  },
  {
    "question": "സാധാരണയായി എത്ര തരം CSS ആണ് ഉപയോഗിക്കാറ്?",
    "options": [
      { "text": "1", "isCorrect": false },
      { "text": "2", "isCorrect": false },
      { "text": "3 (Inline, Internal, External)", "isCorrect": true },
      { "text": "4", "isCorrect": false }
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
