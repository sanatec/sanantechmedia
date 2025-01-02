const flashcards = [
{ question: "What is the economic system in the United States?", answer: "Capitalist economy and market economy." },
  { question: "What is the rule of law?", answer: "Everyone must follow the law, leaders must obey the law, government must obey the law, and no one is above the law." },
  { question: "Name one branch or part of the government.", answer: "Congress, legislative, President, executive, or the courts (judicial)." },
  { question: "What stops one branch of government from becoming too powerful?", answer: "Checks and balances and separation of powers." },
  { question: "Who is in charge of the executive branch?", answer: "The President." },
  { question: "Who makes federal laws?", answer: "Congress, Senate and House of Representatives, or U.S. or national legislature." },
  { question: "What are the two parts of the U.S. Congress?", answer: "The Senate and House of Representatives." },
  { question: "How many U.S. Senators are there?", answer: "One hundred (100)." },
  { question: "We elect a U.S. Senator for how many years?", answer: "Six (6)." },
  { question: "Who is one of your state’s U.S. Senators now?", answer: "Answers vary by state." },
  { question: "The House of Representatives has how many voting members?", answer: "Four hundred thirty-five (435)." },
  { question: "We elect a U.S. Representative for how many years?", answer: "Two (2)." },
  { question: "Name your U.S. Representative.", answer: "Answers vary by district." },
  { question: "Who does a U.S. Senator represent?", answer: "All people of the state." },
  { question: "Why do some states have more Representatives than other states?", answer: "Because of the state’s population." },
  { question: "We elect a President for how many years?", answer: "Four (4)." },
  { question: "In what month do we vote for President?", answer: "November." },
  { question: "What is the name of the President of the United States now?", answer: "Answers vary by year." },
  { question: "What is the name of the Vice President of the United States now?", answer: "Answers vary by year." },
  { question: "If the President can no longer serve, who becomes President?", answer: "The Vice President." },
  { question: "If both the President and the Vice President can no longer serve, who becomes President?", answer: "The Speaker of the House." },
  { question: "Who is the Commander in Chief of the military?", answer: "The President." },
  { question: "Who signs bills to become laws?", answer: "The President." },
  { question: "Who vetoes bills?", answer: "The President." },
  { question: "What does the President’s Cabinet do?", answer: "Advises the President." },
  { question: "What are two Cabinet-level positions?", answer: "Secretary of Defense, Secretary of Education, Secretary of State, etc." },
  { question: "What does the judicial branch do?", answer: "Reviews laws and resolves disputes." },
  { question: "What is the highest court in the United States?", answer: "The Supreme Court." },
  { question: "How many justices are on the Supreme Court?", answer: "Nine (9)." },
  { question: "Who is the Chief Justice of the United States now?", answer: "Answers vary by year." },
  { question: "Under our Constitution, some powers belong to the federal government. What is one power of the federal government?", answer: "To print money, declare war, create an army, or make treaties." },
  { question: "Under our Constitution, some powers belong to the states. What is one power of the states?", answer: "Provide schooling and education, protection (police), safety (fire departments), or issue licenses." },
  { question: "Who is the Governor of your state now?", answer: "Answers vary by state." },
  { question: "What is the capital of your state?", answer: "Answers vary by state." },
  { question: "What are the two major political parties in the United States?", answer: "Democratic and Republican." },
  { question: "What is the political party of the President now?", answer: "Answers vary by year." },
  { question: "What is the name of the Speaker of the House of Representatives now?", answer: "Answers vary by year." },
  { question: "There are four amendments to the Constitution about who can vote. Describe one of them.", answer: "Citizens 18 and older can vote." },
  { question: "What is one responsibility that is only for United States citizens?", answer: "Serve on a jury or vote in federal elections." },
  { question: "Name one right only for United States citizens.", answer: "Vote in federal elections or run for federal office." },
  { question: "What are two rights of everyone living in the United States?", answer: "Freedom of speech and freedom of religion." },
  { question: "What do we show loyalty to when we say the Pledge of Allegiance?", answer: "The United States and the flag." },
  { question: "What is one promise you make when you become a United States citizen?", answer: "Obey the laws of the United States." },
  { question: "How old do citizens have to be to vote for President?", answer: "Eighteen (18)." },
  { question: "When is the last day you can send in federal income tax forms?", answer: "April 15." },
  { question: "When must all men register for the Selective Service?", answer: "Between 18 and 26." },
  { question: "What is one reason colonists came to America?", answer: "Freedom or economic opportunity." },
  { question: "Who lived in America before the Europeans arrived?", answer: "Native Americans." },
  { question: "What group of people was taken to America and sold as slaves?", answer: "Africans." },
  { question: "What did the Emancipation Proclamation do?", answer: "Freed slaves in Confederate states." },
  { question: "Who was President during the Great Depression and World War II?", answer: "Franklin D. Roosevelt." },
];

let currentCard = 0;
// Update the flashcard content
function updateCard() {
  document.getElementById("question").textContent = flashcards[currentCard].question;
  document.getElementById("answer").textContent = flashcards[currentCard].answer;

  // Update button states
  document.getElementById("prevBtn").disabled = currentCard === 0;
  document.getElementById("nextBtn").disabled = currentCard === flashcards.length - 1;

  // Reset card flip
  document.getElementById("flashcard-inner").style.transform = "";
}

// Play sound and flip the card
function flipCard() {
  const card = document.getElementById("flashcard-inner");
  const flipSound = document.getElementById("flipSound");

  // Play the flip sound
  flipSound.currentTime = 0; // Reset the sound to the beginning
  flipSound.play();

  // Flip the card
  card.style.transform = card.style.transform === "rotateY(180deg)" ? "" : "rotateY(180deg)";
}

// Navigate to the next flashcard
function nextCard() {
  if (currentCard < flashcards.length - 1) {
    currentCard++;
    updateCard();
  }
}

// Navigate to the previous flashcard
function prevCard() {
  if (currentCard > 0) {
    currentCard--;
    updateCard();
  }
}

// Initialize the first card
updateCard();

