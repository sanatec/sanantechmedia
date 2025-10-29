document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "What is the primary function of LibreOffice Calc, as described in the chapter?",
    "options": [
      { "text": "To create and edit vector graphics.", "isCorrect": false },
      { "text": "To process and analyze large amounts of data and draw conclusions from it.", "isCorrect": true },
      { "text": "To prepare and publish high-quality newsletters and magazines.", "isCorrect": false },
      { "text": "To develop mathematical models for geometry problems.", "isCorrect": false }
    ]
  },
  {
    "question": "What term is used to refer to raw and unprocessed facts, such as numbers, words, images, or videos?",
    "options": [
      { "text": "Information", "isCorrect": false },
      { "text": "Data", "isCorrect": true },
      { "text": "Report", "isCorrect": false },
      { "text": "Analysis", "isCorrect": false }
    ]
  },
  {
    "question": "When raw data are organized and analyzed, they become:",
    "options": [
      { "text": "Statistics", "isCorrect": false },
      { "text": "Algorithms", "isCorrect": false },
      { "text": "Information", "isCorrect": true },
      { "text": "Graphs", "isCorrect": false }
    ]
  },
  {
    "question": "What is the process of extracting, cleaning, transforming, interpreting, and modeling data to discover useful information called?",
    "options": [
      { "text": "Data Entry", "isCorrect": false },
      { "text": "Data Visualization", "isCorrect": false },
      { "text": "Data Analysis", "isCorrect": true },
      { "text": "Data Backup", "isCorrect": false }
    ]
  },
  {
    "question": "Which field in the LibreOffice Calc interface displays the formula or the content of the currently selected cell?",
    "options": [
      { "text": "Status Bar", "isCorrect": false },
      { "text": "Formula Bar", "isCorrect": true },
      { "text": "Title Bar", "isCorrect": false },
      { "text": "Name Box", "isCorrect": false }
    ]
  },
  {
    "question": "What is the primary purpose of the **COUNTIF** function in LibreOffice Calc?",
    "options": [
      { "text": "To count all cells in a range.", "isCorrect": false },
      { "text": "To count the number of cells that meet a specified condition.", "isCorrect": true },
      { "text": "To count all cells that contain numbers.", "isCorrect": false },
      { "text": "To find the average of values in a range.", "isCorrect": false }
    ]
  },
  {
    "question": "What is the correct syntax for the **COUNTIF** function?",
    "options": [
      { "text": "COUNTIF(condition, range)", "isCorrect": false },
      { "text": "COUNTIF(range:condition)", "isCorrect": false },
      { "text": "COUNTIF(range; condition)", "isCorrect": true },
      { "text": "COUNTIF{range, condition}", "isCorrect": false }
    ]
  },
  {
    "question": "If you use `=COUNTIF(A1:A10; \">50\")`, what will the function do?",
    "options": [
      { "text": "Count cells from A1 to A10 that are equal to 50.", "isCorrect": false },
      { "text": "Count cells from A1 to A10 that contain values less than 50.", "isCorrect": false },
      { "text": "Count cells from A1 to A10 that contain values greater than 50.", "isCorrect": true },
      { "text": "Calculate the sum of values greater than 50.", "isCorrect": false }
    ]
  },
  {
    "question": "In the context of analyzing literacy rates, how would you use COUNTIF to find the number of states with literacy rates above 90% in a column `D2:D30`?",
    "options": [
      { "text": "=COUNTIF(D2:D30; \"90%\")", "isCorrect": false },
      { "text": "=COUNTIF(D2:D30; \">90\")", "isCorrect": true },
      { "text": "=SUMIF(D2:D30; \">90\")", "isCorrect": false },
      { "text": "=COUNT(D2:D30; 90%)", "isCorrect": false }
    ]
  },
  {
    "question": "Which type of argument is the criteria (condition) in the COUNTIF function?",
    "options": [
      { "text": "A numerical value only.", "isCorrect": false },
      { "text": "A cell reference only.", "isCorrect": false },
      { "text": "Text, number, or a logical operator enclosed in quotation marks, or a cell reference.", "isCorrect": true },
      { "text": "A formula without quotation marks.", "isCorrect": false }
    ]
  },
  {
    "question": "What will `=COUNTIF(A1:A5; \"Kerala\")` calculate?",
    "options": [
      { "text": "The number of cells in A1:A5 that are not 'Kerala'.", "isCorrect": false },
      { "text": "The sum of values in cells named 'Kerala'.", "isCorrect": false },
      { "text": "The number of cells in A1:A5 that contain the exact text 'Kerala'.", "isCorrect": true },
      { "text": "The average value of cells in A1:A5.", "isCorrect": false }
    ]
  },
  {
    "question": "To count the number of states with literacy rates below 70% in column D, the correct COUNTIF formula would be:",
    "options": [
      { "text": "=COUNTIF(D:D; \"<70\")", "isCorrect": false },
      { "text": "=COUNTIF(D2:D30; \"<70\")", "isCorrect": true },
      { "text": "=COUNTIF(D2:D30; 70)", "isCorrect": false },
      { "text": "=COUNTIF(D2:D30; \"<70%\")", "isCorrect": false }
    ]
  },
  {
    "question": "If you want to count empty cells in the range C1:C10, which COUNTIF formula is correct?",
    "options": [
      { "text": "=COUNTIF(C1:C10; \" \")", "isCorrect": false },
      { "text": "=COUNTIF(C1:C10; \"=0\")", "isCorrect": false },
      { "text": "=COUNTIF(C1:C10; \"\")", "isCorrect": true },
      { "text": "=COUNTIF(C1:C10; EMPTY)", "isCorrect": false }
    ]
  },
  {
    "question": "If cell A1 contains 100, which COUNTIF condition will count it?",
    "options": [
      { "text": "\">=101\"", "isCorrect": false },
      { "text": "\"<100\"", "isCorrect": false },
      { "text": "\"=100\"", "isCorrect": true },
      { "text": "\"<>100\"", "isCorrect": false }
    ]
  },
  {
    "question": "In the COUNTIF formula, why should the condition containing comparison operators (like >, <) be enclosed in double quotation marks?",
    "options": [
      { "text": "Because it is a cell range.", "isCorrect": false },
      { "text": "To distinguish the operator from standard mathematical operations.", "isCorrect": true },
      { "text": "Only if the condition is greater than 100.", "isCorrect": false },
      { "text": "It is not required.", "isCorrect": false }
    ]
  },
  {
    "question": "What is the function of the **LOOKUP** function in LibreOffice Calc?",
    "options": [
      { "text": "To count the number of cells that meet a specified condition.", "isCorrect": false },
      { "text": "To search for a value in a sorted range (row or column) and return a corresponding value from another range.", "isCorrect": true },
      { "text": "To find the average of a range of cells.", "isCorrect": false },
      { "text": "To change the format of a cell.", "isCorrect": false }
    ]
  },
  {
    "question": "What are the three mandatory arguments for the **LOOKUP** function (Vector Form)?",
    "options": [
      { "text": "Criteria, Range, Sum_Range", "isCorrect": false },
      { "text": "Search_Value, Search_Range, Result_Range", "isCorrect": true },
      { "text": "Database, Field, Criteria", "isCorrect": false },
      { "text": "Value, Row, Column", "isCorrect": false }
    ]
  },
  {
    "question": "When using LOOKUP to assign a grade based on a score, what must be true about the search array (e.g., the score column in the lookup table)?",
    "options": [
      { "text": "It must contain only text values.", "isCorrect": false },
      { "text": "It must be sorted in ascending order.", "isCorrect": true },
      { "text": "It must be sorted in descending order.", "isCorrect": false },
      { "text": "It must be hidden.", "isCorrect": false }
    ]
  },
  {
    "question": "If a score is 55, and the lookup table boundaries are [Below 40: D, 40 to 59: C, 60 to 79: B], which grade will the LOOKUP function return?",
    "options": [
      { "text": "A", "isCorrect": false },
      { "text": "B", "isCorrect": false },
      { "text": "C", "isCorrect": true },
      { "text": "D", "isCorrect": false }
    ]
  },
  {
    "question": "The primary advantage of using LOOKUP for scoring systems (e.g., score to grade) is:",
    "options": [
      { "text": "It only works with scores above 80.", "isCorrect": false },
      { "text": "It allows the grading criteria to be easily managed and changed in a separate table.", "isCorrect": true },
      { "text": "It prevents the sheet from being edited.", "isCorrect": false },
      { "text": "It automatically calculates the mean score.", "isCorrect": false }
    ]
  },
  {
    "question": "Which function is an alternative to LOOKUP, specifically designed for searching vertically in the first column of a data table?",
    "options": [
      { "text": "HLOOKUP", "isCorrect": false },
      { "text": "SUMIF", "isCorrect": false },
      { "text": "VLOOKUP", "isCorrect": true },
      { "text": "AVERAGE", "isCorrect": false }
    ]
  },
  {
    "question": "In the LOOKUP formula, if the Search_Value is not found, what does the function do?",
    "options": [
      { "text": "It returns the next larger value in the search array.", "isCorrect": false },
      { "text": "It returns an error message (#N/A).", "isCorrect": false },
      { "text": "It returns the largest value in the search array that is less than or equal to the Search_Value.", "isCorrect": true },
      { "text": "It returns 0.", "isCorrect": false }
    ]
  },
  {
    "question": "To use the LOOKUP function to get the grade for a score in cell A2, using the table in F2:G5, where F2:F5 is the score boundary and G2:G5 is the grade, the correct formula structure would be:",
    "options": [
      { "text": "=LOOKUP(A2; F2:F5; G2:G5)", "isCorrect": true },
      { "text": "=LOOKUP(F2:G5; A2)", "isCorrect": false },
      { "text": "=LOOKUP(A2; F2:G5)", "isCorrect": false },
      { "text": "=LOOKUP(A2, F2:F5, G2:G5)", "isCorrect": false }
    ]
  },
  {
    "question": "Why is the search range for LOOKUP often defined using absolute cell references (e.g., $F$2:$F$5) when dragging the formula to other cells?",
    "options": [
      { "text": "To increase the calculation speed.", "isCorrect": false },
      { "text": "To ensure the reference range does not change when the formula is copied.", "isCorrect": true },
      { "text": "To make the grades visible to all users.", "isCorrect": false },
      { "text": "To convert the range to a text format.", "isCorrect": false }
    ]
  },
  {
    "question": "What happens if the scores in the lookup table (search range) are not sorted in ascending order?",
    "options": [
      { "text": "The LOOKUP function will return the correct result regardless.", "isCorrect": false },
      { "text": "The function may return incorrect results.", "isCorrect": true },
      { "text": "The function will automatically sort the data.", "isCorrect": false },
      { "text": "The formula will display an error message (#REF).", "isCorrect": false }
    ]
  },
  {
    "question": "The process of arranging the records in a data table based on the content of one or more fields in a specific order (ascending or descending) is called:",
    "options": [
      { "text": "Data Filtering", "isCorrect": false },
      { "text": "Data Analysis", "isCorrect": false },
      { "text": "Data Sorting", "isCorrect": true },
      { "text": "Data Lookup", "isCorrect": false }
    ]
  },
  {
    "question": "To sort a data table in LibreOffice Calc, which menu path is typically followed?",
    "options": [
      { "text": "File → Sort", "isCorrect": false },
      { "text": "Insert → Data → Sort", "isCorrect": false },
      { "text": "Data → Sort", "isCorrect": true },
      { "text": "Tools → Sort", "isCorrect": false }
    ]
  },
  {
    "question": "What is the default order for sorting text in LibreOffice Calc?",
    "options": [
      { "text": "Ascending (A to Z)", "isCorrect": true },
      { "text": "Descending (Z to A)", "isCorrect": false },
      { "text": "Random", "isCorrect": false },
      { "text": "By Length", "isCorrect": false }
    ]
  },
  {
    "question": "If you sort data based on the 'Total Score' column in descending order, where will the student with the highest total score appear?",
    "options": [
      { "text": "At the bottom of the list.", "isCorrect": false },
      { "text": "At the top of the list.", "isCorrect": true },
      { "text": "In the middle of the list.", "isCorrect": false },
      { "text": "The data will not be sorted.", "isCorrect": false }
    ]
  },
  {
    "question": "What is the primary function of **Data Filtering** in a spreadsheet?",
    "options": [
      { "text": "To rearrange the order of the data.", "isCorrect": false },
      { "text": "To hide all data in the table.", "isCorrect": false },
      { "text": "To display only the data that meets specific criteria, temporarily hiding the rest.", "isCorrect": true },
      { "text": "To calculate the sum of values.", "isCorrect": false }
    ]
  },
  {
    "question": "Which type of filtering is best suited for simple filtering based on values already present in a column, such as finding all students from 'A' division?",
    "options": [
      { "text": "Standard Filter", "isCorrect": false },
      { "text": "Advanced Filter", "isCorrect": false },
      { "text": "AutoFilter", "isCorrect": true },
      { "text": "Conditional Filter", "isCorrect": false }
    ]
  },
  {
    "question": "To apply **AutoFilter** to a data range, which menu option is used?",
    "options": [
      { "text": "Data → Sort", "isCorrect": false },
      { "text": "Data → Filter → AutoFilter", "isCorrect": true },
      { "text": "Tools → Filter", "isCorrect": false },
      { "text": "Insert → Filter", "isCorrect": false }
    ]
  },
  {
    "question": "Which filtering method is required when you need to use multiple criteria (e.g., 'Grade A' AND 'Division B') or complex criteria (e.g., 'Score > 90')?",
    "options": [
      { "text": "AutoFilter", "isCorrect": false },
      { "text": "Standard Filter", "isCorrect": true },
      { "text": "Lookup Filter", "isCorrect": false },
      { "text": "Data Consolidation", "isCorrect": false }
    ]
  },
  {
    "question": "In the Standard Filter dialogue box, what logical operator would you use to find records that match both Criterion 1 (Score > 80) and Criterion 2 (Grade = A)?",
    "options": [
      { "text": "OR", "isCorrect": false },
      { "text": "NOT", "isCorrect": false },
      { "text": "AND", "isCorrect": true },
      { "text": "XOR", "isCorrect": false }
    ]
  },
  {
    "question": "After applying a filter (Standard or AutoFilter), how do you return to viewing the entire data set?",
    "options": [
      { "text": "Delete the entire table.", "isCorrect": false },
      { "text": "Save the file and reopen it.", "isCorrect": false },
      { "text": "Use the Data → Filter → Reset Filter menu option.", "isCorrect": true },
      { "text": "Press the F11 key.", "isCorrect": false }
    ]
  },
  {
    "question": "In LibreOffice Calc, what is the first step required to prevent the contents of a specific cell from being edited by others?",
    "options": [
      { "text": "Protect the sheet directly with a password.", "isCorrect": false },
      { "text": "Select the cell(s) and apply 'Protect' via Format Cells → Cell Protection tab.", "isCorrect": true },
      { "text": "Use the COUNTIF function.", "isCorrect": false },
      { "text": "Change the cell's background color.", "isCorrect": false }
    ]
  },
  {
    "question": "What is the final step necessary to activate the cell protection settings in Calc?",
    "options": [
      { "text": "Apply 'Format → Cells'.", "isCorrect": false },
      { "text": "Use the 'Tools → Protect Spreadsheet → Sheet' menu option, optionally setting a password.", "isCorrect": true },
      { "text": "Set the filter criteria.", "isCorrect": false },
      { "text": "Convert the document to a PDF file.", "isCorrect": false }
    ]
  },
  {
    "question": "What does checking the 'Hide Formula' option in the Cell Protection tab achieve?",
    "options": [
      { "text": "It prevents the formula from being edited, but the formula is still visible in the Formula Bar.", "isCorrect": false },
      { "text": "It hides the formula in the Formula Bar once the sheet is protected, but the result remains visible in the cell.", "isCorrect": true },
      { "text": "It hides the cell content (result) but shows the formula.", "isCorrect": false },
      { "text": "It locks the entire spreadsheet document.", "isCorrect": false }
    ]
  },
  {
    "question": "Why would you choose to protect a sheet with a password?",
    "options": [
      { "text": "To make the formulas visible.", "isCorrect": false },
      { "text": "To allow anyone to modify the data.", "isCorrect": false },
      { "text": "To prevent unauthorized users from disabling the protection and changing the data or formulas.", "isCorrect": true },
      { "text": "To enable automatic sorting.", "isCorrect": false }
    ]
  },
  {
    "question": "By default, when you protect a new sheet in LibreOffice Calc, which cells are protected?",
    "options": [
      { "text": "Only cells with formulas.", "isCorrect": false },
      { "text": "Only empty cells.", "isCorrect": false },
      { "text": "All cells are marked as 'Protected'.", "isCorrect": true },
      { "text": "Only cells with text values.", "isCorrect": false }
    ]
  },
  {
    "question": "What is the file extension for a standard LibreOffice Calc spreadsheet document?",
    "options": [
      { "text": ".ods", "isCorrect": true },
      { "text": ".ots", "isCorrect": false },
      { "text": ".xlsx", "isCorrect": false },
      { "text": ".pdf", "isCorrect": false }
    ]
  },
  {
    "question": "What is the file extension for a LibreOffice Calc spreadsheet template, as mentioned in the document (e.g., Census_India_2011.ots)?",
    "options": [
      { "text": ".ods", "isCorrect": false },
      { "text": ".ots", "isCorrect": true },
      { "text": ".ott", "isCorrect": false },
      { "text": ".odt", "isCorrect": false }
    ]
  },
  {
    "question": "When you open an OTS file (template), what should you immediately do, similar to opening an OTT file?",
    "options": [
      { "text": "Run the COUNTIF function.", "isCorrect": false },
      { "text": "Sort the data in descending order.", "isCorrect": false },
      { "text": "Save the file to prevent accidental changes to the original template.", "isCorrect": true },
      { "text": "Apply AutoFilter.", "isCorrect": false }
    ]
  },
  {
    "question": "In the context of population study, why is the study of population density in a country considered important?",
    "options": [
      { "text": "It is only a statistical formality.", "isCorrect": false },
      { "text": "Socio-economic factors of an area and its population density are interrelated.", "isCorrect": true },
      { "text": "It helps in using the COUNTIF function.", "isCorrect": false },
      { "text": "It is needed only for data entry.", "isCorrect": false }
    ]
  },
  {
    "question": "What is the default behavior of the **Sort** feature if you do not select the entire data table (i.e., you only select one column)?",
    "options": [
      { "text": "It sorts the entire sheet regardless of the selection.", "isCorrect": false },
      { "text": "It sorts only the selected column, which can lead to data inconsistency.", "isCorrect": true },
      { "text": "It automatically applies a filter.", "isCorrect": false },
      { "text": "It returns an error message.", "isCorrect": false }
    ]
  },
  {
    "question": "Which menu option in Calc is used to hide a worksheet from view?",
    "options": [
      { "text": "Format → Sheet → Hide", "isCorrect": true },
      { "text": "Tools → Hide", "isCorrect": false },
      { "text": "Data → Hide", "isCorrect": false },
      { "text": "File → Hide Sheet", "isCorrect": false }
    ]
  },
  {
    "question": "The combination of a row and a column where data is entered in a spreadsheet is called a:",
    "options": [
      { "text": "Range", "isCorrect": false },
      { "text": "Worksheet", "isCorrect": false },
      { "text": "Cell", "isCorrect": true },
      { "text": "Formula Bar", "isCorrect": false }
    ]
  },
  {
    "question": "If you are sorting a list of names, which order is typically used to arrange them alphabetically?",
    "options": [
      { "text": "Descending (Z-A)", "isCorrect": false },
      { "text": "Ascending (A-Z)", "isCorrect": true },
      { "text": "Numerical Order", "isCorrect": false },
      { "text": "Date Order", "isCorrect": false }
    ]
  },
  {
    "question": "What does a spreadsheet primarily use to perform calculations on data?",
    "options": [
      { "text": "Text Editors", "isCorrect": false },
      { "text": "Formulas and Functions", "isCorrect": true },
      { "text": "Image Filters", "isCorrect": false },
      { "text": "Vector Graphics", "isCorrect": false }
    ]
  },
  {
    "question": "Which key can be used to easily select a continuous range of cells from A1 to A10?",
    "options": [
      { "text": "Ctrl key", "isCorrect": false },
      { "text": "Shift key (while selecting the first and last cell)", "isCorrect": true },
      { "text": "Alt key", "isCorrect": false },
      { "text": "Tab key", "isCorrect": false }
    ]
  },
  {
    "question": "The primary objective of analyzing regional variations in population density is to understand how it relates to:",
    "options": [
      { "text": "The color of the spreadsheets.", "isCorrect": false },
      { "text": "The socio-economic factors of the area.", "isCorrect": true },
      { "text": "The default font used in the document.", "isCorrect": false },
      { "text": "The complexity of the LOOKUP function.", "isCorrect": false }
    ]
  },
  {
    "question": "Which LibreOffice Calc feature is used to manage and display different views of data without changing the original data structure?",
    "options": [
      { "text": "Data Consolidation", "isCorrect": false },
      { "text": "Scenarios", "isCorrect": false },
      { "text": "Filters", "isCorrect": true },
      { "text": "Data Validation", "isCorrect": false }
    ]
  },
  {
    "question": "What is the cell reference for the intersection of the 5th row and the 3rd column?",
    "options": [
      { "text": "E3", "isCorrect": false },
      { "text": "3E", "isCorrect": false },
      { "text": "C5", "isCorrect": true },
      { "text": "5C", "isCorrect": false }
    ]
  },
  {
    "question": "Which function would you use to calculate the **sum** of values in a range that meet a specific condition (e.g., sum of scores greater than 70)?",
    "options": [
      { "text": "COUNTIF", "isCorrect": false },
      { "text": "SUM", "isCorrect": false },
      { "text": "SUMIF", "isCorrect": true },
      { "text": "LOOKUP", "isCorrect": false }
    ]
  },
  {
    "question": "When applying cell protection, why should the cells containing variable data (e.g., student scores) be explicitly marked as 'Not Protected' *before* protecting the sheet?",
    "options": [
      { "text": "To hide their formulas from others.", "isCorrect": false },
      { "text": "Because by default all cells are 'Protected', and you need to allow data entry in specific cells.", "isCorrect": true },
      { "text": "To automatically apply the LOOKUP function.", "isCorrect": false },
      { "text": "To sort the data automatically.", "isCorrect": false }
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
