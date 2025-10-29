document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "സ്‌ക്രാച്ചിൽ, ഗെയിമുകളിലോ ആനിമേഷനുകളിലോ ഉൾപ്പെടുത്തേണ്ട കഥാപാത്രങ്ങളെയോ (characters) വസ്തുക്കളെയോ എന്ത് വിളിക്കുന്നു?",
    "options": [
      { "text": "Assets", "isCorrect": false },
      { "text": "Costumes", "isCorrect": false },
      { "text": "Blocks", "isCorrect": false },
      { "text": "Sprites", "isCorrect": true }
    ]
  },
  {
    "question": "സ്‌ക്രാച്ചിൽ ഒരു ഗെയിം ഉണ്ടാക്കുമ്പോൾ **Stage**-ൻ്റെ പ്രാഥമിക ധർമ്മം എന്താണ്?",
    "options": [
      { "text": "ഒരു സ്പ്രൈറ്റിനായുള്ള കോഡിംഗ് ബ്ലോക്കുകൾ സൂക്ഷിക്കാൻ", "isCorrect": false },
      { "text": "കഥാപാത്രങ്ങളുടെ പെരുമാറ്റം നിർവചിക്കാൻ", "isCorrect": false },
      { "text": "ഗെയിം വേരിയബിളുകൾ സംഭരിക്കാൻ", "isCorrect": false },
      { "text": "ഗെയിം പ്രവർത്തിക്കുന്നതിനുള്ള പശ്ചാത്തലമായി (Background) വർത്തിക്കാൻ", "isCorrect": true }
    ]
  },
  {
    "question": "ഒരു ഗെയിമിൻ്റെ വിഷ്വൽ, ഓഡിറ്ററി, പ്രവർത്തനപരമായ വശങ്ങൾ സൃഷ്ടിക്കാനും മെച്ചപ്പെടുത്താനും ഉപയോഗിക്കുന്ന ചിത്രങ്ങൾ, ആനിമേഷനുകൾ, സ്ക്രിപ്റ്റുകൾ എന്നിവയുൾപ്പെടെയുള്ള എല്ലാ റിസോഴ്സുകളെയും ചേർത്ത് എന്ത് വിളിക്കുന്നു?",
    "options": [
      { "text": "Sprite Sheets", "isCorrect": false },
      { "text": "Game Utilities", "isCorrect": false },
      { "text": "Code Libraries", "isCorrect": false },
      { "text": "Game Assets", "isCorrect": true }
    ]
  },
  {
    "question": "'Double Trap Shooting' ഗെയിം ആരംഭിക്കുമ്പോൾ ലഭ്യമായ **ബുള്ളറ്റുകളുടെ** (Bullets) പ്രാരംഭ എണ്ണം എത്രയാണ്?",
    "options": [
      { "text": "10", "isCorrect": false },
      { "text": "50", "isCorrect": false },
      { "text": "0", "isCorrect": false },
      { "text": "20", "isCorrect": true }
    ]
  },
  {
    "question": "അധ്യായത്തിലെ ഗെയിം ഉദാഹരണത്തിൽ ഷൂട്ടിംഗ് റേഞ്ച് പശ്ചാത്തലത്തിനായി (Background) സ്‌ക്രാച്ച് ലൈബ്രറിയിൽ നിന്ന് തിരഞ്ഞെടുത്ത പ്രത്യേക ബാക്ക്ഡ്രോപ്പ് ഏതാണ്?",
    "options": [
      { "text": "Desert", "isCorrect": false },
      { "text": "Woods", "isCorrect": false },
      { "text": "Sky", "isCorrect": false },
      { "text": "Blue Sky", "isCorrect": true }
    ]
  },
  {
    "question": "ഗെയിമിൽ ഓരോ തവണ ഷൂട്ട് ചെയ്യുമ്പോഴും അതിൻ്റെ മൂല്യം **ഒന്ന് കുറയ്ക്കാൻ** ഉപയോഗിക്കുന്ന വേരിയബിൾ ഏതാണ്?",
    "options": [
      { "text": "Score", "isCorrect": false },
      { "text": "Hits", "isCorrect": false },
      { "text": "Target", "isCorrect": false },
      { "text": "Bullets", "isCorrect": true }
    ]
  },
  {
    "question": "ഒരു ബുള്ളറ്റ് ബലൂണിൽ വിജയകരമായി തട്ടുമ്പോൾ അതിൻ്റെ മൂല്യം **വർധിക്കുന്ന** വേരിയബിൾ ഏതാണ്?",
    "options": [
      { "text": "Bullets", "isCorrect": false },
      { "text": "Game Time", "isCorrect": false },
      { "text": "Tempo", "isCorrect": false },
      { "text": "Score", "isCorrect": true }
    ]
  },
  {
    "question": "മൗസ് പോയിൻ്ററിന് നേരെ തോക്ക് തിരിയുന്ന പ്രവർത്തനം ഒരു **തുടർച്ചയായ** (continuous) പ്രവർത്തനമാണ്. ഇതിനായി സ്‌ക്രാച്ചിൽ ഉപയോഗിക്കുന്ന കൺട്രോൾ ബ്ലോക്ക് ഏതാണ്?",
    "options": [
      { "text": "Repeat", "isCorrect": false },
      { "text": "Wait until", "isCorrect": false },
      { "text": "If then else", "isCorrect": false },
      { "text": "Forever", "isCorrect": true }
    ]
  },
  {
    "question": "തോക്ക് മൗസ് പോയിൻ്ററിന് നേരെ തിരിയാൻ സഹായിക്കുന്ന **Motion** വിഭാഗത്തിലെ ബ്ലോക്ക് ഏതാണ്?",
    "options": [
      { "text": "turn (15) degrees", "isCorrect": false },
      { "text": "go to mouse-pointer", "isCorrect": false },
      { "text": "set direction to (90)", "isCorrect": false },
      { "text": "point towards mouse-pointer", "isCorrect": true }
    ]
  },
  {
    "question": "'Double Trap Shooting' ഗെയിമിൽ ബുള്ളറ്റ് **ഫയർ** ചെയ്യുന്നതിനെ ട്രിഗർ ചെയ്യുന്ന പ്രധാന സംഭവം (Event) ഏതാണ്?",
    "options": [
      { "text": "സ്പേസ് ബാർ അമർത്തുന്നത്", "isCorrect": false },
      { "text": "തോക്ക് സ്പ്രൈറ്റ് മൗസ് പോയിൻ്ററിൽ സ്പർശിക്കുന്നത്", "isCorrect": false },
      { "text": "പച്ച പതാകയിൽ ക്ലിക്ക് ചെയ്യുന്നത്", "isCorrect": false },
      { "text": "ഗെയിം സ്ക്രീനിൽ (Stage) ക്ലിക്ക് ചെയ്യുന്നത്", "isCorrect": true }
    ]
  },
  {
    "question": "സ്‌ക്രാച്ചിൽ ഒരു സ്പ്രൈറ്റിൽ നിന്ന് മറ്റൊന്നിലേക്ക് വിവരങ്ങൾ കൈമാറ്റം ചെയ്യാൻ ഉപയോഗിക്കുന്ന പ്രത്യേകതരം ബ്ലോക്ക് ഏതാണ്?",
    "options": [
      { "text": "Ask and Wait", "isCorrect": false },
      { "text": "Change variable by", "isCorrect": false },
      { "text": "Start Sound", "isCorrect": false },
      { "text": "Broadcast message", "isCorrect": true }
    ]
  },
  {
    "question": "ഫയർ ചെയ്യുന്നതിനായി Stage-ൽ ക്ലിക്ക് ചെയ്യുമ്പോൾ സൃഷ്ടിക്കപ്പെടുന്നതും ബ്രോഡ്കാസ്റ്റ് ചെയ്യുന്നതുമായ സന്ദേശത്തിന് നൽകിയ പേര്?",
    "options": [
      { "text": "Fire", "isCorrect": false },
      { "text": "Shoot", "isCorrect": false },
      { "text": "Start", "isCorrect": false },
      { "text": "Clicked", "isCorrect": true }
    ]
  },
  {
    "question": "ബുള്ളറ്റ് ഫയർ ചെയ്യുമ്പോൾ **Bullet** സ്പ്രൈറ്റിലേക്ക് ചേർത്ത ശബ്ദ ഇഫക്റ്റിൻ്റെ പേരെന്താണ്?",
    "options": [
      { "text": "Boing", "isCorrect": false },
      { "text": "Laser", "isCorrect": false },
      { "text": "Pop", "isCorrect": false },
      { "text": "Rip", "isCorrect": true }
    ]
  },
  {
    "question": "ഒരു സ്പ്രൈറ്റിൻ്റെ **അതേ സ്വഭാവസവിശേഷതകളോടെയും പെരുമാറ്റത്തോടെയും** ഒന്നിലധികം സ്പ്രൈറ്റുകൾ (ഉദാഹരണത്തിന്, നിരവധി ബുള്ളറ്റുകൾ) സൃഷ്ടിക്കാൻ സ്‌ക്രാച്ചിൽ ഉപയോഗിക്കുന്ന സവിശേഷത ഏതാണ്?",
    "options": [
      { "text": "Duplication", "isCorrect": false },
      { "text": "Broadcasting", "isCorrect": false },
      { "text": "Replication", "isCorrect": false },
      { "text": "Clone", "isCorrect": true }
    ]
  },
  {
    "question": "'Clone' സവിശേഷത ഉപയോഗിച്ച് സൃഷ്ടിച്ച ഒരു സ്പ്രൈറ്റിൻ്റെ പ്രവർത്തന കോഡുകൾ ഉൾക്കൊള്ളുന്ന ബ്ലോക്ക് ഏതാണ്?",
    "options": [
      { "text": "When I receive (message)", "isCorrect": false },
      { "text": "When (key) pressed", "isCorrect": false },
      { "text": "When Green Flag clicked", "isCorrect": false },
      { "text": "When I start as clone", "isCorrect": true }
    ]
  },
  {
    "question": "ക്ലിക്ക് ചെയ്ത സ്ഥലത്തേക്ക് ബുള്ളറ്റ് നീങ്ങുന്നതിനായി, ക്ലോൺ ചെയ്ത ബുള്ളറ്റ് ഏത് അതിർത്തിയിൽ തട്ടുന്നതുവരെയാണ് സഞ്ചരിക്കേണ്ടത്?",
    "options": [
      { "text": "ബലൂൺ", "isCorrect": false },
      { "text": "തോക്ക് സ്പ്രൈറ്റ്", "isCorrect": false },
      { "text": "Stage-ൻ്റെ മധ്യഭാഗം", "isCorrect": false },
      { "text": "Stage-ൻ്റെ അരികുകൾ (Edge)", "isCorrect": true }
    ]
  },
  {
    "question": "ഗെയിമിൽ ടാർഗെറ്റുകളായി ആവശ്യമുള്ള ബലൂണുകളുടെ രണ്ട് നിറങ്ങൾ ഏതൊക്കെയാണ്?",
    "options": [
      { "text": "ചുവപ്പും പച്ചയും", "isCorrect": false },
      { "text": "ചുവപ്പും മഞ്ഞയും", "isCorrect": false },
      { "text": "പച്ചയും വയലറ്റും", "isCorrect": false },
      { "text": "നീലയും മഞ്ഞയും", "isCorrect": true }
    ]
  },
  {
    "question": "ഒരു ബലൂൺ 'പൊട്ടുന്ന' **Costume** ഉണ്ടാക്കുന്നതിനായി, നിലവിലുള്ള കോസ്റ്റ്യൂമിൽ റൈറ്റ് ക്ലിക്ക് ചെയ്യുമ്പോൾ ഉപയോഗിക്കുന്ന ഓപ്ഷൻ ഏതാണ്?",
    "options": [
      { "text": "Export", "isCorrect": false },
      { "text": "New", "isCorrect": false },
      { "text": "Create Folder", "isCorrect": false },
      { "text": "Duplicate", "isCorrect": true }
    ]
  },
  {
    "question": "ഡ്യൂപ്ലിക്കേറ്റ് ചെയ്ത കോസ്റ്റ്യൂമിനെ **പൊട്ടുന്ന ബലൂണിൻ്റെ** ആകൃതിയിലേക്ക് മാറ്റാൻ കോസ്റ്റ്യൂം എഡിറ്ററിൽ (Costume editor) നിർദ്ദേശിച്ച ഉപകരണം ഏതാണ്?",
    "options": [
      { "text": "Rectangle Tool", "isCorrect": false },
      { "text": "Brush Tool", "isCorrect": false },
      { "text": "Eraser Tool", "isCorrect": false },
      { "text": "Reshape Tool", "isCorrect": true }
    ]
  },
  {
    "question": "രണ്ട് ബലൂൺ ടാർഗെറ്റുകളും വ്യത്യസ്ത നിറങ്ങളിൽ (നീലയും മഞ്ഞയും) പ്രദർശിപ്പിക്കാൻ, രണ്ടാമത്തെ ബലൂണിൻ്റെ രൂപം മാറ്റാൻ സ്‌ക്രാച്ച് ഇൻ്റർഫേസിൻ്റെ ഏത് ഭാഗമാണ് ഉപയോഗിക്കേണ്ടത്?",
    "options": [
      { "text": "Code tab", "isCorrect": false },
      { "text": "Sound tab", "isCorrect": false },
      { "text": "Motion blocks", "isCorrect": false },
      { "text": "Costume section", "isCorrect": true }
    ]
  },
  {
    "question": "ഗെയിമിൽ ഒരു ബുള്ളറ്റ് ബലൂണിൽ തട്ടിയ ഉടൻ എന്ത് സംഭവിക്കുന്നു?",
    "options": [
      { "text": "ഗെയിം നിർത്തുന്നു", "isCorrect": false },
      { "text": "തോക്കിൻ്റെ നിറം മാറുന്നു", "isCorrect": false },
      { "text": "ബുള്ളറ്റ് തിരികെ വരുന്നു", "isCorrect": false },
      { "text": "ബലൂൺ പൊട്ടുകയും സ്കോർ കൂടുകയും ചെയ്യുന്നു", "isCorrect": true }
    ]
  },
  {
    "question": "ബലൂൺ പൊട്ടുമ്പോൾ ഉപയോഗിക്കുന്ന, ബലൂൺ സ്പ്രൈറ്റിനായി **സ്ഥിരമായി ഉൾപ്പെടുത്തിയിട്ടുള്ള** (default sound) ശബ്ദ ഇഫക്റ്റിൻ്റെ പേരെന്താണ്?",
    "options": [
      { "text": "Splat", "isCorrect": false },
      { "text": "Scream", "isCorrect": false },
      { "text": "Rip", "isCorrect": false },
      { "text": "Pop", "isCorrect": true }
    ]
  },
  {
    "question": "താഴെ പറയുന്ന ഏത് അവസ്ഥ വരുമ്പോഴാണ് ഗെയിം അവസാനിക്കുന്നത്?",
    "options": [
      { "text": "സ്കോർ 100-ൽ എത്തുമ്പോൾ", "isCorrect": false },
      { "text": "ഉപയോക്താവ് Stop ബട്ടൺ ക്ലിക്ക് ചെയ്യുമ്പോൾ", "isCorrect": false },
      { "text": "എല്ലാ ബലൂണുകളിലും തട്ടുമ്പോൾ", "isCorrect": false },
      { "text": "നൽകിയിട്ടുള്ള ഇരുപത് ബുള്ളറ്റുകളും ഉപയോഗിച്ച് തീരുമ്പോൾ", "isCorrect": true }
    ]
  },
  {
    "question": "'Bullets', 'Score' പോലുള്ള കസ്റ്റം വേരിയബിളുകൾ ഉണ്ടാക്കുന്നതിനുള്ള **Make a Variable** ഓപ്ഷൻ സ്‌ക്രാച്ചിലെ ഏത് വിഭാഗത്തിലാണ് കാണുന്നത്?",
    "options": [
      { "text": "Control", "isCorrect": false },
      { "text": "Data", "isCorrect": false },
      { "text": "Operators", "isCorrect": false },
      { "text": "Variables", "isCorrect": true }
    ]
  },
  {
    "question": "ഗെയിം ആരംഭിക്കുമ്പോൾ **Score** വേരിയബിളിന് നൽകുന്ന പ്രാരംഭ മൂല്യം എത്രയാണ്?",
    "options": [
      { "text": "20", "isCorrect": false },
      { "text": "1", "isCorrect": false },
      { "text": "100", "isCorrect": false },
      { "text": "0", "isCorrect": true }
    ]
  },
  {
    "question": "ഗെയിം ആരംഭിക്കുമ്പോൾ, 'Bullets', 'Score' എന്നീ വേരിയബിളുകളെ സംബന്ധിച്ച് തോക്ക് സ്പ്രൈറ്റിൻ്റെ കോഡ് എന്ത് ചെയ്യണം?",
    "options": [
      { "text": "Set score to 20 ഉം bullets to 0 ഉം", "isCorrect": false },
      { "text": "രണ്ടിനും 10 എന്ന് നൽകുന്നു", "isCorrect": false },
      { "text": "രണ്ടിനും 1 എന്ന് നൽകുന്നു", "isCorrect": false },
      { "text": "Set bullets to 20 ഉം score to 0 ഉം", "isCorrect": true }
    ]
  },
  {
    "question": "ഫയറിംഗിനായുള്ള കോഡിൽ, 'Clicked' സന്ദേശം ബ്രോഡ്കാസ്റ്റ് ചെയ്യുന്നതിനുമുമ്പ് `bullets > 0` എന്ന് പരിശോധിക്കുന്നത് എന്തിനാണ്?",
    "options": [
      { "text": "സ്കോർ വർദ്ധിപ്പിക്കാൻ", "isCorrect": false },
      { "text": "തോക്കിനെ ചലിപ്പിക്കാൻ", "isCorrect": false },
      { "text": "ബലൂൺ ഉയർത്താൻ", "isCorrect": false },
      { "text": "ബുള്ളറ്റുകൾ ലഭ്യമാണെങ്കിൽ മാത്രമേ ഫയറിംഗ് നടക്കുന്നുള്ളൂ എന്ന് ഉറപ്പാക്കാൻ", "isCorrect": true }
    ]
  },
  {
    "question": "ബലൂണുകൾ വ്യത്യസ്ത **തിരശ്ചീനമായ** (Horizontal) ആരംഭ പോയിൻ്റുകളിൽ (X- മൂല്യങ്ങൾ) പ്രത്യക്ഷപ്പെടാൻ ഉപയോഗിക്കുന്ന ബ്ലോക്ക് ഏതാണ്?",
    "options": [
      { "text": "Go to X: (0)", "isCorrect": false },
      { "text": "Change X by (10)", "isCorrect": false },
      { "text": "Set Y to (random)", "isCorrect": false },
      { "text": "Pick random ( ) to ( )", "isCorrect": true }
    ]
  },
  {
    "question": "ബലൂൺ Stage-ൻ്റെ താഴെ നിന്ന് മുകളിലേക്ക് ഉയരുന്നതിന്, ബലൂൺ സ്പ്രൈറ്റിനായി ഏത് മൂല്യമാണ് തുടർച്ചയായി വർദ്ധിപ്പിക്കുന്നത്?",
    "options": [
      { "text": "X മൂല്യം", "isCorrect": false },
      { "text": "Direction മൂല്യം", "isCorrect": false },
      { "text": "Size മൂല്യം", "isCorrect": false },
      { "text": "Y മൂല്യം", "isCorrect": true }
    ]
  },
  {
    "question": "ബലൂൺ വ്യത്യസ്ത സ്ഥലങ്ങളിൽ നിന്ന് ഉയരുന്നതിനായി അധ്യായത്തിൽ നിർദ്ദേശിച്ച റാൻഡം X-മൂല്യങ്ങളുടെ പരിധി (Range) എത്രയാണ്?",
    "options": [
      { "text": "10 to 100", "isCorrect": false },
      { "text": "0 to 180", "isCorrect": false },
      { "text": "-100 to 100", "isCorrect": false },
      { "text": "-230 to 230", "isCorrect": true }
    ]
  },
  {
    "question": "ബലൂണിനെ Stage-ൻ്റെ മുകളിലേക്ക് **ഉയർത്താൻ** പ്രത്യേകമായി നിർദ്ദേശിക്കുന്ന മോഷൻ ബ്ലോക്ക് ഏതാണ്?",
    "options": [
      { "text": "go to x: ( ) y: ( )", "isCorrect": false },
      { "text": "move (10) steps", "isCorrect": false },
      { "text": "change y by (10)", "isCorrect": false },
      { "text": "glide ( ) secs to x: ( ) y: ( )", "isCorrect": true }
    ]
  },
  {
    "question": "ഗെയിം മെമ്മറിയും പ്രകടനവും (performance) നിയന്ത്രിക്കുന്നതിനായി, ക്ലോണുകളുടെ (ബലൂൺ അല്ലെങ്കിൽ ബുള്ളറ്റ്) പ്രവർത്തനം പൂർത്തിയാകുമ്പോൾ എന്ത് ചെയ്യണം?",
    "options": [
      { "text": "അവയുടെ ചലനം നിർത്തുക", "isCorrect": false },
      { "text": "അവയെ മറയ്ക്കുക (Hide)", "isCorrect": false },
      { "text": "അവയെ ബാക്ക് ലെയറിലേക്ക് നീക്കുക", "isCorrect": false },
      { "text": "ക്ലോണുകളെ ഡിലീറ്റ് ചെയ്യുക (Delete)", "isCorrect": true }
    ]
  },
  {
    "question": "ഗെയിമിലെ **തോക്ക്** സ്പ്രൈറ്റ് വരയ്ക്കാൻ സ്‌ക്രാച്ച് പെയിൻ്റ് വിൻഡോയിൽ ഉപയോഗിക്കുന്ന ടൂൾ ഏതാണ്?",
    "options": [
      { "text": "Brush Tool", "isCorrect": false },
      { "text": "Circle Tool", "isCorrect": false },
      { "text": "Line Tool", "isCorrect": false },
      { "text": "Rectangle Tool", "isCorrect": true }
    ]
  },
  {
    "question": "തോക്ക് സ്പ്രൈറ്റ് വരച്ചതിന് ശേഷം അതിന് നൽകുന്ന നിർദ്ദേശിക്കപ്പെട്ട വലുപ്പം (Size) എത്രയാണ്?",
    "options": [
      { "text": "100", "isCorrect": false },
      { "text": "10", "isCorrect": false },
      { "text": "25", "isCorrect": false },
      { "text": "50", "isCorrect": true }
    ]
  },
  {
    "question": "ബുള്ളറ്റ് സ്പ്രൈറ്റ് വരച്ചതിന് ശേഷം അതിന് നൽകുന്ന നിർദ്ദേശിക്കപ്പെട്ട വലുപ്പം (Size) എത്രയാണ്?",
    "options": [
      { "text": "50", "isCorrect": false },
      { "text": "100", "isCorrect": false },
      { "text": "20", "isCorrect": false },
      { "text": "10", "isCorrect": true }
    ]
  },
  {
    "question": "സ്പ്രൈറ്റുകളുടെ രൂപം മാറ്റാനും **ആനിമേഷൻ ഇഫക്റ്റുകൾ** നൽകാനും സ്‌ക്രാച്ചിൽ സാധാരണയായി ഉപയോഗിക്കുന്ന രീതി ഏതാണ്?",
    "options": [
      { "text": "വലുപ്പത്തിൻ്റെ (Size) മൂല്യം മാറ്റുന്നത്", "isCorrect": false },
      { "text": "ശബ്ദ ഇഫക്റ്റുകൾ മാറ്റുന്നത്", "isCorrect": false },
      { "text": "Motion ബ്ലോക്കുകൾ ഉപയോഗിക്കുന്നത്", "isCorrect": false },
      { "text": "അവയുടെ കോസ്റ്റ്യൂമുകൾ മാറ്റുന്നത്", "isCorrect": true }
    ]
  },
  {
    "question": "തോക്ക് അല്ലെങ്കിൽ ബുള്ളറ്റ് പോലുള്ള ഒരു പുതിയ സ്പ്രൈറ്റിനായുള്ള ഡ്രോയിംഗ് പ്രക്രിയ ആരംഭിക്കാൻ ഉപയോഗിക്കുന്ന മെനു ഓപ്ഷൻ ഏതാണ്?",
    "options": [
      { "text": "Choose a Sprite", "isCorrect": false },
      { "text": "Upload Sprite", "isCorrect": false },
      { "text": "Surprise", "isCorrect": false },
      { "text": "Paint", "isCorrect": true }
    ]
  },
  {
    "question": "**'Bullets' വേരിയബിളിൻ്റെ മൂല്യം ഒന്നു കുറയ്ക്കുന്നതിന്** ഉപയോഗിക്കേണ്ട പ്രത്യേക കോഡ് ബ്ലോക്ക് ഏതാണ്?",
    "options": [
      { "text": "Set bullets to (bullets - 1)", "isCorrect": false },
      { "text": "Change score by (-1)", "isCorrect": false },
      { "text": "Set bullets to 1", "isCorrect": false },
      { "text": "Change bullets by (-1)", "isCorrect": true }
    ]
  },
  {
    "question": "ഒരു സ്പ്രൈറ്റിന് (ഉദാഹരണത്തിന്, Balloon1) നൽകിയ കോഡ് ബ്ലോക്കുകൾ മറ്റൊരു സ്പ്രൈറ്റിലേക്ക് (ഉദാഹരണത്തിന്, Balloon2) പകർത്താൻ വിവരിച്ച രീതി ഏതാണ്?",
    "options": [
      { "text": "'Duplicate' ഓപ്ഷൻ ഉപയോഗിക്കുന്നത്", "isCorrect": false },
      { "text": "കോഡ് ഒരു ഫയലായി സേവ് ചെയ്ത് ഇംപോർട്ട് ചെയ്യുന്നത്", "isCorrect": false },
      { "text": "ഒരു പ്രത്യേക 'Copy Code' ബ്ലോക്ക് ഉപയോഗിക്കുന്നത്", "isCorrect": false },
      { "text": "കോഡ് രണ്ടാമത്തെ സ്പ്രൈറ്റിലേക്ക് വലിച്ചിടുന്നത് (Drag)", "isCorrect": true }
    ]
  },
  {
    "question": "കോഡ് വലിച്ചിടുമ്പോൾ, രണ്ടാമത്തെ ബലൂണിനായി കോപ്പി ചെയ്ത കോഡിൽ ഉപയോക്താവ് മാറ്റാൻ ഓർമ്മിക്കേണ്ട ഒരു പ്രധാന കാര്യം എന്താണ്?",
    "options": [
      { "text": "x ഉം y ഉം സ്ഥാനം", "isCorrect": false },
      { "text": "റാൻഡം സംഖ്യയുടെ പരിധി", "isCorrect": false },
      { "text": "ശബ്ദ ഇഫക്റ്റ്", "isCorrect": false },
      { "text": "Costume-ൻ്റെ പേരുകൾ", "isCorrect": true }
    ]
  },
  {
    "question": "അധ്യായത്തിൽ പറഞ്ഞ 'Double Trap Shooting' ഗെയിം, ഏത് യഥാർത്ഥ ഒളിമ്പിക് ഇവൻ്റ് വിഭാഗത്തിൻ്റെ ഡിജിറ്റൽ രൂപമാണ്?",
    "options": [
      { "text": "Rifle Shooting", "isCorrect": false },
      { "text": "Pistol Shooting", "isCorrect": false },
      { "text": "Archery", "isCorrect": false },
      { "text": "Shotgun (Double Trap)", "isCorrect": true }
    ]
  },
  {
    "question": "ഗെയിം പ്രവർത്തിക്കുമ്പോൾ മൗസ് ചലിപ്പിച്ചാൽ, തോക്ക് സ്പ്രൈറ്റിൻ്റെ ദിശ മൗസ് പോയിൻ്ററിനെ പിന്തുടരുന്നു എന്ന് ഉറപ്പാക്കുന്നത് ഏത് ബ്ലോക്കുകളുടെ കൂട്ടമാണ്?",
    "options": [
      { "text": "When key pressed ഉം move (10) steps ഉം", "isCorrect": false },
      { "text": "When clicked ഉം change y by (10) ഉം", "isCorrect": false },
      { "text": "When I receive (message) ഉം point in direction (90) ഉം", "isCorrect": false },
      { "text": "When green flag clicked, forever, point towards mouse-pointer", "isCorrect": true }
    ]
  },
  {
    "question": "സ്‌ക്രാച്ചിലെ വേരിയബിളുകൾ ഏത് തരത്തിലുള്ള ഡാറ്റയാണ് താൽക്കാലികമായി സംഭരിക്കുന്നത്?",
    "options": [
      { "text": "ടെക്സ്റ്റുകൾ മാത്രം", "isCorrect": false },
      { "text": "ചിത്രങ്ങളും ശബ്ദങ്ങളും മാത്രം", "isCorrect": false },
      { "text": "true/false മൂല്യങ്ങൾ മാത്രം", "isCorrect": false },
      { "text": "മാറ്റാൻ കഴിയുന്ന സംഖ്യകൾ, ടെക്സ്റ്റുകൾ മുതലായവ", "isCorrect": true }
    ]
  },
  {
    "question": "ബുള്ളറ്റ് സ്പ്രൈറ്റിന് 'Clicked' സന്ദേശം ലഭിക്കുമ്പോൾ, ഒരു ക്ലോൺ സൃഷ്ടിക്കുന്നതിനുമുമ്പ് ബുള്ളറ്റ് ചെയ്യേണ്ട **ആദ്യത്തെ പ്രവർത്തനം** എന്താണ്?",
    "options": [
      { "text": "'Rip' ശബ്ദം പ്ലേ ചെയ്യുക", "isCorrect": false },
      { "text": "അതിൻ്റെ വലുപ്പം 50 ആയി മാറ്റുക", "isCorrect": false },
      { "text": "സ്കോർ 1 ആയി മാറ്റുക", "isCorrect": false },
      { "text": "തോക്കിൻ്റെ ബാരലിൽ എത്തുക (അതിൻ്റെ ആരംഭ സ്ഥാനം)", "isCorrect": true }
    ]
  },
  {
    "question": "ബുള്ളറ്റിൽ തട്ടിയ ഉടൻ ബലൂൺ പൊട്ടി അപ്രത്യക്ഷമാകുന്നതിന് (disappear) ഉപയോഗിക്കുന്ന കോഡ് ബ്ലോക്ക് ഏതാണ്?",
    "options": [
      { "text": "broadcast message", "isCorrect": false },
      { "text": "set size to 0", "isCorrect": false },
      { "text": "stop all", "isCorrect": false },
      { "text": "hide", "isCorrect": true }
    ]
  },
  {
    "question": "നൽകിയിട്ടുള്ള രണ്ട് മൂല്യങ്ങൾക്കിടയിലുള്ള ഏത് മൂല്യവും **റാൻഡം ആയി** (randomly) ലഭിക്കാൻ സ്‌ക്രാച്ചിൽ ഉപയോഗിക്കുന്ന ബ്ലോക്ക് ഏതാണ്?",
    "options": [
      { "text": "Random Position", "isCorrect": false },
      { "text": "Set to Random", "isCorrect": false },
      { "text": "Randomize", "isCorrect": false },
      { "text": "Pick random ( ) to ( )", "isCorrect": true }
    ]
  },
  {
    "question": "ഒരു സ്പ്രൈറ്റിൻ്റെ **y മൂല്യം** ക്രമേണ വർദ്ധിപ്പിച്ചാൽ, സ്പ്രൈറ്റ് ഏത് ദിശയിലേക്കാണ് നീങ്ങുന്നത്?",
    "options": [
      { "text": "വലത്തു നിന്ന് ഇടത്തേക്ക്", "isCorrect": false },
      { "text": "ഇടത്തു നിന്ന് വലത്തേക്ക്", "isCorrect": false },
      { "text": "മുകളിൽ നിന്ന് താഴേക്ക്", "isCorrect": false },
      { "text": "താഴെ നിന്ന് മുകളിലേക്ക്", "isCorrect": true }
    ]
  },
  {
    "question": "ഗെയിമിൻ്റെ ലേഔട്ട് ക്രമീകരിക്കുന്നതിനും വിവിധ ബാക്ക്ഡ്രോപ്പുകൾ ഉൾപ്പെടുത്തി ആകർഷകമാക്കുന്നതിനും ഉത്തരവാദിയായ ഗെയിം അസറ്റ് ഏതാണ്?",
    "options": [
      { "text": "Sprite", "isCorrect": false },
      { "text": "Costume", "isCorrect": false },
      { "text": "Instrument Plugins", "isCorrect": false },
      { "text": "Stage", "isCorrect": true }
    ]
  },
  {
    "question": "School_Resources ഫോൾഡറിൽ ഉപയോക്താവിന് പരീക്ഷിച്ചുനോക്കാൻ നൽകിയിട്ടുള്ള ഗെയിം ഫയലിൻ്റെ എക്സ്റ്റൻഷൻ എന്താണ്?",
    "options": [
      { "text": ".sb3", "isCorrect": false },
      { "text": ".exe", "isCorrect": false },
      { "text": ".mmpz", "isCorrect": false },
      { "text": ".html", "isCorrect": true }
    ]
  },
  {
    "question": "ഒരു ബുള്ളറ്റ് ബലൂണിൽ തട്ടുമ്പോൾ, ബലൂൺ പൊട്ടുന്നതിനും സ്കോർ കൂടുന്നതിനും പുറമെ ബുള്ളറ്റിന് എന്ത് സംഭവിക്കുന്നു?",
    "options": [
      { "text": "അത് തിരികെ തെറിക്കുന്നു", "isCorrect": false },
      { "text": "അത് ചുവന്ന നിറമാകുന്നു", "isCorrect": false },
      { "text": "അതിൻ്റെ വലുപ്പം കുറയുന്നു", "isCorrect": false },
      { "text": "അത് അപ്രത്യക്ഷമാകുന്നു (ഡിലീറ്റ് ആകുന്നു/മറയുന്നു)", "isCorrect": true }
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
