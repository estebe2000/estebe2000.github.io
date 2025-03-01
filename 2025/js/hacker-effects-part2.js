/**
 * Initialise les effets sonores
 */
function initSoundEffects() {
    // Créer les éléments audio pour les différents sons
    const sounds = {
        'glitch': 'sounds/glitch.mp3',
        'click': 'sounds/click.mp3',
        'type': 'sounds/type.mp3',
        'decode': 'sounds/decode.mp3',
        'terminal': 'sounds/terminal.mp3',
        'success': 'sounds/success.mp3',
        'error': 'sounds/error.mp3',
        'ambient': 'sounds/ambient.mp3'
    };
    
    // Créer un conteneur pour les sons
    const soundContainer = document.createElement('div');
    soundContainer.className = 'sound-container';
    soundContainer.style.display = 'none';
    document.body.appendChild(soundContainer);
    
    // Créer les éléments audio
    for (const [name, src] of Object.entries(sounds)) {
        const audio = document.createElement('audio');
        audio.id = `sound-${name}`;
        audio.preload = 'auto';
        
        // Pour l'ambiance sonore, mettre en boucle et à faible volume
        if (name === 'ambient') {
            audio.loop = true;
            audio.volume = 0.1;
        } else {
            audio.volume = 0.3;
        }
        
        // Créer une source pour chaque format
        const source = document.createElement('source');
        source.src = src;
        source.type = 'audio/mpeg';
        
        audio.appendChild(source);
        soundContainer.appendChild(audio);
    }
    
    // Fonction pour jouer un son
    window.playSound = (name) => {
        const audio = document.getElementById(`sound-${name}`);
        if (audio) {
            // Réinitialiser le son s'il est déjà en cours de lecture
            audio.pause();
            audio.currentTime = 0;
            
            // Jouer le son
            audio.play().catch(error => {
                console.log(`Erreur lors de la lecture du son ${name}:`, error);
            });
        }
    };
    
    // Jouer l'ambiance sonore
    const ambientSound = document.getElementById('sound-ambient');
    if (ambientSound) {
        ambientSound.play().catch(error => {
            console.log('Erreur lors de la lecture de l\'ambiance sonore:', error);
        });
    }
    
    // Ajouter des effets sonores aux interactions
    document.addEventListener('click', () => {
        playSound('click');
    });
    
    document.addEventListener('keydown', () => {
        playSound('type');
    });
}

/**
 * Initialise le terminal caché
 */
function initHiddenTerminal() {
    // Vérifier si le terminal existe déjà
    if (document.querySelector('.hacker-terminal')) {
        return;
    }
    
    // Créer le terminal
    const terminal = document.createElement('div');
    terminal.className = 'hacker-terminal';
    terminal.innerHTML = `
        <div class="terminal-header">
            <div class="terminal-title">Terminal Hackeur</div>
            <div class="terminal-controls">
                <span class="terminal-minimize">_</span>
                <span class="terminal-maximize">□</span>
                <span class="terminal-close">×</span>
            </div>
        </div>
        <div class="terminal-content">
            <div class="terminal-output" id="terminal-output">
                <p>Bienvenue dans le terminal hackeur du Lycée Jean Prévost.</p>
                <p>Tapez 'help' pour voir les commandes disponibles.</p>
            </div>
            <div class="terminal-input-line">
                <span class="terminal-prompt">hackeur@lycee-jp:~$</span>
                <input type="text" id="terminal-input" autocomplete="off" spellcheck="false">
            </div>
        </div>
    `;
    
    // Ajouter les styles CSS pour le terminal
    const style = document.createElement('style');
    style.textContent = `
        .hacker-terminal {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(0);
            width: 80%;
            max-width: 800px;
            height: 60%;
            max-height: 500px;
            background-color: rgba(0, 0, 0, 0.9);
            border: 1px solid #00ff00;
            border-radius: 5px;
            z-index: 10000;
            display: flex;
            flex-direction: column;
            box-shadow: 0 0 20px rgba(0, 255, 0, 0.5);
            transition: transform 0.3s ease-out;
            font-family: 'Courier New', monospace;
        }
        
        .hacker-terminal.active {
            transform: translate(-50%, -50%) scale(1);
        }
        
        .terminal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 5px 10px;
            background-color: #111;
            border-bottom: 1px solid #00ff00;
        }
        
        .terminal-title {
            color: #00ff00;
            font-weight: bold;
        }
        
        .terminal-controls {
            display: flex;
            gap: 10px;
        }
        
        .terminal-controls span {
            cursor: pointer;
            color: #00ff00;
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
        }
        
        .terminal-controls span:hover {
            background-color: rgba(0, 255, 0, 0.2);
        }
        
        .terminal-content {
            flex: 1;
            display: flex;
            flex-direction: column;
            padding: 10px;
            overflow: hidden;
        }
        
        .terminal-output {
            flex: 1;
            overflow-y: auto;
            margin-bottom: 10px;
            color: #00ff00;
        }
        
        .terminal-output p {
            margin: 5px 0;
            line-height: 1.3;
        }
        
        .terminal-input-line {
            display: flex;
            align-items: center;
        }
        
        .terminal-prompt {
            color: #00ff00;
            margin-right: 10px;
        }
        
        #terminal-input {
            flex: 1;
            background-color: transparent;
            border: none;
            color: #00ff00;
            font-family: 'Courier New', monospace;
            font-size: 16px;
            outline: none;
        }
        
        .terminal-output .error {
            color: #ff0000;
        }
        
        .terminal-output .success {
            color: #00ff00;
            font-weight: bold;
        }
        
        .terminal-output .info {
            color: #0088ff;
        }
    `;
    document.head.appendChild(style);
    
    // Ajouter le terminal au document
    document.body.appendChild(terminal);
    
    // Gérer l'ouverture et la fermeture du terminal
    const closeButton = terminal.querySelector('.terminal-close');
    closeButton.addEventListener('click', () => {
        terminal.classList.remove('active');
        playSound('terminal');
    });
    
    // Charger le script WarGames
    loadScript('js/wargames.js');
    
    // Gérer les commandes du terminal
    const input = terminal.querySelector('#terminal-input');
    const output = terminal.querySelector('#terminal-output');
    
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const command = input.value.trim();
            
            // Ajouter la commande à l'historique
            const commandLine = document.createElement('p');
            commandLine.innerHTML = `<span class="terminal-prompt">hackeur@lycee-jp:~$</span> ${command}`;
            output.appendChild(commandLine);
            
            // Traiter la commande
            processCommand(command, output);
            
            // Effacer l'entrée
            input.value = '';
            
            // Faire défiler vers le bas
            output.scrollTop = output.scrollHeight;
            
            // Jouer un son
            playSound('terminal');
        }
    });
}

/**
 * Traite les commandes du terminal
 * @param {string} command - La commande à traiter
 * @param {HTMLElement} output - L'élément de sortie du terminal
 */
function processCommand(command, output) {
    // Vérifier si c'est une commande WarGames
    if (window.warGames && window.warGames.processWarGamesCommand && window.warGames.processWarGamesCommand(command, output)) {
        return;
    }
    
    const commands = {
        'help': () => {
            const helpText = document.createElement('p');
            helpText.innerHTML = `
                Commandes disponibles :<br>
                <span class="info">help</span> - Affiche cette aide<br>
                <span class="info">clear</span> - Efface l'écran<br>
                <span class="info">ls</span> - Liste les fichiers<br>
                <span class="info">date</span> - Affiche la date et l'heure<br>
                <span class="info">whoami</span> - Affiche l'utilisateur actuel<br>
                <span class="info">echo [texte]</span> - Affiche le texte<br>
                <span class="info">binary</span> - Lance le jeu de calcul binaire<br>
                <span class="info">matrix</span> - Déclenche l'effet Matrix sur la page<br>
                <span class="info">glitch</span> - Déclenche l'effet de distorsion<br>
                <span class="info">clue</span> - Affiche un indice caché<br>
                <span class="info">wargames</span> - Lance le jeu WarGames<br>
                <span class="info">about</span> - À propos du terminal<br>
                <span class="info">exit</span> - Ferme le terminal
            `;
            output.appendChild(helpText);
        },
        'clear': () => {
            output.innerHTML = '';
        },
        'binary': () => {
            const binaryText = document.createElement('p');
            binaryText.innerHTML = 'Lancement du jeu de calcul binaire...';
            output.appendChild(binaryText);
            
            // Fermer le terminal
            setTimeout(() => {
                const terminal = document.querySelector('.hacker-terminal');
                if (terminal) {
                    terminal.classList.remove('active');
                }
                
                // Lancer le jeu
                setTimeout(() => {
                    if (typeof launchBinaryGame === 'function') {
                        launchBinaryGame();
                    } else {
                        console.error('Fonction launchBinaryGame non trouvée');
                        alert('Erreur : Le jeu binaire n\'est pas disponible.');
                    }
                }, 500);
            }, 1000);
        },
        'matrix': () => {
            const matrixText = document.createElement('p');
            matrixText.innerHTML = 'Déclenchement de l\'effet Matrix...';
            output.appendChild(matrixText);
            
            // Déclencher l'effet sur tous les textes
            const textElements = document.querySelectorAll('h1, h2, h3, p');
            textElements.forEach(element => {
                if (!element.classList.contains('decoding')) {
                    element.setAttribute('data-original-text', element.textContent);
                    decodeMatrixText(element);
                }
            });
        },
        'glitch': () => {
            const glitchText = document.createElement('p');
            glitchText.innerHTML = 'Déclenchement de l\'effet de distorsion...';
            output.appendChild(glitchText);
            
            // Déclencher l'effet de distorsion
            if (typeof triggerDistortion === 'function') {
                triggerDistortion();
            }
        },
        'clue': () => {
            const clueText = document.createElement('p');
            clueText.className = 'success';
            
            // Sélectionner un indice aléatoire
            const clues = [
                "Indice : Cherchez les QR codes dans les coins des salles de classe.",
                "Indice : La citation complète contient le mot 'liberté'.",
                "Indice : Jean Prévost utilisait le pseudonyme 'Capitaine Goderville'.",
                "Indice : Le dernier mini-jeu est lié à la musique classique.",
                "Indice : Essayez de cliquer sur le portrait de Jean Prévost 3 fois."
            ];
            
            const randomClue = clues[Math.floor(Math.random() * clues.length)];
            clueText.innerHTML = randomClue;
            output.appendChild(clueText);
            
            // Sauvegarder l'indice dans localStorage
            const revealedClues = JSON.parse(localStorage.getItem('revealedClues') || '[]');
            if (!revealedClues.includes(randomClue)) {
                revealedClues.push(randomClue);
                localStorage.setItem('revealedClues', JSON.stringify(revealedClues));
            }
        },
        'about': () => {
            const aboutText = document.createElement('p');
            aboutText.innerHTML = `
                Terminal Hackeur v1.0<br>
                Développé pour la Chasse au Trésor du Lycée Jean Prévost<br>
                <span class="info">© 2025 - Tous droits réservés</span>
            `;
            output.appendChild(aboutText);
        },
        'exit': () => {
            const terminal = document.querySelector('.hacker-terminal');
            if (terminal) {
                terminal.classList.remove('active');
            }
        },
        'ls': () => {
            const lsText = document.createElement('p');
            lsText.innerHTML = `
                <span class="success">index.html</span><br>
                <span class="success">visite.html</span><br>
                <span class="success">mini-jeux.html</span><br>
                <span class="success">solution.html</span><br>
                <span class="success">final.html</span><br>
                <span class="success">credits.html</span><br>
                <span class="success">ressources.html</span><br>
                <span class="success">archives.html</span><br>
                <span class="success">css/</span><br>
                <span class="success">js/</span><br>
                <span class="success">images/</span><br>
                <span class="success">data/</span>
            `;
            output.appendChild(lsText);
        },
        'date': () => {
            const dateText = document.createElement('p');
            dateText.textContent = new Date().toLocaleString();
            output.appendChild(dateText);
        },
        'whoami': () => {
            const whoamiText = document.createElement('p');
            whoamiText.textContent = 'élève@lycee-jean-prevost';
            output.appendChild(whoamiText);
        },
        'echo': (args) => {
            const echoText = document.createElement('p');
            echoText.textContent = args.join(' ');
            output.appendChild(echoText);
        },
        'wargames': () => {
            if (window.warGames && typeof window.warGames.initWarGames === 'function') {
                window.warGames.initWarGames(output);
            } else {
                const errorText = document.createElement('p');
                errorText.className = 'error';
                errorText.textContent = 'Erreur : Le module WarGames n\'est pas chargé.';
                output.appendChild(errorText);
                
                // Essayer de charger le script
                loadScript('js/wargames.js');
                
                // Informer l'utilisateur
                const infoText = document.createElement('p');
                infoText.textContent = 'Tentative de chargement du module WarGames. Veuillez réessayer dans quelques secondes.';
                output.appendChild(infoText);
            }
        }
    };
    
    // Exécuter la commande
    if (command === '') {
        // Ne rien faire si la commande est vide
        return;
    } else if (commands[command]) {
        commands[command]();
    } else {
        // Vérifier si c'est une commande avec des arguments
        const parts = command.split(' ');
        const cmd = parts[0].toLowerCase();
        const args = parts.slice(1);
        
        if (cmd === 'echo' && args.length > 0) {
            commands.echo(args);
        } else {
            const errorText = document.createElement('p');
            errorText.className = 'error';
            errorText.textContent = `Commande non reconnue : ${command}. Tapez 'help' pour voir les commandes disponibles.`;
            output.appendChild(errorText);
        }
    }
}

/**
 * Charge un script JavaScript dynamiquement
 * @param {string} url - L'URL du script à charger
 */
function loadScript(url) {
    // Vérifier si le script est déjà chargé
    const scripts = document.getElementsByTagName('script');
    for (let i = 0; i < scripts.length; i++) {
        if (scripts[i].src.includes(url)) {
            return;
        }
    }
    
    // Créer l'élément script
    const script = document.createElement('script');
    script.src = url;
    script.async = true;
    
    // Ajouter le script au document
    document.head.appendChild(script);
}

/**
 * Initialise les indices cachés
 */
function initHiddenClues() {
    // Récupérer les indices révélés
    const revealedClues = JSON.parse(localStorage.getItem('revealedClues') || '[]');
    
    // Si des indices ont été révélés, les afficher
    if (revealedClues.length > 0) {
        // Créer un conteneur pour les indices
        const cluesContainer = document.createElement('div');
        cluesContainer.className = 'hidden-clues';
        
        // Ajouter les styles CSS pour les indices
        const style = document.createElement('style');
        style.textContent = `
            .hidden-clues {
                position: fixed;
                bottom: 20px;
                right: 20px;
                background-color: rgba(0, 0, 0, 0.8);
                border: 1px solid #00ff00;
                border-radius: 5px;
                padding: 10px;
                max-width: 300px;
                z-index: 9998;
                font-family: 'Courier New', monospace;
                color: #00ff00;
                box-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
            }
            
            .hidden-clues h3 {
                margin-top: 0;
                font-size: 16px;
                border-bottom: 1px solid #00ff00;
                padding-bottom: 5px;
            }
            
            .hidden-clues ul {
                margin: 0;
                padding-left: 20px;
            }
            
            .hidden-clues li {
                margin-bottom: 5px;
                font-size: 14px;
            }
            
            .hidden-clues .close-clues {
                position: absolute;
                top: 5px;
                right: 5px;
                cursor: pointer;
                font-size: 16px;
                color: #00ff00;
            }
            
            .hidden-clues .close-clues:hover {
                color: #ff0000;
            }
            
            .hidden-clues-toggle {
                position: fixed;
                bottom: 20px;
                right: 20px;
                background-color: rgba(0, 0, 0, 0.8);
                border: 1px solid #00ff00;
                border-radius: 50%;
                width: 40px;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                z-index: 9997;
                font-family: 'Courier New', monospace;
                color: #00ff00;
                box-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
                font-size: 20px;
            }
            
            .hidden-clues-toggle:hover {
                background-color: rgba(0, 255, 0, 0.2);
            }
        `;
        document.head.appendChild(style);
        
        // Créer le contenu des indices
        cluesContainer.innerHTML = `
            <span class="close-clues">×</span>
            <h3>Indices Découverts</h3>
            <ul>
                ${revealedClues.map(clue => `<li>${clue}</li>`).join('')}
            </ul>
        `;
        
        // Créer le bouton pour afficher/masquer les indices
        const cluesToggle = document.createElement('div');
        cluesToggle.className = 'hidden-clues-toggle';
        cluesToggle.innerHTML = '?';
        cluesToggle.title = 'Afficher les indices découverts';
        
        // Ajouter les éléments au document
        document.body.appendChild(cluesContainer);
        document.body.appendChild(cluesToggle);
        
        // Masquer les indices par défaut
        cluesContainer.style.display = 'none';
        
        // Gérer l'affichage/masquage des indices
        cluesToggle.addEventListener('click', () => {
            if (cluesContainer.style.display === 'none') {
                cluesContainer.style.display = 'block';
                playSound('success');
            } else {
                cluesContainer.style.display = 'none';
            }
        });
        
        // Gérer la fermeture des indices
        const closeButton = cluesContainer.querySelector('.close-clues');
        closeButton.addEventListener('click', () => {
            cluesContainer.style.display = 'none';
        });
    }
}
