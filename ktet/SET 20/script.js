document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
 {
    "q": "Select the name Associated with 'Curve of Forgetting'.",
    "options": ["Tolman", "Terman", "Binet", "Ebbinghaus"],
    "correct": 3
  },
  {
    "q": "Gestalt approach mainly based on:",
    "options": ["Molecular approach", "Molar approach", "Need based approach", "Heredity based approach"],
    "correct": 1
  },
  {
    "q": "In a PTA meeting, the ideal behaviour of a teacher is:",
    "options": ["Answer very shortly for the questions asked by the parents.", "Discuss the abilities and weaknesses of each child commonly to the parents.", "Discuss the abilities and weaknesses of the child separately to the parents", "Communicate about academic matters only."],
    "correct": 2
  },
  {
    "q": "How many RIE (Regional Institute of Education) are there in India?",
    "options": ["4", "5", "6", "7"],
    "correct": 1
  },
  {
    "q": "A child remembers the action of a comedian in the film. Select the stage of the child:",
    "options": ["Iconic Stage", "Enactive Stage", "Intuitive Stage", "Insight Stage"],
    "correct": 1
  },
  {
    "q": "Select the correct expansion of ECCE.",
    "options": ["Elementary Childhood Care and Education.", "Early Childhood Care and Education.", "Early Childhood Counselling and Education.", "Early Childhood Care and Empowerment."],
    "correct": 1
  },
  {
    "q": "'If an unfavourable outcome follows an action, then it becomes less likely to be repeated'. This statement indicates:",
    "options": ["Law of readiness", "Law of disuse", "Law of effect", "Law of exercise"],
    "correct": 2
  },
  {
    "q": "Who developed a theory of connectionism?",
    "options": ["Skinner", "Pavlov", "Watson", "Thorndike"],
    "correct": 3
  },
  {
    "q": "Select the person who described adolescence as 'Strom and Stress'.",
    "options": ["Alfred Adler", "Jean Piaget", "Stanley Hall", "Clark L Hull"],
    "correct": 2
  },
  {
    "q": "To help a student to select the course of study for higher education is known as:",
    "options": ["Vocational guidance", "Personal guidance", "Educational guidance", "None of these"],
    "correct": 2
  },
  {
    "q": "Kerala Curriculum Frame Work was formulated in the year:",
    "options": ["2005", "2007", "2009", "2011"],
    "correct": 1
  },
  {
    "q": "A minor who cannot be controlled by parental authority and commits antisocial or criminal acts, and violence is known as:",
    "options": ["Truant", "Culturally deprived", "Juvenile delinquent", "Socially deprived"],
    "correct": 2
  },
  {
    "q": "Who introduced the technique of mind mapping?",
    "options": ["F Osborn", "Tony Buzan", "SM Corey", "Edgar Dale"],
    "correct": 1
  },
  {
    "q": "Select the person who suggested the theory of cognitive development.",
    "options": ["Erickson", "Freud", "Piaget", "Skinner"],
    "correct": 2
  },
  {
    "q": "A child who is in the habit of stealing is to be dealt with:",
    "options": ["Punishment", "Scolding", "Counselling", "None of the above"],
    "correct": 2
  },
  {
    "q": "Match the following: (a) Kurt Lewin (i) Spiral Curriculum (b) David Ausubel (ii) Animism (c) Jerome S Bruner (iii) Life Space (d) Jean Piaget (iv) Progressive Differentiation",
    "options": ["(a)-(ii), (b)-(iv), (c)-(iii), (d)-(i)", "(a)-(iii), (b)-(iv), (c)-(i), (d)-(ii)", "(a)-(iii), (b)-(i), (c)-(ii), (d)-(iv)", "(a)-(iv), (b)-(iii), (c)-(ii), (d)-(i)"],
    "correct": 1
  },
  {
    "q": "Mili teacher while presenting concepts of Environmental Science, underline the important word of the concept written on the blackboard. While using chart paper she gives a separate colour to the important word. Which Gestalt law of learning, teacher activated here?",
    "options": ["Figure ground relation", "Law of continuity", "Law of proximity", "Law of similarity"],
    "correct": 0
  },
  {
    "q": "Which medium of instruction is most suitable at the primary level for establishing learning with mastery?",
    "options": ["Mother tongue of the child", "Medium of English", "Medium of Hindi", "All the above"],
    "correct": 0
  },
  {
    "q": "Teacher criticised Luke a lot in the class and found fault with him without any reason. He was unable to justify himself before the teacher. Instead, he expressed his anger towards his sister and mother at home. Which defense mechanism Luke used here?",
    "options": ["Regression", "Rationalisation", "Displacement", "Projection"],
    "correct": 2
  },
  {
    "q": "Abraham Maslow's theory proposes the hierarchy of needs related to the study of personality development. Which need corresponds to level 5, the highest level?",
    "options": ["Physiological needs", "Safety", "Esteem needs", "Self actualisation"],
    "correct": 3
  },
  {
    "q": "Providing additional educational opportunities for gifted children other than regular classroom activities is known as:",
    "options": ["Inclusion", "Compensation", "Enrichment", "Mainstreaming"],
    "correct": 2
  },
  {
    "q": "According to Gestalt psychologists the concept of closure means:",
    "options": ["Objects moving in the same direction are perceived as a group.", "Object with a common background is perceived as a group.", "To fill in missing parts to perceive complete forms.", "Similar items are perceived together."],
    "correct": 2
  },
  {
    "q": "Select the most suitable meaning for learning disability.",
    "options": ["A permanent intellectual condition that affects all aspects of learning.", "A neurological condition that affects academic functioning.", "A temporary intellectual condition that affects all aspects of learning.", "A physiological condition that affects all aspects of learning."],
    "correct": 1
  },
  {
    "q": "Select the brain region which is crucial for emotional processing that undergoes significant development during adolescence.",
    "options": ["Hippocampus", "Cerebellum", "Amygdala", "Frontal Cortex"],
    "correct": 2
  },
  {
    "q": "The term used for the process of restructuring or modifying existing block of knowledge to incorporate new information:",
    "options": ["Assimilation", "Accommodation", "Equilibration", "Schema"],
    "correct": 1
  },
  {
    "q": "Biological model of intellectual development is the idea associated with:",
    "options": ["Piaget", "Bruner", "Sheldon", "Cattel"],
    "correct": 0
  },
  {
    "q": "Select the term for the provision of aids and appliances for person with disabilities as mentioned in the PWD act.",
    "options": ["Adaptive technology", "Assistive technology", "Accommodative technology", "Anchoring technology"],
    "correct": 1
  },
  {
    "q": "Which is the primary achievement of the sensory motor stage?",
    "options": ["Object permanence", "Reversibility", "Animism", "Serialization"],
    "correct": 0
  },
  {
    "q": "How can a teacher leader could enhance positive culture in school?",
    "options": ["By promoting competition among students.", "Ignoring the impact of teaching practices on student learning.", "Isolate low achievers from common school events.", "By modelling positive attitude and behaviour"],
    "correct": 3
  },
  {
    "q": "In the theory of psychosocial development, the central conflict during the stage of Industry Vs Inferiority is:",
    "options": ["Exploring responsibilities and taking up", "Achieving a sense of identity", "Achieving intimacy in relationship.", "Achieving competence and mastering skills"],
    "correct": 3
  },
  {
    "q": "According to Kohlberg theory moral development is influenced by:",
    "options": ["Genetic factors only", "Environmental factors only", "Both Cultural and Environment factors", "Both Environmental and Genetic factors"],
    "correct": 3
  },
  {
    "q": "What ethical responsibility should teachers possess in grading and assessment.",
    "options": ["Make subjective assessment in favour some students.", "Make fair and objective assessment of student's work.", "Ignore student's individual needs and preferences.", "Prioritize student's academic achievements rather than personal well-being."],
    "correct": 1
  },
  {
    "q": "Select the components of creativity suggested by Guilford.",
    "options": ["Analysis, Synthesis and Evaluation", "Preparation, Incubation and Illumination", "Fluency, Flexibility and Originality.", "Intelligence, Convergent thinking and Novel thoughts"],
    "correct": 2
  },
  {
    "q": "What is the primary focus of Individualized Education Programme (IEP)?",
    "options": ["To showcase individual achievements.", "To cater the personalized goals, services and opportunities for students with special needs.", "Creating cultural awareness and promote learning and achievement.", "To provide separate classes for the gifted students during school time."],
    "correct": 1
  },
  {
    "q": "According to the person with disabilities act what percentage of reservation is typically provided for persons with disabilities in educational institutions?",
    "options": ["3%", "5%", "7%", "None of these"],
    "correct": 0
  },
  {
    "q": "What is the key goal in supporting individuals with intellectual disabilities?",
    "options": ["Exclusive focusing on academic achievements.", "Segregate the individuals with intellectual disabilities from society.", "Minimizing the adaptive functioning skills.", "Enhancing social and emotional well-being."],
    "correct": 3
  },
  {
    "q": "John is very efficient in finding directions and understanding the traffic routes. According to multiple intelligence theory what type of intelligence John possess?",
    "options": ["Intrapersonal Intelligence", "Visual-Spatial Intelligence", "Naturalistic Intelligence.", "Kinesthetic Intelligence"],
    "correct": 1
  },
  {
    "q": "Select the factors from the below list that is typically associated with increased vulnerability to substance abuse in students. (a) Lack of coping skills (b) Peer pressure (c) Strong academic support (d) Academic stress response (e) Strong family support",
    "options": ["(b), (c) and (e) are correct.", "(a), (b) and (d) are correct.", "(a), (b), (c) and (e) are correct.", "(b), (c), (d) and (e) are correct."],
    "correct": 1
  },
  {
    "q": "Select the term for unlawful behaviour by minors, usually those between the ages of 10 and 17.",
    "options": ["Youth misconduct", "Adolescent transgressions", "Youth abuse", "Juvenile delinquency."],
    "correct": 3
  },
  {
    "q": "Select the most suitable options related to formative assessment.",
    "options": ["Distributing final grades", "To make comparisons among students and give suggestions", "To identify the areas of improvement in students", "To distribute ranks."],
    "correct": 2
  },
  {
    "q": "The adjustment mechanism which is related to creativity:",
    "options": ["Sublimation", "Repression", "Day dreaming.", "Rationalisation"],
    "correct": 0
  },
  {
    "q": "'Girls are more talkative'. This is a comment made by a teacher. Here, the teacher's comment shows:",
    "options": ["gender sensitivity", "gender stereotype", "gender discrimination.", "gender role"],
    "correct": 1
  },
  {
    "q": "Select the category of children that did not come under the PWD Act, 1995.",
    "options": ["Learning disabled", "Leprosy cured", "Blindness", "Mentally retarded."],
    "correct": 0
  },
  {
    "q": "The period of fastest physical growth takes place during the developmental period:",
    "options": ["Childhood", "Infancy", "Adolescence.", "Adulthood"],
    "correct": 1
  },
  {
    "q": "Manu's intelligence is described as 'Bodily Kinesthetic'. Whose theory of intelligence is referred to here?",
    "options": ["Goleman's emotional intelligence.", "Gardner's multiple intelligences.", "Spearman's two factors theory.", "Guilford's structure of Intellect."],
    "correct": 1
  },
  {
    "q": "Remedial Instruction is most suitable for:",
    "options": ["Mentally challenged children.", "Gifted children.", "Socially disadvantaged children.", "Physically challenged"],
    "correct": 0
  },
  {
    "q": "Activity based pedagogy is suggested to teaching children, especially at the primary stage, because they are at the _______ stage of cognitive development.",
    "options": ["concrete operational.", "pre-operational", "formal operational", "sensory-motor"],
    "correct": 0
  },
  {
    "q": "The theory assumes that we all have a set of mental powers which can be trained by practicing certain skills or doing specific subjects. Select the theory.",
    "options": ["Theory of Identical Elements", "Theory of Generalization", "Theory of Formal Discipline.", "Theory of Ideals"],
    "correct": 2
  },
  {
    "q": "The person focuses the sense, from sight to hearing and even smell. It is known as:",
    "options": ["Sensation", "Attention", "Mediation.", "Intuition"],
    "correct": 1
  },
  {
    "q": "Daniel Goleman is associated with:",
    "options": ["Emotional Intelligence", "Artificial Intelligence", "Spiritual Intelligence.", "Fluid Intelligence"],
    "correct": 0
  },
  {
    "q": "Most children become capable of solving abstract problems in a logical fashion during their:",
    "options": ["Sensory motor stage", "Pre-operational stage", "Intuitive stage", "Formal operational stage."],
    "correct": 3
  },
  {
    "q": "According to JP Guilford the components of creative thinking involves:",
    "options": ["Preparation, Incubation, Illumination, Verification", "Fluency, Flexibility, Originality, Evaluation.", "Ideation, Elaboration, Verification, Re-verification", "Imagination, Ideation, Execution, Verification"],
    "correct": 1
  },
  {
    "q": "Suresh failed in his K TET exams. For that he blames his teachers for his failure. This is an example for:",
    "options": ["Reaction formation.", "Sublimation", "Regression", "Projection"],
    "correct": 3
  },
  {
    "q": "Learning tasks for intellectual skills can be organized in a hierarchy according to complexity'. Who proposed this idea?",
    "options": ["Abraham Maslow", "Erick Ericson.", "Kohlberg", "Gagne"],
    "correct": 3
  },
  {
    "q": "Ramu acts from a belief that if he does something wrong, he will be punished. So, he controls his behavior. According to Kohlberg's theory Ramu is in:",
    "options": ["Pre-Conventional Stage", "Conventional Stage", "Post Conventional Stage", "Concrete Operational Stage."],
    "correct": 0
  },
  {
    "q": "Select the person who is associated with the concept 'Collective Unconscious'.",
    "options": ["Carl Jung", "Sigmund Freud.", "R Cattel", "Piaget"],
    "correct": 0
  },
  {
    "q": "Which of the following provides more freedom to the learner to interact?",
    "options": ["Large group discussion", "Seminar", "Lecture by experts", "Small group discussion."],
    "correct": 3
  },
  {
    "q": "Reality principle is related with:",
    "options": ["Id", "Ego", "Super Ego", "None of these."],
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
