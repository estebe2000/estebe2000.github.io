/**
 * Script Loader Module
 * Dynamically loads scripts based on the current page
 */

// Map of page-specific scripts
const pageScripts = {
    'index.html': [
        'js/index.js',
        'js/hero-placeholder.js',
        'js/photojp-placeholder.js'
    ],
    'visite.html': [
        'js/visite.js',
        'js/hero-placeholder.js',
        'js/qr-placeholder.js'
    ],
    'mini-jeux.html': [
        'js/mini-jeux.js',
        'js/hero-placeholder.js',
        'js/game-illustrations.js'
    ],
    'solution.html': [
        'js/solution.js',
        'js/hero-placeholder.js',
        'js/solution-pattern.js'
    ],
    'archives.html': [
        'js/archives.js',
        'js/hero-placeholder.js',
        'js/matrix-rain.js'
    ],
    'crypto.html': [
        'js/crypto.js',
        'js/hero-placeholder.js'
    ],
    'final.html': [
        'js/final.js',
        'js/hero-placeholder.js',
        'js/music-visualizer.js'
    ],
    'credits.html': [
        'js/hero-placeholder.js'
    ]
};

// Common scripts loaded on all pages
const commonScripts = [
    'js/core/app.js',
    'js/mobile-nav.js',
    'js/mobile-nav-overlay.js',
    'js/dropdown.js',
    'js/visual-feedback.js',
    'js/hacker-theme.js',
    'js/hacker-effects.js',
    'js/accessibility.js',
    'js/logo-placeholder.js'
];

// Scripts that should be loaded as modules
const moduleScripts = [
    'js/core/app.js',
    'js/core/utils.js',
    'js/core/data-loader.js',
    'js/core/game-state.js',
    'js/core/user-profile-manager.js'
];

/**
 * Load a script dynamically
 * @param {string} src - Script source URL
 * @param {boolean} isModule - Whether to load as a module
 * @returns {Promise} Promise that resolves when the script is loaded
 */
function loadScript(src, isModule = false) {
    return new Promise((resolve, reject) => {
        // Check if script is already loaded
        const existingScript = document.querySelector(`script[src="${src}"]`);
        if (existingScript) {
            resolve();
            return;
        }
        
        // Create script element
        const script = document.createElement('script');
        script.src = src;
        
        // Set as module if needed
        if (isModule) {
            script.type = 'module';
        }
        
        // Set up load and error handlers
        script.onload = () => {
            console.log(`Script loaded: ${src}`);
            resolve();
        };
        
        script.onerror = () => {
            console.error(`Error loading script: ${src}`);
            reject(new Error(`Failed to load script: ${src}`));
        };
        
        // Add to document
        document.body.appendChild(script);
    });
}

/**
 * Load scripts for the current page
 * @returns {Promise} Promise that resolves when all scripts are loaded
 */
async function loadScriptsForCurrentPage() {
    // Determine current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Get scripts for current page
    const pageSpecificScripts = pageScripts[currentPage] || [];
    
    // Combine with common scripts
    const allScripts = [...commonScripts, ...pageSpecificScripts];
    
    // Load all scripts
    const loadPromises = allScripts.map(src => {
        const isModule = moduleScripts.includes(src);
        return loadScript(src, isModule);
    });
    
    try {
        await Promise.all(loadPromises);
        console.log('All scripts loaded successfully');
    } catch (error) {
        console.error('Error loading scripts:', error);
    }
}

// Load scripts when DOM is loaded
document.addEventListener('DOMContentLoaded', loadScriptsForCurrentPage);

// Export functions for use in other scripts
export {
    loadScript,
    loadScriptsForCurrentPage
};

// For backward compatibility with non-module scripts
window.scriptLoader = {
    loadScript,
    loadScriptsForCurrentPage
};
