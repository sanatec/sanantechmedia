document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "നിർദ്ദേശങ്ങൾ മനസ്സിലാക്കാൻ കമ്പ്യൂട്ടറുകൾ ഉപയോഗിക്കുന്ന ഭാഷ ഏതാണ്?",
    "options": [
      { "text": "Python", "isCorrect": false },
      { "text": "Java", "isCorrect": false },
      { "text": "Binary (ബൈനറി)", "isCorrect": true },
      { "text": "English", "isCorrect": false }
    ]
  },
  {
    "question": "ബൈനറി ഭാഷയിൽ, ON, OFF അവസ്ഥകളെ പ്രതിനിധീകരിക്കുന്നത്:",
    "options": [
      { "text": "A-യും B-യും", "isCorrect": false },
      { "text": "True-യും False-ഉം മാത്രം", "isCorrect": false },
      { "text": "1-ഉം 0-ഉം", "isCorrect": true },
      { "text": "Yes-ഉം No-ഉം", "isCorrect": false }
    ]
  },
  {
    "question": "താഴെ പറയുന്നവയിൽ ഏതാണ് ഒരു ഹൈ-ലെവൽ ഭാഷ?",
    "options": [
      { "text": "Binary", "isCorrect": false },
      { "text": "Machine Code", "isCorrect": false },
      { "text": "Python", "isCorrect": true },
      { "text": "ON/OFF", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു കംപൈലറിൻ്റെ (compiler) ധർമ്മം എന്താണ്?",
    "options": [
      { "text": "കോഡ് വരിവരിയായി എക്സിക്യൂട്ട് ചെയ്യുന്നു", "isCorrect": false },
      { "text": "കോഡ് നേരിട്ട് ഹാർഡ്‌വെയറിലേക്ക് വിവർത്തനം ചെയ്യുന്നു", "isCorrect": false },
      { "text": "ഹൈ-ലെവൽ ഭാഷയെ ബൈനറിയായി മാറ്റുകയും ഒരു ഫയലായി സേവ് ചെയ്യുകയും ചെയ്യുന്നു", "isCorrect": true },
      { "text": "ബൈനറിയെ ഹൈ-ലെവൽ ഭാഷയിലേക്ക് മാറ്റുന്നു", "isCorrect": false }
    ]
  },
  {
    "question": "താഴെ പറയുന്നവയിൽ ഏതാണ് ഒരു ഇൻ്റർപ്രെട്ടഡ് ഭാഷ?",
    "options": [
      { "text": "C", "isCorrect": false },
      { "text": "Java", "isCorrect": false },
      { "text": "C++", "isCorrect": false },
      { "text": "Python", "isCorrect": true }
    ]
  },
  {
    "question": "എന്താണ് ഒരു അൽഗോരിതം (Algorithm)?",
    "options": [
      { "text": "ഒരു പ്രോഗ്രാമിംഗ് ഭാഷ", "isCorrect": false },
      { "text": "ഹാർഡ്‌വെയറുകളുടെ ഒരു ലിസ്റ്റ്", "isCorrect": false },
      { "text": "ഒരു പ്രശ്നം പരിഹരിക്കുന്നതിനുള്ള ഘട്ടം ഘട്ടമായുള്ള നടപടിക്രമം", "isCorrect": true },
      { "text": "ഒരു സിൻ്റാക്സ് നിയമം", "isCorrect": false }
    ]
  },
  {
    "question": "Python ഫയലുകൾക്ക് ഏത് എക്സ്റ്റൻഷനാണ് ഉണ്ടായിരിക്കേണ്ടത്?",
    "options": [
      { "text": ".java", "isCorrect": false },
      { "text": ".exe", "isCorrect": false },
      { "text": ".txt", "isCorrect": false },
      { "text": ".py", "isCorrect": true }
    ]
  },
  {
    "question": "Python-ൽ, ഔട്ട്പുട്ട് (output) പ്രദർശിപ്പിക്കാൻ ഉപയോഗിക്കുന്ന ഫംഗ്ഷൻ ഏതാണ്?",
    "options": [
      { "text": "write()", "isCorrect": false },
      { "text": "input()", "isCorrect": false },
      { "text": "display()", "isCorrect": false },
      { "text": "print()", "isCorrect": true }
    ]
  },
  {
    "question": "ഗുണനത്തിനായി (multiplication) ഉപയോഗിക്കുന്ന Python ഓപ്പറേറ്റർ ഏതാണ്?",
    "options": [
      { "text": "x", "isCorrect": false },
      { "text": "**", "isCorrect": false },
      { "text": "*", "isCorrect": true },
      { "text": "mul", "isCorrect": false }
    ]
  },
  {
    "question": "Python-ലെ int() ഫംഗ്ഷൻ എന്താണ് ചെയ്യുന്നത്?",
    "options": [
      { "text": "നിലവിലെ വർഷം നൽകുന്നു", "isCorrect": false },
      { "text": "ടെക്സ്റ്റ് ഇൻപുട്ടിനെ ഒരു പൂർണ്ണ സംഖ്യയായി (integer) മാറ്റുന്നു", "isCorrect": true },
      { "text": "ഒരു ലൂപ്പ് ആരംഭിക്കുന്നു", "isCorrect": false },
      { "text": "മുകളിൽ പറഞ്ഞവയൊന്നുമല്ല", "isCorrect": false }
    ]
  },
  {
    "question": "Python പ്രോഗ്രാമിംഗ് ഭാഷ വികസിപ്പിച്ചത് ആരാണ്?",
    "options": [
      { "text": "Dennis Ritchie", "isCorrect": false },
      { "text": "Guido van Rossum", "isCorrect": true },
      { "text": "James Gosling", "isCorrect": false },
      { "text": "Charles Babbage", "isCorrect": false }
    ]
  },
  {
    "question": "Python വികസിപ്പിച്ചത് ഏത് വർഷമാണ്?",
    "options": [
      { "text": "1980", "isCorrect": false },
      { "text": "1995", "isCorrect": false },
      { "text": "1990", "isCorrect": true },
      { "text": "2000", "isCorrect": false }
    ]
  },
  {
    "question": "Python എന്നത്:",
    "options": [
      { "text": "Closed-source", "isCorrect": false },
      { "text": "Machine-level language", "isCorrect": false },
      { "text": "Open-source", "isCorrect": true },
      { "text": "Binary-only", "isCorrect": false }
    ]
  },
  {
    "question": "Python-ൽ input()-ൻ്റെ ഉപയോഗം എന്താണ്?",
    "options": [
      { "text": "ഔട്ട്പുട്ട് പ്രദർശിപ്പിക്കുന്നു", "isCorrect": false },
      { "text": "പ്രോഗ്രാം അവസാനിപ്പിക്കുന്നു", "isCorrect": false },
      { "text": "ഉപയോക്താവിൽ നിന്ന് ഇൻപുട്ട് എടുക്കുന്നു", "isCorrect": true },
      { "text": "മൂല്യങ്ങൾ കണക്കാക്കുന്നു", "isCorrect": false }
    ]
  },
  {
    "question": "Python-ൽ ഒരു വേരിയബിൾ (variable) എന്താണ്?",
    "options": [
      { "text": "ഒരു നിശ്ചിത സംഖ്യ", "isCorrect": false },
      { "text": "ഡാറ്റ സംഭരിക്കാനുള്ള ഒരിടം", "isCorrect": true },
      { "text": "ഒരു സ്ഥിരാങ്കം (constant)", "isCorrect": false },
      { "text": "ഒരു കീവേഡ്", "isCorrect": false }
    ]
  },
  {
    "question": "Python-ൽ ഒരു മൂല്യം നൽകാൻ (assign) ഉപയോഗിക്കുന്ന ചിഹ്നം ഏതാണ്?",
    "options": [
      { "text": "==", "isCorrect": false },
      { "text": ":=", "isCorrect": false },
      { "text": "=", "isCorrect": true },
      { "text": "=>", "isCorrect": false }
    ]
  },
  {
    "question": "ഇവയിൽ ഏതാണ് സാധുവായ വേരിയബിൾ നാമം?",
    "options": [
      { "text": "1value", "isCorrect": false },
      { "text": "value@", "isCorrect": false },
      { "text": "_value", "isCorrect": true },
      { "text": "@value", "isCorrect": false }
    ]
  },
  {
    "question": "Python-ൽ നമ്മൾ നിർവചിക്കേണ്ട ആവശ്യമില്ലാത്തത്:",
    "options": [
      { "text": "വേരിയബിൾ നാമങ്ങൾ", "isCorrect": false },
      { "text": "ഡാറ്റാ ടൈപ്പുകൾ", "isCorrect": true },
      { "text": "ഇൻപുട്ട് മൂല്യങ്ങൾ", "isCorrect": false },
      { "text": "കീവേഡുകൾ", "isCorrect": false }
    ]
  },
  {
    "question": "input() ഫംഗ്ഷനിൽ നിന്നുള്ള ഇൻപുട്ടിൻ്റെ ഡാറ്റാടൈപ്പ് എന്താണ്?",
    "options": [
      { "text": "Integer", "isCorrect": false },
      { "text": "String", "isCorrect": true },
      { "text": "Float", "isCorrect": false },
      { "text": "Boolean", "isCorrect": false }
    ]
  },
  {
    "question": "int(\"2025\") എന്ത് നൽകും?",
    "options": [
      { "text": "String \"2025\"", "isCorrect": false },
      { "text": "Boolean", "isCorrect": false },
      { "text": "Integer 2025", "isCorrect": true },
      { "text": "Error", "isCorrect": false }
    ]
  },
  {
    "question": "print(5 % 2) എന്ത് പ്രദർശിപ്പിക്കും?",
    "options": [
      { "text": "2", "isCorrect": false },
      { "text": "1", "isCorrect": true },
      { "text": "0", "isCorrect": false },
      { "text": "2.5", "isCorrect": false }
    ]
  },
  {
    "question": "a = 100; a = a + 25; print(a) എന്നതിൻ്റെ ഔട്ട്പുട്ട് എന്താണ്?",
    "options": [
      { "text": "100", "isCorrect": false },
      { "text": "25", "isCorrect": false },
      { "text": "125", "isCorrect": true },
      { "text": "Error", "isCorrect": false }
    ]
  },
  {
    "question": "Python-ൽ താരതമ്യം (comparison) ചെയ്യാൻ ഉപയോഗിക്കുന്ന ഓപ്പറേറ്റർ ഏതാണ്?",
    "options": [
      { "text": ":=", "isCorrect": false },
      { "text": "=", "isCorrect": false },
      { "text": "==", "isCorrect": true },
      { "text": "=>", "isCorrect": false }
    ]
  },
  {
    "question": "5 == 5 എന്നതിൻ്റെ ഔട്ട്പുട്ട് എന്താണ്?",
    "options": [
      { "text": "0", "isCorrect": false },
      { "text": "True", "isCorrect": true },
      { "text": "5", "isCorrect": false },
      { "text": "Error", "isCorrect": false }
    ]
  },
  {
    "question": "if age >= 14: എന്ന ഈ condition എന്തു ചെയ്യും?",
    "options": [
      { "text": "എപ്പോഴും ശരിയായിരിക്കും", "isCorrect": false },
      { "text": "age 14-ഓ അതിൽ കൂടുതലോ ആണോ എന്ന് പരിശോധിക്കുന്നു", "isCorrect": true },
      { "text": "age-ന് 14 എന്ന മൂല്യം നൽകുന്നു", "isCorrect": false },
      { "text": "ഒന്നുമില്ല", "isCorrect": false }
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
