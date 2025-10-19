document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "ഒരു പത്രത്തിലെ പേജ് രൂപകൽപ്പനയുടെ പ്രാഥമിക ലക്ഷ്യം എന്താണ്?",
    "options": [
      { "text": "നിറത്തിൽ അച്ചടിക്കാൻ", "isCorrect": false },
      { "text": "അച്ചടി ചിലവ് കുറയ്ക്കാൻ", "isCorrect": false },
      { "text": "ഫലപ്രദമായ ആശയവിനിമയം മെച്ചപ്പെടുത്താൻ", "isCorrect": true },
      { "text": "പരസ്യങ്ങൾ ചേർക്കാൻ", "isCorrect": false }
    ]
  },
  {
    "question": "താഴെ പറയുന്നവയിൽ ഏത് സോഫ്റ്റ്‌വെയറാണ് DTP ടൂൾ അല്ലാത്തത്?",
    "options": [
      { "text": "Scribus", "isCorrect": false },
      { "text": "Microsoft Publisher", "isCorrect": false },
      { "text": "LibreOffice Writer", "isCorrect": true },
      { "text": "Adobe InDesign", "isCorrect": false }
    ]
  },
  {
    "question": "ടെക്സ്റ്റ് ഉൾപ്പെടുത്താൻ Scribus-ൻ്റെ ഏത് സവിശേഷതയാണ് ഉപയോഗിക്കുന്നത്?",
    "options": [
      { "text": "Image frame", "isCorrect": false },
      { "text": "Shape tool", "isCorrect": false },
      { "text": "Text frame", "isCorrect": true },
      { "text": "Node editor", "isCorrect": false }
    ]
  },
  {
    "question": "Scribus-ലെ 'Drop Shadow' ഫീച്ചറിൻ്റെ ധർമ്മം എന്താണ്?",
    "options": [
      { "text": "ടെക്സ്റ്റ് ഹൈലൈറ്റ് ചെയ്യാൻ", "isCorrect": false },
      { "text": "ആനിമേഷനുകൾ സൃഷ്ടിക്കാൻ", "isCorrect": false },
      { "text": "രൂപങ്ങൾക്ക് വിഷ്വൽ ഡെപ്ത് (visual depth) ചേർക്കാൻ", "isCorrect": true },
      { "text": "ഒബ്‌ജെക്റ്റുകൾ ഡ്യൂപ്ലിക്കേറ്റ് ചെയ്യാൻ", "isCorrect": false }
    ]
  },
  {
    "question": "Scribus-ൽ ദീർഘചതുരങ്ങളോ മറ്റ് രൂപങ്ങളോ വരയ്ക്കാൻ ഉപയോഗിക്കുന്ന ഉപകരണം ഏതാണ്?",
    "options": [
      { "text": "Text frame", "isCorrect": false },
      { "text": "Image frame", "isCorrect": false },
      { "text": "Shape tool", "isCorrect": true },
      { "text": "Banner tool", "isCorrect": false }
    ]
  },
  {
    "question": "പോയിന്റുകൾ ഉപയോഗിച്ച് ഒരു രൂപത്തിൻ്റെ രൂപം മാറ്റാൻ നിങ്ങൾ ഉപയോഗിക്കുന്നത്:",
    "options": [
      { "text": "Font properties", "isCorrect": false },
      { "text": "Image settings", "isCorrect": false },
      { "text": "Node Editing", "isCorrect": true },
      { "text": "Layer manager", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു Image Frame-ലേക്ക് ചിത്രം ചേർക്കാൻ Scribus-ൽ ഉപയോഗിക്കുന്ന ഓപ്ഷൻ ഏതാണ്?",
    "options": [
      { "text": "Insert → Add Picture", "isCorrect": false },
      { "text": "File → Open Image", "isCorrect": false },
      { "text": "Content → Get Image", "isCorrect": true },
      { "text": "Import → Picture", "isCorrect": false }
    ]
  },
  {
    "question": "Properties വിൻഡോയിലെ ഏത് ടാബാണ് ഒരു ടെക്സ്റ്റ് ഫ്രെയിമിലെ കോളങ്ങളുടെ എണ്ണം സജ്ജമാക്കാൻ ഉപയോഗിക്കുന്നത്?",
    "options": [
      { "text": "Fill and Stroke", "isCorrect": false },
      { "text": "Columns & Text Distance", "isCorrect": true },
      { "text": "Font Style", "isCorrect": false },
      { "text": "Line spacing", "isCorrect": false }
    ]
  },
  {
    "question": "താഴെ പറയുന്നവയിൽ ഏതാണ് ഒരു യൂണിക്കോഡ് മലയാളം ഫോണ്ട്?",
    "options": [
      { "text": "Arial", "isCorrect": false },
      { "text": "Manjari", "isCorrect": true },
      { "text": "Calibri", "isCorrect": false },
      { "text": "Times New Roman", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു രൂപം മറ്റ് പേജ് ഘടകങ്ങൾക്ക് പിന്നിൽ ദൃശ്യമാകുന്നുവെന്ന് ഉറപ്പാക്കാൻ നിങ്ങൾ എന്തു ചെയ്യണം?",
    "options": [
      { "text": "Set Drop Shadow", "isCorrect": false },
      { "text": "Level-ലെ Send to Back ഉപയോഗിക്കുക", "isCorrect": true },
      { "text": "Font Size ക്രമീകരിക്കുക", "isCorrect": false },
      { "text": "Justify Alignment പ്രയോഗിക്കുക", "isCorrect": false }
    ]
  },
  {
    "question": "മലയാളം പത്രങ്ങളിൽ വ്യാപകമായി ഉപയോഗിക്കുന്ന ഓപ്പൺ സോഴ്സ് DTP സോഫ്റ്റ്‌വെയർ ഏതാണ്?",
    "options": [
      { "text": "QuarkXPress", "isCorrect": false },
      { "text": "Adobe Illustrator", "isCorrect": false },
      { "text": "Scribus", "isCorrect": true },
      { "text": "CorelDRAW", "isCorrect": false }
    ]
  },
  {
    "question": "Scribus-ലെ ‘Preview Mode’ ൻ്റെ ഉദ്ദേശ്യം എന്താണ്?",
    "options": [
      { "text": "രൂപങ്ങൾ എഡിറ്റ് ചെയ്യാൻ", "isCorrect": false },
      { "text": "പ്രിൻ്റ് ലേഔട്ട് പരീക്ഷിക്കാൻ", "isCorrect": false },
      { "text": "ഗൈഡുകൾ ഇല്ലാതെ അന്തിമ ഡിസൈൻ കാണാൻ", "isCorrect": true },
      { "text": "ഉള്ളടക്കത്തിൽ സൂം ചെയ്യാൻ", "isCorrect": false }
    ]
  },
  {
    "question": "Scribus-ൽ ടെക്സ്റ്റ് ടൈപ്പ് ചെയ്യുന്നതിനു മുമ്പ് എന്ത് ചെയ്യണം?",
    "options": [
      { "text": "ഒരു രൂപം സൃഷ്ടിക്കുക", "isCorrect": false },
      { "text": "ഒരു ലെയർ തുറക്കുക", "isCorrect": false },
      { "text": "ഒരു ടെക്സ്റ്റ് ഫ്രെയിം സൃഷ്ടിക്കുക", "isCorrect": true },
      { "text": "പേജ് ഓറിയൻ്റേഷൻ മാറ്റുക", "isCorrect": false }
    ]
  },
  {
    "question": "Scribus-ൽ ഒരു ഒബ്‌ജെക്റ്റ് ഡ്യൂപ്ലിക്കേറ്റ് ചെയ്യാൻ ഉപയോഗിക്കുന്ന ഓപ്ഷൻ ഏതാണ്?",
    "options": [
      { "text": "File → Save As", "isCorrect": false },
      { "text": "Edit → Copy", "isCorrect": false },
      { "text": "Item → Duplicate/Transform → Duplicate", "isCorrect": true },
      { "text": "View → Repeat", "isCorrect": false }
    ]
  },
  {
    "question": "DTP-യുടെ പൂർണ്ണ രൂപം എന്താണ്?",
    "options": [
      { "text": "Digital Text Processor", "isCorrect": false },
      { "text": "Document Text Publisher", "isCorrect": false },
      { "text": "Desktop Publishing", "isCorrect": true },
      { "text": "Dynamic Text Placement", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു രൂപത്തെ തിരശ്ചീനമായി (horizontally) ഫ്ലിപ്പ് ചെയ്യാൻ സഹായിക്കുന്ന Scribus ഫീച്ചർ ഏതാണ്?",
    "options": [
      { "text": "Flip tool", "isCorrect": false },
      { "text": "Properties → Level → Flip Horizontally", "isCorrect": true },
      { "text": "Text Properties → Mirror", "isCorrect": false },
      { "text": "Banner tool", "isCorrect": false }
    ]
  },
  {
    "question": "ടെക്സ്റ്റ് ഓവർഫ്ലോ ഉണ്ടെങ്കിൽ, അത് ഫ്രെയിമിനുള്ളിൽ ഒതുക്കാൻ നിങ്ങൾ എങ്ങനെ ക്രമീകരിക്കും?",
    "options": [
      { "text": "ഫോണ്ട് ചെറുതാക്കുക", "isCorrect": false },
      { "text": "മറ്റൊരു ഫ്രെയിമിലേക്ക് ലിങ്ക് ചെയ്യാൻ ഓവർഫ്ലോ ഐക്കൺ ഉപയോഗിക്കുക", "isCorrect": true },
      { "text": "ഫ്രെയിം വീണ്ടും സൃഷ്ടിക്കുക", "isCorrect": false },
      { "text": "അകലം കുറയ്ക്കുക", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു സ്കൂൾ പത്രത്തിൻ്റെ ആദ്യ പേജിൽ അത്യാവശ്യമായ ഘടകം ഏതാണ്?",
    "options": [
      { "text": "സബ്ഹെഡിംഗുകൾ മാത്രം", "isCorrect": false },
      { "text": "എഡിറ്റോറിയൽ മാത്രം", "isCorrect": false },
      { "text": "ശീർഷകവും ഉപശീർഷകവും (Title and subtitle)", "isCorrect": true },
      { "text": "പരസ്യങ്ങൾ", "isCorrect": false }
    ]
  },
  {
    "question": "Scribus-ൽ ഒരു രൂപത്തിന് കളർ ഫിൽ എങ്ങനെ നൽകാം?",
    "options": [
      { "text": "Properties വിൻഡോയിലെ Fill ഓപ്ഷൻ ഉപയോഗിക്കുക", "isCorrect": true },
      { "text": "Font color സെറ്റിംഗ്സ് ഉപയോഗിക്കുക", "isCorrect": false },
      { "text": "Shape editor ഉപയോഗിക്കുക", "isCorrect": false },
      { "text": "Background tool ഉപയോഗിക്കുക", "isCorrect": false }
    ]
  },
  {
    "question": "Scribus-ൽ നേർരേഖകൾ (straight lines) ചേർക്കാൻ ഉപയോഗിക്കുന്ന ടൂൾ ഏതാണ്?",
    "options": [
      { "text": "Text Frame", "isCorrect": false },
      { "text": "Line Tool", "isCorrect": true },
      { "text": "Brush Tool", "isCorrect": false },
      { "text": "Ruler Tool", "isCorrect": false }
    ]
  },
  {
    "question": "ബാനറുകൾക്കായി പുതിയ ഡിസൈൻ സൃഷ്ടിക്കാൻ സഹായിക്കുന്ന രൂപമാറ്റം (shape transformation) ഏതാണ്?",
    "options": [
      { "text": "Drop shadow", "isCorrect": false },
      { "text": "Gradient", "isCorrect": false },
      { "text": "Node Editing", "isCorrect": true },
      { "text": "Insert Table", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു QR കോഡ് ചേർക്കാൻ, ഏത് ടൂൾബാർ ഐക്കൺ ആണ് ഉപയോഗിക്കേണ്ടത്?",
    "options": [
      { "text": "Image", "isCorrect": false },
      { "text": "Barcode", "isCorrect": true },
      { "text": "Scan", "isCorrect": false },
      { "text": "Add Link", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു ടെക്സ്റ്റ് ഫ്രെയിമിലെ വരികൾ തമ്മിലുള്ള അകലം (spacing) എങ്ങനെ ക്രമീകരിക്കാം?",
    "options": [
      { "text": "Set Margin", "isCorrect": false },
      { "text": "Text Properties-ലെ Line spacing mode ഉപയോഗിക്കുക", "isCorrect": true },
      { "text": "ഫ്രെയിം വലിച്ചിടുക", "isCorrect": false },
      { "text": "ഫോണ്ട് വലുപ്പം കുറയ്ക്കുക", "isCorrect": false }
    ]
  },
  {
    "question": "ടെക്സ്റ്റ് ഫ്രെയിമിൽ കോളങ്ങൾ തമ്മിലുള്ള അകലം (spacing) സജ്ജമാക്കുന്ന പ്രോപ്പർട്ടി ഏതാണ്?",
    "options": [
      { "text": "Justify Alignment", "isCorrect": false },
      { "text": "Columns & Text Distance", "isCorrect": true },
      { "text": "Contour Settings", "isCorrect": false },
      { "text": "Background Fill", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു ചിത്രത്തിനു ചുറ്റും ടെക്സ്റ്റ് ഒഴുകാൻ (flow around) ഒരാൾക്ക് എങ്ങനെ ക്രമീകരിക്കാൻ കഴിയും?",
    "options": [
      { "text": "Image wrap setting ഉപയോഗിക്കുക", "isCorrect": false },
      { "text": "Text Overflow option ഉപയോഗിക്കുക", "isCorrect": false },
      { "text": "Shape → Text Flow Around Frame-ന് കീഴിലുള്ള Contour Line ഉപയോഗിക്കുക", "isCorrect": true },
      { "text": "Gradient പ്രയോഗിക്കുക", "isCorrect": false }
    ]
  },
  {
    "question": "താഴെ പറയുന്നവയിൽ ഏതാണ് ഒരു മലയാളം യൂണിക്കോഡ് ഫോണ്ട്?",
    "options": [
      { "text": "RIT Ezhuthu", "isCorrect": true },
      { "text": "Courier New", "isCorrect": false },
      { "text": "Times", "isCorrect": false },
      { "text": "Comic Sans", "isCorrect": false }
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
