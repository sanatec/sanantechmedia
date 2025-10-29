document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "What is listed as a primary advantage of a good presentation?",
    "options": [
      { "text": "Simple presentation of complex information", "isCorrect": true },
      { "text": "Using only text to ensure clarity", "isCorrect": false },
      { "text": "Making simple information seem more complex", "isCorrect": false },
      { "text": "Limiting communication to a single style", "isCorrect": false }
    ]
  },
  {
    "question": "Presentations allow for the systematic combination of what elements?",
    "options": [
      { "text": "Text, images, and audio/video", "isCorrect": true },
      { "text": "Text and charts only", "isCorrect": false },
      { "text": "Images and audio only", "isCorrect": false },
      { "text": "User comments and feedback", "isCorrect": false }
    ]
  },
  {
    "question": "What type of skill are presentation skills considered?",
    "options": [
      { "text": "A technical skill", "isCorrect": false },
      { "text": "A soft skill", "isCorrect": true },
      { "text": "A specialized field skill", "isCorrect": false },
      { "text": "A data entry skill", "isCorrect": false }
    ]
  },
  {
    "question": "How can an individual's presentation skills be enhanced and improved?",
    "options": [
      { "text": "By using complex software", "isCorrect": false },
      { "text": "Through continuous practice", "isCorrect": true },
      { "text": "By focusing only on technical skills", "isCorrect": false },
      { "text": "By using the default templates", "isCorrect": false }
    ]
  },
  {
    "question": "What is a necessary preparation step before creating a presentation?",
    "options": [
      { "text": "Collecting the required information, images, and videos", "isCorrect": true },
      { "text": "Choosing the final slide transition", "isCorrect": false },
      { "text": "Selecting the font color for the last slide", "isCorrect": false },
      { "text": "Animating the title on the first slide", "isCorrect": false }
    ]
  },
  {
    "question": "What technique can be used to list main ideas concisely on a slide?",
    "options": [
      { "text": "Writing long paragraphs", "isCorrect": false },
      { "text": "Using bullet list techniques", "isCorrect": true },
      { "text": "Inserting a master slide", "isCorrect": false },
      { "text": "Using the 'Arrange' tool", "isCorrect": false }
    ]
  },
  {
    "question": "What is the menu path to insert an image into a slide?",
    "options": [
      { "text": "Insert → Image", "isCorrect": true },
      { "text": "File → Open → Image", "isCorrect": false },
      { "text": "Format → Image", "isCorrect": false },
      { "text": "View → Image", "isCorrect": false }
    ]
  },
  {
    "question": "Which tool, often marked with an 'A', is used for inserting a textbox?",
    "options": [
      { "text": "The Shape tool", "isCorrect": false },
      { "text": "The Image tool", "isCorrect": false },
      { "text": "The Text Box tool", "isCorrect": true },
      { "text": "The Gallery tool", "isCorrect": false }
    ]
  },
  {
    "question": "What is the menu path to insert a Text Box?",
    "options": [
      { "text": "Insert → Textbox", "isCorrect": true },
      { "text": "File → New → Textbox", "isCorrect": false },
      { "text": "Format → Textbox", "isCorrect": false },
      { "text": "Slide → Textbox", "isCorrect": false }
    ]
  },
  {
    "question": "How do you add an animation effect to a selected text or object?",
    "options": [
      { "text": "Select 'Animation' from the sidebar and click the 'Add' button", "isCorrect": true },
      { "text": "Go to 'Insert → Animation'", "isCorrect": false },
      { "text": "Right-click the object and select 'Properties'", "isCorrect": false },
      { "text": "Drag the object to the 'Master Slides' pane", "isCorrect": false }
    ]
  },
  {
    "question": "What is the term for a template slide that defines the style for all other slides in a presentation?",
    "options": [
      { "text": "Main Slide", "isCorrect": false },
      { "text": "Master Slide", "isCorrect": true },
      { "text": "Parent Slide", "isCorrect": false },
      { "text": "Style Slide", "isCorrect": false }
    ]
  },
  {
    "question": "What is the primary benefit of using a master slide?",
    "options": [
      { "text": "It adds animation to all slides automatically", "isCorrect": false },
      { "text": "It helps give all slides the same style and uniformity", "isCorrect": true },
      { "text": "It inserts a different image on every slide", "isCorrect": false },
      { "text": "It checks the presentation for spelling errors", "isCorrect": false }
    ]
  },
  {
    "question": "If you change the font style on a master slide, what happens to the regular slides that use it?",
    "options": [
      { "text": "Nothing, slides must be changed individually", "isCorrect": false },
      { "text": "Only new slides will get the change", "isCorrect": false },
      { "text": "The change will be reflected in all other slides using that master", "isCorrect": true },
      { "text": "The original font style will be corrupted", "isCorrect": false }
    ]
  },
  {
    "question": "What is the main purpose of using Master Slides?",
    "options": [
      { "text": "To give each slide a different animation", "isCorrect": false },
      { "text": "To control navigation between slides", "isCorrect": false },
      { "text": "To define the overall layout and style for other slides", "isCorrect": true },
      { "text": "To give each slide a specific background color", "isCorrect": false }
    ]
  },
  {
    "question": "Can you create multiple, different master slide templates within one presentation?",
    "options": [
      { "text": "Yes, you can create multiple templates", "isCorrect": true },
      { "text": "No, only one master slide is allowed", "isCorrect": false },
      { "text": "Yes, but they must all share the same background", "isCorrect": false },
      { "text": "No, this feature is only for online platforms", "isCorrect": false }
    ]
  },
  {
    "question": "What happens to the existing content on a slide when you apply a master slide design to it?",
    "options": [
      { "text": "All the content on the slide will be deleted", "isCorrect": false },
      { "text": "The content will be formatted according to the new master slide's design", "isCorrect": true },
      { "text": "Only the images on the slide will be hidden", "isCorrect": false },
      { "text": "The master slide will be applied to a new blank slide instead", "isCorrect": false }
    ]
  },
  {
    "question": "How do you access the 'Master View' to edit a master slide?",
    "options": [
      { "text": "Click 'File → Master View'", "isCorrect": false },
      { "text": "Click 'Insert → Master View'", "isCorrect": false },
      { "text": "Click 'Master View' from the 'Slide bar Settings → Slide Properties'", "isCorrect": true },
      { "text": "Right-click a slide and select 'Edit Master'", "isCorrect": false }
    ]
  },
  {
    "question": "What pre-defined areas for content are typically available in the Master View?",
    "options": [
      { "text": "Only text levels", "isCorrect": false },
      { "text": "Text levels, Date & Time, Footer, and Slide Number", "isCorrect": true },
      { "text": "Only image and video placeholders", "isCorrect": false },
      { "text": "Only chart and table areas", "isCorrect": false }
    ]
  },
  {
    "question": "How do you exit the 'Master View' editing mode?",
    "options": [
      { "text": "Click the 'Close Master View' button", "isCorrect": true },
      { "text": "Press the 'Esc' key", "isCorrect": false },
      { "text": "Close and reopen the program", "isCorrect": false },
      { "text": "Save the file", "isCorrect": false }
    ]
  },
  {
    "question": "What should you do if the 'Close Master View' button is not visible?",
    "options": [
      { "text": "Restart the computer", "isCorrect": false },
      { "text": "Click anywhere outside the selected slide or object", "isCorrect": true },
      { "text": "Go to 'File → Exit View'", "isCorrect": false },
      { "text": "The button is always visible", "isCorrect": false }
    ]
  },
  {
    "question": "How can you rename a master slide from its default name?",
    "options": [
      { "text": "Go to 'Format → Rename'", "isCorrect": false },
      { "text": "The name cannot be changed", "isCorrect": false },
      { "text": "Double-click the slide in the Master View", "isCorrect": false },
      { "text": "Right-click the slide in the Slide Pane and select 'Rename Master'", "isCorrect": true }
    ]
  },
  {
    "question": "What option is used to remove a master slide you no longer need?",
    "options": [
      { "text": "Select the slide and press 'Delete'", "isCorrect": false },
      { "text": "Right-click the slide in the Slide Pane and select 'Delete Master'", "isCorrect": true },
      { "text": "Drag the slide to the trash bin", "isCorrect": false },
      { "text": "Go to 'Edit → Clear'", "isCorrect": false }
    ]
  },
  {
    "question": "How do you apply a specific master slide you created to a newly added slide?",
    "options": [
      { "text": "Click 'Slide → Change Slide Master' and select the desired design", "isCorrect": true },
      { "text": "Copy and paste the design from the master slide", "isCorrect": false },
      { "text": "It is applied automatically to all new slides", "isCorrect": false },
      { "text": "You must re-create the design on the new slide", "isCorrect": false }
    ]
  },
  {
    "question": "What is a key factor in designing readable and attractive slides?",
    "options": [
      { "text": "Using many different and bright colors", "isCorrect": false },
      { "text": "Choosing complementary colors and ensuring readability", "isCorrect": true },
      { "text": "Filling every empty space with an image or text", "isCorrect": false },
      { "text": "Using a different font for every slide", "isCorrect": false }
    ]
  },
  {
    "question": "What tools in Impress can be used to create beautiful and creative custom designs?",
    "options": [
      { "text": "The 'Shape' tools", "isCorrect": true },
      { "text": "The 'Spellcheck' tool", "isCorrect": false },
      { "text": "The 'Slide Number' field", "isCorrect": false },
      { "text": "The 'Footer' tool", "isCorrect": false }
    ]
  },
  {
    "question": "After inserting a shape, how do you change its fill color and line style?",
    "options": [
      { "text": "From the 'Animation' sidebar", "isCorrect": false },
      { "text": "By clicking on 'Area' and 'Line' from the 'Properties' window", "isCorrect": true },
      { "text": "By going to 'Insert → Color'", "isCorrect": false },
      { "text": "By right-clicking and selecting 'Master View'", "isCorrect": false }
    ]
  },
  {
    "question": "How do you resize a shape after it has been placed on the slide?",
    "options": [
      { "text": "Go to 'Format → Size'", "isCorrect": false },
      { "text": "Right-click and enter new dimensions", "isCorrect": false },
      { "text": "Click and drag the rectangular boxes that appear when it's selected", "isCorrect": true },
      { "text": "The size cannot be changed after placing", "isCorrect": false }
    ]
  },
  {
    "question": "What is the menu path to insert an automatic slide number on a slide?",
    "options": [
      { "text": "Insert → Field → Slide Number", "isCorrect": true },
      { "text": "Insert → Slide Number", "isCorrect": false },
      { "text": "Format → Page Number", "isCorrect": false },
      { "text": "Slide → Properties → Number", "isCorrect": false }
    ]
  },
  {
    "question": "Besides slide numbers, what other 'Fields' can be inserted from the same menu?",
    "options": [
      { "text": "Date (fixed or variable), Time, and Author", "isCorrect": true },
      { "text": "Images, Videos, and Audio", "isCorrect": false },
      { "text": "Animations and Transitions", "isCorrect": false },
      { "text": "Charts and Tables", "isCorrect": false }
    ]
  },
  {
    "question": "If a newly added image covers other slide elements, what tool should you use to fix it?",
    "options": [
      { "text": "The 'Crop' tool", "isCorrect": false },
      { "text": "The 'Arrange' tool", "isCorrect": true },
      { "text": "The 'Compress' tool", "isCorrect": false },
      { "text": "The 'Color' tool", "isCorrect": false }
    ]
  },
  {
    "question": "What 'Arrange' option would you use to place an image *behind* all other elements on the slide?",
    "options": [
      { "text": "Bring to Front", "isCorrect": false },
      { "text": "Bring Forward", "isCorrect": false },
      { "text": "Send to Back", "isCorrect": true },
      { "text": "In Front of Object", "isCorrect": false }
    ]
  },
  {
    "question": "What is the term for presenting complex information in an engaging way using images, charts, and minimal text?",
    "options": [
      { "text": "A Master Slide", "isCorrect": false },
      { "text": "An Infographic", "isCorrect": true },
      { "text": "A Text Box", "isCorrect": false },
      { "text": "An Animation", "isCorrect": false }
    ]
  },
  {
    "question": "What is a key benefit of using infographics?",
    "options": [
      { "text": "They allow complex ideas to be presented simply", "isCorrect": true },
      { "text": "They automatically add audio to the slide", "isCorrect": false },
      { "text": "They replace the need for a presenter", "isCorrect": false },
      { "text": "They can only be used on the first slide", "isCorrect": false }
    ]
  },
  {
    "question": "What feature in the Impress Sidebar can be used to find pre-made infographic templates?",
    "options": [
      { "text": "The 'Gallery'", "isCorrect": true },
      { "text": "The 'Properties' window", "isCorrect": false },
      { "text": "The 'Animation' tab", "isCorrect": false },
      { "text": "The 'Master Slides' pane", "isCorrect": false }
    ]
  },
  {
    "question": "Which category within the 'Gallery' contains templates for diagrams and infographics?",
    "options": [
      { "text": "Arrows", "isCorrect": false },
      { "text": "Bullets", "isCorrect": false },
      { "text": "Icons", "isCorrect": false },
      { "text": "Diagrams", "isCorrect": true }
    ]
  },
  {
    "question": "How do you add a diagram from the Gallery to your slide?",
    "options": [
      { "text": "Right-click the diagram and select 'Add to Slide'", "isCorrect": false },
      { "text": "Double-click the diagram", "isCorrect": false },
      { "text": "Click and drag the design from the Gallery to the slide", "isCorrect": true },
      { "text": "Go to 'File → Import → Gallery Item'", "isCorrect": false }
    ]
  },
  {
    "question": "How do you edit the placeholder text (e.g., 'Text') in a diagram from the Gallery?",
    "options": [
      { "text": "You must delete it and add a new text box", "isCorrect": false },
      { "text": "Right-click and select 'Edit Text'", "isCorrect": false },
      { "text": "Double-click on the text box", "isCorrect": true },
      { "text": "The text cannot be edited", "isCorrect": false }
    ]
  },
  {
    "question": "What kind of online platforms allow multiple people to create and edit a presentation at the same time?",
    "options": [
      { "text": "Collaborative platforms", "isCorrect": true },
      { "text": "Infographic galleries", "isCorrect": false },
      { "text": "AI generators", "isCorrect": false },
      { "text": "Master slide viewers", "isCorrect": false }
    ]
  },
  {
    "question": "What emerging technology is being used to create entire presentations, including content and design, within minutes?",
    "options": [
      { "text": "Artificial Intelligence (AI)", "isCorrect": true },
      { "text": "Collaborative platforms", "isCorrect": false },
      { "text": "Master slides", "isCorrect": false },
      { "text": "Infographics", "isCorrect": false }
    ]
  },
  {
    "question": "Which slide characteristic is *not* typically defined using a master slide?",
    "options": [
      { "text": "Background Colour", "isCorrect": false },
      { "text": "Font Size and Colour", "isCorrect": false },
      { "text": "Slide Transitions", "isCorrect": true },
      { "text": "Paragraph Style", "isCorrect": false }
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
