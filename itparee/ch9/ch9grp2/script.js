document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "ഒരു ടേബിളിലെ വിദ്യാർത്ഥികളെ 'Class_ID' ഉപയോഗിച്ച് മറ്റൊരു ടേബിളിലെ ക്ലാസുകളുമായി ബന്ധിപ്പിക്കുന്നത് എന്ത് പേരിൽ അറിയപ്പെടുന്നു?",
    "options": [
      { "text": "ഇൻഡെക്സിംഗ് (Indexing)", "isCorrect": false },
      { "text": "റഫറൻസിംഗ് (Referencing)", "isCorrect": false },
      { "text": "ഫോറിൻ കീ റിലേഷൻഷിപ്പ് (Foreign key relationship)", "isCorrect": true },
      { "text": "പ്രൈമറി കീ റിലേഷൻഷിപ്പ് (Primary key relationship)", "isCorrect": false }
    ],
    "correctAnswer": "Foreign key relationship"
  },
  {
    "question": "ജീവനക്കാർ ജോലിയിൽ പ്രവേശിച്ച തീയതി (joining date) സംഭരിക്കുന്നതിന് ഏറ്റവും അനുയോജ്യമായ ഡാറ്റാടൈപ്പ് (datatype) ഏതാണ്?",
    "options": [
      { "text": "നമ്പർ (Number)", "isCorrect": false },
      { "text": "ടെക്സ്റ്റ് (Text)", "isCorrect": false },
      { "text": "ഇമേജ് (Image)", "isCorrect": false },
      { "text": "ഡേറ്റ് (Date)", "isCorrect": true }
    ],
    "correctAnswer": "Date"
  },
  {
    "question": "നിങ്ങൾ ഒരു 'Book' ടേബിൾ ഉണ്ടാക്കുകയും ഓരോ 'Book_ID'-യും തനതായ (unique) ഒന്നായിരിക്കണമെന്ന് ആഗ്രഹിക്കുകയും ചെയ്യുന്നുവെങ്കിൽ, നിങ്ങൾ അതിനെ ________ ആയി സജ്ജീകരിക്കണം.",
    "options": [
      { "text": "പ്രൈമറി കീ (Primary key)", "isCorrect": true },
      { "text": "കോമ്പോസിറ്റ് കീ (Composite key)", "isCorrect": false },
      { "text": "സെക്കൻഡറി കീ (Secondary key)", "isCorrect": false },
      { "text": "ഫോറിൻ കീ (Foreign key)", "isCorrect": false }
    ],
    "correctAnswer": "Primary key"
  },
  {
    "question": "ഒരു വിദ്യാർത്ഥിയുടെ ഫോട്ടോ ഡാറ്റാബേസിൽ സംഭരിക്കുന്നതിന് ഏത് ഡാറ്റാടൈപ്പ് ഉപയോഗിക്കും?",
    "options": [
      { "text": "ഡേറ്റ് (Date)", "isCorrect": false },
      { "text": "നമ്പർ (Number)", "isCorrect": false },
      { "text": "ടെക്സ്റ്റ് (Text)", "isCorrect": false },
      { "text": "ഇമേജ് (Image)", "isCorrect": true }
    ],
    "correctAnswer": "Image"
  },
  {
    "question": "SQLite-ൽ, ഒരു SQL ക്വറി പ്രവർത്തിപ്പിക്കാൻ നിങ്ങൾ ഏത് ടാബ് (tab) ആണ് ഉപയോഗിക്കുക?",
    "options": [
      { "text": "Execute SQL", "isCorrect": true },
      { "text": "Edit Table", "isCorrect": false },
      { "text": "Database Structure", "isCorrect": false },
      { "text": "Browse Data", "isCorrect": false }
    ],
    "correctAnswer": "Execute SQL"
  },
  {
    "question": "ഒരു ടേബിളിലെ ഒരു ഫീൽഡിനെ മറ്റൊരു ടേബിളുമായി ബന്ധിപ്പിക്കുന്ന പ്രക്രിയയെ ________ എന്ന് വിളിക്കുന്നു.",
    "options": [
      { "text": "മാപ്പിംഗ് (Mapping)", "isCorrect": false },
      { "text": "ഫിൽട്ടറിംഗ് (Filtering)", "isCorrect": false },
      { "text": "റഫറൻസിംഗ് (Referencing)", "isCorrect": true },
      { "text": "ഇൻഡെക്സിംഗ് (Indexing)", "isCorrect": false }
    ],
    "correctAnswer": "Referencing"
  },
  {
    "question": "ലൈബ്രറി മേധാവി ഒരു നിശ്ചിത തീയതിക്ക് ശേഷം ഇഷ്യൂ ചെയ്ത പുസ്തകങ്ങൾ കണ്ടെത്താൻ SQL ഉപയോഗിക്കുകയാണെങ്കിൽ, ഏത് ക്ലോസ് (clause) ആണ് ആവശ്യം?",
    "options": [
      { "text": "where Issue_Date>'2025-01-01'", "isCorrect": true },
      { "text": "order by Date", "isCorrect": false },
      { "text": "between Issue_Date 2025", "isCorrect": false },
      { "text": "limit 2025", "isCorrect": false }
    ],
    "correctAnswer": "where Issue_Date>'2025-01-01'"
  },
  {
    "question": "നിങ്ങളുടെ ഡാറ്റാബേസ് ഒരേ ജീവനക്കാരന്റെ പേര് ആവർത്തിച്ച് കാണിക്കുകയാണെങ്കിൽ, നിങ്ങൾക്ക് ഏത് ഡിസൈൻ പ്രശ്നമാണുള്ളത്?",
    "options": [
      { "text": "ഇന്റഗ്രിറ്റി (Integrity)", "isCorrect": false },
      { "text": "ഡാറ്റാ റിഡൻഡൻസി (Data redundancy)", "isCorrect": true },
      { "text": "ഡാറ്റാ നഷ്ടം (Data loss)", "isCorrect": false },
      { "text": "നോർമലൈസേഷൻ (Normalization)", "isCorrect": false }
    ],
    "correctAnswer": "Data redundancy"
  },
  {
    "question": "'Employees' എന്ന ടേബിളിൽ സംഭരിച്ചിട്ടുള്ള എല്ലാ രേഖകളും (records) കണ്ടെത്താൻ ഏത് SQL സ്റ്റേറ്റ്മെന്റാണ് ഉപയോഗിക്കുന്നത്?",
    "options": [
      { "text": "find all Employees", "isCorrect": false },
      { "text": "select * from Employees", "isCorrect": true },
      { "text": "display Employees()", "isCorrect": false },
      { "text": "show Employees", "isCorrect": false }
    ],
    "correctAnswer": "select * from Employees"
  },
  {
    "question": "ഒരു ടേബിളിലെ മൊത്തം രേഖകളുടെ (records) എണ്ണം നൽകുന്ന SQL ഫംഗ്ഷൻ ഏതാണ്?",
    "options": [
      { "text": "average()", "isCorrect": false },
      { "text": "total()", "isCorrect": false },
      { "text": "sum()", "isCorrect": false },
      { "text": "count()", "isCorrect": true }
    ],
    "correctAnswer": "count()"
  },
  {
    "question": "ക്ലാസ് 10-ലെ 80-ൽ കൂടുതൽ മാർക്ക് നേടിയ എല്ലാ വിദ്യാർത്ഥികളെയും കണ്ടെത്താൻ നിങ്ങൾക്ക് ________ ഉപയോഗിക്കാം.",
    "options": [
      { "text": "find Students Marks>80", "isCorrect": false },
      { "text": "get Students Score>80", "isCorrect": false },
      { "text": "select * from Students where Class=10 and Marks>80", "isCorrect": true },
      { "text": "show Students from 10", "isCorrect": false }
    ],
    "correctAnswer": "select * from Students where Class=10 and Marks>80"
  },
  {
    "question": "ഒരു ഡാറ്റാബേസ് രൂപകൽപ്പന ചെയ്യുമ്പോൾ, വലിയ ടേബിളുകളെ ചെറിയ ബന്ധപ്പെട്ട ടേബിളുകളായി വിഭജിക്കുന്നതിനെ ________ എന്ന് വിളിക്കുന്നു.",
    "options": [
      { "text": "സെഗ്മെന്റേഷൻ (Segmentation)", "isCorrect": false },
      { "text": "നോർമലൈസേഷൻ (Normalization)", "isCorrect": true },
      { "text": "സോർട്ടിംഗ് (Sorting)", "isCorrect": false },
      { "text": "ക്ലാസിഫിക്കേഷൻ (Classification)", "isCorrect": false }
    ],
    "correctAnswer": "Normalization"
  },
  {
    "question": "50000-ൽ കൂടുതൽ ശമ്പളമുള്ള അധ്യാപകരുടെ പേരുകൾ പ്രദർശിപ്പിക്കാൻ സഹായിക്കുന്ന SQL ക്വറി ഏതാണ്?",
    "options": [
      { "text": "select Teacher_Name from Teachers where Salary>50000", "isCorrect": true },
      { "text": "list Teachers>50000", "isCorrect": false },
      { "text": "find Teacher Salary>50000", "isCorrect": false },
      { "text": "show Salary=50000", "isCorrect": false }
    ],
    "correctAnswer": "select Teacher_Name from Teachers where Salary>50000"
  },
  {
    "question": "ഒരു ലൈബ്രേറിയൻ ഏതെല്ലാം പുസ്തകങ്ങളാണ് ഇഷ്യൂ ചെയ്തതെന്ന് പരിശോധിക്കാൻ DBMS ഉപയോഗിക്കുന്നു. DBMS-ന്റെ ഏത് സവിശേഷതയാണ് ഇതിന് സഹായിക്കുന്നത്?",
    "options": [
      { "text": "ഫോർമാറ്റിംഗ് (Formatting)", "isCorrect": false },
      { "text": "സോർട്ടിംഗ് (Sorting)", "isCorrect": false },
      { "text": "ക്വറിയീംഗ് (Querying)", "isCorrect": true },
      { "text": "പെയിന്റിംഗ് (Painting)", "isCorrect": false }
    ],
    "correctAnswer": "Querying"
  },
  {
    "question": "ഡാറ്റ ആവർത്തിക്കാതെ ഒരു വിദ്യാർത്ഥി ഡാറ്റാബേസ് രൂപകൽപ്പന ചെയ്യാൻ നിങ്ങൾ ആഗ്രഹിക്കുന്നുവെങ്കിൽ, നിങ്ങൾ ഏത് ആശയം പ്രയോഗിക്കണം?",
    "options": [
      { "text": "ഡ്യൂപ്ലിക്കേഷൻ (Duplication)", "isCorrect": false },
      { "text": "നോർമലൈസേഷൻ (Normalization)", "isCorrect": true },
      { "text": "ഡാറ്റാ സോർട്ടിംഗ് (Data Sorting)", "isCorrect": false },
      { "text": "റിഡൻഡൻസി (Redundancy)", "isCorrect": false }
    ],
    "correctAnswer": "Normalization"
  },
  {
    "question": "ഡാറ്റ ചേർക്കാനോ, എഡിറ്റ് ചെയ്യാനോ, ഇല്ലാതാക്കാനോ ഉപയോക്താക്കളെ അനുവദിക്കുന്ന DBMS-ന്റെ ഘടകം ഏതാണ്?",
    "options": [
      { "text": "സ്കീമ (Schema)", "isCorrect": false },
      { "text": "ഡാറ്റാ ഡെഫനിഷൻ ലാംഗ്വേജ് (Data Definition Language)", "isCorrect": false },
      { "text": "ക്വറി പ്രോസസ്സർ (Query Processor)", "isCorrect": false },
      { "text": "ഡാറ്റാ മാനിപുലേഷൻ ലാംഗ്വേജ് (Data Manipulation Language)", "isCorrect": true }
    ],
    "correctAnswer": "Data Manipulation Language"
  },
  {
    "question": "ഒരു ടേബിളിലെ 'Department_ID'-യുടെ മൂല്യം മറ്റൊരു ടേബിളിലെ 'Department_ID'-യുമായി പൊരുത്തപ്പെടുന്നുവെങ്കിൽ, അത് എന്തിനെയാണ് പ്രതിനിധീകരിക്കുന്നത്?",
    "options": [
      { "text": "ഡ്യൂപ്ലിക്കേഷൻ (Duplication)", "isCorrect": false },
      { "text": "റെക്കോർഡ് ലയിപ്പിക്കൽ (Record merge)", "isCorrect": false },
      { "text": "ഡാറ്റാടൈപ്പ് (Data type)", "isCorrect": false },
      { "text": "ടേബിളുകൾ തമ്മിലുള്ള ബന്ധം (Relationship between tables)", "isCorrect": true }
    ],
    "correctAnswer": "Relationship between tables"
  },
  {
    "question": "ടേബിളുകളിലുടനീളമുള്ള ബന്ധപ്പെട്ട രേഖകൾ സ്ഥിരതയുള്ളതാണെന്ന് (consistent) ഉറപ്പാക്കുന്ന DBMS ആശയം ഏതാണ്?",
    "options": [
      { "text": "റഫറൻഷ്യൽ ഇന്റഗ്രിറ്റി (Referential integrity)", "isCorrect": true },
      { "text": "സോർട്ടിംഗ് (Sorting)", "isCorrect": false },
      { "text": "ഡാറ്റാ റിഡൻഡൻസി (Data redundancy)", "isCorrect": false },
      { "text": "ഡാറ്റാ ലിങ്കിംഗ് (Data linking)", "isCorrect": false }
    ],
    "correctAnswer": "Referential integrity"
  },
  {
    "question": "ഒരു DBMS ഉപയോക്താവിന് ഫോമുകളിലൂടെ ഡാറ്റ എളുപ്പത്തിൽ അപ്ഡേറ്റ് ചെയ്യാൻ കഴിയുമെങ്കിൽ, ഈ സവിശേഷതയെ ________ എന്ന് വിളിക്കുന്നു.",
    "options": [
      { "text": "ഡാറ്റാ മാനിപുലേഷൻ (Data Manipulation)", "isCorrect": true },
      { "text": "ഡാറ്റാ വാലിഡേഷൻ (Data Validation)", "isCorrect": false },
      { "text": "ഡാറ്റാ ഡിസൈൻ (Data Design)", "isCorrect": false },
      { "text": "ഡാറ്റാ മൈനിംഗ് (Data Mining)", "isCorrect": false }
    ],
    "correctAnswer": "Data Manipulation"
  },
  {
    "question": "പാരന്റ് ടേബിളിലെ (parent table) ഒരു രേഖ ഇല്ലാതാക്കുകയും എന്നാൽ അതുമായി ബന്ധപ്പെട്ട രേഖ ചൈൽഡ് ടേബിളിൽ (child table) നിലനിൽക്കുകയും ചെയ്താൽ, ഏത് നിയമമാണ് ലംഘിക്കപ്പെടുന്നത്?",
    "options": [
      { "text": "റഫറൻഷ്യൽ ഇന്റഗ്രിറ്റി (Referential integrity)", "isCorrect": true },
      { "text": "പ്രൈമറി കീ (Primary key)", "isCorrect": false },
      { "text": "നോർമലൈസേഷൻ (Normalization)", "isCorrect": false },
      { "text": "ഡാറ്റാ റിഡൻഡൻസി (Data redundancy)", "isCorrect": false }
    ],
    "correctAnswer": "Referential integrity"
  },
  {
    "question": "ഒരു ഹോസ്പിറ്റൽ ഡാറ്റാബേസിൽ, അപ്പോയിന്റ്മെന്റ്സ് ടേബിളിലെ Doctor_ID-യെ ഡോക്ടർസ് ടേബിളിലെ Doctor_ID-യുമായി ബന്ധിപ്പിക്കുന്നത് ________ കാണിക്കുന്നു.",
    "options": [
      { "text": "യൂണീക്ക് മാപ്പിംഗ് (Unique mapping)", "isCorrect": false },
      { "text": "പ്രൈമറി കീ ബന്ധം (Primary key relation)", "isCorrect": false },
      { "text": "ഫോറിൻ കീ ബന്ധം (Foreign key relation)", "isCorrect": true },
      { "text": "ഇൻഡെക്സ് ബന്ധം (Index relation)", "isCorrect": false }
    ],
    "correctAnswer": "Foreign key relation"
  },
  {
    "question": "സ്കൂൾ ഡാറ്റാബേസിലെ ഓരോ വിദ്യാർത്ഥിക്കും തനതായ അഡ്മിഷൻ നമ്പർ (unique admission number) ഉണ്ടെന്ന് ഉറപ്പാക്കുന്നത് ഏത് കീയാണ്?",
    "options": [
      { "text": "പ്രൈമറി കീ (Primary key)", "isCorrect": true },
      { "text": "ആൾട്ടർനേറ്റ് കീ (Alternate key)", "isCorrect": false },
      { "text": "ഇൻഡെക്സ് (Index)", "isCorrect": false },
      { "text": "ഫോറിൻ കീ (Foreign key)", "isCorrect": false }
    ],
    "correctAnswer": "Primary key"
  },
  {
    "question": "ഒരേ മൊബൈൽ നമ്പറുകൾ ആവർത്തിച്ച് നൽകുന്നത് തടയാൻ, എന്ത് നിയന്ത്രണമാണ് (constraint) പ്രയോഗിക്കേണ്ടത്?",
    "options": [
      { "text": "ചെക്ക് (Check)", "isCorrect": false },
      { "text": "ഡിഫോൾട്ട് (Default)", "isCorrect": false },
      { "text": "യൂണീക്ക് കൺസ്ട്രെയിന്റ് (Unique constraint)", "isCorrect": true },
      { "text": "ഫോറിൻ കീ (Foreign key)", "isCorrect": false }
    ],
    "correctAnswer": "Unique constraint"
  },
  {
    "question": "ഒരു അക്കൗണ്ടന്റ് ₹10,000-ന് മുകളിലുള്ള എല്ലാ പേയ്മെന്റുകളും ഫിൽട്ടർ ചെയ്യാൻ DBMS ഉപയോഗിക്കുകയാണെങ്കിൽ, ഏത് SQL കീവേഡ് ആണ് അത്യാവശ്യം?",
    "options": [
      { "text": "where", "isCorrect": true },
      { "text": "from", "isCorrect": false },
      { "text": "group", "isCorrect": false },
      { "text": "order", "isCorrect": false }
    ],
    "correctAnswer": "where"
  },
  {
    "question": "പേര് 'A'-ൽ തുടങ്ങുന്ന എല്ലാ അധ്യാപകരെയും കണ്ടെത്താൻ, നിങ്ങൾ ഏത് SQL പാറ്റേൺ ആണ് ഉപയോഗിക്കുന്നത്?",
    "options": [
      { "text": "like 'A%'", "isCorrect": true },
      { "text": "match A*", "isCorrect": false },
      { "text": "match A@", "isCorrect": false },
      { "text": "search A", "isCorrect": false }
    ],
    "correctAnswer": "like 'A%'"
  },
  {
    "question": "Player ടേബിളിലെ എല്ലാ രേഖകളും പ്രദർശിപ്പിക്കാൻ ഉപയോഗിക്കുന്ന SQL കമാൻഡ് ഏതാണ്?",
    "options": [
      { "text": "select * from Player", "isCorrect": true },
      { "text": "show Player()", "isCorrect": false },
      { "text": "get Player all", "isCorrect": false },
      { "text": "find * Player", "isCorrect": false }
    ],
    "correctAnswer": "select * from Player"
  },
  {
    "question": "Player ടേബിളിൽ നിന്ന് സച്ചിൻ ടെണ്ടുൽക്കറുടെ ആകെ റൺസ് (Total Runs) പ്രദർശിപ്പിക്കുന്ന SQL ക്വറി ഏതാണ്?",
    "options": [
      { "text": "select Total_Runs from Player where Player_Name='Sachin Tendulkar'", "isCorrect": true },
      { "text": "select * from Player where Player_Name='Sachin Tendulkar'", "isCorrect": false },
      { "text": "find runs Sachin Tendulkar", "isCorrect": false },
      { "text": "list Total_Runs Sachin", "isCorrect": false }
    ],
    "correctAnswer": "select Total_Runs from Player where Player_Name='Sachin Tendulkar'"
  },
  {
    "question": "300-ൽ കൂടുതൽ റൺസ് നേടിയ എല്ലാ കളിക്കാരുടെയും പേരുകൾ കാണിക്കാൻ, ഏത് SQL സ്റ്റേറ്റ്മെന്റ് ആണ് ശരി?",
    "options": [
      { "text": "select Player_Name from Player where Total_Runs>300", "isCorrect": true },
      { "text": "select Player where Total_Runs>300", "isCorrect": false },
      { "text": "show runs>300 Player", "isCorrect": false },
      { "text": "list Player over 300", "isCorrect": false }
    ],
    "correctAnswer": "select Player_Name from Player where Total_Runs>300"
  },
  {
    "question": "200-നും 400-നും ഇടയിൽ റൺസ് നേടിയ എല്ലാ കളിക്കാരെയും പ്രദർശിപ്പിക്കുന്ന ക്വറി ഏതാണ്?",
    "options": [
      { "text": "select Player_Name from Player where Total_Runs between 200 and 400", "isCorrect": true },
      { "text": "select Player_Name from Player where Total_Runs>200 and <400", "isCorrect": false },
      { "text": "select Player where Total_Runs range(200,400)", "isCorrect": false },
      { "text": "show Player_Name where Total_Runs limit 200,400", "isCorrect": false }
    ],
    "correctAnswer": "select Player_Name from Player where Total_Runs between 200 and 400"
  },
  {
    "question": "രാജ്യം C103-ൽ നിന്നുള്ള കളിക്കാരുടെ Player_ID-യും Player_Name-ഉം പ്രദർശിപ്പിക്കാൻ ഉപയോഗിക്കുക:",
    "options": [
      { "text": "select Player_ID, Player_Name from Player where Country_ID='C103'", "isCorrect": true },
      { "text": "show Player_ID, Player_Name C103", "isCorrect": false },
      { "text": "get all Player C103", "isCorrect": false },
      { "text": "select Player where Country='C103'", "isCorrect": false }
    ],
    "correctAnswer": "select Player_ID, Player_Name from Player where Country_ID='C103'"
  },
  {
    "question": "C103-ലോ C105-ലോ ഉൾപ്പെടുന്ന എല്ലാ കളിക്കാരെയും വീണ്ടെടുക്കുന്ന SQL കമാൻഡ് ഏതാണ്?",
    "options": [
      { "text": "select Player_ID, Player_Name from Player where Country_ID in ('C103','C105')", "isCorrect": true },
      { "text": "select * from Player where Country_ID='C103' and 'C105'", "isCorrect": false },
      { "text": "get Player in C103 and C105", "isCorrect": false },
      { "text": "show Player by Country_ID list", "isCorrect": false }
    ],
    "correctAnswer": "select Player_ID, Player_Name from Player where Country_ID in ('C103','C105')"
  },
  {
    "question": "‘സനത് ജയസൂര്യ’ എന്ന കളിക്കാരന്റെ രാജ്യത്തിന്റെ പേര് പ്രദർശിപ്പിക്കുന്ന ക്വറി ഏതാണ്?",
    "options": [
      { "text": "select Country_Name from Country where Country_ID=(select Country_ID from Player where Player_Name='Sanath Jayasuriya')", "isCorrect": true },
      { "text": "select Country_ID from Player where Player_Name='Sanath Jayasuriya'", "isCorrect": false },
      { "text": "select Player_Name from Country where Player='Sanath Jayasuriya'", "isCorrect": false },
      { "text": "find Country='Sanath Jayasuriya'", "isCorrect": false }
    ],
    "correctAnswer": "select Country_Name from Country where Country_ID=(select Country_ID from Player where Player_Name='Sanath Jayasuriya')"
  },
  {
    "question": "400-ൽ കുറവ് റൺസ് നേടിയ കളിക്കാരുടെ പേരുകൾ ലഭിക്കാൻ, ഏത് സ്റ്റേറ്റ്മെന്റ് ആണ് ശരി?",
    "options": [
      { "text": "select Player_Name from Player where Total_Runs<400", "isCorrect": true },
      { "text": "select Player_Name where Total_Runs under 400", "isCorrect": false },
      { "text": "list Player_Name<400", "isCorrect": false },
      { "text": "show Player with Total_Runs<400", "isCorrect": false }
    ],
    "correctAnswer": "select Player_Name from Player where Total_Runs<400"
  },
  {
    "question": "2011 ലോകകപ്പിലെ മികച്ച കളിക്കാരനെ (best player) വീണ്ടെടുക്കാൻ കഴിയുന്ന SQL ക്വറി ഏതാണ്?",
    "options": [
      { "text": "select Best_Player from Matches where Year=2011", "isCorrect": true },
      { "text": "select Winner from Matches where Best_Player=2011", "isCorrect": false },
      { "text": "show Best_Player Year=2011", "isCorrect": false },
      { "text": "find Player where Year=2011", "isCorrect": false }
    ],
    "correctAnswer": "select Best_Player from Matches where Year=2011"
  },
  {
    "question": "Player ടേബിളിലെ എല്ലാ വിവരങ്ങളും ലിസ്റ്റ് ചെയ്യുന്ന SQL ക്വറി ഏതാണ്?",
    "options": [
      { "text": "select * from Player", "isCorrect": true },
      { "text": "select Player_Name from Player", "isCorrect": false },
      { "text": "list Player details()", "isCorrect": false },
      { "text": "get all fields Player", "isCorrect": false }
    ],
    "correctAnswer": "select * from Player"       
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
