document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "Text Properties വിൻഡോയിൽ ഫോണ്ട് മാറ്റുമ്പോൾ, ആദ്യം എന്ത് തിരഞ്ഞെടുക്കണം?",
    "options": [
      { "text": "കാൻവാസ്", "isCorrect": false },
      { "text": "മുഴുവൻ ടെക്സ്റ്റ് (Ctrl + A)", "isCorrect": true },
      { "text": "രൂപം (shape)", "isCorrect": false },
      { "text": "ഫയലിന്റെ പേര്", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു ഖണ്ഡികയിലെ വരികൾ തമ്മിൽ തുല്യമായ അകലം ഉറപ്പാക്കാൻ സഹായിക്കുന്ന ഓപ്ഷൻ ഏതാണ്?",
    "options": [
      { "text": "Font Size", "isCorrect": false },
      { "text": "Justify Alignment", "isCorrect": false },
      { "text": "Auto Line Spacing", "isCorrect": true },
      { "text": "Drop Cap", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു തലക്കെട്ട് വേറിട്ടുനിൽക്കാൻ (stand out) നിങ്ങൾ Text Properties-ലെ ഏത് സവിശേഷത ഉപയോഗിക്കും?",
    "options": [
      { "text": "Font shadow-ഉം size-ഉം", "isCorrect": true },
      { "text": "Line tool", "isCorrect": false },
      { "text": "Insert shape", "isCorrect": false },
      { "text": "Image frame", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു കോളത്തിൽ ടെക്സ്റ്റ് തുല്യമായി വ്യാപിപ്പിക്കാൻ (spread evenly) നിങ്ങൾ ഏത് വിന്യാസ ഓപ്ഷൻ (alignment option) തിരഞ്ഞെടുക്കണം?",
    "options": [
      { "text": "Center", "isCorrect": false },
      { "text": "Right", "isCorrect": false },
      { "text": "Justify", "isCorrect": true },
      { "text": "Left", "isCorrect": false }
    ]
  },
  {
    "question": "Scribus-ലെ Image Frame-ൻ്റെ ഉദ്ദേശ്യം എന്താണ്?",
    "options": [
      { "text": "ബോർഡറുകൾ വരയ്ക്കാൻ", "isCorrect": false },
      { "text": "ലേഔട്ടിലേക്ക് ചിത്രങ്ങൾ ചേർക്കാൻ", "isCorrect": true },
      { "text": "ഒരു ടെക്സ്റ്റ് ബോക്സ് സൃഷ്ടിക്കാൻ", "isCorrect": false },
      { "text": "രൂപങ്ങൾക്ക് നിറം നൽകാൻ", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു ചിത്രം Image Frame-ലേക്ക് ചേർക്കുന്നതിന് മുമ്പ് എന്ത് ചെയ്യണം?",
    "options": [
      { "text": "അതിനെ PDF-ലേക്ക് മാറ്റുക", "isCorrect": false },
      { "text": "ചിത്രത്തിൻ്റെ വലുപ്പം മാറ്റുക", "isCorrect": false },
      { "text": "Image Frame വരയ്ക്കുക", "isCorrect": true },
      { "text": "അകത്ത് ടെക്സ്റ്റ് ടൈപ്പ് ചെയ്യുക", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു Image Frame-ലേക്ക് ചിത്രം ചേർക്കാൻ ഉപയോഗിക്കുന്ന മെനു ഓപ്ഷൻ ഏതാണ്?",
    "options": [
      { "text": "File → Open", "isCorrect": false },
      { "text": "Content → Get Image", "isCorrect": true },
      { "text": "Insert → Image", "isCorrect": false },
      { "text": "Tools → Picture", "isCorrect": false }
    ]
  },
  {
    "question": "ചിത്രം ചേർത്ത ശേഷം, ചിത്രം ഫ്രെയിമിനുള്ളിൽ ശരിയായി യോജിക്കുന്നുവെന്ന് ഉറപ്പാക്കുന്ന ഓപ്ഷൻ ഏതാണ്?",
    "options": [
      { "text": "Fit to page", "isCorrect": false },
      { "text": "Shrink to fit", "isCorrect": false },
      { "text": "Image → Adjust Image to Frame", "isCorrect": true },
      { "text": "Auto Resize", "isCorrect": false }
    ]
  },
  {
    "question": "ചിത്രത്തിൻ്റെ വ്യക്തത ഉറപ്പാക്കാൻ, Preview Settings-ൽ ഏത് ക്രമീകരണമാണ് പ്രവർത്തനക്ഷമമാക്കേണ്ടത്?",
    "options": [
      { "text": "Fast Display", "isCorrect": false },
      { "text": "Print Mode", "isCorrect": false },
      { "text": "Full Resolution", "isCorrect": true },
      { "text": "Vector Display", "isCorrect": false }
    ]
  },
  {
    "question": "“Convert to Image Frame” ഓപ്ഷൻ്റെ ധർമ്മം എന്താണ്?",
    "options": [
      { "text": "രൂപത്തെ (shape) ഇമേജ് ഫോർമാറ്റിലേക്ക് മാറ്റുന്നു", "isCorrect": false },
      { "text": "ഒരു രൂപത്തെ ചിത്രം ഉൾക്കൊള്ളാൻ കഴിയുന്ന ഫ്രെയിമാക്കി മാറ്റുന്നു", "isCorrect": true },
      { "text": "ഒരു ടെക്സ്റ്റ് ഫ്രെയിമിനെ ചിത്രമാക്കി മാറ്റുന്നു", "isCorrect": false },
      { "text": "ചിത്രത്തിൻ്റെ വലുപ്പം പുനഃസജ്ജമാക്കുന്നു", "isCorrect": false }
    ]
  },
  {
    "question": "Scribus-ലെ പത്ര രൂപകൽപ്പനയിൽ ഒരു QR കോഡ് എങ്ങനെ ഓവർലേ (overlay) ചെയ്യാം?",
    "options": [
      { "text": "Shape tool ഉപയോഗിച്ച് വരയ്ക്കുക", "isCorrect": false },
      { "text": "ചിത്രമായി ചേർക്കുക", "isCorrect": false },
      { "text": "Barcode ഐക്കൺ ഉപയോഗിച്ച് QR കോഡ് തിരഞ്ഞെടുക്കുക", "isCorrect": true },
      { "text": "ക്ലിപ്‌ബോർഡിൽ നിന്ന് പേസ്റ്റ് ചെയ്യുക", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു QR കോഡ് പ്രവർത്തനക്ഷമമാക്കാൻ അതിൻ്റെ ക്രമീകരണങ്ങളിൽ (settings) എന്ത് നൽകണം?",
    "options": [
      { "text": "പത്രത്തിന്റെ പേര്", "isCorrect": false },
      { "text": "ഒരു വാക്യം അല്ലെങ്കിൽ അടിക്കുറിപ്പ്", "isCorrect": false },
      { "text": "സ്കൂൾ വിക്കി URL അല്ലെങ്കിൽ പേജ് വിലാസം", "isCorrect": true },
      { "text": "ഒരു ബാർകോഡ് നമ്പർ", "isCorrect": false }
    ]
  },
  {
    "question": "Barcode Tool ഉപയോഗിച്ച് ഒരു QR കോഡ് ജനറേറ്റ് ചെയ്ത ശേഷം എന്ത് സംഭവിക്കുന്നു?",
    "options": [
      { "text": "ഒരു ടെക്സ്റ്റ് ഫ്രെയിം സൃഷ്ടിക്കപ്പെടുന്നു", "isCorrect": false },
      { "text": "QR കോഡ് ബ്രൗസറിൽ തുറക്കുന്നു", "isCorrect": false },
      { "text": "QR കോഡ് സ്ഥാപിക്കുന്നതിനായി ഒരു Image Frame പ്രത്യക്ഷപ്പെടുന്നു", "isCorrect": true },
      { "text": "പേജ് പുതുക്കുന്നതുവരെ ഒന്നും സംഭവിക്കുന്നില്ല", "isCorrect": false }
    ]
  },
  {
    "question": "മറ്റ് ഒബ്‌ജെക്റ്റുകൾക്ക് മുകളിലുള്ള ഏറ്റവും മുകളിലെ ലെയറിലേക്ക് ഒരു ചിത്രത്തെ എങ്ങനെ കൊണ്ടുവരാം?",
    "options": [
      { "text": "Shape Tool ഉപയോഗിക്കുക", "isCorrect": false },
      { "text": "Level → Raise to Top ഉപയോഗിക്കുക", "isCorrect": true },
      { "text": "Text Properties ഉപയോഗിക്കുക", "isCorrect": false },
      { "text": "ചിത്രം വീണ്ടും ചേർക്കുക", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു പത്രത്തിൻ്റെ മുൻ പേജ് പ്രധാനമായി കണക്കാക്കുന്നത് എന്തുകൊണ്ട്?",
    "options": [
      { "text": "അത് ഉള്ളടക്ക പട്ടിക കാണിക്കുന്നു", "isCorrect": false },
      { "text": "അതിൽ പരസ്യങ്ങൾ മാത്രമേ ഉള്ളൂ", "isCorrect": false },
      { "text": "പ്രധാന വാർത്തകൾ പ്രദർശിപ്പിക്കുന്ന 'ജാലകം' ആയി അത് പ്രവർത്തിക്കുന്നു", "isCorrect": true },
      { "text": "ലേഖനങ്ങൾ എഡിറ്റ് ചെയ്യാൻ അത് ഉപയോഗിക്കുന്നു", "isCorrect": false }
    ]
  },
  {
    "question": "മുൻ പേജിൽ സാധാരണയായി കാണപ്പെടുന്ന ഉള്ളടക്കം ഏതാണ്?",
    "options": [
      { "text": "മുഴുവൻ വാർത്താ ലേഖനങ്ങൾ", "isCorrect": false },
      { "text": "ക്ലാസിഫൈഡുകൾ", "isCorrect": false },
      { "text": "ചെറിയ വാർത്താ ശകലങ്ങളും ചിത്രങ്ങളും", "isCorrect": true },
      { "text": "കാർട്ടൂണുകൾ മാത്രം", "isCorrect": false }
    ]
  },
  {
    "question": "മുൻ പേജിൽ ടെക്സ്റ്റും ചിത്രങ്ങളും വ്യക്തമായി ക്രമീകരിക്കാൻ സഹായിക്കുന്ന ലേഔട്ട് സവിശേഷത ഏതാണ്?",
    "options": [
      { "text": "Watermark", "isCorrect": false },
      { "text": "Guides", "isCorrect": false },
      { "text": "Columns (കോളങ്ങൾ)", "isCorrect": true },
      { "text": "Animation", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു സ്കൂൾ പത്രത്തിൻ്റെ ശീർഷകം എങ്ങനെ അവതരിപ്പിക്കണം?",
    "options": [
      { "text": "ചെറിയ പ്ലെയിൻ ടെക്സ്റ്റിൽ", "isCorrect": false },
      { "text": "ഒരു Image Frame-ൽ", "isCorrect": false },
      { "text": "ഒരു ബോൾഡ്, കാഴ്ചയിൽ ആകർഷകമായ Text Frame-ൽ", "isCorrect": true },
      { "text": "ഒരു ടേബിളിൽ", "isCorrect": false }
    ]
  },
  {
    "question": "കൂടുതൽ വിവരങ്ങൾ നൽകുന്നതിന് പത്രത്തിൻ്റെ ശീർഷകത്തിന് താഴെ എന്ത് ഉൾപ്പെടുത്താം?",
    "options": [
      { "text": "Captions", "isCorrect": false },
      { "text": "Footnotes", "isCorrect": false },
      { "text": "സ്കൂളിൻ്റെ പേരും തീയതിയും പോലുള്ള ഉപശീർഷകങ്ങൾ (Subtitles)", "isCorrect": true },
      { "text": "Image gallery", "isCorrect": false }
    ]
  },
  {
    "question": "തലക്കെട്ടിന് താഴെ സ്കൂളിൻ്റെ ഇമെയിലോ ഉപശീർഷകമോ സ്ഥാപിക്കാൻ ഉപയോഗിക്കുന്ന ടൂൾ ഏതാണ്?",
    "options": [
      { "text": "Line Tool-ഉം Text Frame-ഉം", "isCorrect": true },
      { "text": "Image Frame", "isCorrect": false },
      { "text": "Polygon Tool", "isCorrect": false },
      { "text": "Shape Tool", "isCorrect": false }
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
