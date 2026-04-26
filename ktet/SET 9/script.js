document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
  {
    "q": "Swathi couldn't find the correct answer to the mathematics puzzle, teacher had given in the class. But the problem was still in her mind even after she reached home. Then all of a sudden, she got the problem solving strategy and found out the correct answer. To which of the following this can be related?",
    "options": ["Trial and error learning", "Observation learning", "Insight learning", "Repetitive learning."],
    "correct": 2
  },
  {
    "q": "Which of the following statement best describes new approach to assessment?",
    "options": ["Assessment should be done after completing a unit", "Assessment should be integrated with the instructional process", "Assessment should be done only by teachers who are specially trained in the area of assessment", "None of these"],
    "correct": 1
  },
  {
    "q": "Which of the following is least likely to influence children's self-esteem?",
    "options": ["Exposure in social media.", "Teacher's approval", "Peer's influence", "Parenting styles"],
    "correct": 0
  },
  {
    "q": "Which of the following is the final stage of psycho social development as proposed by Erick Erickson?",
    "options": ["Autonomy Vs Shame", "Trust Vs mistrust", "Ego- integrity Vs despair.", "Identity formation Vs Identity confusion"],
    "correct": 2
  },
  {
    "q": "Which of the following technique is used for the education of children with special needs?",
    "options": ["Technological approach", "Multisensory approach", "Individualised approach instructional.", "All the above"],
    "correct": 3
  },
  {
    "q": "Association between Stimulus and Response leading to learning is emphasized by:",
    "options": ["Humanism", "Constructivism", "Behaviourism.", "Cognitivism"],
    "correct": 2
  },
  {
    "q": "In the context of learning theories, 'Scaffolding' refers to:",
    "options": ["identify the causes of mistakes done by the students.", "review of knowledge acquired.", "the support provided to the learner by elders or teachers.", "to ascertain the previous knowledge of the child."],
    "correct": 2
  },
  {
    "q": "A child's entry to the school can be described as an entry to the life of the child'. These words of Erickson is related with which stage of Psycho social development?",
    "options": ["Trust Vs Mistrust", "Autonomy Vs Shame/doubt", "Identity Vs Identity confusion", "Industry Vs Infiriority."],
    "correct": 3
  },
  {
    "q": "According to Noam Chomsky, the rudimentary form of language is being:",
    "options": ["found in society", "stored in brain", "transferred through education.", "developed by interaction"],
    "correct": 1
  },
  {
    "q": "Which of the following is not the characteristic of a constructivist teacher?",
    "options": ["friend and guide", "encourage", "strict in activating.", "researcher"],
    "correct": 2
  },
  {
    "q": "The 'feeling' aspect related to the behavioural change falls in - domain of learning.",
    "options": ["Cognitive", "Affective", "Psychomotor.", "All the above"],
    "correct": 1
  },
  {
    "q": "Through assimilation and accommodation children develop increasingly more advanced and integrated schemas over time'. Whose words are this?",
    "options": ["Jerome S. Bruner.", "Piaget", "Skinner", "Vygotsky"],
    "correct": 1
  },
  {
    "q": "The topmost hierarchy in Maslow's hierarchy of needs:",
    "options": ["aesthetic needs", "self actualisation", "safety needs", "biological needs."],
    "correct": 1
  },
  {
    "q": "Which of the following can be found by using an Intelligence Test?",
    "options": ["Attitude of the learner", "Problem solving ability of the learner.", "Aptitude of the learner", "Interest of the learner"],
    "correct": 1
  },
  {
    "q": "The mental age and chronological age of a student are same. What can be inferred from this with regard to the IQ of the student?",
    "options": ["The IQ will be more than 130", "The IQ will be 120", "The IQ will be 100", "The IQ will be less than 100."],
    "correct": 2
  },
  {
    "q": "EQ was described deeply and popularised by",
    "options": ["Charles Spearman", "Alfred Binet", "Howard Gardner", "Daniel Goleman."],
    "correct": 3
  },
  {
    "q": "Which method is most suitable for primary classes?",
    "options": ["lecture method", "seminar", "story telling method.", "discussion"],
    "correct": 2
  },
  {
    "q": "Capacities to perceive the visual world around accurately and to perform transformations on one's initial perceptions is Gardener's - intelligence.",
    "options": ["Logical Mathematical.", "Visual, Spatial", "Naturalistic", "Existential"],
    "correct": 1
  },
  {
    "q": "Arun is trying to ride bicycle for one month. But still he cannot ride it smoothly. Which learning Disability is this?",
    "options": ["Dyslexia", "Dysnomia", "Dysgraphia", "Dyspraxia."],
    "correct": 3
  },
  {
    "q": "The stage of cognitive development, according to piaget, to which a child displays organised logical thinking' is:",
    "options": ["Sensory motor stage", "Pre-operational stage", "Formal operational stage"],
    "correct": 2
  },
  {
    "q": "In classical conditioning, the conditional response and the unconditional response are:",
    "options": ["Same", "Different", "Can be same or different.", "Variedly different"],
    "correct": 2
  },
  {
    "q": "When a student draws a generalization from a number of experimental situations, this reasoning can be called:",
    "options": ["Deductive", "Inductive", "Inducto- deductive.", "Illogical"],
    "correct": 1
  },
  {
    "q": "Which is not an aim of evaluation?",
    "options": ["Labelling", "Giving feedback", "Diagnosis and remedial measures.", "Placement"],
    "correct": 0
  },
  {
    "q": "The process of solving problems by combining ideas or behaviours in new ways:",
    "options": ["Creativity", "Heuristic", "Algorithm", "Mean- end- Analysis."],
    "correct": 0
  },
  {
    "q": "Which of the following can be considered as a secondary trait?",
    "options": ["Leadership", "Intelligence", "Aggressiveness.", "Interest in fashion"],
    "correct": 3
  },
  {
    "q": "Intellectual disability or mental retardation is defined as scoring below - - - - - - - - - - - - - - - - - - - - on intelligence tests.",
    "options": ["70", "120.", "20", "100"],
    "correct": 0
  },
  {
    "q": "Which of the following is the basic cause for learning disability?",
    "options": ["School climate", "Heredity", "Socio-economic status of family.", "Faulty learning"],
    "correct": 1
  },
  {
    "q": "A nursery kid is not to be forced to write, because",
    "options": ["lack of intelligence", "lack of maturity of fine motor muscles.", "lack of maturity of gross motor muscles", "lack of interest"],
    "correct": 1
  },
  {
    "q": "The primary source of socialization for a child is:",
    "options": ["Family", "Religion", "Neighbourhood.", "School"],
    "correct": 0
  },
  {
    "q": "In trial and error theory:",
    "options": ["learning is occurred by chance", "right responses are selected from among so many responses after repeated trials", "the organism reaches the point of success slowly", "all the above."],
    "correct": 3
  },
  {
    "q": "Goleman has proposed that intelligence is a more powerful influence on success in life than other forms of intelligence.",
    "options": ["Analytic", "Creative", "Emotional.", "Practical"],
    "correct": 2
  },
  {
    "q": "When a conditioned response briefly reappears after it has been extinguished is called:",
    "options": ["Extinction", "Higher order conditioning", "Spontaneous recovery", "Stimulus generalisation."],
    "correct": 2
  },
  {
    "q": "Which of the following is not a principle of development?",
    "options": ["Development involves changes.", "Development is the product of maturation and learning.", "Development pattern is unpredictable", "There are individual differences in development."],
    "correct": 2
  },
  {
    "q": "Performance test of intelligence is most suitable for:",
    "options": ["Deaf and dumb children", "Backward children", "Mentally retarded children.", "Gifted children"],
    "correct": 0
  },
  {
    "q": "Alok a 7th standard student is very slow in all the activities related with learning and shows very low improvement. Teacher may identify Alok as:",
    "options": ["mild retarded", "normal", "severely retard", "profoundly retarded."],
    "correct": 0
  },
  {
    "q": "A male teacher who always praises boys and ignores girl's responses in his class, is showing:",
    "options": ["gender sensitivity", "gender bias", "gender role", "gender identity."],
    "correct": 1
  },
  {
    "q": "Albert Bandura's processes of observational learning are:",
    "options": ["Attention, Retention, Performance, Motivation", "Attention, Interest, Activities, Retention.", "Interest, Attention, Perception, Performance", "Attention, Retention, Motivation"],
    "correct": 0
  },
  {
    "q": "Sequential curriculum is the contribution of:",
    "options": ["Ausubel", "Skinner", "Vygotsky.", "Bruner"],
    "correct": 3
  },
  {
    "q": "Development of human beings starts from:",
    "options": ["Pre-natal Stage", "Infancy Stage.", "Pre-childhood Stage", "Post-childhood Stage"],
    "correct": 0
  },
  {
    "q": "Which of the following is wrongly paired?",
    "options": ["Classical conditioning - Pavlov", "Operant conditioning - Skinner", "Concept learning - Bruner", "Observation learning - Thorndike."],
    "correct": 3
  },
  {
    "q": "According to Psychoanalytic theory of personality neurotic disorders are caused by:",
    "options": ["Faulty learning", "Defence mechanisms", "Dreaming", "Repression of desires."],
    "correct": 3
  },
  {
    "q": "Actually it is not one particular condition, it is a set of behaviour such as excessive restlessness and short attention span'. It refers to:",
    "options": ["Autism", "ADHD", "Cerebral palsy", "Mental retarda."],
    "correct": 1
  },
  {
    "q": "In Gardner's view, who among the following possesses more visual - spatial intelligence.",
    "options": ["Athletes", "Artists", "Psychologists.", "Leaders"],
    "correct": 1
  },
  {
    "q": "Which of the following is not a primary reinforcer?",
    "options": ["Praising a child", "Petting a dog", "A glass of water.", "A candy bar"],
    "correct": 0
  },
  {
    "q": "Whose theory best explains the Psycho- social development of a person?",
    "options": ["Erik Erikson", "Sigmund Freud.", "Kohlberg", "Havighurst"],
    "correct": 0
  },
  {
    "q": "The inability to see the world through any one else's eyes, except one's own:",
    "options": ["Conservation", "Egocentrism", "Object permanence.", "Irreversibility"],
    "correct": 1
  },
  {
    "q": "The method of solving specific problems based on general principles is",
    "options": ["Inductive method", "Deductive method.", "Analytical method", "Experimental method"],
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
