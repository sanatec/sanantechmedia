document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
  {
    "q": "Sheeba, a primary school student actively engages in school activities and enjoys learning. According to psycho social development theory, she possesses:",
    "options": ["Shame", "Autonomy", "Industry", "Identity"],
    "correct": 2
  },
  {
    "q": "Saleem is interested to discuss academic matters with his friends and perform well in school activities. What is the dominant ability inherent in him?",
    "options": ["High IQ", "Interpersonal intelligence", "Intrapersonal intelligence", "Peer influence"],
    "correct": 1
  },
  {
    "q": "Four statements of Gagne's hierarchy of learning are given below. (1) Chaining (2) Problem solving (3) S-R Learning (4) Concepts. Which of the following is the correct order given in the hierarchy?",
    "options": ["(4)-(2)-(1)-(3)", "(3)-(1)-(4)-(2)", "(1)-(3)-(4)-(2)", "(3)-(4)-(1)-(2)"],
    "correct": 1
  },
  {
    "q": "Which of the following represent the deficiency need based on the theory of motivation proposed by Abraham Maslow?",
    "options": ["Safety need", "Cognitive need"],
    "correct": 0
  },
  {
    "q": "Which of the following environmental factors does not affect the socialisation of a child?",
    "options": ["Family", "Peer group", "School", "Interest"],
    "correct": 3
  },
  {
    "q": "For acquiring and overcoming fear response, which of the following theories can be applied?",
    "options": ["Classical conditioning", "Operant conditioning", "Perceptual organisation", "Law of extinction"],
    "correct": 0
  },
  {
    "q": "Which among the following is the most suitable strategy that suit the needs of slow learners?",
    "options": ["Give them only those tasks which they are capable of performing", "Give them more complex tasks to cope up with difficulty", "Give them those tasks which require sustained concentration and efforts", "Give them more homework"],
    "correct": 0
  },
  {
    "q": "Which is the most appropriate technique that is used for assessing the social relationships of students in a class?",
    "options": ["Questionnaire", "Interview", "Sociometry", "Observation"],
    "correct": 2
  },
  {
    "q": "Writing short notes along with studying makes learning easy for Raju. This is his style in learning all subjects. He is a:",
    "options": ["Visual learner", "Auditory learner", "Logical learner", "Kinaesthetic learner"],
    "correct": 0
  },
  {
    "q": "The help or assistance that is given to a learner to achieve the potential level of learning is called:",
    "options": ["Reinforcement", "Scaffolding", "Development", "Motivation"],
    "correct": 1
  },
  {
    "q": "Who among the following psychologists emphasised observational learning?",
    "options": ["Jerome S. Bruner", "Lev Vygotsky", "Albert Bandura", "Daniel Goleman"],
    "correct": 2
  },
  {
    "q": "An educational and pedagogical environment that provides the opportunity to question and analyse the relationship between theory and practice is known as:",
    "options": ["Critical pedagogy", "Reconstructionist pedagogy", "Creative pedagogy", "Constructivist pedagogy"],
    "correct": 0
  },
  {
    "q": "Information processing theory postulated by:",
    "options": ["Jerome S. Bruner", "Robert Sternberg", "E.L. Thorndike", "Howard Gardner"],
    "correct": 1
  },
  {
    "q": "Name the stage at which logical thinking is acquired by students?",
    "options": ["Infancy", "Early childhood", "Late childhood", "Adolescence"],
    "correct": 3
  },
  {
    "q": "Who among the following is associated with stage theory of development?",
    "options": ["Jean Piaget", "Lev Vygotsky", "David Ausubel", "Albert Bandura"],
    "correct": 0
  },
  {
    "q": "Consider the following statements: 1. Development is a prerequisite for learning 2. Learning and development are interdependent",
    "options": ["Statement 1 alone is correct", "Statement 2 alone is correct", "Both Statements 1 and 2 are correct", "Neither Statement 1 nor 2 are correct"],
    "correct": 2
  },
  {
    "q": "Match the following: (1) Life skill (2) Metacognition (3) Differently abled (4) Counselling with (a) Reflective Practice (b) Assistive Technology (c) Decision Making (d) Non directive. Select the correct order.",
    "options": ["(1)-(b), (2)-(c), (3)-(d), (4)-(a)", "(1)-(d), (2)-(c), (3)-(a), (4)-(b)", "(1)-(a), (2)-(d), (3)-(b), (4)-(c)", "(1)-(c), (2)-(a), (3)-(b), (4)-(d)"],
    "correct": 3
  },
  {
    "q": "A teacher uses games and plays and tries to make his lessons more interesting to student. Here the teacher is using:",
    "options": ["Intrinsic motivation", "Extrinsic motivation", "Both intrinsic and extrinsic motivation", "Neither intrinsic nor extrinsic motivation"],
    "correct": 1
  },
  {
    "q": "A student celebrates the victory of his/her team members and finds satisfaction, is using the defence mechanism:",
    "options": ["Projection", "Rationalisation", "Compensation", "Identification"],
    "correct": 3
  },
  {
    "q": "Rakesh is having difficulty in reading. This condition is known as:",
    "options": ["Dyscalculia", "Dyslexia", "Dysgraphia", "Mentally challenged"],
    "correct": 1
  },
  {
    "q": "Which of the following is true about Gestalt Psychology?",
    "options": ["Learning is the result of bonding between stimulus and response", "Meaningful verbal learning is emphasised", "Learning is the result of maturation", "Insightful learning is emphasised"],
    "correct": 3
  },
  {
    "q": "Renu finds it difficult to analyse equations and formulae in science subjects. Psychologically she is lacking:",
    "options": ["Object permanence", "Conservatism", "Logical thinking", "Reversible thinking"],
    "correct": 2
  },
  {
    "q": "Which of the following principles of development forms the basis of inductive approach in teaching?",
    "options": ["Individual difference", "Cephalo caudal", "Proximo distal", "Interrelation"],
    "correct": 0
  },
  {
    "q": "A teacher avoids negative stimulus for strengthening the desirable behaviours of students. Here the teacher is using:",
    "options": ["Positive reinforcement", "Negative reinforcement", "Both positive reinforcement and negative", "Neither positive nor negative reinforcement"],
    "correct": 1
  },
  {
    "q": "Which of the following is a tool that is used to assess performance of students?",
    "options": ["Cumulative record", "Anecdotal record", "Portfolio", "Rubrics"],
    "correct": 2
  },
  {
    "q": "Which of the following is a cognitive skill?",
    "options": ["Emotional intelligence", "Problem solving", "Coping with stress", "Empathy"],
    "correct": 1
  },
  {
    "q": "Which of the following can be the most appropriate tool used for measuring the personality of students?",
    "options": ["Sentence completion tests", "Inventory", "Observation", "Check list"],
    "correct": 1
  },
  {
    "q": "Which among the following will be the most apt reason for a child's failure in school examinations?",
    "options": ["Child comes from a lower socio-economic status.", "Child is not given monetary rewards for the success.", "Child is not given teaching according to his needs and interests.", "Child become bored of writing examinations."],
    "correct": 2
  },
  {
    "q": "Researchers conducted studies among many identical twins and find out that their intelligences are highly correlated. This indicates that:",
    "options": ["Development is influenced by environmental factors", "Development is influenced by hereditary factors", "Development is influenced by social factors", "Development is influenced by cultural factors"],
    "correct": 1
  },
  {
    "q": "The concept of Zone of Proximal Development (ZPD) was formulated by:",
    "options": ["Vygotsky", "Jean Piaget", "Noam Chomsky", "Bruner"],
    "correct": 0
  },
  {
    "q": "A teacher punishes a child for not doing homework. Another teacher punishes the same child for getting lower marks. The child concludes that all teachers punish students. This kind of thinking is called:",
    "options": ["Reasoning", "Problem-solving", "Investigation", "Creativity"],
    "correct": 0
  },
  {
    "q": "A three year old child cannot hold a pencil properly to write letters. But when he turns into five years he can do this easily. Which among the following can be its reason?",
    "options": ["His learning atmosphere", "His learning pace", "His learning style", "His maturation for learning"],
    "correct": 3
  },
  {
    "q": "A teacher wanted to develop problem-solving skill in children. Which among the following helps for it?",
    "options": ["Giving children class tests", "Giving children imposition", "Encourage children to ask questions", "Encourage children to concentrate only on lecturing"],
    "correct": 2
  },
  {
    "q": "From the following statements find out the correct statements regarding the aims of continuous and comprehensive evaluation. 1) Help to reduce the stress on children. 2) Provide guidance and counselling. 3) Assessing students in a regular, systematic way 4) Find out an exceptional child.",
    "options": ["Statements (2) and (4)", "Statements (1) and (3)", "Statement (2) only", "Statement (4) only"],
    "correct": 1
  },
  {
    "q": "From the following select the factor which hinders achievement of students.",
    "options": ["Teacher encourages students time to time", "Teacher do not effectively communicate with the children", "Teacher motivates students to reach their goal", "Teacher clarifies doubts of students"],
    "correct": 1
  },
  {
    "q": "School authorities conducted a programme for honouring a former student who secured top rank in IAS examination. On the basis of Maslow's theory reaching this prestigious position depicts:",
    "options": ["Physiological needs", "Safety needs", "Esteem needs", "Self Actualisation"],
    "correct": 2
  },
  {
    "q": "Identify the children who are NOT included in the category of Exceptional children.",
    "options": ["Gifted children", "Slow learners", "Children with obesity", "Mentally challenged children"],
    "correct": 2
  },
  {
    "q": "Identify the act which is implemented in 1992 for rehabilitate person with disabilities.",
    "options": ["RCI Act", "RPWA Act"],
    "correct": 0
  },
  {
    "q": "I hear and I forget, I see and I remember, I do and I understand. What does it emphasize?",
    "options": ["Transfer of learning", "Experiential learning", "Observational learning", "Concept learning"],
    "correct": 1
  },
  {
    "q": "Which among the following is NOT considered as a symptom of Learning Disability?",
    "options": ["Dyslexia", "Dyscalculia", "Speech and Language disorder", "Intellectual disability"],
    "correct": 3
  },
  {
    "q": "Which among the following is NOT considered as Progressive method of education?",
    "options": ["Problem-solving", "Critical thinking", "Group work", "Recite and learn"],
    "correct": 3
  },
  {
    "q": "Given below are specialities of some children in a classroom. Among these whom do you consider as disadvantaged learner?",
    "options": ["Academically advanced", "Face socio-economic challenges that hinder their learning", "Has diverse learning styles", "From aristocratic family"],
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
