document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "Python-ലെ ഇൻഡൻ്റേഷൻ (Indentation) എന്നാൽ എന്താണ്?",
    "options": [
      { "text": "സിൻ്റാക്സ് പിശക്", "isCorrect": false },
      { "text": "ഒരു വരിക്ക് മുമ്പുള്ള ടാബ് സ്പേസ്", "isCorrect": true },
      { "text": "പരിഗണിക്കാത്ത സ്പേസ്", "isCorrect": false },
      { "text": "ആവശ്യമില്ലാത്തത്", "isCorrect": false }
    ]
  },
  {
    "question": "Python-ലെ else:-ൻ്റെ ഉപയോഗം എന്താണ്?",
    "options": [
      { "text": "പ്രോഗ്രാം അവസാനിപ്പിക്കുന്നു", "isCorrect": false },
      { "text": "പരിശോധന നടത്തുന്നു", "isCorrect": false },
      { "text": "if condition തെറ്റാകുമ്പോൾ പ്രവർത്തിക്കുന്നു", "isCorrect": true },
      { "text": "ബ്ളോക്ക് ആവർത്തിക്കുന്നു", "isCorrect": false }
    ]
  },
  {
    "question": "ഇവയിൽ ഏതാണ് ഒരു കണ്ടീഷണൽ ഘടന (conditional structure)?",
    "options": [
      { "text": "loop", "isCorrect": false },
      { "text": "print()", "isCorrect": false },
      { "text": "if...else", "isCorrect": true },
      { "text": "import", "isCorrect": false }
    ]
  },
  {
    "question": "while count < 3: എന്ത് ചെയ്യുന്നു?",
    "options": [
      { "text": "അനന്തമായി ലൂപ്പ് ചെയ്യുന്നു", "isCorrect": false },
      { "text": "count അപ്‌ഡേറ്റ് ചെയ്യുകയാണെങ്കിൽ 3 തവണ പ്രവർത്തിക്കുന്നു", "isCorrect": true },
      { "text": "പ്രോഗ്രാം അവസാനിപ്പിക്കുന്നു", "isCorrect": false },
      { "text": "പിശക് നൽകുന്നു", "isCorrect": false }
    ]
  },
  {
    "question": "ലൂപ്പുകളിൽ ഉപയോഗിക്കുന്ന കീവേഡുകളിൽ (keywords) ഒന്ന് ഏതാണ്?",
    "options": [
      { "text": "stop", "isCorrect": false },
      { "text": "repeat", "isCorrect": false },
      { "text": "while", "isCorrect": true },
      { "text": "do", "isCorrect": false }
    ]
  },
  {
    "question": "ഈ ലൂപ്പ് എത്ര തവണ പ്രവർത്തിക്കും? count = 0; while count < 3: count += 1",
    "options": [
      { "text": "0", "isCorrect": false },
      { "text": "2", "isCorrect": false },
      { "text": "3", "isCorrect": true },
      { "text": "അനന്തമായി", "isCorrect": false }
    ]
  },
  {
    "question": "അറിയപ്പെടുന്ന എണ്ണം ആവർത്തനങ്ങൾക്കായി (repetitions) ഉപയോഗിക്കുന്ന ലൂപ്പ് ഏതാണ്?",
    "options": [
      { "text": "while", "isCorrect": false },
      { "text": "do-while", "isCorrect": false },
      { "text": "for", "isCorrect": true },
      { "text": "if", "isCorrect": false }
    ]
  },
  {
    "question": "range(1, 5) എന്ത് നൽകുന്നു?",
    "options": [
      { "text": "1, 2, 3, 4", "isCorrect": true },
      { "text": "1 മുതൽ 5 വരെ", "isCorrect": false },
      { "text": "0 മുതൽ 5 വരെ", "isCorrect": false },
      { "text": "പിശക്", "isCorrect": false }
    ]
  },
  {
    "question": "for i in range(1,6): print(i) എന്നതിൻ്റെ ഔട്ട്പുട്ട് എന്താണ്?",
    "options": [
      { "text": "1 2 3 4 5", "isCorrect": true },
      { "text": "0 1 2 3 4 5", "isCorrect": false },
      { "text": "1 to 6", "isCorrect": false },
      { "text": "2 to 6", "isCorrect": false }
    ]
  },
  {
    "question": "Python-ൽ 20 മുതൽ 40 വരെയുള്ള ഇരട്ട സംഖ്യകൾ (even numbers) എങ്ങനെ പ്രിൻ്റ് ചെയ്യാം?",
    "options": [
      { "text": "range(20,41,2)", "isCorrect": true },
      { "text": "range(20,40)", "isCorrect": false },
      { "text": "range(1,20,2)", "isCorrect": false },
      { "text": "range(2,20,20)", "isCorrect": false }
    ]
  },
  {
    "question": "Python-ലെ for ലൂപ്പിന് എന്ത് ആവശ്യമാണ്?",
    "options": [
      { "text": "ഒരു കൂട്ടം വ്യവസ്ഥകൾ", "isCorrect": false },
      { "text": "ഒരു ഫംഗ്ഷൻ", "isCorrect": false },
      { "text": "ഒരു റേഞ്ച് അല്ലെങ്കിൽ സീക്വൻസ്", "isCorrect": true },
      { "text": "ഒരു ക്ലാസ്", "isCorrect": false }
    ]
  },
  {
    "question": "ഗ്രാഫിക്സിനായി ഉപയോഗിക്കുന്ന Python മൊഡ്യൂൾ ഏതാണ്?",
    "options": [
      { "text": "sys", "isCorrect": false },
      { "text": "os", "isCorrect": false },
      { "text": "turtle", "isCorrect": true },
      { "text": "cmd", "isCorrect": false }
    ]
  },
  {
    "question": "turtle-ൽ forward(100) എന്ത് ചെയ്യുന്നു?",
    "options": [
      { "text": "ടെക്സ്റ്റ് പ്രിൻ്റ് ചെയ്യുന്നു", "isCorrect": false },
      { "text": "100 യൂണിറ്റ് മുന്നോട്ട് നീങ്ങുന്നു", "isCorrect": true },
      { "text": "ഒരു വൃത്തം വരയ്ക്കുന്നു", "isCorrect": false },
      { "text": "ഇടത്തേക്ക് കറങ്ങുന്നു", "isCorrect": false }
    ]
  },
  {
    "question": "turtle-ൽ എങ്ങനെ വലത്തേക്ക് തിരിയാം?",
    "options": [
      { "text": "rotate(90)", "isCorrect": false },
      { "text": "right(90)", "isCorrect": true },
      { "text": "turn_right(90)", "isCorrect": false },
      { "text": "move(90)", "isCorrect": false }
    ]
  },
  {
    "question": "എല്ലാ turtle ഫംഗ്ഷനുകളും ഇംപോർട്ട് ചെയ്യാൻ ഉപയോഗിക്കുന്നത്:",
    "options": [
      { "text": "import turtle.all", "isCorrect": false },
      { "text": "import * from turtle", "isCorrect": false },
      { "text": "from turtle import *", "isCorrect": true },
      { "text": "include turtle", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു മൊഡ്യൂൾ ഇംപോർട്ട് ചെയ്യാൻ ഉപയോഗിക്കുന്ന Python കീവേഡ് ഏതാണ്?",
    "options": [
      { "text": "include", "isCorrect": false },
      { "text": "import", "isCorrect": true },
      { "text": "using", "isCorrect": false },
      { "text": "use", "isCorrect": false }
    ]
  },
  {
    "question": "turtle graphics-ൽ color(\"red\") എന്ത് ചെയ്യുന്നു?",
    "options": [
      { "text": "പശ്ചാത്തലം ചുവപ്പാക്കുന്നു", "isCorrect": false },
      { "text": "ചുവപ്പ് നിറം നിറയ്ക്കുന്നു", "isCorrect": false },
      { "text": "പെൻ കളർ ചുവപ്പാക്കുന്നു", "isCorrect": true },
      { "text": "\"red\" എന്ന് പ്രിൻ്റ് ചെയ്യുന്നു", "isCorrect": false }
    ]
  },
  {
    "question": "turtle-ൽ circle(100) എന്ത് ചെയ്യുന്നു?",
    "options": [
      { "text": "100 റേഡിയസുള്ള ഒരു വൃത്തം വരയ്ക്കുന്നു", "isCorrect": true },
      { "text": "turtle-നെ 100 ഡിഗ്രി കറക്കുന്നു", "isCorrect": false },
      { "text": "turtle-നെ 100 യൂണിറ്റ് നീക്കുന്നു", "isCorrect": false },
      { "text": "പെൻ്റിൻ്റെ വീതി ക്രമീകരിക്കുന്നു", "isCorrect": false }
    ]
  },
  {
    "question": "turtle graphics ഉപയോഗിച്ച് ഒരു ചതുരം (rectangle) വരയ്ക്കുന്ന കമാൻഡ് ഏതാണ്?",
    "options": [
      { "text": "4 forward, 4 turn കമാൻഡുകൾ", "isCorrect": true },
      { "text": "rectangle(4)", "isCorrect": false },
      { "text": "draw_rectangle()", "isCorrect": false },
      { "text": "draw.square()", "isCorrect": false }
    ]
  },
  {
    "question": "Python-ലെ list-ൻ്റെ ഉദ്ദേശ്യം എന്താണ്?",
    "options": [
      { "text": "ഒന്നിലധികം ഡാറ്റാ ഇനങ്ങൾ സംഭരിക്കുന്നു", "isCorrect": true },
      { "text": "കണക്കുകൂട്ടലുകൾ നടത്തുന്നു", "isCorrect": false },
      { "text": "രൂപങ്ങൾ വരയ്ക്കുന്നു", "isCorrect": false },
      { "text": "ലൂപ്പുകൾ സൃഷ്ടിക്കുന്നു", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു list സൃഷ്ടിക്കുന്നതിനുള്ള ശരിയായ സിൻ്റാക്സ് (syntax) ഏതാണ്?",
    "options": [
      { "text": "list = (1,2,3)", "isCorrect": false },
      { "text": "list = {1,2,3}", "isCorrect": false },
      { "text": "list = [1,2,3]", "isCorrect": true },
      { "text": "list = <1,2,3>", "isCorrect": false }
    ]
  },
  {
    "question": "for clr in colors: എന്ന ലൂപ്പ് എന്ത് ചെയ്യുന്നു?",
    "options": [
      { "text": "ഒരു string-ലൂടെ ലൂപ്പ് ചെയ്യുന്നു", "isCorrect": false },
      { "text": "ഒരു list-ലൂടെ ലൂപ്പ് ചെയ്യുന്നു", "isCorrect": true },
      { "text": "പൂർണ്ണ സംഖ്യകളിലൂടെ ലൂപ്പ് ചെയ്യുന്നു", "isCorrect": false },
      { "text": "പിശക്", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു list-ലെ ഇനങ്ങളുടെ ഡാറ്റാടൈപ്പ് എന്താണ്?",
    "options": [
      { "text": "strings മാത്രം", "isCorrect": false },
      { "text": "integers മാത്രം", "isCorrect": false },
      { "text": "ഏത് ഡാറ്റാടൈപ്പും", "isCorrect": true },
      { "text": "Boolean മാത്രം", "isCorrect": false }
    ]
  },
  {
    "question": "Python-ലെ IDLE എന്നാൽ എന്താണ്?",
    "options": [
      { "text": "ഒരു ഇമേജ് എഡിറ്റർ", "isCorrect": false },
      { "text": "Python-നായുള്ള ഒരു IDE", "isCorrect": true },
      { "text": "ഒരു ഡീബഗ്ഗർ ടൂൾ", "isCorrect": false },
      { "text": "ഒരു ഗെയിം", "isCorrect": false }
    ]
  },
  {
    "question": "IDLE-ൽ ഒരു പ്രോഗ്രാം പ്രവർത്തിപ്പിക്കാൻ (run) ഉപയോഗിക്കുന്ന മെനു ഏതാണ്?",
    "options": [
      { "text": "File", "isCorrect": false },
      { "text": "Tools", "isCorrect": false },
      { "text": "Run", "isCorrect": true },
      { "text": "Debug", "isCorrect": false }
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
