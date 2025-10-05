document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "What does 'dpi' stand for in digital imaging?",
    "options": [
      { "text": "Dots per inch", "isCorrect": true },
      { "text": "Digital pixels interface", "isCorrect": false },
      { "text": "Dynamic picture integrity", "isCorrect": false },
      { "text": "Data processing input", "isCorrect": false }
    ]
  },
  {
    "question": "Which Inkscape tool is used to select and move objects?",
    "options": [
      { "text": "Bezier Tool", "isCorrect": false },
      { "text": "Pencil Tool", "isCorrect": false },
      { "text": "Select Tool", "isCorrect": true },
      { "text": "Gradient Tool", "isCorrect": false }
    ]
  },
  {
    "question": "What is the purpose of layers in Inkscape?",
    "options": [
      { "text": "Add animation", "isCorrect": false },
      { "text": "Organize and manage objects", "isCorrect": true },
      { "text": "Apply filters", "isCorrect": false },
      { "text": "Change document size", "isCorrect": false }
    ]
  },
  {
    "question": "What is the function of the 'Align and Distribute' panel?",
    "options": [
      { "text": "Add text effects", "isCorrect": false },
      { "text": "Format shapes", "isCorrect": false },
      { "text": "Position and space objects", "isCorrect": true },
      { "text": "Apply gradients", "isCorrect": false }
    ]
  },
  {
    "question": "Which keyboard shortcut is used to save a file in Inkscape?",
    "options": [
      { "text": "Ctrl + X", "isCorrect": false },
      { "text": "Ctrl + Z", "isCorrect": false },
      { "text": "Ctrl + D", "isCorrect": false },
      { "text": "Ctrl + S", "isCorrect": true }
    ]
  },
  {
    "question": "What is the purpose of the 'Zoom Tool' in Inkscape?",
    "options": [
      { "text": "Rotate objects", "isCorrect": false },
      { "text": "Resize objects", "isCorrect": false },
      { "text": "Magnify or reduce the view", "isCorrect": true },
      { "text": "Apply filters", "isCorrect": false }
    ]
  },
  {
    "question": "How do you create a circle or ellipse in Inkscape?",
    "options": [
      { "text": "Rectangle Tool", "isCorrect": false },
      { "text": "Bezier Tool", "isCorrect": false },
      { "text": "Ellipse Tool", "isCorrect": true },
      { "text": "Pencil Tool", "isCorrect": false }
    ]
  },
  {
    "question": "What is the function of the 'Node Tool' in Inkscape?",
    "options": [
      { "text": "Add text", "isCorrect": false },
      { "text": "Edit nodes of paths and shapes", "isCorrect": true },
      { "text": "Apply gradients", "isCorrect": false },
      { "text": "Resize objects", "isCorrect": false }
    ]
  },
  {
    "question": "What is the purpose of the 'Object' menu in Inkscape?",
    "options": [
      { "text": "Apply filters", "isCorrect": false },
      { "text": "Manipulate objects", "isCorrect": true },
      { "text": "Add text effects", "isCorrect": false },
      { "text": "Change document size", "isCorrect": false }
    ]
  },
  {
    "question": "What is the function of the 'Filters' menu in Inkscape?",
    "options": [
      { "text": "Add animation", "isCorrect": false },
      { "text": "Apply visual effects to objects", "isCorrect": true },
      { "text": "Change document size", "isCorrect": false },
      { "text": "Format shapes", "isCorrect": false }
    ]
  },
  {
    "question": "What is the purpose of the 'Extension' menu in Inkscape?",
    "options": [
      { "text": "Add text effects", "isCorrect": false },
      { "text": "Add extra functionality", "isCorrect": true },
      { "text": "Apply gradients", "isCorrect": false },
      { "text": "Resize objects", "isCorrect": false }
    ]
  },
  {
    "question": "How do you rotate an object in Inkscape?",
    "options": [
      { "text": "Use the 'Select Tool' and rotate handles", "isCorrect": true },
      { "text": "Use the 'Gradient Tool'", "isCorrect": false },
      { "text": "Use the 'Pencil Tool'", "isCorrect": false },
      { "text": "Use the 'Text Tool'", "isCorrect": false }
    ]
  },
  {
    "question": "What is the function of the 'Stroke Style' in the 'Fill and Stroke' panel?",
    "options": [
      { "text": "Add text effects", "isCorrect": false },
      { "text": "Adjust the border of a shape", "isCorrect": true },
      { "text": "Apply gradients", "isCorrect": false },
      { "text": "Change document size", "isCorrect": false }
    ]
  },
  {
    "question": "What is the purpose of the 'Opacity' setting in Inkscape?",
    "options": [
      { "text": "Add animation", "isCorrect": false },
      { "text": "Adjust the transparency of an object", "isCorrect": true },
      { "text": "Change document size", "isCorrect": false },
      { "text": "Format shapes", "isCorrect": false }
    ]
  },
  {
    "question": "How do you create a new document in Inkscape?",
    "options": [
      { "text": "Ctrl + X", "isCorrect": false },
      { "text": "Ctrl + Z", "isCorrect": false },
      { "text": "Ctrl + N", "isCorrect": true },
      { "text": "Ctrl + S", "isCorrect": false }
    ]
  },
  {
    "question": "What is the function of the 'Color Picker Tool' in Inkscape?",
    "options": [
      { "text": "Add text effects", "isCorrect": false },
      { "text": "Select colors from the canvas", "isCorrect": true },
      { "text": "Apply gradients", "isCorrect": false },
      { "text": "Resize objects", "isCorrect": false }
    ]
  },
  {
    "question": "What is the purpose of the 'Grid' in Inkscape?",
    "options": [
      { "text": "Add animation", "isCorrect": false },
      { "text": "Align and position objects accurately", "isCorrect": true },
      { "text": "Change document size", "isCorrect": false },
      { "text": "Format shapes", "isCorrect": false }
    ]
  },
  {
    "question": "How do you flip an object horizontally or vertically in Inkscape?",
    "options": [
      { "text": "Use the 'Pencil Tool'", "isCorrect": false },
      { "text": "Use the 'Gradient Tool'", "isCorrect": false },
      { "text": "Use the 'Object' menu and flip options", "isCorrect": true },
      { "text": "Use the 'Text Tool'", "isCorrect": false }
    ]
  },
  {
    "question": "What is the function of the 'Convert Object to Path' command?",
    "options": [
      { "text": "Add text effects", "isCorrect": false },
      { "text": "Change shapes into editable paths", "isCorrect": true },
      { "text": "Apply gradients", "isCorrect": false },
      { "text": "Resize objects", "isCorrect": false }
    ]
  },
  {
    "question": "What is the purpose of the 'Clones' in Inkscape?",
    "options": [
      { "text": "Add animation", "isCorrect": false },
      { "text": "Create linked copies of objects", "isCorrect": true },
      { "text": "Change document size", "isCorrect": false },
      { "text": "Format shapes", "isCorrect": false }
    ]
  },
  {
    "question": "How do you create a pattern fill in Inkscape?",
    "options": [
      { "text": "Use the 'Text Tool'", "isCorrect": false },
      { "text": "Use the 'Gradient Tool'", "isCorrect": false },
      { "text": "Use the 'Fill and Stroke' panel, pattern tab", "isCorrect": true },
      { "text": "Use the 'Pencil Tool'", "isCorrect": false }
    ]
  },
  {
    "question": "What is the purpose of the 'Trace Bitmap' function?",
    "options": [
      { "text": "Add text effects", "isCorrect": false },
      { "text": "Convert raster images to vector graphics", "isCorrect": true },
      { "text": "Apply gradients", "isCorrect": false },
      { "text": "Resize objects", "isCorrect": false }
    ]
  },
  {
    "question": "What is the function of the 'Boolean Operations' in the 'Path' menu?",
    "options": [
      { "text": "Add animation", "isCorrect": false },
      { "text": "Combine or subtract shapes", "isCorrect": true },
      { "text": "Change document size", "isCorrect": false },
      { "text": "Format shapes", "isCorrect": false }
    ]
  },
  {
    "question": "What is the purpose of the 'Guides' in Inkscape?",
    "options": [
      { "text": "Add text effects", "isCorrect": false },
      { "text": "Align objects with non-printing lines", "isCorrect": true },
      { "text": "Apply gradients", "isCorrect": false },
      { "text": "Resize objects", "isCorrect": false }
    ]
  },
  {
    "question": "How do you create a perspective effect in Inkscape?",
    "options": [
      { "text": "Use the 'Pencil Tool'", "isCorrect": false },
      { "text": "Use the 'Gradient Tool'", "isCorrect": false },
      { "text": "Use the 'Extensions' menu and perspective effect", "isCorrect": true },
      { "text": "Use the 'Text Tool'", "isCorrect": false }
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
