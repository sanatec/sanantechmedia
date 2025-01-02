const flashcards = [
{ question: "What are the two parts of the U.S. Congress?", answer: "The Senate and the House of Representatives." },
  { question: "How many U.S. Senators are there?", answer: "One hundred (100)." },
  { question: "How many Senators does each state have?", answer: "Two (2)." },
  { question: "We elect a U.S. Senator for how many years?", answer: "Six (6)." },
  { question: "How many voting members are in the House of Representatives?", answer: "Four hundred thirty-five (435)." },
  { question: "We elect a U.S. Representative for how many years?", answer: "Two (2)." },
  { question: "Who is the Speaker of the House now?", answer: "Answers vary by year." },
  { question: "What is the main role of Congress?", answer: "To make federal laws." },
  { question: "What are some powers of Congress?", answer: "To make laws, declare war, and regulate commerce." },
  { question: "Who can propose a bill in Congress?", answer: "Any member of Congress." },
  { question: "Where must all bills for raising revenue start?", answer: "The House of Representatives." },
  { question: "What is a filibuster?", answer: "A tactic used in the Senate to delay or block legislative action." },
  { question: "What is the role of the Senate in impeachment trials?", answer: "The Senate acts as the jury and conducts the trial." },
  { question: "Who presides over impeachment trials of the President?", answer: "The Chief Justice of the Supreme Court." },
  { question: "How many votes are needed in the Senate to convict in an impeachment trial?", answer: "Two-thirds (67 votes)." },
  { question: "What is a veto override?", answer: "Congress can override a presidential veto with a two-thirds vote in both houses." },
  { question: "What is a congressional district?", answer: "An area represented by a member of the House of Representatives." },
  { question: "What is the minimum age requirement to serve in the House of Representatives?", answer: "Twenty-five (25) years old." },
  { question: "What is the minimum age requirement to serve in the Senate?", answer: "Thirty (30) years old." },
  { question: "How are members of the House of Representatives elected?", answer: "By voters in their congressional districts." },
  { question: "How are Senators elected?", answer: "By voters in their states." },
  { question: "What is the term for a proposed law?", answer: "A bill." },
  { question: "What is the role of committees in Congress?", answer: "To review, amend, and discuss bills." },
  { question: "What is the Capitol Building?", answer: "The location where Congress meets." },
  { question: "What is the Congressional Record?", answer: "The official record of the proceedings and debates of Congress." },
  { question: "What is a conference committee?", answer: "A committee that resolves differences between House and Senate versions of a bill." },
  { question: "Who is the current President of the Senate?", answer: "The Vice President of the United States." },
  { question: "What is the title of the leader of the House of Representatives?", answer: "The Speaker of the House." },
  { question: "What is the title of the leader of the Senate?", answer: "The Senate Majority Leader or the Vice President." },
  { question: "What happens if the House and Senate pass different versions of a bill?", answer: "A conference committee works to reconcile the differences." },
  { question: "What is the necessary quorum for Congress to do business?", answer: "A majority of members must be present." },
  { question: "What is the purpose of a filibuster?", answer: "To delay or block a vote on a bill." },
  { question: "What is a pocket veto?", answer: "When the President does not sign a bill within 10 days and Congress is not in session." },
  { question: "How can Congress check the President’s power?", answer: "By overriding vetoes, approving appointments, and controlling the budget." },
  { question: "What is the role of the Senate in confirming appointments?", answer: "The Senate confirms the President’s judicial and executive appointments." },
  
  // Questions about the President
  { question: "Who is the head of the executive branch?", answer: "The President." },
  { question: "What is the main role of the President?", answer: "To enforce and carry out federal laws." },
  { question: "How long is a presidential term?", answer: "Four (4) years." },
  { question: "How many terms can a President serve?", answer: "Two (2) terms." },
  { question: "Who becomes President if the President can no longer serve?", answer: "The Vice President." },
  { question: "Who becomes President if both the President and Vice President can no longer serve?", answer: "The Speaker of the House." },
  { question: "What is the President’s role as Commander in Chief?", answer: "To lead the military." },
  { question: "What is the President’s role in foreign policy?", answer: "To negotiate treaties and represent the U.S. internationally." },
  { question: "Who must approve treaties negotiated by the President?", answer: "The Senate." },
  { question: "What is the President’s Cabinet?", answer: "A group of advisors that head executive departments." },
  { question: "What is the State of the Union Address?", answer: "An annual message from the President to Congress about the nation’s condition." },
  { question: "What is an executive order?", answer: "A directive issued by the President to manage the executive branch." },
  { question: "Who appoints federal judges?", answer: "The President." },
  { question: "Who confirms federal judges?", answer: "The Senate." },
  { question: "What is the role of the Vice President?", answer: "To support the President and preside over the Senate." },
  { question: "What is the President’s role in the legislative process?", answer: "To sign or veto bills passed by Congress." },
  { question: "What is the President’s role in the budget process?", answer: "To propose a federal budget to Congress." },
  { question: "What is the line of succession for the presidency?", answer: "Vice President, Speaker of the House, President pro tempore of the Senate, then Cabinet members." },
  { question: "What is the President’s role as Chief Diplomat?", answer: "To oversee foreign relations and negotiate with other nations." },
  { question: "What is the White House?", answer: "The official residence and workplace of the President." },
  { question: "What is the Presidential Oath of Office?", answer: "A promise to preserve, protect, and defend the Constitution." },
  { question: "Who was the first President of the United States?", answer: "George Washington." },
  { question: "What is the Electoral College?", answer: "The body that officially elects the President." },
  { question: "How many electoral votes are needed to win the presidency?", answer: "Two hundred seventy (270)." },
  { question: "What happens if no candidate receives a majority in the Electoral College?", answer: "The House of Representatives elects the President." },
  { question: "What is impeachment?", answer: "The process of charging a government official with wrongdoing." },
  { question: "Who has the power to impeach the President?", answer: "The House of Representatives." },
  { question: "Who has the power to try impeachment cases?", answer: "The Senate." },
  { question: "Who was the youngest President to take office?", answer: "Theodore Roosevelt, at age 42." },
  { question: "Who was the only President to resign?", answer: "Richard Nixon." },
  { question: "Who was the longest-serving President?", answer: "Franklin D. Roosevelt, with four terms." },
  { question: "What is the presidential veto?", answer: "The President’s power to reject a bill passed by Congress." },
  { question: "What is the role of the President as Chief Executive?", answer: "To oversee the executive branch and ensure laws are enforced." },
  { question: "What is the President’s role as Chief of State?", answer: "To represent the nation at ceremonial functions." },
  { question: "What is the 22nd Amendment?", answer: "It limits the President to two terms in office." }
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

