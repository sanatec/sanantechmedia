document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
    {
    "q": "Which law ensures 'every child with disability should get free and suitable education up to the age of 18 years'?",
    "options": [
      "Rehabilitation Council of India Act-1992",
      "National Trust Act - 1999",
      "Mental Health Act - 1987",
      "Person With Disabilities (PWD) Act-1995"
    ],
    "correct": 3
  },
  {
    "q": "The process by which children become functioning members of a society:",
    "options": [
      "Maturation",
      "Socialisation",
      "Sanskritization",
      "Modernisation"
    ],
    "correct": 1
  },
  {
    "q": "Which of the following is not a projective test?",
    "options": [
      "Sentence completion test",
      "Rorschach ink blot test",
      "Sociometry",
      "Word association test"
    ],
    "correct": 2
  },
  {
    "q": "The theory of Universal Grammar was proposed by:",
    "options": [
      "Roger",
      "Bandura",
      "Maslow",
      "Chomsky"
    ],
    "correct": 3
  },
  {
    "q": "A motivational theory comprising of human needs, depicted as hierarchical levels is developed by:",
    "options": [
      "Vygotsky",
      "Gagne",
      "Piaget",
      "Maslow"
    ],
    "correct": 3
  },
  {
    "q": "The Structure of Intellect (SI) model was developed by:",
    "options": [
      "Goleman",
      "Spearman",
      "Gardener",
      "Guilford"
    ],
    "correct": 3
  },
  {
    "q": "Chief exponent of Meaningful Verbal learning theory:",
    "options": [
      "Vygotsky",
      "Gagne",
      "Piaget",
      "Ausubel"
    ],
    "correct": 3
  },
  {
    "q": "According to Sigmund Frued's Theory of structure of mind, 'Super Ego' works as per which principle?",
    "options": [
      "Principle of Pleasure",
      "Principle of Morality",
      "Principle of Reality",
      "Principle of Motivation"
    ],
    "correct": 1
  },
  {
    "q": "According to Piaget the cognitive stage that refers 2 to 7 years is:",
    "options": [
      "Pre-operational",
      "Formal operational",
      "Sensory motor",
      "Concrete operational"
    ],
    "correct": 0
  },
  {
    "q": "The first intelligence scale is:",
    "options": [
      "Stanford Binet Scale",
      "Raven's progressive matrices",
      "Wechsler scale",
      "Bhatia's Performance Test"
    ],
    "correct": 0
  },
  {
    "q": "When new information prevents the recall of older information, it is called:",
    "options": [
      "Retro-active Interference",
      "Pro-active Interference",
      "Memory Traces",
      "Retrieval"
    ],
    "correct": 0
  },
  {
    "q": "Social learning theory is associated with:",
    "options": [
      "Skinner",
      "Kohler",
      "Albert Bandura",
      "Maslow"
    ],
    "correct": 2
  },
  {
    "q": "During dictation, Rajesh omits certain words and letters. He is not able to maintain the gap between letters and lines. Which learning disability does the child experience?",
    "options": [
      "Dysgraphia",
      "Dyslexia",
      "Dyscalculia",
      "Dispraxia"
    ],
    "correct": 0
  },
  {
    "q": "In Maslow's Hierarchy of Needs, the Needs found just before love/belonging needs are:",
    "options": [
      "Physiological, Esteem",
      "Safety, Esteem",
      "Safety, Physiological",
      "Esteem, Self actualisation"
    ],
    "correct": 2
  },
  {
    "q": "Teacher uses synetics, Brainstorming, Dramatisation strategies for enhancing which ability of the children?",
    "options": [
      "Metacognition",
      "Intelligence",
      "Creativity",
      "Aptitude"
    ],
    "correct": 2
  },
  {
    "q": "Pranav obeys his parents and teachers only if he is offered with some rewards. According to Kohlberg's theory, he belongs to:",
    "options": [
      "Pre-conventional morality",
      "Conventional morality",
      "Post-conventional morality",
      "Autonomous morality"
    ],
    "correct": 0
  },
  {
    "q": "The Theory of Intelligence proposed by Guilford:",
    "options": [
      "Theory of Multiple Intelligences",
      "Triarchic Theory",
      "Two Factor Theory",
      "Structure of Intellect Model"
    ],
    "correct": 3
  },
  {
    "q": "Introductory statements that encompasses all the concepts to be learned from the lesson is known as:",
    "options": [
      "Concept map",
      "Learning structure",
      "Advance organiser",
      "Cognitive structure"
    ],
    "correct": 2
  },
  {
    "q": "Which of the following increases the rate of responding?",
    "options": [
      "Positive reinforcement",
      "Negative reinforcement",
      "Both (A) and (B)",
      "Punishment"
    ],
    "correct": 2
  },
  {
    "q": "A student who strives to achieve more knowledge and understanding is possessing:",
    "options": [
      "Self actualisation",
      "Deficiency needs",
      "Growth needs",
      "Learning needs"
    ],
    "correct": 2
  },
  {
    "q": "A teacher reflects her anger from her Colleague to Students. It is an example of:",
    "options": [
      "Reaction formation",
      "Projection",
      "Compensation",
      "Displacement"
    ],
    "correct": 3
  },
  {
    "q": "Learning disabilities whose bodily impairments are so severe that they negatively affect the child's educational performance:",
    "options": [
      "Orthopaedic disability",
      "Sensory disability",
      "Neural disability",
      "Mental disability"
    ],
    "correct": 0
  },
  {
    "q": "An Intelligence Test revealed that the IQ score of a child is 140. To which category does he belong?",
    "options": [
      "Mentally Challenged",
      "Learning Disabled",
      "Physically Challenged",
      "Intellectually Superior"
    ],
    "correct": 3
  },
  {
    "q": "Who describes adolescence as the stage of life in which the individual's thoughts lead him to identify his self?",
    "options": [
      "Sigmund Freud",
      "Abraham Maslow",
      "Jean Piaget",
      "Erick Erickson"
    ],
    "correct": 3
  },
  {
    "q": "Which of the following is an example for Intelligence Test?",
    "options": [
      "Stanford Binet Test",
      "Roschach Ink-blot Test",
      "Thematic Apperception Test",
      "Differential Aptitude Test"
    ],
    "correct": 0
  },
  {
    "q": "Which theory is most suitable to describe the acquisition of a motor skill?",
    "options": [
      "Humanistic Theory",
      "Field Theory of Learning",
      "Theory of Classical Conditioning",
      "Trial and Error Learning"
    ],
    "correct": 3
  },
  {
    "q": "Which of the following factor is essential for creativity?",
    "options": [
      "Freedom",
      "Conformity",
      "Convergent thinking",
      "Dependency"
    ],
    "correct": 0
  },
  {
    "q": "A teacher exploits the curiosity of students and tries to make his lessons more interesting to students. Here the teacher is using:",
    "options": [
      "Intrinsic motivation",
      "Extrinsic motivation",
      "Both intrinsic and extrinsic motivation",
      "Neither intrinsic nor extrinsic motivation"
    ],
    "correct": 0
  },
  {
    "q": "Rajan is very proficient in mathematics and hence he is very interested in learning physics. This type of learning is due to:",
    "options": [
      "Positive transfer of learning",
      "Negative transfer of learning",
      "Null transfer of learning",
      "Bilateral transfer of learning"
    ],
    "correct": 0
  },
  {
    "q": "Knowledge acquisition can be viewed as a process of building schemas. Who postulated this theory?",
    "options": [
      "Jerome S. Bruner",
      "Jean Piaget",
      "Lev Vygotsky",
      "J.B. Watson"
    ],
    "correct": 1
  },
  {
    "q": "The following concepts are related to Piaget's theory of cognitive development, except one. Find the odd one.",
    "options": [
      "Accommodation",
      "Assimilation",
      "Scaffolding",
      "Schema"
    ],
    "correct": 2
  },
  {
    "q": "Psycho social development among individuals is due to:",
    "options": [
      "Training",
      "Experiences faced by an individual",
      "Effects of the society",
      "Cognitive development of the individual"
    ],
    "correct": 1
  },
  {
    "q": "The Persons with Disabilities Act (PWD Act), 1995, was replaced by:",
    "options": [
      "PWD Act of 2007",
      "PWD Act of 2016",
      "PWD Act of 2019",
      "PWD Act of 2013"
    ],
    "correct": 1
  },
  {
    "q": "Anil, a secondary school student is not interested in studying mathematics due to the dislikes towards the teacher who teaches the subject. This is based on the principle of:",
    "options": [
      "Socialisation",
      "Isolation",
      "Rejection",
      "Association"
    ],
    "correct": 3
  },
  {
    "q": "Daniel Goleman's theory is basically related to:",
    "options": [
      "Emotional development",
      "Emotional problems",
      "Emotional competence",
      "Intellectual development"
    ],
    "correct": 2
  },
  {
    "q": "The most important factor that the teacher has to consider while introducing a lesson is:",
    "options": [
      "Planning the lesson",
      "Providing feedback",
      "Motivating the students",
      "Selection of learning aids"
    ],
    "correct": 2
  },
  {
    "q": "Which is the most important cause for learning disability?",
    "options": [
      "Genetic factors",
      "Environmental factors",
      "Pedagogical factors",
      "Motivational factors"
    ],
    "correct": 0
  },
  {
    "q": "The undesirable behaviour of Geetha, studying in eighth standard is reduced due to removal of a stimulus is known as:",
    "options": [
      "Positive reinforcement",
      "Negative reinforcement",
      "Positive punishment",
      "Negative punishment"
    ],
    "correct": 3
  },
  {
    "q": "Which of the following is a statement which Skinner's followers would agree?",
    "options": [
      "The whole is greater than sum of its parts.",
      "The goal of behaviour is self-actualisation.",
      "Nature is more important than nurture.",
      "Behaviour can be strengthened through reinforcement."
    ],
    "correct": 3
  },
  {
    "q": "Disabled people of all ages and those learners with 'Special Educational Needs' being placed in mainstream education settings with some adaptations and resources are called:",
    "options": [
      "Segregation",
      "Integration",
      "Inclusion",
      "Accessibility"
    ],
    "correct": 2
  },
  {
    "q": "Which of the following is not a contribution of B.F. Skinner?",
    "options": [
      "Operant conditioning",
      "Schedules of reinforcement",
      "Programmed learning",
      "Insight learning"
    ],
    "correct": 3
  },
  {
    "q": "For better classroom control, a teacher can use:",
    "options": [
      "Give students verbal punishment",
      "Focus attention on problematic individuals",
      "Learn student names as quickly as possible",
      "Disregard student problems"
    ],
    "correct": 2
  },
  {
    "q": "'Girls could not do this job'. This statement made by a male teacher indicates:",
    "options": [
      "Gender sensitivity",
      "Gender discrimination",
      "Gender prejudice",
      "Gender equality"
    ],
    "correct": 2
  },
  {
    "q": "The difference between the actual learning and potential level of learning is known as:",
    "options": [
      "Zone of individual development",
      "Zone of initial development",
      "Zone of potential development",
      "Zone of proximal development"
    ],
    "correct": 3
  },
  {
    "q": "Most influential factor in the social development of an adolescent:",
    "options": [
      "Teacher",
      "Peers",
      "Parents",
      "Media"
    ],
    "correct": 1
  },
  {
    "q": "The beginning of adolescence is marked by the changes in girls and boys associated with:",
    "options": [
      "Cognitive",
      "Biological",
      "Physiological",
      "Developmental"
    ],
    "correct": 1
  },
  {
    "q": "The most determining factor in the academic achievement of a child is:",
    "options": [
      "Interest",
      "Intelligence",
      "Level of Aspiration",
      "Motivation"
    ],
    "correct": 1
  },
  {
    "q": "Rani finds it difficult to adjust with her peer group while engaging in academic activities in school. What is the preliminary step in dealing with the situation?",
    "options": [
      "Encourage the student for active participation",
      "Finding the causes of difficulties",
      "Planning remedial programmes",
      "Using remedial measures"
    ],
    "correct": 1
  },
  {
    "q": "An evaluation tool used to document students learning through series of student developed artefacts is:",
    "options": [
      "Portfolio",
      "Rubrics",
      "Test",
      "Rating Scale"
    ],
    "correct": 0
  },
  {
    "q": "Which of the following can be the most appropriate tool used for measuring the creativity of students?",
    "options": [
      "Observation",
      "Intelligence Test",
      "Project work",
      "Rating Scale"
    ],
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
