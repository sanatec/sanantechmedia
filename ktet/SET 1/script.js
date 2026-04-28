document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
     {
    "q": "According to Eric Ericson's psychosocial development theory, primary school children face the crisis of:",
    "options": [
      "Initiative versus guilt",
      "Identity versus confusion",
      "Industry versus inferiority",
      "Autonomy versus shame"
    ],
    "correct": 2
  },
  {
    "q": "Developing new rules and principles on the basis of given facts and information in memory level is called:",
    "options": [
      "Generalisation",
      "Assimilation",
      "Application",
      "Association"
    ],
    "correct": 0
  },
  {
    "q": "In the classroom activities Femina teacher always gives scope for doing group works. Students are encouraged to share and debate their opinions. This strategy will enable the students to develop:",
    "options": [
      "Verbal Intelligence",
      "Bodily Kinesthetic Intelligence",
      "Intra personal Intelligence",
      "Inter personal Intelligence"
    ],
    "correct": 3
  },
  {
    "q": "For the promotion and development of persons with Disability, an act called PWD act was formulated in the year:",
    "options": [
      "1986",
      "1992",
      "1995",
      "2005"
    ],
    "correct": 2
  },
  {
    "q": "Which of the following is not a stage of concept attainment to learning proposed by Bruner?",
    "options": [
      "Enactive stage",
      "Iconic stage",
      "Problem solving stage",
      "Symbolic stage"
    ],
    "correct": 2
  },
  {
    "q": "Which of the following is not a purpose of progressive education?",
    "options": [
      "Emphasis on learning by doing",
      "Integrated curriculum focussed on thematic units",
      "Importance to test oriented instruction",
      "all the above"
    ],
    "correct": 2
  },
  {
    "q": "Which of the following is not true with regard to the concept of Growth?",
    "options": [
      "Growth describes changes of particular aspects of the body and behaviour of an organism",
      "Growth continues throughout Life",
      "Growth is observable in nature",
      "Growth may or may not bring development"
    ],
    "correct": 1
  },
  {
    "q": "Ravi was not at all interested in reading books. His parents and teachers persuaded him to read books. In the beginning his response was negative. But later reading became a habit of his life. Related with personality, this is an example of:",
    "options": [
      "Incubation",
      "Preparation",
      "Orientation",
      "Functional Autonomy"
    ],
    "correct": 3
  },
  {
    "q": "Which among the following stages does not belong to Piaget's Stages of Cognitive development?",
    "options": [
      "Sensorimotor stage",
      "Pre-operations stage",
      "Concrete operations stage",
      "Iconic stage"
    ],
    "correct": 3
  },
  {
    "q": "The learned concepts will be critically evaluated by the learner and more clarity will be made by themselves through self learning. This meta cognitive level of assessment is called:",
    "options": [
      "Assessment of learning",
      "Assessment for learning",
      "Assessment as learning",
      "All the above"
    ],
    "correct": 2
  },
  {
    "q": "Effective learning takes place:",
    "options": [
      "In an interactive classroom",
      "When the teacher is very strict in class",
      "When the teaching is for preparation of examination",
      "When lot of notes are dictated"
    ],
    "correct": 0
  },
  {
    "q": "Oedipus complex and Electra complex are found among children of early child hood. This was found by:",
    "options": [
      "Freud",
      "Allport",
      "Kohler",
      "Ausubell"
    ],
    "correct": 0
  },
  {
    "q": "Sonu a 7th standard student is learning to ride bicycle for the last one month. Still he is unable to ride the bicycle. This is related with the learning disability:",
    "options": [
      "Dysnomia",
      "Dyspraxia",
      "Dysgraphia",
      "Dyslexia"
    ],
    "correct": 1
  },
  {
    "q": "The potential ability of a person to perform well in a specific area in future is :",
    "options": [
      "Aptitude",
      "Attitude",
      "Creativity",
      "Giftedness"
    ],
    "correct": 0
  },
  {
    "q": "Some parents in the fear of danger/ accident, do not let their children to do any work by themselves. They will do the work for the child. Development of which quality of life is hampered here?",
    "options": [
      "Self learning",
      "Learning by doing",
      "Self dependence",
      "Curiosity"
    ],
    "correct": 2
  },
  {
    "q": "The mental age of Abe is 12. His chronological age is 10. Then his IQ (Intelligent Quotient) is:",
    "options": [
      "83.3",
      "93.3",
      "120",
      "110"
    ],
    "correct": 2
  },
  {
    "q": "It is found that children behave in better way to avoid punishment from their parents. According to Kohlberg's moral development theory, during which stage they behave like this?",
    "options": [
      "Conventional level",
      "Pre conventional level",
      "Post conventional level",
      "Authority level"
    ],
    "correct": 1
  },
  {
    "q": "Which of the following activities is most suitable to develop co-operation among primary school children?",
    "options": [
      "Story telling",
      "Plays",
      "Discussion",
      "Music"
    ],
    "correct": 1
  },
  {
    "q": "Need for affiliation, Need for power, and Need for achievement-These are related with the theory of motivation proposed by:",
    "options": [
      "Maslow",
      "Adler",
      "Bandura",
      "Mc Celland"
    ],
    "correct": 3
  },
  {
    "q": "Which of the following is the least possible characteristics of a creative child?",
    "options": [
      "Fluency, flexibility and originality",
      "Divergent thinking",
      "Articulating ideas, novelty & innovation",
      "Convergent thinking"
    ],
    "correct": 3
  },
  {
    "q": "Which of the following types of mentally challenged children can be educated in an inclusive class room?",
    "options": [
      "Mild and Moderate",
      "Moderate and Severe",
      "Severe and Profound",
      "Profound only"
    ],
    "correct": 0
  },
  {
    "q": "Which of the following is not necessarily true with regard to heredity?",
    "options": [
      "Heredity is considered as a primary social structure",
      "Heredity and environment are important factors in the development of personality",
      "We can not control the heredity factors directly",
      "Heredity is the only important factor in the development of personality"
    ],
    "correct": 3
  },
  {
    "q": "A school staff council has decided that only girls should be allowed to become class leaders and school leader. This is:",
    "options": [
      "A progressive step to give importance to girls",
      "In tune with global trends",
      "A practical solution to solve many issues that a school face",
      "A clear evidence of gender bias"
    ],
    "correct": 3
  },
  {
    "q": "In general Ladies are physically weak. This statement denotes:",
    "options": [
      "Gender discrimination",
      "Gender role",
      "Gender stereotype",
      "Gender equality"
    ],
    "correct": 2
  },
  {
    "q": "Learning is acquisition of concepts. Foundation of learning is Concept formation. Learning is a social process. These ideas were put forwarded by:",
    "options": [
      "Jean Piaget",
      "Lev Vygotsky",
      "Noam Chomsky",
      "Jerome. S Bruner"
    ],
    "correct": 1
  },
  {
    "q": "Vijeesh, an academically backward student participated in music competition and catched the attention of others. Which type of Defense Mechanism has been adopted by Vijeesh?",
    "options": [
      "Projection",
      "Rationalization",
      "Sublimation",
      "Compensation"
    ],
    "correct": 3
  },
  {
    "q": "Which among the following is Not a reason for Learning Disability?",
    "options": [
      "Hereditary factors",
      "Mental factors",
      "Environmental factors",
      "None of these"
    ],
    "correct": 3
  },
  {
    "q": "Work sheets and models supplied by Leela teacher helped Neethu in overcoming the difficulties and she easily found the result of scientific experiments. The scaffolding provided by the teacher belongs to which type of evaluation?",
    "options": [
      "Assessment of Learning",
      "Assessment as Learning",
      "Assessment for Learning",
      "Internal Assessment of Learning"
    ],
    "correct": 2
  },
  {
    "q": "A child who obeys the rules like crossing the road only through zebra lines, depositing waste materials in waste bins, belongs to which stage of Kolberg's moral development theory?",
    "options": [
      "Social Contract Orientation",
      "Punishment and Obedience",
      "Universal Ethical Principle Orientation",
      "Law and Order Orientation"
    ],
    "correct": 3
  },
  {
    "q": "Which of the following is Not a stage of problem solving?",
    "options": [
      "Defining the Problem",
      "Evaluation of the Problem",
      "Identifying the Problem",
      "Hypothesis Formation"
    ],
    "correct": 1
  },
  {
    "q": "Jhon, a first STD student stops crying and expresses happiness upon listening to the song of the teacher. Which characteristic of children's emotion is exhibited here?",
    "options": [
      "Intense",
      "Frequent",
      "Transitory",
      "Emotional detectability"
    ],
    "correct": 2
  },
  {
    "q": "According to Catherin Bridges emotional development theory, children exhibit negative emotions at the age of six onwards. Which are the negative emotions?",
    "options": [
      "Fear, disgust, Jealousy",
      "Fear, disgust, Distress",
      "Fear, disgust, Anger",
      "Fear, disgust, Worry"
    ],
    "correct": 2
  },
  {
    "q": "While teacher enters in the class all the students stand up. This activity is related to which type of attention?",
    "options": [
      "Voluntary Attention",
      "Habitual Attention",
      "Involuntary Enforced Attention",
      "Voluntary Enforced Attention"
    ],
    "correct": 1
  },
  {
    "q": "Babu Learned English in the fourth STD with the fear of the English Teacher. On reaching sixth STD he got a similar teacher and the fear increased. It is related to which principle in Pavlov's conditioning?",
    "options": [
      "Stimulus Generalisation",
      "Spontaneous Recovery",
      "Extinction",
      "Stimulus Reinforcement"
    ],
    "correct": 0
  },
  {
    "q": "A Performs all mental processes orderly and systematically. Intentionally solves emotional disturbances and Frustrations. These statements denote which type of personality?",
    "options": [
      "Social personality",
      "Cultural personality",
      "Emotional personality",
      "Mature Personality"
    ],
    "correct": 3
  },
  {
    "q": "A person who can ride a bicycle can ride a motor bike. It is an example for which type of Transfer of Learning?",
    "options": [
      "Zero Transfer",
      "Negative Transfer",
      "Low Transfer",
      "Positive Transfer"
    ],
    "correct": 3
  },
  {
    "q": "Equal volume of milk was taken in two vessels. One of which was transferred to a flat vessel. On asking which vessel contains more milk, child replied it as the Flat vessel. According to Piaget it is due to which limitation in the cognitive level?",
    "options": [
      "Conservation",
      "Animism",
      "Reversibility",
      "Ego centric thought"
    ],
    "correct": 0
  },
  {
    "q": "Which among the following strategies cannot be used for motivating the learners?",
    "options": [
      "Learning experiences child friendly and based on ability",
      "Setting unattainable goals",
      "Provide innovative experiences",
      "none of the above"
    ],
    "correct": 1
  },
  {
    "q": "Participating in club activities at school, visiting hospitals and orphanages etc. are activities related to which aspects of Multiple Intelligence?",
    "options": [
      "Spatial Intelligence",
      "Naturalistic Intelligence",
      "Inter personal Intelligence",
      "Intra personal Intelligence"
    ],
    "correct": 2
  },
  {
    "q": "Who coined the term 'Emotional Intelligence'?",
    "options": [
      "Goleman",
      "Thurstone",
      "Gardener",
      "Binet"
    ],
    "correct": 0
  },
  {
    "q": "A basic form of learning in which the learner is rewarded with incentives as reinforcement:",
    "options": [
      "Trial and error learning",
      "Insight learning",
      "Classical conditioning",
      "Operant conditioning"
    ],
    "correct": 3
  },
  {
    "q": "Which among the following is not a formative assessment strategy?",
    "options": [
      "Questioning",
      "Think - Pair - share",
      "Annual Examination",
      "Student's reflection"
    ],
    "correct": 2
  },
  {
    "q": "A strategy of teaching and learning in which students team together work to explore a significant project:",
    "options": [
      "Individualized learning",
      "Co-operative learning",
      "Seminar presentation",
      "Social drama"
    ],
    "correct": 1
  },
  {
    "q": "Which of the following program aim to provide additional educational opportunities to gifted children?",
    "options": [
      "Providing independent academic projects",
      "Providing thought provoking assignments",
      "Simplifying the subject content",
      "Maintaining progress record properly"
    ],
    "correct": 0
  },
  {
    "q": "Who developed the two factor theory of intelligence?",
    "options": [
      "Weschler",
      "Spearman",
      "Raven",
      "Binet"
    ],
    "correct": 1
  },
  {
    "q": "According to Gordon Allport which of the following is not a personality trait?",
    "options": [
      "Cardinal Trait",
      "Central Trait",
      "Secondary Trait",
      "Surface Trait"
    ],
    "correct": 3
  },
  {
    "q": "Compilation of academic work and other forms of educational evidence for evaluating learning progress is called:",
    "options": [
      "Portfolio",
      "Action research",
      "Project",
      "Anecdotal record"
    ],
    "correct": 0
  },
  {
    "q": "An unconscious psychological mechanism adopted by the individual to tackle a frustrating situation is:",
    "options": [
      "Conflict",
      "Adjustment Mechanism",
      "Maladjustment",
      "Adjustment"
    ],
    "correct": 1
  },
  {
    "q": "The book 'frames of mind-the theory of multiple intelligence' written by?",
    "options": [
      "Golman",
      "Gagne",
      "Gardner",
      "Guilford"
    ],
    "correct": 2
  },
  {
    "q": "The factor which is responsible for all the inborn traits:",
    "options": [
      "Environment",
      "Education",
      "Culture",
      "Heredity"
    ],
    "correct": 3
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
