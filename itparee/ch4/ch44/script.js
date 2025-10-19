document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "സ്ക്രീൻ ടൈം അധികരിക്കുന്നതിൻ്റെ ദോഷഫലങ്ങൾ കുറയ്ക്കുന്നതിനുള്ള ഒരു മാർഗ്ഗം ഏതാണ്?",
    "options": [
      { "text": "കൂട്ടുകാരെ ഒഴിവാക്കുന്നത്", "isCorrect": false },
      { "text": "ഡിജിറ്റൽ ഉപകരണങ്ങളുടെ ഉപയോഗം പരിമിതപ്പെടുത്തുന്നത്", "isCorrect": true },
      { "text": "രാത്രി വൈകി ഉണർന്നിരിക്കുന്നത്", "isCorrect": false },
      { "text": "മുന്നറിയിപ്പ് സൂചനകൾ അവഗണിക്കുന്നത്", "isCorrect": false }
    ]
  },
  {
    "question": "താഴെ പറയുന്നവയിൽ നെറ്റിക്വിറ്റിന് (Netiquette) ഒരു നല്ല ഉദാഹരണം അല്ലാത്തത് ഏതാണ്?",
    "options": [
      { "text": "ഓൺലൈൻ അഭിപ്രായങ്ങളെ ബഹുമാനിക്കുന്നത്", "isCorrect": false },
      { "text": "അനുചിതമായ ഉള്ളടക്കം റിപ്പോർട്ട് ചെയ്യുന്നത്", "isCorrect": false },
      { "text": "ഒരാളുടെ സ്വകാര്യ വിവരങ്ങൾ സമ്മതമില്ലാതെ പങ്കുവെക്കുന്നത്", "isCorrect": true },
      { "text": "വിദ്വേഷകരമായ കമൻ്റുകൾ ഒഴിവാക്കുന്നത്", "isCorrect": false }
    ]
  },
  {
    "question": "പണ്ഡിതോചിതമായ പ്രസിദ്ധീകരണങ്ങൾ (scholarly publications) കണ്ടെത്താൻ ഏറ്റവും അനുയോജ്യമായ പ്ലാറ്റ്ഫോം ഏതാണ്?",
    "options": [
      { "text": "Google Scholar", "isCorrect": true },
      { "text": "Instagram", "isCorrect": false },
      { "text": "Facebook", "isCorrect": false },
      { "text": "Amazon", "isCorrect": false }
    ]
  },
  {
    "question": "ഇവയിൽ ഏതാണ് Cyberchondria-യുടെ ഒരു ലക്ഷണം?",
    "options": [
      { "text": "ഫോൺ നഷ്ടപ്പെടുമോ എന്ന ഭയം", "isCorrect": false },
      { "text": "മെഡിക്കൽ ലക്ഷണങ്ങൾ ഓൺലൈനിൽ നിരന്തരം തിരയുന്നത്", "isCorrect": true },
      { "text": "വീഡിയോ ഗെയിമുകളോടുള്ള ആഗ്രഹം", "isCorrect": false },
      { "text": "പാചക വീഡിയോകൾ കാണുന്നത്", "isCorrect": false }
    ]
  },
  {
    "question": "വ്യാജ വാർത്തകൾക്കെതിരെ ശരിയായ വിവരങ്ങൾ പ്രചരിപ്പിക്കുന്നതായി പരാമർശിക്കപ്പെടുന്ന സംഘടന ഏതാണ്?",
    "options": [
      { "text": "WHO", "isCorrect": false },
      { "text": "UNICEF", "isCorrect": true },
      { "text": "NASA", "isCorrect": false },
      { "text": "FIFA", "isCorrect": false }
    ]
  },
  {
    "question": "ഓൺലൈൻ വിവരങ്ങൾ സത്യമാണോ എന്ന് പരിശോധിക്കുന്നതിനുള്ള ഏറ്റവും നല്ല മാർഗ്ഗം ഏതാണ്?",
    "options": [
      { "text": "വിശ്വസനീയമായ ഒന്നിലധികം ഉറവിടങ്ങൾ പരിശോധിക്കുക", "isCorrect": true },
      { "text": "ആദ്യത്തെ ഫലം വിശ്വസിക്കുക", "isCorrect": false },
      { "text": "ഒരു സുഹൃത്തിനോട് ചോദിക്കുക", "isCorrect": false },
      { "text": "ഓരോ സോഷ്യൽ മീഡിയ പോസ്റ്റും വിശ്വസിക്കുക", "isCorrect": false }
    ]
  },
  {
    "question": "സൈബർസ്പേസിലെ Big Data-യുടെ ഭാഗമായി കണക്കാക്കുന്ന ഫയൽ തരം ഏതാണ്?",
    "options": [
      { "text": "പേപ്പർ രേഖകൾ", "isCorrect": false },
      { "text": "പ്രിൻ്റ് ചെയ്ത രസീതുകൾ", "isCorrect": false },
      { "text": "വീഡിയോ, വോയ്സ് ഫയലുകൾ", "isCorrect": true },
      { "text": "നോട്ട്ബുക്കിലെ ഡ്രോയിംഗുകൾ", "isCorrect": false }
    ]
  },
  {
    "question": "എന്താണ് ഒരു ഡിജിറ്റൽ ആസ്തിയെ \"നോൺ-ഫംഗിബിൾ\" (non-fungible) ആക്കുന്നത്?",
    "options": [
      { "text": "ഇത് പലതവണ ഉപയോഗിക്കാൻ കഴിയും", "isCorrect": false },
      { "text": "ഇത് എളുപ്പത്തിൽ മാറ്റിസ്ഥാപിക്കാൻ കഴിയും", "isCorrect": false },
      { "text": "ഇത് അതുല്യമാണ്, പരസ്പരം മാറ്റാൻ കഴിയില്ല", "isCorrect": true },
      { "text": "ഇത് ഒരു USB-യിൽ സൂക്ഷിച്ചിരിക്കുന്നു", "isCorrect": false }
    ]
  },
  {
    "question": "സൈബർസ്പേസിൽ അവതാരങ്ങൾ (avatars) എന്തിന് സഹായിക്കുന്നു?",
    "options": [
      { "text": "ഭക്ഷണം പാചകം ചെയ്യാൻ", "isCorrect": false },
      { "text": "വെർച്വൽ പരിതസ്ഥിതികളിൽ ഉപയോക്താക്കളെ പ്രതിനിധീകരിക്കാൻ", "isCorrect": true },
      { "text": "ഭൗതിക കായിക വിനോദങ്ങൾ കളിക്കാൻ", "isCorrect": false },
      { "text": "വൈദ്യുതി ഉത്പാദിപ്പിക്കാൻ", "isCorrect": false }
    ]
  },
  {
    "question": "നിങ്ങളുടെ സൃഷ്ടിയിൽ സൈബർസ്പേസിൽ നിന്നുള്ള ഉള്ളടക്കം പ്രസിദ്ധീകരിക്കുന്നതിന് മുമ്പ് എന്ത് ചെയ്യണം?",
    "options": [
      { "text": "അത് മാറ്റിയെഴുതുക", "isCorrect": false },
      { "text": "യഥാർത്ഥ ഉറവിടത്തിന് കടപ്പാട് നൽകുക (Credit the original source)", "isCorrect": true },
      { "text": "ഉറവിടം മറച്ചുവെക്കുക", "isCorrect": false },
      { "text": "അത് അവഗണിക്കുക", "isCorrect": false }
    ]
  },
  {
    "question": "അനുമതിയോ റെഫറൻസോ ഇല്ലാതെ സൃഷ്ടി പകർത്തുമ്പോൾ എന്ത് സംഭവിക്കും?",
    "options": [
      { "text": "നിങ്ങൾക്ക് ഒരു സമ്മാനം ലഭിക്കും", "isCorrect": false },
      { "text": "ഇതിനെ പ്ലഗിരിസം (plagiarism) എന്ന് വിളിക്കുന്നു", "isCorrect": true },
      { "text": "നിങ്ങൾ ഒരു ഗവേഷകനാകും", "isCorrect": false },
      { "text": "ഇത് പ്രോത്സാഹിപ്പിക്കപ്പെടുന്നു", "isCorrect": false }
    ]
  },
  {
    "question": "വിനോദത്തിനായി സൈബർസ്പേസ് അമിതമായി ഉപയോഗിക്കുന്നതിൻ്റെ ഒരു പ്രധാന അപകടസാധ്യത എന്താണ്?",
    "options": [
      { "text": "കൂടുതൽ മാർക്കുകൾ", "isCorrect": false },
      { "text": "വർദ്ധിച്ച ഊർജ്ജം", "isCorrect": false },
      { "text": "ഉദാസീനമായ ജീവിതശൈലി (Sedentary lifestyle)", "isCorrect": true },
      { "text": "മെച്ചപ്പെട്ട ഉറക്കം", "isCorrect": false }
    ]
  },
  {
    "question": "സോഷ്യൽ മീഡിയ നിരന്തരം പരിശോധിക്കുന്നത് കാരണം ഉണ്ടാകാൻ സാധ്യതയുള്ള പെരുമാറ്റം ഏതാണ്?",
    "options": [
      { "text": "സന്തോഷം", "isCorrect": false },
      { "text": "FOMO (Fear of Missing Out)", "isCorrect": true },
      { "text": "ധൈര്യം", "isCorrect": false },
      { "text": "ക്ഷമ", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു അസൈൻമെൻ്റിൽ വിക്കിപീഡിയയിൽ നിന്നുള്ള വിവരങ്ങൾ ഉപയോഗിക്കുന്നതിനുള്ള ശരിയായ മാർഗ്ഗം ഏതാണ്?",
    "options": [
      { "text": "അത് നേരിട്ട് കോപ്പി-പേസ്റ്റ് ചെയ്യുക", "isCorrect": false },
      { "text": "എഡിറ്റ് ചെയ്യാതെ പങ്കിടുക", "isCorrect": false },
      { "text": "അത് മാറ്റി എഴുതുകയും (Paraphrase) ശരിയായ രീതിയിൽ ഉദ്ധരിക്കുകയും ചെയ്യുക (cite)", "isCorrect": true },
      { "text": "രചയിതാവിൻ്റെ പേര് നീക്കം ചെയ്യുക", "isCorrect": false }
    ]
  },
  {
    "question": "മാപ്പ് സോഫ്റ്റ്‌വെയർ ഉപയോഗിക്കുമ്പോൾ സൃഷ്ടിക്കപ്പെടുന്ന ഡാറ്റ ഏതാണ്?",
    "options": [
      { "text": "ജന്മദിന ഡാറ്റ", "isCorrect": false },
      { "text": "പരീക്ഷാ ഫലങ്ങൾ", "isCorrect": false },
      { "text": "യാത്രാ റൂട്ടും സമയ ഡാറ്റയും", "isCorrect": true },
      { "text": "ഇമേജ് റെസലൂഷൻ ഡാറ്റ", "isCorrect": false }
    ]
  },
  {
    "question": "ബ്രൗസ് ചരിത്രവും ആപ്പ് ഉപയോഗവും പോലുള്ള നിശബ്ദമായി ട്രാക്കുചെയ്യുന്ന ഡാറ്റ ഏതാണ്?",
    "options": [
      { "text": "എക്സ്പ്ലിസിറ്റ് ഡാറ്റ", "isCorrect": false },
      { "text": "രഹസ്യ ഡാറ്റ", "isCorrect": false },
      { "text": "ഇമ്പ്ലിസിറ്റ് ഡാറ്റ (Implicit data)", "isCorrect": true },
      { "text": "സംരക്ഷിത ഡാറ്റ", "isCorrect": false }
    ]
  },
  {
    "question": "വിവരങ്ങൾ പങ്കുവെക്കുന്നതിനുമുമ്പ് അതിൻ്റെ ആധികാരികത പരിശോധിക്കേണ്ടത് പ്രധാനമായിരിക്കുന്നത് എന്തുകൊണ്ട്?",
    "options": [
      { "text": "വാദങ്ങളിൽ വിജയിക്കാൻ", "isCorrect": false },
      { "text": "സ്ക്രീൻ ടൈം വർദ്ധിപ്പിക്കാൻ", "isCorrect": false },
      { "text": "തെറ്റായ വിവരങ്ങൾ പ്രചരിപ്പിക്കാതിരിക്കാൻ", "isCorrect": true },
      { "text": "പുസ്തകങ്ങൾ വായിക്കുന്നത് ഒഴിവാക്കാൻ", "isCorrect": false }
    ]
  },
  {
    "question": "സൈബർസ്പേസും ഇൻ്റർനെറ്റും തമ്മിലുള്ള പ്രധാന വ്യത്യാസം എന്താണ്?",
    "options": [
      { "text": "സൈബർസ്പേസ് ഒരു തിരയൽ യന്ത്രമാണ്", "isCorrect": false },
      { "text": "ഇൻ്റർനെറ്റ് സൈബർസ്പേസിൻ്റെ ഭാഗമാണ്", "isCorrect": true },
      { "text": "ഇൻ്റർനെറ്റ് ഒരു വെർച്വൽ സ്പേസാണ്", "isCorrect": false },
      { "text": "സൈബർസ്പേസ് ഭൗതികമാണ്", "isCorrect": false }
    ]
  },
  {
    "question": "ക്രിപ്‌റ്റോഗ്രാഫി ഉപയോഗിച്ച് സുരക്ഷിതമാക്കിയ ഡിജിറ്റൽ കറൻസികളെ എന്താണ് വിളിക്കുന്നത്?",
    "options": [
      { "text": "ഡിജിറ്റൽ വാലറ്റുകൾ", "isCorrect": false },
      { "text": "ക്രിപ്‌റ്റോകറൻസി (Cryptocurrency)", "isCorrect": true },
      { "text": "സൈബർ ക്യാഷ്", "isCorrect": false },
      { "text": "ടോക്കണുകൾ", "isCorrect": false }
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
