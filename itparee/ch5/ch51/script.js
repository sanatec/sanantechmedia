document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "HTML-ൽ `<div>` ടാഗ് എന്തിനാണ് സഹായിക്കുന്നത്?",
    "options": [
      { "text": "ടെക്സ്റ്റിന് സ്റ്റൈൽ ചേർക്കുന്നതിന്", "isCorrect": false },
      { "text": "ഹൈപ്പർലിങ്കുകൾ സൃഷ്ടിക്കുന്നതിന്", "isCorrect": false },
      { "text": "വെബ്‌പേജിനെ വിവിധ ഭാഗങ്ങളായി (sections) വിഭജിക്കുന്നതിന്", "isCorrect": true },
      { "text": "ചിത്രങ്ങൾ പ്രദർശിപ്പിക്കുന്നതിന്", "isCorrect": false }
    ]
  },
  {
    "question": "HTML-ൽ ഹെഡിംഗ് ലെവൽ 2 (heading level 2) നൽകാൻ ഉപയോഗിക്കുന്ന ടാഗ് ഏതാണ്?",
    "options": [
      { "text": "<head2>", "isCorrect": false },
      { "text": "<h2>", "isCorrect": true },
      { "text": "<heading2>", "isCorrect": false },
      { "text": "<h>", "isCorrect": false }
    ]
  },
  {
    "question": "`style=\"color:#0000FF;\"` എന്ന സ്റ്റൈൽ ഒരു എലമെൻ്റിന് എന്ത് ചെയ്യുന്നു?",
    "options": [
      { "text": "പശ്ചാത്തലം നീലയാക്കുന്നു", "isCorrect": false },
      { "text": "ബോർഡർ നിറം ചേർക്കുന്നു", "isCorrect": false },
      { "text": "ടെക്സ്റ്റ് നിറം നീലയാക്കുന്നു", "isCorrect": true },
      { "text": "ടെക്സ്റ്റ് വിന്യസിക്കുന്നു", "isCorrect": false }
    ]
  },
  {
    "question": "താഴെ പറയുന്നവയിൽ ഏതാണ് ഒരു **ഇൻലൈൻ സ്റ്റൈൽ** (inline style)?",
    "options": [
      { "text": "<h3 style=\"text-align:center;\">", "isCorrect": true },
      { "text": "<style>h3 { text-align: center; }</style>", "isCorrect": false },
      { "text": "<link rel=\"stylesheet\" href=\"style.css\">", "isCorrect": false },
      { "text": "<p class=\"center\">", "isCorrect": false }
    ]
  },
  {
    "question": "പ്രോപ്പർട്ടി `font-weight: bold;` എന്ത് ചെയ്യുന്നു?",
    "options": [
      { "text": "ഫോണ്ടിൻ്റെ വലിപ്പം വർദ്ധിപ്പിക്കുന്നു", "isCorrect": false },
      { "text": "ഫോണ്ടിനെ ഇറ്റാലിക് ആക്കുന്നു", "isCorrect": false },
      { "text": "ടെക്സ്റ്റിനെ **ബോൾഡ്** ആക്കുന്നു", "isCorrect": true },
      { "text": "ഫോണ്ടിൻ്റെ നിറം മാറ്റുന്നു", "isCorrect": false }
    ]
  },
  {
    "question": "ഏത് സ്റ്റൈൽ പ്രോപ്പർട്ടിയാണ് ടെക്സ്റ്റിനെ **മധ്യഭാഗത്തേക്ക്** (center) വിന്യസിക്കുന്നത്?",
    "options": [
      { "text": "text-align: center;", "isCorrect": true },
      { "text": "font-weight: center;", "isCorrect": false },
      { "text": "align: center;", "isCorrect": false },
      { "text": "text-style: center;", "isCorrect": false }
    ]
  },
  {
    "question": "HTML-ലെ `<style>` ടാഗിൻ്റെ ഉപയോഗം എന്താണ്?",
    "options": [
      { "text": "സ്ക്രിപ്റ്റുകൾ ചേർക്കുന്നു", "isCorrect": false },
      { "text": "മറ്റ് HTML പേജുകൾ ലിങ്ക് ചെയ്യുന്നു", "isCorrect": false },
      { "text": "ഇൻ്റേണൽ CSS സ്റ്റൈലുകൾ നിർവചിക്കുന്നു", "isCorrect": true },
      { "text": "ഒരു ചിത്രം പ്രദർശിപ്പിക്കുന്നു", "isCorrect": false }
    ]
  },
  {
    "question": "താഴെ പറയുന്നവയിൽ ഇൻലൈൻ സ്റ്റൈലുകളുടെ ഒരു **പരിമിതി അല്ലാത്തത്** ഏതാണ്?",
    "options": [
      { "text": "കോഡ് ആവർത്തിക്കുന്നു (Repetition of code)", "isCorrect": false },
      { "text": "ചെറിയ കോഡ് സൈസ്", "isCorrect": true },
      { "text": "പരിപാലിക്കാൻ പ്രയാസമാണ്", "isCorrect": false },
      { "text": "കോഡ് വലുതാകുന്നു (Code becomes lengthy)", "isCorrect": false }
    ]
  },
  {
    "question": "HTML ഡോക്യുമെൻ്റിൻ്റെ ഏത് ഭാഗത്താണ് ഇൻ്റേണൽ സ്റ്റൈലുകൾ എഴുതുന്നത്?",
    "options": [
      { "text": "<body>", "isCorrect": false },
      { "text": "<footer>", "isCorrect": false },
      { "text": "<head>", "isCorrect": true },
      { "text": "<div>", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു എക്സ്റ്റേണൽ സ്റ്റൈൽഷീറ്റ് (external stylesheet) ലിങ്ക് ചെയ്യുന്നതിനുള്ള ശരിയായ മാർഗ്ഗം ഏതാണ്?",
    "options": [
      { "text": "<script src=\"style.css\">", "isCorrect": false },
      { "text": "<link rel=\"stylesheet\" href=\"style.css\">", "isCorrect": true },
      { "text": "<a href=\"style.css\">", "isCorrect": false },
      { "text": "<css>style.css</css>", "isCorrect": false }
    ]
  },
  {
    "question": "HTML-ൽ `<style>` ടാഗ് ഉപയോഗിക്കുന്നതിൻ്റെ ഉദ്ദേശ്യം എന്താണ്?",
    "options": [
      { "text": "ചിത്രങ്ങൾ ചേർക്കാൻ", "isCorrect": false },
      { "text": "ഇൻ്റേണലായി CSS ചേർക്കാൻ", "isCorrect": true },
      { "text": "JavaScript ചേർക്കാൻ", "isCorrect": false },
      { "text": "ലിങ്കുകൾ സൃഷ്ടിക്കാൻ", "isCorrect": false }
    ]
  },
  {
    "question": "പ്രോപ്പർട്ടി `background-color` എന്താണ് നിർവചിക്കുന്നത്?",
    "options": [
      { "text": "ടെക്സ്റ്റ് വിന്യാസം", "isCorrect": false },
      { "text": "ഫോണ്ട് വലിപ്പം", "isCorrect": false },
      { "text": "ഒരു എലമെൻ്റിൻ്റെ **പശ്ചാത്തല നിറം**", "isCorrect": true },
      { "text": "ടെക്സ്റ്റ് നിറം", "isCorrect": false }
    ]
  },
  {
    "question": "ഇവയിൽ ഏതാണ് **ചുവപ്പ്** നിറത്തിനായുള്ള ശരിയായ CSS കളർ കോഡ്?",
    "options": [
      { "text": "#0000FF (നീല)", "isCorrect": false },
      { "text": "#FF0000", "isCorrect": true },
      { "text": "#00FF00 (പച്ച)", "isCorrect": false },
      { "text": "#FFFF00 (മഞ്ഞ)", "isCorrect": false }
    ]
  },
  {
    "question": "HTML-ൽ ഏത് സ്റ്റൈൽ തരംഗമാണ് **ഏറ്റവും ഉയർന്ന മുൻഗണന** (highest priority) എടുക്കുന്നത്?",
    "options": [
      { "text": "ഇൻ്റേണൽ (Internal)", "isCorrect": false },
      { "text": "എക്സ്റ്റേണൽ (External)", "isCorrect": false },
      { "text": "ഇൻലൈൻ (Inline)", "isCorrect": true },
      { "text": "ഒന്നുമില്ല", "isCorrect": false }
    ]
  },
  {
    "question": "താഴെ പറയുന്നവയിൽ ഏതാണ് ഒരു സ്റ്റൈൽ പ്രോപ്പർട്ടി?",
    "options": [
      { "text": "<style> (ടാഗ്)", "isCorrect": false },
      { "text": "font-style", "isCorrect": true },
      { "text": "head (ടാഗ്)", "isCorrect": false },
      { "text": "style-sheet", "isCorrect": false }
    ]
  },
  {
    "question": "`text-align: center;` ൻ്റെ ധർമ്മം എന്താണ്?",
    "options": [
      { "text": "ടെക്സ്റ്റിനെ വലത്തേക്ക് വിന്യസിക്കുന്നു", "isCorrect": false },
      { "text": "ടെക്സ്റ്റിനെ ഇടത്തേക്ക് വിന്യസിക്കുന്നു", "isCorrect": false },
      { "text": "ടെക്സ്റ്റിനെ **മധ്യഭാഗത്തേക്ക്** വിന്യസിക്കുന്നു", "isCorrect": true },
      { "text": "ടെക്സ്റ്റിനെ ബോൾഡ് ആക്കുന്നു", "isCorrect": false }
    ]
  },
  {
    "question": "ഇൻ്റേണൽ CSS-ൻ്റെ ഒരു നേട്ടം എന്താണ്?",
    "options": [
      { "text": "സ്റ്റൈലുകൾ ഒന്നിലധികം പേജുകളിൽ പ്രയോഗിക്കപ്പെടുന്നു", "isCorrect": false },
      { "text": "സ്റ്റൈലുകൾ ഒരു പ്രത്യേക ഫയലിലാണ് എഴുതുന്നത്", "isCorrect": false },
      { "text": "സ്റ്റൈലുകൾ ആവർത്തിക്കേണ്ട ആവശ്യമില്ല", "isCorrect": false },
      { "text": "സ്റ്റൈലുകൾ **അതേ ഫയലിൽ** പ്രയോഗിക്കപ്പെടുന്നു", "isCorrect": true }
    ]
  },
  {
    "question": "CSS-ൽ വലിപ്പം അളക്കാൻ ഉപയോഗിക്കുന്ന യൂണിറ്റ് ഏതാണ്?",
    "options": [
      { "text": "gm", "isCorrect": false },
      { "text": "ml", "isCorrect": false },
      { "text": "px (പിക്സൽ)", "isCorrect": true },
      { "text": "kg", "isCorrect": false }
    ]
  },
  {
    "question": "താഴെ പറയുന്നവയിൽ ഏതാണ് ഒരു സാധുവായ CSS അളവെടുപ്പ് യൂണിറ്റ്?",
    "options": [
      { "text": "meter", "isCorrect": false },
      { "text": "px", "isCorrect": true },
      { "text": "byte", "isCorrect": false },
      { "text": "rpm", "isCorrect": false }
    ]
  },
  {
    "question": "താഴെ പറയുന്നവയിൽ ഏതാണ് CSS-ലെ **കേവല അളവെടുപ്പ് യൂണിറ്റുകൾ** (absolute measurement units)?",
    "options": [
      { "text": "%, em (റിലേറ്റീവ്)", "isCorrect": false },
      { "text": "in, cm", "isCorrect": true },
      { "text": "vw, vh (റിലേറ്റീവ്)", "isCorrect": false },
      { "text": "rem, em (റിലേറ്റീവ്)", "isCorrect": false }
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
