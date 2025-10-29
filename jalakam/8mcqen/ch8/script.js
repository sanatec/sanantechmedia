document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "What is the primary function of the **Sunclock** software?",
    "options": [
      { "text": "To create 3D models of molecular structures.", "isCorrect": false },
      { "text": "To visually distinguish between countries experiencing day and night.", "isCorrect": true },
      { "text": "To calculate geographical coordinates (latitude and longitude).", "isCorrect": false },
      { "text": "To design interactive geometry figures.", "isCorrect": false }
    ]
  },
  {
    "question": "Who is credited with the development of the **Sunclock** software?",
    "options": [
      { "text": "Jean-Pierre Avogadro", "isCorrect": false },
      { "text": "Carl Wieman", "isCorrect": false },
      { "text": "Abhinav Bindra", "isCorrect": false },
      { "text": "Jean-Pierre Demailly", "isCorrect": true }
    ]
  },
  {
    "question": "The world is divided into how many time zones based on the Greenwich Mean Time (GMT)?",
    "options": [
      { "text": "36", "isCorrect": false },
      { "text": "100", "isCorrect": false },
      { "text": "24", "isCorrect": true },
      { "text": "12", "isCorrect": false }
    ]
  },
  {
    "question": "The time determined based on the sun's highest position (zenith) at a particular location is called:",
    "options": [
      { "text": "Universal Time", "isCorrect": false },
      { "text": "Local Time", "isCorrect": true },
      { "text": "Legal Time", "isCorrect": false },
      { "text": "Standard Time", "isCorrect": false }
    ]
  },
  {
    "question": "What is the commonly calculated time adopted by a country, based on the longitude passing through its central region, called?",
    "options": [
      { "text": "Meridian Time", "isCorrect": false },
      { "text": "Zenith Time", "isCorrect": false },
      { "text": "Local Time", "isCorrect": false },
      { "text": "Standard Time", "isCorrect": true }
    ]
  },
  {
    "question": "Which tool in the Sunclock menubar is used to convert the time display to **Standard Time**?",
    "options": [
      { "text": "Solar Time Mode (S)", "isCorrect": false },
      { "text": "Clock & Map Window (!)", "isCorrect": false },
      { "text": "Legal Time Mode (L)", "isCorrect": true },
      { "text": "Draw/Erase Meridian Tool (M)", "isCorrect": false }
    ]
  },
  {
    "question": "When moving **eastward** from the Greenwich Meridian, what happens to the time?",
    "options": [
      { "text": "Time becomes Local Time", "isCorrect": false },
      { "text": "Time stays the same", "isCorrect": false },
      { "text": "Time increases", "isCorrect": true },
      { "text": "Time decreases", "isCorrect": false }
    ]
  },
  {
    "question": "Which key should be pressed on the keyboard in Sunclock to **start/stop the animation** when determining sunrise/sunset times?",
    "options": [
      { "text": "Control (Ctrl) key", "isCorrect": false },
      { "text": "Single quotation mark (') key", "isCorrect": true },
      { "text": "Spacebar", "isCorrect": false },
      { "text": "Enter key", "isCorrect": false }
    ]
  },
  {
    "question": "What is the term for the apparent north-south movement of the Sun between the Tropic of Cancer and the Tropic of Capricorn?",
    "options": [
      { "text": "Celestial Orbit", "isCorrect": false },
      { "text": "Solar Declination or Ayana", "isCorrect": true },
      { "text": "Greenwich Mean Time", "isCorrect": false },
      { "text": "Time Zone Shift", "isCorrect": false }
    ]
  },
  {
    "question": "On which date is the Sun directly overhead the **Tropic of Capricorn** (Southern Hemisphere)?",
    "options": [
      { "text": "June 21", "isCorrect": false },
      { "text": "March 21", "isCorrect": false },
      { "text": "December 22nd", "isCorrect": true },
      { "text": "September 23", "isCorrect": false }
    ]
  },
  {
    "question": "On which two dates is the Sun's position **directly above the Equator**?",
    "options": [
      { "text": "December 22 and June 21", "isCorrect": false },
      { "text": "March 21 and September 23", "isCorrect": true },
      { "text": "September 23 and December 22", "isCorrect": false },
      { "text": "March 21 and June 21", "isCorrect": false }
    ]
  },
  {
    "question": "What is the Sun's **northward journey** from the Tropic of Capricorn to the Tropic of Cancer called?",
    "options": [
      { "text": "Uttarayanam (Northern Solstice)", "isCorrect": true },
      { "text": "Equinox", "isCorrect": false },
      { "text": "Dakshinayanam (Southern Solstice)", "isCorrect": false },
      { "text": "Solar Zenith", "isCorrect": false }
    ]
  },
  {
    "question": "**Avogadro** is a software primarily used for what purpose?",
    "options": [
      { "text": "Creating 2D interactive geometry figures.", "isCorrect": false },
      { "text": "Recording and editing audio tracks.", "isCorrect": false },
      { "text": "Molecular editing and creating three-dimensional models of molecules.", "isCorrect": true },
      { "text": "Viewing time differences across the world.", "isCorrect": false }
    ]
  },
  {
    "question": "What is the chemical formula for a **water molecule**?",
    "options": [
      { "text": "CH₄", "isCorrect": false },
      { "text": "H₂O (Contains two hydrogen and one oxygen atom)", "isCorrect": true },
      { "text": "CO₂", "isCorrect": false },
      { "text": "O₂", "isCorrect": false }
    ]
  },
  {
    "question": "Which menu option in Avogadro is used to **equalize the bonding and spacing** between elements after drawing a molecule?",
    "options": [
      { "text": "File → Save", "isCorrect": false },
      { "text": "Extensions → Open Babel → Optimise Geometry", "isCorrect": true },
      { "text": "Extensions → Periodic Table", "isCorrect": false },
      { "text": "Build → Insert → Molecule", "isCorrect": false }
    ]
  },
  {
    "question": "Which tool in the Avogadro toolbar must be selected before you can begin to draw a molecular structure?",
    "options": [
      { "text": "Select tool", "isCorrect": false },
      { "text": "Draw tool", "isCorrect": true },
      { "text": "Measure tool", "isCorrect": false },
      { "text": "Navigation tool", "isCorrect": false }
    ]
  },
  {
    "question": "The pre-prepared structure of a glucose molecule can be found in Avogadro by selecting:",
    "options": [
      { "text": "Tools → Optimise", "isCorrect": false },
      { "text": "Extensions → Periodic Table", "isCorrect": false },
      { "text": "Build → Insert → Molecule", "isCorrect": true },
      { "text": "File → New", "isCorrect": false }
    ]
  },
  {
    "question": "Which software is a collection of science and math simulations designed under the leadership of Nobel Prize winner Carl Wieman?",
    "options": [
      { "text": "Sunclock", "isCorrect": false },
      { "text": "LMMS", "isCorrect": false },
      { "text": "PhET", "isCorrect": true },
      { "text": "Avogadro", "isCorrect": false }
    ]
  },
  {
    "question": "The **PhET** simulation 'States of Matter: Basics' is used to understand the molecular arrangement in which substance in the chapter's activity?",
    "options": [
      { "text": "Ammonia", "isCorrect": false },
      { "text": "Water", "isCorrect": true },
      { "text": "Carbon Dioxide", "isCorrect": false },
      { "text": "Glucose", "isCorrect": false }
    ]
  },
  {
    "question": "In the PhET 'States of Matter' simulation, what happens to water molecules when the temperature is increased (from liquid state)?",
    "options": [
      { "text": "They combine to form larger molecules.", "isCorrect": false },
      { "text": "They maintain a constant, close arrangement.", "isCorrect": false },
      { "text": "They move faster and move farther apart (leading to a gaseous state). (Inference)", "isCorrect": true },
      { "text": "They settle into fixed positions and vibrate less.", "isCorrect": false }
    ]
  },
  {
    "question": "What does the **Sunclock** software provide, in addition to time zones and the day/night distinction?",
    "options": [
      { "text": "Molecular structure data.", "isCorrect": false },
      { "text": "Geographical coordinates (latitude and longitude) of each location.", "isCorrect": true },
      { "text": "Historical weather patterns.", "isCorrect": false },
      { "text": "Economic data of countries.", "isCorrect": false }
    ]
  },
  {
    "question": "What is the key in Sunclock to display the **latitude lines and measurements**?",
    "options": [
      { "text": "Draw/Erase parallel [P] tool", "isCorrect": true },
      { "text": "Toggle Night [N]", "isCorrect": false },
      { "text": "Toggle Sun/Moon [Y]", "isCorrect": false },
      { "text": "Draw/Erase Meridian Tool (M)", "isCorrect": false }
    ]
  },
  {
    "question": "Which tool in Sunclock is used to view a place's **Local Time**?",
    "options": [
      { "text": "Adjust Program Value (G)", "isCorrect": false },
      { "text": "Legal Time Mode (L)", "isCorrect": false },
      { "text": "Solar Time Mode (S)", "isCorrect": true },
      { "text": "Move time forward (A)", "isCorrect": false }
    ]
  },
  {
    "question": "What information must be enabled in Sunclock before calculating the time difference between two locations?",
    "options": [
      { "text": "The time increment rate (G) must be set to zero.", "isCorrect": false },
      { "text": "Latitude/longitude grid lines and their corresponding values.", "isCorrect": true },
      { "text": "The Moon visibility (Y) tool.", "isCorrect": false },
      { "text": "The standard time (L) must be converted to local time (S).", "isCorrect": false }
    ]
  },
  {
    "question": "When moving **westward** from the Greenwich Meridian, what happens to the time?",
    "options": [
      { "text": "Time remains constant", "isCorrect": false },
      { "text": "Time increases", "isCorrect": false },
      { "text": "It becomes the legal time", "isCorrect": false },
      { "text": "Time decreases (Inference)", "isCorrect": true }
    ]
  },
  {
    "question": "The Earth rotates from:",
    "options": [
      { "text": "West to East", "isCorrect": true },
      { "text": "North to South", "isCorrect": false },
      { "text": "East to West", "isCorrect": false },
      { "text": "South to North", "isCorrect": false }
    ]
  },
  {
    "question": "Which date marks the point when the Sun moves northward and reaches the **Tropic of Cancer** (Northern Hemisphere)?",
    "options": [
      { "text": "March 21st", "isCorrect": false },
      { "text": "June 21st", "isCorrect": true },
      { "text": "September 23rd", "isCorrect": false },
      { "text": "December 22nd", "isCorrect": false }
    ]
  },
  {
    "question": "What is the Sun's **southward journey** from the Tropic of Cancer to the Tropic of Capricorn called?",
    "options": [
      { "text": "Equator Shift", "isCorrect": false },
      { "text": "Dakshinayanam (Southern Solstice)", "isCorrect": true },
      { "text": "Uttarayanam (Northern Solstice)", "isCorrect": false },
      { "text": "Ayana Reversal", "isCorrect": false }
    ]
  },
  {
    "question": "During the period **from March 22 to September 22**, the Sun's position is above which hemisphere?",
    "options": [
      { "text": "Equatorial Region", "isCorrect": false },
      { "text": "Northern Hemisphere", "isCorrect": true },
      { "text": "Southern Hemisphere", "isCorrect": false },
      { "text": "Antarctic Circle", "isCorrect": false }
    ]
  },
  {
    "question": "When the Sun's position is in the Northern Hemisphere (Uttarayana), what happens to the duration of day at **Kolkata** (Near Tropic of Cancer)?",
    "options": [
      { "text": "It remains the same.", "isCorrect": false },
      { "text": "It decreases.", "isCorrect": false },
      { "text": "It becomes equal to the night duration.", "isCorrect": false },
      { "text": "It increases. (Inference)", "isCorrect": true }
    ]
  },
  {
    "question": "Which two elements combine to form the **water molecule**?",
    "options": [
      { "text": "Sodium and Chlorine", "isCorrect": false },
      { "text": "Hydrogen and Oxygen", "isCorrect": true },
      { "text": "Nitrogen and Hydrogen", "isCorrect": false },
      { "text": "Carbon and Oxygen", "isCorrect": false }
    ]
  },
  {
    "question": "Which step is **NOT** part of the process to draw a molecular structure in Avogadro after opening the software?",
    "options": [
      { "text": "Click on Canvas to include the first element.", "isCorrect": false },
      { "text": "Select the Draw tool.", "isCorrect": false },
      { "text": "Remove the tick mark from Adjust Hydrogen.", "isCorrect": false },
      { "text": "Select Extensions → Periodic Table to begin drawing. (Periodic Table is for reference)", "isCorrect": true }
    ]
  },
  {
    "question": "What is the purpose of ticking 'Labels' in the Display Types in Avogadro?",
    "options": [
      { "text": "To change the color of the molecule.", "isCorrect": false },
      { "text": "To optimize the geometry of the molecule.", "isCorrect": false },
      { "text": "To rotate the molecule in 3D space.", "isCorrect": false },
      { "text": "To make the labels of the elements visible.", "isCorrect": true }
    ]
  },
  {
    "question": "How do you **zoom in and out** on a molecular model in Avogadro's Navigation mode?",
    "options": [
      { "text": "By moving the mouse scroll wheel back and forth.", "isCorrect": true },
      { "text": "By pressing the right mouse button and moving the mouse.", "isCorrect": false },
      { "text": "By using the keyboard's arrow keys.", "isCorrect": false },
      { "text": "By pressing the left mouse button and moving the mouse.", "isCorrect": false }
    ]
  },
  {
    "question": "What elements make up the **Glucose** molecule, as observed from the Avogadro model in the chapter?",
    "options": [
      { "text": "Carbon, Zinc, and Chlorine", "isCorrect": false },
      { "text": "Hydrogen, Oxygen, and Nitrogen", "isCorrect": false },
      { "text": "Hydrogen, Oxygen, and Carbon", "isCorrect": true },
      { "text": "Carbon, Chlorine, and Sodium", "isCorrect": false }
    ]
  },
  {
    "question": "Which menu option in Avogadro provides access to the names and symbols of elements for reference?",
    "options": [
      { "text": "Extensions → Periodic Table", "isCorrect": true },
      { "text": "Tools → Elements List", "isCorrect": false },
      { "text": "Build → Insert → Molecule", "isCorrect": false },
      { "text": "File → Save", "isCorrect": false }
    ]
  },
  {
    "question": "In the **solid state (Ice)** of water (PhET simulation), what is the general observation about the movement of molecules?",
    "options": [
      { "text": "They move past each other easily.", "isCorrect": false },
      { "text": "They move freely and quickly.", "isCorrect": false },
      { "text": "They are far apart from each other.", "isCorrect": false },
      { "text": "They have minimal movement, primarily vibrating in fixed positions. (Inference from Table 8.7)", "isCorrect": true }
    ]
  },
  {
    "question": "The first place on Earth to welcome the New Year is mentioned as:",
    "options": [
      { "text": "London (Greenwich)", "isCorrect": false },
      { "text": "Kolkata (India)", "isCorrect": false },
      { "text": "Moscow (Russia)", "isCorrect": false },
      { "text": "New Zealand", "isCorrect": true }
    ]
  },
  {
    "question": "Which tool in the Sunclock menubar is used to display the **Clock & Map Window** (i.e., the time zone map)?",
    "options": [
      { "text": "Toggle Night (N)", "isCorrect": false },
      { "text": "Legal Time Mode (L)", "isCorrect": false },
      { "text": "Clock & Map Window (!)", "isCorrect": true },
      { "text": "Draw/Erase Meridian Tool (M)", "isCorrect": false }
    ]
  },
  {
    "question": "What is the first step to take after opening the Sunclock software to display the longitudinal lines?",
    "options": [
      { "text": "Convert the time to Legal Time (L).", "isCorrect": false },
      { "text": "Click the Clock & Map Window (!) tool.", "isCorrect": false },
      { "text": "Click once on the Draw/Erase Meridian Tool (M).", "isCorrect": true },
      { "text": "Press the single quotation mark (') key.", "isCorrect": false }
    ]
  },
  {
    "question": "What key is used in Sunclock to **change the rate of time increment** (for time adjustment)?",
    "options": [
      { "text": "B (Move time backward)", "isCorrect": false },
      { "text": "G (Change time increment rate)", "isCorrect": true },
      { "text": "L (Legal Time Mode)", "isCorrect": false },
      { "text": "A (Move time forward)", "isCorrect": false }
    ]
  },
  {
    "question": "What is the reason that the Sun's position shifts between the Tropic of Cancer and the Tropic of Capricorn (Ayana)?",
    "options": [
      { "text": "The Earth's increasing orbital speed.", "isCorrect": false },
      { "text": "The constant tilt of Earth's axis during its revolution.", "isCorrect": true },
      { "text": "The Moon's gravitational pull.", "isCorrect": false },
      { "text": "The change in the Sun's temperature.", "isCorrect": false }
    ]
  },
  {
    "question": "From **September 24 to March 20**, the Sun's position is above which hemisphere?",
    "options": [
      { "text": "Tropic of Cancer", "isCorrect": false },
      { "text": "Southern Hemisphere", "isCorrect": true },
      { "text": "Equatorial Region", "isCorrect": false },
      { "text": "Northern Hemisphere", "isCorrect": false }
    ]
  },
  {
    "question": "The smallest unit that contains the properties of a substance is called its:",
    "options": [
      { "text": "Compound", "isCorrect": false },
      { "text": "Element", "isCorrect": false },
      { "text": "Molecule", "isCorrect": true },
      { "text": "Atom", "isCorrect": false }
    ]
  },
  {
    "question": "To connect the hydrogen atoms to the oxygen atom when drawing a water molecule in Avogadro, which action is required?",
    "options": [
      { "text": "Right-click on the oxygen atom and select 'Connect'.", "isCorrect": false },
      { "text": "Use the 'Insert Bond' tool.", "isCorrect": false },
      { "text": "Type the formula H₂O in the formula bar.", "isCorrect": false },
      { "text": "Click and drag the first oxygen atom on the Canvas to the hydrogen.", "isCorrect": true }
    ]
  },
  {
    "question": "How can you rotate a molecular model in Avogadro's Navigation mode?",
    "options": [
      { "text": "By pressing the left mouse button and moving the mouse.", "isCorrect": true },
      { "text": "By moving the mouse scroll wheel.", "isCorrect": false },
      { "text": "By pressing the right mouse button and moving the mouse.", "isCorrect": false },
      { "text": "By selecting 'Rotate' from the Tools menu.", "isCorrect": false }
    ]
  },
  {
    "question": "The simulation software **PhET** is a collection of simulations for which two subjects?",
    "options": [
      { "text": "Chemistry and Biology", "isCorrect": false },
      { "text": "Computer Science and Music", "isCorrect": false },
      { "text": "Science and Math", "isCorrect": true },
      { "text": "Social Science and Language", "isCorrect": false }
    ]
  },
  {
    "question": "In the **liquid state** of water (Water/PhET simulation), what is the general observation about the movement of molecules?",
    "options": [
      { "text": "They are close but can move past each other with moderate movement. (Inference from Table 8.7)", "isCorrect": true },
      { "text": "They are rigidly fixed and do not move.", "isCorrect": false },
      { "text": "They are completely stationary.", "isCorrect": false },
      { "text": "They move randomly but stay far apart from each other.", "isCorrect": false }
    ]
  },
  {
    "question": "On which date does the Sun's position move northward from the Tropic of Capricorn to the Tropic of Cancer?",
    "options": [
      { "text": "After June 21st", "isCorrect": false },
      { "text": "March 21", "isCorrect": false },
      { "text": "September 23", "isCorrect": false },
      { "text": "After December 22nd (Inference)", "isCorrect": true }
    ]
  },
  {
    "question": "Which Sunclock tool helps to make the **Sun visible** on the map?",
    "options": [
      { "text": "Toggle Night [N]", "isCorrect": false },
      { "text": "Draw/Erase parallel [P]", "isCorrect": false },
      { "text": "Clock & Map Window [!]", "isCorrect": false },
      { "text": "Toggle Sun/Moon [Y]", "isCorrect": true }
    ]
  },
  {
    "question": "When drawing a molecule in Avogadro, which action is performed before clicking on the Canvas to include the first element?",
    "options": [
      { "text": "Selecting the Navigation tool.", "isCorrect": false },
      { "text": "Ticking 'Labels' in Display Types.", "isCorrect": false },
      { "text": "Selecting Extensions → Periodic Table.", "isCorrect": false },
      { "text": "Selecting the element and removing the tick mark from **Adjust Hydrogen**.", "isCorrect": true }
    ]
  },
  {
    "question": "What is the file extension for the pre-prepared Glucose molecular model selected from the Insert Fragment window in Avogadro?",
    "options": [
      { "text": ".ods", "isCorrect": false },
      { "text": ".cjson", "isCorrect": true },
      { "text": ".odt", "isCorrect": false },
      { "text": ".odp", "isCorrect": false }
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
