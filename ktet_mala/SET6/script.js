document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
  {
    "q": "പഠനത്തെ എങ്ങനെ നിർവചിക്കാം?",
    "options": [
      "അനുഭവങ്ങളിലൂടെ കിട്ടുന്ന സ്ഥിരമായ സ്വഭാവമാറ്റം",
      "സ്വഭാവമാറ്റം.",
      "അനുഭവങ്ങളിൽ നിന്നും പരിസരങ്ങളിൽ നിന്നും നേടിയെടുത്ത നിരീക്ഷണയോഗ്യമായ സ്വഭാവ മാറ്റം",
      "പഠനത്തിലൂടെ ആർജ്ജിച്ചെടുത്ത വിവരങ്ങൾ"
    ],
    "correct": 2
  },
  {
    "q": "കുട്ടിയുടെ പഠനനേട്ടം അളക്കുന്നതിനുള്ള ശോധകം ഏത് ?",
    "options": [
      "സിദ്ധി ശോധകം",
      "അഭിക്ഷമത പരീക്ഷ.",
      "വ്യക്തിത്വ പരീക്ഷ",
      "ബുദ്ധി ശോധകം"
    ],
    "correct": 0
  },
  {
    "q": "വിക്ക്' എന്ന സംസാരതടസ്സത്തെ പരിഹരിക്കുന്നതിന് അവലംബിക്കാവുന്ന തന്ത്രം :",
    "options": [
      "ബോധപൂർവ്വമുള്ള സംസാരം",
      "പ്രായോഗിക സന്ദർഭങ്ങളിലുള്ള സംസാരം",
      "ദീർഘമായ സംസാരം",
      "താമസിച്ചുള്ള സംസാരം."
    ],
    "correct": 3
  },
  {
    "q": "താൻ നിരീക്ഷിക്കുന്ന കുട്ടിയുടെ സജീവ പെരുമാറ്റത്തെ കുറിച്ച് അധ്യാപിക നിരന്തരം രേഖപ്പെടുത്തുന്ന കുറിപ്പുകളാണ്:",
    "options": [
      "ഉപാഖ്യാനരേഖ",
      "കേസ് സ്റ്റഡി",
      "അഭിമുഖം",
      "ആത്മ കഥ"
    ],
    "correct": 0
  },
  {
    "q": "തന്നിരിക്കുന്ന ഉപാധികളിൽ ഓർമ്മ പ്രക്രിയയുടെ ശരിയായ ക്രമം തിരഞ്ഞെടുക്കുക:",
    "options": [
      "സംഭരണം, ഓർമ്മയിലാക്കൽ, പുനഃസ്മരണം",
      "ഓർമ്മയിലാക്കൽ, സംഭരണം, പുനഃസ്മരണം",
      "പുനഃസ്മരണം, സംഭരണം, ഓർമ്മയിലാക്കൽ",
      "സംഭരണം, പുനഃസ്മരണം, ഓർമ്മയിലാക്കൽ"
    ],
    "correct": 1
  },
  {
    "q": "തന്നിരിക്കുന്നവയിൽ വ്യക്തിത്വത്തിന്റെ ഘടകങ്ങളിൽ പെടാത്തത് ഏത്?",
    "options": [
      "ശാരീരിക ഘടന",
      "ബുദ്ധിശക്തി",
      "രക്തഗ്രൂപ്പ്",
      "മാനസികാവസ്ഥ"
    ],
    "correct": 2
  },
  {
    "q": "ഗൃഹസന്ദർശനം വഴി അധ്യാപികയ്ക്ക് പ്രധാനമായും മനസ്സിലാക്കാൻ സാധിക്കുന്നത്:",
    "options": [
      "കുട്ടിയുടെ സാമൂഹിക പശ്ചാത്തലം",
      "കുട്ടിയുടെ സാമ്പത്തിക നില",
      "കുട്ടിയുടെ പഠന താല്പര്യം",
      "കുട്ടിയുടെ ആരോഗ്യസ്ഥിതി"
    ],
    "correct": 0
  },
  {
    "q": "ഒരു ടെസ്റ്റ് വിശ്വസനീയമാണ് എന്ന് പറയണമെങ്കിൽ:",
    "options": [
      "വ്യത്യസ്ത സമയങ്ങളിൽ നടത്തിയാലും ഒരേ ഫലം തരുന്നു.",
      "ഉദ്ദേശിച്ച കാര്യം തന്നെ അളക്കുന്നു",
      "എല്ലാവർക്കും എളുപ്പമുള്ളതായിരിക്കണം",
      "വിലയിരുത്തലിൽ വ്യക്തിസ്വാധീനം ഉണ്ടാകരുത്"
    ],
    "correct": 0
  },
  {
    "q": "തന്നിരിക്കുന്നവയിൽ ചോംസ്കിയുടെ ഭാഷാവികാസ സിദ്ധാന്തവുമായി ബന്ധമില്ലാത്തത് ഏത്?",
    "options": [
      "LAD",
      "സാർവത്രിക വ്യാകരണം",
      "ഭാഷാ പഠനശേഷി ജന്മസിദ്ധമാണ്",
      "ഭാഷ പഠിക്കുന്നത് അനുകരണത്തിലൂടെയാണ്"
    ],
    "correct": 3
  },
  {
    "q": "പരീക്ഷാ പേടിയുള്ള ഒരു കുട്ടിയെ സഹായിക്കാൻ അധ്യാപകന് ചെയ്യാൻ കഴിയുന്ന ഏറ്റവും നല്ല മാർഗ്ഗം:",
    "options": [
      "കൂടുതൽ പരീക്ഷകൾ നടത്തി ശീലിപ്പിക്കുക",
      "മാനസിക പിന്തുണയും ആത്മവിശ്വാസവും നൽകുക",
      "പരീക്ഷ എഴുതുന്നതിൽ നിന്ന് ഒഴിവാക്കുക",
      "രക്ഷിതാക്കളെ വിളിച്ച് ശാസിക്കുക"
    ],
    "correct": 1
  },
  {
    "q": "വിദ്യാർത്ഥികളിൽ ജിജ്ഞാസയും താല്പര്യവും നിലനിർത്താൻ അധ്യാപകൻ ഉപയോഗിക്കേണ്ട പ്രധാന ബോധന തന്ത്രം:",
    "options": [
      "നിരന്തരമായി നോട്ട് എഴുതിക്കുക",
      "വൈവിധ്യമാർന്ന ചോദ്യോത്തരങ്ങളും പ്രവർത്തനങ്ങളും ഉൾപ്പെടുത്തുക",
      "കർശനമായ അച്ചടക്കം പാലിക്കുക",
      "പാഠപുസ്തകം നോക്കി വായിക്കുക"
    ],
    "correct": 1
  },
  {
    "q": "കുട്ടികളിലെ വൈകാരിക അസ്ഥിരതയ്ക്ക് പ്രധാന കാരണം:",
    "options": [
      "ശാരീരിക പക്വത കുറവ്",
      "രക്ഷിതാക്കളുടെയും അധ്യാപകരുടെയും അമിതമായ സമ്മർദ്ദവും അനാവശ്യ നിയന്ത്രണങ്ങളും",
      "കൂടുതൽ കൂട്ടുകാർ ഉണ്ടാകുന്നത്",
      "സ്കൂളിലെ ക്ലബ്ബ് പ്രവർത്തനങ്ങൾ"
    ],
    "correct": 1
  },
  {
    "q": "ഒരു പ്രത്യേക വിഷയത്തിൽ കുട്ടിക്കുള്ള താല്പര്യവും പ്രവണതയും അളക്കുന്നതിനുള്ള പരീക്ഷയാണ്:",
    "options": [
      "ബുദ്ധി പരീക്ഷ",
      "അഭിരുചി പരീക്ഷ (Aptitude Test)",
      "സിദ്ധി പരീക്ഷ",
      "വ്യക്തിത്വ പരീക്ഷ"
    ],
    "correct": 1
  },
  {
    "q": "സർഗ്ഗാത്മകതയുള്ള ഒരു കുട്ടിയുടെ ചിന്താരീതി എങ്ങനെയായിരിക്കും?",
    "options": [
      "ഏകമുഖ ചിന്ത (Convergent)",
      "വികേന്ദ്രീകൃത ചിന്ത / വിവ്രജന ചിന്ത (Divergent)",
      "അവ്യക്തമായ ചിന്ത",
      "നിഷ്ക്രിയ ചിന്ത"
    ],
    "correct": 1
  },
  {
    "q": "പഠന പ്രക്രിയയിൽ 'കൈത്താങ്ങ്' (Scaffolding) എന്ന ആശയം മുന്നോട്ടുവെച്ചത് ആര്?",
    "options": [
      "ജീൻ പിയാഷെ",
      "ലെവ് വൈഗോട്സ്കി",
      "ബി. എഫ്. സ്കിന്നർ",
      "ജോൺ ഡൂയി"
    ],
    "correct": 1
  },
  {
    "q": "കുട്ടി സ്വന്തം തെറ്റുകൾ സ്വയം തിരുത്തി പഠിക്കുന്ന തോൺഡൈക്കിന്റെ പഠന തത്ത്വം ഏത്?",
    "options": [
      "സന്നദ്ധതാ നിയമം",
      "ശ്രമപരാജയ പഠനരീതി (Trial and Error Learning)",
      "ക്ലാസിക്കൽ കണ്ടീഷനിംഗ്",
      "ഫല നിയമം"
    ],
    "correct": 1
  },
  {
    "q": "കുട്ടിയുടെ മാനസികാരോഗ്യത്തെ ഏറ്റവും കൂടുതൽ സ്വാധീനിക്കുന്ന ഘടകം:",
    "options": [
      "സ്കൂളിലെ ഭൗതിക സാഹചര്യങ്ങൾ",
      "കുടുംബത്തിലെ സമാധാനപരമായ അന്തരീക്ഷം",
      "കളിസ്ഥലങ്ങൾ",
      "പാഠ്യപദ്ധതി"
    ],
    "correct": 1
  },
  {
    "q": "പിയാഷെയുടെ വികാസ ഘട്ടങ്ങളിൽ 'മൂർത്ത മനോവ്യാപാര ഘട്ടം' (Concrete Operational Stage) ഏതു പ്രായത്തിലാണ്?",
    "options": [
      "0 മുതൽ 2 വയസ്സ് വരെ",
      "2 മുതൽ 7 വയസ്സ് വരെ",
      "7 മുതൽ 11 വയസ്സ് വരെ",
      "11 വയസ്സിന് മുകളിൽ"
    ],
    "correct": 2
  },
  {
    "q": "മാനസിക വെല്ലുവിളികൾ നേരിടുന്ന കുട്ടികൾക്കായി സാധാരണ സ്കൂളുകളിൽ തന്നെ പ്രത്യേക സൗകര്യങ്ങൾ ഒരുക്കി നൽകുന്ന വിദ്യാഭ്യാസ രീതി:",
    "options": [
      "പ്രത്യേക വിദ്യാഭ്യാസം (Special Education)",
      "സംയോജിത വിദ്യാഭ്യാസം (Integrated Education)",
      "ഉൾപ്പെടുത്തിയുള്ള വിദ്യാഭ്യാസം (Inclusive Education)",
      "ഏകീകൃത വിദ്യാഭ്യാസം"
    ],
    "correct": 2
  },
  {
    "q": "കുട്ടി ഒരു പുതിയ ആശയത്തെ നിലവിലുള്ള അറിവിലേക്ക് മാറ്റം വരുത്താതെ ഉൾക്കൊള്ളുന്നതാണ്:",
    "options": [
      "സ്വാംശീകരണം (Assimilation)",
      "സമായോജനം (Accommodation)",
      "സമീകരണം",
      "സന്തുലനാവസ്ഥ"
    ],
    "correct": 0
  },
  {
    "q": "ഒരു അധ്യാപകൻ ക്ലാസ്സിൽ എപ്പോഴും പുഞ്ചിരിയോടെയും സൗഹൃദത്തോടെയും പെരുമാറുന്നു. ഇത് കുട്ടികളിൽ ഉണ്ടാക്കുന്നത്:",
    "options": [
      "അച്ചടക്കമില്ലായ്മ",
      "ഭയരഹിതമായ പഠനാന്തരീക്ഷം",
      "പഠന വൈമുഖ്യം",
      "അശ്രദ്ധ"
    ],
    "correct": 1
  },
  {
    "q": "കുട്ടികളിൽ കണ്ടുവരുന്ന സാമൂഹിക വിരുദ്ധ സ്വഭാവങ്ങൾക്കുള്ള പ്രധാന കാരണം:",
    "options": [
      "കൂടുതൽ പഠിക്കുന്നത്",
      "ശരിയായ മാർഗ്ഗനിർദ്ദേശത്തിന്റെയും സ്നേഹത്തിന്റെയും കുറവ്",
      "സ്കൂൾ ക്ലബ്ബുകൾ",
      "വായനാശീലം"
    ],
    "correct": 1
  },
  {
    "q": "റോബർട്ട് ഗാഗ്നെയുടെ പഠന ശ്രേണിയിൽ ഏറ്റവും താഴെയുള്ള തലം ഏതാണ്?",
    "options": [
      "ആശയ പഠനം",
      "സൂചന പഠനം (Signal Learning)",
      "തത്ത്വ പഠനം",
      "പ്രശ്നപരിഹാര പഠനം"
    ],
    "correct": 1
  },
  {
    "q": "കുട്ടികളുടെ സ്വഭാവ രൂപീകരണത്തിൽ ഏറ്റവും കൂടുതൽ സ്വാധീനിക്കുന്നത് ആര്?",
    "options": [
      "അയൽക്കാർ",
      "അധ്യാപകരും രക്ഷിതാക്കളും",
      "മാധ്യമങ്ങൾ",
      "സിനിമാ താരങ്ങൾ"
    ],
    "correct": 1
  },
  {
    "q": "ഒരു ടെസ്റ്റ് ഉദ്ദേശിച്ച കാര്യം തന്നെ കൃത്യമായി അളക്കുന്നുവെങ്കിൽ അതിനുള്ള ഗുണമാണ്:",
    "options": [
      "വിശ്വാസ്യത",
      "സാധുത (Validity)",
      "വസ്തുനിഷ്ഠത",
      "പ്രായോഗികത"
    ],
    "correct": 1
  },
  {
    "q": "കുട്ടികളിൽ കാണപ്പെടുന്ന 'ഡിസ്കാൽക്കുലിയ' (Dyscalculia) എന്തുമായി ബന്ധപ്പെട്ടിരിക്കുന്നു?",
    "options": [
      "എഴുതാനുള്ള ബുദ്ധിമുട്ട്",
      "ഗണിതക്രിയകൾ ചെയ്യാനുള്ള ബുദ്ധിമുട്ട്",
      "വായിക്കാനുള്ള ബുദ്ധിമുട്ട്",
      "സംസാര വൈകല്യം"
    ],
    "correct": 1
  },
  {
    "q": "ബാല്യകാലത്തെ വൈകാരിക വികാസവുമായി ബന്ധപ്പെട്ട ശരിയായ പ്രസ്താവന ഏത്?",
    "options": [
      "വികാരങ്ങൾ സ്ഥിരമായിരിക്കും",
      "വികാരങ്ങൾ താൽക്കാലികവും പെട്ടെന്ന് മാറുന്നതുമായിരിക്കും",
      "കുട്ടികൾക്ക് വികാരങ്ങൾ ഉണ്ടാകില്ല",
      "വികാരങ്ങൾ പ്രകടിപ്പിക്കാൻ അറിയില്ല"
    ],
    "correct": 1
  },
  {
    "q": "ബുദ്ധിയുടെ ബഹുഘടക സിദ്ധാന്തം (Multiple Intelligence Theory) ആവിഷ്കരിച്ചത് ആര്?",
    "options": [
      "ചാൾസ് സ്പിയർമാൻ",
      "ഹൊവാർഡ് ഗാർഡ്നർ",
      "ആൽഫ്രഡ് ബിനെ",
      "ലൂയിസ് തേർസ്റ്റൺ"
    ],
    "correct": 1
  },
  {
    "q": "പഠനത്തിൽ പിന്നോക്കം നിൽക്കുന്ന കുട്ടികൾക്കായി അധ്യാപകൻ നൽകേണ്ട ബോധന രീതിയാണ്:",
    "options": [
      "ശിക്ഷ നൽകുക",
      "പരിഹാര ബോധനം (Remedial Teaching)",
      "ക്ലാസ്സിൽ നിന്ന് പുറത്താക്കുക",
      "അവഗണിക്കുക"
    ],
    "correct": 1
  },
  {
    "q": "കുട്ടികളിലെ സർഗ്ഗാത്മക ചിന്തയെ പ്രോത്സാഹിപ്പിക്കാൻ അധ്യാപകന് നൽകാവുന്ന ഏറ്റവും നല്ല പ്രവർത്തനം:",
    "options": [
      "നോട്ട് കണ്ട് എഴുതാൻ പറയുക",
      "തുറന്ന ചോദ്യങ്ങളും (Open-ended questions) സ്വതന്ത്രമായ ചിന്താ പ്രവർത്തനങ്ങളും നൽകുക",
      "പാഠഭാഗങ്ങൾ മനഃപാഠമാക്കാൻ ആവശ്യപ്പെടുക",
      "ചോദ്യങ്ങൾക്ക് കൃത്യമായ ഒരൊറ്റ ഉത്തരം മാത്രം എഴുതിക്കുക"
    ],
    "correct": 1
  },
  {
    "q": "എറിക്സന്റെ വികസന സിദ്ധാന്തപ്രകാരം കൗമാരപ്രായത്തിൽ കുട്ടികൾ നേരിടുന്ന പ്രധാന പ്രതിസന്ധി:",
    "options": [
      "വിശ്വാസം അവിശ്വാസം",
      "സ്വത്വസ്ഥാപനവും വേഷക്കുഴപ്പവും (Identity vs Role Confusion)",
      "മുൻകൈയെടുക്കൽ കുറ്റബോധം",
      "അധ്വാനശീലത അപകർഷത"
    ],
    "correct": 1
  },
  {
    "q": "മാസ്ലോയുടെ ആവശ്യങ്ങളുടെ ശ്രേണിയിൽ ഏറ്റവും മുകളിലുള്ള തലം ഏത്?",
    "options": [
      "സുരക്ഷിതത്വ ആവശ്യങ്ങൾ",
      "ആത്മസാക്ഷാത്കാരം (Self-Actualization)",
      "ശാരീരിക ആവശ്യങ്ങൾ",
      "സാമൂഹിക ആവശ്യങ്ങൾ"
    ],
    "correct": 1
  },
  {
    "q": "കുട്ടികളുടെ പഠന പുരോഗതിയുടെ വിവിധ ഘട്ടങ്ങളിലെ തെളിവുകൾ ശേഖരിച്ചു വെക്കുന്ന രേഖയാണ്:",
    "options": [
      "അറ്റൻഡൻസ് രജിസ്റ്റർ",
      "പോർട്ട്ഫോളിയോ (Portfolio)",
      "ലോഗ് ബുക്ക്",
      "മാർക്ക് ലിസ്റ്റ്"
    ],
    "correct": 1
  },
  {
    "q": "ക്ലാസ്സിൽ കുട്ടികളുടെ ശ്രദ്ധ ആകർഷിക്കാൻ അധ്യാപകൻ ചെയ്യേണ്ടത്:",
    "options": [
      "ഉച്ചത്തിൽ സംസാരിച്ച് കുട്ടികളെ ഭയപ്പെടുത്തുക",
      "ശബ്ദവ്യതിയാനങ്ങളും ആംഗ്യങ്ങളും വൈവിധ്യമാർന്ന പഠനോപകരണങ്ങളും ഉപയോഗിക്കുക",
      "ക്ലാസ്സിൽ മിണ്ടാതിരിക്കാൻ കർശന നിർദ്ദേശം നൽകുക",
      "ബോർഡിൽ നോക്കി മാത്രം സംസാരിക്കുക"
    ],
    "correct": 1
  },
  {
    "q": "കുട്ടികളിൽ കണ്ടുവരുന്ന അക്രമസ്വഭാവം കുറയ്ക്കാൻ അധ്യാപകന് ചെയ്യാൻ കഴിയുന്ന അനുയോജ്യമായ മാർഗ്ഗം:",
    "options": [
      "അവരെ കഠിനമായി ശിക്ഷിക്കുക",
      "അക്രമവാസനയുടെ യഥാർത്ഥ കാരണം കണ്ടെത്തി പരിഹരിക്കാൻ ശ്രമിക്കുക",
      "സ്കൂളിൽ നിന്ന് പുറത്താക്കുക",
      "മറ്റു കുട്ടികളുടെ മുന്നിൽ വെച്ച് അപമാനിക്കുക"
    ],
    "correct": 1
  },
  {
    "q": "കോൾബർഗിന്റെ ധാർമ്മിക വികസന സിദ്ധാന്തപ്രകാരം കുട്ടികൾ നിയമങ്ങളും വ്യവസ്ഥകളും സമൂഹത്തിന്റെ നന്മയ്ക്കായി പാലിക്കുന്ന തലം ഏതാണ്?",
    "options": [
      "വ്യവസ്ഥാപിത പൂർവ്വ തലം",
      "വ്യവസ്ഥാപിത തലം (Conventional Level)",
      "വ്യവസ്ഥാപിതാനന്തര തലം",
      "അധോറിറ്റി തലം"
    ],
    "correct": 1
  },
  {
    "q": "കുട്ടികളിൽ കണ്ടുവരുന്ന 'ഡിസ്ലെക്സിയ' (Dyslexia) എന്ന പഠന വൈകല്യം താഴെ പറയുന്നവയിൽ എന്തുമായി ബന്ധപ്പെട്ടിരിക്കുന്നു?",
    "options": [
      "കണക്ക് കൂട്ടാനുള്ള ബുദ്ധിമുട്ട്",
      "വായനയുമായി ബന്ധപ്പെട്ട ബുദ്ധിമുട്ടുകൾ",
      "കൈയക്ഷരത്തിലെ തകരാറുകൾ",
      "ശാരീരിക ചലന വൈകല്യം"
    ],
    "correct": 1
  },
  {
    "q": "പഠന പുരോഗതി അറിയാൻ അധ്യാപകൻ ക്ലാസ്സ് മുറിയിൽ നടത്തുന്ന നിരന്തര മൂല്യനിർണ്ണയ രീതി ഏതാണ്?",
    "options": [
      "വാർഷിക പരീക്ഷ",
      "ഫോർമേറ്റീവ് അസ്സെസ്സ്മെന്റ് (Formative Assessment)",
      "സമ്മേറ്റീവ് അസ്സെസ്സ്മെന്റ്",
      "പൊതു പരീക്ഷ"
    ],
    "correct": 1
  },
  {
    "q": "വ്യക്തിത്വ അളക്കൽ രീതികളിൽ പ്രധാനപ്പെട്ട ഒന്നായ 'തീമാറ്റിക് അപ്പർസെപ്ഷൻ ടെസ്റ്റ്' (TAT) ഏതു വിഭാഗത്തിൽപ്പെടുന്നു?",
    "options": [
      "വസ്തുനിഷ്ഠ രീതി",
      "പ്രക്ഷേപണ രീതി (Projective Method)",
      "വ്യക്തിനിഷ്ഠ രീതി",
      "സാമൂഹിക രീതി"
    ],
    "correct": 1
  },
  {
    "q": "പരസ്പരം ബന്ധപ്പെട്ട വസ്തുതകളും ആശയങ്ങളും പൊതുവിജ്ഞാനത്തിന്റെ ഭാഗമാണ്. ഇത് ഏത് തരം ഓർമ്മയാണ് ?",
    "options": [
      "എപ്പിസോഡിക്",
      "explicit memory",
      "implicit memory",
      "Semantic Memories."
    ],
    "correct": 3
  },
  {
    "q": "താഴെ പറയുന്നവയിൽ പിയാഷെയുടെ പഠന സദ്ധാന്തവുമായി പൊരുത്തപ്പെടാത്തത് ഏത് ?",
    "options": [
      "കുട്ടിയുടെ അനുഭവങ്ങളിലൂടെയാണ് അറിവ് നിർമ്മിക്കപ്പെടുന്നത്",
      "ഇച്ഛാപൂർവം നടക്കുന്ന പ്രവർനമാണ് പഠനം",
      "നിലവിലുള്ള വൈജ്ഞാനിക ഘടന- യുമായി സമരസപ്പെടുന്ന ഏത് വിജ്ഞാനഘടകവും നിരർത്ഥകമായി അനുഭവപ്പെടും.",
      "പഠനയും ജീവിത വികാസവും ഒരു ജീവശാസ്ത്രപ്രക്രിയയാണ്"
    ],
    "correct": 2
  },
  {
    "q": "നിങ്ങളുടെ പ്രൈമറിക്ലാസിലെ ഒരു കുട്ടി എപ്പോഴും കളികളിൽ വിമുഖതകാണിക്കുന്നു.'- ഈ കുട്ടിയെ പഠിക്കാൻ ഏറ്റവും അനുയോജ്യമായ മനഃശാസ്ത്ര പഠന രീതി :",
    "options": [
      "വ്യക്തിപഠനം",
      "അഭിമുഖം",
      "സർവേ",
      "നിരീക്ഷണം."
    ],
    "correct": 3
  },
  {
    "q": "താഴെ കൊടുത്തിരിക്കുന്നവയിൽ ശരിയായി ചേർത്തിരിക്കുന്ന ജോഡി ഏത് ?",
    "options": [
      "ഹയർ ഓർഡർ കണ്ടീഷനിംഗ് ....പാവ്ലോവ്",
      "പഠനത്തിന്റെ ഘടന .... സ്കിന്നർ",
      "ഓപ്പറന്റ് കണ്ടീഷനിംഗ് .... തോൺഡൈക്ക്",
      "ശ്രമപരാജയ പഠനം .... വൈഗോഡ്സ്കി"
    ],
    "correct": 0
  },
  {
    "q": "പഠിതാവ് തൻ്റെ മുൻകാല അനുഭവങ്ങൾ പുതിയ അറിവുമായി സമന്വയിപ്പിച്ച് അറിവ് നിർമ്മിക്കുന്ന പ്രക്രിയയെ പറയുന്ന പേര്:",
    "options": [
      "ബിഹേവിയറിസം",
      "കൺസ്ട്രക്റ്റിവിസം (Constructivism)",
      "ഹ്യൂമനിസം",
      "ഫങ്ഷണലിസം"
    ],
    "correct": 1
  },
  {
    "q": "താഴെ പറയുന്നവയിൽ ഏതാണ് മന്ദപഠിതാക്കളായ (Slow Learners) കുട്ടികളുടെ പ്രധാന സവിശേഷത?",
    "options": [
      "ഉയർന്ന ബുദ്ധിശക്തി",
      "ലളിതമായ ആശയങ്ങൾ ഗ്രഹിക്കുന്നതിലെ പതുക്കെയുള്ള നിരക്ക്",
      "അസാധാരണമായ ഓർമ്മശക്തി",
      "തീവ്രമായ ഏകാഗ്രത"
    ],
    "correct": 1
  } 
    ];

    let current = 0, score = 0;
    let userAnswers = new Array(quizData.length).fill(null);
    let isMockMode = true; // Defaulting to Mock Mode

    const elements = {
        modeBtn: document.getElementById('mode-btn'),
        qText: document.getElementById('question-text'),
        optionsGrid: document.getElementById('options-grid'),
        nextBtn: document.getElementById('next-btn'),
        prevBtn: document.getElementById('back-btn'),
        progressBar: document.getElementById('progress-bar'),
        qNum: document.getElementById('question-number'),
        scoreBadge: document.getElementById('score-badge'),
        resModal: document.getElementById('result-modal'),
        soundCorrect: document.getElementById('sound-correct'),
        soundWrong: document.getElementById('sound-wrong')
    };

    // Mode Toggle Logic
    elements.modeBtn.onclick = () => {
        isMockMode = !isMockMode;
        if (isMockMode) {
            elements.modeBtn.textContent = "Change to Study Mode";
            elements.modeBtn.className = "btn-mode-mock";
        } else {
            elements.modeBtn.textContent = "Change to Mock Test Mode";
            elements.modeBtn.className = "btn-mode-study";
        }
        resetQuiz();
    };

    function resetQuiz() {
        current = 0; score = 0;
        userAnswers = new Array(quizData.length).fill(null);
        elements.scoreBadge.textContent = "Score: 0";
        elements.scoreBadge.style.visibility = isMockMode ? "visible" : "hidden";
        loadQuestion();
    }

    function loadQuestion() {
        const data = quizData[current];
        const hasAnswered = userAnswers[current] !== null;

        elements.qText.textContent = data.q;
        elements.qNum.textContent = `Question ${current + 1}/${quizData.length}`;
        elements.progressBar.style.width = `${((current + 1) / quizData.length) * 100}%`;
        elements.optionsGrid.innerHTML = '';

        data.options.forEach((opt, i) => {
            const btn = document.createElement('button');
            btn.className = 'opt-btn';
            btn.textContent = opt;

            if (!isMockMode) {
                // Study Mode: Immediate Correct Answer
                if (i === data.correct) btn.classList.add('correct');
            } else if (hasAnswered) {
                // Mock Mode: Feedback after submission
                btn.disabled = true;
                if (i === data.correct) btn.classList.add('correct');
                if (userAnswers[current] === i && i !== data.correct) btn.classList.add('wrong');
                if (userAnswers[current] === i) btn.classList.add('selected');
            } else {
                btn.onclick = () => {
                    Array.from(elements.optionsGrid.children).forEach(b => b.classList.remove('selected'));
                    btn.classList.add('selected');
                    elements.nextBtn.disabled = false;
                };
            }
            elements.optionsGrid.appendChild(btn);
        });

        if (!isMockMode) {
            elements.nextBtn.textContent = (current === quizData.length - 1) ? "Finish Study" : "Next";
            elements.nextBtn.disabled = false;
        } else {
            elements.nextBtn.textContent = hasAnswered ? (current === quizData.length - 1 ? "Finish" : "Next") : "Submit";
            elements.nextBtn.disabled = !hasAnswered;
        }
        elements.prevBtn.disabled = current === 0;
    }

    function handleAction() {
        if (isMockMode) {
            if (userAnswers[current] === null) {
                const selected = Array.from(elements.optionsGrid.children).findIndex(b => b.classList.contains('selected'));
                userAnswers[current] = selected;
                if (selected === quizData[current].correct) {
                    score++; elements.soundCorrect.play();
                } else { elements.soundWrong.play(); }
                elements.scoreBadge.textContent = `Score: ${score}`;
                loadQuestion();
            } else if (current < quizData.length - 1) {
                current++; loadQuestion();
            } else { showResults(); }
        } else {
            if (current < quizData.length - 1) { current++; loadQuestion(); }
            else { location.reload(); }
        }
    }

    function showResults() {
        const percent = Math.round((score / quizData.length) * 100);
        document.getElementById('res-total').textContent = quizData.length;
        document.getElementById('res-correct').textContent = score;
        document.getElementById('res-wrong').textContent = quizData.length - score;
        document.getElementById('result-percent').textContent = percent + "%";
        elements.resModal.style.display = 'flex';
    }

    elements.nextBtn.onclick = handleAction;
    elements.prevBtn.onclick = () => { if (current > 0) { current--; loadQuestion(); } };

    loadQuestion();
});
