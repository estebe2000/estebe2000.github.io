/**
 * Script de correction pour le terminal hackeur
 * Ce script s'assure que les fonctions nécessaires pour le terminal sont correctement définies
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log('Initialisation du script de correction pour le terminal...');
    
    // Vérifier si la fonction initHiddenTerminal existe
    if (typeof initHiddenTerminal !== 'function') {
        console.log('Fonction initHiddenTerminal non trouvée, création d\'une version de secours...');
        
        // Définir la fonction initHiddenTerminal si elle n'existe pas
        window.initHiddenTerminal = function() {
            console.log('Utilisation de la version de secours de initHiddenTerminal');
            
            // Vérifier si le terminal existe déjà
            if (document.querySelector('.hacker-terminal')) {
                console.log('Terminal déjà existant, pas besoin de le recréer');
                return;
            }
            
            console.log('Création du terminal...');
            
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
                if (typeof playSound === 'function') {
                    playSound('terminal');
                }
            });
            
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
                    if (typeof processCommand === 'function') {
                        processCommand(command, output);
                    } else {
                        // Version complète de processCommand
                        if (command === 'help') {
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
                        } else if (command === 'binary') {
                            const binaryText = document.createElement('p');
                            binaryText.innerHTML = 'Lancement du jeu de calcul binaire...';
                            output.appendChild(binaryText);
                            
                            // Fermer le terminal
                            setTimeout(() => {
                                terminal.classList.remove('active');
                                
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
                        } else if (command === 'matrix') {
                            const matrixText = document.createElement('p');
                            matrixText.innerHTML = 'Déclenchement de l\'effet Matrix...';
                            output.appendChild(matrixText);
                            
                            // Déclencher l'effet sur tous les textes
                            const textElements = document.querySelectorAll('h1, h2, h3, p');
                            textElements.forEach(element => {
                                if (!element.classList.contains('decoding')) {
                                    element.setAttribute('data-original-text', element.textContent);
                                    if (typeof decodeMatrixText === 'function') {
                                        decodeMatrixText(element);
                                    } else {
                                        // Version simplifiée de l'effet Matrix
                                        const originalText = element.textContent;
                                        let iterations = 0;
                                        const maxIterations = 10;
                                        const interval = 50;
                                        
                                        const decode = () => {
                                            if (iterations < maxIterations) {
                                                iterations++;
                                                element.textContent = originalText.split('').map(() => 
                                                    '01'[Math.floor(Math.random() * 2)]
                                                ).join('');
                                                setTimeout(decode, interval);
                                            } else {
                                                element.textContent = originalText;
                                            }
                                        };
                                        
                                        decode();
                                    }
                                }
                            });
                        } else if (command === 'glitch') {
                            const glitchText = document.createElement('p');
                            glitchText.innerHTML = 'Déclenchement de l\'effet de distorsion...';
                            output.appendChild(glitchText);
                            
                            // Effet de distorsion simplifié
                            document.body.style.transition = 'transform 0.1s';
                            document.body.style.transform = 'translateX(10px)';
                            setTimeout(() => {
                                document.body.style.transform = 'translateX(-10px)';
                                setTimeout(() => {
                                    document.body.style.transform = 'translateX(5px)';
                                    setTimeout(() => {
                                        document.body.style.transform = 'translateX(-5px)';
                                        setTimeout(() => {
                                            document.body.style.transform = 'translateX(0)';
                                        }, 50);
                                    }, 50);
                                }, 50);
                            }, 50);
                        } else if (command === 'clue') {
                            const clueText = document.createElement('p');
                            clueText.className = 'success';
                            
                            // Utiliser les indices chargés depuis le fichier JSON
                            const clues = window.hackerClues || [
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
                        } else if (command === 'wargames') {
                            const wargamesText = document.createElement('p');
                            wargamesText.innerHTML = `
                                <span class="success">WARGAMES - SYSTÈME DE DÉFENSE STRATÉGIQUE</span><br>
                                <br>
                                Bienvenue, Professeur. Voulez-vous jouer à un jeu?<br>
                                <br>
                                Tapez <span class="info">list</span> pour voir les jeux disponibles<br>
                                Tapez <span class="info">play [jeu]</span> pour lancer un jeu<br>
                                Tapez <span class="info">joshua</span> pour un easter egg
                            `;
                            output.appendChild(wargamesText);
                        } else if (command === 'list') {
                            const listText = document.createElement('p');
                            listText.innerHTML = `
                                Jeux disponibles :<br>
                                <span class="info">1. Guerre Thermonucléaire Globale</span><br>
                                <span class="info">2. Échecs</span><br>
                                <span class="info">3. Poker</span><br>
                                <span class="info">4. Combat Aérien</span><br>
                                <span class="info">5. Bataille Navale</span>
                            `;
                            output.appendChild(listText);
                        } else if (command.startsWith('play ')) {
                            const game = command.substring(5).trim();
                            const playText = document.createElement('p');
                            
                            if (game.toLowerCase() === 'guerre thermonucléaire globale' || 
                                game === '1' || 
                                game.toLowerCase() === 'guerre thermonucleaire globale') {
                                playText.innerHTML = `
                                    <span class="error">ERREUR : ACCÈS REFUSÉ</span><br>
                                    <br>
                                    Une étrange partie...<br>
                                    Le seul moyen de gagner est de ne pas jouer.<br>
                                    <br>
                                    Que diriez-vous d'une bonne partie d'échecs?
                                `;
                            } else {
                                playText.innerHTML = `
                                    Lancement du jeu : ${game}<br>
                                    <span class="error">ERREUR : Jeu non disponible dans cette version de démonstration</span>
                                `;
                            }
                            output.appendChild(playText);
                        } else if (command.toLowerCase() === 'joshua') {
                            const joshuaText = document.createElement('p');
                            joshuaText.innerHTML = `
                                <span class="success">BONJOUR, PROFESSEUR FALKEN.</span><br>
                                <br>
                                COMMENT ALLEZ-VOUS?<br>
                                <br>
                                UN JEU ÉTRANGE.<br>
                                LE SEUL MOYEN DE GAGNER EST DE NE PAS JOUER.<br>
                                <br>
                                QUE DIRIEZ-VOUS D'UNE BONNE PARTIE D'ÉCHECS?
                            `;
                            output.appendChild(joshuaText);
                        } else if (command === 'about') {
                            const aboutText = document.createElement('p');
                            aboutText.innerHTML = `
                                Terminal Hackeur v1.0<br>
                                Développé pour la Chasse au Trésor du Lycée Jean Prévost<br>
                                <span class="info">© 2025 - Tous droits réservés</span>
                            `;
                            output.appendChild(aboutText);
                        } else if (command === 'clear') {
                            output.innerHTML = '';
                        } else if (command === 'ls') {
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
                        } else if (command === 'date') {
                            const dateText = document.createElement('p');
                            dateText.textContent = new Date().toLocaleString();
                            output.appendChild(dateText);
                        } else if (command === 'whoami') {
                            const whoamiText = document.createElement('p');
                            whoamiText.textContent = 'élève@lycee-jean-prevost';
                            output.appendChild(whoamiText);
                        } else if (command.startsWith('echo ')) {
                            const echoText = document.createElement('p');
                            echoText.textContent = command.substring(5);
                            output.appendChild(echoText);
                        } else if (command === 'exit') {
                            terminal.classList.remove('active');
                        } else {
                            const errorText = document.createElement('p');
                            errorText.className = 'error';
                            errorText.textContent = `Commande non reconnue : ${command}. Tapez 'help' pour voir les commandes disponibles.`;
                            output.appendChild(errorText);
                        }
                    }
                    
                    // Effacer l'entrée
                    input.value = '';
                    
                    // Faire défiler vers le bas
                    output.scrollTop = output.scrollHeight;
                    
                    // Jouer un son
                    if (typeof playSound === 'function') {
                        playSound('terminal');
                    }
                }
            });
            
            console.log('Terminal créé avec succès');
        };
    }
    
    // Vérifier si la fonction playSound existe
    if (typeof playSound !== 'function') {
        console.log('Fonction playSound non trouvée, création d\'une version de secours...');
        
        // Définir la fonction playSound si elle n'existe pas
        window.playSound = function(name) {
            console.log(`Simulation de son: ${name}`);
        };
    }
    
    // Vérifier si la fonction initHackerEffects existe
    if (typeof initHackerEffects !== 'function') {
        console.log('Fonction initHackerEffects non trouvée, création d\'une version de secours...');
        
        // Définir la fonction initHackerEffects si elle n'existe pas
        window.initHackerEffects = function() {
            console.log('Utilisation de la version de secours de initHackerEffects');
            
            // Initialiser le terminal caché
            if (typeof initHiddenTerminal === 'function') {
                initHiddenTerminal();
            }
        };
    }
    
    console.log('Script de correction pour le terminal initialisé avec succès');
});
