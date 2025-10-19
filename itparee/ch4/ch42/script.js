document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "എന്താണ് FOMO?",
    "options": [
      { "text": "Fear of missing out (നഷ്ടപ്പെടുമോ എന്ന ഭയം)", "isCorrect": true },
      { "text": "Fear of media online", "isCorrect": false },
      { "text": "False online message", "isCorrect": false },
      { "text": "Format of messaging", "isCorrect": false }
    ]
  },
  {
    "question": "എന്താണ് Cyberchondria?",
    "options": [
      { "text": "സൈബർസ്പേസിനോടുള്ള സ്നേഹം", "isCorrect": false },
      { "text": "ആരോഗ്യപ്രശ്നങ്ങൾ ഓൺലൈനിൽ അമിതമായി തിരയുന്നത്", "isCorrect": true },
      { "text": "ഒരു തരം സോഷ്യൽ മീഡിയ", "isCorrect": false },
      { "text": "ഒരു കോഡിംഗ് ഭാഷ", "isCorrect": false }
    ]
  },
  {
    "question": "Digital Detox എന്നാൽ എന്താണ് അർത്ഥമാക്കുന്നത്?",
    "options": [
      { "text": "ഡാറ്റ ഇല്ലാതാക്കുന്നത്", "isCorrect": false },
      { "text": "കുറച്ചുകാലത്തേക്ക് ഡിജിറ്റൽ ഉപകരണങ്ങളിൽ നിന്ന് വിട്ടുനിൽക്കുന്നത്", "isCorrect": true },
      { "text": "ഒരു കമ്പ്യൂട്ടർ സ്കാൻ ചെയ്യുന്നത്", "isCorrect": false },
      { "text": "മൊബൈൽ ഫോർമാറ്റ് ചെയ്യുന്നത്", "isCorrect": false }
    ]
  },
  {
    "question": "ഏതാണ് ഒരു ശരിയായ ഡിജിറ്റൽ സുരക്ഷാ രീതി?",
    "options": [
      { "text": "നിങ്ങളുടെ പാസ്‌വേർഡ് പങ്കിടുന്നത്", "isCorrect": false },
      { "text": "ബാങ്ക് വിവരങ്ങൾ ഓൺലൈനിൽ പോസ്റ്റ് ചെയ്യുന്നത്", "isCorrect": false },
      { "text": "ATM PIN സ്വകാര്യമായി സൂക്ഷിക്കുന്നത്", "isCorrect": true },
      { "text": "എല്ലായിടത്തും ഒരേ പാസ്‌വേർഡ് ഉപയോഗിക്കുന്നത്", "isCorrect": false }
    ]
  },
  {
    "question": "അവതാരങ്ങളെക്കുറിച്ച് (avatars) ശരിയായത് ഏതാണ്?",
    "options": [
      { "text": "അവ യഥാർത്ഥ ജീവിതത്തിലെ ഫോട്ടോകളാണ്", "isCorrect": false },
      { "text": "അവ സാങ്കൽപ്പിക കഥാപാത്രങ്ങൾ മാത്രമാണ്", "isCorrect": false },
      { "text": "അവ ഡിജിറ്റൽ പരിതസ്ഥിതികളിൽ ഉപയോക്താക്കളെ പ്രതിനിധീകരിക്കുന്നു", "isCorrect": true },
      { "text": "അവ ഭൗതിക ക്ലാസ് മുറികളിൽ ഉപയോഗിക്കുന്നു", "isCorrect": false }
    ]
  },
  {
    "question": "ആരോഗ്യ ഡാറ്റ ട്രാക്ക് ചെയ്യാനും സൈബർസ്പേസുമായി ബന്ധിപ്പിക്കാനും ഉപയോഗിക്കുന്നത് ഏതാണ്?",
    "options": [
      { "text": "കാൽക്കുലേറ്റർ", "isCorrect": false },
      { "text": "സ്മാർട്ട് വാച്ച്", "isCorrect": true },
      { "text": "USB ഡ്രൈവ്", "isCorrect": false },
      { "text": "തെർമോമീറ്റർ", "isCorrect": false }
    ]
  },
  {
    "question": "വിദ്യാഭ്യാസത്തിൽ Metaverse ഉപയോഗിക്കുന്നതിൻ്റെ പ്രധാന നേട്ടം എന്താണ്?",
    "options": [
      { "text": "കൂടുതൽ ഹോംവർക്ക്", "isCorrect": false },
      { "text": "വെർച്വൽ, ഇമ്മേഴ്സീവ് പഠനാനുഭവങ്ങൾ", "isCorrect": true },
      { "text": "ഇൻ്റർനെറ്റ് ബില്ലുകൾ വർദ്ധിക്കുന്നു", "isCorrect": false },
      { "text": "ഇത് ഗെയിമുകൾ തടയുന്നു", "isCorrect": false }
    ]
  },
  {
    "question": "Neuromancer എന്ന സയൻസ് ഫിക്ഷൻ നോവലിന് പ്രാധാന്യമുണ്ടാകാൻ കാരണം:",
    "options": [
      { "text": "ഇത് HTML പഠിപ്പിക്കുന്നു", "isCorrect": false },
      { "text": "ഇത് സ്മാർട്ട്ഫോണുകൾ അവതരിപ്പിച്ചു", "isCorrect": false },
      { "text": "\"സൈബർസ്പേസ്\" എന്ന പദം പ്രചരിപ്പിച്ചു", "isCorrect": true },
      { "text": "ഇത് വെള്ളപ്പൊക്കത്തെ പ്രവചിക്കുന്നു", "isCorrect": false }
    ]
  },
  {
    "question": "Khan Academy സൈബർസ്പേസിലെ ഏതുതരം പ്ലാറ്റ്‌ഫോമാണ്?",
    "options": [
      { "text": "സോഷ്യൽ മീഡിയ", "isCorrect": false },
      { "text": "വാർത്താ മാധ്യമം", "isCorrect": false },
      { "text": "ഓൺലൈൻ വിദ്യാഭ്യാസ പ്ലാറ്റ്‌ഫോം", "isCorrect": true },
      { "text": "ഡിജിറ്റൽ ഗെയിമിംഗ് സൈറ്റ്", "isCorrect": false }
    ]
  },
  {
    "question": "താഴെ പറയുന്നവയിൽ NFT-ക്ക് ഒരു ഉദാഹരണം ഏതാണ്?",
    "options": [
      { "text": "പാഠപുസ്തകം", "isCorrect": false },
      { "text": "ഡിജിറ്റൽ പെയിൻ്റിംഗ്", "isCorrect": true },
      { "text": "പ്രിൻ്റ് ചെയ്ത ഫോട്ടോ", "isCorrect": false },
      { "text": "ഹാർഡ് ഡിസ്ക്", "isCorrect": false }
    ]
  },
  {
    "question": "OpenSea ഏത് വ്യാപാരത്തിനുള്ള വിപണിയാണ്?",
    "options": [
      { "text": "ബോട്ടുകൾ", "isCorrect": false },
      { "text": "e-Books", "isCorrect": false },
      { "text": "NFT വ്യാപാരം", "isCorrect": true },
      { "text": "ഡൊമെയ്ൻ ഹോസ്റ്റിംഗ്", "isCorrect": false }
    ]
  },
  {
    "question": "www.samagra.kite.kerala.gov.in ഏത് ഡിജിറ്റൽ ആസ്തിയാണ്?",
    "options": [
      { "text": "ഡിജിറ്റൽ കറൻസി", "isCorrect": false },
      { "text": "NFT", "isCorrect": false },
      { "text": "ഡൊമെയ്ൻ നാമം", "isCorrect": true },
      { "text": "സോഫ്റ്റ്‌വെയർ", "isCorrect": false }
    ]
  },
  {
    "question": "ഏത് പ്രവർത്തനമാണ് എക്സ്പ്ലിസിറ്റ് ഡാറ്റാ ശേഖരണത്തിൽ ഉൾപ്പെടുന്നത്?",
    "options": [
      { "text": "GPS ട്രാക്കിംഗ്", "isCorrect": false },
      { "text": "ഒരു ഓൺലൈൻ ഫോം പൂരിപ്പിക്കുന്നത്", "isCorrect": true },
      { "text": "തിരയൽ ചോദ്യങ്ങൾ സ്വയം ടൈപ്പുചെയ്യുന്നത്", "isCorrect": false },
      { "text": "സ്ക്രീൻ സമയം കണ്ടെത്തുന്നത്", "isCorrect": false }
    ]
  },
  {
    "question": "\"പ്ലഗിരിസം\" (plagiarism) എന്ന വാക്കിൻ്റെ അർത്ഥം എന്താണ്?",
    "options": [
      { "text": "റഫറൻസുകൾ നൽകുന്നത്", "isCorrect": false },
      { "text": "നിങ്ങളുടെ സ്വന്തം വാക്കുകളിൽ മാറ്റി എഴുതുന്നത്", "isCorrect": false },
      { "text": "മറ്റുള്ളവരുടെ സൃഷ്ടി ക്രെഡിറ്റ് നൽകാതെ പകർത്തുന്നത്", "isCorrect": true },
      { "text": "പുതിയ ഗവേഷണം പ്രസിദ്ധീകരിക്കുന്നത്", "isCorrect": false }
    ]
  },
  {
    "question": "സ്പോയിലർ അലേർട്ടുകളുടെ (spoiler alerts) ഉദ്ദേശ്യം എന്താണ്?",
    "options": [
      { "text": "മാൽവെയറിനെക്കുറിച്ച് അറിയിക്കാൻ", "isCorrect": false },
      { "text": "പ്രധാന കഥാവിശദാംശങ്ങൾ വെളിപ്പെടുത്തുന്നതിനെക്കുറിച്ച് മുന്നറിയിപ്പ് നൽകാൻ", "isCorrect": true },
      { "text": "സബ്സ്ക്രിപ്ഷനുകൾ റദ്ദാക്കാൻ", "isCorrect": false },
      { "text": "പാസ്‌വേഡുകൾ റീസെറ്റ് ചെയ്യാൻ", "isCorrect": false }
    ]
  },
  {
    "question": "\"സൈബർവേൾഡ്\" (cyberworld) എന്ന പദം സൂചിപ്പിക്കുന്നത്:",
    "options": [
      { "text": "ഭൗതിക ലോകം", "isCorrect": false },
      { "text": "സൈബർസ്പേസിലെ പ്രത്യേക വെർച്വൽ ഇടങ്ങൾ", "isCorrect": true },
      { "text": "ഒരു കോഡിംഗ് ഭാഷ", "isCorrect": false },
      { "text": "സോഷ്യൽ നെറ്റ്‌വർക്കിംഗ് ആപ്പുകൾ മാത്രം", "isCorrect": false }
    ]
  },
  {
    "question": "IoT ഉപകരണങ്ങളിലെ സെൻസറുകളുടെ പങ്ക് എന്താണ്?",
    "options": [
      { "text": "പേപ്പർ ഡോക്യുമെൻ്റുകൾ സ്കാൻ ചെയ്യാൻ", "isCorrect": false },
      { "text": "ഡാറ്റ ശേഖരിക്കാനും കൈമാറ്റം ചെയ്യാനും", "isCorrect": true },
      { "text": "സ്ക്രീൻ വലുപ്പം കൂട്ടാൻ", "isCorrect": false },
      { "text": "ആൻ്റിവൈറസ് പ്രവർത്തിപ്പിക്കാൻ", "isCorrect": false }
    ]
  },
  {
    "question": "ബിഗ് ഡാറ്റയുടെ (Big Data) ഒരു സവിശേഷത എന്താണ്?",
    "options": [
      { "text": "സംഭരിക്കാൻ എളുപ്പമാണ്", "isCorrect": false },
      { "text": "പരമ്പരാഗത സോഫ്റ്റ്‌വെയർ ഉപയോഗിച്ച് എളുപ്പത്തിൽ പ്രോസസ്സ് ചെയ്യാവുന്നതാണ്", "isCorrect": false },
      { "text": "വിശാലവും സങ്കീർണ്ണവുമായ ഡാറ്റാസെറ്റുകൾ", "isCorrect": true },
      { "text": "ശാസ്ത്രജ്ഞർ മാത്രം സൃഷ്ടിക്കുന്നത്", "isCorrect": false }
    ]
  },
  {
    "question": "താഴെ പറയുന്നവയിൽ സൈബർസ്പേസിലെ ദോഷകരമായ പെരുമാറ്റം ഏതാണ്?",
    "options": [
      { "text": "ഒരു VPN ഉപയോഗിക്കുന്നത്", "isCorrect": false },
      { "text": "വാർത്തകൾ വായിക്കുന്നത്", "isCorrect": false },
      { "text": "വിദ്വേഷ സന്ദേശങ്ങൾ പ്രചരിപ്പിക്കുന്നത്", "isCorrect": true },
      { "text": "ഓൺലൈൻ ക്ലാസുകളിൽ പങ്കെടുക്കുന്നത്", "isCorrect": false }
    ]
  },
  {
    "question": "ഓൺലൈനിലെ മാന്യമായ പെരുമാറ്റ രീതി അറിയപ്പെടുന്നത്:",
    "options": [
      { "text": "സൈബർ ചാരവൃത്തി", "isCorrect": false },
      { "text": "സൈബർനെറ്റ്", "isCorrect": false },
      { "text": "നെറ്റിക്വിറ്റ് (Netiquette)", "isCorrect": true },
      { "text": "ഡിജിറ്റൽ മര്യാദകൾ", "isCorrect": false }
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
