document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "What term is used for anything that spreads rapidly in cyberspace?",
    "options": [
      { "text": "Propaganda", "isCorrect": false },
      { "text": "Spam", "isCorrect": false },
      { "text": "Protocol", "isCorrect": false },
      { "text": "Viral", "isCorrect": true }
    ]
  },
  {
    "question": "What is a cultural idea or image that goes viral known as?",
    "options": [
      { "text": "Meme", "isCorrect": true },
      { "text": "GIF", "isCorrect": false },
      { "text": "Blog", "isCorrect": false },
      { "text": "Asset", "isCorrect": false }
    ]
  },
  {
    "question": "What was the name of the cat that became an Internet sensation, known as the 'Keyboard Cat'?",
    "options": [
      { "text": "Tiger", "isCorrect": false },
      { "text": "Fatspo", "isCorrect": true },
      { "text": "Moo Deng", "isCorrect": false },
      { "text": "Garfield", "isCorrect": false }
    ]
  },
  {
    "question": "Which animal, mentioned in the chapter for its viral success, is now part of a popular video game theme collection?",
    "options": [
      { "text": "Cat", "isCorrect": false },
      { "text": "Hippo (Moo Deng)", "isCorrect": true },
      { "text": "Rabbit", "isCorrect": false },
      { "text": "Bird", "isCorrect": false }
    ]
  },
  {
    "question": "What is the term for a massive network that connects billions of computers worldwide?",
    "options": [
      { "text": "LAN", "isCorrect": false },
      { "text": "WAN", "isCorrect": false },
      { "text": "Intranet", "isCorrect": false },
      { "text": "Internet", "isCorrect": true }
    ]
  },
  {
    "question": "The rivalry between two post-war nations that led to the genesis of the Internet is known by what name?",
    "options": [
      { "text": "World War I", "isCorrect": false },
      { "text": "Information War", "isCorrect": false },
      { "text": "Cold War", "isCorrect": true },
      { "text": "World War II", "isCorrect": false }
    ]
  },
  {
    "question": "What is considered the first public computer network?",
    "options": [
      { "text": "WWW", "isCorrect": false },
      { "text": "TCP/IP", "isCorrect": false },
      { "text": "Ethernet", "isCorrect": false },
      { "text": "ARPANET", "isCorrect": true }
    ]
  },
  {
    "question": "What is the full form of **ARPANET**?",
    "options": [
      { "text": "Advanced Resource Protocol Agency Network", "isCorrect": false },
      { "text": "American Research Portal Agency Network", "isCorrect": false },
      { "text": "Advanced Research Projects Agency Network", "isCorrect": true },
      { "text": "American Resource Protocol Access Network", "isCorrect": false }
    ]
  },
  {
    "question": "Who is the individual credited with putting forward the idea of the **World Wide Web (WWW)**?",
    "options": [
      { "text": "Vint Cerf", "isCorrect": false },
      { "text": "Ray Tomlinson", "isCorrect": false },
      { "text": "Bob Kahn", "isCorrect": false },
      { "text": "Tim Berners-Lee", "isCorrect": true }
    ]
  },
  {
    "question": "Who developed email (electronic mail)?",
    "options": [
      { "text": "Tim Berners-Lee", "isCorrect": false },
      { "text": "Ray Tomlinson", "isCorrect": true },
      { "text": "Bill Gates", "isCorrect": false },
      { "text": "Larry Page", "isCorrect": false }
    ]
  },
  {
    "question": "In which year was the first web browser, **Mosaic**, released?",
    "options": [
      { "text": "1989", "isCorrect": false },
      { "text": "1991", "isCorrect": false },
      { "text": "1993", "isCorrect": true },
      { "text": "1995", "isCorrect": false }
    ]
  },
  {
    "question": "The year in which the Internet started being used publicly in India is:",
    "options": [
      { "text": "1986", "isCorrect": false },
      { "text": "1995", "isCorrect": true },
      { "text": "1998", "isCorrect": false },
      { "text": "2000", "isCorrect": false }
    ]
  },
  {
    "question": "The year in which the **Information Technology Act (IT Act)** came into effect in India is:",
    "options": [
      { "text": "1995", "isCorrect": false },
      { "text": "1998", "isCorrect": false },
      { "text": "2000", "isCorrect": true },
      { "text": "2002", "isCorrect": false }
    ]
  },
  {
    "question": "The year in which the **Akshaya Project** was launched in Kerala is:",
    "options": [
      { "text": "2000", "isCorrect": false },
      { "text": "2002", "isCorrect": true },
      { "text": "2016", "isCorrect": false },
      { "text": "2021", "isCorrect": false }
    ]
  },
  {
    "question": "What system was launched by the Government of India in 2016 to facilitate payments using smartphones?",
    "options": [
      { "text": "IT Act", "isCorrect": false },
      { "text": "Digital Wallet", "isCorrect": false },
      { "text": "Unified Payment Interface (UPI)", "isCorrect": true },
      { "text": "eSIM", "isCorrect": false }
    ]
  },
  {
    "question": "Which project was launched by the Government of Kerala in 2021 to declare Internet access as a citizen's right?",
    "options": [
      { "text": "Digital Kerala", "isCorrect": false },
      { "text": "Akshaya 2.0", "isCorrect": false },
      { "text": "K Phone", "isCorrect": true },
      { "text": "Connect Kerala", "isCorrect": false }
    ]
  },
  {
    "question": "Tools like ChatGPT, Gemini, and Deepseek are revolutionizing the Internet because they are based on which technology?",
    "options": [
      { "text": "5G", "isCorrect": false },
      { "text": "Cloud Computing", "isCorrect": false },
      { "text": "Artificial Intelligence (AI)", "isCorrect": true },
      { "text": "IoT", "isCorrect": false }
    ]
  },
  {
    "question": "What is each device (computer, smartphone) connected in a computer network called?",
    "options": [
      { "text": "Server", "isCorrect": false },
      { "text": "Client", "isCorrect": false },
      { "text": "Hub", "isCorrect": false },
      { "text": "Node", "isCorrect": true }
    ]
  },
  {
    "question": "What are the specific rules and technologies used to communicate and share files/resources between nodes called?",
    "options": [
      { "text": "Firewall", "isCorrect": false },
      { "text": "Network Protocol", "isCorrect": true },
      { "text": "IP Address", "isCorrect": false },
      { "text": "Modem", "isCorrect": false }
    ]
  },
  {
    "question": "The process that helps search engines understand the user's objective by analyzing the search terms is called:",
    "options": [
      { "text": "Search Snipet", "isCorrect": false },
      { "text": "Intent Recognition", "isCorrect": true },
      { "text": "Web Crawling", "isCorrect": false },
      { "text": "Clustering", "isCorrect": false }
    ]
  },
  {
    "question": "Content that is compiled from various websites and displayed as the first result based on the search query is known as:",
    "options": [
      { "text": "Search Snippets", "isCorrect": true },
      { "text": "Hyperlinks", "isCorrect": false },
      { "text": "Web Pages", "isCorrect": false },
      { "text": "Search Queries", "isCorrect": false }
    ]
  },
  {
    "question": "Which symbol is used before a search term to **exclude** (take out) pages containing that specific word from the search results?",
    "options": [
      { "text": "AND", "isCorrect": false },
      { "text": "OR", "isCorrect": false },
      { "text": "-", "isCorrect": true },
      { "text": "\"" , "isCorrect": false }
    ]
  },
  {
    "question": "Why is the search phrase entered in **quotation marks (“”)**?",
    "options": [
      { "text": "To ignore spelling mistakes of the words", "isCorrect": false },
      { "text": "To include only pages containing the exact phrase", "isCorrect": true },
      { "text": "To search for images only", "isCorrect": false },
      { "text": "To speed up the search", "isCorrect": false }
    ]
  },
  {
    "question": "What is the legal right that defines the usage rights of published materials like images, videos, and software on the Internet?",
    "options": [
      { "text": "Content Authority", "isCorrect": false },
      { "text": "Digital Rights", "isCorrect": false },
      { "text": "Intellectual Property Rights", "isCorrect": true },
      { "text": "Internet Security", "isCorrect": false }
    ]
  },
  {
    "question": "Which right provides legal protection to the creator's work and grants the **right to distribute and reproduce to the owner only**?",
    "options": [
      { "text": "Copyleft", "isCorrect": false },
      { "text": "Fair Use", "isCorrect": false },
      { "text": "Proprietary", "isCorrect": false },
      { "text": "Copyright", "isCorrect": true }
    ]
  },
  {
    "question": "**All Rights Reserved** is a statement indicating what?",
    "options": [
      { "text": "Fair Use right", "isCorrect": false },
      { "text": "Copyleft right", "isCorrect": false },
      { "text": "Various usage rights", "isCorrect": false },
      { "text": "Full Copyright", "isCorrect": true }
    ]
  },
  {
    "question": "Which licensing approach grants users the **freedom to use, modify, and distribute works for free**?",
    "options": [
      { "text": "Proprietary", "isCorrect": false },
      { "text": "Copyright", "isCorrect": false },
      { "text": "Fair Use", "isCorrect": false },
      { "text": "Copyleft", "isCorrect": true }
    ]
  },
  {
    "question": "What is a major principle of the Open Source Movement?",
    "options": [
      { "text": "Copyright", "isCorrect": false },
      { "text": "Proprietary", "isCorrect": false },
      { "text": "Creative Commons", "isCorrect": false },
      { "text": "Copyleft", "isCorrect": true }
    ]
  },
  {
    "question": "Which license allows creators to permit free use and distribution of their work, but **mandates attribution and restricts commercial use**?",
    "options": [
      { "text": "Copyleft", "isCorrect": false },
      { "text": "Proprietary", "isCorrect": false },
      { "text": "Creative Commons License", "isCorrect": true },
      { "text": "Trade Mark", "isCorrect": false }
    ]
  },
  {
    "question": "What right allows limited use of copyrighted materials for **educational, critical, or research** purposes, subject to legal restrictions?",
    "options": [
      { "text": "Creative Commons", "isCorrect": false },
      { "text": "Fair Use", "isCorrect": true },
      { "text": "Copyleft", "isCorrect": false },
      { "text": "Public Domain", "isCorrect": false }
    ]
  },
  {
    "question": "Under which law is **viewing and sharing a pirated version** of a copyrighted movie a punishable offense?",
    "options": [
      { "text": "IT Act", "isCorrect": false },
      { "text": "Cyber Crime Act", "isCorrect": false },
      { "text": "Copyright Law", "isCorrect": true },
      { "text": "Trademark Law", "isCorrect": false }
    ]
  },
  {
    "question": "When searching for an image on major search engines like Google, which tool option is used to check its **licensing**?",
    "options": [
      { "text": "Settings", "isCorrect": false },
      { "text": "Image Type", "isCorrect": false },
      { "text": "Usage Rights", "isCorrect": true },
      { "text": "Advanced Search", "isCorrect": false }
    ]
  },
  {
    "question": "The **Web 1.0** generation in the evolution of the web is known by what name?",
    "options": [
      { "text": "Interactive Web", "isCorrect": false },
      { "text": "Semantic Web", "isCorrect": false },
      { "text": "Intelligent Web", "isCorrect": false },
      { "text": "Static Web", "isCorrect": true }
    ]
  },
  {
    "question": "What was the main characteristic of **Web 1.0** websites?",
    "options": [
      { "text": "User-generated content", "isCorrect": false },
      { "text": "Limited Interaction", "isCorrect": true },
      { "text": "AI-based services", "isCorrect": false },
      { "text": "Metaverse", "isCorrect": false }
    ]
  },
  {
    "question": "The rise of dynamic websites, user-created content, and social media are characteristics of which web generation?",
    "options": [
      { "text": "Web 1.0", "isCorrect": false },
      { "text": "Web 2.0", "isCorrect": true },
      { "text": "Web 3.0", "isCorrect": false },
      { "text": "Web 4.0", "isCorrect": false }
    ]
  },
  {
    "question": "**Web 3.0** is known as which phase in the evolution of the web?",
    "options": [
      { "text": "Static Web", "isCorrect": false },
      { "text": "Interactive Web", "isCorrect": false },
      { "text": "Semantic Web", "isCorrect": true },
      { "text": "Intelligent Web", "isCorrect": false }
    ]
  },
  {
    "question": "Which generation in the evolution of the web emphasizes Virtual Reality, Augmented Reality, IoT, and the Metaverse?",
    "options": [
      { "text": "Web 1.0", "isCorrect": false },
      { "text": "Web 2.0", "isCorrect": false },
      { "text": "Web 3.0", "isCorrect": false },
      { "text": "Web 4.0", "isCorrect": true }
    ]
  },
  {
    "question": "What is the system where the digital SIM card is built directly into the device?",
    "options": [
      { "text": "OTG", "isCorrect": false },
      { "text": "IoT", "isCorrect": false },
      { "text": "LAN", "isCorrect": false },
      { "text": "eSIM", "isCorrect": true }
    ]
  },
  {
    "question": "Which generation of mobile technology primarily focused on **voice calls, SMS, and MMS**?",
    "options": [
      { "text": "1G", "isCorrect": false },
      { "text": "2G", "isCorrect": true },
      { "text": "3G", "isCorrect": false },
      { "text": "4G", "isCorrect": false }
    ]
  },
  {
    "question": "Which generation of mobile technology saw an increase in data speed for mobile internet?",
    "options": [
      { "text": "2G", "isCorrect": false },
      { "text": "3G", "isCorrect": true },
      { "text": "4G", "isCorrect": false },
      { "text": "5G", "isCorrect": false }
    ]
  },
  {
    "question": "Which generation of mobile technology provides high-speed data for HD video streaming and online gaming?",
    "options": [
      { "text": "3G", "isCorrect": false },
      { "text": "4G", "isCorrect": true },
      { "text": "5G", "isCorrect": false },
      { "text": "6G", "isCorrect": false }
    ]
  },
  {
    "question": "The mobile technology generation associated with supporting the Internet of Things (IoT), autonomous vehicles, and AR/VR applications is:",
    "options": [
      { "text": "2G", "isCorrect": false },
      { "text": "3G", "isCorrect": false },
      { "text": "4G", "isCorrect": false },
      { "text": "5G", "isCorrect": true }
    ]
  },
  {
    "question": "What category of software reads out the text on the screen aloud for users with visual impairments?",
    "options": [
      { "text": "Screen Magnifier", "isCorrect": false },
      { "text": "Sub title tools", "isCorrect": false },
      { "text": "Screen Reader", "isCorrect": true },
      { "text": "Virtual Assistant", "isCorrect": false }
    ]
  },
  {
    "question": "**Orca, JAWS, and NVDA** are examples of which type of Assistive Tools?",
    "options": [
      { "text": "Screen Magnifier", "isCorrect": false },
      { "text": "Real-Time Translators", "isCorrect": false },
      { "text": "Screen Reader", "isCorrect": true },
      { "text": "Subtitle Tools", "isCorrect": false }
    ]
  },
  {
    "question": "What software is used to enlarge text and images on the screen for better visibility?",
    "options": [
      { "text": "Virtual Assistant", "isCorrect": false },
      { "text": "Screen Magnifier", "isCorrect": true },
      { "text": "Screen Reader", "isCorrect": false },
      { "text": "Real-Time Transcriber", "isCorrect": false }
    ]
  },
  {
    "question": "Which systems provide captions (subtitles) for audio content to assist users with hearing impairments?",
    "options": [
      { "text": "Screen Reader", "isCorrect": false },
      { "text": "Subtitle Tools", "isCorrect": true },
      { "text": "Screen Magnifier", "isCorrect": false },
      { "text": "Virtual Assistant", "isCorrect": false }
    ]
  },
  {
    "question": "Which tools help to translate and transcribe (write down) speech or text in real-time?",
    "options": [
      { "text": "Descriptive Video Services (DVS)", "isCorrect": false },
      { "text": "Real-Time Translators and Transcribers", "isCorrect": true },
      { "text": "Subtitle Tools", "isCorrect": false },
      { "text": "Screen Reader", "isCorrect": false }
    ]
  },
  {
    "question": "What is the software that operates on Artificial Intelligence (AI) and performs tasks like setting alarms, making calls to specific numbers, and providing news?",
    "options": [
      { "text": "Assistive Tool", "isCorrect": false },
      { "text": "Network Protocol", "isCorrect": false },
      { "text": "Virtual Assistant", "isCorrect": true },
      { "text": "Search Snippet", "isCorrect": false }
    ]
  },
  {
    "question": "**Amazon Alexa, Apple Siri, and Google Assistant** fall into which category?",
    "options": [
      { "text": "Screen Readers", "isCorrect": false },
      { "text": "Operating Systems", "isCorrect": false },
      { "text": "Virtual Assistants", "isCorrect": true },
      { "text": "Web Browsers", "isCorrect": false }
    ]
  },
  {
    "question": "Which precaution is primarily mentioned in the chapter for the safe use of the Internet?",
    "options": [
      { "text": "Always use the same password", "isCorrect": false },
      { "text": "Blindly believe everything you see online", "isCorrect": false },
      { "text": "Share passwords and OTPs with others", "isCorrect": false },
      { "text": "Use social media with utmost caution", "isCorrect": true }
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
