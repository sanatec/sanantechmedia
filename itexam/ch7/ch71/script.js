document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "What is Stellarium primarily designed to simulate?",
    "options": [
      { "text": "Molecular structures", "isCorrect": false },
      { "text": "Geographic landscapes", "isCorrect": false },
      { "text": "Views of the sky and celestial bodies", "isCorrect": true },
      { "text": "Algebraic equations", "isCorrect": false }
    ]
  },
  {
    "question": "The phenomenon where the sun is visible at midnight is experienced in regions:",
    "options": [
      { "text": "Close to the equator", "isCorrect": false },
      { "text": "Beyond the Arctic and Antarctic Circles", "isCorrect": true },
      { "text": "In all coastal cities", "isCorrect": false },
      { "text": "Only in the Southern Hemisphere", "isCorrect": false }
    ]
  },
  {
    "question": "Which key opens the Location Window in Stellarium?",
    "options": [
      { "text": "F3", "isCorrect": false },
      { "text": "F4", "isCorrect": false },
      { "text": "F5", "isCorrect": false },
      { "text": "F6", "isCorrect": true }
    ]
  },
  {
    "question": "Which key opens the Date/Time Window in Stellarium?",
    "options": [
      { "text": "F3", "isCorrect": false },
      { "text": "F4", "isCorrect": false },
      { "text": "F5", "isCorrect": true },
      { "text": "F6", "isCorrect": false }
    ]
  },
  {
    "question": "The city of Tromso, used to observe the midnight sun, is located in:",
    "options": [
      { "text": "Finland", "isCorrect": false },
      { "text": "Russia", "isCorrect": false },
      { "text": "Norway", "isCorrect": true },
      { "text": "Canada", "isCorrect": false }
    ]
  },
  {
    "question": "The \"White Night Festival\" is famously celebrated in:",
    "options": [
      { "text": "Tromso, Norway", "isCorrect": false },
      { "text": "St. Petersburg, Russia", "isCorrect": true },
      { "text": "Anchorage, USA", "isCorrect": false },
      { "text": "Sydney, Australia", "isCorrect": false }
    ]
  },
  {
    "question": "During the summer solstice in the Northern Hemisphere (around June 21st), the Sun is directly overhead at the:",
    "options": [
      { "text": "Equator", "isCorrect": false },
      { "text": "Tropic of Capricorn", "isCorrect": false },
      { "text": "Tropic of Cancer", "isCorrect": true },
      { "text": "North Pole", "isCorrect": false }
    ]
  },
  {
    "question": "Which key opens the Search Window in Stellarium?",
    "options": [
      { "text": "F3", "isCorrect": true },
      { "text": "F4", "isCorrect": false },
      { "text": "F5", "isCorrect": false },
      { "text": "F6", "isCorrect": false }
    ]
  },
  {
    "question": "What does the \"Increase time speed [L]\" function in Stellarium allow you to do?",
    "options": [
      { "text": "Speed up the simulation to see celestial motion", "isCorrect": true },
      { "text": "Zoom in on a celestial object quickly", "isCorrect": false },
      { "text": "Fast-forward to the next day", "isCorrect": false },
      { "text": "Increase the brightness of stars", "isCorrect": false }
    ]
  },
  {
    "question": "The summer solstice in the Northern Hemisphere is characterized by:",
    "options": [
      { "text": "The shortest day and longest night", "isCorrect": false },
      { "text": "Equal day and night", "isCorrect": false },
      { "text": "The longest day and shortest night", "isCorrect": true },
      { "text": "The sun rising directly in the west", "isCorrect": false }
    ]
  },
  {
    "question": "In the context of Stellarium, what does 'FOV' stand for?",
    "options": [
      { "text": "Focus on View", "isCorrect": false },
      { "text": "Field of Vision", "isCorrect": false },
      { "text": "Field of View", "isCorrect": true },
      { "text": "Frequency of Vibration", "isCorrect": false }
    ]
  },
  {
    "question": "To return the time flow to normal after speeding it up in Stellarium, you should press:",
    "options": [
      { "text": "L", "isCorrect": false },
      { "text": "K", "isCorrect": true },
      { "text": "F5", "isCorrect": false },
      { "text": "Spacebar", "isCorrect": false }
    ]
  },
  {
    "question": "The 'polar night' is a period when:",
    "options": [
      { "text": "The sun does not set for 24 hours.", "isCorrect": false },
      { "text": "The moon is visible during the day.", "isCorrect": false },
      { "text": "The sun does not rise above the horizon.", "isCorrect": true },
      { "text": "There is continuous rainfall.", "isCorrect": false }
    ]
  },
  {
    "question": "From the text, which city is known as the \"gateway to the Arctic\"?",
    "options": [
      { "text": "Anchorage", "isCorrect": false },
      { "text": "Talmakh", "isCorrect": false },
      { "text": "Tromso", "isCorrect": true },
      { "text": "Oslo", "isCorrect": false }
    ]
  },
  {
    "question": "In Stellarium, the direction 'NE' stands for:",
    "options": [
      { "text": "North East", "isCorrect": true },
      { "text": "New Earth", "isCorrect": false },
      { "text": "Northern Eclipse", "isCorrect": false },
      { "text": "Neutral Elevation", "isCorrect": false }
    ]
  },
  {
    "question": "You want to observe the path of the Sun from the Moon's surface. What is the correct sequence in Stellarium?",
    "options": [
      { "text": "Open Location Window (F6) → Select 'Moon' under Planet → Choose a location.", "isCorrect": true },
      { "text": "Open Search Window (F3) → Type 'Moon' → Press Enter.", "isCorrect": false },
      { "text": "Open Date/Time Window (F5) → Set location to 'Moon'.", "isCorrect": false },
      { "text": "Open Sky and Viewing Options (F4) → Select 'Moon' from the Landscape tab.", "isCorrect": false }
    ]
  },
  {
    "question": "You have set your location to Tromso but the sky is dark at midnight on June 21st. What is the most likely issue?",
    "options": [
      { "text": "The time is set to 12:00 PM instead of 12:00 AM.", "isCorrect": false },
      { "text": "The year is set incorrectly.", "isCorrect": true },
      { "text": "The 'Atmosphere' rendering is turned off.", "isCorrect": false },
      { "text": "The location latitude is south of the Arctic Circle.", "isCorrect": false }
    ]
  },
  {
    "question": "After searching for the Sun, it is not visible in the sky. What should you do first?",
    "options": [
      { "text": "Close and reopen Stellarium.", "isCorrect": false },
      { "text": "Check if the time is set to nighttime.", "isCorrect": true },
      { "text": "Use the 'Increase time speed [L]' function.", "isCorrect": false },
      { "text": "Zoom out using the mouse scroll wheel.", "isCorrect": false }
    ]
  },
  {
    "question": "You need to find the exact coordinates (Latitude and Longitude) of your current observation point. Which window should you check?",
    "options": [
      { "text": "The Search Window (F3)", "isCorrect": false },
      { "text": "The Date/Time Window (F5)", "isCorrect": false },
      { "text": "The Location Window (F6)", "isCorrect": true },
      { "text": "The Sky and Viewing Options Window (F4)", "isCorrect": false }
    ]
  },
  {
    "question": "To quickly animate the Sun's movement across the sky from your location, you should:",
    "options": [
      { "text": "Continuously change the time in the Date/Time Window (F5).", "isCorrect": false },
      { "text": "Press the 'L' key three times.", "isCorrect": true },
      { "text": "Search for the Sun and press 'Enter'.", "isCorrect": false },
      { "text": "Change the location repeatedly.", "isCorrect": false }
    ]
  },
  {
    "question": "If you are in a location and want to see if the midnight sun is visible, which date should you set in Stellarium for the best chance to see it in the Northern Hemisphere?",
    "options": [
      { "text": "December 22", "isCorrect": false },
      { "text": "March 21", "isCorrect": false },
      { "text": "June 21", "isCorrect": true },
      { "text": "September 23", "isCorrect": false }
    ]
  },
  {
    "question": "You have found the Sun, but it appears stationary. Which tool will help you see its path over several hours?",
    "options": [
      { "text": "The Identify Features tool.", "isCorrect": false },
      { "text": "The Increase Time Speed (L) function.", "isCorrect": true },
      { "text": "The Reset Location List button.", "isCorrect": false },
      { "text": "The Zoom tool.", "isCorrect": false }
    ]
  },
  {
    "question": "You want to observe a celestial body other than the Sun, like the planet Venus. What is the correct procedure?",
    "options": [
      { "text": "Use the Location Window (F6) and select Venus from the planet list.", "isCorrect": false },
      { "text": "Use the Search Window (F3) and type \"Venus\".", "isCorrect": true },
      { "text": "Use the Date/Time Window (F5) and set the target to Venus.", "isCorrect": false },
      { "text": "Use the Sky and Viewing Options (F4) and enable planets.", "isCorrect": false }
    ]
  },
  {
    "question": "Based on the chapter, if you were in Alice Springs, Australia (in the Southern Hemisphere) on December 22nd, what would you likely observe?",
    "options": [
      { "text": "The shortest day of the year.", "isCorrect": false },
      { "text": "The longest day of the year.", "isCorrect": true },
      { "text": "The midnight sun.", "isCorrect": false },
      { "text": "A polar night.", "isCorrect": false }
    ]
  },
  {
    "question": "To confirm the direction (e.g., North, South-East) in which a celestial body is located in Stellarium, you should:",
    "options": [
      { "text": "Look at the information in the Search Window.", "isCorrect": false },
      { "text": "Check the cardinal direction indicators on the screen and zoom in/out if needed.", "isCorrect": true },
      { "text": "Read the data in the Location Window.", "isCorrect": false },
      { "text": "Note the time in the Date/Time Window.", "isCorrect": false }
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
