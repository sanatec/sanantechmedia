document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
      "question": "What type of software is Krita described as?",
      "options": [
        { "text": "Proprietary word processing software", "isCorrect": false },
        { "text": "Free software used for digital drawing and painting", "isCorrect": true },
        { "text": "Open-source 3D modeling software", "isCorrect": false },
        { "text": "A paid image manipulation application", "isCorrect": false }
      ]
    },
    {
      "question": "Krita can be used on which of the following operating systems?",
      "options": [
        { "text": "Only Windows and macOS", "isCorrect": false },
        { "text": "Only GNU/Linux", "isCorrect": false },
        { "text": "GNU/Linux, Windows, and macOS", "isCorrect": true },
        { "text": "Only Android mobile devices", "isCorrect": false }
      ]
    },
    {
      "question": "Which of these is explicitly mentioned as one of Krita's special features?",
      "options": [
        { "text": "Vector graphics conversion tools", "isCorrect": false },
        { "text": "Built-in photo retouching filters", "isCorrect": false },
        { "text": "A highly useful brush engine and layer management", "isCorrect": true },
        { "text": "Integration with 3D animation studios", "isCorrect": false }
      ]
    },
    {
      "question": "What is the primary advantage of using Krita to prepare a picture before painting it on a wall?",
      "options": [
        { "text": "It automatically calculates paint quantity.", "isCorrect": false },
        { "text": "It eliminates the need for any manual drawing.", "isCorrect": false },
        { "text": "It allows the image to be edited and modified both during and after the drawing process.", "isCorrect": true },
        { "text": "It prints the image in high-resolution segments.", "isCorrect": false }
      ]
    },
    {
      "question": "In the Krita main window, where is the Toolbox located?",
      "options": [
        { "text": "At the top in the Menu Bar", "isCorrect": false },
        { "text": "On the right, as part of the Dockers", "isCorrect": false },
        { "text": "On the left side of the canvas", "isCorrect": true },
        { "text": "At the bottom, as the Status Bar", "isCorrect": false }
      ]
    },
    {
      "question": "What utility panels are typically found on the right side of the Krita interface in the Dockers area?",
      "options": [
        { "text": "The Toolbox and Menu Bar", "isCorrect": false },
        { "text": "The Canvas and Status Bar", "isCorrect": false },
        { "text": "A color selector and layer manager", "isCorrect": true },
        { "text": "The Brush Tool and Fill Tool", "isCorrect": false }
      ]
    },
    {
      "question": "What is the benefit of drawing each element of a picture in separate layers?",
      "options": [
        { "text": "It makes the project file smaller and easier to load.", "isCorrect": false },
        { "text": "It is easier to make the necessary improvements and modifications to individual elements.", "isCorrect": true },
        { "text": "It converts the raster image to a vector image.", "isCorrect": false },
        { "text": "It simplifies the final export process to a JPG file.", "isCorrect": false }
      ]
    },
    {
      "question": "Which button is clicked in the Layer Docker to create a new layer?",
      "options": [
        { "text": "The trash can icon", "isCorrect": false },
        { "text": "The visibility icon (eye)", "isCorrect": false },
        { "text": "The '+' button (plus sign)", "isCorrect": true },
        { "text": "The opacity slider", "isCorrect": false }
      ]
    },
    {
      "question": "What action allows a user to rename a newly created layer in the Layer Docker?",
      "options": [
        { "text": "Right-click and select 'Rename Layer'.", "isCorrect": false },
        { "text": "Pressing the 'R' key while the layer is active.", "isCorrect": false },
        { "text": "Double-click on the layer's current name.", "isCorrect": true },
        { "text": "Using the Text Tool on the canvas.", "isCorrect": false }
      ]
    },
    {
      "question": "Which is the primary tool used for freehand drawing of lines and coloring in Krita?",
      "options": [
        { "text": "Fill Tool (F)", "isCorrect": false },
        { "text": "Brush Tool (B)", "isCorrect": true },
        { "text": "Transform Tool (Ctrl+T)", "isCorrect": false },
        { "text": "Gradient Tool", "isCorrect": false }
      ]
    },
    {
      "question": "Which tool is used to create simple circular and oval shapes for initial object construction?",
      "options": [
        { "text": "Line Tool", "isCorrect": false },
        { "text": "Bezier Curve Tool", "isCorrect": false },
        { "text": "Ellipse Tool", "isCorrect": true },
        { "text": "Poly Line Tool", "isCorrect": false }
      ]
    },
    {
      "question": "To create a **perfect circle** when using the Ellipse Tool, what key must be held down while drawing the shape?",
      "options": [
        { "text": "The Alt key", "isCorrect": false },
        { "text": "The Shift key", "isCorrect": true },
        { "text": "The Ctrl key", "isCorrect": false },
        { "text": "The Tab key", "isCorrect": false }
      ]
    },
    {
      "question": "Which tool is used to slightly rotate or change the size and curvature of a selected layer or element?",
      "options": [
        { "text": "The Transform a layer or a selection (Ctrl+T) tool", "isCorrect": true },
        { "text": "The Move Tool (M)", "isCorrect": false },
        { "text": "The Brush Tool (B)", "isCorrect": false },
        { "text": "The Crop Tool", "isCorrect": false }
      ]
    },
    {
      "question": "When using the Bezier Curve Tool to draw a line that is not intended to be a closed shape, how do you finish the line?",
      "options": [
        { "text": "Pressing the Enter key", "isCorrect": false },
        { "text": "Clicking the 'Complete' button on the options bar", "isCorrect": false },
        { "text": "Double-clicking", "isCorrect": true },
        { "text": "Switching to the Move Tool (M)", "isCorrect": false }
      ]
    },
    {
      "question": "Which tool is used to remove unnecessary lines and refine the edges of a drawing?",
      "options": [
        { "text": "Fill Tool (F)", "isCorrect": false },
        { "text": "Transform Tool (Ctrl+T)", "isCorrect": false },
        { "text": "Eraser Tool (E)", "isCorrect": true },
        { "text": "Brush Tool (B)", "isCorrect": false }
      ]
    },
    {
      "question": "Which tool is best used to add a single, solid color to a closed shape with a single click?",
      "options": [
        { "text": "Text Tool", "isCorrect": false },
        { "text": "Fill Tool (F)", "isCorrect": true },
        { "text": "Line Tool", "isCorrect": false },
        { "text": "Gradient Tool", "isCorrect": false }
      ]
    },
    {
      "question": "Which tool can be used to create a design by blending two colors smoothly?",
      "options": [
        { "text": "Fill Tool (F)", "isCorrect": false },
        { "text": "Brush Tool (B)", "isCorrect": false },
        { "text": "Gradient Tool", "isCorrect": true },
        { "text": "Bezier Curve Tool", "isCorrect": false }
      ]
    },
    {
      "question": "What two primary brush settings must be adjusted to apply detailed textures with the Brush Tool?",
      "options": [
        { "text": "Layer Opacity and Blending Mode", "isCorrect": false },
        { "text": "Brush Size and Color", "isCorrect": true },
        { "text": "Canvas Rotation and Zoom", "isCorrect": false },
        { "text": "Selection Tool and Fill Tool", "isCorrect": false }
      ]
    },
    {
      "question": "What is the crucial first step to convert a drawn element into a preset stamp brush after selecting it on its isolated layer?",
      "options": [
        { "text": "Right-click the element and select 'Save as Preset'.", "isCorrect": false },
        { "text": "Select the 'Edit Brush Settings → Predefined' tab above the canvas.", "isCorrect": true },
        { "text": "Export the layer as a PNG file.", "isCorrect": false },
        { "text": "Use the Move Tool to drag the element into the Brush Preset Docker.", "isCorrect": false }
      ]
    },
    {
      "question": "What happens when you click and drag a preset stamp brush on the canvas?",
      "options": [
        { "text": "The original layer is moved.", "isCorrect": false },
        { "text": "The layer is merged with the background.", "isCorrect": false },
        { "text": "Clones of the stamped image are created.", "isCorrect": true },
        { "text": "The image is converted to a vector path.", "isCorrect": false }
      ]
    },
    {
      "question": "What can you do by right-clicking on the canvas while using a brush?",
      "options": [
        { "text": "Open the File Save dialog.", "isCorrect": false },
        { "text": "Open the Layer Docker.", "isCorrect": false },
        { "text": "Open the Pop-up Palette to adjust properties like Angle and Size.", "isCorrect": true },
        { "text": "Undo the last action.", "isCorrect": false }
      ]
    },
    {
      "question": "Which file format preserves all layers and project data for editing in Krita?",
      "options": [
        { "text": "Joint Photographic Experts Group (.jpg)", "isCorrect": false },
        { "text": "Portable Network Graphics (.png)", "isCorrect": false },
        { "text": "Photoshop Document (.psd)", "isCorrect": false },
        { "text": "Krita Project File (.kra)", "isCorrect": true }
      ]
    },
    {
      "question": "Which of these is **not** a common image file format mentioned for exporting the completed Krita artwork?",
      "options": [
        { "text": "JPG", "isCorrect": false },
        { "text": "PNG", "isCorrect": false },
        { "text": "Web", "isCorrect": false },
        { "text": "PDF", "isCorrect": true }
      ]
    },
    {
      "question": "The Line Tool and Poly Line Tool are often used as alternatives to the Brush Tool for drawing elements that require:",
      "options": [
        { "text": "Only freehand, expressive curves.", "isCorrect": false },
        { "text": "A smooth blend of colors.", "isCorrect": false },
        { "text": "Straight lines and segmented shapes.", "isCorrect": true },
        { "text": "Simple circular shapes.", "isCorrect": false }
      ]
    },
    {
      "question": "What canvas action is used to zoom in and out of the artwork while you are working?",
      "options": [
        { "text": "Pressing the Ctrl key and clicking", "isCorrect": false },
        { "text": "Scrolling the mouse wheel", "isCorrect": true },
        { "text": "Using the Move Tool (M)", "isCorrect": false },
        { "text": "The shortcut Ctrl+Spacebar", "isCorrect": false }
      ]
    },
    {
      "question": "Which tool in the Toolbox is primarily used for selecting irregularly shaped areas of the image?",
      "options": [
        { "text": "Ellipse Tool", "isCorrect": false },
        { "text": "Freehand Selection Tool", "isCorrect": true },
        { "text": "Fill Tool (F)", "isCorrect": false },
        { "text": "Line Tool", "isCorrect": false }
      ]
    },
    {
      "question": "The **Layer Visibility** icon (an eye symbol) in the Layer Docker controls:",
      "options": [
        { "text": "Its position in the layer stack.", "isCorrect": false },
        { "text": "Whether the layer can be edited.", "isCorrect": false },
        { "text": "Whether the contents of the layer are displayed on the canvas.", "isCorrect": true },
        { "text": "Its transparency or opacity level.", "isCorrect": false }
      ]
    },
    {
      "question": "Which layer should typically be placed at the **bottom** of the layer stack?",
      "options": [
        { "text": "The layer currently being drawn on.", "isCorrect": false },
        { "text": "The layer containing the most detailed elements.", "isCorrect": false },
        { "text": "The layer intended to be the background (BG).", "isCorrect": true },
        { "text": "The layer with the lowest opacity.", "isCorrect": false }
      ]
    },
    {
      "question": "What feature allows a designer to control multiple related layers (like all parts of a bird) as a single unit?",
      "options": [
        { "text": "Layer Opacity setting", "isCorrect": false },
        { "text": "Layer Group", "isCorrect": true },
        { "text": "Blending Mode", "isCorrect": false },
        { "text": "Canvas Rotation", "isCorrect": false }
      ]
    },
    {
      "question": "What is the shortcut for the **Move Tool** in Krita?",
      "options": [
        { "text": "Ctrl+T", "isCorrect": false },
        { "text": "B", "isCorrect": false },
        { "text": "M", "isCorrect": true },
        { "text": "E", "isCorrect": false }
      ]
    },
    {
      "question": "Which tool is best suited for outlines that require both smooth curves and sharp, precise points?",
      "options": [
        { "text": "Line Tool", "isCorrect": false },
        { "text": "Ellipse Tool", "isCorrect": false },
        { "text": "Bezier Curve Tool", "isCorrect": true },
        { "text": "Brush Tool (B)", "isCorrect": false }
      ]
    },
    {
      "question": "Which menu in Krita contains the 'New' command to start a new file?",
      "options": [
        { "text": "Edit", "isCorrect": false },
        { "text": "Image", "isCorrect": false },
        { "text": "Settings", "isCorrect": false },
        { "text": "File", "isCorrect": true }
      ]
    },
    {
      "question": "What does the Bezier Curve Tool allow a user to adjust after placing the initial points?",
      "options": [
        { "text": "The canvas size", "isCorrect": false },
        { "text": "The layer opacity", "isCorrect": false },
        { "text": "The direction and curvature of the line segments", "isCorrect": true },
        { "text": "The file's export format", "isCorrect": false }
      ]
    },
    {
      "question": "Which key is commonly pressed to enable a quick rotation and pan view of the canvas while working?",
      "options": [
        { "text": "The Tab key", "isCorrect": false },
        { "text": "The Shift key", "isCorrect": false },
        { "text": "The Spacebar", "isCorrect": true },
        { "text": "The Enter key", "isCorrect": false }
      ]
    },
    {
      "question": "When using the Fill Tool (F), what determines the area that gets filled with color?",
      "options": [
        { "text": "The size of the Brush Tool selected.", "isCorrect": false },
        { "text": "The closest geometric shape to the click location.", "isCorrect": false },
        { "text": "The boundary of the closest closed shape or selected area.", "isCorrect": true },
        { "text": "The entire layer contents.", "isCorrect": false }
      ]
    },
    {
      "question": "In the Layer Docker, what is the purpose of the 'Opacity' slider?",
      "options": [
        { "text": "To hide or show the layer.", "isCorrect": false },
        { "text": "To change the layer's position in the stack.", "isCorrect": false },
        { "text": "To control the layer's transparency level.", "isCorrect": true },
        { "text": "To rename the layer.", "isCorrect": false }
      ]
    },
    {
      "question": "What is the key preparation step mentioned that must be done on the wall before starting the mural drawing and painting?",
      "options": [
        { "text": "Setting up a lighting rig to prevent shadows.", "isCorrect": false },
        { "text": "Installing a protective frame around the area.", "isCorrect": false },
        { "text": "Cleaning the wall and applying primer.", "isCorrect": true },
        { "text": "Drawing a protective border with tape.", "isCorrect": false }
      ]
    },
    {
      "question": "What is the first of the two methods described for transferring the digital image from the computer to the wall?",
      "options": [
        { "text": "Using a proportional grid on a printout and the wall.", "isCorrect": false },
        { "text": "Using the classroom projector to trace the image.", "isCorrect": true },
        { "text": "Drawing the image freehand onto the wall.", "isCorrect": false },
        { "text": "Using a stencil cut from the digital file.", "isCorrect": false }
      ]
    },
    {
      "question": "What is the second method described for transferring the digital image to the wall?",
      "options": [
        { "text": "Using carbon paper to directly copy the outline.", "isCorrect": false },
        { "text": "Using a proportional grid marked on a printout to transfer the image onto a grid on the wall.", "isCorrect": true },
        { "text": "Printing the image in large-format segments and pasting it.", "isCorrect": false },
        { "text": "Freehand drawing from memory.", "isCorrect": false }
      ]
    },
    {
      "question": "When using the projector method, what action is taken immediately after ensuring the projection is at the desired size on the wall?",
      "options": [
        { "text": "Applying the main colors with rollers.", "isCorrect": false },
        { "text": "Taking a printout to check the colors.", "isCorrect": false },
        { "text": "Tracing each part of the image onto the wall using a pencil.", "isCorrect": true },
        { "text": "Turning off the projector to save the bulb.", "isCorrect": false }
      ]
    },
    {
      "question": "You need to draw a perfectly circular moon. After selecting the Ellipse Tool, what physical action ensures the shape is a perfect circle while drawing?",
      "options": [
        { "text": "Holding down the Shift key while drawing the shape.", "isCorrect": true },
        { "text": "Double-clicking the canvas after drawing a basic oval.", "isCorrect": false },
        { "text": "Using the Move Tool (M) to snap it to a perfect circle.", "isCorrect": false },
        { "text": "Selecting a circular brush preset.", "isCorrect": false }
      ]
    },
    {
      "question": "A fully colored bird is on 'Bird Layer' and the branch is on 'Branch Layer'. You want to change only the color of the branch. Which layer must be **active** for the Fill Tool to correctly modify only the branch?",
      "options": [
        { "text": "'Bird Layer'", "isCorrect": false },
        { "text": "A new transparent layer created above 'Bird Layer'.", "isCorrect": false },
        { "text": "'Branch Layer'", "isCorrect": true },
        { "text": "The 'Background' layer.", "isCorrect": false }
      ]
    },
    {
      "question": "You need to draw a freehand sketch of a twisted tree branch with a lot of organic curves and varying line thickness to suggest texture. Which is the most appropriate primary tool to select in Krita?",
      "options": [
        { "text": "Bezier Curve Tool (for precise vector outline)", "isCorrect": false },
        { "text": "Line Tool (for straight-line segments)", "isCorrect": false },
        { "text": "Brush Tool (B) (for versatile freehand drawing)", "isCorrect": true },
        { "text": "Ellipse Tool (for geometric shapes)", "isCorrect": false }
      ]
    },
    {
      "question": "A student drew an oval for the body but needs to slightly stretch and rotate it to align with the branch angle. Which tool is used to manipulate its shape and orientation with control handles?",
      "options": [
        { "text": "The Move Tool (M)", "isCorrect": false },
        { "text": "The Bezier Curve Tool", "isCorrect": false },
        { "text": "The Transform a layer or a selection tool (Ctrl+T)", "isCorrect": true },
        { "text": "The Eraser Tool (E)", "isCorrect": false }
      ]
    },
    {
      "question": "You want the background sky to transition smoothly from a deep yellow at the bottom to a light orange at the top. Which tool is best suited for achieving this seamless color blend effect?",
      "options": [
        { "text": "Fill Tool (F)", "isCorrect": false },
        { "text": "Brush Tool (B) with a large size", "isCorrect": false },
        { "text": "Gradient Tool", "isCorrect": true },
        { "text": "Eraser Tool (E)", "isCorrect": false }
      ]
    },
    {
      "question": "After creating a leaf stamp brush, you want to stamp the next leaf at a different angle without opening the main brush editor. How can you quickly change the angle property?",
      "options": [
        { "text": "By holding the Shift key while stamping.", "isCorrect": false },
        { "text": "By scrolling the mouse wheel.", "isCorrect": false },
        { "text": "By right-clicking to open the Pop-up Palette and adjusting the Angle.", "isCorrect": true },
        { "text": "By using the Fill Tool (F).", "isCorrect": false }
      ]
    },
    {
      "question": "You completed the drawing but need to save the file so that you can open it later and still edit all the layers independently. Which file format should you choose?",
      "options": [
        { "text": "PNG (.png)", "isCorrect": false },
        { "text": "JPEG (.jpg)", "isCorrect": false },
        { "text": "Krita Project File (.kra)", "isCorrect": true },
        { "text": "Vector Graphics File (.svg)", "isCorrect": false }
      ]
    },
    {
      "question": "A student is drawing the bird's legs, but the 'Branch' layer is currently hidden, preventing proper alignment. What is the quickest way to make the 'Branch' layer visible?",
      "options": [
        { "text": "Move the 'Branch' layer to the top of the stack.", "isCorrect": false },
        { "text": "Toggle the visibility icon (eye) next to the 'Branch' layer name.", "isCorrect": true },
        { "text": "Reduce the opacity of the 'Legs' layer.", "isCorrect": false },
        { "text": "Right-click the layer and select 'Show All'.", "isCorrect": false }
      ]
    },
    {
      "question": "A line drawn with the Bezier Curve Tool has stray pixels at the end. Which tool provides the most direct way to manually remove that small piece of the line?",
      "options": [
        { "text": "The Move Tool (M)", "isCorrect": false },
        { "text": "The Eraser Tool (E)", "isCorrect": true },
        { "text": "The Fill Tool (F)", "isCorrect": false },
        { "text": "The Selection Tool", "isCorrect": false }
      ]
    },
    {
      "question": "You need to add a final, bold outline to the bird using a specific brush setting (size, color, texture). What feature allows you to save this custom brush setup for future use?",
      "options": [
        { "text": "Layer Blending Mode", "isCorrect": false },
        { "text": "Brush Preset", "isCorrect": true },
        { "text": "Layer Group", "isCorrect": false },
        { "text": "Document Template", "isCorrect": false }
      ]
    },
    {
      "question": "You drew a basic oval for the bird's head and now need to see a magnified view to add details to the eye. What is the quickest, most direct way to zoom in on that specific area of the canvas?",
      "options": [
        { "text": "Pressing Ctrl+N to open a new, larger canvas.", "isCorrect": false },
        { "text": "Scrolling the mouse wheel toward the canvas.", "isCorrect": true },
        { "text": "Using the Transform Tool (Ctrl+T) to resize the layer.", "isCorrect": false },
        { "text": "Clicking the 'Reset View' button in the toolbar.", "isCorrect": false }
      ]
    },
    {
      "question": "To draw a geometric pattern of triangles quickly and precisely, which tool should you use?",
      "options": [
        { "text": "Brush Tool (B)", "isCorrect": false },
        { "text": "Fill Tool (F)", "isCorrect": false },
        { "text": "Poly Line Tool", "isCorrect": true },
        { "text": "Gradient Tool", "isCorrect": false }
      ]
    },
    {
      "question": "You are coloring the eye on the 'Eye' layer, but the paint spills over the outline onto the 'Head' layer below it. What is the *correct* action to fix this without affecting the 'Head' layer?",
      "options": [
        { "text": "Use the Eraser Tool (E) on the 'Eye' layer to remove the spill.", "isCorrect": true },
        { "text": "Deleting the entire 'Head' layer.", "isCorrect": false },
        { "text": "Merging the 'Eye' and 'Head' layers together.", "isCorrect": false },
        { "text": "Using the Fill Tool (F) to refill the eye.", "isCorrect": false }
      ]
    },
    {
      "question": "You are drawing a stylized bird with the head, body, and tail on three different layers. You decide the entire bird needs to be moved slightly to the left. What is the best way to move all three parts simultaneously?",
      "options": [
        { "text": "Select each layer individually and move it.", "isCorrect": false },
        { "text": "Merge the three layers into one and then move it.", "isCorrect": false },
        { "text": "Place the three layers into a **Layer Group** and move the group.", "isCorrect": true },
        { "text": "Use the Move Tool (M) on the canvas without selecting any layer.", "isCorrect": false }
      ]
    },
    {
      "question": "After using the Freehand Selection Tool to isolate an area for the bird's wing, which tool should you select immediately after to quickly fill that isolated area with a solid color?",
      "options": [
        { "text": "Brush Tool (B)", "isCorrect": false },
        { "text": "Fill Tool (F)", "isCorrect": true },
        { "text": "Gradient Tool", "isCorrect": false },
        { "text": "Move Tool (M)", "isCorrect": false }
      ]
    },
    {
      "question": "A Krita printout for the grid method has a $3 \text{cm} \times 3 \text{cm}$ grid. If the wall grid is $45 \text{cm} \times 45 \text{cm}$, what is the linear scale factor you are using to transfer the image?",
      "options": [
        { "text": "1:5 (Print:Wall)", "isCorrect": false },
        { "text": "1:10 (Print:Wall)", "isCorrect": false },
        { "text": "1:15 (Print:Wall)", "isCorrect": true },
        { "text": "1:25 (Print:Wall)", "isCorrect": false }
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
