document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
    {
    "q": "Marking Scheme' in evaluation ensures:",
    "options": ["Comprehensiveness", "Discrimination power", "Subjectivity", "Objectivity"],
    "correct": 3
  },
  {
    "q": "The basic theory in shaping of desirable behaviour in students is known as:",
    "options": ["Classical conditioning", "Operant conditioning", "Social learning", "Gestalt learning"],
    "correct": 1
  },
  {
    "q": "Which of the following statements is not related to constructivism?",
    "options": ["Learning involves an S-R connection.", "Learning is an active process", "Learning needs previous experience", "Intrinsic motivation is essential for learning"],
    "correct": 0
  },
  {
    "q": "A student justifies his failure in examinations due to the prolonged illness is using the defense mechanism:",
    "options": ["Projection", "Rationalisation", "Compensation", "Identification"],
    "correct": 1
  },
  {
    "q": "Albert Bandura proposed the theory of:",
    "options": ["Instrumental conditioning", "Classical conditioning", "Social learning theory", "Observational learning"],
    "correct": 2
  },
  {
    "q": "Educational psychology is known as a science because:",
    "options": ["It deals with human learning and behaviour", "It studies human behaviour using scientific method", "It is related to natural behaviour studied through observation", "All of these"],
    "correct": 3
  },
  {
    "q": "Critical thinking Skills:",
    "options": ["are abstract abilities that can not be determined.", "usually develop spontaneously without any instruction.", "usually develop spontaneously through content instruction.", "need to be taught deliberately because they often do not develop by themselves with content instruction."],
    "correct": 3
  },
  {
    "q": "A child who is proficient in understanding his strengths and weaknesses and maintains a healthy attitude towards himself and others is dominant in:",
    "options": ["Logical mathematical intelligence", "Naturalistic intelligence", "Interpersonal intelligence", "Intra-personal intelligence"],
    "correct": 3
  },
  {
    "q": "The process of maintaining encoded information in memory over time is:",
    "options": ["Storage", "Decoding", "Rehearsal", "Retrieval"],
    "correct": 0
  },
  {
    "q": "Which of the following reinforcement schedule is least effecting extinction?",
    "options": ["Fixed interval", "Variable interval", "Fixed ratio", "Variable ratio"],
    "correct": 3
  },
  {
    "q": "According to Erik Erikson, in which stage of Psycho-social development will be a Primary School Child:",
    "options": ["Trust Vs. Mistrust", "Industry Vs. Inferiority", "Intimacy Vs. Isolation", "Initiative Vs. Guilt"],
    "correct": 1
  },
  {
    "q": "To analyse the difficulties experienced by students in learning, a teacher can use:",
    "options": ["Achievement test", "Diagnostic test", "Prognostic test", "Performance test"],
    "correct": 1
  },
  {
    "q": "Select the pair which is not correct.",
    "options": ["Theory of moral development: Kohlberg.", "Theory of cognitive development: Jean Piaget", "Theory of motivation: Abraham Maslow", "Theory of hierarchy of learning: J.S. Bruner"],
    "correct": 3
  },
  {
    "q": "According to Vygotsky, what type of learning strategies are to be provided to the learners for constructing knowledge?",
    "options": ["Collaborative learning", "Direct instruction", "Individual projects", "Simulation"],
    "correct": 0
  },
  {
    "q": "Which of the following is a correct statement?",
    "options": ["Maturation is a pre-condition for learning.", "Learning is a pre-condition for Maturation.", "Maturation is a learned behaviour.", "Learning and Maturation are contradictory to each other."],
    "correct": 0
  },
  {
    "q": "The tendency for later learning to inhibit the recall of prior learning is called:",
    "options": ["Encoding failure", "Retroactive inhibition", "Proactive inhibition", "both B,C"],
    "correct": 1
  },
  {
    "q": "A teacher who is more keen on effective student learning is likely to emphasise:",
    "options": ["Provide appropriate learning environment", "Impose discipline", "Focus on evaluation practices", "Allow student freedom in classroom"],
    "correct": 0
  },
  {
    "q": "A teacher asks children to reach to a conclusion after giving a series of examples of a principle. This approach can be termed as:",
    "options": ["Deductive approach", "Inductive approach", "Insightful approach", "Inducto-deductive approach"],
    "correct": 1
  },
  {
    "q": "What type of evaluation identifies learning deficiencies and difficulties of learners?",
    "options": ["Placement evaluation", "Formative evaluation", "Diagnostic evaluation", "Summative evaluation"],
    "correct": 2
  },
  {
    "q": "Intellectual backwardness and lack of adaptive behaviour are the characteristics of:",
    "options": ["Learning Disabled", "Intellectual Disability", "ADHD", "Autism"],
    "correct": 1
  },
  {
    "q": "Which of the following is not a characteristic of a creative child?",
    "options": ["Originality of ideas and expression", "High degree of sensitivity to problems", "Rigidity in thought and expression", "Curious and investigative"],
    "correct": 2
  },
  {
    "q": "Identify the wrong statement from the following:",
    "options": ["Development proceeds from specific to general.", "Development is predictable.", "Development is cumulative.", "Development is continuous."],
    "correct": 0
  },
  {
    "q": "Which is the determining factor in maturation?",
    "options": ["Heredity", "Family environment", "Religion", "Cultural context"],
    "correct": 0
  },
  {
    "q": "In a child centred classroom, children generally learn:",
    "options": ["Individually", "In groups", "Individually and in groups", "Mainly from the teacher"],
    "correct": 2
  },
  {
    "q": "The term 'dyslexia' means:",
    "options": ["Reading disability", "Writing disability", "Math disability", "Speech disorder"],
    "correct": 0
  },
  {
    "q": "'Grading' is related with the Greek word 'Gradus'. The meaning of this word is",
    "options": ["Step", "Success", "Measure", "Evaluate"],
    "correct": 0
  },
  {
    "q": "Multi-sensory approach will be mostly suited to:",
    "options": ["Visually impaired", "Hearing impaired", "Learning disabled", "Mentally challenged"],
    "correct": 2
  },
  {
    "q": "He was a Russian scientist - one of the famous figures in the history of Psychology who discovered many of the findings related with classical conditioning. Who is the scientist referred here?",
    "options": ["Ivan Pavlov", "Wolfgang Kohler", "Robert M. Gagne", "Jerome S. Bruner"],
    "correct": 0
  },
  {
    "q": "Who emphasized the biological basis of language acquisition?",
    "options": ["Noam Chomsky", "B.F. Skinner", "Erick Erikson", "Ivan P. Pavlov"],
    "correct": 0
  },
  {
    "q": "A sixth standard student Sulaiman is capable of apt and fluent usage of words. As per the findings of Multiple Intelligence theory, which intelligence makes the child stronger in this aspect?",
    "options": ["Linguistic", "Logical-mathematical", "Spatial", "Bodily-kinesthetic"],
    "correct": 0
  },
  {
    "q": "Which group of children needs Braille system for their learning?",
    "options": ["Hearing impaired", "Visually impaired", "Learning disabled", "Mentally retarded"],
    "correct": 1
  },
  {
    "q": "Oedipus complex and Electra complex are found among children of early childhood. This was discussed by:",
    "options": ["David Ausubel", "Wolfgang Kohler", "Gordon Allport", "Sigmund Freud"],
    "correct": 3
  },
  {
    "q": "Whose name is associated with achievement motivation?",
    "options": ["McClelland", "Guilford", "Gardner", "Skinner"],
    "correct": 0
  },
  {
    "q": "Which is not a characteristic of creativity?",
    "options": ["Fluency", "Flexibility", "Originality", "Objectivity"],
    "correct": 3
  },
  {
    "q": "Emotional Intelligence was explained and popularised by:",
    "options": ["Alfred Binet", "Daniel Goleman", "Peter Salovey", "John Mayer"],
    "correct": 1
  },
  {
    "q": "Teaching through inductive method is:",
    "options": ["from easy to difficult", "from specific to general", "from general to specific", "from process to product"],
    "correct": 1
  },
  {
    "q": "Ajina, a class six student is very weak in Mathematics. The teacher decided to analyse the difficulties experienced by her in the learning process. For this, the teacher can use:",
    "options": ["Achievement Test", "Diagnostic Test", "Performance Test", "Prognostic Test"],
    "correct": 1
  },
  {
    "q": "The study about gifted children was initiated by:",
    "options": ["Terman", "Spearman", "Thurstone", "Thorndike"],
    "correct": 0
  },
  {
    "q": "'Psychology should study observable behaviour' is an assumption of:",
    "options": ["Behaviourism", "Psychoanalysis", "Humanism", "Cognitivism"],
    "correct": 0
  },
  {
    "q": "The feeling of shame and doubt develops in which stage of an individual?",
    "options": ["Infancy stage", "Adolescence stage", "Early childhood (2-3 years)", "School age"],
    "correct": 2
  },
  {
    "q": "Which of the following is not a stage of Bruner's Cognitive development?",
    "options": ["Enactive stage", "Adaptive stage", "Iconic stage", "Symbolic stage"],
    "correct": 1
  },
  {
    "q": "Stimulus discrimination and generalisation are related to:",
    "options": ["Conditioning", "Intuitive learning", "Insight learning", "Constructivist learning"],
    "correct": 0
  },
  {
    "q": "Bridges chart depicts:",
    "options": ["Cognitive development of children.", "Moral development of children.", "Emotional development of children.", "Physical development of children."],
    "correct": 2
  },
  {
    "q": "Which is a formal agency of socialization?",
    "options": ["Family", "Peer group", "School", "Media"],
    "correct": 2
  },
  {
    "q": "Who proposed the Triarchic theory of intelligence?",
    "options": ["Guilford", "Gardner", "Binet", "Sternberg"],
    "correct": 3
  },
  {
    "q": "Which of the following idea was formulated by Allport related with personality?",
    "options": ["Functional fixedness", "Functional autonomy", "Functional mindset", "Functionalism"],
    "correct": 1
  },
  {
    "q": "The age group 12-18 years can be termed as:",
    "options": ["Adulthood", "Adolescence", "Middle age", "Childhood"],
    "correct": 1
  },
  {
    "q": "Which of the following is not directly related to Vygotskian views of education?",
    "options": ["Meaningful reception learning", "Reciprocal teaching", "Co-operative learning", "Zone of proximal development"],
    "correct": 0
  },
  {
    "q": "Who among the following advocated a theory of motivation?",
    "options": ["Jerome S. Bruner", "Kohlberg", "Sternberg", "Abraham Maslow"],
    "correct": 3
  },
  {
    "q": "Whose contribution is the Trait approach to personality?",
    "options": ["Freud", "Maslow", "Gordon Allport", "Raymond Cattell"],
    "correct": 2
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
