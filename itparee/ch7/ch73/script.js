document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "\"GeoGebra\" എന്ന പേര് ഏത് രണ്ട് വാക്കുകൾ ചേർന്നാണ് ഉണ്ടായത് (Portmanteau)?",
    "options": [
      { "text": "ജ്യോഗ്രഫി (Geography), ജെബ്ര (Gebra)", "isCorrect": false },
      { "text": "ജ്യാമിതി (Geometry), ബീജഗണിതം (Algebra)", "isCorrect": true },
      { "text": "ജിയോളജി (Geology), ബീജഗണിതം (Algebra)", "isCorrect": false },
      { "text": "ജ്യോഗ്രഫി (Geography), ജ്യാമിതി (Geometry)", "isCorrect": false }
    ]
  },
  {
    "question": "ജിയോജിബ്രയിൽ, (3, 2) എന്ന കോർഡിനേറ്റുകൾ സൂചിപ്പിക്കുന്നത്, ഒരു പോയിൻ്റ് സ്ഥിതി ചെയ്യുന്നത്:",
    "options": [
      { "text": "ഒറിജിനിൽ നിന്ന് 3 യൂണിറ്റ് ഇടത്തോട്ടും 2 യൂണിറ്റ് മുകളിലേക്കും.", "isCorrect": false },
      { "text": "ഒറിജിനിൽ നിന്ന് 3 യൂണിറ്റ് വലത്തോട്ടും 2 യൂണിറ്റ് താഴോട്ടും.", "isCorrect": false },
      { "text": "ഒറിജിനിൽ നിന്ന് 3 യൂണിറ്റ് വലത്തോട്ടും 2 യൂണിറ്റ് മുകളിലേക്കും.", "isCorrect": true },
      { "text": "ഒറിജിനിൽ നിന്ന് 3 യൂണിറ്റ് ഇടത്തോട്ടും 2 യൂണിറ്റ് താഴോട്ടും.", "isCorrect": false }
    ]
  },
  {
    "question": "വസ്തുക്കളുടെ ബീജഗണിതപരമായ രൂപരേഖ (സമവാക്യങ്ങളും കോർഡിനേറ്റുകളും പോലെ) പ്രദർശിപ്പിക്കുന്ന ജിയോജിബ്രയിലെ കാഴ്ച (View) ഏതാണ്?",
    "options": [
      { "text": "ഗ്രാഫിക്സ് വ്യൂ (Graphics View)", "isCorrect": false },
      { "text": "ആൾജിബ്ര വ്യൂ (Algebra View)", "isCorrect": true },
      { "text": "സ്പ്രെഡ്ഷീറ്റ് വ്യൂ (Spreadsheet View)", "isCorrect": false },
      { "text": "CAS വ്യൂ (CAS View)", "isCorrect": false }
    ]
  },
  {
    "question": "ആൾജിബ്ര വ്യൂ ദൃശ്യമല്ലെങ്കിൽ, അത് കാണിക്കുന്നതിനുള്ള കീബോർഡ് കുറുക്കുവഴി (shortcut) ഏതാണ്?",
    "options": [
      { "text": "Ctrl+Shift+A", "isCorrect": true },
      { "text": "Ctrl+A", "isCorrect": false },
      { "text": "Ctrl+G", "isCorrect": false },
      { "text": "F5", "isCorrect": false }
    ]
  },
  {
    "question": "$x = 1$ എന്ന സമവാക്യം ഗ്രാഫിക്കായി സൂചിപ്പിക്കുന്നത്, ഒരു രേഖ:",
    "options": [
      { "text": "X-അക്ഷത്തിന് സമാന്തരമാണ്", "isCorrect": false },
      { "text": "Y-അക്ഷത്തിന് സമാന്തരമാണ്", "isCorrect": true },
      { "text": "45-ഡിഗ്രി കോണിലാണ്", "isCorrect": false },
      { "text": "$Y = X$ എന്ന രേഖയാണ്", "isCorrect": false }
    ]
  },
  {
    "question": "$y = 2$ എന്ന സമവാക്യം ഗ്രാഫിക്കായി സൂചിപ്പിക്കുന്നത്, ഒരു രേഖ:",
    "options": [
      { "text": "X-അക്ഷത്തിന് സമാന്തരമാണ്", "isCorrect": true },
      { "text": "Y-അക്ഷത്തിന് സമാന്തരമാണ്", "isCorrect": false },
      { "text": "45-ഡിഗ്രി കോണിലാണ്", "isCorrect": false },
      { "text": "$X = Y$ എന്ന രേഖയാണ്", "isCorrect": false }
    ]
  },
  {
    "question": "ജിയോജിബ്രയുടെ ഇൻപുട്ട് ബാറിൽ, ഒരു പരാബോളയുടെ സമവാക്യം, $y = x^2$ എന്ന് നിങ്ങൾ എങ്ങനെയാണ് ശരിയായി ടൈപ്പ് ചെയ്യുക?",
    "options": [
      { "text": "y = x2", "isCorrect": false },
      { "text": "y = x^2", "isCorrect": true },
      { "text": "y = x*x", "isCorrect": false },
      { "text": "y = x(sq)", "isCorrect": false }
    ]
  },
  {
    "question": "ഇൻപുട്ട് ബാറിലെ `Segment(A, B)` എന്ന കമാൻഡ് സൃഷ്ടിക്കുന്നത് എന്താണ്?",
    "options": [
      { "text": "A, B എന്നീ പോയിൻ്റുകളിലൂടെ അനന്തമായി നീളുന്ന ഒരു രേഖ.", "isCorrect": false },
      { "text": "A എന്ന പോയിൻ്റിൽ ആരംഭിച്ച് B-യിലൂടെ കടന്നുപോകുന്ന ഒരു റേ (ray).", "isCorrect": false },
      { "text": "A, B എന്നീ അഗ്രബിന്ദുക്കളോടുകൂടിയ ഒരു രേഖാഖണ്ഡം (line segment).", "isCorrect": true },
      { "text": "A യിൽ നിന്ന് B യിലേക്കുള്ള ഒരു വെക്റ്റർ.", "isCorrect": false }
    ]
  },
  {
    "question": "$x^2 + y^2 = 4$ എന്ന സമവാക്യം സൂചിപ്പിക്കുന്നത്:",
    "options": [
      { "text": "4 ചരിവുള്ള ഒരു രേഖ", "isCorrect": false },
      { "text": "മുകളിലേക്ക് തുറക്കുന്ന ഒരു പരാബോള", "isCorrect": false },
      { "text": "ആരം 2 ആയ ഒരു വൃത്തം (Circle)", "isCorrect": true },
      { "text": "ആരം 4 ആയ ഒരു വൃത്തം (Circle)", "isCorrect": false }
    ]
  },
  {
    "question": "ആൾജിബ്ര വ്യൂവിൽ, $A = (1, 5)$ എന്ന് നിർവചിച്ചിട്ടുള്ള ഒരു പോയിൻ്റ് സൂചിപ്പിക്കുന്നത്:",
    "options": [
      { "text": "A എന്ന പോയിൻ്റിന് x-കോർഡിനേറ്റ് 5 ഉം y-കോർഡിനേറ്റ് 1 ഉം ഉണ്ട്.", "isCorrect": false },
      { "text": "A എന്ന പോയിൻ്റിന് x-കോർഡിനേറ്റ് 1 ഉം y-കോർഡിനേറ്റ് 5 ഉം ഉണ്ട്.", "isCorrect": true },
      { "text": "A എന്ന പോയിൻ്റ് $y = 5x$ എന്ന രേഖയിലാണ്.", "isCorrect": false },
      { "text": "A എന്ന പോയിൻ്റ് ഒറിജിനിൽ നിന്ന് 5 യൂണിറ്റ് അകലെയാണ്.", "isCorrect": false }
    ]
  },
  {
    "question": "നിങ്ങൾ ഇൻപുട്ട് ബാറിൽ `B(1,3)`, `C(1,4)`, `D(1,5)` എന്ന് ടൈപ്പ് ചെയ്താൽ, എല്ലാ പോയിൻ്റുകളും താഴെ പറയുന്ന ഏത് രേഖയിലായിരിക്കും സ്ഥിതിചെയ്യുന്നത്:",
    "options": [
      { "text": "$y = 1$", "isCorrect": false },
      { "text": "$x = 1$", "isCorrect": true },
      { "text": "$y = x$", "isCorrect": false },
      { "text": "$y = x + 1$", "isCorrect": false }
    ]
  },
  {
    "question": "ജിയോജിബ്രയിലെ \"ഇൻപുട്ട് ഹിസ്റ്ററി\" (Input History) ആക്സസ് ചെയ്യാൻ കഴിയുന്നത്:",
    "options": [
      { "text": "സോഫ്റ്റ്‌വെയർ അടച്ച് വീണ്ടും തുറക്കുന്നതിലൂടെ.", "isCorrect": false },
      { "text": "കർസർ ഇൻപുട്ട് ബാറിലായിരിക്കുമ്പോൾ മുകളിലേക്കുള്ള അമ്പടയാള കീ (Up Arrow key) അമർത്തുന്നതിലൂടെ.", "isCorrect": true },
      { "text": "ഫയൽ മെനുവിൽ നോക്കുന്നതിലൂടെ.", "isCorrect": false },
      { "text": "ആൾജിബ്ര വ്യൂ പരിശോധിക്കുന്നതിലൂടെ.", "isCorrect": false }
    ]
  },
  {
    "question": "ഗ്രാഫിക്സ് വ്യൂവിൽ രണ്ട് പോയിൻ്റുകൾക്കിടയിൽ ഒരു രേഖാഖണ്ഡം വരയ്ക്കാൻ ഉപയോഗിക്കുന്ന ടൂൾ ഇതാണ്:",
    "options": [
      { "text": "ലൈൻ ടൂൾ (Line Tool)", "isCorrect": false },
      { "text": "റേ ടൂൾ (Ray Tool)", "isCorrect": false },
      { "text": "സെഗ്മെൻ്റ് ടൂൾ (Segment Tool)", "isCorrect": true },
      { "text": "വെക്റ്റർ ടൂൾ (Vector Tool)", "isCorrect": false }
    ]
  },
  {
    "question": "$x - y = 5$ എന്ന സമവാക്യത്തിൽ, രേഖയിലെ ഏതൊരു പോയിൻ്റിനും അതിൻ്റെ x, y കോർഡിനേറ്റുകൾ തമ്മിലുള്ള ബന്ധം ഇതാണ്:",
    "options": [
      { "text": "അവയുടെ തുക എപ്പോഴും 5 ആണ്.", "isCorrect": false },
      { "text": "അവയുടെ വ്യത്യാസം $(x - y)$ എപ്പോഴും 5 ആണ്.", "isCorrect": true },
      { "text": "അവയുടെ ഗുണനഫലം എപ്പോഴും 5 ആണ്.", "isCorrect": false },
      { "text": "അവയുടെ അനുപാതം $(x/y)$ എപ്പോഴും 5 ആണ്.", "isCorrect": false }
    ]
  },
  {
    "question": "$y = 2x$ എന്ന സമവാക്യം സൃഷ്ടിക്കുന്ന രൂപം ഇതാണ്:",
    "options": [
      { "text": "ലംബമായ രേഖ (Vertical line)", "isCorrect": false },
      { "text": "തിരശ്ചീന രേഖ (Horizontal line)", "isCorrect": false },
      { "text": "പോസിറ്റീവ് ചരിവുള്ള നേർരേഖ (Straight line with a positive slope)", "isCorrect": true },
      { "text": "പരാബോള (Parabola)", "isCorrect": false }
    ]
  },
  {
    "question": "മൗസ് ഉപയോഗിക്കാതെ (4, -2) എന്ന കോർഡിനേറ്റുകളിൽ ഒരു പോയിൻ്റ് സൃഷ്ടിക്കാൻ നിങ്ങൾ ആഗ്രഹിക്കുന്നു. ഇൻപുട്ട് ബാറിൽ നിങ്ങൾ എന്ത് ടൈപ്പ് ചെയ്യണം?",
    "options": [
      { "text": "Point(4, -2)", "isCorrect": false },
      { "text": "(4, -2)", "isCorrect": false },
      { "text": "A(4, -2)", "isCorrect": false },
      { "text": "മുകളിൽ പറഞ്ഞവയിൽ ഏതും", "isCorrect": true }
    ]
  },
  {
    "question": "നിങ്ങൾക്ക് $A(2,1)$, $B(2,7)$ എന്നീ പോയിൻ്റുകൾ ഉണ്ട്. അവയെ ബന്ധിപ്പിച്ച് ഒരു ലംബമായ രേഖാഖണ്ഡം (vertical line segment) സൃഷ്ടിക്കുന്ന കമാൻഡ് ഏതാണ്?",
    "options": [
      { "text": "Line(A, B)", "isCorrect": false },
      { "text": "Ray(A, B)", "isCorrect": false },
      { "text": "Segment(A, B)", "isCorrect": true },
      { "text": "Vector(A, B)", "isCorrect": false }
    ]
  },
  {
    "question": "ഇൻപുട്ട് ബാർ ഉപയോഗിച്ച് കേന്ദ്രം (0,0) ഉം ആരം 3 യൂണിറ്റും ആയ ഒരു വൃത്തം വരയ്ക്കാൻ നിങ്ങൾ ആഗ്രഹിക്കുന്നു. ശരിയായ സമവാക്യം ഏതാണ്?",
    "options": [
      { "text": "Circle((0,0), 3)", "isCorrect": false },
      { "text": "Circle(0, 0, 3)", "isCorrect": false },
      { "text": "x^2 + y^2 = 3", "isCorrect": false },
      { "text": "x^2 + y^2 = 9", "isCorrect": true }
    ]
  },
  {
    "question": "നിങ്ങൾ ഇൻപുട്ട് ബാറിൽ $y = 3x + 1$ എന്ന് ടൈപ്പ് ചെയ്യുന്നു. എന്ത് സൃഷ്ടിക്കപ്പെടും?",
    "options": [
      { "text": "(3, 1) എന്ന പോയിൻ്റ്", "isCorrect": false },
      { "text": "ഒരു തിരശ്ചീന രേഖ", "isCorrect": false },
      { "text": "ചരിവ് 3 ഉം y-ഇൻ്റർസെപ്റ്റ് 1 ഉം ഉള്ള ഒരു നേർരേഖ", "isCorrect": true },
      { "text": "ഒരു പരാബോള", "isCorrect": false }
    ]
  },
  {
    "question": "നിങ്ങൾ $y=2$ ഉം $x=5$ ഉം എന്ന രേഖകൾ വരച്ചു. അവയുടെ സംഗമബിന്ദുവിൻ്റെ (intersection point) കോർഡിനേറ്റുകൾ എന്തൊക്കെയാണ്?",
    "options": [
      { "text": "(2, 5)", "isCorrect": false },
      { "text": "(5, 2)", "isCorrect": true },
      { "text": "(0, 0)", "isCorrect": false },
      { "text": "(7, 7)", "isCorrect": false }
    ]
  },
  {
    "question": "(0, 4) എന്ന പോയിൻ്റിലൂടെ കടന്നുപോകുന്നതും x-അക്ഷത്തിന് സമാന്തരവുമായ ഒരു രേഖ വരയ്ക്കാൻ, നിങ്ങൾ ഏത് സമവാക്യമാണ് നൽകേണ്ടത്?",
    "options": [
      { "text": "$x = 4$", "isCorrect": false },
      { "text": "$y = 4$", "isCorrect": true },
      { "text": "$y = x + 4$", "isCorrect": false },
      { "text": "$x = 0$", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു രേഖ സൃഷ്ടിച്ച ശേഷം, ആൾജിബ്ര വ്യൂവിൽ അതിൻ്റെ സമവാക്യം $y = 0.5x + 2$ എന്ന് നിങ്ങൾ കാണുന്നു. ഇതിനർത്ഥം, രേഖ:",
    "options": [
      { "text": "y-അക്ഷത്തെ $(0, 2)$ എന്ന പോയിൻ്റിൽ മുറിച്ചുകടക്കുകയും, വലത്തോട്ട് 2 യൂണിറ്റ് പോകുമ്പോൾ 1 യൂണിറ്റ് ഉയരുകയും ചെയ്യുന്നു.", "isCorrect": true },
      { "text": "y-അക്ഷത്തെ $(0, 0.5)$ എന്ന പോയിൻ്റിൽ മുറിച്ചുകടക്കുകയും, ഓരോ 1 യൂണിറ്റിനും 2 യൂണിറ്റ് ഉയരുകയും ചെയ്യുന്നു.", "isCorrect": false },
      { "text": "$x=2$ എന്നതിലെ ഒരു ലംബമായ രേഖയാണ്.", "isCorrect": false },
      { "text": "$y=2$ എന്നതിലെ ഒരു തിരശ്ചീന രേഖയാണ്.", "isCorrect": false }
    ]
  },
  {
    "question": "ടൂളുകളൊന്നും ഉപയോഗിക്കാതെ ഇൻപുട്ട് ബാർ മാത്രം ഉപയോഗിച്ച് ഒരു ജ്യാമിതീയ നിർമ്മാണം സൃഷ്ടിക്കാൻ നിങ്ങൾ ആഗ്രഹിക്കുന്നു. താഴെ പറയുന്നവയിൽ ഏത് ശ്രേണിയാണ് സാധ്യമായത്?",
    "options": [
      { "text": "A=(1,1), B=(3,3), Line(A,B)", "isCorrect": true },
      { "text": "Segment Tool, (1,1) ൽ ക്ലിക്കുചെയ്യുക, (3,3) ൽ ക്ലിക്കുചെയ്യുക", "isCorrect": false },
      { "text": "Circle Tool, (0,0) ൽ ക്ലിക്കുചെയ്യുക, (2,0) ലേക്ക് വലിച്ചിടുക", "isCorrect": false },
      { "text": "പോയിൻ്റ് A വലിച്ചിടാൻ Move ടൂൾ ഉപയോഗിക്കുക.", "isCorrect": false }
    ]
  },
  {
    "question": "A(1,4) എന്ന പോയിൻ്റിലെ `Circle(A, 2)` എന്ന കമാൻഡ് സൃഷ്ടിക്കുന്ന വൃത്തത്തിന്:",
    "options": [
      { "text": "കേന്ദ്രബിന്ദു (2, 2) ഉം A-യിലൂടെ കടന്നുപോകുന്നതുമാണ്.", "isCorrect": false },
      { "text": "കേന്ദ്രബിന്ദു (1, 4) ഉം ആരം 2 യൂണിറ്റും ആണ്.", "isCorrect": true },
      { "text": "കേന്ദ്രബിന്ദു (0,0) ഉം വ്യാസം 4 യൂണിറ്റും ആണ്.", "isCorrect": false },
      { "text": "കേന്ദ്രബിന്ദു (2, 8) ഉം A-യിലൂടെ കടന്നുപോകുന്നതുമാണ്.", "isCorrect": false }
    ]
  },
  {
    "question": "$y = x$ ഉം $y = -x + 4$ ഉം എന്ന സമവാക്യങ്ങളുടെ വ്യവസ്ഥയുടെ പരിഹാരം ദൃശ്യവൽക്കരിക്കുന്നതിന്, നിങ്ങൾ ജിയോജിബ്രയിൽ എന്തുചെയ്യണം?",
    "options": [
      { "text": "ഇൻപുട്ട് ബാർ ഉപയോഗിച്ച് രണ്ട് സമവാക്യങ്ങളും വരയ്ക്കുകയും അവയുടെ സംഗമബിന്ദു കണ്ടെത്തുകയും ചെയ്യുക.", "isCorrect": true },
      { "text": "ആദ്യത്തെ സമവാക്യം മാത്രം വരയ്ക്കുകയും സ്ലോപ്പ് ടൂൾ ഉപയോഗിക്കുകയും ചെയ്യുക.", "isCorrect": false },
      { "text": "ഒരു ത്രികോണം വരയ്ക്കാൻ പോളിഗണൻ്റ് ടൂൾ ഉപയോഗിക്കുക.", "isCorrect": false },
      { "text": "(2,2) എന്ന സ്ഥലത്ത് ഒരു പോയിൻ്റ് വരയ്ക്കുക.", "isCorrect": false }
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
