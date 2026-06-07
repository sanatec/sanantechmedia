document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
  {
    "q": "ഫ്രോയിഡിന്റെ അഭിപ്രായത്തിൽ ഏത് വ്യക്തിത്വഘടനയാണ് \"സന്തോഷ തത്വത്തിൽ” അതിഷ്ഠിതമായി പ്രവർത്തിക്കുന്നത് ?",
    "options": [
      "സൂപ്പർ ഈഗോ",
      "ഈഗോ",
      "ഇദ്",
      "ലിബിഡോ"
    ],
    "correct": 2
  },
  {
    "q": "താഴെ പറയുന്നവയിൽ ഏറ്റവും വസ്‌തു നിഷ്‌ഠമായ മനഃശാസ്ത്രപഠന രീതി :",
    "options": [
      "അന്തർ നിരീക്ഷണം",
      "നിരീക്ഷണം",
      "അഭിമുഖം",
      "മനഃശാസ്ത്രശോധകങ്ങൾ."
    ],
    "correct": 3
  },
  {
    "q": "താഴെ കൊടുത്തിരിക്കുന്നവയിൽ സമായോജന പഠിതാവിൻ്റെ ലക്ഷണങ്ങളിൽ പെടാത്തത് ഏത് ?",
    "options": [
      "ലോകത്തെക്കുറിച്ചുള്ള യഥാർത്ഥമായ അവബോധം.",
      "ഒറ്റപ്പെട്ട സാഹചര്യവുമായി പൊരുതാനുള്ള കഴിവ്.",
      "കുറ്റം കണ്ടെത്താനും നിരൂപണം നടത്താനുമുള്ള മനോഭാവം.",
      "തന്റെ ശക്തിയും ദൗർബല്യവും തിരിച്ചറിയുക."
    ],
    "correct": 2
  },
  {
    "q": "മൂന്നാം ക്ലാസിൽ പഠിക്കുന്ന സുമേഷ് എന്ന കുട്ടി സിഗ്മോണ്ട് ഫ്രോയിഡിൻ്റെ മനോ-ലൈംഗീക സിദ്ധാന്തപ്രകാരം ഏത് ഘട്ടത്തിലാണ് ഉൾപ്പെടുക ?",
    "options": [
      "നിർലീനഘട്ടം.",
      "വദനഘട്ടം",
      "ഗുദ ഘട്ടം",
      "ജനനേന്ദ്രിയ ഘട്ടം"
    ],
    "correct": 0
  },
  {
    "q": "താഴെ കൊടുത്തിരിക്കുന്ന സാഹചര്യങ്ങളിൽ നിന്ന് ഋണാത്മക പ്രബലനത്തിന് (Negative Reinforcement) ഉദാഹരണം കണ്ടെത്തുക.",
    "options": [
      "ഗൃഹപാഠം കൃത്യമായി ചെയ്ത കുട്ടിയെ അധ്യാപിക അഭിനന്ദിക്കുന്നു.",
      "क्ലാസ്സിൽ ബഹളമുണ്ടാക്കിയ കുട്ടിയെ അധ്യാപിക ക്ലാസ്സിന് പുറത്താക്കുന്നു.",
      "കുട്ടിയുടെ തലവേദന മാറാനായി അമ്മ കുട്ടിക്ക് ഗുളിക നൽകുന്നു.",
      "പരീക്ഷയ്ക്ക് കുറഞ്ഞ മാർക്ക് വാങ്ങിയ കുട്ടിയെ അച്ഛൻ വഴക്ക് പറയുന്നു."
    ],
    "correct": 2
  },
  {
    "q": "എറിക് എറിക്സന്റെ വികസന സിദ്ധാന്ത പ്രകാരം മധ്യവയസ്സിൽ (Middle Adulthood) വ്യക്തികൾ നേരിടുന്ന പ്രധാന പ്രതിസന്ധി ഏതാണ് ?",
    "options": [
      "ഉത്പാദനക്ഷമതയും സ്തംഭനാവസ്ഥയും (Generativity vs Stagnation)",
      "ആത്മീയ സമഗ്രതയും നിരാശയും",
      "ഘടകബന്ധവും ഒറ്റപ്പെടലും",
      "സ്വത്വസ്ഥാപനവും വേഷക്കുഴപ്പവും"
    ],
    "correct": 0
  },
  {
    "q": "ബുദ്ധിയുടെ ദ്വിഘടക സിദ്ധാന്തത്തിൽ 'S-ഘടകം' (S-factor) കൊണ്ട് അർത്ഥമാക്കുന്നത് എന്താണ് ?",
    "options": [
      "പൊതുവായ ബുദ്ധിശക്തി (General Intelligence)",
      "സാമൂഹിക ബുദ്ധിശക്തി",
      "വിശിഷ്ടമായ കഴിവുകൾ (Specific Ability)",
      "വൈകാരിക ബുദ്ധിശക്തി"
    ],
    "correct": 2
  },
  {
    "q": "പിയാഷെയുടെ വൈജ്ഞാനിക വികസന ഘട്ടങ്ങളിൽ 'യുക്തിസഹമായ ചിന്തയും' എന്നാൽ അത് 'മൂർത്തമായ വസ്തുക്കളിൽ' മാത്രം അധിഷ്ഠിതവുമായിരിക്കുന്ന ഘട്ടം ഏത് ?",
    "options": [
      "ഇന്ദ്രിയ ചാലക ഘട്ടം",
      "പ്രാഗ് മനോവ്യാപാര ഘട്ടം",
      "മൂർത്ത മനോവ്യാപാര ഘട്ടം (Concrete Operational Stage)",
      "Slow Learners"
    ],
    "correct": 2
  },
  {
    "q": "ഒരു കുട്ടി പുതിയ സാഹചര്യത്തിനനുസരിച്ച് തന്റെ നിലവിലുള്ള മാനസിക ഘടനയെ (Schema) മാറ്റം വരുത്തി പുതിയൊരു ഘടന രൂപീകരിക്കുന്ന പ്രക്രിയയാണ് :",
    "options": [
      "സ്വാംശീകരണം (Assimilation)",
      "സമായോജനം (Accommodation)",
      "സന്തുലിതാവസ്ഥ",
      "സമീകരണ പ്രക്രിയ"
    ],
    "correct": 1
  },
  {
    "q": "ഒരു കുട്ടിയുടെ കാലിക വയസ്സ് (CA) 10 ഉം ബുദ്ധിമാനം (IQ) 120 ഉം ആണെങ്കിൽ കുട്ടിയുടെ മാനസിക വയസ്സ് (MA) എത്രയായിരിക്കും ?",
    "options": [
      "10",
      "11",
      "12",
      "13"
    ],
    "correct": 2
  },
  {
    "q": "ഹൊവാർഡ് ഗാർഡ്നറുടെ ബഹുവിധ ബുദ്ധി സിദ്ധാന്ത പ്രകാരം, ശില്പികൾ, ചിത്രകാരന്മാർ, നാവികർ എന്നിവർക്ക് കൂടുതൽ ഉണ്ടാകാൻ സാധ്യതയുള്ള ബുദ്ധിശക്തി ഏതാണ് ?",
    "options": [
      "ഭാഷാപരമായ ബുദ്ധി",
      "യുക്തി ഗണിത ബുദ്ധി",
      "ദൃശ്യ സ്ഥലപര ബുദ്ധി (Spatial Intelligence)",
      "ശാരീരിക ചലനപരമായ ബുദ്ധി"
    ],
    "correct": 2
  },
  {
    "q": "അധ്യാപിക നൽകിയ സൂചനകളും ചോദ്യങ്ങളും അരുണിന് ഒരു കവിതയുടെ ആശയം സ്വയം ഗ്രഹിക്കാൻ സഹായകരമായി. വൈഗോഡ്‌സ്‌കിയുടെ സിദ്ധാന്തപ്രകാരം അധ്യാപിക ഇവിടെ നിർവ്വഹിച്ച ധർമ്മം ഏതാണ് ?",
    "options": [
      "സ്കീമ രൂപീകരണം",
      "കൈത്താങ്ങ് നൽകൽ (Scaffolding)",
      "സ്വാംശീകരണം",
      "ശിക്ഷ നൽകൽ"
    ],
    "correct": 1
  },
  {
    "q": "താഴെ പറയുന്നവയിൽ ബാഹ്യ അഭിപ്രേരണയ്ക്ക് (Extrinsic Motivation) ഏറ്റവും അനുയോജ്യമായ ഉദാഹരണം ഏത് ?",
    "options": [
      "ശാസ്ത്ര വിഷയങ്ങളിലുള്ള താല്പര്യം കൊണ്ട് പ്രോജക്ട് ചെയ്യുന്നത്",
      "സ്കോളർഷിപ്പ് നേടാൻ വേണ്ടി മത്സര പരീക്ഷയ്ക്ക് തയ്യാറെടുക്കുന്നത്",
      "ജിജ്ഞാസ കാരണം ലൈബ്രറിയിൽ ഇരുന്ന് പുസ്തകം വായിക്കുന്നത്",
      "സ്വയം സംതൃപ്തിക്ക് വേണ്ടി ചിത്രം വരയ്ക്കുന്നത്"
    ],
    "correct": 1
  },
  {
    "q": "കുട്ടികളിൽ കാണപ്പെടുന്ന കണക്കൂട്ടലുകളുമായി ബന്ധപ്പെട്ട പഠന വൈകല്യത്തെ പറയുന്ന പേര് :",
    "options": [
      "ഡിസ്ലെക്സിയ",
      "ഡിസ്ഗ്രാഫിയ",
      "ഡിസ്കാൽക്കുലിയ (Dyscalculia)",
      "ഡിസ്പ്രാക്സിയ"
    ],
    "correct": 2
  },
  {
    "q": "വ്യക്തിത്വ അളക്കൽ രീതികളിൽ ഒന്നായ 'റോഷായുടെ മഷിപ്പൊട്ട് പരീക്ഷ'യിൽ (Rorschach Ink Blot Test) ആകെ എത്ര കാർഡുകളാണ് ഉപയോഗിക്കുന്നത് ?",
    "options": [
      "5",
      "10",
      "15",
      "20"
    ],
    "correct": 1
  },
  {
    "q": "പഠന പ്രക്രിയയിൽ 'ശ്രമപരാജയ പഠന സിദ്ധാന്തം' (Trial and Error Learning) ആവിഷ്കരിച്ച മനഃശാസ്ത്രജ്ഞൻ ആര് ?",
    "options": [
      "ഇവാൻ പാവ്‌ലോവ്",
      "ബി. എഫ്. സ്കിന്നർ",
      "ഇ. എൽ. തോൺഡൈക്ക്",
      "വർത്തീമർ"
    ],
    "correct": 2
  },
  {
    "q": "എബ്രഹാം മാസ്ലോയുടെ ആവശ്യങ്ങളുടെ ശ്രേണിയിൽ (Hierarchy of Needs) 'സുരക്ഷിതത്വ ആവശ്യങ്ങൾക്ക്' തൊട്ടുമുകളിലുള്ള ആവശ്യം ഏതാണ് ?",
    "options": [
      "ശാരീരിക ആവശ്യങ്ങൾ",
      "സ്നേഹവും പാരസ്പര്യവും (Love and Belongingness Needs)",
      "ആദരിക്കപ്പെടാനുള്ള ആവശ്യങ്ങൾ",
      "ആത്മസാക്ഷാത്കാരം"
    ],
    "correct": 1
  },
  {
    "q": "വിദ്യാർത്ഥികൾ ഗ്രൂപ്പുകളായി തിരിഞ്ഞ് ഒരു പ്രത്യേക പ്രായോഗിക പ്രശ്നത്തിന് ശാസ്ത്രീയമായ രീതിയിലൂടെ പരിഹാരം കണ്ടെത്തുന്ന പഠന രീതിയാണ് :",
    "options": [
      "പ്രോജക്ട് രീതി (Project Method)",
      "പ്രഭാഷണ രീതി",
      "മനഃപാഠമാക്കൽ രീതി",
      "ടെക്സ്റ്റ് ബുക്ക് രീതി"
    ],
    "correct": 0
  },
  {
    "q": "ഒരു സാഹചര്യത്തിൽ പഠിച്ച കാര്യങ്ങൾ മറ്റൊരു പുതിയ സാഹചര്യത്തിലെ പഠനത്തെ പ്രതികൂലമായി ബാധിക്കുന്ന അവസ്ഥയ്ക്ക് പറയുന്ന പേര് :",
    "options": [
      "അനുകൂല പഠന സംക്രമണം",
      "നിഷേധാത്മക പഠന സംക്രമണം (Negative Transfer)",
      "ശൂന്യ പഠന സംക്രമണം",
      "ഉഭയകക്ഷി പഠന സംക്രമണം"
    ],
    "correct": 1
  },
  {
    "q": "കോൾബർഗിന്റെ ധാർമ്മിക വികസന സിദ്ധാന്ത പ്രകാരം, ഒരു വ്യക്തി സാർവത്രികമായ മനുഷ്യാവകാശങ്ങളും നീതിയും മുൻനിർത്തി സ്വന്തം മനസ്സാക്ഷിക്കനുസരിച്ച് തീരുമാനങ്ങളെടുക്കുന്ന തലം ഏതാണ് ?",
    "options": [
      "വ്യവസ്ഥാപിത പൂർവ്വ തലം",
      "വ്യവസ്ഥാപിത തലം",
      "വ്യവസ്ഥാപിതാനന്തര തലം (Post-conventional Level)",
      "ശിക്ഷാ തലം"
    ],
    "correct": 2
  },
  {
    "q": "കുട്ടികളുടെ സാമൂഹികവൽക്കരണ പ്രക്രിയയിൽ (Socialization) ഏറ്റവും പ്രധാനപ്പെട്ട പ്രാഥമിക ഏജൻസി ഏതാണ് ?",
    "options": [
      "സ്കൂൾ",
      "കുടുംബം (Family)",
      "മാധ്യമങ്ങൾ",
      "ക്ലബ്ബുകൾ"
    ],
    "correct": 1
  },
  {
    "q": "പഠന പുരോഗതി വിലയിരുത്തുന്നതിനായി കുട്ടികളുടെ മികച്ച പഠന ഉത്പന്നങ്ങളുടെയും പ്രവർത്തനങ്ങളുടെയും തെളിവുകളുടെയും ശേഖരത്തെ വിളിക്കുന്നത് :",
    "options": [
      "പോർട്ട്ഫോളിയോ (Portfolio)",
      "റേറ്റിംഗ് സ്കെയിൽ",
      "ചെക്ക് ലിസ്റ്റ്",
      "മാർക്ക് രജിസ്റ്റർ"
    ],
    "correct": 0
  },
  {
    "q": "പെരുമാറ്റത്തെ ദുർബലപ്പെടുത്താനും അതിന്റെ ആവർത്തന നിരക്ക് കുറയ്ക്കാനും ഉപയോഗിക്കുന്ന ചോദകമാണ് :",
    "options": [
      "പ്രബലനം (Reinforcement)",
      "ശിക്ഷ (Punishment)",
      "വിലോപം",
      "കണ്ടീഷനിംഗ്"
    ],
    "correct": 1
  },
  {
    "q": "ഒരു കുട്ടിയുടെ ശാരീരിക വികാസം ശരീരത്തിന്റെ കേന്ദ്രഭാഗത്തു നിന്നും തുടങ്ങി പുറംഭാഗങ്ങളിലേക്ക് വ്യാപിക്കുന്ന ക്രമത്തെ സൂചിപ്പിക്കുന്ന പദം :",
    "options": [
      "സെഫാലോകോഡൽ",
      "പ്രോക്സിമോഡിസ്റ്റൽ (Proximodistal)",
      "Sequentiality",
      "Predictability"
    ],
    "correct": 1
  },
  {
    "q": "താഴെ പറയുന്നവയിൽ ഉൾക്കാഴ്ചാ പഠന സിദ്ധാന്തവുമായി (Insightful Learning) ബന്ധമില്ലാത്ത മനഃശാസ്ത്രജ്ഞൻ ആര് ?",
    "options": [
      "കോഹ്‌ലർ",
      "കോഫ്ക",
      "വർത്തീമർ",
      "ബി. എഫ്. സ്കിന്നർ"
    ],
    "correct": 3
  },
  {
    "q": "ഒരു വിദ്യാർത്ഥി പരീക്ഷയിലെ തന്റെ പരാജയത്തിന് കാരണം കഠിനമായ ചോദ്യപേപ്പർ ആണെന്ന് പറഞ്ഞ് സ്വയം ന്യായീകരിക്കുന്നു. ഇവിടെ ഉപയോഗിച്ചിരിക്കുന്ന പ്രതിരോധ തന്ത്രം ഏതാണ് ?",
    "options": [
      "യുക്തീകരണം (Rationalization)",
      "പ്രക്ഷേപണം",
      "വിസ്ഥാപനം",
      "പ്രതിപൂർത്തീകരണം"
    ],
    "correct": 0
  },
  {
    "q": "കുട്ടികളിൽ സർഗ്ഗാത്മകത (Creativity) വളർത്തുന്നതിനായി അധ്യാപകർ ക്ലാസ്സിൽ ഉപയോഗിക്കുന്ന ചിന്തോദ്ദീപകമായ ആശയ രൂപീകരണ തന്ത്രമാണ് :",
    "options": [
      "മസ്തിഷ്ക പ്രക്ഷാളനം (Brainstorming)",
      "പ്രഭാഷണ രീതി",
      "നിരീക്ഷണം",
      "മനഃപാഠമാക്കൽ"
    ],
    "correct": 0
  },
  {
    "q": "അറിവ് നിർമ്മാണ പ്രക്രിയയിൽ 'സാമൂഹിക നിർമ്മിതിവാദത്തിന്' (Social Constructivism) ഊന്നൽ നൽകിയ മനഃശാസ്ത്രജ്ഞൻ ആര് ?",
    "options": [
      "ജീൻ പിയാഷെ",
      "ലെവ് വൈഗോഡ്‌സ്‌കി (Lev Vygotsky)",
      "ജെറോം ബ്രൂണർ",
      "തോൺഡൈക്ക്"
    ],
    "correct": 1
  },
  {
    "q": "റോബർട്ട് ഗാഗ്നെയുടെ പഠന ശ്രേണിയിലെ (Hierarchy of Learning) ഏറ്റവും ഉയർന്ന എട്ടാമത്തെ ഘട്ടം ഏതാണ് ?",
    "options": [
      "ఆశయ പഠനം",
      "തത്ത്വ പഠനം",
      "പ്രശ്നപരിഹാര പഠനം (Problem Solving)",
      "സൂചന പഠനം"
    ],
    "correct": 2
  },
  {
    "q": "തോൺഡൈക്കിന്റെ പഠന നിയമങ്ങളിൽ 'ഒരു പഠനാനുഭവം സംതൃപ്തി നൽകുന്നതാണെങ്കിൽ പഠനം ശക്തിപ്പെടുന്നു' എന്ന ആശയത്തോട് യോജിക്കുന്ന നിയമം ഏതാണ് ?",
    "options": [
      "സന്നദ്ധതാ നിയമം",
      "പരിശീലന നിയമം",
      "ഫല നിയമം (Law of Effect)",
      "പ്രബലന നിയമം"
    ],
    "correct": 2
  },
  {
    "q": "വിദ്യാർത്ഥിയുടെ സവിശേഷ സ്വഭാവങ്ങളെയും പശ്ചാത്തലത്തെയും കുറിച്ച് ആഴത്തിൽ പഠിക്കാൻ അധ്യാപിക നടത്തുന്ന മനഃശാസ്ത്ര പഠന രീതിയാണ് :",
    "options": [
      "സർവേ രീതി",
      "കേസ് സ്റ്റഡി (Case Study)",
      "സോഷ്യോമെട്രി",
      "പരീക്ഷണ രീതി"
    ],
    "correct": 1
  },
  {
    "q": "താഴെ പറയുന്നവയിൽ ഏതാണ് കൗമാരപ്രായത്തിന്റെ (Adolescence) ഏറ്റവും പ്രധാനപ്പെട്ട വൈകാരിക സവിശേഷത ?",
    "options": [
      "വസ്തു സ്ഥിരത",
      "സ്വത്വ പ്രതിസന്ധി (Identity Crisis)",
      "സർവ്വചേതനവാദം",
      "അനുകരണം മാത്രം കാണിക്കൽ"
    ],
    "correct": 1
  },
  {
    "q": "പഠന ബോധന പ്രക്രിയ നടന്നു കൊണ്ടിരിക്കുമ്പോൾ തന്നെ കുട്ടികളുടെ കുറവുകൾ പരിഹരിക്കാനും പുരോഗതി വരുത്താനും നടത്തുന്ന വിലയിരുത്തലാണ് :",
    "options": [
      "സഞ്ചിത മൂലയനിർണ്ണയം",
      "നിരന്തര മൂല്യനിർണ്ണയം (Formative Evaluation)",
      "പ്രവേശന മൂല്യനിർണ്ണയം",
      "ബാഹ്യ മൂല്യനിർണ്ണയം"
    ],
    "correct": 1
  },
  {
    "q": "താഴെ പറയുന്നവയിൽ ഡാനിയൽ ഗോൾമാൻ മുന്നോട്ടുവെച്ച വൈകാരിക ബുദ്ധിയുടെ ഘടകങ്ങളിൽ ഉൾപ്പെടാത്തത് ഏതാണ് ?",
    "options": [
      "സ്വയം അറിയൽ",
      "അനുതാപം",
      "ആത്മസാക്ഷാത്കാരം (Self-actualization)",
      "സാമൂഹിക നൈപുണ്യങ്ങൾ"
    ],
    "correct": 2
  },
  {
    "q": "അച്ചീവ്മെൻ്റ് മോട്ടിവേഷൻ തീയറി (ആഗ്രഹ സാഫല്യ പ്രേരണാ സിദ്ധാന്തം) ആവിഷ്കരിച്ചത് ആരാണ് ?",
    "options": [
      "എബ്രഹാം മാസ്ലോ",
      "കാൾ റോജേഴ്സ്",
      "ഡേവിഡ് മക് ക്ലിലാൻഡ്.",
      "ഇ.എൽ. തോൺ ഡൈക്ക്"
    ],
    "correct": 2
  },
  {
    "q": "ക്ലാസ്സിലെ സാമൂഹ്യബന്ധങ്ങൾ വിലയിരുത്തുന്നതിനിടയിൽ, ഒരു കുട്ടിയെ മറ്റെല്ലാവരും അംഗീകരിക്കുന്നതായി കണ്ടു. അവനെ എന്തു പറയാം ?",
    "options": [
      "മാറ്റിനിർത്തപ്പെട്ടവൻ",
      "തിരസ്കരിക്കപ്പെട്ടവൻ.",
      "സ്റ്റാർ",
      "ക്ലിക്ക്"
    ],
    "correct": 2
  },
  {
    "q": "കുട്ടികൾ അനുഭവിക്കുന്ന പഠനപ്രയാസങ്ങളെ വിലയിരുത്താൻ താഴെ പറയുന്ന ഉപാധികളിൽ ഏതാണ് ഏറ്റവും അനുയോജ്യം ?",
    "options": [
      "പ്രകടന പരീക്ഷ",
      "നിദാന ശോധകം",
      "അച്ചീവ്മെന്റ് ടെസ്റ്റ്.",
      "പ്രോഗ്നോസ്റ്റിക് ടെസ്റ്റ്"
    ],
    "correct": 1
  },
  {
    "q": "താഴെ പറയുന്നവയിൽ വ്യക്തിത്വം അളക്കാനുപയോഗിക്കാവുന്ന ഒരു പ്രൊജക്ടീവ് ടെസ്റ്റാണ് :",
    "options": [
      "കേസ് പഠനം",
      "MMPI",
      "TAT",
      "ചോദ്യാവലി."
    ],
    "correct": 2
  },
  {
    "q": "താഴെ പറയുന്ന പ്രബലനരീതികളിൽ ഏതാണ് ഏറ്റവും കുറവ് പ്രതികരണ നാശത്തിനു കാരണമാകുന്നത് ?",
    "options": [
      "കൃത്യമായ ഇടവേളകളിൽ പ്രബലനം",
      "കൃത്യമായ എണ്ണം പ്രതികരണങ്ങൾക്ക് പ്രബലനം നൽകൽ",
      "തുടർച്ചയായ പ്രബലനം",
      "വ്യതിയാന അനുപാത പ്രബലനം (Variable Ratio Reinforcement)."
    ],
    "correct": 3
  },
  {
    "q": "കുട്ടികളിൽ കാണപ്പെടുന്ന എഴുതുവാനുള്ള ബുദ്ധിമുട്ടുമായി ബന്ധപ്പെട്ട പഠന വൈകല്യമാണ് :",
    "options": [
      "ഡിസ്ലെക്സിയ",
      "ഡിസ്ഗ്രാഫിയ (Dysgraphia)",
      "ഡിസ്കാൽക്കുലിയ",
      "അഫാസിയ"
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
