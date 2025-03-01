/**
 * Script pour générer des images placeholder pour les éléments manquants
 * Version pour Windows qui génère et place directement les images aux bons endroits
 * 
 * Pour exécuter ce script:
 * 1. Installez Node.js depuis https://nodejs.org/
 * 2. Ouvrez une invite de commande (cmd) dans ce dossier
 * 3. Exécutez: npm install canvas
 * 4. Exécutez: node generate-images.js
 */

const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

// Fonction pour créer un dossier s'il n'existe pas
function ensureDirectoryExists(dirPath) {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
        console.log(`Dossier créé: ${dirPath}`);
    }
}

// Créer les dossiers nécessaires
const directories = [
    'images/games',
    'images/qr-codes',
    'images/archives/batiments',
    'images/archives/chronologie',
    'images/archives/classes',
    'images/archives/evenements',
    'images/archives/personnalites',
    'images/archives/documents'
];

// Créer les dossiers
directories.forEach(dir => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
        console.log(`Dossier créé: ${dir}`);
    }
});

// Générer les images de jeux
const gameImages = [
    { name: 'puzzle.jpg', title: 'Puzzle Historique', color: '#3498db' },
    { name: 'quiz.jpg', title: 'Quiz de Connaissances', color: '#e74c3c' },
    { name: 'memory.jpg', title: 'Memory des Symboles', color: '#2ecc71' },
    { name: 'wordsearch.jpg', title: 'Mots Mêlés', color: '#f39c12' },
    { name: 'hangman.jpg', title: 'Le Pendu', color: '#9b59b6' },
    { name: 'riddle.jpg', title: 'Énigmes Logiques', color: '#1abc9c' }
];

// Générer les images de jeux
gameImages.forEach(game => {
    const canvas = createCanvas(400, 300);
    const ctx = canvas.getContext('2d');
    
    // Fond coloré
    ctx.fillStyle = game.color;
    ctx.fillRect(0, 0, 400, 300);
    
    // Texte
    ctx.fillStyle = 'white';
    ctx.font = 'bold 24px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(game.title, 200, 150);
    ctx.font = '18px Arial';
    ctx.fillText('Placeholder Image', 200, 180);
    
    // Enregistrer l'image
    const buffer = canvas.toBuffer('image/jpeg');
    fs.writeFileSync(`images/games/${game.name}`, buffer);
    console.log(`Image créée: images/games/${game.name}`);
});

// Générer l'image QR exemple
const qrCanvas = createCanvas(200, 200);
const qrCtx = qrCanvas.getContext('2d');

// Fond blanc
qrCtx.fillStyle = 'white';
qrCtx.fillRect(0, 0, 200, 200);

// Cadre noir
qrCtx.strokeStyle = 'black';
qrCtx.lineWidth = 5;
qrCtx.strokeRect(10, 10, 180, 180);

// Carrés de positionnement QR
qrCtx.fillStyle = 'black';
// Coin supérieur gauche
qrCtx.fillRect(30, 30, 40, 40);
qrCtx.fillStyle = 'white';
qrCtx.fillRect(40, 40, 20, 20);
qrCtx.fillStyle = 'black';
qrCtx.fillRect(45, 45, 10, 10);

// Coin supérieur droit
qrCtx.fillStyle = 'black';
qrCtx.fillRect(130, 30, 40, 40);
qrCtx.fillStyle = 'white';
qrCtx.fillRect(140, 40, 20, 20);
qrCtx.fillStyle = 'black';
qrCtx.fillRect(145, 45, 10, 10);

// Coin inférieur gauche
qrCtx.fillStyle = 'black';
qrCtx.fillRect(30, 130, 40, 40);
qrCtx.fillStyle = 'white';
qrCtx.fillRect(40, 140, 20, 20);
qrCtx.fillStyle = 'black';
qrCtx.fillRect(45, 145, 10, 10);

// Points aléatoires
qrCtx.fillStyle = 'black';
for (let i = 0; i < 100; i++) {
    const x = Math.random() * 120 + 40;
    const y = Math.random() * 120 + 40;
    const size = Math.random() * 5 + 2;
    qrCtx.fillRect(x, y, size, size);
}

// Texte
qrCtx.fillStyle = 'black';
qrCtx.font = '10px Arial';
qrCtx.textAlign = 'center';
qrCtx.fillText('QR Code Exemple', 100, 190);

// Enregistrer l'image QR exemple
const qrBuffer = qrCanvas.toBuffer('image/png');
fs.writeFileSync('images/qr-example.png', qrBuffer);
console.log('Image QR exemple créée: images/qr-example.png');

// Générer les images QR pour chaque jeu
const qrImages = [
    { name: 'puzzle.png', title: 'Puzzle QR' },
    { name: 'quiz.png', title: 'Quiz QR' },
    { name: 'memory.png', title: 'Memory QR' },
    { name: 'wordsearch.png', title: 'Wordsearch QR' },
    { name: 'hangman.png', title: 'Hangman QR' },
    { name: 'riddle.png', title: 'Riddle QR' }
];

// Créer le dossier qr-codes s'il n'existe pas
if (!fs.existsSync('images/qr-codes')) {
    fs.mkdirSync('images/qr-codes', { recursive: true });
}

// Générer les images QR
qrImages.forEach(qr => {
    const canvas = createCanvas(200, 200);
    const ctx = canvas.getContext('2d');
    
    // Fond blanc
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, 200, 200);
    
    // Cadre noir
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 5;
    ctx.strokeRect(10, 10, 180, 180);
    
    // Carrés de positionnement QR
    ctx.fillStyle = 'black';
    // Coin supérieur gauche
    ctx.fillRect(30, 30, 40, 40);
    ctx.fillStyle = 'white';
    ctx.fillRect(40, 40, 20, 20);
    ctx.fillStyle = 'black';
    ctx.fillRect(45, 45, 10, 10);
    
    // Coin supérieur droit
    ctx.fillStyle = 'black';
    ctx.fillRect(130, 30, 40, 40);
    ctx.fillStyle = 'white';
    ctx.fillRect(140, 40, 20, 20);
    ctx.fillStyle = 'black';
    ctx.fillRect(145, 45, 10, 10);
    
    // Coin inférieur gauche
    ctx.fillStyle = 'black';
    ctx.fillRect(30, 130, 40, 40);
    ctx.fillStyle = 'white';
    ctx.fillRect(40, 140, 20, 20);
    ctx.fillStyle = 'black';
    ctx.fillRect(45, 145, 10, 10);
    
    // Points aléatoires
    ctx.fillStyle = 'black';
    for (let i = 0; i < 100; i++) {
        const x = Math.random() * 120 + 40;
        const y = Math.random() * 120 + 40;
        const size = Math.random() * 5 + 2;
        ctx.fillRect(x, y, size, size);
    }
    
    // Texte
    ctx.fillStyle = 'black';
    ctx.font = '10px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(qr.title, 100, 190);
    
    // Enregistrer l'image
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(`images/qr-codes/${qr.name}`, buffer);
    console.log(`Image QR créée: images/qr-codes/${qr.name}`);
});

// Générer les images d'archives
const archiveCategories = {
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
};

// Couleurs par catégorie
const categoryColors = {
    chronologie: '#3498db',
    batiments: '#e74c3c',
    classes: '#2ecc71',
    evenements: '#f39c12',
    personnalites: '#9b59b6',
    documents: '#1abc9c'
};

// Générer les images d'archives
Object.entries(archiveCategories).forEach(([category, images]) => {
    // Créer le dossier s'il n'existe pas
    const dir = `images/archives/${category}`;
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
    
    // Générer les images
    images.forEach(image => {
        const canvas = createCanvas(400, 300);
        const ctx = canvas.getContext('2d');
        
        // Fond coloré
        ctx.fillStyle = categoryColors[category];
        ctx.fillRect(0, 0, 400, 300);
        
        // Effet de vieille photo
        ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.fillRect(0, 0, 400, 300);
        
        // Bordure
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.lineWidth = 10;
        ctx.strokeRect(10, 10, 380, 280);
        
        // Texte
        ctx.fillStyle = 'white';
        ctx.font = 'bold 24px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(image.title, 200, 150);
        ctx.font = '18px Arial';
        ctx.fillText(`Catégorie: ${category}`, 200, 180);
        ctx.font = '16px Arial';
        ctx.fillText('Placeholder Image', 200, 210);
        
        // Enregistrer l'image
        const buffer = canvas.toBuffer('image/jpeg');
        fs.writeFileSync(`${dir}/${image.name}`, buffer);
        console.log(`Image d'archive créée: ${dir}/${image.name}`);
    });
});

console.log('Génération des images terminée avec succès!');
