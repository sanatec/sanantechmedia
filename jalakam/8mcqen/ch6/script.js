document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "Machine Learning (ML) is one of the subfields of which scientific discipline?",
    "options": [
      { "text": "Deep Learning", "isCorrect": false },
      { "text": "Artificial Intelligence (AI)", "isCorrect": true },
      { "text": "Computer Vision", "isCorrect": false },
      { "text": "Data Science", "isCorrect": false }
    ]
  },
  {
    "question": "What is the primary goal of Artificial Intelligence (AI)?",
    "options": [
      { "text": "To enable computers to imitate human intelligence", "isCorrect": true },
      { "text": "To simplify spreadsheet calculations", "isCorrect": false },
      { "text": "To manage computer network protocols", "isCorrect": false },
      { "text": "To store information in a database", "isCorrect": false }
    ]
  },
  {
    "question": "Machine Learning enables computers to make decisions in new situations based on models they build by identifying what?",
    "options": [
      { "text": "Programming code structures", "isCorrect": false },
      { "text": "Hardware specifications", "isCorrect": false },
      { "text": "Patterns in data", "isCorrect": true },
      { "text": "User-defined algorithms", "isCorrect": false }
    ]
  },
  {
    "question": "Which system is given as an example of a machine learning application in the chapter?",
    "options": [
      { "text": "A screen lock that opens by recognizing the owner's face", "isCorrect": true },
      { "text": "A simple calculator app", "isCorrect": false },
      { "text": "A traditional word processor", "isCorrect": false },
      { "text": "A file compression tool", "isCorrect": false }
    ]
  },
  {
    "question": "The three main stages in the process of creating a machine learning model using PictoBlox are Dataset Preparation, Training, and what else?",
    "options": [
      { "text": "Debugging", "isCorrect": false },
      { "text": "Clustering", "isCorrect": false },
      { "text": "Testing", "isCorrect": true },
      { "text": "Exporting", "isCorrect": false }
    ]
  },
  {
    "question": "What is the process of collecting and accurately organizing the data required for the machine learning model to learn called?",
    "options": [
      { "text": "Training", "isCorrect": false },
      { "text": "Testing", "isCorrect": false },
      { "text": "Dataset Preparation", "isCorrect": true },
      { "text": "Data Mining", "isCorrect": false }
    ]
  },
  {
    "question": "What directly influences the accuracy of a machine learning model?",
    "options": [
      { "text": "The computer's processor speed", "isCorrect": false },
      { "text": "The memory size", "isCorrect": false },
      { "text": "The quality of the data", "isCorrect": true },
      { "text": "The operating system", "isCorrect": false }
    ]
  },
  {
    "question": "Which stage of ML model creation involves evaluating performance using new data not previously given to the model?",
    "options": [
      { "text": "Dataset Preparation", "isCorrect": false },
      { "text": "Training", "isCorrect": false },
      { "text": "Testing", "isCorrect": true },
      { "text": "Prediction", "isCorrect": false }
    ]
  },
  {
    "question": "Which type of Machine Learning is defined as training the computer using **labeled data**, where the input and corresponding output are provided in advance?",
    "options": [
      { "text": "Unsupervised Learning", "isCorrect": false },
      { "text": "Supervised Learning", "isCorrect": true },
      { "text": "Reinforcement Learning", "isCorrect": false },
      { "text": "Deep Learning", "isCorrect": false }
    ]
  },
  {
    "question": "Which type of Machine Learning aims to discover patterns and identify hidden relationships in **unlabeled data** on its own?",
    "options": [
      { "text": "Unsupervised Learning", "isCorrect": true },
      { "text": "Supervised Learning", "isCorrect": false },
      { "text": "Reinforcement Learning", "isCorrect": false },
      { "text": "Clustering Learning", "isCorrect": false }
    ]
  },
  {
    "question": "Which type of Machine Learning is a process of learning by understanding right and wrong actions, where the computer receives rewards or penalties?",
    "options": [
      { "text": "Unsupervised Learning", "isCorrect": false },
      { "text": "Supervised Learning", "isCorrect": false },
      { "text": "Reinforcement Learning", "isCorrect": true },
      { "text": "Transfer Learning", "isCorrect": false }
    ]
  },
  {
    "question": "The scenario: 'A robot learns to walk by trying out different movements, correcting errors along the way' is an example of which ML category?",
    "options": [
      { "text": "Supervised Learning", "isCorrect": false },
      { "text": "Unsupervised Learning", "isCorrect": false },
      { "text": "Reinforcement Learning", "isCorrect": true },
      { "text": "Computer Vision", "isCorrect": false }
    ]
  },
  {
    "question": "An app recommending songs based on the user's listening history is an example of a situation where:",
    "options": [
      { "text": "Formulas are used in spreadsheets", "isCorrect": false },
      { "text": "A database is being collected", "isCorrect": false },
      { "text": "Machine Learning is being used", "isCorrect": true },
      { "text": "Advertisements are being displayed", "isCorrect": false }
    ]
  },
  {
    "question": "What is the name of the software used in the chapter to create a machine learning model for recognizing sign language gestures?",
    "options": [
      { "text": "Scratch", "isCorrect": false },
      { "text": "Krita", "isCorrect": false },
      { "text": "PictoBlox", "isCorrect": true },
      { "text": "LMMS", "isCorrect": false }
    ]
  },
  {
    "question": "Which menu option in PictoBlox is used to access the area for creating machine learning models?",
    "options": [
      { "text": "Edit Menu → Preferences", "isCorrect": false },
      { "text": "Help Menu → Tutorials", "isCorrect": false },
      { "text": "File Menu → Open ML Environment", "isCorrect": true },
      { "text": "Connect Menu → Upload", "isCorrect": false }
    ]
  },
  {
    "question": "Which of these is NOT a Project Type available in the PictoBlox Machine Learning Environment?",
    "options": [
      { "text": "Pose Classifier", "isCorrect": false },
      { "text": "Hand Pose Classifier", "isCorrect": false },
      { "text": "Video Classifier", "isCorrect": true },
      { "text": "Audio Classifier", "isCorrect": false }
    ]
  },
  {
    "question": "To create a model that identifies and classifies hand gestures (like ISL signs), which project type is selected in PictoBlox?",
    "options": [
      { "text": "Text Classifier", "isCorrect": false },
      { "text": "Image Classifier", "isCorrect": true },
      { "text": "Numbers (C/R)", "isCorrect": false },
      { "text": "Object Detection", "isCorrect": false }
    ]
  },
  {
    "question": "What is the limitation of the **Hand Pose Classifier** feature in PictoBlox that makes it unsuitable for full Indian Sign Language (ISL) alphabet recognition?",
    "options": [
      { "text": "It can only recognize numbers", "isCorrect": false },
      { "text": "It can only recognize one hand at a time", "isCorrect": true },
      { "text": "It only supports gestures in British Sign Language", "isCorrect": false },
      { "text": "It requires a paid subscription", "isCorrect": false }
    ]
  },
  {
    "question": "What is the recommended range for the number of sample images to be added for each class during Dataset Preparation?",
    "options": [
      { "text": "10 to 50 images", "isCorrect": false },
      { "text": "1 to 10 images", "isCorrect": false },
      { "text": "500 to 1000 images", "isCorrect": false },
      { "text": "200 to 500 images", "isCorrect": true }
    ]
  },
  {
    "question": "When training the model for recognizing the letters A, B, and C in PictoBlox, what additional class is required besides A, B, and C?",
    "options": [
      { "text": "Others", "isCorrect": false },
      { "text": "Background", "isCorrect": false },
      { "text": "None", "isCorrect": true },
      { "text": "Start", "isCorrect": false }
    ]
  },
  {
    "question": "When the Image Classifier training interface first opens in PictoBlox, how many categories (classes) are available by default?",
    "options": [
      { "text": "Four classes", "isCorrect": false },
      { "text": "Three classes", "isCorrect": false },
      { "text": "Two classes (Class 1 and Class 2)", "isCorrect": true },
      { "text": "Zero classes", "isCorrect": false }
    ]
  },
  {
    "question": "In PictoBlox, what button must be used to create additional categories for the dataset beyond the initial default ones?",
    "options": [
      { "text": "Add Sprite", "isCorrect": false },
      { "text": "Add Costume", "isCorrect": false },
      { "text": "Add Class", "isCorrect": true },
      { "text": "Add Sample", "isCorrect": false }
    ]
  },
  {
    "question": "Which two programming languages are mentioned as being usable to train the machine learning model in PictoBlox?",
    "options": [
      { "text": "HTML and CSS", "isCorrect": false },
      { "text": "C++ and Java", "isCorrect": false },
      { "text": "Python and JavaScript", "isCorrect": true },
      { "text": "Scratch and Block", "isCorrect": false }
    ]
  },
  {
    "question": "What is the purpose of the **Export Model** button in the PictoBlox ML window?",
    "options": [
      { "text": "To upload the model to the internet", "isCorrect": false },
      { "text": "To add the trained model to a new PictoBlox project", "isCorrect": true },
      { "text": "To convert the model into text code", "isCorrect": false },
      { "text": "To share the dataset with other users", "isCorrect": false }
    ]
  },
  {
    "question": "What is the name of the organization established by the Govt. of India for sign language research and training?",
    "options": [
      { "text": "ASLRT", "isCorrect": false },
      { "text": "AUSLRC", "isCorrect": false },
      { "text": "ISLRTC", "isCorrect": true },
      { "text": "BSLRT", "isCorrect": false }
    ]
  },
  {
    "question": "Which sign language is used in India?",
    "options": [
      { "text": "American Sign Language (ASL)", "isCorrect": false },
      { "text": "British Sign Language (BSL)", "isCorrect": false },
      { "text": "Indian Sign Language (ISL)", "isCorrect": true },
      { "text": "Australian Sign Language (AUSLAN)", "isCorrect": false }
    ]
  },
  {
    "question": "If a machine learning model's efficiency is low after training, what action should be repeated until the model accurately recognizes the hand signs?",
    "options": [
      { "text": "Adding new sprites", "isCorrect": false },
      { "text": "The entire training and testing process", "isCorrect": true },
      { "text": "Changing the programming language", "isCorrect": false },
      { "text": "Restarting the computer", "isCorrect": false }
    ]
  },
  {
    "question": "What is a **Similarity** identified between the patterns in Group-A (mostly curved) and Group-B (mostly straight) in the chapter's classification activity?",
    "options": [
      { "text": "They all contain spirals", "isCorrect": false },
      { "text": "They are all in black and white", "isCorrect": true },
      { "text": "They have more sharp edges", "isCorrect": false },
      { "text": "They are all of the same size", "isCorrect": false }
    ]
  },
  {
    "question": "The lines in the patterns of Group-A were mainly identified as being:",
    "options": [
      { "text": "Mostly straight", "isCorrect": false },
      { "text": "Mostly curved", "isCorrect": true },
      { "text": "Mostly dotted", "isCorrect": false },
      { "text": "Mostly horizontal", "isCorrect": false }
    ]
  },
  {
    "question": "The patterns in Group-B were mainly identified as having:",
    "options": [
      { "text": "More smooth transitions", "isCorrect": false },
      { "text": "Fewer lines", "isCorrect": false },
      { "text": "Lines that are mostly straight", "isCorrect": true },
      { "text": "More natural forms", "isCorrect": false }
    ]
  },
  {
    "question": "What is the process of teaching the model using the prepared dataset, where it learns to identify patterns and make predictions?",
    "options": [
      { "text": "Testing", "isCorrect": false },
      { "text": "Training", "isCorrect": true },
      { "text": "Cleaning", "isCorrect": false },
      { "text": "Validating", "isCorrect": false }
    ]
  },
  {
    "question": "What does an **AI Model** do without human intervention?",
    "options": [
      { "text": "Writes the programming code", "isCorrect": false },
      { "text": "Collects the input data", "isCorrect": false },
      { "text": "Learns, recognizes patterns, and makes decisions", "isCorrect": true },
      { "text": "Edits the final output", "isCorrect": false }
    ]
  },
  {
    "question": "In the game created in the chapter, what happens if the hand sign shown to the camera matches the displayed letter?",
    "options": [
      { "text": "The game ends", "isCorrect": false },
      { "text": "A new window opens", "isCorrect": false },
      { "text": "The letter on the screen changes to a (✓) tick symbol", "isCorrect": true },
      { "text": "The camera turns off", "isCorrect": false }
    ]
  },
  {
    "question": "For a machine learning model designed to diagnose illnesses from X-ray images, what data is needed for training?",
    "options": [
      { "text": "Only X-ray images with signs of disease", "isCorrect": false },
      { "text": "Only X-ray images without signs of disease", "isCorrect": false },
      { "text": "A large dataset of X-ray images, both with and without signs of disease", "isCorrect": true },
      { "text": "Textual descriptions of X-ray systems", "isCorrect": false }
    ]
  },
  {
    "question": "To create a machine that can classify two different types of objects (like ripe and unripe tomatoes) using a webcam, which PictoBlox ML feature should be used?",
    "options": [
      { "text": "Text Classifier", "isCorrect": false },
      { "text": "Audio Classifier", "isCorrect": false },
      { "text": "Image Classifier", "isCorrect": true },
      { "text": "Numbers (C/R)", "isCorrect": false }
    ]
  },
  {
    "question": "What is the first action to be performed when starting the ISL game in PictoBlox (according to the steps of operation)?",
    "options": [
      { "text": "A random letter is displayed", "isCorrect": false },
      { "text": "The camera turns on", "isCorrect": true },
      { "text": "The hand sign is analyzed", "isCorrect": false },
      { "text": "The program checks for a match", "isCorrect": false }
    ]
  },
  {
    "question": "If a dataset has low quality, what is the likely impact on the ML model?",
    "options": [
      { "text": "The model will train faster", "isCorrect": false },
      { "text": "The model's accuracy will be higher", "isCorrect": false },
      { "text": "The model's accuracy will be lower", "isCorrect": true },
      { "text": "The model will not require testing", "isCorrect": false }
    ]
  },
  {
    "question": "The primary way that machine learning helps in medical diagnosis (e.g., X-ray systems) is by:",
    "options": [
      { "text": "Automating the recording of patient details", "isCorrect": false },
      { "text": "Replacing the need for doctors entirely", "isCorrect": false },
      { "text": "Improving efficiency and accuracy by reducing human error", "isCorrect": true },
      { "text": "Managing hospital databases", "isCorrect": false }
    ]
  },
  {
    "question": "In the process of classifying patterns, which step is similar to a human 'remembering' what they have learned?",
    "options": [
      { "text": "Identified the unique features of the patterns", "isCorrect": false },
      { "text": "Identified the specific features that distinguish the patterns and remembered them", "isCorrect": true },
      { "text": "Carefully observed each of the new patterns", "isCorrect": false },
      { "text": "Classified each new pattern into the appropriate group", "isCorrect": false }
    ]
  },
  {
    "question": "What kind of data, besides images, is mentioned in the chapter as being usable to train a machine?",
    "options": [
      { "text": "Text, sound, and video", "isCorrect": true },
      { "text": "GPS coordinates only", "isCorrect": false },
      { "text": "Printer drivers only", "isCorrect": false },
      { "text": "Spreadsheet formulas only", "isCorrect": false }
    ]
  },
  {
    "question": "What is the main goal of teaching sign language to machines?",
    "options": [
      { "text": "To replace sign language instructors", "isCorrect": false },
      { "text": "To use technology to help people with hearing impairments", "isCorrect": true },
      { "text": "To create new programming languages", "isCorrect": false },
      { "text": "To translate spoken words into text", "isCorrect": false }
    ]
  },
  {
    "question": "What helps to classify patterns into distinct groups (like Group A and Group B)?",
    "options": [
      { "text": "The similarity in colors", "isCorrect": false },
      { "text": "The number of images in each group", "isCorrect": false },
      { "text": "One or more distinct features that help differentiate the patterns", "isCorrect": true },
      { "text": "The size of the patterns", "isCorrect": false }
    ]
  },
  {
    "question": "Which sign language is used in the USA?",
    "options": [
      { "text": "British Sign Language (BSL)", "isCorrect": false },
      { "text": "Australian Sign Language (AUSLAN)", "isCorrect": false },
      { "text": "Indian Sign Language (ISL)", "isCorrect": false },
      { "text": "American Sign Language (ASL)", "isCorrect": true }
    ]
  },
  {
    "question": "Which sign language is used in Britain?",
    "options": [
      { "text": "American Sign Language (ASL)", "isCorrect": false },
      { "text": "British Sign Language (BSL)", "isCorrect": true },
      { "text": "Indian Sign Language (ISL)", "isCorrect": false },
      { "text": "Australian Sign Language (AUSLAN)", "isCorrect": false }
    ]
  },
  {
    "question": "What must be done to the training process if changes are made to the dataset after the initial training?",
    "options": [
      { "text": "The training process must be repeated", "isCorrect": true },
      { "text": "The dataset must be deleted", "isCorrect": false },
      { "text": "The testing stage must be skipped", "isCorrect": false },
      { "text": "The model must be exported immediately", "isCorrect": false }
    ]
  },
  {
    "question": "Voice assistant systems that help control devices in homes are mentioned as examples of:",
    "options": [
      { "text": "Pre-trained machine learning models", "isCorrect": true },
      { "text": "Computer Vision applications", "isCorrect": false },
      { "text": "Simple database management systems", "isCorrect": false },
      { "text": "Spreadsheet calculations", "isCorrect": false }
    ]
  },
  {
    "question": "In the PictoBlox ML window, which feature allows you to capture images directly for your dataset?",
    "options": [
      { "text": "Upload", "isCorrect": false },
      { "text": "Webcam", "isCorrect": true },
      { "text": "Train Model", "isCorrect": false },
      { "text": "Advanced", "isCorrect": false }
    ]
  },
  {
    "question": "What happens when a computer uses a learned pattern from Supervised Learning to predict the answer when new data is received?",
    "options": [
      { "text": "It asks the user for the correct label", "isCorrect": false },
      { "text": "It uses the learned pattern to predict the answer", "isCorrect": true },
      { "text": "It applies rewards and penalties", "isCorrect": false },
      { "text": "It automatically adjusts the input data", "isCorrect": false }
    ]
  },
  {
    "question": "In Unsupervised Learning, what does the computer identify within the unlabeled data?",
    "options": [
      { "text": "The correct output labels", "isCorrect": false },
      { "text": "Rewards and penalties", "isCorrect": false },
      { "text": "The programmer's intent", "isCorrect": false },
      { "text": "Hidden relationships and structures", "isCorrect": true }
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
