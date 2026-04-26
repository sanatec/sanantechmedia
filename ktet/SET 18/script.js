document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
  {
    "q": "A student got first prize in English elocution. According to Gardner which intelligence dominates here?",
    "options": ["Visual-Spatial intelligence", "Bodily Kinesthetic intelligence", "Musical intelligence", "Linguistic intelligence"],
    "correct": 3
  },
  {
    "q": "A teacher decided to conduct an indepth study of one of her students who faces some problem. According to you which method helps the teacher in doing so?",
    "options": ["Experimental method", "Interview", "Case study", "Observation"],
    "correct": 2
  },
  {
    "q": "Which among the following is NOT considered as the function of grading system?",
    "options": ["Categorising students based on previously defined criteria", "Compare standards of learning between two students", "Provide information to students for self evaluation", "Students are classified on the basis of success and failure in examinations"],
    "correct": 1
  },
  {
    "q": "Identify the personal factor which influences learning.",
    "options": ["School", "Media", "Teacher", "Intelligence"],
    "correct": 3
  },
  {
    "q": "'An aggressive person joins in army'. Select the most suitable defense mechanism which matches to the above statement.",
    "options": ["Regression", "Sublimation", "Repression"],
    "correct": 1
  },
  {
    "q": "Teacher selected three boys as class leaders and do not give chance for girls. This indicates:",
    "options": ["Gender Neutrality", "Gender Equality", "Gender Bias", "Gender Identity"],
    "correct": 2
  },
  {
    "q": "Physical health strengthens mental health and also mental health strengthens physical health. Identify the developmental principle mentioned here.",
    "options": ["Development is Predictable", "Development is Interrelated", "Development is Directional", "Development is Continuous"],
    "correct": 1
  },
  {
    "q": "Which among the following is correct?",
    "options": ["Students should not make errors in learning process", "Students should be severely punish for making errors", "Making errors are part of the learning process", "Making errors is an abnormal activity"],
    "correct": 2
  },
  {
    "q": "Charlie Chaplin is famous for his 'Sense of humor'. According to Allport it is example of a person's:",
    "options": ["Cardinal Trait", "Central Trait", "Surface Trait", "Secondary Trait"],
    "correct": 0
  },
  {
    "q": "The spiral curriculum was proposed....",
    "options": ["Piaget", "Bruner", "Vygotsky"],
    "correct": 1
  },
  {
    "q": "The process which directs the behaviour of an individual towards a particular goal",
    "options": ["Motivation", "Cognition", "Emotion", "Judgement"],
    "correct": 0
  },
  {
    "q": "Read the following statements: (1) Encourage the child to think about as many ideas. (2) Encourage originality of the child. (3) Give fixed and rigid habits of work. (4) Over emphasize on school marks. Which among these can be done by a teacher to foster creativity of a child?",
    "options": ["(1) and (2)", "(3) and (4)", "(3) only", "(4) only"],
    "correct": 0
  },
  {
    "q": "According to Katherine-Bridge newborn infants shows only one emotion. Which among the following is it?",
    "options": ["Fear", "Anger", "Disgust", "Excitement"],
    "correct": 3
  },
  {
    "q": "Pick out the one from the following which is NOT the characteristic of learning.",
    "options": ["Learning involves behavioural changes", "In learning behavioural changes takes place as a result of practice of experience", "In learning behavioural changes takes place as a result of maturity and growth", "In learning behavioural changes are relatively permanent"],
    "correct": 2
  },
  {
    "q": "When equal amount of ice-cream is filled in a taller bowl and a wider bowl and placed before a five years old child, he chooses the taller ice-cream bowl. According to Piaget this speciality is called:",
    "options": ["Animism", "Egocentrism", "Centration", "Reversibility"],
    "correct": 2
  },
  {
    "q": "Find the odd one from the following.",
    "options": ["Law of closure", "Law of readiness", "Law of effect", "Law of exercise"],
    "correct": 0
  },
  {
    "q": "The record maintained by a teacher to note down specific behaviours observed while children engaged in various activities is:",
    "options": ["Sociometric technique", "Anecdotal record", "Interview", "Portfolio"],
    "correct": 1
  },
  {
    "q": "Among the following statements, which is true, related to language development? (1) According to Chomsky language development is instinctive. (2) Bruner emphasises the importance of social interaction for language learning.",
    "options": ["Only (1) is true", "Only (2) is true", "(1) and (2) are false", "(1) and (2) are true"],
    "correct": 3
  },
  {
    "q": "Rapid physical development happens during:",
    "options": ["Young adulthood", "Childhood", "Adult age", "Infancy"],
    "correct": 3
  },
  {
    "q": "According to Erik Erikson individuals belonging to the age group 18-35 years experience crisis.",
    "options": ["Generativity Vs Stagnation", "Identity Vs Role confusion", "Intimacy Vs Isolation", "Initiative Vs Guilt"],
    "correct": 2
  },
  {
    "q": "The step not involved in problem solving is:",
    "options": ["Collection of relevant data", "Reaching solution without proper analysis", "Formulation of hypothesis", "Applying the solution"],
    "correct": 1
  },
  {
    "q": "Who among the following does not belong to the trait theories of Personality?",
    "options": ["B.F. Skinner", "G.W. Allport", "Hans J. Eysenck", "Raymond Cattel"],
    "correct": 0
  },
  {
    "q": "Which of the following questions will lead to creative thinking? (1) Who invented electricity? (2) What are the uses of newspaper? (3) Who is the father of our nation? (4) Write a story about a zoo without using names of any animals.",
    "options": ["(1), (3) and (4) only", "(2) and (3) only", "(2) and (4) only"],
    "correct": 2
  },
  {
    "q": "Which is the correct sequential order in the formation of concepts among children?",
    "options": ["Sensation → Perception → Abstraction → Generalisation", "Abstraction → Sensation → Generalisation → Perception", "Generalisation → Perception → Abstraction → Sensation", "Sensation → Generalisation → Abstraction → Perception"],
    "correct": 0
  },
  {
    "q": "An example for an abstract concept is:",
    "options": ["Ball", "Plants", "Pen", "Love"],
    "correct": 3
  },
  {
    "q": "The colour of eyes of individuals are determined by:",
    "options": ["Heredity", "Intellectual level", "Socialisation", "All the above"],
    "correct": 0
  },
  {
    "q": "Which age is known as 'Toy Age'?",
    "options": ["Adolescence", "Early childhood", "Later childhood", "Middle childhood"],
    "correct": 1
  },
  {
    "q": "Match the following. (1) Piaget (2) Bandura (3) Chomsky (4) Kohler. (a) LAD (b) Schema (c) Insight (d) Social learning",
    "options": ["(1)-(b), (2)-(a), (3)-(d), (4)-(c)", "(1)-(c), (2)-(b), (3)-(a), (4)-(d)", "(1)-(d), (2)-(c), (3)-(a), (4)-(b)", "(1)-(b), (2)-(d), (3)-(a), (4)-(c)"],
    "correct": 3
  },
  {
    "q": "Chinnu who was jumping with skipping rope was given claps by her friends for the continuous and successful competition of each of her 10 skips. This is an example for which type of reinforcement?",
    "options": ["Fixed interval reinforcement schedule", "Variable interval reinforcement schedule", "Fixed ratio reinforcement schedule", "Variable ratio reinforcement schedule"],
    "correct": 2
  },
  {
    "q": "Four statements related to children's emotions are given below: (1) Children's emotions are transitory. (2) Children's emotions are more expressive. (3) Children's emotions are not frequent. (4) Children's emotions are intense than adults. Select the true option.",
    "options": ["(1), (2), (3) and (4)", "(1), (2) and (4) only", "(2), (3) and (4) only", "(1), (3) and (4) only"],
    "correct": 1
  },
  {
    "q": "Which among the following are peculiarities of progressive education? (1) Learning by doing (2) Co-operative and collaborative learning (3) De-emphasis on textbooks (4) Emphasis on life long learning",
    "options": ["(1) and (2) only", "(2) and (3) only", "(1) and (4) only", "(1), (2), (3) and (4)"],
    "correct": 3
  },
  {
    "q": "Arrange the first four stages of moral development given by Kohlberg in correct sequential order. (1) Social order maintaining orientation (2) Punishment-obedience orientation (3) Good boy-good girl orientation (4) Instrumental-purpose orientation",
    "options": ["(1), (3), (2), (4)", "(2), (4), (3), (1)", "(2), (4), (1), (3)", "(4), (2), (3), (1)"],
    "correct": 1
  },
  {
    "q": "Which among the following does not belong to Subsumption theory proposed by David P. Ausubel?",
    "options": ["Correlative Subsumption", "Derivative Subsumption", "Combinatorial Subsumption", "Subordinate Subsumption"],
    "correct": 3
  },
  {
    "q": "Sour grapism and sweet lemonism are two common forms of which defense mechanism?",
    "options": ["Repression", "Rationalisation", "Regression", "Identification"],
    "correct": 1
  },
  {
    "q": "In which of the following personality assessment technique, the subject was asked to write a story by looking at the pictures shown by the expert?",
    "options": ["Thematic Apperception Test", "Rorschach Inkblot Test", "Sentence Completion Test", "Draw-a-Person Test"],
    "correct": 0
  },
  {
    "q": "Difficulty in sorting objects by shape, trouble in understanding different symbols in Mathematics, trouble with counting, etc. are some of the problems experienced by Beval. What type of learning disability does he experience?",
    "options": ["Dysgraphia", "Dyslexia", "Dyscalculia", "Dysorthographia"],
    "correct": 2
  },
  {
    "q": "A child started reading textbooks, not by compulsion, but for mere pleasure. This is an example for:",
    "options": ["Intrinsic motivation", "Extrinsic motivation", "Expectancy motivation", "Situational motivation"],
    "correct": 0
  },
  {
    "q": "IEDC stands for:",
    "options": ["Integrated Education of Disabled Children", "Inclusive Education of Disabled Children", "Integrated Education of Differently abled Children in India", "Integrated Environment for Disabled Children"],
    "correct": 0
  },
  {
    "q": "The gap between what a child can do alone and what they can potentially master with support or assistance is known as:",
    "options": ["LAD", "ZPD", "PWD", "CWSN"],
    "correct": 1
  },
  {
    "q": "Who proposed SOI model of intelligence?",
    "options": ["Gardner", "Thurstone", "Spearman", "Guilford"],
    "correct": 3
  },
  {
    "q": "Which of the following was replaced when IEDSS was implemented?",
    "options": ["IEDC", "CWSN", "PWD", "SSA"],
    "correct": 0
  },
  {
    "q": "Which among the following statements are true with respect to Jean Piaget's Cognitive development theory? (1) Deferred imitation happens during pre-conceptual stage. (2) Reversible thought is possible during concrete operational stage.",
    "options": ["Only (1) is true", "Only (2) is true", "(1) and (2) are true", "(1) and (2) are false"],
    "correct": 2
  },
  {
    "q": "Rosbin usually mug up the poem and definitions without understanding the meaning or purpose. Here the child is using:",
    "options": ["Logical memory", "Associative memory", "Rote memory", "All of the above"],
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
