document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "ലിബ്രെ ഓഫീസ് റൈറ്ററിൽ (LibreOffice Writer) ഒരു **ശീർഷകം (Header)** ചേർക്കുന്നതിനുള്ള മെനു വഴി ഏതാണ്?",
    "options": [
      { "text": "Format → Header and Footer → Header", "isCorrect": false },
      { "text": "Insert → Header and Footer → Header", "isCorrect": true },
      { "text": "Tools → Header → Default Page Style", "isCorrect": false },
      { "text": "View → Header and Footer → Header", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു ഖണ്ഡികയുടെ ബോർഡറിനും ടെക്സ്റ്റിനും ഇടയിലുള്ള അകലം ക്രമീകരിക്കുന്നത് ബോർഡേഴ്സ് ടാബിലെ (Borders tab) ഏത് ഭാഗം ഉപയോഗിച്ചാണ്?",
    "options": [
      { "text": "Line Arrangement", "isCorrect": false },
      { "text": "Shadow Style", "isCorrect": false },
      { "text": "Padding", "isCorrect": true },
      { "text": "Presets", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു പ്രമാണം (document) **PDF** ഫോർമാറ്റിലേക്ക് എക്‌സ്‌പോർട്ട് ചെയ്യുന്നതിൻ്റെ പ്രധാന പ്രയോജനം എന്താണ്?",
    "options": [
      { "text": "ഫയൽ വലുപ്പം ഗണ്യമായി കുറയ്ക്കുന്നു.", "isCorrect": false },
      { "text": "ആർക്കും എളുപ്പത്തിൽ എഡിറ്റ് ചെയ്യാൻ അനുവദിക്കുന്നു.", "isCorrect": false },
      { "text": "മറ്റൊരു കമ്പ്യൂട്ടറിൽ തുറക്കുമ്പോഴോ പ്രിൻ്റ് ചെയ്യുമ്പോഴോ ലേഔട്ടും ഫോണ്ടുകളും മാറ്റമില്ലാതെ നിലനിർത്തുന്നു.", "isCorrect": true },
      { "text": "പ്രമാണം ഒരു ഓൺലൈൻ പ്ലാറ്റ്‌ഫോമിലേക്ക് സ്വയമേവ അപ്‌ലോഡ് ചെയ്യുന്നു.", "isCorrect": false }
    ]
  },
  {
    "question": "ഓരോ പേജിൻ്റെയും **താഴെയായി** പേജ് നമ്പർ പോലുള്ള ഉള്ളടക്കം ആവർത്തിക്കാൻ ഉപയോഗിക്കുന്ന വേർഡ് പ്രോസസ്സർ സവിശേഷത ഏതാണ്?",
    "options": [
      { "text": "ടെക്സ്റ്റ് ബോക്സ് (Text Box)", "isCorrect": false },
      { "text": "ശീർഷകം (Header)", "isCorrect": false },
      { "text": "ഫൂട്ടർ (Footer)", "isCorrect": true },
      { "text": "ആദ്യ വരി ഇൻഡൻ്റ് (First Line Indent)", "isCorrect": false }
    ]
  },
  {
    "question": "ഡോക്യുമെൻ്റിലെ ക്വിക്ക് റഫറൻസ് പട്ടികയിൽ നൽകിയിട്ടുള്ള 'To Save' (സേവ് ചെയ്യാൻ) എന്ന പ്രവർത്തനത്തിനുള്ള കീബോർഡ് കുറുക്കുവഴി ഏതാണ്?",
    "options": [
      { "text": "Ctrl+A", "isCorrect": false },
      { "text": "Ctrl+P", "isCorrect": false },
      { "text": "Ctrl+S", "isCorrect": true },
      { "text": "Ctrl+C", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു ഖണ്ഡികയുടെ **ആദ്യത്തെ വരിക്ക്** മാത്രം മാർജിനിൽ നിന്ന് വ്യത്യസ്തമായി അകലം സജ്ജമാക്കാൻ ഉപയോഗിക്കുന്ന ഇൻഡൻ്റ് ഓപ്ഷൻ ഏതാണ്?",
    "options": [
      { "text": "Before Text Indent", "isCorrect": false },
      { "text": "After Text Indent", "isCorrect": false },
      { "text": "First Line Indent", "isCorrect": true },
      { "text": "Padding", "isCorrect": false }
    ]
  },
  {
    "question": "'Increase Paragraph Spacing' (ഖണ്ഡികാ അകലം കൂട്ടുക) ഉപകരണം ക്ലിക്കുചെയ്യുമ്പോൾ, ഖണ്ഡികകൾക്കിടയിൽ സജ്ജീകരിക്കുന്ന ഡിഫോൾട്ട് ദൂരം എത്രയാണ്?",
    "options": [
      { "text": "0.05 cm", "isCorrect": false },
      { "text": "0.10 cm", "isCorrect": true },
      { "text": "0.25 cm", "isCorrect": false },
      { "text": "1.15", "isCorrect": false }
    ]
  },
  {
    "question": "വേർഡ് പ്രോസസ്സറിൽ ഒരു വാക്കിന് മുകളിൽ **മൂന്ന് തവണ തുടർച്ചയായി ക്ലിക്കുചെയ്യുമ്പോൾ** എന്ത് സംഭവിക്കുന്നു?",
    "options": [
      { "text": "മുഴുവൻ വാക്കും തിരഞ്ഞെടുക്കപ്പെടുന്നു.", "isCorrect": false },
      { "text": "മുഴുവൻ വാക്യവും തിരഞ്ഞെടുക്കപ്പെടുന്നു.", "isCorrect": false },
      { "text": "മുഴുവൻ ഖണ്ഡികയും തിരഞ്ഞെടുക്കപ്പെടുന്നു.", "isCorrect": true },
      { "text": "മുഴുവൻ പ്രമാണവും തിരഞ്ഞെടുക്കപ്പെടുന്നു.", "isCorrect": false }
    ]
  },
  {
    "question": "'To Select All' (എല്ലാം തിരഞ്ഞെടുക്കാൻ) എന്ന പ്രവർത്തനത്തിനുള്ള കീബോർഡ് കുറുക്കുവഴി ഏതാണ്?",
    "options": [
      { "text": "Ctrl+X", "isCorrect": false },
      { "text": "Ctrl+S", "isCorrect": false },
      { "text": "Ctrl+A", "isCorrect": true },
      { "text": "Ctrl+V", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു ഖണ്ഡികക്ക് പശ്ചാത്തല വർണ്ണം (background colour) ചേർക്കുന്നതിന്, Format → Paragraph വിൻഡോയിലെ ഏത് ടാബ് ആണ് ഉപയോഗിക്കേണ്ടത്?",
    "options": [
      { "text": "Borders", "isCorrect": false },
      { "text": "Text Flow", "isCorrect": false },
      { "text": "Area", "isCorrect": true },
      { "text": "Indents & Spacing", "isCorrect": false }
    ]
  },
  {
    "question": "പ്രമാണത്തിൻ്റെ **പ്രിൻ്റ് പ്രിവ്യൂ** (Print Preview) പരിശോധിക്കുന്നതിന് നൽകിയിരിക്കുന്ന മെനു വഴി ഏതാണ്?",
    "options": [
      { "text": "File → Print", "isCorrect": false },
      { "text": "View → Layout", "isCorrect": false },
      { "text": "File → Print Preview", "isCorrect": true },
      { "text": "View → Print Setup", "isCorrect": false }
    ]
  },
  {
    "question": "ഇടത്, വലത് പേജുകൾക്ക് വ്യത്യസ്തമായ ശീർഷകങ്ങൾ (headers) സജ്ജീകരിക്കുന്നതിന്, Header ടാബിൽ **അൺചെക്ക്** ചെയ്യേണ്ട ഓപ്ഷൻ ഏതാണ്?",
    "options": [
      { "text": "Merge with next paragraph", "isCorrect": false },
      { "text": "Synchronize", "isCorrect": false },
      { "text": "Same content on Left and Right Pages", "isCorrect": true },
      { "text": "Repeat heading rows on new pages", "isCorrect": false }
    ]
  },
  {
    "question": "'Toggle Unordered List' ഉപകരണം എന്തിനാണ് ഉപയോഗിക്കുന്നത്?",
    "options": [
      { "text": "ക്രമീകരിച്ച ലിസ്റ്റ് (numbered list) സൃഷ്ടിക്കാൻ.", "isCorrect": false },
      { "text": "തിരഞ്ഞെടുത്ത ഉള്ളടക്കത്തെ ബുള്ളറ്റഡ് ലിസ്റ്റായി (bulleted list) ഫോർമാറ്റ് ചെയ്യാൻ.", "isCorrect": true },
      { "text": "ഒരു ലിസ്റ്റിൻ്റെ ലൈൻ സ്പേസിംഗ് ക്രമീകരിക്കാൻ.", "isCorrect": false },
      { "text": "ഒരു ലിസ്റ്റിന് ചുറ്റും ബോർഡർ ചേർക്കാൻ.", "isCorrect": false }
    ]
  },
  {
    "question": "'Insert Table' വിൻഡോയിൽ പട്ടികയുടെ ശൈലി (Table Style) ആയി ലിസ്റ്റ് ചെയ്തിട്ടുള്ളത് ഏതാണ്?",
    "options": [
      { "text": "Simple Grid", "isCorrect": false },
      { "text": "Elegant", "isCorrect": true },
      { "text": "Classic", "isCorrect": false },
      { "text": "Financial", "isCorrect": false }
    ]
  },
  {
    "question": "പുതിയ കീബോർഡ് ഭാഷ (Input Source) ചേർക്കുന്നതിന്, ഉപയോക്താവ് ആദ്യം കമ്പ്യൂട്ടറിൻ്റെ ഏത് സെറ്റിംഗ്സ് ഭാഗമാണ് തുറക്കേണ്ടത്?",
    "options": [
      { "text": "Settings → Appearance", "isCorrect": false },
      { "text": "Settings → Sound", "isCorrect": false },
      { "text": "Settings → Keyboard", "isCorrect": true },
      { "text": "Settings → Applications", "isCorrect": false }
    ]
  },
  {
    "question": "മൗസ് ഉപയോഗിച്ച് ഒരു പട്ടികയുടെ കോളം വീതി ക്രമീകരിക്കുന്നതിനായി, രണ്ട് കോളങ്ങളുടെ കവലയിൽ മൗസ് നീക്കുമ്പോൾ പോയിൻ്റർ ഏത് ചിഹ്നമായി മാറുന്നു?",
    "options": [
      { "text": "ഒരു കൈ ഐക്കൺ (hand icon)", "isCorrect": false },
      { "text": "ഒരു തലയുള്ള അമ്പ് (single-headed arrow)", "isCorrect": false },
      { "text": "രണ്ട് തലയുള്ള അമ്പ് (double-headed arrow)", "isCorrect": true },
      { "text": "ഒരു ഐ-ബീം കഴ്സർ (I-beam cursor)", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു സെല്ലിൻ്റെ **മുകളിലും താഴെയും** ഉള്ള അരികുകൾക്കിടയിൽ ടെക്സ്റ്റ് മധ്യഭാഗത്താക്കാൻ ഉപയോഗിക്കുന്ന പട്ടിക ഫോർമാറ്റിംഗ് ഉപകരണം ഏതാണ്?",
    "options": [
      { "text": "Merge Cells", "isCorrect": false },
      { "text": "Center Horizontally", "isCorrect": false },
      { "text": "Center Vertically", "isCorrect": true },
      { "text": "Align Center", "isCorrect": false }
    ]
  },
  {
    "question": "ലിബ്രെ ഓഫീസ് റൈറ്ററിൽ **ടേബിൾ ടൂൾബാർ** (Table Toolbar) ദൃശ്യമാക്കുന്നതിനുള്ള മെനു വഴി ഏതാണ്?",
    "options": [
      { "text": "Tools → Customize → Toolbar → Table", "isCorrect": false },
      { "text": "Format → Table → Show Toolbar", "isCorrect": false },
      { "text": "View → Toolbar → Table", "isCorrect": true },
      { "text": "Insert → Table → Show Tools", "isCorrect": false }
    ]
  },
  {
    "question": "പട്ടിക ഒരു പേജിൽ ഒതുങ്ങുന്നില്ലെങ്കിൽ, അടുത്ത പേജുകളിലും കോളം തലക്കെട്ടുകൾ ആവർത്തിക്കുന്നുവെന്ന് ഉറപ്പാക്കുന്ന 'Insert Table' വിൻഡോയിലെ ഓപ്ഷൻ ഏതാണ്?",
    "options": [
      { "text": "Don't split table over pages", "isCorrect": false },
      { "text": "Repeat heading rows on new pages", "isCorrect": true },
      { "text": "Use caption", "isCorrect": false },
      { "text": "Table Styles", "isCorrect": false }
    ]
  },
  {
    "question": "വേർഡ് പ്രോസസ്സർ ജോലികൾക്കായി ലിസ്റ്റ് ചെയ്തിട്ടുള്ള ഒരു ഓൺലൈൻ പ്ലാറ്റ്‌ഫോം ഏതാണ്?",
    "options": [
      { "text": "Adobe Acrobat", "isCorrect": false },
      { "text": "Dropbox Paper", "isCorrect": true },
      { "text": "Evernote", "isCorrect": false },
      { "text": "Slack", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു ഖണ്ഡികയുടെ **മുഴുവൻ ഭാഗത്തിനും** ഇടത് മാർജിനിൽ നിന്നുള്ള അകലം നിയന്ത്രിക്കുന്ന സെറ്റിംഗ്സ് ഏതാണ്?",
    "options": [
      { "text": "First Line Indent", "isCorrect": false },
      { "text": "After Text Indent", "isCorrect": false },
      { "text": "Padding", "isCorrect": false },
      { "text": "Before Text Indent", "isCorrect": true }
    ]
  },
  {
    "question": "പ്രമാണത്തിലെ മാറ്റങ്ങൾ നിരീക്ഷിക്കാൻ ഒരു ഉപയോക്താവ് സജ്ജമാക്കാൻ ആവശ്യപ്പെടുന്ന Line Spacing മൂല്യം എത്രയാണ്?",
    "options": [
      { "text": "1.00", "isCorrect": false },
      { "text": "1.15", "isCorrect": true },
      { "text": "1.50", "isCorrect": false },
      { "text": "0.10 cm", "isCorrect": false }
    ]
  },
  {
    "question": "ടെക്സ്റ്റിൻ്റെ ഫോണ്ട് നാമവും വലുപ്പവും മാറ്റുന്നതിന്, പ്രോപ്പർട്ടീസ് വിൻഡോയിലെ ഏത് വിഭാഗമാണ് ഉപയോഗിക്കുന്നത്?",
    "options": [
      { "text": "Paragraph", "isCorrect": false },
      { "text": "Spacing", "isCorrect": false },
      { "text": "Character", "isCorrect": true },
      { "text": "Style", "isCorrect": false }
    ]
  },
  {
    "question": "ഡോക്യുമെൻ്റ് അനുസരിച്ച്, 'To Copy' (പകർത്താൻ) എന്ന പ്രവർത്തനത്തിനുള്ള കീബോർഡ് കുറുക്കുവഴി ഏതാണ്?",
    "options": [
      { "text": "Ctrl+A", "isCorrect": false },
      { "text": "Ctrl+X", "isCorrect": false },
      { "text": "Ctrl+V", "isCorrect": false },
      { "text": "Ctrl+C", "isCorrect": true }
    ]
  },
  {
    "question": "ഖണ്ഡികയുടെ ബോർഡറുകൾ ക്രമീകരിക്കുമ്പോൾ, നാല് വശങ്ങൾക്കും വ്യത്യസ്തമായ 'Padding' മൂല്യങ്ങൾ നൽകാൻ **അൺചെക്ക്** ചെയ്യേണ്ട ഓപ്ഷൻ ഏതാണ്?",
    "options": [
      { "text": "Line Arrangement", "isCorrect": false },
      { "text": "User-defined", "isCorrect": false },
      { "text": "Synchronize", "isCorrect": true },
      { "text": "Presets", "isCorrect": false }
    ]
  },
  {
    "question": "തിരഞ്ഞെടുത്ത സെല്ലിനോ വരിക്കോ **മുകളിലായി** ഒരു പുതിയ വരി (row) ചേർക്കാൻ ഉപയോഗിക്കുന്ന പട്ടിക ഫോർമാറ്റിംഗ് ഉപകരണം ഏതാണ്?",
    "options": [
      { "text": "Columns Before", "isCorrect": false },
      { "text": "Rows Below", "isCorrect": false },
      { "text": "Rows Above", "isCorrect": true },
      { "text": "Merge Cells", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു പ്രമാണത്തിലെ വരികൾക്കും ഖണ്ഡികകൾക്കും ഇടയിലുള്ള അകലം സജ്ജീകരിക്കുന്ന പ്രക്രിയ പൊതുവായി അറിയപ്പെടുന്നത്:",
    "options": [
      { "text": "Pagination", "isCorrect": false },
      { "text": "Line Arrangement", "isCorrect": false },
      { "text": "Indents & Spacing", "isCorrect": true },
      { "text": "Area Formatting", "isCorrect": false }
    ]
  },
  {
    "question": "'Toggle Ordered List' ഉപകരണം എന്തിനാണ് ഉപയോഗിക്കുന്നത്?",
    "options": [
      { "text": "ബുള്ളറ്റഡ് ലിസ്റ്റ് സൃഷ്ടിക്കാൻ.", "isCorrect": false },
      { "text": "ഒരു പട്ടിക ചേർക്കാൻ.", "isCorrect": false },
      { "text": "ഉള്ളടക്കത്തെ അക്കങ്ങളിലോ അക്ഷരങ്ങളിലോ ഉള്ള ലിസ്റ്റായി ഫോർമാറ്റ് ചെയ്യാൻ.", "isCorrect": true },
      { "text": "ഫോണ്ട് ശൈലി മാറ്റാൻ.", "isCorrect": false }
    ]
  },
  {
    "question": "ഹിന്ദി കീബോർഡ് ഇൻപുട്ട് സോഴ്സ് ചേർക്കുന്നതിനായി പറയുന്ന ഒരു പടി ഏതാണ്?",
    "options": [
      { "text": "English (United States) ലേഔട്ട് തിരഞ്ഞെടുക്കുക.", "isCorrect": false },
      { "text": "'More' ക്ലിക്ക് ചെയ്ത് 'Indian' തിരഞ്ഞെടുക്കുക.", "isCorrect": true },
      { "text": "Malayalam Inscript തിരഞ്ഞെടുക്കുക.", "isCorrect": false },
      { "text": "'English (India, with rupees)' തിരഞ്ഞെടുക്കുക.", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു പട്ടികയിലെ സെല്ലിന് പശ്ചാത്തല വർണ്ണം നൽകാനുള്ള ഉപകരണത്തിൻ്റെ പേര്:",
    "options": [
      { "text": "Select Character Highlighting Color", "isCorrect": false },
      { "text": "Table Cell Background Color", "isCorrect": true },
      { "text": "Background Color (Paragraph Tab)", "isCorrect": false },
      { "text": "Line Arrangement Color", "isCorrect": false }
    ]
  },
  {
    "question": "'To Paste' (ഒട്ടിക്കാൻ) എന്ന പ്രവർത്തനത്തിനുള്ള കീബോർഡ് കുറുക്കുവഴി ഏതാണ്?",
    "options": [
      { "text": "Ctrl+C", "isCorrect": false },
      { "text": "Ctrl+X", "isCorrect": false },
      { "text": "Ctrl+V", "isCorrect": true },
      { "text": "Ctrl+S", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു പ്രമാണത്തിൽ **പേജ് നമ്പർ** ചേർക്കുന്നതിനുള്ള വഴി ഏതാണ്?",
    "options": [
      { "text": "Format → Field → Page Number", "isCorrect": false },
      { "text": "Insert → Field → Page Number", "isCorrect": true },
      { "text": "Tools → Page Numbering", "isCorrect": false },
      { "text": "View → Page Number", "isCorrect": false }
    ]
  },
  {
    "question": "ബോർഡർ സെറ്റിംഗുകളിൽ, എല്ലാ ബോർഡർ ലൈനുകളും ഒരേ ശൈലിയിലാണോ (ലൈൻ തരം, നിറം, കനം) എന്ന് നിയന്ത്രിക്കുന്ന ഓപ്ഷൻ ഏതാണ്?",
    "options": [
      { "text": "Padding", "isCorrect": false },
      { "text": "Shadow Style", "isCorrect": false },
      { "text": "Line Arrangement", "isCorrect": true },
      { "text": "Synchronize", "isCorrect": false }
    ]
  },
  {
    "question": "'ശാസ്ത്രീയമായി ടൈപ്പിംഗ് പഠിക്കുന്നതിന്' ലിസ്റ്റ് ചെയ്തിട്ടുള്ള വേർഡ് പ്രോസസ്സിംഗ് സോഫ്റ്റ്‌വെയർ ഏതാണ്?",
    "options": [
      { "text": "LibreOffice Writer", "isCorrect": false },
      { "text": "Google Docs", "isCorrect": false },
      { "text": "Tux Typing", "isCorrect": true },
      { "text": "Microsoft Word", "isCorrect": false }
    ]
  },
  {
    "question": "പരിശീലനത്തിനായി പ്രമാണത്തിൽ പ്രത്യേകം പരാമർശിച്ചിട്ടുള്ള ഒരു മലയാളം ഫോണ്ട് ഏതാണ്?",
    "options": [
      { "text": "Karthika", "isCorrect": false },
      { "text": "Anek Malayalam", "isCorrect": true },
      { "text": "Rachana", "isCorrect": false },
      { "text": "Manjari", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു ഖണ്ഡികക്ക് **ഇടത്** മാർജിനിൽ നിന്നും **വലത്** മാർജിനിൽ നിന്നുമുള്ള അകലം സജ്ജീകരിക്കുന്നതിനെ പൊതുവായി എന്ത് വിളിക്കുന്നു:",
    "options": [
      { "text": "Line Spacing", "isCorrect": false },
      { "text": "Padding", "isCorrect": false },
      { "text": "Indenting", "isCorrect": true },
      { "text": "Area Formatting", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു വേർഡ് പ്രോസസ്സറിൽ പ്രമാണത്തിന് **ഫോർമാറ്റിംഗ്** നൽകുന്നതിൻ്റെ പ്രധാന ലക്ഷ്യം എന്താണ്?",
    "options": [
      { "text": "ഫയൽ വലുപ്പം കുറയ്ക്കാൻ.", "isCorrect": false },
      { "text": "ഭാഷ മാറ്റാൻ.", "isCorrect": false },
      { "text": "പ്രമാണത്തെ കൂടുതൽ ആകർഷകവും വായിക്കാൻ എളുപ്പമുള്ളതുമാക്കാൻ.", "isCorrect": true },
      { "text": "ചിത്രങ്ങൾ മാത്രം ചേർക്കാൻ.", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു ഉപയോക്താവിന് മൗസ് ഉപയോഗിച്ച് ഒരൊറ്റ **വാക്ക്** തിരഞ്ഞെടുക്കണമെങ്കിൽ, കഴ്‌സർ വാക്കിന് മുകളിലായിരിക്കുമ്പോൾ എന്ത് പ്രവർത്തനം ചെയ്യണം?",
    "options": [
      { "text": "ഒറ്റ ക്ലിക്ക്", "isCorrect": false },
      { "text": "ഡബിൾ ക്ലിക്ക്", "isCorrect": true },
      { "text": "ട്രിപ്പിൾ ക്ലിക്ക്", "isCorrect": false },
      { "text": "Ctrl+ ക്ലിക്ക്", "isCorrect": false }
    ]
  },
  {
    "question": "തിരഞ്ഞെടുത്ത രണ്ടോ അതിലധികമോ സെല്ലുകളെ ഒരൊറ്റ സെല്ലായി സംയോജിപ്പിക്കാൻ ഉപയോഗിക്കുന്ന ടേബിൾ ഫോർമാറ്റിംഗ് ഉപകരണം ഏതാണ്?",
    "options": [
      { "text": "Split Cells", "isCorrect": false },
      { "text": "Merge Cells", "isCorrect": true },
      { "text": "Columns After", "isCorrect": false },
      { "text": "Rows Above", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു ഖണ്ഡികയുടെ മധ്യത്തിലുള്ള ഒരു വാക്യം പ്രമാണത്തിൻ്റെ അവസാനത്തിലേക്ക് മാറ്റാൻ ആഗ്രഹിക്കുന്നു. ഇതിനായി ഉപയോഗിക്കേണ്ട രണ്ട് കീബോർഡ് കുറുക്കുവഴികൾ (ക്രമത്തിൽ) ഏതാണ്?",
    "options": [
      { "text": "Ctrl+C, Ctrl+V", "isCorrect": false },
      { "text": "To Cut, To Paste", "isCorrect": true },
      { "text": "To Copy, To Cut", "isCorrect": false },
      { "text": "Ctrl+A, Ctrl+S", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു വിദ്യാർത്ഥി തൻ്റെ നീണ്ട റിപ്പോർട്ടിലെ കോളം തലക്കെട്ടുകൾ എല്ലാ പേജുകളിലും ദൃശ്യമാകുന്നുണ്ടെന്ന് ഉറപ്പാക്കേണ്ടതുണ്ട്. പട്ടിക ചേർക്കുമ്പോൾ അവർ ഏത് ഓപ്ഷനാണ് തിരഞ്ഞെടുക്കേണ്ടത്?",
    "options": [
      { "text": "Don't split table over pages", "isCorrect": false },
      { "text": "Repeat heading rows on new pages", "isCorrect": true },
      { "text": "Merge cells", "isCorrect": false },
      { "text": "Center Vertically", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു ബോക്സുള്ള ഖണ്ഡികയുടെ മുകളിലും താഴെയുമുള്ള ബോർഡറുകൾക്ക് ടെക്സ്റ്റിൽ നിന്ന് 0.20 cm ഉം, ഇടത്/വലത് ബോർഡറുകൾക്ക് 0.40 cm ഉം അകലം വേണമെങ്കിൽ, Padding വിഭാഗത്തിൽ എന്ത് ചെയ്യണം?",
    "options": [
      { "text": "'Synchronize' ചെക്ക് ചെയ്ത് 0.40 cm ആയി സജ്ജമാക്കുക.", "isCorrect": false },
      { "text": "'Synchronize' അൺചെക്ക് ചെയ്ത് നാല് വശങ്ങൾക്കും മൂല്യങ്ങൾ സ്വമേധയാ സജ്ജമാക്കുക.", "isCorrect": true },
      { "text": "'Before Text Indent' 0.40 cm ആയി സജ്ജമാക്കുക.", "isCorrect": false },
      { "text": "'Line Arrangement' 0.20 cm ആയി സജ്ജമാക്കുക.", "isCorrect": false }
    ]
  },
  {
    "question": "ചാപ്റ്റർ ശീർഷകം **വലത്** പേജുകളിലും വിഷയത്തിൻ്റെ പേര് **ഇടത്** പേജുകളിലും ദൃശ്യമാകണമെന്ന് ഒരു അധ്യാപിക ആഗ്രഹിക്കുന്നു. Header ചേർത്ത ശേഷം, ഈ സവിശേഷത പ്രവർത്തനക്ഷമമാക്കുന്നതിനുള്ള പ്രധാന ഘട്ടം എന്താണ്?",
    "options": [
      { "text": "'View → Page Layout' ഓപ്ഷൻ ഉപയോഗിക്കുക.", "isCorrect": false },
      { "text": "'Same content on Left and Right Pages' ബോക്സ് അൺചെക്ക് ചെയ്യുക.", "isCorrect": true },
      { "text": "ലൈൻ സ്പേസിംഗ് 'Double' ആയി സജ്ജമാക്കുക.", "isCorrect": false },
      { "text": "ഹെഡറിൽ 'Before Text Indent' ഓപ്ഷൻ ഉപയോഗിക്കുക.", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു ഉപയോക്താവ് സെമിനാർ പേപ്പർ തയ്യാറാക്കുകയാണ്, മുഴുവൻ ഖണ്ഡികയും പ്രധാന മാർജിനിൽ നിന്ന് $0.40\ cm$ അകന്ന് ആരംഭിക്കണമെന്ന് ആഗ്രഹിക്കുന്നു. ഏത് ഇൻഡൻ്റ് സെറ്റിംഗ് ആണ് ക്രമീകരിക്കേണ്ടത്?",
    "options": [
      { "text": "First Line Indent", "isCorrect": false },
      { "text": "After Text Indent", "isCorrect": false },
      { "text": "Padding", "isCorrect": false },
      { "text": "Before Text Indent", "isCorrect": true }
    ]
  },
  {
    "question": "രണ്ട് ഖണ്ഡികകളെ സ്ഥിരമായ $0.10\ cm$ അകലം നൽകി വേർതിരിക്കാൻ ഒരു ഉപയോക്താവ് ആഗ്രഹിക്കുന്നു. ഏത് ഖണ്ഡികാ ഫോർമാറ്റിംഗ് ഉപകരണം ഉപയോഗിക്കണം?",
    "options": [
      { "text": "Set Line Spacing to 1.15", "isCorrect": false },
      { "text": "Increase Paragraph Spacing", "isCorrect": true },
      { "text": "First Line Indent", "isCorrect": false },
      { "text": "Line Arrangement", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു പട്ടികയിലെ നിലവിൽ തിരഞ്ഞെടുത്ത കോളത്തിന് **ഇടതുവശത്ത്** ഒരു പുതിയ കോളം ചേർക്കാൻ, ഏത് ടേബിൾ ഫോർമാറ്റിംഗ് ഉപകരണം ഉപയോഗിക്കണം?",
    "options": [
      { "text": "Columns After", "isCorrect": false },
      { "text": "Rows Above", "isCorrect": false },
      { "text": "Columns Before", "isCorrect": true },
      { "text": "Merge Cells", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു വിദ്യാർത്ഥി അബദ്ധത്തിൽ ഒരു വലിയ ടെക്സ്റ്റ് ഭാഗം ഡിലീറ്റ് ചെയ്തു. പിശക് ഉടൻ തിരുത്തുന്നതിനായി വിദ്യാർത്ഥി ഉപയോഗിക്കേണ്ട കീബോർഡ് കുറുക്കുവഴി ഏതാണ്?",
    "options": [
      { "text": "Ctrl+S (To Save)", "isCorrect": false },
      { "text": "Ctrl+V (To Paste)", "isCorrect": false },
      { "text": "Ctrl+Z (To Undo)", "isCorrect": true },
      { "text": "Ctrl+X (To Cut)", "isCorrect": false }
    ]
  },
  {
    "question": "ചുറ്റും ഒറ്റ വരി ബോർഡറും പച്ച പശ്ചാത്തലവുമുള്ള ഒരു വാക്യം സൃഷ്ടിക്കാൻ, Paragraph ഫോർമാറ്റിംഗ് വിൻഡോ ഉപയോഗിച്ച് ചെയ്യേണ്ട രണ്ട് ഫോർമാറ്റിംഗ് പ്രവർത്തനങ്ങൾ ഏതാണ്?",
    "options": [
      { "text": "Area tab → Colour, കൂടാതെ Borders tab → Line Style.", "isCorrect": true },
      { "text": "Indents & Spacing tab → Before Text, കൂടാതെ Text Flow tab → Hyphenation.", "isCorrect": false },
      { "text": "Outline & List tab → List Style, കൂടാതെ Alignment tab → Justified.", "isCorrect": false },
      { "text": "Header and Footer settings → Background.", "isCorrect": false }
    ]
  },
  {
    "question": "പ്രമാണത്തിൻ്റെ പ്രധാന തലക്കെട്ട് പേജിൻ്റെ മധ്യഭാഗത്ത് വരാൻ ഒരു ഉപയോക്താവിന് ആവശ്യമുണ്ട്. ഫോർമാറ്റിംഗ് ടൂൾബാറിലെ ഏത് അലൈൻമെൻ്റ് ഉപകരണം ആവശ്യമാണ്?",
    "options": [
      { "text": "Align Left", "isCorrect": false },
      { "text": "Align Center", "isCorrect": true },
      { "text": "Align Right", "isCorrect": false },
      { "text": "Justified", "isCorrect": false }
    ]
  },
  {
    "question": "മൗസ് ഉപയോഗിച്ച് പട്ടിക കോളങ്ങൾ ക്രമീകരിക്കുമ്പോൾ, പോയിൻ്റർ രണ്ട് തലയുള്ള അമ്പായി മാറിയ ശേഷം ഉപയോക്താവ് ചെയ്യേണ്ട അന്തിമ പ്രവർത്തനം എന്താണ്?",
    "options": [
      { "text": "ഡിഫോൾട്ട് വീതി സജ്ജമാക്കാൻ ഡബിൾ ക്ലിക്ക് ചെയ്യുക.", "isCorrect": false },
      { "text": "വീതി ക്രമീകരിക്കാൻ ക്ലിക്കുചെയ്ത് വലിച്ചിടുക.", "isCorrect": true },
      { "text": "കോളം വിഭജിക്കാൻ Ctrl അമർത്തി ക്ലിക്ക് ചെയ്യുക.", "isCorrect": false },
      { "text": "കോൺടെക്സ്റ്റ് മെനു തുറക്കാൻ റൈറ്റ് ക്ലിക്ക് ചെയ്യുക.", "isCorrect": false }
    ]
  },
  {
    "question": "ആദ്യമായി ഒരു ഫയൽ സേവ് ചെയ്യുന്നതിന് ഏത് മെനു ഓപ്ഷനാണ് ഉപയോഗിക്കേണ്ടത്?",
    "options": [
      { "text": "File → Print", "isCorrect": false },
      { "text": "File → Save As", "isCorrect": true },
      { "text": "File → Export", "isCorrect": false },
      { "text": "Edit → Save", "isCorrect": false }
    ]
  },
  {
    "question": "ഖണ്ഡികാ ഫോർമാറ്റിംഗിൽ **Before Text Indent** ഉം **First Line Indent** ഉം തമ്മിലുള്ള പ്രധാന വ്യത്യാസം എന്താണ്?",
    "options": [
      { "text": "Before Text Indent വലതുവശത്തെ സ്പേസിംഗ് മാത്രം ക്രമീകരിക്കുന്നു, First Line Indent ഇടതുവശത്തെ സ്പേസിംഗ് ക്രമീകരിക്കുന്നു.", "isCorrect": false },
      { "text": "Before Text Indent മുഴുവൻ ഖണ്ഡികയുടെയും മാർജിനിൽ നിന്നുള്ള അകലം ക്രമീകരിക്കുന്നു, First Line Indent ആദ്യ വരിയുടെ അകലം മാത്രം ക്രമീകരിക്കുന്നു.", "isCorrect": true },
      { "text": "Before Text Indent മുകളിലെ മാർജിൻ ക്രമീകരിക്കുന്നു, First Line Indent താഴത്തെ മാർജിൻ ക്രമീകരിക്കുന്നു.", "isCorrect": false },
      { "text": "Before Text Indent ശീർഷകങ്ങളിൽ ബാധകമാക്കുന്നു, First Line Indent അടിക്കുറിപ്പുകളിൽ ബാധകമാക്കുന്നു.", "isCorrect": false }
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
