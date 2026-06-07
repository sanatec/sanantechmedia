document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
  {
    "q": "പ്രോഗ്രാമ്ഡ് ലേണിങ് ആരുടെ പഠന സിദ്ധാന്തത്തെ ആസ്പദമാക്കിയുള്ളതാണ് ?",
    "options": [
      "പാവ്ലോ",
      "സ്കിന്നർ",
      "കോഹ്ലർ",
      "ബന്ദൂര"
    ],
    "correct": 1
  },
  {
    "q": "ബുദ്ധിമാപനത്തിനുള്ള കൾച്ചർ ഫെയർ ടെസ്റ്റ് നിർമ്മിച്ചത് ആര് ?",
    "options": [
      "കാറ്റൽ",
      "ഭാട്ടിയ",
      "വെച്ച്ലർ",
      "ബിനെ"
    ],
    "correct": 0
  },
  {
    "q": "ഒരു പെൺകുട്ടി 'ഞാൻ ശോഭനയെപ്പോലെ നൃത്തം ചെയ്യും' എന്ന് പറയുകയും അതിനു വേണ്ടി ശ്രമിക്കുകയും ചെയ്യുന്നു. ഇത് ആരുടെ സിദ്ധാന്തവുമായി ബന്ധപ്പെട്ടിരിക്കുന്നു ?",
    "options": [
      "ബന്ധുര",
      "വൈഗോഡ്സ്കി",
      "അസ്ബൽ",
      "ബ്രൂണർ"
    ],
    "correct": 0
  },
  {
    "q": "പേഴ്സണൽ ഡിസ്പോസിഷൻ എന്ന പദം ആദ്യമായി ഉപയോഗിച്ചത് ആര് ?",
    "options": [
      "കാറ്റൽ",
      "ആൾപോർട്ട്",
      "ഐസെൻക്",
      "ക്രെഷ്മർ"
    ],
    "correct": 1
  },
  {
    "q": "'M.K.O.' (More Knowledgeable Other) എന്ന പദം നിർദ്ദേശിച്ചത് ആര് ?",
    "options": [
      "കോൾബർഗ്",
      "വൈഗോട്സ്കി",
      "ചോംസ്കി",
      "സച്മൻ"
    ],
    "correct": 1
  },
  {
    "q": "അബ്രഹാം മാസ്ലോയുടെ ആവശ്യങ്ങളുടെ ശ്രേണിയിൽ ഏറ്റവും ഉയർന്ന നിലവാരത്തിലുള്ളവ ഏത് ?",
    "options": [
      "ശാരീരിക അടിസ്ഥാന ആവശ്യങ്ങൾ",
      "സുരക്ഷ ആവശ്യങ്ങൾ",
      "സ്നേഹവും സ്വന്തബോധവും",
      "ആത്മ സാക്ഷാത്കാര ആവശ്യങ്ങൾ"
    ],
    "correct": 3
  },
  {
    "q": "ചിൽഡ്രൻസ് അപ്പർസെപ്ഷൻ ടെസ്റ്റ് (CAT) നിർമ്മിച്ചതാരാണ് ?",
    "options": [
      "ബെല്ലക്ക്",
      "മോർഗൻ",
      "മുറെ",
      "സി.ജി. യുങ്"
    ],
    "correct": 0
  },
  {
    "q": "പിയാഷെയുടെ അഭിപ്രായത്തിൽ ബുദ്ധി വളർച്ചയുടെ ഘട്ടങ്ങളിൽ കുട്ടികൾ 'പ്രതീകാത്മക കളികളിൽ' ഏർപ്പെടുന്ന ഘട്ടം ഏതാണ് ?",
    "options": [
      "സെൻസറി മോട്ടർ സ്റ്റേജ്",
      "പ്രി കൺസെപ്ച്വൽ സ്റ്റേജ്",
      "കോൺക്രീറ്റ് ഓപ്പറേഷണൽ സ്റ്റേജ്",
      "ഫോർമൽ ഓപ്പറേഷണൽ സ്റ്റേജ്"
    ],
    "correct": 1
  },
  {
    "q": "'പ്രീ ഗാംങ് ഏജ്' എന്നറിയപ്പെടുന്ന കാലഘട്ടം ഏതാണ് ?",
    "options": [
      "ശൈശവം",
      "ആദി ബാല്യം",
      "ബാല്യാന്തം",
      "കൗമാരം"
    ],
    "correct": 1
  },
  {
    "q": "ക്ലാസിൽ പരീക്ഷണം നടത്തുന്നതിനിടയിൽ കുട്ടികളോട് അധ്യാപിക ചോദ്യം ചോദിക്കുന്നു. ഈ മൂല്യ നിർണ്ണയം ഏതു വിഭാഗത്തിൽപ്പെടുന്നു ?",
    "options": [
      "ആത്യന്തിക മൂല്യ നിർണ്ണയം",
      "സമഗ്ര മൂല്യ നിർണ്ണയം",
      "സംരചനാ മൂല്യ നിർണ്ണയം",
      "ഇവയൊന്നുമല്ല"
    ],
    "correct": 2
  },
  {
    "q": "ഗിൽഫോർഡിന്റെ ബുദ്ധി സിദ്ധാന്ത മാതൃകയിൽ ഉൾപ്പെടുത്തിയിരിക്കുന്നത് താഴെ പറയുന്നവയിൽ ഏതാണ് ?",
    "options": [
      "യൂണിറ്റുകൾ",
      "ഉൽപ്പന്നങ്ങൾ",
      "പ്രവർത്തനങ്ങൾ",
      "ഉള്ളടക്കം"
    ],
    "correct": 1
  },
  {
    "q": "ബോണ്ട് തിയറി ഓഫ് ലേണിംഗ് (Bond Theory of Learning) നിർദ്ദേശിച്ചത് ആര് ?",
    "options": [
      "പാവ്ലോവ്",
      "സ്കിന്നർ",
      "ബന്ധുറ",
      "തോൺഡൈക്"
    ],
    "correct": 3
  },
  {
    "q": "മാക്സ് വെർതൈമർ എന്ന പേര് ഏത് പഠന സിദ്ധാന്തവുമായി ബന്ധപ്പെട്ടിരിക്കുന്നു ?",
    "options": [
      "കണ്ടീഷനിങ്",
      "ഉൾക്കാഴ്ചാ സിദ്ധാന്തം",
      "ട്രയൽ ആന്റ് എറർ ലേണിങ്",
      "കൺസ്ട്രക്ടിവിസം"
    ],
    "correct": 1
  },
  {
    "q": "ജനറ്റിക് എപ്പിസ്റ്റമോളജി (Genetic Epistemology) ആരുടെ സംഭാവനയാണ് ?",
    "options": [
      "പിയാഷെ",
      "വൈഗോട്സ്കി",
      "ബ്രൂണർ",
      "അസുബെൽ"
    ],
    "correct": 0
  },
  {
    "q": "'ഫ്രെയിംസ് ഓഫ് മൈൻഡ്' എന്ന പുസ്തകം എഴുതിയത് ആര് ?",
    "options": [
      "ഗാർഡനർ",
      "ഗിൽ ഫോർഡ്",
      "തേഴ്സ്റ്റൺ",
      "സ്പിയർമാൻ"
    ],
    "correct": 0
  },
  {
    "q": "ZPD എന്നാൽ എന്താണ് ?",
    "options": [
      "Zone of Partial Development",
      "The Zone of Potential Development",
      "The Zone of Proximal Development",
      "The Zone of Permanent Development"
    ],
    "correct": 2
  },
  {
    "q": "ഇൻക്ലൂസീവ് എഡ്യുക്കേഷൻ (Inclusive Education) എന്ന പദം ആദ്യമായി നിർദ്ദേശിച്ചതാര് ?",
    "options": [
      "ഗിൽഫോർഡ്",
      "കർട്ട് ലെവിൻ",
      "ജോൺ ഡ്യൂയി",
      "മാർക്ക് ഗസ്പെർഡ്"
    ],
    "correct": 3
  },
  {
    "q": "ഒരു വിദ്യാർത്ഥി അധ്യാപകനിൽ നിന്നുള്ള ശിക്ഷ ഭയന്ന് എല്ലാ ദിവസവും ഗൃഹ പാഠം ചെയ്യുന്നതിനു കാരണം :",
    "options": [
      "ആന്തരിക അഭിപ്രേരണ",
      "ബാഹ്യ അഭിപ്രേരണ",
      "അഭിരുചി",
      "പരാജയ ഭീതി"
    ],
    "correct": 1
  },
  {
    "q": "താഴെ കൊടുത്തിരിക്കുന്നവരിൽ പരിസരവാദി (Environmentalist) ആരാണ് ?",
    "options": [
      "ഗോഡാഡ്",
      "ടർമാൻ",
      "ഫ്രാൻസിസ് ഗാൽട്ടൻ",
      "വാട്ട്സൺ"
    ],
    "correct": 3
  },
  {
    "q": "പ്രൈമറി സ്കൂൾ വിദ്യാർത്ഥിനിയായ അഞ്ജലി സ്കൂൾ പ്രവർത്തനങ്ങളിൽ താൽപര്യത്തോടുകൂടി പങ്കെടുക്കുകയും അതിൽ ആനന്ദം കണ്ടെത്തുകയും ചെയ്യുന്നു. മനോസാമൂഹ്യ വികാസ സിദ്ധാന്തമനുസരിച്ച് അവൾ ഏതു പ്രകൃതത്തെയാണ് പ്രതിഫലിപ്പിക്കുന്നത് ?",
    "options": [
      "അപകർഷത",
      "സ്വാതന്ത്ര്യം",
      "ഊർജ്ജസ്വലത (Industry)",
      "സ്വാവബോധം"
    ],
    "correct": 2
  },
  {
    "q": "പാഠ്യ പ്രവർത്തനങ്ങൾ കൂട്ടുകാരുമായി ചർച്ച ചെയ്യാനും അതുവഴി സ്കൂളിലെ വിവിധ പ്രകടനങ്ങൾ മെച്ചമാക്കാനും അർജ്ജുൻ താൽപര്യം കാണിക്കുന്നു. അവനിൽ പ്രകടമായിരിക്കുന്ന കഴിവ് ഏത് ?",
    "options": [
      "ഉയർന്ന IQ",
      "വ്യക്ത്യാന്തര ബുദ്ധി (Interpersonal Intelligence)",
      "ആന്തരിക വൈയക്തിക ബുദ്ധി",
      "സമപ്രായക്കാരുടെ സ്വാധീനം"
    ],
    "correct": 1
  },
  {
    "q": "ഗാഗ്നെയുടെ പഠന ശ്രേണിയനുസരിച്ചുള്ള ശരിയായ ക്രമം രേഖപ്പെടുത്തുക :\n(1) ചെയിനിംഗ് (2) പ്രശ്നപരിഹരണം (3) S-R പഠനം (4) ആശയങ്ങൾ",
    "options": [
      "(4) - (2) - (1) - (3)",
      "(3) - (1) - (4) - (2)",
      "(1) - (3) - (4) - (2)",
      "(3) - (4) - (1) - (2)"
    ],
    "correct": 1
  },
  {
    "q": "എബ്രഹാം മാസ്ലോയുടെ ആവശ്യങ്ങളുടെ ശ്രേണി അനുസരിച്ച് താഴെപ്പറയുന്നവയിൽ ന്യൂനതാപരമായ ആവശ്യം (Deficiency Need) ഏതാണ് ?",
    "options": [
      "സുരക്ഷിതത്വം",
      "വൈജ്ഞാനിക ആവശ്യം",
      "ആത്മ സാക്ഷാത്കാരം",
      "സൗന്ദര്യാത്മക ആവശ്യം"
    ],
    "correct": 0
  },
  {
    "q": "സ്വന്തം വികാരങ്ങളേയും മറ്റുള്ളവരുടെ വികാരങ്ങളേയും മനസ്സിലാക്കാൻ കഴിവുള്ള ഒരു കുട്ടിയിൽ പ്രകടമായിരിക്കുന്നത് :",
    "options": [
      "വൈകാരിക ബുദ്ധി",
      "വൈകാരിക സഹിഷ്ണുത",
      "വൈകാരിക ആധിപത്യം",
      "വൈകാരിക ശൂന്യത"
    ],
    "correct": 0
  },
  {
    "q": "താഴെപ്പറയുന്ന പാരിസ്ഥിതിക ഘടകങ്ങളിൽ ഏതാണ് കുട്ടിയുടെ സാമൂഹ്യവൽക്കരണത്തെ നേരിട്ട് ബാധിക്കാത്തത് ?",
    "options": [
      "കുടുംബം",
      "സഹപാഠികൾ",
      "വിദ്യാലയം",
      "താൽപര്യം"
    ],
    "correct": 3
  },
  {
    "q": "താഴെപ്പറയുന്ന ഏതു സിദ്ധാന്തമാണ് കുട്ടികളിൽ പേടി ജനിപ്പിക്കുന്നതിനും അത് ഇല്ലാതാക്കാനും ഉപയോഗിക്കാവുന്നത് ?",
    "options": [
      "ക്ലാസ്സിക്കൽ കണ്ടീഷനിംഗ്",
      "ഓപ്പറന്റ് കണ്ടീഷനിംഗ്",
      "പ്രത്യക്ഷന ഘടനാരൂപീകരണം",
      "എക്സ്റ്റിൻഷൻ നിയമം"
    ],
    "correct": 0
  },
  {
    "q": "താഴെപ്പറയുന്നവയിൽ പഠനത്തിൽ പിന്നാക്കമായവർക്ക് ഏറ്റവും അനുയോജ്യമായ ബോധനരീതി ഏതാണ് ?",
    "options": [
      "അവർക്കു ചെയ്യാൻ കഴിയുന്ന പ്രവർത്തനങ്ങൾ മാത്രം നൽകുക",
      "പ്രയാസമേറിയ പ്രവർത്തനങ്ങൾ നൽകി അവരെ അതുമായി പൊരുത്തപ്പെടുത്തുക",
      "ഏകാഗ്രതയും കൂടുതൽ പരിശ്രമവും ആവശ്യമായ പ്രവർത്തനങ്ങൾ നൽകുക",
      "കൂടുതൽ ഗൃഹപാഠങ്ങൾ നൽകുക"
    ],
    "correct": 0
  },
  {
    "q": "താഴെപ്പറയുന്നവയിൽ ഓർമ്മയുടെ തന്ത്രം (Memory Strategy) അല്ലാത്തത് ഏതാണ് ?",
    "options": [
      "നിമോണിക്സ്",
      "ദൃശ്യവൽക്കൃത പഠനം",
      "പദ സഹചരണം",
      "അധിക പഠനം"
    ],
    "correct": 3
  },
  {
    "q": "ഒരു ക്ലാസ്സിലെ കുട്ടികളുടെ സാമൂഹിക ബന്ധങ്ങളെ വിലയിരുത്താൻ ഉപയോഗിക്കുന്ന ഏറ്റവും അനുയോജ്യമായ രീതി ഏത് ?",
    "options": [
      "ചോദ്യാവലി",
      "ഇന്റർവ്യൂ",
      "സോഷ്യോമെട്രി (Sociometry)",
      "നിരീക്ഷണം"
    ],
    "correct": 2
  },
  {
    "q": "പഠനത്തോടൊപ്പം കുറിപ്പെഴുതി പഠിക്കുന്ന രീതിയാണ് രാജുവിനെ പഠനം എളുപ്പമാക്കാൻ സഹായിക്കുന്നത്. അവൻ ഏതുതരം പഠിതാവാണ് ?",
    "options": [
      "ദൃശ്യ പഠിതാവ്",
      "ശ്രവ്യ പഠിതാവ്",
      "ലോജിക്കൽ പഠിതാവ്",
      "കൈനെസ്തെറ്റിക് പഠിതാവ്"
    ],
    "correct": 3
  },
  {
    "q": "ഒരു കുട്ടിയെ തന്റെ പൊട്ടൻഷ്യൽ നിലയിലേയ്ക്ക് ഉയരുന്നതിനാവശ്യമായ താല്ക്കാലിക പഠന പിന്തുണ നൽകി സഹായിക്കുന്ന പ്രക്രിയയാണ് :",
    "options": [
      "പ്രബലനം",
      "കൈത്താങ്ങ് (Scaffolding)",
      "വികാസം",
      "അഭിപ്രേരണ"
    ],
    "correct": 1
  },
  {
    "q": "താഴെപ്പറയുന്ന മനശ്ശാസ്ത്രവിദഗ്ദ്ധരിൽ ആരാണ് സാമൂഹിക നിരീക്ഷണ പഠനത്തിന് (Social Observational Learning) ഊന്നൽ നൽകിയത് ?",
    "options": [
      "ജെറോം എസ്. ബ്രൂണർ",
      "ലെവ് വൈഗോഡ്സ്കി",
      "ആൽബർട്ട് ബൻഡൂര",
      "ഡാനിയൽ ഗോൾമാൻ"
    ],
    "correct": 2
  },
  {
    "q": "കുട്ടികളുടെ പ്രകടനം വിലയിരുത്തി എത്രയും പെട്ടെന്ന് തന്നെ അതിന്റെ ഫലം കുട്ടികളെ അറിയിക്കുന്നത് വഴി പഠനം മെച്ചപ്പെടുന്നു. ഇത് തോൺഡൈക്കിന്റെ ഏത് നിയമത്തെ അടിസ്ഥാനപ്പെടുത്തിയാണ് ?",
    "options": [
      "അസ്സോസ്സിയേഷൻ നിയമം",
      "സന്നദ്ധതാ നിയമം",
      "പ്രവർത്തന നിയമം",
      "ഫലപ്രാപ്തി നിയമം (Law of Effect)"
    ],
    "correct": 3
  },
  {
    "q": "സിദ്ധാന്തങ്ങളും അവയുടെ പ്രായോഗികതയും തമ്മിലുള്ള ബന്ധത്തെ ചോദ്യം ചെയ്യാനും വിശകലനം ചെയ്യാനും അവസരമൊരുക്കുന്ന പഠന അധ്യാപന രീതിയെ പറയുന്നത് :",
    "options": [
      "വിമർശനാത്മക ബോധന ശാസ്ത്രം (Critical Pedagogy)",
      "പുനർ നിർമ്മിതി ബോധന ശാസ്ത്രം",
      "സർഗ്ഗാത്മക ബോധന ശാസ്ത്രം",
      "നിർമ്മിതിവാദ ബോധന ശാസ്ത്രം"
    ],
    "correct": 0
  },
  {
    "q": "ബുദ്ധിയുടെ വിവര സംസ്കരണ സിദ്ധാന്തത്തിന്റെ (Triarchic Theory of Information Processing) ഉപജ്ഞാതാവ് ആരാണ് ?",
    "options": [
      "ജെറോം എസ്. ബ്രൂണർ",
      "റോബർട്ട് സ്റ്റേൺബർഗ്",
      "ഇ.എൽ. തോൺഡൈക്ക്",
      "ഹൊവാർഡ് ഗാർഡ്നർ"
    ],
    "correct": 1
  },
  {
    "q": "കുട്ടികളിൽ യുക്തിചിന്ത പൂർണ്ണമായി രൂപപ്പെടുന്ന ഘട്ടത്തിന്റെ പേരെന്ത് ?",
    "options": [
      "ശൈശവം",
      "ആദി ബാല്യം",
      "അന്ത്യ ബാല്യം",
      "കൗമാരം"
    ],
    "correct": 3
  },
  {
    "q": "താഴെപ്പറയുന്നവരിൽ ആരാണ് വൈജ്ഞാനിക വികാസ സിദ്ധാന്തവുമായി (Cognitive Development Theory) പ്രധാനമായും ബന്ധപ്പെട്ടിരിക്കുന്നത് ?",
    "options": [
      "യാങ് പിയാഷെ",
      "സ്കിന്നർ",
      "ഡേവിഡ് ഓസുബൽ",
      "ആൽബർട്ട് ബൻഡൂര"
    ],
    "correct": 0
  },
  {
    "q": "വികാസവും പഠനവുമായി ബന്ധപ്പെട്ട രണ്ടു പ്രസ്താവനകളാണ് താഴെ കൊടുത്തിരിക്കുന്നത്.\n1. വികാസം പഠനത്തിന് അപേക്ഷണീയമാണ് (Pre-requisite)\n2. വികാസവും പഠനവും പരസ്പരം ബന്ധപ്പെട്ടിരിക്കുന്നു.\n\nഇവ അനുസരിച്ച് താഴെ പറയുന്നവയിൽ ശരിയേത് ?",
    "options": [
      "പ്രസ്താവന 1 ശരിയാണ്",
      "പ്രസ്താവന 2 ശരിയാണ്",
      "രണ്ടു പ്രസ്താവനകളും ശരിയാണ്",
      "രണ്ടു പ്രസ്താവനകളും തെറ്റാണ്"
    ],
    "correct": 1
  },
  {
    "q": "ശരിയായ ചേരുംപടി തിരഞ്ഞെടുക്കുക :\n(1) ജീവിത നൈപുണി — (c) തീരുമാനമെടുക്കൽ\n(2) ചിന്തയെക്കുറിച്ചുള്ള ചിന്ത — (a) റിഫ്ലക്ടീവ് പരിശീലനം\n(3) ഭിന്നശേഷിക്കാർ — (b) അസിസ്റ്റീവ് സാങ്കേതിക വിദ്യ\n(4) കൗൺസലിംഗ് — (d) നോൺ ഡൈറക്ടീവ്",
    "options": [
      "(1)-(b), (2)-(c), (3)-(d), (4)-(a)",
      "(1)-(d), (2)-(c), (3)-(a), (4)-(b)",
      "(1)-(a), (2)-(d), (3)-(b), (4)-(c)",
      "(1)-(c), (2)-(a), (3)-(b), (4)-(d)"
    ],
    "correct": 3
  },
  {
    "q": "കളികളിലൂടെ പാഠഭാഗങ്ങൾ കുട്ടികൾക്കു പകർന്നു നൽകുന്ന അധ്യാപകൻ പ്രധാനമായും ഉപയോഗപ്പെടുത്തുന്നത് :",
    "options": [
      "ആന്തരിക പ്രേരണ (Intrinsic Motivation)",
      "ബാഹ്യ പ്രേരണ",
      "ആന്തരിക പ്രേരണയും ബാഹ്യ പ്രേരണയും",
      "ആന്തരിക പ്രേരണയോ ബാഹ്യ പ്രേരണയോ അല്ല"
    ],
    "correct": 0
  },
  {
    "q": "സ്വന്തം കൂട്ടുകാരുടെ വിജയങ്ങളെ ആഘോഷിക്കുകയും അതിൽ സംതൃപ്തി കണ്ടെത്തുകയും ചെയ്യുന്ന ഒരു വിദ്യാർത്ഥി ഉപയോഗപ്പെടുത്തുന്ന സമായോജന തന്ത്രം (Adjustment Mechanism) ഏത് ?",
    "options": [
      "പ്രക്ഷേപണം",
      "യുക്തീകരണം",
      "നഷ്ടപരിഹാരം",
      "താദാത്മീകരണം (Identification)"
    ],
    "correct": 3
  },
  {
    "q": "രാകേഷിന് വായനാപരമായ ന്യൂനതയുണ്ട് (Reading Difficulty). ഈ അവസ്ഥക്ക് പറയുന്നത് എന്താണ് ?",
    "options": [
      "ഡിസ്കാൽകുലിയ",
      "ഡിസ്ലെക്സിയ",
      "ഡിസ്ഗ്രാഫിയ",
      "ബുദ്ധിപരമായ വെല്ലുവിളി"
    ],
    "correct": 1
  },
  {
    "q": "ചുവടെ കൊടുത്തിരിക്കുന്നതിൽ ഗസ്റ്റാൾട്ട് സൈക്കോളജിയെ (Gestalt Psychology) സംബന്ധിച്ച് ശരിയായ പ്രസ്താവന ഏത് ?",
    "options": [
      "ചോദകങ്ങളും പ്രതികരണങ്ങളും തമ്മിലുള്ള ബന്ധനത്തിന്റെ ഫലമാണ് പഠനം",
      "അർത്ഥവത്തായ വാചിക പഠനത്തിന് ഊന്നൽ നൽകുന്നു",
      "പരിപക്വനത്തിന്റെ ഫലമാണ് പഠനം",
      "ഇതു ഉൾക്കാഴ്ചാ പഠനത്തിന് (Insightful Learning) ഊന്നൽ നൽകുന്നു"
    ],
    "correct": 3
  },
  {
    "q": "ശാസ്ത്രവിഷയങ്ങളിലെ ഫോർമുലകളും സമവാക്യങ്ങളും തിരിച്ചുവെച്ച് വിശകലനം ചെയ്യുന്നതിന് രേണു വളരെ ബുദ്ധിമുട്ടുന്നു. മനശ്ശാസ്ത്രപരമായി അവൾക്കുള്ള പരിമിതി ഏതാണ് ?",
    "options": [
      "വസ്തു സ്ഥിരത",
      "കൺസർവേഷൻ",
      "യുക്തി ചിന്ത",
      "റിവേഴ്സിബിൾ ചിന്ത (Reversible Thinking)"
    ],
    "correct": 3
  },
  {
    "q": "താഴെപ്പറയുന്നവയിൽ ഏതു വികാസ പ്രമാണമാണ് (Developmental Principle) അധ്യാപനത്തിലെ ആഗമന രീതിയുടെ (Inductive Method) അടിസ്ഥാനമായിട്ടുള്ളത് ?",
    "options": [
      "വ്യക്തി വ്യത്യാസം",
      "സെഫാലോ കോഡൽ",
      "പ്രോക്സിമോ ഡിസ്റ്റൽ",
      "സാമാന്യത്തിൽ നിന്നും വിശേഷത്തിലേക്ക് (General to Specific)"
    ],
    "correct": 3
  },
  {
    "q": "വിദ്യാർത്ഥികളിൽ അഭിലക്ഷണീയമായ മാറ്റങ്ങൾക്കു വേണ്ടി ഒരു അധ്യാപകൻ അസുഖകരമായ ഋണാത്മക ചോദകങ്ങൾ ഒഴിവാക്കുന്നു. ഇവിടെ അധ്യാപകൻ പ്രയോജനപ്പെടുത്തുന്നത് :",
    "options": [
      "ധനാത്മക പ്രബലനം",
      "ഋണാത്മക പ്രബലനം (Negative Reinforcement)",
      "ധനാത്മക പ്രബലനവും ഋണാത്മക പ്രബലനവും",
      "ധനാത്മക പ്രബലനമോ ഋണാത്മക പ്രബലനമോ അല്ല"
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
