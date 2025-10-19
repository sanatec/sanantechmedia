document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "സ്റ്റെല്ലേറിയത്തിൽ, ജൂൺ 21-ന് ട്രോംസോ (69°N) എന്ന സ്ഥലം നിങ്ങൾ വിജയകരമായി സജ്ജമാക്കി, പക്ഷേ അർദ്ധരാത്രിയിൽ സൂര്യൻ ചക്രവാളത്തിന് അൽപ്പം താഴെയായി. 'മിഡ്നൈറ്റ് സൺ' (സൂര്യൻ മുഴുവനും ചക്രവാളത്തിന്മുകളിൽ) നേടുന്നതിന് ആവശ്യമായ ഏറ്റവും സാധ്യതയുള്ളതും ശരിയായതുമായ മാറ്റം എന്താണ്?",
    "options": [
      { "text": "തീയതി ജൂലൈ 21 ആക്കി മാറ്റുക.", "isCorrect": false },
      { "text": "നിരീക്ഷകന്റെ ഉയരം 500 മീറ്ററായി വർദ്ധിപ്പിക്കുക.", "isCorrect": false },
      { "text": "Longyearbyen, Svalbard (78°N) പോലെ വടക്ക് ഭാഗത്തേക്ക് (78°N) സ്ഥലം മാറ്റുക.", "isCorrect": true },
      { "text": "അന്തരീക്ഷ റെൻഡറിംഗ് (A) ഓഫ് ചെയ്യുക.", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു ജ്യോതിശാസ്ത്ര ഇവന്റ് പ്ലാൻ ചെയ്യാൻ നിങ്ങൾ സ്റ്റെല്ലേറിയം ഉപയോഗിക്കുന്നു. ചന്ദ്രനിലെ അപ്പോളോ 11 മിഷന്റെ ലാൻഡിംഗ് സൈറ്റിൽ നിന്ന് കൃത്യമായ സമയത്തും സ്ഥലത്തും നിന്നുള്ള ആകാശദർശനം നിങ്ങൾക്ക് ആവശ്യമാണ്. ഈ പ്രത്യേക സിമുലേഷൻ നേടുന്നതിനുള്ള ശരിയായ ഓപ്പറേഷൻ ക്രമം എന്താണ്?",
    "options": [
      { "text": "F6-ൽ 'ചന്ദ്രൻ' എന്ന സ്ഥലം സജ്ജമാക്കുക → തീയതി 1969-07-20 ആക്കി സജ്ജമാക്കാൻ F5 ഉപയോഗിക്കുക → 'അപ്പോളോ 11' തിരയാൻ F3 ഉപയോഗിക്കുക.", "isCorrect": false },
      { "text": "F6-ൽ 'USA' എന്ന സ്ഥലം സജ്ജമാക്കുക → തീയതി 1969-07-20 ആക്കി സജ്ജമാക്കാൻ F5 ഉപയോഗിക്കുക → F4-ലെ ലാൻഡ്‌സ്‌കേപ്പ് ടാബിൽ 'ചന്ദ്രൻ' തിരഞ്ഞെടുക്കുക.", "isCorrect": false },
      { "text": "F6-ൽ 'ചന്ദ്രൻ' എന്ന സ്ഥലം സജ്ജമാക്കുക → ലൊക്കേഷൻ ലിസ്റ്റിൽ 'മാരെ ട്രാൻക്വിലിറ്റാറ്റിസ്' അല്ലെങ്കിൽ സമാനമായ ഒന്ന് തിരഞ്ഞെടുക്കുക → തീയതിയും സമയവും 1969-07-20 20:17 UTC ആക്കി സജ്ജമാക്കാൻ F5 ഉപയോഗിക്കുക.", "isCorrect": true },
      { "text": "ചന്ദ്രനെ തിരയാൻ F3 ഉപയോഗിക്കുക → തീയതി സജ്ജമാക്കാൻ F5 ഉപയോഗിക്കുക → ചാന്ദ്രനിരക്കുകൾക്ക് അനുയോജ്യമായ ഉയരം സജ്ജമാക്കാൻ F6 ഉപയോഗിക്കുക.", "isCorrect": false }
    ]
  },
  {
    "question": "ഡിസംബർ 22-ന് 80°S അക്ഷാംശത്തുള്ള ഒരു സ്ഥലത്ത്, സൂര്യൻ 24 മണിക്കൂറും ചക്രവാളത്തിന്മുകളിൽ ഒരു നിരന്തരമായ ഉയരത്തിൽ ഒരു പൂർണ്ണ വൃത്തത്തിൽ സഞ്ചരിക്കുന്നതായി ഒരു വിദ്യാർത്ഥി സ്റ്റെല്ലേറിയത്തിൽ നിരീക്ഷിക്കുന്നു. വിദ്യാർത്ഥി നിരീക്ഷിക്കുന്ന നിർദ്ദിഷ്ട ജ്യോതിശാസ്ത്ര പ്രതിഭാസം ഏതാണ്?",
    "options": [
      { "text": "അന്റാർട്ടിക് സർക്കിളിലെ മിഡ്നൈറ്റ് സൺ.", "isCorrect": false },
      { "text": "ഒരു ധ്രുവ സൂര്യഗ്രഹണം.", "isCorrect": false },
      { "text": "സെനിത്തിലെ സൂര്യൻ.", "isCorrect": false },
      { "text": "ദക്ഷിണ ധ്രുവത്തിലെ സർക്കുമ്പോളാർ സൂര്യൻ.", "isCorrect": true }
    ]
  },
  {
    "question": "QGIS-ൽ, ലാൻഡ്‌സ്ലൈഡുകൾക്കായി നിങ്ങൾക്ക് ഒരു പോയിന്റ് ലെയറും ജില്ലകൾക്കായി ഒരു പോളിഗൺ ലെയറും ഉണ്ട്. ഓരോ ജില്ലയുടെയും അതിർത്തിക്കുള്ളിലുള്ള ലാൻഡ്‌സ്ലൈഡുകളുടെ എണ്ണം കണക്കാക്കുന്ന ജില്ലാ ലെയറിനായി ഒരു പുതിയ ആട്രിബ്യൂട്ട് സൃഷ്ടിക്കേണ്ടതുണ്ട്. ഈ ജോലിക്ക് പ്രോസസിംഗ് ടൂൾബോക്സിലെ ഏറ്റവും അനുയോജ്യമായ ഉപകരണം ഏതാണ്?",
    "options": [
      { "text": "ലൊക്കേഷൻ പ്രകാരം ആട്രിബ്യൂട്ടുകൾ ജോയിൻ ചെയ്യുക", "isCorrect": false },
      { "text": "പോളിഗണിൽ പോയിന്റുകൾ എണ്ണുക", "isCorrect": true },
      { "text": "ക്ലിപ്പ്", "isCorrect": false },
      { "text": "വെക്റ്റർ ലെയറുകൾ ലയിപ്പിക്കുക", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു പ്രദേശത്തിനായി നിങ്ങൾക്ക് ഒരു ചരിവ് മാപ്പ് ഉണ്ട്. 15 മുതൽ 30 ഡിഗ്രി വരെ ചരിവുള്ള പ്രദേശങ്ങൾ മാത്രം അടങ്ങിയ ഒരു പുതിയ പോളിഗൺ ലെയർ എഞ്ചിനീയറിംഗ് ഡിപ്പാർട്ട്മെന്റിന് ആവശ്യമാണ് (ഇത് ഉയർന്ന ലാൻഡ്‌സ്ലൈഡ് അപകടസാധ്യതയുള്ള പ്രദേശമായി കണക്കാക്കപ്പെടുന്നു). ഈ നിർദ്ദിഷ്ട ലെയർ സൃഷ്ടിക്കുന്നതിനുള്ള ഏറ്റവും നല്ല മാർഗം ഏതാണ്?",
    "options": [
      { "text": "ഐഡന്റിഫൈ ഫീച്ചേഴ്‌സ് ടൂൾ ഉപയോഗിച്ച് പ്രദേശങ്ങൾ മാനുവലായി ഡിജിറ്റൈസ് ചെയ്യുക.", "isCorrect": false },
      { "text": "\"slope@1\" >= 15 AND \"slope@1\" <= 30 പോലുള്ള ഒരു എക്സ്പ്രഷൻ ഉപയോഗിച്ച് ഒരു ബൈനറി റാസ്റ്റർ സൃഷ്ടിക്കാൻ റാസ്റ്റർ കാൽക്കുലേറ്റർ ഉപയോഗിക്കുക, തുടർന്ന് അത് ഒരു പോളിഗണാക്കി പരിവർത്തനം ചെയ്യുക.", "isCorrect": true },
      { "text": "ആ ശ്രേണി ഹൈലൈറ്റ് ചെയ്യുന്നതിന് ചരിവ് ലെയറിന്റെ സിംബോളജി മാറ്റുക.", "isCorrect": false },
      { "text": "ആഡ് ഡിലിമിറ്റഡ് ടെക്‌സ്റ്റ് ലെയർ ടൂൾ ഉപയോഗിച്ച് ചരിവ് മൂല്യങ്ങൾ മാനുവലായി നൽകുക.", "isCorrect": false }
    ]
  },
  {
    "question": "നിങ്ങൾക്ക് ഒരു കുറഞ്ഞ റെസല്യൂഷൻ DEM നൽകിയിട്ടുണ്ട്. ഫലമായുണ്ടാകുന്ന ചരിവ് മാപ്പ് അതിശയോക്തിപരമായി സാമാന്യവൽക്കരിച്ചതായി തോന്നുന്നു, ചെറിയ, കുത്തനെയുള്ള അപരദങ്ങളുടെ നിർണായക വിശദാംശങ്ങൾ നഷ്ടപ്പെടുന്നു. ഈ വിശദാംശങ്ങളുടെ അഭാവത്തിന് കാരണമായ പ്രധാന ഘടകം എന്താണ്, വിശകലനം മെച്ചപ്പെടുത്തുന്നതിന് നിങ്ങൾ എന്ത് ഡാറ്റ അഭ്യർത്ഥിക്കും?",
    "options": [
      { "text": "കോർഡിനേറ്റ് സിസ്റ്റം തെറ്റാണ്; WGS84-ൽ ഡാറ്റ അഭ്യർത്ഥിക്കുക.", "isCorrect": false },
      { "text": "DEM-ന്റെ സ്പേഷ്യൽ റെസല്യൂഷൻ വളരെ കുറവാണ്; ഉയർന്ന റെസല്യൂഷൻ DEM (ഉദാ. LIDAR-ൽ നിന്ന്) അഭ്യർത്ഥിക്കുക.", "isCorrect": true },
      { "text": "ചരിവ് കണക്കുകൂട്ടലിൽ തെറ്റായ z-ഫാക്ടർ ഉപയോഗിച്ചു; ലംബ യൂണിറ്റുകൾ അഭ്യർത്ഥിക്കുക.", "isCorrect": false },
      { "text": "മാപ്പ് സിംബോളജി തെറ്റാണ്; യഥാർത്ഥ കോണ്ടൂർ ലൈനുകൾ അഭ്യർത്ഥിക്കുക.", "isCorrect": false }
    ]
  },
  {
    "question": "ജിയോജിബ്രയിൽ, നിങ്ങൾ x^2 + y^2 = 25 എന്ന സമവാക്യം ഉപയോഗിച്ച് ഒരു സർക്കിൾ *c* യും (0, -5) എന്ന പോയിന്റിൽ ഒരു പോയിന്റ് *A* യും നിർവചിച്ചു. ബാഹ്യ പോയിന്റ് *A* വിലക്ക് സർക്കിൾ *c* യിലേക്ക് പോകുന്ന എല്ലാ ടാൻജെന്റുകളും ശരിയായി വരയ്ക്കുന്ന കമാൻഡ് ഏതാണ്?",
    "options": [
      { "text": "Tangent(A, c)", "isCorrect": false },
      { "text": "Line(A, c)", "isCorrect": false },
      { "text": "PerpendicularLine(A, c)", "isCorrect": false },
      { "text": "Tangents(A, c)", "isCorrect": true }
    ]
  },
  {
    "question": "ജിയോജിബ്ര ഉപയോഗിച്ച് y = x² - 4, y = 2x - 1 എന്നീ സമവാക്യങ്ങളുടെ സിസ്റ്റം ഗ്രാഫിക്കലായി പരിഹരിക്കേണ്ടതുണ്ട്. രണ്ടും പ്ലോട്ട് ചെയ്ത ശേഷം, അവയിൽ മാനുവലായി ക്ലിക്ക് ചെയ്യാതെ ഇന്റർസെക്ഷൻ പോയിന്റുകൾ പ്രോഗ്രാമിംഗ് രീതിയിൽ കണ്ടെത്തുന്നത് എങ്ങനെ?",
    "options": [
      { "text": "ഇന്റർസെക്ഷൻ പോയിന്റുകൾ ഓട്ടോമാറ്റിക്കായി ആൾജിബ്രാ വ്യൂവിലെ \"ഇന്റർസെക്ഷനുകൾ\" കീഴിൽ ലിസ്റ്റുചെയ്യപ്പെടും.", "isCorrect": false },
      { "text": "Intersect(y = x^2 - 4, y = 2x - 1) എന്ന കമാൻഡ് ഉപയോഗിക്കുക.", "isCorrect": true },
      { "text": "ഓരോ ഫംഗ്ഷനുമായി റൂട്ട് കമാൻഡ് ഉപയോഗിക്കുക.", "isCorrect": false },
      { "text": "നോൺ-ലീനിയർ സമവാക്യങ്ങളുടെ ഇന്റർസെക്ഷൻ പോയിന്റുകൾ ജിയോജിബ്രയ്ക്ക് ഓട്ടോമാറ്റിക്കായി കണ്ടെത്താൻ കഴിയില്ല.", "isCorrect": false }
    ]
  },
  {
    "question": "ജിയോജിബ്രയിൽ, A, B, C എന്നീ പോയിന്റുകൾ നിർവചിച്ചിരിക്കുന്ന ഒരു ഡൈനാമിക് ത്രികോണം നിങ്ങൾക്കുണ്ട്. A, B, C എന്നീ പോയിന്റുകൾ നിങ്ങൾ എങ്ങനെ നീക്കിയാലും ഡൈനാമിക്കായി നീങ്ങുന്ന ത്രികോണത്തിന്റെ സെന്റ്രോയിഡ് (ഭാരകേന്ദ്രം) ആയ *D* പോയിന്റ് സൃഷ്ടിക്കുന്നതിനുള്ള ശരിയായ കമാൻഡ് ഏതാണ്?",
    "options": [
      { "text": "D = (A + B + C) / 3", "isCorrect": true },
      { "text": "D = Midpoint(A, B)", "isCorrect": false },
      { "text": "D = Centroid(A, B, C)", "isCorrect": false },
      { "text": "D = TriangleCenter(A, B, C)", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു നക്ഷത്രം **കുൽമിനേറ്റ്** ചെയ്യുന്ന (അതിന്റെ ഉയർന്ന പോയിന്റിൽ എത്തുന്ന) കൃത്യമായ നിമിഷത്തിൽ **വെഗ**യുടെ കൃത്യമായ അസിമുത്തും ഉയരവും ആണ് ഒരു ഉപയോക്താവിന് അറിയണ്ടത്. ഈ വിവരങ്ങൾ ഏറ്റവും കാര്യക്ഷമമായി നൽകുന്ന സ്റ്റെല്ലേറിയത്തിലെ ഫീച്ചർ ഏതാണ്?",
    "options": [
      { "text": "വെഗ കണ്ടെത്താൻ സർച്ച് വിൻഡോ (F3) ഉപയോഗിക്കുക, തുടർന്ന് നക്ഷത്രം ഉയരത്തിൽ വർദ്ധിക്കുന്നത് നിർത്തുന്നതുവരെ സമയം മുന്നോട്ട് കൊണ്ടുപോകാൻ ഡേറ്റ്/ടൈം വിൻഡോ (F5) ഉപയോഗിക്കുക.", "isCorrect": false },
      { "text": "ആംഗുലാർ മെഷർ ടൂൾ ഉപയോഗിച്ച് അടിവാനത്തിൽ നിന്ന് നക്ഷത്രത്തിലേക്ക് ക്ലിക്ക് ചെയ്യുക.", "isCorrect": false },
      { "text": "വെഗ തിരയുക, തുടർന്ന് 'ഇൻഫോ' വിൻഡോ (ഡിഫോൾട്ട് കീ 'I') തുറക്കുക. ഉയരവും അസിമുത്തും അവിടെ ലിസ്റ്റുചെയ്യുകയും റിയൽ-ടൈമിൽ അപ്‌ഡേറ്റ് ചെയ്യുകയും ചെയ്യുന്നു. ഉയരം അതിന്റെ പരമാവധി ആയിരിക്കുമ്പോഴാണ് കുൽമിനേഷൻ സംഭവിക്കുന്നത്.", "isCorrect": true },
      { "text": "നക്ഷത്രത്തിന്റെ നിശ്ചലമായ ഖഗോള കോർഡിനേറ്റുകൾ കണ്ടെത്താൻ ലൊക്കേഷൻ വിൻഡോ (F6) ഉപയോഗിക്കുക.", "isCorrect": false }
    ]
  },
  {
    "question": "1000-ലധികം എൻട്രികളുള്ള ലാൻഡ്‌സ്ലൈഡ് ഡാറ്റയുടെ ഒരു CSV ഫയൽ നിങ്ങൾക്കുണ്ട്. QGIS-ൽ, ഒരു പ്രധാന നദീ തീരത്തിന്റെ 5 കിലോമീറ്റർ ബഫർ സോണിനുള്ളിലുള്ള എല്ലാ ലാൻഡ്‌സ്ലൈഡുകളും കണ്ടെത്തുന്നതിന് നിങ്ങൾ ഒരു സ്പേഷ്യൽ ക്വറി നടത്തേണ്ടതുണ്ട്. ഈ മൾട്ടി-സ്റ്റെപ്പ് വിശകലനത്തിനുള്ള ശരിയായ പ്രോസസിംഗ് ടൂൾ ഏതാണ്?",
    "options": [
      { "text": "ബഫർ", "isCorrect": false },
      { "text": "ലൊക്കേഷൻ പ്രകാരം എക്‌സ്ട്രാക്റ്റ് ചെയ്യുക", "isCorrect": true },
      { "text": "ഹീറ്റ്മാപ്പ്", "isCorrect": false },
      { "text": "വോറോനോയി പോളിഗണുകൾ", "isCorrect": false }
    ]
  },
  {
    "question": "ജിയോജിബ്രയിൽ, നിങ്ങൾ f(x) = sin(x) എന്ന ഫംഗ്ഷൻ പ്ലോട്ട് ചെയ്യുന്നു. ഈ സൈൻ വേവിലൂടെ നീങ്ങുന്ന ഒരു പോയിന്റ് *P* സൃഷ്ടിക്കാൻ നിങ്ങൾ ആഗ്രഹിക്കുന്നു, കൂടാതെ *P* യുടെ x-കോർഡിനേറ്റിന് തുല്യമായ x-കോർഡിനേറ്റും, *P* യുടെ y-കോർഡിനേറ്റിന്റെ വർഗ്ഗത്തിന് തുല്യമായ y-കോർഡിനേറ്റും ഉള്ള ഒരു രണ്ടാം പോയിന്റ് *Q* സൃഷ്ടിക്കാൻ ആഗ്രഹിക്കുന്നു. ഈ ഡൈനാമിക് ബന്ധം നിലനിർത്തുന്നതിന് *Q* പോയിന്റിനായുള്ള ശരിയായ നിർവചനം ഏതാണ്?",
    "options": [
      { "text": "Q = (x(P), y(P))", "isCorrect": false },
      { "text": "Q = (x(P), y(P)²)", "isCorrect": true },
      { "text": "Q = (x(P)², y(P)²)", "isCorrect": false },
      { "text": "Q = (x(P), f(x(P))²)", "isCorrect": false }
    ]
  },
  {
    "question": "QGIS-ൽ നിങ്ങൾ ഒരു ലാൻഡ്‌സ്ലൈഡ് സസ്‌സെപ്‌ടിബിലിറ്റി മാപ്പ് തയ്യാറെടുക്കുന്നു. നിങ്ങൾക്ക് മൂന്ന് റാസ്റ്റർ ലെയറുകൾ ഉണ്ട്: ചരിവ് (ഡിഗ്രിയിൽ), ഭൂവിനിയോഗം (വർഗ്ഗീകരിച്ചത്), മഴ (മില്ലിമീറ്ററിൽ). ഒരൊറ്റ കോംപോസിറ്റ് റിസ്ക് സ്കോർ സൃഷ്ടിക്കുന്നതിനുള്ള ഏറ്റവും നല്ല മാർഗം ഏതാണ്?",
    "options": [
      { "text": "എല്ലാ മൂന്ന് റാസ്റ്ററുകളും ഒരു ഫയലായി ലയിപ്പിക്കാൻ മെർജ് ടൂൾ ഉപയോഗിക്കുക.", "isCorrect": false },
      { "text": "ഭൂവിനിയോഗം ലെയർ സംഖ്യാ അപകടസാധ്യതാ മൂല്യങ്ങളായി പുനർവർഗ്ഗീകരിച്ച ശേഷം (\"Slope@1\" * 0.5) + (\"Rainfall@1\" * 0.3) + (\"LandUseCode@1\" * 0.2) പോലുള്ള ഒരു വെയ്റ്റഡ് ഫോർമുല സൃഷ്ടിക്കാൻ റാസ്റ്റർ കാൽക്കുലേറ്റർ ഉപയോഗിക്കുക.", "isCorrect": true },
      { "text": "ഓരോ ജില്ലാ പോളിഗണിനും സോണൽ സ്റ്റാറ്റിസ്റ്റിക്സ് ടൂൾ ഉപയോഗിക്കുക.", "isCorrect": false },
      { "text": "ഓരോ ലാൻഡ്‌സ്ലൈഡ് പോയിന്റിനും ആട്രിബ്യൂട്ട് ടേബിളിൽ ഒരു റിസ്ക് മൂല്യം മാനുവലായി നിയോഗിക്കുക.", "isCorrect": false }
    ]
  },
  {
    "question": "സ്റ്റെല്ലേറിയത്തിൽ, നിങ്ങൾ ഒരു പൂർണ്ണ സൂര്യഗ്രഹണം സിമുലേറ്റ് ചെയ്യുന്നു. നിങ്ങൾ സ്ഥലവും സമയവും ശരിയായി സജ്ജമാക്കി. ഗ്രഹണത്തിനിടയിൽ ചന്ദ്രന്റെ നിഴൽ ഭൂമിയുടെ ഉപരിതലത്തിലുടനീളം സഞ്ചരിക്കുന്ന പാത മനസ്സിലാക്കാൻ, ഏത് ഫീച്ചർ നിങ്ങൾ എനേബിൾ ചെയ്യണം?",
    "options": [
      { "text": "ഫാസ്റ്റ്-ഫോർവേർഡ് ചെയ്യാൻ സമയ വേഗത (L) വർദ്ധിപ്പിക്കുക.", "isCorrect": false },
      { "text": "\"ഗ്രഹങ്ങൾ കാണിക്കുക\" ഓപ്ഷൻ എനേബിൾ ചെയ്യുക.", "isCorrect": false },
      { "text": "ചന്ദ്രൻ തിരഞ്ഞെടുത്ത് സോളാർ സിസ്റ്റം എഡിറ്ററിൽ \"ഓർബിറ്റ് കാണിക്കുക\", \"ഷാഡോ കോൺ കാണിക്കുക\" എന്നീ ഓപ്ഷനുകൾ എനേബിൾ ചെയ്യുക.", "isCorrect": true },
      { "text": "നിരീക്ഷണ സ്ഥലം \"സ്പേസ്\" ആക്കി മാറ്റുക.", "isCorrect": false }
    ]
  },
  {
    "question": "ജിയോജിബ്രയിൽ, നിങ്ങൾ AB എന്ന ലൈൻ സെഗ്മെന്റിന്റെ **ലംബ സമഭാജി**യും ∠ABC യുടെ **കോൺ സമഭാജി**യും നിർമ്മിച്ചു. ഈ രണ്ട് സമഭാജികളുടെയും ഇന്റർസെക്ഷൻ പോയിന്റ് കണ്ടെത്താൻ നിങ്ങൾ ആഗ്രഹിക്കുന്നു. എന്നിരുന്നാലും, ആൾജിബ്രാ വ്യൂ രണ്ട് വ്യത്യസ്ത ഇന്റർസെക്ഷൻ പോയിന്റുകൾ കാണിക്കുന്നു. ഇതിന് ഏറ്റവും സാധ്യതയുള്ള കാരണം എന്താണ്?",
    "options": [
      { "text": "രേഖകൾ സമാന്തരമാണ്, ഇന്റർസെക്ഷൻ ഇല്ല.", "isCorrect": false },
      { "text": "ജിയോജിബ്ര അവയ്ക്കിടയിലല്ല, അക്ഷങ്ങളുമായുള്ള ഇന്റർസെക്ഷൻ കണക്കാക്കി.", "isCorrect": false },
      { "text": "അനന്തമായി വിപുലപ്പെടുകയും രണ്ട് സ്ഥലങ്ങളിൽ സമഭാജികളെ വിഭജിക്കുകയും ചെയ്യുന്ന മുഴുവൻ ലൈനുകളും നിങ്ങൾ തിരഞ്ഞെടുത്തു. രണ്ട് സമഭാജി ഒബ്ജക്റ്റുകളിൽ മാത്രം ഇന്റർസെക്റ്റ് ടൂൾ ഉപയോഗിക്കേണ്ടതുണ്ട്.", "isCorrect": true },
      { "text": "A, B, C എന്നീ പോയിന്റുകൾ ഒരേ വരിയിലാണ്, സമഭാജികൾ അവ്യക്തമാക്കുന്നു.", "isCorrect": false }
    ]
  },
  {
    "question": "വയനാട്ടിനുള്ള ഒരു ചരിവ് മാപ്പിനായി നിങ്ങൾ QGIS-ൽ ഒരു പ്രിന്റ് ലേഔട്ട് സൃഷ്ടിക്കേണ്ടതുണ്ട്, ഇതിൽ ചരിവ് മാപ്പ്, ഒരു ലീജൻഡ്, ഒരു സ്കെയിൽ ബാർ, ഒരു നോർത്ത് ആരോ, കേരളം ഇന്ത്യയിലെ സ്ഥാനം കാണിക്കുന്ന ഒരു **ഇൻസെറ്റ് മാപ്പ്** എന്നിവ ഉൾപ്പെടുന്നു. പ്രധാന മാപ്പ് സൃഷ്ടിച്ച ശേഷം, ഇൻസെറ്റ് മാപ്പ് ചേർക്കുന്നതിനുള്ള ഏറ്റവും കാര്യക്ഷമമായ മാർഗം ഏതാണ്?",
    "options": [
      { "text": "ഒരു പുതിയ പ്രിന്റ് ലേഔട്ട് പ്രോജക്റ്റ് സൃഷ്ടിക്കുക.", "isCorrect": false },
      { "text": "“ആഡ് മാപ്പ്” ടൂൾ രണ്ടാമതായി ഉപയോഗിക്കുക, ഇൻസെറ്റിനായി ഒരു ബോക്സ് വരയ്ക്കുക, തുടർന്ന് ഇന്ത്യയെല്ലാം കാണിക്കുന്നതിന് ഇനം പ്രോപ്പർട്ടിസിൽ സ്കെയിലും വിസ്തീർണ്ണവും സജ്ജമാക്കുക.", "isCorrect": true },
      { "text": "പ്രധാന മാപ്പ് കോപ്പി ചെയ്ത് ഒരു പുതിയ ഇമേജായി പേസ്റ്റ് ചെയ്യുക.", "isCorrect": false },
      { "text": "“ആഡ് പിക്ചർ” ടൂൾ ഉപയോഗിച്ച് ഇന്ത്യയുടെ ഒരു സ്റ്റാറ്റിക് ഇമേജ് ഇമ്പോർട്ട് ചെയ്യുക.", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു നിശ്ചിത സ്ഥലത്തിനും തീയതിക്കും വേണ്ടി, സൂര്യൻ അടിവാനത്തിൽ നിന്ന് 12° മുതൽ 18° വരെ താഴെയായിരിക്കുന്ന സമയമായ **ജ്യോതിശാസ്ത്ര ട്വിലൈറ്റിന്റെ** (astronomical twilight) ദൈർഘ്യം നിർണ്ണയിക്കുന്നതിനുള്ള ഏറ്റവും നേരിട്ടുള്ള മാർഗ്ഗം സ്റ്റെല്ലേറിയത്തിൽ ഏത് ഫീച്ചർ നൽകുന്നു?",
    "options": [
      { "text": "ഡേറ്റ്/ടൈം വിൻഡോ (F5) സമയം മാത്രം കാണിക്കുന്നു, സൂര്യന്റെ ഉയരം അല്ല.", "isCorrect": false },
      { "text": "\"ട്വിലൈറ്റ്\" തിരയാൻ സർച്ച് ഫംഗ്ഷൻ ഉപയോഗിക്കുക.", "isCorrect": false },
      { "text": "സൂര്യന്റെ 'ഇൻഫോ' വിൻഡോ അതിന്റെ നിലവിലെ ഉയരം കാണിക്കുന്നു. സൂര്യാസ്തമയ സമയത്ത് സമയം ശ്രദ്ധിക്കുക, തുടർന്ന് ഉയരം -18° എത്തുന്നതുവരെ സമയം മുന്നോട്ട് കൊണ്ടുപോകുക.", "isCorrect": true },
      { "text": "ചക്രവാളത്തിന്താഴെയുള്ള സൂര്യന്റെ ഉയരം സ്റ്റെല്ലേറിയത്തിന് പ്രദർശിപ്പിക്കാൻ കഴിയില്ല.", "isCorrect": false }
    ]
  },
  {
    "question": "QGIS-ൽ, നിങ്ങൾക്ക് സ്കൂളുകളുടെ ഒരു പോയിന്റ് ലെയറും വെള്ളപ്പൊക്ക അപകടസാധ്യതാ മേഖലകളുടെ (കുറഞ്ഞ, ഇടത്തരം, ഉയർന്നത് എന്നീ വിഭാഗങ്ങളിൽ) ഒരു പോളിഗൺ ലെയറും ഉണ്ട്. \"ഉയർന്ന\" വെള്ളപ്പൊക്ക അപകടസാധ്യതാ മേഖലകളിലുള്ള എല്ലാ സ്കൂളുകളും ലിസ്റ്റുചെയ്യുന്ന ഒരു റിപ്പോർട്ട് സൃഷ്ടിക്കേണ്ടതുണ്ട്. ഏറ്റവും കൃത്യമായ രീതി ഏതാണ്?",
    "options": [
      { "text": "മാപ്പ് വിഷ്വലായി പരിശോധിച്ച് സ്കൂളിന്റെ പേരുകൾ ഒരു ഡോക്യുമെന്റിലേക്ക് മാനുവലായി ടൈപ്പ് ചെയ്യുക.", "isCorrect": false },
      { "text": "ലൊക്കേഷൻ പ്രകാരം തിരഞ്ഞെടുക്കുക എന്ന ടൂൾ ഉപയോഗിച്ച് \"ഉയർന്ന\" അപകടസാധ്യതാ പോളിഗണുകളുള്ളിലുള്ള സ്കൂളുകൾ തിരഞ്ഞെടുക്കുക, തുടർന്ന് തിരഞ്ഞെടുത്ത സ്കൂളുകളുടെ ആട്രിബ്യൂട്ട് ടേബിൾ തുറന്ന് ഡാറ്റ കോപ്പി ചെയ്യുക.", "isCorrect": false },
      { "text": "ലൊക്കേഷൻ പ്രകാരം ആട്രിബ്യൂട്ടുകൾ ജോയിൻ ചെയ്യുക എന്ന ടൂൾ ഉപയോഗിക്കുക, തുടർന്ന് ജോയിൻ ചെയ്ത റിസ്ക് ഫീൽഡ് \"ഉയർന്നത്\" ആയ സ്ഥലങ്ങൾ ഫിൽട്ടർ ചെയ്യുക.", "isCorrect": false },
      { "text": "b അല്ലെങ്കിൽ c എന്നിവയിൽ ഏതെങ്കിലും ഒരു സാധുവായതും കൃത്യവുമായ രീതിയാണ്.", "isCorrect": true }
    ]
  },
  {
    "question": "ജിയോജിബ്രയിൽ, y = mx + 2 എന്ന സമവാക്യം നൽകിയിരിക്കുന്ന ലൈനുകളുടെ കുടുംബം വിഷ്വലൈസ് ചെയ്യാൻ നിങ്ങൾ ആഗ്രഹിക്കുന്നു, ഇവിടെ *m* എന്നത് -5 മുതൽ 5 വരെ മാറുന്ന ഒരു സ്ലൈഡർ ആണ്. സ്ലൈഡർ *m* സൃഷ്ടിച്ച ശേഷം, ഡൈനാമിക് ലൈൻ സൃഷ്ടിക്കുന്നതിന് ഇൻപുട്ട് ബാറിലെ ഒരൊറ്റ കമാൻഡ് ഏതാണ്?",
    "options": [
      { "text": "y = m * x + 2", "isCorrect": true },
      { "text": "Line(m, 2)", "isCorrect": false },
      { "text": "f(x) = m + 2", "isCorrect": false },
      { "text": "DynamicLine(m)", "isCorrect": false }
    ]
  },
  {
    "question": "QGIS-ൽ ഒരു DEM ഉപയോഗിച്ച് നിങ്ങൾ ഒരു ചരിവ് മാപ്പ് സൃഷ്ടിക്കുന്നു. ഫലമായുണ്ടാകുന്ന ചരിവ് മൂല്യങ്ങൾ അസാധാരണമായി ഉയർന്നതായി തോന്നുന്നു (ഉദാ. പല 80-90 ഡിഗ്രി ചരിവുകൾ). ഇതിന് ഏറ്റവും സാധ്യതയുള്ള കാരണം:",
    "options": [
      { "text": "ചരിവ് ടൂളിലെ \"Z ഫാക്ടർ\" തെറ്റായി സജ്ജമാക്കി (ഉദാ. DEM അടിയിലാണ്, പക്ഷേ Z ഫാക്ടർ മീറ്ററിനായി സജ്ജമാക്കി).", "isCorrect": false },
      { "text": "CRS ഒരു പ്രൊജക്റ്റഡ് സിസ്റ്റത്തിന് പകരം ഒരു ജിയോഗ്രാഫിക് സിസ്റ്റത്തിലാണ് (WGS84 പോലെ) സജ്ജമാക്കിയിരിക്കുന്നത്.", "isCorrect": false },
      { "text": "സ്ലോപ്പ് ടൂൾ ഡയലോഗിലെ \"ലംബ യൂണിറ്റുകൾ / തിരശ്ചീന യൂണിറ്റുകൾ\" എന്ന അനുപാതം 1 ആയി വിട്ടു, എന്നാൽ തിരശ്ചീന യൂണിറ്റുകൾ ഡിഗ്രിയും ലംബ യൂണിറ്റുകൾ മീറ്ററുമാണ്.", "isCorrect": true },
      { "text": "മുകളിൽ പറഞ്ഞവയെല്ലാം സാധ്യമായ കാരണങ്ങളാണ്.", "isCorrect": false }
    ]
  },
  {
    "question": "സ്റ്റെല്ലേറിയത്തിൽ, അവരുടെ 'ഗ്രേറ്റ് കൺജംഗ്ഷൻ' സമയത്ത് വ്യാഴത്തിനും ശനിക്കും ഇടയിലുള്ള **കോണീയ വേർപാട്** (angular separation) നിങ്ങൾക്ക് അറിയണം. ഏറ്റവും കൃത്യമായ അളവ് നൽകുന്ന ടൂൾ ഏതാണ്?",
    "options": [
      { "text": "\"തിരയുക\" വിൻഡോ ഓരോ ഗ്രഹത്തിന്റെയും ഭൂമിയിൽ നിന്നുള്ള ദൂരം കാണിക്കുന്നു.", "isCorrect": false },
      { "text": "രണ്ട് ഗ്രഹങ്ങളിലും ക്ലിക്ക് ചെയ്ത് അവയ്ക്കിടയിലുള്ള കോൺ അളക്കാൻ “ആംഗുലാർ മെഷർ ടൂൾ” ഉപയോഗിക്കാം.", "isCorrect": true },
      { "text": "അത്തരം കൃത്യമായ അളവുകൾക്ക് “ഓക്കുലാർസ്” പ്ലഗിൻ ആവശ്യമാണ്.", "isCorrect": false },
      { "text": "“ഇൻഫോ” വിൻഡോയിൽ നിന്ന് അവയുടെ ഖഗോള കോർഡിനേറ്റുകൾ ഉപയോഗിച്ച് നിങ്ങൾ അത് മാനുവലായി കണക്കാക്കണം.", "isCorrect": false }
    ]
  },
  {
    "question": "ജിയോജിബ്രയിൽ, രണ്ട് പോയിന്റുകൾ നിർവചിച്ചിരിക്കുന്ന ഒരു ലൈൻ *l* ഉം ലൈനിൽ ഇല്ലാത്ത ഒരു പോയിന്റ് *C* യും നിങ്ങൾക്കുണ്ട്. *l* എന്ന രേഖയിലേക്ക് ടാൻജെന്റ് ആയ, *C* ൽ കേന്ദ്രീകരിച്ചിരിക്കുന്ന ഒരു സർക്കിൾ നിർമ്മിക്കാൻ നിങ്ങൾ ആഗ്രഹിക്കുന്നു. ശരിയായ ക്രമം ഏതാണ്?",
    "options": [
      { "text": "C ൽ നിന്ന് l വരെയുള്ള ലംബം കണ്ടെത്തുക (ഈ പോയിന്റിനെ T എന്ന് പേരിടുക). തുടർന്ന്, distance(C, T) ന്റെ ആരം ഉപയോഗിച്ച് C ൽ കേന്ദ്രീകരിച്ച ഒരു സർക്കിൾ സൃഷ്ടിക്കുക.", "isCorrect": true },
      { "text": "ഒരു നിശ്ചിത ആരമുള്ള C ൽ കേന്ദ്രീകരിച്ച ഒരു സർക്കിൾ സൃഷ്ടിക്കുക, തുടർന്ന് ടാൻജെന്റ്സ് ടൂൾ ഉപയോഗിക്കുക.", "isCorrect": false },
      { "text": "l-ലെ C, രണ്ട് നിശ്ചിത പോയിന്റുകൾ എന്നിവ തിരഞ്ഞെടുത്ത് 3 പോയിന്റുകളിലൂടെ സർക്കിൾ ടൂൾ ഉപയോഗിക്കുക.", "isCorrect": false },
      { "text": "ലൈൻ *l* കുറിച്ച് പോയിന്റ് C റിഫ്ലെക്‌ട്ട് ചെയ്യാൻ റിഫ്ലെക്‌ട്ട് ടൂൾ ഉപയോഗിക്കുക, കേന്ദ്രമായി മിഡ്പോയിന്റ് ഉപയോഗിക്കുക.", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു പുതിയ ജില്ലയ്ക്കായി ഒരു ലാൻഡ്‌സ്ലൈഡ് സസ്‌സെപ്‌ടിബിലിറ്റി മാപ്പ് സൃഷ്ടിക്കാനുള്ള ചുമതല നിങ്ങൾക്ക് നൽകിയിട്ടുണ്ട്. നിങ്ങൾക്ക് ഒരു DEM ഉം ഒരു ലാൻഡ്‌സ്ലൈഡ് കാറ്റലോഗും ഉണ്ട്. പുതുമയുള്ള പുത്തുമല ലാൻഡ്‌സ്ലൈഡിന് സമാനമായ അപകടസാധ്യതാ മേഖലകൾ തിരിച്ചറിയുന്നതിന് QGIS-ൽ ഏറ്റവും നല്ല അനലിറ്റിക്കൽ അപ്രോച്ച് ഏതാണ്?",
    "options": [
      { "text": "മെഷർ ടൂൾ ഉപയോഗിച്ച് പുതുമലയിലെ ചരിവ് അളക്കുക, അതേ ചരിവുള്ള മറ്റെല്ലാ പ്രദേശങ്ങളും കണ്ടെത്തുക.", "isCorrect": false },
      { "text": "പുതുമല പ്രദേശത്തിന്റെ ഒരു എലിവേഷൻ ക്രോസ്-സെക്ഷൻ സൃഷ്ടിക്കാൻ പ്രോഫൈൽ ടൂൾ ഉപയോഗിക്കുക.", "isCorrect": false },
      { "text": "പുതുമല പോയിന്റിൽ ചരിവ്, ആസ്പെക്റ്റ്, എലിവേഷൻ എന്നിവ ലഭിക്കാൻ ഐഡന്റിഫൈ ടൂൾ ഉപയോഗിക്കുക. തുടർന്ന്, സമാനമായ സവിശേഷതകളുള്ള എല്ലാ പിക്സലുകളും കണ്ടെത്താൻ റാസ്റ്റർ കാൽക്കുലേറ്റർ ഉപയോഗിക്കുക (ഉദാ. 5 ഡിഗ്രിക്കുള്ളിലുള്ള ചരിവ്, സമാനമായ ആസ്പെക്റ്റ്).", "isCorrect": true },
      { "text": "ഒരു നിർദ്ദിഷ്ട മുമ്പത്തെ ഇവന്റുമായി പുതിയ പ്രദേശങ്ങൾ താരതമ്യം ചെയ്യാൻ ഒരു മാർഗ്ഗവുമില്ല.", "isCorrect": false }
    ]
  },
  {
    "question": "സ്റ്റെല്ലേറിയത്തിൽ, അർദ്ധരാത്രിയിൽ ആകാശത്തിൽ ഏറ്റവും ഉയർന്ന സ്ഥാനത്ത് എത്തുമ്പോൾ ഓറിയൻ നെബുല (M42) നിരീക്ഷിക്കാനുള്ള ഒപ്റ്റിമൽ തീയതി നിർണ്ണയിക്കാൻ ഒരു ജ്യോതിശാസ്ത്രജ്ഞന് ആവശ്യമാണ്. ശരിയായ നടപടിക്രമം ഏതാണ്?",
    "options": [
      { "text": "M42 തിരയുക, അതിന്റെ നിശ്ചലമായ വലതുഭുജവും ചരിവും റെക്കോർഡ് ചെയ്യുക.", "isCorrect": false },
      { "text": "M42 തിരയുക. തുടർന്ന്, ഒബ്ജക്റ്റിന്റെ ട്രാൻസിറ്റ് സമയം (അവറേജ് 0) പ്രാദേശിക സമയം 00:00 ന് അടുത്തായിരിക്കുന്നതുവരെ തീയതി മാറ്റാൻ ഡേറ്റ്/ടൈം വിൻഡോ ഉപയോഗിക്കുക.", "isCorrect": true },
      { "text": "ഡിസംബർ 25-ന് അർദ്ധരാത്രിയിൽ ഓറിയൻ നെബുല എല്ലായ്പ്പോഴും ദൃശ്യമാകും.", "isCorrect": false },
      { "text": "എല്ലാ ഖഗോള വസ്തുക്കളുടെയും ഏറ്റവും നല്ല കാഴ്ചയ്ക്ക് സ്ഥലം ഭൂമധ്യരേഖയിലേക്ക് സജ്ജമാക്കുക.", "isCorrect": false }
    ]
  },
  {
    "question": "ജിയോജിബ്രയിൽ, നിങ്ങൾ y = x*tan(θ) - (g*x²)/(2*v²*cos²(θ)) എന്ന സമവാക്യം ഉപയോഗിച്ച് ഒരു പ്രൊജക്ടൈൽ മോഷൻ മോഡലിംഗ് ചെയ്യുന്നു, ഇവിടെ θ, *v* എന്നിവ സ്ലൈഡറുകളാണ്. പ്രൊജക്ടൈലിന്റെ **റേഞ്ച്** (പോസിറ്റീവ് x-ഇന്റർസെപ്റ്റ്) കണ്ടെത്താൻ, ഏത് കമാൻഡ് ആണ് നിങ്ങൾ ഉപയോഗിക്കേണ്ടത്?",
    "options": [
      { "text": "Root(f)", "isCorrect": false },
      { "text": "Intersect(f, xAxis)", "isCorrect": false },
      { "text": "Solve(y=0, x)", "isCorrect": false },
      { "text": "ഫംഗ്ഷൻ *f* എങ്ങനെ നിർവചിച്ചിരിക്കുന്നു എന്നതിനെ ആശ്രയിച്ച് b അല്ലെങ്കിൽ c എന്നിവ പ്രവർത്തിക്കും.", "isCorrect": true }
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
