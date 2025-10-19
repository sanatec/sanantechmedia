document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "Inkscape-ന്റെ പ്രധാന ധർമ്മം എന്താണ്?",
    "options": [
      { "text": "ഫോട്ടോ എഡിറ്റിംഗ്", "isCorrect": false },
      { "text": "3D മോഡലിംഗ്", "isCorrect": false },
      { "text": "വെക്റ്റർ ഗ്രാഫിക് ഡിസൈനിംഗ്", "isCorrect": true },
      { "text": "വീഡിയോ എഡിറ്റിംഗ്", "isCorrect": false }
    ]
  },
  {
    "question": "താഴെ പറയുന്നവയിൽ ഏതാണ് വെക്റ്റർ ഇമേജ് ഫോർമാറ്റ്?",
    "options": [
      { "text": "JPG", "isCorrect": false },
      { "text": "PNG", "isCorrect": false },
      { "text": "SVG", "isCorrect": true },
      { "text": "BMP", "isCorrect": false }
    ]
  },
  {
    "question": "വെക്റ്റർ ഇമേജുകൾ ഉപയോഗിക്കുന്നതിൻ്റെ ഒരു പ്രധാന നേട്ടം എന്താണ്?",
    "options": [
      { "text": "വേഗത്തിലുള്ള ആനിമേഷനുകൾ", "isCorrect": false },
      { "text": "അവയ്ക്ക് സോഫ്റ്റ്‌വെയർ ആവശ്യമില്ല", "isCorrect": false },
      { "text": "ഗുണമേന്മ നഷ്ടപ്പെടാതെ വലുപ്പം മാറ്റാൻ കഴിയും", "isCorrect": true },
      { "text": "കൂടുതൽ ഡിസ്ക് സ്പേസ് ഉപയോഗിക്കുന്നു", "isCorrect": false }
    ]
  },
  {
    "question": "GIMP ഏത് തരം ടൂളാണ്?",
    "options": [
      { "text": "വെക്റ്റർ ഗ്രാഫിക് എഡിറ്റർ", "isCorrect": false },
      { "text": "റാസ്റ്റർ ഇമേജ് എഡിറ്റർ", "isCorrect": true },
      { "text": "വേർഡ് പ്രോസസ്സർ", "isCorrect": false },
      { "text": "ഓഡിയോ എഡിറ്റർ", "isCorrect": false }
    ]
  },
  {
    "question": "സ്‌കേലബിൾ വെക്റ്റർ ഗ്രാഫിക്സ് (Scalable Vector Graphics) നിർമ്മിക്കാൻ ഉപയോഗിക്കുന്ന സോഫ്റ്റ്‌വെയർ ഏതാണ്?",
    "options": [
      { "text": "പെയിന്റ്", "isCorrect": false },
      { "text": "GIMP", "isCorrect": false },
      { "text": "Inkscape", "isCorrect": true },
      { "text": "Krita", "isCorrect": false }
    ]
  },
  {
    "question": "Inkscape-ൽ 'Document Properties' തുറക്കുന്നതിനുള്ള കുറുക്കുവഴി (shortcut) ഏതാണ്?",
    "options": [
      { "text": "Ctrl + D", "isCorrect": false },
      { "text": "Shift + Ctrl + D", "isCorrect": true },
      { "text": "Alt + P", "isCorrect": false },
      { "text": "Ctrl + Shift + N", "isCorrect": false }
    ]
  },
  {
    "question": "Inkscape-ൽ ഒബ്‌ജെക്റ്റുകളുടെ വലുപ്പം ആനുപാതികമായി മാറ്റാൻ ഏത് കീ ആണ് അമർത്തിപ്പിടിക്കേണ്ടത്?",
    "options": [
      { "text": "Alt", "isCorrect": false },
      { "text": "Ctrl", "isCorrect": true },
      { "text": "Shift", "isCorrect": false },
      { "text": "Tab", "isCorrect": false }
    ]
  },
  {
    "question": "'Bezier Tool' നിങ്ങളെ എന്തു ചെയ്യാൻ അനുവദിക്കുന്നു?",
    "options": [
      { "text": "ഫിൽട്ടറുകൾ ചേർക്കാൻ", "isCorrect": false },
      { "text": "ടെക്സ്റ്റ് ടൈപ്പ് ചെയ്യാൻ", "isCorrect": false },
      { "text": "വളവുകളും വരകളും (curves and lines) വരയ്ക്കാൻ", "isCorrect": true },
      { "text": "ഒബ്‌ജെക്റ്റുകൾ നീക്കാൻ", "isCorrect": false }
    ]
  },
  {
    "question": "Inkscape-ലെ 'Create Rectangles & Squares' ടൂളിന്റെ ധർമ്മം എന്താണ്?",
    "options": [
      { "text": "ഒബ്‌ജെക്റ്റുകൾ കറക്കാൻ", "isCorrect": false },
      { "text": "ചതുരങ്ങൾ വരയ്ക്കാൻ", "isCorrect": true },
      { "text": "ടെക്സ്റ്റ് ചേർക്കാൻ", "isCorrect": false },
      { "text": "ബാക്ക്ഗ്രൗണ്ട് നീക്കം ചെയ്യാൻ", "isCorrect": false }
    ]
  },
  {
    "question": "Inkscape പിന്തുണയ്ക്കുന്ന ഫയൽ ഫോർമാറ്റുകൾ ഏതൊക്കെയാണ്?",
    "options": [
      { "text": "DOCX, XLSX", "isCorrect": false },
      { "text": "PNG, JPG", "isCorrect": false },
      { "text": "SVG, AI, EPS, PDF, PS, PNG", "isCorrect": true },
      { "text": "TXT, CSV", "isCorrect": false }
    ]
  },
  {
    "question": "Inkscape-ലെ 'Fill and Stroke' ടൂളിന്റെ ഉദ്ദേശ്യം എന്താണ്?",
    "options": [
      { "text": "ആനിമേഷൻ ചേർക്കാൻ", "isCorrect": false },
      { "text": "സുതാര്യത ക്രമീകരിക്കാൻ (Adjust transparency)", "isCorrect": false },
      { "text": "നിറവും ബോർഡറും ഉപയോഗിച്ച് രൂപങ്ങൾക്ക് ഫോർമാറ്റ് ചെയ്യാൻ", "isCorrect": true },
      { "text": "ഇമേജുകളുടെ വലുപ്പം മാറ്റാൻ", "isCorrect": false }
    ]
  },
  {
    "question": "കളർ പാലറ്റിന്റെ (color palette) ഇടതുവശത്തുള്ള 'X' ബട്ടൺ എന്തു ചെയ്യുന്നു?",
    "options": [
      { "text": "ചുവപ്പ് നിറം നൽകുന്നു", "isCorrect": false },
      { "text": "കറുപ്പ് നിറം നൽകുന്നു", "isCorrect": false },
      { "text": "കളർ നീക്കം ചെയ്യുന്നു", "isCorrect": true },
      { "text": "ഡിസൈൻ എക്സ്പോർട്ട് ചെയ്യുന്നു", "isCorrect": false }
    ]
  },
  {
    "question": "Inkscape-ൽ ഒരു ഗ്രേഡിയന്റ് എങ്ങനെ പ്രയോഗിക്കാം?",
    "options": [
      { "text": "Blur ടൂൾ ഉപയോഗിച്ച്", "isCorrect": false },
      { "text": "Opacity ഉപയോഗിച്ച്", "isCorrect": false },
      { "text": "Gradient ടൂൾ (G) ഉപയോഗിച്ച്", "isCorrect": true },
      { "text": "Stroke path ഉപയോഗിച്ച്", "isCorrect": false }
    ]
  },
  {
    "question": "ഡിജിറ്റൽ പോസ്റ്ററുകൾ സാധാരണയായി കൈമാറാൻ ലക്ഷ്യമിടുന്ന സന്ദേശങ്ങൾ ഏത് തരം ആശയങ്ങളാണ്?",
    "options": [
      { "text": "വാർത്താ ലേഖനങ്ങൾ", "isCorrect": false },
      { "text": "വിനോദം", "isCorrect": false },
      { "text": "വിഷ്വൽ ആശയവിനിമയ ആശയങ്ങൾ (Visual communication ideas)", "isCorrect": true },
      { "text": "വ്യക്തിപരമായ ഇമെയിലുകൾ", "isCorrect": false }
    ]
  },
  {
    "question": "Inkscape-ൽ ഒരു ഒബ്‌ജെക്റ്റിനെ ഏറ്റവും മുകളിലത്തെ ലെയറിലേക്ക് കൊണ്ടുവരാൻ ഉപയോഗിക്കുന്ന കീ ഏതാണ്?",
    "options": [
      { "text": "Ctrl", "isCorrect": false },
      { "text": "Pg Up", "isCorrect": true },
      { "text": "Shift", "isCorrect": false },
      { "text": "Esc", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു ഡിസൈനിലെ ഘടകങ്ങൾ ഗ്രൂപ്പ് ചെയ്യുന്നതിൻ്റെ (grouping elements) ഉദ്ദേശ്യം എന്താണ്?",
    "options": [
      { "text": "ഡിസൈൻ ലോക്ക് ചെയ്യാൻ", "isCorrect": false },
      { "text": "ഫയൽ എക്സ്പോർട്ട് ചെയ്യാൻ", "isCorrect": false },
      { "text": "ഒന്നിലധികം ഒബ്‌ജെക്റ്റുകൾ ഒരുമിച്ച് നീക്കാനും വലുപ്പം മാറ്റാനും", "isCorrect": true },
      { "text": "നിറങ്ങൾ മാറ്റാൻ", "isCorrect": false }
    ]
  },
  {
    "question": "3D ഇഫക്റ്റുകൾ സൃഷ്ടിക്കാൻ Inkscape എന്ത് ഉപയോഗിക്കുന്നു?",
    "options": [
      { "text": "വെക്റ്റർ മാത്ത്", "isCorrect": false },
      { "text": "സ്ട്രോക്ക് ഫിൽ", "isCorrect": false },
      { "text": "ബ്ലർ, ഗ്രേഡിയന്റുകൾ", "isCorrect": true },
      { "text": "നോയിസ് ഫിൽട്ടർ", "isCorrect": false }
    ]
  },
  {
    "question": "പ്രിന്റിംഗിനായി ഒരു ഡിജിറ്റൽ പോസ്റ്റർ എക്സ്പോർട്ട് ചെയ്യാനുള്ള ഏറ്റവും മികച്ച റെസല്യൂഷൻ (resolution) എത്രയാണ്?",
    "options": [
      { "text": "72 dpi", "isCorrect": false },
      { "text": "96 dpi", "isCorrect": false },
      { "text": "150 dpi", "isCorrect": false },
      { "text": "300 dpi", "isCorrect": true }
    ]
  },
  {
    "question": "ഫ്രീഹാൻഡ് വരകളും ലൈനുകളും വരയ്ക്കുന്നതിനും എഡിറ്റ് ചെയ്യുന്നതിനും ഉപയോഗിക്കുന്ന ടൂൾ ഏതാണ്?",
    "options": [
      { "text": "Bezier Tool", "isCorrect": false },
      { "text": "Pencil Tool", "isCorrect": true },
      { "text": "Text Tool", "isCorrect": false },
      { "text": "Rectangle Tool", "isCorrect": false }
    ]
  },
  {
    "question": "ലളിതമായ രൂപങ്ങൾ വരയ്ക്കുന്നതിനും എഡിറ്റ് ചെയ്യുന്നതിനും ഈ ഡോക്യുമെന്റിൽ പരാമർശിച്ചിട്ടുള്ള ഏത് സോഫ്റ്റ്‌വെയറാണ് ഏറ്റവും മികച്ചത്?",
    "options": [
      { "text": "WordPad", "isCorrect": false },
      { "text": "GIMP", "isCorrect": false },
      { "text": "Inkscape", "isCorrect": true },
      { "text": "Excel", "isCorrect": false }
    ]
  },
  {
    "question": "Inkscape-ലെ 'Path' മെനുവിൻ്റെ ഉദ്ദേശ്യം എന്താണ്?",
    "options": [
      { "text": "ഫിൽട്ടറുകൾ പ്രയോഗിക്കാൻ", "isCorrect": false },
      { "text": "രൂപങ്ങളുടെ നോഡ് പോയിന്റുകൾ എഡിറ്റ് ചെയ്യാൻ", "isCorrect": true },
      { "text": "ടെക്സ്റ്റ് ഇഫക്റ്റുകൾ ചേർക്കാൻ", "isCorrect": false },
      { "text": "ഡോക്യുമെൻ്റ് വലുപ്പം മാറ്റാൻ", "isCorrect": false }
    ]
  },
  {
    "question": "Inkscape-ൽ നക്ഷത്രങ്ങളും ബഹുഭുജങ്ങളും (stars and polygons) സൃഷ്ടിക്കാൻ നിങ്ങളെ അനുവദിക്കുന്ന ടൂൾ ഏതാണ്?",
    "options": [
      { "text": "Pencil Tool", "isCorrect": false },
      { "text": "Rectangle Tool", "isCorrect": false },
      { "text": "Stars and Polygons Tool", "isCorrect": true },
      { "text": "Bezier Tool", "isCorrect": false }
    ]
  },
  {
    "question": "'SVG' എന്തിനെ സൂചിപ്പിക്കുന്നു?",
    "options": [
      { "text": "Standard Vector Graphics", "isCorrect": false },
      { "text": "Scalable Vector Graphics", "isCorrect": true },
      { "text": "Simple Visual Graphics", "isCorrect": false },
      { "text": "Structured Vector Geometry", "isCorrect": false }
    ]
  },
  {
    "question": "Inkscape-ൽ ഒരു ഒബ്‌ജെക്റ്റിന്റെ ഡ്യൂപ്ലിക്കേറ്റ് എങ്ങനെ സൃഷ്ടിക്കാം?",
    "options": [
      { "text": "Ctrl + X", "isCorrect": false },
      { "text": "Ctrl + Z", "isCorrect": false },
      { "text": "Ctrl + D", "isCorrect": true },
      { "text": "Ctrl + S", "isCorrect": false }
    ]
  },
  {
    "question": "Inkscape-ലെ 'Text Tool' ൻ്റെ ധർമ്മം എന്താണ്?",
    "options": [
      { "text": "രൂപങ്ങൾ വരയ്ക്കാൻ", "isCorrect": false },
      { "text": "ടെക്സ്റ്റ് ചേർക്കാനും എഡിറ്റ് ചെയ്യാനും", "isCorrect": true },
      { "text": "ഗ്രേഡിയന്റുകൾ പ്രയോഗിക്കാൻ", "isCorrect": false },
      { "text": "ഒബ്‌ജെക്റ്റുകളുടെ വലുപ്പം മാറ്റാൻ", "isCorrect": false }
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
