document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "Which presentation method allows navigating between slides as needed, rather than strictly following a continuous sequence?",
    "options": [
      { "text": "Linear Method", "isCorrect": false },
      { "text": "Non-Linear Method", "isCorrect": true },
      { "text": "Sequential Method", "isCorrect": false },
      { "text": "Preset Method", "isCorrect": false }
    ]
  },
  {
    "question": "Which feature in LibreOffice Impress is used to link a slide element (image/text) to other slides or external files?",
    "options": [
      { "text": "Animation", "isCorrect": false },
      { "text": "Transition", "isCorrect": false },
      { "text": "Interaction/Hyperlink", "isCorrect": true },
      { "text": "Master Slide", "isCorrect": false }
    ]
  },
  {
    "question": "What is the primary technique that helps in making a presentation smooth (Smooth Presentation)?",
    "options": [
      { "text": "Slide Transition", "isCorrect": false },
      { "text": "Animation Effects", "isCorrect": false },
      { "text": "Non-Linear Navigation", "isCorrect": true },
      { "text": "Full Screen View", "isCorrect": false }
    ]
  },
  {
    "question": "What tool in LibreOffice Impress helps to structurally organize slides and display all objects within them (images, tables, text frames, etc.)?",
    "options": [
      { "text": "Project Bin", "isCorrect": false },
      { "text": "Clip Art", "isCorrect": false },
      { "text": "Navigator", "isCorrect": true },
      { "text": "Timeline", "isCorrect": false }
    ]
  },
  {
    "question": "The visual effect that controls how the display changes when moving from one slide to the next is controlled by what?",
    "options": [
      { "text": "Animation", "isCorrect": false },
      { "text": "Slide Transition", "isCorrect": true },
      { "text": "Interaction", "isCorrect": false },
      { "text": "Grouping", "isCorrect": false }
    ]
  },
  {
    "question": "The method used to control the style and timing of how individual content (text, image) appears within a single slide is called?",
    "options": [
      { "text": "Slide Transition", "isCorrect": false },
      { "text": "Animation", "isCorrect": true },
      { "text": "Insert Image", "isCorrect": false },
      { "text": "Layout", "isCorrect": false }
    ]
  },
  {
    "question": "What is the most probable reason a video embedded in a presentation via Hyperlink might stop working?",
    "options": [
      { "text": "The video has no sound", "isCorrect": false },
      { "text": "The video file was moved from its original folder", "isCorrect": true },
      { "text": "The video file size is 15MB", "isCorrect": false },
      { "text": "The video content is unsupported", "isCorrect": false }
    ]
  },
  {
    "question": "What is the typical file extension for a presentation created using LibreOffice Impress?",
    "options": [
      { "text": ".pptx", "isCorrect": false },
      { "text": ".odp", "isCorrect": true },
      { "text": ".pdf", "isCorrect": false },
      { "text": ".odt", "isCorrect": false }
    ]
  },
  {
    "question": "What is the purpose of presenting main ideas on one slide at the beginning, with details provided later in a presentation?",
    "options": [
      { "text": "To make the presentation more attractive", "isCorrect": false },
      { "text": "To avoid a large file size", "isCorrect": false },
      { "text": "To allow easy navigation to required topics", "isCorrect": true },
      { "text": "To simplify adding audio", "isCorrect": false }
    ]
  },
  {
    "question": "Is it possible to provide a link to an external web page using Interaction?",
    "options": [
      { "text": "No, it's not possible", "isCorrect": false },
      { "text": "Yes, but only in full screen", "isCorrect": false },
      { "text": "Yes, it is possible", "isCorrect": true },
      { "text": "Only possible for PDF files", "isCorrect": false }
    ]
  },
  {
    "question": "What effect should be applied to list information on a slide one point after another?",
    "options": [
      { "text": "Slide Transition", "isCorrect": false },
      { "text": "Interaction", "isCorrect": false },
      { "text": "Animation", "isCorrect": true },
      { "text": "Group", "isCorrect": false }
    ]
  },
  {
    "question": "After adding a transition to a slide in LibreOffice Impress, what mode is used to view the presentation in class?",
    "options": [
      { "text": "Normal View", "isCorrect": false },
      { "text": "Slide Show Mode", "isCorrect": true },
      { "text": "Outline View", "isCorrect": false },
      { "text": "Notes View", "isCorrect": false }
    ]
  },
  {
    "question": "What helps to show a presentation in a 'customized' manner?",
    "options": [
      { "text": "Slide Layout", "isCorrect": false },
      { "text": "Master Slide", "isCorrect": false },
      { "text": "Interaction/Hyperlink", "isCorrect": true },
      { "text": "Transition Speed", "isCorrect": false }
    ]
  },
  {
    "question": "A presentation that includes main ideas about plant and animal cells on one slide, and detailed explanations on subsequent slides, is an example of what type of presentation?",
    "options": [
      { "text": "Linear Presentation", "isCorrect": false },
      { "text": "Sequential Presentation", "isCorrect": false },
      { "text": "Non-Linear Presentation", "isCorrect": true },
      { "text": "Random Presentation", "isCorrect": false }
    ]
  },
  {
    "question": "What elements on a slide can be viewed in the Navigator tool?",
    "options": [
      { "text": "Only Text Frames", "isCorrect": false },
      { "text": "Images, Tables, Text Frames, and Objects", "isCorrect": true },
      { "text": "Only Transition Effects", "isCorrect": false },
      { "text": "Only Audio Clips", "isCorrect": false }
    ]
  },
  {
    "question": "What is the function key commonly used to start a slide show in LibreOffice Impress?",
    "options": [
      { "text": "F1", "isCorrect": false },
      { "text": "F5", "isCorrect": true },
      { "text": "F7", "isCorrect": false },
      { "text": "F12", "isCorrect": false }
    ]
  },
  {
    "question": "Can the navigation between slides be customized using Interaction?",
    "options": [
      { "text": "No", "isCorrect": false },
      { "text": "Only in linear slides", "isCorrect": false },
      { "text": "Yes", "isCorrect": true },
      { "text": "Only on the main slides", "isCorrect": false }
    ]
  },
  {
    "question": "What is the main goal of applying 'Animation' in LibreOffice Impress?",
    "options": [
      { "text": "To change the slide color", "isCorrect": false },
      { "text": "To control the entrance and exit timing of objects", "isCorrect": true },
      { "text": "To slow down the transition speed", "isCorrect": false },
      { "text": "To add a hyperlink", "isCorrect": false }
    ]
  },
  {
    "question": "What helps to include **resources** like videos and documents in a presentation?",
    "options": [
      { "text": "Slide Layout", "isCorrect": false },
      { "text": "Slide Transition", "isCorrect": false },
      { "text": "Interaction", "isCorrect": true },
      { "text": "Color Scheme", "isCorrect": false }
    ]
  },
  {
    "question": "Which method is used when slides are shown one after another automatically during a presentation?",
    "options": [
      { "text": "Non-Linear Method", "isCorrect": false },
      { "text": "Linear Method", "isCorrect": true },
      { "text": "Random Method", "isCorrect": false },
      { "text": "Custom Method", "isCorrect": false }
    ]
  },
  {
    "question": "Which statement about 'Interaction' in LibreOffice Impress is incorrect?",
    "options": [
      { "text": "Navigation can be customized as per requirement", "isCorrect": false },
      { "text": "The presentation can be shown in a customized manner", "isCorrect": false },
      { "text": "Slide navigation is only possible by providing interaction", "isCorrect": true },
      { "text": "Resources can be included through interaction", "isCorrect": false }
    ]
  },
  {
    "question": "What change occurs in a presentation after applying a Slide Transition?",
    "options": [
      { "text": "Each object gets movement", "isCorrect": false },
      { "text": "Visual movement is added between slide changes", "isCorrect": true },
      { "text": "Letters in the presentation are highlighted", "isCorrect": false },
      { "text": "The slide automatically moves to the next one", "isCorrect": false }
    ]
  },
  {
    "question": "Which feature is used to open a **document file** when clicking on an image on a slide?",
    "options": [
      { "text": "Slide Transition", "isCorrect": false },
      { "text": "Animation", "isCorrect": false },
      { "text": "Interaction", "isCorrect": true },
      { "text": "Layout", "isCorrect": false }
    ]
  },
  {
    "question": "Why is the Navigator tool used to easily select objects on a slide?",
    "options": [
      { "text": "To provide slide transition", "isCorrect": false },
      { "text": "To apply animation/interaction", "isCorrect": true },
      { "text": "To change the slide background color", "isCorrect": false },
      { "text": "To change the size of each object", "isCorrect": false }
    ]
  },
  {
    "question": "Which resource **cannot** be included in a LibreOffice Impress slide via Hyperlink/Interaction?",
    "options": [
      { "text": "Audio File", "isCorrect": false },
      { "text": "External Web Page", "isCorrect": false },
      { "text": "Printed Paper", "isCorrect": true },
      { "text": "PDF Document", "isCorrect": false }
    ]
  },
  {
    "question": "What is prioritized more than Transition for a smooth presentation?",
    "options": [
      { "text": "The number of slides", "isCorrect": false },
      { "text": "Changing navigation as needed", "isCorrect": true },
      { "text": "The font size", "isCorrect": false },
      { "text": "The background image", "isCorrect": false }
    ]
  },
  {
    "question": "What is the main purpose of applying 'Animation' in a presentation?",
    "options": [
      { "text": "For slides to advance automatically", "isCorrect": false },
      { "text": "To make the content more engaging", "isCorrect": true },
      { "text": "To save the presentation", "isCorrect": false },
      { "text": "To control navigation", "isCorrect": false }
    ]
  },
  {
    "question": "What is the command to insert a new slide in LibreOffice Impress?",
    "options": [
      { "text": "File → New", "isCorrect": false },
      { "text": "Insert → Slide", "isCorrect": true },
      { "text": "Format → Page", "isCorrect": false },
      { "text": "Tools → Options", "isCorrect": false }
    ]
  },
  {
    "question": "Does the Navigator tool help in viewing the structural form of the slides in a presentation?",
    "options": [
      { "text": "No", "isCorrect": false },
      { "text": "Only in certain formats", "isCorrect": false },
      { "text": "Yes", "isCorrect": true },
      { "text": "Only text", "isCorrect": false }
    ]
  },
  {
    "question": "To ensure the next slide appears only when the mouse is clicked, which option should be selected in the Transition settings?",
    "options": [
      { "text": "Automatically After", "isCorrect": false },
      { "text": "On Mouse Click", "isCorrect": true },
      { "text": "With Preview", "isCorrect": false },
      { "text": "Change Slide", "isCorrect": false }
    ]
  },
  {
    "question": "What is the next main step after applying Slide Transition in a presentation?",
    "options": [
      { "text": "Apply Animation", "isCorrect": false },
      { "text": "Save the presentation file", "isCorrect": true },
      { "text": "Add audio", "isCorrect": false },
      { "text": "Provide a link to a web page", "isCorrect": false }
    ]
  },
  {
    "question": "What is the benefit of the Non-Linear method if the audience raises questions about main ideas during a presentation?",
    "options": [
      { "text": "The transition can be changed", "isCorrect": false },
      { "text": "It allows immediate jump to the slides related to the question", "isCorrect": true },
      { "text": "More animation can be applied", "isCorrect": false },
      { "text": "Images can be enlarged", "isCorrect": false }
    ]
  },
  {
    "question": "LibreOffice Impress is an example of what kind of software?",
    "options": [
      { "text": "Word Processor", "isCorrect": false },
      { "text": "Spreadsheet", "isCorrect": false },
      { "text": "Presentation Software", "isCorrect": true },
      { "text": "Graphics Editor", "isCorrect": false }
    ]
  },
  {
    "question": "Slide Transition is applied to which part of a presentation?",
    "options": [
      { "text": "The entire slide", "isCorrect": true },
      { "text": "Only one object", "isCorrect": false },
      { "text": "Only the text frame", "isCorrect": false },
      { "text": "Only between two objects", "isCorrect": false }
    ]
  },
  {
    "question": "What is the main difference between Animation and Slide Transition?",
    "options": [
      { "text": "Both are the same effect", "isCorrect": false },
      { "text": "Animation is for objects on a slide, Transition is for slide change", "isCorrect": true },
      { "text": "Only Transition can add sound", "isCorrect": false },
      { "text": "Animation affects the entire slide", "isCorrect": false }
    ]
  },
  {
    "question": "Which menu option is used to change the background color of a slide?",
    "options": [
      { "text": "File → Save", "isCorrect": false },
      { "text": "Format → Page", "isCorrect": true },
      { "text": "Insert → Image", "isCorrect": false },
      { "text": "Slide Show → Settings", "isCorrect": false }
    ]
  },
  {
    "question": "Where is the Navigator tool usually located in the Impress interface?",
    "options": [
      { "text": "At the top of the screen", "isCorrect": false },
      { "text": "On the right side of the screen", "isCorrect": false },
      { "text": "On the left side of the screen", "isCorrect": true },
      { "text": "At the bottom of the screen", "isCorrect": false }
    ]
  },
  {
    "question": "What are the two main effects that help control the **timing** in a presentation?",
    "options": [
      { "text": "Transition, Interaction", "isCorrect": false },
      { "text": "Animation, Slide Transition", "isCorrect": true },
      { "text": "Navigator, Layout", "isCorrect": false },
      { "text": "Save, Export", "isCorrect": false }
    ]
  },
  {
    "question": "Under which menu option is the 'Interaction' option likely to be found in LibreOffice Impress?",
    "options": [
      { "text": "Tools", "isCorrect": false },
      { "text": "Edit", "isCorrect": false },
      { "text": "Slide Show", "isCorrect": true },
      { "text": "Help", "isCorrect": false }
    ]
  },
  {
    "question": "Which presentation method is suitable for explaining a large dataset by giving each part on a separate slide?",
    "options": [
      { "text": "Non-Linear Method", "isCorrect": false },
      { "text": "Linear Method", "isCorrect": true },
      { "text": "Mixed Method", "isCorrect": false },
      { "text": "Custom Method", "isCorrect": false }
    ]
  },
  {
    "question": "What Navigator feature helps in easily identifying objects on slides?",
    "options": [
      { "text": "Providing automatic colors to objects", "isCorrect": false },
      { "text": "Displaying objects with their names", "isCorrect": true },
      { "text": "Changing the slide layout", "isCorrect": false },
      { "text": "Providing interaction", "isCorrect": false }
    ]
  },
  {
    "question": "Which technology should be used to jump to specific slides when clicking on text frames like 'Cell Membrane' or 'Nucleus'?",
    "options": [
      { "text": "Slide Transition", "isCorrect": false },
      { "text": "Animation", "isCorrect": false },
      { "text": "Interaction", "isCorrect": true },
      { "text": "Master Slide", "isCorrect": false }
    ]
  },
  {
    "question": "Which element in a presentation is most often used to attract the audience's attention?",
    "options": [
      { "text": "Hyperlink", "isCorrect": false },
      { "text": "Interaction", "isCorrect": false },
      { "text": "Animation", "isCorrect": true },
      { "text": "Navigator", "isCorrect": false }
    ]
  },
  {
    "question": "What option is used to change the layout of a slide in LibreOffice Impress?",
    "options": [
      { "text": "File → Export", "isCorrect": false },
      { "text": "Format → Slide Layout", "isCorrect": true },
      { "text": "Insert → Image", "isCorrect": false },
      { "text": "Tools → Options", "isCorrect": false }
    ]
  },
  {
    "question": "In what format should a presentation file be saved after preparation if further changes may be needed?",
    "options": [
      { "text": "In PDF format", "isCorrect": false },
      { "text": "In editable .odp format", "isCorrect": true },
      { "text": "In HTML format", "isCorrect": false },
      { "text": "In video format", "isCorrect": false }
    ]
  },
  {
    "question": "Which feature is used to check if the transition effect is working after applying a Slide Transition?",
    "options": [
      { "text": "Save", "isCorrect": false },
      { "text": "Preview", "isCorrect": true },
      { "text": "Export", "isCorrect": false },
      { "text": "Navigator", "isCorrect": false }
    ]
  },
  {
    "question": "When using 'Interaction' in a presentation, does an increase in the number of slides negatively affect the presentation flow?",
    "options": [
      { "text": "It will be heavily affected", "isCorrect": false },
      { "text": "It will not be affected since navigation can be customized", "isCorrect": true },
      { "text": "It reduces the file size", "isCorrect": false },
      { "text": "It slows down the transition speed", "isCorrect": false }
    ]
  },
  {
    "question": "What is the purpose of the **Slide Show Settings** in LibreOffice Impress?",
    "options": [
      { "text": "To edit images on the slide", "isCorrect": false },
      { "text": "To control the mode (e.g., Full Screen) in which the presentation is shown", "isCorrect": true },
      { "text": "To add a new slide", "isCorrect": false },
      { "text": "To change the font color", "isCorrect": false }
    ]
  },
  {
    "question": "Which option is used in Transition settings to automatically advance the presentation to the next slide after a set time?",
    "options": [
      { "text": "On Mouse Click", "isCorrect": false },
      { "text": "Automatically After", "isCorrect": true },
      { "text": "Non-Linear", "isCorrect": false },
      { "text": "Master Slide", "isCorrect": false }
    ]
  },
  {
    "question": "What is the biggest advantage of the Non-Linear presentation method?",
    "options": [
      { "text": "Timelines can be strictly adhered to", "isCorrect": false },
      { "text": "Topics can be prioritized based on audience interest, making it more effective and interactive", "isCorrect": true },
      { "text": "All slides can be shown completely", "isCorrect": false },
      { "text": "Transitions can be avoided", "isCorrect": false }
    ]
  },
  {
    "question": "Where is the option to apply Slide Transition found in LibreOffice Impress?",
    "options": [
      { "text": "Under the Format menu", "isCorrect": false },
      { "text": "In the Sidebar tabs on the right side of the screen", "isCorrect": true },
      { "text": "Under the Tools menu", "isCorrect": false },
      { "text": "Under the View menu", "isCorrect": false }
    ]
  },
  {
    "question": "Does the Navigator show a 'Group object' on a slide?",
    "options": [
      { "text": "No", "isCorrect": false },
      { "text": "Yes", "isCorrect": true },
      { "text": "Only images", "isCorrect": false },
      { "text": "Only text", "isCorrect": false }
    ]
  },
  {
    "question": "What key is commonly used to exit (Escape) the Slide Show mode?",
    "options": [
      { "text": "Enter", "isCorrect": false },
      { "text": "Tab", "isCorrect": false },
      { "text": "Esc", "isCorrect": true },
      { "text": "Ctrl+S", "isCorrect": false }
    ]
  },
  {
    "question": "If no Interaction is provided to jump to a specific slide during a slide show, how will the navigation typically proceed?",
    "options": [
      { "text": "In a linear fashion", "isCorrect": true },
      { "text": "No navigation will be available", "isCorrect": false },
      { "text": "Automatically to random slides", "isCorrect": false },
      { "text": "Full screen mode will not be available", "isCorrect": false }
    ]
  },
  {
    "question": "What is used to easily provide a common background and font style to all slides?",
    "options": [
      { "text": "Interaction", "isCorrect": false },
      { "text": "Master Slide", "isCorrect": true },
      { "text": "Navigator", "isCorrect": false },
      { "text": "Animation", "isCorrect": false }
    ]
  },
  {
    "question": "What is used to remove an Animation effect applied to an object in LibreOffice Impress?",
    "options": [
      { "text": "Delete the Transition", "isCorrect": false },
      { "text": "Remove the effect from the Animation panel", "isCorrect": true },
      { "text": "Delete the object using the Navigator", "isCorrect": false },
      { "text": "Change the slide layout", "isCorrect": false }
    ]
  },
  {
    "question": "What is the name of the technique where clicking on a main idea slide takes you to a slide with details?",
    "options": [
      { "text": "Animation", "isCorrect": false },
      { "text": "Slide Layout", "isCorrect": false },
      { "text": "Interaction/Hyperlink", "isCorrect": true },
      { "text": "Master Slide", "isCorrect": false }
    ]
  },
  {
    "question": "What is a major advantage of using 'Interaction' in a presentation?",
    "options": [
      { "text": "Different fonts can be used on every slide", "isCorrect": false },
      { "text": "It makes the presentation more dynamic", "isCorrect": true },
      { "text": "It reduces the file size", "isCorrect": false },
      { "text": "It allows changing the slide color", "isCorrect": false }
    ]
  },
  {
    "question": "What can be achieved by presenting in a Non-Linear method?",
    "options": [
      { "text": "Strict adherence to time limits", "isCorrect": false },
      { "text": "A more effective and interactive presentation", "isCorrect": true },
      { "text": "All slides can be shown to completion", "isCorrect": false },
      { "text": "Transitions can be avoided", "isCorrect": false }
    ]
  },
  {
    "question": "Where is the option to provide Slide Transition located in LibreOffice Impress?",
    "options": [
      { "text": "Under the Slide Show menu", "isCorrect": true },
      { "text": "Under the Tools menu", "isCorrect": false },
      { "text": "Under the Insert menu", "isCorrect": false },
      { "text": "Under the Table menu", "isCorrect": false }
    ]
  },
  {
    "question": "What element helps increase the 'Smoothness' (smooth flow) of a presentation?",
    "options": [
      { "text": "Using a consistent color scheme", "isCorrect": false },
      { "text": "Clear navigation (Interaction)", "isCorrect": true },
      { "text": "Using a large font size", "isCorrect": false },
      { "text": "Using only images", "isCorrect": false }
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
