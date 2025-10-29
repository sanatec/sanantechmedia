document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "സൺക്ലോക്ക് (Sunclock) സോഫ്റ്റ്‌വെയറിൻ്റെ പ്രാഥമിക ധർമ്മം എന്താണ്?",
    "options": [
      { "text": "തന്മാത്രാ ഘടനയുടെ 3D മോഡലുകൾ സൃഷ്ടിക്കുക.", "isCorrect": false },
      { "text": "ജ്യാമിതീയ രൂപങ്ങൾ നിർമ്മിക്കുക.", "isCorrect": false },
      { "text": "ഭൂമിയിൽ രാവും പകലും അനുഭവപ്പെടുന്ന രാജ്യങ്ങളെ ദൃശ്യപരമായി വേർതിരിച്ചറിയുക.", "isCorrect": true },
      { "text": "ഭൂമിശാസ്ത്രപരമായ കോർഡിനേറ്റുകൾ (അക്ഷാംശം, രേഖാംശം) കണക്കാക്കുക.", "isCorrect": false }
    ]
  },
  {
    "question": "സൺക്ലോക്ക് (Sunclock) സോഫ്റ്റ്‌വെയറിൻ്റെ വികസനത്തിന് പിന്നിൽ പ്രവർത്തിച്ച വ്യക്തി ആരാണ്?",
    "options": [
      { "text": "കാൾ വീമാൻ (Carl Wieman)", "isCorrect": false },
      { "text": "ജീൻ-പിയറി അവഗാഡ്രോ (Jean-Pierre Avogadro)", "isCorrect": false },
      { "text": "അഭിനവ് ബിന്ദ്ര (Abhinav Bindra)", "isCorrect": false },
      { "text": "ജീൻ-പിയറി ഡെമെയിലി (Jean-Pierre Demailly)", "isCorrect": true }
    ]
  },
  {
    "question": "ഗ്രീൻവിച്ച് സമയത്തെ (GMT) അടിസ്ഥാനമാക്കി ലോകത്തെ എത്ര സമയമേഖലകളായി (Time Zones) തിരിച്ചിരിക്കുന്നു?",
    "options": [
      { "text": "12", "isCorrect": false },
      { "text": "100", "isCorrect": false },
      { "text": "36", "isCorrect": false },
      { "text": "24", "isCorrect": true }
    ]
  },
  {
    "question": "ഒരു പ്രത്യേക സ്ഥലത്ത് സൂര്യൻ ഏറ്റവും ഉയരത്തിൽ (ഉച്ചസ്ഥായിയിൽ) എത്തുന്നതിനെ അടിസ്ഥാനമാക്കി കണക്കാക്കുന്ന സമയം ഏത്?",
    "options": [
      { "text": "സ്റ്റാൻഡേർഡ് സമയം", "isCorrect": false },
      { "text": "നിയമപരമായ സമയം", "isCorrect": false },
      { "text": "യൂണിവേഴ്സൽ സമയം", "isCorrect": false },
      { "text": "പ്രാദേശിക സമയം (Local Time)", "isCorrect": true }
    ]
  },
  {
    "question": "ഒരു രാജ്യത്തിൻ്റെ മധ്യഭാഗത്തുകൂടി കടന്നുപോകുന്ന രേഖാംശത്തെ അടിസ്ഥാനമാക്കി രാജ്യത്ത് പൊതുവായി അംഗീകരിക്കുന്ന സമയം ഏത്?",
    "options": [
      { "text": "മെറിഡിയൻ സമയം", "isCorrect": false },
      { "text": "പ്രാദേശിക സമയം", "isCorrect": false },
      { "text": "സ്റ്റാൻഡേർഡ് സമയം (Standard Time)", "isCorrect": true },
      { "text": "ഉച്ചസ്ഥായിയിലെ സമയം", "isCorrect": false }
    ]
  },
  {
    "question": "സൺക്ലോക്ക് മെനുബാറിലെ ഏത് ടൂൾ ഉപയോഗിച്ചാണ് സമയ പ്രദർശനം **സ്റ്റാൻഡേർഡ് സമയത്തിലേക്ക്** (Legal Time) മാറ്റുന്നത്?",
    "options": [
      { "text": "Draw/Erase Meridian Tool (M)", "isCorrect": false },
      { "text": "Clock & Map Window (!)", "isCorrect": false },
      { "text": "Legal Time Mode (L)", "isCorrect": true },
      { "text": "Solar Time Mode (S)", "isCorrect": false }
    ]
  },
  {
    "question": "ഗ്രീൻവിച്ച് മെറിഡിയനിൽ നിന്ന് **കിഴക്കോട്ടാണ്** സഞ്ചരിക്കുന്നതെങ്കിൽ, സമയത്തിന് എന്ത് സംഭവിക്കുന്നു?",
    "options": [
      { "text": "സമയം പ്രാദേശിക സമയമായി മാറുന്നു", "isCorrect": false },
      { "text": "സമയം കൂടുന്നു", "isCorrect": true },
      { "text": "സമയം കുറയുന്നു", "isCorrect": false },
      { "text": "സമയത്തിന് മാറ്റമില്ല", "isCorrect": false }
    ]
  },
  {
    "question": "സൂര്യോദയ/അസ്തമയ സമയങ്ങൾ നിർണ്ണയിക്കുമ്പോൾ Sunclock-ൽ **ആനിമേഷൻ ആരംഭിക്കാനും നിർത്താനും** കീബോർഡിൽ ഏത് കീയാണ് അമർത്തേണ്ടത്?",
    "options": [
      { "text": "സ്പേസ്ബാർ", "isCorrect": false },
      { "text": "എൻ്റർ കീ", "isCorrect": false },
      { "text": "കൺട്രോൾ (Ctrl) കീ", "isCorrect": false },
      { "text": "സിംഗിൾ കൊട്ടേഷൻ മാർക്ക് (') കീ", "isCorrect": true }
    ]
  },
  {
    "question": "ഉത്തരായനരേഖയ്ക്കും ദക്ഷിണായനരേഖയ്ക്കും ഇടയിലുള്ള സൂര്യൻ്റെ വ്യക്തമായ വടക്ക്-തെക്ക് ദിശയിലുള്ള സ്ഥാനമാറ്റത്തെ വിളിക്കുന്ന പേരെന്ത്?",
    "options": [
      { "text": "ഗ്രീൻവിച്ച് സമയം", "isCorrect": false },
      { "text": "സമയമേഖല മാറ്റം", "isCorrect": false },
      { "text": "അയനം (Solar Declination or Ayana)", "isCorrect": true },
      { "text": "ആകാശഗോള ഭ്രമണം", "isCorrect": false }
    ]
  },
  {
    "question": "ഏത് തീയതിയിലാണ് സൂര്യൻ **ദക്ഷിണായനരേഖയ്ക്ക്** (Tropic of Capricorn - Southern Hemisphere) നേർമുകളിൽ വരുന്നത്?",
    "options": [
      { "text": "മാർച്ച് 21", "isCorrect": false },
      { "text": "ജൂൺ 21", "isCorrect": false },
      { "text": "സെപ്റ്റംബർ 23", "isCorrect": false },
      { "text": "ഡിസംബർ 22", "isCorrect": true }
    ]
  },
  {
    "question": "**ഭൂമധ്യരേഖയ്ക്ക്** നേർമുകളിൽ സൂര്യൻ്റെ സ്ഥാനം വരുന്ന രണ്ട് തീയതികൾ ഏതെല്ലാം?",
    "options": [
      { "text": "സെപ്റ്റംബർ 23, ഡിസംബർ 22", "isCorrect": false },
      { "text": "മാർച്ച് 21, ജൂൺ 21", "isCorrect": false },
      { "text": "ഡിസംബർ 22, ജൂൺ 21", "isCorrect": false },
      { "text": "മാർച്ച് 21, സെപ്റ്റംബർ 23", "isCorrect": true }
    ]
  },
  {
    "question": "ദക്ഷിണായനരേഖയിൽ നിന്ന് ഉത്തരായനരേഖയിലേക്കുള്ള സൂര്യൻ്റെ **വടക്കോട്ടുള്ള യാത്രയ്ക്ക്** പറയുന്ന പേരെന്ത്?",
    "options": [
      { "text": "സമരാത്രി", "isCorrect": false },
      { "text": "ദക്ഷിണായനം (Southern Solstice)", "isCorrect": false },
      { "text": "സൂര്യോച്ചസ്ഥായി", "isCorrect": false },
      { "text": "ഉത്തരായനം (Northern Solstice)", "isCorrect": true }
    ]
  },
  {
    "question": "എന്തിനുവേണ്ടിയാണ് **അവഗാഡ്രോ (Avogadro)** സോഫ്റ്റ്‌വെയർ പ്രാഥമികമായി ഉപയോഗിക്കുന്നത്?",
    "options": [
      { "text": "ലോകമെമ്പാടുമുള്ള സമയവ്യത്യാസങ്ങൾ കാണുന്നതിന്.", "isCorrect": false },
      { "text": "തന്മാത്രകളുടെ ത്രിമാന മോഡലുകൾ എഡിറ്റ് ചെയ്യാനും നിർമ്മിക്കാനും.", "isCorrect": true },
      { "text": "2D ഇൻ്ററാക്ടീവ് ജ്യാമിതീയ രൂപങ്ങൾ ഉണ്ടാക്കുന്നതിന്.", "isCorrect": false },
      { "text": "ഓഡിയോ ട്രാക്കുകൾ റെക്കോർഡ് ചെയ്യാനും എഡിറ്റ് ചെയ്യാനും.", "isCorrect": false }
    ]
  },
  {
    "question": "**ജല തന്മാത്രയുടെ** രാസസൂത്രം എന്താണ്?",
    "options": [
      { "text": "O₂", "isCorrect": false },
      { "text": "CO₂", "isCorrect": false },
      { "text": "H₂O (രണ്ട് ഹൈഡ്രജനും ഒരു ഓക്സിജൻ ആറ്റവും അടങ്ങിയത്)", "isCorrect": true },
      { "text": "CH₄", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു തന്മാത്ര വരച്ച ശേഷം അതിലെ മൂലകങ്ങൾ തമ്മിലുള്ള **ബന്ധനവും അകലവും തുല്യമാക്കാൻ** Avogadro-ൽ ഉപയോഗിക്കുന്ന മെനു ഓപ്ഷൻ ഏത്?",
    "options": [
      { "text": "Build → Insert → Molecule", "isCorrect": false },
      { "text": "Extensions → Open Babel → Optimise Geometry", "isCorrect": true },
      { "text": "File → Save", "isCorrect": false },
      { "text": "Extensions → Periodic Table", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു തന്മാത്രാ ഘടന വരയ്ക്കാൻ തുടങ്ങുന്നതിനുമുമ്പ് Avogadro ടൂൾബാറിൽ തിരഞ്ഞെടുക്കേണ്ട ടൂൾ ഏത്?",
    "options": [
      { "text": "Navigation Tool", "isCorrect": false },
      { "text": "Measure Tool", "isCorrect": false },
      { "text": "Draw Tool", "isCorrect": true },
      { "text": "Select Tool", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു ഗ്ലൂക്കോസ് തന്മാത്രയുടെ മുൻകൂട്ടി തയ്യാറാക്കിയ ഘടന Avogadro-ൽ കണ്ടെത്താൻ ചെയ്യേണ്ടത്:",
    "options": [
      { "text": "File → New", "isCorrect": false },
      { "text": "Build → Insert → Molecule", "isCorrect": true },
      { "text": "Tools → Optimise", "isCorrect": false },
      { "text": "Extensions → Periodic Table", "isCorrect": false }
    ]
  },
  {
    "question": "നോബൽ സമ്മാന ജേതാവായ കാൾ വീമാൻ്റെ (Carl Wieman) നേതൃത്വത്തിൽ രൂപകൽപ്പന ചെയ്ത ശാസ്ത്ര-ഗണിതശാസ്ത്ര സിമുലേഷനുകളുടെ ശേഖരമാണ് ഏത് സോഫ്റ്റ്‌വെയർ?",
    "options": [
      { "text": "സൺക്ലോക്ക്", "isCorrect": false },
      { "text": "LMMS", "isCorrect": false },
      { "text": "PhET", "isCorrect": true },
      { "text": "അവഗാഡ്രോ", "isCorrect": false }
    ]
  },
  {
    "question": "PhET സിമുലേഷനിലെ 'States of Matter: Basics' എന്ന സിമുലേഷൻ, അധ്യായത്തിലെ പ്രവർത്തനത്തിനായി ഏത് പദാർത്ഥത്തിൻ്റെ തന്മാത്രാ ക്രമീകരണമാണ് മനസ്സിലാക്കാൻ ഉപയോഗിക്കുന്നത്?",
    "options": [
      { "text": "കാർബൺ ഡൈ ഓക്സൈഡ്", "isCorrect": false },
      { "text": "അമോണിയ", "isCorrect": false },
      { "text": "ജലം", "isCorrect": true },
      { "text": "ഗ്ലൂക്കോസ്", "isCorrect": false }
    ]
  },
  {
    "question": "PhET 'States of Matter' സിമുലേഷനിൽ, താപനില വർദ്ധിപ്പിക്കുമ്പോൾ ജല തന്മാത്രകൾക്ക് എന്ത് സംഭവിക്കുന്നു?",
    "options": [
      { "text": "അവയുടെ ചലനം കുറയുകയും നിശ്ചിത സ്ഥാനങ്ങളിൽ ഒതുങ്ങുകയും ചെയ്യുന്നു.", "isCorrect": false },
      { "text": "അവ വലിയ തന്മാത്രകളായി മാറുന്നു.", "isCorrect": false },
      { "text": "അവ വേഗത്തിൽ ചലിക്കുകയും അകന്നുമാറുകയും ചെയ്യുന്നു (വാതകാവസ്ഥയിലേക്ക്).", "isCorrect": true },
      { "text": "അവ അടുത്തടുത്തുള്ള ക്രമീകരണം നിലനിർത്തുന്നു.", "isCorrect": false }
    ]
  },
  {
    "question": "സമയമേഖലകളും രാപ്പകൽ വ്യത്യാസവും കൂടാതെ **സൺക്ലോക്ക്** സോഫ്റ്റ്‌വെയർ നൽകുന്ന മറ്റൊരു പ്രധാന വിവരം എന്താണ്?",
    "options": [
      { "text": "ചരിത്രപരമായ കാലാവസ്ഥാ വിവരങ്ങൾ.", "isCorrect": false },
      { "text": "ഓരോ സ്ഥലത്തിൻ്റെയും ഭൂമിശാസ്ത്രപരമായ കോർഡിനേറ്റുകൾ (അക്ഷാംശം, രേഖാംശം).", "isCorrect": true },
      { "text": "തന്മാത്രാ ഘടന ഡാറ്റ.", "isCorrect": false },
      { "text": "രാജ്യങ്ങളുടെ സാമ്പത്തിക വിവരങ്ങൾ.", "isCorrect": false }
    ]
  },
  {
    "question": "Sunclock-ൽ **അക്ഷാംശ രേഖകളും അളവുകളും** പ്രദർശിപ്പിക്കാൻ ഉപയോഗിക്കുന്ന കീ ഏതാണ്?",
    "options": [
      { "text": "Toggle Sun/Moon [Y]", "isCorrect": false },
      { "text": "Draw/Erase Meridian Tool (M)", "isCorrect": false },
      { "text": "Draw/Erase parallel [P] tool", "isCorrect": true },
      { "text": "Toggle Night [N]", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു സ്ഥലത്തെ **പ്രാദേശിക സമയം** (Local Time) കാണാൻ Sunclock-ൽ ഉപയോഗിക്കുന്ന ടൂൾ ഏതാണ്?",
    "options": [
      { "text": "Move time forward (A)", "isCorrect": false },
      { "text": "Solar Time Mode (S)", "isCorrect": true },
      { "text": "Legal Time Mode (L)", "isCorrect": false },
      { "text": "Adjust Program Value (G)", "isCorrect": false }
    ]
  },
  {
    "question": "രണ്ട് സ്ഥലങ്ങൾ തമ്മിലുള്ള സമയവ്യത്യാസം കണക്കാക്കുന്നതിനുമുമ്പ് Sunclock-ൽ എന്ത് വിവരമാണ് പ്രവർത്തനക്ഷമമാക്കേണ്ടത്?",
    "options": [
      { "text": "സമയ വർദ്ധനവ് നിരക്ക് (G) പൂജ്യമായി സജ്ജമാക്കണം.", "isCorrect": false },
      { "text": "അക്ഷാംശ/രേഖാംശ ഗ്രിഡ് ലൈനുകളും അതിൻ്റെ മൂല്യങ്ങളും.", "isCorrect": true },
      { "text": "സ്റ്റാൻഡേർഡ് സമയം (L) പ്രാദേശിക സമയത്തിലേക്ക് (S) മാറ്റണം.", "isCorrect": false },
      { "text": "ചന്ദ്രൻ്റെ ദൃശ്യപരത (Y) ടൂൾ.", "isCorrect": false }
    ]
  },
  {
    "question": "ഗ്രീൻവിച്ച് മെറിഡിയനിൽ നിന്ന് **പടിഞ്ഞാറോട്ടാണ്** സഞ്ചരിക്കുന്നതെങ്കിൽ, സമയത്തിന് എന്ത് സംഭവിക്കുന്നു?",
    "options": [
      { "text": "സമയം കൂടുന്നു", "isCorrect": false },
      { "text": "സമയം കുറയുന്നു (അനുമാനം)", "isCorrect": true },
      { "text": "സമയം സ്ഥിരമായി തുടരുന്നു", "isCorrect": false },
      { "text": "സമയം നിയമപരമായ സമയമായി മാറുന്നു", "isCorrect": false }
    ]
  },
  {
    "question": "ഭൂമി കറങ്ങുന്നത് ഏത് ദിശയിൽ നിന്നാണ്?",
    "options": [
      { "text": "കിഴക്ക് നിന്ന് പടിഞ്ഞാറോട്ട്", "isCorrect": false },
      { "text": "വടക്ക് നിന്ന് തെക്കോട്ട്", "isCorrect": false },
      { "text": "പടിഞ്ഞാറ് നിന്ന് കിഴക്കോട്ട്", "isCorrect": true },
      { "text": "തെക്ക് നിന്ന് വടക്കോട്ട്", "isCorrect": false }
    ]
  },
  {
    "question": "സൂര്യൻ വടക്കോട്ട് നീങ്ങി **ഉത്തരായനരേഖയിൽ** (Tropic of Cancer - Northern Hemisphere) എത്തുന്ന തീയതി ഏതാണ്?",
    "options": [
      { "text": "ഡിസംബർ 22", "isCorrect": false },
      { "text": "മാർച്ച് 21", "isCorrect": false },
      { "text": "സെപ്റ്റംബർ 23", "isCorrect": false },
      { "text": "ജൂൺ 21", "isCorrect": true }
    ]
  },
  {
    "question": "ഉത്തരായനരേഖയിൽ നിന്ന് ദക്ഷിണായനരേഖയിലേക്കുള്ള സൂര്യൻ്റെ **തെക്കോട്ടുള്ള യാത്രയ്ക്ക്** പറയുന്ന പേരെന്ത്?",
    "options": [
      { "text": "അയനം റിവേഴ്‌സൽ", "isCorrect": false },
      { "text": "ഭൂമധ്യരേഖാ മാറ്റം", "isCorrect": false },
      { "text": "ഉത്തരായനം (Northern Solstice)", "isCorrect": false },
      { "text": "ദക്ഷിണായനം (Southern Solstice)", "isCorrect": true }
    ]
  },
  {
    "question": "**മാർച്ച് 22 മുതൽ സെപ്റ്റംബർ 22** വരെയുള്ള കാലയളവിൽ സൂര്യൻ്റെ സ്ഥാനം ഏത് അർദ്ധഗോളത്തിന് മുകളിലാണ്?",
    "options": [
      { "text": "ദക്ഷിണാർദ്ധഗോളം", "isCorrect": false },
      { "text": "അൻ്റാർട്ടിക് സർക്കിൾ", "isCorrect": false },
      { "text": "ഭൂമധ്യരേഖാ പ്രദേശം", "isCorrect": false },
      { "text": "ഉത്തരാർദ്ധഗോളം", "isCorrect": true }
    ]
  },
  {
    "question": "സൂര്യൻ്റെ സ്ഥാനം ഉത്തരാർദ്ധഗോളത്തിൽ (ഉത്തരായനം) ആയിരിക്കുമ്പോൾ **കൊൽക്കത്തയിൽ** (ഉത്തരായനരേഖയ്ക്ക് അടുത്ത്) പകലിൻ്റെ ദൈർഘ്യത്തിന് എന്ത് സംഭവിക്കുന്നു?",
    "options": [
      { "text": "അത് കുറയുന്നു.", "isCorrect": false },
      { "text": "അത് രാത്രിയുടെ ദൈർഘ്യത്തിന് തുല്യമാകുന്നു.", "isCorrect": false },
      { "text": "അത് കൂടുന്നു (അനുമാനം).", "isCorrect": true },
      { "text": "അത് ഒരുപോലെ തുടരുന്നു.", "isCorrect": false }
    ]
  },
  {
    "question": "**ജല തന്മാത്ര** രൂപീകരിക്കുന്ന രണ്ട് മൂലകങ്ങൾ ഏവ?",
    "options": [
      { "text": "നൈട്രജനും ഹൈഡ്രജനും", "isCorrect": false },
      { "text": "കാർബണും ഓക്സിജനും", "isCorrect": false },
      { "text": "സോഡിയവും ക്ലോറിനും", "isCorrect": false },
      { "text": "ഹൈഡ്രജനും ഓക്സിജനും", "isCorrect": true }
    ]
  },
  {
    "question": "Avogadro സോഫ്റ്റ്‌വെയർ തുറന്ന ശേഷം ഒരു തന്മാത്രാ ഘടന വരയ്ക്കുന്ന പ്രക്രിയയുടെ ഭാഗമല്ലാത്ത ഘട്ടം ഏത്?",
    "options": [
      { "text": "Draw Tool തിരഞ്ഞെടുക്കുക.", "isCorrect": false },
      { "text": "Adjust Hydrogen-ലെ ടിക്ക് മാർക്ക് നീക്കം ചെയ്യുക.", "isCorrect": false },
      { "text": "Extensions → Periodic Table തിരഞ്ഞെടുത്ത് വരയ്ക്കാൻ തുടങ്ങുക. (Periodic Table റഫറൻസിന് മാത്രമാണ്)", "isCorrect": true },
      { "text": "ആദ്യത്തെ മൂലകം ചേർക്കാൻ Canvas-ൽ ക്ലിക്കുചെയ്യുക.", "isCorrect": false }
    ]
  },
  {
    "question": "Avogadro-യിലെ Display Types-ൽ 'Labels' എന്നതിൽ ടിക്ക് ചെയ്യുന്നതിൻ്റെ ഉദ്ദേശ്യം എന്താണ്?",
    "options": [
      { "text": "തന്മാത്രയുടെ നിറം മാറ്റുന്നതിന്.", "isCorrect": false },
      { "text": "തന്മാത്രയെ 3D-യിൽ കറക്കുന്നതിന്.", "isCorrect": false },
      { "text": "തന്മാത്രയുടെ ജ്യാമിതി ഒപ്റ്റിമൈസ് ചെയ്യുന്നതിന്.", "isCorrect": false },
      { "text": "മൂലകങ്ങളുടെ ലേബലുകൾ ദൃശ്യമാക്കുന്നതിന്.", "isCorrect": true }
    ]
  },
  {
    "question": "Avogadro-യിലെ Navigation Mode-ൽ ഒരു തന്മാത്രാ മോഡൽ **Zoom in/out** ചെയ്യുന്നത് എങ്ങനെ?",
    "options": [
      { "text": "കീബോർഡിലെ ആരോ കീകൾ ഉപയോഗിച്ച്.", "isCorrect": false },
      { "text": "മൗസ് സ്ക്രോൾ വീൽ മുന്നോട്ടും പിന്നോട്ടും ചലിപ്പിച്ച്.", "isCorrect": true },
      { "text": "വലത് മൗസ് ബട്ടൺ അമർത്തി മൗസ് ചലിപ്പിച്ച്.", "isCorrect": false },
      { "text": "ഇടത് മൗസ് ബട്ടൺ അമർത്തി മൗസ് ചലിപ്പിച്ച്.", "isCorrect": false }
    ]
  },
  {
    "question": "അധ്യായത്തിലെ Avogadro മോഡലിൽ നിന്ന് നിരീക്ഷിക്കുമ്പോൾ **ഗ്ലൂക്കോസ്** തന്മാത്രയിൽ അടങ്ങിയിട്ടുള്ള മൂലകങ്ങൾ ഏവ?",
    "options": [
      { "text": "ഹൈഡ്രജൻ, ഓക്സിജൻ, നൈട്രജൻ", "isCorrect": false },
      { "text": "ഹൈഡ്രജൻ, ഓക്സിജൻ, കാർബൺ", "isCorrect": true },
      { "text": "കാർബൺ, സിങ്ക്, ക്ലോറിൻ", "isCorrect": false },
      { "text": "കാർബൺ, ക്ലോറിൻ, സോഡിയം", "isCorrect": false }
    ]
  },
  {
    "question": "മൂലകങ്ങളുടെ പേരുകളും ചിഹ്നങ്ങളും റഫറൻസിനായി Avogadro-യിൽ ഏത് മെനു ഓപ്ഷനിലാണ് നൽകിയിരിക്കുന്നത്?",
    "options": [
      { "text": "File → Save", "isCorrect": false },
      { "text": "Extensions → Periodic Table", "isCorrect": true },
      { "text": "Build → Insert → Molecule", "isCorrect": false },
      { "text": "Tools → Elements List", "isCorrect": false }
    ]
  },
  {
    "question": "ജലത്തിൻ്റെ **ഖരാവസ്ഥയിൽ (Ice)** (PhET സിമുലേഷൻ) തന്മാത്രകളുടെ ചലനത്തെക്കുറിച്ച് പൊതുവെയുള്ള നിരീക്ഷണം എന്താണ്?",
    "options": [
      { "text": "അവ സ്വതന്ത്രമായും വേഗത്തിലും ചലിക്കുന്നു.", "isCorrect": false },
      { "text": "അവയ്ക്ക് കുറഞ്ഞ ചലനം മാത്രമേയുള്ളൂ, പ്രധാനമായും നിശ്ചിത സ്ഥാനങ്ങളിൽ നിന്ന് വൈബ്രേറ്റ് ചെയ്യുന്നു.", "isCorrect": true },
      { "text": "അവ പരസ്പരം അകന്നാണ് സ്ഥിതിചെയ്യുന്നത്.", "isCorrect": false },
      { "text": "അവ എളുപ്പത്തിൽ പരസ്പരം കടന്നുപോകുന്നു.", "isCorrect": false }
    ]
  },
  {
    "question": "ഭൂമിയിൽ പുതുവർഷത്തെ ആദ്യം സ്വാഗതം ചെയ്യുന്ന സ്ഥലമായി അധ്യായത്തിൽ സൂചിപ്പിക്കുന്നത് ഏത്?",
    "options": [
      { "text": "ലണ്ടൻ (ഗ്രീൻവിച്ച്)", "isCorrect": false },
      { "text": "കൊൽക്കത്ത (ഇന്ത്യ)", "isCorrect": false },
      { "text": "റഷ്യ (മോസ്കോ)", "isCorrect": false },
      { "text": "ന്യൂസിലൻഡ്", "isCorrect": true }
    ]
  },
  {
    "question": "**Clock & Map Window** (സമയമേഖലാ മാപ്പ്) പ്രദർശിപ്പിക്കാൻ Sunclock മെനുബാറിലെ ഏത് ടൂളാണ് ഉപയോഗിക്കുന്നത്?",
    "options": [
      { "text": "Toggle Night (N)", "isCorrect": false },
      { "text": "Draw/Erase Meridian Tool (M)", "isCorrect": false },
      { "text": "Legal Time Mode (L)", "isCorrect": false },
      { "text": "Clock & Map Window (!)", "isCorrect": true }
    ]
  },
  {
    "question": "സൺക്ലോക്ക് സോഫ്റ്റ്‌വെയർ തുറന്ന ശേഷം രേഖാംശ രേഖകൾ പ്രദർശിപ്പിക്കാൻ ആദ്യം ചെയ്യേണ്ട ഘട്ടം എന്താണ്?",
    "options": [
      { "text": "Clock & Map Window (!) ടൂളിൽ ക്ലിക്കുചെയ്യുക.", "isCorrect": false },
      { "text": "Draw/Erase Meridian Tool (M) ടൂളിൽ ഒരുതവണ ക്ലിക്കുചെയ്യുക.", "isCorrect": true },
      { "text": "സമയം Legal Time (L) മോഡിലേക്ക് മാറ്റുക.", "isCorrect": false },
      { "text": "സിംഗിൾ കൊട്ടേഷൻ മാർക്ക് (') കീ അമർത്തുക.", "isCorrect": false }
    ]
  },
  {
    "question": "Sunclock-ൽ **സമയത്തിൻ്റെ വർദ്ധനവ് നിരക്ക്** (time increment rate) മാറ്റാൻ ഉപയോഗിക്കുന്ന കീ ഏതാണ്?",
    "options": [
      { "text": "L (Legal Time Mode)", "isCorrect": false },
      { "text": "A (Move time forward)", "isCorrect": false },
      { "text": "G (സമയ വർദ്ധനവ് നിരക്ക് മാറ്റുക)", "isCorrect": true },
      { "text": "B (Move time backward)", "isCorrect": false }
    ]
  },
  {
    "question": "ഉത്തരായനരേഖയ്ക്കും ദക്ഷിണായനരേഖയ്ക്കും ഇടയിൽ സൂര്യൻ്റെ സ്ഥാനം മാറുന്നതിന് (അയനം) കാരണം എന്ത്?",
    "options": [
      { "text": "ഭൂമിയുടെ ഭ്രമണ വേഗതയിലെ മാറ്റം.", "isCorrect": false },
      { "text": "ഭൂമി പരിക്രമണം ചെയ്യുമ്പോൾ അച്ചുതണ്ടിന് സംഭവിക്കുന്ന സ്ഥിരമായ ചരിവ്.", "isCorrect": true },
      { "text": "ചന്ദ്രൻ്റെ ആകർഷണ ബലം.", "isCorrect": false },
      { "text": "സൂര്യൻ്റെ താപനിലയിലെ മാറ്റം.", "isCorrect": false }
    ]
  },
  {
    "question": "**സെപ്റ്റംബർ 24 മുതൽ മാർച്ച് 20** വരെയുള്ള കാലയളവിൽ സൂര്യൻ്റെ സ്ഥാനം ഏത് അർദ്ധഗോളത്തിന് മുകളിലാണ്?",
    "options": [
      { "text": "ഉത്തരാർദ്ധഗോളം", "isCorrect": false },
      { "text": "ദക്ഷിണാർദ്ധഗോളം", "isCorrect": true },
      { "text": "ഭൂമധ്യരേഖാ പ്രദേശം", "isCorrect": false },
      { "text": "ഉത്തരായനരേഖ", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു പദാർത്ഥത്തിൻ്റെ ഗുണങ്ങൾ നിലനിർത്തുന്ന ഏറ്റവും ചെറിയ കണികയെ അതിൻ്റെ എന്താണ് വിളിക്കുന്നത്?",
    "options": [
      { "text": "ആറ്റം", "isCorrect": false },
      { "text": "സംയുക്തം", "isCorrect": false },
      { "text": "മൂലകം", "isCorrect": false },
      { "text": "തന്മാത്ര (Molecule)", "isCorrect": true }
    ]
  },
  {
    "question": "Avogadro-യിൽ ജല തന്മാത്ര വരയ്ക്കുമ്പോൾ, ഹൈഡ്രജൻ ആറ്റങ്ങളെ ഓക്സിജൻ ആറ്റവുമായി ബന്ധിപ്പിക്കാൻ ചെയ്യേണ്ട പ്രവർത്തനം ഏത്?",
    "options": [
      { "text": "ഫോർമുല ബാറിൽ H₂O എന്ന് ടൈപ്പ് ചെയ്യുക.", "isCorrect": false },
      { "text": "ഓക്സിജൻ ആറ്റത്തിൽ റൈറ്റ് ക്ലിക്കുചെയ്ത് 'Connect' തിരഞ്ഞെടുക്കുക.", "isCorrect": false },
      { "text": "Draw Tool ഉപയോഗിച്ച് ഓക്സിജൻ ആറ്റത്തിൽ ക്ലിക്കുചെയ്ത് ഹൈഡ്രജനിലേക്ക് വലിച്ചിടുക.", "isCorrect": true },
      { "text": "'Insert Bond' ടൂൾ ഉപയോഗിക്കുക.", "isCorrect": false }
    ]
  },
  {
    "question": "Avogadro-യിലെ Navigation Mode-ൽ ഒരു തന്മാത്രാ മോഡൽ **കറക്കുന്നത് (Rotate)** എങ്ങനെ?",
    "options": [
      { "text": "വലത് മൗസ് ബട്ടൺ അമർത്തി മൗസ് ചലിപ്പിച്ച്.", "isCorrect": false },
      { "text": "Tools മെനുവിൽ നിന്ന് 'Rotate' തിരഞ്ഞെടുത്ത്.", "isCorrect": false },
      { "text": "മൗസ് സ്ക്രോൾ വീൽ ചലിപ്പിച്ച്.", "isCorrect": false },
      { "text": "ഇടത് മൗസ് ബട്ടൺ അമർത്തി മൗസ് ചലിപ്പിച്ച്.", "isCorrect": true }
    ]
  },
  {
    "question": "**PhET** സിമുലേഷൻ സോഫ്റ്റ്‌വെയർ ഏത് രണ്ട് വിഷയങ്ങൾക്കായുള്ള സിമുലേഷനുകളുടെ ശേഖരമാണ്?",
    "options": [
      { "text": "സോഷ്യൽ സയൻസും ഭാഷയും", "isCorrect": false },
      { "text": "കംപ്യൂട്ടർ സയൻസും സംഗീതവും", "isCorrect": false },
      { "text": "ശാസ്ത്രവും ഗണിതശാസ്ത്രവും", "isCorrect": true },
      { "text": "രസതന്ത്രവും ജീവശാസ്ത്രവും", "isCorrect": false }
    ]
  },
  {
    "question": "ജലത്തിൻ്റെ **ദ്രാവകാവസ്ഥയിൽ** (Liquid State - PhET സിമുലേഷൻ) തന്മാത്രകളുടെ ചലനത്തെക്കുറിച്ച് പൊതുവെയുള്ള നിരീക്ഷണം എന്താണ്?",
    "options": [
      { "text": "അവ അടുത്തടുത്താണ്, എന്നാൽ മിതമായ ചലനത്തോടെ പരസ്പരം കടന്നുപോകാൻ കഴിയും.", "isCorrect": true },
      { "text": "അവ സ്ഥിരമായി ഉറപ്പിക്കുകയും ചലിക്കാതിരിക്കുകയും ചെയ്യുന്നു.", "isCorrect": false },
      { "text": "അവ പൂർണ്ണമായും നിശ്ചലമാണ്.", "isCorrect": false },
      { "text": "അവ ക്രമരഹിതമായി ചലിക്കുന്നു, പക്ഷേ പരസ്പരം അകന്നുനിൽക്കുന്നു.", "isCorrect": false }
    ]
  },
  {
    "question": "ഡിസംബർ 22 ന് ശേഷം ഏത് തീയതി മുതൽക്കാണ് സൂര്യൻ്റെ സ്ഥാനം ദക്ഷിണായനരേഖയിൽ നിന്ന് ഉത്തരായനരേഖയിലേക്ക് നീങ്ങാൻ തുടങ്ങുന്നത്?",
    "options": [
      { "text": "മാർച്ച് 21", "isCorrect": false },
      { "text": "സെപ്റ്റംബർ 23", "isCorrect": false },
      { "text": "ജൂൺ 21 ന് ശേഷം", "isCorrect": false },
      { "text": "ഡിസംബർ 22 ന് ശേഷം (അനുമാനം)", "isCorrect": true }
    ]
  },
  {
    "question": "മാപ്പിൽ **സൂര്യനെ** ദൃശ്യമാക്കാൻ സഹായിക്കുന്ന Sunclock ടൂൾ ഏത്?",
    "options": [
      { "text": "Draw/Erase parallel [P]", "isCorrect": false },
      { "text": "Toggle Night [N]", "isCorrect": false },
      { "text": "Clock & Map Window [!]", "isCorrect": false },
      { "text": "Toggle Sun/Moon [Y]", "isCorrect": true }
    ]
  },
  {
    "question": "Avogadro-യിൽ ഒരു തന്മാത്ര വരയ്ക്കുമ്പോൾ, ആദ്യത്തെ മൂലകം ചേർക്കുന്നതിനായി Canvas-ൽ ക്ലിക്കുചെയ്യുന്നതിനുമുമ്പ് ചെയ്യുന്ന പ്രവർത്തനം ഏത്?",
    "options": [
      { "text": "Extensions → Periodic Table തിരഞ്ഞെടുക്കുക.", "isCorrect": false },
      { "text": "Navigation Tool തിരഞ്ഞെടുക്കുക.", "isCorrect": false },
      { "text": "Display Types-ൽ 'Labels' ടിക്ക് ചെയ്യുക.", "isCorrect": false },
      { "text": "മൂലകം തിരഞ്ഞെടുത്ത് **Adjust Hydrogen**-ൽ നിന്ന് ടിക്ക് മാർക്ക് നീക്കം ചെയ്യുക.", "isCorrect": true }
    ]
  },
  {
    "question": "Avogadro-യിലെ Insert Fragment വിൻഡോയിൽ നിന്ന് തിരഞ്ഞെടുക്കുന്ന മുൻകൂട്ടി തയ്യാറാക്കിയ ഗ്ലൂക്കോസ് തന്മാത്രാ മോഡലിൻ്റെ ഫയൽ എക്സ്റ്റൻഷൻ എന്താണ്?",
    "options": [
      { "text": ".odp", "isCorrect": false },
      { "text": ".ods", "isCorrect": false },
      { "text": ".odt", "isCorrect": false },
      { "text": ".cjson", "isCorrect": true }
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
