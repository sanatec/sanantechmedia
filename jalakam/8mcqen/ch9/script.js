document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "The scenes captured between the moment the camera is turned on and the moment it is turned off are known as a:",
    "options": [
      { "text": "Project File", "isCorrect": false },
      { "text": "Transition", "isCorrect": false },
      { "text": "Shot", "isCorrect": true },
      { "text": "Composition", "isCorrect": false }
    ]
  },
  {
    "question": "What is the smallest unit of digital image information?",
    "options": [
      { "text": "Vector", "isCorrect": false },
      { "text": "Megapixel", "isCorrect": false },
      { "text": "Pixel", "isCorrect": true },
      { "text": "Frame", "isCorrect": false }
    ]
  },
  {
    "question": "Which term is used to specify the resolution in photos or videos, increasing with image clarity?",
    "options": [
      { "text": "Frame Rate", "isCorrect": false },
      { "text": "Aspect Ratio", "isCorrect": false },
      { "text": "Megapixel", "isCorrect": true },
      { "text": "Exposure", "isCorrect": false }
    ]
  },
  {
    "question": "What does **Exposure** refer to in camera settings?",
    "options": [
      { "text": "Ensuring accurate colour tones in the visuals.", "isCorrect": false },
      { "text": "The amount of light entering the camera sensor.", "isCorrect": true },
      { "text": "The sharpness of the background.", "isCorrect": false },
      { "text": "The number of shots taken.", "isCorrect": false }
    ]
  },
  {
    "question": "What is the primary advantage of a **DSLR camera** compared to a mobile phone camera?",
    "options": [
      { "text": "Higher portability and lighter weight.", "isCorrect": false },
      { "text": "Superior image quality and interchangeable lenses.", "isCorrect": true },
      { "text": "Faster social media upload speeds.", "isCorrect": false },
      { "text": "Built-in editing software.", "isCorrect": false }
    ]
  },
  {
    "question": "Which camera shot type is specifically recommended to **effectively convey the severity of plastic pollution** by focusing on the affected areas and emphasizing details?",
    "options": [
      { "text": "Extreme Wide Shot", "isCorrect": false },
      { "text": "Medium Shot", "isCorrect": false },
      { "text": "Close-up Shot", "isCorrect": true },
      { "text": "Wide Shot", "isCorrect": false }
    ]
  },
  {
    "question": "Which basic camera shot is typically used to show a person from the waist up, focusing on interaction and gesture?",
    "options": [
      { "text": "Extreme Wide Shot", "isCorrect": false },
      { "text": "Medium Shot", "isCorrect": true },
      { "text": "Close-up Shot", "isCorrect": false },
      { "text": "Long Shot", "isCorrect": false }
    ]
  },
  {
    "question": "Which software is used as the primary video editing tool in this chapter?",
    "options": [
      { "text": "Adobe Premiere Pro", "isCorrect": false },
      { "text": "Final Cut Pro", "isCorrect": false },
      { "text": "Kdenlive", "isCorrect": true },
      { "text": "OpenShot", "isCorrect": false }
    ]
  },
  {
    "question": "In Kdenlive, where are all the raw video clips, images, and audio files that will be used in the project **first imported** and stored?",
    "options": [
      { "text": "Project Monitor", "isCorrect": false },
      { "text": "Clip Monitor", "isCorrect": false },
      { "text": "Project Bin", "isCorrect": true },
      { "text": "Video Track 1", "isCorrect": false }
    ]
  },
  {
    "question": "What is the purpose of the **Razor Tool** in the Kdenlive timeline?",
    "options": [
      { "text": "To cut a video clip into separate sections.", "isCorrect": true },
      { "text": "To zoom in on the timeline.", "isCorrect": false },
      { "text": "To drag and arrange clips.", "isCorrect": false },
      { "text": "To add a colour filter.", "isCorrect": false }
    ]
  },
  {
    "question": "What must be done as the very first step to separate the embedded audio from a video clip on the Kdenlive timeline?",
    "options": [
      { "text": "Apply the 'Mute' effect.", "isCorrect": false },
      { "text": "Right-click the clip and select 'Ungroup Clips'.", "isCorrect": true },
      { "text": "Use the Razor Tool on the audio.", "isCorrect": false },
      { "text": "Delete the video track.", "isCorrect": false }
    ]
  },
  {
    "question": "In Kdenlive, what is the term used for **transition effects** that are added between scenes to make the change smoother and more natural?",
    "options": [
      { "text": "Effects", "isCorrect": false },
      { "text": "Compositions", "isCorrect": true },
      { "text": "Renderings", "isCorrect": false },
      { "text": "Subtitles", "isCorrect": false }
    ]
  },
  {
    "question": "Which Kdenlive feature allows users to type and add text information to the video, typically used for titles and credits?",
    "options": [
      { "text": "Add Image Sequence", "isCorrect": false },
      { "text": "Add Title Clip", "isCorrect": true },
      { "text": "Add Color Clip", "isCorrect": false },
      { "text": "Create Animation", "isCorrect": false }
    ]
  },
  {
    "question": "What is the project resolution (video size) for a video created in Kdenlive with the **HD720p 25fps** profile?",
    "options": [
      { "text": "1920x1080", "isCorrect": false },
      { "text": "640x480", "isCorrect": false },
      { "text": "3840x2160", "isCorrect": false },
      { "text": "1280x720", "isCorrect": true }
    ]
  },
  {
    "question": "Which of the following is listed as a mobile video editing application in the chapter?",
    "options": [
      { "text": "Kdenlive", "isCorrect": false },
      { "text": "InShot", "isCorrect": true },
      { "text": "GIMP", "isCorrect": false },
      { "text": "Blender", "isCorrect": false }
    ]
  },
  {
    "question": "A student is filming an outdoor event on a windy day using a mobile phone. They notice the footage is shaky. What is the procedural correction?",
    "options": [
      { "text": "Increase the Megapixel setting.", "isCorrect": false },
      { "text": "Use an External Microphone.", "isCorrect": false },
      { "text": "Use a Tripod or Gimbal.", "isCorrect": true },
      { "text": "Switch to a Wide Shot.", "isCorrect": false }
    ]
  },
  {
    "question": "Which of the following is an essential foundational step *before* shooting a video, as described in the chapter?",
    "options": [
      { "text": "Applying special effects in editing software.", "isCorrect": false },
      { "text": "Rendering the video to a final file.", "isCorrect": false },
      { "text": "Preparing the required script for the video.", "isCorrect": true },
      { "text": "Uploading the raw footage directly to social media.", "isCorrect": false }
    ]
  },
  {
    "question": "Which type of camera shot is used to capture a large area, showing the subject's entire body and the environment around them?",
    "options": [
      { "text": "Close-up", "isCorrect": false },
      { "text": "Medium Close-up", "isCorrect": false },
      { "text": "Long Shot (or Wide Shot)", "isCorrect": true },
      { "text": "Extreme Close-up", "isCorrect": false }
    ]
  },
  {
    "question": "In Kdenlive, if you want to make a clip on the timeline shorter by removing a middle segment, what tool should you use twice?",
    "options": [
      { "text": "Select Tool", "isCorrect": false },
      { "text": "Spacer Tool", "isCorrect": false },
      { "text": "Razor Tool", "isCorrect": true },
      { "text": "Zoom Tool", "isCorrect": false }
    ]
  },
  {
    "question": "After editing, what process converts the Kdenlive project file (which contains all the arrangements and edits) into a single, viewable video file (like .mp4)?",
    "options": [
      { "text": "Importing", "isCorrect": false },
      { "text": "Archiving", "isCorrect": false },
      { "text": "Rendering/Exporting", "isCorrect": true },
      { "text": "Ungrouping", "isCorrect": false }
    ]
  },
  {
    "question": "Which shot type fills the screen with the subject's face, emphasizing their emotions and reactions?",
    "options": [
      { "text": "Long Shot", "isCorrect": false },
      { "text": "Close-up Shot", "isCorrect": true },
      { "text": "Wide Shot", "isCorrect": false },
      { "text": "Medium Shot", "isCorrect": false }
    ]
  },
  {
    "question": "What is the key characteristic of a **Wide Shot** in terms of framing?",
    "options": [
      { "text": "It isolates a small detail of the subject.", "isCorrect": false },
      { "text": "It shows the subject from the waist up.", "isCorrect": false },
      { "text": "It includes the subject's entire body and the setting.", "isCorrect": true },
      { "text": "It focuses only on the subject's eyes.", "isCorrect": false }
    ]
  },
  {
    "question": "If your video is too dark because not enough light is hitting the sensor, which general camera setting needs to be increased?",
    "options": [
      { "text": "Aspect Ratio", "isCorrect": false },
      { "text": "Frame Rate", "isCorrect": false },
      { "text": "Megapixel Count", "isCorrect": false },
      { "text": "Exposure (or related settings like aperture/ISO)", "isCorrect": true }
    ]
  },
  {
    "question": "Which online video editor is mentioned in the chapter?",
    "options": [
      { "text": "InShot", "isCorrect": false },
      { "text": "VN", "isCorrect": false },
      { "text": "Canva", "isCorrect": true },
      { "text": "Filmora", "isCorrect": false }
    ]
  },
  {
    "question": "When arranging clips in Kdenlive, the final sequence of video and audio is placed on the:",
    "options": [
      { "text": "Project Bin", "isCorrect": false },
      { "text": "Clip Monitor", "isCorrect": false },
      { "text": "Timeline/Tracks", "isCorrect": true },
      { "text": "Title Clip Editor", "isCorrect": false }
    ]
  },
  {
    "question": "In Kdenlive, where should the background music clip be placed to play alongside the video?",
    "options": [
      { "text": "In the Project Bin", "isCorrect": false },
      { "text": "On an Audio Track (A1, A2, etc.)", "isCorrect": true },
      { "text": "In the Project Monitor", "isCorrect": false },
      { "text": "In the Title Clip", "isCorrect": false }
    ]
  },
  {
    "question": "What must be prepared first when creating an awareness video, such as the one on plastic waste, according to the prescribed steps?",
    "options": [
      { "text": "The final editing sequence.", "isCorrect": false },
      { "text": "A detailed video script (screenplay).", "isCorrect": true },
      { "text": "The background music track.", "isCorrect": false },
      { "text": "The final title card.", "isCorrect": false }
    ]
  },
  {
    "question": "What is the purpose of the **Project Monitor** in the Kdenlive interface?",
    "options": [
      { "text": "To view individual clips before adding them to the timeline.", "isCorrect": false },
      { "text": "To preview the entire video as it is being edited on the timeline.", "isCorrect": true },
      { "text": "To store imported media files.", "isCorrect": false },
      { "text": "To separate audio and video tracks.", "isCorrect": false }
    ]
  },
  {
    "question": "What does a **Close-up** shot emphasize?",
    "options": [
      { "text": "The environment or setting.", "isCorrect": false },
      { "text": "The full body of the subject.", "isCorrect": false },
      { "text": "Small details, emotions, or specific objects.", "isCorrect": true },
      { "text": "The interaction between two characters.", "isCorrect": false }
    ]
  },
  {
    "question": "Which of the following is a mobile application mentioned for video editing?",
    "options": [
      { "text": "Kdenlive", "isCorrect": false },
      { "text": "InVideo AI", "isCorrect": false },
      { "text": "PowerDirector", "isCorrect": true },
      { "text": "Clideo", "isCorrect": false }
    ]
  },
  {
    "question": "What is the term for a wide shot that makes the subject appear small and emphasizes the large scale of the surroundings?",
    "options": [
      { "text": "Close-up Shot", "isCorrect": false },
      { "text": "Medium Shot", "isCorrect": false },
      { "text": "Extreme Wide Shot", "isCorrect": true },
      { "text": "Medium Close-up", "isCorrect": false }
    ]
  },
  {
    "question": "If you are editing in Kdenlive using the project profile **HD1080p 25fps**, what would be the resulting video size (resolution)?",
    "options": [
      { "text": "1280x720", "isCorrect": false },
      { "text": "1920x1080", "isCorrect": true },
      { "text": "640x480", "isCorrect": false },
      { "text": "2560x1440", "isCorrect": false }
    ]
  },
  {
    "question": "In Kdenlive, to apply a gradual wipe transition where one clip slowly moves across and reveals the next, you would use which feature?",
    "options": [
      { "text": "Razor Tool", "isCorrect": false },
      { "text": "Effects", "isCorrect": false },
      { "text": "Compositions (Transitions)", "isCorrect": true },
      { "text": "Add Title Clip", "isCorrect": false }
    ]
  },
  {
    "question": "The resolution of a video is primarily determined by the number of:",
    "options": [
      { "text": "Compositions used.", "isCorrect": false },
      { "text": "Shots in the video.", "isCorrect": false },
      { "text": "Pixels captured.", "isCorrect": true },
      { "text": "Audio tracks added.", "isCorrect": false }
    ]
  },
  {
    "question": "Which type of shot is most suitable for showing a person from the knee up, offering a balance between action and expression?",
    "options": [
      { "text": "Close-up Shot", "isCorrect": false },
      { "text": "Extreme Wide Shot", "isCorrect": false },
      { "text": "Medium Long Shot", "isCorrect": true },
      { "text": "Extreme Close-up", "isCorrect": false }
    ]
  },
  {
    "question": "A student wants to start a Kdenlive video with a simple black screen displaying the project title for 5 seconds. Which Kdenlive feature would they use to create the background *behind* the text?",
    "options": [
      { "text": "Import Image", "isCorrect": false },
      { "text": "Add Image Sequence", "isCorrect": false },
      { "text": "Add Title Clip (Text only)", "isCorrect": false },
      { "text": "Add Color Clip (for the black background)", "isCorrect": true }
    ]
  },
  {
    "question": "What is the primary technical difference that makes DSLR cameras capable of superior image quality compared to mobile cameras?",
    "options": [
      { "text": "They use proprietary file formats.", "isCorrect": false },
      { "text": "They have larger sensors and interchangeable lenses.", "isCorrect": true },
      { "text": "They are lighter and more compact.", "isCorrect": false },
      { "text": "They have built-in social media connectivity.", "isCorrect": false }
    ]
  },
  {
    "question": "Which component of the Kdenlive interface is primarily used to drag and drop clips into the correct sequence?",
    "options": [
      { "text": "Project Bin", "isCorrect": false },
      { "text": "Clip Monitor", "isCorrect": false },
      { "text": "Timeline/Tracks", "isCorrect": true },
      { "text": "Effects Panel", "isCorrect": false }
    ]
  },
  {
    "question": "In the phrase 'HD720p 25fps', what does '25fps' refer to?",
    "options": [
      { "text": "The total number of pixels in the frame.", "isCorrect": false },
      { "text": "The file size of the video.", "isCorrect": false },
      { "text": "The frame rate (frames per second).", "isCorrect": true },
      { "text": "The exposure setting.", "isCorrect": false }
    ]
  },
  {
    "question": "Which of the following describes the key function of **Video Editing**?",
    "options": [
      { "text": "Capturing the raw footage using a camera.", "isCorrect": false },
      { "text": "Arranging, cutting, and applying effects to clips to create a final video.", "isCorrect": true },
      { "text": "Designing the script and story flow.", "isCorrect": false },
      { "text": "Publishing the video to social media platforms.", "isCorrect": false }
    ]
  },
  {
    "question": "If a director needs a shot to primarily show a character's intense facial reaction to shocking news, filling most of the screen, which shot type is most appropriate?",
    "options": [
      { "text": "Wide Shot", "isCorrect": false },
      { "text": "Medium Close-up", "isCorrect": true },
      { "text": "Long Shot", "isCorrect": false },
      { "text": "Extreme Wide Shot", "isCorrect": false }
    ]
  },
  {
    "question": "Which of the following is an example of an online video editor mentioned in the text?",
    "options": [
      { "text": "VN", "isCorrect": false },
      { "text": "Clideo", "isCorrect": true },
      { "text": "InShot", "isCorrect": false },
      { "text": "Kdenlive", "isCorrect": false }
    ]
  },
  {
    "question": "After using 'Ungroup Clips' to separate video and audio, how do you remove *only* the audio clip from the timeline?",
    "options": [
      { "text": "Right-click the video clip and select 'Delete'.", "isCorrect": false },
      { "text": "Select the audio clip and press the Delete key.", "isCorrect": true },
      { "text": "Apply a 'Silence' effect to the audio track.", "isCorrect": false },
      { "text": "Use the 'Add Title Clip' feature.", "isCorrect": false }
    ]
  },
  {
    "question": "Which camera setting controls the accurate reproduction of colours under different lighting conditions?",
    "options": [
      { "text": "Frame Rate", "isCorrect": false },
      { "text": "White Balance", "isCorrect": true },
      { "text": "Aspect Ratio", "isCorrect": false },
      { "text": "Pixel Count", "isCorrect": false }
    ]
  },
  {
    "question": "If you want to view an individual clip from the Project Bin before adding it to the timeline, which monitor should you use in Kdenlive?",
    "options": [
      { "text": "Project Monitor", "isCorrect": false },
      { "text": "Timeline", "isCorrect": false },
      { "text": "Clip Monitor", "isCorrect": true },
      { "text": "Effects Panel", "isCorrect": false }
    ]
  },
  {
    "question": "Which term describes the process of uploading a video to platforms like YouTube or Instagram for public viewing?",
    "options": [
      { "text": "Scripting", "isCorrect": false },
      { "text": "Editing", "isCorrect": false },
      { "text": "Publishing", "isCorrect": true },
      { "text": "Rendering", "isCorrect": false }
    ]
  },
  {
    "question": "To add a colored background to your video, like the black background for the title, which option in the Project Bin should be selected?",
    "options": [
      { "text": "Add Title Clip", "isCorrect": false },
      { "text": "Add Image Sequence", "isCorrect": false },
      { "text": "Add Color Clip", "isCorrect": true },
      { "text": "Import Image", "isCorrect": false }
    ]
  },
  {
    "question": "What is the recommended tool to use with a mobile phone during shooting to prevent shaky videos and ensure camera stability?",
    "options": [
      { "text": "External Microphone", "isCorrect": false },
      { "text": "Gimbal or Tripod", "isCorrect": true },
      { "text": "Ring Light", "isCorrect": false },
      { "text": "Wide Angle Lens", "isCorrect": false }
    ]
  },
  {
    "question": "The gap between content creators and viewers has significantly narrowed due to the rise of which platforms?",
    "options": [
      { "text": "Traditional Media (TV/Radio)", "isCorrect": false },
      { "text": "Social Media Platforms", "isCorrect": true },
      { "text": "Print Magazines", "isCorrect": false },
      { "text": "Desktop Computers", "isCorrect": false }
    ]
  },
  {
    "question": "What is the second essential step mentioned, after preparing the script, for creating a successful video?",
    "options": [
      { "text": "The video must be uploaded immediately.", "isCorrect": false },
      { "text": "The video must be shot according to the script.", "isCorrect": true },
      { "text": "The video must be edited by AI.", "isCorrect": false },
      { "text": "The video must be converted to a PNG file.", "isCorrect": false }
    ]
  } 
    ];

    let currentQuestionIndex = 0;
    let totalScore = 0;
    const userAnswers = []; // Stores user selections and score for review

    // --- DOM Elements ---
    const quizScreen = document.getElementById('quiz-screen');
    const reviewScreen = document.getElementById('review-screen');
    const questionCounter = document.getElementById('question-counter');
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const feedbackMessage = document.getElementById('feedback-message');
    const backButton = document.getElementById('back-button');
    const nextButton = document.getElementById('next-button');
    const scoreDisplay = document.getElementById('score-display');
    const correctSound = document.getElementById('correct-sound');
    const wrongSound = document.getElementById('wrong-sound');

    // --- Sound Functions (Unchanged) ---
    function playCorrectSound() {
        try {
            correctSound.currentTime = 0; 
            correctSound.play().catch(error => {
                console.log('Could not play correct sound:', error);
                playFallbackSound('correct');
            });
        } catch (error) {
            console.log('Error playing correct sound:', error);
            playFallbackSound('correct');
        }
    }

    function playWrongSound() {
        try {
            wrongSound.currentTime = 0; 
            wrongSound.play().catch(error => {
                console.log('Could not play wrong sound:', error);
                playFallbackSound('wrong');
            });
        } catch (error) {
            console.log('Error playing wrong sound:', error);
            playFallbackSound('wrong');
        }
    }

    function playFallbackSound(type) {
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            if (type === 'correct') {
                oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5
            } else {
                oscillator.frequency.setValueAtTime(349.23, audioContext.currentTime); // F4
            }
            
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 1);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 1);
        } catch (error) {
            console.log('Fallback sound also failed:', error);
        }
    }

    // --- Core Functions ---

    /**
     * Updates the score display in the header
     */
    function updateScoreDisplay() {
        scoreDisplay.textContent = `Score: ${totalScore.toFixed(0)}`; 
    }

    /**
     * Loads the current question onto the screen.
     */
    function loadQuestion() {
        if (currentQuestionIndex >= quizData.length) {
            showReviewScreen();
            return;
        }

        const question = quizData[currentQuestionIndex];
        const userAnswer = userAnswers[currentQuestionIndex];
        const hasBeenSubmitted = !!userAnswer;

        // 1. Reset UI State
        questionCounter.textContent = `Question ${currentQuestionIndex + 1}/${quizData.length}`;
        questionText.textContent = question.question;
        optionsContainer.innerHTML = '';
        feedbackMessage.classList.remove('show', 'success', 'partial', 'error');
        feedbackMessage.textContent = '';
        optionsContainer.classList.remove('disabled');

        // 2. Set Navigation Buttons
        backButton.disabled = currentQuestionIndex === 0;
        nextButton.textContent = hasBeenSubmitted ? 'Next' : 'Submit';
        
        if (!hasBeenSubmitted) {
            // Initially disable Submit button until an option is selected
            nextButton.disabled = true;
        } else {
            // If submitted, enable Next
            nextButton.disabled = false;
        }

        // 3. Create Option Buttons
        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.classList.add('option-button');
            button.textContent = option.text;
            button.dataset.index = index;
            button.dataset.isCorrect = option.isCorrect;
            
            button.disabled = hasBeenSubmitted; 
            if (!hasBeenSubmitted) {
                button.addEventListener('click', selectOption); 
            }

            // Restore state if submitted
            if (hasBeenSubmitted) {
                if (userAnswer.selected.includes(index)) {
                    button.classList.add('selected');
                }
                // Show correction
                if (option.isCorrect) {
                    button.classList.add('correct');
                } else if (userAnswer.selected.includes(index) && !option.isCorrect) {
                    button.classList.add('wrong');
                }
                displayFeedback(userAnswer.score);
            }
            
            optionsContainer.appendChild(button);
        });

        // Update score display
        updateScoreDisplay();
    }

    /**
     * Selects one option and deselects all others, enabling the submit button.
     */
    function selectOption(e) {
        // 1. Deselect all
        optionsContainer.querySelectorAll('.option-button').forEach(btn => {
            btn.classList.remove('selected');
        });
        
        // 2. Select the clicked button
        const button = e.target;
        button.classList.add('selected');
        
        // 3. Enable next button
        nextButton.disabled = false;
    }

    /**
     * Handles the 'Next' button click: submits the answer or moves to the next question.
     */
    function handleNext() {
        // If it's a new question (unanswered) -> SUBMIT
        if (!userAnswers[currentQuestionIndex]) {
            submitAnswer();
        } 
        // If already submitted -> NEXT QUESTION
        else {
            currentQuestionIndex++;
            loadQuestion();
        }
    }

    /**
     * Calculates score, provides feedback, and saves the result.
     */
    function submitAnswer() {
        const question = quizData[currentQuestionIndex];
        const selectedButton = optionsContainer.querySelector('.option-button.selected');
        const selectedIndex = selectedButton ? parseInt(selectedButton.dataset.index) : -1;
        
        let score = 0;
        let isCorrect = false;

        if (selectedIndex !== -1) {
            isCorrect = question.options[selectedIndex].isCorrect;
            score = isCorrect ? 1 : 0;
        }

        // 1. Save Answer
        totalScore += score;
        userAnswers[currentQuestionIndex] = { selected: selectedIndex !== -1 ? [selectedIndex] : [], score: score };

        // 2. Update UI with Feedback and Correction
        optionsContainer.classList.add('disabled'); // Prevent further clicks
        Array.from(optionsContainer.children).forEach(button => {
            button.disabled = true;
            const index = parseInt(button.dataset.index);
            const isCorrectOption = question.options[index].isCorrect;

            if (isCorrectOption) {
                button.classList.add('correct');
            } else if (index === selectedIndex && !isCorrectOption) {
                button.classList.add('wrong');
            }
        });

        // 3. Play Sound and Animation
        if (score === 1) {
            playConfetti();
            playCorrectSound();
        } else {
            playWrongSound();
        }

        // 4. Display Textual Feedback
        displayFeedback(score);

        // 5. Update Navigation and Score
        nextButton.textContent = 'Next';
        nextButton.disabled = false;
        updateScoreDisplay();
    }

    /**
     * Displays a textual message based on the score.
     */
    function displayFeedback(score) {
        feedbackMessage.classList.add('show');
        
        if (score === 1) {
            // Correct answer
            feedbackMessage.textContent = "🎉 Correct! You earned 1 point!";
            feedbackMessage.className = 'feedback-message show success';
        } else {
            // Wrong answer
            feedbackMessage.textContent = "📚 Incorrect. The correct answer is highlighted in green. You earned 0 points.";
            feedbackMessage.className = 'feedback-message show error';
        }
    }

    /**
     * CUSTOM CANVAS IMPLEMENTATION (Replaces the confetti library call)
     * Plays the custom fireworks animation from the middle of the app area to the top.
     */
    function playConfetti() {
        const canvas = document.getElementById("star-canvas");
        if (!canvas) return; 
        
        const ctx = canvas.getContext("2d");
        // Always resize to fit the current window on launch
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let particles = [];
        const colors = ["#FFD700", "#FFEE58", "#FFF176", "#FFAB00", "#FF6F00"];
        
        // Explosion Origin: Middle of screen width, roughly 40% down from the top (middle of app area)
        const centerX = canvas.width / 2;
        const centerY = canvas.height * 0.4; 

        // Create initial explosion particles
        for (let i = 0; i < 60; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 6 + 3;
            particles.push({
                x: centerX,
                y: centerY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed - 2,
                size: Math.random() * 4 + 2,
                color: colors[Math.floor(Math.random() * colors.length)],
                life: 100
            });
        }

        function drawStar(x, y, size, color) {
            ctx.save();
            ctx.beginPath();
            ctx.translate(x, y);
            ctx.moveTo(0, -size);
            for (let i = 0; i < 5; i++) {
                ctx.rotate(Math.PI / 5);
                ctx.lineTo(0, -size * 0.5);
                ctx.rotate(Math.PI / 5);
                ctx.lineTo(0, -size);
            }
            ctx.closePath();
            ctx.fillStyle = color;
            ctx.shadowColor = color;
            ctx.shadowBlur = 15;
            ctx.fill();
            ctx.restore();
        }

        function animate() {
            // Clear the canvas completely for a clean look
            ctx.clearRect(0, 0, canvas.width, canvas.height); 

            // Update and draw particles
            particles.forEach((p, i) => {
                p.x += p.vx;
                p.y += p.vy;
                p.vy += 0.05; // gravity pull
                p.life--;

                if (p.life > 0) {
                    drawStar(p.x, p.y, p.size, p.color);
                } else {
                    particles.splice(i, 1);
                }
            });

            // Continue animation if particles remain
            if (particles.length > 0) {
                requestAnimationFrame(animate);
            } else {
                // Final clear once animation is complete
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            }
        }

        animate();
    }

    /**
     * Handles the 'Back' button click.
     */
    function handleBack() {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            loadQuestion();
        }
    }

    /**
     * Switches to the Review Screen and generates the review content.
     */
    function showReviewScreen() {
        quizScreen.classList.remove('active');
        reviewScreen.classList.add('active');
        
        // Hide/disable navigation buttons
        backButton.style.display = 'none';
        nextButton.style.display = 'none';

        const reviewDetails = document.getElementById('review-details');
        reviewDetails.innerHTML = '';

        quizData.forEach((question, index) => {
            const userAnswer = userAnswers[index];
            const item = document.createElement('div');
            item.classList.add('review-item');

            const scoreDisplay = userAnswer ? `<span class="review-score">${userAnswer.score.toFixed(0)} / 1</span>` : '';

            item.innerHTML = `
                <div class="review-question-title">Q${index + 1}: ${question.question} ${scoreDisplay}</div>
                <ul style="list-style-type: none; padding-left: 0;">
                    ${question.options.map((opt, i) => {
                        const isSelected = userAnswer && userAnswer.selected.includes(i);
                        let className = '';
                        if (opt.isCorrect) {
                            className = 'correct';
                        } else if (isSelected && !opt.isCorrect) {
                            className = 'wrong';
                        }
                        return `<li class="${className}" style="padding: 5px; margin-left: 10px; border-left: 3px solid ${opt.isCorrect ? '#4cd964' : (isSelected ? '#ff3b30' : '#ccc')}; margin-bottom: 3px; background-color: ${className === 'correct' ? '#e6ffe6' : (className === 'wrong' ? '#ffe6e6' : 'white')};">
                            ${opt.text}
                            ${isSelected ? ' (Your Selection)' : ''}
                        </li>`;
                    }).join('')}
                </ul>
            `;
            reviewDetails.appendChild(item);
        });

        // Display Final Score
        const finalScore = document.createElement('div');
        finalScore.classList.add('review-final-score');
        finalScore.textContent = `FINAL SCORE: ${totalScore.toFixed(0)} / ${quizData.length.toFixed(0)}`;
        reviewDetails.appendChild(finalScore);
    }

    // --- Event Listeners and Initialization ---
    backButton.addEventListener('click', handleBack);
    nextButton.addEventListener('click', handleNext);

    // Preload sounds
    correctSound.load();
    wrongSound.load();

    // Initial load
    loadQuestion();
    updateScoreDisplay();
});
