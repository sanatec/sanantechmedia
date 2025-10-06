document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "What is the main purpose of a Disaster Risk Area Map?",
    "options": [
      { "text": "To predict the exact timing of earthquakes", "isCorrect": false },
      { "text": "To highlight vulnerabilities and potential hazards of an area", "isCorrect": true },
      { "text": "To provide real-time traffic updates", "isCorrect": false },
      { "text": "To show political boundaries of a country", "isCorrect": false }
    ]
  },
  {
    "question": "The International Day for Disaster Risk Reduction is observed on:",
    "options": [
      { "text": "October 13", "isCorrect": true },
      { "text": "June 5", "isCorrect": false },
      { "text": "April 22", "isCorrect": false },
      { "text": "December 10", "isCorrect": false }
    ]
  },
  {
    "question": "Which of the following is a free and open-source Geographic Information System (GIS) software?",
    "options": [
      { "text": "Arc GIS", "isCorrect": false },
      { "text": "Map Info Pro", "isCorrect": false },
      { "text": "Quantum GIS (QGIS)", "isCorrect": true },
      { "text": "Google Earth Pro", "isCorrect": false }
    ]
  },
  {
    "question": "What does the acronym 'DEM' stand for?",
    "options": [
      { "text": "Digital Elevation Model", "isCorrect": true },
      { "text": "Data Evaluation Method", "isCorrect": false },
      { "text": "Digital Environmental Map", "isCorrect": false },
      { "text": "Disaster Emergency Management", "isCorrect": false }
    ]
  },
  {
    "question": "In QGIS, a 'raster layer' is typically used for data like:",
    "options": [
      { "text": "Point locations of landslides", "isCorrect": false },
      { "text": "Lines representing roads", "isCorrect": false },
      { "text": "Polygons representing land parcels", "isCorrect": false },
      { "text": "Digital images representing elevation", "isCorrect": true }
    ]
  },
  {
    "question": "The online geographic information system portal designed for Indian schools is called:",
    "options": [
      { "text": "Quantum GIS", "isCorrect": false },
      { "text": "School GIS", "isCorrect": true },
      { "text": "Grass GIS", "isCorrect": false },
      { "text": "Map Info Pro", "isCorrect": false }
    ]
  },
  {
    "question": "In QGIS, to view all the attribute data associated with a layer, you should:",
    "options": [
      { "text": "Use the Identify Features tool.", "isCorrect": false },
      { "text": "Right-click the layer and select 'Open Attribute Table'.", "isCorrect": true },
      { "text": "Double-click the layer in the Browser panel.", "isCorrect": false },
      { "text": "Go to Project → Properties.", "isCorrect": false }
    ]
  },
  {
    "question": "Which of these is NOT a common cause of landslides, as listed in the chapter?",
    "options": [
      { "text": "The slope of an area", "isCorrect": false },
      { "text": "Rock structure", "isCorrect": false },
      { "text": "Land use", "isCorrect": false },
      { "text": "Wind speed", "isCorrect": true }
    ]
  },
  {
    "question": "The file format for the landslide data added to QGIS in the chapter was:",
    "options": [
      { "text": "A JPEG image (.jpg)", "isCorrect": false },
      { "text": "A Geopackage file (.gpkg)", "isCorrect": false },
      { "text": "A Comma Separated Value file (.csv)", "isCorrect": true },
      { "text": "A Text file (.txt)", "isCorrect": false }
    ]
  },
  {
    "question": "The 'Geometry CRS' EPSG:4326 corresponds to:",
    "options": [
      { "text": "WGS 84 coordinate system", "isCorrect": true },
      { "text": "UTM coordinate system", "isCorrect": false },
      { "text": "Lambert Conformal Conic system", "isCorrect": false },
      { "text": "Spherical Mercator system", "isCorrect": false }
    ]
  },
  {
    "question": "What is the primary role of the 'Processing Toolbox' in QGIS?",
    "options": [
      { "text": "To change the color of the interface", "isCorrect": false },
      { "text": "To provide access to geospatial algorithms and analysis tools", "isCorrect": true },
      { "text": "To manage project saving and opening", "isCorrect": false },
      { "text": "To add new base maps", "isCorrect": false }
    ]
  },
  {
    "question": "To add a delimited text layer (like a CSV) in QGIS, you go to the menu and select:",
    "options": [
      { "text": "Layer → Add Layer → Add Raster Layer", "isCorrect": false },
      { "text": "Layer → Add Layer → Add Mesh Layer", "isCorrect": false },
      { "text": "Layer → Add Layer → Add Vector Layer", "isCorrect": false },
      { "text": "Layer → Add Layer → Add Delimited Text Layer", "isCorrect": true }
    ]
  },
  {
    "question": "The 'Identify Features' tool in QGIS is used to:",
    "options": [
      { "text": "Delete selected features from a layer.", "isCorrect": false },
      { "text": "Click on a feature on the map and view its data.", "isCorrect": true },
      { "text": "Change the projection of a layer.", "isCorrect": false },
      { "text": "Merge two different layers together.", "isCorrect": false }
    ]
  },
  {
    "question": "The main goal of observing disaster risk areas on a map is to aid in:",
    "options": [
      { "text": "Precautions, Planning, Response, and Awareness", "isCorrect": true },
      { "text": "Prediction, Profit, Promotion, and Publicity", "isCorrect": false },
      { "text": "Construction, Commerce, and Communication", "isCorrect": false },
      { "text": "Entertainment, Exploration, and Education", "isCorrect": false }
    ]
  },
  {
    "question": "In the context of landslide analysis, 'slope' refers to:",
    "options": [
      { "text": "The type of vegetation on a hill.", "isCorrect": false },
      { "text": "The steepness or gradient of the terrain.", "isCorrect": true },
      { "text": "The chemical composition of the soil.", "isCorrect": false },
      { "text": "The amount of rainfall an area receives.", "isCorrect": false }
    ]
  },
  {
    "question": "You have a CSV file with 'Latitude' and 'Longitude' columns for landslide locations. When adding it to QGIS, what should you set the 'Geometry Definition' to?",
    "options": [
      { "text": "Line coordinates", "isCorrect": false },
      { "text": "Polygon coordinates", "isCorrect": false },
      { "text": "Point coordinates", "isCorrect": true },
      { "text": "No geometry", "isCorrect": false }
    ]
  },
  {
    "question": "You have added a DEM file for an area, but the map is a single color and you cannot distinguish slopes. What is the next step to visualize different slope angles?",
    "options": [
      { "text": "Delete the layer and re-add it.", "isCorrect": false },
      { "text": "Right-click the layer, open Properties, and change the symbology to 'Singleband pseudocolor'.", "isCorrect": true },
      { "text": "Use the 'Identify Features' tool on every pixel.", "isCorrect": false },
      { "text": "Use the 'Add New Label' tool to mark slopes manually.", "isCorrect": false }
    ]
  },
  {
    "question": "You want to create a printable map layout that includes a legend and a title. Which QGIS feature should you use?",
    "options": [
      { "text": "The Processing Toolbox", "isCorrect": false },
      { "text": "The Browser Panel", "isCorrect": false },
      { "text": "The New Print Layout", "isCorrect": true },
      { "text": "The Data Source Manager", "isCorrect": false }
    ]
  },
  {
    "question": "If you need to find the slope of a hilly region to assess landslide risk, what is the correct sequence of operations in QGIS?",
    "options": [
      { "text": "Add Raster Layer (DEM) → Processing Toolbox → GDAL → Raster analysis → Slope", "isCorrect": true },
      { "text": "Add Delimited Text Layer → Processing Toolbox → Vector geometry → Slope", "isCorrect": false },
      { "text": "Add Vector Layer → Open Attribute Table → Calculate Slope", "isCorrect": false },
      { "text": "Add Raster Layer (DEM) → Identify Features → Record elevation", "isCorrect": false }
    ]
  },
  {
    "question": "After running the 'Slope' tool, the output is a new raster layer where the value of each cell represents:",
    "options": [
      { "text": "The elevation in meters.", "isCorrect": false },
      { "text": "The aspect (direction the slope faces).", "isCorrect": false },
      { "text": "The angle of the slope in degrees.", "isCorrect": true },
      { "text": "The soil type classification.", "isCorrect": false }
    ]
  },
  {
    "question": "You are given a task to find all schools located in high-slope areas. Which two data layers would you need to perform this analysis?",
    "options": [
      { "text": "A slope map of the area and a point layer showing school locations.", "isCorrect": true },
      { "text": "A rainfall data map and a land use map.", "isCorrect": false },
      { "text": "A satellite image and a road network map.", "isCorrect": false },
      { "text": "A political boundaries map and a population density map.", "isCorrect": false }
    ]
  },
  {
    "question": "When configuring the symbology for a slope map, selecting 'Equal Interval' in the 'Mode' option means:",
    "options": [
      { "text": "The color classes are based on having an equal number of pixels in each class.", "isCorrect": false },
      { "text": "The range of slope values (e.g., 0-10°, 10-20°) is divided into equal-sized intervals.", "isCorrect": true },
      { "text": "The colors are randomly assigned to different slope values.", "isCorrect": false },
      { "text": "The classification is based on standard deviations from the mean slope.", "isCorrect": false }
    ]
  },
  {
    "question": "You have created a slope map and want to save the entire QGIS project, including all layer styles and map extents. What should you do?",
    "options": [
      { "text": "Export the map as a PDF.", "isCorrect": false },
      { "text": "Use Project → Save or Save As...", "isCorrect": true },
      { "text": "Save the style file for each layer individually.", "isCorrect": false },
      { "text": "Take a screenshot of the map canvas.", "isCorrect": false }
    ]
  },
  {
    "question": "To get specific information about a single landslide event from the map, such as its date and cause, you should:",
    "options": [
      { "text": "Look at the project properties.", "isCorrect": false },
      { "text": "Select the landslide layer and use the 'Identify Features' tool to click on the point.", "isCorrect": true },
      { "text": "Open the Processing Toolbox and run the \"List Features\" algorithm.", "isCorrect": false },
      { "text": "Check the Layer Rendering options.", "isCorrect": false }
    ]
  },
  {
    "question": "The 'Color ramp' option in the Symbology tab is used to:",
    "options": [
      { "text": "Apply a single color to the entire layer.", "isCorrect": false },
      { "text": "Assign a range of colors to represent a range of values.", "isCorrect": true },
      { "text": "Change the background color of the map canvas.", "isCorrect": false },
      { "text": "Color features based on their name.", "isCorrect": false }
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
