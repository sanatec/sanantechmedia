document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "സോഫ്റ്റ്‌വെയർ പ്രസിദ്ധീകരിക്കുന്നതിൻ്റെ (publishing) പ്രധാന ലക്ഷ്യം എന്താണ്?",
    "options": [
      { "text": "മറ്റുള്ളവർക്ക് ഉപയോഗിക്കാൻ സോഫ്റ്റ്‌വെയർ ലഭ്യമാക്കുക", "isCorrect": true },
      { "text": "ഹാർഡ്‌വെയർ സൃഷ്ടിക്കുക", "isCorrect": false },
      { "text": "ലൈസൻസുകൾ നീക്കം ചെയ്യുക", "isCorrect": false },
      { "text": "ഡാറ്റ എൻക്രിപ്റ്റ് ചെയ്യുക", "isCorrect": false }
    ]
  },
  {
    "question": "ഇവയിൽ ഒരു പ്രസിദ്ധീകരണ പ്ലാറ്റ്‌ഫോം (publishing platform) അല്ലാത്തത് ഏതാണ്?",
    "options": [
      { "text": "GitLab", "isCorrect": false },
      { "text": "SourceForge", "isCorrect": false },
      { "text": "GitHub", "isCorrect": false },
      { "text": "Photoshop", "isCorrect": true }
    ]
  },
  {
    "question": "നിലവിലുള്ള ഫ്രീ സോഫ്റ്റ്‌വെയറിൽ മാറ്റം വരുത്തുന്നതിനുള്ള പദം ഏതാണ്?",
    "options": [
      { "text": "ഫോർക്കിംഗ് (Forking)", "isCorrect": true },
      { "text": "എൻകോഡിംഗ്", "isCorrect": false },
      { "text": "ഇൻസ്റ്റാളിംഗ്", "isCorrect": false },
      { "text": "ഡീബഗ്ഗിംഗ്", "isCorrect": false }
    ]
  },
  {
    "question": "വേർഷൻ കൺട്രോൾ സിസ്റ്റത്തിന് (Version Control System) ഒരു ഉദാഹരണം?",
    "options": [
      { "text": "Git", "isCorrect": true },
      { "text": "Python", "isCorrect": false },
      { "text": "Rust", "isCorrect": false },
      { "text": "C", "isCorrect": false }
    ]
  },
  {
    "question": "ഏറ്റവും കൂടുതൽ നിയന്ത്രണങ്ങളുള്ള സോഫ്റ്റ്‌വെയർ ലൈസൻസ് ഏതാണ്?",
    "options": [
      { "text": "BSD", "isCorrect": false },
      { "text": "Apache", "isCorrect": false },
      { "text": "GPL", "isCorrect": false },
      { "text": "EULA", "isCorrect": true }
    ]
  },
  {
    "question": "GPL ലൈസൻസിന് കീഴിലുള്ള സോഫ്റ്റ്‌വെയർ ഏതാണ്?",
    "options": [
      { "text": "GIMP", "isCorrect": true },
      { "text": "iTunes", "isCorrect": false },
      { "text": "Adobe Reader", "isCorrect": false },
      { "text": "MS Word", "isCorrect": false }
    ]
  },
  {
    "question": "കോഡ് അനധികൃതമായി പകർത്തുന്നതിനെ വിളിക്കുന്നത്?",
    "options": [
      { "text": "പ്ലാജിയറിസം (Plagiarism)", "isCorrect": true },
      { "text": "ഫോർക്കിംഗ്", "isCorrect": false },
      { "text": "ഡീബഗ്ഗിംഗ്", "isCorrect": false },
      { "text": "കംപൈലേഷൻ", "isCorrect": false }
    ]
  },
  {
    "question": "Unix വികസിപ്പിച്ചത് എപ്പോഴാണ്?",
    "options": [
      { "text": "1969–70", "isCorrect": true },
      { "text": "1983–85", "isCorrect": false },
      { "text": "1975–80", "isCorrect": false },
      { "text": "1990–92", "isCorrect": false }
    ]
  },
  {
    "question": "Linux Kernel വികസിപ്പിച്ചത് ആരാണ്?",
    "options": [
      { "text": "Linus Torvalds", "isCorrect": true },
      { "text": "Ken Thompson", "isCorrect": false },
      { "text": "Richard Stallman", "isCorrect": false },
      { "text": "Steve Jobs", "isCorrect": false }
    ]
  },
  {
    "question": "ഏതാണ് ഒരു ഓപ്പൺ സോഴ്‌സ് ലൈസൻസ്?",
    "options": [
      { "text": "പ്രൊപ്രൈറ്ററി ലൈസൻസ്", "isCorrect": false },
      { "text": "EULA", "isCorrect": false },
      { "text": "ട്രയൽവെയർ", "isCorrect": false },
      { "text": "Apache License", "isCorrect": true }
    ]
  },
  {
    "question": "OS-ൽ കേർണലിൻ്റെ (Kernel) പങ്ക് എന്താണ്?",
    "options": [
      { "text": "ഹാർഡ്‌വെയറുമായി സംവദിക്കുക", "isCorrect": true },
      { "text": "GUI പ്രദർശിപ്പിക്കുക", "isCorrect": false },
      { "text": "സംഭരണം കൈകാര്യം ചെയ്യുക", "isCorrect": false },
      { "text": "ആപ്ലിക്കേഷനുകൾ പ്രവർത്തിപ്പിക്കുക", "isCorrect": false }
    ]
  },
  {
    "question": "OS-ൽ ഷെല്ലിൻ്റെ (Shell) പങ്ക് എന്താണ്?",
    "options": [
      { "text": "ഉപയോക്താവുമായി സംവദിക്കുക", "isCorrect": true },
      { "text": "പ്രോഗ്രാമുകൾ കംപൈൽ ചെയ്യുക", "isCorrect": false },
      { "text": "മെമ്മറി കൈകാര്യം ചെയ്യുക", "isCorrect": false },
      { "text": "ഡാറ്റ എൻക്രിപ്റ്റ് ചെയ്യുക", "isCorrect": false }
    ]
  },
  {
    "question": "GNU/Linux ഡിസ്ട്രിബ്യൂഷന് ഒരു ഉദാഹരണം?",
    "options": [
      { "text": "Debian", "isCorrect": true },
      { "text": "iOS", "isCorrect": false },
      { "text": "Windows", "isCorrect": false },
      { "text": "macOS", "isCorrect": false }
    ]
  },
  {
    "question": "BSD എന്നതിൻ്റെ പൂർണ്ണരൂപം?",
    "options": [
      { "text": "Berkeley Software Distribution", "isCorrect": true },
      { "text": "Basic System Design", "isCorrect": false },
      { "text": "Binary Software Data", "isCorrect": false },
      { "text": "Berkeley Source Device", "isCorrect": false }
    ]
  },
  {
    "question": "Apache Subversion വികസിപ്പിച്ച സംഘടന?",
    "options": [
      { "text": "Apache Software Foundation", "isCorrect": true },
      { "text": "GNU Foundation", "isCorrect": false },
      { "text": "Microsoft", "isCorrect": false },
      { "text": "FSF", "isCorrect": false }
    ]
  },
  {
    "question": "Android എന്തിനെ അടിസ്ഥാനമാക്കിയുള്ളതാണ്?",
    "options": [
      { "text": "Linux Kernel", "isCorrect": true },
      { "text": "Windows", "isCorrect": false },
      { "text": "macOS", "isCorrect": false },
      { "text": "Unix", "isCorrect": false }
    ]
  },
  {
    "question": "പുനർവിതരണത്തിന് നിബന്ധനകൾ അനുവദിക്കുന്ന ലൈസൻസ്?",
    "options": [
      { "text": "GPL", "isCorrect": true },
      { "text": "EULA", "isCorrect": false },
      { "text": "Freeware", "isCorrect": false },
      { "text": "Trialware", "isCorrect": false }
    ]
  },
  {
    "question": "ഒബ്ജക്റ്റ് കോഡ് (Object Code) മാത്രമായി വിതരണം ചെയ്യുന്ന സോഫ്റ്റ്‌വെയർ?",
    "options": [
      { "text": "പ്രൊപ്രൈറ്ററി സോഫ്റ്റ്‌വെയർ (Proprietary Software)", "isCorrect": true },
      { "text": "ഓപ്പൺ സോഴ്‌സ് സോഫ്റ്റ്‌വെയർ", "isCorrect": false },
      { "text": "ഫ്രീ സോഫ്റ്റ്‌വെയർ", "isCorrect": false },
      { "text": "FLOSS", "isCorrect": false }
    ]
  },
  {
    "question": "GUI എന്നതിൻ്റെ പൂർണ്ണരൂപം?",
    "options": [
      { "text": "Graphical User Interface", "isCorrect": true },
      { "text": "General Unix Interface", "isCorrect": false },
      { "text": "Global User Internet", "isCorrect": false },
      { "text": "Graph Utility Interface", "isCorrect": false }
    ]
  },
  {
    "question": "ഓപ്പൺ സോഴ്‌സ് സോഫ്റ്റ്‌വെയറിൻ്റെ പ്രയോജനം?",
    "options": [
      { "text": "സഹകരണത്തിനും പഠനത്തിനും അവസരം നൽകുന്നു", "isCorrect": true },
      { "text": "മറച്ചുവെച്ച സോഴ്‌സ് കോഡ്", "isCorrect": false },
      { "text": "പരിമിതമായ പ്രവേശനം", "isCorrect": false },
      { "text": "ഉയർന്ന ലൈസൻസ് ഫീസ്", "isCorrect": false }
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
