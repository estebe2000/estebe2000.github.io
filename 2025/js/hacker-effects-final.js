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
