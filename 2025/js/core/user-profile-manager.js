/**
 * User Profile Manager Module
 * Centralizes user profile functionality to avoid code duplication
 */

// User profile object structure
const defaultUserProfile = {
    username: '',
    theme: 'default',
    avatar: {
        shape: 'circle',
        color: '#3498db',
        icon: 'fa-user'
    },
    progress: {
        visitedPages: [],
        completedGames: [],
        collectedFragments: []
    },
    preferences: {
        soundEnabled: true,
        animationsEnabled: true,
        highContrast: false,
        largeText: false,
        dyslexiaFont: false,
        reducedMotion: false
    },
    lastVisit: new Date().toISOString()
};

// Available themes
const availableThemes = [
    { id: 'default', name: 'Défaut', icon: 'fa-palette' },
    { id: 'steampunk', name: 'Steampunk', icon: 'fa-cogs' },
    { id: 'medieval', name: 'Médiéval', icon: 'fa-chess-rook' },
    { id: 'futuristic', name: 'Futuriste', icon: 'fa-rocket' }
];

// Available avatar shapes
const avatarShapes = ['circle', 'square', 'hexagon', 'triangle'];

// Available avatar colors
const avatarColors = [
    '#3498db', // Blue
    '#e74c3c', // Red
    '#2ecc71', // Green
    '#f1c40f', // Yellow
    '#9b59b6', // Purple
    '#e67e22', // Orange
    '#1abc9c', // Turquoise
    '#34495e'  // Dark Blue
];

// Available avatar icons
const avatarIcons = [
    'fa-user',
    'fa-user-ninja',
    'fa-user-astronaut',
    'fa-user-secret',
    'fa-user-graduate',
    'fa-user-tie',
    'fa-cat',
    'fa-dog',
    'fa-dragon',
    'fa-robot'
];

// Current user profile
let userProfile = { ...defaultUserProfile };

/**
 * Loads user profile from localStorage
 * @returns {Object} The loaded user profile
 */
function loadUserProfile() {
    const savedProfile = localStorage.getItem('userProfile');
    if (savedProfile) {
        try {
            userProfile = JSON.parse(savedProfile);
            console.log('User profile loaded:', userProfile);
        } catch (e) {
            console.error('Error parsing user profile:', e);
            userProfile = { ...defaultUserProfile };
        }
    } else {
        console.log('No user profile found, using default');
        userProfile = { ...defaultUserProfile };
    }
    return userProfile;
}

/**
 * Saves user profile to localStorage
 */
function saveUserProfile() {
    userProfile.lastVisit = new Date().toISOString();
    localStorage.setItem('userProfile', JSON.stringify(userProfile));
    console.log('User profile saved:', userProfile);
}

/**
 * Gets the current user profile
 * @returns {Object} The current user profile
 */
function getUserProfile() {
    return userProfile;
}

/**
 * Updates the user profile with new data
 * @param {Object} newData - New data to merge into the profile
 * @returns {Object} The updated user profile
 */
function updateUserProfile(newData) {
    userProfile = { ...userProfile, ...newData };
    saveUserProfile();
    return userProfile;
}

/**
 * Resets profile to default
 * @returns {Object} The reset user profile
 */
function resetUserProfile() {
    userProfile = { ...defaultUserProfile };
    saveUserProfile();
    return userProfile;
}

/**
 * Records a completed game in the user profile
 * @param {string} gameId - The ID of the completed game
 * @param {string} fragmentId - The ID of the collected fragment
 */
function recordCompletedGame(gameId, fragmentId) {
    // Add game to completed games if not already there
    if (!userProfile.progress.completedGames.includes(gameId)) {
        userProfile.progress.completedGames.push(gameId);
    }
    
    // Add fragment to collected fragments if not already there
    if (fragmentId && !userProfile.progress.collectedFragments.includes(fragmentId)) {
        userProfile.progress.collectedFragments.push(fragmentId);
    }
    
    // Save profile
    saveUserProfile();
    
    // Update progress display
    updateProgressDisplay();
}

/**
 * Records a visited page in the user profile
 * @param {string} pageUrl - The URL of the visited page
 */
function recordVisitedPage(pageUrl) {
    // Add page to visited pages if not already there
    if (!userProfile.progress.visitedPages.includes(pageUrl)) {
        userProfile.progress.visitedPages.push(pageUrl);
    }
    
    // Save profile
    saveUserProfile();
}

/**
 * Updates progress display based on user profile
 */
function updateProgressDisplay() {
    // Update completed games count
    const completedGamesElement = document.getElementById('completed-games');
    if (completedGamesElement) {
        completedGamesElement.textContent = userProfile.progress.completedGames.length;
    }
    
    // Update quote progress
    const quoteProgressElement = document.getElementById('quote-progress');
    if (quoteProgressElement) {
        const progressPercentage = userProfile.progress.collectedFragments.length > 0 
            ? Math.round((userProfile.progress.collectedFragments.length / 6) * 100) 
            : 0;
        quoteProgressElement.textContent = progressPercentage;
    }
    
    // Update progress bar
    const progressFill = document.getElementById('progress-fill');
    if (progressFill) {
        const progressPercentage = userProfile.progress.completedGames.length > 0 
            ? Math.round((userProfile.progress.completedGames.length / 6) * 100) 
            : 0;
        progressFill.style.width = `${progressPercentage}%`;
    }
}

/**
 * Applies selected theme
 * @param {string} themeId - The ID of the theme to apply
 */
function applyTheme(themeId) {
    // Remove any existing theme classes
    document.body.classList.remove('theme-steampunk', 'theme-medieval', 'theme-futuristic');
    
    // Apply new theme if not default
    if (themeId !== 'default') {
        document.body.classList.add(`theme-${themeId}`);
    }
    
    // Update user profile
    userProfile.theme = themeId;
    saveUserProfile();
}

/**
 * Gets the user's progress
 * @returns {Object} The user's progress
 */
function getUserProgress() {
    return userProfile.progress;
}

/**
 * Resets the user's progress
 */
function resetUserProgress() {
    userProfile.progress = {
        visitedPages: [],
        completedGames: [],
        collectedFragments: []
    };
    saveUserProfile();
    updateProgressDisplay();
}

/**
 * Synchronizes user profile with existing game state
 */
function syncWithGameState() {
    // Check if gameState exists
    if (typeof window.gameState !== 'undefined') {
        const gameState = window.gameState;
        
        // Import existing progress from gameState
        if (gameState.completedGames && gameState.completedGames.length > 0) {
            // Update user profile with completed games from gameState
            gameState.completedGames.forEach(gameId => {
                if (!userProfile.progress.completedGames.includes(gameId)) {
                    userProfile.progress.completedGames.push(gameId);
                }
            });
            
            // Update user profile with quote fragments from gameState
            if (gameState.quoteFragments) {
                Object.keys(gameState.quoteFragments).forEach(gameId => {
                    const fragment = gameState.quoteFragments[gameId];
                    if (fragment && !userProfile.progress.collectedFragments.includes(fragment)) {
                        userProfile.progress.collectedFragments.push(fragment);
                    }
                });
            }
            
            // Save updated profile
            saveUserProfile();
        }
        
        // Set up listeners for gameState changes
        const originalCompleteGame = gameState.completeGame;
        gameState.completeGame = function(gameId, quoteFragment) {
            // Call original method
            const result = originalCompleteGame.call(gameState, gameId, quoteFragment);
            
            // Update user profile
            recordCompletedGame(gameId, quoteFragment);
            
            return result;
        };
        
        const originalReset = gameState.reset;
        gameState.reset = function() {
            // Call original method
            originalReset.call(gameState);
            
            // Reset progress in user profile
            resetUserProgress();
        };
        
        // Update progress display
        updateProgressDisplay();
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Load user profile from localStorage
    loadUserProfile();
    
    // Apply current theme
    applyTheme(userProfile.theme);
    
    // Record current page visit
    recordVisitedPage(window.location.pathname);
    
    // Synchronize with existing game state
    syncWithGameState();
});

// Export functions for use in other scripts
export {
    defaultUserProfile,
    availableThemes,
    avatarShapes,
    avatarColors,
    avatarIcons,
    loadUserProfile,
    saveUserProfile,
    getUserProfile,
    updateUserProfile,
    resetUserProfile,
    recordCompletedGame,
    recordVisitedPage,
    updateProgressDisplay,
    applyTheme,
    getUserProgress,
    resetUserProgress,
    syncWithGameState
};

// For backward compatibility with non-module scripts
window.userProfileManager = {
    getUserProfile,
    recordCompletedGame,
    recordVisitedPage,
    applyTheme,
    syncWithGameState
};
