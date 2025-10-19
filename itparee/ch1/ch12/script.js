document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "ഡിജിറ്റൽ ഇമേജിംഗിൽ 'dpi' എന്തിനെ സൂചിപ്പിക്കുന്നു?",
    "options": [
      { "text": "Dots per inch", "isCorrect": true },
      { "text": "Digital pixels interface", "isCorrect": false },
      { "text": "Dynamic picture integrity", "isCorrect": false },
      { "text": "Data processing input", "isCorrect": false }
    ]
  },
  {
    "question": "ഒബ്‌ജെക്റ്റുകൾ തിരഞ്ഞെടുക്കുന്നതിനും നീക്കുന്നതിനും Inkscape-ൽ ഉപയോഗിക്കുന്ന ടൂൾ ഏതാണ്?",
    "options": [
      { "text": "Bezier Tool", "isCorrect": false },
      { "text": "Pencil Tool", "isCorrect": false },
      { "text": "Select Tool", "isCorrect": true },
      { "text": "Gradient Tool", "isCorrect": false }
    ]
  },
  {
    "question": "Inkscape-ൽ ലെയറുകൾ (layers) ഉപയോഗിക്കുന്നതിൻ്റെ ഉദ്ദേശ്യം എന്താണ്?",
    "options": [
      { "text": "ആനിമേഷൻ ചേർക്കാൻ", "isCorrect": false },
      { "text": "ഒബ്‌ജെക്റ്റുകൾ ചിട്ടപ്പെടുത്താനും കൈകാര്യം ചെയ്യാനും", "isCorrect": true },
      { "text": "ഫിൽട്ടറുകൾ പ്രയോഗിക്കാൻ", "isCorrect": false },
      { "text": "ഡോക്യുമെൻ്റ് വലുപ്പം മാറ്റാൻ", "isCorrect": false }
    ]
  },
  {
    "question": "'Align and Distribute' പാനലിന്റെ ധർമ്മം എന്താണ്?",
    "options": [
      { "text": "ടെക്സ്റ്റ് ഇഫക്റ്റുകൾ ചേർക്കാൻ", "isCorrect": false },
      { "text": "രൂപങ്ങൾക്ക് ഫോർമാറ്റ് ചെയ്യാൻ", "isCorrect": false },
      { "text": "ഒബ്‌ജെക്റ്റുകൾക്ക് സ്ഥാനം നൽകാനും അകലം ക്രമീകരിക്കാനും", "isCorrect": true },
      { "text": "ഗ്രേഡിയന്റുകൾ പ്രയോഗിക്കാൻ", "isCorrect": false }
    ]
  },
  {
    "question": "Inkscape-ൽ ഒരു ഫയൽ സേവ് ചെയ്യാൻ ഉപയോഗിക്കുന്ന കീബോർഡ് കുറുക്കുവഴി (shortcut) ഏതാണ്?",
    "options": [
      { "text": "Ctrl + X", "isCorrect": false },
      { "text": "Ctrl + Z", "isCorrect": false },
      { "text": "Ctrl + D", "isCorrect": false },
      { "text": "Ctrl + S", "isCorrect": true }
    ]
  },
  {
    "question": "Inkscape-ലെ 'Zoom Tool' ൻ്റെ ഉദ്ദേശ്യം എന്താണ്?",
    "options": [
      { "text": "ഒബ്‌ജെക്റ്റുകൾ കറക്കാൻ", "isCorrect": false },
      { "text": "ഒബ്‌ജെക്റ്റുകളുടെ വലുപ്പം മാറ്റാൻ", "isCorrect": false },
      { "text": "കാഴ്ചയുടെ വലുപ്പം കൂട്ടാനോ കുറയ്ക്കാനോ", "isCorrect": true },
      { "text": "ഫിൽട്ടറുകൾ പ്രയോഗിക്കാൻ", "isCorrect": false }
    ]
  },
  {
    "question": "Inkscape-ൽ ഒരു വൃത്തം അല്ലെങ്കിൽ ദീർഘവൃത്തം (circle or ellipse) എങ്ങനെ സൃഷ്ടിക്കാം?",
    "options": [
      { "text": "Rectangle Tool", "isCorrect": false },
      { "text": "Bezier Tool", "isCorrect": false },
      { "text": "Ellipse Tool", "isCorrect": true },
      { "text": "Pencil Tool", "isCorrect": false }
    ]
  },
  {
    "question": "Inkscape-ലെ 'Node Tool' ൻ്റെ ധർമ്മം എന്താണ്?",
    "options": [
      { "text": "ടെക്സ്റ്റ് ചേർക്കാൻ", "isCorrect": false },
      { "text": "പാതകളുടെയും രൂപങ്ങളുടെയും നോഡുകൾ എഡിറ്റ് ചെയ്യാൻ", "isCorrect": true },
      { "text": "ഗ്രേഡിയന്റുകൾ പ്രയോഗിക്കാൻ", "isCorrect": false },
      { "text": "ഒബ്‌ജെക്റ്റുകളുടെ വലുപ്പം മാറ്റാൻ", "isCorrect": false }
    ]
  },
  {
    "question": "Inkscape-ലെ 'Object' മെനുവിൻ്റെ ഉദ്ദേശ്യം എന്താണ്?",
    "options": [
      { "text": "ഫിൽട്ടറുകൾ പ്രയോഗിക്കാൻ", "isCorrect": false },
      { "text": "ഒബ്‌ജെക്റ്റുകൾ കൈകാര്യം ചെയ്യാൻ", "isCorrect": true },
      { "text": "ടെക്സ്റ്റ് ഇഫക്റ്റുകൾ ചേർക്കാൻ", "isCorrect": false },
      { "text": "ഡോക്യുമെൻ്റ് വലുപ്പം മാറ്റാൻ", "isCorrect": false }
    ]
  },
  {
    "question": "Inkscape-ലെ 'Filters' മെനുവിൻ്റെ ധർമ്മം എന്താണ്?",
    "options": [
      { "text": "ആനിമേഷൻ ചേർക്കാൻ", "isCorrect": false },
      { "text": "ഒബ്‌ജെക്റ്റുകളിൽ വിഷ്വൽ ഇഫക്റ്റുകൾ പ്രയോഗിക്കാൻ", "isCorrect": true },
      { "text": "ഡോക്യുമെൻ്റ് വലുപ്പം മാറ്റാൻ", "isCorrect": false },
      { "text": "രൂപങ്ങൾക്ക് ഫോർമാറ്റ് ചെയ്യാൻ", "isCorrect": false }
    ]
  },
  {
    "question": "Inkscape-ലെ 'Extension' മെനുവിൻ്റെ ഉദ്ദേശ്യം എന്താണ്?",
    "options": [
      { "text": "ടെക്സ്റ്റ് ഇഫക്റ്റുകൾ ചേർക്കാൻ", "isCorrect": false },
      { "text": "കൂടുതൽ ഫങ്ഷണാലിറ്റി ചേർക്കാൻ", "isCorrect": true },
      { "text": "ഗ്രേഡിയന്റുകൾ പ്രയോഗിക്കാൻ", "isCorrect": false },
      { "text": "ഒബ്‌ജെക്റ്റുകളുടെ വലുപ്പം മാറ്റാൻ", "isCorrect": false }
    ]
  },
  {
    "question": "Inkscape-ൽ ഒരു ഒബ്‌ജെക്റ്റിനെ എങ്ങനെ കറക്കാം (rotate)?",
    "options": [
      { "text": "'Select Tool' ഉപയോഗിച്ച്, റൊട്ടേറ്റ് ഹാൻഡിലുകൾ ഉപയോഗിച്ച്", "isCorrect": true },
      { "text": "'Gradient Tool' ഉപയോഗിച്ച്", "isCorrect": false },
      { "text": "'Pencil Tool' ഉപയോഗിച്ച്", "isCorrect": false },
      { "text": "'Text Tool' ഉപയോഗിച്ച്", "isCorrect": false }
    ]
  },
  {
    "question": "'Fill and Stroke' പാനലിലെ 'Stroke Style' ൻ്റെ ധർമ്മം എന്താണ്?",
    "options": [
      { "text": "ടെക്സ്റ്റ് ഇഫക്റ്റുകൾ ചേർക്കാൻ", "isCorrect": false },
      { "text": "ഒരു രൂപത്തിൻ്റെ ബോർഡർ ക്രമീകരിക്കാൻ", "isCorrect": true },
      { "text": "ഗ്രേഡിയന്റുകൾ പ്രയോഗിക്കാൻ", "isCorrect": false },
      { "text": "ഡോക്യുമെൻ്റ് വലുപ്പം മാറ്റാൻ", "isCorrect": false }
    ]
  },
  {
    "question": "Inkscape-ൽ 'Opacity' സെറ്റിംഗിന്റെ ഉദ്ദേശ്യം എന്താണ്?",
    "options": [
      { "text": "ആനിമേഷൻ ചേർക്കാൻ", "isCorrect": false },
      { "text": "ഒരു ഒബ്‌ജെക്റ്റിന്റെ സുതാര്യത (transparency) ക്രമീകരിക്കാൻ", "isCorrect": true },
      { "text": "ഡോക്യുമെൻ്റ് വലുപ്പം മാറ്റാൻ", "isCorrect": false },
      { "text": "രൂപങ്ങൾക്ക് ഫോർമാറ്റ് ചെയ്യാൻ", "isCorrect": false }
    ]
  },
  {
    "question": "Inkscape-ൽ ഒരു പുതിയ ഡോക്യുമെൻ്റ് എങ്ങനെ സൃഷ്ടിക്കാം?",
    "options": [
      { "text": "Ctrl + X", "isCorrect": false },
      { "text": "Ctrl + Z", "isCorrect": false },
      { "text": "Ctrl + N", "isCorrect": true },
      { "text": "Ctrl + S", "isCorrect": false }
    ]
  },
  {
    "question": "Inkscape-ലെ 'Color Picker Tool' ൻ്റെ ധർമ്മം എന്താണ്?",
    "options": [
      { "text": "ടെക്സ്റ്റ് ഇഫക്റ്റുകൾ ചേർക്കാൻ", "isCorrect": false },
      { "text": "കാൻവാസിൽ (canvas) നിന്ന് നിറങ്ങൾ തിരഞ്ഞെടുക്കാൻ", "isCorrect": true },
      { "text": "ഗ്രേഡിയന്റുകൾ പ്രയോഗിക്കാൻ", "isCorrect": false },
      { "text": "ഒബ്‌ജെക്റ്റുകളുടെ വലുപ്പം മാറ്റാൻ", "isCorrect": false }
    ]
  },
  {
    "question": "Inkscape-ലെ 'Grid' ൻ്റെ ഉദ്ദേശ്യം എന്താണ്?",
    "options": [
      { "text": "ആനിമേഷൻ ചേർക്കാൻ", "isCorrect": false },
      { "text": "ഒബ്‌ജെക്റ്റുകൾ കൃത്യമായി വിന്യസിക്കാനും സ്ഥാനം നൽകാനും", "isCorrect": true },
      { "text": "ഡോക്യുമെൻ്റ് വലുപ്പം മാറ്റാൻ", "isCorrect": false },
      { "text": "രൂപങ്ങൾക്ക് ഫോർമാറ്റ് ചെയ്യാൻ", "isCorrect": false }
    ]
  },
  {
    "question": "Inkscape-ൽ ഒരു ഒബ്‌ജെക്റ്റിനെ തിരശ്ചീനമായോ ലംബമായോ (horizontally or vertically) എങ്ങനെ ഫ്ലിപ്പ് ചെയ്യാം?",
    "options": [
      { "text": "'Pencil Tool' ഉപയോഗിച്ച്", "isCorrect": false },
      { "text": "'Gradient Tool' ഉപയോഗിച്ച്", "isCorrect": false },
      { "text": "'Object' മെനുവും ഫ്ലിപ്പ് ഓപ്ഷനുകളും ഉപയോഗിച്ച്", "isCorrect": true },
      { "text": "'Text Tool' ഉപയോഗിച്ച്", "isCorrect": false }
    ]
  },
  {
    "question": "'Convert Object to Path' കമാൻഡിന്റെ ധർമ്മം എന്താണ്?",
    "options": [
      { "text": "ടെക്സ്റ്റ് ഇഫക്റ്റുകൾ ചേർക്കാൻ", "isCorrect": false },
      { "text": "രൂപങ്ങളെ എഡിറ്റ് ചെയ്യാൻ കഴിയുന്ന പാതകളാക്കി മാറ്റാൻ", "isCorrect": true },
      { "text": "ഗ്രേഡിയന്റുകൾ പ്രയോഗിക്കാൻ", "isCorrect": false },
      { "text": "ഒബ്‌ജെക്റ്റുകളുടെ വലുപ്പം മാറ്റാൻ", "isCorrect": false }
    ]
  },
  {
    "question": "Inkscape-ലെ 'Clones' ൻ്റെ ഉദ്ദേശ്യം എന്താണ്?",
    "options": [
      { "text": "ആനിമേഷൻ ചേർക്കാൻ", "isCorrect": false },
      { "text": "ഒബ്‌ജെക്റ്റുകളുടെ ലിങ്ക് ചെയ്ത പകർപ്പുകൾ (linked copies) സൃഷ്ടിക്കാൻ", "isCorrect": true },
      { "text": "ഡോക്യുമെൻ്റ് വലുപ്പം മാറ്റാൻ", "isCorrect": false },
      { "text": "രൂപങ്ങൾക്ക് ഫോർമാറ്റ് ചെയ്യാൻ", "isCorrect": false }
    ]
  },
  {
    "question": "Inkscape-ൽ ഒരു പാറ്റേൺ ഫിൽ (pattern fill) എങ്ങനെ സൃഷ്ടിക്കാം?",
    "options": [
      { "text": "'Text Tool' ഉപയോഗിച്ച്", "isCorrect": false },
      { "text": "'Gradient Tool' ഉപയോഗിച്ച്", "isCorrect": false },
      { "text": "'Fill and Stroke' പാനലിലെ പാറ്റേൺ ടാബ് ഉപയോഗിച്ച്", "isCorrect": true },
      { "text": "'Pencil Tool' ഉപയോഗിച്ച്", "isCorrect": false }
    ]
  },
  {
    "question": "'Trace Bitmap' ഫംഗ്ഷൻ്റെ ഉദ്ദേശ്യം എന്താണ്?",
    "options": [
      { "text": "ടെക്സ്റ്റ് ഇഫക്റ്റുകൾ ചേർക്കാൻ", "isCorrect": false },
      { "text": "റാസ്റ്റർ ഇമേജുകളെ വെക്റ്റർ ഗ്രാഫിക്സിലേക്ക് മാറ്റാൻ", "isCorrect": true },
      { "text": "ഗ്രേഡിയന്റുകൾ പ്രയോഗിക്കാൻ", "isCorrect": false },
      { "text": "ഒബ്‌ജെക്റ്റുകളുടെ വലുപ്പം മാറ്റാൻ", "isCorrect": false }
    ]
  },
  {
    "question": "'Path' മെനുവിലെ 'Boolean Operations' ൻ്റെ ധർമ്മം എന്താണ്?",
    "options": [
      { "text": "ആനിമേഷൻ ചേർക്കാൻ", "isCorrect": false },
      { "text": "രൂപങ്ങൾ സംയോജിപ്പിക്കാനോ കുറയ്ക്കാനോ", "isCorrect": true },
      { "text": "ഡോക്യുമെൻ്റ് വലുപ്പം മാറ്റാൻ", "isCorrect": false },
      { "text": "രൂപങ്ങൾക്ക് ഫോർമാറ്റ് ചെയ്യാൻ", "isCorrect": false }
    ]
  },
  {
    "question": "Inkscape-ലെ 'Guides' ൻ്റെ ഉദ്ദേശ്യം എന്താണ്?",
    "options": [
      { "text": "ടെക്സ്റ്റ് ഇഫക്റ്റുകൾ ചേർക്കാൻ", "isCorrect": false },
      { "text": "പ്രിൻ്റ് ചെയ്യാത്ത ലൈനുകൾ ഉപയോഗിച്ച് ഒബ്‌ജെക്റ്റുകൾ വിന്യസിക്കാൻ", "isCorrect": true },
      { "text": "ഗ്രേഡിയന്റുകൾ പ്രയോഗിക്കാൻ", "isCorrect": false },
      { "text": "ഒബ്‌ജെക്റ്റുകളുടെ വലുപ്പം മാറ്റാൻ", "isCorrect": false }
    ]
  },
  {
    "question": "Inkscape-ൽ ഒരു പെർസ്പെക്റ്റീവ് ഇഫക്റ്റ് എങ്ങനെ സൃഷ്ടിക്കാം?",
    "options": [
      { "text": "'Pencil Tool' ഉപയോഗിച്ച്", "isCorrect": false },
      { "text": "'Gradient Tool' ഉപയോഗിച്ച്", "isCorrect": false },
      { "text": "'Extensions' മെനുവും പെർസ്പെക്റ്റീവ് ഇഫക്റ്റും ഉപയോഗിച്ച്", "isCorrect": true },
      { "text": "'Text Tool' ഉപയോഗിച്ച്", "isCorrect": false }
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
