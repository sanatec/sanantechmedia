const questions = [
  
  {
        question: "'عالمی        یومِ    اردو  '   کب  مناتا   ہے   ؟ ",
        options: ["نومبر9", "جانوری 26", "اکتوبر2", "فروری15 "],
        correct: 0,
      },{
        question: "محبت    کا   مترادف  لفظ     چن کر   لکھیے ",
        options: ["دشمن", "پیار", "رحم", "دوستی"],
        correct: 1,
      },
{
        question: "کونسا  املا   صحیح    ہے   ؟ ",
        options: ["صفائی", "صفاہی", "صفایی", "سفائ"],
        correct: 0,
      },
{
        question: "ان  میں   سے   موسیقی   آلہ  چن    کر       لکھیے    ",
        options: ["چاکو", "چمچ", "طبلہ", "تلوار"],
        correct: 2,
      },
{
        question: "تم شہر سے کیالائے ہو؟۔یہاں سوالیہ لفظ کونسہ ہے؟ ",
        options: ["شہر", "لایا", "تم", "کیا"],
        correct: 3,
      },
{
        question: "تلاشِ  حق  کس   کی تخلیق  ہے   ؟ ",
        options: ["گاندھی جی", "نہرو", "عبد الکلام", "اقبال"],
        correct: 0,
      },
{
        question: "ہندوستان  کا  قومی  گیت     کس نے  لکھا؟ ",
        options: ["ربیندھر ناتھ   ٹیگور", "علّا ّمہ    محمّد  اقبال", "جوہرلال    نہرو", "آزاد"],
        correct: 0,
      },
{
        question: "تم  کون ",
        options: ["ہو", "ہے", "ہیں", "ہوں"],
        correct: 0,
      },
{
        question: " لال قلعہ کہاں ہے؟",
        options: ["دہلی", "ممبئی", "کلکتہ", "حیدرآباد"],
        correct: 0,
      },
{
        question: "آخری  مغل  بادشاہ          اردو          کے     بہت         بڑے      شاعر     بھی       تھے    ۔      ان کا نام    کیا  ہے     ؟ ",
        options: ["اکبر", "بابر", "شاہ جہان", "بہادرشاہ ظفر"],
        correct: 3,
      },
{
        question: "لفظ  'کامیاب '   کا مترادف    لفظ      چن کر لکھیے۔ ",
        options: ["ہار", "جیت", "مایوس", "دکھ"],
        correct: 1,
      },
{
        question: "ان میں  سے      اردو    اخبار           کونسا     ہے        ؟ ",
        options: ["ایکسپرس", "دیشابھی مانی", "دی ہندو", "اعتماد"],
        correct: 3,
      },
{
        question: "کمیپوٹر  کا  دماغ  کسے کہا جاتاہے   ؟ ",
        options: ["کی بورڑ", "مونیٹر", "سی پی یو", "اسپیکر"],
        correct: 2,
      },
{
        question: "لفظ   مجھے   الگ  کر کی   لکھیے   ۔ ",
        options: ["میں+کا", "میں+سے", "میں+کے", "میں+کو"],
        correct: 2,
      },
{
        question: "کیرلا  کا  ریاستی پھل  کونسا ہے  ؟ ",
        options: ["آم", "ناریل", "امرود", "کٹہل"],
        correct: 3,
      },
{
        question: "جانور کونسا ہے ؟ ",
        options: ["ہاتھ", "باتھ", "باگھ", "ساتھ"],
        correct: 2,
      },
{
        question: "صحت----راحت   ہے   ۔ ",
        options: ["میں", "کا", "نے", "پر"],
        correct: 0,
      },
{
        question: "ان   میں   سے ا یک       کو     پانی    سے     تعلق        نہیں ہے   ۔ ",
        options: ["ساگر", "بارش", "چھتری", "کرسی"],
        correct: 3,
      },
{
        question: "قومی   ترانہ      'جنا گنا منا۔۔۔ 'کس     زبان  میں   ہے   ؟ ",
        options: ["مراٹھی", "بنگالی", "گجراتی", "اردو"],
        correct: 1,
      },
{
        question: "واحد   چن   کر  لکھیے    ۔ ",
        options: ["لوگ", "لشکر", "فوج", "قلم"],
        correct: 3,
      },
{
        question: "'مولانا    آزاد   نیشنل  اردو  یونیو  یر سٹی  '  کہا ں    واقع ہے  ؟ ",
        options: ["دہلی", "حیدر آباد", "الہ آباد", "کشمیر"],
        correct: 1,
      },
{
        question: "پہلا  ،   دوسرا،        تیسرا   ",
        options: ["پا نچواں", "چوتھا", "سوا  چار", "چیسرا"],
        correct: 1,
      },
{
        question: "کسکا جنم دن ہے نومبر 11 ",
        options: ["گاندھی جی", "نہرو", "ابول کلام آزاد", "سبھاش چندر بوس"],
        correct: 2,
      },
{
        question: "ماں    کی    قدمو ں    کے  نیچے   -----     ہے   ؟  ",
        options: ["محنت", "قدرت", "صحت", "جنّت"],
        correct: 3,
      },
{
        question: "امی بچوں   کو    -----  پلاتی       ہے     ۔ ",
        options: ["دودھ", "گیت", "کہانی", "لوری"],
        correct: 0,
      },

      

];

let currentQuestion = 0;
let correctAnswers = 0;

const correctSound = document.getElementById("correct-sound");
const incorrectSound = document.getElementById("incorrect-sound");

function loadQuestion() {
  const questionElement = document.getElementById("question");
  const optionsContainer = document.getElementById("options");

  questionElement.textContent = questions[currentQuestion].question;
  optionsContainer.innerHTML = "";

  questions[currentQuestion].options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.onclick = () => checkAnswer(index, button);
    optionsContainer.appendChild(button);
  });
}

function checkAnswer(selectedIndex, selectedButton) {
  const correctIndex = questions[currentQuestion].correct;
  const buttons = document.querySelectorAll(".options button");

  if (selectedIndex === correctIndex) {
    correctAnswers++;
    document.getElementById("score").textContent = correctAnswers;
    correctSound.play(); // Play correct sound
  } else {
    selectedButton.classList.add("wrong");
    incorrectSound.play(); // Play incorrect sound
  }
  buttons[correctIndex].classList.add("correct");

  // Disable all buttons after the answer is selected
  buttons.forEach((button) => (button.disabled = true));

  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      showResults();
    }
  }, 1000);
}

function showResults() {
  const modal = document.getElementById("results-modal");
  const correctBar = document.getElementById("correct-bar");
  const incorrectBar = document.getElementById("incorrect-bar");
  const correctCount = document.getElementById("correct-count");
  const incorrectCount = document.getElementById("incorrect-count");
  const resultsMessage = document.getElementById("results-message");

  const totalQuestions = questions.length;
  const incorrectAnswers = totalQuestions - correctAnswers;

  // Update modal content
  correctCount.textContent = correctAnswers;
  incorrectCount.textContent = incorrectAnswers;

  // Update progress bars
  correctBar.style.width = `${(correctAnswers / totalQuestions) * 100}%`;
  incorrectBar.style.width = `${(incorrectAnswers / totalQuestions) * 100}%`;

  // Show congratulatory or try-again message
  if (correctAnswers === totalQuestions) {
    resultsMessage.textContent = "Congratulations! You answered all questions correctly!";
  } else {
    resultsMessage.textContent = "Try Again!";
  }

  // Show the modal
  modal.style.display = "flex";
}

function restartQuiz() {
  currentQuestion = 0;
  correctAnswers = 0;
  document.getElementById("score").textContent = correctAnswers;
  document.getElementById("results-modal").style.display = "none";
  loadQuestion();
}

// Load the first question
window.onload = loadQuestion;
