/**
 * Script pour générer des images placeholder pour les éléments manquants
 * Ce script utilise l'API Canvas pour créer des images de remplacement
 */

// Configuration
const config = {
    // Dossiers à créer
    directories: [
        'images/games',
        'images/qr-codes',
        'images/archives/batiments',
        'images/archives/chronologie',
        'images/archives/classes',
        'images/archives/evenements',
        'images/archives/personnalites',
        'images/archives/documents'
    ],
    
    // Images de jeux à créer
    gameImages: [
        { name: 'puzzle.jpg', title: 'Puzzle Historique', color: '#3498db' },
        { name: 'quiz.jpg', title: 'Quiz de Connaissances', color: '#e74c3c' },
        { name: 'memory.jpg', title: 'Memory des Symboles', color: '#2ecc71' },
        { name: 'wordsearch.jpg', title: 'Mots Mêlés', color: '#f39c12' },
        { name: 'hangman.jpg', title: 'Le Pendu', color: '#9b59b6' },
        { name: 'riddle.jpg', title: 'Énigmes Logiques', color: '#1abc9c' }
    ],
    
    // Images QR à créer
    qrImages: [
        { name: 'puzzle.png', title: 'Puzzle QR' },
        { name: 'quiz.png', title: 'Quiz QR' },
        { name: 'memory.png', title: 'Memory QR' },
        { name: 'wordsearch.png', title: 'Wordsearch QR' },
        { name: 'hangman.png', title: 'Hangman QR' },
        { name: 'riddle.png', title: 'Riddle QR' }
    ],
    
    // Image QR exemple
    qrExample: { name: 'qr-example.png', title: 'QR Code Exemple' },
    
    // Images d'archives à créer
    archiveImages: {
        chronologie: [
            { name: 'lycee-1960.jpg', title: 'Lycée en 1960' },
            { name: 'lycee-1970.jpg', title: 'Lycée en 1970' },
            { name: 'labo-1985.jpg', title: 'Laboratoire en 1985' },
            { name: 'info-1995.jpg', title: 'Salle info en 1995' },
            { name: 'renovation-2005.jpg', title: 'Rénovation en 2005' },
            { name: 'multimedia-2015.jpg', title: 'Centre multimédia en 2015' },
            { name: 'lycee-2025.jpg', title: 'Lycée en 2025' }
        ],
        batiments: [
            { name: 'facade-principale.jpg', title: 'Façade principale' },
            { name: 'cour-interieure.jpg', title: 'Cour intérieure' },
            { name: 'gymnase.jpg', title: 'Gymnase' },
            { name: 'cdi-ancien.jpg', title: 'Ancien CDI' }
        ],
        classes: [
            { name: 'classe-physique.jpg', title: 'Cours de physique' },
            { name: 'classe-lettres.jpg', title: 'Cours de lettres' },
            { name: 'classe-info.jpg', title: 'Cours d\'informatique' },
            { name: 'classe-art.jpg', title: 'Atelier d\'arts plastiques' }
        ],
        evenements: [
            { name: 'remise-diplomes-1980.jpg', title: 'Remise de diplômes' },
            { name: 'spectacle-1990.jpg', title: 'Spectacle de fin d\'année' },
            { name: 'competition-sportive.jpg', title: 'Compétition sportive' },
            { name: 'journee-portes-ouvertes.jpg', title: 'Journée portes ouvertes' }
        ],
        personnalites: [
            { name: 'proviseur-1965.jpg', title: 'Premier proviseur' },
            { name: 'visite-ministre.jpg', title: 'Visite ministérielle' },
            { name: 'equipe-enseignante-1980.jpg', title: 'Équipe enseignante' },
            { name: 'anciens-eleves.jpg', title: 'Anciens élèves' }
        ],
        documents: [
            { name: 'plan-original.jpg', title: 'Plan original' },
            { name: 'journal-inauguration.jpg', title: 'Journal d\'inauguration' },
            { name: 'lettre-fondation.jpg', title: 'Lettre de fondation' },
            { name: 'premier-reglement.jpg', title: 'Premier règlement' }
        ]
    }
};

// Fonction pour créer un dossier s'il n'existe pas
function createDirectoryIfNotExists(directory) {
    const fs = require('fs');
    if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory, { recursive: true });
        console.log(`Dossier créé: ${directory}`);
    } else {
        console.log(`Le dossier existe déjà: ${directory}`);
    }
}

// Fonction pour générer une image de jeu
function generateGameImage(imagePath, title, color) {
    const { createCanvas } = require('canvas');
    const fs = require('fs');
    
    // Créer un canvas
    const canvas = createCanvas(400, 300);
    const ctx = canvas.getContext('2d');
    
    // Dessiner le fond
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Dessiner un motif
    ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
    for (let i = 0; i < 10; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 50 + 20;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
    }
    
    // Dessiner le titre
    ctx.fillStyle = 'white';
    ctx.font = 'bold 24px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(title, canvas.width / 2, canvas.height / 2);
    
    // Dessiner le texte "Placeholder"
    ctx.font = '18px Arial';
    ctx.fillText('Placeholder Image', canvas.width / 2, canvas.height / 2 + 30);
    
    // Enregistrer l'image
    const buffer = canvas.toBuffer('image/jpeg');
    fs.writeFileSync(imagePath, buffer);
    console.log(`Image créée: ${imagePath}`);
}

// Fonction pour générer une image QR
function generateQRImage(imagePath, title) {
    const { createCanvas } = require('canvas');
    const fs = require('fs');
    
    // Créer un canvas
    const canvas = createCanvas(200, 200);
    const ctx = canvas.getContext('2d');
    
    // Dessiner le fond
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Dessiner le cadre
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 5;
    ctx.strokeRect(10, 10, canvas.width - 20, canvas.height - 20);
    
    // Dessiner les carrés de positionnement QR
    ctx.fillStyle = 'black';
    
    // Coin supérieur gauche
    ctx.fillRect(30, 30, 40, 40);
    ctx.fillStyle = 'white';
    ctx.fillRect(40, 40, 20, 20);
    ctx.fillStyle = 'black';
    ctx.fillRect(45, 45, 10, 10);
    
    // Coin supérieur droit
    ctx.fillStyle = 'black';
    ctx.fillRect(canvas.width - 70, 30, 40, 40);
    ctx.fillStyle = 'white';
    ctx.fillRect(canvas.width - 60, 40, 20, 20);
    ctx.fillStyle = 'black';
    ctx.fillRect(canvas.width - 55, 45, 10, 10);
    
    // Coin inférieur gauche
    ctx.fillStyle = 'black';
    ctx.fillRect(30, canvas.height - 70, 40, 40);
    ctx.fillStyle = 'white';
    ctx.fillRect(40, canvas.height - 60, 20, 20);
    ctx.fillStyle = 'black';
    ctx.fillRect(45, canvas.height - 55, 10, 10);
    
    // Dessiner des points aléatoires pour simuler un QR code
    ctx.fillStyle = 'black';
    for (let i = 0; i < 100; i++) {
        const x = Math.random() * (canvas.width - 80) + 40;
        const y = Math.random() * (canvas.height - 80) + 40;
        const size = Math.random() * 5 + 2;
        ctx.fillRect(x, y, size, size);
    }
    
    // Dessiner le titre
    ctx.fillStyle = 'black';
    ctx.font = '10px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(title, canvas.width / 2, canvas.height - 10);
    
    // Enregistrer l'image
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(imagePath, buffer);
    console.log(`Image QR créée: ${imagePath}`);
}

// Fonction pour générer une image d'archive
function generateArchiveImage(imagePath, title, category) {
    const { createCanvas } = require('canvas');
    const fs = require('fs');
    
    // Créer un canvas
    const canvas = createCanvas(400, 300);
    const ctx = canvas.getContext('2d');
    
    // Couleurs par catégorie
    const colors = {
        chronologie: '#3498db',
        batiments: '#e74c3c',
        classes: '#2ecc71',
        evenements: '#f39c12',
        personnalites: '#9b59b6',
        documents: '#1abc9c'
    };
    
    // Dessiner le fond
    const color = colors[category] || '#34495e';
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Ajouter un effet de vieille photo
    ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Ajouter une bordure
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.lineWidth = 10;
    ctx.strokeRect(10, 10, canvas.width - 20, canvas.height - 20);
    
    // Dessiner le titre
    ctx.fillStyle = 'white';
    ctx.font = 'bold 24px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(title, canvas.width / 2, canvas.height / 2);
    
    // Dessiner la catégorie
    ctx.font = '18px Arial';
    ctx.fillText(`Catégorie: ${category}`, canvas.width / 2, canvas.height / 2 + 30);
    
    // Dessiner le texte "Placeholder"
    ctx.font = '16px Arial';
    ctx.fillText('Placeholder Image', canvas.width / 2, canvas.height / 2 + 60);
    
    // Enregistrer l'image
    const buffer = canvas.toBuffer('image/jpeg');
    fs.writeFileSync(imagePath, buffer);
    console.log(`Image d'archive créée: ${imagePath}`);
}

// Fonction principale
async function main() {
    try {
        console.log('Début de la génération des images placeholder...');
        
        // Créer les dossiers nécessaires
        for (const directory of config.directories) {
            createDirectoryIfNotExists(directory);
        }
        
        // Générer les images de jeux
        for (const gameImage of config.gameImages) {
            const imagePath = `images/games/${gameImage.name}`;
            generateGameImage(imagePath, gameImage.title, gameImage.color);
        }
        
        // Générer les images QR
        for (const qrImage of config.qrImages) {
            const imagePath = `images/qr-codes/${qrImage.name}`;
            generateQRImage(imagePath, qrImage.title);
        }
        
        // Générer l'image QR exemple
        generateQRImage(`images/${config.qrExample.name}`, config.qrExample.title);
        
        // Générer les images d'archives
        for (const [category, images] of Object.entries(config.archiveImages)) {
            for (const image of images) {
                const imagePath = `images/archives/${category}/${image.name}`;
                generateArchiveImage(imagePath, image.title, category);
            }
        }
        
        console.log('Génération des images placeholder terminée avec succès!');
    } catch (error) {
        console.error('Erreur lors de la génération des images:', error);
    }
}

// Exécuter le script
main().catch(console.error);
