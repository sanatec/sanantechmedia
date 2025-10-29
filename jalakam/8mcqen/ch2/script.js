document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "Which menu path in LibreOffice Writer is used to insert a **Header**?",
    "options": [
      { "text": "Format → Header and Footer → Header", "isCorrect": false },
      { "text": "Insert → Header and Footer → Header", "isCorrect": true },
      { "text": "Tools → Header → Default Page Style", "isCorrect": false },
      { "text": "View → Header and Footer → Header", "isCorrect": false }
    ]
  },
  {
    "question": "The spacing between the text and the border of a paragraph is adjusted by setting values in which section of the Borders tab?",
    "options": [
      { "text": "Line Arrangement", "isCorrect": false },
      { "text": "Shadow Style", "isCorrect": false },
      { "text": "Padding", "isCorrect": true },
      { "text": "Presets", "isCorrect": false }
    ]
  },
  {
    "question": "What is the key advantage of exporting a document to **PDF** format?",
    "options": [
      { "text": "It significantly reduces the file size.", "isCorrect": false },
      { "text": "It allows easy editing by anyone.", "isCorrect": false },
      { "text": "It ensures the layout and fonts remain unchanged when opened or printed on another computer.", "isCorrect": true },
      { "text": "It automatically uploads the document to an online platform.", "isCorrect": false }
    ]
  },
  {
    "question": "Which word processor feature is used to repeat content, such as a page number, at the **bottom** of every page?",
    "options": [
      { "text": "Text Box", "isCorrect": false },
      { "text": "Header", "isCorrect": false },
      { "text": "Footer", "isCorrect": true },
      { "text": "First Line Indent", "isCorrect": false }
    ]
  },
  {
    "question": "Which keyboard shortcut is used for the 'To Save' action in the word processor?",
    "options": [
      { "text": "Ctrl+A", "isCorrect": false },
      { "text": "Ctrl+P", "isCorrect": false },
      { "text": "Ctrl+S", "isCorrect": true },
      { "text": "Ctrl+C", "isCorrect": false }
    ]
  },
  {
    "question": "Which Indent option is used to set the spacing between the **first line** of a paragraph and the margin, independently of the other lines?",
    "options": [
      { "text": "Before Text Indent", "isCorrect": false },
      { "text": "After Text Indent", "isCorrect": false },
      { "text": "First Line Indent", "isCorrect": true },
      { "text": "Padding", "isCorrect": false }
    ]
  },
  {
    "question": "When adjusting paragraph spacing by clicking the 'Increase Paragraph Spacing' tool, what is the default distance set between paragraphs?",
    "options": [
      { "text": "0.05 cm", "isCorrect": false },
      { "text": "0.10 cm", "isCorrect": true },
      { "text": "0.25 cm", "isCorrect": false },
      { "text": "1.15", "isCorrect": false }
    ]
  },
  {
    "question": "What happens when you perform a **triple-click** on a word in the word processor?",
    "options": [
      { "text": "The entire word is selected.", "isCorrect": false },
      { "text": "The entire sentence is selected.", "isCorrect": false },
      { "text": "The entire paragraph is selected.", "isCorrect": true },
      { "text": "The entire document is selected.", "isCorrect": false }
    ]
  },
  {
    "question": "Which keyboard shortcut is used for the 'To Select All' action listed in the document?",
    "options": [
      { "text": "Ctrl+X", "isCorrect": false },
      { "text": "Ctrl+S", "isCorrect": false },
      { "text": "Ctrl+A", "isCorrect": true },
      { "text": "Ctrl+V", "isCorrect": false }
    ]
  },
  {
    "question": "To add a background colour to a paragraph, which tab in the Format → Paragraph window should you use?",
    "options": [
      { "text": "Borders", "isCorrect": false },
      { "text": "Text Flow", "isCorrect": false },
      { "text": "Area", "isCorrect": true },
      { "text": "Indents & Spacing", "isCorrect": false }
    ]
  },
  {
    "question": "Which menu path is given for checking the **Print Preview** of the document?",
    "options": [
      { "text": "File → Print", "isCorrect": false },
      { "text": "View → Layout", "isCorrect": false },
      { "text": "File → Print Preview", "isCorrect": true },
      { "text": "View → Print Setup", "isCorrect": false }
    ]
  },
  {
    "question": "Which option under the Header tab must be **unchecked** to set different headers/footers for the left and right pages?",
    "options": [
      { "text": "Merge with next paragraph", "isCorrect": false },
      { "text": "Synchronize", "isCorrect": false },
      { "text": "Same content on Left and Right Pages", "isCorrect": true },
      { "text": "Repeat heading rows on new pages", "isCorrect": false }
    ]
  },
  {
    "question": "What is the function of the 'Toggle Unordered List' tool?",
    "options": [
      { "text": "To create a numbered list", "isCorrect": false },
      { "text": "To format selected content as a bulleted list", "isCorrect": true },
      { "text": "To adjust the line spacing of a list", "isCorrect": false },
      { "text": "To add a border around a list", "isCorrect": false }
    ]
  },
  {
    "question": "Which of these is a listed Table Style in the 'Insert Table' window?",
    "options": [
      { "text": "Simple Grid", "isCorrect": false },
      { "text": "Elegant", "isCorrect": true },
      { "text": "Classic", "isCorrect": false },
      { "text": "Financial", "isCorrect": false }
    ]
  },
  {
    "question": "To add a new keyboard language (Input Source), the user is instructed to first open which section of the computer's settings?",
    "options": [
      { "text": "Settings → Appearance", "isCorrect": false },
      { "text": "Settings → Sound", "isCorrect": false },
      { "text": "Settings → Keyboard", "isCorrect": true },
      { "text": "Settings → Applications", "isCorrect": false }
    ]
  },
  {
    "question": "To adjust the column width of a table using the mouse, the pointer changes to what symbol when moved to the intersection of two columns?",
    "options": [
      { "text": "A hand icon", "isCorrect": false },
      { "text": "A single-headed arrow", "isCorrect": false },
      { "text": "A double-headed arrow", "isCorrect": true },
      { "text": "An I-beam cursor", "isCorrect": false }
    ]
  },
  {
    "question": "Which table formatting tool is used to center the text between the **top and bottom** of the cell?",
    "options": [
      { "text": "Merge Cells", "isCorrect": false },
      { "text": "Center Horizontally", "isCorrect": false },
      { "text": "Center Vertically", "isCorrect": true },
      { "text": "Align Center", "isCorrect": false }
    ]
  },
  {
    "question": "What is the menu path to make the **Table Toolbar** visible in LibreOffice Writer?",
    "options": [
      { "text": "Tools → Customize → Toolbar → Table", "isCorrect": false },
      { "text": "Format → Table → Show Toolbar", "isCorrect": false },
      { "text": "View → Toolbar → Table", "isCorrect": true },
      { "text": "Insert → Table → Show Tools", "isCorrect": false }
    ]
  },
  {
    "question": "Which option in the 'Insert Table' window ensures that the column titles are repeated on subsequent pages if the table extends beyond one page?",
    "options": [
      { "text": "Don't split table over pages", "isCorrect": false },
      { "text": "Repeat heading rows on new pages", "isCorrect": true },
      { "text": "Use caption", "isCorrect": false },
      { "text": "Table Styles", "isCorrect": false }
    ]
  },
  {
    "question": "Which of the following is an online platform listed for performing word processor tasks?",
    "options": [
      { "text": "Adobe Acrobat", "isCorrect": false },
      { "text": "Dropbox Paper", "isCorrect": true },
      { "text": "Evernote", "isCorrect": false },
      { "text": "Slack", "isCorrect": false }
    ]
  },
  {
    "question": "The setting that controls the spacing of the **entire paragraph** from the left margin is called:",
    "options": [
      { "text": "First Line Indent", "isCorrect": false },
      { "text": "After Text Indent", "isCorrect": false },
      { "text": "Padding", "isCorrect": false },
      { "text": "Before Text Indent", "isCorrect": true }
    ]
  },
  {
    "question": "What is the recommended Line Spacing value that a user is asked to set to observe changes in the document?",
    "options": [
      { "text": "1.00", "isCorrect": false },
      { "text": "1.15", "isCorrect": true },
      { "text": "1.50", "isCorrect": false },
      { "text": "0.10 cm", "isCorrect": false }
    ]
  },
  {
    "question": "To change the font name and size of text, both these settings are adjusted in which section of the Properties window?",
    "options": [
      { "text": "Paragraph", "isCorrect": false },
      { "text": "Spacing", "isCorrect": false },
      { "text": "Character", "isCorrect": true },
      { "text": "Style", "isCorrect": false }
    ]
  },
  {
    "question": "Which keyboard shortcut is used for the 'To Copy' action, according to the document?",
    "options": [
      { "text": "Ctrl+A", "isCorrect": false },
      { "text": "Ctrl+X", "isCorrect": false },
      { "text": "Ctrl+V", "isCorrect": false },
      { "text": "Ctrl+C", "isCorrect": true }
    ]
  },
  {
    "question": "When configuring paragraph borders, what must be unchecked to allow different 'Padding' values for all four sides?",
    "options": [
      { "text": "Line Arrangement", "isCorrect": false },
      { "text": "User-defined", "isCorrect": false },
      { "text": "Synchronize", "isCorrect": true },
      { "text": "Presets", "isCorrect": false }
    ]
  },
  {
    "question": "Which table formatting tool is used to insert a new row **above** the selected cell or row?",
    "options": [
      { "text": "Columns Before", "isCorrect": false },
      { "text": "Rows Below", "isCorrect": false },
      { "text": "Rows Above", "isCorrect": true },
      { "text": "Merge Cells", "isCorrect": false }
    ]
  },
  {
    "question": "The process of setting the spacing between lines and paragraphs in a document is broadly referred to as:",
    "options": [
      { "text": "Pagination", "isCorrect": false },
      { "text": "Line Arrangement", "isCorrect": false },
      { "text": "Indents & Spacing", "isCorrect": true },
      { "text": "Area Formatting", "isCorrect": false }
    ]
  },
  {
    "question": "What is the purpose of the 'Toggle Ordered List' tool?",
    "options": [
      { "text": "To create a bulleted list.", "isCorrect": false },
      { "text": "To insert a table.", "isCorrect": false },
      { "text": "To format content as a numbered or lettered list.", "isCorrect": true },
      { "text": "To change the font style.", "isCorrect": false }
    ]
  },
  {
    "question": "Which of these is a step mentioned for adding the Hindi keyboard input source?",
    "options": [
      { "text": "Selecting English (United States) layout.", "isCorrect": false },
      { "text": "Clicking 'More' and then selecting 'Indian'.", "isCorrect": true },
      { "text": "Selecting Malayalam Inscript.", "isCorrect": false },
      { "text": "Selecting 'English (India, with rupees)'.", "isCorrect": false }
    ]
  },
  {
    "question": "The tool for applying a background colour to a cell in a table is named:",
    "options": [
      { "text": "Select Character Highlighting Color", "isCorrect": false },
      { "text": "Table Cell Background Color", "isCorrect": true },
      { "text": "Background Color (Paragraph Tab)", "isCorrect": false },
      { "text": "Line Arrangement Color", "isCorrect": false }
    ]
  },
  {
    "question": "Which keyboard shortcut is used for the 'To Paste' action listed in the document?",
    "options": [
      { "text": "Ctrl+C", "isCorrect": false },
      { "text": "Ctrl+X", "isCorrect": false },
      { "text": "Ctrl+V", "isCorrect": true },
      { "text": "Ctrl+S", "isCorrect": false }
    ]
  },
  {
    "question": "What is the path to insert a **Page Number** into a document?",
    "options": [
      { "text": "Format → Field → Page Number", "isCorrect": false },
      { "text": "Insert → Field → Page Number", "isCorrect": true },
      { "text": "Tools → Page Numbering", "isCorrect": false },
      { "text": "View → Page Number", "isCorrect": false }
    ]
  },
  {
    "question": "In the Borders settings, what option controls whether the border lines are all the same style (line type, colour, thickness)?",
    "options": [
      { "text": "Padding", "isCorrect": false },
      { "text": "Shadow Style", "isCorrect": false },
      { "text": "Line Arrangement", "isCorrect": true },
      { "text": "Synchronize", "isCorrect": false }
    ]
  },
  {
    "question": "Which word processing software is listed for 'learning typing scientifically'?",
    "options": [
      { "text": "LibreOffice Writer", "isCorrect": false },
      { "text": "Google Docs", "isCorrect": false },
      { "text": "Tux Typing", "isCorrect": true },
      { "text": "Microsoft Word", "isCorrect": false }
    ]
  },
  {
    "question": "Which Malayalam font is explicitly mentioned for testing purposes in the document?",
    "options": [
      { "text": "Karthika", "isCorrect": false },
      { "text": "Anek Malayalam", "isCorrect": true },
      { "text": "Rachana", "isCorrect": false },
      { "text": "Manjari", "isCorrect": false }
    ]
  },
  {
    "question": "The term used for setting the distance of the paragraph from the **left** and **right** margins is generally known as:",
    "options": [
      { "text": "Line Spacing", "isCorrect": false },
      { "text": "Padding", "isCorrect": false },
      { "text": "Indenting", "isCorrect": true },
      { "text": "Area Formatting", "isCorrect": false }
    ]
  },
  {
    "question": "What is the key purpose of **formatting** a document in a word processor?",
    "options": [
      { "text": "To reduce the file size.", "isCorrect": false },
      { "text": "To change the language.", "isCorrect": false },
      { "text": "To make the document more attractive and readable.", "isCorrect": true },
      { "text": "To insert images only.", "isCorrect": false }
    ]
  },
  {
    "question": "If a user wants to select a single **word** using the mouse, what action should they perform while the cursor is over the word?",
    "options": [
      { "text": "Single-click", "isCorrect": false },
      { "text": "Double-click", "isCorrect": true },
      { "text": "Triple-click", "isCorrect": false },
      { "text": "Ctrl+click", "isCorrect": false }
    ]
  },
  {
    "question": "Which of these is a listed Table Formatting Tool used to combine two or more selected cells into a single cell?",
    "options": [
      { "text": "Split Cells", "isCorrect": false },
      { "text": "Merge Cells", "isCorrect": true },
      { "text": "Columns After", "isCorrect": false },
      { "text": "Rows Above", "isCorrect": false }
    ]
  },
  {
    "question": "A user wants to move a sentence from the middle of a paragraph to the end of the document. Which two keyboard shortcuts from the document should they use in order?",
    "options": [
      { "text": "Ctrl+C, Ctrl+V", "isCorrect": false },
      { "text": "To Cut, To Paste", "isCorrect": true },
      { "text": "To Copy, To Cut", "isCorrect": false },
      { "text": "Ctrl+A, Ctrl+S", "isCorrect": false }
    ]
  },
  {
    "question": "A student needs to ensure that the column headers of their long report remain visible on every page. Which table option should they check when inserting the table?",
    "options": [
      { "text": "Don't split table over pages", "isCorrect": false },
      { "text": "Repeat heading rows on new pages", "isCorrect": true },
      { "text": "Merge cells", "isCorrect": false },
      { "text": "Center Vertically", "isCorrect": false }
    ]
  },
  {
    "question": "If you want the top and bottom borders of a boxed paragraph to have a distance of 0.20 cm from the text, and the left/right borders to have 0.40 cm, what must be done in the Padding section?",
    "options": [
      { "text": "Check 'Synchronize' and set it to 0.40 cm.", "isCorrect": false },
      { "text": "Uncheck 'Synchronize' and manually set the values for all four sides.", "isCorrect": true },
      { "text": "Set 'Before Text Indent' to 0.40 cm.", "isCorrect": false },
      { "text": "Set 'Line Arrangement' to 0.20 cm.", "isCorrect": false }
    ]
  },
  {
    "question": "A teacher wants the chapter title to appear on the **right** pages and the subject name on the **left** pages. After inserting a Header, what is the crucial next step to enable this feature?",
    "options": [
      { "text": "Use the 'View → Page Layout' option.", "isCorrect": false },
      { "text": "Uncheck the 'Same content on Left and Right Pages' box.", "isCorrect": true },
      { "text": "Set the Line Spacing to 'Double'.", "isCorrect": false },
      { "text": "Use the 'Before Text Indent' option on the header.", "isCorrect": false }
    ]
  },
  {
    "question": "A user is preparing a seminar paper and wants the entire paragraph to start $0.40\ cm$ from the main margin. Which indent setting should be adjusted?",
    "options": [
      { "text": "First Line Indent", "isCorrect": false },
      { "text": "After Text Indent", "isCorrect": false },
      { "text": "Padding", "isCorrect": false },
      { "text": "Before Text Indent", "isCorrect": true }
    ]
  },
  {
    "question": "A user needs to separate two paragraphs with a consistent $0.10\ cm$ spacing. Which paragraph formatting tool should be used?",
    "options": [
      { "text": "Set Line Spacing to 1.15", "isCorrect": false },
      { "text": "Increase Paragraph Spacing", "isCorrect": true },
      { "text": "First Line Indent", "isCorrect": false },
      { "text": "Line Arrangement", "isCorrect": false }
    ]
  },
  {
    "question": "To add a new column to the left of the currently selected column in a table, which Table Formatting Tool is the correct one to use?",
    "options": [
      { "text": "Columns After", "isCorrect": false },
      { "text": "Rows Above", "isCorrect": false },
      { "text": "Columns Before", "isCorrect": true },
      { "text": "Merge Cells", "isCorrect": false }
    ]
  },
  {
    "question": "A student accidentally deletes a large block of text. Which keyboard shortcut, which is mentioned in the document, should the student use immediately to correct the error?",
    "options": [
      { "text": "Ctrl+S (To Save)", "isCorrect": false },
      { "text": "Ctrl+V (To Paste)", "isCorrect": false },
      { "text": "Ctrl+Z (To Undo)", "isCorrect": true },
      { "text": "Ctrl+X (To Cut)", "isCorrect": false }
    ]
  },
  {
    "question": "To create a sentence with a single line border around it and a green background, which two formatting actions must be performed using the Paragraph formatting window?",
    "options": [
      { "text": "Area tab → Colour, and Borders tab → Line Style.", "isCorrect": true },
      { "text": "Indents & Spacing tab → Before Text, and Text Flow tab → Hyphenation.", "isCorrect": false },
      { "text": "Outline & List tab → List Style, and Alignment tab → Justified.", "isCorrect": false },
      { "text": "Header and Footer settings → Background.", "isCorrect": false }
    ]
  },
  {
    "question": "A user needs to center the main title of the document on the page. Which alignment tool from the Formatting toolbar is required?",
    "options": [
      { "text": "Align Left", "isCorrect": false },
      { "text": "Align Center", "isCorrect": true },
      { "text": "Align Right", "isCorrect": false },
      { "text": "Justified", "isCorrect": false }
    ]
  },
  {
    "question": "When adjusting table columns using the mouse, what is the final action after the pointer changes to a double-headed arrow?",
    "options": [
      { "text": "Double-click to set the default width.", "isCorrect": false },
      { "text": "Click and drag to adjust the width.", "isCorrect": true },
      { "text": "Press Ctrl and click to split the column.", "isCorrect": false },
      { "text": "Right-click to open the context menu.", "isCorrect": false }
    ]
  },
  {
    "question": "To save a file for the first time, which menu option should be used?",
    "options": [
      { "text": "File → Print", "isCorrect": false },
      { "text": "File → Save As", "isCorrect": true },
      { "text": "File → Export", "isCorrect": false },
      { "text": "Edit → Save", "isCorrect": false }
    ]
  },
  {
    "question": "What is the key difference between **Before Text Indent** and **First Line Indent** in paragraph formatting?",
    "options": [
      { "text": "Before Text Indent adjusts spacing only on the right, while First Line Indent adjusts it on the left.", "isCorrect": false },
      { "text": "Before Text Indent adjusts the spacing of the entire paragraph from the margin, while First Line Indent adjusts only the first line.", "isCorrect": true },
      { "text": "Before Text Indent adjusts the top margin, while First Line Indent adjusts the bottom margin.", "isCorrect": false },
      { "text": "Before Text Indent applies to headers, while First Line Indent applies to footers.", "isCorrect": false }
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
