document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
  {
    "q": "അധ്യാപകൻ ക്ലാസ്‌റൂമിൽ ഒഴിവാക്കേണ്ടത് താഴെപ്പറയുന്നവയിൽ ഏതാണ്",
    "options": [
      "പ്രബലനം",
      "ധന പ്രബലനം.",
      "ശിക്ഷ",
      "ഋണ പ്രബലനം"
    ],
    "correct": 2
  },
  {
    "q": "പിയാഷെയുടെ അഭിപ്രായത്തിൽ 2 - 7 വയസ്സു വരെയുള്ള കുട്ടി താഴെപ്പറയുന്ന വികാസത്തിന്റെ ഏതു ഘട്ടത്തിലാകും ?",
    "options": [
      "ഫോർമൽ ഓപ്പറേഷണൽ",
      "കോൺക്രീറ്റ് ഓപ്പറേഷണൽ",
      "സെൻസറി മോട്ടോർ",
      "പ്രീ ഓപ്പറേഷണൽ"
    ],
    "correct": 3
  },
  {
    "q": "രേഖ വൃത്തിക്കും, അടുക്കും ചിട്ടക്കും അമിതപ്രാധാന്യം നൽകുന്ന ആളാണ് ഏതു സൈക്കോ സെക്ഷ്വൽ ഘട്ടത്തിലാണ് രേഖയ്ക്ക് ഫിക്സേഷൻ ഉണ്ടായിട്ടുള്ളത് ?",
    "options": [
      "ഏനൽ സ്റ്റേജ്",
      "ഓറൽ സ്റ്റേജ്",
      "ലെറ്റൻസി സ്റ്റേജ്",
      "ഫാലിക്ക് സ്റ്റേജ്"
    ],
    "correct": 0
  },
  {
    "q": "വാതിൽ പൂട്ടുന്നത് താഴെ പറയുന്നതിൽ എതിൻ്റെ ഉദാഹരണമാണ് ?",
    "options": [
      "വാച്യ ശൃംഖല",
      "ചലന ശൃംഖല",
      "മനോ ശൃംഖല",
      "മനോ ചലന ശൃംഖല."
    ],
    "correct": 1
  },
  {
    "q": "ക്ലാസിൽ അദ്ധ്യാപകൻ നൽകുന്ന എല്ലാ പ്രവർത്തനങ്ങളും കൃത്യമായി കൃത്യ സമയത്ത് ചെയ്യുന്നതിൽ സന്തോഷം കണ്ടെത്തുന്ന കുട്ടിയിൽ ദർശിക്കുന്നത്",
    "options": [
      "ആന്തരിക അഭിപ്രേരണ",
      "ബാഹ്യ അഭിപരണ.",
      "പരാജയ ഭീതി",
      "മത്സരബുദ്ധി"
    ],
    "correct": 0
  },
  {
    "q": "താഴെപ്പറയുന്നവയിൽ കുട്ടികളുടെ സർഗപരതയെ നിയന്ത്രിക്കുന്ന ഘടകങ്ങളിൽ പെടാത്തത് ?",
    "options": [
      "बुദ്ധി",
      "ആരോഗ്യം",
      "ക്ഷീണം",
      "സാമൂഹിക-സാമ്പത്തിക നില."
    ],
    "correct": 3
  },
  {
    "q": "'ഇരട്ട സ്ഥാനക്കയറ്റം' ഏത് വിഭാഗത്തിൽപ്പെട്ട കുട്ടികൾക്ക് ആണ് നൽകുന്നത് ?",
    "options": [
      "പ്രതിഭാധനർക്ക്",
      "സർഗ്ഗപരതയുള്ളവർക്ക്.",
      "बुദ്ധിമാന്ദ്യമുള്ളവർക്ക്",
      "ഓട്ടിസം ഉള്ളവർക്ക്"
    ],
    "correct": 0
  },
  {
    "q": "എറിക്ക് എറിക്‌സണുമായി ബന്ധപ്പെട്ടിരിക്കുന്ന ആശയം തിരഞ്ഞെടുക",
    "options": [
      "അഹം (ഈഗോ)",
      "ജീവിത പ്രതിസന്ധി",
      "മാതൃക നൽകൽ (മോഡലിങ്",
      "പ്രബലനം (റീ ഇൻ ഫോഴ്‌സ്മെന്റ്)"
    ],
    "correct": 1
  },
  {
    "q": "താഴെപ്പറയുന്നവയിൽ സർഗ്ഗപരതയും സവിശേഷതയിൽ പെടാത്തത് ഏത് ?",
    "options": [
      "വിപുലീകരണം",
      "വാചാലത",
      "അയവുള്ളത്.",
      "വ്യക്തിത്വം"
    ],
    "correct": 3
  },
  {
    "q": "'കിട്ടാത്ത മുന്തിരി പുളിക്കും' എന്ന നിലപാട് താഴെപ്പറയുന്നവയിൽ ഏതിന് ഉദാഹരണമാണ് ?",
    "options": [
      "ഉദാത്തീകരണം",
      "യുക്തീകരണം.",
      "ദമനം",
      "വിനിവർത്തനം"
    ],
    "correct": 1
  },
  {
    "q": "ഒരു ഡസൻ ആരോഗ്യമുള്ള കുഞ്ഞുങ്ങളെ എനിക്ക് വിട്ടുതരിക ഞാൻ അവരെ വിദഗ്ധരായി വളർത്തി കൊണ്ടുവരാം' ഇത് ആരുടെ വാക്കുകളാണ്",
    "options": [
      "പിയാഷെ",
      "വാട്‌സൺ",
      "ഗാൾടന്",
      "പാവ്ലോ"
    ],
    "correct": 1
  },
  {
    "q": "മന്ദ പഠിതാക്കൾ ഉള്ള ക്ലാസ്സിൽ അദ്ധ്യാപകൻ/അദ്ധ്യാപിക-",
    "options": [
      "എല്ലാ കുട്ടികൾക്കും ഒരുപോലെ ഉള്ള പ്രവർത്തനങ്ങൾ നൽകുന്നു.",
      "വ്യക്തി വ്യത്യാസം പരിഗണിച് കഴിവ് അനുസൃതമായ പ്രവർത്തനങ്ങൾ നൽകുന്നു.",
      "മന്ദ പഠിതാക്കളെ പരിഗണിക്കില്ല",
      "സംവർധിത കാര്യക്രമം(Enrichment programmes) അവലംബിക്കുന്നു"
    ],
    "correct": 1
  },
  {
    "q": "താഴെപ്പറയുന്നവയിൽ ഗിഫോർഡിൻ്റെ ബുദ്ധി മാതൃകയിൽ വരാത്തത്?",
    "options": [
      "മനോവ്യാപാരം.",
      "ഉള്ളടക്കം",
      "ഉത്പന്നം",
      "പ്രക്രിയ"
    ],
    "correct": 3
  },
  {
    "q": "'നവജാത കാലം' എന്നറിയപ്പെടുന്നത് താഴെപ്പറയുന്നവയിൽ ഏതാണ് ?",
    "options": [
      "ഗർഭാവസ്ഥയിലെ ആദ്യത്തെ രണ്ടാഴ്ച",
      "ശൈശവത്തിലെ ആദ്യത്തെ നാലാഴ്ച്‌ച",
      "ഭ്രൂണ ഘട്ടം.",
      "ഗർഭ ഘട്ടം"
    ],
    "correct": 1
  },
  {
    "q": "'പഠന പിഡസ്ഥലി' എന്നതുകൊണ് അർത്ഥമാക്കുന്നത്",
    "options": [
      "പഠന പുരോഗതി ഇല്ലാത്ത ഘട്ടം.",
      "പഠനപുരോഗതി മന്ദമായ ഘട്ടം",
      "പഠനപുരോഗതി ശീഘ്രമായ ഘട്ടം",
      "പഠനപുരോഗതി തിരിച്ചറിയാൻ കഴിയാത്ത ഘട്ടം"
    ],
    "correct": 0
  },
  {
    "q": "സാമൂഹിക ജ്ഏനനിർമ്മിതിവാദത്തിൽ പ്രസക്തമായ ഗവേഷണങ്ങൾ നടത്തിയ വ്യക്തി",
    "options": [
      "ജീൻ പിയാഷെ",
      "ജെറോം. എസ്. ബ്രൂണർ.",
      "ലെ വൈഗോട്സ്കി",
      "ചോംസ്കി"
    ],
    "correct": 2
  },
  {
    "q": "പ്രക്ഷേപവിധികളിൽ കാരണവർ സ്ഥാനം താഴെപ്പറയുന്നവയിൽ ഏതിനാണ് ?",
    "options": [
      "റോഷായുടെ മഷി ഒപ്പ് പരീക്ഷ.",
      "പ്രകരണസംപ്രത്യക്ഷണ പരീക്ഷ (TAT)",
      "ബാലക സംപ്രത്യക്ഷണ പരീക്ഷ (CAT)",
      "ചിത്ര പൂർത്തീകരണ പരീക്ഷ"
    ],
    "correct": 0
  },
  {
    "q": "പ്രായപൂർത്തിയാകാത്ത കുട്ടികളിൽ കുറ്റവാസന കൂടുതൽ കാണുന്ന ഘട്ടം",
    "options": [
      "ശൈശവം",
      "ആദ്യ ബാല്യം",
      "കൗമാരം",
      "പിൽക്കാല ബാല്യം."
    ],
    "correct": 2
  },
  {
    "q": "ബുദ്ധിയുടെ ത്രിമുഖ സിദ്ധാന്തം (Three factor theory of Intelligence) അവതരിപ്പിച്ചതാര്?",
    "options": [
      "ഗിൽ ഫോഡ്",
      "സ്പിയർമാൻ",
      "ഗാർഡ്‌നർ",
      "ഇവരാരുമല്ല"
    ],
    "correct": 0
  },
  {
    "q": "ഐ.ക്യു. ടെസ്റ്റിൻ്റെ ഫലമനുസരിച്ച്, മാനസിക വെല്ലുവിളി നേരിടുന്നവർ താഴെ പറയുന്നതിൽ ഏത് നിലവാരത്തിലുള്ളവരാണ്?",
    "options": [
      "110-ൽ താഴെ",
      "80-ൽ താഴെ",
      "70-ൽ താഴെ",
      "90-ൽ താഴെ"
    ],
    "correct": 2
  },
  {
    "q": "ക്ലിനിക്കൽ സൈക്കോളജി ഏത് മനഃശാസ്ത്രവിഭാഗത്തിലാണ് ഉൾപ്പെടുന്നത്?",
    "options": [
      "വിദ്യാഭ്യാസ (Educational) മനഃശാസ്ത്രം",
      "ജ്ഞാതൃ (Cognitive) മനഃശാസ്ത്രം",
      "വികസനാത്മക (Developmental) മനഃശാസ്ത്രം",
      "പ്രയുക്ത (Applied) മനഃശാസ്ത്രം."
    ],
    "correct": 3
  },
  {
    "q": "സ്വത്വബോധവും മൂല്യങ്ങളും (Self ideals and values) മനുഷ്യരിൽ വികസിക്കുന്നത് ഏത് ഘട്ടത്തിലാണ്?",
    "options": [
      "Childhood",
      "Adolescence",
      "Adult hood (പ്രായപൂർത്തി).",
      "ആദിബാല്യം (Early childhood)"
    ],
    "correct": 1
  },
  {
    "q": "Cognitive Behaviourism (വൈജ്ഞാനിക വ്യവ ഹാരവാദം) ഏത് മനഃശാസ്ത്രശാഖയുടെ ന്താപദ്ധതിയാണ്?",
    "options": [
      "Humanistic Psychology (മാനവികതാവാദം)",
      "Naturalistic Psychology (പ്രകൃതിപരവാദം)",
      "Gestalt Psychology.",
      "Cognitive Psychology (ജ്ഞാതൃവാദം)"
    ],
    "correct": 2
  },
  {
    "q": "പ്രത്യേക പരിഗണന അർഹിക്കുന്ന കുട്ടികൾ (children with special needs) എന്ന കാഴ്ച‌പ്പാടിന് ഏറ്റവും യോജിച്ചത് ഏത് ?",
    "options": [
      "ബുദ്ധിപരമായി പരിമിതി ഉള്ളവർ",
      "പഠനത്തിൽ പിന്നാക്കം നിൽക്കു ന്നവർ",
      "മറ്റുകാരണങ്ങളാൽ സമപ്രായക്കാ രേക്കാൾ ശ്രദ്ധയും പരിഗണനയും ലഭിക്കേണ്ടവർ.",
      "ശാരീരിക, മാനസിക വൈകല്യമുള്ളവർ"
    ],
    "correct": 2
  },
  {
    "q": "തീവ്രമായ കരച്ചിൽ, നഖം കടിക്കൽ, തുള്ളിച്ചാടൽ എന്നിവ ശിശുവികാര പ്രതികരണങ്ങളാണ്. ഇവയെല്ലാം താഴെ പറയുന്ന ഏത് ശിശുവികാരങ്ങളുടെ പ്രത്യേകതകളിൽ പെടുന്നു ?",
    "options": [
      "വൈകാരിക ദൃശ്യത (Detectability)",
      "Transitoriness",
      "ആവൃത്തി (Frequent)",
      "സംക്ഷിപ്‌ത (Briefness)."
    ],
    "correct": 0
  },
  {
    "q": "താഴെക്കൊടുത്ത പ്രസ്‌താവനകളിൽ വൈകാരികബുദ്ധിയുടെ (Emotional Intelligence) നിർവ്വചനമായി കണക്കാ ക്കാവുന്നത് ?",
    "options": [
      "വൈകാരികാവസ്ഥയെ ബുദ്ധി പരമായി നിയന്ത്രിക്കാനുള്ള കഴിവ്",
      "തന്റെയും മറ്റുള്ളവരുടെയും വൈകാരികാവസ്ഥ മനസ്സിലാക്കാനുള്ള കഴിവ്",
      "സ്വയം പ്രചോദിതമാവുക",
      "മുകളിൽ പറഞ്ഞവയെല്ലാം."
    ],
    "correct": 3
  },
  {
    "q": "കാൾ റോജേഴ്‌സ് (Carl Rogers) ഏത് മനഃശാസ്ത്ര ചിന്താപദ്ധതിയുമായി ബന്ധപ്പെട്ട മനഃശാസ്ത്രജ്ഞനാണ്?",
    "options": [
      "ആശയവാദം (Idealism)",
      "പ്രകൃതിവാദം (Naturalism)",
      "വ്യവഹാരവാദം (Behaviourism).",
      "മാനവികവാദം (Humanism)"
    ],
    "correct": 3
  },
  {
    "q": "നിങ്ങളുടെ ക്ലാസിലെ ഒരു куട്ടിക്ക് ഭാഷണത്തിൽ വല്ലാത്ത അവ്യക്തത (Stuttering) അനുഭവപ്പെടുന്നു. നിങ്ങൾ സ്വീകരിക്കുന്ന പരിഹാരനടപടി ഏതായിരിക്കും",
    "options": [
      "ആവർത്തിച്ചുള്ള ഉച്ചാരണശിക്ഷണം നൽകുന്നു",
      "ക്ലാസിലെ എല്ലാ വചനസന്ദർഭങ്ങളിലും പങ്കാളിത്തം നൽകി, ആത്മവിശ്വാസം വർധിപ്പിച്ച് ഒറ്റയ്ക്കുള്ള അവസരം നൽകും",
      "ക്ലാസിലെ എല്ലാ വചനസന്ദർഭങ്ങളിൽ നിന്നും ഒഴിവാക്കും",
      "ഭാഷണചികിത്സയ്ക്ക് (Speech Therapy) വിധേയനാകാൻ നിർദേശിക്കും."
    ],
    "correct": 1
  },
  {
    "q": "ജെ.പി. ഗിൽഫോഡിൻ്റെ ബുദ്ധിഘടനാ മാതൃകയിലെ (Structure of Intellect Model) ശരിയായ അടിസ്ഥാന ഘടകങ്ങൾ ഏതാണ് ?",
    "options": [
      "ഉല്പന്നങ്ങൾ (Products), പ്രക്രിയകൾ (Operations), ഏകകങ്ങൾ (Units).",
      "പ്രക്രിയകൾ (Operations), ഉള്ളടക്കം (Contents), ഉല്പന്നങ്ങൾ (Products),",
      "ഉള്ളടക്കം (Contents), ഉല്പന്നങ്ങൾ (Products), വിഭാഗങ്ങൾ (Classes).",
      "പ്രക്രിയകൾ (Operations), ഉള്ളടക്കം (Contents), ബന്ധങ്ങൾ (Relations)."
    ],
    "correct": 1
  },
  {
    "q": "താഴെക്കൊടുത്ത പ്രസ്‌താവനയിൽ വായന വൈകല്യവുമായി(dyslexia) ബന്ധപ്പെടാത്തത് ഏത്?",
    "options": [
      "വായിക്കുമ്പോൾ ചില പദങ്ങൾ വിട്ടു വായിക്കുന്നു.",
      "നിർത്തേണ്ടിടത്ത് നിർത്താതെ വായിക്കുന്നു.",
      "ഒന്നോ രണ്ടോ വരികൾ വിട്ടു വായിക്കുന്നു.",
      "അർത്ഥം മനസ്സിലാക്കാതെ വായിക്കുന്നു."
    ],
    "correct": 3
  },
  {
    "q": "വ്യക്തിക്ക് സന്ദർഭത്തിനനുസരിച്ച് പെരു മാറാനും സാഹചര്യങ്ങൾ തനിക്ക് അനുകൂലമാക്കാനും കഴിയുന്ന ബുദ്ധിയെന്ന് റോബർട്ട്. ജെ. സ്റ്റൺберг വിശേഷിപ്പിക്കുന്ന ബുദ്ധിയുടെ ഘടകം ഏതെന്ന് കണ്ടെത്തുക.",
    "options": [
      "കോംപൊണൻഷ്യൽ ഇന്റലിജൻസ്",
      "എക്സ്‌പീരിയൻഷ്യൽ ഇൻ്റലിജൻസ്",
      "കോൺടെക്സ്ച്വൽ ഇൻ്റലിജൻസ്.",
      "ക്രിസ്റ്റലൈസ്ഡ് ഇന്റലിജൻസ്"
    ],
    "correct": 2
  },
  {
    "q": "അധ്യയനത്തിൽ പ്രഭാഷണ(Lecture Method) രീതിക്കുള്ള പരിമിതി എന്താണ്?",
    "options": [
      "അധ്യാപകൻ ക്ലാസിന് സഹായകമായ കുറിപ്പുകൾ തയ്യാറാക്കി ഉപയോഗിക്കുന്നു",
      "പ്രഭാഷണത്തിൽ മറ്റ് വിജ്ഞാനശാഖകളിൽ നിന്നുള്ള ഉദാഹരണങ്ങൾ നിരത്തുന്നു",
      "തത്സമയ പ്രഭാഷണം നടത്തുന്നു",
      "കുട്ടികൾ കേൾവിയിലൂടെയുള്ള ആശയഗ്രഹണം (Listening Comprehension) മാത്രം പ്രയോജനപ്പെടുത്തുന്നു."
    ],
    "correct": 3
  },
  {
    "q": "വികാസ തത്വങ്ങളിൽപ്പെടാത്തത് ഏത് ?",
    "options": [
      "വികാസം ക്രമീകൃതമാണ്",
      "വികാസം വിശേഷത്തിൽ നിന്നും സാമാന്യത്തിലേക്ക് കടക്കുന്നു",
      "വികാസം പ്രവചനീയമാണ്.",
      "വികാസം സഞ്ചിത സ്വഭാവത്തോടു കൂടിയതാണ്"
    ],
    "correct": 1
  },
  {
    "q": "നിരീക്ഷണ പഠന സിദ്ധാന്തത്തിൻ്റെ (theory of observational learning) ശരിയായ പ്രക്രിയാഘട്ടങ്ങൾ ഏത് ?",
    "options": [
      "മാതൃക നൽകൽ (Modelling), ശ്രദ്ധ (Attention), ചാലക പ്രകടനം (Motor reproduction), നിലനിർത്തൽ (Retention)",
      "ശ്രദ്ധ (Attention), മാതൃകനൽകൽ (Modelling), ചാലക പ്രകടനം (Motor reproduction), Reinforcement",
      "ചാലക പ്രകടനം (Motor reproduction), നിലനിർത്തൽ (Retention), മാതൃക നൽകൽ (Modelling), Attention",
      "മാതൃക നൽകൽ (Modelling), ശ്രദ്ധ (Attention), നിലനിർത്തൽ (Retention), ചാലക പ്രകടനം (Motor reproduction)."
    ],
    "correct": 3
  },
  {
    "q": "പുതിയ വിദ്യാഭ്യാസ കാഴ്‌ചപ്പാടിൽ മൂല്യനിർണയവുമായി ബന്ധപ്പെട്ട് സ്വീകാര്യമായ പ്രസ്താവന ഏത്?",
    "options": [
      "അത് മൂല്യനിർണയത്തിൻ്റെ സമഗ്രസ്വഭാവത്തെ പ്രോത്സാഹിപ്പിക്കുന്നു.",
      "പുസ്‌തകങ്ങൾ കാർന്ന് ശേഖരിച്ച് അറിവിനെ പരിശോധിക്കുന്നു",
      "കുട്ടികളെ കൃത്യമായി ക്ലാസിൽ ഹാജരാകാൻ അത് പ്രോത്സാഹിപ്പിക്കുന്നില്ല",
      "അത് എഴുത്തുപരീക്ഷയ്ക്ക് ഊന്നൽ കൊടുക്കുന്നു."
    ],
    "correct": 0
  },
  {
    "q": "സിഗ്മണ്ട് ഫ്രോയിഡിൻ്റെ സിദ്ധാന്തമായ മനോ-ലൈംഗിക വികാസ ഘട്ടത്തിൽ (psycho-sexual development) പിതൃ- കാമനയും (Electra Complex) മാതൃ കാമന (Oedipus Complex) -യുമെന്ന സവിശേഷതകൾ കാണപ്പെടുന്ന ഘട്ടം ഏത് ?",
    "options": [
      "ജനനേന്ദ്രിയ ഘട്ടം (Genital Stage)",
      "നിർലീന ഘട്ടം (Latency Stage).",
      "Phallic Stage",
      "गुദ ഘട്ടം (Anal Stage)"
    ],
    "correct": 2
  },
  {
    "q": "രമേഷ് മാഷ്, ക്ലാസ്സിൽ ഗ്രൂപ്പ് പ്രവർത്തനങ്ങളും അനുഭവങ്ങൾ പങ്കു വെക്കുന്നതിനുള്ള പ്രവർത്തനങ്ങളും നൽകി. കുട്ടികളുടെ ഏത് തരം ബുദ്ധി വർദ്ധിപ്പിക്കാനാണ് ഈ പ്രവർത്തനം സഹായിക്കുക ?",
    "options": [
      "ആന്തരിക വൈയക്തിക ബുദ്ധി (Intra-personal intelligence)",
      "ശാരീരിക ചലനപരമായ ബുദ്ധി (Bodily kinaesthetic intelligence)",
      "ഭാഷാപരമായ ബുദ്ധി (Linguistic intelligence)",
      "വ്യക്തിയാന്തര ബുദ്ധി(inter personal intelligence)."
    ],
    "correct": 3
  },
  {
    "q": "ആർ.ബി. കാറ്റൽ നിർദേശിച്ച Fluid Intelligence- ൽ ഉൾപ്പെട്ടിട്ടില്ലാത്തത് ഏത്?",
    "options": [
      "അമൂർത്ത ചിന്തനം (Abstract thinking)",
      "പദാവലി വികസനം (Vocabulary Development)",
      "സർഗാത്മകത (Creativity).",
      "Interpretation"
    ],
    "correct": 1
  },
  {
    "q": "താഴെപ്പറയുന്നവയിൽ മന്ദപഠിതാക്കളെ (slow learners) പഠിപ്പിക്കുന്നതിന് നൽകുന്ന നിർദ്ദേശങ്ങളിൽപ്പെടാത്തത് ഏത് ?",
    "options": [
      "വിജയകരമായി പൂർത്തിയാക്കാവുന്ന ചെറിയ പഠന പ്രവർത്തനങ്ങൾ നൽകുക.",
      "വെല്ലുവിളി ഉയർത്തുന്ന പഠന പ്രവർത്തനങ്ങൾ നൽകുക.",
      "ചെറുതും ക്രമീകൃതവുമായ പാഠഭാഗങ്ങൾ നൽകുക.",
      "ഇവയെല്ലാം."
    ],
    "correct": 1
  },
  {
    "q": "പെൺ കുട്ടികൾക്ക് ക്ലാസ് അടിച്ചു വൃത്തിയാക്കുന്ന പണിയാണ് കൂടുതൽ ആൺ കുട്ടികൾ ഡസ്ക്കും ബെഞ്ചും മാറ്റിയിടട്ടെ; ക്ലാസ് ടീച്ചർ പറഞ്ഞു. ടീച്ചറുടെ ഈ പ്രസ്‌താവന എന്തിനെ സൂചിപ്പിക്കുന്നു ?",
    "options": [
      "ജെന്റർ സ്റ്റീരിയോടൈപ്പ്",
      "ജെന്റർ ഡിസ്ക്രിമിനേഷൻ.",
      "ജെന്റർ ബയാസ്",
      "ജെന്റർ ഐഡന്റിറ്റി"
    ],
    "correct": 2
  },
  {
    "q": "താഴെ പറയുന്നവയിൽ വൈഗോഡ്‌സ്‌കിയുമായി ബന്ധപ്പെട്ട കാര്യമെന്ത്?",
    "options": [
      "Universal Grammar theory (സർവഭാഷാവ്യാകരണ സിദ്ധാന്തം)",
      "Formal Operational Stage (ഔപചാരിക മനോവ്യാപാരഘട്ടം)",
      "Potential level (പ്രാപ്‌തിനില).",
      "Emotional Intelligence"
    ],
    "correct": 2
  },
  {
    "q": "ഏതുകുട്ടിയെയും ബൗദ്ധിക വിശ്വാസ്യതയുള്ള ഏത് രീതിയിലും വികാസത്തിന്റെ ഏതുഘട്ടത്തിലും ഏതുവിഷയവും പഠിപ്പിക്കാൻ കഴിയും ഇത് ആരുടെ പ്രസ്‌താവനയാണ്?",
    "options": [
      "പിയാഷെ",
      "ബ്രൂണർ",
      "ചോംസ്ക‌ി",
      "വൈഗോഡ്സ്കി."
    ],
    "correct": 1
  },
  {
    "q": "ക്ലാസ് മുറി ഒരു പങ്കുവയ്ക്കൽ അന്തരീക്ഷമാകണം- ഈ ആശയവുമായി ബന്ധമുള്ളത് ഏതാണ്",
    "options": [
      "Cognitive Development theory(വൈജ്ഞാനിക വികാസസിദ്ധാന്തം.).",
      "സാമൂഹിക ജ്ഞാന നിർമിതിവാദം",
      "ബഹുഘടകബുദ്ധി സിദ്ധാന്തം",
      "Field theory of Learning (പഠനത്തിലെ ക്ഷേത്ര സിദ്ധാന്തം)"
    ],
    "correct": 1
  },
  {
    "q": "താഴെക്കൊടുത്തവയിൽ കാൾ റോജേഴ് സിൻ്റെ വ്യക്തിത്വ സിദ്ധാന്ത കാഴ്‌ചപ്പാടുകളിൽ പരിഗണിക്കുന്ന ആശയങ്ങൾ ഏതെല്ലാം ?",
    "options": [
      "ആത്മസാക്ഷാത്കാരം (Self- actualisation), ആദർശാത്മക അഹം (Ideal Self), യാഥാർത്ഥ്യാധിഷ്ഠിത അഹം (Real Self)",
      "ആദർശാത്മക അഹം (Ideal Self), നിруപാധിക പരിഗണന (Unconditional Positive Regard), യാഥാർത്ഥ്യാധിഷ്‌ഠിത അഹം (Real self)",
      "ആദർശാത്മക അഹം (Ideal Self), പക്വവ്യക്തിത്വം (Matured Personality), നിруപാധിക പരിഗണന (Unconditional Positive Regard)",
      "പക്വവ്യക്തിത്വം (Matured Personality), ആദർശാത്മക അഹം (Ideal Self), നിруപാധിക പരിഗണന (Unconditional Positive Regard)."
    ],
    "correct": 1
  },
  {
    "q": "ഒരു കുട്ടിയുടെ ശാരീരിക വളർച്ച പ്രായത്തിന നുസരിച്ചാകാതെ കുറഞ്ഞുകാണപ്പെടുന്നു. ഈ പ്രതിഭാസം ഏതുപേരിലാണറിയപ്പെടുന്നത്?",
    "options": [
      "Mentally challenged (മാനസികവെല്ലുവിളി)",
      "Physically handicapped",
      "Autistic (ഓട്ടിസം ബാധ)",
      "Delayed motor development (വിളംബിത ചാലക വികാസം)."
    ],
    "correct": 3
  },
  {
    "q": "ക്ലാസ് റൂം പ്രവർത്തനത്തിൻ്റെ ഭാഗമായുള്ള നിരീക്ഷണം, ക്ലാസ് ചർച്ചകൾ, വിദ്യാർത്ഥികളുടെ മടക്കധാരണ (feedback) എന്നിവ ഏത് വിലയിരുത്തലിൻ്റെ ഭാഗമാണ് ?",
    "options": [
      "പഠനത്തെ വിലയിരുത്തൽ (Assessment of learning)",
      "പഠനത്തിനായുള്ള വിലയിരുത്തൽ (Assessment for learning)",
      "പഠനം തന്നെ വിലയിരുത്തൽ (Assessment as learning)",
      "ഇവയെല്ലാം."
    ],
    "correct": 1
  },
  {
    "q": "-----------വിലയിരുത്തുന്നതിന് തീമാറ്റിക് അപ്പർ സെപ്ഷൻ ടെസ്റ്റ് (TAT ) ഉപയോഗിക്കുന്നു.",
    "options": [
      "ഓർമ്മ (Memory)",
      "വ്യക്തിത്വം (Personality).",
      "ബുദ്ധി (Intelligence)",
      "അഭിക്ഷമത (Aptitude)"
    ],
    "correct": 1
  },
  {
    "q": "സംഗീത ടീച്ചർ ക്ലാസിലെ ആറ് ഗ്രൂപ്പുകളിൽ ഒരു ലേഖന ഭാഗം നൽകി. ഗ്രൂപ്പുകളോട് പരസ്പരം ചോദ്യങ്ങൾ ഉന്നയിക്കാനും ആശയങ്ങൾ ചുരുക്കുന്നതിനും ചില ഭാഗങ്ങൾ വിശദീകരിക്കുന്നതിനും ഇനിയെന്ത് സംഭവിക്കും എന്നതിനെക്കുറിച്ച് അഭിപ്രായം പറയുന്നതിനും അവസരം നൽകി. എങ്കിൽ ടീച്ചർ ഇവിടെ സ്വീകരിച്ച തന്ത്രം എന്ത് ?",
    "options": [
      "കണ്ടെത്തൽ പഠനം (Discovery learning)",
      "ആശയാദാന മാതൃക (Concept attainment model).",
      "സംവാദാത്മക പഠനം (Dialogical learning)",
      "പരസ്പര പഠനരീതി (Reciprocal teaching)"
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
