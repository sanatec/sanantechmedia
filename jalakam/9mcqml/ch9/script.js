document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "വെബ്പേജുകളുടെ പശ്ചാത്തലത്തിൽ ഒരു 'സെർവറിൻ്റെ' പ്രധാന ഉദ്ദേശ്യം എന്താണ്?",
    "options": [
      {"text": "ഒരു വെബ്സൈറ്റിനായി ചിത്രങ്ങളും ആനിമേഷനുകളും സൃഷ്ടിക്കാൻ.", "isCorrect": false},
      {"text": "വെബ്പേജ് ഫയലുകൾ സൂക്ഷിക്കാനും ആവശ്യപ്പെടുമ്പോൾ അയയ്ക്കാനും.", "isCorrect": true},
      {"text": "HTML കോഡ് ഉപയോക്താവിൻ്റെ സ്ക്രീനിൽ ടെക്സ്റ്റാക്കി മാറ്റാൻ.", "isCorrect": false},
      {"text": "ഒരു വെബ്പേജിൻ്റെ ലേഔട്ടും ഫോണ്ടും രൂപകൽപ്പന ചെയ്യാൻ.", "isCorrect": false}
    ]
  },
  {
    "question": "ഇൻ്റർനെറ്റിൽ നിന്ന് വെബ്പേജുകൾ ആക്സസ് ചെയ്യാനും പ്രദർശിപ്പിക്കാനും പ്രത്യേകം രൂപകൽപ്പന ചെയ്ത സോഫ്റ്റ്‌വെയർ ഏതാണ്?",
    "options": [
      {"text": "ടെക്സ്റ്റ് എഡിറ്റർ (Text Editor)", "isCorrect": false},
      {"text": "വെബ് ബ്രൗസർ (Web Browser)", "isCorrect": true},
      {"text": "ഇമേജ് എഡിറ്റർ (Image Editor)", "isCorrect": false},
      {"text": "സെർവർ (Server)", "isCorrect": false}
    ]
  },
  {
    "question": "'https://www.schoolwiki.in' എന്നതിൽ 'https' എന്ന ഭാഗം എന്തിനെയാണ് പ്രതിനിധീകരിക്കുന്നത്?",
    "options": [
      {"text": "വെബ്സൈറ്റിൻ്റെ ഡൊമെയ്ൻ പേര്.", "isCorrect": false},
      {"text": "സെർവറിൻ്റെ പേര്.", "isCorrect": false},
      {"text": "വെബ്പേജ് എങ്ങനെ ആക്സസ് ചെയ്യണം എന്നതിൻ്റെ സൂചന.", "isCorrect": true},
      {"text": "ആക്സസ് ചെയ്യുന്ന HTML ഫയലിൻ്റെ പേര്.", "isCorrect": false}
    ]
  },
  {
    "question": "വെബ്പേജ് ഉള്ളടക്കം എങ്ങനെ പ്രദർശിപ്പിക്കണമെന്ന് ബ്രൗസറുകൾക്ക് നിർദ്ദേശം നൽകാൻ ഉപയോഗിക്കുന്ന മാർക്ക്അപ്പ് ഭാഷയുടെ പേരെന്താണ്?",
    "options": [
      {"text": "ജിമ്പ് (GIMP)", "isCorrect": false},
      {"text": "ഫയർഫോക്സ് (Firefox)", "isCorrect": false},
      {"text": "യുആർഎൽ (URL)", "isCorrect": false},
      {"text": "എച്ച്ടിഎംഎൽ (HTML)", "isCorrect": true}
    ]
  },
  {
    "question": "HTML മാർക്ക്അപ്പ് ഭാഷ കണ്ടുപിടിച്ച കമ്പ്യൂട്ടർ ശാസ്ത്രജ്ഞൻ ആര്?",
    "options": [
      {"text": "സർ തിമോത്തി ജോൺ ബെർണേഴ്സ്-ലീ (Sir Timothy John Berners-Lee)", "isCorrect": true},
      {"text": "ബിൽ ഗേറ്റ്സ് (Bill Gates)", "isCorrect": false},
      {"text": "സ്റ്റീവ് ജോബ്സ് (Steve Jobs)", "isCorrect": false},
      {"text": "ലിനസ് ടോർവാൾഡ്സ് (Linus Torvalds)", "isCorrect": false}
    ]
  },
  {
    "question": "HTML-ൽ, ടാഗുകൾ എഴുതാൻ ഏതക്ഷരങ്ങളാണ് ഉപയോഗിക്കുന്നത്?",
    "options": [
      {"text": "ചതുര ബ്രാക്കറ്റുകൾ [ ]", "isCorrect": false},
      {"text": "വളഞ്ഞ ബ്രാക്കറ്റുകൾ { }", "isCorrect": false},
      {"text": "വൃത്ത ബ്രാക്കറ്റുകൾ ( )", "isCorrect": false},
      {"text": "ആംഗിൾ ബ്രാക്കറ്റുകൾ < >", "isCorrect": true}
    ]
  },
  {
    "question": "ഒരു HTML എലമെൻ്റിൽ സാധാരണയായി എന്തെല്ലാമാണ് അടങ്ങിയിരിക്കുന്നത്?",
    "options": [
      {"text": "ഒരു സെർവറും ഒരു ബ്രൗസറും.", "isCorrect": false},
      {"text": "ഒരു യുആർഎൽ (URL) ഉം ഒരു ഡൊമെയ്ൻ നാമവും.", "isCorrect": false},
      {"text": "ഒരു ടാഗും അതിനുള്ളിലെ ഉള്ളടക്കവും.", "isCorrect": true},
      {"text": "ഒരു ചിത്രവും ഒരു ടെക്സ്റ്റ് ഫയലും.", "isCorrect": false}
    ]
  },
  {
    "question": "ഒരു പേജിലെ മറ്റെല്ലാ HTML എലമെൻ്റുകൾക്കുമുള്ള കണ്ടെയ്‌നറായി പ്രവർത്തിക്കുന്ന ടാഗ് ഏതാണ്?",
    "options": [
      {"text": "<body>", "isCorrect": false},
      {"text": "<html>", "isCorrect": true},
      {"text": "<head>", "isCorrect": false},
      {"text": "<title>", "isCorrect": false}
    ]
  },
  {
    "question": "വെബ്പേജിൽ ഉപയോക്താവിന് ദൃശ്യമാകേണ്ട ഉള്ളടക്കം ഉൾപ്പെടുത്തണമെങ്കിൽ, അത് ഏത് ടാഗിനുള്ളിലാണ് സ്ഥാപിക്കേണ്ടത്?",
    "options": [
      {"text": "<head>", "isCorrect": false},
      {"text": "<title>", "isCorrect": false},
      {"text": "<html>", "isCorrect": false},
      {"text": "<body>", "isCorrect": true}
    ]
  },
  {
    "question": "ഒരു HTML ഡോക്യുമെൻ്റിൽ <head> ടാഗിൻ്റെ ഉദ്ദേശ്യം എന്താണ്?",
    "options": [
      {"text": "പേജിൻ്റെ പ്രധാന തലക്കെട്ട് പ്രദർശിപ്പിക്കുന്നതിന്.", "isCorrect": false},
      {"text": "പേജിനെക്കുറിച്ചുള്ള വിവരങ്ങളും മെറ്റാഡാറ്റയും ഉൾപ്പെടുത്തുന്നതിന്.", "isCorrect": true},
      {"text": "ദൃശ്യമായ എല്ലാ ചിത്രങ്ങളും ടെക്സ്റ്റുകളും ഖണ്ഡികകളും ഉൾക്കൊള്ളുന്നതിന്.", "isCorrect": false},
      {"text": "വെബ്പേജിൻ്റെ ആരംഭവും അവസാനവും നിർവചിക്കുന്നതിന്.", "isCorrect": false}
    ]
  },
  {
    "question": "<title> ടാഗിനുള്ളിൽ നിങ്ങൾ നൽകുന്ന വാചകം വെബ് ബ്രൗസറിൻ്റെ ഏത് ഭാഗത്താണ് ദൃശ്യമാകുന്നത്?",
    "options": [
      {"text": "പേജിലെ പ്രധാന തലക്കെട്ടായി.", "isCorrect": false},
      {"text": "ബ്രൗസറിൻ്റെ ടൈറ്റിൽ ബാറിലോ ടാബിലോ.", "isCorrect": true},
      {"text": "വെബ്പേജിൻ്റെ ഏറ്റവും താഴെ.", "isCorrect": false},
      {"text": "അത് എവിടെയും ദൃശ്യമാകില്ല.", "isCorrect": false}
    ]
  },
  {
    "question": "ഒരു പേജിൽ ഏറ്റവും വലുതും പ്രധാനപ്പെട്ടതുമായ തലക്കെട്ട് ചേർക്കുന്നതിനുള്ള ശരിയായ ടാഗ് ഏതാണ്?",
    "options": [
      {"text": "<h1>", "isCorrect": true},
      {"text": "<h6>", "isCorrect": false},
      {"text": "<head>", "isCorrect": false},
      {"text": "<p>", "isCorrect": false}
    ]
  },
  {
    "question": "ഉള്ളടക്കത്തെ ഒരു ലളിതമായ ഖണ്ഡികയായി ക്രമീകരിക്കാൻ നിങ്ങൾ ഏത് ടാഗ് ഉപയോഗിക്കും?",
    "options": [
      {"text": "<body>", "isCorrect": false},
      {"text": "<br>", "isCorrect": false},
      {"text": "<p>", "isCorrect": true},
      {"text": "<h1>", "isCorrect": false}
    ]
  },
  {
    "question": "'മെറ്റാഡാറ്റ' (Metadata) എന്നാൽ എന്താണ്?",
    "options": [
      {"text": "വെബ്പേജിലെ പ്രധാന ഉള്ളടക്കം.", "isCorrect": false},
      {"text": "ഡാറ്റയെക്കുറിച്ചുള്ള ഡാറ്റ, ഒരു ഫയലിൻ്റെ വിശദാംശങ്ങൾ പോലെ.", "isCorrect": true},
      {"text": "ഒരു തരം വെബ് ബ്രൗസർ.", "isCorrect": false},
      {"text": "ചിത്രങ്ങൾക്കായുള്ള ഒരു HTML ടാഗ്.", "isCorrect": false}
    ]
  },
  {
    "question": "ഒരു ടെക്സ്റ്റ് എഡിറ്ററിൽ നിങ്ങൾ സൃഷ്ടിച്ച പുതിയ വെബ്പേജ് സേവ് ചെയ്യാൻ, ഏത് ഫയൽ എക്സ്റ്റൻഷനാണ് ഉപയോഗിക്കേണ്ടത്?",
    "options": [
      {"text": ".txt", "isCorrect": false},
      {"text": ".doc", "isCorrect": false},
      {"text": ".html", "isCorrect": true},
      {"text": ".png", "isCorrect": false}
    ]
  },
  {
    "question": "നിലവിലുള്ള ഒരു HTML ഫയലിൻ്റെ കോഡ് എഡിറ്റ് ചെയ്യണമെങ്കിൽ, അത് എങ്ങനെ തുറക്കണം?",
    "options": [
      {"text": "ബ്രൗസറിൽ തുറക്കാൻ അതിൽ ഡബിൾ ക്ലിക്ക് ചെയ്യുക.", "isCorrect": false},
      {"text": "റൈറ്റ് ക്ലിക്ക് ചെയ്ത് ഒരു ടെക്സ്റ്റ് എഡിറ്റർ ഉപയോഗിച്ച് തുറക്കുക.", "isCorrect": true},
      {"text": "റൈറ്റ് ക്ലിക്ക് ചെയ്ത് 'പേജ് സോഴ്സ് കാണുക' (View Page Source) തിരഞ്ഞെടുക്കുക.", "isCorrect": false},
      {"text": "നിങ്ങൾ അത് ആദ്യം ഒരു സെർവറിലേക്ക് അപ്‌ലോഡ് ചെയ്യണം.", "isCorrect": false}
    ]
  },
  {
    "question": "ഏത് ഹെഡിംഗ് ടാഗാണ് ഏറ്റവും ചെറിയ അക്ഷര വലുപ്പം നൽകുന്നത്?",
    "options": [
      {"text": "<h1>", "isCorrect": false},
      {"text": "<h3>", "isCorrect": false},
      {"text": "<h6>", "isCorrect": true},
      {"text": "<h2>", "isCorrect": false}
    ]
  },
  {
    "question": "HTML-ൽ ഒരു 'ആട്രിബ്യൂട്ട്' (Attribute) എന്നാൽ എന്താണ്?",
    "options": [
      {"text": "ഒരു ടാഗിനുള്ളിലെ ടെക്സ്റ്റ് ഉള്ളടക്കം.", "isCorrect": false},
      {"text": "അധിക ക്രമീകരണങ്ങൾക്കായി ഒരു ഓപ്പണിംഗ് ടാഗിനുള്ളിൽ നൽകുന്ന നിർദ്ദേശങ്ങൾ.", "isCorrect": true},
      {"text": "<br> പോലെയുള്ള ഒരു ഒറ്റ ടാഗ്.", "isCorrect": false},
      {"text": "വെബ് ബ്രൗസറിൻ്റെ പേര്.", "isCorrect": false}
    ]
  },
  {
    "question": "നിങ്ങളുടെ വെബ്പേജിൻ്റെ പശ്ചാത്തല നിറം പൂർണ്ണമായും ചുവപ്പാക്കാൻ നിങ്ങൾ ആഗ്രഹിക്കുന്നു. ഏത് കോഡ് ലൈനാണ് ശരി?",
    "options": [
      {"text": "<head bgcolor=\"red\">", "isCorrect": false},
      {"text": "<html color=\"red\">", "isCorrect": false},
      {"text": "<body bgcolor=\"red\">", "isCorrect": true},
      {"text": "<background>red</background>", "isCorrect": false}
    ]
  },
  {
    "question": "എന്താണ് 'ഹെക്സാഡെസിമൽ കളർ കോഡ്' (hexadecimal color code)?",
    "options": [
      {"text": "ചുവപ്പ്, പച്ച, നീല എന്നിവയുടെ സംയോജനത്തെ പ്രതിനിധീകരിക്കുന്ന ഒരു കോഡ്.", "isCorrect": true},
      {"text": "ഖണ്ഡികകൾ സൃഷ്ടിക്കാൻ ഉപയോഗിക്കുന്ന ഒരു കോഡ്.", "isCorrect": false},
      {"text": "ഒരു ചിത്രത്തിൻ്റെ ഫയൽ നാമം.", "isCorrect": false},
      {"text": "അക്ഷരവലുപ്പം സജ്ജീകരിക്കുന്നതിനുള്ള ഒരു ആട്രിബ്യൂട്ട്.", "isCorrect": false}
    ]
  },
  {
    "question": "ഒരു വെബ്പേജിൽ ചിത്രം ചേർക്കാൻ ഉപയോഗിക്കുന്ന HTML ടാഗ് ഏതാണ്?",
    "options": [
      {"text": "<image>", "isCorrect": false},
      {"text": "<picture>", "isCorrect": false},
      {"text": "<src>", "isCorrect": false},
      {"text": "<img>", "isCorrect": true}
    ]
  },
  {
    "question": "<img src=\"juice.png\"> എന്ന ടാഗിൽ, 'src' ആട്രിബ്യൂട്ട് എന്താണ് ചെയ്യുന്നത്?",
    "options": [
      {"text": "ഇത് ചിത്രത്തിൻ്റെ ഫയലിൻ്റെ പേരും സ്ഥാനവും വ്യക്തമാക്കുന്നു.", "isCorrect": true},
      {"text": "ഇത് ചിത്രത്തിൻ്റെ ഉയരം സജ്ജമാക്കുന്നു.", "isCorrect": false},
      {"text": "ഇത് ചിത്രത്തിൻ്റെ വീതി സജ്ജമാക്കുന്നു.", "isCorrect": false},
      {"text": "ഇത് ചിത്രത്തെ ഒരു ലിങ്കാക്കി മാറ്റുന്നു.", "isCorrect": false}
    ]
  },
  {
    "question": "നിങ്ങളുടെ പക്കൽ ഒരു ഇമേജ് ടാഗ് ഉണ്ട്: <img src=\"apple.png\" height=\"100\" width=\"150\">. ചിത്രം 'orange.png' എന്നതിലേക്ക് മാറ്റാൻ, നിങ്ങൾ എന്ത് മാറ്റണം?",
    "options": [
      {"text": "'height' ആട്രിബ്യൂട്ടിൻ്റെ മൂല്യം.", "isCorrect": false},
      {"text": "'src' ആട്രിബ്യൂട്ടിൻ്റെ മൂല്യം.", "isCorrect": true},
      {"text": "ടാഗിൻ്റെ പേര് <img> എന്നതിൽ നിന്ന് <orange> എന്നതിലേക്ക്.", "isCorrect": false},
      {"text": "'width' ആട്രിബ്യൂട്ടിൻ്റെ മൂല്യം.", "isCorrect": false}
    ]
  },
  {
    "question": "നിങ്ങളുടെ 'juice.png' എന്ന ചിത്രം വെബ്പേജിൽ ദൃശ്യമാകുന്നില്ലെങ്കിൽ, അതിൻ്റെ കാരണം എന്തായിരിക്കാം?",
    "options": [
      {"text": "ഇമേജ് ഫയൽ HTML ഫയൽ ഉള്ള അതേ ഫോൾഡറിൽ അല്ല.", "isCorrect": true},
      {"text": "നിങ്ങളുടെ തലക്കെട്ടിനായി <h2> ന് പകരം <h1> ഉപയോഗിച്ചു.", "isCorrect": false},
      {"text": "<title> ടാഗ് ശൂന്യമാണ്.", "isCorrect": false},
      {"text": "നിങ്ങൾ ഒരു പശ്ചാത്തല നിറം സജ്ജീകരിച്ചിട്ടില്ല.", "isCorrect": false}
    ]
  },
  {
    "question": "'Welcome' എന്ന വാചകം കട്ടിയുള്ള അക്ഷരത്തിൽ (bold) എങ്ങനെ ദൃശ്യമാക്കാം?",
    "options": [
      {"text": "<i>Welcome</i>", "isCorrect": false},
      {"text": "<u>Welcome</u>", "isCorrect": false},
      {"text": "<b>Welcome</b>", "isCorrect": true},
      {"text": "<br>Welcome</br>", "isCorrect": false}
    ]
  },
  {
    "question": "നിങ്ങൾ ഒരു ഖണ്ഡിക ടൈപ്പ് ചെയ്യുകയാണ്, പുതിയ ഖണ്ഡിക ആരംഭിക്കാതെ അടുത്ത വരിയിൽ തുടങ്ങാൻ (line break) ഏത് ടാഗ് ഉപയോഗിക്കും?",
    "options": [
      {"text": "<p>", "isCorrect": false},
      {"text": "<br>", "isCorrect": true},
      {"text": "<new>", "isCorrect": false},
      {"text": "<b>", "isCorrect": false}
    ]
  },
  {
    "question": "ടെക്സ്റ്റ് ചരിഞ്ഞ അക്ഷരത്തിൽ (italics) ദൃശ്യമാക്കാൻ ഏത് ടാഗ് ഉപയോഗിക്കുന്നു?",
    "options": [
      {"text": "<b>", "isCorrect": false},
      {"text": "<u>", "isCorrect": false},
      {"text": "<i>", "isCorrect": true},
      {"text": "<font>", "isCorrect": false}
    ]
  },
  {
    "question": "'Food Fest' എന്ന വാചകത്തിന് അടിവരയിടാൻ (underline) നിങ്ങൾ ആഗ്രഹിക്കുന്നുവെങ്കിൽ, ശരിയായ HTML ഏതാണ്?",
    "options": [
      {"text": "<i>Food Fest</i>", "isCorrect": false},
      {"text": "<u>Food Fest</u>", "isCorrect": true},
      {"text": "<b>Food Fest</b>", "isCorrect": false},
      {"text": "<font>Food Fest</font>", "isCorrect": false}
    ]
  },
  {
    "question": "ടെക്സ്റ്റിൻ്റെ ഫോണ്ട് 'Ubuntu' എന്നതിലേക്ക് മാറ്റാൻ, <font> ടാഗിൻ്റെ ഏത് ആട്രിബ്യൂട്ട് നിങ്ങൾ ഉപയോഗിക്കും?",
    "options": [
      {"text": "color", "isCorrect": false},
      {"text": "size", "isCorrect": false},
      {"text": "face", "isCorrect": true},
      {"text": "src", "isCorrect": false}
    ]
  },
  {
    "question": "<font> ടാഗ് ഉപയോഗിച്ച് 'Hello' എന്ന വാചകം ചുവപ്പ് നിറത്തിൽ ആക്കാനുള്ള ശരിയായ മാർഗം ഏതാണ്?",
    "options": [
      {"text": "<font face=\"red\">Hello</font>", "isCorrect": false},
      {"text": "<font size=\"red\">Hello</font>", "isCorrect": false},
      {"text": "<font color=\"red\">Hello</font>", "isCorrect": true},
      {"text": "<red>Hello</red>", "isCorrect": false}
    ]
  },
  {
    "question": "ഒരു പട്ടിക (table) നിർവചിക്കാൻ ആരംഭിക്കുന്നതിന് ഏത് ടാഗ് ഉപയോഗിക്കുന്നു?",
    "options": [
      {"text": "<table>", "isCorrect": true},
      {"text": "<tr>", "isCorrect": false},
      {"text": "<td>", "isCorrect": false},
      {"text": "<caption>", "isCorrect": false}
    ]
  },
  {
    "question": "ഒരു പട്ടികയ്ക്കുള്ളിൽ, ഒരൊറ്റ വരിയെ (row) നിർവചിക്കാൻ ഏത് ടാഗ് ഉപയോഗിക്കുന്നു?",
    "options": [
      {"text": "<td>", "isCorrect": false},
      {"text": "<th>", "isCorrect": false},
      {"text": "<tr>", "isCorrect": true},
      {"text": "<table>", "isCorrect": false}
    ]
  },
  {
    "question": "ഒരു HTML പട്ടികയിൽ <td> ടാഗിൻ്റെ ഉദ്ദേശ്യം എന്താണ്?",
    "options": [
      {"text": "ഒരു ടേബിൾ ഹെഡർ സെൽ നിർവചിക്കാൻ.", "isCorrect": false},
      {"text": "ഒരു ടേബിൾ ഡാറ്റാ സെൽ നിർവചിക്കാൻ.", "isCorrect": true},
      {"text": "ഒരു ടേബിൾ വരി നിർവചിക്കാൻ.", "isCorrect": false},
      {"text": "പട്ടികയുടെ അതിർത്തി സജ്ജമാക്കാൻ.", "isCorrect": false}
    ]
  },
  {
    "question": "<th>, <td> ടാഗുകൾ തമ്മിലുള്ള വ്യത്യാസം എന്താണ്?",
    "options": [
      {"text": "<th> ഒരു വരിയെ നിർവചിക്കുന്നു, <td> ഒരു നിരയെ നിർവചിക്കുന്നു.", "isCorrect": false},
      {"text": "<th> ടെക്സ്റ്റിനുള്ളതാണ്, <td> ചിത്രങ്ങൾക്കുള്ളതാണ്.", "isCorrect": false},
      {"text": "<th> ഒരു ടേബിൾ ഹെഡർ സെല്ലിനെ നിർവചിക്കുന്നു, <td> ഒരു സാധാരണ ഡാറ്റാ സെല്ലിനെ നിർവചിക്കുന്നു.", "isCorrect": true},
      {"text": "വ്യത്യാസമൊന്നുമില്ല, അവ ഒരേ കാര്യമാണ് ചെയ്യുന്നത്.", "isCorrect": false}
    ]
  },
  {
    "question": "'2' കനമുള്ള ഒരു അതിർത്തി (border) പട്ടികയ്ക്ക് എങ്ങനെ ചേർക്കാം?",
    "options": [
      {"text": "<table border=2>", "isCorrect": true},
      {"text": "<table line=2>", "isCorrect": false},
      {"text": "<table><border>2</border></table>", "isCorrect": false},
      {"text": "<table data-border=\"2\">", "isCorrect": false}
    ]
  },
  {
    "question": "ഒരു പട്ടികയുമായി നേരിട്ട് ബന്ധപ്പെട്ട ഒരു ശീർഷകം (caption) ചേർക്കാൻ ഏത് ടാഗ് ഉപയോഗിക്കുന്നു?",
    "options": [
      {"text": "<title>", "isCorrect": false},
      {"text": "<th>", "isCorrect": false},
      {"text": "<h1>", "isCorrect": false},
      {"text": "<caption>", "isCorrect": true}
    ]
  },
  {
    "question": "ഒരു വെബ്പേജിൽ ഒരു വീഡിയോ ഫയൽ ഉൾപ്പെടുത്താൻ ഏത് ടാഗ് ഉപയോഗിക്കുന്നു?",
    "options": [
      {"text": "<media>", "isCorrect": false},
      {"text": "<mp4>", "isCorrect": false},
      {"text": "<video>", "isCorrect": true},
      {"text": "<source>", "isCorrect": false}
    ]
  },
  {
    "question": "<video> ടാഗിനുള്ളിൽ, നെസ്റ്റ് ചെയ്ത <source> ടാഗിൻ്റെ ഉദ്ദേശ്യം എന്താണ്?",
    "options": [
      {"text": "വീഡിയോ പ്ലെയറിൻ്റെ ഉയരവും വീതിയും സജ്ജമാക്കാൻ.", "isCorrect": false},
      {"text": "പ്ലേ, പോസ് പോലുള്ള പ്ലേബാക്ക് നിയന്ത്രണങ്ങൾ ചേർക്കാൻ.", "isCorrect": false},
      {"text": "വീഡിയോ ഫയൽ പാതയും അതിൻ്റെ തരവും വ്യക്തമാക്കാൻ.", "isCorrect": true},
      {"text": "വീഡിയോയ്ക്ക് ഒരു അടിക്കുറിപ്പ് ചേർക്കാൻ.", "isCorrect": false}
    ]
  },
  {
    "question": "<video> ടാഗിലേക്ക് ചേർക്കുമ്പോൾ പ്ലേ, പോസ്, വോളിയം പോലുള്ള ഉപയോക്തൃ നിയന്ത്രണങ്ങൾ നൽകുന്ന ആട്രിബ്യൂട്ട് ഏതാണ്?",
    "options": [
      {"text": "src", "isCorrect": false},
      {"text": "controls", "isCorrect": true},
      {"text": "type", "isCorrect": false},
      {"text": "play", "isCorrect": false}
    ]
  },
  {
    "question": "ഒരു വെബ്പേജിൻ്റെ ശരിയായ അടിസ്ഥാന HTML ഘടന ഏതാണ്?",
    "options": [
      {"text": "<body><head>...</head><html>...</html></body>", "isCorrect": false},
      {"text": "<html><head><title>...</title></head><body>...</body></html>", "isCorrect": true},
      {"text": "<head><title>...</title></head><body>...</body>", "isCorrect": false},
      {"text": "<html><body><head>...</head></body></html>", "isCorrect": false}
    ]
  },
  {
    "question": "ഒരു വെബ് ബ്രൗസറിൻ്റെ പ്രാഥമിക പ്രവർത്തനം...?",
    "options": [
      {"text": "ഒരു സെർവറിൽ ഫയലുകൾ സൂക്ഷിക്കുക.", "isCorrect": false},
      {"text": "HTML നിർദ്ദേശങ്ങൾ വായിക്കുകയും ഉള്ളടക്കം പ്രദർശിപ്പിക്കുകയും ചെയ്യുക.", "isCorrect": true},
      {"text": "വെബ്സൈറ്റുകൾക്കായി ചിത്രങ്ങളും വാചകങ്ങളും സൃഷ്ടിക്കുക.", "isCorrect": false},
      {"text": "ഒരു പേജിൻ്റെ HTML സോഴ്സ് കോഡ് എഡിറ്റ് ചെയ്യുക.", "isCorrect": false}
    ]
  },
  {
    "question": "URL എന്നതിൻ്റെ പൂർണ്ണരൂപം എന്താണ്?",
    "options": [
      {"text": "Universal Resource Link", "isCorrect": false},
      {"text": "Uniform Resource Locator", "isCorrect": true},
      {"text": "Unique Resource Link", "isCorrect": false},
      {"text": "Unified Resource Locator", "isCorrect": false}
    ]
  },
  {
    "question": "താഴെ പറയുന്നവയിൽ ഏതാണ് ഒരു വെബ് ബ്രൗസറിന് ഉദാഹരണമായി നൽകിയിരിക്കുന്നത്?",
    "options": [
      {"text": "HTML", "isCorrect": false},
      {"text": "Text Editor", "isCorrect": false},
      {"text": "Google Chrome", "isCorrect": true},
      {"text": "Server", "isCorrect": false}
    ]
  },
  {
    "question": "'Item1', 'Item2' എന്നിവ അടങ്ങുന്ന ഒരു വരിയും രണ്ട് ഡാറ്റാ സെല്ലുകളുമുള്ള ഒരു പട്ടിക സൃഷ്ടിക്കുന്നതിനുള്ള ശരിയായ HTML ഏതാണ്?",
    "options": [
      {"text": "<table><tr><td>Item1</td><td>Item2</td></tr></table>", "isCorrect": true},
      {"text": "<table><row><cell>Item1</cell><cell>Item2</cell></row></table>", "isCorrect": false},
      {"text": "<table><td><tr>Item1</tr><tr>Item2</tr></td></table>", "isCorrect": false},
      {"text": "<tr><table><td>Item1</td><td>Item2</td></table></tr>", "isCorrect": false}
    ]
  },
  {
    "question": "100 പിക്സൽ വീതിയും 50 പിക്സൽ ഉയരവുമുള്ള 'logo.png' എന്ന ചിത്രം എങ്ങനെ ശരിയായി ചേർക്കാം?",
    "options": [
      {"text": "<img src=\"logo.png\" size=\"100, 50\">", "isCorrect": false},
      {"text": "<img file=\"logo.png\" width=\"100\" height=\"50\">", "isCorrect": false},
      {"text": "<img>logo.png, 100, 50</img>", "isCorrect": false},
      {"text": "<img src=\"logo.png\" width=\"100\" height=\"50\">", "isCorrect": true}
    ]
  },
  {
    "question": "നിങ്ങളുടെ പേജിൽ 'Welcome!' എന്ന പ്രധാന തലക്കെട്ടും 'This is my site.' എന്ന ഖണ്ഡികയും ചേർക്കാൻ നിങ്ങൾ ആഗ്രഹിക്കുന്നു. ബോഡിക്കുള്ള ശരിയായ HTML ഏതാണ്?",
    "options": [
      {"text": "<body><p>Welcome!</p><h1>This is my site.</h1></body>", "isCorrect": false},
      {"text": "<body><h1>Welcome!</h1><p>This is my site.</p></body>", "isCorrect": true},
      {"text": "<head><h1>Welcome!</h1><p>This is my site.</p></head>", "isCorrect": false},
      {"text": "<body><title>Welcome!</title><p>This is my site.</p></body>", "isCorrect": false}
    ]
  },
  {
    "question": "</html> പോലെയുള്ള ഒരു ക്ലോസിംഗ് ടാഗിൻ്റെ ഉദ്ദേശ്യം എന്താണ്?",
    "options": [
      {"text": "HTML എലമെൻ്റിൻ്റെ തുടക്കം സൂചിപ്പിക്കാൻ.", "isCorrect": false},
      {"text": "HTML എലമെൻ്റിൻ്റെ അവസാനം സൂചിപ്പിക്കാൻ.", "isCorrect": true},
      {"text": "എലമെൻ്റിലേക്ക് ആട്രിബ്യൂട്ടുകൾ ചേർക്കാൻ.", "isCorrect": false},
      {"text": "മറ്റൊരു പേജിലേക്ക് ഒരു ലിങ്ക് സൃഷ്ടിക്കാൻ.", "isCorrect": false}
    ]
  },
  {
    "question": "നിങ്ങൾ <body bgcolor=\"#0000ff\"> എന്ന ടാഗ് ഉപയോഗിക്കുകയാണെങ്കിൽ, പശ്ചാത്തല നിറം എന്തായിരിക്കും?",
    "options": [
      {"text": "ചുവപ്പ് (Red)", "isCorrect": false},
      {"text": "പച്ച (Green)", "isCorrect": false},
      {"text": "നീല (Blue)", "isCorrect": true},
      {"text": "കറുപ്പ് (Black)", "isCorrect": false}
    ]
  },
  {
    "question": "ഒരു പട്ടികയിൽ, <th> ടാഗിലെയും <td> ടാഗിലെയും ഉള്ളടക്കം തമ്മിലുള്ള സാധാരണ ദൃശ്യപരമായ വ്യത്യാസം എന്താണ്?",
    "options": [
      {"text": "<th> ഉള്ളടക്കം സാധാരണയായി കട്ടിയുള്ളതും (bold) മധ്യഭാഗത്ത് ക്രമീകരിച്ചതുമായിരിക്കും.", "isCorrect": true},
      {"text": "<td> ഉള്ളടക്കം സാധാരണയായി വലുതായിരിക്കും.", "isCorrect": false},
      {"text": "<th> ഉള്ളടക്കം എപ്പോഴും ഇറ്റാലിക്സിൽ ആയിരിക്കും.", "isCorrect": false},
      {"text": "<td> ഉള്ളടക്കം എപ്പോഴും അടിവരയിട്ടതായിരിക്കും.", "isCorrect": false}
    ]
  },
  {
    "question": "പ്ലേബാക്ക് നിയന്ത്രണങ്ങൾ കാണിക്കുന്ന 'intro.mp4' എന്ന വീഡിയോ നിങ്ങൾ എങ്ങനെ ചേർക്കും?",
    "options": [
      {"text": "<video src=\"intro.mp4\"></video>", "isCorrect": false},
      {"text": "<video controls><source src=\"intro.mp4\" type=\"video/mp4\"></video>", "isCorrect": true},
      {"text": "<video src=\"intro.mp4\" controls=\"false\"></video>", "isCorrect": false},
      {"text": "<source src=\"intro.mp4\" controls></source>", "isCorrect": false}
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
