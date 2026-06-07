document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
  {
    "q": "അറിവുനിർമാണ പ്രക്രിയയിൽ ജെറോം എസ്. ബ്രൂണർ അവതരിപ്പിച്ച ഘട്ടങ്ങളിൽ ഉൾപ്പെട്ടത് ഏതാണ്?",
    "options": [
      "ബിംബനഘട്ടം (Iconing stage)",
      "ജൽപ്പന ഘട്ടം Babbling Stage).",
      "മൗഖിക ഘട്ടം (oral Stage)",
      "ഔപചാരിക മനോവ്യാപാരഘട്ടം ( Formal Operational Stage)"
    ],
    "correct": 0
  },
  {
    "q": "വൈഗോഡ്‌സ്‌കിയുടെ അഭിപ്രായത്തിൽ, പഠിതാവിൽ ജ്ഞാന നിർമ്മിതി നടക്കണമെങ്കിൽ എന്തുതരം പഠന രീതികളാണ് കൊടുക്കേണ്ടത് ?",
    "options": [
      "സഹവർത്തിത പഠനം",
      "നേരിട്ടുള്ള അധ്യാപനം",
      "വ്യക്ത്യധിഷ്‌ഠിത പ്രോജക്‌ടുകൾ.",
      "സിമുലേഷൻ"
    ],
    "correct": 0
  },
  {
    "q": "ഒരു തത്വത്തെ സംബന്ധിച്ച് കുറെ ഉദാഹരണങ്ങൾ നൽകിയ ശേഷം അധ്യാപിക കുട്ടികളോട് ഒരു നിഗമനത്തിൽ എത്തിച്ചേരാൻ ആവശ്യപ്പെടുന്നു. ഈ സമീപനത്തിന് പറയാവുന്നത് :",
    "options": [
      "നിഗമന രീതി",
      "ആഗമന രീതി",
      "ഉൾക്കാഴ്ചാ രീതി",
      "ആഗമന - നിഗമന രീതി."
    ],
    "correct": 1
  },
  {
    "q": "പിന്നീട് പഠിച്ച കാര്യങ്ങൾ, മുൻപേ പഠിച്ച കാര്യങ്ങളെ ഓർമിക്കുന്നതിനെ തടസ്സ പ്പെടുത്തുന്നതിന് പറയുന്നത് :",
    "options": [
      "ആലേഖന പരാജയം",
      "റിട്രോ ആക്ട‌ീവ് ഇൻഹിബിഷൻ.",
      "പ്രോ ആക്ടീവ് ഇൻഹിബിഷൻ",
      "ചോദനക്ഷയം"
    ],
    "correct": 1
  },
  {
    "q": "സിഗ്മണ്ട് ഫ്രോയിഡിന്റെ അഭിപ്രായത്തിൽ, മനസ്സിന്റെ ഏതു തലമാണ് 'ധാർമ്മികതയുടെ ആയുധം' (Weapon of Morality) എന്ന് അറിയപ്പെടുന്നത് ?",
    "options": [
      "ഇഡ് (Id)",
      "ഈഗോ (Ego)",
      "സൂപ്പർ ഈഗോ (Super Ego).",
      "അബോധമനസ്സ് (Unconscious mind)"
    ],
    "correct": 2
  },
  {
    "q": "നിശ്ചിത അനുപാതത്തിലുള്ള പ്രബലനത്തിന് (Fixed Ratio Reinforcement) ഉദാഹരണമേത് ?",
    "options": [
      "ലോട്ടറി അടിക്കുന്നത്",
      "ഓരോ അഞ്ച് ശരിയുത്തരങ്ങൾക്കും സമ്മാനം നൽകുന്നത്",
      "ശമ്പളം നൽകുന്നത്",
      "അപ്രതീക്ഷിതമായി കുട്ടികളെ അഭിനന്ദിക്കുന്നത്"
    ],
    "correct": 1
  },
  {
    "q": "താഴെ പറയുന്നവയിൽ വൈകാരിക ബുദ്ധിവികാസത്തെ (Emotional Intelligence) കുറിക്കാൻ ഉപയോഗിക്കുന്ന പദം ഏതാണ് ?",
    "options": [
      "IQ",
      "SQ",
      "EQ",
      "CQ"
    ],
    "correct": 2
  },
  {
    "q": "ഹൊവാർഡ് ഗാർഡ്നറുടെ ബഹുവിധ ബുദ്ധി സിദ്ധാന്ത പ്രകാരം, ഒരു വ്യക്തിക്ക് തൻഹെ വികാരങ്ങളെയും ലക്ഷ്യങ്ങളെയും തിരിച്ചറിയാനും നിയന്ത്രിക്കാനുമുള്ള കഴിവിനെ പറയുന്ന പേര് :",
    "options": [
      "വ്യക്ത്യാന്തര ബുദ്ധി (Interpersonal Intelligence)",
      "ആന്തരിക വൈയക്തിക ബുദ്ധി (Intrapersonal Intelligence)",
      "യുക്തി ഗണിത ബുദ്ധി (Logical-Mathematical Intelligence)",
      "ദൃശ്യ സ്ഥലപര ബുദ്ധി (Spatial Intelligence)"
    ],
    "correct": 1
  },
  {
    "q": "താഴെ പറയുന്നവയിൽ പിയാഷെയുടെ വൈജ്ഞാനിക വികസന ഘട്ടങ്ങളിൽ 'വസ്തുസ്ഥിരത' (Object Permanence) കൈവരിക്കുന്ന ഘട്ടം ഏതാണ് ?",
    "options": [
      "പ്രാഗ് മനോവ്യാപാര ഘട്ടം (Pre-operational Stage)",
      "മൂർത്ത മനോവ്യാപാര ഘട്ടം (Concrete Operational Stage)",
      "ഇന്ദ്രിയ ചാലക ഘട്ടം (Sensorimotor Stage)",
      "ഔപചാരിക മനോവ്യാപാര ഘട്ടം (Formal Operational Stage)"
    ],
    "correct": 2
  },
  {
    "q": "ഒരു കുട്ടി തൻഹെ മുൻകാല അനുഭവങ്ങളുടെ വെളിച്ചത്തിൽ പുതിയൊരു സാഹചര്യത്തെ നേരിടാൻ ശ്രമിക്കുന്ന പ്രക്രിയയെ ജീൻ പിയാഷെ വിശേഷിപ്പിച്ചത് :",
    "options": [
      "അക്കോമഡേഷൻ (Accommodation)",
      "സ്വാംശീകരണം (Assimilation)",
      "സന്തുലിതാവസ്ഥ (Equilibration)",
      "സ്കീമ (Schema)"
    ],
    "correct": 1
  },
  {
    "q": "ഒരു കുട്ടിയുടെ മാനസീക വയസ്സ് (MA) 10 ഉം കാലിക വയസ്സ് (CA) 8 ഉം ആണെങ്കിൽ കുട്ടിയുടെ ബുദ്ധിമാനം (IQ) എത്രയായിരിക്കും ?",
    "options": [
      "100",
      "120",
      "125",
      "80"
    ],
    "correct": 2
  },
  {
    "q": "ഒരു വ്യക്തിക്ക് സംഗീത ഉപകരണങ്ങൾ കൈകാര്യം ചെയ്യാനും ഈണങ്ങൾ തിരിച്ചറിയാനും ഉള്ള കഴിവ് സൂചിപ്പിക്കുന്നത് ഗാർഡ്നറുടെ ഏതുതരം ബുദ്ധിയെയാണ് ?",
    "options": [
      "സംഗീതപരമായ ബുദ്ധി",
      "ശാരീരിക ചലനപരമായ ബുദ്ധി",
      "ഭാഷാപരമായ ബുദ്ധി",
      "പാരിസ്ഥിതിക ബുദ്ധി"
    ],
    "correct": 0
  },
  {
    "q": "അധ്യാപിക നൽകുന്ന വർക്ക് ഷീറ്റുകളും ചിത്രങ്ങളും സമീറിന് ഗണിത സമസ്യകൾ സ്വയം പരിഹരിക്കാൻ സഹായകരമായി. ഇവിടെ അധ്യാപിക നൽകിയ സഹായത്തെ വൈഗോഡ്സ്കി വിശേഷിപ്പിച്ചത് എന്ത് പേരിട്ടാണ് ?",
    "options": [
      "സ്കീമ",
      "അസിമിലേഷൻ",
      "കൈത്താങ്ങ് (Scaffolding)",
      "സമീകരണ പ്രക്രിയ"
    ],
    "correct": 2
  },
  {
    "q": "താഴെ പറയുന്നവയിൽ ഏതാണ് ആന്തരിക അഭിപ്രേരണയ്ക്ക് (Intrinsic Motivation) ഏറ്റവും അനുയോജ്യമായ ഉദാഹരണം ?",
    "options": [
      "സമ്മാനം ലഭിക്കാൻ വേണ്ടി പഠിക്കുന്നത്",
      "അധ്യാപകന്റെ ശിക്ഷ ഭയന്ന് ഗൃഹപാഠം ചെയ്യുന്നത്",
      "പുതിയ കാര്യങ്ങൾ അറിയാനുള്ള ജിജ്ഞാസ കൊണ്ട് പുസ്തകം വായിക്കുന്നത്",
      "കൂട്ടുകാരുടെ മുന്നിൽ പ്രശംസ പിടിച്ചുപറ്റാൻ വേണ്ടി മത്സരത്തിൽ പങ്കെടുക്കുന്നത്"
    ],
    "correct": 2
  },
  {
    "q": "എറിക് എറിക്സന്റെ മനോസാമൂഹ്യ വികാസ സിദ്ധാന്തപ്രകാരം സ്കൂൾ പ്രായത്തിലുള്ള (6 മുതൽ 12 വയസ്സ് വരെ) കുട്ടികൾ നേരിടുന്ന പ്രതിസന്ധി ഏതാണ് ?",
    "options": [
      "മുൻകൈയെടുക്കൽ Vs കുറ്റബോധം",
      "അദ്ധ്വാനം Vs അപകർഷത (Industry vs Inferiority)",
      "സ്വത്വസ്ഥാപനം Vs വേഷക്കുഴപ്പം",
      "വിശ്വാസവും അവിശ്വാസവും"
    ],
    "correct": 1
  },
  {
    "q": "കുട്ടികളിൽ കാണപ്പെടുന്ന വായനാ വൈകല്യത്തെ (Reading Disability) വിളിക്കുന്ന പേര് :",
    "options": [
      "ഡിസ്ഗ്രാഫിയ",
      "ഡിസ്കാൽക്കുലിയ",
      "ഡിസ്ലെക്സിയ",
      "അഫാസിയ"
    ],
    "correct": 2
  },
  {
    "q": "വ്യക്തിത്വ അളക്കൽ രീതികളിൽ ഉൾപ്പെട്ട 'തീമാറ്റിക് അപ്പർസെപ്ഷൻ ടെസ്റ്റ്' (TAT) ഏതു വിഭാഗത്തിൽപ്പെടുന്നു ?",
    "options": [
      "വസ്തുനിഷ്ഠ രീതി",
      "പ്രക്ഷേപണ രീതി (Projective Technique)",
      "ব্যക്തിനിഷ്ഠ രീതി",
      "സാമൂഹ്യരേഖാ രീതി"
    ],
    "correct": 1
  },
  {
    "q": "പഠന പ്രക്രിയയിൽ ചോദകവും പ്രതികരണവും (Stimulus-Response) തമ്മിലുള്ള ബന്ധത്തിന് ഊന്നൽ നൽകുന്ന മനഃശാസ്ത്ര ശാഖ ഏതാണ് ?",
    "options": [
      "വ്യവസ്ഥാപിതconstructivism",
      "ബിഹേവിയറിസം (Behaviorism)",
      "ഹ്യൂമനിസം",
      "ഗെസ്റ്റാൾട്ട് മനഃശാസ്ത്രം"
    ],
    "correct": 1
  },
  {
    "q": "ചെറിയ കുട്ടികൾ തങ്ങൾക്കു ചുറ്റുമുള്ള എല്ലാ നിർജീവ വസ്തുക്കൾക്കും ജീവനുണ്ടെന്ന് വിശ്വസിക്കുന്ന പിയാഷെയുടെ ആശയത്തെ പറയുന്ന പേര് :",
    "options": [
      "ആത്മകേന്ദ്രീകൃത ചിന്ത",
      "സർവ്വചേതനവാദം (Animism)",
      "കൺസർവേഷൻ",
      "ഉഭയദിശാ ചിന്ത"
    ],
    "correct": 1
  },
  {
    "q": "എബ്രഹാം മാസ്ലോയുടെ ആവശ്യങ്ങളുടെ ശ്രേണിയിൽ (Hierarchy of Needs) ഏറ്റവും ഉയർന്ന തലത്തിലുള്ള ആവശ്യം ഏതാണ് ?",
    "options": [
      "സുരക്ഷിതത്വ ആവശ്യങ്ങൾ",
      "സാമൂഹിക ആവശ്യങ്ങൾ",
      "ആത്മസാക്ഷാത്കാരം (Self-Actualization)",
      "ആദരിക്കപ്പെടാനുള്ള ആവശ്യങ്ങൾ"
    ],
    "correct": 2
  },
  {
    "q": "വ്യക്തമായ ആസൂത്രണത്തോടെ ക്ലാസ്സ് മുറിയിൽ കുട്ടികൾ ഒരുമിച്ചു ചേർന്ന് ഒരു പ്രായോഗിക പ്രശ്നം പരിഹരിക്കുന്ന പഠനരീതിയാണ് :",
    "options": [
      "പ്രോജക്ട് രീതി",
      "പ്രഭാഷണ രീതി",
      "വ്യക്തിഗത പഠനരീതി",
      "പ്രശ്നപരിഹാര രീതി"
    ],
    "correct": 0
  },
  {
    "q": "ക്ലാസിക്കൽ കണ്ടീഷനിംഗ് സിദ്ധാന്തത്തിന്റെ ഉപജ്ഞാതാവ് ആരാണ് ?",
    "options": [
      "ബി. എഫ്. സ്കിന്നർ",
      "ഇവാൻ പാവ്\u200cലോവ്",
      "ഇ. എൽ. തോൺഡൈക്ക്",
      "ജെ. ബി. വാട്സൺ"
    ],
    "correct": 1
  },
  {
    "q": "ഒരു സാഹചര്യത്തിൽ പഠിച്ച കാര്യങ്ങൾ മറ്റൊരു പുതിയ സാഹചര്യത്തിലെ പഠനത്തെ യാതൊരു വിധത്തിലും സ്വാധീനിക്കാതിരിക്കുന്ന അവസ്ഥയാണ് :",
    "options": [
      "അനുകൂല പഠന സംക്രമണം",
      "നിഷേധാത്മക പഠന സംക്രമണം",
      "ശൂന്യ പഠന സംക്രമണം (Zero Transfer)",
      "ഉഭയകക്ഷി പഠന സംക്രമണം"
    ],
    "correct": 2
  },
  {
    "q": "കുട്ടികളിൽ കാണപ്പെടുന്ന കണക്കിലെ കൂട്ടിക്കഴിക്കലുകളുമായി ബന്ധപ്പെട്ട പഠന വൈകല്യമാണ് :",
    "options": [
      "ഡിസ്ഗ്രാഫിയ",
      "ഡിസ്കാൽക്കുലിയ (Dyscalculia)",
      "ഡിസ്ലെക്സിയ",
      "ഡിസ്പ്രാക്സിയ"
    ],
    "correct": 1
  },
  {
    "q": "കോൾബർഗിന്റെ ധാർമ്മിക വികസന സിദ്ധാന്ത പ്രകാരം, ഒരു വ്യക്തി സമൂഹത്തിന്റെ നിയമങ്ങളും വ്യവസ്ഥകളും അതേപടി പാലിച്ച് നല്ല കുട്ടിയായിരിക്കാൻ ശ്രമിക്കുന്ന തലം ഏതാണ് ?",
    "options": [
      "വ്യവസ്ഥാപിത പൂർവ്വ തലം",
      "വ്യവസ്ഥാപിത തലം (Conventional Level)",
      "വ്യവസ്ഥാപിതാനന്തര തലം",
      "സാർവത്രിക ധാർമ്മിക തലം"
    ],
    "correct": 1
  },
  {
    "q": "ബുദ്ധിയുടെ ദ്വിഘടക സിദ്ധാന്തപ്രകാരം (Two-Factor Theory), പൊതുഘടകത്തെ സൂചിപ്പിക്കുന്ന അക്ഷരം ഏതാണ് ?",
    "options": [
      "s-factor",
      "g-factor",
      "m-factor",
      "p-factor"
    ],
    "correct": 1
  },
  {
    "q": "കുട്ടികളുടെ സാമൂഹികവൽക്കരണ പ്രക്രിയയിൽ (Socialization) ഏറ്റവും പ്രധാനപ്പെട്ട പങ്കുവഹിക്കുന്ന ദ്വിതീയ ഏജൻസി ഏതാണ് ?",
    "options": [
      "കുടുംബം",
      "സ്കൂൾ",
      "അയൽപക്കം",
      "ബന്ധുക്കൾ"
    ],
    "correct": 1
  },
  {
    "q": "പഠന പുരോഗതിയും കുട്ടിയുടെ വിവിധ മേഖലകളിലെ പ്രകടനങ്ങളും തുടർച്ചയായി രേഖപ്പെടുത്തി സൂക്ഷിക്കുന്ന വിലയിരുത്തൽ ശേഖരമാണ് :",
    "options": [
      "പോർട്ട്ഫോളിയോ (Portfolio)",
      "റേറ്റിംഗ് സ്കെയിൽ",
      "ചെക്ക് ലിസ്റ്റ്",
      "അഭിമുഖം"
    ],
    "correct": 0
  },
  {
    "q": "പെരുമാറ്റത്തെ ശക്തിപ്പെടുത്താനും ആവർത്തിക്കാനും സഹായിക്കുന്ന ചോദകങ്ങളെ പറയുന്ന പേര് :",
    "options": [
      "പ്രബലനം (Reinforcement)",
      "ശിക്ഷ",
      "വിലോപം",
      "വിവേചനം"
    ],
    "correct": 0
  },
  {
    "q": "ഒരു കുട്ടിയുടെ ശാരീരിക വികാസം തലയിൽ തുടങ്ങി താഴോട്ട് വ്യാപിക്കുന്ന ക്രമത്തെ സൂചിപ്പിക്കുന്ന പദം :",
    "options": [
      "പ്രോക്സിമോഡിസ്റ്റൽ",
      "സെഫാലോകോഡൽ (Cephalocaudal)",
      "ക്രമബദ്ധത",
      "വ്യതിരിക്തത"
    ],
    "correct": 1
  },
  {
    "q": "താഴെ പറയുന്നവയിൽ ഉൾക്കാഴ്ചാ പഠനവുമായി (Insightful Learning) ബന്ധപ്പെട്ട മനഃശാസ്ത്ര ശാഖ ഏത് ?",
    "options": [
      "ബിഹേവിയറിസം",
      "ഗെസ്റ്റാൾട്ട് മനഃശാസ്ത്രം (Gestalt Psychology)",
      "ഹ്യൂമനിസം",
      "കോൺസ്ട്രക്റ്റിവിസം"
    ],
    "correct": 1
  },
  {
    "q": "ഒരു വിദ്യാർത്ഥി തൻ്റെ പരാജയത്തിന്റെ കാരണം അധ്യാപകന്റെ മുൻവിധിയാണെന്ന് പറഞ്ഞ് ന്യായീകരിക്കുന്നു. ഇവിടെ ഉപയോഗിച്ചിരിക്കുന്ന പ്രതിരോധ തന്ത്രം ഏതാണ് ?",
    "options": [
      "യുക്തീകരണം (Rationalization)",
      "പ്രക്ഷേപണം (Projection)",
      "വിസ്ഥാപനം",
      "പ്രതിപൂർത്തീകരണം"
    ],
    "correct": 1
  },
  {
    "q": "കുട്ടികളിൽ സർഗ്ഗാത്മകത (Creativity) വളർത്തുന്നതിനായി അധ്യാപകർ ക്ലാസ്സിൽ ഉപയോഗിക്കുന്ന ചിന്തോദ്ദീപകമായ ചർച്ചാ തന്ത്രം ഏതാണ് ?",
    "options": [
      "മസ്തിഷ്ക പ്രക്ഷാളനം (Brainstorming)",
      "പ്രഭാഷണ രീതി",
      "മനഃപാഠമാക്കൽ",
      "നിരീക്ഷണം"
    ],
    "correct": 0
  },
  {
    "q": "അറിവ് നിർമ്മാണ പ്രക്രിയയിൽ സാമൂഹിക ഇടപെടലുകൾക്കും സാംസ്കാരിക പശ്ചാത്തലത്തിനും പ്രാധാന്യം നൽകിയ മനഃശാസ്ത്രജ്ഞൻ ആര് ?",
    "options": [
      "ജീൻ പിയാഷെ",
      "ലെവ് വൈഗോഡ്സ്കി (Lev Vygotsky)",
      "ജെറോം ബ്രൂണർ",
      "ബി. എഫ്. സ്കിന്നർ"
    ],
    "correct": 1
  },
  {
    "q": "റോബർട്ട് ഗാഗ്നെയുടെ പഠന ശ്രേണിയിലെ (Hierarchy of Learning) ഏറ്റവും ലളിതമായ ആദ്യ ഘട്ടം ഏതാണ് ?",
    "options": [
      "ആശയ പഠനം",
      "ചോദക പ്രതികരണ പഠനം",
      "സൂചന പഠനം (Signal Learning)",
      "തത്ത്വ പഠനം"
    ],
    "correct": 2
  },
  {
    "q": "തോൺഡൈക്കിന്റെ പഠന നിയമങ്ങളിൽ 'പരിശീലനം മനുഷ്യനെ പൂർണ്ണനാക്കുന്നു' എന്ന ആശയത്തോട് യോജിക്കുന്ന നിയമം ഏതാണ് ?",
    "options": [
      "സന്നദ്ധതാ നിയമം",
      "പരിശീലന നിയമം (Law of Exercise)",
      "ഫല നിയമം",
      "പ്രബലന നിയമം"
    ],
    "correct": 1
  },
  {
    "q": "വിദ്യാർത്ഥിയുടെ വൈകാരികവും വ്യക്തിത്വപരവുമായ സവിശേഷതകൾ ആഴത്തിൽ പഠിക്കാൻ അധ്യാപിക വ്യക്തിപരമായി നടത്തുന്ന പഠന രീതിയാണ് :",
    "options": [
      "സർവേ രീതി",
      "കേസ് സ്റ്റഡി (Case Study)",
      "സോഷ്യോമെട്രി",
      "പരീക്ഷണ രീതി"
    ],
    "correct": 1
  },
  {
    "q": "താഴെ പറയുന്നവയിൽ ഏതാണ് കൗമാരപ്രായത്തിന്റെ (Adolescence) ഏറ്റവും പ്രധാനപ്പെട്ട സവിശേഷത ?",
    "options": [
      "വസ്തു സ്ഥിരത പരാജയം",
      "സ്വത്വ പ്രതിസന്ധി (Identity Crisis)",
      "സർവ്വചേതനവാദം",
      "അനുകരണ സ്വഭാവം മാത്രം കാണിക്കൽ"
    ],
    "correct": 1
  },
  {
    "q": "പഠന ബോധന പ്രക്രിയ നടന്നു കൊണ്ടിരിക്കുമ്പോൾ തന്നെ കുട്ടികളുടെ പുരോഗതി അറിയാൻ നടത്തുന്ന വിലയിരുത്തലാണ് :",
    "options": [
      "സഞ്ചിത മൂല്യനിർണ്ണയം (Summative Evaluation)",
      "നിരന്തര മൂല്യനിർണ്ണയം (Formative Evaluation)",
      "പ്രവേശന മൂല്യനിർണ്ണയം",
      "നിർണ്ണയ മൂല്യനിർണ്ണയം"
    ],
    "correct": 1
  },
  {
    "q": "താഴെ പറയുന്നവയിൽ ഡാനിയൽ ഗോൾമാൻ മുന്നോട്ടുവെച്ച വൈകാരിക ബുദ്ധിയുടെ ഘടകങ്ങളിൽ ഉൾപ്പെടാത്തത് ഏതാണ് ?",
    "options": [
      "സ്വയം അറിയൽ (Self-awareness)",
      "അനുതാപം (Empathy)",
      "ആത്മസാക്ഷാത്കാരം (Self-actualization)",
      "സാമൂഹിക നൈപുണ്യങ്ങൾ"
    ],
    "correct": 2
  },
  {
    "q": "താഴെ പറയുന്ന ആശയങ്ങളിൽ ഡേവിഡ് ഓസുബെല്ലിന്റെ പഠന സിദ്ധാന്തവുമായി ബന്ധമില്ലാത്തത് ഏത് ?",
    "options": [
      "അർത്ഥപൂർണമായ സ്വാംശീകരണ പഠനം",
      "പ്രതിക്രിയാധ്യാപനം",
      "സഹകരണാത്മക പഠനം",
      "സമീപസ്ഥ വികാസ മണ്ഡലം"
    ],
    "correct": 1
  },
  {
    "q": "താഴെ പറയുന്നവരിൽ ആരാണ് അഭിപ്രരണാ സിദ്ധാന്തം ഉന്നയിച്ചത് ?",
    "options": [
      "ജെറോം എസ്. ബ്രൂണർ",
      "കോൾബർഗ്",
      "സ്റ്റേൺബർഗ്",
      "അബ്രഹാം മാസ്ലോ"
    ],
    "correct": 3
  },
  {
    "q": "വ്യക്തിത്വം സംബന്ധിച്ച ട്രെയിറ്റ് (സവിശേഷകത്വം) സമീപനം ആരുടെതാണ് ?",
    "options": [
      "ഫ്രോയിഡ്",
      "മാസ്ലോ",
      "പിയാഷെ",
      "അല്പോർട്."
    ],
    "correct": 3
  },
  {
    "q": "തുടർ മൂല്യനിർണയത്തിന് അനുയോജ്യ മല്ലാത്തത് ഏത് ?",
    "options": [
      "ബോധന സമയത്ത് ചോദ്യങ്ങൾ ചോദിക്കുന്നത്",
      "ക്ലാസ് ടെസ്റ്റുകൾ നടത്തുന്നത്",
      "വാർഷിക പരീക്ഷകൾ നടത്തുന്നത്",
      "പോർട്ട് ഫോളിയോ വിലയിരുത്തുന്നത്."
    ],
    "correct": 2
  },
  {
    "q": "വൈകാരിക ബുദ്ധിക്ഷമതയുള്ള ഒരു വ്യക്തിയുടെ സവിശേഷത അല്ലാത്തത് ഏത് ?",
    "options": [
      "സ്വയം അറിയാനുള്ള കഴിവ്",
      "സ്വയം നിയന്ത്രിക്കാനുള്ള കഴിവ്",
      "അനുതാപം",
      "സ്വയം അക്രമണ സ്വഭാവം."
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
