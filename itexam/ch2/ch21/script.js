document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "What is the primary goal of page design in a newspaper?",
    "options": [
      { "text": "To print in color", "isCorrect": false },
      { "text": "To reduce printing cost", "isCorrect": false },
      { "text": "To enhance effective communication", "isCorrect": true },
      { "text": "To add advertisements", "isCorrect": false }
    ]
  },
  {
    "question": "Which of the following software is not a DTP tool?",
    "options": [
      { "text": "Scribus", "isCorrect": false },
      { "text": "Microsoft Publisher", "isCorrect": false },
      { "text": "LibreOffice Writer", "isCorrect": true },
      { "text": "Adobe InDesign", "isCorrect": false }
    ]
  },
  {
    "question": "What feature of Scribus is used to include text?",
    "options": [
      { "text": "Image frame", "isCorrect": false },
      { "text": "Shape tool", "isCorrect": false },
      { "text": "Text frame", "isCorrect": true },
      { "text": "Node editor", "isCorrect": false }
    ]
  },
  {
    "question": "What is the function of the 'Drop Shadow' feature in Scribus?",
    "options": [
      { "text": "To highlight text", "isCorrect": false },
      { "text": "To create animations", "isCorrect": false },
      { "text": "To add visual depth to shapes", "isCorrect": true },
      { "text": "To duplicate objects", "isCorrect": false }
    ]
  },
  {
    "question": "What tool is used to draw rectangles or shapes in Scribus?",
    "options": [
      { "text": "Text frame", "isCorrect": false },
      { "text": "Image frame", "isCorrect": false },
      { "text": "Shape tool", "isCorrect": true },
      { "text": "Banner tool", "isCorrect": false }
    ]
  },
  {
    "question": "To change the appearance of a shape using points, you use:",
    "options": [
      { "text": "Font properties", "isCorrect": false },
      { "text": "Image settings", "isCorrect": false },
      { "text": "Node Editing", "isCorrect": true },
      { "text": "Layer manager", "isCorrect": false }
    ]
  },
  {
    "question": "What option is used in Scribus to insert an image into an Image Frame?",
    "options": [
      { "text": "Insert → Add Picture", "isCorrect": false },
      { "text": "File → Open Image", "isCorrect": false },
      { "text": "Content → Get Image", "isCorrect": true },
      { "text": "Import → Picture", "isCorrect": false }
    ]
  },
  {
    "question": "Which tab in the Properties window is used to set the number of columns in a text frame?",
    "options": [
      { "text": "Fill and Stroke", "isCorrect": false },
      { "text": "Columns & Text Distance", "isCorrect": true },
      { "text": "Font Style", "isCorrect": false },
      { "text": "Line spacing", "isCorrect": false }
    ]
  },
  {
    "question": "Which of the following is a Unicode Malayalam font?",
    "options": [
      { "text": "Arial", "isCorrect": false },
      { "text": "Manjari", "isCorrect": true },
      { "text": "Calibri", "isCorrect": false },
      { "text": "Times New Roman", "isCorrect": false }
    ]
  },
  {
    "question": "What must you do to ensure a shape appears behind other page elements?",
    "options": [
      { "text": "Set Drop Shadow", "isCorrect": false },
      { "text": "Use Send to Back in Level", "isCorrect": true },
      { "text": "Adjust Font Size", "isCorrect": false },
      { "text": "Apply Justify Alignment", "isCorrect": false }
    ]
  },
  {
    "question": "Which DTP software is open-source and widely used in Malayalam newspapers?",
    "options": [
      { "text": "QuarkXPress", "isCorrect": false },
      { "text": "Adobe Illustrator", "isCorrect": false },
      { "text": "Scribus", "isCorrect": true },
      { "text": "CorelDRAW", "isCorrect": false }
    ]
  },
  {
    "question": "What is the purpose of the ‘Preview Mode’ in Scribus?",
    "options": [
      { "text": "To edit shapes", "isCorrect": false },
      { "text": "To test print layout", "isCorrect": false },
      { "text": "To view final design without guides", "isCorrect": true },
      { "text": "To zoom in on content", "isCorrect": false }
    ]
  },
  {
    "question": "What is required before typing text in Scribus?",
    "options": [
      { "text": "Create a shape", "isCorrect": false },
      { "text": "Open a layer", "isCorrect": false },
      { "text": "Create a text frame", "isCorrect": true },
      { "text": "Change page orientation", "isCorrect": false }
    ]
  },
  {
    "question": "Which option is used to duplicate an object in Scribus?",
    "options": [
      { "text": "File → Save As", "isCorrect": false },
      { "text": "Edit → Copy", "isCorrect": false },
      { "text": "Item → Duplicate/Transform → Duplicate", "isCorrect": true },
      { "text": "View → Repeat", "isCorrect": false }
    ]
  },
  {
    "question": "What does DTP stand for?",
    "options": [
      { "text": "Digital Text Processor", "isCorrect": false },
      { "text": "Document Text Publisher", "isCorrect": false },
      { "text": "Desktop Publishing", "isCorrect": true },
      { "text": "Dynamic Text Placement", "isCorrect": false }
    ]
  },
  {
    "question": "Which Scribus feature allows flipping a shape horizontally?",
    "options": [
      { "text": "Flip tool", "isCorrect": false },
      { "text": "Properties → Level → Flip Horizontally", "isCorrect": true },
      { "text": "Text Properties → Mirror", "isCorrect": false },
      { "text": "Banner tool", "isCorrect": false }
    ]
  },
  {
    "question": "How do you adjust text to fit inside a frame if there’s overflow?",
    "options": [
      { "text": "Shrink font", "isCorrect": false },
      { "text": "Use overflow icon to link to another frame", "isCorrect": true },
      { "text": "Recreate the frame", "isCorrect": false },
      { "text": "Reduce spacing", "isCorrect": false }
    ]
  },
  {
    "question": "What element is essential on the first page of a school newspaper?",
    "options": [
      { "text": "Subheadings only", "isCorrect": false },
      { "text": "Editorial only", "isCorrect": false },
      { "text": "Title and subtitle", "isCorrect": true },
      { "text": "Advertisements", "isCorrect": false }
    ]
  },
  {
    "question": "In Scribus, how do you apply a color fill to a shape?",
    "options": [
      { "text": "Use the Fill option in Properties window", "isCorrect": true },
      { "text": "Use Font color settings", "isCorrect": false },
      { "text": "Use Shape editor", "isCorrect": false },
      { "text": "Use Background tool", "isCorrect": false }
    ]
  },
  {
    "question": "What tool is used to add straight lines in Scribus?",
    "options": [
      { "text": "Text Frame", "isCorrect": false },
      { "text": "Line Tool", "isCorrect": true },
      { "text": "Brush Tool", "isCorrect": false },
      { "text": "Ruler Tool", "isCorrect": false }
    ]
  },
  {
    "question": "Which shape transformation helps create a new design for banners?",
    "options": [
      { "text": "Drop shadow", "isCorrect": false },
      { "text": "Gradient", "isCorrect": false },
      { "text": "Node Editing", "isCorrect": true },
      { "text": "Insert Table", "isCorrect": false }
    ]
  },
  {
    "question": "To insert a QR code, which toolbar icon should be used?",
    "options": [
      { "text": "Image", "isCorrect": false },
      { "text": "Barcode", "isCorrect": true },
      { "text": "Scan", "isCorrect": false },
      { "text": "Add Link", "isCorrect": false }
    ]
  },
  {
    "question": "How can you adjust the spacing between lines in a text frame?",
    "options": [
      { "text": "Set Margin", "isCorrect": false },
      { "text": "Use Line spacing mode in Text Properties", "isCorrect": true },
      { "text": "Drag the frame", "isCorrect": false },
      { "text": "Reduce font size", "isCorrect": false }
    ]
  },
  {
    "question": "Which property in Text Frame sets spacing between columns?",
    "options": [
      { "text": "Justify Alignment", "isCorrect": false },
      { "text": "Columns & Text Distance", "isCorrect": true },
      { "text": "Contour Settings", "isCorrect": false },
      { "text": "Background Fill", "isCorrect": false }
    ]
  },
  {
    "question": "How can one adjust the text to flow around an image?",
    "options": [
      { "text": "Use Image wrap setting", "isCorrect": false },
      { "text": "Use Text Overflow option", "isCorrect": false },
      { "text": "Use Contour Line under Shape → Text Flow Around Frame", "isCorrect": true },
      { "text": "Apply Gradient", "isCorrect": false }
    ]
  },
  {
    "question": "Which of the following fonts is a Malayalam Unicode font?",
    "options": [
      { "text": "RIT Ezhuthu", "isCorrect": true },
      { "text": "Courier New", "isCorrect": false },
      { "text": "Times", "isCorrect": false },
      { "text": "Comic Sans", "isCorrect": false }
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
