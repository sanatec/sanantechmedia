document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
  {
    "q": "In the context of education, socialisation means",
    "options": ["Respecting elders in society.", "Adopting and adjusting to social environment", "Always following social norms", "Creating one's own social norms"],
    "correct": 1
  },
  {
    "q": "Learning appropriate sex role is a developmental task in",
    "options": ["Adulthood", "Baby hood", "Later child hood", "Adolescence"],
    "correct": 3
  },
  {
    "q": "Adolescence stage is also known as",
    "options": ["toy stage", "Pseudo maturity stage.", "Dynamic stage", "None of these"],
    "correct": 1
  },
  {
    "q": "A teacher always selects learning strategies in a particular class by conducting activities in which various senses are to be utilised at a time. what is your assumption regarding the class",
    "options": ["There are some gifted children in the class", "In the last unit test the result was not good.", "Teacher is interested to present attractive activities", "There are some children having various types of disabilities."],
    "correct": 3
  },
  {
    "q": "Any subject can be taught to any child in an intellectually honest way at any stage of development - who is of this opinion?",
    "options": ["Vygodsky", "Piaget"],
    "correct": 0
  },
  {
    "q": "You are working as a teacher in a high school run by the government with class charge of standard IX. Which of the following will be selected in maintaining the discipline in classroom?",
    "options": ["Identify the details of the problems and place them for discussion in the class PTA meeting.", "Conduct the programmes according to the need and interest of the pupils", "Repeatedly use the sayings on the importance of discipline", "Taking strict disciplinary actions."],
    "correct": 1
  },
  {
    "q": "Which among the following is not an activity of a teacher as a mentor?",
    "options": ["Year planning", "Role modelling", "Listening and advising.", "Proper motivation"],
    "correct": 0
  },
  {
    "q": "In your class, there is a student who stutters. Which of the following special steps will you take?",
    "options": ["Giving participation in all oral activities in the class and providing special situations in which his/her confidence is built up", "Giving many opportunities for oral drilling, specially for the student", "Giving exemption from all the oral activities in the class.", "Directing her/him to undergo speech therapy"],
    "correct": 0
  },
  {
    "q": "Which of the following statements is acceptable regarding the evaluation in the present vision in education",
    "options": ["It encourages the comprehensive nature of evaluation", "It assesses the gathering of knowledge by craming", "It does not encourage the students to attend their class regularly", "It emphasises on written examinations."],
    "correct": 0
  },
  {
    "q": "Individual attention is important in the teaching-learning process, because",
    "options": ["Teacher training programmes prescribe it", "It offers better opportunities to teachers to discipline each learner", "Children develop at different rates and learn differently.", "Learners always learn better in groups"],
    "correct": 2
  },
  {
    "q": "Errors committed by learners often indicate",
    "options": ["The need for mechanical drilling", "Absence of learning", "Socio-economic status of the learners", "How they learn."],
    "correct": 3
  },
  {
    "q": "Which of the following is a domain of learning",
    "options": ["Professional", "Experiential", "Spiritual.", "Affective"],
    "correct": 3
  },
  {
    "q": "Performance in co-scholastic areas like sports, art, music, dance and drama, other cultural activities and social qualities are assessed in",
    "options": ["Out-door and stage competitions", "Aptitude and skill assessment", "Continuous and comprehensive assessment", "Unit And summative test."],
    "correct": 2
  },
  {
    "q": "Stage Theory of cognitive development is introduced by Jean Piaget. which of the following stages is associated with Adolescence stage?",
    "options": ["concrete operational stage.", "Sensory-motor stage", "Pre-operational stage", "Formal operational stage"],
    "correct": 3
  },
  {
    "q": "Which among the following is not included in FLUID intelligence as defined by R.B. Cattell?",
    "options": ["Vocabulary development.", "Abstract Thinking"],
    "correct": 0
  },
  {
    "q": "Verbal comprehension, word fluency, space relations etc. are related to a theory of intelligence; name the theory",
    "options": ["Group factor theory", "Three factor Theory.", "Faculty theory", "Multi factor theory"],
    "correct": 0
  },
  {
    "q": "In the stages of moral development, prescribed by Kohlberg, Adolescence stage comes under--",
    "options": ["Formal Operational stage", "Transitional Morality stage", "Post conventional morality stage.", "Concrete operational stage"],
    "correct": 2
  },
  {
    "q": "Which of the following is associated with the adolescence stage?",
    "options": ["fear", "dominating nature", "Group formation in the peer group.", "desire for social recognition in group"],
    "correct": 3
  },
  {
    "q": "As per the findings in an IQ test result, which of the following ranges is considered as the mentally retarded group?",
    "options": ["below 110", "below 70.", "below 80", "below 90"],
    "correct": 1
  },
  {
    "q": "Which of the following is not a stage in concept attainment?",
    "options": ["Iconic stage", "Phalic stage", "Enactive stage.", "Symbolic stage"],
    "correct": 1
  },
  {
    "q": "A persistent, chronic condition in which reading ability lags behind that of normal individuals is known as:",
    "options": ["Dysgraphia.", "Dyscalculia", "Dyslexia", "Dysphasia"],
    "correct": 2
  },
  {
    "q": "Spiral curriculum is the contribution of :",
    "options": ["Bruner", "Skinner", "Watson", "Gardner."],
    "correct": 0
  },
  {
    "q": "'By Education, I mean the drawing out of the best in child, man- body, mind and spirit' who is known for this statement?",
    "options": ["Swami Vivekanandan", "Mahatma Gandhi", "Rabindrnath Tagore.", "J. Krishna moorthi"],
    "correct": 1
  },
  {
    "q": "Which type of motivation is found in a student's desire to become responsible and self disciplined and to put forth effort to learn?",
    "options": ["Social motivation", "External motivation", "Internal motivation.", "Persuaded motivation"],
    "correct": 2
  },
  {
    "q": "Student-centred learning is found in which of the following?",
    "options": ["ICT Assisted learning", "Distant learning", "Gurukula Learning", "Collaborative learning."],
    "correct": 3
  },
  {
    "q": "While Watching TV, Raji was reminded by her father about her low achievement in recent term evaluation and sent her to study room. But Raji only wasted her time at her study table. Which of the learning laws has not been applied by Raji's father?",
    "options": ["Law of exercise", "Law of effect", "Law of Identical elements.", "Law of Readiness"],
    "correct": 3
  },
  {
    "q": "Raju was offered a cigarette in a friends' circle; he thought about his father who has no habit of smoking. He felt restless in going home after smoking. So he refused the offer. The stimulus that prompted Raju to avoid smoking is",
    "options": ["Negative Reinforcement", "Reward", "Punishment", "Positive Reinforcement."],
    "correct": 2
  },
  {
    "q": "Words, their meanings etc can be specially remembered; this kind of memory is called",
    "options": ["Episodic memory", "procedural memory", "Short term memory", "Semantic memory."],
    "correct": 3
  },
  {
    "q": "Person with disabilities Act (PWD Act) came into force from :",
    "options": ["1996", "1986", "1976", "2006."],
    "correct": 0
  },
  {
    "q": "Which among the following is/are the problem(s) experienced by gifted children?",
    "options": ["Problems arising from frustration of special needs.", "Problems arising from lack of understanding by the teachers.", "Problems arising from non- challenging class works.", "All the above."],
    "correct": 3
  },
  {
    "q": "Pedagogy is the study about :",
    "options": ["School", "Education", "Child", "Teaching methods."],
    "correct": 3
  },
  {
    "q": "Progressive educationalists believe that, children learn in :",
    "options": ["Isolated environment", "Competition", "Community", "None of the above."],
    "correct": 2
  },
  {
    "q": "Eight years old Ahad could arrange objects according to their size. According to Piaget, Ahad possesses the ability of:",
    "options": ["Reversibility", "Conservation", "Seriation", "Equilibration."],
    "correct": 2
  },
  {
    "q": "Which among the following is the lowest need in the Maslow's hierarchy of needs?",
    "options": ["Cognitive", "Physiological.", "Esteem", "Safety"],
    "correct": 1
  },
  {
    "q": "According to Freud, Id is guided by:",
    "options": ["Pleasure principle", "Reality principle", "Morality principle", "Abnormality principle."],
    "correct": 0
  },
  {
    "q": "In Pavlov's classical conditioning, before conditioning, meat given to the dog is known as:",
    "options": ["Conditioned stimulus", "Conditioned response", "Unconditioned stimulus.", "Unconditioned response"],
    "correct": 2
  },
  {
    "q": "Who has developed a chart on the emotional development of children?",
    "options": ["Flavel", "Katherine Bridges.", "Daniel Goleman", "Gardner"],
    "correct": 1
  },
  {
    "q": "The central principles of learner centered education are/is:",
    "options": ["Learning by living", "Learning by doing.", "Both (A) and (B)"],
    "correct": 2
  },
  {
    "q": "Who declared that an innate predisposition for language acquisition is present in the Brains of each person?",
    "options": ["Noam Chomsky.", "Vygotsky", "Piaget", "Bruner"],
    "correct": 0
  },
  {
    "q": "Unfolding of biologically inherited potentialities as a function of time is known as:",
    "options": ["Motivation", "Maturation", "Concept formation.", "Learning"],
    "correct": 1
  },
  {
    "q": "Which among the following doesn't belong to the Multiple Intelligence given by Gardner?",
    "options": ["General intelligence", "Musical intelligence", "Naturalistic intelligence", "Bodily-Kinesthetic intelligence."],
    "correct": 0
  },
  {
    "q": "Arrange the steps in problem solving in the sequential order. (a) Hypothesis formulation (b) Identifying the problem (c) Collection of data (d) Drawing conclusions",
    "options": ["(c), (d), (b), (a)", "(b), (d), (c), (a)", "(b), (c), (a), (d)", "(b), (a), (c), (d)"],
    "correct": 3
  },
  {
    "q": "A developmental disability that significantly affecting verbal and non-verbal communication and social interaction of children is :",
    "options": ["Cerebral Palsy.", "Epilepsy", "Autism", "ADHD"],
    "correct": 2
  },
  {
    "q": "If an assessment measures what it is intended to measure, then that assessment is:",
    "options": ["Reliable", "Valid", "Unreliable.", "Invalid"],
    "correct": 1
  },
  {
    "q": "The intellectual support given by a more intelligent person to his inferior is known as :",
    "options": ["Teaching", "Guidance", "Tutoring", "Scaffolding."],
    "correct": 3
  },
  {
    "q": "In order to find out learning deficiencies and difficulties of the learners, we can adopt :",
    "options": ["Placement evaluation", "Diagnostic evaluation", "Summative evaluation.", "None of the above"],
    "correct": 1
  },
  {
    "q": "Behaviourist classes are generally:",
    "options": ["Learner-centered", "Teacher-centered", "Task centered", "Process oriented"],
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
