/**
 * Data Loader Module
 * Centralizes data loading functionality
 */

// Cache for loaded data
const dataCache = {};

/**
 * Load data from a JSON file
 * @param {string} filePath - Path to the JSON file
 * @returns {Promise<Object>} Promise that resolves with the loaded data
 */
async function loadData(filePath) {
    // Check if data is already cached
    if (dataCache[filePath]) {
        return dataCache[filePath];
    }
    
    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`Failed to load data from ${filePath}: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        
        // Cache the data
        dataCache[filePath] = data;
        
        return data;
    } catch (error) {
        console.error(`Error loading data from ${filePath}:`, error);
        return null;
    }
}

/**
 * Get quote fragments data
 * @returns {Promise<Object>} Promise that resolves with the quote fragments data
 */
async function getQuoteFragments() {
    return await loadData('data/quote-fragments.json');
}

/**
 * Get virtual visits data
 * @returns {Promise<Object>} Promise that resolves with the virtual visits data
 */
async function getVirtualVisits() {
    return await loadData('data/virtual-visits.json');
}

/**
 * Get mini-games data
 * @returns {Promise<Object>} Promise that resolves with the mini-games data
 */
async function getMiniGames() {
    return await loadData('data/mini-games.json');
}

/**
 * Get music clips data
 * @returns {Promise<Object>} Promise that resolves with the music clips data
 */
async function getMusicClips() {
    return await loadData('data/music-clips.json');
}

/**
 * Get email info data
 * @returns {Promise<Object>} Promise that resolves with the email info data
 */
async function getEmailInfo() {
    return await loadData('data/email-info.json');
}

/**
 * Get music clues data
 * @returns {Promise<Object>} Promise that resolves with the music clues data
 */
async function getMusicClues() {
    return await loadData('data/music-clues.json');
}

/**
 * Get final instructions data
 * @returns {Promise<Object>} Promise that resolves with the final instructions data
 */
async function getFinalInstructions() {
    return await loadData('data/final-instructions.json');
}

/**
 * Clear the data cache
 * @param {string} [filePath] - Optional specific file path to clear from cache
 */
function clearCache(filePath) {
    if (filePath) {
        delete dataCache[filePath];
    } else {
        Object.keys(dataCache).forEach(key => delete dataCache[key]);
    }
}

// Export functions for use in other scripts
export {
    loadData,
    getQuoteFragments,
    getVirtualVisits,
    getMiniGames,
    getMusicClips,
    getEmailInfo,
    getMusicClues,
    getFinalInstructions,
    clearCache
};

// For backward compatibility with non-module scripts
window.dataLoader = {
    loadData,
    getQuoteFragments,
    getVirtualVisits,
    getMiniGames,
    getMusicClips,
    getEmailInfo,
    getMusicClues,
    getFinalInstructions,
    clearCache
};
