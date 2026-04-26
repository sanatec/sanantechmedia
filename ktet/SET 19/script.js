document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
  {
    "q": "Ramu found a boy studying in Blosom public school wearing red shoes. He also found that 5 other students of the same school are wearing red shoes. Then he came to the conclusion that all students in Blosom school wear red shoes. This is an example for:",
    "options": ["Inductive reasoning", "Creative thinking", "Deductive reasoning", "Critical thinking"],
    "correct": 0
  },
  {
    "q": "A child who frequently asks extraordinary questions in the class and who solves problems in an innovative way can be considered as",
    "options": ["Low Achiever", "High Achiever", "Creative", "Intellectually Disabled"],
    "correct": 2
  },
  {
    "q": "Which of the approaches to personality gave emphasize to the nature of human body?",
    "options": ["Trait approach", "Type approach", "Psychoanalytic approach", "Behaviouristic approach"],
    "correct": 1
  },
  {
    "q": "A collection of students' work representing a selection of performance is called:",
    "options": ["Anecdotal Record", "Cumulative Record", "Portfolio", "Logbook"],
    "correct": 2
  },
  {
    "q": "The idea, 'Know oneself' is related to which of the following types of multiple intelligences?",
    "options": ["Interpersonal Intelligence", "Intrapersonal intelligence", "Linguistic intelligence", "Social intelligence"],
    "correct": 1
  },
  {
    "q": "As a teacher, what do you do to promote creativity among students?",
    "options": ["Provide ample opportunities for problem solving.", "Ask challenging questions to students.", "Provide chances for free expression in different situations.", "All of the above."],
    "correct": 3
  },
  {
    "q": "Which of the following is a contribution of Jerome S. Bruner?",
    "options": ["Discovery learning", "Insight learning", "Observational learning", "Trial and Error learning"],
    "correct": 0
  },
  {
    "q": "Vinod is Rani's elder brother. Her parents used to celebrate the birthday of her brother luxuriously and presents him with costly gifts. Whereas, her birthday is celebrated in a dry manner. Here, the parents are showing:",
    "options": ["Gender discrimination", "Gender equality", "Gender neutrality", "Gender role"],
    "correct": 0
  },
  {
    "q": "Which of the following statements is not a characteristic of children with learning disabilities?",
    "options": ["Disabilities in reading and writing", "Difficulties with numbers", "Low achievements in certain subjects", "Low intellectual level"],
    "correct": 3
  },
  {
    "q": "The idea which is not related to sociometry:",
    "options": ["Star", "Clique", "Gang", "Isolates"],
    "correct": 2
  },
  {
    "q": "Which of the following is not a cause for forgetting?",
    "options": ["Fading", "Repression", "Chunking", "Interference"],
    "correct": 2
  },
  {
    "q": "Select the statement related to the Vygotskian view of language development:",
    "options": ["After the age of 1½ years, the child's language and thought development merges together and the child starts to use language for thinking.", "Language development and thought development of the child takes place independently throughout life.", "Language development and thought development occurs parallelly.", "Language development does not influence thought development."],
    "correct": 0
  },
  {
    "q": "Select the correctly matched one:",
    "options": ["Observational Learning - B.F. Skinner", "Trial and Error learning - E.L. Thorndike", "Instrumental Learning - David Ausubel", "Meaningful Reception Learning - Albert Bandura"],
    "correct": 1
  },
  {
    "q": "Intellectual subnormality and lack of adaptive behaviour are the characteristics of - children.",
    "options": ["Intellectually Disabled", "Learning Disabled", "Hearing Impaired", "Visually Impaired"],
    "correct": 0
  },
  {
    "q": "Which of the following is least likely to influence a child's self-esteem?",
    "options": ["Teacher's approval", "Peers' influence", "Parenting styles", "Socio-economic status"],
    "correct": 3
  },
  {
    "q": "Which among the following is not a principle of development?",
    "options": ["Development is a continuous process.", "Development is cumulative in nature.", "Development proceeds from specific to general.", "Development is predictable."],
    "correct": 2
  },
  {
    "q": "Which of the following statements best describes the current approach to assessment?",
    "options": ["Assessment should be integrated with the instructional process.", "Assessment should be done only after completing a unit.", "Assessment should be done only at the end of the academic year.", "Assessment is not essential."],
    "correct": 0
  },
  {
    "q": "Select the odd one from the following:",
    "options": ["Thematic Apperception Test", "Children's Apperception Test", "Word Association Test", "Raven's Progressive Matrices Test"],
    "correct": 3
  },
  {
    "q": "What was the focus of study of David McClelland?",
    "options": ["Achievement motivation", "Intelligence", "Personality traits", "Social learning"],
    "correct": 0
  },
  {
    "q": "It is important for a teacher to create psychological readiness prior to learning. Therefore, the teacher gives examples, asks questions to test previous knowledge, engage in informal talks with students... etc. to create readiness. Here, the teacher is trying to apply the theory of:",
    "options": ["Thorndike's Law of Readiness", "Piaget's Cognitive Development", "Vygotsky's ZPD", "Bruner's Discovery Learning"],
    "correct": 0
  },
  {
    "q": "Manu is a 10 year old boy. His mental age is 14. Based on his IQ, Manu can be classified as:",
    "options": ["Average", "Above average", "Gifted", "Genius"],
    "correct": 2
  },
  {
    "q": "According to Piaget's view of cognitive development, the concrete operational stage is:",
    "options": ["Birth to Two years", "Seven to Eleven years", "Eleven to Fifteen years", "Two to Seven years"],
    "correct": 1
  },
  {
    "q": "Method(s) that can be adopted to cater the needs of children with special needs in inclusive setting include:",
    "options": ["Assistive technology", "Individualised instruction", "Both A and B", "None"],
    "correct": 2
  },
  {
    "q": "The Psychologist who made an authentic study on the Psycho-social development of individuals:",
    "options": ["Lawrence Kohlberg", "Erik Erikson", "Albert Bandura", "Sigmund Freud"],
    "correct": 1
  },
  {
    "q": "The evaluation in which the student is unable to understand the level of his involvement in group learning activities is:",
    "options": ["Evaluation by the teacher", "Continuous evaluation", "Peer evaluation", "Class test"],
    "correct": 2
  },
  {
    "q": "Select the correct statement related to spiral curriculum.",
    "options": ["Representing information through actions.", "Repeating the same content again and again", "Provide topics at an increasing level of complexity", "Provide complex topic initially then simplify it."],
    "correct": 2
  },
  {
    "q": "How many focus areas are in KCF 2023?",
    "options": ["22", "24", "26", "28"],
    "correct": 2
  },
  {
    "q": "'Adolescence is a period of storm and stress' which indicates:",
    "options": ["Emotional Detachment", "Cognitive Development", "Emotional instability", "Social withdrawal"],
    "correct": 2
  },
  {
    "q": "Name the legal concept which holds that juvenile offenders should be treated differently from adult offenders due to their age and developmental stage.",
    "options": ["Juvenile privilege", "IPC", "CRPC", "Parens patriae"],
    "correct": 3
  },
  {
    "q": "Select the most suitable combinations related to ICT from the below. (a) ICT can help in formative assessment. (b) ICT will hinder the student teacher relationship. (c) ICT will destroy the creativity among students. (d) ICT will provide real time interaction with students and teachers. (e) ICT can provide immediate feedback to students.",
    "options": ["(a), (b), and (e) only correct", "(a), (b) and (d) only correct", "(a), (d) and (e) only correct", "(b), (d) and (e) only correct"],
    "correct": 2
  },
  {
    "q": "Select the term that describes the process through which adolescents develop a sense of identity by exploring various roles and possibilities.",
    "options": ["Identity Moratorium", "Identity Diffusion", "Identity Foreclosure", "Identity Crisis"],
    "correct": 0
  },
  {
    "q": "Select the term used to describe the process that individuals use to manage and adapt to challenges and stressors in life.",
    "options": ["Coping", "Resilience", "Adaptation", "Stress management"],
    "correct": 0
  },
  {
    "q": "Select the term used by Jerome S. Bruner to describe the process of transforming information into mental representation.",
    "options": ["Scaffolding", "Discovery learning", "Encoding", "Spiraling"],
    "correct": 2
  },
  {
    "q": "'Teacher a reflective practitioner' means:",
    "options": ["A teacher who critically examines himself or herself and improves teaching.", "A teacher who cares for his or her children.", "A teacher who critically evaluates students and makes comments.", "A teacher who critically evaluates other teachers and makes suggestions."],
    "correct": 0
  },
  {
    "q": "According to Sigmund Freud unresolved conflicts during the developmental stages may lead to:",
    "options": ["Fixation", "Enhanced emotional stability", "Enhanced mental maturity", "Projection"],
    "correct": 0
  },
  {
    "q": "New information interferes with the recall of previously learned information is called:",
    "options": ["Retroactive interference", "Proactive interference", "Regression", "Amnesia"],
    "correct": 0
  },
  {
    "q": "The basic purpose of ego defense mechanisms is:",
    "options": ["To enhance emotional expression", "To reduce anxiety and save the face", "To escape from reality", "To make others in distress"],
    "correct": 1
  },
  {
    "q": "According to David Ausubel's theory the process of connecting new information to existing cognitive structure is known as:",
    "options": ["Subsumption", "Adaptation", "Expository learning", "Superordinate learning"],
    "correct": 0
  },
  {
    "q": "Heightened sensitivity to social evaluation of adolescent is known as:",
    "options": ["Peer pressure", "Person perception", "Social conformity", "Imaginary Audience"],
    "correct": 3
  },
  {
    "q": "Previously conditioned responses decrease in frequency and eventually disappear. It is known as:",
    "options": ["Type 1 conditioning", "Type 2 conditioning", "Extinction", "Generalization"],
    "correct": 2
  },
  {
    "q": "During adolescence students may seek greater independence, leading to challenges in authority. As teacher what is the helpful approach for managing this behaviour in the classroom?",
    "options": ["Encouraging open communication and negotiation", "Ignoring challenging behaviour", "Minimize peer interaction", "Discourage student autonomy"],
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
