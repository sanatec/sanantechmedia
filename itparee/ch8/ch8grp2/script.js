document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [

  {
    "question": "നിങ്ങൾ 12 FPS-ൽ 5 സെക്കൻഡ് ആനിമേഷൻ സൃഷ്ടിക്കുന്നു. ആകെ എത്ര ഫ്രെയിമുകൾ ആവശ്യമാണ്?",
    "options": [
      { "text": "24", "isCorrect": false },
      { "text": "60", "isCorrect": true },
      { "text": "12", "isCorrect": false },
      { "text": "30", "isCorrect": false }
    ],
    "correctAnswer": "60"
  },
  {
    "question": "ഒരു വിദ്യാർത്ഥി ഒരു കോളത്തിൽ പ്ലാന്റും മേഘവും വരച്ചു. മേഘം മാത്രം ആനിമേറ്റ് ചെയ്യുമ്പോൾ എന്ത് സംഭവിക്കും?",
    "options": [
      { "text": "പ്ലാന്റും നീങ്ങും", "isCorrect": true },
      { "text": "റെൻഡർ ആയില്ല", "isCorrect": false },
      { "text": "രണ്ട് ഒബ്ജക്റ്റുകളും ഒരുമിച്ച് നീങ്ങും", "isCorrect": true },
      { "text": "സീൻ വീണ്ടും ആരംഭിക്കും", "isCorrect": false }
    ],
    "correctAnswer": "രണ്ട് ഒബ്ജക്റ്റുകളും ഒരുമിച്ച് നീങ്ങും"
  },
  {
    "question": "പ്ലാന്റ് വീണ്ടും വരയ്ക്കാതെ വളരുന്നത് കാണിക്കാൻ നിങ്ങൾ ആഗ്രഹിക്കുന്നു. ഏത് രീതി ഉപയോഗിക്കണം?",
    "options": [
      { "text": "ഫ്രെയിം ആവർത്തിക്കൽ", "isCorrect": false },
      { "text": "കീഫ്രെയിമുകൾ ഉപയോഗിച്ച് സ്കെയിലിംഗ്", "isCorrect": true },
      { "text": "ലെയർ ഒപാസിറ്റി", "isCorrect": false },
      { "text": "FPS വർദ്ധനവ്", "isCorrect": false }
    ],
    "correctAnswer": "കീഫ്രെയിമുകൾ ഉപയോഗിച്ച് സ്കെയിലിംഗ്"
  },
  {
    "question": "എക്‌സ്പോർട്ട് ചെയ്യുമ്പോൾ, ഫയൽ .tnz ആയി സേവ് ചെയ്യുന്നു. എന്താണ് ഗുണം?",
    "options": [
      { "text": "എഡിറ്റ് ചെയ്യാവുന്ന പ്രോജക്റ്റ് പിന്നീട് വീണ്ടും തുറക്കാം", "isCorrect": true },
      { "text": "മൊബൈലിൽ പ്ലേ ചെയ്യും", "isCorrect": false },
      { "text": "വലുപ്പം കുറയ്ക്കുന്നു", "isCorrect": false },
      { "text": "MP4 ലേക്ക് പരിവർത്തനം ചെയ്യുന്നു", "isCorrect": false }
    ],
    "correctAnswer": "എഡിറ്റ് ചെയ്യാവുന്ന പ്രോജക്റ്റ് പിന്നീട് വീണ്ടും തുറക്കാം"
  },
  {
    "question": "മേഘങ്ങൾ സ്ക്രീനിലൂടെ വളരെ വേഗത്തിൽ നീങ്ങുന്നു. എന്താണ് ക്രമീകരിക്കേണ്ടത്?",
    "options": [
      { "text": "നിറം", "isCorrect": false },
      { "text": "ട്വീൻ ദൈർഘ്യം", "isCorrect": true },
      { "text": "ഫ്രെയിം വലുപ്പം", "isCorrect": false },
      { "text": "ഓഡിയോ വേഗത", "isCorrect": false }
    ],
    "correctAnswer": "ട്വീൻ ദൈർഘ്യം"
  },
  {
    "question": "ലൂണയുടെ നടക്കുന്ന ചലനം മറ്റൊരു പ്രോജക്റ്റിൽ പുനരുപയോഗിക്കാൻ, എന്താണ് ഏറ്റവും നല്ലത്?",
    "options": [
      { "text": "വീണ്ടും വരയ്ക്കുക", "isCorrect": false },
      { "text": "ഇമേജ് സീക്വൻസ് ഇംപോർട്ട് ചെയ്യുക", "isCorrect": true },
      { "text": "സ്റ്റോറിബോർഡ് എക്‌സ്പോർട്ട് ചെയ്യുക", "isCorrect": false },
      { "text": "ഫ്രെയിമുകൾ സ്‌ക്രീൻഷോട്ട് എടുക്കുക", "isCorrect": false }
    ],
    "correctAnswer": "ഇമേജ് സീക്വൻസ് ഇംപോർട്ട് ചെയ്യുക"
  },
  {
    "question": "വിഷ്വൽ പെർസിസ്റ്റൻസ് ഇനിപ്പറയുന്നവയിൽ ഏതിൽ ഉപയോഗിക്കുന്നു?",
    "options": [
      { "text": "സ്റ്റിൽ ഇമേജ്", "isCorrect": false },
      { "text": "സൗണ്ട് എഡിറ്റിംഗ്", "isCorrect": false },
      { "text": "ഫ്ലിപ്പ്ബുക്ക് ആനിമേഷൻ", "isCorrect": true },
      { "text": "വീഡിയോ കംപ്രഷൻ", "isCorrect": false }
    ],
    "correctAnswer": "ഫ്ലിപ്പ്ബുക്ക് ആനിമേഷൻ"
  },
  {
    "question": "ഓപ്പൻടൂൺസിലെ വരയ്ക്കാനുള്ള പ്രധാന വർക്ക്‌സ്പേസ് ഏതാണ്?",
    "options": [
      { "text": "ആനിമേഷൻ", "isCorrect": false },
      { "text": "ഡ്രോയിംഗ് റൂം", "isCorrect": true },
      { "text": "ബ്രൗസർ", "isCorrect": false },
      { "text": "Xsheet", "isCorrect": false }
    ],
    "correctAnswer": "ഡ്രോയിംഗ് റൂം"
  },
  {
    "question": "നിങ്ങൾ ബാക്ക്‌ഗ്രൗണ്ട് ഇമേജ് ആദ്യ ഫ്രെയിമിൽ മാത്രമേ ചേർത്തിട്ടുള്ളൂ. ബാക്കിയുള്ളവ ശൂന്യമാണ്. നിങ്ങൾ എന്ത് ചെയ്യണം?",
    "options": [
      { "text": "FPS വർദ്ധിപ്പിക്കുക", "isCorrect": false },
      { "text": "റിപീറ്റ് ബട്ടൺ ഉപയോഗിക്കുക", "isCorrect": true },
      { "text": "സംഗീതം ചേർക്കുക", "isCorrect": false },
      { "text": "ഫ്രെയിം ഇല്ലാതാക്കുക", "isCorrect": false }
    ],
    "correctAnswer": "റിപീറ്റ് ബട്ടൺ ഉപയോഗിക്കുക"
  },
  {
    "question": "ആനിമേഷനായി വെക്ടർ ഡ്രോയിംഗ് എന്തുകൊണ്ട് പ്രാധാന്യമർഹിക്കുന്നു?",
    "options": [
      { "text": "കുറച്ച് നിറങ്ങൾ മാത്രം ഉപയോഗിക്കുന്നു", "isCorrect": false },
      { "text": "ഗുണനിലവാരം കുറയ്ക്കാതെ വലുപ്പം മാറ്റാം", "isCorrect": true },
      { "text": "വേഗത്തിൽ വരയ്ക്കാം", "isCorrect": false },
      { "text": "3D-യെ പിന്തുണയ്ക്കുന്നു", "isCorrect": false }
    ],
    "correctAnswer": "ഗുണനിലവാരം കുറയ്ക്കാതെ വലുപ്പം മാറ്റാം"
  },
  {
    "question": "ലൂണയുടെ ചലനം ഇടിവുള്ളതായി തോന്നുന്നു. ഏത് സെറ്റിംഗ് ആണ് ആദ്യം ക്രമീകരിക്കേണ്ടത്?",
    "options": [
      { "text": "ഫ്രെയിം റേറ്റ് വർദ്ധിപ്പിക്കുക", "isCorrect": true },
      { "text": "റെസല്യൂഷൻ കുറയ്ക്കുക", "isCorrect": false },
      { "text": "FPS കുറയ്ക്കുക", "isCorrect": false },
      { "text": "ശബ്ദം ചേർക്കുക", "isCorrect": false }
    ],
    "correctAnswer": "ഫ്രെയിം റേറ്റ് വർദ്ധിപ്പിക്കുക"
  },
  {
    "question": "ലൂണയുടെ പ്രതിഫലനം വെള്ളത്തിൽ കാണിക്കാൻ, നിങ്ങൾ ഇത് ചെയ്യണം:",
    "options": [
      { "text": "തിരിക്കുക", "isCorrect": false },
      { "text": "ഡ്യൂപ്ലിക്കേറ്റ് ചെയ്ത് ലംബമായി ഫ്ലിപ്പ് ചെയ്യുക", "isCorrect": true },
      { "text": "ക്രോപ്പ് ചെയ്യുക", "isCorrect": false },
      { "text": "ഫ്രെയിം ആവർത്തിക്കുക", "isCorrect": false }
    ],
    "correctAnswer": "ഡ്യൂപ്ലിക്കേറ്റ് ചെയ്ത് ലംബമായി ഫ്ലിപ്പ് ചെയ്യുക"
  },
  {
    "question": "ഓപ്പൻടൂൺസിൽ, \"ട്വീനിംഗ്\" ഇതിൽ സഹായിക്കുന്നു:",
    "options": [
      { "text": "സംഗീതം ചേർക്കുന്നു", "isCorrect": false },
      { "text": "കീഫ്രെയിമുകൾക്കിടയിൽ ഓട്ടോമാറ്റിക് ഫ്രെയിം പരിവർത്തനങ്ങൾ", "isCorrect": true },
      { "text": "നിറം നൽകുന്നു", "isCorrect": false },
      { "text": "ലെയറുകൾ ലയിപ്പിക്കുന്നു", "isCorrect": false }
    ],
    "correctAnswer": "കീഫ്രെയിമുകൾക്കിടയിൽ ഓട്ടോമാറ്റിക് ഫ്രെയിം പരിവർത്തനങ്ങൾ"
  },
  {
    "question": "ഒരു വിദ്യാർത്ഥിയുടെ ബാക്ക്‌ഗ്രൗണ്ട് ഇമേജ് സേവ് ചെയ്തതിന് ശേഷം അപ്രത്യക്ഷമായി. സാധ്യമായ കാരണം?",
    "options": [
      { "text": "ഫയൽ പ്രോജക്റ്റ് ഫോൾഡറിലേക്ക് കോപ്പി ചെയ്തിട്ടില്ല", "isCorrect": true },
      { "text": "ഫ്രെയിം റേറ്റ് പിശക്", "isCorrect": false },
      { "text": "തെറ്റായ നിറം", "isCorrect": false },
      { "text": "തെറ്റായ കാമറാ ആംഗിൾ", "isCorrect": false }
    ],
    "correctAnswer": "ഫയൽ പ്രോജക്റ്റ് ഫോൾഡറിലേക്ക് കോപ്പി ചെയ്തിട്ടില്ല"
  },
  {
    "question": "FPS 12-ൽ നിന്ന് 6 ആയി സെറ്റ് ചെയ്താൽ എന്ത് സംഭവിക്കും?",
    "options": [
      { "text": "ആനിമേഷൻ ഇടിവുള്ളതായി കാണപ്പെടുന്നു", "isCorrect": true },
      { "text": "മിനുസമാർന്നത്", "isCorrect": false },
      { "text": "വേഗത", "isCorrect": false },
      { "text": "വ്യത്യാസമില്ല", "isCorrect": false }
    ],
    "correctAnswer": "ആനിമേഷൻ ഇടിവുള്ളതായി കാണപ്പെടുന്നു"
  },
  {
    "question": "സോഫ്റ്റ്‌വെയർ ഇല്ലാതെ ആനിമേഷൻ സുഗമമായി പ്ലേ ചെയ്യാൻ, നിങ്ങൾ ചെയ്യണം:",
    "options": [
      { "text": "MP4 ലേക്ക് റെൻഡർ ചെയ്യുക", "isCorrect": true },
      { "text": "TNZ ഫയൽ കോപ്പി ചെയ്യുക", "isCorrect": false },
      { "text": "FPS വർദ്ധിപ്പിക്കുക", "isCorrect": false },
      { "text": "ഇമേജായി സേവ് ചെയ്യുക", "isCorrect": false }
    ],
    "correctAnswer": "MP4 ലേക്ക് റെൻഡർ ചെയ്യുക"
  },
  {
    "question": "ഒരു സൗണ്ട് ക്ലിപ്പ് ആനിമേഷനേക്കാൾ ചെറുതാണ്. ഏറ്റവും നല്ല പരിഹാരം?",
    "options": [
      { "text": "പുതിയ ഫ്രെയിമുകൾ ചേർക്കുക", "isCorrect": false },
      { "text": "ഓഡിയോ ലൂപ്പ് ചെയ്യുക അല്ലെങ്കിൽ ആവർത്തിക്കുക", "isCorrect": true },
      { "text": "ശബ്ദം ഇല്ലാതാക്കുക", "isCorrect": false },
      { "text": "ഇമേജാക്കി പരിവർത്തനം ചെയ്യുക", "isCorrect": false }
    ],
    "correctAnswer": "ഓഡിയോ ലൂപ്പ് ചെയ്യുക അല്ലെങ്കിൽ ആവർത്തിക്കുക"
  },
  {
    "question": "വ്യത്യസ്ത വേഗതയിൽ മേഘങ്ങൾ നീങ്ങുന്നത് കാണിക്കാൻ നിങ്ങൾ ആഗ്രഹിക്കുന്നു. നിങ്ങൾ എന്ത് ചെയ്യും?",
    "options": [
      { "text": "ഒരേ കോളത്തിൽ വരയ്ക്കുക", "isCorrect": false },
      { "text": "ഓരോന്നിനും വെവ്വേറെ കോളങ്ങൾ ഉപയോഗിക്കുക", "isCorrect": true },
      { "text": "ഫിൽട്ടറുകൾ ചേർക്കുക", "isCorrect": false },
      { "text": "FPS മാറ്റുക", "isCorrect": false }
    ],
    "correctAnswer": "ഓരോന്നിനും വെവ്വേറെ കോളങ്ങൾ ഉപയോഗിക്കുക"
  },
  {
    "question": "ഒരു വിദ്യാർത്ഥി സീനുകൾ ചേർക്കാൻ Kdenlive ഉപയോഗിക്കുന്നു. പ്രധാന ഗുണം എന്താണ്?",
    "options": [
      { "text": "3D ആനിമേഷൻ", "isCorrect": false },
      { "text": "സംഗീതത്തോടൊപ്പം ഒന്നിലധികം സീനുകൾ സംയോജിപ്പിക്കുന്നു", "isCorrect": true },
      { "text": "ഡ്രോയിംഗ് ടൂൾ", "isCorrect": false },
      { "text": "ട്വീൻ ടൂൾ", "isCorrect": false }
    ],
    "correctAnswer": "സംഗീതത്തോടൊപ്പം ഒന്നിലധികം സീനുകൾ സംയോജിപ്പിക്കുന്നു"
  },
  {
    "question": "ഇമേജ് സീക്വൻസ് luna_01.png, luna_02.png, ... ഇംപോർട്ട് ചെയ്തിരിക്കുന്നു. ഓപ്പൻടൂൺസിൽ ഏത് പേരാണ് കാണപ്പെടുന്നത്?",
    "options": [
      { "text": "luna.png", "isCorrect": false },
      { "text": "luna_.png", "isCorrect": true },
      { "text": "luna_sequence", "isCorrect": false },
      { "text": "luna.mp4", "isCorrect": false }
    ],
    "correctAnswer": "luna_.png"
  },
  {
    "question": "നിങ്ങൾ ഒരു ആനിമേഷൻ സൃഷ്ടിച്ചു, പക്ഷേ സ്റ്റോറിബോർഡിൽ സംഭാഷണങ്ങൾ ചേർക്കാൻ മറന്നു. ഫലം:",
    "options": [
      { "text": "ആനിമേഷൻ സാധ്യമല്ല", "isCorrect": false },
      { "text": "ശബ്ദത്തിനും പ്രവൃത്തികൾക്കും മോശം സമയം", "isCorrect": true },
      { "text": "FPS ഇരട്ടിയാകുന്നു", "isCorrect": false },
      { "text": "സീൻ ആവർത്തിക്കുന്നു", "isCorrect": false }
    ],
    "correctAnswer": "ശബ്ദത്തിനും പ്രവൃത്തികൾക്കും മോശം സമയം"
  },
  {
    "question": "ആനിമേഷന് മുമ്പ് സ്റ്റോറിബോർഡ് എന്തുകൊണ്ട് പ്രധാനമാണ്?",
    "options": [
      { "text": "എക്‌സ്പോർട്ട് ചെയ്യുന്നതിന്", "isCorrect": false },
      { "text": "ഓരോ സീനും വിഷ്വലായും സാങ്കേതികമായും പ്ലാൻ ചെയ്യാൻ സഹായിക്കുന്നു", "isCorrect": true },
      { "text": "ബാക്ക്‌ഗ്രൗണ്ട് ചേർക്കുന്നു", "isCorrect": false },
      { "text": "ഫയൽ വലുപ്പം കുറയ്ക്കുന്നു", "isCorrect": false }
    ],
    "correctAnswer": "ഓരോ സീനും വിഷ്വലായും സാങ്കേതികമായും പ്ലാൻ ചെയ്യാൻ സഹായിക്കുന്നു"
  },
  {
    "question": "കഥാപാത്രങ്ങൾ നീങ്ങുമ്പോൾ ബാക്ക്‌ഗ്രൗണ്ട് സ്ഥിരമായി തുടരണമെന്ന് നിങ്ങൾ ആഗ്രഹിക്കുന്നു. എന്താണ് ആവശ്യമായത്?",
    "options": [
      { "text": "രണ്ടും ഒരുമിച്ച് വരയ്ക്കുക", "isCorrect": false },
      { "text": "ബാക്ക്‌ഗ്രൗണ്ട് വെവ്വേറെ കോളത്തിൽ സൂക്ഷിക്കുക", "isCorrect": true },
      { "text": "FPS വർദ്ധിപ്പിക്കുക", "isCorrect": false },
      { "text": "ഒപാസിറ്റി കുറയ്ക്കുക", "isCorrect": false }
    ],
    "correctAnswer": "ബാക്ക്‌ഗ്രൗണ്ട് വെവ്വേറെ കോളത്തിൽ സൂക്ഷിക്കുക"
  },
  {
    "question": "മേഘം ലൂണയേക്കാൾ ചെറുതായി കാണപ്പെടണം. നിങ്ങൾ എന്താണ് പരിഷ്കരിക്കും?",
    "options": [
      { "text": "FPS", "isCorrect": false },
      { "text": "സെലക്ഷൻ ടൂൾ ഉപയോഗിച്ച് സ്കെയിൽ ചെയ്യുക", "isCorrect": true },
      { "text": "നിറം", "isCorrect": false },
      { "text": "ആവർത്തിക്കുക", "isCorrect": false }
    ],
    "correctAnswer": "സെലക്ഷൻ ടൂൾ ഉപയോഗിച്ച് സ്കെയിൽ ചെയ്യുക"
  },
  {
    "question": "ഒരു വിദ്യാർത്ഥി വെക്ടറിന് പകരം റാസ്റ്റർ ലെവലിൽ വരച്ചു. എന്താണ് പരിമിതി?",
    "options": [
      { "text": "എക്‌സ്പോർട്ട് ചെയ്യാൻ കഴിയില്ല", "isCorrect": false },
      { "text": "വലുപ്പം മാറ്റാനോ രൂപങ്ങൾ ശുദ്ധമായി എഡിറ്റ് ചെയ്യാനോ ബുദ്ധിമുട്ട്", "isCorrect": true },
      { "text": "ബ്ലർ ചേർക്കുന്നു", "isCorrect": false },
      { "text": "ഓഡിയോ നഷ്ടപ്പെടുന്നു", "isCorrect": false }
    ],
    "correctAnswer": "വലുപ്പം മാറ്റാനോ രൂപങ്ങൾ ശുദ്ധമായി എഡിറ്റ് ചെയ്യാനോ ബുദ്ധിമുട്ട്"
  },
  {
    "question": "സ്റ്റിൽ ഫ്രെയിമുകൾ വീഡിയോ ഫോർമാറ്റാക്കി മാറ്റുന്ന പ്രക്രിയ ഏതാണ്?",
    "options": [
      { "text": "പ്രിവ്യൂ", "isCorrect": false },
      { "text": "ആവർത്തിക്കുക", "isCorrect": false },
      { "text": "റെൻഡർ", "isCorrect": true },
      { "text": "ഇംപോർട്ട്", "isCorrect": false }
    ],
    "correctAnswer": "റെൻഡർ"
  },
  {
    "question": "ലൂണയുടെ കണ്ണുകൾ ആവർത്തിച്ച് മിഴിക്കണം. ഏറ്റവും നല്ല രീതി?",
    "options": [
      { "text": "മിഴിക്കുന്ന ഇമേജ് സീക്വൻസ് ലൂപ്പ് ചെയ്യുക", "isCorrect": true },
      { "text": "ട്വീൻ സ്കെയിലിംഗ്", "isCorrect": false },
      { "text": "ബാക്ക്‌ഗ്രൗണ്ട് ചേർക്കുക", "isCorrect": false },
      { "text": "തിരിക്കുക", "isCorrect": false }
    ],
    "correctAnswer": "മിഴിക്കുന്ന ഇമേജ് സീക്വൻസ് ലൂപ്പ് ചെയ്യുക"
  },
  {
    "question": "വെക്ടർ ലെവലിൽ വരയ്ക്കുമ്പോൾ, മേഘത്തിൽ നിറം നിറയ്ക്കാൻ നിങ്ങൾ ഇത് ഉപയോഗിക്കണം:",
    "options": [
      { "text": "ഫിൽ ടൂൾ", "isCorrect": true },
      { "text": "ബ്രഷ്", "isCorrect": false },
      { "text": "സെലക്ഷൻ", "isCorrect": false },
      { "text": "ആവർത്തിക്കുക", "isCorrect": false }
    ],
    "correctAnswer": "ഫിൽ ടൂൾ"
  },
  {
    "question": "നിങ്ങളുടെ ഇമേജ് ആനിമേഷൻ വിൻഡോയിൽ ദൃശ്യമല്ല. ആദ്യം പരിശോധിക്കേണ്ട കാര്യം:",
    "options": [
      { "text": "ഓഡിയോ മ്യൂട്ട്", "isCorrect": false },
      { "text": "Xsheet ഫ്രെയിം പ്ലേസ്മെന്റ്", "isCorrect": true },
      { "text": "FPS", "isCorrect": false },
      { "text": "ഫയൽ എക്സ്റ്റെൻഷൻ", "isCorrect": false }
    ],
    "correctAnswer": "Xsheet ഫ്രെയിം പ്ലേസ്മെന്റ്"
  },
  {
    "question": "നിങ്ങൾ 12 FPS-ൽ 60 ഫ്രെയിമുകൾ സൃഷ്ടിച്ചു. ആനിമേഷന്റെ ദൈർഘ്യം എന്താണ്?",
    "options": [
      { "text": "2 സെക്കൻഡ്", "isCorrect": false },
      { "text": "5 സെക്കൻഡ്", "isCorrect": true },
      { "text": "10 സെക്കൻഡ്", "isCorrect": false },
      { "text": "12 സെക്കൻഡ്", "isCorrect": false }
    ],
    "correctAnswer": "5 സെക്കൻഡ്"
  },
  {
    "question": "മേഘത്തിന്റെ പാത നേർരേഖയ്ക്ക് പകരം വളവാക്കാൻ നിങ്ങൾ ആഗ്രഹിക്കുന്നു. നിങ്ങൾക്ക് ഇത് എങ്ങനെ ചെയ്യാം?",
    "options": [
      { "text": "കൈകൊണ്ട് പുതിയ ഫ്രെയിമുകൾ ചേർക്കുക", "isCorrect": false },
      { "text": "ട്വീനിന്റെ മോഷൻ പാത്ത് എഡിറ്റ് ചെയ്യുക", "isCorrect": true },
      { "text": "നിറം മാറ്റുക", "isCorrect": false },
      { "text": "ഫിൽട്ടർ ചേർക്കുക", "isCorrect": false }
    ],
    "correctAnswer": "ട്വീനിന്റെ മോഷൻ പാത്ത് എഡിറ്റ് ചെയ്യുക"
  },
  {
    "question": "ഇമേജുകളോ ശബ്ദങ്ങളോ ഇംപോർട്ട് ചെയ്യാൻ നിങ്ങൾ ഏത് ഓപ്പൻടൂൺസ് റൂം ഉപയോഗിക്കും?",
    "options": [
      { "text": "ഡ്രോയിംഗ്", "isCorrect": false },
      { "text": "ബ്രൗസർ", "isCorrect": true },
      { "text": "ആനിമേഷൻ", "isCorrect": false },
      { "text": "ടൂൾ റൂം", "isCorrect": false }
    ],
    "correctAnswer": "ബ്രൗസർ"
  },
  {
    "question": "റെൻഡർ ചെയ്തതിന് ശേഷം, ശബ്ദം പ്ലേ ചെയ്യുന്നില്ല. ഏറ്റവും സാധ്യതയുള്ള പ്രശ്നം:",
    "options": [
      { "text": "FPS പൊരുത്തക്കേട്", "isCorrect": false },
      { "text": "ഓഡിയോ ട്രാക്ക് ഉൾപ്പെടുത്തിയിട്ടില്ല അല്ലെങ്കിൽ മ്യൂട്ട് ചെയ്തിട്ടുണ്ട്", "isCorrect": true },
      { "text": "തെറ്റായ ഫ്രെയിം വലുപ്പം", "isCorrect": false },
      { "text": "വെക്ടർ കാണില്ല", "isCorrect": false }
    ],
    "correctAnswer": "ഓഡിയോ ട്രാക്ക് ഉൾപ്പെടുത്തിയിട്ടില്ല അല്ലെങ്കിൽ മ്യൂട്ട് ചെയ്തിട്ടുണ്ട്"
  },
  {
    "question": "\"File → Save All\" ഉപയോഗിച്ച് സേവ് ചെയ്യാൻ എന്തുകൊണ്ട്?",
    "options": [
      { "text": "എക്‌സ്പോർട്ട് ചെയ്യുന്നതിന്", "isCorrect": false },
      { "text": "എല്ലാ സീൻ എലമെന്റുകളും സെറ്റിംഗുകളും സേവ് ചെയ്തിട്ടുണ്ടെന്ന് ഉറപ്പാക്കുന്നു", "isCorrect": true },
      { "text": "MP4 സൃഷ്ടിക്കുന്നു", "isCorrect": false },
      { "text": "കാഷെ മായ്ക്കുന്നു", "isCorrect": false }
    ],
    "correctAnswer": "എല്ലാ സീൻ എലമെന്റുകളും സെറ്റിംഗുകളും സേവ് ചെയ്തിട്ടുണ്ടെന്ന് ഉറപ്പാക്കുന്നു"
  },
  {
    "question": "ഓപ്പൻടൂൺസിൽ ഒരു ആനിമേഷൻ പ്രോജക്റ്റ് ആരംഭിക്കാനുള്ള ആദ്യ ഘട്ടം എന്താണ്?",
    "options": [
      { "text": "ബാക്ക്‌ഗ്രൗണ്ട് വരയ്ക്കുക", "isCorrect": false },
      { "text": "കീഫ്രെയിമുകൾ ചേർക്കുക", "isCorrect": false },
      { "text": "ഒരു പുതിയ പ്രോജക്റ്റ് സൃഷ്ടിക്കുക", "isCorrect": true },
      { "text": "Xsheet തുറക്കുക", "isCorrect": false }
    ],
    "correctAnswer": "ഒരു പുതിയ പ്രോജക്റ്റ് സൃഷ്ടിക്കുക"
  },
  {
    "question": "ആനിമേഷൻ വീഡിയോ പ്ലേബാക്ക് ചെയ്യുമ്പോൾ നീട്ടിയതായി കാണപ്പെടുന്നു. സാധ്യമായ കാരണം?",
    "options": [
      { "text": "കുറഞ്ഞ FPS", "isCorrect": false },
      { "text": "തെറ്റായ അസ്പെക്റ്റ് റേഷ്യോ (കാമറ സൈസ്)", "isCorrect": true },
      { "text": "ലെയർ കാണില്ല", "isCorrect": false },
      { "text": "തെറ്റായ ട്വീൻ", "isCorrect": false }
    ],
    "correctAnswer": "തെറ്റായ അസ്പെക്റ്റ് റേഷ്യോ (കാമറ സൈസ്)"
  },
  {
    "question": "ഒരു വിദ്യാർത്ഥിക്ക് സീനിന് പിന്നിൽ മൂടൽമഞ്ഞ് സൃഷ്ടിക്കാൻ ആഗ്രഹമുണ്ട്. ഏത് ലെയർ ഓർഡർ ശരിയാണ്?",
    "options": [
      { "text": "മേഘം മൂടൽമഞ്ഞിന് മുകളിൽ", "isCorrect": false },
      { "text": "പ്രധാന കഥാപാത്രങ്ങൾക്ക് താഴെ മൂടൽമഞ്ഞ്", "isCorrect": true },
      { "text": "മൂടൽമഞ്ഞ് മുകളിൽ", "isCorrect": false },
      { "text": "ക്രമരഹിതം", "isCorrect": false }
    ],
    "correctAnswer": "പ്രധാന കഥാപാത്രങ്ങൾക്ക് താഴെ മൂടൽമഞ്ഞ്"
  },
  {
    "question": "ട്വീനിംഗിൽ, \"കീഫ്രെയിമുകൾ\" എന്താണ്?",
    "options": [
      { "text": "ക്രമരഹിതമായ ഫ്രെയിമുകൾ", "isCorrect": false },
      { "text": "ചലനം നിർവചിക്കുന്ന പ്രധാന പോയിന്റുകൾ", "isCorrect": true },
      { "text": "അധിക ലെയറുകൾ", "isCorrect": false },
      { "text": "ഓഡിയോ ബീറ്റുകൾ", "isCorrect": false }
    ],
    "correctAnswer": "ചലനം നിർവചിക്കുന്ന പ്രധാന പോയിന്റുകൾ"
  },
  {
    "question": "ലൂണ വളരെ വേഗത്തിൽ ഓടുമ്പോൾ, എന്താണ് എളുപ്പത്തിലുള്ള പരിഹാരം?",
    "options": [
      { "text": "കൂടുതൽ ഫ്രെയിമുകൾ ചേർക്കുക അല്ലെങ്കിൽ FPS കുറയ്ക്കുക", "isCorrect": true },
      { "text": "സൂം വർദ്ധിപ്പിക്കുക", "isCorrect": false },
      { "text": "സംഗീതം ചേർക്കുക", "isCorrect": false },
      { "text": "ഫയൽ നാമം മാറ്റുക", "isCorrect": false }
    ],
    "correctAnswer": "കൂടുതൽ ഫ്രെയിമുകൾ ചേർക്കുക അല്ലെങ്കിൽ FPS കുറയ്ക്കുക"
  },
  {
    "question": "അവസാന സീനിൽ \"The End\" എന്ന വാചകം ചേർക്കാൻ നിങ്ങൾ ആഗ്രഹിക്കുന്നു. ഏത് ഓപ്പൻടൂൺസ് ടൂൾ സഹായിക്കുന്നു?",
    "options": [
      { "text": "ടൈപ്പ് ടൂൾ", "isCorrect": true },
      { "text": "ഫിൽ", "isCorrect": false },
      { "text": "ആവർത്തിക്കുക", "isCorrect": false },
      { "text": "വെക്ടർ ടൂൾ", "isCorrect": false }
    ],
    "correctAnswer": "ടൈപ്പ് ടൂൾ"
  },
  {
    "question": "ആനിമേറ്റ് ചെയ്യുമ്പോൾ, കളർ പാലറ്റ് കാണില്ല. അത് എവിടെ കണ്ടെത്താം?",
    "options": [
      { "text": "സ്റ്റൈൽ എഡിറ്റർ", "isCorrect": true },
      { "text": "Xsheet", "isCorrect": false },
      { "text": "ആനിമേഷൻ റൂം", "isCorrect": false },
      { "text": "ടൂൾബാർ", "isCorrect": false }
    ],
    "correctAnswer": "സ്റ്റൈൽ എഡിറ്റർ"
  },
  {
    "question": "നിങ്ങളുടെ ആനിമേഷൻ ഒരു ഫോണിൽ പ്ലേ ചെയ്യാവുന്നതാക്കാൻ നിങ്ങൾ ആഗ്രഹിക്കുന്നു. നിങ്ങൾ എന്ത് ചെയ്യണം?",
    "options": [
      { "text": "TNZ സേവ് ചെയ്യുക", "isCorrect": false },
      { "text": "SVG എക്‌സ്പോർട്ട് ചെയ്യുക", "isCorrect": false },
      { "text": "MP4 ഫോർമാറ്റിലേക്ക് റെൻഡർ ചെയ്യുക", "isCorrect": true },
      { "text": "ഫ്രെയിം കോപ്പി ചെയ്യുക", "isCorrect": false }
    ],
    "correctAnswer": "MP4 ഫോർമാറ്റിലേക്ക് റെൻഡർ ചെയ്യുക"
  },
  {
    "question": "മേഘങ്ങൾ ലൂണയെ ഓവർലാപ്പ് ചെയ്താൽ, ഏത് കോളം ക്രമീകരിക്കണം?",
    "options": [
      { "text": "മേഘം കോളം ലൂണയുടെ കോളത്തിന് പിന്നിലേക്ക് നീക്കുക", "isCorrect": true },
      { "text": "FPS വർദ്ധിപ്പിക്കുക", "isCorrect": false },
      { "text": "കീഫ്രെയിം ചേർക്കുക", "isCorrect": false },
      { "text": "ലയിപ്പിക്കുക", "isCorrect": false }
    ],
    "correctAnswer": "മേഘം കോളം ലൂണയുടെ കോളത്തിന് പിന്നിലേക്ക് നീക്കുക"
  },
  {
    "question": "ഒരു ഇമേജ് സീക്വൻസ് ഇംപോർട്ട് ചെയ്യുമ്പോൾ, ഫ്രെയിമുകൾ കുഴപ്പമുള്ളതായി കാണപ്പെടുന്നു. സാധ്യമായ കാരണം?",
    "options": [
      { "text": "തെറ്റായ FPS", "isCorrect": false },
      { "text": "ഫയലുകളുടെ തെറ്റായ നമ്പറിംഗ് പാറ്റേൺ", "isCorrect": true },
      { "text": "നിറം പ്രശ്നം", "isCorrect": false },
      { "text": "MP4 പിന്തുണയ്ക്കുന്നില്ല", "isCorrect": false }
    ],
    "correctAnswer": "ഫയലുകളുടെ തെറ്റായ നമ്പറിംഗ് പാറ്റേൺ"
  },
  {
    "question": "ലൂണയുടെ ആനിമേഷൻ കുറച്ച് ഫ്രെയിമുകൾക്ക് ശേഷം മരവിപ്പിക്കുന്നു. ഏത് പരിഹാരമാണ് പ്രവർത്തിക്കുന്നത്?",
    "options": [
      { "text": "FPS വർദ്ധിപ്പിക്കുക", "isCorrect": false },
      { "text": "കാണാതായ സെല്ലുകൾ അല്ലെങ്കിൽ കീഫ്രെയിമുകൾ ആവർത്തിക്കുക", "isCorrect": true },
      { "text": "ഫയൽ ഇല്ലാതാക്കുക", "isCorrect": false },
      { "text": "കോളം ചേർക്കുക", "isCorrect": false }
    ],
    "correctAnswer": "കാണാതായ സെല്ലുകൾ അല്ലെങ്കിൽ കീഫ്രെയിമുകൾ ആവർത്തിക്കുക"
  },
  {
    "question": "എല്ലാ കഥാപാത്രങ്ങളും ഒരു വെക്ടർ ലെവലിൽ വരച്ചാൽ എന്ത് സംഭവിക്കും?",
    "options": [
      { "text": "വേഗത്തിലുള്ള എഡിറ്റിംഗ്", "isCorrect": false },
      { "text": "വ്യക്തിഗതമായി നീക്കാനോ ആനിമേറ്റ് ചെയ്യാനോ ബുദ്ധിമുട്ട്", "isCorrect": true },
      { "text": "നിറം നൽകാൻ എളുപ്പം", "isCorrect": false },
      { "text": "ശബ്ദം ഇല്ല", "isCorrect": false }
    ],
    "correctAnswer": "വ്യക്തിഗതമായി നീക്കാനോ ആനിമേറ്റ് ചെയ്യാനോ ബുദ്ധിമുട്ട്"
  },
  {
    "question": "ഒരു വിദ്യാർത്ഥി 2 സെക്കൻഡ് ക്ലിപ്പിനായി 24 FPS സെറ്റ് ചെയ്തു. എത്ര ഫ്രെയിമുകൾ?",
    "options": [
      { "text": "12", "isCorrect": false },
      { "text": "48", "isCorrect": true },
      { "text": "24", "isCorrect": false },
      { "text": "60", "isCorrect": false }
    ],
    "correctAnswer": "48"
  },
  {
    "question": "വാട്ടർ സൗണ്ട് ഇഫക്റ്റ് ഉൾപ്പെടുത്താൻ നിങ്ങൾ മറന്നു. പിന്നീട് അത് എവിടെ ചേർക്കാം?",
    "options": [
      { "text": "സ്റ്റോറിബോർഡ്", "isCorrect": false },
      { "text": "Kdenlive ഓഡിയോ ട്രാക്ക്", "isCorrect": true },
      { "text": "ഡ്രോയിംഗ് റൂം", "isCorrect": false },
      { "text": "ബ്രൗസർ", "isCorrect": false }
    ],
    "correctAnswer": "Kdenlive ഓഡിയോ ട്രാക്ക്"
  },
  {
    "question": "റെൻഡർ ചെയ്യുമ്പോൾ, വീഡിയോ ഔട്ട്പുട്ട് ഇരുണ്ടതാണ്. എന്താണ് പരിശോധിക്കേണ്ടത്?",
    "options": [
      { "text": "FPS", "isCorrect": false },
      { "text": "ബ്രൈറ്റ്നസ്/കളർ പ്രൊഫൈൽ സെറ്റിംഗുകൾ", "isCorrect": true },
      { "text": "റിപീറ്റ് ടൂൾ", "isCorrect": false },
      { "text": "ഫയൽ പാത", "isCorrect": false }
    ],
    "correctAnswer": "ബ്രൈറ്റ്നസ്/കളർ പ്രൊഫൈൽ സെറ്റിംഗുകൾ"
  },
  {
    "question": "ഒരേ ദൈർഘ്യത്തിൽ പ്ലാന്റ് വേഗത്തിൽ വളരുന്നത് കാണിക്കാൻ, എന്താണ് മാറ്റാവുന്നത്?",
    "options": [
      { "text": "ഫ്രെയിമുകളുടെ എണ്ണം കുറയ്ക്കുക", "isCorrect": true },
      { "text": "ലെയറുകൾ ചേർക്കുക", "isCorrect": false },
      { "text": "FPS വർദ്ധിപ്പിക്കുക", "isCorrect": false },
      { "text": "കാൻവാസ് ക്രോപ്പ് ചെയ്യുക", "isCorrect": false }
    ],
    "correctAnswer": "ഫ്രെയിമുകളുടെ എണ്ണം കുറയ്ക്കുക"      
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
