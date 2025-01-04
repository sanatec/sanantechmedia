const urduLetters = [
  'ا', 'ب', 'پ', 'ت', 'ٹ', 'ث', 'ج', 'چ', 'ح', 'خ',
  'د', 'ڈ', 'ذ', 'ر', 'ڑ', 'ز', 'ژ', 'س', 'ش', 'ص',
  'ض', 'ط', 'ظ', 'ع', 'غ', 'ف', 'ق', 'ک', 'گ', 'ل',
  'م', 'ن', 'و', 'ہ', 'ی'
];

const words = [
  'انار', 'بکری', 'پتنگ', 'تارہ', 'ٹوکری', 'ثمر', 'جوتا', 'چڑیا',
  'حلوہ', 'خرگوش', 'درخت', 'ڈبہ', 'ذہین', 'رنگ', 'ڑکی', 'زیبرا',
  'ژالہ', 'سورج', 'شیشی', 'صنم', 'ضرورت', 'طوطا', 'ظاہر', 'علم',
  'غم', 'فلک', 'قلم', 'کتاب', 'گھر', 'لڑکی', 'میز', 'نمک', 'والد',
  'ہوا', 'یاد'
];

let currentLevelIndex = 0;
let starsEarned = 0;
let selectedCards = [];

const grid = document.querySelector('.grid');
const stars = document.querySelectorAll('.star');
const nextButton = document.querySelector('.next-button');
const congratulationMessage = document.querySelector('.congratulation-message');

// Initialize audio objects
const correctSound = new Audio('data/correct.mp3');
const incorrectSound = new Audio('data/incorrect.mp3');

function loadLevel() {
  grid.innerHTML = '';
  const startIndex = currentLevelIndex * 4;
  const endIndex = Math.min(startIndex + 4, urduLetters.length);

  if (startIndex >= urduLetters.length) {
    showCongratulationMessage();
    return;
  }

  const levelData = urduLetters.slice(startIndex, endIndex).map(letter => {
    const matchingWord = words.find(word => word.startsWith(letter));
    return { letter, word: matchingWord };
  });

  const cards = [];
  levelData.forEach(item => {
    cards.push({ type: 'letter', value: item.letter });
    cards.push({ type: 'word', value: item.word });
  });

  cards.sort(() => Math.random() - 0.5);

  cards.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.className = 'card';
    cardElement.dataset.type = card.type;
    cardElement.dataset.value = card.value;
    cardElement.textContent = card.value;

    cardElement.addEventListener('click', () => handleCardClick(cardElement));
    grid.appendChild(cardElement);
  });
}

function handleCardClick(card) {
  if (selectedCards.length < 2 && !card.classList.contains('matched')) {
    card.classList.add('selected');
    selectedCards.push(card);

    if (selectedCards.length === 2) {
      checkMatch();
    }
  }
}

function checkMatch() {
  const [card1, card2] = selectedCards;

  if (
    (card1.dataset.type === 'letter' && card2.dataset.type === 'word' && 
     card2.dataset.value.startsWith(card1.dataset.value)) ||
    (card1.dataset.type === 'word' && card2.dataset.type === 'letter' && 
     card1.dataset.value.startsWith(card2.dataset.value))
  ) {
    card1.classList.add('matched');
    card2.classList.add('matched');
    correctSound.play(); // Play correct sound

    stars[starsEarned].style.display = 'inline-block';
    starsEarned++;

    if (document.querySelectorAll('.card:not(.matched)').length === 0) {
      nextButton.style.display = 'block';
    }
  } else {
    incorrectSound.play(); // Play incorrect sound
  }

  setTimeout(() => {
    card1.classList.remove('selected');
    card2.classList.remove('selected');
    selectedCards = [];
  }, 1000);
}

nextButton.addEventListener('click', () => {
  starsEarned = 0;
  stars.forEach(star => (star.style.display = 'none'));
  nextButton.style.display = 'none';

  currentLevelIndex++;
  loadLevel();
});

function showCongratulationMessage() {
  grid.style.display = 'none';
  nextButton.style.display = 'none';
  congratulationMessage.style.display = 'block';
}

document.querySelector('.restart-button').addEventListener('click', () => {
  currentLevelIndex = 0;
  starsEarned = 0;
  stars.forEach(star => (star.style.display = 'none'));
  congratulationMessage.style.display = 'none';
  grid.style.display = 'grid';
  loadLevel();
});

loadLevel();

