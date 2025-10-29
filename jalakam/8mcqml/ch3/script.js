document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "സംഗീതം റെക്കോർഡ് ചെയ്യാനും എഡിറ്റ് ചെയ്യാനും സൃഷ്ടിക്കാനും ഉപയോഗിക്കുന്ന സോഫ്റ്റ്‌വെയറിനെ പൊതുവെ എന്ത് വിളിക്കുന്നു?",
    "options": [
      { "text": "Word Processor", "isCorrect": false },
      { "text": "Spreadsheet Application", "isCorrect": false },
      { "text": "Video Editor", "isCorrect": false },
      { "text": "Digital Audio Workstation (DAW)", "isCorrect": true }
    ]
  },
  {
    "question": "LMMS സോഫ്റ്റ്‌വെയറിൽ സംഗീതത്തിൻ്റെ താളവും (Rhythm) ബേസ് ലൈനും സൃഷ്ടിക്കാനും ക്രമീകരിക്കാനും ഉപയോഗിക്കുന്ന പ്രധാന വിൻഡോ ഏതാണ്?",
    "options": [
      { "text": "Song-Editor", "isCorrect": false },
      { "text": "Piano-Roll", "isCorrect": false },
      { "text": "FX Mixer", "isCorrect": false },
      { "text": "Beat/Bassline Editor", "isCorrect": true }
    ]
  },
  {
    "question": "LMMS-ൽ, മെലഡികളും സംഗീത കുറിപ്പുകളും (Notes) ചേർക്കാനും ക്രമീകരിക്കാനും ഉപയോഗിക്കുന്ന വിൻഡോ?",
    "options": [
      { "text": "Song-Editor", "isCorrect": false },
      { "text": "Beat/Bassline Editor", "isCorrect": false },
      { "text": "FX Mixer", "isCorrect": false },
      { "text": "Piano-Roll", "isCorrect": true }
    ]
  },
  {
    "question": "LMMS-ൽ, സൃഷ്ടിച്ച ഗാനം മൊത്തത്തിൽ ക്രമീകരിക്കാൻ (Sequencing) ഉപയോഗിക്കുന്ന വിൻഡോ ഏതാണ്?",
    "options": [
      { "text": "Beat/Bassline Editor", "isCorrect": false },
      { "text": "Piano-Roll", "isCorrect": false },
      { "text": "FX Mixer", "isCorrect": false },
      { "text": "Song-Editor", "isCorrect": true }
    ]
  },
  {
    "question": "LMMS സോഫ്റ്റ്‌വെയറിൽ Music Tones (സംഗീത സ്വരങ്ങൾ) തിരഞ്ഞെടുക്കാൻ സഹായിക്കുന്ന ടൂൾ?",
    "options": [
      { "text": "My Projects", "isCorrect": false },
      { "text": "My Home", "isCorrect": false },
      { "text": "Instrument Plugins", "isCorrect": false },
      { "text": "My Samples", "isCorrect": true }
    ]
  },
  {
    "question": "LMMS-ൽ സൃഷ്ടിച്ച സംഗീതത്തിൻ്റെ വേഗത (Tempo) വർദ്ധിപ്പിക്കാൻ എന്ത് നടപടിയാണ് സ്വീകരിക്കേണ്ടത്?",
    "options": [
      { "text": "Decrease BPM", "isCorrect": false },
      { "text": "Increase Time signature", "isCorrect": false },
      { "text": "Create more blocks in Beat Editor", "isCorrect": false },
      { "text": "Increase BPM", "isCorrect": true }
    ]
  },
  {
    "question": "LMMS-ൽ, BPM എന്നത് എന്തിനെ സൂചിപ്പിക്കുന്നു?",
    "options": [
      { "text": "Basic Project Mode", "isCorrect": false },
      { "text": "Best Performance Music", "isCorrect": false },
      { "text": "Base Position Marker", "isCorrect": false },
      { "text": "Beats Per Minute", "isCorrect": true }
    ]
  },
  {
    "question": "LMMS-ലെ Beat/Bassline Editor-ൽ ഒരു പുതിയ ബീറ്റ് ചേർക്കുന്നതിന് ചെയ്യേണ്ട മൗസ് പ്രവർത്തനം?",
    "options": [
      { "text": "Right Click ചെയ്യുക.", "isCorrect": false },
      { "text": "Scroll Wheel Click ചെയ്യുക.", "isCorrect": false },
      { "text": "Double Click ചെയ്യുക.", "isCorrect": false },
      { "text": "Left Click ചെയ്യുക.", "isCorrect": true }
    ]
  },
  {
    "question": "LMMS-ലെ Beat/Bassline Editor-ൽ ഒരു ബീറ്റ് ഡിലീറ്റ് ചെയ്യാൻ ചെയ്യേണ്ട മൗസ് പ്രവർത്തനം?",
    "options": [
      { "text": "Left Click ചെയ്യുക.", "isCorrect": false },
      { "text": "Right Click ചെയ്യുക.", "isCorrect": false },
      { "text": "Double Click ചെയ്യുക.", "isCorrect": false },
      { "text": "Scroll Wheel Click ചെയ്യുക.", "isCorrect": true }
    ]
  },
  {
    "question": "LMMS-ലെ Song-Editor വിൻഡോയിലെ ബ്ലോക്കുകൾ ഡിലീറ്റ് ചെയ്യാൻ ചെയ്യേണ്ട മൗസ് പ്രവർത്തനം?",
    "options": [
      { "text": "Left Click ചെയ്യുക.", "isCorrect": false },
      { "text": "Scroll Wheel Click ചെയ്യുക.", "isCorrect": false },
      { "text": "Double Click ചെയ്യുക.", "isCorrect": false },
      { "text": "Right Click ചെയ്യുക.", "isCorrect": true }
    ]
  },
  {
    "question": "LMMS-ലെ Piano-Roll വിൻഡോയിലെ മ്യൂസിക് നോട്ട് ഡിലീറ്റ് ചെയ്യാൻ ചെയ്യേണ്ട മൗസ് പ്രവർത്തനം?",
    "options": [
      { "text": "Left Click ചെയ്യുക.", "isCorrect": false },
      { "text": "Scroll Wheel Click ചെയ്യുക.", "isCorrect": false },
      { "text": "Double Click ചെയ്യുക.", "isCorrect": false },
      { "text": "Right Click ചെയ്യുക.", "isCorrect": true }
    ]
  },
  {
    "question": "LMMS-ൽ സൃഷ്ടിച്ച സംഗീതം ഒരു ഓഡിയോ ഫയൽ ഫോർമാറ്റിലേക്ക് മാറ്റാൻ ഉപയോഗിക്കുന്ന മെനു വഴി ഏതാണ്?",
    "options": [
      { "text": "Edit → Export", "isCorrect": false },
      { "text": "Tools → Export", "isCorrect": false },
      { "text": "View → Export", "isCorrect": false },
      { "text": "File → Export", "isCorrect": true }
    ]
  },
  {
    "question": "LMMS-ൽ ഒരു പുതിയ ഉപകരണം (Instrument) ചേർക്കുന്നതിന് സഹായിക്കുന്ന ടൂൾ ഏതാണ്?",
    "options": [
      { "text": "My Projects", "isCorrect": false },
      { "text": "My Samples", "isCorrect": false },
      { "text": "My Home", "isCorrect": false },
      { "text": "Instrument Plugins", "isCorrect": true }
    ]
  },
  {
    "question": "LMMS-ൽ സൃഷ്ടിച്ച ഒരു പ്രോജക്റ്റ് ഫയലിൻ്റെ എക്സ്റ്റൻഷൻ എന്തായിരിക്കും?",
    "options": [
      { "text": ".mp3", "isCorrect": false },
      { "text": ".wav", "isCorrect": false },
      { "text": ".ogg", "isCorrect": false },
      { "text": ".mmpz", "isCorrect": true }
    ]
  },
  {
    "question": "LMMS-ലെ Song-Editor-ലേക്ക് ഒരു സംഗീത ബ്ലോക്ക് ചേർക്കുന്നതിനുള്ള പ്രവർത്തനം?",
    "options": [
      { "text": "Piano-Roll-ൽ നിന്ന് Copy/Paste ചെയ്യുക.", "isCorrect": false },
      { "text": "Instrument Plugins-ൽ Double Click ചെയ്യുക.", "isCorrect": false },
      { "text": "Beat/Bassline Editor-ൽ Right Click ചെയ്യുക.", "isCorrect": false },
      { "text": "Beat/Bassline Editor-ൽ നിന്ന് വലിച്ചിടുക (Drag and Drop).", "isCorrect": true }
    ]
  },
  {
    "question": "റേഡിയോ, ടെലിവിഷൻ പ്രോഗ്രാമുകൾക്ക് Sound Tracks തയ്യാറാക്കാൻ ഉപയോഗിക്കുന്ന ആപ്ലിക്കേഷൻ സോഫ്റ്റ്‌വെയർ?",
    "options": [
      { "text": "Image Editor", "isCorrect": false },
      { "text": "Word Processor", "isCorrect": false },
      { "text": "Video Editor", "isCorrect": false },
      { "text": "DAW", "isCorrect": true }
    ]
  },
  {
    "question": "LMMS-ലെ പ്രധാന ടൂളുകൾ സ്ഥിതിചെയ്യുന്നത് വിൻഡോയുടെ ഏത് ഭാഗത്താണ്?",
    "options": [
      { "text": "താഴത്തെ ടൂൾബാർ", "isCorrect": false },
      { "text": "മുകളിലെ മെനു ബാർ", "isCorrect": false },
      { "text": "മധ്യഭാഗത്തെ എഡിറ്റിംഗ് ഏരിയ", "isCorrect": false },
      { "text": "സൈഡ്‌ബാർ (Side Bar)", "isCorrect": true }
    ]
  },
  {
    "question": "LMMS-ൽ, പുതിയ പ്രോജക്റ്റുകൾ ആരംഭിക്കുന്നതിനും നിലവിലുള്ളവ തുറക്കുന്നതിനും ഉപയോഗിക്കുന്ന ടൂൾ?",
    "options": [
      { "text": "My Home", "isCorrect": false },
      { "text": "My Samples", "isCorrect": false },
      { "text": "Instrument Plugins", "isCorrect": false },
      { "text": "My Projects", "isCorrect": true }
    ]
  },
  {
    "question": "LMMS-ൽ Piano-Roll വിൻഡോയിൽ മ്യൂസിക് നോട്ടുകൾ ചേർക്കാൻ ചെയ്യേണ്ട മൗസ് പ്രവർത്തനം?",
    "options": [
      { "text": "Right Click ചെയ്യുക.", "isCorrect": false },
      { "text": "Scroll Wheel Click ചെയ്യുക.", "isCorrect": false },
      { "text": "Double Click ചെയ്യുക.", "isCorrect": false },
      { "text": "Left Click ചെയ്യുക.", "isCorrect": true }
    ]
  },
  {
    "question": "LMMS-ൽ സംഗീതത്തിൻ്റെ വേഗത കുറയ്ക്കാൻ എന്ത് ചെയ്യണം?",
    "options": [
      { "text": "Increase BPM", "isCorrect": false },
      { "text": "Increase Time signature", "isCorrect": false },
      { "text": "Increase the number of beats", "isCorrect": false },
      { "text": "Decrease BPM", "isCorrect": true }
    ]
  },
  {
    "question": "LMMS സോഫ്റ്റ്‌വെയറിലെ പ്രധാന വിൻഡോകളിൽ ഉൾപ്പെടാത്തത് ഏത്?",
    "options": [
      { "text": "Song-Editor", "isCorrect": false },
      { "text": "Piano-Roll", "isCorrect": false },
      { "text": "Beat/Bassline Editor", "isCorrect": false },
      { "text": "Timeline Editor", "isCorrect": true }
    ]
  },
  {
    "question": "DAW സോഫ്റ്റ്‌വെയറിൻ്റെ പ്രധാന ലക്ഷ്യങ്ങളിൽ ഒന്ന്?",
    "options": [
      { "text": "ടെക്സ്റ്റ് ഫയലുകൾ വായിക്കാൻ.", "isCorrect": false },
      { "text": "സ്ലൈഡ് ഷോ തയ്യാറാക്കാൻ.", "isCorrect": false },
      { "text": "വീഡിയോ എഡിറ്റ് ചെയ്യാൻ.", "isCorrect": false },
      { "text": "ഓഡിയോ റെക്കോർഡ് ചെയ്യാൻ.", "isCorrect": true }
    ]
  },
  {
    "question": "സംഗീതോപകരണങ്ങൾ വായിച്ച് റെക്കോർഡ് ചെയ്യുന്നതിന് പകരം കമ്പ്യൂട്ടറുകൾ ഉപയോഗിച്ച് സംഗീതം സൃഷ്ടിക്കാൻ തുടങ്ങിയത് ഏത് സാങ്കേതികവിദ്യയുടെ ആവിർഭാവത്തോടെയാണ്?",
    "options": [
      { "text": "അനലോഗ് സാങ്കേതികവിദ്യ", "isCorrect": false },
      { "text": "ഒപ്റ്റിക്കൽ സാങ്കേതികവിദ്യ", "isCorrect": false },
      { "text": "തെർമൽ സാങ്കേതികവിദ്യ", "isCorrect": false },
      { "text": "ഡിജിറ്റൽ സാങ്കേതികവിദ്യ", "isCorrect": true }
    ]
  },
  {
    "question": "LMMS-ൽ ഒരു സംഗീത ബ്ലോക്കിൻ്റെ സ്ഥാനം മാറ്റാൻ എന്ത് ചെയ്യണം?",
    "options": [
      { "text": "Right Click ചെയ്ത് Move തിരഞ്ഞെടുക്കുക.", "isCorrect": false },
      { "text": "ഡബിൾ ക്ലിക്ക് ചെയ്യുക.", "isCorrect": false },
      { "text": "Ctrl + Click ചെയ്യുക.", "isCorrect": false },
      { "text": "ക്ലിക്കുചെയ്ത് വലിച്ചിടുക (Drag).", "isCorrect": true }
    ]
  },
  {
    "question": "LMMS-ൽ, Song-Editor-ലെ ഒരു ബ്ലോക്ക് തെറ്റാണെന്ന് കണ്ടെത്തി. അത് നീക്കം ചെയ്യാൻ ഉപയോഗിക്കേണ്ട പ്രവർത്തനം?",
    "options": [
      { "text": "Left Click", "isCorrect": false },
      { "text": "Scroll Wheel Click", "isCorrect": false },
      { "text": "Delete കീ ഉപയോഗിക്കുക.", "isCorrect": false },
      { "text": "Right Click", "isCorrect": true }
    ]
  },
  {
    "question": "LMMS-ലെ Piano-Roll വിൻഡോയുടെ ഒരു പ്രത്യേകത?",
    "options": [
      { "text": "ഓരോ സംഗീത ട്രാക്കിൻ്റെയും വേഗത ക്രമീകരിക്കുന്നു.", "isCorrect": false },
      { "text": "ബീറ്റുകളും താളവും ചേർക്കുന്നു.", "isCorrect": false },
      { "text": "ശബ്ദ ഇഫക്റ്റുകൾ നൽകുന്നു.", "isCorrect": false },
      { "text": "മെലഡി നോട്ടുകൾ ചേർത്ത് മാറ്റങ്ങൾ വരുത്തുന്നു.", "isCorrect": true }
    ]
  },
  {
    "question": "LMMS-ൽ 'My Projects' ടൂൾ എന്തിനാണ് ഉപയോഗിക്കുന്നത്?",
    "options": [
      { "text": "പുതിയ ഉപകരണങ്ങൾ ചേർക്കാൻ.", "isCorrect": false },
      { "text": "സംഗീത ടോണുകൾ തിരഞ്ഞെടുക്കാൻ.", "isCorrect": false },
      { "text": "ഗാനത്തിൻ്റെ താളം ക്രമീകരിക്കാൻ.", "isCorrect": false },
      { "text": "പ്രോജക്റ്റ് ഫയലുകൾ തുറക്കാനും സേവ് ചെയ്യാനും.", "isCorrect": true }
    ]
  },
  {
    "question": "LMMS-ൻ്റെ Beat/Bassline Editor-ൽ ഒരു ബീറ്റ് ചേർക്കാൻ മൗസ് ഉപയോഗിച്ച് ചെയ്യേണ്ട കൃത്യമായ ക്ലിക്കിംഗ് പ്രവർത്തനം?",
    "options": [
      { "text": "വലത് ക്ലിക്ക്", "isCorrect": false },
      { "text": "മൗസ് വീൽ ക്ലിക്ക്", "isCorrect": false },
      { "text": "കീബോർഡിലെ Shift + ക്ലിക്ക്", "isCorrect": false },
      { "text": "ഇടത് ക്ലിക്ക്", "isCorrect": true }
    ]
  },
  {
    "question": "LMMS-ൽ സൃഷ്ടിച്ച സംഗീതം .wav, .mp3 പോലുള്ള ഫോർമാറ്റുകളിലേക്ക് മാറ്റുന്ന പ്രക്രിയ?",
    "options": [
      { "text": "Save", "isCorrect": false },
      { "text": "Import", "isCorrect": false },
      { "text": "Render", "isCorrect": false },
      { "text": "Export", "isCorrect": true }
    ]
  },
  {
    "question": "LMMS-ൽ ഒരു ട്യൂൺ ഉണ്ടാക്കാൻ Piano-Roll വിൻഡോയിൽ എന്ത് ചേർക്കണം?",
    "options": [
      { "text": "ബീറ്റുകൾ", "isCorrect": false },
      { "text": "ഫുൾ ബ്ലോക്കുകൾ", "isCorrect": false },
      { "text": "ടൈം സിഗ്നേച്ചറുകൾ", "isCorrect": false },
      { "text": "സംഗീത കുറിപ്പുകൾ (Music Notes)", "isCorrect": true }
    ]
  },
  {
    "question": "LMMS-ൽ, ഗാനത്തിൻ്റെ വേഗത 120 BPM-ൽ നിന്ന് 150 BPM-ലേക്ക് മാറ്റിയാൽ എന്ത് സംഭവിക്കും?",
    "options": [
      { "text": "ഗാനത്തിൻ്റെ താളം കുറയും.", "isCorrect": false },
      { "text": "സംഗീതോപകരണങ്ങളുടെ എണ്ണം കൂടും.", "isCorrect": false },
      { "text": "ഗാനം പൂർണ്ണമായും നിർത്തുന്നു.", "isCorrect": false },
      { "text": "ഗാനത്തിൻ്റെ വേഗത കൂടും.", "isCorrect": true }
    ]
  },
  {
    "question": "LMMS-ൽ ഒരു പുതിയ ഉപകരണം (Instrument) ചേർക്കുന്നതിനുള്ള ടൂൾ എവിടെയാണ് സ്ഥിതി ചെയ്യുന്നത്?",
    "options": [
      { "text": "Song-Editor വിൻഡോയിൽ.", "isCorrect": false },
      { "text": "Beat/Bassline Editor-ൽ.", "isCorrect": false },
      { "text": "താഴത്തെ FX Mixer-ൽ.", "isCorrect": false },
      { "text": "സൈഡ്‌ബാറിലെ ടൂൾസ് വിഭാഗത്തിൽ.", "isCorrect": true }
    ]
  },
  {
    "question": "LMMS-ൽ Beat/Bassline Editor-ൽ ചേർക്കുന്ന ബീറ്റുകൾ എവിടെയാണ് ബ്ലോക്കുകളായി ഉപയോഗിക്കുന്നത്?",
    "options": [
      { "text": "Piano-Roll-ൽ.", "isCorrect": false },
      { "text": "FX Mixer-ൽ.", "isCorrect": false },
      { "text": "Instrument Plugins-ൽ.", "isCorrect": false },
      { "text": "Song-Editor-ൽ.", "isCorrect": true }
    ]
  },
  {
    "question": "LMMS-ൽ, ഒരു മ്യൂസിക് നോട്ട് Piano-Roll-ൽ നിന്ന് നീക്കം ചെയ്യാൻ Scroll Wheel Click ഉപയോഗിക്കാമോ?",
    "options": [
      { "text": "അതെ, Scroll Wheel Click ഉപയോഗിച്ച് നീക്കം ചെയ്യാം.", "isCorrect": false },
      { "text": "ഇല്ല, Scroll Wheel Click ഉപയോഗിക്കുന്നത് ബീറ്റ് എഡിറ്ററിലാണ്.", "isCorrect": true },
      { "text": "അതെ, മ്യൂസിക് നോട്ട് തിരഞ്ഞെടുത്ത് Delete കീ അമർത്തണം.", "isCorrect": false },
      { "text": "ഇല്ല, Left Click ഉപയോഗിച്ച് മാത്രമേ നീക്കം ചെയ്യാനാകൂ.", "isCorrect": false }
    ]
  },
  {
    "question": "LMMS-ൽ Song-Editor വിൻഡോയിലെ ബ്ലോക്ക് ഡിലീറ്റ് ചെയ്യുന്നതിനായി Left Click ഉപയോഗിക്കാമോ?",
    "options": [
      { "text": "അതെ, Left Click ഉപയോഗിച്ച് നീക്കം ചെയ്യാം.", "isCorrect": false },
      { "text": "ഇല്ല, Right Click ഉപയോഗിച്ച് മാത്രമേ ബ്ലോക്ക് ഡിലീറ്റ് ചെയ്യാനാകൂ.", "isCorrect": true },
      { "text": "അതെ, ബ്ലോക്ക് തിരഞ്ഞെടുത്ത് Delete കീ അമർത്തണം.", "isCorrect": false },
      { "text": "ഇല്ല, മൗസ് വീൽ ക്ലിക്കുചെയ്യണം.", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു DAW സോഫ്റ്റ്‌വെയറിൻ്റെ പ്രധാന ഉപയോഗമായി പാഠഭാഗം സൂചിപ്പിക്കാത്തത് ഏത്?",
    "options": [
      { "text": "ഓഡിയോ റെക്കോർഡ് ചെയ്യൽ.", "isCorrect": false },
      { "text": "സംഗീതം എഡിറ്റ് ചെയ്യൽ.", "isCorrect": false },
      { "text": "റേഡിയോ പ്രോഗ്രാമുകൾക്ക് Sound Tracks തയ്യാറാക്കൽ.", "isCorrect": false },
      { "text": "പ്രൊജക്ഷൻ സ്ലൈഡുകൾ സൃഷ്ടിക്കൽ.", "isCorrect": true }
    ]
  },
  {
    "question": "LMMS-ൽ, സംഗീത ടോണുകൾ എവിടെ നിന്നാണ് തിരഞ്ഞെടുക്കുന്നത്?",
    "options": [
      { "text": "My Projects", "isCorrect": false },
      { "text": "Piano-Roll", "isCorrect": false },
      { "text": "Song-Editor", "isCorrect": false },
      { "text": "My Samples", "isCorrect": true }
    ]
  },
  {
    "question": "ഡിജിറ്റൽ സാങ്കേതികവിദ്യയുടെ ആവിർഭാവത്തിന് മുമ്പ് സംഗീതം സൃഷ്ടിച്ചിരുന്നത് എങ്ങനെ?",
    "options": [
      { "text": "LMMS പോലുള്ള സോഫ്റ്റ്‌വെയർ ഉപയോഗിച്ച്.", "isCorrect": false },
      { "text": "വീഡിയോ എഡിറ്റിംഗ് സോഫ്റ്റ്‌വെയർ ഉപയോഗിച്ച്.", "isCorrect": false },
      { "text": "അനലോഗ് റെക്കോർഡറുകൾ ഉപയോഗിച്ച്.", "isCorrect": false },
      { "text": "സംഗീതോപകരണങ്ങൾ വായിച്ച് റെക്കോർഡ് ചെയ്ത്.", "isCorrect": true }
    ]
  },
  {
    "question": "LMMS സോഫ്റ്റ്‌വെയർ എന്തിൻ്റെ ഉദാഹരണമാണ്?",
    "options": [
      { "text": "Word Processor", "isCorrect": false },
      { "text": "Image Editor", "isCorrect": false },
      { "text": "Spreadsheet", "isCorrect": false },
      { "text": "DAW", "isCorrect": true }
    ]
  },
  {
    "question": "LMMS-ൽ, ഒരു സംഗീത ട്രാക്ക് ഓഡിയോ ഫോർമാറ്റിലേക്ക് എക്‌സ്‌പോർട്ട് ചെയ്യാനുള്ള ശരിയായ നടപടിക്രമം?",
    "options": [
      { "text": "Tools → Export", "isCorrect": false },
      { "text": "Edit → Export", "isCorrect": false },
      { "text": "View → Export", "isCorrect": false },
      { "text": "File → Export", "isCorrect": true }
    ]
  },
  {
    "question": "LMMS-ൽ, Piano-Roll വിൻഡോയിൽ മ്യൂസിക് നോട്ട് ചേർക്കുന്നതിനുള്ള പ്രവർത്തനം?",
    "options": [
      { "text": "Right Click", "isCorrect": false },
      { "text": "Scroll Wheel Click", "isCorrect": false },
      { "text": "Double Click", "isCorrect": false },
      { "text": "Left Click", "isCorrect": true }
    ]
  },
  {
    "question": "LMMS-ൽ Beat/Bassline Editor-ൽ ബീറ്റ് കൂട്ടാനോ കുറയ്ക്കാനോ ഉപയോഗിക്കുന്ന മെട്രിക്?",
    "options": [
      { "text": "Time Signature", "isCorrect": false },
      { "text": "Volume", "isCorrect": false },
      { "text": "Pitch", "isCorrect": false },
      { "text": "BPM", "isCorrect": true }
    ]
  },
  {
    "question": "LMMS-ൽ, ഒരു സംഗീതത്തിൻ്റെ താളം (Rhythm) മാറ്റണമെങ്കിൽ, ആദ്യം ഏത് വിൻഡോ തുറക്കണം?",
    "options": [
      { "text": "Song-Editor", "isCorrect": false },
      { "text": "Piano-Roll", "isCorrect": false },
      { "text": "FX Mixer", "isCorrect": false },
      { "text": "Beat/Bassline Editor", "isCorrect": true }
    ]
  },
  {
    "question": "സിനിമകൾക്കും ആനിമേഷനുകൾക്കും പശ്ചാത്തല സംഗീതം സൃഷ്ടിക്കുന്നത് എന്തിൻ്റെ സഹായത്തോടെയാണ്?",
    "options": [
      { "text": "വെള്ളം ഉപയോഗിച്ച്.", "isCorrect": false },
      { "text": "അനലോഗ് ഉപകരണം ഉപയോഗിച്ച്.", "isCorrect": false },
      { "text": "പ്രിൻ്റർ ഉപയോഗിച്ച്.", "isCorrect": false },
      { "text": "കമ്പ്യൂട്ടറും അനുബന്ധ സോഫ്റ്റ്‌വെയറും ഉപയോഗിച്ച്.", "isCorrect": true }
    ]
  },
  {
    "question": "LMMS-ൽ, ഒരു പ്രോജക്റ്റ് തുറക്കാൻ ശ്രമിക്കുമ്പോൾ, അത് ഏത് ഫയൽ എക്സ്റ്റൻഷനിലായിരിക്കും പ്രതീക്ഷിക്കുന്നത്?",
    "options": [
      { "text": ".wav", "isCorrect": false },
      { "text": ".mp3", "isCorrect": false },
      { "text": ".pdf", "isCorrect": false },
      { "text": ".mmpz", "isCorrect": true }
    ]
  },
  {
    "question": "LMMS-ലെ Song-Editor വിൻഡോയിലെ ബ്ലോക്കുകൾ ഡിലീറ്റ് ചെയ്യാനുള്ള ശരിയായ മൗസ് പ്രവർത്തനം?",
    "options": [
      { "text": "ഇടത് ക്ലിക്ക്", "isCorrect": false },
      { "text": "ഡബിൾ ക്ലിക്ക്", "isCorrect": false },
      { "text": "മൗസ് വീൽ ക്ലിക്ക്", "isCorrect": false },
      { "text": "വലത് ക്ലിക്ക്", "isCorrect": true }
    ]
  },
  {
    "question": "LMMS-ൽ, സംഗീത ഉപകരണങ്ങൾ ചേർക്കാൻ 'Instrument Plugins' ടൂൾ എവിടെയാണ് സ്ഥിതി ചെയ്യുന്നത്?",
    "options": [
      { "text": "താഴത്തെ FX Mixer-ൽ.", "isCorrect": false },
      { "text": "Song-Editor വിൻഡോയുടെ മുകളിൽ.", "isCorrect": false },
      { "text": "Piano-Roll-ൻ്റെ ഇടതുവശത്ത്.", "isCorrect": false },
      { "text": "സൈഡ്‌ബാറിൽ.", "isCorrect": true }
    ]
  },
  {
    "question": "LMMS-ലെ Beat/Bassline Editor-ൻ്റെ പ്രധാന ധർമ്മം?",
    "options": [
      { "text": "സംഗീത കുറിപ്പുകൾ ക്രമീകരിക്കൽ.", "isCorrect": false },
      { "text": "ഗാനം മൊത്തത്തിൽ ക്രമീകരിക്കൽ.", "isCorrect": false },
      { "text": "ശബ്ദ ഇഫക്റ്റുകൾ നൽകൽ.", "isCorrect": false },
      { "text": "താളവും ബേസ് ലൈനും എഡിറ്റ് ചെയ്യൽ.", "isCorrect": true }
    ]
  },
  {
    "question": "LMMS-ൽ, ഒരു പുതിയ ഉപകരണം ചേർക്കാൻ 'My Samples' ഉപയോഗിക്കാമോ?",
    "options": [
      { "text": "അതെ, My Samples-ൽ നിന്ന് ഉപകരണങ്ങൾ തിരഞ്ഞെടുക്കാം.", "isCorrect": false },
      { "text": "ഇല്ല, My Samples ശബ്ദ ടോണുകൾക്കുള്ളതാണ്.", "isCorrect": true },
      { "text": "അതെ, My Samples-ഉം Instrument Plugins-ഉം ഒന്നുതന്നെയാണ്.", "isCorrect": false },
      { "text": "ഇല്ല, My Samples പ്രോജക്റ്റ് ഫയലുകൾക്കുള്ളതാണ്.", "isCorrect": false }
    ]
  },
  {
    "question": "LMMS-ൽ സൃഷ്ടിച്ച സംഗീതത്തിന് 90 BPM വേഗതയുണ്ടെങ്കിൽ, അതിനെ എന്ത് ചെയ്യാൻ ശ്രമിക്കുമ്പോഴാണ് വേഗത കൂടുന്നത്?",
    "options": [
      { "text": "BPM 70 ആയി കുറയ്ക്കുമ്പോൾ.", "isCorrect": false },
      { "text": "Time Signature മാറ്റുമ്പോൾ.", "isCorrect": false },
      { "text": "Beat/Bassline Editor-ൽ കൂടുതൽ ബീറ്റുകൾ ചേർക്കുമ്പോൾ.", "isCorrect": false },
      { "text": "BPM 110 ആയി വർദ്ധിപ്പിക്കുമ്പോൾ.", "isCorrect": true }
    ]
  },
  {
    "question": "LMMS-ലെ Piano-Roll വിൻഡോയിൽ എന്ത് ചേർത്താണ് മെലഡി സൃഷ്ടിക്കുന്നത്?",
    "options": [
      { "text": "ബ്ലോക്കുകൾ", "isCorrect": false },
      { "text": "ബീറ്റുകൾ", "isCorrect": false },
      { "text": "മിക്സർ ചാനലുകൾ", "isCorrect": false },
      { "text": "നോട്ടുകൾ (Notes)", "isCorrect": true }
    ]
  },
  {
    "question": "LMMS-ൽ, സംഗീത ബ്ലോക്കുകൾ എഡിറ്റ് ചെയ്യാൻ ഉപയോഗിക്കാത്ത വിൻഡോ?",
    "options": [
      { "text": "Song-Editor", "isCorrect": false },
      { "text": "Piano-Roll", "isCorrect": false },
      { "text": "Beat/Bassline Editor", "isCorrect": false },
      { "text": "My Projects", "isCorrect": true }
    ]
  },
  {
    "question": "LMMS-ൽ 'My Samples' ടൂളിൻ്റെ പ്രധാന ഉപയോഗം?",
    "options": [
      { "text": "പ്രോജക്റ്റ് തുറക്കാൻ.", "isCorrect": false },
      { "text": "ഉപകരണങ്ങൾ ചേർക്കാൻ.", "isCorrect": false },
      { "text": "ഗാനം ക്രമീകരിക്കാൻ.", "isCorrect": false },
      { "text": "സംഗീത ടോണുകൾ (Sounds) തിരഞ്ഞെടുക്കാൻ.", "isCorrect": true }
    ]
  },
  {
    "question": "LMMS-ൽ, Piano-Roll വിൻഡോയിലെ മ്യൂസിക് നോട്ട് ചേർക്കുന്നതിനുള്ള പ്രവർത്തനം?",
    "options": [
      { "text": "Right Click ചെയ്യുക.", "isCorrect": false },
      { "text": "Scroll Wheel Click ചെയ്യുക.", "isCorrect": false },
      { "text": "Double Click ചെയ്യുക.", "isCorrect": false },
      { "text": "Left Click ചെയ്യുക.", "isCorrect": true }
    ]
  },
  {
    "question": "DAW-കൾ സാധാരണയായി റേഡിയോ, ടെലിവിഷൻ പ്രോഗ്രാമുകൾക്ക് വേണ്ടി എന്ത് തയ്യാറാക്കാൻ ഉപയോഗിക്കുന്നു?",
    "options": [
      { "text": "വീഡിയോ ക്ലിപ്പുകൾ", "isCorrect": false },
      { "text": "സ്ലൈഡുകൾ", "isCorrect": false },
      { "text": "ടെക്സ്റ്റ് ഫയലുകൾ", "isCorrect": false },
      { "text": "Sound Tracks", "isCorrect": true }
    ]
  },
  {
    "question": "LMMS-ലെ പ്രധാന വിൻഡോകളിൽ ഉൾപ്പെടാത്തത് ഏത്?",
    "options": [
      { "text": "Song-Editor", "isCorrect": false },
      { "text": "Beat/Bassline Editor", "isCorrect": false },
      { "text": "Piano-Roll", "isCorrect": false },
      { "text": "Character Window", "isCorrect": true }
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
