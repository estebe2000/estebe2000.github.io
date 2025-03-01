/**
 * Script pour charger les phrases du mode hacker à partir du fichier JSON
 * et initialiser la détection des phrases secrètes
 */

// Variable globale pour stocker les phrases
window.hackerPhrases = [];

// Fonction pour charger les phrases et initialiser la détection
function loadHackerPhrases() {
    fetch('data/hacker-phrases.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur lors du chargement des phrases');
            }
            return response.json();
        })
        .then(data => {
            window.hackerPhrases = data.phrases;
            console.log('Phrases du mode hacker chargées avec succès:', window.hackerPhrases.length);
            
            // Initialiser la détection des phrases secrètes une fois les phrases chargées
            initSecretPhraseDetection();
        })
        .catch(error => {
            console.error('Erreur lors du chargement des phrases:', error);
            // Phrases par défaut en cas d'erreur
            window.hackerPhrases = [
                "je suis un hacker",
                "mode matrix",
                "hack the planet",
                "mr robot",
                "hello world",
                "neo",
                "morpheus",
                "trinity",
                "42",
                "terminal"
            ];
            
            // Initialiser la détection des phrases secrètes même en cas d'erreur
            initSecretPhraseDetection();
        });
}

/**
 * Initialise la détection des phrases secrètes
 */
function initSecretPhraseDetection() {
    console.log('Initialisation de la détection des phrases secrètes...');
    
    // Utiliser les phrases chargées depuis le fichier JSON
    const secretPhrases = window.hackerPhrases;
    
    // Add event listeners to all input fields and textareas
    const inputElements = document.querySelectorAll('input[type="text"], input[type="search"], textarea');
    inputElements.forEach(input => {
        input.addEventListener('input', checkForSecretPhrase);
    });
    
    // Add event listener to the quote input field on the solution page
    const quoteInput = document.getElementById('quote-input');
    if (quoteInput) {
        quoteInput.addEventListener('input', checkForSecretPhrase);
    }
    
    /**
     * Checks if the input value contains a secret phrase
     * @param {Event} event - The input event
     */
    function checkForSecretPhrase(event) {
        const inputValue = event.target.value.toLowerCase().trim();
        
        // Check if the input value contains a secret phrase
        for (const phrase of secretPhrases) {
            if (inputValue.includes(phrase.toLowerCase())) {
                console.log(`Secret phrase detected: ${phrase}`);
                
                // Toggle the hacker theme
                toggleHackerTheme();
                
                // Clear the input field
                event.target.value = '';
                
                // Break out of the loop
                break;
            }
        }
    }
    
    /**
     * Toggles the hacker theme
     */
    function toggleHackerTheme() {
        const root = document.documentElement;
        const isHackerTheme = root.classList.contains('hacker-theme');
        
        if (!isHackerTheme) {
            // Enable hacker theme
            root.classList.add('hacker-theme');
            localStorage.setItem('hackerTheme', 'enabled');
            
            // Create theme toggle button
            if (typeof createThemeToggle === 'function') {
                createThemeToggle();
            }
            
            // Create bug elements
            if (typeof createBugElements === 'function') {
                createBugElements();
            }
            
            // Add glitch effect to headings
            document.querySelectorAll('h1, h2, h3').forEach(heading => {
                heading.classList.add('glitch');
            });
            
            // Add terminal text effect to some paragraphs
            const paragraphs = document.querySelectorAll('p');
            for (let i = 0; i < paragraphs.length; i += 3) { // Only add to every third paragraph
                if (paragraphs[i]) {
                    paragraphs[i].classList.add('terminal-text');
                }
            }
            
            // Play glitch sound
            if (typeof playSound === 'function') {
                playSound('glitch');
            } else {
                console.log('Playing glitch sound effect');
            }
            
            // Add random character animation to some text
            addRandomCharAnimation();
            
            // Show a message
            showHackerMessage();
            
            // Initialize hacker effects if available
            if (typeof initHackerEffects === 'function') {
                initHackerEffects();
            }
        }
    }
    
    /**
     * Shows a message when the hacker theme is activated
     */
    function showHackerMessage() {
        // Create message element
        const message = document.createElement('div');
        message.className = 'hacker-message';
        message.innerHTML = `
            <div class="hacker-message-content">
                <h3>MODE HACKEUR ACTIVÉ</h3>
                <p>Vous avez découvert un easter egg ! Le mode hackeur est maintenant activé.</p>
                <p>Explorez le site pour découvrir d'autres surprises...</p>
                <div class="terminal-commands">
                    <p class="terminal-tip">Astuce : Utilisez <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>T</kbd> pour ouvrir le terminal hackeur</p>
                    <button id="open-terminal" class="btn-secondary">Ouvrir le Terminal</button>
                </div>
                <button id="close-hacker-message" class="btn-primary">Fermer</button>
            </div>
        `;
        
        // Add styles
        const style = document.createElement('style');
        style.textContent = `
            .hacker-message {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.8);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 9999;
                animation: glitch 0.3s infinite;
            }
            
            .hacker-message-content {
                background-color: #111;
                border: 1px solid #00ff00;
                border-radius: 5px;
                padding: 2rem;
                max-width: 500px;
                text-align: center;
                color: #00ff00;
                font-family: 'Courier New', monospace;
                box-shadow: 0 0 20px rgba(0, 255, 0, 0.5);
            }
            
            .hacker-message h3 {
                margin-top: 0;
                color: #00ff00;
                text-shadow: 0 0 5px #00ff00;
            }
            
            .hacker-message button {
                margin-top: 1.5rem;
                background-color: #111;
                color: #00ff00;
                border: 1px solid #00ff00;
                padding: 0.5rem 1rem;
                cursor: pointer;
                font-family: 'Courier New', monospace;
                transition: all 0.3s;
            }
            
            .hacker-message button:hover {
                background-color: #00ff00;
                color: #111;
            }
        `;
        
        document.head.appendChild(style);
        document.body.appendChild(message);
        
        // Add event listener to close button
        const closeButton = document.getElementById('close-hacker-message');
        if (closeButton) {
            closeButton.addEventListener('click', () => {
                message.remove();
            });
        }
        
        // Add event listener to open terminal button
        const openTerminalButton = document.getElementById('open-terminal');
        if (openTerminalButton) {
            openTerminalButton.addEventListener('click', () => {
                message.remove();
                
                // Ensure the terminal is initialized
                if (typeof initHiddenTerminal === 'function') {
                    initHiddenTerminal();
                }
                
                // Open the terminal
                setTimeout(() => {
                    const terminal = document.querySelector('.hacker-terminal');
                    if (terminal) {
                        terminal.classList.add('active');
                        const input = terminal.querySelector('#terminal-input');
                        if (input) {
                            input.focus();
                        }
                        if (typeof playSound === 'function') {
                            playSound('terminal');
                        }
                    } else {
                        console.error('Terminal not found.');
                    }
                }, 100);
            });
        }
    }
    
    /**
     * Adds random character animation to some text elements
     */
    function addRandomCharAnimation() {
        // Get random text elements
        const textElements = document.querySelectorAll('p, li, h3, h4');
        const randomElements = Array.from(textElements).sort(() => 0.5 - Math.random()).slice(0, 5);
        
        randomElements.forEach(element => {
            element.classList.add('random-chars');
            element.setAttribute('data-text', element.textContent);
        });
    }
}

// Charger les phrases au chargement de la page
document.addEventListener('DOMContentLoaded', loadHackerPhrases);
