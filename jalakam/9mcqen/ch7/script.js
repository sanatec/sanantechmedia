document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "What is the purpose of the 'Move' tool in GeoGebra?",
    "options": [
      { "text": "To change the position of a slanting line or vertex of a triangle", "isCorrect": true },
      { "text": "To delete an object", "isCorrect": false },
      { "text": "To measure the distance between points", "isCorrect": false },
      { "text": "To draw a new line", "isCorrect": false }
    ]
  },
  {
    "question": "What is the use of the GeoGebra tool indicated by an icon showing a point and a line with a perpendicular line through the point?",
    "options": [
      { "text": "To draw a parallel line", "isCorrect": false },
      { "text": "To draw a perpendicular line", "isCorrect": true },
      { "text": "To draw a rectangle", "isCorrect": false },
      { "text": "To draw a circle", "isCorrect": false }
    ]
  },
  {
    "question": "What is the use of the GeoGebra tool indicated by an icon showing an angle?",
    "options": [
      { "text": "To draw a polygon", "isCorrect": false },
      { "text": "To draw a perpendicular line", "isCorrect": false },
      { "text": "To draw a circle", "isCorrect": false },
      { "text": "To draw an angle", "isCorrect": true }
    ]
  },
  {
    "question": "How do you find information like atomic number and mass for a specific element in Kalzium?",
    "options": [
      { "text": "Right-click the element and select 'Properties'", "isCorrect": false },
      { "text": "Click on the element in the periodic table", "isCorrect": true },
      { "text": "Go to 'View' -> 'Element Data'", "isCorrect": false },
      { "text": "Type the element's name into the 'Settings' menu", "isCorrect": false }
    ]
  },
  {
    "question": "In the 'Atom Model' view in Kalzium, what do the yellow dots represent?",
    "options": [
      { "text": "Protons", "isCorrect": false },
      { "text": "Neutrons", "isCorrect": false },
      { "text": "Electrons", "isCorrect": true },
      { "text": "Shells", "isCorrect": false }
    ]
  },
  {
    "question": "How can you display elements colored by their group in Kalzium?",
    "options": [
      { "text": "Click on Settings -> Configure Kalzium -> Gradients", "isCorrect": false },
      { "text": "Click on Scheme -> Iconic", "isCorrect": false },
      { "text": "Click on Scheme -> Groups", "isCorrect": true },
      { "text": "Click on View -> Atom Model", "isCorrect": false }
    ]
  },
  {
    "question": "In Kalzium, what menu path classifies elements by their state of matter (solid, gas, etc.)?",
    "options": [
      { "text": "Scheme -> Family", "isCorrect": false },
      { "text": "Gradients -> State of Matter", "isCorrect": true },
      { "text": "Scheme -> Blocks", "isCorrect": false },
      { "text": "Gradients -> Year", "isCorrect": false }
    ]
  },
  {
    "question": "What does the 'Iconic' view (Scheme -> Iconic) in Kalzium show?",
    "options": [
      { "text": "The atom model of each element", "isCorrect": false },
      { "text": "Symbols that indicate the main uses of each element", "isCorrect": true },
      { "text": "The elements colored by their group", "isCorrect": false },
      { "text": "A simplified, monochrome periodic table", "isCorrect": false }
    ]
  },
  {
    "question": "How do you use the search function to find an element like 'Potassium' in Kalzium?",
    "options": [
      { "text": "Type 'K' into the search bar", "isCorrect": false },
      { "text": "Type the atomic number '19' in the search bar", "isCorrect": false },
      { "text": "Type the name 'Potassium' in the search bar and press Enter", "isCorrect": true },
      { "text": "Go to Settings -> Find Element", "isCorrect": false }
    ]
  },
  {
    "question": "In the PhET 'Bending Light' simulation, how is the light source moved?",
    "options": [
      { "text": "Using the keyboard arrows", "isCorrect": false },
      { "text": "Using the mouse to drag it", "isCorrect": true },
      { "text": "By typing in coordinates", "isCorrect": false },
      { "text": "It cannot be moved", "isCorrect": false }
    ]
  },
  {
    "question": "Which section of the 'Bending Light' simulation is used for observing light through prisms?",
    "options": [
      { "text": "The Intro session", "isCorrect": false },
      { "text": "The Prisms window", "isCorrect": true },
      { "text": "The Wave Form window", "isCorrect": false },
      { "text": "The Tools menu", "isCorrect": false }
    ]
  },
  {
    "question": "What tool in the 'Bending Light' simulation can be used to find the angle of incidence and angle of refraction?",
    "options": [
      { "text": "The slider", "isCorrect": false },
      { "text": "The light source", "isCorrect": false },
      { "text": "The protractor tool", "isCorrect": true },
      { "text": "The 'Normal' button", "isCorrect": false }
    ]
  },
  {
    "question": "A method describes dividing a line of 19 units into 3 equal parts using GeoGebra. What is the key step after drawing the 19-unit line and a slanting line?",
    "options": [
      { "text": "Drawing perpendicular lines from the slanting line", "isCorrect": false },
      { "text": "Using the 'Divide' tool on the 19-unit line", "isCorrect": false },
      { "text": "Drawing parallel lines from marks on the slanting line to the 19-unit line", "isCorrect": true },
      { "text": "Measuring the line with the 'Distance' tool", "isCorrect": false }
    ]
  },
  {
    "question": "What is the function of the 'Segment with Given Length' tool in GeoGebra?",
    "options": [
      { "text": "To measure the length of an existing segment", "isCorrect": false },
      { "text": "To draw a line segment of a specific, pre-defined length", "isCorrect": true },
      { "text": "To divide a segment into equal parts", "isCorrect": false },
      { "text": "To change the length of a segment", "isCorrect": false }
    ]
  },
  {
    "question": "What tool in GeoGebra is used to find the distance between points where a line intersects parallel lines?",
    "options": [
      { "text": "The 'Move' tool", "isCorrect": false },
      { "text": "The 'Intersect' tool", "isCorrect": false },
      { "text": "The 'Distance or Length' tool", "isCorrect": true },
      { "text": "The 'Segment' tool", "isCorrect": false }
    ]
  },
  {
    "question": "In the `triangle.ggb` applet, what happens to the ratios (e.g., EC/EA) when a vertex of the triangle is dragged using the 'Move' tool?",
    "options": [
      { "text": "The ratios change to random numbers", "isCorrect": false },
      { "text": "The ratios stay the same", "isCorrect": true },
      { "text": "The ratios become zero", "isCorrect": false },
      { "text": "The ratios become inverted", "isCorrect": false }
    ]
  },
  {
    "question": "To draw a perpendicular line in GeoGebra, what do you need to select after choosing the Perpendicular tool?",
    "options": [
      { "text": "Only the point the line should pass through", "isCorrect": false },
      { "text": "The line to be perpendicular to, and then the point to pass through", "isCorrect": true },
      { "text": "Two points to define the new line", "isCorrect": false },
      { "text": "Only the line to be perpendicular to", "isCorrect": false }
    ]
  },
  {
    "question": "To draw a parallel line in GeoGebra, what must you click on after selecting the Parallel tool?",
    "options": [
      { "text": "Two points to define the new line", "isCorrect": false },
      { "text": "The existing line, and then the point the new line should pass through", "isCorrect": true },
      { "text": "Only the point the line should pass through", "isCorrect": false },
      { "text": "The 'Move' tool to position the line", "isCorrect": false }
    ]
  },
  {
    "question": "What is the first step in the described method to divide a line into 3 equal parts after drawing the initial line?",
    "options": [
      { "text": "Draw another slanting line from one end", "isCorrect": true },
      { "text": "Draw two parallel lines", "isCorrect": false },
      { "text": "Use the 'Midpoint' tool", "isCorrect": false },
      { "text": "Draw a circle", "isCorrect": false }
    ]
  },
  {
    "question": "How can you create a rectangle in GeoGebra using the tools mentioned?",
    "options": [
      { "text": "Using only the 'Polygon' tool", "isCorrect": false },
      { "text": "Using only the 'Parallel Line' tool", "isCorrect": false },
      { "text": "Using the 'Parallel Line' and 'Perpendicular Line' tools", "isCorrect": true },
      { "text": "Using only the 'Circle' tool", "isCorrect": false }
    ]
  },
  {
    "question": "How do you open the configuration window to change colors for groups in Kalzium?",
    "options": [
      { "text": "Settings -> Configure Kalzium", "isCorrect": true },
      { "text": "View -> Change Colors", "isCorrect": false },
      { "text": "Tools -> Gradients", "isCorrect": false },
      { "text": "File -> Configure", "isCorrect": false }
    ]
  },
  {
    "question": "In the element data window (like for Sodium) in Kalzium, how do you see the properties of the *next* element in the periodic table?",
    "options": [
      { "text": "Click the 'Close' button", "isCorrect": false },
      { "text": "Click the 'Next' button", "isCorrect": true },
      { "text": "Press the right arrow key", "isCorrect": false },
      { "text": "Click the 'Help' button", "isCorrect": false }
    ]
  },
  {
    "question": "What menu option in Kalzium do you click to see the electron shell arrangement for an element?",
    "options": [
      { "text": "Data Overview", "isCorrect": false },
      { "text": "Isotopes", "isCorrect": false },
      { "text": "Atom Model", "isCorrect": true },
      { "text": "Spectrum", "isCorrect": false }
    ]
  },
  {
    "question": "How do you find the year an element was discovered using Kalzium?",
    "options": [
      { "text": "It is in the 'Data Overview' tab", "isCorrect": false },
      { "text": "It is in the 'Gradients' tab, next to the 'Scheme' tab", "isCorrect": true },
      { "text": "It is in the 'Atom Model' tab", "isCorrect": false },
      { "text": "It is in the 'Isotope Table'", "isCorrect": false }
    ]
  },
  {
    "question": "What happens in Kalzium when you click on an element in the 'Legend' tab while viewing 'Family' in the 'Scheme' tab?",
    "options": [
      { "text": "The element's data window opens", "isCorrect": false },
      { "text": "The corresponding element family appears in separate colors", "isCorrect": true },
      { "text": "The software closes", "isCorrect": false },
      { "text": "It switches to the 'Iconic' view", "isCorrect": false }
    ]
  },
  {
    "question": "How can you change the color assigned to 'Group 1' elements in Kalzium?",
    "options": [
      { "text": "Go to Scheme -> Groups and click the color", "isCorrect": false },
      { "text": "Go to Settings -> Configure Kalzium -> Gradients and change the color", "isCorrect": true },
      { "text": "Right-click on a Group 1 element and select 'Change Color'", "isCorrect": false },
      { "text": "Go to View -> Colors -> Group 1", "isCorrect": false }
    ]
  },
  {
    "question": "To find the 'Main Group elements' in Kalzium, what do you select from the 'Scheme' tab's drop-down menu?",
    "options": [
      { "text": "Family", "isCorrect": false },
      { "text": "Blocks", "isCorrect": false },
      { "text": "Iconic", "isCorrect": false },
      { "text": "Groups", "isCorrect": true }
    ]
  },
  {
    "question": "What information is available in the 'Data Overview' for an element in Kalzium?",
    "options": [
      { "text": "Only the atom model and isotopes", "isCorrect": false },
      { "text": "Melting Point, Boiling Point, and Electronic configuration", "isCorrect": true },
      { "text": "Only the element's uses", "isCorrect": false },
      { "text": "Only the color-coding scheme", "isCorrect": false }
    ]
  },
  {
    "question": "How do you access the 'Atom Model' for an element like Sodium after opening its data window in Kalzium?",
    "options": [
      { "text": "Click on the 'Atom Model' menu item on the left side", "isCorrect": true },
      { "text": "Click the 'Next' button", "isCorrect": false },
      { "text": "Click on 'Spectrum'", "isCorrect": false },
      { "text": "Go to 'Settings' -> 'View Atom Model'", "isCorrect": false }
    ]
  },
  {
    "question": "What is the menu path to access the 'Iconic' view in Kalzium?",
    "options": [
      { "text": "View -> Iconic", "isCorrect": false },
      { "text": "Scheme -> Iconic", "isCorrect": true },
      { "text": "Settings -> Iconic View", "isCorrect": false },
      { "text": "Tools -> Scheme -> Iconic", "isCorrect": false }
    ]
  },
  {
    "question": "After opening Kalzium, what do you click to see the elements colored by their 'Blocks' (s, p, d, f)?",
    "options": [
      { "text": "Scheme -> Groups", "isCorrect": false },
      { "text": "Scheme -> Family", "isCorrect": false },
      { "text": "Scheme -> Blocks", "isCorrect": true },
      { "text": "Gradients -> Blocks", "isCorrect": false }
    ]
  },
  {
    "question": "How do you find an element's 'Electron Affinity' or 'First Ionization energy' in Kalzium?",
    "options": [
      { "text": "In the 'Atom Model' view", "isCorrect": false },
      { "text": "In the 'Data Overview' window after clicking the element", "isCorrect": true },
      { "text": "In the 'Isotope Table'", "isCorrect": false },
      { "text": "In the 'Spectrum' view", "isCorrect": false }
    ]
  },
  {
    "question": "How can you see a list of an element's isotopes in Kalzium?",
    "options": [
      { "text": "Click on the 'Isotopes' menu item in the element's data window", "isCorrect": true },
      { "text": "Go to 'Tools' -> 'Isotope Table'", "isCorrect": false },
      { "text": "Click on 'Scheme' -> 'Isotopes'", "isCorrect": false },
      { "text": "This feature is not available", "isCorrect": false }
    ]
  },
  {
    "question": "How do you open the 'Bending Light' simulation from the main PhET software menu?",
    "options": [
      { "text": "Select Chemistry -> Bending of light", "isCorrect": false },
      { "text": "Select Physics -> Bending of light", "isCorrect": true },
      { "text": "Select Math -> Light Simulation", "isCorrect": false },
      { "text": "Select File -> Open -> Bending Light", "isCorrect": false }
    ]
  },
  {
    "question": "In the 'Bending Light' simulation, how can you change the material for the top medium?",
    "options": [
      { "text": "Using the 'Material' drop-down in the top slider box", "isCorrect": true },
      { "text": "Using the protractor", "isCorrect": false },
      { "text": "By dragging the light source", "isCorrect": false },
      { "text": "In the 'Prisms' window", "isCorrect": false }
    ]
  },
  {
    "question": "How can you change the material for the bottom medium in the 'Bending Light' simulation?",
    "options": [
      { "text": "Using the 'Material' drop-down in the top slider box", "isCorrect": false },
      { "text": "Using the 'Material' drop-down in the bottom slider box", "isCorrect": true },
      { "text": "This medium cannot be changed", "isCorrect": false },
      { "text": "By checking the 'Normal' box", "isCorrect": false }
    ]
  },
  {
    "question": "What happens to the light ray in the 'Bending Light' simulation when you set both the top and bottom medium to 'Air'?",
    "options": [
      { "text": "It bends towards the normal", "isCorrect": false },
      { "text": "It bends away from the normal", "isCorrect": false },
      { "text": "It travels in a straight line with no change in path", "isCorrect": true },
      { "text": "It reflects completely", "isCorrect": false }
    ]
  },
  {
    "question": "How do you switch the view from a 'Ray' of light to a 'Wave' in the 'Bending Light' simulation?",
    "options": [
      { "text": "In the 'Settings' menu", "isCorrect": false },
      { "text": "By clicking the 'Ray'/'Wave' toggle box", "isCorrect": true },
      { "text": "In the 'Prisms' window", "isCorrect": false },
      { "text": "By dragging the protractor", "isCorrect": false }
    ]
  },
  {
    "question": "What tool can be used to see the intensity of the light wave in the 'Bending Light' simulation?",
    "options": [
      { "text": "The protractor", "isCorrect": false },
      { "text": "The 'Ray'/'Wave' toggle", "isCorrect": false },
      { "text": "The tools on the left side of the Intro window", "isCorrect": true },
      { "text": "The 'Material' slider", "isCorrect": false }
    ]
  },
  {
    "question": "In the 'Intro' session of 'Bending Light', how do you turn on the 'Normal' line?",
    "options": [
      { "text": "By checking the 'Normal' checkbox", "isCorrect": true },
      { "text": "By dragging it from the toolbox", "isCorrect": false },
      { "text": "It is always on", "isCorrect": false },
      { "text": "By setting the angle to 90 degrees", "isCorrect": false }
    ]
  },
  {
    "question": "What happens to the angle of refraction when you drag the light source to increase the angle of incidence (from 0 degrees)?",
    "options": [
      { "text": "The angle of refraction stays the same", "isCorrect": false },
      { "text": "The angle of refraction increases", "isCorrect": true },
      { "text": "The angle of refraction decreases", "isCorrect": false },
      { "text": "The angle of refraction becomes zero", "isCorrect": false }
    ]
  },
  {
    "question": "How can you find the 'Index of Refraction' for a material like 'Water' or 'Glass' in the 'Bending Light' simulation?",
    "options": [
      { "text": "It is displayed on the protractor", "isCorrect": false },
      { "text": "It is in the 'Help' menu", "isCorrect": false },
      { "text": "It is shown on the 'Index of Refraction' slider in the material box", "isCorrect": true },
      { "text": "It is measured with the intensity tool", "isCorrect": false }
    ]
  },
  {
    "question": "What visual change occurs to the light ray when it passes from 'Air' to 'Water' in the 'Bending Light' simulation?",
    "options": [
      { "text": "It bends away from the normal", "isCorrect": false },
      { "text": "It stops at the surface", "isCorrect": false },
      { "text": "It continues in a perfectly straight line", "isCorrect": false },
      { "text": "It bends closer to the normal", "isCorrect": true }
    ]
  },
  {
    "question": "To measure the angle of incidence in 'Bending Light', where must the protractor's center point be placed?",
    "options": [
      { "text": "On the light source", "isCorrect": false },
      { "text": "On the 'Normal' checkbox", "isCorrect": false },
      { "text": "At the point where the light ray hits the boundary between media", "isCorrect": true },
      { "text": "Anywhere in the top medium", "isCorrect": false }
    ]
  },
  {
    "question": "In the 'Bending Light' simulation, what happens to the refracted ray's path when the angle of incidence is set to 0° (along the normal)?",
    "options": [
      { "text": "It bends to 45 degrees", "isCorrect": false },
      { "text": "The path does not change or bend", "isCorrect": true },
      { "text": "It bends to 90 degrees", "isCorrect": false },
      { "text": "It reflects back completely", "isCorrect": false }
    ]
  },
  {
    "question": "In GeoGebra, what tool group would you look in to find the tool 'to mark the intersection point of two lines'?",
    "options": [
      { "text": "Group 1 (Move tools)", "isCorrect": false },
      { "text": "Group 2 (Point tools)", "isCorrect": true },
      { "text": "Group 3 (Line tools)", "isCorrect": false },
      { "text": "Group 5 (Circle tools)", "isCorrect": false }
    ]
  },
  {
    "question": "In GeoGebra, how do you draw a line of a specific length, such as 19 units?",
    "options": [
      { "text": "Select the 'Line' tool and drag it until the length is 19", "isCorrect": false },
      { "text": "Select the tool for 'Segment with Given Length' and enter 19", "isCorrect": true },
      { "text": "Draw any line and use the 'Distance' tool to set its length", "isCorrect": false },
      { "text": "Use the 'Polygon' tool to make a side of length 19", "isCorrect": false }
    ]
  },
  {
    "question": "In the Kalzium element data window, which menu item would you click to find 'Covalent Radius' and 'Atomic mass'?",
    "options": [
      { "text": "Atom Model", "isCorrect": false },
      { "text": "Isotopes", "isCorrect": false },
      { "text": "Data Overview", "isCorrect": true },
      { "text": "Miscellaneous", "isCorrect": false }
    ]
  },
  {
    "question": "In the PhET 'Bending Light' simulation, what two things can you observe using the tools on the left side of the 'Intro' window?",
    "options": [
      { "text": "Angle of incidence and angle of refraction", "isCorrect": false },
      { "text": "The path of light and the material's color", "isCorrect": false },
      { "text": "The wave nature of light and the intensity of light", "isCorrect": true },
      { "text": "The light source's temperature and the water's temperature", "isCorrect": false }
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
