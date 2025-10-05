document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "When changing the font in the Text Properties window, what must be selected first?",
    "options": [
      { "text": "The canvas", "isCorrect": false },
      { "text": "The entire text (Ctrl + A)", "isCorrect": true },
      { "text": "The shape", "isCorrect": false },
      { "text": "The file name", "isCorrect": false }
    ]
  },
  {
    "question": "Which option helps ensure even spacing between lines in a paragraph?",
    "options": [
      { "text": "Font Size", "isCorrect": false },
      { "text": "Justify Alignment", "isCorrect": false },
      { "text": "Auto Line Spacing", "isCorrect": true },
      { "text": "Drop Cap", "isCorrect": false }
    ]
  },
  {
    "question": "To make a heading stand out, which Text Properties feature would you use?",
    "options": [
      { "text": "Font shadow and size", "isCorrect": true },
      { "text": "Line tool", "isCorrect": false },
      { "text": "Insert shape", "isCorrect": false },
      { "text": "Image frame", "isCorrect": false }
    ]
  },
  {
    "question": "What alignment option should you choose to spread text evenly across a column?",
    "options": [
      { "text": "Center", "isCorrect": false },
      { "text": "Right", "isCorrect": false },
      { "text": "Justify", "isCorrect": true },
      { "text": "Left", "isCorrect": false }
    ]
  },
  {
    "question": "What is the purpose of an Image Frame in Scribus?",
    "options": [
      { "text": "To draw borders", "isCorrect": false },
      { "text": "To insert images into a layout", "isCorrect": true },
      { "text": "To create a text box", "isCorrect": false },
      { "text": "To color shapes", "isCorrect": false }
    ]
  },
  {
    "question": "What must be done before an image can be inserted into an Image Frame?",
    "options": [
      { "text": "Convert it to PDF", "isCorrect": false },
      { "text": "Resize the image", "isCorrect": false },
      { "text": "Draw the image frame", "isCorrect": true },
      { "text": "Type text inside", "isCorrect": false }
    ]
  },
  {
    "question": "Which menu option is used to insert an image into an Image Frame?",
    "options": [
      { "text": "File → Open", "isCorrect": false },
      { "text": "Content → Get Image", "isCorrect": true },
      { "text": "Insert → Image", "isCorrect": false },
      { "text": "Tools → Picture", "isCorrect": false }
    ]
  },
  {
    "question": "After inserting an image, what option ensures the image fits properly inside the frame?",
    "options": [
      { "text": "Fit to page", "isCorrect": false },
      { "text": "Shrink to fit", "isCorrect": false },
      { "text": "Image → Adjust Image to Frame", "isCorrect": true },
      { "text": "Auto Resize", "isCorrect": false }
    ]
  },
  {
    "question": "To ensure image clarity, which setting should be enabled in Preview Settings?",
    "options": [
      { "text": "Fast Display", "isCorrect": false },
      { "text": "Print Mode", "isCorrect": false },
      { "text": "Full Resolution", "isCorrect": true },
      { "text": "Vector Display", "isCorrect": false }
    ]
  },
  {
    "question": "What is the function of the “Convert to Image Frame” option?",
    "options": [
      { "text": "Converts shape into image format", "isCorrect": false },
      { "text": "Turns a shape into a frame that can hold an image", "isCorrect": true },
      { "text": "Changes a text frame to image", "isCorrect": false },
      { "text": "Resets image size", "isCorrect": false }
    ]
  },
  {
    "question": "How can you overlay a QR code onto the newspaper design in Scribus?",
    "options": [
      { "text": "Draw using Shape tool", "isCorrect": false },
      { "text": "Insert as image", "isCorrect": false },
      { "text": "Use the Barcode icon and select QR Code", "isCorrect": true },
      { "text": "Paste from clipboard", "isCorrect": false }
    ]
  },
  {
    "question": "What must be entered in the QR code settings to make it functional?",
    "options": [
      { "text": "The name of the newspaper", "isCorrect": false },
      { "text": "A sentence or caption", "isCorrect": false },
      { "text": "The schoolwiki URL or page address", "isCorrect": true },
      { "text": "A barcode number", "isCorrect": false }
    ]
  },
  {
    "question": "What happens after generating a QR Code using the Barcode Tool?",
    "options": [
      { "text": "A text frame is created", "isCorrect": false },
      { "text": "The QR code opens in browser", "isCorrect": false },
      { "text": "An image frame appears to place the QR code", "isCorrect": true },
      { "text": "Nothing until page is refreshed", "isCorrect": false }
    ]
  },
  {
    "question": "How can you bring an image to the top layer above other objects?",
    "options": [
      { "text": "Use Shape Tool", "isCorrect": false },
      { "text": "Use Level → Raise to Top", "isCorrect": true },
      { "text": "Use Text Properties", "isCorrect": false },
      { "text": "Reinsert the image", "isCorrect": false }
    ]
  },
  {
    "question": "Why is the front page of a newspaper considered important?",
    "options": [
      { "text": "It shows the table of contents", "isCorrect": false },
      { "text": "It contains ads only", "isCorrect": false },
      { "text": "It acts as the “window” showcasing key news", "isCorrect": true },
      { "text": "It is used for editing articles", "isCorrect": false }
    ]
  },
  {
    "question": "What type of content is typically found on the front page?",
    "options": [
      { "text": "Entire news articles", "isCorrect": false },
      { "text": "Classifieds", "isCorrect": false },
      { "text": "Brief news snippets and images", "isCorrect": true },
      { "text": "Cartoons only", "isCorrect": false }
    ]
  },
  {
    "question": "What layout feature helps organize text and images clearly on the front page?",
    "options": [
      { "text": "Watermark", "isCorrect": false },
      { "text": "Guides", "isCorrect": false },
      { "text": "Columns", "isCorrect": true },
      { "text": "Animation", "isCorrect": false }
    ]
  },
  {
    "question": "How should the title of a school newspaper be presented?",
    "options": [
      { "text": "In small plain text", "isCorrect": false },
      { "text": "In an image frame", "isCorrect": false },
      { "text": "In a bold, visually striking text frame", "isCorrect": true },
      { "text": "In a table", "isCorrect": false }
    ]
  },
  {
    "question": "What can be included under the newspaper title to provide additional info?",
    "options": [
      { "text": "Captions", "isCorrect": false },
      { "text": "Footnotes", "isCorrect": false },
      { "text": "Subtitles like school name and date", "isCorrect": true },
      { "text": "Image gallery", "isCorrect": false }
    ]
  },
  {
    "question": "Which tool is used to place the school’s email or subtitle below the heading?",
    "options": [
      { "text": "Line Tool and Text Frame", "isCorrect": true },
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
