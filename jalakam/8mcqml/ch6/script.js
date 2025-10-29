document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "യന്ത്ര പഠനം (Machine Learning - ML) ഏത് ശാസ്ത്ര ശാഖയുടെ ഉപവിഭാഗമാണ്?",
    "options": [
      { "text": "ഡീപ് ലേണിംഗ്", "isCorrect": false },
      { "text": "ആർട്ടിഫിഷ്യൽ ഇൻ്റലിജൻസ് (AI)", "isCorrect": true },
      { "text": "കമ്പ്യൂട്ടർ വിഷൻ", "isCorrect": false },
      { "text": "ഡാറ്റാ സയൻസ്", "isCorrect": false }
    ]
  },
  {
    "question": "ആർട്ടിഫിഷ്യൽ ഇൻ്റലിജൻസിൻ്റെ (AI) പ്രാഥമിക ലക്ഷ്യം എന്താണ്?",
    "options": [
      { "text": "മനുഷ്യൻ്റെ ബുദ്ധിശക്തിയെ അനുകരിക്കാൻ കമ്പ്യൂട്ടറുകളെ പ്രാപ്തമാക്കുക", "isCorrect": true },
      { "text": "സ്‌പ്രെഡ്‌ഷീറ്റ് കണക്കുകൂട്ടലുകൾ ലളിതമാക്കുക", "isCorrect": false },
      { "text": "കമ്പ്യൂട്ടർ നെറ്റ്‌വർക്ക് പ്രോട്ടോക്കോളുകൾ കൈകാര്യം ചെയ്യുക", "isCorrect": false },
      { "text": "ഒരു ഡാറ്റാബേസിൽ വിവരങ്ങൾ സംഭരിക്കുക", "isCorrect": false }
    ]
  },
  {
    "question": "ഡാറ്റയിലെ എന്ത് തിരിച്ചറിഞ്ഞാണ് യന്ത്ര പഠനം കമ്പ്യൂട്ടറുകളെ പുതിയ സാഹചര്യങ്ങളിൽ തീരുമാനങ്ങൾ എടുക്കാൻ പ്രാപ്തമാക്കുന്നത്?",
    "options": [
      { "text": "പ്രോഗ്രാമിംഗ് കോഡ് ഘടനകൾ", "isCorrect": false },
      { "text": "ഹാർഡ്‌വെയർ സവിശേഷതകൾ", "isCorrect": false },
      { "text": "ഡാറ്റയിലെ പാറ്റേണുകൾ", "isCorrect": true },
      { "text": "ഉപയോക്താവ് നിർവചിച്ച അൽഗോരിതങ്ങൾ", "isCorrect": false }
    ]
  },
  {
    "question": "അധ്യായത്തിൽ യന്ത്ര പഠനത്തിൻ്റെ ഒരു ഉദാഹരണമായി നൽകിയിട്ടുള്ള സിസ്റ്റം ഏതാണ്?",
    "options": [
      { "text": "ഉടമയുടെ മുഖം തിരിച്ചറിഞ്ഞ് തുറക്കുന്ന സ്‌ക്രീൻ ലോക്ക്", "isCorrect": true },
      { "text": "ഒരു സാധാരണ കാൽക്കുലേറ്റർ ആപ്പ്", "isCorrect": false },
      { "text": "ഒരു പരമ്പരാഗത വേർഡ് പ്രോസസർ", "isCorrect": false },
      { "text": "ഒരു ഫയൽ കംപ്രഷൻ ടൂൾ", "isCorrect": false }
    ]
  },
  {
    "question": "PictoBlox ഉപയോഗിച്ച് ഒരു മെഷീൻ ലേണിംഗ് മോഡൽ സൃഷ്ടിക്കുന്നതിലെ മൂന്ന് പ്രധാന ഘട്ടങ്ങൾ ഡാറ്റാസെറ്റ് തയ്യാറാക്കൽ, പരിശീലനം (Training) കൂടാതെ മറ്റെന്താണ്?",
    "options": [
      { "text": "ഡീബഗ്ഗിംഗ്", "isCorrect": false },
      { "text": "ക്ലസ്റ്ററിംഗ്", "isCorrect": false },
      { "text": "പരിശോധന (Testing)", "isCorrect": true },
      { "text": "എക്‌സ്‌പോർട്ടിംഗ്", "isCorrect": false }
    ]
  },
  {
    "question": "യന്ത്ര പഠന മോഡലിന് പഠിക്കുന്നതിന് ആവശ്യമായ ഡാറ്റ ശേഖരിക്കുന്നതിനും കൃത്യമായി ചിട്ടപ്പെടുത്തുന്നതിനും ഉള്ള പ്രക്രിയയ്ക്ക് പറയുന്ന പേരെന്താണ്?",
    "options": [
      { "text": "ട്രെയിനിംഗ്", "isCorrect": false },
      { "text": "ടെസ്റ്റിംഗ്", "isCorrect": false },
      { "text": "ഡാറ്റാസെറ്റ് തയ്യാറാക്കൽ (Dataset Preparation)", "isCorrect": true },
      { "text": "ഡാറ്റാ മൈനിംഗ്", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു യന്ത്ര പഠന മോഡലിൻ്റെ കൃത്യതയെ (Accuracy) നേരിട്ട് സ്വാധീനിക്കുന്നത് എന്താണ്?",
    "options": [
      { "text": "കമ്പ്യൂട്ടറിൻ്റെ പ്രോസസർ വേഗത", "isCorrect": false },
      { "text": "മെമ്മറി വലുപ്പം", "isCorrect": false },
      { "text": "ഡാറ്റയുടെ ഗുണമേന്മ", "isCorrect": true },
      { "text": "ഓപ്പറേറ്റിംഗ് സിസ്റ്റം", "isCorrect": false }
    ]
  },
  {
    "question": "മുമ്പ് മോഡലിന് നൽകിയിട്ടില്ലാത്ത പുതിയ ഡാറ്റ ഉപയോഗിച്ച് അതിൻ്റെ പ്രകടനം വിലയിരുത്തുന്ന ML മോഡൽ സൃഷ്ടിക്കലിൻ്റെ ഘട്ടം ഏതാണ്?",
    "options": [
      { "text": "ഡാറ്റാസെറ്റ് തയ്യാറാക്കൽ", "isCorrect": false },
      { "text": "പരിശീലനം (Training)", "isCorrect": false },
      { "text": "പരിശോധന (Testing)", "isCorrect": true },
      { "text": "പ്രെഡിക്ഷൻ", "isCorrect": false }
    ]
  },
  {
    "question": "ഏത് തരം യന്ത്ര പഠനത്തിലാണ് **ലേബൽ ചെയ്ത ഡാറ്റ** (labeled data) ഉപയോഗിച്ച് കമ്പ്യൂട്ടറിനെ പരിശീലിപ്പിക്കുന്നത്, അവിടെ ഇൻപുട്ടും അനുബന്ധ ഔട്ട്പുട്ടും മുൻകൂട്ടി നൽകുന്നു?",
    "options": [
      { "text": "അൺസൂപ്പർവൈസ്ഡ് ലേണിംഗ്", "isCorrect": false },
      { "text": "സൂപ്പർവൈസ്ഡ് ലേണിംഗ്", "isCorrect": true },
      { "text": "റീഇൻഫോഴ്‌സ്‌മെൻ്റ് ലേണിംഗ്", "isCorrect": false },
      { "text": "ഡീപ് ലേണിംഗ്", "isCorrect": false }
    ]
  },
  {
    "question": "സ്വയം **ലേബൽ ചെയ്യാത്ത ഡാറ്റയിൽ** (unlabeled data) മറഞ്ഞിരിക്കുന്ന ബന്ധങ്ങളും പാറ്റേണുകളും കണ്ടെത്താൻ ലക്ഷ്യമിടുന്ന യന്ത്ര പഠന തരം ഏതാണ്?",
    "options": [
      { "text": "അൺസൂപ്പർവൈസ്ഡ് ലേണിംഗ്", "isCorrect": true },
      { "text": "സൂപ്പർവൈസ്ഡ് ലേണിംഗ്", "isCorrect": false },
      { "text": "റീഇൻഫോഴ്‌സ്‌മെൻ്റ് ലേണിംഗ്", "isCorrect": false },
      { "text": "ക്ലസ്റ്ററിംഗ് ലേണിംഗ്", "isCorrect": false }
    ]
  },
  {
    "question": "ശരിയായതും തെറ്റായതുമായ പ്രവർത്തനങ്ങൾ മനസ്സിലാക്കി കമ്പ്യൂട്ടറിന് പ്രതിഫലമോ പിഴയോ (Rewards or Penalties) ലഭിക്കുന്നതിലൂടെ പഠിക്കുന്ന പ്രക്രിയ ഏത് തരം യന്ത്ര പഠനമാണ്?",
    "options": [
      { "text": "അൺസൂപ്പർവൈസ്ഡ് ലേണിംഗ്", "isCorrect": false },
      { "text": "സൂപ്പർവൈസ്ഡ് ലേണിംഗ്", "isCorrect": false },
      { "text": "റീഇൻഫോഴ്‌സ്‌മെൻ്റ് ലേണിംഗ്", "isCorrect": true },
      { "text": "ട്രാൻസ്ഫർ ലേണിംഗ്", "isCorrect": false }
    ]
  },
  {
    "question": "'ഒരു റോബോട്ട് വ്യത്യസ്ത ചലനങ്ങൾ പരീക്ഷിച്ച്, തെറ്റുകൾ തിരുത്തി നടക്കാൻ പഠിക്കുന്നു' എന്ന സാഹചര്യം ഏത് ML വിഭാഗത്തിന് ഉദാഹരണമാണ്?",
    "options": [
      { "text": "സൂപ്പർവൈസ്ഡ് ലേണിംഗ്", "isCorrect": false },
      { "text": "അൺസൂപ്പർവൈസ്ഡ് ലേണിംഗ്", "isCorrect": false },
      { "text": "റീഇൻഫോഴ്‌സ്‌മെൻ്റ് ലേണിംഗ്", "isCorrect": true },
      { "text": "കമ്പ്യൂട്ടർ വിഷൻ", "isCorrect": false }
    ]
  },
  {
    "question": "ഉപയോക്താവിൻ്റെ കേൾവി ചരിത്രത്തെ അടിസ്ഥാനമാക്കി ഒരു ആപ്പ് പാട്ടുകൾ ശുപാർശ ചെയ്യുന്നത് ഏത് സാഹചര്യത്തിന് ഉദാഹരണമാണ്?",
    "options": [
      { "text": "സ്പ്രെഡ്ഷീറ്റുകളിൽ ഫോർമുലകൾ ഉപയോഗിക്കുന്നു", "isCorrect": false },
      { "text": "ഒരു ഡാറ്റാബേസ് ശേഖരിക്കുന്നു", "isCorrect": false },
      { "text": "യന്ത്ര പഠനം ഉപയോഗിക്കുന്നു", "isCorrect": true },
      { "text": "പരസ്യങ്ങൾ പ്രദർശിപ്പിക്കുന്നു", "isCorrect": false }
    ]
  },
  {
    "question": "ആംഗ്യഭാഷാ ചലനങ്ങൾ തിരിച്ചറിയുന്നതിനുള്ള യന്ത്ര പഠന മോഡൽ സൃഷ്ടിക്കാൻ അധ്യായത്തിൽ ഉപയോഗിച്ച സോഫ്റ്റ്‌വെയറിൻ്റെ പേര് എന്താണ്?",
    "options": [
      { "text": "Scratch", "isCorrect": false },
      { "text": "Krita", "isCorrect": false },
      { "text": "PictoBlox", "isCorrect": true },
      { "text": "LMMS", "isCorrect": false }
    ]
  },
  {
    "question": "യന്ത്ര പഠന മോഡലുകൾ സൃഷ്ടിക്കുന്നതിനുള്ള ഏരിയയിലേക്ക് പ്രവേശിക്കാൻ PictoBlox-ൽ ഉപയോഗിക്കുന്ന മെനു ഓപ്ഷൻ ഏതാണ്?",
    "options": [
      { "text": "Edit Menu → Preferences", "isCorrect": false },
      { "text": "Help Menu → Tutorials", "isCorrect": false },
      { "text": "File Menu → Open ML Environment", "isCorrect": true },
      { "text": "Connect Menu → Upload", "isCorrect": false }
    ]
  },
  {
    "question": "PictoBlox Machine Learning Environment-ൽ ലഭ്യമായ Project Type-ൽ ഉൾപ്പെടാത്തത് ഏതാണ്?",
    "options": [
      { "text": "Pose Classifier", "isCorrect": false },
      { "text": "Hand Pose Classifier", "isCorrect": false },
      { "text": "Video Classifier", "isCorrect": true },
      { "text": "Audio Classifier", "isCorrect": false }
    ]
  },
  {
    "question": "കൈ ആംഗ്യങ്ങളെ (ISL അടയാളങ്ങൾ പോലെ) തിരിച്ചറിയാനും തരംതിരിക്കാനും ഒരു മോഡൽ സൃഷ്ടിക്കുന്നതിന് PictoBlox-ൽ ഏത് പ്രോജക്റ്റ് തരം തിരഞ്ഞെടുക്കണം?",
    "options": [
      { "text": "Text Classifier", "isCorrect": false },
      { "text": "Image Classifier", "isCorrect": true },
      { "text": "Numbers (C/R)", "isCorrect": false },
      { "text": "Object Detection", "isCorrect": false }
    ]
  },
  {
    "question": "പൂർണ്ണമായ ഇന്ത്യൻ ആംഗ്യഭാഷാ (ISL) അക്ഷരമാലാ തിരിച്ചറിയലിന് **Hand Pose Classifier** എന്ന PictoBlox സവിശേഷത അനുയോജ്യമല്ലാത്തതിൻ്റെ പരിമിതി എന്താണ്?",
    "options": [
      { "text": "അതിന് അക്കങ്ങൾ മാത്രമേ തിരിച്ചറിയാൻ കഴിയൂ", "isCorrect": false },
      { "text": "ഒരേ സമയം ഒരു കൈ മാത്രമേ തിരിച്ചറിയാൻ കഴിയൂ", "isCorrect": true },
      { "text": "ബ്രിട്ടീഷ് ആംഗ്യഭാഷയിലെ ആംഗ്യങ്ങൾ മാത്രമേ പിന്തുണയ്ക്കുന്നുള്ളൂ", "isCorrect": false },
      { "text": "ഇതിന് പണമടച്ചുള്ള സബ്സ്ക്രിപ്ഷൻ ആവശ്യമാണ്", "isCorrect": false }
    ]
  },
  {
    "question": "ഡാറ്റാസെറ്റ് തയ്യാറാക്കൽ സമയത്ത് ഓരോ ക്ലാസിനും (Category) ചേർക്കേണ്ട സാമ്പിൾ ചിത്രങ്ങളുടെ ശുപാർശിത എണ്ണം എത്രയാണ്?",
    "options": [
      { "text": "10 മുതൽ 50 ചിത്രങ്ങൾ വരെ", "isCorrect": false },
      { "text": "1 മുതൽ 10 ചിത്രങ്ങൾ വരെ", "isCorrect": false },
      { "text": "500 മുതൽ 1000 ചിത്രങ്ങൾ വരെ", "isCorrect": false },
      { "text": "200 മുതൽ 500 ചിത്രങ്ങൾ വരെ", "isCorrect": true }
    ]
  },
  {
    "question": "PictoBlox-ൽ A, B, C എന്നീ അക്ഷരങ്ങൾ തിരിച്ചറിയാനുള്ള മോഡലിന് പരിശീലനം നൽകുമ്പോൾ, A, B, C എന്നിവ കൂടാതെ ആവശ്യമായ അധിക ക്ലാസ് (Category) ഏതാണ്?",
    "options": [
      { "text": "Others", "isCorrect": false },
      { "text": "Background", "isCorrect": false },
      { "text": "None", "isCorrect": true },
      { "text": "Start", "isCorrect": false }
    ]
  },
  {
    "question": "PictoBlox-ലെ Image Classifier പരിശീലന ഇൻ്റർഫേസ് ആദ്യം തുറക്കുമ്പോൾ, സ്ഥിരമായി എത്ര വിഭാഗങ്ങൾ (Classes) ലഭ്യമാണ്?",
    "options": [
      { "text": "നാല് ക്ലാസുകൾ", "isCorrect": false },
      { "text": "മൂന്ന് ക്ലാസുകൾ", "isCorrect": false },
      { "text": "രണ്ട് ക്ലാസുകൾ (Class 1, Class 2)", "isCorrect": true },
      { "text": "ക്ലാസുകളില്ല", "isCorrect": false }
    ]
  },
  {
    "question": "PictoBlox-ൽ, പ്രാഥമിക വിഭാഗങ്ങൾക്കപ്പുറം ഡാറ്റാസെറ്റിനായി അധിക വിഭാഗങ്ങൾ സൃഷ്ടിക്കാൻ ഉപയോഗിക്കുന്ന ബട്ടൺ ഏതാണ്?",
    "options": [
      { "text": "Add Sprite", "isCorrect": false },
      { "text": "Add Costume", "isCorrect": false },
      { "text": "Add Class", "isCorrect": true },
      { "text": "Add Sample", "isCorrect": false }
    ]
  },
  {
    "question": "PictoBlox-ലെ യന്ത്ര പഠന മോഡലിന് പരിശീലനം നൽകാൻ ഉപയോഗിക്കാവുന്നതായി അധ്യായത്തിൽ സൂചിപ്പിക്കുന്ന രണ്ട് പ്രോഗ്രാമിംഗ് ഭാഷകൾ ഏതാണ്?",
    "options": [
      { "text": "HTML ഉം CSS ഉം", "isCorrect": false },
      { "text": "C++ ഉം Java ഉം", "isCorrect": false },
      { "text": "Python ഉം JavaScript ഉം", "isCorrect": true },
      { "text": "Scratch ഉം Block ഉം", "isCorrect": false }
    ]
  },
  {
    "question": "PictoBlox ML വിൻഡോയിലെ **Export Model** ബട്ടൺ എന്തിനാണ് ഉപയോഗിക്കുന്നത്?",
    "options": [
      { "text": "മോഡൽ ഇൻ്റർനെറ്റിൽ അപ്‌ലോഡ് ചെയ്യാൻ", "isCorrect": false },
      { "text": "പരിശീലനം നൽകിയ മോഡൽ ഒരു പുതിയ PictoBlox പ്രോജക്റ്റിലേക്ക് ചേർക്കാൻ", "isCorrect": true },
      { "text": "മോഡലിനെ ടെക്സ്റ്റ് കോഡാക്കി മാറ്റാൻ", "isCorrect": false },
      { "text": "ഡാറ്റാസെറ്റ് മറ്റ് ഉപയോക്താക്കളുമായി പങ്കിടാൻ", "isCorrect": false }
    ]
  },
  {
    "question": "ഇന്ത്യൻ ആംഗ്യഭാഷാ ഗവേഷണത്തിനും പരിശീലനത്തിനുമായി ഇന്ത്യാ ഗവൺമെൻ്റ് സ്ഥാപിച്ച സ്ഥാപനത്തിൻ്റെ പേര് എന്താണ്?",
    "options": [
      { "text": "ASLRT", "isCorrect": false },
      { "text": "AUSLRC", "isCorrect": false },
      { "text": "ISLRTC", "isCorrect": true },
      { "text": "BSLRT", "isCorrect": false }
    ]
  },
  {
    "question": "ഇന്ത്യയിൽ ഉപയോഗിക്കുന്ന ആംഗ്യഭാഷ ഏതാണ്?",
    "options": [
      { "text": "അമേരിക്കൻ ആംഗ്യഭാഷ (ASL)", "isCorrect": false },
      { "text": "ബ്രിട്ടീഷ് ആംഗ്യഭാഷ (BSL)", "isCorrect": false },
      { "text": "ഇന്ത്യൻ ആംഗ്യഭാഷ (ISL)", "isCorrect": true },
      { "text": "ഓസ്‌ട്രേലിയൻ ആംഗ്യഭാഷ (AUSLAN)", "isCorrect": false }
    ]
  },
  {
    "question": "പരിശീലനത്തിന് ശേഷം ഒരു യന്ത്ര പഠന മോഡലിൻ്റെ കാര്യക്ഷമത കുറവാണെങ്കിൽ, കൈയ്യൊപ്പുകൾ കൃത്യമായി തിരിച്ചറിയുന്നത് വരെ ഏത് പ്രവർത്തനം ആവർത്തിക്കണം?",
    "options": [
      { "text": "പുതിയ സ്പ്രൈറ്റുകൾ ചേർക്കുക", "isCorrect": false },
      { "text": "മൊത്തത്തിലുള്ള പരിശീലനവും പരിശോധനയും", "isCorrect": true },
      { "text": "പ്രോഗ്രാമിംഗ് ഭാഷ മാറ്റുക", "isCorrect": false },
      { "text": "കമ്പ്യൂട്ടർ പുനരാരംഭിക്കുക", "isCorrect": false }
    ]
  },
  {
    "question": "അധ്യായത്തിലെ വർഗ്ഗീകരണ പ്രവർത്തനത്തിൽ, Group-A (കൂടുതലും വളഞ്ഞത്) യിലെയും Group-B (കൂടുതലും നേരായത്) യിലെയും പാറ്റേണുകൾ തമ്മിൽ കണ്ടെത്തിയ **സാമ്യത** എന്താണ്?",
    "options": [
      { "text": "അവയിലെല്ലാം സ്പൈറലുകൾ അടങ്ങിയിരിക്കുന്നു", "isCorrect": false },
      { "text": "അവയെല്ലാം കറുപ്പും വെളുപ്പുമാണ്", "isCorrect": true },
      { "text": "അവയ്ക്ക് കൂടുതൽ മൂർച്ചയുള്ള അരികുകളുണ്ട്", "isCorrect": false },
      { "text": "അവയ്‌ക്കെല്ലാം ഒരേ വലുപ്പമാണ്", "isCorrect": false }
    ]
  },
  {
    "question": "Group-A-യിലെ പാറ്റേണുകളിലെ വരകൾ പ്രധാനമായും എങ്ങനെയുള്ളവയായിട്ടാണ് തിരിച്ചറിഞ്ഞത്?",
    "options": [
      { "text": "കൂടുതലും നേരായത്", "isCorrect": false },
      { "text": "കൂടുതലും വളഞ്ഞത്", "isCorrect": true },
      { "text": "കൂടുതലും ഡോട്ടുകളുള്ളത്", "isCorrect": false },
      { "text": "കൂടുതലും തിരശ്ചീനമായത്", "isCorrect": false }
    ]
  },
  {
    "question": "Group-B-യിലെ പാറ്റേണുകളിൽ പ്രധാനമായും കണ്ട സവിശേഷത എന്താണ്?",
    "options": [
      { "text": "കൂടുതൽ സുഗമമായ മാറ്റങ്ങൾ", "isCorrect": false },
      { "text": "കുറഞ്ഞ വരകൾ", "isCorrect": false },
      { "text": "കൂടുതലും നേരായ വരകൾ", "isCorrect": true },
      { "text": "കൂടുതൽ സ്വാഭാവിക രൂപങ്ങൾ", "isCorrect": false }
    ]
  },
  {
    "question": "തയ്യാറാക്കിയ ഡാറ്റാസെറ്റ് ഉപയോഗിച്ച് മോഡലിനെ പഠിപ്പിക്കുന്ന പ്രക്രിയ ഏതാണ്, അവിടെ അത് പാറ്റേണുകൾ തിരിച്ചറിയാനും പ്രവചനങ്ങൾ നടത്താനും പഠിക്കുന്നു?",
    "options": [
      { "text": "ടെസ്റ്റിംഗ്", "isCorrect": false },
      { "text": "ട്രെയിനിംഗ്", "isCorrect": true },
      { "text": "ക്ലീനിംഗ്", "isCorrect": false },
      { "text": "വാലിഡേറ്റിംഗ്", "isCorrect": false }
    ]
  },
  {
    "question": "മനുഷ്യൻ്റെ ഇടപെടൽ ഇല്ലാതെ ഒരു **AI മോഡൽ** എന്താണ് ചെയ്യുന്നത്?",
    "options": [
      { "text": "പ്രോഗ്രാമിംഗ് കോഡ് എഴുതുന്നു", "isCorrect": false },
      { "text": "ഇൻപുട്ട് ഡാറ്റ ശേഖരിക്കുന്നു", "isCorrect": false },
      { "text": "പഠിക്കുകയും പാറ്റേണുകൾ തിരിച്ചറിയുകയും തീരുമാനങ്ങൾ എടുക്കുകയും ചെയ്യുന്നു", "isCorrect": true },
      { "text": "അവസാന ഔട്ട്പുട്ട് എഡിറ്റ് ചെയ്യുന്നു", "isCorrect": false }
    ]
  },
  {
    "question": "അധ്യായത്തിൽ സൃഷ്ടിച്ച ഗെയിമിൽ, ക്യാമറയിൽ കാണിക്കുന്ന കൈയ്യൊപ്പ് പ്രദർശിപ്പിച്ച അക്ഷരവുമായി പൊരുത്തപ്പെട്ടാൽ എന്ത് സംഭവിക്കും?",
    "options": [
      { "text": "ഗെയിം അവസാനിക്കുന്നു", "isCorrect": false },
      { "text": "ഒരു പുതിയ വിൻഡോ തുറക്കുന്നു", "isCorrect": false },
      { "text": "സ്‌ക്രീനിലെ അക്ഷരം (✓) ടിക്ക് ചിഹ്നത്തിലേക്ക് മാറുന്നു", "isCorrect": true },
      { "text": "ക്യാമറ ഓഫ് ആകുന്നു", "isCorrect": false }
    ]
  },
  {
    "question": "എക്സ്-റേ ചിത്രങ്ങളിൽ നിന്ന് രോഗങ്ങൾ കണ്ടെത്താൻ രൂപകൽപ്പന ചെയ്ത ഒരു യന്ത്ര പഠന മോഡലിന് പരിശീലനത്തിനായി എന്ത് ഡാറ്റയാണ് ആവശ്യം?",
    "options": [
      { "text": "രോഗലക്ഷണങ്ങളുള്ള എക്സ്-റേ ചിത്രങ്ങൾ മാത്രം", "isCorrect": false },
      { "text": "രോഗലക്ഷണങ്ങളില്ലാത്ത എക്സ്-റേ ചിത്രങ്ങൾ മാത്രം", "isCorrect": false },
      { "text": "രോഗലക്ഷണങ്ങളോടുകൂടിയതും അല്ലാത്തതുമായ എക്സ്-റേ ചിത്രങ്ങളുടെ ഒരു വലിയ ഡാറ്റാസെറ്റ്", "isCorrect": true },
      { "text": "എക്സ്-റേ സിസ്റ്റങ്ങളുടെ വാചക വിവരണങ്ങൾ", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു വെബ്ക്യാം ഉപയോഗിച്ച് രണ്ട് വ്യത്യസ്ത തരം വസ്തുക്കളെ (പഴുത്തതും പഴുക്കാത്തതുമായ തക്കാളി പോലെ) തരംതിരിക്കാൻ കഴിയുന്ന ഒരു യന്ത്രം സൃഷ്ടിക്കാൻ, PictoBlox-ലെ ഏത് ML സവിശേഷതയാണ് ഉപയോഗിക്കേണ്ടത്?",
    "options": [
      { "text": "Text Classifier", "isCorrect": false },
      { "text": "Audio Classifier", "isCorrect": false },
      { "text": "Image Classifier", "isCorrect": true },
      { "text": "Numbers (C/R)", "isCorrect": false }
    ]
  },
  {
    "question": "PictoBlox-ലെ ISL ഗെയിം ആരംഭിക്കുമ്പോൾ ആദ്യം ചെയ്യേണ്ട പ്രവർത്തനം എന്താണ് (പ്രവർത്തന ഘട്ടങ്ങൾ അനുസരിച്ച്)?",
    "options": [
      { "text": "ഒരു റാൻഡം അക്ഷരം പ്രദർശിപ്പിക്കുന്നു", "isCorrect": false },
      { "text": "ക്യാമറ ഓൺ ആകുന്നു", "isCorrect": true },
      { "text": "കൈയ്യൊപ്പ് വിശകലനം ചെയ്യുന്നു", "isCorrect": false },
      { "text": "പ്രോഗ്രാം പൊരുത്തത്തിനായി പരിശോധിക്കുന്നു", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു ഡാറ്റാസെറ്റിന് ഗുണനിലവാരം കുറവാണെങ്കിൽ, ML മോഡലിൽ ഉണ്ടാകുന്ന സ്വാധീനം എന്തായിരിക്കും?",
    "options": [
      { "text": "മോഡലിന് വേഗത്തിൽ പരിശീലനം നൽകാൻ കഴിയും", "isCorrect": false },
      { "text": "മോഡലിൻ്റെ കൃത്യത കൂടുതലായിരിക്കും", "isCorrect": false },
      { "text": "മോഡലിൻ്റെ കൃത്യത കുറവായിരിക്കും", "isCorrect": true },
      { "text": "മോഡലിന് പരിശോധന ആവശ്യമില്ല", "isCorrect": false }
    ]
  },
  {
    "question": "മെഡിക്കൽ രോഗനിർണയത്തിൽ (ഉദാഹരണത്തിന്, എക്സ്-റേ സംവിധാനങ്ങളിൽ) യന്ത്ര പഠനം സഹായിക്കുന്ന പ്രധാന വഴി എന്താണ്?",
    "options": [
      { "text": "രോഗിയുടെ വിവരങ്ങൾ രേഖപ്പെടുത്തുന്നത് ഓട്ടോമേറ്റ് ചെയ്യുക", "isCorrect": false },
      { "text": "ഡോക്ടർമാരുടെ ആവശ്യം പൂർണ്ണമായും ഇല്ലാതാക്കുക", "isCorrect": false },
      { "text": "മനുഷ്യൻ്റെ പിശക് കുറച്ച് കാര്യക്ഷമതയും കൃത്യതയും മെച്ചപ്പെടുത്തുക", "isCorrect": true },
      { "text": "ആശുപത്രി ഡാറ്റാബേസുകൾ കൈകാര്യം ചെയ്യുക", "isCorrect": false }
    ]
  },
  {
    "question": "പാറ്റേണുകളെ വർഗ്ഗീകരിക്കുന്ന പ്രക്രിയയിൽ, ഒരു മനുഷ്യൻ താൻ പഠിച്ചത് 'ഓർമ്മിക്കുന്നതിന്' സമാനമായ ഘട്ടം ഏതാണ്?",
    "options": [
      { "text": "പാറ്റേണുകളുടെ തനതായ സവിശേഷതകൾ തിരിച്ചറിഞ്ഞു", "isCorrect": false },
      { "text": "പാറ്റേണുകളെ വേർതിരിച്ചറിയാൻ സഹായിക്കുന്ന പ്രത്യേക സവിശേഷതകൾ തിരിച്ചറിഞ്ഞ് അവ ഓർമ്മിച്ചു", "isCorrect": true },
      { "text": "ഓരോ പുതിയ പാറ്റേണുകളും ശ്രദ്ധാപൂർവ്വം നിരീക്ഷിച്ചു", "isCorrect": false },
      { "text": "ഓരോ പുതിയ പാറ്റേണും ഉചിതമായ ഗ്രൂപ്പായി വർഗ്ഗീകരിച്ചു", "isCorrect": false }
    ]
  },
  {
    "question": "ചിത്രങ്ങൾ കൂടാതെ, ഒരു യന്ത്രത്തിന് പരിശീലനം നൽകാൻ ഉപയോഗിക്കാവുന്നതായി അധ്യായത്തിൽ സൂചിപ്പിക്കുന്ന ഡാറ്റ ഏതാണ്?",
    "options": [
      { "text": "ടെക്സ്റ്റ്, ശബ്ദം, വീഡിയോ", "isCorrect": true },
      { "text": "GPS കോർഡിനേറ്റുകൾ മാത്രം", "isCorrect": false },
      { "text": "പ്രിൻ്റർ ഡ്രൈവറുകൾ മാത്രം", "isCorrect": false },
      { "text": "സ്പ്രെഡ്ഷീറ്റ് ഫോർമുലകൾ മാത്രം", "isCorrect": false }
    ]
  },
  {
    "question": "യന്ത്രങ്ങളെ ആംഗ്യഭാഷ പഠിപ്പിക്കുന്നതിൻ്റെ പ്രധാന ലക്ഷ്യം എന്താണ്?",
    "options": [
      { "text": "ആംഗ്യഭാഷാ അദ്ധ്യാപകരെ മാറ്റിസ്ഥാപിക്കുക", "isCorrect": false },
      { "text": "ശ്രവണ വൈകല്യമുള്ളവരെ സാങ്കേതികവിദ്യ ഉപയോഗിച്ച് സഹായിക്കുക", "isCorrect": true },
      { "text": "പുതിയ പ്രോഗ്രാമിംഗ് ഭാഷകൾ സൃഷ്ടിക്കുക", "isCorrect": false },
      { "text": "സംസാരിക്കുന്ന വാക്കുകൾ ടെക്സ്റ്റിലേക്ക് വിവർത്തനം ചെയ്യുക", "isCorrect": false }
    ]
  },
  {
    "question": "പാറ്റേണുകളെ വ്യക്തമായ ഗ്രൂപ്പുകളായി (Group A, Group B പോലെ) തരംതിരിക്കാൻ സഹായിക്കുന്നത് എന്താണ്?",
    "options": [
      { "text": "നിറങ്ങളിലുള്ള സാമ്യത", "isCorrect": false },
      { "text": "ഓരോ ഗ്രൂപ്പിലുമുള്ള ചിത്രങ്ങളുടെ എണ്ണം", "isCorrect": false },
      { "text": "പാറ്റേണുകളെ വേർതിരിച്ചറിയാൻ സഹായിക്കുന്ന ഒന്നോ അതിലധികമോ പ്രത്യേക സവിശേഷതകൾ", "isCorrect": true },
      { "text": "പാറ്റേണുകളുടെ വലുപ്പം", "isCorrect": false }
    ]
  },
  {
    "question": "യുഎസ്എയിൽ ഉപയോഗിക്കുന്ന ആംഗ്യഭാഷ ഏതാണ്?",
    "options": [
      { "text": "ബ്രിട്ടീഷ് ആംഗ്യഭാഷ (BSL)", "isCorrect": false },
      { "text": "ഓസ്‌ട്രേലിയൻ ആംഗ്യഭാഷ (AUSLAN)", "isCorrect": false },
      { "text": "ഇന്ത്യൻ ആംഗ്യഭാഷ (ISL)", "isCorrect": false },
      { "text": "അമേരിക്കൻ ആംഗ്യഭാഷ (ASL)", "isCorrect": true }
    ]
  },
  {
    "question": "ബ്രിട്ടനിൽ ഉപയോഗിക്കുന്ന ആംഗ്യഭാഷ ഏതാണ്?",
    "options": [
      { "text": "അമേരിക്കൻ ആംഗ്യഭാഷ (ASL)", "isCorrect": false },
      { "text": "ബ്രിട്ടീഷ് ആംഗ്യഭാഷ (BSL)", "isCorrect": true },
      { "text": "ഇന്ത്യൻ ആംഗ്യഭാഷ (ISL)", "isCorrect": false },
      { "text": "ഓസ്‌ട്രേലിയൻ ആംഗ്യഭാഷ (AUSLAN)", "isCorrect": false }
    ]
  },
  {
    "question": "പ്രാരംഭ പരിശീലനത്തിന് ശേഷം ഡാറ്റാസെറ്റിൽ മാറ്റങ്ങൾ വരുത്തിയാൽ, പരിശീലന പ്രക്രിയയ്ക്ക് എന്ത് ചെയ്യണം?",
    "options": [
      { "text": "പരിശീലന പ്രക്രിയ ആവർത്തിക്കണം", "isCorrect": true },
      { "text": "ഡാറ്റാസെറ്റ് ഇല്ലാതാക്കണം", "isCorrect": false },
      { "text": "പരിശോധന ഘട്ടം ഒഴിവാക്കണം", "isCorrect": false },
      { "text": "മോഡൽ ഉടനടി എക്‌സ്‌പോർട്ട് ചെയ്യണം", "isCorrect": false }
    ]
  },
  {
    "question": "വീടുകളിലെ ഉപകരണങ്ങൾ നിയന്ത്രിക്കാൻ സഹായിക്കുന്ന വോയിസ് അസിസ്റ്റൻ്റ് സംവിധാനങ്ങൾ എന്തിൻ്റെ ഉദാഹരണമായിട്ടാണ് സൂചിപ്പിക്കുന്നത്?",
    "options": [
      { "text": "മുൻകൂട്ടി പരിശീലിപ്പിച്ച യന്ത്ര പഠന മോഡലുകൾ", "isCorrect": true },
      { "text": "കമ്പ്യൂട്ടർ വിഷൻ ആപ്ലിക്കേഷനുകൾ", "isCorrect": false },
      { "text": "ലളിതമായ ഡാറ്റാബേസ് മാനേജ്മെൻ്റ് സംവിധാനങ്ങൾ", "isCorrect": false },
      { "text": "സ്പ്രെഡ്ഷീറ്റ് കണക്കുകൂട്ടലുകൾ", "isCorrect": false }
    ]
  },
  {
    "question": "PictoBlox ML വിൻഡോയിൽ, നിങ്ങളുടെ ഡാറ്റാസെറ്റിനായി ചിത്രങ്ങൾ നേരിട്ട് പകർത്താൻ (capture) അനുവദിക്കുന്ന സവിശേഷത ഏതാണ്?",
    "options": [
      { "text": "Upload", "isCorrect": false },
      { "text": "Webcam", "isCorrect": true },
      { "text": "Train Model", "isCorrect": false },
      { "text": "Advanced", "isCorrect": false }
    ]
  },
  {
    "question": "പുതിയ ഡാറ്റ ലഭിക്കുമ്പോൾ ഉത്തരം പ്രവചിക്കാൻ കമ്പ്യൂട്ടർ സൂപ്പർവൈസ്ഡ് ലേണിംഗിൽ നിന്ന് പഠിച്ച പാറ്റേൺ ഉപയോഗിക്കുമ്പോൾ എന്ത് സംഭവിക്കുന്നു?",
    "options": [
      { "text": "ശരിയായ ലേബലിനായി അത് ഉപയോക്താവിനോട് ചോദിക്കുന്നു", "isCorrect": false },
      { "text": "പഠിച്ച പാറ്റേൺ ഉപയോഗിച്ച് അത് ഉത്തരം പ്രവചിക്കുന്നു", "isCorrect": true },
      { "text": "അത് പ്രതിഫലങ്ങളും പിഴകളും പ്രയോഗിക്കുന്നു", "isCorrect": false },
      { "text": "അത് ഇൻപുട്ട് ഡാറ്റ യാന്ത്രികമായി ക്രമീകരിക്കുന്നു", "isCorrect": false }
    ]
  },
  {
    "question": "അൺസൂപ്പർവൈസ്ഡ് ലേണിംഗിൽ, ലേബൽ ചെയ്യാത്ത ഡാറ്റയ്ക്കുള്ളിൽ കമ്പ്യൂട്ടർ എന്താണ് തിരിച്ചറിയുന്നത്?",
    "options": [
      { "text": "ശരിയായ ഔട്ട്പുട്ട് ലേബലുകൾ", "isCorrect": false },
      { "text": "പ്രതിഫലങ്ങളും പിഴകളും", "isCorrect": false },
      { "text": "പ്രോഗ്രാമറുടെ ഉദ്ദേശ്യം", "isCorrect": false },
      { "text": "മറഞ്ഞിരിക്കുന്ന ബന്ധങ്ങളും ഘടനകളും", "isCorrect": true }
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
