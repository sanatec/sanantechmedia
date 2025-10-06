document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "What is the primary purpose of the Stellarium software?",
    "options": [
      { "text": "To create geographic resource maps", "isCorrect": false },
      { "text": "To simulate sky views and observe celestial bodies", "isCorrect": true },
      { "text": "To solve geometric equations", "isCorrect": false },
      { "text": "To analyze landslide data", "isCorrect": false }
    ]
  },
  {
    "question": "In QGIS, if you have a CSV file with 'Latitude' and 'Longitude' columns for landslide locations, what should you set the 'Geometry Definition' to when adding it as a layer?",
    "options": [
      { "text": "Line coordinates", "isCorrect": false },
      { "text": "Polygon coordinates", "isCorrect": false },
      { "text": "Point coordinates", "isCorrect": true },
      { "text": "No geometry", "isCorrect": false }
    ]
  },
  {
    "question": "In GeoGebra, which command would you type in the Input Bar to create a point at coordinates (5, 3)?",
    "options": [
      { "text": "Point(5, 3)", "isCorrect": false },
      { "text": "(5, 3)", "isCorrect": false },
      { "text": "A = (5, 3)", "isCorrect": false },
      { "text": "Any of the above", "isCorrect": true }
    ]
  },
  {
    "question": "To observe the midnight sun in Stellarium, which location should you select?",
    "options": [
      { "text": "Kuala Lumpur, Malaysia", "isCorrect": false },
      { "text": "Sydney, Australia", "isCorrect": false },
      { "text": "Tromsø, Norway", "isCorrect": true },
      { "text": "Kolkata, India", "isCorrect": false }
    ]
  },
  {
    "question": "What does the acronym 'DEM' stand for in the context of QGIS?",
    "options": [
      { "text": "Digital Elevation Model", "isCorrect": true },
      { "text": "Data Evaluation Method", "isCorrect": false },
      { "text": "Disaster Emergency Management", "isCorrect": false },
      { "text": "Digital Environmental Map", "isCorrect": false }
    ]
  },
  {
    "question": "The equation x = 4 plotted in GeoGebra will generate a line that is:",
    "options": [
      { "text": "Horizontal", "isCorrect": false },
      { "text": "Parallel to the Y-axis", "isCorrect": true },
      { "text": "At a 45-degree angle", "isCorrect": false },
      { "text": "Curved", "isCorrect": false }
    ]
  },
  {
    "question": "Which key is used to open the Search Window in Stellarium?",
    "options": [
      { "text": "F3", "isCorrect": true },
      { "text": "F4", "isCorrect": false },
      { "text": "F5", "isCorrect": false },
      { "text": "F6", "isCorrect": false }
    ]
  },
  {
    "question": "You have added a DEM to QGIS, but the slope map is a single color. To visually distinguish different slope angles, what should you change in the layer properties?",
    "options": [
      { "text": "The transparency", "isCorrect": false },
      { "text": "The coordinate reference system (CRS)", "isCorrect": false },
      { "text": "The symbology to 'Singleband pseudocolor'", "isCorrect": true },
      { "text": "The layer name", "isCorrect": false }
    ]
  },
  {
    "question": "In GeoGebra, you have points A(1,2) and B(4,6). Which command will create a line segment between them?",
    "options": [
      { "text": "Line(A, B)", "isCorrect": false },
      { "text": "Segment(A, B)", "isCorrect": true },
      { "text": "Connect(A, B)", "isCorrect": false },
      { "text": "Draw(A, B)", "isCorrect": false }
    ]
  },
  {
    "question": "The International Day for Disaster Risk Reduction is observed on:",
    "options": [
      { "text": "June 5", "isCorrect": false },
      { "text": "October 13", "isCorrect": true },
      { "text": "April 22", "isCorrect": false },
      { "text": "December 10", "isCorrect": false }
    ]
  },
  {
    "question": "In Stellarium, which tool allows you to speed up the simulation to see the movement of celestial bodies as an animation?",
    "options": [
      { "text": "Set Normal Time Rate (K)", "isCorrect": false },
      { "text": "Increase Time Speed (L)", "isCorrect": true },
      { "text": "Location Window (F6)", "isCorrect": false },
      { "text": "Search Window (F3)", "isCorrect": false }
    ]
  },
  {
    "question": "Which of the following is a free and open-source Geographic Information System (GIS) software?",
    "options": [
      { "text": "ArcGIS", "isCorrect": false },
      { "text": "Google Earth Pro", "isCorrect": false },
      { "text": "Quantum GIS (QGIS)", "isCorrect": true },
      { "text": "MapInfo Pro", "isCorrect": false }
    ]
  },
  {
    "question": "You type y = x^2 into the GeoGebra Input Bar. What shape will be created?",
    "options": [
      { "text": "A straight line", "isCorrect": false },
      { "text": "A circle", "isCorrect": false },
      { "text": "A parabola", "isCorrect": true },
      { "text": "A triangle", "isCorrect": false }
    ]
  },
  {
    "question": "What is the main function of a Disaster Risk Area Map?",
    "options": [
      { "text": "To predict the exact time of earthquakes", "isCorrect": false },
      { "text": "To show real-time weather patterns", "isCorrect": false },
      { "text": "To highlight an area's vulnerabilities and potential hazards", "isCorrect": true },
      { "text": "To display political boundaries", "isCorrect": false }
    ]
  },
  {
    "question": "In Stellarium, you want to see the sky from the Moon's surface. What is the first step?",
    "options": [
      { "text": "Use the Search Window (F3) and type \"Moon\"", "isCorrect": false },
      { "text": "Open the Location Window (F6) and select \"Moon\" under Planet", "isCorrect": true },
      { "text": "Open the Date/Time Window (F5) and set the location to \"Moon\"", "isCorrect": false },
      { "text": "Use the Sky and Viewing Options (F4) and select the \"Moon\" landscape", "isCorrect": false }
    ]
  },
  {
    "question": "You have a slope map in QGIS and want to create a printable layout with a title and legend. Which feature should you use?",
    "options": [
      { "text": "The Processing Toolbox", "isCorrect": false },
      { "text": "The Browser Panel", "isCorrect": false },
      { "text": "The New Print Layout", "isCorrect": true },
      { "text": "The Data Source Manager", "isCorrect": false }
    ]
  },
  {
    "question": "The name \"GeoGebra\" is a combination of which two words?",
    "options": [
      { "text": "Geography and Geology", "isCorrect": false },
      { "text": "Geometry and Algebra", "isCorrect": true },
      { "text": "Geography and Algebra", "isCorrect": false },
      { "text": "Geometry and Gebra", "isCorrect": false }
    ]
  },
  {
    "question": "In Stellarium, if you are at the North Pole on June 21st, how would you describe the Sun's path?",
    "options": [
      { "text": "It rises in the east and sets in the west", "isCorrect": false },
      { "text": "It circles the horizon at a constant altitude for 24 hours", "isCorrect": true },
      { "text": "It is directly overhead at noon", "isCorrect": false },
      { "text": "It is not visible at all", "isCorrect": false }
    ]
  },
  {
    "question": "In QGIS, which tool would you use to click on a landslide point on the map and see its date and cause?",
    "options": [
      { "text": "Open Attribute Table", "isCorrect": false },
      { "text": "Identify Features", "isCorrect": true },
      { "text": "Measure Tool", "isCorrect": false },
      { "text": "Select Features", "isCorrect": false }
    ]
  },
  {
    "question": "In GeoGebra, you have drawn a line. Its equation in the Algebra View is y = 2x + 1. This means the line:",
    "options": [
      { "text": "Crosses the y-axis at (0,1) and has a slope of 2", "isCorrect": true },
      { "text": "Crosses the y-axis at (0,2) and has a slope of 1", "isCorrect": false },
      { "text": "Is a vertical line at x=1", "isCorrect": false },
      { "text": "Is a horizontal line at y=1", "isCorrect": false }
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
    "question": "The 'White Night Festival' associated with the midnight sun is famously celebrated in:",
    "options": [
      { "text": "Tromsø, Norway", "isCorrect": false },
      { "text": "St. Petersburg, Russia", "isCorrect": true },
      { "text": "Anchorage, USA", "isCorrect": false },
      { "text": "Helsinki, Finland", "isCorrect": false }
    ]
  },
  {
    "question": "You want to draw a circle with center at (0,0) and radius 5 in GeoGebra. What equation should you type?",
    "options": [
      { "text": "Circle((0,0), 5)", "isCorrect": false },
      { "text": "x^2 + y^2 = 5", "isCorrect": false },
      { "text": "x^2 + y^2 = 25", "isCorrect": true },
      { "text": "y = 5x", "isCorrect": false }
    ]
  },
  {
    "question": "To find the official online GIS portal for Indian schools, you would search for:",
    "options": [
      { "text": "Quantum GIS", "isCorrect": false },
      { "text": "School GIS", "isCorrect": true },
      { "text": "Grass GIS", "isCorrect": false },
      { "text": "ArcGIS Online", "isCorrect": false }
    ]
  },
  {
    "question": "In QGIS, the Processing Toolbox is primarily used for:",
    "options": [
      { "text": "Changing the color of the interface", "isCorrect": false },
      { "text": "Adding titles to maps", "isCorrect": false },
      { "text": "Running geospatial analysis algorithms", "isCorrect": true },
      { "text": "Managing user logins", "isCorrect": false }
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
