document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "What is the primary purpose of a 'server' in the context of webpages?",
    "options": [
      {"text": "To create images and animations for a website.", "isCorrect": false},
      {"text": "To store webpage files and send them when requested.", "isCorrect": true},
      {"text": "To convert HTML code into text on a user's screen.", "isCorrect": false},
      {"text": "To design the layout and font of a webpage.", "isCorrect": false}
    ]
  },
  {
    "question": "Which software is specifically designed to access and display webpages from the internet?",
    "options": [
      {"text": "A Text Editor", "isCorrect": false},
      {"text": "A Web Browser", "isCorrect": true},
      {"text": "An Image Editor", "isCorrect": false},
      {"text": "A Server", "isCorrect": false}
    ]
  },
  {
    "question": "What does the 'https' part of 'https://www.schoolwiki.in' represent?",
    "options": [
      {"text": "The domain name of the website.", "isCorrect": false},
      {"text": "The name of the server.", "isCorrect": false},
      {"text": "The indication of how to access the webpage.", "isCorrect": true},
      {"text": "The name of the HTML file being accessed.", "isCorrect": false}
    ]
  },
  {
    "question": "What is the name of the markup language used to give browsers instructions on how to display webpage content?",
    "options": [
      {"text": "GIMP", "isCorrect": false},
      {"text": "Firefox", "isCorrect": false},
      {"text": "URL", "isCorrect": false},
      {"text": "HTML", "isCorrect": true}
    ]
  },
  {
    "question": "Who is the computer scientist credited with inventing the HTML markup language?",
    "options": [
      {"text": "Sir Timothy John Berners-Lee", "isCorrect": true},
      {"text": "Bill Gates", "isCorrect": false},
      {"text": "Steve Jobs", "isCorrect": false},
      {"text": "Linus Torvalds", "isCorrect": false}
    ]
  },
  {
    "question": "In HTML, what characters are used to write tags?",
    "options": [
      {"text": "Square brackets [ ]", "isCorrect": false},
      {"text": "Curly braces { }", "isCorrect": false},
      {"text": "Parentheses ( )", "isCorrect": false},
      {"text": "Angle brackets < >", "isCorrect": true}
    ]
  },
  {
    "question": "What does an HTML element typically consist of?",
    "options": [
      {"text": "A server and a browser.", "isCorrect": false},
      {"text": "A URL and a domain name.", "isCorrect": false},
      {"text": "A tag and the content enclosed within it.", "isCorrect": true},
      {"text": "An image and a text file.", "isCorrect": false}
    ]
  },
  {
    "question": "Which HTML tag is the container for all other HTML elements on a page?",
    "options": [
      {"text": "<body>", "isCorrect": false},
      {"text": "<html>", "isCorrect": true},
      {"text": "<head>", "isCorrect": false},
      {"text": "<title>", "isCorrect": false}
    ]
  },
  {
    "question": "If you want to include content that is visible to the user on the webpage, inside which tag should it be placed?",
    "options": [
      {"text": "<head>", "isCorrect": false},
      {"text": "<title>", "isCorrect": false},
      {"text": "<html>", "isCorrect": false},
      {"text": "<body>", "isCorrect": true}
    ]
  },
  {
    "question": "What is the purpose of the <head> tag in an HTML document?",
    "options": [
      {"text": "To display the main heading of the page.", "isCorrect": false},
      {"text": "To include information and metadata about the page.", "isCorrect": true},
      {"text": "To contain all the visible images, text, and paragraphs.", "isCorrect": false},
      {"text": "To define the start and end of the webpage.", "isCorrect": false}
    ]
  },
  {
    "question": "The text you put inside the <title> tag appears in what part of the web browser?",
    "options": [
      {"text": "As the main heading on the page.", "isCorrect": false},
      {"text": "In the browser's title bar or tab.", "isCorrect": true},
      {"text": "At the very bottom of the webpage.", "isCorrect": false},
      {"text": "It does not appear anywhere.", "isCorrect": false}
    ]
  },
  {
    "question": "What is the correct tag for adding the largest, most important heading to a page?",
    "options": [
      {"text": "<h1>", "isCorrect": true},
      {"text": "<h6>", "isCorrect": false},
      {"text": "<head>", "isCorrect": false},
      {"text": "<p>", "isCorrect": false}
    ]
  },
  {
    "question": "Which tag would you use to organize content into a simple paragraph?",
    "options": [
      {"text": "<body>", "isCorrect": false},
      {"text": "<br>", "isCorrect": false},
      {"text": "<p>", "isCorrect": true},
      {"text": "<h1>", "isCorrect": false}
    ]
  },
  {
    "question": "What is 'metadata'?",
    "options": [
      {"text": "The main content of the webpage.", "isCorrect": false},
      {"text": "Data about data, like the details of a file.", "isCorrect": true},
      {"text": "A type of web browser.", "isCorrect": false},
      {"text": "An HTML tag for images.", "isCorrect": false}
    ]
  },
  {
    "question": "To save a new webpage you created in a text editor, what file extension should you use?",
    "options": [
      {"text": ".txt", "isCorrect": false},
      {"text": ".doc", "isCorrect": false},
      {"text": ".html", "isCorrect": true},
      {"text": ".png", "isCorrect": false}
    ]
  },
  {
    "question": "If you want to edit the code of an existing HTML file, how should you open it?",
    "options": [
      {"text": "Double-click it to open in the browser.", "isCorrect": false},
      {"text": "Right-click and open it with a Text Editor.", "isCorrect": true},
      {"text": "Right-click and select 'View Page Source'.", "isCorrect": false},
      {"text": "You must upload it to a server first.", "isCorrect": false}
    ]
  },
  {
    "question": "Which heading tag produces the smallest text size?",
    "options": [
      {"text": "<h1>", "isCorrect": false},
      {"text": "<h3>", "isCorrect": false},
      {"text": "<h6>", "isCorrect": true},
      {"text": "<h2>", "isCorrect": false}
    ]
  },
  {
    "question": "What is an 'attribute' in HTML?",
    "options": [
      {"text": "The text content inside a tag.", "isCorrect": false},
      {"text": "Instructions given within an opening tag for additional settings.", "isCorrect": true},
      {"text": "A standalone tag like <br>.", "isCorrect": false},
      {"text": "The name of the web browser.", "isCorrect": false}
    ]
  },
  {
    "question": "You want to set the background color of your entire webpage to red. Which line of code is correct?",
    "options": [
      {"text": "<head bgcolor=\"red\">", "isCorrect": false},
      {"text": "<html color=\"red\">", "isCorrect": false},
      {"text": "<body bgcolor=\"red\">", "isCorrect": true},
      {"text": "<background>red</background>", "isCorrect": false}
    ]
  },
  {
    "question": "What is a 'hexadecimal color code'?",
    "options": [
      {"text": "A code that represents a combination of red, green, and blue.", "isCorrect": true},
      {"text": "A code used to create paragraphs.", "isCorrect": false},
      {"text": "The file name of an image.", "isCorrect": false},
      {"text": "An attribute for setting font size.", "isCorrect": false}
    ]
  },
  {
    "question": "Which HTML tag is used to insert an image into a webpage?",
    "options": [
      {"text": "<image>", "isCorrect": false},
      {"text": "<picture>", "isCorrect": false},
      {"text": "<src>", "isCorrect": false},
      {"text": "<img>", "isCorrect": true}
    ]
  },
  {
    "question": "In the tag <img src=\"juice.png\">, what does the 'src' attribute do?",
    "options": [
      {"text": "It specifies the name and location of the image file.", "isCorrect": true},
      {"text": "It sets the height of the image.", "isCorrect": false},
      {"text": "It sets the width of the image.", "isCorrect": false},
      {"text": "It makes the image a link.", "isCorrect": false}
    ]
  },
  {
    "question": "You have an image tag: <img src=\"apple.png\" height=\"100\" width=\"150\">. To change the image to 'orange.png', what must you modify?",
    "options": [
      {"text": "The value of the 'height' attribute.", "isCorrect": false},
      {"text": "The value of the 'src' attribute.", "isCorrect": true},
      {"text": "The tag name from <img> to <orange>.", "isCorrect": false},
      {"text": "The value of the 'width' attribute.", "isCorrect": false}
    ]
  },
  {
    "question": "If your image 'juice.png' is not displaying on the webpage, what is a likely reason?",
    "options": [
      {"text": "The image file is not in the same folder as the HTML file.", "isCorrect": true},
      {"text": "You used <h1> instead of <h2> for your heading.", "isCorrect": false},
      {"text": "The <title> tag is empty.", "isCorrect": false},
      {"text": "You did not set a background color.", "isCorrect": false}
    ]
  },
  {
    "question": "How do you make the text 'Welcome' appear in bold?",
    "options": [
      {"text": "<i>Welcome</i>", "isCorrect": false},
      {"text": "<u>Welcome</u>", "isCorrect": false},
      {"text": "<b>Welcome</b>", "isCorrect": true},
      {"text": "<br>Welcome</br>", "isCorrect": false}
    ]
  },
  {
    "question": "You are typing a paragraph and want to force a line break to start a new line without starting a new paragraph. Which tag do you use?",
    "options": [
      {"text": "<p>", "isCorrect": false},
      {"text": "<br>", "isCorrect": true},
      {"text": "<new>", "isCorrect": false},
      {"text": "<b>", "isCorrect": false}
    ]
  },
  {
    "question": "Which tag is used to make text appear in italics?",
    "options": [
      {"text": "<b>", "isCorrect": false},
      {"text": "<u>", "isCorrect": false},
      {"text": "<i>", "isCorrect": true},
      {"text": "<font>", "isCorrect": false}
    ]
  },
  {
    "question": "If you want to underline the text 'Food Fest', which HTML is correct?",
    "options": [
      {"text": "<i>Food Fest</i>", "isCorrect": false},
      {"text": "<u>Food Fest</u>", "isCorrect": true},
      {"text": "<b>Food Fest</b>", "isCorrect": false},
      {"text": "<font>Food Fest</font>", "isCorrect": false}
    ]
  },
  {
    "question": "To change the font face of text to 'Ubuntu', which attribute of the <font> tag would you use?",
    "options": [
      {"text": "color", "isCorrect": false},
      {"text": "size", "isCorrect": false},
      {"text": "face", "isCorrect": true},
      {"text": "src", "isCorrect": false}
    ]
  },
  {
    "question": "What is the correct way to set the text 'Hello' to be red using the <font> tag?",
    "options": [
      {"text": "<font face=\"red\">Hello</font>", "isCorrect": false},
      {"text": "<font size=\"red\">Hello</font>", "isCorrect": false},
      {"text": "<font color=\"red\">Hello</font>", "isCorrect": true},
      {"text": "<red>Hello</red>", "isCorrect": false}
    ]
  },
  {
    "question": "Which tag is used to begin the definition of a table?",
    "options": [
      {"text": "<table>", "isCorrect": true},
      {"text": "<tr>", "isCorrect": false},
      {"text": "<td>", "isCorrect": false},
      {"text": "<caption>", "isCorrect": false}
    ]
  },
  {
    "question": "Inside a table, which tag is used to define a single row?",
    "options": [
      {"text": "<td>", "isCorrect": false},
      {"text": "<th>", "isCorrect": false},
      {"text": "<tr>", "isCorrect": true},
      {"text": "<table>", "isCorrect": false}
    ]
  },
  {
    "question": "What is the purpose of the <td> tag in an HTML table?",
    "options": [
      {"text": "To define a table header cell.", "isCorrect": false},
      {"text": "To define a table data cell.", "isCorrect": true},
      {"text": "To define a table row.", "isCorrect": false},
      {"text": "To set the table border.", "isCorrect": false}
    ]
  },
  {
    "question": "What is the difference between the <th> and <td> tags?",
    "options": [
      {"text": "<th> defines a row, <td> defines a column.", "isCorrect": false},
      {"text": "<th> is for text, <td> is for images.", "isCorrect": false},
      {"text": "<th> defines a table header cell, <td> defines a regular data cell.", "isCorrect": true},
      {"text": "There is no difference, they do the same thing.", "isCorrect": false}
    ]
  },
  {
    "question": "How would you add a border with a thickness of '2' to a table?",
    "options": [
      {"text": "<table border=2>", "isCorrect": true},
      {"text": "<table line=2>", "isCorrect": false},
      {"text": "<table><border>2</border></table>", "isCorrect": false},
      {"text": "<table data-border=\"2\">", "isCorrect": false}
    ]
  },
  {
    "question": "Which tag is used to add a title or caption directly associated with a table?",
    "options": [
      {"text": "<title>", "isCorrect": false},
      {"text": "<th>", "isCorrect": false},
      {"text": "<h1>", "isCorrect": false},
      {"text": "<caption>", "isCorrect": true}
    ]
  },
  {
    "question": "Which tag is used to include a video file in a webpage?",
    "options": [
      {"text": "<media>", "isCorrect": false},
      {"text": "<mp4>", "isCorrect": false},
      {"text": "<video>", "isCorrect": true},
      {"text": "<source>", "isCorrect": false}
    ]
  },
  {
    "question": "Inside the <video> tag, what is the purpose of the nested <source> tag?",
    "options": [
      {"text": "To set the height and width of the video player.", "isCorrect": false},
      {"text": "To add playback controls like play and pause.", "isCorrect": false},
      {"text": "To specify the video file path and its type.", "isCorrect": true},
      {"text": "To add a caption to the video.", "isCorrect": false}
    ]
  },
  {
    "question": "Which attribute, when added to the <video> tag, provides user controls like play, pause, and volume?",
    "options": [
      {"text": "src", "isCorrect": false},
      {"text": "controls", "isCorrect": true},
      {"text": "type", "isCorrect": false},
      {"text": "play", "isCorrect": false}
    ]
  },
  {
    "question": "What is the correct basic HTML structure for a webpage?",
    "options": [
      {"text": "<body><head>...</head><html>...</html></body>", "isCorrect": false},
      {"text": "<html><head><title>...</title></head><body>...</body></html>", "isCorrect": true},
      {"text": "<head><title>...</title></head><body>...</body>", "isCorrect": false},
      {"text": "<html><body><head>...</head></body></html>", "isCorrect": false}
    ]
  },
  {
    "question": "A web browser's primary function is to...?",
    "options": [
      {"text": "Store files on a server.", "isCorrect": false},
      {"text": "Read HTML instructions and display the content.", "isCorrect": true},
      {"text": "Create images and text for websites.", "isCorrect": false},
      {"text": "Edit the HTML source code of a page.", "isCorrect": false}
    ]
  },
  {
    "question": "What does URL stand for?",
    "options": [
      {"text": "Universal Resource Link", "isCorrect": false},
      {"text": "Uniform Resource Locator", "isCorrect": true},
      {"text": "Unique Resource Link", "isCorrect": false},
      {"text": "Unified Resource Locator", "isCorrect": false}
    ]
  },
  {
    "question": "Which of these is listed as an example of a web browser?",
    "options": [
      {"text": "HTML", "isCorrect": false},
      {"text": "Text Editor", "isCorrect": false},
      {"text": "Google Chrome", "isCorrect": true},
      {"text": "Server", "isCorrect": false}
    ]
  },
  {
    "question": "What is the correct HTML to create a table with one row and two data cells containing 'Item1' and 'Item2'?",
    "options": [
      {"text": "<table><tr><td>Item1</td><td>Item2</td></tr></table>", "isCorrect": true},
      {"text": "<table><row><cell>Item1</cell><cell>Item2</cell></row></table>", "isCorrect": false},
      {"text": "<table><td><tr>Item1</tr><tr>Item2</tr></td></table>", "isCorrect": false},
      {"text": "<tr><table><td>Item1</td><td>Item2</td></table></tr>", "isCorrect": false}
    ]
  },
  {
    "question": "How would you correctly insert an image named 'logo.png' that is 100 pixels wide and 50 pixels high?",
    "options": [
      {"text": "<img src=\"logo.png\" size=\"100, 50\">", "isCorrect": false},
      {"text": "<img file=\"logo.png\" width=\"100\" height=\"50\">", "isCorrect": false},
      {"text": "<img>logo.png, 100, 50</img>", "isCorrect": false},
      {"text": "<img src=\"logo.png\" width=\"100\" height=\"50\">", "isCorrect": true}
    ]
  },
  {
    "question": "You want to add a main heading 'Welcome!' and a paragraph 'This is my site.' to your page. What is the correct HTML for the body?",
    "options": [
      {"text": "<body><p>Welcome!</p><h1>This is my site.</h1></body>", "isCorrect": false},
      {"text": "<body><h1>Welcome!</h1><p>This is my site.</p></body>", "isCorrect": true},
      {"text": "<head><h1>Welcome!</h1><p>This is my site.</p></head>", "isCorrect": false},
      {"text": "<body><title>Welcome!</title><p>This is my site.</p></body>", "isCorrect": false}
    ]
  },
  {
    "question": "What is the purpose of a closing tag like </html>?",
    "options": [
      {"text": "To indicate the beginning of the HTML element.", "isCorrect": false},
      {"text": "To indicate the end of the HTML element.", "isCorrect": true},
      {"text": "To add attributes to the element.", "isCorrect": false},
      {"text": "To create a link to another page.", "isCorrect": false}
    ]
  },
  {
    "question": "If you use the tag <body bgcolor=\"#0000ff\">, what color will the background be?",
    "options": [
      {"text": "Red", "isCorrect": false},
      {"text": "Green", "isCorrect": false},
      {"text": "Blue", "isCorrect": true},
      {"text": "Black", "isCorrect": false}
    ]
  },
  {
    "question": "In a table, what is the typical visual difference between content in a <th> tag and a <td> tag?",
    "options": [
      {"text": "<th> content is usually bold and centered.", "isCorrect": true},
      {"text": "<td> content is usually larger.", "isCorrect": false},
      {"text": "<th> content is always in italics.", "isCorrect": false},
      {"text": "<td> content is always underlined.", "isCorrect": false}
    ]
  },
  {
    "question": "How would you add a video named 'intro.mp4' that shows playback controls?",
    "options": [
      {"text": "<video src=\"intro.mp4\"></video>", "isCorrect": false},
      {"text": "<video controls><source src=\"intro.mp4\" type=\"video/mp4\"></video>", "isCorrect": true},
      {"text": "<video src=\"intro.mp4\" controls=\"false\"></video>", "isCorrect": false},
      {"text": "<source src=\"intro.mp4\" controls></source>", "isCorrect": false}
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
