document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "How do you create a perspective envelope effect in Inkscape?",
    "options": [
      { "text": "Use the 'Pencil Tool'", "isCorrect": false },
      { "text": "Use the 'Gradient Tool'", "isCorrect": false },
      { "text": "Use the 'Extensions' menu and envelope effect", "isCorrect": true },
      { "text": "Use the 'Text Tool'", "isCorrect": false }
    ]
  },
  {
    "question": "What is the function of the 'Path Simplify' command?",
    "options": [
      { "text": "Add animation", "isCorrect": false },
      { "text": "Reduce the number of nodes in a path", "isCorrect": true },
      { "text": "Change document size", "isCorrect": false },
      { "text": "Format shapes", "isCorrect": false }
    ]
  },
  {
    "question": "What is the purpose of the 'Export Selection' option?",
    "options": [
      { "text": "Add text effects", "isCorrect": false },
      { "text": "Export only the selected objects", "isCorrect": true },
      { "text": "Apply gradients", "isCorrect": false },
      { "text": "Resize objects", "isCorrect": false }
    ]
  },
  {
    "question": "How do you create a 3D rotation effect in Inkscape?",
    "options": [
      { "text": "Use the 'Pencil Tool'", "isCorrect": false },
      { "text": "Use the 'Gradient Tool'", "isCorrect": false },
      { "text": "Use the 'Extensions' menu and 3D rotation", "isCorrect": true },
      { "text": "Use the 'Text Tool'", "isCorrect": false }
    ]
  },
  {
    "question": "What is the function of the 'Path Reverse' command?",
    "options": [
      { "text": "Add animation", "isCorrect": false },
      { "text": "Reverse the direction of a path", "isCorrect": true },
      { "text": "Change document size", "isCorrect": false },
      { "text": "Format shapes", "isCorrect": false }
    ]
  },
  {
    "question": "What is the purpose of the 'Save As Template' option?",
    "options": [
      { "text": "Add text effects", "isCorrect": false },
      { "text": "Save the document as a template for future use", "isCorrect": true },
      { "text": "Apply gradients", "isCorrect": false },
      { "text": "Resize objects", "isCorrect": false }
    ]
  },
  {
    "question": "How do you create a 3D shadow effect in Inkscape?",
    "options": [
      { "text": "Use the 'Pencil Tool'", "isCorrect": false },
      { "text": "Use the 'Gradient Tool'", "isCorrect": false },
      { "text": "Use the 'Filters' menu and 3D shadow", "isCorrect": true },
      { "text": "Use the 'Text Tool'", "isCorrect": false }
    ]
  },
  {
    "question": "Which shortcut key is used to create rectangles and squares in Inkscape?",
    "options": [
      { "text": "S", "isCorrect": false },
      { "text": "R", "isCorrect": true },
      { "text": "E", "isCorrect": false },
      { "text": "T", "isCorrect": false }
    ]
  },
  {
    "question": "What is the shortcut to draw circles, ellipses, and arcs in Inkscape?",
    "options": [
      { "text": "C", "isCorrect": false },
      { "text": "O", "isCorrect": false },
      { "text": "E", "isCorrect": true },
      { "text": "R", "isCorrect": false }
    ]
  },
  {
    "question": "Which key is used to create and edit text objects?",
    "options": [
      { "text": "T", "isCorrect": true },
      { "text": "B", "isCorrect": false },
      { "text": "N", "isCorrect": false },
      { "text": "P", "isCorrect": false }
    ]
  },
  {
    "question": "The shortcut to open the Document Properties window is:",
    "options": [
      { "text": "Ctrl + D", "isCorrect": false },
      { "text": "Shift + Ctrl + D", "isCorrect": true },
      { "text": "Ctrl + P", "isCorrect": false },
      { "text": "Shift + D", "isCorrect": false }
    ]
  },
  {
    "question": "What is the shortcut key for the Bezier curve and straight lines tool?",
    "options": [
      { "text": "B", "isCorrect": true },
      { "text": "E", "isCorrect": false },
      { "text": "S", "isCorrect": false },
      { "text": "D", "isCorrect": false }
    ]
  },
  {
    "question": "How can you open the Align and Distribute window quickly?",
    "options": [
      { "text": "Ctrl + A", "isCorrect": false },
      { "text": "Shift + A", "isCorrect": false },
      { "text": "Shift + Ctrl + A", "isCorrect": true },
      { "text": "Ctrl + Shift + D", "isCorrect": false }
    ]
  },
  {
    "question": "Which shortcut is used to select and transform objects?",
    "options": [
      { "text": "T", "isCorrect": false },
      { "text": "S", "isCorrect": true },
      { "text": "E", "isCorrect": false },
      { "text": "G", "isCorrect": false }
    ]
  },
  {
    "question": "Pressing which key will allow you to draw freehand lines?",
    "options": [
      { "text": "B", "isCorrect": false },
      { "text": "P", "isCorrect": true },
      { "text": "E", "isCorrect": false },
      { "text": "T", "isCorrect": false }
    ]
  },
  {
    "question": "The shortcut key to duplicate an object is:",
    "options": [
      { "text": "Ctrl + C", "isCorrect": false },
      { "text": "Ctrl + X", "isCorrect": false },
      { "text": "Ctrl + D", "isCorrect": true },
      { "text": "Ctrl + G", "isCorrect": false }
    ]
  },
  {
    "question": "To group selected objects, you press:",
    "options": [
      { "text": "Ctrl + D", "isCorrect": false },
      { "text": "Ctrl + G", "isCorrect": true },
      { "text": "Shift + G", "isCorrect": false },
      { "text": "Alt + G", "isCorrect": false }
    ]
  },
  {
    "question": "Which tool is activated by pressing the shortcut key ‘N’ in Inkscape?",
    "options": [
      { "text": "Create Text", "isCorrect": false },
      { "text": "Edit Path by Nodes", "isCorrect": true },
      { "text": "Create Rectangle", "isCorrect": false },
      { "text": "Draw Circles", "isCorrect": false }
    ]
  },
  {
    "question": "What does the shortcut ‘Ctrl + S’ do in Inkscape?",
    "options": [
      { "text": "Save the file", "isCorrect": true },
      { "text": "Select an object", "isCorrect": false },
      { "text": "Scale the object", "isCorrect": false },
      { "text": "Open a new document", "isCorrect": false }
    ]
  },
  {
    "question": "Which shortcut is used to open the Export PNG Image window?",
    "options": [
      { "text": "Ctrl + E", "isCorrect": false },
      { "text": "Shift + Ctrl + E", "isCorrect": true },
      { "text": "Alt + E", "isCorrect": false },
      { "text": "Ctrl + Shift + P", "isCorrect": false }
    ]
  },
  {
    "question": "To bring an object one step forward in the layer stack, you press:",
    "options": [
      { "text": "PgUp", "isCorrect": true },
      { "text": "PgDn", "isCorrect": false },
      { "text": "Ctrl + PgUp", "isCorrect": false },
      { "text": "Shift + PgDn", "isCorrect": false }
    ]
  },
  {
    "question": "Which shortcut key flips an object horizontally?",
    "options": [
      { "text": "H", "isCorrect": true },
      { "text": "Shift + H", "isCorrect": false },
      { "text": "Ctrl + H", "isCorrect": false },
      { "text": "No direct shortcut, use toolbar", "isCorrect": false }
    ]
  },
  {
    "question": "What happens if you press Ctrl + Z in Inkscape?",
    "options": [
      { "text": "Redo the last action", "isCorrect": false },
      { "text": "Zoom in", "isCorrect": false },
      { "text": "Undo the last action", "isCorrect": true },
      { "text": "Save the document", "isCorrect": false }
    ]
  },
  {
    "question": "Which shortcut will you use to zoom in to a selected area?",
    "options": [
      { "text": "Z", "isCorrect": true },
      { "text": "Shift + Z", "isCorrect": false },
      { "text": "Ctrl + Z", "isCorrect": false },
      { "text": "Ctrl + Shift + Z", "isCorrect": false }
    ]
  },
  {
    "question": "What is the shortcut to open the Fill and Stroke window?",
    "options": [
      { "text": "Ctrl + F", "isCorrect": false },
      { "text": "Shift + Ctrl + F", "isCorrect": true },
      { "text": "Alt + F", "isCorrect": false },
      { "text": "Ctrl + Shift + S", "isCorrect": false }
    ]
  },
  {
    "question": "Which tool's shortcut key is 'G' in Inkscape?",
    "options": [
      { "text": "Gradient tool", "isCorrect": true },
      { "text": "Grid tool", "isCorrect": false },
      { "text": "Group tool", "isCorrect": false },
      { "text": "Guide tool", "isCorrect": false }
    ]
  },
  {
    "question": "What is the shortcut to select everything on the canvas?",
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
        // Display score as an integer since it's now 1 or 0 per question
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
        
        // In single-choice, we enable submit once *any* option is selected.
        if (!hasBeenSubmitted) {
            // Initially disable Submit button
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
                // *** MODIFICATION: Use the new single-selection logic ***
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
     * *** MODIFICATION: New function for single selection ***
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
        
        // 3. Enable next button (since one option is selected)
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
     * *** MODIFICATION: Simplified scoring for single MCQ ***
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
        // User Answers only stores the selected index (or -1 if none) and the score
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
     * *** MODIFICATION: Simplified feedback for single MCQ ***
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
            // Note: Use 'error' class for all 0-point answers (no partial score in single MCQ)
        }
    }

    /**
     * Plays the confetti animation from middle to top. (Unchanged)
     */
    function playConfetti() {
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 999999 };
        function randomInRange(min, max) {
            return Math.random() * (max - min) + min;
        }

        const count = 200;
        const center = { x: 0.5, y: 0.4 }; 

        confetti(Object.assign({}, defaults, {
            particleCount: count * 0.25,
            origin: center,
            angle: randomInRange(55, 125),
            scalar: 1.2,
        }));

        confetti(Object.assign({}, defaults, {
            particleCount: count * 0.75,
            origin: center,
            angle: randomInRange(55, 125),
            scalar: 0.75,
        }));
    }

    /**
     * Handles the 'Back' button click. (Unchanged)
     */
    function handleBack() {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            loadQuestion();
        }
    }

    /**
     * Switches to the Review Screen and generates the review content.
     * Note: The scoring display for review is updated to show X/1 instead of X/1.0
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
