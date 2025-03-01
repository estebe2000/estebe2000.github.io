/**
 * Script pour charger les indices du mode hacker à partir du fichier JSON
 */

// Variable globale pour stocker les indices
window.hackerClues = [];

// Fonction pour charger les indices
function loadHackerClues() {
    fetch('data/hacker-clues.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur lors du chargement des indices');
            }
            return response.json();
        })
        .then(data => {
            window.hackerClues = data.clues;
            console.log('Indices du mode hacker chargés avec succès:', window.hackerClues);
        })
        .catch(error => {
            console.error('Erreur lors du chargement des indices:', error);
            // Indices par défaut en cas d'erreur
            window.hackerClues = [
                "Indice : Cherchez les QR codes dans les coins des salles de classe.",
                "Indice : La citation complète contient le mot 'liberté'.",
                "Indice : Jean Prévost utilisait le pseudonyme 'Capitaine Goderville'.",
                "Indice : Le dernier mini-jeu est lié à la musique classique.",
                "Indice : Essayez de cliquer sur le portrait de Jean Prévost 3 fois."
            ];
        });
}

// Charger les indices au chargement de la page
document.addEventListener('DOMContentLoaded', loadHackerClues);
