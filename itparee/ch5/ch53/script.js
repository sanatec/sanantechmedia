document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "ഒരു സ്റ്റൈൽ നിർദ്ദേശത്തിൻ്റെ (style instruction) ഘടന എന്താണ്?",
    "options": [
      { "text": "selector, color, property", "isCorrect": false },
      { "text": "property: value;", "isCorrect": true },
      { "text": "color - value", "isCorrect": false },
      { "text": "tag.value:property", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു ടാഗിന് ഇൻലൈനായി (inline) പലതവണ സ്റ്റൈൽ ചെയ്താൽ എന്ത് സംഭവിക്കും?",
    "options": [
      { "text": "പേജ് വേഗത്തിൽ ലോഡ് ചെയ്യുന്നു", "isCorrect": false },
      { "text": "**കോഡ് സൈസ് വർദ്ധിക്കുന്നു**", "isCorrect": true },
      { "text": "കോഡ് വൃത്തിയുള്ളതാകുന്നു", "isCorrect": false },
      { "text": "ഒന്നും മാറുന്നില്ല", "isCorrect": false }
    ]
  },
  {
    "question": "ഇൻലൈൻ സ്റ്റൈലുകൾ ഒഴിവാക്കുന്നതിനുള്ള ഒരു കാരണം **അല്ലാത്തത്** ഏതാണ്?",
    "options": [
      { "text": "കോഡ് സങ്കീർണ്ണമാകുന്നു", "isCorrect": false },
      { "text": "സ്റ്റൈലുകൾ ആവർത്തിക്കുന്നു", "isCorrect": false },
      { "text": "**പരിപാലനം എളുപ്പമാക്കുന്നു** (ഇൻലൈൻ സ്റ്റൈലുകൾ പരിപാലിക്കാൻ ബുദ്ധിമുട്ടാണ്, അതിനാൽ ഇത് ഒഴിവാക്കാൻ കാരണമാവില്ല)", "isCorrect": true },
      { "text": "വലിയ കോഡ് സൈസ്", "isCorrect": false }
    ]
  },
  {
    "question": "CSS-ലെ ഒരു സെലക്ടർ (selector) എന്താണ്?",
    "options": [
      { "text": "ഒരു സ്റ്റൈൽ ടാഗ്", "isCorrect": false },
      { "text": "ഒരു HTML ആട്രിബ്യൂട്ട്", "isCorrect": false },
      { "text": "സ്റ്റൈലുകൾ പ്രയോഗിക്കുന്ന ഒരു എലമെൻ്റ്", "isCorrect": true },
      { "text": "ഒരു സ്ക്രിപ്റ്റ് ഫംഗ്ഷൻ", "isCorrect": false }
    ]
  },
  {
    "question": "ഇൻലൈൻ സ്റ്റൈൽ ഉപയോഗിച്ച് ഒരു പാരഗ്രാഫ് പശ്ചാത്തലം ഇളം നീലയാക്കുന്നത് (light blue) താഴെ പറയുന്നവയിൽ ഏതാണ്?",
    "options": [
      { "text": "<p style=\"background-color: lightblue;\">", "isCorrect": true },
      { "text": "<p bg=\"lightblue\">", "isCorrect": false },
      { "text": "<p color=\"blue\">", "isCorrect": false },
      { "text": "<p style=\"color: lightblue;\">", "isCorrect": false }
    ]
  },
  {
    "question": "ഇൻ്റേണൽ CSS, HTML-ൽ എവിടെയാണ് എഴുതുന്നത്?",
    "options": [
      { "text": "<style> ടാഗിനുള്ളിൽ <head> ഭാഗത്ത്", "isCorrect": true },
      { "text": "<div> ഉപയോഗിച്ച് <body> ഭാഗത്ത്", "isCorrect": false },
      { "text": "ഒരു എക്സ്റ്റേണൽ ഫയലിൽ", "isCorrect": false },
      { "text": "ഫൂട്ടറിൽ", "isCorrect": false }
    ]
  },
  {
    "question": "CSS-ലെ ക്ലാസ് സെലക്ടറുകളുടെ (class selectors) ഉദ്ദേശ്യം എന്താണ്?",
    "options": [
      { "text": "JavaScript-ൽ സ്റ്റൈൽ പ്രയോഗിക്കാൻ", "isCorrect": false },
      { "text": "പാരഗ്രാഫുകളെ ഗ്രൂപ്പുചെയ്യാൻ", "isCorrect": false },
      { "text": "ഒരേ ക്ലാസ് ഉള്ള പ്രത്യേക എലമെൻ്റുകൾക്ക് സ്റ്റൈലുകൾ പ്രയോഗിക്കാൻ", "isCorrect": true },
      { "text": "ചിത്രങ്ങൾ ചേർക്കാൻ", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു ക്ലാസ് സെലക്ടറിൻ്റെ ഫോർമാറ്റ് എന്താണ്?",
    "options": [
      { "text": "#class {}", "isCorrect": false },
      { "text": "class {}", "isCorrect": false },
      { "text": ".class {}", "isCorrect": true },
      { "text": "@class {}", "isCorrect": false }
    ]
  },
  {
    "question": "ഇൻ്റേണൽ CSS-ൻ്റെ ഒരു ശരിയായ ഉദാഹരണം ഏതാണ്?",
    "options": [
      { "text": "<style> p { color: red; } </style>", "isCorrect": true },
      { "text": "<p style=\"color: red;\">", "isCorrect": false },
      { "text": "<link href=\"style.css\">", "isCorrect": false },
      { "text": "style=\"color:red;\"", "isCorrect": false }
    ]
  },
  {
    "question": "CSS എന്തിലൂടെയാണ് സ്റ്റൈലുകളുടെ പുനരുപയോഗക്ഷമത (reusability) അനുവദിക്കുന്നത്?",
    "options": [
      { "text": "JavaScript", "isCorrect": false },
      { "text": "Tags", "isCorrect": false },
      { "text": "സ്റ്റൈൽഷീറ്റുകൾ (Stylesheets)", "isCorrect": true },
      { "text": "IDs മാത്രം", "isCorrect": false }
    ]
  },
  {
    "question": "ഇൻലൈൻ CSS ഏത് ആട്രിബ്യൂട്ട് ഉപയോഗിച്ചാണ് എഴുതുന്നത്?",
    "options": [
      { "text": "style", "isCorrect": true },
      { "text": "css", "isCorrect": false },
      { "text": "font", "isCorrect": false },
      { "text": "link", "isCorrect": false }
    ]
  },
  {
    "question": "നിരവധി പേജുകളുള്ള വലിയ വെബ്സൈറ്റുകൾക്കായി സ്റ്റൈലിംഗിൻ്റെ ഏത് രീതിയാണ് ഉപയോഗിക്കേണ്ടത്?",
    "options": [
      { "text": "ഇൻലൈൻ CSS", "isCorrect": false },
      { "text": "ഇൻ്റേണൽ CSS", "isCorrect": false },
      { "text": "എക്സ്റ്റേണൽ CSS", "isCorrect": true },
      { "text": "HTML സ്റ്റൈലിംഗ്", "isCorrect": false }
    ]
  },
  {
    "question": "എക്സ്റ്റേണൽ CSS-ൻ്റെ പ്രയോജനം എന്താണ്?",
    "options": [
      { "text": "കൂടുതൽ വരി കോഡ്", "isCorrect": false },
      { "text": "കോഡ് തനിപ്പകർപ്പ്", "isCorrect": false },
      { "text": "**ഒരൊറ്റ മാറ്റം എല്ലാ പേജുകളെയും ബാധിക്കുന്നു**", "isCorrect": true },
      { "text": "ഓരോ ടാഗിനും എഴുതണം", "isCorrect": false }
    ]
  },
  {
    "question": "ഇൻലൈൻ സ്റ്റൈൽ ഉപയോഗിച്ച് ടെക്സ്റ്റിന് **ചുവപ്പ് നിറം** പ്രയോഗിക്കുന്നതിനുള്ള സിൻ്റാക്സ്:",
    "options": [
      { "text": "<p style=\"color:red;\">", "isCorrect": true },
      { "text": "<p style: color=red>", "isCorrect": false },
      { "text": "<p color:red>", "isCorrect": false },
      { "text": "<p font-color=\"red\">", "isCorrect": false }
    ]
  },
  {
    "question": "CSS-ൻ്റെ ഏത് ഭാഗമാണ് ചുരുളൻ ബ്രേസുകൾക്ക് (curly braces) {} ഉള്ളിൽ ഉൾപ്പെടുത്തിയിരിക്കുന്നത്?",
    "options": [
      { "text": "സെലക്ടർ", "isCorrect": false },
      { "text": "പ്രോപ്പർട്ടി", "isCorrect": false },
      { "text": "ഡിക്ലറേഷൻ ബ്ലോക്ക് (Declaration block)", "isCorrect": true },
      { "text": "ടാഗ്", "isCorrect": false }
    ]
  },
  {
    "question": "താഴെ പറയുന്നവയിൽ CSS പ്രോപ്പർട്ടി **അല്ലാത്തത്** ഏതാണ്?",
    "options": [
      { "text": "color", "isCorrect": false },
      { "text": "background-color", "isCorrect": false },
      { "text": "text-align", "isCorrect": false },
      { "text": "paragraph", "isCorrect": true }
    ]
  },
  {
    "question": "CSS-ൽ `font-size`-ൻ്റെ ഉപയോഗം എന്താണ്?",
    "options": [
      { "text": "നിറം മാറ്റുന്നു", "isCorrect": false },
      { "text": "ടെക്സ്റ്റ് വിന്യാസം സജ്ജമാക്കുന്നു", "isCorrect": false },
      { "text": "ഫോണ്ടിൻ്റെ വലിപ്പം സജ്ജമാക്കുന്നു", "isCorrect": true },
      { "text": "പശ്ചാത്തലം മാറ്റുന്നു", "isCorrect": false }
    ]
  },
  {
    "question": "`font-size`-ൻ്റെ ഡിഫോൾട്ട് യൂണിറ്റ് ഏതാണ്?",
    "options": [
      { "text": "em", "isCorrect": false },
      { "text": "px (പിക്സൽ)", "isCorrect": true },
      { "text": "cm", "isCorrect": false },
      { "text": "%", "isCorrect": false }
    ]
  },
  {
    "question": "CSS-ൽ കമൻ്റ് (comment) ചെയ്യുന്നതിനുള്ള ശരിയായ മാർഗ്ഗം ഏതാണ്?",
    "options": [
      { "text": "<-- comment -->", "isCorrect": false },
      { "text": "// comment", "isCorrect": false },
      { "text": "/* comment */", "isCorrect": true },
      { "text": "# comment", "isCorrect": false }
    ]
  },
  {
    "question": "എല്ലാ `<h1>` എലമെൻ്റുകളിലും സ്റ്റൈലുകൾ എങ്ങനെ പ്രയോഗിക്കാം?",
    "options": [
      { "text": "h1 {}", "isCorrect": true },
      { "text": "<h1> {}", "isCorrect": false },
      { "text": "style(h1)", "isCorrect": false },
      { "text": "h1:style {}", "isCorrect": false }
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
