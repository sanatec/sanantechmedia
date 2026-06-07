document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
  {
    "q": "പിയാഷെയുടെ വൈജ്ഞാനിക വികാസ സിദ്ധാന്തമനുസരിച്ച്, ഏകദേശം 2 മുതൽ 7 വയസ്സ് വരെയുള്ള പ്രായത്തെ എന്ത് ഘട്ടം എന്ന് വിളിക്കുന്നു ?",
    "options": [
      "ഐന്ദ്രിക-ചാലക ഘട്ടം",
      "പൂർവ്വ-മനോവ്യാപാര ഘട്ടം",
      "മൂർത്ത മനോവ്യാപാര ഘട്ടം",
      "ഔപചാരിക മനോവ്യാപാര ഘട്ടം"
    ],
    "correct": 1
  },
  {
    "q": "'സമീപസ്ഥ വികാസമണ്ഡലം' (ZPD) എന്ന സങ്കൽപ്പം ആവിഷ്കരിച്ചത് ആരാണ് ?",
    "options": [
      "ജീൻ പിയാഷെ",
      "ലെവ് വൈഗോട്സ്കി",
      "ബി.എഫ്. സ്കിന്നർ",
      "ജെറോം ബ്രൂണർ"
    ],
    "correct": 1
  },
  {
    "q": "കോൾബർഗിന്റെ ധാർമ്മിക വികാസ സിദ്ധാന്തത്തിലെ ഏറ്റവും ഉയർന്ന ഘട്ടം ഏതാണ് ?",
    "options": [
      "ശിക്ഷയും അനുസരണയും",
      "വ്യക്ത്യന്തര സമവായം",
      "സാമൂഹിക വ്യവസ്ഥ നിലനിർത്തൽ",
      "സാർവ്വജനീന ധാർമ്മിക തത്വങ്ങൾ"
    ],
    "correct": 3
  },
  {
    "q": "എറിക്സന്റെ മനോസാമൂഹിക വികാസ സിദ്ധാന്തമനുസരിച്ച്, 6 മുതൽ 12 വയസ്സ് വരെയുള്ള പ്രായത്തിലെ പ്രധാന പ്രതിസന്ധി ഏതാണ് ?",
    "options": [
      "വിശ്വാസം vs അവിശ്വാസം",
      "മുൻകൈ vs കുറ്റബോധം",
      "അധ്വാനശേഷി vs അപകർഷത",
      "സ്വത്വം vs റോൾ ആശയക്കുഴപ്പം"
    ],
    "correct": 2
  },
  {
    "q": "ഗാർഡ്നറുടെ ബഹുമുഖ ബുദ്ധി സിദ്ധാന്തമനുസരിച്ച്, 'സ്വയം മനസ്സിലാക്കാനുള്ള കഴിവ്' ഏത് ബുദ്ധിയിൽ പെടുന്നു ?",
    "options": [
      "ഭാഷാപരമായ ബുദ്ധി",
      "വ്യക്തിപരമായ ബുദ്ധി",
      "ആന്തരിക വൈയക്തിക ബുദ്ധി",
      "ദൃശ്യ-സ്ഥലപര ബുദ്ധി"
    ],
    "correct": 2
  },
  {
    "q": "'ആവശ്യങ്ങളുടെ ശ്രേണി' (Hierarchy of Needs) അവതരിപ്പിച്ച മനഃശാസ്ത്രജ്ഞൻ ആര് ?",
    "options": [
      "കാൾ റോജേഴ്സ്",
      "അബ്രഹാം മാസ്ലോ",
      "ആൽബർട്ട് ബണ്ടുറ",
      "ബി.എഫ്. സ്കിന്നർ"
    ],
    "correct": 1
  },
  {
    "q": "പ്രവർത്തനാനുബന്ധന സിദ്ധാന്തം ആവിഷ്കരിച്ചത് ആരാണ് ?",
    "options": [
      "ഇവാൻ പാവ്ലോവ്",
      "ബി.എഫ്. സ്കിന്നർ",
      "വൂൾഫ്ഗാങ് കോഹ്ലർ",
      "ജോൺ ഡ്യൂയി"
    ],
    "correct": 1
  },
  {
    "q": "ഒരു കുട്ടി 'എല്ലാ പക്ഷികളും പറക്കുന്നു' എന്ന് കരുതുന്നു. ഒരു തത്തയെ കാണുമ്പോൾ അതും പറക്കുന്നുവെന്ന് പറയുന്നു. ഇത് പിയാഷെയുടെ സിദ്ധാന്തത്തിലെ ഏത് പ്രക്രിയയ്ക്ക് ഉദാഹരണമാണ് ?",
    "options": [
      "ആത്മകേന്ദ്രീകരണം",
      "ആഗിരണം (Assimilation)",
      "അനുരൂപണം (Accommodation)",
      "സംരക്ഷണം"
    ],
    "correct": 1
  },
  {
    "q": "സാമൂഹിക പഠന സിദ്ധാന്തം മുന്നോട്ടുവെച്ചത് ആരാണ് ?",
    "options": [
      "ജെറോം ബ്രൂണർ",
      "ആൽബർട്ട് ബണ്ടുറ",
      "ജീൻ പിയാഷെ",
      "എൽ.എസ്. വൈഗോട്സ്കി"
    ],
    "correct": 1
  },
  {
    "q": "ഒരു കുട്ടി തന്റെ അമ്മയെ കാണുമ്പോൾ 'അമ്മ' എന്ന് വിളിക്കുന്നു. മറ്റ് സ്ത്രീകളെയും 'അമ്മ' എന്ന് വിളിക്കുന്നു. ഇത് ഏത് പഠന തത്വത്തിന്റെ ഉദാഹരണമാണ് ?",
    "options": [
      "ചോദക വിവേചനം",
      "ചോദക സാമാന്യവൽക്കരണം",
      "വിലോപനം",
      "സ്വതസ്സിദ്ധ പുനരുദ്ധാരണം"
    ],
    "correct": 1
  },
  {
    "q": "താഴെപ്പറയുന്നവയിൽ 'ഡിസ്ഗ്രാഫിയ' എന്ന പഠന വൈകല്യം ഏതുമായി ബന്ധപ്പെട്ടതാണ് ?",
    "options": [
      "വായന",
      "എഴുത്ത്",
      "ഗണിതം",
      "സംസാരം"
    ],
    "correct": 1
  },
  {
    "q": "സംരചനാപരമായ (Formative) മൂല്യനിർണ്ണയത്തിന്റെ പ്രധാന ലക്ഷ്യം എന്താണ് ?",
    "options": [
      "ഗ്രേഡ് നിശ്ചയിക്കുക",
      "പഠന പ്രക്രിയ മെച്ചപ്പെടുത്തുക",
      "വിദ്യാർത്ഥികളെ താരതമ്യം ചെയ്യുക",
      "അന്തിമ ഫലം അളക്കുക"
    ],
    "correct": 1
  },
  {
    "q": "പഠനത്തിൽ 'ഉൾക്കാഴ്ച' (Insight) എന്ന ആശയം മുന്നോട്ടുവെച്ചത് ആരാണ് ?",
    "options": [
      "എൽ.എൽ. തേഴ്സ്റ്റൺ",
      "വൂൾഫ്ഗാങ് കോഹ്ലർ",
      "റോബർട്ട് ഗാഗ്നെ",
      "ഡേവിഡ് ഓസൂബെൽ"
    ],
    "correct": 1
  },
  {
    "q": "'അർത്ഥപൂർണ്ണമായ പഠനം' (Meaningful Learning) എന്ന സിദ്ധാന്തത്തിന്റെ വക്താവ് ആര് ?",
    "options": [
      "ജെറോം ബ്രൂണർ",
      "ഡേവിഡ് ഓസൂബെൽ",
      "ജീൻ പിയാഷെ",
      "ലെവ് വൈഗോട്സ്കി"
    ],
    "correct": 1
  },
  {
    "q": "ശാരീരിക വികാസത്തിൽ 'സെഫാലോകോഡൽ പ്രവണത' എന്താണ് സൂചിപ്പിക്കുന്നത് ?",
    "options": [
      "തല മുതൽ കാൽ വരെയുള്ള വികാസം",
      "ശരീരത്തിന്റെ മധ്യഭാഗത്ത് നിന്ന് പുറത്തേക്കുള്ള വികാസം",
      "കാൽ മുതൽ തല വരെയുള്ള വികാസം",
      "അസമമായ വികാസം"
    ],
    "correct": 0
  },
  {
    "q": "താഴെപ്പറയുന്നവയിൽ 'അഡ്വാൻഡ് ഓർഗനൈസർ' എന്ന തന്ത്രം ഉപയോഗിക്കുന്നത് ആരാണ് ?",
    "options": [
      "ജെറോം ബ്രൂണർ",
      "ഡേവിഡ് ഓസൂബെൽ",
      "റോബർട്ട് ഗാഗ്നെ",
      "ബെഞ്ചമിൻ ബ്ലൂം"
    ],
    "correct": 1
  },
  {
    "q": "പഠനത്തെ 'ശാശ്വതമായ പെരുമാറ്റമാറ്റം' എന്ന് നിർവചിച്ചത് ആരാണ് ?",
    "options": [
      "പിയാഷെ",
      "സ്കിന്നർ",
      "ബണ്ടുറ",
      "വൈഗോട്സ്കി"
    ],
    "correct": 1
  },
  {
    "q": "ഒരു വിദ്യാർത്ഥി പുതിയ പ്രശ്നം പരിഹരിക്കാൻ മുൻ അറിവ് ഉപയോഗിക്കുന്നു. ഇത് ഏത് തരത്തിലുള്ള പഠന സംക്രമണമാണ് ?",
    "options": [
      "നിഷേധാത്മക സംക്രമണം",
      "പൂജ്യ സംക്രമണം",
      "നിഷ്പക്ഷ സംക്രമണം",
      "അനുകൂല സംക്രമണം"
    ],
    "correct": 3
  },
  {
    "q": "ഗാഗ്നെയുടെ പഠന തലങ്ങളിൽ ഏറ്റവും സങ്കീർണ്ണമായത് ഏതാണ് ?",
    "options": [
      "ചോദക പ്രതികരണം",
      "ശൃംഖലാബന്ധനം",
      "സങ്കൽപ്പ പഠനം",
      "പ്രശ്നപരിഹാര പഠനം"
    ],
    "correct": 3
  },
  {
    "q": "'ഭാഷാ വികസനത്തിന് ജന്മസിദ്ധമായ ഒരു സംവിധാനമുണ്ട്' (LAD) എന്ന് വാദിച്ചത് ആര് ?",
    "options": [
      "ബി.എഫ്. സ്കിന്നർ",
      "നോം ചോംസ്കി",
      "ലെവ് വൈഗോട്സ്കി",
      "ജീൻ പിയാഷെ"
    ],
    "correct": 1
  },
  {
    "q": "ഒരു കുട്ടി തന്റെ കളിപ്പാട്ടം മറ്റൊരു കുട്ടിക്ക് നൽകിയില്ലെങ്കിൽ, അമ്മ അത് എടുത്തുകളയുന്നു. ഇത് ഏത് തരം പ്രബലനമാണ് ?",
    "options": [
      "അനുകൂല പ്രബലനം",
      "പ്രതികൂല പ്രബലനം",
      "ദണ്ഡനം",
      "വിലോപനം"
    ],
    "correct": 2
  },
  {
    "q": "'ഫലത്തിന്റെ നിയമം' (Law of Effect) ആരുടെ സിദ്ധാന്തവുമായി ബന്ധപ്പെട്ടതാണ് ?",
    "options": [
      "തോൺഡൈക്ക്",
      "പാവ്ലോവ്",
      "സ്കിന്നർ",
      "കോഹ്ലർ"
    ],
    "correct": 0
  },
  {
    "q": "ഡിസ്കാൽക്കുലിയ എന്ന പഠന വൈകല്യം ഏത് മേഖലയെ ബാധിക്കുന്നു ?",
    "options": [
      "വായന",
      "എഴുത്ത്",
      "ഗണിത കഴിവുകൾ",
      "സംസാരം"
    ],
    "correct": 2
  },
  {
    "q": "കുട്ടികളുടെ സർഗ്ഗാത്മകത വികസിപ്പിക്കുന്നതിന് ഏറ്റവും പ്രധാനപ്പെട്ട മാർഗ്ഗം ഏതാണ് ?",
    "options": [
      "കർക്കശമായ നിയമങ്ങൾ",
      "തുറന്ന ചോദ്യങ്ങളും പര്യവേക്ഷണവും",
      "മനഃപാഠമാക്കൽ",
      "മത്സരാധിഷ്ഠിത പഠനം"
    ],
    "correct": 1
  },
  {
    "q": "താഴെപ്പറയുന്നവയിൽ 'ഉപാഖ്യാന രേഖ' (Anecdotal Record) എന്തിനായി ഉപയോഗിക്കുന്നു ?",
    "options": [
      "ബുദ്ധി അളക്കാൻ",
      "വ്യക്തിത്വം വിലയിരുത്താൻ",
      "പഠന വൈകല്യം കണ്ടെത്താൻ",
      "അക്കാദമിക നേട്ടം അളക്കാൻ"
    ],
    "correct": 1
  },
  {
    "q": "ബ്ലൂമിന്റെ വർഗ്ഗീകരണത്തിൽ 'മൂല്യനിർണ്ണയം' ഏത് തലത്തിലാണ് വരുന്നത് ?",
    "options": [
      "ജ്ഞാനത്തിന്റെ ഏറ്റവും താഴ്ന്ന തലം",
      "ജ്ഞാനത്തിന്റെ ഇടത്തരം തലം",
      "ജ്ഞാനത്തിന്റെ ഉയർന്ന തലം",
      "ഇതൊന്നുമല്ല"
    ],
    "correct": 2
  },
  {
    "q": "ഒരു വിദ്യാർത്ഥി പരീക്ഷയിൽ മോശമായി പഠിച്ചിട്ടും 'പരീക്ഷ ചോദ്യങ്ങൾ വളരെ ബുദ്ധിമുട്ടായിരുന്നു' എന്ന് ന്യായീകരിക്കുന്നു. ഇത് ഏത് പ്രതിരോധ തന്ത്രമാണ് ?",
    "options": [
      "യുക്തീകരണം",
      "പ്രക്ഷേപണം",
      "ദമനം",
      "ഉദാത്തീകരണം"
    ],
    "correct": 0
  },
  {
    "q": "കൗമാരക്കാർ സ്വത്വം തേടുന്ന പ്രതിസന്ധി ഘട്ടത്തെ എറിക്സൺ എന്താണ് വിളിക്കുന്നത് ?",
    "options": [
      "Industry vs Inferiority",
      "Identity vs Role Confusion",
      "Intimacy vs Isolation",
      "Generativity vs Stagnation"
    ],
    "correct": 1
  },
  {
    "q": "പിയാഷെയുടെ 'മൂർത്ത മനോവ്യാപാര ഘട്ടം' (Concrete Operational Stage) ഏത് പ്രായത്തിലാണ് ?",
    "options": [
      "0-2 വയസ്സ്",
      "2-7 വയസ്സ്",
      "7-11 വയസ്സ്",
      "11 വയസ്സിനു മുകളിൽ"
    ],
    "correct": 2
  },
  {
    "q": "താഴെപ്പറയുന്നവയിൽ 'പോർട്ട്ഫോളിയോ' മൂല്യനിർണ്ണയത്തിന്റെ പ്രത്യേകത ഏതാണ് ?",
    "options": [
      "ഏകദിന പരീക്ഷ",
      "തുടർച്ചയായ രേഖകളുടെ ശേഖരം",
      "നിലവാര പരീക്ഷ",
      "മറ്റുള്ളവരുമായുള്ള താരതമ്യം"
    ],
    "correct": 1
  },
  {
    "q": "'ടീച്ചർ കേന്ദ്രീകൃത ബോധനം' എന്നതിന്റെ വിപരീതമായ സമീപനം ഏതാണ് ?",
    "options": [
      "കുട്ടി കേന്ദ്രീകൃത വിദ്യാഭ്യാസം",
      "പാഠപുസ്തക കേന്ദ്രീകൃതം",
      "പരീക്ഷ കേന്ദ്രീകൃതം",
      "ഭരണ കേന്ദ്രീകൃതം"
    ],
    "correct": 0
  },
  {
    "q": "ഭിന്നശേഷിക്കുട്ടികൾക്ക് പൊതു വിദ്യാലയങ്ങളിൽ പഠിക്കാനുള്ള അവകാശം ഉറപ്പാക്കുന്ന നിയമം ഏതാണ് ?",
    "options": [
      "RTE ആക്ട് 2009",
      "PWD ആക്ട് 1995",
      "RCI ആക്ട് 1992",
      "മാനസികാരോഗ്യ നിയമം"
    ],
    "correct": 0
  },
  {
    "q": "ഒരു വിദ്യാർത്ഥി 'തെറ്റുകൾ വരുത്താൻ പേടിക്കുന്നു' എങ്കിൽ, അധ്യാപകൻ എന്ത് ചെയ്യണം ?",
    "options": [
      "കഠിനമായി ശിക്ഷിക്കുക",
      "തെറ്റുകൾ പഠനത്തിന്റെ ഭാഗമാണെന്ന് പറഞ്ഞു ധൈര്യപ്പെടുത്തുക",
      "തെറ്റുകൾ ഒഴിവാക്കാൻ പറയുക",
      "തെറ്റുകൾക്ക് കുറച്ച് മാർക്ക് നൽകുക"
    ],
    "correct": 1
  },
  {
    "q": "'പഠനം എന്നത് സാമൂഹിക മാധ്യസ്ഥ്യത്തിലൂടെയാണ് സംഭവിക്കുന്നത്' എന്ന വാദഗതിയുമായി ബന്ധപ്പെട്ട ശാസ്ത്രജ്ഞൻ ആര് ?",
    "options": [
      "പിയാഷെ",
      "വൈഗോട്സ്കി",
      "ഡ്യൂയി",
      "മോണ്ടിസോറി"
    ],
    "correct": 1
  },
  {
    "q": "താഴെപ്പറയുന്നവയിൽ 'റിട്രോ ആക്റ്റീവ് ഇൻഹിബിഷൻ' എന്നാൽ എന്താണ് ?",
    "options": [
      "പഴയ വിവരങ്ങൾ പുതിയവ ഓർമ്മിക്കുന്നതിനെ തടസ്സപ്പെടുത്തുക",
      "പുതിയ വിവരങ്ങൾ പഴയവ ഓർമ്മിക്കുന്നതിനെ തടസ്സപ്പെടുത്തുക",
      "വിവരങ്ങൾ ശേഖരിക്കാനുള്ള കഴിവില്ലായ്മ",
      "താൽക്കാലിക മറവി"
    ],
    "correct": 1
  },
  {
    "q": "മാസ്ലോയുടെ ആവശ്യശ്രേണിയിൽ 'സ്നേഹം, സ്വീകാര്യത' എന്നിവ ഏത് തലത്തിലാണ് ?",
    "options": [
      "ശാരീരിക ആവശ്യങ്ങൾ",
      "സുരക്ഷിതത്വ ആവശ്യങ്ങൾ",
      "സ്വന്തമെന്ന തോന്നൽ / സ്നേഹം",
      "ആത്മാഭിമാനം"
    ],
    "correct": 2
  },
  {
    "q": "പ്രശ്നപരിഹാരത്തിന്റെ ആദ്യപടി ഏതാണ് ?",
    "options": [
      "പ്രശ്നം തിരിച്ചറിയുക",
      "പരിഹാരങ്ങൾ കണ്ടെത്തുക",
      "പരിഹാരം നടപ്പിലാക്കുക",
      "പരിഹാരങ്ങൾ വിലയിരുത്തുക"
    ],
    "correct": 0
  },
  {
    "q": "'കുട്ടികൾ സജീവ പഠിതാക്കളാണ്, സ്വന്തം അറിവ് നിർമ്മിക്കുന്നു' എന്ന വാദം ഏത് പഠന സിദ്ധാന്തവുമായി യോജിക്കുന്നു ?",
    "options": [
      "പെരുമാറ്റവാദം",
      "ജ്ഞാന നിർമ്മിതിവാദം (Constructivism)",
      "മാനവികവാദം",
      "അനുബന്ധനവാദം"
    ],
    "correct": 1
  },
  {
    "q": "ഒരു കുട്ടി 'എല്ലാ ആൺകുട്ടികളും ധീരരാണ്' എന്ന് വിശ്വസിക്കുന്നു. ഇത് ഏത് തരത്തിലുള്ള പക്ഷപാതത്തെ സൂചിപ്പിക്കുന്നു ?",
    "options": [
      "ലിംഗ സ്റ്റീരിയോടൈപ്പ്",
      "വർഗ്ഗീയത",
      "പ്രായ വിവേചനം",
      "ഭൗതികത"
    ],
    "correct": 0
  },
  {
    "q": "താഴെപ്പറയുന്നവയിൽ 'ഇൻക്ലൂസീവ് വിദ്യാഭ്യാസം' എന്നാൽ എന്താണ് ?",
    "options": [
      "പ്രതിഭാശാലികൾക്ക് മാത്രമുള്ള വിദ്യാഭ്യാസം",
      "എല്ലാ കുട്ടികൾക്കും ഒരുമിച്ചുള്ള വിദ്യാഭ്യാസം",
      "ഭിന്നശേഷിക്കുട്ടികൾക്ക് പ്രത്യേക വിദ്യാലയം",
      "പെൺകുട്ടികൾക്ക് മാത്രമുള്ള വിദ്യാഭ്യാസം"
    ],
    "correct": 1
  },
  {
    "q": "'സ്വയം പ്രതിഫലനം' (Self-reflection) പഠനത്തിന്റെ ഏത് ഘട്ടത്തിലാണ് പ്രധാനം ?",
    "options": [
      "ആസൂത്രണം",
      "നടപ്പാക്കൽ",
      "മൂല്യനിർണ്ണയം",
      "പഠനത്തിന് മുമ്പ്"
    ],
    "correct": 2
  },
  {
    "q": "ഒരു കുട്ടി 'പുതിയ ആശയം പഠിക്കുമ്പോൾ പഴയ ആശയവുമായി ബന്ധിപ്പിക്കുന്നു'. ഇത് ഏത് പഠന തന്ത്രത്തിന്റെ ഉദാഹരണമാണ് ?",
    "options": [
      "മനഃപാഠമാക്കൽ",
      "അനുബന്ധനം",
      "പ്രാക്ടീസ്",
      "അർത്ഥവത്തായ ബന്ധനം"
    ],
    "correct": 3
  },
  {
    "q": "കുട്ടികളിൽ 'വായനാ വൈകല്യം' (Dyslexia) എങ്ങനെ തിരിച്ചറിയാം ?",
    "options": [
      "എഴുത്തിൽ അക്ഷരങ്ങൾ മാറുന്നു",
      "വായിക്കുമ്പോൾ അക്ഷരങ്ങൾ കുഴയുന്നു, വായനാ വേഗത കുറവാണ്",
      "ഗണിത ചിഹ്നങ്ങൾ മനസ്സിലാകുന്നില്ല",
      "സംസാരത്തിൽ പ്രയാസം"
    ],
    "correct": 1
  },
  {
    "q": "ഒരു വിദ്യാർത്ഥി ഗ്രൂപ്പ് ചർച്ചയിലൂടെ പഠിക്കുന്നത് ഏത് തരം പഠനത്തിന് ഉദാഹരണമാണ് ?",
    "options": [
      "സ്വതന്ത്ര പഠനം",
      "സഹകരണ പഠനം",
      "മത്സര പഠനം",
      "വ്യക്തിഗത പഠനം"
    ],
    "correct": 1
  },
  {
    "q": "താഴെപ്പറയുന്നവയിൽ 'സ്വാഭാവിക പ്രതിഫലം' എന്നതിന്റെ ഉദാഹരണം ഏതാണ് ?",
    "options": [
      "ടോഫി നൽകുക",
      "അഭിനന്ദനം പറയുക",
      "പ്രശ്നം പരിഹരിച്ചതിന്റെ സന്തോഷം",
      "ഗ്രേഡ് നൽകുക"
    ],
    "correct": 2
  },
  {
    "q": "'സംരക്ഷണം' (Conservation) എന്ന സങ്കൽപ്പം കുട്ടികൾ മനസ്സിലാക്കാൻ തുടങ്ങുന്നത് ഏത് ഘട്ടത്തിലാണ് ?",
    "options": [
      "ഐന്ദ്രിക-ചാലകം",
      "പൂർവ്വ-മനോവ്യാപാരം",
      "മൂർത്ത മനോവ്യാപാരം",
      "ഔപചാരിക മനോവ്യാപാരം"
    ],
    "correct": 2
  },
  {
    "q": "ഗാർഡ്നറുടെ ബഹുമുഖ ബുദ്ധി സിദ്ധാന്തമനുസരിച്ച്, 'ചലനങ്ങളെ നിയന്ത്രിക്കാനുള്ള കഴിവ്' ഏത് ബുദ്ധിയിൽ പെടുന്നു ?",
    "options": [
      "ഭാഷാപരമായ ബുദ്ധി",
      "ശാരീരിക-ചലനപര ബുദ്ധി",
      "ദൃശ്യ-സ്ഥലപര ബുദ്ധി",
      "സംഗീതപരമായ ബുദ്ധി"
    ],
    "correct": 1
  },
  {
    "q": "ക്ലാസ് മുറിയിൽ അധ്യാപകൻ 'ചോദ്യങ്ങൾ ചോദിക്കാൻ' പ്രോത്സാഹിപ്പിക്കുന്നത് എന്തിന് സഹായിക്കും ?",
    "options": [
      "അനുസരണം വർദ്ധിപ്പിക്കാൻ",
      "ജിജ്ഞാസയും വിമർശന ചിന്തയും വികസിപ്പിക്കാൻ",
      "ശബ്ദം കുറയ്ക്കാൻ",
      "പാഠപുസ്തകം മനഃപാഠമാക്കാൻ"
    ],
    "correct": 1
  },
  {
    "q": "താഴെപ്പറയുന്നവയിൽ 'മൂല്യനിർണ്ണയത്തിന്റെ ചാക്രിക മാതൃക' ഏതാണ് ?",
    "options": [
      "പഠനത്തിന്റെ വിലയിരുത്തൽ → പഠനത്തിനുള്ള വിലയിരുത്തൽ → പഠനമായുള്ള വിലയിരുത്തൽ",
      "രൂപീകരണ → ചിട്ടപ്പെടുത്തൽ → ലക്ഷ്യം",
      "ആസൂത്രണം → നടപ്പാക്കൽ → പരിശോധന",
      "സാമാന്യം → ആഴം → പ്രയോഗം"
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
