document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
  {
    "q": "കുട്ടികളുടെ വികാരങ്ങളുമായി ബന്ധപ്പെട്ട് ചില പ്രസ്താവനകൾ ചുവടെ കൊടുക്കുന്നു. ശരിയല്ലാത്ത പ്രസ്താവന ഏത് ?",
    "options": [
      "വികാരങ്ങൾ തീവ്രമാണ്",
      "വികാര പ്രകടനങ്ങൾ കൂടെ കൂടെ ഉണ്ടാകുന്നു.",
      "വികാരങ്ങൾ അല്പായുസ്സുള്ളവയാണ്.",
      "വികാരങ്ങൾ സ്ഥിരമാണ്."
    ],
    "correct": 3
  },
  {
    "q": "ബ്ലാക്ക് ബോർഡ്/വൈറ്റ് ബോർഡ് അധ്യാപകർ ക്ലാസിൽ സർവ്വസാധാരണമായി ഉപയോഗിക്കുന്ന ഒരു പഠനോപകരണമാണ്. ഇത്തരത്തിലുള്ള ഒരു ബോർഡ് ഫലപ്രദമായി ക്ലാസിൽ എങ്ങനെ ഉപയോഗിക്കാം ?\" -എന്ന വിഷയത്തിൽ അനിത ടീച്ചർ ഒരു പഠനം നടത്താൻ തീരുമാനിച്ചു. ഏറ്റവും അനുയോജ്യമായ മനശാസ്ത്ര ഗവേഷണ രീതി ചുവടെ കൊടുത്തിരിക്കുന്നവയിൽ ഏതാണ് ?",
    "options": [
      "കേസ് സ്റ്റഡീ",
      "ക്ലിനിക്കൽ രീതി",
      "ക്രിയാ ഗവേഷണം",
      "സോഷ്യോമെട്രി"
    ],
    "correct": 2
  },
  {
    "q": "സ്കൂളിലേയ്ക്ക് വരുന്ന വഴിയിൽ തെരുവ് നായ്ക്കളെ സൂക്ഷിക്കണമെന്ന് ഫെമിന ടീച്ചർ എപ്പോഴും കുട്ടികളെ ഓർമ്മപ്പെടുത്തുമായിരുന്നു. ഇപ്പോൾ ക്ലാസ്സിലെ ഭൂരിഭാഗം കുട്ടികൾക്കും എല്ലാ നായ്ക്കളെയും പേടിയാണ്. പഠന സമീപനവുമായി ബന്ധപ്പെടുത്തി ഇത് എന്തിന് ഉദാഹരണമാണ് ?",
    "options": [
      "ചോദക വിവേചനം",
      "ചോദക സാമാന്യവൽക്കരണം",
      "ചോദക നിയന്ത്രണം",
      "വിലോപം"
    ],
    "correct": 1
  },
  {
    "q": "വ്യക്തിത്വവുമായി ബന്ധപ്പെട്ട ഫ്രോയിഡിന്റെ ഘടനാ മാതൃകയിൽ പ്രവർത്തിക്കുന്നത് ഇനിപ്പറയുന്നവ അനുസരിച്ചാണ് :",
    "options": [
      "യാഥാർത്ഥ തത്വം",
      "ആനന്ദ തത്വം",
      "ധാർമിക തത്വം",
      "വളർച്ചാ തത്വം"
    ],
    "correct": 0
  },
  {
    "q": "സാമൂഹികമായി അസ്വീകാര്യമായ ആഗ്രഹങ്ങളെ അഭിലഷണീയമായ വഴികളിലൂടെ തിരിച്ചു വിടുന്ന പ്രക്രിയ അറിയപ്പെടുന്നത് :",
    "options": [
      "ദമനം",
      "ഉദാത്തീകരണം",
      "യുക്തീകരണം",
      "പ്രക്ഷേപണം"
    ],
    "correct": 1
  },
  {
    "q": "താഴെ കൊടുത്തിരിക്കുന്നവയിൽ ബുദ്ധിമാനം കണ്ടുപിടിക്കാനുള്ള ശരിയായ സൂത്രവാക്യം ഏത് ?",
    "options": [
      "IQ = MA / CA x 100",
      "IQ = CA / MA x 100",
      "IQ = MA / EQ x 100",
      "IQ = MA / CA x EQ"
    ],
    "correct": 0
  },
  {
    "q": "തുടർച്ചയായ മൂല്യനിർണയത്തിൽ, പ്രധാന ശ്രദ്ധ കേന്ദ്രീകരിക്കുന്നത് :",
    "options": [
      "വിദ്യാർത്ഥികളെ റാങ്കിങ് ചെയ്യുക",
      "വിദ്യാർത്ഥികളുടെ പഠനം മെച്ചപ്പെടുത്താൻ സഹായിക്കുക",
      "വസ്തുതകൾ മാത്രം ഓർമ്മിപ്പിക്കുക",
      "മൂല്യനിർണയമില്ലാതെ പഠിപ്പിക്കൽ"
    ],
    "correct": 1
  },
  {
    "q": "ഒരു കുട്ടി ഒരു ഫോൺ നമ്പർ പലതവണ ആവർത്തിച്ച് പറഞ്ഞ് ഓർമ്മയിൽ നിലനിർത്താൻ ശ്രമിക്കുന്നു. ഇത് ഏതിനുള്ള ഉദാഹരണമാണ് ?",
    "options": [
      "ഓർഗനൈസേഷൻ",
      "എലാബറേഷൻ",
      "റിഹേഴ്സൽ",
      "ഡിസ്കവറി ലേണിംഗ്"
    ],
    "correct": 2
  },
  {
    "q": "ഹൊവാർഡ് ഗാർഡ്‌നറുടെ അഭിപ്രായത്തിൽ ഒരുവന് മറ്റുള്ളവരുടെ വികാര വിചാരങ്ങൾ മനസ്സിലാക്കുക വഴി അവരുമായി നല്ലതുപോലെ ഇടപഴകുവാൻ സാധിക്കുന്ന ബുദ്ധി ശക്തി ഏതാണ് ?",
    "options": [
      "വ്യക്ത്യാന്തര ബുദ്ധി",
      "പ്രകൃതിപരമായ ബുദ്ധി",
      "യുക്തിചിന്തപരവും ഗണിതപരവുമായ ബുദ്ധി",
      "ആന്തരീക വൈയക്തിക ബുദ്ധി"
    ],
    "correct": 0
  },
  {
    "q": "പ്രത്യേക പരിഗണന അർഹിക്കുന്ന കുട്ടികൾ (സി.ഡബ്ല്യു.എസ്.എൻ) എന്ന വിഭാഗത്തിൽ വൈകല്യമായി കണക്കിലെടുക്കാത്തത് ഏത് ?",
    "options": [
      "കാഴ്ച വൈകല്യം",
      "കേൾവി വൈകല്യം",
      "വൈകാരിക അസ്വസ്ഥത",
      "ഉയർന്ന അക്കാദമിക മികവ്"
    ],
    "correct": 3
  },
  {
    "q": "ഡബ്ല്യൂ.എ.ഐ.എസ്.(WAIS) എന്തിനുള്ള ഉദാഹരണമാണ് ?",
    "options": [
      "വ്യക്തിത്വ പരീക്ഷ",
      "ബുദ്ധി പരീക്ഷ",
      "അഭിരുചി പരീക്ഷ",
      "മനോഭാവ പരീക്ഷ"
    ],
    "correct": 1
  },
  {
    "q": "കാഴ്ച പരിമിതിയുള്ള കുട്ടികളിൽ സർഗത്മകത വളർത്താനുള്ള ഒരു പ്രധാന തന്ത്രം താഴെപ്പറയുന്നവയിൽ ഏതാണ് ?",
    "options": [
      "വർക്ക് ഷീറ്റുകളെ മാത്രം ആശ്രയിക്കുക",
      "പ്രായോഗിക പര്യവേക്ഷണം നിരുത്സാഹപ്പെടുത്തുക",
      "പ്രവർത്തനങ്ങൾ ശ്രവണ വ്യായാമങ്ങളിൽ മാത്രം പരിമിതപ്പെടുത്തുക",
      "കളിമണ്ണ് പോലുള്ള സ്പർശിക്കുന്ന കലാ വസ്തുക്കൾ ഉപയോഗിക്കുക"
    ],
    "correct": 3
  },
  {
    "q": "'ആത്മനിഷ്ഠ രീതി' എന്നത് ഏത് മനഃശാസ്ത്ര പഠന സമീപനത്തിന്റെ ഭാഗമാണ് ?",
    "options": [
      "വ്യവഹാര മനഃശാസ്ത്രം",
      "ധർമ്മ മനഃശാസ്ത്രം",
      "ഘടന മനഃശാസ്ത്രം",
      "മാനവീക മനഃശാസ്ത്രം"
    ],
    "correct": 2
  },
  {
    "q": "ഭിന്നശേഷിക്കാരുടെ അവകാശ സംരക്ഷണ നിയമം നിലവിൽ വന്നത് എപ്പോൾ ?",
    "options": [
      "16th April, 2016",
      "19th April, 2017",
      "19th April, 2015",
      "16th April, 2015"
    ],
    "correct": 1
  },
  {
    "q": "അബ്രഹാം മാസ്‌ലോയുടെ അഭിപ്രായത്തിൽ ശക്തി നേട്ടം, കഴിവ് എന്നിവ ഒരു വ്യക്തിയുടെ ഏത് ആവശ്യത്തിൽ ഉൾപ്പെട്ടിരിക്കുന്നു ?",
    "options": [
      "جൈവികാവശ്യങ്ങൾ",
      "സുരക്ഷിതത്വ ആവശ്യം",
      "ആദരസംബന്ധമായ ആവശ്യം",
      "സ്നേഹിക്കുക / സ്നേഹിക്കപ്പെടുക എന്ന ആവശ്യം"
    ],
    "correct": 2
  },
  {
    "q": "അനിതയ്ക്ക് ശ്രദ്ധക്കുറവ്/ഹൈപ്പർ ആക്റ്റിവിറ്റി ഡിസോർഡർ ഉള്ളതിനാൽ സാധാരണ ക്ലാസ്റും പ്രവർത്തനങ്ങളിൽ തുടരാൻ ബുദ്ധി മുട്ട് നേരിടുന്നു. താഴെ പറയുന്നവയിൽ ഏത് തന്ത്രമാണ് ആ കുട്ടിക്ക് സാധാരണ ക്ലാസ് റൂം പ്രവർത്തനങ്ങളിൽ പങ്കെടുക്കാൻ സഹായിക്കുക ?",
    "options": [
      "അവൾക്ക് കൂടുതൽ ഗൃഹപാഠം നൽകുക.",
      "ഇത്തരം പെരുമാറ്റ വൈകല്യങ്ങൾ അവഗണിക്കുക.",
      "ADHD യുള്ള മറ്റ് കുട്ടികളോടൊപ്പം അവളെ ഗ്രൂപ്പാക്കുക.",
      "അവളെ അധ്യാപികയുടെ അടുത്ത് ഇരുത്തി ഹൃസ്വവും വ്യക്തവുമായ ജോലികൾ നൽകുക."
    ],
    "correct": 3
  },
  {
    "q": "ഒരു അധ്യാപിക പൂവിൻ്റെ ഘടനയെക്കുറിച്ച് കുട്ടികളെ പഠിപ്പിക്കുവാനായി ആദ്യം പൂവിനെ മുഴുവനും കാണിച്ചശേഷം അതിൻ്റെ ഓരോ ഭാഗങ്ങൾ വിവരിച്ചു നൽകി. ഈ ആശയം താഴെപ്പറയുന്നവയിൽ ഏത് പഠന രീതിയുമായി ബന്ധപ്പെട്ടിരിക്കുന്നു ?",
    "options": [
      "ഗസ്റ്റാൾട്ട് പഠനം",
      "പൗരാണികാനുബന്ധന പഠനം",
      "പ്രവർത്തനാനuബന്ധന പഠനം",
      "നിരീക്ഷണ പഠനം"
    ],
    "correct": 0
  },
  {
    "q": "പഠനത്തെ ഒരു സാമൂഹിക പ്രവർത്തനമായി പ്രോത്സാഹിപ്പിക്കുന്ന ഒരു ക്ലാസ് മുറിയിൽ അധ്യാപകൻ ഇവ ചെയ്യണം:",
    "options": [
      "ഗ്രൂപ്പ് ചർച്ചകളും ടീം വർക്കുകളും പ്രോത്സാഹിപ്പിക്കുക.",
      "വ്യക്തിഗത പരീക്ഷകളിൽ മാത്രം ഊന്നൽ നൽകുക.",
      "സഹപാഠികളുടെ ഇടപെടൽ നിരുത്സാഹപ്പെടുത്തുക",
      "ചോദ്യങ്ങൾ ചോദിക്കാതെ പ്രഭാഷണം മാത്രം നടത്തുക"
    ],
    "correct": 0
  },
  {
    "q": "'സാർവ്വത്രിക വ്യാകരണം' എന്ന ആശയം ആരുടേതാണ് ?",
    "options": [
      "ബ്രൂണെർ",
      "വൈഗോദ്സ്കി",
      "ചോംസ്കി",
      "അസുബൽ"
    ],
    "correct": 2
  },
  {
    "q": "പിയാഷെയുടെ അഭിപ്രായത്തിൽ ബൗദ്ധീക വികാസത്തിൻ്റെ ഏതു ഘട്ടത്തിലാണ് കുട്ടികൾ യഥാർത്ഥ വസ്തുതുക്കൾക്ക് പകരം പ്രതീകങ്ങൾ ഉപയോഗിക്കുന്നത് ?",
    "options": [
      "ഇന്ദ്രിയ ചാലകഘട്ടം",
      "പ്രാഗ് മനോവ്യാപാര ഘട്ടം",
      "മൂർത്ത മനോവ്യാപാര ഘട്ടം",
      "ഔപചാരിക മനോവ്യാപാര ഘട്ടം"
    ],
    "correct": 1
  },
  {
    "q": "താഴെ പറയുന്നവയിൽ ഏതാണ് പഠന വൈകല്യത്തിൻ്റെ ഒരു സാധാരണ ലക്ഷണമല്ലാത്തത് ?",
    "options": [
      "വായിക്കുന്നതിലും എഴുതുന്നതിലുമുള്ള ബുദ്ധിമുട്ട്",
      "ഗണിത ആശയങ്ങൾ മനസിലാക്കുന്നതിലുള്ള ബുദ്ധിമുട്ട്",
      "നടക്കുവാൻ കഴിയാത്തതിൻ്റെ ബുദ്ധിമുട്ട്",
      "നിർദ്ദേശങ്ങൾ പാലിക്കുന്നതിലുള്ള ബുദ്ധിമുട്ട്"
    ],
    "correct": 2
  },
  {
    "q": "“മടിയൻപ്രായം\" എന്നറിയപ്പെടുന്ന കാലഘട്ടം സാധാരണയായി ഏത് പ്രായ വിഭാഗത്തെയാണ് സൂചിപ്പിക്കുന്നത് ?",
    "options": [
      "ആദ്യകാല ബാല്യം",
      "പിൽകാല ബാല്യം",
      "കൗമാരം",
      "ശൈശവം"
    ],
    "correct": 1
  },
  {
    "q": "പാവ്ലോവിന്റെ പുരാണികാനുബന്ധന സിദ്ധാന്തത്തിൽ അനുബന്ധനത്തിനു ശേഷം മണിയൊച്ച എന്തായി പരിണമിക്കുന്നു ?",
    "options": [
      "അനുബന്ധിത പ്രതികരണം",
      "അനുബന്ധിത ചോദകം",
      "നിഷ്ക്രിയ ചോദകം",
      "അനുബന്ധനം ചെയ്യാത്ത ചോദകം"
    ],
    "correct": 1
  },
  {
    "q": "ഭാഷയും ചിന്തയും പരസ്‌പരം ബന്ധപ്പെട്ടിരിക്കുന്നു എന്ന വൈഗോഡ്‌സ്‌കിയുടെ ആശയത്തെ ഏറ്റവും നന്നായി ചിത്രീകരിക്കുന്നത് എന്താണ് ?",
    "options": [
      "ഒരു കുട്ടി അർത്ഥമില്ലാത്ത പദങ്ങളിലൂടെ വാചാലനാകുന്നു",
      "ഒരു മുതിർന്നയാൾ ചിത്രങ്ങളാൽ മാത്രം ചിന്തിക്കുന്നു",
      "ഒരു പസിൽ പരിഹരിക്കുമ്പോൾ കുട്ടി സ്വയം സംസാരിക്കുന്നു",
      "ഒരു കുട്ടി പദാവലി മനഃപാഠമാക്കി പഠിക്കുന്നു"
    ],
    "correct": 2
  },
  {
    "q": "കുട്ടിക്കാലത്തെ വൈകാരിക വികാസത്തെ ഏറ്റവും ശക്തമായി സ്വാധീനിക്കുന്ന ഘടകം ഏതാണ് ?",
    "options": [
      "കാലാവസ്ഥാ സാഹചര്യങ്ങൾ",
      "മാതാപിതാക്കളുടെ ഇടപെടലും പരിചരണവും",
      "ടെലിവിഷൻ പരിപാടികൾ",
      "പോഷകാഹാര സപ്ലിമെന്റുകൾ"
    ],
    "correct": 1
  },
  {
    "q": "താഴെപ്പറയുന്നവയിൽ ഋണപ്രബലത്തിന് ഉദാഹരണമേത് ?",
    "options": [
      "ഗൃഹപാഠം ചെയ്യുന്നതിന് മിഠായി നൽകുക.",
      "മോശം പെരുമാറ്റത്തിന് സമയപരിധി നൽകുക",
      "വൈകിയതിന് അധിക ഗൃഹപാഠം നൽകുക",
      "നല്ല പെരുമാറ്റത്തിന് വീട്ടു ജോലികൾ എടുത്തു കളയുക"
    ],
    "correct": 3
  },
  {
    "q": "തീമാറ്റിക് അപ്പർസെപ്ഷൻ ടെസ്റ്റ് എന്തിനുള്ള ഉദാഹരണമാണ് ?",
    "options": [
      "കേസ് സ്റ്റഡി",
      "സഞ്ചിത രേഖ",
      "പ്രക്ഷേപണ രീതി",
      "ക്രിയാ ഗവേഷണം"
    ],
    "correct": 2
  },
  {
    "q": "താഴെപ്പറയുന്നവയിൽ ഏതാണ് ശിശു കേന്ദ്രീകൃത വിദ്യാഭ്യാസത്തിൻ്റെ സവിശേഷതയല്ലാത്തത് ?",
    "options": [
      "വ്യക്തിഗത പഠന പദ്ധതികൾ",
      "ഒറ്റപ്പെട്ട വസ്തുതകൾ മനപാഠമാക്കൽ",
      "സാമൂഹിക സഹകരണത്തിന് ഊന്നൽ നൽകുക",
      "യഥാർത്ഥ ലോകത്തിലെ പ്രശ്‌നങ്ങളുടെ സംയോജനം"
    ],
    "correct": 1
  },
  {
    "q": "ഗിൽഫോർഡിൻ്റെ 'ബുദ്ധി സിദ്ധാന്ത മാതൃക' (SOI) യിൽ ഓർമ ഉൾപ്പെടുന്നത് ഏതിലാണ് ?",
    "options": [
      "ഉള്ളടക്കം",
      "പ്രവർത്തനം",
      "ഉൽപന്നങ്ങൾ",
      "യൂണിറ്റുകൾ"
    ],
    "correct": 1
  },
  {
    "q": "പഠനത്തിനായുള്ള വിലയിരുത്തലിന് ഉദാഹരണമായ രീതി ഏതാണ് ?",
    "options": [
      "ടേം അവസാനം നടത്തുന്ന സ്റ്റാൻഡേർഡ് പരീക്ഷ",
      "വ്യക്തിഗതമാക്കിയ ഫീഡ്ബാക്കോടു കൂടിയ ആഴ്‌ചതോറുമുള്ള ക്വിസുകൾ",
      "ദേശീയ നേട്ട പരീക്ഷ",
      "അവസാന കോഴ്സ് ഗ്രേഡ്"
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
