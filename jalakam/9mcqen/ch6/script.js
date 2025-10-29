document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "Who was the American scientist that first used the term 'Artificial Intelligence'?",
    "options": [
      { "text": "Alan Turing", "isCorrect": false },
      { "text": "Marvin Minsky", "isCorrect": false },
      { "text": "John McCarthy", "isCorrect": true },
      { "text": "Geoffrey Hinton", "isCorrect": false }
    ]
  },
  {
    "question": "Which of the following is NOT one of the three main steps an AI system takes to learn and make decisions?",
    "options": [
      { "text": "Algorithm Hacking", "isCorrect": true },
      { "text": "Data Collection", "isCorrect": false },
      { "text": "Pattern Recognition", "isCorrect": false },
      { "text": "Decision Making", "isCorrect": false }
    ]
  },
  {
    "question": "What is the name of the project that uses AI technology to prevent wild animals from entering human settlements?",
    "options": [
      { "text": "A.I. Tracking System", "isCorrect": false },
      { "text": "A.I. Warning System", "isCorrect": false },
      { "text": "A.I. Defence System", "isCorrect": false },
      { "text": "A.I. Surveillance System", "isCorrect": true }
    ]
  },
  {
    "question": "The workshop that laid a strong foundation for AI and inspired further research is known as the?",
    "options": [
      { "text": "AI Summit", "isCorrect": false },
      { "text": "Dartmouth Conference", "isCorrect": true },
      { "text": "New Hampshire Meet", "isCorrect": false },
      { "text": "McCarthy Workshop", "isCorrect": false }
    ]
  },
  {
    "question": "In Artificial Intelligence, what is a program trained to analyze data and make predictions/decisions called?",
    "options": [
      { "text": "AI Algorithm", "isCorrect": false },
      { "text": "AI Model", "isCorrect": true },
      { "text": "AI Brain", "isCorrect": false },
      { "text": "AI Database", "isCorrect": false }
    ]
  },
  {
    "question": "What type of data is used to train an AI model for a wildlife surveillance system?",
    "options": [
      { "text": "Thousands of images of animals", "isCorrect": true },
      { "text": "Genetic codes of animals", "isCorrect": false },
      { "text": "Only sound recordings of animals", "isCorrect": false },
      { "text": "Forest department annual reports", "isCorrect": false }
    ]
  },
  {
    "question": "What do Language AI Models detect in human language to predict words?",
    "options": [
      { "text": "Grammar Rules", "isCorrect": false },
      { "text": "Patterns", "isCorrect": true },
      { "text": "Origin of each word", "isCorrect": false },
      { "text": "User's emotions", "isCorrect": false }
    ]
  },
  {
    "question": "Which of the following is NOT an example of a Language AI Model?",
    "options": [
      { "text": "Gemini AI", "isCorrect": false },
      { "text": "Meta AI", "isCorrect": false },
      { "text": "Apache OpenOffice", "isCorrect": true },
      { "text": "Chat GPT", "isCorrect": false }
    ]
  },
  {
    "question": "What is the branch of AI that helps computers understand, interpret, and respond to human language?",
    "options": [
      { "text": "Computer Vision", "isCorrect": false },
      { "text": "Natural Language Processing (NLP)", "isCorrect": true },
      { "text": "Robotics", "isCorrect": false },
      { "text": "Pattern Recognition", "isCorrect": false }
    ]
  },
  {
    "question": "What is a crucial step a user should take before using information provided by an AI?",
    "options": [
      { "text": "Immediately share it with 10 other people.", "isCorrect": false },
      { "text": "Blindly trust the AI model.", "isCorrect": false },
      { "text": "Verify the information is correct.", "isCorrect": true },
      { "text": "Immediately block the AI agent that provided it.", "isCorrect": false }
    ]
  },
  {
    "question": "What is the primary function of an AI Agent?",
    "options": [
      { "text": "It provides only one service at a time.", "isCorrect": false },
      { "text": "It coordinates multiple systems to perform tasks automatically for a specific purpose.", "isCorrect": true },
      { "text": "It helps open bank accounts.", "isCorrect": false },
      { "text": "It only handles databases provided by humans.", "isCorrect": false }
    ]
  },
  {
    "question": "Which of the following is a major application area of Artificial Intelligence (AI)?",
    "options": [
      { "text": "Harvesting crops", "isCorrect": false },
      { "text": "Diagnosing diseases", "isCorrect": true },
      { "text": "Basic Mathematics", "isCorrect": false },
      { "text": "Computer Repair", "isCorrect": false }
    ]
  },
  {
    "question": "Where did the Dartmouth Conference (1956) take place?",
    "options": [
      { "text": "New York, USA", "isCorrect": false },
      { "text": "New Hampshire, USA", "isCorrect": true },
      { "text": "London, UK", "isCorrect": false },
      { "text": "Paris, France", "isCorrect": false }
    ]
  },
  {
    "question": "In the wildlife surveillance system, 'learning to distinguish between tiger, elephant, and deer' is an example of which AI operational stage?",
    "options": [
      { "text": "Decision Making", "isCorrect": false },
      { "text": "Pattern Recognition", "isCorrect": true },
      { "text": "Data Collection", "isCorrect": false },
      { "text": "Model Training", "isCorrect": false }
    ]
  },
  {
    "question": "Which technology are Large Language Models (LLMs) trained using?",
    "options": [
      { "text": "Robotics", "isCorrect": false },
      { "text": "Natural Language Processing (NLP)", "isCorrect": true },
      { "text": "Computer Vision", "isCorrect": false },
      { "text": "Data Mining", "isCorrect": false }
    ]
  },
  {
    "question": "An AI Model is compared to what part of an artificial intelligence system?",
    "options": [
      { "text": "Eye", "isCorrect": false },
      { "text": "Hand", "isCorrect": false },
      { "text": "Leg", "isCorrect": false },
      { "text": "Brain", "isCorrect": true }
    ]
  },
  {
    "question": "Which of the following is a human task that AI can perform?",
    "options": [
      { "text": "Colorizing old movies", "isCorrect": false },
      { "text": "Identifying vehicles for road safety", "isCorrect": true },
      { "text": "Teaching in a school", "isCorrect": false },
      { "text": "Understanding human emotions", "isCorrect": false }
    ]
  },
  {
    "question": "In which year was the Dartmouth Conference held?",
    "options": [
      { "text": "1947", "isCorrect": false },
      { "text": "1956", "isCorrect": true },
      { "text": "1969", "isCorrect": false },
      { "text": "1975", "isCorrect": false }
    ]
  },
  {
    "question": "In the wildlife surveillance system, 'counting the animals' is an example of which AI operational stage?",
    "options": [
      { "text": "Data Collection", "isCorrect": false },
      { "text": "Pattern Recognition", "isCorrect": false },
      { "text": "Decision Making", "isCorrect": true },
      { "text": "Model Update", "isCorrect": false }
    ]
  },
  {
    "question": "According to the introduction of the chapter, what is the AI surveillance system designed to do?",
    "options": [
      { "text": "Monitor deforestation.", "isCorrect": false },
      { "text": "Reduce human-wildlife conflict.", "isCorrect": true },
      { "text": "Detect forest fires.", "isCorrect": false },
      { "text": "Treat wild animals.", "isCorrect": false }
    ]
  },
  {
    "question": "In NLP operation, what is the process of breaking down sentences into words or phrases called?",
    "options": [
      { "text": "Patterns", "isCorrect": false },
      { "text": "Predictions", "isCorrect": false },
      { "text": "Tokens", "isCorrect": true },
      { "text": "Libraries", "isCorrect": false }
    ]
  },
  {
    "question": "How do AI models improve over time?",
    "options": [
      { "text": "By using only old data.", "isCorrect": false },
      { "text": "By learning from new data.", "isCorrect": true },
      { "text": "By changing their algorithm.", "isCorrect": false },
      { "text": "By reducing their data collection.", "isCorrect": false }
    ]
  },
  {
    "question": "What capabilities does Artificial Intelligence help computers and machines imitate?",
    "options": [
      { "text": "Human emotions and problem-solving skills.", "isCorrect": false },
      { "text": "Human intelligence and physical abilities.", "isCorrect": false },
      { "text": "Human intelligence and problem-solving skills.", "isCorrect": true },
      { "text": "Human emotions and physical abilities.", "isCorrect": false }
    ]
  },
  {
    "question": "Which of the following is NOT a principle of 'Responsible AI' use?",
    "options": [
      { "text": "Trust AI blindly", "isCorrect": true },
      { "text": "Avoid harm to others", "isCorrect": false },
      { "text": "Respect privacy", "isCorrect": false },
      { "text": "Be honest", "isCorrect": false }
    ]
  },
  {
    "question": "What kind of data patterns do Language AI Models find?",
    "options": [
      { "text": "Weather patterns", "isCorrect": false },
      { "text": "Patterns in human language", "isCorrect": true },
      { "text": "Graphical patterns", "isCorrect": false },
      { "text": "Numerical patterns", "isCorrect": false }
    ]
  },
  {
    "question": "In NLP operation, which step involves generating a response or performing an action based on understanding?",
    "options": [
      { "text": "Creating responses", "isCorrect": true },
      { "text": "Analysing the structure", "isCorrect": false },
      { "text": "Understanding the sentence", "isCorrect": false },
      { "text": "Data Input", "isCorrect": false }
    ]
  },
  {
    "question": "What quantity of data is typically used to train an AI model?",
    "options": [
      { "text": "Small quantity", "isCorrect": false },
      { "text": "No training is needed.", "isCorrect": false },
      { "text": "Large quantity", "isCorrect": true },
      { "text": "A fixed number for each model", "isCorrect": false }
    ]
  },
  {
    "question": "Which chatbot is given as an example of a Language AI Model in the chapter?",
    "options": [
      { "text": "Chat GPT", "isCorrect": true },
      { "text": "Bing AI", "isCorrect": false },
      { "text": "Siri", "isCorrect": false },
      { "text": "Cortana", "isCorrect": false }
    ]
  },
  {
    "question": "What technology are machines integrated with to make AI systems work?",
    "options": [
      { "text": "Robotics technology", "isCorrect": false },
      { "text": "Data Mining technology", "isCorrect": false },
      { "text": "Artificial Intelligence technologies", "isCorrect": true },
      { "text": "Physics technology", "isCorrect": false }
    ]
  },
  {
    "question": "In NLP operation, which step involves examining grammar, syntax, and word relationships?",
    "options": [
      { "text": "Understanding the sentence", "isCorrect": false },
      { "text": "Analysing the structure", "isCorrect": true },
      { "text": "Creating responses", "isCorrect": false },
      { "text": "Data Filtering", "isCorrect": false }
    ]
  },
  {
    "question": "Which of the following is an example prompt you could give an AI Agent to arrange a trip?",
    "options": [
      { "text": "Predict when the next monsoon will be.", "isCorrect": false },
      { "text": "Type how to make a cake.", "isCorrect": false },
      { "text": "Find the nearest restaurant.", "isCorrect": false },
      { "text": "\"Arrange a two-day trip to Munnar for me on the 22nd.\"", "isCorrect": true }
    ]
  },
  {
    "question": "Which of the following is a current application area of AI?",
    "options": [
      { "text": "Space Travel", "isCorrect": false },
      { "text": "Classifying objects", "isCorrect": true },
      { "text": "Constructing new buildings", "isCorrect": false },
      { "text": "Debugging computer codes", "isCorrect": false }
    ]
  },
  {
    "question": "In the wildlife surveillance system, which stage involves the AI algorithm identifying patterns in the data?",
    "options": [
      { "text": "Decision Making", "isCorrect": false },
      { "text": "Data Transfer", "isCorrect": false },
      { "text": "Pattern Recognition", "isCorrect": true },
      { "text": "Data Collection", "isCorrect": false }
    ]
  },
  {
    "question": "Which of the following is a human task that AI can perform?",
    "options": [
      { "text": "Learning new languages", "isCorrect": false },
      { "text": "Identifying individuals", "isCorrect": true },
      { "text": "Walking", "isCorrect": false },
      { "text": "Thinking", "isCorrect": false }
    ]
  },
  {
    "question": "With what assistance can AI systems perform tasks more easily and accurately?",
    "options": [
      { "text": "New Hardware", "isCorrect": false },
      { "text": "New Operating System", "isCorrect": false },
      { "text": "Artificial Intelligence", "isCorrect": true },
      { "text": "Faster Internet", "isCorrect": false }
    ]
  },
  {
    "question": "What principles does NLP combine with programming and machine learning techniques?",
    "options": [
      { "text": "Mathematical principles", "isCorrect": false },
      { "text": "Linguistic principles", "isCorrect": true },
      { "text": "Physics principles", "isCorrect": false },
      { "text": "Computer Science principles", "isCorrect": false }
    ]
  },
  {
    "question": "What is a key characteristic of AI Agents' operation?",
    "options": [
      { "text": "They perform tasks without human permission.", "isCorrect": false },
      { "text": "They perform tasks automatically for a specific purpose.", "isCorrect": true },
      { "text": "They never conduct financial transactions.", "isCorrect": false },
      { "text": "They coordinate only one system.", "isCorrect": false }
    ]
  },
  {
    "question": "Where was the Dartmouth Conference held?",
    "options": [
      { "text": "Cambridge University", "isCorrect": false },
      { "text": "Oxford University", "isCorrect": false },
      { "text": "Dartmouth College", "isCorrect": true },
      { "text": "MIT", "isCorrect": false }
    ]
  },
  {
    "question": "When discussing NLP, computers are trained to read, write, and speak like whom?",
    "options": [
      { "text": "Robots", "isCorrect": false },
      { "text": "AI Models", "isCorrect": false },
      { "text": "Humans", "isCorrect": true },
      { "text": "Chatbots", "isCorrect": false }
    ]
  },
  {
    "question": "The ability to count animals through a wildlife surveillance system is an example of AI's capability in what?",
    "options": [
      { "text": "Analyzing images and data", "isCorrect": true },
      { "text": "Language translation", "isCorrect": false },
      { "text": "Writing stories", "isCorrect": false },
      { "text": "Cooking", "isCorrect": false }
    ]
  },
  {
    "question": "Chatbots, translation apps, and video game characters are all based on what kind of system?",
    "options": [
      { "text": "AI Agents", "isCorrect": false },
      { "text": "Virtual Reality", "isCorrect": false },
      { "text": "NLP-based systems", "isCorrect": true },
      { "text": "Proprietary Software", "isCorrect": false }
    ]
  },
  {
    "question": "When AI Agents arrange a trip, from where is the money for the trip paid?",
    "options": [
      { "text": "From the travel agent's account", "isCorrect": false },
      { "text": "From the government's fund", "isCorrect": false },
      { "text": "From our bank account", "isCorrect": true },
      { "text": "From a virtual wallet", "isCorrect": false }
    ]
  },
  {
    "question": "Which of the following is a human task that AI can perform?",
    "options": [
      { "text": "Translating", "isCorrect": true },
      { "text": "Cooking", "isCorrect": false },
      { "text": "Dancing", "isCorrect": false },
      { "text": "Sculpting", "isCorrect": false }
    ]
  },
  {
    "question": "For what purpose are AI models trained using large amounts of data?",
    "options": [
      { "text": "To perform normal jobs.", "isCorrect": false },
      { "text": "For specific tasks.", "isCorrect": true },
      { "text": "To make money.", "isCorrect": false },
      { "text": "To build new software.", "isCorrect": false }
    ]
  },
  {
    "question": "What is the purpose of training computers with the help of NLP?",
    "options": [
      { "text": "To understand only technical language.", "isCorrect": false },
      { "text": "To understand and respond to human language.", "isCorrect": true },
      { "text": "To understand only computer codes.", "isCorrect": false },
      { "text": "To understand only images.", "isCorrect": false }
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
