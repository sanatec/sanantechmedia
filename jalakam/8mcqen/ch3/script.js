document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "What is the application software used for recording audio, editing, and creating music generally called?",
    "options": [
      { "text": "Word Processor", "isCorrect": false },
      { "text": "Spreadsheet Application", "isCorrect": false },
      { "text": "Video Editor", "isCorrect": false },
      { "text": "Digital Audio Workstation (DAW)", "isCorrect": true }
    ]
  },
  {
    "question": "Which main window in LMMS software is used to create and adjust the **Rhythm and Bassline** of the music?",
    "options": [
      { "text": "Song-Editor", "isCorrect": false },
      { "text": "Piano-Roll", "isCorrect": false },
      { "text": "FX Mixer", "isCorrect": false },
      { "text": "Beat/Bassline Editor", "isCorrect": true }
    ]
  },
  {
    "question": "Which window in LMMS is used to add and arrange **Melodies and Music Notes** for an instrument?",
    "options": [
      { "text": "Song-Editor", "isCorrect": false },
      { "text": "Beat/Bassline Editor", "isCorrect": false },
      { "text": "FX Mixer", "isCorrect": false },
      { "text": "Piano-Roll", "isCorrect": true }
    ]
  },
  {
    "question": "Which LMMS window is used for the **overall arrangement and sequencing** of the song using blocks?",
    "options": [
      { "text": "Beat/Bassline Editor", "isCorrect": false },
      { "text": "Piano-Roll", "isCorrect": false },
      { "text": "FX Mixer", "isCorrect": false },
      { "text": "Song-Editor", "isCorrect": true }
    ]
  },
  {
    "question": "Which tool in the LMMS software sidebar helps the user to select **Music Tones (Musical Sounds)**?",
    "options": [
      { "text": "My Projects", "isCorrect": false },
      { "text": "My Home", "isCorrect": false },
      { "text": "Instrument Plugins", "isCorrect": false },
      { "text": "My Samples", "isCorrect": true }
    ]
  },
  {
    "question": "What action should be taken to **increase the tempo (speed)** of music created in LMMS software?",
    "options": [
      { "text": "Decrease BPM", "isCorrect": false },
      { "text": "Increase Time signature", "isCorrect": false },
      { "text": "Create more blocks in Beat Editor", "isCorrect": false },
      { "text": "Increase BPM", "isCorrect": true }
    ]
  },
  {
    "question": "In LMMS, what does **BPM** stand for?",
    "options": [
      { "text": "Basic Project Mode", "isCorrect": false },
      { "text": "Best Performance Music", "isCorrect": false },
      { "text": "Base Position Marker", "isCorrect": false },
      { "text": "Beats Per Minute", "isCorrect": true }
    ]
  },
  {
    "question": "What mouse action is required to **add a new beat** in the Beat/Bassline Editor of LMMS?",
    "options": [
      { "text": "Right Click", "isCorrect": false },
      { "text": "Scroll Wheel Click", "isCorrect": false },
      { "text": "Double Click", "isCorrect": false },
      { "text": "Left Click", "isCorrect": true }
    ]
  },
  {
    "question": "What mouse action is required to **delete a beat** in the Beat/Bassline Editor of LMMS?",
    "options": [
      { "text": "Left Click", "isCorrect": false },
      { "text": "Right Click", "isCorrect": false },
      { "text": "Double Click", "isCorrect": false },
      { "text": "Scroll Wheel Click", "isCorrect": true }
    ]
  },
  {
    "question": "What mouse action is required to **delete blocks** created in the Song-Editor window of LMMS?",
    "options": [
      { "text": "Left Click", "isCorrect": false },
      { "text": "Scroll Wheel Click", "isCorrect": false },
      { "text": "Double Click", "isCorrect": false },
      { "text": "Right Click", "isCorrect": true }
    ]
  },
  {
    "question": "What mouse action is required to **delete music notes** created in the Piano-Roll window of LMMS?",
    "options": [
      { "text": "Left Click", "isCorrect": false },
      { "text": "Scroll Wheel Click", "isCorrect": false },
      { "text": "Double Click", "isCorrect": false },
      { "text": "Right Click", "isCorrect": true }
    ]
  },
  {
    "question": "What is the menu path used to convert the created music in LMMS to an audio file format like WAV or MP3?",
    "options": [
      { "text": "Edit → Export", "isCorrect": false },
      { "text": "Tools → Export", "isCorrect": false },
      { "text": "View → Export", "isCorrect": false },
      { "text": "File → Export", "isCorrect": true }
    ]
  },
  {
    "question": "Which tool in the LMMS sidebar helps to add a **new instrument** (or instrument track) to the project?",
    "options": [
      { "text": "My Projects", "isCorrect": false },
      { "text": "My Samples", "isCorrect": false },
      { "text": "My Home", "isCorrect": false },
      { "text": "Instrument Plugins", "isCorrect": true }
    ]
  },
  {
    "question": "What is the file extension for a project file created and saved in LMMS?",
    "options": [
      { "text": ".mp3", "isCorrect": false },
      { "text": ".wav", "isCorrect": false },
      { "text": ".ogg", "isCorrect": false },
      { "text": ".mmpz", "isCorrect": true }
    ]
  },
  {
    "question": "What is the action required to add a music block from the Beat/Bassline Editor into the **Song-Editor**?",
    "options": [
      { "text": "Copy/Paste from Piano-Roll.", "isCorrect": false },
      { "text": "Double Click in Instrument Plugins.", "isCorrect": false },
      { "text": "Right Click in Beat/Bassline Editor.", "isCorrect": false },
      { "text": "Drag and Drop from the Beat/Bassline Editor.", "isCorrect": true }
    ]
  },
  {
    "question": "What type of application software is used for preparing **sound tracks** for radio and television programs?",
    "options": [
      { "text": "Image Editor", "isCorrect": false },
      { "text": "Word Processor", "isCorrect": false },
      { "text": "Video Editor", "isCorrect": false },
      { "text": "DAW", "isCorrect": true }
    ]
  },
  {
    "question": "Where are the main tools (like My Projects, My Samples, etc.) located in the LMMS window?",
    "options": [
      { "text": "The bottom toolbar", "isCorrect": false },
      { "text": "The top menu bar", "isCorrect": false },
      { "text": "The central editing area", "isCorrect": false },
      { "text": "The Sidebar", "isCorrect": true }
    ]
  },
  {
    "question": "Which tool in LMMS is used for opening existing projects and starting new ones?",
    "options": [
      { "text": "My Home", "isCorrect": false },
      { "text": "My Samples", "isCorrect": false },
      { "text": "Instrument Plugins", "isCorrect": false },
      { "text": "My Projects", "isCorrect": true }
    ]
  },
  {
    "question": "What mouse action is required to **add music notes** in the Piano-Roll window of LMMS?",
    "options": [
      { "text": "Right Click", "isCorrect": false },
      { "text": "Scroll Wheel Click", "isCorrect": false },
      { "text": "Double Click", "isCorrect": false },
      { "text": "Left Click", "isCorrect": true }
    ]
  },
  {
    "question": "What should be done to **decrease the tempo (speed)** of music in LMMS?",
    "options": [
      { "text": "Increase BPM", "isCorrect": false },
      { "text": "Increase Time signature", "isCorrect": false },
      { "text": "Increase the number of beats", "isCorrect": false },
      { "text": "Decrease BPM", "isCorrect": true }
    ]
  },
  {
    "question": "Which of the following is **not** listed as a main window in the LMMS software interface (as per the chapter)?",
    "options": [
      { "text": "Song-Editor", "isCorrect": false },
      { "text": "Piano-Roll", "isCorrect": false },
      { "text": "Beat/Bassline Editor", "isCorrect": false },
      { "text": "Timeline Editor", "isCorrect": true }
    ]
  },
  {
    "question": "What is one of the primary purposes of DAW software?",
    "options": [
      { "text": "To read text files.", "isCorrect": false },
      { "text": "To prepare slide shows.", "isCorrect": false },
      { "text": "To edit videos.", "isCorrect": false },
      { "text": "To record audio.", "isCorrect": true }
    ]
  },
  {
    "question": "With the advent of which technology did computers and related software begin to be used for music creation instead of just playing and recording instruments?",
    "options": [
      { "text": "Analog Technology", "isCorrect": false },
      { "text": "Optical Technology", "isCorrect": false },
      { "text": "Thermal Technology", "isCorrect": false },
      { "text": "Digital Technology", "isCorrect": true }
    ]
  },
  {
    "question": "What is the action required to change the **position** of a music block in the LMMS Song-Editor?",
    "options": [
      { "text": "Right Click and select Move.", "isCorrect": false },
      { "text": "Double Click.", "isCorrect": false },
      { "text": "Ctrl + Click.", "isCorrect": false },
      { "text": "Click and Drag.", "isCorrect": true }
    ]
  },
  {
    "question": "If a block in the LMMS Song-Editor is incorrect, which mouse action is used to remove it?",
    "options": [
      { "text": "Left Click", "isCorrect": false },
      { "text": "Scroll Wheel Click", "isCorrect": false },
      { "text": "Delete key on the keyboard.", "isCorrect": false },
      { "text": "Right Click", "isCorrect": true }
    ]
  },
  {
    "question": "What is the main characteristic or use of the **Piano-Roll** window in LMMS?",
    "options": [
      { "text": "It adjusts the speed of each music track.", "isCorrect": false },
      { "text": "It adds beats and rhythm.", "isCorrect": false },
      { "text": "It provides sound effects.", "isCorrect": false },
      { "text": "It adds and modifies melody notes.", "isCorrect": true }
    ]
  },
  {
    "question": "Which LMMS tool is primarily used for managing project files (opening and saving)?",
    "options": [
      { "text": "Instrument Plugins", "isCorrect": false },
      { "text": "My Samples", "isCorrect": false },
      { "text": "My Home", "isCorrect": false },
      { "text": "My Projects", "isCorrect": true }
    ]
  },
  {
    "question": "What is the exact mouse action required to **add a beat** in the Beat/Bassline Editor of LMMS?",
    "options": [
      { "text": "Right Click", "isCorrect": false },
      { "text": "Scroll Wheel Click", "isCorrect": false },
      { "text": "Shift + Click on the keyboard", "isCorrect": false },
      { "text": "Left Click", "isCorrect": true }
    ]
  },
  {
    "question": "What is the process of converting the music created in LMMS into an audio format like .wav or .mp3 called?",
    "options": [
      { "text": "Save", "isCorrect": false },
      { "text": "Import", "isCorrect": false },
      { "text": "Render", "isCorrect": false },
      { "text": "Export", "isCorrect": true }
    ]
  },
  {
    "question": "What must be added to the Piano-Roll window in LMMS to create a **melody**?",
    "options": [
      { "text": "Blocks", "isCorrect": false },
      { "text": "Beats", "isCorrect": false },
      { "text": "Mixer Channels", "isCorrect": false },
      { "text": "Music Notes", "isCorrect": true }
    ]
  },
  {
    "question": "If the song created in LMMS has a speed of 120 BPM, what happens if you change it to 150 BPM?",
    "options": [
      { "text": "The rhythm of the song slows down.", "isCorrect": false },
      { "text": "The number of instruments increases.", "isCorrect": false },
      { "text": "The song stops completely.", "isCorrect": false },
      { "text": "The speed of the song increases.", "isCorrect": true }
    ]
  },
  {
    "question": "Where is the 'Instrument Plugins' tool for adding a new instrument located in LMMS?",
    "options": [
      { "text": "In the Song-Editor window.", "isCorrect": false },
      { "text": "In the Beat/Bassline Editor.", "isCorrect": false },
      { "text": "In the bottom FX Mixer.", "isCorrect": false },
      { "text": "In the Sidebar's Tools section.", "isCorrect": true }
    ]
  },
  {
    "question": "Where are the beats added in the LMMS Beat/Bassline Editor used as blocks?",
    "options": [
      { "text": "In the Piano-Roll.", "isCorrect": false },
      { "text": "In the FX Mixer.", "isCorrect": false },
      { "text": "In the Instrument Plugins.", "isCorrect": false },
      { "text": "In the Song-Editor.", "isCorrect": true }
    ]
  },
  {
    "question": "Can the Scroll Wheel Click be used to **delete a music note** in the LMMS Piano-Roll window?",
    "options": [
      { "text": "Yes, Scroll Wheel Click can be used to delete it.", "isCorrect": false },
      { "text": "No, Scroll Wheel Click is used in the Beat Editor.", "isCorrect": true },
      { "text": "Yes, select the note and press the Delete key.", "isCorrect": false },
      { "text": "No, only Left Click can be used to delete it.", "isCorrect": false }
    ]
  },
  {
    "question": "Can Left Click be used to **delete a block** in the LMMS Song-Editor window?",
    "options": [
      { "text": "Yes, Left Click can be used to delete it.", "isCorrect": false },
      { "text": "No, only Right Click can be used to delete the block.", "isCorrect": true },
      { "text": "Yes, select the block and press the Delete key.", "isCorrect": false },
      { "text": "No, the mouse wheel must be clicked.", "isCorrect": false }
    ]
  },
  {
    "question": "Which of the following is **not** indicated in the chapter as a primary use for DAW software?",
    "options": [
      { "text": "Recording audio.", "isCorrect": false },
      { "text": "Editing music.", "isCorrect": false },
      { "text": "Preparing Sound Tracks for radio programs.", "isCorrect": false },
      { "text": "Creating projection slides.", "isCorrect": true }
    ]
  },
  {
    "question": "From where are the **Music Tones** selected in LMMS?",
    "options": [
      { "text": "My Projects", "isCorrect": false },
      { "text": "Piano-Roll", "isCorrect": false },
      { "text": "Song-Editor", "isCorrect": false },
      { "text": "My Samples", "isCorrect": true }
    ]
  },
  {
    "question": "Before the advent of digital technology, how was music primarily created and recorded for media?",
    "options": [
      { "text": "Using software like LMMS.", "isCorrect": false },
      { "text": "Using video editing software.", "isCorrect": false },
      { "text": "Using analog recorders.", "isCorrect": false },
      { "text": "By playing and recording musical instruments.", "isCorrect": true }
    ]
  },
  {
    "question": "LMMS software is an example of a:",
    "options": [
      { "text": "Word Processor", "isCorrect": false },
      { "text": "Image Editor", "isCorrect": false },
      { "text": "Spreadsheet", "isCorrect": false },
      { "text": "DAW", "isCorrect": true }
    ]
  },
  {
    "question": "What is the correct procedure to export a music track to an audio format in LMMS?",
    "options": [
      { "text": "Tools → Export", "isCorrect": false },
      { "text": "Edit → Export", "isCorrect": false },
      { "text": "View → Export", "isCorrect": false },
      { "text": "File → Export", "isCorrect": true }
    ]
  },
  {
    "question": "What mouse action is used to **add a music note** in the LMMS Piano-Roll window?",
    "options": [
      { "text": "Right Click", "isCorrect": false },
      { "text": "Scroll Wheel Click", "isCorrect": false },
      { "text": "Double Click", "isCorrect": false },
      { "text": "Left Click", "isCorrect": true }
    ]
  },
  {
    "question": "What metric in LMMS is used to increase or decrease the beat/speed?",
    "options": [
      { "text": "Time Signature", "isCorrect": false },
      { "text": "Volume", "isCorrect": false },
      { "text": "Pitch", "isCorrect": false },
      { "text": "BPM", "isCorrect": true }
    ]
  },
  {
    "question": "If you want to change the **Rhythm** of a song in LMMS, which window should you open first?",
    "options": [
      { "text": "Song-Editor", "isCorrect": false },
      { "text": "Piano-Roll", "isCorrect": false },
      { "text": "FX Mixer", "isCorrect": false },
      { "text": "Beat/Bassline Editor", "isCorrect": true }
    ]
  },
  {
    "question": "Background music for movies and animations is created with the help of:",
    "options": [
      { "text": "Water.", "isCorrect": false },
      { "text": "Analog devices.", "isCorrect": false },
      { "text": "A printer.", "isCorrect": false },
      { "text": "Computers and related software.", "isCorrect": true }
    ]
  },
  {
    "question": "When trying to open a project in LMMS, which file extension should the user look for?",
    "options": [
      { "text": ".wav", "isCorrect": false },
      { "text": ".mp3", "isCorrect": false },
      { "text": ".pdf", "isCorrect": false },
      { "text": ".mmpz", "isCorrect": true }
    ]
  },
  {
    "question": "What is the correct mouse action to delete a block in the Song-Editor window of LMMS?",
    "options": [
      { "text": "Left Click", "isCorrect": false },
      { "text": "Double Click", "isCorrect": false },
      { "text": "Scroll Wheel Click", "isCorrect": false },
      { "text": "Right Click", "isCorrect": true }
    ]
  },
  {
    "question": "Where is the 'Instrument Plugins' tool for adding musical instruments located in LMMS?",
    "options": [
      { "text": "In the bottom FX Mixer.", "isCorrect": false },
      { "text": "At the top of the Song-Editor window.", "isCorrect": false },
      { "text": "On the left side of the Piano-Roll.", "isCorrect": false },
      { "text": "In the Sidebar.", "isCorrect": true }
    ]
  },
  {
    "question": "What is the main function of the **Beat/Bassline Editor** in LMMS?",
    "options": [
      { "text": "Arranging music notes.", "isCorrect": false },
      { "text": "Sequencing the entire song.", "isCorrect": false },
      { "text": "Providing sound effects.", "isCorrect": false },
      { "text": "Editing the rhythm and bassline.", "isCorrect": true }
    ]
  },
  {
    "question": "Can 'My Samples' be used to add a new instrument in LMMS?",
    "options": [
      { "text": "Yes, instruments can be selected from My Samples.", "isCorrect": false },
      { "text": "No, My Samples is for selecting sound tones.", "isCorrect": true },
      { "text": "Yes, My Samples and Instrument Plugins are the same.", "isCorrect": false },
      { "text": "No, My Samples is for project files.", "isCorrect": false }
    ]
  },
  {
    "question": "If a song created in LMMS has a tempo of 90 BPM, when does the speed increase?",
    "options": [
      { "text": "When the BPM is reduced to 70.", "isCorrect": false },
      { "text": "When the Time Signature is changed.", "isCorrect": false },
      { "text": "When more beats are added in the Beat/Bassline Editor.", "isCorrect": false },
      { "text": "When the BPM is increased to 110.", "isCorrect": true }
    ]
  },
  {
    "question": "What is added in the LMMS Piano-Roll window to create a **melody**?",
    "options": [
      { "text": "Blocks", "isCorrect": false },
      { "text": "Beats", "isCorrect": false },
      { "text": "Mixer Channels", "isCorrect": false },
      { "text": "Notes", "isCorrect": true }
    ]
  },
  {
    "question": "Which window/tool is **NOT** used to edit music blocks in LMMS?",
    "options": [
      { "text": "Song-Editor", "isCorrect": false },
      { "text": "Piano-Roll", "isCorrect": false },
      { "text": "Beat/Bassline Editor", "isCorrect": false },
      { "text": "My Projects", "isCorrect": true }
    ]
  },
  {
    "question": "What is the primary use of the 'My Samples' tool in LMMS?",
    "options": [
      { "text": "To open a project.", "isCorrect": false },
      { "text": "To add instruments.", "isCorrect": false },
      { "text": "To arrange the song.", "isCorrect": false },
      { "text": "To select music tones (Sounds).", "isCorrect": true }
    ]
  },
  {
    "question": "What mouse action is used to **add a music note** in the Piano-Roll window?",
    "options": [
      { "text": "Right Click", "isCorrect": false },
      { "text": "Scroll Wheel Click", "isCorrect": false },
      { "text": "Double Click", "isCorrect": false },
      { "text": "Left Click", "isCorrect": true }
    ]
  },
  {
    "question": "DAWs are also used for activities such as preparing **sound tracks** for which programs?",
    "options": [
      { "text": "Video Clips", "isCorrect": false },
      { "text": "Slides", "isCorrect": false },
      { "text": "Text Files", "isCorrect": false },
      { "text": "Radio and Television Programs", "isCorrect": true }
    ]
  },
  {
    "question": "Which of the following is **NOT** a main window in LMMS?",
    "options": [
      { "text": "Song-Editor", "isCorrect": false },
      { "text": "Beat/Bassline Editor", "isCorrect": false },
      { "text": "Piano-Roll", "isCorrect": false },
      { "text": "Character Window", "isCorrect": true }
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
