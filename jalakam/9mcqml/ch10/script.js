document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "ഐഎസ്പി (ISP) എന്നതിൻ്റെ പൂർണ്ണരൂപം എന്താണ്?",
    "options": [
      {"text": "ഇൻ്റർനെറ്റ് സർവീസ് പ്രോട്ടോക്കോൾ", "isCorrect": false},
      {"text": "ഇൻ്റേണൽ സിസ്റ്റം പ്രൊവൈഡർ", "isCorrect": false},
      {"text": "ഇൻ്റർനെറ്റ് സർവീസ് പ്രൊവൈഡർ", "isCorrect": true},
      {"text": "ഇൻ്റർനെറ്റ് സിസ്റ്റം പ്രോട്ടോക്കോൾ", "isCorrect": false}
    ]
  },
  {
    "question": "താഴെ പറയുന്നവയിൽ ഇന്ത്യയിലെ ഒരു ഇൻ്റർനെറ്റ് സർവീസ് പ്രൊവൈഡറായി പട്ടികപ്പെടുത്തിയിരിക്കുന്നത് ഏതാണ്?",
    "options": [
      {"text": "ഡിഎച്ച്സിപി (DHCP)", "isCorrect": false},
      {"text": "എയർടെൽ (Airtel)", "isCorrect": true},
      {"text": "എച്ച്ടിടിപി (HTTP)", "isCorrect": false},
      {"text": "യുടിപി (UTP)", "isCorrect": false}
    ]
  },
  {
    "question": "നേർത്ത ഗ്ലാസ് നാരുകൾ ഉപയോഗിച്ച് പ്രകാശ സിഗ്നലുകളായി ഡാറ്റ അയയ്ക്കുന്ന കേബിൾ തരം ഏതാണ്?",
    "options": [
      {"text": "യുടിപി കേബിൾ", "isCorrect": false},
      {"text": "കോപ്പർ കേബിൾ", "isCorrect": false},
      {"text": "ആർജെ45 കേബിൾ", "isCorrect": false},
      {"text": "ഒപ്റ്റിക്കൽ ഫൈബർ കേബിൾ", "isCorrect": true}
    ]
  },
  {
    "question": "ചെമ്പ് കമ്പികൾ ഉപയോഗിക്കുന്നതും ദീർഘദൂരത്തേക്ക് അനലോഗ് സിഗ്നലുകളായി ഡാറ്റ അയയ്ക്കുന്നതുമായ കേബിൾ തരം ഏതാണ്?",
    "options": [
      {"text": "ഒപ്റ്റിക്കൽ ഫൈബർ കേബിളുകൾ", "isCorrect": false},
      {"text": "പ്ലാസ്റ്റിക് പൊതിഞ്ഞ കോപ്പർ കേബിളുകൾ", "isCorrect": true},
      {"text": "യുടിപി കേബിളുകൾ", "isCorrect": false},
      {"text": "മീഡിയ കൺവെർട്ടറുകൾ", "isCorrect": false}
    ]
  },
  {
    "question": "ഡിജിറ്റൽ സിഗ്നലുകളെ അനലോഗ് അല്ലെങ്കിൽ ഒപ്റ്റിക്കൽ പോലുള്ള മറ്റ് രൂപങ്ങളിലേക്ക് മാറ്റാൻ ഉപയോഗിക്കുന്ന ഉപകരണം ഏതാണ്?",
    "options": [
      {"text": "മീഡിയ കൺവെർട്ടർ", "isCorrect": true},
      {"text": "സ്വിച്ച്", "isCorrect": false},
      {"text": "ഹബ്", "isCorrect": false},
      {"text": "ആർജെ45", "isCorrect": false}
    ]
  },
  {
    "question": "വിവരങ്ങൾ, ഹാർഡ്‌വെയർ തുടങ്ങിയ വിഭവങ്ങൾ പങ്കുവെക്കാൻ കമ്പ്യൂട്ടറുകളെ ബന്ധിപ്പിക്കുന്ന സംവിധാനത്തെ എന്തു വിളിക്കുന്നു?",
    "options": [
      {"text": "ഒരു ഇൻ്റർനെറ്റ് സർവീസ് പ്രൊവൈഡർ", "isCorrect": false},
      {"text": "ഒരു കമ്പ്യൂട്ടർ നെറ്റ്-വർക്ക്", "isCorrect": true},
      {"text": "ഒരു മീഡിയ കൺവെർട്ടർ", "isCorrect": false},
      {"text": "ഒരു പ്രോട്ടോക്കോൾ", "isCorrect": false}
    ]
  },
  {
    "question": "യുടിപി (UTP) എന്നതിൻ്റെ പൂർണ്ണരൂപം എന്താണ്?",
    "options": [
      {"text": "യൂണിഫൈഡ് ട്രാൻസ്ഫർ പ്രോട്ടോക്കോൾ", "isCorrect": false},
      {"text": "യൂണിവേഴ്സൽ ട്വിസ്റ്റഡ് പെയർ", "isCorrect": false},
      {"text": "അൺഷീൽഡ് ട്വിസ്റ്റഡ് പെയർ", "isCorrect": true},
      {"text": "യൂണീക് ട്രാൻസ്മിഷൻ പോർട്ട്", "isCorrect": false}
    ]
  },
  {
    "question": "നെറ്റ്-വർക്ക് കേബിളുകൾ കമ്പ്യൂട്ടറുമായി ഘടിപ്പിക്കാൻ ഉപയോഗിക്കുന്ന കണക്ടർ ജാക്കിൻ്റെ സാങ്കേതിക നാമം എന്താണ്?",
    "options": [
      {"text": "ആർജെ11 (RJ11)", "isCorrect": false},
      {"text": "ആർജെ45 (RJ45)", "isCorrect": true},
      {"text": "യുടിപി പോർട്ട്", "isCorrect": false},
      {"text": "മീഡിയ ജാക്ക്", "isCorrect": false}
    ]
  },
  {
    "question": "ഒരു ലോക്കൽ നെറ്റ്-വർക്കിലെ എല്ലാ കമ്പ്യൂട്ടറുകളെയും ഒരൊറ്റ പോയിൻ്റിലേക്ക് ബന്ധിപ്പിക്കാൻ സാധാരണയായി ഉപയോഗിക്കുന്ന ഉപകരണം ഏതാണ്?",
    "options": [
      {"text": "മീഡിയ കൺവെർട്ടർ", "isCorrect": false},
      {"text": "ഹബ്", "isCorrect": false},
      {"text": "മോഡം", "isCorrect": false},
      {"text": "സ്വിച്ച്", "isCorrect": true}
    ]
  },
  {
    "question": "ഏത് നെറ്റ്-വർക്ക് ഉപകരണമാണ് ഡാറ്റ, നെറ്റ്-വർക്കിൽ കണക്റ്റുചെയ്‌തിട്ടുള്ള എല്ലാ കമ്പ്യൂട്ടറുകളിലേക്കും അയക്കുന്നത്, അതുവഴി ട്രാഫിക് വർദ്ധിപ്പിക്കുന്നത്?",
    "options": [
      {"text": "ഹബ് (Hub)", "isCorrect": true},
      {"text": "സ്വിച്ച് (Switch)", "isCorrect": false},
      {"text": "റൂട്ടർ (Router)", "isCorrect": false},
      {"text": "മീഡിയ കൺവെർട്ടർ", "isCorrect": false}
    ]
  },
  {
    "question": "ഏത് നെറ്റ്-വർക്ക് ഉപകരണമാണ് ഡാറ്റ, അത് ലഭിക്കേണ്ട ഉപകരണത്തിലേക്ക് മാത്രം അയക്കുന്നത്, അതുവഴി കൂടുതൽ കാര്യക്ഷമമായി പ്രവർത്തിക്കുന്നത്?",
    "options": [
      {"text": "ഹബ് (Hub)", "isCorrect": false},
      {"text": "സ്വിച്ച് (Switch)", "isCorrect": true},
      {"text": "മോഡം (Modem)", "isCorrect": false},
      {"text": "കൺവെർട്ടർ", "isCorrect": false}
    ]
  },
  {
    "question": "ഇൻ്റർനെറ്റിനെ സാങ്കേതികമായി എങ്ങനെ നിർവചിച്ചിരിക്കുന്നു?",
    "options": [
      {"text": "ഒരു സ്കൂൾ ലാബിലെ ഒരൊറ്റ കമ്പ്യൂട്ടർ.", "isCorrect": false},
      {"text": "ഒരു പ്രിൻ്റർ പങ്കിടുന്ന ഉപകരണം.", "isCorrect": false},
      {"text": "ലോകമെമ്പാടുമുള്ള കമ്പ്യൂട്ടർ നെറ്റ്-വർക്കുകളെ ബന്ധിപ്പിക്കുന്ന ഒരു വലിയ നെറ്റ്-വർക്ക്.", "isCorrect": true},
      {"text": "ഒരു ഉപഗ്രഹത്തിൽ നിന്നുള്ള വയർലെസ് സിഗ്നൽ.", "isCorrect": false}
    ]
  },
  {
    "question": "ഒരു സ്കൂൾ ലാബ് പോലെ, ഒരു മുറിയിലോ കെട്ടിടത്തിലോ ഒതുങ്ങുന്ന നെറ്റ്-വർക്കിനെ എന്തു വിളിക്കുന്നു?",
    "options": [
      {"text": "വാൻ (WAN - വൈഡ് ഏരിയ നെറ്റ്-വർക്ക്)", "isCorrect": false},
      {"text": "പാൻ (PAN - പേഴ്സണൽ ഏരിയ നെറ്റ്-വർക്ക്)", "isCorrect": false},
      {"text": "ലാൻ (LAN - ലോക്കൽ ഏരിയ നെറ്റ്-വർക്ക്)", "isCorrect": true},
      {"text": "മാൻ (MAN - മെട്രോപൊളിറ്റൻ ഏരിയ നെറ്റ്-വർക്ക്)", "isCorrect": false}
    ]
  },
  {
    "question": "ബാങ്കുകൾ ഉപയോഗിക്കുന്നത് പോലെ, ഒരു രാജ്യം മുഴുവൻ വ്യാപിച്ചുകിടക്കുന്ന വലിയ നെറ്റ്-വർക്കിനെ എന്തു വിളിക്കുന്നു?",
    "options": [
      {"text": "ലാൻ (LAN)", "isCorrect": false},
      {"text": "വാൻ (WAN)", "isCorrect": true},
      {"text": "പാൻ (PAN)", "isCorrect": false},
      {"text": "വിഎൻസി (VNC)", "isCorrect": false}
    ]
  },
  {
    "question": "ഒരു വ്യക്തിയുടെ സ്മാർട്ട്‌ഫോൺ, ടാബ്‌ലെറ്റ് തുടങ്ങിയ ഉപകരണങ്ങളെ ബന്ധിപ്പിക്കുന്ന നെറ്റ്-വർക്ക് തരം ഏതാണ്?",
    "options": [
      {"text": "വൈഡ് ഏരിയ നെറ്റ്-വർക്ക് (WAN)", "isCorrect": false},
      {"text": "ലോക്കൽ ഏരിയ നെറ്റ്-വർക്ക് (LAN)", "isCorrect": false},
      {"text": "പേഴ്സണൽ ഏരിയ നെറ്റ്-വർക്ക് (PAN)", "isCorrect": true},
      {"text": "ഗ്ലോബൽ ഏരിയ നെറ്റ്-വർക്ക് (GAN)", "isCorrect": false}
    ]
  },
  {
    "question": "വയർലെസ് നെറ്റ്-വർക്കുകൾ കേബിളുകൾക്ക് പകരം ആശയവിനിമയത്തിനായി എന്ത് ഉപയോഗിക്കുന്നു?",
    "options": [
      {"text": "പ്രകാശ സിഗ്നലുകൾ", "isCorrect": false},
      {"text": "ആർഎഫ് തരംഗങ്ങൾ (റേഡിയോ ഫ്രീക്വൻസി തരംഗങ്ങൾ)", "isCorrect": true},
      {"text": "ഡിജിറ്റൽ പൾസുകൾ", "isCorrect": false},
      {"text": "യുടിപി തരംഗങ്ങൾ", "isCorrect": false}
    ]
  },
  {
    "question": "ഏകദേശം 10 മീറ്റർ മാത്രം പരിധിയുള്ളതും ഹെഡ്‌ഫോണുകൾക്കായി ഉപയോഗിക്കുന്നതുമായ വയർലെസ് സാങ്കേതികവിദ്യ ഏതാണ്?",
    "options": [
      {"text": "വൈ-ഫൈ (Wi-Fi)", "isCorrect": false},
      {"text": "ബ്ലൂടൂത്ത് (Bluetooth)", "isCorrect": true},
      {"text": "വാൻ (WAN)", "isCorrect": false},
      {"text": "സാറ്റലൈറ്റ്", "isCorrect": false}
    ]
  },
  {
    "question": "സാധാരണയായി ഒരു വീടോ ഓഫീസോ (150 മീറ്റർ വരെ) പരിധിയുള്ളതും ലാപ്ടോപ്പുകൾക്കായി ഉപയോഗിക്കുന്നതുമായ വയർലെസ് സാങ്കേതികവിദ്യ ഏതാണ്?",
    "options": [
      {"text": "ബ്ലൂടൂത്ത് (Bluetooth)", "isCorrect": false},
      {"text": "വൈ-ഫൈ (Wi-Fi)", "isCorrect": true},
      {"text": "പാൻ (PAN)", "isCorrect": false},
      {"text": "എൻഎഫ്സി (NFC)", "isCorrect": false}
    ]
  },
  {
    "question": "ഓരോ നെറ്റ്-വർക്ക് ഉപകരണത്തിനും അതിൻ്റെ നിർമ്മാതാവ് നൽകുന്ന തനതായ വിലാസത്തെ എന്തു വിളിക്കുന്നു?",
    "options": [
      {"text": "ഐപി അഡ്രസ് (IP Address)", "isCorrect": false},
      {"text": "മാക് അഡ്രസ് (MAC Address)", "isCorrect": true},
      {"text": "യുആർഎൽ അഡ്രസ് (URL Address)", "isCorrect": false},
      {"text": "എച്ച്ടിടിപി അഡ്രസ് (HTTP Address)", "isCorrect": false}
    ]
  },
  {
    "question": "ഹെക്സാഡെസിമൽ നമ്പർ സിസ്റ്റം 16 ചിഹ്നങ്ങൾ ഉപയോഗിക്കുന്നു, അവ ഏതൊക്കെയാണ്?",
    "options": [
      {"text": "0-9 വരെയും A-F വരെയും", "isCorrect": true},
      {"text": "0-7 വരെയും A-H വരെയും", "isCorrect": false},
      {"text": "0-9 വരെ", "isCorrect": false},
      {"text": "0 ഉം 1 ഉം", "isCorrect": false}
    ]
  },
  {
    "question": "ഒരു മാക് അഡ്രസ് (MAC Address) സാധാരണയായി എത്ര ജോഡി ഹെക്സാഡെസിമൽ അക്കങ്ങളായാണ് വേർതിരിക്കുന്നത്?",
    "options": [
      {"text": "നാല് ജോഡി", "isCorrect": false},
      {"text": "എട്ട് ജോഡി", "isCorrect": false},
      {"text": "ആറ് ജോഡി", "isCorrect": true},
      {"text": "രണ്ട് ജോഡി", "isCorrect": false}
    ]
  },
  {
    "question": "ഒരു കമ്പ്യൂട്ടറിൽ, മാക് അഡ്രസ് (MAC Address) നെറ്റ്-വർക്ക് ക്രമീകരണങ്ങളിൽ (settings) എന്ത് പേരിൽ കാണാം?",
    "options": [
      {"text": "ഐപി അഡ്രസ് (IP Address)", "isCorrect": false},
      {"text": "ഹാർഡ്‌വെയർ അഡ്രസ് (Hardware Address)", "isCorrect": true},
      {"text": "നെറ്റ്-വർക്ക് ഐഡി (Network ID)", "isCorrect": false},
      {"text": "പ്രോട്ടോക്കോൾ നമ്പർ", "isCorrect": false}
    ]
  },
  {
    "question": "192.168.1.1 പോലെ, ഒരു നെറ്റ്-വർക്കിലെ ഓരോ ഉപകരണത്തിനും പരസ്പരം തിരിച്ചറിയാൻ നൽകുന്ന വിലാസം ഏതാണ്?",
    "options": [
      {"text": "മാക് അഡ്രസ് (MAC Address)", "isCorrect": false},
      {"text": "എച്ച്ടിടിപി അഡ്രസ് (HTTP Address)", "isCorrect": false},
      {"text": "ഹാർഡ്‌വെയർ അഡ്രസ് (Hardware Address)", "isCorrect": false},
      {"text": "ഐപി അഡ്രസ് (IP Address)", "isCorrect": true}
    ]
  },
  {
    "question": "സാധാരണയായി ഉപയോഗിക്കുന്ന IPv4 സിസ്റ്റത്തിൽ, നാല് സംഖ്യകളിൽ ഓരോന്നിൻ്റെയും സാധുവായ ശ്രേണി (range) എത്രയാണ്?",
    "options": [
      {"text": "0 മുതൽ 255 വരെ", "isCorrect": true},
      {"text": "1 മുതൽ 100 വരെ", "isCorrect": false},
      {"text": "0 മുതൽ 9 വരെ", "isCorrect": false},
      {"text": "1 മുതൽ 1000 വരെ", "isCorrect": false}
    ]
  },
  {
    "question": "താഴെ പറയുന്നവയിൽ ഏതാണ് സാധുവായ ഒരു IPv4 അഡ്രസ്?",
    "options": [
      {"text": "192.168.1.257", "isCorrect": false},
      {"text": "192.168.256.1", "isCorrect": false},
      {"text": "192.168.1.254", "isCorrect": true},
      {"text": "192.168.1", "isCorrect": false}
    ]
  },
  {
    "question": "കൂടുതൽ ഉപകരണങ്ങളെ പിന്തുണയ്ക്കുന്നതിനായി ഹെക്സാഡെസിമൽ നമ്പറുകൾ ഉപയോഗിക്കുന്ന പുതിയ ഐപി (IP) പതിപ്പ് ഏതാണ്?",
    "options": [
      {"text": "IPv4", "isCorrect": false},
      {"text": "IPv6", "isCorrect": true},
      {"text": "DHCP", "isCorrect": false},
      {"text": "MACv6", "isCorrect": false}
    ]
  },
  {
    "question": "വ്യത്യസ്ത ഓപ്പറേറ്റിംഗ് സിസ്റ്റങ്ങളെ നെറ്റ്-വർക്കിലൂടെ ആശയവിനിമയം നടത്താൻ അനുവദിക്കുന്ന പൊതുവായ മാർഗ്ഗനിർദ്ദേശങ്ങളെ അഥവാ നിയമങ്ങളെ എന്തു വിളിക്കുന്നു?",
    "options": [
      {"text": "സ്വിച്ചുകൾ (Switches)", "isCorrect": false},
      {"text": "പ്രോട്ടോക്കോളുകൾ (Protocols)", "isCorrect": true},
      {"text": "മാക് അഡ്രസ്സുകൾ (MAC Addresses)", "isCorrect": false},
      {"text": "ഐഎസ്പികൾ (ISPs)", "isCorrect": false}
    ]
  },
  {
    "question": "ഉപകരണങ്ങൾ ഒരു നെറ്റ്-വർക്കിൽ ചേരുമ്പോൾ അവയ്ക്ക് സ്വയം ഐപി അഡ്രസ് (IP Address) നൽകുന്ന പ്രോട്ടോക്കോൾ ഏതാണ്?",
    "options": [
      {"text": "HTTP", "isCorrect": false},
      {"text": "FTP", "isCorrect": false},
      {"text": "DHCP", "isCorrect": true},
      {"text": "SSH", "isCorrect": false}
    ]
  },
  {
    "question": "വെബ് പേജുകൾ കൈമാറ്റം ചെയ്യാൻ വെബ് ബ്രൗസറുകൾ ഉപയോഗിക്കുന്ന പ്രോട്ടോക്കോൾ ഏതാണ്?",
    "options": [
      {"text": "FTP (ഫയൽ ട്രാൻസ്ഫർ പ്രോട്ടോക്കോൾ)", "isCorrect": false},
      {"text": "SSH (സെക്യൂർ ഷെൽ) പ്രോട്ടോക്കോൾ", "isCorrect": false},
      {"text": "HTTP (ഹൈപ്പർ ടെക്സ്റ്റ് ട്രാൻസ്ഫർ പ്രോട്ടോക്കോൾ)", "isCorrect": true},
      {"text": "TCP/IP (ട്രാൻസ്മിഷൻ കൺട്രോൾ പ്രോട്ടോക്കോൾ)", "isCorrect": false}
    ]
  },
  {
    "question": "കമ്പ്യൂട്ടറുകൾക്കിടയിൽ ഫയലുകൾ കൈമാറ്റം ചെയ്യാൻ ഉപയോഗിക്കുന്ന പ്രോട്ടോക്കോൾ ഏതാണ്?",
    "options": [
      {"text": "HTTP", "isCorrect": false},
      {"text": "FTP", "isCorrect": true},
      {"text": "DHCP", "isCorrect": false},
      {"text": "SSH", "isCorrect": false}
    ]
  },
  {
    "question": "വിദൂരത്തുള്ള മറ്റൊരു കമ്പ്യൂട്ടറിനെ സുരക്ഷിതമായി നിയന്ത്രിക്കാൻ (റിമോട്ട് ലോഗിൻ) ഉപയോഗിക്കുന്ന പ്രോട്ടോക്കോൾ ഏതാണ്?",
    "options": [
      {"text": "SSH", "isCorrect": true},
      {"text": "HTTP", "isCorrect": false},
      {"text": "FTP", "isCorrect": false},
      {"text": "DHCP", "isCorrect": false}
    ]
  },
  {
    "question": "കണക്റ്റുചെയ്ത നെറ്റ്-വർക്കിൻ്റെ ഐപി അഡ്രസ് (IP Address) കണ്ടെത്താൻ ടോപ്പ് പാനലിലെ ഏത് ആപ്ലെറ്റ് ഉപയോഗിക്കാം?",
    "options": [
      {"text": "ഫയൽ മാനേജർ ആപ്ലെറ്റ്", "isCorrect": false},
      {"text": "ബ്ലൂടൂത്ത് ആപ്ലെറ്റ്", "isCorrect": false},
      {"text": "നെറ്റ്-വർക്ക് മാനേജർ ആപ്ലെറ്റ് (nm-applet)", "isCorrect": true},
      {"text": "സെറ്റിംഗ്സ് ആപ്ലെറ്റ്", "isCorrect": false}
    ]
  },
  {
    "question": "മാറാതെ സ്ഥിരമായി നിൽക്കുന്നതും, മാന്വലായി നൽകുന്നതുമായ ഐപി അഡ്രസ് (IP Address) എങ്ങനെ അറിയപ്പെടുന്നു?",
    "options": [
      {"text": "ഡൈനാമിക് ഐപി അഡ്രസ്", "isCorrect": false},
      {"text": "സ്റ്റാറ്റിക് ഐപി അഡ്രസ്", "isCorrect": true},
      {"text": "മാക് അഡ്രസ്", "isCorrect": false},
      {"text": "ഹാർഡ്‌വെയർ അഡ്രസ്", "isCorrect": false}
    ]
  },
  {
    "question": "ഒരു ഐപി അഡ്രസ് (IP Address) മാന്വലായി നൽകുന്നതിന്, 'IPv4 മെത്തേഡ്' എന്നതിന് താഴെ എന്ത് തിരഞ്ഞെടുക്കണം?",
    "options": [
      {"text": "ഓട്ടോമാറ്റിക് (DHCP)", "isCorrect": false},
      {"text": "ലിങ്ക്-ലോക്കൽ ഒൺലി", "isCorrect": false},
      {"text": "മാന്വൽ", "isCorrect": true},
      {"text": "ഡിസേബിൾ", "isCorrect": false}
    ]
  },
  {
    "question": "ഒരു സ്റ്റാറ്റിക് ഐപി (Static IP) സജ്ജീകരിക്കുമ്പോൾ, നെറ്റ്മാസ്കിന് (Netmask) സാധാരണയായി നൽകുന്ന മൂല്യം എന്താണ്?",
    "options": [
      {"text": "192.168.1.1", "isCorrect": false},
      {"text": "255.255.255.0", "isCorrect": true},
      {"text": "0.0.0.0", "isCorrect": false},
      {"text": "8.8.8.8", "isCorrect": false}
    ]
  },
  {
    "question": "192.168.1.204 പോലുള്ള ഒരു സ്റ്റാറ്റിക് ഐപി (Static IP) സജ്ജീകരിക്കുമ്പോൾ, ഗേറ്റ്‌വേയ്ക്ക് (Gateway) സാധാരണയായി നൽകുന്ന വിലാസം എന്താണ്?",
    "options": [
      {"text": "192.168.1.1", "isCorrect": true},
      {"text": "192.168.1.255", "isCorrect": false},
      {"text": "255.255.255.0", "isCorrect": false},
      {"text": "192.168.1.204", "isCorrect": false}
    ]
  },
  {
    "question": "മറ്റൊരു കമ്പ്യൂട്ടറിലേക്കുള്ള നെറ്റ്-വർക്ക് കണക്ഷൻ പ്രവർത്തിക്കുന്നുണ്ടോ എന്ന് പരിശോധിക്കാൻ ടെർമിനലിൽ ഉപയോഗിക്കുന്ന കമാൻഡ് ഏതാണ്?",
    "options": [
      {"text": "check", "isCorrect": false},
      {"text": "connect", "isCorrect": false},
      {"text": "ip", "isCorrect": false},
      {"text": "ping", "isCorrect": true}
    ]
  },
  {
    "question": "SSH പ്രോട്ടോക്കോൾ ഉപയോഗിച്ച് ഫയൽ കൈമാറ്റത്തിനായി മറ്റൊരു കമ്പ്യൂട്ടറിലേക്ക് കണക്റ്റുചെയ്യാൻ 'കണക്റ്റ് ടു സെർവർ' (Connect to Server) എന്നതിൽ ഏത് ഫോർമാറ്റാണ് ഉപയോഗിക്കുന്നത്?",
    "options": [
      {"text": "ssh://192.168.1.15", "isCorrect": true},
      {"text": "ftp://192.168.1.15", "isCorrect": false},
      {"text": "http://192.168.1.15", "isCorrect": false},
      {"text": "file://192.168.1.15", "isCorrect": false}
    ]
  },
  {
    "question": "മറ്റൊരു കമ്പ്യൂട്ടറിൻ്റെ സ്ക്രീൻ വിദൂരമായി കാണാൻ ഉപയോഗിക്കുന്ന ആപ്ലിക്കേഷൻ ഏതാണ്?",
    "options": [
      {"text": "സെറ്റിംഗ്സ് (Settings)", "isCorrect": false},
      {"text": "റെമ്മിന (Remmina)", "isCorrect": true},
      {"text": "ടെർമിനൽ (Terminal)", "isCorrect": false},
      {"text": "ഫയൽസ് (Files)", "isCorrect": false}
    ]
  },
  {
    "question": "സ്ക്രീൻ ഷെയറിംഗിനായി റെമ്മിന (Remmina) ആപ്ലിക്കേഷൻ ഉപയോഗിക്കുന്ന പ്രോട്ടോക്കോൾ ഏതാണ്?",
    "options": [
      {"text": "SSH", "isCorrect": false},
      {"text": "FTP", "isCorrect": false},
      {"text": "VNC", "isCorrect": true},
      {"text": "HTTP", "isCorrect": false}
    ]
  },
  {
    "question": "നിങ്ങളുടെ സ്ക്രീൻ പങ്കിടുന്നതിന്, നിങ്ങൾ 'റിമോട്ട് ഡെസ്ക്ടോപ്പ്' (Remote Desktop) പ്രവർത്തനക്ഷമമാക്കണം, അതോടൊപ്പം മറ്റേത് ഓപ്ഷനും?",
    "options": [
      {"text": "ഏറോപ്ലെയിൻ മോഡ്", "isCorrect": false},
      {"text": "ഓട്ടോമാറ്റിക് (DHCP)", "isCorrect": false},
      {"text": "ലെഗസി വിഎൻസി പ്രോട്ടോക്കോൾ പ്രവർത്തനക്ഷമമാക്കുക (Enable Legacy VNC Protocol)", "isCorrect": true},
      {"text": "ഫയൽ ട്രാൻസ്ഫർ പ്രോട്ടോക്കോൾ", "isCorrect": false}
    ]
  },
  {
    "question": "ഇൻ്റർനെറ്റിൽ ഡാറ്റ സംഭരിക്കുകയും സേവനങ്ങൾ നൽകുകയും ചെയ്യുന്ന ഉയർന്ന പ്രകടനശേഷിയുള്ള കമ്പ്യൂട്ടറുകളെ എന്തു വിളിക്കുന്നു?",
    "options": [
      {"text": "സെർവറുകൾ (Servers)", "isCorrect": true},
      {"text": "ക്ലയൻ്റുകൾ (Clients)", "isCorrect": false},
      {"text": "സ്വിച്ചുകൾ (Switches)", "isCorrect": false},
      {"text": "ലാപ്ടോപ്പുകൾ (Laptops)", "isCorrect": false}
    ]
  },
  {
    "question": "ഒരു ഐപി അഡ്രസ്സിന് (IP Address) പകരമായി ഉപയോഗിക്കുന്ന, 'cusat.ac.in' പോലെ എളുപ്പത്തിൽ ഓർമ്മിക്കാൻ കഴിയുന്ന പേരിനെ എന്തു വിളിക്കുന്നു?",
    "options": [
      {"text": "മാക് അഡ്രസ് (MAC Address)", "isCorrect": false},
      {"text": "ഡൊമെയ്ൻ നെയിം (Domain Name)", "isCorrect": true},
      {"text": "ഐപി പ്രോട്ടോക്കോൾ (IP Protocol)", "isCorrect": false},
      {"text": "സെർവർ നെയിം (Server Name)", "isCorrect": false}
    ]
  },
  {
    "question": "ഐഒടി (IoT) എന്നതിൻ്റെ പൂർണ്ണരൂപം എന്താണ്?",
    "options": [
      {"text": "ഇൻ്റർനെറ്റ് ഓഫ് തിംഗ്സ് (Internet of Things)", "isCorrect": true},
      {"text": "ഇൻ്റർനെറ്റ് ഓൺ ടെലിവിഷൻസ്", "isCorrect": false},
      {"text": "ഇൻപുട്ട്/ഔട്ട്പുട്ട് ടെർമിനൽ", "isCorrect": false},
      {"text": "ഇൻ്റർനാഷണൽ ഓപ്പൺ ടെക്നോളജി", "isCorrect": false}
    ]
  },
  {
    "question": "സ്മാർട്ട് ഉപകരണങ്ങൾക്ക് (സ്മാർട്ട് ടിവികൾ പോലുള്ളവ) ഇൻ്റർനെറ്റുമായി ബന്ധിപ്പിക്കാൻ കഴിയുന്നത് അവയിൽ എന്ത് ഉൾപ്പെട്ടിരിക്കുന്നതിനാലാണ്?",
    "options": [
      {"text": "മീഡിയ കൺവെർട്ടർ", "isCorrect": false},
      {"text": "മൈക്രോപ്രൊസസ്സർ", "isCorrect": true},
      {"text": "യുടിപി കേബിൾ", "isCorrect": false},
      {"text": "ഹബ്", "isCorrect": false}
    ]
  },
  {
    "question": "താഴെ പറയുന്നവയിൽ ഏതാണ് ഐഒടി (IoT) ഉപകരണത്തിന് ഉദാഹരണം?",
    "options": [
      {"text": "സ്മാർട്ട് ടെലിവിഷൻ", "isCorrect": true},
      {"text": "യുടിപി കേബിൾ", "isCorrect": false},
      {"text": "ഒരു ഹബ്", "isCorrect": false},
      {"text": "ഒരു സാധാരണ പ്രിൻ്റർ", "isCorrect": false}
    ]
  },
  {
    "question": "താഴെ പറയുന്നവയിൽ ഏതാണ് ഐഒടി (IoT) ഉപകരണങ്ങളുടെ കൂട്ടത്തിൽ പെടാത്തത്?",
    "options": [
      {"text": "സ്മാർട്ട് ടെലിവിഷൻ", "isCorrect": false},
      {"text": "വോയ്‌സ് അസിസ്റ്റൻ്റ് ഉപകരണം", "isCorrect": false},
      {"text": "യുഎസ്ബി കേബിൾ", "isCorrect": true},
      {"text": "സ്മാർട്ട് ലോക്ക്", "isCorrect": false}
    ]
  },
  {
    "question": "സ്വിച്ചുകൾ കൂടുതൽ കാര്യക്ഷമമായതിനാൽ ഇക്കാലത്ത് വളരെ അപൂർവ്വമായി മാത്രം ഉപയോഗിക്കുന്ന ഉപകരണം ഏതാണ്?",
    "options": [
      {"text": "ഹബ് (Hub)", "isCorrect": true},
      {"text": "റൂട്ടർ (Router)", "isCorrect": false},
      {"text": "മീഡിയ കൺവെർട്ടർ", "isCorrect": false},
      {"text": "സ്വിച്ച് (Switch)", "isCorrect": false}
    ]
  },
  {
    "question": "ഒരു ഹോം ലാനിൽ (LAN), വ്യത്യസ്ത ഉപകരണങ്ങളുടെ ഐപി അഡ്രസ്സുകൾ (ഉദാഹരണത്തിന് 192.168.1.15) സാധാരണയായി ഏത് ഭാഗത്താണ് വ്യത്യാസപ്പെട്ടിരിക്കുന്നത്?",
    "options": [
      {"text": "ആദ്യത്തെ രണ്ട് സംഖ്യകളിൽ", "isCorrect": false},
      {"text": "അവസാനത്തെ ഒന്നോ രണ്ടോ സംഖ്യകളിൽ", "isCorrect": true},
      {"text": "നാല് സംഖ്യകളിലും", "isCorrect": false},
      {"text": "അവയെല്ലാം ഒന്നുതന്നെയായിരിക്കും", "isCorrect": false}
    ]
  },
  {
    "question": "ഒരു കമ്പ്യൂട്ടർ നെറ്റ്-വർക്കിൽ പ്രിൻ്റർ പങ്കിടുന്നതിൻ്റെ പ്രധാന നേട്ടം എന്താണ്?",
    "options": [
      {"text": "ഇത് പ്രിൻ്ററിനെ വേഗത്തിൽ പ്രിൻ്റ് ചെയ്യാൻ സഹായിക്കുന്നു.", "isCorrect": false},
      {"text": "ഇത് ഒന്നിലധികം കമ്പ്യൂട്ടറുകൾക്ക് ഒരൊറ്റ പ്രിൻ്റർ ഉപയോഗിക്കാൻ അനുവദിക്കുന്നു.", "isCorrect": true},
      {"text": "ഇത് പ്രിൻ്ററിനെ ഇൻ്റർനെറ്റുമായി ബന്ധിപ്പിക്കുന്നു.", "isCorrect": false},
      {"text": "ഇത് പ്രിൻ്ററിന് ഒരു മാക് അഡ്രസ് (MAC Address) നൽകുന്നു.", "isCorrect": false}
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
