document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
  {
    "q": "Which of the following is not a projective test?",
    "options": ["Differential aptitude test.", "Rorschach's ink blot test.", "Thematic Apperception test.", "Sentence completion test."],
    "correct": 0
  },
  {
    "q": "The existing Kerala Curriculum Framework is formulated in the year :",
    "options": ["2007", "2005", "2009", "2016"],
    "correct": 0
  },
  {
    "q": "The agency entitled to look after educational technology in Kerala :",
    "options": ["SEIT", "SCERT", "SIET", "SIEMAT."],
    "correct": 2
  },
  {
    "q": "Which is Kerala's 24*7 official educational channel?",
    "options": ["Victors", "Vigyan bharathi.", "Gyan Darshan", "Edu-Victors"],
    "correct": 0
  },
  {
    "q": "Individual Education and Care Plan designed for differently abled children will help to:",
    "options": ["Motivate children to actively participate in sports activities", "Motivate children to actively participate in artistic activities", "Scaffold children to attain high score", "Scaffold children to attain daily living skills."],
    "correct": 3
  },
  {
    "q": "Chairman of 'Pothuvidyabhyasa Samrakshana Yajnam' is:",
    "options": ["General Education Minister", "Higher Education Minister", "Chief Minister."],
    "correct": 2
  },
  {
    "q": "Chairman of drafting committee of National Education Policy, 2019:",
    "options": ["Kasturirangan", "Ramachandr", "Vasudha Kamat", "Manjul Bhargava."],
    "correct": 0
  },
  {
    "q": "Piaget's development theory highlights that the children can reason about hypothetical entities in the :",
    "options": ["Preoperational stage", "Sensory-motor stage", "Formal operational stage.", "Concrete operational stage"],
    "correct": 2
  },
  {
    "q": "Key objective of continuous and comprehensive evaluation is:",
    "options": ["Prepare progress report", "Identify student's weakness.", "Scaffold students for further improvement", "Motivate to write more and examinations"],
    "correct": 2
  },
  {
    "q": "Learning through mother tongue will help a learner to :",
    "options": ["Attain learning strategies", "Attain educational goals", "Comprehend others voices", "Comprehend content easily."],
    "correct": 3
  },
  {
    "q": "I don't care' attitude of a learner reflects :",
    "options": ["Sublimation", "Aggression", "Denial"],
    "correct": 2
  },
  {
    "q": "School readiness skills are developed and most free time is spent playing with friends are major characteristics of",
    "options": ["Infancy.", "Early childhood.", "Early adulthood.", "Late childhood."],
    "correct": 1
  },
  {
    "q": "Learner's prior knowledge assessment will help a teacher to choose :",
    "options": ["Need based teaching learning strategies", "Right based gatherings", "Plan for group assignments", "Guidelines for reference."],
    "correct": 0
  },
  {
    "q": "Computer assisted instructional strategies are footing on:",
    "options": ["Classical conditioning", "Operant conditioning", "Situational conditioning", "Techno friendly conditioning"],
    "correct": 1
  },
  {
    "q": "Rights of Persons With Disability Act, 2016 assures opportunity for :",
    "options": ["Special education", "Inclusive education", "Special education Zone.", "Special Skill education"],
    "correct": 1
  },
  {
    "q": "The existing National Curriculum Framework is formulated in the year:",
    "options": ["2007", "2005", "2009.", "2016"],
    "correct": 1
  },
  {
    "q": "Grades that are assigned according to cut-off levels decided before the start of the course is known as :",
    "options": ["Absolute grading", "Relative grading", "Direct grading", "Comparative grading."],
    "correct": 0
  },
  {
    "q": "Which of the following Act is NOT included for the children with special needs?",
    "options": ["Human Right Act", "Mental Health Act", "Person with Disabilities Act.", "National Trust Act"],
    "correct": 0
  },
  {
    "q": "Which among the following statements is NOT related with dyslexia ?",
    "options": ["Some words are left out while reading", "Reads without stopping where it should.", "Leaving one or two lines", "Reading without understanding the meaning"],
    "correct": 3
  },
  {
    "q": "Which of the following is NOT a principle of development?",
    "options": ["Development is orderly.", "Development proceeds from specific to general", "Development is predictable", "Development is cumulative"],
    "correct": 1
  },
  {
    "q": "Which of the following is NOT given as an instruction for teaching slow learners?",
    "options": ["Give simple learning activities which can successfully be completed", "Give challenging learning tasks.", "Give small and organised learning topics.", "all the above."],
    "correct": 1
  },
  {
    "q": "Which one is the correct process stages of observational learning theory?",
    "options": ["Modelling, Attention, Motor reproduction, Retention", "Attention, Modelling, Motor reproduction, Reinforcement", "Motor reproduction, Retention, Modelling, Attention", "Modelling, Attention, Retention, Motor reproduction."],
    "correct": 3
  },
  {
    "q": "Ramesh master gave group activities and provided chances to share experience in the classroom. Which type of intelligence of student's will be improved through these activities?",
    "options": ["Intra-personal intelligence", "Bodily kinaesthetic intelligence", "Linguistic intelligence", "Inter-personal intelligence"],
    "correct": 3
  },
  {
    "q": "Which among the following statements can be considered as a definition of Emotional Intelligence?",
    "options": ["Ability to control the emotional state intellectuals", "Ability to understand the emotional state of one self and others", "Be self-motivated.", "All of the above"],
    "correct": 3
  },
  {
    "q": "Which is the correct basic parameters of J.P. Guilford's Structure of Intellect Model?",
    "options": ["Products, Operations, Units", "Operations, Contents, Products.", "Contents, Products, Classes", "Operations, Contents, Relations"],
    "correct": 1
  },
  {
    "q": "In which stage of psycho-sexual development of Sigmund Freud can be seen the features of Electra Complex and Oedipus Complex?",
    "options": ["Genital Stage", "Latency Stage", "Phallic Stage.", "Anal Stage"],
    "correct": 2
  },
  {
    "q": "Which of the following concepts are considered in Carl Rogers view of personality theory?",
    "options": ["Self-actualisation, Ideal Self, Real Self", "Ideal Self, Unconditional Positive Regard, Real Self", "Ideal Self, Matured Personality, Unconditional Positive Regard", "Matured Personality, Ideal Self, Unconditional Positive Regard."],
    "correct": 1
  },
  {
    "q": "Find out the factor of intelligence according to Sternberg, that specifies the ability to behave up to the situation and make the environment favourable to the individual.",
    "options": ["Componential Intelligence", "Experiential Intelligence", "Contextual Intelligence", "Crystalised Intelligence."],
    "correct": 2
  },
  {
    "q": "Which of the following is NOT a principle of development?",
    "options": ["Development is orderly", "Development proceeds from specific to general", "Development is predictable.", "Development is cumulative"],
    "correct": 1
  },
  {
    "q": "Which type of assessment is a part of classroom observation, discussions in the class and feedback of the student?",
    "options": ["Assessment of learning", "Assessment for learning", "Assessment as learning.", "All the above"],
    "correct": 1
  },
  {
    "q": "Sangeetha teacher divided the students into six groups, then part of same article was given to each group. The groups were given the opportunity to ask questions each other. Summarise the ideas, explain some parts and comment on what will happen next. What is the strategy adopted by the teacher here?",
    "options": ["Discovery learning", "Concept attainment model."],
    "correct": 0
  },
  {
    "q": "It is better to clean the classroom by girls, let the boys arrange the benches and desks.' Class teacher announced. This statement of the teacher indicates:",
    "options": ["Gender stereotype", "Gender Discrimination.", "Gender bias", "Gender identity"],
    "correct": 0
  },
  {
    "q": "Which of the following represents the correct hereditary factors that influence in the development of a person?",
    "options": ["Sex, Nutrition, Order of birth, Race", "Glands, Family status, Sex, Order of birth", "Sex, Race, Glands, Order of birth", "Glands, Sex, Race, Intelligence."],
    "correct": 2
  },
  {
    "q": "Thematic Apperception Test (TAT) is used for assessing",
    "options": ["Memory", "Personality", "Intelligence.", "Aptitude"],
    "correct": 1
  },
  {
    "q": "\"The students who have not done the homework will not be permitted to play in the seventh period\". Radha teacher announced. Just then some students started to do their homework. Which learning technique is used by the teacher here?",
    "options": ["Positive reinforcement", "Law of readiness", "Negative reinforcement", "Law of effect."],
    "correct": 2
  },
  {
    "q": "Which among the following is the suitable example for approach-avoidance conflict?",
    "options": ["Playing with friends and watching cricket in T.V.", "Father will beat and teacher will punish if did not go to school for pretending stomach ache.", "Have to play computer game and watch cartoon.", "Have to see the horrible online class of teacher and to go for playing football."],
    "correct": 3
  },
  {
    "q": "The P.T.A. decided to expel a child for regular theft from the school. But the class teacher requested to give him an opportunity to continue his education by understanding his family background, justice and equality to the child. Which of the moral principles of Kohlberg is related with the dealing of the teacher?",
    "options": ["Punishment and Obedience", "Universal Ethical Principle", "Law and Order Orientation.", "Social Contract Orientation"],
    "correct": 1
  },
  {
    "q": "Which mental ability according to Piaget, if accomplished by a child who is talking to his pillow pretending it as his girl friend?",
    "options": ["Egocentric thought", "Animism", "Symbolic thought.", "Centration"],
    "correct": 2
  },
  {
    "q": "Which of the following is NOT included in the Developmental Task of Robert J. Havighurst?",
    "options": ["Aesthetic force", "Physical maturation", "Values and aspirations.", "Cultural pressure"],
    "correct": 0
  },
  {
    "q": "Which of the following is a teacher related factor affecting learning?",
    "options": ["Nature of content or structure of text books", "Availability of teaching - learning resources", "Proper seating arrangement", "Mastery over the subject matter."],
    "correct": 3
  },
  {
    "q": "When a child gets bored while doing a task, it is a sign that",
    "options": ["The task may have become mechanically repetitive", "The child is not intelligent", "The child is not capable of learning.", "The child needs to be disciplined"],
    "correct": 0
  },
  {
    "q": "Which of the following is the first step in the scientific method of problem solving?",
    "options": ["Collection of relevant informations", "Problem awareness", "Verification of hypothesis.", "Formation of hypothesis"],
    "correct": 1
  },
  {
    "q": "The teacher never gives answer to questions him/her self. He/she encourages his/her students to suggest answers, have group discussions and adopt collaborative learning. This approach is based on the principle of",
    "options": ["Setting a good example and being a role model", "Readiness to learn", "Active participation.", "Proper organisation of instructional materials"],
    "correct": 2
  },
  {
    "q": "The most appropriate sequence in teaching is :",
    "options": ["Teaching - Planning - Reflection - Feedback", "Reflection - Teaching - Planning - Feedback", "Planning - Teaching - Reflection - Feedback", "Planning - Teaching - Feedback - Reflection"],
    "correct": 2
  },
  {
    "q": "'Law of closure' is related to which school of psychology?",
    "options": ["cognitive school", "Behavioural school.", "Gestalt School", "Cognitive constructivist school"],
    "correct": 2
  },
  {
    "q": "In order to explain his theory, a term 'purposive behaviourism' was used by an educational thinker who?",
    "options": ["J.S. Bruner.", "Tolman", "Piaget", "Tagore"],
    "correct": 1
  },
  {
    "q": "Ranjini who learned to play violin is able to play guitar as well. It can be explained that Ranjini",
    "options": ["is a born artist", "is a gifted person", "generalised her learning", "Transferred her learning"],
    "correct": 3
  },
  {
    "q": "Proportional representation of content, objectives and types of questions of a test are related to",
    "options": ["Objectivity", "Blue print.", "Consistency", "Reliability"],
    "correct": 1
  },
  {
    "q": "Learners display individual differences. So a teacher should",
    "options": ["Increase number of tests", "Insist on uniform pace of learning", "Provide a variety of learning experience","Enforce strict dicipline"],
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
