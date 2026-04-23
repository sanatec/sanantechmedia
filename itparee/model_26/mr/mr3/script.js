document.addEventListener('DOMContentLoaded', () => {
    // 1. Data (correct is now an array of TWO numbers)
    const quizData = [
  { "img": "data/image/1.png", "correct": [1, 4] },
  { "img": "data/image/2.png", "correct": [0, 4] },
  { "img": "data/image/3.png", "correct": [1, 4] },
  { "img": "data/image/4.png", "correct": [1, 2] },
  { "img": "data/image/5.png", "correct": [0, 4] },
  { "img": "data/image/6.png", "correct": [3, 4] },
  { "img": "data/image/7.png", "correct": [1, 4] },
  { "img": "data/image/8.png", "correct": [1, 3] },
  { "img": "data/image/9.png", "correct": [1, 3] },
  { "img": "data/image/10.png", "correct": [1, 3] },
  { "img": "data/image/11.png", "correct": [1, 2] },
  { "img": "data/image/12.png", "correct": [0, 1] },
  { "img": "data/image/13.png", "correct": [0, 3] },
  { "img": "data/image/14.png", "correct": [3, 4] },
  { "img": "data/image/15.png", "correct": [0, 1] },
  { "img": "data/image/16.png", "correct": [0, 4] },
  { "img": "data/image/17.png", "correct": [1, 3] },
  { "img": "data/image/18.png", "correct": [1, 4] },
  { "img": "data/image/19.png", "correct": [2, 4] },
  { "img": "data/image/20.png", "correct": [1, 4] },
  { "img": "data/image/21.png", "correct": [0, 4] },
  { "img": "data/image/22.png", "correct": [2, 4] },
  { "img": "data/image/23.png", "correct": [1, 2] },
  { "img": "data/image/24.png", "correct": [0, 2] },
  { "img": "data/image/25.png", "correct": [2, 3] }
    ];

    let current = 0, score = 0;
    // userAnswers stores current selections; .submitted tracks if question is finished
    let userSelections = new Array(quizData.length).fill(null).map(() => ({ picks: [], submitted: false }));

    const elements = {
        mainImg: document.getElementById('main-image'),
        optionsGrid: document.getElementById('options-grid'),
        nextBtn: document.getElementById('next-btn'),
        prevBtn: document.getElementById('back-btn'),
        progressBar: document.getElementById('progress-bar'),
        scoreBadge: document.getElementById('score-badge'),
        zoomModal: document.getElementById('image-modal'),
        zoomedImg: document.getElementById('zoomed-img'),
        resModal: document.getElementById('result-modal')
    };

    function loadQuestion() {
        const q = quizData[current];
        const state = userSelections[current];

        elements.mainImg.src = q.img;
        document.getElementById('question-number').textContent = `Question ${current + 1}/${quizData.length}`;
        elements.progressBar.style.width = `${((current + 1) / quizData.length) * 100}%`;

        elements.optionsGrid.innerHTML = '';
        ['A', 'B', 'C', 'D', 'E'].forEach((label, i) => {
            const btn = document.createElement('button');
            btn.className = 'opt-btn';
            btn.textContent = label;

            if (state.submitted) {
                btn.disabled = true;
                if (q.correct.includes(i)) btn.classList.add('correct');
                if (state.picks.includes(i) && !q.correct.includes(i)) btn.classList.add('wrong');
                if (state.picks.includes(i)) btn.classList.add('selected');
            } else {
                if (state.picks.includes(i)) btn.classList.add('selected');
                btn.onclick = () => {
                    if (state.picks.includes(i)) {
                        state.picks = state.picks.filter(p => p !== i);
                        btn.classList.remove('selected');
                    } else if (state.picks.length < 2) {
                        state.picks.push(i);
                        btn.classList.add('selected');
                    }
                    elements.nextBtn.disabled = (state.picks.length !== 2);
                };
            }
            elements.optionsGrid.appendChild(btn);
        });

        elements.nextBtn.textContent = state.submitted ? (current === quizData.length - 1 ? "Finish" : "Next") : "Submit";
        elements.nextBtn.disabled = !state.submitted && state.picks.length !== 2;
        elements.prevBtn.disabled = current === 0;
    }

    function handleAction() {
        const state = userSelections[current];
        const q = quizData[current];

        if (!state.submitted) {
            // Grading Logic
            const correctCount = state.picks.filter(p => q.correct.includes(p)).length;
            if (correctCount === 2) { 
                score += 1.0; 
                document.getElementById('sound-correct').play(); 
            } else if (correctCount === 1) { 
                score += 0.5; 
                document.getElementById('sound-correct').play(); 
            } else { 
                document.getElementById('sound-wrong').play(); 
            }
            
            state.submitted = true;
            elements.scoreBadge.textContent = `Score: ${score}`;
            loadQuestion();
        } else if (current < quizData.length - 1) {
            current++;
            loadQuestion();
        } else {
            showResults();
        }
    }

    function showResults() {
        const maxScore = quizData.length;
        const percent = Math.round((score / maxScore) * 100);
        document.getElementById('res-total').textContent = maxScore;
        document.getElementById('res-score').textContent = score;
        document.getElementById('result-percent').textContent = percent + "%";
        document.getElementById('circle-progress').setAttribute('stroke-dasharray', `${percent}, 100`);
        elements.resModal.style.display = 'flex';
    }

    // Zoom Logic
    document.getElementById('zoom-area').onclick = () => {
        elements.zoomModal.style.display = 'block';
        elements.zoomedImg.src = quizData[current].img;
        setTimeout(() => {
            const scrollArea = document.querySelector('.modal-scroll-area');
            scrollArea.scrollLeft = (elements.zoomedImg.offsetWidth - scrollArea.offsetWidth) / 2;
        }, 50);
    };

    document.getElementById('close-zoom').onclick = () => elements.zoomModal.style.display = 'none';
    elements.nextBtn.onclick = handleAction;
    elements.prevBtn.onclick = () => { if (current > 0) { current--; loadQuestion(); } };

    loadQuestion();
});
