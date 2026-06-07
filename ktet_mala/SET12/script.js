document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
  {
    "q": "എറിക് എറിക്സണിന്റെ നിരീക്ഷണത്തിൽ ആറ് വയസ്സിനും 12 വയസ്സിനും ഇടയിലുള്ള കുട്ടിയിൽ ഉണ്ടാകുന്ന വികസന പ്രതിസന്ധി ഏതാണ്?",
    "options": [
      "(a) കർമ്മോത്സുകതയും അപകർഷവും (Industry Vs Inferiority)",
      "(b) വിശ്വാസവും അവിശ്വാസവും (Trust Vs Mistrust)",
      "(c) വ്യക്തിത്വ സ്ഥാപനവും വ്യക്തിത്വ പ്രതിസന്ധിയും (Identity Vs Role Confusion)",
      "(d) അടുപ്പവും ഒറ്റപ്പെടലും (Intimacy Vs Isolation)"
    ],
    "correct": 0
  },
  {
    "q": "ഒരു കുട്ടി യോജിച്ച വാക്കുകൾ ഒഴുക്കോടെ ഉപയോഗിച്ച് ആശയപ്രകാശനം നടത്താൻ പ്രാപ്തനാണ്. ബഹുമുഖബുദ്ധി സിദ്ധാന്തമനുസരിച്ച് ഈ കുട്ടിയിൽ പ്രബലമായി നിൽക്കുന്ന ബുദ്ധിവിഭാഗം ഏതാണ്?",
    "options": [
      "(a) യുക്തിചിന്തനപര ബുദ്ധി (Logico-mathematical intelligence)",
      "(b) സംഗീതപരമായ ബുദ്ധി (Musical Intelligence)",
      "(c) ഭാഷാപരമായ ബുദ്ധി (Linguistic Intelligence)",
      "(d) ദൃശ്യ-സ്ഥലപര ബുദ്ധി (Spatial Intelligence)"
    ],
    "correct": 2
  },
  {
    "q": "താഴെ പറയുന്ന വിചാരമാതൃകകളിൽ വൈഗോട്സ്കിയുമായി ബന്ധപ്പെട്ടത് ഏത്?",
    "options": [
      "(a) വ്യവഹാരവാദം (Behaviorialism)",
      "(b) ജ്ഞാനനിർമിതിവാദം (Cognitive Constructivism)",
      "(c) സാമൂഹിക ജ്ഞാനനിർമിതിവാദം (Social constructivism)",
      "(d) ഘടനാവാദം (Structuralism)"
    ],
    "correct": 2
  },
  {
    "q": "സൂക്ഷ്മ ചലന വികസനത്തിനായി കുട്ടികൾക്ക് നിർദ്ദേശിക്കാവുന്ന പ്രവർത്തനം താഴെ പറയുന്നവയിൽ ഏതാണ്?",
    "options": [
      "(a) ത്രിചക്ര വാഹനം (Riding tricycle) ഓടിക്കുക",
      "(b) മൈതാനത്തിലൂടെ അലക്ഷ്യമായി ഓടുക",
      "(c) കത്രിക ഉപയോഗിച്ച് കടലാസ് മുറിക്കുക",
      "(d) വീതി കുറഞ്ഞ പാലത്തിലൂടെ നടക്കുക"
    ],
    "correct": 2
  },
  {
    "q": "കുട്ടികളുടെ മാനസിക ആവശ്യങ്ങളിൽ (Mental needs) പെടാത്തത് ഏതാണ്?",
    "options": [
      "(a) അംഗീകാരം (approval)",
      "(b) സ്നേഹം (love)",
      "(c) സുരക്ഷിതത്വം (Security)",
      "(d) ഭക്ഷണം (food)"
    ],
    "correct": 3
  },
  {
    "q": "പ്രൈമറി ക്ലാസിലെ കുട്ടികൾക്കായി തിരഞ്ഞെടുക്കുന്ന കമ്മ്യൂണിക്കേഷൻ പ്രവർത്തനങ്ങൾ ഹ്രസ്വമായിരിക്കണമെന്ന് പറയുന്നത് എന്തുകൊണ്ട്?",
    "options": [
      "(a) അവർക്ക് ദീർഘമായ കാര്യങ്ങൾ ഓർക്കാൻ സാധിക്കില്ല",
      "(b) ക്ലാസിൽ സമയം പരിമിതമാണ്",
      "(c) നീണ്ട പ്രവർത്തനങ്ങൾ ടീച്ചർക്ക് അവതരിപ്പിക്കാൻ പ്രയാസമാകും",
      "(d) കുട്ടികളുടെ ശ്രദ്ധാവ്യാപ്തി (attention span) താരതമ്യേന കുറവാണ്"
    ],
    "correct": 3
  },
  {
    "q": "താഴെക്കൊടുത്തിരിക്കുന്ന ഘടകങ്ങളിൽ പഠനത്തെ ഏറ്റവും കുറവായി ബാധിക്കുകയോ സ്വാധീനിക്കുകയോ ചെയ്യുന്നത് ഏത്?",
    "options": [
      "(a) പരിപക്വത (maturation)",
      "(b) പ്രോത്സാഹനം (motivation)",
      "(c) ലിംഗസ്ഥിതി (Sex)",
      "(d) ബൗദ്ധിക സാധ്യതകൾ (intellectual abilities)"
    ],
    "correct": 2
  },
  {
    "q": "\"മറ്റൊരാളുടെ പഠനത്തിന് സൗകര്യപ്പെടുത്തുക (facilitate) അല്ലാതെ ഒരാളെ പഠിപ്പിക്കാൻ ആർക്കും കഴിയില്ല\" - ആരുടെതാണ് ഈ കാഴ്ചപ്പാട്?",
    "options": [
      "(a) കാൾ റോജേഴ്സ്",
      "(b) ബി.എഫ്. സ്കിനർ",
      "(c) വില്യം ജെയിംസ്",
      "(d) വിൽഹെം വുണ്ട്"
    ],
    "correct": 0
  },
  {
    "q": "കുഞ്ഞൻ ഘട്ടം (Cooing stage) ഏതുമായി ബന്ധപ്പെട്ടതാണ്?",
    "options": [
      "(a) സാമൂഹിക വികാസം",
      "(b) വൈകാരിക വികാസം",
      "(c) ഭാഷണ വികാസം",
      "(d) വൈജ്ഞാനിക വികാസം"
    ],
    "correct": 2
  },
  {
    "q": "ഒരു സവിശേഷകാര്യത്തിലുള്ള ആഴത്തിലുള്ള പഠനം അറിയപ്പെടുന്നത് ..... എന്നാണ്.",
    "options": [
      "(a) ക്രിയാഗവേഷണം",
      "(b) സർവേ",
      "(c) കേസ് സ്റ്റഡി",
      "(d) സോഷ്യോഗ്രാം"
    ],
    "correct": 2
  },
  {
    "q": "താഴെക്കൊടുത്തിരിക്കുന്ന ഘടകങ്ങളിൽ ഒന്ന് ശിശുവികാസത്തെ സ്വാധീനിക്കുന്നില്ല; ഏത്?",
    "options": [
      "(a) പഠനം (Learning)",
      "(b) പാരമ്പര്യം (Heredity)",
      "(c) പരിപക്വത (maturation)",
      "(d) ശിക്ഷ (Punishment)"
    ],
    "correct": 3
  },
  {
    "q": "വളർച്ചാ പ്രായത്തിനനുസരിച്ച് നടക്കാതിരിക്കുന്നത് ഏതുപേരിലാണ് അറിയപ്പെടുന്നത്?",
    "options": [
      "(a) മന്ദഗതി (Slow learning)",
      "(b) വൈകല്യം (disability)",
      "(c) വിളംബിത ചാലക വികാസം (delayed motor development)",
      "(d) ബുദ്ധിമാന്ദ്യം (Mental retardation)"
    ],
    "correct": 1
  },
  {
    "q": "സാമ്പിളിംഗിലെ തെറ്റുകൾ, ദത്തങ്ങളുടെ വിശ്വാസ്യത എന്നിവ ചോദ്യം ചെയ്യപ്പെടാം. കാരണം, ഈ രീതിയിൽ കൃത്യമായ വിവരങ്ങളെ തിരുത്തുന്നതിൽ ഒരു സംശയമുണ്ട്. ഏത് പഠനരീതിയെയാണ് ഇവിടെ ഉദ്ദേശിച്ചിരിക്കുന്നത്?",
    "options": [
      "(a) സർവേ (Survey)",
      "(b) ക്രിയാഗവേഷണം (Action Research)",
      "(c) അഭിമുഖം (Interview)",
      "(d) നിരീക്ഷണം (Observation)"
    ],
    "correct": 0
  },
  {
    "q": "'Culture of Education' ഒരു വിദ്യാഭ്യാസ ചിന്തകൻ എഴുതിയ പുസ്തകമാണ്. ആരാണത്?",
    "options": [
      "(a) നോം ചോംസ്കി",
      "(b) വില്യം ജെയിംസ്",
      "(c) ജെ.എസ്. ബ്രൂണർ",
      "(d) കാൾ റോജേഴ്സ്"
    ],
    "correct": 2
  },
  {
    "q": "ടീച്ചർ വിനു എന്ന കുട്ടിയെക്കുറിച്ച് നടത്തിയ ഒരു പ്രസ്താവന: “ആശയഗ്രഹണത്തിൽ അവന് പരിമിതിയുണ്ട്, അവന്റെ ഓർമശക്തി മോശമാണ്, താരതമ്യം, വർഗീകരണം എന്നിവയിൽ അവൻ പിന്നാക്കമാണ്”. ടീച്ചറുടെ ഈ പ്രസ്താവന കുട്ടിയുടെ ഏത് വികാസപ്രശ്നത്തെയാണ് വിരൽ ചൂണ്ടുന്നത്?",
    "options": [
      "(a) ശാരീരിക വികാസം (Physical development)",
      "(b) വൈകാരിക വികാസം (Emotional development)",
      "(c) വൈജ്ഞാനിക വികാസം (Cognitive development)",
      "(d) സാമൂഹിക വികാസം (Social development)"
    ],
    "correct": 2
  },
  {
    "q": "കുട്ടികളുടെ ഭാഷാ വികാസത്തിൽ സാമൂഹിക പരിസരത്തിന് പ്രത്യേക സ്ഥാനമുണ്ട്. ആരുടെ അഭിപ്രായമാണിത്?",
    "options": [
      "(a) ജീൻ പിയാഷെ",
      "(b) നോം ചോംസ്കി",
      "(c) വൈഗോട്സ്കി",
      "(d) ജെ.എസ്. ബ്രൂണർ"
    ],
    "correct": 2
  },
  {
    "q": "ബുദ്ധിയെക്കുറിച്ചുള്ള പഠനങ്ങളിൽ സ്പിയർമാൻ (Spearman) നൽകിയ സംഭാവന എന്ത്?",
    "options": [
      "(a) ബഹുമുഖ ബുദ്ധി സിദ്ധാന്തം അവതരിപ്പിച്ചു",
      "(b) ഐ.ക്യു. ടെസ്റ്റ് അവതരിപ്പിച്ചു",
      "(c) ബഹുഘടക ബുദ്ധി സിദ്ധാന്തം അവതരിപ്പിച്ചു",
      "(d) ദ്വിഘടക ബുദ്ധി സിദ്ധാന്തം അവതരിപ്പിച്ചു"
    ],
    "correct": 3
  },
  {
    "q": "ഒരു ടീച്ചർ ദൃശ്യ-ശ്രാവ്യ മാധ്യമങ്ങളും ഉപകരണങ്ങളും വിവിധ ശാരീരിക പ്രവർത്തനങ്ങളും തന്റെ ക്ലാസിൽ പ്രയോജനപ്പെടുത്തുന്നു. കാരണം?",
    "options": [
      "(a) ടീച്ചർക്ക് സൗകര്യത്തിന് ആശ്വാസം ലഭിക്കുന്നു",
      "(b) ഫലപ്രദമായ മൂല്യനിർണയം സാധ്യമാക്കുന്നു",
      "(c) പഠിതാക്കൾക്ക് വ്യത്യസ്ത വഴികൾ നൽകുന്നു",
      "(d) പഠനത്തിന്റെ വിപുലീകരണത്തിന് പരമാവധി ഇന്ദ്രിയാനുഭവങ്ങൾ പ്രയോജനപ്പെടുത്തുന്നു"
    ],
    "correct": 3
  },
  {
    "q": "ചിന്തിക്കുക എന്നത് ---------- ആകുന്നു",
    "options": [
      "(a) ഒരു മനശ്ചാലക പ്രക്രിയ (Psycho motor process)",
      "(b) ഒരു മനഃശാസ്ത്ര പ്രതിഭാസമാണ് (Psychological phenomenon)",
      "(c) ഒരു വൈജ്ഞാനിക പ്രവർത്തനം (Cognitive activity)",
      "(d) ഒരു വൈകാരിക വ്യവഹാരം (Effective behaviour)"
    ],
    "correct": 2
  },
  {
    "q": "ദ്വിതീയ ലൈംഗിക സ്വഭാവങ്ങൾ (Secondary Sexual Characteristics) പ്രകടമാകുന്ന പ്രായഘട്ടം ഏതാണ്?",
    "options": [
      "(a) പ്രായപൂർത്തി (Adulthood)",
      "(b) ദ്വിതീയ ബാല്യം (Later Childhood)",
      "(c) കൗമാരം (Adolescence)",
      "(d) ആദി ബാല്യം (Early Childhood)"
    ],
    "correct": 2
  },
  {
    "q": "“വ്യക്തിത്വം എന്നത് പഠിതവ്യക്തികളുടെ ഒരു ശേഖരിച്ച പെരുമാറ്റ രീതിയാണ്” (Personality is the collection of learned behavioural pattern). ആരുടെ അഭിപ്രായമാണ്?",
    "options": [
      "(a) ജെ.എസ്. ബ്രൂണർ",
      "(b) സിഗ്മണ്ട് ഫ്രോയിഡ്",
      "(c) ബി.എഫ്. സ്കിനർ",
      "(d) ജീൻ പിയാഷെ"
    ],
    "correct": 2
  },
  {
    "q": "കാതറിൻ എം. ബിഡ്ജസ് കുട്ടികളെ നിരീക്ഷിച്ചതിൽനിന്ന് ചില വികാസഘടകങ്ങൾ കണ്ടെത്തി. ഏതാണ് ആ വികാസമേഖല?",
    "options": [
      "(a) സാമൂഹികം",
      "(b) വൈകാരികം",
      "(c) ശാരീരികം",
      "(d) നൈതികം"
    ],
    "correct": 1
  },
  {
    "q": "വൈഗോട്സ്കിയുടെ അഭിപ്രായത്തിൽ ഒരു പഠിതാവിന് മറ്റുള്ളവരുടെ സഹായത്തോടെ താഴ്ന്ന നിലയിൽനിന്ന് ഉയർന്ന ഒരു നിലയിലേക്ക് വരികയാണ് – ഏതാണ് ആ നില?",
    "options": [
      "(a) ZPD (സമീപവികാസമേഖല)",
      "(b) Current Ability level (നിലവിലെ കഴിവുതലം)",
      "(c) Scaffolding (പിന്തുണ)",
      "(d) Potential Ability Level (സാധ്യതാ കഴിവുതലം)"
    ],
    "correct": 0
  },
  {
    "q": "നൈതിക വികാസം (Moral Development) മൂന്നു തലങ്ങളിലായാണ് നടക്കുന്നത്: 1. പ്രാഗ് നൈതികതലം (Pre moral level) 2. വ്യവസ്ഥാപിത നൈതികതലം (Level of conventional morality) 3. സ്വയം സ്വീകരിച്ച തത്ത്വങ്ങൾക്കനുസൃതമായ നൈതികത (The level of morality of self accepted principles). ആരുടേതാണ് ഈ നിരീക്ഷണം?",
    "options": [
      "(a) വില്യം ജെയിംസ്",
      "(b) ആഡ്ലർ",
      "(c) കാൾ റോജേഴ്സ്",
      "(d) കോൾബർഗ്"
    ],
    "correct": 3
  },
  {
    "q": "താഴെ പറയുന്ന ഗുണങ്ങളിൽ ഏതാണ് ഒരു പ്രൈമറി ടീച്ചറിൽ മികച്ച് നിൽക്കേണ്ടത്?",
    "options": [
      "(a) ക്ഷമയും സ്ഥിരോത്സാഹവും (Patience and perseverance)",
      "(b) പഠിപ്പിക്കുന്നതിലുള്ള ആകാംക്ഷ (Eagerness to teach)",
      "(c) ബോധനരീതികളിലുള്ള പ്രാപ്തിയും വിഷയത്തിലുള്ള അറിവും (Competence in methods of teaching and knowledge of subjects)",
      "(d) ഉയർന്ന നിലവാരത്തിലുള്ള ഭാഷയിൽ പഠിപ്പിക്കാനുള്ള പ്രാപ്തി (Competence to teach in highly standardised language)"
    ],
    "correct": 0
  },
  {
    "q": "താഴെ പറയുന്നതിൽ ഏത് സാഹചര്യത്തിലാണ് പഠനം കൂടുതൽ ഫലപ്രദമാകുന്നത്?",
    "options": [
      "(a) ക്ലാസിൽ കൂടുതൽ കൂടുതൽ പഠനോപകരണങ്ങൾ ഉപയോഗിക്കുന്നു",
      "(b) ആനുകാലികമായി പലവിധ പരീക്ഷകൾ നടത്തുന്നു",
      "(c) ടീച്ചർ പലവിധ പ്രഭാഷണങ്ങളും വിശദീകരണങ്ങളും നടത്തുന്നു",
      "(d) ജീവിത സന്ദർഭങ്ങളെ മുൻനിർത്തി കുട്ടികൾ സംവാദങ്ങളിൽ ഏർപ്പെടുന്നു"
    ],
    "correct": 3
  },
  {
    "q": "ഗെസ്റ്റാൾട്ട് മനഃശാസ്ത്ര പദ്ധതി പഠനത്തെ സംബന്ധിച്ച് മുന്നോട്ടുവെച്ച സിദ്ധാന്തം:",
    "options": [
      "(a) ജ്ഞാന നിർമ്മിതി വാദം (Cognitive constructivism)",
      "(b) അന്തർദർശന സിദ്ധാന്തം (Insight Theory)",
      "(c) വ്യവഹാരവാദം (Behaviourism)",
      "(d) കണ്ടെത്തൽ പഠനം (Discovery Learning)"
    ],
    "correct": 1
  },
  {
    "q": "വിജ്ഞാനം സ്വീകരിക്കുന്ന അടിസ്ഥാന ഘടകത്തെ പിയാഷെ വിളിക്കുന്നത് ഏത് പേരിൽ?",
    "options": [
      "(a) ജ്ഞാതൃവാദം",
      "(b) ജ്ഞാനനിർമിതി",
      "(c) കണ്ടെത്തൽ",
      "(d) സ്കീമ"
    ],
    "correct": 3
  },
  {
    "q": "കണ്ടെത്തൽ പഠനം (Discovery Learning) അവതരിപ്പിച്ച വിദ്യാഭ്യാസ ചിന്തകൻ ആർ?",
    "options": [
      "(a) ജീൻ പിയാഷെ",
      "(b) വൈഗോട്സ്കി",
      "(c) ജെറോം എസ്. ബ്രൂണർ",
      "(d) സ്റ്റാൻഹൗസ്"
    ],
    "correct": 2
  },
  {
    "q": "സാമൂഹിക-സാമ്പത്തിക പിന്നാക്കാവസ്ഥയുള്ളവർ, ശാരീരിക- മാനസിക വെല്ലുവിളികൾ നേരിടുന്നവർ, മികവാർന്ന കുട്ടികൾ തുടങ്ങിയവർ ഒരേ സ്കൂളിൽ പഠിക്കുന്നു. ഇത്തരം സ്കൂളുകളെ എന്ത് വിളിക്കാം?",
    "options": [
      "(a) ഇൻക്ലൂസീവ് സ്കൂൾ (Inclusive school)",
      "(b) ഇന്റഗ്രേറ്റഡ് (സംയോജിത) സ്കൂൾ (Integrated school)",
      "(c) സ്പെഷ്യൽ സ്കൂൾ (Special school)",
      "(d) സമ്മിശ്ര സ്കൂൾ (Mixed school)"
    ],
    "correct": 0
  },
  {
    "q": "ശ്രവണ ശേഷി ന്യൂനതയുള്ള കുട്ടികൾ (Hearing Impaired) പൊതു വിദ്യാലയങ്ങളിൽ നേരിട്ടുവരുന്ന മുഖ്യ പ്രശ്നം എന്ത്?",
    "options": [
      "(a) മറ്റ് കുട്ടികളോടൊപ്പം പരീക്ഷകളിൽ പങ്കെടുക്കാൻ സാധിക്കാതിരിക്കുക",
      "(b) നിശ്ചിത പാഠഭാഗങ്ങൾ വായിക്കാൻ സാധിക്കാതിരിക്കുക",
      "(c) കായിക പരിപാടികളിൽ പങ്കെടുക്കാൻ സാധിക്കാതിരിക്കുക",
      "(d) മറ്റുള്ളവരുമായി വിവരങ്ങൾ പങ്കുവയ്ക്കാൻ സാധിക്കാതിരിക്കുക"
    ],
    "correct": 3
  },
  {
    "q": "'Personality is that which permits a prediction of what a person will do in a given situation' വ്യക്തിത്വത്തെ നിർവചിക്കുന്നതിന്റെ ഭാഗമായി ഈ വാചകം അവതരിപ്പിച്ചത്?",
    "options": [
      "(a) ജി.ഡബ്ല്യു. ആൽപോർട്ട് (G.W. Allport)",
      "(b) ആർ.ബി. കാറ്റൽ (R.B. Cattell)",
      "(c) ആർ.എസ്. വുഡ്വർത്ത് (R.S. Woodworth)",
      "(d) ജെ.ബി. വാട്സൻ (J.B. Watson)"
    ],
    "correct": 1
  },
  {
    "q": "ഷഹമന്ത് എന്ന കുട്ടിയുടെ മാനസിക വയസ്സ് (Mental age) 12 ആയി കണക്കാക്കുന്നു. കാലിക വയസ്സ് (Chronological age) 10 ആണ്. ബുദ്ധിപരിപൂർണ്ണം (IQ) എന്തായിരിക്കും?",
    "options": [
      "(a) അതിശ്രേഷ്ഠം (Very superior)",
      "(b) ബുദ്ധിമാൻ (Bright)",
      "(c) ശ്രേഷ്ഠം (Superior)",
      "(d) ശരാശരി (Average)"
    ],
    "correct": 2
  },
  {
    "q": "ഒരാളുടെ കൗമാരപ്രായഘട്ടം, പിയാഷെയുടെ ഘട്ടവിഭജന സിദ്ധാന്തം (Stage theory) അനുസരിച്ച് ഏത് ഘട്ടത്തിലാണ് ഉൾപ്പെടുന്നത്?",
    "options": [
      "(a) മൂർത്ത മനോവ്യാപാരഘട്ടം (Concrete operational stage)",
      "(b) ഔപചാരിക മനോവ്യാപാരഘട്ടം (Formal operational stage)",
      "(c) പ്രാഥമിക മനോവ്യാപാരഘട്ടം (Pre operational stage)",
      "(d) ഇന്ദ്രിയ ചാലക ഘട്ടം (Sensory motor stage)"
    ],
    "correct": 1
  },
  {
    "q": "വിവര വിശകലനം (Information processing), പരികല്പനകൾ വികസിപ്പിക്കൽ (Developing hypothesis), സാമാന്യവത്കരണത്തിൽ എത്തിച്ചേരൽ (Generalisation) തുടങ്ങിയവയാണ് പഠനത്തിൽ ഉള്ളടക്കത്തെക്കാൾ പ്രധാനമെന്ന് സിദ്ധാന്തിച്ചത് ആര്?",
    "options": [
      "(a) ജെറോം എസ്. ബ്രൂണർ",
      "(b) ജീൻ പിയാഷെ",
      "(c) റേമണ്ട് കാറ്റൽ",
      "(d) ആർ.ബി. കാറ്റൽ"
    ],
    "correct": 0
  },
  {
    "q": "ഒരു വിദ്യാർഥിയുടെ സമപ്രായക്കാരോടുള്ള പെരുമാറ്റം അകമ്പടിയാണ്; സ്കൂൾ വ്യവസ്ഥകളോട് ചേർന്നുനിൽക്കുന്നില്ല. ഈ കുട്ടിക്ക് ഏത് മേഖലയിലാണ് സഹായം ആവശ്യം?",
    "options": [
      "(a) വൈകാരിക മേഖല (Affective domain)",
      "(b) മനശ്ചാലക മേഖല (Psycho motor domain)",
      "(c) വൈജ്ഞാനിക മേഖല (Cognitive domain)",
      "(d) ഉയർന്നതല ചിന്താശേഷികൾ (Higher order thinking skills)"
    ],
    "correct": 0
  },
  {
    "q": "ബുദ്ധിയെക്കുറിച്ച് ഗാർഡ്നർ അവതരിപ്പിച്ച സിദ്ധാന്തം ഏത് പേരിൽ അറിയപ്പെടുന്നു?",
    "options": [
      "(a) ദ്വിഘടക സിദ്ധാന്തം (Two Factor Theory)",
      "(b) ഫാക്കൽറ്റി സിദ്ധാന്തം (Faculty Theory)",
      "(c) ബഹുമുഖ ബുദ്ധി സിദ്ധാന്തം (Multiple Intelligence Theory)",
      "(d) ഏക ഘടക സിദ്ധാന്തം (Single Factor Theory)"
    ],
    "correct": 2
  },
  {
    "q": "അധ്യാപനത്തിന്റെ ഏറ്റവും അനുയോജ്യമായ ചക്രമാണ്:",
    "options": [
      "(A) അധ്യാപനം - ആസൂത്രണം - പ്രതികരണം - ഫീഡ്ബാക്ക്",
      "(B) പ്രതികരണം - അധ്യാപനം - ആസൂത്രണം - ഫീഡ്ബാക്ക്",
      "(C) ആസൂത്രണം - അധ്യാപനം - പ്രതികരണം - ഫീഡ്ബാക്ക്",
      "(D) ആസൂത്രണം - അധ്യാപനം - ഫീഡ്ബാക്ക് - പ്രതികരണം"
    ],
    "correct": 2
  },
  {
    "q": "സമയാനുഗതമായി പാരമ്പര്യവശാല് ലഭിച്ച സാധ്യതകളുടെ പ്രകടിപ്പിക്കലാണ്,",
    "options": [
      "(A) അഭിപ്രേരണ",
      "(B) പരിപക്വത",
      "(C) ആശയരൂപീകരണം",
      "(D) പഠനം"
    ],
    "correct": 1
  },
  {
    "q": "വികസനവുമായി ബന്ധപ്പെട്ട തെറ്റായ പ്രസ്താവന ഏത്?",
    "options": [
      "(A) വികസനം പാരമ്പര്യത്തിന്റെയും സാഹചര്യത്തിന്റെയും പരസ്പര പ്രവർത്തനത്തിന്റെ ഫലമാണ്",
      "(B) വികസനം തുടർച്ചയായതും ക്രമാനുഗതവുമായതാണ്",
      "(C) വികസനം സൂക്ഷ്മത്തിൽ നിന്ന് സ്ഥൂലത്തിലേക്ക് നടക്കുന്നു",
      "(D) വികസനം പ്രവചിക്കുവാൻ സാധിക്കും"
    ],
    "correct": 2
  },
  {
    "q": "താഴെ പറയുന്നവരിൽ പ്രതിഭാധനനായ കുട്ടി ഏത്?",
    "options": [
      "(A) പൊതുവായിട്ടുള്ള അറിവുകൾ സമ്പാദിക്കാൻ വളരെയധികം ബുദ്ധിമുട്ടാണ്",
      "(B) സ്കൂളിൽ പഠിക്കാനുള്ള അഭിപ്രേരണ കുറവാണ്",
      "(C) നന്നായി പഠിക്കുവാനാകും എന്ന വിശ്വാസം തനിക്ക് ഇല്ല",
      "(D) വളരെയധികം ജിജ്ഞാസയുള്ളതും പെട്ടെന്ന് കാര്യങ്ങൾ ഗ്രഹിക്കുന്നവളുമാണ് ആഷ്ന"
    ],
    "correct": 3
  },
  {
    "q": "സർപ്പിള പാഠ്യപദ്ധതിയുടെ (Spiral Curriculum) വക്താവ് ആര്?",
    "options": [
      "(A) ബ്രൂണർ",
      "(B) സ്കിനർ",
      "(C) വാട്സൺ",
      "(D) ഗാർഡ്നർ"
    ],
    "correct": 0
  },
  {
    "q": "സാധാരണ വ്യക്തികളിൽ നിന്നും വ്യത്യസ്തമായി വായിക്കാനുള്ള കഴിവിൽ കാണപ്പെടുന്ന ചിരസ്ഥായിയായ പ്രയാസമാണ്,",
    "options": [
      "(A) ഡിസ്കാൽക്കുലിയ",
      "(B) ഡിസ്ഗ്രാഫിയ",
      "(C) ഡിസ്ലെക്സിയ",
      "(D) ഡിസ്ഫേഷ്യ"
    ],
    "correct": 2
  },
  {
    "q": "'പെഡഗോഗി' എന്നത് എന്തിനെക്കുറിച്ചുള്ള പഠനമാണ്?",
    "options": [
      "(A) സ്കൂൾ",
      "(B) വിദ്യാഭ്യാസം",
      "(C) കുട്ടി",
      "(D) അധ്യാപന രീതി"
    ],
    "correct": 3
  },
  {
    "q": "എട്ടു വയസ്സ് പ്രായമുള്ള അഹദിന് വസ്തുക്കളെ അവയുടെ വലുപ്പത്തിന്റെ അടിസ്ഥാനത്തിൽ വർഗീകരിക്കുവാനാകും. പിയാഷെയുടെ അഭിപ്രായത്തിൽ അഹമ്മദിനുള്ള കഴിവാണ്.",
    "options": [
      "(A) റിവേഴ്സിബിലിറ്റി",
      "(B) വർഗീകരണം",
      "(C) സ്ഥിരത",
      "(D) സത്ത്വലീകരണം"
    ],
    "correct": 1
  },
  {
    "q": "താഴെ പറയുന്നവയിൽ പ്രതിഭാശാലികളായ കുട്ടികൾ നേരിടുന്ന പ്രശ്നങ്ങൾ ഏവ?",
    "options": [
      "(A) പ്രത്യേക ആവശ്യങ്ങൾക്ക് വിരീനം സംഭവിക്കുന്നതുമായി ബന്ധപ്പെട്ട പ്രശ്നങ്ങൾ",
      "(B) അധ്യാപകർ മനസിലാക്കാത്തതു കൊണ്ടുള്ള പ്രശ്നങ്ങൾ",
      "(C) വെല്ലുവിളികളില്ലാത്ത ക്ലാസ്സ് മുറി പ്രവർത്തനങ്ങൾ",
      "(D) മുകളിൽ പറഞ്ഞതെല്ലാം"
    ],
    "correct": 3
  },
  {
    "q": "കുട്ടികളെക്കുറിച്ച് തെറ്റായ പ്രസ്താവന ഏത്?",
    "options": [
      "(A) അവർ പ്രശ്ന നിർദ്ധാരകരാണ്",
      "(B) അവർ ചുറ്റുപാടുകളെക്കുറിച്ച് സൂക്ഷ്മ നിരീക്ഷണം നടത്തുന്നവരാണ്",
      "(C) അവർ അന്വേഷണ താൽപര്യമുള്ളവരാണ്",
      "(D) അവർ നിഷ്ക്രിയരായ പഠിതാക്കളാണ്"
    ],
    "correct": 3
  },
  {
    "q": "പുരോഗമന വിദ്യാഭ്യാസത്തിന്റെ വക്താക്കളുടെ അഭിപ്രായത്തിൽ കുട്ടികൾ പഠിക്കുന്നത്,",
    "options": [
      "(A) ഒറ്റപ്പെട്ട സാഹചര്യത്തിലാണ്",
      "(B) മത്സരത്തിലൂടെയാണ്",
      "(C) സമൂഹമായിട്ടാണ്",
      "(D) ഇതൊന്നുമല്ല"
    ],
    "correct": 2
  },
  {
    "q": "ഫ്രോയിഡിന്റെ അഭിപ്രായത്തിൽ ഇദ് (Id) പ്രവർത്തിക്കുന്നത്:",
    "options": [
      "(A) സുഖതത്ത്വം (Pleasure principle)",
      "(B) യാഥാർത്ഥ്യ ബോധതത്ത്വം (Reality principle)",
      "(C) (C) ഉപരിമാനസം (Super ego)",
      "(D) (D) മനസ്സാക്ഷി (Conscience)"
    ],
    "correct": 0
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
