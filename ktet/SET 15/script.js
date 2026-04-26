document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
  {
    "q": "Which region of our brain controls the motor function?",
    "options": ["Thalamus.", "Hypothalamus", "Cerebellum.", "Cerebral Cortex."],
    "correct": 2
  },
  {
    "q": "'Really we are not studying language. Specific language elements and grammar are growing in the mind of the child through universal grammar.' - Whose words are this?",
    "options": ["Jean Piaget", "B.F. Skinner", "Noam Chomsky", "Jerome S. Bruner."],
    "correct": 2
  },
  {
    "q": "Sman can easily tell the answer for 4×10 as 40. But he is unable to answer the question - the cost of one ball pen is 10, then what is the total cost of 4 such pens? What may be the reason for this?",
    "options": ["Sman does not know the multiplication table.", "The practical problems of this type are not analysed properly in the class and method of solving is not well explained.", "Nobody is there in the home to help Sman.", "Sman is afraid of word problems."],
    "correct": 1
  },
  {
    "q": "Mil got very low grade in English examination. She was severely criticised by the teacher for this. Her parents also criticised a lot. Thereafter she attended tests and examinations with anxiety only. This exemplifies which psychological approach to learning?",
    "options": ["Pavlov's classical conditioning", "Skinner's Operant conditioning", "Gestalt's insight learning", "Piaget's cognitive learning."],
    "correct": 0
  },
  {
    "q": "Manu didn't get the expected job. To overcome the mental stress due to this, he talks a lot about the responsibilities and difficulties of the job. Which defense mechanism is used here?",
    "options": ["repression", "projection", "rationalisation", "sublimation."],
    "correct": 2
  },
  {
    "q": "The student Ayan shows obedience in the fear of getting punishment. The moral value of respect elders and parents is not in his mind. In which level of Lawrence Kohlberg's moral development does he belong?",
    "options": ["Pre conventional level", "Conventional level", "Post conventional level", "Non conventional level."],
    "correct": 0
  },
  {
    "q": "The feeling of shame and anger develops in which stage of development?",
    "options": ["Infancy", "Childhood", "Adolescence", "Adulthood."],
    "correct": 1
  },
  {
    "q": "Technique that is used to find the strength of social relationship among the members of a group.",
    "options": ["Introspection", "Observation", "Sociometry", "Projective method."],
    "correct": 2
  },
  {
    "q": "Neha teacher gave varieties of activities to comprehend 5 + 3 = 8 in the class. At the end one student Miya asked, 'then 8 - 3 = 5. Is it teacher?' In which stage of cognitive development proposed by Jean Piaget is Miya now?",
    "options": ["Sensory motor stage", "Pre operational stage", "Concrete operational stage", "Formal operational stage"],
    "correct": 2
  },
  {
    "q": "'Through assimilation and accommodation children develop increasingly more advanced and integrated schemas overtime. These are the methods for equilibration.' These are mentioned by:",
    "options": ["B.F. Skinner", "Jean Piaget", "Jerome S. Bruner", "R.M. Gagne."],
    "correct": 1
  },
  {
    "q": "For enabling better learning among learners, which among the following is essential for the teacher?",
    "options": ["Knowledge about the learner", "Thorough content knowledge", "Knowledge about various transaction modalities", "All the above."],
    "correct": 3
  },
  {
    "q": "The concept of critical pedagogy stresses that:",
    "options": ["varieties of experiences and perceptions received by the learner are very important.", "the teacher should lead the classroom learning process.", "rote learning and repeated learning are important.", "summative assessment is more important."],
    "correct": 0
  },
  {
    "q": "'Dyslexia' is associated mainly with which disability?",
    "options": ["hearing", "reading", "writing", "all the above."],
    "correct": 1
  },
  {
    "q": "On the first day of the school itself, Ajitha teacher asked the students to write five or more sentences about themselves. Teacher gave this activity:",
    "options": ["to know the residential area of students.", "to know about the parents.", "to know the spelling mistakes while writing.", "to understand the child, his/her social status and entry level."],
    "correct": 3
  },
  {
    "q": "Which of the following is a wrong statement regarding emotions of children?",
    "options": ["Emotions are intense", "Emotions are temporary", "Emotions are frequent", "Emotions are stable."],
    "correct": 3
  },
  {
    "q": "The ideas and concepts acquired through learning are critically examined and changes are made is a type of assessment. This is known as:",
    "options": ["assessment as learning", "assessment of learning", "assessment for learning", "self assessment."],
    "correct": 0
  },
  {
    "q": "Merin teacher after discussing about plants in the class formed groups of five and lead them to the school garden to observe and understand the peculiarities of various plants. Teacher observed the performance of various groups. Teacher gave this activity:",
    "options": ["to improve sociability of children", "to facilitate activity based learning", "to promote co-operative learning", "for all the above."],
    "correct": 3
  },
  {
    "q": "Abi and Babi are two friends of fourth standard. Abi learns the concepts presented in the class within no time. But Babi takes more time and additional support to learn the concepts. Which developmental principle is reflected here?",
    "options": ["development is continuous", "development is interrelated", "development follows individual difference", "development is spiral."],
    "correct": 2
  },
  {
    "q": "Intelligent Quotient (I.Q) of Arun is 120. If the chronological age is 15, which of the following is his mental age?",
    "options": ["15", "16", "18", "None of the above."],
    "correct": 2
  },
  {
    "q": "Which are the two factors in the 'two factor theory of Intelligence' by Charles Spearman?",
    "options": ["g factor and f factor", "g factor and s factor", "s factor and k factor", "s factor and f factor."],
    "correct": 1
  },
  {
    "q": "Which of the following is the top most need in the hierarchy of needs proposed by Abraham Maslow?",
    "options": ["self actualisation", "esteem needs", "safety needs", "physiological needs."],
    "correct": 0
  },
  {
    "q": "Some parents in the fear of danger/accident, do not let their children to do any work by themselves. They will do the work for the child. Development of which quality of the child is hampered here?",
    "options": ["self independence", "curiosity"],
    "correct": 0
  },
  {
    "q": "A student who writes 'deb' instead of 'bed' has the disability:",
    "options": ["Dyslexia", "Dysgraphia", "Dyscalculia", "Dyspraxia."],
    "correct": 0
  },
  {
    "q": "A period of emotional instability is:",
    "options": ["Infancy", "Early Childhood", "Adolescence", "Adulthood."],
    "correct": 2
  },
  {
    "q": "The image of the white rose the girl saw in the early morning is in her mind. This is due to:",
    "options": ["Sensation", "Reasoning", "Creativity", "Perception."],
    "correct": 3
  },
  {
    "q": "A moron is:",
    "options": ["Hearing Impaired", "Visually Challenged", "Mentally Challenged", "Learning Disabled Child."],
    "correct": 2
  },
  {
    "q": "Bridges' chart is related to:",
    "options": ["Cognitive development", "Physical development", "Emotional development", "Social development"],
    "correct": 2
  },
  {
    "q": "The term 'private speech' is related to:",
    "options": ["Chomsky", "Kohlberg", "Vygotsky", "Piaget."],
    "correct": 2
  },
  {
    "q": "'Sour grapes' comes under the adjustment mechanism:",
    "options": ["Projection", "Rationalization", "Compensation", "Repression."],
    "correct": 1
  },
  {
    "q": "According to Erik Erikson identity vs role confusion occur in an individual in the age:",
    "options": ["12 to 18", "3 to 5", "18 to 40", "5 to 12."],
    "correct": 0
  },
  {
    "q": "Every living organism would like to remain in the existing state of equilibrium. This concept was proposed by:",
    "options": ["Pavlov", "Piaget", "Vygotsky", "Bruner."],
    "correct": 1
  },
  {
    "q": "The term chunking is related to:",
    "options": ["Attention", "Memory", "Perception", "Learning"],
    "correct": 1
  },
  {
    "q": "According to Kohlberg, individuals judge morality in terms of existing group norm and social rules at the age group of:",
    "options": ["13 and beyond", "4 to 10 years", "10 to 13 years", "Below 4 years."],
    "correct": 2
  },
  {
    "q": "Programmed learning is based on the theory of:",
    "options": ["Pavlov", "Skinner", "Kohler", "Bandura."],
    "correct": 1
  },
  {
    "q": "The Culture fair test for measuring intelligence was prepared by:",
    "options": ["Catell", "Bhatia", "Wechsler", "Binet."],
    "correct": 0
  },
  {
    "q": "A girl says 'I would dance like Sobhana' and she tries for that. This concept of learning belongs to:",
    "options": ["Bandura", "Vygotsky", "Ausubel", "Bruner."],
    "correct": 0
  },
  {
    "q": "The term personal disposition was first used by:",
    "options": ["Catell", "Allport", "Eysenck", "Freud"],
    "correct": 1
  },
  {
    "q": "The term 'MKO' was proposed by:",
    "options": ["Kohlberg", "Vygotsky", "Chomsky", "Suchman."],
    "correct": 1
  },
  {
    "q": "According to Abraham Maslow, the highest level in the hierarchy of needs is:",
    "options": ["Physiological needs", "Safety needs", "Love and belonging", "Self actualization."],
    "correct": 3
  },
  {
    "q": "Children's Apperception Test was developed by:",
    "options": ["Bellak", "Morgan", "Murry", "C.G. Jung."],
    "correct": 0
  },
  {
    "q": "According to Piaget, in Cognitive development, the stage characterised by 'symbolic play' is:",
    "options": ["Sensory motor stage", "Pre- conceptual stage", "Concrete operational stage", "Formal operational stage."],
    "correct": 1
  },
  {
    "q": "The period which is known as 'pre gang age' is:",
    "options": ["Infancy", "Early childhood", "Late childhood", "Adolescence"],
    "correct": 1
  },
  {
    "q": "A teacher asks questions to students while demonstrating an experiment in the classroom. This evaluation is:",
    "options": ["Summative", "Comprehensive", "Formative", "None of these."],
    "correct": 2
  },
  {
    "q": "In Guilford's model of intelligence memory comes under:",
    "options": ["Units", "Products", "Operations", "Contents."],
    "correct": 2
  },
  {
    "q": "Bond theory of learning was proposed by:",
    "options": ["Pavlov", "Thorndike", "Skinner", "Bandura."],
    "correct": 1
  },
  {
    "q": "The name Wertheimer is related to learning theory:",
    "options": ["Conditioning", "Insightful Learning", "Trial and Error Learning", "Constructivism."],
    "correct": 1
  },
  {
    "q": "Genetic epistemology is the contribution of",
    "options": ["Piaget", "Vygotsky", "Bruner", "Dewey"],
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
