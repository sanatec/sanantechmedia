document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "ഫസ്സി സെലക്ഷൻ ടൂൾ ഏത് ടെക്നിക്ക് ഉപയോഗിച്ചാണ് സമാന നിറങ്ങൾ തിരഞ്ഞെടുക്കുന്നത്?",
    "options": [
      {"text": "ബ്രൈറ്റ്നസ്", "isCorrect": false},
      {"text": "ത്രെഷോൾഡ്", "isCorrect": true},
      {"text": "ആൽഫ ചാനൽ", "isCorrect": false},
      {"text": "കോൺട്രാസ്റ്റ്", "isCorrect": false}
    ]
  },
  {
    "question": "GIMP-ൽ ഒരു സെലക്ടഡ് ഏരിയ ഇല്ലാതാക്കാൻ ഏത് കീ അമർത്തണം?",
    "options": [
      {"text": "ഡിലീറ്റ്", "isCorrect": true},
      {"text": "ഷിഫ്റ്റ്", "isCorrect": false},
      {"text": "എന്റർ", "isCorrect": false},
      {"text": "ബാക്സ്പേസ്", "isCorrect": false}
    ]
  },
  {
    "question": "GIMP-ൽ ഒരു സെലക്ഷൻ റദ്ദാക്കാൻ എങ്ങനെ?",
    "options": [
      {"text": "ഡിസെലക്ട് ടൂൾ ഉപയോഗിക്കുക", "isCorrect": false},
      {"text": "Esc കീ അമർത്തുക", "isCorrect": false},
      {"text": "സെലക്ട് മെനുവിൽ നിന്ന് None തിരഞ്ഞെടുക്കുക", "isCorrect": true},
      {"text": "ഇമേജിന് പുറത്ത് ക്ലിക്ക് ചെയ്യുക", "isCorrect": false}
    ]
  },
  {
    "question": "RGB മാത്രമുള്ള ഇമേജിൽ ബാക്ക്‌ഗ്രൗണ്ട് റിമൂവ് ചെയ്യുന്നതിന് മുമ്പ് എന്ത് ചേർക്കണം?",
    "options": [
      {"text": "ആൽഫ ചാനൽ", "isCorrect": true},
      {"text": "ബ്ലർ ഇഫക്റ്റ്", "isCorrect": false},
      {"text": "ടെക്സ്റ്റ് ലെയർ", "isCorrect": false},
      {"text": "പുതിയ ലെയർ", "isCorrect": false}
    ]
  },
  {
    "question": "ഏത് മെനുവിലാണ് കോപ്പി ചെയ്ത ഇമേജ് പുതിയ ലെയറായി പേസ്റ്റ് ചെയ്യുന്നത്?",
    "options": [
      {"text": "സെലക്ട്", "isCorrect": false},
      {"text": "എഡിറ്റ്", "isCorrect": true},
      {"text": "ഫയൽ", "isCorrect": false},
      {"text": "ലെയർ", "isCorrect": false}
    ]
  },
  {
    "question": "RGBA-യിലെ 'A' എന്തിനെ സൂചിപ്പിക്കുന്നു?",
    "options": [
      {"text": "അലൈൻമെന്റ്", "isCorrect": false},
      {"text": "അഡ്ജസ്റ്റ്മെന്റ്", "isCorrect": false},
      {"text": "ആൽഫ", "isCorrect": true},
      {"text": "ആങ്കർ", "isCorrect": false}
    ]
  },
  {
    "question": "ആൽഫ ചാനലിന്റെ പ്രാഥമിക ധർമം എന്താണ്?",
    "options": [
      {"text": "നിറ തീവ്രത മാറ്റുന്നു", "isCorrect": false},
      {"text": "സുതാര്യത നിയന്ത്രിക്കുന്നു", "isCorrect": true},
      {"text": "ബ്രൈറ്റ്നസ് ക്രമീകരിക്കുന്നു", "isCorrect": false},
      {"text": "നിഴലുകൾ സൃഷ്ടിക്കുന്നു", "isCorrect": false}
    ]
  },
  {
    "question": "GIMP-ൽ RGBA ചാനലുകൾ എവിടെ കാണാം?",
    "options": [
      {"text": "എഡിറ്റ് → പ്രിഫറൻസസ്", "isCorrect": false},
      {"text": "ടൂൾസ് → കളർ ടൂൾസ്", "isCorrect": false},
      {"text": "വിൻഡോസ് → ഡോക്കബിൾ ഡയലോഗ്സ് → ചാനലുകൾ", "isCorrect": true},
      {"text": "ലെയർ → ട്രാൻസ്പരൻസി", "isCorrect": false}
    ]
  },
  {
    "question": "ക്യാൻവാസിലെ ഇമേജിന്റെ സ്ഥാനം മാറ്റാൻ ഏത് ടൂൾ ഉപയോഗിക്കുന്നു?",
    "options": [
      {"text": "സ്കെയിൽ ടൂൾ", "isCorrect": false},
      {"text": "ഫ്ലിപ്പ് ടൂൾ", "isCorrect": false},
      {"text": "മൂവ് ടൂൾ", "isCorrect": true},
      {"text": "പാത്ത്സ് ടൂൾ", "isCorrect": false}
    ]
  },
  {
    "question": "GIMP-ൽ ഇമേജിന്റെ വലുപ്പം ക്രമീകരിക്കാൻ ഏത് ടൂൾ ഉപയോഗിക്കുന്നു?",
    "options": [
      {"text": "ഫസ്സി സെലക്ഷൻ ടൂൾ", "isCorrect": false},
      {"text": "സ്കെയിൽ ടൂൾ", "isCorrect": true},
      {"text": "മൂവ് ടൂൾ", "isCorrect": false},
      {"text": "ക്രോപ്പ് ടൂൾ", "isCorrect": false}
    ]
  },
  {
    "question": "സ്കെയിൽ ടൂൾ ഉപയോഗിക്കുമ്പോൾ വീതിയും ഉയരവും വെവ്വേറെ മാറ്റാൻ എന്ത് ചെയ്യണം?",
    "options": [
      {"text": "ഷിഫ്റ്റ് കീ പിടിക്കുക", "isCorrect": false},
      {"text": "ചെയിൻ ലിങ്ക് അൺലിങ്ക് ചെയ്യുക", "isCorrect": true},
      {"text": "പാത്ത് ടൂൾ ഉപയോഗിക്കുക", "isCorrect": false},
      {"text": "ചെയിൻ ലിങ്ക് ലോക്ക് ചെയ്യുക", "isCorrect": false}
    ]
  },
  {
    "question": "ബ്രൈറ്റ്നസ്-കോൺട്രാസ്റ്റ് ക്രമീകരണം ഏത് മെനുവിലാണ്?",
    "options": [
      {"text": "ലെയർ", "isCorrect": false},
      {"text": "ടൂൾസ്", "isCorrect": false},
      {"text": "കളർസ്", "isCorrect": true},
      {"text": "ഫയൽ", "isCorrect": false}
    ]
  },
  {
    "question": "പാത്ത്സ് ടൂളിന്റെ ഉദ്ദേശ്യം എന്താണ്?",
    "options": [
      {"text": "ലെയറുകൾ ഡ്യൂപ്ലിക്കേറ്റ് ചെയ്യാൻ", "isCorrect": false},
      {"text": "നിർവ്വചിച്ച ആകൃതികൾ ഉപയോഗിച്ച് ഇമേജിന്റെ നിർദ്ദിഷ്ട ഭാഗങ്ങൾ തിരഞ്ഞെടുക്കാൻ", "isCorrect": true},
      {"text": "ഇമേജ് ബ്രൈറ്റ്നസ് ക്രമീകരിക്കാൻ", "isCorrect": false},
      {"text": "ടെക്സ്റ്റ് ഇഫക്റ്റുകൾ സൃഷ്ടിക്കാൻ", "isCorrect": false}
    ]
  },
  {
    "question": "പാത്ത്സ് ടൂൾ ഉപയോഗിച്ച് ഒരു സെലക്ഷൻ പൂർത്തിയാക്കാൻ എങ്ങനെ?",
    "options": [
      {"text": "ഇമേജ് ഡബിൾ-ക്ലിക്ക് ചെയ്യുക", "isCorrect": false},
      {"text": "വലത്-ക്ലിക്ക് ചെയ്ത് Complete തിരഞ്ഞെടുക്കുക", "isCorrect": false},
      {"text": "Ctrl പിടിച്ച് സ്റ്റാർട്ടിംഗ് പോയിന്റിൽ ക്ലിക്ക് ചെയ്യുക", "isCorrect": true},
      {"text": "എന്റർ അമർത്തുക", "isCorrect": false}
    ]
  },
  {
    "question": "നിങ്ങളുടെ പോസ്റ്ററിൽ രണ്ടാമത്തെ ബോട്ടിൽ ഇമേജ് സൃഷ്ടിക്കാനുള്ള എളുപ്പവഴി ഏതാണ്?",
    "options": [
      {"text": "ഓരോ ബോട്ടിനും പാത്ത്സ് ടൂൾ ഉപയോഗിക്കുക", "isCorrect": false},
      {"text": "ബോട്ടൾ വീണ്ടും വരയ്ക്കുക", "isCorrect": false},
      {"text": "നിലവിലുള്ള ബോട്ടൾ ലെയർ ഡ്യൂപ്ലിക്കേറ്റ് ചെയ്യുക", "isCorrect": true},
      {"text": "മറ്റൊരു ഫയലിൽ നിന്ന് കോപ്പി ചെയ്യുക", "isCorrect": false}
    ]
  },
  {
    "question": "പോസ്റ്ററിൽ ടെക്സ്റ്റ് ചേർക്കാൻ ഏത് ടൂൾ ഉപയോഗിക്കുന്നു?",
    "options": [
      {"text": "ലെറ്റർ ടൂൾ", "isCorrect": false},
      {"text": "ടൈപ്പ് ടൂൾ", "isCorrect": false},
      {"text": "ഫോണ്ട് ടൂൾ", "isCorrect": false},
      {"text": "ടെക്സ്റ്റ് ടൂൾ", "isCorrect": true}
    ]
  },
  {
    "question": "ടെക്സ്റ്റിന് ത്രിമാന രൂപം നൽകാൻ എങ്ങനെ?",
    "options": [
      {"text": "ഫോണ്ട് നിറം മാറ്റുന്നതിലൂടെ", "isCorrect": false},
      {"text": "ഷാഡോ ഇഫക്റ്റുകൾ ചേർത്ത്", "isCorrect": true},
      {"text": "സ്കെയിൽ ടൂൾ ഉപയോഗിച്ച്", "isCorrect": false},
      {"text": "ബ്രൈറ്റ്നസ് ക്രമീകരിച്ച്", "isCorrect": false}
    ]
  },
  {
    "question": "വേഗത്തിൽ ഷാഡോ ഇഫക്റ്റ് സൃഷ്ടിക്കാൻ ഏത് ഫിൽട്ടർ ഉപയോഗിക്കുന്നു?",
    "options": [
      {"text": "ബ്രൈറ്റ്നസ്-കോൺട്രാസ്റ്റ്", "isCorrect": false},
      {"text": "ആൽഫ ടു ലോഗോ", "isCorrect": false},
      {"text": "ഡ്രോപ്പ് ഷാഡോ", "isCorrect": true},
      {"text": "ഗോസിയൻ ബ്ലർ", "isCorrect": false}
    ]
  },
  {
    "question": "GIMP-ൽ ഡ്രോപ്പ് ഷാഡോ ഓപ്ഷൻ എവിടെയാണ്?",
    "options": [
      {"text": "കളർസ് → മാപ്പ്", "isCorrect": false},
      {"text": "ഫിൽട്ടേഴ്സ് → ബ്ലർ", "isCorrect": false},
      {"text": "ലെയർ → ട്രാൻസ്പരൻസി", "isCorrect": false},
      {"text": "ഫിൽട്ടേഴ്സ് → ലൈറ്റ് ആൻഡ് ഷാഡോ → ഡ്രോപ്പ് ഷാഡോ", "isCorrect": true}
    ]
  },
  {
    "question": "ചതുര ആകൃതികൾ സൃഷ്ടിക്കാൻ ഏത് ടൂൾ ഉപയോഗിക്കാം?",
    "options": [
      {"text": "മൂവ് ടൂൾ", "isCorrect": false},
      {"text": "ഫസ്സി സെലക്ഷൻ ടൂൾ", "isCorrect": false},
      {"text": "റെക്ടാംഗിൾ സെലക്ഷൻ ടൂൾ", "isCorrect": true},
      {"text": "പാത്ത് ടൂൾ", "isCorrect": false}
    ]
  },
  {
    "question": "സെലക്ടഡ് ഷേപ്പിൽ നിറം നിറയ്ക്കാൻ എങ്ങനെ?",
    "options": [
      {"text": "മൂവ് ടൂൾ ഉപയോഗിച്ച്", "isCorrect": false},
      {"text": "പാത്ത് ടൂൾ ഉപയോഗിച്ച്", "isCorrect": false},
      {"text": "ടെക്സ്റ്റ് ടൂൾ ഉപയോഗിച്ച്", "isCorrect": false},
      {"text": "ബക്കറ്റ് ഫിൽ ടൂൾ ഉപയോഗിച്ച്", "isCorrect": true}
    ]
  },
  {
    "question": "വെവ്വേറെ ലെയറുകളിൽ ഷേപ്പുകൾ സൃഷ്ടിക്കുന്നതിന്റെ ഗുണം എന്താണ്?",
    "options": [
      {"text": "അവ ആകസ്മികമായി ഡിലീറ്റ് ചെയ്യാൻ കഴിയില്ല", "isCorrect": false},
      {"text": "കുറഞ്ഞ മെമ്മറി ഉപയോഗിക്കുന്നു", "isCorrect": false},
      {"text": "സ്വതന്ത്രമായി എഡിറ്റ് ചെയ്യാനും മെച്ചപ്പെടുത്താനും കഴിയും", "isCorrect": true},
      {"text": "വേഗത്തിൽ ലോഡ് ചെയ്യുന്നു", "isCorrect": false}
    ]
  },
  {
    "question": "ഒരു GIMP പ്രോജക്റ്റ് ഫയൽ ഇമേജ് ഫയലാക്കി മാറ്റുന്ന പ്രക്രിയയെ എന്ത് വിളിക്കുന്നു?",
    "options": [
      {"text": "കൺവെർട്ടിംഗ്", "isCorrect": false},
      {"text": "റെൻഡറിംഗ്", "isCorrect": false},
      {"text": "സേവിംഗ്", "isCorrect": false},
      {"text": "എക്സ്പോർട്ടിംഗ്", "isCorrect": true}
    ]
  },
  {
    "question": "ഇനിപ്പറയുന്നവയിൽ ഏതാണ് GIMP-ൽ എക്സ്പോർട്ട് ചെയ്യാൻ കഴിയാത്ത ഇമേജ് ഫയൽ ഫോർമാറ്റ്?",
    "options": [
      {"text": "PNG", "isCorrect": false},
      {"text": "PDF", "isCorrect": true},
      {"text": "JPG", "isCorrect": false},
      {"text": "TIFF", "isCorrect": false}
    ]
  },
  {
    "question": "മൂവ് ടൂൾ ഉപയോഗിക്കുമ്പോൾ ഇമേജും ബാക്ക്‌ഗ്രൗണ്ടും ഒരുമിച്ച് നീങ്ങുന്നുവെങ്കിൽ, സാധ്യമായ കാരണം എന്താണ്?",
    "options": [
      {"text": "ഇമേജ് ഫോർമാറ്റ് പിന്തുണയ്ക്കുന്നില്ല", "isCorrect": false},
      {"text": "മൂവ് ടൂൾ തകർന്നിരിക്കുന്നു", "isCorrect": false},
      {"text": "ഇമേജ് ബാക്ക്‌ഗ്രൗണ്ട് ലെയറിലേക്ക് പേസ്റ്റ് ചെയ്തിട്ടുണ്ട്", "isCorrect": true},
      {"text": "ഇമേജ് ലോക്ക് ചെയ്തിരിക്കുന്നു", "isCorrect": false}
    ]
  },
  {
    "question": "GIMP-ന്റെ സ്വന്തം പ്രോജക്റ്റ് ഫയൽ ഫോർമാറ്റ് ഏതാണ്?",
    "options": [
      {"text": "PSD", "isCorrect": false},
      {"text": "GIMP", "isCorrect": false},
      {"text": "XCF", "isCorrect": true},
      {"text": "IMP", "isCorrect": false}
    ]
  },
  {
    "question": "ചിത്രങ്ങളുടെയോ ആകൃതികളുടെയോ ദിശ മാറ്റാൻ ഏത് ടൂൾ ഉപയോഗിക്കാം?",
    "options": [
      {"text": "റൊട്ടേറ്റ് ടൂൾ", "isCorrect": false},
      {"text": "ഷിയർ ടൂൾ", "isCorrect": false},
      {"text": "ഫ്ലിപ്പ് ടൂൾ", "isCorrect": true},
      {"text": "പെർസ്പെക്ടീവ് ടൂൾ", "isCorrect": false}
    ]
  },
  {
    "question": "ടെക്സ്റ്റിൽ ഗോസിയൻ ബ്ലർ പ്രയോഗിക്കുമ്പോൾ എന്ത് ഇഫക്റ്റ് ഉണ്ടാകും?",
    "options": [
      {"text": "ടെക്സ്റ്റ് സുതാര്യമാകുന്നു", "isCorrect": false},
      {"text": "ടെക്സ്റ്റ് നിറം മാറുന്നു", "isCorrect": false},
      {"text": "സോഫ്റ്റ് ഷാഡോ ഇഫക്റ്റ് സൃഷ്ടിക്കുന്നു", "isCorrect": true},
      {"text": "ടെക്സ്റ്റ് കൂടുതൽ മൂർച്ചയുള്ളതാക്കുന്നു", "isCorrect": false}
    ]
  },
  {
    "question": "GIMP-ൽ ഒരു ലെയർ റീനെയിം ചെയ്യാൻ എങ്ങനെ?",
    "options": [
      {"text": "ടെക്സ്റ്റ് ടൂൾ ഉപയോഗിക്കുക", "isCorrect": false},
      {"text": "F2 അമർത്തുക", "isCorrect": false},
      {"text": "ലെയർ നാമം ഡബിൾ-ക്ലിക്ക് ചെയ്യുക", "isCorrect": true},
      {"text": "വലത്-ക്ലിക്ക് ചെയ്ത് Rename തിരഞ്ഞെടുക്കുക", "isCorrect": false}
    ]
  },
  {
    "question": "ലെയർ ഉയർത്താനോ താഴ്ത്താനോ ഉള്ള ഓപ്ഷനുകൾ ഏത് പാലറ്റിൽ ഉണ്ട്?",
    "options": [
      {"text": "ചാനലുകൾ പാലറ്റ്", "isCorrect": false},
      {"text": "ബ്രഷുകൾ പാലറ്റ്", "isCorrect": false},
      {"text": "ടൂൾസ് പാലറ്റ്", "isCorrect": false},
      {"text": "ലെയറുകൾ പാലറ്റ്", "isCorrect": true}
    ]
  },
  {
    "question": "ബ്രൈറ്റ്നസ്-കോൺട്രാസ്റ്റ് ഡയലോഗിലെ 'സ്പ്ലിറ്റ് വ്യൂ' ഓപ്ഷന്റെ ഉദ്ദേശ്യം എന്താണ്?",
    "options": [
      {"text": "നിറങ്ങൾ വേർതിരിക്കാൻ", "isCorrect": false},
      {"text": "മിറർ ഇമേജ് സൃഷ്ടിക്കാൻ", "isCorrect": false},
      {"text": "ഇമേജ് രണ്ട് ഭാഗമാക്കാൻ", "isCorrect": false},
      {"text": "യഥാർത്ഥവും ക്രമീകരിച്ചതുമായ പതിപ്പുകൾ താരതമ്യം ചെയ്യാൻ", "isCorrect": true}
    ]
  },
  {
    "question": "ഇമേജിന്റെ ഒരു ഭാഗം മുറിക്കാൻ ഏത് ടൂൾ ഉപയോഗിക്കുന്നു?",
    "options": [
      {"text": "കട്ട് ടൂൾ", "isCorrect": false},
      {"text": "സ്കിസർസ് ടൂൾ", "isCorrect": false},
      {"text": "സ്ലൈസ് ടൂൾ", "isCorrect": false},
      {"text": "ക്രോപ്പ് ടൂൾ", "isCorrect": true}
    ]
  },
  {
    "question": "പോസ്റ്ററിലെ ഘടകങ്ങൾ സ്വതന്ത്രമായി ക്രമീകരിക്കാൻ എന്ത് ചെയ്യണം?",
    "options": [
      {"text": "ഒരു ലെയർ മാത്രം ഉപയോഗിക്കുക", "isCorrect": false},
      {"text": "പതിവായി സേവ് ചെയ്യുക", "isCorrect": false},
      {"text": "പ്രകാശമായ നിറങ്ങൾ മാത്രം ഉപയോഗിക്കുക", "isCorrect": false},
      {"text": "ഓരോ ഘടകവും വെവ്വേറെ ലെയറിൽ വയ്ക്കുക", "isCorrect": true}
    ]
  },
  {
    "question": "ഇനിപ്പറയുന്നവയിൽ ഏതാണ് ഇമേജ് എഡിറ്റിംഗുമായി ബന്ധപ്പെട്ട ജോലി അവസരം?",
    "options": [
      {"text": "അക്കൗണ്ടിംഗ്", "isCorrect": false},
      {"text": "കമ്പ്യൂട്ടർ പ്രോഗ്രാമിംഗ്", "isCorrect": false},
      {"text": "വെബ്സൈറ്റുകൾക്കായുള്ള ഗ്രാഫിക് ഡിസൈനിംഗ്", "isCorrect": true},
      {"text": "ഗണിതം പഠിപ്പിക്കൽ", "isCorrect": false}
    ]
  },
  {
    "question": "ഇമേജിൽ ആൽഫ ചാനൽ ചേർക്കുമ്പോൾ എന്ത് സംഭവിക്കും?",
    "options": [
      {"text": "ഇമേജ് ഫയൽ സൈസ് കുറയുന്നു", "isCorrect": false},
      {"text": "ഇമേജ് നിറങ്ങൾ കൂടുതൽ ശക്തമാകുന്നു", "isCorrect": false},
      {"text": "ഇമേജ് പ്രകാശമാകുന്നു", "isCorrect": false},
      {"text": "ഇമേജിന് സുതാര്യമായ പ്രദേശങ്ങൾ ഉണ്ടാകാം", "isCorrect": true}
    ]
  },
  {
    "question": "പച്ച നിറത്തിലുള്ള ബാക്ക്‌ഗ്രൗണ്ടിൽ നിന്ന് ചുവന്ന ആപ്പിൾ മാത്രം തിരഞ്ഞെടുക്കാൻ നിങ്ങൾ ആഗ്രഹിക്കുന്നു. ഏത് ടൂൾ ഫലപ്രദമായിരിക്കും?",
    "options": [
      {"text": "മൂവ് ടൂൾ", "isCorrect": false},
      {"text": "ടെക്സ്റ്റ് ടൂൾ", "isCorrect": false},
      {"text": "ഉചിതമായ ത്രെഷോൾഡ് ഉള്ള ഫസ്സി സെലക്ഷൻ ടൂൾ", "isCorrect": true},
      {"text": "ക്രോപ്പ് ടൂൾ", "isCorrect": false}
    ]
  },
  {
    "question": "നിങ്ങളുടെ പോസ്റ്റർ ടെക്സ്റ്റ് ബാക്ക്‌ഗ്രൗണ്ടിൽ നിന്ന് വ്യത്യസ്തമായി കാണപ്പെടുന്നില്ല. ഏത് ക്രമീകരണം സഹായിക്കും?",
    "options": [
      {"text": "ഫ്ലിപ്പ് ടൂൾ ഉപയോഗിക്കുക", "isCorrect": false},
      {"text": "ഇമേജ് വലുപ്പം കുറയ്ക്കുക", "isCorrect": false},
      {"text": "ബാക്ക്‌ഗ്രൗണ്ട് ലെയർ ഇല്ലാതാക്കുക", "isCorrect": false},
      {"text": "ടെക്സ്റ്റിലേക്ക് ഡ്രോപ്പ് ഷാഡോ ചേർക്കുക", "isCorrect": true}
    ]
  },
  {
    "question": "നിങ്ങളുടെ പോസ്റ്ററിൽ ഒന്നിലധികം ബോട്ടിൽ ഇമേജ് കോപ്പികൾ സൃഷ്ടിക്കേണ്ടതുണ്ട്. ഏറ്റവും കാര്യക്ഷമമായ രീതി ഏതാണ്?",
    "options": [
      {"text": "ഓരോ ബോട്ടിനും പാത്ത്സ് ടൂൾ ഉപയോഗിക്കുക", "isCorrect": false},
      {"text": "ഓരോ ബോട്ടിനും വെവ്വേറെ വരയ്ക്കുക", "isCorrect": false},
      {"text": "ബോട്ടൾ ലെയർ ഒന്നിലധികം തവണ ഡ്യൂപ്ലിക്കേറ്റ് ചെയ്യുക", "isCorrect": true},
      {"text": "വ്യത്യസ്ത ഫയലുകളിൽ നിന്ന് കോപ്പി ചെയ്ത് പേസ്റ്റ് ചെയ്യുക", "isCorrect": false}
    ]
  },
  {
    "question": "നിങ്ങളുടെ ഇമേജ് മങ്ങിയതായി കാണപ്പെടുകയും ജീവിതം ഇല്ലാതിരിക്കുകയും ചെയ്യുന്നു. ഏത് ക്രമീകരണം മെച്ചപ്പെടുത്തും?",
    "options": [
      {"text": "പുതിയ ലെയർ ചേർക്കുക", "isCorrect": false},
      {"text": "ക്യാൻവാസ് വലുപ്പം മാറ്റുക", "isCorrect": false},
      {"text": "ക്രോപ്പ് ടൂൾ ഉപയോഗിക്കുക", "isCorrect": false},
      {"text": "ബ്രൈറ്റ്നസ്, കോൺട്രാസ്റ്റ് വർദ്ധിപ്പിക്കുക", "isCorrect": true}
    ]
  },
  {
    "question": "നിങ്ങളുടെ പോസ്റ്ററിൽ ടെക്സ്റ്റിന് ഒരു ചതുരാകൃതിയിലുള്ള ബാക്ക്‌ഗ്രൗണ്ട് സൃഷ്ടിക്കാൻ നിങ്ങൾ ആഗ്രഹിക്കുന്നു. ഏത് ടൂളുകൾ ഉപയോഗിക്കും?",
    "options": [
      {"text": "ടെക്സ്റ്റ് ടൂൾ, മൂവ് ടൂൾ", "isCorrect": false},
      {"text": "പാത്ത് ടൂൾ, സ്കെയിൽ ടൂൾ", "isCorrect": false},
      {"text": "ഫസ്സി സെലക്ഷൻ, ഫ്ലിപ്പ് ടൂൾ", "isCorrect": false},
      {"text": "റെക്ടാംഗിൾ സെലക്ഷൻ ടൂൾ, ബക്കറ്റ് ഫിൽ ടൂൾ", "isCorrect": true}
    ]
  },
  {
    "question": "ഒരു ഇമേജ് പേസ്റ്റ് ചെയ്ത ശേഷം, നിങ്ങൾക്ക് അത് ബാക്ക്‌ഗ്രൗണ്ടിൽ നിന്ന് സ്വതന്ത്രമായി നീക്കാൻ കഴിയില്ല. എന്താണ് തെറ്റായത്?",
    "options": [
      {"text": "ഇമേജ് വളരെ വലുതാണ്", "isCorrect": false},
      {"text": "തെറ്റായ ഫയൽ ഫോർമാറ്റ് ഉപയോഗിച്ചു", "isCorrect": false},
      {"text": "മൂവ് ടൂൾ തകർന്നിരിക്കുന്നു", "isCorrect": false},
      {"text": "ഇമേജ് ബാക്ക്‌ഗ്രൗണ്ട് ലെയറിലേക്ക് പേസ്റ്റ് ചെയ്തിട്ടുണ്ട്", "isCorrect": true}
    ]
  },
  {
    "question": "നിങ്ങളുടെ പോസ്റ്റർ ഓൺലൈനിൽ പങ്കിടേണ്ടതുണ്ട്, പക്ഷേ ഫയൽ സൈസ് വളരെ വലുതാണ്. എന്ത് ചെയ്യണം?",
    "options": [
      {"text": "കറുപ്പും വെളുപ്പും നിറങ്ങൾ മാത്രം ഉപയോഗിക്കുക", "isCorrect": false},
      {"text": "XCF ഫോർമാറ്റിൽ സേവ് ചെയ്യുക", "isCorrect": false},
      {"text": "ചില ലെയറുകൾ ഇല്ലാതാക്കുക", "isCorrect": false},
      {"text": "കംപ്രഷൻ ഉപയോഗിച്ച് JPEG ആയി എക്സ്പോർട്ട് ചെയ്യുക", "isCorrect": true}
    ]
  },
  {
    "question": "ഒരു ഒബ്ജക്റ്റിന് പിന്നിൽ സോഫ്റ്റ് ഷാഡോ സൃഷ്ടിക്കാൻ നിങ്ങൾ ആഗ്രഹിക്കുന്നു. ഏത് ഫിൽട്ടർ ഉപയോഗിക്കും?",
    "options": [
      {"text": "കളർ ബാലൻസ്", "isCorrect": false},
      {"text": "ഷാർപ്പൻ", "isCorrect": false},
      {"text": "ബ്രൈറ്റ്നസ്-കോൺട്രാസ്റ്റ്", "isCorrect": false},
      {"text": "ഗോസിയൻ ബ്ലർ", "isCorrect": true}
    ]
  },
  {
    "question": "നിങ്ങളുടെ ഇമേജിന് കൃത്യമായ സെലക്ഷൻ ആവശ്യമായ സങ്കീർണ്ണമായ ആകൃതിയുണ്ട്. ഏത് ടൂൾ ഏറ്റവും അനുയോജ്യമാണ്?",
    "options": [
      {"text": "റെക്ടാംഗിൾ സെലക്ഷൻ ടൂൾ", "isCorrect": false},
      {"text": "ക്രോപ്പ് ടൂൾ", "isCorrect": false},
      {"text": "ഫസ്സി സെലക്ഷൻ ടൂൾ", "isCorrect": false},
      {"text": "പാത്ത്സ് ടൂൾ", "isCorrect": true}
    ]
  },
  {
    "question": "ഇമേജിന്റെ ഉയരം മാറ്റാതെ വീതി മാത്രം ക്രമീകരിക്കേണ്ടതുണ്ട്. ഇത് എങ്ങനെ ചെയ്യാം?",
    "options": [
      {"text": "ഷിഫ്റ്റ് പിടിച്ച് മൂവ് ടൂൾ ഉപയോഗിക്കുക", "isCorrect": false},
      {"text": "ഇമേജ് തിരശ്ചീനമായി ക്രോപ്പ് ചെയ്യുക", "isCorrect": false},
      {"text": "അതിനെ രൂപാന്തരപ്പെടുത്താൻ പാത്ത് ടൂൾ ഉപയോഗിക്കുക", "isCorrect": false},
      {"text": "സ്കെയിൽ ടൂളിലെ ചെയിൻ അൺലിങ്ക് ചെയ്ത് വീതി മാത്രം ക്രമീകരിക്കുക", "isCorrect": true}
    ]
  },
  {
    "question": "ടെക്സ്റ്റിന് ത്രിമാന ഇഫക്റ്റ് നൽകാൻ നിങ്ങൾ ആഗ്രഹിക്കുന്നു. ഏത് ടെക്നിക്ക് ഉപയോഗിക്കും?",
    "options": [
      {"text": "ബ്രൈറ്റ്നസ്-കോൺട്രാസ്റ്റ് ക്രമീകരണം ഉപയോഗിക്കുക", "isCorrect": false},
      {"text": "ഫോണ്ട് വലുപ്പം വർദ്ധിപ്പിക്കുക", "isCorrect": false},
      {"text": "ഫ്ലിപ്പ് ടൂൾ പ്രയോഗിക്കുക", "isCorrect": false},
      {"text": "ടെക്സ്റ്റ് ലെയർ ഡ്യൂപ്ലിക്കേറ്റ് ചെയ്ത് കറുപ്പ് നിറം നൽകി ബ്ലർ ചെയ്ത് ഷാഡോ ആയി സ്ഥാപിക്കുക", "isCorrect": true}
    ]
  },
  {
    "question": "നിങ്ങളുടെ പോസ്റ്ററിൽ ഒന്നിലധികം ഘടകങ്ങൾ വീണ്ടും ക്രമീകരിക്കേണ്ടതുണ്ട്. അവ എങ്ങനെ ഓർഗനൈസ് ചെയ്യണം?",
    "options": [
      {"text": "എല്ലാ ഘടകങ്ങളും ഒരു ലെയറിൽ", "isCorrect": false},
      {"text": "നിറം അനുസരിച്ച് ഗ്രൂപ്പുചെയ്ത ഘടകങ്ങൾ", "isCorrect": false},
      {"text": "യാദൃശ്ചികമായി സ്ഥാപിച്ച ഘടകങ്ങൾ", "isCorrect": false},
      {"text": "ഓരോ ഘടകവും അതിന്റേതായ ലെയറിൽ", "isCorrect": true}
    ]
  },
  {
    "question": "നിങ്ങളുടെ GIMP പോസ്റ്റർ ഒരു PowerPoint പ്രസന്റേഷനിൽ ഉപയോഗിക്കേണ്ടതുണ്ട്. എന്ത് ചെയ്യണം?",
    "options": [
      {"text": "പോസ്റ്ററിന്റെ സ്ക്രീൻഷോട്ട് എടുക്കുക", "isCorrect": false},
      {"text": "XCF ഫയൽ സേവ് ചെയ്ത് ഉൾപ്പെടുത്തുക", "isCorrect": false},
      {"text": "ഓരോ ലെയറും വെവ്വേറെ കോപ്പി ചെയ്ത് പേസ്റ്റ് ചെയ്യുക", "isCorrect": false},
      {"text": "പോസ്റ്റർ JPEG അല്ലെങ്കിൽ PNG ആയി എക്സ്പോർട്ട് ചെയ്യുക", "isCorrect": true}
    ]
  },
  {
    "question": "നിങ്ങളുടെ പോസ്റ്ററിനായി ബോട്ടിന്റെ മിറർ ഇമേജ് സൃഷ്ടിക്കാൻ നിങ്ങൾ ആഗ്രഹിക്കുന്നു. ഏത് ടൂൾ ഉപയോഗിക്കും?",
    "options": [
      {"text": "സ്കെയിൽ ടൂൾ", "isCorrect": false},
      {"text": "റൊട്ടേറ്റ് ടൂൾ", "isCorrect": false},
      {"text": "മൂവ് ടൂൾ", "isCorrect": false},
      {"text": "ഫ്ലിപ്പ് ടൂൾ", "isCorrect": true}
    ]
  },
  {
    "question": "നിങ്ങളുടെ ഇമേജിൽ സുതാര്യമായിരിക്കേണ്ട പ്രദേശങ്ങൾ സുതാര്യമല്ല. എന്താണ് കാണാതായത്?",
    "options": [
      {"text": "ഡ്രോപ്പ് ഷാഡോ", "isCorrect": false},
      {"text": "ബ്രൈറ്റ്നസ് ക്രമീകരണം", "isCorrect": false},
      {"text": "ടെക്സ്റ്റ് ലെയർ", "isCorrect": false},
      {"text": "ആൽഫ ചാനൽ", "isCorrect": true}
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
