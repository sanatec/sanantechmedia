const flashcards = [
{ question: "What is the capital of the United States?", answer: "Washington, D.C." },
  { question: "What are the two longest rivers in the United States?", answer: "Mississippi River and Missouri River" },
  { question: "What ocean is on the East Coast of the United States?", answer: "Atlantic Ocean" },
  { question: "What ocean is on the West Coast of the United States?", answer: "Pacific Ocean" },
  { question: "How many states are there in the United States?", answer: "50" },
  { question: "Which state is the largest by area?", answer: "Alaska" },
  { question: "Which state is the smallest by area?", answer: "Rhode Island" },
  { question: "What is the most populous state in the United States?", answer: "California" },
  { question: "What is the least populous state in the United States?", answer: "Wyoming" },
  { question: "What is the tallest mountain in the United States?", answer: "Denali (Mount McKinley)" },
  { question: "What is the name of the desert in the southwestern United States?", answer: "The Mojave Desert" },
  { question: "What Great Lake is entirely within the United States?", answer: "Lake Michigan" },
  { question: "What are the five Great Lakes?", answer: "Superior, Michigan, Huron, Erie, and Ontario" },
  { question: "What U.S. state is made up of islands?", answer: "Hawaii" },
  { question: "What U.S. state is known as the 'Sunshine State'?", answer: "Florida" },
  { question: "What U.S. state is known as the 'Empire State'?", answer: "New York" },
  { question: "Which state has the Grand Canyon?", answer: "Arizona" },
  { question: "What U.S. city is known as the 'Windy City'?", answer: "Chicago" },
  { question: "What river runs through the Grand Canyon?", answer: "Colorado River" },
  { question: "What is the largest island in the United States?", answer: "Big Island, Hawaii" },
  { question: "What is the capital of California?", answer: "Sacramento" },
  { question: "What is the capital of Texas?", answer: "Austin" },
  { question: "What is the capital of New York?", answer: "Albany" },
  { question: "What is the capital of Florida?", answer: "Tallahassee" },
  { question: "What is the capital of Alaska?", answer: "Juneau" },
  { question: "What is the capital of Hawaii?", answer: "Honolulu" },
  { question: "What state is Yellowstone National Park located in?", answer: "Wyoming (and parts of Montana and Idaho)" },
  { question: "What state is the Statue of Liberty located in?", answer: "New York" },
  { question: "What state is Mount Rushmore located in?", answer: "South Dakota" },
  { question: "What is the nickname of Nevada?", answer: "The Silver State" },
  { question: "What is the nickname of Louisiana?", answer: "The Pelican State" },
  { question: "What is the nickname of Colorado?", answer: "The Centennial State" },
  { question: "What is the largest city in the United States by population?", answer: "New York City" },
  { question: "What is the smallest city in the United States by population?", answer: "Monowi, Nebraska" },
  { question: "What is the name of the region with the states of Maine, Vermont, and New Hampshire?", answer: "New England" },
  { question: "What mountain range stretches from Maine to Georgia?", answer: "The Appalachian Mountains" },
  { question: "What mountain range is in the western United States?", answer: "The Rocky Mountains" },
  { question: "What state is home to the Great Smoky Mountains?", answer: "Tennessee and North Carolina" },
  { question: "What is the largest national park in the United States?", answer: "Wrangell-St. Elias National Park, Alaska" },
  { question: "What is the deepest lake in the United States?", answer: "Crater Lake, Oregon" },
  { question: "What U.S. state borders Canada and the Pacific Ocean?", answer: "Washington" },
  { question: "What U.S. state borders Mexico?", answer: "California, Arizona, New Mexico, and Texas" },
  { question: "What is the main river that flows through Washington, D.C.?", answer: "Potomac River" },
  { question: "What is the highest point in the contiguous United States?", answer: "Mount Whitney, California" },
  { question: "What is the largest river by volume in the United States?", answer: "Mississippi River" },
  { question: "What U.S. state is known as the 'Land of 10,000 Lakes'?", answer: "Minnesota" },
  { question: "What state is home to the Everglades?", answer: "Florida" },
  { question: "What is the capital of Pennsylvania?", answer: "Harrisburg" },
  { question: "What is the capital of Georgia?", answer: "Atlanta" },
  { question: "What is the capital of Illinois?", answer: "Springfield" },
  { question: "What state is home to the Rocky Mountain National Park?", answer: "Colorado" },
  { question: "What state is known as the 'Volunteer State'?", answer: "Tennessee" },
  { question: "What U.S. state has the most national parks?", answer: "California" },
  { question: "What river forms part of the border between Texas and Mexico?", answer: "Rio Grande" },
  { question: "What U.S. state is known for its hot springs?", answer: "Arkansas" },
  { question: "What U.S. state is nicknamed the 'Beehive State'?", answer: "Utah" },
  { question: "What is the southernmost point of the United States?", answer: "Key West, Florida" },
  { question: "What is the northernmost state in the United States?", answer: "Alaska" },
  { question: "What state has the nickname 'The Last Frontier'?", answer: "Alaska" },
  { question: "What is the driest state in the United States?", answer: "Nevada" },
  { question: "What is the rainiest state in the United States?", answer: "Hawaii" },
  { question: "What state is the only one to have a royal palace?", answer: "Hawaii" },
  { question: "What is the oldest city in the United States?", answer: "St. Augustine, Florida" },
  { question: "What is the largest canyon in the United States?", answer: "Grand Canyon" },
  { question: "What state is home to Death Valley?", answer: "California" },
  { question: "What is the lowest point in the United States?", answer: "Badwater Basin, Death Valley" },
  { question: "What state is known for its potatoes?", answer: "Idaho" },
  { question: "What state has the nickname 'The Bluegrass State'?", answer: "Kentucky" },
  { question: "What state is home to the Gateway Arch?", answer: "Missouri" },
  { question: "What U.S. state is nicknamed 'The Cornhusker State'?", answer: "Nebraska" },
  { question: "What state has the nickname 'The Constitution State'?", answer: "Connecticut" },
  { question: "What is the largest plain in the United States?", answer: "The Great Plains" },
  { question: "What is the largest freshwater island in the United States?", answer: "Isle Royale, Michigan" },
  { question: "What state is home to the Olympic National Park?", answer: "Washington" },
  { question: "What state is home to the Ozark Mountains?", answer: "Missouri and Arkansas" },
  { question: "What state has the nickname 'The Mountain State'?", answer: "West Virginia" },
  { question: "What is the name of the region where the Mississippi and Ohio rivers meet?", answer: "The Mississippi Delta" },
  { question: "What state has the nickname 'The Prairie State'?", answer: "Illinois" },
  { question: "What U.S. city is known for the Liberty Bell?", answer: "Philadelphia" }
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

