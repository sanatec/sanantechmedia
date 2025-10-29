document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "സൈബർ ഇടങ്ങളിൽ അതിവേഗം പ്രചരിക്കുന്ന എന്തും അറിയപ്പെടുന്ന പേര് എന്താണ്?",
    "options": [
      { "text": "Propaganda", "isCorrect": false },
      { "text": "Spam", "isCorrect": false },
      { "text": "Protocol", "isCorrect": false },
      { "text": "Viral", "isCorrect": true }
    ]
  },
  {
    "question": "ഒരു സാംസ്കാരിക ആശയം അല്ലെങ്കിൽ ചിത്രം വൈറൽ ആവുന്നതിനെ എന്ത് വിളിക്കുന്നു?",
    "options": [
      { "text": "Meme", "isCorrect": true },
      { "text": "GIF", "isCorrect": false },
      { "text": "Blog", "isCorrect": false },
      { "text": "Asset", "isCorrect": false }
    ]
  },
  {
    "question": "'കീബോർഡ് ക്യാറ്റ്' എന്ന പേരിൽ ഇൻ്റർനെറ്റ് സെൻസേഷനായ പൂച്ചയുടെ പേര് എന്തായിരുന്നു?",
    "options": [
      { "text": "Tiger", "isCorrect": false },
      { "text": "Fatspo", "isCorrect": true },
      { "text": "Moo Deng", "isCorrect": false },
      { "text": "Garfield", "isCorrect": false }
    ]
  },
  {
    "question": "അധ്യായത്തിൽ സൂചിപ്പിച്ചതും ഇപ്പോൾ ഒരു പ്രശസ്തമായ വീഡിയോ ഗെയിം തീം ശേഖരത്തിൻ്റെ ഭാഗമായതുമായ മൃഗം ഏതാണ്?",
    "options": [
      { "text": "പൂച്ച (Cat)", "isCorrect": false },
      { "text": "ഹിപ്പോ (Moo Deng)", "isCorrect": true },
      { "text": "മുയൽ (Rabbit)", "isCorrect": false },
      { "text": "പക്ഷി (Bird)", "isCorrect": false }
    ]
  },
  {
    "question": "ലോകമെമ്പാടുമുള്ള കോടിക്കണക്കിന് കമ്പ്യൂട്ടറുകളെ ബന്ധിപ്പിക്കുന്ന ഒരു വലിയ നെറ്റ്വർക്കിനെ ലളിതമായി എന്ത് വിളിക്കാം?",
    "options": [
      { "text": "LAN", "isCorrect": false },
      { "text": "WAN", "isCorrect": false },
      { "text": "Intranet", "isCorrect": false },
      { "text": "Internet", "isCorrect": true }
    ]
  },
  {
    "question": "ഇൻ്റർനെറ്റിൻ്റെ ഉത്ഭവത്തിന് കാരണമായ യുദ്ധാനന്തരമുള്ള രണ്ട് രാജ്യങ്ങൾ തമ്മിലുള്ള മത്സരം ഏത് പേരിലാണ് അറിയപ്പെടുന്നത്?",
    "options": [
      { "text": "ഒന്നാം ലോകമഹായുദ്ധം", "isCorrect": false },
      { "text": "വിവരയുദ്ധം", "isCorrect": false },
      { "text": "ശീതയുദ്ധം (Cold War)", "isCorrect": true },
      { "text": "രണ്ടാം ലോകമഹായുദ്ധം", "isCorrect": false }
    ]
  },
  {
    "question": "ആദ്യത്തെ പൊതു കമ്പ്യൂട്ടർ ശൃംഖലയായി കണക്കാക്കുന്നത് ഏതിനെയാണ്?",
    "options": [
      { "text": "WWW", "isCorrect": false },
      { "text": "TCP/IP", "isCorrect": false },
      { "text": "Ethernet", "isCorrect": false },
      { "text": "ARPANET", "isCorrect": true }
    ]
  },
  {
    "question": "**ARPANET** എന്നതിൻ്റെ പൂർണ്ണരൂപം എന്താണ്?",
    "options": [
      { "text": "Advanced Resource Protocol Agency Network", "isCorrect": false },
      { "text": "American Research Portal Agency Network", "isCorrect": false },
      { "text": "Advanced Research Projects Agency Network", "isCorrect": true },
      { "text": "American Resource Protocol Access Network", "isCorrect": false }
    ]
  },
  {
    "question": "**World Wide Web (WWW)** എന്ന ആശയം മുന്നോട്ടുവച്ച വ്യക്തി ആരാണ്?",
    "options": [
      { "text": "Vint Cerf", "isCorrect": false },
      { "text": "Ray Tomlinson", "isCorrect": false },
      { "text": "Bob Kahn", "isCorrect": false },
      { "text": "Tim Berners-Lee", "isCorrect": true }
    ]
  },
  {
    "question": "ഇമെയിൽ (email) വികസിപ്പിച്ചെടുത്ത വ്യക്തി ആരാണ്?",
    "options": [
      { "text": "Tim Berners-Lee", "isCorrect": false },
      { "text": "Ray Tomlinson", "isCorrect": true },
      { "text": "Bill Gates", "isCorrect": false },
      { "text": "Larry Page", "isCorrect": false }
    ]
  },
  {
    "question": "ആദ്യത്തെ വെബ് ബ്രൗസറായ **Mosaic** പുറത്തിറങ്ങിയ വർഷം ഏതാണ്?",
    "options": [
      { "text": "1989", "isCorrect": false },
      { "text": "1991", "isCorrect": false },
      { "text": "1993", "isCorrect": true },
      { "text": "1995", "isCorrect": false }
    ]
  },
  {
    "question": "ഇന്ത്യയിൽ ഇൻ്റർനെറ്റ് പൊതുവായി ഉപയോഗിക്കാൻ തുടങ്ങിയ വർഷം?",
    "options": [
      { "text": "1986", "isCorrect": false },
      { "text": "1995", "isCorrect": true },
      { "text": "1998", "isCorrect": false },
      { "text": "2000", "isCorrect": false }
    ]
  },
  {
    "question": "ഇന്ത്യയിൽ **വിവരസാങ്കേതിക നിയമം (IT Act)** നിലവിൽ വന്ന വർഷം?",
    "options": [
      { "text": "1995", "isCorrect": false },
      { "text": "1998", "isCorrect": false },
      { "text": "2000", "isCorrect": true },
      { "text": "2002", "isCorrect": false }
    ]
  },
  {
    "question": "കേരളത്തിൽ **അക്ഷയ പ്രൊജക്റ്റ്** ആരംഭിച്ച വർഷം?",
    "options": [
      { "text": "2000", "isCorrect": false },
      { "text": "2002", "isCorrect": true },
      { "text": "2016", "isCorrect": false },
      { "text": "2021", "isCorrect": false }
    ]
  },
  {
    "question": "സ്മാർട്ട്ഫോണുകൾ ഉപയോഗിച്ച് പേയ്‌മെൻ്റുകൾ നടത്തുന്നതിനായി 2016-ൽ ഇന്ത്യാ ഗവൺമെൻ്റ് ആരംഭിച്ച സംവിധാനം ഏതാണ്?",
    "options": [
      { "text": "IT Act", "isCorrect": false },
      { "text": "Digital Wallet", "isCorrect": false },
      { "text": "Unified Payment Interface (UPI)", "isCorrect": true },
      { "text": "eSIM", "isCorrect": false }
    ]
  },
  {
    "question": "ഇൻ്റർനെറ്റ് പൗരൻ്റെ അവകാശമായി പ്രഖ്യാപിക്കുന്നതിനായി കേരള സർക്കാർ 2021-ൽ ആരംഭിച്ച പദ്ധതി?",
    "options": [
      { "text": "Digital Kerala", "isCorrect": false },
      { "text": "Akshaya 2.0", "isCorrect": false },
      { "text": "K Phone", "isCorrect": true },
      { "text": "Connect Kerala", "isCorrect": false }
    ]
  },
  {
    "question": "ChatGPT, Gemini, Deepseek തുടങ്ങിയ ടൂളുകൾ ഇൻ്റർനെറ്റിൽ വിപ്ലവം സൃഷ്ടിക്കാൻ കാരണം, അവ ഏത് സാങ്കേതികവിദ്യയെ അടിസ്ഥാനമാക്കിയുള്ളതാണ്?",
    "options": [
      { "text": "5G", "isCorrect": false },
      { "text": "Cloud Computing", "isCorrect": false },
      { "text": "Artificial Intelligence (AI)", "isCorrect": true },
      { "text": "IoT", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു കമ്പ്യൂട്ടർ ശൃംഖലയിൽ (Network) ബന്ധിപ്പിച്ചിട്ടുള്ള ഓരോ ഉപകരണങ്ങളെയും (കമ്പ്യൂട്ടർ, സ്മാർട്ട്ഫോൺ) എന്ത് വിളിക്കുന്നു?",
    "options": [
      { "text": "Server", "isCorrect": false },
      { "text": "Client", "isCorrect": false },
      { "text": "Hub", "isCorrect": false },
      { "text": "Node", "isCorrect": true }
    ]
  },
  {
    "question": "നോഡുകൾക്കിടയിൽ ആശയവിനിമയം നടത്താനും ഫയലുകളും വിഭവങ്ങളും പങ്കിടാനും ഉപയോഗിക്കുന്ന പ്രത്യേക നിയമങ്ങളെയും സാങ്കേതികവിദ്യകളെയും എന്ത് വിളിക്കുന്നു?",
    "options": [
      { "text": "Firewall", "isCorrect": false },
      { "text": "Network Protocol", "isCorrect": true },
      { "text": "IP Address", "isCorrect": false },
      { "text": "Modem", "isCorrect": false }
    ]
  },
  {
    "question": "തിരയൽ പദങ്ങൾ പരിശോധിച്ച്, ഉപയോക്താവിൻ്റെ ലക്ഷ്യം മനസ്സിലാക്കാൻ തിരയൽ എഞ്ചിനുകളെ സഹായിക്കുന്ന പ്രക്രിയ?",
    "options": [
      { "text": "Search Snipet", "isCorrect": false },
      { "text": "Intent Recognition", "isCorrect": true },
      { "text": "Web Crawling", "isCorrect": false },
      { "text": "Clustering", "isCorrect": false }
    ]
  },
  {
    "question": "വിവിധ വെബ്സൈറ്റുകളിൽ നിന്ന് വിവരങ്ങൾ ശേഖരിച്ച്, തിരയൽ പദത്തിനനുസരിച്ച് സംയോജിപ്പിച്ച് ആദ്യ ഫലമായി പ്രദർശിപ്പിക്കുന്ന ഉള്ളടക്കം എന്ത് പേരിൽ അറിയപ്പെടുന്നു?",
    "options": [
      { "text": "Search Snippets", "isCorrect": true },
      { "text": "Hyperlinks", "isCorrect": false },
      { "text": "Web Pages", "isCorrect": false },
      { "text": "Search Queries", "isCorrect": false }
    ]
  },
  {
    "question": "തിരയൽ ഫലങ്ങളിൽ നിന്ന് ചില പ്രത്യേക വാക്കുകളുള്ള പേജുകളെ **ഒഴിവാക്കാൻ** (Exclude) തിരയൽ വാചകത്തിന് മുന്നിൽ ഉപയോഗിക്കുന്ന ചിഹ്നം ഏതാണ്?",
    "options": [
      { "text": "AND", "isCorrect": false },
      { "text": "OR", "isCorrect": false },
      { "text": "-", "isCorrect": true },
      { "text": "\"" , "isCorrect": false }
    ]
  },
  {
    "question": "തിരയൽ വാചകം **ഉദ്ധരണി ചിഹ്നങ്ങളിൽ (“”)** നൽകുന്നത് എന്തിനാണ്?",
    "options": [
      { "text": "വാക്കുകളുടെ അക്ഷരത്തെറ്റുകൾ ഒഴിവാക്കാൻ", "isCorrect": false },
      { "text": "കൃത്യമായ വാചകം ഉൾപ്പെടുന്ന പേജുകൾ മാത്രം ഉൾപ്പെടുത്താൻ", "isCorrect": true },
      { "text": "ചിത്രങ്ങൾ മാത്രം തിരയാൻ", "isCorrect": false },
      { "text": "തിരയൽ വേഗത്തിലാക്കാൻ", "isCorrect": false }
    ]
  },
  {
    "question": "ഇൻ്റർനെറ്റിൽ പ്രസിദ്ധീകരിക്കുന്ന ചിത്രങ്ങൾ, വീഡിയോകൾ, സോഫ്റ്റ്‌വെയറുകൾ തുടങ്ങിയവയുടെ ഉപയോഗ അവകാശങ്ങളെ നിർവചിക്കുന്ന നിയമപരമായ അവകാശം ഏതാണ്?",
    "options": [
      { "text": "Content Authority", "isCorrect": false },
      { "text": "Digital Rights", "isCorrect": false },
      { "text": "Intellectual Property Rights", "isCorrect": true },
      { "text": "Internet Security", "isCorrect": false }
    ]
  },
  {
    "question": "സ്രഷ്ടാവിൻ്റെ സൃഷ്ടിക്ക് നിയമപരമായ സംരക്ഷണം നൽകുകയും വിതരണം ചെയ്യാനും പുനഃസൃഷ്ടിക്കാനുമുള്ള **അവകാശം ഉടമയ്ക്ക് മാത്രം** നൽകുകയും ചെയ്യുന്ന അവകാശം ഏതാണ്?",
    "options": [
      { "text": "Copyleft", "isCorrect": false },
      { "text": "Fair Use", "isCorrect": false },
      { "text": "Proprietary", "isCorrect": false },
      { "text": "Copyright", "isCorrect": true }
    ]
  },
  {
    "question": "**All Rights Reserved** എന്നത് എന്തിനെ സൂചിപ്പിക്കുന്ന പ്രസ്താവനയാണ്?",
    "options": [
      { "text": "ഫെയർ യൂസ് അവകാശം", "isCorrect": false },
      { "text": "കോപ്പിലെഫ്റ്റ് അവകാശം", "isCorrect": false },
      { "text": "വിവിധ ഉപയോഗ അവകാശങ്ങൾ", "isCorrect": false },
      { "text": "പൂർണ്ണ പകർപ്പവകാശം (Copyright)", "isCorrect": true }
    ]
  },
  {
    "question": "ഉപയോക്താക്കൾക്ക് സൃഷ്ടികൾ **സൗജന്യമായി ഉപയോഗിക്കാനും പരിഷ്ക്കരിക്കാനും വിതരണം ചെയ്യാനും** സ്വാതന്ത്ര്യം നൽകുന്ന ലൈസൻസിംഗ് സമീപനം ഏതാണ്?",
    "options": [
      { "text": "Proprietary", "isCorrect": false },
      { "text": "Copyright", "isCorrect": false },
      { "text": "Fair Use", "isCorrect": false },
      { "text": "Copyleft", "isCorrect": true }
    ]
  },
  {
    "question": "ഓപ്പൺ സോഴ്‌സ് പ്രസ്ഥാനത്തിൻ്റെ (Open Source Movement) ഒരു പ്രധാന തത്വം ഏതാണ്?",
    "options": [
      { "text": "Copyright", "isCorrect": false },
      { "text": "Proprietary", "isCorrect": false },
      { "text": "Creative Commons", "isCorrect": false },
      { "text": "Copyleft", "isCorrect": true }
    ]
  },
  {
    "question": "സ്രഷ്ടാക്കൾക്ക് അവരുടെ സൃഷ്ടികൾ സൗജന്യമായി ഉപയോഗിക്കാനും വിതരണം ചെയ്യാനും അനുമതി നൽകുന്ന ലൈസൻസ്, എന്നാൽ **കടപ്പാട് നിർബന്ധമാക്കുകയും വാണിജ്യപരമായ ഉപയോഗം തടയുകയും** ചെയ്യുന്ന ലൈസൻസ് ഏതാണ്?",
    "options": [
      { "text": "Copyleft", "isCorrect": false },
      { "text": "Proprietary", "isCorrect": false },
      { "text": "Creative Commons License", "isCorrect": true },
      { "text": "Trade Mark", "isCorrect": false }
    ]
  },
  {
    "question": "നിയമപരമായ നിയന്ത്രണങ്ങൾക്ക് വിധേയമായി, പകർപ്പവകാശമുള്ള മെറ്റീരിയലുകൾ **വിദ്യാഭ്യാസ, നിരൂപണ, ഗവേഷണ** ആവശ്യങ്ങൾക്കായി പരിമിതമായി ഉപയോഗിക്കാൻ അനുവദിക്കുന്ന അവകാശം ഏതാണ്?",
    "options": [
      { "text": "Creative Commons", "isCorrect": false },
      { "text": "Fair Use", "isCorrect": true },
      { "text": "Copyleft", "isCorrect": false },
      { "text": "Public Domain", "isCorrect": false }
    ]
  },
  {
    "question": "പകർപ്പവകാശമുള്ള ഒരു സിനിമയുടെ **പൈറേറ്റഡ് പതിപ്പ് കാണുന്നതും പങ്കുവെക്കുന്നതും** ഏത് നിയമപ്രകാരം കുറ്റകരമാണ്?",
    "options": [
      { "text": "IT Act", "isCorrect": false },
      { "text": "Cyber Crime Act", "isCorrect": false },
      { "text": "Copyright Law", "isCorrect": true },
      { "text": "Trademark Law", "isCorrect": false }
    ]
  },
  {
    "question": "ഗൂഗിൾ പോലുള്ള പ്രധാന തിരയൽ എഞ്ചിനുകളിൽ ഒരു ചിത്രത്തിനായി തിരയുമ്പോൾ അതിൻ്റെ **ലൈസൻസ്** പരിശോധിക്കാൻ ഉപയോഗിക്കുന്ന ടൂൾ ഓപ്ഷൻ ഏതാണ്?",
    "options": [
      { "text": "Settings", "isCorrect": false },
      { "text": "Image Type", "isCorrect": false },
      { "text": "Usage Rights", "isCorrect": true },
      { "text": "Advanced Search", "isCorrect": false }
    ]
  },
  {
    "question": "വെബ്ബിൻ്റെ പരിണാമത്തിലെ **Web 1.0** തലമുറ ഏത് പേരിലാണ് അറിയപ്പെടുന്നത്?",
    "options": [
      { "text": "Interactive Web", "isCorrect": false },
      { "text": "Semantic Web", "isCorrect": false },
      { "text": "Intelligent Web", "isCorrect": false },
      { "text": "Static Web", "isCorrect": true }
    ]
  },
  {
    "question": "**Web 1.0** വെബ്സൈറ്റുകളുടെ പ്രധാന സവിശേഷത എന്തായിരുന്നു?",
    "options": [
      { "text": "യൂസർ ജനറേറ്റഡ് ഉള്ളടക്കം", "isCorrect": false },
      { "text": "പരിമിതമായ ഇൻ്ററാക്ഷൻ (Limited Interaction)", "isCorrect": true },
      { "text": "AI അടിസ്ഥാനമാക്കിയുള്ള സേവനങ്ങൾ", "isCorrect": false },
      { "text": "മെറ്റാവേർസ്", "isCorrect": false }
    ]
  },
  {
    "question": "ഡൈനാമിക് വെബ്സൈറ്റുകൾ, ഉപയോക്താവ് സൃഷ്ടിക്കുന്ന ഉള്ളടക്കം, സോഷ്യൽ മീഡിയ എന്നിവയുടെ ആവിർഭാവം ഏത് വെബ് തലമുറയുടെ സവിശേഷതകളാണ്?",
    "options": [
      { "text": "Web 1.0", "isCorrect": false },
      { "text": "Web 2.0", "isCorrect": true },
      { "text": "Web 3.0", "isCorrect": false },
      { "text": "Web 4.0", "isCorrect": false }
    ]
  },
  {
    "question": "**Web 3.0** വെബ്ബിൻ്റെ പരിണാമത്തിൽ ഏത് പേരിലാണ് അറിയപ്പെടുന്നത്?",
    "options": [
      { "text": "Static Web", "isCorrect": false },
      { "text": "Interactive Web", "isCorrect": false },
      { "text": "Semantic Web", "isCorrect": true },
      { "text": "Intelligent Web", "isCorrect": false }
    ]
  },
  {
    "question": "വിർച്വൽ, ഓഗ്മെൻ്റഡ് റിയാലിറ്റി, IoT, മെറ്റാവേർസ് എന്നിവയ്ക്ക് ഊന്നൽ നൽകുന്ന വെബ്ബിൻ്റെ പരിണാമത്തിലെ തലമുറ ഏതാണ്?",
    "options": [
      { "text": "Web 1.0", "isCorrect": false },
      { "text": "Web 2.0", "isCorrect": false },
      { "text": "Web 3.0", "isCorrect": false },
      { "text": "Web 4.0", "isCorrect": true }
    ]
  },
  {
    "question": "ഡിജിറ്റൽ സിം കാർഡ് ഉപകരണത്തിൽ നേരിട്ട് നിർമ്മിക്കപ്പെടുന്ന സംവിധാനം ഏതാണ്?",
    "options": [
      { "text": "OTG", "isCorrect": false },
      { "text": "IoT", "isCorrect": false },
      { "text": "LAN", "isCorrect": false },
      { "text": "eSIM", "isCorrect": true }
    ]
  },
  {
    "question": "മൊബൈൽ സാങ്കേതികവിദ്യയുടെ ഏത് തലമുറയിലാണ് **വോയിസ് കോളുകൾ, SMS, MMS** എന്നിവയ്ക്ക് പ്രാധാന്യം നൽകിയിരുന്നത്?",
    "options": [
      { "text": "1G", "isCorrect": false },
      { "text": "2G", "isCorrect": true },
      { "text": "3G", "isCorrect": false },
      { "text": "4G", "isCorrect": false }
    ]
  },
  {
    "question": "മൊബൈൽ ഇൻ്റർനെറ്റിനായി ഡാറ്റാ വേഗത വർധിച്ച മൊബൈൽ സാങ്കേതികവിദ്യയുടെ തലമുറ ഏതാണ്?",
    "options": [
      { "text": "2G", "isCorrect": false },
      { "text": "3G", "isCorrect": true },
      { "text": "4G", "isCorrect": false },
      { "text": "5G", "isCorrect": false }
    ]
  },
  {
    "question": "HD വീഡിയോ സ്ട്രീമിംഗിനും ഓൺലൈൻ ഗെയിമിംഗിനുമായി അതിവേഗ ഡാറ്റ നൽകുന്ന മൊബൈൽ സാങ്കേതികവിദ്യയുടെ തലമുറ ഏതാണ്?",
    "options": [
      { "text": "3G", "isCorrect": false },
      { "text": "4G", "isCorrect": true },
      { "text": "5G", "isCorrect": false },
      { "text": "6G", "isCorrect": false }
    ]
  },
  {
    "question": "ഇൻ്റർനെറ്റ് ഓഫ് തിംഗ്സ് (IoT), ഓട്ടോണമസ് വാഹനങ്ങൾ, AR/VR ആപ്ലിക്കേഷനുകൾ എന്നിവയ്ക്കുള്ള പിന്തുണയുമായി ബന്ധപ്പെട്ട മൊബൈൽ സാങ്കേതികവിദ്യയുടെ തലമുറ ഏതാണ്?",
    "options": [
      { "text": "2G", "isCorrect": false },
      { "text": "3G", "isCorrect": false },
      { "text": "4G", "isCorrect": true },
      { "text": "7G", "isCorrect": false }
    ]
  },
  {
    "question": "കാഴ്ച വൈകല്യമുള്ളവർക്കായി, സ്ക്രീനിലെ വാചകങ്ങൾ ഉറക്കെ വായിക്കുന്ന സോഫ്റ്റ്‌വെയറുകൾ ഏത് വിഭാഗത്തിൽപ്പെടുന്നു?",
    "options": [
      { "text": "Screen Magnifier", "isCorrect": false },
      { "text": "Sub title tools", "isCorrect": false },
      { "text": "Screen Reader", "isCorrect": true },
      { "text": "Virtual Assistant", "isCorrect": false }
    ]
  },
  {
    "question": "**Orca, JAWS, NVDA** എന്നിവ ഏത് തരം സഹായ ഉപകരണങ്ങൾക്ക് (Assistive Tools) ഉദാഹരണങ്ങളാണ്?",
    "options": [
      { "text": "Screen Magnifier", "isCorrect": false },
      { "text": "Real-Time Translators", "isCorrect": false },
      { "text": "Screen Reader", "isCorrect": true },
      { "text": "Subtitle Tools", "isCorrect": false }
    ]
  },
  {
    "question": "സ്ക്രീനിലെ ടെക്സ്റ്റുകളും ചിത്രങ്ങളും വലുതാക്കി കാണിക്കുന്നതിനുള്ള സോഫ്റ്റ്‌വെയർ ഏതാണ്?",
    "options": [
      { "text": "Virtual Assistant", "isCorrect": false },
      { "text": "Screen Magnifier", "isCorrect": true },
      { "text": "Screen Reader", "isCorrect": false },
      { "text": "Real-Time Transcriber", "isCorrect": false }
    ]
  },
  {
    "question": "ശ്രവണ വൈകല്യമുള്ളവരെ സഹായിക്കുന്നതിനായി, ഓഡിയോ ഉള്ളടക്കത്തിന് അടിക്കുറിപ്പുകൾ (Captions) നൽകുന്ന സംവിധാനങ്ങൾ ഏതാണ്?",
    "options": [
      { "text": "Screen Reader", "isCorrect": false },
      { "text": "Subtitle Tools", "isCorrect": true },
      { "text": "Screen Magnifier", "isCorrect": false },
      { "text": "Virtual Assistant", "isCorrect": false }
    ]
  },
  {
    "question": "സംസാരമോ വാചകമോ തത്സമയം വിവർത്തനം ചെയ്യാനും (Translate) ലിപ്യന്തരണം (Transcribe) ചെയ്യാനും സഹായിക്കുന്ന ഉപകരണങ്ങൾ ഏതാണ്?",
    "options": [
      { "text": "Descriptive Video Services (DVS)", "isCorrect": false },
      { "text": "Real-Time Translators and Transcribers", "isCorrect": true },
      { "text": "Subtitle Tools", "isCorrect": false },
      { "text": "Screen Reader", "isCorrect": false }
    ]
  },
  {
    "question": "കൃത്രിമ ബുദ്ധിയിൽ (AI) പ്രവർത്തിക്കുകയും അലാറം സജ്ജമാക്കുക, പ്രത്യേക നമ്പറുകളിലേക്ക് വിളിക്കുക, വാർത്തകൾ നൽകുക തുടങ്ങിയ വിവിധ ജോലികൾ ചെയ്യുകയും ചെയ്യുന്ന സോഫ്റ്റ്‌വെയർ ഏതാണ്?",
    "options": [
      { "text": "Assistive Tool", "isCorrect": false },
      { "text": "Network Protocol", "isCorrect": false },
      { "text": "Virtual Assistant", "isCorrect": true },
      { "text": "Search Snippet", "isCorrect": false }
    ]
  },
  {
    "question": "**Amazon Alexa, Apple Siri, Google Assistant** എന്നിവ ഏത് വിഭാഗത്തിൽപ്പെടുന്നവയാണ്?",
    "options": [
      { "text": "Screen Readers", "isCorrect": false },
      { "text": "Operating Systems", "isCorrect": false },
      { "text": "Virtual Assistants", "isCorrect": true },
      { "text": "Web Browsers", "isCorrect": false }
    ]
  },
  {
    "question": "ഇൻ്റർനെറ്റിൻ്റെ സുരക്ഷിതമായ ഉപയോഗത്തിനായി എടുക്കേണ്ട മുൻകരുതലുകളിൽ, പ്രധാനപ്പെട്ടതായി അധ്യായത്തിൽ സൂചിപ്പിക്കുന്നത് ഏതാണ്?",
    "options": [
      { "text": "എപ്പോഴും ഒരേ പാസ്‌വേർഡ് ഉപയോഗിക്കുക", "isCorrect": false },
      { "text": "ഓൺലൈനിൽ കാണുന്നതെല്ലാം കണ്ണടച്ച് വിശ്വസിക്കുക", "isCorrect": false },
      { "text": "പാസ്‌വേഡുകളും OTP-കളും മറ്റുള്ളവരുമായി പങ്കിടുക", "isCorrect": false },
      { "text": "സോഷ്യൽ മീഡിയാ ഉപയോഗത്തിൽ അതീവ ശ്രദ്ധ പുലർത്തുക", "isCorrect": true }
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
