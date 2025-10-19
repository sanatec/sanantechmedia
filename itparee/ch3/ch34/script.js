document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "turtle ഉപയോഗിച്ച് ഒരു സമചതുരം (square) വരയ്ക്കുന്ന കമാൻഡ് ഏതാണ്?",
    "options": [
      { "text": "4 forward() + 4 right(90)", "isCorrect": true },
      { "text": "square()", "isCorrect": false },
      { "text": "box(4)", "isCorrect": false },
      { "text": "draw.square()", "isCorrect": false }
    ]
  },
  {
    "question": "while loop ഉപയോഗിച്ച് ഒരു ബ്ലോക്ക് 5 തവണ എങ്ങനെ ആവർത്തിക്കാം?",
    "options": [
      { "text": "while i < 5:", "isCorrect": true },
      { "text": "for i in 5:", "isCorrect": false },
      { "text": "while i == 5:", "isCorrect": false },
      { "text": "repeat(5)", "isCorrect": false }
    ]
  },
  {
    "question": "ഇവയിൽ ഏതാണ് ഒരു താരതമ്യ ഓപ്പറേറ്റർ (comparison operator) അല്ലാത്തത്?",
    "options": [
      { "text": ">=", "isCorrect": false },
      { "text": "<=", "isCorrect": false },
      { "text": "!=", "isCorrect": false },
      { "text": ":=", "isCorrect": true }
    ]
  },
  {
    "question": "range(10)-ലെ ഡിഫോൾട്ട് ആരംഭ പോയിന്റ് (starting point) ഏതാണ്?",
    "options": [
      { "text": "1", "isCorrect": false },
      { "text": "10", "isCorrect": false },
      { "text": "0", "isCorrect": true },
      { "text": "നിർവചിച്ചിട്ടില്ല", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു പ്രോഗ്രാമിൽ വിസ്തീർണ്ണം (area) കണക്കാക്കാൻ ഉപയോഗിക്കുന്ന ഫംഗ്ഷൻ ഏതാണ്?",
    "options": [
      { "text": "area()", "isCorrect": false },
      { "text": "calculate_area()", "isCorrect": false },
      { "text": "വേരിയബിളുകൾ ഉപയോഗിച്ചുള്ള ഒരു ഫോർമുല", "isCorrect": true },
      { "text": "math.area", "isCorrect": false }
    ]
  },
  {
    "question": "True and False-ൻ്റെ ഫലം എന്താണ്?",
    "options": [
      { "text": "True", "isCorrect": false },
      { "text": "False", "isCorrect": true },
      { "text": "Error", "isCorrect": false },
      { "text": "None", "isCorrect": false }
    ]
  },
  {
    "question": "താഴെ പറയുന്നവയിൽ ഏതാണ് സാധുവായ ഒരു Python ഡാറ്റാടൈപ്പ് അല്ലാത്തത്?",
    "options": [
      { "text": "Integer", "isCorrect": false },
      { "text": "Float", "isCorrect": false },
      { "text": "Letter", "isCorrect": true },
      { "text": "String", "isCorrect": false }
    ]
  },
  {
    "question": "print(\"age\" + \"14\") എന്ത് പ്രദർശിപ്പിക്കും?",
    "options": [
      { "text": "28", "isCorrect": false },
      { "text": "age14", "isCorrect": true },
      { "text": "Error", "isCorrect": false },
      { "text": "age + 14", "isCorrect": false }
    ]
  },
  {
    "question": "strings-നൊപ്പം + ഓപ്പറേറ്റർ എന്ത് ചെയ്യുന്നു?",
    "options": [
      { "text": "സംഖ്യാപരമായി കൂട്ടിച്ചേർക്കുന്നു", "isCorrect": false },
      { "text": "ബൂലിയൻ കൂട്ടിച്ചേർക്കുന്നു", "isCorrect": false },
      { "text": "യോജിപ്പിക്കുന്നു (Concatenates)", "isCorrect": true },
      { "text": "ഗുണിക്കുന്നു", "isCorrect": false }
    ]
  },
  {
    "question": "താഴെ പറയുന്നവയിൽ ഏതാണ് ഒരു അനന്തമായ ലൂപ്പ് (infinite loop) സൃഷ്ടിക്കുന്നത്?",
    "options": [
      { "text": "while True:", "isCorrect": false },
      { "text": "for i in range(5):", "isCorrect": false },
      { "text": "while i < 10: with no increment", "isCorrect": false },
      { "text": "A & C", "isCorrect": true }
    ]
  },
  {
    "question": "ഫ്ലോചാർട്ട് (flowchart) എന്തിനാണ് ഉപയോഗിക്കുന്നത്?",
    "options": [
      { "text": "ആർട്ട് വരയ്ക്കാൻ", "isCorrect": false },
      { "text": "സിൻ്റാക്സ് എഴുതാൻ", "isCorrect": false },
      { "text": "ലോജിക് ദൃശ്യപരമായി പ്രതിനിധീകരിക്കാൻ", "isCorrect": true },
      { "text": "മെമ്മറി മാനേജ്മെൻ്റ്", "isCorrect": false }
    ]
  },
  {
    "question": "പ്രോഗ്രാം ലോജിക്കിൽ Kiddies കാറ്റഗറി എങ്ങനെയാണ് നിർണ്ണയിക്കുന്നത്?",
    "options": [
      { "text": "age >= 14", "isCorrect": false },
      { "text": "age > 12", "isCorrect": false },
      { "text": "age < 12", "isCorrect": true },
      { "text": "age >= 16", "isCorrect": false }
    ]
  },
  {
    "question": "from turtle import * എന്തിനാണ് ഉപയോഗിക്കുന്നത്?",
    "options": [
      { "text": "ചിത്രങ്ങൾ വരയ്ക്കാൻ", "isCorrect": false },
      { "text": "എല്ലാ turtle ഫംഗ്ഷനുകളും ഇംപോർട്ട് ചെയ്യാൻ", "isCorrect": true },
      { "text": "forward മാത്രം ഇംപോർട്ട് ചെയ്യാൻ", "isCorrect": false },
      { "text": "ഒന്നിനുമല്ല", "isCorrect": false }
    ]
  },
  {
    "question": "പ്രവർത്തനത്തിന് മുമ്പ് വ്യവസ്ഥ (condition) പരിശോധിക്കുന്ന ലൂപ്പ് തരം ഏതാണ്?",
    "options": [
      { "text": "for", "isCorrect": false },
      { "text": "while", "isCorrect": true },
      { "text": "do-while", "isCorrect": false },
      { "text": "until", "isCorrect": false }
    ]
  },
  {
    "question": "if ബ്ലോക്കിലെ വ്യവസ്ഥ False ആകുമ്പോൾ എന്ത് സംഭവിക്കുന്നു?",
    "options": [
      { "text": "കോഡ് പ്രവർത്തിപ്പിക്കുന്നു", "isCorrect": false },
      { "text": "else ഭാഗത്തേക്ക് പോകുന്നു", "isCorrect": true },
      { "text": "ഫലം പ്രിൻ്റ് ചെയ്യുന്നു", "isCorrect": false },
      { "text": "ക്രാഷ് ആകുന്നു", "isCorrect": false }
    ]
  },
  {
    "question": "Python list-കളെക്കുറിച്ച് ശരിയായ പ്രസ്താവന ഏതാണ്?",
    "options": [
      { "text": "list-കളിൽ strings മാത്രമേ ഉണ്ടാകൂ", "isCorrect": false },
      { "text": "list-കളിലെ ഡാറ്റാടൈപ്പ് ഒരേപോലെയായിരിക്കണം", "isCorrect": false },
      { "text": "list-കളിൽ ഒന്നിലധികം ഡാറ്റാടൈപ്പുകൾ സംഭരിക്കാൻ കഴിയും", "isCorrect": true },
      { "text": "list-കൾ പരിഷ്കരിക്കാൻ കഴിയില്ല", "isCorrect": false }
    ]
  },
  {
    "question": "താഴെക്കൊടുത്ത കോഡ് എന്ത് പ്രിൻ്റ് ചെയ്യും? colors = [\"red\", \"blue\", \"green\"]; print(colors[1])",
    "options": [
      { "text": "red", "isCorrect": false },
      { "text": "blue", "isCorrect": true },
      { "text": "green", "isCorrect": false },
      { "text": "1", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു for ലൂപ്പിൽ range(1, 10, 2) എന്നതിൻ്റെ ഉദ്ദേശ്യം എന്താണ്?",
    "options": [
      { "text": "10 മുതൽ 1 വരെ താഴോട്ട് എണ്ണാൻ", "isCorrect": false },
      { "text": "1 വെച്ച് ആവർത്തിക്കാൻ", "isCorrect": false },
      { "text": "1 മുതൽ 9 വരെ ഒറ്റ സംഖ്യകൾ സൃഷ്ടിക്കാൻ", "isCorrect": true },
      { "text": "ഇരട്ട സംഖ്യകൾ സൃഷ്ടിക്കാൻ", "isCorrect": false }
    ]
  },
  {
    "question": "ഏത് സാഹചര്യത്തിലാണ് നിങ്ങൾ ഒരു if...elif...else സ്റ്റേറ്റ്മെൻ്റ് ഉപയോഗിക്കുക?",
    "options": [
      { "text": "കോഡ് ആവർത്തിച്ച് പ്രവർത്തിപ്പിക്കാൻ", "isCorrect": false },
      { "text": "ഒന്നിലധികം വ്യവസ്ഥകൾ പരിശോധിക്കാൻ", "isCorrect": true },
      { "text": "മൂല്യങ്ങൾ സംഭരിക്കാൻ", "isCorrect": false },
      { "text": "ഇൻപുട്ട് എടുക്കാൻ", "isCorrect": false }
    ]
  },
  {
    "question": "താഴെക്കൊടുത്ത കോഡ് എന്ത് ചെയ്യുന്നു? if age >= 16: print(\"Senior\")",
    "options": [
      { "text": "age 16-ന് തുല്യമാണോ എന്ന് മാത്രം പരിശോധിക്കുന്നു", "isCorrect": false },
      { "text": "age 16 ആണെങ്കിൽ മാത്രം \"Senior\" പ്രിൻ്റ് ചെയ്യുന്നു", "isCorrect": false },
      { "text": "age 16-ഓ അതിൽ കൂടുതലോ ആണെങ്കിൽ \"Senior\" പ്രിൻ്റ് ചെയ്യുന്നു", "isCorrect": true },
      { "text": "എപ്പോഴും \"Senior\" പ്രിൻ്റ് ചെയ്യുന്നു", "isCorrect": false }
    ]
  },
  {
    "question": "for i in range(5): print(i) എന്ത് പ്രിൻ്റ് ചെയ്യും?",
    "options": [
      { "text": "1 മുതൽ 5 വരെ", "isCorrect": false },
      { "text": "0 മുതൽ 5 വരെ", "isCorrect": false },
      { "text": "0 മുതൽ 4 വരെ", "isCorrect": true },
      { "text": "1 മുതൽ 4 വരെ", "isCorrect": false }
    ]
  },
  {
    "question": "name = \"Ali\"; print(\"Hello\", name) എന്നതിൻ്റെ ഔട്ട്പുട്ട് എന്താണ്?",
    "options": [
      { "text": "HelloAli", "isCorrect": false },
      { "text": "Hello name", "isCorrect": false },
      { "text": "Hello Ali", "isCorrect": true },
      { "text": "Ali Hello", "isCorrect": false }
    ]
  },
  {
    "question": "ഉപയോക്താവിൻ്റെ ഇൻപുട്ട് എടുക്കാൻ ഉപയോഗിക്കുന്ന Python ഫംഗ്ഷൻ ഏതാണ്?",
    "options": [
      { "text": "get()", "isCorrect": false },
      { "text": "print()", "isCorrect": false },
      { "text": "input()", "isCorrect": true },
      { "text": "read()", "isCorrect": false }
    ]
  },
  {
    "question": "തിയ്യതിക്കും സമയത്തിനുമായി (date and time) ഉപയോഗിക്കുന്ന Python മൊഡ്യൂൾ ഏതാണ്?",
    "options": [
      { "text": "turtle", "isCorrect": false },
      { "text": "math", "isCorrect": false },
      { "text": "os", "isCorrect": false },
      { "text": "datetime", "isCorrect": true }
    ]
  },
  {
    "question": "Python-നെക്കുറിച്ച് തെറ്റായ പ്രസ്താവന ഏതാണ്?",
    "options": [
      { "text": "ഇതൊരു ഓപ്പൺ സോഴ്‌സാണ്", "isCorrect": false },
      { "text": "ഇത് ഇൻഡൻ്റേഷൻ ഉപയോഗിക്കുന്നു", "isCorrect": false },
      { "text": "ഇത് ഒബ്ജക്റ്റ് ഓറിയൻ്റഡ് പ്രോഗ്രാമിംഗിനെ പിന്തുണയ്ക്കുന്നു", "isCorrect": false },
      { "text": "ഇതിൽ എല്ലാ വേരിയബിളുകൾക്കും ഡാറ്റാടൈപ്പുകൾ പ്രഖ്യാപിക്കണം", "isCorrect": true }
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
