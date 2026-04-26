document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
  {
    "q": "Which among the following methods can be adopted for the indepth study about a particular student?",
    "options": ["Questionnaire", "Interview", "Case study.", "Sociometry"],
    "correct": 2
  },
  {
    "q": "Which among the following methods can be adopted for the indepth study about a particular student?",
    "options": ["Questionnaire.", "Interview", "Case study", "Sociometry"],
    "correct": 2
  },
  {
    "q": "Arun, a primary school student tries to do his feeding, dressing etc. by himself. According to Erickson's theory, he belongs to the stage of :",
    "options": ["Autonomy vs Shame", "Initiative vs Guilt.", "Identity vs Role", "Industry vs Inferiority"],
    "correct": 0
  },
  {
    "q": "Which one is more suitable for children with special needs?",
    "options": ["Mentally Retarded Children", "Learning Disabled Children.", "Those who for other reasons, deserve more attention and consideration than their peers", "Physically and Mentally Retarded Children"],
    "correct": 2
  },
  {
    "q": "Thought and its by-product knowledge are not self developed. They are formed through the culture and various activities of the society in which the child belongs to. This Vygotskian approach is called",
    "options": ["Behaviouristic approach", "Social constructivistic approach.", "Humanistic approach", "Environmental approach"],
    "correct": 1
  },
  {
    "q": "Initiate actions by identifying one's strength and weaknesses and to utilise the maximum potential to attain self actualisation can be termed in relation to Multiple Intelligence as",
    "options": ["Visual and Spatial Intelligence.", "Naturalistic Intelligence", "Intrapersonal Intelligence", "Interpersonal Intelligence"],
    "correct": 2
  },
  {
    "q": "The ideas and concepts acquired through learning are critically examined by the learner and changes are acquired. This is another type of assessment known as:",
    "options": ["Self assessment", "Assessment as learning.", "Assessment of learning", "Assessment for learning"],
    "correct": 1
  },
  {
    "q": "Which one of the following is the third stage in the need hierarchy theory proposed by Abraham Maslow",
    "options": ["Basic needs", "Love and belongingness.", "Esteem need", "Self actualisation"],
    "correct": 2
  },
  {
    "q": "Thinking about one's own thinking is called:",
    "options": ["Cognition", "Dual Cognition", "Mega Cognition.", "Meta Cognition"],
    "correct": 3
  },
  {
    "q": "Which of the following is not a factor defining a matured personality proposed by Gordon Allport? (Note: Assuming 'Willard Allport' is a typo for Gordon Allport)",
    "options": ["Extended self", "Self regulation", "Warm relationship with self", "Philosophy of life"],
    "correct": 1
  },
  {
    "q": "Which type of questions is used to measure the language capability, depth of reading and systematic presentation of ideas of a learner ?",
    "options": ["Short answer type questions", "Essay type questions", "Multiple choice questions.", "Objective type questions"],
    "correct": 1
  },
  {
    "q": "In the study of personality in post humanistic perspectives personal judgement of worthiness that is expressed in the attitudes the individual holds towards himself/herself is termed as:",
    "options": ["Ideal self", "Real self", "Self actualisation.", "Self esteem"],
    "correct": 3
  },
  {
    "q": "Compared to intelligent quotient (IQ), the emotional quotient (EQ) has an important role in the success of the life of people. This was opined by:",
    "options": ["Howard Gardner", "Daniel Goleman.", "Albert Binet", "E.L. Thorndike"],
    "correct": 1
  },
  {
    "q": "Based on Gestalt theory, learning of children is most effective through:",
    "options": ["repeated learning method.", "problem solving method.", "trial and error method", "conditioning method"],
    "correct": 1
  },
  {
    "q": "The mental age of Della is greater than her chronological age. Then which of the following is true?",
    "options": ["The I.Q. of Della is more than 100.", "The I.Q. of Della is 100.", "The I.Q. of Della is less than 100.", "None of these"],
    "correct": 0
  },
  {
    "q": "Jean Piaget opined that 'Schemas' are concepts which evolve and develop through 2 complementary systems. Name those 2 systems.",
    "options": ["accommodation and disequilibrium", "accommodation and equilibrium", "assimilation and accommodation.", "assimilation and equilibrium"],
    "correct": 2
  },
  {
    "q": "Persons subjective thoughts and stands are given much importance in the person centered theory. This theory was proposed by:",
    "options": ["Karl Rogers", "Abraham Maslow.", "Willard Allport", "R.B. Cattell"],
    "correct": 0
  },
  {
    "q": "Integrated curriculum is most suitable for:",
    "options": ["Post doctoral level", "Post graduation level", "Higher secondary stage.", "Secondary stage"],
    "correct": 3
  },
  {
    "q": "Hearing impaired students use which language for communication?",
    "options": ["Machine language.", "Sign language", "Brail", "All the above"],
    "correct": 1
  },
  {
    "q": "Which of the following is not true with regard to development?",
    "options": ["Development is based on maturation and learning", "Development is possible only through growth", "Development is qualitative", "Development is continuous"],
    "correct": 1
  },
  {
    "q": "Teacher showed a picture in the classroom. Then told the students to suggest a suitable title to it. Which particular potential of the learner is assessed by the teacher here?",
    "options": ["Creativity.", "Attitude", "Memory", "Interest"],
    "correct": 0
  },
  {
    "q": "A youtube channel was started by the general education department during the covid period for promoting the learning of children with special needs. What is the name of this youtube channel?",
    "options": ["Ganany Prabha.", "Jyothirmayi", "Victers", "Changathi"],
    "correct": 3
  },
  {
    "q": "Which of the following is not a quantitative assessment method?",
    "options": ["Survey", "Questionnaire.", "Interview", "Observation"],
    "correct": 3
  },
  {
    "q": "Which of the following may not be the approach of teacher to the students with hearing impairment?",
    "options": ["Should be seated in front row", "Speaking by gazing at the face of student", "Ask too many questions", "Ensure the working of hearing aid."],
    "correct": 2
  },
  {
    "q": "Which of the following is not included under disability as per PWD Act 1995?",
    "options": ["Blindness", "Hearing impairments.", "Leprosy cured", "Dwarfism"],
    "correct": 3
  },
  {
    "q": "Which of the following regarding development is not correct?",
    "options": ["Development is continuous.", "Development is orderly", "Development proceeds from specific to general", "Development is cumulative"],
    "correct": 2
  },
  {
    "q": "Juvenile delinquency is most revealed during:",
    "options": ["Infancy", "Early childhood.", "Adolescence", "Later childhood"],
    "correct": 2
  },
  {
    "q": "Personality is the dynamic organisation within the individual of those psycho-physical systems that determine his characteristic behaviour and thought. Whose definition is this?",
    "options": ["Allport", "Maslow", "Erikson.", "Eysenck"],
    "correct": 0
  },
  {
    "q": "Which of the following is not a characteristic of a good test?",
    "options": ["Objectivity", "Validity", "High score.", "Reliability"],
    "correct": 2
  },
  {
    "q": "Occasional redness of eye, disability to identify colours, unable to identify distant objects and watery eye are the symptoms of:",
    "options": ["Autism", "Cerebral Palsy", "Visual impairment.", "Learning disability"],
    "correct": 2
  },
  {
    "q": "A student blames question paper and learning process as a reason for his low score in examination. This is an example for:",
    "options": ["Sublimation", "Rationalization", "Projection", "Regression"],
    "correct": 1
  },
  {
    "q": "Which is the stage of development characterised as 'Genital Stage' by Freud?",
    "options": ["Infancy", "Childhood", "Neonatal period.", "Adolescence"],
    "correct": 3
  },
  {
    "q": "Which stage of cognitive development is characterised by 'irreversibility' in thinking?",
    "options": ["Sensory motor stage", "Pre-operational stage", "Concrete operational stage.", "Pre natal stage"],
    "correct": 1
  },
  {
    "q": "The diseased condition due to production of too little or no haemoglobin is:",
    "options": ["Multiple sclerosis", "Haemophilia", "Thalassemia", "Parkinson's disease."],
    "correct": 2
  },
  {
    "q": "Which among the following is a stage under pre conventional morality level?",
    "options": ["Punishment and obedience orientation.", "Interpersonal concordance orientation", "Law and order orientation", "Universal ethical principle orientation"],
    "correct": 0
  },
  {
    "q": "Raju is thinking that he is not living up to expectation. This would be described by Adler as:",
    "options": ["low self realization", "an Adlerian complex.", "inferiority complex", "low actualization"],
    "correct": 2
  },
  {
    "q": "According to David McClelland, the three important needs related to motivation are: (1) Need for affiliation (2) Need for power (3) Need for achievement (4) Need for food",
    "options": ["(1), (2) and (3)", "(1), (2) and (4)", "(1), (3) and (4)", "(2), (3) and (4)"],
    "correct": 0
  },
  {
    "q": "'Social experiences contribute to better learning situations'. This concept was developed by:",
    "options": ["Albert Bandura", "Ivan Pavlov", "Abraham Maslow.", "Erikson"],
    "correct": 0
  },
  {
    "q": "Allport believed that traits could be organized into three levels.",
    "options": ["Primary, secondary, tertiary", "Cognitive, emotional, physiological", "Id, ego, superego", "Cardinal, central, secondary."],
    "correct": 3
  },
  {
    "q": "One gets worried about his exams and started to study. This is an example of:",
    "options": ["Learning", "Explanation.", "Maturation", "Motivation"],
    "correct": 3
  },
  {
    "q": "In learning disabilities the name of mathematics disorder is:",
    "options": ["Dyspraxia", "Dystocia", "Dyscalculia.", "Dysgraphia"],
    "correct": 2
  },
  {
    "q": "Who argued that adolescent is the period of storm and stress?",
    "options": ["Erick Erickson.", "Stanley hall", "Freud", "B.F. Skinner"],
    "correct": 1
  },
  {
    "q": "A duckling is following its mother as well as other moving object. This is an example of:",
    "options": ["Practice", "Imprinting.", "Instinct", "Motivation"],
    "correct": 1
  },
  {
    "q": "Which of the following is an example of prenatal cause of intellectual disability when there is a significant period without oxygen during or immediately after delivery?",
    "options": ["Anoxia", "Pneumonia.", "Autism", "Sleep apnea"],
    "correct": 0
  },
  {
    "q": "Relatively permanent change in behavior due to experience is called:",
    "options": ["Maturation", "Motivation", "Experience.", "Learning"],
    "correct": 3
  },
  {
    "q": "Which one of the following statements about humanistic theories is false?",
    "options": ["They do not provide insight into evil side of human behavior", "Biased because of individualistic values", "They are based on studies of people with psychological disorders", "They are difficult to test empirically."],
    "correct": 2
  },
  {
    "q": "The MMPI is used to measure:",
    "options": ["The big five traits", "Personality and psychological disorder.", "Leadership potential", "Unconscious drives"],
    "correct": 1
  },
  {
    "q": "Locking a door is an example of:",
    "options": ["Verbal chaining", "Psycho chaining", "Motion chaining", "Psycho motor chaining."],
    "correct": 3
  },
  {
    "q": "Emotional intelligence is a term created by:",
    "options": ["Weschler", "Peter Salovey and John Mayer.", "Daniel Goleman", "Philips Zimbardo"],
    "correct": 1
  },
  {
    "q": "The second wave in psychology was?",
    "options": ["Psychoanalysis", "Humanism", "Learning.", "Behaviourism"],
    "correct": 1
  }  
    ];

    let current = 0, score = 0;
    let userAnswers = new Array(quizData.length).fill(null);
    let isMockMode = true; // Defaulting to Mock Mode

    const elements = {
        modeBtn: document.getElementById('mode-btn'),
        qText: document.getElementById('question-text'),
        optionsGrid: document.getElementById('options-grid'),
        nextBtn: document.getElementById('next-btn'),
        prevBtn: document.getElementById('back-btn'),
        progressBar: document.getElementById('progress-bar'),
        qNum: document.getElementById('question-number'),
        scoreBadge: document.getElementById('score-badge'),
        resModal: document.getElementById('result-modal'),
        soundCorrect: document.getElementById('sound-correct'),
        soundWrong: document.getElementById('sound-wrong')
    };

    // Mode Toggle Logic
    elements.modeBtn.onclick = () => {
        isMockMode = !isMockMode;
        if (isMockMode) {
            elements.modeBtn.textContent = "Change to Study Mode";
            elements.modeBtn.className = "btn-mode-mock";
        } else {
            elements.modeBtn.textContent = "Change to Mock Test Mode";
            elements.modeBtn.className = "btn-mode-study";
        }
        resetQuiz();
    };

    function resetQuiz() {
        current = 0; score = 0;
        userAnswers = new Array(quizData.length).fill(null);
        elements.scoreBadge.textContent = "Score: 0";
        elements.scoreBadge.style.visibility = isMockMode ? "visible" : "hidden";
        loadQuestion();
    }

    function loadQuestion() {
        const data = quizData[current];
        const hasAnswered = userAnswers[current] !== null;

        elements.qText.textContent = data.q;
        elements.qNum.textContent = `Question ${current + 1}/${quizData.length}`;
        elements.progressBar.style.width = `${((current + 1) / quizData.length) * 100}%`;
        elements.optionsGrid.innerHTML = '';

        data.options.forEach((opt, i) => {
            const btn = document.createElement('button');
            btn.className = 'opt-btn';
            btn.textContent = opt;

            if (!isMockMode) {
                // Study Mode: Immediate Correct Answer
                if (i === data.correct) btn.classList.add('correct');
            } else if (hasAnswered) {
                // Mock Mode: Feedback after submission
                btn.disabled = true;
                if (i === data.correct) btn.classList.add('correct');
                if (userAnswers[current] === i && i !== data.correct) btn.classList.add('wrong');
                if (userAnswers[current] === i) btn.classList.add('selected');
            } else {
                btn.onclick = () => {
                    Array.from(elements.optionsGrid.children).forEach(b => b.classList.remove('selected'));
                    btn.classList.add('selected');
                    elements.nextBtn.disabled = false;
                };
            }
            elements.optionsGrid.appendChild(btn);
        });

        if (!isMockMode) {
            elements.nextBtn.textContent = (current === quizData.length - 1) ? "Finish Study" : "Next";
            elements.nextBtn.disabled = false;
        } else {
            elements.nextBtn.textContent = hasAnswered ? (current === quizData.length - 1 ? "Finish" : "Next") : "Submit";
            elements.nextBtn.disabled = !hasAnswered;
        }
        elements.prevBtn.disabled = current === 0;
    }

    function handleAction() {
        if (isMockMode) {
            if (userAnswers[current] === null) {
                const selected = Array.from(elements.optionsGrid.children).findIndex(b => b.classList.contains('selected'));
                userAnswers[current] = selected;
                if (selected === quizData[current].correct) {
                    score++; elements.soundCorrect.play();
                } else { elements.soundWrong.play(); }
                elements.scoreBadge.textContent = `Score: ${score}`;
                loadQuestion();
            } else if (current < quizData.length - 1) {
                current++; loadQuestion();
            } else { showResults(); }
        } else {
            if (current < quizData.length - 1) { current++; loadQuestion(); }
            else { location.reload(); }
        }
    }

    function showResults() {
        const percent = Math.round((score / quizData.length) * 100);
        document.getElementById('res-total').textContent = quizData.length;
        document.getElementById('res-correct').textContent = score;
        document.getElementById('res-wrong').textContent = quizData.length - score;
        document.getElementById('result-percent').textContent = percent + "%";
        elements.resModal.style.display = 'flex';
    }

    elements.nextBtn.onclick = handleAction;
    elements.prevBtn.onclick = () => { if (current > 0) { current--; loadQuestion(); } };

    loadQuestion();
});
