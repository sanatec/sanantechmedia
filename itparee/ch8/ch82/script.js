document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "നിശ്ചല ചിത്രങ്ങൾ ചലിക്കുന്നതായി തോന്നാൻ കാരണമാകുന്ന നമ്മുടെ കണ്ണുകളുടെ അതുല്യമായ സവിശേഷതയുടെ പേരെന്താണ്?",
    "options": [
      { "text": "റെറ്റിനൽ പെർസിസ്റ്റൻസ്", "isCorrect": false },
      { "text": "പെർസിസ്റ്റൻസ് ഓഫ് വിഷൻ", "isCorrect": true },
      { "text": "ഒപ്റ്റിക്കൽ ഇല്യൂഷൻ", "isCorrect": false },
      { "text": "വിഷൻ കണ്ടിന്യൂയിറ്റി", "isCorrect": false }
    ]
  },
  {
    "question": "പെർസിസ്റ്റൻസ് ഓഫ് വിഷൻ കാരണം ഒരു ഇമേജ് എത്ര സമയമാണ് റെറ്റിനയിൽ തങ്ങിനിൽക്കുന്നത്?",
    "options": [
      { "text": "ഒരു സെക്കൻ്റിൻ്റെ 1/10", "isCorrect": false },
      { "text": "ഒരു സെക്കൻ്റിൻ്റെ 1/16", "isCorrect": true },
      { "text": "ഒരു സെക്കൻ്റിൻ്റെ 1/5", "isCorrect": false },
      { "text": "1 സെക്കൻഡ്", "isCorrect": false }
    ]
  },
  {
    "question": "ആനിമേഷൻ അനുകരിക്കാൻ ഉപയോഗിച്ച ആദ്യത്തെ ഉപകരണം:",
    "options": [
      { "text": "സൂട്രോപ്പ്", "isCorrect": false },
      { "text": "തൗമാട്രോപ്പ്", "isCorrect": false },
      { "text": "ഫെനാക്കിസ്റ്റിസ്കോപ്പ്", "isCorrect": true },
      { "text": "ഫ്ലിപ്പ്ബുക്ക്", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു ഫ്ലിപ്പ്ബുക്കിൻ്റെ മറ്റൊരു പേര് എന്താണ്?",
    "options": [
      { "text": "മോഷൻ ബുക്ക്", "isCorrect": false },
      { "text": "കൈനോഗ്രാഫ്", "isCorrect": true },
      { "text": "സ്റ്റോറിബോർഡ്", "isCorrect": false },
      { "text": "ട്വീനിംഗ് ബുക്ക്", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു ആനിമേറ്റഡ് സിനിമ സൃഷ്ടിക്കുന്നതിനുള്ള തയ്യാറെടുപ്പ് ഘട്ടമല്ലാത്തത് താഴെ പറയുന്നവയിൽ ഏതാണ്?",
    "options": [
      { "text": "ഫ്രെയിം റേറ്റ് നിർണ്ണയിക്കുന്നത്", "isCorrect": true },
      { "text": "ഒരു കഥ തയ്യാറാക്കുന്നത്", "isCorrect": false },
      { "text": "ഒരു സ്റ്റോറിബോർഡ് സൃഷ്ടിക്കുന്നത്", "isCorrect": false },
      { "text": "കഥാപാത്രങ്ങളെ രൂപകൽപ്പന ചെയ്യുന്നത്", "isCorrect": false }
    ]
  },
  {
    "question": "\"ലൂണ\" എന്ന ആനിമേഷനിൽ, നായ്ക്കുട്ടി എന്താണ് ചെയ്യുന്നത്?",
    "options": [
      { "text": "അതിൻ്റെ വാലിനെ പിന്തുടരുന്നു", "isCorrect": false },
      { "text": "വാടിയ ചെടിക്ക് വെള്ളം കൊണ്ടുവരുന്നു", "isCorrect": true },
      { "text": "ഒരു അസ്ഥി കുഴിച്ചിടാൻ ഒരു കുഴിയെടുക്കുന്നു", "isCorrect": false },
      { "text": "ഒരു പന്ത് ഉപയോഗിച്ച് കളിക്കുന്നു", "isCorrect": false }
    ]
  },
  {
    "question": "ആനിമേഷനിലെ കഥാപാത്ര രൂപകൽപ്പനയിൽ സാധാരണയായി ഉൾപ്പെടാത്തത് ഏതാണ്?",
    "options": [
      { "text": "കഥാപാത്രങ്ങളുടെ രൂപത്തിലുള്ള വ്യതിയാനം", "isCorrect": false },
      { "text": "ഉചിതമായ നിറങ്ങൾ തിരഞ്ഞെടുക്കുന്നത്", "isCorrect": false },
      { "text": "പശ്ചാത്തല സംഗീതം എഴുതുന്നത്", "isCorrect": true },
      { "text": "എളുപ്പത്തിൽ മാറ്റം വരുത്താൻ കഴിയുന്ന ഡ്രോയിംഗുകൾ സൃഷ്ടിക്കുന്നത്", "isCorrect": false }
    ]
  },
  {
    "question": "താഴെ പറയുന്നവയിൽ പ്രശസ്തമായ ഒരു 2D ആനിമേറ്റഡ് സിനിമ ഏതാണ്?",
    "options": [
      { "text": "ശ്രെക്ക്", "isCorrect": false },
      { "text": "ബിഗ് ബക്ക് ബണ്ണി", "isCorrect": false },
      { "text": "ദി ജംഗിൾ ബുക്ക്", "isCorrect": true },
      { "text": "വാൾ-ഇ", "isCorrect": false }
    ]
  },
  {
    "question": "3D ആനിമേഷനുകൾ സൃഷ്ടിക്കാൻ ഉപയോഗിക്കുന്ന സോഫ്റ്റ്‌വെയർ ഏതാണ്?",
    "options": [
      { "text": "ഓപ്പൺടൂൺസ്", "isCorrect": false },
      { "text": "തുപ്പി ട്യൂബ് ഡെസ്ക്", "isCorrect": false },
      { "text": "സിൻഫിഗ് സ്റ്റുഡിയോ", "isCorrect": false },
      { "text": "ബ്ലെൻഡർ", "isCorrect": true }
    ]
  },
  {
    "question": "ഒരു സ്റ്റോറിബോർഡ് മുൻകൂട്ടി വിശദമാക്കുന്നത് എന്താണ്?",
    "options": [
      { "text": "അന്തിമ വീഡിയോ ഫയൽ ഫോർമാറ്റ്", "isCorrect": false },
      { "text": "ഓരോ കഥാപാത്രത്തിനുമുള്ള ശബ്ദ താരങ്ങൾ", "isCorrect": false },
      { "text": "ആനിമേഷനിലെ ഓരോ രംഗവും", "isCorrect": true },
      { "text": "നിർമ്മാണച്ചെലവ്", "isCorrect": false }
    ]
  },
  {
    "question": "ഓപ്പൺടൂൺസിൽ, വസ്തുക്കളുടെ സ്ഥാനവും വലുപ്പവും ആനിമേറ്റ് ചെയ്യുന്ന വർക്ക്‌സ്‌പേസിനെ വിളിക്കുന്ന പേരെന്താണ്?",
    "options": [
      { "text": "ഡ്രോയിംഗ് റൂം", "isCorrect": false },
      { "text": "ആനിമേഷൻ റൂം", "isCorrect": true },
      { "text": "എക്സ്ഷീറ്റ് റൂം", "isCorrect": false },
      { "text": "ബ്രൗസർ റൂം", "isCorrect": false }
    ]
  },
  {
    "question": "ആനിമേഷനിൽ, ഒരൊറ്റ നിശ്ചല ചിത്രത്തെ വിളിക്കുന്നത്:",
    "options": [
      { "text": "രംഗം (Scene)", "isCorrect": false },
      { "text": "ഫ്രെയിം", "isCorrect": true },
      { "text": "ലെവൽ", "isCorrect": false },
      { "text": "സെൽ", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു സെക്കൻഡിൽ പ്രദർശിപ്പിക്കുന്ന ഫ്രെയിമുകളുടെ എണ്ണത്തെ വിളിക്കുന്നത്:",
    "options": [
      { "text": "ഫ്രെയിം സ്പീഡ്", "isCorrect": false },
      { "text": "ഫ്രെയിം റേറ്റ് (FPS)", "isCorrect": true },
      { "text": "ആനിമേഷൻ പേസ്", "isCorrect": false },
      { "text": "സീൻ ദൈർഘ്യം", "isCorrect": false }
    ]
  },
  {
    "question": "12 FPS ഫ്രെയിം റേറ്റിൽ 5 സെക്കൻഡ് ദൈർഘ്യമുള്ള ഒരു ആനിമേഷന് മൊത്തം എത്ര ഫ്രെയിമുകൾ ആവശ്യമാണ്?",
    "options": [
      { "text": "12", "isCorrect": false },
      { "text": "50", "isCorrect": false },
      { "text": "60", "isCorrect": true },
      { "text": "72", "isCorrect": false }
    ]
  },
  {
    "question": "ഓപ്പൺടൂൺസിൽ, ഒരു ഫ്രെയിമിലെ ഉള്ളടക്കം മറ്റ് നിരവധി ഫ്രെയിമുകളിലേക്ക് പകർത്താൻ ഉപയോഗിക്കുന്ന സവിശേഷത ഏതാണ്?",
    "options": [
      { "text": "ക്ലോൺ ടൂൾ", "isCorrect": false },
      { "text": "റിപ്പീറ്റ് ബട്ടൺ / ക്ലിക്ക് ആൻഡ് ഡ്രാഗ്", "isCorrect": true },
      { "text": "ഡ്യൂപ്ലിക്കേറ്റ് കീഫ്രെയിം", "isCorrect": false },
      { "text": "പേസ്റ്റ് സ്പെഷ്യൽ", "isCorrect": false }
    ]
  },
  {
    "question": "ഓപ്പൺടൂൺസിലെ \"എക്സ്ഷീറ്റ്\" (Xsheet) എന്തിനെപ്പോലെ പ്രവർത്തിക്കുന്നു?",
    "options": [
      { "text": "ഒരു ഡ്രോയിംഗ് ക്യാൻവാസ്", "isCorrect": false },
      { "text": "ഒരു കളർ പാലറ്റ്", "isCorrect": false },
      { "text": "രംഗങ്ങൾ ക്രമീകരിക്കുന്നതിനുള്ള ഒരു ടൈംലൈൻ", "isCorrect": true },
      { "text": "ഒരു സൗണ്ട് മിക്സർ", "isCorrect": false }
    ]
  },
  {
    "question": "ഓപ്പൺടൂൺസിൽ ഒരു വെക്റ്റർ ഇമേജായി ഒരു മേഘം വരയ്ക്കുന്നതിന്, നിങ്ങൾ എന്ത് സൃഷ്ടിക്കണം?",
    "options": [
      { "text": "റാസ്റ്റർ ലെവൽ", "isCorrect": false },
      { "text": "ടൂൺസ് വെക്റ്റർ ലെവൽ", "isCorrect": true },
      { "text": "ബിറ്റ്മാപ്പ് ലെവൽ", "isCorrect": false },
      { "text": "സ്കാൻ ചെയ്ത ലെവൽ", "isCorrect": false }
    ]
  },
  {
    "question": "ഓപ്പൺടൂൺസിൽ ഫ്രീഹാൻഡ് ഇമേജുകൾ വരയ്ക്കാൻ ഉപയോഗിക്കുന്ന ഉപകരണം ഏതാണ്?",
    "options": [
      { "text": "സെലക്ഷൻ ടൂൾ", "isCorrect": false },
      { "text": "ടൈപ്പ് ടൂൾ", "isCorrect": false },
      { "text": "ബ്രഷ് ടൂൾ", "isCorrect": true },
      { "text": "ജ്യാമിതീയ ഉപകരണം", "isCorrect": false }
    ]
  },
  {
    "question": "രണ്ട് കീഫ്രെയിമുകൾക്കിടയിലുള്ള ഇന്റർമീഡിയറ്റ് ഫ്രെയിമുകൾ സോഫ്റ്റ്‌വെയർ യാന്ത്രികമായി സൃഷ്ടിക്കുന്ന ആനിമേഷൻ ടെക്നിക് ഏതാണ്?",
    "options": [
      { "text": "മോർഫിംഗ്", "isCorrect": false },
      { "text": "ട്വീനിംഗ്", "isCorrect": true },
      { "text": "റെൻഡറിംഗ്", "isCorrect": false },
      { "text": "സീക്വൻസിംഗ്", "isCorrect": false }
    ]
  },
  {
    "question": "ഓപ്പൺടൂൺസിൽ ട്വീനിംഗ് ഉപയോഗിച്ച് ഒരു വസ്തുവിന് ആനിമേഷൻ നൽകാൻ തിരഞ്ഞെടുക്കുന്ന ഉപകരണം ഏതാണ്?",
    "options": [
      { "text": "ബ്രഷ് ടൂൾ", "isCorrect": false },
      { "text": "സെലക്ഷൻ ടൂൾ", "isCorrect": true },
      { "text": "ആനിമേറ്റ് ടൂൾ", "isCorrect": false },
      { "text": "ഫിൽ ടൂൾ", "isCorrect": false }
    ]
  },
  {
    "question": "ആനിമേഷനിലെ കീഫ്രെയിമുകൾ നിർവചിക്കുന്നത്:",
    "options": [
      { "text": "വസ്തുവിൻ്റെ നിറം", "isCorrect": false },
      { "text": "പ്രോജക്റ്റിൻ്റെ ഫയൽ വലുപ്പം", "isCorrect": false },
      { "text": "ചലനത്തിലെ പ്രധാന സ്ഥാനങ്ങൾ", "isCorrect": true },
      { "text": "പശ്ചാത്തല സംഗീതം", "isCorrect": false }
    ]
  },
  {
    "question": "ഓപ്പൺടൂൺസിൽ ട്വീനിംഗ് ഉപയോഗിച്ച് ഒരു വസ്തുവിൻ്റെ ഏത് കാര്യമാണ് ആനിമേറ്റ് ചെയ്യാൻ കഴിയുന്നത്?",
    "options": [
      { "text": "സ്ഥാനവും അളവും (Position and Scale)", "isCorrect": true },
      { "text": "ഫയൽ ഫോർമാറ്റ്", "isCorrect": false },
      { "text": "ലെയർ നാമം", "isCorrect": false },
      { "text": "പ്രോജക്റ്റ് ക്രമീകരണങ്ങൾ", "isCorrect": false }
    ]
  },
  {
    "question": "ഓപ്പൺടൂൺസ് പ്രോജക്റ്റ് ഫയലുകൾ ഏത് എക്സ്റ്റൻഷനിലാണ് സേവ് ചെയ്യുന്നത്?",
    "options": [
      { "text": ".otz", "isCorrect": false },
      { "text": ".tnz", "isCorrect": true },
      { "text": ".anim", "isCorrect": false },
      { "text": ".toonz", "isCorrect": false }
    ]
  },
  {
    "question": "ഓപ്പൺടൂൺസിന് പുറത്ത് ഒരു ആനിമേഷൻ കാണാൻ കഴിയണമെങ്കിൽ, നിങ്ങൾ എന്തുചെയ്യണം?",
    "options": [
      { "text": "പ്രോജക്റ്റ് സേവ് ചെയ്യുക", "isCorrect": false },
      { "text": "അത് ഒരു വീഡിയോ ഫയലായി (ഉദാഹരണത്തിന്, MP4) റെൻഡർ ചെയ്യുക", "isCorrect": true },
      { "text": "എക്സ്ഷീറ്റ് എക്സ്പോർട്ട് ചെയ്യുക", "isCorrect": false },
      { "text": "ഒരു പുതിയ ലെവൽ സൃഷ്ടിക്കുക", "isCorrect": false }
    ]
  },
  {
    "question": "ആനിമേഷനിൽ ഇമേജ് സീക്വൻസുകൾ ഉപയോഗിക്കുന്നതിൻ്റെ ഒരു പ്രയോജനം എന്താണ്?",
    "options": [
      { "text": "അവ അന്തിമ വീഡിയോയുടെ ഫയൽ വലുപ്പം കുറയ്ക്കുന്നു.", "isCorrect": false },
      { "text": "സോഫ്റ്റ്‌വെയറിൽ വരയ്ക്കുന്നതിനേക്കാൾ എളുപ്പത്തിൽ അവ സൃഷ്ടിക്കാനാകും.", "isCorrect": false },
      { "text": "അവ കഥാപാത്രങ്ങളുടെ സൂക്ഷ്മമായ ഭാവങ്ങളും ചലനങ്ങളും സാധ്യമാക്കുന്നു.", "isCorrect": true },
      { "text": "അവ സ്വയമേവ ശബ്ദ ഇഫക്റ്റുകൾ ചേർക്കുന്നു.", "isCorrect": false }
    ]
  },
  {
    "question": "ഓപ്പൺടൂൺസിൽ ഒരു ഇമേജ് സീക്വൻസ് ഉൾപ്പെടുത്തുമ്പോൾ, ബ്രൗസർ റൂമിൽ പ്രദർശിപ്പിക്കുന്നത് എന്താണ്?",
    "options": [
      { "text": "ഓരോ വ്യക്തിഗത ഇമേജ് ഫയലും", "isCorrect": false },
      { "text": "ആദ്യത്തെ ഇമേജ് മാത്രം", "isCorrect": false },
      { "text": "സീക്വൻസിൻ്റെ പൊതുവായ പേര്", "isCorrect": true },
      { "text": "ഒരു വീഡിയോ പ്രിവ്യൂ", "isCorrect": false }
    ]
  },
  {
    "question": "വ്യക്തിഗത ആനിമേഷൻ രംഗങ്ങളെ ഒരു ഒറ്റ സിനിമയായി സംയോജിപ്പിക്കുന്നതിനുള്ള അന്തിമ ഘട്ടം ഏറ്റവും നന്നായി ചെയ്യുന്നത് ഏത് സോഫ്റ്റ്‌വെയർ ഉപയോഗിച്ചാണ്?",
    "options": [
      { "text": "ഒരു ഡാറ്റാബേസ് മാനേജ്മെൻ്റ് സിസ്റ്റം", "isCorrect": false },
      { "text": "ഒരു വീഡിയോ എഡിറ്റിംഗ് സോഫ്റ്റ്‌വെയർ", "isCorrect": true },
      { "text": "ഒരു ഡ്രോയിംഗ് സോഫ്റ്റ്‌വെയർ", "isCorrect": false },
      { "text": "ഒരു വേഡ് പ്രോസസർ", "isCorrect": false }
    ]
  },
  {
    "question": "ജാപ്പനീസ് ആനിമേഷൻ സിനിമയായ 'ബെല്ലെ' സൃഷ്ടിക്കാൻ ഉപയോഗിച്ച സോഫ്റ്റ്‌വെയർ ഏതാണ്?",
    "options": [
      { "text": "ബ്ലെൻഡർ", "isCorrect": false },
      { "text": "അഡോബ് ആനിമേറ്റ്", "isCorrect": false },
      { "text": "ഓപ്പൺടൂൺസ്", "isCorrect": true },
      { "text": "ഓട്ടോഡെസ്ക് മായ", "isCorrect": false }
    ]
  },
  {
    "question": "ഓപ്പൺടൂൺസിൽ ചിത്രങ്ങൾ വരയ്ക്കുന്നതിനും, നിറം നൽകുന്നതിനും, എഡിറ്റ് ചെയ്യുന്നതിനും ഉപയോഗിക്കുന്ന റൂം ഏതാണ്?",
    "options": [
      { "text": "ആനിമേഷൻ റൂം", "isCorrect": false },
      { "text": "ഡ്രോയിംഗ് റൂം", "isCorrect": true },
      { "text": "ബ്രൗസർ റൂം", "isCorrect": false },
      { "text": "എക്സ്ഷീറ്റ് റൂം", "isCorrect": false }
    ]
  },
  {
    "question": "ഓപ്പൺടൂൺസിലെ ഡ്രോയിംഗ് റൂമിലുള്ള \"സ്റ്റൈൽ എഡിറ്ററിൻ്റെ\" പ്രാഥമിക ലക്ഷ്യം എന്താണ്?",
    "options": [
      { "text": "ആനിമേഷൻ ടൈംലൈൻ എഡിറ്റ് ചെയ്യാൻ", "isCorrect": false },
      { "text": "വരയ്ക്കുന്നതിന് നിറങ്ങൾ തിരഞ്ഞെടുക്കാനും ക്രമീകരിക്കാനും", "isCorrect": true },
      { "text": "പ്രോജക്റ്റ് ക്രമീകരണങ്ങൾ കൈകാര്യം ചെയ്യാൻ", "isCorrect": false },
      { "text": "ശബ്ദ ഫയലുകൾ ഇംപോർട്ട് ചെയ്യാൻ", "isCorrect": false }
    ]
  },
  {
    "question": "ഓപ്പൺടൂൺസിൽ ഒരു രംഗത്തിലേക്ക് പശ്ചാത്തല സംഗീതം ചേർക്കാൻ, നിങ്ങൾ എന്തുചെയ്യണം?",
    "options": [
      { "text": "കാൻവാസിൽ ഒരു സംഗീത നോട്ട് വരയ്ക്കുക.", "isCorrect": false },
      { "text": "പാട്ടിൻ്റെ പേര് എഴുതാൻ ടൈപ്പ് ടൂൾ ഉപയോഗിക്കുക.", "isCorrect": false },
      { "text": "എക്സ്ഷീറ്റിലെ ഒരു കോളത്തിലേക്ക് ഓഡിയോ ഫയൽ ചേർക്കുക.", "isCorrect": true },
      { "text": "രംഗം ഒരു MP3 ഫയലായി റെൻഡർ ചെയ്യുക.", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു വസ്തു 60 ഫ്രെയിമുകളിലായി ഇടത്തുനിന്ന് വലത്തോട്ട് നീങ്ങണമെങ്കിൽ, നിങ്ങൾ ഏത് ഫ്രെയിമുകളിലാണ് കീഫ്രെയിമുകൾ സജ്ജീകരിക്കേണ്ടത്?",
    "options": [
      { "text": "ഫ്രെയിം 1 ലും ഫ്രെയിം 60 ലും", "isCorrect": true },
      { "text": "1 മുതൽ 60 വരെയുള്ള എല്ലാ ഫ്രെയിമുകളിലും", "isCorrect": false },
      { "text": "ഫ്രെയിം 1 ലും ഫ്രെയിം 30 ലും", "isCorrect": false },
      { "text": "ഫ്രെയിം 60 ൽ മാത്രം", "isCorrect": false }
    ]
  },
  {
    "question": "ഓപ്പൺടൂൺസിലെ \"പ്ലേ\" ബട്ടൺ എന്തിനാണ് ഉപയോഗിക്കുന്നത്?",
    "options": [
      { "text": "അന്തിമ വീഡിയോ റെൻഡർ ചെയ്യാൻ", "isCorrect": false },
      { "text": "ആനിമേഷൻ പ്രിവ്യൂ ചെയ്യാൻ", "isCorrect": true },
      { "text": "പ്രോജക്റ്റ് സേവ് ചെയ്യാൻ", "isCorrect": false },
      { "text": "പുതിയ ചിത്രങ്ങൾ ഇംപോർട്ട് ചെയ്യാൻ", "isCorrect": false }
    ]
  },
  {
    "question": "താഴെ പറയുന്നവയിൽ സൗജന്യവും ഓപ്പൺ സോഴ്‌സുമായ ഒരു 2D ആനിമേഷൻ സോഫ്റ്റ്‌വെയർ ഏതാണ്?",
    "options": [
      { "text": "അഡോബ് ആനിമേറ്റ്", "isCorrect": false },
      { "text": "ഓട്ടോഡെസ്ക് മായ", "isCorrect": false },
      { "text": "ഓപ്പൺടൂൺസ്", "isCorrect": true },
      { "text": "അഡോബ് ഡൈമൻഷൻ", "isCorrect": false }
    ]
  },
  {
    "question": "\"ലൂണ\" ആനിമേഷനുമായി ബന്ധപ്പെട്ട്, പ്രധാന പാരിസ്ഥിതിക വിഷയം എന്തായിരുന്നു?",
    "options": [
      { "text": "വായു മലിനീകരണം", "isCorrect": false },
      { "text": "ജലസംരക്ഷണം / ഒരു ചെടിയെ സഹായിക്കുന്നത്", "isCorrect": true },
      { "text": "വനനശീകരണം", "isCorrect": false },
      { "text": "റീസൈക്ലിംഗ്", "isCorrect": false }
    ]
  },
  {
    "question": "2D ആനിമേഷൻ എന്തിനെ അടിസ്ഥാനമാക്കിയുള്ളതാണ്?",
    "options": [
      { "text": "പാവകൾ", "isCorrect": false },
      { "text": "റോബോട്ടിക്സ്", "isCorrect": false },
      { "text": "2D ചിത്രങ്ങൾ", "isCorrect": true },
      { "text": "3D മോഡലുകൾ", "isCorrect": false }
    ]
  },
  {
    "question": "പ്രശസ്തമായ 2D ആനിമേറ്റഡ് സിനിമകളിൽ ഉൾപ്പെടുന്നവ:",
    "options": [
      { "text": "ജംഗിൾ ബുക്ക്, സിൻഡ്രെല്ല", "isCorrect": true },
      { "text": "ശ്രെക്ക്, വാൾ-ഇ", "isCorrect": false },
      { "text": "അവതാർ, ടോയ് സ്റ്റോറി", "isCorrect": false },
      { "text": "ഫ്രോസൺ, ടാംഗിൾഡ്", "isCorrect": false }
    ]
  },
  {
    "question": "3D ആനിമേഷൻ സോഫ്റ്റ്‌വെയറിന് ഉദാഹരണം:",
    "options": [
      { "text": "അഡോബ് ആനിമേറ്റ്", "isCorrect": false },
      { "text": "തുപ്പി ട്യൂബ്", "isCorrect": false },
      { "text": "ബ്ലെൻഡർ", "isCorrect": true },
      { "text": "സിൻഫിഗ് സ്റ്റുഡിയോ", "isCorrect": false }
    ]
  },
  {
    "question": "3D ആനിമേഷനുകൾ വ്യാപകമായി ഉപയോഗിക്കുന്നത് എവിടെയാണ്?",
    "options": [
      { "text": "ഗെയിമിംഗ്", "isCorrect": true },
      { "text": "പത്രം അച്ചടി", "isCorrect": false },
      { "text": "ഓഡിയോ റെക്കോർഡിംഗ്", "isCorrect": false },
      { "text": "പുസ്തക ചിത്രീകരണം", "isCorrect": false }
    ]
  },
  {
    "question": "പ്രശസ്തമായ 3D സിനിമകളിൽ ഉൾപ്പെടുന്നവ:",
    "options": [
      { "text": "ബാംബി", "isCorrect": false },
      { "text": "ബിഗ് ബക്ക് ബണ്ണി, ശ്രെക്ക്, വാൾ-ഇ", "isCorrect": true },
      { "text": "സിൻഡ്രെല്ല", "isCorrect": false },
      { "text": "ടോം ആൻഡ് ജെറി", "isCorrect": false }
    ]
  },
  {
    "question": "ഓപ്പൺടൂൺസ് എന്നത്:",
    "options": [
      { "text": "സൗജന്യവും ഓപ്പൺ സോഴ്‌സുമായ ആനിമേഷൻ സോഫ്റ്റ്‌വെയർ", "isCorrect": true },
      { "text": "സംഗീത സോഫ്റ്റ്‌വെയർ", "isCorrect": false },
      { "text": "ഫോട്ടോ എഡിറ്റിംഗ് ടൂൾ", "isCorrect": false },
      { "text": "പണം നൽകേണ്ട സോഫ്റ്റ്‌വെയർ", "isCorrect": false }
    ]
  },
  {
    "question": "\"ബെല്ലെ\" (2021) എന്ന സിനിമ സൃഷ്ടിച്ചത്:",
    "options": [
      { "text": "ഫോട്ടോഷോപ്പ്", "isCorrect": false },
      { "text": "ബ്ലെൻഡർ", "isCorrect": false },
      { "text": "ഓപ്പൺടൂൺസ്", "isCorrect": true },
      { "text": "മായ", "isCorrect": false }
    ]
  },
  {
    "question": "ഓപ്പൺടൂൺസ് പ്രോജക്റ്റിൻ്റെ ഫയൽ എക്സ്റ്റൻഷൻ:",
    "options": [
      { "text": ".avi", "isCorrect": false },
      { "text": ".jpg", "isCorrect": false },
      { "text": ".tnz", "isCorrect": true },
      { "text": ".mp4", "isCorrect": false }
    ]
  },
  {
    "question": "ഓപ്പൺടൂൺസ് റൂമുകൾ അറിയപ്പെടുന്നത്:",
    "options": [
      { "text": "വർക്ക്‌സ്‌പേസുകൾ", "isCorrect": true },
      { "text": "പ്രോജക്റ്റുകൾ", "isCorrect": false },
      { "text": "ക്ലിപ്പുകൾ", "isCorrect": false },
      { "text": "ഫ്രെയിമുകൾ", "isCorrect": false }
    ]
  },
  {
    "question": "ഡ്രോയിംഗുകൾക്ക് നിറം നൽകാനും എഡിറ്റ് ചെയ്യാനും ഉപയോഗിക്കുന്ന റൂം:",
    "options": [
      { "text": "സൗണ്ട് റൂം", "isCorrect": false },
      { "text": "ബ്രൗസർ റൂം", "isCorrect": false },
      { "text": "ഡ്രോയിംഗ് റൂം", "isCorrect": true },
      { "text": "ആനിമേഷൻ റൂം", "isCorrect": false }
    ]
  },
  {
    "question": "ഫ്രെയിം റേറ്റ് എന്നാൽ:",
    "options": [
      { "text": "ഒരു സെക്കൻഡിൽ പ്രദർശിപ്പിക്കുന്ന ഫ്രെയിമുകളുടെ എണ്ണം", "isCorrect": true },
      { "text": "ഒരു ഫ്രെയിമിലെ നിറങ്ങളുടെ എണ്ണം", "isCorrect": false },
      { "text": "ഉപയോഗിക്കുന്ന ടൂളുകളുടെ എണ്ണം", "isCorrect": false },
      { "text": "കഥാപാത്രങ്ങളുടെ എണ്ണം", "isCorrect": false }
    ]
  },
  {
    "question": "12 FPS-ൽ, 5 സെക്കൻഡിന് ആവശ്യമായ ഫ്രെയിമുകൾ:",
    "options": [
      { "text": "100", "isCorrect": false },
      { "text": "120", "isCorrect": false },
      { "text": "50", "isCorrect": false },
      { "text": "60", "isCorrect": true }
    ]
  },
  {
    "question": "ഓപ്പൺടൂൺസിൽ, ഫ്രെയിമുകൾ ക്രമീകരിക്കുന്നത്:",
    "options": [
      { "text": "പാലറ്റുകളിൽ", "isCorrect": false },
      { "text": "കോളങ്ങളിൽ മാത്രം", "isCorrect": false },
      { "text": "ലെയറുകളിൽ", "isCorrect": false },
      { "text": "എക്സ്ഷീറ്റുകളിൽ", "isCorrect": true }
    ]
  },
  {
    "question": "ട്വീനിംഗ് (Tweening) എന്നാൽ:",
    "options": [
      { "text": "കളർ കറക്ഷൻ", "isCorrect": false },
      { "text": "രണ്ട് കീഫ്രെയിമുകൾക്കിടയിലുള്ള ഫ്രെയിമുകൾ യാന്ത്രികമായി സൃഷ്ടിക്കുന്നത്", "isCorrect": true },
      { "text": "ഒരേ ചിത്രം പകർത്തുന്നത്", "isCorrect": false },
      { "text": "പ്രോജക്റ്റ് സേവ് ചെയ്യുന്നത്", "isCorrect": false }
    ]
  },
  {
    "question": "കീഫ്രെയിമുകൾ എന്നാൽ:",
    "options": [
      { "text": "ഒരു വസ്തുവിൻ്റെ പ്രധാന സ്ഥാനങ്ങൾ നിർവചിക്കുന്ന ഫ്രെയിമുകൾ", "isCorrect": true },
      { "text": "അവസാന ഫ്രെയിം മാത്രം", "isCorrect": false },
      { "text": "ആദ്യ ഫ്രെയിം മാത്രം", "isCorrect": false },
      { "text": "ക്രമരഹിതമായ ഫ്രെയിമുകൾ", "isCorrect": false }
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
