document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "നിങ്ങൾ GPL ലൈസൻസിന് കീഴിൽ പുറത്തിറക്കിയ ഒരു സോഫ്റ്റ്‌വെയർ ഡൗൺലോഡ് ചെയ്തു. നിങ്ങൾ അതിലെ ചില ബഗ്ഗുകൾ പരിഹരിക്കുകയും ഇൻ്റർഫേസ് മെച്ചപ്പെടുത്തുകയും ചെയ്തു. നിങ്ങളുടെ പതിപ്പ് പങ്കിടുന്നതിന് മുമ്പ് നിങ്ങൾ എന്തുചെയ്യണം?",
    "options": [
      { "text": "മാറ്റങ്ങൾ സ്വകാര്യമായി സൂക്ഷിക്കുക", "isCorrect": false },
      { "text": "കോഡ് പങ്കുവെക്കാതെ വിൽക്കുക", "isCorrect": false },
      { "text": "പരിഷ്കരിച്ച സോഴ്സ് അതേ GPL ലൈസൻസിന് കീഴിൽ പ്രസിദ്ധീകരിക്കുക", "isCorrect": true },
      { "text": "ഒരു പുതിയ പേറ്റൻ്റിനായി അപേക്ഷിക്കുക", "isCorrect": false }
    ],
    "correctAnswer": "പരിഷ്കരിച്ച സോഴ്സ് അതേ GPL ലൈസൻസിന് കീഴിൽ പ്രസിദ്ധീകരിക്കുക"
  },
  {
    "question": "നിങ്ങളുടെ സ്കൂളിന് പൈത്തണിൽ എഴുതിയ ഒരു കാൽക്കുലേറ്റർ ആപ്പ് ഇഷ്ടാനുസൃതമാക്കണം. പ്രോഗ്രാം ഒബ്ജക്റ്റ് കോഡ് (.pyc) ആയി മാത്രമേ ലഭ്യമാകൂ. നിങ്ങൾ എന്ത് ആവശ്യപ്പെടണം?",
    "options": [
      { "text": "ലൈസൻസ് കീ", "isCorrect": false },
      { "text": "സോഴ്സ് കോഡ്", "isCorrect": true },
      { "text": "പൈത്തൺ 2 ഇൻ്റർപ്രെറ്റർ", "isCorrect": false },
      { "text": "ഫ്രീവെയർ പതിപ്പ്", "isCorrect": false }
    ],
    "correctAnswer": "സോഴ്സ് കോഡ്"
  },
  {
    "question": "ഒരു കമ്പനി ലിനക്സ് കേർണൽ ഉപയോഗിച്ച് ഒരു സോഫ്റ്റ്‌വെയർ നിർമ്മിക്കുകയും അത് സൗജന്യമായി വിതരണം ചെയ്യുകയും ചെയ്യുന്നു. ഏത് തരം ലൈസൻസ് ആയിരിക്കും ഇതിന് ഏറ്റവും സാധ്യത?",
    "options": [
      { "text": "പ്രൊപ്രൈറ്ററി (Proprietary)", "isCorrect": false },
      { "text": "ഓപ്പൺ സോഴ്സ് (Open-source)", "isCorrect": true },
      { "text": "ട്രയൽവെയർ (Trialware)", "isCorrect": false },
      { "text": "ഫ്രീവെയർ (Freeware)", "isCorrect": false }
    ],
    "correctAnswer": "ഓപ്പൺ സോഴ്സ് (Open-source)"
  },
  {
    "question": "ഒരു പ്രോഗ്രാം ആന്തരികമായി എങ്ങനെ പ്രവർത്തിക്കുന്നു എന്ന് വിദ്യാർത്ഥികൾക്ക് കാണിച്ചുകൊടുക്കാൻ ഒരു അധ്യാപിക ആഗ്രഹിക്കുന്നുവെങ്കിൽ, ഏത് തരം സോഫ്റ്റ്‌വെയറാണ് ഏറ്റവും അനുയോജ്യം?",
    "options": [
      { "text": "ഫ്രീവെയർ", "isCorrect": false },
      { "text": "ഓപ്പൺ സോഴ്സ് സോഫ്റ്റ്‌വെയർ", "isCorrect": true },
      { "text": "EULA അടിസ്ഥാനമാക്കിയുള്ള സോഫ്റ്റ്‌വെയർ", "isCorrect": false },
      { "text": "ട്രയൽവെയർ", "isCorrect": false }
    ],
    "correctAnswer": "ഓപ്പൺ സോഴ്സ് സോഫ്റ്റ്‌വെയർ"
  },
  {
    "question": "നിങ്ങൾ ഒരു മൊബൈൽ ആപ്പ് വികസിപ്പിക്കുകയും സഹകരണത്തിനായി സോഴ്സ് പ്രസിദ്ധീകരിക്കാൻ പദ്ധതിയിടുകയും ചെയ്യുന്നു. ഏത് പ്ലാറ്റ്‌ഫോമാണ് ഇതിന് ഏറ്റവും മികച്ച പിന്തുണ നൽകുക?",
    "options": [
      { "text": "പ്ലേ സ്റ്റോർ", "isCorrect": false },
      { "text": "ഐട്യൂൺസ്", "isCorrect": false },
      { "text": "ഗിറ്റ്‌ഹബ് (GitHub)", "isCorrect": true },
      { "text": "ഡ്രോപ്പ്ബോക്സ്", "isCorrect": false }
    ],
    "correctAnswer": "ഗിറ്റ്‌ഹബ് (GitHub)"
  },
  {
    "question": "Git ഉപയോഗിക്കുന്ന ഒരു ടീം ഏറ്റവും പുതിയ പതിപ്പിൽ അബദ്ധവശാൽ ഒരു ബഗ്ഗ് ഉൾപ്പെടുത്തി. മുമ്പത്തെ പ്രവർത്തിക്കുന്ന പതിപ്പ് വീണ്ടെടുക്കാൻ സഹായിക്കുന്ന സവിശേഷത ഏതാണ്?",
    "options": [
      { "text": "പതിപ്പ് റോൾബാക്ക് (Version rollback)", "isCorrect": true },
      { "text": "കോഡ് എൻക്രിപ്ഷൻ", "isCorrect": false },
      { "text": "സോഴ്സ് പാച്ചിംഗ്", "isCorrect": false },
      { "text": "ലൈസൻസ് പുതുക്കൽ", "isCorrect": false }
    ],
    "correctAnswer": "പതിപ്പ് റോൾബാക്ക് (Version rollback)"
  },
  {
    "question": "നിങ്ങളുടെ സ്വന്തം ഇൻ്റർഫേസ് ഉപയോഗിച്ച് GNU/Linux കോഡ് ഉപയോഗിച്ച് ഒരു പുതിയ OS നിർമ്മിക്കാൻ നിങ്ങൾ ആഗ്രഹിക്കുന്നു. നിങ്ങൾ ചെയ്യുന്ന പ്രക്രിയ എന്താണ്?",
    "options": [
      { "text": "ഫോർക്കിംഗ് (Forking)", "isCorrect": true },
      { "text": "ഡിബഗ്ഗിംഗ്", "isCorrect": false },
      { "text": "വെർഷനിംഗ്", "isCorrect": false },
      { "text": "പബ്ലിഷിംഗ്", "isCorrect": false }
    ],
    "correctAnswer": "ഫോർക്കിംഗ് (Forking)"
  },
  {
    "question": "Apache ലൈസൻസിന് കീഴിൽ ഡൗൺലോഡ് ചെയ്ത ഒരു പൈത്തൺ ആപ്പിൻ്റെ തീമും നിറവും ഒരു വിദ്യാർത്ഥി മാറ്റുന്നു. അവർക്ക് അത് പുതിയ പേരിൽ പ്രസിദ്ധീകരിക്കാൻ കഴിയുമോ?",
    "options": [
      { "text": "ഇല്ല, അനുവദനീയമല്ല", "isCorrect": false },
      { "text": "അതെ, ലൈസൻസ് വ്യവസ്ഥകൾ പാലിക്കുകയാണെങ്കിൽ", "isCorrect": true },
      { "text": "GPL അനുമതിയോടെ മാത്രം", "isCorrect": false },
      { "text": "അതൊരു ഫ്രീവെയർ ആണെങ്കിൽ മാത്രം", "isCorrect": false }
    ],
    "correctAnswer": "അതെ, ലൈസൻസ് വ്യവസ്ഥകൾ പാലിക്കുകയാണെങ്കിൽ"
  },
  {
    "question": "എന്തുകൊണ്ടാണ് സ്ഥാപനങ്ങൾ LibreOffice പോലുള്ള FLOSS (ഫ്ലോസ്) സോഫ്റ്റ്‌വെയറിന് മുൻഗണന നൽകുന്നത്?",
    "options": [
      { "text": "ഉപയോഗിക്കാൻ ഇൻ്റർനെറ്റ് ആവശ്യമാണ്", "isCorrect": false },
      { "text": "ചെലവേറിയതും എന്നാൽ സുരക്ഷിതവുമാണ്", "isCorrect": false },
      { "text": "പരിഷ്കരിക്കാനും സൗജന്യമായി വിതരണം ചെയ്യാനും കഴിയും", "isCorrect": true },
      { "text": "ഇഷ്ടാനുസൃതമാക്കാൻ കഴിയില്ല", "isCorrect": false }
    ],
    "correctAnswer": "പരിഷ്കരിക്കാനും സൗജന്യമായി വിതരണം ചെയ്യാനും കഴിയും"
  },
  {
    "question": "നിലവിലുള്ള GPL സോഫ്റ്റ്‌വെയർ ഉപയോഗിച്ച് ഒരു NGO പുതിയ വിദ്യാഭ്യാസ പ്ലാറ്റ്‌ഫോം നിർമ്മിക്കുന്നു. അവർ ഏത് വ്യവസ്ഥയാണ് പാലിക്കേണ്ടത്?",
    "options": [
      { "text": "അവരുടെ സോഴ്സ് കോഡ് അതേ ലൈസൻസിന് കീഴിൽ പങ്കിടുക", "isCorrect": true },
      { "text": "അവരുടെ കോഡ് സ്വകാര്യമായി സൂക്ഷിക്കുക", "isCorrect": false },
      { "text": "ഒരു വാണിജ്യ ലൈസൻസ് വാങ്ങുക", "isCorrect": false },
      { "text": "സോഴ്സ് എൻക്രിപ്റ്റ് ചെയ്യുക", "isCorrect": false }
    ],
    "correctAnswer": "അവരുടെ സോഴ്സ് കോഡ് അതേ ലൈസൻസിന് കീഴിൽ പങ്കിടുക"
  },
  {
    "question": "തങ്ങളുടെ സോഫ്റ്റ്‌വെയർ ഉപയോക്താക്കൾക്ക് പകർത്താൻ കഴിയില്ലെന്ന് ഒരു കമ്പനി ഉറപ്പാക്കാൻ ആഗ്രഹിക്കുന്നു. അവർ ഏത് ലൈസൻസ് തിരഞ്ഞെടുക്കണം?",
    "options": [
      { "text": "EULA", "isCorrect": true },
      { "text": "GPL", "isCorrect": false },
      { "text": "Apache", "isCorrect": false },
      { "text": "BSD", "isCorrect": false }
    ],
    "correctAnswer": "EULA"
  },
  {
    "question": "എന്തുകൊണ്ടാണ് ഒരു സർക്കാർ സ്കൂളുകൾക്കായി Arduino പോലുള്ള ഓപ്പൺ ഹാർഡ്‌വെയറിന് മുൻഗണന നൽകുന്നത്?",
    "options": [
      { "text": "ഡിസൈനുകൾ തുറന്നതും താങ്ങാനാവുന്നതുമാണ്", "isCorrect": true },
      { "text": "ഇതൊരു വാണിജ്യ ബ്രാൻഡാണ്", "isCorrect": false },
      { "text": "ഇതിന് സോഫ്റ്റ്‌വെയർ ആവശ്യമില്ല", "isCorrect": false },
      { "text": "ഇത് പകർത്താൻ കഴിയില്ല", "isCorrect": false }
    ],
    "correctAnswer": "ഡിസൈനുകൾ തുറന്നതും താങ്ങാനാവുന്നതുമാണ്"
  },
  {
    "question": "ഒരു ഡെവലപ്പർ സൗജന്യ സോഫ്റ്റ്‌വെയർ ഉപയോഗിച്ച് പണം നൽകേണ്ട ഒരു സേവനം സൃഷ്ടിക്കുന്നു. ഇത് സാധ്യമാണോ?",
    "options": [
      { "text": "ഇല്ല", "isCorrect": false },
      { "text": "അതെ, ലൈസൻസ് വ്യവസ്ഥകൾ മാനിക്കപ്പെടുന്നുവെങ്കിൽ", "isCorrect": true },
      { "text": "EULA-ന് കീഴിൽ മാത്രം", "isCorrect": false },
      { "text": "30 ദിവസത്തേക്ക് മാത്രം", "isCorrect": false }
    ],
    "correctAnswer": "അതെ, ലൈസൻസ് വ്യവസ്ഥകൾ മാനിക്കപ്പെടുന്നുവെങ്കിൽ"
  },
  {
    "question": "ഒരു വിദ്യാർത്ഥി Git-ൽ അടുത്തിടെ വരുത്തിയ തിരുത്തലുകൾ അബദ്ധവശാൽ ഇല്ലാതാക്കി. അത് വീണ്ടെടുക്കാൻ സഹായിക്കുന്ന കമാൻഡ് ഏതാണ്?",
    "options": [
      { "text": "git push", "isCorrect": false },
      { "text": "git clear", "isCorrect": false },
      { "text": "git revert", "isCorrect": true },
      { "text": "git erase", "isCorrect": false }
    ],
    "correctAnswer": "git revert"
  },
  {
    "question": "സോഫ്റ്റ്‌വെയർ വികസനത്തിൽ സോഴ്സ് കോഡ് പ്രസിദ്ധീകരിക്കുന്നത് എందుకు ധാർമ്മികമായി കണക്കാക്കുന്നു?",
    "options": [
      { "text": "സുതാര്യതയും പഠനവും പ്രോത്സാഹിപ്പിക്കുന്നു", "isCorrect": true },
      { "text": "കോഡ് പകർത്തുന്നത് ബുദ്ധിമുട്ടാക്കുന്നു", "isCorrect": false },
      { "text": "കമ്പനികളെ ബഗ്ഗുകൾ മറയ്ക്കാൻ സഹായിക്കുന്നു", "isCorrect": false },
      { "text": "കുത്തകകളെ സംരക്ഷിക്കുന്നു", "isCorrect": false }
    ],
    "correctAnswer": "സുതാര്യതയും പഠനവും പ്രോത്സാഹിപ്പിക്കുന്നു"
  },
  {
    "question": "ഒരു ഡെവലപ്പർ Apache, GPL ലൈസൻസുള്ള സോഫ്റ്റ്‌വെയർ എന്നിവ ഒരൊറ്റ പാക്കേജിൽ സംയോജിപ്പിക്കാൻ ആഗ്രഹിക്കുന്നു. ഏത് പ്രസ്താവനയാണ് ശരി?",
    "options": [
      { "text": "Apache ലൈസൻസ് വ്യവസ്ഥകൾ മാനിക്കപ്പെടുന്നുവെങ്കിൽ ഇത് സാധ്യമാണ്", "isCorrect": true },
      { "text": "ഇത് പകർപ്പവകാശം ലംഘിക്കുന്നു", "isCorrect": false },
      { "text": "ഫ്രീവെയറിന് മാത്രം ഇത് അനുവദനീയമാണ്", "isCorrect": false },
      { "text": "സർക്കാർ അംഗീകാരം ആവശ്യമാണ്", "isCorrect": false }
    ],
    "correctAnswer": "Apache ലൈസൻസ് വ്യവസ്ഥകൾ മാനിക്കപ്പെടുന്നുവെങ്കിൽ ഇത് സാധ്യമാണ്"
  },
  {
    "question": "നിങ്ങൾ ഓപ്പൺ സോഴ്സ് സോഫ്റ്റ്‌വെയർ പരിഷ്കരിക്കുകയും എന്നാൽ യഥാർത്ഥ ലൈസൻസ് പരാമർശിക്കാതിരിക്കുകയും ചെയ്താൽ, എന്ത് ധാർമ്മിക പ്രശ്നമാണ് ഉണ്ടാകുന്നത്?",
    "options": [
      { "text": "പതിപ്പ് പൊരുത്തക്കേട് (Version mismatch)", "isCorrect": false },
      { "text": "കടപ്പാടിൻ്റെയും ഓപ്പൺ സോഴ്സ് മാനദണ്ഡങ്ങളുടെയും ലംഘനം", "isCorrect": true },
      { "text": "സോഫ്റ്റ്‌വെയർ ക്രാഷ്", "isCorrect": false },
      { "text": "പേറ്റൻ്റ് ക്ലെയിം", "isCorrect": false }
    ],
    "correctAnswer": "കടപ്പാടിൻ്റെയും ഓപ്പൺ സോഴ്സ് മാനദണ്ഡങ്ങളുടെയും ലംഘനം"
  },
  {
    "question": "ഒരു പിസിയിൽ നന്നായി പ്രവർത്തിക്കുന്ന ഒരു ആപ്പ് മറ്റൊരു പിസിയിൽ പുതിയ ലൈസൻസ് ആവശ്യപ്പെടുന്നു. ഇത് ഏത് തരം സോഫ്റ്റ്‌വെയറാണ്?",
    "options": [
      { "text": "പ്രൊപ്രൈറ്ററി സോഫ്റ്റ്‌വെയർ (Proprietary software)", "isCorrect": true },
      { "text": "ഫ്രീവെയർ", "isCorrect": false },
      { "text": "FLOSS", "isCorrect": false },
      { "text": "ഷെയർവെയർ", "isCorrect": false }
    ],
    "correctAnswer": "പ്രൊപ്രൈറ്ററി സോഫ്റ്റ്‌വെയർ (Proprietary software)"
  },
  {
    "question": "ഒരു പ്രോഗ്രാമർ തൻ്റെ വാണിജ്യ ആപ്പിൽ ഒരു FLOSS കോഡ് ലൈബ്രറി ഉപയോഗിക്കുന്നു. അവർ എന്തുചെയ്യണം?",
    "options": [
      { "text": "സോഴ്സിനെയും ലൈസൻസിനെയും അംഗീകരിക്കുക", "isCorrect": true },
      { "text": "സോഴ്സ് മറച്ചുവെക്കുക", "isCorrect": false },
      { "text": "കമൻ്റുകൾ ഇല്ലാതാക്കുക", "isCorrect": false },
      { "text": "ഫയൽ എൻക്രിപ്റ്റ് ചെയ്യുക", "isCorrect": false }
    ],
    "correctAnswer": "സോഴ്സിനെയും ലൈസൻസിനെയും അംഗീകരിക്കുക"
  },
  {
    "question": "ഏത് സാഹചര്യമാണ് ബാസാർ മോഡലിനെ (Bazaar model) മികച്ച രീതിയിൽ കാണിക്കുന്നത്?",
    "options": [
      { "text": "ആഗോള സന്നദ്ധപ്രവർത്തകർ ലിനക്സ് കൂട്ടായി മെച്ചപ്പെടുത്തുന്നത്", "isCorrect": true },
      { "text": "ഒരു കമ്പനി ടീം രഹസ്യമായി കോഡിംഗ് ചെയ്യുന്നത്", "isCorrect": false },
      { "text": "വാണിജ്യ അപ്ഡേറ്റുകൾ വിൽക്കുന്നത്", "isCorrect": false },
      { "text": "എക്സ്ക്ലൂസീവ് പ്രോഗ്രാമർമാരെ നിയമിക്കുന്നത്", "isCorrect": false }
    ],
    "correctAnswer": "ആഗോള സന്നദ്ധപ്രവർത്തകർ ലിനക്സ് കൂട്ടായി മെച്ചപ്പെടുത്തുന്നത്"
  },
  {
    "question": "ഒരു വിദ്യാർത്ഥി LibreOffice-നായി ഒരു പുതിയ ഫീച്ചർ സൃഷ്ടിച്ചാൽ, ഇത് ഏത് തത്വമാണ് പ്രകടമാക്കുന്നത്?",
    "options": [
      { "text": "കൂട്ടായ വികസനം (Collaborative development)", "isCorrect": true },
      { "text": "സോഫ്റ്റ്‌വെയർ പൈറസി", "isCorrect": false },
      { "text": "പതിപ്പ് ലോക്കിംഗ് (Version locking)", "isCorrect": false },
      { "text": "കോർപ്പറേറ്റ് കുത്തക", "isCorrect": false }
    ],
    "correctAnswer": "കൂട്ടായ വികസനം (Collaborative development)"
  },
  {
    "question": "എന്തിനാണ് ഡെവലപ്പർമാർ സോഫ്റ്റ്‌വെയർ കോപ്പിലെഫ്റ്റ് (Copyleft) ലൈസൻസിന് കീഴിൽ പുറത്തിറക്കുന്നത്?",
    "options": [
      { "text": "ഭാവി പരിഷ്കരണങ്ങളിൽ ഉപയോക്തൃ സ്വാതന്ത്ര്യം ഉറപ്പാക്കാൻ", "isCorrect": true },
      { "text": "പുനരുപയോഗം തടയാൻ", "isCorrect": false },
      { "text": "അതൊരു ക്ലോസ്ഡ് സോഴ്സ് ആക്കാൻ", "isCorrect": false },
      { "text": "രജിസ്ട്രേഷൻ ഒഴിവാക്കാൻ", "isCorrect": false }
    ],
    "correctAnswer": "ഭാവി പരിഷ്കരണങ്ങളിൽ ഉപയോക്തൃ സ്വാതന്ത്ര്യം ഉറപ്പാക്കാൻ"
  },
  {
    "question": "“വിതരണാവകാശം ഇല്ല” (“No redistribution rights”) എന്നെഴുതിയ സോഫ്റ്റ്‌വെയർ നിങ്ങൾ കണ്ടെത്തുന്നു. ഇത് എന്താണ് സൂചിപ്പിക്കുന്നത്?",
    "options": [
      { "text": "സൗജന്യ സോഫ്റ്റ്‌വെയർ", "isCorrect": false },
      { "text": "പ്രൊപ്രൈറ്ററി അല്ലെങ്കിൽ ക്ലോസ്ഡ് സോഴ്സ് സോഫ്റ്റ്‌വെയർ", "isCorrect": true },
      { "text": "ഓപ്പൺ സോഴ്സ് ലൈസൻസ്", "isCorrect": false },
      { "text": "വിദ്യാഭ്യാസ ഉപകരണം", "isCorrect": false }
    ],
    "correctAnswer": "പ്രൊപ്രൈറ്ററി അല്ലെങ്കിൽ ക്ലോസ്ഡ് സോഴ്സ് സോഫ്റ്റ്‌വെയർ"
  },
  {
    "question": "ഓപ്പൺ ഹാർഡ്‌വെയർ വിദ്യാഭ്യാസം എങ്ങനെ മെച്ചപ്പെടുത്തുന്നു?",
    "options": [
      { "text": "വിദ്യാർത്ഥികൾക്ക് ഡിസൈനുകൾ പഠിക്കാനും പരിഷ്കരിക്കാനും കഴിയും", "isCorrect": true },
      { "text": "ഇത് പകർപ്പവകാശം തടയുന്നു", "isCorrect": false },
      { "text": "ഇത് നവീകരണത്തെ നിയന്ത്രിക്കുന്നു", "isCorrect": false },
      { "text": "ഇത് പ്രത്യേകതകൾ മറച്ചുവെക്കുന്നു", "isCorrect": false }
    ],
    "correctAnswer": "വിദ്യാർത്ഥികൾക്ക് ഡിസൈനുകൾ പഠിക്കാനും പരിഷ്കരിക്കാനും കഴിയും"
  },
  {
    "question": "ഒരു ഡെവലപ്പർ GitHub-ൽ സംഭാവന ചെയ്യുകയും കമ്മ്യൂണിറ്റി സോഫ്റ്റ്‌വെയർ മെച്ചപ്പെടുത്തുകയും ചെയ്യുന്നു. ഇത് ഏത് ആശയത്തെയാണ് പ്രതിനിധീകരിക്കുന്നത്?",
    "options": [
      { "text": "കൂട്ടായ തുറന്ന വികസനം (Collaborative open development)", "isCorrect": true },
      { "text": "കേന്ദ്രീകൃത മോഡൽ", "isCorrect": false },
      { "text": "പ്രൊപ്രൈറ്ററി അപ്ഡേറ്റ്", "isCorrect": false },
      { "text": "ടെസ്റ്റ്വെയർ ലൈസൻസിംഗ്", "isCorrect": false }
    ],
    "correctAnswer": "കൂട്ടായ തുറന്ന വികസനം (Collaborative open development)"       
  }
    ];

    let currentQuestionIndex = 0;
    let totalScore = 0;
    const userAnswers = []; // Stores user selections and score for review

    // --- DOM Elements ---
    const quizScreen = document.getElementById('quiz-screen');
    const reviewScreen = document.getElementById('review-screen');
    const questionCounter = document.getElementById('question-counter');
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const feedbackMessage = document.getElementById('feedback-message');
    const backButton = document.getElementById('back-button');
    const nextButton = document.getElementById('next-button');
    const scoreDisplay = document.getElementById('score-display');
    const correctSound = document.getElementById('correct-sound');
    const wrongSound = document.getElementById('wrong-sound');

    // --- Sound Functions (Unchanged) ---
    function playCorrectSound() {
        try {
            correctSound.currentTime = 0; 
            correctSound.play().catch(error => {
                console.log('Could not play correct sound:', error);
                playFallbackSound('correct');
            });
        } catch (error) {
            console.log('Error playing correct sound:', error);
            playFallbackSound('correct');
        }
    }

    function playWrongSound() {
        try {
            wrongSound.currentTime = 0; 
            wrongSound.play().catch(error => {
                console.log('Could not play wrong sound:', error);
                playFallbackSound('wrong');
            });
        } catch (error) {
            console.log('Error playing wrong sound:', error);
            playFallbackSound('wrong');
        }
    }

    function playFallbackSound(type) {
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            if (type === 'correct') {
                oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5
            } else {
                oscillator.frequency.setValueAtTime(349.23, audioContext.currentTime); // F4
            }
            
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 1);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 1);
        } catch (error) {
            console.log('Fallback sound also failed:', error);
        }
    }

    // --- Core Functions ---

    /**
     * Updates the score display in the header
     */
    function updateScoreDisplay() {
        scoreDisplay.textContent = `Score: ${totalScore.toFixed(0)}`; 
    }

    /**
     * Loads the current question onto the screen.
     */
    function loadQuestion() {
        if (currentQuestionIndex >= quizData.length) {
            showReviewScreen();
            return;
        }

        const question = quizData[currentQuestionIndex];
        const userAnswer = userAnswers[currentQuestionIndex];
        const hasBeenSubmitted = !!userAnswer;

        // 1. Reset UI State
        questionCounter.textContent = `Question ${currentQuestionIndex + 1}/${quizData.length}`;
        questionText.textContent = question.question;
        optionsContainer.innerHTML = '';
        feedbackMessage.classList.remove('show', 'success', 'partial', 'error');
        feedbackMessage.textContent = '';
        optionsContainer.classList.remove('disabled');

        // 2. Set Navigation Buttons
        backButton.disabled = currentQuestionIndex === 0;
        nextButton.textContent = hasBeenSubmitted ? 'Next' : 'Submit';
        
        if (!hasBeenSubmitted) {
            // Initially disable Submit button until an option is selected
            nextButton.disabled = true;
        } else {
            // If submitted, enable Next
            nextButton.disabled = false;
        }

        // 3. Create Option Buttons
        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.classList.add('option-button');
            button.textContent = option.text;
            button.dataset.index = index;
            button.dataset.isCorrect = option.isCorrect;
            
            button.disabled = hasBeenSubmitted; 
            if (!hasBeenSubmitted) {
                button.addEventListener('click', selectOption); 
            }

            // Restore state if submitted
            if (hasBeenSubmitted) {
                if (userAnswer.selected.includes(index)) {
                    button.classList.add('selected');
                }
                // Show correction
                if (option.isCorrect) {
                    button.classList.add('correct');
                } else if (userAnswer.selected.includes(index) && !option.isCorrect) {
                    button.classList.add('wrong');
                }
                displayFeedback(userAnswer.score);
            }
            
            optionsContainer.appendChild(button);
        });

        // Update score display
        updateScoreDisplay();
    }

    /**
     * Selects one option and deselects all others, enabling the submit button.
     */
    function selectOption(e) {
        // 1. Deselect all
        optionsContainer.querySelectorAll('.option-button').forEach(btn => {
            btn.classList.remove('selected');
        });
        
        // 2. Select the clicked button
        const button = e.target;
        button.classList.add('selected');
        
        // 3. Enable next button
        nextButton.disabled = false;
    }

    /**
     * Handles the 'Next' button click: submits the answer or moves to the next question.
     */
    function handleNext() {
        // If it's a new question (unanswered) -> SUBMIT
        if (!userAnswers[currentQuestionIndex]) {
            submitAnswer();
        } 
        // If already submitted -> NEXT QUESTION
        else {
            currentQuestionIndex++;
            loadQuestion();
        }
    }

    /**
     * Calculates score, provides feedback, and saves the result.
     */
    function submitAnswer() {
        const question = quizData[currentQuestionIndex];
        const selectedButton = optionsContainer.querySelector('.option-button.selected');
        const selectedIndex = selectedButton ? parseInt(selectedButton.dataset.index) : -1;
        
        let score = 0;
        let isCorrect = false;

        if (selectedIndex !== -1) {
            isCorrect = question.options[selectedIndex].isCorrect;
            score = isCorrect ? 1 : 0;
        }

        // 1. Save Answer
        totalScore += score;
        userAnswers[currentQuestionIndex] = { selected: selectedIndex !== -1 ? [selectedIndex] : [], score: score };

        // 2. Update UI with Feedback and Correction
        optionsContainer.classList.add('disabled'); // Prevent further clicks
        Array.from(optionsContainer.children).forEach(button => {
            button.disabled = true;
            const index = parseInt(button.dataset.index);
            const isCorrectOption = question.options[index].isCorrect;

            if (isCorrectOption) {
                button.classList.add('correct');
            } else if (index === selectedIndex && !isCorrectOption) {
                button.classList.add('wrong');
            }
        });

        // 3. Play Sound and Animation
        if (score === 1) {
            playConfetti();
            playCorrectSound();
        } else {
            playWrongSound();
        }

        // 4. Display Textual Feedback
        displayFeedback(score);

        // 5. Update Navigation and Score
        nextButton.textContent = 'Next';
        nextButton.disabled = false;
        updateScoreDisplay();
    }

    /**
     * Displays a textual message based on the score.
     */
    function displayFeedback(score) {
        feedbackMessage.classList.add('show');
        
        if (score === 1) {
            // Correct answer
            feedbackMessage.textContent = "🎉 Correct! You earned 1 point!";
            feedbackMessage.className = 'feedback-message show success';
        } else {
            // Wrong answer
            feedbackMessage.textContent = "📚 Incorrect. The correct answer is highlighted in green. You earned 0 points.";
            feedbackMessage.className = 'feedback-message show error';
        }
    }

    /**
     * CUSTOM CANVAS IMPLEMENTATION (Replaces the confetti library call)
     * Plays the custom fireworks animation from the middle of the app area to the top.
     */
    function playConfetti() {
        const canvas = document.getElementById("star-canvas");
        if (!canvas) return; 
        
        const ctx = canvas.getContext("2d");
        // Always resize to fit the current window on launch
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let particles = [];
        const colors = ["#FFD700", "#FFEE58", "#FFF176", "#FFAB00", "#FF6F00"];
        
        // Explosion Origin: Middle of screen width, roughly 40% down from the top (middle of app area)
        const centerX = canvas.width / 2;
        const centerY = canvas.height * 0.4; 

        // Create initial explosion particles
        for (let i = 0; i < 60; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 6 + 3;
            particles.push({
                x: centerX,
                y: centerY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed - 2,
                size: Math.random() * 4 + 2,
                color: colors[Math.floor(Math.random() * colors.length)],
                life: 100
            });
        }

        function drawStar(x, y, size, color) {
            ctx.save();
            ctx.beginPath();
            ctx.translate(x, y);
            ctx.moveTo(0, -size);
            for (let i = 0; i < 5; i++) {
                ctx.rotate(Math.PI / 5);
                ctx.lineTo(0, -size * 0.5);
                ctx.rotate(Math.PI / 5);
                ctx.lineTo(0, -size);
            }
            ctx.closePath();
            ctx.fillStyle = color;
            ctx.shadowColor = color;
            ctx.shadowBlur = 15;
            ctx.fill();
            ctx.restore();
        }

        function animate() {
            // Clear the canvas completely for a clean look
            ctx.clearRect(0, 0, canvas.width, canvas.height); 

            // Update and draw particles
            particles.forEach((p, i) => {
                p.x += p.vx;
                p.y += p.vy;
                p.vy += 0.05; // gravity pull
                p.life--;

                if (p.life > 0) {
                    drawStar(p.x, p.y, p.size, p.color);
                } else {
                    particles.splice(i, 1);
                }
            });

            // Continue animation if particles remain
            if (particles.length > 0) {
                requestAnimationFrame(animate);
            } else {
                // Final clear once animation is complete
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            }
        }

        animate();
    }

    /**
     * Handles the 'Back' button click.
     */
    function handleBack() {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            loadQuestion();
        }
    }

    /**
     * Switches to the Review Screen and generates the review content.
     */
    function showReviewScreen() {
        quizScreen.classList.remove('active');
        reviewScreen.classList.add('active');
        
        // Hide/disable navigation buttons
        backButton.style.display = 'none';
        nextButton.style.display = 'none';

        const reviewDetails = document.getElementById('review-details');
        reviewDetails.innerHTML = '';

        quizData.forEach((question, index) => {
            const userAnswer = userAnswers[index];
            const item = document.createElement('div');
            item.classList.add('review-item');

            const scoreDisplay = userAnswer ? `<span class="review-score">${userAnswer.score.toFixed(0)} / 1</span>` : '';

            item.innerHTML = `
                <div class="review-question-title">Q${index + 1}: ${question.question} ${scoreDisplay}</div>
                <ul style="list-style-type: none; padding-left: 0;">
                    ${question.options.map((opt, i) => {
                        const isSelected = userAnswer && userAnswer.selected.includes(i);
                        let className = '';
                        if (opt.isCorrect) {
                            className = 'correct';
                        } else if (isSelected && !opt.isCorrect) {
                            className = 'wrong';
                        }
                        return `<li class="${className}" style="padding: 5px; margin-left: 10px; border-left: 3px solid ${opt.isCorrect ? '#4cd964' : (isSelected ? '#ff3b30' : '#ccc')}; margin-bottom: 3px; background-color: ${className === 'correct' ? '#e6ffe6' : (className === 'wrong' ? '#ffe6e6' : 'white')};">
                            ${opt.text}
                            ${isSelected ? ' (Your Selection)' : ''}
                        </li>`;
                    }).join('')}
                </ul>
            `;
            reviewDetails.appendChild(item);
        });

        // Display Final Score
        const finalScore = document.createElement('div');
        finalScore.classList.add('review-final-score');
        finalScore.textContent = `FINAL SCORE: ${totalScore.toFixed(0)} / ${quizData.length.toFixed(0)}`;
        reviewDetails.appendChild(finalScore);
    }

    // --- Event Listeners and Initialization ---
    backButton.addEventListener('click', handleBack);
    nextButton.addEventListener('click', handleNext);

    // Preload sounds
    correctSound.load();
    wrongSound.load();

    // Initial load
    loadQuestion();
    updateScoreDisplay();
});
