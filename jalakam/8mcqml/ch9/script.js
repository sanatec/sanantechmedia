document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "ക്യാമറ ഓൺ ചെയ്യുന്നതിനും ഓഫ് ചെയ്യുന്നതിനും ഇടയിൽ ചിത്രീകരിക്കുന്ന രംഗങ്ങളെ അറിയപ്പെടുന്നത്?",
    "options": [
      { "text": "പ്രോജക്റ്റ് ഫയൽ", "isCorrect": false },
      { "text": "ഷോട്ട് (Shot)", "isCorrect": true },
      { "text": "ട്രാൻസിഷൻ", "isCorrect": false },
      { "text": "കോമ്പോസിഷൻ", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു ഡിജിറ്റൽ ഇമേജ് വിവരത്തിന്റെ ഏറ്റവും ചെറിയ യൂണിറ്റ് ഏതാണ്?",
    "options": [
      { "text": "മെഗാപിക്സൽ", "isCorrect": false },
      { "text": "വെക്ടർ", "isCorrect": false },
      { "text": "പിക്സൽ (Pixel)", "isCorrect": true },
      { "text": "ഫ്രെയിം", "isCorrect": false }
    ]
  },
  {
    "question": "ഇമേജിന്റെ വ്യക്തത വർധിക്കുന്നതിനനുസരിച്ച് കൂടുന്ന, ഫോട്ടോകളുടെയോ വീഡിയോകളുടെയോ റെസല്യൂഷൻ (Resolution) വ്യക്തമാക്കാൻ ഉപയോഗിക്കുന്ന യൂണിറ്റ്?",
    "options": [
      { "text": "ഫ്രെയിം റേറ്റ് (Frame Rate)", "isCorrect": false },
      { "text": "ആസ്പെക്റ്റ് റേഷ്യോ (Aspect Ratio)", "isCorrect": false },
      { "text": "മെഗാപിക്സൽ (Megapixel)", "isCorrect": true },
      { "text": "എക്സ്പോഷർ (Exposure)", "isCorrect": false }
    ]
  },
  {
    "question": "ക്യാമറ ക്രമീകരണങ്ങളിൽ **എക്സ്പോഷർ (Exposure)** എന്നത് എന്തിനെയാണ് സൂചിപ്പിക്കുന്നത്?",
    "options": [
      { "text": "വിഷ്വലുകളുടെ നിറവ്യത്യാസം.", "isCorrect": false },
      { "text": "ഇമേജ് സൃഷ്ടിക്കാൻ ക്യാമറ സെൻസറിലേക്ക് പ്രവേശിക്കുന്ന പ്രകാശത്തിന്റെ അളവ്.", "isCorrect": true },
      { "text": "ബാക്ക്ഗ്രൗണ്ടിന്റെ ഷാർപ്നെസ്.", "isCorrect": false },
      { "text": "ചിത്രീകരിക്കുന്ന ഷോട്ടുകളുടെ എണ്ണം.", "isCorrect": false }
    ]
  },
  {
    "question": "മൊബൈൽ ഫോൺ ക്യാമറയുമായി താരതമ്യം ചെയ്യുമ്പോൾ **DSLR ക്യാമറയുടെ** പ്രധാന നേട്ടം എന്താണ്?",
    "options": [
      { "text": "കൂടുതൽ പോർട്ടബിലിറ്റി.", "isCorrect": false },
      { "text": "ഉയർന്ന ഇമേജ് ക്വാളിറ്റിയും ലെൻസ് മാറ്റാൻ കഴിയുന്ന സൗകര്യവും.", "isCorrect": true },
      { "text": "വേഗത്തിലുള്ള സോഷ്യൽ മീഡിയ അപ്‌ലോഡ്.", "isCorrect": false },
      { "text": "ഇൻബിൽറ്റ് എഡിറ്റിംഗ് സോഫ്റ്റ്‌വെയർ.", "isCorrect": false }
    ]
  },
  {
    "question": "പ്ലാസ്റ്റിക് മാലിന്യത്തിന്റെ **തീവ്രത ഫലപ്രദമായി കൈമാറാൻ** കഴിയുന്നതും, വിഷയം ക്ലോസപ്പിൽ ശ്രദ്ധ കേന്ദ്രീകരിക്കുന്നതുമായ ക്യാമറ ഷോട്ട് തരം ഏതാണ്?",
    "options": [
      { "text": "എക്‌സ്ട്രീം വൈഡ് ഷോട്ട് (Extreme Wide Shot)", "isCorrect": false },
      { "text": "മീഡിയം ഷോട്ട് (Medium Shot)", "isCorrect": false },
      { "text": "ക്ലോസപ്പ് ഷോട്ട് (Close-up Shot)", "isCorrect": true },
      { "text": "ലോംഗ് ഷോട്ട് (Long Shot)", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു വ്യക്തിയെ അരക്കെട്ട് മുതൽ മുകളിലേക്ക് കാണിക്കുകയും, ചലനത്തിനും ആവിഷ്കാരത്തിനും പ്രാധാന്യം നൽകുകയും ചെയ്യുന്ന അടിസ്ഥാന ക്യാമറ ഷോട്ട് ഏതാണ്?",
    "options": [
      { "text": "എക്‌സ്ട്രീം വൈഡ് ഷോട്ട്", "isCorrect": false },
      { "text": "മീഡിയം ഷോട്ട് (Medium Shot)", "isCorrect": true },
      { "text": "ക്ലോസപ്പ് ഷോട്ട്", "isCorrect": false },
      { "text": "ലോംഗ് ഷോട്ട്", "isCorrect": false }
    ]
  },
  {
    "question": "ഈ അദ്ധ്യായത്തിൽ പ്രാഥമിക വീഡിയോ എഡിറ്റിംഗ് ടൂളായി ഉപയോഗിക്കുന്ന സൗജന്യ സോഫ്റ്റ്‌വെയർ ആപ്ലിക്കേഷൻ ഏതാണ്?",
    "options": [
      { "text": "Adobe Premiere Pro", "isCorrect": false },
      { "text": "Final Cut Pro", "isCorrect": false },
      { "text": "Kdenlive", "isCorrect": true },
      { "text": "OpenShot", "isCorrect": false }
    ]
  },
  {
    "question": "Kdenlive-ൽ, പ്രോജക്റ്റിൽ ഉപയോഗിക്കേണ്ട എല്ലാ വീഡിയോ ക്ലിപ്പുകളും ചിത്രങ്ങളും ഓഡിയോ ഫയലുകളും **ആദ്യം ഇമ്പോർട്ട് ചെയ്ത്** സൂക്ഷിക്കുന്ന സ്ഥലം?",
    "options": [
      { "text": "പ്രോജക്ട് മോണിറ്റർ (Project Monitor)", "isCorrect": false },
      { "text": "ക്ലിപ്പ് മോണിറ്റർ (Clip Monitor)", "isCorrect": false },
      { "text": "പ്രോജക്ട് ബിൻ (Project Bin)", "isCorrect": true },
      { "text": "വീഡിയോ ട്രാക്ക് 1", "isCorrect": false }
    ]
  },
  {
    "question": "Kdenlive ടൈംലൈനിലെ **റേസർ ടൂളിന്റെ (Razor Tool)** ഉപയോഗം എന്താണ്?",
    "options": [
      { "text": "ടൈംലൈൻ സൂം ചെയ്യാൻ.", "isCorrect": false },
      { "text": "ഒരു വീഡിയോ ക്ലിപ്പിനെ വെട്ടി പ്രത്യേക ഭാഗങ്ങളായി മാറ്റാൻ.", "isCorrect": true },
      { "text": "ക്ലിപ്പുകൾ വലിച്ചിഴച്ച് ക്രമീകരിക്കാൻ.", "isCorrect": false },
      { "text": "കളർ ഫിൽട്ടർ ചേർക്കാൻ.", "isCorrect": false }
    ]
  },
  {
    "question": "Kdenlive ടൈംലൈനിലെ ഒരു വീഡിയോ ക്ലിപ്പിൽ ഉൾച്ചേർത്ത ഓഡിയോ വേർതിരിച്ച് നീക്കം ചെയ്യാൻ നിങ്ങൾ ആദ്യം ചെയ്യേണ്ടത് എന്താണ്?",
    "options": [
      { "text": "'Mute' ഇഫക്റ്റ് പ്രയോഗിക്കുക.", "isCorrect": false },
      { "text": "ക്ലിക്ക് റൈറ്റ് ക്ലിക്ക് ചെയ്ത് 'Ungroup Clips' തിരഞ്ഞെടുക്കുക.", "isCorrect": true },
      { "text": "ഓഡിയോയിൽ റേസർ ടൂൾ ഉപയോഗിക്കുക.", "isCorrect": false },
      { "text": "വീഡിയോ ട്രാക്ക് ഡിലീറ്റ് ചെയ്യുക.", "isCorrect": false }
    ]
  },
  {
    "question": "രംഗങ്ങൾ തമ്മിലുള്ള മാറ്റം സുഗമമാക്കാൻ ചേർക്കുന്ന **ട്രാൻസിഷൻ ഇഫക്റ്റുകൾക്ക്** Kdenlive-ൽ ഉപയോഗിക്കുന്ന സാങ്കേതിക പദം എന്താണ്?",
    "options": [
      { "text": "ഇഫക്റ്റുകൾ (Effects)", "isCorrect": false },
      { "text": "കോമ്പോസിഷനുകൾ (Compositions)", "isCorrect": true },
      { "text": "റെൻഡറിംഗുകൾ (Renderings)", "isCorrect": false },
      { "text": "സബ്‌ടൈറ്റിലുകൾ (Subtitles)", "isCorrect": false }
    ]
  },
  {
    "question": "Kdenlive-ൽ ടൈറ്റിലുകൾക്കും ക്രെഡിറ്റുകൾക്കുമായി വീഡിയോയിലേക്ക് ടെക്സ്റ്റ് വിവരങ്ങൾ ടൈപ്പ് ചെയ്ത് ചേർക്കാൻ ഉപയോക്താക്കളെ അനുവദിക്കുന്ന ഫീച്ചർ ഏതാണ്?",
    "options": [
      { "text": "ആഡ് ഇമേജ് സീക്വൻസ് (Add Image Sequence)", "isCorrect": false },
      { "text": "ആഡ് ടൈറ്റിൽ ക്ലിപ്പ് (Add Title Clip)", "isCorrect": true },
      { "text": "ആഡ് കളർ ക്ലിപ്പ് (Add Color Clip)", "isCorrect": false },
      { "text": "ക്രിയേറ്റ് ആനിമേഷൻ (Create Animation)", "isCorrect": false }
    ]
  },
  {
    "question": "Kdenlive-ൽ **HD720p 25fps** പ്രൊഫൈൽ ഉപയോഗിച്ച് സൃഷ്ടിച്ച ഒരു വീഡിയോ പ്രോജക്റ്റിന്റെ റെസല്യൂഷൻ എത്രയായിരിക്കും?",
    "options": [
      { "text": "1920x1080", "isCorrect": false },
      { "text": "640x480", "isCorrect": false },
      { "text": "3840x2160", "isCorrect": false },
      { "text": "1280x720", "isCorrect": true }
    ]
  },
  {
    "question": "അദ്ധ്യായത്തിൽ പരാമർശിച്ചിട്ടുള്ള ഒരു മൊബൈൽ വീഡിയോ എഡിറ്റിംഗ് ആപ്ലിക്കേഷൻ ഏതാണ്?",
    "options": [
      { "text": "Kdenlive", "isCorrect": false },
      { "text": "InShot", "isCorrect": true },
      { "text": "GIMP", "isCorrect": false },
      { "text": "Blender", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു മൊബൈൽ ഫോൺ ഉപയോഗിച്ച് ഔട്ട്ഡോറിൽ വീഡിയോ ചിത്രീകരിക്കുമ്പോൾ, കൈ ചലനങ്ങൾ മൂലമുള്ള കുലുക്കം ഒഴിവാക്കാൻ **ക്യാമറ സ്ഥിരത ഉറപ്പാക്കാൻ** ഉപയോഗിക്കേണ്ട ഉപകരണം ഏതാണ്?",
    "options": [
      { "text": "റിംഗ് ലൈറ്റ്", "isCorrect": false },
      { "text": "എക്സ്റ്റേണൽ ഹാർഡ് ഡ്രൈവ്", "isCorrect": false },
      { "text": "ജിംബൽ അഥവാ ട്രൈപോഡ്", "isCorrect": true },
      { "text": "മൈക്രോഫൈബർ തുണി", "isCorrect": false }
    ]
  },
  {
    "question": "വീഡിയോ ഷൂട്ട് ചെയ്യുന്നതിനു **മുമ്പ്** ചെയ്യേണ്ട ഒരു സുപ്രധാന അടിസ്ഥാന ഘട്ടം ഏതാണ്?",
    "options": [
      { "text": "എഡിറ്റിംഗ് സോഫ്റ്റ്‌വെയറിൽ സ്പെഷ്യൽ ഇഫക്റ്റുകൾ പ്രയോഗിക്കുക.", "isCorrect": false },
      { "text": "വീഡിയോ ഒരു ഫയലായി റെൻഡർ ചെയ്യുക.", "isCorrect": false },
      { "text": "വീഡിയോക്ക് ആവശ്യമായ തിരക്കഥ (Script) തയ്യാറാക്കുക.", "isCorrect": true },
      { "text": "റോ ഫൂട്ടേജ് സോഷ്യൽ മീഡിയയിൽ നേരിട്ട് അപ്‌ലോഡ് ചെയ്യുക.", "isCorrect": false }
    ]
  },
  {
    "question": "വിഷയത്തിന്റെ ശരീരം മുഴുവനായും ചുറ്റുമുള്ള പരിസ്ഥിതിയും കാണിക്കാൻ ഉപയോഗിക്കുന്ന ക്യാമറ ഷോട്ട് തരം ഏതാണ്?",
    "options": [
      { "text": "ക്ലോസപ്പ് ഷോട്ട്", "isCorrect": false },
      { "text": "മീഡിയം ക്ലോസപ്പ്", "isCorrect": false },
      { "text": "ലോംഗ് ഷോട്ട് (അഥവാ വൈഡ് ഷോട്ട്)", "isCorrect": true },
      { "text": "എക്‌സ്ട്രീം ക്ലോസപ്പ്", "isCorrect": false }
    ]
  },
  {
    "question": "Kdenlive-ൽ ടൈംലൈനിലെ ഒരു ക്ലിപ്പിന്റെ മധ്യഭാഗത്തെ ഒരു ഭാഗം നീക്കം ചെയ്ത് ക്ലിപ്പ് ചെറുതാക്കാൻ, ഏത് ടൂൾ ആണ് നിങ്ങൾ രണ്ടുതവണ ഉപയോഗിക്കേണ്ടത്?",
    "options": [
      { "text": "സെലക്ട് ടൂൾ", "isCorrect": false },
      { "text": "സ്പേസർ ടൂൾ", "isCorrect": false },
      { "text": "റേസർ ടൂൾ", "isCorrect": true },
      { "text": "സൂം ടൂൾ", "isCorrect": false }
    ]
  },
  {
    "question": "എഡിറ്റിംഗിന് ശേഷം, Kdenlive പ്രോജക്റ്റ് ഫയലിനെ (എഡിറ്റുകളും ക്രമീകരണങ്ങളും അടങ്ങിയത്) ഒറ്റ, കാണാൻ കഴിയുന്ന വീഡിയോ ഫയലായി (.mp4 പോലെ) മാറ്റുന്ന പ്രക്രിയ?",
    "options": [
      { "text": "ഇംപോർട്ടിംഗ്", "isCorrect": false },
      { "text": "ആർക്കൈവിംഗ്", "isCorrect": false },
      { "text": "റെൻഡറിംഗ്/എക്സ്പോർട്ടിംഗ്", "isCorrect": true },
      { "text": "അൺഗ്രൂപ്പിംഗ്", "isCorrect": false }
    ]
  },
  {
    "question": "വിഷയത്തിന്റെ മുഖം സ്ക്രീനിൽ നിറയ്ക്കുകയും അവരുടെ വികാരങ്ങൾക്കും പ്രതികരണങ്ങൾക്കും പ്രാധാന്യം നൽകുകയും ചെയ്യുന്ന ഷോട്ട് ഏതാണ്?",
    "options": [
      { "text": "ലോംഗ് ഷോട്ട്", "isCorrect": false },
      { "text": "ക്ലോസപ്പ് ഷോട്ട്", "isCorrect": true },
      { "text": "വൈഡ് ഷോട്ട്", "isCorrect": false },
      { "text": "മീഡിയം ഷോട്ട്", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു **വൈഡ് ഷോട്ടിന്റെ** പ്രധാന പ്രത്യേകത എന്താണ്?",
    "options": [
      { "text": "വിഷയത്തിന്റെ ചെറിയൊരു ഭാഗം മാത്രം കാണിക്കുന്നു.", "isCorrect": false },
      { "text": "വിഷയത്തെ അരക്കെട്ട് മുതൽ മുകളിലേക്ക് കാണിക്കുന്നു.", "isCorrect": false },
      { "text": "വിഷയത്തിന്റെ ശരീരം മുഴുവനായും ചുറ്റുമുള്ള പശ്ചാത്തലവും ഉൾക്കൊള്ളിക്കുന്നു.", "isCorrect": true },
      { "text": "വിഷയത്തിന്റെ കണ്ണുകളിൽ മാത്രം ശ്രദ്ധ കേന്ദ്രീകരിക്കുന്നു.", "isCorrect": false }
    ]
  },
  {
    "question": "സെൻസറിൽ ആവശ്യത്തിന് വെളിച്ചം പതിക്കാത്തതിനാൽ നിങ്ങളുടെ വീഡിയോ ഇരുണ്ടിരിക്കുകയാണെങ്കിൽ, ഏത് പൊതുവായ ക്യാമറ ക്രമീകരണമാണ് കൂട്ടേണ്ടത്?",
    "options": [
      { "text": "ആസ്പെക്റ്റ് റേഷ്യോ", "isCorrect": false },
      { "text": "ഫ്രെയിം റേറ്റ്", "isCorrect": false },
      { "text": "മെഗാപിക്സൽ എണ്ണം", "isCorrect": false },
      { "text": "എക്സ്പോഷർ (അല്ലെങ്കിൽ അനുബന്ധ ക്രമീകരണങ്ങളായ അപ്പേർച്ചർ/ISO)", "isCorrect": true }
    ]
  },
  {
    "question": "അദ്ധ്യായത്തിൽ പരാമർശിച്ച ഒരു ഓൺലൈൻ വീഡിയോ എഡിറ്റർ ഏതാണ്?",
    "options": [
      { "text": "InShot", "isCorrect": false },
      { "text": "VN", "isCorrect": false },
      { "text": "Canva", "isCorrect": true },
      { "text": "Filmora", "isCorrect": false }
    ]
  },
  {
    "question": "Kdenlive-ൽ ക്ലിപ്പുകൾ ക്രമീകരിക്കുമ്പോൾ, വീഡിയോയുടെയും ഓഡിയോയുടെയും അന്തിമ ശ്രേണി എവിടെയാണ് വെക്കുന്നത്?",
    "options": [
      { "text": "പ്രോജക്ട് ബിൻ", "isCorrect": false },
      { "text": "ക്ലിപ്പ് മോണിറ്റർ", "isCorrect": false },
      { "text": "ടൈംലൈൻ/ട്രാക്കുകൾ", "isCorrect": true },
      { "text": "ടൈറ്റിൽ ക്ലിപ്പ് എഡിറ്റർ", "isCorrect": false }
    ]
  },
  {
    "question": "Kdenlive-ൽ, പശ്ചാത്തല സംഗീതം വീഡിയോയ്‌ക്കൊപ്പം പ്ലേ ചെയ്യാൻ, അത് എവിടെയാണ് സ്ഥാപിക്കേണ്ടത്?",
    "options": [
      { "text": "പ്രോജക്ട് ബിന്നിൽ", "isCorrect": false },
      { "text": "ഒരു ഓഡിയോ ട്രാക്കിൽ (A1, A2, മുതലായവ)", "isCorrect": true },
      { "text": "പ്രോജക്ട് മോണിറ്ററിൽ", "isCorrect": false },
      { "text": "ടൈറ്റിൽ ക്ലിപ്പിൽ", "isCorrect": false }
    ]
  },
  {
    "question": "പ്ലാസ്റ്റിക് മാലിന്യം പോലുള്ള ഒരു അവബോധ വീഡിയോ നിർമ്മിക്കുമ്പോൾ, നിർദ്ദേശിക്കപ്പെട്ട ഘട്ടങ്ങൾ അനുസരിച്ച് ആദ്യം തയ്യാറാക്കേണ്ടത് എന്താണ്?",
    "options": [
      { "text": "അന്തിമ എഡിറ്റിംഗ് സീക്വൻസ്.", "isCorrect": false },
      { "text": "ഒരു വിശദമായ വീഡിയോ തിരക്കഥ (Script).", "isCorrect": true },
      { "text": "പശ്ചാത്തല സംഗീത ട്രാക്ക്.", "isCorrect": false },
      { "text": "അവസാന ടൈറ്റിൽ കാർഡ്.", "isCorrect": false }
    ]
  },
  {
    "question": "Kdenlive ഇന്റർഫേസിലെ **പ്രോജക്ട് മോണിറ്ററിന്റെ** പ്രാഥമിക ഉപയോഗം എന്താണ്?",
    "options": [
      { "text": "ടൈംലൈനിൽ ചേർക്കുന്നതിന് മുമ്പ് വ്യക്തിഗത ക്ലിപ്പുകൾ കാണാൻ.", "isCorrect": false },
      { "text": "ടൈംലൈനിൽ എഡിറ്റ് ചെയ്യുന്ന വീഡിയോ മുഴുവനായും പ്രിവ്യൂ ചെയ്യാൻ.", "isCorrect": true },
      { "text": "ഇമ്പോർട്ട് ചെയ്ത മീഡിയ ഫയലുകൾ സൂക്ഷിക്കാൻ.", "isCorrect": false },
      { "text": "ഓഡിയോ, വീഡിയോ ട്രാക്കുകൾ വേർതിരിക്കാൻ.", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു **ക്ലോസപ്പ് (Close-up)** ഷോട്ട് എന്തിനാണ് ഊന്നൽ നൽകുന്നത്?",
    "options": [
      { "text": "പരിസ്ഥിതിക്കോ പശ്ചാത്തലത്തിനോ.", "isCorrect": false },
      { "text": "വിഷയത്തിന്റെ മുഴുവൻ ശരീരത്തിനോ.", "isCorrect": false },
      { "text": "ചെറിയ വിശദാംശങ്ങൾ, വികാരങ്ങൾ, അല്ലെങ്കിൽ പ്രത്യേക വസ്തുക്കൾ.", "isCorrect": true },
      { "text": "രണ്ട് കഥാപാത്രങ്ങൾ തമ്മിലുള്ള സംഭാഷണത്തിനോ.", "isCorrect": false }
    ]
  },
  {
    "question": "മൊബൈലിൽ വീഡിയോ എഡിറ്റിംഗിനായി പരാമർശിച്ചിരിക്കുന്ന ഒരു ആപ്ലിക്കേഷൻ ഏതാണ്?",
    "options": [
      { "text": "Kdenlive", "isCorrect": false },
      { "text": "InVideo AI", "isCorrect": false },
      { "text": "PowerDirector", "isCorrect": true },
      { "text": "Clideo", "isCorrect": false }
    ]
  },
  {
    "question": "വിഷയം ചെറുതായി കാണിക്കുകയും ചുറ്റുപാടുകളുടെ വലിയ തോതിലുള്ള കാഴ്ചയ്ക്ക് പ്രാധാന്യം നൽകുകയും ചെയ്യുന്ന വൈഡ് ഷോട്ട് ഏതാണ്?",
    "options": [
      { "text": "ക്ലോസപ്പ് ഷോട്ട്", "isCorrect": false },
      { "text": "മീഡിയം ഷോട്ട്", "isCorrect": false },
      { "text": "എക്‌സ്ട്രീം വൈഡ് ഷോട്ട് (Extreme Wide Shot)", "isCorrect": true },
      { "text": "മീഡിയം ക്ലോസപ്പ്", "isCorrect": false }
    ]
  },
  {
    "question": "Kdenlive-ൽ HD1080p 25fps എന്ന പ്രൊഫൈൽ ഉപയോഗിച്ച് എഡിറ്റ് ചെയ്യുകയാണെങ്കിൽ, ലഭിക്കുന്ന വീഡിയോയുടെ റെസല്യൂഷൻ (Resolution) എത്രയായിരിക്കും?",
    "options": [
      { "text": "1280x720", "isCorrect": false },
      { "text": "1920x1080", "isCorrect": true },
      { "text": "640x480", "isCorrect": false },
      { "text": "2560x1440", "isCorrect": false }
    ]
  },
  {
    "question": "Kdenlive-ൽ, ഒരു ക്ലിപ്പ് സാവധാനം മാഞ്ഞുപോയി അടുത്ത ക്ലിപ്പ് വെളിപ്പെടുന്ന രീതിയിലുള്ള ട്രാൻസിഷൻ ചേർക്കാൻ ഏത് ഫീച്ചറാണ് ഉപയോഗിക്കേണ്ടത്?",
    "options": [
      { "text": "റേസർ ടൂൾ", "isCorrect": false },
      { "text": "ഇഫക്റ്റുകൾ", "isCorrect": false },
      { "text": "കോമ്പോസിഷനുകൾ (ട്രാൻസിഷനുകൾ)", "isCorrect": true },
      { "text": "ആഡ് ടൈറ്റിൽ ക്ലിപ്പ്", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു വീഡിയോയുടെ റെസല്യൂഷൻ പ്രധാനമായും നിർണ്ണയിക്കുന്നത് എന്തിന്റെ എണ്ണമാണ്?",
    "options": [
      { "text": "ഉപയോഗിച്ച കോമ്പോസിഷനുകൾ", "isCorrect": false },
      { "text": "വീഡിയോയിലെ ഷോട്ടുകൾ", "isCorrect": false },
      { "text": "ചിത്രീകരിച്ച പിക്സലുകൾ", "isCorrect": true },
      { "text": "ചേർത്ത ഓഡിയോ ട്രാക്കുകൾ", "isCorrect": false }
    ]
  },
  {
    "question": "വിഷയത്തെ കാൽമുട്ട് മുതൽ മുകളിലേക്ക് കാണിക്കുകയും, ആക്ഷനും ഭാവപ്രകടനത്തിനും ഒരു സന്തുലിതാവസ്ഥ നൽകുകയും ചെയ്യുന്ന ഷോട്ട് തരം ഏതാണ്?",
    "options": [
      { "text": "ക്ലോസപ്പ് ഷോട്ട്", "isCorrect": false },
      { "text": "എക്‌സ്ട്രീം വൈഡ് ഷോട്ട്", "isCorrect": false },
      { "text": "മീഡിയം ലോംഗ് ഷോട്ട് (Medium Long Shot)", "isCorrect": true },
      { "text": "എക്‌സ്ട്രീം ക്ലോസപ്പ്", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു വിദ്യാർത്ഥിക്ക് Kdenlive വീഡിയോയുടെ തുടക്കത്തിൽ 5 സെക്കൻഡ് നേരത്തേക്ക് പ്രോജക്റ്റ് ടൈറ്റിൽ മാത്രം കാണിക്കണം. ടെക്സ്റ്റിന്റെ **പശ്ചാത്തലമായി** ഒരു കറുത്ത സ്ക്രീൻ സൃഷ്ടിക്കാൻ ഏത് Kdenlive ഫീച്ചറാണ് ഉപയോഗിക്കേണ്ടത്?",
    "options": [
      { "text": "ഇംപോർട്ട് ഇമേജ്", "isCorrect": false },
      { "text": "ആഡ് ഇമേജ് സീക്വൻസ്", "isCorrect": false },
      { "text": "ആഡ് ടൈറ്റിൽ ക്ലിപ്പ്", "isCorrect": false },
      { "text": "ആഡ് കളർ ക്ലിപ്പ് (കറുത്ത പശ്ചാത്തലത്തിനായി)", "isCorrect": true }
    ]
  },
  {
    "question": "മൊബൈൽ ക്യാമറകളെ അപേക്ഷിച്ച് DSLR ക്യാമറകൾക്ക് മികച്ച ഇമേജ് നിലവാരം നൽകാൻ കഴിയുന്ന പ്രധാന സാങ്കേതിക കാരണം എന്താണ്?",
    "options": [
      { "text": "അവ പ്രൊപ്രൈറ്ററി ഫയൽ ഫോർമാറ്റുകൾ ഉപയോഗിക്കുന്നു.", "isCorrect": false },
      { "text": "അവയ്ക്ക് വലിയ സെൻസറുകളും ലെൻസുകൾ മാറ്റാനുള്ള സൗകര്യവുമുണ്ട്.", "isCorrect": true },
      { "text": "അവ ഭാരം കുറഞ്ഞതും ഒതുക്കമുള്ളതുമാണ്.", "isCorrect": false },
      { "text": "അവയ്ക്ക് ഇൻബിൽറ്റ് സോഷ്യൽ മീഡിയ കണക്റ്റിവിറ്റി ഉണ്ട്.", "isCorrect": false }
    ]
  },
  {
    "question": "Kdenlive ഇന്റർഫേസിലെ ഏത് ഘടകമാണ് ക്ലിപ്പുകൾ ശരിയായ ക്രമത്തിൽ വലിച്ചിട്ട് sequencing ചെയ്യാൻ പ്രധാനമായും ഉപയോഗിക്കുന്നത്?",
    "options": [
      { "text": "പ്രോജക്ട് ബിൻ", "isCorrect": false },
      { "text": "ക്ലിപ്പ് മോണിറ്റർ", "isCorrect": false },
      { "text": "ടൈംലൈൻ/ട്രാക്കുകൾ", "isCorrect": true },
      { "text": "ഇഫക്ട്സ് പാനൽ", "isCorrect": false }
    ]
  },
  {
    "question": "'HD720p 25fps' എന്നതിൽ '25fps' എന്നത് എന്തിനെ സൂചിപ്പിക്കുന്നു?",
    "options": [
      { "text": "ഫ്രെയിമിലെ ആകെ പിക്സലുകളുടെ എണ്ണം.", "isCorrect": false },
      { "text": "വീഡിയോയുടെ ഫയൽ സൈസ്.", "isCorrect": false },
      { "text": "ഫ്രെയിം റേറ്റ് (Frames Per Second).", "isCorrect": true },
      { "text": "എക്സ്പോഷർ ക്രമീകരണം.", "isCorrect": false }
    ]
  },
  {
    "question": "താഴെ പറയുന്നവയിൽ **വീഡിയോ എഡിറ്റിംഗിന്റെ** പ്രധാന ധർമ്മം എന്താണ്?",
    "options": [
      { "text": "ക്യാമറ ഉപയോഗിച്ച് റോ ഫൂട്ടേജ് ചിത്രീകരിക്കുക.", "isCorrect": false },
      { "text": "ക്ലിപ്പുകൾ ക്രമീകരിക്കുക, കട്ട് ചെയ്യുക, ഇഫക്റ്റുകൾ നൽകുക, അതുവഴി ഒരു ഫൈനൽ വീഡിയോ സൃഷ്ടിക്കുക.", "isCorrect": true },
      { "text": "തിരക്കഥയും കഥയുടെ ഒഴുക്കും രൂപകൽപ്പന ചെയ്യുക.", "isCorrect": false },
      { "text": "വീഡിയോ സോഷ്യൽ മീഡിയ പ്ലാറ്റ്‌ഫോമുകളിൽ പബ്ലിഷ് ചെയ്യുക.", "isCorrect": false }
    ]
  },
  {
    "question": "ഞെട്ടിക്കുന്ന വാർത്തയോടുള്ള ഒരു കഥാപാത്രത്തിന്റെ തീവ്രമായ മുഖഭാവം സ്ക്രീനിൽ നിറഞ്ഞ് കാണിക്കാൻ ഒരു സംവിധായകന് ആവശ്യമുള്ള ഷോട്ട് ഏതാണ്?",
    "options": [
      { "text": "വൈഡ് ഷോട്ട്", "isCorrect": false },
      { "text": "മീഡിയം ക്ലോസപ്പ് (Medium Close-up)", "isCorrect": true },
      { "text": "ലോംഗ് ഷോട്ട്", "isCorrect": false },
      { "text": "എക്‌സ്ട്രീം വൈഡ് ഷോട്ട്", "isCorrect": false }
    ]
  },
  {
    "question": "പാഠഭാഗത്ത് പരാമർശിച്ച ഒരു ഓൺലൈൻ വീഡിയോ എഡിറ്റർ ഏതാണ്?",
    "options": [
      { "text": "VN", "isCorrect": false },
      { "text": "Clideo", "isCorrect": true },
      { "text": "InShot", "isCorrect": false },
      { "text": "Kdenlive", "isCorrect": false }
    ]
  },
  {
    "question": "'Ungroup Clips' ഉപയോഗിച്ച് വീഡിയോയും ഓഡിയോയും വേർതിരിച്ച ശേഷം, ടൈംലൈനിൽ നിന്ന് **ഓഡിയോ ക്ലിപ്പ് മാത്രം** എങ്ങനെ നീക്കം ചെയ്യാം?",
    "options": [
      { "text": "വീഡിയോ ക്ലിക്ക് റൈറ്റ് ക്ലിക്ക് ചെയ്ത് 'Delete' തിരഞ്ഞെടുക്കുക.", "isCorrect": false },
      { "text": "ഓഡിയോ ക്ലിപ്പ് തിരഞ്ഞെടുത്ത് Delete കീ അമർത്തുക.", "isCorrect": true },
      { "text": "ഓഡിയോ ട്രാക്കിൽ 'Silence' ഇഫക്റ്റ് പ്രയോഗിക്കുക.", "isCorrect": false },
      { "text": "'Add Title Clip' ഫീച്ചർ ഉപയോഗിക്കുക.", "isCorrect": false }
    ]
  },
  {
    "question": "വിവിധ ലൈറ്റിംഗ് സാഹചര്യങ്ങളിൽ നിറങ്ങൾ കൃത്യമായി പുനർനിർമ്മിക്കുന്നത് ഏത് ക്യാമറ ക്രമീകരണമാണ് നിയന്ത്രിക്കുന്നത്?",
    "options": [
      { "text": "ഫ്രെയിം റേറ്റ്", "isCorrect": false },
      { "text": "വൈറ്റ് ബാലൻസ് (White Balance)", "isCorrect": true },
      { "text": "ആസ്പെക്റ്റ് റേഷ്യോ", "isCorrect": false },
      { "text": "പിക്സൽ എണ്ണം", "isCorrect": false }
    ]
  },
  {
    "question": "പ്രോജക്ട് ബിന്നിൽ നിന്ന് ഒരു ക്ലിപ്പ് ടൈംലൈനിൽ ചേർക്കുന്നതിന് മുമ്പ് കാണുന്നതിന് Kdenlive-ൽ ഏത് മോണിറ്റർ ആണ് ഉപയോഗിക്കേണ്ടത്?",
    "options": [
      { "text": "പ്രോജക്ട് മോണിറ്റർ", "isCorrect": false },
      { "text": "ടൈംലൈൻ", "isCorrect": false },
      { "text": "ക്ലിപ്പ് മോണിറ്റർ (Clip Monitor)", "isCorrect": true },
      { "text": "ഇഫക്ട്സ് പാനൽ", "isCorrect": false }
    ]
  },
  {
    "question": "യൂട്യൂബ് അല്ലെങ്കിൽ ഇൻസ്റ്റാഗ്രാം പോലുള്ള പ്ലാറ്റ്‌ഫോമുകളിൽ ഒരു വീഡിയോ പൊതുവായി കാണുന്നതിനായി അപ്‌ലോഡ് ചെയ്യുന്ന പ്രക്രിയയെ വിവരിക്കുന്ന പദം ഏതാണ്?",
    "options": [
      { "text": "സ്ക്രിപ്റ്റിംഗ്", "isCorrect": false },
      { "text": "എഡിറ്റിംഗ്", "isCorrect": false },
      { "text": "പബ്ലിഷിംഗ് (Publishing)", "isCorrect": true },
      { "text": "റെൻഡറിംഗ്", "isCorrect": false }
    ]
  },
  {
    "question": "ടൈറ്റിലിനായുള്ള കറുത്ത പശ്ചാത്തലം പോലെ, നിങ്ങളുടെ വീഡിയോയിലേക്ക് ഒരു കളർ ബാക്ക്ഗ്രൗണ്ട് ചേർക്കാൻ പ്രോജക്ട് ബിന്നിലെ ഏത് ഓപ്ഷനാണ് തിരഞ്ഞെടുക്കേണ്ടത്?",
    "options": [
      { "text": "ആഡ് ടൈറ്റിൽ ക്ലിപ്പ്", "isCorrect": false },
      { "text": "ആഡ് ഇമേജ് സീക്വൻസ്", "isCorrect": false },
      { "text": "ആഡ് കളർ ക്ലിപ്പ് (Add Color Clip)", "isCorrect": true },
      { "text": "ഇംപോർട്ട് ഇമേജ്", "isCorrect": false }
    ]
  },
  {
    "question": "ചലിക്കുന്ന ഷോട്ടിന് ആവശ്യമായ **സ്ഥിരത ഉറപ്പാക്കാനായി** മൊബൈൽ ഫോണിനൊപ്പം ഉപയോഗിക്കാൻ ശുപാർശ ചെയ്യുന്ന ഉപകരണം ഏതാണ്?",
    "options": [
      { "text": "എക്സ്റ്റേണൽ മൈക്രോഫോൺ", "isCorrect": false },
      { "text": "ജിംബൽ അഥവാ ട്രൈപോഡ്", "isCorrect": true },
      { "text": "റിംഗ് ലൈറ്റ്", "isCorrect": false },
      { "text": "വൈഡ് ആംഗിൾ ലെൻസ്", "isCorrect": false }
    ]
  },
  {
    "question": "കണ്ടന്റ് ക്രിയേറ്റർമാർക്കും പ്രേക്ഷകർക്കുമിടയിലുള്ള അകലം ഗണ്യമായി കുറയാൻ കാരണമായ പ്ലാറ്റ്‌ഫോമുകൾ?",
    "options": [
      { "text": "പരമ്പരാഗത മാധ്യമങ്ങൾ (ടിവി/റേഡിയോ)", "isCorrect": false },
      { "text": "സോഷ്യൽ മീഡിയ പ്ലാറ്റ്‌ഫോമുകൾ", "isCorrect": true },
      { "text": "പ്രിന്റ് മാഗസിനുകൾ", "isCorrect": false },
      { "text": "ഡെസ്ക്ടോപ്പ് കമ്പ്യൂട്ടറുകൾ", "isCorrect": false }
    ]
  },
  {
    "question": "വിജയകരമായ ഒരു വീഡിയോ നിർമ്മിക്കുന്നതിന്, തിരക്കഥ തയ്യാറാക്കിയ ശേഷം ചെയ്യേണ്ട രണ്ടാമത്തെ പ്രധാന ഘട്ടം ഏതാണ്?",
    "options": [
      { "text": "വീഡിയോ ഉടൻ അപ്‌ലോഡ് ചെയ്യണം.", "isCorrect": false },
      { "text": "തിരക്കഥ അനുസരിച്ച് വീഡിയോ ചിത്രീകരിക്കണം.", "isCorrect": true },
      { "text": "വീഡിയോ AI ഉപയോഗിച്ച് എഡിറ്റ് ചെയ്യണം.", "isCorrect": false },
      { "text": "വീഡിയോ ഒരു PNG ഫയലിലേക്ക് മാറ്റണം.", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു കഥാപാത്രത്തിന്റെ മുഖം, കഴുത്ത്, തോളിന്റെ മുകൾ ഭാഗം എന്നിവയിൽ ശ്രദ്ധ കേന്ദ്രീകരിക്കുന്ന ഷോട്ട് ഏതാണ്?",
    "options": [
      { "text": "ലോംഗ് ഷോട്ട്", "isCorrect": false },
      { "text": "മീഡിയം ഷോട്ട്", "isCorrect": false },
      { "text": "മീഡിയം ക്ലോസപ്പ് (Medium Close-up)", "isCorrect": true },
      { "text": "വൈഡ് ഷോട്ട്", "isCorrect": false }
    ]
  },
  {
    "question": "Kdenlive-ൽ ടൈംലൈനിൽ ക്ലിപ്പുകൾ അടുക്കുമ്പോൾ, ക്ലിപ്പിന്റെ ദൈർഘ്യം കുറയ്ക്കാൻ ക്ലിപ്പിന്റെ അറ്റത്ത് മൗസ് വെച്ച് വലിച്ചാൽ എന്ത് സംഭവിക്കുന്നു?",
    "options": [
      { "text": "ക്ലിപ്പിന്റെ വലുപ്പം മാറുന്നു.", "isCorrect": false },
      { "text": "ക്ലിപ്പ് മുറിച്ചുമാറ്റപ്പെടുന്നു (Trimmed).", "isCorrect": true },
      { "text": "ക്ലിപ്പ് നീക്കം ചെയ്യപ്പെടുന്നു.", "isCorrect": false },
      { "text": "ക്ലിപ്പിന്റെ വേഗത കൂടുന്നു.", "isCorrect": false }
    ]
  },
  {
    "question": "Kdenlive-ൽ, ടൈംലൈനിൽ **രണ്ട് വീഡിയോ ട്രാക്കുകൾ** എന്തിനാണ് ഉപയോഗിക്കുന്നത്?",
    "options": [
      { "text": "ഓഡിയോ ട്രാക്കുകൾ ചേർക്കാൻ.", "isCorrect": false },
      { "text": "സബ്‌ടൈറ്റിലുകൾ ചേർക്കാൻ.", "isCorrect": false },
      { "text": "ട്രാൻസിഷനുകൾ (Compositions) എളുപ്പത്തിൽ ചേർക്കാൻ.", "isCorrect": true },
      { "text": "പ്രോജക്റ്റ് ബിന്നിലെ ഫയലുകൾ സൂക്ഷിക്കാൻ.", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു മൊബൈൽ ക്യാമറ ഉപയോഗിച്ച് ചിത്രീകരിക്കുന്ന ഒരു വീഡിയോയിൽ, **ലൈറ്റിംഗ് ക്രമീകരണങ്ങൾ** ശരിയല്ലെങ്കിൽ ഏത് പ്രശ്നം ഉണ്ടാകാനാണ് സാധ്യത?",
    "options": [
      { "text": "വീഡിയോയുടെ ഫ്രെയിം റേറ്റ് കുറയുന്നു.", "isCorrect": false },
      { "text": "വീഡിയോ റെസല്യൂഷൻ കുറയുന്നു.", "isCorrect": false },
      { "text": "വൈറ്റ് ബാലൻസ് നഷ്ടപ്പെട്ട് നിറങ്ങൾ കൃത്യമല്ലാതെ വരുന്നു.", "isCorrect": true },
      { "text": "ഓഡിയോയും വീഡിയോയും വേർപെടുന്നു.", "isCorrect": false }
    ]
  },
  {
    "question": "വിവിധ മൊബൈൽ ആപ്പുകളിലും ഓൺലൈൻ എഡിറ്റർമാരിലും വീഡിയോ എഡിറ്റിംഗിനായി ഇപ്പോൾ ഉപയോഗിക്കുന്ന നൂതന സാങ്കേതികവിദ്യ ഏതാണ്?",
    "options": [
      { "text": "കോമ്പോസിഷൻ", "isCorrect": false },
      { "text": "എക്സ്പോഷർ", "isCorrect": false },
      { "text": "ആർട്ടിഫിഷ്യൽ ഇന്റലിജൻസ് (AI) ശേഷികൾ", "isCorrect": true },
      { "text": "വൈറ്റ് ബാലൻസ്", "isCorrect": false }
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
