document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
    {"q":"The smallest meaningful units of language are:","options":["Semantics","Syntax","Morphemes.","Phonemes"],"correct":2},
  {"q":"Which of the following is the most appropriate strategy that can be used to solve class room problems?","options":["Survey","Case study","Action research.","Observation"],"correct":2},
  {"q":"Which of the following is connected with the term \"Dyslexia'?","options":["Reading disorder","Behavioural disorder.","Mental disorder","Mathematical disorder"],"correct":0},
  {"q":"Which of the following would be of the most concern to the parents of a primary school student with muscular dystrophy ?","options":["Job Training","Mobility","Mathematics skills.","Reading ability"],"correct":1},
  {"q":"A child confuses the number '25' as '52' and the English alphabet 'b' as 'd'. In which category this child belongs?","options":["Mental impairment","Learning disability","Visual impairment.","Mental retardation"],"correct":1},
  {"q":"Which of the following is not a category in Gagne's hierarchy of learning?","options":["chaining","concept learning","symbolic association.","problem solving"],"correct":2},
  {"q":"Motivation cannot be :","options":["Observed directly","Inferred from behaviour","Used to explain behaviour.","Used to predict behaviour"],"correct":0},
  {"q":"A man reflects his anger from his Boss to his Child, is an example of :","options":["Projection","Displacement.","Regression","Reaction formation"],"correct":1},
  {"q":"The formula to determine I.Q. was first presented by:","options":["Alfred Binet","William Stern","Guilford","None of the above."],"correct":1},
  {"q":"Learning disability may occur due to all of the following except:","options":["Cultural factors","Emotional disturbance","Behavioural disturbance.","Cerebral dysfunction"],"correct":0},
  {"q":"If a test measures mastery level achievement in a subject, it is known as:","options":["Criterion referenced test","Diagnostic test","Norm referenced test.","Prognostic test"],"correct":0},
  {"q":"Who are the three participants in formative assessment?","options":["Headmistress, Learner, Peer","Teacher, Learner, Headmistress","Teacher, Headmistress, Peer.","Teacher, Peer, Learner"],"correct":3},
  {"q":"Proximo-distal sequence is a sequence of:","options":["Speech development","Emotional development","Physical - motor development.","Social development"],"correct":2},
  {"q":"The first step in teaching is :","options":["Knowing the background of the learner.","Planning before hand","Organizing material to be taught","Setting evaluation strategies"],"correct":0},
  {"q":"To help young children acquire performance skills, the teacher should set:","options":["time limit for performance","minimum standards performance.","proximal goals for skills","distal goals for skills"],"correct":1},
  {"q":"What is emotional competency?","options":["The ability to understand and regulate our emotions","The ability to understand other peoples perspectives and intentions","The ability to manage emotional situations","All of these."],"correct":3},
  {"q":"The trait approach to personality assumes that :","options":["People are motivated by unconscious emotional conflicts.","Each individual has stable personality characteristics.","People's thoughts and beliefs are central to personality.","People have an innate tendency to become self-actualised."],"correct":1},
  {"q":"Concepts are important in:","options":["learning communication","motivating the learner.","thinking process","achievement of the learner"],"correct":2},
  {"q":"A high positive transfer results when :","options":["Stimuli are dissimilar and responses are identical.","Stimuli are similar and responses are not identical.","Stimuli are similar and responses are identical.","Stimuli are dissimilar and responses are not identical."],"correct":2},
  {"q":"Find out the odd one out:","options":["Flexibility","Fluency","Originality.","Punctuality"],"correct":3},
  {"q":"'Responses which are followed by satisfying after effects tends to be learned' is:","options":["the law of Exercise","the law of Effect","the law of Readiness.","the law of Insight"],"correct":1},
  {"q":"Which of the following objectives belongs to affective domain?","options":["Developing favourable attitude towards social services.","Developing reading comprehension.","Developing the skill of typing.","Developing a set of concepts."],"correct":0},
  {"q":"During the second year of life toddlers begin to take some personal responsibility for feeding, dressing and bathing themselves in an attempt to establish what Erikson calls a sense of:","options":["Autonomy","Generativity.","Industry","Superiority"],"correct":0},
  {"q":"Simultaneous focussing on two separate activities is otherwise known as:","options":["Span of attention","Shifting of attention","Division of attention.","Distraction of attention"],"correct":0},
  {"q":"The purpose of formative evaluation is:","options":["Decision of what to measure","Development of the test","Monitoring progress of students.","Administering the test"],"correct":2},
  {"q":"What is the name of phobia in connection with learning, among students?","options":["Schoolophobia","Hypnophobia","Hydrophobia.","Sophophobia"],"correct":3},
  {"q":"The theory of multiple intelligences was proposed by:","options":["Likert","Erikson","Howard Gardner.","Thurstone"],"correct":2},
  {"q":"Among the following methods which one is least suitable to encourage critical thinking among the students","options":["Discussion","Lecture method.","Debate","Brain storming"],"correct":1},
  {"q":"Mental activity through which we transform available information in order to reach a conclusion is called:","options":["Decision making.","Reasoning","Thinking","Problem solving"],"correct":1},
  {"q":"Which of of the following is developmental task of adolescents?","options":["Learning physical skills necessary for ordinary games","Achieving emotional independence from elders","Learning sex differences and sexual modesty","Developing fundamental skills in reading, writing and calculating."],"correct":1},
  {"q":"Stanford - Binet scale measures which of the following attributes attributes of an individual?","options":["Aptitude","Creativity","Intelligence.","Personality"],"correct":2},
  {"q":"Which of the following is not a projective technique ?","options":["Rorschach Ink blot test","TAT","Sentence completion test","MMPI."],"correct":3},
  {"q":"Task effectiveness is developed by using:","options":["seminar","symposium","workshop.","conference"],"correct":2},
  {"q":"Which type of memory has a Biographical reference ?","options":["Iconic","Episodic","Semantic.","Procedural"],"correct":1},
  {"q":"The principles of reinforcement are most similar to the idea expressed in:","options":["vicarious learning","the law of readiness","latent learning","discrimination learning."],"correct":3},
  {"q":"Which of the following is the most essential emotional quality for an early childhood teacher?","options":["Caring","Empathy.","Kindness","Sympathy"],"correct":0},
  {"q":"In a projective test of personality the stimulus must be :","options":["Simple","Pictorial","Complicated.","Ambiguous"],"correct":3},
  {"q":"Which of the following can be used as a tool for guidance and counselling?","options":["Formative evaluation","Standards or norms","Report documentation","Summative evaluation."],"correct":3},
  {"q":"The primary responsibility of the teacher's adjustment lies with :","options":["the Children","the Headmistress","the Teacher himself.","the Community"],"correct":2},
  {"q":"Techno-Pedagogic competency is :","options":["a science of using technology in teaching.","a technique of combining principles of technology and principles of teaching.","a set of skills interweaving technology into teaching both scientifically and aesthetically.","a competence to develop techno- pedagogic system in education."],"correct":2},
  {"q":"Questionnaire is which of the following types of tools for measuring personality?","options":["Objective","Projective","Psychoanalytic.","Subjective"],"correct":0},
  {"q":"The child having the difficulty in picking up objects is suspected to have :","options":["lower level of intellectual functioning per","visual impairment","speech impairment","locomotor impairment."],"correct":3},
  {"q":"Who said this, \"intelligence is the aggregate or global capacity of the individual to act purposefully, to think rationally and deal effectively with his environment.\"","options":["Binet","David Wechsler.","Guilford","William Stern"],"correct":1},
  {"q":"Mild mentally retarded people have IQs of:","options":["40 to 8","55 to 69","90 to 110.","120 to 140"],"correct":1},
  {"q":"Moral development is related to and dependent up on :","options":["Intellectual development","Learning","Perception.","Socialisation"],"correct":0},
  {"q":"The mental ability to arrange things in order is known as:","options":["Seriation","Reversibility","Conservation.","Causality"],"correct":0},
  {"q":"Which of the following conditions is essential for creativity?","options":["Freedom","Conformity","Convergent thinking.","Dependency"],"correct":0},
  {"q":"To cater the needs of children with special needs, which of the following is provided?","options":["Adapted Textbooks","Activity books","Resource Teachers.","All the above"],"correct":3},
  {"q":"The most intense and critical socialisation take place :","options":["during early childhood","during childhood","during adolescence.","during adulthood"],"correct":0},
  {"q":"Which one of the following is the growth need proposed by Abraham Maslow ?","options":["Physiological needs","Love and belongingness.","Esteem need","Self actualisation"],"correct":3},
  {"q":"Insight theory of learning was promoted by:","options":["Ivan Pavlov","Kohler","Lev Vygotsky.","Jerome S. Bruner"],"correct":1},
  {"q":"Inclusive education is:.","options":["an approach to educate backward children through special schools.","an approach to educate girls only.","an approach to educate children with special needs along with regular students in regular schools.","an approach to educate exceptional children separately."],"correct":2},
  {"q":"Critical thinking is","options":["Criticizing the way other people think.","Using specific thinking skills to reach reasonable conclusions.","Questioning everything around us.","Direct thinking as per instructions."],"correct":1},
  {"q":"Grading is used:","options":["to find the top most student in an examination.","to categorise students in various ability groups.","to identify the strengths and weaknesses of students","All the above."],"correct":1},
  {"q":"Which of the following is not a learning disability?","options":["Attention Deficit Hyperactivity Disorder","Dyslexia","Dysgraphia.","Dysmania"],"correct":3},
  {"q":"We can improve our learning and memory by the strategy:","options":["writing","mnemonics","reading","combined study."],"correct":1},
  {"q":"The current level of skills and knowledge of a student is an indicator of...","options":["Aptitude","Attitude","Achievement.","Interest"],"correct":2},
  {"q":"Which institution developed National Curriculum Framework for school Education ?","options":["NCERT.","UGC","CBSE","SCERT"],"correct":0},
  {"q":"Which among the following influences the learning of the child?","options":["Readiness of the Learner","Motivation of the Learner","Maturation of the Learner.","All the above"],"correct":3}  
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
