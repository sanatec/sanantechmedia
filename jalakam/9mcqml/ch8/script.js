document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "ഒരു നല്ല പ്രസന്റേഷന്റെ പ്രധാന പ്രയോജനമായി പട്ടികപ്പെടുത്തിയിരിക്കുന്നത് എന്താണ്?",
    "options": [
      { "text": "സങ്കീർണ്ണമായ വിവരങ്ങൾ ലളിതമായി അവതരിപ്പിക്കുന്നത്", "isCorrect": true },
      { "text": " വ്യക്തത ഉറപ്പാക്കാൻ ടെക്സ്റ്റ് മാത്രം ഉപയോഗിക്കുന്നത്", "isCorrect": false },
      { "text": "ലളിതമായ വിവരങ്ങൾ കൂടുതൽ സങ്കീർണ്ണമായി കാണിക്കുന്നത്", "isCorrect": false },
      { "text": "ആശയവിനിമയം ഒരൊറ്റ ശൈലിയിൽ ഒതുക്കുന്നത്", "isCorrect": false }
    ]
  },
  {
    "question": "ഏതൊക്കെ ഘടകങ്ങളെ വ്യവസ്ഥാപിതമായി സംയോജിപ്പിക്കാനാണ് പ്രസന്റേഷനുകൾ അനുവദിക്കുന്നത്?",
    "options": [
      { "text": "ടെക്സ്റ്റ്, ചിത്രങ്ങൾ, ഓഡിയോ/വീഡിയോ", "isCorrect": true },
      { "text": "ടെക്സ്റ്റും ചാർട്ടുകളും മാത്രം", "isCorrect": false },
      { "text": "ചിത്രങ്ങളും ഓഡിയോയും മാത്രം", "isCorrect": false },
      { "text": "ഉപയോക്താവിന്റെ അഭിപ്രായങ്ങളും ഫീഡ്‌ബാക്കും", "isCorrect": false }
    ]
  },
  {
    "question": "പ്രസന്റേഷൻ കഴിവുകൾ (Presentation skills) ഏത് തരം കഴിവായാണ് കണക്കാക്കപ്പെടുന്നത്?",
    "options": [
      { "text": "ഒരു സാങ്കേതിക വൈദഗ്ദ്ധ്യം (Technical skill)", "isCorrect": false },
      { "text": "ഒരു സോഫ്റ്റ് സ്കിൽ (Soft skill)", "isCorrect": true },
      { "text": "ഒരു പ്രത്യേക മേഖലയിലെ വൈദഗ്ദ്ധ്യം", "isCorrect": false },
      { "text": "ഒരു ഡാറ്റാ എൻട്രി വൈദഗ്ദ്ധ്യം", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരാളുടെ പ്രസന്റേഷൻ കഴിവുകൾ എങ്ങനെ മെച്ചപ്പെടുത്താനും മികച്ചതാക്കാനും കഴിയും?",
    "options": [
      { "text": "സങ്കീർണ്ണമായ സോഫ്റ്റ്‌വെയർ ഉപയോഗിക്കുന്നതിലൂടെ", "isCorrect": false },
      { "text": "തുടർച്ചയായ പരിശീലനത്തിലൂടെ", "isCorrect": true },
      { "text": "സാങ്കേതിക കഴിവുകളിൽ മാത്രം ശ്രദ്ധ കേന്ദ്രീകരിക്കുന്നതിലൂടെ", "isCorrect": false },
      { "text": "ഡിഫോൾട്ട് ടെംപ്ലേറ്റുകൾ ഉപയോഗിക്കുന്നതിലൂടെ", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു പ്രസന്റേഷൻ തയ്യാറാക്കുന്നതിന് മുമ്പ് ആവശ്യമായ തയ്യാറെടുപ്പ് ഘട്ടം എന്താണ്?",
    "options": [
      { "text": "ആവശ്യമായ വിവരങ്ങൾ, ചിത്രങ്ങൾ, വീഡിയോകൾ എന്നിവ ശേഖരിക്കുക", "isCorrect": true },
      { "text": "അവസാന സ്ലൈഡ് ട്രാൻസിഷൻ തീരുമാനിക്കുക", "isCorrect": false },
      { "text": "അവസാന സ്ലൈഡിന്റെ ഫോണ്ട് നിറം തിരഞ്ഞെടുക്കുക", "isCorrect": false },
      { "text": "ആദ്യ സ്ലൈഡിലെ തലക്കെട്ടിന് ആനിമേഷൻ നൽകുക", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു സ്ലൈഡിലെ പ്രധാന ആശയങ്ങൾ സംക്ഷിപ്തമായി പട്ടികപ്പെടുത്താൻ എന്ത് സാങ്കേതിക വിദ്യ ഉപയോഗിക്കാം?",
    "options": [
      { "text": "നീണ്ട ഖണ്ഡികകൾ എഴുതുക", "isCorrect": false },
      { "text": "ബുള്ളറ്റ് ലിസ്റ്റ് സാങ്കേതിക വിദ്യകൾ ഉപയോഗിക്കുക", "isCorrect": true },
      { "text": "ഒരു മാസ്റ്റർ സ്ലൈഡ് ചേർക്കുക", "isCorrect": false },
      { "text": "'അറേഞ്ച്' ടൂൾ ഉപയോഗിക്കുക", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു സ്ലൈഡിലേക്ക് ചിത്രം ചേർക്കുന്നതിനുള്ള മെനു പാത്ത് എന്താണ്?",
    "options": [
      { "text": "Insert → Image", "isCorrect": true },
      { "text": "File → Open → Image", "isCorrect": false },
      { "text": "Format → Image", "isCorrect": false },
      { "text": "View → Image", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു ടെക്സ്റ്റ്ബോക്സ് ചേർക്കാൻ ഉപയോഗിക്കുന്ന, സാധാരണയായി 'A' എന്ന് അടയാളപ്പെടുത്തിയ ടൂൾ ഏതാണ്?",
    "options": [
      { "text": "ഷേപ്പ് ടൂൾ", "isCorrect": false },
      { "text": "ഇമേജ് ടൂൾ", "isCorrect": false },
      { "text": "ടെക്സ്റ്റ് ബോക്സ് ടൂൾ", "isCorrect": true },
      { "text": "ഗാലറി ടൂൾ", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു ടെക്സ്റ്റ് ബോക്സ് ചേർക്കുന്നതിനുള്ള മെനു പാത്ത് എന്താണ്?",
    "options": [
      { "text": "Insert → Textbox", "isCorrect": true },
      { "text": "File → New → Textbox", "isCorrect": false },
      { "text": "Format → Textbox", "isCorrect": false },
      { "text": "Slide → Textbox", "isCorrect": false }
    ]
  },
  {
    "question": "തിരഞ്ഞെടുത്ത ഒരു ടെക്സ്റ്റിനോ ഒബ്ജക്റ്റിനോ ആനിമേഷൻ ഇഫക്റ്റ് എങ്ങനെ ചേർക്കാം?",
    "options": [
      { "text": "സൈഡ്‌ബാറിൽ നിന്ന് 'Animation' തിരഞ്ഞെടുത്ത് 'Add' ബട്ടൺ ക്ലിക്കുചെയ്യുക", "isCorrect": true },
      { "text": "'Insert → Animation' എന്നതിലേക്ക് പോകുക", "isCorrect": false },
      { "text": "ഒബ്ജക്റ്റിൽ റൈറ്റ് ക്ലിക്ക് ചെയ്ത് 'Properties' തിരഞ്ഞെടുക്കുക", "isCorrect": false },
      { "text": "ഒബ്ജക്റ്റ് 'Master Slides' പേനിലേക്ക് വലിച്ചിടുക", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു പ്രസന്റേഷനിലെ മറ്റെല്ലാ സ്ലൈഡുകൾക്കുമുള്ള ശൈലി നിർവചിക്കുന്ന ടെംപ്ലേറ്റ് സ്ലൈഡിന്റെ പേരെന്താണ്?",
    "options": [
      { "text": "മെയിൻ സ്ലൈഡ്", "isCorrect": false },
      { "text": "മാസ്റ്റർ സ്ലൈഡ്", "isCorrect": true },
      { "text": "പാരന്റ് സ്ലൈഡ്", "isCorrect": false },
      { "text": "സ്റ്റൈൽ സ്ലൈഡ്", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു മാസ്റ്റർ സ്ലൈഡ് ഉപയോഗിക്കുന്നതിന്റെ പ്രധാന പ്രയോജനം എന്താണ്?",
    "options": [
      { "text": "ഇത് എല്ലാ സ്ലൈഡുകൾക്കും സ്വയമേവ ആനിമേഷൻ നൽകുന്നു", "isCorrect": false },
      { "text": "ഇത് എല്ലാ സ്ലൈഡുകൾക്കും ഒരേ ശൈലി നൽകാനും ഐക്യം നിലനിർത്താനും സഹായിക്കുന്നു", "isCorrect": true },
      { "text": "ഇത് ഓരോ സ്ലൈഡിലും വ്യത്യസ്ത ചിത്രം ചേർക്കുന്നു", "isCorrect": false },
      { "text": "ഇത് പ്രസന്റേഷനിലെ അക്ഷരത്തെറ്റുകൾ പരിശോധിക്കുന്നു", "isCorrect": false }
    ]
  },
  {
    "question": "നിങ്ങൾ ഒരു മാസ്റ്റർ സ്ലൈഡിലെ ഫോണ്ട് ശൈലി മാറ്റിയാൽ, അത് ഉപയോഗിക്കുന്ന സാധാരണ സ്ലൈഡുകൾക്ക് എന്ത് സംഭവിക്കും?",
    "options": [
      { "text": "ഒന്നും സംഭവിക്കില്ല, സ്ലൈഡുകൾ വ്യക്തിഗതമായി മാറ്റണം", "isCorrect": false },
      { "text": "പുതിയ സ്ലൈഡുകൾക്ക് മാത്രമേ മാറ്റം ലഭിക്കൂ", "isCorrect": false },
      { "text": "ആ മാസ്റ്റർ ഉപയോഗിക്കുന്ന മറ്റെല്ലാ സ്ലൈഡുകളിലും മാറ്റം പ്രതിഫലിക്കും", "isCorrect": true },
      { "text": "യഥാർത്ഥ ഫോണ്ട് ശൈലിക്ക് കേടുപാടുകൾ സംഭവിക്കും", "isCorrect": false }
    ]
  },
  {
    "question": "മാസ്റ്റർ സ്ലൈഡുകൾ ഉപയോഗിക്കുന്നതിന്റെ പ്രധാന ലക്ഷ്യം എന്താണ്?",
    "options": [
      { "text": "ഓരോ സ്ലൈഡിനും വ്യത്യസ്ത ആനിമേഷൻ നൽകാൻ", "isCorrect": false },
      { "text": "സ്ലൈഡുകൾക്കിടയിലുള്ള നാവിഗേഷൻ നിയന്ത്രിക്കാൻ", "isCorrect": false },
      { "text": "മറ്റ് സ്ലൈഡുകൾക്കായി മൊത്തത്തിലുള്ള ലേഔട്ടും ശൈലിയും നിർവചിക്കാൻ", "isCorrect": true },
      { "text": "ഓരോ സ്ലൈഡിനും ഒരു പ്രത്യേക പശ്ചാത്തല നിറം നൽകാൻ", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു പ്രസന്റേഷനിൽ ഒന്നിലധികം, വ്യത്യസ്ത മാസ്റ്റർ സ്ലൈഡ് ടെംപ്ലേറ്റുകൾ സൃഷ്ടിക്കാൻ കഴിയുമോ?",
    "options": [
      { "text": "അതെ, നിങ്ങൾക്ക് ഒന്നിലധികം ടെംപ്ലേറ്റുകൾ സൃഷ്ടിക്കാൻ കഴിയും", "isCorrect": true },
      { "text": "ഇല്ല, ഒരു മാസ്റ്റർ സ്ലൈഡ് മാത്രമേ അനുവദിക്കൂ", "isCorrect": false },
      { "text": "അതെ, എന്നാൽ അവയെല്ലാം ഒരേ പശ്ചാത്തലം പങ്കിടണം", "isCorrect": false },
      { "text": "ഇല്ല, ഈ ഫീച്ചർ ഓൺലൈൻ പ്ലാറ്റ്‌ഫോമുകൾക്ക് മാത്രമുള്ളതാണ്", "isCorrect": false }
    ]
  },
  {
    "question": "നിലവിൽ ഉള്ളടക്കമുള്ള ഒരു സ്ലൈഡിലേക്ക് നിങ്ങൾ ഒരു മാസ്റ്റർ സ്ലൈഡ് ഡിസൈൻ പ്രയോഗിക്കുമ്പോൾ എന്ത് സംഭവിക്കും?",
    "options": [
      { "text": "സ്ലൈഡിലെ എല്ലാ ഉള്ളടക്കവും ഇല്ലാതാക്കപ്പെടും", "isCorrect": false },
      { "text": "പുതിയ മാസ്റ്റർ സ്ലൈഡിന്റെ ഡിസൈൻ അനുസരിച്ച് ഉള്ളടക്കം ഫോർമാറ്റ് ചെയ്യപ്പെടും", "isCorrect": true },
      { "text": "സ്ലൈഡിലെ ചിത്രങ്ങൾ മാത്രം മറയ്ക്കപ്പെടും", "isCorrect": false },
      { "text": "പകരം ഒരു പുതിയ ശൂന്യമായ സ്ലൈഡിൽ മാസ്റ്റർ സ്ലൈഡ് പ്രയോഗിക്കപ്പെടും", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു മാസ്റ്റർ സ്ലൈഡ് എഡിറ്റ് ചെയ്യാൻ 'മാസ്റ്റർ വ്യൂ' എങ്ങനെ ആക്സസ് ചെയ്യാം?",
    "options": [
      { "text": "'File → Master View' ക്ലിക്ക് ചെയ്യുക", "isCorrect": false },
      { "text": "'Insert → Master View' ക്ലിക്ക് ചെയ്യുക", "isCorrect": false },
      { "text": "'Slide bar Settings → Slide Properties' എന്നതിൽ നിന്ന് 'Master View' ക്ലിക്ക് ചെയ്യുക", "isCorrect": true },
      { "text": "ഒരു സ്ലൈഡിൽ റൈറ്റ് ക്ലിക്ക് ചെയ്ത് 'Edit Master' തിരഞ്ഞെടുക്കുക", "isCorrect": false }
    ]
  },
  {
    "question": "മാസ്റ്റർ വ്യൂവിൽ സാധാരണയായി ഉള്ളടക്കത്തിനായി മുൻകൂട്ടി നിർവചിച്ച ഏതെല്ലാം ഏരിയകൾ ലഭ്യമാണ്?",
    "options": [
      { "text": "ടെക്സ്റ്റ് ലെവലുകൾ മാത്രം", "isCorrect": false },
      { "text": "ടെക്സ്റ്റ് ലെവലുകൾ, തീയതി & സമയം, അടിക്കുറിപ്പ്, സ്ലൈഡ് നമ്പർ", "isCorrect": true },
      { "text": "ചിത്രങ്ങൾക്കും വീഡിയോകൾക്കുമുള്ള പ്ലേസ്‌ഹോൾഡറുകൾ മാത്രം", "isCorrect": false },
      { "text": "ചാർട്ടുകൾക്കും ടേബിളുകൾക്കുമുള്ള ഏരിയകൾ മാത്രം", "isCorrect": false }
    ]
  },
  {
    "question": "'മാസ്റ്റർ വ്യൂ' എഡിറ്റിംഗ് മോഡിൽ നിന്ന് എങ്ങനെ പുറത്തുകടക്കാം?",
    "options": [
      { "text": "'Close Master View' ബട്ടൺ ക്ലിക്ക് ചെയ്യുക", "isCorrect": true },
      { "text": "'Esc' കീ അമർത്തുക", "isCorrect": false },
      { "text": "പ്രോഗ്രാം ക്ലോസ് ചെയ്ത് വീണ്ടും തുറക്കുക", "isCorrect": false },
      { "text": "ഫയൽ സേവ് ചെയ്യുക", "isCorrect": false }
    ]
  },
  {
    "question": "'Close Master View' ബട്ടൺ ദൃശ്യമല്ലെങ്കിൽ നിങ്ങൾ എന്തുചെയ്യണം?",
    "options": [
      { "text": "കമ്പ്യൂട്ടർ റീസ്റ്റാർട്ട് ചെയ്യുക", "isCorrect": false },
      { "text": "തിരഞ്ഞെടുത്ത സ്ലൈഡിനോ ഒബ്ജക്റ്റിനോ പുറത്ത് എവിടെയെങ്കിലും ക്ലിക്ക് ചെയ്യുക", "isCorrect": true },
      { "text": "'File → Exit View' എന്നതിലേക്ക് പോകുക", "isCorrect": false },
      { "text": "ബട്ടൺ എപ്പോഴും ദൃശ്യമാണ്", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു മാസ്റ്റർ സ്ലൈഡിന്റെ ഡിഫോൾട്ട് പേര് എങ്ങനെ മാറ്റാം?",
    "options": [
      { "text": "'Format → Rename' എന്നതിലേക്ക് പോകുക", "isCorrect": false },
      { "text": "പേര് മാറ്റാൻ കഴിയില്ല", "isCorrect": false },
      { "text": "മാസ്റ്റർ വ്യൂവിലെ സ്ലൈഡിൽ ഡബിൾ ക്ലിക്ക് ചെയ്യുക", "isCorrect": false },
      { "text": "സ്ലൈഡ് പേനിലെ സ്ലൈഡിൽ റൈറ്റ് ക്ലിക്ക് ചെയ്ത് 'Rename Master' തിരഞ്ഞെടുക്കുക", "isCorrect": true }
    ]
  },
  {
    "question": "നിങ്ങൾക്ക് ആവശ്യമില്ലാത്ത ഒരു മാസ്റ്റർ സ്ലൈഡ് നീക്കം ചെയ്യാൻ ഏത് ഓപ്ഷൻ ആണ് ഉപയോഗിക്കുന്നത്?",
    "options": [
      { "text": "സ്ലൈഡ് തിരഞ്ഞെടുത്ത് 'Delete' അമർത്തുക", "isCorrect": false },
      { "text": "സ്ലൈഡ് പേനിലെ സ്ലൈഡിൽ റൈറ്റ് ക്ലിക്ക് ചെയ്ത് 'Delete Master' തിരഞ്ഞെടുക്കുക", "isCorrect": true },
      { "text": "സ്ലൈഡ് ട്രാഷ് ബിന്നിലേക്ക് വലിച്ചിടുക", "isCorrect": false },
      { "text": "'Edit → Clear' എന്നതിലേക്ക് പോകുക", "isCorrect": false }
    ]
  },
  {
    "question": "നിങ്ങൾ സൃഷ്ടിച്ച ഒരു പ്രത്യേക മാസ്റ്റർ സ്ലൈഡ് പുതുതായി ചേർത്ത സ്ലൈഡിലേക്ക് എങ്ങനെ പ്രയോഗിക്കാം?",
    "options": [
      { "text": "'Slide → Change Slide Master' ക്ലിക്ക് ചെയ്ത് ആവശ്യമുള്ള ഡിസൈൻ തിരഞ്ഞെടുക്കുക", "isCorrect": true },
      { "text": "മാസ്റ്റർ സ്ലൈഡിൽ നിന്ന് ഡിസൈൻ കോപ്പി ചെയ്ത് പേസ്റ്റ് ചെയ്യുക", "isCorrect": false },
      { "text": "എല്ലാ പുതിയ സ്ലൈഡുകളിലും ഇത് സ്വയമേവ പ്രയോഗിക്കപ്പെടുന്നു", "isCorrect": false },
      { "text": "പുതിയ സ്ലൈഡിൽ നിങ്ങൾ ഡിസൈൻ വീണ്ടും സൃഷ്ടിക്കണം", "isCorrect": false }
    ]
  },
  {
    "question": "വായിക്കാൻ കഴിയുന്നതും ആകർഷകവുമായ സ്ലൈഡ് ഡിസൈനുകൾ ഉണ്ടാക്കുന്നതിനുള്ള പ്രധാന ഘടകം എന്താണ്?",
    "options": [
      { "text": "വ്യത്യസ്തവും തിളക്കമുള്ളതുമായ ധാരാളം നിറങ്ങൾ ഉപയോഗിക്കുന്നത്", "isCorrect": false },
      { "text": "പൂരക നിറങ്ങൾ തിരഞ്ഞെടുക്കുകയും വായനാക്ഷമത ഉറപ്പാക്കുകയും ചെയ്യുക", "isCorrect": true },
      { "text": "എല്ലാ ശൂന്യമായ സ്ഥലങ്ങളിലും ഒരു ചിത്രമോ ടെക്സ്റ്റോ നിറയ്ക്കുക", "isCorrect": false },
      { "text": "ഓരോ സ്ലൈഡിനും വ്യത്യസ്ത ഫോണ്ട് ഉപയോഗിക്കുക", "isCorrect": false }
    ]
  },
  {
    "question": "മനോഹരവും ക്രിയാത്മകവുമായ കസ്റ്റം ഡിസൈനുകൾ നിർമ്മിക്കാൻ ഇംപ്രസ്സിലെ ഏത് ടൂളുകൾ ഉപയോഗിക്കാം?",
    "options": [
      { "text": "'ഷേപ്പ്' ടൂളുകൾ", "isCorrect": true },
      { "text": "'സ്പെൽചെക്ക്' ടൂൾ", "isCorrect": false },
      { "text": "'സ്ലൈഡ് നമ്പർ' ഫീൽഡ്", "isCorrect": false },
      { "text": "'ഫൂട്ടർ' ടൂൾ", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു ഷേപ്പ് ചേർത്ത ശേഷം, അതിന്റെ ഫിൽ കളറും ലൈൻ ശൈലിയും എങ്ങനെ മാറ്റാം?",
    "options": [
      { "text": "'ആനിമേഷൻ' സൈഡ്‌ബാറിൽ നിന്ന്", "isCorrect": false },
      { "text": "'പ്രോപ്പർട്ടീസ്' വിൻഡോയിൽ നിന്ന് 'ഏരിയ', 'ലൈൻ' എന്നിവയിൽ ക്ലിക്കുചെയ്യുന്നതിലൂടെ", "isCorrect": true },
      { "text": "'Insert → Color' എന്നതിലേക്ക് പോകുന്നതിലൂടെ", "isCorrect": false },
      { "text": "റൈറ്റ് ക്ലിക്ക് ചെയ്ത് 'Master View' തിരഞ്ഞെടുക്കുന്നതിലൂടെ", "isCorrect": false }
    ]
  },
  {
    "question": "സ്ലൈഡിൽ സ്ഥാപിച്ച ശേഷം ഒരു ഷേപ്പിന്റെ വലുപ്പം എങ്ങനെ മാറ്റാം?",
    "options": [
      { "text": "'Format → Size' എന്നതിലേക്ക് പോകുക", "isCorrect": false },
      { "text": "റൈറ്റ് ക്ലിക്ക് ചെയ്ത് പുതിയ അളവുകൾ നൽകുക", "isCorrect": false },
      { "text": "അത് തിരഞ്ഞെടുത്ത ശേഷം ദൃശ്യമാകുന്ന ചതുര ബോക്സുകളിൽ ക്ലിക്ക് ചെയ്ത് വലിക്കുക", "isCorrect": true },
      { "text": "സ്ഥാപിച്ച ശേഷം വലുപ്പം മാറ്റാൻ കഴിയില്ല", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു സ്ലൈഡിൽ ഓട്ടോമാറ്റിക് സ്ലൈഡ് നമ്പർ ചേർക്കുന്നതിനുള്ള മെനു പാത്ത് എന്താണ്?",
    "options": [
      { "text": "Insert → Field → Slide Number", "isCorrect": true },
      { "text": "Insert → Slide Number", "isCorrect": false },
      { "text": "Format → Page Number", "isCorrect": false },
      { "text": "Slide → Properties → Number", "isCorrect": false }
    ]
  },
  {
    "question": "സ്ലൈഡ് നമ്പറുകൾക്ക് പുറമെ, ഇതേ മെനുവിൽ നിന്ന് മറ്റ് ഏത് 'ഫീൽഡുകൾ' ചേർക്കാൻ കഴിയും?",
    "options": [
      { "text": "തീയതി (സ്ഥിരമായതോ വേരിയബിളോ), സമയം, ഓതർ", "isCorrect": true },
      { "text": "ചിത്രങ്ങൾ, വീഡിയോകൾ, ഓഡിയോ", "isCorrect": false },
      { "text": "ആനിമേഷനുകളും ട്രാൻസിഷനുകളും", "isCorrect": false },
      { "text": "ചാർട്ടുകളും ടേബിളുകളും", "isCorrect": false }
    ]
  },
  {
    "question": "പുതുതായി ചേർത്ത ഒരു ചിത്രം സ്ലൈഡിലെ മറ്റ് ഘടകങ്ങളെ മറയ്ക്കുകയാണെങ്കിൽ, അത് പരിഹരിക്കാൻ നിങ്ങൾ ഏത് ടൂൾ ഉപയോഗിക്കണം?",
    "options": [
      { "text": "'ക്രോപ്പ്' ടൂൾ", "isCorrect": false },
      { "text": "'അറേഞ്ച്' ടൂൾ", "isCorrect": true },
      { "text": "'കംപ്രസ്' ടൂൾ", "isCorrect": false },
      { "text": "'കളർ' ടൂൾ", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു ചിത്രം സ്ലൈഡിലെ മറ്റെല്ലാ ഘടകങ്ങൾക്കും *പിന്നിൽ* സ്ഥാപിക്കാൻ 'അറേഞ്ച്' എന്നതിലെ ഏത് ഓപ്ഷൻ ഉപയോഗിക്കണം?",
    "options": [
      { "text": "Bring to Front", "isCorrect": false },
      { "text": "Bring Forward", "isCorrect": false },
      { "text": "Send to Back", "isCorrect": true },
      { "text": "In Front of Object", "isCorrect": false }
    ]
  },
  {
    "question": "ചിത്രങ്ങൾ, ചാർട്ടുകൾ, കുറഞ്ഞ ടെക്സ്റ്റ് എന്നിവ ഉപയോഗിച്ച് സങ്കീർണ്ണമായ വിവരങ്ങൾ ആകർഷകമായ രീതിയിൽ അവതരിപ്പിക്കുന്നതിനെ എന്തു പറയുന്നു?",
    "options": [
      { "text": "ഒരു മാസ്റ്റർ സ്ലൈഡ്", "isCorrect": false },
      { "text": "ഒരു ഇൻഫോഗ്രാഫിക്", "isCorrect": true },
      { "text": "ഒരു ടെക്സ്റ്റ് ബോക്സ്", "isCorrect": false },
      { "text": "ഒരു ആനിമേഷൻ", "isCorrect": false }
    ]
  },
  {
    "question": "ഇൻഫോഗ്രാഫിക്സ് ഉപയോഗിക്കുന്നതിന്റെ പ്രധാന നേട്ടം എന്താണ്?",
    "options": [
      { "text": "സങ്കീർണ്ണമായ ആശയങ്ങൾ ലളിതമായി അവതരിപ്പിക്കാൻ അവ അനുവദിക്കുന്നു", "isCorrect": true },
      { "text": "അവ സ്വയമേവ സ്ലൈഡിലേക്ക് ഓഡിയോ ചേർക്കുന്നു", "isCorrect": false },
      { "text": "അവ അവതാരകന്റെ ആവശ്യകത ഇല്ലാതാക്കുന്നു", "isCorrect": false },
      { "text": "അവ ആദ്യ സ്ലൈഡിൽ മാത്രമേ ഉപയോഗിക്കാൻ കഴിയൂ", "isCorrect": false }
    ]
  },
  {
    "question": "മുൻകൂട്ടി തയ്യാറാക്കിയ ഇൻഫോഗ്രാഫിക് ടെംപ്ലേറ്റുകൾ കണ്ടെത്താൻ ഇംപ്രസ് സൈഡ്‌ബാറിലെ ഏത് ഫീച്ചർ ഉപയോഗിക്കാം?",
    "options": [
      { "text": "'ഗാലറി'", "isCorrect": true },
      { "text": "'പ്രോപ്പർട്ടീസ്' വിൻഡോ", "isCorrect": false },
      { "text": "'ആനിമേഷൻ' ടാബ്", "isCorrect": false },
      { "text": "'മാസ്റ്റർ സ്ലൈഡ്സ്' പേൻ", "isCorrect": false }
    ]
  },
  {
    "question": "'ഗാലറി'ക്കുള്ളിലെ ഏത് വിഭാഗത്തിലാണ് ഡയഗ്രാമുകൾക്കും ഇൻഫോഗ്രാഫിക്സിനുമുള്ള ടെംപ്ലേറ്റുകൾ അടങ്ങിയിരിക്കുന്നത്?",
    "options": [
      { "text": "Arrows (അമ്പടയാളങ്ങൾ)", "isCorrect": false },
      { "text": "Bullets (ബുള്ളറ്റുകൾ)", "isCorrect": false },
      { "text": "Icons (ഐക്കണുകൾ)", "isCorrect": false },
      { "text": "Diagrams (ഡയഗ്രമുകൾ)", "isCorrect": true }
    ]
  },
  {
    "question": "ഗാലറിയിൽ നിന്ന് ഒരു ഡയഗ്രം നിങ്ങളുടെ സ്ലൈഡിലേക്ക് എങ്ങനെ ചേർക്കാം?",
    "options": [
      { "text": "ഡയഗ്രമിൽ റൈറ്റ് ക്ലിക്ക് ചെയ്ത് 'Add to Slide' തിരഞ്ഞെടുക്കുക", "isCorrect": false },
      { "text": "ഡയഗ്രമിൽ ഡബിൾ ക്ലിക്ക് ചെയ്യുക", "isCorrect": false },
      { "text": "ഗാലറിയിൽ നിന്ന് ഡിസൈൻ ക്ലിക്ക് ചെയ്ത് സ്ലൈഡിലേക്ക് വലിച്ചിടുക", "isCorrect": true },
      { "text": "'File → Import → Gallery Item' എന്നതിലേക്ക് പോകുക", "isCorrect": false }
    ]
  },
  {
    "question": "ഗാലറിയിൽ നിന്നുള്ള ഒരു ഡയഗ്രാമിലെ പ്ലേസ്‌ഹോൾഡർ ടെക്സ്റ്റ് (ഉദാ. 'Text') എങ്ങനെ എഡിറ്റ് ചെയ്യാം?",
    "options": [
      { "text": "നിങ്ങൾ അത് ഡിലീറ്റ് ചെയ്ത് ഒരു പുതിയ ടെക്സ്റ്റ് ബോക്സ് ചേർക്കണം", "isCorrect": false },
      { "text": "റൈറ്റ് ക്ലിക്ക് ചെയ്ത് 'Edit Text' തിരഞ്ഞെടുക്കുക", "isCorrect": false },
      { "text": "ടെക്സ്റ്റ് ബോക്സിൽ ഡബിൾ ക്ലിക്ക് ചെയ്യുക", "isCorrect": true },
      { "text": "ടെക്സ്റ്റ് എഡിറ്റ് ചെയ്യാൻ കഴിയില്ല", "isCorrect": false }
    ]
  },
  {
    "question": "ഒന്നിലധികം ആളുകൾക്ക് ഒരേ സമയം ഒരു പ്രസന്റേഷൻ നിർമ്മിക്കാനും എഡിറ്റ് ചെയ്യാനും അനുവദിക്കുന്ന ഓൺലൈൻ പ്ലാറ്റ്‌ഫോമുകളെ എന്തു വിളിക്കുന്നു?",
    "options": [
      { "text": "കൊളാബറേറ്റീവ് പ്ലാറ്റ്‌ഫോമുകൾ", "isCorrect": true },
      { "text": "ഇൻഫോഗ്രാഫിക് ഗാലറികൾ", "isCorrect": false },
      { "text": "AI ജനറേറ്ററുകൾ", "isCorrect": false },
      { "text": "മാസ്റ്റർ സ്ലൈഡ് വ്യൂവറുകൾ", "isCorrect": false }
    ]
  },
  {
    "question": "ഉള്ളടക്കവും ഡിസൈനും ഉൾപ്പെടെയുള്ള സമ്പൂർണ്ണ പ്രസന്റേഷനുകൾ മിനിറ്റുകൾക്കുള്ളിൽ നിർമ്മിക്കാൻ ഉപയോഗിക്കുന്ന പുതിയ സാങ്കേതികവിദ്യ ഏതാണ്?",
    "options": [
      { "text": "ആർട്ടിഫിഷ്യൽ ഇന്റലിജൻസ് (AI)", "isCorrect": true },
      { "text": "കൊളാബറേറ്റീവ് പ്ലാറ്റ്‌ഫോമുകൾ", "isCorrect": false },
      { "text": "മാസ്റ്റർ സ്ലൈഡുകൾ", "isCorrect": false },
      { "text": "ഇൻഫോഗ്രാഫിക്സ്", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു മാസ്റ്റർ സ്ലൈഡ് ഉപയോഗിച്ച് സാധാരണയായി നിർവചിക്കാൻ *കഴിയാത്ത* സ്ലൈഡ് സ്വഭാവം ഏതാണ്?",
    "options": [
      { "text": "പശ്ചാത്തല നിറം", "isCorrect": false },
      { "text": "ഫോണ്ട് വലുപ്പവും നിറവും", "isCorrect": false },
      { "text": "സ്ലൈഡ് ട്രാൻസിഷനുകൾ", "isCorrect": true },
      { "text": "ഖണ്ഡിക ശൈലി (Paragraph Style)", "isCorrect": false }
    ]
  },
  {
    "question": "'അറേഞ്ച്' ടൂൾ എന്തിനാണ് ഉപയോഗിക്കുന്നത്?",
    "options": [
      { "text": "സ്ലൈഡിലെ ഒബ്ജക്റ്റുകളുടെ അടുക്ക് ക്രമീകരിക്കാൻ (മുന്നോട്ട്/പിന്നോട്ട് കൊണ്ടുവരാൻ)", "isCorrect": true },
      { "text": "അക്ഷരത്തെറ്റുകൾ പരിശോധിക്കാൻ", "isCorrect": false },
      { "text": "സ്ലൈഡുകൾക്ക് ആനിമേഷൻ നൽകാൻ", "isCorrect": false },
      { "text": "മാസ്റ്റർ സ്ലൈഡുകൾ എഡിറ്റ് ചെയ്യാൻ", "isCorrect": false }
    ]
  },
  {
    "question": "ഇംപ്രസ്സിൽ ടെക്സ്റ്റിന്റെ ഫോണ്ട് വലുപ്പവും നിറവും എങ്ങനെ മാറ്റാം?",
    "options": [
      { "text": "ടെക്സ്റ്റ് തിരഞ്ഞെടുത്ത ശേഷം 'പ്രോപ്പർട്ടീസ്' വിൻഡോയിൽ നിന്ന്", "isCorrect": true },
      { "text": "'ആനിമേഷൻ' സൈഡ്‌ബാറിൽ നിന്ന്", "isCorrect": false },
      { "text": "'ഇൻസേർട്ട്' മെനുവിൽ നിന്ന്", "isCorrect": false },
      { "text": "'ഗാലറി'യിൽ നിന്ന്", "isCorrect": false }
    ]
  },
  {
    "question": "ഷേപ്പുകൾ (Shapes) ചേർക്കുന്നതിനുള്ള മെനു പാത്ത് എന്താണ്?",
    "options": [
      { "text": "Insert → Shapes", "isCorrect": true },
      { "text": "Format → Shapes", "isCorrect": false },
      { "text": "View → Shapes", "isCorrect": false },
      { "text": "File → New → Shape", "isCorrect": false }
    ]
  },
  {
    "question": "ഇംപ്രസ്സിലെ 'ഗാലറി'യുടെ ഉദ്ദേശ്യം എന്താണ്?",
    "options": [
      { "text": "മുൻകൂട്ടി തയ്യാറാക്കിയ ഡയഗ്രമുകൾ, ഐക്കണുകൾ, മറ്റ് ഗ്രാഫിക്സ് എന്നിവ നൽകാൻ", "isCorrect": true },
      { "text": "പ്രസന്റേഷൻ സേവ് ചെയ്യാൻ", "isCorrect": false },
      { "text": "സ്പെല്ലിംഗ് പരിശോധിക്കാൻ", "isCorrect": false },
      { "text": "സ്ലൈഡ് ട്രാൻസിഷനുകൾ നിയന്ത്രിക്കാൻ", "isCorrect": false }
    ]
  },
  {
    "question": "'അറേഞ്ച്' മെനുവിലെ ഏത് ഓപ്ഷൻ ആണ് ഒരു ഒബ്ജക്റ്റിനെ മറ്റെല്ലാ ഒബ്ജക്റ്റുകൾക്കും *മുന്നിൽ* കൊണ്ടുവരുന്നത്?",
    "options": [
      { "text": "Bring to Front", "isCorrect": true },
      { "text": "Send Backward", "isCorrect": false },
      { "text": "Send to Back", "isCorrect": false },
      { "text": "Behind Object", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു പ്രസന്റേഷനിലേക്ക് ഒരു പുതിയ സ്ലൈഡ് എങ്ങനെ ചേർക്കാം?",
    "options": [
      { "text": "'Slide → New Slide' ക്ലിക്ക് ചെയ്യുക", "isCorrect": true },
      { "text": "'File → New Slide' ക്ലിക്ക് ചെയ്യുക", "isCorrect": false },
      { "text": "'Edit → New Slide' ക്ലിക്ക് ചെയ്യുക", "isCorrect": false },
      { "text": "'View → New Slide' ക്ലിക്ക് ചെയ്യുക", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു സ്ലൈഡിൽ 'ലേഔട്ട്' ഓപ്ഷൻ എന്തിനാണ് ഉപയോഗിക്കുന്നത്?",
    "options": [
      { "text": "ടെക്സ്റ്റ്, ചിത്രങ്ങൾ തുടങ്ങിയവയ്ക്കായുള്ള പ്ലേസ്‌ഹോൾഡറുകൾ ക്രമീകരിക്കാൻ", "isCorrect": true },
      { "text": "സ്ലൈഡിന്റെ നിറം മാറ്റാൻ", "isCorrect": false },
      { "text": "ആനിമേഷൻ ചേർക്കാൻ", "isCorrect": false },
      { "text": "ഫയൽ സേവ് ചെയ്യാൻ", "isCorrect": false }
    ]
  },
  {
    "question": "AI ടൂളുകൾ ലഭ്യമായിട്ടും ഇംപ്രസ് പോലുള്ള സോഫ്റ്റ്‌വെയറുകൾ പഠിക്കേണ്ടത് പ്രധാനമായിരിക്കുന്നത് എന്തുകൊണ്ട്?",
    "options": [
      { "text": "AI നിർമ്മിച്ച സ്ലൈഡുകളിൽ തിരുത്തലുകൾ വരുത്താൻ പ്രസന്റേഷൻ സോഫ്റ്റ്‌വെയറിനെക്കുറിച്ച് അറിവുള്ളവർക്ക് മാത്രമേ കഴിയൂ", "isCorrect": true },
      { "text": "AI ടൂളുകൾ ഓൺലൈനിൽ ലഭ്യമല്ല", "isCorrect": false },
      { "text": "AI-ക്ക് സ്ലൈഡ് ഡിസൈനുകളോ ആനിമേഷനുകളോ സൃഷ്ടിക്കാൻ കഴിയില്ല", "isCorrect": false },
      { "text": "സ്കൂളുകളിൽ ഇംപ്രസ് മാത്രമാണ് ഉപയോഗിക്കുന്നത്", "isCorrect": false }
    ]
  },
  {
    "question": "'ഇൻഫോഗ്രാഫിക്സ്' (Infographics) എന്ന വാക്കിന്റെ പൂർണ്ണരൂപം എന്താണ്?",
    "options": [
      { "text": "ഇൻഫോർമേഷൻ ഗ്രാഫിക്സ് (Information Graphics)", "isCorrect": true },
      { "text": "ഇൻഫർമേഷൻ ഗ്രാമർ (Information Grammar)", "isCorrect": false },
      { "text": "ഇൻഫോ ഗ്രാഫ് (Info Graph)", "isCorrect": false },
      { "text": "ഇന്ററാക്ടീവ് ഗ്രാഫിക്സ് (Interactive Graphics)", "isCorrect": false }
    ]
  },
  {
    "question": "മാസ്റ്റർ സ്ലൈഡിലെ ഒരു ഒബ്ജക്റ്റ് തിരഞ്ഞെടുത്തുകൊണ്ട് 'Close Master View' ക്ലിക്ക് ചെയ്താൽ എന്ത് സംഭവിക്കും?",
    "options": [
      { "text": "'Close Master View' ബട്ടൺ ദൃശ്യമാകില്ല", "isCorrect": true },
      { "text": "മാസ്റ്റർ വ്യൂ ക്ലോസ് ആകും", "isCorrect": false },
      { "text": "ഒബ്ജക്റ്റ് ഡിലീറ്റ് ആകും", "isCorrect": false },
      { "text": "പ്രസന്റേഷൻ സേവ് ആകും", "isCorrect": false }
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
