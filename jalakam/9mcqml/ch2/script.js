document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "LibreOffice Writer-ലെ 'Styles' (ശൈലികൾ) ടെക്നിക്കിൻ്റെ പ്രാഥമിക ധർമ്മം ഡോക്യുമെൻ്റ് അനുസരിച്ച് എന്താണ്?",
    "options": [
      { "text": "പേജിന് ബാക്ക്ഗ്രൗണ്ട് കളർ നൽകുന്നതിന്.", "isCorrect": false },
      { "text": "തലക്കെട്ടുകൾ, ഖണ്ഡികകൾ, പേജുകൾ എന്നിവയ്ക്കായി സ്ഥിരമായ ഫോർമാറ്റിംഗ് (ഫോണ്ട്, നിറം, വലുപ്പം മുതലായവ) മുൻകൂട്ടി നിർവചിക്കുകയും വീണ്ടും ഉപയോഗിക്കുകയും ചെയ്യുന്നതിന്.", "isCorrect": true },
      { "text": "ചിത്രങ്ങളെ സ്വയമേവ ടെക്സ്റ്റാക്കി മാറ്റുന്നതിന്.", "isCorrect": false },
      { "text": "ഡോക്യുമെൻ്റ് ഫയൽ സൈസ് കുറയ്ക്കുന്നതിന്.", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു അവതരണത്തിൽ (presentation) സ്ലൈഡുകൾ മാറുമ്പോൾ സംഭവിക്കുന്നതിന് പകരം, ഒരു സ്ലൈഡിലെ വ്യക്തിഗത ഘടകങ്ങൾക്ക് (വസ്തുക്കൾ, ടെക്സ്റ്റ്) ചലനം നൽകുന്ന വിഷ്വൽ ഇഫക്റ്റ് ഏതാണ്?",
    "options": [
      { "text": "സ്ലൈഡ് ട്രാൻസിഷൻ (Slide Transition)", "isCorrect": false },
      { "text": "ആനിമേഷൻ (Animation)", "isCorrect": true },
      { "text": "സ്റ്റൈൽ (Style)", "isCorrect": false },
      { "text": "പേജ് ബ്രേക്ക് (Page Break)", "isCorrect": false }
    ]
  },
  {
    "question": "'Heading 1' സ്റ്റൈലിൻ്റെ ഫോണ്ട് കളർ നീലയായി മാറ്റിയാൽ, ആ സ്റ്റൈൽ നൽകിയിട്ടുള്ള ഡോക്യുമെൻ്റിലെ എല്ലാ തലക്കെട്ടുകൾക്കും എന്ത് മാറ്റമാണ് സംഭവിക്കുക?",
    "options": [
      { "text": "ആദ്യത്തെ തലക്കെട്ടിന് മാത്രമേ നീലനിറം വരൂ.", "isCorrect": false },
      { "text": "മാനുവലായി മാറ്റങ്ങൾ വരുത്തിയാൽ മാത്രമേ മാറ്റം സംഭവിക്കുകയുള്ളൂ.", "isCorrect": false },
      { "text": "Heading 1 ഉപയോഗിക്കുന്ന എല്ലാ തലക്കെട്ടുകളും നീലയായി മാറും.", "isCorrect": true },
      { "text": "ഉള്ളടക്ക പട്ടികയിലെ (Table of Contents) തലക്കെട്ടിന് മാത്രമേ നീലനിറം വരൂ.", "isCorrect": false }
    ]
  },
  {
    "question": "OCR (ഓപ്റ്റിക്കൽ ക്യാരക്ടർ റെക്കഗ്നിഷൻ) എന്നാൽ എന്ത്?",
    "options": [
      { "text": "ഗണിത സൂത്രവാക്യങ്ങൾ നിർമ്മിക്കുന്നതിനുള്ള സോഫ്റ്റ്‌വെയർ.", "isCorrect": false },
      { "text": "ഒരു ഇമേജ് ഫയലിലോ സ്കാൻ ചെയ്ത ഡോക്യുമെൻ്റിലോ ഉള്ള അക്ഷരങ്ങളെ തിരിച്ചറിഞ്ഞ് ടെക്സ്റ്റാക്കി മാറ്റുന്ന സാങ്കേതികവിദ്യ.", "isCorrect": true },
      { "text": "ചിത്രങ്ങൾക്ക് ചുറ്റും ടെക്സ്റ്റ് ക്രമീകരിക്കുന്ന LibreOffice Writer-ലെ ഒരു സവിശേഷത.", "isCorrect": false },
      { "text": "ഡോക്യുമെൻ്റ് ടെംപ്ലേറ്റുകൾക്കായുള്ള ഒരു ഫയൽ ഫോർമാറ്റ്.", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു വലിയ ഡോക്യുമെൻ്റിലെ പല ഭാഗങ്ങളിലായി ചിതറിക്കിടക്കുന്ന ഉള്ളടക്കത്തിന് ഒരേ സ്റ്റൈൽ എളുപ്പത്തിൽ പ്രയോഗിക്കാൻ സഹായിക്കുന്ന LibreOffice Writer ടെക്നിക്ക് ഏതാണ്?",
    "options": [
      { "text": "Insert → Footnote", "isCorrect": false },
      { "text": "ഫിൽ ഫോർമാറ്റ് മോഡ് (Fill Format Mode)", "isCorrect": true },
      { "text": "സ്റ്റൈലുകൾ പരിഷ്കരിക്കുക (Modify Styles)", "isCorrect": false },
      { "text": "പേജ് ബ്രേക്ക് (Page Break)", "isCorrect": false }
    ]
  },
  {
    "question": "LibreOffice Writer-ൽ 'Table of Contents and Index' (ഉള്ളടക്ക പട്ടികയും സൂചികയും) സവിശേഷത ഉപയോഗിക്കുന്നതിൻ്റെ പ്രധാന പ്രയോജനം എന്താണ്?",
    "options": [
      { "text": "ഉള്ളടക്ക പട്ടിക മുഴുവനായും സ്വയം ടൈപ്പ് ചെയ്യാൻ ഇത് അനുവദിക്കുന്നു.", "isCorrect": false },
      { "text": "ഇത് ഹെഡിംഗ് സ്റ്റൈലുകൾ തിരിച്ചറിഞ്ഞ് ഉള്ളടക്ക പട്ടിക സ്വയമേവ സൃഷ്ടിക്കുകയും പേജ് മാറ്റങ്ങൾ സ്വയമേവ പ്രതിഫലിപ്പിക്കുകയും ചെയ്യുന്നു.", "isCorrect": true },
      { "text": "ഇത് ഗ്രന്ഥസൂചിക (bibliography) മാത്രമേ ഉണ്ടാക്കാൻ അനുവദിക്കൂ, ഉള്ളടക്ക പട്ടിക ഉണ്ടാക്കാൻ കഴിയില്ല.", "isCorrect": false },
      { "text": "ഡോക്യുമെൻ്റ് ഉള്ളടക്കത്തിൽ സ്റ്റൈലുകൾ പ്രയോഗിക്കാതെ ഇത് സൃഷ്ടിക്കാൻ കഴിയും.", "isCorrect": false }
    ]
  },
  {
    "question": "LibreOffice Writer-ൽ സ്റ്റൈൽസ് വിൻഡോ തുറക്കുന്നതിനുള്ള കീബോർഡ് കുറുക്കുവഴി (shortcut) ഏതാണ്?",
    "options": [
      { "text": "Ctrl + C", "isCorrect": false },
      { "text": "F11", "isCorrect": true },
      { "text": "Ctrl + S", "isCorrect": false },
      { "text": "Esc", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു ഡോക്യുമെൻ്റിലെ 'Footnote' (അടിക്കുറിപ്പ്) എന്തിനു വേണ്ടിയാണ് ഉപയോഗിക്കുന്നത്?",
    "options": [
      { "text": "മറ്റൊരു ഡോക്യുമെൻ്റിലേക്ക് ഹൈപ്പർലിങ്ക് ഉണ്ടാക്കാൻ.", "isCorrect": false },
      { "text": "നിലവിലെ പേജ് നമ്പർ ചേർക്കാൻ.", "isCorrect": false },
      { "text": "ഒരു പേജിൻ്റെ താഴെയായി അധിക വിവരങ്ങളോ, സൂചനകളോ, റഫറൻസുകളോ നൽകുന്നതിന്.", "isCorrect": true },
      { "text": "ഡോക്യുമെൻ്റിൻ്റെ ബാക്ക്ഗ്രൗണ്ട് കളർ മാറ്റുന്നതിന്.", "isCorrect": false }
    ]
  },
  {
    "question": "LibreOffice Writer-ൽ ഒരു പ്രധാന തലക്കെട്ടിനായി പുതിയ സ്റ്റൈൽ ഉണ്ടാക്കുമ്പോൾ, ഉള്ളടക്ക പട്ടികയുടെ ശരിയായ ക്രമീകരണത്തിനായി 'Organizer' ടാബിലെ 'Inherit from' എന്ന ഓപ്ഷനിൽ സാധാരണയായി തിരഞ്ഞെടുക്കേണ്ട സ്റ്റൈൽ ഏതാണ്?",
    "options": [
      { "text": "Text Body", "isCorrect": false },
      { "text": "Heading 1", "isCorrect": true },
      { "text": "Default Paragraph Style", "isCorrect": false },
      { "text": "Caption", "isCorrect": false }
    ]
  },
  {
    "question": "ശാസ്ത്രീയ/ഗണിത ലേഖനങ്ങളും പ്രബന്ധങ്ങളും തയ്യാറാക്കുന്നതിനും ചിഹ്നങ്ങളും സൂത്രവാക്യങ്ങളും സൃഷ്ടിക്കുന്നതിനും സൗകര്യമുള്ള ഒരു ടൂളായി ഡോക്യുമെൻ്റിൽ വിവരിക്കുന്ന സോഫ്റ്റ്‌വെയർ ഏതാണ്?",
    "options": [
      { "text": "Scribus", "isCorrect": false },
      { "text": "LibreOffice Writer", "isCorrect": false },
      { "text": "LaTeX", "isCorrect": true },
      { "text": "gImageReader", "isCorrect": false }
    ]
  },
  {
    "question": "അനുവും കൂട്ടുകാരും ഫോക്ലോർ എൻസൈക്ലോപീഡിയ പ്രസിദ്ധീകരണത്തിനായി തയ്യാറെടുക്കുന്നത് ഏത് തീയതിയിലാണ്?",
    "options": [
      { "text": "ഓഗസ്റ്റ് 15, സ്വാതന്ത്ര്യദിനം", "isCorrect": false },
      { "text": "ഓഗസ്റ്റ് 22, ഫോക്ലോർ ദിനം", "isCorrect": true },
      { "text": "ഒക്ടോബർ 2, ഗാന്ധി ജയന്തി", "isCorrect": false },
      { "text": "ഡിസംബർ 25, ക്രിസ്മസ്", "isCorrect": false }
    ]
  },
  {
    "question": "OCR (ഓപ്റ്റിക്കൽ ക്യാരക്ടർ റെക്കഗ്നിഷൻ) ൻ്റെ പ്രാഥമിക ധർമ്മം എന്താണ്?",
    "options": [
      { "text": "ഒരു അവതരണത്തിലെ അക്ഷരങ്ങൾക്ക് ഹൈലൈറ്റ് നൽകുന്നതിന്.", "isCorrect": false },
      { "text": "ഒരു ഇമേജിലോ സ്കാൻ ചെയ്ത ഡോക്യുമെൻ്റിലോ ഉള്ള അക്ഷരങ്ങളെ തിരിച്ചറിഞ്ഞ് ടെക്സ്റ്റാക്കി മാറ്റുന്നതിന്.", "isCorrect": true },
      { "text": "ഒരു ഡോക്യുമെൻ്റിനായി മുൻകൂട്ടി നിശ്ചയിച്ച ഫോർമാറ്റുകൾ നിർവചിക്കുന്നതിന്.", "isCorrect": false },
      { "text": "ഉള്ളടക്ക പട്ടിക സ്വയമേവ സൃഷ്ടിക്കുന്നതിന്.", "isCorrect": false }
    ]
  },
  {
    "question": "ഡോക്യുമെൻ്റിൽ സൂചിപ്പിച്ച OCR സോഫ്റ്റ്‌വെയറിന് ഒരു ഉദാഹരണം ഏതാണ്?",
    "options": [
      { "text": "LibreOffice Writer", "isCorrect": false },
      { "text": "Scribus", "isCorrect": false },
      { "text": "gImageReader", "isCorrect": true },
      { "text": "TexMarker", "isCorrect": false }
    ]
  },
  {
    "question": "OTT ഫോർമാറ്റിലുള്ള ഫയലുകൾ തുറക്കുമ്പോൾ ശുപാർശ ചെയ്യുന്ന നടപടി എന്താണ്?",
    "options": [
      { "text": "ഉടൻ തന്നെ ഡോക്യുമെൻ്റ് പ്രസിദ്ധീകരിക്കുക.", "isCorrect": false },
      { "text": "ഫയൽ അൺസേവ്ഡ് (Untitled) ആയി ലഭ്യമായതിനാൽ ആദ്യം സേവ് ചെയ്യുക.", "isCorrect": true },
      { "text": "എല്ലാ ഉള്ളടക്കത്തിനും 'Heading 1' സ്റ്റൈൽ പ്രയോഗിക്കുക.", "isCorrect": false },
      { "text": "അതിനെ ഒരു PDF ഫയലിലേക്ക് മാറ്റുക.", "isCorrect": false }
    ]
  },
  {
    "question": "LibreOffice Writer-ൻ്റെ പശ്ചാത്തലത്തിൽ OTT എന്നതിൻ്റെ പൂർണ്ണ രൂപം എന്താണ്?",
    "options": [
      { "text": "Open Text Template", "isCorrect": false },
      { "text": "Open Type Tool", "isCorrect": false },
      { "text": "Open Document Standard Format (ODF) ഡോക്യുമെൻ്റ് ടെംപ്ലേറ്റ് ഫയൽ.", "isCorrect": true },
      { "text": "Optical Text Transformation.", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു സ്ലൈഡിലെ (അവതരണ ആപ്ലിക്കേഷനാണെങ്കിൽ) വ്യക്തിഗത വസ്തുക്കൾക്ക് ചലനം നൽകാൻ LibreOffice Writer-ൽ ഉപയോഗിക്കുന്ന സവിശേഷത ഏതാണ്?",
    "options": [
      { "text": "സ്റ്റൈൽ (Style)", "isCorrect": false },
      { "text": "ട്രാൻസിഷൻ (Transition)", "isCorrect": false },
      { "text": "ആനിമേഷൻ (Animation)", "isCorrect": true },
      { "text": "അടിക്കുറിപ്പ് (Footnote)", "isCorrect": false }
    ]
  },
  {
    "question": "കൂടുതൽ പേജുകളുള്ള ഒരു ഡോക്യുമെൻ്റ് തയ്യാറാക്കുമ്പോൾ സ്റ്റൈലുകൾ ഉപയോഗിക്കുന്നതിൻ്റെ പ്രധാന നേട്ടം എന്താണ്?",
    "options": [
      { "text": "ഓരോ പേജും പ്രത്യേകം ഫോർമാറ്റ് ചെയ്യുന്നത് ഇത് ബുദ്ധിമുട്ടാക്കുന്നു.", "isCorrect": false },
      { "text": "ഫോർമാറ്റിംഗ് മാറ്റങ്ങൾക്കായി ഓരോ പേജിലും പ്രവർത്തനം ആവർത്തിക്കേണ്ടതുണ്ട്.", "isCorrect": false },
      { "text": "ഒരു തവണ സ്റ്റൈൽ പരിഷ്കരിക്കുന്നതിലൂടെ ഡോക്യുമെൻ്റിലുടനീളമുള്ള ഡിസൈൻ ഘടകങ്ങളിൽ (തലക്കെട്ടുകൾ പോലെ) എളുപ്പത്തിൽ, സാർവത്രിക മാറ്റങ്ങൾ വരുത്താൻ ഇത് അനുവദിക്കുന്നു.", "isCorrect": true },
      { "text": "ചെറിയ ഡോക്യുമെൻ്റുകൾക്ക് മാത്രമേ ഇത് ഉപയോഗപ്രദമാകൂ.", "isCorrect": false }
    ]
  },
  {
    "question": "സൈഡ്ബാറിലെ ഐക്കണിൽ ക്ലിക്ക് ചെയ്യുന്നതിനു പുറമേ, LibreOffice Writer-ൽ സ്റ്റൈൽസ് വിൻഡോ സാധാരണയായി തുറക്കുന്നത് എങ്ങനെയാണ്?",
    "options": [
      { "text": "Esc കീ അമർത്തി.", "isCorrect": false },
      { "text": "F11 കീ അമർത്തി.", "isCorrect": true },
      { "text": "ഒരു തലക്കെട്ടിൽ റൈറ്റ്-ക്ലിക്ക് ചെയ്ത് Modify തിരഞ്ഞെടുത്ത്.", "isCorrect": false },
      { "text": "Files → Add images ക്ലിക്ക് ചെയ്ത്.", "isCorrect": false }
    ]
  },
  {
    "question": "Heading 1 പോലുള്ള ഒരു സ്റ്റൈൽ മാറ്റുന്ന പ്രക്രിയയിൽ, സ്റ്റൈൽസ് വിൻഡോയിലെ സ്റ്റൈലിൻ്റെ പേരിൽ റൈറ്റ്-ക്ലിക്ക് ചെയ്ത ശേഷം തിരഞ്ഞെടുക്കുന്ന ഓപ്ഷൻ ഏതാണ്?",
    "options": [
      { "text": "New", "isCorrect": false },
      { "text": "Fill Format Mode", "isCorrect": false },
      { "text": "Modify", "isCorrect": true },
      { "text": "Load Styles from Template", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു സ്റ്റൈൽ പരിഷ്കരിക്കുമ്പോൾ, മലയാളം ഫോണ്ടുകൾക്കുള്ള മാറ്റങ്ങൾ ഡോക്യുമെൻ്റ് അനുസരിച്ച് എവിടെയാണ് വരുത്തേണ്ടത്?",
    "options": [
      { "text": "Western Text Font വിഭാഗത്തിൽ.", "isCorrect": false },
      { "text": "CTL Font വിഭാഗത്തിൽ.", "isCorrect": true },
      { "text": "Font Effects ടാബിൽ.", "isCorrect": false },
      { "text": "Alignment ടാബിൽ.", "isCorrect": false }
    ]
  },
  {
    "question": "സ്റ്റൈൽസ് വിൻഡോയിലെ ഫിൽ ഫോർമാറ്റ് മോഡ് (Fill Format Mode) ഒഴിവാക്കാൻ ഉപയോഗിക്കുന്ന കീ ഏതാണ്?",
    "options": [
      { "text": "Enter", "isCorrect": false },
      { "text": "Ctrl", "isCorrect": false },
      { "text": "Esc", "isCorrect": true },
      { "text": "F11", "isCorrect": false }
    ]
  },
  {
    "question": "LaTeX-ൽ ഡോക്യുമെൻ്റുകൾ തയ്യാറാക്കാൻ സഹായിക്കുന്ന സോഫ്റ്റ്‌വെയറിൻ്റെ പേര് എന്താണ്?",
    "options": [
      { "text": "gImageReader", "isCorrect": false },
      { "text": "Scribus", "isCorrect": false },
      { "text": "TexMarker", "isCorrect": true },
      { "text": "LibreOffice Writer", "isCorrect": false }
    ]
  },
  {
    "question": "ഓരോ പേജിൻ്റെയും താഴെയായി നൽകുന്നതിന് പകരം, മുഴുവൻ ഡോക്യുമെൻ്റിൻ്റെയും അവസാനം അധിക വിവരങ്ങളോ റഫറൻസുകളോ നൽകാൻ ഉപയോഗിക്കുന്ന സവിശേഷത ഏതാണ്?",
    "options": [
      { "text": "Footnote", "isCorrect": false },
      { "text": "Header", "isCorrect": false },
      { "text": "Endnote", "isCorrect": true },
      { "text": "Page Border", "isCorrect": false }
    ]
  },
  {
    "question": "LibreOffice Writer-ൽ Footnote ചേർക്കാൻ ഉപയോഗിക്കുന്ന മെനു പാത ഏതാണ്?",
    "options": [
      { "text": "File → Insert → Footnote", "isCorrect": false },
      { "text": "Edit → Footnote and Endnote → Footnote", "isCorrect": false },
      { "text": "Insert → Footnote and Endnote → Footnote", "isCorrect": true },
      { "text": "View → Footnote → Footnote", "isCorrect": false }
    ]
  },
  {
    "question": "ഫോർമാറ്റ് ചെയ്ത ഉള്ളടക്കം തിരഞ്ഞെടുത്ത് സ്റ്റൈൽസ് വിൻഡോയിലേക്ക് വലിച്ചിഴച്ച് പുതിയ സ്റ്റൈൽ സൃഷ്ടിക്കുന്ന LibreOffice-ലെ സാങ്കേതികവിദ്യ ഏതാണ്?",
    "options": [
      { "text": "Fill Format Mode", "isCorrect": false },
      { "text": "Load Styles from Template", "isCorrect": false },
      { "text": "Drag and Drop Method", "isCorrect": true },
      { "text": "Modify Style", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു ഉള്ളടക്ക പട്ടിക (Table of Contents) സൃഷ്ടിക്കുമ്പോൾ, ഡോക്യുമെൻ്റിലെ ഏത് സവിശേഷത തിരിച്ചറിഞ്ഞാണ് സോഫ്റ്റ്‌വെയർ അത് സൃഷ്ടിക്കുന്നത്?",
    "options": [
      { "text": "പേജ് ബോർഡറുകൾ (Page Borders)", "isCorrect": false },
      { "text": "തലക്കെട്ടുകൾക്കും ഉപതലക്കെട്ടുകൾക്കും നൽകിയ സ്റ്റൈലുകൾ.", "isCorrect": true },
      { "text": "ഖണ്ഡികകളുടെ എണ്ണം.", "isCorrect": false },
      { "text": "ടെക്സ്റ്റിൻ്റെ ഫോണ്ട് നിറം.", "isCorrect": false }
    ]
  },
  {
    "question": "gImageReader ഉപയോഗിച്ച് ഒരു ഇമേജ് ഫയലിൽ നിന്ന് ടെക്സ്റ്റ് പരിവർത്തനം ചെയ്യുമ്പോൾ, ഇമേജ് ചേർത്തതിനും ഭാഷ തിരഞ്ഞെടുത്തതിനും ശേഷം എന്ത് ചെയ്യണം?",
    "options": [
      { "text": "Save output ക്ലിക്ക് ചെയ്യുക.", "isCorrect": false },
      { "text": "Acquire ക്ലിക്ക് ചെയ്യുക.", "isCorrect": false },
      { "text": "Recognize all ക്ലിക്ക് ചെയ്യുക.", "isCorrect": true },
      { "text": "Invert colors ക്ലിക്ക് ചെയ്യുക.", "isCorrect": false }
    ]
  },
  {
    "question": "എന്താണ് Scribus?",
    "options": [
      { "text": "ഒരു തരം OCR സോഫ്റ്റ്‌വെയർ.", "isCorrect": false },
      { "text": "ഒരു ഉടമസ്ഥാവകാശമുള്ള (proprietary) വേർഡ് പ്രോസസ്സിംഗ് സോഫ്റ്റ്‌വെയർ.", "isCorrect": false },
      { "text": "സൗജന്യവും ഓപ്പൺ സോഴ്‌സുമായ ഡെസ്ക്ടോപ്പ് പബ്ലിഷിംഗ് സോഫ്റ്റ്‌വെയർ.", "isCorrect": true },
      { "text": "അടിക്കുറിപ്പുകൾ (Footnotes) സൃഷ്ടിക്കാൻ ഉപയോഗിക്കുന്ന ഒരു ഉപകരണം.", "isCorrect": false }
    ]
  },
  {
    "question": "LibreOffice Writer-ൽ പ്രധാന തലക്കെട്ടുകൾക്കായി ചില സവിശേഷതകൾ നിർവചിക്കുന്ന സ്റ്റൈലുകൾ സാധാരണയായി അറിയപ്പെടുന്നത്:",
    "options": [
      { "text": "Text Body", "isCorrect": false },
      { "text": "Heading 1", "isCorrect": true },
      { "text": "Subtitle", "isCorrect": false },
      { "text": "Quotations", "isCorrect": false }
    ]
  },
  {
    "question": "ഉള്ളടക്ക പട്ടികയിലെ ഒരു തലക്കെട്ടിൽ മൗസ് പോയിൻ്റർ വെക്കുമ്പോൾ, ഡോക്യുമെൻ്റിന് ലിങ്കിൻ്റെ സവിശേഷതകൾ ഉണ്ടെങ്കിൽ എന്ത് സംഭവിക്കും?",
    "options": [
      { "text": "പേജ് സ്വയമേവ ഇല്ലാതാക്കപ്പെടും.", "isCorrect": false },
      { "text": "Ctrl കീ അമർത്തി ക്ലിക്ക് ചെയ്താൽ ആ പേജിലേക്ക് പോകാമെന്ന് കാണിക്കുന്ന സന്ദേശം പ്രത്യക്ഷപ്പെടും.", "isCorrect": true },
      { "text": "തലക്കെട്ടിൻ്റെ സ്റ്റൈൽ ഉടനടി പരിഷ്കരിക്കപ്പെടും.", "isCorrect": false },
      { "text": "ഡോക്യുമെൻ്റ് സ്വയമേവ PDF-ലേക്ക് മാറ്റപ്പെടും.", "isCorrect": false }
    ]
  },
  {
    "question": "'Web of Goodness' എന്ന യൂണിറ്റ് ഉള്ളടക്ക പട്ടിക ഉപയോഗിച്ച് കണ്ടെത്താൻ കഴിയുന്ന ഡോക്യുമെൻ്റിൻ്റെ ഏത് ഭാഗമാണ്?",
    "options": [
      { "text": "ഉള്ളടക്ക പട്ടികയിൽ നിന്ന് കണ്ടെത്തേണ്ട ഒരു പേജ് നമ്പർ.", "isCorrect": true },
      { "text": "പേജ് 10", "isCorrect": false },
      { "text": "പേജ് 25", "isCorrect": false },
      { "text": "അവസാന പേജ്", "isCorrect": false }
    ]
  },
  {
    "question": "അനുവും കൂട്ടുകാരും ഫോക്ലോർ എൻസൈക്ലോപീഡിയക്കായി ശേഖരിക്കുന്ന പ്രധാന ഉള്ളടക്കം എന്താണ്?",
    "options": [
      { "text": "ഗണിത ലേഖനങ്ങളും പ്രബന്ധങ്ങളും.", "isCorrect": false },
      { "text": "ശാസ്ത്രീയ ഡാറ്റകളും ചിത്രങ്ങളും.", "isCorrect": false },
      { "text": "കൃഷി, കാർഷിക ഗാനങ്ങൾ, ഉപകരണങ്ങൾ, പഴഞ്ചൊല്ലുകൾ എന്നിവയുമായി ബന്ധപ്പെട്ട കലാരൂപങ്ങളെക്കുറിച്ചുള്ള വിവരണങ്ങൾ.", "isCorrect": true },
      { "text": "gImageReader ഉപയോഗിക്കുന്നതിനുള്ള നിർദ്ദേശങ്ങൾ.", "isCorrect": false }
    ]
  },
  {
    "question": "LibreOffice Writer-ൽ പുതിയ സ്റ്റൈൽ ഉണ്ടാക്കുമ്പോൾ 'Inherit from' ഓപ്ഷൻ്റെ പ്രാധാന്യം എന്താണ്?",
    "options": [
      { "text": "ഇത് ഫോണ്ടിൻ്റെ നിറം നിർവചിക്കുന്നു.", "isCorrect": false },
      { "text": "ഇത് പുതിയ സ്റ്റൈലിൻ്റെ പേര് നിർണ്ണയിക്കുന്നു.", "isCorrect": false },
      { "text": "പുതിയ സ്റ്റൈൽ ഏത് തരം തലക്കെട്ടിനെ (Heading 1, Heading 2, etc.) അടിസ്ഥാനമാക്കിയുള്ളതായിരിക്കണമെന്ന് തിരഞ്ഞെടുക്കുന്നു.", "isCorrect": true },
      { "text": "ഇത് അടിക്കുറിപ്പുകൾക്ക് (Footnotes) വേണ്ടി മാത്രം ഉപയോഗിക്കുന്നു.", "isCorrect": false }
    ]
  },
  {
    "question": "ഉള്ളടക്ക പട്ടിക നേരിട്ട് മാനുവലായി ഫോർമാറ്റ് ചെയ്യുന്നതിനായി 'Table of Contents, Index or Bibliography' വിൻഡോയിൽ അൺചെക്ക് ചെയ്യേണ്ട ഓപ്ഷൻ ഏതാണ്?",
    "options": [
      { "text": "Evaluate up to level", "isCorrect": false },
      { "text": "Protected against manual changes", "isCorrect": true },
      { "text": "Include index marks", "isCorrect": false },
      { "text": "Title field", "isCorrect": false }
    ]
  },
  {
    "question": "'To Change the Style' എന്ന പ്രവർത്തനത്തിൽ, ഫോണ്ട് ഫാമിലി THUMBA ആയും വലുപ്പം 14pt ആയും, ഫോണ്ട് കളർ എന്തായാണ് മാറ്റാൻ നിർദ്ദേശിക്കുന്നത്?",
    "options": [
      { "text": "നീല", "isCorrect": false },
      { "text": "ചുവപ്പ്", "isCorrect": true },
      { "text": "പച്ച", "isCorrect": false },
      { "text": "കറുപ്പ്", "isCorrect": false }
    ]
  },
  {
    "question": "ഡോക്യുമെൻ്റിൽ സൂചിപ്പിച്ച Scribus-ൻ്റെ ഒരു പ്രധാന നേട്ടം എന്താണ്?",
    "options": [
      { "text": "ഇതൊരു ഉടമസ്ഥാവകാശമുള്ള വേർഡ് പ്രോസസ്സറാണ്.", "isCorrect": false },
      { "text": "ഇത് അടിക്കുറിപ്പുകൾ ഉണ്ടാക്കാൻ മാത്രമേ ഉപയോഗിക്കൂ.", "isCorrect": false },
      { "text": "ഇത് യൂണിക്കോഡ് ഫോണ്ടുകളെ പിന്തുണയ്ക്കുന്നു.", "isCorrect": true },
      { "text": "ഇത് വിൻഡോസിൽ മാത്രം ലഭ്യമാണ്.", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു സ്റ്റൈൽ പരിഷ്കരിക്കുമ്പോൾ, ടെക്സ്റ്റിന് മാർജിനിൽ നിന്നുള്ള ദൂരം മാറ്റാൻ ഉപയോഗിക്കുന്ന സ്റ്റൈൽ ഫോർമാറ്റിംഗ് വിൻഡോയിലെ ടാബ് ഏതാണ്?",
    "options": [
      { "text": "Font Effects", "isCorrect": false },
      { "text": "Alignment", "isCorrect": false },
      { "text": "Indents & Spacing", "isCorrect": true },
      { "text": "Organizer", "isCorrect": false }
    ]
  },
  {
    "question": "LibreOffice Writer-ലെ ഫോർമാറ്റിംഗ് ടൂൾബാറിൻ്റെ ഇടതുവശത്തുള്ള Style Box-ൻ്റെ ധർമ്മം എന്താണ്?",
    "options": [
      { "text": "F11 ഉപയോഗിച്ച് സ്റ്റൈൽസ് വിൻഡോ തുറക്കാൻ.", "isCorrect": false },
      { "text": "Heading 1, Text Body തുടങ്ങിയ മുൻകൂട്ടി നിർവചിച്ച സ്റ്റൈലുകൾ ക്ലിക്ക് ചെയ്ത് പ്രയോഗിക്കാൻ.", "isCorrect": true },
      { "text": "ഡോക്യുമെൻ്റ് PDF-ലേക്ക് മാറ്റാൻ.", "isCorrect": false },
      { "text": "ഒരു പേജ് ബ്രേക്ക് ചേർക്കാൻ.", "isCorrect": false }
    ]
  },
  {
    "question": "'Drag and Drop Method' ഉപയോഗിച്ച് സൃഷ്ടിച്ച സ്റ്റൈലുകൾ *മറ്റ്* ഡോക്യുമെൻ്റുകളിലേക്ക് പ്രയോഗിക്കാൻ സഹായിക്കുന്ന സാങ്കേതികവിദ്യ ഏതാണ്?",
    "options": [
      { "text": "Fill Format Mode", "isCorrect": false },
      { "text": "സ്റ്റൈൽസ് ആക്ഷൻ ഓപ്ഷനിലെ Load Styles from Template.", "isCorrect": true },
      { "text": "Modify Style", "isCorrect": false },
      { "text": "Insert → Footnote", "isCorrect": false }
    ]
  },
  {
    "question": "പുതിയ സ്റ്റൈൽ ഉണ്ടാക്കുമ്പോൾ, 'Style Formatting' വിൻഡോയിലെ ഏത് ടാബാണ് പുതിയ സ്റ്റൈലിൻ്റെ പേര് നൽകാൻ ഉപയോഗിക്കുന്നത്?",
    "options": [
      { "text": "Alignment", "isCorrect": false },
      { "text": "Font Effects", "isCorrect": false },
      { "text": "Organizer", "isCorrect": true },
      { "text": "Indents & Spacing", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു OTT ഫയൽ തുറക്കുമ്പോൾ ഒരു ഉപയോക്താവിന് ശുപാർശ ചെയ്യുന്ന നടപടി എന്താണ്?",
    "options": [
      { "text": "സേവ് ചെയ്യാതെ ഉടൻ ടൈപ്പിംഗ് തുടങ്ങുക.", "isCorrect": false },
      { "text": "ആദ്യം ഫയൽ സേവ് ചെയ്യാൻ ശ്രദ്ധിക്കുക.", "isCorrect": true },
      { "text": "അതിനെ ഒരു TXT ഫയലിലേക്ക് മാറ്റുക.", "isCorrect": false },
      { "text": "ഫോണ്ട് ഫാമിലി THUMBA ആയി മാറ്റുക.", "isCorrect": false }
    ]
  },
  {
    "question": "ഉള്ളടക്ക പട്ടിക ഉപയോക്താക്കളെ വിഷയങ്ങളും ഉപവിഷയങ്ങളും കൂടാതെ പുസ്തകത്തിൽ ഉൾപ്പെടുത്തിയിട്ടുള്ള ഏത് പ്രധാന വിവരവും മനസ്സിലാക്കാൻ സഹായിക്കുന്നു?",
    "options": [
      { "text": "രചയിതാവിൻ്റെ പേര്.", "isCorrect": false },
      { "text": "അവയുടെ പേജ് നമ്പറുകൾ.", "isCorrect": true },
      { "text": "പ്രസിദ്ധീകരണ തീയതി.", "isCorrect": false },
      { "text": "ഉപയോഗിച്ച ഫോണ്ട് സ്റ്റൈൽ.", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു അടിക്കുറിപ്പ് (Footnote) ചേർക്കുമ്പോൾ, അതിൻ്റെ വിശദീകരണം പേജിൽ എവിടെയാണ് പ്രത്യക്ഷപ്പെടുന്നത്?",
    "options": [
      { "text": "ഡോക്യുമെൻ്റിൻ്റെ തുടക്കത്തിൽ.", "isCorrect": false },
      { "text": "പേജിൻ്റെ ഏറ്റവും താഴെയായി, ഒരു ചെറിയ വരയ്ക്ക് താഴെ.", "isCorrect": true },
      { "text": "Header ഭാഗത്ത്.", "isCorrect": false },
      { "text": "ഒരു പ്രത്യേക പോപ്പ്-അപ്പ് വിൻഡോയിൽ.", "isCorrect": false }
    ]
  },
  {
    "question": "നിങ്ങൾ gImageReader ഉപയോഗിക്കുകയാണെങ്കിൽ, ഇമേജ് ഫയലിൽ നിന്ന് തിരിച്ചറിഞ്ഞ അക്ഷരങ്ങൾ ടെക്സ്റ്റായി പരിവർത്തനം ചെയ്ത് വിൻഡോയുടെ ഏത് ഭാഗത്താണ് പ്രത്യക്ഷപ്പെടുന്നത്?",
    "options": [
      { "text": "വിൻഡോയുടെ ഇടതുവശത്ത്.", "isCorrect": false },
      { "text": "സ്റ്റൈൽസ് വിൻഡോയിൽ.", "isCorrect": false },
      { "text": "Acquire വിഭാഗത്തിൽ.", "isCorrect": false },
      { "text": "വിൻഡോയുടെ വലതുവശത്ത്.", "isCorrect": true }
    ]
  },
  {
    "question": "ഒരു സ്റ്റൈൽ പരിഷ്കരിക്കുമ്പോൾ 'Alignment' (ക്രമീകരണം) ടാബിൻ്റെ പ്രധാന ധർമ്മങ്ങളിൽ ഒന്ന് എന്താണ്?",
    "options": [
      { "text": "ഫോണ്ടിൻ്റെ നിറം സജ്ജമാക്കുക.", "isCorrect": false },
      { "text": "ഫോണ്ടിൻ്റെ വലുപ്പം സജ്ജമാക്കുക.", "isCorrect": false },
      { "text": "ടെക്സ്റ്റ് മധ്യഭാഗത്ത് (Center), ഇടത് (Left), അല്ലെങ്കിൽ വലത് (Right) ഭാഗത്തായി ക്രമീകരിക്കുക.", "isCorrect": true },
      { "text": "സ്റ്റൈലിനെ Heading 1 ആയി നിർവചിക്കുക.", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു സ്റ്റൈൽ പരിഷ്കരിക്കുമ്പോൾ 'Font Effects' ടാബിൻ്റെ ഉദ്ദേശ്യം എന്താണ്?",
    "options": [
      { "text": "മാർജിനിൽ നിന്നുള്ള ദൂരം മാറ്റാൻ.", "isCorrect": false },
      { "text": "ഫോണ്ട് കളർ പോലുള്ള അക്ഷരങ്ങളുടെ രൂപകൽപ്പന മാറ്റാൻ.", "isCorrect": true },
      { "text": "സ്റ്റൈലുകൾ ക്രമീകരിക്കാൻ.", "isCorrect": false },
      { "text": "ഒരു പട്ടിക ചേർക്കാൻ.", "isCorrect": false }
    ]
  },
  {
    "question": "ഡോക്യുമെൻ്റ് അനുസരിച്ച്, LibreOffice Writer-ൽ 'Heading 1' പ്രയോഗിക്കുമ്പോൾ അതിൻ്റെ ഡിഫോൾട്ട് ഫോണ്ട് സൈസ് എത്രയാണ്?",
    "options": [
      { "text": "14 pt", "isCorrect": false },
      { "text": "16 pt", "isCorrect": false },
      { "text": "18 pt", "isCorrect": true },
      { "text": "20 pt", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു വലിയ ഡോക്യുമെൻ്റിൽ ഉള്ളടക്ക പട്ടിക ടൈപ്പ് ചെയ്ത് മാനുവലായി ചേർക്കുന്നതിൻ്റെ പ്രധാന പോരായ്മ എന്താണ്?",
    "options": [
      { "text": "മാറ്റങ്ങൾ വരുത്താൻ എളുപ്പമാണ്.", "isCorrect": false },
      { "text": "പേജുകളിൽ വരുത്തുന്ന മാറ്റങ്ങൾ സ്വയമേവ പ്രതിഫലിക്കുന്നു.", "isCorrect": false },
      { "text": "ഇതൊരു ശ്രമകരമായ കാര്യമാണ്, കൂടാതെ പേജുകൾ ചേർക്കുകയോ ഇല്ലാതാക്കുകയോ ചെയ്യുമ്പോൾ മാറ്റങ്ങൾ വരുത്താൻ പ്രയാസമാണ്.", "isCorrect": true },
      { "text": "ഇത് ഉള്ളടക്കവുമായി സ്വയമേവ ലിങ്ക് ചെയ്യുന്നു.", "isCorrect": false }
    ]
  },
  {
    "question": "ഉള്ളടക്ക പട്ടിക (Table of Contents) പ്രത്യക്ഷപ്പെടേണ്ട പുതിയ പേജ് സൃഷ്ടിക്കാൻ, കഴ്സർ ആദ്യ പേജിൽ വെച്ച ശേഷം എന്ത് ചെയ്യണം?",
    "options": [
      { "text": "File → New ക്ലിക്ക് ചെയ്യുക.", "isCorrect": false },
      { "text": "Insert → Page break ഉപയോഗിച്ച് ഒരു പുതിയ പേജ് ചേർക്കുക.", "isCorrect": true },
      { "text": "റൈറ്റ്-ക്ലിക്ക് ചെയ്ത് New Style തിരഞ്ഞെടുക്കുക.", "isCorrect": false },
      { "text": "Fill Format Mode ഉപയോഗിക്കുക.", "isCorrect": false }
    ]
  },
  {
    "question": "ശാസ്ത്രീയ ലേഖനമെഴുത്തിന് സ്റ്റാൻഡേർഡ് വേർഡ് പ്രോസസ്സറുകളേക്കാൾ LaTeX-നുള്ള ഒരു പ്രയോജനം എന്താണ്?",
    "options": [
      { "text": "ദൈനംദിന ഡോക്യുമെൻ്റുകൾക്ക് ഇത് ഉപയോഗിക്കാൻ ലളിതമാണ്.", "isCorrect": false },
      { "text": "ശാസ്ത്രീയ പ്രബന്ധങ്ങൾക്ക് ആവശ്യമായ ചിഹ്നങ്ങളും സൂത്രവാക്യങ്ങളും സൃഷ്ടിക്കാനുള്ള സൗകര്യം ഇതിനുണ്ട്.", "isCorrect": true },
      { "text": "ഇത് കൂടുതൽ യൂണിക്കോഡ് ഫോണ്ടുകളെ പിന്തുണയ്ക്കുന്നു.", "isCorrect": false },
      { "text": "ഇത് വാണിജ്യപരമായ ഉപയോഗത്തിന് മാത്രമേ ലഭ്യമാകൂ.", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു പുസ്തകത്തിലെ തലക്കെട്ടുകൾ തിരിച്ചറിയാൻ ഉപയോഗിക്കുന്ന പ്രാഥമിക സ്വഭാവം എന്താണ്?",
    "options": [
      { "text": "ടെക്സ്റ്റിൻ്റെ നീളം.", "isCorrect": false },
      { "text": "ഫോണ്ട്, നിറം, വലുപ്പം, മാർജിനിൽ നിന്നുള്ള ദൂരം.", "isCorrect": true },
      { "text": "അടിക്കുറിപ്പുകളുടെ (footnotes) ഉപയോഗം.", "isCorrect": false },
      { "text": "അത് Fill Format Mode-ൽ ആണോ എന്നത്.", "isCorrect": false }
    ]
  },
  {
    "question": "പുതിയ സ്റ്റൈൽ ഉണ്ടാക്കുന്ന പ്രക്രിയയിൽ, Heading വിഭാഗത്തിൽ 'New' തിരഞ്ഞെടുക്കാൻ എവിടെയാണ് റൈറ്റ്-ക്ലിക്ക് ചെയ്യേണ്ടത്?",
    "options": [
      { "text": "ഡോക്യുമെൻ്റിലെ ആദ്യത്തെ തലക്കെട്ടിൽ.", "isCorrect": false },
      { "text": "സ്റ്റൈൽസ് വിൻഡോയിലെ Paragraph വിഭാഗത്തിലുള്ള 'Heading' എന്നതിൽ.", "isCorrect": true },
      { "text": "'Font Effects' ടാബിൽ.", "isCorrect": false },
      { "text": "'Default Paragraph Style'-ൽ.", "isCorrect": false }
    ]
  },
  {
    "question": "Footnote/Endnote പ്രവർത്തനത്തിനായി 'footnote.txt' ഫയൽ അടങ്ങിയിരിക്കുന്ന ഫോൾഡറിൻ്റെ പേര് എന്താണ്?",
    "options": [
      { "text": "My Documents", "isCorrect": false },
      { "text": "School_Resources", "isCorrect": true },
      { "text": "LibreOffice", "isCorrect": false },
      { "text": "New Styles", "isCorrect": false }
    ]
  },
  {
    "question": "gImageReader-ൽ, School Resources ഫോൾഡറിലെ 'kummatti.png' എന്ന ഇമേജ് ഫയൽ എന്തിനുള്ള ഉദാഹരണമായിട്ടാണ് ഉപയോഗിക്കുന്നത്?",
    "options": [
      { "text": "ഒരു ഡോക്യുമെൻ്റ് ടെംപ്ലേറ്റ് ഫയൽ.", "isCorrect": false },
      { "text": "OCR ഉപയോഗിച്ച് ടെക്സ്റ്റിലേക്ക് മാറ്റാനുള്ള ഇമേജ് ഫയൽ.", "isCorrect": true },
      { "text": "അവസാനത്തെ ഉള്ളടക്ക പട്ടിക അടങ്ങിയ ഫയൽ.", "isCorrect": false },
      { "text": "പുതിയ സ്റ്റൈൽ അടങ്ങിയ ഫയൽ.", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു അടിക്കുറിപ്പ് (Footnote) പ്രയോഗിച്ച വാക്കിനടുത്തുള്ള നമ്പറിൽ ക്ലിക്ക് ചെയ്താൽ ഉണ്ടാകുന്ന ഫലം എന്താണ്?",
    "options": [
      { "text": "Fill Format Mode പ്രയോഗിക്കുന്നു.", "isCorrect": false },
      { "text": "ആ വാക്ക് ഇല്ലാതാക്കുന്നു.", "isCorrect": false },
      { "text": "താഴെയുള്ള വിശദീകരണത്തിലേക്ക് നിങ്ങളെ എത്തിക്കുന്നു.", "isCorrect": true },
      { "text": "ഉള്ളടക്ക പട്ടിക വിൻഡോ തുറക്കുന്നു.", "isCorrect": false }
    ]
  },
  {
    "question": "'MyStyle2' എന്ന പേരിൽ ഉപതലക്കെട്ടുകൾക്കായി (subheadings) ഒരു പുതിയ സ്റ്റൈൽ ഉണ്ടാക്കുമ്പോൾ, അത് ഏത് ഹെഡിംഗ് വിഭാഗത്തിൽ ഉൾപ്പെടുന്നു എന്ന് ശ്രദ്ധിക്കണം?",
    "options": [
      { "text": "Heading 1 വിഭാഗം.", "isCorrect": false },
      { "text": "Text Body വിഭാഗം.", "isCorrect": false },
      { "text": "Heading 2 വിഭാഗം.", "isCorrect": true },
      { "text": "Default Paragraph Style വിഭാഗം.", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു LibreOffice ഡോക്യുമെൻ്റ് ടെംപ്ലേറ്റ് ഫയലിൻ്റെ (Open Document Standard Format) ഫയൽ എക്സ്റ്റൻഷൻ എന്താണ്?",
    "options": [
      { "text": ".docx", "isCorrect": false },
      { "text": ".pdf", "isCorrect": false },
      { "text": ".ott", "isCorrect": true },
      { "text": ".json", "isCorrect": false }
    ]
  },
  {
    "question": "ഉള്ളടക്ക പട്ടിക (Table of Contents) ചേർക്കാൻ, കഴ്സർ വെച്ച് പുതിയ പേജ് ചേർത്ത ശേഷം പിന്തുടരുന്ന മെനു പാത ഏതാണ്?",
    "options": [
      { "text": "Insert → Header and Footer.", "isCorrect": false },
      { "text": "Insert → Table of Contents and Index → Table of Contents, Index or Bibliography.", "isCorrect": true },
      { "text": "Edit → Index.", "isCorrect": false },
      { "text": "View → Table of Contents.", "isCorrect": false }
    ]
  },
  {
    "question": "സ്റ്റൈൽസ് വിൻഡോയിൽ (ചിത്രം 2.3) സൂചിപ്പിച്ചിട്ടുള്ള സ്റ്റൈലുകളുടെ ഒരു തരം ഏതാണ്?",
    "options": [
      { "text": "Image Styles", "isCorrect": false },
      { "text": "Paragraph Styles", "isCorrect": true },
      { "text": "Table Styles", "isCorrect": false },
      { "text": "Footnote Styles", "isCorrect": false }
    ]
  },
  {
    "question": "സ്റ്റൈൽ ഫോർമാറ്റിംഗ് വിൻഡോയിലെ 'Font' ടാബിൻ്റെ ഉദ്ദേശ്യം എന്താണ്?",
    "options": [
      { "text": "ഖണ്ഡികയുടെ ക്രമീകരണം സജ്ജമാക്കാൻ.", "isCorrect": false },
      { "text": "ഫോണ്ട് ഫാമിലിയും വലുപ്പവും തിരഞ്ഞെടുക്കാൻ.", "isCorrect": true },
      { "text": "Endnote നിർവചിക്കാൻ.", "isCorrect": false },
      { "text": "ഒരു ചിത്രം ചേർക്കാൻ.", "isCorrect": false }
    ]
  },
  {
    "question": "Tesseract OCR എന്ന OCR സോഫ്റ്റ്‌വെയർ എന്ത് ചെയ്യുന്നു?",
    "options": [
      { "text": "ക്ലാസ് മാഗസിൻ ഉണ്ടാക്കാൻ സഹായിക്കുന്നു.", "isCorrect": false },
      { "text": "ഒരു ഡോക്യുമെൻ്റ് ഇമേജിലെ അക്ഷരങ്ങളെ തിരിച്ചറിഞ്ഞ് ടെക്സ്റ്റായി മാറ്റുന്നു.", "isCorrect": true },
      { "text": "ഒരു സ്റ്റൈലിൻ്റെ ഫോണ്ട് ഫാമിലി മാറ്റുന്നു.", "isCorrect": false },
      { "text": "ഒരു പേജ് ബ്രേക്ക് ഉണ്ടാക്കാൻ ഉപയോഗിക്കുന്നു.", "isCorrect": false }
    ]
  },
  {
    "question": "LibreOffice Writer-ൽ ഒരു ഖണ്ഡികയ്ക്ക് പ്രത്യേക സ്റ്റൈൽ പ്രയോഗിച്ചില്ലെങ്കിൽ അതിൻ്റെ ഡിഫോൾട്ട് സ്റ്റൈൽ കാറ്റഗറി ഏതാണ്?",
    "options": [
      { "text": "Heading 1", "isCorrect": false },
      { "text": "Text Body", "isCorrect": true },
      { "text": "Caption", "isCorrect": false },
      { "text": "List", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു സ്റ്റൈൽ പരിഷ്കരിക്കുമ്പോൾ, ഒരു ഖണ്ഡികയ്ക്ക് മുമ്പും ശേഷവുമുള്ള സ്‌പേസ് നിയന്ത്രിക്കാൻ അനുവദിക്കുന്ന സവിശേഷത ഏതാണ്?",
    "options": [
      { "text": "Font Effects", "isCorrect": false },
      { "text": "Indents & Spacing", "isCorrect": true },
      { "text": "Borders", "isCorrect": false },
      { "text": "Alignment", "isCorrect": false }
    ]
  },
  {
    "question": "സ്റ്റൈൽ പരിഷ്കരിക്കുന്ന വിൻഡോയിലെ (F11) ഏത് ടാബാണ് സ്റ്റൈലിൻ്റെ ബാക്ക്ഗ്രൗണ്ട് കളറോ ചിത്രമോ നിർവചിക്കാൻ അനുവദിക്കുന്നത്?",
    "options": [
      { "text": "Indents & Spacing", "isCorrect": false },
      { "text": "Alignment", "isCorrect": false },
      { "text": "Area", "isCorrect": true },
      { "text": "Organizer", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു ഡോക്യുമെൻ്റ് ടെംപ്ലേറ്റ് (OTT ഫയൽ) ഉപയോഗിക്കുന്നതിൻ്റെ പ്രധാന പ്രയോജനം എന്താണ്?",
    "options": [
      { "text": "അന്തിമ ഡോക്യുമെൻ്റ് ഉടൻ ഓൺലൈനിൽ പ്രസിദ്ധീകരിക്കുന്നുവെന്ന് ഉറപ്പാക്കുന്നു.", "isCorrect": false },
      { "text": "ഇത് ഡോക്യുമെൻ്റ് ക്രമീകരണങ്ങൾ, സ്റ്റൈലുകൾ, അടിസ്ഥാന ഉള്ളടക്കം എന്നിവ മുൻകൂട്ടി ലോഡ് ചെയ്യുകയും ആവർത്തിച്ചുള്ള ഡോക്യുമെൻ്റ് സൃഷ്ടിക്കുന്ന സമയം ലാഭിക്കുകയും ചെയ്യുന്നു.", "isCorrect": true },
      { "text": "ഇത് എല്ലാ ചിത്രങ്ങളെയും OCR ഉപയോഗിച്ച് സ്വയമേവ ടെക്സ്റ്റാക്കി മാറ്റുന്നു.", "isCorrect": false },
      { "text": "ഭാവിയിലെ എല്ലാ മാറ്റങ്ങൾക്കുമെതിരെ ഡോക്യുമെൻ്റ് ലോക്ക് ചെയ്യുന്നു.", "isCorrect": false }
    ]
  },
  {
    "question": "വിവിധ ഭാഗങ്ങളിലായി ചിതറിക്കിടക്കുന്ന ഒന്നിലധികം ഖണ്ഡികകൾക്ക് സ്റ്റൈൽ വേഗത്തിൽ പ്രയോഗിക്കാൻ അനുവദിക്കുന്ന, ഫോർമാറ്റ് പെയിൻ്റിംഗ് ചെയ്യുന്ന സവിശേഷതയുടെ പേരെന്താണ്?",
    "options": [
      { "text": "Style Marker", "isCorrect": false },
      { "text": "Format Painter", "isCorrect": false },
      { "text": "Fill Format Mode", "isCorrect": true },
      { "text": "Template Loader", "isCorrect": false }
    ]
  },
  {
    "question": "സ്കാൻ ചെയ്ത ഒരു ഡോക്യുമെൻ്റ് ടെക്സ്റ്റിലേക്ക് മാറ്റുമ്പോൾ, OCR സാങ്കേതികവിദ്യ ആവശ്യമായി വരുന്നത് എന്തുകൊണ്ടാണ്?",
    "options": [
      { "text": "സ്കാൻ ചെയ്ത ഡോക്യുമെൻ്റുകൾ ഇതിനകം ടെക്സ്റ്റ് ഫയലുകളാണ്.", "isCorrect": false },
      { "text": "ഒരു സ്കാൻ ഒരു ഇമേജാണ്, അതിലെ അക്ഷരരൂപങ്ങളെ വ്യാഖ്യാനിച്ച് എഡിറ്റ് ചെയ്യാവുന്ന ടെക്സ്റ്റാക്കി മാറ്റാൻ OCR ആവശ്യമാണ്.", "isCorrect": true },
      { "text": "ഡോക്യുമെൻ്റിൻ്റെ ഫോണ്ട് സൈസ് മാറ്റാൻ മാത്രമേ ഇത് സഹായിക്കൂ.", "isCorrect": false },
      { "text": "ഡോക്യുമെൻ്റ് പ്രിൻ്റ് ചെയ്യാൻ ഇത് ആവശ്യമാണ്.", "isCorrect": false }
    ]
  },
  {
    "question": "ഡോക്യുമെൻ്റിൽ മാറ്റങ്ങൾ വരുത്തിയ ശേഷം (ഉദാഹരണത്തിന്, തലക്കെട്ടുകൾ മാറ്റുകയോ പേജുകൾ ചേർക്കുകയോ ചെയ്യുമ്പോൾ) ഉള്ളടക്ക പട്ടിക (Table of Contents) അപ്‌ഡേറ്റ് ചെയ്യാൻ എന്ത് നടപടിയാണ് ചെയ്യേണ്ടത്?",
    "options": [
      { "text": "ഉള്ളടക്ക പട്ടിക മുഴുവനായും സ്വയം വീണ്ടും ടൈപ്പ് ചെയ്യണം.", "isCorrect": false },
      { "text": "ഉള്ളടക്ക പട്ടികയിൽ റൈറ്റ്-ക്ലിക്ക് ചെയ്ത് 'Update Index/Table' തിരഞ്ഞെടുക്കുക.", "isCorrect": true },
      { "text": "F11 കീ അമർത്തി ഒരു പുതിയ സ്റ്റൈൽ പ്രയോഗിക്കുക.", "isCorrect": false },
      { "text": "ഒരു പുതിയ അടിക്കുറിപ്പ് (Footnote) ചേർക്കുക.", "isCorrect": false }
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
