document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
    {"q":"Whose contribution is the Trait approach to personality?","options":["Freud","Maslow","Piaget","Allport"],"correct":3},
  {"q":"Which of the following is not suitable for formative evaluation?","options":["Asking questions during teaching","Conducting class tests","Conducting annual examination","Assessing portfolios"],"correct":2},
  {"q":"Which of the following is not the characteristics of an emotionally intelligent person?","options":["Self-awareness","Self-regulation","Empathy","Self-aggression"],"correct":3},
  {"q":"Using specific thinking skills to reach reasonable conclusion is:","options":["Divergent thinking","Convergent thinking","Critical thinking","Creative thinking"],"correct":1},
  {"q":"Which of the following is not a characteristic of mentally challenged (MR) children?","options":["Difficulty in adaptation.","Above average intelligence.","Below average intelligence.","Low academic achievement."],"correct":1},
  {"q":"The mental age of Abhinav is 15. His chronological age is 10. Then, what is his IQ?","options":["Greater than 150","Less than 150","Equal to 150","Either greater than 150 or less than 150."],"correct":2},
  {"q":"Which is a defense mechanism?","options":["Reception","Perception","Repression","Suppression."],"correct":2},
  {"q":"The initial step in doing a project work is:","options":["Formulation of hypothesis","Collection of data","Identification of a problem.","Reaching a conclusion"],"correct":2},
  {"q":"In which stage of cognitive development according to Piaget, a child displays object permanence:","options":["Sensory motor stage","Pre-operational stage","Formal operational stage.","Concrete operational stage"],"correct":0},
  {"q":"A tentative statement on the relationship between two variables can be called as :","options":["Hypothesis","Conclusion","Correlation","Inference."],"correct":0},
  {"q":"Which is not a developmental principle?","options":["Development is a continuous process.","Development follows a predictable pattern.","Development is from general to specific.","There is no individual difference in the rate of development."],"correct":3},
  {"q":"Abraham Maslow explained the theory of motivation in 1954 in the perspective of:","options":["rewards","needs","expectations.","objectives"],"correct":1},
  {"q":"A mother always tries to meet the needs and demands of her son. At the same time, she ignores the genuine needs and demands of her daughter. It can be considered as:","options":["Gender role","Gender equality","Gender discrimination'","Gender sensitivity."],"correct":2},
  {"q":"Which of the statements is correct regarding learning and maturation?","options":["Learning is pre-condition for maturation.","Maturation is pre-condition for learning.","Learning and maturation are contradictory.","Learning and maturation are unrelated."],"correct":1},
  {"q":"A'note' by a teacher which reveals certain incidents in the life of a student:","options":["Cumulative record","Anecdotal record","Rating scale","Check list."],"correct":1},
  {"q":"Which of the following is a characteristic of Progressive education?","options":["Teacher-centredness","Emphasis on democratic values","Product oriented teaching","Emphasis on capitalist values."],"correct":1},
  {"q":"Alok, a sixth standard student is learning to ride a bicycle for the last one month. Still he is unable to ride the bicycle by himself. This is related with which learning disability?","options":["Dyslexia","Dysgraphia","Dysnomia","Dyspraxia."],"correct":3},
  {"q":"Which of the following is a primary reinforcer ?","options":["Money","Food","Certificate.","Applause"],"correct":1},
  {"q":"Which of the following is the correct stage related with the theory of motivation proposed by McClelland ?","options":["Need for affiliation, need for affection and need for achievement","Need for affection, need for power and need for achievement","Need for affiliation, need for power and need for achievement","Need for affection, need for power and need for affiliation."],"correct":2},
  {"q":"Manu shows obedience in the fear of getting punishment. In which level of moral development does he belong?","options":["Pre conventional level.","Conventional level","Post conventional level","Anti conventional level"],"correct":0},
  {"q":"'Creativity' is usually associated with which one of the following?","options":["Modelling","Imitation","Convergent thinking","Divergent thinking."],"correct":3},
  {"q":"Who is not a behaviourist ?","options":["B.F. Skinner","J.B. Watson","Ivan P. Pavlov","Kurt Lewin."],"correct":3},
  {"q":"Which of the following idea is not related to Sigmund Freud?","options":["Psychoanalysis","Conditioning","Dream interpretation","Ego defense mechanisms"],"correct":1},
  {"q":"Most suitable one to increase co-operative attitude among children is :","options":["Singing song","Drawing","Plays","Story telling."],"correct":2},
  {"q":"Erickson described this stage as an 'entry to life. In this stage of 6 to 12 years children begin to learn various skills valued by society. Name this stage mentioned by Erickson in the theory of Psychosocial development:","options":["Autonomy Vs Doubt","Initiative Vs Guilt","Industry Vs Inferiority.","Non of these"],"correct":2},
  {"q":"Multiple Choice questions assess the child's ability to:","options":["Recognize the correct answer","Analyse the correct answer","Construct the correct answer","Explain the correct answer"],"correct":0},
  {"q":"Related with cognitive development, there is a 'Zone of Proximal Development in the development process. This was proposed by:","options":["Lev Vygotsky.","Noam Chomsky","E.L. Thorndike","B.F. Skinner"],"correct":0},
  {"q":"The school authorities give preference to boys while preparing students for a state level music competition. This indicates:","options":["The global trends","Progressive thinking","National outlook","Gender discrimination."],"correct":3},
  {"q":"Which linguist told that the rudimentary form of language is being stored in the brain ?","options":["Lev Vygotsky","E.L. Thorndike","Jean Piaget","Noam Chomsky."],"correct":3},
  {"q":"Attention, retention, performance and motivation are the processes involved in observational learning. Who proposed this?","options":["Erikson","Albert Bandura.","David Ausubel","Wolfgang Kohler"],"correct":1},
  {"q":"Smitha learns each unit of Social Science very quickly. But, Susmitha takes much time to learn the same units. It indicates the developmental principle of :","options":["Inter relationship","General to specific.","Individual difference","Continuity"],"correct":2},
  {"q":"Which of the following is not an appropriate tool for formative assessment?","options":["Oral questions","Term examination.","Quiz and games","Assignment"],"correct":1},
  {"q":"Who is the proponent of 'Concept attainment model' ?","options":["Vygotsky.","Chomsky","Bruner","Gardner"],"correct":2},
  {"q":"The theory of intelligence proposed by Spearman is known as:","options":["Group factor theory","Two factor theory","Three dimensional theory.","Triarchic theory"],"correct":1},
  {"q":"Programmed Instructional materral is used for :","options":["Affective objectives","Cognitive objectives.","Psychomotor objectives","Both Affective and Psychomotor objectives"],"correct":1},
  {"q":"Which of these tests are projective tests?","options":["Thematic apperception test","Rorschach Inkblot test","Personal Problem solving test.","Both A and B"],"correct":3},
  {"q":"Which theory of language development suggests that children learn appropriate sounds and words in reaction to their parent's reinforcement?","options":["Cognitivism","Gestaltism","Behaviourism.","Humanism"],"correct":2},
  {"q":"The quality of test to give same scores when administered at different occasions is....","options":["Objectivity","Differentiability","Validity.","Reliability"],"correct":3},
  {"q":"Which is an observation that supports Noam Chomsky's ideas about language acquisition?","options":["Children's language development follows a similar pattern across culture","Children acquire language quickly and effortlessly","The stages of language development occur at about the same ages in most children","All of the above."],"correct":3},
  {"q":"Which of the following is the first step in rehabilitation process?","options":["Assessment","Aftercare","Co-ordination.","Intervention"],"correct":0},
  {"q":"The intense emotional attachment showed by a girl towards her father during the early childhood is called:","options":["Psycho-Sexual development","Oedipus complex","Psycho analysis","Electra complex."],"correct":3},
  {"q":"Learning can be defined as:","options":["A permanent change in behaviour resulting from experience","A change in behaviour.","An observable change in behaviour resulting from experience in the environment","A relatively permanent acquisition of information"],"correct":2},
  {"q":"Which of the following is an incorrect pair?","options":["Theory of Multiple Intelligences: Gardner.","Theory of Classical Conditioning: Pavlov.","Theory of Meaningful Reception Learning Ansubel.","Theory of Psycho-Social Development: Kohlberg."],"correct":3},
  {"q":"The test that measures learning outcome of students is:","options":["Achievement test","Aptitude test","Attitude scale","Intelligence test."],"correct":0},
  {"q":"In developing objectives which of the following is/are essential?","options":["Entry behaviour","Terminal behaviour","Both Entry and Terminal behaviour.","None of these"],"correct":2},
  {"q":"One will have more chances of being successful as a teacher, if :","options":["She is trained in teaching.","She is competent enough in her subjects","She belongs to the family of teachers","She can organize her teaching learning activities systematically and conveys the same effectively"],"correct":3},
  {"q":"Which of the following is a technique used to address stuttering?","options":["Purposeful speech","Practical speech","Prolonged speech.","Delayed speech"],"correct":2},
  {"q":"Running description of active behaviour of a student as observed by the teacher is:","options":["Anecdotal record","Autobiography.","Interview","Case study"],"correct":0},
  {"q":"Which of the following activities demand the least finer - motor activities?","options":["Writing with a pen","Colouring with crayons.","Picking up needle from the floor","Picking up red-abress from a smooth floor"],"correct":1},
  {"q":"At the base of hierarchy of needs, Maslow describes :","options":["Social needs","Safety needs","Physiological needs.","Growth needs"],"correct":2},
  {"q":"What is the purpose of grading children?","options":["Allow teachers to judge student ability","Provide information about student's progress","Inform parents about how smart their child is","Compel students to work hard."],"correct":1},
  {"q":"Which of the following pairs is incorrect?","options":["S-R theory of learning: Pavlov.","Field theory of learning: Lewin.","Social learning theory: Bruner.","Trial and Error learning : Thorndike."],"correct":2}  
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
