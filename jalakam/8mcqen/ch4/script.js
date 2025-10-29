document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "In Scratch, what are the characters or objects that need to be included in games or animations called?",
    "options": [
      { "text": "Assets", "isCorrect": false },
      { "text": "Costumes", "isCorrect": false },
      { "text": "Blocks", "isCorrect": false },
      { "text": "Sprites", "isCorrect": true }
    ]
  },
  {
    "question": "What is the primary function of the **Stage** in Scratch when creating a game?",
    "options": [
      { "text": "To hold the coding blocks for a sprite", "isCorrect": false },
      { "text": "To define the behavior of the characters", "isCorrect": false },
      { "text": "To store game variables", "isCorrect": false },
      { "text": "To serve as the background for the game to run", "isCorrect": true }
    ]
  },
  {
    "question": "All the resources used to create and enhance the visual, auditory, and functional aspects of a game, including images, animations, and scripts, are collectively called:",
    "options": [
      { "text": "Sprite Sheets", "isCorrect": false },
      { "text": "Game Utilities", "isCorrect": false },
      { "text": "Code Libraries", "isCorrect": false },
      { "text": "Game Assets", "isCorrect": true }
    ]
  },
  {
    "question": "What is the initial number of **bullets** available when the 'Double Trap Shooting' game in Scratch starts?",
    "options": [
      { "text": "10", "isCorrect": false },
      { "text": "50", "isCorrect": false },
      { "text": "0", "isCorrect": false },
      { "text": "20", "isCorrect": true }
    ]
  },
  {
    "question": "Which specific backdrop was selected from the Scratch library for the shooting range background in the chapter's game example?",
    "options": [
      { "text": "Desert", "isCorrect": false },
      { "text": "Woods", "isCorrect": false },
      { "text": "Sky", "isCorrect": false },
      { "text": "Blue Sky", "isCorrect": true }
    ]
  },
  {
    "question": "Which variable is used to **decrease by one** each time a shot is fired in the game?",
    "options": [
      { "text": "Score", "isCorrect": false },
      { "text": "Hits", "isCorrect": false },
      { "text": "Target", "isCorrect": false },
      { "text": "Bullets", "isCorrect": true }
    ]
  },
  {
    "question": "Which variable's value **increases** when a bullet successfully hits a balloon?",
    "options": [
      { "text": "Bullets", "isCorrect": false },
      { "text": "Game Time", "isCorrect": false },
      { "text": "Tempo", "isCorrect": false },
      { "text": "Score", "isCorrect": true }
    ]
  },
  {
    "question": "The action of the gun turning towards the mouse pointer is a **continuous** activity. Which control block is used for this purpose in Scratch?",
    "options": [
      { "text": "Repeat", "isCorrect": false },
      { "text": "Wait until", "isCorrect": false },
      { "text": "If then else", "isCorrect": false },
      { "text": "Forever", "isCorrect": true }
    ]
  },
  {
    "question": "Which block from the **Motion** section is used to make the gun turn towards the mouse pointer?",
    "options": [
      { "text": "turn (15) degrees", "isCorrect": false },
      { "text": "go to mouse-pointer", "isCorrect": false },
      { "text": "set direction to (90)", "isCorrect": false },
      { "text": "point towards mouse-pointer", "isCorrect": true }
    ]
  },
  {
    "question": "What is the primary event that triggers the **firing** of the bullet in the 'Double Trap Shooting' game?",
    "options": [
      { "text": "Pressing the space bar", "isCorrect": false },
      { "text": "The gun sprite touches the mouse pointer", "isCorrect": false },
      { "text": "Clicking the green flag", "isCorrect": false },
      { "text": "Clicking on the game screen (Stage)", "isCorrect": true }
    ]
  },
  {
    "question": "To exchange information between one sprite and another in Scratch, which specific type of block is used?",
    "options": [
      { "text": "Ask and Wait", "isCorrect": false },
      { "text": "Change variable by", "isCorrect": false },
      { "text": "Start Sound", "isCorrect": false },
      { "text": "Broadcast message", "isCorrect": true }
    ]
  },
  {
    "question": "The message created and broadcast when the Stage is clicked for firing is named:",
    "options": [
      { "text": "Fire", "isCorrect": false },
      { "text": "Shoot", "isCorrect": false },
      { "text": "Start", "isCorrect": false },
      { "text": "Clicked", "isCorrect": true }
    ]
  },
  {
    "question": "What is the name of the sound effect added to the **bullet** sprite when it is fired?",
    "options": [
      { "text": "Boing", "isCorrect": false },
      { "text": "Laser", "isCorrect": false },
      { "text": "Pop", "isCorrect": false },
      { "text": "Rip", "isCorrect": true }
    ]
  },
  {
    "question": "What is the feature in Scratch used to create multiple sprites with the **same characteristics and behavior** as one sprite (like generating many bullets)?",
    "options": [
      { "text": "Duplication", "isCorrect": false },
      { "text": "Broadcasting", "isCorrect": false },
      { "text": "Replication", "isCorrect": false },
      { "text": "Clone", "isCorrect": true }
    ]
  },
  {
    "question": "Which block is used to hold the operational codes specific to a sprite that has been created using the 'clone' feature?",
    "options": [
      { "text": "When I receive (message)", "isCorrect": false },
      { "text": "When (key) pressed", "isCorrect": false },
      { "text": "When Green Flag clicked", "isCorrect": false },
      { "text": "When I start as clone", "isCorrect": true }
    ]
  },
  {
    "question": "To make the bullet travel towards the clicked location, the cloned bullet needs to move until it hits what boundary?",
    "options": [
      { "text": "The balloon", "isCorrect": false },
      { "text": "The gun sprite", "isCorrect": false },
      { "text": "The center of the stage", "isCorrect": false },
      { "text": "The edge of the stage", "isCorrect": true }
    ]
  },
  {
    "question": "In the game, what are the two colors of the balloons that are required as targets?",
    "options": [
      { "text": "Red and Green", "isCorrect": false },
      { "text": "Red and Yellow", "isCorrect": false },
      { "text": "Green and Purple", "isCorrect": false },
      { "text": "Blue and Yellow", "isCorrect": true }
    ]
  },
  {
    "question": "To create a 'bursting balloon' **Costume**, which option is used on an existing costume's image after right-clicking it?",
    "options": [
      { "text": "Export", "isCorrect": false },
      { "text": "New", "isCorrect": false },
      { "text": "Create Folder", "isCorrect": false },
      { "text": "Duplicate", "isCorrect": true }
    ]
  },
  {
    "question": "Which tool in the Costume editor is specifically mentioned for modifying a duplicated costume into the shape of a **bursting balloon**?",
    "options": [
      { "text": "Rectangle Tool", "isCorrect": false },
      { "text": "Brush Tool", "isCorrect": false },
      { "text": "Eraser Tool", "isCorrect": false },
      { "text": "Reshape Tool", "isCorrect": true }
    ]
  },
  {
    "question": "To ensure the two balloon targets are displayed with different colors (Blue and Yellow), what part of the Scratch interface must be used to change the second balloon's appearance?",
    "options": [
      { "text": "The Code tab", "isCorrect": false },
      { "text": "The Sound tab", "isCorrect": false },
      { "text": "The Motion blocks", "isCorrect": false },
      { "text": "The Costume section", "isCorrect": true }
    ]
  },
  {
    "question": "What happens immediately after a bullet hits a balloon in the game?",
    "options": [
      { "text": "The game stops", "isCorrect": false },
      { "text": "The gun changes color", "isCorrect": false },
      { "text": "The bullet turns back", "isCorrect": false },
      { "text": "The balloon bursts and the score increases", "isCorrect": true }
    ]
  },
  {
    "question": "What is the **default sound** already included for the balloon sprite that is used when it bursts?",
    "options": [
      { "text": "Splat", "isCorrect": false },
      { "text": "Scream", "isCorrect": false },
      { "text": "Rip", "isCorrect": false },
      { "text": "Pop", "isCorrect": true }
    ]
  },
  {
    "question": "The game ends when which of the following conditions is met?",
    "options": [
      { "text": "The score reaches 100", "isCorrect": false },
      { "text": "The user clicks the Stop button", "isCorrect": false },
      { "text": "All balloons are hit", "isCorrect": false },
      { "text": "All twenty bullets are used up", "isCorrect": true }
    ]
  },
  {
    "question": "Which section in Scratch contains the **Make a Variable** option for creating custom variables like 'bullets' and 'score'?",
    "options": [
      { "text": "Control", "isCorrect": false },
      { "text": "Data", "isCorrect": false },
      { "text": "Operators", "isCorrect": false },
      { "text": "Variables", "isCorrect": true }
    ]
  },
  {
    "question": "What is the initial value set for the **score** variable when the game begins?",
    "options": [
      { "text": "20", "isCorrect": false },
      { "text": "1", "isCorrect": false },
      { "text": "100", "isCorrect": false },
      { "text": "0", "isCorrect": true }
    ]
  },
  {
    "question": "When the game starts, what must the gun sprite's code do regarding the 'bullets' and 'score' variables?",
    "options": [
      { "text": "Set score to 20 and bullets to 0", "isCorrect": false },
      { "text": "Set both to 10", "isCorrect": false },
      { "text": "Set both to 1", "isCorrect": false },
      { "text": "Set bullets to 20 and score to 0", "isCorrect": true }
    ]
  },
  {
    "question": "In the code for firing, what is the purpose of checking if `bullets > 0` before broadcasting the 'Clicked' message?",
    "options": [
      { "text": "To increase the score", "isCorrect": false },
      { "text": "To make the gun move", "isCorrect": false },
      { "text": "To make the balloon rise", "isCorrect": false },
      { "text": "To ensure firing only happens when bullets are available", "isCorrect": true }
    ]
  },
  {
    "question": "What block is used to make the balloons appear at different **horizontal** starting points (X-values)?",
    "options": [
      { "text": "Go to X: (0)", "isCorrect": false },
      { "text": "Change X by (10)", "isCorrect": false },
      { "text": "Set Y to (random)", "isCorrect": false },
      { "text": "Pick random ( ) to ( )", "isCorrect": true }
    ]
  },
  {
    "question": "To make the balloon rise from the bottom of the stage to the top, which value is continuously increased for the balloon sprite?",
    "options": [
      { "text": "X value", "isCorrect": false },
      { "text": "Direction value", "isCorrect": false },
      { "text": "Size value", "isCorrect": false },
      { "text": "Y value", "isCorrect": true }
    ]
  },
  {
    "question": "What is the range of random X-values specified in the chapter for the balloon to rise from different places?",
    "options": [
      { "text": "10 to 100", "isCorrect": false },
      { "text": "0 to 180", "isCorrect": false },
      { "text": "-100 to 100", "isCorrect": false },
      { "text": "-230 to 230", "isCorrect": true }
    ]
  },
  {
    "question": "Which motion block is specifically suggested to make the balloon rise **upwards** to the top of the stage?",
    "options": [
      { "text": "go to x: ( ) y: ( )", "isCorrect": false },
      { "text": "move (10) steps", "isCorrect": false },
      { "text": "change y by (10)", "isCorrect": false },
      { "text": "glide ( ) secs to x: ( ) y: ( )", "isCorrect": true }
    ]
  },
  {
    "question": "What must be done to the clones (of the balloon or bullet) once their function is complete to manage game memory and performance?",
    "options": [
      { "text": "Stop their movement", "isCorrect": false },
      { "text": "Hide them", "isCorrect": false },
      { "text": "Move them to the back layer", "isCorrect": false },
      { "text": "Delete the clones", "isCorrect": true }
    ]
  },
  {
    "question": "What tool in the Scratch Paint window is used to draw the **gun** sprite in the game?",
    "options": [
      { "text": "Brush Tool", "isCorrect": false },
      { "text": "Circle Tool", "isCorrect": false },
      { "text": "Line Tool", "isCorrect": false },
      { "text": "Rectangle Tool", "isCorrect": true }
    ]
  },
  {
    "question": "What is the suggested size set for the **gun** sprite after it is drawn?",
    "options": [
      { "text": "100", "isCorrect": false },
      { "text": "10", "isCorrect": false },
      { "text": "25", "isCorrect": false },
      { "text": "50", "isCorrect": true }
    ]
  },
  {
    "question": "What is the suggested size set for the **bullet** sprite after it is drawn?",
    "options": [
      { "text": "50", "isCorrect": false },
      { "text": "100", "isCorrect": false },
      { "text": "20", "isCorrect": false },
      { "text": "10", "isCorrect": true }
    ]
  },
  {
    "question": "To change the look and give **animation effects** to sprites, what is the usual method in Scratch?",
    "options": [
      { "text": "Changing the size value", "isCorrect": false },
      { "text": "Changing the sound effects", "isCorrect": false },
      { "text": "Using Motion blocks", "isCorrect": false },
      { "text": "Changing their costumes", "isCorrect": true }
    ]
  },
  {
    "question": "Which menu option is used to start the drawing process for a new sprite like the gun or bullet?",
    "options": [
      { "text": "Choose a Sprite", "isCorrect": false },
      { "text": "Upload Sprite", "isCorrect": false },
      { "text": "Surprise", "isCorrect": false },
      { "text": "Paint", "isCorrect": true }
    ]
  },
  {
    "question": "What is the specific block that must be used to **decrease the value of the 'Bullets' variable** by one?",
    "options": [
      { "text": "Set bullets to (bullets - 1)", "isCorrect": false },
      { "text": "Change score by (-1)", "isCorrect": false },
      { "text": "Set bullets to 1", "isCorrect": false },
      { "text": "Change bullets by (-1)", "isCorrect": true }
    ]
  },
  {
    "question": "What is the method described for applying the code blocks of one sprite (e.g., Balloon1) to another sprite (e.g., Balloon2)?",
    "options": [
      { "text": "Using the 'Duplicate' option", "isCorrect": false },
      { "text": "Saving the code as a file and importing it", "isCorrect": false },
      { "text": "Using a special 'Copy Code' block", "isCorrect": false },
      { "text": "Dragging the code to the second sprite", "isCorrect": true }
    ]
  },
  {
    "question": "When dragging and dropping code to another sprite, what is one essential detail the user must remember to change in the copied code for the second balloon?",
    "options": [
      { "text": "The x and y position", "isCorrect": false },
      { "text": "The random number range", "isCorrect": false },
      { "text": "The sound effect", "isCorrect": false },
      { "text": "The Costume names", "isCorrect": true }
    ]
  },
  {
    "question": "The game mentioned in the chapter, 'Double Trap Shooting', is a digital version of which real-life Olympic event category?",
    "options": [
      { "text": "Rifle Shooting", "isCorrect": false },
      { "text": "Pistol Shooting", "isCorrect": false },
      { "text": "Archery", "isCorrect": false },
      { "text": "Shotgun (Double Trap)", "isCorrect": true }
    ]
  },
  {
    "question": "If the game is running and the mouse is moved, the gun sprite's code ensures the gun's direction follows the mouse pointer. This is achieved by which set of blocks?",
    "options": [
      { "text": "When key pressed and move (10) steps", "isCorrect": false },
      { "text": "When clicked and change y by (10)", "isCorrect": false },
      { "text": "When I receive (message) and point in direction (90)", "isCorrect": false },
      { "text": "When green flag clicked, forever, point towards mouse-pointer", "isCorrect": true }
    ]
  },
  {
    "question": "Variables in Scratch are used to temporarily store what kinds of data?",
    "options": [
      { "text": "Only texts", "isCorrect": false },
      { "text": "Only images and sounds", "isCorrect": false },
      { "text": "Only true/false values", "isCorrect": false },
      { "text": "Numbers, texts, etc., whose values can be changed", "isCorrect": true }
    ]
  },
  {
    "question": "When the bullet sprite receives the 'Clicked' message, what is the **first action** the bullet must perform before a clone is created?",
    "options": [
      { "text": "Play the 'Rip' sound", "isCorrect": false },
      { "text": "Change its size to 50", "isCorrect": false },
      { "text": "Change the score by 1", "isCorrect": false },
      { "text": "Reach the barrel of the gun (its starting position)", "isCorrect": true }
    ]
  },
  {
    "question": "What is the code block used to make the balloon crash and disappear once it touches the bullet?",
    "options": [
      { "text": "broadcast message", "isCorrect": false },
      { "text": "set size to 0", "isCorrect": false },
      { "text": "stop all", "isCorrect": false },
      { "text": "hide", "isCorrect": true }
    ]
  },
  {
    "question": "What is the block used in Scratch to get any value **randomly** between two given values?",
    "options": [
      { "text": "Random Position", "isCorrect": false },
      { "text": "Set to Random", "isCorrect": false },
      { "text": "Randomize", "isCorrect": false },
      { "text": "Pick random ( ) to ( )", "isCorrect": true }
    ]
  },
  {
    "question": "If the **y value** of a sprite is gradually increased, in which direction will the sprite move?",
    "options": [
      { "text": "From right to left", "isCorrect": false },
      { "text": "From left to right", "isCorrect": false },
      { "text": "From top to bottom", "isCorrect": false },
      { "text": "From bottom to top", "isCorrect": true }
    ]
  },
  {
    "question": "Which game asset is responsible for arranging the game's layout and can be made attractive by including various backdrops?",
    "options": [
      { "text": "Sprite", "isCorrect": false },
      { "text": "Costume", "isCorrect": false },
      { "text": "Instrument Plugins", "isCorrect": false },
      { "text": "Stage", "isCorrect": true }
    ]
  },
  {
    "question": "What is the file extension of the game file provided in the School_Resources folder for the user to try out?",
    "options": [
      { "text": ".sb3", "isCorrect": false },
      { "text": ".exe", "isCorrect": false },
      { "text": ".mmpz", "isCorrect": false },
      { "text": ".html", "isCorrect": true }
    ]
  },
  {
    "question": "When a bullet hits a balloon, besides the balloon bursting and the score increasing, what happens to the bullet?",
    "options": [
      { "text": "It bounces back", "isCorrect": false },
      { "text": "It turns red", "isCorrect": false },
      { "text": "It shrinks in size", "isCorrect": false },
      { "text": "It disappears (is deleted/hidden)", "isCorrect": true }
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
