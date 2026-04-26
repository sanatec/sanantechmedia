document.addEventListener('DOMContentLoaded', () => {
    const quizData = [

  {
    "q": "The nationwide campaign to ensure gender equality and women empowerment is implemented in Kerala with the leadership of Kudumbasree. The name of this campaign is...",
    "options": ["Nayi naari 3.0", "Nayi chethana 3.0", "Nayi abhiyan 3.0", "Nayi rastha 3.0"],
    "correct": 1
  },
  {
    "q": "Ligi, the fourth class student is learning to ride bicycle from third class onwards. Still she is afraid of riding bicycle individually on roads. Ligi is facing which learning disability?",
    "options": ["Dyslexia", "Dyscalculia", "Dysnomia", "Dyspraxia"],
    "correct": 3
  },
  {
    "q": "Maggie always feels pleasure in doing the activities given by the teacher on time. This effect on learning shows:",
    "options": ["Extrinsic motivation", "Intrinsic motivation", "Moral value", "Competitive spirit"],
    "correct": 1
  },
  {
    "q": "Which major factor of Psychoanalytic theory is related to the principle of reality?",
    "options": ["Ego", "Id", "Super Ego", "None of these"],
    "correct": 0
  },
  {
    "q": "As a part of supporting the children with special needs, we provide .... in the place of textbooks used in regular schools.",
    "options": ["Enriched learning materials", "Supporting lessons", "Adapted textbooks", "Additional books"],
    "correct": 2
  },
  {
    "q": "The RTE Act-2009 implemented by the Govt of India is extended to:",
    "options": ["The whole of India", "Only rural areas", "Only urban areas", "Only government schools"],
    "correct": 0
  },
  {
    "q": "Which category of childhood is called 'toy age' by Psychologists?",
    "options": ["Infancy", "Early childhood", "Later childhood", "Middle childhood"],
    "correct": 1
  },
  {
    "q": "The use of pleasant and unpleasant reinforcement to change behaviour is often referred to as .... theory.",
    "options": ["Trilogy of learning", "Theory of conditioning", "Theory of operant conditioning", "Gestalt theory"],
    "correct": 2
  },
  {
    "q": "For the evaluation of the learner, we make use of continuous and comprehensive evaluation. Which of the following is the most appropriate evaluation method to evaluate the learner?",
    "options": ["Evaluation at the end of a term or year", "Continuous evaluation along with the learning process", "Evaluation of learning readiness", "All the above"],
    "correct": 1
  },
  {
    "q": "Which of the following statement related to development is not true?",
    "options": ["Development is continuous", "Development is interrelated", "Development is predictable", "Development is linear"],
    "correct": 3
  },
  {
    "q": "Aman told his sister who was throwing wastes to the neighbouring plot, 'This is not a decent way. We should dispose our waste safely. That is morally needed.' The morality of Aman is related to which stage of moral proposed by Kohlberg?",
    "options": ["Post conventional morality stage", "Conventional morality stage", "Pre conventional morality stage", "All the above"],
    "correct": 0
  },
  {
    "q": "The precise ideas/statements that encompasses all the concepts to be learned from the chapter recorded is called;",
    "options": ["Learning structure", "Advanced organiser", "Concept map", "Thinking map"],
    "correct": 1
  },
  {
    "q": "Along with the knowledge already acquired by the learner, new knowledges are added continuously and go into the deeper and inner volume of ideas is an important way of equipping curriculum. This method is known as:",
    "options": ["Spiral curriculum", "Linear curriculum", "Modular curriculum", "Integrated curriculum"],
    "correct": 0
  },
  {
    "q": "Teachers always give group activities as a part of learning in the classroom. Which group formation is least appropriate for fruitful learning?",
    "options": ["Groups of two", "Groups of three", "Groups of five", "All students in one group"],
    "correct": 3
  },
  {
    "q": "In which stage of cognitive development by Jean Piaget, egocentrism is deeply concentrated among children?",
    "options": ["Sensory-motor stage", "Preoperational stage", "Concrete operational stage", "Formal operational stage"],
    "correct": 1
  },
  {
    "q": "The Intelligent Quotient (IQ) of 12 year old Ahan is 125. Then which of the following is true?",
    "options": ["The mental age of Ahan is 10.", "The mental age of Ahan is 12.", "The mental age of Ahan is 15.", "The mental age of Ahan is 16"],
    "correct": 2
  },
  {
    "q": "Which among the following is the correct sequence for acquiring language competency among children?",
    "options": ["Listening → Speaking → Writing → Reading", "Listening → Writing → Speaking → Reading", "Listening → Speaking → Reading → Writing", "Listening → Reading → Writing → Speaking"],
    "correct": 2
  },
  {
    "q": "The method adopted to give reading experience to students based on the conceptual ideas of Lev Vygotsky is known as:",
    "options": ["Micro teaching", "Experiential method", "Dialogical learning", "Reciprocal teaching"],
    "correct": 3
  },
  {
    "q": "Human being always gave importance to Sociability. The abilities to mingle, understand, interpret the behaviour of others were thus acquired. The intelligence related to this is:",
    "options": ["Intrapersonal Intelligence", "Interpersonal Intelligence", "Existential Intelligence", "Naturalistic Intelligence"],
    "correct": 1
  },
  {
    "q": "In relation to the basic factors of creativity, which of the following is true?",
    "options": ["Anxiety, sociability, intimacy, inhibition and inferiority", "Sporting, inferiority, intimacy, originality and sociability", "Fluency, flexibility, originality and elaboration", "Memory, reasoning, imagination and intuition"],
    "correct": 2
  },
  {
    "q": "Which of the following classroom activity is most suitable to develop co-operation among students?",
    "options": ["Story telling", "Singing song", "Playing game", "Drawing picture"],
    "correct": 2
  },
  {
    "q": "Some statements related to the emotions of children are given below. Which one is true?",
    "options": ["Emotions are intense.", "Emotions are frequent", "Emotions are temporary", "Emotions are stable."],
    "correct": 2
  },
  {
    "q": "Black Board/White Board is a common learning aid used by teachers in the classroom. 'How we can effectively use the board in the classroom?' Anitha teacher decided to conduct a study on this matter. Which of the following is the most suitable Psychological research method for conducting this study?",
    "options": ["Case study", "Clinical method", "Action research", "Sociometry"],
    "correct": 2
  },
  {
    "q": "Femina teacher always reminded children to be aware of the street dogs in the way to school. Now most of the children in the class are afraid of all dogs. Based on the approach to learning, this is an example of:",
    "options": ["Stimulus discrimination", "Stimulus generalisation", "Stimulus control", "Extinction"],
    "correct": 1
  },
  {
    "q": "In Freud's structural model, the 'ego' operates according to the:",
    "options": ["Reality principle", "Pleasure principle", "Moral principle", "Growth principle"],
    "correct": 0
  },
  {
    "q": "The process of redirecting socially unacceptable desires along desirable channels is known as:",
    "options": ["Repression", "Sublimation", "Rationalization", "Projection"],
    "correct": 1
  },
  {
    "q": "Which among the following is the correct formula for calculating IQ of a person?",
    "options": ["IQ = MA / CA × 100", "IQ = CA / MA × 100", "IQ = MA / EQ × 100", "IQ = EQ / CA × 100"],
    "correct": 0
  },
  {
    "q": "In continuous evaluation, the main focus is:",
    "options": ["Ranking students", "Helping students to improve learning", "Memorizing facts only", "Teaching without assessment"],
    "correct": 1
  },
  {
    "q": "A child repeats a phone number several times to memorize it. This is an example of:",
    "options": ["Organization", "Elaboration", "Rehearsal", "Discovery learning"],
    "correct": 2
  },
  {
    "q": "According to Howard Gardner, which Intelligence allows one to effectively work with others by trying to know their feelings and emotions?",
    "options": ["Interpersonal Intelligence", "Naturalistic Intelligence", "Logical and Mathematical Intelligence", "Intrapersonal Intelligence"],
    "correct": 0
  },
  {
    "q": "Which of the following is NOT considered a disability under CWSN?",
    "options": ["Visual impairment", "Hearing impairment", "Emotional disturbance", "High academic achievement"],
    "correct": 3
  },
  {
    "q": "WAIS is an example for:",
    "options": ["Personality test", "Intelligence test", "Aptitude test", "Attitude test"],
    "correct": 1
  },
  {
    "q": "Which of the following is a key strategy to foster creativity in a visually impaired child?",
    "options": ["Rely exclusively on worksheets", "Discourage hands-on exploration", "Limit activities to auditory exercises only", "Use tactile art materials like clay etc"],
    "correct": 3
  },
  {
    "q": "Introspection was a key method in which school of psychology?",
    "options": ["Behaviourism", "Functionalism", "Structuralism", "Humanism"],
    "correct": 2
  },
  {
    "q": "The Rights of Persons with Disabilities Act came into force from:",
    "options": ["16th April, 2016", "19th April, 2017", "19th April, 2015", "16th April, 2015"],
    "correct": 0
  },
  {
    "q": "According to Abraham Maslow the desire for strength, achievement and competence comes under which need of a person?",
    "options": ["Physiological need", "Safety need", "Esteem need", "Self-actualization need"],
    "correct": 2
  },
  {
    "q": "Anita has attention-deficit/hyperactivity disorder (AD/HD) and finds it hard to stay on task in a large class. Which strategy would help most in a general education setting?",
    "options": ["Giving her more homework", "Ignoring off such behaviour deviations", "Group her only with other students with AD/HD", "Seating her next to the teacher and using short, clear tasks"],
    "correct": 3
  },
  {
    "q": "While teaching the topic parts of a flower to the students, a teacher has initially presented the flower as a whole and later explained the parts of it. The concept belongs to:",
    "options": ["Gestalt learning", "Classical conditioning", "Operant conditioning", "Observational learning"],
    "correct": 0
  },
  {
    "q": "In a classroom which promotes learning as a social activity, the teacher should:",
    "options": ["Encourage group discussions and teamwork", "Focus only on individual tests", "Discourage peer interaction", "Only lecture without asking questions"],
    "correct": 0
  },
  {
    "q": "Who proposed the concept of Universal grammar?",
    "options": ["Bruner", "Vygotsky", "Chomsky", "Ausubel"],
    "correct": 2
  },
  {
    "q": "According to Piaget, the children use signs and symbols in place of real objects during which stage of development?",
    "options": ["Sensory motor stage", "Pre-operational stage", "Concrete operational stage", "Formal operational stage"],
    "correct": 1
  },
  {
    "q": "Which one of the following is NOT a common sign of a learning disability?",
    "options": ["Difficulty in reading and writing", "Trouble in understanding math concepts", "Inability to walk", "Problems following directions"],
    "correct": 2
  },
  {
    "q": "The period known as the 'Sloppy Age' usually refers to which age group?",
    "options": ["Early childhood", "Late childhood", "Adolescence", "Infancy"],
    "correct": 1
  },
  {
    "q": "In Pavlov's Classical conditioning theory, after conditioning the sound of the Bell becomes:",
    "options": ["Conditioned Response (CR)", "Conditioned Stimulus (CS)", "Natural Stimulus (NS)", "Unconditioned Stimulus (US)"],
    "correct": 1
  },
  {
    "q": "Which of the following best illustrate Vygotsky's idea that language and thought become interconnected?",
    "options": ["A toddler babbles without meaning", "An adult thinks in images only", "A child uses self-talk to solve a puzzle silently", "A child learns vocabulary by rote"],
    "correct": 2
  },
  {
    "q": "Which factor most strongly influences emotional development in early childhood?",
    "options": ["Weather conditions", "Parental interaction and caregiving", "Television programs", "Nutritional supplements"],
    "correct": 1
  },
  {
    "q": "Which of the following is an example of negative reinforcement?",
    "options": ["Giving candy for doing homework", "Giving a timeout for misbehaviour", "Adding extra homework for tardiness", "Taking away chores for good behaviour"],
    "correct": 3
  },
  {
    "q": "Thematic apperception test is an example for:",
    "options": ["Case study", "Cumulative record", "Projective technique", "Action research"],
    "correct": 2
  },
  {
    "q": "Which of the following is NOT a feature of child-centered education?",
    "options": ["Individualized learning plans", "Rote memorization of isolated facts", "Emphasis on social collaboration", "Integration of real-world problems"],
    "correct": 1
  },
  {
    "q": "In Guilford's 'Structure of Intellect Model' (SOI), memory comes under:",
    "options": ["Contents", "Operations", "Products", "Units"],
    "correct": 1
  },
  {
    "q": "Which method is an example of Assessment for Learning?",
    "options": ["End-of-term standardized exam", "Weekly quizzes with personalized feedback", "National Achievement Test", "Final project without feedback"],
    "correct": 1
  },
  {
    "q": "In many societies, 'pink for girls, blue for boys' is an example of:",
    "options": ["Biological sex difference", "Gender-neutral socialization", "Gender coding of consumer products", "Genetic determination"],
    "correct": 2
  },
  {
    "q": "The term chunking is related to:",
    "options": ["Attention", "Memory", "Thinking", "Emotions"],
    "correct": 1
  },
  {
    "q": "A child tries to obey his parents purely to avoid punishment. According to Kohlberg this occurs during which stage?",
    "options": ["Before 9 years", "10 to 13 years", "13 to 14 years", "Beyond 14"],
    "correct": 0
  },
  {
    "q": "Types of learning based on Gagne's hierarchy is given below. Which of them is the highest ability for learning?",
    "options": ["Chaining", "Multiple discrimination", "Rule learning", "Problem solving"],
    "correct": 3
  },
  {
    "q": "Harun prefers to write short notes along with studying that makes learning easy for him. This is his style in learning all subjects. He is a:",
    "options": ["Kinaesthetic learner", "Visual learner", "Auditory learner", "Logical learner"],
    "correct": 1
  },
  {
    "q": "According to moral development theory by Kohlberg, which is the stage at which moral reasoning based on abstract reasoning is acquired by students?",
    "options": ["Pre moral stage", "Morality based on universal ethical principles", "Morality based on fear of punishment", "Morality to obey social norms"],
    "correct": 1
  },
  {
    "q": "A student celebrates the victory of his/her team members and finds satisfaction, is using the defence mechanism:",
    "options": ["Projection", "Rationalisation", "Compensation", "Identification"],
    "correct": 3
  },
  {
    "q": "In Pavlov's experiment with dogs, salivation was:",
    "options": ["Conditioned stimulus", "Unconditioned stimulus", "Conditioned response", "Neutral stimulus"],
    "correct": 2
  },
  {
    "q": "A child who is good in remembering facts when presented in the form of a concept map, is using:",
    "options": ["Semantic memory", "Symbolic memory", "Visual memory", "Episodic memory"],
    "correct": 2
  },
  {
    "q": "Habit formation in students is mainly associated with the theory:",
    "options": ["Conditioning theory", "Field theory", "Need theory", "Constructivist theory"],
    "correct": 0
  },
  {
    "q": "Which of the following is not associated with creativity?",
    "options": ["Divergent thinking", "Fluency", "Novelty", "Imitation"],
    "correct": 3
  },
  {
    "q": "For learning a complex task, the teacher provides reinforcement for every three correct responses, it is known as:",
    "options": ["Variable reinforcement", "Fixed interval reinforcement", "Fixed ratio reinforcement", "Continuous reinforcement"],
    "correct": 2
  },
  {
    "q": "Which does not reflect the teaching for understanding?",
    "options": ["Helping to explain a concept", "Asking to suggest examples", "Guiding to see similarities and dissimilarities", "Enabling the students to recall the information"],
    "correct": 3
  },
  {
    "q": "Who among the following is not associated with stage theory of development?",
    "options": ["Jean Piaget", "Jerome S. Bruner", "Erick Erickson", "Albert Bandura"],
    "correct": 3
  },
  {
    "q": "Which of the following is a tool that is used to assess interest of students?",
    "options": ["Rubrics", "Anecdotal record", "Inventory", "Observation"],
    "correct": 2
  },
  {
    "q": "A teacher explores the goals of students in order to motivate them for achieving their goals. Here the teacher is using:",
    "options": ["Intrinsic motivation", "Extrinsic motivation", "Both intrinsic and extrinsic motivation", "Neither intrinsic nor extrinsic motivation"],
    "correct": 1
  },
  {
    "q": "The sense of appreciation and values are related to:",
    "options": ["Cognitive domain", "Affective domain", "Psycho-motor domain", "None of the above"],
    "correct": 1
  },
  {
    "q": "To develop maximum attention in classroom teaching, a teacher can use:",
    "options": ["Variety learning situations", "Narrative sequences", "Peer tutoring", "Lecturing slowly and steadily"],
    "correct": 0
  },
  {
    "q": "Match the following: (a) M.K. Gandhi (i) Nai Thalim (b) Howard Gardner (ii) Emotional Intelligence (c) Jerome S. Bruner (iii) Frames of Mind (d) Daniel Goleman (iv) Discovery learning. Identify the correct answer.",
    "options": ["(a)-(iii), (b)-(i), (c)-(iv), (d)-(ii)", "(a)-(i), (b)-(iii), (c)-(iv), (d)-(ii)", "(a)-(iv), (b)-(iii), (c)-(ii), (d)-(i)", "(a)-(i), (b)-(ii), (c)-(iv), (d)-(iii)"],
    "correct": 1
  },
  {
    "q": "Which of the following results in a Plateau in learning?",
    "options": ["Enthusiasm of the teacher", "High level of aspiration", "Improper method of teaching", "High level of motivation"],
    "correct": 2
  },
  {
    "q": "When students are given the support to interact in group activities and encourage to learn their maximum, the practice is known as:",
    "options": ["Critical pedagogy", "Reductionist pedagogy", "Teacher centred pedagogy", "Constructivist pedagogy"],
    "correct": 3
  },
  {
    "q": "According to Erickson's theory, the major crisis during adolescent stage is:",
    "options": ["Trust Vs Mistrust", "Identity Vs Role confusion", "Identity Vs Despair", "Identity Vs Isolation"],
    "correct": 1
  },
  {
    "q": "Renu, a primary school student shows interest in doing academic activities and ready to work for maximum output. According to psycho-social development theory, she possesses:",
    "options": ["Initiative", "Autonomy", "Industry", "Trust"],
    "correct": 2
  },
  {
    "q": "Action Research is:",
    "options": ["In-depth study of a case", "Simulative research", "Carried out to solve immediate problems", "A longitudinal process"],
    "correct": 2
  },
  {
    "q": "Model of intellect was designed by:",
    "options": ["Jerome S. Bruner", "Robert Sternberg", "E.L. Thorndike", "Guilford"],
    "correct": 3
  },
  {
    "q": "A teacher provides immediate feedback to students to inform their progress in every context. Here the teacher is using:",
    "options": ["Reinforcement", "Conditioning", "Punishment", "Guidance"],
    "correct": 0
  },
  {
    "q": "Repetition is a key component in learning. Which law is used to substantiate this psychologically?",
    "options": ["Law of association", "Law of readiness", "Law of exercise", "Law of effect"],
    "correct": 2
  },
  {
    "q": "Reena is the class leader and she is very particular in taking decisions by discussing with all students in the class. Which type of leader is she?",
    "options": ["Democratic leader", "Autocratic leader", "Laissez faire leader", "Transformative leader"],
    "correct": 0
  },
  {
    "q": "When a teacher wants to study the nature of peer group relationship in a classroom, which is the most appropriate technique that can be used?",
    "options": ["Sociometry", "Interview", "Observation", "Check list"],
    "correct": 0
  },
  {
    "q": "Aneeta is having difficulty in writing. This condition is known as:",
    "options": ["Dyscalculia", "Dyslexia", "Dysgraphia", "Dysphasia"],
    "correct": 2
  },
  {
    "q": "The purpose of formative evaluation is:",
    "options": ["to collect information for the students", "to test the realisation of objectives", "to provide final grades on student's progress", "to make decisions about the students"],
    "correct": 1
  },
  {
    "q": "A child shows exceptional skills in drawing and painting. Which type of intelligence is visible in the child?",
    "options": ["Linguistic", "Logical-mathematical", "Spatial", "Bodily-kinesthetic"],
    "correct": 2
  },
  {
    "q": "Which of the following is true about humanistic theory of learning?",
    "options": ["Learning is the result of bonding between stimulus and response", "Students learn better when their needs are satisfied", "Learning is the result of intellectual maturity", "Insightful learning is emphasised"],
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
