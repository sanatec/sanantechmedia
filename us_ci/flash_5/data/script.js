const flashcards = [
{ question: "What was the Civil War?", answer: "A war between the Northern and Southern states of the United States." },
  { question: "When did the Civil War take place?", answer: "1861 to 1865" },
  { question: "What were the main causes of the Civil War?", answer: "Slavery, states' rights, and economic differences between the North and South." },
  { question: "Who was the President of the United States during the Civil War?", answer: "Abraham Lincoln" },
  { question: "What was the Confederacy?", answer: "The Southern states that seceded from the Union." },
  { question: "What was the Union?", answer: "The Northern states that remained loyal to the U.S. government." },
  { question: "Who was the President of the Confederacy?", answer: "Jefferson Davis" },
  { question: "What was the first battle of the Civil War?", answer: "The Battle of Fort Sumter" },
  { question: "What was the bloodiest single-day battle of the Civil War?", answer: "The Battle of Antietam" },
  { question: "What was the Emancipation Proclamation?", answer: "An order by President Lincoln freeing slaves in Confederate states." },
  { question: "When was the Emancipation Proclamation issued?", answer: "January 1, 1863" },
  { question: "What was the main goal of the Union during the Civil War?", answer: "To preserve the Union and later to end slavery." },
  { question: "What was the main goal of the Confederacy?", answer: "To gain independence and preserve slavery." },
  { question: "What was the Gettysburg Address?", answer: "A speech by Abraham Lincoln emphasizing national unity and equality." },
  { question: "Who were the two main generals for the Union and Confederacy?", answer: "Ulysses S. Grant (Union) and Robert E. Lee (Confederacy)" },
  { question: "What was the turning point of the Civil War?", answer: "The Battle of Gettysburg" },
  { question: "What was the largest battle of the Civil War?", answer: "The Battle of Gettysburg" },
  { question: "What was the outcome of the Civil War?", answer: "The Union won, slavery was abolished, and the Confederacy was defeated." },
  { question: "What amendment abolished slavery?", answer: "The 13th Amendment" },
  { question: "What role did Harriet Tubman play in the Civil War?", answer: "She was a spy and helped slaves escape through the Underground Railroad." },
  { question: "What was the Confederate capital?", answer: "Richmond, Virginia" },
  { question: "What was the Union capital?", answer: "Washington, D.C." },
  { question: "What was the purpose of the Underground Railroad?", answer: "To help enslaved people escape to freedom." },
  { question: "Which state was the first to secede from the Union?", answer: "South Carolina" },
  { question: "What is Reconstruction?", answer: "The period after the Civil War to rebuild the South and integrate freed slaves into society." },
  { question: "What was the Dred Scott decision?", answer: "A Supreme Court ruling that denied citizenship to African Americans." },
  { question: "What was the significance of the Battle of Fort Sumter?", answer: "It marked the beginning of the Civil War." },
  { question: "What was the role of African Americans in the Civil War?", answer: "Many fought for the Union as soldiers and worked in support roles." },
  { question: "What was the name of the Confederate army?", answer: "The Army of Northern Virginia" },
  { question: "What was the name of the Union army?", answer: "The Army of the Potomac" },
  { question: "What was the Anaconda Plan?", answer: "The Union's strategy to blockade Southern ports and split the Confederacy." },
  { question: "What was the significance of the Battle of Vicksburg?", answer: "It gave the Union control of the Mississippi River." },
  { question: "What were 'border states'?", answer: "Slave states that did not secede and remained in the Union." },
  { question: "Name one border state.", answer: "Kentucky" },
  { question: "Who was John Wilkes Booth?", answer: "The assassin of President Abraham Lincoln." },
  { question: "When was Abraham Lincoln assassinated?", answer: "April 14, 1865" },
  { question: "What was the Appomattox Court House?", answer: "The site where General Lee surrendered to General Grant." },
  { question: "What year did the Civil War end?", answer: "1865" },
  { question: "What was the role of women during the Civil War?", answer: "They served as nurses, spies, and supporters on the home front." },
  { question: "What were Confederate soldiers commonly called?", answer: "Rebels" },
  { question: "What were Union soldiers commonly called?", answer: "Yankees" },
  { question: "What was the Fugitive Slave Act?", answer: "A law requiring escaped slaves to be returned to their owners." },
  { question: "What was the significance of the 54th Massachusetts Regiment?", answer: "It was one of the first African American regiments to fight for the Union." },
  { question: "Who was Frederick Douglass?", answer: "An abolitionist who fought for the end of slavery." },
  { question: "What was Sherman's March to the Sea?", answer: "A Union campaign that destroyed Southern infrastructure." },
  { question: "What were ironclads?", answer: "Warships covered in iron armor used during the Civil War." },
  { question: "What role did railroads play in the Civil War?", answer: "They transported troops and supplies for both sides." },
  { question: "What is conscription?", answer: "Mandatory enlistment in the military, also known as the draft." },
  { question: "What was the significance of the Battle of Bull Run?", answer: "It was the first major battle of the Civil War." },
  { question: "What were the Confederate states also known as?", answer: "The Southern states or the Confederacy." },
  { question: "What were abolitionists?", answer: "People who fought to end slavery." },
  { question: "What was the Kansas-Nebraska Act?", answer: "It allowed territories to decide on slavery by popular sovereignty." },
  { question: "What was the Missouri Compromise?", answer: "An agreement to balance free and slave states." },
  { question: "What was the significance of the Battle of Chancellorsville?", answer: "It was a major Confederate victory." },
  { question: "Who was Stonewall Jackson?", answer: "A Confederate general known for his bravery in battle." },
  { question: "What was the significance of the Battle of Atlanta?", answer: "It helped secure Abraham Lincoln's re-election in 1864." },
  { question: "What is a siege?", answer: "A military tactic of surrounding and cutting off a city to force surrender." },
  { question: "What was the role of Native Americans in the Civil War?", answer: "Some tribes fought for the Union, while others supported the Confederacy." },
  { question: "What were carpetbaggers?", answer: "Northerners who moved South during Reconstruction for economic opportunities." },
  { question: "What were scalawags?", answer: "Southern whites who supported Reconstruction and the Union." }
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

