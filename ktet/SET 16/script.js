document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
  {
    "q": "ZPD stands for:",
    "options": ["The zone of partial development", "The zone of potential development", "The zone of proximal development", "The zone of permanent development"],
    "correct": 2
  },
  {
    "q": "Select the person who introduced the term inclusive education:",
    "options": ["Guilford", "Kurt Lewin", "John Dewey", "Marc Gaspard"],
    "correct": 3
  },
  {
    "q": "A child does homework everyday because he will get punishment if he fails to do it. This is due to:",
    "options": ["Intrinsic motivation", "Extrinsic motivation", "Interest", "Fear of Failure"],
    "correct": 1
  },
  {
    "q": "Who among the following is an environmentalist?",
    "options": ["Goddard", "Francis Galton"],
    "correct": 1
  },
  {
    "q": "Which among the following is not an assumption on Life Span Perspective (LSP) on development?",
    "options": ["Development is lifelong", "Development is influenced by historical conditions", "Development is uni-directional", "Development is highly plastic"],
    "correct": 2
  },
  {
    "q": "Which theory of personality was developed by Sigmund Freud?",
    "options": ["Psychoanalytic", "Gender based", "Psychosocial", "Behaviouristic"],
    "correct": 0
  },
  {
    "q": "The psychologist who proposed the 'The law of effect' is:",
    "options": ["Pavlov", "Watson", "Thorndike", "Watson and Rayner"],
    "correct": 2
  },
  {
    "q": "The process of child development begins at stage:",
    "options": ["Birth", "Natal", "Embryonic", "Childhood"],
    "correct": 2
  },
  {
    "q": "The ability of a student to apply the acquired knowledge to solve problems in similar or related situations is known as:",
    "options": ["Attitude", "Motivation", "Transfer of learning", "Generalization"],
    "correct": 2
  },
  {
    "q": "Personality is a learned response to patterns of reinforcement or personality can be explained in terms of the effects of external stimuli on behavior. This statement is based on the theory:",
    "options": ["Behaviourist theory", "Psycho analytical theory", "Social cognitive theory", "Humanistic theory"],
    "correct": 0
  },
  {
    "q": "Assessment, evaluation and mentoring are equally important in teaching - learning process. The mentoring portal introduced by Government of Kerala to facilitate school education is:",
    "options": ["Samagra", "Sahitham", "iEXAMS", "Kerala results"],
    "correct": 0
  },
  {
    "q": "It is common among adolescent to starve themselves in pursuit of getting slim body. This eating disorder is known as:",
    "options": ["Bulimia Nervosa", "Binge eating disorder", "Rumination disorder", "Anorexia Nervosa"],
    "correct": 3
  },
  {
    "q": "Which type of class leadership is best in classroom management?",
    "options": ["Authoritarian", "Flexible", "Democratic", "Rigid"],
    "correct": 2
  },
  {
    "q": "An intelligence test is conducted for two students A and B having 10 years old. The mental age of A is found to be 10 and that of B is 14. From this one can arrive at the conclusion:",
    "options": ["IQ level of both the students are same", "IQ level of A is greater than that of B", "IQ level of B is greater than that of A", "Both the students are low level of IQ"],
    "correct": 2
  },
  {
    "q": "If a student is not giving answer to the question that you asked during teaching-learning process in classroom, the teacher should:",
    "options": ["Give the correct answer loudly", "Ask the student to write the answer 100 times", "Try to understand why that student was not able to give correct answer", "Scold him and give mild punishment"],
    "correct": 2
  },
  {
    "q": "The factor which affect least in the teaching-learning process is:",
    "options": ["Learning environment", "Teaching methodology", "Personality of teacher", "Attention and interest of learners"],
    "correct": 2
  },
  {
    "q": "'I go for cycling everyday. I just love it. I spare some time for it everyday from my busy work schedule'. This is an example for:",
    "options": ["Intrinsic motivation", "Praising oneself", "Achievement motivation", "Self handicapping"],
    "correct": 0
  },
  {
    "q": "Psycho social Learning theory was proposed by:",
    "options": ["Bruner", "Eric H. Erikson", "Piaget", "Sigmund Freud"],
    "correct": 1
  },
  {
    "q": "Teaching through inductive method is:",
    "options": ["from easy to difficult", "from specific to general", "from general to specific", "from process to product"],
    "correct": 1
  },
  {
    "q": "Consider the following two situations. Situation 1: An adolescent person is singing a music in front of audience. Situation 2: An adolescent person is running in a race with four other athletes. Which of the following factors is present in situation 2, but not in situation 1?",
    "options": ["Arousal", "Evaluation apprehension", "Competition", "Familiar task"],
    "correct": 2
  },
  {
    "q": "Freud suggested different psychosexual stages during the development of an individual. The correct order is:",
    "options": ["oral, anal, phallic, genital", "genital, oral, anal, phallic", "anal, oral, phallic, genital", "phallic, oral, anal, genital"],
    "correct": 0
  },
  {
    "q": "Inductive thought is:",
    "options": ["Intuitive and haphazard thought", "Thought which infers a principle from a series of specific examples or situations", "Thought that applies a general set of rules to specific situations", "Random and illogical thought"],
    "correct": 1
  },
  {
    "q": "Who was the chairperson of national steering committee for framing NCF-2005?",
    "options": ["Yash Pal", "Krishna Kumar", "NCERT Director", "Kapil Sibal"],
    "correct": 0
  },
  {
    "q": "Abraham Maslow put forth the idea of hierarchy of needs. Some of the human needs he proposed are: (i) Physiological needs (ii) Security and safety needs (iii) Love and belongingness needs (iv) Aesthetic needs (v) Self actualization needs. According to Maslow the correct order of needs is:",
    "options": ["(i), (ii), (iii), (iv), (v)", "(ii), (i), (iii), (iv), (v)", "(i), (ii), (v), (iii), (iv)", "(iii), (iv), (v), (i), (ii)"],
    "correct": 0
  },
  {
    "q": "The gradual weakening of a conditioned response by repeated stimulations without reinforcement is:",
    "options": ["Extinction", "Generalisation", "Discrimination", "Adaptation"],
    "correct": 0
  },
  {
    "q": "Zero transfer is otherwise known as:",
    "options": ["Positive transfer", "Negative transfer", "Neutral transfer", "Enhanced transfer"],
    "correct": 2
  },
  {
    "q": "The psychologist who wrote the book 'Adolescence' and described adolescence as 'a time of storm and stress' is:",
    "options": ["G. Stanley Hall", "Sigmund Freud", "Erik Erikson", "Jean Piaget"],
    "correct": 0
  },
  {
    "q": "Curriculum means:",
    "options": ["The summary of the topics covered or units to be taught in the particular subject.", "The standard sequence of planned experiences that students practice and achieve proficiency in content and applied learning skills.", "A small part of a course of instruction.", "A document that outlines the content of a lesson that is to be taught in one day."],
    "correct": 1
  },
  {
    "q": "In Pavlov's experiment conducted on dog, the unconditioned and conditioned response is related with:",
    "options": ["Meat powder", "Salivation", "Cage", "Bell"],
    "correct": 1
  },
  {
    "q": "The educational portal of Kerala Government, 'Samagra' is useful in accessing resources except:",
    "options": ["e-resources and edutainment", "Question bank and general resources", "Soft copies of text books for standard 1 to 12", "Curriculum of D.El.Ed."],
    "correct": 3
  },
  {
    "q": "Which of the following are environmental stressors which create unpleasant psychological state in adolescents? (i) Noise (ii) Crowding (iii) Natural disaster",
    "options": ["(i) only", "(ii) only", "(i) and (iii)", "(i), (ii) and (iii)"],
    "correct": 3
  },
  {
    "q": "Adolescent thinking is systematic in problem solving. Piaget called this type of logical thinking as",
    "options": ["Trial and error method", "Hypothetical deductive reasoning", "Pre-operational thought", "Intuitive thought"],
    "correct": 1
  },
  {
    "q": "NCF 2005 suggests teaching - learning process to be as:",
    "options": ["Teaching is a process for construction of knowledge", "Teaching should not be beyond imparting of information", "Teaching - learning process should be through only experimentation method", "For more content transaction, teaching should be done through lecture method"],
    "correct": 0
  },
  {
    "q": "The factor which do not affect teaching learning process is:",
    "options": ["Classroom environment", "Use of effective methodology", "Financial status of learner", "Use of teaching aids"],
    "correct": 2
  },
  {
    "q": "Preparation of lesson plan does not involve:",
    "options": ["Identification of learning objective", "Plan the specific learning activities", "Plan to sequence the lesson in an engaging and meaningful manner", "Plan to punish students who does not listen in class"],
    "correct": 3
  },
  {
    "q": "Which of the following is not a role of good teacher?",
    "options": ["Strict discipline maker by giving punishments", "Democratic leader all the time especially during classroom activities", "Guide and counselor by understanding students needs", "Motivator and Facilitator for all learners"],
    "correct": 0
  },
  {
    "q": "Learning process involves three stages, Enactive stage, Iconic stage and Symbolic stage. This concept was introduced by:",
    "options": ["Jerome S. Bruner", "Albert Bandura", "Abraham Maslow", "Jean Piaget"],
    "correct": 0
  },
  {
    "q": "Consider the following statements and select the correct choice. (i) Learning which involves the act of discrimination is called discrimination learning. (ii) Learning which involves the using of some machines is called motor learning. (iii) Learning which involves the formation of concepts is called concept learning.",
    "options": ["(i) and (ii) are correct", "(i), (ii) and (iii) are correct", "(ii) and (iii) are correct", "(i) and (iii) are correct"],
    "correct": 3
  },
  {
    "q": "Match List-1 with List-II: List-1 (a) ADHD (b) Cerebral Palsy (c) Down Syndrome; List-II (1) Group of disorders that affect movement of muscles (2) A chronic condition including attention difficulty, hyperactivity and impulsiveness (3) Most common genetic disorder caused when abnormal cell division results in extra genetic material from chromosome 21",
    "options": ["(a)-(1), (b)-(2), (c)-(3)", "(a)-(2), (b)-(1), (c)-(3)", "(a)-(3), (b)-(2), (c)-(1)", "(a)-(1), (b)-(3), (c)-(2)"],
    "correct": 1
  },
  {
    "q": "Which of the following is not related to Right to Education Act, 2009?",
    "options": ["It prohibits physical punishment and mental harassment of students", "It specifies the duties and responsibilities of appropriate governments, local authority and parents in providing free and compulsory education", "It directs the appointment of trained and qualified teachers", "It directs free and compulsory education to all children of age 6 to 18"],
    "correct": 3
  },
  {
    "q": "Which of the following is not a primary task in instructional process involved in teaching?",
    "options": ["Choosing objectives", "Understanding student characteristics", "Selecting and using methods and practices of teaching", "Obey the instructions given by headmaster"],
    "correct": 3
  },
  {
    "q": "Teaching strategy is formulated during:",
    "options": ["Pre-active stage", "Interactive stage", "Post-active stage", "Experimentation"],
    "correct": 0
  },
  {
    "q": "The psychologist who explained knowledge development as a process of equilibrium using two main concepts, assimilation and accommodation is",
    "options": ["Jerome S. Bruner", "Albert Bandura", "Abraham Maslow", "Jean Piaget"],
    "correct": 3
  },
  {
    "q": "Some pairs regarding experiment conducted by psychologist are given. The incorrect pair is:",
    "options": ["Pavlov - Dog", "Thorndike - Cat", "Kohler - Pigeon", "Skinner - Rat"],
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
