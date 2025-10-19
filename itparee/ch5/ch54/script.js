document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "ഇവയിൽ ഏതാണ് CSS-ൻ്റെ ഒരു തരം അല്ലാത്തത്?",
    "options": [
      { "text": "ഇൻ്റേണൽ", "isCorrect": false },
      { "text": "ഇൻലൈൻ", "isCorrect": false },
      { "text": "നെറ്റ്‌വർക്ക്", "isCorrect": true },
      { "text": "എക്സ്റ്റേണൽ", "isCorrect": false }
    ]
  },
  {
    "question": "CSS ലിങ്ക് ചെയ്യുന്നതിനുള്ള ശരിയായ ടാഗ് ഏതാണ്?",
    "options": [
      { "text": "<link>", "isCorrect": true },
      { "text": "<script>", "isCorrect": false },
      { "text": "<css>", "isCorrect": false },
      { "text": "<connect>", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു HTML ഡോക്യുമെൻ്റിൻ്റെ ഏത് ഭാഗമാണ് എക്സ്റ്റേണൽ CSS-നെ ലിങ്ക് ചെയ്യുന്നത്?",
    "options": [
      { "text": "<head>", "isCorrect": true },
      { "text": "<body>", "isCorrect": false },
      { "text": "<style>", "isCorrect": false },
      { "text": "<div>", "isCorrect": false }
    ]
  },
  {
    "question": "CSS മുൻഗണനയുടെ (priority) ശരിയായ ക്രമം (കൂടുതൽ നിന്ന് കുറവിലേക്ക്) ഏതാണ്?",
    "options": [
      { "text": "എക്സ്റ്റേണൽ > ഇൻ്റേണൽ > ഇൻലൈൻ", "isCorrect": false },
      { "text": "ഇൻലൈൻ > ഇൻ്റേണൽ > എക്സ്റ്റേണൽ", "isCorrect": true },
      { "text": "ഇൻ്റേണൽ > എക്സ്റ്റേണൽ > ഇൻലൈൻ", "isCorrect": false },
      { "text": "ഇൻലൈൻ > എക്സ്റ്റേണൽ > ഇൻ്റേണൽ", "isCorrect": false }
    ]
  },
  {
    "question": "CSS ഉപയോഗിക്കുന്നതിൻ്റെ പ്രധാന പ്രയോജനം ഇതാണ്:",
    "options": [
      { "text": "കുറഞ്ഞ ടാഗുകൾ ഉപയോഗിക്കുക", "isCorrect": false },
      { "text": "കൂടുതൽ HTML ചേർക്കുക", "isCorrect": false },
      { "text": "സ്റ്റൈലിംഗ് മെച്ചപ്പെടുത്തുകയും കോഡ് ആവർത്തനം കുറയ്ക്കുകയും ചെയ്യുക", "isCorrect": true },
      { "text": "ഫയൽ സൈസ് വർദ്ധിപ്പിക്കുക", "isCorrect": false }
    ]
  },
  {
    "question": "CSS ഉപയോഗിച്ച് ഒരു എലമെൻ്റിന് ബോർഡർ (border) എങ്ങനെ ചേർക്കാം?",
    "options": [
      { "text": "border-color", "isCorrect": false },
      { "text": "border: 1px solid black;", "isCorrect": true },
      { "text": "outline: black;", "isCorrect": false },
      { "text": "text-outline: true;", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു ടാഗിൻ്റെ പശ്ചാത്തലം മാറ്റുന്ന പ്രോപ്പർട്ടി ഏതാണ്?",
    "options": [
      { "text": "color", "isCorrect": false },
      { "text": "background", "isCorrect": false },
      { "text": "background-color", "isCorrect": true },
      { "text": "bgcolor", "isCorrect": false }
    ]
  },
  {
    "question": "CSS-ൽ ടെക്സ്റ്റ് ഇറ്റാലിക് (italic) ആക്കാൻ:",
    "options": [
      { "text": "text-style: italic;", "isCorrect": false },
      { "text": "font-style: italic;", "isCorrect": true },
      { "text": "font-weight: italic;", "isCorrect": false },
      { "text": "text-align: italic;", "isCorrect": false }
    ]
  },
  {
    "question": "ഫോണ്ട് (Font) മാറ്റുന്നതിനുള്ള ശരിയായ പ്രോപ്പർട്ടി ഏതാണ്?",
    "options": [
      { "text": "font-style", "isCorrect": false },
      { "text": "font-family", "isCorrect": true },
      { "text": "font-weight", "isCorrect": false },
      { "text": "font-size", "isCorrect": false }
    ]
  },
  {
    "question": "CSS-ൽ ലൈനുകൾ തമ്മിലുള്ള സ്‌പേസ് എങ്ങനെ വർദ്ധിപ്പിക്കാം?",
    "options": [
      { "text": "line-height", "isCorrect": true },
      { "text": "padding", "isCorrect": false },
      { "text": "margin", "isCorrect": false },
      { "text": "spacing", "isCorrect": false }
    ]
  },
  {
    "question": "സന്ദർശിച്ച ലിങ്കുകളുടെ (visited links) നിറം മാറ്റാൻ ഉപയോഗിക്കുന്നത്:",
    "options": [
      { "text": "a:visited", "isCorrect": true },
      { "text": "link:visited", "isCorrect": false },
      { "text": "a:hover", "isCorrect": false },
      { "text": "a:clicked", "isCorrect": false }
    ]
  },
  {
    "question": "“intro” എന്ന ക്ലാസ്സുള്ള ഒരു പാരഗ്രാഫിൽ സ്റ്റൈൽ പ്രയോഗിക്കുന്നതിനുള്ള സെലക്ടർ ഏതാണ്?",
    "options": [
      { "text": "p.intro", "isCorrect": false },
      { "text": "p#intro", "isCorrect": false },
      { "text": ".intro", "isCorrect": true },
      { "text": "intro.p", "isCorrect": false }
    ]
  },
  {
    "question": "ഇൻ്റേണൽ CSS-നായി സ്റ്റൈൽ നിർവചിക്കുന്ന ടാഗ് ഏതാണ്?",
    "options": [
      { "text": "<style>", "isCorrect": true },
      { "text": "<script>", "isCorrect": false },
      { "text": "<css>", "isCorrect": false },
      { "text": "<format>", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു ബ്ലോക്കിലെ ഉള്ളടക്കം തിരശ്ചീനമായി മധ്യഭാഗത്ത് (horizontally center) വിന്യസിക്കാൻ:",
    "options": [
      { "text": "text-align: middle;", "isCorrect": false },
      { "text": "align: center;", "isCorrect": false },
      { "text": "text-align: center;", "isCorrect": true },
      { "text": "justify-content: center;", "isCorrect": false }
    ]
  },
  {
    "question": "എല്ലാ എലമെൻ്റുകളെയും ലക്ഷ്യമിടുന്ന സെലക്ടർ ഏതാണ്?",
    "options": [
      { "text": "#", "isCorrect": false },
      { "text": ".", "isCorrect": false },
      { "text": "*", "isCorrect": true },
      { "text": "all", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു വെബ്‌പേജിൽ Google Fonts എങ്ങനെ ഉൾപ്പെടുത്താം?",
    "options": [
      { "text": "<google-font>", "isCorrect": false },
      { "text": "<head> ടാഗിൽ എക്സ്റ്റേണൽ ലിങ്ക് ഉപയോഗിച്ച്", "isCorrect": true },
      { "text": "<font src=\"\">", "isCorrect": false },
      { "text": "<script font=\"\">", "isCorrect": false }
    ]
  },
  {
    "question": "താഴെ പറയുന്നവയിൽ ഏതാണ് എല്ലാ `<h2>` ടാഗുകൾക്കും ചുവപ്പ് നിറം (red color) നൽകുന്നത്?",
    "options": [
      { "text": "h2 { color: red; }", "isCorrect": true },
      { "text": "h2.color = red;", "isCorrect": false },
      { "text": "color: red h2;", "isCorrect": false },
      { "text": "red.h2 {}", "isCorrect": false }
    ]
  },
  {
    "question": "CSS-ലെ id, class സെലക്ടറുകൾ തമ്മിലുള്ള വ്യത്യാസം എന്താണ്?",
    "options": [
      { "text": "id # ഉപയോഗിക്കുന്നു, class . ഉപയോഗിക്കുന്നു", "isCorrect": true },
      { "text": "class # ഉപയോഗിക്കുന്നു, id . ഉപയോഗിക്കുന്നു", "isCorrect": false },
      { "text": "രണ്ടും # ഉപയോഗിക്കുന്നു", "isCorrect": false },
      { "text": "രണ്ടും . ഉപയോഗിക്കുന്നു", "isCorrect": false }
    ]
  },
  {
    "question": "അതിൻ്റെ ID ഉപയോഗിച്ച് ഒരു പ്രത്യേക എലമെൻ്റിന് സ്റ്റൈൽ പ്രയോഗിക്കാൻ:",
    "options": [
      { "text": ".idname", "isCorrect": false },
      { "text": "#idname", "isCorrect": true },
      { "text": "id.name", "isCorrect": false },
      { "text": "element.id", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരേ ID ഒരു പേജിൽ എത്ര തവണ ഉപയോഗിക്കാം?",
    "options": [
      { "text": "ഒരു തവണ", "isCorrect": true },
      { "text": "രണ്ട് തവണ", "isCorrect": false },
      { "text": "പരിധിയില്ലാതെ", "isCorrect": false },
      { "text": "10", "isCorrect": false }
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
