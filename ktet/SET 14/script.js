document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
  {
    "q": "Learning is a kind of behavioural:",
    "options": ["Withdrawal", "Continuation", "Modification.", "Extinction"],
    "correct": 2
  },
  {
    "q": "According to Piaget a child between 2 to 7 years is undergoing which stage of cognitive development?",
    "options": ["Formal operational", "Concrete operational", "Sensorimotor", "Pre operational."],
    "correct": 3
  },
  {
    "q": "Expand WAIS:",
    "options": ["Wechler Adult IQ Scale", "Wechler Adult Intelligence Scale.", "Wechler Adjustment Inventory for Students", "Wechler Adult Inventory for Students"],
    "correct": 1
  },
  {
    "q": "Oedipus complex means",
    "options": ["Affection of a male child to mother.", "Affection of a female child to father.", "Emotional changes in teens", "Love of wife to husband"],
    "correct": 0
  },
  {
    "q": "Student feels happy in doing all the works given by the teacher on time. This indicates :",
    "options": ["Intrinsic motivation", "Extrinsic motivation", "Fear of failure"],
    "correct": 0
  },
  {
    "q": "'Double Promotion' is meant for which type of students ?",
    "options": ["Gifted", "Creative", "Mentally challenged.", "Autistic"],
    "correct": 0
  },
  {
    "q": "Which among the following, a teacher should avoid in the classroom.",
    "options": ["Reinforcement", "Positive reinforcement.", "Punishment", "Negative reinforcement"],
    "correct": 2
  },
  {
    "q": "Which among the following is not a factor of creativity?",
    "options": ["Elaboration.", "Fluency", "Flexibility", "Personality"],
    "correct": 3
  },
  {
    "q": "Which of the following does not influence the emotional behaviour of children?",
    "options": ["Fatigue", "Health", "Intelligence", "Socio-economic status."],
    "correct": 2
  },
  {
    "q": "'Give me a dozen healthy infants. I will train them to become any type of specialist' These are the words of",
    "options": ["Galton", "Watson", "Rousseau."],
    "correct": 1
  },
  {
    "q": "'Whole is greater than the sum of its parts'. This perspective is related to",
    "options": ["Humanism", "Behaviourism.", "Gestaltism", "Constructivism"],
    "correct": 2
  },
  {
    "q": "Select the concept which is associated with Erik Erikson",
    "options": ["Ego", "Identity crisis.", "Modelling", "Reinforcement"],
    "correct": 1
  },
  {
    "q": "Which of the following does not belong to the three basic dimensions in Guilford's structure of intellect model?",
    "options": ["Operation", "Contents.", "Process", "Products"],
    "correct": 2
  },
  {
    "q": "Which among the following is not a factor of creativity?",
    "options": ["Elaboration.", "Fluency", "Personality", "Flexibility"],
    "correct": 2
  },
  {
    "q": "'Sour grapes' is an example of",
    "options": ["Sublimation", "Rationalization.", "Repression"],
    "correct": 1
  },
  {
    "q": "Select the person who has done major research works in Social Constructivism.",
    "options": ["Jean Piaget", "Lev Vygotsky", "Jerome S Bruner.", "David Ausubel"],
    "correct": 1
  },
  {
    "q": "Which test is known as the grandfather of all projective tests?",
    "options": ["Rorschach inkblot test", "TAT", "CAT", "Picture completion test."],
    "correct": 0
  },
  {
    "q": "Learning plateau' means",
    "options": ["Stage of no learning", "Stage of low learning", "Stage of rapid learning", "Can't identify learning."],
    "correct": 0
  },
  {
    "q": "Crying aloud, biting the nail, jumping with joy etc., are some of the child responses. Which of the following represents these emotions of the child?",
    "options": ["Detectability.", "Transitoriness", "Frequent", "Briefness"],
    "correct": 1
  },
  {
    "q": "Which of the following is not a component of Multiple intelligences?",
    "options": ["Logical-mathematical intelligence", "Intrapersonal intelligence", "Linguistic intelligence"],
    "correct": 2
  },
  {
    "q": "Rekha is obsessed with cleanliness and control. Which stage of psycho sexual development Rekha become fixated in?",
    "options": ["anal stage", "oral stage", "latency", "phallic stage."],
    "correct": 0
  },
  {
    "q": "Which of them are associated to the ideas of Jerome S. Bruner? (a) Concept attainment model (b) Reciprocal teaching (c) Dialogical learning (d) Discovery learning",
    "options": ["(a), (b) are correct", "(b), (c) are correct", "(a), (d) are correct.", "All are correct"],
    "correct": 2
  },
  {
    "q": "Which of the following is not used as a problem solving technique?",
    "options": ["Trial and error method.", "Insightful learning", "Algorithm", "Repeated reading"],
    "correct": 3
  },
  {
    "q": "The stage in which a child begins to think logically about objects and events in Jean Piaget's cognitive development stage is known as:",
    "options": ["Sensory-motor stage", "Formal operational stage", "Pre-operational stage", "Concrete operational stage."],
    "correct": 3
  },
  {
    "q": "'Self awareness, self regulation, self motivation, empathy, social awareness and social skills are the fundamental factors of emotional development.' These are the words of:",
    "options": ["Howard Gardner", "John Mayor", "Daniel Goleman.", "Salove"],
    "correct": 2
  },
  {
    "q": "Which of the following is not a stage of moral development proposed by Lawerence Kohlberg?",
    "options": ["Pre conventional morality stage", "Conventional morality stage", "final conventional morality stage.", "Post conventional morality stage"],
    "correct": 2
  },
  {
    "q": "Reji an eleven years old child, while reading skip some lines and avoid difficult words. Which type of learning disability is this?",
    "options": ["Dysgraphia.", "Dyslexia", "Dyspraxia", "Dysnomia"],
    "correct": 1
  },
  {
    "q": "Learners display individual differences. A teacher should:",
    "options": ["enforce strict discipline in the class", "provide varities of learning experiences.", "increase the number of monthly tests", "give a lot of home based activities"],
    "correct": 1
  },
  {
    "q": "Based on Gestalt laws of learning, learning is most effective through:",
    "options": ["repeated learning", "learning byheart", "learning through Comprehensive out look"],
    "correct": 2
  },
  {
    "q": "The ability to understand and discern the feelings and intention of others was mentioned by Howard Gardener as:",
    "options": ["Intrapersonal Intelligence", "Interpersonal Intelligence", "Naturalistic Intelligence", "Logical, Mathematical Intelligence."],
    "correct": 1
  },
  {
    "q": "Which learning method is not suitable for promoting social constructivist approach?",
    "options": ["Co-operative learning", "Collaborative learning", "Learning by doing", "Question-answer method of learning."],
    "correct": 3
  },
  {
    "q": "Three among the four fundamental factors of memory are learning, retention and recall. Which is the fourth factor?",
    "options": ["recognition", "application", "analysis", "grouping together."],
    "correct": 0
  },
  {
    "q": "'Really we are not studying language. Specific language elements and grammar are growing in the mind of the child through Universal grammar.' Whose words are this?",
    "options": ["Lev Vygotsky", "Noam Chomsky", "Jean Piaget", "Jerome S. Bruner."],
    "correct": 1
  },
  {
    "q": "Name the learning method proposed by David Pole Ausubell in parallel to the discovery learning by Bruner.",
    "options": ["Concept learning", "Principle learning", "Meaningful reception learning", "Discovery learning"],
    "correct": 2
  },
  {
    "q": "Name the grading system used to evaluate the upper primary school students studying in the general schools of Kerala.",
    "options": ["3 point direct grading", "5 point direct grading", "5 point absolute grading.", "9 point absolute grading"],
    "correct": 1
  },
  {
    "q": "Which region of the brain controls complex mental activities such as thought, planning, etc.?",
    "options": ["Cerebellum", "Thalamus", "Cerebral cortex.", "Hypothalamus"],
    "correct": 2
  },
  {
    "q": "Which of the following is the least possible character of a creative child?",
    "options": ["Fluency, flexibility and originality", "Divergent thinking", "Articulating ideas, novelty and innovation.", "Convergent thinking"],
    "correct": 3
  },
  {
    "q": "Which of the following are the correct four stages of creative activities?",
    "options": ["Analysis, Planning, Illumination and Verification", "Preparation, Incubation, Illumination and Verification", "Preparation, Planning, Analysis, and Verification", "Planning, Analysis, Illumination and Verification."],
    "correct": 1
  },
  {
    "q": "The mental age and chronological age of Suman is 12 each. Then which of the following statement is true?",
    "options": ["Suman has very high level of Intelligence.", "Suman has very low level of Intelligence", "The IQ of Suman is 100", "The IQ of Suman is 120"],
    "correct": 2
  },
  {
    "q": "Biological maturation, activities and social experiences are three of the four factors of development of learning process proposed by Jean Piaget. Which is the fourth factor?",
    "options": ["Equilibration", "Maturation", "Assimilation", "Accommodation."],
    "correct": 0
  },
  {
    "q": "Verbal association of learning is associated with which hierarchy given below?",
    "options": ["Bloom's taxonomy", "Discovery learning", "Maslow's heirarchy of needs.", "Gagne's model of learning"],
    "correct": 3
  },
  {
    "q": "Femina teacher, the class teacher of fourth standard told the students, 'select one female student and one male student to the class leader position. The leadership will be rotated on weekly basis.' This is an example of :",
    "options": ["gender bias", "love of teacher towards children", "violation of democracy", "gender equality."],
    "correct": 3
  },
  {
    "q": "The approach to evaluation followed in Kerala at the elementary level to evaluate the students:",
    "options": ["formative evaluation", "summative evaluation", "continuous evaluation", "continuous and comprehensive evaluation"],
    "correct": 3
  },
  {
    "q": "As a part of cognitive development proposed by Jerome S. Bruner, concept formation occurs on students at three stages. The first two stages are enactive stage and iconic stage. Which one is the third stage?",
    "options": ["symbolic stage", "concrete operational stage", "conventional stage", "morality stage."],
    "correct": 0
  },
  {
    "q": "Which of the following is not a fundamental factor of creativity?",
    "options": ["fluency", "divergent thinking", "good handwriting", "problem solving ability."],
    "correct": 2
  },
  {
    "q": "Education of children with special needs should be provided:",
    "options": ["in special schools only.", "in general schools using special teachers.", "in special schools using general school teachers.", "in general schools along with normal children by general school teachers and special school teachers."],
    "correct": 3
  },
  {
    "q": "Veeru, a sixth standard student shows extra ordinary performance in drawing figures and making models of building. Based on Howard Gardener's Multiple Intelligences theory, which type of intelligence is mentioned here?",
    "options": ["Naturalistic Intelligence", "Bodily kinesthetic Intelligence", "Logical - Mathematical Intelligence", "Visual - Spatial Intelligence."],
    "correct": 3
  },
  {
    "q": "Which of the following is the most appropriate activity for gifted students?",
    "options": ["Write notes given by the teacher without any mistake.", "Do the activities given in the textbook.", "Write a dramatisation script for the Malayalam poem given in the textbook", "Doing the duties as a class leader"],
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
