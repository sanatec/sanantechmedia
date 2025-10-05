document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
{
    "question": "What is the function of the 'Tiled Clones' feature?",
    "options": [
      { "text": "Add animation", "isCorrect": false },
      { "text": "Create repeating patterns from clones", "isCorrect": true },
      { "text": "Change document size", "isCorrect": false },
      { "text": "Format shapes", "isCorrect": false }
    ]
  },
  {
    "question": "What is the purpose of the 'Symbols' library in Inkscape?",
    "options": [
      { "text": "Add text effects", "isCorrect": false },
      { "text": "Use pre-made vector graphics", "isCorrect": true },
      { "text": "Apply gradients", "isCorrect": false },
      { "text": "Resize objects", "isCorrect": false }
    ]
  },
  {
    "question": "How do you create a drop shadow effect in Inkscape?",
    "options": [
      { "text": "Use the 'Pencil Tool'", "isCorrect": false },
      { "text": "Use the 'Gradient Tool'", "isCorrect": false },
      { "text": "Use the 'Filters' menu and drop shadow filter", "isCorrect": true },
      { "text": "Use the 'Text Tool'", "isCorrect": false }
    ]
  },
  {
    "question": "What is the function of the 'Live Path Effects' in Inkscape?",
    "options": [
      { "text": "Add animation", "isCorrect": false },
      { "text": "Apply non-destructive effects to paths", "isCorrect": true },
      { "text": "Change document size", "isCorrect": false },
      { "text": "Format shapes", "isCorrect": false }
    ]
  },
  {
    "question": "What is the purpose of the 'Document Metadata' in Inkscape?",
    "options": [
      { "text": "Add text effects", "isCorrect": false },
      { "text": "Store information about the file", "isCorrect": true },
      { "text": "Apply gradients", "isCorrect": false },
      { "text": "Resize objects", "isCorrect": false }
    ]
  },
  {
    "question": "How do you create a 3D bevel effect in Inkscape?",
    "options": [
      { "text": "Use the 'Pencil Tool'", "isCorrect": false },
      { "text": "Use the 'Gradient Tool'", "isCorrect": false },
      { "text": "Use the 'Filters' menu and bevel filter", "isCorrect": true },
      { "text": "Use the 'Text Tool'", "isCorrect": false }
    ]
  },
  {
    "question": "What is the function of the 'Export Bitmap' option?",
    "options": [
      { "text": "Add animation", "isCorrect": false },
      { "text": "Save the vector file as a raster image", "isCorrect": true },
      { "text": "Change document size", "isCorrect": false },
      { "text": "Format shapes", "isCorrect": false }
    ]
  },
  {
    "question": "What is the purpose of the 'Object Properties' panel?",
    "options": [
      { "text": "Add text effects", "isCorrect": false },
      { "text": "View and edit object attributes", "isCorrect": true },
      { "text": "Apply gradients", "isCorrect": false },
      { "text": "Resize objects", "isCorrect": false }
    ]
  },
  {
    "question": "How do you create a spiral shape in Inkscape?",
    "options": [
      { "text": "Use the 'Pencil Tool'", "isCorrect": false },
      { "text": "Use the 'Gradient Tool'", "isCorrect": false },
      { "text": "Use the 'Spiral Tool'", "isCorrect": true },
      { "text": "Use the 'Text Tool'", "isCorrect": false }
    ]
  },
  {
    "question": "What is the function of the 'Arrange' menu in Inkscape?",
    "options": [
      { "text": "Add animation", "isCorrect": false },
      { "text": "Change the stacking order of objects", "isCorrect": true },
      { "text": "Change document size", "isCorrect": false },
      { "text": "Format shapes", "isCorrect": false }
    ]
  },
  {
    "question": "What is the purpose of the 'XML Editor' in Inkscape?",
    "options": [
      { "text": "Add text effects", "isCorrect": false },
      { "text": "Edit the SVG code directly", "isCorrect": true },
      { "text": "Apply gradients", "isCorrect": false },
      { "text": "Resize objects", "isCorrect": false }
    ]
  },
  {
    "question": "How do you create a calligraphic stroke in Inkscape?",
    "options": [
      { "text": "Use the 'Pencil Tool'", "isCorrect": false },
      { "text": "Use the 'Gradient Tool'", "isCorrect": false },
      { "text": "Use the 'Calligraphy Tool'", "isCorrect": true },
      { "text": "Use the 'Text Tool'", "isCorrect": false }
    ]
  },
  {
    "question": "What is the function of the 'Fill Rules' in Inkscape?",
    "options": [
      { "text": "Add animation", "isCorrect": false },
      { "text": "Determine how overlapping paths are filled", "isCorrect": true },
      { "text": "Change document size", "isCorrect": false },
      { "text": "Format shapes", "isCorrect": false }
    ]
  },
  {
    "question": "What is the purpose of the 'Document Units' setting?",
    "options": [
      { "text": "Add text effects", "isCorrect": false },
      { "text": "Change the measurement units for the document", "isCorrect": true },
      { "text": "Apply gradients", "isCorrect": false },
      { "text": "Resize objects", "isCorrect": false }
    ]
  },
  {
    "question": "How do you create a lens effect in Inkscape?",
    "options": [
      { "text": "Use the 'Pencil Tool'", "isCorrect": false },
      { "text": "Use the 'Gradient Tool'", "isCorrect": false },
      { "text": "Use the 'Filters' menu and lens filter", "isCorrect": true },
      { "text": "Use the 'Text Tool'", "isCorrect": false }
    ]
  },
  {
    "question": "What is the function of the 'Path Effects Editor'?",
    "options": [
      { "text": "Add animation", "isCorrect": false },
      { "text": "Edit and manage Live Path Effects", "isCorrect": true },
      { "text": "Change document size", "isCorrect": false },
      { "text": "Format shapes", "isCorrect": false }
    ]
  },
  {
    "question": "What is the purpose of the 'Rulers' in Inkscape?",
    "options": [
      { "text": "Add text effects", "isCorrect": false },
      { "text": "Measure and align objects accurately", "isCorrect": true },
      { "text": "Apply gradients", "isCorrect": false },
      { "text": "Resize objects", "isCorrect": false }
    ]
  },
  {
    "question": "How do you create a mesh gradient in Inkscape?",
    "options": [
      { "text": "Use the 'Pencil Tool'", "isCorrect": false },
      { "text": "Use the 'Gradient Tool'", "isCorrect": false },
      { "text": "Use the 'Mesh Gradient Tool'", "isCorrect": true },
      { "text": "Use the 'Text Tool'", "isCorrect": false }
    ]
  },
  {
    "question": "What is the function of the 'Display Modes' in Inkscape?",
    "options": [
      { "text": "Add animation", "isCorrect": false },
      { "text": "Change how the document is displayed", "isCorrect": true },
      { "text": "Change document size", "isCorrect": false },
      { "text": "Format shapes", "isCorrect": false }
    ]
  },
  {
    "question": "What is the purpose of the 'Extensions Manager'?",
    "options": [
      { "text": "Add text effects", "isCorrect": false },
      { "text": "Install and manage Inkscape extensions", "isCorrect": true },
      { "text": "Apply gradients", "isCorrect": false },
      { "text": "Resize objects", "isCorrect": false }
    ]
  },
  {
    "question": "How do you create a scatter effect in Inkscape?",
    "options": [
      { "text": "Use the 'Pencil Tool'", "isCorrect": false },
      { "text": "Use the 'Gradient Tool'", "isCorrect": false },
      { "text": "Use the 'Scatter Tool' from extensions", "isCorrect": true },
      { "text": "Use the 'Text Tool'", "isCorrect": false }
    ]
  },
  {
    "question": "What is the function of the 'Document Resources' dialog?",
    "options": [
      { "text": "Add animation", "isCorrect": false },
      { "text": "Manage embedded images and fonts", "isCorrect": true },
      { "text": "Change document size", "isCorrect": false },
      { "text": "Format shapes", "isCorrect": false }
    ]
  },
  {
    "question": "What is the purpose of the 'Object to Guide' command?",
    "options": [
      { "text": "Add text effects", "isCorrect": false },
      { "text": "Convert an object into a guide line", "isCorrect": true },
      { "text": "Apply gradients", "isCorrect": false },
      { "text": "Resize objects", "isCorrect": false }
    ]
  },
  {
    "question": "How do you create a 3D extrude effect in Inkscape?",
    "options": [
      { "text": "Use the 'Pencil Tool'", "isCorrect": false },
      { "text": "Use the 'Gradient Tool'", "isCorrect": false },
      { "text": "Use the 'Extensions' menu and 3D extrusion", "isCorrect": true },
      { "text": "Use the 'Text Tool'", "isCorrect": false }
    ]
  },
  {
    "question": "What is the function of the 'Path Offset' command?",
    "options": [
      { "text": "Add animation", "isCorrect": false },
      { "text": "Create a parallel path at a specified distance", "isCorrect": true },
      { "text": "Change document size", "isCorrect": false },
      { "text": "Format shapes", "isCorrect": false }
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
            playConfetti(); // This is the function that will be updated
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
     * *** MODIFICATION: Revised to use a lower, safer particle count. ***
     * Plays the confetti animation from middle to top with fewer particles.
     */
    function playConfetti() {
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 999999 };
        function randomInRange(min, max) {
            return Math.random() * (max - min) + min;
        }

        // REDUCED particle count from 200 total to a maximum of 100 total (50 for each burst)
        const count = 100; 
        const center = { x: 0.5, y: 0.4 }; 

        // Burst 1: Fewer particles, standard scalar
        confetti(Object.assign({}, defaults, {
            particleCount: count * 0.5, // 50 particles
            origin: center,
            angle: randomInRange(55, 125),
            scalar: 1.0, // Standard size
        }));

        // Burst 2: Even fewer particles, smaller scalar
        confetti(Object.assign({}, defaults, {
            particleCount: count * 0.25, // 25 particles
            origin: center,
            angle: randomInRange(55, 125),
            scalar: 0.75, // Smaller size
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
