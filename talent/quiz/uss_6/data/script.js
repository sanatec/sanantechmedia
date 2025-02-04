const questions = [
  
  
  {
        question: "کھیت   سے   متعلقہ    لفظ         کونسا       ہے   ؟ ",
        options: ["دھوبی", "درزی", "سنار", "کسان"],
        correct: 3,
      },{
        question: "دو،	چار،	چھہ ",
        options: ["پانچ", "سات", "آٹھ", "نو"],
        correct: 2,
      },
{
        question: "گڑیا   ------ سے      لائی ہے     ؟ ",
        options: ["کب", "کہاں", "کتنے", "کیا"],
        correct: 1,
      },
{
        question: "کیرلا       کا        ریاستی        پھل       ہے   ؟ ",
        options: ["کیلا", "جامن", "آم", "کٹہل"],
        correct: 3,
      },
{
        question: "بابا ئے          ملیالم       کے نام سے کون مشہور     ہیں    ؟ ",
        options: ["مولوی   عبدالحق", "ولّاتول", "ایژوتچن", "تکژی"],
        correct: 2,
      },
{
        question: " محبت       کا          ضد      کیا    ہے     ؟  ",
        options: ["صحت ", "نفرت", "شدّت", "شربت"],
        correct: 1,
      },
{
        question: "تاج   محل     کس مغل بادشاہ نے بنوایا؟ ",
        options: ["شاہ     جہاں", "اورنگزیب", "اکبر", "بابر"],
        correct: 0,
      },
{
        question: "لفظ اردو           کا     معنیٰ    کیا      ہے   ؟ ",
        options: ["آزادی", "اتحاد", "لشکر", "دماغ"],
        correct: 2,
      },
{
        question: "گروہ سے      نا   مناسب     چن کر     لکھیے   ؟ ",
        options: ["قظب   منار", "جامع مسجد", "لال قلعہ", "برج خلیفہ"],
        correct: 3,
      },
{
        question: "کیرلا      کے     ریاستی     پھول   ---   ہے   ؟ ",
        options: ["کنّول", "چمبا", "کنی کونّا", "گلاب"],
        correct: 2,
      },
{
        question: " مور----   ہے   ؟",
        options: ["ناچتی", "ناچتا", "ناچتے", "ناچنا"],
        correct: 0,
      },
{
        question: "کھیت    کہاں        واقع ہے   ؟ ",
        options: ["بازار", "ساگر", "گاوّں", "سمندر"],
        correct: 2,
      },
{
        question: "صبح    کا      ضد    کونسا      ہے     ؟ ",
        options: ["رات", "سویرے", "دو  پہر", "شام"],
        correct: 3,
      },
{
        question: "یومِ         اطفال      کس کی     یاد     میں     منایاجاتا   ہے   ؟ ",
        options: ["گاندھی جی", "ابولکلام    آزاد", "جواہرلال نہرو", "سبھاش چندر بوس"],
        correct: 2,
      },
{
        question: " چاچاجی   کا     اصلی    نام    کیا      ہے   ؟",
        options: ["مہاتما گاندھی", "جواہرلال نہرو", "ابوالکلام    آزاد", "اندرا  گاندھی"],
        correct: 1,
      },
{
        question: "ان میں     سے   اردو   کے   مشہور     ادیب     کون  ہے    ؟ ",
        options: ["بھگت سنکھ", "مہاتما گاندھی", " جواہرلال نہرو", " ابوالکلام    آزاد"],
        correct: 3,
      },
{
        question: "ہمارے   بابائے  قوم     کہاں    پیدا  ہوئی؟ ",
        options: ["گجرات ", "کیرلا", "دہلی", "کلکتہ"],
        correct: 0,
      },
{
        question: "چھتری  سے      تعلق   رکھنے    والا    لفظ  کونسا  ہے  ؟ ",
        options: ["بارش", "خوائش", "تلاش", "کوشش"],
        correct: 0,
      },
{
        question: "ہندوستان    میں      کتنی ریاستیں          ہیں    ؟ ",
        options: ["ستائیس", "چھتیس", "اٹھائیس", "         انتیس"],
        correct: 2,
      },
{
        question: "ردو   کی   حروفِ      تہجی    میں   کتنے     حروف      ہیں     ؟ ",
        options: ["35", "30", "28", "36"],
        correct: 0,
      },
{
        question: "ہم      -------   سے      چلتے     ہیں      ؟ ",
        options: ["ناک", "کان", "ہاتھ", "پاؤں"],
        correct: 3,
      },
{
        question: "صحت قائم     کرنے   کے  لیے     ----  ضروری     ہے؟ ",
        options: ["علم", "نفرت", "ورزش", "عظمت"],
        correct: 2,
      },
{
        question: "دھنک  کے دوسرا  رنگ   کونسا   ہے     ؟ ",
        options: ["ہرا", "اودا", "پیلا", "نیلا"],
        correct: 1,
      },
{
        question: "ان  میں    پھول  کی   رانی      کون  ہے  ؟ ",
        options: ["مور", "کوّا", "گلاب", "کوئل"],
        correct: 2,
      },
{
        question: " عورت         کا    مذکر لفظ     کونسا ہے       ؟",
        options: ["درد", "مرد", "دادی     ", "نانی"],
        correct: 1,
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
