document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "Which Sensing block in PictoBlox provides the system's current hour for use in calculating the position of the hour hand in a digital clock?",
    "options": [
      { "text": "current minute", "isCorrect": false },
      { "text": "current hour", "isCorrect": true },
      { "text": "timer", "isCorrect": false },
      { "text": "date", "isCorrect": false }
    ]
  },
  {
    "question": "How many degrees must the minute hand rotate for every passing minute to show the correct time in an analog clock project?",
    "options": [
      { "text": "1 degree", "isCorrect": false },
      { "text": "6 degrees", "isCorrect": true },
      { "text": "30 degrees", "isCorrect": false },
      { "text": "0.5 degrees", "isCorrect": false }
    ]
  },
  {
    "question": "Which Control block is used to execute a set of instructions continuously, such as continually checking the current time in an alarm clock project?",
    "options": [
      { "text": "repeat (10)", "isCorrect": false },
      { "text": "forever", "isCorrect": true },
      { "text": "wait () seconds", "isCorrect": false },
      { "text": "repeat until ()", "isCorrect": false }
    ]
  },
  {
    "question": "Which PictoBlox block is used to prompt the user for input (e.g., to set the alarm time) and pause the script until an answer is provided?",
    "options": [
      { "text": "say ()", "isCorrect": false },
      { "text": "ask () and wait", "isCorrect": true },
      { "text": "wait until ()", "isCorrect": false },
      { "text": "set variable to ()", "isCorrect": false }
    ]
  },
  {
    "question": "In which variable/block is the user's input (answer) stored immediately after the `ask () and wait` block is executed?",
    "options": [
      { "text": "timer", "isCorrect": false },
      { "text": "mouse x", "isCorrect": false },
      { "text": "answer", "isCorrect": true },
      { "text": "loudness", "isCorrect": false }
    ]
  },
  {
    "question": "Which Event block is used to send a message from one sprite to initiate the execution of a script in another sprite (synchronization)?",
    "options": [
      { "text": "send message ()", "isCorrect": false },
      { "text": "when this sprite clicked", "isCorrect": false },
      { "text": "broadcast ()", "isCorrect": true },
      { "text": "switch backdrop to ()", "isCorrect": false }
    ]
  },
  {
    "question": "Which Control block is essential for implementing the conditional logic to check if the current time matches the set alarm time?",
    "options": [
      { "text": "repeat until ()", "isCorrect": false },
      { "text": "forever", "isCorrect": false },
      { "text": "if () then", "isCorrect": true },
      { "text": "stop all", "isCorrect": false }
    ]
  },
  {
    "question": "Which block ensures a sprite appears in the foreground, in front of all other sprites on the Stage?",
    "options": [
      { "text": "change layer by 1", "isCorrect": false },
      { "text": "go to front layer", "isCorrect": true },
      { "text": "next costume", "isCorrect": false },
      { "text": "set direction to 90", "isCorrect": false }
    ]
  },
  {
    "question": "Which Operator block is used to check if multiple conditions (e.g., Hour = 10 AND Minute = 30) are simultaneously true?",
    "options": [
      { "text": "or", "isCorrect": false },
      { "text": "not", "isCorrect": false },
      { "text": "and", "isCorrect": true },
      { "text": "<", "isCorrect": false }
    ]
  },
  {
    "question": "To rotate a sprite 5 degrees counter-clockwise, which is the correct block action?",
    "options": [
      { "text": "turn [clockwise arrow] 5 degrees", "isCorrect": false },
      { "text": "turn [counter-clockwise arrow] 5 degrees", "isCorrect": true },
      { "text": "set direction to 5", "isCorrect": false },
      { "text": "point towards mouse pointer", "isCorrect": false }
    ]
  },
  {
    "question": "In programming, what is a named memory location used to store a value that can change during the execution of a program?",
    "options": [
      { "text": "Constant", "isCorrect": false },
      { "text": "Variable", "isCorrect": true },
      { "text": "Block", "isCorrect": false },
      { "text": "Script", "isCorrect": false }
    ]
  },
  {
    "question": "Who was the leader of the team that created the Python programming language in 1991?",
    "options": [
      { "text": "James Gosling", "isCorrect": false },
      { "text": "Guido van Rossum", "isCorrect": true },
      { "text": "Ken Thompson", "isCorrect": false },
      { "text": "Bjarne Stroustrup", "isCorrect": false }
    ]
  },
  {
    "question": "What is the primary rule in Python that is necessary for defining code blocks and maintaining the correct code structure?",
    "options": [
      { "text": "Brackets ({})", "isCorrect": false },
      { "text": "Semicolon (;)", "isCorrect": false },
      { "text": "Indentation", "isCorrect": true },
      { "text": "Capitalization", "isCorrect": false }
    ]
  },
  {
    "question": "Which of the following is an example of a text-based programming language, as introduced in the chapter?",
    "options": [
      { "text": "Scratch", "isCorrect": false },
      { "text": "PictoBlox", "isCorrect": false },
      { "text": "Python", "isCorrect": true },
      { "text": "Snap!", "isCorrect": false }
    ]
  },
  {
    "question": "What is the correct Python command to output the text \"Hello World\" to the console?",
    "options": [
      { "text": "echo \"Hello World\"", "isCorrect": false },
      { "text": "print(\"Hello World\")", "isCorrect": true },
      { "text": "display \"Hello World\"", "isCorrect": false },
      { "text": "write \"Hello World\"", "isCorrect": false }
    ]
  },
  {
    "question": "Which Python code structure is typically used to iterate or repeat a set of instructions a fixed number of times, for example, 10 times?",
    "options": [
      { "text": "if count < 10:", "isCorrect": false },
      { "text": "while True:", "isCorrect": false },
      { "text": "for i in range(10):", "isCorrect": true },
      { "text": "def loop():", "isCorrect": false }
    ]
  },
  {
    "question": "Which Looks block is used to change a sprite to its next available image, commonly used to create continuous animations?",
    "options": [
      { "text": "set costume to ()", "isCorrect": false },
      { "text": "change backdrop to ()", "isCorrect": false },
      { "text": "next costume", "isCorrect": true },
      { "text": "show", "isCorrect": false }
    ]
  },
  {
    "question": "Which block is used to set the overall loudness level of the sounds played in the project?",
    "options": [
      { "text": "start sound ()", "isCorrect": false },
      { "text": "set volume to () %", "isCorrect": true },
      { "text": "change pitch by ()", "isCorrect": false },
      { "text": "play note () for () beats", "isCorrect": false }
    ]
  },
  {
    "question": "To move a sprite precisely to the center of the Stage in PictoBlox, what coordinates should be entered in the `go to x: () y: ()` block?",
    "options": [
      { "text": "(x: 100, y: 100)", "isCorrect": false },
      { "text": "(x: 0, y: 0)", "isCorrect": true },
      { "text": "(x: -100, y: 0)", "isCorrect": false },
      { "text": "random position", "isCorrect": false }
    ]
  },
  {
    "question": "Which Event block is used to begin the execution of the main script when the program starts?",
    "options": [
      { "text": "when this sprite clicked", "isCorrect": false },
      { "text": "when backdrop switches to ()", "isCorrect": false },
      { "text": "when green flag clicked", "isCorrect": true },
      { "text": "when I receive ()", "isCorrect": false }
    ]
  },
  {
    "question": "If a 'pigeon' sprite is accidentally placed behind a 'tree' sprite, which block is the most direct way to bring the pigeon to the foreground?",
    "options": [
      { "text": "go to back layer", "isCorrect": false },
      { "text": "go to front layer", "isCorrect": true },
      { "text": "hide", "isCorrect": false },
      { "text": "set size to 100%", "isCorrect": false }
    ]
  },
  {
    "question": "The `if () then else` block in PictoBlox is a representation of which fundamental programming concept?",
    "options": [
      { "text": "Repetitive Execution", "isCorrect": false },
      { "text": "Sequential Execution", "isCorrect": false },
      { "text": "Conditional Execution", "isCorrect": true },
      { "text": "Event Handling", "isCorrect": false }
    ]
  },
  {
    "question": "The `show` and `hide` blocks, which control the sprite's visibility, are found in which block category?",
    "options": [
      { "text": "Motion", "isCorrect": false },
      { "text": "Looks", "isCorrect": true },
      { "text": "Sensing", "isCorrect": false },
      { "text": "Events", "isCorrect": false }
    ]
  },
  {
    "question": "Which PictoBlox feature helps simplify and modularize a program by defining a custom set of instructions that can be called repeatedly?",
    "options": [
      { "text": "List", "isCorrect": false },
      { "text": "My Blocks / Custom Blocks", "isCorrect": true },
      { "text": "Broadcasting", "isCorrect": false },
      { "text": "Variable", "isCorrect": false }
    ]
  },
  {
    "question": "In a digital alarm clock, which block is crucial inside the `forever` loop to ensure the time is checked precisely every second?",
    "options": [
      { "text": "repeat 1", "isCorrect": false },
      { "text": "wait 1 seconds", "isCorrect": true },
      { "text": "go to front layer", "isCorrect": false },
      { "text": "set variable to 1", "isCorrect": false }
    ]
  },
  {
    "question": "Which symbol(s) are primarily used in Python to enclose string (text) data?",
    "options": [
      { "text": "Brackets [ ]", "isCorrect": false },
      { "text": "Curly braces { }", "isCorrect": false },
      { "text": "Double quotes \" \"", "isCorrect": true },
      { "text": "Colon ( : )", "isCorrect": false }
    ]
  },
  {
    "question": "Which block is used to increment or decrement the current value of a variable (e.g., increase 'count' by 1)?",
    "options": [
      { "text": "set count to 1", "isCorrect": false },
      { "text": "show variable count", "isCorrect": false },
      { "text": "change count by 1", "isCorrect": true },
      { "text": "hide variable count", "isCorrect": false }
    ]
  },
  {
    "question": "If the current time is 11:00 and the Alarm Hour variable holds the value 10, what is the result of the expression `(current hour) = (Alarm Hour)`?",
    "options": [
      { "text": "True", "isCorrect": false },
      { "text": "False", "isCorrect": true },
      { "text": "Error", "isCorrect": false },
      { "text": "1", "isCorrect": false }
    ]
  },
  {
    "question": "Which type of programming language is typically considered most suitable for developing AI (Artificial Intelligence) based technologies?",
    "options": [
      { "text": "Block coding languages", "isCorrect": false },
      { "text": "Text-based programming languages", "isCorrect": true },
      { "text": "Markup languages", "isCorrect": false },
      { "text": "Spreadsheet formulas", "isCorrect": false }
    ]
  },
  {
    "question": "The primary advantage of using `start sound ()` over `play sound () until done` is:",
    "options": [
      { "text": "It stops all other scripts.", "isCorrect": false },
      { "text": "It allows other scripts to continue running without waiting for the sound to finish.", "isCorrect": true },
      { "text": "It plays the sound continuously.", "isCorrect": false },
      { "text": "It automatically changes the sound pitch.", "isCorrect": false }
    ]
  },
  {
    "question": "What is the output of the Python expression `print(10 - 2 * 3)`?",
    "options": [
      { "text": "24", "isCorrect": false },
      { "text": "4", "isCorrect": true },
      { "text": "18", "isCorrect": false },
      { "text": "8", "isCorrect": false }
    ]
  },
  {
    "question": "Which Looks block displays a speech bubble above the sprite for a set duration, simulating the sprite communicating?",
    "options": [
      { "text": "ask () and wait", "isCorrect": false },
      { "text": "think () for () seconds", "isCorrect": false },
      { "text": "say () for () seconds", "isCorrect": true },
      { "text": "broadcast ()", "isCorrect": false }
    ]
  },
  {
    "question": "Which List block is used to clear all existing elements from a list variable?",
    "options": [
      { "text": "remove item 1 of ()", "isCorrect": false },
      { "text": "delete all of ()", "isCorrect": true },
      { "text": "replace item 1 of ()", "isCorrect": false },
      { "text": "hide list ()", "isCorrect": false }
    ]
  },
  {
    "question": "Blocks that control a sprite's position, direction, and movement (e.g., `move 10 steps`) belong to which block category?",
    "options": [
      { "text": "Control", "isCorrect": false },
      { "text": "Motion", "isCorrect": true },
      { "text": "Sound", "isCorrect": false },
      { "text": "Operators", "isCorrect": false }
    ]
  },
  {
    "question": "The use of the `broadcast` message in a project is essential for:",
    "options": [
      { "text": "Managing the sprite's size.", "isCorrect": false },
      { "text": "Synchronizing the start of scripts across multiple sprites.", "isCorrect": true },
      { "text": "Changing the backdrop.", "isCorrect": false },
      { "text": "Hiding all sprites.", "isCorrect": false }
    ]
  },
  {
    "question": "What is a major cause of syntax errors in Python programming?",
    "options": [
      { "text": "Excessive comments.", "isCorrect": false },
      { "text": "Incorrect Indentation.", "isCorrect": true },
      { "text": "Using too many variables.", "isCorrect": false },
      { "text": "Running the code too often.", "isCorrect": false }
    ]
  },
  {
    "question": "If the current time is 12:30, what direction (in degrees) will the minute hand be pointing in the PictoBlox analog clock project?",
    "options": [
      { "text": "0 degrees", "isCorrect": false },
      { "text": "90 degrees", "isCorrect": false },
      { "text": "180 degrees", "isCorrect": true },
      { "text": "270 degrees", "isCorrect": false }
    ]
  },
  {
    "question": "Which element in PictoBlox is responsible for controlling the logical structure and order of execution in a program?",
    "options": [
      { "text": "Graphic effects.", "isCorrect": false },
      { "text": "Control Flow Blocks", "isCorrect": true },
      { "text": "Backdrops.", "isCorrect": false },
      { "text": "Sounds.", "isCorrect": false }
    ]
  },
  {
    "question": "Which Event block is used to start a script when the user directly interacts with the sprite by clicking on it?",
    "options": [
      { "text": "when green flag clicked", "isCorrect": false },
      { "text": "when this sprite clicked", "isCorrect": true },
      { "text": "when I receive ()", "isCorrect": false },
      { "text": "when key () pressed", "isCorrect": false }
    ]
  },
  {
    "question": "If you define `x = 5` and then execute the statement `x = x + 10` in Python, what is the final value of the variable `x`?",
    "options": [
      { "text": "5", "isCorrect": false },
      { "text": "10", "isCorrect": false },
      { "text": "15", "isCorrect": true },
      { "text": "50", "isCorrect": false }
    ]
  },
  {
    "question": "The `while ()` loop in programming is an example of which fundamental concept?",
    "options": [
      { "text": "Sequential Execution", "isCorrect": false },
      { "text": "Conditional Execution", "isCorrect": false },
      { "text": "Repetitive Execution", "isCorrect": true },
      { "text": "Modular Programming", "isCorrect": false }
    ]
  },
  {
    "question": "What is the function of the `stop all` block in PictoBlox?",
    "options": [
      { "text": "To stop the script of only the current sprite.", "isCorrect": false },
      { "text": "To stop only the sounds that are playing.", "isCorrect": false },
      { "text": "To stop all currently running scripts in the entire program.", "isCorrect": true },
      { "text": "To stop the alarm only.", "isCorrect": false }
    ]
  },
  {
    "question": "Which block is used to increase a sprite's size relative to its current size (e.g., increasing size by a value of 10)?",
    "options": [
      { "text": "set size to 10%", "isCorrect": false },
      { "text": "change size by 10", "isCorrect": true },
      { "text": "go to front layer", "isCorrect": false },
      { "text": "change x by 10", "isCorrect": false }
    ]
  },
  {
    "question": "What is the primary purpose of the 'Motion' blocks category in PictoBlox?",
    "options": [
      { "text": "To change the sprite's appearance.", "isCorrect": false },
      { "text": "To control the sprite's movement and position.", "isCorrect": true },
      { "text": "To add sound effects.", "isCorrect": false },
      { "text": "To display speech bubbles.", "isCorrect": false }
    ]
  },
  {
    "question": "Which block category contains blocks that report the sprite's current rotational angle (e.g., 90 or -90)?",
    "options": [
      { "text": "x position", "isCorrect": false },
      { "text": "y position", "isCorrect": false },
      { "text": "direction", "isCorrect": true },
      { "text": "current minute", "isCorrect": false }
    ]
  },
  {
    "question": "When using the `ask () and wait` block, what happens to the script execution if the user does not provide input immediately?",
    "options": [
      { "text": "The script proceeds to the next block immediately.", "isCorrect": false },
      { "text": "The alarm is automatically set to a default time.", "isCorrect": false },
      { "text": "The script pauses until the user provides an input.", "isCorrect": true },
      { "text": "An error message is displayed.", "isCorrect": false }
    ]
  },
  {
    "question": "The block category containing blocks to check for sprite interactions, such as touching another sprite or the mouse pointer, is called:",
    "options": [
      { "text": "Looks", "isCorrect": false },
      { "text": "Sensing", "isCorrect": true },
      { "text": "Operators", "isCorrect": false },
      { "text": "Data", "isCorrect": false }
    ]
  },
  {
    "question": "The `repeat 10` block is used to demonstrate which core programming concept?",
    "options": [
      { "text": "Control", "isCorrect": true },
      { "text": "Sensing", "isCorrect": false },
      { "text": "Operator", "isCorrect": false },
      { "text": "Looks", "isCorrect": false }
    ]
  },
  {
    "question": "What is used to store the values for the Hour, Minute, and Second in the digital alarm clock project?",
    "options": [
      { "text": "Lists", "isCorrect": false },
      { "text": "Variables", "isCorrect": true },
      { "text": "Broadcasts", "isCorrect": false },
      { "text": "Custom Blocks", "isCorrect": false }
    ]
  },
  {
    "question": "To make a sprite rotate, which block is used to change its direction (angle)?",
    "options": [
      { "text": "move 10 steps", "isCorrect": false },
      { "text": "go to x: () y: ()", "isCorrect": false },
      { "text": "turn () degrees", "isCorrect": true },
      { "text": "set size to () %", "isCorrect": false }
    ]
  },
  {
    "question": "In Python, if `a = 10` and `b = 20` are defined, and then `a = b` is executed, what is the value of `a`?",
    "options": [
      { "text": "10", "isCorrect": false },
      { "text": "20", "isCorrect": true },
      { "text": "30", "isCorrect": false },
      { "text": "0", "isCorrect": false }
    ]
  },
  {
    "question": "In programming, what does 'Syntax' refer to?",
    "options": [
      { "text": "The process of running the program.", "isCorrect": false },
      { "text": "The correct structure and rules of code, similar to grammar in a language.", "isCorrect": true },
      { "text": "The number of variables in a program.", "isCorrect": false },
      { "text": "The time taken to develop the software.", "isCorrect": false }
    ]
  },
  {
    "question": "The primary role of the `Alarm Hour` variable in the alarm clock project is to:",
    "options": [
      { "text": "Display the current time.", "isCorrect": false },
      { "text": "Store the hour when the alarm should sound.", "isCorrect": true },
      { "text": "Change the direction of the clock hand.", "isCorrect": false },
      { "text": "Control the size of the sprite.", "isCorrect": false }
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
