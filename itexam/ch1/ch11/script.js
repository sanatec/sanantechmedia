document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "What is the main function of Inkscape?",
    "options": [
      { "text": "Photo editing", "isCorrect": false },
      { "text": "3D modeling", "isCorrect": false },
      { "text": "Vector graphic designing", "isCorrect": true },
      { "text": "Video editing", "isCorrect": false }
    ]
  },
  {
    "question": "Which of the following is a vector image format?",
    "options": [
      { "text": "JPG", "isCorrect": false },
      { "text": "PNG", "isCorrect": false },
      { "text": "SVG", "isCorrect": true },
      { "text": "BMP", "isCorrect": false }
    ]
  },
  {
    "question": "What is a major benefit of using vector images?",
    "options": [
      { "text": "Faster animations", "isCorrect": false },
      { "text": "They don't require software", "isCorrect": false },
      { "text": "Can be resized without losing quality", "isCorrect": true },
      { "text": "Use more disk space", "isCorrect": false }
    ]
  },
  {
    "question": "What type of tool is GIMP?",
    "options": [
      { "text": "Vector graphic editor", "isCorrect": false },
      { "text": "Raster image editor", "isCorrect": true },
      { "text": "Word processor", "isCorrect": false },
      { "text": "Audio editor", "isCorrect": false }
    ]
  },
  {
    "question": "Which software is used for creating scalable vector graphics?",
    "options": [
      { "text": "Paint", "isCorrect": false },
      { "text": "GIMP", "isCorrect": false },
      { "text": "Inkscape", "isCorrect": true },
      { "text": "Krita", "isCorrect": false }
    ]
  },
  {
    "question": "What shortcut is used to open Document Properties in Inkscape?",
    "options": [
      { "text": "Ctrl + D", "isCorrect": false },
      { "text": "Shift + Ctrl + D", "isCorrect": true },
      { "text": "Alt + P", "isCorrect": false },
      { "text": "Ctrl + Shift + N", "isCorrect": false }
    ]
  },
  {
    "question": "Which key must be held to proportionally resize objects in Inkscape?",
    "options": [
      { "text": "Alt", "isCorrect": false },
      { "text": "Ctrl", "isCorrect": true },
      { "text": "Shift", "isCorrect": false },
      { "text": "Tab", "isCorrect": false }
    ]
  },
  {
    "question": "What does the Bezier Tool allow you to do?",
    "options": [
      { "text": "Add filters", "isCorrect": false },
      { "text": "Type text", "isCorrect": false },
      { "text": "Draw curves and lines", "isCorrect": true },
      { "text": "Move objects", "isCorrect": false }
    ]
  },
  {
    "question": "What is the function of the 'Create Rectangles & Squares' tool in Inkscape?",
    "options": [
      { "text": "Rotate objects", "isCorrect": false },
      { "text": "Draw squares", "isCorrect": true },
      { "text": "Add text", "isCorrect": false },
      { "text": "Remove background", "isCorrect": false }
    ]
  },
  {
    "question": "Which file formats does Inkscape support?",
    "options": [
      { "text": "DOCX, XLSX", "isCorrect": false },
      { "text": "PNG, JPG", "isCorrect": false },
      { "text": "SVG, AI, EPS, PDF, PS, PNG", "isCorrect": true },
      { "text": "TXT, CSV", "isCorrect": false }
    ]
  },
  {
    "question": "What is the purpose of the Fill and Stroke tool in Inkscape?",
    "options": [
      { "text": "Add animation", "isCorrect": false },
      { "text": "Adjust transparency", "isCorrect": false },
      { "text": "Format shapes with color and border", "isCorrect": true },
      { "text": "Resize images", "isCorrect": false }
    ]
  },
  {
    "question": "What does the X button at the left of the color palette do?",
    "options": [
      { "text": "Fills with red", "isCorrect": false },
      { "text": "Fills with black", "isCorrect": false },
      { "text": "Removes color", "isCorrect": true },
      { "text": "Exports design", "isCorrect": false }
    ]
  },
  {
    "question": "How can you apply a gradient in Inkscape?",
    "options": [
      { "text": "Use blur tool", "isCorrect": false },
      { "text": "Use opacity", "isCorrect": false },
      { "text": "Use Gradient tool (G)", "isCorrect": true },
      { "text": "Use stroke path", "isCorrect": false }
    ]
  },
  {
    "question": "What kind of messages do digital posters often aim to convey?",
    "options": [
      { "text": "News articles", "isCorrect": false },
      { "text": "Entertainment", "isCorrect": false },
      { "text": "Visual communication ideas", "isCorrect": true },
      { "text": "Personal emails", "isCorrect": false }
    ]
  },
  {
    "question": "What key is used to bring an object to the top layer in Inkscape?",
    "options": [
      { "text": "Ctrl", "isCorrect": false },
      { "text": "Pg Up", "isCorrect": true },
      { "text": "Shift", "isCorrect": false },
      { "text": "Esc", "isCorrect": false }
    ]
  },
  {
    "question": "What is the purpose of grouping elements in a design?",
    "options": [
      { "text": "Lock the design", "isCorrect": false },
      { "text": "Export the file", "isCorrect": false },
      { "text": "Move and scale multiple objects together", "isCorrect": true },
      { "text": "Change colors", "isCorrect": false }
    ]
  },
  {
    "question": "What does Inkscape use to create 3D effects?",
    "options": [
      { "text": "Vector math", "isCorrect": false },
      { "text": "Stroke fill", "isCorrect": false },
      { "text": "Blur and gradients", "isCorrect": true },
      { "text": "Noise filter", "isCorrect": false }
    ]
  },
  {
    "question": "What is the best resolution to export a digital poster for print?",
    "options": [
      { "text": "72 dpi", "isCorrect": false },
      { "text": "96 dpi", "isCorrect": false },
      { "text": "150 dpi", "isCorrect": false },
      { "text": "300 dpi", "isCorrect": true }
    ]
  },
  {
    "question": "What tool is used to draw and edit freehand lines?",
    "options": [
      { "text": "Bezier Tool", "isCorrect": false },
      { "text": "Pencil Tool", "isCorrect": true },
      { "text": "Text Tool", "isCorrect": false },
      { "text": "Rectangle Tool", "isCorrect": false }
    ]
  },
  {
    "question": "What software mentioned in the document is best for drawing simple shapes and editing them?",
    "options": [
      { "text": "WordPad", "isCorrect": false },
      { "text": "GIMP", "isCorrect": false },
      { "text": "Inkscape", "isCorrect": true },
      { "text": "Excel", "isCorrect": false }
    ]
  },
  {
    "question": "What is the purpose of the 'Path' menu in Inkscape?",
    "options": [
      { "text": "Apply filters", "isCorrect": false },
      { "text": "Edit node points of shapes", "isCorrect": true },
      { "text": "Add text effects", "isCorrect": false },
      { "text": "Change document size", "isCorrect": false }
    ]
  },
  {
    "question": "Which tool allows you to create stars and polygons in Inkscape?",
    "options": [
      { "text": "Pencil Tool", "isCorrect": false },
      { "text": "Rectangle Tool", "isCorrect": false },
      { "text": "Stars and Polygons Tool", "isCorrect": true },
      { "text": "Bezier Tool", "isCorrect": false }
    ]
  },
  {
    "question": "What does 'SVG' stand for?",
    "options": [
      { "text": "Standard Vector Graphics", "isCorrect": false },
      { "text": "Scalable Vector Graphics", "isCorrect": true },
      { "text": "Simple Visual Graphics", "isCorrect": false },
      { "text": "Structured Vector Geometry", "isCorrect": false }
    ]
  },
  {
    "question": "How do you create a duplicate of an object in Inkscape?",
    "options": [
      { "text": "Ctrl + X", "isCorrect": false },
      { "text": "Ctrl + Z", "isCorrect": false },
      { "text": "Ctrl + D", "isCorrect": true },
      { "text": "Ctrl + S", "isCorrect": false }
    ]
  },
  {
    "question": "What is the function of the 'Text Tool' in Inkscape?",
    "options": [
      { "text": "Draw shapes", "isCorrect": false },
      { "text": "Add and edit text", "isCorrect": true },
      { "text": "Apply gradients", "isCorrect": false },
      { "text": "Resize objects", "isCorrect": false }
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
