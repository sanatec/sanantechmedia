document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "എന്താണ് ഒരു Python മൊഡ്യൂൾ?",
    "options": [
      { "text": "ഒരു ഫംഗ്ഷൻ", "isCorrect": false },
      { "text": "ഒരു കമാൻഡ്", "isCorrect": false },
      { "text": "ഫംഗ്ഷനുകൾ, വേരിയബിളുകൾ, ക്ലാസുകൾ എന്നിവയുള്ള ഒരു ഫയൽ", "isCorrect": true },
      { "text": "ഒരു വേരിയബിൾ", "isCorrect": false }
    ]
  },
  {
    "question": "ഗണിതശാസ്ത്രപരമായ ഫംഗ്ഷനുകൾക്ക് സഹായിക്കുന്ന മൊഡ്യൂൾ ഏതാണ്?",
    "options": [
      { "text": "os", "isCorrect": false },
      { "text": "math", "isCorrect": true },
      { "text": "turtle", "isCorrect": false },
      { "text": "graphics", "isCorrect": false }
    ]
  },
  {
    "question": "math മൊഡ്യൂളിലെ sqrt() എന്തിനാണ് ഉപയോഗിക്കുന്നത്?",
    "options": [
      { "text": "സ്ക്വയർ (വർഗ്ഗം)", "isCorrect": false },
      { "text": "സ്ക്വയർ റൂട്ട് (വർഗ്ഗമൂലം)", "isCorrect": true },
      { "text": "പവർ", "isCorrect": false },
      { "text": "ഗുണനം", "isCorrect": false }
    ]
  },
  {
    "question": "Python-ൽ ഒരു വരി എങ്ങനെ കമൻ്റ് ചെയ്യാം?",
    "options": [
      { "text": "// comment", "isCorrect": false },
      { "text": "", "isCorrect": false },
      { "text": "-- comment", "isCorrect": false },
      { "text": "# comment", "isCorrect": true }
    ]
  },
  {
    "question": "Python-ൽ ഇൻഡൻ്റേഷൻ്റെ (Indentation) ഉദ്ദേശ്യം എന്താണ്?",
    "options": [
      { "text": "വായനാക്ഷമത മെച്ചപ്പെടുത്താൻ", "isCorrect": false },
      { "text": "കോഡ് ബ്ലോക്കുകൾ അടയാളപ്പെടുത്താൻ", "isCorrect": false },
      { "text": "A-യും B-യും", "isCorrect": true },
      { "text": "ഒന്നുമില്ല", "isCorrect": false }
    ]
  },
  {
    "question": "Python-ൽ ഇൻഡൻ്റേഷൻ തെറ്റാണെങ്കിൽ എന്ത് സംഭവിക്കും?",
    "options": [
      { "text": "മുന്നറിയിപ്പ് (Warning)", "isCorrect": false },
      { "text": "പ്രോഗ്രാം അത് ഒഴിവാക്കുന്നു", "isCorrect": false },
      { "text": "SyntaxError", "isCorrect": true },
      { "text": "ഒന്നും സംഭവിക്കുന്നില്ല", "isCorrect": false }
    ]
  },
  {
    "question": "Python-ലെ elif-ൻ്റെ ധർമ്മം എന്താണ്?",
    "options": [
      { "text": "Else if", "isCorrect": true },
      { "text": "ലൂപ്പ്", "isCorrect": false },
      { "text": "ഇൻപുട്ട്", "isCorrect": false },
      { "text": "പ്രോഗ്രാം അവസാനിപ്പിക്കുക", "isCorrect": false }
    ]
  },
  {
    "question": "range(1, 20, 2) എന്ത് നൽകും?",
    "options": [
      { "text": "1 മുതൽ 20 വരെയുള്ള എല്ലാ സംഖ്യകളും", "isCorrect": false },
      { "text": "എല്ലാ ഇരട്ട സംഖ്യകളും", "isCorrect": false },
      { "text": "1 മുതൽ 19 വരെയുള്ള ഒറ്റ സംഖ്യകൾ", "isCorrect": true },
      { "text": "2-ൻ്റെ ഗുണിതങ്ങൾ", "isCorrect": false }
    ]
  },
  {
    "question": "print(\"Hello\", 5) എന്ത് പ്രദർശിപ്പിക്കും?",
    "options": [
      { "text": "Hello", "isCorrect": false },
      { "text": "5", "isCorrect": false },
      { "text": "Hello 5", "isCorrect": true },
      { "text": "പിശക്", "isCorrect": false }
    ]
  },
  {
    "question": "Python-ൽ == എന്തിനാണ് ഉപയോഗിക്കുന്നത്?",
    "options": [
      { "text": "മൂല്യം നൽകാൻ", "isCorrect": false },
      { "text": "മൂല്യങ്ങൾ താരതമ്യം ചെയ്യാൻ", "isCorrect": true },
      { "text": "കമൻ്റ് ചെയ്യാൻ", "isCorrect": false },
      { "text": "മൂല്യം ഇല്ലാതാക്കാൻ", "isCorrect": false }
    ]
  },
  {
    "question": "input()-ൻ്റെ ഡിഫോൾട്ട് ഡാറ്റാടൈപ്പ് എന്താണ്?",
    "options": [
      { "text": "Integer", "isCorrect": false },
      { "text": "Float", "isCorrect": false },
      { "text": "String", "isCorrect": true },
      { "text": "Boolean", "isCorrect": false }
    ]
  },
  {
    "question": "ഇവയിൽ ഏതാണ് Python-ലെ സാധുവായ ഒരു list?",
    "options": [
      { "text": "[\"a\", \"b\", \"c\"]", "isCorrect": true },
      { "text": "\"a\", \"b\", \"c\"", "isCorrect": false },
      { "text": "{a, b, c}", "isCorrect": false },
      { "text": "(a, b, c)", "isCorrect": false }
    ]
  },
  {
    "question": "ആവർത്തനങ്ങളുടെ എണ്ണം (number of iterations) അറിയാത്തപ്പോൾ അനുയോജ്യമായ ലൂപ്പ് ഏതാണ്?",
    "options": [
      { "text": "for", "isCorrect": false },
      { "text": "while", "isCorrect": true },
      { "text": "do-while", "isCorrect": false },
      { "text": "if", "isCorrect": false }
    ]
  },
  {
    "question": "range(10) എന്ത് നൽകും?",
    "options": [
      { "text": "1 മുതൽ 10 വരെ", "isCorrect": false },
      { "text": "0 മുതൽ 9 വരെ", "isCorrect": true },
      { "text": "10 മുതൽ 20 വരെ", "isCorrect": false },
      { "text": "0 മുതൽ 10 വരെ", "isCorrect": false }
    ]
  },
  {
    "question": "int(input()) എന്തിനാണ് ഉപയോഗിക്കുന്നത്?",
    "options": [
      { "text": "ഇൻപുട്ട് എടുക്കാൻ", "isCorrect": false },
      { "text": "ഇൻപുട്ടിനെ സ്ട്രിംഗിലേക്ക് മാറ്റാൻ", "isCorrect": false },
      { "text": "ഇൻപുട്ട് എടുക്കുകയും പൂർണ്ണ സംഖ്യയിലേക്ക് (integer) മാറ്റുകയും ചെയ്യാൻ", "isCorrect": true },
      { "text": "ഫ്ലോട്ടിലേക്ക് മാറ്റാൻ", "isCorrect": false }
    ]
  },
  {
    "question": "Python-ൽ മോഡുലസിനായി (modulus) ഉപയോഗിക്കുന്ന ചിഹ്നം ഏതാണ്?",
    "options": [
      { "text": "/", "isCorrect": false },
      { "text": "%", "isCorrect": true },
      { "text": "*", "isCorrect": false },
      { "text": "//", "isCorrect": false }
    ]
  },
  {
    "question": "print(10 // 3) എന്നതിൻ്റെ ഔട്ട്പുട്ട് എന്താണ്?",
    "options": [
      { "text": "3.33", "isCorrect": false },
      { "text": "3", "isCorrect": true },
      { "text": "4", "isCorrect": false },
      { "text": "പിശക്", "isCorrect": false }
    ]
  },
  {
    "question": "Python-ൽ ടെക്സ്റ്റ് പ്രിൻ്റ് ചെയ്യാൻ ഉപയോഗിക്കുന്ന ഫംഗ്ഷൻ ഏതാണ്?",
    "options": [
      { "text": "write()", "isCorrect": false },
      { "text": "display()", "isCorrect": false },
      { "text": "show()", "isCorrect": false },
      { "text": "print()", "isCorrect": true }
    ]
  },
  {
    "question": "not ഓപ്പറേറ്റർ എന്ത് ചെയ്യുന്നു?",
    "options": [
      { "text": "മൂല്യങ്ങൾ കൂട്ടുന്നു", "isCorrect": false },
      { "text": "വിപരീത ബൂലിയൻ മൂല്യം നൽകുന്നു", "isCorrect": true },
      { "text": "മൂല്യങ്ങൾ പരിശോധിക്കുന്നു", "isCorrect": false },
      { "text": "തെറ്റായ മൂല്യം നൽകുന്നു", "isCorrect": false }
    ]
  },
  {
    "question": "Python കേസ്-സെൻസിറ്റീവ് ആണ്. ശരിയോ തെറ്റോ?",
    "options": [
      { "text": "ശരി (True)", "isCorrect": true },
      { "text": "തെറ്റ് (False)", "isCorrect": false }
    ]
  },
  {
    "question": "IDE-യുടെ പൂർണ്ണ രൂപം എന്താണ്?",
    "options": [
      { "text": "Integrated Data Editor", "isCorrect": false },
      { "text": "Internal Development Editor", "isCorrect": false },
      { "text": "Integrated Development Environment", "isCorrect": true },
      { "text": "Integrated Device Environment", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു വൃത്തം വരയ്ക്കുന്നതിനുള്ള turtle കമാൻഡ് ഏതാണ്?",
    "options": [
      { "text": "circle()", "isCorrect": true },
      { "text": "drawCircle()", "isCorrect": false },
      { "text": "circle[]", "isCorrect": false },
      { "text": "loop.circle()", "isCorrect": false }
    ]
  },
  {
    "question": "എല്ലാ turtle ഗ്രാഫിക്സുകളും ചുവപ്പ് നിറത്തിൽ വരയ്ക്കുന്ന കമാൻഡ് ഏതാണ്?",
    "options": [
      { "text": "pen(\"red\")", "isCorrect": false },
      { "text": "color(\"red\")", "isCorrect": true },
      { "text": "penColor(\"red\")", "isCorrect": false },
      { "text": "fill(\"red\")", "isCorrect": false }
    ]
  },
  {
    "question": "count += 1 എന്നത് എന്തിൻ്റെ ചുരുക്കെഴുത്താണ്?",
    "options": [
      { "text": "count = 1", "isCorrect": false },
      { "text": "count = count - 1", "isCorrect": false },
      { "text": "count = count + 1", "isCorrect": true },
      { "text": "ഒന്നുമില്ല", "isCorrect": false }
    ]
  },
  {
    "question": "os മൊഡ്യൂൾ എന്തിനാണ് സഹായിക്കുന്നത്?",
    "options": [
      { "text": "ഗണിത പ്രവർത്തനങ്ങൾ", "isCorrect": false },
      { "text": "ഓപ്പറേറ്റിംഗ് സിസ്റ്റവുമായി ബന്ധപ്പെട്ട കാര്യങ്ങൾ (Operating system-related tasks)", "isCorrect": true },
      { "text": "ഇൻ്റർനെറ്റ് ബ്രൗസിംഗ്", "isCorrect": false },
      { "text": "വരയ്ക്കൽ", "isCorrect": false }
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
