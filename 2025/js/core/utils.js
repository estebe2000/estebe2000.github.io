/**
 * Utilities Module
 * Common utility functions used across the site
 */

/**
 * Shuffle array (Fisher-Yates algorithm)
 * @param {Array} array - The array to shuffle
 * @returns {Array} The shuffled array
 */
function shuffleArray(array) {
    const newArray = [...array]; // Create a copy to avoid modifying the original
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

/**
 * Generate random number between min and max (inclusive)
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number} Random integer between min and max
 */
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Format time (seconds) to MM:SS
 * @param {number} seconds - Time in seconds
 * @returns {string} Formatted time string (MM:SS)
 */
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

/**
 * Create element with attributes and content
 * @param {string} tag - HTML tag name
 * @param {Object} attributes - Element attributes
 * @param {string} content - Element inner HTML
 * @returns {HTMLElement} The created element
 */
function createElement(tag, attributes = {}, content = '') {
    const element = document.createElement(tag);
    
    // Set attributes
    for (const [key, value] of Object.entries(attributes)) {
        if (key === 'className') {
            element.className = value;
        } else {
            element.setAttribute(key, value);
        }
    }
    
    // Set content
    if (content) {
        element.innerHTML = content;
    }
    
    return element;
}

/**
 * Add fade-in animation to element
 * @param {HTMLElement} element - The element to animate
 */
function fadeIn(element) {
    element.classList.add('fade-in');
}

/**
 * Debounce function to limit how often a function can be called
 * @param {Function} func - The function to debounce
 * @param {number} wait - The time to wait in milliseconds
 * @returns {Function} Debounced function
 */
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    };
}

/**
 * Throttle function to limit how often a function can be called
 * @param {Function} func - The function to throttle
 * @param {number} limit - The time limit in milliseconds
 * @returns {Function} Throttled function
 */
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * Load an image and return a promise
 * @param {string} src - Image source URL
 * @returns {Promise<HTMLImageElement>} Promise that resolves with the loaded image
 */
function loadImage(src) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
        img.src = src;
    });
}

/**
 * Check if an element is in viewport
 * @param {HTMLElement} element - The element to check
 * @returns {boolean} True if element is in viewport
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/**
 * Normalize text for comparison (remove punctuation, extra spaces, case)
 * @param {string} text - The text to normalize
 * @returns {string} Normalized text
 */
function normalizeText(text) {
    return text.toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // Remove accents
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '') // Remove punctuation
        .replace(/\s+/g, ' ') // Replace multiple spaces with a single space
        .trim();
}

/**
 * Get URL parameters as an object
 * @returns {Object} Object containing URL parameters
 */
function getUrlParams() {
    const params = {};
    const queryString = window.location.search.substring(1);
    const pairs = queryString.split('&');
    
    for (const pair of pairs) {
        if (pair === '') continue;
        const parts = pair.split('=');
        params[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1] || '');
    }
    
    return params;
}

/**
 * Add event listener with automatic cleanup
 * @param {HTMLElement} element - Element to add listener to
 * @param {string} event - Event name
 * @param {Function} handler - Event handler
 */
function addEventListenerWithCleanup(element, event, handler) {
    element.addEventListener(event, handler);
    
    // Store cleanup function
    if (!window._eventCleanupFunctions) {
        window._eventCleanupFunctions = [];
    }
    
    window._eventCleanupFunctions.push(() => {
        element.removeEventListener(event, handler);
    });
}

/**
 * Clean up all event listeners registered with addEventListenerWithCleanup
 */
function cleanupEventListeners() {
    if (window._eventCleanupFunctions) {
        window._eventCleanupFunctions.forEach(cleanup => cleanup());
        window._eventCleanupFunctions = [];
    }
}

// Export functions for use in other scripts
export {
    shuffleArray,
    randomInt,
    formatTime,
    createElement,
    fadeIn,
    debounce,
    throttle,
    loadImage,
    isInViewport,
    normalizeText,
    getUrlParams,
    addEventListenerWithCleanup,
    cleanupEventListeners
};

// For backward compatibility with non-module scripts
window.utils = {
    shuffleArray,
    randomInt,
    formatTime,
    createElement,
    fadeIn,
    debounce,
    throttle,
    loadImage,
    isInViewport,
    normalizeText,
    getUrlParams
};
