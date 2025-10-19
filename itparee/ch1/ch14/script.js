document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "Inkscape-ൽ ഒരു പെർസ്പെക്റ്റീവ് എൻവലപ്പ് (perspective envelope) ഇഫക്റ്റ് എങ്ങനെ സൃഷ്ടിക്കാം?",
    "options": [
      { "text": "'Pencil Tool' ഉപയോഗിച്ച്", "isCorrect": false },
      { "text": "'Gradient Tool' ഉപയോഗിച്ച്", "isCorrect": false },
      { "text": "'Extensions' മെനുവും എൻവലപ്പ് ഇഫക്റ്റും ഉപയോഗിച്ച്", "isCorrect": true },
      { "text": "'Text Tool' ഉപയോഗിച്ച്", "isCorrect": false }
    ]
  },
  {
    "question": "'Path Simplify' കമാൻഡിന്റെ ധർമ്മം എന്താണ്?",
    "options": [
      { "text": "ആനിമേഷൻ ചേർക്കാൻ", "isCorrect": false },
      { "text": "ഒരു പാതയിലെ നോഡുകളുടെ എണ്ണം കുറയ്ക്കാൻ", "isCorrect": true },
      { "text": "ഡോക്യുമെൻ്റ് വലുപ്പം മാറ്റാൻ", "isCorrect": false },
      { "text": "രൂപങ്ങൾക്ക് ഫോർമാറ്റ് ചെയ്യാൻ", "isCorrect": false }
    ]
  },
  {
    "question": "'Export Selection' ഓപ്ഷൻ്റെ ഉദ്ദേശ്യം എന്താണ്?",
    "options": [
      { "text": "ടെക്സ്റ്റ് ഇഫക്റ്റുകൾ ചേർക്കാൻ", "isCorrect": false },
      { "text": "തിരഞ്ഞെടുത്ത ഒബ്‌ജെക്റ്റുകൾ മാത്രം എക്സ്പോർട്ട് ചെയ്യാൻ", "isCorrect": true },
      { "text": "ഗ്രേഡിയന്റുകൾ പ്രയോഗിക്കാൻ", "isCorrect": false },
      { "text": "ഒബ്‌ജെക്റ്റുകളുടെ വലുപ്പം മാറ്റാൻ", "isCorrect": false }
    ]
  },
  {
    "question": "Inkscape-ൽ ഒരു 3D റൊട്ടേഷൻ ഇഫക്റ്റ് എങ്ങനെ സൃഷ്ടിക്കാം?",
    "options": [
      { "text": "'Pencil Tool' ഉപയോഗിച്ച്", "isCorrect": false },
      { "text": "'Gradient Tool' ഉപയോഗിച്ച്", "isCorrect": false },
      { "text": "'Extensions' മെനുവും 3D റൊട്ടേഷനും ഉപയോഗിച്ച്", "isCorrect": true },
      { "text": "'Text Tool' ഉപയോഗിച്ച്", "isCorrect": false }
    ]
  },
  {
    "question": "'Path Reverse' കമാൻഡിന്റെ ധർമ്മം എന്താണ്?",
    "options": [
      { "text": "ആനിമേഷൻ ചേർക്കാൻ", "isCorrect": false },
      { "text": "ഒരു പാതയുടെ ദിശ വിപരീതമാക്കാൻ", "isCorrect": true },
      { "text": "ഡോക്യുമെൻ്റ് വലുപ്പം മാറ്റാൻ", "isCorrect": false },
      { "text": "രൂപങ്ങൾക്ക് ഫോർമാറ്റ് ചെയ്യാൻ", "isCorrect": false }
    ]
  },
  {
    "question": "'Save As Template' ഓപ്ഷൻ്റെ ഉദ്ദേശ്യം എന്താണ്?",
    "options": [
      { "text": "ടെക്സ്റ്റ് ഇഫക്റ്റുകൾ ചേർക്കാൻ", "isCorrect": false },
      { "text": "ഭാവിയിൽ ഉപയോഗത്തിനായി ഡോക്യുമെൻ്റ് ഒരു ടെംപ്ലേറ്റായി സേവ് ചെയ്യാൻ", "isCorrect": true },
      { "text": "ഗ്രേഡിയന്റുകൾ പ്രയോഗിക്കാൻ", "isCorrect": false },
      { "text": "ഒബ്‌ജെക്റ്റുകളുടെ വലുപ്പം മാറ്റാൻ", "isCorrect": false }
    ]
  },
  {
    "question": "Inkscape-ൽ ഒരു 3D ഷാഡോ ഇഫക്റ്റ് എങ്ങനെ സൃഷ്ടിക്കാം?",
    "options": [
      { "text": "'Pencil Tool' ഉപയോഗിച്ച്", "isCorrect": false },
      { "text": "'Gradient Tool' ഉപയോഗിച്ച്", "isCorrect": false },
      { "text": "'Filters' മെനുവും 3D ഷാഡോയും ഉപയോഗിച്ച്", "isCorrect": true },
      { "text": "'Text Tool' ഉപയോഗിച്ച്", "isCorrect": false }
    ]
  },
  {
    "question": "Inkscape-ൽ ദീർഘചതുരങ്ങളും ചതുരങ്ങളും സൃഷ്ടിക്കാൻ ഉപയോഗിക്കുന്ന കുറുക്കുവഴി (shortcut key) ഏതാണ്?",
    "options": [
      { "text": "S", "isCorrect": false },
      { "text": "R", "isCorrect": true },
      { "text": "E", "isCorrect": false },
      { "text": "T", "isCorrect": false }
    ]
  },
  {
    "question": "Inkscape-ൽ വൃത്തങ്ങൾ, ദീർഘവൃത്തങ്ങൾ, ആർക്കുകൾ എന്നിവ വരയ്ക്കുന്നതിനുള്ള കുറുക്കുവഴി ഏതാണ്?",
    "options": [
      { "text": "C", "isCorrect": false },
      { "text": "O", "isCorrect": false },
      { "text": "E", "isCorrect": true },
      { "text": "R", "isCorrect": false }
    ]
  },
  {
    "question": "ടെക്സ്റ്റ് ഒബ്‌ജെക്റ്റുകൾ സൃഷ്ടിക്കാനും എഡിറ്റ് ചെയ്യാനും ഉപയോഗിക്കുന്ന കീ ഏതാണ്?",
    "options": [
      { "text": "T", "isCorrect": true },
      { "text": "B", "isCorrect": false },
      { "text": "N", "isCorrect": false },
      { "text": "P", "isCorrect": false }
    ]
  },
  {
    "question": "'Document Properties' വിൻഡോ തുറക്കുന്നതിനുള്ള കുറുക്കുവഴി ഇതാണ്:",
    "options": [
      { "text": "Ctrl + D", "isCorrect": false },
      { "text": "Shift + Ctrl + D", "isCorrect": true },
      { "text": "Ctrl + P", "isCorrect": false },
      { "text": "Shift + D", "isCorrect": false }
    ]
  },
  {
    "question": "Bezier curve-നും സ്ട്രെയിറ്റ് ലൈനുകൾക്കുമുള്ള കുറുക്കുവഴി (shortcut key) ഏതാണ്?",
    "options": [
      { "text": "B", "isCorrect": true },
      { "text": "E", "isCorrect": false },
      { "text": "S", "isCorrect": false },
      { "text": "D", "isCorrect": false }
    ]
  },
  {
    "question": "'Align and Distribute' വിൻഡോ എങ്ങനെ വേഗത്തിൽ തുറക്കാം?",
    "options": [
      { "text": "Ctrl + A", "isCorrect": false },
      { "text": "Shift + A", "isCorrect": false },
      { "text": "Shift + Ctrl + A", "isCorrect": true },
      { "text": "Ctrl + Shift + D", "isCorrect": false }
    ]
  },
  {
    "question": "ഒബ്‌ജെക്റ്റുകൾ തിരഞ്ഞെടുക്കാനും ട്രാൻസ്‌ഫോം ചെയ്യാനും (transform) ഉപയോഗിക്കുന്ന കുറുക്കുവഴി ഏതാണ്?",
    "options": [
      { "text": "T", "isCorrect": false },
      { "text": "S", "isCorrect": true },
      { "text": "E", "isCorrect": false },
      { "text": "G", "isCorrect": false }
    ]
  },
  {
    "question": "ഏത് കീ അമർത്തിയാലാണ് ഫ്രീഹാൻഡ് ലൈനുകൾ (freehand lines) വരയ്ക്കാൻ കഴിയുന്നത്?",
    "options": [
      { "text": "B", "isCorrect": false },
      { "text": "P", "isCorrect": true },
      { "text": "E", "isCorrect": false },
      { "text": "T", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു ഒബ്‌ജെക്റ്റിന്റെ ഡ്യൂപ്ലിക്കേറ്റ് എടുക്കുന്നതിനുള്ള കുറുക്കുവഴി ഇതാണ്:",
    "options": [
      { "text": "Ctrl + C", "isCorrect": false },
      { "text": "Ctrl + X", "isCorrect": false },
      { "text": "Ctrl + D", "isCorrect": true },
      { "text": "Ctrl + G", "isCorrect": false }
    ]
  },
  {
    "question": "തിരഞ്ഞെടുത്ത ഒബ്‌ജെക്റ്റുകൾ ഗ്രൂപ്പ് ചെയ്യാൻ, നിങ്ങൾ അമർത്തേണ്ടത്:",
    "options": [
      { "text": "Ctrl + D", "isCorrect": false },
      { "text": "Ctrl + G", "isCorrect": true },
      { "text": "Shift + G", "isCorrect": false },
      { "text": "Alt + G", "isCorrect": false }
    ]
  },
  {
    "question": "Inkscape-ൽ 'N' എന്ന കുറുക്കുവഴി കീ അമർത്തുമ്പോൾ സജീവമാകുന്ന ടൂൾ ഏതാണ്?",
    "options": [
      { "text": "Create Text", "isCorrect": false },
      { "text": "Edit Path by Nodes", "isCorrect": true },
      { "text": "Create Rectangle", "isCorrect": false },
      { "text": "Draw Circles", "isCorrect": false }
    ]
  },
  {
    "question": "Inkscape-ൽ 'Ctrl + S' എന്ന കുറുക്കുവഴി എന്തു ചെയ്യുന്നു?",
    "options": [
      { "text": "ഫയൽ സേവ് ചെയ്യുന്നു", "isCorrect": true },
      { "text": "ഒരു ഒബ്‌ജെക്റ്റ് തിരഞ്ഞെടുക്കുന്നു", "isCorrect": false },
      { "text": "ഒബ്‌ജെക്റ്റിൻ്റെ വലുപ്പം മാറ്റുന്നു", "isCorrect": false },
      { "text": "ഒരു പുതിയ ഡോക്യുമെൻ്റ് തുറക്കുന്നു", "isCorrect": false }
    ]
  },
  {
    "question": "'Export PNG Image' വിൻഡോ തുറക്കാൻ ഉപയോഗിക്കുന്ന കുറുക്കുവഴി ഏതാണ്?",
    "options": [
      { "text": "Ctrl + E", "isCorrect": false },
      { "text": "Shift + Ctrl + E", "isCorrect": true },
      { "text": "Alt + E", "isCorrect": false },
      { "text": "Ctrl + Shift + P", "isCorrect": false }
    ]
  },
  {
    "question": "ലെയർ സ്റ്റാക്കിൽ (layer stack) ഒരു ഒബ്‌ജെക്റ്റിനെ ഒരു പടി മുന്നോട്ട് കൊണ്ടുവരാൻ, നിങ്ങൾ അമർത്തേണ്ടത്:",
    "options": [
      { "text": "PgUp", "isCorrect": true },
      { "text": "PgDn", "isCorrect": false },
      { "text": "Ctrl + PgUp", "isCorrect": false },
      { "text": "Shift + PgDn", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു ഒബ്‌ജെക്റ്റിനെ തിരശ്ചീനമായി (horizontally) ഫ്ലിപ്പ് ചെയ്യുന്ന കുറുക്കുവഴി ഏതാണ്?",
    "options": [
      { "text": "H", "isCorrect": true },
      { "text": "Shift + H", "isCorrect": false },
      { "text": "Ctrl + H", "isCorrect": false },
      { "text": "നേരിട്ടുള്ള കുറുക്കുവഴിയില്ല, ടൂൾബാർ ഉപയോഗിക്കുക", "isCorrect": false }
    ]
  },
  {
    "question": "Inkscape-ൽ 'Ctrl + Z' അമർത്തിയാൽ എന്തു സംഭവിക്കും?",
    "options": [
      { "text": "അവസാന പ്രവർത്തനം വീണ്ടും ചെയ്യുക (Redo)", "isCorrect": false },
      { "text": "സൂം ഇൻ ചെയ്യുക", "isCorrect": false },
      { "text": "അവസാന പ്രവർത്തനം പഴയപടിയാക്കുക (Undo)", "isCorrect": true },
      { "text": "ഡോക്യുമെൻ്റ് സേവ് ചെയ്യുക", "isCorrect": false }
    ]
  },
  {
    "question": "തിരഞ്ഞെടുത്ത ഏരിയയിലേക്ക് സൂം ഇൻ ചെയ്യാൻ നിങ്ങൾ ഉപയോഗിക്കുന്ന കുറുക്കുവഴി ഏതാണ്?",
    "options": [
      { "text": "Z", "isCorrect": true },
      { "text": "Shift + Z", "isCorrect": false },
      { "text": "Ctrl + Z", "isCorrect": false },
      { "text": "Ctrl + Shift + Z", "isCorrect": false }
    ]
  },
  {
    "question": "'Fill and Stroke' വിൻഡോ തുറക്കുന്നതിനുള്ള കുറുക്കുവഴി ഏതാണ്?",
    "options": [
      { "text": "Ctrl + F", "isCorrect": false },
      { "text": "Shift + Ctrl + F", "isCorrect": true },
      { "text": "Alt + F", "isCorrect": false },
      { "text": "Ctrl + Shift + S", "isCorrect": false }
    ]
  },
  {
    "question": "Inkscape-ൽ 'G' എന്ന കുറുക്കുവഴി കീ ഏത് ടൂളിന്റേതാണ്?",
    "options": [
      { "text": "Gradient tool", "isCorrect": true },
      { "text": "Grid tool", "isCorrect": false },
      { "text": "Group tool", "isCorrect": false },
      { "text": "Guide tool", "isCorrect": false }
    ]
  },
  {
    "question": "കാൻവാസിലെ (canvas) എല്ലാം തിരഞ്ഞെടുക്കാനുള്ള കുറുക്കുവഴി ഏതാണ്?",
    "options": [
      { "text": "Ctrl + A", "isCorrect": true },
      { "text": "Shift + A", "isCorrect": false },
      { "text": "Alt + A", "isCorrect": false },
      { "text": "Ctrl + Shift + A", "isCorrect": false }
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
