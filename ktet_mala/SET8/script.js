document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
  {
    "q": "എട്ടാം ക്ലാസ്സിൽ പഠിക്കുന്ന അനുവിന് രസതന്ത്രത്തിലെ സമവാക്യങ്ങൾ സമീകരിക്കുന്നതിന് മിക്കപ്പോഴും പ്രയാസം നേരിടുന്നു. പിയാഷെയുടെ സിദ്ധാന്തമനുസരിച്ച് അവന് എന്തു ന്യൂനതയാണുള്ളത് ?",
    "options": [
      "വസ്തു‌സ്ഥിരത",
      "കൺസർവേറ്റിസം",
      "പ്രത്യാവർത്തന ചിന്ത.",
      "യുക്തിപരമായ ചിന്ത"
    ],
    "correct": 2
  },
  {
    "q": "സ്വയം വിലയിരുത്തലിന്റെ ഭാഗമായി കുട്ടികൾ ലേർണിംഗ് കർവ് വരയ്ക്കുന്ന വേളയിൽ ഭൂരിഭാഗം കുട്ടികളുടെ ഗ്രാഫിലും സമപീഠസ്ഥലികൾ കൂടുതലായി കാണപ്പെട്ടു. താഴെ പറയുന്നവയിൽ ഏറ്റവും അനുയോജ്യമായ കാരണമേത് ?",
    "options": [
      "ബോധനരീതിയുടെ പോരായ്മ",
      "നൂതനമായ ബോധനരീതികൾ",
      "യഥാർത്ഥ നിലയിലുള്ള ഉൽക്കർഷേച്ഛ",
      "ഉന്നതനിലയിലുള്ള അഭിപ്രേരണ."
    ],
    "correct": 0
  },
  {
    "q": "അപ്പർ പ്രൈമറി വിദ്യാർത്ഥിയായ ഷിജു, ഗണിതത്തിൽ കണക്കുകൂട്ടലുകൾ നടത്തുമ്പോൾ എപ്പോഴും അക്കങ്ങളുടെ സ്ഥാനവില തെറ്റിച്ചു കാണിക്കുന്നു. താഴെ പറയുന്നവയിൽ ഏതുതരം പഠനവൈകല്യമാണ് ഷിജുവിനുള്ളത് ?",
    "options": [
      "ഡിസ് ഗ്രാഫിയ",
      "ഡിസ് നോമിയ",
      "ഡിസ് കാൽകുലിയ.",
      "ഡിസ്ഗ്രാഫിയ"
    ],
    "correct": 2
  },
  {
    "q": "കൗമാരക്കാരൻ്റെ സമൂഹ്യവികാസത്തിൻ്റെ ഒരു സവിശേഷതയല്ലാത്തത് ഏത് ?",
    "options": [
      "സമപ്രായക്കാരുടെ സംഘങ്ങളോട് കൂടുതൽ ആഭിമുഖ്യം പുലർത്തുക.",
      "പെരുമാറ്റത്തിലും പ്രവർത്തനങ്ങളിലും അനുകരണസ്വഭാവം കാണിക്കുക",
      "കുടുംബാഗങ്ങളോട് കൂടുതൽ മാനസിക അടുപ്പം കാണിക്കുക",
      "ലിംഗവ്യത്യാസം അനുസരിച്ചുള്ള സംഘങ്ങൾ രൂപീകരിക്കുക"
    ],
    "correct": 2
  },
  {
    "q": "ഒരു അധ്യാപകൻ തൻ്റെ ക്ലാസ്സിലെ വികാസ പിന്നോക്കാവസ്ഥ നേരിടുന്ന ഒരു കുട്ടിയുടെ സാമൂഹ്യബന്ധങ്ങൾ അറിയാൻ ഉദ്ദേശിക്കുന്നു. ഏതു രീതിയാണ് കൂടുതൽ അനുയോജ്യം ?",
    "options": [
      "അഭിമുഖം",
      "നിരീക്ഷണം",
      "കേസ് പഠനം",
      "സോഷ്യോമെട്രി."
    ],
    "correct": 3
  },
  {
    "q": "ചുവടെ കൊടുത്തിരിക്കുന്നവയിൽ ലെവ് വൈഗോട്സ്കിയുടെ വൈജ്ഞാനിക വികാസ സിദ്ധാന്തത്തിന്റെ ഒരു അടിസ്ഥാന ആശയമല്ലാത്തത് ഏത് ?",
    "options": [
      "സാമൂഹിക ഇടപെടലുകൾ",
      "സംസ്‌കാരം",
      "ഭാഷ",
      "ജൈവിക പക്വത."
    ],
    "correct": 3
  },
  {
    "q": "അറിവ് നിർമ്മാണ പ്രക്രിയയിൽ പഠിതാവ് പുതിയ അറിവിനെ തൻ്റെ വൈജ്ഞാനിക ഘടനയിലുള്ള (Schema) അറിവുകളിലേക്ക് യാതൊരു മാറ്റവും വരുത്താതെ ഉൾക്കൊള്ളുന്ന പ്രക്രിയയ്ക്ക് പിയാഷെ നൽകിയ പേര് എന്ത് ?",
    "options": [
      "സ്വാംശീകരണം (Assimilation).",
      "സമായോജനം (Accommodation)",
      "സന്തുലിതാവസ്ഥ",
      "സമീകരണ പ്രക്രിയ"
    ],
    "correct": 0
  },
  {
    "q": "പഠനത്തിൽ ചോദകവും പ്രതികരണവും (S-R) തമ്മിലുള്ള ബന്ധം ആവർത്തനത്തിലൂടെയും പരിശീലനത്തിലൂടെയും ദൃഢപ്പെടുന്നു എന്ന തോൺഡൈക്കിൻ്റെ പഠന നിയമം ഏത് ?",
    "options": [
      "സന്നദ്ധതാ നിയമം",
      "പരിശീലന നിയമം (Law of Exercise).",
      "ഫല നിയമം",
      "പ്രബലന നിയമം"
    ],
    "correct": 1
  },
  {
    "q": "പ്രൊജക്ട് രീതിയുടെ (Project Method) അടിസ്ഥാന തത്ത്വങ്ങളിൽ ഉൾപ്പെടാത്തത് ഏത് ?",
    "options": [
      "ഉദ്ദേശ്യപൂർണ്ണത",
      "പ്രവർത്തന തത്ത്വം",
      "യാഥാർത്ഥ്യ തത്ത്വം",
      "അധ്യാപക കേന്ദ്രീകൃത തത്ത്വം."
    ],
    "correct": 3
  },
  {
    "q": "വ്യത്യസ്ത സാഹചര്യങ്ങളിൽ ഒരേ ചോദകത്തിന് വ്യത്യസ്തമായ രീതിയിൽ പ്രതികരിക്കാൻ പഠിക്കുന്ന പഠന പ്രക്രിയയ്ക്ക് പറയുന്ന പേര് എന്ത് ?",
    "options": [
      "ചോദക വിവേചനം (Stimulus Discrimination).",
      "ചോദക സാമാന്യവൽക്കരണം",
      "പെട്ടെന്നുള്ള തിരിച്ചുവരവ്",
      "വിലോപനം"
    ],
    "correct": 0
  },
  {
    "q": "ഒരു കുട്ടിയുടെ യഥാർത്ഥ വികാസ തലവും (Actual Development Level) കൈത്താങ്ങിലൂടെ കൈവരിക്കാൻ കഴിയുന്ന സാധ്യതാ വികാസ തലവും തമ്മിലുള്ള വ്യത്യാസത്തെ വൈഗോട്സ്കി വിശേഷിപ്പിച്ചത് എന്ത് പേര് നൽകിയാണ് ?",
    "options": [
      "സാധ്യതാ വികാസ മേഖല",
      "ആന്തരിക വികാസ മേഖല",
      "സമീപസ്ഥ വികാസ മേഖല (Zone of Proximal Development).",
      "ബാഹ്യ വികാസ മേഖല"
    ],
    "correct": 2
  },
  {
    "q": "വ്യക്തിത്വ അളക്കൽ രീതികളിൽ ഒന്നായ 'തീമാറ്റിക് അപ്പർസെപ്ഷൻ ടെസ്റ്റ്' (TAT) ആവിഷ്കരിച്ചത് ആര് ?",
    "options": [
      "ഹെർമൻ റോഷാ",
      "മറെയും മോർഗനും (Murray and Morgan).",
      "ഓൾപോർട്ട്",
      "കാറ്റൽ"
    ],
    "correct": 1
  },
  {
    "q": "താഴെ പറയുന്നവയിൽ ഏതാണ് ഉൾക്കാഴ്ചാ പഠനവുമായി (Insightful Learning) കൂടുതൽ ബന്ധപ്പെട്ടിരിക്കുന്നത് ?",
    "options": [
      "പെട്ടെന്നുണ്ടാകുന്ന ആശയ രൂപീകരണം (Sudden flash of ideas).",
      "തുടർച്ചയായ പരിശീലനം",
      "അനുകരണം",
      "ബാഹ്യമായ പ്രബലനങ്ങൾ"
    ],
    "correct": 0
  },
  {
    "q": "ബുദ്ധിയുടെ ബഹുഘടക സിദ്ധാന്തം (Group Factor Theory) അവതരിപ്പിച്ചത് ആര് ?",
    "options": [
      "ചാൾസ് സ്പിയർമാൻ",
      "ലൂയിസ് തേർസ്റ്റൺ (Thurstone).",
      "എഡ്വേർഡ് തോൺഡൈക്ക്",
      "ജെ. പി. ഗിൽഫോർഡ്"
    ],
    "correct": 1
  },
  {
    "q": "കുട്ടികളുടെ സാമൂഹികവൽക്കരണത്തിൽ (Socialization) ഏറ്റവും പ്രധാനപ്പെട്ട പങ്കുവഹിക്കുന്ന പ്രാഥമിക ഏജൻസി ഏതാണ് ?",
    "options": [
      "സ്കൂൾ",
      "മാധ്യമങ്ങൾ",
      "കുടുംബം (Family).",
      "കൂട്ടുകാർ"
    ],
    "correct": 2
  },
  {
    "q": "പഠന പ്രക്രിയയിൽ കുട്ടികൾക്ക് നൽകുന്ന താൽക്കാലികമായ സഹായങ്ങളെ (Hints, Clues) വൈഗോട്സ്കി വിശേഷിപ്പിച്ചത് എന്ത് പേര് നൽകിയാണ് ?",
    "options": [
      "സ്കീമ (Schema)",
      "കൈത്താങ്ങ് (Scaffolding).",
      "രൂപപ്പെടുത്തൽ (Shaping)",
      "പ്രബലനം"
    ],
    "correct": 1
  },
  {
    "q": "താഴെ പറയുന്നവയിൽ ബാല്യകാലത്തിന്റെ (Childhood) സവിശേഷതയല്ലാത്തത് ഏതാണ് ?",
    "options": [
      "അറിയാനുള്ള തീവ്രമായ ആഗ്രഹം (Curiosity)",
      "കൂട്ടുകൂടാനുള്ള താല്പര്യം",
      "അനുകരണ സ്വഭാവം",
      "തീവ്രമായ സ്വത്വ പ്രതിസന്ധി (Identity Crisis)."
    ],
    "correct": 3
  },
  {
    "q": "തോൺഡൈക്ക് തന്റെ പഠന പരീക്ഷണങ്ങൾക്കായി ഉപയോഗിച്ച മൃഗം ഏതാണ് ?",
    "options": [
      "നായ",
      "പൂച്ച.",
      "എലി",
      "ചിമ്പാൻസി"
    ],
    "correct": 1
  },
  {
    "q": "റോബർട്ട് ഗാഗ്നെയുടെ പഠന ശ്രേണിയിലെ (Hierarchy of Learning) ഏറ്റവും ഉയർന്ന തലം ഏതാണ് ?",
    "options": [
      "ചോദക പ്രതികരണ പഠനം",
      "ആശയ പഠനം",
      "തത്ത്വ പഠനം",
      "പ്രശ്ന പരിഹാര പഠനം (Problem Solving)."
    ],
    "correct": 3
  },
  {
    "q": "രാജേഷിന് വാക്കുകൾ കേട്ട് എഴുതുമ്പോഴെല്ലാം അക്ഷരങ്ങളും പദങ്ങളും വിട്ടുപോകുന്നു. വരികളും അക്ഷരങ്ങളുടെ അകലവും പാലിക്കാൻ കഴിയുന്നില്ല. രാജേഷിന് ഏത് തരം പഠന വൈകല്യം ഉണ്ടെന്നാണ് നിങ്ങൾ കരുതുന്നത് ?",
    "options": [
      "ലേഖന വൈകല്യം (Dysgraphia).",
      "വായന വൈകല്യം",
      "ഗണന വൈകല്യം",
      "പ്രയോഗ വൈകല്യം"
    ],
    "correct": 0
  },
  {
    "q": "വൈകല്യമുള്ള ഓരോ കുട്ടിക്കും പതിനെട്ട് വയസ്സ് പൂർത്തിയാകുന്നതുവരെ അനുയോജ്യമായ സൗജന്യ വിദ്യാഭ്യാസം ഉറപ്പു വരുത്തേണ്ടതാണ്' എന്ന് ഉറപ്പു നൽകുന്ന നിയമം ഏത് ?",
    "options": [
      "റിഹാബിലിറ്റേഷൻ കൗൺസിൽ ഓഫ് ഇന്ത്യ ആക്ട് - 1992",
      "നാഷണൽ ട്രസ്റ്റ് ആക്‌ട് - 1999",
      "മെന്റൽ ഹെൽത്ത് ആക്ട് - 1987",
      "പേഴ്സൺ വിത്ത് ഡിസെബിലിറ്റീസ് (PWD) - 1995."
    ],
    "correct": 3
  },
  {
    "q": "സിനെക്റ്റിക്സ്, മസ്തിഷ്‌ക പ്രക്ഷാളനം, നാടകീകരണ തന്ത്രങ്ങൾ എന്നിവ അധ്യാപകർ കുട്ടികളിലെ ഏത് കഴിവ് വർദ്ധിപ്പിക്കുന്നതിനാണ് ഉപയോഗിക്കുന്നത് ?",
    "options": [
      "അധിവിജ്ഞാനം",
      "ബുദ്ധി",
      "സർഗ്ഗാത്മകത.",
      "അഭിരുചി"
    ],
    "correct": 2
  },
  {
    "q": "മാനസിക വെല്ലുവിളികൾ നേരിടുന്ന കുട്ടികൾക്കായി സാധാരണ സ്കൂളുകളിൽ തന്നെ പ്രത്യേക സൗകര്യങ്ങൾ ഒരുക്കി നൽകുന്ന വിദ്യാഭ്യാസ രീതി:",
    "options": [
      "പ്രത്യേക വിദ്യാഭ്യാസം",
      "সংയോജിത വിദ്യാഭ്യാസം",
      "ഉൾപ്പെടുത്തിയുള്ള വിദ്യാഭ്യാസം (Inclusive Education).",
      "ഏകീകൃത വിദ്യാഭ്യാസം"
    ],
    "correct": 2
  },
  {
    "q": "സിഗ്മണ്ട് ഫ്രോയിഡിന്റെ അഭിപ്രായത്തിൽ ഏത് വ്യക്തിത്വഘടനയാണ് \"ധാർമ്മികതയുടെ ആയുധം\" എന്നറിയപ്പെടുന്നത് ?",
    "options": [
      "ഇദ്",
      "ഈഗോ",
      "സൂപ്പർ ഈഗോ.",
      "ലിബിഡോ"
    ],
    "correct": 2
  },
  {
    "q": "ആൽബർട്ട് ബന്ദുര മുന്നോട്ടുവെച്ച പഠന സിദ്ധാന്തം ഏതാണ് ?",
    "options": [
      "ക്ലാസിക്കൽ കണ്ടീഷനിംഗ്",
      "ഓപ്പറന്റ് കണ്ടീഷനിംഗ്",
      "സാമൂഹിക പഠന സിദ്ധാന്തം (Social Learning Theory).",
      "ഉൾക്കാഴ്ചാ പഠന സിദ്ധാന്തം"
    ],
    "correct": 2
  },
  {
    "q": "പഠന പ്രക്രിയയിൽ 'ലാൻഗ്വേജ് അക്വിസിഷൻ ഡിവൈസ്' (LAD) എന്ന ആശയം മുന്നോട്ടുവെച്ചത് ആര് ?",
    "options": [
      "ലെവ് വൈഗോട്സ്കി",
      "നോം ചോംസ്കി.",
      "ജീൻ പിയാഷെ",
      "ബി. എഫ്. സ്കിന്നർ"
    ],
    "correct": 1
  },
  {
    "q": "ഒരു കുട്ടിയുടെ മാനസിക വയസ്സ് (MA) 8 ഉം കാലിക വയസ്സ് (CA) 10 ഉം ആണെങ്കിൽ കുട്ടിയുടെ ബുദ്ധിമാനം (IQ) എത്രയായിരിക്കും ?",
    "options": [
      "80.",
      "100",
      "120",
      "125"
    ],
    "correct": 0
  },
  {
    "q": "എബ്രഹാം മാസ്ലോയുടെ ആവശ്യങ്ങളുടെ ശ്രേണിയിലെ ഏറ്റവും അടിസ്ഥാനപരമായ ആവശ്യം ഏതാണ് ?",
    "options": [
      "സുരക്ഷിതത്വ ആവശ്യങ്ങൾ",
      "ശാരീരിക ആവശ്യങ്ങൾ (Physiological Needs).",
      "ആദരിക്കപ്പെടാനുള്ള ആവശ്യങ്ങൾ",
      "ആത്മസാക്ഷാത്കാരം"
    ],
    "correct": 1
  },
  {
    "q": "കുട്ടികളിൽ കാണപ്പെടുന്ന വായനയുമായി ബന്ധപ്പെട്ട പഠന വൈകല്യത്തെ പറയുന്ന പേര് :",
    "options": [
      "ഡിസ്ഗ്രാഫിയ",
      "ഡിസ്ലെക്സിയ (Dyslexia).",
      "ഡിസ്കാൽക്കുലിയ",
      "അഫാസിയ"
    ],
    "correct": 1
  },
  {
    "q": "നിരന്തര മൂല്യനിർണ്ണയത്തിന് (Formative Evaluation) ഏറ്റവും അനുയോജ്യമായ ഉപാധി ഏതാണ് ?",
    "options": [
      "ടേം പരീക്ഷ",
      "വാർഷിക പരീക്ഷ",
      "പോർട്ട്ഫോളിയോ (Portfolio).",
      "പൊതു പരീക്ഷ"
    ],
    "correct": 2
  },
  {
    "q": "ഒരു കുട്ടിയുടെ വികാസം ശിരോഭാഗത്തു നിന്നും തുടങ്ങി പാദഭാഗങ്ങളിലേക്ക് വ്യാപിക്കുന്ന വികാസ തത്വം ഏതാണ് ?",
    "options": [
      "പ്രോക്സിമോഡിസ്റ്റൽ",
      "സെഫാലോകോഡൽ (Cephalocaudal).",
      "തുടർ പ്രക്രിയ തത്വം",
      "വ്യതിരിക്തത തത്വം"
    ],
    "correct": 1
  },
  {
    "q": "തൻ്റെ പരീക്ഷാ പരാജയത്തിന് കാരണം ചോദ്യപേപ്പറിന്റെ കാഠിന്യമാണെന്ന് കുട്ടി വാദിക്കുന്നു. ഇവിടെ കുട്ടി ഉപയോഗിച്ച പ്രതിരോധ തന്ത്രം ഏതാണ് ?",
    "options": [
      "യുക്തീകരണം (Rationalization).",
      "പ്രക്ഷേപണം",
      "വിസ്ഥാപനം",
      "പ്രതിപൂർത്തീകരണം"
    ],
    "correct": 0
  },
  {
    "q": "ക്ലാസ്സിൽ കുട്ടികളുടെ ചിന്താശേഷിയും സർഗ്ഗാത്മകതയും വളർത്തുന്നതിനായി അധ്യാപകർ ഉപയോഗിക്കുന്ന 'മസ്തിഷ്ക പ്രക്ഷാളനം' (Brainstorming) എന്ന തന്ത്രം ആവിഷ്കരിച്ചത് ആര് ?",
    "options": [
      "അലക്സ് ഓസ്ബോൺ.",
      "ബി. എഫ്. സ്കിന്നർ",
      "ഇവാൻ പാവ്‌ലോവ്",
      "ജീൻ പിയാഷെ"
    ],
    "correct": 0
  },
  {
    "q": "റോബർട്ട് ഗാഗ്നെയുടെ പഠന ശ്രേണി സിദ്ധാന്തപ്രകാരം, ഏറ്റവും ലളിതമായ പഠന രൂപം ഏതാണ് ?",
    "options": [
      "ചോദക പ്രതികരണ പഠനം",
      "ആശയ പഠനം",
      "സൂചന പഠനം (Signal Learning).",
      "തത്ത്വ പഠനം"
    ],
    "correct": 2
  },
  {
    "q": "തോൺഡൈക്കിൻ്റെ പഠന നിയമങ്ങളിൽ 'ഒരു പഠനാനുഭവം സംതൃപ്തി നൽകുന്നതാണെങ്കിൽ പഠനം ശക്തിപ്പെടുന്നു' എന്ന ആശയത്തോട് യോജിക്കുന്ന നിയമം ഏതാണ് ?",
    "options": [
      "സന്നദ്ധതാ നിയമം",
      "പരിശീലന നിയമം",
      "ഫല നിയമം (Law of Effect).",
      "പ്രബലന നിയമം"
    ],
    "correct": 2
  },
  {
    "q": "വിദ്യാർത്ഥിയുടെ സവിശേഷ സ്വഭാവങ്ങളെയും പശ്ചാത്തലത്തെയും കുറിച്ച് ആഴത്തിൽ പഠിക്കാൻ അധ്യാപിക നടത്തുന്ന മനഃശാസ്ത്ര പഠന രീതിയാണ് :",
    "options": [
      "സർവേ രീതി",
      "കേസ് സ്റ്റഡി (Case Study).",
      "സോഷ്യോമെട്രി",
      "പരീക്ഷണ രീതി"
    ],
    "correct": 1
  },
  {
    "q": "താഴെ പറയുന്നവയിൽ ഏതാണ് കൗമാരപ്രായത്തിന്റെ (Adolescence) ഏറ്റവും പ്രധാനപ്പെട്ട വൈകാരിക സവിശേഷത ?",
    "options": [
      "വസ്തു സ്ഥിരത",
      "സ്വത്വ പ്രതിസന്ധി (Identity Crisis).",
      "സർവ്വചേതനവാദം",
      "അനുകരണം മാത്രം കാണിക്കൽ"
    ],
    "correct": 1
  },
  {
    "q": "ഒരു കുട്ടിയുടെ മാനസിക വയസ്സും കാലിക വയസ്സും തുല്യമായാൽ കുട്ടിയുടെ ബുദ്ധിമാനം (IQ) എത്രയായിരിക്കും ?",
    "options": [
      "90",
      "110",
      "100.",
      "100 ൽ കുറവ് ആയിരിക്കും"
    ],
    "correct": 2
  },
  {
    "q": "ശ്രമപരാജയ സിദ്ധാന്തത്തിൽ നിന്ന് അറിയാൻ കഴിയുന്നത്.",
    "options": [
      "പഠനം ആകസ്‌മികമായി സംഭവിക്കുന്നതാണ്",
      "ധാരാളം പ്രതികരണങ്ങളിൽ നിന്ന് ആവർത്തിച്ചുള്ള ശ്രമങ്ങൾക്ക് ഒടുവിൽ ശരിയായ പ്രതികരണം തെരഞ്ഞെടുക്കുന്നു",
      "ব্যക്തി (ജീവി) വിജയത്തിൽ എത്തുന്നത് സാവധാനമാണ്",
      "മുകളിൽപ്പറഞ്ഞവ എല്ലാം."
    ],
    "correct": 1
  },
  {
    "q": "ക്ലാസ്സിക്കൽ കണ്ടീഷനിംഗിൽ, കണ്ടീഷണൽ പ്രതികരണവും കണ്ടീഷണൽ അല്ലാത്ത പ്രതികരണവും :",
    "options": [
      "ഒന്നു തന്നെ (Same).",
      "വ്യത്യസ്തമാണ്",
      "ഒന്നുതന്നെയുമാകാം, വ്യത്യസ്തവുമാകാം",
      "വളരെ വ്യത്യസ്തമായിരിക്കും"
    ],
    "correct": 0
  },
  {
    "q": "\"സ്കീമാ' എന്നറിയപ്പെടുന്ന നിലവിലുള്ള വൈജ്ഞാനിക ഘടനയിലേയ്ക്ക് പുതിയ അറിവുകളേയും അനുഭവങ്ങളേയും കൂട്ടിച്ചേർത്തുകൊണ്ടും, നിലവിലുള്ള വൈജ്ഞാനിക ഘടകത്തിന്റെ പരിവർത്തനം കൊണ്ടുമാണ് അറിവ് രൂപീകരിക്കപ്പെടുന്നത്. ഇത് ആരുടെ വാക്കുകളാണ് ?",
    "options": [
      "ജറോം എസ്സ്. ബ്രൂണർ",
      "പിയാഷെ.",
      "വൈഗോട്സ്കി",
      "ചോംസ്ക‌ി"
    ],
    "correct": 1
  },
  {
    "q": "'യഥാർത്ഥത്തിൽ ഇതിനെ ഒരു പ്രത്യേക അവസ്ഥയായി കരുതാൻ പറ്റില്ല. എന്നാൽ, ക്രമാതീതമായ അസ്വസ്ഥതയും വൈകാരികസംഘർഷങ്ങളും ഈ ഘട്ടത്തിന്റെ പ്രത്യേകതയാണ്'. സ്റ്റാൻലി ഹാളിൻ്റെ ഈ വാക്കുകൾ ഏതു ഘട്ടത്തെക്കുറിച്ചാണ് ?",
    "options": [
      "ശൈശവകാലം",
      "ബാല്യകാലം",
      "കൗമാരകാലം.",
      "മുതിർന്നകാലം"
    ],
    "correct": 2
  },
  {
    "q": "ഒരു കുട്ടി തൻ്റെ കളിപ്പാട്ടങ്ങൾ മറ്റുള്ളവർക്ക് പങ്കുവെക്കാൻ വിസമ്മതിക്കുകയും അത് തന്റേതു മാത്രമാണെന്ന് വാദിക്കുകയും ചെയ്യുന്നു. പിയാഷെയുടെ വൈജ്ഞാനിക വികാസ സിദ്ധാന്തപ്രകാരം ഇത് കുട്ടിയുടെ ഏത് പരിമിതിയാണ് സൂചിപ്പിക്കുന്നത്?",
    "options": [
      "സർവ്വചേതനവാദം",
      "ആത്മകേന്ദ്രീകൃത ചിന്ത (Egocentrism).",
      "ഉഭയദിശാ ചിന്താശേഷി",
      "സംരക്ഷണം"
    ],
    "correct": 1
  },
  {
    "q": "താഴെ പറയുന്നവയിൽ ഏതാണ് മാനസിക വെല്ലുവിളികൾ നേരിടുന്ന കുട്ടികളുടെ പ്രധാന സവിശേഷത?",
    "options": [
      "ഉയർന്ന സർഗ്ഗാത്മകത",
      "വേഗതയേറിയ പഠനശേഷി",
      "സാമൂഹികവും വൈകാരികവുമായ പൊരുത്തക്കേടുകൾ",
      "ലളിതമായ കാര്യങ്ങൾ ഗ്രഹിക്കുന്നതിലെ മന്ദത."
    ],
    "correct": 3
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
