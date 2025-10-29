document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "വിക്കിപീഡിയ, സ്കൂൾവിക്കി (SchoolWiki) പോലുള്ള വലിയ സഹകരണ വെബ്സൈറ്റുകൾ നിർമ്മിക്കാനും നിയന്ത്രിക്കാനും പ്രാഥമികമായി ഉപയോഗിക്കുന്ന സോഫ്റ്റ്‌വെയർ എഞ്ചിൻ ഏതാണ്?",
    "options": [
      { "text": "വിക്കിവിക്കിവെബ് (WikiWikiWeb)", "isCorrect": false },
      { "text": "വിക്കിഎഞ്ചിൻ (WikiEngine)", "isCorrect": false },
      { "text": "മീഡിയവിക്കി (MediaWiki)", "isCorrect": true },
      { "text": "വിക്കിപ്ലാറ്റ്ഫോം (WikiPlatform)", "isCorrect": false }
    ]
  },
  {
    "question": "'വിക്കി' (Wiki) എന്ന പദം ഏത് ഭാഷയിലെ വാക്കിൽ നിന്നാണ് ഉരുത്തിരിഞ്ഞത്?",
    "options": [
      { "text": "സ്വാഹിലി", "isCorrect": false },
      { "text": "ലാറ്റിൻ", "isCorrect": false },
      { "text": "സംസ്കൃതം", "isCorrect": false },
      { "text": "ഹവായിയൻ", "isCorrect": true }
    ]
  },
  {
    "question": "'വിക്കി' എന്ന പദം ഉരുത്തിരിഞ്ഞ 'വിക്കിവിക്കി' (WikiWiki) എന്ന ഹവായിയൻ വാക്കിൻ്റെ അർത്ഥമെന്താണ്?",
    "options": [
      { "text": "വേഗതയുള്ള (Fast)", "isCorrect": false },
      { "text": "പെട്ടെന്നുള്ള (Quick)", "isCorrect": true },
      { "text": "അറിവ് (Knowledge)", "isCorrect": false },
      { "text": "സഹകരിക്കുക (Collaborate)", "isCorrect": false }
    ]
  },
  {
    "question": "'വിക്കിവിക്കിവെബ്' (WikiWikiWeb) എന്നറിയപ്പെടുന്ന ആദ്യത്തെ വിക്കി (wiki) സൃഷ്ടിച്ചത് ആരാണ്?",
    "options": [
      { "text": "വാർഡ് കണ്ണിംഗ്ഹാം (Ward Cunningham)", "isCorrect": true },
      { "text": "ജിമ്മി വെയിൽസ്", "isCorrect": false },
      { "text": "റേ ടോംലിൻസൺ (Ray Tomlinson)", "isCorrect": false },
      { "text": "സ്റ്റീഫൻ വില്യം ഹോക്കിംഗ്", "isCorrect": false }
    ]
  },
  {
    "question": "ആദ്യത്തെ വിക്കി (WikiWikiWeb) സൃഷ്ടിക്കപ്പെട്ട വർഷം ഏതാണ്?",
    "options": [
      { "text": "1991", "isCorrect": false },
      { "text": "1995", "isCorrect": true },
      { "text": "2001", "isCorrect": false },
      { "text": "1984", "isCorrect": false }
    ]
  },
  {
    "question": "താഴെ പറയുന്നവയിൽ വിക്കിപീഡിയയുടെ ഒരു സവിശേഷത ഏതാണ്?",
    "options": [
      { "text": "എല്ലാ തിരുത്തലുകൾക്കും അംഗത്വം നിർബന്ധമാണ്.", "isCorrect": false },
      { "text": "സ്ഥാപകർക്ക് മാത്രമേ ഇത് നിരീക്ഷിക്കാൻ കഴിയൂ.", "isCorrect": false },
      { "text": "സഹകരണത്തിലൂടെ സൃഷ്ടിക്കപ്പെട്ട ഒരു വിജ്ഞാനകോശമാണിത്.", "isCorrect": true },
      { "text": "രചയിതാക്കൾ എഴുതിയ യഥാർത്ഥ ഉള്ളടക്കം മാത്രമേ ഇതിൽ അനുവദിക്കൂ.", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു ഉപയോക്താവ് ലോഗിൻ ചെയ്യാതെ വിക്കിപീഡിയയിൽ ഒരു തിരുത്ത് വരുത്തിയാൽ, പ്ലാറ്റ്‌ഫോമിൽ എന്ത് വിവരമാണ് പ്രദർശിപ്പിക്കുന്നത്?",
    "options": [
      { "text": "ഒരു താൽക്കാലിക യൂസർനെയിം.", "isCorrect": false },
      { "text": "തിരുത്ത് സ്വയമേവ നിരസിക്കപ്പെടും.", "isCorrect": false },
      { "text": "ഉപയോക്താവിൻ്റെ ഐ.പി. (IP) വിലാസം.", "isCorrect": true },
      { "text": "ഒരു അജ്ഞാത തിരിച്ചറിയൽ നമ്പർ.", "isCorrect": false }
    ]
  },
  {
    "question": "സ്കൂൾവിക്കിയുടെ (SchoolWiki) പ്രാഥമിക ലക്ഷ്യം എന്താണ്?",
    "options": [
      { "text": "വിദ്യാർത്ഥികളുടെ സൃഷ്ടിപരമായ രചനകളും അധ്യാപകരുടെ പഠന വിഭവങ്ങളും ശേഖരിക്കുകയും പങ്കുവെക്കുകയും ചെയ്യുക.", "isCorrect": true },
      { "text": "അധ്യാപകർക്കായുള്ള ഒരു സോഷ്യൽ മീഡിയ പ്ലാറ്റ്ഫോം നൽകുക.", "isCorrect": false },
      { "text": "എല്ലാ വിദ്യാർത്ഥികളുടെയും റിപ്പോർട്ട് കാർഡുകൾ ഡിജിറ്റൈസ് ചെയ്യുക.", "isCorrect": false },
      { "text": "എല്ലാ ക്ലാസ്സുകൾക്കും ഓൺലൈൻ പരീക്ഷകൾ നടത്തുക.", "isCorrect": false }
    ]
  },
  {
    "question": "സ്കൂൾവിക്കി (SchoolWiki) ഏത് സംസ്ഥാനത്തെ സ്കൂളുകളുടെ സഹകരണത്തോടെ പരിപാലിക്കുന്ന സ്കൂൾ വിജ്ഞാനകോശമാണ്?",
    "options": [
      { "text": "കർണ്ണാടക", "isCorrect": false },
      { "text": "കേരളം", "isCorrect": true },
      { "text": "തമിഴ്‌നാട്", "isCorrect": false },
      { "text": "മഹാരാഷ്ട്ര", "isCorrect": false }
    ]
  },
  {
    "question": "സ്കൂൾവിക്കിയിൽ വിവരങ്ങൾ ചേർക്കുന്നതിനും തിരുത്തലുകൾ വരുത്തുന്നതിനും ഒരു ഉപയോക്താവിന് നിർബന്ധമായും വേണ്ടത് എന്താണ്?",
    "options": [
      { "text": "വളരെ വേഗതയുള്ള ഇൻ്റർനെറ്റ് കണക്ഷൻ.", "isCorrect": false },
      { "text": "ഒരു ഡിജിറ്റൽ ഒപ്പ്.", "isCorrect": false },
      { "text": "ഒരു അച്ചടിച്ച അപേക്ഷാ ഫോം.", "isCorrect": false },
      { "text": "അംഗത്വവും ഇ-മെയിൽ വിലാസവും.", "isCorrect": true }
    ]
  },
  {
    "question": "ഇ-മെയിലിൻ്റെ (E-mail) പൂർണ്ണരൂപം എന്താണ്?",
    "options": [
      { "text": "ഇലക്ട്രോണിക് മെസഞ്ചർ (Electronic Messenger)", "isCorrect": false },
      { "text": "ഇലക്ട്രോണിക് മെയിൽ (Electronic Mail)", "isCorrect": true },
      { "text": "എക്സിക്യൂട്ടീവ് മെയിൽ (Executive Mail)", "isCorrect": false },
      { "text": "എൻക്രിപ്റ്റഡ് മെയിൽ (Encrypted Mail)", "isCorrect": false }
    ]
  },
  {
    "question": "ഇ-മെയിലിനായുള്ള ആദ്യത്തെ പ്രോഗ്രാം വികസിപ്പിച്ചെടുത്തതിലൂടെ ഇ-മെയിലിൻ്റെ പിതാവ് (father of email) എന്നറിയപ്പെടുന്നത് ആരാണ്?",
    "options": [
      { "text": "റേ ടോംലിൻസൺ (Ray Tomlinson)", "isCorrect": true },
      { "text": "ബിൽ ഗേറ്റ്സ്", "isCorrect": false },
      { "text": "ടിം ബെർണേഴ്സ്-ലീ", "isCorrect": false },
      { "text": "വിൻ്റ് സെർഫ്", "isCorrect": false }
    ]
  },
  {
    "question": "ഇ-മെയിലിൻ്റെ ആദ്യ രൂപം 1960-കളുടെ അവസാനത്തിൽ ഏത് സൈനിക/ഗവേഷണ നെറ്റ്വർക്കിലാണ് പ്രസിദ്ധീകരിച്ചത്?",
    "options": [
      { "text": "ആർപ്പാനെറ്റ് (ARPANET)", "isCorrect": true },
      { "text": "എൻഎസ്എഫ്നെറ്റ് (NSFNET)", "isCorrect": false },
      { "text": "ഇൻ്റർനെറ്റ്2 (Internet2)", "isCorrect": false },
      { "text": "ഈതർനെറ്റ് (Ethernet)", "isCorrect": false }
    ]
  },
  {
    "question": "'@' ചിഹ്നം കൊണ്ട് വേർതിരിച്ചിരിക്കുന്ന ഒരു ഇ-മെയിൽ വിലാസത്തിൻ്റെ പ്രധാനപ്പെട്ട രണ്ട് ഭാഗങ്ങൾ ഏതാണ്?",
    "options": [
      { "text": "ഒന്നാം പേരും അവസാന പേരും", "isCorrect": false },
      { "text": "യൂസർനെയിമും സേവനത്തിൻ്റെ തരവും", "isCorrect": false },
      { "text": "പ്രോട്ടോക്കോളും പോർട്ട് നമ്പറും", "isCorrect": false },
      { "text": "യൂസർനെയിമും സേവനദാതാവിൻ്റെ ഡൊമൈൻ നാമവും", "isCorrect": true }
    ]
  },
  {
    "question": "ഡിജിറ്റൽ ലോകത്ത് ഒരു വ്യക്തിയുടെ ഇ-മെയിൽ വിലാസം എന്തിൻ്റെ ഭാഗമായാണ് കണക്കാക്കപ്പെടുന്നത്?",
    "options": [
      { "text": "അവരുടെ ഡിജിറ്റൽ ഐഡൻ്റിറ്റി (അടയാളം).", "isCorrect": true },
      { "text": "അവരുടെ ബാങ്ക് അക്കൗണ്ട് നമ്പർ.", "isCorrect": false },
      { "text": "അവരുടെ ഭൗതിക വിലാസം.", "isCorrect": false },
      { "text": "അവരുടെ മൊബൈൽ നമ്പർ.", "isCorrect": false }
    ]
  },
  {
    "question": "കാപ്ചയുടെ (CAPTCHA) ഉദ്ദേശ്യം എന്താണ്?",
    "options": [
      { "text": "ഉപയോക്താവ് ഒരു മനുഷ്യനാണോ എന്ന് പരിശോധിക്കാൻ.", "isCorrect": true },
      { "text": "ഉപയോക്താവിൻ്റെ പാസ്‌വേഡുകൾ എൻക്രിപ്റ്റ് ചെയ്യാൻ.", "isCorrect": false },
      { "text": "വെബ്സൈറ്റ് ലോഡിംഗ് വേഗത വർദ്ധിപ്പിക്കാൻ.", "isCorrect": false },
      { "text": "ഓൺലൈൻ ഫോമുകൾ സ്വയമേവ പൂരിപ്പിക്കാൻ.", "isCorrect": false }
    ]
  },
  {
    "question": "വിദ്യാർത്ഥികൾക്ക് വിക്കി തിരുത്തലുകൾ പരിശീലിക്കാൻ വേണ്ടി സ്കൂൾവിക്കിയിൽ നൽകിയിട്ടുള്ള പേജിൻ്റെ പേരെന്താണ്?",
    "options": [
      { "text": "കളവറ", "isCorrect": false },
      { "text": "എഴുത്തുകളരി", "isCorrect": true },
      { "text": "തിരുത്തുക", "isCorrect": false },
      { "text": "പാടശാല", "isCorrect": false }
    ]
  },
  {
    "question": "'എഴുത്തുകളരി'യിൽ ഒരു വിദ്യാർത്ഥി ചേർക്കുന്ന ഉള്ളടക്കത്തിന് എന്ത് സംഭവിക്കും?",
    "options": [
      { "text": "എഴുത്തുകളരിയിലുള്ള മറ്റ് എല്ലാ വിദ്യാർത്ഥികൾക്കും അത് കാണാൻ കഴിയും.", "isCorrect": false },
      { "text": "അത് വിദ്യാർത്ഥിക്ക് മാത്രം കാണാൻ കഴിയുന്നതും പരിശീലന ആവശ്യങ്ങൾക്കുള്ളതുമാണ്.", "isCorrect": true },
      { "text": "അത് ഉടൻ തന്നെ പ്രധാന സ്കൂൾവിക്കിയിൽ പ്രസിദ്ധീകരിക്കും.", "isCorrect": false },
      { "text": "അത് 24 മണിക്കൂറിന് ശേഷം ഇല്ലാതാക്കപ്പെടും.", "isCorrect": false }
    ]
  },
  {
    "question": "സ്കൂൾവിക്കിയിൽ നിങ്ങൾ തിരഞ്ഞെടുക്കുന്ന യൂസർനെയിം നിലവിലുണ്ടെങ്കിൽ, പരിഹാരമായി നിർദ്ദേശിക്കപ്പെടുന്നത് എന്താണ്?",
    "options": [
      { "text": "നിലവിലുള്ള ഉപയോക്താവ് അവരുടെ അക്കൗണ്ട് ഇല്ലാതാക്കുന്നതുവരെ കാത്തിരിക്കുക.", "isCorrect": false },
      { "text": "യൂസർനെയിമിനൊപ്പം സ്ഥലപ്പേരോ വീട്ടിലെ പേരോ ചേർക്കുക.", "isCorrect": true },
      { "text": "മറ്റൊരു ഇ-മെയിൽ വിലാസം ഉപയോഗിച്ച് ശ്രമിക്കുക.", "isCorrect": false },
      { "text": "പേരിന് പകരം ഒരു പൊതുവായ നമ്പർ ഉപയോഗിക്കുക.", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു സ്കൂൾവിക്കി പേജിലെ ഉള്ളടക്കം തിരുത്തുന്ന പ്രക്രിയ ആരംഭിക്കാൻ ഉപയോഗിക്കുന്ന ഓപ്ഷൻ ഏതാണ്?",
    "options": [
      { "text": "'അവലംബം' (Avaslambam)", "isCorrect": false },
      { "text": "'നാവിഗേറ്റർ' (Navigater)", "isCorrect": false },
      { "text": "'തിരുത്തുക' (Thiruthuka) (Edit)", "isCorrect": true },
      { "text": "'വായിക്കുക' (Vayikkuka)", "isCorrect": false }
    ]
  },
  {
    "question": "ഇൻ്റർനെറ്റിൻ്റെ പശ്ചാത്തലത്തിൽ, ഒരു മീം (MEME) എന്താണ്?",
    "options": [
      { "text": "ഒരു കമ്പ്യൂട്ടർ പ്രോഗ്രാമിംഗ് ഭാഷ.", "isCorrect": false },
      { "text": "വ്യാപകമായി പ്രചരിക്കുന്ന ഒരു സാംസ്കാരിക ആശയം അല്ലെങ്കിൽ ചിത്രം.", "isCorrect": true },
      { "text": "ഒരു തരം നെറ്റ്വർക്ക് റൂട്ടർ.", "isCorrect": false },
      { "text": "ഒരു പുതിയ വെബ് ബ്രൗസർ.", "isCorrect": false }
    ]
  },
  {
    "question": "സൈബർ ലോകത്ത് അതിവേഗം പ്രചരിക്കുന്ന എന്തിനെയും പൊതുവെ വിളിക്കുന്ന പേരെന്താണ്?",
    "options": [
      { "text": "എൻക്രിപ്റ്റഡ് (Encrypted)", "isCorrect": false },
      { "text": "വൈറൽ (Viral)", "isCorrect": true },
      { "text": "സ്റ്റാറ്റിക് (Static)", "isCorrect": false },
      { "text": "സ്പാം (Spam)", "isCorrect": false }
    ]
  },
  {
    "question": "ഇൻ്റർനെറ്റിൻ്റെ ഇരട്ട സ്വഭാവത്തെക്കുറിച്ച് (നന്മയും തിന്മയും) അധ്യായത്തിൽ ഉദ്ധരിച്ച പ്രശസ്ത ഭൗതികശാസ്ത്രജ്ഞൻ ആരാണ്?",
    "options": [
      { "text": "ഐസക് ന്യൂട്ടൺ", "isCorrect": false },
      { "text": "ഗലീലിയോ ഗലീലി", "isCorrect": false },
      { "text": "ആൽബർട്ട് ഐൻസ്റ്റീൻ", "isCorrect": false },
      { "text": "സ്റ്റീഫൻ വില്യം ഹോക്കിംഗ് (Stephen William Hawking)", "isCorrect": true }
    ]
  },
  {
    "question": "വിക്കിപീഡിയയിലെ ലേഖനങ്ങൾ മനപ്പൂർവ്വം വളച്ചൊടിക്കുന്നതിനായി തിരുത്തലുകൾ വരുത്തുന്ന വ്യക്തികളെ വിശേഷിപ്പിക്കാൻ ഉപയോഗിക്കുന്ന പദം എന്താണ്?",
    "options": [
      { "text": "വിക്കിപീഡിയ വാൻഡൽസ് (Wikipedia Vandals)", "isCorrect": true },
      { "text": "സൈബർ സ്റ്റോക്കർമാർ", "isCorrect": false },
      { "text": "വിക്കിഎഡിറ്റർമാർ", "isCorrect": false },
      { "text": "വിക്കിപീഡിയ മോഡറേറ്റർമാർ", "isCorrect": false }
    ]
  },
  {
    "question": "അധ്യായത്തിൽ സൂചിപ്പിച്ച ഒരു ജനപ്രിയ ഇ-മെയിൽ സേവന ദാതാവിന് ഉദാഹരണമാണ്?",
    "options": [
      { "text": "മീഡിയവിക്കി", "isCorrect": false },
      { "text": "ഡിസ്റൂട്ട്മെയിൽ (Disrootmail)", "isCorrect": true },
      { "text": "സ്കൂൾവിക്കി", "isCorrect": false },
      { "text": "ലിങ്ക്ഡ്ഇൻ", "isCorrect": false }
    ]
  },
  {
    "question": "എഴുതിയ അക്ഷരങ്ങളോ ചിത്രങ്ങളോ തിരഞ്ഞെടുക്കുന്നതിന് പുറമെ, കാപ്ചയിൽ (CAPTCHA) പലപ്പോഴും ഉൾപ്പെടാൻ സാധ്യതയുള്ള പ്രശ്നം ഏതാണ്?",
    "options": [
      { "text": "വിവരങ്ങളുമായി ബന്ധപ്പെട്ട ചോദ്യങ്ങൾക്ക് ഉത്തരം നൽകുന്നത്.", "isCorrect": false },
      { "text": "അടിസ്ഥാന ഗണിത പ്രശ്നങ്ങൾ പരിഹരിക്കുന്നത്.", "isCorrect": true },
      { "text": "ഒരു ചെറിയ ഉപന്യാസം ടൈപ്പ് ചെയ്യുന്നത്.", "isCorrect": false },
      { "text": "ഒരു ലളിതമായ ചിത്രം വരയ്ക്കുന്നത്.", "isCorrect": false }
    ]
  },
  {
    "question": "ഉപയോക്താക്കൾക്ക് സൃഷ്ടികൾ ഉപയോഗിക്കാനും, മാറ്റം വരുത്താനും, വിതരണം ചെയ്യാനും സ്വാതന്ത്ര്യം ഉറപ്പാക്കുന്ന ലൈസൻസിംഗ് സമീപനം അറിയപ്പെടുന്നത് എന്താണ്?",
    "options": [
      { "text": "കോപ്പിലെഫ്റ്റ് (Copyleft)", "isCorrect": true },
      { "text": "പകർപ്പവകാശം (Copyright)", "isCorrect": false },
      { "text": "പ്രൊപ്രൈറ്ററി (Proprietary)", "isCorrect": false },
      { "text": "ഫെയർ യൂസ് (Fair Use)", "isCorrect": false }
    ]
  },
  {
    "question": "കാഴ്ച വൈകല്യമുള്ള ഉപയോക്താക്കളെ സഹായിക്കുന്ന 'സ്‌ക്രീൻ റീഡർ' (screen reader) ഏത് വിഭാഗത്തിൽപ്പെട്ട സോഫ്റ്റ്‌വെയറാണ്?",
    "options": [
      { "text": "വെബ് ബ്രൗസർ", "isCorrect": false },
      { "text": "അസിസ്റ്റീവ് ടൂൾ (സഹായക ഉപകരണം)", "isCorrect": true },
      { "text": "വെർച്വൽ അസിസ്റ്റൻ്റ്", "isCorrect": false },
      { "text": "വീഡിയോ ജനറേഷൻ", "isCorrect": false }
    ]
  },
  {
    "question": "താഴെ പറയുന്നവയിൽ സോഷ്യൽ മീഡിയ പ്ലാറ്റ്ഫോം അല്ലാത്തത് ഏതാണ്?",
    "options": [
      { "text": "സ്കൂൾവിക്കി", "isCorrect": true },
      { "text": "വാട്ട്സ്ആപ്പ്", "isCorrect": false },
      { "text": "യൂട്യൂബ്", "isCorrect": false },
      { "text": "ഇൻസ്റ്റാഗ്രാം", "isCorrect": false }
    ]
  },
  {
    "question": "വ്യക്തിപരമായ വിവരങ്ങൾ ശേഖരിച്ച് സോഷ്യൽ മീഡിയ വഴി വ്യക്തികളെ ഭീഷണിപ്പെടുത്തുകയോ ബ്ലാക്ക്മെയിൽ ചെയ്യുകയോ ചെയ്യുന്ന സൈബർ കുറ്റകൃത്യം ഏതാണ്?",
    "options": [
      { "text": "സൈബർ സ്റ്റാക്കിംഗ് (Cyber Stalking)", "isCorrect": true },
      { "text": "ഐഒടി ആക്രമണങ്ങൾ (IoT Attacks)", "isCorrect": false },
      { "text": "ഫിഷിംഗ്", "isCorrect": false },
      { "text": "ക്രിപ്‌റ്റോ ഹാക്കിംഗ്", "isCorrect": false }
    ]
  },
  {
    "question": "അധ്യാപകർ തയ്യാറാക്കിയ ഏത് തരം വിഭവങ്ങളാണ് സ്കൂൾവിക്കിയിൽ പങ്കുവെക്കുന്നത്?",
    "options": [
      { "text": "മൂല്യനിർണ്ണയ ചെക്ക്‌ലിസ്റ്റുകൾ.", "isCorrect": false },
      { "text": "പഠന വിഭവങ്ങൾ (Learning resources).", "isCorrect": true },
      { "text": "ശമ്പള സ്റ്റേറ്റ്‌മെൻ്റുകൾ.", "isCorrect": false },
      { "text": "ഹാജർ രജിസ്റ്ററുകൾ.", "isCorrect": false }
    ]
  },
  {
    "question": "സ്കൂൾവിക്കിയിൽ പ്രവേശിക്കുന്നതിനുള്ള URL ഇതാണ്:",
    "options": [
      { "text": "http://schoolwiki.net", "isCorrect": false },
      { "text": "http://schoolwiki.com", "isCorrect": false },
      { "text": "http://schoolwiki.in", "isCorrect": true },
      { "text": "http://schoolwiki.org", "isCorrect": false }
    ]
  },
  {
    "question": "വിവരങ്ങൾ പങ്കുവെക്കുന്നതിനും ജോലി അന്വേഷിക്കുന്നവരെ ബന്ധിപ്പിക്കുന്നതിനുമായി അധ്യായത്തിൽ സൂചിപ്പിച്ച പ്രൊഫഷണൽ നെറ്റ്‌വർക്കിംഗ് പ്ലാറ്റ്ഫോം ഏതാണ്?",
    "options": [
      { "text": "ലിങ്ക്ഡ്ഇൻ (LinkedIn)", "isCorrect": true },
      { "text": "ഫേസ്ബുക്ക്", "isCorrect": false },
      { "text": "ട്വിറ്റർ", "isCorrect": false },
      { "text": "സ്കൂൾവിക്കി", "isCorrect": false }
    ]
  },
  {
    "question": "`gourykrishna@gmail.com` എന്ന ഇ-മെയിൽ വിലാസത്തിൽ, സേവനദാതാവിൻ്റെ ഡൊമൈൻ നാമം പ്രതിനിധീകരിക്കുന്നത് ഏത് ഭാഗമാണ്?",
    "options": [
      { "text": "com", "isCorrect": false },
      { "text": "gourykrishna", "isCorrect": false },
      { "text": "@", "isCorrect": false },
      { "text": "gmail.com", "isCorrect": true }
    ]
  },
  {
    "question": "നശീകരണ പ്രവർത്തനങ്ങൾക്കും തെറ്റായ വിവരങ്ങൾക്കുമെതിരെ വിശ്വാസ്യത നിലനിർത്താൻ വിക്കിപീഡിയ ഉപയോഗിക്കുന്ന പ്രാഥമിക മാർഗ്ഗം എന്താണ്?",
    "options": [
      { "text": "എല്ലാ പേജുകളിലും സ്ഥിരമായ ഉള്ളടക്കം ലോക്ക് ചെയ്യുന്നു.", "isCorrect": false },
      { "text": "വിജ്ഞാന വിനിമയത്തിൽ താൽപ്പര്യമുള്ള സന്നദ്ധപ്രവർത്തകർ ഇത് നിരീക്ഷിക്കുന്നു.", "isCorrect": true },
      { "text": "എല്ലാ പുതിയ തിരുത്തലുകളും സ്വയമേവ ഇല്ലാതാക്കുന്നു.", "isCorrect": false },
      { "text": "AI (നിർമ്മിത ബുദ്ധി) വഴി മാത്രമേ ഉള്ളടക്കം സൃഷ്ടിക്കൂ.", "isCorrect": false }
    ]
  },
  {
    "question": "സ്കൂൾവിക്കിയിൽ എഡിറ്റ് ചെയ്യുന്നതിനുള്ള 'മൂലരൂപം തിരുത്തുക' (Moolaroopam thiruthuka) എന്ന ഓപ്ഷൻ്റെ പ്രാധാന്യം എന്താണ്?",
    "options": [
      { "text": "പേജ് ലേഔട്ട് മാറ്റാൻ ഇത് ഉപയോഗിക്കുന്നു.", "isCorrect": false },
      { "text": "പേജിൻ്റെ അടിസ്ഥാന കോഡ്/മാർക്കപ്പ് കാണാൻ ഇത് ഉപയോഗിക്കുന്നു.", "isCorrect": true },
      { "text": "വിഷ്വൽ എഡിറ്റിംഗിനായി ഇത് ഉപയോഗിക്കുന്നു.", "isCorrect": false },
      { "text": "പുതിയ ഫയലുകൾ അപ്‌ലോഡ് ചെയ്യാൻ ഇത് ഉപയോഗിക്കുന്നു.", "isCorrect": false }
    ]
  },
  {
    "question": "സ്കൂൾവിക്കിയിൽ ഒരു പേജിലേക്ക് ഒരു ചിത്രം ചേർക്കാൻ, ഫോർമാറ്റിംഗ് ടൂൾബാറിലെ ഏത് ഐക്കണിലാണ് ക്ലിക്ക് ചെയ്യേണ്ടത്?",
    "options": [
      { "text": "ശീർഷകങ്ങൾ (Headings)", "isCorrect": false },
      { "text": "പ്രത്യേക ചിഹ്നങ്ങൾ (Special Characters)", "isCorrect": false },
      { "text": "ചിത്രങ്ങളും മീഡിയകളും (Chithrangalum Mediakalum - Images and Media)", "isCorrect": true },
      { "text": "പ്രിവ്യൂ (Preview)", "isCorrect": false }
    ]
  },
  {
    "question": "'ആർക്കും തിരുത്താനും മാറ്റം വരുത്താനും കഴിയും' (Anyone can edit and modify) എന്നത് ഏത് സിസ്റ്റത്തിൻ്റെ പ്രധാന സവിശേഷതയാണ്?",
    "options": [
      { "text": "ഒരു വിക്കി/സഹകരണ വിജ്ഞാനകോശം.", "isCorrect": true },
      { "text": "ഒരു സാധാരണ ഇ-മെയിൽ സേവനം.", "isCorrect": false },
      { "text": "ഒരു ക്ലോസ്ഡ്-സോഴ്സ് ഓപ്പറേറ്റിംഗ് സിസ്റ്റം.", "isCorrect": false },
      { "text": "ഒരു പ്രൊപ്രൈറ്ററി സോഫ്റ്റ്‌വെയർ ലൈസൻസ്.", "isCorrect": false }
    ]
  },
  {
    "question": "തെറ്റായ ഉള്ളടക്കം ഇല്ലാതാക്കുന്നതിന് പുറമെ, വിക്കിപീഡിയയിലെ ശക്തമായ ഭരണസംവിധാനത്തിൻ്റെ പ്രധാന ലക്ഷ്യം എന്താണ്?",
    "options": [
      { "text": "പരസ്യങ്ങൾ വിൽക്കുക.", "isCorrect": false },
      { "text": "തെറ്റായ കാര്യങ്ങൾ തുടർച്ചയായി ചെയ്യുന്നവരെ സ്ഥിരമായി വിലക്കുക.", "isCorrect": true },
      { "text": "അംഗത്വ ഫീസ് വർദ്ധിപ്പിക്കുക.", "isCorrect": false },
      { "text": "ലോഗിൻ ചെയ്ത അംഗങ്ങളിൽ നിന്നുള്ള തിരുത്തലുകൾ മാത്രം സ്വീകരിക്കുക.", "isCorrect": false }
    ]
  },
  {
    "question": "ഉപയോക്താവ് മനുഷ്യനാണോ എന്ന് പരിശോധിക്കുന്നതിലൂടെ CAPTCHA എന്തിനെയാണ് തടയുന്നത്?",
    "options": [
      { "text": "വലിയ ഇ-മെയിൽ അറ്റാച്ച്‌മെൻ്റുകൾ അയക്കുന്നത്.", "isCorrect": false },
      { "text": "കുറഞ്ഞ ഇൻ്റർനെറ്റ് വേഗത.", "isCorrect": false },
      { "text": "കമ്പ്യൂട്ടർ പ്രോഗ്രാമുകൾ ഉപയോഗിച്ച് വ്യാജ അക്കൗണ്ടുകൾ സൃഷ്ടിക്കുന്നത്.", "isCorrect": true },
      { "text": "സ്വകാര്യ നെറ്റ്വർക്കുകളിലേക്കുള്ള അനധികൃത പ്രവേശനം.", "isCorrect": false }
    ]
  },
  {
    "question": "ചരിത്രപരവും അടിസ്ഥാനപരവുമായ വിവരങ്ങൾക്ക് പുറമെ, സ്കൂൾവിക്കിയിൽ ഒരു സ്കൂളിൻ്റെ ഏത് വിവരമാണ് അപ്ഡേറ്റ് ചെയ്യുന്നത്?",
    "options": [
      { "text": "രക്ഷകർത്താക്കളുടെ ഫോൺ നമ്പറുകളുടെ മുഴുവൻ പട്ടിക.", "isCorrect": false },
      { "text": "വാർഷിക ബഡ്ജറ്റ് വിവരങ്ങൾ.", "isCorrect": false },
      { "text": "സംസ്ഥാന സ്കൂൾ കലോത്സവത്തിലെ മികച്ച സൃഷ്ടികൾ.", "isCorrect": true },
      { "text": "ദിവസേനയുള്ള ക്ലാസ് ടൈം ടേബിളുകൾ.", "isCorrect": false }
    ]
  },
  {
    "question": "സ്കൂൾവിക്കിയിൽ ഒരു പുതിയ അംഗത്വം സൃഷ്ടിച്ച ശേഷം ഉടൻ ചെയ്യേണ്ട പ്രവർത്തനം എന്താണ്?",
    "options": [
      { "text": "രജിസ്റ്റർ ചെയ്ത ഇ-മെയിൽ വഴി അക്കൗണ്ട് വെരിഫൈ ചെയ്യുക (സ്ഥിരീകരിക്കുക).", "isCorrect": true },
      { "text": "ഒരു പാസ്പോർട്ട് സൈസ് ഫോട്ടോ സമർപ്പിക്കുക.", "isCorrect": false },
      { "text": "സ്കൂൾവിക്കി ഓഫീസിൽ വിളിക്കുക.", "isCorrect": false },
      { "text": "ഒരു സബ്‌സ്‌ക്രിപ്‌ഷൻ ഫീസ് അടയ്ക്കുക.", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു ഇ-മെയിൽ വിലാസത്തിൽ, യൂസർനെയിമും സേവന ദാതാവിൻ്റെ ഡൊമൈൻ നാമവും വേർതിരിക്കുന്നത് ഏത് ചിഹ്നം ഉപയോഗിച്ചാണ്?",
    "options": [
      { "text": "$", "isCorrect": false },
      { "text": "#", "isCorrect": false },
      { "text": "%", "isCorrect": false },
      { "text": "@", "isCorrect": true }
    ]
  },
  {
    "question": "നന്മ ആഗ്രഹിക്കുന്നവരുടെ കൂട്ടായ പരിശ്രമം, അധ്യായത്തിൻ്റെ ആമുഖമനുസരിച്ച്, എന്തിനാണ് പ്രാഥമിക കാരണം?",
    "options": [
      { "text": "ഇ-മെയിലിൻ്റെ വികസനം.", "isCorrect": false },
      { "text": "മനുഷ്യരാശി ഇന്ന് നേടിയ പുരോഗതി.", "isCorrect": true },
      { "text": "കോപ്പിലെഫ്റ്റിൻ്റെ നിലനിൽപ്പ്.", "isCorrect": false },
      { "text": "സോഷ്യൽ മീഡിയയുടെ സൃഷ്ടി.", "isCorrect": false }
    ]
  },
  {
    "question": "സ്കൂൾവിക്കിയുടെ ഹോംപേജിൽ ഒരു പ്രത്യേക സ്കൂളിൻ്റെ പേജിലേക്ക് എങ്ങനെ എത്തിച്ചേരാൻ കഴിയും?",
    "options": [
      { "text": "സെർച്ച് ബോക്സിൽ സ്കൂളിൻ്റെ പേരോ കോഡോ ടൈപ്പ് ചെയ്യുന്നതിലൂടെ.", "isCorrect": true },
      { "text": "ഒരു മാപ്പിൽ ക്ലിക്ക് ചെയ്യുന്നതിലൂടെ.", "isCorrect": false },
      { "text": "'എഴുത്തുകളരി' എന്ന ലിങ്ക് ഉപയോഗിക്കുന്നതിലൂടെ.", "isCorrect": false },
      { "text": "ഒരു ക്യുആർ കോഡ് സ്കാൻ ചെയ്യുന്നതിലൂടെ.", "isCorrect": false }
    ]
  },
  {
    "question": "സ്കൂൾവിക്കിയിൽ ഒരു സ്കൂളിൻ്റെ പേജിൽ കാണാൻ കഴിയുന്ന ഒരു വിവരത്തിന് ഉദാഹരണം എന്താണ്?",
    "options": [
      { "text": "കഴിഞ്ഞ പത്ത് വർഷത്തെ സാമ്പത്തിക സ്റ്റേറ്റ്‌മെൻ്റുകൾ.", "isCorrect": false },
      { "text": "സ്കൂൾ കാൻ്റീനിലെ ദൈനംദിന മെനു.", "isCorrect": false },
      { "text": "പ്രിൻസിപ്പലിൻ്റെ വീടിൻ്റെ വിലാസം.", "isCorrect": false },
      { "text": "സ്കൂൾ സ്ഥാപിച്ച വർഷം.", "isCorrect": true }
    ]
  },
  {
    "question": "വൈകല്യമുള്ള ഉപയോക്താക്കളെ ഡിജിറ്റൽ ഉള്ളടക്കം ആക്സസ് ചെയ്യാൻ സഹായിക്കുന്ന ഒരു അസിസ്റ്റീവ് ടൂളിന് (Assistive Tool) ഉദാഹരണം ഏതാണ്?",
    "options": [
      { "text": "ഒരു സ്‌ക്രീൻ റീഡർ (screen reader).", "isCorrect": true },
      { "text": "ഒരു സാധാരണ സ്പ്രെഡ്ഷീറ്റ് പ്രോഗ്രാം.", "isCorrect": false },
      { "text": "ഒരു ഗെയിം എഞ്ചിൻ.", "isCorrect": false },
      { "text": "ഒരു വീഡിയോ എഡിറ്റിംഗ് ആപ്ലിക്കേഷൻ.", "isCorrect": false }
    ]
  },
  {
    "question": "വിശ്വസ്ത സ്ഥാപനമായി വേഷമിട്ട് പാസ്‌വേഡുകൾ പോലുള്ള സെൻസിറ്റീവ് വിവരങ്ങൾ നൽകാൻ ഇരകളെ കബളിപ്പിക്കുന്ന സൈബർ കുറ്റകൃത്യം ഏതാണ്?",
    "options": [
      { "text": "ട്രോളിംഗ് (Trolling)", "isCorrect": false },
      { "text": "ഫിഷിംഗ് (Phishing)", "isCorrect": true },
      { "text": "വിക്കി നശീകരണം (Wiki Vandalism)", "isCorrect": false },
      { "text": "സൈബർ സ്റ്റാക്കിംഗ്", "isCorrect": false }
    ]
  },
  {
    "question": "വിക്കി എഡിറ്ററിൽ, മാർക്കപ്പ് ഭാഷ ഉപയോഗിച്ച് ഒരു ടെക്സ്റ്റ് എങ്ങനെ ബോൾഡ് (കട്ടിയുള്ള അക്ഷരങ്ങൾ) ആക്കാം?",
    "options": [
      { "text": "ടെക്സ്റ്റിന് ചുറ്റും `**` ചേർക്കുന്നതിലൂടെ.", "isCorrect": false },
      { "text": "ടെക്സ്റ്റിന് ചുറ്റും `<b>` ചേർക്കുന്നതിലൂടെ.", "isCorrect": false },
      { "text": "ടെക്സ്റ്റിന് ചുറ്റും `'''` (മൂന്ന് അപ്പോസ്ട്രോഫികൾ) ചേർക്കുന്നതിലൂടെ.", "isCorrect": true },
      { "text": "ടെക്സ്റ്റിന് ചുറ്റും `<u>` ചേർക്കുന്നതിലൂടെ.", "isCorrect": false }
    ]
  },
  {
    "question": "വിക്കി എഡിറ്ററിൽ, മാർക്കപ്പ് ഭാഷ ഉപയോഗിച്ച് ഒരു ടെക്സ്റ്റ് എങ്ങനെ ഇറ്റാലിക് (ചരിഞ്ഞ അക്ഷരങ്ങൾ) ആക്കാം?",
    "options": [
      { "text": "ടെക്സ്റ്റിന് ചുറ്റും `<i>` ചേർക്കുന്നതിലൂടെ.", "isCorrect": false },
      { "text": "ടെക്സ്റ്റിന് ചുറ്റും `//` ചേർക്കുന്നതിലൂടെ.", "isCorrect": false },
      { "text": "ടെക്സ്റ്റിന് ചുറ്റും `''` (രണ്ട് അപ്പോസ്ട്രോഫികൾ) ചേർക്കുന്നതിലൂടെ.", "isCorrect": true },
      { "text": "ടെക്സ്റ്റിന് ചുറ്റും `*` ചേർക്കുന്നതിലൂടെ.", "isCorrect": false }
    ]
  },
  {
    "question": "വിക്കിപീഡിയ എഡിറ്റ് ചെയ്യാൻ അംഗത്വത്തോടെ ലോഗിൻ ചെയ്യുന്നതിൻ്റെ പ്രാഥമിക പ്രയോജനം എന്താണ്, ലോഗിൻ ചെയ്യാതെ എഡിറ്റ് ചെയ്യുന്നതിൽ നിന്ന് ഇത് എങ്ങനെ വ്യത്യാസപ്പെട്ടിരിക്കുന്നു?",
    "options": [
      { "text": "ഇത് ഉപയോക്താവിൻ്റെ ഐ.പി. വിലാസം അഡ്മിനിസ്ട്രേറ്റർമാരിൽ നിന്ന് മറയ്ക്കുന്നു.", "isCorrect": false },
      { "text": "ഇത് കൂടുതൽ അഭികാമ്യമായതും ഉത്തരവാദിത്തമുള്ളതുമായ സമീപനമായി കണക്കാക്കപ്പെടുന്നു.", "isCorrect": true },
      { "text": "ഇത് ഉപയോക്താവിന് അവരുടെ സംഭാവനകൾക്ക് പണം നേടാൻ അനുവദിക്കുന്നു.", "isCorrect": false },
      { "text": "ഏതെങ്കിലും തിരുത്തലുകൾ വരുത്താനുള്ള ഏക മാർഗ്ഗമാണിത്.", "isCorrect": false }
    ]
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
