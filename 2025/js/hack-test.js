/**
 * Script de test pour activer le mode hackeur et ouvrir le terminal
 */

document.addEventListener('DOMContentLoaded', () => {
    // Vérifier si nous sommes sur la page d'accueil ou la page crypto
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const excludedPages = ['index.html', 'crypto.html'];
    
    // Ne pas afficher les boutons de test sur les pages exclues
    if (excludedPages.includes(currentPage)) {
        console.log('Page exclue pour les boutons de test:', currentPage);
        return;
    }
    
    // Ajouter un bouton de test dans le coin inférieur gauche
    const testButton = document.createElement('button');
    testButton.textContent = 'Activer Mode Hackeur';
    testButton.style.position = 'fixed';
    testButton.style.bottom = '20px';
    testButton.style.left = '20px';
    testButton.style.zIndex = '9999';
    testButton.style.padding = '10px';
    testButton.style.backgroundColor = '#333';
    testButton.style.color = '#fff';
    testButton.style.border = '1px solid #00ff00';
    testButton.style.borderRadius = '5px';
    testButton.style.cursor = 'pointer';
    
    testButton.addEventListener('click', () => {
        console.log('Activation du mode hackeur...');
        
        // Activer le mode hackeur
        document.documentElement.classList.add('hacker-theme');
        localStorage.setItem('hackerTheme', 'enabled');
        
        // Initialiser les effets hackeur
        if (typeof initHackerEffects === 'function') {
            initHackerEffects();
        }
        
        // Initialiser le terminal
        console.log('Initialisation du terminal...');
        if (typeof initHiddenTerminal === 'function') {
            initHiddenTerminal();
            
            // Ouvrir le terminal
            setTimeout(() => {
                console.log('Ouverture du terminal...');
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
                    console.error('Terminal non trouvé!');
                    alert('Terminal non trouvé! Vérifiez la console pour plus d\'informations.');
                }
            }, 500);
        } else {
            console.error('Fonction initHiddenTerminal non trouvée!');
            alert('Fonction initHiddenTerminal non trouvée! Vérifiez la console pour plus d\'informations.');
        }
    });
    
    document.body.appendChild(testButton);
    
    // Ajouter un bouton pour tester le raccourci clavier
    const keyboardButton = document.createElement('button');
    keyboardButton.textContent = 'Tester Raccourci Clavier';
    keyboardButton.style.position = 'fixed';
    keyboardButton.style.bottom = '60px';
    keyboardButton.style.left = '20px';
    keyboardButton.style.zIndex = '9999';
    keyboardButton.style.padding = '10px';
    keyboardButton.style.backgroundColor = '#333';
    keyboardButton.style.color = '#fff';
    keyboardButton.style.border = '1px solid #00ff00';
    keyboardButton.style.borderRadius = '5px';
    keyboardButton.style.cursor = 'pointer';
    
    keyboardButton.addEventListener('click', () => {
        console.log('Test du raccourci clavier...');
        
        // Activer le mode hackeur si ce n'est pas déjà fait
        if (!document.documentElement.classList.contains('hacker-theme')) {
            document.documentElement.classList.add('hacker-theme');
            localStorage.setItem('hackerTheme', 'enabled');
            
            // Initialiser les effets hackeur
            if (typeof initHackerEffects === 'function') {
                initHackerEffects();
            }
        }
        
        // Simuler le raccourci clavier Ctrl+Alt+T
        if (typeof handleTerminalHotkey === 'function') {
            // Appeler directement la fonction de gestion du raccourci
            handleTerminalHotkey({
                key: 't',
                ctrlKey: true,
                altKey: true,
                preventDefault: () => {}
            });
        } else {
            // Simuler l'événement clavier
            const event = new KeyboardEvent('keydown', {
                key: 't',
                code: 'KeyT',
                ctrlKey: true,
                altKey: true,
                bubbles: true
            });
            
            document.dispatchEvent(event);
        }
    });
    
    document.body.appendChild(keyboardButton);
    
    // Ajouter un bouton pour ouvrir directement le terminal
    const openTerminalButton = document.createElement('button');
    openTerminalButton.textContent = 'Ouvrir Terminal Directement';
    openTerminalButton.style.position = 'fixed';
    openTerminalButton.style.bottom = '100px';
    openTerminalButton.style.left = '20px';
    openTerminalButton.style.zIndex = '9999';
    openTerminalButton.style.padding = '10px';
    openTerminalButton.style.backgroundColor = '#333';
    openTerminalButton.style.color = '#fff';
    openTerminalButton.style.border = '1px solid #00ff00';
    openTerminalButton.style.borderRadius = '5px';
    openTerminalButton.style.cursor = 'pointer';
    
    openTerminalButton.addEventListener('click', () => {
        console.log('Ouverture directe du terminal...');
        
        // Activer le mode hackeur si ce n'est pas déjà fait
        if (!document.documentElement.classList.contains('hacker-theme')) {
            document.documentElement.classList.add('hacker-theme');
            localStorage.setItem('hackerTheme', 'enabled');
            
            // Initialiser les effets hackeur
            if (typeof initHackerEffects === 'function') {
                initHackerEffects();
            }
        }
        
        // S'assurer que le terminal est initialisé
        if (typeof initHiddenTerminal === 'function') {
            initHiddenTerminal();
            
            // Ouvrir le terminal
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
                    console.error('Terminal non trouvé!');
                    alert('Terminal non trouvé! Vérifiez la console pour plus d\'informations.');
                }
            }, 100);
        } else {
            console.error('Fonction initHiddenTerminal non trouvée!');
            alert('Fonction initHiddenTerminal non trouvée! Vérifiez la console pour plus d\'informations.');
        }
    });
    
    document.body.appendChild(openTerminalButton);
    
    // Ajouter un bouton pour afficher les commandes disponibles
    const commandsButton = document.createElement('button');
    commandsButton.textContent = 'Afficher Commandes';
    commandsButton.style.position = 'fixed';
    commandsButton.style.bottom = '140px';
    commandsButton.style.left = '20px';
    commandsButton.style.zIndex = '9999';
    commandsButton.style.padding = '10px';
    commandsButton.style.backgroundColor = '#333';
    commandsButton.style.color = '#fff';
    commandsButton.style.border = '1px solid #00ff00';
    commandsButton.style.borderRadius = '5px';
    commandsButton.style.cursor = 'pointer';
    
    commandsButton.addEventListener('click', () => {
        console.log('Affichage des commandes disponibles...');
        
        // Créer une boîte de dialogue pour afficher les commandes
        const dialog = document.createElement('div');
        dialog.style.position = 'fixed';
        dialog.style.top = '50%';
        dialog.style.left = '50%';
        dialog.style.transform = 'translate(-50%, -50%)';
        dialog.style.width = '80%';
        dialog.style.maxWidth = '600px';
        dialog.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        dialog.style.color = '#00ff00';
        dialog.style.border = '1px solid #00ff00';
        dialog.style.borderRadius = '5px';
        dialog.style.padding = '20px';
        dialog.style.zIndex = '10001';
        dialog.style.fontFamily = 'Courier New, monospace';
        dialog.style.boxShadow = '0 0 20px rgba(0, 255, 0, 0.5)';
        
        dialog.innerHTML = `
            <h3 style="color: #00ff00; margin-top: 0;">Commandes du Terminal</h3>
            <p>Voici les commandes disponibles dans le terminal hackeur :</p>
            <ul style="list-style-type: none; padding-left: 0;">
                <li><span style="color: #0088ff;">help</span> - Affiche l'aide</li>
                <li><span style="color: #0088ff;">clear</span> - Efface l'écran</li>
                <li><span style="color: #0088ff;">ls</span> - Liste les fichiers</li>
                <li><span style="color: #0088ff;">date</span> - Affiche la date et l'heure</li>
                <li><span style="color: #0088ff;">whoami</span> - Affiche l'utilisateur actuel</li>
                <li><span style="color: #0088ff;">echo [texte]</span> - Affiche le texte</li>
                <li><span style="color: #0088ff;">binary</span> - Lance le jeu de calcul binaire</li>
                <li><span style="color: #0088ff;">matrix</span> - Déclenche l'effet Matrix</li>
                <li><span style="color: #0088ff;">glitch</span> - Déclenche l'effet de distorsion</li>
                <li><span style="color: #0088ff;">clue</span> - Affiche un indice caché</li>
                <li><span style="color: #0088ff;">wargames</span> - Lance le jeu WarGames</li>
                <li><span style="color: #0088ff;">about</span> - À propos du terminal</li>
                <li><span style="color: #0088ff;">exit</span> - Ferme le terminal</li>
            </ul>
            <p>Pour le jeu WarGames, utilisez les commandes suivantes :</p>
            <ul style="list-style-type: none; padding-left: 0;">
                <li><span style="color: #0088ff;">list</span> - Liste les jeux disponibles</li>
                <li><span style="color: #0088ff;">play [jeu]</span> - Lance un jeu spécifique</li>
                <li><span style="color: #0088ff;">joshua</span> - Easter egg</li>
            </ul>
            <button id="close-commands" style="background-color: #111; color: #00ff00; border: 1px solid #00ff00; padding: 5px 10px; margin-top: 10px; cursor: pointer;">Fermer</button>
        `;
        
        document.body.appendChild(dialog);
        
        // Ajouter un gestionnaire d'événements pour le bouton de fermeture
        const closeButton = document.getElementById('close-commands');
        closeButton.addEventListener('click', () => {
            dialog.remove();
        });
    });
    
    document.body.appendChild(commandsButton);
});
