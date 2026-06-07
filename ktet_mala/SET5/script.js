document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
  {
    "q": "ചോദ്യം : ഒരു റീഫിൽ പേനയുടെ വില 10 രൂപയാണ്. എങ്കിൽ ഇത്തരത്തിലുള 4 പേനകളുടെ വില എന്ത് ? ഇതിന്റെ കാരണം എന്തായിരിക്കും ?",
    "options": [
      "അവൾക്ക് ഗുണനപ്പട്ടിക അറിയില്ല.",
      "വഴിക്കണക്കുകളെ ഭയമാണ്.",
      "ഗുണന ക്രിയയെ കുറിച്ച് ധാരണയില്ല.",
      "ഗുണനക്രിയകൾ പ്രായോഗികമായ നിർവ്വഹിക്കുന്നതിനുള്ള അനുഭവങ്ങൾ വഴിക്കണക്കുകളിലൂടെ ക്ലാസ്സിൽ ലഭ്യമാക്കിയിട്ടില്ല."
    ],
    "correct": 3
  },
  {
    "q": "എബ്രഹാം മാസ്‌ലോ 1954 ൽ അഭിപ്രരണയുമായി ബന്ധപ്പെട്ട ആശയങ്ങൾ വിശദീകരിച്ചപ്പോൾ അടിസ്ഥാനമാക്കിയതു..",
    "options": [
      "സമ്മാനങ്ങൾ",
      "ആവശ്യങ്ങൾ.",
      "പ്രതീക്ഷകൾ",
      "ഉദ്ദേശ്യങ്ങൾ"
    ],
    "correct": 1
  },
  {
    "q": "രണ്ട് ചരങ്ങൾ തമ്മിലുള്ള താത്‌ക്കാലിക ബന്ധം സൂചിപ്പിക്കുന്ന പ്രസ്‌താവനയ്ക്ക് പറയാവുന്നത് :",
    "options": [
      "സങ്കലനം",
      "നിഗമനം",
      "കോറിലേഷൻ",
      "ഊഹിച്ചെടുക്കൽ"
    ],
    "correct": 0
  },
  {
    "q": "വികാസതത്വങ്ങളിൽ ഉൾപെടാത്തത് ഏത് ?",
    "options": [
      "വികാസം ഒരു തുടർ പ്രക്രിയയാണ്",
      "വികാസം പ്രവചനീയമാണ്.",
      "വികാസം സ്ഥൂലത്തിൽ നിന്നാരംഭിച്ച് സൂക്ഷ്‌മത്തിലേക്ക് എന്ന ക്രമം പാലിക്കുന്നു.",
      "വികാസത്തിൽ വ്യക്തി വ്യത്യാസങ്ങൾ ഇല്ല."
    ],
    "correct": 3
  },
  {
    "q": "ഒരമ്മ തൻറെ മകൻ്റെ ആവശ്യങ്ങൾ പരിഗണിക്കുകയും പൂർത്തീകരിക്കാൻ സഹായിക്കുകയും ചെയ്യുന്നു. അതേ സമയം കുട്ടിക്ക് സ്വന്തമായി കാര്യങ്ങൾ ചെയ്യാനുള്ള സ്വാതന്ത്ര്യവും നൽകുന്നു. എറിക്‌സൻ്റെ സിദ്ധാന്തപ്രകാരം കുട്ടിയിൽ വളർന്നുവരുന്ന ഗുണം ഏതാണ് ?",
    "options": [
      "സ്വയംഭരണം (Autonomy)",
      "മുൻകൈയെടുക്കൽ (Initiative)",
      "അധ്വാനശീലത (Industry)",
      "വിശ്വാസം (Trust)"
    ],
    "correct": 0
  },
  {
    "q": "താഴെ പറയുന്നവയിൽ ഏതാണ് വൈജ്ഞാനിക നിർമ്മിതിവാദത്തിന് (Cognitive Constructivism) കൂടുതൽ പ്രാധാന്യം നൽകിയ മനഃശാസ്ത്രജ്ഞൻ ?",
    "options": [
      "ലെവ് വൈഗോഡ്‌സ്‌കി",
      "ജീൻ പിയാഷെ",
      "ജെറോം ബ്രൂണർ",
      "ബി. എഫ്. സ്കിന്നർ"
    ],
    "correct": 1
  },
  {
    "q": "ഒരു അധ്യാപകൻ തൻ്റെ ക്ലാസ്സിലെ ഒരു പ്രത്യേക കുട്ടിയുടെ സ്വഭാവ വൈകല്യങ്ങളെക്കുറിച്ച് ആഴത്തിൽ പഠിക്കാൻ ആഗ്രഹിക്കുന്നു. ഇതിനായി തിരഞ്ഞെടുക്കാവുന്ന ഏറ്റവും അനുയോജ്യമായ മനഃശാസ്ത്ര രീതി ഏതാണ് ?",
    "options": [
      "പരീക്ഷണ രീതി",
      "സർവേ രീതി",
      "കേസ് സ്റ്റഡി (Case Study)",
      "നിരീക്ഷണ രീതി"
    ],
    "correct": 2
  },
  {
    "q": "കുട്ടി ഒരു പുതിയ അനുഭവത്തെ തൻ്റെ നിലവിലുള്ള അറിവിൻ്റെ ഘടനയിലേക്ക് (Schema) മാറ്റങ്ങൾ വരുത്തിക്കൊണ്ട് ഉൾക്കൊള്ളുന്ന പ്രക്രിയ അറിയപ്പെടുന്നത് :",
    "options": [
      "സ്വാംശീകരണം (Assimilation)",
      "സമായോജനം (Accommodation)",
      "സമീകരണം (Equilibration)",
      "ഓർഗനൈസേഷൻ"
    ],
    "correct": 1
  },
  {
    "q": "തോൺഡൈക്കിൻ്റെ പഠന നിയമങ്ങളിൽ ഉൾപ്പെടാത്ത നിയമം ഏതാണ് ?",
    "options": [
      "സന്നദ്ധതാ നിയമം (Law of Readiness)",
      "പരിശീലന നിയമം (Law of Exercise)",
      "ഫല നിയമം (Law of Effect)",
      "പ്രബലന നിയമം (Law of Reinforcement)"
    ],
    "correct": 3
  },
  {
    "q": "ഒരു പ്രത്യേക തൊഴിലിലോ അല്ലെങ്കിൽ മേഖലയിലോ ഒരു വ്യക്തിക്ക് ഭാവിയിൽ കൈവരിക്കാൻ കഴിയുന്ന ഉയർന്ന പ്രകടനക്ഷമതയെ സൂചിപ്പിക്കുന്ന പദം :",
    "options": [
      "ബുദ്ധി (Intelligence)",
      "അഭിരുചി (Aptitude)",
      "മനോഭാവം (Attitude)",
      "സർഗ്ഗാത്മകത"
    ],
    "correct": 1
  },
  {
    "q": "ഹൊവാർഡ് ഗാർഡ്നറുടെ ബഹുവിധ ബുദ്ധി സിദ്ധാന്ത പ്രകാരം, പ്രകൃതിയിലെ പ്രതിഭാസങ്ങളെയും സസ്യങ്ങളെയും ജീവജാലങ്ങളെയും തിരിച്ചറിയാനും തരംതിരിക്കാനുമുള്ള കഴിവിനെ പറയുന്ന പേര് :",
    "options": [
      "ദൃശ്യ സ്ഥലപര ബുദ്ധി",
      "പാരിസ്ഥിതിക ബുദ്ധി (Naturalistic Intelligence)",
      "വ്യക്തിനിഷ്ഠ ബുദ്ധി",
      "ഭാഷാപരമായ ബുദ്ധി"
    ],
    "correct": 1
  },
  {
    "q": "കോൾബർഗിൻ്റെ ധാർമ്മിക വികസന സിദ്ധാന്ത പ്രകാരം, ഒരു കുട്ടി ശിക്ഷയിൽ നിന്നും രക്ഷപ്പെടാൻ വേണ്ടി മാത്രം നിയമങ്ങൾ അനുസരിക്കുന്ന ഘട്ടം ഏത് ?",
    "options": [
      "വ്യവസ്ഥാപിത പൂർവ്വ തലം (Pre-conventional Level)",
      "വ്യവസ്ഥാപിത തലം (Conventional Level)",
      "വ്യവസ്ഥാപിതാനന്തര തലം",
      "സാർവത്രിക ധാർമ്മിക തലം"
    ],
    "correct": 0
  },
  {
    "q": "താഴെ പറയുന്നവയിൽ ഏതാണ് ഒരു പ്രക്ഷേപണ രീതിക്ക് (Projective Technique) ഉദാഹരണം ?",
    "options": [
      "ചോദ്യാവലി",
      "റോഷായുടെ മഷിപ്പൊട്ട് പരീക്ഷ (Rorschach Ink Blot Test)",
      "റേറ്റിംഗ് സ്കെയിൽ",
      "നിരീക്ഷണം"
    ],
    "correct": 1
  },
  {
    "q": "കുട്ടികളിൽ കാണപ്പെടുന്ന അക്ഷരവിന്യാസത്തിലും കൈയക്ഷരത്തിലും ഉണ്ടാകുന്ന പഠന വൈകല്യമാണ് :",
    "options": [
      "ഡിസ്ലെക്സിയ",
      "ഡിസ്ഗ്രാഫിയ (Dysgraphia)",
      "ഡിസ്കാൽക്കുലിയ",
      "അഫാസിയ"
    ],
    "correct": 1
  },
  {
    "q": "ക്ലാസ്സ് മുറിയിൽ പരീക്ഷണങ്ങളിലൂടെയും സ്വയം കണ്ടെത്തലുകളിലൂടെയും പഠിക്കാൻ വിദ്യാർത്ഥികളെ പ്രോത്സാഹിപ്പിക്കുന്ന ബോധന രീതി :",
    "options": [
      "പ്രഭാഷണ രീതി",
      "ഹ്യൂറിസ്റ്റിക് രീതി / കണ്ടെത്തൽ രീതി",
      "ചർച്ചാ രീതി",
      "മനഃപാഠമാക്കൽ രീതി"
    ],
    "correct": 1
  },
  {
    "q": "ഒരു കുട്ടിയുടെ വികാസം ഒരു നിശ്ചിത ക്രമം പാലിക്കുന്നു. വികാസം കേന്ദ്രഭാഗത്തു നിന്നും തുടങ്ങി പുറംഭാഗങ്ങളിലേക്ക് വ്യാപിക്കുന്ന വികാസ തത്വം ഏതാണ് ?",
    "options": [
      "സെഫാലോകോഡൽ",
      "പ്രോക്സിമോഡിസ്റ്റൽ (Proximodistal)",
      "വിഭജന തത്വം",
      "തുടർ പ്രക്രിയ തത്വം"
    ],
    "correct": 1
  },
  {
    "q": "ഒരു കുട്ടിയുടെ മാനസീക വയസ്സും (MA) കാലിക വയസ്സും (CA) തുല്യമായാൽ കുട്ടിയുടെ ബുദ്ധിമാനം (IQ) എത്രയായിരിക്കും ?",
    "options": [
      "90",
      "100",
      "110",
      "120"
    ],
    "correct": 1
  },
  {
    "q": "താഴെ പറയുന്നവയിൽ ഏതാണ് കുട്ടിയുടെ സാമൂഹികവൽക്കരണ പ്രക്രിയയിൽ (Socialization) ഏറ്റവും പ്രധാനപ്പെട്ട പ്രാഥമിക ഏജൻസി ?",
    "options": [
      "സ്കൂൾ",
      "കുടുംബം (Family)",
      "സമപ്രായക്കാരുടെ കൂട്ടം",
      "മാധ്യമങ്ങൾ"
    ],
    "correct": 1
  },
  {
    "q": "റോബർട്ട് ഗാഗ്നെയുടെ പഠന ശ്രേണി സിദ്ധാന്തപ്രകാരം (Hierarchy of Learning), ഏറ്റവും ഉയർന്ന പഠന രൂപം ഏതാണ് ?",
    "options": [
      "തത്ത്വ പഠനം",
      "പ്രശ്ന പരിഹാര പഠനം (Problem Solving)",
      "ആശയ പഠനം",
      "സൂചന പഠനം"
    ],
    "correct": 1
  },
  {
    "q": "താഴെ പറയുന്നവയിൽ ഏതാണ് കുട്ടിയുടെ നിരന്തര മൂല്യനിർണ്ണയത്തിന് (Formative Assessment) ഉപയോഗിക്കാവുന്ന ഏറ്റവും അനുയോജ്യമായ ഉപകരണം ?",
    "options": [
      "വാർഷിക പരീക്ഷ",
      "പോർട്ട്ഫോളിയോ (Portfolio)",
      "ടേം പരീക്ഷ",
      "പൊതു പരീക്ഷ"
    ],
    "correct": 1
  },
  {
    "q": "തൻ്റെ പരീക്ഷാ പരാജയത്തിന് കാരണം അധ്യാപകൻ്റെ കഠിനമായ മൂല്യനിർണ്ണയമാണെന്ന് കുട്ടി വാദിക്കുന്നു. ഇവിടെ കുട്ടി ഉപയോഗിച്ച പ്രതിരോധ തന്ത്രം ഏതാണ് ?",
    "options": [
      "വിസ്ഥാപനം",
      "യുക്തീകരണം (Rationalization)",
      "പ്രക്ഷേപണം",
      "പ്രതിപൂർത്തീകരണം"
    ],
    "correct": 1
  },
  {
    "q": "ഉൾക്കാഴ്ചാ പഠന സിദ്ധാന്തവുമായി (Insightful Learning) ബന്ധപ്പെട്ട മനഃശാസ്ത്രജ്ഞന്മാരുടെ കൂട്ടം ഏതാണ് ?",
    "options": [
      "ബിഹേവിയറിസ്റ്റുകൾ",
      "गെസ്റ്റാൾട്ട് മനഃശാസ്ത്രജ്ഞർ (Gestalt Psychologists)",
      "ഹ്യൂമനിസ്റ്റുകൾ",
      "കൺസ്ട്രക്റ്റിവിസ്റ്റുകൾ"
    ],
    "correct": 1
  },
  {
    "q": "ക്ലാസ്സിൽ കുട്ടികളുടെ ചിന്താശേഷിയും സർഗ്ഗാത്മകതയും വളർത്തുന്നതിനായി അധ്യാപകർ ഉപയോഗിക്കുന്ന 'മസ്തിഷ്ക പ്രക്ഷാളനം' (Brainstorming) എന്ന തന്ത്രം ആവിഷ്കരിച്ചത് ആര് ?",
    "options": [
      "അലക്സ് ഓസ്ബോൺ",
      "ബി. എഫ്. സ്കിന്നർ",
      "ഇവാൻ പാവ്‌ലോവ്",
      "ജീൻ പിയാഷെ"
    ],
    "correct": 0
  },
  {
    "q": "വൈഗോഡ്‌സ്‌കിയുടെ സിദ്ധാന്തപ്രകാരം, കുട്ടിയുടെ വികാസത്തിൽ മുതിർന്നവരോ സമപ്രായക്കാരോ നൽകുന്ന താൽക്കാലിക സഹായ സംവിധാനത്തെ പറയുന്ന പേര് :",
    "options": [
      "സ്കീമ",
      "കൈത്താങ്ങ് (Scaffolding)",
      "സന്തുലിതാവസ്ഥ",
      "സമീകരണ പ്രക്രിയ"
    ],
    "correct": 1
  },
  {
    "q": "ബുദ്ധിയുടെ ദ്വിഘടക സിദ്ധാന്തത്തിൻ്റെ (Two-Factor Theory) ഉപജ്ഞാതാവ് ആരാണ് ?",
    "options": [
      "ആൽഫ്രഡ് ബിനെ",
      "ചാൾസ് സ്പിയർമാൻ (Charles Spearman)",
      "തഴ്സ്റ്റൺ",
      "ഗിൽഫോർഡ്"
    ],
    "correct": 1
  },
  {
    "q": "പഠിതാവിൻ്റെ പെരുമാറ്റത്തെ സമ്മാനങ്ങളിലൂടെയും അനുകൂല പ്രതികരണങ്ങളിലൂടെയും രൂപപ്പെടുത്താൻ സഹായിക്കുന്ന ചോദകം അറിയപ്പെടുന്നത് :",
    "options": [
      "ശിക്ഷ",
      "പ്രബലനം (Reinforcement)",
      "വിലോപം",
      "വിവേചനം"
    ],
    "correct": 1
  },
  {
    "q": "ഡാനിയൽ ഗോൾമാൻ മുന്നോട്ടുവെച്ച വൈകാരിക ബുദ്ധിയുടെ (Emotional Intelligence) കാതലായ ഘടകങ്ങളിൽ ഉൾപ്പെടാത്തത് ഏതാണ് ?",
    "options": [
      "സ്വയം അറിയൽ",
      "അനുതാപം (Empathy)",
      "ബാഹ്യ പ്രേരണ (Extrinsic Motivation)",
      "സാമൂഹിക നൈപുണ്യങ്ങൾ"
    ],
    "correct": 2
  },
  {
    "q": "താഴെ പറയുന്നവയിൽ കൗമാരപ്രായത്തിൻ്റെ (Adolescence) ഏറ്റവും പ്രധാനപ്പെട്ട സവിശേഷത ഏതാണ് ?",
    "options": [
      "വസ്തു സ്ഥിരത",
      "സ്വത്വ പ്രതിസന്ധി (Identity Crisis)",
      "സർവ്വചേതനവാദം",
      "അനുകരണം മാത്രം കാണിക്കൽ"
    ],
    "correct": 1
  },
  {
    "q": "ഒരു വ്യക്തി തൻ്റെ വികാരങ്ങളെയും ആഗ്രഹങ്ങളെയും കൃത്യമായി മനസ്സിലാക്കാനും സ്വയം നിയന്ത്രിക്കാനും കാണിക്കുന്ന ബുദ്ധിശക്തി ഏതാണ് ?",
    "options": [
      "വ്യക്ത്യാന്തര ബുദ്ധി",
      "ആന്തരിക വൈയക്തിക ബുദ്ധി (Intrapersonal Intelligence)",
      "സാമൂഹിക ബുദ്ധി",
      "ഭാഷാപരമായ ബുദ്ധി"
    ],
    "correct": 1
  },
  {
    "q": "എബ്രഹാം മാസ്‌ലോയുടെ ആവശ്യങ്ങളുടെ ശ്രേണിയിൽ ഏറ്റവും താഴെ തട്ടിലുള്ള ഏറ്റവും അടിസ്ഥാനപരമായ ആവശ്യം ഏതാണ് ?",
    "options": [
      "ശാരീരികാവശ്യങ്ങൾ",
      "സ്നേഹിക്കുക, സ്നേഹിക്കപ്പെടുക",
      "ആദരിക്കപ്പെടാനുള്ള ആഗ്രഹം",
      "ആത്മസാക്ഷാത്കാരം."
    ],
    "correct": 0
  },
  {
    "q": "തീവ്രവും നിർണായകവുമായ സാമൂഹ്യ- വൽക്കരണം നടക്കുന്നത് :",
    "options": [
      "ബാല്യകാലത്ത് (ശൈശവം)",
      "കുട്ടിക്കാലത്ത്",
      "കൗമാരകാലത്ത്.",
      "മുതിർന്ന കാലത്ത്"
    ],
    "correct": 2
  },
  {
    "q": "താഴെ കൊടുത്തവയിൽ പ്രക്ഷേപണരീതി ഏത് ?",
    "options": [
      "തീമാറ്റിക് അപ്പർ സെപ്ഷൻ ടെസ്റ്റ്",
      "റോഷയുടെ mഷിയൊപ്പ് പരീക്ഷ",
      "വൈയക്തിക പ്രശ്‌നപരിഹരണരീതി",
      "(A), (B) എന്നിവ."
    ],
    "correct": 3
  },
  {
    "q": "ഏതു സാഹചര്യത്തിൽ നടപ്പിലാക്കി യാലും ഒരേ സ്കോർ ലഭക്കുന്നുവെങ്കിൽ അത്തരം ടെസ്റ്റിന്റെ ഏതുഗുണമാണ് ഇവിടെ പ്രകടമാകുന്നത് ?",
    "options": [
      "സാധുത",
      "വിവേചനപരത",
      "വസ്തുനിഷ്‌ഠത.",
      "വിശ്വാസ്യത"
    ],
    "correct": 3
  },
  {
    "q": "ആദിബാല്യദശയിൽ പിതാവിനോട് പുത്രി കാണിക്കുന്ന തീവ്രമായ വൈകാരിക ബന്ധത്തെ വിളിക്കുന്ന പേര് ?",
    "options": [
      "മനോലൈംഗികവികാസം",
      "ഈഡിപ്പസ് കോംപ്ലക്സ്",
      "മногоവിശ്ലേഷണം",
      "ഇലക്ട്രാ കോംപ്ലക്സ്"
    ],
    "correct": 3
  },
  {
    "q": "ഒരു കുട്ടി തൻ്റെ കളിപ്പാട്ടങ്ങൾ മറ്റുള്ളവർക്ക് പങ്കുവെക്കാൻ വിസമ്മതിക്കുകയും അത് തന്റേതു മാത്രമാണെന്ന് വാദിക്കുകയും ചെയ്യുന്നു. പിയാഷെയുടെ വൈജ്ഞാനിക വികാസ സിദ്ധാന്തപ്രകാരം ഇത് കുട്ടിയുടെ ഏത് പരിമിതിയാണ് സൂചിപ്പിക്കുന്നത്?",
    "options": [
      "സർവ്വചേതനവാദം",
      "ആത്മകേന്ദ്രീകൃത ചിന്ത (Egocentrism)",
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
      "ലളിതമായ കാര്യങ്ങൾ ഗ്രഹിക്കുന്നതിലെ മന്ദത"
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
