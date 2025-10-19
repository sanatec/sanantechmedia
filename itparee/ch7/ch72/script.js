document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "ഒരു ദുരന്ത സാധ്യത മേഖലാ ഭൂപടത്തിൻ്റെ (Disaster Risk Area Map) പ്രധാന ലക്ഷ്യം എന്താണ്?",
    "options": [
      { "text": "ഭൂകമ്പങ്ങൾ ഉണ്ടാകുന്ന കൃത്യമായ സമയം പ്രവചിക്കാൻ", "isCorrect": false },
      { "text": "ഒരു പ്രദേശത്തിൻ്റെ ദുർബലതകളും (vulnerabilities) അപകടസാധ്യതകളും (potential hazards) എടുത്തു കാണിക്കാൻ", "isCorrect": true },
      { "text": "തത്സമയ ട്രാഫിക് വിവരങ്ങൾ നൽകാൻ", "isCorrect": false },
      { "text": "ഒരു രാജ്യത്തിൻ്റെ രാഷ്ട്രീയ അതിരുകൾ കാണിക്കാൻ", "isCorrect": false }
    ]
  },
  {
    "question": "അന്താരാഷ്ട്ര ദുരന്തസാധ്യത കുറയ്ക്കൽ ദിനം (International Day for Disaster Risk Reduction) ആചരിക്കുന്നത്:",
    "options": [
      { "text": "ഒക്ടോബർ 13", "isCorrect": true },
      { "text": "ജൂൺ 5", "isCorrect": false },
      { "text": "ഏപ്രിൽ 22", "isCorrect": false },
      { "text": "ഡിസംബർ 10", "isCorrect": false }
    ]
  },
  {
    "question": "താഴെ പറയുന്നവയിൽ സൗജന്യവും ഓപ്പൺ സോഴ്‌സുമായ ഭൂമിശാസ്ത്ര വിവര സിസ്റ്റം (GIS) സോഫ്റ്റ്‌വെയർ ഏതാണ്?",
    "options": [
      { "text": "Arc GIS", "isCorrect": false },
      { "text": "Map Info Pro", "isCorrect": false },
      { "text": "ക്വാണ്ടം GIS (QGIS)", "isCorrect": true },
      { "text": "Google Earth Pro", "isCorrect": false }
    ]
  },
  {
    "question": "'DEM' എന്നതിൻ്റെ പൂർണ്ണരൂപം എന്താണ്?",
    "options": [
      { "text": "ഡിജിറ്റൽ എലവേഷൻ മോഡൽ (Digital Elevation Model)", "isCorrect": true },
      { "text": "ഡാറ്റാ ഇവാലുവേഷൻ മെത്തേഡ്", "isCorrect": false },
      { "text": "ഡിജിറ്റൽ എൻവയോൺമെൻ്റൽ മാപ്പ്", "isCorrect": false },
      { "text": "ഡിസാസ്റ്റർ എമർജൻസി മാനേജ്‌മെൻ്റ്", "isCorrect": false }
    ]
  },
  {
    "question": "QGIS-ൽ, ഒരു 'റാസ്റ്റർ ലെയർ' (raster layer) സാധാരണയായി ഉപയോഗിക്കുന്നത് ഏതുതരം ഡാറ്റയ്ക്കാണ്?",
    "options": [
      { "text": "മണ്ണിടിച്ചിൽ സംഭവിച്ച പോയിൻ്റ് ലൊക്കേഷനുകൾ", "isCorrect": false },
      { "text": "റോഡുകളെ പ്രതിനിധീകരിക്കുന്ന വരകൾ (Lines)", "isCorrect": false },
      { "text": "ഭൂമിയുടെ ഭാഗങ്ങളെ പ്രതിനിധീകരിക്കുന്ന പോളിഗണുകൾ (Polygons)", "isCorrect": false },
      { "text": "ഉയരത്തെ പ്രതിനിധീകരിക്കുന്ന ഡിജിറ്റൽ ചിത്രങ്ങൾ", "isCorrect": true }
    ]
  },
  {
    "question": "ഇന്ത്യൻ സ്കൂളുകൾക്കായി രൂപകൽപ്പന ചെയ്ത ഓൺലൈൻ ഭൂമിശാസ്ത്ര വിവര സംവിധാന പോർട്ടൽ അറിയപ്പെടുന്നത്:",
    "options": [
      { "text": "ക്വാണ്ടം GIS", "isCorrect": false },
      { "text": "സ്‌കൂൾ GIS (School GIS)", "isCorrect": true },
      { "text": "ഗ്രാസ് GIS", "isCorrect": false },
      { "text": "മാപ്പ് ഇൻഫോ പ്രോ", "isCorrect": false }
    ]
  },
  {
    "question": "QGIS-ൽ, ഒരു ലെയറുമായി ബന്ധിപ്പിച്ച എല്ലാ ആട്രിബ്യൂട്ട് ഡാറ്റകളും (attribute data) കാണുന്നതിന്, നിങ്ങൾ എന്തുചെയ്യണം?",
    "options": [
      { "text": "ഐഡൻ്റിഫൈ ഫീച്ചേഴ്സ് ടൂൾ ഉപയോഗിക്കുക.", "isCorrect": false },
      { "text": "ലെയറിൽ റൈറ്റ്-ക്ലിക്കുചെയ്ത് 'Open Attribute Table' തിരഞ്ഞെടുക്കുക.", "isCorrect": true },
      { "text": "ബ്രൗസർ പാനലിലെ ലെയറിൽ ഇരട്ട-ക്ലിക്കുചെയ്യുക.", "isCorrect": false },
      { "text": "Project → Properties ലേക്ക് പോകുക.", "isCorrect": false }
    ]
  },
  {
    "question": "താഴെ പറയുന്നവയിൽ അധ്യായത്തിൽ ലിസ്റ്റ് ചെയ്തിട്ടുള്ള മണ്ണിടിച്ചിലിൻ്റെ സാധാരണ കാരണങ്ങളിൽ **ഉൾപ്പെടാത്തത്** ഏതാണ്?",
    "options": [
      { "text": "ഒരു പ്രദേശത്തിൻ്റെ ചരിവ് (Slope)", "isCorrect": false },
      { "text": "പാറയുടെ ഘടന (Rock structure)", "isCorrect": false },
      { "text": "ഭൂവിനിയോഗം (Land use)", "isCorrect": false },
      { "text": "കാറ്റിൻ്റെ വേഗത (Wind speed)", "isCorrect": true }
    ]
  },
  {
    "question": "അധ്യായത്തിൽ QGIS-ലേക്ക് ചേർത്ത മണ്ണിടിച്ചിൽ ഡാറ്റയുടെ ഫയൽ ഫോർമാറ്റ് ഇതായിരുന്നു:",
    "options": [
      { "text": "ഒരു JPEG ഇമേജ് (.jpg)", "isCorrect": false },
      { "text": "ഒരു ജിയോപാക്കേജ് ഫയൽ (.gpkg)", "isCorrect": false },
      { "text": "ഒരു കോമ സെപ്പറേറ്റഡ് വാല്യൂ ഫയൽ (.csv)", "isCorrect": true },
      { "text": "ഒരു ടെക്സ്റ്റ് ഫയൽ (.txt)", "isCorrect": false }
    ]
  },
  {
    "question": "Geometry CRS 'EPSG:4326' എന്തിനെയാണ് സൂചിപ്പിക്കുന്നത്?",
    "options": [
      { "text": "WGS 84 കോർഡിനേറ്റ് സിസ്റ്റം", "isCorrect": true },
      { "text": "UTM കോർഡിനേറ്റ് സിസ്റ്റം", "isCorrect": false },
      { "text": "ലാംബെർട്ട് കോൺഫോർമൽ കോണിക് സിസ്റ്റം", "isCorrect": false },
      { "text": "സ്ഫെറിക്കൽ മെർക്കേറ്റർ സിസ്റ്റം", "isCorrect": false }
    ]
  },
  {
    "question": "QGIS-ലെ 'Processing Toolbox'-ൻ്റെ പ്രാഥമിക പങ്ക് എന്താണ്?",
    "options": [
      { "text": "ഇൻ്റർഫേസിൻ്റെ നിറം മാറ്റാൻ", "isCorrect": false },
      { "text": "ജിയോസ്പേഷ്യൽ അൽഗോരിതമുകളിലേക്കും വിശകലന ടൂളുകളിലേക്കും പ്രവേശനം നൽകാൻ", "isCorrect": true },
      { "text": "പ്രോജക്റ്റ് സേവിംഗും തുറക്കുന്നതും കൈകാര്യം ചെയ്യാൻ", "isCorrect": false },
      { "text": "പുതിയ ബേസ് മാപ്പുകൾ ചേർക്കാൻ", "isCorrect": false }
    ]
  },
  {
    "question": "QGIS-ൽ ഒരു ഡിലിമിറ്റഡ് ടെക്സ്റ്റ് ലെയർ (CSV പോലുള്ളവ) ചേർക്കുന്നതിന്, നിങ്ങൾ മെനുവിലൂടെ എവിടെയാണ് പോകേണ്ടത്?",
    "options": [
      { "text": "Layer → Add Layer → Add Raster Layer", "isCorrect": false },
      { "text": "Layer → Add Layer → Add Mesh Layer", "isCorrect": false },
      { "text": "Layer → Add Layer → Add Vector Layer", "isCorrect": false },
      { "text": "Layer → Add Layer → Add Delimited Text Layer", "isCorrect": true }
    ]
  },
  {
    "question": "QGIS-ലെ 'Identify Features' ടൂൾ എന്തിനാണ് ഉപയോഗിക്കുന്നത്?",
    "options": [
      { "text": "ഒരു ലെയറിൽ നിന്ന് തിരഞ്ഞെടുത്ത ഫീച്ചറുകൾ ഇല്ലാതാക്കാൻ.", "isCorrect": false },
      { "text": "മാപ്പിലെ ഒരു ഫീച്ചറിൽ ക്ലിക്കുചെയ്ത് അതിൻ്റെ ഡാറ്റ കാണാൻ.", "isCorrect": true },
      { "text": "ഒരു ലെയറിൻ്റെ പ്രൊജക്ഷൻ മാറ്റാൻ.", "isCorrect": false },
      { "text": "രണ്ട് വ്യത്യസ്ത ലെയറുകൾ ഒരുമിച്ച് ചേർക്കാൻ.", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു മാപ്പിലെ ദുരന്തസാധ്യതയുള്ള പ്രദേശങ്ങൾ നിരീക്ഷിക്കുന്നതിൻ്റെ പ്രധാന ലക്ഷ്യം എന്തിനെ സഹായിക്കാനാണ്?",
    "options": [
      { "text": "മുൻകരുതലുകൾ, ആസൂത്രണം, പ്രതികരണം, അവബോധം (Precautions, Planning, Response, and Awareness)", "isCorrect": true },
      { "text": "പ്രവചനം, ലാഭം, പ്രോത്സാഹനം, പരസ്യം", "isCorrect": false },
      { "text": "നിർമ്മാണം, വാണിജ്യം, ആശയവിനിമയം", "isCorrect": false },
      { "text": "വിനോദം, പര്യവേക്ഷണം, വിദ്യാഭ്യാസം", "isCorrect": false }
    ]
  },
  {
    "question": "മണ്ണിടിച്ചിൽ വിശകലനത്തിൻ്റെ പശ്ചാത്തലത്തിൽ, 'ചരിവ്' (slope) എന്നത് സൂചിപ്പിക്കുന്നത്:",
    "options": [
      { "text": "ഒരു കുന്നിലെ സസ്യജാലങ്ങളുടെ തരം.", "isCorrect": false },
      { "text": "പ്രദേശത്തിൻ്റെ കുത്തനെയുള്ള അവസ്ഥ അല്ലെങ്കിൽ ചരിവ്.", "isCorrect": true },
      { "text": "മണ്ണിൻ്റെ രാസഘടന.", "isCorrect": false },
      { "text": "ഒരു പ്രദേശത്തിന് ലഭിക്കുന്ന മഴയുടെ അളവ്.", "isCorrect": false }
    ]
  },
  {
    "question": "മണ്ണിടിച്ചിൽ ലൊക്കേഷനുകൾക്കായി 'Latitude', 'Longitude' കോളങ്ങളുള്ള ഒരു CSV ഫയൽ നിങ്ങളുടെ പക്കലുണ്ട്. QGIS-ലേക്ക് ഇത് ചേർക്കുമ്പോൾ, 'Geometry Definition' എന്തായി സജ്ജീകരിക്കണം?",
    "options": [
      { "text": "വരയുടെ കോർഡിനേറ്റുകൾ", "isCorrect": false },
      { "text": "പോളിഗണൻ്റെ കോർഡിനേറ്റുകൾ", "isCorrect": false },
      { "text": "പോയിൻ്റ് കോർഡിനേറ്റുകൾ", "isCorrect": true },
      { "text": "ജ്യാമിതി ഇല്ല", "isCorrect": false }
    ]
  },
  {
    "question": "നിങ്ങൾ ഒരു പ്രദേശത്തിനായി ഒരു DEM ഫയൽ ചേർത്തു, പക്ഷേ മാപ്പ് ഒരൊറ്റ നിറത്തിലാണ്, നിങ്ങൾക്ക് ചരിവുകൾ വേർതിരിച്ചറിയാൻ കഴിയുന്നില്ല. വ്യത്യസ്ത ചരിവ് കോണുകൾ ദൃശ്യവൽക്കരിക്കുന്നതിനുള്ള അടുത്ത ഘട്ടം എന്താണ്?",
    "options": [
      { "text": "ലെയർ ഇല്ലാതാക്കി വീണ്ടും ചേർക്കുക.", "isCorrect": false },
      { "text": "ലെയറിൽ റൈറ്റ്-ക്ലിക്കുചെയ്യുക, Properties തുറക്കുക, symbology 'Singleband pseudocolor' എന്ന് മാറ്റുക.", "isCorrect": true },
      { "text": "'Identify Features' ടൂൾ എല്ലാ പിക്സലുകളിലും ഉപയോഗിക്കുക.", "isCorrect": false },
      { "text": "ചരിവുകൾ സ്വയം അടയാളപ്പെടുത്താൻ 'Add New Label' ടൂൾ ഉപയോഗിക്കുക.", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു ലെജൻഡും (Legend) ശീർഷകവും ഉൾപ്പെടുന്ന പ്രിൻ്റ് ചെയ്യാൻ കഴിയുന്ന ഒരു മാപ്പ് ലേഔട്ട് (map layout) സൃഷ്ടിക്കാൻ, നിങ്ങൾ QGIS-ലെ ഏത് സവിശേഷതയാണ് ഉപയോഗിക്കേണ്ടത്?",
    "options": [
      { "text": "പ്രോസസ്സിംഗ് ടൂൾബോക്സ്", "isCorrect": false },
      { "text": "ബ്രൗസർ പാനൽ", "isCorrect": false },
      { "text": "പുതിയ പ്രിൻ്റ് ലേഔട്ട് (New Print Layout)", "isCorrect": true },
      { "text": "ഡാറ്റാ സോഴ്സ് മാനേജർ", "isCorrect": false }
    ]
  },
  {
    "question": "മണ്ണിടിച്ചിൽ സാധ്യത വിലയിരുത്തുന്നതിന് ഒരു മലമ്പ്രദേശത്തിൻ്റെ ചരിവ് കണ്ടെത്തേണ്ടതുണ്ടെങ്കിൽ, QGIS-ലെ പ്രവർത്തനങ്ങളുടെ ശരിയായ ക്രമം എന്താണ്?",
    "options": [
      { "text": "റാസ്റ്റർ ലെയർ (DEM) ചേർക്കുക → പ്രോസസ്സിംഗ് ടൂൾബോക്സ് → GDAL → Raster analysis → Slope", "isCorrect": true },
      { "text": "ഡിലിമിറ്റഡ് ടെക്സ്റ്റ് ലെയർ ചേർക്കുക → പ്രോസസ്സിംഗ് ടൂൾബോക്സ് → Vector geometry → Slope", "isCorrect": false },
      { "text": "വെക്റ്റർ ലെയർ ചേർക്കുക → ആട്രിബ്യൂട്ട് ടേബിൾ തുറക്കുക → ചരിവ് കണക്കാക്കുക", "isCorrect": false },
      { "text": "റാസ്റ്റർ ലെയർ (DEM) ചേർക്കുക → Identify Features → ഉയരം രേഖപ്പെടുത്തുക", "isCorrect": false }
    ]
  },
  {
    "question": "'Slope' ടൂൾ പ്രവർത്തിപ്പിച്ച ശേഷം, ഔട്ട്പുട്ട് ഒരു പുതിയ റാസ്റ്റർ ലെയർ ആണ്, അതിലെ ഓരോ സെല്ലിൻ്റെയും മൂല്യം എന്തിനെയാണ് പ്രതിനിധീകരിക്കുന്നത്?",
    "options": [
      { "text": "മീറ്ററിലുള്ള ഉയരം.", "isCorrect": false },
      { "text": "ആസ്പെക്റ്റ് (ചരിവ് അഭിമുഖീകരിക്കുന്ന ദിശ).", "isCorrect": false },
      { "text": "ഡിഗ്രിയിലുള്ള ചരിവിൻ്റെ കോൺ.", "isCorrect": true },
      { "text": "മണ്ണിൻ്റെ തരംതിരിവ്.", "isCorrect": false }
    ]
  },
  {
    "question": "അതിശക്തമായ ചരിവുകളുള്ള പ്രദേശങ്ങളിൽ സ്ഥിതിചെയ്യുന്ന എല്ലാ സ്കൂളുകളും കണ്ടെത്താൻ നിങ്ങൾക്ക് ഒരു ടാസ്ക് ലഭിച്ചു. ഈ വിശകലനം നടത്താൻ നിങ്ങൾക്ക് ആവശ്യമുള്ള രണ്ട് ഡാറ്റാ ലെയറുകൾ ഏതാണ്?",
    "options": [
      { "text": "പ്രദേശത്തിൻ്റെ ചരിവ് മാപ്പും (slope map) സ്കൂൾ ലൊക്കേഷനുകൾ കാണിക്കുന്ന പോയിൻ്റ് ലെയറും.", "isCorrect": true },
      { "text": "മഴയുടെ ഡാറ്റാ മാപ്പും ഭൂവിനിയോഗ മാപ്പും.", "isCorrect": false },
      { "text": "ഒരു ഉപഗ്രഹ ചിത്രവും റോഡ് ശൃംഖല മാപ്പും.", "isCorrect": false },
      { "text": "ഒരു രാഷ്ട്രീയ അതിർത്തി മാപ്പും ജനസാന്ദ്രത മാപ്പും.", "isCorrect": false }
    ]
  },
  {
    "question": "ഒരു ചരിവ് മാപ്പിനായി സിംബോളജി (symbology) കോൺഫിഗർ ചെയ്യുമ്പോൾ, 'Mode' ഓപ്ഷനിൽ 'Equal Interval' തിരഞ്ഞെടുക്കുന്നത് അർത്ഥമാക്കുന്നത്:",
    "options": [
      { "text": "ഓരോ ക്ലാസ്സിലും തുല്യ എണ്ണം പിക്സലുകൾ ഉള്ളതിനെ അടിസ്ഥാനമാക്കിയാണ് കളർ ക്ലാസുകൾ.", "isCorrect": false },
      { "text": "ചരിവ് മൂല്യങ്ങളുടെ പരിധി (ഉദാഹരണത്തിന്, 0-10°, 10-20°) തുല്യ വലുപ്പമുള്ള ഇടവേളകളായി (intervals) തിരിച്ചിരിക്കുന്നു.", "isCorrect": true },
      { "text": "വിവിധ ചരിവ് മൂല്യങ്ങൾക്ക് നിറങ്ങൾ ക്രമരഹിതമായി നൽകുന്നു.", "isCorrect": false },
      { "text": "ശരാശരി ചരിവിൽ നിന്നുള്ള സ്റ്റാൻഡേർഡ് ഡീവിയേഷൻ അടിസ്ഥാനമാക്കിയാണ് വർഗ്ഗീകരണം.", "isCorrect": false }
    ]
  },
  {
    "question": "നിങ്ങൾ ഒരു ചരിവ് മാപ്പ് സൃഷ്ടിക്കുകയും എല്ലാ ലെയർ സ്റ്റൈലുകളും മാപ്പ് വ്യാപ്തിയും ഉൾപ്പെടെയുള്ള മുഴുവൻ QGIS പ്രോജക്റ്റും സംരക്ഷിക്കാൻ ആഗ്രഹിക്കുന്നു. നിങ്ങൾ എന്തുചെയ്യണം?",
    "options": [
      { "text": "മാപ്പ് PDF ആയി എക്സ്പോർട്ട് ചെയ്യുക.", "isCorrect": false },
      { "text": "Project → Save അല്ലെങ്കിൽ Save As... ഉപയോഗിക്കുക.", "isCorrect": true },
      { "text": "ഓരോ ലെയറിനും സ്റ്റൈൽ ഫയൽ വ്യക്തിഗതമായി സംരക്ഷിക്കുക.", "isCorrect": false },
      { "text": "മാപ്പ് കാൻവാസിൻ്റെ സ്ക്രീൻഷോട്ട് എടുക്കുക.", "isCorrect": false }
    ]
  },
  {
    "question": "മാപ്പിൽ നിന്ന് ഒരൊറ്റ മണ്ണിടിച്ചിൽ സംഭവത്തെക്കുറിച്ചുള്ള പ്രത്യേക വിവരങ്ങൾ, അതിൻ്റെ തീയതിയും കാരണവും പോലുള്ളവ, നിങ്ങൾക്ക് ലഭിക്കണമെങ്കിൽ, നിങ്ങൾ എന്തുചെയ്യണം?",
    "options": [
      { "text": "പ്രോജക്റ്റ് പ്രോപ്പർട്ടികൾ നോക്കുക.", "isCorrect": false },
      { "text": "മണ്ണിടിച്ചിൽ ലെയർ തിരഞ്ഞെടുത്ത് 'Identify Features' ടൂൾ ഉപയോഗിച്ച് പോയിൻ്റിൽ ക്ലിക്കുചെയ്യുക.", "isCorrect": true },
      { "text": "പ്രോസസ്സിംഗ് ടൂൾബോക്സ് തുറന്ന് \"List Features\" അൽഗോരിതം പ്രവർത്തിപ്പിക്കുക.", "isCorrect": false },
      { "text": "Layer Rendering ഓപ്ഷനുകൾ പരിശോധിക്കുക.", "isCorrect": false }
    ]
  },
  {
    "question": "സിംബോളജി ടാബിലെ 'Color ramp' ഓപ്ഷൻ എന്തിനാണ് ഉപയോഗിക്കുന്നത്?",
    "options": [
      { "text": "മുഴുവൻ ലെയറിനും ഒരൊറ്റ നിറം നൽകാൻ.", "isCorrect": false },
      { "text": "ഒരു കൂട്ടം മൂല്യങ്ങളെ പ്രതിനിധീകരിക്കുന്നതിന് ഒരു കൂട്ടം നിറങ്ങൾ നൽകാൻ.", "isCorrect": true },
      { "text": "മാപ്പ് കാൻവാസിൻ്റെ പശ്ചാത്തല നിറം മാറ്റാൻ.", "isCorrect": false },
      { "text": "ഫീച്ചറുകളുടെ പേരിനെ അടിസ്ഥാനമാക്കി നിറം നൽകാൻ.", "isCorrect": false }
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
