document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
  {"q":"The grading system that is followed at the lower primary level in Kerala:","options":["Direct grading","Absolute grading","Indirect grading","Relative grading"],"correct":0},
  {"q":"The success of the visually impaired children in inclusive setting depends on his mastery over:","options":["Curricular skills","Co-curricular skills","Extracurricular skills","Plus-curricular skills."],"correct":3},
  {"q":"Removal of an unpleasant stimulus to increase the probability of occurrence of a response:","options":["Positive reinforcement","Negative reinforcement.","Basic reinforcement","Secondary reinforcement"],"correct":1},
  {"q":"'Sree Budha is Known for his non-violence in history. According to Allport's theory of Personality, this characteristic can be explained as:","options":["Cardinal trait","Central trait","Secondary trait","Surface trait"],"correct":0},
  {"q":"Among the following Psychologists, who is not a theorist on intelligence?","options":["Thurstone.","Kohler","Gardner","Spearman"],"correct":1},
  {"q":"Which of the following is not related to Vygotskian learning theory?","options":["Scaffolding","Concept Attainment Model.","Collaborative learning","Co-operative learning"],"correct":1},
  {"q":"The processes of attending two separate activities simultaneously:","options":["Span of attention","Division of attention","Shifting of attention","Distraction of attention."],"correct":1},
  {"q":"Which of the following is not a factor of emotional intelligence?","options":["Understanding one's own emotions.","Understanding others emotions","Controlling others emotions","Maintain and strengthen relationships"],"correct":2},
  {"q":"Which of the following can be considered as a trait ?","options":["Interest in music","Ability to lead a group","Affinity towards vegetarian food.","Affinity towards fashion dresses"],"correct":1},
  {"q":"'Error Analysis' is a procedure to :","options":["Calculate error","Find out exactly where the child makes a mistake","Identify the problems of teacher.","Analyse the syllabus"],"correct":1},
  {"q":"The cultures' expectations for male and female behaviours are called :","options":["Gender roles","Gender typing","Gender identity.","Gender bias"],"correct":0},
  {"q":"Which of the following statements is not matching with Piaget's theory of learning?","options":["Child constructs knowledge out of experience.","Learning is a conscious, deliberate activity.","Any Knowledge which is consistent with the existing cognitive structure will be considered as meaningless.","Learning and life development are Biological process."],"correct":2},
  {"q":"The Yaspal committee report of 1993 is known as:","options":["'ICT in Education'","'Learning: The Treasure Within'.","'Learning without burden'","'Learning Beyond Limitations'"],"correct":2},
  {"q":"Which of the following factors is not cause for delayed motor development?","options":["Low intelligence","Lack of motivation","Lack of Practice.","Practising fine motor activities before practising gross motor activities"],"correct":3},
  {"q":"Which is not, one of the female stereotyped characteristics?","options":["Aggressive","Emotional","Submissive","Tolerant"],"correct":0},
  {"q":"Which of the following is not related to the education of children with special needs?","options":["Zero rejection","Least Restricted Environment.","Common Curriculum","Adapted Curriculum"],"correct":1},
  {"q":"Which among the following is not a characteristic of well adjusted learner ?","options":["Realistic perception of the world","Capable of struggling with odd circumstances","Possessing critical or fault finding attitude.","Knows one's own strength and weakness"],"correct":2},
  {"q":"Educationally, learning disabled looks similar to:","options":["Gifted Children","Backward Children","Mentally Retarded","Behaviour Disordered."],"correct":1},
  {"q":"According to Freud, the structure of personality that acts on 'Pleasure Principle' is:","options":["Super ego","Ego","Id.","Libido"],"correct":2},
  {"q":"A network of associated facts and concepts that make up our general knowledge of the world is called:","options":["Episodic memory","Explicit memory","Implicit memory","Semantic memory."],"correct":3},
  {"q":"'One of the students in your primary class always withdraws from plays' - the method suitable to study this child is :","options":["Case study","Interview","Survey","Observation."],"correct":0},
  {"q":"Which of the following pairs is correctly matched ?","options":["Higher order conditioning - Pavlov","Socio-cultural context of learning Piaget","Reinforcement schedule - Watson","Discovery learning - Bandura."],"correct":0},
  {"q":"Which of the following activities demand the least finer-motor activities?","options":["Picking up red-abress from a smooth floor","Picking up needle from the floor","Writing with a pen","Colouring with cryons"],"correct":3},
  {"q":"Which of the following is the most objective method of studying Psychology?","options":["Introspection","Observation","Interview","Psychological testing."],"correct":3},
  {"q":"Which defence mechanism is related to creativity?","options":["Regression","Projection","Sublimation.","Repression"],"correct":2},
  {"q":"Which of the following tasks is not a developmental task of later childhood?","options":["learning to talk.","learning physical skills necessary for ordinary games","learning to get along with agemates","developing fundamental skills in reading, writing and calculating"],"correct":0},
  {"q":"According to Freud's Psycho-sexual development theory, Sumesh, a 3rd (third) Standard Student belongs to:","options":["Latency Stage","Oral Stage,","Anal Stage","Genital Stage."],"correct":0},
  {"q":"Identify negative reinforcement from among the following situations:","options":["Teacher giving imposition to students who have not completed the homework.","Teacher giving extra homework to those students who were absent last day","As per teacher's direction, all students completed their homework to avoid imposition.","As per the direction of the headmaster, the teacher suspends those students who have not completed the homework."],"correct":2},
  {"q":"Among the following statements, which one is FALSE with respect to Right of Person with Disabilities Act, 2016?","options":["It included HIV patients in the list","The number of disability conditions has been increased from 7 to 21","It included acid attack Survivors","It included Thalasemia, Haemophilia and Sickle Cell disease."],"correct":0},
  {"q":"After teaching addition of numbers, the teacher introduced multiplication in the class. Here the teacher is assisting the students for:","options":["Negative transfer","Zero transfer","Positive transfer.","Bilateral transfer"],"correct":2},
  {"q":"Rahul's notebook contains many mistakes like mixing of upper and lower cases, irregular letter sizes and shapes, unfinished letters, poor legibility, incomplete words with lots of omissions etc. He may be a child with:","options":["Dysgraphia","Dyslexia","Dyscalculia","Dyspraxia."],"correct":0},
  {"q":"Which among the following statements is TRUE?","options":["Introspection can be conducted among all types of children.","It is very easy to conduct Introspection among abnormal people.","The data collected by Introspection is highly objective.","Introspection is the oldest method in psychology."],"correct":3},
  {"q":"Which of the following activities can be conducted for developing readiness for writing among children?","options":["(1), (2) and (3) only","(1), (2), (3) and (4).","(2) and (4) only","(1) and (4) only"],"correct":1},
  {"q":"In a classroom, a teacher is giving diverse types of language games to each and every child. Here, the teacher is considering individual differences in:","options":["Physical Traits","Intelligence","Motor Skills","All of the above."],"correct":1},
  {"q":"In a primary class, a teacher after writing a letter on the chalkboard pronounced it loudly and asked the students to follow and repeat the same. Gradually all the students learned the letter and its sound. Here teacher adopted:","options":["Law of readiness","Classical conditioning","Law of proximity.","Operant conditioning"],"correct":1},
  {"q":"Elaboration, fluency, flexibility and originality are the characteristics of:","options":["Creativity","Intelligence","Personality.","Attention"],"correct":0},
  {"q":"Which of the following is an example for negative emotion?","options":["Anger","Amusement.","Love","Curiosity"],"correct":0},
  {"q":"Amrutha and Ashna, studying is fifth standard celebrated their 12 (th) (twelfth) birthday last week. If their Mental age is 12, what will be their IQ?","options":["60","120","80.","100"],"correct":3},
  {"q":"Which among the following evaluation methods can be adopted for children with visual difficulties?","options":["Questions should be printed in large prints.","Questions may be provided on a tape recorder and answers may be recorded.","Marks should not be deducted for Braille dot errors.","All of the above."],"correct":3},
  {"q":"In a classroom, a teacher is giving 'star mark' to only those students who had scored 5, 10, 15 scores respectively. Here, teacher is adopting :","options":["Continuous reinforcement schedule","fixed interval reinforcement schedule","Fixed ratio reinforcement schedule","Variable ratio reinforcement schedule."],"correct":2},
  {"q":"According to Abraham Maslow's theory, affection, acceptance, belongingness etc belong to :","options":["Love needs","Cognitive needs","Self-esteem needs.","Physiological needs"],"correct":0},
  {"q":"Which among the following strategies can be used for promoting inclusion?","options":["Encourage parents to volunteer at school.","Use multi-sensory approach.","Giving more emphasis to what child can do.","All of the above."],"correct":3},
  {"q":"Who among the following put forwarded the curve of forgetting?","options":["Erik H Erikson","Ebbinghams.","Atkinson","McClelland"],"correct":1},
  {"q":"Which of the following stimulus variations can be adopted by the teacher to motivate the students?","options":["Movement of the teacher","Gestures of the teacher","Changes in postures","All of the above."],"correct":3},
  {"q":"Which of the following is NOT an environmental factor that influence the development of the child?","options":["Peer group","Traditional believes.","Chromosomes","Community"],"correct":2},
  {"q":"Which among the following influence the language development of the child","options":["Family environment","Child's mental development","Child's maturity pattern","All of the above."],"correct":3},
  {"q":"Which of the following questions will not lead the children in developing divergent thinking?","options":["What are the uses of forest?","List the uses of newspaper?","What happens if plants stop producing oxygen?","Who invented Radio?"],"correct":3},
  {"q":"'Fear can best be explained by the theory of:","options":["Classical conditioning","Observational learning","Latent learning","Discovery learning."],"correct":0},
  {"q":"According to which article in Our Constitution, education has become a fundamental right for children in 6 - 14 years age group?","options":["Article 21-A","Article 45","Article 31","Article 51"],"correct":0},
  {"q":"'One of the students in your primary class always withdraws from plays' - the method suitable to study this child is:","options":["Case study","Interview","Survey","Observation."],"correct":0},
  {"q":"In a mixed school, only boys are given chances to organize the school assembly. This is an example of:","options":["Individual difference","Gender discrimination","Gender identity","Gender role"],"correct":1} 
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
