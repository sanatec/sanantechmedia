document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "LibreOffice Calc-ൻ്റെ പ്രാഥമിക ധർമ്മം എന്താണ്?",
    "options": [
      { "text": "വെക്റ്റർ ഗ്രാഫിക്സ് സൃഷ്ടിക്കാനും എഡിറ്റ് ചെയ്യാനും.", "isCorrect": false },
      { "text": "വലിയ അളവിലുള്ള ഡാറ്റ പ്രോസസ്സ് ചെയ്യാനും വിശകലനം ചെയ്യാനും അതിൽ നിന്ന് നിഗമനങ്ങളിൽ എത്താനും.", "isCorrect": true },
      { "text": "ഉയർന്ന നിലവാരമുള്ള വാർത്താക്കുറിപ്പുകളും മാഗസിനുകളും തയ്യാറാക്കാൻ.", "isCorrect": false },
      { "text": "ജ്യാമിതി പ്രശ്നങ്ങൾക്ക് ഗണിതശാസ്ത്ര മാതൃകകൾ വികസിപ്പിക്കാൻ.", "isCorrect": false }
    ]
  },
  {
    "question": "സംഖ്യകൾ, വാക്കുകൾ, ചിത്രങ്ങൾ, അല്ലെങ്കിൽ വീഡിയോകൾ പോലുള്ള അസംസ്കൃതവും സംസ്കരിക്കാത്തതുമായ വിവരങ്ങളെ സൂചിപ്പിക്കാൻ ഉപയോഗിക്കുന്ന പദം ഏതാണ്?",
    "options": [
      { "text": "വിവരം (Information)", "isCorrect": false },
      { "text": "ഡാറ്റ (Data)", "isCorrect": true },
      { "text": "റിപ്പോർട്ട് (Report)", "isCorrect": false },
      { "text": "വിശകലനം (Analysis)", "isCorrect": false }
    ]
  },
  {
    "question": "അസംസ്കൃത ഡാറ്റ ക്രമീകരിക്കുകയും വിശകലനം ചെയ്യുകയും ചെയ്യുമ്പോൾ അത് എന്തായി മാറുന്നു?",
    "options": [
      { "text": "സ്ഥിതിവിവരക്കണക്കുകൾ (Statistics)", "isCorrect": false },
      { "text": "അൽഗോരിതങ്ങൾ (Algorithms)", "isCorrect": false },
      { "text": "വിവരം (Information)", "isCorrect": true },
      { "text": "ഗ്രാഫുകൾ (Graphs)", "isCorrect": false }
    ]
  },
  {
    "question": "ഉപയോഗപ്രദമായ വിവരങ്ങൾ കണ്ടെത്തുന്നതിനായി ഡാറ്റ എക്‌സ്‌ട്രാക്റ്റുചെയ്യുക, വൃത്തിയാക്കുക, പരിവർത്തനം ചെയ്യുക, വ്യാഖ്യാനിക്കുക, മോഡലിംഗ് ചെയ്യുക എന്നീ പ്രക്രിയയെ എന്ത് വിളിക്കുന്നു?",
    "options": [
      { "text": "ഡാറ്റാ എൻട്രി (Data Entry)", "isCorrect": false },
      { "text": "ഡാറ്റാ വിഷ്വലൈസേഷൻ (Data Visualization)", "isCorrect": false },
      { "text": "ഡാറ്റാ അനാലിസിസ് (Data Analysis)", "isCorrect": true },
      { "text": "ഡാറ്റാ ബാക്കപ്പ് (Data Backup)", "isCorrect": false }
    ]
  },
  {
    "question": "LibreOffice Calc ഇൻ്റർഫേസിലെ ഏത് ഫീൽഡാണ് നിലവിൽ തിരഞ്ഞെടുത്ത സെല്ലിൻ്റെ ഫോർമുലയോ ഉള്ളടക്കമോ പ്രദർശിപ്പിക്കുന്നത്?",
    "options": [
      { "text": "സ്റ്റാറ്റസ് ബാർ (Status Bar)", "isCorrect": false },
      { "text": "ഫോർമുല ബാർ (Formula Bar)", "isCorrect": true },
      { "text": "ശീർഷക ബാർ (Title Bar)", "isCorrect": false },
      { "text": "പേര് ബോക്സ് (Name Box)", "isCorrect": false }
    ]
  },
  {
    "question": "LibreOffice Calc-ലെ **COUNTIF** ഫംഗ്ഷൻ്റെ പ്രാഥമിക ലക്ഷ്യം എന്താണ്?",
    "options": [
      { "text": "ഒരു ശ്രേണിയിലെ (range) എല്ലാ സെല്ലുകളും എണ്ണാൻ.", "isCorrect": false },
      { "text": "നിർദ്ദിഷ്ട വ്യവസ്ഥ പാലിക്കുന്ന സെല്ലുകളുടെ എണ്ണം എണ്ണാൻ.", "isCorrect": true },
      { "text": "സംഖ്യകൾ അടങ്ങിയ എല്ലാ സെല്ലുകളും എണ്ണാൻ.", "isCorrect": false },
      { "text": "ഒരു ശ്രേണിയിലെ മൂല്യങ്ങളുടെ ശരാശരി കണ്ടെത്താൻ.", "isCorrect": false }
    ]
  },
  {
    "question": "**COUNTIF** ഫംഗ്ഷൻ്റെ ശരിയായ സിൻ്റാക്സ് (ഘടന) എന്താണ്?",
    "options": [
      { "text": "COUNTIF(condition, range)", "isCorrect": false },
      { "text": "COUNTIF(range:condition)", "isCorrect": false },
      { "text": "COUNTIF(range; condition)", "isCorrect": true },
      { "text": "COUNTIF{range, condition}", "isCorrect": false }
    ]
  },
  {
    "question": "നിങ്ങൾ `=COUNTIF(A1:A10; \">50\")` ഉപയോഗിച്ചാൽ, ഈ ഫംഗ്ഷൻ എന്ത് ചെയ്യും?",
    "options": [
      { "text": "50-ന് തുല്യമായ സെല്ലുകൾ A1 മുതൽ A10 വരെ എണ്ണും.", "isCorrect": false },
      { "text": "50-ൽ കുറഞ്ഞ മൂല്യങ്ങൾ അടങ്ങിയ സെല്ലുകൾ A1 മുതൽ A10 വരെ എണ്ണും.", "isCorrect": false },
      { "text": "50-ൽ കൂടുതലുള്ള മൂല്യങ്ങൾ അടങ്ങിയ സെല്ലുകൾ A1 മുതൽ A10 വരെ എണ്ണും.", "isCorrect": true },
      { "text": "50-ൽ കൂടുതലുള്ള മൂല്യങ്ങളുടെ തുക കണക്കാക്കും.", "isCorrect": false }
    ]
  },
  {
    "question": "സാക്ഷരതാ നിരക്ക് വിശകലനം ചെയ്യുന്ന സന്ദർഭത്തിൽ, D2:D30 എന്ന കോളത്തിൽ സാക്ഷരതാ നിരക്ക് 90%-ൽ കൂടുതലുള്ള സംസ്ഥാനങ്ങളുടെ എണ്ണം കണ്ടെത്താൻ COUNTIF എങ്ങനെ ഉപയോഗിക്കും?",
    "options": [
      { "text": "=COUNTIF(D2:D30; \"90%\")", "isCorrect": false },
      { "text": "=COUNTIF(D2:D30; \">90\")", "isCorrect": true },
      { "text": "=SUMIF(D2:D30; \">90\")", "isCorrect": false },
      { "text": "=COUNT(D2:D30; 90%)", "isCorrect": false }
    ]
  },
  {
    "question": "COUNTIF ഫംഗ്ഷനിലെ മാനദണ്ഡം (criteria / condition) ഏത് തരം ആർഗ്യുമെൻ്റ് ആണ്?",
    "options": [
      { "text": "ഒരു സംഖ്യാ മൂല്യം മാത്രം.", "isCorrect": false },
      { "text": "ഒരു സെൽ റഫറൻസ് മാത്രം.", "isCorrect": false },
      { "text": "ഇരട്ട ഉദ്ധരണി ചിഹ്നങ്ങളിൽ (' \" ') നൽകിയ ടെക്സ്റ്റ്, സംഖ്യ, അല്ലെങ്കിൽ താരതമ്യ ഓപ്പറേറ്റർ, അല്ലെങ്കിൽ ഒരു സെൽ റഫറൻസ്.", "isCorrect": true },
      { "text": "ഉദ്ധരണി ചിഹ്നങ്ങൾ ഇല്ലാത്ത ഒരു ഫോർമുല.", "isCorrect": false }
    ]
  },
  {
    "question": "`=COUNTIF(A1:A5; \"Kerala\")` എന്ത് കണക്കാക്കും?",
    "options": [
      { "text": "A1:A5-ൽ 'Kerala' അല്ലാത്ത സെല്ലുകളുടെ എണ്ണം.", "isCorrect": false },
      { "text": "'Kerala' എന്ന് പേരുള്ള സെല്ലുകളിലെ മൂല്യങ്ങളുടെ തുക.", "isCorrect": false },
      { "text": "A1:A5-ൽ 'Kerala' എന്ന വാചകം കൃത്യമായി അടങ്ങിയ സെല്ലുകളുടെ എണ്ണം.", "isCorrect": true },
      { "text": "A1:A5-ലെ സെല്ലുകളുടെ ശരാശരി മൂല്യം.", "isCorrect": false }
    ]
  },
  {
    "question": "D കോളത്തിൽ 70% ൽ താഴെ സാക്ഷരതാ നിരക്കുള്ള സംസ്ഥാനങ്ങളുടെ എണ്ണം എണ്ണാൻ, ശരിയായ COUNTIF ഫോർമുല ഏതാണ്?",
    "options": [
      { "text": "=COUNTIF(D:D; \"<70\")", "isCorrect": false },
      { "text": "=COUNTIF(D2:D30; \"<70\")", "isCorrect": true },
      { "text": "=COUNTIF(D2:D30; 70)", "isCorrect": false },
      { "text": "=COUNTIF(D2:D30; \"<70%\")", "isCorrect": false }
    ]
  },
  {
    "question": "C1:C10 ശ്രേണിയിലെ ശൂന്യമായ സെല്ലുകൾ എണ്ണണമെങ്കിൽ, ഏത് COUNTIF ഫോർമുലയാണ് ശരി?",
    "options": [
      { "text": "=COUNTIF(C1:C10; \" \")", "isCorrect": false },
      { "text": "=COUNTIF(C1:C10; \"=0\")", "isCorrect": false },
      { "text": "=COUNTIF(C1:C10; \"\")", "isCorrect": true },
      { "text": "=COUNTIF(C1:C10; EMPTY)", "isCorrect": false }
    ]
  },
  {
    "question": "സെൽ A1-ൽ 100 ഉണ്ടെങ്കിൽ, ഏത് COUNTIF വ്യവസ്ഥയാണ് അതിനെ എണ്ണുക?",
    "options": [
      { "text": "\">=101\"", "isCorrect": false },
      { "text": "\"<100\"", "isCorrect": false },
      { "text": "\"=100\"", "isCorrect": true },
      { "text": "\"<>100\"", "isCorrect": false }
    ]
  },
  {
    "question": "COUNTIF ഫോർമുലയിൽ താരതമ്യ ഓപ്പറേറ്ററുകൾ (> , < പോലുള്ളവ) അടങ്ങിയ വ്യവസ്ഥകൾ ഇരട്ട ഉദ്ധരണി ചിഹ്നങ്ങളിൽ (' \" ') ഉൾപ്പെടുത്തുന്നത് എന്തുകൊണ്ടാണ്?",
    "options": [
      { "text": "അതൊരു സെൽ ശ്രേണി ആയതുകൊണ്ട്.", "isCorrect": false },
      { "text": "സാധാരണ ഗണിത പ്രവർത്തനങ്ങളിൽ നിന്ന് ഓപ്പറേറ്ററെ വേർതിരിച്ചറിയാൻ.", "isCorrect": true },
      { "text": "വ്യവസ്ഥ 100-ൽ കൂടുതലാണെങ്കിൽ മാത്രം.", "isCorrect": false },
      { "text": "ഇതിൻ്റെ ആവശ്യമില്ല.", "isCorrect": false }
    ]
  },
  {
    "question": "LibreOffice Calc-ലെ **LOOKUP** ഫംഗ്ഷൻ്റെ ധർമ്മം എന്താണ്?",
    "options": [
      { "text": "നിർദ്ദിഷ്ട വ്യവസ്ഥ പാലിക്കുന്ന സെല്ലുകളുടെ എണ്ണം എണ്ണാൻ.", "isCorrect": false },
      { "text": "ക്രമീകരിച്ച (sorted) ഒരു ശ്രേണിയിൽ (വരിയിലോ കോളത്തിലോ) ഒരു മൂല്യം തിരയുകയും മറ്റൊരു ശ്രേണിയിൽ നിന്ന് അതിന് അനുബന്ധമായ മൂല്യം തിരികെ നൽകുകയും ചെയ്യാൻ.", "isCorrect": true },
      { "text": "ഒരു ശ്രേണിയിലെ സെല്ലുകളുടെ ശരാശരി കണ്ടെത്താൻ.", "isCorrect": false },
      { "text": "ഒരു സെല്ലിൻ്റെ ഫോർമാറ്റ് മാറ്റാൻ.", "isCorrect": false }
    ]
  },
  {
    "question": "**LOOKUP** ഫംഗ്ഷന് (വെക്റ്റർ ഫോം) ആവശ്യമായ മൂന്ന് ആർഗ്യുമെൻ്റുകൾ ഏതെല്ലാം?",
    "options": [
      { "text": "Criteria, Range, Sum_Range", "isCorrect": false },
      { "text": "Search_Value, Search_Range, Result_Range", "isCorrect": true },
      { "text": "Database, Field, Criteria", "isCorrect": false },
      { "text": "Value, Row, Column", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു സ്‌കോറിൻ്റെ അടിസ്ഥാനത്തിൽ ഗ്രേഡ് നൽകാൻ LOOKUP ഉപയോഗിക്കുമ്പോൾ, തിരയൽ ശ്രേണി (lookup table-ലെ സ്‌കോർ കോളം പോലുള്ളവ) എങ്ങനെയായിരിക്കണം?",
    "options": [
      { "text": "ടെക്സ്റ്റ് മൂല്യങ്ങൾ മാത്രം അടങ്ങിയിരിക്കണം.", "isCorrect": false },
      { "text": "ആരോഹണ ക്രമത്തിൽ (ascending order) ക്രമീകരിച്ചിരിക്കണം.", "isCorrect": true },
      { "text": "അവരോഹണ ക്രമത്തിൽ (descending order) ക്രമീകരിച്ചിരിക്കണം.", "isCorrect": false },
      { "text": "മറച്ചുവെച്ചിരിക്കണം.", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു സ്‌കോർ 55 ആണെങ്കിൽ, LOOKUP ടേബിളിലെ അതിരുകൾ [40-ന് താഴെ: D, 40 മുതൽ 59 വരെ: C, 60 മുതൽ 79 വരെ: B] എങ്കിൽ, LOOKUP ഫംഗ്ഷൻ ഏത് ഗ്രേഡ് തിരികെ നൽകും?",
    "options": [
      { "text": "A", "isCorrect": false },
      { "text": "B", "isCorrect": false },
      { "text": "C", "isCorrect": true },
      { "text": "D", "isCorrect": false }
    ]
  },
  {
    "question": "സ്‌കോറിംഗ് സംവിധാനങ്ങളിൽ (സ്‌കോർ ഗ്രേഡിലേക്ക് മാറ്റുന്നത് പോലുള്ളവ) LOOKUP ഉപയോഗിക്കുന്നതിൻ്റെ പ്രധാന പ്രയോജനം എന്താണ്?",
    "options": [
      { "text": "ഇത് 80-ന് മുകളിലുള്ള സ്‌കോറുകളിൽ മാത്രമേ പ്രവർത്തിക്കൂ.", "isCorrect": false },
      { "text": "ഗ്രേഡിംഗ് മാനദണ്ഡങ്ങൾ ഒരു പ്രത്യേക പട്ടികയിൽ എളുപ്പത്തിൽ കൈകാര്യം ചെയ്യാനും മാറ്റാനും ഇത് അനുവദിക്കുന്നു.", "isCorrect": true },
      { "text": "ഷീറ്റ് എഡിറ്റ് ചെയ്യുന്നതിൽ നിന്ന് ഇത് തടയുന്നു.", "isCorrect": false },
      { "text": "ഇത് ശരാശരി സ്കോർ സ്വയമേവ കണക്കാക്കുന്നു.", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു ഡാറ്റാ ടേബിളിലെ ആദ്യ കോളത്തിൽ ലംബമായി (Vertically) തിരയുന്നതിനായി രൂപകൽപ്പന ചെയ്‌തിട്ടുള്ളതും LOOKUP-ന് ഒരു ബദലായതുമായ ഫംഗ്ഷൻ ഏതാണ്?",
    "options": [
      { "text": "HLOOKUP", "isCorrect": false },
      { "text": "SUMIF", "isCorrect": false },
      { "text": "VLOOKUP", "isCorrect": true },
      { "text": "AVERAGE", "isCorrect": false }
    ]
  },
  {
    "question": "LOOKUP ഫോർമുലയിൽ, Search_Value (തിരയൽ മൂല്യം) കണ്ടെത്തിയില്ലെങ്കിൽ, ഫംഗ്ഷൻ എന്ത് ചെയ്യും?",
    "options": [
      { "text": "തിരയൽ ശ്രേണിയിലെ അടുത്ത വലിയ മൂല്യം തിരികെ നൽകുന്നു.", "isCorrect": false },
      { "text": "ഒരു പിശക് സന്ദേശം (#N/A) തിരികെ നൽകുന്നു.", "isCorrect": false },
      { "text": "Search_Value-ന് തുല്യമോ അതിൽ കുറവോ ആയ തിരയൽ ശ്രേണിയിലെ ഏറ്റവും വലിയ മൂല്യം തിരികെ നൽകുന്നു.", "isCorrect": true },
      { "text": "0 തിരികെ നൽകുന്നു.", "isCorrect": false }
    ]
  },
  {
    "question": "A2 സെല്ലിലെ സ്കോറിനുള്ള ഗ്രേഡ് ലഭിക്കുന്നതിന്, F2:G5-ലെ ടേബിൾ ഉപയോഗിച്ച് (F2:F5 സ്കോർ അതിർത്തിയും G2:G5 ഗ്രേഡും), ശരിയായ ഫോർമുല ഘടന ഏതാണ്?",
    "options": [
      { "text": "=LOOKUP(A2; F2:F5; G2:G5)", "isCorrect": true },
      { "text": "=LOOKUP(F2:G5; A2)", "isCorrect": false },
      { "text": "=LOOKUP(A2; F2:G5)", "isCorrect": false },
      { "text": "=LOOKUP(A2, F2:F5, G2:G5)", "isCorrect": false }
    ]
  },
  {
    "question": "ഫോർമുല മറ്റ് സെല്ലുകളിലേക്ക് വലിച്ചിടുമ്പോൾ LOOKUP-ൻ്റെ തിരയൽ ശ്രേണിക്ക് അബ്സല്യൂട്ട് സെൽ റഫറൻസുകൾ (ഉദാഹരണത്തിന്, $F$2:$F$5) ഉപയോഗിക്കുന്നത് എന്തുകൊണ്ടാണ്?",
    "options": [
      { "text": "കണക്കുകൂട്ടൽ വേഗത കൂട്ടാൻ.", "isCorrect": false },
      { "text": "ഫോർമുല പകർത്തുമ്പോൾ റഫറൻസ് ശ്രേണി മാറില്ലെന്ന് ഉറപ്പാക്കാൻ.", "isCorrect": true },
      { "text": "എല്ലാ ഉപയോക്താക്കൾക്കും ഗ്രേഡുകൾ ദൃശ്യമാക്കാൻ.", "isCorrect": false },
      { "text": "ശ്രേണിയെ ടെക്സ്റ്റ് ഫോർമാറ്റിലേക്ക് മാറ്റാൻ.", "isCorrect": false }
    ]
  },
  {
    "question": "തിരയൽ പട്ടികയിലെ (search range) സ്കോറുകൾ ആരോഹണ ക്രമത്തിൽ (ascending order) ക്രമീകരിച്ചിട്ടില്ലെങ്കിൽ എന്ത് സംഭവിക്കും?",
    "options": [
      { "text": "LOOKUP ഫംഗ്ഷൻ ശരിയായ ഫലം തന്നെ നൽകും.", "isCorrect": false },
      { "text": "ഫംഗ്ഷൻ തെറ്റായ ഫലങ്ങൾ നൽകിയേക്കാം.", "isCorrect": true },
      { "text": "ഫംഗ്ഷൻ ഡാറ്റ സ്വയമേവ ക്രമീകരിക്കും.", "isCorrect": false },
      { "text": "ഫോർമുല ഒരു പിശക് സന്ദേശം (#REF) പ്രദർശിപ്പിക്കും.", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു ഡാറ്റാ ടേബിളിലെ റെക്കോർഡുകൾ ഒന്നോ അതിലധികമോ ഫീൽഡുകളിലെ ഉള്ളടക്കത്തെ അടിസ്ഥാനമാക്കി ഒരു പ്രത്യേക ക്രമത്തിൽ (ആരോഹണം അല്ലെങ്കിൽ അവരോഹണം) ക്രമീകരിക്കുന്ന പ്രക്രിയയെ എന്ത് വിളിക്കുന്നു?",
    "options": [
      { "text": "ഡാറ്റാ ഫിൽട്ടറിംഗ് (Data Filtering)", "isCorrect": false },
      { "text": "ഡാറ്റാ അനാലിസിസ് (Data Analysis)", "isCorrect": false },
      { "text": "ഡാറ്റാ സോർട്ടിംഗ് (Data Sorting)", "isCorrect": true },
      { "text": "ഡാറ്റാ ലുക്കപ്പ് (Data Lookup)", "isCorrect": false }
    ]
  },
  {
    "question": "LibreOffice Calc-ൽ ഒരു ഡാറ്റാ ടേബിൾ ക്രമീകരിക്കാൻ (Sort) സാധാരണയായി പിന്തുടരുന്ന മെനു പാത ഏതാണ്?",
    "options": [
      { "text": "File → Sort", "isCorrect": false },
      { "text": "Insert → Data → Sort", "isCorrect": false },
      { "text": "Data → Sort", "isCorrect": true },
      { "text": "Tools → Sort", "isCorrect": false }
    ]
  },
  {
    "question": "LibreOffice Calc-ൽ ടെക്സ്റ്റ് ക്രമീകരിക്കുന്നതിനുള്ള (Sorting) ഡിഫോൾട്ട് ക്രമം എന്താണ്?",
    "options": [
      { "text": "ആരോഹണം (Ascending) (A to Z)", "isCorrect": true },
      { "text": "അവരോഹണം (Descending) (Z to A)", "isCorrect": false },
      { "text": "ക്രമരഹിതം (Random)", "isCorrect": false },
      { "text": "നീളം അനുസരിച്ച് (By Length)", "isCorrect": false }
    ]
  },
  {
    "question": "'Total Score' എന്ന കോളത്തെ അടിസ്ഥാനമാക്കി അവരോഹണ ക്രമത്തിൽ (Descending order) ഡാറ്റ ക്രമീകരിച്ചാൽ, ഏറ്റവും കൂടുതൽ സ്കോർ നേടിയ വിദ്യാർത്ഥി എവിടെയാണ് പ്രത്യക്ഷപ്പെടുക?",
    "options": [
      { "text": "ലിസ്റ്റിൻ്റെ താഴെയായി.", "isCorrect": false },
      { "text": "ലിസ്റ്റിൻ്റെ മുകളിലായി.", "isCorrect": true },
      { "text": "ലിസ്റ്റിൻ്റെ മധ്യത്തിൽ.", "isCorrect": false },
      { "text": "ഡാറ്റ ക്രമീകരിക്കുകയില്ല.", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു സ്പ്രെഡ്ഷീറ്റിലെ **ഡാറ്റാ ഫിൽട്ടറിംഗ്**ൻ്റെ പ്രധാന ധർമ്മം എന്താണ്?",
    "options": [
      { "text": "ഡാറ്റയുടെ ക്രമം മാറ്റാൻ.", "isCorrect": false },
      { "text": "പട്ടികയിലെ എല്ലാ ഡാറ്റയും മറച്ചുവെക്കാൻ.", "isCorrect": false },
      { "text": "നിർദ്ദിഷ്ട മാനദണ്ഡങ്ങൾ പാലിക്കുന്ന ഡാറ്റ മാത്രം പ്രദർശിപ്പിക്കാനും ബാക്കിയുള്ളവ താൽക്കാലികമായി മറച്ചുവെക്കാനും.", "isCorrect": true },
      { "text": "മൂല്യങ്ങളുടെ തുക കണക്കാക്കാൻ.", "isCorrect": false }
    ]
  },
  {
    "question": "'A' ഡിവിഷനിലെ എല്ലാ വിദ്യാർത്ഥികളെയും കണ്ടെത്തുന്നത് പോലെ, ഒരു കോളത്തിൽ നിലവിലുള്ള മൂല്യങ്ങളെ അടിസ്ഥാനമാക്കിയുള്ള ലളിതമായ ഫിൽട്ടറിംഗിന് ഏറ്റവും അനുയോജ്യമായ ഫിൽട്ടറിംഗ് തരം ഏതാണ്?",
    "options": [
      { "text": "സ്റ്റാൻഡേർഡ് ഫിൽട്ടർ (Standard Filter)", "isCorrect": false },
      { "text": "അഡ്വാൻസ്ഡ് ഫിൽട്ടർ (Advanced Filter)", "isCorrect": false },
      { "text": "ഓട്ടോഫിൽട്ടർ (AutoFilter)", "isCorrect": true },
      { "text": "കണ്ടീഷണൽ ഫിൽട്ടർ (Conditional Filter)", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു ഡാറ്റാ ശ്രേണിയിൽ **ഓട്ടോഫിൽട്ടർ** പ്രയോഗിക്കാൻ ഉപയോഗിക്കുന്ന മെനു ഓപ്ഷൻ ഏതാണ്?",
    "options": [
      { "text": "Data → Sort", "isCorrect": false },
      { "text": "Data → Filter → AutoFilter", "isCorrect": true },
      { "text": "Tools → Filter", "isCorrect": false },
      { "text": "Insert → Filter", "isCorrect": false }
    ]
  },
  {
    "question": "ഒന്നിലധികം മാനദണ്ഡങ്ങൾ ('Grade A' കൂടാതെ 'Division B' പോലുള്ളവ) അല്ലെങ്കിൽ സങ്കീർണ്ണമായ മാനദണ്ഡങ്ങൾ ('Score > 90' പോലുള്ളവ) ഉപയോഗിക്കേണ്ടിവരുമ്പോൾ ആവശ്യമായ ഫിൽട്ടറിംഗ് രീതി ഏതാണ്?",
    "options": [
      { "text": "ഓട്ടോഫിൽട്ടർ (AutoFilter)", "isCorrect": false },
      { "text": "സ്റ്റാൻഡേർഡ് ഫിൽട്ടർ (Standard Filter)", "isCorrect": true },
      { "text": "ലുക്കപ്പ് ഫിൽട്ടർ (Lookup Filter)", "isCorrect": false },
      { "text": "ഡാറ്റാ കൺസോളിഡേഷൻ (Data Consolidation)", "isCorrect": false }
    ]
  },
  {
    "question": "സ്റ്റാൻഡേർഡ് ഫിൽട്ടർ ഡയലോഗ് ബോക്സിൽ, ക്രൈറ്റീരിയ 1 (Score > 80) ഉം ക്രൈറ്റീരിയ 2 (Grade = A) ഉം ഒത്തുപോകുന്ന റെക്കോർഡുകൾ കണ്ടെത്താൻ നിങ്ങൾ ഉപയോഗിക്കുന്ന ലോജിക്കൽ ഓപ്പറേറ്റർ ഏതാണ്?",
    "options": [
      { "text": "OR", "isCorrect": false },
      { "text": "NOT", "isCorrect": false },
      { "text": "AND", "isCorrect": true },
      { "text": "XOR", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു ഫിൽട്ടർ (Standard അല്ലെങ്കിൽ AutoFilter) പ്രയോഗിച്ച ശേഷം, മുഴുവൻ ഡാറ്റാ സെറ്റും കാണുന്നതിലേക്ക് എങ്ങനെ മടങ്ങാം?",
    "options": [
      { "text": "മുഴുവൻ പട്ടികയും ഇല്ലാതാക്കുക.", "isCorrect": false },
      { "text": "ഫയൽ സേവ് ചെയ്ത് വീണ്ടും തുറക്കുക.", "isCorrect": false },
      { "text": "Data → Filter → Reset Filter എന്ന മെനു ഓപ്ഷൻ ഉപയോഗിക്കുക.", "isCorrect": true },
      { "text": "F11 കീ അമർത്തുക.", "isCorrect": false }
    ]
  },
  {
    "question": "LibreOffice Calc-ൽ ഒരു പ്രത്യേക സെല്ലിലെ ഉള്ളടക്കം മറ്റുള്ളവർ എഡിറ്റ് ചെയ്യുന്നതിൽ നിന്ന് തടയാൻ ആവശ്യമായ ആദ്യപടി എന്താണ്?",
    "options": [
      { "text": "പാസ്‌വേഡ് ഉപയോഗിച്ച് ഷീറ്റ് നേരിട്ട് സംരക്ഷിക്കുക.", "isCorrect": false },
      { "text": "സെൽ(കൾ) തിരഞ്ഞെടുത്ത് Format Cells → Cell Protection ടാബ് വഴി 'Protect' പ്രയോഗിക്കുക.", "isCorrect": true },
      { "text": "COUNTIF ഫംഗ്ഷൻ ഉപയോഗിക്കുക.", "isCorrect": false },
      { "text": "സെല്ലിൻ്റെ ബാക്ക്ഗ്രൗണ്ട് കളർ മാറ്റുക.", "isCorrect": false }
    ]
  },
  {
    "question": "Calc-ൽ സെൽ സംരക്ഷണ ക്രമീകരണങ്ങൾ സജീവമാക്കാൻ ആവശ്യമായ അവസാന ഘട്ടം എന്താണ്?",
    "options": [
      { "text": "'Format → Cells' പ്രയോഗിക്കുക.", "isCorrect": false },
      { "text": "പാസ്‌വേഡ് നൽകിക്കൊണ്ടോ അല്ലാതെയോ 'Tools → Protect Spreadsheet → Sheet' മെനു ഓപ്ഷൻ ഉപയോഗിക്കുക.", "isCorrect": true },
      { "text": "ഫിൽട്ടർ മാനദണ്ഡങ്ങൾ സജ്ജമാക്കുക.", "isCorrect": false },
      { "text": "ഡോക്യുമെൻ്റ് ഒരു PDF ഫയലിലേക്ക് മാറ്റുക.", "isCorrect": false }
    ]
  },
  {
    "question": "Cell Protection ടാബിലെ 'Hide Formula' ഓപ്ഷൻ ചെക്ക് ചെയ്യുന്നത് എന്ത് നേടാൻ സഹായിക്കുന്നു?",
    "options": [
      { "text": "ഫോർമുല എഡിറ്റ് ചെയ്യുന്നത് തടയുന്നു, പക്ഷേ ഫോർമുല ബാറിൽ ദൃശ്യമാകും.", "isCorrect": false },
      { "text": "ഷീറ്റ് സംരക്ഷിച്ചുകഴിഞ്ഞാൽ ഫോർമുല ബാറിൽ നിന്ന് ഫോർമുല മറയ്ക്കുന്നു, പക്ഷേ ഫലം സെല്ലിൽ ദൃശ്യമായിരിക്കും.", "isCorrect": true },
      { "text": "സെല്ലിലെ ഉള്ളടക്കം (ഫലം) മറയ്ക്കുകയും ഫോർമുല കാണിക്കുകയും ചെയ്യുന്നു.", "isCorrect": false },
      { "text": "മുഴുവൻ സ്പ്രെഡ്ഷീറ്റ് ഡോക്യുമെൻ്റും ലോക്ക് ചെയ്യുന്നു.", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു പാസ്‌വേഡ് ഉപയോഗിച്ച് ഒരു ഷീറ്റ് സംരക്ഷിക്കാൻ നിങ്ങൾ തിരഞ്ഞെടുക്കുന്നത് എന്തുകൊണ്ടാണ്?",
    "options": [
      { "text": "ഫോർമുലകൾ ദൃശ്യമാക്കാൻ.", "isCorrect": false },
      { "text": "ആർക്കും ഡാറ്റ പരിഷ്കരിക്കാൻ അനുവദിക്കുന്നതിന്.", "isCorrect": false },
      { "text": "അനധികൃത ഉപയോക്താക്കൾ സംരക്ഷണം നീക്കം ചെയ്യുന്നതിൽ നിന്നും ഡാറ്റയോ ഫോർമുലകളോ മാറ്റുന്നതിൽ നിന്നും തടയാൻ.", "isCorrect": true },
      { "text": "ഓട്ടോമാറ്റിക് സോർട്ടിംഗ് പ്രവർത്തനക്ഷമമാക്കാൻ.", "isCorrect": false }
    ]
  },
  {
    "question": "LibreOffice Calc-ൽ ഒരു പുതിയ ഷീറ്റ് സംരക്ഷിക്കുമ്പോൾ, ഡിഫോൾട്ടായി ഏത് സെല്ലുകളാണ് സംരക്ഷിക്കപ്പെടുന്നത്?",
    "options": [
      { "text": "ഫോർമുലകളുള്ള സെല്ലുകൾ മാത്രം.", "isCorrect": false },
      { "text": "ശൂന്യമായ സെല്ലുകൾ മാത്രം.", "isCorrect": false },
      { "text": "എല്ലാ സെല്ലുകളും 'Protected' എന്ന് അടയാളപ്പെടുത്തിയിരിക്കുന്നു.", "isCorrect": true },
      { "text": "ടെക്സ്റ്റ് മൂല്യങ്ങളുള്ള സെല്ലുകൾ മാത്രം.", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു സാധാരണ LibreOffice Calc സ്പ്രെഡ്ഷീറ്റ് ഡോക്യുമെൻ്റിൻ്റെ ഫയൽ എക്സ്റ്റൻഷൻ എന്താണ്?",
    "options": [
      { "text": ".ods", "isCorrect": true },
      { "text": ".ots", "isCorrect": false },
      { "text": ".xlsx", "isCorrect": false },
      { "text": ".pdf", "isCorrect": false }
    ]
  },
  {
    "question": "ഡോക്യുമെൻ്റിൽ സൂചിപ്പിച്ച ഒരു LibreOffice Calc സ്പ്രെഡ്ഷീറ്റ് ടെംപ്ലേറ്റിൻ്റെ (ഉദാഹരണത്തിന്, Census_India_2011.ots) ഫയൽ എക്സ്റ്റൻഷൻ എന്താണ്?",
    "options": [
      { "text": ".ods", "isCorrect": false },
      { "text": ".ots", "isCorrect": true },
      { "text": ".ott", "isCorrect": false },
      { "text": ".odt", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു OTT ഫയൽ തുറക്കുന്നതിന് സമാനമായി, ഒരു OTS ഫയൽ (ടെംപ്ലേറ്റ്) തുറക്കുമ്പോൾ നിങ്ങൾ ഉടൻ ചെയ്യേണ്ടത് എന്താണ്?",
    "options": [
      { "text": "COUNTIF ഫംഗ്ഷൻ പ്രവർത്തിപ്പിക്കുക.", "isCorrect": false },
      { "text": "ഡാറ്റ അവരോഹണ ക്രമത്തിൽ ക്രമീകരിക്കുക.", "isCorrect": false },
      { "text": "യഥാർത്ഥ ടെംപ്ലേറ്റിൽ ആകസ്മികമായ മാറ്റങ്ങൾ വരുന്നത് തടയാൻ ഫയൽ സേവ് ചെയ്യുക.", "isCorrect": true },
      { "text": "ഓട്ടോഫിൽട്ടർ പ്രയോഗിക്കുക.", "isCorrect": false }
    ]
  },
  {
    "question": "ജനസംഖ്യാ പഠനത്തിൻ്റെ പശ്ചാത്തലത്തിൽ, ഒരു രാജ്യത്തെ ജനസാന്ദ്രതയുടെ പഠനം പ്രധാനമായി കണക്കാക്കുന്നത് എന്തുകൊണ്ടാണ്?",
    "options": [
      { "text": "ഇതൊരു സ്റ്റാറ്റിസ്റ്റിക്കൽ നടപടിക്രമം മാത്രമാണ്.", "isCorrect": false },
      { "text": "ഒരു പ്രദേശത്തെ സാമൂഹിക-സാമ്പത്തിക ഘടകങ്ങളും അതിൻ്റെ ജനസാന്ദ്രതയും പരസ്പരം ബന്ധപ്പെട്ടിരിക്കുന്നു.", "isCorrect": true },
      { "text": "ഇത് COUNTIF ഫംഗ്ഷൻ ഉപയോഗിക്കാൻ സഹായിക്കുന്നു.", "isCorrect": false },
      { "text": "ഡാറ്റാ എൻട്രിക്കായി മാത്രം ഇത് ആവശ്യമാണ്.", "isCorrect": false }
    ]
  },
  {
    "question": "മുഴുവൻ ഡാറ്റാ ടേബിളും തിരഞ്ഞെടുക്കാതെ (അതായത്, ഒരു കോളം മാത്രം തിരഞ്ഞെടുത്ത്) **Sort** സവിശേഷത ഉപയോഗിച്ചാൽ അതിൻ്റെ ഡിഫോൾട്ട് പെരുമാറ്റം എന്താണ്?",
    "options": [
      { "text": "തിരഞ്ഞെടുപ്പ് പരിഗണിക്കാതെ മുഴുവൻ ഷീറ്റും ക്രമീകരിക്കും.", "isCorrect": false },
      { "text": "തിരഞ്ഞെടുത്ത കോളം മാത്രം ക്രമീകരിക്കും, ഇത് ഡാറ്റയിൽ പൊരുത്തക്കേടുകൾക്ക് കാരണമാകും.", "isCorrect": true },
      { "text": "ഇത് സ്വയമേവ ഒരു ഫിൽട്ടർ പ്രയോഗിക്കും.", "isCorrect": false },
      { "text": "ഇതൊരു പിശക് സന്ദേശം തിരികെ നൽകും.", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു വർക്ക്‌ഷീറ്റ് കാഴ്ചയിൽ നിന്ന് മറയ്ക്കാൻ Calc-ലെ ഏത് മെനു ഓപ്ഷനാണ് ഉപയോഗിക്കുന്നത്?",
    "options": [
      { "text": "Format → Sheet → Hide", "isCorrect": true },
      { "text": "Tools → Hide", "isCorrect": false },
      { "text": "Data → Hide", "isCorrect": false },
      { "text": "File → Hide Sheet", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു സ്പ്രെഡ്ഷീറ്റിൽ ഡാറ്റ നൽകുന്ന വരിയുടെയും കോളത്തിൻ്റെയും സംയോജനത്തെ എന്ത് വിളിക്കുന്നു?",
    "options": [
      { "text": "ശ്രേണി (Range)", "isCorrect": false },
      { "text": "വർക്ക്‌ഷീറ്റ് (Worksheet)", "isCorrect": false },
      { "text": "സെൽ (Cell)", "isCorrect": true },
      { "text": "ഫോർമുല ബാർ (Formula Bar)", "isCorrect": false }
    ]
  },
  {
    "question": "നിങ്ങൾ ഒരു പേരുകളുടെ ലിസ്റ്റ് ക്രമീകരിക്കുകയാണെങ്കിൽ, അക്ഷരമാലാ ക്രമത്തിൽ ക്രമീകരിക്കാൻ സാധാരണയായി ഉപയോഗിക്കുന്ന ഓർഡർ ഏതാണ്?",
    "options": [
      { "text": "അവരോഹണം (Descending) (Z-A)", "isCorrect": false },
      { "text": "ആരോഹണം (Ascending) (A-Z)", "isCorrect": true },
      { "text": "സംഖ്യാ ക്രമം (Numerical Order)", "isCorrect": false },
      { "text": "തീയതി ക്രമം (Date Order)", "isCorrect": false }
    ]
  },
  {
    "question": "ഡാറ്റയിൽ കണക്കുകൂട്ടലുകൾ നടത്താൻ ഒരു സ്പ്രെഡ്ഷീറ്റ് പ്രാഥമികമായി ഉപയോഗിക്കുന്നത് എന്താണ്?",
    "options": [
      { "text": "ടെക്സ്റ്റ് എഡിറ്റർമാർ (Text Editors)", "isCorrect": false },
      { "text": "ഫോർമുലകളും ഫംഗ്ഷനുകളും (Formulas and Functions)", "isCorrect": true },
      { "text": "ഇമേജ് ഫിൽട്ടറുകൾ (Image Filters)", "isCorrect": false },
      { "text": "വെക്റ്റർ ഗ്രാഫിക്സ് (Vector Graphics)", "isCorrect": false }
    ]
  },
  {
    "question": "A1 മുതൽ A10 വരെയുള്ള തുടർച്ചയായ സെല്ലുകളുടെ ഒരു ശ്രേണി എളുപ്പത്തിൽ തിരഞ്ഞെടുക്കാൻ ഏത് കീ ഉപയോഗിക്കാം?",
    "options": [
      { "text": "Ctrl key", "isCorrect": false },
      { "text": "Shift key (ആദ്യത്തെയും അവസാനത്തെയും സെല്ലുകൾ തിരഞ്ഞെടുക്കുമ്പോൾ)", "isCorrect": true },
      { "text": "Alt key", "isCorrect": false },
      { "text": "Tab key", "isCorrect": false }
    ]
  },
  {
    "question": "ജനസാന്ദ്രതയിലെ പ്രാദേശിക വ്യതിയാനങ്ങൾ വിശകലനം ചെയ്യുന്നതിൻ്റെ പ്രാഥമിക ലക്ഷ്യം അത് എന്തുമായി ബന്ധപ്പെട്ടിരിക്കുന്നു എന്ന് മനസ്സിലാക്കാനാണ്?",
    "options": [
      { "text": "സ്പ്രെഡ്ഷീറ്റുകളുടെ നിറം.", "isCorrect": false },
      { "text": "പ്രദേശത്തെ സാമൂഹിക-സാമ്പത്തിക ഘടകങ്ങൾ.", "isCorrect": true },
      { "text": "ഡോക്യുമെൻ്റിൽ ഉപയോഗിക്കുന്ന ഡിഫോൾട്ട് ഫോണ്ട്.", "isCorrect": false },
      { "text": "LOOKUP ഫംഗ്ഷൻ്റെ സങ്കീർണ്ണത.", "isCorrect": false }
    ]
  },
  {
    "question": "യഥാർത്ഥ ഡാറ്റാ ഘടനയെ മാറ്റാതെ ഡാറ്റയുടെ വ്യത്യസ്ത കാഴ്ചകൾ കൈകാര്യം ചെയ്യാനും പ്രദർശിപ്പിക്കാനും LibreOffice Calc-ലെ ഏത് സവിശേഷതയാണ് ഉപയോഗിക്കുന്നത്?",
    "options": [
      { "text": "ഡാറ്റാ കൺസോളിഡേഷൻ (Data Consolidation)", "isCorrect": false },
      { "text": "സാഹചര്യങ്ങൾ (Scenarios)", "isCorrect": false },
      { "text": "ഫിൽട്ടറുകൾ (Filters)", "isCorrect": true },
      { "text": "ഡാറ്റാ വാലിഡേഷൻ (Data Validation)", "isCorrect": false }
    ]
  },
  {
    "question": "5-ാമത്തെ വരിയുടെയും 3-ാമത്തെ കോളത്തിൻ്റെയും സംഗമസ്ഥാനത്തുള്ള സെല്ലിൻ്റെ റഫറൻസ് എന്താണ്?",
    "options": [
      { "text": "E3", "isCorrect": false },
      { "text": "3E", "isCorrect": false },
      { "text": "C5", "isCorrect": true },
      { "text": "5C", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു നിർദ്ദിഷ്ട വ്യവസ്ഥ പാലിക്കുന്ന ഒരു ശ്രേണിയിലെ മൂല്യങ്ങളുടെ **തുക** കണക്കാക്കാൻ (ഉദാഹരണത്തിന്, 70-ൽ കൂടുതലുള്ള സ്കോറുകളുടെ തുക) നിങ്ങൾ ഏത് ഫംഗ്ഷൻ ഉപയോഗിക്കും?",
    "options": [
      { "text": "COUNTIF", "isCorrect": false },
      { "text": "SUM", "isCorrect": false },
      { "text": "SUMIF", "isCorrect": true },
      { "text": "LOOKUP", "isCorrect": false }
    ]
  },
  {
    "question": "സെൽ സംരക്ഷണം പ്രയോഗിക്കുമ്പോൾ, വേരിയബിൾ ഡാറ്റ (ഉദാഹരണത്തിന്, വിദ്യാർത്ഥികളുടെ സ്കോറുകൾ) അടങ്ങിയ സെല്ലുകൾ ഷീറ്റ് സംരക്ഷിക്കുന്നതിന് *മുമ്പ്* 'Not Protected' എന്ന് പ്രത്യേകമായി അടയാളപ്പെടുത്തുന്നത് എന്തുകൊണ്ടാണ്?",
    "options": [
      { "text": "അവരുടെ ഫോർമുലകൾ മറ്റുള്ളവരിൽ നിന്ന് മറയ്ക്കാൻ.", "isCorrect": false },
      { "text": "ഡിഫോൾട്ടായി എല്ലാ സെല്ലുകളും 'Protected' ആണ്, പ്രത്യേക സെല്ലുകളിൽ ഡാറ്റാ എൻട്രി അനുവദിക്കാൻ ഇത് ആവശ്യമാണ്.", "isCorrect": true },
      { "text": "LOOKUP ഫംഗ്ഷൻ സ്വയമേവ പ്രയോഗിക്കാൻ.", "isCorrect": false },
      { "text": "ഡാറ്റ സ്വയമേവ ക്രമീകരിക്കാൻ.", "isCorrect": false }
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
