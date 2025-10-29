document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "Which software is primarily used as the engine to create and manage large-scale collaborative websites like Wikipedia and SchoolWiki?",
    "options": [
      { "text": "WikiWikiWeb", "isCorrect": false },
      { "text": "MediaWiki", "isCorrect": true },
      { "text": "WikiEngine", "isCorrect": false },
      { "text": "WikiPlatform", "isCorrect": false }
    ]
  },
  {
    "question": "The term 'Wiki' is derived from a word in which language?",
    "options": [
      { "text": "Sanskrit", "isCorrect": false },
      { "text": "Swahili", "isCorrect": false },
      { "text": "Hawaiian", "isCorrect": true },
      { "text": "Latin", "isCorrect": false }
    ]
  },
  {
    "question": "What does the Hawaiian word 'WikiWiki', from which the term 'Wiki' is derived, mean?",
    "options": [
      { "text": "Fast", "isCorrect": false },
      { "text": "Quick", "isCorrect": true },
      { "text": "Collaborate", "isCorrect": false },
      { "text": "Knowledge", "isCorrect": false }
    ]
  },
  {
    "question": "Who is credited with creating the first wiki, known as 'WikiWikiWeb'?",
    "options": [
      { "text": "Stephen William Hawking", "isCorrect": false },
      { "text": "Jimmy Wales", "isCorrect": false },
      { "text": "Ward Cunningham", "isCorrect": true },
      { "text": "Ray Tomlinson", "isCorrect": false }
    ]
  },
  {
    "question": "In which year was the first wiki, 'WikiWikiWeb', created?",
    "options": [
      { "text": "1984", "isCorrect": false },
      { "text": "1991", "isCorrect": false },
      { "text": "1995", "isCorrect": true },
      { "text": "2001", "isCorrect": false }
    ]
  },
  {
    "question": "Which of the following is a feature of Wikipedia?",
    "options": [
      { "text": "Membership is mandatory for all edits.", "isCorrect": false },
      { "text": "It is monitored exclusively by the founders.", "isCorrect": false },
      { "text": "It is an encyclopedia created through collaborative effort.", "isCorrect": true },
      { "text": "Only original content written by authors is permitted.", "isCorrect": false }
    ]
  },
  {
    "question": "If a user makes an edit on Wikipedia without logging in, what is displayed on the platform?",
    "options": [
      { "text": "A temporary username.", "isCorrect": false },
      { "text": "The user's IP address.", "isCorrect": true },
      { "text": "An anonymous identifier.", "isCorrect": false },
      { "text": "The edit is automatically rejected.", "isCorrect": false }
    ]
  },
  {
    "question": "What is the primary aim of **SchoolWiki**?",
    "options": [
      { "text": "To digitize all student report cards.", "isCorrect": false },
      { "text": "To collect and share students' creative works and teachers' learning resources.", "isCorrect": true },
      { "text": "To provide a social media platform for teachers.", "isCorrect": false },
      { "text": "To host online exams for all classes.", "isCorrect": false }
    ]
  },
  {
    "question": "SchoolWiki is a school encyclopedia maintained by the collaboration of all schools in which state?",
    "options": [
      { "text": "Tamil Nadu", "isCorrect": false },
      { "text": "Kerala", "isCorrect": true },
      { "text": "Karnataka", "isCorrect": false },
      { "text": "Maharashtra", "isCorrect": false }
    ]
  },
  {
    "question": "What is mandatory for a user to add information and make corrections in SchoolWiki?",
    "options": [
      { "text": "A printed application form.", "isCorrect": false },
      { "text": "A digital signature.", "isCorrect": false },
      { "text": "Membership and an E-mail address.", "isCorrect": true },
      { "text": "A high-speed internet connection.", "isCorrect": false }
    ]
  },
  {
    "question": "What is the full form of **E-mail**?",
    "options": [
      { "text": "Executive Mail", "isCorrect": false },
      { "text": "Electronic Messenger", "isCorrect": false },
      { "text": "Encrypted Mail", "isCorrect": false },
      { "text": "Electronic Mail", "isCorrect": true }
    ]
  },
  {
    "question": "Who is known as the **father of email** for developing the first program for it?",
    "options": [
      { "text": "Bill Gates", "isCorrect": false },
      { "text": "Ray Tomlinson", "isCorrect": true },
      { "text": "Tim Berners-Lee", "isCorrect": false },
      { "text": "Vint Cerf", "isCorrect": false }
    ]
  },
  {
    "question": "The first form of e-mail was published in the late 1960s over which military/research network?",
    "options": [
      { "text": "NSFNET", "isCorrect": false },
      { "text": "Ethernet", "isCorrect": false },
      { "text": "ARPANET", "isCorrect": true },
      { "text": "Internet2", "isCorrect": false }
    ]
  },
  {
    "question": "What are the two main parts of an e-mail address, separated by the '@' symbol?",
    "options": [
      { "text": "First Name and Last Name", "isCorrect": false },
      { "text": "Username and Service Type", "isCorrect": false },
      { "text": "Username and Domain Name of the Service Provider", "isCorrect": true },
      { "text": "Protocol and Port Number", "isCorrect": false }
    ]
  },
  {
    "question": "What is an individual's e-mail address considered to be in the digital world?",
    "options": [
      { "text": "Their physical address.", "isCorrect": false },
      { "text": "Their bank account number.", "isCorrect": false },
      { "text": "Their digital identity.", "isCorrect": true },
      { "text": "Their mobile number.", "isCorrect": false }
    ]
  },
  {
    "question": "What is the purpose of **CAPTCHA**?",
    "options": [
      { "text": "To encrypt user passwords.", "isCorrect": false },
      { "text": "To verify if the user is a human.", "isCorrect": true },
      { "text": "To automatically fill online forms.", "isCorrect": false },
      { "text": "To increase website loading speed.", "isCorrect": false }
    ]
  },
  {
    "question": "What is the name of the dedicated practice page on SchoolWiki for students to practice wiki editing?",
    "options": [
      { "text": "Patasala", "isCorrect": false },
      { "text": "Ezhuthukalari", "isCorrect": true },
      { "text": "Kalavara", "isCorrect": false },
      { "text": "Thiruthuka", "isCorrect": false }
    ]
  },
  {
    "question": "What will happen to the content a student adds to their page in the **'Ezhuthukalari'**?",
    "options": [
      { "text": "It is immediately published on the main SchoolWiki.", "isCorrect": false },
      { "text": "It is visible only to the student and is for training purposes.", "isCorrect": true },
      { "text": "It is visible to all other students in 'Ezhuthukalari'.", "isCorrect": false },
      { "text": "It is deleted after 24 hours.", "isCorrect": false }
    ]
  },
  {
    "question": "If you are trying to register on SchoolWiki and your chosen username already exists, what is suggested as a solution?",
    "options": [
      { "text": "Try a different E-mail address.", "isCorrect": false },
      { "text": "Add a place name or house name to the username.", "isCorrect": true },
      { "text": "Use a generic number instead of a name.", "isCorrect": false },
      { "text": "Wait until the existing user deletes their account.", "isCorrect": false }
    ]
  },
  {
    "question": "Which option on a SchoolWiki page is used to start the process of editing the content of that page?",
    "options": [
      { "text": "'Vayikkuka' (Read)", "isCorrect": false },
      { "text": "'Thiruthuka' (Edit)", "isCorrect": true },
      { "text": "'Avaslambam' (Reference)", "isCorrect": false },
      { "text": "'Navigater' (Navigator)", "isCorrect": false }
    ]
  },
  {
    "question": "In the context of the Internet, what is a **MEME**?",
    "options": [
      { "text": "A type of network router.", "isCorrect": false },
      { "text": "A new web browser.", "isCorrect": false },
      { "text": "A cultural idea or image that goes viral.", "isCorrect": true },
      { "text": "A computer programming language.", "isCorrect": false }
    ]
  },
  {
    "question": "What is the general term for anything that spreads rapidly in cyberspace?",
    "options": [
      { "text": "Static", "isCorrect": false },
      { "text": "Viral", "isCorrect": true },
      { "text": "Encrypted", "isCorrect": false },
      { "text": "Spam", "isCorrect": false }
    ]
  },
  {
    "question": "Who is the renowned physicist quoted in the chapter regarding the dual nature of the Internet (good and evil)?",
    "options": [
      { "text": "Albert Einstein", "isCorrect": false },
      { "text": "Stephen William Hawking", "isCorrect": true },
      { "text": "Isaac Newton", "isCorrect": false },
      { "text": "Galileo Galilei", "isCorrect": false }
    ]
  },
  {
    "question": "What term is used for individuals who continuously commit misdeeds like deliberate editing to distort articles in Wikipedia?",
    "options": [
      { "text": "Wikipedia Moderators", "isCorrect": false },
      { "text": "Wikipedia Vandals", "isCorrect": true },
      { "text": "WikiEditors", "isCorrect": false },
      { "text": "Cyber Stalkers", "isCorrect": false }
    ]
  },
  {
    "question": "Which of the following is an example of a popular e-mail service provider mentioned in the chapter?",
    "options": [
      { "text": "SchoolWiki", "isCorrect": false },
      { "text": "Disrootmail", "isCorrect": true },
      { "text": "MediaWiki", "isCorrect": false },
      { "text": "LinkedIn", "isCorrect": false }
    ]
  },
  {
    "question": "What type of problem can a **CAPTCHA** often involve, besides scribbled letters or selecting pictures?",
    "options": [
      { "text": "Solving basic math problems.", "isCorrect": true },
      { "text": "Answering trivia questions.", "isCorrect": false },
      { "text": "Typing a short essay.", "isCorrect": false },
      { "text": "Drawing a simple image.", "isCorrect": false }
    ]
  },
  {
    "question": "A licensing approach that ensures users are free to use, modify, and distribute works is known as what?",
    "options": [
      { "text": "Copyright", "isCorrect": false },
      { "text": "Proprietary", "isCorrect": false },
      { "text": "Fair Use", "isCorrect": false },
      { "text": "Copyleft", "isCorrect": true }
    ]
  },
  {
    "question": "Which category of software does a 'screen reader', which assists visually impaired users, belong to?",
    "options": [
      { "text": "Virtual Assistant", "isCorrect": false },
      { "text": "Video Generation", "isCorrect": false },
      { "text": "Assistive Tool", "isCorrect": true },
      { "text": "Web Browser", "isCorrect": false }
    ]
  },
  {
    "question": "Which among the following is **not** a social media platform?",
    "options": [
      { "text": "Instagram", "isCorrect": false },
      { "text": "YouTube", "isCorrect": false },
      { "text": "SchoolWiki", "isCorrect": true },
      { "text": "WhatsApp", "isCorrect": false }
    ]
  },
  {
    "question": "Which cybercrime involves collecting personal information and threatening/blackmailing individuals through social media?",
    "options": [
      { "text": "Phishing", "isCorrect": false },
      { "text": "IoT Attacks", "isCorrect": false },
      { "text": "Cyber Stalking", "isCorrect": true },
      { "text": "Crypto Hacking", "isCorrect": false }
    ]
  },
  {
    "question": "What kind of resources prepared by teachers are shared on SchoolWiki?",
    "options": [
      { "text": "Evaluation checklists.", "isCorrect": false },
      { "text": "Learning resources.", "isCorrect": true },
      { "text": "Salary statements.", "isCorrect": false },
      { "text": "Attendance registers.", "isCorrect": false }
    ]
  },
  {
    "question": "The URL for accessing SchoolWiki is:",
    "options": [
      { "text": "http://schoolwiki.org", "isCorrect": false },
      { "text": "http://schoolwiki.com", "isCorrect": false },
      { "text": "http://schoolwiki.in", "isCorrect": true },
      { "text": "http://schoolwiki.net", "isCorrect": false }
    ]
  },
  {
    "question": "What is the name of the professional networking platform mentioned in the chapter for sharing information and connecting job seekers?",
    "options": [
      { "text": "Facebook", "isCorrect": false },
      { "text": "Twitter", "isCorrect": false },
      { "text": "LinkedIn", "isCorrect": true },
      { "text": "SchoolWiki", "isCorrect": false }
    ]
  },
  {
    "question": "In the e-mail address `gourykrishna@gmail.com`, what part represents the domain name of the service provider?",
    "options": [
      { "text": "gourykrishna", "isCorrect": false },
      { "text": "gmail.com", "isCorrect": true },
      { "text": "@", "isCorrect": false },
      { "text": "com", "isCorrect": false }
    ]
  },
  {
    "question": "What primary method is used by Wikipedia to maintain reliability against vandalism and misinformation?",
    "options": [
      { "text": "Automatic deletion of all new edits.", "isCorrect": false },
      { "text": "Monitored by volunteers passionate for knowledge exchange.", "isCorrect": true },
      { "text": "A permanent content lock on all pages.", "isCorrect": false },
      { "text": "AI-only content generation.", "isCorrect": false }
    ]
  },
  {
    "question": "What is the significance of the **'Moolaroopam thiruthuka'** option for editing in SchoolWiki?",
    "options": [
      { "text": "It is used for visual editing.", "isCorrect": false },
      { "text": "It is used to view the underlying code/markup for the page.", "isCorrect": true },
      { "text": "It is used to change the page layout.", "isCorrect": false },
      { "text": "It is used to upload new files.", "isCorrect": false }
    ]
  },
  {
    "question": "To add an image to a page in SchoolWiki, which icon in the formatting toolbar should you click?",
    "options": [
      { "text": "Headings", "isCorrect": false },
      { "text": "Special Characters", "isCorrect": false },
      { "text": "Chithrangalum Mediakalum (Images and Media)", "isCorrect": true },
      { "text": "Preview", "isCorrect": false }
    ]
  },
  {
    "question": "The phrase 'Anyone can edit and modify' is a core feature of which system?",
    "options": [
      { "text": "A proprietary software license.", "isCorrect": false },
      { "text": "A closed-source operating system.", "isCorrect": false },
      { "text": "A wiki/collaborative encyclopedia.", "isCorrect": true },
      { "text": "A standard e-mail service.", "isCorrect": false }
    ]
  },
  {
    "question": "What is the main goal of the robust governance system in Wikipedia, besides deleting incorrect content?",
    "options": [
      { "text": "To increase the subscription fees.", "isCorrect": false },
      { "text": "To sell advertising space.", "isCorrect": false },
      { "text": "To permanently ban those who commit misdeeds continuously.", "isCorrect": true },
      { "text": "To only accept edits from logged-in members.", "isCorrect": false }
    ]
  },
  {
    "question": "What does CAPTCHA prevent by verifying that the user is human?",
    "options": [
      { "text": "Slow internet speeds.", "isCorrect": false },
      { "text": "The creation of fake accounts using computer programs.", "isCorrect": true },
      { "text": "Sending of large e-mail attachments.", "isCorrect": false },
      { "text": "Unauthorized access to private networks.", "isCorrect": false }
    ]
  },
  {
    "question": "Which detail of a school is updated in SchoolWiki, besides the history and foundational information?",
    "options": [
      { "text": "Annual budget details.", "isCorrect": false },
      { "text": "Outstanding works from the State School Arts Festival.", "isCorrect": true },
      { "text": "The full list of parents' phone numbers.", "isCorrect": false },
      { "text": "Daily classroom schedules.", "isCorrect": false }
    ]
  },
  {
    "question": "What action is typically required immediately after creating a new membership for SchoolWiki?",
    "options": [
      { "text": "Submitting a passport size photo.", "isCorrect": false },
      { "text": "Verifying the account via the registered e-mail.", "isCorrect": true },
      { "text": "Paying a subscription fee.", "isCorrect": false },
      { "text": "Calling the SchoolWiki office.", "isCorrect": false }
    ]
  },
  {
    "question": "In an e-mail address, the username and domain name of the service provider are separated by which symbol?",
    "options": [
      { "text": "#", "isCorrect": false },
      { "text": "@", "isCorrect": true },
      { "text": "$", "isCorrect": false },
      { "text": "%", "isCorrect": false }
    ]
  },
  {
    "question": "The collective effort of those who seek goodness is the primary reason for what, according to the chapter's introduction?",
    "options": [
      { "text": "The existence of Copyleft.", "isCorrect": false },
      { "text": "The development of E-mail.", "isCorrect": false },
      { "text": "The progress humanity has achieved today.", "isCorrect": true },
      { "text": "The creation of Social Media.", "isCorrect": false }
    ]
  },
  {
    "question": "How can you navigate to a specific school's page on the SchoolWiki homepage?",
    "options": [
      { "text": "By clicking on a map.", "isCorrect": false },
      { "text": "By typing the school's name or code in the search box.", "isCorrect": true },
      { "text": "By scanning a QR code.", "isCorrect": false },
      { "text": "By using the 'Ezhuthukalari' link.", "isCorrect": false }
    ]
  },
  {
    "question": "What is one example of information that can be found on a school's page in SchoolWiki?",
    "options": [
      { "text": "The principal's home address.", "isCorrect": false },
      { "text": "The school's year of establishment.", "isCorrect": true },
      { "text": "The financial statements for the last ten years.", "isCorrect": false },
      { "text": "The daily menu of the school canteen.", "isCorrect": false }
    ]
  },
  {
    "question": "Which of the following is an example of an **Assistive Tool** that helps users with disabilities access digital content?",
    "options": [
      { "text": "A screen reader.", "isCorrect": true },
      { "text": "A standard spreadsheet program.", "isCorrect": false },
      { "text": "A video editing application.", "isCorrect": false },
      { "text": "A game engine.", "isCorrect": false }
    ]
  },
  {
    "question": "Which cyber crime is characterized by tricking victims into giving away sensitive information like passwords by disguising as a trustworthy entity?",
    "options": [
      { "text": "Phishing", "isCorrect": true },
      { "text": "Trolling", "isCorrect": false },
      { "text": "Cyber Stalking", "isCorrect": false },
      { "text": "Wiki Vandalism", "isCorrect": false }
    ]
  },
  {
    "question": "In the wiki editor, how can text be made **bold** using markup language?",
    "options": [
      { "text": "By surrounding the text with `**`.", "isCorrect": false },
      { "text": "By surrounding the text with `'''` (three apostrophes).", "isCorrect": true },
      { "text": "By surrounding the text with `<b>`.", "isCorrect": false },
      { "text": "By surrounding the text with `<u>`.", "isCorrect": false }
    ]
  },
  {
    "question": "In the wiki editor, how can text be made **italic** using markup language?",
    "options": [
      { "text": "By surrounding the text with `*`.", "isCorrect": false },
      { "text": "By surrounding the text with `//`.", "isCorrect": false },
      { "text": "By surrounding the text with `''` (two apostrophes).", "isCorrect": true },
      { "text": "By surrounding the text with `<i>`.", "isCorrect": false }
    ]
  },
  {
    "question": "What is the primary benefit of logging in with a membership to edit Wikipedia, as opposed to editing without logging in?",
    "options": [
      { "text": "It is considered a more desirable and accountable approach.", "isCorrect": true },
      { "text": "It is the only way to make any edits.", "isCorrect": false },
      { "text": "It allows the user to earn money for their contributions.", "isCorrect": false },
      { "text": "It hides the user's IP address from the administrators.", "isCorrect": false }
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
