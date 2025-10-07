document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "What is the name of the unique feature of our eyes that makes still images appear to move?",
    "options": [
      { "text": "Retinal Persistence", "isCorrect": false },
      { "text": "Persistence of Vision", "isCorrect": true },
      { "text": "Optical Illusion", "isCorrect": false },
      { "text": "Vision Continuity", "isCorrect": false }
    ],
    "correctAnswer": "Persistence of Vision"
  },
  {
    "question": "How long does an image remain on the retina due to persistence of vision?",
    "options": [
      { "text": "1/10th of a second", "isCorrect": false },
      { "text": "1/16th of a second", "isCorrect": true },
      { "text": "1/5th of a second", "isCorrect": false },
      { "text": "1 second", "isCorrect": false }
    ],
    "correctAnswer": "1/16th of a second"
  },
  {
    "question": "The first device used to simulate animation was the:",
    "options": [
      { "text": "Zoetrope", "isCorrect": false },
      { "text": "Thaumatrope", "isCorrect": false },
      { "text": "Phenakistiscope", "isCorrect": true },
      { "text": "Flipbook", "isCorrect": false }
    ],
    "correctAnswer": "Phenakistiscope"
  },
  {
    "question": "What is another name for a Flipbook?",
    "options": [
      { "text": "Motion Book", "isCorrect": false },
      { "text": "Kineograph", "isCorrect": true },
      { "text": "Storyboard", "isCorrect": false },
      { "text": "Tweening Book", "isCorrect": false }
    ],
    "correctAnswer": "Kineograph"
  },
  {
    "question": "Which of the following is NOT a preparation step for creating an animated film?",
    "options": [
      { "text": "Determining the frame rate", "isCorrect": true },
      { "text": "Preparing a story", "isCorrect": false },
      { "text": "Creating a storyboard", "isCorrect": false },
      { "text": "Designing characters", "isCorrect": false }
    ],
    "correctAnswer": "Determining the frame rate"
  },
  {
    "question": "In the animation \"Luna\", what does the puppy do?",
    "options": [
      { "text": "Chases its tail", "isCorrect": false },
      { "text": "Brings water to a withered plant", "isCorrect": true },
      { "text": "Digs a hole to bury a bone", "isCorrect": false },
      { "text": "Plays with a ball", "isCorrect": false }
    ],
    "correctAnswer": "Brings water to a withered plant"
  },
  {
    "question": "Character design in animation does NOT typically involve:",
    "options": [
      { "text": "Variation in the shape of characters", "isCorrect": false },
      { "text": "Selecting appropriate colors", "isCorrect": false },
      { "text": "Writing the background music", "isCorrect": true },
      { "text": "Creating easily modifiable drawings", "isCorrect": false }
    ],
    "correctAnswer": "Writing the background music"
  },
  {
    "question": "Which of these is a famous 2D animated film?",
    "options": [
      { "text": "Shrek", "isCorrect": false },
      { "text": "Big Buck Bunny", "isCorrect": false },
      { "text": "The Jungle Book", "isCorrect": true },
      { "text": "Wall-E", "isCorrect": false }
    ],
    "correctAnswer": "The Jungle Book"
  },
  {
    "question": "Which software is used for creating 3D animations?",
    "options": [
      { "text": "OpenToonz", "isCorrect": false },
      { "text": "Tupi Tube Desk", "isCorrect": false },
      { "text": "Synfig Studio", "isCorrect": false },
      { "text": "Blender", "isCorrect": true }
    ],
    "correctAnswer": "Blender"
  },
  {
    "question": "What does a storyboard detail in advance?",
    "options": [
      { "text": "The final video file format", "isCorrect": false },
      { "text": "The voice actors for each character", "isCorrect": false },
      { "text": "Each scene of the animation", "isCorrect": true },
      { "text": "The cost of production", "isCorrect": false }
    ],
    "correctAnswer": "Each scene of the animation"
  },
  {
    "question": "In OpenToonz, what is the workspace called where you animate the position and size of objects?",
    "options": [
      { "text": "Drawing Room", "isCorrect": false },
      { "text": "Animation Room", "isCorrect": true },
      { "text": "Xsheet Room", "isCorrect": false },
      { "text": "Browser Room", "isCorrect": false }
    ],
    "correctAnswer": "Animation Room"
  },
  {
    "question": "In animation, a single still image is called a:",
    "options": [
      { "text": "Scene", "isCorrect": false },
      { "text": "Frame", "isCorrect": true },
      { "text": "Level", "isCorrect": false },
      { "text": "Cell", "isCorrect": false }
    ],
    "correctAnswer": "Frame"
  },
  {
    "question": "The number of frames displayed in one second is called:",
    "options": [
      { "text": "Frame Speed", "isCorrect": false },
      { "text": "Frame Rate (FPS)", "isCorrect": true },
      { "text": "Animation Pace", "isCorrect": false },
      { "text": "Scene Duration", "isCorrect": false }
    ],
    "correctAnswer": "Frame Rate (FPS)"
  },
  {
    "question": "If an animation is 5 seconds long with a frame rate of 12 FPS, how many total frames are needed?",
    "options": [
      { "text": "12", "isCorrect": false },
      { "text": "50", "isCorrect": false },
      { "text": "60", "isCorrect": true },
      { "text": "72", "isCorrect": false }
    ],
    "correctAnswer": "60"
  },
  {
    "question": "In OpenToonz, what feature is used to copy the content of one frame to multiple other frames?",
    "options": [
      { "text": "Clone Tool", "isCorrect": false },
      { "text": "Repeat Button / Click and Drag", "isCorrect": true },
      { "text": "Duplicate Keyframe", "isCorrect": false },
      { "text": "Paste Special", "isCorrect": false }
    ],
    "correctAnswer": "Repeat Button / Click and Drag"
  },
  {
    "question": "What does the \"Xsheet\" in OpenToonz function like?",
    "options": [
      { "text": "A drawing canvas", "isCorrect": false },
      { "text": "A color palette", "isCorrect": false },
      { "text": "A timeline for organizing scenes", "isCorrect": true },
      { "text": "A sound mixer", "isCorrect": false }
    ],
    "correctAnswer": "A timeline for organizing scenes"
  },
  {
    "question": "To draw a cloud as a vector image in OpenToonz, you need to create a:",
    "options": [
      { "text": "Raster Level", "isCorrect": false },
      { "text": "Toonz Vector Level", "isCorrect": true },
      { "text": "Bitmap Level", "isCorrect": false },
      { "text": "Scanned Level", "isCorrect": false }
    ],
    "correctAnswer": "Toonz Vector Level"
  },
  {
    "question": "Which tool in OpenToonz is used to draw freehand images?",
    "options": [
      { "text": "Selection Tool", "isCorrect": false },
      { "text": "Type Tool", "isCorrect": false },
      { "text": "Brush Tool", "isCorrect": true },
      { "text": "Geometric Tool", "isCorrect": false }
    ],
    "correctAnswer": "Brush Tool"
  },
  {
    "question": "The animation technique where the software generates intermediate frames between two keyframes is called:",
    "options": [
      { "text": "Morphing", "isCorrect": false },
      { "text": "Tweening", "isCorrect": true },
      { "text": "Rendering", "isCorrect": false },
      { "text": "Sequencing", "isCorrect": false }
    ],
    "correctAnswer": "Tweening"
  },
  {
    "question": "In OpenToonz, which tool is selected to give animation to an object using tweening?",
    "options": [
      { "text": "Brush Tool", "isCorrect": false },
      { "text": "Selection Tool", "isCorrect": true },
      { "text": "Animate Tool", "isCorrect": false },
      { "text": "Fill Tool", "isCorrect": false }
    ],
    "correctAnswer": "Selection Tool"
  },
  {
    "question": "Keyframes in animation define:",
    "options": [
      { "text": "The color of the object", "isCorrect": false },
      { "text": "The file size of the project", "isCorrect": false },
      { "text": "Important positions in the movement", "isCorrect": true },
      { "text": "The background music", "isCorrect": false }
    ],
    "correctAnswer": "Important positions in the movement"
  },
  {
    "question": "What aspect of an object can be animated using tweening in OpenToonz?",
    "options": [
      { "text": "Position and Scale", "isCorrect": true },
      { "text": "File Format", "isCorrect": false },
      { "text": "Layer Name", "isCorrect": false },
      { "text": "Project Settings", "isCorrect": false }
    ],
    "correctAnswer": "Position and Scale"
  },
  {
    "question": "OpenToonz project files are saved with which extension?",
    "options": [
      { "text": ".otz", "isCorrect": false },
      { "text": ".tnz", "isCorrect": true },
      { "text": ".anim", "isCorrect": false },
      { "text": ".toonz", "isCorrect": false }
    ],
    "correctAnswer": ".tnz"
  },
  {
    "question": "To make an animation viewable outside of OpenToonz, you must:",
    "options": [
      { "text": "Save the project", "isCorrect": false },
      { "text": "Render it as a video file (e.g., MP4)", "isCorrect": true },
      { "text": "Export the Xsheet", "isCorrect": false },
      { "text": "Create a new level", "isCorrect": false }
    ],
    "correctAnswer": "Render it as a video file (e.g., MP4)"
  },
  {
    "question": "What is an advantage of using image sequences in animation?",
    "options": [
      { "text": "They reduce the file size of the final video.", "isCorrect": false },
      { "text": "They are easier to create than drawing in the software.", "isCorrect": false },
      { "text": "They allow for subtle expressions and movements of characters.", "isCorrect": true },
      { "text": "They automatically add sound effects.", "isCorrect": false }
    ],
    "correctAnswer": "They allow for subtle expressions and movements of characters."
  },
  {
    "question": "When including an image sequence in OpenToonz, what is displayed in the Browser Room?",
    "options": [
      { "text": "Each individual image file", "isCorrect": false },
      { "text": "Only the first image", "isCorrect": false },
      { "text": "The common name of the sequence", "isCorrect": true },
      { "text": "A video preview", "isCorrect": false }
    ],
    "correctAnswer": "The common name of the sequence"
  },
  {
    "question": "The final step of combining individual animation scenes into a single movie is best done using:",
    "options": [
      { "text": "A database management system", "isCorrect": false },
      { "text": "A video editing software", "isCorrect": true },
      { "text": "A drawing software", "isCorrect": false },
      { "text": "A word processor", "isCorrect": false }
    ],
    "correctAnswer": "A video editing software"
  },
  {
    "question": "The Japanese animation film 'Belle' was created using which software?",
    "options": [
      { "text": "Blender", "isCorrect": false },
      { "text": "Adobe Animate", "isCorrect": false },
      { "text": "OpenToonz", "isCorrect": true },
      { "text": "Autodesk Maya", "isCorrect": false }
    ],
    "correctAnswer": "OpenToonz"
  },
  {
    "question": "Which room in OpenToonz is used to draw, color, and edit images?",
    "options": [
      { "text": "Animation Room", "isCorrect": false },
      { "text": "Drawing Room", "isCorrect": true },
      { "text": "Browser Room", "isCorrect": false },
      { "text": "Xsheet Room", "isCorrect": false }
    ],
    "correctAnswer": "Drawing Room"
  },
  {
    "question": "What is the primary purpose of the \"Style Editor\" in OpenToonz's Drawing Room?",
    "options": [
      { "text": "To edit the animation timeline", "isCorrect": false },
      { "text": "To select and adjust colors for drawing", "isCorrect": true },
      { "text": "To manage project settings", "isCorrect": false },
      { "text": "To import sound files", "isCorrect": false }
    ],
    "correctAnswer": "To select and adjust colors for drawing"
  },
  {
    "question": "To add background music to a scene in OpenToonz, you would:",
    "options": [
      { "text": "Draw a musical note on the canvas.", "isCorrect": false },
      { "text": "Use the Type Tool to write the song name.", "isCorrect": false },
      { "text": "Add the audio file to a column in the Xsheet.", "isCorrect": true },
      { "text": "Render the scene as an MP3 file.", "isCorrect": false }
    ],
    "correctAnswer": "Add the audio file to a column in the Xsheet."
  },
  {
    "question": "If you want an object to move from left to right over 60 frames, you would set keyframes on:",
    "options": [
      { "text": "Frame 1 and Frame 60", "isCorrect": true },
      { "text": "Every frame from 1 to 60", "isCorrect": false },
      { "text": "Frame 1 and Frame 30", "isCorrect": false },
      { "text": "Only on Frame 60", "isCorrect": false }
    ],
    "correctAnswer": "Frame 1 and Frame 60"
  },
  {
    "question": "The \"Play\" button in OpenToonz is used to:",
    "options": [
      { "text": "Render the final video", "isCorrect": false },
      { "text": "Preview the animation", "isCorrect": true },
      { "text": "Save the project", "isCorrect": false },
      { "text": "Import new images", "isCorrect": false }
    ],
    "correctAnswer": "Preview the animation"
  },
  {
    "question": "Which of these is a free and open-source 2D animation software?",
    "options": [
      { "text": "Adobe Animate", "isCorrect": false },
      { "text": "Autodesk Maya", "isCorrect": false },
      { "text": "OpenToonz", "isCorrect": true },
      { "text": "Adobe Dimension", "isCorrect": false }
    ],
    "correctAnswer": "OpenToonz"
  },
  {
    "question": "In the context of the \"Luna\" animation, what was the main environmental theme?",
    "options": [
      { "text": "Air Pollution", "isCorrect": false },
      { "text": "Water Conservation / Helping a Plant", "isCorrect": true },
      { "text": "Deforestation", "isCorrect": false },
      { "text": "Recycling", "isCorrect": false }
    ],
    "correctAnswer": "Water Conservation / Helping a Plant"
  },
  {
    "question": "2D animation is based on:",
    "options": [
      { "text": "Puppets", "isCorrect": false },
      { "text": "Robotics", "isCorrect": false },
      { "text": "2D images", "isCorrect": true },
      { "text": "3D models", "isCorrect": false }
    ]
  },
  {
    "question": "Famous 2D animated films include:",
    "options": [
      { "text": "Jungle Book and Cinderella", "isCorrect": true },
      { "text": "Shrek and Wall-E", "isCorrect": false },
      { "text": "Avatar and Toy Story", "isCorrect": false },
      { "text": "Frozen and Tangled", "isCorrect": false }
    ]
  },
  {
    "question": "Example of 3D animation software:",
    "options": [
      { "text": "Adobe Animate", "isCorrect": false },
      { "text": "Tupi Tube", "isCorrect": false },
      { "text": "Blender", "isCorrect": true },
      { "text": "Synfig Studio", "isCorrect": false }
    ]
  },
  {
    "question": "3D animations are widely used in:",
    "options": [
      { "text": "Gaming", "isCorrect": true },
      { "text": "Newspaper printing", "isCorrect": false },
      { "text": "Audio recording", "isCorrect": false },
      { "text": "Book illustration", "isCorrect": false }
    ]
  },
  {
    "question": "Famous 3D movies include:",
    "options": [
      { "text": "Bambi", "isCorrect": false },
      { "text": "Big Buck Bunny, Shrek, Wall-E", "isCorrect": true },
      { "text": "Cinderella", "isCorrect": false },
      { "text": "Tom and Jerry", "isCorrect": false }
    ]
  },
  {
    "question": "OpenToonz is:",
    "options": [
      { "text": "Free and open-source animation software", "isCorrect": true },
      { "text": "Music software", "isCorrect": false },
      { "text": "Photo editing tool", "isCorrect": false },
      { "text": "Paid software", "isCorrect": false }
    ]
  },
  {
    "question": "The film \"Belle\" (2021) was created using:",
    "options": [
      { "text": "Photoshop", "isCorrect": false },
      { "text": "Blender", "isCorrect": false },
      { "text": "OpenToonz", "isCorrect": true },
      { "text": "Maya", "isCorrect": false }
    ]
  },
  {
    "question": "File extension of OpenToonz project:",
    "options": [
      { "text": ".avi", "isCorrect": false },
      { "text": ".jpg", "isCorrect": false },
      { "text": ".tnz", "isCorrect": true },
      { "text": ".mp4", "isCorrect": false }
    ]
  },
  {
    "question": "OpenToonz rooms are also known as:",
    "options": [
      { "text": "Workspaces", "isCorrect": true },
      { "text": "Projects", "isCorrect": false },
      { "text": "Clips", "isCorrect": false },
      { "text": "Frames", "isCorrect": false }
    ]
  },
  {
    "question": "The room used for colouring and editing drawings:",
    "options": [
      { "text": "Sound room", "isCorrect": false },
      { "text": "Browser room", "isCorrect": false },
      { "text": "Drawing room", "isCorrect": true },
      { "text": "Animation room", "isCorrect": false }
    ]
  },
  {
    "question": "Frame rate means:",
    "options": [
      { "text": "Number of frames displayed per second", "isCorrect": true },
      { "text": "Number of colours in a frame", "isCorrect": false },
      { "text": "Number of tools used", "isCorrect": false },
      { "text": "Number of characters", "isCorrect": false }
    ]
  },
  {
    "question": "At 12 FPS, frames needed for 5 seconds are:",
    "options": [
      { "text": "100", "isCorrect": false },
      { "text": "120", "isCorrect": false },
      { "text": "50", "isCorrect": false },
      { "text": "60", "isCorrect": true }
    ]
  },
  {
    "question": "In OpenToonz, frames are arranged in:",
    "options": [
      { "text": "Palettes", "isCorrect": false },
      { "text": "Columns only", "isCorrect": false },
      { "text": "Layers", "isCorrect": false },
      { "text": "Xsheets", "isCorrect": true }
    ]
  },
  {
    "question": "Tweening is:",
    "options": [
      { "text": "Colour correction", "isCorrect": false },
      { "text": "Automatic generation of frames between two keyframes", "isCorrect": true },
      { "text": "Copying same image", "isCorrect": false },
      { "text": "Saving project", "isCorrect": false }
    ]
  },
  {
    "question": "Keyframes are:",
    "options": [
      { "text": "Frames defining important positions of an object", "isCorrect": true },
      { "text": "Last frame only", "isCorrect": false },
      { "text": "First frame only", "isCorrect": false },
      { "text": "Random frames", "isCorrect": false }
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
