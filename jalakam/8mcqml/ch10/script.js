document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "തുടർച്ചയായ ക്രമം നിർബന്ധമല്ലാത്ത, ആവശ്യത്തിനനുസരിച്ച് സ്ലൈഡുകൾക്കിടയിൽ സഞ്ചരിക്കാൻ അനുവദിക്കുന്ന അവതരണ രീതി?",
    "options": [
      { "text": "ലീനിയർ രീതി", "isCorrect": false },
      { "text": "നോൺ-ലീനിയർ രീതി (Non-Linear Method)", "isCorrect": true },
      { "text": "സീക്വൻഷ്യൽ രീതി", "isCorrect": false },
      { "text": "പ്രീസെറ്റ് രീതി", "isCorrect": false }
    ]
  },
  {
    "question": "LibreOffice Impress-ൽ ഒരു സ്ലൈഡ് ഘടകത്തിൽ നിന്ന് (ചിത്രം/ടെക്സ്റ്റ്) മറ്റ് സ്ലൈഡുകളിലേക്കോ ഫയലുകളിലേക്കോ ലിങ്ക് നൽകുന്ന സവിശേഷത?",
    "options": [
      { "text": "ആനിമേഷൻ", "isCorrect": false },
      { "text": "ട്രാൻസിഷൻ", "isCorrect": false },
      { "text": "ഇന്ററാക്ഷൻ/ഹൈപ്പർലിങ്ക് (Interaction/Hyperlink)", "isCorrect": true },
      { "text": "മാസ്റ്റർ സ്ലൈഡ്", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു അവതരണം സുഗമമാക്കാൻ (Smooth Presentation) സഹായിക്കുന്ന പ്രധാന സാങ്കേതികവിദ്യ?",
    "options": [
      { "text": "സ്ലൈഡ് ട്രാൻസിഷൻ", "isCorrect": false },
      { "text": "ആനിമേഷൻ ഇഫക്റ്റുകൾ", "isCorrect": false },
      { "text": "നോൺ-ലീനിയർ നാവിഗേഷൻ", "isCorrect": true },
      { "text": "ഫുൾ സ്ക്രീൻ വ്യൂ", "isCorrect": false }
    ]
  },
  {
    "question": "LibreOffice Impress-ൽ സ്ലൈഡുകളുടെ ഘടന ക്രമീകരിക്കാനും അതിലെ ഒബ്ജക്റ്റുകൾ കാണിക്കാനും സഹായിക്കുന്ന ടൂൾ?",
    "options": [
      { "text": "പ്രോജക്ട് ബിൻ", "isCorrect": false },
      { "text": "ക്ലിപ്പ് ആർട്ട്", "isCorrect": false },
      { "text": "നാവിഗേറ്റർ (Navigator)", "isCorrect": true },
      { "text": "ടൈംലൈൻ", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു സ്ലൈഡിൽ നിന്ന് അടുത്ത സ്ലൈഡിലേക്ക് മാറുമ്പോൾ ഉള്ള ദൃശ്യ ഇഫക്റ്റ് നിയന്ത്രിക്കുന്നത്?",
    "options": [
      { "text": "ആനിമേഷൻ", "isCorrect": false },
      { "text": "സ്ലൈഡ് ട്രാൻസിഷൻ (Slide Transition)", "isCorrect": true },
      { "text": "ഇന്ററാക്ഷൻ", "isCorrect": false },
      { "text": "ഗ്രൂപ്പിംഗ്", "isCorrect": false }
    ]
  },
  {
    "question": "സ്ലൈഡിനുള്ളിലെ വ്യക്തിഗത ഉള്ളടക്കങ്ങൾ (ടെക്സ്റ്റ്, ചിത്രം) പ്രത്യക്ഷപ്പെടുന്നതിൻ്റെ രീതിയും സമയവും നിയന്ത്രിക്കുന്നത്?",
    "options": [
      { "text": "സ്ലൈഡ് ട്രാൻസിഷൻ", "isCorrect": false },
      { "text": "ആനിമേഷൻ (Animation)", "isCorrect": true },
      { "text": "ഇൻസേർട്ട് ഇമേജ്", "isCorrect": false },
      { "text": "ലേഔട്ട്", "isCorrect": false }
    ]
  },
  {
    "question": "അവതരണത്തിൽ ഹൈപ്പർലിങ്ക് വഴി ഉൾപ്പെടുത്തിയ വീഡിയോ പ്രവർത്തിക്കാതെ വരുന്നതിൻ്റെ സാധ്യതാ കാരണം?",
    "options": [
      { "text": "വീഡിയോയ്ക്ക് ശബ്ദമില്ല", "isCorrect": false },
      { "text": "വീഡിയോ ഫയൽ അതിൻ്റെ യഥാർത്ഥ ഫോൾഡറിൽ നിന്ന് മാറ്റിയത്", "isCorrect": true },
      { "text": "വീഡിയോ ഫയൽ സൈസ് 15MB ആണ്", "isCorrect": false },
      { "text": "വീഡിയോ ഉള്ളടക്കം പിന്തുണയ്ക്കാത്തത്", "isCorrect": false }
    ]
  },
  {
    "question": "LibreOffice Impress ഉപയോഗിച്ച് തയ്യാറാക്കിയ പ്രസന്റേഷൻ ഫയലിൻ്റെ സാധാരണ എക്സ്റ്റൻഷൻ?",
    "options": [
      { "text": ".pptx", "isCorrect": false },
      { "text": ".odp", "isCorrect": true },
      { "text": ".pdf", "isCorrect": false },
      { "text": ".odt", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു അവതരണത്തിൻ്റെ തുടക്കത്തിൽ പ്രധാന ആശയങ്ങൾ ഒരിടത്ത് നൽകി, വിശദാംശങ്ങൾ പിന്നീട് നൽകുന്നതിൻ്റെ ഉദ്ദേശ്യം?",
    "options": [
      { "text": "അവതരണം കൂടുതൽ മനോഹരമാക്കാൻ", "isCorrect": false },
      { "text": "വലിയ ഫയൽ സൈസ് ഒഴിവാക്കാൻ", "isCorrect": false },
      { "text": "ആവശ്യമുള്ള വിഷയങ്ങളിലേക്ക് എളുപ്പത്തിൽ പോകാൻ", "isCorrect": true },
      { "text": "ഓഡിയോ ചേർക്കുന്നതിനുള്ള എളുപ്പം", "isCorrect": false }
    ]
  },
  {
    "question": "ഇന്ററാക്ഷൻ ഉപയോഗിച്ച് ഒരു വെബ് പേജിലേക്ക് ലിങ്ക് നൽകാൻ സാധിക്കുമോ?",
    "options": [
      { "text": "സാധിക്കില്ല", "isCorrect": false },
      { "text": "സാധിക്കും, പക്ഷെ ഫുൾ സ്ക്രീനിൽ മാത്രം", "isCorrect": false },
      { "text": "സാധിക്കും", "isCorrect": true },
      { "text": "PDF ഫയലുകൾക്ക് മാത്രം സാധിക്കും", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു സ്ലൈഡിലെ വിവരങ്ങൾ ഒന്നിന് പിറകെ ഒന്നായി ലിസ്റ്റ് ചെയ്യുന്നതിനായി നൽകേണ്ട ഇഫക്റ്റ്?",
    "options": [
      { "text": "സ്ലൈഡ് ട്രാൻസിഷൻ", "isCorrect": false },
      { "text": "ഇന്ററാക്ഷൻ", "isCorrect": false },
      { "text": "ആനിമേഷൻ", "isCorrect": true },
      { "text": "ഗ്രൂപ്പ്", "isCorrect": false }
    ]
  },
  {
    "question": "LibreOffice Impress-ൽ ഒരു സ്ലൈഡിന് ട്രാൻസിഷൻ നൽകിയ ശേഷം, അവതരണം ക്ലാസിൽ കാണിക്കാൻ (Present) ഉപയോഗിക്കുന്ന മോഡ്?",
    "options": [
      { "text": "നോർമൽ വ്യൂ", "isCorrect": false },
      { "text": "സ്ലൈഡ് ഷോ മോഡ്", "isCorrect": true },
      { "text": "ഔട്ട്ലൈൻ വ്യൂ", "isCorrect": false },
      { "text": "നോട്ട്സ് വ്യൂ", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു അവതരണം 'കസ്റ്റമൈസ്ഡ്' (Customized) രീതിയിൽ കാണിക്കാൻ സഹായിക്കുന്നത്?",
    "options": [
      { "text": "സ്ലൈഡ് ലേഔട്ട്", "isCorrect": false },
      { "text": "മാസ്റ്റർ സ്ലൈഡ്", "isCorrect": false },
      { "text": "ഇന്ററാക്ഷൻ/ഹൈപ്പർലിങ്ക്", "isCorrect": true },
      { "text": "ട്രാൻസിഷൻ സ്പീഡ്", "isCorrect": false }
    ]
  },
  {
    "question": "സസ്യകോശങ്ങളെയും ജന്തുകോശങ്ങളെയും കുറിച്ചുള്ള പ്രധാന ആശയങ്ങൾ ഒരു സ്ലൈഡിൽ ഉൾപ്പെടുത്തി, വിശദാംശങ്ങൾ അടുത്ത സ്ലൈഡിൽ നൽകുന്നത് ഏത് തരം അവതരണത്തിന്റെ ഭാഗമാണ്?",
    "options": [
      { "text": "ലീനിയർ അവതരണം", "isCorrect": false },
      { "text": "സീക്വൻഷ്യൽ അവതരണം", "isCorrect": false },
      { "text": "നോൺ-ലീനിയർ അവതരണം", "isCorrect": true },
      { "text": "റാൻഡം അവതരണം", "isCorrect": false }
    ]
  },
  {
    "question": "നാവിഗേറ്റർ ടൂളിൽ സ്ലൈഡിലെ ഏത് ഘടകമാണ് കാണാൻ കഴിയുന്നത്?",
    "options": [
      { "text": "ടെക്സ്റ്റ് ഫ്രെയിമുകൾ മാത്രം", "isCorrect": false },
      { "text": "ചിത്രങ്ങൾ, പട്ടികകൾ, ടെക്സ്റ്റ് ഫ്രെയിമുകൾ, ഒബ്ജക്റ്റുകൾ", "isCorrect": true },
      { "text": "ട്രാൻസിഷൻ ഇഫക്റ്റുകൾ മാത്രം", "isCorrect": false },
      { "text": "ഓഡിയോ ക്ലിപ്പുകൾ മാത്രം", "isCorrect": false }
    ]
  },
  {
    "question": "LibreOffice Impress-ൽ സ്ലൈഡ് ഷോ തുടങ്ങാൻ സാധാരണയായി ഉപയോഗിക്കുന്ന ഫങ്ഷൻ കീ?",
    "options": [
      { "text": "F1", "isCorrect": false },
      { "text": "F5", "isCorrect": true },
      { "text": "F7", "isCorrect": false },
      { "text": "F12", "isCorrect": false }
    ]
  },
  {
    "question": "ഇന്ററാക്ഷൻ ഉപയോഗിച്ച് സ്ലൈഡുകൾക്കിടയിലുള്ള നാവിഗേഷൻ ഇഷ്ടാനുസരണം മാറ്റിയെടുക്കാൻ കഴിയുമോ?",
    "options": [
      { "text": "കഴിയൂല്ല", "isCorrect": false },
      { "text": "ലീനിയർ സ്ലൈഡുകളിൽ മാത്രം കഴിയും", "isCorrect": false },
      { "text": "കഴിയും", "isCorrect": true },
      { "text": "പ്രധാന സ്ലൈഡുകളിൽ മാത്രം കഴിയും", "isCorrect": false }
    ]
  },
  {
    "question": "LibreOffice Impress-ൽ ഒരു 'ആനിമേഷൻ' നൽകുന്നതിൻ്റെ പ്രധാന ലക്ഷ്യം?",
    "options": [
      { "text": "സ്ലൈഡ് നിറം മാറ്റാൻ", "isCorrect": false },
      { "text": "ഒബ്ജക്റ്റുകളുടെ പ്രവേശന-പുറത്തുപോകൽ ടൈമിംഗ് നിയന്ത്രിക്കാൻ", "isCorrect": true },
      { "text": "ട്രാൻസിഷൻ വേഗത കുറയ്ക്കാൻ", "isCorrect": false },
      { "text": "ഹൈപ്പർലിങ്ക് ചേർക്കാൻ", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു അവതരണത്തിൽ വീഡിയോ, ഡോക്യുമെന്റുകൾ പോലുള്ള **റിസോഴ്സുകൾ** ഉൾപ്പെടുത്താൻ സഹായിക്കുന്നത്?",
    "options": [
      { "text": "സ്ലൈഡ് ലേഔട്ട്", "isCorrect": false },
      { "text": "സ്ലൈഡ് ട്രാൻസിഷൻ", "isCorrect": false },
      { "text": "ഇന്ററാക്ഷൻ", "isCorrect": true },
      { "text": "കളർ സ്കീം", "isCorrect": false }
    ]
  },
  {
    "question": "അവതരണ വേളയിൽ സ്ലൈഡുകൾ ഒന്നിനുപുറകെ ഒന്നായി യാന്ത്രികമായി കാണിക്കാൻ വേണ്ടി മാത്രം ഉപയോഗിക്കുന്ന രീതി?",
    "options": [
      { "text": "നോൺ-ലീനിയർ രീതി", "isCorrect": false },
      { "text": "ലീനിയർ രീതി", "isCorrect": true },
      { "text": "റാൻഡം രീതി", "isCorrect": false },
      { "text": "കസ്റ്റം രീതി", "isCorrect": false }
    ]
  },
  {
    "question": "LibreOffice Impress-ലെ 'ഇന്ററാക്ഷൻ' സംബന്ധിച്ച് തെറ്റായ പ്രസ്താവന ഏതാണ്?",
    "options": [
      { "text": "നാവിഗേഷൻ ഇഷ്ടാനുസരണം മാറ്റിയെടുക്കാം", "isCorrect": false },
      { "text": "അവതരണം കസ്റ്റമൈസ്ഡ് രീതിയിൽ കാണിക്കാം", "isCorrect": false },
      { "text": "ഇന്ററാക്ഷൻ നൽകിയാൽ മാത്രമേ സ്ലൈഡുകൾ നാവിഗേറ്റ് ചെയ്യാൻ കഴിയൂ", "isCorrect": true },
      { "text": "റിസോഴ്സുകൾ ഉൾപ്പെടുത്താൻ സാധിക്കും", "isCorrect": false }
    ]
  },
  {
    "question": "സ്ലൈഡ് ട്രാൻസിഷൻ നൽകുന്നതിലൂടെ അവതരണത്തിൽ ഉണ്ടാകുന്ന മാറ്റം?",
    "options": [
      { "text": "ഓരോ ഒബ്ജക്റ്റിനും ചലനം ലഭിക്കുന്നു", "isCorrect": false },
      { "text": "സ്ലൈഡ് മാറുന്നതിനിടയിൽ ദൃശ്യചലനം ലഭിക്കുന്നു", "isCorrect": true },
      { "text": "അവതരണത്തിലെ അക്ഷരങ്ങൾ ഹൈലൈറ്റ് ചെയ്യപ്പെടുന്നു", "isCorrect": false },
      { "text": "സ്ലൈഡ് ഓട്ടോമാറ്റിക്കായി അടുത്തതിലേക്ക് പോകുന്നു", "isCorrect": false }
    ]
  },
  {
    "question": "സ്ലൈഡിലെ ഒരു ചിത്രത്തിന് ക്ലിക്കു ചെയ്യുമ്പോൾ ഒരു **ഡോക്യുമെന്റ് ഫയൽ** തുറക്കാൻ ഉപയോഗിക്കുന്ന സവിശേഷത?",
    "options": [
      { "text": "സ്ലൈഡ് ട്രാൻസിഷൻ", "isCorrect": false },
      { "text": "ആനിമേഷൻ", "isCorrect": false },
      { "text": "ഇന്ററാക്ഷൻ", "isCorrect": true },
      { "text": "ലേഔട്ട്", "isCorrect": false }
    ]
  },
  {
    "question": "നാവിഗേറ്റർ വഴി ഒരു സ്ലൈഡിലെ ഒബ്ജക്റ്റുകളെ എളുപ്പത്തിൽ തിരഞ്ഞെടുക്കുന്നത് എന്തിനാണ്?",
    "options": [
      { "text": "സ്ലൈഡ് ട്രാൻസിഷൻ നൽകാൻ", "isCorrect": false },
      { "text": "ആനിമേഷൻ/ഇന്ററാക്ഷൻ നൽകാൻ", "isCorrect": true },
      { "text": "സ്ലൈഡിൻ്റെ പശ്ചാത്തല നിറം മാറ്റാൻ", "isCorrect": false },
      { "text": "ഓരോ ഒബ്ജക്റ്റിന്റെയും സൈസ് മാറ്റാൻ", "isCorrect": false }
    ]
  },
  {
    "question": "LibreOffice Impress-ൽ ഒരു സ്ലൈഡിലേക്ക് ഹൈപ്പർലിങ്ക് വഴി ഉൾപ്പെടുത്താൻ കഴിയാത്ത ഒരു റിസോഴ്സ്?",
    "options": [
      { "text": "ഓഡിയോ ഫയൽ", "isCorrect": false },
      { "text": "എക്സ്റ്റേണൽ വെബ് പേജ്", "isCorrect": false },
      { "text": "പ്രിൻ്റഡ് പേപ്പർ", "isCorrect": true },
      { "text": "PDF ഡോക്യുമെന്റ്", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു അവതരണം സുഗമമായി നടത്തുന്നതിന് ട്രാൻസിഷനെക്കാൾ കൂടുതൽ പ്രാധാന്യം നൽകുന്നത്?",
    "options": [
      { "text": "സ്ലൈഡുകളുടെ എണ്ണത്തിന്", "isCorrect": false },
      { "text": "ആവശ്യാനുസരണം നാവിഗേഷൻ മാറ്റുന്നതിന്", "isCorrect": true },
      { "text": "ഫോണ്ട് സൈസിന്", "isCorrect": false },
      { "text": "ബാക്ക്ഗ്രൗണ്ട് ഇമേജിന്", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു അവതരണത്തിൽ 'ആനിമേഷൻ' നൽകുന്നത് എന്തിനാണ്?",
    "options": [
      { "text": "സ്ലൈഡുകൾ ഓട്ടോമാറ്റിക് ആയി മാറാൻ", "isCorrect": false },
      { "text": "ഉള്ളടക്കത്തെ കൂടുതൽ ശ്രദ്ധേയമാക്കാൻ", "isCorrect": true },
      { "text": "പ്രസന്റേഷൻ സേവ് ചെയ്യാൻ", "isCorrect": false },
      { "text": "നാവിഗേഷൻ നിയന്ത്രിക്കാൻ", "isCorrect": false }
    ]
  },
  {
    "question": "LibreOffice Impress-ൽ പുതിയ സ്ലൈഡ് ചേർക്കുന്നതിനുള്ള കമാൻഡ്?",
    "options": [
      { "text": "File → New", "isCorrect": false },
      { "text": "Insert → Slide", "isCorrect": true },
      { "text": "Format → Page", "isCorrect": false },
      { "text": "Tools → Options", "isCorrect": false }
    ]
  },
  {
    "question": "അവതരണത്തിലെ സ്ലൈഡുകളുടെ ഘടനാപരമായ രൂപം കാണാൻ നാവിഗേറ്റർ സഹായിക്കുന്നുണ്ടോ?",
    "options": [
      { "text": "ഇല്ല", "isCorrect": false },
      { "text": "ചില ഫോർമാറ്റുകളിൽ മാത്രം", "isCorrect": false },
      { "text": "ഉണ്ട്", "isCorrect": true },
      { "text": "ടെക്സ്റ്റ് മാത്രം", "isCorrect": false }
    ]
  },
  {
    "question": "സ്ലൈഡ് ഷോ തുടങ്ങുമ്പോൾ, മൗസ് ക്ലിക്കു ചെയ്യുമ്പോൾ മാത്രം അടുത്ത സ്ലൈഡ് വരുന്നതിന്, ട്രാൻസിഷൻ സെറ്റിംഗിൽ എന്ത് ഓപ്ഷൻ തിരഞ്ഞെടുക്കണം?",
    "options": [
      { "text": "ഓട്ടോമാറ്റിക്കലി ആഫ്റ്റർ", "isCorrect": false },
      { "text": "ഓൺ മൗസ് ക്ലിക്ക് (On Mouse Click)", "isCorrect": true },
      { "text": "വിത്ത് പ്രിവ്യൂ", "isCorrect": false },
      { "text": "ചേഞ്ച് സ്ലൈഡ്", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു അവതരണം തയ്യാറാക്കുമ്പോൾ, ട്രാൻസിഷനുകൾ പ്രയോഗിച്ച ശേഷം അടുത്ത പ്രധാന ഘട്ടം?",
    "options": [
      { "text": "ആനിമേഷൻ നൽകുക", "isCorrect": false },
      { "text": "പ്രസന്റേഷൻ ഫയൽ സേവ് ചെയ്യുക", "isCorrect": true },
      { "text": "ഓഡിയോ ചേർക്കുക", "isCorrect": false },
      { "text": "വെബ് പേജിലേക്ക് ലിങ്ക് നൽകുക", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു അവതരണത്തിലെ പ്രധാന ആശയങ്ങൾ സംബന്ധിച്ച് ഓഡിയൻസ് ചോദ്യങ്ങൾ ഉന്നയിച്ചാൽ, നോൺ-ലീനിയർ രീതിയുടെ ഗുണം എന്താണ്?",
    "options": [
      { "text": "ട്രാൻസിഷൻ മാറ്റാൻ കഴിയും", "isCorrect": false },
      { "text": "ചോദ്യങ്ങളുമായി ബന്ധപ്പെട്ട സ്ലൈഡുകളിലേക്ക് ഉടൻ പോകാൻ കഴിയും", "isCorrect": true },
      { "text": "കൂടുതൽ ആനിമേഷൻ നൽകാം", "isCorrect": false },
      { "text": "ചിത്രങ്ങൾ വലുതാക്കി കാണിക്കാം", "isCorrect": false }
    ]
  },
  {
    "question": "LibreOffice Impress ഏത് തരം സോഫ്റ്റ്‌വെയറിന് ഉദാഹരണമാണ്?",
    "options": [
      { "text": "വേർഡ് പ്രോസസർ", "isCorrect": false },
      { "text": "സ്പ്രെഡ്ഷീറ്റ്", "isCorrect": false },
      { "text": "അവതരണ സോഫ്റ്റ്‌വെയർ (Presentation Software)", "isCorrect": true },
      { "text": "ഗ്രാഫിക്സ് എഡിറ്റർ", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു അവതരണത്തിൽ സ്ലൈഡ് ട്രാൻസിഷൻ പ്രയോഗിക്കുന്നത്?",
    "options": [
      { "text": "സ്ലൈഡ് മുഴുവനായും", "isCorrect": true },
      { "text": "ഒരു ഒബ്ജക്റ്റിന് മാത്രം", "isCorrect": false },
      { "text": "ടെക്സ്റ്റ് ഫ്രെയിമിന് മാത്രം", "isCorrect": false },
      { "text": "രണ്ട് ഒബ്ജക്റ്റുകൾക്ക് ഇടയിൽ മാത്രം", "isCorrect": false }
    ]
  },
  {
    "question": "ആനിമേഷനും സ്ലൈഡ് ട്രാൻസിഷനും തമ്മിലുള്ള പ്രധാന വ്യത്യാസം?",
    "options": [
      { "text": "രണ്ടും ഒരേ ഇഫക്റ്റ് ആണ്", "isCorrect": false },
      { "text": "ആനിമേഷൻ സ്ലൈഡിലെ ഒബ്ജക്റ്റിന്, ട്രാൻസിഷൻ സ്ലൈഡ് മാറുന്നതിന്", "isCorrect": true },
      { "text": "ട്രാൻസിഷൻ മാത്രമേ ശബ്ദം നൽകൂ", "isCorrect": false },
      { "text": "ആനിമേഷൻ സ്ലൈഡ് മുഴുവനായും ബാധിക്കും", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു സ്ലൈഡിൻ്റെ പശ്ചാത്തല നിറം മാറ്റാൻ ഉപയോഗിക്കുന്ന മെനു ഓപ്ഷൻ?",
    "options": [
      { "text": "File → Save", "isCorrect": false },
      { "text": "Format → Page", "isCorrect": true },
      { "text": "Insert → Image", "isCorrect": false },
      { "text": "Slide Show → Settings", "isCorrect": false }
    ]
  },
  {
    "question": "Impress-ൽ നാവിഗേറ്റർ ടൂൾ എവിടെയാണ് സാധാരണയായി കാണുന്നത്?",
    "options": [
      { "text": "സ്ക്രീനിൻ്റെ മുകളിൽ", "isCorrect": false },
      { "text": "സ്ക്രീനിൻ്റെ വലതുവശത്ത്", "isCorrect": false },
      { "text": "സ്ക്രീനിൻ്റെ ഇടതുവശത്ത്", "isCorrect": true },
      { "text": "സ്ക്രീനിൻ്റെ താഴെ", "isCorrect": false }
    ]
  },
  {
    "question": "അവതരണത്തിൽ **ടൈമിംഗ്** നിയന്ത്രിക്കാൻ സഹായിക്കുന്ന രണ്ട് പ്രധാന ഇഫക്റ്റുകൾ?",
    "options": [
      { "text": "ട്രാൻസിഷൻ, ഇന്ററാക്ഷൻ", "isCorrect": false },
      { "text": "ആനിമേഷൻ, സ്ലൈഡ് ട്രാൻസിഷൻ", "isCorrect": true },
      { "text": "നാവിഗേറ്റർ, ലേഔട്ട്", "isCorrect": false },
      { "text": "സേവ്, എക്സ്പോർട്ട്", "isCorrect": false }
    ]
  },
  {
    "question": "LibreOffice Impress-ൽ 'ഇന്ററാക്ഷൻ' ഓപ്ഷൻ ഏത് മെനുവിന് കീഴിലാണ് വരാൻ സാധ്യതയുള്ളത്?",
    "options": [
      { "text": "Tools", "isCorrect": false },
      { "text": "Edit", "isCorrect": false },
      { "text": "Slide Show", "isCorrect": true },
      { "text": "Help", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു വലിയ ഡാറ്റാ സെറ്റ് വിശദീകരിക്കുന്നതിന്, ഓരോ ഭാഗവും വെവ്വേറെ സ്ലൈഡുകളിൽ നൽകുന്ന അവതരണ രീതി?",
    "options": [
      { "text": "നോൺ-ലീനിയർ രീതി", "isCorrect": false },
      { "text": "ലീനിയർ രീതി", "isCorrect": true },
      { "text": "മിക്സഡ് രീതി", "isCorrect": false },
      { "text": "കസ്റ്റം രീതി", "isCorrect": false }
    ]
  },
  {
    "question": "സ്ലൈഡുകളിലെ ഒബ്ജക്റ്റുകളെ എളുപ്പത്തിൽ തിരിച്ചറിയാൻ സഹായിക്കുന്ന നാവിഗേറ്റർ സവിശേഷത?",
    "options": [
      { "text": "ഒബ്ജക്റ്റുകൾക്ക് ഓട്ടോമാറ്റിക് കളർ നൽകുന്നത്", "isCorrect": false },
      { "text": "ഒബ്ജക്റ്റുകളുടെ പേര് സഹിതം കാണിക്കുന്നത്", "isCorrect": true },
      { "text": "സ്ലൈഡ് ലേഔട്ട് മാറ്റുന്നത്", "isCorrect": false },
      { "text": "ഇന്ററാക്ഷൻ നൽകുന്നത്", "isCorrect": false }
    ]
  },
  {
    "question": "'സെൽ മെംബ്രേൻ', 'ന്യൂക്ലിയസ്' എന്നിങ്ങനെയുള്ള ടെക്സ്റ്റ് ഫ്രെയിമുകൾക്ക് ക്ലിക്കു ചെയ്യുമ്പോൾ പ്രത്യേക സ്ലൈഡുകളിലേക്ക് പോകാൻ ഉപയോഗിക്കേണ്ട സാങ്കേതികവിദ്യ?",
    "options": [
      { "text": "സ്ലൈഡ് ട്രാൻസിഷൻ", "isCorrect": false },
      { "text": "ആനിമേഷൻ", "isCorrect": false },
      { "text": "ഇന്ററാക്ഷൻ", "isCorrect": true },
      { "text": "മാസ്റ്റർ സ്ലൈഡ്", "isCorrect": false }
    ]
  },
  {
    "question": "അവതരണത്തിലെ ഏത് ഘടകമാണ് ഓഡിയൻസിൻ്റെ ശ്രദ്ധ ആകർഷിക്കാൻ ഏറ്റവും കൂടുതൽ ഉപയോഗിക്കുന്നത്?",
    "options": [
      { "text": "ഹൈപ്പർലിങ്ക്", "isCorrect": false },
      { "text": "ഇന്ററാക്ഷൻ", "isCorrect": false },
      { "text": "ആനിമേഷൻ", "isCorrect": true },
      { "text": "നാവിഗേറ്റർ", "isCorrect": false }
    ]
  },
  {
    "question": "LibreOffice Impress-ൽ ഒരു സ്ലൈഡിൻ്റെ ലേഔട്ട് മാറ്റാൻ ഉപയോഗിക്കുന്ന ഓപ്ഷൻ?",
    "options": [
      { "text": "File → Export", "isCorrect": false },
      { "text": "Format → Slide Layout", "isCorrect": true },
      { "text": "Insert → Image", "isCorrect": false },
      { "text": "Tools → Options", "isCorrect": false }
    ]
  },
  {
    "question": "അവതരണം തയ്യാറാക്കിയ ശേഷം ആവശ്യമെങ്കിൽ മാറ്റങ്ങൾ വരുത്തുന്നതിനായി, പ്രസന്റേഷൻ ഫയൽ എന്ത് രൂപത്തിലാണ് സേവ് ചെയ്യേണ്ടത്?",
    "options": [
      { "text": "PDF ഫോർമാറ്റിൽ", "isCorrect": false },
      { "text": "എഡിറ്റ് ചെയ്യാൻ കഴിയുന്ന .odp ഫോർമാറ്റിൽ", "isCorrect": true },
      { "text": "HTML ഫോർമാറ്റിൽ", "isCorrect": false },
      { "text": "വീഡിയോ ഫോർമാറ്റിൽ", "isCorrect": false }
    ]
  },
  {
    "question": "സ്ലൈഡ് ട്രാൻസിഷൻ നൽകിയ ശേഷം, ട്രാൻസിഷൻ ഇഫക്റ്റ് പ്രവർത്തിക്കുന്നുണ്ടോ എന്ന് കാണാൻ ഉപയോഗിക്കുന്ന ഫീച്ചർ?",
    "options": [
      { "text": "സേവ്", "isCorrect": false },
      { "text": "പ്രിവ്യൂ (Preview)", "isCorrect": true },
      { "text": "എക്സ്പോർട്ട്", "isCorrect": false },
      { "text": "നാവിഗേറ്റർ", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു അവതരണത്തിൽ 'ഇന്ററാക്ഷൻ' ഉപയോഗിക്കുമ്പോൾ സ്ലൈഡുകളുടെ എണ്ണം കൂടുന്നത് അവതരണത്തെ ബാധിക്കുമോ?",
    "options": [
      { "text": "കൂടുതലായി ബാധിക്കും", "isCorrect": false },
      { "text": "നാവിഗേഷൻ കസ്റ്റമൈസ് ചെയ്യാൻ കഴിയുന്നതിനാൽ ബാധിക്കില്ല", "isCorrect": true },
      { "text": "ഫയൽ സൈസ് കുറയ്ക്കും", "isCorrect": false },
      { "text": "ട്രാൻസിഷൻ വേഗത കുറയ്ക്കും", "isCorrect": false }
    ]
  },
  {
    "question": "LibreOffice Impress-ൽ **Slide Show Settings** എന്തിനാണ് ഉപയോഗിക്കുന്നത്?",
    "options": [
      { "text": "സ്ലൈഡിലെ ചിത്രങ്ങൾ എഡിറ്റ് ചെയ്യാൻ", "isCorrect": false },
      { "text": "അവതരണം ഏത് മോഡിൽ (ഉദാ: ഫുൾ സ്ക്രീൻ) കാണിക്കണമെന്ന് നിയന്ത്രിക്കാൻ", "isCorrect": true },
      { "text": "പുതിയ സ്ലൈഡ് ചേർക്കാൻ", "isCorrect": false },
      { "text": "ഫോണ്ട് കളർ മാറ്റാൻ", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു അവതരണം ഓട്ടോമാറ്റിക്കായി അടുത്ത സ്ലൈഡിലേക്ക് പോകാൻ ട്രാൻസിഷനിൽ ടൈം സെറ്റ് ചെയ്യുന്നതിന് ഉപയോഗിക്കുന്ന ഓപ്ഷൻ?",
    "options": [
      { "text": "ഓൺ മൗസ് ക്ലിക്ക്", "isCorrect": false },
      { "text": "ഓട്ടോമാറ്റിക്കലി ആഫ്റ്റർ (Automatically After)", "isCorrect": true },
      { "text": "നോൺ-ലീനിയർ", "isCorrect": false },
      { "text": "മാസ്റ്റർ സ്ലൈഡ്", "isCorrect": false }
    ]
  },
  {
    "question": "നോൺ-ലീനിയർ അവതരണ രീതിയുടെ ഏറ്റവും വലിയ ഗുണം?",
    "options": [
      { "text": "സ്ലൈഡുകൾ വേഗത്തിൽ മാറുന്നു", "isCorrect": false },
      { "text": "ഓഡിയൻസിൻ്റെ താൽപ്പര്യത്തിനനുസരിച്ച് വിഷയങ്ങൾക്ക് മുൻഗണന നൽകാം", "isCorrect": true },
      { "text": "ഫയൽ സൈസ് കുറയുന്നു", "isCorrect": false },
      { "text": "കൂടുതൽ ചിത്രങ്ങൾ ചേർക്കാം", "isCorrect": false }
    ]
  },
  {
    "question": "LibreOffice Impress-ൽ സ്ലൈഡ് ട്രാൻസിഷൻ എവിടെയാണ് കാണപ്പെടുന്നത്?",
    "options": [
      { "text": "Format മെനുവിൽ", "isCorrect": false },
      { "text": "സ്ക്രീനിൻ്റെ വലതുവശത്തെ സൈഡ്ബാർ ടാബുകളിൽ", "isCorrect": true },
      { "text": "Tools മെനുവിൽ", "isCorrect": false },
      { "text": "View മെനുവിൽ", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു സ്ലൈഡിലെ 'ഗ്രൂപ്പ് ഒബ്ജക്റ്റ്' (Group object) നാവിഗേറ്ററിൽ കാണിക്കുന്നുണ്ടോ?",
    "options": [
      { "text": "ഇല്ല", "isCorrect": false },
      { "text": "ഉണ്ട്", "isCorrect": true },
      { "text": "ചിത്രങ്ങൾ മാത്രം", "isCorrect": false },
      { "text": "ടെക്സ്റ്റ് മാത്രം", "isCorrect": false }
    ]
  },
  {
    "question": "സ്ലൈഡ് ഷോ മോഡിൽ നിന്ന് പുറത്തുവരാൻ (Exit) സാധാരണയായി ഉപയോഗിക്കുന്ന കീ?",
    "options": [
      { "text": "Enter", "isCorrect": false },
      { "text": "Tab", "isCorrect": false },
      { "text": "Esc", "isCorrect": true },
      { "text": "Ctrl+S", "isCorrect": false }
    ]
  },
  {
    "question": "സ്ലൈഡ് ഷോ വേളയിൽ ഒരു പ്രത്യേക സ്ലൈഡിലേക്ക് പോകാൻ ഇന്ററാക്ഷൻ നൽകിയില്ലെങ്കിൽ, നാവിഗേഷൻ എങ്ങനെയായിരിക്കും?",
    "options": [
      { "text": "ലീനിയർ രീതിയിൽ", "isCorrect": true },
      { "text": "യാതൊരു നാവിഗേഷനും ലഭ്യമല്ല", "isCorrect": false },
      { "text": "ഓട്ടോമാറ്റിക്കായി റാൻഡം സ്ലൈഡുകളിലേക്ക്", "isCorrect": false },
      { "text": "ഫുൾ സ്ക്രീൻ മോഡ് ലഭ്യമല്ല", "isCorrect": false }
    ]
  },
  {
    "question": "സ്ലൈഡുകൾക്ക് എളുപ്പത്തിൽ പൊതുവായ ബാക്ക്ഗ്രൗണ്ട്, ഫോണ്ട് ശൈലി എന്നിവ നൽകാൻ ഉപയോഗിക്കുന്നത്?",
    "options": [
      { "text": "ഇന്ററാക്ഷൻ", "isCorrect": false },
      { "text": "മാസ്റ്റർ സ്ലൈഡ് (Master Slide)", "isCorrect": true },
      { "text": "നാവിഗേറ്റർ", "isCorrect": false },
      { "text": "ആനിമേഷൻ", "isCorrect": false }
    ]
  },
  {
    "question": "LibreOffice Impress-ൽ ഒരു ഒബ്ജക്റ്റിന് നൽകിയ ആനിമേഷൻ ഇഫക്റ്റ് നീക്കം ചെയ്യാൻ ഉപയോഗിക്കുന്നത്?",
    "options": [
      { "text": "ട്രാൻസിഷൻ ഡിലീറ്റ് ചെയ്യുക", "isCorrect": false },
      { "text": "ആനിമേഷൻ പാനലിൽ നിന്ന് ഇഫക്റ്റ് നീക്കം ചെയ്യുക", "isCorrect": true },
      { "text": "നാവിഗേറ്റർ ഉപയോഗിച്ച് ഒബ്ജക്റ്റ് ഡിലീറ്റ് ചെയ്യുക", "isCorrect": false },
      { "text": "സ്ലൈഡ് ലേഔട്ട് മാറ്റുക", "isCorrect": false }
    ]
  },
  {
    "question": "പ്രധാന ആശയങ്ങൾ ഉൾപ്പെടുത്തിയ സ്ലൈഡിൽ നിന്ന് ക്ലിക്കു ചെയ്യുമ്പോൾ വിശദാംശങ്ങളുള്ള സ്ലൈഡിലേക്ക് പോകുന്ന സാങ്കേതികവിദ്യയുടെ പേര്?",
    "options": [
      { "text": "ആനിമേഷൻ", "isCorrect": false },
      { "text": "സ്ലൈഡ് ലേഔട്ട്", "isCorrect": false },
      { "text": "ഇന്ററാക്ഷൻ/ഹൈപ്പർലിങ്ക്", "isCorrect": true },
      { "text": "മാസ്റ്റർ സ്ലൈഡ്", "isCorrect": false }
    ]
  },
  {
    "question": "അവതരണത്തിലെ 'ഇന്ററാക്ഷൻ' നൽകുന്നതിലൂടെയുള്ള ഒരു പ്രധാന പ്രയോജനം?",
    "options": [
      { "text": "ഓരോ സ്ലൈഡിലും വെവ്വേറെ ഫോണ്ട് ഉപയോഗിക്കാം", "isCorrect": false },
      { "text": "അവതരണം കൂടുതൽ ഡയനാമിക് ആക്കാം", "isCorrect": true },
      { "text": "ഫയൽ സൈസ് കുറയ്ക്കാം", "isCorrect": false },
      { "text": "സ്ലൈഡ് കളർ മാറ്റാം", "isCorrect": false }
    ]
  },
  {
    "question": "നോൺ-ലീനിയർ രീതിയിൽ അവതരിപ്പിക്കുന്നതിലൂടെ എന്ത് നേടാൻ കഴിയും?",
    "options": [
      { "text": "സമയപരിധി കൃത്യമായി പാലിക്കാം", "isCorrect": false },
      { "text": "കൂടുതൽ ഫലപ്രദവും സംവേദനാത്മകവുമായ അവതരണം", "isCorrect": true },
      { "text": "എല്ലാ സ്ലൈഡുകളും കാണിച്ചു തീർക്കാം", "isCorrect": false },
      { "text": "ട്രാൻസിഷൻ ഒഴിവാക്കാം", "isCorrect": false }
    ]
  },
  {
    "question": "LibreOffice Impress-ൽ സ്ലൈഡ് ട്രാൻസിഷൻ നൽകാനുള്ള ഓപ്ഷൻ എവിടെയാണ് കാണപ്പെടുന്നത്?",
    "options": [
      { "text": "Slide Show മെനുവിന് കീഴിൽ", "isCorrect": true },
      { "text": "Tools മെനുവിന് കീഴിൽ", "isCorrect": false },
      { "text": "Insert മെനുവിന് കീഴിൽ", "isCorrect": false },
      { "text": "Table മെനുവിന് കീഴിൽ", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു അവതരണത്തിൻ്റെ 'Smoothness' (സുഗമമായ ഒഴുക്ക്) വർദ്ധിപ്പിക്കാൻ സഹായിക്കുന്ന ഘടകം?",
    "options": [
      { "text": "ഒരേ കളർ സ്കീം ഉപയോഗിക്കുക", "isCorrect": false },
      { "text": "വ്യക്തമായ നാവിഗേഷൻ (ഇന്ററാക്ഷൻ)", "isCorrect": true },
      { "text": "വലിയ ഫോണ്ട് സൈസ് ഉപയോഗിക്കുക", "isCorrect": false },
      { "text": "ചിത്രങ്ങൾ മാത്രം ഉപയോഗിക്കുക", "isCorrect": false }
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
