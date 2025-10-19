document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "എന്താണ് സൈബർസ്പേസ് (Cyberspace)?",
    "options": [
      { "text": "ഒരു വീഡിയോ ഗെയിം", "isCorrect": false },
      { "text": "ഒരു ഭൗതിക ഇടം", "isCorrect": false },
      { "text": "ഒരു സാങ്കൽപ്പിക ഡിജിറ്റൽ മണ്ഡലം", "isCorrect": true },
      { "text": "ഒരു സ്പേസ് റോക്കറ്റ്", "isCorrect": false }
    ]
  },
  {
    "question": "താഴെ പറയുന്നവയിൽ ഏതാണ് സൈബർസ്‌പേസിലേക്കുള്ള ഒരു കവാടം അല്ലാത്തത്?",
    "options": [
      { "text": "മൊബൈൽ ഫോൺ", "isCorrect": false },
      { "text": "സ്മാർട്ട് വാച്ച്", "isCorrect": false },
      { "text": "ചോക്ക്ബോർഡ്", "isCorrect": true },
      { "text": "പ്രിൻ്റർ", "isCorrect": false }
    ]
  },
  {
    "question": "ഇൻ്റർനെറ്റ് ഓഫ് തിംഗ്സ് (IoT) എന്നാൽ:",
    "options": [
      { "text": "ഒരു തരം കമ്പ്യൂട്ടർ", "isCorrect": false },
      { "text": "ഒരു വെർച്വൽ ലോകം", "isCorrect": false },
      { "text": "ഇൻ്റർനെറ്റുമായി ബന്ധിപ്പിച്ച ഭൗതിക വസ്തുക്കളുടെ ഒരു ശൃംഖല", "isCorrect": true },
      { "text": "ഒരു പുതിയ ഗെയിം", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു E-POS ഉപകരണം എന്ത് ചെയ്യുന്നു?",
    "options": [
      { "text": "കാലാവസ്ഥ ട്രാക്ക് ചെയ്യുന്നു", "isCorrect": false },
      { "text": "ഉപഗ്രഹങ്ങളെ ബന്ധിപ്പിക്കുന്നു", "isCorrect": false },
      { "text": "വിറ്റ സാധനങ്ങൾ രേഖപ്പെടുത്തുന്നു", "isCorrect": true },
      { "text": "സുഹൃത്തുക്കൾക്ക് പണം കൈമാറ്റം ചെയ്യുന്നു", "isCorrect": false }
    ]
  },
  {
    "question": "താഴെ പറയുന്നവയിൽ ഏതാണ് സൈബർ ഇൻഫ്രാസ്ട്രക്ചറിൻ്റെ ഭാഗം?",
    "options": [
      { "text": "പുസ്തകങ്ങൾ", "isCorrect": false },
      { "text": "ഇൻ്റർനെറ്റ്, ഡാറ്റാബേസുകൾ, പ്രോട്ടോക്കോളുകൾ", "isCorrect": true },
      { "text": "പേപ്പർ", "isCorrect": false },
      { "text": "പെൻ ഡ്രൈവുകൾ മാത്രം", "isCorrect": false }
    ]
  },
  {
    "question": "എന്താണ് മെറ്റാവേർസ് (Metaverse)?",
    "options": [
      { "text": "ഒരു സോഷ്യൽ നെറ്റ്‌വർക്ക്", "isCorrect": false },
      { "text": "AR, VR, AI, ബ്ലോക്ക്ചെയിൻ എന്നിവ സംയോജിപ്പിക്കുന്ന ഒരു വെർച്വൽ ലോകം", "isCorrect": true },
      { "text": "ഒരു തിരയൽ എഞ്ചിൻ", "isCorrect": false },
      { "text": "ഒരു ഓൺലൈൻ ഷോപ്പിംഗ് സൈറ്റ്", "isCorrect": false }
    ]
  },
  {
    "question": "മെറ്റാവേഴ്സിലെ അവതാരങ്ങൾ (Avatars) എന്തിനെ പ്രതിനിധീകരിക്കുന്നു?",
    "options": [
      { "text": "വളർത്തു മൃഗങ്ങൾ", "isCorrect": false },
      { "text": "മറ്റ് കളിക്കാർ", "isCorrect": false },
      { "text": "ഉപയോക്താവിനെ", "isCorrect": true },
      { "text": "റോബോട്ടുകൾ", "isCorrect": false }
    ]
  },
  {
    "question": "ഹാക്കിംഗ് എന്നത്:",
    "options": [
      { "text": "വെബ്സൈറ്റുകൾ ഉണ്ടാക്കൽ", "isCorrect": false },
      { "text": "കമ്പ്യൂട്ടർ സിസ്റ്റങ്ങളിലേക്കുള്ള അനധികൃത പ്രവേശനം", "isCorrect": true },
      { "text": "പുതിയ ഹാർഡ്‌വെയർ വാങ്ങുന്നത്", "isCorrect": false },
      { "text": "ആപ്പുകൾ ഡൗൺലോഡ് ചെയ്യുന്നത്", "isCorrect": false }
    ]
  },
  {
    "question": "ധാർമ്മിക ഹാക്കിംഗ് (Ethical hacking) ചെയ്യുന്നത്:",
    "options": [
      { "text": "അനുമതിയില്ലാതെ", "isCorrect": false },
      { "text": "സിസ്റ്റങ്ങൾക്ക് കേടുപാടുകൾ വരുത്താൻ", "isCorrect": false },
      { "text": "അനുമതിയോടെ സിസ്റ്റം സുരക്ഷ മെച്ചപ്പെടുത്താൻ", "isCorrect": true },
      { "text": "വിനോദത്തിന് വേണ്ടി മാത്രം", "isCorrect": false }
    ]
  },
  {
    "question": "എന്താണ് ഒരു സ്പോയിലർ (Spoiler)?",
    "options": [
      { "text": "ഒരു തരം സോഫ്റ്റ്‌വെയർ", "isCorrect": false },
      { "text": "പ്രധാന കഥാവിശദാംശങ്ങൾ മുൻകൂട്ടി വെളിപ്പെടുത്തുന്നത്", "isCorrect": true },
      { "text": "ഒരു വൈറസ്", "isCorrect": false },
      { "text": "ഒരു ഇൻ്റർനെറ്റ് ബഗ്", "isCorrect": false }
    ]
  },
  {
    "question": "എന്താണ് NFT?",
    "options": [
      { "text": "Non-Fiction Tool", "isCorrect": false },
      { "text": "Non-Fungible Token", "isCorrect": true },
      { "text": "Network File Tracker", "isCorrect": false },
      { "text": "ഇവയെല്ലാം", "isCorrect": false }
    ]
  },
  {
    "question": "താഴെ പറയുന്നവയിൽ ഏതാണ് ഒരു ഡിജിറ്റൽ ആസ്തി (digital asset) അല്ലാത്തത്?",
    "options": [
      { "text": "സോഫ്റ്റ്‌വെയർ", "isCorrect": false },
      { "text": "സ്കൂൾ കമ്പ്യൂട്ടർ ലാബ്", "isCorrect": true },
      { "text": "ഡിജിറ്റൽ ചിത്രം", "isCorrect": false },
      { "text": "ഒരു ബാങ്കിൽ നിന്നുള്ള റിവാർഡ് പോയിൻ്റുകൾ", "isCorrect": false }
    ]
  },
  {
    "question": "ക്രിപ്‌റ്റോകറൻസി എന്തിനെ ആശ്രയിക്കുന്നു?",
    "options": [
      { "text": "കൈകൊണ്ട് എഴുതിയ കോഡുകൾ", "isCorrect": false },
      { "text": "സെൻട്രൽ ബാങ്കുകൾ", "isCorrect": false },
      { "text": "ബ്ലോക്ക്ചെയിൻ സാങ്കേതികവിദ്യ", "isCorrect": true },
      { "text": "പോസ്റ്റ് ഓഫീസുകൾ", "isCorrect": false }
    ]
  },
  {
    "question": "ക്രിപ്‌റ്റോകറൻസിക്ക് ഒരു ഉദാഹരണം ഏതാണ്?",
    "options": [
      { "text": "Litecoin", "isCorrect": true },
      { "text": "Facebook", "isCorrect": false },
      { "text": "PDF", "isCorrect": false },
      { "text": "കീബോർഡ്", "isCorrect": false }
    ]
  },
  {
    "question": "എന്താണ് ബിഗ് ഡാറ്റ (Big Data)?",
    "options": [
      { "text": "കട്ടിയുള്ള പുസ്തകങ്ങൾ", "isCorrect": false },
      { "text": "വലിയ ഫയലുകൾ", "isCorrect": false },
      { "text": "വലുതും സങ്കീർണ്ണവുമായ ഡാറ്റാസെറ്റുകൾ", "isCorrect": true },
      { "text": "ഒരു വൈറസ്", "isCorrect": false }
    ]
  },
  {
    "question": "നിശ്ശബ്ദ ഡാറ്റാ ശേഖരണം (Implicit data collection) എന്നാൽ:",
    "options": [
      { "text": "ഒരു ഫോം പൂരിപ്പിക്കുന്നത്", "isCorrect": false },
      { "text": "ഒരു വാർത്താക്കുറിപ്പിനായി സൈൻ അപ്പ് ചെയ്യുന്നത്", "isCorrect": false },
      { "text": "നേരിട്ടുള്ള ഇൻപുട്ടില്ലാതെ ഡാറ്റ ശേഖരിക്കുന്നത്", "isCorrect": true },
      { "text": "ഒരു ലേഖനം എഴുതുന്നത്", "isCorrect": false }
    ]
  },
  {
    "question": "ഇവയിൽ ഏതാണ് ശാസ്ത്രീയ വിവരങ്ങളുടെ വിശ്വസനീയമായ ഉറവിടം?",
    "options": [
      { "text": "യാദൃച്ഛികമായ ബ്ലോഗ്", "isCorrect": false },
      { "text": "WhatsApp സന്ദേശം", "isCorrect": false },
      { "text": "ശാസ്ത്ര ജേണൽ", "isCorrect": true },
      { "text": "Facebook പോസ്റ്റ്", "isCorrect": false }
    ]
  },
  {
    "question": "മറ്റൊരാളുടെ സൃഷ്ടി ക്രെഡിറ്റ് നൽകാതെ പങ്കുവെക്കുന്നത്:",
    "options": [
      { "text": "നല്ല ഗവേഷണം", "isCorrect": false },
      { "text": "പ്ലഗിരിസം (Plagiarism)", "isCorrect": true },
      { "text": "ഗ്രന്ഥസൂചി", "isCorrect": false },
      { "text": "വ്യാകരണ പിശക്", "isCorrect": false }
    ]
  },
  {
    "question": "\"നെറ്റിക്വിറ്റ്\" (Netiquette) എന്ന പദം എന്തിനെ സൂചിപ്പിക്കുന്നു?",
    "options": [
      { "text": "ഇൻ്റർനെറ്റ് വേഗത", "isCorrect": false },
      { "text": "ബഹുമാനത്തോടെയുള്ള ഓൺലൈൻ പെരുമാറ്റത്തിനുള്ള നിയമങ്ങൾ", "isCorrect": true },
      { "text": "ഒരു പുതിയ വെബ്സൈറ്റ്", "isCorrect": false },
      { "text": "പാസ്‌വേർഡ് മാനേജർ", "isCorrect": false }
    ]
  },
  {
    "question": "മൊബൈൽ ഉപകരണങ്ങളിൽ നിന്ന് അകന്നുപോകുമ്പോൾ ഉണ്ടാകുന്ന ഉത്കണ്ഠ ഉൾപ്പെടുന്ന അവസ്ഥ ഏതാണ്?",
    "options": [
      { "text": "സൈബർകോൺഡ്രിയ", "isCorrect": false },
      { "text": "നോമോഫോബിയ (Nomophobia)", "isCorrect": true },
      { "text": "ടെക് നെക്ക്", "isCorrect": false },
      { "text": "ഡാറ്റാ ക്ഷീണം", "isCorrect": false }
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
