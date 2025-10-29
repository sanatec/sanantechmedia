document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "PictoBlox-ൽ ഒരു ഡിജിറ്റൽ ക്ലോക്കിലെ മണിക്കൂർ സൂചി കറങ്ങാൻ ഉപയോഗിക്കുന്ന സിസ്റ്റം സമയം നൽകുന്ന ബ്ലോക്ക് ഏതാണ്?",
    "options": [
      { "text": "current minute", "isCorrect": false },
      { "text": "current hour", "isCorrect": true },
      { "text": "current time", "isCorrect": false },
      { "text": "go to front layer", "isCorrect": false }
    ]
  },
  {
    "question": "ക്ലോക്കിലെ മിനിറ്റ് സൂചിക്ക് ഓരോ മിനിറ്റിലും എത്ര ഡിഗ്രി കറങ്ങിയാലാണ് കൃത്യമായ സമയം കാണിക്കാൻ കഴിയുക?",
    "options": [
      { "text": "1 ഡിഗ്രി", "isCorrect": false },
      { "text": "6 ഡിഗ്രി", "isCorrect": true },
      { "text": "30 ഡിഗ്രി", "isCorrect": false },
      { "text": "90 ഡിഗ്രി", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു സ്‌പ്രൈറ്റിൻ്റെ നിർവ്വഹണം തുടർച്ചയായി, ഒരു വ്യവസ്ഥ പാലിക്കുന്നത് വരെ ആവർത്തിക്കാൻ ഉപയോഗിക്കുന്ന കൺട്രോൾ ബ്ലോക്ക് ഏതാണ്?",
    "options": [
      { "text": "repeat ()", "isCorrect": false },
      { "text": "forever", "isCorrect": true },
      { "text": "wait () seconds", "isCorrect": false },
      { "text": "if () then", "isCorrect": false }
    ]
  },
  {
    "question": "PictoBlox-ൽ, ഉപയോക്താവിൻ്റെ ഇൻപുട്ട് സ്വീകരിക്കാൻ (ഉദാഹരണത്തിന്, അലാറം സമയം) ഉപയോഗിക്കുന്ന ബ്ലോക്ക് ഏതാണ്?",
    "options": [
      { "text": "say ()", "isCorrect": false },
      { "text": "ask () and wait", "isCorrect": true },
      { "text": "wait until ()", "isCorrect": false },
      { "text": "set variable to ()", "isCorrect": false }
    ]
  },
  {
    "question": "അലാറം സെറ്റ് ചെയ്യുമ്പോൾ, ഉപയോക്താവ് നൽകുന്ന ഇൻപുട്ട് ഏത് Sensing ബ്ലോക്കിലാണ് സംഭരിക്കപ്പെടുന്നത്?",
    "options": [
      { "text": "timer", "isCorrect": false },
      { "text": "mouse x", "isCorrect": false },
      { "text": "answer", "isCorrect": true },
      { "text": "loudness", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു സ്‌പ്രൈറ്റിലെ കോഡ് പ്രവർത്തിക്കുമ്പോൾ മറ്റൊരു സ്‌പ്രൈറ്റിന് ഒരു സന്ദേശം അയച്ച് അതിൻ്റെ കോഡ് പ്രവർത്തിപ്പിക്കാൻ ഉപയോഗിക്കുന്ന ബ്ലോക്ക് ഏതാണ്?",
    "options": [
      { "text": "send message ()", "isCorrect": false },
      { "text": "when this sprite clicked", "isCorrect": false },
      { "text": "broadcast ()", "isCorrect": true },
      { "text": "switch backdrop to ()", "isCorrect": false }
    ]
  },
  {
    "question": "അലാറം സമയമാകുമ്പോൾ, അലാറം മുഴക്കുന്നതിനായി ഉപയോഗിക്കുന്ന **സോപാധികമായ നിർവ്വഹണത്തിൻ്റെ** (Conditional Execution) അടിസ്ഥാന ബ്ലോക്ക് ഏതാണ്?",
    "options": [
      { "text": "repeat until ()", "isCorrect": false },
      { "text": "forever", "isCorrect": false },
      { "text": "if () then", "isCorrect": true },
      { "text": "start sound ()", "isCorrect": false }
    ]
  },
  {
    "question": "സ്‌പ്രൈറ്റുകളുടെ ലെയറിംഗ് ക്രമം മാറ്റുന്നതിന് (ഉദാഹരണത്തിന്, ഒരു സ്‌പ്രൈറ്റിനെ ഏറ്റവും മുൻപിൽ കൊണ്ടുവരാൻ) ഉപയോഗിക്കുന്ന ബ്ലോക്ക് ഏതാണ്?",
    "options": [
      { "text": "change layer by 1", "isCorrect": false },
      { "text": "go to front layer", "isCorrect": true },
      { "text": "next costume", "isCorrect": false },
      { "text": "set direction to 90", "isCorrect": false }
    ]
  },
  {
    "question": "രണ്ട് വ്യവസ്ഥകൾ (ഉദാഹരണത്തിന്, മണിക്കൂർ 10 ഉം മിനിറ്റ് 30 ഉം) ഒരേ സമയം ശരിയാണോയെന്ന് പരിശോധിക്കാൻ ഉപയോഗിക്കുന്ന ഓപ്പറേറ്റർ ബ്ലോക്ക് ഏതാണ്?",
    "options": [
      { "text": "or", "isCorrect": false },
      { "text": "not", "isCorrect": false },
      { "text": "and", "isCorrect": true },
      { "text": "<", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു സ്‌പ്രൈറ്റിനെ എതിർ ഘടികാരദിശയിൽ (Counter-Clockwise) 5 ഡിഗ്രി കറക്കാൻ ഉപയോഗിക്കുന്ന കറക്കൽ ബ്ലോക്ക് ഏതാണ്?",
    "options": [
      { "text": "turn 5 degrees", "isCorrect": false },
      { "text": "turn -5 degrees", "isCorrect": true },
      { "text": "set direction to 5", "isCorrect": false },
      { "text": "point towards mouse pointer", "isCorrect": false }
    ]
  },
  {
    "question": "പ്രോഗ്രാമിംഗ് ഭാഷകളിൽ, ഒരു പ്രത്യേക മൂല്യം സംഭരിക്കുന്നതിനുള്ള മെമ്മറി ലൊക്കേഷന് നൽകിയ പേരിനെ എന്ത് വിളിക്കുന്നു?",
    "options": [
      { "text": "സ്ഥിരാങ്കം (Constant)", "isCorrect": false },
      { "text": "വേരിയബിൾ (Variable)", "isCorrect": true },
      { "text": "ബ്ലോക്ക് (Block)", "isCorrect": false },
      { "text": "സ്ക്രിപ്റ്റ് (Script)", "isCorrect": false }
    ]
  },
  {
    "question": "പൈത്തൺ പ്രോഗ്രാമിംഗ് ഭാഷയ്ക്ക് നേതൃത്വം നൽകിയത് ആരാണ്?",
    "options": [
      { "text": "ജെയിംസ് ഗോസ്ലിംഗ്", "isCorrect": false },
      { "text": "ഗൈഡോ വാൻ റോസ്സം (Guido van Rossum)", "isCorrect": true },
      { "text": "കെൻ തോംസൺ", "isCorrect": false },
      { "text": "ബജാർനെ സ്ട്രൗസ്ട്രപ്പ്", "isCorrect": false }
    ]
  },
  {
    "question": "പൈത്തൺ കോഡിൻ്റെ ശരിയായ ഘടനയ്ക്കും കോഡ് ബ്ലോക്കുകൾ തിരിച്ചറിയുന്നതിനും നിർബന്ധമായി ഉപയോഗിക്കേണ്ട നിയമം ഏതാണ്?",
    "options": [
      { "text": "ബ്രാക്കറ്റുകൾ ({})", "isCorrect": false },
      { "text": "സെമി കോളൻ (;)", "isCorrect": false },
      { "text": "ഇൻ്റൻ്റേഷൻ (Indentation)", "isCorrect": true },
      { "text": "ക്യാപിറ്റലൈസേഷൻ (Capitalization)", "isCorrect": false }
    ]
  },
  {
    "question": "താഴെക്കൊടുക്കുന്നതിൽ ഏതാണ് ഒരു ടെക്സ്റ്റ് അധിഷ്ഠിത പ്രോഗ്രാമിംഗ് ഭാഷയ്ക്ക് ഉദാഹരണം?",
    "options": [
      { "text": "Scratch", "isCorrect": false },
      { "text": "PictoBlox", "isCorrect": false },
      { "text": "Python", "isCorrect": true },
      { "text": "Snap!", "isCorrect": false }
    ]
  },
  {
    "question": "പൈത്തണിൽ \"Hello World\" എന്ന് ഔട്ട്പുട്ടായി ലഭിക്കാൻ ഉപയോഗിക്കുന്ന ശരിയായ കോഡ് ഏതാണ്?",
    "options": [
      { "text": "echo \"Hello World\"", "isCorrect": false },
      { "text": "print(\"Hello World\")", "isCorrect": true },
      { "text": "display \"Hello World\"", "isCorrect": false },
      { "text": "write \"Hello World\"", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു കൂട്ടം നിർദ്ദേശങ്ങൾ ഒരു നിശ്ചിത എണ്ണം തവണ (ഉദാഹരണത്തിന്, 10 തവണ) പ്രവർത്തിപ്പിക്കുന്ന പൈത്തൺ കോഡ് ഘടന ഏതാണ്?",
    "options": [
      { "text": "if count < 10:", "isCorrect": false },
      { "text": "while True:", "isCorrect": false },
      { "text": "for i in range(10):", "isCorrect": true },
      { "text": "def loop():", "isCorrect": false }
    ]
  },
  {
    "question": "PictoBlox-ൽ, ഒരു സ്‌പ്രൈറ്റിന് അതിൻ്റെ അടുത്ത രൂപം (costume) നൽകി ഒരു ആനിമേഷൻ ഉണ്ടാക്കാൻ സഹായിക്കുന്ന ബ്ലോക്ക് ഏതാണ്?",
    "options": [
      { "text": "set costume to ()", "isCorrect": false },
      { "text": "change backdrop to ()", "isCorrect": false },
      { "text": "next costume", "isCorrect": true },
      { "text": "show", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു സ്‌പ്രൈറ്റിൻ്റെ ശബ്ദത്തിൻ്റെ തീവ്രത നിയന്ത്രിക്കാൻ ഉപയോഗിക്കുന്ന ബ്ലോക്ക് ഏതാണ്?",
    "options": [
      { "text": "start sound ()", "isCorrect": false },
      { "text": "set volume to () %", "isCorrect": true },
      { "text": "change pitch by ()", "isCorrect": false },
      { "text": "play note () for () beats", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു സ്‌പ്രൈറ്റിനെ സ്റ്റേജിൻ്റെ കൃത്യമായ മധ്യഭാഗത്തേക്ക് (Center) ചലിപ്പിക്കാൻ, ഏത് കോർഡിനേറ്റുകളാണ് `go to x: () y: ()` ബ്ലോക്കിൽ നൽകേണ്ടത്?",
    "options": [
      { "text": "(x: 100, y: 100)", "isCorrect": false },
      { "text": "(x: 0, y: 0)", "isCorrect": true },
      { "text": "(x: -100, y: 0)", "isCorrect": false },
      { "text": "random position", "isCorrect": false }
    ]
  },
  {
    "question": "പ്രോഗ്രാം പ്രവർത്തിപ്പിക്കുമ്പോൾ പ്രധാന സ്ക്രിപ്റ്റിൻ്റെ നിർവ്വഹണം ആരംഭിക്കാൻ ഉപയോഗിക്കുന്ന Event ബ്ലോക്ക് ഏതാണ്?",
    "options": [
      { "text": "when this sprite clicked", "isCorrect": false },
      { "text": "when backdrop switches to ()", "isCorrect": false },
      { "text": "when green flag clicked", "isCorrect": true },
      { "text": "when I receive ()", "isCorrect": false }
    ]
  },
  {
    "question": "രണ്ട് സ്‌പ്രൈറ്റുകൾ ചിത്രത്തിൽ കാണിച്ചിരിക്കുന്നത് പോലെ ഉൾപ്പെടുത്തിയപ്പോൾ പ്രാവ് മരത്തിന് പിന്നിലായി. പ്രാവിനെ മുൻപിലേക്ക് കൊണ്ടുവരാൻ ഏത് ബ്ലോക്കാണ് ഉപയോഗിക്കേണ്ടത്?",
    "options": [
      { "text": "go to back layer", "isCorrect": false },
      { "text": "go forward 1 layers", "isCorrect": true },
      { "text": "hide", "isCorrect": false },
      { "text": "set size to 100%", "isCorrect": false }
    ]
  },
  {
    "question": "PictoBlox-ൽ, `if () then else` ബ്ലോക്ക് പ്രോഗ്രാമിംഗിലെ ഏത് അടിസ്ഥാന ആശയത്തെയാണ് പ്രതിനിധീകരിക്കുന്നത്?",
    "options": [
      { "text": "ആവർത്തന നിർവ്വഹണം (Repetitive Execution)", "isCorrect": false },
      { "text": "ക്രമ നിർവ്വഹണം (Sequential Execution)", "isCorrect": false },
      { "text": "സോപാധികമായ നിർവ്വഹണം (Conditional Execution)", "isCorrect": true },
      { "text": "ഇവയെല്ലാം", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു സ്‌പ്രൈറ്റിൻ്റെ ദൃശ്യപരത (visibility) നിയന്ത്രിക്കുന്ന `show` ഉം `hide` ഉം ബ്ലോക്കുകൾ ഏത് വിഭാഗത്തിൽ ഉൾപ്പെടുന്നു?",
    "options": [
      { "text": "Motion", "isCorrect": false },
      { "text": "Looks", "isCorrect": true },
      { "text": "Sensing", "isCorrect": false },
      { "text": "Events", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു കൂട്ടം നിർദ്ദേശങ്ങൾ പലതവണ ആവർത്തിക്കുന്നത് ഒഴിവാക്കാനും പ്രോഗ്രാം ലളിതമാക്കാനും സഹായിക്കുന്ന PictoBlox സവിശേഷത ഏതാണ്?",
    "options": [
      { "text": "ലിസ്റ്റ് (List)", "isCorrect": false },
      { "text": "കസ്റ്റം ബ്ലോക്ക് / മൈ ബ്ലോക്ക് (My Blocks)", "isCorrect": true },
      { "text": "ബ്രോഡ്കാസ്റ്റിംഗ് (Broadcasting)", "isCorrect": false },
      { "text": "വേരിയബിൾ (Variable)", "isCorrect": false }
    ]
  },
  {
    "question": "ഡിജിറ്റൽ അലാറം ക്ലോക്കിൽ, ഓരോ സെക്കൻഡിലും സമയം പരിശോധിക്കാൻ `forever` ലൂപ്പിനുള്ളിൽ ഉപയോഗിക്കുന്ന ബ്ലോക്ക് കോമ്പിനേഷൻ ഏതാണ്?",
    "options": [
      { "text": "repeat 1", "isCorrect": false },
      { "text": "wait 1 seconds", "isCorrect": true },
      { "text": "go to front layer", "isCorrect": false },
      { "text": "set variable to 1", "isCorrect": false }
    ]
  },
  {
    "question": "പൈത്തണിൽ, ടെക്സ്റ്റ് ഡാറ്റ (strings) ഉൾക്കൊള്ളാൻ ഉപയോഗിക്കുന്ന ചിഹ്നം ഏതാണ്?",
    "options": [
      { "text": "ബ്രാക്കറ്റുകൾ [ ]", "isCorrect": false },
      { "text": "കർലി ബ്രേസുകൾ { }", "isCorrect": false },
      { "text": "ഇരട്ട ഉദ്ധരണി ചിഹ്നങ്ങൾ \" \"", "isCorrect": true },
      { "text": "സിംഗിൾ ഉദ്ധരണി ചിഹ്നങ്ങൾ ' '", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു വേരിയബിളിൻ്റെ നിലവിലെ മൂല്യം മാറ്റാൻ (ഉദാഹരണത്തിന്, 'count' എന്ന വേരിയബിൾ 1 വർദ്ധിപ്പിക്കാൻ) ഉപയോഗിക്കുന്ന ബ്ലോക്ക് ഏതാണ്?",
    "options": [
      { "text": "set count to 1", "isCorrect": false },
      { "text": "show variable count", "isCorrect": false },
      { "text": "change count by 1", "isCorrect": true },
      { "text": "hide variable count", "isCorrect": false }
    ]
  },
  {
    "question": "നിലവിലെ സമയം 11:00 ആണെങ്കിൽ, Alarm Hour 10 ആണെങ്കിൽ, `(current hour) = (Alarm Hour)` എന്ന വ്യവസ്ഥയുടെ ഫലം എന്തായിരിക്കും?",
    "options": [
      { "text": "True", "isCorrect": false },
      { "text": "False", "isCorrect": true },
      { "text": "Error", "isCorrect": false },
      { "text": "10", "isCorrect": false }
    ]
  },
{
    "question": "ഏത് തരം പ്രോഗ്രാമിംഗ് ഭാഷയാണ് AI (Artificial Intelligence) അധിഷ്ഠിത സാങ്കേതികവിദ്യകൾ വികസിപ്പിക്കാൻ ഏറ്റവും അനുയോജ്യം?",
    "options": [
      { "text": "ബ്ലോക്ക് കോഡിംഗ് ഭാഷകൾ", "isCorrect": false },
      { "text": "ടെക്സ്റ്റ് അധിഷ്ഠിത പ്രോഗ്രാമിംഗ് ഭാഷകൾ", "isCorrect": true },
      { "text": "മാർക്ക്അപ്പ് ഭാഷകൾ", "isCorrect": false },
      { "text": "സ്‌പ്രൈറ്റ് ഭാഷകൾ", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു സ്‌പ്രൈറ്റിനെ മറയ്ക്കാനും (hide) കാണിക്കാനും (show) ഉപയോഗിക്കുന്ന ബ്ലോക്കുകളുടെ വിഭാഗം ഏതാണ്?",
    "options": [
      { "text": "Motion", "isCorrect": false },
      { "text": "Looks", "isCorrect": true },
      { "text": "Sensing", "isCorrect": false },
      { "text": "Events", "isCorrect": false }
    ]
  },
  {
    "question": "PictoBlox-ൽ, `play sound () until done` എന്നതിന് പകരം `start sound ()` ഉപയോഗിക്കുന്നതിൻ്റെ പ്രയോജനം എന്താണ്?",
    "options": [
      { "text": "ശബ്ദം പ്ലേ ചെയ്യുമ്പോൾ മറ്റ് സ്ക്രിപ്റ്റുകൾ നിർത്താൻ.", "isCorrect": false },
      { "text": "ശബ്ദം പ്ലേ ചെയ്യുമ്പോൾ മറ്റ് സ്ക്രിപ്റ്റുകൾ പ്രവർത്തിക്കുന്നത് തടസ്സപ്പെടുത്താതിരിക്കാൻ.", "isCorrect": true },
      { "text": "ശബ്ദം മാത്രം പ്ലേ ചെയ്യാൻ.", "isCorrect": false },
      { "text": "ശബ്ദത്തിൻ്റെ തീവ്രത കുറയ്ക്കാൻ.", "isCorrect": false }
    ]
  },
  {
    "question": "പൈത്തൺ കോഡിൽ `print(10 - 2 * 3)` എന്നതിൻ്റെ ഔട്ട്പുട്ട് എന്തായിരിക്കും?",
    "options": [
      { "text": "24", "isCorrect": false },
      { "text": "4", "isCorrect": true },
      { "text": "18", "isCorrect": false },
      { "text": "8", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു സ്‌പ്രൈറ്റ് സംസാരിക്കുന്നതിൻ്റെ പ്രതീതി നൽകാൻ, സ്‌പ്രൈറ്റിൻ്റെ മുകളിൽ ഒരു സംഭാഷണ ബബിളിൽ വാചകം പ്രദർശിപ്പിക്കാൻ ഉപയോഗിക്കുന്ന ബ്ലോക്ക് ഏതാണ്?",
    "options": [
      { "text": "ask () and wait", "isCorrect": false },
      { "text": "think () for () seconds", "isCorrect": false },
      { "text": "say () for () seconds", "isCorrect": true },
      { "text": "broadcast ()", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു ലിസ്റ്റിലെ എല്ലാ ഘടകങ്ങളും നീക്കം ചെയ്യാൻ ഉപയോഗിക്കുന്ന ലിസ്റ്റ് ബ്ലോക്ക് ഏതാണ്?",
    "options": [
      { "text": "remove item 1 of ()", "isCorrect": false },
      { "text": "delete all of ()", "isCorrect": true },
      { "text": "replace item 1 of ()", "isCorrect": false },
      { "text": "hide list ()", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു സ്‌പ്രൈറ്റിൻ്റെ സ്ഥാനവും ദിശയും നിയന്ത്രിക്കുന്ന ബ്ലോക്കുകൾ (ഉദാഹരണത്തിന്, `go to x: () y: ()`) ഏത് വിഭാഗത്തിൽ ഉൾപ്പെടുന്നു?",
    "options": [
      { "text": "Control", "isCorrect": false },
      { "text": "Motion", "isCorrect": true },
      { "text": "Sound", "isCorrect": false },
      { "text": "Operators", "isCorrect": false }
    ]
  },
  {
    "question": "രണ്ട് സ്‌പ്രൈറ്റുകൾ ഒരേ സമയം മുകളിലേക്കും താഴേക്കും (Up and Down) ചലിപ്പിക്കാൻ, `broadcast` സന്ദേശം എന്തിനാണ് ഉപയോഗിക്കുന്നത്?",
    "options": [
      { "text": "ചലനം ക്രമീകരിക്കുന്നതിന്.", "isCorrect": false },
      { "text": "രണ്ട് സ്പ്രൈറ്റുകളുടെയും സ്ക്രിപ്റ്റുകൾ ഒരേ ഇവൻ്റിൽ ആരംഭിക്കുന്നതിന്.", "isCorrect": true },
      { "text": "അവയുടെ നിറം മാറ്റുന്നതിന്.", "isCorrect": false },
      { "text": "അവയെ മറയ്ക്കുന്നതിന്.", "isCorrect": false }
    ]
  },
  {
    "question": "പൈത്തൺ പ്രോഗ്രാമിംഗിലെ സിൻ്റാക്സ് പിശകുകൾക്ക് (Syntax Errors) ഒരു പ്രധാന കാരണം എന്താണ്?",
    "options": [
      { "text": "അമിതമായ അഭിപ്രായങ്ങൾ (Comments).", "isCorrect": false },
      { "text": "തെറ്റായ ഇൻ്റൻ്റേഷൻ (Indentation).", "isCorrect": true },
      { "text": "കുറഞ്ഞ വേരിയബിളുകൾ.", "isCorrect": false },
      { "text": "ബ്രോഡ്കാസ്റ്റ് സന്ദേശങ്ങൾ ഉപയോഗിക്കുന്നത്.", "isCorrect": false }
    ]
  },
  {
    "question": "നിലവിലെ സമയം 12:30 ആണെങ്കിൽ, ക്ലോക്കിലെ മിനിറ്റ് സൂചിയുടെ ദിശ (Direction) എത്രയായിരിക്കും?",
    "options": [
      { "text": "0 ഡിഗ്രി", "isCorrect": false },
      { "text": "90 ഡിഗ്രി", "isCorrect": false },
      { "text": "180 ഡിഗ്രി (30 * 6)", "isCorrect": true },
      { "text": "270 ഡിഗ്രി", "isCorrect": false }
    ]
  },
  {
    "question": "LibreOffice Writer-ൽ ഉള്ളപട്ടിക ഉണ്ടാക്കാൻ 'Heading' സ്റ്റൈൽ ഉപയോഗിക്കുന്നതുപോലെ, PictoBlox-ൽ ഒരു പ്രോഗ്രാമിൻ്റെ ഘടനയെയും ഒഴുക്കിനെയും നിയന്ത്രിക്കുന്നത് എന്താണ്?",
    "options": [
      { "text": "ഗ്രാഫിക്സ് ഇഫക്റ്റുകൾ.", "isCorrect": false },
      { "text": "കൺട്രോൾ ഫ്ലോ ബ്ലോക്കുകൾ (Control Flow Blocks).", "isCorrect": true },
      { "text": "ബാക്ക്ഡ്രോപ്പുകൾ.", "isCorrect": false },
      { "text": "ശബ്ദങ്ങൾ.", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു സ്‌പ്രൈറ്റിനെ ക്ലിക്ക് ചെയ്യുമ്പോൾ കോഡ് പ്രവർത്തിപ്പിക്കാൻ ഉപയോഗിക്കുന്ന Event ബ്ലോക്ക് ഏതാണ്?",
    "options": [
      { "text": "when green flag clicked", "isCorrect": false },
      { "text": "when this sprite clicked", "isCorrect": true },
      { "text": "when I receive ()", "isCorrect": false },
      { "text": "when key () pressed", "isCorrect": false }
    ]
  },
  {
    "question": "പൈത്തണിൽ, `x = 5` എന്ന് നിർവചിക്കുകയും തുടർന്ന് `x = x + 10` എന്ന് നൽകുകയും ചെയ്താൽ, `x` എന്ന വേരിയബിളിൻ്റെ അന്തിമ മൂല്യം എത്രയായിരിക്കും?",
    "options": [
      { "text": "5", "isCorrect": false },
      { "text": "10", "isCorrect": false },
      { "text": "15", "isCorrect": true },
      { "text": "50", "isCorrect": false }
    ]
  },
  {
    "question": "പ്രോഗ്രാമിംഗിൽ, `while ()` ലൂപ്പ് ഏത് തരം നിർവ്വഹണത്തിന് ഉദാഹരണമാണ്?",
    "options": [
      { "text": "ക്രമ നിർവ്വഹണം (Sequential Execution)", "isCorrect": false },
      { "text": "സോപാധികമായ നിർവ്വഹണം (Conditional Execution)", "isCorrect": false },
      { "text": "ആവർത്തന നിർവ്വഹണം (Repetitive Execution)", "isCorrect": true },
      { "text": "ഇവയെല്ലാം", "isCorrect": false }
    ]
  },
  {
    "question": "PictoBlox-ൽ, `stop all` ബ്ലോക്ക് എന്തിനാണ് ഉപയോഗിക്കുന്നത്?",
    "options": [
      { "text": "ഒരു പ്രത്യേക സ്‌പ്രൈറ്റിൻ്റെ സ്ക്രിപ്റ്റ് മാത്രം നിർത്താൻ.", "isCorrect": false },
      { "text": "ശബ്ദം പ്ലേ ചെയ്യുന്നത് മാത്രം നിർത്താൻ.", "isCorrect": false },
      { "text": "പ്രവർത്തിക്കുന്ന എല്ലാ സ്ക്രിപ്റ്റുകളും നിർത്താൻ.", "isCorrect": true },
      { "text": "അലാറം മാത്രം നിർത്താൻ.", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു സ്‌പ്രൈറ്റിൻ്റെ വലിപ്പം മാറ്റാൻ (ഉദാഹരണത്തിന്, 10% വർദ്ധിപ്പിക്കാൻ) ഏത് ബ്ലോക്കാണ് ഉപയോഗിക്കുന്നത്?",
    "options": [
      { "text": "set size to 10%", "isCorrect": false },
      { "text": "change size by 10", "isCorrect": true },
      { "text": "go to front layer", "isCorrect": false },
      { "text": "change x by 10", "isCorrect": false }
    ]
  },
  {
    "question": "PictoBlox-ലെ 'Motion' ബ്ലോക്കുകൾ എന്തിനാണ് ഉപയോഗിക്കുന്നത്?",
    "options": [
      { "text": "സ്‌പ്രൈറ്റിൻ്റെ രൂപം മാറ്റാൻ.", "isCorrect": false },
      { "text": "സ്‌പ്രൈറ്റിൻ്റെ ചലനം നിയന്ത്രിക്കാൻ.", "isCorrect": true },
      { "text": "ശബ്ദം ചേർക്കാൻ.", "isCorrect": false },
      { "text": "സംഭാഷണ ബബിളുകൾ പ്രദർശിപ്പിക്കാൻ.", "isCorrect": false }
    ]
  },
  {
    "question": "പ്രോഗ്രാമിംഗിലെ അടിസ്ഥാന ആശയങ്ങൾ എളുപ്പത്തിൽ പഠിക്കാൻ രൂപകൽപ്പന ചെയ്തിട്ടുള്ള സോഫ്റ്റ്‌വെയറുകൾ ഏതാണ്?",
    "options": [
      { "text": "C++", "isCorrect": false },
      { "text": "Java", "isCorrect": false },
      { "text": "ബ്ലോക്ക് കോഡിംഗ് ആപ്ലിക്കേഷനുകൾ (PictoBlox, Scratch)", "isCorrect": true },
      { "text": "Python", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു സ്‌പ്രൈറ്റിൻ്റെ ദിശ (Direction) എത്രയാണെന്ന് കാണിക്കുന്ന ബ്ലോക്ക് ഏതാണ്?",
    "options": [
      { "text": "x position", "isCorrect": false },
      { "text": "y position", "isCorrect": false },
      { "text": "direction", "isCorrect": true },
      { "text": "current minute", "isCorrect": false }
    ]
  },
  {
    "question": "നിങ്ങൾ `ask \"What time is the alarm?\" and wait` ബ്ലോക്ക് ഉപയോഗിക്കുമ്പോൾ, ഉപയോക്താവ് ഇൻപുട്ട് നൽകാതെ സ്ക്രിപ്റ്റ് എന്ത് ചെയ്യും?",
    "options": [
      { "text": "അടുത്ത ബ്ലോക്കിലേക്ക് പോകും.", "isCorrect": false },
      { "text": "അലാറം സ്വയമേവ സജ്ജമാക്കും.", "isCorrect": false },
      { "text": "ഉപയോക്താവ് ഇൻപുട്ട് നൽകുന്നത് വരെ സ്ക്രിപ്റ്റ് നിർത്തും.", "isCorrect": true },
      { "text": "ഒരു പിശക് സന്ദേശം നൽകും.", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു സ്‌പ്രൈറ്റ് മറ്റേതെങ്കിലും സ്‌പ്രൈറ്റിനെയോ മൗസ് പോയിൻ്ററിനെയോ സ്പർശിക്കുന്നുണ്ടോയെന്ന് പരിശോധിക്കാൻ ഉപയോഗിക്കുന്ന ബ്ലോക്ക് ഏത് വിഭാഗത്തിൽ ഉൾപ്പെടുന്നു?",
    "options": [
      { "text": "Looks", "isCorrect": false },
      { "text": "Sensing", "isCorrect": true },
      { "text": "Operators", "isCorrect": false },
      { "text": "Data", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു കൂട്ടം കോഡ് ആവർത്തിച്ച് പ്രവർത്തിപ്പിക്കാൻ ഉപയോഗിക്കുന്ന `repeat 10` എന്ന ബ്ലോക്ക് പ്രോഗ്രാമിംഗിലെ ഏത് ആശയമാണ്?",
    "options": [
      { "text": "കൺട്രോൾ", "isCorrect": true },
      { "text": "സെൻസിംഗ്", "isCorrect": false },
      { "text": "ഓപ്പറേറ്റർ", "isCorrect": false },
      { "text": "ലൂക്ക്സ്", "isCorrect": false }
    ]
  },
  {
    "question": "ക്ലോക്ക് പ്രോജക്റ്റിൽ, മണിക്കൂർ, മിനിറ്റ്, സെക്കൻഡ് എന്നിവയുടെ മൂല്യങ്ങൾ സംഭരിക്കാൻ ഉപയോഗിക്കുന്നത് എന്താണ്?",
    "options": [
      { "text": "ലിസ്റ്റുകൾ (Lists)", "isCorrect": false },
      { "text": "വേരിയബിളുകൾ (Variables)", "isCorrect": true },
      { "text": "ബ്രോഡ്കാസ്റ്റുകൾ (Broadcasts)", "isCorrect": false },
      { "text": "കസ്റ്റം ബ്ലോക്കുകൾ (Custom Blocks)", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു സ്‌പ്രൈറ്റ് കറങ്ങാൻ, ഏത് ബ്ലോക്കാണ് ദിശ മാറ്റാൻ ഉപയോഗിക്കുന്നത്?",
    "options": [
      { "text": "move 10 steps", "isCorrect": false },
      { "text": "go to x: () y: ()", "isCorrect": false },
      { "text": "turn () degrees", "isCorrect": true },
      { "text": "set size to () %", "isCorrect": false }
    ]
  },
  {
    "question": "പൈത്തണിൽ, `a = 10` എന്നും `b = 20` എന്നും നിർവചിച്ച ശേഷം `a = b` എന്ന് നൽകിയാൽ, `a` യുടെ മൂല്യം എത്രയായിരിക്കും?",
    "options": [
      { "text": "10", "isCorrect": false },
      { "text": "20", "isCorrect": true },
      { "text": "30", "isCorrect": false },
      { "text": "0", "isCorrect": false }
    ]
  },
  {
    "question": "പ്രോഗ്രാമിംഗിലെ 'സിൻ്റാക്സ്' (Syntax) എന്നാൽ എന്ത്?",
    "options": [
      { "text": "പ്രോഗ്രാം പ്രവർത്തിപ്പിക്കുന്ന പ്രക്രിയ.", "isCorrect": false },
      { "text": "ഒരു ഭാഷയിലെ വ്യാകരണ നിയമങ്ങൾ പോലെ, കോഡിൻ്റെ ശരിയായ ഘടന.", "isCorrect": true },
      { "text": "ഒരു പ്രോഗ്രാമിലെ വേരിയബിളുകളുടെ എണ്ണം.", "isCorrect": false },
      { "text": "സോഫ്റ്റ്‌വെയർ വികസിപ്പിക്കുന്നതിനുള്ള സമയം.", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു സ്‌പ്രൈറ്റിൻ്റെ ദിശ (Direction) എത്രയാണെന്ന് കാണിക്കുന്ന ബ്ലോക്ക് ഏതാണ്?",
    "options": [
      { "text": "x position", "isCorrect": false },
      { "text": "y position", "isCorrect": false },
      { "text": "direction", "isCorrect": true },
      { "text": "current minute", "isCorrect": false }
    ]
  },
  {
    "question": "അലാറം ക്ലോക്കിലെ `Alarm Hour` എന്ന വേരിയബിളിൻ്റെ മൂല്യം എന്തിനാണ് ഉപയോഗിക്കുന്നത്?",
    "options": [
      { "text": "നിലവിലെ സമയം കാണിക്കാൻ.", "isCorrect": false },
      { "text": "അലാറം മുഴങ്ങേണ്ട മണിക്കൂർ സംഭരിക്കാൻ.", "isCorrect": true },
      { "text": "ക്ലോക്ക് സൂചിയുടെ ദിശ മാറ്റാൻ.", "isCorrect": false },
      { "text": "സ്‌പ്രൈറ്റിൻ്റെ വലിപ്പം മാറ്റാൻ.", "isCorrect": false }
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
