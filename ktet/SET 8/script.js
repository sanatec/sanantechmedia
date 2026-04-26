document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
  {
    "q": "If a student in your class is weak in your subject, what will you do?",
    "options": ["Provide remedial coaching.", "Give peer coaching", "Avoid the student as it may be consuming the time of other students", "Make the teaching fast so that student's comprehension level may increase"],
    "correct": 0
  },
  {
    "q": "A child bitten by a white dog is not afraid of black dogs. This is an example of:",
    "options": ["Stimulus generalisation", "Stimulus substitution", "Stimulus discrimination.", "Spontaneous recovery"],
    "correct": 2
  },
  {
    "q": "Which of the following reinforcement schedule is least effecting extinction?",
    "options": ["Fixed interval reinforcement schedule", "Fixed ratio reinforcement schedule", "Continuous reinforcement schedule", "Variable interval reinforcement schedule."],
    "correct": 3
  },
  {
    "q": "Disabled people of all ages being placed in mainstream education settings with some adaptations and resources is called:",
    "options": ["Segregation", "Inclusion.", "Accessibility", "Integration"],
    "correct": 1
  },
  {
    "q": "Learning disabled children are:",
    "options": ["Deficient in potentials", "Low in intelligence", "Neurologically deficient.", "Slow in activity"],
    "correct": 2
  },
  {
    "q": "Shiju, a seventh standard student always makes errors in place value while doing mathematical calculations. Which of the following type of learning disability is this?",
    "options": ["Dyspraxia", "Dyscalculia", "Dysgraphia.", "Dyslexia"],
    "correct": 1
  },
  {
    "q": "How did Vygotsky view cognitive development?",
    "options": ["Development as a sequence of learning stimulus-response associations", "Intellectual development is the result of experiences of children in terms of social and cultural contexts", "Development is genetically predetermined", "Development is the result of biological maturation."],
    "correct": 1
  },
  {
    "q": "Anu studying in eighth standard finds it difficult to balance chemical equations. According to Piaget, he is deficient in:",
    "options": ["Object permanence", "Conservatism", "Reversible thinking.", "Logical reasoning"],
    "correct": 2
  },
  {
    "q": "Which of the following does not indicate an effective teacher?",
    "options": ["A teacher teaches with enthusiasm.", "A teacher finds innovative strategies in teaching", "A teacher puts emphasis more on teaching than classroom management", "A teacher is interested in making the subject matter understood rather than completing the content"],
    "correct": 2
  },
  {
    "q": "To sustain maximum attention of students in classroom, a teacher can use:",
    "options": ["Variety of learning situations", "Narrative sequences", "Lecturing slowly and steadily.", "Tutorial methods"],
    "correct": 0
  },
  {
    "q": "A teacher wants to develop metacognitive skills in his/her students. Which of the following is the most appropriate strategy that can be used for that?",
    "options": ["Lecturing", "Brainstorming", "Journaling", "Recitation"],
    "correct": 2
  },
  {
    "q": "Ramu is an average student in academic performance but he is trying to excel in sports and succeeds to a great extent in sports performances. This is known as:",
    "options": ["Projection", "Identification", "Compensation.", "Repression"],
    "correct": 2
  },
  {
    "q": "A teacher who tries to apply social constructivism in classroom is using:",
    "options": ["Collaborative learning", "Brainstorming", "Simulation", "Questioning."],
    "correct": 0
  },
  {
    "q": "The type of guidance given to students which enable themselves to adjust with the environment and become an efficient citizen is:",
    "options": ["Personal Guidance.", "Educational Guidance.", "Vocational Guidance", "Group Guidance"],
    "correct": 0
  },
  {
    "q": "Which one of the following is not a tool for thinking?",
    "options": ["Reinforcement", "Symbols", "Language", "Concepts."],
    "correct": 0
  },
  {
    "q": "Ramu is an average student in academic performance but he is trying to excel in sports and succeeds to a great extent in sports performances. This is known as:",
    "options": ["Projection", "Compensation.", "Identification", "Repression"],
    "correct": 1
  },
  {
    "q": "Rany, an upper primary school student can learn and perform better through group works and discussion method. She is dominant in:",
    "options": ["Linguistic intelligence", "Interpersonal intelligence", "Bodily-Kinaesthetic intelligence", "Logical mathematical intelligence."],
    "correct": 1
  },
  {
    "q": "Association between stimulus and response leading to learning is emphasised in:",
    "options": ["Behaviourism", "Cognitivism", "Constructivism.", "Humanism"],
    "correct": 0
  },
  {
    "q": "The fact that objects that are near each other tend to be grouped together is known as:",
    "options": ["Closure", "Similarity", "Proximity.", "Continuity"],
    "correct": 2
  },
  {
    "q": "A teacher wants to provide group guidance in his/her school. The guidance become successful when",
    "options": ["The group members have too many problems", "The group is of homogenous type.", "The group members cooperate with the teacher", "The group is of heterogeneous type"],
    "correct": 1
  },
  {
    "q": "Teenage self-esteem is often affected by:",
    "options": ["Ability", "Appearance.", "Curiosity", "Relationships"],
    "correct": 1
  },
  {
    "q": "While teaching the concept 'metals', teacher provides different examples and make the students to arrive at a definition of the concept by analysing the characteristics. Here the teacher emphasises:",
    "options": ["Inductive approach", "Intuitive approach.", "Analytic approach", "Deductive approach"],
    "correct": 0
  },
  {
    "q": "A prominent feature of social development of an adolescent is:",
    "options": ["Forming gangs", "Maintaining social status", "Denial of friendship", "More importance for peer group."],
    "correct": 3
  },
  {
    "q": "How did Vygotsky view cognitive development?",
    "options": ["Development as a sequence of learning stimulus-response associations", "Intellectual development is the result of experiences of children in terms of social and cultural contexts", "Development is genetically predetermined", "Development is the result of biological maturation."],
    "correct": 1
  },
  {
    "q": "While constructing learning curves as a self assessment tool, many of the students have frequent plateaus in the curve. Which of the following can be the most appropriate reason for this?",
    "options": ["Improper method of teaching", "Innovative teaching strategies.", "Realistic level of aspiration", "High level of motivation"],
    "correct": 0
  },
  {
    "q": "Which of the following activity is suitable for gifted children?",
    "options": ["Enrichment programmes.", "Double promotion", "Special classes", "All the above"],
    "correct": 3
  },
  {
    "q": "Who among the following is a social constructivist?",
    "options": ["Maget", "Bruner", "Skinner.", "Lewin"],
    "correct": 1
  },
  {
    "q": "Level of aspiration refers to:",
    "options": ["Where and how far individuals set goals for emancipation", "Where and how far individuals determines their destiny", "Where and how far individuals set their targets for achievement", "Where and how far individuals set goals for attain learning outcomes."],
    "correct": 2
  },
  {
    "q": "An Indian model of education proclaims that knowledge and work are not separate as its basic principle. Which is the model?",
    "options": ["Nai Talim", "Nalanda", "Viswabharti", "Takshashila."],
    "correct": 0
  },
  {
    "q": "The Ego defense mechanism is:",
    "options": ["Part of the Ego state that prevents emotional thinking.", "Part of the unconscious that attempts to control unacceptable Id influences.", "Part of the reflections to reduce psychological barriers.", "Part of the Ego state from which id develops."],
    "correct": 1
  },
  {
    "q": "The psychoanalytic experts explain a phenomenon as an attempt to integrate values learned from parents and society. How do you name it?",
    "options": ["Ego.", "Sublimation.", "Id.", "Superego."],
    "correct": 3
  },
  {
    "q": "Which of the following is not a stage of moral development proposed by Kohlberg?",
    "options": ["Pre conventional stage", "Conventional stage", "Formal operational stage", "Post conventional stage"],
    "correct": 2
  },
  {
    "q": "John, a ninth standard student, has a complaint on the scores that he scored in a subject. He argues that he deserves better score and only because of the teacher's personal reasons he lost it. Suppose you are the teacher, how do you tackle this issue?",
    "options": ["Make it clear from the beginning exactly what you expect in papers or tests", "Argue him on the teacher's ethics and try to make him believe your integrity", "Tell him to hand over the complaint to higher authority", "Give more scores after revaluing the."],
    "correct": 0
  },
  {
    "q": "According to Gagne's hierarchy of learning, which of the following comes at the highest level?",
    "options": ["Signal learning", "Verbal association", "Concept learning.", "Problem solving"],
    "correct": 3
  },
  {
    "q": "A student has hero worship towards his favourite cricket player. He imitates that cricket player's characteristics, dressing style and mannerisms and feels proud of his hero's success. Which defense mechanism does the student use?",
    "options": ["Identification", "Rationalisation", "Projection.", "Repression"],
    "correct": 0
  },
  {
    "q": "Which of the following is not a characteristic of a person having emotional intelligence?",
    "options": ["Identifies his own emotions", "Works in accordance with his own emotions", "Understands others emotions", "Develops healthy relationships."],
    "correct": 1
  },
  {
    "q": "Morphemes are the:",
    "options": ["Smallest distinctive sound unit.", "First stage of language development.", "Discourse in language.", "Smallest meaningful language unit."],
    "correct": 3
  },
  {
    "q": "Enrichment programmes are more suitable for the education of:",
    "options": ["Gifted children", "Visually impaired children", "Hyperactive children", "Academically backward children."],
    "correct": 0
  },
  {
    "q": "Dyspraxia is associated with:",
    "options": ["Mental disorder", "Mathematical disorder", "Reading disorder", "Motor co-ordination disorder."],
    "correct": 3
  },
  {
    "q": "Which of the following is not true regarding children's emotional conditions?",
    "options": ["Emotion affects social relations", "Emotion affects physical growth", "Emotions affect psychological climate.", "Emotions interfere with mental activities"],
    "correct": 3
  },
  {
    "q": "Social change during adolescence include:",
    "options": ["Fear and Shame", "Adult like behaviour.", "Restlessness", "Imagination"],
    "correct": 1
  },
  {
    "q": "To which of the following the laws of proximity, similarity and closure are related?",
    "options": ["Constructivism", "Gestalt psychology", "Theory of Psycho analysis.", "Behaviourism"],
    "correct": 1
  },
  {
    "q": "According to Maslow, the highest need an individual can fulfil is:",
    "options": ["Self-concept", "Self-esteem", "Self-actualization.", "None of these"],
    "correct": 2
  },
  {
    "q": "Which of the following is used to make inferences about the learning and development of students?",
    "options": ["Evaluation", "Assessment", "Diagnosis", "All the above."],
    "correct": 3
  },
  {
    "q": "According to Guilford's theory of structure of intellect, which are the three parameters of intelligence?",
    "options": ["Content, assessment, product", "Product, operation, assessment", "Content, product, operation", "Operation, product, assessment."],
    "correct": 2
  },
  {
    "q": "To break the given information into small parts and to examine the information is termed as:",
    "options": ["Evaluation", "Analysis", "Synthesis.", "Integration"],
    "correct": 1
  },
  {
    "q": "Language Acquisition Device (LAD) is a psychological construct which emphasizes:",
    "options": ["Environmental influences on language learning", "Imitation in language learning", "Use of reinforcement in language learning", "Language factor in the brain"],
    "correct": 3
  },
  {
    "q": "Which of the following is a learning disability?",
    "options": ["Mental retardation", "Dyslexia", "ADHD.", "Autism"],
    "correct": 1
  },
  {
    "q": "Which of the following is not a principle of development?",
    "options": ["Development is continuous", "Different areas develop at different rates", "There are individual differences in development", "Development is abstract."],
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
