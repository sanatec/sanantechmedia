document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "What technique does the Fuzzy Select Tool use to determine which similar colors to include in a selection?",
    "options": [
      {"text": "Brightness", "isCorrect": false},
      {"text": "Threshold", "isCorrect": true},
      {"text": "Alpha Channel", "isCorrect": false},
      {"text": "Contrast", "isCorrect": false}
    ]
  },
  {
    "question": "Which key is pressed to remove a selected area in GIMP?",
    "options": [
      {"text": "Delete", "isCorrect": true},
      {"text": "Shift", "isCorrect": false},
      {"text": "Enter", "isCorrect": false},
      {"text": "Backspace", "isCorrect": false}
    ]
  },
  {
    "question": "How do you deselect an image after making a selection in GIMP?",
    "options": [
      {"text": "Use the Deselect Tool", "isCorrect": false},
      {"text": "Press the Esc key", "isCorrect": false},
      {"text": "Choose None from the Select menu", "isCorrect": true},
      {"text": "Click outside the image", "isCorrect": false}
    ]
  },
  {
    "question": "What must be added to an RGB-only image before its background can be removed?",
    "options": [
      {"text": "An alpha channel", "isCorrect": true},
      {"text": "A blur effect", "isCorrect": false},
      {"text": "A text layer", "isCorrect": false},
      {"text": "A new layer", "isCorrect": false}
    ]
  },
  {
    "question": "Which menu is used to paste a copied image as a new layer?",
    "options": [
      {"text": "Select", "isCorrect": false},
      {"text": "Edit", "isCorrect": true},
      {"text": "File", "isCorrect": false},
      {"text": "Layer", "isCorrect": false}
    ]
  },
  {
    "question": "What does the 'A' in RGBA stand for?",
    "options": [
      {"text": "Alignment", "isCorrect": false},
      {"text": "Adjustment", "isCorrect": false},
      {"text": "Alpha", "isCorrect": true},
      {"text": "Anchor", "isCorrect": false}
    ]
  },
  {
    "question": "What is the primary function of the alpha channel?",
    "options": [
      {"text": "Changes color intensity", "isCorrect": false},
      {"text": "Controls transparency", "isCorrect": true},
      {"text": "Adjusts brightness", "isCorrect": false},
      {"text": "Creates shadows", "isCorrect": false}
    ]
  },
  {
    "question": "Where can you view the RGBA channels in GIMP?",
    "options": [
      {"text": "Edit → Preferences", "isCorrect": false},
      {"text": "Tools → Color Tools", "isCorrect": false},
      {"text": "Windows → Dockable Dialogs → Channels", "isCorrect": true},
      {"text": "Layer → Transparency", "isCorrect": false}
    ]
  },
  {
    "question": "Which tool is used to change the position of an image on the canvas?",
    "options": [
      {"text": "Scale Tool", "isCorrect": false},
      {"text": "Flip Tool", "isCorrect": false},
      {"text": "Move Tool", "isCorrect": true},
      {"text": "Paths Tool", "isCorrect": false}
    ]
  },
  {
    "question": "Which tool is used to adjust the size of an image in GIMP?",
    "options": [
      {"text": "Fuzzy Select Tool", "isCorrect": false},
      {"text": "Scale Tool", "isCorrect": true},
      {"text": "Move Tool", "isCorrect": false},
      {"text": "Crop Tool", "isCorrect": false}
    ]
  },
  {
    "question": "When using the Scale tool, what must you do to change width and height separately?",
    "options": [
      {"text": "Hold the Shift key", "isCorrect": false},
      {"text": "Unlink the chain link", "isCorrect": true},
      {"text": "Use the Path Tool", "isCorrect": false},
      {"text": "Lock the chain link", "isCorrect": false}
    ]
  },
  {
    "question": "Which menu contains the Brightness-Contrast adjustment option?",
    "options": [
      {"text": "Layer", "isCorrect": false},
      {"text": "Tools", "isCorrect": false},
      {"text": "Colors", "isCorrect": true},
      {"text": "File", "isCorrect": false}
    ]
  },
  {
    "question": "What is the purpose of the Paths Tool in GIMP?",
    "options": [
      {"text": "To duplicate layers", "isCorrect": false},
      {"text": "To select specific parts of an image using defined shapes", "isCorrect": true},
      {"text": "To adjust image brightness", "isCorrect": false},
      {"text": "To create text effects", "isCorrect": false}
    ]
  },
  {
    "question": "How do you complete a selection when using the Paths Tool?",
    "options": [
      {"text": "Double-click the image", "isCorrect": false},
      {"text": "Right-click and choose Complete", "isCorrect": false},
      {"text": "Press Ctrl and click the starting point", "isCorrect": true},
      {"text": "Press Enter", "isCorrect": false}
    ]
  },
  {
    "question": "What is the easiest way to create a second bottle image in your poster?",
    "options": [
      {"text": "Redraw the bottle", "isCorrect": false},
      {"text": "Duplicate the existing bottle layer", "isCorrect": true},
      {"text": "Copy from another file", "isCorrect": false},
      {"text": "Use the Paths Tool again", "isCorrect": false}
    ]
  },
  {
    "question": "Which tool is used to add text to a poster in GIMP?",
    "options": [
      {"text": "Letter Tool", "isCorrect": false},
      {"text": "Type Tool", "isCorrect": false},
      {"text": "Font Tool", "isCorrect": false},
      {"text": "Text Tool", "isCorrect": true}
    ]
  },
  {
    "question": "How can you give text a three-dimensional appearance?",
    "options": [
      {"text": "By changing the font color", "isCorrect": false},
      {"text": "By adding shadow effects", "isCorrect": true},
      {"text": "By using the Scale Tool", "isCorrect": false},
      {"text": "By adjusting brightness", "isCorrect": false}
    ]
  },
  {
    "question": "Which filter is used to create a shadow effect quickly?",
    "options": [
      {"text": "Brightness-Contrast", "isCorrect": false},
      {"text": "Alpha to Logo", "isCorrect": false},
      {"text": "Drop Shadow", "isCorrect": true},
      {"text": "Gaussian Blur", "isCorrect": false}
    ]
  },
  {
    "question": "Where is the Drop Shadow option located in GIMP?",
    "options": [
      {"text": "Colors → Map", "isCorrect": false},
      {"text": "Filters → Blur", "isCorrect": false},
      {"text": "Layer → Transparency", "isCorrect": false},
      {"text": "Filters → Light and Shadow → Drop Shadow", "isCorrect": true}
    ]
  },
  {
    "question": "Which tool can be used to create rectangular shapes in GIMP?",
    "options": [
      {"text": "Move Tool", "isCorrect": false},
      {"text": "Fuzzy Select Tool", "isCorrect": false},
      {"text": "Rectangle Select Tool", "isCorrect": true},
      {"text": "Path Tool", "isCorrect": false}
    ]
  },
  {
    "question": "How can you fill a selected shape with color?",
    "options": [
      {"text": "Using the Move Tool", "isCorrect": false},
      {"text": "Using the Path Tool", "isCorrect": false},
      {"text": "Using the Text Tool", "isCorrect": false},
      {"text": "Using the Bucket Fill Tool", "isCorrect": true}
    ]
  },
  {
    "question": "What is the advantage of creating shapes on separate layers?",
    "options": [
      {"text": "They cannot be deleted accidentally", "isCorrect": false},
      {"text": "They use less memory", "isCorrect": false},
      {"text": "They can be edited and improved independently", "isCorrect": true},
      {"text": "They load faster", "isCorrect": false}
    ]
  },
  {
    "question": "What is the process of converting a GIMP project file to an image file called?",
    "options": [
      {"text": "Converting", "isCorrect": false},
      {"text": "Rendering", "isCorrect": false},
      {"text": "Saving", "isCorrect": false},
      {"text": "Exporting", "isCorrect": true}
    ]
  },
  {
    "question": "Which of these is NOT an image file format you can export to in GIMP?",
    "options": [
      {"text": "PNG", "isCorrect": false},
      {"text": "PDF", "isCorrect": true},
      {"text": "JPG", "isCorrect": false},
      {"text": "TIFF", "isCorrect": false}
    ]
  },
  {
    "question": "If both the image and background move when using the Move tool, what is the likely cause?",
    "options": [
      {"text": "The image format is not supported", "isCorrect": false},
      {"text": "The Move tool is broken", "isCorrect": false},
      {"text": "The image was pasted into the background layer", "isCorrect": true},
      {"text": "The image is locked", "isCorrect": false}
    ]
  },
  {
    "question": "What is GIMP's native project file format?",
    "options": [
      {"text": "PSD", "isCorrect": false},
      {"text": "GIMP", "isCorrect": false},
      {"text": "XCF", "isCorrect": true},
      {"text": "IMP", "isCorrect": false}
    ]
  },
  {
    "question": "Which tool can change the direction of pictures or shapes?",
    "options": [
      {"text": "Rotate Tool", "isCorrect": false},
      {"text": "Shear Tool", "isCorrect": false},
      {"text": "Flip Tool", "isCorrect": true},
      {"text": "Perspective Tool", "isCorrect": false}
    ]
  },
  {
    "question": "What effect does Gaussian Blur create when applied to text?",
    "options": [
      {"text": "Makes text transparent", "isCorrect": false},
      {"text": "Changes text color", "isCorrect": false},
      {"text": "Creates a soft shadow effect", "isCorrect": true},
      {"text": "Makes text sharper", "isCorrect": false}
    ]
  },
  {
    "question": "How do you rename a layer in GIMP?",
    "options": [
      {"text": "Use the Text Tool", "isCorrect": false},
      {"text": "Press F2", "isCorrect": false},
      {"text": "Double-click on the layer name", "isCorrect": true},
      {"text": "Right-click and choose Rename", "isCorrect": false}
    ]
  },
  {
    "question": "Which palette contains options to raise or lower a layer?",
    "options": [
      {"text": "Channels palette", "isCorrect": false},
      {"text": "Brushes palette", "isCorrect": false},
      {"text": "Tools palette", "isCorrect": false},
      {"text": "Layers palette", "isCorrect": true}
    ]
  },
  {
    "question": "What is the purpose of the 'Split view' option in the Brightness-Contrast dialog?",
    "options": [
      {"text": "To separate colors", "isCorrect": false},
      {"text": "To create a mirror image", "isCorrect": false},
      {"text": "To divide the image into two parts", "isCorrect": false},
      {"text": "To compare original and adjusted versions", "isCorrect": true}
    ]
  },
  {
    "question": "Which tool is used to cut part of an image?",
    "options": [
      {"text": "Cut Tool", "isCorrect": false},
      {"text": "Scissors Tool", "isCorrect": false},
      {"text": "Slice Tool", "isCorrect": false},
      {"text": "Crop Tool", "isCorrect": true}
    ]
  },
  {
    "question": "What should be done to ensure elements can be adjusted independently in a poster?",
    "options": [
      {"text": "Use only one layer", "isCorrect": false},
      {"text": "Save frequently", "isCorrect": false},
      {"text": "Use only bright colors", "isCorrect": false},
      {"text": "Place each element on its own layer", "isCorrect": true}
    ]
  },
  {
    "question": "Which of these is a job opportunity related to image editing?",
    "options": [
      {"text": "Accounting", "isCorrect": false},
      {"text": "Computer programming", "isCorrect": false},
      {"text": "Graphic designing for websites", "isCorrect": true},
      {"text": "Teaching mathematics", "isCorrect": false}
    ]
  },
  {
    "question": "What happens when you add an alpha channel to an image?",
    "options": [
      {"text": "The image file size decreases", "isCorrect": false},
      {"text": "The image colors become more vibrant", "isCorrect": false},
      {"text": "The image becomes brighter", "isCorrect": false},
      {"text": "The image can have transparent areas", "isCorrect": true}
    ]
  },
  {
    "question": "You want to select only the red apple from an image that has a green background. Which tool would be most effective?",
    "options": [
      {"text": "Move Tool", "isCorrect": false},
      {"text": "Text Tool", "isCorrect": false},
      {"text": "Fuzzy Select Tool with appropriate Threshold", "isCorrect": true},
      {"text": "Crop Tool", "isCorrect": false}
    ]
  },
  {
    "question": "Your poster text doesn't stand out against the background. What adjustment could help?",
    "options": [
      {"text": "Use the Flip Tool", "isCorrect": false},
      {"text": "Decrease the image size", "isCorrect": false},
      {"text": "Delete the background layer", "isCorrect": false},
      {"text": "Add a drop shadow to the text", "isCorrect": true}
    ]
  },
  {
    "question": "You need to create multiple copies of a bottle image in your poster. What's the most efficient method?",
    "options": [
      {"text": "Use the Paths Tool for each bottle", "isCorrect": false},
      {"text": "Redraw each bottle separately", "isCorrect": false},
      {"text": "Duplicate the bottle layer multiple times", "isCorrect": true},
      {"text": "Copy and paste from different files", "isCorrect": false}
    ]
  },
  {
    "question": "Your image looks dull and lacks vibrancy. Which adjustment would most likely improve it?",
    "options": [
      {"text": "Adding a new layer", "isCorrect": false},
      {"text": "Changing the canvas size", "isCorrect": false},
      {"text": "Using the Crop Tool", "isCorrect": false},
      {"text": "Increasing Brightness and Contrast", "isCorrect": true}
    ]
  },
  {
    "question": "You want to create a rectangular background for text in your poster. Which tools would you use?",
    "options": [
      {"text": "Text Tool and Move Tool", "isCorrect": false},
      {"text": "Path Tool and Scale Tool", "isCorrect": false},
      {"text": "Fuzzy Select and Flip Tool", "isCorrect": false},
      {"text": "Rectangle Select Tool and Bucket Fill Tool", "isCorrect": true}
    ]
  },
  {
    "question": "After pasting an image, you can't move it independently from the background. What went wrong?",
    "options": [
      {"text": "The image is too large", "isCorrect": false},
      {"text": "The wrong file format was used", "isCorrect": false},
      {"text": "The Move Tool is broken", "isCorrect": false},
      {"text": "The image was pasted into the background layer", "isCorrect": true}
    ]
  },
  {
    "question": "You need to share your poster online but the file size is too large. What should you do?",
    "options": [
      {"text": "Use only black and white colors", "isCorrect": false},
      {"text": "Save as XCF format", "isCorrect": false},
      {"text": "Delete some layers", "isCorrect": false},
      {"text": "Export as JPEG with compression", "isCorrect": true}
    ]
  },
  {
    "question": "You want to create a soft shadow behind an object. Which filter would you use?",
    "options": [
      {"text": "Color Balance", "isCorrect": false},
      {"text": "Sharpen", "isCorrect": false},
      {"text": "Brightness-Contrast", "isCorrect": false},
      {"text": "Gaussian Blur", "isCorrect": true}
    ]
  },
  {
    "question": "Your image has a complex shape that needs precise selection. Which tool is most appropriate?",
    "options": [
      {"text": "Rectangle Select Tool", "isCorrect": false},
      {"text": "Crop Tool", "isCorrect": false},
      {"text": "Fuzzy Select Tool", "isCorrect": false},
      {"text": "Paths Tool", "isCorrect": true}
    ]
  },
  {
    "question": "You need to adjust only the width of an image without changing its height. How do you do this?",
    "options": [
      {"text": "Use the Move Tool while holding Shift", "isCorrect": false},
      {"text": "Crop the image horizontally", "isCorrect": false},
      {"text": "Use the Path Tool to reshape it", "isCorrect": false},
      {"text": "Unlink the chain in Scale Tool and adjust width only", "isCorrect": true}
    ]
  },
  {
    "question": "You want to create a three-dimensional effect for text. What technique would you use?",
    "options": [
      {"text": "Use the Brightness-Contrast adjustment", "isCorrect": false},
      {"text": "Increase the font size", "isCorrect": false},
      {"text": "Apply the Flip Tool", "isCorrect": false},
      {"text": "Duplicate the text layer, color it black, blur it, and position it as shadow", "isCorrect": true}
    ]
  },
  {
    "question": "Your poster has multiple elements that need to be rearranged. How should they be organized?",
    "options": [
      {"text": "All elements on one layer", "isCorrect": false},
      {"text": "Elements grouped by color", "isCorrect": false},
      {"text": "Elements placed randomly", "isCorrect": false},
      {"text": "Each element on its own layer", "isCorrect": true}
    ]
  },
  {
    "question": "You need to use your GIMP poster in a PowerPoint presentation. What should you do?",
    "options": [
      {"text": "Take a screenshot of the poster", "isCorrect": false},
      {"text": "Save the XCF file and insert it", "isCorrect": false},
      {"text": "Copy and paste each layer separately", "isCorrect": false},
      {"text": "Export the poster as JPEG or PNG", "isCorrect": true}
    ]
  },
  {
    "question": "You want to create a mirror image of your bottle for the poster. Which tool would you use?",
    "options": [
      {"text": "Scale Tool", "isCorrect": false},
      {"text": "Rotate Tool", "isCorrect": false},
      {"text": "Move Tool", "isCorrect": false},
      {"text": "Flip Tool", "isCorrect": true}
    ]
  },
  {
    "question": "Your image has areas that should be transparent but aren't. What might be missing?",
    "options": [
      {"text": "Drop shadow", "isCorrect": false},
      {"text": "Brightness adjustment", "isCorrect": false},
      {"text": "Text layer", "isCorrect": false},
      {"text": "Alpha channel", "isCorrect": true}
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
