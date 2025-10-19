document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "സ്റ്റെല്ലാറിയം (Stellarium) സോഫ്റ്റ്‌വെയറിൻ്റെ പ്രാഥമിക ലക്ഷ്യം എന്താണ്?",
    "options": [
      { "text": "ഭൂമിശാസ്ത്രപരമായ വിഭവ ഭൂപടങ്ങൾ സൃഷ്ടിക്കാൻ", "isCorrect": false },
      { "text": "ആകാശ കാഴ്ചകൾ അനുകരിക്കാനും ആകാശ ഗോളങ്ങളെ നിരീക്ഷിക്കാനും", "isCorrect": true },
      { "text": "ജ്യാമിതീയ സമവാക്യങ്ങൾ പരിഹരിക്കാൻ", "isCorrect": false },
      { "text": "മണ്ണിടിച്ചിൽ ഡാറ്റ വിശകലനം ചെയ്യാൻ", "isCorrect": false }
    ]
  },
  {
    "question": "QGIS-ൽ, മണ്ണിടിച്ചിൽ ലൊക്കേഷനുകൾക്കായി 'Latitude', 'Longitude' കോളങ്ങളുള്ള ഒരു CSV ഫയൽ നിങ്ങൾക്ക് ഉണ്ടെങ്കിൽ, അത് ഒരു ലെയറായി ചേർക്കുമ്പോൾ 'Geometry Definition' എന്തായി സജ്ജീകരിക്കണം?",
    "options": [
      { "text": "വരയുടെ കോർഡിനേറ്റുകൾ", "isCorrect": false },
      { "text": "പോളിഗണൻ്റെ കോർഡിനേറ്റുകൾ", "isCorrect": false },
      { "text": "പോയിൻ്റ് കോർഡിനേറ്റുകൾ", "isCorrect": true },
      { "text": "ജ്യാമിതി ഇല്ല", "isCorrect": false }
    ]
  },
  {
    "question": "ജിയോജിബ്രയിൽ, (5, 3) എന്ന കോർഡിനേറ്റുകളിൽ ഒരു പോയിൻ്റ് സൃഷ്ടിക്കാൻ ഇൻപുട്ട് ബാറിൽ നിങ്ങൾ ഏത് കമാൻഡാണ് ടൈപ്പ് ചെയ്യുക?",
    "options": [
      { "text": "Point(5, 3)", "isCorrect": false },
      { "text": "(5, 3)", "isCorrect": false },
      { "text": "A = (5, 3)", "isCorrect": false },
      { "text": "മുകളിൽ പറഞ്ഞവയിൽ ഏതും", "isCorrect": true }
    ]
  },
  {
    "question": "സ്റ്റെല്ലാറിയത്തിൽ അർദ്ധരാത്രിയിലെ സൂര്യനെ (Midnight Sun) നിരീക്ഷിക്കാൻ, നിങ്ങൾ ഏത് ലൊക്കേഷനാണ് തിരഞ്ഞെടുക്കേണ്ടത്?",
    "options": [
      { "text": "കോലാലംപൂർ, മലേഷ്യ", "isCorrect": false },
      { "text": "സിഡ്‌നി, ഓസ്‌ട്രേലിയ", "isCorrect": false },
      { "text": "ട്രോംസോ, നോർവേ (Tromsø, Norway)", "isCorrect": true },
      { "text": "കൊൽക്കത്ത, ഇന്ത്യ", "isCorrect": false }
    ]
  },
  {
    "question": "QGIS ൻ്റെ പശ്ചാത്തലത്തിൽ 'DEM' എന്നതിൻ്റെ പൂർണ്ണരൂപം എന്താണ്?",
    "options": [
      { "text": "ഡിജിറ്റൽ എലവേഷൻ മോഡൽ (Digital Elevation Model)", "isCorrect": true },
      { "text": "ഡാറ്റാ ഇവാലുവേഷൻ മെത്തേഡ്", "isCorrect": false },
      { "text": "ഡിസാസ്റ്റർ എമർജൻസി മാനേജ്‌മെൻ്റ്", "isCorrect": false },
      { "text": "ഡിജിറ്റൽ എൻവയോൺമെൻ്റൽ മാപ്പ്", "isCorrect": false }
    ]
  },
  {
    "question": "$x = 4$ എന്ന സമവാക്യം ജിയോജിബ്രയിൽ പ്ലോട്ട് ചെയ്താൽ ലഭിക്കുന്ന രേഖ:",
    "options": [
      { "text": "തിരശ്ചീനം", "isCorrect": false },
      { "text": "Y-അക്ഷത്തിന് സമാന്തരം", "isCorrect": true },
      { "text": "45-ഡിഗ്രി കോണിൽ", "isCorrect": false },
      { "text": "വളഞ്ഞത്", "isCorrect": false }
    ]
  },
  {
    "question": "സ്റ്റെല്ലാറിയത്തിൽ തിരയൽ വിൻഡോ (Search Window) തുറക്കാൻ ഉപയോഗിക്കുന്ന കീ ഏതാണ്?",
    "options": [
      { "text": "F3", "isCorrect": true },
      { "text": "F4", "isCorrect": false },
      { "text": "F5", "isCorrect": false },
      { "text": "F6", "isCorrect": false }
    ]
  },
  {
    "question": "നിങ്ങൾ QGIS-ലേക്ക് ഒരു DEM ചേർത്തു, പക്ഷേ ചരിവ് മാപ്പ് ഒരൊറ്റ നിറമാണ്. വ്യത്യസ്ത ചരിവ് കോണുകൾ ദൃശ്യപരമായി വേർതിരിച്ചറിയാൻ, ലെയർ പ്രോപ്പർട്ടികളിൽ നിങ്ങൾ എന്ത് മാറ്റണം?",
    "options": [
      { "text": "ട്രാൻസ്പരൻസി (Transparency)", "isCorrect": false },
      { "text": "കോർഡിനേറ്റ് റെഫറൻസ് സിസ്റ്റം (CRS)", "isCorrect": false },
      { "text": "സിംബോളജി 'Singleband pseudocolor' എന്ന് മാറ്റുക", "isCorrect": true },
      { "text": "ലെയറിൻ്റെ പേര്", "isCorrect": false }
    ]
  },
  {
    "question": "ജിയോജിബ്രയിൽ, നിങ്ങൾക്ക് $A(1,2)$ ഉം $B(4,6)$ ഉം എന്നീ പോയിൻ്റുകൾ ഉണ്ട്. അവയ്ക്കിടയിൽ ഒരു രേഖാഖണ്ഡം സൃഷ്ടിക്കുന്ന കമാൻഡ് ഏതാണ്?",
    "options": [
      { "text": "Line(A, B)", "isCorrect": false },
      { "text": "Segment(A, B)", "isCorrect": true },
      { "text": "Connect(A, B)", "isCorrect": false },
      { "text": "Draw(A, B)", "isCorrect": false }
    ]
  },
  {
    "question": "അന്താരാഷ്ട്ര ദുരന്തസാധ്യത കുറയ്ക്കൽ ദിനം (International Day for Disaster Risk Reduction) ആചരിക്കുന്നത്:",
    "options": [
      { "text": "ജൂൺ 5", "isCorrect": false },
      { "text": "ഒക്ടോബർ 13", "isCorrect": true },
      { "text": "ഏപ്രിൽ 22", "isCorrect": false },
      { "text": "ഡിസംബർ 10", "isCorrect": false }
    ]
  },
  {
    "question": "സ്റ്റെല്ലാറിയത്തിൽ, ആകാശഗോളങ്ങളുടെ ചലനം ഒരു അനിമേഷനായി കാണുന്നതിന് സിമുലേഷൻ വേഗത്തിലാക്കാൻ നിങ്ങളെ അനുവദിക്കുന്ന ഉപകരണം ഏതാണ്?",
    "options": [
      { "text": "സാധാരണ സമയ നിരക്ക് സജ്ജമാക്കുക (K)", "isCorrect": false },
      { "text": "സമയ വേഗത വർദ്ധിപ്പിക്കുക (L)", "isCorrect": true },
      { "text": "ലൊക്കേഷൻ വിൻഡോ (F6)", "isCorrect": false },
      { "text": "തിരയൽ വിൻഡോ (F3)", "isCorrect": false }
    ]
  },
  {
    "question": "താഴെ പറയുന്നവയിൽ സൗജന്യവും ഓപ്പൺ സോഴ്‌സുമായ ഭൗമ വിവര സംവിധാന (GIS) സോഫ്റ്റ്‌വെയർ ഏതാണ്?",
    "options": [
      { "text": "ArcGIS", "isCorrect": false },
      { "text": "Google Earth Pro", "isCorrect": false },
      { "text": "ക്വാണ്ടം GIS (QGIS)", "isCorrect": true },
      { "text": "MapInfo Pro", "isCorrect": false }
    ]
  },
  {
    "question": "നിങ്ങൾ $y = x^2$ എന്ന് ജിയോജിബ്ര ഇൻപുട്ട് ബാറിൽ ടൈപ്പ് ചെയ്യുന്നു. എന്ത് രൂപമാണ് സൃഷ്ടിക്കപ്പെടുക?",
    "options": [
      { "text": "ഒരു നേർരേഖ", "isCorrect": false },
      { "text": "ഒരു വൃത്തം", "isCorrect": false },
      { "text": "ഒരു പരാബോള", "isCorrect": true },
      { "text": "ഒരു ത്രികോണം", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു ദുരന്ത സാധ്യത മേഖലാ ഭൂപടത്തിൻ്റെ (Disaster Risk Area Map) പ്രധാന ധർമ്മം എന്താണ്?",
    "options": [
      { "text": "ഭൂകമ്പങ്ങൾ ഉണ്ടാകുന്ന കൃത്യമായ സമയം പ്രവചിക്കാൻ", "isCorrect": false },
      { "text": "തത്സമയ കാലാവസ്ഥാ രീതികൾ കാണിക്കാൻ", "isCorrect": false },
      { "text": "ഒരു പ്രദേശത്തിൻ്റെ ദുർബലതകളും സാധ്യതയുള്ള അപകടങ്ങളും എടുത്തു കാണിക്കാൻ", "isCorrect": true },
      { "text": "രാഷ്ട്രീയ അതിർത്തികൾ പ്രദർശിപ്പിക്കാൻ", "isCorrect": false }
    ]
  },
  {
    "question": "സ്റ്റെല്ലാറിയത്തിൽ, നിങ്ങൾക്ക് ചന്ദ്രൻ്റെ ഉപരിതലത്തിൽ നിന്ന് ആകാശം കാണണമെങ്കിൽ, ആദ്യപടി എന്താണ്?",
    "options": [
      { "text": "തിരയൽ വിൻഡോ (F3) ഉപയോഗിച്ച് \"Moon\" എന്ന് ടൈപ്പ് ചെയ്യുക", "isCorrect": false },
      { "text": "ലൊക്കേഷൻ വിൻഡോ (F6) തുറന്ന് പ്ലാനറ്റിന് താഴെ \"Moon\" തിരഞ്ഞെടുക്കുക", "isCorrect": true },
      { "text": "തിയ്യതി/സമയം വിൻഡോ (F5) തുറന്ന് ലൊക്കേഷൻ \"Moon\" എന്ന് സജ്ജീകരിക്കുക", "isCorrect": false },
      { "text": "ആകാശവും കാഴ്ചാ ഓപ്ഷനുകളും (F4) ഉപയോഗിച്ച് \"Moon\" ലാൻഡ്സ്കേപ്പ് തിരഞ്ഞെടുക്കുക", "isCorrect": false }
    ]
  },
  {
    "question": "നിങ്ങൾക്ക് QGIS-ൽ ഒരു ചരിവ് മാപ്പ് ഉണ്ട്, അതിന് തലക്കെട്ടും ലെജൻഡും ഉള്ള ഒരു പ്രിൻ്റ് ചെയ്യാവുന്ന ലേഔട്ട് സൃഷ്ടിക്കാൻ നിങ്ങൾ ആഗ്രഹിക്കുന്നു. ഏത് സവിശേഷതയാണ് ഉപയോഗിക്കേണ്ടത്?",
    "options": [
      { "text": "പ്രോസസ്സിംഗ് ടൂൾബോക്സ്", "isCorrect": false },
      { "text": "ബ്രൗസർ പാനൽ", "isCorrect": false },
      { "text": "പുതിയ പ്രിൻ്റ് ലേഔട്ട് (New Print Layout)", "isCorrect": true },
      { "text": "ഡാറ്റാ സോഴ്സ് മാനേജർ", "isCorrect": false }
    ]
  },
  {
    "question": "\"GeoGebra\" എന്ന പേര് ഏത് രണ്ട് വാക്കുകൾ ചേർന്നാണ് ഉണ്ടായത്?",
    "options": [
      { "text": "ജ്യോഗ്രഫി, ജിയോളജി", "isCorrect": false },
      { "text": "ജ്യാമിതി, ബീജഗണിതം", "isCorrect": true },
      { "text": "ജ്യോഗ്രഫി, ബീജഗണിതം", "isCorrect": false },
      { "text": "ജ്യാമിതി, ജെബ്ര", "isCorrect": false }
    ]
  },
  {
    "question": "സ്റ്റെല്ലാറിയത്തിൽ, നിങ്ങൾ ജൂൺ 21 ന് ഉത്തരധ്രുവത്തിലാണെങ്കിൽ, സൂര്യൻ്റെ പാത എങ്ങനെയായിരിക്കും?",
    "options": [
      { "text": "കിഴക്ക് ഉദിക്കുകയും പടിഞ്ഞാറ് അസ്തമിക്കുകയും ചെയ്യുന്നു", "isCorrect": false },
      { "text": "24 മണിക്കൂറും സ്ഥിരമായ ഉയരത്തിൽ ചക്രവാളത്തിന് ചുറ്റും കറങ്ങുന്നു", "isCorrect": true },
      { "text": "ഉച്ചയ്ക്ക് നേരിട്ട് മുകളിലായിരിക്കും", "isCorrect": false },
      { "text": "ഒട്ടും ദൃശ്യമാകില്ല", "isCorrect": false }
    ]
  },
  {
    "question": "QGIS-ൽ, മാപ്പിലെ ഒരു മണ്ണിടിച്ചിൽ പോയിൻ്റിൽ ക്ലിക്കുചെയ്ത് അതിൻ്റെ തീയതിയും കാരണവും കാണാൻ നിങ്ങൾ ഏത് ടൂളാണ് ഉപയോഗിക്കുക?",
    "options": [
      { "text": "ആട്രിബ്യൂട്ട് ടേബിൾ തുറക്കുക", "isCorrect": false },
      { "text": "Identify Features (ഫീച്ചറുകൾ തിരിച്ചറിയുക)", "isCorrect": true },
      { "text": "അളക്കാനുള്ള ഉപകരണം (Measure Tool)", "isCorrect": false },
      { "text": "ഫീച്ചറുകൾ തിരഞ്ഞെടുക്കുക (Select Features)", "isCorrect": false }
    ]
  },
  {
    "question": "ജിയോജിബ്രയിൽ, നിങ്ങൾ ഒരു രേഖ വരച്ചു. ആൾജിബ്ര വ്യൂവിൽ അതിൻ്റെ സമവാക്യം $y = 2x + 1$ ആണ്. ഇതിനർത്ഥം, രേഖ:",
    "options": [
      { "text": "y-അക്ഷത്തെ $(0,1)$ ൽ മുറിച്ചുകടക്കുകയും ചരിവ് 2 ആയിരിക്കുകയും ചെയ്യുന്നു", "isCorrect": true },
      { "text": "y-അക്ഷത്തെ $(0,2)$ ൽ മുറിച്ചുകടക്കുകയും ചരിവ് 1 ആയിരിക്കുകയും ചെയ്യുന്നു", "isCorrect": false },
      { "text": "$x=1$ എന്നതിലെ ഒരു ലംബമായ രേഖയാണ്", "isCorrect": false },
      { "text": "$y=1$ എന്നതിലെ ഒരു തിരശ്ചീന രേഖയാണ്", "isCorrect": false }
    ]
  },
  {
    "question": "സ്റ്റെല്ലാറിയത്തിൽ ഏത് കീ ആണ് തീയതി/സമയം വിൻഡോ തുറക്കുന്നത്?",
    "options": [
      { "text": "F3", "isCorrect": false },
      { "text": "F4", "isCorrect": false },
      { "text": "F5", "isCorrect": true },
      { "text": "F6", "isCorrect": false }
    ]
  },
  {
    "question": "അർദ്ധരാത്രിയിലെ സൂര്യനുമായി ബന്ധപ്പെട്ട 'വൈറ്റ് നൈറ്റ് ഫെസ്റ്റിവൽ' പ്രശസ്തമായി ആഘോഷിക്കപ്പെടുന്നത് എവിടെയാണ്?",
    "options": [
      { "text": "ട്രോംസോ, നോർവേ", "isCorrect": false },
      { "text": "സെൻ്റ് പീറ്റേഴ്സ്ബർഗ്, റഷ്യ (St. Petersburg, Russia)", "isCorrect": true },
      { "text": "ആങ്കറേജ്, യുഎസ്എ", "isCorrect": false },
      { "text": "ഹെൽസിങ്കി, ഫിൻലാൻഡ്", "isCorrect": false }
    ]
  },
  {
    "question": "നിങ്ങൾക്ക് ജിയോജിബ്രയിൽ കേന്ദ്രം (0,0) ഉം ആരം 5 ഉം ഉള്ള ഒരു വൃത്തം വരയ്ക്കണം. നിങ്ങൾ ഏത് സമവാക്യമാണ് ടൈപ്പ് ചെയ്യേണ്ടത്?",
    "options": [
      { "text": "Circle((0,0), 5)", "isCorrect": false },
      { "text": "x^2 + y^2 = 5", "isCorrect": false },
      { "text": "x^2 + y^2 = 25", "isCorrect": true },
      { "text": "y = 5x", "isCorrect": false }
    ]
  },
  {
    "question": "ഇന്ത്യൻ സ്കൂളുകൾക്കായുള്ള ഔദ്യോഗിക ഓൺലൈൻ GIS പോർട്ടൽ കണ്ടെത്താൻ, നിങ്ങൾ തിരയേണ്ടത്:",
    "options": [
      { "text": "ക്വാണ്ടം GIS", "isCorrect": false },
      { "text": "സ്കൂൾ GIS (School GIS)", "isCorrect": true },
      { "text": "ഗ്രാസ് GIS", "isCorrect": false },
      { "text": "ArcGIS Online", "isCorrect": false }
    ]
  },
  {
    "question": "QGIS-ൽ, പ്രോസസ്സിംഗ് ടൂൾബോക്സ് പ്രധാനമായും എന്തിനാണ് ഉപയോഗിക്കുന്നത്?",
    "options": [
      { "text": "ഇൻ്റർഫേസിൻ്റെ നിറം മാറ്റാൻ", "isCorrect": false },
      { "text": "മാപ്പുകൾക്ക് തലക്കെട്ടുകൾ ചേർക്കാൻ", "isCorrect": false },
      { "text": "ഭൗമ വിവര വിശകലന അൽഗോരിതങ്ങൾ പ്രവർത്തിപ്പിക്കാൻ", "isCorrect": true },
      { "text": "ഉപയോക്തൃ ലോഗിനുകൾ കൈകാര്യം ചെയ്യാൻ", "isCorrect": false }
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
