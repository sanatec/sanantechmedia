document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "LibreOffice Calc-ൽ വിവരങ്ങൾ ചിട്ടപ്പെടുത്താനും വിശകലനം ചെയ്യാനും ഉപയോഗിക്കുന്ന ചെറിയ ചതുരങ്ങളെ എന്ത് വിളിക്കുന്നു?",
    "options": [
      { "text": "വർക്ക്ഷീറ്റ് (Worksheet)", "isCorrect": false },
      { "text": "കോളങ്ങൾ (Columns)", "isCorrect": false },
      { "text": "സെല്ലുകൾ (Cells)", "isCorrect": true },
      { "text": "റോസ് (Rows)", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു സെല്ലിനെ അതിൻ്റെ കോളം, റോ എന്നിവയുടെ പേരുകൾ സംയോജിപ്പിച്ച് തിരിച്ചറിയുന്നതിന് പറയുന്ന പേരെന്താണ് (ഉദാഹരണത്തിന്: A1, B2)?",
    "options": [
      { "text": "സെൽ അഡ്രസ്സ് (Cell Address)", "isCorrect": true },
      { "text": "സെൽ റേഞ്ച്", "isCorrect": false },
      { "text": "സെൽ റെഫറൻസ്", "isCorrect": false },
      { "text": "ആക്റ്റീവ് സെൽ", "isCorrect": false }
    ]
  },
  {
    "question": "LibreOffice Calc-ൽ സംഖ്യകളുടെ തുക കണ്ടെത്താൻ ഉപയോഗിക്കുന്ന ഫംഗ്ഷൻ ഏതാണ്?",
    "options": [
      { "text": "=SUM()", "isCorrect": true },
      { "text": "=TOTAL()", "isCorrect": false },
      { "text": "=PLUS()", "isCorrect": false },
      { "text": "=ADD()", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു സെല്ലിൽ നൽകിയിട്ടുള്ള ഫംഗ്ഷൻ മറ്റ് സെല്ലുകളിലേക്ക് കോപ്പി ചെയ്യുന്നതിനായി സെല്ലിൻ്റെ താഴെ വലത് മൂലയിൽ കാണുന്ന ചെറിയ '+' ചിഹ്നത്തെ എന്ത് വിളിക്കുന്നു?",
    "options": [
      { "text": "ഫിൽ ഹാൻഡിൽ (Fill Handle)", "isCorrect": true },
      { "text": "സെൽ കോപ്പിയർ", "isCorrect": false },
      { "text": "ഡ്രാഗ് ഹാൻഡിൽ", "isCorrect": false },
      { "text": "ഓട്ടോ കോപ്പി ടൂൾ", "isCorrect": false }
    ]
  },
  {
    "question": "ഫിൽ ഹാൻഡിൽ ഉപയോഗിച്ച് ഒരു ഫംഗ്ഷൻ കോപ്പി ചെയ്യുമ്പോൾ, അതിലെ എന്ത് ഘടകമാണ് പുതിയ സ്ഥാനങ്ങൾക്കനുസരിച്ച് സ്വയം ക്രമീകരിക്കുന്നത്?",
    "options": [
      { "text": "സെൽ റെഫറൻസുകൾ (Cell References)", "isCorrect": true },
      { "text": "കോളം വീതി", "isCorrect": false },
      { "text": "ഫോണ്ട് സൈസ്", "isCorrect": false },
      { "text": "സെൽ കളർ", "isCorrect": false }
    ]
  },
  {
    "question": "സംഖ്യകളുടെ ശരാശരി (Average) കണ്ടെത്താൻ LibreOffice Calc-ൽ ഉപയോഗിക്കുന്ന ഫംഗ്ഷൻ ഏതാണ്?",
    "options": [
      { "text": "=GETAVG()", "isCorrect": false },
      { "text": "=MEAN()", "isCorrect": false },
      { "text": "=AVERAGE()", "isCorrect": true },
      { "text": "=AVG()", "isCorrect": false }
    ]
  },
  {
    "question": "നിരവധി സെല്ലുകൾ ഒരൊറ്റ സെല്ലായി സംയോജിപ്പിക്കാൻ (combine) Calc-ൽ ഉപയോഗിക്കുന്ന സവിശേഷത ഏതാണ്?",
    "options": [
      { "text": "സെൽ മെർജ് (Cell Merge)", "isCorrect": true },
      { "text": "സെൽ റീസൈസ്", "isCorrect": false },
      { "text": "ഫിൽ ഹാൻഡിൽ", "isCorrect": false },
      { "text": "ഫോർമാറ്റ് കോപ്പി", "isCorrect": false }
    ]
  },
  {
    "question": "സെലക്ട് ചെയ്ത ഡാറ്റയുടെ അടിസ്ഥാനത്തിൽ ചാർട്ടോ ഗ്രാഫോ സൃഷ്ടിക്കാൻ LibreOffice Calc-ലെ ഏത് മെനുവാണ് ഉപയോഗിക്കുന്നത്?",
    "options": [
      { "text": "Insert → Chart", "isCorrect": true },
      { "text": "File → Chart", "isCorrect": false },
      { "text": "Data → Chart", "isCorrect": false },
      { "text": "Tools → Chart", "isCorrect": false }
    ]
  },
  {
    "question": "ചാർട്ടുകളും ഗ്രാഫുകളും ഉപയോഗിക്കുമ്പോൾ ഡാറ്റാ വിശകലനം കൂടുതൽ എളുപ്പമാക്കുന്നതിൻ്റെ കാരണം എന്ത്?",
    "options": [
      { "text": "ഫങ്ഷനുകൾ ഓട്ടോമേറ്റ് ചെയ്യുന്നു", "isCorrect": false },
      { "text": "വിവരങ്ങളുടെ താരതമ്യവും സംഗ്രഹവും എളുപ്പമാക്കുന്നു", "isCorrect": true },
      { "text": "കമ്പ്യൂട്ടറിൻ്റെ വേഗത കൂടുന്നു", "isCorrect": false },
      { "text": "ഡാറ്റാ എൻട്രി ലളിതമാക്കുന്നു", "isCorrect": false }
    ]
  },
  {
    "question": "ഡാറ്റയെ ആരോഹണ ക്രമത്തിലോ (Ascending) അവരോഹണ ക്രമത്തിലോ (Descending) ക്രമീകരിക്കുന്നതിന് Calc-ൽ ഉപയോഗിക്കുന്ന ഓപ്ഷൻ ഏതാണ്?",
    "options": [
      { "text": "Tools → Filter", "isCorrect": false },
      { "text": "Data → Sort", "isCorrect": true },
      { "text": "File → Arrange", "isCorrect": false },
      { "text": "Edit → Sort", "isCorrect": false }
    ]
  },
  {
    "question": "ഫോർമാറ്റിംഗ് ടൂൾബാറിലെ 'Delete Decimal Place' (0.00 $\rightarrow$ 0.0) ഓപ്ഷൻ എന്തിനാണ് ഉപയോഗിക്കുന്നത്?",
    "options": [
      { "text": "കറൻസി ചിഹ്നം ചേർക്കാൻ", "isCorrect": false },
      { "text": "ദശാംശ സ്ഥാനങ്ങളുടെ എണ്ണം ക്രമീകരിക്കാനോ നീക്കം ചെയ്യാനോ", "isCorrect": true },
      { "text": "തുക കണ്ടെത്താൻ", "isCorrect": false },
      { "text": "ശരാശരി കണ്ടെത്താൻ", "isCorrect": false }
    ]
  },
  {
    "question": "LibreOffice Calc-ലെ സെലക്ട് ഫംഗ്ഷൻ ($\Sigma$) മെനുവിൽ ലഭ്യമല്ലാത്ത ഫംഗ്ഷൻ ഏതാണ്?",
    "options": [
      { "text": "MAX", "isCorrect": false },
      { "text": "SUBTRACT", "isCorrect": true },
      { "text": "SUM", "isCorrect": false },
      { "text": "AVERAGE", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു ചാർട്ടിൽ ഉൾപ്പെടുത്തുന്നതിനായി അടുത്തടുത്തല്ലാത്ത കോളങ്ങളിൽ നിന്നോ റോകളിൽ നിന്നോ ഉള്ള ഡാറ്റ തിരഞ്ഞെടുക്കാൻ, സെലക്ട് ചെയ്യുമ്പോൾ ഏത് കീ ആണ് അമർത്തിപ്പിടിക്കേണ്ടത്?",
    "options": [
      { "text": "Control (Ctrl) കീ", "isCorrect": true },
      { "text": "Alt കീ", "isCorrect": false },
      { "text": "Shift കീ", "isCorrect": false },
      { "text": "Tab കീ", "isCorrect": false }
    ]
  },
  {
    "question": "LibreOffice Calc-ൻ്റെ പ്രധാന സവിശേഷതകളിൽ ഉൾപ്പെടാത്തത് ഏതാണ്?",
    "options": [
      { "text": "ഡാറ്റ വ്യക്തമായി അവതരിപ്പിക്കാൻ ചാർട്ടുകളും ഗ്രാഫുകളും സൃഷ്ടിക്കാൻ കഴിയും", "isCorrect": false },
      { "text": "വാചകങ്ങൾ എഡിറ്റ് ചെയ്യാനും ഫോർമാറ്റ് ചെയ്യാനും പ്രധാനമായും ഉപയോഗിക്കുന്നു", "isCorrect": true },
      { "text": "വിവരങ്ങൾ വിശകലനം ചെയ്യാനും താരതമ്യം ചെയ്യാനും സംഗ്രഹിക്കാനും സാധിക്കുന്നു", "isCorrect": false },
      { "text": "ഡാറ്റാ ടാബ്ലേറ്റിൽ അവതരിപ്പിക്കാൻ കഴിയും", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു സെല്ലിലെ ഫോർമുല എല്ലായ്പ്പോഴും ആരംഭിക്കേണ്ട ചിഹ്നം ഏതാണ്?",
    "options": [
      { "text": "*", "isCorrect": false },
      { "text": "$", "isCorrect": false },
      { "text": "=", "isCorrect": true },
      { "text": "#", "isCorrect": false }
    ]
  },
  {
    "question": "ഒന്നിലധികം സെല്ലുകൾ (ഉദാഹരണത്തിന്, A1 മുതൽ A5 വരെ) ഒരു ഫംഗ്ഷനിൽ ഉൾപ്പെടുത്തുന്നതിന് ഉപയോഗിക്കുന്ന ഓപ്പറേറ്റർ ഏതാണ്?",
    "options": [
      { "text": ": (കോളൺ)", "isCorrect": true },
      { "text": "+", "isCorrect": false },
      { "text": ";", "isCorrect": false },
      { "text": "-", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു നിശ്ചിത ശ്രേണിയിലുള്ള (Range) സംഖ്യകളിൽ ഏറ്റവും വലിയ സംഖ്യ കണ്ടെത്താൻ ഉപയോഗിക്കുന്ന Calc ഫംഗ്ഷൻ ഏതാണ്?",
    "options": [
      { "text": "=BIG()", "isCorrect": false },
      { "text": "=MAX()", "isCorrect": true },
      { "text": "=MAXIMUM()", "isCorrect": false },
      { "text": "=LARGEST()", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു നിശ്ചിത ശ്രേണിയിലുള്ള സംഖ്യകളിൽ ഏറ്റവും ചെറിയ സംഖ്യ കണ്ടെത്താൻ ഉപയോഗിക്കുന്ന Calc ഫംഗ്ഷൻ ഏതാണ്?",
    "options": [
      { "text": "=MINIMUM()", "isCorrect": false },
      { "text": "=MIN()", "isCorrect": true },
      { "text": "=LOW()", "isCorrect": false },
      { "text": "=SMALLEST()", "isCorrect": false }
    ]
  },
  {
    "question": "ഡാറ്റാ വിശകലനത്തിനായി Calc-ൽ ഒരു പൈ ചാർട്ട് ഉപയോഗിക്കുന്നത് എന്തിനാണ്?",
    "options": [
      { "text": "ഒരു മൊത്തത്തിലുള്ള ഡാറ്റയുടെ വിവിധ ഭാഗങ്ങൾ കാണിക്കാൻ (Part-to-whole comparison)", "isCorrect": true },
      { "text": "ഒരു നിശ്ചിത കാലയളവിലെ ഡാറ്റാ ട്രെൻഡുകൾ കാണിക്കാൻ", "isCorrect": false },
      { "text": "ഡാറ്റയുടെ കൃത്യമായ മൂല്യങ്ങൾ പട്ടികപ്പെടുത്താൻ", "isCorrect": false },
      { "text": "രണ്ട് വ്യത്യസ്ത ഡാറ്റാ സെറ്റുകൾ താരതമ്യം ചെയ്യാൻ", "isCorrect": false }
    ]
  },
  {
    "question": "വർക്ക്ഷീറ്റിലെ ഒരു ഡാറ്റാ പോയിൻ്റിൻ്റെ കൃത്യമായ ലൊക്കേഷൻ (സ്ഥാനം) മാറ്റമില്ലാതെ നിലനിർത്താൻ ഏത് തരം സെൽ റെഫറൻസാണ് ഉപയോഗിക്കുന്നത്?",
    "options": [
      { "text": "അബ്സല്യൂട്ട് റെഫറൻസ് (ഉദാഹരണത്തിന്, \$A\$1)", "isCorrect": true },
      { "text": "ഡൈനാമിക് റെഫറൻസ്", "isCorrect": false },
      { "text": "റിലേറ്റീവ് റെഫറൻസ്", "isCorrect": false },
      { "text": "ഫങ്ഷണൽ റെഫറൻസ്", "isCorrect": false }
    ]
  },
  {
    "question": "LibreOffice Calc-ലെ ഒരു കോളത്തിൻ്റെ പേര് ഏത് അക്ഷരം കൊണ്ടാണ് സൂചിപ്പിക്കുന്നത്?",
    "options": [
      { "text": "റോമൻ അക്കങ്ങൾ (I, II, III...)", "isCorrect": false },
      { "text": "ഇംഗ്ലീഷ് അക്ഷരമാല (A, B, C...)", "isCorrect": true },
      { "text": "ഗ്രീക്ക് അക്ഷരമാല", "isCorrect": false },
      { "text": "അറബിക് അക്കങ്ങൾ (1, 2, 3...)", "isCorrect": false }
    ]
  },
  {
    "question": "LibreOffice Calc-ലെ ഒരു വരിയുടെ (Row) പേര് ഏത് അക്കം കൊണ്ടാണ് സൂചിപ്പിക്കുന്നത്?",
    "options": [
      { "text": "അറബിക് അക്കങ്ങൾ (1, 2, 3...)", "isCorrect": true },
      { "text": "റോമൻ അക്കങ്ങൾ", "isCorrect": false },
      { "text": "ഇംഗ്ലീഷ് അക്ഷരമാല", "isCorrect": false },
      { "text": "ഗ്രീക്ക് അക്ഷരമാല", "isCorrect": false }
    ]
  },
  {
    "question": "ഡാറ്റാസെറ്റിൽ ഒരു പ്രത്യേക മാനദണ്ഡം (Criterion) പാലിക്കുന്ന വരികൾ മാത്രം കാണിക്കാൻ ഉപയോഗിക്കുന്ന Calc ടൂൾ ഏതാണ്?",
    "options": [
      { "text": "വാലിഡേഷൻ", "isCorrect": false },
      { "text": "ഫിൽട്ടർ (Filter)", "isCorrect": true },
      { "text": "സോർട്ട് (Sort)", "isCorrect": false },
      { "text": "കണ്ടീഷണൽ ഫോർമാറ്റിംഗ്", "isCorrect": false }
    ]
  },
  {
    "question": "ഡാറ്റാ വിശകലനത്തിൻ്റെ ഒരു ഭാഗമായി, ഏറ്റവും കൂടുതൽ വിറ്റഴിച്ച ഉൽപ്പന്നം കണ്ടെത്താൻ സഹായിക്കുന്ന Calc ഫംഗ്ഷൻ ഏതാണ്?",
    "options": [
      { "text": "=MIN()", "isCorrect": false },
      { "text": "=MAX()", "isCorrect": true },
      { "text": "=AVERAGE()", "isCorrect": false },
      { "text": "=COUNT()", "isCorrect": false }
    ]
  },
  {
    "question": "ശരിയായ ഫോർമുല താഴെ പറയുന്നതിൽ ഏതാണ്?",
    "options": [
      { "text": "(A1+B1)", "isCorrect": false },
      { "text": "=SUM(A1, B1)", "isCorrect": false },
      { "text": "A1+B1=SUM", "isCorrect": false },
      { "text": "=A1+B1", "isCorrect": true }
    ]
  },
  {
    "question": "LibreOffice Calc-ൽ ഡാറ്റാ എൻ്റർ ചെയ്യുമ്പോൾ, ടെക്സ്റ്റ് (Text) സ്ഥിരമായി ഏത് വശത്താണ് (Alignment) കാണിക്കുന്നത്?",
    "options": [
      { "text": "സെല്ലിൻ്റെ മധ്യഭാഗം (Center)", "isCorrect": false },
      { "text": "സെല്ലിൻ്റെ വലത് വശം (Right)", "isCorrect": false },
      { "text": "സെല്ലിൻ്റെ ഇടതുവശം (Left)", "isCorrect": true },
      { "text": "സെല്ലിൻ്റെ മുകൾഭാഗം (Top)", "isCorrect": false }
    ]
  },
  {
    "question": "LibreOffice Calc-ൽ ഡാറ്റാ എൻ്റർ ചെയ്യുമ്പോൾ, സംഖ്യകൾ (Numbers) സ്ഥിരമായി ഏത് വശത്താണ് (Alignment) കാണിക്കുന്നത്?",
    "options": [
      { "text": "സെല്ലിൻ്റെ ഇടതുവശം", "isCorrect": false },
      { "text": "സെല്ലിൻ്റെ വലത് വശം (Right)", "isCorrect": true },
      { "text": "സെല്ലിൻ്റെ താഴെ", "isCorrect": false },
      { "text": "സെല്ലിൻ്റെ മധ്യഭാഗം", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരേസമയം നിരവധി സെല്ലുകൾക്ക് (A1:C10) ബോർഡർ നൽകാൻ, ഏത് ടൂൾബാറാണ് സാധാരണയായി ഉപയോഗിക്കുന്നത്?",
    "options": [
      { "text": "ഫോർമുല ടൂൾബാർ", "isCorrect": false },
      { "text": "ഫോർമാറ്റിംഗ് ടൂൾബാർ (Formatting Toolbar)", "isCorrect": true },
      { "text": "സ്റ്റാൻഡേർഡ് ടൂൾബാർ", "isCorrect": false },
      { "text": "ഡ്രോയിംഗ് ടൂൾബാർ", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു വലിയ ഡാറ്റാസെറ്റ് ഒരു പ്രത്യേക മാനദണ്ഡത്തെ അടിസ്ഥാനമാക്കി ചെറുതും കൈകാര്യം ചെയ്യാൻ എളുപ്പമുള്ളതുമായ ഗ്രൂപ്പുകളായി തിരിക്കാൻ സഹായിക്കുന്നത് എന്താണ്?",
    "options": [
      { "text": "ചാർട്ട് ക്രിയേഷൻ", "isCorrect": false },
      { "text": "ഡാറ്റാ സോർട്ടിംഗ്", "isCorrect": true },
      { "text": "മെർജിംഗ് സെൽസ്", "isCorrect": false },
      { "text": "ഫിൽ ഹാൻഡിൽ", "isCorrect": false }
    ]
  },
  {
    "question": "LibreOffice Calc-ൽ ഒരു സെല്ലിൻ്റെ പശ്ചാത്തല നിറം (Background Color) മാറ്റാൻ ഏത് ഓപ്ഷനാണ് ഉപയോഗിക്കുന്നത്?",
    "options": [
      { "text": "ഇൻസേർട്ട് → കളർ", "isCorrect": false },
      { "text": "ഫോർമാറ്റ് → സെൽസ് → ബാക്ക്ഗ്രൗണ്ട് (അല്ലെങ്കിൽ ബാക്ക്ഗ്രൗണ്ട് ടൂൾബാർ ബട്ടൺ)", "isCorrect": true },
      { "text": "ഫോർമാറ്റ് → ടെക്സ്റ്റ്", "isCorrect": false },
      { "text": "ഡാറ്റാ → കളർ", "isCorrect": false }
    ]
  },
  {
    "question": "LibreOffice Calc-ലെ ചാർട്ട് വിസാർഡിൽ (Chart Wizard) ലഭ്യമായ ചാർട്ട് തരങ്ങളിൽ ഉൾപ്പെടാത്തത് ഏതാണ്?",
    "options": [
      { "text": "ഏരിയ ചാർട്ട് (Area Chart)", "isCorrect": false },
      { "text": "ലൈൻ ചാർട്ട് (Line Chart)", "isCorrect": false },
      { "text": "വോയിസ് ചാർട്ട് (Voice Chart)", "isCorrect": true },
      { "text": "ബാർ ചാർട്ട് (Bar Chart)", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു നിശ്ചിത കാലയളവിലെ ഡാറ്റാ ട്രെൻഡുകൾ (മാറ്റങ്ങൾ) കാണിക്കാൻ ഏറ്റവും അനുയോജ്യമായ ചാർട്ട് തരം ഏതാണ്?",
    "options": [
      { "text": "ബാർ ചാർട്ട്", "isCorrect": false },
      { "text": "ലൈൻ ചാർട്ട് (Line Chart)", "isCorrect": true },
      { "text": "സ്കാറ്റർ ചാർട്ട്", "isCorrect": false },
      { "text": "പൈ ചാർട്ട്", "isCorrect": false }
    ]
  },
  {
    "question": "രണ്ട് വ്യത്യസ്ത ഡാറ്റാ സെറ്റുകൾ താരതമ്യം ചെയ്യാൻ (ഉദാഹരണത്തിന്, വിവിധ ക്ലാസുകളിലെ ആൺകുട്ടികളുടെയും പെൺകുട്ടികളുടെയും മാർക്കുകൾ) ഏറ്റവും അനുയോജ്യമായ ചാർട്ട് തരം ഏതാണ്?",
    "options": [
      { "text": "കോളം/ബാർ ചാർട്ട് (Column/Bar Chart)", "isCorrect": true },
      { "text": "സ്കാറ്റർ ചാർട്ട്", "isCorrect": false },
      { "text": "ലൈൻ ചാർട്ട്", "isCorrect": false },
      { "text": "പൈ ചാർട്ട്", "isCorrect": false }
    ]
  },
  {
    "question": "BMI (Body Mass Index) കണക്കാക്കാൻ Calc-ൽ ഉപയോഗിക്കുന്ന സൂത്രവാക്യം ഏതാണ്? (സൂചന: BMI = ഭാരം/ഉയരം²)",
    "options": [
      { "text": "=A2 * B2 * 2", "isCorrect": false },
      { "text": "=A2 / B2", "isCorrect": false },
      { "text": "=A2 * (B2^2)", "isCorrect": false },
      { "text": "=A2 / (B2^2)", "isCorrect": true }
    ]
  },
  {
    "question": "Calc-ൽ ഒരു ഫോർമുല നൽകിയ ശേഷം അതിൻ്റെ ഫലം കാണാൻ ഏത് കീ ആണ് അമർത്തേണ്ടത്?",
    "options": [
      { "text": "Enter", "isCorrect": true },
      { "text": "Shift", "isCorrect": false },
      { "text": "Tab", "isCorrect": false },
      { "text": "Ctrl", "isCorrect": false }
    ]
  },
  {
    "question": "ചാർട്ടിലെ ഡാറ്റാ പോയിൻ്റുകൾ പ്രതിനിധീകരിക്കുന്ന ലേബലുകൾ ഏതാണ്?",
    "options": [
      { "text": "ലെജൻഡ് (Legend)", "isCorrect": true },
      { "text": "ചാർട്ട് ടൈറ്റിൽ", "isCorrect": false },
      { "text": "ചാർട്ട് ഏരിയ", "isCorrect": false },
      { "text": "ആക്സിസ് ലേബൽ", "isCorrect": false }
    ]
  },
  {
    "question": "LibreOffice Calc-ലെ ഏത് ബാറിലാണ് (Bar) ആക്ടീവ് സെല്ലിൻ്റെ വിലാസവും അതിലെ ഉള്ളടക്കവും പ്രദർശിപ്പിക്കുന്നത്?",
    "options": [
      { "text": "മെനു ബാർ", "isCorrect": false },
      { "text": "ടൈറ്റിൽ ബാർ", "isCorrect": false },
      { "text": "ഫോർമുല ബാർ (Formula Bar)", "isCorrect": true },
      { "text": "സ്റ്റാറ്റസ് ബാർ", "isCorrect": false }
    ]
  },
  {
    "question": "വർക്ക്ഷീറ്റിൽ ഡാറ്റാ നൽകുന്നതിന് മുമ്പ് പാലിക്കേണ്ട ആദ്യപടി എന്താണ്?",
    "options": [
      { "text": "വേണ്ടത്ര കോളങ്ങളും റോകളും ഉണ്ടാക്കുക", "isCorrect": false },
      { "text": "വ്യക്തമായ ഹെഡിംഗുകൾ (Heading) നൽകുക", "isCorrect": true },
      { "text": "എല്ലാ സെല്ലുകളും മെർജ് ചെയ്യുക", "isCorrect": false },
      { "text": "ചാർട്ട് ചേർക്കുക", "isCorrect": false }
    ]
  },
  {
    "question": "Calc-ൽ ഒരു നിശ്ചിത ശ്രേണിയിലുള്ള സെല്ലുകളുടെ എണ്ണം (എണ്ണൽ സംഖ്യകൾ) കണ്ടെത്താൻ ഉപയോഗിക്കുന്ന ഫംഗ്ഷൻ ഏതാണ്?",
    "options": [
      { "text": "=COUNT()", "isCorrect": true },
      { "text": "=MAX()", "isCorrect": false },
      { "text": "=SUM()", "isCorrect": false },
      { "text": "=AVERAGE()", "isCorrect": false }
    ]
  },
  {
    "question": "Calc-ൽ '₹' (ഇന്ത്യൻ രൂപ) പോലുള്ള കറൻസി ചിഹ്നം ചേർക്കാൻ ഏത് ഫോർമാറ്റ് ഓപ്ഷനാണ് ഉപയോഗിക്കുന്നത്?",
    "options": [
      { "text": "ഫോർമാറ്റ് → ചാർട്ട്", "isCorrect": false },
      { "text": "ഫോർമാറ്റ് → സെൽസ് → കറൻസി (Currency)", "isCorrect": true },
      { "text": "ഫോർമാറ്റ് → ടെക്സ്റ്റ്", "isCorrect": false },
      { "text": "ഫോർമാറ്റ് → സ്റ്റൈൽ", "isCorrect": false }
    ]
  },
  {
    "question": "വർക്ക്ഷീറ്റിൽ പുതിയ ഡാറ്റാ റോ ചേർക്കാൻ Calc-ലെ ഏത് മെനുവാണ് ഉപയോഗിക്കേണ്ടത്?",
    "options": [
      { "text": "Data", "isCorrect": false },
      { "text": "Tools", "isCorrect": false },
      { "text": "Insert (Insert → Rows)", "isCorrect": true },
      { "text": "File", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു സെല്ലിലെ ഫോർമുലയിൽ നിന്ന്, ഫിൽ ഹാൻഡിൽ ഉപയോഗിച്ച് വലിച്ചിടുമ്പോൾ, മാറ്റമില്ലാതെ തുടരുന്ന റെഫറൻസ് ഏതാണ്?",
    "options": [
      { "text": "റിലേറ്റീവ് റെഫറൻസ്", "isCorrect": false },
      { "text": "അബ്സല്യൂട്ട് റെഫറൻസ് (\$A\$1)", "isCorrect": true },
      { "text": "ഡൈനാമിക് റെഫറൻസ്", "isCorrect": false },
      { "text": "മിക്സഡ് റെഫറൻസ്", "isCorrect": false }
    ]
  },
  {
    "question": "Calc-ൽ, A1 സെല്ലിലെ '₹100' എന്ന ഡാറ്റയെ ഒരു ഫോർമുലയിൽ ഉപയോഗിക്കുമ്പോൾ, അതിൻ്റെ മൂല്യമായി പരിഗണിക്കുന്നത് എന്താണ്?",
    "options": [
      { "text": "₹", "isCorrect": false },
      { "text": "₹100", "isCorrect": false },
      { "text": "Text (₹100)", "isCorrect": false },
      { "text": "100 (സംഖ്യ)", "isCorrect": true }
    ]
  },
  {
    "question": "വർക്ക്ഷീറ്റിലെ ഡാറ്റയെ ഗ്രാഫിക്കലായി അവതരിപ്പിക്കാനുള്ള ഏറ്റവും ഫലപ്രദമായ മാർഗ്ഗം ഏതാണ്?",
    "options": [
      { "text": "ഫോർമുലകൾ ഉപയോഗിച്ച്", "isCorrect": false },
      { "text": "ചാർട്ടുകളും ഗ്രാഫുകളും ഉപയോഗിച്ച്", "isCorrect": true },
      { "text": "അക്ഷരങ്ങൾ മാത്രം ഉപയോഗിച്ച്", "isCorrect": false },
      { "text": "ഡാറ്റാ സോർട്ട് ചെയ്ത്", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു സെൽ റേഞ്ചിനെ (A1:B10) സൂചിപ്പിക്കുമ്പോൾ, 'A1' എന്തിനെ സൂചിപ്പിക്കുന്നു?",
    "options": [
      { "text": "റേഞ്ചിൻ്റെ ആദ്യ സെൽ (Top-left cell)", "isCorrect": true },
      { "text": "റേഞ്ചിൻ്റെ അവസാന സെൽ", "isCorrect": false },
      { "text": "കോളത്തിൻ്റെ പേര്", "isCorrect": false },
      { "text": "റേഞ്ചിൻ്റെ മധ്യ സെൽ", "isCorrect": false }
    ]
  },
  {
    "question": "Calc-ൽ =A2*B2 എന്ന ഫോർമുല എന്തിനെയാണ് സൂചിപ്പിക്കുന്നത്?",
    "options": [
      { "text": "A2-ലെയും B2-ലെയും സംഖ്യകളുടെ വ്യത്യാസം", "isCorrect": false },
      { "text": "A2-ലെയും B2-ലെയും സംഖ്യകളുടെ ശരാശരി", "isCorrect": false },
      { "text": "A2-ലെയും B2-ലെയും സംഖ്യകളുടെ തുക", "isCorrect": false },
      { "text": "A2-ലെയും B2-ലെയും സംഖ്യകളുടെ ഗുണനഫലം (Product)", "isCorrect": true }
    ]
  },
  {
    "question": "LibreOffice Calc-ലെ 'What-if Analysis' പോലുള്ള സങ്കീർണ്ണമായ ഡാറ്റാ വിശകലനത്തിനുള്ള ടൂളുകൾ ഏത് മെനുവിലാണ് ഉൾപ്പെടുന്നത്?",
    "options": [
      { "text": "Data (Data → What If Analysis)", "isCorrect": true },
      { "text": "Edit", "isCorrect": false },
      { "text": "File", "isCorrect": false },
      { "text": "Format", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു ചാർട്ടിൻ്റെ പ്രധാന ഭാഗം ഏതാണ്, അവിടെ ഡാറ്റാ പോയിൻ്റുകൾ പ്രദർശിപ്പിക്കുന്നത്?",
    "options": [
      { "text": "പ്ലോട്ട് ഏരിയ (Plot Area)", "isCorrect": true },
      { "text": "ചാർട്ട് ടൈറ്റിൽ", "isCorrect": false },
      { "text": "ലെജൻഡ്", "isCorrect": false },
      { "text": "ആക്സിസ്", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു പ്രത്യേക ഡാറ്റാ സെറ്റിനുള്ളിൽ 'എത്ര തവണ' ഒരു പ്രത്യേക മൂല്യം സംഭവിക്കുന്നു എന്ന് കണ്ടെത്താൻ സഹായിക്കുന്ന Calc ഫംഗ്ഷൻ ഏതാണ്?",
    "options": [
      { "text": "=COUNTIF()", "isCorrect": true },
      { "text": "=AVERAGE()", "isCorrect": false },
      { "text": "=MAX()", "isCorrect": false },
      { "text": "=SUM()", "isCorrect": false }
    ]
  },
  {
    "question": "Calc-ൽ ഒരു വർക്ക്ഷീറ്റിന് പേര് നൽകുന്നതിന് എന്ത് ചെയ്യണം?",
    "options": [
      { "text": "ചാർട്ട് ടൂൾ ഉപയോഗിക്കുക", "isCorrect": false },
      { "text": "വർക്ക്ഷീറ്റ് ടാബിൽ റൈറ്റ് ക്ലിക്ക് ചെയ്ത് 'Rename' തിരഞ്ഞെടുക്കുക", "isCorrect": true },
      { "text": "File മെനുവിൽ ക്ലിക്ക് ചെയ്യുക", "isCorrect": false },
      { "text": "ഫോർമുല ബാറിൽ പേര് ടൈപ്പ് ചെയ്യുക", "isCorrect": false }
    ]
  },
  {
    "question": "ഡാറ്റാ വിശകലനത്തിൻ്റെ ലക്ഷ്യം എന്താണ്?",
    "options": [
      { "text": "സ്പ്രെഡ്ഷീറ്റിന് നിറം നൽകുക", "isCorrect": false },
      { "text": "വർക്ക്ഷീറ്റിൽ കൂടുതൽ സെല്ലുകൾ ചേർക്കുക", "isCorrect": false },
      { "text": "ഡാറ്റയിലെ പാറ്റേണുകളും ട്രെൻഡുകളും കണ്ടെത്തുക", "isCorrect": true },
      { "text": "ഫോർമുലകൾ എളുപ്പമാക്കുക", "isCorrect": false }
    ]
  },
  {
    "question": "LibreOffice Calc-ൽ വർക്ക്ഷീറ്റിൻ്റെ ഫയൽ എക്സ്റ്റൻഷൻ എന്താണ്?",
    "options": [
      { "text": ".ods", "isCorrect": true },
      { "text": ".odp", "isCorrect": false },
      { "text": ".odt", "isCorrect": false },
      { "text": ".csv", "isCorrect": false }
    ]
  },
  {
    "question": "ചാർട്ടിലെ X-ആക്സിസ് സാധാരണയായി ഏത് തരം ഡാറ്റയെയാണ് പ്രതിനിധീകരിക്കുന്നത്?",
    "options": [
      { "text": "കറൻസി മൂല്യങ്ങൾ", "isCorrect": false },
      { "text": "സംഖ്യാപരമായ മൂല്യങ്ങൾ (Numerical Values)", "isCorrect": false },
      { "text": "ഫോർമുലകൾ", "isCorrect": false },
      { "text": "ഡാറ്റാ വിഭാഗങ്ങൾ (Categories) അല്ലെങ്കിൽ സമയം", "isCorrect": true }
    ]
  },
  {
    "question": "ചാർട്ടിലെ Y-ആക്സിസ് സാധാരണയായി ഏത് തരം ഡാറ്റയെയാണ് പ്രതിനിധീകരിക്കുന്നത്?",
    "options": [
      { "text": "പേരുകൾ", "isCorrect": false },
      { "text": "സംഖ്യാപരമായ മൂല്യങ്ങൾ (Numerical Values)", "isCorrect": true },
      { "text": "വിഭാഗങ്ങൾ (Categories)", "isCorrect": false },
      { "text": "തീയതികൾ", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു വിദ്യാർത്ഥിയുടെ മാർക്ക് ലിസ്റ്റിൽ, A1 സെല്ലിലെ 'പേര്' എന്ന തലക്കെട്ട് Calc-ൽ എന്ത് തരം ഡാറ്റയാണ്?",
    "options": [
      { "text": "ന്യൂമെറിക് ഡാറ്റ", "isCorrect": false },
      { "text": "ടെക്സ്റ്റ് ഡാറ്റ (Text Data)", "isCorrect": true },
      { "text": "ഡേറ്റ് ഡാറ്റ", "isCorrect": false },
      { "text": "ഫോർമുല", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു വിദ്യാർത്ഥിയുടെ മാർക്ക് ലിസ്റ്റിൽ, B2 സെല്ലിലെ '85' എന്ന ഡാറ്റ Calc-ൽ എന്ത് തരം ഡാറ്റയാണ്?",
    "options": [
      { "text": "ന്യൂമെറിക് ഡാറ്റ (Numeric Data)", "isCorrect": true },
      { "text": "ടെക്സ്റ്റ് ഡാറ്റ", "isCorrect": false },
      { "text": "ഫോർമുല", "isCorrect": false },
      { "text": "ഡേറ്റ് ഡാറ്റ", "isCorrect": false }
    ]
  },
  {
    "question": "LibreOffice Calc-ലെ ഒരു കോളത്തിൻ്റെ പേര് ഏത് അക്ഷരം കൊണ്ടാണ് സൂചിപ്പിക്കുന്നത്?",
    "options": [
      { "text": "റോമൻ അക്കങ്ങൾ (I, II, III...)", "isCorrect": false },
      { "text": "ഇംഗ്ലീഷ് അക്ഷരമാല (A, B, C...)", "isCorrect": true },
      { "text": "അറബിക് അക്കങ്ങൾ (1, 2, 3...)", "isCorrect": false },
      { "text": "ഗ്രീക്ക് അക്ഷരമാല", "isCorrect": false }
    ]
  },
  {
    "question": "LibreOffice Calc-ലെ ഒരു വരിയുടെ (Row) പേര് ഏത് അക്കം കൊണ്ടാണ് സൂചിപ്പിക്കുന്നത്?",
    "options": [
      { "text": "ഇംഗ്ലീഷ് അക്ഷരമാല", "isCorrect": false },
      { "text": "റോമൻ അക്കങ്ങൾ", "isCorrect": false },
      { "text": "അറബിക് അക്കങ്ങൾ (1, 2, 3...)", "isCorrect": true },
      { "text": "ഗ്രീക്ക് അക്ഷരമാല", "isCorrect": false }
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
