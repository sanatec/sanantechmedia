document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "What does ISP stand for?",
    "options": [
      {"text": "Internet Service Protocol", "isCorrect": false},
      {"text": "Internal System Provider", "isCorrect": false},
      {"text": "Internet Service Provider", "isCorrect": true},
      {"text": "Internet System Protocol", "isCorrect": false}
    ]
  },
  {
    "question": "Which of the following is listed as an Internet Service Provider in India?",
    "options": [
      {"text": "DHCP", "isCorrect": false},
      {"text": "Airtel", "isCorrect": true},
      {"text": "HTTP", "isCorrect": false},
      {"text": "UTP", "isCorrect": false}
    ]
  },
  {
    "question": "Which type of cable uses thin glass fibers to transmit data as light signals?",
    "options": [
      {"text": "UTP Cable", "isCorrect": false},
      {"text": "Copper Cable", "isCorrect": false},
      {"text": "RJ45 Cable", "isCorrect": false},
      {"text": "Optical Fibre Cable", "isCorrect": true}
    ]
  },
  {
    "question": "Which cable type uses copper wires and transmits data as analogue signals over longer distances?",
    "options": [
      {"text": "Optical Fibre Cables", "isCorrect": false},
      {"text": "Plastic-Coated Copper Cables", "isCorrect": true},
      {"text": "UTP Cables", "isCorrect": false},
      {"text": "Media Converters", "isCorrect": false}
    ]
  },
  {
    "question": "What device is used to convert signals between different forms, such as digital to analogue or optical?",
    "options": [
      {"text": "Media Converter", "isCorrect": true},
      {"text": "Switch", "isCorrect": false},
      {"text": "Hub", "isCorrect": false},
      {"text": "RJ45", "isCorrect": false}
    ]
  },
  {
    "question": "What is a system called when computers are connected to share resources like information and hardware?",
    "options": [
      {"text": "An Internet Service Provider", "isCorrect": false},
      {"text": "A Computer Network", "isCorrect": true},
      {"text": "A Media Converter", "isCorrect": false},
      {"text": "A Protocol", "isCorrect": false}
    ]
  },
  {
    "question": "What does UTP stand for?",
    "options": [
      {"text": "Unified Transfer Protocol", "isCorrect": false},
      {"text": "Universal Twisted Pair", "isCorrect": false},
      {"text": "Unshielded Twisted Pair", "isCorrect": true},
      {"text": "Unique Transmission Port", "isCorrect": false}
    ]
  },
  {
    "question": "What is the technical name for the connector jack used to attach network cables to a computer?",
    "options": [
      {"text": "RJ11", "isCorrect": false},
      {"text": "RJ45", "isCorrect": true},
      {"text": "UTP Port", "isCorrect": false},
      {"text": "Media Jack", "isCorrect": false}
    ]
  },
  {
    "question": "What is the common device used to connect all computers in a local network to a single point?",
    "options": [
      {"text": "A Media Converter", "isCorrect": false},
      {"text": "A Hub", "isCorrect": false},
      {"text": "A Modem", "isCorrect": false},
      {"text": "A Switch", "isCorrect": true}
    ]
  },
  {
    "question": "Which network device sends data to *all* connected computers, increasing network traffic?",
    "options": [
      {"text": "Hub", "isCorrect": true},
      {"text": "Switch", "isCorrect": false},
      {"text": "Router", "isCorrect": false},
      {"text": "Media Converter", "isCorrect": false}
    ]
  },
  {
    "question": "Which network device is more efficient because it sends data *only* to the specific device it is meant for?",
    "options": [
      {"text": "Hub", "isCorrect": false},
      {"text": "Switch", "isCorrect": true},
      {"text": "Modem", "isCorrect": false},
      {"text": "Converter", "isCorrect": false}
    ]
  },
  {
    "question": "What is the Internet technically defined as?",
    "options": [
      {"text": "A single computer in a school lab.", "isCorrect": false},
      {"text": "A device that shares a printer.", "isCorrect": false},
      {"text": "A large network that connects computer networks all over the world.", "isCorrect": true},
      {"text": "A wireless signal from a satellite.", "isCorrect": false}
    ]
  },
  {
    "question": "A network confined to a single room or building, like a school lab, is called a...?",
    "options": [
      {"text": "WAN (Wide Area Network)", "isCorrect": false},
      {"text": "PAN (Personal Area Network)", "isCorrect": false},
      {"text": "LAN (Local Area Network)", "isCorrect": true},
      {"text": "MAN (Metropolitan Area Network)", "isCorrect": false}
    ]
  },
  {
    "question": "A large-scale network spanning a country, like those used by banks, is called a...?",
    "options": [
      {"text": "LAN (Local Area Network)", "isCorrect": false},
      {"text": "WAN (Wide Area Network)", "isCorrect": true},
      {"text": "PAN (Personal Area Network)", "isCorrect": false},
      {"text": "VNC (Virtual Network Computing)", "isCorrect": false}
    ]
  },
  {
    "question": "What type of network connects an individual's personal devices like a smartphone and tablet?",
    "options": [
      {"text": "Wide Area Network (WAN)", "isCorrect": false},
      {"text": "Local Area Network (LAN)", "isCorrect": false},
      {"text": "Personal Area Network (PAN)", "isCorrect": true},
      {"text": "Global Area Network (GAN)", "isCorrect": false}
    ]
  },
  {
    "question": "What do wireless networks use for communication instead of cables?",
    "options": [
      {"text": "Light signals", "isCorrect": false},
      {"text": "RF waves (Radio Frequency Waves)", "isCorrect": true},
      {"text": "Digital pulses", "isCorrect": false},
      {"text": "UTP waves", "isCorrect": false}
    ]
  },
  {
    "question": "Which wireless technology has a very short range (about 10 meters) and is used for headphones?",
    "options": [
      {"text": "Wi-Fi", "isCorrect": false},
      {"text": "Bluetooth", "isCorrect": true},
      {"text": "WAN", "isCorrect": false},
      {"text": "Satellite", "isCorrect": false}
    ]
  },
  {
    "question": "Which wireless technology typically covers a house or small office (up to 150 meters) and is used for laptops?",
    "options": [
      {"text": "Bluetooth", "isCorrect": false},
      {"text": "Wi-Fi", "isCorrect": true},
      {"text": "PAN", "isCorrect": false},
      {"text": "NFC", "isCorrect": false}
    ]
  },
  {
    "question": "What is the unique address assigned by the manufacturer to every network device called?",
    "options": [
      {"text": "IP Address", "isCorrect": false},
      {"text": "MAC Address", "isCorrect": true},
      {"text": "URL Address", "isCorrect": false},
      {"text": "HTTP Address", "isCorrect": false}
    ]
  },
  {
    "question": "The hexadecimal number system uses 16 symbols, which are...?",
    "options": [
      {"text": "0-9 and A-F", "isCorrect": true},
      {"text": "0-7 and A-H", "isCorrect": false},
      {"text": "0-9", "isCorrect": false},
      {"text": "0 and 1", "isCorrect": false}
    ]
  },
  {
    "question": "A MAC address is a hexadecimal number usually separated into how many pairs?",
    "options": [
      {"text": "Four pairs", "isCorrect": false},
      {"text": "Eight pairs", "isCorrect": false},
      {"text": "Six pairs", "isCorrect": true},
      {"text": "Two pairs", "isCorrect": false}
    ]
  },
  {
    "question": "On a computer, the MAC Address can be found in network settings listed as the...?",
    "options": [
      {"text": "IP Address", "isCorrect": false},
      {"text": "Hardware Address", "isCorrect": true},
      {"text": "Network ID", "isCorrect": false},
      {"text": "Protocol Number", "isCorrect": false}
    ]
  },
  {
    "question": "What is the address given to each device in a network, like 192.168.1.1, so they can identify each other?",
    "options": [
      {"text": "MAC Address", "isCorrect": false},
      {"text": "HTTP Address", "isCorrect": false},
      {"text": "Hardware Address", "isCorrect": false},
      {"text": "IP Address", "isCorrect": true}
    ]
  },
  {
    "question": "In the commonly used IPv4 system, what is the valid range for each of the four numbers?",
    "options": [
      {"text": "0 to 255", "isCorrect": true},
      {"text": "1 to 100", "isCorrect": false},
      {"text": "0 to 9", "isCorrect": false},
      {"text": "1 to 1000", "isCorrect": false}
    ]
  },
  {
    "question": "Which of the following is a valid IPv4 address?",
    "options": [
      {"text": "192.168.1.257", "isCorrect": false},
      {"text": "192.168.256.1", "isCorrect": false},
      {"text": "192.168.1.254", "isCorrect": true},
      {"text": "192.168.1", "isCorrect": false}
    ]
  },
  {
    "question": "What is the newer IP version that uses hexadecimal numbers to support a significantly larger number of devices?",
    "options": [
      {"text": "IPv4", "isCorrect": false},
      {"text": "IPv6", "isCorrect": true},
      {"text": "DHCP", "isCorrect": false},
      {"text": "MACv6", "isCorrect": false}
    ]
  },
  {
    "question": "What are the common guidelines or rules called that allow different operating systems to communicate?",
    "options": [
      {"text": "Switches", "isCorrect": false},
      {"text": "Protocols", "isCorrect": true},
      {"text": "MAC Addresses", "isCorrect": false},
      {"text": "ISPs", "isCorrect": false}
    ]
  },
  {
    "question": "Which protocol automatically assigns IP addresses to devices when they join a network?",
    "options": [
      {"text": "HTTP", "isCorrect": false},
      {"text": "FTP", "isCorrect": false},
      {"text": "DHCP", "isCorrect": true},
      {"text": "SSH", "isCorrect": false}
    ]
  },
  {
    "question": "Which protocol is used by web browsers to transfer web pages?",
    "options": [
      {"text": "FTP (File Transfer Protocol)", "isCorrect": false},
      {"text": "SSH (Secure Shell) Protocol", "isCorrect": false},
      {"text": "HTTP (Hyper Text Transfer Protocol)", "isCorrect": true},
      {"text": "TCP/IP (Transmission Control Protocol)", "isCorrect": false}
    ]
  },
  {
    "question": "Which protocol is a standard used to transfer files between computers?",
    "options": [
      {"text": "HTTP", "isCorrect": false},
      {"text": "FTP", "isCorrect": true},
      {"text": "DHCP", "isCorrect": false},
      {"text": "SSH", "isCorrect": false}
    ]
  },
  {
    "question": "Which protocol is used to securely control another computer from a distance (Remote Login)?",
    "options": [
      {"text": "SSH", "isCorrect": true},
      {"text": "HTTP", "isCorrect": false},
      {"text": "FTP", "isCorrect": false},
      {"text": "DHCP", "isCorrect": false}
    ]
  },
  {
    "question": "What applet on the top panel can be used to find the IP address of a connected network?",
    "options": [
      {"text": "File Manager Applet", "isCorrect": false},
      {"text": "Bluetooth Applet", "isCorrect": false},
      {"text": "Network Manager Applet (nm-applet)", "isCorrect": true},
      {"text": "Settings Applet", "isCorrect": false}
    ]
  },
  {
    "question": "A fixed, manually assigned IP address is known as a...?",
    "options": [
      {"text": "Dynamic IP Address", "isCorrect": false},
      {"text": "Static IP Address", "isCorrect": true},
      {"text": "MAC Address", "isCorrect": false},
      {"text": "Hardware Address", "isCorrect": false}
    ]
  },
  {
    "question": "To manually assign an IP address, what 'IPv4 Method' must be selected?",
    "options": [
      {"text": "Automatic (DHCP)", "isCorrect": false},
      {"text": "Link-Local Only", "isCorrect": false},
      {"text": "Manual", "isCorrect": true},
      {"text": "Disable", "isCorrect": false}
    ]
  },
  {
    "question": "When setting a static IP, what is the typical value for the Netmask?",
    "options": [
      {"text": "192.168.1.1", "isCorrect": false},
      {"text": "255.255.255.0", "isCorrect": true},
      {"text": "0.0.0.0", "isCorrect": false},
      {"text": "8.8.8.8", "isCorrect": false}
    ]
  },
  {
    "question": "When setting a static IP like 192.168.1.204, what is the typical address for the Gateway?",
    "options": [
      {"text": "192.168.1.1", "isCorrect": true},
      {"text": "192.168.1.255", "isCorrect": false},
      {"text": "255.255.255.0", "isCorrect": false},
      {"text": "192.168.1.204", "isCorrect": false}
    ]
  },
  {
    "question": "What terminal command is used to check if the network connection to another computer is working?",
    "options": [
      {"text": "check", "isCorrect": false},
      {"text": "connect", "isCorrect": false},
      {"text": "ip", "isCorrect": false},
      {"text": "ping", "isCorrect": true}
    ]
  },
  {
    "question": "To connect to another computer for file transfer using SSH, what format is used in 'Connect to Server'?",
    "options": [
      {"text": "ssh://192.168.1.15", "isCorrect": true},
      {"text": "ftp://192.168.1.15", "isCorrect": false},
      {"text": "http://192.168.1.15", "isCorrect": false},
      {"text": "file://192.168.1.15", "isCorrect": false}
    ]
  },
  {
    "question": "What application is used to view another computer's screen remotely?",
    "options": [
      {"text": "Settings", "isCorrect": false},
      {"text": "Remmina", "isCorrect": true},
      {"text": "Terminal", "isCorrect": false},
      {"text": "Files", "isCorrect": false}
    ]
  },
  {
    "question": "What protocol is used by the Remmina application for screen sharing?",
    "options": [
      {"text": "SSH", "isCorrect": false},
      {"text": "FTP", "isCorrect": false},
      {"text": "VNC", "isCorrect": true},
      {"text": "HTTP", "isCorrect": false}
    ]
  },
  {
    "question": "To share your screen, you must enable 'Remote Desktop' and what other option?",
    "options": [
      {"text": "Airplane Mode", "isCorrect": false},
      {"text": "Automatic (DHCP)", "isCorrect": false},
      {"text": "Enable Legacy VNC Protocol", "isCorrect": true},
      {"text": "File Transfer Protocol", "isCorrect": false}
    ]
  },
  {
    "question": "What are the high-performance computers that store data and provide services on the internet called?",
    "options": [
      {"text": "Servers", "isCorrect": true},
      {"text": "Clients", "isCorrect": false},
      {"text": "Switches", "isCorrect": false},
      {"text": "Laptops", "isCorrect": false}
    ]
  },
  {
    "question": "What is an easy-to-remember name like 'cusat.ac.in' that is used instead of an IP address?",
    "options": [
      {"text": "A MAC Address", "isCorrect": false},
      {"text": "A Domain Name", "isCorrect": true},
      {"text": "An IP Protocol", "isCorrect": false},
      {"text": "A Server Name", "isCorrect": false}
    ]
  },
  {
    "question": "What does IoT stand for?",
    "options": [
      {"text": "Internet of Things", "isCorrect": true},
      {"text": "Internet on Televisions", "isCorrect": false},
      {"text": "Input/Output Terminal", "isCorrect": false},
      {"text": "International Open Technology", "isCorrect": false}
    ]
  },
  {
    "question": "Smart devices (like Smart TVs) can connect to the internet because they include a...?",
    "options": [
      {"text": "Media Converter", "isCorrect": false},
      {"text": "Microprocessor", "isCorrect": true},
      {"text": "UTP Cable", "isCorrect": false},
      {"text": "Hub", "isCorrect": false}
    ]
  },
  {
    "question": "Which of the following is an example of an IoT device?",
    "options": [
      {"text": "Smart television", "isCorrect": true},
      {"text": "UTP Cable", "isCorrect": false},
      {"text": "A Hub", "isCorrect": false},
      {"text": "A standard printer", "isCorrect": false}
    ]
  },
  {
    "question": "Which of the following is *not* an example of an IoT device?",
    "options": [
      {"text": "Smart Television", "isCorrect": false},
      {"text": "Voice Assistant Device", "isCorrect": false},
      {"text": "USB Cable", "isCorrect": true},
      {"text": "Smart Lock", "isCorrect": false}
    ]
  },
  {
    "question": "Which device is rarely used nowadays because switches are more efficient?",
    "options": [
      {"text": "Hub", "isCorrect": true},
      {"text": "Router", "isCorrect": false},
      {"text": "Media Converter", "isCorrect": false},
      {"text": "Switch", "isCorrect": false}
    ]
  },
  {
    "question": "In a home LAN, the IP addresses of different devices (like 192.168.1.15) usually differ only in...?",
    "options": [
      {"text": "The first two numbers", "isCorrect": false},
      {"text": "The last one or two numbers", "isCorrect": true},
      {"text": "All four numbers", "isCorrect": false},
      {"text": "They are all identical", "isCorrect": false}
    ]
  },
  {
    "question": "What is the main benefit of sharing a printer on a computer network?",
    "options": [
      {"text": "It makes the printer print faster.", "isCorrect": false},
      {"text": "It allows multiple computers to use the single printer.", "isCorrect": true},
      {"text": "It connects the printer to the internet.", "isCorrect": false},
      {"text": "It gives the printer a MAC address.", "isCorrect": false}
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
