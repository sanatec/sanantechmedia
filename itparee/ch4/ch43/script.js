document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "വിശ്വസനീയമായ അക്കാദമിക് ഉള്ളടക്കം (academic content) കണ്ടെത്താൻ ശുപാർശ ചെയ്യുന്ന പ്ലാറ്റ്ഫോം ഏതാണ്?",
    "options": [
      { "text": "TikTok", "isCorrect": false },
      { "text": "Instagram", "isCorrect": false },
      { "text": "Google Scholar", "isCorrect": true },
      { "text": "ഷോപ്പിംഗ് ആപ്പുകൾ", "isCorrect": false }
    ]
  },
  {
    "question": "അമിതമായ സ്ക്രീൻ സമയത്തിൻ്റെ അപകടം എന്താണ്?",
    "options": [
      { "text": "കൂടുതൽ ബാറ്ററി ഉപയോഗം", "isCorrect": false },
      { "text": "Tech Neck പോലുള്ള ആരോഗ്യപ്രശ്നങ്ങൾ", "isCorrect": true },
      { "text": "മെച്ചപ്പെട്ട കാഴ്ചശക്തി", "isCorrect": false },
      { "text": "വേഗത്തിലുള്ള ചാർജിംഗ് പ്രശ്നങ്ങൾ", "isCorrect": false }
    ]
  },
  {
    "question": "\"Tech Neck\" എന്തിൻ്റെ ഫലമായി ഉണ്ടാകുന്നു?",
    "options": [
      { "text": "VR ഗെയിമുകൾ കളിക്കുന്നത്", "isCorrect": false },
      { "text": "കൂടുതൽ വായിക്കുന്നത്", "isCorrect": false },
      { "text": "ഉപകരണങ്ങൾ ഉപയോഗിക്കുമ്പോൾ കഴുത്ത് കൂടുതൽ നേരം കുനിച്ചു വെക്കുന്നത്", "isCorrect": true },
      { "text": "ഹെഡ്‌ഫോണുകൾ ഉപയോഗിക്കുന്നത്", "isCorrect": false }
    ]
  },
  {
    "question": "Gaming Disorder-ൻ്റെ ഒരു ലക്ഷണം എന്താണ്?",
    "options": [
      { "text": "പുസ്തകങ്ങൾ വായിക്കുന്നത്", "isCorrect": false },
      { "text": "ദൈനംദിന ഉത്തരവാദിത്തങ്ങൾ അവഗണിക്കുന്നത്", "isCorrect": true },
      { "text": "പച്ചക്കറികൾ കഴിക്കുന്നത്", "isCorrect": false },
      { "text": "നേരത്തെ ഉറങ്ങുന്നത്", "isCorrect": false }
    ]
  },
  {
    "question": "താഴെ പറയുന്നവയിൽ ഓൺലൈനിൽ പങ്കിടാൻ പാടില്ലാത്തത് ഏതാണ്?",
    "options": [
      { "text": "വളർത്തു മൃഗങ്ങളുടെ ഫോട്ടോകൾ", "isCorrect": false },
      { "text": "പാസ്‌വേഡുകൾ", "isCorrect": true },
      { "text": "പ്രചോദനാത്മകമായ ഉദ്ധരണികൾ", "isCorrect": false },
      { "text": "പൊതുവാർത്തകൾ", "isCorrect": false }
    ]
  },
  {
    "question": "ഫോണോ ഇൻ്റർനെറ്റ് കണക്ഷനോ ഇല്ലാത്തതിലുള്ള ഉത്കണ്ഠയെ സൂചിപ്പിക്കുന്ന പദം ഏതാണ്?",
    "options": [
      { "text": "നോമോഫോബിയ (Nomophobia)", "isCorrect": true },
      { "text": "ഫോണിറ്റിസ്", "isCorrect": false },
      { "text": "ഡിസ്കണക്റ്റ് ഡിസോർഡർ", "isCorrect": false },
      { "text": "സൈബർസ്ട്രെസ്", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു അക്കാദമിക് ലേഖനം (academic essay) പൂർത്തിയാക്കുന്നതിനുള്ള ശരിയായ മാർഗ്ഗം:",
    "options": [
      { "text": "വിക്കിപീഡിയയിൽ നിന്ന് പകർത്തുന്നത്", "isCorrect": false },
      { "text": "പരിശോധിക്കാത്ത ഉദ്ധരണികൾ ചേർക്കുന്നത്", "isCorrect": false },
      { "text": "ആധികാരികമായ റെഫറൻസുകൾ ഉപയോഗിക്കുന്നത്", "isCorrect": true },
      { "text": "ഇമോജികളിൽ എഴുതുന്നത്", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു ഡൊമെയ്ൻ നാമം (domain name) എന്നാൽ:",
    "options": [
      { "text": "ഒരു ഭൗതിക സെർവർ", "isCorrect": false },
      { "text": "ഇൻ്റർനെറ്റിലെ വെബ്സൈറ്റുകളുടെ ഒരു വിലാസം", "isCorrect": true },
      { "text": "ഒരു AI സിസ്റ്റം", "isCorrect": false },
      { "text": "ഒരു ബ്ലോഗ് ശീർഷകം", "isCorrect": false }
    ]
  },
  {
    "question": "സൈബർസ്‌പേസിലെ “നെല്ലും പതിരും” (“Paddy and chaff”) എന്ന രൂപകം സൂചിപ്പിക്കുന്നത്:",
    "options": [
      { "text": "അരിയും ഗോതമ്പും", "isCorrect": false },
      { "text": "പഴയ പാരമ്പര്യങ്ങൾ", "isCorrect": false },
      { "text": "സത്യവും തെറ്റായ വിവരങ്ങളും", "isCorrect": true },
      { "text": "ഇൻ്റർനെറ്റ് ഫിൽട്ടറുകൾ", "isCorrect": false }
    ]
  },
  {
    "question": "അനുചിതമായ ഓൺലൈൻ ഉള്ളടക്കം ആരെയാണ് റിപ്പോർട്ട് ചെയ്യേണ്ടത്?",
    "options": [
      { "text": "ക്ലാസ്സിലെ കൂട്ടുകാരെ മാത്രം", "isCorrect": false },
      { "text": "സൈബർ പോലീസ് അല്ലെങ്കിൽ അധ്യാപകൻ", "isCorrect": true },
      { "text": "യാദൃച്ഛിക ഉപയോക്താക്കളെ", "isCorrect": false },
      { "text": "ഓൺലൈൻ ഇൻഫ്ലുവൻസർമാരെ", "isCorrect": false }
    ]
  },
  {
    "question": "താഴെ പറയുന്നവയിൽ ഏതാണ് സാധാരണയായി നിശ്ശബ്ദ ഡാറ്റാ ശേഖരണത്തിനായി (implicit data collection) ഉപയോഗിക്കാത്തത്?",
    "options": [
      { "text": "ബ്രൗസ് ചരിത്രം", "isCorrect": false },
      { "text": "ലൊക്കേഷൻ ഡാറ്റ", "isCorrect": false },
      { "text": "ഫീഡ്‌ബാക്ക് ഫോം", "isCorrect": true },
      { "text": "ആപ്പ് ഉപയോഗ വിശദാംശങ്ങൾ", "isCorrect": false }
    ]
  },
  {
    "question": "ധാർമ്മിക ഹാക്കിംഗിൻ്റെ (ethical hacking) പ്രാഥമിക ലക്ഷ്യം എന്താണ്?",
    "options": [
      { "text": "സുരക്ഷിത സിസ്റ്റങ്ങളിലേക്ക് അതിക്രമിച്ചു കയറാൻ", "isCorrect": false },
      { "text": "ഓൺലൈൻ ഗെയിമുകൾ കളിക്കാൻ", "isCorrect": false },
      { "text": "അനുമതിയോടെ സൈബർ സുരക്ഷ മെച്ചപ്പെടുത്താൻ", "isCorrect": true },
      { "text": "നിയമപരമായി ഡാറ്റ മോഷ്ടിക്കാൻ", "isCorrect": false }
    ]
  },
  {
    "question": "ഉപകരണങ്ങളെ വോയ്‌സ് കമാൻഡ് വഴി നിയന്ത്രിക്കാൻ പലപ്പോഴും ഉപയോഗിക്കുന്ന ഉപകരണം ഏതാണ്?",
    "options": [
      { "text": "കാൽക്കുലേറ്റർ", "isCorrect": false },
      { "text": "സ്മാർട്ട് സ്പീക്കർ", "isCorrect": true },
      { "text": "ഹെയർ ഡ്രയർ", "isCorrect": false },
      { "text": "ബ്ലെൻഡർ", "isCorrect": false }
    ]
  },
  {
    "question": "താഴെ പറയുന്നവയിൽ Metaverse-ൻ്റെ ഒരു പ്രത്യേകത അല്ലാത്തത് ഏതാണ്?",
    "options": [
      { "text": "വെർച്വൽ മീറ്റിംഗുകൾ", "isCorrect": false },
      { "text": "ബ്ലോക്ക്ചെയിൻ സംയോജനം", "isCorrect": false },
      { "text": "മാനുവൽ ടൈപ്പ്റൈറ്ററുകൾ", "isCorrect": true },
      { "text": "അവതാരങ്ങൾ", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു ഡിജിറ്റൽ വാലറ്റ് (digital wallet) എന്തിൻ്റെ ഉദാഹരണമാണ്?",
    "options": [
      { "text": "ഒരു ഭൗതിക സുരക്ഷിതം", "isCorrect": false },
      { "text": "ഒരു ഡിജിറ്റൽ ആസ്തി", "isCorrect": true },
      { "text": "ഒരു ഹാർഡ് ഡ്രൈവ്", "isCorrect": false },
      { "text": "ഒരു ക്രിപ്‌റ്റോകറൻസി", "isCorrect": false }
    ]
  },
  {
    "question": "താഴെ പറയുന്നവയിൽ സൈബർസ്പേസിലെ ബ്ലോക്ക്ചെയിൻ്റെ സാധുതയില്ലാത്ത ഉപയോഗം ഏതാണ്?",
    "options": [
      { "text": "ഇടപാടുകൾ സുരക്ഷിതമാക്കുന്നത്", "isCorrect": false },
      { "text": "വികേന്ദ്രീകൃത നെറ്റ്‌വർക്കുകൾ സൃഷ്ടിക്കുന്നത്", "isCorrect": false },
      { "text": "പുസ്തകങ്ങൾ അച്ചടിക്കുന്നത്", "isCorrect": true },
      { "text": "NFT-കളെ പിന്തുണയ്ക്കുന്നത്", "isCorrect": false }
    ]
  },
  {
    "question": "സൈബർസ്പേസിൽ പങ്കുവെക്കുന്ന തെറ്റായതോ വഴിതെറ്റിക്കുന്നതോ ആയ വിവരങ്ങളെ സൂചിപ്പിക്കുന്ന പദം ഏതാണ്?",
    "options": [
      { "text": "നെറ്റിക്വിറ്റ്", "isCorrect": false },
      { "text": "എൻക്രിപ്ഷൻ", "isCorrect": false },
      { "text": "തെറ്റിദ്ധാരണാജനകമായ വിവരങ്ങൾ (Misinformation)", "isCorrect": true },
      { "text": "ഡാറ്റാ സ്വകാര്യത", "isCorrect": false }
    ]
  },
  {
    "question": "ഓൺലൈനിലെ വ്യാജമോ കാലഹരണപ്പെട്ടതോ ആയ വിവരങ്ങൾ തിരിച്ചറിയാൻ ഇവയിൽ ഏതാണ് സഹായിക്കുന്നത്?",
    "options": [
      { "text": "ട്രെൻഡിംഗ് ഹാഷ്‌ടാഗുകൾ എല്ലാം പിന്തുടരുന്നത്", "isCorrect": false },
      { "text": "അഭ്യൂഹങ്ങളെ ആശ്രയിക്കുന്നത്", "isCorrect": false },
      { "text": "വിശ്വസനീയമായ ഉറവിടങ്ങൾ ഉപയോഗിക്കുന്നത്", "isCorrect": true },
      { "text": "റെഫറൻസുകൾ അവഗണിക്കുന്നത്", "isCorrect": false }
    ]
  },
  {
    "question": "ഡാറ്റ ഉത്പാദിപ്പിക്കുന്ന നേരിട്ടുള്ള ഉപയോക്തൃ ഇടപെടലിന് (direct user interaction) ഒരു ഉദാഹരണം എന്താണ്?",
    "options": [
      { "text": "GPS ട്രാക്കിംഗ്", "isCorrect": false },
      { "text": "ഒരു സോഷ്യൽ മീഡിയ പോസ്റ്റിന് ലൈക്ക് ചെയ്യുന്നത്", "isCorrect": true },
      { "text": "ആപ്പ് ബാക്ക്ഗ്രൗണ്ട് റിഫ്രഷ്", "isCorrect": false },
      { "text": "ഉപകരണ സമന്വയ രേഖകൾ", "isCorrect": false }
    ]
  },
  {
    "question": "ലേഖനങ്ങളിൽ വിവരങ്ങൾ നിങ്ങളുടെ സ്വന്തം വാക്കുകളിൽ മാറ്റി എഴുതുന്നതിനുള്ള ഏറ്റവും നല്ല കാരണം ഏതാണ്?",
    "options": [
      { "text": "അതാണ് വേഗത", "isCorrect": false },
      { "text": "പ്ലഗിരിസം ഒഴിവാക്കുകയും മനസ്സിലാക്കാൻ സഹായിക്കുകയും ചെയ്യുന്നു", "isCorrect": true },
      { "text": "നിങ്ങൾക്ക് റെഫറൻസുകൾ ആവശ്യമില്ല", "isCorrect": false },
      { "text": "അത് കൂടുതൽ വർണ്ണാഭമാണ്", "isCorrect": false }
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
