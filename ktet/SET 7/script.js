document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
  {"q":"Nail biting, scratching the head, aggression, truancy etc are some of the behaviours-persistently shown by a student in lower primary class, the child may be :","options":["Maladjusted","Well-adjusted","Learning disabled.","Gifted child"],"correct":0},
  {"q":"In order to increase the speaking and writing capacity of students, a teacher can enable the learner","options":["to participate in story telling","to listen to recorded drama","to engage in free conversation","all of the above."],"correct":3},
  {"q":"According to Vygotsky, which among the statements is TRUE with regard to child's development?","options":["Child's development occurs first at individual level and later at social level.","Child's development occurs first at social level and later at individual level.","Social level has least importance in the development of the child.","Social level alone influences the development of the child."],"correct":1},
  {"q":"Which of the following is related to the emotional development of children?","options":["Snellen's chart","Bridges chart","Flow chart","Rebus picture."],"correct":1},
  {"q":"Which of the following is not a characteristics of creativity ?","options":["Flexibility","Originality","Practicality","Repeatability."],"correct":3},
  {"q":"Who among the following is associated with hierarchy of learning?","options":["Abraham Maslow","Edgar Dale","Howard Gardner","Robert Gagne"],"correct":3},
  {"q":"Which one of the following is a projective test used to assess personality?","options":["Questionnaire","Case study.","MMPI","TAT"],"correct":3},
  {"q":"Who proposed the theory of achieveme motivation?","options":["Abraham Maslow","Carl Rogers","David Mc Cleland.","E.L. Thorndike"],"correct":2},
  {"q":"Which among the following is common among teachers and counsellors ?","options":["Facilitating","Empathy","Disciplining","Evaluation."],"correct":1},
  {"q":"At night Gopi was woken up by some strange sound from outside the house. Though he couldn't make out what exactly the sound was, he assumed it must be wind blowing on trees, and went to sleep peacefully. The cognitive process occurred in his assumption is:","options":["Accommodation","Inductive Reasoning","Assimilation","Deductive Reasoning."],"correct":2},
  {"q":"Pick the qualities of a creative person from the following:","options":["Sensitivity and fluency","Fluency and rigidity","Rigidity and sensitivity","Fluency and conformity"],"correct":0},
  {"q":"Interacting with students and influencing them to achieve learning objectives is-------- role of a teacher.","options":["Management","Leadership .","Persuasive","Executive"],"correct":1},
  {"q":"Development proceeds from:(i) Center to peripheral(ii)Head to feet","options":["(i) is wrong and (ii) is correct","(i) and (ii) are correct","(ii) is wrong and (i) is correct.","(i) and (ii) are wrong"],"correct":1},
  {"q":"Reshmy teacher is a strict disciplinarian who insists on punctuality among her students. One day she reached school late due to a valid reason. Reshmy's students criticized her and labelled her as one who does not practice what she preaches. Which among the following DOES NOT explain student's response?","options":["Adolescents takes principles ideally.","Early adolescents take rule and laws as the essence of right and wrong.","Adolescent students dislike strict teachers.","Adolescents are capable of reasoning, but their thinking is affected by lack of maturity."],"correct":2},
  {"q":"Words that are actually written with their real meaning is called:","options":["Transformational Structure","Deep Structure","Social Structure","Surface Structure."],"correct":3},
  {"q":"Radha complaints that she falls asleep whenever she sits for study. What would you advise her?","options":["Attend a motivation class.","Take a health check up.","Take a good sleep and then sit for study.","Wash face with cool water and sit for study."],"correct":1},
  {"q":"Rajan knows his wife's phone number, but he cannot recall the number he searched and dialed from the telephone directory. These two explains:","options":["Short Term Memory and Long Term Memory","Long Term Memory and Short Term Memory","Procedural Memory and Flash Memory","Flash Memory and Procedural Memory."],"correct":1},
  {"q":"Jija who failed in the examination justified that she failed because her teacher failed to remind her on time about the examination. Jija uses the mental mechanism of :","options":["Projection","Regression","Identification.","Humour"],"correct":0},
  {"q":"Which among the following is NOT appropriate for students with different abilities?","options":["They should be admitted in special schools for special care and support.","They should be provided appropriate supports and service in schools.","They should be admitted in regular school with other students.","They need the support of teachers with special training."],"correct":0},
  {"q":"Which of the following about environment is NOT true?","options":["Environmental influence starts from birth","Environment is unique to each individual","Environment is the physical surroundings","Environment includes the thoughts and attitudes of others."],"correct":0},
  {"q":"A traditional Instrument for assessing individual differences along one or more given dimensions of behaviour is called:","options":["Stethoscope","Periscope","Paper Pencil test","Comprehension test."],"correct":2},
  {"q":"Co-scholastic areas such as performance in sports, art, music, dance, drama, and other cultural activities and social qualities are assessed in:","options":["Unit and summative tests","Outdoor and stage competitions","Continuous and comprehensive assessment","Aptitude and skill assessment."],"correct":2},
  {"q":"Karthik was offered alcoholic liquor during his friend's birthday celebration. Karthik thought of his father who doesn't take drinks and he feared a bad scene if he goes back home drunk. Therefore, Karthik refused the drinks offer. The stimulus that prompted karthik to avoid drinks is:","options":["Negative Reinforcement.","Punishment","Positive reinforcement","Reward"],"correct":0},
  {"q":"Manu in LKG class is not able to write letters and alphabets legibly. This is because :","options":["Insufficient practice from home","Lack of maturation of muscles","Learning disorder.","Manu's skills are in different areas"],"correct":1},
  {"q":"\"Education is the manifestation of perfection already in men\". Who is known for this statement ?","options":["Rabindranath Tagore","Nithyachaithanya Yati","Swami Vivekanandha.","J. Krishnamurthy"],"correct":2},
  {"q":"Which one among the following is NOT necessary for effective learning?","options":["Activity","Interest","Result","Models."],"correct":3},
  {"q":"Teacher as a Social Engineer means that:","options":["Teacher moulds students according to the needs and demands of the society.","Teacher makes plans for the development of the society.","Teacher is able to make changes in the social systems.","Teacher is a critic of the society."],"correct":0},
  {"q":"Which one among the following methods promotes collaboration between teacher and students ?","options":["Authoritarian method","Democratic method","Laizze-fair method","Indifferent method"],"correct":1},
  {"q":"An accuracy with which a test measures whatever it is supposed to measure is called :","options":["Consistency","Objectivity","Feasibility","Validity."],"correct":3},
  {"q":"A morally matured person is controlled by:","options":["Shame","Praise","Guilt","Fear."],"correct":2},
  {"q":"Student's desire to become responsible and self-disciplined and to put forth effort to learn is :","options":["Internal Motivation","Persuaded Motivation.","External Motivation","Social Motivation"],"correct":0},
  {"q":"Which among the following is a student centered learning approach ?","options":["Gurukula Learning","ICT Assisted Learning","Distant Learning","Collaborative Learning."],"correct":3},
  {"q":"After watching the film \"Tarzan\" Raju climbed a tree, swung from the branches and felt himself a hero. The satisfaction Raju had is due to:","options":["Direct Reinforcement","Vicarious Reinforcement","Self-Reinforcement","Natural Reinforcement."],"correct":1},
  {"q":"Nervousness, fear and inferiority are linked to:","options":["Mistrust in infancy","Identity confusion in adolescence","Isolation in adulthood","Guilt in childhood."],"correct":3},
  {"q":"Rani was watching T.V. when her father reminded her of her low grade and sent her to study. But Rani only wasted her time at her study table. Which of the learning law that Rani's father failed to apply?","options":["Law of Effect","Law of Exercise","Law of Readiness","Law of Identical Elements."],"correct":2},
  {"q":"Reflection on one's own actions and making changes to become a better teacher is the result of:","options":["Self-awareness","Self-concept","Self-hypnotism.","Self-adjustment"],"correct":0},
  {"q":"Ravi rolled a piece of paper around a ball point refill and used it as pen in the class. This shows :","options":["Ravi wants to save money from buying new pen.","Ravi is misusing a paper.","Ravi is a wrong model for such mischiefs in the class.","Ravi is thinking differently."],"correct":3},
  {"q":"Which among the following is NOT an activity of teacher as a mentor?","options":["Acclimatization","Role modeling","Listening and advising.","Year planning"],"correct":3},
  {"q":"In a family, when a boy has been offer rewards for all of his achievements, at the same time a girl is denied of such rewards. This is a of:","options":["Gender bias","Gender stereotype","Gender discrimination.","Gender equality"],"correct":2},
  {"q":"The quality of a Positive Feedback is :","options":["Specific on the demerits","General comment on the impression","Advice for improvement","Close in time to the performance."],"correct":3},
  {"q":"Laila saw her husband standing in front of Movie Theatre. Later she accused him of going for movie without her. The assumption Laila made about her husband can be explained by which of the principles:","options":["Principle of closure","Principle of proximity.","Principle of similarity","Principle of transposition"],"correct":1},
  {"q":"Content, Objectives and the Types of Questions of a test are related to:","options":["Reliability","Objectivity","Blue Print","Consistency"],"correct":2},
  {"q":"Bablu was frightened by a dog when he opened neighbour's gate. Later he is afraid to open any gate. Bablu's fear of gate is:","options":["Natural Response","Unconditioned Response","Neutral Response","Conditioned Response"],"correct":3},
  {"q":"Learning appropriate sex role is a developmental task in:","options":["Babyhood","Childhood","Adulthood","Adolescence."],"correct":3},
  {"q":"Teacher's dominance over students is acceptable in:","options":["Creating and giving clear expectations and consequences for student behaviour.","The kind of activity each student should engage in for learning a concept.","The types of responses and feedback expected from the students about a session.","The amount of time and effort required by each student for completing a task."],"correct":0},
  {"q":"Raju who learned violin is able to play guitar and flute as well. This means Raju :","options":["Is a gifted person","Is a Born musician","Transferred his learning","Generalized his learning."],"correct":2},
  {"q":"The Right to Education of persons with disabilities until 18 years of age is laid down under :","options":["RTE Act, 2009","PWD Act, 2016.","UGC Act, 1956","CU Act, 2009"],"correct":1},
  {"q":"Which of the following tests can be used for the assessment of difficulties in learning experienced by students?","options":["Performance test","Diagnostic test","Achievement test.","Prognostic test"],"correct":1},
  {"q":"While assessing the social relationships in a classroom, it is found that one child is well accepted by all members in the class. He is known as:","options":["Isolate","Rejectee.","Clique","Star"],"correct":3}  
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
