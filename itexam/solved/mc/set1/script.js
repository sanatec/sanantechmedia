document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
        { img: "data/image/1.png", correct: 3 },
        { img: "data/image/2.png", correct: 1 },
        { img: "data/image/3.png", correct: 1 },
        { img: "data/image/4.png", correct: 1 },
        { img: "data/image/5.png", correct: 0 },
        { img: "data/image/6.png", correct: 0 },
        { img: "data/image/7.png", correct: 0 },
        { img: "data/image/8.png", correct: 1 },
        { img: "data/image/9.png", correct: 1 },
        { img: "data/image/10.png", correct: 1 },
        { img: "data/image/11.png", correct: 2 },
        { img: "data/image/12.png", correct: 2 },
        { img: "data/image/13.png", correct: 1 },
        { img: "data/image/14.png", correct: 1 },
        { img: "data/image/15.png", correct: 1 },
        { img: "data/image/16.png", correct: 2 },
        { img: "data/image/17.png", correct: 0 },
        { img: "data/image/18.png", correct: 3 },
        { img: "data/image/19.png", correct: 2 },
        { img: "data/image/20.png", correct: 3 },
        { img: "data/image/21.png", correct: 2 },
        { img: "data/image/22.png", correct: 2 },
        { img: "data/image/23.png", correct: 0 },
        { img: "data/image/24.png", correct: 3 },
        { img: "data/image/25.png", correct: 1 },
        { img: "data/image/26.png", correct: 2 },
        { img: "data/image/27.png", correct: 0 },
        { img: "data/image/28.png", correct: 2 },
        { img: "data/image/29.png", correct: 0 },
        { img: "data/image/30.png", correct: 1 },
        { img: "data/image/31.png", correct: 0 },
        { img: "data/image/32.png", correct: 0 },
        { img: "data/image/33.png", correct: 3 },
        { img: "data/image/34.png", correct: 3 },
        { img: "data/image/35.png", correct: 1 },
        { img: "data/image/36.png", correct: 3 },
        { img: "data/image/37.png", correct: 2 },
        { img: "data/image/38.png", correct: 1 },
        { img: "data/image/39.png", correct: 0 },
        { img: "data/image/40.png", correct: 2 },
        { img: "data/image/41.png", correct: 1 },
        { img: "data/image/42.png", correct: 1 },
        { img: "data/image/43.png", correct: 0 },
        { img: "data/image/44.png", correct: 2 },
        { img: "data/image/45.png", correct: 0 },
        { img: "data/image/46.png", correct: 3 },
        { img: "data/image/47.png", correct: 2 },
        { img: "data/image/48.png", correct: 1 },
        { img: "data/image/49.png", correct: 2 },
        { img: "data/image/50.png", correct: 1 }
        
    ];

    let current = 0, score = 0;
    let userAnswers = new Array(quizData.length).fill(null);

    const elements = {
        mainImg: document.getElementById('main-image'),
        optionsGrid: document.getElementById('options-grid'),
        nextBtn: document.getElementById('next-btn'),
        prevBtn: document.getElementById('back-btn'),
        progressBar: document.getElementById('progress-bar'),
        correctSound: document.getElementById('sound-correct'),
        wrongSound: document.getElementById('sound-wrong'),
        zoomModal: document.getElementById('image-modal'),
        zoomedImg: document.getElementById('zoomed-img'),
        resModal: document.getElementById('result-modal')
    };

    // Unlock Audio
    document.addEventListener('touchstart', () => {
        elements.correctSound.play().then(() => { elements.correctSound.pause(); elements.correctSound.currentTime = 0; });
        elements.wrongSound.play().then(() => { elements.wrongSound.pause(); elements.wrongSound.currentTime = 0; });
    }, { once: true });

    function loadQuestion() {
        const q = quizData[current];
        const hasAnswered = userAnswers[current] !== null;

        elements.mainImg.src = q.img;
        document.getElementById('question-number').textContent = `Question ${current + 1}/${quizData.length}`;
        elements.progressBar.style.width = `${((current + 1) / quizData.length) * 100}%`;

        elements.optionsGrid.innerHTML = '';
        ['A', 'B', 'C', 'D'].forEach((label, i) => {
            const btn = document.createElement('button');
            btn.className = 'opt-btn';
            btn.textContent = label;
            if (hasAnswered) {
                btn.disabled = true;
                if (i === q.correct) btn.classList.add('correct');
                if (userAnswers[current] === i && i !== q.correct) btn.classList.add('wrong');
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

        elements.nextBtn.textContent = hasAnswered ? (current === quizData.length - 1 ? "Finish" : "Next") : "Submit";
        elements.nextBtn.disabled = !hasAnswered;
        elements.prevBtn.disabled = current === 0;
    }

    function showResults() {
        const percent = Math.round((score / quizData.length) * 100);
        document.getElementById('res-total').textContent = quizData.length;
        document.getElementById('res-correct').textContent = score;
        document.getElementById('res-wrong').textContent = quizData.length - score;
        document.getElementById('result-percent').textContent = percent + "%";
        document.getElementById('circle-progress').setAttribute('stroke-dasharray', `${percent}, 100`);
        elements.resModal.style.display = 'flex';
    }

    function handleAction() {
        if (userAnswers[current] === null) {
            const selected = Array.from(elements.optionsGrid.children).findIndex(b => b.classList.contains('selected'));
            userAnswers[current] = selected;
            if (selected === quizData[current].correct) { score++; elements.correctSound.play(); }
            else { elements.wrongSound.play(); }
            document.getElementById('score-badge').textContent = `Score: ${score}`;
            loadQuestion();
        } else if (current < quizData.length - 1) {
            current++; loadQuestion();
        } else {
            showResults();
        }
    }

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
