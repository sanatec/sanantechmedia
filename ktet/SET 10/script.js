document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
  {
    "q": "Which of the following is/are suitable to identify children with learning disability?",
    "options": ["Observation", "Diagnostic test", "Achievement test", "All the above"],
    "correct": 3
  },
  {
    "q": "The Psychologist who added the concept of reinforcement to learning theory:",
    "options": ["Watson", "Pavlov", "Skinner", "Kohler"],
    "correct": 2
  },
  {
    "q": "A test which helps to find out the learning difficulties of children, so as to follow remedial measures is called:",
    "options": ["Achievement test", "Diagnostic test", "Intelligence test", "Standardized test"],
    "correct": 1
  },
  {
    "q": "The seventh standard student, Naveen has clear memory about his visit to a Zoo when he was a small child. He clearly remembers the animals and birds. This is an example of",
    "options": ["Sensory memory", "Short term memory", "Episodic memory", "Procedural memory"],
    "correct": 2
  },
  {
    "q": "In which of the following category 'Down Syndrome' includes?",
    "options": ["Visual impairment", "Hearing impairment", "Learning disability", "Mental retardation"],
    "correct": 3
  },
  {
    "q": "Which of the following acts as a major factor in the socialization of a child at the age level 6 to 12 years?",
    "options": ["Family", "Peer group", "Society", "Relatives"],
    "correct": 1
  },
  {
    "q": "Karthik is not good at studies. But he is the school champion in athletics. Which type of intelligence is more prominent in Karthik, according to the theory of multiple intelligence?",
    "options": ["Physical intelligence", "Bodily Kinesthetic intelligence", "Naturalistic intelligence", "Interpersonal intelligence"],
    "correct": 1
  },
  {
    "q": "According to Allport, which traits determine the personality of a person?",
    "options": ["Cardinal traits, primary traits, secondary traits", "Central traits, primary traits, secondary traits", "Cardinal traits, central traits, secondary traits", "Primary traits, secondary and tertiary traits"],
    "correct": 2
  },
  {
    "q": "Which stage is termed as 'Chimpanzee Stage' in language development by Vygotsky?",
    "options": ["Non cognitive linguistic stage", "Non linguistic cognitive stage", "Linguistic cognitive stage", "None of these"],
    "correct": 1
  },
  {
    "q": "Perception, Abstraction and generalization are the three processes included in ...",
    "options": ["Concept formation", "Analytic thinking", "Deductive thinking", "Problem solving"],
    "correct": 0
  },
  {
    "q": "Athual, who came late in the class, did not involve in learning process. He was biting his nail, scratching his head and rocking his legs. His behaviours depict:",
    "options": ["Emotional disturbances", "Physical illness", "Disobedience to the teacher", "Learning disability"],
    "correct": 0
  },
  {
    "q": "Which of the following is NOT a speech disorder?",
    "options": ["Lisping", "Baby talk", "Stuttering", "Stuttering and stammering"],
    "correct": 1
  },
  {
    "q": "Which of the following is NOT suitable for children with special needs?",
    "options": ["Adapted teaching manual", "Remedial teaching activities", "Enriched learning materials", "Support from resource teachers"],
    "correct": 2
  },
  {
    "q": "A student questions a teacher, who showed bias. According to Kohlberg's theory of moral development, which level of moral development does he belong?",
    "options": ["Pre-conventional morality", "Conventional morality", "Post-conventional morality", "None of these"],
    "correct": 2
  },
  {
    "q": "Which of the following is NOT included in individual difference?",
    "options": ["Physical difference", "Difference in family environment", "Difference in attitude and interest", "Difference in aptitude"],
    "correct": 1
  },
  {
    "q": "'A thirteen year old can be taught Algebra, but a two year old can't be.' Which factor related to development is lacking here?",
    "options": ["Heredity", "Environment", "Maturation", "Learning"],
    "correct": 2
  },
  {
    "q": "'This is the method of solving a problem by following a set of rules and ways'. Which of the following problem-solving strategy is described here?",
    "options": ["Trial and error method", "Algorithm", "Heuristics", "Deductive method"],
    "correct": 1
  },
  {
    "q": "According to Piaget's theory of cognitive development, in which stage the child acquires the ability to reach at conclusions by considering more than one characteristic?",
    "options": ["Sensory motor stage", "Pre-operational stage", "Concrete operational stage", "Formal operational stage"],
    "correct": 2
  },
  {
    "q": "'Each intellectual activity involves a general factor and a specific factor which belong to it alone.' Who formulated this theory?",
    "options": ["Guilford", "Thurston", "Spearman", "Cattell"],
    "correct": 2
  },
  {
    "q": "Arunima Singha, a native of Uttar Pradesh, who lost one of her legs in a train accident, conquered the Mount Everest. To which of the following adjustment mechanism can this achievement be related?",
    "options": ["Rationalisation", "Compensation", "Sublimation", "Identification"],
    "correct": 1
  },
  {
    "q": "Which of the following activity is more suitable for the development of creativity?",
    "options": ["Write a story based on the given picture", "Prepare an essay about rivers of Kerala", "Find out the LCM and HCF of two numbers", "Write a note about the reproduction in plants"],
    "correct": 0
  },
  {
    "q": "Which type of reinforcement is reflected in the behaviour of a child, who learns lessons in order to avoid his mother's scolding?",
    "options": ["Positive reinforcement", "Negative reinforcement", "Punishment", "Continuous reinforcement"],
    "correct": 1
  },
  {
    "q": "Which method of teaching among the following does assure maximum involvement of the learner?",
    "options": ["Lecture", "Brainstorming", "Group discussion", "Project"],
    "correct": 3
  },
  {
    "q": "Kiran's wish is to become a pilot in future. He talks about his wish to his friends and family members. According to Erikson's psycho social theory, in which stage does Kiran belong?",
    "options": ["Intimacy Vs isolation", "Industry Vs inferiority", "Trust Vs mistrust", "Identity Vs identity confusion"],
    "correct": 3
  },
  {
    "q": "Development of an individual occurs from near to far region. Which of the following principles of development explain this fact?",
    "options": ["Principle of continuity", "Principle of individual difference", "Cephalo-caudal principle", "Proximo-distal principle"],
    "correct": 3
  },
  {
    "q": "The most appropriate sequence in teaching is:",
    "options": ["Teaching - Planning - Reflection - Feedback", "Reflection - Teaching - Planning - Feedback", "Planning - Teaching - Reflection - Feedback", "Planning - Teaching - Feedback - Reflection"],
    "correct": 2
  },
  {
    "q": "According to need theory of motivation, which of the following needs represents deficiency need?",
    "options": ["Cognitive need", "Aesthetic need", "Self-actualisation", "Safety need"],
    "correct": 3
  },
  {
    "q": "Who among the following studied the emotional development of infants?",
    "options": ["Albert Bandura", "Catherine Bridges", "Ivan Pavlov", "Wilhelm Wundt"],
    "correct": 1
  },
  {
    "q": "The belief that, 'boys should always become leaders in class', can be considered as:",
    "options": ["Gender role", "Gender stereotype", "Gender identity", "Gender discrimination"],
    "correct": 1
  },
  {
    "q": "The act that supports the rights of differently abled persons is:",
    "options": ["RTE Act", "RTI Act", "PWD Act", "POSCO Act"],
    "correct": 2
  },
  {
    "q": "The theory that emphasizes the psychodynamics of mind in determining the personality of an individual is known as:",
    "options": ["Psychosocial theory", "Psychodynamic theory", "Psychoanalytic theory", "Trait theory"],
    "correct": 2
  },
  {
    "q": "5E in constructivist classroom implications denotes:",
    "options": ["Engage, Explain, Explore, Ensure and Evaluate", "Evaluate, Engrave, Explore, Explain and Explode", "Engage, Explore, Explain, Elaborate and Evaluate", "Engrave, Explain, Explore, Ensure and Evaluate"],
    "correct": 2
  },
  {
    "q": "According to the cognitive development theorists, the child can understand the basic principles of causal thinking and scientific experimentation in a period of:",
    "options": ["Infancy", "Early adolescence", "Concrete operations", "Later adolescence"],
    "correct": 3
  },
  {
    "q": "Effective way of Communication in classroom teaching is:",
    "options": ["Circular", "Linear", "Branched", "Reciprocal"],
    "correct": 3
  },
  {
    "q": "Rewards and punishment is considered to be:",
    "options": ["Extrinsic motivation", "Intrinsic motivation", "Extra motivation", "Intelligent motivation"],
    "correct": 0
  },
  {
    "q": "The term critical pedagogy is coined by",
    "options": ["Henry Giroux", "Michel Apple", "Ira Shor", "John Dewey"],
    "correct": 0
  },
  {
    "q": "Which is the pedagogical movement that values experience over learning facts at the expense of understanding what is being taught?",
    "options": ["Transnational education", "Creative creatures", "Creative commons", "Progressive education"],
    "correct": 3
  },
  {
    "q": "Home based Education is recommended for those children who are:",
    "options": ["Bedridden", "Imprisoned", "Bored", "Abused"],
    "correct": 0
  },
  {
    "q": "Constructivism is one of the contributions of:",
    "options": ["Piaget", "John Dewey", "Paulo Freire", "Vygotsky"],
    "correct": 0
  },
  {
    "q": "When a stimulus similar to the conditional stimulus also elicits a response is the theory developed by:",
    "options": ["Aristotle", "Ivan Pavlov", "Plato", "Ivan Illich"],
    "correct": 1
  },
  {
    "q": "Which is the digital learning material repository suitable for your classroom?",
    "options": ["Samagra", "Sampoorna", "Samanwaya", "Swayam"],
    "correct": 3
  },
  {
    "q": "One of the major barriers for successful inclusive education is:",
    "options": ["Teacher's attitude", "Lack of student's readiness", "Lack of parent's readiness to send children to school", "Inappropriate classroom environment"],
    "correct": 0
  },
  {
    "q": "The best way to nourish critical thinking in a classroom environment is:",
    "options": ["Behaviourism", "Critical pedagogy", "Machno pedagogy", "Self-sustaining"],
    "correct": 1
  },
  {
    "q": "Why does a teacher use learning aids?",
    "options": ["Make the class colorful", "Optimize attainment level of learning outcomes", "Avoid transmission loss", "Encourage the teacher by eliminating stage fright"],
    "correct": 1
  },
  {
    "q": "Diagnostic evaluation strategies are used to assess:",
    "options": ["Learning progress and failures during the teaching learning process", "Levels of achievement at the end of the class", "Performance level at the beginning of the class", "Causes and remedies of persistent learning problems during the course of a class"],
    "correct": 3
  },
  {
    "q": "Education is a property of which list of Indian Constitution?",
    "options": ["Central", "State", "Concurrent", "Scheduled"],
    "correct": 2
  },
  {
    "q": "Curriculum should foster the development of problem-solving skills through the processes of inquiry and discovery. Who is behind this advocacy?",
    "options": ["Jerome Bruner", "Jean Piaget", "Sigmund Freud", "Kurt Lewin"],
    "correct": 0
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
