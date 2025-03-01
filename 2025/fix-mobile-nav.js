/**
 * Script pour corriger le problème de double navigation mobile
 * Ce script désactive le système de navigation mobile basé sur #menu-toggle
 * et garde uniquement le système d'overlay qui a un z-index plus élevé (10000)
 */

// Liste des fichiers à modifier
const filesToModify = [
  {
    path: 'css/mobile-menu.css',
    changes: [
      {
        // Désactiver complètement le bouton #menu-toggle en le cachant toujours
        search: `/* Menu Toggle Button */
#menu-toggle {
    display: none;`,
        replace: `/* Menu Toggle Button - DÉSACTIVÉ */
#menu-toggle {
    display: none !important; /* Toujours caché */`
      },
      {
        // Désactiver la règle media query qui affiche le bouton
        search: `@media (max-width: 767px) {
    /* Always show the menu toggle button */
    #menu-toggle {
        display: flex !important;
    }`,
        replace: `@media (max-width: 767px) {
    /* Menu toggle button désactivé */
    /*#menu-toggle {
        display: flex !important;
    }*/`
      }
    ]
  },
  {
    path: 'js/mobile-nav.js',
    changes: [
      {
        // Désactiver la fonction setupMobileNavigation
        search: `// Function to set up mobile navigation
function setupMobileNavigation() {`,
        replace: `// Function to set up mobile navigation - DÉSACTIVÉE
function setupMobileNavigation() {
    console.log('Mobile navigation setup disabled in favor of overlay navigation');
    return; // Sortie immédiate pour désactiver cette fonction`
      }
    ]
  }
];

// Fonction pour appliquer les modifications à un fichier
async function modifyFile(fileInfo) {
  try {
    // Lire le contenu du fichier
    const fs = require('fs');
    const path = fileInfo.path;
    let content = fs.readFileSync(path, 'utf8');
    
    // Appliquer chaque modification
    for (const change of fileInfo.changes) {
      content = content.replace(change.search, change.replace);
    }
    
    // Écrire le contenu modifié
    fs.writeFileSync(path, content, 'utf8');
    console.log(`Fichier modifié avec succès: ${path}`);
  } catch (error) {
    console.error(`Erreur lors de la modification du fichier ${fileInfo.path}:`, error);
  }
}

// Fonction principale
async function main() {
  console.log('Début de la correction du problème de navigation mobile...');
  
  // Appliquer les modifications à chaque fichier
  for (const fileInfo of filesToModify) {
    await modifyFile(fileInfo);
  }
  
  console.log('Correction terminée. Le système de navigation mobile basé sur l\'overlay est maintenant le seul actif.');
}

// Exécuter le script
main().catch(console.error);
