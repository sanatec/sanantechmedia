document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "'Artificial Intelligence' (നിർമ്മിത ബുദ്ധി) എന്ന പദം ആദ്യമായി ഉപയോഗിച്ച അമേരിക്കൻ ശാസ്ത്രജ്ഞൻ ആര്?",
    "options": [
      { "text": "Alan Turing", "isCorrect": false },
      { "text": "Marvin Minsky", "isCorrect": false },
      { "text": "John McCarthy", "isCorrect": true },
      { "text": "Geoffrey Hinton", "isCorrect": false }
    ]
  },
  {
    "question": "AI സിസ്റ്റം പഠിക്കുകയും തീരുമാനമെടുക്കുകയും ചെയ്യുന്ന മൂന്ന് പ്രധാന ഘട്ടങ്ങളിൽ ഉൾപ്പെടാത്തത് ഏതാണ്?",
    "options": [
      { "text": "അൽഗോരിതം ഹാക്കിംഗ് (Algorithm Hacking)", "isCorrect": true },
      { "text": "ഡാറ്റാ ശേഖരണം (Data Collection)", "isCorrect": false },
      { "text": "പാറ്റേൺ തിരിച്ചറിയൽ (Pattern Recognition)", "isCorrect": false },
      { "text": "തീരുമാനമെടുക്കൽ (Decision Making)", "isCorrect": false }
    ]
  },
  {
    "question": "AI സാങ്കേതികവിദ്യയുടെ സഹായത്തോടെ വന്യമൃഗങ്ങൾ ജനവാസ കേന്ദ്രത്തിൽ ഇറങ്ങുന്നത് പ്രതിരോധിക്കുന്ന പദ്ധതിയുടെ പേര്?",
    "options": [
      { "text": "എ.ഐ. ട്രാക്കിംഗ് സിസ്റ്റം (A.I. Tracking System)", "isCorrect": false },
      { "text": "എ.ഐ. വാണിങ് സിസ്റ്റം (A.I. Warning System)", "isCorrect": false },
      { "text": "എ.ഐ. ഡിഫൻസ് സിസ്റ്റം (A.I. Defence System)", "isCorrect": false },
      { "text": "എ.ഐ. സർവൈലൻസ് സിസ്റ്റം (A.I. Surveillance System)", "isCorrect": true }
    ]
  },
  {
    "question": "AI-യുടെ ഉത്ഭവത്തിന് ശക്തമായ അടിത്തറ നൽകിയും തുടർ ഗവേഷണങ്ങൾക്ക് പ്രചോദനം നൽകിയും വർക്ക്‌ഷോപ്പ് ഏത് പേരിൽ അറിയപ്പെടുന്നു?",
    "options": [
      { "text": "AI Summit", "isCorrect": false },
      { "text": "Dartmouth Conference", "isCorrect": true },
      { "text": "New Hampshire Meet", "isCorrect": false },
      { "text": "McCarthy Workshop", "isCorrect": false }
    ]
  },
  {
    "question": "നിർമ്മിത ബുദ്ധിയിൽ, ഒരു പ്രോഗ്രാമിനെ ഡാറ്റ വിശകലനം ചെയ്യാനും പ്രവചനങ്ങൾ/തീരുമാനങ്ങൾ എടുക്കാനും പരിശീലിപ്പിക്കുന്നതിനെ എന്ത് വിളിക്കുന്നു?",
    "options": [
      { "text": "AI അൽഗോരിതം", "isCorrect": false },
      { "text": "AI മോഡൽ (AI Model)", "isCorrect": true },
      { "text": "AI ബ്രെയിൻ", "isCorrect": false },
      { "text": "AI ഡാറ്റാബേസ്", "isCorrect": false }
    ]
  },
  {
    "question": "വന്യജീവി നിരീക്ഷണ സംവിധാനത്തിലെ AI മോഡലിനെ പരിശീലിപ്പിക്കാൻ ഉപയോഗിക്കുന്ന ഡാറ്റയുടെ തരം എന്താണ്?",
    "options": [
      { "text": "മൃഗങ്ങളുടെ ആയിരക്കണക്കിന് ചിത്രങ്ങൾ", "isCorrect": true },
      { "text": "മൃഗങ്ങളുടെ ജനിതക കോഡുകൾ", "isCorrect": false },
      { "text": "മൃഗങ്ങളുടെ ശബ്ദ രേഖകൾ മാത്രം", "isCorrect": false },
      { "text": "വനം വകുപ്പിൻ്റെ വാർഷിക റിപ്പോർട്ടുകൾ", "isCorrect": false }
    ]
  },
  {
    "question": "ഭാഷാ AI മോഡലുകൾ (Language AI Models) മനുഷ്യ ഭാഷയിലെ എന്ത് കണ്ടെത്തിയാണ് വാക്കുകൾ പ്രവചിക്കുന്നത്?",
    "options": [
      { "text": "വ്യാകരണ നിയമങ്ങൾ", "isCorrect": false },
      { "text": "പാറ്റേണുകൾ (Patterns)", "isCorrect": true },
      { "text": "ഓരോ വാക്കിൻ്റെയും ഉത്ഭവം", "isCorrect": false },
      { "text": "ഉപയോക്താവിൻ്റെ വികാരങ്ങൾ", "isCorrect": false }
    ]
  },
  {
    "question": "താഴെ പറയുന്നവയിൽ Language AI മോഡലുകൾക്ക് ഉദാഹരണമല്ലാത്തത് ഏതാണ്?",
    "options": [
      { "text": "Gemini AI", "isCorrect": false },
      { "text": "Meta AI", "isCorrect": false },
      { "text": "Apache OpenOffice", "isCorrect": true },
      { "text": "Chat GPT", "isCorrect": false }
    ]
  },
  {
    "question": "കമ്പ്യൂട്ടറുകളെ മനുഷ്യഭാഷ മനസ്സിലാക്കാനും വ്യാഖ്യാനിക്കാനും പ്രതികരിക്കാനും സഹായിക്കുന്ന നിർമ്മിത ബുദ്ധിയുടെ ഒരു ശാഖയാണ്?",
    "options": [
      { "text": "കമ്പ്യൂട്ടർ വിഷൻ (Computer Vision)", "isCorrect": false },
      { "text": "Natural Language Processing (NLP)", "isCorrect": true },
      { "text": "റോബോട്ടിക്സ് (Robotics)", "isCorrect": false },
      { "text": "പാറ്റേൺ റെക്കഗ്നിഷൻ (Pattern Recognition)", "isCorrect": false }
    ]
  },
  {
    "question": "AI നൽകുന്ന വിവരങ്ങൾ ഉപയോഗിക്കുന്നതിന് മുമ്പ് ഉപയോക്താവ് ചെയ്യേണ്ട ഒരു പ്രധാന കാര്യം എന്താണ്?",
    "options": [
      { "text": "ഉടൻതന്നെ ആ വിവരം മറ്റ് 10 പേരുമായി പങ്കുവെക്കുക.", "isCorrect": false },
      { "text": "AI മോഡലിനെ കണ്ണടച്ച് വിശ്വസിക്കുക.", "isCorrect": false },
      { "text": "വിവരങ്ങൾ ശരിയാണോ എന്ന് പരിശോധിക്കുക (Verify the information).", "isCorrect": true },
      { "text": "വിവരം നൽകിയ AI ഏജൻ്റിനെ ഉടൻതന്നെ ബ്ലോക്ക് ചെയ്യുക.", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു AI ഏജൻ്റ് പ്രധാനമായും ചെയ്യുന്നത് എന്താണ്?",
    "options": [
      { "text": "ഒറ്റയടിക്ക് ഒരു സേവനം മാത്രം നൽകുന്നു.", "isCorrect": false },
      { "text": "ഒന്നിലധികം സിസ്റ്റങ്ങളെ ഏകോപിപ്പിച്ച് ഒരു പ്രത്യേക ആവശ്യത്തിനായി കാര്യങ്ങൾ സ്വയമേവ ചെയ്യുന്നു.", "isCorrect": true },
      { "text": "ബാങ്ക് അക്കൗണ്ട് തുറക്കാൻ സഹായിക്കുന്നു.", "isCorrect": false },
      { "text": "മനുഷ്യൻ നൽകുന്ന ഡാറ്റാബേസുകൾ മാത്രം കൈകാര്യം ചെയ്യുന്നു.", "isCorrect": false }
    ]
  },
  {
    "question": "നിർമ്മിത ബുദ്ധിയുടെ (AI) പ്രധാനപ്പെട്ട ഒരു ഉപയോഗ മേഖല താഴെ പറയുന്നവയിൽ ഏതാണ്?",
    "options": [
      { "text": "കാർഷിക വിളവെടുപ്പ് (Harvesting crops)", "isCorrect": false },
      { "text": "രോഗനിർണയം (Diagnosing diseases)", "isCorrect": true },
      { "text": "അടിസ്ഥാന ഗണിതശാസ്ത്രം", "isCorrect": false },
      { "text": "കമ്പ്യൂട്ടർ റിപ്പയറിംഗ്", "isCorrect": false }
    ]
  },
  {
    "question": "Dartmouth Conference (1956) നടന്ന സ്ഥലം ഏതാണ്?",
    "options": [
      { "text": "ന്യൂയോർക്ക്, യു.എസ്.എ", "isCorrect": false },
      { "text": "ന്യൂ ഹാംഷെയർ, യു.എസ്.എ", "isCorrect": true },
      { "text": "ലണ്ടൻ, യു.കെ", "isCorrect": false },
      { "text": "പാരീസ്, ഫ്രാൻസ്", "isCorrect": false }
    ]
  },
  {
    "question": "വന്യജീവി നിരീക്ഷണ സംവിധാനത്തിൽ, 'കടുവ, ആന, മാൻ എന്നിവയെ തിരിച്ചറിയാൻ പഠിക്കുന്നു' എന്നത് AI യുടെ ഏത് പ്രവർത്തന ഘട്ടത്തിന് ഉദാഹരണമാണ്?",
    "options": [
      { "text": "തീരുമാനമെടുക്കൽ (Decision Making)", "isCorrect": false },
      { "text": "പാറ്റേൺ തിരിച്ചറിയൽ (Pattern Recognition)", "isCorrect": true },
      { "text": "ഡാറ്റാ ശേഖരണം (Data Collection)", "isCorrect": false },
      { "text": "മോഡൽ ട്രെയിനിംഗ് (Model Training)", "isCorrect": false }
    ]
  },
  {
    "question": "Large Language Models (LLM) താഴെ പറയുന്നവയിൽ ഏത് സാങ്കേതികവിദ്യ ഉപയോഗിച്ചാണ് പരിശീലനം നൽകുന്നത്?",
    "options": [
      { "text": "Robotics", "isCorrect": false },
      { "text": "Natural Language Processing (NLP)", "isCorrect": true },
      { "text": "Computer Vision", "isCorrect": false },
      { "text": "Data Mining", "isCorrect": false }
    ]
  },
  {
    "question": "AI മോഡലിനെ നിർമ്മിത ബുദ്ധി സിസ്റ്റങ്ങളുടെ എന്ത് ഭാഗമായാണ് ഉപമിക്കുന്നത്?",
    "options": [
      { "text": "കണ്ണ്", "isCorrect": false },
      { "text": "കൈ", "isCorrect": false },
      { "text": "കാല്", "isCorrect": false },
      { "text": "തലച്ചോറ് (Brain)", "isCorrect": true }
    ]
  },
  {
    "question": "AI ഉപയോഗിച്ച് ചെയ്യാൻ കഴിയുന്ന മനുഷ്യൻ്റെ ഒരു ജോലിയാണ്?",
    "options": [
      { "text": "പഴയ സിനിമകൾ കളർ ചെയ്യുന്നത്", "isCorrect": false },
      { "text": "റോഡ് സുരക്ഷക്കായി വാഹനങ്ങൾ തിരിച്ചറിയുന്നത്", "isCorrect": true },
      { "text": "സ്കൂളിൽ പഠിപ്പിക്കുന്നത്", "isCorrect": false },
      { "text": "മനുഷ്യൻ്റെ വികാരങ്ങൾ മനസ്സിലാക്കുന്നത്", "isCorrect": false }
    ]
  },
  {
    "question": "Dartmouth Conference നടന്ന വർഷം ഏതാണ്?",
    "options": [
      { "text": "1947", "isCorrect": false },
      { "text": "1956", "isCorrect": true },
      { "text": "1969", "isCorrect": false },
      { "text": "1975", "isCorrect": false }
    ]
  },
  {
    "question": "വന്യജീവി നിരീക്ഷണ സംവിധാനത്തിൽ, 'മൃഗങ്ങളെ എണ്ണുന്നു' എന്നത് AI യുടെ ഏത് പ്രവർത്തന ഘട്ടത്തിന് ഉദാഹരണമാണ്?",
    "options": [
      { "text": "ഡാറ്റാ ശേഖരണം (Data Collection)", "isCorrect": false },
      { "text": "പാറ്റേൺ തിരിച്ചറിയൽ (Pattern Recognition)", "isCorrect": false },
      { "text": "തീരുമാനമെടുക്കൽ (Decision Making)", "isCorrect": true },
      { "text": "മോഡൽ അപ്ഡേറ്റ് (Model Update)", "isCorrect": false }
    ]
  },
  {
    "question": "AI-യെക്കുറിച്ചുള്ള അധ്യായത്തിൻ്റെ ആമുഖത്തിൽ, വന്യജീവി നിരീക്ഷണ സംവിധാനം എന്തിനാണ് രൂപകൽപ്പന ചെയ്‌തിരിക്കുന്നതെന്ന് സൂചിപ്പിക്കുന്നു?",
    "options": [
      { "text": "വനത്തിലെ മരംമുറിക്കൽ നിരീക്ഷിക്കാൻ.", "isCorrect": false },
      { "text": "മനുഷ്യ-വന്യജീവി സംഘർഷം കുറയ്ക്കാൻ.", "isCorrect": true },
      { "text": "കാട്ടുതീ കണ്ടെത്താൻ.", "isCorrect": false },
      { "text": "വന്യജീവികളെ ചികിത്സിക്കാൻ.", "isCorrect": false }
    ]
  },
  {
    "question": "NLP യുടെ പ്രവർത്തനത്തിൽ, വാചകങ്ങളെ വാക്കുകളോ ശൈലികളോ ആയി വിഭജിക്കുന്നതിനെ എന്ത് വിളിക്കുന്നു?",
    "options": [
      { "text": "പാറ്റേണുകൾ", "isCorrect": false },
      { "text": "പ്രവചനങ്ങൾ", "isCorrect": false },
      { "text": "ടോക്കണുകൾ (Tokens)", "isCorrect": true },
      { "text": "ലൈബ്രറികൾ", "isCorrect": false }
    ]
  },
  {
    "question": "AI മോഡലുകൾ കാലക്രമേണ മെച്ചപ്പെടുന്നത് എങ്ങനെയാണ്?",
    "options": [
      { "text": "പഴയ ഡാറ്റ മാത്രം ഉപയോഗിച്ച്.", "isCorrect": false },
      { "text": "പുതിയ ഡാറ്റയിൽ നിന്ന് പഠിക്കുന്നതിലൂടെ.", "isCorrect": true },
      { "text": "അവയുടെ അൽഗോരിതം മാറ്റുന്നതിലൂടെ.", "isCorrect": false },
      { "text": "ഡാറ്റ ശേഖരം കുറയ്ക്കുന്നതിലൂടെ.", "isCorrect": false }
    ]
  },
  {
    "question": "നിർമ്മിത ബുദ്ധി ഏത് കഴിവുകളെയാണ് അനുകരിക്കാൻ കമ്പ്യൂട്ടറുകളെയും യന്ത്രങ്ങളെയും സഹായിക്കുന്നത്?",
    "options": [
      { "text": "മനുഷ്യ വികാരങ്ങളെയും പ്രശ്‌നപരിഹാര ശേഷികളെയും.", "isCorrect": false },
      { "text": "മനുഷ്യ ബുദ്ധിയെയും ശാരീരിക ശേഷികളെയും.", "isCorrect": false },
      { "text": "മനുഷ്യ ബുദ്ധിയെയും പ്രശ്‌നപരിഹാര ശേഷികളെയും.", "isCorrect": true },
      { "text": "മനുഷ്യ വികാരങ്ങളെയും ശാരീരിക ശേഷികളെയും.", "isCorrect": false }
    ]
  },
  {
    "question": "AI ഉപയോഗിക്കുമ്പോൾ 'Responsible AI' (ഉത്തരവാദിത്തമുള്ള AI) യുടെ തത്വങ്ങളിൽ ഉൾപ്പെടാത്തത് ഏതാണ്?",
    "options": [
      { "text": "AI-യെ കണ്ണടച്ച് വിശ്വസിക്കുക (Trust AI blindly)", "isCorrect": true },
      { "text": "മറ്റുള്ളവർക്ക് ദോഷം വരുത്താതിരിക്കുക", "isCorrect": false },
      { "text": "സ്വകാര്യതയെ മാനിക്കുക", "isCorrect": false },
      { "text": "സത്യസന്ധത പാലിക്കുക", "isCorrect": false }
    ]
  },
  {
    "question": "ഭാഷാ AI മോഡലുകൾ ഏത് തരത്തിലുള്ള ഡാറ്റാ പാറ്റേണുകളാണ് കണ്ടെത്തുന്നത്?",
    "options": [
      { "text": "കാലാവസ്ഥാ പാറ്റേണുകൾ", "isCorrect": false },
      { "text": "മനുഷ്യ ഭാഷയിലെ പാറ്റേണുകൾ", "isCorrect": true },
      { "text": "ഗ്രാഫിക്കൽ പാറ്റേണുകൾ", "isCorrect": false },
      { "text": "സംഖ്യാപരമായ പാറ്റേണുകൾ", "isCorrect": false }
    ]
  },
  {
    "question": "NLP യുടെ പ്രവർത്തനത്തിൽ, കമ്പ്യൂട്ടർ മനസ്സിലാക്കിയതിൻ്റെ അടിസ്ഥാനത്തിൽ ഒരു പ്രതികരണം സൃഷ്ടിക്കുന്നതോ ഒരു പ്രവർത്തനം ചെയ്യുന്നതോ ആയ ഘട്ടം?",
    "options": [
      { "text": "പ്രതികരണങ്ങൾ സൃഷ്ടിക്കൽ (Creating responses)", "isCorrect": true },
      { "text": "ഘടന വിശകലനം ചെയ്യൽ (Analysing the structure)", "isCorrect": false },
      { "text": "വാചകം മനസ്സിലാക്കൽ (Understanding the sentence)", "isCorrect": false },
      { "text": "ഡാറ്റാ ഇൻപുട്ട്", "isCorrect": false }
    ]
  },
  {
    "question": "AI മോഡലിനെ പരിശീലിപ്പിക്കാൻ ഉപയോഗിക്കുന്ന ഡാറ്റയുടെ അളവ് എത്രയായിരിക്കണം?",
    "options": [
      { "text": "ചെറിയ അളവിൽ (Small quantity)", "isCorrect": false },
      { "text": "പരിശീലനം ആവശ്യമില്ല.", "isCorrect": false },
      { "text": "വലിയ അളവിൽ (Large quantity)", "isCorrect": true },
      { "text": "ഓരോ മോഡലിനും ഒരു നിശ്ചിത എണ്ണം", "isCorrect": false }
    ]
  },
  {
    "question": "ഭാഷാ AI മോഡലുകൾക്ക് ഉദാഹരണമായി അധ്യായത്തിൽ നൽകിയിട്ടുള്ള ഒരു ചാറ്റ്ബോട്ട് ഏതാണ്?",
    "options": [
      { "text": "Chat GPT", "isCorrect": true },
      { "text": "Bing AI", "isCorrect": false },
      { "text": "Siri", "isCorrect": false },
      { "text": "Cortana", "isCorrect": false }
    ]
  },
  {
    "question": "നിർമ്മിത ബുദ്ധി സിസ്റ്റങ്ങൾ ഏത് സാങ്കേതികവിദ്യയുമായി യന്ത്രങ്ങളെ സമന്വയിപ്പിച്ചാണ് പ്രവർത്തിക്കുന്നത്?",
    "options": [
      { "text": "റോബോട്ടിക്സ് സാങ്കേതികവിദ്യ", "isCorrect": false },
      { "text": "ഡാറ്റാ മൈനിംഗ് സാങ്കേതികവിദ്യ", "isCorrect": false },
      { "text": "നിർമ്മിത ബുദ്ധി സാങ്കേതികവിദ്യകൾ", "isCorrect": true },
      { "text": "ഫിസിക്സ് സാങ്കേതികവിദ്യ", "isCorrect": false }
    ]
  },
  {
    "question": "NLP യുടെ പ്രവർത്തനത്തിൽ, വ്യാകരണം, വാക്യഘടന, വാക്കുകൾ തമ്മിലുള്ള ബന്ധം എന്നിവ പരിശോധിക്കുന്നത് ഏത് ഘട്ടത്തിലാണ്?",
    "options": [
      { "text": "വാചകം മനസ്സിലാക്കൽ (Understanding the sentence)", "isCorrect": false },
      { "text": "ഘടന വിശകലനം ചെയ്യൽ (Analysing the structure)", "isCorrect": true },
      { "text": "പ്രതികരണങ്ങൾ സൃഷ്ടിക്കൽ (Creating responses)", "isCorrect": false },
      { "text": "ഡാറ്റാ ഫിൽട്ടറിംഗ്", "isCorrect": false }
    ]
  },
  {
    "question": "AI ഏജൻ്റുമാർക്ക് ഒരു യാത്ര ക്രമീകരിക്കാൻ നൽകാൻ കഴിയുന്ന ഒരു ഉദാഹരണ നിർദ്ദേശം (Prompt) ഏതാണ്?",
    "options": [
      { "text": "അടുത്ത മഴക്കാലം എപ്പോഴായിരിക്കും എന്ന് പ്രവചിക്കുക.", "isCorrect": false },
      { "text": "ഒരു കേക്ക് എങ്ങനെ ഉണ്ടാക്കാം എന്ന് ടൈപ്പ് ചെയ്യുക.", "isCorrect": false },
      { "text": "അടുത്തുള്ള റെസ്റ്റോറൻ്റ് കണ്ടെത്തുക.", "isCorrect": false },
      { "text": "\"22-ന് എനിക്കുവേണ്ടി മൂന്നാറിലേക്ക് ഒരു ദ്വിദിന യാത്ര ക്രമീകരിക്കുക.\"", "isCorrect": true }
    ]
  },
  {
    "question": "AI നിലവിൽ ഉപയോഗിക്കുന്ന ഒരു മേഖല താഴെ പറയുന്നവയിൽ ഏതാണ്?",
    "options": [
      { "text": "ബഹിരാകാശ യാത്ര", "isCorrect": false },
      { "text": "ഒബ്ജക്റ്റുകളെ വർഗ്ഗീകരിക്കുന്നതിന് (Classifying objects)", "isCorrect": true },
      { "text": "പുതിയ കെട്ടിടങ്ങൾ നിർമ്മിക്കുന്നതിന്", "isCorrect": false },
      { "text": "കമ്പ്യൂട്ടർ കോഡുകൾ തിരുത്തുന്നതിന്", "isCorrect": false }
    ]
  },
  {
    "question": "വന്യജീവി നിരീക്ഷണ സംവിധാനത്തിനായി AI അൽഗോരിതം ഡാറ്റയിലെ പാറ്റേൺ തിരിച്ചറിയുന്ന ഘട്ടം ഏതാണ്?",
    "options": [
      { "text": "തീരുമാനമെടുക്കൽ (Decision Making)", "isCorrect": false },
      { "text": "ഡാറ്റാ ട്രാൻസ്ഫർ", "isCorrect": false },
      { "text": "പാറ്റേൺ തിരിച്ചറിയൽ (Pattern Recognition)", "isCorrect": true },
      { "text": "ഡാറ്റാ ശേഖരണം (Data Collection)", "isCorrect": false }
    ]
  },
  {
    "question": "നിർമ്മിത ബുദ്ധി ഉപയോഗിച്ച് ചെയ്യാൻ കഴിയുന്ന മനുഷ്യൻ്റെ ഒരു ജോലിയാണ്?",
    "options": [
      { "text": "പുതിയ ഭാഷകൾ പഠിക്കുന്നത്", "isCorrect": false },
      { "text": "വ്യക്തികളെ തിരിച്ചറിയുന്നത് (Identifying individuals)", "isCorrect": true },
      { "text": "നടക്കുന്നത്", "isCorrect": false },
      { "text": "ചിന്തിക്കുന്നത്", "isCorrect": false }
    ]
  },
  {
    "question": "നിർമ്മിത ബുദ്ധി സിസ്റ്റങ്ങൾ എന്തിൻ്റെ സഹായത്തോടെയാണ് കൂടുതൽ എളുപ്പത്തിലും കൃത്യതയിലും ചെയ്യാൻ കഴിയുന്നത്?",
    "options": [
      { "text": "പുതിയ ഹാർഡ്‌വെയർ", "isCorrect": false },
      { "text": "പുതിയ ഓപ്പറേറ്റിംഗ് സിസ്റ്റം", "isCorrect": false },
      { "text": "നിർമ്മിത ബുദ്ധി", "isCorrect": true },
      { "text": "കൂടുതൽ വേഗതയുള്ള ഇൻ്റർനെറ്റ്", "isCorrect": false }
    ]
  },
  {
    "question": "NLP എന്തിൻ്റെ തത്വങ്ങളെയാണ് പ്രോഗ്രാമിംഗ്, മെഷീൻ ലേണിംഗ് ടെക്നിക്കുകളുമായി സംയോജിപ്പിക്കുന്നത്?",
    "options": [
      { "text": "ഗണിതശാസ്ത്ര തത്വങ്ങളെ", "isCorrect": false },
      { "text": "ഭാഷാശാസ്ത്ര തത്വങ്ങളെ (Linguistics)", "isCorrect": true },
      { "text": "ഫിസിക്സ് തത്വങ്ങളെ", "isCorrect": false },
      { "text": "കംപ്യൂട്ടർ സയൻസ് തത്വങ്ങളെ", "isCorrect": false }
    ]
  },
  {
    "question": "AI ഏജൻ്റുമാരുടെ പ്രവർത്തനത്തിൻ്റെ ഒരു പ്രധാന സവിശേഷത എന്താണ്?",
    "options": [
      { "text": "അവ മനുഷ്യൻ്റെ അനുമതിയില്ലാതെ കാര്യങ്ങൾ ചെയ്യുന്നു.", "isCorrect": false },
      { "text": "ഒരു പ്രത്യേക ആവശ്യത്തിനായി കാര്യങ്ങൾ സ്വയമേവ ചെയ്യുന്നു.", "isCorrect": true },
      { "text": "ഒരിക്കലും പണം ഇടപാടുകൾ നടത്തുന്നില്ല.", "isCorrect": false },
      { "text": "ഒരു സിസ്റ്റത്തെ മാത്രമേ ഏകോപിപ്പിക്കുന്നുള്ളൂ.", "isCorrect": false }
    ]
  },
  {
    "question": "Dartmouth Conference നടന്ന സ്ഥലം ഏതാണ്?",
    "options": [
      { "text": "കേംബ്രിഡ്ജ് യൂണിവേഴ്സിറ്റി", "isCorrect": false },
      { "text": "ഓക്സ്ഫോർഡ് യൂണിവേഴ്സിറ്റി", "isCorrect": false },
      { "text": "ഡാർട്ട്മൗത്ത് കോളേജ്", "isCorrect": true },
      { "text": "MIT", "isCorrect": false }
    ]
  },
  {
    "question": "NLP-യെക്കുറിച്ച് പ്രതിപാദിക്കുമ്പോൾ, കമ്പ്യൂട്ടറുകളെ വായിക്കാനും എഴുതാനും സംസാരിക്കാനും പരിശീലിപ്പിക്കുന്നത് എന്തുപോലെയാണ്?",
    "options": [
      { "text": "റോബോട്ടുകളെപ്പോലെ", "isCorrect": false },
      { "text": "AI മോഡലുകളെപ്പോലെ", "isCorrect": false },
      { "text": "മനുഷ്യരെപ്പോലെ", "isCorrect": true },
      { "text": "ചാറ്റ്ബോട്ടുകളെപ്പോലെ", "isCorrect": false }
    ]
  },
  {
    "question": "വന്യജീവി നിരീക്ഷണ സംവിധാനത്തിലൂടെ മൃഗങ്ങളുടെ എണ്ണം കണക്കാക്കാൻ സാധിക്കുന്നത് AI-യുടെ ഏത് കഴിവിൻ്റെ ഉദാഹരണമാണ്?",
    "options": [
      { "text": "ചിത്രങ്ങളും ഡാറ്റയും വിശകലനം ചെയ്യാനുള്ള കഴിവ്", "isCorrect": true },
      { "text": "ഭാഷാ വിവർത്തനത്തിനുള്ള കഴിവ്", "isCorrect": false },
      { "text": "കഥകൾ എഴുതാനുള്ള കഴിവ്", "isCorrect": false },
      { "text": "പാചകം ചെയ്യാനുള്ള കഴിവ്", "isCorrect": false }
    ]
  },
  {
    "question": "ചാറ്റ്ബോട്ടുകൾ, വിവർത്തന ആപ്പുകൾ, വീഡിയോ ഗെയിം കഥാപാത്രങ്ങൾ എന്നിവയെല്ലാം ഏത് സിസ്റ്റത്തെ അടിസ്ഥാനമാക്കിയുള്ളവയാണ്?",
    "options": [
      { "text": "AI ഏജൻ്റ്സ്", "isCorrect": false },
      { "text": "വിർച്വൽ റിയാലിറ്റി", "isCorrect": false },
      { "text": "NLP അടിസ്ഥാനമാക്കിയുള്ള സിസ്റ്റങ്ങൾ", "isCorrect": true },
      { "text": "പ്രൊപ്രൈറ്ററി സോഫ്റ്റ്‌വെയറുകൾ", "isCorrect": false }
    ]
  },
  {
    "question": "AI ഏജൻ്റുമാർ ഒരു യാത്ര ക്രമീകരിക്കുമ്പോൾ, യാത്രയുടെ പണം എവിടുന്നാണ് അടയ്ക്കുന്നത്?",
    "options": [
      { "text": "ട്രാവൽ ഏജൻ്റിൻ്റെ അക്കൗണ്ടിൽ നിന്ന്", "isCorrect": false },
      { "text": "സർക്കാരിൻ്റെ ഫണ്ടിൽ നിന്ന്", "isCorrect": false },
      { "text": "നമ്മുടെ ബാങ്ക് അക്കൗണ്ടിൽ നിന്ന്", "isCorrect": true },
      { "text": "വിർച്വൽ വാലറ്റിൽ നിന്ന്", "isCorrect": false }
    ]
  },
  {
    "question": "AI ഉപയോഗിച്ച് ചെയ്യാൻ കഴിയുന്ന മനുഷ്യൻ്റെ ഒരു ജോലിയാണ്?",
    "options": [
      { "text": "വിവർത്തനം (Translating)", "isCorrect": true },
      { "text": "പാചകം", "isCorrect": false },
      { "text": "നൃത്തം", "isCorrect": false },
      { "text": "ശില്പം", "isCorrect": false }
    ]
  },
  {
    "question": "AI മോഡലുകൾ എന്തിനുവേണ്ടിയാണ് വലിയ അളവിലുള്ള ഡാറ്റ ഉപയോഗിച്ച് പരിശീലിപ്പിക്കപ്പെടുന്നത്?",
    "options": [
      { "text": "സാധാരണ ജോലികൾ ചെയ്യാൻ.", "isCorrect": false },
      { "text": "പ്രത്യേക ജോലികൾക്കായി (Specific tasks).", "isCorrect": true },
      { "text": "പണമുണ്ടാക്കാൻ.", "isCorrect": false },
      { "text": "പുതിയ സോഫ്റ്റ്‌വെയറുകൾ നിർമ്മിക്കാൻ.", "isCorrect": false }
    ]
  },
  {
    "question": "NLP യുടെ സഹായത്തോടെ കമ്പ്യൂട്ടറുകളെ പരിശീലിപ്പിക്കുന്നത് എന്തിനുവേണ്ടിയാണ്?",
    "options": [
      { "text": "സാങ്കേതിക ഭാഷ മാത്രം മനസ്സിലാക്കാൻ.", "isCorrect": false },
      { "text": "മനുഷ്യഭാഷ മനസ്സിലാക്കാനും പ്രതികരിക്കാനും.", "isCorrect": true },
      { "text": "കമ്പ്യൂട്ടർ കോഡുകൾ മാത്രം മനസ്സിലാക്കാൻ.", "isCorrect": false },
      { "text": "ചിത്രങ്ങൾ മാത്രം മനസ്സിലാക്കാൻ.", "isCorrect": false }
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
