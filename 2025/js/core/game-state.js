/**
 * Game State Module
 * Centralizes game state management
 */

// Default game state
const defaultGameState = {
    completedGames: [],
    quoteFragments: {},
    currentVisit: null,
    finalSubmission: null
};

// Current game state
let gameState = { ...defaultGameState };

/**
 * Initialize game state from localStorage or defaults
 */
function init() {
    const savedState = localStorage.getItem('chasseTresor');
    if (savedState) {
        try {
            const parsedState = JSON.parse(savedState);
            gameState = {
                completedGames: parsedState.completedGames || [],
                quoteFragments: parsedState.quoteFragments || {},
                currentVisit: parsedState.currentVisit,
                finalSubmission: parsedState.finalSubmission
            };
        } catch (error) {
            console.error('Error parsing saved game state:', error);
            gameState = { ...defaultGameState };
        }
    }
    updateUI();
}

/**
 * Save current state to localStorage
 */
function save() {
    localStorage.setItem('chasseTresor', JSON.stringify(gameState));
    updateUI();
}

/**
 * Reset all progress
 */
function reset() {
    gameState = { ...defaultGameState };
    localStorage.removeItem('chasseTresor');
    updateUI();
    
    // Trigger custom event for reset
    const resetEvent = new CustomEvent('gameStateReset');
    document.dispatchEvent(resetEvent);
}

/**
 * Mark a game as completed and save the quote fragment
 * @param {string} gameId - The ID of the completed game
 * @param {string} quoteFragment - The quote fragment to save
 * @returns {boolean} Whether the game was newly completed
 */
function completeGame(gameId, quoteFragment) {
    if (!gameState.completedGames.includes(gameId)) {
        gameState.completedGames.push(gameId);
        gameState.quoteFragments[gameId] = quoteFragment;
        save();
        
        // Trigger custom event for game completion
        const completionEvent = new CustomEvent('gameCompleted', { 
            detail: { gameId, quoteFragment } 
        });
        document.dispatchEvent(completionEvent);
        
        return true;
    }
    return false;
}

/**
 * Check if a game is completed
 * @param {string} gameId - The ID of the game to check
 * @returns {boolean} Whether the game is completed
 */
function isGameCompleted(gameId) {
    return gameState.completedGames.includes(gameId);
}

/**
 * Get all collected quote fragments
 * @returns {Array} Array of collected quote fragments
 */
function getCollectedQuoteFragments() {
    return Object.values(gameState.quoteFragments);
}

/**
 * Get the complete quote (all fragments joined)
 * @returns {string} The complete quote
 */
function getCompleteQuote() {
    const fragments = getCollectedQuoteFragments();
    return fragments.join(' ');
}

/**
 * Set the current virtual visit
 * @param {string} visitId - The ID of the current visit
 */
function setCurrentVisit(visitId) {
    gameState.currentVisit = visitId;
    save();
}

/**
 * Get the current game state
 * @returns {Object} The current game state
 */
function getGameState() {
    return { ...gameState }; // Return a copy to prevent direct modification
}

/**
 * Update UI elements based on current state
 */
function updateUI() {
    // Update progress bar
    const progressFill = document.getElementById('progress-fill');
    if (progressFill) {
        const progressPercentage = (gameState.completedGames.length / 6) * 100;
        progressFill.style.width = `${progressPercentage}%`;
    }
    
    // Update completed games counter
    const completedGamesElement = document.getElementById('completed-games');
    if (completedGamesElement) {
        completedGamesElement.textContent = gameState.completedGames.length;
    }
    
    // Update quote progress
    const quoteProgressElement = document.getElementById('quote-progress');
    if (quoteProgressElement) {
        const quotePercentage = (gameState.completedGames.length / 6) * 100;
        quoteProgressElement.textContent = quotePercentage;
    }
}

/**
 * Set up event listeners for game state
 */
function setupEventListeners() {
    // Set up reset button functionality
    const resetButton = document.getElementById('reset-progress');
    if (resetButton) {
        resetButton.addEventListener('click', () => {
            if (confirm('Êtes-vous sûr de vouloir réinitialiser toute votre progression ? Cette action est irréversible.')) {
                reset();
                alert('Progression réinitialisée avec succès.');
                
                // Redirect to home page if not already there
                if (window.location.pathname !== '/index.html' && 
                    window.location.pathname !== '/' && 
                    window.location.pathname !== '') {
                    window.location.href = 'index.html';
                }
            }
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    init();
    setupEventListeners();
});

// Export functions for use in other scripts
export {
    init,
    save,
    reset,
    completeGame,
    isGameCompleted,
    getCollectedQuoteFragments,
    getCompleteQuote,
    setCurrentVisit,
    getGameState,
    updateUI
};

// For backward compatibility with non-module scripts
window.gameState = {
    init,
    save,
    reset,
    completeGame,
    isGameCompleted,
    getCollectedQuoteFragments,
    getCompleteQuote,
    setCurrentVisit,
    updateUI,
    // Direct property access for compatibility
    get completedGames() { return [...gameState.completedGames]; },
    get quoteFragments() { return { ...gameState.quoteFragments }; },
    get currentVisit() { return gameState.currentVisit; },
    get finalSubmission() { return gameState.finalSubmission; }
};
