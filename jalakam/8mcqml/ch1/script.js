document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [

    {
      "question": "ക്രിത ഏത് തരം സോഫ്റ്റ്‌വെയറായാണ് വിവരിക്കുന്നത്?",
      "options": [
        { "text": "കുത്തക വേഡ് പ്രോസസ്സിംഗ് സോഫ്റ്റ്‌വെയർ", "isCorrect": false },
        { "text": "ഡിജിറ്റൽ ഡ്രോയിംഗിനും പെയിൻ്റിംഗിനുമായി ഉപയോഗിക്കുന്ന സൗജന്യ സോഫ്റ്റ്‌വെയർ", "isCorrect": true },
        { "text": "ഓപ്പൺ സോഴ്‌സ് 3D മോഡലിംഗ് സോഫ്റ്റ്‌വെയർ", "isCorrect": false },
        { "text": "പണം നൽകി ഉപയോഗിക്കേണ്ട ഇമേജ് മാനിപ്പുലേഷൻ ആപ്ലിക്കേഷൻ", "isCorrect": false }
      ]
    },
    {
      "question": "ക്രിത താഴെ പറയുന്ന ഓപ്പറേറ്റിംഗ് സിസ്റ്റങ്ങളിൽ ഏതിലാണ് ഉപയോഗിക്കാൻ കഴിയുന്നത്?",
      "options": [
        { "text": "വിൻഡോസ്, മാക്ഒഎസ് എന്നിവയിൽ മാത്രം", "isCorrect": false },
        { "text": "ഗ്നു/ലിനക്സിൽ മാത്രം", "isCorrect": false },
        { "text": "ഗ്നു/ലിനക്സ്, വിൻഡോസ്, മാക്ഒഎസ്", "isCorrect": true },
        { "text": "ആൻഡ്രോയിഡ് മൊബൈൽ ഉപകരണങ്ങളിൽ മാത്രം", "isCorrect": false }
      ]
    },
    {
      "question": "ക്രിതയുടെ പ്രത്യേക സവിശേഷതകളിൽ ഒന്നായി എടുത്തുപറയുന്നത് ഏതാണ്?",
      "options": [
        { "text": "വെക്റ്റർ ഗ്രാഫിക്സ് കൺവേർഷൻ ടൂളുകൾ", "isCorrect": false },
        { "text": "ബിൽറ്റ്-ഇൻ ഫോട്ടോ റീടച്ചിംഗ് ഫിൽട്ടറുകൾ", "isCorrect": false },
        { "text": "വളരെ ഉപയോഗപ്രദമായ ബ്രഷ് എഞ്ചിനും ലെയർ മാനേജ്മെൻ്റും", "isCorrect": true },
        { "text": "3D ആനിമേഷൻ സ്റ്റുഡിയോകളുമായുള്ള സംയോജനം", "isCorrect": false }
      ]
    },
    {
      "question": "ചുമരിൽ ചിത്രം വരയ്ക്കുന്നതിന് മുമ്പ് അത് തയ്യാറാക്കാൻ ക്രിത ഉപയോഗിക്കുന്നതിൻ്റെ പ്രാഥമിക നേട്ടം എന്താണ്?",
      "options": [
        { "text": "ഇത് ഓട്ടോമാറ്റിക്കായി പെയിൻ്റ് അളവ് കണക്കാക്കുന്നു.", "isCorrect": false },
        { "text": "ഇത് എല്ലാ മാനുവൽ ഡ്രോയിംഗിൻ്റെയും ആവശ്യകത ഇല്ലാതാക്കുന്നു.", "isCorrect": false },
        { "text": "ഡ്രോയിംഗ് പ്രക്രിയയിലും അതിനുശേഷവും ചിത്രം എഡിറ്റ് ചെയ്യാനും പരിഷ്ക്കരിക്കാനും ഇത് അനുവദിക്കുന്നു.", "isCorrect": true },
        { "text": "ഇത് ചിത്രത്തെ ഹൈ-റെസല്യൂഷൻ സെഗ്‌മെൻ്റുകളായി പ്രിൻ്റ് ചെയ്യുന്നു.", "isCorrect": false }
      ]
    },
    {
      "question": "ക്രിതയുടെ പ്രധാന വിൻഡോയിൽ ടൂൾബോക്‌സ് എവിടെയാണ് സ്ഥിതി ചെയ്യുന്നത്?",
      "options": [
        { "text": "മുകളിൽ മെനു ബാറിൽ", "isCorrect": false },
        { "text": "വലതുവശത്ത്, ഡോക്കറുകളുടെ ഭാഗമായി", "isCorrect": false },
        { "text": "കാൻവാസിൻ്റെ ഇടതുവശത്ത്", "isCorrect": true },
        { "text": "താഴെ, സ്റ്റാറ്റസ് ബാറിൽ", "isCorrect": false }
      ]
    },
    {
      "question": "ക്രിത ഇൻ്റർഫേസിലെ ഡോക്കറുകൾ ഏരിയയിൽ വലതുവശത്ത് സാധാരണയായി കാണപ്പെടുന്ന യൂട്ടിലിറ്റി പാനലുകൾ ഏതാണ്?",
      "options": [
        { "text": "ടൂൾബോക്‌സും മെനു ബാറും", "isCorrect": false },
        { "text": "കാൻവാസും സ്റ്റാറ്റസ് ബാറും", "isCorrect": false },
        { "text": "ഒരു കളർ സെലക്ടറും ലെയർ മാനേജറും", "isCorrect": true },
        { "text": "ബ്രഷ് ടൂളും ഫിൽ ടൂളും", "isCorrect": false }
      ]
    },
    {
      "question": "ചിത്രത്തിലെ ഓരോ ഘടകങ്ങളും പ്രത്യേക ലെയറുകളിൽ വരയ്ക്കുന്നതിൻ്റെ പ്രയോജനം എന്താണ്?",
      "options": [
        { "text": "ഇത് പ്രോജക്റ്റ് ഫയലിൻ്റെ വലുപ്പം കുറയ്ക്കുകയും ലോഡ് ചെയ്യാൻ എളുപ്പമാക്കുകയും ചെയ്യുന്നു.", "isCorrect": false },
        { "text": "വ്യക്തിഗത ഘടകങ്ങളിൽ ആവശ്യമായ മെച്ചപ്പെടുത്തലുകളും പരിഷ്ക്കരണങ്ങളും വരുത്താൻ എളുപ്പമാണ്.", "isCorrect": true },
        { "text": "ഇത് റാസ്റ്റർ ഇമേജിനെ വെക്റ്റർ ഇമേജായി മാറ്റുന്നു.", "isCorrect": false },
        { "text": "ഇത് ഒരു JPG ഫയലിലേക്കുള്ള അന്തിമ എക്‌സ്‌പോർട്ട് പ്രക്രിയ ലളിതമാക്കുന്നു.", "isCorrect": false }
      ]
    },
    {
      "question": "ഒരു പുതിയ ലെയർ സൃഷ്ടിക്കാൻ ലെയർ ഡോക്കറിൽ ഏത് ബട്ടണാണ് ക്ലിക്ക് ചെയ്യേണ്ടത്?",
      "options": [
        { "text": "ചവറ്റുകുട്ട ഐക്കൺ", "isCorrect": false },
        { "text": "ദൃശ്യപരത ഐക്കൺ (കണ്ണ്)", "isCorrect": false },
        { "text": "'+' ബട്ടൺ (പ്ലസ് ചിഹ്നം)", "isCorrect": true },
        { "text": "ഒപ്പാസിറ്റി സ്ലൈഡർ", "isCorrect": false }
      ]
    },
    {
      "question": "ലെയർ ഡോക്കറിൽ പുതിയതായി സൃഷ്ടിച്ച ലെയറിന് പേരുമാറ്റാൻ ഉപയോക്താവിനെ അനുവദിക്കുന്ന പ്രവർത്തനം ഏതാണ്?",
      "options": [
        { "text": "റൈറ്റ്-ക്ലിക്കുചെയ്ത് 'Rename Layer' തിരഞ്ഞെടുക്കുക.", "isCorrect": false },
        { "text": "ലെയർ ആക്ടീവ് ആയിരിക്കുമ്പോൾ 'R' കീ അമർത്തുക.", "isCorrect": false },
        { "text": "ലെയറിൻ്റെ നിലവിലെ പേരിൽ ഡബിൾ-ക്ലിക്കുചെയ്യുക.", "isCorrect": true },
        { "text": "കാൻവാസിൽ ടെക്സ്റ്റ് ടൂൾ ഉപയോഗിക്കുക.", "isCorrect": false }
      ]
    },
    {
      "question": "ക്രിതയിൽ വരകളും നിറങ്ങളും ഫ്രീഹാൻഡ് ആയി വരയ്ക്കാൻ ഉപയോഗിക്കുന്ന പ്രാഥമിക ഉപകരണം ഏതാണ്?",
      "options": [
        { "text": "ഫിൽ ടൂൾ (F)", "isCorrect": false },
        { "text": "ബ്രഷ് ടൂൾ (B)", "isCorrect": true },
        { "text": "ട്രാൻസ്ഫോം ടൂൾ (Ctrl+T)", "isCorrect": false },
        { "text": "ഗ്രേഡിയന്റ് ടൂൾ", "isCorrect": false }
      ]
    },
    {
      "question": "പ്രാരംഭ ഒബ്‌ജക്റ്റ് നിർമ്മാണത്തിനായി ലളിതമായ വൃത്താകൃതിയിലുള്ളതും അണ്ഡാകൃതിയിലുള്ളതുമായ രൂപങ്ങൾ സൃഷ്ടിക്കാൻ ഉപയോഗിക്കുന്ന ഉപകരണം ഏതാണ്?",
      "options": [
        { "text": "ലൈൻ ടൂൾ", "isCorrect": false },
        { "text": "ബെസിയർ കർവ് ടൂൾ", "isCorrect": false },
        { "text": "എലിപ്‌സ് ടൂൾ", "isCorrect": true },
        { "text": "പോളി ലൈൻ ടൂൾ", "isCorrect": false }
      ]
    },
    {
      "question": "എലിപ്‌സ് ടൂൾ ഉപയോഗിക്കുമ്പോൾ ഒരു **പൂർണ്ണ വൃത്തം** സൃഷ്ടിക്കാൻ, രൂപം വരയ്ക്കുമ്പോൾ ഏത് കീ ആണ് അമർത്തിപ്പിടിക്കേണ്ടത്?",
      "options": [
        { "text": "Alt കീ", "isCorrect": false },
        { "text": "Shift കീ", "isCorrect": true },
        { "text": "Ctrl കീ", "isCorrect": false },
        { "text": "Tab കീ", "isCorrect": false }
      ]
    },
    {
      "question": "തിരഞ്ഞെടുത്ത ലെയറിൻ്റെയോ ഘടകത്തിൻ്റെയോ വലുപ്പവും വളവും ചെറുതായി കറക്കാനോ മാറ്റാനോ ഉപയോഗിക്കുന്ന ഉപകരണം ഏതാണ്?",
      "options": [
        { "text": "ട്രാൻസ്ഫോം എ ലെയർ ഓർ എ സെലക്ഷൻ (Transform a layer or a selection) ടൂൾ (Ctrl+T)", "isCorrect": true },
        { "text": "മൂവ് ടൂൾ (M)", "isCorrect": false },
        { "text": "ബ്രഷ് ടൂൾ (B)", "isCorrect": false },
        { "text": "ക്രോപ്പ് ടൂൾ", "isCorrect": false }
      ]
    },
    {
      "question": "ബെസിയർ കർവ് ടൂൾ ഉപയോഗിച്ച് ഒരു ക്ലോസ്ഡ് രൂപമല്ലാത്ത വര വരയ്ക്കുമ്പോൾ, നിങ്ങൾ എങ്ങനെയാണ് വര അവസാനിപ്പിക്കുന്നത്?",
      "options": [
        { "text": "Enter കീ അമർത്തുന്നു", "isCorrect": false },
        { "text": "ഓപ്ഷൻ ബാറിലെ 'Complete' ബട്ടൺ ക്ലിക്കുചെയ്യുന്നു", "isCorrect": false },
        { "text": "ഡബിൾ-ക്ലിക്കുചെയ്യുന്നു", "isCorrect": true },
        { "text": "മൂവ് ടൂളിലേക്ക് (M) മാറുന്നു", "isCorrect": false }
      ]
    },
    {
      "question": "അനാവശ്യമായ വരകൾ നീക്കം ചെയ്യാനും ഡ്രോയിംഗിൻ്റെ അരികുകൾ മെച്ചപ്പെടുത്താനും ഉപയോഗിക്കുന്ന ഉപകരണം ഏതാണ്?",
      "options": [
        { "text": "ഫിൽ ടൂൾ (F)", "isCorrect": false },
        { "text": "ട്രാൻസ്ഫോം ടൂൾ (Ctrl+T)", "isCorrect": false },
        { "text": "ഇറേസർ ടൂൾ (E)", "isCorrect": true },
        { "text": "ബ്രഷ് ടൂൾ (B)", "isCorrect": false }
      ]
    },
    {
      "question": "ഒരൊറ്റ ക്ലിക്കിലൂടെ ഒരു ക്ലോസ്ഡ് രൂപത്തിന് ഒരൊറ്റ, കട്ടിയുള്ള നിറം നൽകാൻ ഏറ്റവും മികച്ച ഉപകരണം ഏതാണ്?",
      "options": [
        { "text": "ടെക്സ്റ്റ് ടൂൾ", "isCorrect": false },
        { "text": "ഫിൽ ടൂൾ (F)", "isCorrect": true },
        { "text": "ലൈൻ ടൂൾ", "isCorrect": false },
        { "text": "ഗ്രേഡിയന്റ് ടൂൾ", "isCorrect": false }
      ]
    },
    {
      "question": "രണ്ട് നിറങ്ങൾ സുഗമമായി സംയോജിപ്പിച്ച് ഒരു ഡിസൈൻ സൃഷ്ടിക്കാൻ ഉപയോഗിക്കാവുന്ന ഉപകരണം ഏതാണ്?",
      "options": [
        { "text": "ഫിൽ ടൂൾ (F)", "isCorrect": false },
        { "text": "ബ്രഷ് ടൂൾ (B)", "isCorrect": false },
        { "text": "ഗ്രേഡിയന്റ് ടൂൾ", "isCorrect": true },
        { "text": "ബെസിയർ കർവ് ടൂൾ", "isCorrect": false }
      ]
    },
    {
      "question": "ബ്രഷ് ടൂൾ ഉപയോഗിച്ച് വിശദമായ ടെക്സ്ചറുകൾ പ്രയോഗിക്കാൻ പ്രാഥമികമായി ക്രമീകരിക്കേണ്ട രണ്ട് ബ്രഷ് സജ്ജീകരണങ്ങൾ ഏതാണ്?",
      "options": [
        { "text": "ലെയർ ഒപ്പാസിറ്റിയും ബ്ലെൻഡിംഗ് മോഡും", "isCorrect": false },
        { "text": "ബ്രഷിൻ്റെ വലുപ്പവും നിറവും", "isCorrect": true },
        { "text": "കാൻവാസ് റൊട്ടേഷനും സൂം ലെവലും", "isCorrect": false },
        { "text": "സെലക്ഷൻ ടൂളും ഫിൽ ടൂളും", "isCorrect": false }
      ]
    },
    {
      "question": "വരച്ച ഒരു ഘടകം അതിൻ്റെ ഒറ്റപ്പെട്ട ലെയറിൽ തിരഞ്ഞെടുത്ത് കഴിഞ്ഞാൽ, അതിനെ ഒരു പ്രീസെറ്റ് സ്റ്റാമ്പ് ബ്രഷാക്കി മാറ്റുന്നതിനുള്ള നിർണായകമായ ആദ്യപടി എന്താണ്?",
      "options": [
        { "text": "ഘടകത്തിൽ റൈറ്റ്-ക്ലിക്കുചെയ്ത് 'Save as Preset' തിരഞ്ഞെടുക്കുക.", "isCorrect": false },
        { "text": "കാൻവാസിന് മുകളിലുള്ള 'Edit Brush Settings → Predefined' ടാബ് തിരഞ്ഞെടുക്കുക.", "isCorrect": true },
        { "text": "ലെയറിനെ ഒരു PNG ഫയലായി എക്‌സ്‌പോർട്ട് ചെയ്യുക.", "isCorrect": false },
        { "text": "മൂവ് ടൂൾ ഉപയോഗിച്ച് ഘടകത്തെ ബ്രഷ് പ്രീസെറ്റ് ഡോക്കറിലേക്ക് വലിച്ചിടുക.", "isCorrect": false }
      ]
    },
    {
      "question": "കാൻവാസിൽ ഒരു പ്രീസെറ്റ് സ്റ്റാമ്പ് ബ്രഷ് ക്ലിക്ക് ചെയ്ത് വലിക്കുമ്പോൾ എന്ത് സംഭവിക്കുന്നു?",
      "options": [
        { "text": "യഥാർത്ഥ ലെയർ നീക്കപ്പെടുന്നു.", "isCorrect": false },
        { "text": "ലെയർ പശ്ചാത്തലവുമായി ലയിപ്പിക്കുന്നു.", "isCorrect": false },
        { "text": "സ്റ്റാമ്പ് ചെയ്ത ചിത്രത്തിൻ്റെ പകർപ്പുകൾ (Clones) സൃഷ്ടിക്കപ്പെടുന്നു.", "isCorrect": true },
        { "text": "ചിത്രം ഒരു വെക്റ്റർ പാത്തായി മാറുന്നു.", "isCorrect": false }
      ]
    },
    {
      "question": "ബ്രഷ് ഉപയോഗിക്കുമ്പോൾ കാൻവാസിൽ റൈറ്റ്-ക്ലിക്ക് ചെയ്താൽ നിങ്ങൾക്ക് എന്ത് ചെയ്യാൻ കഴിയും?",
      "options": [
        { "text": "ഫയൽ സേവ് ഡയലോഗ് തുറക്കുക.", "isCorrect": false },
        { "text": "ലെയർ ഡോക്കർ തുറക്കുക.", "isCorrect": false },
        { "text": "ആംഗിൾ, സൈസ് തുടങ്ങിയ പ്രോപ്പർട്ടികൾ ക്രമീകരിക്കാൻ പോപ്പ്-അപ്പ് പാലറ്റ് തുറക്കുക.", "isCorrect": true },
        { "text": "അവസാന പ്രവർത്തനം പഴയപടിയാക്കുക.", "isCorrect": false }
      ]
    },
    {
      "question": "എഡിറ്റിംഗിനായി എല്ലാ ലെയറുകളും പ്രോജക്റ്റ് ഡാറ്റയും ക്രിതയിൽ സംരക്ഷിക്കുന്ന ഫയൽ ഫോർമാറ്റ് ഏതാണ്?",
      "options": [
        { "text": "Joint Photographic Experts Group (.jpg)", "isCorrect": false },
        { "text": "Portable Network Graphics (.png)", "isCorrect": false },
        { "text": "Photoshop Document (.psd)", "isCorrect": false },
        { "text": "Krita Project File (.kra)", "isCorrect": true }
      ]
    },
    {
      "question": "പൂർത്തിയാക്കിയ ക്രിത ആർട്ട് വർക്ക് എക്സ്പോർട്ട് ചെയ്യുന്നതിനായി പറഞ്ഞിട്ടുള്ള സാധാരണ ഇമേജ് ഫയൽ ഫോർമാറ്റുകളിൽ **ഇല്ലാത്തത്** ഏതാണ്?",
      "options": [
        { "text": "JPG", "isCorrect": false },
        { "text": "PNG", "isCorrect": false },
        { "text": "Web", "isCorrect": false },
        { "text": "PDF", "isCorrect": true }
      ]
    },
    {
      "question": "ബ്രഷ് ടൂളിന് പകരമായി ലൈൻ ടൂളും പോളി ലൈൻ ടൂളും സാധാരണയായി ഉപയോഗിക്കുന്നത് ഏത് തരം ഘടകങ്ങൾ വരയ്ക്കുന്നതിനാണ്?",
      "options": [
        { "text": "ഫ്രീഹാൻഡ്, എക്സ്പ്രസ്സീവ് വളവുകൾ മാത്രം", "isCorrect": false },
        { "text": "നിറങ്ങളുടെ സുഗമമായ സംയോജനം", "isCorrect": false },
        { "text": "നേർരേഖകളും സെഗ്‌മെൻ്റുകളുള്ള രൂപങ്ങളും", "isCorrect": true },
        { "text": "ലളിതമായ വൃത്താകൃതിയിലുള്ള രൂപങ്ങൾ", "isCorrect": false }
      ]
    },
    {
      "question": "നിങ്ങൾ ജോലി ചെയ്യുമ്പോൾ ആർട്ട്‌വർക്കിൽ സൂം ഇൻ ചെയ്യാനും സൂം ഔട്ട് ചെയ്യാനും ഉപയോഗിക്കുന്ന കാൻവാസ് പ്രവർത്തനം ഏതാണ്?",
      "options": [
        { "text": "Ctrl കീ അമർത്തി ക്ലിക്കുചെയ്യുന്നു", "isCorrect": false },
        { "text": "മൗസ് വീൽ സ്ക്രോൾ ചെയ്യുന്നു", "isCorrect": true },
        { "text": "മൂവ് ടൂൾ (M) ഉപയോഗിക്കുന്നു", "isCorrect": false },
        { "text": "Ctrl+Spacebar എന്ന കുറുക്കുവഴി ഉപയോഗിക്കുന്നു", "isCorrect": false }
      ]
    },
    {
      "question": "ചിത്രത്തിലെ ക്രമരഹിതമായ ആകൃതിയിലുള്ള ഭാഗങ്ങൾ തിരഞ്ഞെടുക്കാൻ പ്രാഥമികമായി ഉപയോഗിക്കുന്ന ടൂൾബോക്സിലെ ഉപകരണം ഏതാണ്?",
      "options": [
        { "text": "എലിപ്‌സ് ടൂൾ", "isCorrect": false },
        { "text": "ഫ്രീഹാൻഡ് സെലക്ഷൻ ടൂൾ", "isCorrect": true },
        { "text": "ഫിൽ ടൂൾ (F)", "isCorrect": false },
        { "text": "ലൈൻ ടൂൾ", "isCorrect": false }
      ]
    },
    {
      "question": "ലെയർ ഡോക്കറിലെ **ലെയർ വിസിബിലിറ്റി** ഐക്കൺ (ഒരു കണ്ണിൻ്റെ ചിഹ്നം) എന്തിനെയാണ് നിയന്ത്രിക്കുന്നത്?",
      "options": [
        { "text": "ലെയർ സ്റ്റാക്കിലെ അതിൻ്റെ സ്ഥാനം", "isCorrect": false },
        { "text": "ലെയർ എഡിറ്റ് ചെയ്യാൻ കഴിയുമോ എന്നത്", "isCorrect": false },
        { "text": "ലെയറിലെ ഉള്ളടക്കങ്ങൾ കാൻവാസിൽ പ്രദർശിപ്പിക്കുന്നുണ്ടോ ഇല്ലയോ എന്നത്", "isCorrect": true },
        { "text": "അതിൻ്റെ സുതാര്യത (opacity) നില", "isCorrect": false }
      ]
    },
    {
      "question": "ലെയർ സ്റ്റാക്കിൽ സാധാരണയായി **ഏറ്റവും താഴെ** സ്ഥാപിക്കേണ്ട ലെയർ ഏതാണ്?",
      "options": [
        { "text": "നിലവിൽ വരച്ചുകൊണ്ടിരിക്കുന്ന ലെയർ", "isCorrect": false },
        { "text": "ഏറ്റവും വിശദമായ ഘടകങ്ങൾ അടങ്ങിയ ലെയർ", "isCorrect": false },
        { "text": "പശ്ചാത്തലമായി (BG) ഉദ്ദേശിക്കുന്ന ലെയർ", "isCorrect": true },
        { "text": "ഏറ്റവും കുറഞ്ഞ സുതാര്യതയുള്ള ലെയർ", "isCorrect": false }
      ]
    },
    {
      "question": "ബന്ധപ്പെട്ട ഒന്നിലധികം ലെയറുകൾ (ഒരു പക്ഷിയുടെ എല്ലാ ഭാഗങ്ങളും പോലെ) ഒരൊറ്റ യൂണിറ്റായി നിയന്ത്രിക്കാൻ ഡിസൈനറെ അനുവദിക്കുന്ന സവിശേഷത എന്താണ്?",
      "options": [
        { "text": "ലെയർ ഒപ്പാസിറ്റി ക്രമീകരണം", "isCorrect": false },
        { "text": "ലെയർ ഗ്രൂപ്പ്", "isCorrect": true },
        { "text": "ബ്ലെൻഡിംഗ് മോഡ്", "isCorrect": false },
        { "text": "കാൻവാസ് റൊട്ടേഷൻ", "isCorrect": false }
      ]
    },
    {
      "question": "ക്രിതയിലെ **മൂവ് ടൂളിൻ്റെ** കുറുക്കുവഴി (shortcut) എന്താണ്?",
      "options": [
        { "text": "Ctrl+T", "isCorrect": false },
        { "text": "B", "isCorrect": false },
        { "text": "M", "isCorrect": true },
        { "text": "E", "isCorrect": false }
      ]
    },
    {
      "question": "മിനുസമാർന്ന വളവുകളും മൂർച്ചയുള്ള, കൃത്യമായ പോയിൻ്റുകളും ആവശ്യമുള്ള ഔട്ട്ലൈനുകൾക്ക് ഏറ്റവും അനുയോജ്യമായ ഉപകരണം ഏതാണ്?",
      "options": [
        { "text": "ലൈൻ ടൂൾ", "isCorrect": false },
        { "text": "എലിപ്‌സ് ടൂൾ", "isCorrect": false },
        { "text": "ബെസിയർ കർവ് ടൂൾ", "isCorrect": true },
        { "text": "ബ്രഷ് ടൂൾ (B)", "isCorrect": false }
      ]
    },
    {
      "question": "ക്രിതയിൽ ഒരു പുതിയ ഫയൽ ആരംഭിക്കുന്നതിനുള്ള 'New' കമാൻഡ് അടങ്ങിയിട്ടുള്ള മെനു ഏതാണ്?",
      "options": [
        { "text": "Edit", "isCorrect": false },
        { "text": "Image", "isCorrect": false },
        { "text": "Settings", "isCorrect": false },
        { "text": "File", "isCorrect": true }
      ]
    },
    {
      "question": "പ്രാരംഭ പോയിൻ്റുകൾ സ്ഥാപിച്ച ശേഷം ബെസിയർ കർവ് ടൂൾ ഒരു ഉപയോക്താവിന് എന്ത് ക്രമീകരിക്കാൻ അനുവദിക്കുന്നു?",
      "options": [
        { "text": "കാൻവാസിൻ്റെ വലുപ്പം", "isCorrect": false },
        { "text": "ലെയറിൻ്റെ സുതാര്യത", "isCorrect": false },
        { "text": "ലൈൻ സെഗ്‌മെൻ്റുകളുടെ ദിശയും വളവും", "isCorrect": true },
        { "text": "ഫയലിൻ്റെ എക്‌സ്‌പോർട്ട് ഫോർമാറ്റ്", "isCorrect": false }
      ]
    },
    {
      "question": "ജോലി ചെയ്യുമ്പോൾ കാൻവാസിൻ്റെ വേഗത്തിലുള്ള കറക്കവും (rotation) പാൻ കാഴ്ചയും (pan view) സാധ്യമാക്കാൻ സാധാരണയായി അമർത്തുന്ന കീ ഏതാണ്?",
      "options": [
        { "text": "Tab കീ", "isCorrect": false },
        { "text": "Shift കീ", "isCorrect": false },
        { "text": "Spacebar", "isCorrect": true },
        { "text": "Enter കീ", "isCorrect": false }
      ]
    },
    {
      "question": "ഫിൽ ടൂൾ (F) ഉപയോഗിക്കുമ്പോൾ, നിറം നിറയ്ക്കുന്ന പ്രദേശം (area) നിർണ്ണയിക്കുന്നത് എന്താണ്?",
      "options": [
        { "text": "തിരഞ്ഞെടുത്ത ബ്രഷ് ടൂളിൻ്റെ വലുപ്പം.", "isCorrect": false },
        { "text": "ക്ലിക്കുചെയ്ത സ്ഥലത്തോട് ഏറ്റവും അടുത്തുള്ള ജ്യാമിതീയ രൂപം.", "isCorrect": false },
        { "text": "ഏറ്റവും അടുത്തുള്ള ക്ലോസ്ഡ് രൂപത്തിൻ്റെ അതിർത്തി അല്ലെങ്കിൽ തിരഞ്ഞെടുത്ത പ്രദേശം.", "isCorrect": true },
        { "text": "മുഴുവൻ ലെയർ ഉള്ളടക്കങ്ങളും.", "isCorrect": false }
      ]
    },
    {
      "question": "ലെയർ ഡോക്കറിലെ 'ഒപ്പാസിറ്റി' (Opacity) സ്ലൈഡറിൻ്റെ ഉദ്ദേശ്യം എന്താണ്?",
      "options": [
        { "text": "ലെയർ മറയ്ക്കാനോ കാണിക്കാനോ.", "isCorrect": false },
        { "text": "ലെയർ സ്റ്റാക്കിലെ അതിൻ്റെ സ്ഥാനം മാറ്റാൻ.", "isCorrect": false },
        { "text": "ലെയറിൻ്റെ ട്രാൻസ്പരൻസി (സുതാര്യത) ലെവൽ നിയന്ത്രിക്കാൻ.", "isCorrect": true },
        { "text": "ലെയറിന് പേര് മാറ്റാൻ.", "isCorrect": false }
      ]
    },
    {
      "question": "മ്യൂറൽ ഡ്രോയിംഗും പെയിൻ്റിംഗും ആരംഭിക്കുന്നതിന് മുമ്പ് ചുമരിൽ ചെയ്യേണ്ട പ്രധാന തയ്യാറെടുപ്പ് ഘട്ടം എന്താണ്?",
      "options": [
        { "text": "നിഴലുകൾ തടയാൻ ലൈറ്റിംഗ് റിഗ് സ്ഥാപിക്കുക.", "isCorrect": false },
        { "text": "പ്രദേശത്തിന് ചുറ്റും ഒരു സംരക്ഷിത ഫ്രെയിം സ്ഥാപിക്കുക.", "isCorrect": false },
        { "text": "ചുമര് വൃത്തിയാക്കി പ്രൈമർ പുരട്ടുക.", "isCorrect": true },
        { "text": "ടേപ്പ് ഉപയോഗിച്ച് ഒരു സംരക്ഷിത ബോർഡർ വരയ്ക്കുക.", "isCorrect": false }
      ]
    },
    {
      "question": "കമ്പ്യൂട്ടറിൽ നിന്നുള്ള ഡിജിറ്റൽ ചിത്രം ചുമരിലേക്ക് മാറ്റാൻ വിവരിച്ച രണ്ട് രീതികളിൽ ആദ്യത്തേത് ഏതാണ്?",
      "options": [
        { "text": "പ്രിൻ്റൗട്ടിലും ചുമരിലും അനുപാത ഗ്രിഡ് ഉപയോഗിക്കുക.", "isCorrect": false },
        { "text": "ചിത്രം ട്രേസ് ചെയ്യാൻ ക്ലാസ് റൂം പ്രൊജക്ടർ ഉപയോഗിക്കുക.", "isCorrect": true },
        { "text": "ചുമരിലേക്ക് ഫ്രീഹാൻഡ് ആയി ചിത്രം വരയ്ക്കുക.", "isCorrect": false },
        { "text": "ഡിജിറ്റൽ ഫയലിൽ നിന്ന് മുറിച്ചെടുത്ത സ്റ്റെൻസിൽ ഉപയോഗിക്കുക.", "isCorrect": false }
      ]
    },
    {
      "question": "ഡിജിറ്റൽ ചിത്രം ചുമരിലേക്ക് മാറ്റാൻ വിവരിച്ച രണ്ടാമത്തെ രീതി ഏതാണ്?",
      "options": [
        { "text": "ഔട്ട്ലൈൻ നേരിട്ട് പകർത്താൻ കാർബൺ പേപ്പർ ഉപയോഗിക്കുക.", "isCorrect": false },
        { "text": "ചുമരിലെ ഗ്രിഡിലേക്ക് ചിത്രം മാറ്റാൻ പ്രിൻ്റൗട്ടിൽ അടയാളപ്പെടുത്തിയ അനുപാത ഗ്രിഡ് ഉപയോഗിക്കുക.", "isCorrect": true },
        { "text": "ചിത്രം വലിയ ഫോർമാറ്റ് സെഗ്‌മെൻ്റുകളായി പ്രിൻ്റ് ചെയ്ത് ഒട്ടിക്കുക.", "isCorrect": false },
        { "text": "ഓർമ്മയിൽ നിന്ന് ഫ്രീഹാൻഡ് ആയി വരയ്ക്കുക.", "isCorrect": false }
      ]
    },
    {
      "question": "പ്രൊജക്ടർ രീതി ഉപയോഗിക്കുമ്പോൾ, പ്രൊജക്ഷൻ ചുമരിൽ ആവശ്യമുള്ള വലുപ്പത്തിലാണെന്ന് ഉറപ്പാക്കിയ ശേഷം ഉടൻ എടുക്കുന്ന നടപടി എന്താണ്?",
      "options": [
        { "text": "റോളറുകൾ ഉപയോഗിച്ച് പ്രധാന നിറങ്ങൾ പ്രയോഗിക്കുക.", "isCorrect": false },
        { "text": "നിറങ്ങൾ പരിശോധിക്കാൻ ഒരു പ്രിൻ്റൗട്ട് എടുക്കുക.", "isCorrect": false },
        { "text": "പെൻസിൽ ഉപയോഗിച്ച് ചിത്രത്തിൻ്റെ ഓരോ ഭാഗവും ചുമരിലേക്ക് ട്രേസ് ചെയ്യുക.", "isCorrect": true },
        { "text": "ബൾബ് ലാഭിക്കാൻ പ്രൊജക്ടർ ഓഫ് ചെയ്യുക.", "isCorrect": false }
      ]
    },
    {
      "question": "നിങ്ങൾക്ക് ഒരു **പൂർണ്ണ വൃത്താകൃതിയിലുള്ള** ചന്ദ്രനെ വരയ്ക്കണം. എലിപ്‌സ് ടൂൾ തിരഞ്ഞെടുത്ത ശേഷം, രൂപം വരയ്ക്കുമ്പോൾ അത് ഒരു പൂർണ്ണ വൃത്തമാണെന്ന് ഉറപ്പാക്കുന്ന ഭൗതിക പ്രവർത്തനം എന്താണ്?",
      "options": [
        { "text": "രൂപം വരയ്ക്കുമ്പോൾ Shift കീ അമർത്തിപ്പിടിക്കുക.", "isCorrect": true },
        { "text": "ഒരു അടിസ്ഥാന ഓവൽ വരച്ച ശേഷം കാൻവാസിൽ ഡബിൾ-ക്ലിക്കുചെയ്യുക.", "isCorrect": false },
        { "text": "മൂവ് ടൂൾ (M) ഉപയോഗിച്ച് അതിനെ ഒരു പൂർണ്ണ വൃത്തത്തിലേക്ക് സ്നാപ്പ് ചെയ്യുക.", "isCorrect": false },
        { "text": "വൃത്താകൃതിയിലുള്ള ബ്രഷ് പ്രീസെറ്റ് തിരഞ്ഞെടുക്കുക.", "isCorrect": false }
      ]
    },
    {
      "question": "മുഴുവൻ നിറം നൽകിയ ഒരു പക്ഷി 'Bird Layer'-ലും, മരക്കൊമ്പ് 'Branch Layer'-ലും ആണ്. നിങ്ങൾക്ക് മരക്കൊമ്പിൻ്റെ നിറം മാത്രം മാറ്റണം. Fill Tool ഉപയോഗിച്ച് മരക്കൊമ്പിനെ മാത്രം ശരിയായി പരിഷ്കരിക്കുന്നതിന് ഏത് ലെയർ **ആക്ടീവ്** ആയിരിക്കണം?",
      "options": [
        { "text": "'Bird Layer'", "isCorrect": false },
        { "text": "'Bird Layer'-ന് മുകളിൽ സൃഷ്ടിച്ച പുതിയ സുതാര്യമായ ലെയർ.", "isCorrect": false },
        { "text": "'Branch Layer'", "isCorrect": true },
        { "text": "'Background' ലെയർ.", "isCorrect": false }
      ]
    },
    {
      "question": "വളഞ്ഞ ഒരു മരക്കൊമ്പിൻ്റെ ഫ്രീഹാൻഡ് സ്കെച്ച് നിങ്ങൾക്ക് വരയ്ക്കണം, അതിന് ടെക്സ്ചർ നൽകാനായി ധാരാളം ഓർഗാനിക് വളവുകളും വ്യത്യാസപ്പെടുന്ന ലൈൻ കനവും ആവശ്യമാണ്. ക്രിതയിൽ തിരഞ്ഞെടുക്കേണ്ട ഏറ്റവും ഉചിതമായ പ്രാഥമിക ഉപകരണം ഏതാണ്?",
      "options": [
        { "text": "ബെസിയർ കർവ് ടൂൾ (കൃത്യമായ വെക്റ്റർ ഔട്ട്ലൈനിനായി)", "isCorrect": false },
        { "text": "ലൈൻ ടൂൾ (നേർരേഖാ സെഗ്‌മെൻ്റുകൾക്കായി)", "isCorrect": false },
        { "text": "ബ്രഷ് ടൂൾ (B) (വിവിധതരം ഫ്രീഹാൻഡ് ഡ്രോയിംഗിനായി)", "isCorrect": true },
        { "text": "എലിപ്‌സ് ടൂൾ (ജ്യാമിതീയ രൂപങ്ങൾക്കായി)", "isCorrect": false }
      ]
    },
    {
      "question": "ഒരു വിദ്യാർത്ഥി ശരീരത്തിനായി ഒരു ഓവൽ വരച്ചു, പക്ഷേ മരക്കൊമ്പിൻ്റെ കോണുമായി യോജിപ്പിക്കാൻ അത് ചെറുതായി വലിച്ചുനീട്ടുകയും കറക്കുകയും വേണം. കൺട്രോൾ ഹാൻഡിലുകൾ ഉപയോഗിച്ച് അതിൻ്റെ രൂപവും ഓറിയൻ്റേഷനും കൈകാര്യം ചെയ്യാൻ ഉപയോഗിക്കുന്ന ഉപകരണം ഏതാണ്?",
      "options": [
        { "text": "മൂവ് ടൂൾ (M)", "isCorrect": false },
        { "text": "ബെസിയർ കർവ് ടൂൾ", "isCorrect": false },
        { "text": "ട്രാൻസ്ഫോം എ ലെയർ ഓർ എ സെലക്ഷൻ ടൂൾ (Ctrl+T)", "isCorrect": true },
        { "text": "ഇറേസർ ടൂൾ (E)", "isCorrect": false }
      ]
    },
    {
      "question": "നിങ്ങൾക്ക് പശ്ചാത്തലത്തിലെ ആകാശം അടിയിൽ കടും മഞ്ഞയിൽ നിന്ന് മുകളിൽ ഇളം ഓറഞ്ചിലേക്ക് സുഗമമായി മാറണം. ഈ തടസ്സമില്ലാത്ത വർണ്ണ സംയോജന പ്രഭാവം നേടാൻ ഏറ്റവും അനുയോജ്യമായ ഉപകരണം ഏതാണ്?",
      "options": [
        { "text": "ഫിൽ ടൂൾ (F)", "isCorrect": false },
        { "text": "വലിയ വലുപ്പമുള്ള ബ്രഷ് ടൂൾ (B)", "isCorrect": false },
        { "text": "ഗ്രേഡിയന്റ് ടൂൾ", "isCorrect": true },
        { "text": "ഇറേസർ ടൂൾ (E)", "isCorrect": false }
      ]
    },
    {
      "question": "ഒരു ഇലയുടെ സ്റ്റാമ്പ് ബ്രഷ് സൃഷ്ടിച്ച ശേഷം, പ്രധാന ബ്രഷ് എഡിറ്റർ തുറക്കാതെ തന്നെ അടുത്ത ഇല മറ്റൊരു കോണിൽ സ്റ്റാമ്പ് ചെയ്യാൻ നിങ്ങൾ ആഗ്രഹിക്കുന്നു. ആംഗിൾ പ്രോപ്പർട്ടി വേഗത്തിൽ എങ്ങനെ മാറ്റാം?",
      "options": [
        { "text": "സ്റ്റാമ്പ് ചെയ്യുമ്പോൾ Shift കീ അമർത്തിപ്പിടിക്കുന്നതിലൂടെ.", "isCorrect": false },
        { "text": "മൗസ് വീൽ സ്ക്രോൾ ചെയ്യുന്നതിലൂടെ.", "isCorrect": false },
        { "text": "പോപ്പ്-അപ്പ് പാലറ്റ് തുറന്ന് ആംഗിൾ ക്രമീകരിക്കാൻ റൈറ്റ്-ക്ലിക്കുചെയ്യുന്നതിലൂടെ.", "isCorrect": true },
        { "text": "ഫിൽ ടൂൾ (F) ഉപയോഗിക്കുന്നതിലൂടെ.", "isCorrect": false }
      ]
    },
    {
      "question": "നിങ്ങൾ ഡ്രോയിംഗ് പൂർത്തിയാക്കി, എന്നാൽ പിന്നീട് തുറക്കുമ്പോൾ എല്ലാ ലെയറുകളും സ്വതന്ത്രമായി എഡിറ്റ് ചെയ്യാൻ കഴിയുന്ന തരത്തിൽ ഫയൽ സേവ് ചെയ്യണം. നിങ്ങൾ ഏത് ഫയൽ ഫോർമാറ്റാണ് തിരഞ്ഞെടുക്കേണ്ടത്?",
      "options": [
        { "text": "PNG (.png)", "isCorrect": false },
        { "text": "JPEG (.jpg)", "isCorrect": false },
        { "text": "ക്രിത പ്രോജക്റ്റ് ഫയൽ (.kra)", "isCorrect": true },
        { "text": "വെക്റ്റർ ഗ്രാഫിക്സ് ഫയൽ (.svg)", "isCorrect": false }
      ]
    },
    {
      "question": "ഒരു വിദ്യാർത്ഥി പക്ഷിയുടെ കാലുകൾ വരയ്ക്കുകയാണ്, പക്ഷേ 'Branch' ലെയർ നിലവിൽ മറഞ്ഞിരിക്കുന്നു, ഇത് ശരിയായ വിന്യാസം തടയുന്നു. 'Branch' ലെയർ ദൃശ്യമാക്കാൻ ഏറ്റവും വേഗമേറിയ മാർഗ്ഗം എന്താണ്?",
      "options": [
        { "text": "'Branch' ലെയർ സ്റ്റാക്കിൻ്റെ മുകളിലേക്ക് നീക്കുക.", "isCorrect": false },
        { "text": "'Branch' ലെയറിൻ്റെ പേരിന് അടുത്തുള്ള ദൃശ്യപരത ഐക്കൺ (കണ്ണ്) ടോഗിൾ ചെയ്യുക.", "isCorrect": true },
        { "text": "'Legs' ലെയറിൻ്റെ സുതാര്യത 50% ആയി കുറയ്ക്കുക.", "isCorrect": false },
        { "text": "ലെയറിൽ റൈറ്റ്-ക്ലിക്കുചെയ്ത് 'Show All' തിരഞ്ഞെടുക്കുക.", "isCorrect": false }
      ]
    },
    {
      "question": "ബെസിയർ കർവ് ടൂൾ ഉപയോഗിച്ച് വരച്ച ഒരു വരയുടെ അറ്റത്ത് അലഞ്ഞുനടക്കുന്ന (stray) പിക്സലുകൾ ഉണ്ട്. വരയുടെ ആ ചെറിയ ഭാഗം സ്വമേധയാ നീക്കം ചെയ്യാൻ ഏറ്റവും നേരിട്ടുള്ള വഴി നൽകുന്ന ഉപകരണം ഏതാണ്?",
      "options": [
        { "text": "മൂവ് ടൂൾ (M)", "isCorrect": false },
        { "text": "ഇറേസർ ടൂൾ (E)", "isCorrect": true },
        { "text": "ഫിൽ ടൂൾ (F)", "isCorrect": false },
        { "text": "സെലക്ഷൻ ടൂൾ", "isCorrect": false }
      ]
    },
    {
      "question": "ഒരു പ്രത്യേക ബ്രഷ് സജ്ജീകരണം (വലിപ്പം, നിറം, ടെക്സ്ചർ) ഉപയോഗിച്ച് നിങ്ങൾക്ക് പക്ഷിയുടെ അന്തിമമായ, കട്ടിയുള്ള ഔട്ട്ലൈൻ നൽകണം. ഭാവിയിലെ ഉപയോഗത്തിനായി ഈ കസ്റ്റം ബ്രഷ് സജ്ജീകരണം സംരക്ഷിക്കാൻ അനുവദിക്കുന്ന സവിശേഷത എന്താണ്?",
      "options": [
        { "text": "ലെയർ ബ്ലെൻഡിംഗ് മോഡ്", "isCorrect": false },
        { "text": "ബ്രഷ് പ്രീസെറ്റ്", "isCorrect": true },
        { "text": "ലെയർ ഗ്രൂപ്പ്", "isCorrect": false },
        { "text": "ഡോക്യുമെൻ്റ് ടെംപ്ലേറ്റ്", "isCorrect": false }
      ]
    },
    {
      "question": "നിങ്ങൾ പക്ഷിയുടെ തലയ്ക്കായി ഒരു അടിസ്ഥാന ഓവൽ വരച്ചു, ഇപ്പോൾ കണ്ണിൻ്റെ വിശദാംശങ്ങൾ ചേർക്കാൻ കൂടുതൽ വലുതാക്കിയ കാഴ്ച (magnified view) കാണേണ്ടതുണ്ട്. കാൻവാസിൻ്റെ ആ പ്രത്യേക ഭാഗം സൂം ഇൻ ചെയ്യാൻ ഏറ്റവും വേഗമേറിയതും നേരിട്ടുള്ളതുമായ മാർഗ്ഗം എന്താണ്?",
      "options": [
        { "text": "ഒരു പുതിയ, വലിയ കാൻവാസ് തുറക്കാൻ Ctrl+N അമർത്തുക.", "isCorrect": false },
        { "text": "മൗസ് വീൽ കാൻവാസിൻ്റെ ദിശയിലേക്ക് സ്ക്രോൾ ചെയ്യുക.", "isCorrect": true },
        { "text": "ലെയറിൻ്റെ വലുപ്പം മാറ്റാൻ ട്രാൻസ്ഫോം ടൂൾ (Ctrl+T) ഉപയോഗിക്കുക.", "isCorrect": false },
        { "text": "ടൂൾബാറിലെ 'Reset View' ബട്ടൺ ക്ലിക്കുചെയ്യുക.", "isCorrect": false }
      ]
    },
    {
      "question": "ത്രികോണങ്ങളുടെ ഒരു ജ്യാമിതീയ പാറ്റേൺ വേഗത്തിലും കൃത്യതയിലും വരയ്ക്കാൻ, നിങ്ങൾ ഏത് ഉപകരണം ഉപയോഗിക്കണം?",
      "options": [
        { "text": "ബ്രഷ് ടൂൾ (B)", "isCorrect": false },
        { "text": "ഫിൽ ടൂൾ (F)", "isCorrect": false },
        { "text": "പോളി ലൈൻ ടൂൾ", "isCorrect": true },
        { "text": "ഗ്രേഡിയന്റ് ടൂൾ", "isCorrect": false }
      ]
    },
    {
      "question": "നിങ്ങൾ 'Eye' ലെയറിൽ കണ്ണിന് നിറം നൽകുമ്പോൾ, പെയിൻ്റ് അബദ്ധത്തിൽ താഴെയുള്ള 'Head' ലെയറിലെ ഔട്ട്ലൈനിലേക്ക് തെറിച്ചു. 'Head' ലെയറിനെ ബാധിക്കാതെ ഇത് പരിഹരിക്കാനുള്ള **ശരിയായ** പ്രവർത്തനം എന്താണ്?",
      "options": [
        { "text": "തെറിച്ച പെയിൻ്റ് നീക്കം ചെയ്യാൻ 'Eye' ലെയറിൽ ഇറേസർ ടൂൾ (E) ഉപയോഗിക്കുക.", "isCorrect": true },
        { "text": "മുഴുവൻ 'Head' ലെയറും ഇല്ലാതാക്കുക.", "isCorrect": false },
        { "text": "'Eye', 'Head' ലെയറുകൾ ഒരുമിച്ച് ലയിപ്പിക്കുക.", "isCorrect": false },
        { "text": "കണ്ണിന് വീണ്ടും നിറം നൽകാൻ ഫിൽ ടൂൾ (F) ഉപയോഗിക്കുക.", "isCorrect": false }
      ]
    },
    {
      "question": "തല, ശരീരം, വാൽ എന്നിവ മൂന്ന് വ്യത്യസ്ത ലെയറുകളിലായി വരച്ച ഒരു സ്റ്റൈലൈസ്ഡ് പക്ഷിയെ നിങ്ങൾ വരയ്ക്കുകയാണ്. മുഴുവൻ പക്ഷിയെയും ചെറുതായി ഇടത്തേക്ക് നീക്കണമെന്ന് നിങ്ങൾ തീരുമാനിക്കുന്നു. മൂന്ന് ഭാഗങ്ങളും ഒരേസമയം നീക്കാൻ ഏറ്റവും നല്ല മാർഗ്ഗം എന്താണ്?",
      "options": [
        { "text": "ഓരോ ലെയറും വ്യക്തിഗതമായി തിരഞ്ഞെടുത്ത് നീക്കുക.", "isCorrect": false },
        { "text": "മൂന്ന് ലെയറുകളും ഒന്നായി ലയിപ്പിച്ച ശേഷം നീക്കുക.", "isCorrect": false },
        { "text": "മൂന്ന് ലെയറുകളും ഒരു **ലെയർ ഗ്രൂപ്പിൽ** സ്ഥാപിക്കുകയും ഗ്രൂപ്പ് നീക്കുകയും ചെയ്യുക.", "isCorrect": true },
        { "text": "ഒരു ലെയറും തിരഞ്ഞെടുക്കാതെ കാൻവാസിൽ മൂവ് ടൂൾ (M) ഉപയോഗിക്കുക.", "isCorrect": false }
      ]
    },
    {
      "question": "പക്ഷിയുടെ ചിറകിനായുള്ള ഒരു പ്രദേശം വേർതിരിച്ചെടുക്കാൻ ഫ്രീഹാൻഡ് സെലക്ഷൻ ടൂൾ ഉപയോഗിച്ച ശേഷം, ആ വേർതിരിച്ചെടുത്ത പ്രദേശത്ത് വേഗത്തിൽ കട്ടിയുള്ള നിറം നൽകാൻ നിങ്ങൾ ഉടൻ തിരഞ്ഞെടുക്കേണ്ട ഉപകരണം ഏതാണ്?",
      "options": [
        { "text": "ബ്രഷ് ടൂൾ (B)", "isCorrect": false },
        { "text": "ഫിൽ ടൂൾ (F)", "isCorrect": true },
        { "text": "ഗ്രേഡിയന്റ് ടൂൾ", "isCorrect": false },
        { "text": "മൂവ് ടൂൾ (M)", "isCorrect": false }
      ]
    },
    {
      "question": "ഗ്രിഡ് രീതിക്കായി ക്രിതയിൽ എടുത്ത പ്രിൻ്റൗട്ടിൽ $3 \text{cm} \times 3 \text{cm}$ ഗ്രിഡാണുള്ളത്. ചുമരിലെ ഗ്രിഡ് $45 \text{cm} \times 45 \text{cm}$ ആണെങ്കിൽ, ചിത്രം കൈമാറ്റം ചെയ്യാൻ നിങ്ങൾ ഉപയോഗിക്കുന്ന അനുപാത സ്കെയിൽ ഘടകം (linear scale factor) എന്താണ്?",
      "options": [
        { "text": "1:5 (പ്രിൻ്റ്:ചുമര്)", "isCorrect": false },
        { "text": "1:10 (പ്രിൻ്റ്:ചുമര്)", "isCorrect": false },
        { "text": "1:15 (പ്രിൻ്റ്:ചുമര്)", "isCorrect": true },
        { "text": "1:25 (പ്രിൻ്റ്:ചുമര്)", "isCorrect": false }
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
