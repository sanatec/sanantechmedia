document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "തലക്കെട്ടുകളും ഉള്ളടക്കവും രൂപകൽപ്പന ചെയ്യുമ്പോൾ വിഷ്വൽ ബാലൻസ് (visual balance) നിലനിർത്താൻ സഹായിക്കുന്ന സവിശേഷത ഏതാണ്?",
    "options": [
      { "text": "Flip vertically", "isCorrect": false },
      { "text": "ഷാഡോകൾ ഉപയോഗിക്കുന്നത്", "isCorrect": false },
      { "text": "വിന്യാസവും അകലവും (Alignment and spacing)", "isCorrect": true },
      { "text": "വലിയ രൂപങ്ങൾ മാത്രം ഉപയോഗിക്കുന്നത്", "isCorrect": false }
    ]
  },
  {
    "question": "മുൻ പേജിൽ ഒരു ബാനർ സൃഷ്ടിക്കാൻ സാധാരണയായി ഉപയോഗിക്കുന്ന ഉപകരണം ഏതാണ്?",
    "options": [
      { "text": "Text Tool", "isCorrect": false },
      { "text": "Shape Tool", "isCorrect": true },
      { "text": "Node Tool", "isCorrect": false },
      { "text": "Gradient Tool", "isCorrect": false }
    ]
  },
  {
    "question": "വിഷ്വൽ ഇംപാക്റ്റിനായി ഒരു ബാനറിൻ്റെ രൂപം എങ്ങനെ മെച്ചപ്പെടുത്താം?",
    "options": [
      { "text": "ഫോണ്ട് വലുപ്പം കൂട്ടുക", "isCorrect": false },
      { "text": "ലൈനുകൾ ചേർക്കുക", "isCorrect": false },
      { "text": "രൂപങ്ങൾ, നിറങ്ങൾ, ഷാഡോകൾ എന്നിവ ഉപയോഗിക്കുക", "isCorrect": true },
      { "text": "ടേബിളിലേക്ക് മാറ്റുക", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു പത്രത്തിൻ്റെ മുൻ പേജിൽ ചിത്രങ്ങൾ പ്രധാനമായിരിക്കുന്നത് എന്തുകൊണ്ട്?",
    "options": [
      { "text": "അവ ടെക്സ്റ്റിനായി ഉപയോഗിക്കുന്ന ഇടം കുറയ്ക്കുന്നു", "isCorrect": false },
      { "text": "അവ പത്രത്തെ കൂടുതൽ വർണ്ണാഭമാക്കുന്നു", "isCorrect": false },
      { "text": "അവ വായനക്കാരുടെ ശ്രദ്ധ ആകർഷിക്കുകയും സന്ദേശങ്ങൾ വേഗത്തിൽ കൈമാറുകയും ചെയ്യുന്നു", "isCorrect": true },
      { "text": "അവ അലങ്കാരത്തിന് വേണ്ടി മാത്രം ഉപയോഗിക്കുന്നു", "isCorrect": false }
    ]
  },
  {
    "question": "Scribus-ൽ ഒരു ബാനർ സൃഷ്ടിക്കാൻ പ്രാഥമികമായി ഉപയോഗിക്കുന്ന ഉപകരണം ഏതാണ്?",
    "options": [
      { "text": "Line Tool", "isCorrect": false },
      { "text": "Image Frame", "isCorrect": false },
      { "text": "Shape Tool", "isCorrect": true },
      { "text": "Polygon Tool", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു ബാനർ രൂപത്തിൻ്റെ ഘടന പരിഷ്ക്കരിക്കാൻ ഉപയോഗിക്കുന്ന സാങ്കേതികവിദ്യ ഏതാണ്?",
    "options": [
      { "text": "Rotate tool", "isCorrect": false },
      { "text": "Node Editing", "isCorrect": true },
      { "text": "Stroke settings", "isCorrect": false },
      { "text": "Grouping", "isCorrect": false }
    ]
  },
  {
    "question": "Scribus-ൽ Node Editing വിൻഡോ എങ്ങനെ ആക്സസ് ചെയ്യാം?",
    "options": [
      { "text": "റൈറ്റ്-ക്ലിക്കു ചെയ്ത് Node തിരഞ്ഞെടുക്കുക", "isCorrect": false },
      { "text": "രൂപത്തിൽ ഇരട്ട ക്ലിക്കു ചെയ്യുക", "isCorrect": true },
      { "text": "Text Properties ഉപയോഗിക്കുക", "isCorrect": false },
      { "text": "Layers മെനു ഉപയോഗിക്കുക", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു രൂപത്തിലെ നോഡിൻ്റെ വലുപ്പമോ സ്ഥാനമോ ക്രമീകരിക്കാൻ, നിങ്ങൾ പരിഷ്‌ക്കരിക്കേണ്ടത്:",
    "options": [
      { "text": "X-Pos, Y-Pos മൂല്യങ്ങൾ", "isCorrect": true },
      { "text": "Font size", "isCorrect": false },
      { "text": "Stroke color", "isCorrect": false },
      { "text": "Layer level", "isCorrect": false }
    ]
  },
  {
    "question": "ബാനർ രൂപകൽപ്പനയ്ക്കായി ഒരു രൂപത്തിൻ്റെ പ്രതിഫലിച്ച പതിപ്പ് (reflected version) സൃഷ്ടിക്കാൻ, നിങ്ങൾ ചെയ്യേണ്ടത്:",
    "options": [
      { "text": "ഒബ്‌ജെക്റ്റ് 90 ഡിഗ്രി കറക്കുക", "isCorrect": false },
      { "text": "അതിനെ തിരശ്ചീനമായി ഫ്ലിപ്പ് ചെയ്യുക (Flip it horizontally)", "isCorrect": true },
      { "text": "ഫോണ്ട് മാറ്റുക", "isCorrect": false },
      { "text": "രൂപം Justify ചെയ്യുക", "isCorrect": false }
    ]
  },
  {
    "question": "Scribus-ൽ ഒരു രൂപം ഫ്ലിപ്പ് ചെയ്യാൻ ഉപയോഗിക്കുന്ന മെനു ഓപ്ഷൻ ഏതാണ്?",
    "options": [
      { "text": "Insert → Flip", "isCorrect": false },
      { "text": "File → Transform", "isCorrect": false },
      { "text": "Properties → X,Y,Z → Flip Horizontally", "isCorrect": true },
      { "text": "Tools → Mirror", "isCorrect": false }
    ]
  },
  {
    "question": "അതിവ്യാപനം (overlapping) ചെയ്യുന്ന രണ്ട് രൂപങ്ങളെ എങ്ങനെ കൂടുതൽ കൃത്യമായി വിന്യസിക്കാൻ (align) കഴിയും?",
    "options": [
      { "text": "കൈകൊണ്ട് വലിച്ചിടുക", "isCorrect": false },
      { "text": "കൃത്യമായ ക്രമീകരണത്തിനായി ആരോ കീകൾ ഉപയോഗിക്കുക", "isCorrect": true },
      { "text": "സ്നാപ്പ് ഗൈഡുകൾ മാത്രം ഉപയോഗിക്കുക", "isCorrect": false },
      { "text": "സൂം ഔട്ട് ചെയ്യുക", "isCorrect": false }
    ]
  },
  {
    "question": "ബാനർ രൂപകൽപ്പനയിൽ Drop Shadow ഓപ്ഷൻ ഉപയോഗിക്കുന്നത് എന്തുകൊണ്ട്?",
    "options": [
      { "text": "ഒബ്‌ജെക്റ്റിന്റെ നിറം മാറ്റാൻ", "isCorrect": false },
      { "text": "ഒരു 3D വിഷ്വൽ ഇഫക്റ്റ് നൽകാൻ", "isCorrect": true },
      { "text": "രൂപത്തെ ടെക്സ്റ്റിലേക്ക് മാറ്റാൻ", "isCorrect": false },
      { "text": "പശ്ചാത്തലം തെളിച്ചമുള്ളതാക്കാൻ", "isCorrect": false }
    ]
  },
  {
    "question": "Drop Shadow ഓപ്ഷൻ എവിടെയാണ് കാണപ്പെടുന്നത്?",
    "options": [
      { "text": "Text Properties", "isCorrect": false },
      { "text": "Image Frame Menu", "isCorrect": false },
      { "text": "Properties Window-വിലെ Drop Shadow ടാബിന് കീഴിൽ", "isCorrect": true },
      { "text": "Insert → Effects", "isCorrect": false }
    ]
  },
  {
    "question": "ഗൈഡുകളും ഔട്ട്ലൈനുകളും ഇല്ലാതെ നിലവിലെ ഡിസൈൻ കാണാൻ നിങ്ങളെ സഹായിക്കുന്ന ബട്ടൺ ഏതാണ്?",
    "options": [
      { "text": "Save", "isCorrect": false },
      { "text": "Export", "isCorrect": false },
      { "text": "Preview Mode", "isCorrect": true },
      { "text": "Print Preview", "isCorrect": false }
    ]
  },
  {
    "question": "നിങ്ങളുടെ ജോലി നഷ്ടപ്പെടാതിരിക്കാൻ ഡിസൈൻ ചെയ്യുമ്പോൾ നിങ്ങൾ പതിവായി എന്തു ചെയ്യണം?",
    "options": [
      { "text": "ഡിസൈൻ പ്രിവ്യൂ ചെയ്യുക", "isCorrect": false },
      { "text": "ലെയറുകൾ ക്രമീകരിക്കുക", "isCorrect": false },
      { "text": "ഫയൽ സേവ് ചെയ്യുക", "isCorrect": true },
      { "text": "പേജ് പ്രിൻ്റ് ചെയ്യുക", "isCorrect": false }
    ]
  },
  {
    "question": "പ്രിൻ്റിംഗിനായി നിങ്ങളുടെ അന്തിമ പത്രം ഏത് ഫയൽ ഫോർമാറ്റിലേക്ക് എക്സ്പോർട്ട് ചെയ്യണം?",
    "options": [
      { "text": "JPG", "isCorrect": false },
      { "text": "DOCX", "isCorrect": false },
      { "text": "PDF", "isCorrect": true },
      { "text": "PNG", "isCorrect": false }
    ]
  },
  {
    "question": "Scribus ഡോക്യുമെൻ്റ് PDF-ലേക്ക് എക്സ്പോർട്ട് ചെയ്യാൻ ഉപയോഗിക്കുന്ന മെനു ഏതാണ്?",
    "options": [
      { "text": "Edit → Export", "isCorrect": false },
      { "text": "File → Export", "isCorrect": true },
      { "text": "Tools → Print", "isCorrect": false },
      { "text": "View → Export", "isCorrect": false }
    ]
  },
  {
    "question": "Scribus-ൽ PDF-ലേക്ക് എക്സ്പോർട്ട് ചെയ്യുന്നതിൻ്റെ പ്രയോജനം എന്താണ്?",
    "options": [
      { "text": "ചെറിയ ഫയൽ വലുപ്പം മാത്രം", "isCorrect": false },
      { "text": "Word-ൽ എഡിറ്റ് ചെയ്യാൻ കഴിയും", "isCorrect": false },
      { "text": "ലേഔട്ടും പ്രിൻ്റ് ഗുണനിലവാരവും നിലനിർത്തുന്നു", "isCorrect": true },
      { "text": "ആനിമേഷനുകൾ പ്രവർത്തനക്ഷമമാക്കുന്നു", "isCorrect": false }
    ]
  },
  {
    "question": "എല്ലാം കൃത്യമായി ഉണ്ടെന്ന് ഉറപ്പാക്കാൻ PDF-ലേക്ക് എക്സ്പോർട്ട് ചെയ്യുന്നതിനുമുമ്പ് നിങ്ങൾ എന്തു ചെയ്യണം?",
    "options": [
      { "text": "ആനിമേഷൻ ചേർക്കുക", "isCorrect": false },
      { "text": "വിൻഡോയുടെ വലുപ്പം മാറ്റുക", "isCorrect": false },
      { "text": "Preview Mode ഉപയോഗിക്കുക", "isCorrect": true },
      { "text": "തീം മാറ്റുക", "isCorrect": false }
    ]
  },
  {
    "question": "മുഴുവൻ പേജിന്റെയും പശ്ചാത്തലത്തിലേക്ക് (background) നിറം ചേർക്കാൻ ഉപയോഗിക്കുന്ന ഉപകരണം ഏതാണ്?",
    "options": [
      { "text": "Image Frame", "isCorrect": false },
      { "text": "Text Frame", "isCorrect": false },
      { "text": "Shape Tool", "isCorrect": true },
      { "text": "Font Tool", "isCorrect": false }
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
