const flashcards = [
  { question: "When was the U.S. Civil War?", answer: "1861–1865" },
  { question: "What was the Reconstruction period?", answer: "The period after the Civil War, from 1865 to 1877, focused on rebuilding the South and integrating former slaves." },
  { question: "Who was the 16th President of the United States?", answer: "Abraham Lincoln" },
  { question: "Who succeeded Abraham Lincoln as President?", answer: "Andrew Johnson" },
  { question: "What was the 13th Amendment?", answer: "It abolished slavery in the United States." },
  { question: "What was the 14th Amendment?", answer: "It granted citizenship and equal protection under the law to all persons born or naturalized in the U.S." },
  { question: "What was the 15th Amendment?", answer: "It granted African American men the right to vote." },
  { question: "What is the significance of the Battle of Gettysburg?", answer: "It was a turning point in the Civil War, leading to the defeat of the Confederacy." },
  { question: "When was the assassination of President Abraham Lincoln?", answer: "April 14, 1865" },
  { question: "What was the main goal of the Ku Klux Klan during Reconstruction?", answer: "To intimidate African Americans and prevent them from voting or gaining political power." },
  { question: "What was the Industrial Revolution in the U.S.?", answer: "A period from the late 18th to the early 19th century marked by rapid industrial growth and technological advancements." },
  { question: "Who was the founder of Standard Oil?", answer: "John D. Rockefeller" },
  { question: "What was the significance of the Transcontinental Railroad?", answer: "It connected the eastern U.S. with the western U.S., facilitating trade and westward expansion." },
  { question: "When was the U.S. Civil Rights Act passed?", answer: "1964" },
  { question: "What was the Gilded Age?", answer: "A period from the 1870s to the 1900s characterized by economic growth, political corruption, and social inequality." },
  { question: "What was the purpose of the Sherman Antitrust Act?", answer: "To break up monopolies and promote fair competition in business." },
  { question: "What was the Great Depression?", answer: "A severe worldwide economic downturn that began in 1929 and lasted for about a decade." },
  { question: "Who was the President during the Great Depression?", answer: "Franklin D. Roosevelt" },
  { question: "What was the New Deal?", answer: "A series of programs and reforms introduced by Franklin D. Roosevelt to recover from the Great Depression." },
  { question: "What was the Dust Bowl?", answer: "A severe drought in the 1930s that caused widespread crop failure and displacement of farmers." },
  { question: "What was World War I?", answer: "A global conflict from 1914 to 1918 involving many world powers, including the U.S." },
  { question: "What was the Treaty of Versailles?", answer: "The peace treaty that ended World War I and imposed heavy penalties on Germany." },
  { question: "When did the U.S. enter World War I?", answer: "1917" },
  { question: "What was the U.S. policy of isolationism before World War II?", answer: "A policy of avoiding involvement in international conflicts." },
  { question: "What event led the U.S. to enter World War II?", answer: "The attack on Pearl Harbor by Japan on December 7, 1941." },
  { question: "Who was the President during World War II?", answer: "Franklin D. Roosevelt" },
  { question: "What was D-Day?", answer: "The Allied invasion of Normandy on June 6, 1944, during World War II." },
  { question: "What was the significance of the Battle of Midway?", answer: "A turning point in the Pacific theater of World War II where the U.S. defeated Japan." },
  { question: "When did World War II end?", answer: "1945" },
  { question: "What was the Cold War?", answer: "A period of political tension and military rivalry between the U.S. and the Soviet Union from the late 1940s to the early 1990s." },
  { question: "What was the Cuban Missile Crisis?", answer: "A 13-day confrontation in 1962 between the U.S. and the Soviet Union over Soviet nuclear missiles in Cuba." },
  { question: "What was the Civil Rights Movement?", answer: "A social movement in the 1950s and 1960s aimed at ending racial segregation and discrimination against African Americans." },
  { question: "Who was Martin Luther King Jr.?", answer: "A leader in the Civil Rights Movement, known for advocating nonviolent protests and delivering the 'I Have a Dream' speech." },
  { question: "What was the Brown v. Board of Education ruling?", answer: "A landmark Supreme Court case that declared racial segregation in public schools unconstitutional." },
  { question: "What was the significance of the Voting Rights Act of 1965?", answer: "It prohibited racial discrimination in voting, ensuring African Americans' right to vote." },
  { question: "What was the Vietnam War?", answer: "A conflict between North Vietnam (supported by the Soviet Union and China) and South Vietnam (supported by the U.S.) from 1955 to 1975." },
  { question: "What was Watergate?", answer: "A political scandal involving President Nixon's administration and a break-in at the Democratic National Committee headquarters in 1972." },
  { question: "Who was the first woman to serve on the U.S. Supreme Court?", answer: "Sandra Day O'Connor" },
  { question: "What was the 9/11 attack?", answer: "A terrorist attack on September 11, 2001, in which hijacked planes were flown into the World Trade Center and the Pentagon." },
  { question: "Who was the President during the 9/11 attacks?", answer: "George W. Bush" },
  { question: "What was the Patriot Act?", answer: "A law passed in response to the 9/11 attacks to enhance domestic security and surveillance." },
  { question: "What was the Iraq War?", answer: "A conflict that began in 2003 with the U.S. invasion of Iraq, leading to the toppling of Saddam Hussein's regime." },
  { question: "What was the Affordable Care Act?", answer: "A healthcare reform law passed in 2010 aimed at expanding access to health insurance and reducing healthcare costs." },
  { question: "What was the U.S. involvement in the Korean War?", answer: "The U.S. intervened in the Korean War (1950–1953) to prevent the spread of communism in South Korea." },
  { question: "Who was the U.S. President during the Korean War?", answer: "Harry S. Truman" },
  { question: "What was the Manhattan Project?", answer: "A secret U.S. government research project during World War II that developed the atomic bomb." },
  { question: "What was the significance of the Moon landing in 1969?", answer: "The U.S. landed astronauts on the Moon for the first time, marking a major achievement in space exploration." },
  { question: "Who was the first person to walk on the Moon?", answer: "Neil Armstrong" },
  { question: "What was the Gulf War?", answer: "A conflict in 1990–1991 where a U.S.-led coalition forced Iraq to withdraw from Kuwait." },
  { question: "What was the significance of the 2008 financial crisis?", answer: "It was a global economic downturn that began in the U.S. due to a housing market collapse." },
  { question: "What is the U.S. Constitution?", answer: "The supreme law of the United States, outlining the framework of government and rights of citizens." },
  { question: "Who was the 32nd President of the United States?", answer: "Franklin D. Roosevelt" },
  { question: "What was the significance of the Brown v. Board of Education decision?", answer: "It declared racial segregation in public schools unconstitutional." },
  { question: "What was the significance of the 1960 Presidential Debate?", answer: "It was the first televised presidential debate, significantly influencing public opinion." },
  { question: "What was the significance of the Voting Rights Act of 1965?", answer: "It aimed to eliminate discriminatory voting practices, particularly in the South." },
  { question: "Who was the 44th President of the United States?", answer: "Barack Obama" },
  { question: "When did the U.S. officially end the Iraq War?", answer: "2011" },
  { question: "What event led to the U.S. becoming involved in the Vietnam War?", answer: "The Gulf of Tonkin incident in 1964." },
  { question: "What was the Watergate scandal?", answer: "A political scandal in the 1970s involving President Nixon's administration and its attempt to cover up the break-in at the Democratic National Committee headquarters." },
  { question: "Who was the first African American President of the United States?", answer: "Barack Obama" },
  { question: "What is the significance of the U.S. civil rights laws?", answer: "They aimed to eliminate racial segregation and ensure equal rights for all Americans." },
  { question: "What was the significance of the United States' entry into World War I?", answer: "It helped tip the balance in favor of the Allies, leading to the defeat of Germany." },
  { question: "What is the significance of the U.S. Constitution?", answer: "It is the supreme law of the United States, establishing the structure of the government and guaranteeing individual rights." }
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

