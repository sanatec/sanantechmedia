document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "ജിയോജിബ്രയിലെ 'മൂവ്' ടൂളിന്റെ ഉപയോഗം എന്താണ്?",
    "options": [
      { "text": "ഒരു ചരിഞ്ഞ വരയുടെയോ ത്രികോണത്തിന്റെ ശീർഷത്തിന്റെയോ സ്ഥാനം മാറ്റാൻ", "isCorrect": true },
      { "text": "ഒരു ഒബ്ജക്റ്റ് ഡിലീറ്റ് ചെയ്യാൻ", "isCorrect": false },
      { "text": "പോയിന്റുകൾ തമ്മിലുള്ള ദൂരം അളക്കാൻ", "isCorrect": false },
      { "text": "ഒരു പുതിയ ലൈൻ വരയ്ക്കാൻ", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു പോയിന്റും ലൈനും ആ പോയിന്റിലൂടെ ലംബമായ മറ്റൊരു ലൈനും കാണിക്കുന്ന ഐക്കണുള്ള ജിയോജിബ്ര ടൂളിന്റെ ഉപയോഗം എന്താണ്?",
    "options": [
      { "text": "സമാന്തര രേഖ വരയ്ക്കാൻ", "isCorrect": false },
      { "text": "ലംബ രേഖ വരയ്ക്കാൻ", "isCorrect": true },
      { "text": "ഒരു ദീർഘചതുരം വരയ്ക്കാൻ", "isCorrect": false },
      { "text": "ഒരു വൃത്തം വരയ്ക്കാൻ", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു കോൺ കാണിക്കുന്ന ഐക്കണുള്ള ജിയോജിബ്ര ടൂളിന്റെ ഉപയോഗം എന്താണ്?",
    "options": [
      { "text": "ഒരു ബഹുഭുജം വരയ്ക്കാൻ", "isCorrect": false },
      { "text": "ഒരു ലംബ രേഖ വരയ്ക്കാൻ", "isCorrect": false },
      { "text": "ഒരു വൃത്തം വരയ്ക്കാൻ", "isCorrect": false },
      { "text": "ഒരു കോൺ വരയ്ക്കാൻ", "isCorrect": true }
    ]
  },
  {
    "question": "കാൽസ്യം സോഫ്റ്റ്‌വെയറിൽ ഒരു പ്രത്യേക മൂലകത്തിന്റെ ആറ്റോമിക സംഖ്യ, മാസ് എന്നിവ പോലുള്ള വിവരങ്ങൾ എങ്ങനെ കണ്ടെത്തും?",
    "options": [
      { "text": "മൂലകത്തിൽ റൈറ്റ് ക്ലിക്ക് ചെയ്ത് 'പ്രോപ്പർട്ടീസ്' തിരഞ്ഞെടുക്കുക", "isCorrect": false },
      { "text": "ആവർത്തനപ്പട്ടികയിലെ മൂലകത്തിൽ ക്ലിക്ക് ചെയ്യുക", "isCorrect": true },
      { "text": "'വ്യൂ' -> 'എലമെന്റ് ഡാറ്റ' എന്നതിലേക്ക് പോകുക", "isCorrect": false },
      { "text": "'സെറ്റിംഗ്സ്' മെനുവിൽ മൂലകത്തിന്റെ പേര് ടൈപ്പ് ചെയ്യുക", "isCorrect": false }
    ]
  },
  {
    "question": "കാൽസ്യം സോഫ്റ്റ്‌വെയറിലെ 'ആറ്റം മോഡൽ' വ്യൂവിൽ മഞ്ഞ ഡോട്ടുകൾ എന്തിനെയാണ് പ്രതിനിധീകരിക്കുന്നത്?",
    "options": [
      { "text": "പ്രോട്ടോണുകൾ", "isCorrect": false },
      { "text": "ന്യൂട്രോണുകൾ", "isCorrect": false },
      { "text": "ഇലക്ട്രോണുകൾ", "isCorrect": true },
      { "text": "ഷെല്ലുകൾ", "isCorrect": false }
    ]
  },
  {
    "question": "കാൽസ്യം സോഫ്റ്റ്‌വെയറിൽ മൂലകങ്ങളെ അവയുടെ ഗ്രൂപ്പ് അനുസരിച്ച് നിറം നൽകി പ്രദർശിപ്പിക്കുന്നത് എങ്ങനെ?",
    "options": [
      { "text": "സെറ്റിംഗ്സ് -> കോൺഫിഗർ കാൽസ്യം -> ഗ്രേഡിയന്റ്സ് ക്ലിക്ക് ചെയ്യുക", "isCorrect": false },
      { "text": "സ്കീം -> ഐക്കണിക് ക്ലിക്ക് ചെയ്യുക", "isCorrect": false },
      { "text": "സ്കീം -> ഗ്രൂപ്പ്സ് ക്ലിക്ക് ചെയ്യുക", "isCorrect": true },
      { "text": "വ്യൂ -> ആറ്റം മോഡൽ ക്ലിക്ക് ചെയ്യുക", "isCorrect": false }
    ]
  },
  {
    "question": "കാൽസ്യം സോഫ്റ്റ്‌വെയറിൽ, പദാർത്ഥത്തിന്റെ അവസ്ഥ (ഖരം, വാതകം മുതലായവ) അനുസരിച്ച് മൂലകങ്ങളെ തരംതിരിക്കുന്നത് കാണാനുള്ള മെനു പാത്ത് ഏതാണ്?",
    "options": [
      { "text": "സ്കീം -> ഫാമിലി", "isCorrect": false },
      { "text": "ഗ്രേഡിയന്റ്സ് -> സ്റ്റേറ്റ് ഓഫ് മാറ്റർ", "isCorrect": true },
      { "text": "സ്കീം -> ബ്ലോക്ക്സ്", "isCorrect": false },
      { "text": "ഗ്രേഡിയന്റ്സ് -> ഇയർ", "isCorrect": false }
    ]
  },
  {
    "question": "കാൽസ്യം സോഫ്റ്റ്‌വെയറിലെ 'ഐക്കണിക്' വ്യൂ (സ്കീം -> ഐക്കണിക്) എന്താണ് കാണിക്കുന്നത്?",
    "options": [
      { "text": "ഓരോ മൂലകത്തിന്റെയും ആറ്റം മോഡൽ", "isCorrect": false },
      { "text": "ഓരോ മൂലകത്തിന്റെയും പ്രധാന ഉപയോഗങ്ങളെ സൂചിപ്പിക്കുന്ന ചിഹ്നങ്ങൾ", "isCorrect": true },
      { "text": "മൂലകങ്ങളെ അവയുടെ ഗ്രൂപ്പ് അനുസരിച്ച് നിറം നൽകി കാണിക്കുന്നു", "isCorrect": false },
      { "text": "ലളിതമായ, ഒറ്റനിറത്തിലുള്ള ആവർത്തനപ്പട്ടിക", "isCorrect": false }
    ]
  },
  {
    "question": "കാൽസ്യം സോഫ്റ്റ്‌വെയറിൽ 'പൊട്ടാസ്യം' പോലുള്ള ഒരു മൂലകം കണ്ടെത്തുന്നതിന് സെർച്ച് ഫംഗ്ഷൻ എങ്ങനെ ഉപയോഗിക്കാം?",
    "options": [
      { "text": "സെർച്ച് ബാറിൽ 'K' എന്ന് ടൈപ്പ് ചെയ്യുക", "isCorrect": false },
      { "text": "സെർച്ച് ബാറിൽ ആറ്റോമിക നമ്പർ '19' എന്ന് ടൈപ്പ് ചെയ്യുക", "isCorrect": false },
      { "text": "സെർച്ച് ബാറിൽ 'Potassium' എന്ന് ടൈപ്പ് ചെയ്ത് എന്റർ അമർത്തുക", "isCorrect": true },
      { "text": "സെറ്റിംഗ്സ് -> ഫൈൻഡ് എലമെന്റ് എന്നതിലേക്ക് പോകുക", "isCorrect": false }
    ]
  },
  {
    "question": "ഫെറ്റ് 'ബെൻഡിംഗ് ലൈറ്റ്' സിമുലേഷനിൽ പ്രകാശ സ്രോതസ്സ് എങ്ങനെയാണ് നീക്കുന്നത്?",
    "options": [
      { "text": "കീബോർഡ് ആരോകൾ ഉപയോഗിച്ച്", "isCorrect": false },
      { "text": "മൗസ് ഉപയോഗിച്ച് ഡ്രാഗ് ചെയ്ത്", "isCorrect": true },
      { "text": "കോർഡിനേറ്റുകൾ ടൈപ്പ് ചെയ്തുകൊണ്ട്", "isCorrect": false },
      { "text": "അത് നീക്കാൻ കഴിയില്ല", "isCorrect": false }
    ]
  },
  {
    "question": "'ബെൻഡിംഗ് ലൈറ്റ്' സിമുലേഷന്റെ ഏത് ഭാഗമാണ് പ്രിസങ്ങളിലൂടെയുള്ള പ്രകാശത്തെ നിരീക്ഷിക്കാൻ ഉപയോഗിക്കുന്നത്?",
    "options": [
      { "text": "ഇൻട്രോ സെഷൻ", "isCorrect": false },
      { "text": "പ്രിസംസ് വിൻഡോ", "isCorrect": true },
      { "text": "വേവ് ഫോം വിൻഡോ", "isCorrect": false },
      { "text": "ടൂൾസ് മെനു", "isCorrect": false }
    ]
  },
  {
    "question": "'ബെൻഡിംഗ് ലൈറ്റ്' സിമുലേഷനിൽ പതനകോണും (angle of incidence) അപവർത്തനകോണും (angle of refraction) കണ്ടെത്താൻ ഏത് ടൂൾ ഉപയോഗിക്കാം?",
    "options": [
      { "text": "സ്ലൈഡർ", "isCorrect": false },
      { "text": "പ്രകാശ സ്രോതസ്സ്", "isCorrect": false },
      { "text": "പ്രൊട്രാക്ടർ ടൂൾ", "isCorrect": true },
      { "text": "'നോർമൽ' ബട്ടൺ", "isCorrect": false }
    ]
  },
  {
    "question": "ജിയോജിബ്ര ഉപയോഗിച്ച് 19 യൂണിറ്റ് നീളമുള്ള ഒരു വരയെ 3 തുല്യ ഭാഗങ്ങളായി വിഭജിക്കുന്ന രീതി വിവരിക്കുമ്പോൾ, പ്രാരംഭ വരയും ചരിഞ്ഞ വരയും വരച്ചതിന് ശേഷമുള്ള പ്രധാന ഘട്ടം എന്താണ്?",
    "options": [
      { "text": "ചരിഞ്ഞ വരയിൽ നിന്ന് ലംബ രേഖകൾ വരയ്ക്കുന്നു", "isCorrect": false },
      { "text": "19 യൂണിറ്റ് ലൈനിൽ 'ഡിവൈഡ്' ടൂൾ ഉപയോഗിക്കുന്നു", "isCorrect": false },
      { "text": "ചരിഞ്ഞ വരയിലെ അടയാളങ്ങളിൽ നിന്ന് 19 യൂണിറ്റ് വരയിലേക്ക് സമാന്തര രേഖകൾ വരയ്ക്കുന്നു", "isCorrect": true },
      { "text": "'ഡിസ്റ്റൻസ്' ടൂൾ ഉപയോഗിച്ച് വര അളക്കുന്നു", "isCorrect": false }
    ]
  },
  {
    "question": "ജിയോജിബ്രയിലെ 'സെഗ്മെന്റ് വിത്ത് ഗിവൺ ലെങ്ത്' ടൂളിന്റെ പ്രവർത്തനം എന്താണ്?",
    "options": [
      { "text": "നിലവിലുള്ള ഒരു സെഗ്‌മെന്റിന്റെ നീളം അളക്കാൻ", "isCorrect": false },
      { "text": "നിർദ്ദിഷ്ട, മുൻകൂട്ടി നിശ്ചയിച്ച നീളത്തിൽ ഒരു രേഖാഖണ്ഡം വരയ്ക്കാൻ", "isCorrect": true },
      { "text": "ഒരു സെഗ്‌മെന്റിനെ തുല്യ ഭാഗങ്ങളായി വിഭജിക്കാൻ", "isCorrect": false },
      { "text": "ഒരു സെഗ്‌മെന്റിന്റെ നീളം മാറ്റാൻ", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു രേഖ സമാന്തര രേഖകളെ മുറിക്കുമ്പോൾ ഉണ്ടാകുന്ന പോയിന്റുകൾ തമ്മിലുള്ള ദൂരം കണ്ടെത്താൻ ജിയോജിബ്രയിൽ ഏത് ടൂൾ ആണ് ഉപയോഗിക്കുന്നത്?",
    "options": [
      { "text": "'മൂവ്' ടൂൾ", "isCorrect": false },
      { "text": "'ഇന്റർസെക്റ്റ്' ടൂൾ", "isCorrect": false },
      { "text": "'ഡിസ്റ്റൻസ് ഓർ ലെങ്ത്' ടൂൾ", "isCorrect": true },
      { "text": "'സെഗ്മെന്റ്' ടൂൾ", "isCorrect": false }
    ]
  },
  {
    "question": "`triangle.ggb` ആപ്ലെറ്റിൽ, 'മൂവ്' ടൂൾ ഉപയോഗിച്ച് ത്രികോണത്തിന്റെ ഒരു ശീർഷം (vertex) വലിക്കുമ്പോൾ അനുപാതങ്ങൾക്ക് (ഉദാഹരണത്തിന്, EC/EA) എന്ത് സംഭവിക്കുന്നു?",
    "options": [
      { "text": "അനുപാതങ്ങൾ ക്രമരഹിതമായ സംഖ്യകളായി മാറുന്നു", "isCorrect": false },
      { "text": "അനുപാതങ്ങൾ ഒരേപോലെ നിലനിൽക്കുന്നു", "isCorrect": true },
      { "text": "അനുപാതങ്ങൾ പൂജ്യമായി മാറുന്നു", "isCorrect": false },
      { "text": "അനുപാതങ്ങൾ വിപരീതമാകുന്നു", "isCorrect": false }
    ]
  },
  {
    "question": "ജിയോജിബ്രയിൽ ഒരു ലംബ രേഖ (Perpendicular line) വരയ്ക്കാൻ, പെർപെൻഡിക്കുലർ ടൂൾ തിരഞ്ഞെടുത്ത ശേഷം നിങ്ങൾ എന്താണ് തിരഞ്ഞെടുക്കേണ്ടത്?",
    "options": [
      { "text": "രേഖ കടന്നുപോകേണ്ട പോയിന്റ് മാത്രം", "isCorrect": false },
      { "text": "ലംബമാകേണ്ട രേഖ, തുടർന്ന് അത് കടന്നുപോകേണ്ട പോയിന്റ്", "isCorrect": true },
      { "text": "പുതിയ രേഖ നിർവചിക്കാൻ രണ്ട് പോയിന്റുകൾ", "isCorrect": false },
      { "text": "ലംബമാകേണ്ട രേഖ മാത്രം", "isCorrect": false }
    ]
  },
  {
    "question": "ജിയോജിബ്രയിൽ ഒരു സമാന്തര രേഖ (Parallel line) വരയ്ക്കാൻ, പാരലൽ ടൂൾ തിരഞ്ഞെടുത്ത ശേഷം നിങ്ങൾ എന്തിലാണ് ക്ലിക്ക് ചെയ്യേണ്ടത്?",
    "options": [
      { "text": "പുതിയ രേഖ നിർവചിക്കാൻ രണ്ട് പോയിന്റുകൾ", "isCorrect": false },
      { "text": "നിലവിലുള്ള രേഖ, തുടർന്ന് പുതിയ രേഖ കടന്നുപോകേണ്ട പോയിന്റ്", "isCorrect": true },
      { "text": "രേഖ കടന്നുപോകേണ്ട പോയിന്റ് മാത്രം", "isCorrect": false },
      { "text": "രേഖയുടെ സ്ഥാനം ശരിയാക്കാൻ 'മൂവ്' ടൂൾ", "isCorrect": false }
    ]
  },
  {
    "question": "പ്രാരംഭ രേഖ വരച്ചതിന് ശേഷം ഒരു രേഖയെ 3 തുല്യ ഭാഗങ്ങളായി വിഭജിക്കുന്നതിനുള്ള വിവരിച്ച രീതിയിലെ ആദ്യപടി എന്താണ്?",
    "options": [
      { "text": "ഒരു അറ്റത്ത് നിന്ന് മറ്റൊരു ചരിഞ്ഞ രേഖ വരയ്ക്കുക", "isCorrect": true },
      { "text": "രണ്ട് സമാന്തര രേഖകൾ വരയ്ക്കുക", "isCorrect": false },
      { "text": "'മിഡ്‌പോയിന്റ്' ടൂൾ ഉപയോഗിക്കുക", "isCorrect": false },
      { "text": "ഒരു വൃത്തം വരയ്ക്കുക", "isCorrect": false }
    ]
  },
  {
    "question": "സൂചിപ്പിച്ച ടൂളുകൾ ഉപയോഗിച്ച് ജിയോജിബ്രയിൽ ഒരു ദീർഘചതുരം (rectangle) എങ്ങനെ നിർമ്മിക്കാം?",
    "options": [
      { "text": "'പോളിഗൺ' ടൂൾ മാത്രം ഉപയോഗിച്ച്", "isCorrect": false },
      { "text": "'പാരലൽ ലൈൻ' ടൂൾ മാത്രം ഉപയോഗിച്ച്", "isCorrect": false },
      { "text": "'പാരലൽ ലൈൻ', 'പെർപെൻഡിക്കുലർ ലൈൻ' ടൂളുകൾ ഉപയോഗിച്ച്", "isCorrect": true },
      { "text": "'സർക്കിൾ' ടൂൾ മാത്രം ഉപയോഗിച്ച്", "isCorrect": false }
    ]
  },
  {
    "question": "കാൽസ്യം സോഫ്റ്റ്‌വെയറിൽ ഗ്രൂപ്പുകളുടെ നിറങ്ങൾ മാറ്റുന്നതിനുള്ള കോൺഫിഗറേഷൻ വിൻഡോ എങ്ങനെ തുറക്കാം?",
    "options": [
      { "text": "സെറ്റിംഗ്സ് -> കോൺഫിഗർ കാൽസ്യം", "isCorrect": true },
      { "text": "വ്യൂ -> ചെയ്ഞ്ച് കളേഴ്സ്", "isCorrect": false },
      { "text": "ടൂൾസ് -> ഗ്രേഡിയന്റ്സ്", "isCorrect": false },
      { "text": "ഫയൽ -> കോൺഫിഗർ", "isCorrect": false }
    ]
  },
  {
    "question": "കാൽസ്യം സോഫ്റ്റ്‌വെയറിലെ മൂലക ഡാറ്റാ വിൻഡോയിൽ (സോഡിയം പോലുള്ളവ), ആവർത്തനപ്പട്ടികയിലെ *അടുത്ത* മൂലകത്തിന്റെ പ്രോപ്പർട്ടികൾ എങ്ങനെ കാണാം?",
    "options": [
      { "text": "'ക്ലോസ്' ബട്ടൺ ക്ലിക്ക് ചെയ്യുക", "isCorrect": false },
      { "text": "'നെക്സ്റ്റ്' ബട്ടൺ ക്ലിക്ക് ചെയ്യുക", "isCorrect": true },
      { "text": "വലത് ആരോ കീ അമർത്തുക", "isCorrect": false },
      { "text": "'ഹെൽപ്പ്' ബട്ടൺ ക്ലിക്ക് ചെയ്യുക", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു മൂലകത്തിന്റെ ഇലക്ട്രോൺ ഷെൽ ക്രമീകരണം കാണാൻ കാൽസ്യം സോഫ്റ്റ്‌വെയറിൽ ഏത് മെനു ഓപ്ഷനിലാണ് ക്ലിക്ക് ചെയ്യേണ്ടത്?",
    "options": [
      { "text": "ഡാറ്റ ഓവർവ്യൂ", "isCorrect": false },
      { "text": "ഐസോടോപ്സ്", "isCorrect": false },
      { "text": "ആറ്റം മോഡൽ", "isCorrect": true },
      { "text": "സ്പെക്ട്രം", "isCorrect": false }
    ]
  },
  {
    "question": "കാൽസ്യം സോഫ്റ്റ്‌വെയർ ഉപയോഗിച്ച് ഒരു മൂലകം കണ്ടെത്തിയ വർഷം എങ്ങനെ കണ്ടെത്താം?",
    "options": [
      { "text": "അത് 'ഡാറ്റ ഓവർവ്യൂ' ടാബിൽ ഉണ്ട്", "isCorrect": false },
      { "text": "അത് 'സ്കീം' ടാബിന് അടുത്തുള്ള 'ഗ്രേഡിയന്റ്സ്' ടാബിൽ ഉണ്ട്", "isCorrect": true },
      { "text": "അത് 'ആറ്റം മോഡൽ' ടാബിൽ ഉണ്ട്", "isCorrect": false },
      { "text": "അത് 'ഐസോടോപ്പ് ടേബിളിൽ' ഉണ്ട്", "isCorrect": false }
    ]
  },
  {
    "question": "'സ്കീം' ടാബിൽ 'ഫാമിലി' കാണുമ്പോൾ, 'ലെജൻഡ്' ടാബിലെ ഒരു മൂലകത്തിൽ ക്ലിക്കുചെയ്യുമ്പോൾ കാൽസ്യം സോഫ്റ്റ്‌വെയറിൽ എന്ത് സംഭവിക്കുന്നു?",
    "options": [
      { "text": "മൂലകത്തിന്റെ ഡാറ്റ വിൻഡോ തുറക്കുന്നു", "isCorrect": false },
      { "text": "അനുബന്ധ മൂലക കുടുംബം പ്രത്യേക നിറങ്ങളിൽ ദൃശ്യമാകുന്നു", "isCorrect": true },
      { "text": "സോഫ്റ്റ്‌വെയർ ക്ലോസ് ആകുന്നു", "isCorrect": false },
      { "text": "അത് 'ഐക്കണിക്' വ്യൂവിലേക്ക് മാറുന്നു", "isCorrect": false }
    ]
  },
  {
    "question": "കാൽസ്യം സോഫ്റ്റ്‌വെയറിൽ 'ഗ്രൂപ്പ് 1' മൂലകങ്ങൾക്ക് നൽകിയിട്ടുള്ള നിറം എങ്ങനെ മാറ്റാം?",
    "options": [
      { "text": "സ്കീം -> ഗ്രൂപ്പ്സ് എന്നതിൽ പോയി നിറത്തിൽ ക്ലിക്ക് ചെയ്യുക", "isCorrect": false },
      { "text": "സെറ്റിംഗ്സ് -> കോൺഫിഗർ കാൽസ്യം -> ഗ്രേഡിയന്റ്സ് എന്നതിൽ പോയി നിറം മാറ്റുക", "isCorrect": true },
      { "text": "ഒരു ഗ്രൂപ്പ് 1 മൂലകത്തിൽ റൈറ്റ് ക്ലിക്ക് ചെയ്ത് 'ചേഞ്ച് കളർ' തിരഞ്ഞെടുക്കുക", "isCorrect": false },
      { "text": "വ്യൂ -> കളേഴ്സ് -> ഗ്രൂപ്പ് 1 എന്നതിലേക്ക് പോകുക", "isCorrect": false }
    ]
  },
  {
    "question": "കാൽസ്യം സോഫ്റ്റ്‌വെയറിൽ 'മെയിൻ ഗ്രൂപ്പ് മൂലകങ്ങൾ' കണ്ടെത്തുന്നതിന്, 'സ്കീം' ടാബിന്റെ ഡ്രോപ്പ്-ഡൗൺ മെനുവിൽ നിന്ന് നിങ്ങൾ എന്താണ് തിരഞ്ഞെടുക്കേണ്ടത്?",
    "options": [
      { "text": "ഫാമിലി", "isCorrect": false },
      { "text": "ബ്ലോക്ക്സ്", "isCorrect": false },
      { "text": "ഐക്കണിക്", "isCorrect": false },
      { "text": "ഗ്രൂപ്പ്സ്", "isCorrect": true }
    ]
  },
  {
    "question": "കാൽസ്യം സോഫ്റ്റ്‌വെയറിൽ ഒരു മൂലകത്തിന്റെ 'ഡാറ്റ ഓവർവ്യൂ'വിൽ എന്ത് വിവരങ്ങളാണ് ലഭ്യമായിട്ടുള്ളത്?",
    "options": [
      { "text": "ആറ്റം മോഡലും ഐസോടോപ്പുകളും മാത്രം", "isCorrect": false },
      { "text": "ദ്രവണാങ്കം, തിളനില, ഇലക്ട്രോണിക് കോൺഫിഗറേഷൻ", "isCorrect": true },
      { "text": "മൂലകത്തിന്റെ ഉപയോഗങ്ങൾ മാത്രം", "isCorrect": false },
      { "text": "കളർ-കോഡിംഗ് സ്കീം മാത്രം", "isCorrect": false }
    ]
  },
  {
    "question": "കാൽസ്യം സോഫ്റ്റ്‌വെയറിൽ സോഡിയം പോലുള്ള ഒരു മൂലകത്തിന്റെ ഡാറ്റാ വിൻഡോ തുറന്ന ശേഷം, അതിന്റെ 'ആറ്റം മോഡൽ' എങ്ങനെ ആക്സസ് ചെയ്യാം?",
    "options": [
      { "text": "ഇടതുവശത്തുള്ള 'ആറ്റം മോഡൽ' മെനു ഇനത്തിൽ ക്ലിക്ക് ചെയ്യുക", "isCorrect": true },
      { "text": "'നെക്സ്റ്റ്' ബട്ടൺ ക്ലിക്ക് ചെയ്യുക", "isCorrect": false },
      { "text": "'സ്പെക്ട്രം' എന്നതിൽ ക്ലിക്ക് ചെയ്യുക", "isCorrect": false },
      { "text": "'സെറ്റിംഗ്സ്' -> 'വ്യൂ ആറ്റം മോഡൽ' എന്നതിലേക്ക് പോകുക", "isCorrect": false }
    ]
  },
  {
    "question": "കാൽസ്യം സോഫ്റ്റ്‌വെയറിൽ 'ഐക്കണിക്' വ്യൂ ആക്സസ് ചെയ്യാനുള്ള മെനു പാത്ത് ഏതാണ്?",
    "options": [
      { "text": "വ്യൂ -> ഐക്കണിക്", "isCorrect": false },
      { "text": "സ്കീം -> ഐക്കണിക്", "isCorrect": true },
      { "text": "സെറ്റിംഗ്സ് -> ഐക്കണിക് വ്യൂ", "isCorrect": false },
      { "text": "ടൂൾസ് -> സ്കീം -> ഐക്കണിക്", "isCorrect": false }
    ]
  },
  {
    "question": "കാൽസ്യം തുറന്ന ശേഷം, മൂലകങ്ങളെ അവയുടെ 'ബ്ലോക്കുകൾ' (s, p, d, f) അനുസരിച്ച് നിറം നൽകി കാണുന്നതിന് നിങ്ങൾ എവിടെയാണ് ക്ലിക്ക് ചെയ്യേണ്ടത്?",
    "options": [
      { "text": "സ്കീം -> ഗ്രൂപ്പ്സ്", "isCorrect": false },
      { "text": "സ്കീം -> ഫാമിലി", "isCorrect": false },
      { "text": "സ്കീം -> ബ്ലോക്ക്സ്", "isCorrect": true },
      { "text": "ഗ്രേഡിയന്റ്സ് -> ബ്ലോക്ക്സ്", "isCorrect": false }
    ]
  },
  {
    "question": "കാൽസ്യം സോഫ്റ്റ്‌വെയറിൽ ഒരു മൂലകത്തിന്റെ 'ഇലക്ട്രോൺ അഫിനിറ്റി' അല്ലെങ്കിൽ 'ഫസ്റ്റ് അയണൈസേഷൻ എനർജി' എങ്ങനെ കണ്ടെത്താം?",
    "options": [
      { "text": "'ആറ്റം മോഡൽ' വ്യൂവിൽ", "isCorrect": false },
      { "text": "മൂലകത്തിൽ ക്ലിക്കുചെയ്ത ശേഷം 'ഡാറ്റ ഓവർവ്യൂ' വിൻഡോയിൽ", "isCorrect": true },
      { "text": "'ഐസോടോപ്പ് ടേബിളിൽ'", "isCorrect": false },
      { "text": "'സ്പെക്ട്രം' വ്യൂവിൽ", "isCorrect": false }
    ]
  },
  {
    "question": "കാൽസ്യം സോഫ്റ്റ്‌വെയറിൽ ഒരു മൂലകത്തിന്റെ ഐസോടോപ്പുകളുടെ ലിസ്റ്റ് എങ്ങനെ കാണാം?",
    "options": [
      { "text": "മൂലകത്തിന്റെ ഡാറ്റാ വിൻഡോയിലെ 'ഐസോടോപ്സ്' മെനു ഇനത്തിൽ ക്ലിക്ക് ചെയ്യുക", "isCorrect": true },
      { "text": "'ടൂൾസ്' -> 'ഐസോടോപ്പ് ടേബിൾ' എന്നതിലേക്ക് പോകുക", "isCorrect": false },
      { "text": "'സ്കീം' -> 'ഐസോടോപ്സ്' എന്നതിൽ ക്ലിക്ക് ചെയ്യുക", "isCorrect": false },
      { "text": "ഈ ഫീച്ചർ ലഭ്യമല്ല", "isCorrect": false }
    ]
  },
  {
    "question": "പ്രധാന ഫെറ്റ് (PhET) സോഫ്റ്റ്‌വെയർ മെനുവിൽ നിന്ന് 'ബെൻഡിംഗ് ലൈറ്റ്' സിമുലേഷൻ എങ്ങനെ തുറക്കാം?",
    "options": [
      { "text": "കെമിസ്ട്രി -> ബെൻഡിംഗ് ഓഫ് ലൈറ്റ് തിരഞ്ഞെടുക്കുക", "isCorrect": false },
      { "text": "ഫിസിക്സ് -> ബെൻഡിംഗ് ഓഫ് ലൈറ്റ് തിരഞ്ഞെടുക്കുക", "isCorrect": true },
      { "text": "മാത് -> ലൈറ്റ് സിമുലേഷൻ തിരഞ്ഞെടുക്കുക", "isCorrect": false },
      { "text": "ഫയൽ -> ഓപ്പൺ -> ബെൻഡിംഗ് ലൈറ്റ് തിരഞ്ഞെടുക്കുക", "isCorrect": false }
    ]
  },
  {
    "question": "'ബെൻഡിംഗ് ലൈറ്റ്' സിമുലേഷനിൽ, മുകളിലെ മാധ്യമത്തിനുള്ള മെറ്റീരിയൽ എങ്ങനെ മാറ്റാം?",
    "options": [
      { "text": "മുകളിലെ സ്ലൈഡർ ബോക്സിലെ 'മെറ്റീരിയൽ' ഡ്രോപ്പ്-ഡൗൺ ഉപയോഗിച്ച്", "isCorrect": true },
      { "text": "പ്രൊട്രാക്ടർ ഉപയോഗിച്ച്", "isCorrect": false },
      { "text": "പ്രകാശ സ്രോതസ്സ് വലിക്കുന്നതിലൂടെ", "isCorrect": false },
      { "text": "'പ്രിസംസ്' വിൻഡോയിൽ", "isCorrect": false }
    ]
  },
  {
    "question": "'ബെൻഡിംഗ് ലൈറ്റ്' സിമുലേഷനിൽ താഴത്തെ മാധ്യമത്തിനുള്ള മെറ്റീരിയൽ എങ്ങനെ മാറ്റാം?",
    "options": [
      { "text": "മുകളിലെ സ്ലൈഡർ ബോക്സിലെ 'മെറ്റീരിയൽ' ഡ്രോപ്പ്-ഡൗൺ ഉപയോഗിച്ച്", "isCorrect": false },
      { "text": "താഴത്തെ സ്ലൈഡർ ബോക്സിലെ 'മെറ്റീരിയൽ' ഡ്രോപ്പ്-ഡൗൺ ഉപയോഗിച്ച്", "isCorrect": true },
      { "text": "ഈ മാധ്യമം മാറ്റാൻ കഴിയില്ല", "isCorrect": false },
      { "text": "'നോർമൽ' ബോക്സ് ചെക്ക് ചെയ്യുന്നതിലൂടെ", "isCorrect": false }
    ]
  },
  {
    "question": "'ബെൻഡിംഗ് ലൈറ്റ്' സിമുലേഷനിൽ മുകളിലും താഴെയുമുള്ള മാധ്യമം 'എയർ' (Air) ആയി സജ്ജീകരിക്കുമ്പോൾ പ്രകാശകിരണത്തിന് എന്ത് സംഭവിക്കുന്നു?",
    "options": [
      { "text": "അത് നോർമലിലേക്ക് വളയുന്നു", "isCorrect": false },
      { "text": "അത് നോർമലിൽ നിന്ന് അകന്നുപോകുന്നു", "isCorrect": false },
      { "text": "അത് പാതയിൽ മാറ്റമില്ലാതെ നേർരേഖയിൽ സഞ്ചരിക്കുന്നു", "isCorrect": true },
      { "text": "അത് പൂർണ്ണമായും പ്രതിഫലിക്കുന്നു", "isCorrect": false }
    ]
  },
  {
    "question": "'ബെൻഡിംഗ് ലൈറ്റ്' സിമുലേഷനിൽ 'റേ' (Ray) എന്നതിൽ നിന്ന് 'വേവ്' (Wave) എന്നതിലേക്ക് കാഴ്ച എങ്ങനെ മാറ്റാം?",
    "options": [
      { "text": "'സെറ്റിംഗ്സ്' മെനുവിൽ", "isCorrect": false },
      { "text": "'റേ'/'വേവ്' ടോഗിൾ ബോക്സിൽ ക്ലിക്ക് ചെയ്യുന്നതിലൂടെ", "isCorrect": true },
      { "text": "'പ്രിസംസ്' വിൻഡോയിൽ", "isCorrect": false },
      { "text": "പ്രൊട്രാക്ടർ വലിക്കുന്നതിലൂടെ", "isCorrect": false }
    ]
  },
  {
    "question": "'ബെൻഡിംഗ് ലൈറ്റ്' സിമുലേഷനിൽ പ്രകാശ തരംഗത്തിന്റെ തീവ്രത (intensity) കാണാൻ ഏത് ടൂൾ ഉപയോഗിക്കാം?",
    "options": [
      { "text": "പ്രൊട്രാക്ടർ", "isCorrect": false },
      { "text": "'റേ'/'വേവ്' ടോഗിൾ", "isCorrect": false },
      { "text": "'ഇൻട്രോ' വിൻഡോയുടെ ഇടതുവശത്തുള്ള ടൂളുകൾ", "isCorrect": true },
      { "text": "'മെറ്റീരിയൽ' സ്ലൈഡർ", "isCorrect": false }
    ]
  },
  {
    "question": "'ബെൻഡിംഗ് ലൈറ്റ്' സിമുലേഷന്റെ 'ഇൻട്രോ' സെഷനിൽ 'നോർമൽ' ലൈൻ എങ്ങനെ ഓൺ ചെയ്യാം?",
    "options": [
      { "text": "'നോർമൽ' ചെക്ക്ബോക്സ് ചെക്ക് ചെയ്യുന്നതിലൂടെ", "isCorrect": true },
      { "text": "ടൂൾബോക്സിൽ നിന്ന് വലിച്ചിടുന്നതിലൂടെ", "isCorrect": false },
      { "text": "അത് എപ്പോഴും ഓൺ ആയിരിക്കും", "isCorrect": false },
      { "text": "കോൺ 90 ഡിഗ്രി ആക്കുന്നതിലൂടെ", "isCorrect": false }
    ]
  },
  {
    "question": "പ്രകാശ സ്രോതസ്സ് വലിച്ച് പതനകോൺ (angle of incidence) വർദ്ധിപ്പിക്കുമ്പോൾ (0 ഡിഗ്രിയിൽ നിന്ന്) അപവർത്തനകോണിന് (angle of refraction) എന്ത് സംഭവിക്കുന്നു?",
    "options": [
      { "text": "അപവർത്തനകോൺ മാറ്റമില്ലാതെ തുടരുന്നു", "isCorrect": false },
      { "text": "അപവർത്തനകോൺ വർദ്ധിക്കുന്നു", "isCorrect": true },
      { "text": "അപവർത്തനകോൺ കുറയുന്നു", "isCorrect": false },
      { "text": "അപവർത്തനകോൺ പൂജ്യമാകുന്നു", "isCorrect": false }
    ]
  },
  {
    "question": "'ബെൻഡിംഗ് ലൈറ്റ്' സിമുലേഷനിൽ 'വാട്ടർ' അല്ലെങ്കിൽ 'ഗ്ലാസ്' പോലുള്ള ഒരു പദാർത്ഥത്തിന്റെ 'അപവർത്തനാങ്കം' (Index of Refraction) എങ്ങനെ കണ്ടെത്താം?",
    "options": [
      { "text": "അത് പ്രൊട്രാക്ടറിൽ പ്രദർശിപ്പിച്ചിരിക്കുന്നു", "isCorrect": false },
      { "text": "അത് 'ഹെൽപ്പ്' മെനുവിലുണ്ട്", "isCorrect": false },
      { "text": "അത് മെറ്റീരിയൽ ബോക്സിലെ 'ഇൻഡെക്സ് ഓഫ് റിഫ്രാക്ഷൻ' സ്ലൈഡറിൽ കാണിച്ചിരിക്കുന്നു", "isCorrect": true },
      { "text": "അത് ഇന്റൻസിറ്റി ടൂൾ ഉപയോഗിച്ച് അളക്കുന്നു", "isCorrect": false }
    ]
  },
  {
    "question": "'ബെൻഡിംഗ് ലൈറ്റ്' സിമുലേഷനിൽ പ്രകാശകിരണം 'എയർ' എന്നതിൽ നിന്ന് 'വാട്ടർ' എന്നതിലേക്ക് പ്രവേശിക്കുമ്പോൾ എന്ത് ദൃശ്യപരമായ മാറ്റമാണ് സംഭവിക്കുന്നത്?",
    "options": [
      { "text": "അത് നോർമലിൽ നിന്ന് അകന്നുപോകുന്നു", "isCorrect": false },
      { "text": "അത് പ്രതലത്തിൽ തട്ടി നിൽക്കുന്നു", "isCorrect": false },
      { "text": "അത് തികച്ചും നേർരേഖയിൽ തുടരുന്നു", "isCorrect": false },
      { "text": "അത് നോർമലിലേക്ക് കൂടുതൽ അടുത്ത് വളയുന്നു", "isCorrect": true }
    ]
  },
  {
    "question": "'ബെൻഡിംഗ് ലൈറ്റ്' സിമുലേഷനിൽ പതനകോൺ (angle of incidence) അളക്കുന്നതിന്, പ്രൊട്രാക്ടറിന്റെ മധ്യഭാഗം എവിടെയാണ് വെക്കേണ്ടത്?",
    "options": [
      { "text": "പ്രകാശ സ്രോതസ്സിന് മുകളിൽ", "isCorrect": false },
      { "text": "'നോർമൽ' ചെക്ക്ബോക്സിൽ", "isCorrect": false },
      { "text": "പ്രകാശകിരണം മാധ്യമങ്ങളുടെ അതിർത്തിയിൽ തട്ടുന്ന പോയിന്റിൽ", "isCorrect": true },
      { "text": "മുകളിലെ മാധ്യമത്തിൽ എവിടെയും", "isCorrect": false }
    ]
  },
  {
    "question": "'ബെൻഡിംഗ് ലൈറ്റ്' സിമുലേഷനിൽ, പതനകോൺ 0° (നോർമലിലൂടെ) ആയി സജ്ജീകരിക്കുമ്പോൾ അപവർത്തനം സംഭവിച്ച രശ്മിയുടെ പാതയ്ക്ക് എന്ത് സംഭവിക്കുന്നു?",
    "options": [
      { "text": "അത് 45 ഡിഗ്രിയിലേക്ക് വളയുന്നു", "isCorrect": false },
      { "text": "പാതയ്ക്ക് മാറ്റം സംഭവിക്കുകയോ വളയുകയോ ചെയ്യുന്നില്ല", "isCorrect": true },
      { "text": "അത് 90 ഡിഗ്രിയിലേക്ക് വളയുന്നു", "isCorrect": false },
      { "text": "അത് പൂർണ്ണമായും പ്രതിഫലിക്കുന്നു", "isCorrect": false }
    ]
  },
  {
    "question": "ജിയോജിബ്രയിൽ, 'രണ്ട് രേഖകളുടെ സംഗമബിന്ദു അടയാളപ്പെടുത്തുന്ന' ടൂൾ കണ്ടെത്തുന്നതിന് നിങ്ങൾ ഏത് ടൂൾ ഗ്രൂപ്പിലാണ് നോക്കേണ്ടത്?",
    "options": [
      { "text": "ഗ്രൂപ്പ് 1 (മൂവ് ടൂളുകൾ)", "isCorrect": false },
      { "text": "ഗ്രൂപ്പ് 2 (പോയിന്റ് ടൂളുകൾ)", "isCorrect": true },
      { "text": "ഗ്രൂപ്പ് 3 (ലൈൻ ടൂളുകൾ)", "isCorrect": false },
      { "text": "ഗ്രൂപ്പ് 5 (സർക്കിൾ ടൂളുകൾ)", "isCorrect": false }
    ]
  },
  {
    "question": "ജിയോജിബ്രയിൽ, 19 യൂണിറ്റ് പോലുള്ള ഒരു നിശ്ചിത നീളത്തിൽ ഒരു രേഖ എങ്ങനെ വരയ്ക്കാം?",
    "options": [
      { "text": "'ലൈൻ' ടൂൾ തിരഞ്ഞെടുത്ത് നീളം 19 ആകുന്നതുവരെ വലിക്കുക", "isCorrect": false },
      { "text": "'സെഗ്മെന്റ് വിത്ത് ഗിവൺ ലെങ്ത്' എന്ന ടൂൾ തിരഞ്ഞെടുത്ത് 19 എന്ന് നൽകുക", "isCorrect": true },
      { "text": "ഏതെങ്കിലും ഒരു രേഖ വരച്ച് 'ഡിസ്റ്റൻസ്' ടൂൾ ഉപയോഗിച്ച് അതിന്റെ നീളം സജ്ജമാക്കുക", "isCorrect": false },
      { "text": "19 നീളമുള്ള ഒരു വശം നിർമ്മിക്കാൻ 'പോളിഗൺ' ടൂൾ ഉപയോഗിക്കുക", "isCorrect": false }
    ]
  },
  {
    "question": "കാൽസ്യം മൂലക ഡാറ്റാ വിൻഡോയിൽ, 'കോവാലന്റ് റേഡിയസ്', 'അറ്റോമിക് മാസ്' എന്നിവ കണ്ടെത്താൻ ഏത് മെനു ഇനത്തിലാണ് നിങ്ങൾ ക്ലിക്ക് ചെയ്യേണ്ടത്?",
    "options": [
      { "text": "ആറ്റം മോഡൽ", "isCorrect": false },
      { "text": "ഐസോടോപ്സ്", "isCorrect": false },
      { "text": "ഡാറ്റ ഓവർവ്യൂ", "isCorrect": true },
      { "text": "മിസലേനിയസ്", "isCorrect": false }
    ]
  },
  {
    "question": "ഫെറ്റ് 'ബെൻഡിംഗ് ലൈറ്റ്' സിമുലേഷനിൽ, 'ഇൻട്രോ' വിൻഡോയുടെ ഇടതുവശത്തുള്ള ടൂളുകൾ ഉപയോഗിച്ച് എന്തെല്ലാം രണ്ട് കാര്യങ്ങൾ നിരീക്ഷിക്കാൻ കഴിയും?",
    "options": [
      { "text": "പതനകോണും അപവർത്തനകോണും", "isCorrect": false },
      { "text": "പ്രകാശത്തിന്റെ പാതയും പദാർത്ഥത്തിന്റെ നിറവും", "isCorrect": false },
      { "text": "പ്രകാശത്തിന്റെ തരംഗ സ്വഭാവവും പ്രകാശ തീവ്രതയും", "isCorrect": true },
      { "text": "പ്രകാശ സ്രോതസ്സിന്റെ താപനിലയും ജലത്തിന്റെ താപനിലയും", "isCorrect": false }
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
