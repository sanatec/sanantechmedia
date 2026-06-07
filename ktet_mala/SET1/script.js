document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
  {
    "q": "കുട്ടിയുടെ മാനസികവും ശാരീരികവുമായ കഴിവുകൾ പ്രായത്തിനനുസരിച്ച് സ്വാഭാവികമായി വികസിക്കുന്ന പ്രക്രിയ ഏതാണ് ?",
    "options": [
      "വളർച്ച (Growth)",
      "പരിപക്വനം (Maturation)",
      "വികാസം (Development)",
      "പഠനം (Learning)"
    ],
    "correct": 1
  },
  {
    "q": "ഒരു കുട്ടിയുടെ വികാസം തലയിൽ തുടങ്ങി താഴോട്ട് വ്യാപിക്കുന്നു എന്ന തത്ത്വം ഏതാണ് ?",
    "options": [
      "പ്രോക്സിമോഡിസ്റ്റൽ ക്രമം (Proximodistal)",
      "സെഫാലോകോഡൽ ക്രമം (Cephalocaudal)",
      "രേഖീയ ക്രമം (Linear)",
      "തുടർച്ചാ തത്ത്വം (Continuity)"
    ],
    "correct": 1
  },
  {
    "q": "പിയാഷെയുടെ വൈജ്ഞാനിക വികാസ സിദ്ധാന്തപ്രകാരം 'വസ്തു സ്ഥിരത' (Object Permanence) കുട്ടി കൈവരിക്കുന്ന ഘട്ടം ഏത് ?",
    "options": [
      "ഇന്ദ്രിയ ചാലക ഘട്ടം (Sensory-motor stage)",
      "പ്രാഗ് മനോവ്യാപാര ഘട്ടം (Pre-operational stage)",
      "മൂർത്ത മനോവ്യാപാര ഘട്ടം (Concrete operational stage)",
      "ഔപചാരിക മനോവ്യാപാര ഘട്ടം (Formal operational stage)"
    ],
    "correct": 0
  },
  {
    "q": "ഒരു കുട്ടി ജീവനില്ലാത്ത വസ്തുക്കൾക്ക് ജീവനുള്ളവയുടെ സവിശേഷതകൾ കൽപ്പിക്കുന്ന അവസ്ഥ (Animism) കാണിക്കുന്നത് ഏത് ഘട്ടത്തിലാണ് ?",
    "options": [
      "ഇന്ദ്രിയ ചാലക ഘട്ടം",
      "പ്രാഗ് മനോവ്യാപാര ഘട്ടം",
      "മൂർത്ത മനോവ്യാപാര ഘട്ടം",
      "ഔപചാരിക മനോവ്യാപാര ഘട്ടം"
    ],
    "correct": 1
  },
  {
    "q": "വൈഗോഡ്സ്കിയുടെ സിദ്ധാന്തപ്രകാരം കുട്ടിയുടെ പഠനത്തിന് മുതിർന്നവർ നൽകുന്ന താല്കാലിക പിന്തുണയെ വിളിക്കുന്ന പേര് :",
    "options": [
      "സമീപസ്ഥ വികാസ മേഖല (ZPD)",
      "സ്കാഫോൾഡിങ് (Scaffolding)",
      "സ്കീമ (Schema)",
      "സ്വാംശീകരണം"
    ],
    "correct": 1
  },
  {
    "q": "ഭാഷ ചിന്തയ്ക്ക് മുൻപേ രൂപപ്പെടുന്നു എന്നും, ചിന്തയെ നിർണ്ണയിക്കുന്നത് ഭാഷയാണെന്നും വാദിച്ച മനഃശാസ്ത്രജ്ഞൻ ആര് ?",
    "options": [
      "ജീൻ പിയാഷെ",
      "ലെവ് വൈഗോഡ്സ്കി",
      "ബി. എഫ്. സ്കിന്നർ",
      "ജെറോം ബ്രൂണർ"
    ],
    "correct": 1
  },
  {
    "q": "കോൾബർഗിന്റെ ധാർമ്മിക വികാസ സിദ്ധാന്തപ്രകാരം 'നല്ല കുട്ടിയാകാൻ' (Good boy-Nice girl orientation) നിയമങ്ങൾ അനുസരിക്കുന്ന ഘട്ടം ഏത് തലത്തിലാണ് ?",
    "options": [
      "പൂർവ്വ യാഥാസ്ഥിതിക തലം",
      "യാഥാസ്ഥിതിക തലം (Conventional level)",
      "പശ്ചാത് യാഥാസ്ഥിതിക തലം",
      "വ്യവസ്ഥാപിത തലം"
    ],
    "correct": 1
  },
  {
    "q": "എറിക് എറിക്സൺ്റെ സിദ്ധാന്തപ്രകാരം ആദ്യബാല്യത്തിൽ (Early Childhood) കുട്ടി നേരിടുന്ന പ്രധാന പ്രതിസന്ധി ഏതാണ് ?",
    "options": [
      "വിശ്വാസ്യത അവിശ്വാസ്യതയ്ക്കെതിരെ",
      "സ്വയംഭരണാധികാരം സംശയത്തിനെതിരെ (Autonomy vs Shame & Doubt)",
      "ഊർജ്ജസ്വലത അപകർഷതയ്ക്കെതിരെ",
      "അനന്യത റോൾ ആശയക്കുഴപ്പത്തിനെതിരെ"
    ],
    "correct": 1
  },
  {
    "q": "വ്യവഹാരവാദത്തിന്റെ (Behaviorism) പിതാവായി അറിയപ്പെടുന്നത് ആര് ?",
    "options": [
      "ബി. എഫ്. സ്കിന്നർ",
      "ഇവാൻ പാവ്ലോവ്",
      "ജോൺ ബി. വാട്സൺ",
      "ഇ. എൽ. തോൺഡൈക്"
    ],
    "correct": 2
  },
  {
    "q": "തോൺഡൈക്കിന്റെ പഠന നിയമങ്ങളിൽ 'സമ്മാനങ്ങളും ശിക്ഷകളും' ഏത് നിയമവുമായി കൂടുതൽ ബന്ധപ്പെട്ടിരിക്കുന്നു ?",
    "options": [
      "സന്നദ്ധതാ നിയമം (Law of Readiness)",
      "പരിശീലന നിയമം (Law of Exercise)",
      "ഫല നിയമം (Law of Effect)",
      "ഉപയോഗ നിയമം"
    ],
    "correct": 2
  },
  {
    "q": "സ്കിന്നറുടെ പ്രവർത്തനാനുബന്ധന സിദ്ധാന്തത്തിൽ (Operant Conditioning) ഒരു നല്ല വ്യവഹാരം ആവർത്തിക്കാൻ നൽകുന്ന പ്രേരണയെ വിളിക്കുന്നത് :",
    "options": [
      "ചോദകം (Stimulus)",
      "പ്രതികരണം (Response)",
      "പ്രബലനം (Reinforcement)",
      "വിലോപം (Extinction)"
    ],
    "correct": 2
  },
  {
    "q": "പാവ്ലോവിന്റെ പരീക്ഷണത്തിൽ മണിയൊച്ച കേൾക്കുമ്പോൾ നായ ഉമിനീരൊഴുക്കുന്നത് ഏത് തരം പ്രതികരണമാണ് ?",
    "options": [
      "അനുബന്ധിത പ്രതികരണം (Conditioned Response)",
      "അനുബന്ധനം ചെയ്യാത്ത പ്രതികരണം",
      "സ്വാഭാവിക പ്രതികരണം",
      "നിഷ്ക്രിയ പ്രതികരണം"
    ],
    "correct": 0
  },
  {
    "q": "പരമ്പരാഗതമായി പഠിച്ച ഒരു കാര്യം പുതിയൊരു കാര്യത്തെ പഠിക്കുന്നതിന് തടസ്സം സൃഷ്ടിക്കുമ്പോൾ അവിടെ സംഭവിക്കുന്ന പഠന സംക്രമണം ഏതാണ് ?",
    "options": [
      "സകാരാത്മക സംക്രമണം",
      "നകാരാത്മക സംക്രമണം (Negative Transfer)",
      "ശൂന്യ സംക്രമണം",
      "പാർശ്വിക സംക്രമണം"
    ],
    "correct": 1
  },
  {
    "q": "കോഹ്ലറുടെ സുൽത്താൻ എന്ന ചിമ്പാൻസിയുടെ പരീക്ഷണം ഏത് പഠന സിദ്ധാന്തത്തിന് അടിത്തറയിട്ടു ?",
    "options": [
      "ശ്രമപരാജയ പഠനം",
      "ശാസ്ത്രീയ അനുബന്ധനം",
      "ഉൾക്കാഴ്ചാ പഠനം (Insightful Learning)",
      "നിരീക്ഷണ പഠനം"
    ],
    "correct": 2
  },
  {
    "q": "ഗസ്റ്റാൾട്ട് (Gestalt) എന്ന ജർമ്മൻ വാക്കിന്റെ അർത്ഥം എന്താണ് ?",
    "options": [
      "മാറ്റം",
      "ഭാഗങ്ങൾ",
      "സമഗ്രരൂപം / പൂർണ്ണരൂപം (Whole / Configuration)",
      "വിശകലനം"
    ],
    "correct": 2
  },
  {
    "q": "ആൽബർട്ട് ബന്ദുരയുടെ നിരീക്ഷണ പഠനത്തിൽ, മാതൃകയാക്കുന്ന വ്യക്തിയുടെ സ്വഭാവത്തിലേക്ക് ശ്രദ്ധ തിരിക്കുന്ന ആദ്യ ഘട്ടം ഏതാണ് ?",
    "options": [
      "ശ്രദ്ധ (Attention)",
      "നിലനിർത്തൽ (Retention)",
      "പുനരുല്പാദനം (Reproduction)",
      "അഭിപ്രേരണ (Motivation)"
    ],
    "correct": 0
  },
  {
    "q": "ബ്രൂണറുടെ സിദ്ധാന്തപ്രകാരം കുട്ടികൾ ചിഹ്നങ്ങളും പ്രതീകങ്ങളും ഭാഷയും ഉപയോഗിച്ച് പഠിക്കുന്ന അന്തിമ ഘട്ടം ഏതാണ് ?",
    "options": [
      "പ്രവർത്തന ഘട്ടം (Enactive stage)",
      "ബിംബന ഘട്ടം (Iconic stage)",
      "പ്രതീകാത്മക ഘട്ടം (Symbolic stage)",
      "മൂർത്ത ഘട്ടം"
    ],
    "correct": 2
  },
  {
    "q": "ഗിൽഫോർഡിന്റെ ബുദ്ധി ഘടനാ മാതൃകയിൽ (SOI) താഴെ പറയുന്നവയിൽ ഏതാണ് പ്രധാന അളവുകോലുകളിൽ ഉൾപ്പെടാത്തത് ?",
    "options": [
      "ഉള്ളടക്കം (Content)",
      "പ്രവർത്തനം (Operation)",
      "ഉല്പന്നം (Product)",
      "അഭിരുചി (Aptitude)"
    ],
    "correct": 3
  },
  {
    "q": "ഒരു കുട്ടിയുടെ ശാരീരിക വയസ്സ് [CA] 8-ഉം മാനസിക വയസ്സ് [MA] 10-ഉം ആയാൽ ബുദ്ധിമാനം (IQ) എത്ര ?",
    "options": [
      "80",
      "100",
      "125",
      "120"
    ],
    "correct": 2
  },
  {
    "q": "ഹൊവാർഡ് ഗാർഡ്നറുടെ സിദ്ധാന്തപ്രകാരം കവികൾ, എഴുത്തുകാർ എന്നിവരിൽ കൂടുതലായി കാണപ്പെടുന്ന ബുദ്ധി ഏതാണ് ?",
    "options": [
      "ഭാഷാപരമായ ബുദ്ധി (Linguistic Intelligence)",
      "സ്ഥലപരമായ ബുദ്ധി (Spatial Intelligence)",
      "വ്യക്ത്യാന്തര ബുദ്ധി",
      "സംഗീതപരമായ ബുദ്ധി"
    ],
    "correct": 0
  },
  {
    "q": "മറ്റുള്ളവരുടെ വികാരങ്ങളെയും ആവശ്യങ്ങളെയും തിരിച്ചറിയാനും അവരോട് നന്നായി ഇടപഴകാനുമുള്ള കഴിവ് ഗാർഡ്നറുടെ ഏത് ബുദ്ധിയിൽ പെടുന്നു ?",
    "options": [
      "അന്തർവൈയക്തിക ബുദ്ധി",
      "വ്യക്ത്യാന്തര ബുദ്ധി (Interpersonal Intelligence)",
      "പ്രകൃതിപരമായ ബുദ്ധി",
      "അസ്തിത്വപരമായ ബുദ്ധി"
    ],
    "correct": 1
  },
  {
    "q": "ബുദ്ധിശക്തി അളക്കുന്നതിനായി 'ദ്വിഘടക സിദ്ധാന്തം' (Two-factor theory) അവതരിപ്പിച്ചത് ആര് ?",
    "options": [
      "തേഴ്സൺ",
      "ആൽഫ്രഡ് ബിനെ",
      "ചാൾസ് സ്പിയർമാൻ",
      "തോൺഡൈക്"
    ],
    "correct": 2
  },
  {
    "q": "സിഗ്മണ്ട് ഫ്രോയിഡിന്റെ അഭിപ്രായത്തിൽ വ്യക്തിത്വത്തിൽ 'ധാർമ്മികതയുടെ കാവൽക്കാരൻ' ആയി പ്രവർത്തിക്കുന്നത് ഏത് ഘടകമാണ് ?",
    "options": [
      "ഇദ് (Id)",
      "അഹം (Ego)",
      "അത്യഹം (Super Ego)",
      "ലിബിഡോ"
    ],
    "correct": 2
  },
  {
    "q": "തനിക്ക് നേടാൻ കഴിയാത്ത ഒരു കാര്യത്തെ മോശമായി ചിത്രീകരിച്ച് മനസ്സിനെ ആശ്വസിപ്പിക്കുന്ന സമായോജന തന്ത്രം (ഉദാഹരണത്തിന്: പുളിക്കുന്ന മുന്തിരിങ്ങ ശൈലി) ഏതാണ് ?",
    "options": [
      "പ്രക്ഷേപണം",
      "യുക്തീകരണം (Rationalization)",
      "ദമനം",
      "വിസ്ഥാപനം"
    ],
    "correct": 1
  },
  {
    "q": "മറ്റൊരു വ്യക്തിയുടെയോ പ്രശസ്തമായ സ്ഥാപനത്തിന്റെയോ വിജയത്തിൽ സ്വയം പങ്കാളിയാണെന്ന് കരുതി ആനന്ദം കണ്ടെത്തുന്ന തന്ത്രം ഏതാണ് ?",
    "options": [
      "താദാത്മീകരണം (Identification)",
      "അനുപൂരണം",
      "പശ്ചാത്ഗമനം",
      "നിഷേധം"
    ],
    "correct": 0
  },
  {
    "q": "വ്യക്തിത്വ വിലയിരുത്തലിനായി ഉപയോഗിക്കുന്ന 'റോഷാ ഇൻക്ബോട്ട് ടെസ്റ്റ്' ഏത് വിഭാഗത്തിൽ പെടുന്നു ?",
    "options": [
      "ചോദ്യാവലികൾ",
      "റേറ്റിങ് സ്കെയിലുകൾ",
      "പ്രക്ഷേപണ രീതികൾ (Projective techniques)",
      "നിരീക്ഷണ രീതികൾ"
    ],
    "correct": 2
  },
  {
    "q": "മനഃപൂർവ്വമല്ലാതെ കഠിനമായ ഓർമ്മകളെ അബോധമനസ്സിലേക്ക് തള്ളിവിടുന്ന പ്രതിരോധ തന്ത്രം ഏതാണ് ?",
    "options": [
      "ദമനം (Repression)",
      "ശമനം (Suppression)",
      "യുക്തീകരണം",
      "ആദേശനം"
    ],
    "correct": 0
  },
  {
    "q": "അബ്രഹാം മാസ്ലോയുടെ ആവശ്യങ്ങളുടെ ശ്രേണിയിൽ (Hierarchy of Needs) ഏറ്റവും ഉയർന്ന ലക്ഷ്യം ഏതാണ് ?",
    "options": [
      "ആത്മാഭിമാന ആവശ്യങ്ങൾ",
      "സുരക്ഷിതത്വ ആവശ്യങ്ങൾ",
      "ആത്മസാക്ഷാത്കാരം (Self-actualization)",
      "അറിയാനുള്ള ആവശ്യങ്ങൾ"
    ],
    "correct": 2
  },
  {
    "q": "ഒരു കുട്ടി ബാഹ്യമായ യാതൊരു പ്രലോഭനങ്ങളും കൂടാതെ സ്വന്തം താല്പര്യത്താൽ ചിത്രരചനയിൽ ഏർപ്പെടുന്നു. ഇത് ഏത് തരം അഭിപ്രേരണയാണ് ?",
    "options": [
      "ബാഹ്യ അഭിപ്രേരണ",
      "ആന്തരിക അഭിപ്രേരണ (Intrinsic Motivation)",
      "സാമൂഹിക അഭിപ്രേരണ",
      "സാഹചര്യ അഭിപ്രേരണ"
    ],
    "correct": 1
  },
  {
    "q": "പഠന വൈകല്യങ്ങളിൽ എഴുതുന്നതിനും അക്ഷരങ്ങൾ തെറ്റുകൂടാതെ വിന്യസിക്കുന്നതിനുമുള്ള ബുദ്ധിമുട്ടിനെ വിളിക്കുന്നത് :",
    "options": [
      "ഡിസ്ലെക്സിയ",
      "ഡിസ്ഗ്രാഫിയ (Dysgraphia)",
      "ഡിസ്കാൽകുലിയ",
      "ഡിസ്പ്രാക്സിയ"
    ],
    "correct": 1
  },
  {
    "q": "പ്രത്യേക പരിഗണന അർഹിക്കുന്ന കുട്ടികൾക്കായി സാധാരണ വിദ്യാലയങ്ങളിൽ എല്ലാ സൗകര്യങ്ങളും ഒരുക്കി ഒരുമിച്ച് പഠിപ്പിക്കുന്ന ആധുനിക സങ്കല്പം ഏത് ?",
    "options": [
      "പ്രത്യേക വിദ്യാഭ്യാസം",
      "ഏകോപിത വിദ്യാഭ്യാസം",
      "ഉൾച്ചേർക്കൽ വിദ്യാഭ്യാസം (Inclusive Education)",
      "ബദൽ വിദ്യാഭ്യാസം"
    ],
    "correct": 2
  },
  {
    "q": "വിദ്യാഭ്യാസ അവകാശ നിയമം (RTE Act 2009) ഇന്ത്യയിൽ നിലവിൽ വന്നത് എന്ന് ?",
    "options": [
      "2009 ഓഗസ്റ്റ് 27",
      "2010 ഏപ്രിൽ 1",
      "2009 ഒക്ടോബർ 2",
      "2011 ജനുവരി 26"
    ],
    "correct": 1
  },
  {
    "q": "ക്ലാസ് മുറിയിലെ ഒരു പ്രത്യേക പ്രശ്നം പരിഹരിക്കുന്നതിനായി അധ്യാപകൻ നടത്തുന്ന ശാസ്ത്രീയമായ പഠന രീതി ഏതാണ് ?",
    "options": [
      "അടിസ്ഥാന ഗവേഷണം",
      "വിവരണാത്മക ഗവേഷണം",
      "ക്രിയാ ഗവേഷണം (Action Research)",
      "കേസ് സ്റ്റഡി"
    ],
    "correct": 2
  },
  {
    "q": "കുട്ടികളിലെ വൈവിധ്യമാർന്ന മികച്ച സൃഷ്ടികളും പ്രകടനങ്ങളും ശേഖരിച്ച് സൂക്ഷിക്കുന്ന വിലയിരുത്തൽ ഉപാധി ഏതാണ് ?",
    "options": [
      "ക്യുമുലേറ്റീവ് റെക്കോർഡ്",
      "പോർട്ട്ഫോളിയോ (Portfolio)",
      "അനക്ഡോട്ടൽ റെക്കോർഡ്",
      "ചെക്ക്‌ലിസ്റ്റ്"
    ],
    "correct": 1
  },
  {
    "q": "പഠന പ്രക്രിയ നടന്നു കൊണ്ടിരിക്കുമ്പോൾ കുട്ടികളുടെ പുരോഗതിയും പോരായ്മകളും കണ്ടെത്താൻ നടത്തുന്ന മൂല്യനിർണ്ണയം ഏതാണ് ?",
    "options": [
      "നിരന്തര മൂല്യനിർണ്ണയം (Formative Assessment)",
      "സഞ്ചിത മൂല്യനിർണ്ണയം (Summative Assessment)",
      "നിർണ്ണായക മൂല്യനിർണ്ണയം",
      "ബാഹ്യ മൂല്യനിർണ്ണയം"
    ],
    "correct": 0
  },
  {
    "q": "കുട്ടികളിലെ മറവിക്ക് കാരണമാകുന്ന ഘടകങ്ങളിൽ, പഴയ ഓർമ്മകൾ പുതിയ പഠനത്തെ തടസ്സപ്പെടുത്തുന്ന അവസ്ഥ ഏതാണ് ?",
    "options": [
      "പശ്ചാാതുന്മുഖ തടസ്സം",
      "പുരോന്മുഖ തടസ്സം (Proactive Inhibition)",
      "അപചയം",
      "ദമനം"
    ],
    "correct": 1
  },
  {
    "q": "ഒരു അധ്യാപിക എന്ന നിലയിൽ ക്ലാസ് മുറിയിൽ ആൺകുട്ടികൾക്കും പെൺകുട്ടികൾക്കും തുല്യമായ അവസരങ്ങൾ നൽകുന്നത് ഏതിനെ പ്രോത്സാഹിപ്പിക്കാനാണ് ?",
    "options": [
      "ലിംഗ വിവേചനം",
      "ലിംഗ സ്റ്റീരിയോടൈപ്പ്",
      "ലിംഗ സമത്വം (Gender Equality)",
      "ലിംഗപരമായ മുൻവിധി"
    ],
    "correct": 2
  },
  {
    "q": "ആദ്യമായി 'ബുദ്ധിമാനം' (IQ) എന്ന പദം ഉപയോഗിക്കാൻ നിർദ്ദേശിച്ച മനഃശാസ്ത്രജ്ഞൻ ആര് ?",
    "options": [
      "ആൽഫ്രഡ് ബിനെ",
      "വില്ല്യം സ്റ്റേൺ (William Stern)",
      "ടർമാൻ",
      "ലൂയിസ് ടോപ്സൺ"
    ],
    "correct": 1
  },
  {
    "q": "കുട്ടികളുടെ ചിന്താശേഷി വളർത്താൻ സഹായിക്കുന്ന സ്വതന്ത്രവും വ്യത്യസ്തവുമായ ചിന്താരീതി ഏതാണ് ?",
    "options": [
      "സ കേന്ദ്രീകൃത ചിന്ത",
      "വികേന്ദ്രീകൃത ചിന്ത (Divergent thinking)",
      "യാന്ത്രിക ചിന്ത",
      "അനുകരണ ചിന്ത"
    ],
    "correct": 1
  },
  {
    "q": "കുട്ടിയുടെ വികാസത്തെ സ്വാധീനിക്കുന്ന ഘടകങ്ങളിൽ പ്രകൃതി (Nature), പോഷണം (Nurture) എന്നിവ യഥാക്രമം എന്തിനെ സൂചിപ്പിക്കുന്നു ?",
    "options": [
      "സ്കൂളും വീടും",
      "ഭക്ഷണവും വ്യായാമവും",
      "പാരമ്പര്യവും പരിസ്ഥിതിയും (Heredity & Environment)",
      "സമൂഹവും സംസ്കാരവും"
    ],
    "correct": 2
  },
  {
    "q": "ആധുനിക ശിശു മനഃശാസ്ത്രത്തിന്റെ പിതാവായി അറിയപ്പെടുന്നത് ആര് ?",
    "options": [
      "ജീൻ പിയാഷെ (Jean Piaget)",
      "ജോൺ ഡ്യൂയി",
      "റൂസ്സോ",
      "ഫ്രോബൽ"
    ],
    "correct": 0
  },
  {
    "q": "കുട്ടിക്കാലത്തെ 'മടിയൻ പ്രായം' അല്ലെങ്കിൽ 'അഴുക്കു പ്രായം' (Sloppy age) എന്ന് വിശേഷിപ്പിക്കുന്നത് ഏത് ഘട്ടത്തെയാണ് ?",
    "options": [
      "ശൈശവകാലം",
      "ആദ്യകാല ബാല്യം",
      "പിൻകാല ബാല്യം (Late Childhood)",
      "കൗമാരകാലം"
    ],
    "correct": 2
  },
  {
    "q": "ആൺകുട്ടികളിൽ അമ്മയോട് തോന്നുന്ന അമിതമായ സ്നേഹവും താല്പര്യവും ഫ്രോയിഡിന്റെ സിദ്ധാന്തപ്രകാരം ഏത് പേരിൽ അറിയപ്പെടുന്നു ?",
    "options": [
      "ഇലക്ട്രാ കോംപ്ലക്സ്",
      "ഈഡിപ്പസ് കോംപ്ലക്സ് (Oedipus Complex)",
      "നാർസിസിസം",
      "ലിബിഡോ കോംപ്ലക്സ്"
    ],
    "correct": 1
  },
  {
    "q": "അധ്യാപിക നൽകിയ ഒരു കഥ പൂർത്തിയാക്കാൻ കുട്ടി സ്വന്തം ഭാവന ഉപയോഗിച്ച് ശ്രമിക്കുന്നു. ഈ പരീക്ഷണം ഏത് വ്യക്തിത്വ വിലയിരുത്തൽ രീതിയാണ് ?",
    "options": [
      "വാചക പൂർത്തീകരണ പരീക്ഷ (Sentence Completion Test)",
      "വേർഡ് അസോസിയേഷൻ ടെസ്റ്റ്",
      "റേറ്റിങ് സ്കെയിൽ",
      "അഭിമുഖം"
    ],
    "correct": 0
  },
  {
    "q": "ഒരു കുട്ടിയുടെ വികാസം ഒരു നിശ്ചിത പാറ്റേൺ പിന്തുടരുന്നു എന്ന തത്ത്വം താഴെ പറയുന്നവയിൽ ഏതാണ് ?",
    "options": [
      "തുടർച്ചാ തത്ത്വം",
      "പൊതുവായ ക്രമ തത്ത്വം (Uniform Pattern)",
      "വ്യക്തിഗത വ്യത്യാസ തത്ത്വം",
      "ഏകോപന തത്ത്വം"
    ],
    "correct": 1
  },
  {
    "q": "കുട്ടികളിലെ ഭാഷാ പഠനത്തെ സഹായിക്കുന്ന 'യൂണിവേഴ്സൽ ഗ്രാമർ' എന്ന ആശയം മുന്നോട്ട് വെച്ചത് ആര് ?",
    "options": [
      "ലെവ് വൈഗോഡ്സ്കി",
      "നോം ചോംസ്കി (Noam Chomsky)",
      "ബി. എഫ്. സ്കിന്നർ",
      "ജീൻ പിയാഷെ"
    ],
    "correct": 1
  },
  {
    "q": "പഠനത്തിൽ കാര്യക്ഷമമായ ഫലം തരുന്ന 'ചാക്രികാരോഹണ രീതി' (Spiral Curriculum) നിർദ്ദേശിച്ച മനഃശാസ്ത്രജ്ഞൻ ആര് ?",
    "options": [
      "ഡേവിഡ് ഓസുബെൽ",
      "ജെറോം ബ്രൂണർ (Jerome Bruner)",
      "ആൽബർട്ട് ബന്ദുര",
      "ലെവ് വൈഗോഡ്സ്കി"
    ],
    "correct": 1
  },
  {
    "q": "ഒരു കുട്ടിക്ക് ഭാവിയിൽ ഒരു പ്രത്യേക മേഖലയിൽ തിളങ്ങാൻ കഴിയുമോ എന്ന് അളക്കുന്നതിനുള്ള പരീക്ഷ ഏതാണ് ?",
    "options": [
      "ബുദ്ധി പരീക്ഷ",
      "അഭിരുചി പരീക്ഷ (Aptitude Test)",
      "വ്യക്തിത്വ പരീക്ഷ",
      "നേട്ട പരീക്ഷ"
    ],
    "correct": 1
  },
  {
    "q": "പ്രശസ്തമായ 'ബോബോ പാവ പരീക്ഷണം' (Bobo Doll Experiment) നടത്തിയ മനഃശാസ്ത്രജ്ഞൻ ആര് ?",
    "options": [
      "ബി. എഫ്. സ്കിന്നർ",
      "ആൽബർട്ട് ബന്ദുര (Albert Bandura)",
      "ഇവാൻ പാവ്ലോവ്",
      "ഇ. എൽ. തോൺഡൈക്"
    ],
    "correct": 1
  },
  {
    "q": "ഒരു പ്രത്യേക കുട്ടിയുടെ പെരുമാറ്റ വൈകല്യങ്ങളെക്കുറിച്ച് വളരെ ആഴത്തിൽ പഠിക്കാൻ അധ്യാപകൻ ഉപയോഗിക്കുന്ന രീതി ഏതാണ് ?",
    "options": [
      "സർവ്വെ രീതി",
      "പരീക്ഷണ രീതി",
      "വ്യക്തിപഠന രീതി (Case Study)",
      "സോഷ്യോമെട്രി"
    ],
    "correct": 2
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
