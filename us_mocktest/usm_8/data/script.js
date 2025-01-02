const questions = [
  {
    "question": "What is the longest river in the United States?",
    "options": ["Mississippi River", "Missouri River", "Colorado River", "Ohio River"],
    "correct": 1
  },
  {
    "question": "What is the largest state in the United States by area?",
    "options": ["Texas", "California", "Alaska", "Montana"],
    "correct": 2
  },
  {
    "question": "What is the smallest state in the United States by area?",
    "options": ["Delaware", "Rhode Island", "Connecticut", "New Jersey"],
    "correct": 1
  },
  {
    "question": "Which two U.S. states are not connected to the mainland?",
    "options": ["Hawaii and Puerto Rico", "Alaska and Puerto Rico", "Hawaii and Alaska", "Alaska and Guam"],
    "correct": 2
  },
  {
    "question": "Which U.S. state has the most coastline?",
    "options": ["California", "Florida", "Hawaii", "Alaska"],
    "correct": 3
  },
  {
    "question": "What is the highest mountain in the United States?",
    "options": ["Mount Rainier", "Mount McKinley (Denali)", "Mount Whitney", "Mount Elbert"],
    "correct": 1
  },
  {
    "question": "What is the largest freshwater lake in the United States?",
    "options": ["Lake Michigan", "Lake Superior", "Lake Huron", "Lake Erie"],
    "correct": 1
  },
  {
    "question": "Which river forms part of the border between the U.S. and Mexico?",
    "options": ["Colorado River", "Rio Grande", "Missouri River", "Arkansas River"],
    "correct": 1
  },
  {
    "question": "What U.S. state is known as the 'Sunshine State'?",
    "options": ["California", "Florida", "Arizona", "Nevada"],
    "correct": 1
  },
  {
    "question": "What U.S. state is home to the Grand Canyon?",
    "options": ["Colorado", "Utah", "Nevada", "Arizona"],
    "correct": 3
  },
  {
    "question": "What is the capital of California?",
    "options": ["San Francisco", "Los Angeles", "Sacramento", "San Diego"],
    "correct": 2
  },
  {
    "question": "Which U.S. state has the nickname 'Land of 10,000 Lakes'?",
    "options": ["Wisconsin", "Minnesota", "Michigan", "Maine"],
    "correct": 1
  },
  {
    "question": "What is the name of the desert located in the southwestern United States?",
    "options": ["Mojave Desert", "Sonoran Desert", "Great Basin Desert", "Chihuahuan Desert"],
    "correct": 0
  },
  {
    "question": "Which Great Lake is entirely within the United States?",
    "options": ["Lake Erie", "Lake Ontario", "Lake Michigan", "Lake Huron"],
    "correct": 2
  },
  {
    "question": "What U.S. state is home to Yellowstone National Park?",
    "options": ["Wyoming", "Montana", "Idaho", "All of the above"],
    "correct": 3
  },
  {
    "question": "What major mountain range runs along the eastern United States?",
    "options": ["Rocky Mountains", "Sierra Nevada", "Appalachian Mountains", "Cascade Range"],
    "correct": 2
  },
  {
    "question": "What U.S. state is bordered by four of the five Great Lakes?",
    "options": ["Ohio", "Illinois", "Michigan", "Wisconsin"],
    "correct": 2
  },
  {
    "question": "What is the capital of the United States?",
    "options": ["New York City", "Los Angeles", "Washington, D.C.", "Philadelphia"],
    "correct": 2
  },
  {
    "question": "What is the southernmost state in the U.S.?",
    "options": ["Texas", "Florida", "Hawaii", "California"],
    "correct": 2
  },
  {
    "question": "Which U.S. state is known as the 'Evergreen State'?",
    "options": ["Oregon", "Washington", "Montana", "Idaho"],
    "correct": 1
  },

  {
    "question": "What is the longest mountain range in the United States?",
    "options": ["Appalachian Mountains", "Rocky Mountains", "Sierra Nevada", "Cascade Range"],
    "correct": 1
  },
  {
    "question": "Which U.S. state is nicknamed the 'Lone Star State'?",
    "options": ["California", "Arizona", "Texas", "Nevada"],
    "correct": 2
  },
  {
    "question": "Which U.S. state is the largest producer of corn?",
    "options": ["Kansas", "Iowa", "Nebraska", "Illinois"],
    "correct": 1
  },
  {
    "question": "What is the largest desert in the United States?",
    "options": ["Mojave Desert", "Great Basin Desert", "Sonoran Desert", "Chihuahuan Desert"],
    "correct": 1
  },
  {
    "question": "Which U.S. state has the highest population?",
    "options": ["Texas", "California", "Florida", "New York"],
    "correct": 1
  },
  {
    "question": "What is the name of the largest national park in the United States?",
    "options": ["Yellowstone", "Denali", "Wrangell-St. Elias", "Grand Canyon"],
    "correct": 2
  },
  {
    "question": "Which state is home to Mount Rushmore?",
    "options": ["North Dakota", "South Dakota", "Montana", "Wyoming"],
    "correct": 1
  },
  {
    "question": "What is the capital of Texas?",
    "options": ["Houston", "Austin", "Dallas", "San Antonio"],
    "correct": 1
  },
  {
    "question": "What is the state flower of California?",
    "options": ["Goldenrod", "California poppy", "Sunflower", "Rose"],
    "correct": 1
  },
  {
    "question": "Which river is the main tributary of the Mississippi River?",
    "options": ["Missouri River", "Ohio River", "Arkansas River", "Red River"],
    "correct": 0
  },
  {
    "question": "What is the largest city by area in the United States?",
    "options": ["Houston", "Los Angeles", "Sitka", "Jacksonville"],
    "correct": 2
  },
  {
    "question": "What U.S. state is known as the 'Peach State'?",
    "options": ["Georgia", "South Carolina", "Alabama", "Florida"],
    "correct": 0
  },
  {
    "question": "Which U.S. state shares a border with Canada and has the Great Lakes as part of its border?",
    "options": ["Ohio", "Michigan", "Minnesota", "New York"],
    "correct": 1
  },
  {
    "question": "What is the primary mountain range in California?",
    "options": ["Appalachians", "Rockies", "Sierra Nevada", "Cascade Range"],
    "correct": 2
  },
  {
    "question": "Which U.S. state has the nickname 'The Last Frontier'?",
    "options": ["Alaska", "Montana", "Wyoming", "North Dakota"],
    "correct": 0
  },
  {
    "question": "Which U.S. state is the top producer of oranges?",
    "options": ["California", "Texas", "Florida", "Georgia"],
    "correct": 2
  },
  {
    "question": "What is the capital of Alaska?",
    "options": ["Anchorage", "Fairbanks", "Juneau", "Sitka"],
    "correct": 2
  },
  {
    "question": "Which U.S. state is home to the Great Salt Lake?",
    "options": ["Nevada", "Utah", "Wyoming", "Colorado"],
    "correct": 1
  },
  {
    "question": "What is the capital of Illinois?",
    "options": ["Chicago", "Springfield", "Peoria", "Naperville"],
    "correct": 1
  },
  {
    "question": "What is the name of the river that flows through the Grand Canyon?",
    "options": ["Rio Grande", "Mississippi River", "Colorado River", "Snake River"],
    "correct": 2
  },
  {
    "question": "Which U.S. state has the nickname 'The Keystone State'?",
    "options": ["Pennsylvania", "Virginia", "Maryland", "New York"],
    "correct": 0
  },
  {
    "question": "Which U.S. state is known for its volcanoes and tropical climate?",
    "options": ["California", "Florida", "Hawaii", "Alaska"],
    "correct": 2
  },
  {
    "question": "What is the state capital of New York?",
    "options": ["Buffalo", "Rochester", "Albany", "New York City"],
    "correct": 2
  },
  {
    "question": "Which two states have the most earthquakes?",
    "options": ["California and Alaska", "Nevada and Oregon", "Hawaii and Washington", "Texas and Utah"],
    "correct": 0
  },
  {
    "question": "Which U.S. state is known as the 'Bluegrass State'?",
    "options": ["Tennessee", "Kentucky", "Indiana", "North Carolina"],
    "correct": 1
  },
  {
    "question": "What is the largest island in the United States?",
    "options": ["Hawaii (Big Island)", "Maui", "Long Island", "Kodiak Island"],
    "correct": 0
  },
  {
    "question": "Which state is home to the Everglades National Park?",
    "options": ["Georgia", "Florida", "Alabama", "Louisiana"],
    "correct": 1
  },
  {
    "question": "What is the name of the fault line in California that is responsible for many earthquakes?",
    "options": ["San Jacinto Fault", "San Andreas Fault", "Hayward Fault", "Garlock Fault"],
    "correct": 1
  },
  {
    "question": "Which U.S. state is known as the 'Land of Enchantment'?",
    "options": ["Nevada", "Arizona", "New Mexico", "Utah"],
    "correct": 2
  }
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
