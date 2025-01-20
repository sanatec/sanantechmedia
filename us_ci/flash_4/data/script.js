const flashcards = [
{ question: "What is the supreme law of the land?", answer: "The Constitution" },
  { question: "What does the Constitution do?", answer: "Sets up the government, defines the government, and protects basic rights of Americans" },
  { question: "The idea of self-government is in the first three words of the Constitution. What are these words?", answer: "We the People" },
  { question: "What is an amendment?", answer: "A change (to the Constitution) or an addition (to the Constitution)" },
  { question: "What do we call the first ten amendments to the Constitution?", answer: "The Bill of Rights" },
  { question: "What is one right or freedom from the First Amendment?", answer: "Speech, religion, assembly, press, or petition the government" },
  { question: "How many amendments does the Constitution have?", answer: "Twenty-seven (27)" },
  { question: "What did the Declaration of Independence do?", answer: "Announced our independence from Great Britain" },
  { question: "What are two rights in the Declaration of Independence?", answer: "Life, liberty, and the pursuit of happiness" },
  { question: "What is freedom of religion?", answer: "You can practice any religion, or not practice a religion" },
  { question: "What is the economic system in the United States?", answer: "Capitalist economy or market economy" },
  { question: "What is the 'rule of law'?", answer: "Everyone must follow the law, no one is above the law" },
  { question: "Name one branch or part of the government.", answer: "Congress, legislative, President, executive, or the courts (judicial)" },
  { question: "What stops one branch of government from becoming too powerful?", answer: "Checks and balances or separation of powers" },
  { question: "Who is in charge of the executive branch?", answer: "The President" },
  { question: "Who makes federal laws?", answer: "Congress, Senate and House of Representatives, or the U.S. legislature" },
  { question: "What are the two parts of the U.S. Congress?", answer: "The Senate and House (of Representatives)" },
  { question: "How many U.S. Senators are there?", answer: "One hundred (100)" },
  { question: "We elect a U.S. Senator for how many years?", answer: "Six (6)" },
  { question: "Who is one of your state’s U.S. Senators now?", answer: "Answers vary by state" },
  { question: "The House of Representatives has how many voting members?", answer: "Four hundred thirty-five (435)" },
  { question: "We elect a U.S. Representative for how many years?", answer: "Two (2)" },
  { question: "Name your U.S. Representative.", answer: "Answers vary by district" },
  { question: "Who does a U.S. Senator represent?", answer: "All people of the state" },
  { question: "Why do some states have more Representatives than other states?", answer: "Because of the state’s population" },
  { question: "We elect a President for how many years?", answer: "Four (4)" },
  { question: "In what month do we vote for President?", answer: "November" },
  { question: "What is the name of the President of the United States now?", answer: "Donald Trump" },
  { question: "What is the name of the Vice President of the United States now?", answer: "J.D Vance" },
  { question: "If the President can no longer serve, who becomes President?", answer: "The Vice President" },
  { question: "If both the President and the Vice President can no longer serve, who becomes President?", answer: "The Speaker of the House" },
  { question: "Who is the Commander in Chief of the military?", answer: "The President" },
  { question: "Who signs bills to become laws?", answer: "The President" },
  { question: "Who vetoes bills?", answer: "The President" },
  { question: "What does the President’s Cabinet do?", answer: "Advises the President" },
  { question: "What are two Cabinet-level positions?", answer: "Secretary of Education and Secretary of State" },
  { question: "What does the judicial branch do?", answer: "Reviews laws, resolves disputes, and decides if a law goes against the Constitution" },
  { question: "What is the highest court in the United States?", answer: "The Supreme Court" },
  { question: "How many justices are on the Supreme Court?", answer: "Nine (9)" },
  { question: "Who is the Chief Justice of the United States now?", answer: "Answers vary by year" },
  { question: "Under our Constitution, some powers belong to the federal government. What is one power of the federal government?", answer: "To print money, declare war, create an army, or make treaties" },
  { question: "Under our Constitution, some powers belong to the states. What is one power of the states?", answer: "Provide schooling and education" },
  { question: "Who is the Governor of your state now?", answer: "Answers vary by state" },
  { question: "What is the capital of your state?", answer: "Answers vary by state" },
  { question: "What are the two major political parties in the United States?", answer: "Democratic and Republican" },
  { question: "What is the political party of the President now?", answer: "Republican Party" },
  { question: "What is the name of the Speaker of the House of Representatives now?", answer: "Answers vary by year" },
  { question: "There are four amendments to the Constitution about who can vote. Describe one of them.", answer: "Citizens 18 and older can vote" },
  { question: "What is one responsibility that is only for United States citizens?", answer: "Serve on a jury or vote in a federal election" },
  { question: "Name one right only for United States citizens.", answer: "Vote in a federal election" },
  { question: "What are two rights of everyone living in the United States?", answer: "Freedom of expression and freedom of religion" },
  { question: "What do we show loyalty to when we say the Pledge of Allegiance?", answer: "The United States and the flag" },
  { question: "What is one promise you make when you become a United States citizen?", answer: "Obey the laws of the United States" },
  { question: "How old do citizens have to be to vote for President?", answer: "Eighteen (18) and older" },
  { question: "When is the last day you can send in federal income tax forms?", answer: "April 15" },
  { question: "When must all men register for the Selective Service?", answer: "Between 18 and 26" },
  { question: "What is one reason colonists came to America?", answer: "Freedom" },
  { question: "Who lived in America before the Europeans arrived?", answer: "Native Americans" },
  { question: "What group of people was taken to America and sold as slaves?", answer: "Africans" },
  { question: "Why did the colonists fight the British?", answer: "Because of high taxes and lack of self-government" },
  { question: "When was the Declaration of Independence adopted?", answer: "July 4, 1776" },
  { question: "There were 13 original states. Name three.", answer: "New York, New Jersey, and Pennsylvania" },
  { question: "Who wrote the Federalist Papers?", answer: "Alexander Hamilton, James Madison, and John Jay" },
  { question: "What is one thing Benjamin Franklin is famous for?", answer: "Being a U.S. diplomat" },
  { question: "Who is the 'Father of Our Country'?", answer: "George Washington" },
  { question: "Who was the first President?", answer: "George Washington" },
  { question: "What territory did the United States buy from France in 1803?", answer: "The Louisiana Territory" },
  { question: "Name one war fought by the United States in the 1800s.", answer: "The Civil War" },
  { question: "What did the Emancipation Proclamation do?", answer: "Freed slaves in Confederate states" },
  { question: "What did Susan B. Anthony do?", answer: "Fought for women’s rights" },
  { question: "What did Martin Luther King Jr. do?", answer: "Fought for civil rights" },
  { question: "What is the capital of the United States?", answer: "Washington, D.C." },
  { question: "Where is the Statue of Liberty?", answer: "New York Harbor" }
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

