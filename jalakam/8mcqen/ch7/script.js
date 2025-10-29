document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "What are the small squares used to organize and analyze data in **LibreOffice Calc** called?",
    "options": [
      { "text": "Worksheet", "isCorrect": false },
      { "text": "Columns", "isCorrect": false },
      { "text": "Rows", "isCorrect": false },
      { "text": "Cells", "isCorrect": true }
    ]
  },
  {
    "question": "What is the name given to identify a cell by combining its column and row names (e.g., A1, B2)?",
    "options": [
      { "text": "Cell Reference", "isCorrect": false },
      { "text": "Active Cell", "isCorrect": false },
      { "text": "Cell Range", "isCorrect": false },
      { "text": "Cell Address", "isCorrect": true }
    ]
  },
  {
    "question": "Which function is used to find the **sum of numbers** in LibreOffice Calc?",
    "options": [
      { "text": "=SUM()", "isCorrect": true },
      { "text": "=ADD()", "isCorrect": false },
      { "text": "=TOTAL()", "isCorrect": false },
      { "text": "=PLUS()", "isCorrect": false }
    ]
  },
  {
    "question": "What is the small '+' symbol seen at the bottom right corner of a cell used to copy a function to other cells called?",
    "options": [
      { "text": "Drag Handle", "isCorrect": false },
      { "text": "Cell Copier", "isCorrect": false },
      { "text": "Fill Handle", "isCorrect": true },
      { "text": "Auto Copy Tool", "isCorrect": false }
    ]
  },
  {
    "question": "Which component of a function automatically adjusts according to the new positions when copied using the Fill Handle?",
    "options": [
      { "text": "Column Width", "isCorrect": false },
      { "text": "Cell References", "isCorrect": true },
      { "text": "Font Size", "isCorrect": false },
      { "text": "Cell Color", "isCorrect": false }
    ]
  },
  {
    "question": "Which function is used in LibreOffice Calc to find the **average** of numbers?",
    "options": [
      { "text": "=AVG()", "isCorrect": false },
      { "text": "=AVERAGE()", "isCorrect": true },
      { "text": "=MEAN()", "isCorrect": false },
      { "text": "=GETAVG()", "isCorrect": false }
    ]
  },
  {
    "question": "Which feature in Calc is used to **combine multiple cells** into a single cell?",
    "options": [
      { "text": "Cell Resize", "isCorrect": false },
      { "text": "Cell Merge", "isCorrect": true },
      { "text": "Format Copy", "isCorrect": false },
      { "text": "Fill Handle", "isCorrect": false }
    ]
  },
  {
    "question": "Which menu in LibreOffice Calc is used to create a **chart or graph** based on the selected data?",
    "options": [
      { "text": "Tools → Chart", "isCorrect": false },
      { "text": "Insert → Chart", "isCorrect": true },
      { "text": "File → Chart", "isCorrect": false },
      { "text": "Data → Chart", "isCorrect": false }
    ]
  },
  {
    "question": "What is the reason that data analysis becomes easier when using **charts and graphs**?",
    "options": [
      { "text": "Simplifies comparison and summary of information", "isCorrect": true },
      { "text": "Simplifies data entry", "isCorrect": false },
      { "text": "Increases computer speed", "isCorrect": false },
      { "text": "Automates functions", "isCorrect": false }
    ]
  },
  {
    "question": "Which option in Calc is used to **arrange data** in ascending or descending order?",
    "options": [
      { "text": "File → Arrange", "isCorrect": false },
      { "text": "Data → Sort", "isCorrect": true },
      { "text": "Tools → Filter", "isCorrect": false },
      { "text": "Edit → Sort", "isCorrect": false }
    ]
  },
  {
    "question": "What is the 'Delete Decimal Place' (0.00 $\rightarrow$ 0.0) option in the Formatting toolbar used for?",
    "options": [
      { "text": "To find the sum", "isCorrect": false },
      { "text": "To add currency symbol", "isCorrect": false },
      { "text": "To adjust or remove the number of decimal places", "isCorrect": true },
      { "text": "To find the average", "isCorrect": false }
    ]
  },
  {
    "question": "Which function is **not available** in the Select Function ($\Sigma$) menu in LibreOffice Calc?",
    "options": [
      { "text": "SUBTRACT", "isCorrect": true },
      { "text": "MAX", "isCorrect": false },
      { "text": "AVERAGE", "isCorrect": false },
      { "text": "SUM", "isCorrect": false }
    ]
  },
  {
    "question": "Which key should be held down while selecting data from **non-adjacent columns or rows** to include in a chart?",
    "options": [
      { "text": "Tab Key", "isCorrect": false },
      { "text": "Shift Key", "isCorrect": false },
      { "text": "Control (Ctrl) Key", "isCorrect": true },
      { "text": "Alt Key", "isCorrect": false }
    ]
  },
  {
    "question": "Which of the following is **NOT** a major feature of LibreOffice Calc?",
    "options": [
      { "text": "Can present data in tables", "isCorrect": false },
      { "text": "Can analyze, compare, and summarize information", "isCorrect": false },
      { "text": "Primarily used for editing and formatting text", "isCorrect": true },
      { "text": "Can create charts and graphs to present data clearly", "isCorrect": false }
    ]
  },
  {
    "question": "Which symbol should a **formula in a cell** always begin with?",
    "options": [
      { "text": "\$", "isCorrect": false },
      { "text": "=", "isCorrect": true },
      { "text": "*", "isCorrect": false },
      { "text": "#", "isCorrect": false }
    ]
  },
  {
    "question": "Which operator is used to include multiple cells (e.g., A1 to A5) in a function?",
    "options": [
      { "text": "-", "isCorrect": false },
      { "text": "+", "isCorrect": false },
      { "text": ": (Colon)", "isCorrect": true },
      { "text": ";", "isCorrect": false }
    ]
  },
  {
    "question": "Which Calc function is used to find the **largest number** in a specified range?",
    "options": [
      { "text": "=MAXIMUM()", "isCorrect": false },
      { "text": "=MAX()", "isCorrect": true },
      { "text": "=LARGEST()", "isCorrect": false },
      { "text": "=BIG()", "isCorrect": false }
    ]
  },
  {
    "question": "Which Calc function is used to find the **smallest number** in a specified range?",
    "options": [
      { "text": "=MINIMUM()", "isCorrect": false },
      { "text": "=SMALLEST()", "isCorrect": false },
      { "text": "=LOW()", "isCorrect": false },
      { "text": "=MIN()", "isCorrect": true }
    ]
  },
  {
    "question": "Why is a **Pie Chart** used in Calc for data analysis?",
    "options": [
      { "text": "To list exact data values", "isCorrect": false },
      { "text": "To show various parts of a whole data set (Part-to-whole comparison)", "isCorrect": true },
      { "text": "To show data trends over a period", "isCorrect": false },
      { "text": "To compare two different data sets", "isCorrect": false }
    ]
  },
  {
    "question": "Which type of cell reference is used to keep the exact location of a data point in a worksheet unchanged?",
    "options": [
      { "text": "Functional Reference", "isCorrect": false },
      { "text": "Relative Reference", "isCorrect": false },
      { "text": "Absolute Reference (e.g., \$A\$1)", "isCorrect": true },
      { "text": "Dynamic Reference", "isCorrect": false }
    ]
  },
  {
    "question": "Which letters are used to indicate the name of a **Column** in LibreOffice Calc?",
    "options": [
      { "text": "Arabic Numerals (1, 2, 3...)", "isCorrect": false },
      { "text": "English Alphabet (A, B, C...)", "isCorrect": true },
      { "text": "Greek Alphabet", "isCorrect": false },
      { "text": "Roman Numerals (I, II, III...)", "isCorrect": false }
    ]
  },
  {
    "question": "Which numbers are used to indicate the name of a **Row** in LibreOffice Calc?",
    "options": [
      { "text": "English Alphabet", "isCorrect": false },
      { "text": "Arabic Numerals (1, 2, 3...)", "isCorrect": true },
      { "text": "Roman Numerals", "isCorrect": false },
      { "text": "Greek Alphabet", "isCorrect": false }
    ]
  },
  {
    "question": "Which Calc tool is used to display only the rows that satisfy a specific **criterion** in the dataset?",
    "options": [
      { "text": "Validation", "isCorrect": false },
      { "text": "Sort", "isCorrect": false },
      { "text": "Filter", "isCorrect": true },
      { "text": "Conditional Formatting", "isCorrect": false }
    ]
  },
  {
    "question": "Which Calc function helps to find the product with the **highest sales** as part of data analysis?",
    "options": [
      { "text": "=COUNT()", "isCorrect": false },
      { "text": "=AVERAGE()", "isCorrect": false },
      { "text": "=MAX()", "isCorrect": true },
      { "text": "=MIN()", "isCorrect": false }
    ]
  },
  {
    "question": "Which of the following is the **correct formula**?",
    "options": [
      { "text": "=A1+B1", "isCorrect": true },
      { "text": "A1+B1=SUM", "isCorrect": false },
      { "text": "(A1+B1)", "isCorrect": false },
      { "text": "=SUM(A1, B1)", "isCorrect": false }
    ]
  },
  {
    "question": "Where is **Text** data typically displayed (Alignment) when entered in LibreOffice Calc?",
    "options": [
      { "text": "Top", "isCorrect": false },
      { "text": "Center", "isCorrect": false },
      { "text": "Left", "isCorrect": true },
      { "text": "Right", "isCorrect": false }
    ]
  },
  {
    "question": "Where are **Number** data typically displayed (Alignment) when entered in LibreOffice Calc?",
    "options": [
      { "text": "Right", "isCorrect": true },
      { "text": "Left", "isCorrect": false },
      { "text": "Bottom", "isCorrect": false },
      { "text": "Center", "isCorrect": false }
    ]
  },
  {
    "question": "Which toolbar is generally used to apply **borders** to multiple cells (A1:C10) at once?",
    "options": [
      { "text": "Formula Toolbar", "isCorrect": false },
      { "text": "Drawing Toolbar", "isCorrect": false },
      { "text": "Formatting Toolbar", "isCorrect": true },
      { "text": "Standard Toolbar", "isCorrect": false }
    ]
  },
  {
    "question": "What helps to divide a large dataset into smaller, easier-to-manage groups based on a specific criterion?",
    "options": [
      { "text": "Fill Handle", "isCorrect": false },
      { "text": "Chart Creation", "isCorrect": false },
      { "text": "Data Sorting", "isCorrect": true },
      { "text": "Merging Cells", "isCorrect": false }
    ]
  },
  {
    "question": "Which option is used to change the **background color** of a cell in LibreOffice Calc?",
    "options": [
      { "text": "Data → Color", "isCorrect": false },
      { "text": "Format → Text", "isCorrect": false },
      { "text": "Format → Cells → Background", "isCorrect": true },
      { "text": "Insert → Color", "isCorrect": false }
    ]
  },
  {
    "question": "Which of the following is **NOT** a chart type available in the LibreOffice Calc Chart Wizard?",
    "options": [
      { "text": "Line Chart", "isCorrect": false },
      { "text": "Voice Chart", "isCorrect": true },
      { "text": "Bar Chart", "isCorrect": false },
      { "text": "Area Chart", "isCorrect": false }
    ]
  },
  {
    "question": "Which chart type is most suitable for showing **data trends (changes)** over a period?",
    "options": [
      { "text": "Scatter Chart", "isCorrect": false },
      { "text": "Pie Chart", "isCorrect": false },
      { "text": "Line Chart", "isCorrect": true },
      { "text": "Bar Chart", "isCorrect": false }
    ]
  },
  {
    "question": "Which chart type is most suitable for **comparing two different data sets** (e.g., marks of boys and girls in various classes)?",
    "options": [
      { "text": "Scatter Chart", "isCorrect": false },
      { "text": "Column/Bar Chart", "isCorrect": true },
      { "text": "Pie Chart", "isCorrect": false },
      { "text": "Line Chart", "isCorrect": false }
    ]
  },
  {
    "question": "What is the formula used in Calc to calculate **BMI**? (Hint: BMI = Weight / Height²)?",
    "options": [
      { "text": "=A2 * B2 * 2", "isCorrect": false },
      { "text": "=A2 / (B2^2)", "isCorrect": true },
      { "text": "=A2 * (B2^2)", "isCorrect": false },
      { "text": "=A2 / B2", "isCorrect": false }
    ]
  },
  {
    "question": "Which key should be pressed to see the result after entering a **formula** in Calc?",
    "options": [
      { "text": "Enter", "isCorrect": true },
      { "text": "Shift", "isCorrect": false },
      { "text": "Ctrl", "isCorrect": false },
      { "text": "Tab", "isCorrect": false }
    ]
  },
  {
    "question": "What are the labels that represent the data points in a chart called?",
    "options": [
      { "text": "Axis Label", "isCorrect": false },
      { "text": "Chart Area", "isCorrect": false },
      { "text": "Legend", "isCorrect": true },
      { "text": "Chart Title", "isCorrect": false }
    ]
  },
  {
    "question": "Which bar in LibreOffice Calc displays the **address and content** of the active cell?",
    "options": [
      { "text": "Status Bar", "isCorrect": false },
      { "text": "Formula Bar", "isCorrect": true },
      { "text": "Menu Bar", "isCorrect": false },
      { "text": "Title Bar", "isCorrect": false }
    ]
  },
  {
    "question": "What is the first step to be taken before entering data into a worksheet?",
    "options": [
      { "text": "Insert a chart", "isCorrect": false },
      { "text": "Provide clear Headings", "isCorrect": true },
      { "text": "Merge all cells", "isCorrect": false },
      { "text": "Create enough columns and rows", "isCorrect": false }
    ]
  },
  {
    "question": "Which function is used in Calc to find the **number (count)** of cells (containing numbers) in a specified range?",
    "options": [
      { "text": "=SUM()", "isCorrect": false },
      { "text": "=COUNT()", "isCorrect": true },
      { "text": "=AVERAGE()", "isCorrect": false },
      { "text": "=MAX()", "isCorrect": false }
    ]
  },
  {
    "question": "Which format option is used in Calc to add a **currency symbol** like '₹'?",
    "options": [
      { "text": "Format → Chart", "isCorrect": false },
      { "text": "Format → Text", "isCorrect": false },
      { "text": "Format → Cells → Currency", "isCorrect": true },
      { "text": "Format → Style", "isCorrect": false }
    ]
  },
  {
    "question": "Which menu in Calc should be used to insert a new data **Row** into the worksheet?",
    "options": [
      { "text": "File", "isCorrect": false },
      { "text": "Tools", "isCorrect": false },
      { "text": "Insert (Insert → Rows)", "isCorrect": true },
      { "text": "Data", "isCorrect": false }
    ]
  },
  {
    "question": "Which reference remains **unchanged** when dragging a formula from a cell using the Fill Handle?",
    "options": [
      { "text": "Mixed Reference", "isCorrect": false },
      { "text": "Relative Reference", "isCorrect": false },
      { "text": "Absolute Reference (\$A\$1)", "isCorrect": true },
      { "text": "Dynamic Reference", "isCorrect": false }
    ]
  },
  {
    "question": "What is considered the value when using data '₹100' from cell A1 in a formula in Calc?",
    "options": [
      { "text": "₹100", "isCorrect": false },
      { "text": "100 (Number)", "isCorrect": true },
      { "text": "Text (₹100)", "isCorrect": false },
      { "text": "₹", "isCorrect": false }
    ]
  },
  {
    "question": "What is the most effective way to present data in a worksheet **graphically**?",
    "options": [
      { "text": "Using Charts and Graphs", "isCorrect": true },
      { "text": "Using only letters", "isCorrect": false },
      { "text": "By sorting data", "isCorrect": false },
      { "text": "Using formulas", "isCorrect": false }
    ]
  },
  {
    "question": "When referring to a cell range (A1:B10), what does 'A1' indicate?",
    "options": [
      { "text": "The middle cell of the range", "isCorrect": false },
      { "text": "The last cell of the range", "isCorrect": false },
      { "text": "The column name", "isCorrect": false },
      { "text": "The first cell (Top-left cell) of the range", "isCorrect": true }
    ]
  },
  {
    "question": "What does the formula =A2*B2 indicate in Calc?",
    "options": [
      { "text": "The Sum of the numbers in A2 and B2", "isCorrect": false },
      { "text": "The Difference between the numbers in A2 and B2", "isCorrect": false },
      { "text": "The Product of the numbers in A2 and B2", "isCorrect": true },
      { "text": "The Average of the numbers in A2 and B2", "isCorrect": false }
    ]
  },
  {
    "question": "In which menu are the tools for complex data analysis like 'What-if Analysis' in LibreOffice Calc included?",
    "options": [
      { "text": "Format", "isCorrect": false },
      { "text": "File", "isCorrect": false },
      { "text": "Edit", "isCorrect": false },
      { "text": "Data (Data → What If Analysis)", "isCorrect": true }
    ]
  },
  {
    "question": "What is the main part of a chart where the data points are displayed?",
    "options": [
      { "text": "Chart Title", "isCorrect": false },
      { "text": "Axis", "isCorrect": false },
      { "text": "Plot Area", "isCorrect": true },
      { "text": "Legend", "isCorrect": false }
    ]
  },
  {
    "question": "Which Calc function helps to find 'how many times' a specific value occurs within a particular dataset?",
    "options": [
      { "text": "=AVERAGE()", "isCorrect": false },
      { "text": "=SUM()", "isCorrect": false },
      { "text": "=MAX()", "isCorrect": false },
      { "text": "=COUNTIF()", "isCorrect": true }
    ]
  },
  {
    "question": "What should be done to **rename a worksheet** in Calc?",
    "options": [
      { "text": "Right-click on the worksheet tab and select 'Rename'", "isCorrect": true },
      { "text": "Type the name in the Formula Bar", "isCorrect": false },
      { "text": "Click on the File menu", "isCorrect": false },
      { "text": "Use the Chart tool", "isCorrect": false }
    ]
  },
  {
    "question": "What is the primary goal of data analysis?",
    "options": [
      { "text": "To find patterns and trends in the data", "isCorrect": true },
      { "text": "To add more cells to the worksheet", "isCorrect": false },
      { "text": "To make formulas easier", "isCorrect": false },
      { "text": "To color the spreadsheet", "isCorrect": false }
    ]
  },
  {
    "question": "What is the file extension for a worksheet created in LibreOffice Calc?",
    "options": [
      { "text": ".odp", "isCorrect": false },
      { "text": ".csv", "isCorrect": false },
      { "text": ".odt", "isCorrect": false },
      { "text": ".ods", "isCorrect": true }
    ]
  },
  {
    "question": "The X-Axis in a chart typically represents which type of data?",
    "options": [
      { "text": "Numerical Values", "isCorrect": false },
      { "text": "Currency Values", "isCorrect": false },
      { "text": "Formulas", "isCorrect": false },
      { "text": "Data Categories or Time", "isCorrect": true }
    ]
  },
  {
    "question": "The Y-Axis in a chart typically represents which type of data?",
    "options": [
      { "text": "Categories", "isCorrect": false },
      { "text": "Dates", "isCorrect": false },
      { "text": "Names", "isCorrect": false },
      { "text": "Numerical Values", "isCorrect": true }
    ]
  },
  {
    "question": "In a student's mark list, the heading 'Name' in cell A1 is considered what type of data in Calc?",
    "options": [
      { "text": "Formula", "isCorrect": false },
      { "text": "Numeric Data", "isCorrect": false },
      { "text": "Date Data", "isCorrect": false },
      { "text": "Text Data", "isCorrect": true }
    ]
  },
  {
    "question": "In a student's mark list, the data '85' in cell B2 is considered what type of data in Calc?",
    "options": [
      { "text": "Formula", "isCorrect": false },
      { "text": "Text Data", "isCorrect": false },
      { "text": "Numeric Data", "isCorrect": true },
      { "text": "Date Data", "isCorrect": false }
    ]
  },
  {
    "question": "Which letters are used to indicate the name of a **Column** in LibreOffice Calc?",
    "options": [
      { "text": "Arabic Numerals (1, 2, 3...)", "isCorrect": false },
      { "text": "English Alphabet (A, B, C...)", "isCorrect": true },
      { "text": "Roman Numerals (I, II, III...)", "isCorrect": false },
      { "text": "Greek Alphabet", "isCorrect": false }
    ]
  },
  {
    "question": "Which numbers are used to indicate the name of a **Row** in LibreOffice Calc?",
    "options": [
      { "text": "English Alphabet", "isCorrect": false },
      { "text": "Arabic Numerals (1, 2, 3...)", "isCorrect": true },
      { "text": "Greek Alphabet", "isCorrect": false },
      { "text": "Roman Numerals", "isCorrect": false }
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
