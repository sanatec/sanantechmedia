document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "സ്റ്റെല്ലാരിയം പ്രധാനമായും എന്തിനെയാണ് അനുകരിക്കാൻ (simulate) രൂപകൽപ്പന ചെയ്തിരിക്കുന്നത്?",
    "options": [
      { "text": "തന്മാത്രാ ഘടനകൾ", "isCorrect": false },
      { "text": "ഭൂമിശാസ്ത്രപരമായ ഭൂപ്രകൃതി", "isCorrect": false },
      { "text": "ആകാശത്തിൻ്റെ കാഴ്ചകളും ആകാശഗോളങ്ങളും", "isCorrect": true },
      { "text": "ആൾജിബ്രായിക് സമവാക്യങ്ങൾ", "isCorrect": false }
    ]
  },
  {
    "question": "അർദ്ധരാത്രിയിലും സൂര്യനെ കാണാൻ കഴിയുന്ന പ്രതിഭാസം അനുഭവപ്പെടുന്ന പ്രദേശങ്ങൾ:",
    "options": [
      { "text": "ഭൂമദ്ധ്യരേഖയ്ക്ക് സമീപമുള്ളവ", "isCorrect": false },
      { "text": "ആർട്ടിക്, അൻ്റാർട്ടിക് വൃത്തങ്ങൾക്കപ്പുറമുള്ളവ", "isCorrect": true },
      { "text": "എല്ലാ തീരദേശ നഗരങ്ങളിലും", "isCorrect": false },
      { "text": "ദക്ഷിണാർദ്ധഗോളത്തിൽ മാത്രം", "isCorrect": false }
    ]
  },
  {
    "question": "സ്റ്റെല്ലാരിയത്തിൽ ലൊക്കേഷൻ വിൻഡോ (Location Window) തുറക്കുന്ന കീ ഏതാണ്?",
    "options": [
      { "text": "F3", "isCorrect": false },
      { "text": "F4", "isCorrect": false },
      { "text": "F5", "isCorrect": false },
      { "text": "F6", "isCorrect": true }
    ]
  },
  {
    "question": "സ്റ്റെല്ലാരിയത്തിൽ ഡേറ്റ്/ടൈം വിൻഡോ (Date/Time Window) തുറക്കുന്ന കീ ഏതാണ്?",
    "options": [
      { "text": "F3", "isCorrect": false },
      { "text": "F4", "isCorrect": false },
      { "text": "F5", "isCorrect": true },
      { "text": "F6", "isCorrect": false }
    ]
  },
  {
    "question": "അർദ്ധരാത്രിയിലെ സൂര്യനെ നിരീക്ഷിക്കാൻ ഉപയോഗിക്കുന്ന ട്രോംസോ (Tromso) നഗരം സ്ഥിതി ചെയ്യുന്നത് എവിടെയാണ്?",
    "options": [
      { "text": "ഫിൻലാൻഡ്", "isCorrect": false },
      { "text": "റഷ്യ", "isCorrect": false },
      { "text": "നോർവേ", "isCorrect": true },
      { "text": "കാനഡ", "isCorrect": false }
    ]
  },
  {
    "question": "\"വൈറ്റ് നൈറ്റ് ഫെസ്റ്റിവൽ\" (White Night Festival) പ്രസിദ്ധമായി ആഘോഷിക്കപ്പെടുന്നത് എവിടെയാണ്?",
    "options": [
      { "text": "ട്രോംസോ, നോർവേ", "isCorrect": false },
      { "text": "സെൻ്റ് പീറ്റേഴ്‌സ്ബർഗ്, റഷ്യ", "isCorrect": true },
      { "text": "ആങ്കറേജ്, യുഎസ്എ", "isCorrect": false },
      { "text": "സിഡ്‌നി, ഓസ്‌ട്രേലിയ", "isCorrect": false }
    ]
  },
  {
    "question": "ഉത്തരാർദ്ധഗോളത്തിലെ ഗ്രീഷ്മ അയനാന്തത്തിൽ (Summer Solstice - ഏകദേശം ജൂൺ 21 ന്) സൂര്യൻ നേർക്ക് മുകളിൽ വരുന്നത് എവിടെയാണ്?",
    "options": [
      { "text": "ഭൂമദ്ധ്യരേഖയിൽ", "isCorrect": false },
      { "text": "മകരരേഖയിൽ (Tropic of Capricorn)", "isCorrect": false },
      { "text": "കർക്കടകരേഖയിൽ (Tropic of Cancer)", "isCorrect": true },
      { "text": "ഉത്തരധ്രുവത്തിൽ", "isCorrect": false }
    ]
  },
  {
    "question": "സ്റ്റെല്ലാരിയത്തിൽ സെർച്ച് വിൻഡോ (Search Window) തുറക്കുന്ന കീ ഏതാണ്?",
    "options": [
      { "text": "F3", "isCorrect": true },
      { "text": "F4", "isCorrect": false },
      { "text": "F5", "isCorrect": false },
      { "text": "F6", "isCorrect": false }
    ]
  },
  {
    "question": "സ്റ്റെല്ലാരിയത്തിലെ \"സമയ വേഗത കൂട്ടുക [L]\" ('Increase time speed [L]') എന്ന ഫംഗ്ഷൻ എന്തിനാണ് നിങ്ങളെ അനുവദിക്കുന്നത്?",
    "options": [
      { "text": "ആകാശഗോളങ്ങളുടെ ചലനം കാണാൻ സിമുലേഷൻ വേഗത്തിലാക്കാൻ", "isCorrect": true },
      { "text": "ഒരു ആകാശഗോളത്തിലേക്ക് വേഗത്തിൽ സൂം ഇൻ ചെയ്യാൻ", "isCorrect": false },
      { "text": "അടുത്ത ദിവസത്തേക്ക് വേഗത്തിൽ പോകാൻ", "isCorrect": false },
      { "text": "നക്ഷത്രങ്ങളുടെ തിളക്കം കൂട്ടാൻ", "isCorrect": false }
    ]
  },
  {
    "question": "ഉത്തരാർദ്ധഗോളത്തിലെ ഗ്രീഷ്മ അയനാന്തത്തിൻ്റെ (Summer Solstice) പ്രത്യേകത എന്താണ്?",
    "options": [
      { "text": "ഏറ്റവും കുറഞ്ഞ പകലും കൂടിയ രാത്രിയും", "isCorrect": false },
      { "text": "പകലും രാത്രിയും തുല്യം", "isCorrect": false },
      { "text": "ഏറ്റവും കൂടിയ പകലും കുറഞ്ഞ രാത്രിയും", "isCorrect": true },
      { "text": "സൂര്യൻ നേരെ പടിഞ്ഞാറ് ഉദിക്കുന്നത്", "isCorrect": false }
    ]
  },
  {
    "question": "സ്റ്റെല്ലാരിയത്തിലെ സാഹചര്യത്തിൽ, 'FOV' എന്നതിൻ്റെ പൂർണ്ണരൂപം എന്താണ്?",
    "options": [
      { "text": "Focus on View", "isCorrect": false },
      { "text": "Field of Vision", "isCorrect": false },
      { "text": "Field of View (കാഴ്ചയുടെ മണ്ഡലം)", "isCorrect": true },
      { "text": "Frequency of Vibration", "isCorrect": false }
    ]
  },
  {
    "question": "സ്റ്റെല്ലാരിയത്തിൽ സമയം വേഗത്തിലാക്കിയ ശേഷം സാധാരണ നിലയിലേക്ക് തിരികെ കൊണ്ടുവരാൻ, നിങ്ങൾ ഏത് കീയാണ് അമർത്തേണ്ടത്?",
    "options": [
      { "text": "L", "isCorrect": false },
      { "text": "K", "isCorrect": true },
      { "text": "F5", "isCorrect": false },
      { "text": "സ്പേസ്ബാർ", "isCorrect": false }
    ]
  },
  {
    "question": "'ധ്രുവരാത്രി' (Polar Night) എന്നാൽ:",
    "options": [
      { "text": "24 മണിക്കൂർ സൂര്യൻ അസ്തമിക്കാത്ത കാലയളവ്.", "isCorrect": false },
      { "text": "പകൽ സമയത്ത് ചന്ദ്രനെ കാണാൻ കഴിയുന്നത്.", "isCorrect": false },
      { "text": "സൂര്യൻ ചക്രവാളത്തിന് മുകളിൽ ഉദിക്കാത്ത കാലയളവ്.", "isCorrect": true },
      { "text": "തുടർച്ചയായ മഴ ലഭിക്കുന്നത്.", "isCorrect": false }
    ]
  },
  {
    "question": "പാഠഭാഗത്തെ അടിസ്ഥാനമാക്കി, \"ആർട്ടിക് പ്രദേശത്തേക്കുള്ള കവാടം\" ('gateway to the Arctic') എന്നറിയപ്പെടുന്ന നഗരം ഏതാണ്?",
    "options": [
      { "text": "ആങ്കറേജ്", "isCorrect": false },
      { "text": "തൽമാഖ്", "isCorrect": false },
      { "text": "ട്രോംസോ", "isCorrect": true },
      { "text": "ഓസ്ലോ", "isCorrect": false }
    ]
  },
  {
    "question": "സ്റ്റെല്ലാരിയത്തിൽ, 'NE' എന്ന ദിശ സൂചിപ്പിക്കുന്നത്:",
    "options": [
      { "text": "North East (വടക്ക് കിഴക്ക്)", "isCorrect": true },
      { "text": "New Earth", "isCorrect": false },
      { "text": "Northern Eclipse", "isCorrect": false },
      { "text": "Neutral Elevation", "isCorrect": false }
    ]
  },
  {
    "question": "ചന്ദ്രൻ്റെ ഉപരിതലത്തിൽ നിന്ന് സൂര്യൻ്റെ പാത നിരീക്ഷിക്കാൻ നിങ്ങൾ ആഗ്രഹിക്കുന്നു. സ്റ്റെല്ലാരിയത്തിലെ ശരിയായ ക്രമം ഏതാണ്?",
    "options": [
      { "text": "ലൊക്കേഷൻ വിൻഡോ (F6) തുറക്കുക → പ്ലാനറ്റിന് (Planet) താഴെ 'Moon' തിരഞ്ഞെടുക്കുക → ഒരു ലൊക്കേഷൻ തിരഞ്ഞെടുക്കുക.", "isCorrect": true },
      { "text": "സെർച്ച് വിൻഡോ (F3) തുറക്കുക → 'Moon' എന്ന് ടൈപ്പ് ചെയ്യുക → Enter അമർത്തുക.", "isCorrect": false },
      { "text": "ഡേറ്റ്/ടൈം വിൻഡോ (F5) തുറക്കുക → ലൊക്കേഷൻ 'Moon' എന്ന് സജ്ജമാക്കുക.", "isCorrect": false },
      { "text": "സ്കൈ ആൻഡ് വ്യൂവിംഗ് ഓപ്ഷൻസ് (F4) തുറക്കുക → ലാൻഡ്സ്കേപ്പ് ടാബിൽ നിന്ന് 'Moon' തിരഞ്ഞെടുക്കുക.", "isCorrect": false }
    ]
  },
  {
    "question": "നിങ്ങൾ നിങ്ങളുടെ ലൊക്കേഷൻ ട്രോംസോ ആയി സജ്ജമാക്കി, പക്ഷേ ജൂൺ 21 അർദ്ധരാത്രിയിൽ ആകാശം ഇരുണ്ടിരിക്കുന്നു. ഇതിനുള്ള സാധ്യതയുള്ള കാരണം എന്താണ്?",
    "options": [
      { "text": "സമയം 12:00 AM ന് പകരം 12:00 PM എന്ന് സജ്ജീകരിച്ചിരിക്കുന്നു.", "isCorrect": false },
      { "text": "വർഷം തെറ്റായി സജ്ജീകരിച്ചിരിക്കുന്നു.", "isCorrect": true },
      { "text": "'അന്തരീക്ഷം' (Atmosphere) റെൻഡറിംഗ് ഓഫാക്കിയിരിക്കുന്നു.", "isCorrect": false },
      { "text": "ലൊക്കേഷൻ അക്ഷാംശം ആർട്ടിക് സർക്കിളിൻ്റെ തെക്ക് ഭാഗത്താണ്.", "isCorrect": false }
    ]
  },
  {
    "question": "സൂര്യനെ തിരഞ്ഞതിന് ശേഷം, അതിനെ ആകാശത്ത് കാണുന്നില്ല. നിങ്ങൾ ആദ്യം എന്തുചെയ്യണം?",
    "options": [
      { "text": "സ്റ്റെല്ലാരിയം അടച്ച് വീണ്ടും തുറക്കുക.", "isCorrect": false },
      { "text": "സമയം രാത്രിയിലേക്ക് സജ്ജീകരിച്ചിട്ടുണ്ടോയെന്ന് പരിശോധിക്കുക.", "isCorrect": true },
      { "text": "'സമയ വേഗത കൂട്ടുക [L]' ഫംഗ്ഷൻ ഉപയോഗിക്കുക.", "isCorrect": false },
      { "text": "മൗസ് സ്ക്രോൾ വീൽ ഉപയോഗിച്ച് സൂം ഔട്ട് ചെയ്യുക.", "isCorrect": false }
    ]
  },
  {
    "question": "നിങ്ങളുടെ നിലവിലെ നിരീക്ഷണ സ്ഥലത്തിൻ്റെ കൃത്യമായ കോർഡിനേറ്റുകൾ (അക്ഷാംശം, രേഖാംശം) നിങ്ങൾ കണ്ടെത്തേണ്ടതുണ്ട്. ഏത് വിൻഡോയാണ് നിങ്ങൾ പരിശോധിക്കേണ്ടത്?",
    "options": [
      { "text": "സെർച്ച് വിൻഡോ (F3)", "isCorrect": false },
      { "text": "ഡേറ്റ്/ടൈം വിൻഡോ (F5)", "isCorrect": false },
      { "text": "ലൊക്കേഷൻ വിൻഡോ (F6)", "isCorrect": true },
      { "text": "സ്കൈ ആൻഡ് വ്യൂവിംഗ് ഓപ്ഷൻസ് വിൻഡോ (F4)", "isCorrect": false }
    ]
  },
  {
    "question": "നിങ്ങളുടെ സ്ഥലത്ത് നിന്ന് സൂര്യൻ്റെ ചലനം വേഗത്തിൽ ആനിമേറ്റ് ചെയ്യാൻ, നിങ്ങൾ എന്തുചെയ്യണം?",
    "options": [
      { "text": "ഡേറ്റ്/ടൈം വിൻഡോയിൽ (F5) സമയം തുടർച്ചയായി മാറ്റുക.", "isCorrect": false },
      { "text": "**'L' കീ മൂന്ന് തവണ അമർത്തുക**.", "isCorrect": true },
      { "text": "സൂര്യനെ തിരയുകയും 'Enter' അമർത്തുകയും ചെയ്യുക.", "isCorrect": false },
      { "text": "ലൊക്കേഷൻ ആവർത്തിച്ച് മാറ്റുക.", "isCorrect": false }
    ]
  },
  {
    "question": "നിങ്ങൾ ഒരു സ്ഥലത്താണ്, അർദ്ധരാത്രി സൂര്യൻ (midnight sun) ദൃശ്യമാണോ എന്ന് കാണണമെങ്കിൽ, ഉത്തരാർദ്ധഗോളത്തിൽ അത് കാണാൻ ഏറ്റവും നല്ല സാധ്യതയുള്ള തീയതി ഏതാണ്?",
    "options": [
      { "text": "ഡിസംബർ 22", "isCorrect": false },
      { "text": "മാർച്ച് 21", "isCorrect": false },
      { "text": "ജൂൺ 21 (ഗ്രീഷ്മ അയനാന്തം)", "isCorrect": true },
      { "text": "സെപ്റ്റംബർ 23", "isCorrect": false }
    ]
  },
  {
    "question": "നിങ്ങൾ സൂര്യനെ കണ്ടെത്തി, പക്ഷേ അത് നിശ്ചലമായി കാണപ്പെടുന്നു. ഏതാനും മണിക്കൂറുകളായി അതിൻ്റെ പാത കാണാൻ ഏത് ടൂളാണ് നിങ്ങളെ സഹായിക്കുക?",
    "options": [
      { "text": "ഐഡൻ്റിഫൈ ഫീച്ചേഴ്സ് ടൂൾ.", "isCorrect": false },
      { "text": "**സമയ വേഗത കൂട്ടുക (L) ഫംഗ്ഷൻ**.", "isCorrect": true },
      { "text": "റീസെറ്റ് ലൊക്കേഷൻ ലിസ്റ്റ് ബട്ടൺ.", "isCorrect": false },
      { "text": "സൂം ടൂൾ.", "isCorrect": false }
    ]
  },
  {
    "question": "സൂര്യനല്ലാത്ത മറ്റൊരു ആകാശഗോളം, ഉദാഹരണത്തിന് ശുക്രൻ (Venus) നിരീക്ഷിക്കാൻ നിങ്ങൾ ആഗ്രഹിക്കുന്നു. ശരിയായ നടപടിക്രമം എന്താണ്?",
    "options": [
      { "text": "ലൊക്കേഷൻ വിൻഡോ (F6) ഉപയോഗിച്ച് ഗ്രഹങ്ങളുടെ പട്ടികയിൽ നിന്ന് ശുക്രനെ തിരഞ്ഞെടുക്കുക.", "isCorrect": false },
      { "text": "**സെർച്ച് വിൻഡോ (F3) ഉപയോഗിച്ച് \"Venus\" എന്ന് ടൈപ്പ് ചെയ്യുക.**", "isCorrect": true },
      { "text": "ഡേറ്റ്/ടൈം വിൻഡോ (F5) ഉപയോഗിച്ച് ടാർഗെറ്റ് ശുക്രനായി സജ്ജമാക്കുക.", "isCorrect": false },
      { "text": "സ്കൈ ആൻഡ് വ്യൂവിംഗ് ഓപ്ഷൻസ് (F4) ഉപയോഗിച്ച് ഗ്രഹങ്ങൾ പ്രവർത്തനക്ഷമമാക്കുക.", "isCorrect": false }
    ]
  },
  {
    "question": "പാഠഭാഗത്തെ അടിസ്ഥാനമാക്കി, നിങ്ങൾ ഡിസംബർ 22 ന് ഓസ്‌ട്രേലിയയിലെ ആലീസ് സ്പ്രിംഗ്‌സിൽ (ദക്ഷിണാർദ്ധഗോളത്തിൽ) ആയിരുന്നെങ്കിൽ, നിങ്ങൾ എന്ത് നിരീക്ഷിക്കാൻ സാധ്യതയുണ്ട്?",
    "options": [
      { "text": "വർഷത്തിലെ ഏറ്റവും കുറഞ്ഞ പകൽ.", "isCorrect": false },
      { "text": "വർഷത്തിലെ ഏറ്റവും കൂടിയ പകൽ (ദക്ഷിണ അയനാന്തം).", "isCorrect": true },
      { "text": "അർദ്ധരാത്രി സൂര്യൻ.", "isCorrect": false },
      { "text": "ഒരു ധ്രുവരാത്രി.", "isCorrect": false }
    ]
  },
  {
    "question": "സ്റ്റെല്ലാരിയത്തിൽ ഒരു ആകാശഗോളം സ്ഥിതിചെയ്യുന്ന ദിശ (ഉദാഹരണത്തിന്, വടക്ക്, തെക്ക്-കിഴക്ക്) സ്ഥിരീകരിക്കാൻ, നിങ്ങൾ എന്തുചെയ്യണം?",
    "options": [
      { "text": "സെർച്ച് വിൻഡോയിലെ വിവരങ്ങൾ നോക്കുക.", "isCorrect": false },
      { "text": "**സ്ക്രീനിലെ പ്രധാന ദിശാസൂചനകൾ (cardinal direction indicators) പരിശോധിക്കുകയും ആവശ്യമെങ്കിൽ സൂം ഇൻ/ഔട്ട് ചെയ്യുകയും ചെയ്യുക.**", "isCorrect": true },
      { "text": "ലൊക്കേഷൻ വിൻഡോയിലെ ഡാറ്റ വായിക്കുക.", "isCorrect": false },
      { "text": "ഡേറ്റ്/ടൈം വിൻഡോയിലെ സമയം ശ്രദ്ധിക്കുക.", "isCorrect": false }
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
