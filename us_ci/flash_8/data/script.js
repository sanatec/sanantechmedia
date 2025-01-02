const flashcards = [
   { question: "What were the 13 original colonies?", answer: "Delaware, Pennsylvania, New Jersey, Georgia, Connecticut, Massachusetts, Maryland, South Carolina, New Hampshire, Virginia, New York, North Carolina, and Rhode Island." },
  { question: "Which colony was the first to be founded?", answer: "Virginia, in 1607." },
  { question: "Which colony was founded as a haven for Catholics?", answer: "Maryland." },
  { question: "What was the last of the 13 colonies to be founded?", answer: "Georgia, in 1733." },
  { question: "Which colony was originally founded by the Dutch?", answer: "New York, originally called New Amsterdam." },
  { question: "What was the primary crop in the Southern Colonies?", answer: "Tobacco, rice, and indigo." },
  { question: "What type of government did the colonies have?", answer: "They had a mix of royal, proprietary, and self-governing systems." },
  { question: "Which colony was established by the Pilgrims?", answer: "Massachusetts, at Plymouth in 1620." },
  { question: "Who founded Pennsylvania?", answer: "William Penn." },
  { question: "Why was Pennsylvania founded?", answer: "As a haven for Quakers and for religious freedom." },
  { question: "What was the significance of the Mayflower Compact?", answer: "It was an early form of self-government signed by the Pilgrims in 1620." },
  { question: "Which colonies were part of the New England region?", answer: "Massachusetts, Rhode Island, Connecticut, and New Hampshire." },
  { question: "What was the primary economy of the New England Colonies?", answer: "Fishing, shipbuilding, and trade." },
  { question: "What were the Middle Colonies known for?", answer: "Their diverse population and agriculture, including wheat and corn." },
  { question: "What was the House of Burgesses?", answer: "The first elected legislative assembly in America, established in Virginia." },
  { question: "Why were the Southern Colonies suited for agriculture?", answer: "They had fertile soil, a warm climate, and a long growing season." },
  { question: "Which colony was founded for debtors and as a buffer against Spanish Florida?", answer: "Georgia." },
  { question: "What was the main reason for founding Rhode Island?", answer: "Religious freedom, founded by Roger Williams." },
  { question: "Who founded Connecticut?", answer: "Thomas Hooker." },
  { question: "What was the first constitution in America?", answer: "The Fundamental Orders of Connecticut." },
  { question: "Which colony was named after Queen Elizabeth I?", answer: "Virginia." },
  { question: "What was the role of indentured servants in the colonies?", answer: "They worked under contracts for several years in exchange for passage to America." },
  { question: "Which colony was known for its tolerance of different religions?", answer: "Rhode Island." },
  { question: "What was the primary religion in the New England Colonies?", answer: "Puritanism." },
  { question: "Which colony was originally part of Pennsylvania?", answer: "Delaware." },
  { question: "What was the main port city in the Middle Colonies?", answer: "Philadelphia." },
  { question: "Which colony was home to the first public school in America?", answer: "Massachusetts." },
  { question: "What were the cash crops in the Southern Colonies?", answer: "Tobacco, rice, and indigo." },
  { question: "What was the role of women in the colonies?", answer: "They managed households, raised children, and sometimes ran businesses or farms." },
  { question: "What was the Great Awakening?", answer: "A religious revival movement in the 1730s and 1740s." },
  { question: "What was the main industry in the Middle Colonies?", answer: "Agriculture and trade." },
  { question: "Which colony was founded as a safe haven for Puritans?", answer: "Massachusetts." },
  { question: "What was the relationship between Native Americans and colonists?", answer: "It varied, but often included conflict over land and resources." },
  { question: "Which colony was the first to write a constitution?", answer: "Connecticut." },
  { question: "Why was New Hampshire founded?", answer: "For fishing and trade." },
  { question: "What type of colony was New York originally?", answer: "A proprietary colony." },
  { question: "What was the name of the war between the British and French in the colonies?", answer: "The French and Indian War (1754–1763)." },
  { question: "What was the role of slavery in the Southern Colonies?", answer: "Enslaved people were used as labor on large plantations." },
  { question: "Who founded Maryland?", answer: "Lord Baltimore (Cecil Calvert)." },
  { question: "Which colony was the first to declare independence?", answer: "Massachusetts." },
  { question: "What was the climate like in the Southern Colonies?", answer: "Warm and humid." },
  { question: "What were the Navigation Acts?", answer: "Laws that restricted colonial trade to benefit England." },
  { question: "What was the significance of Jamestown?", answer: "It was the first permanent English settlement in America." },
  { question: "Which colony was established by the Dutch?", answer: "New York, originally called New Netherland." },
  { question: "What was the original purpose of the Georgia colony?", answer: "To serve as a buffer against Spanish Florida and a place for debtors." },
  { question: "What is a charter colony?", answer: "A colony established by a group under a charter agreement with the king." },
  { question: "What were proprietary colonies?", answer: "Colonies owned by individuals or groups with full governing rights." },
  { question: "What was the role of religion in colonial life?", answer: "Religion played a central role in education, laws, and community life." },
  { question: "What was the first English child born in America?", answer: "Virginia Dare." },
  { question: "What was the Pequot War?", answer: "A conflict between Native Americans and New England settlers in the 1630s." },
  { question: "What was the main export of the New England Colonies?", answer: "Fish and timber." },
  { question: "Who were the Quakers?", answer: "A religious group known for pacifism and equality, prominent in Pennsylvania." },
  { question: "What was the main port city in the Southern Colonies?", answer: "Charleston, South Carolina." },
  { question: "What was Bacon's Rebellion?", answer: "An uprising in Virginia in 1676 led by Nathaniel Bacon against Governor Berkeley." },
  { question: "Which colony had the first elected assembly?", answer: "Virginia, with the House of Burgesses." },
  { question: "What were the primary motivations for colonists coming to America?", answer: "Religious freedom, economic opportunities, and escaping persecution." },
  { question: "Who were the Puritans?", answer: "A religious group seeking to purify the Church of England, settling mainly in Massachusetts." },
  { question: "What is the significance of Plymouth Rock?", answer: "It marks the landing site of the Pilgrims in 1620." },
  { question: "What was King Philip's War?", answer: "A conflict between New England colonists and Native Americans in the 1670s." },
  { question: "What was the first written agreement of self-government?", answer: "The Mayflower Compact." },
  { question: "Which colony was named after an English king?", answer: "Georgia, named after King George II." },
  { question: "What was the significance of colonial militias?", answer: "They defended the colonies and played a role in the Revolutionary War." },
  { question: "What was the primary religion in Maryland?", answer: "Catholicism." },
  { question: "What was the primary form of labor in the New England Colonies?", answer: "Family farming and small-scale trade." },
  { question: "What colony was known for its shipbuilding industry?", answer: "Massachusetts." },
  { question: "What was the primary reason for founding South Carolina?", answer: "To grow cash crops like rice and indigo." },
  { question: "What was the Halfway Covenant?", answer: "A Puritan practice allowing partial church membership for colonists." },
  { question: "What was the role of colonial assemblies?", answer: "They acted as local governments to make laws for the colonies." },
  { question: "What were the Salem Witch Trials?", answer: "A series of trials in Massachusetts in 1692 accusing people of witchcraft." },
  { question: "What was the impact of the Proclamation of 1763?", answer: "It restricted colonial settlement west of the Appalachian Mountains." },
  { question: "Which colonies were known as the breadbasket colonies?", answer: "The Middle Colonies, due to their grain production." },
  { question: "What was the significance of the Zenger Trial?", answer: "It established the principle of freedom of the press." }
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

